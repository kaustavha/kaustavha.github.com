(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{E0YB:function(a,e,t){"use strict";var i=t("q1tI"),c=t.n(i),r=t("YFqc"),n=t.n(r),l=c.a.createElement,u=function(a){var e=a.article,t=e.image.url.startsWith("/")?"http://localhost:1337"+e.image.url:e.image.url;return l(n.a,{as:"/article/".concat(e.id),href:"/article/[id]"},l("a",{className:"uk-link-reset"},l("div",{className:"uk-card uk-card-muted"},l("div",{className:"uk-card-media-top"},l("img",{src:t,alt:e.image.alternativeText,height:"100"})),l("div",{className:"uk-card-body"},l("p",{id:"category",className:"uk-text-uppercase"},e.category.name),l("p",{id:"title",className:"uk-text-large"},e.title)))))},s=c.a.createElement;e.a=function(a){var e=a.articles,t=Math.ceil(e.length/5),i=e.slice(0,t),c=e.slice(t,e.length);return s("div",null,s("div",{className:"uk-child-width-1-2","data-uk-grid":!0},s("div",null,i.map((function(a){return s(u,{article:a,key:"article__".concat(a.id)})}))),s("div",null,s("div",{className:"uk-child-width-1-2@m uk-grid-match","data-uk-grid":!0},c.map((function(a){return s(u,{article:a,key:"article__".concat(a.id)})}))))))}},RNiq:function(a,e,t){"use strict";t.r(e),t.d(e,"__N_SSG",(function(){return u}));var i=t("q1tI"),c=t.n(i),r=t("E0YB"),n=t("CafY"),l=c.a.createElement,u=!0;e.default=function(a){var e=a.articles,t=a.categories;return l(n.a,{categories:t},l("div",{className:"uk-section"},l("div",{className:"uk-container uk-container-large"},l("h1",null,"Strapi blog"),l(r.a,{articles:e}))))}},vlRD:function(a,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("RNiq")}])}},[["vlRD",0,2,1,3]]]);