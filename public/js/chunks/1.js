(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./resources/js/src/store/data-list/moduleDataList.js":
/*!************************************************************!*\
  !*** ./resources/js/src/store/data-list/moduleDataList.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _moduleDataListState = _interopRequireDefault(__webpack_require__(/*! ./moduleDataListState.js */ "./resources/js/src/store/data-list/moduleDataListState.js"));

var _moduleDataListMutations = _interopRequireDefault(__webpack_require__(/*! ./moduleDataListMutations.js */ "./resources/js/src/store/data-list/moduleDataListMutations.js"));

var _moduleDataListActions = _interopRequireDefault(__webpack_require__(/*! ./moduleDataListActions.js */ "./resources/js/src/store/data-list/moduleDataListActions.js"));

var _moduleDataListGetters = _interopRequireDefault(__webpack_require__(/*! ./moduleDataListGetters.js */ "./resources/js/src/store/data-list/moduleDataListGetters.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*=========================================================================================
  File Name: moduleDataList.js
  Description: Calendar Module
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
var _default = {
  isRegistered: false,
  namespaced: true,
  state: _moduleDataListState.default,
  mutations: _moduleDataListMutations.default,
  actions: _moduleDataListActions.default,
  getters: _moduleDataListGetters.default
};
exports.default = _default;

/***/ }),

/***/ "./resources/js/src/store/data-list/moduleDataListActions.js":
/*!*******************************************************************!*\
  !*** ./resources/js/src/store/data-list/moduleDataListActions.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/core-js/object/assign */ "./node_modules/@babel/runtime/core-js/object/assign.js"));

var _promise = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/core-js/promise */ "./node_modules/@babel/runtime/core-js/promise.js"));

var _axios = _interopRequireDefault(__webpack_require__(/*! @/axios.js */ "./resources/js/src/axios.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*=========================================================================================
  File Name: moduleCalendarActions.js
  Description: Calendar Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
var _default = {
  addItem: function addItem(_ref, item) {
    var commit = _ref.commit;
    return new _promise.default(function (resolve, reject) {
      _axios.default.post('/api/data-list/products/', {
        item: item
      }).then(function (response) {
        commit('ADD_ITEM', (0, _assign.default)(item, {
          id: response.data.id
        }));
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  },
  fetchDataListItems: function fetchDataListItems(_ref2) {
    var commit = _ref2.commit;
    return new _promise.default(function (resolve, reject) {
      _axios.default.get('/api/data-list/products').then(function (response) {
        commit('SET_PRODUCTS', response.data);
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  },
  // fetchEventLabels({ commit }) {
  //   return new Promise((resolve, reject) => {
  //     axios.get("/api/apps/calendar/labels")
  //       .then((response) => {
  //         commit('SET_LABELS', response.data)
  //         resolve(response)
  //       })
  //       .catch((error) => { reject(error) })
  //   })
  // },
  updateItem: function updateItem(_ref3, item) {
    var commit = _ref3.commit;
    return new _promise.default(function (resolve, reject) {
      _axios.default.post("/api/data-list/products/".concat(item.id), {
        item: item
      }).then(function (response) {
        commit('UPDATE_PRODUCT', response.data);
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  },
  removeItem: function removeItem(_ref4, itemId) {
    var commit = _ref4.commit;
    return new _promise.default(function (resolve, reject) {
      _axios.default.delete("/api/data-list/products/".concat(itemId)).then(function (response) {
        commit('REMOVE_ITEM', itemId);
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  },
  addCategory: function addCategory(_ref5, item) {
    var commit = _ref5.commit;
    return new _promise.default(function (resolve, reject) {
      _axios.default.post('/api/data-list/categories/', {
        item: item
      }).then(function (response) {
        commit('ADD_categories', (0, _assign.default)(item, {
          id: response.data.id
        }));
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  },
  fetchDataListCategory: function fetchDataListCategory(_ref6) {
    var commit = _ref6.commit;
    return new _promise.default(function (resolve, reject) {
      _axios.default.get('/api/data-list/categories').then(function (response) {
        commit('SET_categories', response.data);
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  },
  fetchDataListCountries: function fetchDataListCountries(_ref7) {
    var commit = _ref7.commit;
    return new _promise.default(function (resolve, reject) {
      _axios.default.get('https://restcountries.eu/rest/v2/all').then(function (response) {
        commit('SET_countries', response.data);
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  },
  // fetchEventLabels({ commit }) {
  //   return new Promise((resolve, reject) => {
  //     axios.get("/api/apps/calendar/labels")
  //       .then((response) => {
  //         commit('SET_LABELS', response.data)
  //         resolve(response)
  //       })
  //       .catch((error) => { reject(error) })
  //   })
  // },
  updateCategories: function updateCategories(_ref8, item) {
    var commit = _ref8.commit;
    return new _promise.default(function (resolve, reject) {
      _axios.default.post("/api/data-list/categories/".concat(item.id), {
        item: item
      }).then(function (response) {
        commit('UPDATE_categories', response.data);
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  },
  removeCategories: function removeCategories(_ref9, itemId) {
    var commit = _ref9.commit;
    return new _promise.default(function (resolve, reject) {
      _axios.default.delete("/api/data-list/categories/".concat(itemId)).then(function (response) {
        commit('REMOVE_categories', itemId);
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  } // eventDragged({ commit }, payload) {
  //   return new Promise((resolve, reject) => {
  //     axios.post(`/api/apps/calendar/event/dragged/${payload.event.id}`, {payload: payload})
  //       .then((response) => {
  //         // Convert Date String to Date Object
  //         let event = response.data
  //         event.startDate = new Date(event.startDate)
  //         event.endDate = new Date(event.endDate)
  //         commit('UPDATE_EVENT', event)
  //         resolve(response)
  //       })
  //       .catch((error) => { reject(error) })
  //   })
  // },

};
exports.default = _default;

/***/ }),

/***/ "./resources/js/src/store/data-list/moduleDataListGetters.js":
/*!*******************************************************************!*\
  !*** ./resources/js/src/store/data-list/moduleDataListGetters.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/*=========================================================================================
  File Name: moduleCalendarGetters.js
  Description: Calendar Module Getters
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
var _default = {//   getItem: state => (productId) => state.products.find((product) => product.id == productId),
};
exports.default = _default;

/***/ }),

/***/ "./resources/js/src/store/data-list/moduleDataListMutations.js":
/*!*********************************************************************!*\
  !*** ./resources/js/src/store/data-list/moduleDataListMutations.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/core-js/object/assign */ "./node_modules/@babel/runtime/core-js/object/assign.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*=========================================================================================
  File Name: moduleCalendarMutations.js
  Description: Calendar Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
var _default = {
  ADD_ITEM: function ADD_ITEM(state, item) {
    state.products.unshift(item);
  },
  SET_PRODUCTS: function SET_PRODUCTS(state, products) {
    state.products = products;
  },
  UPDATE_PRODUCT: function UPDATE_PRODUCT(state, product) {
    var productIndex = state.products.findIndex(function (p) {
      return p.id === product.id;
    });
    (0, _assign.default)(state.products[productIndex], product);
  },
  REMOVE_ITEM: function REMOVE_ITEM(state, itemId) {
    var ItemIndex = state.products.findIndex(function (p) {
      return p.id === itemId;
    });
    state.products.splice(ItemIndex, 1);
  },
  ADD_categories: function ADD_categories(state, item) {
    state.categories.unshift(item);
  },
  SET_categories: function SET_categories(state, categories) {
    state.categories = categories;
  },
  // SET_LABELS(state, labels) {
  //   state.eventLabels = labels
  // },
  UPDATE_categories: function UPDATE_categories(state, category) {
    var categoryIndex = state.categories.findIndex(function (p) {
      return p.id === category.id;
    });
    (0, _assign.default)(state.categories[categoryIndex], category);
  },
  REMOVE_categories: function REMOVE_categories(state, itemId) {
    var ItemIndex = state.categories.findIndex(function (p) {
      return p.id === itemId;
    });
    state.categories.splice(ItemIndex, 1);
  },
  //management Countries
  SET_countries: function SET_countries(state, countries) {
    state.countries = countries;
  }
};
exports.default = _default;

/***/ }),

/***/ "./resources/js/src/store/data-list/moduleDataListState.js":
/*!*****************************************************************!*\
  !*** ./resources/js/src/store/data-list/moduleDataListState.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/*=========================================================================================
  File Name: moduleCalendarState.js
  Description: Calendar Module State
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
var _default = {
  products: [],
  categories: [],
  countries: []
};
exports.default = _default;

/***/ })

}]);