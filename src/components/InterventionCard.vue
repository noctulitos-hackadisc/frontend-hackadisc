<template>
  <Card class="w-[200px] xl:w-[380px]">
    <CardHeader>
      <CardTitle>{{ props.data.name }}</CardTitle>
      <CardDescription>{{ props.data.description }}</CardDescription>
    </CardHeader>
    <CardContent class="grid gap-4">
      <div>
        <div
          v-for="(competencies, index) in props.data.competencies"
          :key="index"
          class="mb-4 grid grid-cols-[25px_minmax(0,1fr)] items-start pb-4 last:mb-0 last:pb-0"
        >
          <span class="flex h-2 w-2 translate-y-1 rounded-full bg-green-500" />
          <div class="space-y-1">
            <p class="text-sm font-medium leading-none">
              {{ competencies.name }}
            </p>
          </div>
        </div>
      </div>
    </CardContent>
    <CardFooter>
      <Button class="w-full bg-primaryGreen hover:bg-green-500">
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
</script>
