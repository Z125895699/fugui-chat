import pages from './pages'

type PageNames = keyof typeof pages

import { readonly, DeepReadonly } from 'vue'

type ObjectType = Record<string, any>

const routeStore = {} as Record<PageNames, unknown>

export function getRouteParams<T extends PageNames>(
  page: T,
): DeepReadonly<ObjectType> {
  const p = routeStore[page] as ObjectType
  return readonly(p)
}

let navigateLock = false
function navigate<T extends PageNames>(
  page: T,
  params?: ObjectType,
): Promise<any> {
  if (navigateLock) return Promise.reject('Navigation locked')
  const eventName = (Math.floor(Math.random() * 1000) + new Date().getTime()).toString()
  navigateLock = true
  routeStore[page] = params
  uni.navigateTo({
    url: `${pages[page]}?eventName=${eventName}`,
    complete() {
      navigateLock = false
    },
  })

  return new Promise<any>((resolve, reject) => {
    uni.$once(eventName, resolve)
    uni.$once(eventName, reject)
  })
}

function redirect<T extends PageNames>(page: T, params?: ObjectType) {
  routeStore[page] = params
  uni.redirectTo({ url: pages[page] })
}

function reLaunch<T extends PageNames>(page: T, params?: ObjectType) {
  routeStore[page] = params
  uni.reLaunch({ url: pages[page] })
}

function switchTab<T extends PageNames>(page: T, params?: ObjectType) {
  routeStore[page] = params
  uni.switchTab({ url: pages[page] })
}

interface BackParams {
  delta?: number
  data?: any
}

function back({ delta, data }: BackParams = { delta: 1, data: null }) {
  const currentRoute = getCurrentPages().pop()
  const eventName = currentRoute?.options?.eventName; // 使用可选链操作符
  uni.$emit(eventName, data)
  uni.navigateBack({
    delta,
  })
}

const router = {
  navigate,
  redirect,
  reLaunch,
  switchTab,
  back,
}

export default router
