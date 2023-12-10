<script lang="ts" setup>
  const props = defineProps<{
    id: string;
  }>();

  const { data } = useOrder().getOrder(props.id);

  const status = ref("pending");

  async function changeStatus() {
    const { data } = useOrder().updateOrderStatus(props.id, status.value);
    if (data.value?.message) {
      alert(data.value.message);
    }
  }
</script>

<template>
  <div class="flex flex-wrap gap-x-60 gap-y-8" v-if="data">
    <div>
      <h3 class="font-bold">User Name</h3>
      <p>{{ data?.data.userName }}</p>
    </div>
    <div>
      <h3 class="font-bold">No of Products</h3>
      <p>{{ data.data.productsCount }}</p>
    </div>
    <div>
      <h3 class="font-bold">Total Price</h3>
      <p>{{ data.data.total.toFixed(2) }}</p>
    </div>
    <div>
      <h3 class="font-bold">Status</h3>
      <p class="lowercase">{{ data.data.status }}</p>
    </div>
    <div>
      <h3 class="font-bold">Total Items</h3>
      <p>{{ data.data.totalItems }}</p>
    </div>
  </div>
  <div v-if="data" class="mt-8 flex flex-wrap gap-20">
    <div v-for="item in data.data.items" :key="item.id">
      <h3 class="font-bold">Product Name</h3>
      <p>{{ item.productName }}</p>
      <h3 class="font-bold">Product Price</h3>
      <p>{{ item.price }}</p>
      <h3 class="font-bold">Product Quantity</h3>
      <p>{{ item.quantity }}</p>
      <h3 class="font-bold">Product Total</h3>
      <p>{{ (item.price * item.quantity).toFixed(2) }}</p>
      <h3 class="font-bold">Color</h3>
      <p>{{ item.color }}</p>
      <h3 class="font-bold">Size</h3>
      <p>{{ item.size }}</p>
    </div>
  </div>
  <div>
    <h3 class="font-bold">Order Status</h3>
    <select name="status" id="status" v-model="status" class="w-60">
      <option value="pending">Pending</option>
      <option value="shipped">Shipped</option>
      <option value="delivered">Delivered</option>
    </select>
    <div
      class="flex justify-end mt-8 bg-indigo-600 max-w-fit text-white px-4 py-2 rounded"
    >
      <button @click.prevent="changeStatus">Save</button>
    </div>
  </div>
</template>

<style scoped></style>
