<script lang="ts" setup>
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
    (
      e: "selected",
      sizes: {
        id: string;
        size: number;
      }[]
    ): void;
  }>();

  const { data } = await useSizeColor().getAllSizes();

  const sizes = data.value?.data || [];

  let selected = ref<{
    id: string;
    size: number;
  } | null>(null);

  const selectedSizes = ref<{ id: string; size: number }[]>([]);

  let query = ref("");

  let filteredSizes = computed(() =>
    query.value === ""
      ? sizes
      : sizes.filter((size) => size.size == parseInt(query.value))
  );

  const values = computed(() => {
    return selectedSizes.value.reduce((acc, size, index) => {
      if (index == selectedSizes.value.length - 1) return acc + size.size;
      return acc + size.size + ", ";
    }, "");
  });

  watch(selected, () => {
    if (selected.value) selectedSizes.value.push(selected.value);
    emits("selected", selectedSizes.value);
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
            id="sizes"
            @change="query = $event.target.value"
            :display-value="() => values || 'Select a size'"
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
            class="absolute mt-1 max-h-48 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
          >
            <div
              v-if="filteredSizes.length === 0 && query !== ''"
              class="relative cursor-default select-none px-4 py-2 text-gray-700"
            >
              Nothing found.
            </div>

            <ComboboxOption
              v-for="size in filteredSizes"
              as="template"
              :key="size.id"
              :value="size"
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
                  {{ size.size }}
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
