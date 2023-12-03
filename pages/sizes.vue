<script lang="ts" setup>
  const controller = useModal();
</script>

<template>
  <div>
    <h1 class="text-2xl font-medium">Sizes</h1>
    <p class="text-gray text-sm">Create and manage product sizes</p>
    <div class="my-8 bg-white p-6 rounded-md shadow-block">
      <div class="flex justify-between items-center mb-8">
        <h2 class="text-sm font-bold uppercase">Size List</h2>
        <button
          class="bg-light_azure py-2 px-3 text-white font-medium rounded-md hover:bg-azure"
          @click="controller.open"
        >
          Add new Size
        </button>
      </div>
      <SizesTable />
    </div>
  </div>
  <teleport to="body">
    <SharedModal :controller="controller">
      <SizeForm @close="controller.close" />
    </SharedModal>
  </teleport>
</template>

<style scoped></style>
