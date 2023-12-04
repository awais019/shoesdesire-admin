<script lang="ts" setup>
  import type { Category } from "~/types/category";
  import { ref, computed } from "vue";
  import {
    Combobox,
    ComboboxInput,
    ComboboxButton,
    ComboboxOptions,
    ComboboxOption,
    TransitionRoot,
  } from "@headlessui/vue";
  import { CheckIcon, ChevronUpDownIcon } from "@heroicons/vue/20/solid";

  const emits = defineEmits<{
    (e: "selected", categories: Category[]): void;
  }>();

  const { data } = await useCategory().getAll();

  const categories = data.value?.data || [];

  const selected = ref<Category | null>(null);

  const selectedCategories = ref<Category[]>([]);

  let query = ref("");

  let filteredCategories = computed(() =>
    query.value === ""
      ? categories
      : categories.filter((category) =>
          category.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.value.toLowerCase().replace(/\s+/g, ""))
        )
  );

  const values = computed(() => {
    return selectedCategories.value.reduce((acc, category, index) => {
      if (index == selectedCategories.value.length - 1)
        return acc + category.name;
      return acc + category.name + ", ";
    }, "");
  });

  watch(selected, () => {
    if (selected.value) selectedCategories.value.push(selected.value);
    emits("selected", selectedCategories.value);
  });
</script>

<template>
  <div class="">
    <Combobox v-model="selected">
      <div class="relative mt-1">
        <div
          class="relative w-full cursor-default overflow-hidden rounded-lg bg-anti_flash_white text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm"
        >
          <ComboboxInput
            class="w-full border-none focus:ring-0 bg-anti_flash_white"
            id="categories"
            @change="query = $event.target.value"
            :display-value="() => values || 'Select a category'"
          >
          </ComboboxInput>
          <ComboboxButton
            class="absolute inset-y-0 right-0 flex items-center pr-2"
          >
            <ChevronUpDownIcon
              class="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </ComboboxButton>
        </div>
        <TransitionRoot
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          @after-leave="query = ''"
        >
          <ComboboxOptions
            class="absolute mt-1 max-h-48 z-10 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
          >
            <div
              v-if="filteredCategories.length === 0 && query !== ''"
              class="relative cursor-default select-none px-4 py-2 text-gray-700"
            >
              Nothing found.
            </div>

            <ComboboxOption
              v-for="category in filteredCategories"
              as="template"
              :key="category.id"
              :value="category"
              v-slot="{ selected, active }"
            >
              <li
                class="relative cursor-default select-none py-2 pl-10 pr-4"
                :class="{
                  'bg-teal-600 text-white': active,
                  'text-gray-900': !active,
                }"
              >
                <span
                  class="block truncate"
                  :class="{ 'font-medium': selected, 'font-normal': !selected }"
                >
                  {{ category.name }}
                </span>
                <span
                  v-if="selected"
                  class="absolute inset-y-0 left-0 flex items-center pl-3"
                  :class="{ 'text-white': active, 'text-teal-600': !active }"
                >
                  <CheckIcon class="h-5 w-5" aria-hidden="true" />
                </span>
              </li>
            </ComboboxOption>
          </ComboboxOptions>
        </TransitionRoot>
      </div>
    </Combobox>
  </div>
</template>
