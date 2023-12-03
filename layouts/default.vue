<script lang="ts" setup>
  import useUserStore from "~/stores/user";

  const { user } = storeToRefs(useUserStore());
</script>

<template>
  <div class="h-screen w-screen">
    <header class="bg-dark_gunmetal shadow-header px-2 h-14">
      <div class="flex items-center h-full justify-between">
        <nuxt-link to="/" class="text-2xl font-semibold">
          <span class="">Shoes Desire</span>
        </nuxt-link>
        <div v-if="user" class="flex items-center gap-2">
          <img
            src="~/assets/images/user.jpg"
            alt="admin"
            class="rounded-full"
            height="36"
            width="36"
          />
          <p>
            {{ user.firstName }}
            {{ user.lastName }}
          </p>
        </div>
      </div>
    </header>
    <main class="flex">
      <aside class="basis-1/5 bg-dark_gunmetal shadow-sidebar px-2 py-4">
        <nav>
          <ul class="flex flex-col gap-2">
            <li>
              <nuxt-link
                to="/categories"
                class="py-4 px-2 flex gap-1 items-center hover:bg-onyx hover:border-l hover:border-eucalyptus"
              >
                <IconsCategory />
                Categories
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                to="/products"
                class="py-4 px-2 flex gap-1 items-center hover:bg-onyx hover:border-l hover:border-eucalyptus"
              >
                <IconsProduct class="w-6 h-6" />
                Products
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </aside>
      <slot />
    </main>
  </div>
</template>

<style scoped>
  main {
    height: calc(100vh - 3.5rem);
  }
</style>
