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

  const { data } = await useSizeColor().getAllColors();

  const colors = data.value?.data || [];

  const selected = ref<{
    id: string;
    name: string;
    hex: string;
  } | null>(null);

  const selectedColors = ref<{ id: string; name: string; hex: string }[]>([]);

  let query = ref("");

  let filteredColors = computed(() =>
    query.value === ""
      ? colors
      : colors.filter(
          (color) => color.name == query.value.toLowerCase().replace(/\s+/g, "")
        )
  );

  const values = computed(() => {
    return selectedColors.value.reduce((acc, color, index) => {
      if (index == selectedColors.value.length - 1) return acc + color.name;
      return acc + color.name + ", ";
    }, "");
  });

  watch(selected, () => {
    if (selected.value) selectedColors.value.push(selected.value);
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
            id="colors"
            @change="query = $event.target.value"
            :display-value="() => values || 'Select a color'"
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
              v-if="filteredColors.length === 0 && query !== ''"
              class="relative cursor-default select-none px-4 py-2 text-gray-700"
            >
              Nothing found.
            </div>

            <ComboboxOption
              v-for="color in filteredColors"
              as="template"
              :key="color.id"
              :value="color"
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
                  class="truncate flex gap-2 capitalize"
                  :class="{ 'font-medium': selected, 'font-normal': !selected }"
                >
                  <span
                    class="w-4 h-4 block rounded-full"
                    :style="{ backgroundColor: color.hex }"
                  ></span>
                  {{ color.name }}
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
