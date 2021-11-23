<template>
  <div @click="log">
    {{ message }}
  </div>
  <div @click="log2">{{ count }}</div>
  <div @click="log3">{{obj}}</div>
</template>

<script setup>
import { reactive, ref } from "vue";
let message = 1;
let count = ref(0);
let obj = reactive({x:11})
function log(){
  message++
  console.log('message_',message)
}
function log2(){
  count.value ++ 
}
function log3(){
  obj.x++
}

</script>

<style scoped>
</style>
