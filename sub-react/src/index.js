import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/index";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

let root = null;
function render(props) {
  console.log("🚀 ~ React子应用获取数据", props);
  root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <BrowserRouter
        basename={window.__POWERED_BY_QIANKUN__ ? "/subReactRoute" : "/"}
      >
        <Router></Router>
      </BrowserRouter>
    </React.StrictMode>
  );
}

if (window.__POWERED_BY_QIANKUN__) {
  // eslint-disable-next-line
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
} else {
  render({}); // 独立运行
}

/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap() {
  console.log("[react18] react app bootstraped");
}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props) {
  console.log("[react18] props from main framework", props);
  props.onGlobalStateChange &&
    props.onGlobalStateChange((state, prev) => {
      // state: 变更后的状态; prev 变更前的状态
      console.log("基座传下来的数据**", state, prev);
    }, true);
  render(props);
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount(props) {
  root.unmount();
  root = null;
}
