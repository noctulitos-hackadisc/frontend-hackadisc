<template>
  <div class="inline-flex h-screen">
    <Sidebar v-if="auth.user" />
    <RouterView />
  </div>
</template>

<script setup>
import Sidebar from "@/components/Sidebar.vue";
import { RouterView } from "vue-router";
import { useAuth } from "@/stores/store";

const auth = useAuth();
</script>
