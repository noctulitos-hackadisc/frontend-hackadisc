<template>
  <Dialog :open="isOpen" @update:open="isOpen = $event">
    <DialogContent>
      <DialogHeader>
        <DialogTitle class="p-3 text-2xl"
          >¿Estás seguro que deseas asignar la intervención?</DialogTitle
        >
        <DialogDescription>
          <div v-if="loading" class="grid place-items-center">
            <Loader2 class="size-[128px] mr-2 animate-spin text-colorLime" />
            <span class="text-gray-600 mt-4">Asignando intervención...</span>
          </div>
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <DialogClose>
          <div class="inline-flex space-x-4">
            <Button
              @click="assignIntervention()"
              class="bg-primaryGreen hover:bg-colorLime"
              >Asignar intervención</Button
            >
          </div>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>

<script setup>
import { Loader2 } from "lucide-vue-next";
import { ref } from "vue";
import { api } from "@/api";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useRoute } from "vue-router";
import router from "@/router/router";

const isOpen = ref(false);

const route = useRoute();
const loading = ref(false);

const props = defineProps({
  intervened_competencies: {
    type: String,
    required: true,
  },
  intervention_type_id: {
    type: Number,
    required: true,
  },
});

console.log(route.params);

const assignIntervention = async () => {
  console.log("Intervention assigned", props.data);

  loading.value = true;

  try {
    const res = await api.post(`/open-intervention/${route.params.id}`, {
      intervened_competency: props.intervened_competencies,
      intervention_type_id: props.intervention_type_id,
      evaluation_id: route.params.evaluationId,
    });
  } catch (e) {
    console.log(e);
  }

  loading.value = false;
  //   router.go(-1);
  router.push({
    name: "WorkerInterventions",
    params: { workerId: route.params.id },
  });
};

const openDialog = () => {
  isOpen.value = true;
};

const closeDialog = () => {
  isOpen.value = false;
};

defineExpose({
  openDialog,
});
</script>
