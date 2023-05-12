import { registerMicroApps, start } from "qiankun";
import store from "@/store";

/**
 * name: -必选，子应用名称 - 子应用之间必须确保唯一
 * entry: -必选，子应用入口 - 通过该地址加载微应用
 * container: -必选，子应用挂载节点 - 子应用加载完成后将挂载在该节点上
 * activeRule: -必选，子应用触发的路由规则 - 触发路由规则后将加载该子应用
 * props: - 可选，子应用接收主应用数据 -
 */
const apps = [
  {
    name: "sub-vue",
    entry: "http://localhost:8022",
    container: "#subapp-viewport",
    activeRule: "/subVueRoute",
    props: {
      // 此处将父应用的 store 传入子应用
      store,
    },
  },
  {
    name: "sub-react",
    entry: "http://localhost:3000",
    container: "#subapp-viewport",
    activeRule: "/subReactRoute",
    props: {
      // 此处将父应用的 store 传入子应用
      store,
    },
  },
];

registerMicroApps(apps);

export default start;
