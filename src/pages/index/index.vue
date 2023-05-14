<!--
 * @Author: zhangdi 1258956799@qq.com
 * @Date: 2023-03-20 15:48:19
 * @LastEditors: zhangdi 1258956799@qq.com
 * @LastEditTime: 2023-05-14 23:17:25
 * @FilePath: /fugui-chat/src/pages/index/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <view class="content">
    <view class="text-area">
      <button class="title" @click="click">{{title}}</button>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import getGpt from '@/api/01'
import router from '@/router'


const title  = ref('点击按钮')
const getData =async () => {
  const res = await getGpt.getList()
  console.log('res.choices[0].message.content',res.choices[0].message.content)
}

const click = () =>{
  console.log('me')
  
  router.navigate('me',{id:1})
}
getData()

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
