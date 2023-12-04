<script setup lang="ts">
  const { data } = await useCategory().getAll();
</script>

<template>
  <section v-if="data">
    <table
      class="border-collapse border-platinum caption-bottom w-full align-top text-left table-fixed"
    >
      <thead>
        <tr class="border-solid border-b border-flash_white">
          <th class="py-2">Image</th>
          <th class="py-2">Name</th>
          <th class="py-2">Slug</th>
          <th class="py-2">Description</th>
          <th class="py-2">No. of products</th>
          <th class="py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="category in data.data"
          :key="category.id"
          class="border-b border-flash_white"
        >
          <td class="py-2">
            <div class="border border-anti_flash_white p-0.5 w-10 h-10">
              <img
                :src="category.imageUrl"
                :alt="category.name"
                class="object-cover w-full h-full"
              />
            </div>
          </td>
          <td class="py-2">{{ category.name }}</td>
          <td class="py-2">{{ category.slug }}</td>
          <td class="py-2 truncate">{{ category.description }}</td>
          <td class="py-2">{{ category.productsCount }}</td>
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
