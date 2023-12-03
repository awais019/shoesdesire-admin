import useUserStore from "~/stores/user";

export default defineNuxtRouteMiddleware((to, from) => {
  const { isSignedIn } = useUserStore();

  if (isSignedIn) {
    return "/";
  }
});
