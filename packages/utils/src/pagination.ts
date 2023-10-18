export const getPagination = (page = 1, limit = 10) => {
  return {
    skip: (page - 1) * limit,
    take: limit,
  }
}

const getHasNext = (total: number, page = 1, limit = 10) => {
  return total > page * limit
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it('getHasNext', () => {
    expect(getHasNext(11)).toBe(true)
    expect(getHasNext(4)).toBe(false)
  })
}

export const getMeta = (total: number, page = 1, limit = 10) => {
  return {
    total,
    page,
    limit,
    hasNext: getHasNext(total, page, limit),
  }
}
