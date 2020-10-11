/*=========================================================================================
  File Name: moduleCalendarMutations.js
  Description: Calendar Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default {
  ADD_ITEM (state, item) {
    state.products.unshift(item)
  },
  SET_PRODUCTS (state, products) {
    state.products = products
  },

  UPDATE_PRODUCT (state, product) {
    const productIndex = state.products.findIndex((p) => p.id === product.id)
    Object.assign(state.products[productIndex], product)
  },
  REMOVE_ITEM (state, itemId) {
    const ItemIndex = state.products.findIndex((p) => p.id === itemId)
    state.products.splice(ItemIndex, 1)
  },


  ADD_categories (state, item) {

    state.categories.unshift(item)
  },
  SET_categories (state, categories) {
    state.categories = categories
  },
  // SET_LABELS(state, labels) {
  //   state.eventLabels = labels
  // },
  UPDATE_categories (state, category) {

    const categoryIndex = state.categories.findIndex((p) => p.id === category.id)
    Object.assign(state.categories[categoryIndex], category)
  },
  REMOVE_categories (state, itemId) {
    const ItemIndex = state.categories.findIndex((p) => p.id === itemId)
    state.categories.splice(ItemIndex, 1)
  },

  //management Countries
  SET_countries (state, countries) {
    state.countries = countries
  }
}
