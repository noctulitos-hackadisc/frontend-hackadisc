<template>
  <div>
    <canvas ref="radarCanvas" />
  </div>
</template>

<script setup>
import { ref, onMounted} from "vue";
import { Chart, registerables } from "chart.js";

const props = defineProps({
  data: Object,
  options: Object,
});

const radarCanvas = ref(null);

Chart.register(...registerables);

onMounted(() => {
  new Chart(radarCanvas.value, {
    type: "radar",
    data: props.data,
    options: props.options,
  });
});
</script>
