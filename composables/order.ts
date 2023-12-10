import useUserStore from "~/stores/user";

export const useOrder = () => {
  const { baseURL } = useRuntimeConfig().public;

  function getOrders() {
    const { token } = useUserStore();

    return useFetch<{
      message: string;
      data: {
        id: string;
        userName: string;
        productsCount: number;
        totalItems: number;
        total: number;
      }[];
    }>("/orders", {
      headers: {
        "x-auth-token": token,
      },
      baseURL,
    });
  }

  return {
    getOrders,
  };
};
