// @flow

import type Dep from './dep';
import { pushStack, popStack } from './dep';
import * as util from './util';

let $$watcher_count = 0;

class Watcher {
  getter: () => any;
  cb: ((a?: any, b?: any) => void) | void;
  deps: { [k: string | number]: Dep };
  newDeps: { [k: string | number]: Dep };
  value: any;
  id: number;
  callUpdateManually: boolean | void;
  dirty: boolean = false;
  constructor(
    getter: Function,
    cb?: (a?: any, b?: any) => any,
    callUpdateManually?: boolean
  ) {
    this.getter = getter;
    this.cb = (a, b) => {
      if (cb) {
        cb(a, b);
      }
      this.dirty = false;
    };
    this.deps = {};
    this.newDeps = {};
    this.id = $$watcher_count++;
    this.callUpdateManually = callUpdateManually;
    this.value = this.get();
  }
  get() {
    pushStack(this);
    let val;
    try {
      val = this.getter();
    } catch (err) {
      throw err;
    } finally {
      popStack();
      this.cleanupDeps();
    }
    return val;
  }
  update(force?: boolean) {
    const value = this.get();
    const oldValue = this.value;
    if (force === true || value !== this.value || util.isObject(value)) {
      this.dirty = true;
      if (
        (force === true || (!this.callUpdateManually && force !== false)) &&
        this.cb
      ) {
        this.cb(value, oldValue);
      }
      this.value = value;
    }
  }
  forceUpdate() {
    this.update(true);
  }
  cleanupDeps() {
    for (const id in this.deps) {
      if (!this.newDeps[id]) {
        this.deps[id].removeSub(this);
      }
    }
    this.deps = this.newDeps;
    this.newDeps = {};
  }
  addDep(dep: Dep) {
    if (!this.newDeps[dep.id]) {
      this.newDeps[dep.id] = dep;
      if (!this.deps[dep.id]) {
        dep.addSub(this);
      }
    }
  }
  depend() {
    for (const prop in this.deps) {
      this.deps[prop].depend();
    }
  }
}

export default Watcher;
