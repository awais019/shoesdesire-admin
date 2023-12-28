<script setup lang="ts">
  definePageMeta({
    layout: false,
  });

  const { $socket } = useNuxtApp();

  onMounted(() => {
    $socket.connect();
  });

  onBeforeRouteLeave(() => {
    if ($socket.connected) {
      $socket.disconnect();
    }
  });
</script>

<template>
  <main
    class="h-screen basis-3/4 border-l-[0.5px] border-neutral-gallery flex items-center justify-center"
  >
    <p class="text-neutral-dusty-gray">
      Select a conversation to start messaging
    </p>
  </main>
</template>

<style scoped></style>
