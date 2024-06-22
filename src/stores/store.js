import { defineStore } from "pinia";
import { ref } from "vue";

import router from "@/router/router";

export const useAuth = defineStore(
  "store",
  () => {
    const user = ref(null);
    const token = ref(null);

    function storeUser(data) {
      user.value = data.user;
      token.value = data.access_token;
      console.log("data", data);
      router.push({ name: "Home" });
    }

    function destoreUser() {
      user.value = null;
      token.value = null;
      router.push({ name: "Login" });
    }

    return { user, token, storeUser, destoreUser };
  },
  { persist: true }
);
