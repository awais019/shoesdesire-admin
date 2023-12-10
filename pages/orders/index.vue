<script lang="ts" setup></script>

<template>
  <div>
    <h1 class="text-2xl font-medium">Orders</h1>
    <p class="text-gray text-sm">Check newly placed orders</p>
    <div class="my-8 bg-white p-6 rounded-md shadow-block">
      <div class="flex justify-between items-center mb-8">
        <h2 class="text-sm font-bold uppercase">Orders List</h2>
      </div>
      <OrdersTable />
    </div>
  </div>
</template>

<style scoped></style>
