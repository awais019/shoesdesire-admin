<script setup lang="ts">
  const { data } = await useOrder().getOrders();
</script>

<template>
  <section v-if="data">
    <table
      class="border-collapse border-platinum caption-bottom w-full align-top text-left table-fixed"
    >
      <thead>
        <tr class="border-solid border-b border-flash_white">
          <th class="py-2">User Name</th>
          <th class="py-2">No. of Products</th>
          <th class="py-2">Total Items</th>
          <th class="py-2">Total Price</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="order in data.data"
          :key="order.id"
          class="border-b border-flash_white"
        >
          <td class="py-2">
            <nuxt-link :to="`/orders/${order.id}`" class="hover:underline">
              {{ order.userName }}
            </nuxt-link>
          </td>
          <td class="py-2">{{ order.productsCount }}</td>
          <td class="py-2">{{ order.totalItems }}</td>
          <td class="py-2 truncate">{{ order.total.toFixed(2) }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<style scoped></style>
