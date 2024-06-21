<template>
  <div class="w-full overflow-x-auto">
    <h1 class="text-4xl font-bold my-16 ml-10">Lista de Intervenciones</h1>

    <div
      class="grid place-items-center grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-y-10 mb-16 px-16"
    >
      <InterventionCard :data="int" />
      <InterventionCard :data="int" />
      <InterventionCard :data="int" />
      <InterventionCard :data="int" />
      <InterventionCard :data="int" />
      <InterventionCard :data="int" />
      <InterventionCard :data="int" />
      <InterventionCard :data="int" />
      <InterventionCard :data="int" />
    </div>
  </div>
</template>

<script setup>
import InterventionCard from "@/components/InterventionCard.vue";

const int = {
  name: "Intervención 1",
  description: "Descripción de la intervención 1",
  competencies: [
    {
      name: "Competencia 1",
    },
    {
      name: "Competencia 2",
    },
    {
      name: "Competencia 3",
    },
  ],
};
</script>
