const priceSpacer = (price) => {
  return price.replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/gm, ' ')
}

export default priceSpacer
