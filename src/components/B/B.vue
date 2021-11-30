<template>
  <component-b
    ref="child"
    @parentEmit="parentEmit"
    @parentEmitTwo="parentEmit2"
    msg="1231231"
  ></component-b>
</template>

<script setup>
import componentB from "./ComponentB.vue";
const parentEmit = (res) => {
  console.log(res);
};
const parentEmit2 = (res) => {
  console.log(res);
};
</script>

<style scoped>
</style>