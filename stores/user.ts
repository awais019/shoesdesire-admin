export default defineStore(
  "userStore",
  () => {
    const token = ref("");

    const { signin: _signin } = useAuth();

    async function signin(email: string, password: string) {
      const { data } = await _signin(email, password);
      if (data.value) {
        token.value = data.value.data.token;
      }
      return navigateTo("/");
    }

    const isSignedIn = computed(() => !!token.value);

    return {
      token,
      signin,
      isSignedIn,
    };
  },
  {
    persist: true,
  }
);
