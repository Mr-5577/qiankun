<template>
  <div id="app">
    <router-link to="/">回到主应用</router-link>
    <button @click="handleToSubVue">跳转sub-vue子应用</button>
    <button @click="handleToSubReact">跳转sub-react子应用</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  methods: {
    handleToSubVue() {
      this.$router.push("/subVueRoute/test");
    },
    handleToSubReact(){
      this.$router.push("/subReactRoute/ReactTest");
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
