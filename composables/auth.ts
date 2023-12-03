import useUserStore from "~/stores/user";
import type { User } from "~/types/user";

export const useAuth = () => {
  const { baseURL } = useRuntimeConfig().public;

  function signin(email: string, password: string) {
    return useFetch<{
      data: {
        token: string;
      };
    }>("/auth/signin", {
      method: "POST",
      body: {
        email,
        password,
      },
      baseURL,
    });
  }

  function me() {
    const { token } = useUserStore();

    return useFetch<{
      data: User;
      message: string;
    }>("/auth/me", {
      method: "GET",
      headers: {
        "x-auth-token": token,
      },
      baseURL,
    });
  }

  return {
    signin,
    me,
  };
};
