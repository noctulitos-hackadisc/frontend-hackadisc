<template>
  <Dialog :open="isOpen" @update:open="isOpen = $event">
    <DialogContent>
      <DialogHeader>
        <DialogTitle class="p-3 text-2xl"
          >¿Estás seguro que deseas finalizar la intervención?</DialogTitle
        >
        <DialogDescription>
          <div v-if="loading" class="grid place-items-center">
            <Loader2 class="size-[128px] mr-2 animate-spin text-colorLime" />
            <span class="text-gray-600 mt-4">Cerrando intervención...</span>
          </div>
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <DialogClose @click="closeIntervention()">
          <div class="inline-flex space-x-4">
            <Button :disabled="loading" class="bg-red-500 hover:bg-red-600"
              >Terminar intervención</Button
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

const loading = ref(false);

const props = defineProps({
  interventionId: {
    type: Number,
    required: true,
  },
});

const isOpen = ref(false);

const fetchIntervention = async () => {
  try {
    const response = await api.get("/intervention");
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

const closeIntervention = async () => {
  loading.value = true;

  try {
    const response = await api.post(
      `/close-intervention/${props.interventionId}`
    );
    data.value = response.data;
    console.log("response close", response);
  } catch (error) {
    console.error(error);
  }

  loading.value = false;
  window.location.reload();
};

const openDialog = () => {
  fetchIntervention();
  isOpen.value = true;
};

const closeDialog = () => {
  isOpen.value = false;
};

defineExpose({
  openDialog,
});
</script>
