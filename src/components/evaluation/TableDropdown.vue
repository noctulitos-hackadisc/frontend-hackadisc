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
                name: 'AddIntervention',
                params: {
                  id: props.workerId,
                  evaluationId: props.evaluationId,
                },
              })
            "
            class="hover:cursor-pointer"
          >
            <Pencil class="mr-2 h-4 w-4" />
            <span>Asignar intervención</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</template>

<script setup>
import { Pencil, Rocket } from "lucide-vue-next";

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
  evaluationId: {
    type: Number,
    required: true,
  },
  workerId: {
    type: Number,
    required: true,
  },
});
</script>
