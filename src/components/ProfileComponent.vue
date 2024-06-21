<template>
    <Dialog :open="isOpen" @update:open="isOpen = $event">
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Perfil del usuario</DialogTitle>
          <DialogDescription>
            Soy un perfil
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose @click="closeDialog">
            <Button variant="secondary">Cerrar</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </template>
  
  <script setup lang="ts">
  import { ref, defineExpose } from 'vue';
  import { Button } from '@/components/ui/button';
  import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
  } from '@/components/ui/dialog';
  
  const isOpen = ref(false);
  
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