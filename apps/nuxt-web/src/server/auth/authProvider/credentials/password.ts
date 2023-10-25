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

export const checkPassword = (email: string, password: string, userPassword: string) => {
  console.log('checkPassword email', email, 'password', password, 'userPassword', userPassword)
  const isPass = compareSync(getPlain(email, password), userPassword)

  console.log('checkPassword isPass', isPass)
  return isPass
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it('hashPassword', () => {
    const hash1 = hashPassword('1', '2')
    const hash2 = hashPassword('1', '2')
    const hash3 = hashPassword('thomas_0836@qq.com', '123456')

    expect(checkPassword('1', '2', hash1)).toBe(true)
    expect(checkPassword('1', '2', hash2)).toBe(true)
    expect(hash1 !== hash2).toBe(true)
    expect(checkPassword('thomas_0836@qq.com', '123456', hash3)).toBe(true)
    expect(checkPassword('1', '2', hash3)).toBe(false)
  })
}
