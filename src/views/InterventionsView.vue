<template>
  <div class="w-full overflow-x-auto">
    <h1 class="text-4xl font-bold mt-16 mb-4 ml-10">Intervenciones</h1>

    <div class="grid place-items-center mb-5">
      <span class="font-bold text-2xl mb-2">Filtros</span>
      <FilterIcon />
    </div>

    <div
      class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-6 gap-y-5 place-items-center mb-10 mx-0 xl:mx-64 justify-between"
    >
      <Badge
        v-for="(competency, index) in competencies"
        :key="index"
        class="grid place-items-center w-[160px] hover:cursor-pointer bg-primaryGreen hover:bg-colorLime"
        :class="{
          'bg-colorLime text-white': selectedCompetencies.has(
            reverseTranslateCompetency(competency)
          ),
        }"
        @click="toggleCompetency(competency)"
      >
        {{ competency }}
      </Badge>
    </div>

    <div class="text-center mb-6">
      <span class="text-lg font-semibold">
        Total de Intervenciones: {{ filteredInterventions.length }}
      </span>
    </div>

    <div
      class="grid place-items-center grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-y-10 mb-16 px-16"
    >
      <InterventionCard
        v-for="(el, index) in filteredInterventions"
        :data="el"
        :key="el.id"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { Badge } from "@/components/ui/badge";
import { api } from "@/api";
import FilterIcon from "@/components/icons/FilterIcon.vue";
import InterventionCard from "@/components/InterventionCard.vue";

const interventions = ref([]);

const fetchInterventions = async () => {
  try {
    const response = await api.get("/interventions-types");
    interventions.value = response.data;
  } catch (error) {
    console.error(error);
  }
};

const translateCompetency = (competency) => {
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
      return "Competencia no encontrada";
  }
};

const reverseTranslateCompetency = (competency) => {
  switch (competency) {
    case "Adaptabilidad al Cambio":
      return "adaptability_to_change";
    case "Conducta Segura":
      return "safe_conduct";
    case "Dinamismo y Energía":
      return "dynamism_energy";
    case "Efectividad Personal":
      return "personal_effectiveness";
    case "Iniciativa":
      return "initiative";
    case "Trabajo bajo Presión":
      return "working_under_pressure";
    default:
      return competency;
  }
};

const competencies = [
  "Adaptabilidad al Cambio",
  "Conducta Segura",
  "Dinamismo y Energía",
  "Efectividad Personal",
  "Iniciativa",
  "Trabajo bajo Presión",
];

const selectedCompetencies = ref(new Set());

const toggleCompetency = (competency) => {
  competency = reverseTranslateCompetency(competency);
  if (selectedCompetencies.value.has(competency)) {
    selectedCompetencies.value.delete(competency);
  } else {
    selectedCompetencies.value.add(competency);
  }
};

const stringToArray = (string) => {
  return string.split(",").map((item) => item.trim());
};

const filteredInterventions = computed(() => {
  console.log("selectedCompetencies", selectedCompetencies.value);

  if (selectedCompetencies.value.size === 0) {
    return interventions.value;
  }

  console.log(
    "xd",
    interventions.value.filter((intervention) =>
      stringToArray(intervention.intervened_competencies).some((competency) =>
        selectedCompetencies.value.has(competency)
      )
    )
  );

  return interventions.value.filter((intervention) =>
    stringToArray(intervention.intervened_competencies).some((competency) =>
      selectedCompetencies.value.has(competency)
    )
  );
});

onMounted(() => {
  fetchInterventions();
});
</script>
