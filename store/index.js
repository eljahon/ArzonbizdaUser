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
  blogList: (state) => state.blogList,
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
    blogList: [],
    singBlog: {},
  }
}
export const mutations = {
  SET_BLOG_LIST: (state, payload) => {
    state.blogList = payload
  },
  SET_PRODUCTS_LIST(state, payload) {
    state.productsList = payload
  },
  SET_SING_BLOG: (state, payload) => {
    state.singBlog = payload
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
  SET_SELECT_ID(state, payloy) {
    state.isBadge = payloy
  },

  SET_HAS_CONTENT(state, payload) {
    state.has_content = payload
  },

  removeProduct(state, payload) {
    state.isBadge = payload
  },
}
export const actions = {
  actionsIsCom(ctx, payload) {
    ctx.commit('SET_ISCOM', payload)
  },
  setSelectId(ctx, payload) {
    ctx.commit('SET_SELECT_ID', payload)
  },
  removeItem(ctx, id) {
    const Itemid = ctx.state.isBadge.filter((el) => el !== id)
    ctx.commit('removeProduct', Itemid)
  },

  singBlogChanges({ commit }, payload) {
    commit('SET_SING_BLOG', payload)
  },

  addBreadcumbs(ctx, payload) {
    ctx.commit('SET_BREADCUMBS', payload)
  },

  blogListAdd({ commit }, payload) {
    const blogListAll = payload.map((el) => {
      return {
        id: el.id,
        image: process.env.baseUrl + el.image,
        title: el.title,
      }
    })
    commit('SET_BLOG_LIST', blogListAll)
  },
  async changeProducts(ctx, { axios, query }) {
    ctx.commit('SET_LOADING', true)
    ctx.commit('SET_HAS_CONTENT', 'pending')

    const { data } = await axios.get(
      query ? '/product/search' : '/product/home',
      query ? { params: { q: query } } : undefined
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
