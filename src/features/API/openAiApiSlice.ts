// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ChatCompletionCreateParams, } from 'openai/resources';

const baseUrl = process.env.REACT_APP_OPEN_AI_API_URL;

interface IMessage {
  role: string;
  content: string;
}

interface IChoice {
  finish_reason: string
  message: IMessage
}

interface IChatCompletionsResponse {
  choices: IChoice[];
  model: string;
}

// Define a service using a base URL and expected endpoints
export const openAiApiSlice = createApi({
  reducerPath: 'openAiApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    fetchChatCompletions: builder.mutation<string[], string>({
      query: (input) => ({
        url: '/chat/completions',
        method: 'POST',
        body : {
          messages: [
            { role: 'user', content: input } as IMessage,
          ],
          model: "gpt-3.5-turbo"
        } as ChatCompletionCreateParams,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.REACT_APP_OPEN_AI_API_KEY}`,
        },
      }),
      transformResponse: (baseQueryReturnValue) => {
        const response = baseQueryReturnValue as IChatCompletionsResponse;
        const content = response.choices[0].message.content;
        if (content) {
          return content.split(", ");
        }
        // Return null if there are no choices
        return [];
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useFetchChatCompletionsMutation
} = openAiApiSlice