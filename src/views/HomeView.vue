<template>
  <div class="w-full overflow-x-auto">
    <h1 class="text-4xl font-bold my-16 ml-10">
      ¡Bienvenido al desafío HackaDISC!
    </h1>

    <div class="grid place-items-center mx-64">
      <HomeCarousel :data="home_images" class="w-full" />
    </div>
  </div>
</template>

<script setup>
import HomeCarousel from "@/components/HomeCarousel.vue";

import image1 from "@/assets/home/1.webp";
import image2 from "@/assets/home/2.webp";

const home_images = [
  { img: image1 },
  { img: image2 },
  { img: image1 },
  { img: image2 },
];
</script>
