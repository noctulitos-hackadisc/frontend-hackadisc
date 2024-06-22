<template>
  <div class="w-full overflow-x-auto">
    <h1 class="text-4xl font-bold my-16 ml-10">
      Empresas de
      <span class="text-primaryGreen">{{ useAuth().user.name }}</span>
    </h1>

    <div v-if="loading" class="grid place-items-center h-[50dvh]">
      <div class="grid place-items-center">
        <Loader2 class="size-[128px] mr-2 animate-spin text-colorLime" />
        <span class="text-gray-600 mt-4">Cargando empresas...</span>
      </div>
    </div>

    <div v-if="!loading && data" class="mx-10 mb-16">
      <CompanyTable :data="data" :columns="columns" class="shadow-xl" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Loader2 } from "lucide-vue-next";
import CompanyTable from "@/components/company/CompanyTable.vue";

import { useAuth } from "@/stores/store";

import { api } from "@/api";

const data = ref(null);
const loading = ref(false);

const columns = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Nombre",
  },
  {
    accessorKey: "subcompanies",
    header: "Total de Sub Empresas",
    cell: (info) => countSubcompanies(info),
  },
];

const countSubcompanies = (subcompanies) => {
  if (subcompanies.getValue()) {
    return subcompanies.getValue().length;
  } else return 0;
};

const fetchCompanies = async () => {
  loading.value = true;

  try {
    const res = await api.get("/profile");
    data.value = res.data.user.profile.companies;
  } catch (e) {
    console.log(e);
  }

  loading.value = false;

  return data;
};

onMounted(() => {
  fetchCompanies();
});
</script>
