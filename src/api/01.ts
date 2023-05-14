/*
 * @Author: zhangdi 1258956799@qq.com
 * @Date: 2023-05-14 22:16:12
 * @LastEditors: zhangdi 1258956799@qq.com
 * @LastEditTime: 2023-05-14 22:23:17
 * @FilePath: /fugui-chat/src/api/01.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '@/utils/request';

class getGpt {
  // 获取列表
  static getList() {
    return request.post(
      'v1/chat/completions',
      {
        "model": "gpt-3.5-turbo",
        "messages": [
          {"role": "user", "content": "hi!"}
        ],
      }
    )
  }
}

export default getGpt
