// @flow

import * as util from './util';
import observe from './observe';
import Watcher from './watcher';
import Dep from './dep';

function initData(self: Computed, opts: any) {
  if (util.isObject(opts) && util.isObject(opts.data)) {
    var data = (self._data = opts.data);
    observe(data);
    proxy(self, data);
  }
}

function proxy(self: Computed, obj: Object) {
  for (const prop in obj) {
    Object.defineProperty(self, prop, {
      configurable: true,
      enumerable: true,
      get() {
        return obj[prop];
      },
      set(newVal: any) {
        obj[prop] = newVal;
      }
    });
  }
}

function initComputed(
  ctx: Computed,
  opts: Object,
  cb?: (prop?: string, newVal?: any, oldVal?: any) => any
) {
  if (util.isObject(opts) && util.isObject(opts.computed)) {
    for (let prop in opts.computed) {
      if (!ctx._computedWatchers) {
        ctx._computedWatchers = {};
      }

      const watcher = (((ctx._computedWatchers: any): Object)[
        prop
      ] = new Watcher(
        opts.computed[prop].bind(ctx),
        cb ? cb.bind(ctx, prop) : undefined,
        true
      ));

      function createComputedGetter() {
        if (watcher.dirty) {
          watcher.evaluate();
        }
        if (Dep.target) {
          watcher.depend();
        }
        return watcher.value;
      }

      Object.defineProperty(ctx, prop, {
        enumerable: true,
        configurable: true,
        set: util.noop,
        get: createComputedGetter
      });
    }
  }
}

class Computed {
  static util = util;
  _computedWatchers: { [k: string | number]: Watcher } | void;
  _data: { [k: string | number]: any } | void;
  constructor(opts: any, cb?: Function) {
    initData(this, opts);
    initComputed(this, opts, cb);
  }
  getComputed(force?: boolean) {
    var obj = {};
    for (const prop in this._computedWatchers) {
      const watcher = this._computedWatchers[prop];
      if (force || watcher.dirty) {
        watcher.evaluate();
        const value = watcher.value;
        Object.assign(obj, {
          [prop]: value
        });
      }
    }
    return obj;
  }
}

export default Computed;
