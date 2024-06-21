<template>
  <Table>
    <TableCaption>A list of your recent invoices.</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead v-for="col in columns" :key="col.name">{{
          col.name
        }}</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="(row, rowIndex) in data" :key="rowIndex">
        <TableCell v-for="(value, key) in row" :key="key">
          {{ value }}
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>

<script setup>
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const props = defineProps({
  data: Array,
  columns: Array,
});
</script>
