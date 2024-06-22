<template>
  <div class="w-full overflow-x-auto">
    <h1 class="text-4xl font-bold my-16 ml-10">Métricas del trabajador</h1>

    <!-- Renderizar gráficos de línea para cada competencia -->
    <div class="container mx-auto">
      <Carousel :data="evaluations" />
    </div>
    <!-- Gráfico Radar - Promedios de Competencias -->
    <div class="container mx-auto w-1/3">
      <div>
        <h1>Promedio</h1>
        <RadarChart v-if="chartData" :data="chartData" :options="chartOptions" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import RadarChart from '@/components/RadarChart.vue';
import Carousel from '@/components/Carousel.vue';
import { api } from '@/api';  

const chartData = ref(null);
let delayed;
const chartOptions = {
  responsive: true,
  scales: {
    r: {
      beginAtZero: true,
      max: 1,
    }
  },
  title: {
    display: true,
    text: 'Evaluación del trabajador',
  },
  animation: {
    onComplete: () => {
      delayed = true;
    },
    delay: (context) => {
      let delay = 0;
      if (context.type === 'data' && context.mode === 'default' && !delayed) {
        delay = context.dataIndex * 300 + context.datasetIndex * 100;
      }
      return delay;
    }
  },
  plugins:{
    htmlLegend: {
      containerID: 'legend-container',
    },
    legend: {
      display: true,
    },
  },
};

const evaluations = ref([]);

const fetchDataset = async () => {
  try {
    const response = await api.get('/evaluations/worker/793');
    evaluations.value = response.data;
    console.log('Evaluation data:', evaluations.value);

    const labels = [
      'Adaptabilidad al Cambio',
      'Conducta Segura',
      'Dinamismo y Energía',
      'Efectividad Personal',
      'Iniciativa',
      'Trabajo Bajo Presión'
    ];

    // Inicializar sumas
    const totalEvaluation = {
      adaptability_to_change: 0,
      safe_conduct: 0,
      dynamism_energy: 0,
      personal_effectiveness: 0,
      initiative: 0,
      working_under_pressure: 0
    };

    // Sumar cada evaluación
    evaluations.value.forEach(evaluation => {
      totalEvaluation.adaptability_to_change += evaluation.adaptability_to_change;
      totalEvaluation.safe_conduct += evaluation.safe_conduct;
      totalEvaluation.dynamism_energy += evaluation.dynamism_energy;
      totalEvaluation.personal_effectiveness += evaluation.personal_effectiveness;
      totalEvaluation.initiative += evaluation.initiative;
      totalEvaluation.working_under_pressure += evaluation.working_under_pressure;
    });

    // Calcular promedios
    const numberOfEvaluations = evaluations.value.length;
    const averageEvaluation = {
      adaptability_to_change: totalEvaluation.adaptability_to_change / numberOfEvaluations,
      safe_conduct: totalEvaluation.safe_conduct / numberOfEvaluations,
      dynamism_energy: totalEvaluation.dynamism_energy / numberOfEvaluations,
      personal_effectiveness: totalEvaluation.personal_effectiveness / numberOfEvaluations,
      initiative: totalEvaluation.initiative / numberOfEvaluations,
      working_under_pressure: totalEvaluation.working_under_pressure / numberOfEvaluations
    };

    chartData.value = {
      labels: labels,
      datasets: [
        {
          label: 'Promedio de evaluaciones del trabajador',
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: '#0A2E59',
          pointBackgroundColor: 'rgba(54, 162, 235, 1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(54, 162, 235, 1)',
          data: [
            averageEvaluation.adaptability_to_change,
            averageEvaluation.safe_conduct,
            averageEvaluation.dynamism_energy,
            averageEvaluation.personal_effectiveness,
            averageEvaluation.initiative,
            averageEvaluation.working_under_pressure
          ]
        }
      ]
    };
  } catch (error) {
    console.error('Error fetching evaluation data:', error);
  }
};

onMounted(fetchDataset);
</script>