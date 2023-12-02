export const useAuth = () => {
  const { baseURL } = useRuntimeConfig().public;

  let token = useLocalStorage("token", "");

  async function signin(email: string, password: string) {
    const { data, error } = await useFetch<{
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

    if (error.value) {
      throw createError({
        ...error.value,
        statusMessage: error.value.message,
      });
    }
    token = ref(data.value?.data.token || "");

    useLocalStorage("token", token.value);

    return navigateTo("/");
  }

  const isLoggedIn = computed(() => !!token.value);

  return {
    signin,
    token,
    isLoggedIn,
  };
};
