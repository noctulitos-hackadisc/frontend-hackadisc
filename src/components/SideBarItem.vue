<template>
  <div
    class="flex items-center p-3 cursor-pointer hover:bg-colorLime rounded-full transition-all duration-300 ease-in-out"
  >
    <component :is="iconComponent" class="w-7 h-8" />
    <span class="ml-2">{{ text }}</span>
    <div class="mx-4">
      <slot name="icon" />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

import HomeIcon from "./icons/HomeIcon.vue";
import SettingsIcon from "./icons/SettingsIcon.vue";
import LogoutIcon from "./icons/LogoutIcon.vue";
import CompanyIcon from "./icons/CompanyIcon.vue";
import DashboardIcon from "./icons/DashboardIcon.vue";
import InterventionIcon from "./icons/InterventionIcon.vue";
import ProfileIcon from "./icons/ProfileIcon.vue";
import MetricIcon from "./icons/MetricIcon.vue";
import StatsIcon from "./icons/StatsIcon.vue";

const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});

const iconComponent = computed(() => {
  switch (props.icon) {
    case "home":
      return HomeIcon;
    case "settings":
      return SettingsIcon;
    case "logout":
      return LogoutIcon;
    case "company":
      return CompanyIcon;
    case "dashboard":
      return DashboardIcon;
    case "interventions":
      return InterventionIcon;
    case "profile":
      return ProfileIcon;
    case "metrics":
    case "metricas":
      return MetricIcon;
    case "statistics":
      return StatsIcon;
    default:
      return null;
  }
});
</script>
