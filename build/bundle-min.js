!function(e){function t(r){if(n[r])return n[r].exports;var u=n[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,t),u.l=!0,u.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function t(){return e.default}:function t(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("redux")},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var u=n(4),a=r(u),o=n(5),l=r(o),c=n(14),i=r(c),d=(0,a.default)();d.use(a.default.static("public")),d.get("*",function(e,t){var n=(0,i.default)();t.send((0,l.default)(e,n))}),d.listen(3e3,function(){console.log("listening on port 3000")})},function(e,t){e.exports=require("express")},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(0),a=r(u),o=n(6),l=n(1),c=n(7),i=n(8),d=r(i);t.default=function(e,t){var n=(0,o.renderToString)(a.default.createElement(c.Provider,{store:t},a.default.createElement(l.StaticRouter,{location:e.path,context:{}},a.default.createElement(d.default,null))));return'\n  <!doctype html>\n  <html lang="en-US">\n  <head>\n   <meta charset="UTF-8">\n   <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">\n   <meta name="HandheldFriendly" content="true">\n   <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n   <meta name="description" content="" />\n   <meta name="keywords" content="" />\n   \n   <link rel="stylesheet" href="assets/css/core.css" />\n   <title>afro '+e.path+'</title>\n  </head>\n  <body>\n  \n  <div id="root">'+n+'</div>\n      \n  <script src="assets/js/bundle.js"></script>\n  </body>\n  </html>\n  '}},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("react-redux")},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(0),a=r(u),o=n(1),l=n(9),c=r(l),i=n(10),d=r(i),s=n(11),f=r(s),p=n(12),m=r(p),v=n(13),_=r(v);t.default=function(){return a.default.createElement("div",null,a.default.createElement(o.Route,{exact:!0,path:"/",component:c.default}),a.default.createElement(o.Route,{path:"/about",component:d.default}),a.default.createElement(o.Route,{path:"/process",component:f.default}),a.default.createElement(o.Route,{path:"/portfolio",component:m.default}),a.default.createElement(o.Route,{path:"/contact",component:_.default}))}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(0),a=r(u),o=function e(){return a.default.createElement("div",{className:"Home-area"},a.default.createElement("h1",null," Home Component JS"),a.default.createElement("div",{className:"logo"},a.default.createElement("img",{src:"assets/img/afrodesiamedia.svg"}),a.default.createElement("span",{className:"name"},"afrodesia"),a.default.createElement("span",{className:"gray"},"media")))};t.default=o},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(0),a=r(u),o=function e(){return a.default.createElement("div",null,a.default.createElement("h1",null," About Component"))};t.default=o},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(0),a=r(u),o=function e(){return a.default.createElement("div",null,a.default.createElement("h1",null," Process Component"))};t.default=o},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(0),a=r(u),o=function e(){return a.default.createElement("div",null,a.default.createElement("h1",null," Portfolio Component"))};t.default=o},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(0),a=r(u),o=function e(){return a.default.createElement("div",null,a.default.createElement("h1",null," Contact Component"))};t.default=o},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(2),a=n(15),o=r(a),l=n(16),c=r(l);t.default=function(){return(0,u.createStore)(c.default,{},(0,u.applyMiddleware)(o.default))}},function(e,t){e.exports=require("redux-thunk")},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(2),a=n(17),o=r(a);t.default=(0,u.combineReducers)({users:o.default})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(18);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(t.type){case r.FETCH_USERS:return t.payload.data;default:return e}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function u(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(u,a){try{var o=t[u](a),l=o.value}catch(e){return void n(e)}if(!o.done)return Promise.resolve(l).then(function(e){r("next",e)},function(e){r("throw",e)});e(l)}return r("next")})}}Object.defineProperty(t,"__esModule",{value:!0}),t.fetchUsers=t.FETCH_USERS=void 0;var a=n(19),o=r(a),l=t.FETCH_USERS="fetch_users",c=t.fetchUsers=function e(){return function(){var e=u(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function e(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o.default.get("https://react-ssr-api.herokuapp.com/users");case 2:n=r.sent,t({type:l,payload:n});case 4:case"end":return r.stop()}},e,void 0)}));return function(t){return e.apply(this,arguments)}}()}},function(e,t){e.exports=require("axios")}]);