import useUserStore from "~/stores/user";
import type { Product } from "~/types/product";

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

  function getAll() {
    const { token } = useUserStore();
    return useFetch<{
      data: Product[];
      message: string;
    }>("/products", {
      method: "GET",
      headers: {
        "x-auth-token": token,
      },
      baseURL,
    });
  }

  return {
    create,
    getAll,
  };
};
