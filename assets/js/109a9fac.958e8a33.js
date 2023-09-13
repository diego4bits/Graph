"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8295],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>h});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=o.createContext({}),l=function(e){var n=o.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=l(e.components);return o.createElement(d.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(t),m=r,h=p["".concat(d,".").concat(m)]||p[m]||u[m]||i;return t?o.createElement(h,a(a({ref:n},s),{},{components:t})):o.createElement(h,a({ref:n},s))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=m;var c={};for(var d in n)hasOwnProperty.call(n,d)&&(c[d]=n[d]);c.originalType=e,c[p]="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8175:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var o=t(7462),r=(t(7294),t(3905));const i={},a=void 0,c={unversionedId:"docs/node/Node/d_is_connected",id:"docs/node/Node/d_is_connected",title:"d_is_connected",description:"is_connected(node: Any) -> bool",source:"@site/docs/docs/node/Node/d_is_connected.md",sourceDirName:"docs/node/Node",slug:"/docs/node/Node/d_is_connected",permalink:"/Graph/docs/node/Node/d_is_connected",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"d_connections_by",permalink:"/Graph/docs/node/Node/d_connections_by"},next:{title:"d_is_connected_by",permalink:"/Graph/docs/node/Node/d_is_connected_by"}},d={},l=[{value:"<code>is_connected(node: Any) -&gt; bool</code>",id:"is_connectednode-any---bool",level:2},{value:"Description:",id:"description",level:4},{value:"Parameters:",id:"parameters",level:4},{value:"Returns:",id:"returns",level:4},{value:"Exceptions:",id:"exceptions",level:4},{value:"Usage Cases:",id:"usage-cases",level:4},{value:"How it Works:",id:"how-it-works",level:4},{value:"Dependencies:",id:"dependencies",level:4}],s={toc:l},p="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,o.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"is_connectednode-any---bool"},(0,r.kt)("inlineCode",{parentName:"h2"},"is_connected(node: Any) -> bool")),(0,r.kt)("h4",{id:"description"},"Description:"),(0,r.kt)("p",null,"This method checks if the current node is connected to another node. It belongs to the class ",(0,r.kt)("inlineCode",{parentName:"p"},"Node"),"."),(0,r.kt)("h4",{id:"parameters"},"Parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"node")," (",(0,r.kt)("inlineCode",{parentName:"li"},"Any"),"): The node to check if it is connected to the current node.")),(0,r.kt)("h4",{id:"returns"},"Returns:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bool"),": True if the current node is connected to the specified node, False otherwise.")),(0,r.kt)("h4",{id:"exceptions"},"Exceptions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This method does not throw any exceptions.")),(0,r.kt)("h4",{id:"usage-cases"},"Usage Cases:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# Sample code to demonstrate a common use case\nresult_case1 = is_connected(node1)\nprint(result_case1)\n\n# Another use case (if applicable)\nresult_case2 = is_connected(node2)\nprint(result_case2)\n")),(0,r.kt)("h4",{id:"how-it-works"},"How it Works:"),(0,r.kt)("p",null,"The method ",(0,r.kt)("inlineCode",{parentName:"p"},"is_connected")," uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"_relation")," instance variable of the current node to check if the specified ",(0,r.kt)("inlineCode",{parentName:"p"},"node")," is linked to the current node. It does this by invoking the ",(0,r.kt)("inlineCode",{parentName:"p"},"is_node_linked")," method on the ",(0,r.kt)("inlineCode",{parentName:"p"},"_relation")," object, passing the ",(0,r.kt)("inlineCode",{parentName:"p"},"node")," as an argument. The return value of ",(0,r.kt)("inlineCode",{parentName:"p"},"is_node_linked")," is then returned by the ",(0,r.kt)("inlineCode",{parentName:"p"},"is_connected")," method."),(0,r.kt)("h4",{id:"dependencies"},"Dependencies:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Relation"),": This method requires the ",(0,r.kt)("inlineCode",{parentName:"li"},"Relation")," class to be imported in order to access the ",(0,r.kt)("inlineCode",{parentName:"li"},"_relation")," instance variable.")))}u.isMDXComponent=!0}}]);