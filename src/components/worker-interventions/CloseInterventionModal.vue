<template>
  <Dialog :open="isOpen" @update:open="isOpen = $event">
    <DialogContent>
      <DialogHeader>
        <DialogTitle class="p-3 text-2xl"
          >¿Estás seguro que deseas finalizar la intervención?</DialogTitle
        >
        <DialogDescription>
          <div>
            <h1>Info</h1>
            <span>a</span>
          </div>
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <DialogClose @click="closeIntervention">
          <div class="inline-flex space-x-4">
            <Button class="bg-red-500 hover:bg-red-600"
              >Terminar intervención</Button
            >
          </div>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>

<script setup>
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

const isOpen = ref(false);

const fetchIntervention = async () => {
  try {
    const response = await api.get("/intervention");
    data.value = response.data;
    console.log("response profile", response);
  } catch (error) {
    console.error(error);
  }
};

const closeIntervention = async () => {
  console.log("closeIntervention");
  //   try {
  //     const response = await api.post("/intervention/close");
  //     data.value = response.data;
  //     console.log("response profile", response);
  //   } catch (error) {
  //     console.error(error);
  //   }
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
