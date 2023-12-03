export const useAuth = () => {
  const { baseURL } = useRuntimeConfig().public;

  async function signin(email: string, password: string) {
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

  return {
    signin,
  };
};
