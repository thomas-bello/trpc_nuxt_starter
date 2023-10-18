export const getWindow = () => (typeof window !== 'undefined' ? window : undefined)

interface ScriptUrlType {
  attrs: Record<string, any>
  onload?: () => void
  checkFunc?: () => boolean
  tag?: 'script' | 'link'
}

const attrs2CssSelector = (attrs: Record<string, string>) => {
  return Object.keys(attrs)
    .map((key) => {
      return `[${key}="${attrs[key]}"]`
    })
    .join('')
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it('attrs2CssSelector', () => {
    expect(
      attrs2CssSelector({
        src: '//test.com',
      })
    ).toBe('[src="//test.com"]')
    expect(
      attrs2CssSelector({
        href: '//test.com',
        rel: 'stylesheet',
        type: 'text/css',
      })
    ).toBe('[href="//test.com"][rel="stylesheet"][type="text/css"]')
  })
}

export const getElementByTagAndAttrs = (tag: string, attrs?: ScriptUrlType['attrs'], doc?: any, isAll = false) => {
  return (doc || getWindow().document)[isAll ? 'querySelectorAll' : 'querySelector'](
    `${tag}${attrs2CssSelector(attrs || {})}`
  )
}

export const hasElementByTagAndAttrs = (tag: string, attrs: ScriptUrlType['attrs']) => {
  return !!getElementByTagAndAttrs(tag, attrs)
}

const appendScript = (urlConfig: ScriptUrlType) => {
  const { attrs, onload, checkFunc, tag = 'script' } = urlConfig

  if (hasElementByTagAndAttrs(tag, attrs)) return

  if (checkFunc && !checkFunc()) return

  const ele = getWindow().document.createElement(tag)

  Object.keys(attrs).forEach((key) => {
    ele[key] = attrs[key]
  })

  ele.onload = () => {
    if (onload) {
      onload()
    }
  }
  getWindow().document.body.append(ele)
}

export const appendScripts = (urlConfigs: ScriptUrlType[]) => {
  urlConfigs.forEach((item) => {
    appendScript(item)
  })
}

export const getElementsByClassName = (className: string, doc?: any) => {
  return (doc || getWindow().document).getElementsByClassName(className)
}
