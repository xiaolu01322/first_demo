<template>
  <div>{{ num1 }}</div>
  <div>{{ num2 }}</div>
  <div>{{ num3 }}</div>
  <div>{{ num4 }}</div>
</template>

<script setup>
import { reactive, ref } from "vue";
let num1 = 10;
let num2 = ref(100);
let num3 = reactive(1000);
let num4 = reactive({ val: 1000 });
console.log(num1, num2, num3, num4);
console.log(num2.value)
</script>

<style scoped>
</style>
