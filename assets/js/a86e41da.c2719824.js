"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[35988],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>u});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=s(n),u=o,k=d["".concat(c,".").concat(u)]||d[u]||m[u]||r;return n?a.createElement(k,i(i({ref:t},l),{},{components:n})):a.createElement(k,i({ref:t},l))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},15569:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var a=n(87462),o=(n(67294),n(3905));const r=n.p+"assets/images/refine-kbar-example-42e8532ff247cf679f50b41922a936e0.gif",i={id:"command-palette",title:"Command Palette"},p=void 0,c={unversionedId:"packages/documentation/command-palette",id:"packages/documentation/command-palette",title:"Command Palette",description:"refine supports the command palette feature and use the",source:"@site/docs/packages/documentation/command-palette.md",sourceDirName:"packages/documentation",slug:"/packages/documentation/command-palette",permalink:"/docs/packages/documentation/command-palette",draft:!1,editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/packages/documentation/command-palette.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1666101725,formattedLastUpdatedAt:"Oct 18, 2022",frontMatter:{id:"command-palette",title:"Command Palette"},sidebar:"someSidebar",previous:{title:"Documentation",permalink:"/docs/packages/documentation"},next:{title:"React Table",permalink:"/docs/packages/documentation/react-table"}},s={},l=[{value:"Installation",id:"installation",level:2},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Access Control",id:"access-control",level:2},{value:"Actions",id:"actions",level:2},{value:"Custom Actions",id:"custom-actions",level:2},{value:"Live StackBlitz Example",id:"live-stackblitz-example",level:2}],m={toc:l};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"refine")," supports the command palette feature and use the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/timc1/kbar"},(0,o.kt)("strong",{parentName:"a"},"kbar")),". ",(0,o.kt)("strong",{parentName:"p"},"kbar")," is a fully extensible ",(0,o.kt)("inlineCode",{parentName:"p"},"cmd")," + ",(0,o.kt)("inlineCode",{parentName:"p"},"k"),"(MacOS) or ",(0,o.kt)("inlineCode",{parentName:"p"},"ctrl")," + ",(0,o.kt)("inlineCode",{parentName:"p"},"k"),"(Linux/Windows) interface for your site."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Install the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine/tree/master/packages/kbar"},"@pankod/refine-kbar")," library."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @pankod/refine-kbar\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If your are going to use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pankod/superplate"},(0,o.kt)("inlineCode",{parentName:"a"},"superplate"))," to create new project, you can select the ",(0,o.kt)("inlineCode",{parentName:"p"},"kbar")," as a command palette.")),(0,o.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,o.kt)("p",null,"First of all, you need to import the ",(0,o.kt)("inlineCode",{parentName:"p"},"@pankod/refine-kbar")," library and we will use ",(0,o.kt)("inlineCode",{parentName:"p"},"RefineKbarProvider")," to wrap the whole application."),(0,o.kt)("p",null,"After that, we should create the ",(0,o.kt)("inlineCode",{parentName:"p"},"<OffLayoutArea/>")," component for the Refine component and use the ",(0,o.kt)("inlineCode",{parentName:"p"},"refine-kbar")," command palette in ",(0,o.kt)("inlineCode",{parentName:"p"},"<OffLayoutArea>"),". We have the ",(0,o.kt)("inlineCode",{parentName:"p"},"<RefineKbar>")," component to provide the command palette to the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine>")," component."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'tile="src/App.tsx"',tile:'"src/App.tsx"'},'import { Refine } from "@pankod/refine-core";\n// highlight-next-line\nimport { RefineKbarProvider } from "@pankod/refine-kbar";\n\nimport { PostList, PostCreate, PostEdit, PostShow } from "pages/posts";\nimport {\n    CategoriesList,\n    CategoriesCreate,\n    CategoriesEdit,\n} from "pages/categories";\n\n// highlight-start\nexport const OffLayoutArea: React.FC = () => {\n    return <RefineKbar />;\n};\n// highlight-end\n\nconst App: React.FC = () => {\n    return (\n        <RefineKbarProvider>\n            <Refine\n                resources={[\n                    {\n                        name: "posts",\n                        list: PostList,\n                        create: PostCreate,\n                        edit: PostEdit,\n                        show: PostShow,\n                        icon: <Icons.StarOutlined />,\n                        canDelete: true,\n                    },\n                    {\n                        name: "categories",\n                        list: CategoriesList,\n                        create: CategoriesCreate,\n                        edit: CategoriesEdit,\n                        canDelete: true,\n                    },\n                ]}\n                //highlight-next-line\n                OffLayoutArea={OffLayoutArea}\n            />\n        </RefineKbarProvider>\n    );\n};\n')),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:r,alt:"Refine Kbar Example"})),(0,o.kt)("br",null),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("em",{parentName:"p"},"Why do we need to add ",(0,o.kt)("inlineCode",{parentName:"em"},"<OffLayoutArea>")," to the ",(0,o.kt)("inlineCode",{parentName:"em"},"<Refine>")," component?"),(0,o.kt)("br",null),"\nBecause we need to reach the ",(0,o.kt)("inlineCode",{parentName:"p"},"resources")," property of the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine>")," component.")),(0,o.kt)("h2",{id:"access-control"},"Access Control"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"refine-kbar")," respects the access control settings of your App. To learn more about access control, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://refine.dev/docs/core/providers/accessControl-provider/"},"Access Control Provider")," section of the documentation. Also, we can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"canDelete")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"resources")," to check the delete accessibility of the command palette.",(0,o.kt)("br",null),"\nFor more information check out the source code of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine/tree/master/packages/kbar"},(0,o.kt)("inlineCode",{parentName:"a"},"refine-kbar"))," package"),(0,o.kt)("h2",{id:"actions"},"Actions"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"refine-kbar")," uses your resources to create default actions. Which includes; ",(0,o.kt)("inlineCode",{parentName:"p"},"list"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"create"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"edit"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"show")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"delete"),". It will hide the current action of the page you are in."),(0,o.kt)("h2",{id:"custom-actions"},"Custom Actions"),(0,o.kt)("p",null,"If we want to add custom actions to the command palette, we can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"createAction")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"useRegisterActions")," of the ",(0,o.kt)("inlineCode",{parentName:"p"},"refine-kbar"),".\ncheck the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine/blob/master/examples/fineFoods/admin/mui/src/hooks/useOrderCustomKbarActions/index.tsx"},(0,o.kt)("inlineCode",{parentName:"a"},"refine-finefoods"))," example. Also you can find more information about actions in the ",(0,o.kt)("a",{parentName:"p",href:"https://kbar.vercel.app/docs/concepts/actions"},(0,o.kt)("inlineCode",{parentName:"a"},"kbar"))," package."),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"createAction")," to create a new action and use the ",(0,o.kt)("inlineCode",{parentName:"p"},"useRegisterActions")," to register the action to the command palette."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="Custom action example"',title:'"Custom',action:!0,'example"':!0},'import { createAction, useRegisterActions } from "@pankod/refine-kbar";\n\nconst customAction = createAction({\n    name: "my custom action",\n    section: "custom-actions",\n    perform: () => {\n        console.log("onSelect my custom action");\n    },\n    priority: Priority.HIGH,\n});\n\nuseRegisterActions(customAction);\n')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"refine-kbar")," export the ",(0,o.kt)("inlineCode",{parentName:"p"},"kbar"),". You can use all ",(0,o.kt)("inlineCode",{parentName:"p"},"kbar")," features.")),(0,o.kt)("h2",{id:"live-stackblitz-example"},"Live StackBlitz Example"),(0,o.kt)("iframe",{loading:"lazy",src:"https://stackblitz.com//github/pankod/refine/tree/master/examples/commandPalette/kbar?embed=1&view=preview&theme=dark&preset=node&ctl=1",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"refine-kbar-example"}))}d.isMDXComponent=!0}}]);