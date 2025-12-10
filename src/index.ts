export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // For SPA routes (no file extension), always return index.html so routing works.
    if (!url.pathname.match(/\.[a-zA-Z0-9]+$/)) {
      const indexUrl = new URL('/', url.origin);
      const indexRequest = new Request(indexUrl.toString(), request);
      return env.ASSETS.fetch(indexRequest);
    }

    // Otherwise, serve static assets normally.
    return env.ASSETS.fetch(request);
  },
};
