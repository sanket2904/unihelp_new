(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_style_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/style.module.css */ "./styles/style.module.css");
/* harmony import */ var _styles_style_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "/home/sanket2904/unihelp_new/pages/index.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const FounderPage = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => __webpack_require__.e(/*! import() */ "components_founderPage_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ../components/founderPage */ "./components/founderPage.jsx")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ../components/founderPage */ "./components/founderPage.jsx")],
    modules: ["index.jsx -> " + "../components/founderPage"]
  }
});
const Top = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => __webpack_require__.e(/*! import() */ "components_top_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ../components/top */ "./components/top.jsx")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ../components/top */ "./components/top.jsx")],
    modules: ["index.jsx -> " + "../components/top"]
  }
});
function Home() {
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    document.title = "Unihelp";
  });
  let {
    0: arr,
    1: setArr
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  let {
    0: nav,
    1: setNav
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    let data = axios__WEBPACK_IMPORTED_MODULE_4___default().get("/api/addFeature").then(async response => {
      await setArr(response.data);
    });
  }, []);
  let {
    0: form,
    1: setForm
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    name: "",
    email: "",
    number: "",
    country: ""
  });
  const founderData = [{
    name: 'Raj Garg',
    Role: 'Co-Founder',
    imgLink: '/api/images/raj',
    twitterLink: "https://twitter.com/rjgarg98",
    linkedinLink: "https://www.linkedin.com/in/raj-garg-74a07b1b5"
  }, {
    name: "Devansh Bansal",
    Role: 'Co-Founder',
    imgLink: '/api/images/devash',
    twitterLink: "https://twitter.com/devansh225?s=09",
    linkedinLink: "https://www.linkedin.com/in/devanshsbansal"
  }];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Top, {
      nav: nav,
      setNav: setNav
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }, this), nav && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().navbar),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: "Sign in"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().contentFirst),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),
        children: "We help you  Settle"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().p),
        children: "We are here to Settle you right  in and turn your new house  across seas into your home. "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().button),
        children: "Get Started"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: "/api/images/ill",
        className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().mainill),
        layout: "fill"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().sec2),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: "Hi,We are UNIHELP"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "We cover all the bases that will spell out the Uni life that you have always wanted. Say goodbye to the hassles of packing the essentials, from bedding to stationery to food, everything you need to kickstart a new phase of your life away from home, we got it all under one roof!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().card),
        children: [arr.map((element, key) => {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().card1),
            style: {
              background: '#fff'
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().miniCard),
              style: element.myStyle,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().content),
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                  src: element.element,
                  alt: ""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 89,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                  children: element.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().cardList),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                style: {
                  padding: '15px 0 '
                },
                children: "Title"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "#",
                className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().cardLink),
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().innerContent),
                  children: element.data.map((val, key) => {
                    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().listSectionLeft),
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                          children: key + 1
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 104,
                          columnNumber: 57
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 103,
                        columnNumber: 53
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().listSectionRight),
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                          className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().sectionTitle),
                          children: val.title
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 107,
                          columnNumber: 57
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                          className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().sectionDescription),
                          children: val.description
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 108,
                          columnNumber: 57
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 106,
                        columnNumber: 57
                      }, this)]
                    }, void 0, true);
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 97,
                  columnNumber: 41
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 37
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 29
            }, this)]
          }, element.key, true, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 25
          }, this);
        }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().card1),
          style: {
            background: "#fff"
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
            href: "/contact",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().miniCard),
              style: {
                background: "linear-gradient(209.21deg, rgb(64, 141, 213) 13.57%, rgb(99, 11, 140) 98.38%)",
                borderRadius: "25px"
              },
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().content),
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                  src: "/api/images/Forms"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 125,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                  children: "Book a free consultation"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 126,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().cardList),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
              action: "",
              method: "post",
              style: {
                padding: "20px",
                textAlign: "center"
              },
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                type: "text",
                placeholder: "Name*",
                value: form.name,
                onChange: e => setForm(_objectSpread(_objectSpread({}, form), {}, {
                  name: e.target.value
                }))
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 133,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                type: "text",
                placeholder: "Email*",
                value: form.email,
                onChange: e => setForm(_objectSpread(_objectSpread({}, form), {}, {
                  email: e.target.value
                }))
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 134,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                type: "text",
                placeholder: "Phone Number*",
                value: form.number,
                onChange: e => setForm(_objectSpread(_objectSpread({}, form), {}, {
                  number: e.target.value
                }))
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 135,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                type: "text",
                placeholder: "Country*",
                value: form.country,
                onChange: e => setForm(_objectSpread(_objectSpread({}, form), {}, {
                  country: e.target.value
                }))
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 136,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                type: "button",
                value: "Submit",
                className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().button),
                style: {
                  maxWidth: "200px"
                },
                onSubmit: e => {
                  axios__WEBPACK_IMPORTED_MODULE_4___default().post("/api/sendmail", form).then(res => console.log(res));
                },
                onClick: e => {
                  axios__WEBPACK_IMPORTED_MODULE_4___default().post("/api/sendmail", form).then(res => console.log(res));
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 137,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FounderPage, {
      data: founderData
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().footer)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 9
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./styles/style.module.css":
/*!*********************************!*\
  !*** ./styles/style.module.css ***!
  \*********************************/
/***/ (function(module) {

// Exports
module.exports = {
	"title": "style_title__1nY5M",
	"cardList": "style_cardList__24vim",
	"navbar": "style_navbar__3RrcS",
	"footer": "style_footer__1-uyM",
	"contentFirst": "style_contentFirst__AbQSY",
	"mainill": "style_mainill__3Z_B2",
	"miniCard": "style_miniCard__TSB9g",
	"content": "style_content__3LWps",
	"sec2": "style_sec2__p7tGr",
	"card1": "style_card1__2tXL2",
	"card": "style_card__10pBI",
	"button": "style_button__9j_Q7",
	"p": "style_p__2JWFF",
	"cardLink": "style_cardLink__x8CNw",
	"innerContent": "style_innerContent__11xfl",
	"listSectionLeft": "style_listSectionLeft__3EMDT",
	"listSectionRight": "style_listSectionRight__3dRC8",
	"sectionTitle": "style_sectionTitle__1uudM",
	"sectionDescription": "style_sectionDescription__29ZHx"
};


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dynamic");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js"], function() { return __webpack_exec__("./pages/index.jsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bmloZWxwLy4vcGFnZXMvaW5kZXguanN4Iiwid2VicGFjazovL3VuaWhlbHAvLi9zdHlsZXMvc3R5bGUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly91bmloZWxwL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly91bmloZWxwL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL3VuaWhlbHAvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vdW5paGVscC9leHRlcm5hbCBcIm5leHQvZHluYW1pY1wiIiwid2VicGFjazovL3VuaWhlbHAvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3VuaWhlbHAvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL3VuaWhlbHAvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly91bmloZWxwL2lnbm9yZWR8L2hvbWUvc2Fua2V0MjkwNC91bmloZWxwX25ldy9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIkZvdW5kZXJQYWdlIiwiZHluYW1pYyIsIlRvcCIsIkhvbWUiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsInRpdGxlIiwiYXJyIiwic2V0QXJyIiwidXNlU3RhdGUiLCJuYXYiLCJzZXROYXYiLCJkYXRhIiwiYXhpb3MiLCJ0aGVuIiwicmVzcG9uc2UiLCJmb3JtIiwic2V0Rm9ybSIsIm5hbWUiLCJlbWFpbCIsIm51bWJlciIsImNvdW50cnkiLCJmb3VuZGVyRGF0YSIsIlJvbGUiLCJpbWdMaW5rIiwidHdpdHRlckxpbmsiLCJsaW5rZWRpbkxpbmsiLCJzdHlsZSIsIm1hcCIsImVsZW1lbnQiLCJrZXkiLCJiYWNrZ3JvdW5kIiwibXlTdHlsZSIsInBhZGRpbmciLCJ2YWwiLCJkZXNjcmlwdGlvbiIsImJvcmRlclJhZGl1cyIsInRleHRBbGlnbiIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1heFdpZHRoIiwicmVzIiwiY29uc29sZSIsImxvZyIsImZvb3RlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLE1BQU1BLFdBQVcsR0FBR0MsbURBQU8sQ0FBQyxNQUFNLHdMQUFQO0FBQUE7QUFBQSx3Q0FBYywrREFBZDtBQUFBLGdDQUFjLDJCQUFkO0FBQUE7QUFBQSxFQUEzQjtBQUNBLE1BQU1DLEdBQUcsR0FBR0QsbURBQU8sQ0FBQyxNQUFNLGdLQUFQO0FBQUE7QUFBQSx3Q0FBYywrQ0FBZDtBQUFBLGdDQUFjLG1CQUFkO0FBQUE7QUFBQSxFQUFuQjtBQUNlLFNBQVNFLElBQVQsR0FBZ0I7QUFDM0JDLGtEQUFTLENBQUMsTUFBTTtBQUNaQyxZQUFRLENBQUNDLEtBQVQsR0FBaUIsU0FBakI7QUFDSCxHQUZRLENBQVQ7QUFHQSxNQUFJO0FBQUEsT0FBQ0MsR0FBRDtBQUFBLE9BQUtDO0FBQUwsTUFBZUMsK0NBQVEsQ0FBQyxFQUFELENBQTNCO0FBQ0EsTUFBSTtBQUFBLE9BQUNDLEdBQUQ7QUFBQSxPQUFLQztBQUFMLE1BQWVGLCtDQUFRLENBQUMsS0FBRCxDQUEzQjtBQUNBTCxrREFBUyxDQUFDLE1BQU07QUFDWixRQUFJUSxJQUFJLEdBQUlDLGdEQUFBLENBQVUsaUJBQVYsRUFBNkJDLElBQTdCLENBQWtDLE1BQU9DLFFBQVAsSUFBb0I7QUFDOUQsWUFBTVAsTUFBTSxDQUFDTyxRQUFRLENBQUNILElBQVYsQ0FBWjtBQUVILEtBSFcsQ0FBWjtBQUlILEdBTFEsRUFLUCxFQUxPLENBQVQ7QUFNQSxNQUFJO0FBQUEsT0FBQ0ksSUFBRDtBQUFBLE9BQU1DO0FB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RUFBRUssd0VBQVlrQjtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdEdBO0FBQUEsa0JBREo7QUE2R0gsQzs7Ozs7Ozs7OztBQzVKRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDckJBLG1DOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7O0FDQUEsZSIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBzdHlsZSBmcm9tICBcIi4uL3N0eWxlcy9zdHlsZS5tb2R1bGUuY3NzXCJcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIlxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXG5cblxuY29uc3QgRm91bmRlclBhZ2UgPSBkeW5hbWljKCgpID0+IGltcG9ydChcIi4uL2NvbXBvbmVudHMvZm91bmRlclBhZ2VcIikpXG5jb25zdCBUb3AgPSBkeW5hbWljKCgpID0+IGltcG9ydChcIi4uL2NvbXBvbmVudHMvdG9wXCIpKVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC50aXRsZSA9IFwiVW5paGVscFwiXG4gICAgfSlcbiAgICBsZXQgW2FycixzZXRBcnJdID0gdXNlU3RhdGUoW10pXG4gICAgbGV0IFtuYXYsc2V0TmF2XSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxldCBkYXRhID0gIGF4aW9zLmdldChcIi9hcGkvYWRkRmVhdHVyZVwiKS50aGVuKGFzeW5jIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgYXdhaXQgc2V0QXJyKHJlc3BvbnNlLmRhdGEpXG5cbiAgICAgICAgfSlcbiAgICB9LFtdKVxuICAgIGxldCBbZm9ybSxzZXRGb3JtXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgbmFtZTpcIlwiLFxuICAgICAgICBlbWFpbDpcIlwiLFxuICAgICAgICBudW1iZXI6XCJcIixcbiAgICAgICAgY291bnRyeTpcIlwiXG4gICAgfSlcbiAgICBjb25zdCBmb3VuZGVyRGF0YSA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ1JhaiBHYXJnJyxcbiAgICAgICAgICAgIFJvbGU6ICdDby1Gb3VuZGVyJyxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaW1nTGluazogJy9hcGkvaW1hZ2VzL3JhaicsXG4gICAgICAgICAgICB0d2l0dGVyTGluazpcImh0dHBzOi8vdHdpdHRlci5jb20vcmpnYXJnOThcIixcbiAgICAgICAgICAgIGxpbmtlZGluTGluazpcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9yYWotZ2FyZy03NGEwN2IxYjVcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOlwiRGV2YW5zaCBCYW5zYWxcIixcbiAgICAgICAgICAgIFJvbGU6ICdDby1Gb3VuZGVyJyxcbiAgICAgICAgICAgXG4gICAgICAgICAgICBpbWdMaW5rOicvYXBpL2ltYWdlcy9kZXZhc2gnLFxuICAgICAgICAgICAgdHdpdHRlckxpbms6XCJodHRwczovL3R3aXR0ZXIuY29tL2RldmFuc2gyMjU/cz0wOVwiLFxuICAgICAgICAgICAgbGlua2VkaW5MaW5rOlwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2RldmFuc2hzYmFuc2FsXCJcbiAgICAgICAgfVxuXG4gICAgXVxuICAgIFxuICAgIHJldHVybihcbiAgICAgICAgPD5cbiAgICAgICAgPFRvcCBuYXY9e25hdn0gc2V0TmF2PXtzZXROYXZ9IC8+XG4gICAgICAgIHtuYXYgJiYgPGRpdiBjbGFzc05hbWU9e3N0eWxlLm5hdmJhcn0+XG4gICAgICAgICAgICA8aDE+XG4gICAgICAgICAgICAgICAgU2lnbiBpblxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIFxuICAgICAgICA8L2Rpdj59XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb250ZW50Rmlyc3R9PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZS50aXRsZX0+V2UgaGVscCB5b3UgIFNldHRsZTwvaDE+IFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGUucH0+V2UgYXJlIGhlcmUgdG8gU2V0dGxlIHlvdSByaWdodCAgaW4gYW5kIHR1cm4geW91ciBuZXcgaG91c2UgIGFjcm9zcyBzZWFzIGludG8geW91ciBob21lLiA8L3A+XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8TGluayBocmVmPVwiL2NvbnRhY3RcIj4gKi99XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZS5idXR0b259PkdldCBTdGFydGVkPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8L0xpbms+ICovfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvYXBpL2ltYWdlcy9pbGxcIiBjbGFzc05hbWU9e3N0eWxlLm1haW5pbGx9IGxheW91dD1cImZpbGxcIiAvPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5zZWMyfT5cbiAgICAgICAgICAgIDxoMT5IaSxXZSBhcmUgVU5JSEVMUDwvaDE+XG4gICAgICAgICAgICA8cD5XZSBjb3ZlciBhbGwgdGhlIGJhc2VzIHRoYXQgd2lsbCBzcGVsbCBvdXQgdGhlIFVuaSBsaWZlIHRoYXQgeW91IGhhdmUgYWx3YXlzIHdhbnRlZC5cbiAgICAgICAgICAgICAgICBTYXkgZ29vZGJ5ZSB0byB0aGUgaGFzc2xlcyBvZiBwYWNraW5nIHRoZSBlc3NlbnRpYWxzLCBmcm9tIGJlZGRpbmcgdG8gc3RhdGlvbmVyeSB0byBmb29kLCBldmVyeXRoaW5nIHlvdSBuZWVkIHRvIGtpY2tzdGFydCBhIG5ldyBwaGFzZSBvZiB5b3VyIGxpZmUgYXdheSBmcm9tIGhvbWUsIHdlIGdvdCBpdCBhbGwgdW5kZXIgb25lIHJvb2YhPC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jYXJkfT5cbiAgICAgICAgICAgICAgICB7YXJyLm1hcCggKGVsZW1lbnQsa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNhcmQxfSBrZXk9e2VsZW1lbnQua2V5fSBzdHlsZT17e2JhY2tncm91bmQ6JyNmZmYnfSAgIH0gID5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5taW5pQ2FyZH0gc3R5bGU9e2VsZW1lbnQubXlTdHlsZX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY29udGVudH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyoge2VsZW1lbnQuZWxlbWVudH0gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZWxlbWVudC5lbGVtZW50fSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPntlbGVtZW50LnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY2FyZExpc3R9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgc3R5bGU9e3twYWRkaW5nOicxNXB4IDAgJ319PlRpdGxlPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPXtzdHlsZS5jYXJkTGlua30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmlubmVyQ29udGVudH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudC5kYXRhLm1hcCgodmFsLGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubGlzdFNlY3Rpb25MZWZ0fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntrZXkgKyAxfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmxpc3RTZWN0aW9uUmlnaHR9ICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlLnNlY3Rpb25UaXRsZX0+e3ZhbC50aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGUuc2VjdGlvbkRlc2NyaXB0aW9ufT57dmFsLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KSB9XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jYXJkMX0gc3R5bGU9e3tiYWNrZ3JvdW5kOlwiI2ZmZlwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubWluaUNhcmR9IHN0eWxlPXt7IGJhY2tncm91bmQ6IFwibGluZWFyLWdyYWRpZW50KDIwOS4yMWRlZywgcmdiKDY0LCAxNDEsIDIxMykgMTMuNTclLCByZ2IoOTksIDExLCAxNDApIDk4LjM4JSlcIiwgYm9yZGVyUmFkaXVzOiBcIjI1cHhcIiB9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb250ZW50fSAgPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9hcGkvaW1hZ2VzL0Zvcm1zXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5Cb29rIGEgZnJlZSBjb25zdWx0YXRpb248L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNhcmRMaXN0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIiBtZXRob2Q9XCJwb3N0XCIgc3R5bGU9e3twYWRkaW5nOlwiMjBweFwiLHRleHRBbGlnbjpcImNlbnRlclwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTmFtZSpcIiB2YWx1ZT17Zm9ybS5uYW1lfSBvbkNoYW5nZT17KGUpID0+IHNldEZvcm0oeyAuLi5mb3JtLCBuYW1lOiBlLnRhcmdldC52YWx1ZSB9KX0gIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRW1haWwqXCIgdmFsdWU9e2Zvcm0uZW1haWx9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybSh7IC4uLmZvcm0sIGVtYWlsOiBlLnRhcmdldC52YWx1ZSB9KX0gIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiUGhvbmUgTnVtYmVyKlwiIHZhbHVlPXtmb3JtLm51bWJlcn0gb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtKHsgLi4uZm9ybSwgbnVtYmVyOiBlLnRhcmdldC52YWx1ZSB9KX0gIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQ291bnRyeSpcIiB2YWx1ZT17Zm9ybS5jb3VudHJ5fSBvbkNoYW5nZT17KGUpID0+IHNldEZvcm0oey4uLmZvcm0sY291bnRyeTplLnRhcmdldC52YWx1ZX0pfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiU3VibWl0XCIgY2xhc3NOYW1lPXtzdHlsZS5idXR0b259IHN0eWxlPXt7bWF4V2lkdGg6XCIyMDBweFwifX0gb25TdWJtaXQ9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXhpb3MucG9zdChcIi9hcGkvc2VuZG1haWxcIixmb3JtKS50aGVuKHJlcyA9PiBjb25zb2xlLmxvZyhyZXMpIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gb25DbGljaz17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBheGlvcy5wb3N0KFwiL2FwaS9zZW5kbWFpbFwiLCBmb3JtKS50aGVuKHJlcyA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgXG4gICAgICAgIDxGb3VuZGVyUGFnZSBkYXRhPXtmb3VuZGVyRGF0YX0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmZvb3Rlcn0+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICAgICBcbiAgICApXG59XG5cbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInRpdGxlXCI6IFwic3R5bGVfdGl0bGVfXzFuWTVNXCIsXG5cdFwiY2FyZExpc3RcIjogXCJzdHlsZV9jYXJkTGlzdF9fMjR2aW1cIixcblx0XCJuYXZiYXJcIjogXCJzdHlsZV9uYXZiYXJfXzNScmNTXCIsXG5cdFwiZm9vdGVyXCI6IFwic3R5bGVfZm9vdGVyX18xLXV5TVwiLFxuXHRcImNvbnRlbnRGaXJzdFwiOiBcInN0eWxlX2NvbnRlbnRGaXJzdF9fQWJRU1lcIixcblx0XCJtYWluaWxsXCI6IFwic3R5bGVfbWFpbmlsbF9fM1pfQjJcIixcblx0XCJtaW5pQ2FyZFwiOiBcInN0eWxlX21pbmlDYXJkX19UU0I5Z1wiLFxuXHRcImNvbnRlbnRcIjogXCJzdHlsZV9jb250ZW50X18zTFdwc1wiLFxuXHRcInNlYzJcIjogXCJzdHlsZV9zZWMyX19wN3RHclwiLFxuXHRcImNhcmQxXCI6IFwic3R5bGVfY2FyZDFfXzJ0WEwyXCIsXG5cdFwiY2FyZFwiOiBcInN0eWxlX2NhcmRfXzEwcEJJXCIsXG5cdFwiYnV0dG9uXCI6IFwic3R5bGVfYnV0dG9uX185al9RN1wiLFxuXHRcInBcIjogXCJzdHlsZV9wX18ySldGRlwiLFxuXHRcImNhcmRMaW5rXCI6IFwic3R5bGVfY2FyZExpbmtfX3g4Q053XCIsXG5cdFwiaW5uZXJDb250ZW50XCI6IFwic3R5bGVfaW5uZXJDb250ZW50X18xMXhmbFwiLFxuXHRcImxpc3RTZWN0aW9uTGVmdFwiOiBcInN0eWxlX2xpc3RTZWN0aW9uTGVmdF9fM0VNRFRcIixcblx0XCJsaXN0U2VjdGlvblJpZ2h0XCI6IFwic3R5bGVfbGlzdFNlY3Rpb25SaWdodF9fM2RSQzhcIixcblx0XCJzZWN0aW9uVGl0bGVcIjogXCJzdHlsZV9zZWN0aW9uVGl0bGVfXzF1dWRNXCIsXG5cdFwic2VjdGlvbkRlc2NyaXB0aW9uXCI6IFwic3R5bGVfc2VjdGlvbkRlc2NyaXB0aW9uX18yOVpIeFwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZHluYW1pY1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=