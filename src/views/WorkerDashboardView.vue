<template>
  <div class="w-full overflow-x-auto">
    <h1 class="text-4xl font-bold my-16 ml-10">Dashboard de Métricas</h1>

    <div class="container mx-auto mb-12">
      <!-- Cards para Métricas KPI -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        <CardKpi
          title="Evaluaciones Totales"
          :value="totalEvaluations"
          shadowClass="shadow-2xl bg-blue-200"
        />
        <CardKpi
          title="Evaluaciones este mes"
          :value="evaluationsThisMonth"
          shadowClass="shadow-2xl"
        />
        <CardKpi
          title="Porcentaje de mejora"
          :value="improvementPercentage.toFixed(2) + '%'"
          shadowClass="shadow-2xl"
        />
        <CardKpi
          title="Satisfacción del Empleado"
          :value="employeeSatisfaction.toFixed(2) + '%'"
          shadowClass="shadow-2xl"
        />
      </div>

      <!-- Métricas detalladas -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        <CardKpi2
          title="Promedio de Adaptabilidad"
          :value="averageAdaptability.toFixed(2)"
          shadowClass="shadow-2xl"
        />
        <CardKpi2
          title="Promedio de Conducta Segura"
          :value="averageSafeConduct.toFixed(2)"
          shadowClass="shadow-2xl"
        />
        <CardKpi2
          title="Promedio de Dinamismo"
          :value="averageDynamism.toFixed(2)"
          shadowClass="shadow-2xl"
        />
        <CardKpi2
          title="Promedio de Efectividad Personal"
          :value="averagePersonalEffectiveness.toFixed(2)"
          shadowClass="shadow-2xl"
        />
        <CardKpi2
          title="Promedio de Iniciativa"
          :value="averageInitiative.toFixed(2)"
          shadowClass="shadow-2xl"
        />
        <CardKpi2
          title="Promedio de Trabajo bajo Presión"
          :value="averageWorkingUnderPressure.toFixed(2)"
          shadowClass="shadow-2xl"
        />
      </div>
    </div>

    <div class="border-b mx-10"></div>

    <h1 class="text-4xl font-bold my-16 ml-10">Promedios</h1>
    <!-- Gráfico de Barras -->
    <div class="flex justify-center mb-16">
      <div class="w-full lg:w-2/3 py-5">
        <BarChart :data="barChartData" :options="chartOptions" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { api } from "@/api";
import { useRoute } from "vue-router";
import CardKpi from "@/components/CardKpi.vue";
import CardKpi2 from "@/components/CardKpi2.vue";
import BarChart from "@/components/BarChart.vue";

const route = useRoute();

const dataset = ref([]);

const fetchWorkers = async () => {
  try {
    const res = await api.get(`/evaluations/worker/${route.params.id}`);
    dataset.value = res.data;
    calculateMetrics();
  } catch (e) {
    console.log(e);
  }
}

const totalEvaluations = ref(0);
const improvementPercentage = ref(0);
const evaluationsThisMonth = ref(0);
const employeeSatisfaction = ref(0);
const averageAdaptability = ref(0);
const averageSafeConduct = ref(0);
const averageDynamism = ref(0);
const averagePersonalEffectiveness = ref(0);
const averageInitiative = ref(0);
const averageWorkingUnderPressure = ref(0);

const barChartData = ref({
  labels: [
    "Adaptabilidad",
    "Conducta Segura",
    "Dinamismo",
    "Efectividad Personal",
    "Iniciativa",
    "Trabajo Bajo Presión",
  ],
  datasets: [
    {
      label: "Promedios",
      data: [
        averageAdaptability.value,
        averageSafeConduct.value,
        averageDynamism.value,
        averagePersonalEffectiveness.value,
        averageInitiative.value,
        averageWorkingUnderPressure.value,
      ],
      backgroundColor: [
        "#D2F39B",
        "#58A8F7",
        "#B485B7",
        "#21B6B8",
        "#4CA650",
        "#6DCFCB",
      ],
    },
  ],
});

let delayed;
const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    r: {
      beginAtZero: true,
      max: 1,
    },
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

});

const calculateMetrics = () => {
  totalEvaluations.value = dataset.value.length;
  improvementPercentage.value = calculateImprovementPercentage();
  evaluationsThisMonth.value = calculateEvaluationsThisMonth();
  employeeSatisfaction.value = calculateEmployeeSatisfaction();
  averageAdaptability.value = calculateAverage("adaptability_to_change");
  averageSafeConduct.value = calculateAverage("safe_conduct");
  averageDynamism.value = calculateAverage("dynamism_energy");
  averagePersonalEffectiveness.value = calculateAverage("personal_effectiveness");
  averageInitiative.value = calculateAverage("initiative");
  averageWorkingUnderPressure.value = calculateAverage("working_under_pressure");

  updateBarChartData();
};

const calculateImprovementPercentage = () => {
  const highPerformers = dataset.value.filter(item => !isNaN(item.adaptability_to_change) && item.adaptability_to_change > 0.8);
  const totalEvaluationsValue = totalEvaluations.value || 1; // Evita la división por cero
  return (highPerformers.length / totalEvaluationsValue) * 100;
};

const calculateEvaluationsThisMonth = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1; 

  const evaluationsThisMonth = dataset.value.filter(item => {
    const dateParts = item.date.split("/"); 
    if (dateParts.length !== 3) {
      return false;
    }
    const evaluationMonth = parseInt(dateParts[1]); 
    return evaluationMonth === currentMonth;
  });

  return evaluationsThisMonth.length;
};

const calculateEmployeeSatisfaction = () => {
  const totalScores = dataset.value.reduce((acc, cur) => {
    const metrics = [
      cur.adaptability_to_change,
      cur.safe_conduct,
      cur.dynamism_energy,
      cur.personal_effectiveness,
      cur.initiative,
      cur.working_under_pressure,
    ];
    metrics.forEach(metric => {
      if (!isNaN(metric)) {
        acc += metric;
      }
    });
    return acc;
  }, 0);

  const totalEvaluationsValue = totalEvaluations.value || 1; // Evita la división por cero
  return (totalScores / (totalEvaluationsValue * 6)) * 100;
};

const calculateAverage = (metric) => {
  const total = dataset.value.reduce((acc, cur) => {
    if (!isNaN(cur[metric])) {
      acc += cur[metric];
    }
    return acc;
  }, 0);

  const totalEvaluationsValue = totalEvaluations.value || 1; // Evita la división por cero
  return total / totalEvaluationsValue;
};

const updateBarChartData = () => {
  barChartData.value.datasets[0].data = [
    averageAdaptability.value,
    averageSafeConduct.value,
    averageDynamism.value,
    averagePersonalEffectiveness.value,
    averageInitiative.value,
    averageWorkingUnderPressure.value,
  ];
};

onMounted(() => {
  fetchWorkers();
});

</script>