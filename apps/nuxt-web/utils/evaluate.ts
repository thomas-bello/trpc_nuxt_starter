export const evaluate = (str: string, variables: any) => {
  return str.replace(/\${(.*?)}/g, (match, p1) => variables[p1] ?? '')
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it('evaluate', () => {
    expect(evaluate('${a}bc', { a: 'a' })).toBe('abc')
    expect(evaluate('${a}bc', {})).toBe('bc')
    expect(evaluate('${a}b${a}c${c}', { a: 'a', c: '1' })).toBe('abac1')
    expect(evaluate('abc?u=${redirectTo}', { redirectTo: '123' })).toBe('abc?u=123')
  })
}
