(this["webpackJsonpbooths-market"]=this["webpackJsonpbooths-market"]||[]).push([[6],{46:function(e,t,s){"use strict";s.d(t,"b",(function(){return n})),s.d(t,"a",(function(){return i}));s(47);var c=s(0),n="wide",i="wide-fill";t.c=function(e){var t=e.name,s=e.onClick,n=e.isActive,i=void 0===n||n,a=e.type;return Object(c.jsx)(c.Fragment,{children:i&&Object(c.jsx)("button",{className:"button".concat(" button--".concat(a)),onClick:s,children:t})})}},47:function(e,t,s){},52:function(e,t,s){"use strict";s.d(t,"a",(function(){return i}));var c=s(4),n=["\u042f\u043d\u0432\u0430\u0440\u044f","\u0424\u0435\u0432\u0440\u0430\u043b\u044f","\u041c\u0430\u0440\u0442\u0430","\u0410\u043f\u0440\u0435\u043b\u044f","\u041c\u0430\u044f","\u0418\u044e\u043d\u044f","\u0418\u044e\u043b\u044f","\u0410\u0432\u0433\u0443\u0441\u0442\u0430","\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044f","\u041e\u043a\u0442\u044f\u0431\u0440\u044f","\u041d\u043e\u044f\u0431\u0440\u044f","\u0414\u0435\u043a\u0430\u0431\u0440\u044f"],i=function(e){var t=e.split("-"),s=Object(c.a)(t,3),i=s[0],a=s[1],r=s[2];return"".concat(r," ").concat(n[Number(a)-1]," ").concat(i)}},72:function(e,t,s){},73:function(e,t,s){},82:function(e,t,s){"use strict";s.r(t);var c=s(52),n=(s(72),s(0)),i=function(e){var t=e.name,s=e.category,i=e.date,a=e.photo,r=e.digest,o=e.showArticle,l=e.id;return Object(n.jsxs)("li",{className:"news-item",onClick:function(){o(l)},children:[Object(n.jsxs)("div",{className:"news-item__description",children:[Object(n.jsx)("h3",{className:"news-item__title",children:t}),Object(n.jsx)("p",{className:"news-item__category",children:s}),Object(n.jsx)("p",{className:"news-item__digest",children:r}),Object(n.jsx)("time",{className:"news-item__time",dateTime:i,children:Object(c.a)(i)})]}),Object(n.jsx)("div",{className:"news-item__img-wrapper",children:Object(n.jsx)("img",{className:"news-item__img",src:a,alt:"some news"})})]})},a=s(46);s(73),t.default=function(e){var t=e.isAllNews,s=e.renderNews,c=e.showArticle,r=e.addNews;return Object(n.jsxs)("section",{className:"news",children:[Object(n.jsx)("h2",{className:"news__title",children:"\u041d\u043e\u0432\u043e\u0441\u0442\u0438"}),Object(n.jsx)("p",{className:"news__title-digest",children:"\u041f\u043e\u0447\u0435\u043c\u0443 \u0432\u044b\u0431\u0438\u0440\u0430\u044e\u0442 \u043d\u0430\u0441?"}),0!==s.length&&Object(n.jsx)("ul",{className:"news__list",children:s.map((function(e){return Object(n.jsx)(i,{id:e.id,name:e.name,category:e.category,date:e.date,photo:e.photos[4],digest:e.digest,showArticle:c},e.id)}))}),Object(n.jsx)("div",{className:"news__button",children:Object(n.jsx)(a.c,{name:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0435\u0449\u0435",isActive:!t,onClick:r,type:a.b})})]})}}}]);
//# sourceMappingURL=6.6875118b.chunk.js.map