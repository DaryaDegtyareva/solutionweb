(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[87],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/register/Register.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/register/Register.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/core-js/json/stringify */ "./node_modules/@babel/runtime/core-js/json/stringify.js"));

var _promise = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/core-js/promise */ "./node_modules/@babel/runtime/core-js/promise.js"));

var _axios = _interopRequireDefault(__webpack_require__(/*! axios */ "./node_modules/axios/index.js"));

var _moduleDataList = _interopRequireDefault(__webpack_require__(/*! @/store/data-list/moduleDataList.js */ "./resources/js/src/store/data-list/moduleDataList.js"));

var _vueFormWizard = __webpack_require__(/*! vue-form-wizard */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.js");

__webpack_require__(/*! vue-form-wizard/dist/vue-form-wizard.min.css */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.min.css");

var _vueSelect = _interopRequireDefault(__webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js"));

var _veeValidate = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");

var _router = _interopRequireDefault(__webpack_require__(/*! @/router */ "./resources/js/src/router.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// For custom error message
var _default = {
  data: function data() {
    return {
      displayName: '',
      firstName: '',
      email: '',
      password: '',
      confirm_password: '',
      isTermsConditionAccepted: true,
      proposalTitle: '',
      jobTitle: '',
      textarea: '',
      businessName: '',
      country: 'Andorra',
      businessType: 'planning',
      radios1: 'luis',
      isMounted: false,
      va: '',
      businessvalue: null,
      valMultipe: {
        value1: '',
        value2: '',
        value3: '',
        title: ''
      },
      temp_yr: null,
      temp_mn: null,
      standard_yr: '50',
      standard_mn: '5',
      basic_yr: '0',
      basic_mn: '0',
      premium_yr: '100',
      premium_mn: '10',
      Packages: [{
        "id": 1,
        "name": "Invoices",
        "basic": "5",
        "standard": "Unlimited",
        "premium": "Unlimited",
        "basic_yr": "No",
        "standard_yr": "Unlimited",
        "premium_yr": "Unlimited"
      }, {
        "id": 2,
        "name": "Estimates",
        "basic": "20",
        "standard": "Unlimited",
        "premium": "Unlimited",
        "basic_yr": "Unlimited",
        "standard_yr": "Unlimited",
        "premium_yr": "Unlimited"
      }, {
        "id": 3,
        "name": "Customers",
        "basic": "10",
        "standard": "Unlimited",
        "premium": "Unlimited",
        "basic_yr": "Unlimited",
        "standard_yr": "Unlimited",
        "premium_yr": "Unlimited"
      }, {
        "id": 4,
        "name": "Business",
        "basic": "5",
        "standard": "500",
        "premium": "1000",
        "basic_yr": "300",
        "standard_yr": "Unlimited",
        "premium_yr": "Unlimited"
      }, {
        "id": 5,
        "name": "Invoice templates (Select max value 5)",
        "basic": "3",
        "standard": "4",
        "premium": "5",
        "basic_yr": "5",
        "standard_yr": "5",
        "premium_yr": "5"
      }]
    };
  },
  computed: {
    businessTypes: function businessTypes() {
      if (this.isMounted) return this.$store.state.dataList.categories;
      return [];
    },
    countries: function countries() {
      if (this.isMounted) return this.$store.state.dataList.countries;
      return [];
    }
  },
  methods: {
    validateStep1: function validateStep1() {
      var _this = this;

      return new _promise.default(function (resolve, reject) {
        _this.$validator.validateAll('step-1').then(function (result) {
          if (result) {
            resolve(true);
          } else {
            reject('correct all values');
          }
        });
      });
    },
    validateStep2: function validateStep2() {
      var _this2 = this;

      return new _promise.default(function (resolve, reject) {
        _this2.$validator.validateAll('step-2').then(function (result) {
          if (result) {
            resolve(true);
          } else {
            reject('correct all values');
          }
        });
      });
    },
    validateStep3: function validateStep3() {
      var _this3 = this;

      return new _promise.default(function (resolve, reject) {
        _this3.$validator.validateAll('step-3').then(function (result) {
          if (result) {
            _this3.registerUserJWt();

            resolve(true);
          } else {
            reject('correct all values');
          }
        });
      });
    },
    registerUserJWt: function registerUserJWt() {
      var payload = {
        userDetails: {
          name: this.displayName,
          email: this.email,
          password: this.password,
          confirmPassword: this.confirm_password
        },
        notify: this.$vs.notify
      };
      this.$store.dispatch('auth/registerUser', payload); //alert('Form submitted!')
    }
  },
  components: {
    FormWizard: _vueFormWizard.FormWizard,
    'v-select': _vueSelect.default,
    TabContent: _vueFormWizard.TabContent
  },
  mounted: function mounted() {
    var _this4 = this;

    if (!_moduleDataList.default.isRegistered) {
      this.$store.registerModule('dataList', _moduleDataList.default);
      _moduleDataList.default.isRegistered = true;
    }

    _axios.default.get('/api/CategoryValue').then(function (response) {
      return _this4.businessvalue = JSON.parse((0, _stringify.default)(response.data)).reverse();
    });

    this.$store.dispatch('dataList/fetchDataListCategory');
    this.$store.dispatch('dataList/fetchDataListCountries');
    this.isMounted = true;
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/register/Register.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/register/Register.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".register-tabs-container {\n  min-height: 517px;\n}\n[dir] .register-tabs-container .con-tab {\n  padding-bottom: 23px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/register/Register.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/register/Register.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/register/Register.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/register/Register.vue?vue&type=template&id=59b7090a&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/register/Register.vue?vue&type=template&id=59b7090a& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "h-screen flex w-full bg-img vx-row no-gutter items-center justify-center"
    },
    [
      _c(
        "div",
        {
          staticClass: "vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4"
        },
        [
          _c(
            "vx-card",
            { attrs: { title: "Create Account", height: "100%" } },
            [
              _c(
                "div",
                { staticClass: "mt-5" },
                [
                  _c(
                    "form-wizard",
                    {
                      attrs: {
                        color: "rgba(var(--vs-primary), 1)",
                        errorColor: "rgba(var(--vs-danger), 1)",
                        title: null,
                        subtitle: null,
                        finishButtonText: "Submit"
                      }
                    },
                    [
                      _c(
                        "tab-content",
                        {
                          staticClass: "mb-5",
                          attrs: {
                            title: "Sign Up",
                            icon: "feather icon-home",
                            "before-change": _vm.validateStep1
                          }
                        },
                        [
                          _c("form", { attrs: { "data-vv-scope": "step-1" } }, [
                            _c("div", { staticClass: "vx-row" }, [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "vx-col hidden sm:hidden md:hidden lg:block lg:w-1/2 mx-auto self-center"
                                },
                                [
                                  _c("img", {
                                    staticClass: "mx-auto",
                                    attrs: {
                                      src: __webpack_require__(/*! @assets/images/pages/register.jpg */ "./resources/assets/images/pages/register.jpg"),
                                      alt: "register"
                                    }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "vx-col sm:w-full md:w-full lg:w-1/2 mx-auto self-center  d-theme-dark-bg"
                                },
                                [
                                  _c("div", { staticClass: "px-8 pt-8" }, [
                                    _c(
                                      "div",
                                      { staticClass: "clearfix" },
                                      [
                                        _c("vs-input", {
                                          directives: [
                                            {
                                              name: "validate",
                                              rawName: "v-validate",
                                              value:
                                                "required|alpha_dash|min:3",
                                              expression:
                                                "'required|alpha_dash|min:3'"
                                            }
                                          ],
                                          staticClass: "w-full",
                                          attrs: {
                                            "data-vv-validate-on": "blur",
                                            "label-placeholder": "Name",
                                            name: "displayName",
                                            placeholder: "Name"
                                          },
                                          model: {
                                            value: _vm.displayName,
                                            callback: function($$v) {
                                              _vm.displayName = $$v
                                            },
                                            expression: "displayName"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "span",
                                          {
                                            staticClass: "text-danger text-sm"
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.errors.first(
                                                  "step-1.displayName"
                                                )
                                              )
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("vs-input", {
                                          directives: [
                                            {
                                              name: "validate",
                                              rawName: "v-validate",
                                              value: "required|email",
                                              expression: "'required|email'"
                                            }
                                          ],
                                          staticClass: "w-full mt-6",
                                          attrs: {
                                            "data-vv-validate-on": "blur",
                                            name: "email",
                                            type: "email",
                                            "label-placeholder": "Email",
                                            placeholder: "Email"
                                          },
                                          model: {
                                            value: _vm.email,
                                            callback: function($$v) {
                                              _vm.email = $$v
                                            },
                                            expression: "email"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "span",
                                          {
                                            staticClass: "text-danger text-sm"
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.errors.first("step-1.email")
                                              )
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("vs-input", {
                                          directives: [
                                            {
                                              name: "validate",
                                              rawName: "v-validate",
                                              value: "required|min:6|max:10",
                                              expression:
                                                "'required|min:6|max:10'"
                                            }
                                          ],
                                          ref: "password",
                                          staticClass: "w-full mt-6",
                                          attrs: {
                                            type: "password",
                                            "data-vv-validate-on": "blur",
                                            name: "password",
                                            "label-placeholder": "Password",
                                            placeholder: "Password"
                                          },
                                          model: {
                                            value: _vm.password,
                                            callback: function($$v) {
                                              _vm.password = $$v
                                            },
                                            expression: "password"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "span",
                                          {
                                            staticClass: "text-danger text-sm"
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.errors.first(
                                                  "step-1.password"
                                                )
                                              )
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("vs-input", {
                                          directives: [
                                            {
                                              name: "validate",
                                              rawName: "v-validate",
                                              value:
                                                "required|min:6|max:10|confirmed:password",
                                              expression:
                                                "'required|min:6|max:10|confirmed:password'"
                                            }
                                          ],
                                          staticClass: "w-full mt-6",
                                          attrs: {
                                            type: "password",
                                            "data-vv-validate-on": "blur",
                                            "data-vv-as": "password",
                                            name: "confirm_password",
                                            "label-placeholder":
                                              "Confirm Password",
                                            placeholder: "Confirm Password"
                                          },
                                          model: {
                                            value: _vm.confirm_password,
                                            callback: function($$v) {
                                              _vm.confirm_password = $$v
                                            },
                                            expression: "confirm_password"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "span",
                                          {
                                            staticClass: "text-danger text-sm"
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.errors.first(
                                                  "step-1.confirm_password"
                                                )
                                              )
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "vs-checkbox",
                                          {
                                            staticClass: "mt-6",
                                            model: {
                                              value:
                                                _vm.isTermsConditionAccepted,
                                              callback: function($$v) {
                                                _vm.isTermsConditionAccepted = $$v
                                              },
                                              expression:
                                                "isTermsConditionAccepted"
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "I accept the terms & conditions."
                                            )
                                          ]
                                        )
                                      ],
                                      1
                                    )
                                  ])
                                ]
                              )
                            ])
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "tab-content",
                        {
                          staticClass: "mb-5",
                          attrs: {
                            title: "Business",
                            icon: "feather icon-briefcase",
                            "before-change": _vm.validateStep2
                          }
                        },
                        [
                          _c("form", { attrs: { "data-vv-scope": "step-2" } }, [
                            _c("div", { staticClass: "vx-row" }, [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "vx-col hidden sm:hidden md:hidden lg:block lg:w-1/2 mx-auto self-center"
                                },
                                [
                                  _c("img", {
                                    staticClass: "mx-auto",
                                    attrs: {
                                      src: __webpack_require__(/*! @assets/images/pages/graphic-3.png */ "./resources/assets/images/pages/graphic-3.png"),
                                      alt: "register"
                                    }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "vx-col sm:w-full md:w-full lg:w-1/2 mx-auto self-center  d-theme-dark-bg"
                                },
                                [
                                  _c("div", { staticClass: "px-8 pt-8" }, [
                                    _c(
                                      "div",
                                      { staticClass: "clearfix" },
                                      [
                                        _c("vs-input", {
                                          directives: [
                                            {
                                              name: "validate",
                                              rawName: "v-validate",
                                              value: "required|alpha_spaces",
                                              expression:
                                                "'required|alpha_spaces'"
                                            }
                                          ],
                                          staticClass: "w-full mt-5",
                                          attrs: {
                                            label: "Business Name",
                                            name: "business_name"
                                          },
                                          model: {
                                            value: _vm.businessName,
                                            callback: function($$v) {
                                              _vm.businessName = $$v
                                            },
                                            expression: "businessName"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "span",
                                          { staticClass: "text-danger" },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.errors.first(
                                                  "step-2.business_name"
                                                )
                                              )
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "vs-select",
                                          {
                                            staticClass: "w-full mt-5",
                                            attrs: { label: "Select Country" },
                                            model: {
                                              value: _vm.country,
                                              callback: function($$v) {
                                                _vm.country = $$v
                                              },
                                              expression: "country"
                                            }
                                          },
                                          _vm._l(_vm.countries, function(
                                            item,
                                            index
                                          ) {
                                            return _c("vs-select-item", {
                                              key: index,
                                              staticClass: "w-full",
                                              attrs: {
                                                value: item.alpha2code,
                                                text: item.name
                                              }
                                            })
                                          }),
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "vs-select",
                                          {
                                            staticClass: "w-full mt-5",
                                            attrs: { label: "Business Type" },
                                            model: {
                                              value: _vm.businessType,
                                              callback: function($$v) {
                                                _vm.businessType = $$v
                                              },
                                              expression: "businessType"
                                            }
                                          },
                                          _vm._l(_vm.businessvalue, function(
                                            item,
                                            index
                                          ) {
                                            return _c("vs-select-item", {
                                              key: index,
                                              staticClass: "w-full",
                                              attrs: {
                                                value: item.id,
                                                text: item.name
                                              }
                                            })
                                          }),
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  ])
                                ]
                              )
                            ])
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "tab-content",
                        {
                          staticClass: "mb-5",
                          attrs: {
                            title: "Package",
                            icon: "feather icon-package",
                            "before-change": _vm.validateStep3
                          }
                        },
                        [
                          _c("form", { attrs: { "data-vv-scope": "step-3" } }, [
                            _c(
                              "div",
                              { staticClass: "vx-row" },
                              [
                                [
                                  _c(
                                    "div",
                                    [
                                      _c(
                                        "vs-table",
                                        {
                                          attrs: { data: _vm.Packages },
                                          scopedSlots: _vm._u([
                                            {
                                              key: "default",
                                              fn: function(ref) {
                                                var data = ref.data
                                                return [
                                                  _vm._l(data, function(
                                                    tr,
                                                    indextr
                                                  ) {
                                                    return _c(
                                                      "vs-tr",
                                                      { key: indextr },
                                                      [
                                                        _c(
                                                          "vs-td",
                                                          {
                                                            staticClass:
                                                              "text-center h-24",
                                                            attrs: {
                                                              data: tr.name
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                              " +
                                                                _vm._s(
                                                                  tr.name
                                                                ) +
                                                                "\n                            "
                                                            )
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "vs-td",
                                                          {
                                                            staticClass:
                                                              "text-center h-24",
                                                            attrs: {
                                                              data: tr.basic
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                              " +
                                                                _vm._s(
                                                                  tr.basic
                                                                ) +
                                                                "\n                            "
                                                            )
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "vs-td",
                                                          {
                                                            staticClass:
                                                              "text-center h-24",
                                                            attrs: {
                                                              data: tr.standard
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                              " +
                                                                _vm._s(
                                                                  tr.standard
                                                                ) +
                                                                "\n                            "
                                                            )
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "vs-td",
                                                          {
                                                            staticClass:
                                                              "text-center h-24",
                                                            attrs: {
                                                              data: tr.premium
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                              " +
                                                                _vm._s(
                                                                  tr.premium
                                                                ) +
                                                                "\n                            "
                                                            )
                                                          ]
                                                        )
                                                      ],
                                                      1
                                                    )
                                                  }),
                                                  _vm._v(" "),
                                                  _c(
                                                    "vs-tr",
                                                    [
                                                      _c("vs-td", {
                                                        staticClass:
                                                          "text-center h-24"
                                                      }),
                                                      _vm._v(" "),
                                                      _c(
                                                        "vs-td",
                                                        {
                                                          staticClass:
                                                            "text-center h-24"
                                                        },
                                                        [
                                                          _c(
                                                            "vs-radio",
                                                            {
                                                              attrs: {
                                                                "vs-value":
                                                                  "luis"
                                                              },
                                                              model: {
                                                                value:
                                                                  _vm.radios1,
                                                                callback: function(
                                                                  $$v
                                                                ) {
                                                                  _vm.radios1 = $$v
                                                                },
                                                                expression:
                                                                  "radios1"
                                                              }
                                                            },
                                                            [_vm._v("Luis")]
                                                          )
                                                        ],
                                                        1
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "vs-td",
                                                        {
                                                          staticClass:
                                                            "text-center h-24"
                                                        },
                                                        [
                                                          _c(
                                                            "vs-radio",
                                                            {
                                                              attrs: {
                                                                "vs-value":
                                                                  "carols"
                                                              },
                                                              model: {
                                                                value:
                                                                  _vm.radios1,
                                                                callback: function(
                                                                  $$v
                                                                ) {
                                                                  _vm.radios1 = $$v
                                                                },
                                                                expression:
                                                                  "radios1"
                                                              }
                                                            },
                                                            [_vm._v("Carols")]
                                                          )
                                                        ],
                                                        1
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "vs-td",
                                                        {
                                                          staticClass:
                                                            "text-center h-24"
                                                        },
                                                        [
                                                          _c(
                                                            "vs-radio",
                                                            {
                                                              attrs: {
                                                                "vs-value":
                                                                  "summer"
                                                              },
                                                              model: {
                                                                value:
                                                                  _vm.radios1,
                                                                callback: function(
                                                                  $$v
                                                                ) {
                                                                  _vm.radios1 = $$v
                                                                },
                                                                expression:
                                                                  "radios1"
                                                              }
                                                            },
                                                            [_vm._v("Summer")]
                                                          )
                                                        ],
                                                        1
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ]
                                              }
                                            }
                                          ])
                                        },
                                        [
                                          _c(
                                            "template",
                                            { slot: "thead" },
                                            [
                                              _c("vs-th", {
                                                staticClass: "text-xl w-3/9 "
                                              }),
                                              _vm._v(" "),
                                              _c(
                                                "vs-th",
                                                {
                                                  staticClass:
                                                    "text-xl w-2/9 text-center"
                                                },
                                                [
                                                  _c("div", [
                                                    _vm._v(
                                                      "\n                                Basic "
                                                    ),
                                                    _c("br"),
                                                    _vm._v(
                                                      " $" +
                                                        _vm._s(_vm.basic_yr) +
                                                        " per year | $" +
                                                        _vm._s(_vm.basic_mn) +
                                                        " per month"
                                                    ),
                                                    _c("br")
                                                  ])
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "vs-th",
                                                {
                                                  staticClass:
                                                    "text-xl w-2/9 text-center"
                                                },
                                                [
                                                  _c("div", [
                                                    _vm._v(
                                                      "\n                              Standard "
                                                    ),
                                                    _c("br"),
                                                    _vm._v(
                                                      " $" +
                                                        _vm._s(
                                                          _vm.standard_yr
                                                        ) +
                                                        " per year | $" +
                                                        _vm._s(
                                                          _vm.standard_mn
                                                        ) +
                                                        " per month\n                              "
                                                    )
                                                  ])
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "vs-th",
                                                {
                                                  staticClass:
                                                    "text-xl w-2/9 text-center"
                                                },
                                                [
                                                  _c("div", [
                                                    _vm._v(
                                                      "\n                            Premium "
                                                    ),
                                                    _c("br"),
                                                    _vm._v(
                                                      " $" +
                                                        _vm._s(_vm.premium_yr) +
                                                        " per year | $" +
                                                        _vm._s(_vm.premium_mn) +
                                                        " per month\n\n                            "
                                                    )
                                                  ])
                                                ]
                                              )
                                            ],
                                            1
                                          )
                                        ],
                                        2
                                      )
                                    ],
                                    1
                                  )
                                ]
                              ],
                              2
                            )
                          ])
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ]
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/images/pages/graphic-3.png":
/*!*****************************************************!*\
  !*** ./resources/assets/images/pages/graphic-3.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/graphic-3.png?e88b80c08f4ace84500143771fb60340";

/***/ }),

/***/ "./resources/assets/images/pages/register.jpg":
/*!****************************************************!*\
  !*** ./resources/assets/images/pages/register.jpg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/register.jpg?cfd9ef099bfc1f99c6f2970ae05a6a4a";

/***/ }),

/***/ "./resources/js/src/views/pages/register/Register.vue":
/*!************************************************************!*\
  !*** ./resources/js/src/views/pages/register/Register.vue ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Register_vue_vue_type_template_id_59b7090a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=59b7090a& */ "./resources/js/src/views/pages/register/Register.vue?vue&type=template&id=59b7090a&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/register/Register.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Register_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Register.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/pages/register/Register.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_59b7090a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Register_vue_vue_type_template_id_59b7090a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/register/Register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/register/Register.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/pages/register/Register.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/register/Register.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/register/Register.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/register/Register.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/register/Register.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/register/Register.vue?vue&type=template&id=59b7090a&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/pages/register/Register.vue?vue&type=template&id=59b7090a& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_59b7090a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=template&id=59b7090a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/register/Register.vue?vue&type=template&id=59b7090a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_59b7090a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_59b7090a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);