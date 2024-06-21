<template>
  <div class="dropdown-sidebar-item">
    <div
      @click="toggleDropdown"
      class="flex items-center justify-between cursor-pointer rounded-full"
    >
      <SidebarItem :icon="icon" :text="text">
        <template v-slot:icon>
          <DropdownIcon class="mr-3" />
        </template>
      </SidebarItem>
    </div>
    <div v-if="isOpen" class="pl-4 space-y-2 mt-2">
      <SidebarItem
        icon="estadisticas"
        text="Datos"
        @click="$router.push({ name: 'Dashboard' })"
      />
      <SidebarItem icon="metricas" text="Estadísticas" @click="$router.push({ name: 'Statistics' })" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SidebarItem from "@/components/SideBarItem.vue";
import DropdownIcon from "@/components/icons/DropdownIcon.vue";

const props = defineProps({
  icon: String,
  text: String,
});

const isOpen = ref(false);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};
</script>
