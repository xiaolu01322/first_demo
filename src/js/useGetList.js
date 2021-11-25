import getList from "./getList";
import { ref } from 'vue'

export default function useGetList(index) {
  const { list, getListFn } = getList(index)
  const useList = ref([])
  const useGetListFn = async () => {
    await getListFn()
    useList.value = list.value.concat(['aaaa'])
  }

  return {
    useList,
    useGetListFn
  }

}