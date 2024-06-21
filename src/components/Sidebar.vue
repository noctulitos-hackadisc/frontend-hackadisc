<template>
  <div
    class="flex flex-col h-full p-2 bg-green text-white bg-primaryBlue min-w-[250px] max-w-[250px]"
  >
    <div
      class="grid place-items-center hover:cursor-pointer"
      @click="$router.push({ name: 'Home' })"
    >
      <img
        src="/src/assets/pignus-logo-white.webp"
        alt=""
        width="200px"
        class="py-8"
      />
    </div>
    <div class="flex-1 space-y-4 py-5">
      <SidebarItem icon="managment" text="Gestión de usuarios" />
      <SidebarItem
        icon="company"
        text="Ver empresa"
        @click="$router.push({ name: 'Company' })"
      />
      <DropdownSidebarItem icon="dashboard" text="Dashboard KPI" />
      <SidebarItem
        icon="interventions"
        text="Ver capacitaciones"
        @click="$router.push({ name: 'Interventions' })"
      />
    </div>
    <div class="space-y-4 mt-auto">
      <SidebarItem icon="profile" text="Ver perfil" />
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
import DropdownSidebarItem from "@/components/DropdownSidebarItem.vue";
</script>
