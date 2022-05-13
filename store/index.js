export const getters = {
  isBadgeLength: (state) => {
    return state.isBadge.length
  },
  productsList: (state) => {
    return state.productsList
  },
  brandItem: (state) => state.brandItem,
}
export const state = () => {
  return {
    productsList: [],
    brandItem: [],
    isBadge: [],
  }
}
export const mutations = {
  SET_Products_LIST(state, payload) {
    state.producsList = payload
  },
  SET_ISCOM(state, payload) {
    if (state.isBadge.length <= 2) {
      state.isBadge.push(payload)
    }
  },
}
export const actions = {
  actionsIsCom(vuexContext, payload) {
    vuexContext.commit('SET_ISCOM', payload)
  },
  changeProducts(vuexContext, payload) {
    const sendata = payload.map((el) => {
      return {
        id: el.id,
        name: el.brand_name,
        img: el.images[0].src,
        price: el.price,
      }
    })
    // console.log("sendata=====>>>>", sendata)
    vuexContext.commit('SET_Products_LIST', sendata)
  },
}
