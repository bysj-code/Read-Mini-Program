(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/forum-reply/forum-reply"],{"205b":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=u(t("a34a"));function u(n){return n&&n.__esModule?n:{default:n}}function a(n,e,t,r,u,a,c){try{var o=n[a](c),i=o.value}catch(f){return void t(f)}o.done?e(i):Promise.resolve(i).then(r,u)}function c(n){return function(){var e=this,t=arguments;return new Promise((function(r,u){var c=n.apply(e,t);function o(n){a(c,r,u,o,i,"next",n)}function i(n){a(c,r,u,o,i,"throw",n)}o(void 0)}))}}var o={data:function(){return{pid:"",content:"",username:"",user:{}}},onLoad:function(e){var t=this;return c(r.default.mark((function u(){var a,c;return r.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.pid=e.pid,a=n.getStorageSync("nowTable"),r.next=4,t.$api.session(a);case 4:c=r.sent,t.user=c.data,"yonghu"==a&&(t.username=t.user.zhanghao);case 7:case"end":return r.stop()}}),u)})))()},methods:{onReplyTap:function(){var n=this;return c(r.default.mark((function e(){var t,u,a,c;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(t="",u=[],t&&(u=t.split(",")),a=0;a<u.length;a++)c=new RegExp(u[a],"g"),n.content.indexOf(u[a])>-1&&(n.content=n.content.replace(c,"**"));return e.next=6,n.$api.save("forum",{parentid:n.pid,content:n.content,username:n.username});case 6:n.$utils.msgBack("回复成功");case 7:case"end":return e.stop()}}),e)})))()}}};e.default=o}).call(this,t("543d")["default"])},"313e":function(n,e,t){"use strict";t.r(e);var r=t("d5eb"),u=t("88c4");for(var a in u)"default"!==a&&function(n){t.d(e,n,(function(){return u[n]}))}(a);t("ca53");var c,o=t("f0c5"),i=Object(o["a"])(u["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],c);e["default"]=i.exports},4048:function(n,e,t){"use strict";(function(n){t("be41");r(t("66fd"));var e=r(t("313e"));function r(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},"88c4":function(n,e,t){"use strict";t.r(e);var r=t("205b"),u=t.n(r);for(var a in r)"default"!==a&&function(n){t.d(e,n,(function(){return r[n]}))}(a);e["default"]=u.a},ca53:function(n,e,t){"use strict";var r=t("dc6b"),u=t.n(r);u.a},d5eb:function(n,e,t){"use strict";var r;t.d(e,"b",(function(){return u})),t.d(e,"c",(function(){return a})),t.d(e,"a",(function(){return r}));var u=function(){var n=this,e=n.$createElement;n._self._c},a=[]},dc6b:function(n,e,t){}},[["4048","common/runtime","common/vendor"]]]);