<script setup lang="ts">
  const { create } = useCategory();

  const emits = defineEmits<{
    (e: "close"): void;
  }>();

  async function handleSubmit(values: any) {
    const body = new FormData();
    for (const key in values) {
      if (key === "image") {
        body.append(key, values[key][0].file);
      } else {
        body.append(key, values[key]);
      }
    }

    const { data } = create(body);

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
        <CategoriesAutoComplete />
      </div>
    </div>
    <div class="flex gap-4 mt-8 mb-4">
      <div class="grow">
        <label for="sizes" class="block mb-2 font-medium">Sizes</label>
        <SizesAutoComplete />
      </div>
    </div>
    <FormKit
      type="file"
      name="image"
      label="Image"
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
    <FormKit
      type="submit"
      outer-class="mt-8 text-white bg-light_azure hover:bg-azure p-2 text-center mx-60 rounded-md"
      input-class="font-bold text-xl"
    />
  </FormKit>
</template>

<style scoped></style>
