(function(e){function t(t){for(var n,l,i=t[0],s=t[1],c=t[2],u=0,p=[];u<i.length;u++)l=i[u],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&p.push(r[l][0]),r[l]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,l=1;l<a.length;l++){var s=a[l];0!==r[s]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={app:0},o=[];function l(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"82602832"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(e){var t=[],a=r[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=n);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=l(e);var c=new Error;o=function(t){s.onerror=s.onload=null,clearTimeout(u);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",c.name="ChunkLoadError",c.type=n,c.request=o,a[1](c)}r[e]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var d=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-app-bar",{attrs:{app:"","clipped-left":"",color:"primary",dark:"",dense:""}},[a("div",{staticClass:"d-flex align-center"}),a("v-toolbar-title",[a("v-icon",{attrs:{left:""}},[e._v(" mdi-hospital-building ")]),e._v(" "+e._s(e.appTitle))],1),a("v-spacer"),a("v-toolbar-items",{staticClass:"hidden-xs-only"},[a("v-btn",{attrs:{text:""}},[e._v(" Practitioner ")])],1)],1),a("v-main",[a("router-view")],1)],1)},o=[],l={name:"App",data:function(){return{appTitle:"Diabities App"}}},i=l,s=a("2877"),c=a("6544"),u=a.n(c),d=a("7496"),p=a("40dc"),f=a("8336"),v=a("132d"),m=a("f6c4"),b=a("2fa4"),h=a("2a7f"),x=Object(s["a"])(i,r,o,!1,null,null,null),y=x.exports;u()(x,{VApp:d["a"],VAppBar:p["a"],VBtn:f["a"],VIcon:v["a"],VMain:m["a"],VSpacer:b["a"],VToolbarItems:h["a"],VToolbarTitle:h["b"]});a("d3b7"),a("3ca3"),a("ddb0");var g=a("8c4f"),w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-layout",[a("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"","mt-6":""}},[a("v-card",[a("v-card-title",[e._v(" Patient Demographic "),a("v-spacer")],1),a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"4"}},[a("v-text-field",{attrs:{label:"Medical Record Number",outlined:"",readonly:""},model:{value:e.mrn,callback:function(t){e.mrn=t},expression:"mrn"}})],1),a("v-col",{attrs:{cols:"12",sm:"4"}},[a("v-text-field",{attrs:{label:"First Name",outlined:"",readonly:""},model:{value:e.firstName,callback:function(t){e.firstName=t},expression:"firstName"}})],1),a("v-col",{attrs:{cols:"12",sm:"4"}},[a("v-text-field",{attrs:{label:"Last Name",outlined:"",readonly:""},model:{value:e.lastName,callback:function(t){e.lastName=t},expression:"lastName"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12",sm:"4"}},[a("v-text-field",{attrs:{label:"Gender",outlined:"",readonly:""},model:{value:e.gender,callback:function(t){e.gender=t},expression:"gender"}})],1),a("v-col",{attrs:{cols:"12",sm:"4"}},[a("v-text-field",{attrs:{label:"Date Of Birth",outlined:"",readonly:""},model:{value:e.dob,callback:function(t){e.dob=t},expression:"dob"}})],1),a("v-col",{attrs:{cols:"12",sm:"4"}},[a("v-text-field",{attrs:{label:"Email",outlined:"",readonly:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1)],1)],1),a("v-card-actions")],1),a("v-subheader"),a("v-spacer")],1)],1),a("v-layout",[a("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"","mt-6":""}},[a("v-card",[a("v-card-title",[a("v-spacer")],1),a("v-container",[a("highcharts",{attrs:{options:e.chartOptions}})],1),a("v-card-actions")],1),a("v-subheader"),a("v-spacer")],1)],1)],1)},V=[],D=a("1da1"),O=(a("96cf"),a("e9c4"),a("4452")),N=a("ea7f"),P=a.n(N),_=a("4e8b"),j=a.n(_),k=a("bc3a"),C=a.n(k),T=a("b3ba"),A=a.n(T);j()(P.a);var S={name:"Home",components:{highcharts:O["Chart"]},data:function(){return{mrn:"",firstName:"",lastName:"",gender:"",dob:"",email:"",chartOptions:{xAxis:{title:{text:"Date"},type:"datetime"},yAxis:{title:{text:"Blood Glucose ( in mg/dL )"}},chart:{type:"spline"},title:{text:"Blood Glucose Chart for Diabetes Patient"},tooltip:{crosshairs:!0,shared:!0},lang:{noData:"No data available"},series:[{name:"High",data:[{x:new Date("2018-03-01"),y:109},{x:new Date("2018-04-01"),y:109}]},{name:"Actual",data:[{x:new Date("2018-03-01"),y:50},{x:new Date("2018-04-01"),y:70}]},{name:"Low",data:[{x:new Date("2018-03-01"),y:40},{x:new Date("2018-04-01"),y:40}]}]}}},created:function(){this.getPatientDetails()},methods:{getPatientDetails:function(){var e=this;return Object(D["a"])(regeneratorRuntime.mark((function t(){var a,n,r,o,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("Getting Patient details"),t.prev=1,t.next=4,C.a.get("/patientDetails");case 4:a=t.sent,n=a.data.patientDemographicDetails,r=A()("name[0].given[0]"),o=r.evaluate(n),r=A()("name[0].given[1]"),l=r.evaluate(n),e.firstName=l?o+" "+l:o,r=A()("name[0].family"),e.lastName=r.evaluate(n),r=A()("identifier.value"),e.mrn=r.evaluate(n),r=A()("gender"),e.gender=r.evaluate(n),r=A()("birthDate"),e.dob=r.evaluate(n),r=A()('telecom[system="email"].value'),e.email=r.evaluate(n),console.log(JSON.stringify(a)),t.next=27;break;case 24:t.prev=24,t.t0=t["catch"](1),console.error(t.t0);case 27:case"end":return t.stop()}}),t,null,[[1,24]])})))()}}},E=S,L=a("b0af"),M=a("99d9"),B=a("62ad"),G=a("a523"),R=a("0e8f"),F=a("a722"),H=a("0fd9"),J=a("e0c7"),$=a("8654"),I=Object(s["a"])(E,w,V,!1,null,null,null),q=I.exports;u()(I,{VCard:L["a"],VCardActions:M["a"],VCardTitle:M["b"],VCol:B["a"],VContainer:G["a"],VFlex:R["a"],VLayout:F["a"],VRow:H["a"],VSpacer:b["a"],VSubheader:J["a"],VTextField:$["a"]}),n["default"].use(g["a"]);var z=[{path:"/",name:"Home",component:q},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],K=new g["a"]({mode:"history",base:"/",routes:z}),Q=K,U=a("f309");n["default"].use(U["a"]);var W=new U["a"]({});n["default"].config.productionTip=!1,new n["default"]({router:Q,vuetify:W,render:function(e){return e(y)}}).$mount("#app")}});
//# sourceMappingURL=app.bf37bea1.js.map