<template>
  <Card class="grid w-[250px] xl:w-[380px] max-h-[300px] min-h-[300px]">
    <CardHeader>
      <CardTitle>{{ props.data.type }}</CardTitle>
      <CardDescription>{{ props.data.details }}</CardDescription>
    </CardHeader>
    <CardContent class="grid gap-4">
      <div>
        <div
          v-for="(competency, index) in props.data.intervened_competency"
          :key="index"
          class="mb-4 grid grid-cols-[25px_minmax(0,1fr)] items-start pb-4 last:mb-0 last:pb-0"
        >
          <span class="flex h-2 w-2 translate-y-1 rounded-full bg-green-500" />
          <div class="space-y-1">
            <p class="text-sm font-medium leading-none">
              {{ tranlasteCompetency(competency) }}
            </p>
          </div>
        </div>
      </div>
    </CardContent>
    <CardFooter>
      <Button class="w-full bg-primaryGreen hover:bg-colorLime">
        <Check class="mr-2 h-4 w-4" /> Asignar intervención
      </Button>
    </CardFooter>
  </Card>
</template>

<script setup>
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

const props = defineProps({
  data: Object,
});

const tranlasteCompetency = (competency) => {
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
</script>
