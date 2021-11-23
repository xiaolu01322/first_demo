<template>
  <component-b
    ref="child"
    @parentEmit="parentEmit"
    msg="1231231"
  ></component-b>
</template>

<script setup>
import { ref } from "vue";
import componentB from "./ComponentB.vue";

let child = ref(null);
const parentEmit = (res) => {
  console.log(res);
};
</script>

<style scoped>
</style>