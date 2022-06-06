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

  async changeProducts(ctx, { axios, query }) {
    ctx.commit('SET_LOADING', true)
    ctx.commit('SET_HAS_CONTENT', 'pending')

    try {
      const { data } = await axios.get(
        query ? '/product/search' : '/product/home',
        query ? { params: { q: query } } : undefined
      )

      const sendData = data.data.products.map((el) => {
        return (
          ({
            id: el.id,
            name: el.name,
            img: el.images[0].src,
            price: el.price,
          },
          ctx.commit('SET_PRODUCTS_LIST', sendData)),
          ctx.commit(
            'SET_HAS_CONTENT',
            !sendData.length ? 'no_content' : 'content'
          )
        )
      })
    } catch (err) {
      console.log(err)
    } finally {
      ctx.commit('SET_LOADING', false)
    }
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
        name: el.name,
        img: el.images[0].src,
        price: el.price,
      }
    })

    ctx.commit('SET_PRODUCTS_LIST', sendData)
    ctx.commit('SET_LOADING', false)
    ctx.commit('SET_HAS_CONTENT', !sendData.length ? 'no_content' : 'content')
  },
}
