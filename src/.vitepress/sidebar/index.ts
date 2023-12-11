import { DefaultTheme } from 'vitepress';
import ghui from './ghui';
import css from './css';
import vitepress from './vitepress';
import JavaScript from './JavaScript';
import vue from './vue';
import miniprogram from './miniprogram';

export default {
  '/ghui/': ghui,
  '/blogs/css/': css,
  '/blogs/vitepress/': vitepress,
  '/blogs/js/': JavaScript,
  '/blogs/vue/': vue,
  '/blogs/miniprogram/': miniprogram,
} as DefaultTheme.Sidebar;
