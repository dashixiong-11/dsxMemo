<template>
   <div>
      <Layout>
         <header class="tab">
            <div class="tab-time">
               <span class="tab-time-year"> 2020年 </span>
               <div class="tab-time-month">
                  <span>07月</span>
                  <Icon name="Add"></Icon>
               </div>
            </div>
            <div class="tab-income-outlay">
               <div>
                  <span class="tab-income-title">收入</span>
                  <span class="tab-income-content">0.00</span>
               </div>
               <div>
                  <span class="tab-outlay-title">支出</span>
                  <span class="tab-outlay-content">131</span>
               </div>
            </div>
         </header>
         <main>
            <div class="wrapper">
               <div class="wrapper-title">
                  <div class="wrapper-title-time">
                     <span style="margin-right: 4px">07月15日</span>
                     <span>星期三</span>
                  </div>
                  <span>支出: 15</span>
               </div>
               <div class="wrapper-content">
                  <div class="icon"></div>
                  <span style="margin-right: auto">美容</span>
                  <span>-15</span>
               </div>
            </div>
         </main>
      </Layout>
   </div>

</template>

<script lang="ts">
    export default {
        name: ''
    };
</script>

<style scoped lang="scss">
   @import "~@/assets/style/helper.scss";

   .tab {
      background: $color-highlight;
      display: flex;
      padding: 1em 0 2px 1em;

      &-time {
         &-year {
            font-size: $font-size-14;
         }

         &-month {
            font-size: $font-size-18;
            font-weight: bold;
            padding-right: .5em;
            margin-top: 6px;
         }
      }

      .tab-income-outlay {
         flex-grow: 1;
         display: flex;
         align-items: center;
         padding-left: .5em;

         div {
            display: flex;
            flex-direction: column;
            width: 50%;

            span:first-child {
               font-size: $font-size-14;
            }

            .tab-income-content, .tab-outlay-content {
               margin-top: 6px;
               font-size: $font-size-18;
               font-weight: bold;
            }
         }
      }
   }

   .wrapper {
      margin-bottom: 1em;

      &-title, &-content {
         display: flex;
         align-items: center;
      }

      &-title {
         padding: .5em 1em .5em;
         border-bottom: 1px solid #dbdbdb;
         font-size: $font-size-14;
         color: #9b9898;
         &-time {
            margin-right: auto;
         }
      }

      &-content {
         padding:1em;
         .icon {
            width: 1.5em;
            height: 1.5em;
            border-radius: 50%;
            background: grey;
            margin-right: 4px;
         }
      }
   }

</style>
