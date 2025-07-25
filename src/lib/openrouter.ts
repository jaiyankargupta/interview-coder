// OpenRouter API integration utility
import axios from 'axios';

const OPENROUTER_API_KEY =
    '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';

const OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions';

export async function openrouterChat({
    messages,
    model = 'openai/gpt-3.5-turbo', // You can change this to any supported model
    temperature = 0.7,
    max_tokens = 1024,
}: {
    messages: { role: 'user' | 'system' | 'assistant'; content: string }[];
    model?: string;
    temperature?: number;
    max_tokens?: number;
}) {
    try {
        const response = await axios.post(
            OPENROUTER_API_URL,
            {
                model,
                messages,
                temperature,
                max_tokens,
            },
            {
                headers: {
                    'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
                    'Content-Type': 'application/json',
                },
            }
        );
        return response.data;
    } catch (error: any) {
        if (error.response) {
            throw new Error(
                `OpenRouter API error: ${error.response.status} ${error.response.data?.error || error.response.statusText}`
            );
        }
        throw error;
    }
} 