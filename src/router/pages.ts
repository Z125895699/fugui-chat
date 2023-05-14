/*
 * @Author: zhangdi 1258956799@qq.com
 * @Date: 2023-05-14 22:01:42
 * @LastEditors: zhangdi 1258956799@qq.com
 * @LastEditTime: 2023-05-14 23:17:58
 * @FilePath: /fugui-chat/src/router/pages.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 主包
const mainPackage = {
  index: '/pages/index/index',
  me: '/pages/me/index',
}

// // 分包
// const subPackage = {
//   subIndex: '/package-sub/pages/index/index',
// }

const pages = {
  ...mainPackage,
  // ...subPackage,
}

export default pages
