<script setup lang="ts">
  import type { Category } from "~/types/category";

  const emits = defineEmits<{
    (e: "close"): void;
  }>();

  const { create } = useProduct();

  const noOfImages = ref(1);

  const selectedCategories = ref<Category[]>([]);
  const selectedSizes = ref<{ id: string; size: number }[]>([]);
  const selectedColors = ref<{ id: string; name: string; hex: string }[]>([]);

  async function handleSubmit(values: any) {
    values.categories = selectedCategories.value.map((category) => category.id);
    values.sizes = selectedSizes.value.map((size) => size.id);
    values.colors = selectedColors.value.map((color) => color.id);

    const body = new FormData();
    for (const key in values) {
      if (key.includes("image")) {
        body.append(key, values[key][0].file);
      } else if (key === "categories" || key === "sizes" || key === "colors") {
        body.append(key, JSON.stringify(values[key]));
      } else {
        body.append(key, values[key]);
      }
    }
    const { data } = await create(body);

    if (data.value) {
      emits("close");
    }
  }
</script>

<template>
  <FormKit
    type="form"
    form-class="p-6 bg-white rounded-md"
    :actions="false"
    message-class="text-red-400 text-sm"
    @submit="handleSubmit"
  >
    <h1 class="text-2xl font-semibold">New Product</h1>
    <span class="text-sm text-gainsboro">add a new product</span>
    <div class="flex gap-4 mt-8 mb-4">
      <FormKit
        type="text"
        name="name"
        placeholder="Product Name"
        label="Name"
        input-class="bg-anti_flash_white rounded-md border-none"
        label-class="block mb-2 font-medium"
        message-class="text-red-400 text-sm"
        validation="required|length:3"
        :validation-messages="{
          required: 'The name field is required',
          length: 'The name must be at least 3 characters',
        }"
      />
      <FormKit
        type="text"
        name="description"
        placeholder="Product Description"
        label="Description"
        message-class="text-red-400 text-sm"
        input-class="bg-anti_flash_white rounded-md border-none"
        label-class="block mb-2 font-medium"
        validation="required|length:3"
        :validation-messages="{
          required: 'The description field is required',
          min: 'The description must be at least 3 characters',
        }"
      />
      <FormKit
        type="number"
        name="price"
        placeholder="Product price"
        label="Price"
        input-class="bg-anti_flash_white rounded-md border-none"
        label-class="block mb-2 font-medium"
        message-class="text-red-400 text-sm"
        validation="required|min:10"
        :validation-messages="{
          required: 'The price field is required',
          min: 'The price must be at least 10',
        }"
      />
    </div>
    <div class="flex gap-4 mt-8 mb-4">
      <FormKit
        type="number"
        name="stock"
        placeholder="Product Stock"
        label="Stock"
        message-class="text-red-400 text-sm"
        input-class="bg-anti_flash_white rounded-md border-none"
        label-class="block mb-2 font-medium"
        validation="required|min:1"
        :validation-messages="{
          required: 'The stock field is required',
          min: 'The stock must be at least 1',
        }"
      />
      <div class="grow">
        <label for="categories" class="block mb-2 font-medium"
          >Categories</label
        >
        <CategoriesAutoComplete
          @selected="(_categories) => (selectedCategories = _categories)"
        />
      </div>
    </div>
    <div class="flex gap-4 mt-8 mb-4">
      <div class="grow">
        <label for="sizes" class="block mb-2 font-medium">Sizes</label>
        <SizesAutoComplete @selected="(_sizes) => (selectedSizes = _sizes)" />
      </div>
      <div class="grow">
        <label for="colors" class="block mb-2 font-medium">Colors</label>
        <ColorsAutoComplete
          @selected="(_colors) => (selectedColors = _colors)"
        />
      </div>
    </div>
    <div class="flex gap-2 flex-col">
      <FormKit
        v-for="index in noOfImages"
        :key="index"
        type="file"
        :name="`image${index}`"
        :label="`Image${index}`"
        accept="image/x-png,image/gif,image/jpeg"
        message-class="text-red-400 text-sm"
        label-class="block mb-2 font-medium"
        file-name-class="hidden"
        file-remove-class="text-red-400"
        validation="required"
        :validation-messages="{
          required: 'The image field is required',
        }"
      />
    </div>
    <button
      @click.prevent="noOfImages++"
      class="bg-anti_flash_white w-6 font-bold h-6 block mt-2 rounded-full"
    >
      +
    </button>
    <FormKit
      type="submit"
      outer-class="mt-8 text-white bg-light_azure hover:bg-azure p-2 text-center rounded-md"
      input-class="font-bold text-xl"
    />
  </FormKit>
</template>

<style scoped></style>
