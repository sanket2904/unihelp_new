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
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "/home/sanket2904/unihelp_new/pages/index.jsx";





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
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    let data = axios__WEBPACK_IMPORTED_MODULE_4___default().get("/api/addFeature").then(async response => {
      await setArr(response.data);
    });
  }, []);
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
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Top, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().contentFirst),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),
        children: "We help you  Settle"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().p),
        children: "We are here to Settle you right  in and turn your new house  across seas into your home. "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().button),
        children: "Get Started"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: "/api/images/ill",
        className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().mainill),
        layout: "fill"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().sec2),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: "Hi,We are UNIHELP"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "We cover all the bases that will spell out the Uni life that you have always wanted. Say goodbye to the hassles of packing the essentials, from bedding to stationery to food, everything you need to kickstart a new phase of your life away from home, we got it all under one roof!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().card),
        children: [arr.map(element => {
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
                  lineNumber: 76,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                  children: element.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 77,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
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
                lineNumber: 82,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "#",
                className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().cardLink),
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().innerContent),
                  children: element.data.map(val => {
                    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().listSectionLeft),
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                          children: "1"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 91,
                          columnNumber: 57
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 90,
                        columnNumber: 53
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().listSectionRight),
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                          className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().sectionTitle),
                          children: val.title
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 94,
                          columnNumber: 57
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                          className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().sectionDescription),
                          children: val.description
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 95,
                          columnNumber: 57
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 93,
                        columnNumber: 57
                      }, this)]
                    }, void 0, true);
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 84,
                  columnNumber: 41
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 37
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 29
            }, this)]
          }, element.key, true, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 25
          }, this);
        }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().card1),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().miniCard),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().content),
              style: {
                background: "linear-gradient(209.21deg, rgb(64, 141, 213) 13.57%, rgb(99, 11, 140) 98.38%)",
                borderRadius: "25px"
              },
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: "/api/images/Forms"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                children: "Book a free consultation"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().cardList)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FounderPage, {
      data: founderData
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().footer)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 125,
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

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

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

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_babel_runtime_helpers_extends_js-node_modules_babel_runtime_helpers_inte-f89ba9","vendors-node_modules_next_image_js"], function() { return __webpack_exec__("./pages/index.jsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bmloZWxwLy4vcGFnZXMvaW5kZXguanN4Iiwid2VicGFjazovL3VuaWhlbHAvLi9zdHlsZXMvc3R5bGUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly91bmloZWxwL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly91bmloZWxwL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vdW5paGVscC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NC5qc1wiIiwid2VicGFjazovL3VuaWhlbHAvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiIiwid2VicGFjazovL3VuaWhlbHAvZXh0ZXJuYWwgXCJuZXh0L2R5bmFtaWNcIiIsIndlYnBhY2s6Ly91bmloZWxwL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly91bmloZWxwL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiRm91bmRlclBhZ2UiLCJkeW5hbWljIiwiVG9wIiwiSG9tZSIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwidGl0bGUiLCJhcnIiLCJzZXRBcnIiLCJ1c2VTdGF0ZSIsImRhdGEiLCJheGlvcyIsInRoZW4iLCJyZXNwb25zZSIsImZvdW5kZXJEYXRhIiwibmFtZSIsIlJvbGUiLCJpbWdMaW5rIiwidHdpdHRlckxpbmsiLCJsaW5rZWRpbkxpbmsiLCJzdHlsZSIsIm1hcCIsImVsZW1lbnQiLCJiYWNrZ3JvdW5kIiwibXlTdHlsZSIsInBhZGRpbmciLCJ2YWwiLCJkZXNjcmlwdGlvbiIsImtleSIsImJvcmRlclJhZGl1cyIsImNhcmRMaXN0IiwiZm9vdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFF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aEI7QUFBK0IsbUJBQUssRUFBRTtBQUFFRywwQkFBVSxFQUFDLCtFQUFiO0FBQTZGTSw0QkFBWSxFQUFDO0FBQTFHLGVBQXRDO0FBQUEsc0NBRUk7QUFBSyxtQkFBRyxFQUFDO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGSixlQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFRSTtBQUFLLHFCQUFTLEVBQUVULDBFQUFjVTtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF2Q0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdEJBLGVBa0ZBLDhEQUFDLFdBQUQ7QUFBYSxVQUFJLEVBQUVoQjtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbEZBLGVBbUZBO0FBQUssZUFBUyxFQUFFTSx3RUFBWVc7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQW5GQTtBQUFBLGtCQURKO0FBMEZILEM7Ozs7Ozs7Ozs7QUNsSUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNwQkEsbUM7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7O0FDQUEscUU7Ozs7Ozs7Ozs7O0FDQUEsMEU7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgc3R5bGUgZnJvbSAgXCIuLi9zdHlsZXMvc3R5bGUubW9kdWxlLmNzc1wiXG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcblxuY29uc3QgRm91bmRlclBhZ2UgPSBkeW5hbWljKCgpID0+IGltcG9ydChcIi4uL2NvbXBvbmVudHMvZm91bmRlclBhZ2VcIikpXG5jb25zdCBUb3AgPSBkeW5hbWljKCgpID0+IGltcG9ydChcIi4uL2NvbXBvbmVudHMvdG9wXCIpKVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC50aXRsZSA9IFwiVW5paGVscFwiXG4gICAgfSlcbiAgICBsZXQgW2FycixzZXRBcnJdID0gdXNlU3RhdGUoW10pXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbGV0IGRhdGEgPSAgYXhpb3MuZ2V0KFwiL2FwaS9hZGRGZWF0dXJlXCIpLnRoZW4oYXN5bmMgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBhd2FpdCBzZXRBcnIocmVzcG9uc2UuZGF0YSlcblxuICAgICAgICB9KVxuICAgIH0sW10pXG4gICAgXG4gICAgY29uc3QgZm91bmRlckRhdGEgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdSYWogR2FyZycsXG4gICAgICAgICAgICBSb2xlOiAnQ28tRm91bmRlcicsXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGltZ0xpbms6ICcvYXBpL2ltYWdlcy9yYWonLFxuICAgICAgICAgICAgdHdpdHRlckxpbms6XCJodHRwczovL3R3aXR0ZXIuY29tL3JqZ2FyZzk4XCIsXG4gICAgICAgICAgICBsaW5rZWRpbkxpbms6XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vcmFqLWdhcmctNzRhMDdiMWI1XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTpcIkRldmFuc2ggQmFuc2FsXCIsXG4gICAgICAgICAgICBSb2xlOiAnQ28tRm91bmRlcicsXG4gICAgICAgICAgIFxuICAgICAgICAgICAgaW1nTGluazonL2FwaS9pbWFnZXMvZGV2YXNoJyxcbiAgICAgICAgICAgIHR3aXR0ZXJMaW5rOlwiaHR0cHM6Ly90d2l0dGVyLmNvbS9kZXZhbnNoMjI1P3M9MDlcIixcbiAgICAgICAgICAgIGxpbmtlZGluTGluazpcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9kZXZhbnNoc2JhbnNhbFwiXG4gICAgICAgIH1cblxuICAgIF1cbiAgICBcbiAgICByZXR1cm4oXG4gICAgICAgIDw+XG4gICAgICAgIDxUb3AgLz5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb250ZW50Rmlyc3R9PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZS50aXRsZX0+V2UgaGVscCB5b3UgIFNldHRsZTwvaDE+IFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGUucH0+V2UgYXJlIGhlcmUgdG8gU2V0dGxlIHlvdSByaWdodCAgaW4gYW5kIHR1cm4geW91ciBuZXcgaG91c2UgIGFjcm9zcyBzZWFzIGludG8geW91ciBob21lLiA8L3A+XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8TGluayBocmVmPVwiL2NvbnRhY3RcIj4gKi99XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZS5idXR0b259PkdldCBTdGFydGVkPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8L0xpbms+ICovfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvYXBpL2ltYWdlcy9pbGxcIiBjbGFzc05hbWU9e3N0eWxlLm1haW5pbGx9IGxheW91dD1cImZpbGxcIiAvPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5zZWMyfT5cbiAgICAgICAgICAgIDxoMT5IaSxXZSBhcmUgVU5JSEVMUDwvaDE+XG4gICAgICAgICAgICA8cD5XZSBjb3ZlciBhbGwgdGhlIGJhc2VzIHRoYXQgd2lsbCBzcGVsbCBvdXQgdGhlIFVuaSBsaWZlIHRoYXQgeW91IGhhdmUgYWx3YXlzIHdhbnRlZC5cbiAgICAgICAgICAgICAgICBTYXkgZ29vZGJ5ZSB0byB0aGUgaGFzc2xlcyBvZiBwYWNraW5nIHRoZSBlc3NlbnRpYWxzLCBmcm9tIGJlZGRpbmcgdG8gc3RhdGlvbmVyeSB0byBmb29kLCBldmVyeXRoaW5nIHlvdSBuZWVkIHRvIGtpY2tzdGFydCBhIG5ldyBwaGFzZSBvZiB5b3VyIGxpZmUgYXdheSBmcm9tIGhvbWUsIHdlIGdvdCBpdCBhbGwgdW5kZXIgb25lIHJvb2YhPC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jYXJkfT5cbiAgICAgICAgICAgICAgICB7YXJyLm1hcCggKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jYXJkMX0ga2V5PXtlbGVtZW50LmtleX0gc3R5bGU9e3tiYWNrZ3JvdW5kOicjZmZmJ30gICB9ICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubWluaUNhcmR9IHN0eWxlPXtlbGVtZW50Lm15U3R5bGV9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNvbnRlbnR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIHtlbGVtZW50LmVsZW1lbnR9ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2VsZW1lbnQuZWxlbWVudH0gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57ZWxlbWVudC50aXRsZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNhcmRMaXN0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7cGFkZGluZzonMTVweCAwICd9fT5UaXRsZTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT17c3R5bGUuY2FyZExpbmt9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5pbm5lckNvbnRlbnR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnQuZGF0YS5tYXAoKHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubGlzdFNlY3Rpb25MZWZ0fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjE8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5saXN0U2VjdGlvblJpZ2h0fSAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZS5zZWN0aW9uVGl0bGV9Pnt2YWwudGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlLnNlY3Rpb25EZXNjcmlwdGlvbn0+e3ZhbC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSkgfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY2FyZDF9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLm1pbmlDYXJkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY29udGVudH0gc3R5bGU9e3sgYmFja2dyb3VuZDpcImxpbmVhci1ncmFkaWVudCgyMDkuMjFkZWcsIHJnYig2NCwgMTQxLCAyMTMpIDEzLjU3JSwgcmdiKDk5LCAxMSwgMTQwKSA5OC4zOCUpXCIsYm9yZGVyUmFkaXVzOlwiMjVweFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2FwaS9pbWFnZXMvRm9ybXNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+Qm9vayBhIGZyZWUgY29uc3VsdGF0aW9uPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNhcmRMaXN0fT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgXG4gICAgICAgIDxGb3VuZGVyUGFnZSBkYXRhPXtmb3VuZGVyRGF0YX0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmZvb3Rlcn0+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICAgICBcbiAgICApXG59XG5cbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInRpdGxlXCI6IFwic3R5bGVfdGl0bGVfXzFuWTVNXCIsXG5cdFwiY2FyZExpc3RcIjogXCJzdHlsZV9jYXJkTGlzdF9fMjR2aW1cIixcblx0XCJmb290ZXJcIjogXCJzdHlsZV9mb290ZXJfXzEtdXlNXCIsXG5cdFwiY29udGVudEZpcnN0XCI6IFwic3R5bGVfY29udGVudEZpcnN0X19BYlFTWVwiLFxuXHRcIm1haW5pbGxcIjogXCJzdHlsZV9tYWluaWxsX18zWl9CMlwiLFxuXHRcIm1pbmlDYXJkXCI6IFwic3R5bGVfbWluaUNhcmRfX1RTQjlnXCIsXG5cdFwiY29udGVudFwiOiBcInN0eWxlX2NvbnRlbnRfXzNMV3BzXCIsXG5cdFwic2VjMlwiOiBcInN0eWxlX3NlYzJfX3A3dEdyXCIsXG5cdFwiY2FyZDFcIjogXCJzdHlsZV9jYXJkMV9fMnRYTDJcIixcblx0XCJjYXJkXCI6IFwic3R5bGVfY2FyZF9fMTBwQklcIixcblx0XCJidXR0b25cIjogXCJzdHlsZV9idXR0b25fXzlqX1E3XCIsXG5cdFwicFwiOiBcInN0eWxlX3BfXzJKV0ZGXCIsXG5cdFwiY2FyZExpbmtcIjogXCJzdHlsZV9jYXJkTGlua19feDhDTndcIixcblx0XCJpbm5lckNvbnRlbnRcIjogXCJzdHlsZV9pbm5lckNvbnRlbnRfXzExeGZsXCIsXG5cdFwibGlzdFNlY3Rpb25MZWZ0XCI6IFwic3R5bGVfbGlzdFNlY3Rpb25MZWZ0X18zRU1EVFwiLFxuXHRcImxpc3RTZWN0aW9uUmlnaHRcIjogXCJzdHlsZV9saXN0U2VjdGlvblJpZ2h0X18zZFJDOFwiLFxuXHRcInNlY3Rpb25UaXRsZVwiOiBcInN0eWxlX3NlY3Rpb25UaXRsZV9fMXV1ZE1cIixcblx0XCJzZWN0aW9uRGVzY3JpcHRpb25cIjogXCJzdHlsZV9zZWN0aW9uRGVzY3JpcHRpb25fXzI5Wkh4XCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2R5bmFtaWNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=