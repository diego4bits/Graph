"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[636],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),s=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=s(e.components);return o.createElement(c.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(t),m=r,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return t?o.createElement(h,a(a({ref:n},d),{},{components:t})):o.createElement(h,a({ref:n},d))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[p]="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2781:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=t(7462),r=(t(7294),t(3905));const i={},a=void 0,l={unversionedId:"docs/node/Node/is_connected",id:"docs/node/Node/is_connected",title:"is_connected",description:"is_connected(node: Node) -> bool",source:"@site/docs/docs/node/Node/is_connected.md",sourceDirName:"docs/node/Node",slug:"/docs/node/Node/is_connected",permalink:"/Graph/docs/node/Node/is_connected",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"connections_by",permalink:"/Graph/docs/node/Node/connections_by"},next:{title:"is_connected_by",permalink:"/Graph/docs/node/Node/is_connected_by"}},c={},s=[{value:"<code>is_connected(node: Node) -&gt; bool</code>",id:"is_connectednode-node---bool",level:2},{value:"Description:",id:"description",level:4},{value:"Parameters:",id:"parameters",level:4},{value:"Returns:",id:"returns",level:4},{value:"Exceptions:",id:"exceptions",level:4},{value:"Usage Cases:",id:"usage-cases",level:4},{value:"How it Works:",id:"how-it-works",level:4},{value:"Dependencies:",id:"dependencies",level:4}],d={toc:s},p="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"is_connectednode-node---bool"},(0,r.kt)("inlineCode",{parentName:"h2"},"is_connected(node: Node) -> bool")),(0,r.kt)("h4",{id:"description"},"Description:"),(0,r.kt)("p",null,"This method checks if the current node is connected to the given node. It belongs to the class ",(0,r.kt)("inlineCode",{parentName:"p"},"Node"),"."),(0,r.kt)("h4",{id:"parameters"},"Parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"node")," (",(0,r.kt)("inlineCode",{parentName:"li"},"Node"),"): The node to check the connection with.")),(0,r.kt)("h4",{id:"returns"},"Returns:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bool"),": Returns ",(0,r.kt)("inlineCode",{parentName:"li"},"True")," if the current node is connected to the given node, otherwise returns ",(0,r.kt)("inlineCode",{parentName:"li"},"False"),".")),(0,r.kt)("h4",{id:"exceptions"},"Exceptions:"),(0,r.kt)("p",null,"This method does not throw any exceptions."),(0,r.kt)("h4",{id:"usage-cases"},"Usage Cases:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# Sample code to demonstrate a common use case\nresult_case1 = node.is_connected(other_node)\nprint(result_case1)\n\n# Another use case (if applicable)\nresult_case2 = node.is_connected(another_node)\nprint(result_case2)\n")),(0,r.kt)("h4",{id:"how-it-works"},"How it Works:"),(0,r.kt)("p",null,"This method utilizes the ",(0,r.kt)("inlineCode",{parentName:"p"},"_relation")," instance of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Relation")," class to check if the current node is linked to the given node. It returns the result of the ",(0,r.kt)("inlineCode",{parentName:"p"},"is_node_linked")," method called on ",(0,r.kt)("inlineCode",{parentName:"p"},"_relation"),"."),(0,r.kt)("h4",{id:"dependencies"},"Dependencies:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Relation"),": This method depends on the ",(0,r.kt)("inlineCode",{parentName:"li"},"Relation")," class, which is imported from the ",(0,r.kt)("inlineCode",{parentName:"li"},"Relation")," module. The ",(0,r.kt)("inlineCode",{parentName:"li"},"Relation")," class is responsible for managing the relationships between nodes.")))}u.isMDXComponent=!0}}]);