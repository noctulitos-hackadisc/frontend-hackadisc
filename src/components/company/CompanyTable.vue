<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="mt-8 flow-root">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div class="grid grid-cols-2 my-4 mb-8">
            <input
              type="text"
              class="border border-gray-400 rounded px-2 py-2 w-[80px] md:w-[250px]"
              placeholder="Buscar por..."
              v-model="filter"
            />

            <div class="grid place-items-end">
              <div class="inline-flex space-x-4">
                <button
                  class="rounded px-2 py-2 disabled:opacity-50 disabled:cursor-not-allowed text-white bg-primaryBlue hover:bg-blue-500 transition-all duration-500 ease-in-out"
                  :disabled="!table.getCanPreviousPage()"
                  @click="table.previousPage()"
                >
                  <- Página
                </button>
                <button
                  class="rounded px-2 py-2 disabled:opacity-50 disabled:cursor-not-allowed text-white bg-primaryBlue hover:bg-blue-500 transition-all duration-500 ease-in-out"
                  :disabled="!table.getCanNextPage()"
                  @click="table.nextPage()"
                >
                  Página ->
                </button>
              </div>
            </div>
          </div>

          <table class="min-w-full divide-y divide-gray-300">
            <thead>
              <tr
                v-for="headerGroup in table.getHeaderGroups()"
                :key="headerGroup.id"
              >
                <th
                  v-for="header in headerGroup.headers"
                  :key="header.id"
                  scope="col"
                  class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 hover:bg-gray-100"
                  :class="{
                    'cursor-pointer select-none': header.column.getCanSort(),
                    'text-center':
                      header.column.columnDef.accessorKey == 'subcompanies' ||
                      header.column.columnDef.accessorKey == 'options',
                  }"
                  @click="header.column.getToggleSortingHandler()?.($event)"
                >
                  <FlexRender
                    :render="header.column.columnDef.header"
                    :props="header.getContext()"
                  />
                  {{ { asc: " ↑", desc: "↓" }[header.column.getIsSorted()] }}
                </th>
              </tr>
            </thead>

            <tbody class="divide-y divide-gray-200">
              <tr
                v-for="row in table.getRowModel().rows"
                :key="row.id"
                class="hover:bg-gray-100 transition-all duration-500 ease-in-out hover:cursor-pointer"
              >
                <td
                  v-for="cell in row.getVisibleCells()"
                  :key="cell.id"
                  class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                  :class="{
                    'font-semibold': cell.column.columnDef.accessorKey == 'id',
                    'text-center':
                      cell.column.columnDef.accessorKey == 'subcompanies' ||
                      cell.column.columnDef.accessorKey == 'options',
                  }"
                >
                  <FlexRender
                    :render="cell.column.columnDef.cell"
                    :props="cell.getContext()"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="mt-8">
        Página
        <span class="font-bold">{{
          table.getState().pagination.pageIndex + 1
        }}</span>
        de {{ table.getPageCount() }} -
        {{ table.getFilteredRowModel().rows.length }} resultados
      </div>

      <div class="mt-2 md:space-x-4 space-y-4">
        <button
          class="rounded px-2 py-2 disabled:opacity-50 disabled:cursor-not-allowed text-white bg-primaryBlue hover:bg-blue-500 transition-all duration-500 ease-in-out"
          @click="table.setPageSize(5)"
        >
          Mostrar 5 datos
        </button>
        <button
          class="rounded px-2 py-2 disabled:opacity-50 disabled:cursor-not-allowed text-white bg-primaryBlue hover:bg-blue-500 transition-all duration-500 ease-in-out"
          @click="table.setPageSize(10)"
        >
          Mostrar 10 datos
        </button>
        <button
          class="rounded px-2 py-2 disabled:opacity-50 disabled:cursor-not-allowed text-white bg-primaryBlue hover:bg-blue-500 transition-all duration-500 ease-in-out"
          @click="table.setPageSize(20)"
        >
          Mostrar 20 datos
        </button>
      </div>

      <div class="md:space-x-4 mb-8 space-y-4">
        <button
          class="rounded px-2 py-2 disabled:opacity-50 disabled:cursor-not-allowed text-white bg-primaryBlue hover:bg-blue-500 transition-all duration-500 ease-in-out"
          @click="table.setPageIndex(0)"
        >
          Primera Página
        </button>

        <button
          class="rounded px-2 py-2 disabled:opacity-50 disabled:cursor-not-allowed text-white bg-primaryBlue hover:bg-blue-500 transition-all duration-500 ease-in-out"
          :disabled="!table.getCanPreviousPage()"
          @click="table.previousPage()"
        >
          <- Página
        </button>
        <button
          class="rounded px-2 py-2 disabled:opacity-50 disabled:cursor-not-allowed text-white bg-primaryBlue hover:bg-blue-500 transition-all duration-500 ease-in-out"
          :disabled="!table.getCanNextPage()"
          @click="table.nextPage()"
        >
          Página ->
        </button>

        <button
          class="rounded px-2 py-2 disabled:opacity-50 disabled:cursor-not-allowed text-white bg-primaryBlue hover:bg-blue-500 transition-all duration-500 ease-in-out"
          @click="table.setPageIndex(table.getPageCount() - 1)"
        >
          Última Página
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  data: Array,
  columns: Array,
});

import {
  useVueTable,
  FlexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/vue-table";

const data = ref(props.data);

const sorting = ref([]);
const filter = ref("");

const table = useVueTable({
  data: data.value,
  columns: props.columns,
  getCoreRowModel: getCoreRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  getSortedRowModel: getSortedRowModel(),
  getFilteredRowModel: getFilteredRowModel(),
  state: {
    get sorting() {
      return sorting.value;
    },
    get globalFilter() {
      return filter.value;
    },
  },
  onSortingChange: (updaterOrValue) => {
    sorting.value =
      typeof updaterOrValue === "function"
        ? updaterOrValue(sorting.value)
        : updaterOrValue;
  },
  initialState: {
    pagination: {
      pageSize: 15,
    },
  },
});
</script>
