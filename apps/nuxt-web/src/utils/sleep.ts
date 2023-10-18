export const sleep = (s: number) => {
  return new Promise((r) => {
    setTimeout(() => {
      r(1)
    }, s)
  })
}
