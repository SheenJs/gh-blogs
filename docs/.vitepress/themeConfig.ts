import type { DefaultTheme } from 'vitepress';

import nav from './nav';
import sidebar from './sidebar';
import socialLinks from './socialLinks';

// https://vitepress.dev/reference/default-theme-config
export default {
  logo: './logo.webp',
  search: {
    provider: 'local',
  },
  nav,
  sidebar,
  socialLinks,
  footer: {
    message: '',
    copyright: 'Copyright © 2023 YGHHJS',
  },
} as DefaultTheme.Config;
