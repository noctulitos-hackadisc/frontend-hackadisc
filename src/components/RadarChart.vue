<template>
  <div>
    <canvas ref="radarCanvas"></canvas>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { Chart, registerables } from 'chart.js';

// Registra todos los componentes necesarios de Chart.js
Chart.register(...registerables);

export default {
  props: {
    data: Object,
    options: Object
  },
  setup(props) {
    const radarCanvas = ref(null);

    onMounted(() => {
      new Chart(radarCanvas.value, {
        type: 'radar',
        data: props.data,
        options: props.options
      });
    });

    return {
      radarCanvas
    };
  }
};
</script>

<style scoped>
canvas {
  width: 100%;
  height: 400px; /* Ajusta la altura según tus necesidades */
}
</style>