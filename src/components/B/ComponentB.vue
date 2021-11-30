<template>
  <div @click="change">点我点我</div>
</template>

<script setup>
import { defineEmits } from "vue";
const emit = defineEmits(["parentEmit", "parentEmitTwo"]);
const change = () => {
  emit("parentEmit", 123);
  emit("parentEmitTwo", 456);
};
</script>

<style scoped>
</style>
