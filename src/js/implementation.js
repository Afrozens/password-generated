import { chars } from './chars.js'
import { sizeDefault } from './up&down.js'

const generated = () => {
  let passwordShowLength = ''
  for (let i = 0; i < sizeDefault; i++) {
    const num = Math.floor(Math.random() * chars.length)
    passwordShowLength += chars[num]
  }
  return passwordShowLength
}

const copy = (pass) => {
  navigator.clipboard.writeText(pass)
  swal('Yes sir!', `Copied "${pass}" to clipboard`, 'success') // Modal - library
}

export { generated, copy }
