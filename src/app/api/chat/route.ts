import { NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are a professional business assistant for Shashonk Tech. Keep replies concise, polite, and business-oriented.",
        },
        {
          role: "user",
          content: message,
        },
      ],
      temperature: 0.4,
      max_tokens: 150,
    });

    const reply =
      completion.choices[0]?.message?.content ||
      "Sorry, I couldn’t process that.";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("OpenAI error:", error);
    return NextResponse.json(
      { reply: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
