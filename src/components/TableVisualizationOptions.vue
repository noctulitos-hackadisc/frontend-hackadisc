<template>
  <div class="inline-flex space-x-4">
    <button
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
      class="inline-flex space-x-4 p-2 border hover:bg-slate-100 rounded-md text-black"
    >
      <User class="size-5 mr-2" />
      Trabajadores
    </button>
  </div>
</template>

<script setup>
import { BriefcaseBusiness, User } from "lucide-vue-next";
import { defineProps } from "vue";

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  subcompanies: {
    type: Number,
    required: true,
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
