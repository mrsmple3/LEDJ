export default function () {
  const websiteStore = useWebsiteStore();
  websiteStore.preLoader = true;
  setTimeout(() => {
    websiteStore.preLoader = false;
  }, 1000);
}
