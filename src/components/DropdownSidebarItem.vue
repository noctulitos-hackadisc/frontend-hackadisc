<template>
    <div class="dropdown-sidebar-item">
      <div @click="toggleDropdown" class="flex items-center justify-between cursor-pointer hover:bg-colorLime rounded-full">
        <SidebarItem :icon="icon" :text="text" />
        <DropdownIcon class="mr-3"/>
      </div>
      <div v-if="isOpen" class="pl-4 space-y-2">
        <SidebarItem icon="estadisticas" text="Datos" @click="$router.push({name:'Dashboard'})" />
        <SidebarItem icon="metricas" text="Estadísticas" />
      </div>
    </div>
  </template>
  
  
  <script setup>
  import { ref } from 'vue'
  import SidebarItem from '@/components/SideBarItem.vue'
  import DropdownIcon from '@/components/icons/DropdownIcon.vue'
  
  const props = defineProps({
    icon: String,
    text: String,
  })
  
  const isOpen = ref(false)
  
  const toggleDropdown = () => {
    console.log('toggleDropdown')
    isOpen.value = !isOpen.value
  }
  </script>
