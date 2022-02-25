const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
export const isEmail = (x) => Boolean(x.match(emailRegex))
