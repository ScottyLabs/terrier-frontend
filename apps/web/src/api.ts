import type { paths } from "@/schema";
import createFetchClient from "openapi-fetch";
import createClient from "openapi-react-query";

export const fetchClient = createFetchClient<paths>({
    baseUrl: process.env.BASE_URL,
});
export const $api = createClient(fetchClient);
