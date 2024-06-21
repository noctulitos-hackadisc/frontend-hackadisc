<template>
    <div>
      <h1 class="text-4xl font-bold my-16 ml-10">Dashboard de Métricas</h1>
  
      <div class="container mx-auto">
        <!-- Renderizar gráficos de línea para cada competencia -->
        <div v-for="(competencia, index) in competencias" :key="index" class="mb-10">
          <h2 class="text-xl mb-4">{{ competencia.replace(/_/g, ' ').toUpperCase() }}</h2>
          <LineChart :data="getLineChartData(competencia)" :options="lineChartOptions" />
        </div>
  
        <!-- Gráfico Radar - Promedios de Competencias -->
        <div class="mb-10">
          <h2 class="text-xl mb-4">Promedios de Competencias</h2>
          <RadarChart :data="radarChartData" :options="radarChartOptions" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import LineChart from '@/components/LineChart.vue';
  import RadarChart from '@/components/RadarChart.vue';
  
  // Dataset de ejemplo
  const dataset = [
  {
    user_id: 6,
    adaptability_to_change: 0.32,
    safe_conduct: 0.48,
    dynamism_energy: 0.41,
    personal_effectiveness: 0.15,
    initiative: 0.89,
    working_under_pressure: 0.56,
    date: "2024-06-09 05:01:42",
  },
  {
    user_id: 6,
    adaptability_to_change: 0.03,
    safe_conduct: 0.07,
    dynamism_energy: 0.77,
    personal_effectiveness: 0.11,
    initiative: 0.04,
    working_under_pressure: 0.55,
    date: "2024-02-29 04:44:22",
  },
  {
    user_id: 7,
    adaptability_to_change: 0.16,
    safe_conduct: 0.44,
    dynamism_energy: 0.4,
    personal_effectiveness: 0.18,
    initiative: 0.68,
    working_under_pressure: 0.26,
    date: "2024-05-11 10:31:52",
  },
  {
    user_id: 7,
    adaptability_to_change: 0.94,
    safe_conduct: 0.91,
    dynamism_energy: 0.55,
    personal_effectiveness: 0.59,
    initiative: 0.41,
    working_under_pressure: 0.85,
    date: "2024-02-23 20:26:29",
  },
  {
    user_id: 7,
    adaptability_to_change: 0.08,
    safe_conduct: 0.03,
    dynamism_energy: 0.41,
    personal_effectiveness: 0.08,
    initiative: 0.26,
    working_under_pressure: 0.85,
    date: "2024-02-11 11:25:01",
  },
  {
    user_id: 7,
    adaptability_to_change: 0.92,
    safe_conduct: 0.83,
    dynamism_energy: 0.48,
    personal_effectiveness: 0.05,
    initiative: 0.99,
    working_under_pressure: 0.48,
    date: "2024-05-30 18:57:38",
  },
  {
    user_id: 7,
    adaptability_to_change: 0.34,
    safe_conduct: 0.77,
    dynamism_energy: 0.39,
    personal_effectiveness: 0.5,
    initiative: 0.08,
    working_under_pressure: 0.44,
    date: "2024-02-02 23:56:17",
  },
  {
    user_id: 7,
    adaptability_to_change: 0.55,
    safe_conduct: 0.32,
    dynamism_energy: 0.51,
    personal_effectiveness: 0.64,
    initiative: 0.01,
    working_under_pressure: 0.01,
    date: "2024-04-01 08:05:16",
  },
  {
    user_id: 7,
    adaptability_to_change: 0.86,
    safe_conduct: 0.63,
    dynamism_energy: 0.18,
    personal_effectiveness: 0.42,
    initiative: 0.16,
    working_under_pressure: 0.25,
    date: "2024-06-11 06:47:22",
  },
  {
    user_id: 7,
    adaptability_to_change: 0.04,
    safe_conduct: 1,
    dynamism_energy: 0.32,
    personal_effectiveness: 0.23,
    initiative: 0.98,
    working_under_pressure: 0.16,
    date: "2024-03-04 21:42:15",
  },
  {
    user_id: 7,
    adaptability_to_change: 0.95,
    safe_conduct: 0.74,
    dynamism_energy: 0.84,
    personal_effectiveness: 0.23,
    initiative: 0.61,
    working_under_pressure: 0.69,
    date: "2024-04-01 12:47:07",
  },
  {
    user_id: 474,
    adaptability_to_change: 0.9,
    safe_conduct: 0.07,
    dynamism_energy: 0.48,
    personal_effectiveness: 0.04,
    initiative: 0.75,
    working_under_pressure: 0.99,
    date: "2024-06-10 00:03:32",
  },
  {
    user_id: 474,
    adaptability_to_change: 0.53,
    safe_conduct: 0.89,
    dynamism_energy: 0.35,
    personal_effectiveness: 0.76,
    initiative: 0.69,
    working_under_pressure: 0.03,
    date: "2024-01-01 07:52:10",
  },
  {
    user_id: 474,
    adaptability_to_change: 0.32,
    safe_conduct: 0.7,
    dynamism_energy: 0.31,
    personal_effectiveness: 0.91,
    initiative: 0,
    working_under_pressure: 0.44,
    date: "2024-04-28 03:16:45",
  },
  {
    user_id: 474,
    adaptability_to_change: 0.29,
    safe_conduct: 0.32,
    dynamism_energy: 0.24,
    personal_effectiveness: 0.13,
    initiative: 0.04,
    working_under_pressure: 0.16,
    date: "2024-03-12 10:46:15",
  },
  {
    user_id: 474,
    adaptability_to_change: 0.51,
    safe_conduct: 0.16,
    dynamism_energy: 0.43,
    personal_effectiveness: 0.42,
    initiative: 0.49,
    working_under_pressure: 0.84,
    date: "2024-05-19 21:57:00",
  },
  {
    user_id: 488,
    adaptability_to_change: 0.22,
    safe_conduct: 0.93,
    dynamism_energy: 0.4,
    personal_effectiveness: 0.54,
    initiative: 0.98,
    working_under_pressure: 0.74,
    date: "2024-04-06 07:02:03",
  },
  {
    user_id: 491,
    adaptability_to_change: 0.17,
    safe_conduct: 0.33,
    dynamism_energy: 0.8,
    personal_effectiveness: 0.28,
    initiative: 0.16,
    working_under_pressure: 0.27,
    date: "2024-02-25 18:01:27",
  },
  {
    user_id: 491,
    adaptability_to_change: 0.39,
    safe_conduct: 0.78,
    dynamism_energy: 0.3,
    personal_effectiveness: 0,
    initiative: 0.55,
    working_under_pressure: 0.14,
    date: "2024-02-13 11:59:35",
  },
  {
    user_id: 491,
    adaptability_to_change: 0.65,
    safe_conduct: 0.29,
    dynamism_energy: 0.28,
    personal_effectiveness: 0.16,
    initiative: 0.64,
    working_under_pressure: 0.23,
    date: "2024-04-13 11:54:27",
  },
];
  
  // Obtener todas las competencias
  const competencias = Object.keys(dataset[0]).filter(key => key !== 'user_id' && key !== 'date');
  
  // Función para formatear las fechas y obtener solo el mes
  const formatMonth = dateStr => {
    const date = new Date(dateStr);
    const options = { month: 'short' }; // 'short' para abreviaturas de meses como 'Jan', 'Feb'
    return date.toLocaleDateString('en-US', options);
  };
  
  // Crear un objeto para contar las evaluaciones por mes y competencia
  const evaluationsByMonthAndCompetency = {};
  dataset.forEach(item => {
    const month = formatMonth(item.date);
    competencias.forEach(competencia => {
      if (!evaluationsByMonthAndCompetency[competencia]) {
        evaluationsByMonthAndCompetency[competencia] = {};
      }
      if (!evaluationsByMonthAndCompetency[competencia][month]) {
        evaluationsByMonthAndCompetency[competencia][month] = 0;
      }
      if (item[competencia] !== undefined) {
        evaluationsByMonthAndCompetency[competencia][month] += 1;
      }
    });
  });
  
  // Obtener todos los meses únicos en el dataset
  const allMonths = [...new Set(dataset.map(item => formatMonth(item.date)))];
  
  // Función auxiliar para obtener colores aleatorios
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  // Calcula la cantidad total de evaluaciones
  const totalEvaluations = dataset.length;
  
  // Función para calcular el promedio de cada métrica
  function calculateAverage(metric) {
    const total = dataset.reduce((acc, cur) => acc + cur[metric], 0);
    return total / totalEvaluations;
  }
  
  // Datos y opciones para el gráfico radar
  const radarChartData = ref({
    labels: competencias.map(competencia => competencia.replace(/_/g, ' ').toUpperCase()),
    datasets: [
      {
        label: 'Promedios',
        data: competencias.map(competencia => calculateAverage(competencia)),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }
    ]
  });
  
  const radarChartOptions = ref({
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      line: {
        borderWidth: 2
      }
    },
    scales: {
      r: {
        angleLines: {
          display: true
        },
        suggestedMin: 0,
        suggestedMax: 1
      }
    }
  });
  
  // Opciones para el gráfico de línea
  const lineChartOptions = ref({
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: {
          display: true,
          color: '#333'
        }
      },
      y: {
        ticks: {
          display: true,
          color: '#333'
        }
      }
    }
  });
  
  // Función para obtener los datos de línea para una competencia específica
  const getLineChartData = competencia => {
    return {
      labels: allMonths,
      datasets: [
        {
          label: competencia.replace(/_/g, ' ').toUpperCase(),
          data: allMonths.map(month => evaluationsByMonthAndCompetency[competencia][month] || 0),
          borderColor: getRandomColor(),
          borderWidth: 2,
          fill: false
        }
      ]
    };
  };
  </script>
  
  <style scoped>
  canvas {
    width: 100%;
    height: 400px; /* Ajusta la altura según tus necesidades */
  }
  </style>
  