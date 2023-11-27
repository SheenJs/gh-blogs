import { Component, defineAsyncComponent } from 'vue';

const BG = import.meta.glob('/static/bg/*.*');

import BAIDU from './icon/百度.png';
import FANYI from './icon/百度翻译.png';
import BILI from './icon/bilibili.png';
import CSDN from './icon/csdn.png';

const bgList: Component[] = [];
const SEARCH_ICON_LIST: { text: string; icon: string }[] = [
  { text: '百度', icon: BAIDU },
  { text: '哔哩哔哩', icon: BILI },
  { text: '百度翻译', icon: FANYI },
  { text: 'CSDN', icon: CSDN },
];

export const searchHref = [
  'https://www.baidu.com/s?ie=utf-8&word=',
  'https://search.bilibili.com/all?keyword=',
  'https://fanyi.baidu.com/translate#zh/en/',
  'https://so.csdn.net/so/search?q=',
];

Object.keys(BG).forEach((key) => {
  bgList.push(defineAsyncComponent(BG[key]));
});

export { bgList, SEARCH_ICON_LIST };
