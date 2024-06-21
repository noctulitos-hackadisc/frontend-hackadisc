<template>
  <div>
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Chart, PolarAreaController, RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js'

// Registrar los componentes necesarios para el gráfico de área polar
Chart.register(PolarAreaController, RadialLinearScale, ArcElement, Tooltip, Legend)

const props = defineProps({
  data: Object,
  options: Object
})

const canvas = ref(null)

onMounted(() => {
  new Chart(canvas.value, {
    type: 'polarArea',
    data: props.data,
    options: props.options
  })
})
</script>

<style scoped>
canvas {
  max-width: 100%;
}
</style>