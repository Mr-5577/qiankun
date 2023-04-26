<template>
  <!-- 接收不同子应用页面，挂载子应用入口 -->
  <div id="subapp-viewport"></div>
</template>

<script>
import start from "@/qiankun/index";
export default {
  mounted() {
    // 启动微应用
    if (!window.qiankunStarted) {
      window.qiankunStarted = true;
      start();
    }
  },
};
</script>