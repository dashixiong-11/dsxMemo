<template>
   <div id="app">
      <router-view/>
   </div>
</template>

<style lang="scss">
   @import "~@/assets/style/helper.scss";

   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   ul,ol,li{
      list-style: none;
   }
   body {
      line-height: 1.5;
      font-family: $font-hei;
   }

   a {
      text-decoration: none;
      color: inherit;
   }

   #app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #2c3e50;
   }

   #nav {
      padding: 30px;

      a {
         font-weight: bold;
         color: #2c3e50;

         &.router-link-exact-active {
            color: #42b983;
         }
      }
   }
</style>
