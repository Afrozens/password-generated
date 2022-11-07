import { generated, copy } from './implementation.js'
import { btnUp, btnDown, sizeDefault } from './up&down.js'
import { setup } from './chars.js'
import { validation } from './validation.js'

const PASSWORD_SHOW = document.querySelector('#password_show')
const PASSWORD_SIZE = document.querySelector('#password_size')
const PASSWORD_VALIDATION = document.querySelector('#password_validation')
const BTN_RESET = document.querySelector('#btn_reset')
const BTN_COPY = document.querySelector('#btn_copy')
const BTN_UP = document.querySelector('#btn_up')
const BTN_DOWN = document.querySelector('#btn_down')

const $nav = document.querySelector('#header_nav')
const hamburger = document.querySelector('#header_hamburger')

window.addEventListener('DOMContentLoaded', (e) => {
  PASSWORD_SIZE.value = 5
  PASSWORD_SHOW.value = generated()
  validation(PASSWORD_SIZE.value, PASSWORD_VALIDATION)
})

BTN_RESET.addEventListener('click', (e) => {
  setup()
  validation(PASSWORD_SIZE.value, PASSWORD_VALIDATION)
  PASSWORD_SHOW.value = generated()
})

BTN_COPY.addEventListener('click', (e) => copy(PASSWORD_SHOW.value))

BTN_UP.addEventListener('click', (e) => {
  btnUp()
  PASSWORD_SIZE.value = sizeDefault
})

BTN_DOWN.addEventListener('click', (e) => {
  btnDown()
  PASSWORD_SIZE.value = sizeDefault
})
/* Menu hamburguesa */
hamburger.addEventListener('click', (e) => {
  $nav.classList.toggle('visible')
  $nav.classList.toggle('opacity-100')
  $nav.classList.toggle('invisible')
  $nav.classList.toggle('opacity-0')
  hamburger.classList.toggle('is-active')
})
