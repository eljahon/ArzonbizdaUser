export const getters = {
  productsList: (state) => {
    return state.productsList
  },
  isBadgeLength: (state) => {
    return state.isBadge.length
  },
  breadCumbs: (state) => state.breadCumbs,
  brandItem: (state) => state.brandItem,
  loading: (state) => state.loading,
  has_content: (state) => state.has_content,
}

export const state = () => {
  return {
    isBadge: [],
    productsList: [],
    brandItem: [],
    title: 'title',
    loading: false,
    has_content: 'pending',
    breadCumbs: [],
  }
}
export const mutations = {
  SET_PRODUCTS_LIST(state, payload) {
    state.productsList = payload
  },

  SET_BREADCUMBS(state, payload) {
    state.breadCumbs.push(payload)
    // if(state.breadCumbs){
    //   state.breadCumbs.forEach(el => {
    //     if(el.name !== payload.name) {
    //         state.breadCumbs.push(payload)
    //       // if(el.params.id && el.params.id !== payload.params.id){
    //       //   console.log("ok")
    //       // }
    //     } else if(el.params.id !== payload.params.id){
    //       state.breadCumbs.push(payload)
    //     }
    //  })
    // } else {
    //   console.log('salom')
    // }
  },

  SET_ISCOM(state, payload) {
    if (state.isBadge.length <= 2) {
      state.isBadge.push(payload)
    }
  },

  SET_LOADING(state, payload) {
    state.loading = payload
  },

  SET_HAS_CONTENT(state, payload) {
    state.has_content = payload
  },
}
export const actions = {
  actionsIsCom(ctx, payload) {
    ctx.commit('SET_ISCOM', payload)
  },
  addBreadcumbs(ctx, payload) {
    ctx.commit('SET_BREADCUMBS', payload)
  },

  async changePriceProducts(ctx, { axios, searchQ, maxPrice, minPrice }) {
    ctx.commit('SET_LOADING', true)
    ctx.commit('SET_HAS_CONTENT', 'pending')

    const { data } = await axios.get(
      searchQ ? '/product/search' : '/product/home',
      {
        params: {
          max: maxPrice,
          min: minPrice,
          q: searchQ,
        },
      }
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
    ctx.commit('SET_LOADING', false)
    ctx.commit('SET_HAS_CONTENT', !sendData.length ? 'no_content' : 'content')
  },
}
