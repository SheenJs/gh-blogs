import { DefaultTheme } from 'vitepress';
import ghui from './ghui';
import css from './css';
import vitepress from './vitepress';

export default {
  '/ghui/': ghui,
  '/css/': css,
  '/vitepress/': vitepress,
} as DefaultTheme.Sidebar;
