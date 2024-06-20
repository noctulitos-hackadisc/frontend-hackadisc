<template>
  <div class="flex flex-col h-full p-2 bg-green text-white bg-primaryGreen">
    <div>
      <img src="/src/assets/logoPignus.png" alt="" width="200px" class="py-8">
    </div>
    <div class="flex-1 space-y-4 py-5">
      <SidebarItem icon="gestion" text="Gestión de usuarios" />
      <SidebarItem icon="empresa" text="Ver empresa" />
      <SidebarItem icon="dashboard" text="Dashboard KPI" />
      <SidebarItem icon="capacitaciones" text="Ver capacitaciones" />
    </div>
    <div class="space-y-4 mt-auto">
      <SidebarItem icon="perfil" text="Ver perfil" />
      <SidebarItem icon="logout" text="Cerrar sesión" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import SidebarItem from '@/components/SideBarItem.vue';
</script>