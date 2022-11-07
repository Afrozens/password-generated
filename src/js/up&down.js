let sizeDefault = 5

const btnUp = () => {
  if (sizeDefault > 4 && sizeDefault < 20) return sizeDefault++
  else return (sizeDefault = 20)
}

const btnDown = () => {
  if (sizeDefault > 5 && sizeDefault <= 20) return sizeDefault--
  else return (sizeDefault = 5)
}

export { btnUp, btnDown, sizeDefault }
