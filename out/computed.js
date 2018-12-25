(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Computed"] = factory();
	else
		root["Computed"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Computed = __webpack_require__(/*! ../src/computed */ "./src/computed.js");

module.exports = Computed.default;

exports = module.exports;

exports.default = module.exports;


/***/ }),

/***/ "./src/computed.js":
/*!*************************!*\
  !*** ./src/computed.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(/*! ./util */ "./src/util.js");

var util = _interopRequireWildcard(_util);

var _observe = __webpack_require__(/*! ./observe */ "./src/observe.js");

var _observe2 = _interopRequireDefault(_observe);

var _watcher2 = __webpack_require__(/*! ./watcher */ "./src/watcher.js");

var _watcher3 = _interopRequireDefault(_watcher2);

var _dep = __webpack_require__(/*! ./dep */ "./src/dep.js");

var _dep2 = _interopRequireDefault(_dep);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function initData(self, opts) {
  if (util.isObject(opts) && util.isObject(opts.data)) {
    var data = self._data = opts.data;
    (0, _observe2.default)(data);
    proxy(self, data);
  }
}

function proxy(self, obj) {
  var _loop = function _loop(_prop) {
    Object.defineProperty(self, _prop, {
      configurable: true,
      enumerable: true,
      get: function get() {
        return obj[_prop];
      },
      set: function set(newVal) {
        obj[_prop] = newVal;
      }
    });
  };

  for (var _prop in obj) {
    _loop(_prop);
  }
}

function initComputed(ctx, opts, cb) {
  if (util.isObject(opts) && util.isObject(opts.computed)) {
    var _loop2 = function _loop2(_prop2) {
      if (!ctx._computedWatchers) {
        ctx._computedWatchers = {};
      }

      var watcher = ctx._computedWatchers[_prop2] = new _watcher3.default(opts.computed[_prop2].bind(ctx), cb ? cb.bind(ctx, _prop2) : undefined, true);

      function createComputedGetter() {
        if (watcher.dirty) {
          watcher.evaluate();
        }
        if (_dep2.default.target) {
          watcher.depend();
        }
        return watcher.value;
      }

      Object.defineProperty(ctx, _prop2, {
        enumerable: true,
        configurable: true,
        set: util.noop,
        get: createComputedGetter
      });
    };

    for (var _prop2 in opts.computed) {
      _loop2(_prop2);
    }
  }
}

var Computed = function () {
  function Computed(opts, cb) {
    _classCallCheck(this, Computed);

    initData(this, opts);
    initComputed(this, opts, cb);
  }

  _createClass(Computed, [{
    key: 'getComputed',
    value: function getComputed(force) {
      var obj = {};
      for (var _prop3 in this._computedWatchers) {
        var _watcher = this._computedWatchers[_prop3];
        if (force || _watcher.dirty) {
          _watcher.evaluate();
          var value = _watcher.value;
          Object.assign(obj, _defineProperty({}, _prop3, value));
        }
      }
      return obj;
    }
  }]);

  return Computed;
}();

Computed.util = util;
exports.default = Computed;

/***/ }),

/***/ "./src/dep.js":
/*!********************!*\
  !*** ./src/dep.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.pushStack = pushStack;
exports.popStack = popStack;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $$dep_count = 0;

var Dep = function () {
  function Dep() {
    _classCallCheck(this, Dep);

    this.subs = {};
    this.id = $$dep_count++;
  }

  _createClass(Dep, [{
    key: 'addSub',
    value: function addSub(watcher) {
      if (!this.subs[watcher.id]) {
        this.subs[watcher.id] = watcher;
      }
    }
  }, {
    key: 'removeSub',
    value: function removeSub(watcher) {
      if (this.subs[watcher.id]) {
        delete this.subs[watcher.id];
      }
    }
  }, {
    key: 'depend',
    value: function depend() {
      if (Dep.target) {
        Dep.target.addDep(this);
      }
    }
  }, {
    key: 'notify',
    value: function notify() {
      for (var prop in this.subs) {
        this.subs[prop].update();
      }
    }
  }]);

  return Dep;
}();

exports.default = Dep;


var targetStack = [];

function pushStack(o) {
  targetStack.push(o);
  Dep.target = o;
}

function popStack() {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}

/***/ }),

/***/ "./src/observe.js":
/*!************************!*\
  !*** ./src/observe.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(/*! ./util */ "./src/util.js");

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function observe(obj) {
  if (!util.isObject(obj)) {
    return;
  }
  var ob = void 0;
  if (util.hasOwn(obj, '__ob__') && obj.__ob__ instanceof Observer) {
    ob = obj.__ob__;
  } else {
    ob = new Observer(obj);
  }
  return ob;
}

var Observer = function () {
  function Observer(value) {
    _classCallCheck(this, Observer);

    this.value = value;
    util.def(value, '__ob__', this);
    this.walk(value);
  }

  _createClass(Observer, [{
    key: 'walk',
    value: function walk(obj) {
      var keys = Object.keys(obj);
      for (var i = 0, l = keys.length; i < l; i++) {
        util.defineReactive(obj, keys[i]);
      }
    }
  }]);

  return Observer;
}();

exports.default = observe;

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.isObject = isObject;
exports.hasOwn = hasOwn;
exports.def = def;
exports.noop = noop;
exports.defineReactive = defineReactive;

var _observe = __webpack_require__(/*! ./observe */ "./src/observe.js");

var _observe2 = _interopRequireDefault(_observe);

var _dep = __webpack_require__(/*! ./dep */ "./src/dep.js");

var _dep2 = _interopRequireDefault(_dep);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isObject(o) {
  return o && (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === 'object';
}

function hasOwn(o, k) {
  return Object.hasOwnProperty.call(o, k);
}

function def(o, k, value, enumerable) {
  Object.defineProperty(o, k, {
    configurable: true,
    writable: true,
    enumerable: !!enumerable,
    value: value
  });
}

function noop() {}

function defineReactive(obj, key, val) {
  var dep = new _dep2.default();
  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return;
  }
  var getter = property && property.get;
  var setter = property && property.set;

  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = (0, _observe2.default)(val);
  Object.defineProperty(obj, key, {
    get: function get() {
      var value = getter ? getter.call(obj) : val;

      /**
       * TODO
       * 收集依赖
       */

      if (_dep2.default.target) {
        dep.depend();
      }

      return value;
    },
    set: function set(newVal) {
      var value = getter ? getter.call(obj) : val;
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
      childOb = (0, _observe2.default)(newVal);
      /**
       * TODO
       * 触发watcher
       */
      dep.notify();
    }
  });
}

/***/ }),

/***/ "./src/watcher.js":
/*!************************!*\
  !*** ./src/watcher.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dep = __webpack_require__(/*! ./dep */ "./src/dep.js");

var _util = __webpack_require__(/*! ./util */ "./src/util.js");

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $$watcher_count = 0;

var Watcher = function () {
  function Watcher(getter, cb, callUpdateManually) {
    _classCallCheck(this, Watcher);

    this.getter = getter;
    this.cb = cb;
    this.deps = {};
    this.newDeps = {};
    this.id = $$watcher_count++;
    this.callUpdateManually = callUpdateManually;
    this.dirty = !!callUpdateManually;
    this.value = callUpdateManually ? undefined : this.get();
  }

  _createClass(Watcher, [{
    key: 'get',
    value: function get() {
      (0, _dep.pushStack)(this);
      var val = void 0;
      try {
        val = this.getter();
      } catch (err) {
        throw err;
      } finally {
        (0, _dep.popStack)();
        this.cleanupDeps();
      }
      return val;
    }
  }, {
    key: 'update',
    value: function update(force) {
      if (this.callUpdateManually) {
        this.dirty = true;
        return;
      }
      var value = this.get();
      var oldValue = this.value;
      if (force === true || value !== this.value || util.isObject(value)) {
        if (force !== false && this.cb) {
          this.cb(value, oldValue);
        }
        this.value = value;
      }
    }
  }, {
    key: 'evaluate',
    value: function evaluate() {
      this.value = this.get();
      this.dirty = false;
    }
  }, {
    key: 'forceUpdate',
    value: function forceUpdate() {
      this.update(true);
    }
  }, {
    key: 'cleanupDeps',
    value: function cleanupDeps() {
      for (var id in this.deps) {
        if (!this.newDeps[id]) {
          this.deps[id].removeSub(this);
        }
      }
      this.deps = this.newDeps;
      this.newDeps = {};
    }
  }, {
    key: 'addDep',
    value: function addDep(dep) {
      if (!this.newDeps[dep.id]) {
        this.newDeps[dep.id] = dep;
        if (!this.deps[dep.id]) {
          dep.addSub(this);
        }
      }
    }
  }, {
    key: 'depend',
    value: function depend() {
      for (var prop in this.deps) {
        this.deps[prop].depend();
      }
    }
  }]);

  return Watcher;
}();

exports.default = Watcher;

/***/ })

/******/ });
});
//# sourceMappingURL=computed.js.map