(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8778:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./layout/context/layoutcontext.js


const LayoutContext = /*#__PURE__*/ external_react_default().createContext();
const LayoutProvider = (props)=>{
    const [layoutConfig, setLayoutConfig] = (0,external_react_.useState)({
        ripple: false,
        inputStyle: "outlined",
        menuMode: "overlay",
        colorScheme: "light",
        theme: "lara-light-indigo",
        scale: 14
    });
    const [layoutState, setLayoutState] = (0,external_react_.useState)({
        staticMenuDesktopInactive: false,
        overlayMenuActive: false,
        profileSidebarVisible: false,
        configSidebarVisible: false,
        staticMenuMobileActive: false,
        menuHoverActive: false
    });
    const onMenuToggle = ()=>{
        if (isOverlay()) {
            setLayoutState((prevLayoutState)=>({
                    ...prevLayoutState,
                    overlayMenuActive: !prevLayoutState.overlayMenuActive
                }));
        }
        if (isDesktop()) {
            setLayoutState((prevLayoutState)=>({
                    ...prevLayoutState,
                    staticMenuDesktopInactive: !prevLayoutState.staticMenuDesktopInactive
                }));
        } else {
            setLayoutState((prevLayoutState)=>({
                    ...prevLayoutState,
                    staticMenuMobileActive: !prevLayoutState.staticMenuMobileActive
                }));
        }
    };
    const showProfileSidebar = ()=>{
        setLayoutState((prevLayoutState)=>({
                ...prevLayoutState,
                profileSidebarVisible: !prevLayoutState.profileSidebarVisible
            }));
    };
    const isOverlay = ()=>{
        return layoutConfig.menuMode === "overlay";
    };
    const isDesktop = ()=>{
        return window.innerWidth > 991;
    };
    const value = {
        layoutConfig,
        setLayoutConfig,
        layoutState,
        setLayoutState,
        onMenuToggle,
        showProfileSidebar
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(LayoutContext.Provider, {
        value: value,
        children: props.children
    });
};

// EXTERNAL MODULE: external "next/config"
var config_ = __webpack_require__(4558);
var config_default = /*#__PURE__*/__webpack_require__.n(config_);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: external "primereact/hooks"
const hooks_namespaceObject = require("primereact/hooks");
;// CONCATENATED MODULE: external "primereact/utils"
const utils_namespaceObject = require("primereact/utils");
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./contexts/MirrorContext.js
var MirrorContext = __webpack_require__(1285);
;// CONCATENATED MODULE: ./layout/AppTopbar.js








const AppTopbar = /*#__PURE__*/ (0,external_react_.forwardRef)((props, ref)=>{
    const { layoutConfig , layoutState , onMenuToggle , showProfileSidebar  } = (0,external_react_.useContext)(LayoutContext);
    const { mqttConnected  } = (0,external_react_.useContext)(MirrorContext/* MirrorContext */.N);
    const menubuttonRef = (0,external_react_.useRef)(null);
    const topbarmenuRef = (0,external_react_.useRef)(null);
    const topbarmenubuttonRef = (0,external_react_.useRef)(null);
    const contextPath = config_default()().publicRuntimeConfig.contextPath;
    (0,external_react_.useImperativeHandle)(ref, ()=>({
            menubutton: menubuttonRef.current,
            topbarmenu: topbarmenuRef.current,
            topbarmenubutton: topbarmenubuttonRef.current
        }));
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            style: {
                textAlign: "center"
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                className: "pi pi-circle-fill",
                style: {
                    color: mqttConnected ? "#C8E6C9" : "#C63737"
                }
            })
        })
    });
});
/* harmony default export */ const layout_AppTopbar = (AppTopbar);

;// CONCATENATED MODULE: external "primereact/api"
const api_namespaceObject = require("primereact/api");
var api_default = /*#__PURE__*/__webpack_require__.n(api_namespaceObject);
;// CONCATENATED MODULE: ./layout/layout.js










const Layout = (props)=>{
    const { layoutConfig , layoutState , setLayoutState  } = (0,external_react_.useContext)(LayoutContext);
    const topbarRef = (0,external_react_.useRef)(null);
    const sidebarRef = (0,external_react_.useRef)(null);
    const contextPath = config_default()().publicRuntimeConfig.contextPath;
    const router = (0,router_namespaceObject.useRouter)();
    const [bindMenuOutsideClickListener, unbindMenuOutsideClickListener] = (0,hooks_namespaceObject.useEventListener)({
        type: "click",
        listener: (event)=>{
            const isOutsideClicked = !(sidebarRef.current.isSameNode(event.target) || sidebarRef.current.contains(event.target) || topbarRef.current.menubutton.isSameNode(event.target) || topbarRef.current.menubutton.contains(event.target));
            if (isOutsideClicked) {
                hideMenu();
            }
        }
    });
    const hideMenu = ()=>{
        setLayoutState((prevLayoutState)=>({
                ...prevLayoutState,
                overlayMenuActive: false,
                staticMenuMobileActive: false,
                menuHoverActive: false
            }));
        unbindMenuOutsideClickListener();
        unblockBodyScroll();
    };
    const hideProfileMenu = ()=>{
        setLayoutState((prevLayoutState)=>({
                ...prevLayoutState,
                profileSidebarVisible: false
            }));
    //unbindProfileMenuOutsideClickListener();
    };
    const blockBodyScroll = ()=>{
        utils_namespaceObject.DomHandler.addClass("blocked-scroll");
    };
    const unblockBodyScroll = ()=>{
        utils_namespaceObject.DomHandler.removeClass("blocked-scroll");
    };
    (0,external_react_.useEffect)(()=>{
        if (layoutState.overlayMenuActive || layoutState.staticMenuMobileActive) {
            bindMenuOutsideClickListener();
        }
        layoutState.staticMenuMobileActive && blockBodyScroll();
    }, [
        layoutState.overlayMenuActive,
        layoutState.staticMenuMobileActive
    ]);
    (0,external_react_.useEffect)(()=>{
        if (layoutState.profileSidebarVisible) {
            bindProfileMenuOutsideClickListener();
        }
    }, [
        layoutState.profileSidebarVisible
    ]);
    (0,external_react_.useEffect)(()=>{
        router.events.on("routeChangeComplete", ()=>{
            hideMenu();
            hideProfileMenu();
        });
    }, []);
    (api_default()).ripple = true;
    (0,hooks_namespaceObject.useUnmountEffect)(()=>{
        unbindMenuOutsideClickListener();
    //unbindProfileMenuOutsideClickListener();
    });
    const containerClass = (0,utils_namespaceObject.classNames)("layout-wrapper", {
        "layout-theme-light": layoutConfig.colorScheme === "light",
        "layout-theme-dark": layoutConfig.colorScheme === "dark",
        "layout-overlay": layoutConfig.menuMode === "overlay",
        "layout-static": layoutConfig.menuMode === "static",
        "layout-static-inactive": layoutState.staticMenuDesktopInactive && layoutConfig.menuMode === "static",
        "layout-overlay-active": layoutState.overlayMenuActive,
        "layout-mobile-active": layoutState.staticMenuMobileActive,
        "p-input-filled": layoutConfig.inputStyle === "filled",
        "p-ripple-disabled": !layoutConfig.ripple
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Witchroom Controller2"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        charSet: "UTF-8"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "The ultimate collection of design-agnostic, flexible and accessible React UI Components."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "robots",
                        content: "index, follow"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1, width=device-width"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:type",
                        content: "website"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:title",
                        content: "Sakai by PrimeReact | Free Admin Template for NextJS"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:url",
                        content: "https://www.primefaces.org/sakai-react"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:description",
                        content: "The ultimate collection of design-agnostic, flexible and accessible React UI Components."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:image",
                        content: "https://www.primefaces.org/static/social/sakai-nextjs.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:ttl",
                        content: "604800"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: `${contextPath}/favicon.ico`,
                        type: "image/x-icon"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: containerClass,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(layout_AppTopbar, {
                        ref: topbarRef
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "layout-main-container",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "layout-main",
                            children: props.children
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "layout-mask"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const layout = (Layout);

// EXTERNAL MODULE: ./node_modules/primereact/resources/primereact.css
var primereact = __webpack_require__(1909);
// EXTERNAL MODULE: ./node_modules/primeflex/primeflex.css
var primeflex = __webpack_require__(4723);
// EXTERNAL MODULE: ./node_modules/primeicons/primeicons.css
var primeicons = __webpack_require__(3248);
// EXTERNAL MODULE: ./styles/layout/layout.scss
var layout_layout = __webpack_require__(5895);
// EXTERNAL MODULE: ./styles/demo/Demos.scss
var Demos = __webpack_require__(9267);
;// CONCATENATED MODULE: ./pages/_app.js










function MyApp({ Component , pageProps  }) {
    if (Component.getLayout) {
        return /*#__PURE__*/ jsx_runtime_.jsx(MirrorContext/* MirrorProvider */.f, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(LayoutProvider, {
                children: Component.getLayout(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                }))
            })
        });
    } else {
        return /*#__PURE__*/ jsx_runtime_.jsx(MirrorContext/* MirrorProvider */.f, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(LayoutProvider, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(layout, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                        ...pageProps
                    })
                })
            })
        });
    }
}


/***/ }),

/***/ 4723:
/***/ (() => {



/***/ }),

/***/ 3248:
/***/ (() => {



/***/ }),

/***/ 1909:
/***/ (() => {



/***/ }),

/***/ 9267:
/***/ (() => {



/***/ }),

/***/ 5895:
/***/ (() => {



/***/ }),

/***/ 6517:
/***/ ((module) => {

"use strict";
module.exports = require("lodash");

/***/ }),

/***/ 4558:
/***/ ((module) => {

"use strict";
module.exports = require("next/config");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,285], () => (__webpack_exec__(8778)));
module.exports = __webpack_exports__;

})();