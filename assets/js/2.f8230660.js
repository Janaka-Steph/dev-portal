(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{111:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(106),l=a(107),o=a(24),s=a(63),i=a.n(s);function u(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}var m=function(){const e=Object(n.useRef)(null),t=Object(o.useLocation)();return Object(n.useEffect)((()=>{!t.hash&&e.current&&u(e.current)}),[t.pathname]),c.a.createElement("div",{ref:e},c.a.createElement("a",{href:"#main",className:i.a.skipToContent,onClick:e=>{e.preventDefault();const t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&u(t)}},c.a.createElement(l.a,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))},d=a(105),b=a(129),f=a(64),v=a.n(f);var h=function(){const{isAnnouncementBarClosed:e,closeAnnouncementBar:t}=Object(b.a)(),{announcementBar:a}=Object(d.useThemeConfig)();if(!a)return null;const{content:n,backgroundColor:o,textColor:s,isCloseable:i}=a;return!n||i&&e?null:c.a.createElement("div",{className:v.a.announcementBar,style:{backgroundColor:o,color:s},role:"banner"},c.a.createElement("div",{className:Object(r.a)(v.a.announcementBarContent,{[v.a.announcementBarCloseable]:i}),dangerouslySetInnerHTML:{__html:n}}),i?c.a.createElement("button",{type:"button",className:v.a.announcementBarClose,onClick:t,"aria-label":Object(l.b)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},c.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null)},g=a(3),E=()=>null,O=a(16),j=a(65),p=a.n(j);const k=({icon:e,style:t})=>c.a.createElement("span",{className:Object(r.a)(p.a.toggle,p.a.dark),style:t},e),_=({icon:e,style:t})=>c.a.createElement("span",{className:Object(r.a)(p.a.toggle,p.a.light),style:t},e),C=Object(n.memo)((({className:e,icons:t,checked:a,disabled:l,onChange:o})=>{const[s,i]=Object(n.useState)(a),[u,m]=Object(n.useState)(!1),d=Object(n.useRef)(null);return c.a.createElement("div",{className:Object(r.a)("react-toggle",e,{"react-toggle--checked":s,"react-toggle--focus":u,"react-toggle--disabled":l}),role:"button",tabIndex:-1,onClick:e=>{const t=d.current;if(t)return e.target!==t?(e.preventDefault(),t.focus(),void t.click()):void i(null==t?void 0:t.checked)}},c.a.createElement("div",{className:"react-toggle-track"},c.a.createElement("div",{className:"react-toggle-track-check"},t.checked),c.a.createElement("div",{className:"react-toggle-track-x"},t.unchecked)),c.a.createElement("div",{className:"react-toggle-thumb"}),c.a.createElement("input",{ref:d,checked:s,type:"checkbox",className:"react-toggle-screenreader-only","aria-label":"Switch between dark and light mode",onChange:o,onFocus:()=>m(!0),onBlur:()=>m(!1)}))}));var N=function(e){const{colorMode:{switchConfig:{darkIcon:t,darkIconStyle:a,lightIcon:n,lightIconStyle:r}}}=Object(d.useThemeConfig)(),{isClient:l}=Object(O.default)();return c.a.createElement(C,Object(g.a)({disabled:!l,icons:{checked:c.a.createElement(k,{icon:t,style:a}),unchecked:c.a.createElement(_,{icon:n,style:r})}},e))},w=a(114),y=a(132);var L=e=>{const t=Object(o.useLocation)(),[a,c]=Object(n.useState)(e),r=Object(n.useRef)(!1),[l,s]=Object(n.useState)(0),i=Object(n.useCallback)((e=>{null!==e&&s(e.getBoundingClientRect().height)}),[]);return Object(y.a)((({scrollY:t},{scrollY:a})=>{if(!e)return;if(t<l)return void c(!0);if(r.current)return r.current=!1,void c(!1);a&&0===t&&c(!0);const n=document.documentElement.scrollHeight-l,o=window.innerHeight;a&&t>=a?c(!1):t+o<n&&c(!0)}),[l,r]),Object(n.useEffect)((()=>{e&&c(!0)}),[t.pathname]),Object(n.useEffect)((()=>{e&&t.hash&&(r.current=!0)}),[t.hash]),{navbarRef:i,isNavbarVisible:a}},S=a(133),D=a(134),T=a(118);var A=({width:e=20,height:t=20,...a})=>c.a.createElement("svg",Object(g.a)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",width:e,height:t},a),c.a.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}));function x({mobile:e,dropdownItemsBefore:t,dropdownItemsAfter:a,...n}){const{i18n:{currentLocale:r,locales:l,localeConfigs:o}}=Object(O.default)(),s=Object(d.useAlternatePageUtils)();function i(e){return o[e].label}const u=[...t,...l.map((e=>{const t=`pathname://${s.createUrl({locale:e,fullyQualified:!1})}`;return{isNavLink:!0,label:i(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===r?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),...a],m=e?"Languages":i(r);return c.a.createElement(T.a,Object(g.a)({},n,{href:"#",mobile:e,label:c.a.createElement("span",null,c.a.createElement(A,{style:{verticalAlign:"text-bottom",marginRight:5}}),c.a.createElement("span",null,m)),items:u}))}var I=a(66),B=a.n(I);function V({mobile:e}){return e?null:c.a.createElement("div",{className:B.a.searchWrapper},c.a.createElement(E,null))}const M={default:()=>T.a,localeDropdown:()=>x,search:()=>V,docsVersion:()=>a(151).default,docsVersionDropdown:()=>a(152).default,doc:()=>a(153).default};function P({type:e,...t}){const a=((e="default")=>{const t=M[e];if(!t)throw new Error(`No NavbarItem component found for type=${e}.`);return t()})(e);return c.a.createElement(a,t)}var U=a(135),R=a(137),H=a(68),$=a.n(H);const z="right";var G=function(){const{navbar:{items:e,hideOnScroll:t,style:a},colorMode:{disableSwitch:l}}=Object(d.useThemeConfig)(),[o,s]=Object(n.useState)(!1),{isDarkTheme:i,setLightTheme:u,setDarkTheme:m}=Object(w.a)(),{navbarRef:b,isNavbarVisible:f}=L(t);Object(S.a)(o);const v=Object(n.useCallback)((()=>{s(!0)}),[s]),h=Object(n.useCallback)((()=>{s(!1)}),[s]),O=Object(n.useCallback)((e=>e.target.checked?m():u()),[u,m]),j=Object(D.a)();Object(n.useEffect)((()=>{j===D.b.desktop&&s(!1)}),[j]);const p=e.some((e=>"search"===e.type)),{leftItems:k,rightItems:_}=function(e){return{leftItems:e.filter((e=>{var t;return"left"===(null!==(t=e.position)&&void 0!==t?t:z)})),rightItems:e.filter((e=>{var t;return"right"===(null!==(t=e.position)&&void 0!==t?t:z)}))}}(e);return c.a.createElement("nav",{ref:b,className:Object(r.a)("navbar","navbar--fixed-top",{"navbar--dark":"dark"===a,"navbar--primary":"primary"===a,"navbar-sidebar--show":o,[$.a.navbarHideable]:t,[$.a.navbarHidden]:t&&!f})},c.a.createElement("div",{className:"navbar__inner"},c.a.createElement("div",{className:"navbar__items"},null!=e&&0!==e.length&&c.a.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",type:"button",tabIndex:0,onClick:v,onKeyDown:v},c.a.createElement(R.a,null)),c.a.createElement(U.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:Object(r.a)("navbar__title")}),k.map(((e,t)=>c.a.createElement(P,Object(g.a)({},e,{key:t}))))),c.a.createElement("div",{className:"navbar__items navbar__items--right"},_.map(((e,t)=>c.a.createElement(P,Object(g.a)({},e,{key:t})))),!l&&c.a.createElement(N,{className:$.a.displayOnlyInLargeViewport,checked:i,onChange:O}),!p&&c.a.createElement(E,null))),c.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:h}),c.a.createElement("div",{className:"navbar-sidebar"},c.a.createElement("div",{className:"navbar-sidebar__brand"},c.a.createElement(U.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title",onClick:h}),!l&&o&&c.a.createElement(N,{checked:i,onChange:O})),c.a.createElement("div",{className:"navbar-sidebar__items"},c.a.createElement("div",{className:"menu"},c.a.createElement("ul",{className:"menu__list"},e.map(((e,t)=>c.a.createElement(P,Object(g.a)({mobile:!0},e,{onClick:h,key:t})))))))))},F=a(108),W=a(116),K=a(69),Y=a.n(K),Q=a(136);function q({to:e,href:t,label:a,prependBaseUrlToHref:n,...r}){const l=Object(W.a)(e),o=Object(W.a)(t,{forcePrependBaseUrl:!0});return c.a.createElement(F.a,Object(g.a)({className:"footer__link-item"},t?{href:n?o:t}:{to:l},r),a)}const J=({sources:e,alt:t})=>c.a.createElement(Q.a,{className:"footer__logo",alt:t,sources:e});var X=function(){const{footer:e}=Object(d.useThemeConfig)(),{copyright:t,links:a=[],logo:n={}}=e||{},l={light:Object(W.a)(n.src),dark:Object(W.a)(n.srcDark||n.src)};return e?c.a.createElement("footer",{className:Object(r.a)("footer",{"footer--dark":"dark"===e.style})},c.a.createElement("div",{className:"container"},a&&a.length>0&&c.a.createElement("div",{className:"row footer__links"},a.map(((e,t)=>c.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?c.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?c.a.createElement("ul",{className:"footer__items"},e.items.map(((e,t)=>e.html?c.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):c.a.createElement("li",{key:e.href||e.to,className:"footer__item"},c.a.createElement(q,e))))):null)))),(n||t)&&c.a.createElement("div",{className:"footer__bottom text--center"},n&&(n.src||n.srcDark)&&c.a.createElement("div",{className:"margin-bottom--sm"},n.href?c.a.createElement(F.a,{href:n.href,className:Y.a.footerLogoLink},c.a.createElement(J,{alt:n.alt,sources:l})):c.a.createElement(J,{alt:n.alt,sources:l})),t?c.a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:t}}):null))):null},Z=a(8);const ee=Object(d.createStorageSlot)("theme"),te="light",ae="dark",ne=e=>e===ae?ae:te,ce=e=>{Object(d.createStorageSlot)("theme").set(ne(e))};var re=()=>{const{colorMode:{defaultMode:e,disableSwitch:t,respectPrefersColorScheme:a}}=Object(d.useThemeConfig)(),[c,r]=Object(n.useState)((e=>Z.a.canUseDOM?ne(document.documentElement.getAttribute("data-theme")):ne(e))(e)),l=Object(n.useCallback)((()=>{r(te),ce(te)}),[]),o=Object(n.useCallback)((()=>{r(ae),ce(ae)}),[]);return Object(n.useEffect)((()=>{document.documentElement.setAttribute("data-theme",ne(c))}),[c]),Object(n.useEffect)((()=>{if(!t)try{const e=ee.get();null!==e&&r(ne(e))}catch(e){console.error(e)}}),[r]),Object(n.useEffect)((()=>{t&&!a||window.matchMedia("(prefers-color-scheme: dark)").addListener((({matches:e})=>{r(e?ae:te)}))}),[]),{isDarkTheme:c===ae,setLightTheme:l,setDarkTheme:o}},le=a(131);var oe=function(e){const{isDarkTheme:t,setLightTheme:a,setDarkTheme:n}=re();return c.a.createElement(le.a.Provider,{value:{isDarkTheme:t,setLightTheme:a,setDarkTheme:n}},e.children)};const se="docusaurus.tab.";var ie=()=>{const[e,t]=Object(n.useState)({}),a=Object(n.useCallback)(((e,t)=>{Object(d.createStorageSlot)(`docusaurus.tab.${e}`).set(t)}),[]);return Object(n.useEffect)((()=>{try{const e={};for(const t of Object(d.listStorageKeys)())if(t.startsWith(se)){e[t.substring(se.length)]=Object(d.createStorageSlot)(t).get()}t(e)}catch(e){console.error(e)}}),[]),{tabGroupChoices:e,setTabGroupChoices:(e,n)=>{t((t=>({...t,[e]:n}))),a(e,n)}}};const ue=Object(d.createStorageSlot)("docusaurus.announcement.dismiss"),me=Object(d.createStorageSlot)("docusaurus.announcement.id");var de=()=>{const{announcementBar:e}=Object(d.useThemeConfig)(),[t,a]=Object(n.useState)(!0),c=Object(n.useCallback)((()=>{ue.set("true"),a(!0)}),[]);return Object(n.useEffect)((()=>{if(!e)return;const{id:t}=e;let n=me.get();"annoucement-bar"===n&&(n="announcement-bar");const c=t!==n;me.set(t),c&&ue.set("false"),(c||"false"===ue.get())&&a(!1)}),[]),{isAnnouncementBarClosed:t,closeAnnouncementBar:c}},be=a(130);var fe=function(e){const{tabGroupChoices:t,setTabGroupChoices:a}=ie(),{isAnnouncementBarClosed:n,closeAnnouncementBar:r}=de();return c.a.createElement(be.a.Provider,{value:{tabGroupChoices:t,setTabGroupChoices:a,isAnnouncementBarClosed:n,closeAnnouncementBar:r}},e.children)};function ve({children:e}){return c.a.createElement(oe,null,c.a.createElement(fe,null,c.a.createElement(d.DocsPreferredVersionContextProvider,null,e)))}var he=a(25);function ge({locale:e,version:t,tag:a}){return c.a.createElement(he.a,null,e&&c.a.createElement("meta",{name:"docusaurus_locale",content:`${e}`}),t&&c.a.createElement("meta",{name:"docusaurus_version",content:t}),a&&c.a.createElement("meta",{name:"docusaurus_tag",content:a}))}var Ee=a(119);function Oe(){const{i18n:{defaultLocale:e,locales:t}}=Object(O.default)(),a=Object(d.useAlternatePageUtils)();return c.a.createElement(he.a,null,t.map((e=>c.a.createElement("link",{key:e,rel:"alternate",href:a.createUrl({locale:e,fullyQualified:!0}),hrefLang:e}))),c.a.createElement("link",{rel:"alternate",href:a.createUrl({locale:e,fullyQualified:!0}),hrefLang:"x-default"}))}function je({permalink:e}){const{siteConfig:{url:t}}=Object(O.default)(),a=function(){const{siteConfig:{url:e}}=Object(O.default)(),{pathname:t}=Object(o.useLocation)();return e+Object(W.a)(t)}(),n=e?`${t}${e}`:a;return c.a.createElement(he.a,null,c.a.createElement("meta",{property:"og:url",content:n}),c.a.createElement("link",{rel:"canonical",href:n}))}function pe(e){const{siteConfig:{favicon:t,themeConfig:{metadatas:a}},i18n:{currentLocale:n,localeConfigs:r}}=Object(O.default)(),{title:l,description:o,image:s,keywords:i,searchMetadatas:u}=e,m=Object(W.a)(t),b=n,f=r[n].direction;return c.a.createElement(c.a.Fragment,null,c.a.createElement(he.a,null,c.a.createElement("html",{lang:b,dir:f}),t&&c.a.createElement("link",{rel:"shortcut icon",href:m})),c.a.createElement(Ee.a,{title:l,description:o,keywords:i,image:s}),c.a.createElement(je,null),c.a.createElement(Oe,null),c.a.createElement(ge,Object(g.a)({tag:d.DEFAULT_SEARCH_TAG,locale:n},u)),c.a.createElement(he.a,null,a.map(((e,t)=>c.a.createElement("meta",Object(g.a)({key:`metadata_${t}`},e))))))}a(70);var ke=function(){Object(n.useEffect)((()=>{const e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),()=>{document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};a(71);t.a=function(e){const{children:t,noFooter:a,wrapperClassName:n,pageClassName:l}=e;return ke(),c.a.createElement(ve,null,c.a.createElement(pe,e),c.a.createElement(m,null),c.a.createElement(h,null),c.a.createElement(G,null),c.a.createElement("div",{className:Object(r.a)(d.ThemeClassNames.wrapper.main,n,l)},t),!a&&c.a.createElement(X,null))}},114:function(e,t,a){"use strict";var n=a(0),c=a(131);t.a=function(){const e=Object(n.useContext)(c.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},118:function(e,t,a){"use strict";var n=a(3),c=a(0),r=a.n(c),l=a(106),o=a(108),s=a(116),i=a(24),u=a(105);function m({activeBasePath:e,activeBaseRegex:t,to:a,href:c,label:l,activeClassName:i="navbar__link--active",prependBaseUrlToHref:u,...m}){const d=Object(s.a)(a),b=Object(s.a)(e),f=Object(s.a)(c,{forcePrependBaseUrl:!0});return r.a.createElement(o.a,Object(n.a)({},c?{href:u?f:c}:{isNavLink:!0,activeClassName:i,to:d,...e||t?{isActive:(e,a)=>t?new RegExp(t).test(a.pathname):a.pathname.startsWith(b)}:null},m),l)}function d({items:e,position:t,className:a,...o}){var s;const i=Object(c.useRef)(null),u=Object(c.useRef)(null),[d,b]=Object(c.useState)(!1);Object(c.useEffect)((()=>{const e=e=>{i.current&&!i.current.contains(e.target)&&b(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[i]);const f=(e,t=!1)=>Object(l.a)({"navbar__item navbar__link":!t,dropdown__link:t},e);return e?r.a.createElement("div",{ref:i,className:Object(l.a)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===t,"dropdown--right":"right"===t,"dropdown--show":d})},r.a.createElement(m,Object(n.a)({className:f(a)},o,{onClick:o.to?void 0:e=>e.preventDefault(),onKeyDown:e=>{"Enter"===e.key&&(e.preventDefault(),b(!d))}}),null!==(s=o.children)&&void 0!==s?s:o.label),r.a.createElement("ul",{ref:u,className:"dropdown__menu"},e.map((({className:t,...a},c)=>r.a.createElement("li",{key:c},r.a.createElement(m,Object(n.a)({onKeyDown:t=>{if(c===e.length-1&&"Tab"===t.key){t.preventDefault(),b(!1);const e=i.current.nextElementSibling;e&&e.focus()}},activeClassName:"dropdown__link--active",className:f(t,!0)},a))))))):r.a.createElement(m,Object(n.a)({className:f(a)},o))}function b({items:e,className:t,position:a,...o}){var s,d,b;const f=Object(c.useRef)(null),{pathname:v}=Object(i.useLocation)(),[h,g]=Object(c.useState)((()=>{var t;return null===(t=!(null!=e&&e.some((e=>Object(u.isSamePath)(e.to,v)))))||void 0===t||t})),E=(e,t=!1)=>Object(l.a)("menu__link",{"menu__link--sublist":t},e);if(!e)return r.a.createElement("li",{className:"menu__list-item"},r.a.createElement(m,Object(n.a)({className:E(t)},o)));const O=null!==(s=f.current)&&void 0!==s&&s.scrollHeight?`${null===(d=f.current)||void 0===d?void 0:d.scrollHeight}px`:void 0;return r.a.createElement("li",{className:Object(l.a)("menu__list-item",{"menu__list-item--collapsed":h})},r.a.createElement(m,Object(n.a)({role:"button",className:E(t,!0)},o,{onClick:e=>{e.preventDefault(),g((e=>!e))}}),null!==(b=o.children)&&void 0!==b?b:o.label),r.a.createElement("ul",{className:"menu__list",ref:f,style:{height:h?void 0:O}},e.map((({className:e,...t},a)=>r.a.createElement("li",{className:"menu__list-item",key:a},r.a.createElement(m,Object(n.a)({activeClassName:"menu__link--active",className:E(e)},t,{onClick:o.onClick})))))))}t.a=function({mobile:e=!1,...t}){const a=e?b:d;return r.a.createElement(a,t)}},129:function(e,t,a){"use strict";var n=a(0),c=a(130);t.a=function(){const e=Object(n.useContext)(c.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},130:function(e,t,a){"use strict";var n=a(0);const c=Object(n.createContext)(void 0);t.a=c},131:function(e,t,a){"use strict";var n=a(0);const c=a.n(n).a.createContext(void 0);t.a=c},132:function(e,t,a){"use strict";var n=a(0),c=a(8);const r=()=>({scrollX:c.a.canUseDOM?window.pageXOffset:0,scrollY:c.a.canUseDOM?window.pageYOffset:0});t.a=(e,t=[])=>{const a=Object(n.useRef)(r()),c=()=>{const t=r();e&&e(t,a.current),a.current=t};Object(n.useEffect)((()=>{const e={passive:!0};return c(),window.addEventListener("scroll",c,e),()=>window.removeEventListener("scroll",c,e)}),t)}},133:function(e,t,a){"use strict";var n=a(0);t.a=function(e=!0){Object(n.useEffect)((()=>(document.body.style.overflow=e?"hidden":"visible",()=>{document.body.style.overflow="visible"})),[e])}},134:function(e,t,a){"use strict";a.d(t,"b",(function(){return r}));var n=a(0),c=a(8);const r={desktop:"desktop",mobile:"mobile"};t.a=function(){const e=c.a.canUseDOM;function t(){if(e)return window.innerWidth>996?r.desktop:r.mobile}const[a,l]=Object(n.useState)(t);return Object(n.useEffect)((()=>{if(e)return window.addEventListener("resize",a),()=>window.removeEventListener("resize",a);function a(){l(t())}}),[]),a}},135:function(e,t,a){"use strict";var n=a(3),c=a(0),r=a.n(c),l=a(108),o=a(136),s=a(116),i=a(16),u=a(105);t.a=e=>{const{isClient:t}=Object(i.default)(),{navbar:{title:a,logo:c={src:""}}}=Object(u.useThemeConfig)(),{imageClassName:m,titleClassName:d,...b}=e,f=Object(s.a)(c.href||"/"),v={light:Object(s.a)(c.src),dark:Object(s.a)(c.srcDark||c.src)};return r.a.createElement(l.a,Object(n.a)({to:f},b,c.target&&{target:c.target}),c.src&&r.a.createElement(o.a,{key:t,className:m,sources:v,alt:c.alt||a||"Logo"}),null!=a&&r.a.createElement("strong",{className:d},a))}},136:function(e,t,a){"use strict";var n=a(3),c=a(0),r=a.n(c),l=a(106),o=a(16),s=a(114),i=a(67),u=a.n(i);t.a=e=>{const{isClient:t}=Object(o.default)(),{isDarkTheme:a}=Object(s.a)(),{sources:c,className:i,alt:m="",...d}=e,b=t?a?["dark"]:["light"]:["light","dark"];return r.a.createElement(r.a.Fragment,null,b.map((e=>r.a.createElement("img",Object(n.a)({key:e,src:c[e],alt:m,className:Object(l.a)(u.a.themedImage,u.a[`themedImage--${e}`],i)},d)))))}},137:function(e,t,a){"use strict";var n=a(3),c=a(0),r=a.n(c);t.a=({width:e=30,height:t=30,className:a,...c})=>r.a.createElement("svg",Object(n.a)({"aria-label":"Menu",className:a,width:e,height:t,viewBox:"0 0 30 30",role:"img",focusable:"false"},c),r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))},151:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return i}));var n=a(3),c=a(0),r=a.n(c),l=a(118),o=a(113),s=a(105);function i({label:e,to:t,docsPluginId:a,...c}){var i;const u=Object(o.useActiveVersion)(a),{preferredVersion:m}=Object(s.useDocsPreferredVersion)(a),d=Object(o.useLatestVersion)(a),b=null!==(i=null!=u?u:m)&&void 0!==i?i:d,f=null!=e?e:b.label,v=null!=t?t:(e=>e.docs.find((t=>t.id===e.mainDocId)))(b).path;return r.a.createElement(l.a,Object(n.a)({},c,{label:f,to:v}))}},152:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));var n=a(3),c=a(0),r=a.n(c),l=a(118),o=a(113),s=a(105);const i=e=>e.docs.find((t=>t.id===e.mainDocId));function u({mobile:e,docsPluginId:t,dropdownActiveClassDisabled:a,dropdownItemsBefore:c,dropdownItemsAfter:u,...m}){var d,b;const f=Object(o.useActiveDocContext)(t),v=Object(o.useVersions)(t),h=Object(o.useLatestVersion)(t),{preferredVersion:g,savePreferredVersionName:E}=Object(s.useDocsPreferredVersion)(t);const O=null!==(d=null!==(b=f.activeVersion)&&void 0!==b?b:g)&&void 0!==d?d:h,j=e?"Versions":O.label,p=e?void 0:i(O).path;return r.a.createElement(l.a,Object(n.a)({},m,{mobile:e,label:j,to:p,items:function(){const e=v.map((e=>{const t=(null==f?void 0:f.alternateDocVersions[e.name])||i(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:()=>e===(null==f?void 0:f.activeVersion),onClick:()=>{E(e.name)}}})),t=[...c,...e,...u];if(!(t.length<=1))return t}(),isActive:a?()=>!1:void 0}))}},153:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));var n=a(3),c=a(0),r=a.n(c),l=a(118),o=a(113),s=a(106),i=a(105);function u({docId:e,activeSidebarClassName:t,label:a,docsPluginId:c,...u}){var m;const{activeVersion:d,activeDoc:b}=Object(o.useActiveDocContext)(c),{preferredVersion:f}=Object(i.useDocsPreferredVersion)(c),v=Object(o.useLatestVersion)(c),h=null!==(m=null!=d?d:f)&&void 0!==m?m:v,g=h.docs.find((t=>t.id===e));if(!g){const t=h.docs.map((e=>e.id)).join("\n- ");throw new Error(`DocNavbarItem: couldn't find any doc with id=${e} in version ${h.name}.\nAvailable docIds=\n- ${t}`)}return r.a.createElement(l.a,Object(n.a)({exact:!0},u,{className:Object(s.a)(u.className,{[t]:b&&b.sidebar===g.sidebar}),label:null!=a?a:g.id,to:g.path}))}}}]);