"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2005],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=o.createContext({}),l=function(e){var t=o.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(a.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,f=p["".concat(a,".").concat(m)]||p[m]||u[m]||i;return n?o.createElement(f,c(c({ref:t},d),{},{components:n})):o.createElement(f,c({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=m;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s[p]="string"==typeof e?e:r,c[1]=s;for(var l=2;l<i;l++)c[l]=n[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7456:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const i={},c=void 0,s={unversionedId:"docs/node/Node/connections",id:"docs/node/Node/connections",title:"connections",description:"connections() -> List[Node]",source:"@site/docs/docs/node/Node/connections.md",sourceDirName:"docs/node/Node",slug:"/docs/node/Node/connections",permalink:"/Graph/docs/node/Node/connections",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"connect_right",permalink:"/Graph/docs/node/Node/connect_right"},next:{title:"connections_by",permalink:"/Graph/docs/node/Node/connections_by"}},a={},l=[{value:"<code>connections() -&gt; List[Node]</code>",id:"connections---listnode",level:2},{value:"Description:",id:"description",level:4},{value:"Parameters:",id:"parameters",level:4},{value:"Returns:",id:"returns",level:4},{value:"Exceptions:",id:"exceptions",level:4},{value:"Usage Cases:",id:"usage-cases",level:4},{value:"How it Works:",id:"how-it-works",level:4},{value:"Dependencies:",id:"dependencies",level:4}],d={toc:l},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"connections---listnode"},(0,r.kt)("inlineCode",{parentName:"h2"},"connections() -> List[Node]")),(0,r.kt)("h4",{id:"description"},"Description:"),(0,r.kt)("p",null,"This method returns a list of connected nodes. It belongs to the class Node."),(0,r.kt)("h4",{id:"parameters"},"Parameters:"),(0,r.kt)("p",null,"This method does not take any parameters."),(0,r.kt)("h4",{id:"returns"},"Returns:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"List[Node]"),": A list containing the connected nodes.")),(0,r.kt)("h4",{id:"exceptions"},"Exceptions:"),(0,r.kt)("p",null,"This method does not throw any exceptions."),(0,r.kt)("h4",{id:"usage-cases"},"Usage Cases:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# Sample code to demonstrate a common use case\nresult_case1 = connections()\nprint(result_case1)\n\n# Another use case (if applicable)\nresult_case2 = connections()\nprint(result_case2)\n")),(0,r.kt)("h4",{id:"how-it-works"},"How it Works:"),(0,r.kt)("p",null,"This method calls the ",(0,r.kt)("inlineCode",{parentName:"p"},"_relation.connected_nodes()")," method to retrieve the list of connected nodes."),(0,r.kt)("h4",{id:"dependencies"},"Dependencies:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Relation"),": This method relies on the ",(0,r.kt)("inlineCode",{parentName:"li"},"Relation")," class to access the ",(0,r.kt)("inlineCode",{parentName:"li"},"_relation")," object.")))}u.isMDXComponent=!0}}]);