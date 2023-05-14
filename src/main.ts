/*
 * @Author: zhangdi 1258956799@qq.com
 * @Date: 2023-03-20 15:48:19
 * @LastEditors: zhangdi 1258956799@qq.com
 * @LastEditTime: 2023-05-14 22:27:32
 * @FilePath: /fugui-chat/src/main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createSSRApp } from "vue";
import App from "./App.vue";
// import request from '@/api/http';

export function createApp() {
  const app = createSSRApp(App);
  
  // 在这里将 request 添加到全局属性上
  
  // app.config.globalProperties.$request = request;
  return {
    app,
  };
}
