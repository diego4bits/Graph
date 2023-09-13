"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[946],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>y});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=r.createContext({}),s=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(d.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(t),m=o,y=p["".concat(d,".").concat(m)]||p[m]||u[m]||i;return t?r.createElement(y,a(a({ref:n},c),{},{components:t})):r.createElement(y,a({ref:n},c))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9402:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=t(7462),o=(t(7294),t(3905));const i={},a=void 0,l={unversionedId:"docs/relation/Relation/link_nodes",id:"docs/relation/Relation/link_nodes",title:"link_nodes",description:"link_nodes(node Any) -> None",source:"@site/docs/docs/relation/Relation/link_nodes.md",sourceDirName:"docs/relation/Relation",slug:"/docs/relation/Relation/link_nodes",permalink:"/Graph/docs/relation/Relation/link_nodes",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"is_node_linked_by",permalink:"/Graph/docs/relation/Relation/is_node_linked_by"},next:{title:"Welcome to your Documentation",permalink:"/Graph/"}},d={},s=[{value:"<code>link_nodes(node: Any, edge: Any) -&gt; None</code>",id:"link_nodesnode-any-edge-any---none",level:2},{value:"Description:",id:"description",level:4},{value:"Parameters:",id:"parameters",level:4},{value:"Returns:",id:"returns",level:4},{value:"Usage Cases:",id:"usage-cases",level:4},{value:"How it Works:",id:"how-it-works",level:4},{value:"Dependencies:",id:"dependencies",level:4}],c={toc:s},p="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"link_nodesnode-any-edge-any---none"},(0,o.kt)("inlineCode",{parentName:"h2"},"link_nodes(node: Any, edge: Any) -> None")),(0,o.kt)("h4",{id:"description"},"Description:"),(0,o.kt)("p",null,"This method adds a relationship between a node and an edge. It belongs to the class Relation."),(0,o.kt)("h4",{id:"parameters"},"Parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"node")," (",(0,o.kt)("inlineCode",{parentName:"li"},"Any"),"): The node to link."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"edge")," (",(0,o.kt)("inlineCode",{parentName:"li"},"Any"),"): The edge to link.")),(0,o.kt)("h4",{id:"returns"},"Returns:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"None")),(0,o.kt)("h4",{id:"usage-cases"},"Usage Cases:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"rel = Relation()\nrel.link_nodes(node1, edge1)\n")),(0,o.kt)("h4",{id:"how-it-works"},"How it Works:"),(0,o.kt)("p",null,"This method adds the given node and edge to the ",(0,o.kt)("inlineCode",{parentName:"p"},"_node_edge_relation")," dictionary attribute of the Relation class. It also updates the ",(0,o.kt)("inlineCode",{parentName:"p"},"_clazz_node_relation")," dictionary attribute by adding the node to the set associated with the type of the edge."),(0,o.kt)("h4",{id:"dependencies"},"Dependencies:"),(0,o.kt)("p",null,"This method does not have any dependencies."))}u.isMDXComponent=!0}}]);