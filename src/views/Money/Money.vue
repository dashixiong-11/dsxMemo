<template>
   <div>
      <Layout>
         <div class="box">
            <div class="memo-money">
               <div class="memo-money-header">
                  <Tab :type.sync="type" :paddinglr="40" :list="[{name:'收入',type:'+'},{name:'支出',type:'-'}]"/>
               </div>
               <Label :type="type" :label.sync="label"/>
               <NumberPad v-if="label" @outputData="outputData"/>
            </div>
         </div>
      </Layout>
   </div>

</template>

<script lang="ts">

    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import Label from '@/views/Money/Label.vue';
    import NumberPad from '@/views/Money/NumberPad.vue';
    import Tab from '@/views/Money/Tab.vue';

    @Component({
        components: {Tab, Label, NumberPad}
    })
    export default class Money extends Vue {
        type = '-';
        label = '';

        outputData(val: outputType) {
            const data = JSON.parse(JSON.stringify(val))
            data.type = this.type
            data.label = this.label
            console.log(data);
            this.$router.push({ path: '/labels' })
        }
    }
</script>

<style scoped lang="scss">
   @import "~@/assets/style/helper.scss";

   .memo-money {
      &-header {
         position: fixed;
         width: 100%;
         top: 0;
         background: $color-highlight;
         height: 50px;
         display: flex;
         align-items: flex-end;
         justify-content: center;
      }
   }
</style>
