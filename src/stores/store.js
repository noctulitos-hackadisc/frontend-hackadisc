import { defineStore } from "pinia";
import { ref } from "vue";

import router from "@/router/router";

export const useAuth = defineStore(
  "store",
  () => {
    const user = ref(null);

    function storeUser(data) {
      user.value = data;
      router.push({ name: "Dashboard" });
    }

    function destoreUser() {
      user.value = null;
      router.push({ name: "Login" });
    }

    return { user, storeUser, destoreUser };
  },
  { persist: true }
);
