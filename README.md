# terrier.build

## Development

First update `schema.d.ts` with

```sh
bun generate-schema
```

This expects the `terrier-backend` repository to be in the same parent directory.

Copy `.env.example` to `.env` and fill in the appropriate `BASE_URL` Then use `turbo run dev` to run the project.
