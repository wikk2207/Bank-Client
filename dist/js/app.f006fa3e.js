(function(t){function e(e){for(var r,i,l=e[0],p=e[1],c=e[2],u=0,f=[];u<l.length;u++)i=l[u],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in p)Object.prototype.hasOwnProperty.call(p,r)&&(t[r]=p[r]);s&&s(e);while(f.length)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,l=1;l<n.length;l++){var p=n[l];0!==a[p]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],p=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var s=p;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-content",[n("LoginPage")],1)],1)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"inspire"}},[n("v-content",[n("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[n("v-card",{staticClass:"elevation-12"},[n("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[n("v-toolbar-title",[t._v("Login form")]),n("v-spacer"),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({attrs:{href:t.source,icon:"",large:"",target:"_blank"}},r),[n("v-icon",[t._v("mdi-code-tags")])],1)]}}])},[n("span",[t._v("Source")])]),n("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({attrs:{icon:"",large:"",href:"https://codepen.io/johnjleider/pen/pMvGQO",target:"_blank"}},r),[n("v-icon",[t._v("mdi-codepen")])],1)]}}])},[n("span",[t._v("Codepen")])])],1),n("v-card-text",[n("v-form",[n("v-text-field",{attrs:{label:"Login",name:"login","prepend-icon":"person",type:"text"}}),n("v-text-field",{attrs:{id:"password",label:"Password",name:"password","prepend-icon":"lock",type:"password"}})],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"primary"}},[t._v("Login")])],1)],1)],1)],1)],1)],1)],1)},l=[],p={name:"LoginPage"},c=p,s=n("2877"),u=n("6544"),f=n.n(u),d=n("7496"),v=n("8336"),b=n("b0af"),g=n("99d9"),h=n("62ad"),m=n("a523"),y=n("a75b"),_=n("4bd4"),w=n("132d"),V=n("0fd9"),j=n("2fa4"),x=n("8654"),O=n("71d9"),P=n("2a7f"),C=n("3a2f"),k=Object(s["a"])(c,i,l,!1,null,null,null),S=k.exports;f()(k,{VApp:d["a"],VBtn:v["a"],VCard:b["a"],VCardActions:g["a"],VCardText:g["b"],VCol:h["a"],VContainer:m["a"],VContent:y["a"],VForm:_["a"],VIcon:w["a"],VRow:V["a"],VSpacer:j["a"],VTextField:x["a"],VToolbar:O["a"],VToolbarTitle:P["a"],VTooltip:C["a"]});var T={name:"App",components:{LoginPage:S},data:()=>({})},A=T,L=Object(s["a"])(A,a,o,!1,null,null,null),M=L.exports;f()(L,{VApp:d["a"],VContent:y["a"]});var E=n("8c4f"),F=n("f309");r["a"].use(F["a"]);var J=new F["a"]({});r["a"].config.productionTip=!1,r["a"].use(E["a"]),new r["a"]({el:"#app",vuetify:J,components:{App:M},template:"<App/>"})}});
//# sourceMappingURL=app.f006fa3e.js.map