// @flow

import * as util from './util';
import observe from './observe';
import Watcher from './watcher';
import Dep from './dep';

function initData(opts: any) {
  if (util.isObject(opts) && util.isObject(opts.data)) {
    for (const prop in opts.data) {
      observe(opts.data);
    }
  }
}

function initComputed(
  ctx: Computed,
  opts: Object,
  cb?: (prop?: string, newVal?: any, oldVal?: any) => any
) {
  if (util.isObject(opts) && util.isObject(opts.computed)) {
    for (let prop in opts.computed) {
      if (!util.isObject(opts.data)) {
        opts.data = {};
      }
      if (!ctx._computedWatchers) {
        ctx._computedWatchers = {};
      }

      const watcher = (((ctx._computedWatchers: any): Object)[
        prop
      ] = new Watcher(
        opts.computed[prop].bind(opts),
        cb ? cb.bind(opts, prop) : undefined,
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

      Object.defineProperty(opts.data, prop, {
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
  constructor(opts: any, cb?: Function) {
    initData(opts);
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
