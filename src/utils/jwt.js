/* eslint-disable no-bitwise */
export const JWT_SECRET = '200_LEARN+_200'
export const JWT_EXPIRES_IN = 3600 * 24 // 1 day

export const sign = (
  payload,
  privateKey,
  header,
) => {
  const now = new Date()
  header.expiresIn = new Date(now.getTime() + header.expiresIn)
  const encodedHeader = btoa(JSON.stringify(header))
  const encodedPayload = btoa(JSON.stringify(payload))
  const signature = btoa(
    Array
      .from(encodedPayload)
      .map((item, key) => (
        String.fromCharCode(item.charCodeAt(0) ^ privateKey[key % privateKey.length].charCodeAt(0))
      ))
      .join(''),
  )

  return `${encodedHeader}.${encodedPayload}.${signature}`
}

export const decode = (token) => {
  const [encodedHeader, encodedPayload, signature] = token.split('.')
  const header = JSON.parse(atob(encodedHeader))
  const payload = JSON.parse(atob(encodedPayload))
  const now = new Date()

  if (now < header.expiresIn) {
    throw new Error('Expired token')
  }

  const verifiedSignature = btoa(
    Array
      .from(encodedPayload)
      .map((item, key) => (
        String.fromCharCode(item.charCodeAt(0) ^ JWT_SECRET[key % JWT_SECRET.length].charCodeAt(0))
      ))
      .join(''),
  )

  if (verifiedSignature !== signature) {
    throw new Error('Invalid signature')
  }

  return payload
}

export const verify = (
  token,
  privateKey,
) => {
  const [encodedHeader, encodedPayload, signature] = token.split('.')
  const header = JSON.parse(atob(encodedHeader))
  const payload = JSON.parse(atob(encodedPayload))
  const now = new Date()

  if (now < header.expiresIn) {
    throw new Error('Expired token')
  }

  const verifiedSignature = btoa(
    Array
      .from(encodedPayload)
      .map((item, key) => (
        String.fromCharCode(item.charCodeAt(0) ^ privateKey[key % privateKey.length].charCodeAt(0))
      ))
      .join(''),
  )

  if (verifiedSignature !== signature) {
    throw new Error('Invalid signature')
  }

  return payload
}
