<template>
    <div class="max-w-lg mx-auto">
      <div class="bg-gray-100 border border-gray-300 p-4 rounded-lg mb-4">
        <div
          v-for="(message, index) in messages"
          :key="index"
          class="py-2 px-4 mb-2 rounded-lg inline-block"
          :class="{ 'bg-blue-500 text-white self-end': message.from === 'user', 'bg-gray-300 text-black self-start': message.from === 'chatGpt' }"
        >
          {{ message.data }}
        </div>
      </div>
      <div class="flex items-center space-x-4">
        <input
          type="text"
          v-model="currentMessage"
          @keyup.enter="sendMessage"
          placeholder="Escribe tu mensaje aquí..."
          class="flex-1 border border-gray-300 rounded-lg py-2 px-4"
        />
        <button
          @click="sendMessage"
          :disabled="currentMessage.trim() === ''"
          class="bg-blue-500 text-white py-2 px-4 rounded-lg disabled:bg-gray-400 disabled:pointer-events-none"
        >
          Enviar
        </button>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'ChatBox',
    data() {
      return {
        currentMessage: '',
        messages: [],
      };
    },
    methods: {
      async sendMessage(message) {
        this.messages.push({
          from: 'user',
          data: message,
        });
        await axios.post('http://localhost:3000/chatbot', {
          message: message,
        })
        .then((response) => {
          this.messages.push({
            from: 'chatGpt',
            data: response.data.data,
          })
        });
      }
    }
  };
  </script>