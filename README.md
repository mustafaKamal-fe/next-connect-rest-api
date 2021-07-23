# Why?

Template for `NEXTJS` REST api application using `next-connect`. `Nextjs` routing architucture is not ideal like `express`. So you know!!.

## How?

- Branch main is a starter
- Branch per-route is using `next-connect` instance per route. That is we keep `Nextjs` routing intact while using `nc` to handle the rest.
- Branch per folder is we keep one level of `Nextjs` routing (on folder under `/api/`) and the entire routing is handled using `[[...slug]]` optional catch-all route for that spesific route.
- Branch like-express is handling the entire API from one `/api/[[...slug]].ts` file.
