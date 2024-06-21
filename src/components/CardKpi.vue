<template>
  <div
    class="p-6 rounded-lg shadow-lg bg-gradient-to-l from-secundaryLime to-green-500"
  >
    <h2 class="text-lg font-semibold mb-2">{{ title }}</h2>
    <p class="text-3xl font-bold">{{ value }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  value: [String, Number],
});
</script>
