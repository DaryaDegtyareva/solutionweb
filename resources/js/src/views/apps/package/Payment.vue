<template>
  <div class="w-full">
    <div class="md:flex flex-none">
        <div class="md:w-2/3 w-full md:mr-8 m-0">
            <vs-card ref="filterCard" class=" user-list-filters mb-8 ">
                 <div slot="header"><p class="ml-2">Currency</p></div>
                <div class="mb-6 mx-4">
                    <v-select class="w-full " v-model="currencyFilter" label="text" :options="currencyOptions" :dir="$vs.rtl ? 'rtl' : 'ltr'" ></v-select>
                   
                </div>
            </vs-card >
            <div class="md:flex w-full">
            <vs-card ref="filterCard" title="Currency" class=" user-list-filters mb-8  md:w-1/2 w-full md:mr-2 m-0" >
                <div slot="header">
                    <div class="flex">
                        <p class="ml-2">Paypal payment</p>
                        <vs-switch class="ml-2" color="success" v-model="paypal">
                            <span slot="on">Accept</span>
                            <span slot="off">Cancel</span>
                        </vs-switch>
                    </div>
                </div>

                <div class="mb-6 mx-4">
                    <v-select class="w-full " v-model="paypalFilter" label="text" :options="paypalOptions" :dir="$vs.rtl ? 'rtl' : 'ltr'" ></v-select>
                </div>
                <div class="mb-6  mx-4">
                     <vs-input class="w-full" label="Paypal Merchant Account" placeholder="Enter Paypal Merchant Account here" v-model="value2"/>
                </div>
            </vs-card >
            <vs-card ref="filterCard" title="Currency" class=" user-list-filters mb-8  md:w-1/2 w-full md:ml-2 px-auto" >
            
                <div slot="header">
                    <div class="flex">
                        <p class="ml-2">Stripe Payment</p>
                        <vs-switch class="ml-2" color="success" v-model="stripe">
                            <span slot="on">Accept</span>
                            <span slot="off">Cancel</span>
                        </vs-switch>
                    </div>
                </div>


                <div class="mb-6">
                     <vs-input class="w-full"  label="Publish Key" placeholder="Enter Key here" v-model="value1"/>
                </div>
                <div class="mb-6">
                     <vs-input class="w-full"  label="Secret Key" placeholder="Enter Secret Key here" v-model="value2"/>
                </div>
            </vs-card >
            </div>
        </div>
        <vs-card ref="filterCard" title="Currency" class="user-list-filters md:w-1/3 w-full" >
                <div slot="header"><p class="ml-2">Add Offline Payment</p></div>

        <div class="mb-6 mx-4">
            <v-select class="w-full " v-model="userFilter" label="text" :options="userOptions" :dir="$vs.rtl ? 'rtl' : 'ltr'" ></v-select>
        </div>
         <div class="mb-6 mx-4">
            <v-select class="w-full " v-model="packageFilter" label="text" :options="packageOptions" :dir="$vs.rtl ? 'rtl' : 'ltr'" ></v-select>
        </div>
        <div class="text-md">
            <label class="ml-6">Subscription Type</label>
        <ul class="leftx flex "  >
            <li class="m-6">
                <vs-radio v-model="radios1" vs-name="radios1" vs-value="Monthly">Monthly</vs-radio>
            </li>
            <li class="m-6">
                <vs-radio v-model="radios1" vs-name="radios1" vs-value="Yearly">Yearly</vs-radio>
            </li>
        </ul>
        </div>
        <div class="text-md">
            <label class="ml-6">Payment Status</label>
        <ul class="leftx flex "  >
            <li class="m-6">
                <vs-radio v-model="radios2" vs-name="radios2" vs-value="Verified">Verified</vs-radio>
            </li>
            <li class="m-6">
                <vs-radio v-model="radios2" vs-name="radios2" vs-value="Pending">Pending</vs-radio>
            </li>
        </ul>
        </div>
        <vs-button class="ml-6" color="primary" type="filled"  icon-pack="feather" icon="icon-check">Add Payment</vs-button>     
    </vs-card >
    </div>
    <vs-button  color="primary" type="filled"  icon-pack="feather" icon="icon-check">Save Changes</vs-button>     
   

  </div>
</template>

<script>
import vSelect from 'vue-select'
export default {
    components:{
        'v-select': vSelect,
    },
    data() {
      return {
           paypal:true,
           stripe:true,
           value1:null,
           value2:null,
           value3:null,
           radios1:null,
           radios2:null,
    currencyFilter: { value: null, text: 'Please select currency' },
      currencyOptions: [
       
        {text:'Andorra  -  EUR (€)', value:'EUR'},
        {text:'United Arab Emirates  -  AED (د.إ)', value:'AED'},
        {text:'Afghanistan  -  AFN (؋)', value:'AFN'},
        {text:'Antigua and Barbuda  -  XCD ($)', value:'XCD'},
        {text:'Anguilla  -  XCD ($)', value:'XCD'},
        {text:'Albania  -  ALL (L)', value:'ALL'},
        {text:'Armenia  -  AMD ()', value:'AMD'},
        {text:'Angola  -  AOA (Kz)', value:'AOA'},
        {text:'Argentina  -  ARS ($)', value:'ARS'},
        {text:'Austria  -  EUR (€)', value:'EUR'},
        {text:'Australia  -  AUD ($)', value:'AUD'},
        {text:'Aruba  -  AWG (ƒ)', value:'AWG'},
        {text:'Azerbaijan  -  AZN ()', value:'AZN'},
        {text:'Barbados  -  BBD ($)', value:'BBD'},
        {text:'Bangladesh  -  BDT (৳)', value:'BDT'},
        {text:'Belgium  -  EUR (€)', value:'EUR'},
        {text:'Burkina Faso  -  XOF (Fr)', value:'XOR'},
        {text:'Bulgaria  -  BGN (лв)', value:'BGN'},
        {text:'Bahrain  -  BHD (.د.ب)', value:'BHD'},
        {text:'Burundi  -  BIF (Fr)', value:'BIF'},
        {text:'Benin  -  XOF (Fr)', value:'XOR'},
        {text:'Bermuda  -  BMD ($)', value:'BMD'},
        {text:'Brazil  -  BRL (R$)', value:'BRL'},
      
      ],
      paypalFilter: { value: null, text: 'Please select paypal option' },
      paypalOptions: [
        
        {text:'Sandbox', value:'sandbox'},
        {text:'Live', value:'live'},
      
      
      ],
      userFilter: { value: null, text: 'Please select user' },
      userOptions: [
        
        {value: 268,text: 'Angelo Sashington angelo@sashington.com'},

 {value: 269,text: 'Rubi Ortwein rubi@ortwein.com'},

 {value: 270,text: 'Donnette Charania donnette@charania.com'},

 {value: 271,text: 'Ardith Duffett ardith@duffett.com'},

 {value: 272,text: 'Antone Berman antone@berman.com'},

 {value: 273,text: 'Maryann Gour maryann@gour.com'},

 {value: 274,text: 'Holli Vanduyne holli@vanduyne.com'},

 {value: 275,text: 'Juanita Sartoris juanita@sartoris.com'},

 {value: 276,text: 'Lia Morga lia@morga.com'},

 {value: 277,text: 'Theo Quatrevingt theo@quatrevingt.com'},

 {value: 278,text: 'Lynwood Flud lynwood@flud.com'},

 {value: 279,text: 'Kaitlin Kahola kaitlin@kahola.com'},

 {value: 280,text: 'Alvin Car alvin@car.com'},

 {value: 281,text: 'Justin Jacquelin justin@jacquelin.com'},

 {value: 282,text: 'Chloe Tague chloe@tague.com'},

 {value: 283,text: 'Zola Tauarez zola@tauarez.com'},

 {value: 284,text: 'Wm Cieszynski wm@cieszynski.com'},

 {value: 285,text: 'Hope Mobus hope@mobus.com'},

 {value: 286,text: 'Lee Wernimont lee@wernimont.com'},

 {value: 287,text: 'Myesha Denman myesha@denman.com'},

 {value: 288,text: 'Cornell Roszell cornell@roszell.com'},

 {value: 289,text: 'Vernon Ogrodowicz vernon@ogrodowicz.com'},

 {value: 290,text: 'Rosy Litza rosy@litza.com'},

 {value: 291,text: 'Carl Lano carl@lano.com'},

 {value: 292,text: 'Jamika Overlee jamika@overlee.com'},

 {value: 293,text: 'Lyle Pytko lyle@pytko.com'},

 {value: 294,text: 'Latoria Josef latoria@josef.com'},

 {value: 295,text: 'Tennille Draft tennille@draft.com'},

 {value: 296,text: 'Bernadette Ludovici bernadette@ludovici.com'},

 {value: 297,text: 'Mui Melching mui@melching.com'},

 {value: 298,text: 'Mitsue Houlahan mitsue@houlahan.com'},

 {value: 299,text: 'Elsa Neubert elsa@neubert.com'},

 {value: 300,text: 'Kandice Mizelle kandice@mizelle.com'},

 {value: 301,text: 'Damian Hayzlett damian@hayzlett.com'},

 {value: 302,text: 'Aundrea Stempel aundrea@stempel.com'},

 {value: 303,text: 'Shiloh Spielmaker shiloh@spielmaker.com'},

 {value: 304,text: 'Terese Dyreson terese@dyreson.com'},

 {value: 305,text: 'Vashti Kilton vashti@kilton.com'},

 {value: 306,text: 'Carter Mendes carter@mendes.com'},

 {value: 307,text: 'Helene Madden helene@madden.com'},

 {value: 308,text: 'Ashton Calderone ashton@calderone.com'},

 {value: 309,text: 'Robert Lyster robert@lyster.com'},

 {value: 310,text: 'Delma Mewbourn delma@mewbourn.com'},

 {value: 311,text: 'Ja Alaibilla ja@alaibilla.com'},

 {value: 312,text: 'Delinda Rosentrance delinda@rosentrance.com'},

 {value: 313,text: 'Danae Demeter danae@demeter.com'},

 {value: 314,text: 'Kattie Joffrion kattie@joffrion.com'},

 {value: 315,text: 'In Stjohns in@stjohns.com'},

 {value: 316,text: 'Van Laferney van@laferney.com'},

 {value: 317,text: 'Sylvia Maharrey sylvia@maharrey.com'},
      
      ],
      packageFilter:  { value: null, text: 'Please select package' },
      packageOptions: [
       
        {text:'Basic', value:'Basic'},
        {text:'Standard', value:'Standard'},
        {text:'Premium', value:'Premium'},
      
      ],
    }

  },
  computed:{
    validName(){
      return (this.valMultipe.value1.length > 0 && this.valMultipe.value2.length > 0)
    }
  },
  methods:{
      editFeatures (data) {
      this.activePrompt = true,
      console.log(data);
    },
    editPackages(data) {
      this.activePrompt = true,
      console.log(data);
    },
    acceptAlert(){
      this.$vs.notify({
        color:'success',
        title:'Accept Selected',
        text:'Lorem ipsum dolor sit amet, consectetur'
      })
    },
    close(){
      this.$vs.notify({
        color:'danger',
        title:'Closed',
        text:'You close a dialog!'
      })
    },
    clearValMultiple() {
      this.valMultipe.value1 = "";
      this.valMultipe.value2 = "";
    }
  },
 
}
</script>