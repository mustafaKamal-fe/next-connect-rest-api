# Why?

Template for `NEXTJS` REST api application using `next-connect`. `Nextjs` routing architucture is not ideal like `express`. So you know!!.

## How?

- Branch main is a starter
- Branch per-route is using `next-connect` instance per route. That is we keep `Nextjs` routing intact while using `nc` to handle the rest.
- Branch per folder is same as above but with smarter routing solution that looks similar to `express`.
- Branch like-express is handling the entire API from one `/api/[[...slug]].ts` file. NOT RECOMMENDED.. SEE ISSUE I COMMENTED ON HERE [https://github.com/hoangvvo/next-connect/issues/131]
