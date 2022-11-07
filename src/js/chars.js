const BTN_UPPERCASE = document.querySelector('#btn_uppercase')
const BTN_NUMBER = document.querySelector('#btn_number')
const BTN_SPECIAL = document.querySelector('#btn_special')
const LOWERCASE = 'abcdefghijklmnrsopqwxvz'
const UPPERCASE = LOWERCASE.toUpperCase()
const NUMBER = '0987654321'
const SPECIAL = '@#$%^|&*!>/<+=~'
let chars = LOWERCASE

const setup = () => {
  if (BTN_UPPERCASE.checked && BTN_NUMBER.checked && BTN_SPECIAL.checked) {
    /* ALL */
    chars = LOWERCASE + UPPERCASE + NUMBER + SPECIAL
  } else if (BTN_UPPERCASE.checked && BTN_NUMBER.checked) {
    chars = LOWERCASE + UPPERCASE + NUMBER
  } else if (BTN_UPPERCASE.checked && BTN_SPECIAL.checked) {
    chars = LOWERCASE + UPPERCASE + SPECIAL
  } else if (BTN_NUMBER.checked && BTN_SPECIAL.checked) {
    chars = LOWERCASE + NUMBER + SPECIAL
  } else if (BTN_UPPERCASE.checked) {
    chars = LOWERCASE + UPPERCASE
  } else if (BTN_NUMBER.checked) {
    chars = LOWERCASE + NUMBER
  } else if (BTN_SPECIAL.checked) {
    chars = LOWERCASE + SPECIAL
  } else {
    chars = LOWERCASE
  }
}

export { LOWERCASE, UPPERCASE, NUMBER, SPECIAL, setup, chars }
