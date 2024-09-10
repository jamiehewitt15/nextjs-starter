import { NextRequest, NextResponse } from 'next/server'
import { Mistral } from '@mistralai/mistralai'

// Initialize Mistral client with API key from environment variables
const apiKey = process.env.MISTRAL_API_KEY
if (!apiKey) {
  throw new Error('MISTRAL_API_KEY is not set in environment variables.')
}

const client = new Mistral({ apiKey })

// Define the serverless function to handle the POST request
export async function POST(req: NextRequest) {
  try {
    // Extract prompt and agentId from the request body
    const { prompt, agentId } = await req.json()

    // Validate the prompt and agentId inputs
    if (!prompt || typeof prompt !== 'string') {
      return NextResponse.json(
        { error: 'Invalid prompt input' },
        { status: 400 }
      )
    }

    if (!agentId || typeof agentId !== 'string') {
      return NextResponse.json(
        { error: 'Invalid agentId input' },
        { status: 400 }
      )
    }

    // Call the Mistral chat endpoint with the provided prompt and agentId
    const chatResponse = await client.agents.complete({
      agentId,
      messages: [{ role: 'user', content: prompt }]
    })

    // Safely access chatResponse.choices with checks
    if (
      !chatResponse ||
      !chatResponse.choices ||
      chatResponse.choices.length === 0
    ) {
      return NextResponse.json(
        { error: 'Failed to get a valid response from Mistral' },
        { status: 500 }
      )
    }

    // Extract the response content from the LLM
    const responseContent = chatResponse.choices[0]?.message?.content

    // Check if the response content is valid
    if (!responseContent) {
      return NextResponse.json(
        { error: 'Failed to retrieve content from Mistral response' },
        { status: 500 }
      )
    }

    // Return the response content as a JSON response
    return NextResponse.json({ response: responseContent })
  } catch (error) {
    console.error('Error in Mistral API call:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
