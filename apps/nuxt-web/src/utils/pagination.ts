export const getPaginationProps = (page = 1, limit = 10) => {
  return {
    skip: (page - 1) * limit,
    take: limit,
  }
}

export const getHasNext = (total: number, page = 1, limit = 10) => {
  return total > page * limit
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it('getHasNext', () => {
    expect(getHasNext(11)).toBe(true)
    expect(getHasNext(4)).toBe(false)
  })
}
