<template>
<div @click="change">1_{{msg}}</div>

</template>

<script setup>
import { defineEmits,defineProps } from 'vue';
const parentEmit =  defineEmits(['parentEmit']); // 使用defineEmits和defineProps不需要导入
defineProps({
  msg: String
})
const change = () =>{
  parentEmit('parentEmit',123)
}
</script>

<style scoped>
</style>