(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_typeof2=_interopRequireDefault(require("@babel/runtime/helpers/typeof"));loader.define(function(e,t,a,r){return bui.store({el:"#loginpage",scope:"form",data:{datas:{username:"",password:"",save:!1}},methods:{checkForm:function(e){for(var t in e)if(""===e[t])return bui.hint("".concat(t,"的内容不能为空")),!1;return!0},savePassword:function(e){this.$data.datas.save?r.storage.set("userinfo",e):r.storage.remove("userinfo")},submit:function(){var t=this;this.checkForm(this.datas)&&bui.ajax({url:r.apiurl+"json/token.json",data:this.datas}).then(function(e){bui.hint("登录成功"),t.savePassword(t.$data.datas),r.storage.set("token",e.data),bui.load({url:"pages/main/main.html"})})}},templates:{},mounted:function(){var e=r.storage.get("userinfo",0);"object"===(0,_typeof2.default)(e)&&(this.datas=e)}})});
},{"@babel/runtime/helpers/interopRequireDefault":2,"@babel/runtime/helpers/typeof":3}],2:[function(require,module,exports){
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],3:[function(require,module,exports){
function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}

module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}]},{},[1]);
