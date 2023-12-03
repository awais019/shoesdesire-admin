<script setup lang="ts">
  const { data } = await useSizeColor().getAllColors();
</script>

<template>
  <section v-if="data">
    <table
      class="border-collapse border-platinum caption-bottom w-full align-top text-left"
    >
      <thead>
        <tr class="border-solid border-b border-flash_white">
          <th class="py-2">Name</th>
          <th class="py-2">Hex Value</th>
          <th class="py-2">Color</th>
          <th class="py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="color in data.data"
          :key="color.id"
          class="border-b border-flash_white"
        >
          <td class="py-2 capitalize">{{ color.name }}</td>
          <td class="py-2">{{ color.hex }}</td>
          <td class="py-2">
            <span
              class="w-4 h-4 rounded-full block"
              :style="{ backgroundColor: color.hex }"
            ></span>
          </td>

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
