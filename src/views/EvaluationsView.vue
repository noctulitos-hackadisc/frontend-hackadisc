<template>
  <div class="w-full overflow-x-auto">
    <h1 v-if="!loading" class="text-4xl font-bold mt-16 mb-4 ml-10">
      Evaluaciones de
      <span class="text-primaryGreen">{{ workerName }}</span>
    </h1>

    <button
      v-if="!loading"
      @click="$router.go(-1)"
      class="ml-10 mb-4 rounded px-2 disabled:opacity-50 disabled:cursor-not-allowed text-white bg-primaryBlue hover:bg-blue-500 transition-all duration-500 ease-in-out"
    >
      <- Volver
    </button>

    <div v-if="loading" class="grid place-items-center h-[100dvh]">
      <div class="grid place-items-center">
        <Loader2 class="size-[128px] mr-2 animate-spin text-colorLime" />
        <span class="text-gray-600 mt-4">Cargando evaluaciones...</span>
      </div>
    </div>

    <div v-if="!loading && data" class="mx-10 mb-16">
      <EvaluationTable :data="data" :columns="columns" class="shadow-xl" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, h } from "vue";
import { Loader2 } from "lucide-vue-next";
import { useRoute } from "vue-router";
import { api } from "@/api";
import { useAuth } from "@/stores/store";

import { jwtDecode } from "jwt-decode";

import EvaluationTable from "@/components/evaluation/EvaluationTable.vue";
import TableDropdown from "@/components/evaluation/TableDropdown.vue";

const route = useRoute();

const data = ref(null);
const loading = ref(false);

const auth = useAuth();

const showAssignIntervention = () => {
  const decodedToken = jwtDecode(auth.token);

  const option = {
    accessorKey: "options",
    header: "Acciones",
    cell: ({ row }) =>
      h(TableDropdown, {
        workerId: parseInt(route.params.workerId),
        evaluationId: row.original.id,
      }),
    enableSorting: false,
  };

  if (decodedToken.role === "Jefe de area") {
    return option;
  } else
    return {
      accessorKey: "id",
      header: "",
      enableSorting: false,
      cell: ({ row }) => "",
    };
};

const columns = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "date",
    header: "Fecha de la evaluación",
    cell: ({ row }) => formatDate(row.original.date),
  },
  {
    accessorKey: "adaptability_to_change",
    header: "Adaptabilidad",
    cell: ({ row }) => row.original.adaptability_to_change * 100 + "%",
  },
  {
    accessorKey: "dynamism_energy",
    header: "Dinamismo",
    cell: ({ row }) => row.original.dynamism_energy * 100 + "%",
  },
  {
    accessorKey: "initiative",
    header: "Iniciativa",
    cell: ({ row }) => row.original.initiative * 100 + "%",
  },
  {
    accessorKey: "personal_effectiveness",
    header: "Efectividad personal",
    cell: ({ row }) => row.original.personal_effectiveness * 100 + "%",
  },
  {
    accessorKey: "safe_conduct",
    header: "Conducta segura",
    cell: ({ row }) => row.original.safe_conduct * 100 + "%",
  },
  {
    accessorKey: "working_under_pressure",
    header: "Trabajo bajo presión",
    cell: ({ row }) => row.original.working_under_pressure * 100 + "%",
  },
  showAssignIntervention(),
];

function formatDate(dateString) {
  const parts = dateString.split("/");
  const day = parts[0];
  const month = parts[1];
  const year = parts[2];

  const monthNames = [
    "de Enero del",
    "de Febrero del",
    "de Marzo del",
    "de Abril del",
    "de Mayo del",
    "de Junio del",
    "de Julio del",
    "de Agosto del",
    "de Septiembre del",
    "de Octubre del",
    "de Noviembre del",
    "de Diciembre del",
  ];

  const monthName = monthNames[parseInt(month) - 1];

  return `${day} ${monthName} ${year}`;
}

console.log("params", route.params);

const workerName = ref(null);

const fetchEvaluations = async () => {
  loading.value = true;

  try {
    const res = await api.get(`/evaluations/worker/${route.params.workerId}`);

    data.value = res.data;
    workerName.value = res.data[0].worker_name;
  } catch (e) {
    console.log(e);
  }

  loading.value = false;

  return data;
};

console.log(route.params);

onMounted(() => {
  fetchEvaluations();
});
</script>
