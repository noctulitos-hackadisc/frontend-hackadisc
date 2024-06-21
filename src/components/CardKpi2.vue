<template>
  <div
    class="p-6 rounded-lg shadow-lg bg-gradient-to-l from-complementary5 to-blue-500"
  >
    <h2 class="text-lg font-semibold mb-2">{{ title }}</h2>
    <p v-if="props.whole_number" class="text-3xl font-bold">{{ value }}</p>
    <p v-else class="text-3xl font-bold">{{ value * 100 }} %</p>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  value: [String, Number],
  whole_number: Boolean,
});
</script>
