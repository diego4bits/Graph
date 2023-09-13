"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[271],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3306:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const o={},i=void 0,s={unversionedId:"docs/node/d_Node",id:"docs/node/d_Node",title:"d_Node",description:"Node",source:"@site/docs/docs/node/d_Node.md",sourceDirName:"docs/node",slug:"/docs/node/d_Node",permalink:"/Graph/docs/node/d_Node",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"is_connected_by",permalink:"/Graph/docs/node/Node/is_connected_by"},next:{title:"Relation",permalink:"/Graph/docs/relation/"}},l={},d=[{value:"<code>Node</code>",id:"node",level:2},{value:"Description:",id:"description",level:4},{value:"Attributes:",id:"attributes",level:4},{value:"Usage Cases:",id:"usage-cases",level:4},{value:"How it Works:",id:"how-it-works",level:4},{value:"Dependencies:",id:"dependencies",level:4}],c={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"node"},(0,a.kt)("inlineCode",{parentName:"h2"},"Node")),(0,a.kt)("h4",{id:"description"},"Description:"),(0,a.kt)("p",null,"This class represents a node in a graph structure and provides functionalities for manipulating and traversing the graph."),(0,a.kt)("h4",{id:"attributes"},"Attributes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_printable_attr")," (",(0,a.kt)("inlineCode",{parentName:"li"},"set"),"): A set of attributes that can be printed. ")),(0,a.kt)("h4",{id:"usage-cases"},"Usage Cases:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# Sample code to demonstrate a common use case of instantiating and using the class\nnode = Node()\n# The rest of the example\n")),(0,a.kt)("h4",{id:"how-it-works"},"How it Works:"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Node")," class represents a node in a graph. It is used to create and manipulate nodes in a graph structure. The class has a set of printable attributes that can be accessed and modified."),(0,a.kt)("h4",{id:"dependencies"},"Dependencies:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Relation"),": This class is required by ",(0,a.kt)("inlineCode",{parentName:"li"},"Node")," class to establish and manage the relationships between nodes in the graph.")))}u.isMDXComponent=!0}}]);