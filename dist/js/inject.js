!function t(e,n,a){function r(o,u){if(!n[o]){if(!e[o]){var i="function"==typeof require&&require;if(!u&&i)return i(o,!0);if(s)return s(o,!0);var d=new Error("Cannot find module '"+o+"'");throw d.code="MODULE_NOT_FOUND",d}var c=n[o]={exports:{}};e[o][0].call(c.exports,function(t){var n=e[o][1][t];return r(n?n:t)},c,c.exports,t,e,n,a)}return n[o].exports}for(var s="function"==typeof require&&require,o=0;o<a.length;o++)r(a[o]);return r}({1:[function(t,e,n){"use strict";var a="appCache",r=function(){return{date:{updatedAt:new Date,uid:s()},tabs:0}},s=function(){return(new Date).getFullYear().toString()+(new Date).getMonth().toString()+(new Date).getDate().toString()},o=function(t){var e=new Promise(function(e,n){chrome.storage.local.get(t,function(t){e(t)})});return e},u=function(){document.getElementsByClassName("app")[0].style.opacity=0,document.getElementsByClassName("offline")[0].style.opacity=1};document.addEventListener("DOMContentLoaded",function(){navigator.onLine?o(a).then(function(t){var e={days:[],aggregate:{}};e.days.push(new r),e.days.push(new r),e.days.push(new r),e.days.push(new r),e.days.push(new r),e.days.push(new r),e.days.push(new r),e.days[0].tabs++,e.days[0].tabs++,e.days[1].tabs++,e.days[2].tabs++,e.days[3].tabs++,e.days[4].tabs++,e.days[5].tabs++,e.days[6].tabs++,console.log(e)}):u()})},{}]},{},[1]);
//# sourceMappingURL=inject.js.map
