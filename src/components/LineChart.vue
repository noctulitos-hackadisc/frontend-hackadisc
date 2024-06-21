<template>
  <div>
    <canvas ref="lineCanvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Chart, registerables } from "chart.js";

const props = defineProps({
  data: Object,
  options: Object,
});

const lineCanvas = ref(null);

Chart.register(...registerables);

onMounted(() => {
  new Chart(lineCanvas.value, {
    type: "line",
    data: props.data,
    options: props.options,
  });
});
</script>

<style scoped>
canvas {
  width: 100%;
  height: 400px;
}
</style>
