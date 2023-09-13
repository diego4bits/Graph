"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2637],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(n),u=o,m=s["".concat(d,".").concat(u)]||s[u]||f[u]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3825:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={},i=void 0,l={unversionedId:"docs/red_black_tree/RedBlackTree/d_left_rotate",id:"docs/red_black_tree/RedBlackTree/d_left_rotate",title:"d_left_rotate",description:"left_rotate(x: Node) -> None",source:"@site/docs/docs/red_black_tree/RedBlackTree/d_left_rotate.md",sourceDirName:"docs/red_black_tree/RedBlackTree",slug:"/docs/red_black_tree/RedBlackTree/d_left_rotate",permalink:"/Graph/docs/red_black_tree/RedBlackTree/d_left_rotate",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"d_is_red",permalink:"/Graph/docs/red_black_tree/RedBlackTree/d_is_red"},next:{title:"d_right_rotate",permalink:"/Graph/docs/red_black_tree/RedBlackTree/d_right_rotate"}},d={},p=[{value:"<code>left_rotate(x: Node) -&gt; None</code>",id:"left_rotatex-node---none",level:2},{value:"Description:",id:"description",level:4},{value:"Parameters:",id:"parameters",level:4},{value:"Returns:",id:"returns",level:4},{value:"Usage Cases:",id:"usage-cases",level:4},{value:"How it Works:",id:"how-it-works",level:4},{value:"Dependencies:",id:"dependencies",level:4}],c={toc:p},s="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"left_rotatex-node---none"},(0,o.kt)("inlineCode",{parentName:"h2"},"left_rotate(x: Node) -> None")),(0,o.kt)("h4",{id:"description"},"Description:"),(0,o.kt)("p",null,"This method performs a left rotation operation on a Red-Black Tree. It is used to balance the tree after an insertion or deletion operation. This method belongs to the class ",(0,o.kt)("inlineCode",{parentName:"p"},"RedBlackTree"),"."),(0,o.kt)("h4",{id:"parameters"},"Parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"x")," (",(0,o.kt)("inlineCode",{parentName:"li"},"Node"),"): The node on which the left rotation operation is performed.")),(0,o.kt)("h4",{id:"returns"},"Returns:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"None"),": This method does not return anything.")),(0,o.kt)("h4",{id:"usage-cases"},"Usage Cases:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# Perform a left rotation on node x\nred_black_tree.left_rotate(x)\n")),(0,o.kt)("h4",{id:"how-it-works"},"How it Works:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Assign the right child of node ",(0,o.kt)("inlineCode",{parentName:"li"},"x")," to node ",(0,o.kt)("inlineCode",{parentName:"li"},"y"),"."),(0,o.kt)("li",{parentName:"ol"},"Update the right child of node ",(0,o.kt)("inlineCode",{parentName:"li"},"x")," to be the left child of node ",(0,o.kt)("inlineCode",{parentName:"li"},"y"),"."),(0,o.kt)("li",{parentName:"ol"},"If the left child of node ",(0,o.kt)("inlineCode",{parentName:"li"},"y")," is not the NIL leaf (sentinel node), update its parent to be node ",(0,o.kt)("inlineCode",{parentName:"li"},"x"),"."),(0,o.kt)("li",{parentName:"ol"},"Update the parent of node ",(0,o.kt)("inlineCode",{parentName:"li"},"y")," to be the parent of node ",(0,o.kt)("inlineCode",{parentName:"li"},"x"),"."),(0,o.kt)("li",{parentName:"ol"},"If node ",(0,o.kt)("inlineCode",{parentName:"li"},"x")," is the root of the tree, update the root to be node ",(0,o.kt)("inlineCode",{parentName:"li"},"y"),"."),(0,o.kt)("li",{parentName:"ol"},"If node ",(0,o.kt)("inlineCode",{parentName:"li"},"x")," is the left child of its parent, update the left child of the parent to be node ",(0,o.kt)("inlineCode",{parentName:"li"},"y"),"."),(0,o.kt)("li",{parentName:"ol"},"Otherwise, update the right child of the parent to be node ",(0,o.kt)("inlineCode",{parentName:"li"},"y"),"."),(0,o.kt)("li",{parentName:"ol"},"Set the left child of node ",(0,o.kt)("inlineCode",{parentName:"li"},"y")," to be node ",(0,o.kt)("inlineCode",{parentName:"li"},"x"),"."),(0,o.kt)("li",{parentName:"ol"},"Set the parent of node ",(0,o.kt)("inlineCode",{parentName:"li"},"x")," to be node ",(0,o.kt)("inlineCode",{parentName:"li"},"y"),".")),(0,o.kt)("h4",{id:"dependencies"},"Dependencies:"),(0,o.kt)("p",null,"This method does not have any dependencies."))}f.isMDXComponent=!0}}]);