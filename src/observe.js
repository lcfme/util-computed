// @flow
import * as util from './util';

function observe(obj: any): Observer | void {
  if (!util.isObject(obj)) {
    return;
  }
  let ob;
  if (util.hasOwn(obj, '__ob__') && obj.__ob__ instanceof Observer) {
    ob = obj.__ob__;
  } else {
    ob = new Observer(obj);
  }
  return ob;
}

class Observer {
  value: Object;
  constructor(value: Object) {
    this.value = value;
    util.def(value, '__ob__', this);
    this.walk(value);
  }
  walk(obj) {
    const keys = Object.keys(obj);
    for (let i = 0, l = keys.length; i < l; i++) {
      util.defineReactive(obj, keys[i]);
    }
  }
}

export default observe;
