<template>
   <div class="memo-money-nav">
      <ul class="memo-money-nav-trigger">
         <li :style="{paddingLeft:paddinglr+'px',paddingRight:paddinglr+'px'}" v-for="(i,index) in list" :class="type === i.type && 'active'" @click="trigger(i.type)" :key="index">{{i.name}}</li>
      </ul>
   </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';


    @Component
    export default class Tab extends Vue {
        @Prop(String) readonly type!: string;
        @Prop(Array) readonly list!: Array<TabList>;
        @Prop({default:0}) readonly paddinglr!: number


        trigger(type: string) {
            this.$emit('update:type', type);
        }
    }
</script>

<style scoped lang="scss">
   @import "~@/assets/style/helper.scss";

   .memo-money-nav {
      display: inline-block;
      &-trigger {
         display: flex;
         align-items: center;
         justify-content: center;
         border: 1px solid #000;
         border-radius: 6px;
         overflow: hidden;
         margin-bottom: 5px;

         > li {
            padding-top: 5px;
            padding-bottom: 5px;
            font-size: $font-size-14;
            &.active {
               background: #000;
               color: #f8eabf;
            }
         }
      }
   }
</style>
