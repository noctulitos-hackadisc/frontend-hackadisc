<template>
  <Carousel class="relative w-full">
    <CarouselContent>
      <CarouselItem v-for="(some, index) in props.data" :key="index">
        <Card>
          <CardContent>
            <CompetencyChart
              :title="titles[index]"
              :data="get_data(competencies[index])"
              :time-line="get_time_line(competencies[index])"
            />
          </CardContent>
        </Card>
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
</template>

<script setup>
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import CompetencyChart from "@/components/CompetencyChart.vue";

const props = defineProps({
  data: Object,
});

const competencies = [
  "adaptability_to_change",
  "safe_conduct",
  "dynamism_energy",
  "personal_effectiveness",
  "initiative",
  "working_under_pressure",
];

const titles = [
  "Adaptabilidad al Cambio",
  "Conducta Segura",
  "Dinamismo y Energía",
  "Efectividad Personal",
  "Iniciativa",
  "Trabajo bajo Presión",
];

const get_data = (competency) => {
  const filtered = [];

  props.data.forEach((el) => {
    filtered.push(el[competency]);
  });

  return filtered;
};

const get_time_line = () => {
  const time_line = [];

  props.data.forEach((el) => {
    time_line.push(el.date);
  });

  return time_line;
};
</script>
