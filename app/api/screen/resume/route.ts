import { NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

export async function POST(req: Request) {
  const formData = await req.formData()
  const resume = formData.get('resume') as File
  const jobId = formData.get('jobId') as string

  // Extract text from PDF (simplified)
  const buffer = Buffer.from(await resume.arrayBuffer())
  const text = buffer.toString('utf-8') // Use pdf-parse in production

  const prompt = `Score this resume against the job: ${jobId}. Return JSON with score (0-100), summary, red_flags, interview_questions.`

  const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [{ role: 'user', content: prompt }],
  })

  const result = JSON.parse(completion.choices[0].message.content!)

  return NextResponse.json(result)
}
