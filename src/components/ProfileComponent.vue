<template>
  <Dialog :open="isOpen" @update:open="isOpen = $event">
    <DialogContent>
      <DialogHeader>
        <DialogTitle class="p-3 text-2xl">Perfil del usuario</DialogTitle>
        <DialogDescription>
          <template v-if="data">
            <div class="grid grid-cols-2 gap-4 gap-x-16">
              <!-- Imagen -->
              <div class="grid place-items-center">
                <img
                  src="/src/assets/avatar3d.avif"
                  alt=""
                  width="100px"
                  height="100px"
                  class="rounded-full col-span-1"
                />
              </div>

              <!-- Datos del perfil -->
              <div class="col-span-1">
                <p class="font-semibold">Nombre:</p>
                <span>{{ data.user.profile.name }}</span>
                <p class="font-semibold">Email:</p>
                <span>{{ data.user.email }}</span>
                <p class="font-semibold">Rol:</p>
                <span>{{ data.user.role.name }}</span>
              </div>

              <!-- Logo de Pignus -->
              <div class="grid place-items-center">
                <img
                  src="/src/assets/logoPignus.png"
                  alt=""
                  width="200px"
                  height="100px"
                  class="rounded-full col-span-1"
                />
              </div>

              <!-- Totales -->
              <div class="grid border-t pt-4">
                <p class="font-semibold">Total de Compañías:</p>
                <span>{{ data.user.profile.companies.length || 1 }}</span>
                <p class="font-semibold">Total de Sub Compañías:</p>
                <span>{{ getSubCompanies() }}</span>
              </div>
            </div>
          </template>

          <template v-else>
            <p>Cargando perfil...</p>
          </template>
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <DialogClose @click="closeDialog">
          <Button class="bg-colorLime hover:bg-primaryGreen">Cerrar</Button>
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

const data = ref(null);
const isOpen = ref(false);

const getSubCompanies = () => {
  let subCompanies = 0;

  data.value.user.profile.companies.forEach((company) => {
    if (company.subcompanies) {
      subCompanies += company.subcompanies.length;
    }
  });

  return subCompanies;
};

const fetchProfile = async () => {
  try {
    const response = await api.get("/profile");
    data.value = response.data;
    console.log("response profile", response);
  } catch (error) {
    console.error(error);
  }
};

const openDialog = () => {
  fetchProfile();
  isOpen.value = true;
};

const closeDialog = () => {
  isOpen.value = false;
};

defineExpose({
  openDialog,
});
</script>
