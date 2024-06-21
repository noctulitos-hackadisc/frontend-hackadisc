<template>
    <div>
      <canvas ref="lineCanvas"></canvas>
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
      const lineCanvas = ref(null);
  
      onMounted(() => {
        new Chart(lineCanvas.value, {
          type: 'line',
          data: props.data,
          options: props.options
        });
      });
  
      return {
        lineCanvas
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