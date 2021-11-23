<template>
  <div @click="log">
    {{ message }}
  </div>
  <div @click="log2">{{ count }}</div>
  <div @click="log3">{{ obj }}</div>
  <component-a ref="child"></component-a>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import componentA from "./ComponentA.vue";

let message = 1;
let count = ref(0);
let obj = reactive({ x: 11 });
let child = ref(null);
const childFn = () => {
  return child.value.getText();
};

function log() {
  message++;
  console.log("message_", message);
}
function log2() {
  count.value++;
}
function log3() {
  obj.x++;
}
onMounted(() => {
  console.log(childFn());
});
</script>

<style scoped>
</style>