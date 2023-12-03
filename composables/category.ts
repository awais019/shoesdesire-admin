import useUserStore from "~/stores/user";

export const useCategory = () => {
  const { baseURL } = useRuntimeConfig().public;

  function create(data: FormData) {
    const { token } = useUserStore();
    return useFetch("/categories", {
      method: "POST",
      body: data,
      headers: {
        "x-auth-token": token,
      },
      baseURL,
    });
  }
  return { create };
};
