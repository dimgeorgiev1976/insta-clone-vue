(function(t){function a(a){for(var s,n,o=a[0],c=a[1],l=a[2],d=0,m=[];d<o.length;d++)n=o[d],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&m.push(r[n][0]),r[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(a);while(m.length)m.shift()();return i.push.apply(i,l||[]),e()}function e(){for(var t,a=0;a<i.length;a++){for(var e=i[a],s=!0,o=1;o<e.length;o++){var c=e[o];0!==r[c]&&(s=!1)}s&&(i.splice(a--,1),t=n(n.s=e[0]))}return t}var s={},r={app:0},i=[];function n(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=t,n.c=s,n.d=function(t,a,e){n.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,a){if(1&a&&(t=n(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)n.d(e,s,function(a){return t[a]}.bind(null,s));return e},n.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(a,"a",a),a},n.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},n.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=a,o=o.slice();for(var l=0;l<o.length;l++)a(o[l]);var u=c;i.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[t._m(0),e("div",{staticClass:"container"},t._l(t.posts,(function(t){return e("post",{key:t.id,attrs:{data:t}})})),1)])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"header"},[e("div",{staticClass:"container"},[e("div",{staticClass:"header__row"},[e("a",{staticClass:"header__logo",attrs:{href:"index.html"}},[e("i",{staticClass:"fab fa-dev"})]),e("div",{staticClass:"header__search"},[e("div",{staticClass:"search"},[e("input",{attrs:{type:"text",placeholder:"Поиск"}}),e("div",{staticClass:"search__cancel search__cancel--active"},[e("i",{staticClass:"fas fa-times-circle"})])])]),e("div",{staticClass:"header__links"},[e("a",{staticClass:"header__link",attrs:{href:"#"}},[e("i",{staticClass:"fas fa-user"})]),e("a",{staticClass:"header__link",attrs:{href:"#"}},[e("i",{staticClass:"fas fa-paper-plane"})])])])])])}],n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"post"},[e("div",{staticClass:"post__header"},[e("div",{staticClass:"post__user"},[e("div",{staticClass:"user"},[e("a",{staticClass:"user__avatar",attrs:{href:"#"}},[e("img",{attrs:{src:t.data.user.ava,alt:""}})]),e("a",{staticClass:"user__name",attrs:{href:"#"}},[t._v(t._s(t.data.user.name)+" "+t._s(t.data.user.surname))])])]),t._m(0)]),e("div",{staticClass:"post__img"},[e("img",{attrs:{src:t.data.src,alt:"Photo"}})]),e("div",{staticClass:"post__data"},[e("div",{staticClass:"post__description"},[t._v(" "+t._s(t.data.description)+" ")]),e("div",{staticClass:"post__hashtags"},[t._l(t.data.tags,(function(a){return[e("a",{key:a,attrs:{href:"#"}},[t._v("#"+t._s(a))])]}))],2)]),e("div",{staticClass:"post__comments"},t._l(t.data.comments,(function(t){return e("Comment",{key:t.id,attrs:{data:t}})})),1),t._m(1)])},o=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"post__links"},[e("a",{staticClass:"edit-link",attrs:{href:"#"}},[e("i",{staticClass:"far fa-trash-alt"}),t._v(" Delete ")]),e("a",{staticClass:"edit-link",attrs:{href:"edit.html"}},[e("i",{staticClass:"fas fa-pencil-alt"}),t._v(" Edit ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"post__comment-form"},[e("div",{staticClass:"comment-form"},[e("textarea",{staticClass:"comment-form__textarea",attrs:{placeholder:"Добавить комментарий"}}),e("button",{staticClass:"comment-form__button",attrs:{disabled:""}},[t._v("Опубликовать")])])])}],c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"post-comment"},[e("a",{staticClass:"post-comment__avatar",attrs:{href:"#"}},[e("img",{attrs:{src:t.data.user.ava,alt:""}})]),e("div",{staticClass:"post-comment__text"},[e("a",{staticClass:"post-comment__name",attrs:{href:"#"}},[t._v(t._s(t.data.user.name)+" "+t._s(t.data.user.surname))]),t._v(" "+t._s(t.data.content)+" ")])])},l=[],u={props:["data"]},d=u,m=e("2877"),p=Object(m["a"])(d,c,l,!1,null,null,null),f=p.exports,_={props:["data"],components:{Comment:f}},v=_,h=Object(m["a"])(v,n,o,!1,null,null,null),g=h.exports,C=e("bc9d"),b={name:"app",components:{Post:g},data:function(){return{posts:C.posts}}},y=b,x=Object(m["a"])(y,r,i,!1,null,null,null),j=x.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(j)}}).$mount("#app")},bc9d:function(t){t.exports=JSON.parse('{"posts":[{"id":1,"src":"img/posts/man-in-forest.jpg","description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus fugiat, aliquam! In fugit id sint, nam repellendus possimus sit itaque aspernatur modi facere earum mollitia veritatis officia quo iste nisi.","tags":["forest","travel","journey","holiday"],"user":{"ava":"img/avatars/01.png","name":"Алексей ","surname":" Данчин"},"comments":[{"id":1,"content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque odio eaque autem, incidunt sit non a error harum atque magni, dolor necessitatibus cum! In eum earum nam, ipsam dolorem.","user":{"ava":"img/avatars/01.png","name":"Alexander ","surname":" Alexandrov"}}]},{"id":2,"src":"img/posts/girl-pc.jpg","description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus fugiat, aliquam! In fugit id sint, nam repellendus possimus sit itaque aspernatur modi facere earum mollitia veritatis officia quo iste nisi.","tags":["forest","travel","journey","holiday"],"user":{"ava":"img/avatars/01.png","name":"Алексей ","surname":" Данчин"},"comments":[{"id":2,"content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque odio eaque autem, incidunt sit non a error harum atque magni, dolor necessitatibus cum! In eum earum nam, ipsam dolorem.","user":{"ava":"img/avatars/01.png","name":"Alexander ","surname":" Alexandrov"}}]}]}')}});
//# sourceMappingURL=app.4d2fed65.js.map