"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6176],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),d=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=d(e.components);return o.createElement(s.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(t),m=r,k=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return t?o.createElement(k,a(a({ref:n},c),{},{components:t})):o.createElement(k,a({ref:n},c))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:r,a[1]=l;for(var d=2;d<i;d++)a[d]=t[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3665:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var o=t(7462),r=(t(7294),t(3905));const i={},a=void 0,l={unversionedId:"docs/relation/Relation/is_node_linked",id:"docs/relation/Relation/is_node_linked",title:"is_node_linked",description:"isnodelinked(node: Any) -> bool",source:"@site/docs/docs/relation/Relation/is_node_linked.md",sourceDirName:"docs/relation/Relation",slug:"/docs/relation/Relation/is_node_linked",permalink:"/Graph/docs/relation/Relation/is_node_linked",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"d_link_nodes",permalink:"/Graph/docs/relation/Relation/d_link_nodes"},next:{title:"is_node_linked_by",permalink:"/Graph/docs/relation/Relation/is_node_linked_by"}},s={},d=[{value:"<code>is_node_linked(node: Any) -&gt; bool</code>",id:"is_node_linkednode-any---bool",level:2},{value:"Description:",id:"description",level:4},{value:"Parameters:",id:"parameters",level:4},{value:"Returns:",id:"returns",level:4},{value:"Usage Cases:",id:"usage-cases",level:4},{value:"How it Works:",id:"how-it-works",level:4},{value:"Dependencies:",id:"dependencies",level:4}],c={toc:d},p="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"is_node_linkednode-any---bool"},(0,r.kt)("inlineCode",{parentName:"h2"},"is_node_linked(node: Any) -> bool")),(0,r.kt)("h4",{id:"description"},"Description:"),(0,r.kt)("p",null,"This method checks if a given node is linked to any edges in the Relation object. This method belongs to the class Relation."),(0,r.kt)("h4",{id:"parameters"},"Parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"node")," (",(0,r.kt)("inlineCode",{parentName:"li"},"Any"),"): The node to check if it is linked to any edges.")),(0,r.kt)("h4",{id:"returns"},"Returns:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bool"),": True if the node is linked to any edges, False otherwise.")),(0,r.kt)("h4",{id:"usage-cases"},"Usage Cases:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# Sample code to demonstrate a common use case\nresult_case1 = relation.is_node_linked(node1)\nprint(result_case1)\n\n# Another use case (if applicable)\nresult_case2 = relation.is_node_linked(node2)\nprint(result_case2)\n")),(0,r.kt)("h4",{id:"how-it-works"},"How it Works:"),(0,r.kt)("p",null,"The method checks if the given ",(0,r.kt)("inlineCode",{parentName:"p"},"node")," exists in the ",(0,r.kt)("inlineCode",{parentName:"p"},"_node_edge_relation")," dictionary keys. If the node is found, it means that it is linked to at least one edge, so the method returns True. If the node is not found, it means that it is not linked to any edges, so the method returns False."),(0,r.kt)("h4",{id:"dependencies"},"Dependencies:"),(0,r.kt)("p",null,"This method does not have any dependencies."))}u.isMDXComponent=!0}}]);