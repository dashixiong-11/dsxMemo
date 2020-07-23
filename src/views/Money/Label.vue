<template>
   <div class="memo-money-labels">
      <ul class="memo-money-labels-wrapper">
         <li class="memo-money-labels-wrapper-item" :class="{selected:label === i}" @click="onClickLabel(i)" v-for=" (i,index) in labels" :key="index">
            <div class="memo-money-labels-wrapper-item-icon"></div>
            <span>{{i}}</span>
         </li>
      </ul>
   </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';

    @Component
    export default class Labels extends Vue {
        @Prop(String) type!: string
        @Prop(String) label!: string
        
        outlayLabels: Array<string> = [
            '餐饮',
            '购物',
            '日用',
            '交通',
            '蔬菜',
            '水果',
            '零食'
        ];
        incomeLabels: Array<string> = [
            '工资',
            '兼职',
            '理财',
            '彩票',
            '捡钱',
        ];
        
        onClickLabel(value: string){
            this.$emit('update:label',value)
        }

        get labels() {
            if (this.type === '-') {
                return this.outlayLabels;
            } else if (this.type === '+') {
                return this.incomeLabels;
            } else {
                return [];
            }
        }


    }
</script>

<style scoped lang="scss">
   @import "~@/assets/style/helper.scss";

   .memo-money-labels {
      margin-top: 50px;
      overflow: auto;
      font-size: $font-size-14;

      &-wrapper {
         display: flex;
         align-items: center;
         flex-wrap: wrap;

         &-item {
            margin-top: 10px;
            width: 25%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            &.selected{
               color: red;
            }

            &-icon {
               width: 2em;
               height: 2em;
               background: #acacac;
               border-radius: 50%;
               margin-bottom: 8px;
            }
         }
      }
   }
</style>
