self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var _home_sanket2904_unihelp_new_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_sanket2904_unihelp_new_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_sanket2904_unihelp_new_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_sanket2904_unihelp_new_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_sanket2904_unihelp_new_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_style_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/style.module.css */ "./styles/style.module.css");
/* harmony import */ var _styles_style_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_style_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "/home/sanket2904/unihelp_new/pages/index.jsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_home_sanket2904_unihelp_new_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var FounderPage = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ "components_founderPage_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ../components/founderPage */ "./components/founderPage.jsx"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../components/founderPage */ "./components/founderPage.jsx")];
    },
    modules: ["index.jsx -> " + "../components/founderPage"]
  }
});
_c2 = FounderPage;
var Top = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(_c3 = function _c3() {
  return __webpack_require__.e(/*! import() */ "components_top_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ../components/top */ "./components/top.jsx"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../components/top */ "./components/top.jsx")];
    },
    modules: ["index.jsx -> " + "../components/top"]
  }
});
_c4 = Top;
function Home() {
  _s();

  var _this = this;

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    document.title = "Unihelp";
  });

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]),
      arr = _useState[0],
      setArr = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      nav = _useState2[0],
      setNav = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    var data = axios__WEBPACK_IMPORTED_MODULE_7___default().get("/api/addFeature").then( /*#__PURE__*/function () {
      var _ref = (0,_home_sanket2904_unihelp_new_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/_home_sanket2904_unihelp_new_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(response) {
        return _home_sanket2904_unihelp_new_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return setArr(response.data);

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }, []);

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({
    name: "",
    email: "",
    number: "",
    country: ""
  }),
      form = _useState3[0],
      setForm = _useState3[1];

  var founderData = [{
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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Top, {
      nav: nav,
      setNav: setNav
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }, this), nav && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_8___default().navbar),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_8___default().contentFirst),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
        className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_8___default().title),
        children: "We help you  Settle"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
        className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_8___default().p),
        children: "We are here to Settle you right  in and turn your new house  across seas into your home. "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
        className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_8___default().button),
        children: "Get Started"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
        src: "/api/images/ill",
        className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_8___default().mainill),
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_8___default().sec2),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
        children: "Hi,We are UNIHELP"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
        children: "We cover all the bases that will spell out the Uni life that you have always wanted. Say goodbye to the hassles of packing the essentials, from bedding to stationery to food, everything you need to kickstart a new phase of your life away from home, we got it all under one roof!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_8___default().card),
        children: [arr.map(function (element, key) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_8___default().card1),
            style: {
              background: '#fff'
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_8___default().miniCard),
              style: element.myStyle,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_8___default().content),
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                  src: element.element,
                  alt: ""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 88,
                  columnNumber: 37
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
                  children: element.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 89,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_8___default().cardList),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
                style: {
                  padding: '15px 0 '
                },
                children: "Title"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                href: "#",
                className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_8___default().cardLink),
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_8___default().innerContent),
                  children: element.data.map(function (val) {
                    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                        className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_8___default().listSectionLeft),
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                          children: key
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 103,
                          columnNumber: 57
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 102,
                        columnNumber: 53
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                        className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_8___default().listSectionRight),
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                          className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_8___default().sectionTitle),
                          children: val.title
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 106,
                          columnNumber: 57
                        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                          className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_8___default().sectionDescription),
                          children: val.description
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 107,
                          columnNumber: 57
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 105,
                        columnNumber: 57
                      }, _this)]
                    }, void 0, true);
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 96,
                  columnNumber: 41
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 37
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 29
            }, _this)]
          }, element.key, true, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 25
          }, _this);
        }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_8___default().card1),
          style: {
            background: "#fff"
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
            href: "/contact",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_8___default().miniCard),
              style: {
                background: "linear-gradient(209.21deg, rgb(64, 141, 213) 13.57%, rgb(99, 11, 140) 98.38%)",
                borderRadius: "25px"
              },
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_8___default().content),
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                  src: "/api/images/Forms"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 124,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
                  children: "Book a free consultation"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 125,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_8___default().cardList),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("form", {
              action: "",
              method: "post",
              style: {
                padding: "20px",
                textAlign: "center"
              },
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
                type: "text",
                placeholder: "Name*",
                value: form.name,
                onChange: function onChange(e) {
                  return setForm(_objectSpread(_objectSpread({}, form), {}, {
                    name: e.target.value
                  }));
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
                type: "text",
                placeholder: "Email*",
                value: form.email,
                onChange: function onChange(e) {
                  return setForm(_objectSpread(_objectSpread({}, form), {}, {
                    email: e.target.value
                  }));
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 133,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
                type: "text",
                placeholder: "Phone Number*",
                value: form.number,
                onChange: function onChange(e) {
                  return setForm(_objectSpread(_objectSpread({}, form), {}, {
                    number: e.target.value
                  }));
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 134,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
                type: "text",
                placeholder: "Country*",
                value: form.country,
                onChange: function onChange(e) {
                  return setForm(_objectSpread(_objectSpread({}, form), {}, {
                    country: e.target.value
                  }));
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 135,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
                type: "button",
                value: "Submit",
                className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_8___default().button),
                style: {
                  maxWidth: "200px"
                },
                onSubmit: function onSubmit(e) {
                  axios__WEBPACK_IMPORTED_MODULE_7___default().post("/api/sendmail", form).then(function (res) {
                    return console.log(res);
                  });
                },
                onClick: function onClick(e) {
                  axios__WEBPACK_IMPORTED_MODULE_7___default().post("/api/sendmail", form).then(function (res) {
                    return console.log(res);
                  });
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 136,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 119,
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(FounderPage, {
      data: founderData
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_8___default().footer)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 9
    }, this)]
  }, void 0, true);
}

_s(Home, "gFBjgSiKlYn60ZcbtRYCd5j9ixc=");

_c5 = Home;

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "FounderPage$dynamic");
$RefreshReg$(_c2, "FounderPage");
$RefreshReg$(_c3, "Top$dynamic");
$RefreshReg$(_c4, "Top");
$RefreshReg$(_c5, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbIkZvdW5kZXJQYWdlIiwiZHluYW1pYyIsIlRvcCIsIkhvbWUiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsInRpdGxlIiwidXNlU3RhdGUiLCJhcnIiLCJzZXRBcnIiLCJuYXYiLCJzZXROYXYiLCJkYXRhIiwiYXhpb3MiLCJ0aGVuIiwicmVzcG9uc2UiLCJuYW1lIiwiZW1haWwiLCJudW1iZXIiLCJjb3VudHJ5IiwiZm9ybSIsInNldEZvcm0iLCJmb3VuZGVyRGF0YSIsIlJvbGUiLCJpbWdMaW5rIiwidHdpdHRlckxpbmsiLCJsaW5rZWRpbkxpbmsiLCJzdHlsZSIsIm1hcCIsImVsZW1lbnQiLCJrZXkiLCJiYWNrZ3JvdW5kIiwibXlTdHlsZSIsInBhZGRpbmciLCJ2YWwiLCJkZXNjcmlwdGlvbiIsImJvcmRlclJhZGl1cyIsInRleHRBbGlnbiIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1heFdpZHRoIiwicmVzIiwiY29uc29sZSIsImxvZyIsImZvb3RlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxXQUFXLEdBQUdDLG1EQUFPLE1BQUM7QUFBQSxTQUFNLHdMQUFOO0FBQUEsQ0FBRDtBQUFBO0FBQUE7QUFBQSxrQ0FBYywrREFBZDtBQUFBO0FBQUEsZ0NBQWMsMkJBQWQ7QUFBQTtBQUFBLEVBQTNCO01BQU1ELFc7QUFDTixJQUFNRSxHQUFHLEdBQUdELG1EQUFPLE9BQUM7QUFBQSxTQUFNLGdLQUFOO0FBQUEsQ0FBRDtBQUFBO0FBQUE7QUFBQSxrQ0FBYywrQ0FBZDtBQUFBO0FBQUEsZ0NBQWMsbUJBQWQ7QUFBQTtBQUFBLEVBQW5CO01BQU1DLEc7QUFDUyxTQUFTQyxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQzNCQyxrREFBUyxDQUFDLFlBQU07QUFD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QUFDYywwQkFBUSxFQUFDO0FBQVYsaUJBQXBFO0FBQXdGLHdCQUFRLEVBQUUsa0JBQUFILENBQUMsRUFBSTtBQUNuR3pCLG1FQUFBLENBQVcsZUFBWCxFQUEyQk8sSUFBM0IsRUFBaUNOLElBQWpDLENBQXNDLFVBQUE0QixHQUFHO0FBQUEsMkJBQUlDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLENBQUo7QUFBQSxtQkFBekM7QUFDSCxpQkFGRDtBQUVHLHVCQUFPLEVBQUUsaUJBQUFKLENBQUMsRUFBSTtBQUNiekIsbUVBQUEsQ0FBVyxlQUFYLEVBQTRCTyxJQUE1QixFQUFrQ04sSUFBbEMsQ0FBdUMsVUFBQTRCLEdBQUc7QUFBQSwyQkFBSUMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVosQ0FBSjtBQUFBLG1CQUExQztBQUNIO0FBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF2Q0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBM0JBLGVBb0dBLDhEQUFDLFdBQUQ7QUFBYSxVQUFJLEVBQUVwQjtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBcEdBLGVBcUdBO0FBQUssZUFBUyxFQUFFSyx3RUFBWWtCO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFyR0E7QUFBQSxrQkFESjtBQTRHSDs7R0FsSnVCMUMsSTs7TUFBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xOWZlNzhhZWRjMWZmNTU5YzUxZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHN0eWxlIGZyb20gIFwiLi4vc3R5bGVzL3N0eWxlLm1vZHVsZS5jc3NcIlxuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcblxuXG5jb25zdCBGb3VuZGVyUGFnZSA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiLi4vY29tcG9uZW50cy9mb3VuZGVyUGFnZVwiKSlcbmNvbnN0IFRvcCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiLi4vY29tcG9uZW50cy90b3BcIikpXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gXCJVbmloZWxwXCJcbiAgICB9KVxuICAgIGxldCBbYXJyLHNldEFycl0gPSB1c2VTdGF0ZShbXSlcbiAgICBsZXQgW25hdixzZXROYXZdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbGV0IGRhdGEgPSAgYXhpb3MuZ2V0KFwiL2FwaS9hZGRGZWF0dXJlXCIpLnRoZW4oYXN5bmMgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBhd2FpdCBzZXRBcnIocmVzcG9uc2UuZGF0YSlcblxuICAgICAgICB9KVxuICAgIH0sW10pXG4gICAgbGV0IFtmb3JtLHNldEZvcm1dID0gdXNlU3RhdGUoe1xuICAgICAgICBuYW1lOlwiXCIsXG4gICAgICAgIGVtYWlsOlwiXCIsXG4gICAgICAgIG51bWJlcjpcIlwiLFxuICAgICAgICBjb3VudHJ5OlwiXCJcbiAgICB9KVxuICAgIGNvbnN0IGZvdW5kZXJEYXRhID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnUmFqIEdhcmcnLFxuICAgICAgICAgICAgUm9sZTogJ0NvLUZvdW5kZXInLFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpbWdMaW5rOiAnL2FwaS9pbWFnZXMvcmFqJyxcbiAgICAgICAgICAgIHR3aXR0ZXJMaW5rOlwiaHR0cHM6Ly90d2l0dGVyLmNvbS9yamdhcmc5OFwiLFxuICAgICAgICAgICAgbGlua2VkaW5MaW5rOlwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3Jhai1nYXJnLTc0YTA3YjFiNVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6XCJEZXZhbnNoIEJhbnNhbFwiLFxuICAgICAgICAgICAgUm9sZTogJ0NvLUZvdW5kZXInLFxuICAgICAgICAgICBcbiAgICAgICAgICAgIGltZ0xpbms6Jy9hcGkvaW1hZ2VzL2RldmFzaCcsXG4gICAgICAgICAgICB0d2l0dGVyTGluazpcImh0dHBzOi8vdHdpdHRlci5jb20vZGV2YW5zaDIyNT9zPTA5XCIsXG4gICAgICAgICAgICBsaW5rZWRpbkxpbms6XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vZGV2YW5zaHNiYW5zYWxcIlxuICAgICAgICB9XG5cbiAgICBdXG4gICAgXG4gICAgcmV0dXJuKFxuICAgICAgICA8PlxuICAgICAgICA8VG9wIG5hdj17bmF2fSBzZXROYXY9e3NldE5hdn0gLz5cbiAgICAgICAge25hdiAmJiA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubmF2YmFyfT5cbiAgICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgICAgICBTaWduIGluXG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2Pn1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNvbnRlbnRGaXJzdH0+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlLnRpdGxlfT5XZSBoZWxwIHlvdSAgU2V0dGxlPC9oMT4gXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZS5wfT5XZSBhcmUgaGVyZSB0byBTZXR0bGUgeW91IHJpZ2h0ICBpbiBhbmQgdHVybiB5b3VyIG5ldyBob3VzZSAgYWNyb3NzIHNlYXMgaW50byB5b3VyIGhvbWUuIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiPiAqL31cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlLmJ1dHRvbn0+R2V0IFN0YXJ0ZWQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgey8qIDwvTGluaz4gKi99XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9hcGkvaW1hZ2VzL2lsbFwiIGNsYXNzTmFtZT17c3R5bGUubWFpbmlsbH0gbGF5b3V0PVwiZmlsbFwiIC8+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnNlYzJ9PlxuICAgICAgICAgICAgPGgxPkhpLFdlIGFyZSBVTklIRUxQPC9oMT5cbiAgICAgICAgICAgIDxwPldlIGNvdmVyIGFsbCB0aGUgYmFzZXMgdGhhdCB3aWxsIHNwZWxsIG91dCB0aGUgVW5pIGxpZmUgdGhhdCB5b3UgaGF2ZSBhbHdheXMgd2FudGVkLlxuICAgICAgICAgICAgICAgIFNheSBnb29kYnllIHRvIHRoZSBoYXNzbGVzIG9mIHBhY2tpbmcgdGhlIGVzc2VudGlhbHMsIGZyb20gYmVkZGluZyB0byBzdGF0aW9uZXJ5IHRvIGZvb2QsIGV2ZXJ5dGhpbmcgeW91IG5lZWQgdG8ga2lja3N0YXJ0IGEgbmV3IHBoYXNlIG9mIHlvdXIgbGlmZSBhd2F5IGZyb20gaG9tZSwgd2UgZ290IGl0IGFsbCB1bmRlciBvbmUgcm9vZiE8L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNhcmR9PlxuICAgICAgICAgICAgICAgIHthcnIubWFwKCAoZWxlbWVudCxrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jYXJkMX0ga2V5PXtlbGVtZW50LmtleX0gc3R5bGU9e3tiYWNrZ3JvdW5kOicjZmZmJ30gICB9ICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubWluaUNhcmR9IHN0eWxlPXtlbGVtZW50Lm15U3R5bGV9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNvbnRlbnR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIHtlbGVtZW50LmVsZW1lbnR9ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2VsZW1lbnQuZWxlbWVudH0gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57ZWxlbWVudC50aXRsZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNhcmRMaXN0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7cGFkZGluZzonMTVweCAwICd9fT5UaXRsZTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT17c3R5bGUuY2FyZExpbmt9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5pbm5lckNvbnRlbnR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnQuZGF0YS5tYXAoKHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubGlzdFNlY3Rpb25MZWZ0fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntrZXl9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubGlzdFNlY3Rpb25SaWdodH0gICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGUuc2VjdGlvblRpdGxlfT57dmFsLnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZS5zZWN0aW9uRGVzY3JpcHRpb259Pnt2YWwuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pIH1cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNhcmQxfSBzdHlsZT17e2JhY2tncm91bmQ6XCIjZmZmXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5taW5pQ2FyZH0gc3R5bGU9e3sgYmFja2dyb3VuZDogXCJsaW5lYXItZ3JhZGllbnQoMjA5LjIxZGVnLCByZ2IoNjQsIDE0MSwgMjEzKSAxMy41NyUsIHJnYig5OSwgMTEsIDE0MCkgOTguMzglKVwiLCBib3JkZXJSYWRpdXM6IFwiMjVweFwiIH19ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNvbnRlbnR9ICA+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2FwaS9pbWFnZXMvRm9ybXNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkJvb2sgYSBmcmVlIGNvbnN1bHRhdGlvbjwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY2FyZExpc3R9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIlwiIG1ldGhvZD1cInBvc3RcIiBzdHlsZT17e3BhZGRpbmc6XCIyMHB4XCIsdGV4dEFsaWduOlwiY2VudGVyXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJOYW1lKlwiIHZhbHVlPXtmb3JtLm5hbWV9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybSh7IC4uLmZvcm0sIG5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pfSAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFbWFpbCpcIiB2YWx1ZT17Zm9ybS5lbWFpbH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtKHsgLi4uZm9ybSwgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0pfSAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJQaG9uZSBOdW1iZXIqXCIgdmFsdWU9e2Zvcm0ubnVtYmVyfSBvbkNoYW5nZT17KGUpID0+IHNldEZvcm0oeyAuLi5mb3JtLCBudW1iZXI6IGUudGFyZ2V0LnZhbHVlIH0pfSAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJDb3VudHJ5KlwiIHZhbHVlPXtmb3JtLmNvdW50cnl9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybSh7Li4uZm9ybSxjb3VudHJ5OmUudGFyZ2V0LnZhbHVlfSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJTdWJtaXRcIiBjbGFzc05hbWU9e3N0eWxlLmJ1dHRvbn0gc3R5bGU9e3ttYXhXaWR0aDpcIjIwMHB4XCJ9fSBvblN1Ym1pdD17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBheGlvcy5wb3N0KFwiL2FwaS9zZW5kbWFpbFwiLGZvcm0pLnRoZW4ocmVzID0+IGNvbnNvbGUubG9nKHJlcykgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF4aW9zLnBvc3QoXCIvYXBpL3NlbmRtYWlsXCIsIGZvcm0pLnRoZW4ocmVzID0+IGNvbnNvbGUubG9nKHJlcykpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19ICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybSA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgICBcbiAgICAgICAgPEZvdW5kZXJQYWdlIGRhdGE9e2ZvdW5kZXJEYXRhfSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZm9vdGVyfT5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgICAgIFxuICAgIClcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==