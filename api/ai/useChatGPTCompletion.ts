import { EXPO_PUBLIC_OPENAI_API_KEY } from "@env";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: EXPO_PUBLIC_OPENAI_API_KEY, // defaults to process.env["OPENAI_API_KEY"]
    dangerouslyAllowBrowser: true
});

export async function fetchCompletion(prompt: string) {
    const completion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: prompt }],
        model: 'gpt-3.5-turbo',
    })
    console.log(completion.choices);
    return completion.choices[0].message.content;

}


export function useChatGPTCompletion(prompt: string): UseQueryResult<string, Error> {
    return useQuery(["completeMessage", prompt], () => fetchCompletion(prompt));
}