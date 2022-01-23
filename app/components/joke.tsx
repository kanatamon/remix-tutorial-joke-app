import { Form, Link } from 'remix'
import { Joke } from '@prisma/client'

export function JokeView({
  joke,
  canDelete = true,
}: {
  joke: Pick<Joke, 'name' | 'content'>
  canDelete?: Boolean
}) {
  return (
    <div>
      <p>Here's your hilarious joke:</p>
      <p>{joke.content}</p>
      <Link to=".">{joke.name} Permalink</Link>
      <Form method="post">
        <input type="hidden" name="_method" value="delete" />
        <button type="submit" className="button" disabled={!canDelete}>
          Delete
        </button>
      </Form>
    </div>
  )
}
