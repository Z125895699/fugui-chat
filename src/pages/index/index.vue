<!--
 * @Author: zhangdi 1258956799@qq.com
 * @Date: 2023-03-20 15:48:19
 * @LastEditors: zhangdi 1258956799@qq.com
 * @LastEditTime: 2023-04-07 18:56:21
 * @FilePath: /fugui-chat/src/pages/index/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <view class="content">
    <image class="logo" src="@/static/logo.png" />
    <view class="text-area">
      <button class="title">{{111}}</button>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref,getCurrentInstance, onMounted } from 'vue'
const title = ref('Hello')
const instance = getCurrentInstance();
if (instance) {
      // 从全局属性中获取 $request
      const { $request } = instance.appContext.config.globalProperties;
      console.log('$request',$request);
      // 定义 fetchData 方法
      const fetchData = async () => {
        try {
          const data = await $request.post('v1/chat/completions',{
            "model": "gpt-3.5-turbo",
            "messages": [
              {"role": "user", "content": "hi!"}
            ],
            // "stream":true
          });
          console.log(data.choices[0].message.content);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      onMounted(fetchData);
}

</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
