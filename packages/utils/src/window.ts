export const isClient = () => typeof window !== 'undefined'

export const getWindow = () => window

export const getLocation = () => (getWindow() || {}).location

export const getLocationHost = () => {
  const { host } = getLocation() || {}

  return host
}

export const getLocationOrigin = () => {
  const { origin } = getLocation() || {}

  return origin
}
