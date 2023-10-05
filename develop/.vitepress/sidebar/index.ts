import { DefaultTheme } from 'vitepress';
import ghui from './ghui';
import css from './css';
import vitepress from './vitepress';
import JavaScript from './JavaScript';

export default {
  '/ghui/': ghui,
  '/blogs/css/': css,
  '/blogs/vitepress/': vitepress,
  '/blogs/js/': JavaScript,
} as DefaultTheme.Sidebar;
