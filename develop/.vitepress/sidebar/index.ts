import { DefaultTheme } from 'vitepress';
import ghui from './ghui';
import css from './css';
import vitepress from './vitepress';
import JavaScript from './JavaScript';

export default {
  '/ghui/': ghui,
  '/css/': css,
  '/vitepress/': vitepress,
  '/js/': JavaScript,
} as DefaultTheme.Sidebar;
