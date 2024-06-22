<template>
  <Dialog :open="isOpen" @update:open="isOpen = $event">
    <DialogContent>
      <DialogHeader>
        <DialogTitle class="p-3">Perfil del usuario</DialogTitle>
        <DialogDescription>
          <template v-if="userProfile">
            <div class="grid grid-cols-2 gap-4">
              <!-- Imagen -->
              <div class="px-8">
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
                <p class="font-semibold">
                  Nombre: <span>{{ userProfile.name }}</span>
                </p>
                <p class="font-semibold">
                  Email: <span>{{ userProfile.email }}</span>
                </p>
                <p class="font-semibold">
                  Rol: <span>{{ userProfile.role.name }}</span>
                </p>
              </div>

              <!-- Compañías y Subcompañías -->
              <div class="col-span-2 mt-5">
                <p class="font-semibold">Compañía:</p>
                <ul>
                  <li
                    v-for="company in userProfile.profile.companies"
                    :key="company.id"
                  >
                    <span>{{ company.name }}</span>
                    <ul class="ml-4 float-right">
                      <p class="font-semibold">Subcompañías:</p>
                      <li
                        v-for="subcompany in company.subcompanies"
                        :key="subcompany.id"
                      >
                        <span>{{ subcompany.name }}</span>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <img
                src="/src/assets/logoPignus.png"
                alt=""
                width="200px"
                height="100px"
                class="rounded-full col-span-1"
              />
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

defineProps({
  userProfile: {
    type: Object,
    required: true,
  },
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
