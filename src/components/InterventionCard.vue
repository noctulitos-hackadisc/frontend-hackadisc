<template>
  <Card
    class="grid w-[250px] xl:w-[380px] max-h-[350px] min-h-[350px] shadow-md"
  >
    <CardHeader>
      <CardTitle>{{ data.name }}</CardTitle>
      <div class="inline-flex space-x-2 my-2">
        <div class="grid place-items-center">
          <Timer class="h-4 w-4" />
        </div>
        <CardDescription>{{ data.duration }} Días</CardDescription>
      </div>
      <CardDescription>{{ data.description }}</CardDescription>
    </CardHeader>
    <CardContent class="grid gap-4">
      <div class="grid">
        <div
          v-for="(competency, index) in competencies"
          :key="index"
          class="mb-4 grid grid-cols-[25px_minmax(0,1fr)] items-start pb-4 last:mb-0 last:pb-0"
        >
          <span class="flex h-2 w-2 translate-y-1 rounded-full bg-green-500" />
          <div class="space-y-1">
            <p class="text-sm font-medium leading-none">
              {{ translateCompetency(competency) }}
            </p>
          </div>
        </div>
      </div>
    </CardContent>
    <CardFooter v-if="props.showButton">
      <Button
        @click="openAssignModal"
        class="w-full bg-primaryGreen hover:bg-colorLime"
      >
        <Check class="mr-2 h-4 w-4" /> Asignar intervención
      </Button>
    </CardFooter>
  </Card>
  <AssignInterventionModal
    ref="assignInterventionModal"
    :intervened_competencies="props.data.intervened_competencies"
    :intervention_type_id="props.data.id"
  />
</template>

<script setup>
import { ref } from "vue";
import { Timer } from "lucide-vue-next";
import { Check } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import AssignInterventionModal from "@/components/worker-interventions/AssignInterventionModal.vue";

const assignInterventionModal = ref(null);

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
  showButton: {
    type: Boolean,
    default: true,
  },
});

const stringToArray = (string) => {
  return string.split(",").map((item) => item.trim());
};

const competencies = stringToArray(props.data.intervened_competencies);

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
  }
};

const openAssignModal = () => {
  assignInterventionModal.value.openDialog();
};
</script>
