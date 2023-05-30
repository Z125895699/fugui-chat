<!--
 * @Author: zhangdi 1258956799@qq.com
 * @Date: 2023-03-20 15:48:19
 * @LastEditors: zhangdi 1258956799@qq.com
 * @LastEditTime: 2023-05-30 20:10:19
 * @FilePath: /fugui-chat/src/pages/index/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <view :style="{width:'100vw',height:`${navBarHeight}px`,background:'green',position:'fixed',top:'0px'}">
    <view :style="{width:'100%',height:`${menuButtonInfo.height}px`,position:'fixed',top:`${menuButtonInfo.top}px`,display:'flex',alignItems:'center',justifyContent:'center'}">
      fugui_Chat
    </view>
  </view>
    
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
// import fuguiConsole from 'fugui-console';


const title  = ref('点击按钮')
const getData =async () => {
  // const res = await getGpt.getList()
  // console.log('res.choices[0].message.content',res.choices[0].message.content)
}
const navBarHeight = ref(0)

// / 获取系统信息
    const systemInfo = uni.getSystemInfoSync();
    // 胶囊按钮位置信息
    const menuButtonInfo = uni.getMenuButtonBoundingClientRect();
    console.log(menuButtonInfo,'menuButtonInfo')
    
    // 导航栏高度 = 状态栏到胶囊的间距（胶囊上坐标位置-状态栏高度） * 2 + 胶囊高度 + 状态栏高度
    navBarHeight.value = (menuButtonInfo.top - systemInfo.statusBarHeight) * 2 + menuButtonInfo.height + systemInfo.statusBarHeight;
    console.log('navBarHeight',navBarHeight.value)    
    // 状态栏和菜单按钮(标题栏)之间的间距
	// 等同于菜单按钮(标题栏)到正文之间的间距（胶囊上坐标位置-状态栏高度）
    // tmenuBottom = menuButtonInfo.top - systemInfo.statusBarHeight;
    // 菜单按钮栏(标题栏)的高度
    // this.globalData.menuHeight = menuButtonInfo.height;

const click = () =>{
  console.log('me')

  // new fuguiConsole()
  
  router.navigate('me',{id:1})
}
getData()

</script>

<style>
.content {
  height: 1000px;
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
