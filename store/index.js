export const getters = {
  popularList: (state) => state.popularList,
}
export const state = {
  popularList: [
    {
      id: 1,
      img: 'poco.png',
      name: 'Xiaomi Poco X3 Pro 8/256GB',
      price: '3 324 000',
    },
    {
      id: 2,
      img: 'poco.png',
      name: 'Xiaomi Poco X3 Pro 8/256GB',
      price: '3 324 000',
    },
    {
      id: 3,
      img: 'poco.png',
      name: 'Xiaomi Poco X3 Pro 8/256GB',
      price: '3 324 000',
    },
    {
      id: 4,
      img: 'poco.png',
      name: 'Xiaomi Poco X3 Pro 8/256GB',
      price: '3 324 000',
    },
    {
      id: 5,
      img: 'poco.png',
      name: 'Xiaomi Poco X3 Pro 8/256GB',
      price: '3 324 000',
    },
    {
      id: 6,
      img: 'poco.png',
      name: 'Xiaomi Poco X3 Pro 8/256GB',
      price: '3 324 000',
    },
    {
      id: 7,
      img: 'poco.png',
      name: 'Xiaomi Poco X3 Pro 8/256GB',
      price: '3 324 000',
    },
    {
      id: 8,
      img: 'poco.png',
      name: 'Xiaomi Poco X3 Pro 8/256GB',
      price: '3 324 000',
    },
    {
      id: 9,
      img: 'poco.png',
      name: 'Xiaomi Poco X3 Pro 8/256GB',
      price: '3 324 000',
    },
    {
      id: 10,
      img: 'poco.png',
      name: 'Xiaomi Poco X3 Pro 8/256GB',
      price: '3 324 000',
    },
    {
      id: 11,
      img: 'poco.png',
      name: 'Xiaomi Poco X3 Pro 8/256GB',
      price: '3 324 000',
    },
    {
      id: 12,
      img: 'poco.png',
      name: 'Xiaomi Poco X3 Pro 8/256GB',
      price: '3 324 000',
    },
    {
      id: 13,
      img: 'poco.png',
      name: 'Xiaomi Poco X3 Pro 8/256GB',
      price: '3 324 000',
    },
    {
      id: 14,
      img: 'poco.png',
      name: 'Xiaomi Poco X3 Pro 8/256GB',
      price: '3 324 000',
    },
    {
      id: 15,
      img: 'poco.png',
      name: 'Xiaomi Poco X3 Pro 8/256GB',
      price: '3 324 000',
    },
  ],
}
export const mutations = {
  SET_USER_LIST(state, payload) {
    state.popularList = payload
  },
}
export const actions = {
  changeUser(vuexContext, payload) {
    vuexContext.commit('SET_USER_LIST', payload)
  },
}
