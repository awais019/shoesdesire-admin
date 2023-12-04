import useUserStore from "~/stores/user";

export const useProduct = () => {
  const { baseURL } = useRuntimeConfig().public;

  function create(data: FormData) {
    const { token } = useUserStore();

    return useFetch("/products", {
      method: "POST",
      body: data,
      headers: {
        "x-auth-token": token,
      },
      baseURL,
    });
  }

  return {
    create,
  };
};
