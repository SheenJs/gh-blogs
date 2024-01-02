import fs from 'node:fs';
import path from 'node:path';

import { DefaultTheme } from 'vitepress';
type SidebarItem = DefaultTheme.SidebarItem;

export function readTextFilesInDir(dirPath, constants: string[]): SidebarItem[] {
  const result: SidebarItem[] = [];
  const files = fs.readdirSync(path.resolve('', 'src' + dirPath));
  for (const file of files) {
    result.push({
      text: file.split('.')[0],
      link: `${dirPath}/${file}`,
      order: constants.indexOf(file.split('.')[0]),
    });
  }
  result.sort((a, b) => a.order - b.order);
  return result;
}
