<template>
  <div id="app">
    <router-link to="/">回到主应用</router-link>
    <button @click="handleToSubVue">跳转sub-vue子应用</button>
    <button @click="handleToSubReact">跳转sub-react子应用</button>
    <button style="width: 100px" @click="increment">增加</button>
    <button style="width: 100px" @click="decrease">减少</button>
    <router-view></router-view>
  </div>
</template>

<script>
import { actions } from "@/qiankun/qiankunAction";
export default {
  name: "App",
  methods: {
    handleToSubVue() {
      this.$router.push("/subVueRoute/test");
    },
    handleToSubReact() {
      this.$router.push("/subReactRoute/ReactTest");
    },
    increment() {
      console.log(this.$store);
      this.$store.commit("user/increment", 4);
      actions.setGlobalState({
        data: "asudgiausdias" + this.$store.state.user.count,
      });
    },
    decrease() {
      this.$store.dispatch("user/decrease");
      actions.setGlobalState({
        data: "asudgiausdias" + this.$store.state.user.count,
      });
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
