// Single-player static app. The worker just hands off to the asset binding.
export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  },
};
