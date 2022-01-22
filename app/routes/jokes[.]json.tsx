import type { LoaderFunction } from 'remix'
import { db } from '~/utils/db.server'

export const loader: LoaderFunction = async () => {
  const jokes = await db.joke.findMany({
    take: 100,
    orderBy: { createdAt: 'desc' },
    include: { jokester: { select: { username: true } } },
  })
  const jsonString = JSON.stringify(jokes)
  return new Response(jsonString, {
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': String(Buffer.byteLength(jsonString)),
    },
  })
}
