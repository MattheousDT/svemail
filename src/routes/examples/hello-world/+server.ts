import { render } from "$lib";
import HelloWorld from "./hello_world.svelte";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async ({ url }) => {
	return new Response(render(HelloWorld, { name: url.searchParams.get("name") ?? undefined }), {
		headers: { "content-type": `text/html; charset="UTF-8"` },
	});
};
