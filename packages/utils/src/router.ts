// import * as React from "react"

// import { usePathname, useSearchParams } from "next/navigation"
// import { useRouter } from "next/router"
// import { parse, stringify } from "qs"

// export const useRouterHelper = () => {
//   const router = useRouter()
//   const pathname = usePathname()
//   const searchParams = useSearchParams()

//   // Get a new searchParams string by merging the current
//   // searchParams with a provided key/value pair
//   const createQueryString = React.useCallback(
//     (query: Record<string, any>) => {
//       const params = new URLSearchParams(searchParams as any)
//       const paramsStr = params.toString()

//       const paramsObj = parse(paramsStr)
//       const newQuery = {
//         ...paramsObj,
//         ...query,
//       }
//       return stringify(newQuery)
//     },
//     [searchParams]
//   )

//   return {
//     router,
//     pathname,
//     searchParams,
//     createQueryString,
//   }
// }
