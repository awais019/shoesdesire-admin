import useUserStore from "~/stores/user";
import type { Category } from "~/types/category";

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

  function getAll() {
    const { token } = useUserStore();
    return useFetch<{
      data: Category[];
      message: string;
    }>("/categories", {
      method: "GET",
      baseURL,
      headers: {
        "x-auth-token": token,
      },
    });
  }

  return { create, getAll };
};
