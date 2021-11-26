import getList from "./getList";
import { ref } from 'vue'

export default function useGetList() {
  const { list, getListFn } = getList()
  const useList = ref([])
  const useGetListFn = async (index) => {
    await getListFn(index)
    useList.value = list.value.concat(['aaaa'])
  }

  return {
    useList,
    useGetListFn
  }

}