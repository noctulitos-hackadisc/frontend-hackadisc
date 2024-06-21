<template>
  <div :class="`p-6 bg-white rounded-lg ${shadowClass}`">
    <h2 class="text-lg font-semibold mb-2">{{ title }}</h2>
    <p class="text-3xl font-bold">{{ value }}</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  title: String,
  value: [String, Number],
  shadowClass: {
    type: String,
    default: 'shadow-md'
  }
})
</script>