<template>
  <div
    class="flex flex-col h-full p-2 bg-green text-white bg-primaryBlue w-[250px]"
  >
    <div class="grid place-items-center">
      <img
        src="/src/assets/pignus-logo-white.webp"
        alt=""
        width="200px"
        class="py-8"
      />
    </div>
    <div class="flex-1 space-y-4 py-5">
      <SidebarItem icon="gestion" text="Gestión de usuarios" />
      <SidebarItem icon="empresa" text="Ver empresa" />
      <SidebarItem icon="dashboard" text="Dashboard KPI" />
      <SidebarItem icon="capacitaciones" text="Ver capacitaciones" />
    </div>
    <div class="space-y-4 mt-auto">
      <SidebarItem icon="perfil" text="Ver perfil" />
      <SidebarItem
        icon="logout"
        text="Cerrar sesión"
        @click="useAuth().destoreUser"
      />
    </div>
  </div>
</template>

<script setup>
import { useAuth } from "@/stores/store";
import SidebarItem from "@/components/SideBarItem.vue";
</script>
