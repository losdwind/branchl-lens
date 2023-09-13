import { useMutation } from "@tanstack/react-query";
import { useSDK, useStorageUpload } from "@thirdweb-dev/react";
import {
    PublicationMainFocus,
    useCreatePostTypedDataMutation,
} from "@/api/lens/generated";
import useLensUser from "@/api/lens/auth/useLensUser";
import { signTypedDataWithOmmittedTypename, splitSignature } from "./helpers";
import { v4 as uuidv4 } from "uuid";
import { LENS_CONTRACT_ABI, LENS_CONTRACT_ADDRESS } from "../contract";
import useLogin from "../auth/useLogin";
import { CreatePostArgs } from "./CreatePostArgs";


export function useCreatePost() {
    const { mutateAsync: requestTypedData } = useCreatePostTypedDataMutation();
    const { mutateAsync: uploadToIpfs } = useStorageUpload();
    const { profile } = useLensUser();
    const sdk = useSDK();
    const { mutateAsync: loginUser } = useLogin();

    async function createPost({
        image,
        title,
        description,
        content,
    }: CreatePostArgs) {
        console.log("createPost", image, title, description, content);
        // 0. Login
        await loginUser();

        // 0. Upload the image to IPFS
        const imageIpfsUrl = (await uploadToIpfs({ data: [image] }))[0];

        console.log("imageIpfsUrl", imageIpfsUrl);

        // 0B) Upload the actual content to IPFS
        // This is going to be a Object which contains the image field as well
        const postMetadata = {
            version: "2.0.0",
            mainContentFocus: PublicationMainFocus.TextOnly,
            metadata_id: uuidv4(),
            description: description,
            locale: "en-US",
            content: content,
            external_url: null,
            image: imageIpfsUrl,
            imageMimeType: null,
            name: title,
            attributes: [],
            tags: [],
        };

        const postMetadataIpfsUrl = (
            await uploadToIpfs({ data: [postMetadata] })
        )[0];

        console.log("postMetadataIpfsUrl", postMetadataIpfsUrl);

        // 1. Ask Lens to give us the typed data
        const typedData = await requestTypedData({
            request: {
                collectModule: {
                    freeCollectModule: {
                        followerOnly: false,
                    },
                },
                referenceModule: {
                    followerOnlyReferenceModule: false,
                },
                contentURI: postMetadataIpfsUrl,
                profileId: profile?.defaultProfile?.id,
            },
        });

        const { domain, types, value } = typedData.createPostTypedData.typedData;

        if (!sdk) return;

        // 2. Sign the typed data
        const signature = await signTypedDataWithOmmittedTypename(
            sdk,
            domain,
            types,
            value
        );

        const { v, r, s } = splitSignature(signature.signature);

        // 3. Use the signed typed data to send the transaction to the smart contract
        const lensHubContract = await sdk.getContractFromAbi(
            LENS_CONTRACT_ADDRESS,
            LENS_CONTRACT_ABI
        );

        // Destructure the stuff we need out of the typedData.value field
        const {
            collectModule,
            collectModuleInitData,
            contentURI,
            deadline,
            profileId,
            referenceModule,
            referenceModuleInitData,
        } = typedData.createPostTypedData.typedData.value;

        const result = await lensHubContract.call("postWithSig", [{
            profileId: profileId,
            contentURI: contentURI,
            collectModule: collectModule,
            collectModuleInitData: collectModuleInitData,
            referenceModule: referenceModule,
            referenceModuleInitData: referenceModuleInitData,
            sig: {
                v: v,
                r: r,
                s: s,
                deadline: deadline
            }
        }]);

        console.log(result);
    }

    return useMutation(createPost);
}
