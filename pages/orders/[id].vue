<script lang="ts" setup>
  const route = useRoute();

  const { id } = route.params as { id: string };
</script>

<template>
  <div>
    <h1 class="text-2xl font-medium">Order</h1>
    <p class="text-gray text-sm">Check order details</p>
    <div class="my-8 bg-white p-6 rounded-md shadow-block">
      <OrderDetails :id="id" />
    </div>
  </div>
</template>

<style scoped></style>
