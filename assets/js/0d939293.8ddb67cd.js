"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6914],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),d=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=d(e.components);return i.createElement(s.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(t),u=a,k=p["".concat(s,".").concat(u)]||p[u]||m[u]||r;return t?i.createElement(k,o(o({ref:n},c),{},{components:t})):i.createElement(k,o({ref:n},c))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<r;d++)o[d]=t[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6453:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=t(7462),a=(t(7294),t(3905));const r={},o=void 0,l={unversionedId:"docs/main/main",id:"docs/main/main",title:"main",description:"main",source:"@site/docs/docs/main/main.md",sourceDirName:"docs/main",slug:"/docs/main/",permalink:"/Graph/docs/main/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"d_Edge",permalink:"/Graph/docs/Edge/d_Edge"},next:{title:"Enemy",permalink:"/Graph/docs/main/Enemy"}},s={},d=[{value:"<code>main</code>",id:"main",level:2},{value:"Description:",id:"description",level:4},{value:"Important info:",id:"important-info",level:4},{value:"Usage :",id:"usage-",level:4},{value:"How it Works:",id:"how-it-works",level:4},{value:"Dependencies:",id:"dependencies",level:4}],c={toc:d},p="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"main"},(0,a.kt)("inlineCode",{parentName:"h2"},"main")),(0,a.kt)("h4",{id:"description"},"Description:"),(0,a.kt)("p",null,"This code snippet performs a series of actions related to connecting and interacting with users in a social network. It creates instances of the ",(0,a.kt)("inlineCode",{parentName:"p"},"User")," class, establishes connections between users using instances of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Friend")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Enemy")," classes, and performs various checks to verify the connections between users."),(0,a.kt)("h4",{id:"important-info"},"Important info:"),(0,a.kt)("p",null,"This code snippet demonstrates the functionality of the ",(0,a.kt)("inlineCode",{parentName:"p"},"User")," class and its methods for connecting and interacting with other users."),(0,a.kt)("h4",{id:"usage-"},"Usage :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This code snippet is used to demonstrate the functionality of the ",(0,a.kt)("inlineCode",{parentName:"li"},"User")," class and its methods."),(0,a.kt)("li",{parentName:"ul"},"This code snippet can be used as a reference for implementing similar user connection features in a social networking application."),(0,a.kt)("li",{parentName:"ul"},"This code snippet can be used for testing and verifying the correctness of the ",(0,a.kt)("inlineCode",{parentName:"li"},"User")," class and its methods.")),(0,a.kt)("h4",{id:"how-it-works"},"How it Works:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Two instances of the ",(0,a.kt)("inlineCode",{parentName:"li"},"User")," class, ",(0,a.kt)("inlineCode",{parentName:"li"},"user1")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"user2"),', are created with the names "Paco" and "Juan" respectively.'),(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"print")," function is used to display the details of ",(0,a.kt)("inlineCode",{parentName:"li"},"user1")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"user2"),"."),(0,a.kt)("li",{parentName:"ol"},"An instance of the ",(0,a.kt)("inlineCode",{parentName:"li"},"Friend")," class, ",(0,a.kt)("inlineCode",{parentName:"li"},"friend"),", is created."),(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"connect_right")," method of ",(0,a.kt)("inlineCode",{parentName:"li"},"user1")," is called, passing ",(0,a.kt)("inlineCode",{parentName:"li"},"user2")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"friend")," as arguments, to establish a connection between ",(0,a.kt)("inlineCode",{parentName:"li"},"user1")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"user2"),"."),(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"is_connected")," method is used to check if ",(0,a.kt)("inlineCode",{parentName:"li"},"user1")," is connected to ",(0,a.kt)("inlineCode",{parentName:"li"},"user2")," and if ",(0,a.kt)("inlineCode",{parentName:"li"},"user2")," is connected to ",(0,a.kt)("inlineCode",{parentName:"li"},"user1"),". The results are printed."),(0,a.kt)("li",{parentName:"ol"},"Two additional instances of the ",(0,a.kt)("inlineCode",{parentName:"li"},"User")," class, ",(0,a.kt)("inlineCode",{parentName:"li"},"user3")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"user4"),', are created with the names "Paco" and "Iniesta" respectively.'),(0,a.kt)("li",{parentName:"ol"},"An instance of the ",(0,a.kt)("inlineCode",{parentName:"li"},"Enemy")," class, ",(0,a.kt)("inlineCode",{parentName:"li"},"enemy"),", is created."),(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"connect")," method of ",(0,a.kt)("inlineCode",{parentName:"li"},"user3")," is called multiple times, passing ",(0,a.kt)("inlineCode",{parentName:"li"},"user4"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"user3"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"user2")," as arguments, along with ",(0,a.kt)("inlineCode",{parentName:"li"},"friend")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"enemy")," instances, to establish various connections between users."),(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"is_connected")," method is used to check the connections between ",(0,a.kt)("inlineCode",{parentName:"li"},"user3"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"user4"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"user2"),". The results are printed."),(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"is_connected_by")," method is used to check if ",(0,a.kt)("inlineCode",{parentName:"li"},"user1")," is connected to ",(0,a.kt)("inlineCode",{parentName:"li"},"user2")," by a ",(0,a.kt)("inlineCode",{parentName:"li"},"Friend")," or an ",(0,a.kt)("inlineCode",{parentName:"li"},"Enemy"),". The results are printed."),(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"connections")," method is called on ",(0,a.kt)("inlineCode",{parentName:"li"},"user3")," to retrieve a dictionary of all the users connected to ",(0,a.kt)("inlineCode",{parentName:"li"},"user3")," and their respective connections. The dictionary is then printed."),(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"connections_by")," method is called on ",(0,a.kt)("inlineCode",{parentName:"li"},"user3")," to retrieve a list of all the users connected to ",(0,a.kt)("inlineCode",{parentName:"li"},"user3")," by a ",(0,a.kt)("inlineCode",{parentName:"li"},"Friend"),". The list is then printed.")),(0,a.kt)("h4",{id:"dependencies"},"Dependencies:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"User"),": Represents a user in a social network."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Friend"),": Represents a friend connection between users."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Enemy"),": Represents an enemy connection between users.")))}m.isMDXComponent=!0}}]);