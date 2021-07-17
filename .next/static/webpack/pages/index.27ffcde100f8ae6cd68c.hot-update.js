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
                  lineNumber: 89,
                  columnNumber: 37
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
                  children: element.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
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
                lineNumber: 95,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                href: "#",
                className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_8___default().cardLink),
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_8___default().innerContent),
                  children: element.data.map(function (val, key) {
                    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                        className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_8___default().listSectionLeft),
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                          children: key
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 104,
                          columnNumber: 57
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 103,
                        columnNumber: 53
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                        className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_8___default().listSectionRight),
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                          className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_8___default().sectionTitle),
                          children: val.title
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 107,
                          columnNumber: 57
                        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                          className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_8___default().sectionDescription),
                          children: val.description
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 108,
                          columnNumber: 57
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 106,
                        columnNumber: 57
                      }, _this)]
                    }, void 0, true);
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 97,
                  columnNumber: 41
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 37
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 29
            }, _this)]
          }, element.key, true, {
            fileName: _jsxFileName,
            lineNumber: 84,
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
                  lineNumber: 125,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
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
                lineNumber: 133,
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
                lineNumber: 134,
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
                lineNumber: 135,
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
                lineNumber: 136,
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(FounderPage, {
      data: founderData
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_styles_style_module_css__WEBPACK_IMPORTED_MODULE_8___default().footer)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 151,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbIkZvdW5kZXJQYWdlIiwiZHluYW1pYyIsIlRvcCIsIkhvbWUiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsInRpdGxlIiwidXNlU3RhdGUiLCJhcnIiLCJzZXRBcnIiLCJuYXYiLCJzZXROYXYiLCJkYXRhIiwiYXhpb3MiLCJ0aGVuIiwicmVzcG9uc2UiLCJuYW1lIiwiZW1haWwiLCJudW1iZXIiLCJjb3VudHJ5IiwiZm9ybSIsInNldEZvcm0iLCJmb3VuZGVyRGF0YSIsIlJvbGUiLCJpbWdMaW5rIiwidHdpdHRlckxpbmsiLCJsaW5rZWRpbkxpbmsiLCJzdHlsZSIsIm1hcCIsImVsZW1lbnQiLCJrZXkiLCJiYWNrZ3JvdW5kIiwibXlTdHlsZSIsInBhZGRpbmciLCJ2YWwiLCJkZXNjcmlwdGlvbiIsImJvcmRlclJhZGl1cyIsInRleHRBbGlnbiIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1heFdpZHRoIiwicmVzIiwiY29uc29sZSIsImxvZyIsImZvb3RlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxXQUFXLEdBQUdDLG1EQUFPLE1BQUM7QUFBQSxTQUFNLHdMQUFOO0FBQUEsQ0FBRDtBQUFBO0FBQUE7QUFBQSxrQ0FBYywrREFBZDtBQUFBO0FBQUEsZ0NBQWMsMkJBQWQ7QUFBQTtBQUFBLEVBQTNCO01BQU1ELFc7QUFDTixJQUFNRSxHQUFHLEdBQUdELG1EQUFPLE9BQUM7QUFBQSxTQUFNLGdLQUFOO0FBQUEsQ0FBRDtBQUFBO0FBQUE7QUFBQSxrQ0FBYywrQ0FBZDtBQUFBO0FBQUEsZ0NBQWMsbUJBQWQ7QUFBQTtBQUFBLEVBQW5CO01BQU1DLEc7QUFDUyxTQUFTQyxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQzNCQyxrREFBUyxDQUFDLFlBQU07QUFD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QkFBSyxFQUFFO0FBQUNjLDBCQUFRLEVBQUM7QUFBVixpQkFBcEU7QUFBd0Ysd0JBQVEsRUFBRSxrQkFBQUgsQ0FBQyxFQUFJO0FBQ25HekIsbUVBQUEsQ0FBVyxlQUFYLEVBQTJCTyxJQUEzQixFQUFpQ04sSUFBakMsQ0FBc0MsVUFBQTRCLEdBQUc7QUFBQSwyQkFBSUMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVosQ0FBSjtBQUFBLG1CQUF6QztBQUNILGlCQUZEO0FBRUcsdUJBQU8sRUFBRSxpQkFBQUosQ0FBQyxFQUFJO0FBQ2J6QixtRUFBQSxDQUFXLGVBQVgsRUFBNEJPLElBQTVCLEVBQWtDTixJQUFsQyxDQUF1QyxVQUFBNEIsR0FBRztBQUFBLDJCQUFJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixDQUFKO0FBQUEsbUJBQTFDO0FBQ0g7QUFKRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXhDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUEzQkEsZUFxR0EsOERBQUMsV0FBRDtBQUFhLFVBQUksRUFBRXBCO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFyR0EsZUFzR0E7QUFBSyxlQUFTLEVBQUVLLHdFQUFZa0I7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXRHQTtBQUFBLGtCQURKO0FBNkdIOztHQW5KdUIxQyxJOztNQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjI3ZmZjZGUxMDBmOGFlNmNkNjhjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgc3R5bGUgZnJvbSAgXCIuLi9zdHlsZXMvc3R5bGUubW9kdWxlLmNzc1wiXG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxuXG5cbmNvbnN0IEZvdW5kZXJQYWdlID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCIuLi9jb21wb25lbnRzL2ZvdW5kZXJQYWdlXCIpKVxuY29uc3QgVG9wID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCIuLi9jb21wb25lbnRzL3RvcFwiKSlcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBcIlVuaWhlbHBcIlxuICAgIH0pXG4gICAgbGV0IFthcnIsc2V0QXJyXSA9IHVzZVN0YXRlKFtdKVxuICAgIGxldCBbbmF2LHNldE5hdl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBsZXQgZGF0YSA9ICBheGlvcy5nZXQoXCIvYXBpL2FkZEZlYXR1cmVcIikudGhlbihhc3luYyAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGF3YWl0IHNldEFycihyZXNwb25zZS5kYXRhKVxuXG4gICAgICAgIH0pXG4gICAgfSxbXSlcbiAgICBsZXQgW2Zvcm0sc2V0Rm9ybV0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIG5hbWU6XCJcIixcbiAgICAgICAgZW1haWw6XCJcIixcbiAgICAgICAgbnVtYmVyOlwiXCIsXG4gICAgICAgIGNvdW50cnk6XCJcIlxuICAgIH0pXG4gICAgY29uc3QgZm91bmRlckRhdGEgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdSYWogR2FyZycsXG4gICAgICAgICAgICBSb2xlOiAnQ28tRm91bmRlcicsXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGltZ0xpbms6ICcvYXBpL2ltYWdlcy9yYWonLFxuICAgICAgICAgICAgdHdpdHRlckxpbms6XCJodHRwczovL3R3aXR0ZXIuY29tL3JqZ2FyZzk4XCIsXG4gICAgICAgICAgICBsaW5rZWRpbkxpbms6XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vcmFqLWdhcmctNzRhMDdiMWI1XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTpcIkRldmFuc2ggQmFuc2FsXCIsXG4gICAgICAgICAgICBSb2xlOiAnQ28tRm91bmRlcicsXG4gICAgICAgICAgIFxuICAgICAgICAgICAgaW1nTGluazonL2FwaS9pbWFnZXMvZGV2YXNoJyxcbiAgICAgICAgICAgIHR3aXR0ZXJMaW5rOlwiaHR0cHM6Ly90d2l0dGVyLmNvbS9kZXZhbnNoMjI1P3M9MDlcIixcbiAgICAgICAgICAgIGxpbmtlZGluTGluazpcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9kZXZhbnNoc2JhbnNhbFwiXG4gICAgICAgIH1cblxuICAgIF1cbiAgICBcbiAgICByZXR1cm4oXG4gICAgICAgIDw+XG4gICAgICAgIDxUb3AgbmF2PXtuYXZ9IHNldE5hdj17c2V0TmF2fSAvPlxuICAgICAgICB7bmF2ICYmIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5uYXZiYXJ9PlxuICAgICAgICAgICAgPGgxPlxuICAgICAgICAgICAgICAgIFNpZ24gaW5cbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+fVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY29udGVudEZpcnN0fT5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGUudGl0bGV9PldlIGhlbHAgeW91ICBTZXR0bGU8L2gxPiBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlLnB9PldlIGFyZSBoZXJlIHRvIFNldHRsZSB5b3UgcmlnaHQgIGluIGFuZCB0dXJuIHlvdXIgbmV3IGhvdXNlICBhY3Jvc3Mgc2VhcyBpbnRvIHlvdXIgaG9tZS4gPC9wPlxuICAgICAgICAgICAgICAgICAgICB7LyogPExpbmsgaHJlZj1cIi9jb250YWN0XCI+ICovfVxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGUuYnV0dG9ufT5HZXQgU3RhcnRlZDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICB7LyogPC9MaW5rPiAqL31cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2FwaS9pbWFnZXMvaWxsXCIgY2xhc3NOYW1lPXtzdHlsZS5tYWluaWxsfSBsYXlvdXQ9XCJmaWxsXCIgLz5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuc2VjMn0+XG4gICAgICAgICAgICA8aDE+SGksV2UgYXJlIFVOSUhFTFA8L2gxPlxuICAgICAgICAgICAgPHA+V2UgY292ZXIgYWxsIHRoZSBiYXNlcyB0aGF0IHdpbGwgc3BlbGwgb3V0IHRoZSBVbmkgbGlmZSB0aGF0IHlvdSBoYXZlIGFsd2F5cyB3YW50ZWQuXG4gICAgICAgICAgICAgICAgU2F5IGdvb2RieWUgdG8gdGhlIGhhc3NsZXMgb2YgcGFja2luZyB0aGUgZXNzZW50aWFscywgZnJvbSBiZWRkaW5nIHRvIHN0YXRpb25lcnkgdG8gZm9vZCwgZXZlcnl0aGluZyB5b3UgbmVlZCB0byBraWNrc3RhcnQgYSBuZXcgcGhhc2Ugb2YgeW91ciBsaWZlIGF3YXkgZnJvbSBob21lLCB3ZSBnb3QgaXQgYWxsIHVuZGVyIG9uZSByb29mITwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY2FyZH0+XG4gICAgICAgICAgICAgICAge2Fyci5tYXAoIChlbGVtZW50LGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jYXJkMX0ga2V5PXtlbGVtZW50LmtleX0gc3R5bGU9e3tiYWNrZ3JvdW5kOicjZmZmJ30gICB9ICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubWluaUNhcmR9IHN0eWxlPXtlbGVtZW50Lm15U3R5bGV9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNvbnRlbnR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIHtlbGVtZW50LmVsZW1lbnR9ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2VsZW1lbnQuZWxlbWVudH0gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57ZWxlbWVudC50aXRsZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNhcmRMaXN0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7cGFkZGluZzonMTVweCAwICd9fT5UaXRsZTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT17c3R5bGUuY2FyZExpbmt9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5pbm5lckNvbnRlbnR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnQuZGF0YS5tYXAoKHZhbCxrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmxpc3RTZWN0aW9uTGVmdH0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57a2V5fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmxpc3RTZWN0aW9uUmlnaHR9ICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlLnNlY3Rpb25UaXRsZX0+e3ZhbC50aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGUuc2VjdGlvbkRlc2NyaXB0aW9ufT57dmFsLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KSB9XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jYXJkMX0gc3R5bGU9e3tiYWNrZ3JvdW5kOlwiI2ZmZlwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubWluaUNhcmR9IHN0eWxlPXt7IGJhY2tncm91bmQ6IFwibGluZWFyLWdyYWRpZW50KDIwOS4yMWRlZywgcmdiKDY0LCAxNDEsIDIxMykgMTMuNTclLCByZ2IoOTksIDExLCAxNDApIDk4LjM4JSlcIiwgYm9yZGVyUmFkaXVzOiBcIjI1cHhcIiB9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb250ZW50fSAgPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9hcGkvaW1hZ2VzL0Zvcm1zXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5Cb29rIGEgZnJlZSBjb25zdWx0YXRpb248L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNhcmRMaXN0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIiBtZXRob2Q9XCJwb3N0XCIgc3R5bGU9e3twYWRkaW5nOlwiMjBweFwiLHRleHRBbGlnbjpcImNlbnRlclwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTmFtZSpcIiB2YWx1ZT17Zm9ybS5uYW1lfSBvbkNoYW5nZT17KGUpID0+IHNldEZvcm0oeyAuLi5mb3JtLCBuYW1lOiBlLnRhcmdldC52YWx1ZSB9KX0gIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRW1haWwqXCIgdmFsdWU9e2Zvcm0uZW1haWx9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybSh7IC4uLmZvcm0sIGVtYWlsOiBlLnRhcmdldC52YWx1ZSB9KX0gIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiUGhvbmUgTnVtYmVyKlwiIHZhbHVlPXtmb3JtLm51bWJlcn0gb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtKHsgLi4uZm9ybSwgbnVtYmVyOiBlLnRhcmdldC52YWx1ZSB9KX0gIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQ291bnRyeSpcIiB2YWx1ZT17Zm9ybS5jb3VudHJ5fSBvbkNoYW5nZT17KGUpID0+IHNldEZvcm0oey4uLmZvcm0sY291bnRyeTplLnRhcmdldC52YWx1ZX0pfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiU3VibWl0XCIgY2xhc3NOYW1lPXtzdHlsZS5idXR0b259IHN0eWxlPXt7bWF4V2lkdGg6XCIyMDBweFwifX0gb25TdWJtaXQ9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXhpb3MucG9zdChcIi9hcGkvc2VuZG1haWxcIixmb3JtKS50aGVuKHJlcyA9PiBjb25zb2xlLmxvZyhyZXMpIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gb25DbGljaz17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBheGlvcy5wb3N0KFwiL2FwaS9zZW5kbWFpbFwiLCBmb3JtKS50aGVuKHJlcyA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgXG4gICAgICAgIDxGb3VuZGVyUGFnZSBkYXRhPXtmb3VuZGVyRGF0YX0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmZvb3Rlcn0+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICAgICBcbiAgICApXG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=