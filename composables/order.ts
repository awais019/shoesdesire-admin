import useUserStore from "~/stores/user";

type Order = {
  id: string;
  userName: string;
  productsCount: number;
  totalItems: number;
  total: number;
  status: string;
  items: Item[];
};

type Item = {
  id: string;
  productName: string;
  quantity: number;
  price: number;
  size: number;
  color: string;
};

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

  function getOrder(id: string) {
    const { token } = useUserStore();

    return useFetch<{
      message: string;
      data: Order;
    }>(`/orders/${id}`, {
      headers: {
        "x-auth-token": token,
      },
      baseURL,
    });
  }

  function updateOrderStatus(orderId: string, status: string) {
    const { token } = useUserStore();

    return useFetch<{
      message: string;
    }>(`/orders/${orderId}`, {
      method: "PUT",
      headers: {
        "x-auth-token": token,
      },
      baseURL,
      body: {
        status,
      },
    });
  }

  return {
    getOrders,
    getOrder,
    updateOrderStatus,
  };
};
