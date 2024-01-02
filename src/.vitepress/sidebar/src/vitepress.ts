import type { DefaultTheme } from 'vitepress';
import { readTextFilesInDir } from './utils';

// https://vitepress.dev/reference/default-theme-config
export default readTextFilesInDir('/blogs/vitepress', [
  '项目初始化',
  '目录解析',
  '主题配置',
  '全局api',
  'markdown指南',
  'GitHubIssues集成评论',
]);
