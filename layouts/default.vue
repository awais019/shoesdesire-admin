<script lang="ts" setup>
  import useUserStore from "~/stores/user";

  const { user } = storeToRefs(useUserStore());
</script>

<template>
  <div class="h-screen w-screen">
    <header class="bg-white shadow-header px-2 h-14">
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
    <div class="flex">
      <aside class="basis-1/5 bg-white shadow-sidebar px-2 py-4">
        <nav>
          <ul class="flex flex-col gap-2">
            <li>
              <nuxt-link
                to="/categories"
                class="py-4 px-2 flex gap-1 items-center hover:border-l hover:border-eucalyptus"
              >
                <IconsCategory />
                Categories
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                to="/products"
                class="py-4 px-2 flex gap-1 items-center hover:border-l hover:border-eucalyptus"
              >
                <IconsProduct class="w-6 h-6" />
                Products
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                to="/sizes"
                class="py-4 px-2 flex gap-1 items-center hover:border-l hover:border-eucalyptus"
              >
                <IconsSize class="w-6 h-6" />
                Sizes
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                to="/colors"
                class="py-4 px-2 flex gap-1 items-center hover:border-l hover:border-eucalyptus"
              >
                <IconsColor class="w-6 h-6" />
                Colors
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                to="/orders"
                class="py-4 px-2 flex gap-1 items-center hover:border-l hover:border-eucalyptus"
              >
                <IconsOrder class="w-6 h-6" />
                Orders
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                to="/messages"
                class="py-4 px-2 flex gap-1 items-center hover:border-l hover:border-eucalyptus"
              >
                <IconsMessages class="w-6 h-6" />
                Messages
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </aside>
      <main class="py-4 px-3 basis-4/5">
        <slot />
      </main>
    </div>
  </div>
</template>

<style scoped>
  main {
    height: calc(100vh - 3.5rem);
  }
</style>
