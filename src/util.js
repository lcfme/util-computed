// @flow

import observe from './observe';
import Dep from './dep';

export function isObject(o: any): boolean {
  return o && typeof o === 'object';
}

export function hasOwn(o: Object, k: string | number) {
  return Object.hasOwnProperty.call(o, k);
}

export function def(
  o: Object,
  k: string | number,
  value: any,
  enumerable?: any
) {
  Object.defineProperty(o, k, {
    configurable: true,
    writable: true,
    enumerable: !!enumerable,
    value
  });
}

export function noop() {}

export function defineReactive(obj: Object, key: string | number, val?: any) {
  const dep = new Dep();
  const property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return;
  }
  const getter = property && property.get;
  const setter = property && property.set;

  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  let childOb = observe(val);
  Object.defineProperty(obj, key, {
    get() {
      const value = getter ? getter.call(obj) : val;

      /**
       * TODO
       * 收集依赖
       */

      if (Dep.target) {
        dep.depend();
      }

      return value;
    },
    set(newVal: any) {
      const value = getter ? getter.call(obj) : val;
      if (newVal === value) {
        return;
      }
      if (getter && !setter) {
        return;
      } else if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = observe(newVal);
      /**
       * TODO
       * 触发watcher
       */
      dep.notify();
    }
  });
}
