import { kv } from '@vercel/kv';

export default async function handler(req, res) {
  // 1. Increment the visitor count in Redis
  const newCount = await kv.incr('visitor_count');

  // 2. Return ONLY the number as plain text for the ESP32
  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send(newCount.toString());
}
