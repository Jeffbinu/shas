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
            "SHASHONK started with a simple idea: what if building digital products didn’t have to feel complicated? What if businesses—big or small—had a team they could rely on to turn their ideas into something smart, clean, and genuinely impactful? We’re not here just to deliver projects—we’re here to understand your goals, challenge the usual, and build digital experiences that actually make a difference.  Whether it’s crafting a slick website, building intelligent AI solutions, or shaping a brand from scratch, we bring energy, curiosity, and a “let’s make it happen” attitude to every project. And while our tools and technology keep evolving, one thing hasn’t changed: we’re still here to help ideas grow into something unforgettable.",
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
