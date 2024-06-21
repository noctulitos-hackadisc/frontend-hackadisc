<template>
  <Carousel class="relative w-full">
    <CarouselContent>
      <CarouselItem v-for="(some, index) in props.data" :key="index">
        <Card>
          <CardContent>
            <img
              :src="props.data[index].img"
              alt=""
              class="object-cover h-full w-full"
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

const props = defineProps({
  data: Array,
});

console.log(props.data);
</script>
