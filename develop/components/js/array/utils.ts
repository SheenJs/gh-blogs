// js方法重载
export function createOverload() {
  const callMap = new Map();
  // 调用
  function overload(...args) {
    const key = args.map((arg) => typeof arg).join(',');
    const fn = callMap.get(key);
    if (fn) {
      return fn.apply(this, args);
    } else {
      new Error('no matching function');
    }
  }
  // 添加实现
  overload.addImpl = function (...args) {
    const fn = args.pop();
    if (typeof fn !== 'function') {
      return;
    }
    const types = args;
    callMap.set(types.join(','), fn);
  };
  return overload;
}

export function getScrollOffset() {
  // 兼容ie低版本
  if (window.pageYOffset) {
    return {
      x: window.pageXOffset,
      y: window.pageYOffset,
    };
  } else {
    return {
      x: document.body.scrollLeft + document.documentElement.scrollLeft,
      y: document.body.scrollTop + document.documentElement.scrollTop,
    };
  }
}

export function getViewportOffset() {
  if (window.innerHeight) {
    return {
      x: window.innerWidth,
      y: window.innerHeight,
    };
    // 兼容ie 低版本
  } else {
    // 怪异模式
    if (document.compatMode === 'BackCompat') {
      return {
        w: document.body.clientWidth,
        h: document.body.clientHeight,
      };
    } else {
      return {
        w: document.documentElement.clientWidth,
        h: document.documentElement.clientHeight,
      };
    }
  }
}
