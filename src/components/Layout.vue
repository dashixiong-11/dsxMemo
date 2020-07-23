<template>
   <div class="nav-wrapper">
      <div class="content">
         <slot/>
      </div>
      <Nav/>
   </div>
</template>

<script lang="ts">
   import Vue from 'vue'
   import {Component,Prop} from 'vue-property-decorator';

   @Component
    export default class Layout extends Vue {
    }
</script>

<style scoped lang="scss">
   .nav-wrapper{
      display: flex;
      flex-direction: column;
      .content{
         overflow: auto;
         flex-grow: 1;
      }
   }

</style>
