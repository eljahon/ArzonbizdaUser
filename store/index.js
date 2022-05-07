export const getters = {
  productsList: (state) => {
    return state.productsList
  },
  brandItem: (state) => state.brandItem,
}
export const state = {
  productsList: [],
  brandItem: [],
}
export const mutations = {
  SET_Products_LIST(state, payload) {
    state.producsList = payload
  },
}
export const actions = {
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
