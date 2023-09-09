import { createLanguageModel, createJsonTranslator, processRequests } from "typechat";
import { PublicationMetadataV2Input } from "@/gql/graphql";
import { schema } from "@/gql/string-graphql";
const model = createLanguageModel({process.env.EXPO_PUBLIC_OPENAI_MODEL});
const translator = createJsonTranslator<PublicationMetadataV2Input>(model, schema, "PublicationMetadataV2Input");
const originTranslator = createJsonTranslator<String>(model, "", "");



export async function processRequests(request:string)  {
    const response = await translator.translate(request);
    if (!response.success) {
        console.log(response.message);
        return;
    }
    const PublicationMetadata = response.data;
    const normalResponse = await originTranslate(request);

};
