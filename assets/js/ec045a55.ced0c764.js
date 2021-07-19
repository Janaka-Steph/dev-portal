(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[51],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6797:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return s}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],c={title:"Configure CLI",sidebar_position:4},u={unversionedId:"provider/daemon/getting_started/configure_cli",id:"provider/daemon/getting_started/configure_cli",isDocsHomePage:!1,title:"Configure CLI",description:"Now that your daemon is up and running, you need to configure the tdex CLI to communicate with the Operator interface.",source:"@site/docs/provider/daemon/getting_started/configure_cli.md",sourceDirName:"provider/daemon/getting_started",slug:"/provider/daemon/getting_started/configure_cli",permalink:"/docs/provider/daemon/getting_started/configure_cli",editUrl:"https://github.com/tdex-network/dev-portal/edit/master/docs/provider/daemon/getting_started/configure_cli.md",version:"current",sidebarPosition:4,frontMatter:{title:"Configure CLI",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Run Standalone",permalink:"/docs/provider/daemon/getting_started/run_standalone"},next:{title:"Deposit funds",permalink:"/docs/provider/daemon/deposit_funds"}},p=[],l={toc:p};function s(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Now that your daemon is up and running, you need to configure the ",(0,a.kt)("inlineCode",{parentName:"p"},"tdex")," CLI to communicate with the Operator interface.\nBy default, you can find the data directory of your CLI at the path ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.tdex-operator")," if using Linux or ",(0,a.kt)("inlineCode",{parentName:"p"},"~/Library/Application\\ Support/Tdex-daemon")," if using MacOs instead."),(0,a.kt)("p",null,"You can change the default path by exporting it into the envirnoment variable ",(0,a.kt)("inlineCode",{parentName:"p"},"TDEX_OPERATOR_DATADIR"),"."),(0,a.kt)("p",null,"Depending on how you started the daemon, you want to initialize your CLI like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# By default it looks for the daemon operator gRPC interface on localhost:9000\n$ tdex config init\n# If the daemon is running on regtest\n$ tdex config init --network regtest --explorer_url http://localhost:3001\n# or on a remote machine\n$ tdex config init --rpcserver example.com:9000\n")),(0,a.kt)("p",null,"You can always check the current state with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ tdex config\n# network: regtest\n# explorer_url: http://localhost:3001\n# rpcserver: localhost:9000\n# tls_cert_path:\n# no_macaroons: true\n# macaroons_path:\n")),(0,a.kt)("p",null,"The entries of the state of the CLI are configurable with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# To set the current network\n$ tdex config set <state_key> <value>\n")),(0,a.kt)("p",null,"If, for example, you configured your daemon to authenticate/authorize access to Operator interafce RPCs with macaroons, you must set the path to the ",(0,a.kt)("inlineCode",{parentName:"p"},"admin.macaroon")," and also the one for the TLS certificate ",(0,a.kt)("inlineCode",{parentName:"p"},"cert.pem")," like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# To set the path where to find admin.macaroon\n$ tdex config set macaroons_path ~/.tdex-daemon/macaroons\n# To set the path where to fing cert.pem\n$ tdex config set tls_cert_path ~/.tdex-daemon/tls\n")),(0,a.kt)("p",null,"If instead, your dameon's Operator interface is not proteced by this type of authentication/authorization, then you need to run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# To not use macaroons auth\n$ tdex config set no_macaroons true\n")),(0,a.kt)("p",null,"You're now ready to ",(0,a.kt)("a",{parentName:"p",href:"/docs/provider/daemon/deposit_funds"},"deposit some funds")," to open a market."))}s.isMDXComponent=!0}}]);