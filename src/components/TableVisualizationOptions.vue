<template>
  <div class="inline-flex space-x-4">
    <button
      v-if="props.showSubcompanies"
      :disabled="props.subcompanies === 0"
      @click="$router.push({ name: 'SubCompany', params: { id: props.id } })"
      class="inline-flex space-x-4 p-2 border rounded-md text-black"
      :class="{
        'hover:bg-slate-100': props.subcompanies !== 0 && !disabled,
        'bg-gray-300 cursor-not-allowed': props.subcompanies === 0,
        'opacity-50': props.subcompanies === 0,
      }"
    >
      <BriefcaseBusiness class="size-5 mr-2" />
      Sub Empresas
    </button>
    <button
      :disabled="!hasWorkers"
      @click="$router.push({ name: 'Workers', params: { id: props.id } })"
      class="inline-flex space-x-4 p-2 border rounded-md text-black"
      :class="{
        'hover:bg-slate-100': props.hasWorkers && !disabled,
        'bg-gray-300 cursor-not-allowed': !props.hasWorkers,
        'opacity-50': !props.hasWorkers,
      }"
    >
      <User class="size-5 mr-2" />
      Trabajadores
    </button>
  </div>
</template>

<script setup>
import { BriefcaseBusiness, User } from "lucide-vue-next";

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  subcompanies: {
    type: Number,
    required: true,
  },
  hasWorkers: {
    type: Boolean,
    required: true,
  },
  showSubcompanies: {
    type: Boolean,
    default: true,
  },
});

const disabled = props.subcompanies === 0;
</script>

<style scoped>
.button[disabled] {
  background-color: #ccc;
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
