(function(t){function e(e){for(var i,r,c=e[0],l=e[1],o=e[2],f=0,_=[];f<c.length;f++)r=c[f],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&_.push(a[r][0]),a[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(_.length)_.shift()();return s.push.apply(s,o||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,c=1;c<n.length;c++){var l=n[c];0!==a[l]&&(i=!1)}i&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},a={index:0},s=[];function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var o=0;o<c.length;o++)e(c[o]);var u=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1031:function(t,e,n){},1158:function(t,e,n){},"30c4":function(t,e,n){},"4dc5":function(t,e,n){"use strict";var i=n("1158"),a=n.n(i);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("main",{staticClass:"container"},[n("Top"),n("About"),n("Characters"),n("Members"),n("Activities"),n("Links")],1),n("Footer")],1)},s=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[t._m(0),n("nav",[n("div",{ref:"menu",staticClass:"menu"},[n("ul",[n("li",[n("a",{staticClass:"text_sub",attrs:{href:"#about"},on:{click:t.toggleMenu}},[t._v("About")])]),n("li",[n("a",{staticClass:"text_sub",attrs:{href:"#characters"},on:{click:t.toggleMenu}},[t._v("Character")])]),n("li",[n("a",{staticClass:"text_sub",attrs:{href:"#members"},on:{click:t.toggleMenu}},[t._v("Member")])]),n("li",[n("a",{staticClass:"text_sub",attrs:{href:"#activities"},on:{click:t.toggleMenu}},[t._v("Activities")])]),n("li",[n("a",{staticClass:"text_sub",attrs:{href:"#links"},on:{click:t.toggleMenu}},[t._v("Link")])])])]),n("div",{ref:"hamburgerIcon",staticClass:"hamburger-icon",on:{click:t.toggleMenu}},[n("span"),n("span"),n("span")])])])},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"project_name"},[n("h1",{staticClass:"text_sub"},[t._v("藤原プロジェクト2020")])])}],l={methods:{toggleMenu:function(){window.innerWidth>979||(this.$refs.menu.classList.toggle("hamburger-open"),this.$refs.hamburgerIcon.classList.toggle("close"))}}},o=l,u=(n("a885"),n("2877")),f=Object(u["a"])(o,r,c,!1,null,"5f3a3912",null),_=f.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"top"})},h=[],p={name:"Top"},m=p,d=Object(u["a"])(m,v,h,!1,null,"d45c0814",null),b=d.exports,g=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about",attrs:{id:"about"}},[n("h2",{staticClass:"heading_main"},[n("span",{staticClass:"heading__main-text"},[t._v("About")])])])}],y={},x=y,j=Object(u["a"])(x,g,C,!1,null,"9ac2d2c6",null),O=j.exports,$=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},E=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"characters",attrs:{id:"characters"}},[n("h2",{staticClass:"heading_main"},[n("span",{staticClass:"heading__main-text"},[t._v("Character")])])])}],k={},M=k,w=Object(u["a"])(M,$,E,!1,null,"45429138",null),A=w.exports,P=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},L=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"members",attrs:{id:"members"}},[n("h2",{staticClass:"heading_main"},[n("span",{staticClass:"heading__main-text"},[t._v("Members")])])])}],T={},S=T,H=Object(u["a"])(S,P,L,!1,null,"da485176",null),F=H.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"activities",attrs:{id:"activities"}},[t._m(0),n("div",{staticClass:"activities__timeline"},t._l(t.convertedActivities,(function(e,i){return n("div",{key:"time-"+i,staticClass:"activities__activity",class:t.activityClass(e.type,i)},[n("div",{staticClass:"activities__time",class:"activities__time_"+e.type},[t._v(t._s(e.time))]),n("div",{staticClass:"activities__activity-content",class:t.activityContentClass(e.type),domProps:{innerHTML:t._s(e.content)}})])})),0)])},J=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"heading_main"},[n("span",{staticClass:"heading__main-text"},[t._v("Activities")])])}],R=(n("4160"),n("a15b"),n("159b"),[{year:"2020",activities:[{month:"01",content:"プロジェクトとしての活動を開始。"},{month:"04",content:"授業として正式にプロジェクトを開始。"}]}]),W={data:function(){return{activities:R}},computed:{convertedActivities:function(){var t=[];return this.activities.forEach((function(e){t.push({time:e.year,content:"",type:"year"}),e.activities.forEach((function(e){t.push({time:e.month,content:e.content,type:"month"})}))})),t}},methods:{activityClass:function(t,e){var n=[];return"year"===t&&n.push("activities__activity_year"),0===e&&n.push("activities__activity_first"),n.join(" ")},activityContentClass:function(t){if("year"===t)return"activities__activity-content_none"}}},q=W,z=(n("4dc5"),Object(u["a"])(q,I,J,!1,null,"a7b9ccfe",null)),B=z.exports,D=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},G=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"links",attrs:{id:"links"}},[n("h2",{staticClass:"heading_main"},[n("span",{staticClass:"heading__main-text"},[t._v("Link")])])])}],K={},N=K,Q=Object(u["a"])(N,D,G,!1,null,"7d270f40",null),U=Q.exports,V=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},X=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("hr"),n("p",[t._v("©2020 藤原プロジェクト All Rights Reserved")])])}],Y=(n("f2b7"),{}),Z=Object(u["a"])(Y,V,X,!1,null,"1624f366",null),tt=Z.exports,et={components:{Header:_,Top:b,About:O,Characters:A,Members:F,Activities:B,Links:U,Footer:tt}},nt=et,it=(n("5c0b"),Object(u["a"])(nt,a,s,!1,null,null,null)),at=it.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(at)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var i=n("9c0c"),a=n.n(i);a.a},"9c0c":function(t,e,n){},a885:function(t,e,n){"use strict";var i=n("30c4"),a=n.n(i);a.a},f2b7:function(t,e,n){"use strict";var i=n("1031"),a=n.n(i);a.a}});
//# sourceMappingURL=index.10e2d9d9.js.map