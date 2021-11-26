<template>
<div>
  <div>{{list}}</div>
</div>
</template>

<script setup>
import getListJs from '@/js/getList.js'
import { onMounted } from '@vue/runtime-core'
const {list,getListFn}   = getListJs()

onMounted(()=>{
  getListFn(4)
})

</script>

<style scoped>
</style>