<template>
<div>
  <div>{{useList}}</div>
  <div>{{list}}</div>
</div>
</template>

<script setup>
import useGetList from '@/js/useGetList.js'
import getList from '@/js/getList.js'

const {useList,useGetListFn}   = useGetList(1)
const {list,getListFn} = getList(2)

useGetListFn()
getListFn()


</script>

<style scoped>
</style>