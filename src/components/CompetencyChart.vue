<template>
  <LineChart :data="data" :options="options" />
</template>

<script setup>
import LineChart from "@/components/LineChart.vue";

const props = defineProps({
  title: String,
  data: Array,
  timeLine: Array,
});

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

let delayed;
const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    r: {
      beginAtZero: true,
      max: 1,
    },
    
  },
  animation: {
    onComplete: () => {
      delayed = true;
    },
    delay: (context) => {
      let delay = 0;
      if (context.type === 'data' && context.mode === 'default' && !delayed) {
        delay = context.dataIndex * 300 + context.datasetIndex * 100;
      }
      return delay;
    }
  }
};

const data = {
  labels: props.timeLine,
  datasets: [
    {
      label: props.title,
      data: props.data,
      fill: false,
      borderColor: getRandomColor(),
      tension: 0.1,
    },
  ],
};
</script>
