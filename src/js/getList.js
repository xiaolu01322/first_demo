import { ref } from 'vue'
export default function getList() {
  const list = ref([])
  const getListFn = (index) => {
    list.value = index == 1 ? [1, 2, 3, 4, 5, 6] : [7, 8, 9, 10, 11]
  }


  return {list , getListFn } 
}