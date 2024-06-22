<template>
  <div v-if="!empty" class="w-full overflow-x-auto">
    <h1 v-if="!loading" class="text-4xl font-bold mt-16 mb-4 ml-10">
      Intervenciones de
      <span class="text-primaryGreen">{{ workerName }}</span>
    </h1>

    <h2 v-if="!loading" class="text-2xl font-bold mb-10 ml-10">
      Estado
      <span class="text-primaryGreen">{{ workerStatus }}</span>
    </h2>

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
        <span class="text-gray-600 mt-4">Cargando intervenciones...</span>
      </div>
    </div>

    <div v-if="!loading && data" class="mx-10 mb-16">
      <WorkerInterventionTable
        :data="data"
        :columns="columns"
        class="shadow-xl"
      />
    </div>
  </div>

  <div v-else class="w-full overflow-x-auto">
    <h1 v-if="!loading" class="text-4xl font-bold mt-16 mb-4 ml-10">
      El usuario no tiene intervenciones :(
    </h1>

    <button
      v-if="!loading"
      @click="$router.go(-1)"
      class="ml-10 mb-4 rounded px-2 disabled:opacity-50 disabled:cursor-not-allowed text-white bg-primaryBlue hover:bg-blue-500 transition-all duration-500 ease-in-out"
    >
      <- Volver
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, h } from "vue";
import { Loader2 } from "lucide-vue-next";
import { useRoute } from "vue-router";

import { api } from "@/api";

import WorkerInterventionTable from "@/components/worker-interventions/WorkerInterventionTable.vue";
import TableDropdown from "@/components/worker-interventions/TableDropdown.vue";

const route = useRoute();

const empty = ref(false);

const data = ref(null);
const loading = ref(false);

const workerName = ref(null);
const workerStatus = ref(null);

const columns = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "evaluation_id",
    header: "ID Evaluación",
  },
  {
    accessorKey: "date",
    header: "Fecha de la evaluación",
    cell: ({ row }) => formatDate(row.original.start_date),
  },
  {
    accessorKey: "intervened_competency",
    header: "Competencias",
    cell: ({ row }) =>
      translateCompetenciesString(row.original.intervened_competency),
  },
  {
    accessorKey: "active",
    header: "Estado",
    cell: ({ row }) => (row.original.active ? "Activa" : "Inactiva"),
  },
  {
    accessorKey: "options",
    header: "Acciones",
    cell: ({ row }) =>
      h(TableDropdown, {
        interventionId: row.original.id,
        workerId: parseInt(route.params.workerId),
        canClose: row.original.active,
      }),
    enableSorting: false,
  },
];

const translateCompetencies = (competency) => {
  switch (competency) {
    case "adaptability_to_change":
      return "Adaptabilidad al Cambio";
    case "safe_conduct":
      return "Conducta Segura";
    case "dynamism_energy":
      return "Dinamismo y Energía";
    case "personal_effectiveness":
      return "Efectividad Personal";
    case "initiative":
      return "Iniciativa";
    case "working_under_pressure":
      return "Trabajo bajo Presión";
    default:
      return competency;
  }
};

const translateCompetenciesString = (competenciesString) => {
  return competenciesString.split(", ").map(translateCompetencies).join(", ");
};

function formatDate(dateString) {
  const parts = dateString.split(/[\/-]/);
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

const fetchWorkerInterventions = async () => {
  loading.value = true;

  try {
    const res = await api.get(`/interventions/worker/${route.params.workerId}`);

    if (res.data.length === 0) {
      empty.value = true;
      loading.value = false;
      return;
    }

    workerName.value = res.data[0].worker.name;
    data.value = res.data;

    workerStatus.value = res.data[0].worker.status.type;
    console.log(res.data);
  } catch (e) {
    console.log(e);
  }

  loading.value = false;

  return data;
};

onMounted(() => {
  fetchWorkerInterventions();
});
</script>
