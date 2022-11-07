let $width
let $background

const validation = (size, valid) => {
/* "Tamanio" del valor del input */
  valid.style.width = `${$width}`
  valid.style.background = `${$background}`
  if (size >= 5 && size < 7) {
    $width = "25%"
    $background = "red"
  } else if (size > 7 && size < 12) {
    $width = "50%"
    $background = "orange"
  } else if (size > 12 && size < 14) {
    $width = "75%"
    $background = "yellow"
    valid.style.width = `${$width}`
    valid.style.background = `${$background}`
  } else if (size > 14) {
    $width = "100%"
    $background = "green"
    valid.style.width = `${$width}`
    valid.style.background = `${$background}`
  }
}

export { validation }
