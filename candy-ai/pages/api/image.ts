import { NextApiRequest, NextApiResponse } from 'next';
import { OpenAI } from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const { prompt } = req.body;
  try {
    const response = await openai.images.generate({
      model: 'dall-e-3',
      prompt,
      n: 1,
      size: '512x512',
    });
    const imageUrl = response.data[0].url;
    res.status(200).json({ imageUrl });
  } catch (err) {
    res.status(500).json({ error: 'Bildgenerierung fehlgeschlagen' });
  }
}