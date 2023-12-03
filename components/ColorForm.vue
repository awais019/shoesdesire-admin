<script setup lang="ts">
  const { createColor } = useSizeColor();

  const emits = defineEmits<{
    (e: "close"): void;
  }>();

  async function handleSubmit(values: any) {
    await createColor(values.name, values.hex);
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
    <h1 class="text-2xl font-semibold">New Color</h1>
    <span class="text-sm text-gainsboro">add a new color</span>

    <FormKit
      type="text"
      name="name"
      placeholder="name"
      label="Name"
      outer-class="w-full mt-8 mb-4"
      input-class="bg-anti_flash_white rounded-md border-none"
      label-class="block mb-2 font-medium"
      message-class="text-red-400 text-sm"
      validation="required"
      :validation-messages="{
        required: 'The name field is required',
      }"
    />

    <FormKit
      type="text"
      name="hex"
      placeholder="hex value (e.g. #000000)"
      label="Hex Value"
      outer-class="w-full mt-8 mb-4"
      input-class="bg-anti_flash_white rounded-md border-none"
      label-class="block mb-2 font-medium"
      message-class="text-red-400 text-sm"
      validation="required"
      pattern="^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"
      :validation-messages="{
        required: 'The hex field is required',
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
