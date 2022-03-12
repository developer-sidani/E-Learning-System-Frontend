export const phoneRegex = /^([0-9]{2}:?){3}/
export const isPhone = (x) => Boolean(x.match(phoneRegex))
