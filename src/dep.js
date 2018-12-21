// @flow
import type Watcher from './watcher';

let $$dep_count = 0;

class Dep {
  static target: Watcher | void;
  subs: { [k: string | number]: Watcher };
  id: number;
  constructor() {
    this.subs = {};
    this.id = $$dep_count++;
  }
  addSub(watcher: Watcher) {
    if (!this.subs[watcher.id]) {
      this.subs[watcher.id] = watcher;
    }
  }
  removeSub(watcher: Watcher) {
    if (this.subs[watcher.id]) {
      delete this.subs[watcher.id];
    }
  }

  depend() {
    if (Dep.target) {
      Dep.target.addDep(this);
    }
  }
  notify() {
    for (const prop in this.subs) {
      this.subs[prop].update();
    }
  }
}

export default Dep;

const targetStack: Array<any> = [];

export function pushStack(o: any) {
  targetStack.push(o);
  Dep.target = o;
  console.log('pushStack: ', targetStack);
}

export function popStack() {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
  console.log('popStack: ', targetStack);
}
