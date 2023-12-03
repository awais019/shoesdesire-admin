<script setup lang="ts">
  const { data } = await useSizeColor().getAllSizes();
</script>

<template>
  <section v-if="data">
    <table
      class="border-collapse border-platinum caption-bottom w-full align-top text-left"
    >
      <thead>
        <tr class="border-solid border-b border-flash_white">
          <th class="py-2">Size</th>
          <th class="py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="size in data.data"
          :key="size.id"
          class="border-b border-flash_white"
        >
          <td class="py-2">{{ size.size }}</td>
          <td class="py-2 flex gap-2">
            <button
              class="bg-light_azure py-2 px-4 text-white font-medium rounded-md hover:bg-azure"
            >
              Edit
            </button>

            <button
              class="bg-red-400 py-2 px-4 text-white font-medium rounded-md hover:bg-red-500"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<style scoped></style>
