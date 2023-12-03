<script setup lang="ts"></script>

<template>
  <FormKit
    type="form"
    form-class="p-6 bg-dark_gunmetal rounded-md"
    :actions="false"
    message-class="text-red-400 text-sm"
  >
    <h1 class="text-2xl font-semibold">New category</h1>
    <span class="text-sm text-gainsboro">add a new category</span>
    <div class="flex gap-4 mt-8 mb-4">
      <FormKit
        type="text"
        placeholder="Category Name"
        label="Name"
        input-class="bg-charleston_green rounded-md border-none"
        label-class="block mb-2 font-medium"
        message-class="text-red-400 text-sm"
        validation="required|min:3|max:255"
        :validation-messages="{
          required: 'The name field is required',
          min: 'The name must be at least 3 characters',
          max: 'The name may not be greater than 255 characters',
        }"
      />
      <FormKit
        type="text"
        placeholder="Category Description"
        label="Description"
        message-class="text-red-400 text-sm"
        input-class="bg-charleston_green rounded-md border-none"
        label-class="block mb-2 font-medium"
        validation="required|min:3|max:255"
        :validation-messages="{
          required: 'The description field is required',
          min: 'The description must be at least 3 characters',
          max: 'The description may not be greater than 255 characters',
        }"
      />
    </div>
    <FormKit
      type="file"
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
      outer-class="mt-8 bg-light_azure hover:bg-azure p-2 text-center mx-8 rounded-md"
      input-class="font-bold text-xl"
    />
  </FormKit>
</template>

<style scoped></style>
