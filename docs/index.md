---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

title: GH BLOGS
titleTemplate: A blog site of Wu Guanghui

hero:
  name: "GH BLOGS"
  text: "A blog site of Wu Guanghui"
  tagline: The power is with you.[别太放肆,没设么用.]
  actions:
    - theme: brand
      text: GH UI
      link: /markdown-examples
    - theme: alt
      text: GH BLOGS
      link: /api-examples
  image:
    src: /logo.webp

features:
- icon: 🍀
  title: 呆萌
  details: 商品选规格,购物车...

- icon: 🍂
  title: 组件库
  details: 一个写起玩的移动端UI库
  link: /ghui/docs/简介

- icon: 🌻
  title: 博客
  details: 日常工作、学习踩坑记录
  link: /blogs/JS基础

- icon: 🌼
  title: 常用网站
  details: 常用网站传送门
  link: /module/常用网页

- icon: 🌷
  title: ReactMacOs
  details: React mac 桌面系统
  link: https://guanghuijs.gitee.io/react-mac-os-ui

- icon: 🌱
  title: 算法
  details: 我不会算法
  link: /blogs/frame/system/vue3

- icon: 🌲
  title: 励志文学
  details: 迷茫的时候看一看
  link: /blogs/frame/system/vue3

- icon: 🌴
  title: 日记
  details: 日常工作、学习踩坑记录
  link: /blogs/frame/system/vue3
---

<HomeSearch />

<script setup lang='ts'>
import HomeSearch from '/components/home/index.vue'
</script>
