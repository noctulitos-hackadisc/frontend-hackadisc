<template>
  <div class="inline-flex space-x-4">
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Button variant="outline" class="text-2xl text-black">
          &#8226;&#8226;&#8226;
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent class="w-56">
        <DropdownMenuLabel>Opciones</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem
            @click="
              $router.push({
                name: 'WorkerDashboard',
                params: { workerId: props.workerId },
              })
            "
            class="hover:cursor-pointer"
          >
            <BarChart class="mr-2 h-4 w-4" />
            <span>Estadísticas</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            @click="
              $router.push({
                name: 'WorkerStatistics',
                params: { workerId: props.workerId },
              })
            "
            class="hover:cursor-pointer"
          >
            <LineChart class="mr-2 h-4 w-4" />
            <span>Métricas</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            class="hover:cursor-pointer"
            @click="
              $router.push({
                name: 'Evaluations',
                params: { workerId: props.workerId },
              })
            "
          >
            <Rocket class="mr-2 h-4 w-4" />
            <span>Ver evaluaciones</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</template>

<script setup>
import { BarChart, Rocket, LineChart } from "lucide-vue-next";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const props = defineProps({
  companyId: {
    type: Number,
    required: true,
  },
  workerId: {
    type: Number,
    required: true,
  },
});

console.log(props);
</script>
