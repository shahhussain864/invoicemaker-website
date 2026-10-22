// Sends every visitor and crawler to one address of each page, so Google doesn't find the same page at
// www.billingpos.app and billingpos.app and report one of them as an "Alternate page with proper canonical tag".
const CANONICAL_HOST = "billingpos.app";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === "www." + CANONICAL_HOST) {
      url.hostname = CANONICAL_HOST;
      url.protocol = "https:";
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
