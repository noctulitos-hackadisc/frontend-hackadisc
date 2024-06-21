<template>
    <Dialog :open="isOpen" @update:open="isOpen = $event">
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Perfil del usuario</DialogTitle>
          <img src="/src/assets/avatar3d.avif" alt="" width="100px" height="100px" class="rounded-full">
          <DialogDescription>
            <template v-if="userProfile">
            <p>Nombre: {{ userProfile.name }}</p>
            <p>Email: {{ userProfile.email }}</p>
            <p>Rol: {{ userProfile.role.name }}</p>
            <p>Compañías:</p>
            <ul>
              <li v-for="company in userProfile.profile.companies" :key="company.id">
                {{ company.name }}
                <ul>
                    <p>Subcompañías:</p>
                  <li v-for="subcompany in company.subcompanies" :key="subcompany.id">
                    {{ subcompany.name }}
                  </li>
                </ul>
              </li>
            </ul>
          </template>
          <template v-else>
            <p>Cargando perfil...</p>
          </template>
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
  
  <script setup>
  import { ref } from 'vue';
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

  defineProps({
    userProfile:{
        type: Object,
        required: true
    }
  });
  
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