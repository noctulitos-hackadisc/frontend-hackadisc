<template>
  <form @submit="onSubmit">
    <div class="py-5">
      <div>
        <Label class="sr-only" for="email">Email</Label>
        <Input id="email" placeholder="nombre@pignus.cl" v-model="email" />
      </div>
    </div>
    <div class="grid gap-5 py-5">
      <div>
        <Label class="sr-only" for="password">Password</Label>
        <Input
          id="password"
          placeholder="********"
          type="password"
          v-model="password"
        />
      </div>
      <Button> Iniciar sesión </Button>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useAuth } from "@/stores/store";

const auth = useAuth();

const email = ref("");
const password = ref("");

const onSubmit = async (event) => {
  event.preventDefault();

  const userToLogin = {
    email: email.value,
    password: password.value,
  };

  auth.storeUser(userToLogin);
};
</script>

<style scoped>
button {
  background-color: #0a2e59;
}
</style>
