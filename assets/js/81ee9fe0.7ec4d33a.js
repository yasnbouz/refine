"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[36682],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var o=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=o.createContext({}),u=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=u(e.components);return o.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(t),m=i,f=p["".concat(l,".").concat(m)]||p[m]||c[m]||r;return t?o.createElement(f,a(a({ref:n},d),{},{components:t})):o.createElement(f,a({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,a=new Array(r);a[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<r;u++)a[u]=t[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},48073:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return m}});var o=t(87462),i=t(63366),r=(t(67294),t(3905)),a=t.p+"assets/images/custom-menu-e646c121ef9f97df3f3586ab5d819d8a.gif",s=t.p+"assets/images/custom-menu-logout-d76867c98429c579daf7c6b59118b451.gif",l=t.p+"assets/images/custom-menu-mobile-0954bdc2fd8cff79772e1d37dc9bbd0f.gif",u=["components"],d={id:"mui-custom-sider",title:"Custom Sider"},c=void 0,p={unversionedId:"ui-frameworks/mui/customization/mui-custom-sider",id:"ui-frameworks/mui/customization/mui-custom-sider",isDocsHomePage:!1,title:"Custom Sider",description:"You can create a custom ` component and use it either by passing it to ` or using a Custom Layout.",source:"@site/docs/ui-frameworks/mui/customization/sider.md",sourceDirName:"ui-frameworks/mui/customization",slug:"/ui-frameworks/mui/customization/mui-custom-sider",permalink:"/docs/ui-frameworks/mui/customization/mui-custom-sider",editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/ui-frameworks/mui/customization/sider.md",tags:[],version:"current",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1655468686,formattedLastUpdatedAt:"6/17/2022",frontMatter:{id:"mui-custom-sider",title:"Custom Sider"},sidebar:"someSidebar",previous:{title:"Custom Layout",permalink:"/docs/ui-frameworks/mui/customization/mui-custom-layout"},next:{title:"React Table",permalink:"/docs/packages/react-table"}},m=[{value:"Recreating the Default Sider Menu",id:"recreating-the-default-sider-menu",children:[{value:"Adding Logout Button",id:"adding-logout-button",children:[],level:3},{value:"Mobile View of Sider",id:"mobile-view-of-sider",children:[],level:3}],level:2}],f={toc:m};function h(e){var n=e.components,t=(0,i.Z)(e,u);return(0,r.kt)("wrapper",(0,o.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can create a custom ",(0,r.kt)("inlineCode",{parentName:"p"},"<Sider />")," component and use it either by passing it to ",(0,r.kt)("a",{parentName:"p",href:"/docs/core/components/refine-config"},(0,r.kt)("inlineCode",{parentName:"a"},"<Refine />"))," or using a ",(0,r.kt)("a",{parentName:"p",href:"/docs/ui-frameworks/mui/customization/mui-custom-layout"},"Custom Layout"),"."),(0,r.kt)("h2",{id:"recreating-the-default-sider-menu"},"Recreating the Default Sider Menu"),(0,r.kt)("p",null,"We will show you how to use ",(0,r.kt)("inlineCode",{parentName:"p"},"useMenu")," to create a custom sider menu that is identical to default sider menu."),(0,r.kt)("p",null,"First we define ",(0,r.kt)("inlineCode",{parentName:"p"},"<CustomMenu>"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/CustomMenu.tsx"',title:'"src/CustomMenu.tsx"'},'import React, { useState } from "react";\nimport {\n    CanAccess,\n    ITreeMenu,\n    useIsExistAuthentication,\n    useTitle,\n    useMenu,\n    useTranslate,\n    useRouterContext,\n} from "@pankod/refine-core";\nimport {\n    Box,\n    Drawer,\n    MuiList,\n    ListItemButton,\n    ListItemIcon,\n    ListItemText,\n    Collapse,\n    Tooltip,\n    Button,\n    Title as DefaultTitle,\n} from "@pankod/refine-mui";\nimport {\n    ListOutlined,\n    ExpandLess,\n    ExpandMore,\n    ChevronLeft,\n    ChevronRight,\n} from "@mui/icons-material";\n\nexport const CustomMenu: React.FC = () => {\n    const [collapsed, setCollapsed] = useState(false);\n    const [opened, setOpened] = useState(false);\n\n    const drawerWidth = () => {\n        if (collapsed) return 64;\n        return 200;\n    };\n\n    const t = useTranslate();\n    const { Link } = useRouterContext();\n\n    const { menuItems, selectedKey, defaultOpenKeys } = useMenu();\n    const isExistAuthentication = useIsExistAuthentication();\n    const Title = useTitle();\n\n    const [open, setOpen] = useState<{ [k: string]: any }>({});\n\n    const [open, setOpen] = useState<{ [k: string]: any }>({});\n\n    React.useEffect(() => {\n        setOpen((previousOpen) => {\n            const previousOpenKeys: string[] = Object.keys(previousOpen);\n            const uniqueKeys = new Set([\n                ...previousOpenKeys,\n                ...defaultOpenKeys,\n            ]);\n            const uniqueKeysRecord = Object.fromEntries(\n                Array.from(uniqueKeys.values()).map((key) => [key, true]),\n            );\n            return uniqueKeysRecord;\n        });\n    }, [defaultOpenKeys]);\n\n    const RenderToTitle = Title ?? DefaultTitle;\n\n    const handleClick = (key: string) => {\n        setOpen({ ...open, [key]: !open[key] });\n    };\n\n    const renderTreeView = (tree: ITreeMenu[], selectedKey: string) => {\n        return tree.map((item: ITreeMenu) => {\n            const { icon, label, route, name, children, parentName } = item;\n            const isOpen = open[route || ""] || false;\n\n            const isSelected = route === selectedKey;\n            const isNested = !(parentName === undefined);\n\n            if (children.length > 0) {\n                return (\n                    <div key={route}>\n                        <Tooltip\n                            title={label ?? name}\n                            placement="right"\n                            disableHoverListener={!collapsed}\n                            arrow\n                        >\n                            <ListItemButton\n                                onClick={() => {\n                                    if (collapsed) {\n                                        setCollapsed(false);\n                                        if (!isOpen) {\n                                            handleClick(route || "");\n                                        }\n                                    } else {\n                                        handleClick(route || "");\n                                    }\n                                }}\n                                sx={{\n                                    pl: isNested ? 4 : 2,\n                                    justifyContent: "center",\n                                    "&.Mui-selected": {\n                                        "&:hover": {\n                                            backgroundColor: "transparent",\n                                        },\n                                        backgroundColor: "transparent",\n                                    },\n                                }}\n                            >\n                                <ListItemIcon\n                                    sx={{\n                                        justifyContent: "center",\n                                        minWidth: 36,\n                                        color: "primary.contrastText",\n                                    }}\n                                >\n                                    {icon ?? <ListOutlined />}\n                                </ListItemIcon>\n                                <ListItemText\n                                    primary={label}\n                                    primaryTypographyProps={{\n                                        noWrap: true,\n                                        fontSize: "14px",\n                                        fontWeight: isSelected\n                                            ? "bold"\n                                            : "normal",\n                                    }}\n                                />\n                                {!collapsed &&\n                                    (isOpen ? <ExpandLess /> : <ExpandMore />)}\n                            </ListItemButton>\n                        </Tooltip>\n                        {!collapsed && (\n                            <Collapse\n                                in={open[route || ""]}\n                                timeout="auto"\n                                unmountOnExit\n                            >\n                                <MuiList component="div" disablePadding>\n                                    {renderTreeView(children, selectedKey)}\n                                </MuiList>\n                            </Collapse>\n                        )}\n                    </div>\n                );\n            }\n\n            return (\n                <CanAccess\n                    key={route}\n                    resource={name.toLowerCase()}\n                    action="list"\n                >\n                    <Tooltip\n                        title={label ?? name}\n                        placement="right"\n                        disableHoverListener={!collapsed}\n                        arrow\n                    >\n                        <ListItemButton\n                            component={Link}\n                            href={route}\n                            to={route}\n                            selected={isSelected}\n                            onClick={() => {\n                                setOpened(false);\n                            }}\n                            sx={{\n                                pl: isNested ? 4 : 2,\n                                py: isNested ? 1.25 : 1,\n                                justifyContent: "center",\n                                "&.Mui-selected": {\n                                    "&:hover": {\n                                        backgroundColor: "transparent",\n                                    },\n                                    backgroundColor: "transparent",\n                                },\n                            }}\n                        >\n                            <ListItemIcon\n                                sx={{\n                                    justifyContent: "center",\n                                    minWidth: 36,\n                                    color: "primary.contrastText",\n                                }}\n                            >\n                                {icon ?? <ListOutlined />}\n                            </ListItemIcon>\n                            <ListItemText\n                                primary={label}\n                                primaryTypographyProps={{\n                                    noWrap: true,\n                                    fontSize: "14px",\n                                    fontWeight: isSelected ? "bold" : "normal",\n                                }}\n                            />\n                        </ListItemButton>\n                    </Tooltip>\n                </CanAccess>\n            );\n        });\n    };\n\n    const drawer = (\n        <MuiList disablePadding sx={{ mt: 1, color: "primary.contrastText" }}>\n            {renderTreeView(menuItems, selectedKey)}\n        </MuiList>\n    );\n\n    return (\n        <>\n            <Box\n                sx={{\n                    width: { xs: drawerWidth() },\n                    display: {\n                        xs: "none",\n                        md: "block",\n                    },\n                    transition: "width 0.3s ease",\n                }}\n            />\n            <Box\n                component="nav"\n                sx={{\n                    position: "fixed",\n                    zIndex: 1101,\n                    width: { sm: drawerWidth() },\n                    display: "flex",\n                }}\n            >\n                <Drawer\n                    variant="permanent"\n                    PaperProps={{ elevation: 1 }}\n                    sx={{\n                        display: { xs: "none", md: "block" },\n                        "& .MuiDrawer-paper": {\n                            width: drawerWidth,\n                            bgcolor: "secondary.main",\n                            overflow: "hidden",\n                            transition:\n                                "width 200ms cubic-bezier(0.4, 0, 0.6, 1) 0ms",\n                        },\n                    }}\n                    open\n                >\n                    <Box\n                        sx={{\n                            height: 64,\n                            display: "flex",\n                            alignItems: "center",\n                            justifyContent: "center",\n                        }}\n                    >\n                        <RenderToTitle collapsed={collapsed} />\n                    </Box>\n                    <Box\n                        sx={{\n                            flexGrow: 1,\n                            overflowX: "hidden",\n                            overflowY: "auto",\n                        }}\n                    >\n                        // highlight-next-line\n                        {drawer}\n                    </Box>\n                    <Button\n                        sx={{\n                            background: "rgba(0,0,0,.5)",\n                            color: "primary.contrastText",\n                            textAlign: "center",\n                            borderRadius: 0,\n                            borderTop: "1px solid #ffffff1a",\n                        }}\n                        fullWidth\n                        size="large"\n                        onClick={() => setCollapsed((prev) => !prev)}\n                    >\n                        {collapsed ? <ChevronRight /> : <ChevronLeft />}\n                    </Button>\n                </Drawer>\n            </Box>\n        </>\n    );\n};\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useMenu")," hook is used to get style agnostic menu items. We render these items in the body of the sider. We create a recursive ",(0,r.kt)("inlineCode",{parentName:"p"},"renderTreeView")," function to create menu items from the list of resources passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine>"),". We get the ",(0,r.kt)("inlineCode",{parentName:"p"},"Title")," component with the ",(0,r.kt)("inlineCode",{parentName:"p"},"useTitle")," hook."),(0,r.kt)("br",null),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you want to create a multi-level menu, you can take a look at this ",(0,r.kt)("a",{parentName:"p",href:"/docs/examples/multi-level-menu/multi-level-menu/"},(0,r.kt)("inlineCode",{parentName:"a"},"multi-level menu"))," example and also ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides-and-concepts/multi-level-menu/multi-level-menu/"},(0,r.kt)("inlineCode",{parentName:"a"},"here"))," is the guide."))),(0,r.kt)("p",null,"We can override the default sider and show the custom menu we implemented in its place by passing a custom component to ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine>"),"s ",(0,r.kt)("inlineCode",{parentName:"p"},"Sider")," prop:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine } from "@pankod/refine-core";\nimport dataProvider from "@pankod/refine-simple-rest";\n\nimport { PostList } from "pages/posts";\n\n// highlight-next-line\nimport { CustomMenu } from "./CustomMenu";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            dataProvider={dataProvider(API_URL)}\n            // highlight-next-line\n            Sider={CustomMenu\n            resources={[{ name: "posts", list: PostList }]}\n        />\n    );\n};\n\nexport default App;\n')),(0,r.kt)("div",{classname:"img-container"},(0,r.kt)("div",{classname:"window"},(0,r.kt)("div",{classname:"control red"}),(0,r.kt)("div",{classname:"control orange"}),(0,r.kt)("div",{classname:"control green"})),(0,r.kt)("img",{src:a,alt:"Custom Menu"})),(0,r.kt)("h3",{id:"adding-logout-button"},"Adding Logout Button"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"useLogout")," hook allows us to add a Logout button to our menu if we have an authentication provider. When the Logout button is clicked, the ",(0,r.kt)("inlineCode",{parentName:"p"},"autProvider")," will be invoked and the user will be logged out. This is a convenient way to provide a Logout button for our users without having to implement the logic ourselves."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/CustomMenu.tsx"',title:'"src/CustomMenu.tsx"'},'// imports\n\n    ...\n\nexport const CustomSider: React.FC = () => {\n    import {\n        ...\n        // highlight-next-line\n        useLogout,\n        ...\n    } from "@pankod/refine-core";\n    // highlight-next-line\n    const { mutate: logout } = useLogout();\n\n    ...\n\n    const drawer = (\n        <MuiList disablePadding sx={{ mt: 1, color: "primary.contrastText" }}>\n            {renderTreeView(menuItems, selectedKey)}\n            // highlight-start\n            {isExistAuthentication && (\n                <Tooltip\n                    title={t("buttons.logout", "Logout")}\n                    placement="right"\n                    disableHoverListener={!collapsed}\n                    arrow\n                >\n                    <ListItemButton\n                        key="logout"\n                        // highlight-next-line\n                        onClick={() => logout()}\n                        sx={{ justifyContent: "center" }}\n                    >\n                        <ListItemIcon\n                            sx={{\n                                justifyContent: "center",\n                                minWidth: 36,\n                                color: "primary.contrastText",\n                            }}\n                        >\n                            <Logout />\n                        </ListItemIcon>\n                        <ListItemText\n                            primary={t("buttons.logout", "Logout")}\n                            primaryTypographyProps={{\n                                noWrap: true,\n                                fontSize: "14px",\n                            }}\n                        />\n                    </ListItemButton>\n                </Tooltip>\n            )}\n            // highlight-end\n        </MuiList>\n    );\n    ...\n};\n')),(0,r.kt)("div",{classname:"img-container"},(0,r.kt)("div",{classname:"window"},(0,r.kt)("div",{classname:"control red"}),(0,r.kt)("div",{classname:"control orange"}),(0,r.kt)("div",{classname:"control green"})),(0,r.kt)("img",{src:s,alt:"Custom Menu Logout"})),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"mobile-view-of-sider"},"Mobile View of Sider"),(0,r.kt)("p",null,"By adding another drawer that opens on mobile, we can make the user experience even better!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/CustomMenu.tsx"',title:'"src/CustomMenu.tsx"'},'// imports\n...\n\nexport const CustomSider: React.FC = () => {\n    ...\n    return (\n        <>\n            <Box\n                sx={{\n                    width: { xs: drawerWidth() },\n                    display: {\n                        xs: "none",\n                        md: "block",\n                    },\n                    transition: "width 0.3s ease",\n                }}\n            />\n            <Box\n                component="nav"\n                sx={{\n                    position: "fixed",\n                    zIndex: 1101,\n                    width: { sm: drawerWidth() },\n                    display: "flex",\n                }}\n            >\n                // highlight-start\n                <Drawer\n                    variant="temporary"\n                    open={opened}\n                    onClose={() => setOpened(false)}\n                    ModalProps={{\n                        keepMounted: true, // Better open performance on mobile.\n                    }}\n                    sx={{\n                        display: { sm: "block", md: "none" },\n                        "& .MuiDrawer-paper": {\n                            width: 256,\n                            bgcolor: "secondary.main",\n                        },\n                    }}\n                >\n                    <Box\n                        sx={{\n                            height: 64,\n                            display: "flex",\n                            alignItems: "center",\n                            justifyContent: "center",\n                        }}\n                    >\n                        <RenderToTitle collapsed={false} />\n                    </Box>\n                    {drawer}\n                </Drawer>\n                // highlight-end\n                <Drawer\n                    variant="permanent"\n                    PaperProps={{ elevation: 1 }}\n                    sx={{\n                        display: { xs: "none", md: "block" },\n                        "& .MuiDrawer-paper": {\n                            width: drawerWidth,\n                            bgcolor: "secondary.main",\n                            overflow: "hidden",\n                            transition:\n                                "width 200ms cubic-bezier(0.4, 0, 0.6, 1) 0ms",\n                        },\n                    }}\n                    open\n                >\n                    <Box\n                        sx={{\n                            height: 64,\n                            display: "flex",\n                            alignItems: "center",\n                            justifyContent: "center",\n                        }}\n                    >\n                        <RenderToTitle collapsed={collapsed} />\n                    </Box>\n                    <Box\n                        sx={{\n                            flexGrow: 1,\n                            overflowX: "hidden",\n                            overflowY: "auto",\n                        }}\n                    >\n                        {drawer}\n                    </Box>\n                    <Button\n                        sx={{\n                            background: "rgba(0,0,0,.5)",\n                            color: "primary.contrastText",\n                            textAlign: "center",\n                            borderRadius: 0,\n                            borderTop: "1px solid #ffffff1a",\n                        }}\n                        fullWidth\n                        size="large"\n                        onClick={() => setCollapsed((prev) => !prev)}\n                    >\n                        {collapsed ? <ChevronRight /> : <ChevronLeft />}\n                    </Button>\n                </Drawer>\n                // highlight-start\n                <Box\n                    sx={{\n                        display: { xs: "block", md: "none" },\n                        position: "fixed",\n                        top: "64px",\n                        left: "0px",\n                        borderRadius: "0 6px 6px 0",\n                        bgcolor: "secondary.main",\n                        zIndex: 1199,\n                        width: "36px",\n                    }}\n                >\n                    <IconButton\n                        sx={{ color: "#fff", width: "36px" }}\n                        onClick={() => setOpened((prev) => !prev)}\n                    >\n                        <MenuRounded />\n                    </IconButton>\n                </Box>\n                // highlight-end\n            </Box>\n        </>\n    );\n};\n')),(0,r.kt)("div",null,(0,r.kt)("img",{src:l,alt:"Custom Mobile Menu"})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useLogout")," provides the logout functionality."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"useLogout")," hook can only be used if the ",(0,r.kt)("inlineCode",{parentName:"p"},"authProvider")," is provided.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"/docs/core/providers/auth-provider"},"Refer to authProvider docs for more detailed information. ","\u2192"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"/docs/core/hooks/auth/useLogout"},"Refer to useLogout docs for more detailed information. ","\u2192")))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can further customize the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Sider>")," and its appearance.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/layout/#Layout.Sider"},"Refer to Ant Design docs for more detailed information about Sider. ","\u2192")))))}h.isMDXComponent=!0}}]);