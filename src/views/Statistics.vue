<template>
   <div>
      <Layout>
         <div class="statistics">
            <header>
               <Tab :type.sync="type1" :list="list1" :paddinglr="20" />
               <Tab :type.sync="type2" :list="list2" :paddinglr="20" />
            </header>
         </div>
      </Layout>
   </div>

</template>

<script lang="ts">
    import Tab from '@/views/Money/Tab.vue';
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    @Component({
        components: { Tab }
    })
    export default class Statistics extends Vue {
        name = '';
        type1 = '-';
        type2 = 'week';
        list1 = [{name:'支出',type:'-'},{name: '收入',type: '+'}]
        list2 = [{name:'周',type:'week'},{name: '月',type: 'month'},{name: '年',type:'year'}]
    }
</script>

<style scoped lang="scss">
   @import "~@/assets/style/helper.scss";

   .statistics{
      header{
         background: $color-highlight;
         height: 60px;
         padding: 0 1em;
         display: flex;
         align-items: flex-end;
         justify-content: space-between;
      }
   }
</style>
