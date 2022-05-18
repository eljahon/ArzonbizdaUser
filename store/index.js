export const getters = {
  productsList: (state) => {
    return state.productsList
  },
  brandItem: (state) => state.brandItem,
}
export const state = () => {
  return {
    productsList: [],
    brandItem: [],
    title: 'afsdfdssdfd',
  }
}
export const mutations = {
  SET_PRODUCTS_LIST(state, payload) {
    // const {data}  = await this.$axios.get("/product/home");
    // const sendData = data.data.products.map(el => {
    //   return {
    //     id: el.id,
    //     name: el.brand_name,
    //     img: el.images[0].src,
    //     price: el.price
    //   }
    // });
    state.productsList = payload
  },
  SET_ISCOM(state, payload) {
    if (state.isBadge.length <= 2) {
      state.isBadge.push(payload)
    }
  },
}
export const actions = {
  async changeProducts(ctx, { axios, query }) {
    const { data } = await axios.get(
      query ? '/product/search' : '/product/home',
      query ? { params: { q: query } } : undefined
    )
    const sendData = data.data.products.map((el) => {
      return {
        id: el.id,
        name: el.brand_name,
        img: el.images[0].src,
        price: el.price,
      }
    })
    ctx.commit('SET_PRODUCTS_LIST', sendData)
  },
}
