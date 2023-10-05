// @ts-ignore
import { init, EChartsOption, DatasetOption } from 'echarts';
import { useResizeObserver, useDebounceFn } from '@vueuse/core';

export function useECharts(el: HTMLElement, options: EChartsOption) {
  let chart: any;
  chart = init(el);
  chart.setOption(options);
  useResizeObserver(
    el,
    useDebounceFn(() => {
      chart.resize();
    }, 50)
  );

  const setData = (dataset: DatasetOption | DatasetOption[]) => {
    // @ts-ignore
    chart.setOption(Object.assign(options, { dataset }));
  };

  return [chart, { setData }];
}
