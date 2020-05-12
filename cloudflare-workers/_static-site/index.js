import { getAssetFromKV } from "@cloudflare/kv-asset-handler";

addEventListener("fetch", event => {
  try {
    event.respondWith(handleEvent(event));
  } catch (e) {
    event.respondWith(new Response("Internal Error", { status: 500 }));
  }
});

async function handleEvent(event) {
  let options = {};
  try {
    return await getAssetFromKV(event, options);
  } catch (e) {
    try {
      let notFoundResponse = await getAssetFromKV(event, {
        mapRequestToAsset: req =>
          new Request(`${new URL(req.url).origin}/404/index.html`, req)
      });
      return new Response(notFoundResponse.body, {
        ...notFoundResponse,
        status: 404
      });
    } catch (e) {
      return new Response(e.message || e.toString(), { status: 500 });
    }
  }
}
