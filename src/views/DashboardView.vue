<template>
  <div class="flex h-screen">
    <div class="flex-grow p-8">
      <div class="container mx-auto">
        <h1 class="text-2xl mb-4 text-center">Datos de medición</h1>

        <!-- Cards for KPI Metrics -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <Card
            title="Evaluaciones Totales"
            :value="totalEvaluations"
            shadowClass="shadow-2xl bg-blue-200"
          />
          <Card
            title="Porcentaje de mejora"
            :value="improvementPercentage.toFixed(2) + '%'"
            shadowClass="shadow-2xl"
          />
          <Card
            title="Evaluaciones realizadas este mes"
            :value="completedEvaluationsThisMonth"
            shadowClass="shadow-2xl"
          />
          <Card
            title="Satisfacción del Empleado"
            :value="employeeSatisfaction + '%'"
            shadowClass="shadow-2xl"
          />
        </div>

        <!-- More detailed metrics -->

        <!-- More detailed metrics -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          <Car2
            title="Promedio de adaptabilidad"
            :value="averageAdaptability.toFixed(2)"
            shadowClass="shadow-2xl"
          />
          <Car2
            title="Promedio de Conducta segura"
            :value="averageSafeConduct.toFixed(2)"
            shadowClass="shadow-2xl"
          />
          <Car2
            title="Promedio de Dinamismo"
            :value="averageDynamism.toFixed(2)"
            shadowClass="shadow-2xl"
          />
          <Car2
            title="Promedio de Efectividad Personal"
            :value="averagePersonalEffectiveness.toFixed(2)"
            shadowClass="shadow-2xl"
          />
          <Car2
            title="Promedio de Iniciativa"
            :value="averageInitiative.toFixed(2)"
            shadowClass="shadow-2xl"
          />
          <Car2
            title="Promedio de Trabajo bajo presión"
            :value="averageWorkingUnderPressure.toFixed(2)"
            shadowClass="shadow-2xl"
          />
        </div>

        <!-- Centralized Bar Chart -->
        <div class="flex justify-center">
          <div class="w-auto lg:w-2/3 py-5 m-10">
            <BarChart :data="polarAreaChartData" :options="chartOptions" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Card from "@/components/CardKpi.vue";
import BarChart from "@/components/BarChart.vue";
import Car2 from "@/components/CardKpi2.vue";

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

// Compute various metrics
const totalEvaluations = dataset.length;
const averageAdaptability =
  dataset.reduce((acc, cur) => acc + cur.adaptability_to_change, 0) /
  totalEvaluations;
const averageSafeConduct =
  dataset.reduce((acc, cur) => acc + cur.safe_conduct, 0) / totalEvaluations;
const averageDynamism =
  dataset.reduce((acc, cur) => acc + cur.dynamism_energy, 0) / totalEvaluations;
const averagePersonalEffectiveness =
  dataset.reduce((acc, cur) => acc + cur.personal_effectiveness, 0) /
  totalEvaluations;
const averageInitiative =
  dataset.reduce((acc, cur) => acc + cur.initiative, 0) / totalEvaluations;
const averageWorkingUnderPressure =
  dataset.reduce((acc, cur) => acc + cur.working_under_pressure, 0) /
  totalEvaluations;

// Additional metrics
const improvementPercentage =
  (dataset.filter((item) => item.adaptability_to_change > 0.8).length /
    totalEvaluations) *
  100;
const completedEvaluationsThisMonth = dataset.filter(
  (item) => new Date(item.date).getMonth() === new Date().getMonth()
).length;
const employeeSatisfaction = (
  (dataset.reduce(
    (acc, cur) =>
      acc +
      (cur.adaptability_to_change +
        cur.safe_conduct +
        cur.dynamism_energy +
        cur.personal_effectiveness +
        cur.initiative +
        cur.working_under_pressure),
    0
  ) /
    (totalEvaluations * 6)) *
  100
).toFixed(2);

// Chart data
const polarAreaChartData = ref({
  labels: [
    "Adaptability",
    "Safe Conduct",
    "Dynamism",
    "Personal Effectiveness",
    "Initiative",
    "Working Under Pressure",
  ],
  datasets: [
    {
      label: "Comparativa",
      data: [
        averageAdaptability,
        averageSafeConduct,
        averageDynamism,
        averagePersonalEffectiveness,
        averageInitiative,
        averageWorkingUnderPressure,
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

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
});
</script>
