import * as echarts from 'echarts';
import { useResizeObserver, useDebounceFn } from '@vueuse/core';
// @ts-ignore
import china from './china.json';
echarts.registerMap('china', china);

export function useECharts(el: HTMLElement, options: echarts.EChartsOption) {
  let chart: any;
  chart = echarts.init(el);
  chart.setOption(options);
  useResizeObserver(
    el,
    useDebounceFn(() => {
      chart.resize();
    }, 50)
  );

  const setData = (dataset: echarts.DatasetOption | echarts.DatasetOption[]) => {
    // @ts-ignore
    chart.setOption(Object.assign(options, { dataset }));
  };

  return [chart, { setData }];
}
