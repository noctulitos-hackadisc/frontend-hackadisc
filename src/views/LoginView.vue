<template>
  <div class="flex min-h-screen">
    <!-- Left Side -->
    <div class="relative w-1/2 text-white flex flex-col justify-between p-8">
      <div
        class="absolute inset-0 bg-cover bg-center"
        style="background-image: url('/src/assets/bg-pignus.png')"
      ></div>
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="relative z-10"></div>
      <div class="relative z-10 text-center mt-8">
        <blockquote class="italic">
          "Te entregamos una manera de evitar accidentes por factores de
          comportamiento al fortalecer las competencias ligadas a la seguridad
          mediante el uso de realidad virtual e inteligencia artificial"
        </blockquote>
        <p class="mt-4">Noctulitos</p>
      </div>
    </div>

    <!-- Right Side -->
    <div class="w-1/2 flex items-center justify-center">
      <div class="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-2xl">
        <h2 class="text-2xl font-bold text-center text-gray-700">
          Iniciar sesión
        </h2>
        <LoginForm />
        <div class="relative my-4">
          <div class="absolute inset-0 flex items-center">
            <span class="w-full border-t" />
          </div>
          <div class="relative flex justify-center"></div>
        </div>
        <p class="text-center text-sm text-muted-foreground">
          Al iniciar sesión aceptas nuestros
          <a class="underline underline-offset-4 hover:text-primary">
            Términos de servicio
          </a>
          y
          <a class="underline underline-offset-4 hover:text-primary">
            Política de privacidad </a
          >.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import LoginForm from "@/components/LoginForm.vue";
</script>
