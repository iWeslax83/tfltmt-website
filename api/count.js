import Redis from 'ioredis';

const redis = new Redis(process.env.REDIS_URL);

export default async function handler(req, res) {
  try {
    const newCount = await redis.incr('hits');
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send(newCount.toString());
  } catch (error) {
    res.status(500).send("Redis Error");
  }
}
