<template>
  <div class="w-full overflow-x-auto">
    <h1 class="text-4xl font-bold my-16 ml-10">Dashboard de Métricas</h1>

    <!-- Renderizar gráficos de línea para cada competencia -->
    <div class="container mx-auto">
      <!-- <Carousel :data="dataset" /> -->
    </div>

    <h1 class="text-4xl font-bold my-16 ml-10">Promedios de Competencias</h1>

    <!-- Gráfico Radar - Promedios de Competencias -->
    <div class="container mx-auto">
      <div class="my-10">
        <!-- <RadarChart /> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import RadarChart from "@/components/RadarChart.vue";
import Carousel from "@/components/Carousel.vue";
import { api } from "@/api";
import { elements } from "chart.js";

// datasets and settings
const dataset = ref([])
const radarChartData = ref({})

const radarChartOptions = {
  responsive: true,
  title: {
    display: true,
    text: "Promedios de las competencias de Todas las empresas",
  },
  elements: {
    line: {
      borderWidth: 2,
    },
  },
}

const fetchDataset = async () => {
  try {
    const response = await api.get("/companies");
    dataset.value = response.data;
  } catch (error) {
    console.error(error);
  }
};

const processChartData = (data) => {
  const labels = [
    'Adaptabilidad al cambio',
    'Conducta segura',
    'Dinamismo y energía',
    'Efectividad personal',
    'Iniciativa',
    'Trabajo bajo presión',
  ];
  const evaluations = data.evaluations;

  const averageScores = labels.map((label) => {
    // const total = evaluations.reduce((sum, eval) => sum + eval[label.toLowerCase().replace(/ /g, '_')], 0 );
    return total / evaluations.length;
  })
}




// KPI
const TotalEvaluations = dataset.length;



onMounted(() => {
  fetchDataset();
});
</script>

