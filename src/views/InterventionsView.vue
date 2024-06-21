<template>
  <div class="w-full overflow-x-auto">
    <h1 class="text-4xl font-bold my-16 ml-10">Lista de Intervenciones</h1>

    <div
      class="grid place-items-center grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-y-10 mb-16 px-16"
    >
      <InterventionCard
        v-for="(el, index) in interventions"
        :data="el"
        :key="index"
      />
    </div>
  </div>
</template>

<script setup>
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
</script>
