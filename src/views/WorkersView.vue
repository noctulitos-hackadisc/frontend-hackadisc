<template>
  <div class="w-full overflow-x-auto">
    <h1 v-if="!loading" class="text-4xl font-bold mt-16 mb-4 ml-10">
      Trabajadores de
      <span class="text-primaryGreen">{{ companyName }}</span>
    </h1>

    <button
      v-if="!loading"
      @click="$router.go(-1)"
      class="ml-10 mb-4 rounded px-2 disabled:opacity-50 disabled:cursor-not-allowed text-white bg-primaryBlue hover:bg-blue-500 transition-all duration-500 ease-in-out"
    >
      <- Volver
    </button>

    <div v-if="loading" class="grid place-items-center h-[100dvh]">
      <div class="grid place-items-center">
        <Loader2 class="size-[128px] mr-2 animate-spin text-colorLime" />
        <span class="text-gray-600 mt-4">Cargando trabajadores...</span>
      </div>
    </div>

    <div v-if="!loading && data" class="mx-10 mb-16">
      <UsersTable :data="data" :columns="columns" class="shadow-xl" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, h } from "vue";
import { Loader2 } from "lucide-vue-next";
import { useRoute } from "vue-router";

import { api } from "@/api";

import UsersTable from "@/components/user/UsersTable.vue";
import TableDropdown from "@/components/TableDropdown.vue";

const route = useRoute();

const data = ref(null);
const loading = ref(false);

const companyName = ref(null);

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
    accessorKey: "area",
    cell: (info) => info.getValue().name,
    header: "Área",
  },
  {
    accessorKey: "post",
    cell: (info) => info.getValue().name,
    header: "Puesto",
  },
  {
    accessorKey: "status",
    cell: (info) => info.getValue().type,
    header: "Estado",
  },
  {
    accessorKey: "options",
    header: "Acciones",
    cell: ({ row }) => h(TableDropdown, { id: row.original.id }),
    enableSorting: false,
  },
];

const fetchWorkers = async () => {
  loading.value = true;

  try {
    const res = await api.get(`/companies/${route.params.id}`);
    companyName.value = res.data[0].company_name;
    data.value = res.data;
  } catch (e) {
    console.log(e);
  }

  loading.value = false;

  return data;
};

onMounted(() => {
  fetchWorkers();
});
</script>
