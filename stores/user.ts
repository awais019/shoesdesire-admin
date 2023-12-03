import type { User } from "~/types/user";

export default defineStore(
  "userStore",
  () => {
    const token = ref("");
    const user = ref<User | null>(null);

    const { signin: _signin, me } = useAuth();

    async function signin(email: string, password: string) {
      const { data } = await _signin(email, password);
      if (data.value) {
        token.value = data.value.data.token;
      }
      const { data: _data, error } = await me();
      if (_data.value) {
        user.value = _data.value.data;
      }
      return navigateTo("/");
    }

    const isSignedIn = computed(() => !!token.value);

    return {
      token,
      user,
      signin,
      isSignedIn,
    };
  },
  {
    persist: true,
  }
);
