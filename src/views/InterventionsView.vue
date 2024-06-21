<template>
  <div class="w-full overflow-x-auto">
    <h1 class="text-4xl font-bold mt-16 mb-4 ml-10">Lista de Intervenciones</h1>

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
          'bg-colorLime text-white': selectedCompetencies.has(competency),
        }"
        @click="toggleCompetency(competency)"
      >
        {{ competency }}
      </Badge>
    </div>

    <div class="text-center mb-6">
      <span class="text-lg font-semibold"
        >Total de Intervenciones: {{ filteredInterventions.length }}</span
      >
    </div>

    <div
      class="grid place-items-center grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-y-10 mb-16 px-16"
    >
      <InterventionCard
        v-for="(el, index) in filteredInterventions"
        :data="el"
        :key="index"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { Badge } from "@/components/ui/badge";
import FilterIcon from "@/components/icons/FilterIcon.vue";
import InterventionCard from "@/components/InterventionCard.vue";

const interventions = [
  {
    id: 1,
    type: "Conferencia",
    intervened_competency: [
      "adaptability_to_change",
      "safe_conduct",
      "personal_effectiveness",
    ],
    details: "Mejora de habilidades blandas",
    duration_days: 4,
  },
  {
    id: 2,
    type: "Curso",
    intervened_competency: ["adaptability_to_change", "personal_effectiveness"],
    details: "Desarrollo de competencias técnicas",
    duration_days: 4,
  },
  {
    id: 3,
    type: "Conferencia",
    intervened_competency: ["dynamism_energy", "personal_effectiveness"],
    details: "Refuerzo de la cultura organizacional",
    duration_days: 4,
  },
  {
    id: 4,
    type: "Taller",
    intervened_competency: ["safe_conduct", "initiative"],
    details: "Mejora de habilidades blandas",
    duration_days: 3,
  },
  {
    id: 5,
    type: "Conferencia",
    intervened_competency: ["safe_conduct", "working_under_pressure"],
    details: "Mejora de habilidades blandas",
    duration_days: 1,
  },
  {
    id: 6,
    type: "Sesión práctica",
    intervened_competency: ["dynamism_energy", "personal_effectiveness"],
    details: "Refuerzo de la cultura organizacional",
    duration_days: 4,
  },
  {
    id: 7,
    type: "Conferencia",
    intervened_competency: ["adaptability_to_change", "personal_effectiveness"],
    details: "Desarrollo de competencias técnicas",
    duration_days: 5,
  },
  {
    id: 8,
    type: "Conferencia",
    intervened_competency: ["adaptability_to_change", "initiative"],
    details: "Refuerzo de la cultura organizacional",
    duration_days: 3,
  },
  {
    id: 9,
    type: "Sesión práctica",
    intervened_competency: ["adaptability_to_change", "initiative"],
    details: "Refuerzo de la cultura organizacional",
    duration_days: 1,
  },
  {
    id: 10,
    type: "Taller",
    intervened_competency: ["adaptability_to_change", "initiative"],
    details: "Mejora de habilidades blandas",
    duration_days: 2,
  },
  {
    id: 11,
    type: "Simulación VR",
    intervened_competency: ["adaptability_to_change", "safe_conduct"],
    details: "Desarrollo de competencias técnicas",
    duration_days: 3,
  },
  {
    id: 12,
    type: "Sesión práctica",
    intervened_competency: ["adaptability_to_change", "initiative"],
    details: "Desarrollo de competencias técnicas",
    duration_days: 3,
  },
  {
    id: 13,
    type: "Conferencia",
    intervened_competency: [
      "dynamism_energy",
      "initiative",
      "working_under_pressure",
    ],
    details: "Desarrollo de competencias técnicas",
    duration_days: 2,
  },
  {
    id: 14,
    type: "Taller",
    intervened_competency: [
      "adaptability_to_change",
      "safe_conduct",
      "personal_effectiveness",
    ],
    details: "Entrenamiento específico para situaciones críticas",
    duration_days: 2,
  },
  {
    id: 15,
    type: "Curso",
    intervened_competency: ["dynamism_energy", "personal_effectiveness"],
    details: "Entrenamiento específico para situaciones críticas",
    duration_days: 2,
  },
  {
    id: 16,
    type: "Taller",
    intervened_competency: ["initiative", "working_under_pressure"],
    details: "Mejora de habilidades blandas",
    duration_days: 1,
  },
  {
    id: 17,
    type: "Sesión práctica",
    intervened_competency: ["dynamism_energy", "working_under_pressure"],
    details: "Entrenamiento específico para situaciones críticas",
    duration_days: 5,
  },
  {
    id: 18,
    type: "Sesión práctica",
    intervened_competency: [
      "adaptability_to_change",
      "safe_conduct",
      "personal_effectiveness",
    ],
    details: "Refuerzo de la cultura organizacional",
    duration_days: 1,
  },
  {
    id: 19,
    type: "Taller",
    intervened_competency: ["dynamism_energy", "personal_effectiveness"],
    details: "Mejora de habilidades blandas",
    duration_days: 1,
  },
  {
    id: 20,
    type: "Sesión práctica",
    intervened_competency: ["dynamism_energy", "personal_effectiveness"],
    details: "Aplicación de nuevas metodologías",
    duration_days: 3,
  },
  {
    id: 21,
    type: "Conferencia",
    intervened_competency: ["adaptability_to_change", "safe_conduct"],
    details: "Mejora de habilidades blandas",
    duration_days: 3,
  },
  {
    id: 22,
    type: "Simulación VR",
    intervened_competency: ["adaptability_to_change", "initiative"],
    details: "Entrenamiento específico para situaciones críticas",
    duration_days: 2,
  },
  {
    id: 23,
    type: "Curso",
    intervened_competency: ["adaptability_to_change", "safe_conduct"],
    details: "Aplicación de nuevas metodologías",
    duration_days: 4,
  },
  {
    id: 24,
    type: "Curso",
    intervened_competency: ["dynamism_energy", "personal_effectiveness"],
    details: "Desarrollo de competencias técnicas",
    duration_days: 4,
  },
  {
    id: 25,
    type: "Sesión práctica",
    intervened_competency: ["adaptability_to_change", "initiative"],
    details: "Refuerzo de la cultura organizacional",
    duration_days: 5,
  },
  {
    id: 26,
    type: "Curso",
    intervened_competency: ["dynamism_energy", "personal_effectiveness"],
    details: "Aplicación de nuevas metodologías",
    duration_days: 1,
  },
  {
    id: 27,
    type: "Curso",
    intervened_competency: [
      "adaptability_to_change",
      "safe_conduct",
      "personal_effectiveness",
    ],
    details: "Mejora de habilidades blandas",
    duration_days: 4,
  },
  {
    id: 28,
    type: "Conferencia",
    intervened_competency: ["adaptability_to_change", "initiative"],
    details: "Mejora de habilidades blandas",
    duration_days: 3,
  },
  {
    id: 29,
    type: "Simulación VR",
    intervened_competency: ["initiative", "working_under_pressure"],
    details: "Refuerzo de la cultura organizacional",
    duration_days: 5,
  },
  {
    id: 30,
    type: "Sesión práctica",
    intervened_competency: ["dynamism_energy", "personal_effectiveness"],
    details: "Desarrollo de competencias técnicas",
    duration_days: 3,
  },
  {
    id: 31,
    type: "Sesión práctica",
    intervened_competency: [
      "dynamism_energy",
      "initiative",
      "working_under_pressure",
    ],
    details: "Aplicación de nuevas metodologías",
    duration_days: 4,
  },
  {
    id: 32,
    type: "Taller",
    intervened_competency: ["initiative", "working_under_pressure"],
    details: "Entrenamiento específico para situaciones críticas",
    duration_days: 2,
  },
  {
    id: 33,
    type: "Simulación VR",
    intervened_competency: ["adaptability_to_change", "initiative"],
    details: "Entrenamiento específico para situaciones críticas",
    duration_days: 3,
  },
  {
    id: 34,
    type: "Taller",
    intervened_competency: ["dynamism_energy", "working_under_pressure"],
    details: "Refuerzo de la cultura organizacional",
    duration_days: 4,
  },
  {
    id: 35,
    type: "Taller",
    intervened_competency: [
      "adaptability_to_change",
      "safe_conduct",
      "personal_effectiveness",
    ],
    details: "Aplicación de nuevas metodologías",
    duration_days: 3,
  },
  {
    id: 36,
    type: "Sesión práctica",
    intervened_competency: ["dynamism_energy", "working_under_pressure"],
    details: "Refuerzo de la cultura organizacional",
    duration_days: 1,
  },
  {
    id: 37,
    type: "Conferencia",
    intervened_competency: ["adaptability_to_change", "initiative"],
    details: "Entrenamiento específico para situaciones críticas",
    duration_days: 4,
  },
  {
    id: 38,
    type: "Simulación VR",
    intervened_competency: ["dynamism_energy", "personal_effectiveness"],
    details: "Mejora de habilidades blandas",
    duration_days: 3,
  },
  {
    id: 39,
    type: "Taller",
    intervened_competency: ["safe_conduct", "working_under_pressure"],
    details: "Desarrollo de competencias técnicas",
    duration_days: 5,
  },
  {
    id: 40,
    type: "Sesión práctica",
    intervened_competency: [
      "adaptability_to_change",
      "safe_conduct",
      "personal_effectiveness",
    ],
    details: "Aplicación de nuevas metodologías",
    duration_days: 5,
  },
  {
    id: 41,
    type: "Conferencia",
    intervened_competency: ["initiative", "working_under_pressure"],
    details: "Entrenamiento específico para situaciones críticas",
    duration_days: 5,
  },
  {
    id: 42,
    type: "Sesión práctica",
    intervened_competency: ["initiative", "working_under_pressure"],
    details: "Aplicación de nuevas metodologías",
    duration_days: 1,
  },
  {
    id: 43,
    type: "Curso",
    intervened_competency: [
      "dynamism_energy",
      "safe_conduct",
      "personal_effectiveness",
    ],
    details: "Desarrollo de competencias técnicas",
    duration_days: 5,
  },
  {
    id: 44,
    type: "Simulación VR",
    intervened_competency: ["dynamism_energy", "personal_effectiveness"],
    details: "Desarrollo de competencias técnicas",
    duration_days: 3,
  },
  {
    id: 45,
    type: "Simulación VR",
    intervened_competency: ["dynamism_energy", "personal_effectiveness"],
    details: "Aplicación de nuevas metodologías",
    duration_days: 1,
  },
  {
    id: 46,
    type: "Sesión práctica",
    intervened_competency: ["initiative", "working_under_pressure"],
    details: "Mejora de habilidades blandas",
    duration_days: 3,
  },
  {
    id: 47,
    type: "Sesión práctica",
    intervened_competency: ["adaptability_to_change", "safe_conduct"],
    details: "Mejora de habilidades blandas",
    duration_days: 2,
  },
  {
    id: 48,
    type: "Simulación VR",
    intervened_competency: ["adaptability_to_change", "personal_effectiveness"],
    details: "Desarrollo de competencias técnicas",
    duration_days: 2,
  },
  {
    id: 49,
    type: "Taller",
    intervened_competency: ["dynamism_energy", "personal_effectiveness"],
    details: "Mejora de habilidades blandas",
    duration_days: 1,
  },
  {
    id: 50,
    type: "Curso",
    intervened_competency: ["safe_conduct", "working_under_pressure"],
    details: "Refuerzo de la cultura organizacional",
    duration_days: 1,
  },
];

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
  if (selectedCompetencies.value.has(competency)) {
    selectedCompetencies.value.delete(competency);
  } else {
    selectedCompetencies.value.add(competency);
  }
};

const filteredInterventions = computed(() => {
  if (selectedCompetencies.value.size === 0) {
    return interventions;
  }
  return interventions.filter((intervention) =>
    intervention.intervened_competency
      .map(translateCompetency)
      .some((competency) => selectedCompetencies.value.has(competency))
  );
});
</script>

<style scoped>
/* Puedes agregar estilos adicionales aquí */
</style>
