<template>
<div>
  <div>{{useList}}</div>
  <div @click="index++">{{list}}{{index}}</div>
</div>
</template>

<script setup>
import useGetList from '@/js/useGetList.js'
import getList from '@/js/getList.js'
import { ref ,watch} from 'vue'
const index = ref(1)
const {useList,useGetListFn}   = useGetList()
const {list,getListFn} = getList()

useGetListFn(index.value)
getListFn(index.value)

watch(index, ()=>{
  useGetListFn(index.value)
})



</script>

<style scoped>
</style>