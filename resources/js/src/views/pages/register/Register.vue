<!-- =========================================================================================
    File Name: Register.vue
    Description: Register Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center">
        <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4">
            <vx-card title="Create Account" height="100%">
              <div class="mt-5">
                <form-wizard color="rgba(var(--vs-primary), 1)" errorColor="rgba(var(--vs-danger), 1)" :title="null" :subtitle="null" finishButtonText="Submit">
                  <tab-content title="Sign Up" class="mb-5" icon="feather icon-home" :before-change="validateStep1">

                    <!-- tab 1 content -->
                    <form data-vv-scope="step-1">
                    <div class="vx-row">
                      <div class="vx-col hidden sm:hidden md:hidden lg:block lg:w-1/2 mx-auto self-center">
                          <img src="@assets/images/pages/register.jpg" alt="register" class="mx-auto">
                      </div>
                      <div class="vx-col sm:w-full md:w-full lg:w-1/2 mx-auto self-center  d-theme-dark-bg">
                          <div class="px-8 pt-8">
                            <div class="clearfix">
                              <vs-input
                                v-validate="'required|alpha_dash|min:3'"
                                data-vv-validate-on="blur"
                                label-placeholder="Name"
                                name="displayName"
                                placeholder="Name"
                                v-model="displayName"
                                class="w-full" />
                              <span class="text-danger text-sm">{{ errors.first('step-1.displayName') }}</span>

                              <vs-input
                                v-validate="'required|email'"
                                data-vv-validate-on="blur"
                                name="email"
                                type="email"
                                label-placeholder="Email"
                                placeholder="Email"
                                v-model="email"
                                class="w-full mt-6" />
                              <span class="text-danger text-sm">{{ errors.first('step-1.email') }}</span>

                              <vs-input
                                ref="password"
                                type="password"
                                data-vv-validate-on="blur"
                                v-validate="'required|min:6|max:10'"
                                name="password"
                                label-placeholder="Password"
                                placeholder="Password"
                                v-model="password"
                                class="w-full mt-6" />
                              <span class="text-danger text-sm">{{ errors.first('step-1.password') }}</span>

                              <vs-input
                                type="password"
                                v-validate="'required|min:6|max:10|confirmed:password'"
                                data-vv-validate-on="blur"
                                data-vv-as="password"
                                name="confirm_password"
                                label-placeholder="Confirm Password"
                                placeholder="Confirm Password"
                                v-model="confirm_password"
                                class="w-full mt-6" />
                              <span class="text-danger text-sm">{{ errors.first('step-1.confirm_password') }}</span>

                              <vs-checkbox v-model="isTermsConditionAccepted" class="mt-6">I accept the terms & conditions.</vs-checkbox>
                            </div>
                          </div>
                      </div>
                    </div>
                    </form>
                  </tab-content>

                  <!-- tab 2 content -->
                  <tab-content title="Business" class="mb-5" icon="feather icon-briefcase" :before-change="validateStep2">
                    <form data-vv-scope="step-2">
                    <div class="vx-row">
                      <div class="vx-col hidden sm:hidden md:hidden lg:block lg:w-1/2 mx-auto self-center">
                          <img src="@assets/images/pages/graphic-3.png" alt="register" class="mx-auto">
                      </div>
                      <div class="vx-col sm:w-full md:w-full lg:w-1/2 mx-auto self-center  d-theme-dark-bg">
                          <div class="px-8 pt-8">
                            <div class="clearfix">
                              <vs-input label="Business Name" v-model="businessName" class="w-full mt-5" name="business_name" v-validate="'required|alpha_spaces'" />
                              <span class="text-danger">{{ errors.first('step-2.business_name') }}</span>

                              <vs-select v-model="country" class="w-full mt-5" label="Select Country">
                                <vs-select-item :key="index" :value="item.alpha2code" :text="item.name" v-for="(item,index) in countries" class="w-full" />
                              </vs-select>

                              <vs-select v-model="businessType" class="w-full mt-5" label="Business Type">
                                <vs-select-item :key="index" :value="item.id" :text="item.name" v-for="(item,index) in businessvalue" class="w-full" />
                              </vs-select>
                            </div>
                          </div>
                      </div>
                    </div>
                    </form>
                  </tab-content>

                  <!-- tab 3 content -->
                  <tab-content title="Package" class="mb-5" icon="feather icon-package" :before-change="validateStep3">
                    <form data-vv-scope="step-3">
                    <div class="vx-row">
                      <template>
                        <div>
                          <vs-table :data="Packages" >
                            <template slot="thead" >

                              <vs-th class="text-xl w-3/9 " >
                              </vs-th>

                              <vs-th class="text-xl w-2/9 text-center">
                                <div>
                                    Basic <br> ${{basic_yr}} per year | ${{basic_mn}} per month<br>
                                </div>
                              </vs-th>
                              <vs-th class="text-xl w-2/9 text-center">
                                <div>
                                  Standard <br> ${{standard_yr}} per year | ${{standard_mn}} per month
                                  </div>
                              </vs-th>
                              <vs-th class="text-xl w-2/9 text-center">
                              <div>
                                Premium <br> ${{premium_yr}} per year | ${{premium_mn}} per month

                                </div>
                              </vs-th>
                            </template>

                            <template slot-scope="{data}" >
                              <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                                <vs-td :data="tr.name"   class="text-center h-24">
                                  {{tr.name}}
                                </vs-td>
                                <vs-td :data="tr.basic"   class="text-center h-24">
                                  {{tr.basic}}
                                </vs-td>
                                <vs-td :data="tr.standard"   class="text-center h-24">
                                  {{tr.standard}}
                                </vs-td>
                                <vs-td :data="tr.premium"   class="text-center h-24">
                                  {{tr.premium}}
                                </vs-td>
                              </vs-tr>
                              <vs-tr>
                                <vs-td class="text-center h-24">
                                </vs-td>
                                <vs-td class="text-center h-24">
                                  <vs-radio v-model="radios1" vs-value="luis">Luis</vs-radio>
                                </vs-td>
                                <vs-td class="text-center h-24">
                                  <vs-radio v-model="radios1" vs-value="carols">Carols</vs-radio>
                                </vs-td>
                                <vs-td class="text-center h-24">
                                  <vs-radio v-model="radios1" vs-value="summer">Summer</vs-radio>
                                </vs-td>
                              </vs-tr>
                            </template>
                          </vs-table>
                        </div>
                      </template>
                    </div>
                    </form>
                  </tab-content>
                </form-wizard>
              </div>
            </vx-card>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import moduleDataList from '@/store/data-list/moduleDataList.js'
import { FormWizard, TabContent } from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import vSelect from 'vue-select'
// For custom error message
import { Validator } from 'vee-validate'

import router from '@/router'

export default {
  data () {
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
      radios1:'luis',
      isMounted: false,
      va:'',
      businessvalue: null,
      valMultipe:{
        value1:'',
        value2:'',
        value3:'',
        title:'',
      },
      temp_yr:null,
      temp_mn:null,
      standard_yr:'50',
      standard_mn:'5',
      basic_yr:'0',
      basic_mn:'0',
      premium_yr:'100',
      premium_mn:'10',
      Packages:[
        {
          "id": 1,
          "name": "Invoices",
          "basic": "5",
          "standard": "Unlimited",
          "premium": "Unlimited",
          "basic_yr": "No",
          "standard_yr": "Unlimited",
          "premium_yr": "Unlimited",
        },
         {
          "id": 2,
          "name": "Estimates",
          "basic": "20",
          "standard": "Unlimited",
          "premium": "Unlimited",
          "basic_yr": "Unlimited",
          "standard_yr": "Unlimited",
          "premium_yr": "Unlimited",
        },
         {
          "id": 3,
          "name": "Customers",
          "basic": "10",
          "standard": "Unlimited",
          "premium": "Unlimited",
          "basic_yr": "Unlimited",
          "standard_yr": "Unlimited",
          "premium_yr": "Unlimited",

        },
         {
          "id": 4,
          "name": "Business",
          "basic": "5",
          "standard": "500",
          "premium": "1000",
          "basic_yr": "300",
          "standard_yr": "Unlimited",
          "premium_yr": "Unlimited",
        },
         {
          "id": 5,
          "name": "Invoice templates (Select max value 5)",
          "basic": "3",
          "standard": "4",
          "premium": "5",
          "basic_yr": "5",
          "standard_yr": "5",
          "premium_yr": "5",
        },
      ]
    }
  },
  computed: {
    businessTypes(){
      if(this.isMounted)
          
        return this.$store.state.dataList.categories
      return []
    },
    countries(){
      if(this.isMounted)
        return this.$store.state.dataList.countries
      return []
    }
  },
  methods: {
    validateStep1 () {
      return new Promise((resolve, reject) => {
        this.$validator.validateAll('step-1').then(result => {
          if (result) {
            resolve(true)
          } else {
            reject('correct all values')
          }
        })
      })
    },
    validateStep2 () {
      return new Promise((resolve, reject) => {
        this.$validator.validateAll('step-2').then(result => {
          if (result) {
            resolve(true)
          } else {
            reject('correct all values')
          }
        })
      })
    },
    validateStep3 () {
      return new Promise((resolve, reject) => {
        this.$validator.validateAll('step-3').then(result => {
          if (result) {
            this.registerUserJWt()
            resolve(true)
          } else {
            reject('correct all values')
          }
        })
      })
    },
    registerUserJWt () {
     const payload = {
        userDetails: {
          name: this.displayName,
          email: this.email,
          password: this.password,
          confirmPassword: this.confirm_password
        },
        notify: this.$vs.notify
      }
      this.$store.dispatch('auth/registerUser', payload)

      
      //alert('Form submitted!')
    }
  },

  components: {
    FormWizard,
    'v-select': vSelect,
    TabContent
  },
   mounted() {
     if (!moduleDataList.isRegistered) {
         this.$store.registerModule('dataList', moduleDataList)
         moduleDataList.isRegistered = true
     }
        axios.get('/api/CategoryValue')
        .then(response => (this.businessvalue = JSON.parse(JSON.stringify(response.data)).reverse()))
     this.$store.dispatch('dataList/fetchDataListCategory')
     this.$store.dispatch('dataList/fetchDataListCountries')
     this.isMounted = true
   }
}
</script>

<style lang="scss">
.register-tabs-container {
  min-height: 517px;

  .con-tab {
    padding-bottom: 23px;
  }
}
</style>
