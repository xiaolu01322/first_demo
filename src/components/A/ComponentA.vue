<template>
<div >1</div>
</template>

<script setup>
import {defineExpose} from "vue";
function getText(){
  return "hhhh"
}
const  a = 1
defineExpose({
    a,
    getText
})
</script>

<style scoped>
</style>