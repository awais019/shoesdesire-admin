import useUserStore from "~/stores/user";

export const useSizeColor = () => {
  const { baseURL } = useRuntimeConfig().public;

  function createSize(size: number) {
    const { token } = useUserStore();
    return useFetch("/size", {
      method: "POST",
      body: {
        size,
      },
      headers: {
        "x-auth-token": token,
      },
      baseURL,
    });
  }

  function getAllSizes() {
    const { token } = useUserStore();
    return useFetch<{
      data: {
        id: string;
        size: number;
      }[];
      message: string;
    }>("/size", {
      method: "GET",
      headers: {
        "x-auth-token": token,
      },
      baseURL,
    });
  }

  function createColor(name: string, hex: string) {
    const { token } = useUserStore();
    return useFetch("/color", {
      method: "POST",
      body: {
        name,
        hex,
      },
      headers: {
        "x-auth-token": token,
      },
      baseURL,
    });
  }

  function getAllColors() {
    const { token } = useUserStore();
    return useFetch<{
      data: {
        id: string;
        name: string;
        hex: string;
      }[];
      message: string;
    }>("/color", {
      method: "GET",
      headers: {
        "x-auth-token": token,
      },
      baseURL,
    });
  }

  return {
    createSize,
    getAllSizes,
    createColor,
    getAllColors,
  };
};
