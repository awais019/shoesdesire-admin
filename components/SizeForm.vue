<script setup lang="ts">
  const { createSize } = useSizeColor();

  const emits = defineEmits<{
    (e: "close"): void;
  }>();

  async function handleSubmit(values: any) {
    await createSize(parseInt(values.size));
    emits("close");
  }
</script>

<template>
  <FormKit
    type="form"
    form-class="p-6 bg-white rounded-md w-96"
    :actions="false"
    message-class="text-red-400 text-sm"
    @submit="handleSubmit"
  >
    <h1 class="text-2xl font-semibold">New Size</h1>
    <span class="text-sm text-gainsboro">add a new size</span>

    <FormKit
      type="number"
      name="size"
      placeholder="Size"
      label="Size"
      outer-class="w-full mt-8 mb-4"
      input-class="bg-anti_flash_white rounded-md border-none"
      label-class="block mb-2 font-medium"
      message-class="text-red-400 text-sm"
      validation="required"
      :validation-messages="{
        required: 'The size field is required',
      }"
    />

    <FormKit
      type="submit"
      outer-class="mt-8 text-white bg-light_azure hover:bg-azure p-2 text-center mx-8 rounded-md"
      input-class="font-bold text-xl"
    />
  </FormKit>
</template>

<style scoped></style>
