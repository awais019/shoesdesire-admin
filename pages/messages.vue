<script setup lang="ts">
  import useMessageStore from "~/stores/messages";

  definePageMeta({
    layout: false,
  });

  const { getConversationsList } = useMessageStore();

  await getConversationsList();
  onMounted(async () => {});
</script>

<template>
  <section class="bg-white max-w-screen-3xl flex">
    <aside class="p-8 basis-1/4">
      <h1 class="text-3xl font-bold text-azure mb-8">Messages</h1>
      <MessagesConversations />
    </aside>
    <NuxtPage />
  </section>
</template>

<style scoped></style>
