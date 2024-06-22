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
      <LoginButton :disabled="loading" :loading="loading"></LoginButton>
    </div>

    <span
      v-if="error"
      class="flex items-center p-4 mb-4 text-sm text-red-700 border border-red-300 rounded-lg bg-red-50 font-semibold"
      >{{ error }}</span
    >
  </form>
</template>

<script setup>
import { ref } from "vue";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/stores/store";

import LoginButton from "@/components/LoginButton.vue";

import { api } from "@/api";

const auth = useAuth();

const error = ref("");
const loading = ref(false);

const email = ref("");
const password = ref("");

const onSubmit = async (event) => {
  event.preventDefault();

  error.value = "";

  if (!email.value || !password.value) {
    error.value = "* Correo electrónico y contraseña son requeridos";
    return;
  }

  const userToLogin = {
    email: email.value,
    password: password.value,
  };

  loading.value = true;

  try {
    const res = await api.post("/auth/login", userToLogin);

    console.log("res", res.data);

    auth.storeUser(res.data);
  } catch (e) {
    error.value = "* Credenciales incorrectas";
  }

  loading.value = false;
};
</script>

<style scoped>
button {
  background-color: #0a2e59;
}
</style>
