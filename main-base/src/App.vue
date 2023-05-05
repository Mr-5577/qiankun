<template>
  <div id="app">
    <router-link to="/">回到主应用</router-link>
    <button @click="handleToSub">跳转sub-vue子应用</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  methods: {
    handleToSub() {
      this.$router.push("/subVueRoute/test");
    },
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
