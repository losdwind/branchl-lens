import { createLanguageModel, createJsonTranslator } from "typechat";
import { Publication } from "@/api/lens/generated";
import { EXPO_PUBLIC_OPENAI_MODEL } from "@env"
import { CreatePostArgs } from "../lens/mutate/CreatePostArgs";
import { useQuery } from "@tanstack/react-query";
import { useChatGPTCompletion } from "./useChatGPTCompletion";
const model = createLanguageModel({ EXPO_PUBLIC_OPENAI_MODEL });

const schema = `
type CreatePostArgs = {
    image: File;
    title: string;
    description: string;
    content: string;
};
`

const translator = createJsonTranslator<CreatePostArgs>(model, schema, "CreatePostArgs");


export async function processRequests(request: string | CreatePostArgs): Promise<string | CreatePostArgs | undefined> {
    const requestJson = JSON.stringify(request)
    const response = await translator.translate(requestJson);
    if (!response.success) {
        console.log(response.message);
        return "";
    }
    const postArgs = response.data;
    if (postArgs.content === "") {
        console.log("I didn't understand the following:");
        const { data: text } = useChatGPTCompletion(requestJson)
        return text;
    }
    return postArgs;
};
