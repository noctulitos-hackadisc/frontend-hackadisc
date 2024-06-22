<template>
  <Button disabled>
    <span v-if="!props.loading">Iniciar Sesión</span>

    <Loader2 v-if="props.loading" class="w-4 h-4 mr-2 animate-spin" />
    <span v-if="props.loading">Cargando...</span>
  </Button>
</template>

<script setup>
import { Loader2 } from "lucide-vue-next";
import { Button } from "@/components/ui/button";

const props = defineProps({
  loading: Boolean,
});
</script>
