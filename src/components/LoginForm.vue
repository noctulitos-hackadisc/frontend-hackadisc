<template>
  <div class="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-xl">
    <h2 class="text-2xl font-bold text-center text-gray-700">Iniciar sesión</h2>
    <form @submit.prevent="handleSubmit">
      <div class="space-y-4">
        <InputField
          id="email"
          label="Email"
          type="email"
          v-model="email"
        />
        <InputField
          id="password"
          label="Password"
          type="password"
          v-model="password"
        />
      </div>
      <div class="flex items-center justify-between mt-10">
        <SubmitButton type="submit">Login</SubmitButton>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import InputField from './InputField.vue'
import SubmitButton from './SubmitButton.vue'

const email = ref('')
const password = ref('')

const handleSubmit = () => {
  console.log('Email:', email.value)
  console.log('Password:', password.value)
  // Aquí puedes agregar la lógica para manejar el login
}
</script>
