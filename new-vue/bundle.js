(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _strings = require('./utils/strings');

var strings = _interopRequireWildcard(_strings);

var _utility = require('./utils/utility');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

console.log((0, _utility.getQueryArgByName)(type), JSON.stringify(strings));

// a= => return 1+1
// cosnole.log(a)

new Vue({
  el: 'body',
  data: function data() {
    return {
      currentView: 'home'
    };
  },
  components: {
    home: require('./components/home')
  }
});
// window.onBridgeReady( =>{

// })

},{"./components/home":2,"./utils/strings":3,"./utils/utility":4}],2:[function(require,module,exports){
var __vue_template__ = "<div class=\"wraper\">\n  <h1>home vue</h1>\n</div>";
;(typeof module.exports === "function"? module.exports.options: module.exports).template = __vue_template__;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// permissionTypes 控制底部btn的显示及跳转
//
var TJPermissionBehaviorType = {
  title: '太极线',
  content: '',
  permissionTypes: {
    0: HasPermission,
    1: ForThirdPartyNoPhone,
    2: AfterTrial,
    3: ForGuest,
    4: AfterTrialTT,
    5: AfterDeposit,
    '-1': EMPTY
  }
};

var QKPermissionBehaviorType = {
  title: '乾坤线',
  content: '',
  permissionTypes: {
    0: 'HasPermission',
    1: 'NoPermission',
    2: 'NoPhone',
    '-1': 'EMPTY'
  }
};

var QKTPermissionBehaviorType = {
  title: '乾坤图',
  content: '',
  permissionTypes: {
    0: 'HasPermission',
    1: 'NoPermission',
    '-1': 'EMPTY'
  }
};

var GameMatrixPermissionBehaviorType = {
  title: '博弈矩阵',
  content: '',
  permissionTypes: {
    0: 'HasPermission',
    1: 'ForGuest',
    2: 'ForUser',
    '-1': 'EMPTY'
  }
};

exports.TJPermissionBehaviorType = TJPermissionBehaviorType;
exports.QKPermissionBehaviorType = QKPermissionBehaviorType;
exports.QKTPermissionBehaviorType = QKTPermissionBehaviorType;
exports.GameMatrixPermissionBehaviorType = GameMatrixPermissionBehaviorType;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getQueryArgByName = getQueryArgByName;
function getQueryArgByName(name) {
  var regex, results;
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  results = regex.exec(location.search);
  if (results) {
    return decodeURIComponent(results[1].replace(/\+/g, " "));
  } else {
    return null;
  }
};

},{}]},{},[1]);
