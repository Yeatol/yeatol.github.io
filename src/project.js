window.__require=function r(e,t,n){function o(c,u){if(!t[c]){if(!e[c]){var p=c.split("/");if(p=p[p.length-1],!e[p]){var f="function"==typeof __require&&__require;if(!u&&f)return f(p,!0);if(i)return i(p,!0);throw new Error("Cannot find module '"+c+"'")}}var s=t[c]={exports:{}};e[c][0].call(s.exports,function(r){return o(e[c][1][r]||r)},s,s.exports,r,e,t,n)}return t[c].exports}for(var i="function"==typeof __require&&__require,c=0;c<n.length;c++)o(n[c]);return o}({"\u64ad\u653e\u5668":[function(r,e,t){"use strict";cc._RF.push(e,"987a8QaI1tMIp5VNrPcPQ1m","\u64ad\u653e\u5668"),cc.Class({extends:cc.Component,properties:{},start:function(){var r=this.getComponent(cc.VideoPlayer);r.node.on("completed",function(){r.play()},this),r.play()}}),cc._RF.pop()},{}]},{},["\u64ad\u653e\u5668"]);