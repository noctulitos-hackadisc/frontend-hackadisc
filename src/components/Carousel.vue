<template>
  <Carousel class="relative w-full">
    <CarouselContent>
      <CarouselItem v-for="(item, index) in getLimitedData(props.data)" :key="index">
        <Card>
          <CardContent>
            <CompetencyChart
              :title="titles[index]"
              :data="get_data(competencies[index])"
              :time-line="get_month_labels(get_time_line(competencies[index]))"
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


const getLimitedData = (data) => {
  return data.slice(0, 6); // Limitar a un máximo de 6 elementos
};



const get_data = (competency) => {
  const filtered = [];

  props.data.forEach((el) => {
    filtered.push(el[competency]);
  });

  return filtered;
};

const get_time_line = (competency) => {
  const time_line = [];

  props.data.forEach((el) => {
    time_line.push(el.date);
  });

  return time_line;
};


const get_month_labels = (dates) => {
  const months = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
  ];

  const labels = [];

  // Agrupar las fechas por mes
  const groupedDates = {};
  dates.forEach((date) => {
    const parts = date.split("/");
    const monthIndex = parseInt(parts[1], 10) - 1;
    const monthName = months[monthIndex];
    if (!groupedDates[monthName]) {
      groupedDates[monthName] = [];
    }
    groupedDates[monthName].push(date);
  });

  // Construir las etiquetas en orden de meses y bloquear el carrusel después de la última etiqueta
  months.forEach((monthName) => {
    if (groupedDates[monthName]) {
      const monthDates = groupedDates[monthName];
      if (monthDates.length === 1) {
        labels.push(monthName);
      } else {
        const uniqueMonthDates = [...new Set(monthDates)];
        uniqueMonthDates.sort((a, b) => {
          const aParts = a.split("/");
          const bParts = b.split("/");
          return parseInt(aParts[2], 10) - parseInt(bParts[2], 10);
        });
        const label = `${monthName} (${uniqueMonthDates.length})`;
        labels.push(label);
      }
    }
  });

  // Bloquear el carrusel después de la última etiqueta
  if (labels.length > 6) {
    for (let i = 6; i < labels.length; i++) {
      labels[i] = '';
    }
  }

  return labels;
};


</script>