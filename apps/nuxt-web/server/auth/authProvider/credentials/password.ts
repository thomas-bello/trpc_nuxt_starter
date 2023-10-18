import { compareSync, genSaltSync, hashSync, setRandomFallback } from 'bcryptjs'
// const { compareSync, genSaltSync, hashSync } = bcryptjs

const hashSecret = '123456'

// 设置替代的随机数生成器
setRandomFallback((len) => {
  const buf = new Uint8Array(len)
  for (let i = 0; i < len; i++) {
    buf[i] = Math.floor(Math.random() * 256)
  }
  return buf as any
})

const getPlain = (email: string, password: string) => {
  return `${email}_${password}_${hashSecret}`
}

export const hashPassword = (email: string, password: string) => {
  const salt = genSaltSync(10)
  const hash = hashSync(getPlain(email, password), salt)

  return hash
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it('hashPassword', () => {
    const hash1 = hashPassword('1', '2')
    const hash2 = hashPassword('1', '2')
    const hash3 = hashPassword('1', '3')

    expect(compareSync(getPlain('1', '2'), hash1)).toBe(true)
    expect(compareSync(getPlain('1', '2'), hash2)).toBe(true)
    expect(hash1 !== hash2).toBe(true)
    expect(compareSync(getPlain('1', '3'), hash3)).toBe(true)
    expect(compareSync(getPlain('1', '2'), hash3)).toBe(false)
  })
}

export const checkPassword = (email: string, password: string, userPassword: string) => {
  return compareSync(getPlain(email, password), userPassword)
}
