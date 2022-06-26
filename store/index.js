export const getters = {
  productsList: (state) => {
    return state.productsList
  },
  isBadgeLength: (state) => {
    return state.isBadge.length
  },
  isBadgeList: (state) => state.isBadge,
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
    singilPraduct: {},
    singilPraductAll: {},
  }
}
export const mutations = {
  SET_BLOG_LIST: (state, payload) => {
    state.blogList = payload
  },
  SET_PRODUCTS_LIST(state, payload) {
    state.productsList = payload
  },
  SET_SINGIL_PR: (state, payload) => {
    state.singilPraduct = payload
  },
  SET_SINGIL_PR_ALL: (state, payload) => {
    state.singilPraductAll = payload
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
    return new Promise((resolve, reject) => {
      if (ctx.state.isBadge.length > 0) {
        ctx.state.isBadge.forEach((el) => {
          if (el.id !== payload.id) {
            ctx.commit('SET_ISCOM', payload)
          }
          // eslint-disable-next-line prefer-promise-reject-errors
          reject('error')
        })
      } else {
        ctx.commit('SET_ISCOM', payload)
      }
    })
  },
  singilProduct(ctx, payload) {
    const data = {
      imageList: payload.product.images,
      name: payload.product.name,
      price: payload.product.price,
      disc: payload.product.description,
      compares: payload.compares,
      shop: payload.product['shop.name'],
      link: payload.product.link,
      logo: payload.product['shop.logo'],
      shopLink: payload.product['shop.link'],
    }
    ctx.commit('SET_SINGIL_PR', data)
    ctx.commit('SET_SINGIL_PR_ALL', payload)
    // console.log(data);
    // console.log(payload)
  },
  setSelectIdFilter(ctx, id) {
    const data = ctx.state.isBadge.filter((el) => el.id !== id)
    ctx.commit('SET_SELECT_ID', data)
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
        image: 'https://apis.arzonbizda.uz' + el.image,
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
