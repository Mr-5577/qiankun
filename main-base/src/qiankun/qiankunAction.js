import { initGlobalState } from "qiankun";
// import store from "@/store";

// 初始化共享数据
export const actions = initGlobalState({ data: 'zhangsan' });
actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log("基座++", state, prev);
});
