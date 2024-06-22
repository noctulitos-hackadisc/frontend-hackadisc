<template>
  <div class="inline-flex space-x-4" v-if="props.canClose">
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
            @click="openCloseInterventionModal()"
            class="hover:cursor-pointer"
          >
            <X class="mr-2 h-4 w-4" />
            <span>Cerrar intervención</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>

  <CloseInterventionModal ref="closeIntervention" />
</template>

<script setup>
import { ref } from "vue";
import { X } from "lucide-vue-next";

const closeIntervention = ref(null);

import CloseInterventionModal from "@/components/worker-interventions/CloseInterventionModal.vue";

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

const openCloseInterventionModal = () => {
  closeIntervention.value.openDialog();
  console.log("Open modal");
};

const props = defineProps({
  interventionId: {
    type: Number,
    required: true,
  },
  workerId: {
    type: Number,
    required: true,
  },
  canClose: {
    type: Boolean,
    required: true,
  },
});

console.log(props);
</script>
