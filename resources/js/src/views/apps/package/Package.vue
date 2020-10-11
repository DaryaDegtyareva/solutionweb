<template>
  <div>
    <vs-table :data="Packages" >
      <template slot="thead" >

        <vs-th class="text-xl w-2/6 " >
            <div class="mx-auto">
                Manage Packages
                </div>
        </vs-th>

        <vs-th class="text-xl w-1/6 text-center">
          <div>
              Basic <br> ${{basic_yr}} per year | ${{basic_mn}} per month<br>
                <vs-button @click="editPackageDailog('Basic',basic_yr,basic_mn)" color="primary" type="border">Edit Package</vs-button>
          </div>
        </vs-th>
        <vs-th class="text-xl w-1/6 text-center">
          <div>
            Standard <br> ${{standard_yr}} per year | ${{standard_mn}} per month
                <vs-button @click="editPackageDailog('Standard',standard_yr,standard_mn)" color="primary" type="border">Edit Package</vs-button>
            </div>
        </vs-th>
        <vs-th class="text-xl w-1/6 text-center">
        <div>
          Premium <br> ${{premium_yr}} per year | ${{premium_mn}} per month
                <vs-button @click="editPackageDailog('Premium',premium_yr,premium_mn)" color="primary" type="border">Edit Package</vs-button>

          </div>
        </vs-th>
        <vs-th class="text-xl w-1/6 text-center">
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

           <vs-td :data="tr.id"   class="text-center h-24">
            <vs-button @click="editFeatureDailog(tr)" color="primary" type="border">Edit Features</vs-button>
          </vs-td>


        </vs-tr>
      </template>
    </vs-table>


    <template>


    <!-- <vs-prompt
      @cancel="val=''"
      @accept="acceptAlert"
      @close="close"
      :active.sync="activePrompt">
      <div class="con-exemple-prompt">
        <span>Enter the security code</span>
      <vs-input placeholder="Code" vs-placeholder="Code" v-model="val" class="mt-3 w-full" />
      </div>
    </vs-prompt> -->

    <vs-prompt
      @cancel="clearValMultiple"
      @accept="acceptPackAlert"
      :active.sync="activePrompt"
        v-bind:title=valMultipe.title>
      <div class="con-exemple-prompt">
      <vs-input placeholder="Name" v-model="valMultipe.value1" class="mt-4 mb-2 w-full" />
      <vs-input placeholder="Monthly Price" v-model="valMultipe.value3" class="mt-4 mb-2 w-full" />
      <vs-input placeholder="Yearly Price" v-model="valMultipe.value2" class="w-full" />


      </div>
    </vs-prompt>
    </template>
    <template>
    <vs-prompt
      @cancel="clearValMultiple"
      @accept="acceptFeaAlert"
      :active.sync="activePrompt2"
        v-bind:title=valMultipe.title>
        <div class="con-exemple-prompt vx-col">
                <vx-card>
                    <vs-tabs vs-alignment="fixed" alignment="fixed">
                        <vs-tab label="Monthly" >

                            <v-select class="w-full " label="text"  v-model="select1" :options="options1" :dir="$vs.rtl ? 'rtl' : 'ltr'" ></v-select>


                            <v-select class="w-full " label="text"  v-model="select2" :options="options1" :dir="$vs.rtl ? 'rtl' : 'ltr'" ></v-select>


                            <v-select class="w-full " label="text"  v-model="select3" :options="options1" :dir="$vs.rtl ? 'rtl' : 'ltr'" ></v-select>

                        </vs-tab>
                        <vs-tab label="Yearly">

                            <v-select class="w-full " label="text"  v-model="select4" :options="options1" :dir="$vs.rtl ? 'rtl' : 'ltr'" ></v-select>
                            <v-select class="w-full " label="text"  v-model="select5" :options="options1" :dir="$vs.rtl ? 'rtl' : 'ltr'" ></v-select>
                            <v-select class="w-full " label="text"  v-model="select6" :options="options1" :dir="$vs.rtl ? 'rtl' : 'ltr'" ></v-select>

                        </vs-tab>
                    </vs-tabs>
                </vx-card>
            </div>
        </vs-prompt>
    </template>
  </div>
</template>

<script>
import vSelect from 'vue-select'
export default {
    components:{
        'v-select': vSelect,
    },
  data:()=>({
        select1:null,
        select2:null,
        select3:null,
        select4:null,
        select5:null,
        select6:null,

      options1:[
        {text:'---',value:0},
        {text:'No',value:"No"},
        {text:'Yes',value:'Yes'},
        {text:'Unlimited',value:'Unlimited'},
        {text:'3',value:3},
        {text:'4',value:4},
        {text:'5',value:5},
        {text:'10',value:10},
        {text:'15',value:15},
        {text:'20',value:20},
        {text:'25',value:25},
        {text:'30',value:30},
        {text:'35',value:35},
        {text:'40',value:40},
        {text:'45',value:45},
        {text:'50',value:50},
        {text:'55',value:55},
        {text:'60',value:60},
        {text:'65',value:65},
        {text:'70',value:70},
        {text:'75',value:75},
        {text:'80',value:80},
        {text:'85',value:85},
        {text:'90',value:90},
        {text:'95',value:95},
        {text:'100',value:100},
        {text:'105',value:105},
        {text:'110',value:110},
        {text:'115',value:115},
        {text:'120',value:120},
        {text:'125',value:125},
        {text:'130',value:130},
        {text:'135',value:135},
        {text:'140',value:140},
        {text:'145',value:145},
        {text:'150',value:150},
        {text:'155',value:155},
        {text:'160',value:160},
        {text:'165',value:165},
        {text:'170',value:170},
        {text:'175',value:175},
        {text:'180',value:180},
        {text:'185',value:185},
        {text:'190',value:190},
        {text:'195',value:195},
        {text:'200',value:200},
        {text:'205',value:205},
        {text:'210',value:210},
        {text:'215',value:215},
        {text:'220',value:220},
        {text:'225',value:225},
        {text:'230',value:230},
        {text:'235',value:235},
        {text:'240',value:240},
        {text:'245',value:245},
        {text:'250',value:250},
        {text:'255',value:255},
        {text:'260',value:260},
        {text:'265',value:265},
        {text:'270',value:270},
        {text:'275',value:275},
        {text:'280',value:280},
        {text:'285',value:285},
        {text:'290',value:290},
        {text:'295',value:295},
        {text:'300',value:300},
        {text:'305',value:305},
        {text:'310',value:310},
        {text:'315',value:315},
        {text:'320',value:320},
        {text:'325',value:325},
        {text:'330',value:330},
        {text:'335',value:335},
        {text:'340',value:340},
        {text:'345',value:345},
        {text:'350',value:350},
        {text:'355',value:355},
        {text:'360',value:360},
        {text:'365',value:365},
        {text:'370',value:370},
        {text:'375',value:375},
        {text:'380',value:380},
        {text:'385',value:385},
        {text:'390',value:390},
        {text:'395',value:395},
        {text:'400',value:400},
        {text:'500',value:500},
        {text:'1000',value:1000},
       ],
    activePrompt:false,
    activePrompt2:false,
      val:'',
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
  }),
  computed:{
    // validName(){
    //   return (this.valMultipe.value1.length > 0 && this.valMultipe.value2.length > 0 && this.valMultipe.value3.length > 0)
    // }
  },
  methods:{
    editPackageDailog(nm,yr,mn){
        this.valMultipe.title="Update Package - "+nm,
        this.valMultipe.value1=nm,
        this.valMultipe.value2=yr,
        this.valMultipe.value3=mn,
    this.activePrompt = true;
    },
    editFeatureDailog(tr){
        this.valMultipe.title="Update Package features for - "+tr.name,
        this.selectID=tr,
        this.select1=tr.basic,
        this.select2=tr.standard,
        this.select3=tr.premium,
        this.select4=tr.basic_yr,
        this.select5=tr.standard_yr,
        this.select6=tr.premium_yr,
    this.activePrompt2 = true;
    },

      editFeatures (data) {
      this.activePrompt = true,
      console.log(data);
    },
    editPackages(data) {
      this.activePrompt = true,
      console.log(data);
    },
    acceptPackAlert(){
        if(this.valMultipe.value1=='Basic') {
            this.basic_yr=this.valMultipe.value2;
            this.basic_mn=this.valMultipe.value3;
            this.$vs.notify({
            color:'success',
            title:'Basic Package',
            text:'Data Updated Successfully'
            })
        }
        else if(this.valMultipe.value1=='Standard') {
            this.standard_yr=this.valMultipe.value2;
            this.standard_mn=this.valMultipe.value3;
            this.$vs.notify({
            color:'success',
            title:'Standard Package',
            text:'Data Updated Successfully'
            })
        }
        else if(this.valMultipe.value1=='Premium') {
            this.premium_yr=this.valMultipe.value2;
            this.premium_mn=this.valMultipe.value3;
            this.$vs.notify({
            color:'success',
            title:'Premium Package',
            text:'Data Updated Successfully'
            })
        }else{
            this.close();
        }

    },
    acceptFeaAlert(){
       const productIndex = this.Packages.findIndex((p) => p.id === this.selectID.id)
       try{
            this.Packages[productIndex].basic=this.select1;
            this.Packages[productIndex].standard=this.select2;
            this.Packages[productIndex].premium=this.select3;
            this.Packages[productIndex].basic_yr=this.select4;
            this.Packages[productIndex].standard_yr=this.select5;
            this.Packages[productIndex].premium_yr=this.select6;
            this.$vs.notify({
            color:'success',
            title:this.selectID.name+' Feature',
            text:'Data Updated Successfully'
            })

       }catch(e){
            this.close();
       }
    },
    close(){
      this.$vs.notify({
        color:'danger',
        title:'Something Went Wrong',
        text:'Please Try Again!'
      })
    },
    clearValMultiple() {
      this.valMultipe.value1 = "";
      this.valMultipe.value2 = "";
    }
  }
}
</script>
