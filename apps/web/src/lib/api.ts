import { createReactQueryApi } from "@terrier/api";
import { env } from "~/lib/env";

export const $api = createReactQueryApi(env.VITE_API_URL);
