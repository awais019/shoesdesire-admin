<script lang="ts" setup>
  import useUserStore from "~/stores/user";

  definePageMeta({
    middleware: ["auth"],
  });

  const { user } = storeToRefs(useUserStore());
</script>

<template>
  <h1 class="text-2xl">{{ user }}</h1>
</template>

<style scoped></style>
