const s1 = 1000
const m1 = 60 * s1
const h1 = 60 * m1
const d1 = 24 * h1

export const getWhereForSomeDay = (day?: string) => {
  const specificDate = day ? new Date(day) : new Date()

  return {
    gte: specificDate,
    lt: new Date(specificDate.getTime() + d1),
  }
}
