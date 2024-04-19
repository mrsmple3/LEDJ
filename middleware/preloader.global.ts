import { useWebsiteStore } from "#imports";

export default defineNuxtRouteMiddleware((to, from) => {
  const websiteStore = useWebsiteStore();
  if (to.hash === "" || to.hash === "#main") {
    websiteStore.preLoader = true;
    setTimeout(() => {
      websiteStore.preLoader = false;
    }, 1000);
  } else if (to.hash !== "") {
    if (from.path !== "/") {
      websiteStore.preLoader = true;
      setTimeout(() => {
        websiteStore.preLoader = false;
      }, 1000);
    }
  }
});
