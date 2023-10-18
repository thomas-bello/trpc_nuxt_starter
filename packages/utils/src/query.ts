const getQueryKeyMap = () => ({
  inviter: '_iter', // 邀请人
  id: '_i',
  msg: 'msg',
  callback: 'callback', // 重定向
  error: 'error', // next auth 的错误
})

type QueryKeyType = keyof ReturnType<typeof getQueryKeyMap>

export const getQueryKey = (key: QueryKeyType) => {
  return getQueryKeyMap()[key]
}

// export const useQueryValue = <T = string>(key: QueryKeyType, def?: T): T => {
//   const searchParams = useSearchParams()
//   // console.log("useQueryValue searchParams", searchParams)
//   const val = searchParams.get(getQueryKey(key)) ?? def
//   // console.log("useQueryValue key", key, "val", val)
//   return val as T
// }

// export const useQueryValueList = (keys: QueryKeyType[], defs: any[] = []) => {
//   const searchParams = useSearchParams()
//   // console.log("useQueryValue searchParams", searchParams)
//   return keys.map((key, i) => searchParams.get(getQueryKey(key)) ?? defs[i])
// }
