# Why?

Template for `NEXTJS` REST api application using `next-connect`. `Nextjs` routing architucture is not ideal like `express`. So you know!!.

## How?

- Branch main is a strter
- Branch per-route is using `next-connect` instance per route. That is we keep `Nextjs` routing intact while using `nc` to handle the rest. Usually route file is optional catch-all route `[[...slug]].ts`
- Branch like-express is handling the entire API from one `/api/[[...slug]].ts` file.
