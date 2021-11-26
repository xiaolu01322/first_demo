<template>
<div>
  <div>{{useList}}</div>
  <div>{{list}}</div>
</div>
</template>

<script setup>
import useGetList from '@/js/useGetList.js'
import getList from '@/js/getList.js'

const {useList,useGetListFn}   = useGetList()
const {list,getListFn} = getList()

useGetListFn(1)
getListFn(1)


</script>

<style scoped>
</style>