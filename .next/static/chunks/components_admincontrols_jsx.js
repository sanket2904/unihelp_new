(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["components_admincontrols_jsx"],{

/***/ "./components/admincontrols.jsx":
/*!**************************************!*\
  !*** ./components/admincontrols.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AdminDash; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_sanket2904_unihelp_new_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _home_sanket2904_unihelp_new_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _home_sanket2904_unihelp_new_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_sanket2904_unihelp_new_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_sanket2904_unihelp_new_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _home_sanket2904_unihelp_new_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/admindash.module.css */ "./styles/admindash.module.css");
/* harmony import */ var _styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* module decorator */ module = __webpack_require__.hmd(module);







var _jsxFileName = "/home/sanket2904/unihelp_new/components/admincontrols.jsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_home_sanket2904_unihelp_new_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var Loader = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ "components_loader_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./loader */ "./components/loader.jsx"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ./loader */ "./components/loader.jsx")];
    },
    modules: ["../components/admincontrols.jsx -> " + "./loader"]
  }
});
_c2 = Loader;
function AdminDash() {
  _s();

  var _this = this;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      toggle = _useState[0],
      setToggle = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      nav = _useState2[0],
      setNav = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      feature = _useState3[0],
      setFeature = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({
    mainTitle: "",
    imgLink: ""
  }),
      add = _useState4[0],
      setAdd = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]),
      init = _useState5[0],
      setInit = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([{
    name: "",
    price: ""
  }]),
      dataitem = _useState6[0],
      setdataItem = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({
    title: "",
    Description: "",
    price: "",
    imageLink: "",
    items: dataitem
  }),
      newData = _useState7[0],
      setnewData = _useState7[1];

  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      edit = _useState8[0],
      setEdit = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]),
      data = _useState9[0],
      setData = _useState9[1];

  var _useState10 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({
    firstName: "",
    lastName: "",
    email: ""
  }),
      fdata = _useState10[0],
      setFdata = _useState10[1];

  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    axios__WEBPACK_IMPORTED_MODULE_8___default().get("/api/user/".concat(JSON.parse(window.localStorage.session))).then(function (res) {
      console.log(res);
    });
    axios__WEBPACK_IMPORTED_MODULE_8___default().get("/api/addFeature").then(function (response) {
      console.log(response);
      setData(response.data);
    })["catch"](function (err) {
      console.log("tumse nai ho payega");
    });
  }, []);

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      handler = _useState11[0],
      setHandler = _useState11[1];

  function changeEvent(_x, _x2, _x3, _x4, _x5) {
    return _changeEvent.apply(this, arguments);
  }

  function _changeEvent() {
    _changeEvent = (0,_home_sanket2904_unihelp_new_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__.default)( /*#__PURE__*/_home_sanket2904_unihelp_new_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee5(e, height, width, feature, className) {
      return _home_sanket2904_unihelp_new_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (feature) {
                setTimeout(function () {
                  document.querySelector(".admindash_feature__2G8Mj").classList.add((_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().gobigger));
                  jquery__WEBPACK_IMPORTED_MODULE_7___default()(".".concat((_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().uppercontainer))).addClass("".concat((_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().uppercontaineractive)));
                }, 152);
              } else {
                setTimeout(function () {
                  document.querySelector(".admindash_feature__2G8Mj").classList.remove((_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().gobigger));
                  document.querySelector(".admindash_feature__2G8Mj").classList.add((_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().gosmaller));
                }, 152);
              }

              setTimeout(function () {
                setFeature(feature);
              }, 150);

            case 2:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));
    return _changeEvent.apply(this, arguments);
  }

  if (toggle) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().admindash),
    children: [nav && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().usernav),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: function onClick() {
          delete window.localStorage.session;
          location.reload();
        },
        children: " Signout"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 24
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().nav),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Logo, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().options),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().active),
          onClick: function onClick() {
            setToggle(false);
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Dashicon, {
            fill: "#f2f6ff"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            style: {
              color: "#f2f6ff",
              fontWeight: 400,
              fontSize: "22px"
            },
            children: "Dashboard"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().active),
          style: {
            backgroundColor: "#f2f6ff",
            borderRadius: "15px"
          },
          onClick: function onClick() {
            setToggle(true);
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SettingIcon, {
            fill: "#1f1f47"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            style: {
              color: "#1f1f47",
              fontWeight: 400,
              fontSize: "22px"
            },
            children: "Settings"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().center),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        style: {
          fontSize: "36px"
        },
        children: "Settings"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().features),
        children: [!feature && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().feature),
            onClick: function onClick(e) {
              changeEvent(e, "700px", "700px", true, (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().feature));
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PlusSvg, {
              fill: "#1f1f47"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
              children: "Add a feature"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 21
          }, this), data.map(function (item) {
            if (!edit) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().feature),
              id: item._id,
              onClick: /*#__PURE__*/(0,_home_sanket2904_unihelp_new_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__.default)( /*#__PURE__*/_home_sanket2904_unihelp_new_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2() {
                var data;
                return _home_sanket2904_unihelp_new_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return axios__WEBPACK_IMPORTED_MODULE_8___default().get("/api/addFeature/".concat(item._id)).then( /*#__PURE__*/function () {
                          var _ref2 = (0,_home_sanket2904_unihelp_new_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__.default)( /*#__PURE__*/_home_sanket2904_unihelp_new_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(response) {
                            return _home_sanket2904_unihelp_new_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
                              while (1) {
                                switch (_context.prev = _context.next) {
                                  case 0:
                                    _context.next = 2;
                                    return setInit(response.data);

                                  case 2:
                                  case "end":
                                    return _context.stop();
                                }
                              }
                            }, _callee);
                          }));

                          return function (_x6) {
                            return _ref2.apply(this, arguments);
                          };
                        }());

                      case 2:
                        data = _context2.sent;
                        setEdit(true);

                      case 4:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              })),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
                style: {
                  gridColumn: "1/-1",
                  justifySelf: "center"
                },
                children: item.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 153,
                columnNumber: 41
              }, _this)
            }, item._id, false, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 37
            }, _this);else return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "".concat((_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().feature), " ").concat((_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().gobigger), " "),
              style: {
                gridTemplateColumns: "1fr 1fr 1fr"
              },
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Backsvg, {
                fill: "#1f1f47",
                onClick: function onClick(e) {
                  setEdit(false);
                  document.querySelector(".admindash_gobigger__3wfdZ").classList.remove("admindash_gobigger__3wfdZ");
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 159,
                columnNumber: 41
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().items),
                style: {
                  justifySelf: "left",
                  margin: "50px"
                },
                children: init.data.map(function (data) {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    style: {
                      display: "flex"
                    },
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
                      style: {
                        backgroundColor: "aliceblue",
                        padding: "20px 40px",
                        margin: "15px 0"
                      },
                      onClick: /*#__PURE__*/function () {
                        var _ref3 = (0,_home_sanket2904_unihelp_new_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__.default)( /*#__PURE__*/_home_sanket2904_unihelp_new_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee4(e) {
                          var dataa;
                          return _home_sanket2904_unihelp_new_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee4$(_context4) {
                            while (1) {
                              switch (_context4.prev = _context4.next) {
                                case 0:
                                  _context4.next = 2;
                                  return axios__WEBPACK_IMPORTED_MODULE_8___default().get("/api/addFeature/".concat(init._id, "/").concat(data._id, "/items")).then( /*#__PURE__*/function () {
                                    var _ref4 = (0,_home_sanket2904_unihelp_new_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__.default)( /*#__PURE__*/_home_sanket2904_unihelp_new_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee3(response) {
                                      return _home_sanket2904_unihelp_new_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee3$(_context3) {
                                        while (1) {
                                          switch (_context3.prev = _context3.next) {
                                            case 0:
                                              _context3.next = 2;
                                              return setInit(response.data);

                                            case 2:
                                              _context3.next = 4;
                                              return console.log(response);

                                            case 4:
                                            case "end":
                                              return _context3.stop();
                                          }
                                        }
                                      }, _callee3);
                                    }));

                                    return function (_x8) {
                                      return _ref4.apply(this, arguments);
                                    };
                                  }());

                                case 2:
                                  dataa = _context4.sent;

                                case 3:
                                case "end":
                                  return _context4.stop();
                              }
                            }
                          }, _callee4);
                        }));

                        return function (_x7) {
                          return _ref3.apply(this, arguments);
                        };
                      }(),
                      children: [data.title || data.name, " "]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 173,
                      columnNumber: 61
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DeleteSvg, {
                      fill: "black",
                      style: {
                        position: "static !important"
                      },
                      onClick: function onClick(e) {
                        axios__WEBPACK_IMPORTED_MODULE_8___default().delete("/api/addFeature/".concat(init._id, "/").concat(data._id));
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 181,
                      columnNumber: 61
                    }, _this)]
                  }, data._id, true, {
                    fileName: _jsxFileName,
                    lineNumber: 172,
                    columnNumber: 57
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 166,
                columnNumber: 41
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().addingItems),
                style: {
                  justifySelf: "center",
                  alignSelf: "center",
                  gridColumn: "2/3",
                  display: "flex",
                  flexDirection: "column"
                },
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
                  children: "Adding an Entry"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 190,
                  columnNumber: 45
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                  type: "text",
                  placeholder: "Title",
                  onChange: function onChange(e) {
                    setnewData(_objectSpread(_objectSpread({}, newData), {}, {
                      title: e.target.value
                    }));
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 191,
                  columnNumber: 45
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                  type: "text",
                  placeholder: "Desciption",
                  onChange: function onChange(e) {
                    setnewData(_objectSpread(_objectSpread({}, newData), {}, {
                      Description: e.target.value
                    }));
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 197,
                  columnNumber: 45
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                  type: "text",
                  placeholder: "Price",
                  onChange: function onChange(e) {
                    setnewData(_objectSpread(_objectSpread({}, newData), {}, {
                      price: e.target.value
                    }));
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 203,
                  columnNumber: 45
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                  type: "text",
                  placeholder: "ImageLink",
                  onChange: function onChange(e) {
                    setnewData(_objectSpread(_objectSpread({}, newData), {}, {
                      imageLink: e.target.value
                    }));
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 209,
                  columnNumber: 45
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 189,
                columnNumber: 41
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().subItems),
                style: {
                  gridColumn: "3"
                },
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
                  children: "Add Items"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 218,
                  columnNumber: 45
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
                  action: "/api/testDatabase",
                  method: "POST",
                  className: "itemform",
                  children: [dataitem.map(function (items, key) {
                    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                      className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().manage),
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                        type: "text",
                        placeholder: "Item Title",
                        name: "title",
                        onChange: function onChange(e) {
                          var init = dataitem;
                          init[key].name = e.target.value;
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 227,
                        columnNumber: 61
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                        type: "text",
                        placeholder: "Price",
                        name: "price",
                        onChange: function onChange(e) {
                          var init = dataitem;
                          init[key].price = e.target.value;
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 232,
                        columnNumber: 61
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 226,
                      columnNumber: 57
                    }, _this);
                  }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PlusSvg, {
                    onClick: function onClick() {
                      setdataItem([].concat((0,_home_sanket2904_unihelp_new_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(dataitem), [{}]));
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 242,
                    columnNumber: 45
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                    type: "submit",
                    value: "Submit",
                    style: {
                      backgroundColor: "#1f1f47",
                      color: "#fff",
                      height: "40px",
                      borderRadius: "25px"
                    },
                    onClick: function onClick(e) {
                      e.preventDefault();
                      console.log(item._id);
                      newData["items"] = dataitem;
                      axios__WEBPACK_IMPORTED_MODULE_8___default().post("/api/addFeature/".concat(init._id), newData).then(function (response) {
                        return console.log(response);
                      });
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 249,
                    columnNumber: 49
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 219,
                  columnNumber: 45
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 217,
                columnNumber: 41
              }, _this)]
            }, item.data._id, true, {
              fileName: _jsxFileName,
              lineNumber: 158,
              columnNumber: 37
            }, _this);
          })]
        }, void 0, true), feature && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().feature),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Backsvg, {
            fill: "#1f1f47",
            onClick: function onClick(e) {
              changeEvent(e, "320px", "155px", false, (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().feature));
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 269,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().uppercontainer),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
              style: {
                fontSize: "32px"
              },
              children: "Add a feature"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 275,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().addingform1),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                children: "Main title"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 278,
                columnNumber: 37
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                type: "text",
                placeholder: "Title",
                onChange: function onChange(e) {
                  return setAdd(_objectSpread(_objectSpread({}, add), {}, {
                    mainTitle: e.target.value
                  }));
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 279,
                columnNumber: 37
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                type: "text",
                placeholder: "ImageLink",
                onChange: function onChange(e) {
                  return setAdd(_objectSpread(_objectSpread({}, add), {}, {
                    imgLink: e.target.value
                  }));
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 283,
                columnNumber: 37
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                type: "submit",
                onClick: function onClick(e) {
                  axios__WEBPACK_IMPORTED_MODULE_8___default().post("/api/addFeature", add, {
                    headers: {
                      Authorization: "Bearer ".concat(window.session.token)
                    }
                  }).then(function (res) {
                    if (res.data.message === "Entry Added") setHandler(true);
                  });
                },
                children: " Submit"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 287,
                columnNumber: 37
              }, this), handler && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().status),
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
                  children: "Entry Added"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 300,
                  columnNumber: 49
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 299,
                columnNumber: 56
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 276,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 274,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 268,
          columnNumber: 36
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().admininfo),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Signout, {
        fill: "#1f1f47",
        nav: nav,
        setNav: setNav
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 312,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().photo)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 313,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: "".concat(fdata.firstName || null, " ").concat(fdata.lastName || null)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 316,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: fdata.email || null
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 317,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().infosection),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 319,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 320,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 321,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 322,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 318,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 9
  }, this);else if (!toggle) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().admindash),
    children: [nav && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().usernav),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: function onClick() {
          delete window.localStorage.session;
          location.reload();
        },
        children: " Signout"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 334,
        columnNumber: 22
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 24
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().nav),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Logo, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 341,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().options),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().active),
          style: {
            backgroundColor: "#f2f6ff",
            borderRadius: "15px"
          },
          onClick: function onClick() {
            setToggle(false);
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Dashicon, {
            fill: "#1f1f47"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 344,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            style: {
              color: "#1f1f47",
              fontWeight: 400,
              fontSize: "22px"
            },
            children: "Dashboard"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 345,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 343,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().active),
          onClick: function onClick(e) {
            setToggle(!toggle);
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SettingIcon, {
            fill: "#f2f6ff"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 352,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            style: {
              color: "#f2f6ff",
              fontWeight: 400,
              fontSize: "22px"
            },
            children: "Settings"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 353,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 348,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 358,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 359,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 360,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 361,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 342,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().center),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().textdata),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: ["Hello,", fdata.firstName || null]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 366,
          columnNumber: 20
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "Welcome back!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 367,
          columnNumber: 20
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 365,
        columnNumber: 16
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().analytics),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().sales)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 370,
          columnNumber: 20
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().secondary)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 373,
          columnNumber: 20
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().third)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 376,
          columnNumber: 20
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 369,
        columnNumber: 16
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 364,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().admininfo),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Signout, {
        fill: "#1f1f47",
        nav: nav,
        setNav: setNav
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 383,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().photo)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 384,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: "".concat(fdata.firstName || null, " ").concat(fdata.lastName || null)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 387,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: fdata.email || null
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 388,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().infosection),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 390,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 391,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 392,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 393,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 389,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 382,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 331,
    columnNumber: 9
  }, this);
}

_s(AdminDash, "1zLFK5Q/vzuqF7di92jeG29WBHA=");

_c3 = AdminDash;

function Logo() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
    width: "184",
    height: "129",
    viewBox: "0 0 184 129",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M41.4682 35.843V49.4226C41.4682 51.6788 40.7602 53.463 39.3442 54.7751C37.9376 56.0873 36.0118 56.7434 33.5669 56.7434C31.1596 56.7434 29.248 56.1062 27.832 54.8318C26.416 53.5574 25.6938 51.8062 25.6655 49.5784V35.843H29.9135V49.4509C29.9135 50.8009 30.2345 51.7874 30.8764 52.4104C31.5278 53.024 32.4246 53.3308 33.5669 53.3308C35.9552 53.3308 37.1683 52.0753 37.206 49.5642V35.843H41.4682ZM61.7172 56.4602H57.4692L49.1997 42.8948V56.4602H44.9516V35.843H49.1997L57.4834 49.4368V35.843H61.7172V56.4602ZM69.9443 56.4602H65.6963V35.843H69.9443V56.4602Z",
      fill: "#FEFEFE"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 405,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M87.4867 56.4602H83.2387V47.6243H74.955V56.4602H70.7069V35.843H74.955V44.1975H83.2387V35.843H87.4867V56.4602ZM103.615 47.5251H95.4589V53.0476H105.031V56.4602H91.2108V35.843H105.003V39.2839H95.4589V44.1975H103.615V47.5251ZM111.771 53.0476H120.791V56.4602H107.523V35.843H111.771V53.0476ZM127.489 49.196V56.4602H123.241V35.843H131.284C132.832 35.843 134.192 36.1262 135.362 36.6926C136.542 37.259 137.448 38.0662 138.081 39.114C138.713 40.1524 139.03 41.3372 139.03 42.6682C139.03 44.6884 138.336 46.2838 136.948 47.4543C135.57 48.6155 133.658 49.196 131.213 49.196H127.489ZM127.489 45.7551H131.284C132.407 45.7551 133.262 45.4908 133.847 44.9622C134.442 44.4335 134.739 43.6783 134.739 42.6965C134.739 41.6864 134.442 40.8699 133.847 40.2468C133.252 39.6238 132.431 39.3028 131.383 39.2839H127.489V45.7551Z",
      fill: "white"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 406,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 404,
    columnNumber: 9
  }, this);
}

_c4 = Logo;

function Dashicon(_ref5) {
  var fill = _ref5.fill;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
    version: "1.0",
    xmlns: "http://www.w3.org/2000/svg",
    width: "25",
    height: "25",
    viewBox: "0 0 512.000000 512.000000",
    preserveAspectRatio: "xMidYMid meet",
    fill: "blue",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
      transform: "translate(0.000000,512.000000) scale(0.100000,-0.100000)",
      fill: "#000000",
      stroke: "none",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M275 5106 c-111 -35 -190 -104 -239 -206 l-31 -65 0 -570 0 -570 33 -67 c40 -82 119 -157 200 -190 l57 -23 840 -3 c603 -2 857 0 900 8 160 31 274 145 305 305 8 42 10 216 8 580 -3 517 -3 520 -26 577 -33 81 -108 160 -190 200 l-67 33 -875 2 c-688 2 -884 -1 -915 -11z",
        fill: fill
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 417,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M3049 5106 c-106 -28 -209 -121 -251 -224 l-23 -57 -3 -1160 c-2 -838 0 -1177 8 -1220 31 -160 145 -274 305 -305 43 -8 297 -10 900 -8 l840 3 57 23 c81 33 160 108 200 190 l33 67 0 1210 0 1210 -31 65 c-40 84 -100 144 -182 183 l-67 32 -870 2 c-667 1 -881 -1 -916 -11z",
        fill: fill
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 418,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M300 2979 c-112 -22 -217 -107 -268 -217 l-27 -57 0 -1210 0 -1210 31 -65 c39 -83 101 -145 184 -184 l65 -31 890 0 890 0 67 33 c82 40 157 119 190 200 l23 57 3 1160 c2 838 0 1177 -8 1220 -30 157 -142 271 -298 304 -64 13 -1672 14 -1742 0z",
        fill: fill
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 419,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M3065 1696 c-150 -37 -255 -148 -285 -301 -8 -42 -10 -215 -8 -580 3 -517 3 -520 26 -577 33 -81 108 -160 190 -200 l67 -33 890 0 890 0 67 32 c82 39 142 99 182 183 l31 65 0 570 0 570 -33 67 c-40 82 -119 157 -200 190 l-57 23 -855 2 c-649 1 -867 -1 -905 -11z",
        fill: fill
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 420,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 416,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 414,
    columnNumber: 9
  }, this);
}

_c5 = Dashicon;

function SettingIcon(_ref6) {
  var fill = _ref6.fill;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "25",
    height: "25",
    fill: fill,
    className: "bi bi-gear-fill",
    viewBox: "0 0 16 16",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 428,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 427,
    columnNumber: 9
  }, this);
}

_c6 = SettingIcon;

function Signout(_ref7) {
  var fill = _ref7.fill,
      nav = _ref7.nav,
      setNav = _ref7.setNav;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
    onClick: function onClick() {
      return setNav(!nav);
    },
    "aria-hidden": "true",
    focusable: "false",
    width: "30",
    height: "30",
    "data-prefix": "far",
    "data-icon": "user-circle",
    className: "svg-inline--fa fa-user-circle fa-w-16",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 496 512",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      fill: fill,
      d: "M248 104c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96zm0 144c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm0-240C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-49.7 0-95.1-18.3-130.1-48.4 14.9-23 40.4-38.6 69.6-39.5 20.8 6.4 40.6 9.6 60.5 9.6s39.7-3.1 60.5-9.6c29.2 1 54.7 16.5 69.6 39.5-35 30.1-80.4 48.4-130.1 48.4zm162.7-84.1c-24.4-31.4-62.1-51.9-105.1-51.9-10.2 0-26 9.6-57.6 9.6-31.5 0-47.4-9.6-57.6-9.6-42.9 0-80.6 20.5-105.1 51.9C61.9 339.2 48 299.2 48 256c0-110.3 89.7-200 200-200s200 89.7 200 200c0 43.2-13.9 83.2-37.3 115.9z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 436,
      columnNumber: 263
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 436,
    columnNumber: 9
  }, this);
}

_c7 = Signout;

function PlusSvg(_ref8) {
  var fill = _ref8.fill,
      onClick = _ref8.onClick;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
    onClick: onClick,
    xmlns: "http://www.w3.org/2000/svg",
    width: "30",
    height: "30",
    fill: fill,
    className: "bi bi-plus-circle-fill",
    viewBox: "0 0 16 16",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 442,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 441,
    columnNumber: 9
  }, this);
}

_c8 = PlusSvg;

function Backsvg(_ref9) {
  var fill = _ref9.fill,
      onClick = _ref9.onClick;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    onClick: onClick,
    width: "30",
    height: "30",
    fill: fill,
    className: "bi bi-caret-left-square",
    viewBox: "0 0 16 16",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 449,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M10.205 12.456A.5.5 0 0 0 10.5 12V4a.5.5 0 0 0-.832-.374l-4.5 4a.5.5 0 0 0 0 .748l4.5 4a.5.5 0 0 0 .537.082z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 450,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 448,
    columnNumber: 9
  }, this);
}

_c9 = Backsvg;

function DeleteSvg(_ref10) {
  var fill = _ref10.fill,
      onClick = _ref10.onClick,
      style = _ref10.style;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
    style: {
      position: "static !important"
    },
    onClick: onClick,
    xmlns: "http://www.w3.org/2000/svg",
    width: "25",
    height: "25",
    fill: fill,
    className: "bi bi-trash",
    viewBox: "0 0 16 16",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 457,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      fillRule: "evenodd",
      d: "M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 458,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 456,
    columnNumber: 9
  }, this);
}

_c10 = DeleteSvg;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;

$RefreshReg$(_c, "Loader$dynamic");
$RefreshReg$(_c2, "Loader");
$RefreshReg$(_c3, "AdminDash");
$RefreshReg$(_c4, "Logo");
$RefreshReg$(_c5, "Dashicon");
$RefreshReg$(_c6, "SettingIcon");
$RefreshReg$(_c7, "Signout");
$RefreshReg$(_c8, "PlusSvg");
$RefreshReg$(_c9, "Backsvg");
$RefreshReg$(_c10, "DeleteSvg");

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


/***/ }),

/***/ "./styles/admindash.module.css":
/*!*************************************!*\
  !*** ./styles/admindash.module.css ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./admindash.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./styles/admindash.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./admindash.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./styles/admindash.module.css",
      function () {
        content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./admindash.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./styles/admindash.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./styles/admindash.module.css":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./styles/admindash.module.css ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".admindash_admindash__1VwiF {\n    width: 100vw;\n    height: 100vh;\n    background: #f2f6ff;\n    display: grid;\n    grid-template-columns:  1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr ;\n}\n.admindash_nav__36EqD {\n    grid-row: 1/-1;\n    grid-column: 1/3;\n    background-color: #1f1f47;\n    \n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr ;\n    \n}\n.admindash_admininfo__1Nlhq svg:hover {\n    fill: brightness(1.1);\n}\n.admindash_usernav__32c0j {\n    max-width: 250px;\n    max-height: 150px;\n    width: 230px;\n    height: 140px;\n    position: absolute;\n    right: 25px;\n    top: 60px;\n    background-color: #fff;\n}\n\n.admindash_nav__36EqD svg {\n    grid-row: 1/3;\n    align-self: center;\n    justify-self: center;\n   \n}\n.admindash_admininfo__1Nlhq {\n    grid-column: 11/-1;\n    grid-row: 1/-1;\n}\n.admindash_center__1DHY0 {\n    grid-column: 3/11;\n    grid-row: 1/-1;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr ;\n    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr ;\n}\n.admindash_active__25RFG {\n    width: 100%;\n}\n.admindash_center__1DHY0 h1 {\n    grid-column: 1/4;\n    grid-row: 1/3;\n    justify-self: center;\n    align-self: center;\n    font-weight: 700;\n    \n    /* padding: 25px 0 0 0; */\n}\n.admindash_textdata__1lqDp {\n    grid-column: 1/4;\n    grid-row: 1/3;\n    justify-self: center;\n    align-self: center;\n    height: 130px;\n    padding: 25px 0 0 0;\n    box-sizing: border-box;\n}\n.admindash_textdata__1lqDp h1 {\n    font-size: 36px;\n    font-weight: 700;\n    padding-bottom: 10px;\n}\n.admindash_textdata__1lqDp p {\n    font-size: 18px;\n    font-weight: 600;\n}\n.admindash_analytics__1dlGG {\n    grid-row: 3/12;\n    grid-column: 1/-1;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr ;\n    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr ;\n\n}\n.admindash_sales__r_3nl {\n    grid-row: 2/7;\n    grid-column: 2/12;\n    background-color: #1f1f47;\n    border-radius: 20px;\n}\n.admindash_secondary__2KHAa {\n    grid-row: 8/12;\n    grid-column: 2/7;\n    background-color: #1f1f47;\n    width: 95%;\n    border-radius: 20px;\n}\n.admindash_third__Nq2M8 {\n    grid-row:8/12;\n    grid-column: 7/12;\n    background-color: #1f1f47;\n    width: 95%;\n    justify-self: right;\n    border-radius: 20px;\n}\n.admindash_admininfo__1Nlhq {\n    display: grid;\n    grid-template-rows:  1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n    border-left: 2px solid #e9e9e9 ;\n    \n}\n.admindash_photo__2_NBt {\n    grid-row: 2/5;\n    width: 90%;\n    height: 90%;\n    justify-self: center;\n    background-color: #1f1f47;\n    align-self: center;\n    max-width: 150px;\n    max-height: 150px;\n    border-radius: 10c0px;\n}\n.admindash_admininfo__1Nlhq h1 {\n    grid-row: 5/6;\n    font-size: 36px;\n    font-weight: 600;\n    justify-self: center;\n    align-self: center;\n}\n.admindash_admininfo__1Nlhq p {\n    grid-row: 6/7;\n    font-size: 18px;\n    font-weight: 600;\n    justify-self: center;\n    align-self: top;\n}\n.admindash_admininfo__1Nlhq svg {\n    justify-self: right;\n    align-self: center;\n    padding-right: 50px;\n}\n.admindash_infosection__3kUcD {\n    grid-row: 7/12;\n    width: 90%;\n    justify-self: center;\n}\n.admindash_infosection__3kUcD div {\n    height:  80px;\n    /* width: 250px; */\n    background-color: #1f1f47;\n    margin: 20px 0;\n    box-sizing: border-box;\n    border-radius: 20px;\n}\n.admindash_nav__36EqD .admindash_options__1_1nZ {\n    grid-row: 3/9;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-content: space-around;\n}\n.admindash_nav__36EqD .admindash_options__1_1nZ div {\n    height: 50px;\n    width: 220px;\n    border-radius: 15px;\n    transition: all 300ms ease\n    ;\n}\n.admindash_nav__36EqD .admindash_options__1_1nZ div:hover {\n    background-color: #1f1f60;\n}\n.admindash_options__1_1nZ .admindash_active__25RFG {\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    grid-template-rows: 1fr;\n}\n.admindash_options__1_1nZ .admindash_active__25RFG svg {\n    align-self: center;\n    justify-self: center;\n}\n.admindash_options__1_1nZ .admindash_active__25RFG h1 {\n    align-self: center;\n    justify-self: left;\n}\n.admindash_options__1_1nZ:hover {\n    \n    filter: brightness(1.1);\n\n    transition: filter 500ms ease-in-out;\n}\n.admindash_nav__36EqD {\n    cursor: pointer;\n}\n.admindash_features__3pC7Q {\n    grid-column: 2/12   ;\n    grid-row: 3/12;\n    display: flex;\n    flex-wrap: wrap;\n    align-content: flex-start;\n    \n}\n.admindash_features__3pC7Q .admindash_feature__2G8Mj {\n    height: 155px;\n    width: 320px;\n    background-color: #fff;\n    margin-right: 25px;\n    margin-bottom: 25px;\n    border-radius: 30px;\n    \n}\n.admindash_feature__2G8Mj {\n    display: grid;\n    grid-template-columns: 2fr 4fr;\n    grid-template-rows: 1fr;\n    transition: all 300ms ease;\n    cursor: pointer;\n}\n.admindash_feature__2G8Mj:hover {\n    box-shadow: 0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);\n}\n.admindash_feature__2G8Mj svg {\n    justify-self: center;\n    align-self: center;\n    grid-column: 1/2;\n    grid-row: 1;\n    margin: 25px;\n    \n}\n.admindash_feature__2G8Mj h1 {\n    grid-column: 2/2;\n    grid-row: 1;\n    justify-self: left;\n    align-self: center;\n    font-size: 24px;\n}\n.admindash_featureform__2O3BA {\n    width: 80%;\n    height: 90%;\n    background-color: #fff;\n    border-radius: 25px;\n    transition: all 300ms ease;\n    cursor: pointer;\n}\n.admindash_featureform__2O3BA:hover {\n    box-shadow: 0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);\n}\n.admindash_featureform__2O3BA:active {\n    box-shadow: 0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);\n}\n.admindash_gobigger__3wfdZ {\n    \n    \n    position: absolute;\n    display: grid;\n    height: 100vh!important;\n    width: 100vw!important;\n    grid-template-rows: 1fr;\n    grid-template-columns: 1fr;\n    transition: all 300ms ease;\n    top:0;\n    left: 0;\n\n\n}\n.admindash_gobigger__3wfdZ svg {\n    position: absolute!important;\n    top: 25px;\n    left: 25px;\n}\n.admindash_addingform__1fXLx  {\n    width: 80%;\n}\n.admindash_gosmaller__NJIuc {\n    height: 155px!important;\n    width: 320px!important;\n    transition: all 200ms ease;\n}\n.admindash_uppercontainer__2fcib {\n    height: 80%;\n    width: 80%;\n    transform: translateX(-110%);\n    justify-self: center;\n    align-self: center;\n}\n.admindash_uppercontaineractive__3qPw4 h1 {\n    position: absolute;\n    top: 10px;\n    width: 100%;\n    text-align: center;\n}\n.admindash_uppercontaineractive__3qPw4 {\n    transform: translateX(0);\n    transition: all 300ms ease;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-evenly;\n    align-items: center;\n}\n.admindash_addingform1__1Fjo5 {\n    display: flex;\n    flex-direction: column;\n}\n\n\n.admindash_addingform2__ODpD- {\n    display: flex;\n    flex-direction: column;\n}\n.admindash_addingform3__2xWPg {\n    display: flex;\n    flex-direction: column;\n}\n.admindash_items__cTOdl {\n    justify-self: center;\n    align-self: center;\n    overflow-y: scroll;\n}\n.admindash_items__cTOdl svg {\n    position: static !important;\n}\n.admindash_addingItems__3XkGT {\n    \n}\n.admindash_subItems__p8vfR {\n    grid-column: 3 / auto;\n    justify-self: center;\n    align-self: center;\n    display: flex;\n    flex-direction: column;\n    overflow-y: scroll;\n}\n.admindash_subItems__p8vfR svg {\n    position: static!important;\n}\n.admindash_manage__2TbT8 {\n    \n}", "",{"version":3,"sources":["webpack://styles/admindash.module.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,aAAa;IACb,uEAAuE;IACvE,oEAAoE;AACxE;AACA;IACI,cAAc;IACd,gBAAgB;IAChB,yBAAyB;;IAEzB,aAAa;IACb,oEAAoE;;AAExE;AACA;IACI,qBAAqB;AACzB;AACA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,WAAW;IACX,SAAS;IACT,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,oBAAoB;;AAExB;AACA;IACI,kBAAkB;IAClB,cAAc;AAClB;AACA;IACI,iBAAiB;IACjB,cAAc;IACd,aAAa;IACb,uEAAuE;IACvE,oEAAoE;AACxE;AACA;IACI,WAAW;AACf;AACA;IACI,gBAAgB;IAChB,aAAa;IACb,oBAAoB;IACpB,kBAAkB;IAClB,gBAAgB;;IAEhB,yBAAyB;AAC7B;AACA;IACI,gBAAgB;IAChB,aAAa;IACb,oBAAoB;IACpB,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,sBAAsB;AAC1B;AACA;IACI,eAAe;IACf,gBAAgB;IAChB,oBAAoB;AACxB;AACA;IACI,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,cAAc;IACd,iBAAiB;IACjB,aAAa;IACb,uEAAuE;IACvE,oEAAoE;;AAExE;AACA;IACI,aAAa;IACb,iBAAiB;IACjB,yBAAyB;IACzB,mBAAmB;AACvB;AACA;IACI,cAAc;IACd,gBAAgB;IAChB,yBAAyB;IACzB,UAAU;IACV,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,iBAAiB;IACjB,yBAAyB;IACzB,UAAU;IACV,mBAAmB;IACnB,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,oEAAoE;IACpE,+BAA+B;;AAEnC;AACA;IACI,aAAa;IACb,UAAU;IACV,WAAW;IACX,oBAAoB;IACpB,yBAAyB;IACzB,kBAAkB;IAClB,gBAAgB;IAChB,iBAAiB;IACjB,qBAAqB;AACzB;AACA;IACI,aAAa;IACb,eAAe;IACf,gBAAgB;IAChB,oBAAoB;IACpB,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,eAAe;IACf,gBAAgB;IAChB,oBAAoB;IACpB,eAAe;AACnB;AACA;IACI,mBAAmB;IACnB,kBAAkB;IAClB,mBAAmB;AACvB;AACA;IACI,cAAc;IACd,UAAU;IACV,oBAAoB;AACxB;AACA;IACI,aAAa;IACb,kBAAkB;IAClB,yBAAyB;IACzB,cAAc;IACd,sBAAsB;IACtB,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,aAAa;IACb,eAAe;IACf,uBAAuB;IACvB,2BAA2B;AAC/B;AACA;IACI,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB;IACA;AACJ;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,uBAAuB;AAC3B;AACA;IACI,kBAAkB;IAClB,oBAAoB;AACxB;AACA;IACI,kBAAkB;IAClB,kBAAkB;AACtB;AACA;;IAEI,uBAAuB;;IAEvB,oCAAoC;AACxC;AACA;IACI,eAAe;AACnB;AACA;IACI,oBAAoB;IACpB,cAAc;IACd,aAAa;IACb,eAAe;IACf,yBAAyB;;AAE7B;AACA;IACI,aAAa;IACb,YAAY;IACZ,sBAAsB;IACtB,kBAAkB;IAClB,mBAAmB;IACnB,mBAAmB;;AAEvB;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,uBAAuB;IACvB,0BAA0B;IAC1B,eAAe;AACnB;AACA;IACI,kGAAkG;AACtG;AACA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,gBAAgB;IAChB,WAAW;IACX,YAAY;;AAEhB;AACA;IACI,gBAAgB;IAChB,WAAW;IACX,kBAAkB;IAClB,kBAAkB;IAClB,eAAe;AACnB;AACA;IACI,UAAU;IACV,WAAW;IACX,sBAAsB;IACtB,mBAAmB;IACnB,0BAA0B;IAC1B,eAAe;AACnB;AACA;IACI,kGAAkG;AACtG;AACA;IACI,kGAAkG;AACtG;AACA;;;IAGI,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,sBAAsB;IACtB,uBAAuB;IACvB,0BAA0B;IAC1B,0BAA0B;IAC1B,KAAK;IACL,OAAO;;;AAGX;AACA;IACI,4BAA4B;IAC5B,SAAS;IACT,UAAU;AACd;AACA;IACI,UAAU;AACd;AACA;IACI,uBAAuB;IACvB,sBAAsB;IACtB,0BAA0B;AAC9B;AACA;IACI,WAAW;IACX,UAAU;IACV,4BAA4B;IAC5B,oBAAoB;IACpB,kBAAkB;AACtB;AACA;IACI,kBAAkB;IAClB,SAAS;IACT,WAAW;IACX,kBAAkB;AACtB;AACA;IACI,wBAAwB;IACxB,0BAA0B;IAC1B,aAAa;IACb,eAAe;IACf,6BAA6B;IAC7B,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,sBAAsB;AAC1B;;;AAGA;IACI,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,kBAAkB;AACtB;AACA;IACI,2BAA2B;AAC/B;AACA;;AAEA;AACA;IACI,qBAAqB;IACrB,oBAAoB;IACpB,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,kBAAkB;AACtB;AACA;IACI,0BAA0B;AAC9B;AACA;;AAEA","sourcesContent":[".admindash {\n    width: 100vw;\n    height: 100vh;\n    background: #f2f6ff;\n    display: grid;\n    grid-template-columns:  1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr ;\n}\n.nav {\n    grid-row: 1/-1;\n    grid-column: 1/3;\n    background-color: #1f1f47;\n    \n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr ;\n    \n}\n.admininfo svg:hover {\n    fill: brightness(1.1);\n}\n.usernav {\n    max-width: 250px;\n    max-height: 150px;\n    width: 230px;\n    height: 140px;\n    position: absolute;\n    right: 25px;\n    top: 60px;\n    background-color: #fff;\n}\n\n.nav svg {\n    grid-row: 1/3;\n    align-self: center;\n    justify-self: center;\n   \n}\n.admininfo {\n    grid-column: 11/-1;\n    grid-row: 1/-1;\n}\n.center {\n    grid-column: 3/11;\n    grid-row: 1/-1;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr ;\n    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr ;\n}\n.active {\n    width: 100%;\n}\n.center h1 {\n    grid-column: 1/4;\n    grid-row: 1/3;\n    justify-self: center;\n    align-self: center;\n    font-weight: 700;\n    \n    /* padding: 25px 0 0 0; */\n}\n.textdata {\n    grid-column: 1/4;\n    grid-row: 1/3;\n    justify-self: center;\n    align-self: center;\n    height: 130px;\n    padding: 25px 0 0 0;\n    box-sizing: border-box;\n}\n.textdata h1 {\n    font-size: 36px;\n    font-weight: 700;\n    padding-bottom: 10px;\n}\n.textdata p {\n    font-size: 18px;\n    font-weight: 600;\n}\n.analytics {\n    grid-row: 3/12;\n    grid-column: 1/-1;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr ;\n    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr ;\n\n}\n.sales {\n    grid-row: 2/7;\n    grid-column: 2/12;\n    background-color: #1f1f47;\n    border-radius: 20px;\n}\n.secondary {\n    grid-row: 8/12;\n    grid-column: 2/7;\n    background-color: #1f1f47;\n    width: 95%;\n    border-radius: 20px;\n}\n.third {\n    grid-row:8/12;\n    grid-column: 7/12;\n    background-color: #1f1f47;\n    width: 95%;\n    justify-self: right;\n    border-radius: 20px;\n}\n.admininfo {\n    display: grid;\n    grid-template-rows:  1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n    border-left: 2px solid #e9e9e9 ;\n    \n}\n.photo {\n    grid-row: 2/5;\n    width: 90%;\n    height: 90%;\n    justify-self: center;\n    background-color: #1f1f47;\n    align-self: center;\n    max-width: 150px;\n    max-height: 150px;\n    border-radius: 10c0px;\n}\n.admininfo h1 {\n    grid-row: 5/6;\n    font-size: 36px;\n    font-weight: 600;\n    justify-self: center;\n    align-self: center;\n}\n.admininfo p {\n    grid-row: 6/7;\n    font-size: 18px;\n    font-weight: 600;\n    justify-self: center;\n    align-self: top;\n}\n.admininfo svg {\n    justify-self: right;\n    align-self: center;\n    padding-right: 50px;\n}\n.infosection {\n    grid-row: 7/12;\n    width: 90%;\n    justify-self: center;\n}\n.infosection div {\n    height:  80px;\n    /* width: 250px; */\n    background-color: #1f1f47;\n    margin: 20px 0;\n    box-sizing: border-box;\n    border-radius: 20px;\n}\n.nav .options {\n    grid-row: 3/9;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-content: space-around;\n}\n.nav .options div {\n    height: 50px;\n    width: 220px;\n    border-radius: 15px;\n    transition: all 300ms ease\n    ;\n}\n.nav .options div:hover {\n    background-color: #1f1f60;\n}\n.options .active {\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    grid-template-rows: 1fr;\n}\n.options .active svg {\n    align-self: center;\n    justify-self: center;\n}\n.options .active h1 {\n    align-self: center;\n    justify-self: left;\n}\n.options:hover {\n    \n    filter: brightness(1.1);\n\n    transition: filter 500ms ease-in-out;\n}\n.nav {\n    cursor: pointer;\n}\n.features {\n    grid-column: 2/12   ;\n    grid-row: 3/12;\n    display: flex;\n    flex-wrap: wrap;\n    align-content: flex-start;\n    \n}\n.features .feature {\n    height: 155px;\n    width: 320px;\n    background-color: #fff;\n    margin-right: 25px;\n    margin-bottom: 25px;\n    border-radius: 30px;\n    \n}\n.feature {\n    display: grid;\n    grid-template-columns: 2fr 4fr;\n    grid-template-rows: 1fr;\n    transition: all 300ms ease;\n    cursor: pointer;\n}\n.feature:hover {\n    box-shadow: 0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);\n}\n.feature svg {\n    justify-self: center;\n    align-self: center;\n    grid-column: 1/2;\n    grid-row: 1;\n    margin: 25px;\n    \n}\n.feature h1 {\n    grid-column: 2/2;\n    grid-row: 1;\n    justify-self: left;\n    align-self: center;\n    font-size: 24px;\n}\n.featureform {\n    width: 80%;\n    height: 90%;\n    background-color: #fff;\n    border-radius: 25px;\n    transition: all 300ms ease;\n    cursor: pointer;\n}\n.featureform:hover {\n    box-shadow: 0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);\n}\n.featureform:active {\n    box-shadow: 0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);\n}\n.gobigger {\n    \n    \n    position: absolute;\n    display: grid;\n    height: 100vh!important;\n    width: 100vw!important;\n    grid-template-rows: 1fr;\n    grid-template-columns: 1fr;\n    transition: all 300ms ease;\n    top:0;\n    left: 0;\n\n\n}\n.gobigger svg {\n    position: absolute!important;\n    top: 25px;\n    left: 25px;\n}\n.addingform  {\n    width: 80%;\n}\n.gosmaller {\n    height: 155px!important;\n    width: 320px!important;\n    transition: all 200ms ease;\n}\n.uppercontainer {\n    height: 80%;\n    width: 80%;\n    transform: translateX(-110%);\n    justify-self: center;\n    align-self: center;\n}\n.uppercontaineractive h1 {\n    position: absolute;\n    top: 10px;\n    width: 100%;\n    text-align: center;\n}\n.uppercontaineractive {\n    transform: translateX(0);\n    transition: all 300ms ease;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-evenly;\n    align-items: center;\n}\n.addingform1 {\n    display: flex;\n    flex-direction: column;\n}\n\n\n.addingform2 {\n    display: flex;\n    flex-direction: column;\n}\n.addingform3 {\n    display: flex;\n    flex-direction: column;\n}\n.items {\n    justify-self: center;\n    align-self: center;\n    overflow-y: scroll;\n}\n.items svg {\n    position: static !important;\n}\n.addingItems {\n    \n}\n.subItems {\n    grid-column: 3 / auto;\n    justify-self: center;\n    align-self: center;\n    display: flex;\n    flex-direction: column;\n    overflow-y: scroll;\n}\n.subItems svg {\n    position: static!important;\n}\n.manage {\n    \n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"admindash": "admindash_admindash__1VwiF",
	"nav": "admindash_nav__36EqD",
	"admininfo": "admindash_admininfo__1Nlhq",
	"usernav": "admindash_usernav__32c0j",
	"center": "admindash_center__1DHY0",
	"active": "admindash_active__25RFG",
	"textdata": "admindash_textdata__1lqDp",
	"analytics": "admindash_analytics__1dlGG",
	"sales": "admindash_sales__r_3nl",
	"secondary": "admindash_secondary__2KHAa",
	"third": "admindash_third__Nq2M8",
	"photo": "admindash_photo__2_NBt",
	"infosection": "admindash_infosection__3kUcD",
	"options": "admindash_options__1_1nZ",
	"features": "admindash_features__3pC7Q",
	"feature": "admindash_feature__2G8Mj",
	"featureform": "admindash_featureform__2O3BA",
	"gobigger": "admindash_gobigger__3wfdZ",
	"addingform": "admindash_addingform__1fXLx",
	"gosmaller": "admindash_gosmaller__NJIuc",
	"uppercontainer": "admindash_uppercontainer__2fcib",
	"uppercontaineractive": "admindash_uppercontaineractive__3qPw4",
	"addingform1": "admindash_addingform1__1Fjo5",
	"addingform2": "admindash_addingform2__ODpD-",
	"addingform3": "admindash_addingform3__2xWPg",
	"items": "admindash_items__cTOdl",
	"addingItems": "admindash_addingItems__3XkGT",
	"subItems": "admindash_subItems__p8vfR",
	"manage": "admindash_manage__2TbT8"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbmNvbnRyb2xzLmpzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2FkbWluZGFzaC5tb2R1bGUuY3NzP2I2YTkiLCJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9hZG1pbmRhc2gubW9kdWxlLmNzcyJdLCJuYW1lcyI6WyJMb2FkZXIiLCJkeW5hbWljIiwiQWRtaW5EYXNoIiwidXNlU3RhdGUiLCJ0b2dnbGUiLCJzZXRUb2dnbGUiLCJuYXYiLCJzZXROYXYiLCJmZWF0dXJlIiwic2V0RmVhdHVyZSIsIm1haW5UaXRsZSIsImltZ0xpbmsiLCJhZGQiLCJzZXRBZGQiLCJpbml0Iiwic2V0SW5pdCIsIm5hbWUiLCJwcmljZSIsImRhdGFpdGVtIiwic2V0ZGF0YUl0ZW0iLCJ0aXRsZSIsIkRlc2NyaXB0aW9uIiwiaW1hZ2VMaW5rIiwiaXRlbXMiLCJuZXdEYXRhIiwic2V0bmV3RGF0YSIsImVkaXQiLCJzZXRFZGl0IiwiZGF0YSIsInNldERhdGEiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwiZmRhdGEiLCJzZXRGZGF0YSIsInVzZUVmZmVjdCIsImF4aW9zIiwiSlNPTiIsInBhcnNlIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwic2Vzc2lvbiIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJlcnIiLCJoYW5kbGVyIiwic2V0SGFuZGxlciIsImNoYW5nZUV2ZW50IiwiZSIsImhlaWdodCIsIndpZHRoIiwiY2xhc3NOYW1lIiwic2V0VGltZW91dCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsInN0eWxlIiwiJCIsImFkZENsYXNzIiwicmVtb3ZlIiwibG9jYXRpb24iLCJyZWxvYWQiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclJhZGl1cyIsIm1hcCIsIml0ZW0iLCJfaWQiLCJncmlkQ29sdW1uIiwianVzdGlmeVNlbGYiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwibWFyZ2luIiwiZGlzcGxheSIsInBhZGRpbmciLCJkYXRhYSIsInBvc2l0aW9uIiwiYWxpZ25TZWxmIiwiZmxleERpcmVjdGlvbiIsInRhcmdldCIsInZhbHVlIiwia2V5IiwicHJldmVudERlZmF1bHQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInRva2VuIiwibWVzc2FnZSIsInBob3RvIiwic2FsZXMiLCJzZWNvbmRhcnkiLCJ0aGlyZCIsIkxvZ28iLCJEYXNoaWNvbiIsImZpbGwiLCJTZXR0aW5nSWNvbiIsIlNpZ25vdXQiLCJQbHVzU3ZnIiwib25DbGljayIsIkJhY2tzdmciLCJEZWxldGVTdmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQSxJQUFNQSxNQUFNLEdBQUdDLG1EQUFPLE1BQUM7QUFBQSxTQUFNLDZKQUFOO0FBQUEsQ0FBRDtBQUFBO0FBQUE7QUFBQSxrQ0FBYyx5Q0FBZDtBQUFBO0FBQUEsc0RBQWMsVUFBZDtBQUFBO0FBQUEsRUFBdEI7TUFBTUQsTTtBQUNTLFNBQVNFLFNBQVQsR0FBcUI7QUFBQTs7QUFBQTs7QUFBQSxrQkFFTEMsK0NBQVEsQ0FBQyxLQUFELENBRkg7QUFBQSxNQUV6QkMsTUFGeUI7QUFBQSxNQUVsQkMsU0FGa0I7O0FBQUEsbUJBR1hGLCtDQUFRLENBQUMsS0FBRCxDQUhHO0FBQUEsTUFHekJHLEdBSHlCO0FBQUEsTUFHckJDLE1BSHFCOztBQUFBLG1CQUlISiwrQ0FBUSxDQUFDLEtBQUQsQ0FKTDtBQUFBLE1BSXpCSyxPQUp5QjtBQUFBLE1BSWpCQyxVQUppQjs7QUFBQSxtQkFLWE4sK0NBQVEsQ0FBQztBQUMxQk8sYUFBUyxFQUFDLEVBRGdCO0FBRTFCQyxXQUFPLEVBQUM7QUFGa0IsR0FBRCxDQUxHO0FBQUEsTUFLekJDLEdBTHlCO0FBQUEsTUFLckJD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T0FBTyw0RkFBNEYsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxjQUFjLFdBQVcsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksY0FBYyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsY0FBYyxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGNBQWMsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxjQUFjLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFB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QixvQkFBb0IsNkJBQTZCLHlCQUF5QixHQUFHLGlCQUFpQixpQ0FBaUMsR0FBRyxXQUFXLFNBQVMsbUJBQW1CO0FBQ2huakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvY29tcG9uZW50c19hZG1pbmNvbnRyb2xzX2pzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi4vc3R5bGVzL2FkbWluZGFzaC5tb2R1bGUuY3NzXCJcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIlxuaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcblxuXG5cbmNvbnN0IExvYWRlciA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiLi9sb2FkZXJcIikpXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZG1pbkRhc2goKSB7XG4gICAgXG4gICAgY29uc3QgW3RvZ2dsZSxzZXRUb2dnbGVdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW25hdixzZXROYXZdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW2ZlYXR1cmUsc2V0RmVhdHVyZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBbYWRkLHNldEFkZF0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIG1haW5UaXRsZTpcIlwiLFxuICAgICAgICBpbWdMaW5rOlwiXCJcbiAgICAgICAgXG5cbiAgICB9KVxuICAgIGxldCBbaW5pdCxzZXRJbml0XSA9IHVzZVN0YXRlKFtdKVxuICAgIGxldCBbZGF0YWl0ZW0sIHNldGRhdGFJdGVtXSA9IHVzZVN0YXRlKFt7XG4gICAgICAgIG5hbWU6XCJcIixcbiAgICAgICAgcHJpY2U6XCJcIlxuICAgIH1dKVxuICAgIGxldCBbbmV3RGF0YSwgc2V0bmV3RGF0YV0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIHRpdGxlOlwiXCIsXG4gICAgICAgIERlc2NyaXB0aW9uOlwiXCIsXG4gICAgICAgIHByaWNlOlwiXCIsXG4gICAgICAgIGltYWdlTGluazpcIlwiLFxuICAgICAgICBpdGVtczpkYXRhaXRlbVxuICAgIH0pXG4gICAgXG4gICAgbGV0IFtlZGl0LHNldEVkaXRdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgbGV0IFtkYXRhLHNldERhdGFdID0gdXNlU3RhdGUoW10pXG4gICAgbGV0IFtmZGF0YSxzZXRGZGF0YV0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIGZpcnN0TmFtZTpcIlwiLFxuICAgICAgICBsYXN0TmFtZTpcIlwiLFxuICAgICAgICBlbWFpbDpcIlwiXG4gICAgfSlcbiAgICBcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBheGlvcy5nZXQoYC9hcGkvdXNlci8ke0pTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5zZXNzaW9uKX1gKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgfSlcbiAgICAgICAgYXhpb3MuZ2V0KFwiL2FwaS9hZGRGZWF0dXJlXCIpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXG4gICAgICAgICAgICBzZXREYXRhKHJlc3BvbnNlLmRhdGEpXG4gICAgICAgICAgICBcblxuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0dW1zZSBuYWkgaG8gcGF5ZWdhXCIpXG4gICAgICAgIH0pXG4gICAgfSxbXSlcbiAgICBcbiAgICBjb25zdCBbaGFuZGxlcixzZXRIYW5kbGVyXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIFxuICAgXG4gICAgYXN5bmMgZnVuY3Rpb24gY2hhbmdlRXZlbnQoZSxoZWlnaHQsd2lkdGgsZmVhdHVyZSxjbGFzc05hbWUpIHtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBpZihmZWF0dXJlKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5hZG1pbmRhc2hfZmVhdHVyZV9fMkc4TWpgKS5jbGFzc0xpc3QuYWRkKHN0eWxlLmdvYmlnZ2VyKVxuICAgICAgICAgICAgICAgICQoYC4ke3N0eWxlLnVwcGVyY29udGFpbmVyfWApLmFkZENsYXNzKGAke3N0eWxlLnVwcGVyY29udGFpbmVyYWN0aXZlfWApXG4gICAgICAgICAgICB9LDE1MilcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuYWRtaW5kYXNoX2ZlYXR1cmVfXzJHOE1qYCkuY2xhc3NMaXN0LnJlbW92ZShzdHlsZS5nb2JpZ2dlcilcblxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5hZG1pbmRhc2hfZmVhdHVyZV9fMkc4TWpgKS5jbGFzc0xpc3QuYWRkKHN0eWxlLmdvc21hbGxlcilcbiAgICAgICAgICAgIH0sMTUyKVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgc2V0RmVhdHVyZShmZWF0dXJlKVxuICAgICAgICAgICAgXG4gICAgICAgIH0sMTUwKVxuICAgIH1cbiAgICBpZih0b2dnbGUpIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5hZG1pbmRhc2h9PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hdiAmJiA8ZGl2IGNsYXNzTmFtZT17c3R5bGUudXNlcm5hdn0gPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB3aW5kb3cubG9jYWxTdG9yYWdlLnNlc3Npb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICAgICAgICAgICAgICAgIH19PiBTaWdub3V0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubmF2fT5cbiAgICAgICAgICAgICAgICA8TG9nbyAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5vcHRpb25zfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmFjdGl2ZX0gb25DbGljaz17KCkgPT4ge3NldFRvZ2dsZShmYWxzZSl9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RGFzaGljb24gZmlsbD1cIiNmMmY2ZmZcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7IGNvbG9yOiBcIiNmMmY2ZmZcIiwgZm9udFdlaWdodDogNDAwLCBmb250U2l6ZTogXCIyMnB4XCIgfX0+RGFzaGJvYXJkPC9oMT5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmFjdGl2ZX0gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiNmMmY2ZmZcIiwgYm9yZGVyUmFkaXVzOiBcIjE1cHhcIiB9fSBvbkNsaWNrPXsoKSA9PiB7IHNldFRvZ2dsZSh0cnVlKSB9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2V0dGluZ0ljb24gZmlsbD1cIiMxZjFmNDdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7IGNvbG9yOiBcIiMxZjFmNDdcIiwgZm9udFdlaWdodDogNDAwLCBmb250U2l6ZTogXCIyMnB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2V0dGluZ3NcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jZW50ZXJ9PlxuICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17e2ZvbnRTaXplOlwiMzZweFwifX0+U2V0dGluZ3M8L2gxPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5mZWF0dXJlc30+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHshZmVhdHVyZSAmJiA8PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmZlYXR1cmV9IG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZUV2ZW50KGUsIFwiNzAwcHhcIiwgXCI3MDBweFwiLCB0cnVlLHN0eWxlLmZlYXR1cmUpXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQbHVzU3ZnIGZpbGw9XCIjMWYxZjQ3XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5BZGQgYSBmZWF0dXJlPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFlZGl0KSByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmZlYXR1cmV9IGtleT17aXRlbS5faWR9IGlkPXtpdGVtLl9pZH0gb25DbGljaz17IGFzeW5jICgpID0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBheGlvcy5nZXQoYC9hcGkvYWRkRmVhdHVyZS8ke2l0ZW0uX2lkfWApLnRoZW4oYXN5bmMgcmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBzZXRJbml0KHJlc3BvbnNlLmRhdGEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEVkaXQodHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7IGdyaWRDb2x1bW46IFwiMS8tMVwiLCBqdXN0aWZ5U2VsZjpcImNlbnRlclwiIH19ID57aXRlbS50aXRsZX08L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGUuZmVhdHVyZX0gJHtzdHlsZS5nb2JpZ2dlcn0gYH0ga2V5PXtpdGVtLmRhdGEuX2lkfSBzdHlsZT17e2dyaWRUZW1wbGF0ZUNvbHVtbnM6XCIxZnIgMWZyIDFmclwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhY2tzdmcgZmlsbD1cIiMxZjFmNDdcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFZGl0KGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkbWluZGFzaF9nb2JpZ2dlcl9fM3dmZFpcIikuY2xhc3NMaXN0LnJlbW92ZShcImFkbWluZGFzaF9nb2JpZ2dlcl9fM3dmZFpcIilcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IC8+ICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5pdGVtc30gc3R5bGU9e3tqdXN0aWZ5U2VsZjpcImxlZnRcIixtYXJnaW46XCI1MHB4XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdC5kYXRhLm1hcCgoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17ZGF0YS5faWR9ICBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCJ9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6XCJhbGljZWJsdWVcIixwYWRkaW5nOlwiMjBweCA0MHB4XCIsbWFyZ2luOlwiMTVweCAwXCJ9fSBvbkNsaWNrPXsgYXN5bmMgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFhID0gYXdhaXQgYXhpb3MuZ2V0KGAvYXBpL2FkZEZlYXR1cmUvJHtpbml0Ll9pZH0vJHtkYXRhLl9pZH0vaXRlbXNgKS50aGVuKCBhc3luYyAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2V0SW5pdChyZXNwb25zZS5kYXRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBjb25zb2xlLmxvZyhyZXNwb25zZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gPntkYXRhLnRpdGxlIHx8IGRhdGEubmFtZX0gPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZVN2ZyBmaWxsPVwiYmxhY2tcIiBzdHlsZT17e3Bvc2l0aW9uOlwic3RhdGljICFpbXBvcnRhbnRcIn19IG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXhpb3MuZGVsZXRlKGAvYXBpL2FkZEZlYXR1cmUvJHtpbml0Ll9pZH0vJHtkYXRhLl9pZH1gKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5hZGRpbmdJdGVtc30gc3R5bGU9e3tqdXN0aWZ5U2VsZjpcImNlbnRlclwiLGFsaWduU2VsZjpcImNlbnRlclwiLGdyaWRDb2x1bW46XCIyLzNcIixkaXNwbGF5OlwiZmxleFwiLGZsZXhEaXJlY3Rpb246XCJjb2x1bW5cIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+QWRkaW5nIGFuIEVudHJ5PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJUaXRsZVwiIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0bmV3RGF0YSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ubmV3RGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTplLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJEZXNjaXB0aW9uXCIgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRuZXdEYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5uZXdEYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlc2NyaXB0aW9uOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJQcmljZVwiIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0bmV3RGF0YSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ubmV3RGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiSW1hZ2VMaW5rXCIgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRuZXdEYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5uZXdEYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlTGluazogZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjpcIiMxZjFmNDdcIixjb2xvcjpcIiNmZmZcIixoZWlnaHQ6XCI0MHB4XCIsYm9yZGVyUmFkaXVzOlwiMjVweFwifX0+U3VibWl0PC9idXR0b24+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5zdWJJdGVtc30gc3R5bGU9e3tncmlkQ29sdW1uOlwiM1wifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5BZGQgSXRlbXM8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIvYXBpL3Rlc3REYXRhYmFzZVwiIG1ldGhvZD1cIlBPU1RcIiBjbGFzc05hbWU9XCJpdGVtZm9ybVwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhaXRlbS5tYXAoKGl0ZW1zLGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSB7c3R5bGUubWFuYWdlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiSXRlbSBUaXRsZVwiIG5hbWU9XCJ0aXRsZVwiIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5pdCA9IGRhdGFpdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdFtrZXldLm5hbWUgPSBlLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJQcmljZVwiICBuYW1lPVwicHJpY2VcIiBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluaXQgPSBkYXRhaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRba2V5XS5wcmljZSA9IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXYgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBsdXNTdmcgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0ZGF0YUl0ZW0oWy4uLmRhdGFpdGVtLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiMxZjFmNDdcIiwgY29sb3I6IFwiI2ZmZlwiLCBoZWlnaHQ6IFwiNDBweFwiLCBib3JkZXJSYWRpdXM6IFwiMjVweFwiIH19IG9uQ2xpY2s9eyhlKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0uX2lkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3RGF0YVtcIml0ZW1zXCJdID0gZGF0YWl0ZW0gXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBheGlvcy5wb3N0KGAvYXBpL2FkZEZlYXR1cmUvJHtpbml0Ll9pZH1gLG5ld0RhdGEpLnRoZW4oKHJlc3BvbnNlKSA9PiBjb25zb2xlLmxvZyhyZXNwb25zZSkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZlYXR1cmUgJiYgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmZlYXR1cmV9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFja3N2ZyBmaWxsPVwiIzFmMWY0N1wiICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VFdmVudChlLCBcIjMyMHB4XCIsIFwiMTU1cHhcIiwgZmFsc2UsIHN0eWxlLmZlYXR1cmUpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS51cHBlcmNvbnRhaW5lcn0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3sgZm9udFNpemU6IFwiMzJweFwiIH19PkFkZCBhIGZlYXR1cmU8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYWRkaW5nZm9ybTF9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+TWFpbiB0aXRsZTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAgcGxhY2Vob2xkZXI9XCJUaXRsZVwiIG9uQ2hhbmdlPXsoZSkgPT4gKHNldEFkZCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uYWRkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1haW5UaXRsZTplLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJJbWFnZUxpbmtcIiBvbkNoYW5nZT17KGUpID0+IChzZXRBZGQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmFkZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWdMaW5rOmUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF4aW9zLnBvc3QoXCIvYXBpL2FkZEZlYXR1cmVcIiwgYWRkLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt3aW5kb3cuc2Vzc2lvbi50b2tlbn1gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuZGF0YS5tZXNzYWdlID09PSBcIkVudHJ5IEFkZGVkXCIpIHNldEhhbmRsZXIodHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PiBTdWJtaXQ8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyICYmIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5zdGF0dXN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPkVudHJ5IEFkZGVkPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmFkbWluaW5mb30+XG4gICAgICAgICAgICAgICAgPFNpZ25vdXQgZmlsbD1cIiMxZjFmNDdcIiBuYXY9e25hdn0gc2V0TmF2PXtzZXROYXZ9IC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnBob3RvfT5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxoMT57YCR7ZmRhdGEuZmlyc3ROYW1lIHx8IG51bGx9ICR7ZmRhdGEubGFzdE5hbWUgfHwgbnVsbH1gfTwvaDE+XG4gICAgICAgICAgICAgICAgPHA+e2ZkYXRhLmVtYWlsIHx8IG51bGx9PC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5pbmZvc2VjdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgIClcbiAgICBlbHNlIGlmICghdG9nZ2xlKSByZXR1cm4oXG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYWRtaW5kYXNofT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYXYgJiYgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnVzZXJuYXZ9ID5cbiAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2Vzc2lvblxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKClcbiAgICAgICAgICAgICAgICAgICAgIH19PiBTaWdub3V0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubmF2fT5cbiAgICAgICAgICAgICAgICA8TG9nbyAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5vcHRpb25zfSA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5hY3RpdmV9IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjZjJmNmZmXCIsIGJvcmRlclJhZGl1czogXCIxNXB4XCIgfX0gb25DbGljaz17KCkgPT4geyBzZXRUb2dnbGUoZmFsc2UpIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPERhc2hpY29uIGZpbGw9XCIjMWYxZjQ3XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyBjb2xvcjpcIiMxZjFmNDdcIixmb250V2VpZ2h0OjQwMCxmb250U2l6ZTpcIjIycHhcIn19PkRhc2hib2FyZDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmFjdGl2ZX0gb25DbGljaz17KGUpID0+IHsgXG4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VG9nZ2xlKCF0b2dnbGUpIFxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2V0dGluZ0ljb24gZmlsbD1cIiNmMmY2ZmZcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7IGNvbG9yOiBcIiNmMmY2ZmZcIiwgZm9udFdlaWdodDogNDAwLCBmb250U2l6ZTogXCIyMnB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2V0dGluZ3NcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNlbnRlcn0+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUudGV4dGRhdGF9PlxuICAgICAgICAgICAgICAgICAgIDxoMT5IZWxsbyx7ZmRhdGEuZmlyc3ROYW1lIHx8IG51bGx9PC9oMT5cbiAgICAgICAgICAgICAgICAgICA8cD5XZWxjb21lIGJhY2shPC9wPlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYW5hbHl0aWNzfT5cbiAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuc2FsZXN9PlxuICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuc2Vjb25kYXJ5fT5cblxuICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS50aGlyZH0+XG5cbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5hZG1pbmluZm99PlxuICAgICAgICAgICAgICAgIDxTaWdub3V0IGZpbGw9XCIjMWYxZjQ3XCIgbmF2PXtuYXZ9IHNldE5hdj17c2V0TmF2fSAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5waG90b30+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aDE+e2Ake2ZkYXRhLmZpcnN0TmFtZSB8fCBudWxsfSAke2ZkYXRhLmxhc3ROYW1lIHx8IG51bGx9YH08L2gxPlxuICAgICAgICAgICAgICAgIDxwPntmZGF0YS5lbWFpbCB8fCBudWxsfTwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaW5mb3NlY3Rpb259PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIFxuXG5mdW5jdGlvbiBMb2dvKCkge1xuICAgIHJldHVybihcbiAgICAgICAgPHN2ZyB3aWR0aD1cIjE4NFwiIGhlaWdodD1cIjEyOVwiIHZpZXdCb3g9XCIwIDAgMTg0IDEyOVwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgPHBhdGggZD1cIk00MS40NjgyIDM1Ljg0M1Y0OS40MjI2QzQxLjQ2ODIgNTEuNjc4OCA0MC43NjAyIDUzLjQ2MyAzOS4zNDQyIDU0Ljc3NTFDMzcuOTM3NiA1Ni4wODczIDM2LjAxMTggNTYuNzQzNCAzMy41NjY5IDU2Ljc0MzRDMzEuMTU5NiA1Ni43NDM0IDI5LjI0OCA1Ni4xMDYyIDI3LjgzMiA1NC44MzE4QzI2LjQxNiA1My41NTc0IDI1LjY5MzggNTEuODA2MiAyNS42NjU1IDQ5LjU3ODRWMzUuODQzSDI5LjkxMzVWNDkuNDUwOUMyOS45MTM1IDUwLjgwMDkgMzAuMjM0NSA1MS43ODc0IDMwLjg3NjQgNTIuNDEwNEMzMS41Mjc4IDUzLjAyNCAzMi40MjQ2IDUzLjMzMDggMzMuNTY2OSA1My4zMzA4QzM1Ljk1NTIgNTMuMzMwOCAzNy4xNjgzIDUyLjA3NTMgMzcuMjA2IDQ5LjU2NDJWMzUuODQzSDQxLjQ2ODJaTTYxLjcxNzIgNTYuNDYwMkg1Ny40NjkyTDQ5LjE5OTcgNDIuODk0OFY1Ni40NjAySDQ0Ljk1MTZWMzUuODQzSDQ5LjE5OTdMNTcuNDgzNCA0OS40MzY4VjM1Ljg0M0g2MS43MTcyVjU2LjQ2MDJaTTY5Ljk0NDMgNTYuNDYwMkg2NS42OTYzVjM1Ljg0M0g2OS45NDQzVjU2LjQ2MDJaXCIgZmlsbD1cIiNGRUZFRkVcIiAvPlxuICAgICAgICAgICAgPHBhdGggZD1cIk04Ny40ODY3IDU2LjQ2MDJIODMuMjM4N1Y0Ny42MjQzSDc0Ljk1NVY1Ni40NjAySDcwLjcwNjlWMzUuODQzSDc0Ljk1NVY0NC4xOTc1SDgzLjIzODdWMzUuODQzSDg3LjQ4NjdWNTYuNDYwMlpNMTAzLjYxNSA0Ny41MjUxSDk1LjQ1ODlWNTMuMDQ3NkgxMDUuMDMxVjU2LjQ2MDJIOTEuMjEwOFYzNS44NDNIMTA1LjAwM1YzOS4yODM5SDk1LjQ1ODlWNDQuMTk3NUgxMDMuNjE1VjQ3LjUyNTFaTTExMS43NzEgNTMuMDQ3NkgxMjAuNzkxVjU2LjQ2MDJIMTA3LjUyM1YzNS44NDNIMTExLjc3MVY1My4wNDc2Wk0xMjcuNDg5IDQ5LjE5NlY1Ni40NjAySDEyMy4yNDFWMzUuODQzSDEzMS4yODRDMTMyLjgzMiAzNS44NDMgMTM0LjE5MiAzNi4xMjYyIDEzNS4zNjIgMzYuNjkyNkMxMzYuNTQyIDM3LjI1OSAxMzcuNDQ4IDM4LjA2NjIgMTM4LjA4MSAzOS4xMTRDMTM4LjcxMyA0MC4xNTI0IDEzOS4wMyA0MS4zMzcyIDEzOS4wMyA0Mi42NjgyQzEzOS4wMyA0NC42ODg0IDEzOC4zMzYgNDYuMjgzOCAxMzYuOTQ4IDQ3LjQ1NDNDMTM1LjU3IDQ4LjYxNTUgMTMzLjY1OCA0OS4xOTYgMTMxLjIxMyA0OS4xOTZIMTI3LjQ4OVpNMTI3LjQ4OSA0NS43NTUxSDEzMS4yODRDMTMyLjQwNyA0NS43NTUxIDEzMy4yNjIgNDUuNDkwOCAxMzMuODQ3IDQ0Ljk2MjJDMTM0LjQ0MiA0NC40MzM1IDEzNC43MzkgNDMuNjc4MyAxMzQuNzM5IDQyLjY5NjVDMTM0LjczOSA0MS42ODY0IDEzNC40NDIgNDAuODY5OSAxMzMuODQ3IDQwLjI0NjhDMTMzLjI1MiAzOS42MjM4IDEzMi40MzEgMzkuMzAyOCAxMzEuMzgzIDM5LjI4MzlIMTI3LjQ4OVY0NS43NTUxWlwiIGZpbGw9XCJ3aGl0ZVwiIC8+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9zdmc+XG5cbiAgICApXG59XG5mdW5jdGlvbiBEYXNoaWNvbih7ZmlsbH0pIHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxzdmcgdmVyc2lvbj1cIjEuMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI1XCIgaGVpZ2h0PVwiMjVcIiB2aWV3Qm94PVwiMCAwIDUxMi4wMDAwMDAgNTEyLjAwMDAwMFwiIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZCBtZWV0XCIgZmlsbD1cImJsdWVcIj5cblxuICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAuMDAwMDAwLDUxMi4wMDAwMDApIHNjYWxlKDAuMTAwMDAwLC0wLjEwMDAwMClcIiBmaWxsPVwiIzAwMDAwMFwiIHN0cm9rZT1cIm5vbmVcIj5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTI3NSA1MTA2IGMtMTExIC0zNSAtMTkwIC0xMDQgLTIzOSAtMjA2IGwtMzEgLTY1IDAgLTU3MCAwIC01NzAgMzMgLTY3IGM0MCAtODIgMTE5IC0xNTcgMjAwIC0xOTAgbDU3IC0yMyA4NDAgLTMgYzYwMyAtMiA4NTcgMCA5MDAgOCAxNjAgMzEgMjc0IDE0NSAzMDUgMzA1IDggNDIgMTAgMjE2IDggNTgwIC0zIDUxNyAtMyA1MjAgLTI2IDU3NyAtMzMgODEgLTEwOCAxNjAgLTE5MCAyMDAgbC02NyAzMyAtODc1IDIgYy02ODggMiAtODg0IC0xIC05MTUgLTExelwiIGZpbGw9IHtmaWxsfSAvPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMzA0OSA1MTA2IGMtMTA2IC0yOCAtMjA5IC0xMjEgLTI1MSAtMjI0IGwtMjMgLTU3IC0zIC0xMTYwIGMtMiAtODM4IDAgLTExNzcgOCAtMTIyMCAzMSAtMTYwIDE0NSAtMjc0IDMwNSAtMzA1IDQzIC04IDI5NyAtMTAgOTAwIC04IGw4NDAgMyA1NyAyMyBjODEgMzMgMTYwIDEwOCAyMDAgMTkwIGwzMyA2NyAwIDEyMTAgMCAxMjEwIC0zMSA2NSBjLTQwIDg0IC0xMDAgMTQ0IC0xODIgMTgzIGwtNjcgMzIgLTg3MCAyIGMtNjY3IDEgLTg4MSAtMSAtOTE2IC0xMXpcIiBmaWxsPXtmaWxsfS8+XG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk0zMDAgMjk3OSBjLTExMiAtMjIgLTIxNyAtMTA3IC0yNjggLTIxNyBsLTI3IC01NyAwIC0xMjEwIDAgLTEyMTAgMzEgLTY1IGMzOSAtODMgMTAxIC0xNDUgMTg0IC0xODQgbDY1IC0zMSA4OTAgMCA4OTAgMCA2NyAzMyBjODIgNDAgMTU3IDExOSAxOTAgMjAwIGwyMyA1NyAzIDExNjAgYzIgODM4IDAgMTE3NyAtOCAxMjIwIC0zMCAxNTcgLTE0MiAyNzEgLTI5OCAzMDQgLTY0IDEzIC0xNjcyIDE0IC0xNzQyIDB6XCIgZmlsbD17ZmlsbH0gLz5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTMwNjUgMTY5NiBjLTE1MCAtMzcgLTI1NSAtMTQ4IC0yODUgLTMwMSAtOCAtNDIgLTEwIC0yMTUgLTggLTU4MCAzIC01MTcgMyAtNTIwIDI2IC01NzcgMzMgLTgxIDEwOCAtMTYwIDE5MCAtMjAwIGw2NyAtMzMgODkwIDAgODkwIDAgNjcgMzIgYzgyIDM5IDE0MiA5OSAxODIgMTgzIGwzMSA2NSAwIDU3MCAwIDU3MCAtMzMgNjcgYy00MCA4MiAtMTE5IDE1NyAtMjAwIDE5MCBsLTU3IDIzIC04NTUgMiBjLTY0OSAxIC04NjcgLTEgLTkwNSAtMTF6XCIgZmlsbD17ZmlsbH0gLz5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxufVxuZnVuY3Rpb24gU2V0dGluZ0ljb24oe2ZpbGx9KSB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI1XCIgaGVpZ2h0PVwiMjVcIiBmaWxsPXtmaWxsfSBjbGFzc05hbWU9XCJiaSBiaS1nZWFyLWZpbGxcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTkuNDA1IDEuMDVjLS40MTMtMS40LTIuMzk3LTEuNC0yLjgxIDBsLS4xLjM0YTEuNDY0IDEuNDY0IDAgMCAxLTIuMTA1Ljg3MmwtLjMxLS4xN2MtMS4yODMtLjY5OC0yLjY4Ni43MDUtMS45ODcgMS45ODdsLjE2OS4zMTFjLjQ0Ni44Mi4wMjMgMS44NDEtLjg3MiAyLjEwNWwtLjM0LjFjLTEuNC40MTMtMS40IDIuMzk3IDAgMi44MWwuMzQuMWExLjQ2NCAxLjQ2NCAwIDAgMSAuODcyIDIuMTA1bC0uMTcuMzFjLS42OTggMS4yODMuNzA1IDIuNjg2IDEuOTg3IDEuOTg3bC4zMTEtLjE2OWExLjQ2NCAxLjQ2NCAwIDAgMSAyLjEwNS44NzJsLjEuMzRjLjQxMyAxLjQgMi4zOTcgMS40IDIuODEgMGwuMS0uMzRhMS40NjQgMS40NjQgMCAwIDEgMi4xMDUtLjg3MmwuMzEuMTdjMS4yODMuNjk4IDIuNjg2LS43MDUgMS45ODctMS45ODdsLS4xNjktLjMxMWExLjQ2NCAxLjQ2NCAwIDAgMSAuODcyLTIuMTA1bC4zNC0uMWMxLjQtLjQxMyAxLjQtMi4zOTcgMC0yLjgxbC0uMzQtLjFhMS40NjQgMS40NjQgMCAwIDEtLjg3Mi0yLjEwNWwuMTctLjMxYy42OTgtMS4yODMtLjcwNS0yLjY4Ni0xLjk4Ny0xLjk4N2wtLjMxMS4xNjlhMS40NjQgMS40NjQgMCAwIDEtMi4xMDUtLjg3MmwtLjEtLjM0ek04IDEwLjkzYTIuOTI5IDIuOTI5IDAgMSAxIDAtNS44NiAyLjkyOSAyLjkyOSAwIDAgMSAwIDUuODU4elwiIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcbn1cbmZ1bmN0aW9uIFNpZ25vdXQoe2ZpbGwsbmF2LHNldE5hdn0pe1xuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIFxuICAgICAgICA8c3ZnIG9uQ2xpY2s9eygpID0+IHNldE5hdighbmF2KX0gYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiB3aWR0aD1cIjMwXCIgaGVpZ2h0PVwiMzBcIiBkYXRhLXByZWZpeD1cImZhclwiIGRhdGEtaWNvbj1cInVzZXItY2lyY2xlXCIgY2xhc3NOYW1lPVwic3ZnLWlubGluZS0tZmEgZmEtdXNlci1jaXJjbGUgZmEtdy0xNlwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA0OTYgNTEyXCI+PHBhdGggZmlsbD17ZmlsbH0gZD1cIk0yNDggMTA0Yy01MyAwLTk2IDQzLTk2IDk2czQzIDk2IDk2IDk2IDk2LTQzIDk2LTk2LTQzLTk2LTk2LTk2em0wIDE0NGMtMjYuNSAwLTQ4LTIxLjUtNDgtNDhzMjEuNS00OCA0OC00OCA0OCAyMS41IDQ4IDQ4LTIxLjUgNDgtNDggNDh6bTAtMjQwQzExMSA4IDAgMTE5IDAgMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzg1IDggMjQ4IDh6bTAgNDQ4Yy00OS43IDAtOTUuMS0xOC4zLTEzMC4xLTQ4LjQgMTQuOS0yMyA0MC40LTM4LjYgNjkuNi0zOS41IDIwLjggNi40IDQwLjYgOS42IDYwLjUgOS42czM5LjctMy4xIDYwLjUtOS42YzI5LjIgMSA1NC43IDE2LjUgNjkuNiAzOS41LTM1IDMwLjEtODAuNCA0OC40LTEzMC4xIDQ4LjR6bTE2Mi43LTg0LjFjLTI0LjQtMzEuNC02Mi4xLTUxLjktMTA1LjEtNTEuOS0xMC4yIDAtMjYgOS42LTU3LjYgOS42LTMxLjUgMC00Ny40LTkuNi01Ny42LTkuNi00Mi45IDAtODAuNiAyMC41LTEwNS4xIDUxLjlDNjEuOSAzMzkuMiA0OCAyOTkuMiA0OCAyNTZjMC0xMTAuMyA4OS43LTIwMCAyMDAtMjAwczIwMCA4OS43IDIwMCAyMDBjMCA0My4yLTEzLjkgODMuMi0zNy4zIDExNS45elwiPjwvcGF0aD48L3N2Zz5cbiAgICApXG59XG5mdW5jdGlvbiBQbHVzU3ZnKHtmaWxsLG9uQ2xpY2t9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHN2ZyBvbkNsaWNrPXtvbkNsaWNrfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIzMFwiIGhlaWdodD1cIjMwXCIgZmlsbD17ZmlsbH0gY2xhc3NOYW1lPVwiYmkgYmktcGx1cy1jaXJjbGUtZmlsbFwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTYgOEE4IDggMCAxIDEgMCA4YTggOCAwIDAgMSAxNiAwek04LjUgNC41YS41LjUgMCAwIDAtMSAwdjNoLTNhLjUuNSAwIDAgMCAwIDFoM3YzYS41LjUgMCAwIDAgMSAwdi0zaDNhLjUuNSAwIDAgMCAwLTFoLTN2LTN6XCIgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxufVxuZnVuY3Rpb24gQmFja3N2Zyh7ZmlsbCxvbkNsaWNrfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIG9uQ2xpY2s9e29uQ2xpY2t9IHdpZHRoPVwiMzBcIiBoZWlnaHQ9XCIzMFwiIGZpbGw9e2ZpbGx9IGNsYXNzTmFtZT1cImJpIGJpLWNhcmV0LWxlZnQtc3F1YXJlXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0xNCAxYTEgMSAwIDAgMSAxIDF2MTJhMSAxIDAgMCAxLTEgMUgyYTEgMSAwIDAgMS0xLTFWMmExIDEgMCAwIDEgMS0xaDEyek0yIDBhMiAyIDAgMCAwLTIgMnYxMmEyIDIgMCAwIDAgMiAyaDEyYTIgMiAwIDAgMCAyLTJWMmEyIDIgMCAwIDAtMi0ySDJ6XCIgLz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTAuMjA1IDEyLjQ1NkEuNS41IDAgMCAwIDEwLjUgMTJWNGEuNS41IDAgMCAwLS44MzItLjM3NGwtNC41IDRhLjUuNSAwIDAgMCAwIC43NDhsNC41IDRhLjUuNSAwIDAgMCAuNTM3LjA4MnpcIiAvPlxuICAgICAgICA8L3N2Zz5cbiAgICApXG59XG5mdW5jdGlvbiBEZWxldGVTdmcoe2ZpbGwsb25DbGljayxzdHlsZX0pIHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxzdmcgc3R5bGU9e3twb3NpdGlvbjpcInN0YXRpYyAhaW1wb3J0YW50XCJ9fSBvbkNsaWNrPXtvbkNsaWNrfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNVwiIGhlaWdodD1cIjI1XCIgZmlsbD17ZmlsbH0gY2xhc3NOYW1lPVwiYmkgYmktdHJhc2hcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTUuNSA1LjVBLjUuNSAwIDAgMSA2IDZ2NmEuNS41IDAgMCAxLTEgMFY2YS41LjUgMCAwIDEgLjUtLjV6bTIuNSAwYS41LjUgMCAwIDEgLjUuNXY2YS41LjUgMCAwIDEtMSAwVjZhLjUuNSAwIDAgMSAuNS0uNXptMyAuNWEuNS41IDAgMCAwLTEgMHY2YS41LjUgMCAwIDAgMSAwVjZ6XCIgLz5cbiAgICAgICAgICAgIDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTQuNSAzYTEgMSAwIDAgMS0xIDFIMTN2OWEyIDIgMCAwIDEtMiAySDVhMiAyIDAgMCAxLTItMlY0aC0uNWExIDEgMCAwIDEtMS0xVjJhMSAxIDAgMCAxIDEtMUg2YTEgMSAwIDAgMSAxLTFoMmExIDEgMCAwIDEgMSAxaDMuNWExIDEgMCAwIDEgMSAxdjF6TTQuMTE4IDQgNCA0LjA1OVYxM2ExIDEgMCAwIDAgMSAxaDZhMSAxIDAgMCAwIDEtMVY0LjA1OUwxMS44ODIgNEg0LjExOHpNMi41IDNWMmgxMXYxaC0xMXpcIiAvPlxuICAgICAgICA8L3N2Zz5cbiAgICApXG59IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbMl0udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzJdLnVzZVsyXSEuL2FkbWluZGFzaC5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbMl0udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzJdLnVzZVsyXSEuL2FkbWluZGFzaC5tb2R1bGUuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzJdLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlsyXS51c2VbMl0hLi9hZG1pbmRhc2gubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuYWRtaW5kYXNoX2FkbWluZGFzaF9fMVZ3aUYge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQ6ICNmMmY2ZmY7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDtcXG59XFxuLmFkbWluZGFzaF9uYXZfXzM2RXFEIHtcXG4gICAgZ3JpZC1yb3c6IDEvLTE7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZjFmNDc7XFxuICAgIFxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDtcXG4gICAgXFxufVxcbi5hZG1pbmRhc2hfYWRtaW5pbmZvX18xTmxocSBzdmc6aG92ZXIge1xcbiAgICBmaWxsOiBicmlnaHRuZXNzKDEuMSk7XFxufVxcbi5hZG1pbmRhc2hfdXNlcm5hdl9fMzJjMGoge1xcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcXG4gICAgd2lkdGg6IDIzMHB4O1xcbiAgICBoZWlnaHQ6IDE0MHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAyNXB4O1xcbiAgICB0b3A6IDYwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcblxcbi5hZG1pbmRhc2hfbmF2X18zNkVxRCBzdmcge1xcbiAgICBncmlkLXJvdzogMS8zO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgIFxcbn1cXG4uYWRtaW5kYXNoX2FkbWluaW5mb19fMU5saHEge1xcbiAgICBncmlkLWNvbHVtbjogMTEvLTE7XFxuICAgIGdyaWQtcm93OiAxLy0xO1xcbn1cXG4uYWRtaW5kYXNoX2NlbnRlcl9fMURIWTAge1xcbiAgICBncmlkLWNvbHVtbjogMy8xMTtcXG4gICAgZ3JpZC1yb3c6IDEvLTE7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDtcXG59XFxuLmFkbWluZGFzaF9hY3RpdmVfXzI1UkZHIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbi5hZG1pbmRhc2hfY2VudGVyX18xREhZMCBoMSB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzQ7XFxuICAgIGdyaWQtcm93OiAxLzM7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIFxcbiAgICAvKiBwYWRkaW5nOiAyNXB4IDAgMCAwOyAqL1xcbn1cXG4uYWRtaW5kYXNoX3RleHRkYXRhX18xbHFEcCB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzQ7XFxuICAgIGdyaWQtcm93OiAxLzM7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTMwcHg7XFxuICAgIHBhZGRpbmc6IDI1cHggMCAwIDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi5hZG1pbmRhc2hfdGV4dGRhdGFfXzFscURwIGgxIHtcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuLmFkbWluZGFzaF90ZXh0ZGF0YV9fMWxxRHAgcCB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLmFkbWluZGFzaF9hbmFseXRpY3NfXzFkbEdHIHtcXG4gICAgZ3JpZC1yb3c6IDMvMTI7XFxuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciA7XFxuXFxufVxcbi5hZG1pbmRhc2hfc2FsZXNfX3JfM25sIHtcXG4gICAgZ3JpZC1yb3c6IDIvNztcXG4gICAgZ3JpZC1jb2x1bW46IDIvMTI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZjFmNDc7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcbi5hZG1pbmRhc2hfc2Vjb25kYXJ5X18yS0hBYSB7XFxuICAgIGdyaWQtcm93OiA4LzEyO1xcbiAgICBncmlkLWNvbHVtbjogMi83O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYxZjQ3O1xcbiAgICB3aWR0aDogOTUlO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG4uYWRtaW5kYXNoX3RoaXJkX19OcTJNOCB7XFxuICAgIGdyaWQtcm93OjgvMTI7XFxuICAgIGdyaWQtY29sdW1uOiA3LzEyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYxZjQ3O1xcbiAgICB3aWR0aDogOTUlO1xcbiAgICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG4uYWRtaW5kYXNoX2FkbWluaW5mb19fMU5saHEge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6ICAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmcjtcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjZTllOWU5IDtcXG4gICAgXFxufVxcbi5hZG1pbmRhc2hfcGhvdG9fXzJfTkJ0IHtcXG4gICAgZ3JpZC1yb3c6IDIvNTtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgaGVpZ2h0OiA5MCU7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYxZjQ3O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1heC13aWR0aDogMTUwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMGMwcHg7XFxufVxcbi5hZG1pbmRhc2hfYWRtaW5pbmZvX18xTmxocSBoMSB7XFxuICAgIGdyaWQtcm93OiA1LzY7XFxuICAgIGZvbnQtc2l6ZTogMzZweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuLmFkbWluZGFzaF9hZG1pbmluZm9fXzFObGhxIHAge1xcbiAgICBncmlkLXJvdzogNi83O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiB0b3A7XFxufVxcbi5hZG1pbmRhc2hfYWRtaW5pbmZvX18xTmxocSBzdmcge1xcbiAgICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XFxufVxcbi5hZG1pbmRhc2hfaW5mb3NlY3Rpb25fXzNrVWNEIHtcXG4gICAgZ3JpZC1yb3c6IDcvMTI7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG4uYWRtaW5kYXNoX2luZm9zZWN0aW9uX18za1VjRCBkaXYge1xcbiAgICBoZWlnaHQ6ICA4MHB4O1xcbiAgICAvKiB3aWR0aDogMjUwcHg7ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZjFmNDc7XFxuICAgIG1hcmdpbjogMjBweCAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG4uYWRtaW5kYXNoX25hdl9fMzZFcUQgLmFkbWluZGFzaF9vcHRpb25zX18xXzFuWiB7XFxuICAgIGdyaWQtcm93OiAzLzk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuLmFkbWluZGFzaF9uYXZfXzM2RXFEIC5hZG1pbmRhc2hfb3B0aW9uc19fMV8xblogZGl2IHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogMjIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlXFxuICAgIDtcXG59XFxuLmFkbWluZGFzaF9uYXZfXzM2RXFEIC5hZG1pbmRhc2hfb3B0aW9uc19fMV8xblogZGl2OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFmMWY2MDtcXG59XFxuLmFkbWluZGFzaF9vcHRpb25zX18xXzFuWiAuYWRtaW5kYXNoX2FjdGl2ZV9fMjVSRkcge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbn1cXG4uYWRtaW5kYXNoX29wdGlvbnNfXzFfMW5aIC5hZG1pbmRhc2hfYWN0aXZlX18yNVJGRyBzdmcge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG4uYWRtaW5kYXNoX29wdGlvbnNfXzFfMW5aIC5hZG1pbmRhc2hfYWN0aXZlX18yNVJGRyBoMSB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBsZWZ0O1xcbn1cXG4uYWRtaW5kYXNoX29wdGlvbnNfXzFfMW5aOmhvdmVyIHtcXG4gICAgXFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjEpO1xcblxcbiAgICB0cmFuc2l0aW9uOiBmaWx0ZXIgNTAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcbi5hZG1pbmRhc2hfbmF2X18zNkVxRCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmFkbWluZGFzaF9mZWF0dXJlc19fM3BDN1Ege1xcbiAgICBncmlkLWNvbHVtbjogMi8xMiAgIDtcXG4gICAgZ3JpZC1yb3c6IDMvMTI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcXG4gICAgXFxufVxcbi5hZG1pbmRhc2hfZmVhdHVyZXNfXzNwQzdRIC5hZG1pbmRhc2hfZmVhdHVyZV9fMkc4TWoge1xcbiAgICBoZWlnaHQ6IDE1NXB4O1xcbiAgICB3aWR0aDogMzIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIG1hcmdpbi1yaWdodDogMjVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgXFxufVxcbi5hZG1pbmRhc2hfZmVhdHVyZV9fMkc4TWoge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciA0ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uYWRtaW5kYXNoX2ZlYXR1cmVfXzJHOE1qOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IC0xcHggcmdiYSgwLDAsMCwuMiksMCA0cHggNXB4IDAgcmdiYSgwLDAsMCwuMTQpLDAgMXB4IDEwcHggMCByZ2JhKDAsMCwwLC4xMik7XFxufVxcbi5hZG1pbmRhc2hfZmVhdHVyZV9fMkc4TWogc3ZnIHtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICAgIG1hcmdpbjogMjVweDtcXG4gICAgXFxufVxcbi5hZG1pbmRhc2hfZmVhdHVyZV9fMkc4TWogaDEge1xcbiAgICBncmlkLWNvbHVtbjogMi8yO1xcbiAgICBncmlkLXJvdzogMTtcXG4gICAganVzdGlmeS1zZWxmOiBsZWZ0O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuLmFkbWluZGFzaF9mZWF0dXJlZm9ybV9fMk8zQkEge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IDkwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2U7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmFkbWluZGFzaF9mZWF0dXJlZm9ybV9fMk8zQkE6aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggLTFweCByZ2JhKDAsMCwwLC4yKSwwIDRweCA1cHggMCByZ2JhKDAsMCwwLC4xNCksMCAxcHggMTBweCAwIHJnYmEoMCwwLDAsLjEyKTtcXG59XFxuLmFkbWluZGFzaF9mZWF0dXJlZm9ybV9fMk8zQkE6YWN0aXZlIHtcXG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IC0xcHggcmdiYSgwLDAsMCwuMiksMCA0cHggNXB4IDAgcmdiYSgwLDAsMCwuMTQpLDAgMXB4IDEwcHggMCByZ2JhKDAsMCwwLC4xMik7XFxufVxcbi5hZG1pbmRhc2hfZ29iaWdnZXJfXzN3ZmRaIHtcXG4gICAgXFxuICAgIFxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGhlaWdodDogMTAwdmghaW1wb3J0YW50O1xcbiAgICB3aWR0aDogMTAwdnchaW1wb3J0YW50O1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlO1xcbiAgICB0b3A6MDtcXG4gICAgbGVmdDogMDtcXG5cXG5cXG59XFxuLmFkbWluZGFzaF9nb2JpZ2dlcl9fM3dmZFogc3ZnIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlIWltcG9ydGFudDtcXG4gICAgdG9wOiAyNXB4O1xcbiAgICBsZWZ0OiAyNXB4O1xcbn1cXG4uYWRtaW5kYXNoX2FkZGluZ2Zvcm1fXzFmWEx4ICB7XFxuICAgIHdpZHRoOiA4MCU7XFxufVxcbi5hZG1pbmRhc2hfZ29zbWFsbGVyX19OSkl1YyB7XFxuICAgIGhlaWdodDogMTU1cHghaW1wb3J0YW50O1xcbiAgICB3aWR0aDogMzIwcHghaW1wb3J0YW50O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZTtcXG59XFxuLmFkbWluZGFzaF91cHBlcmNvbnRhaW5lcl9fMmZjaWIge1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMTAlKTtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuLmFkbWluZGFzaF91cHBlcmNvbnRhaW5lcmFjdGl2ZV9fM3FQdzQgaDEge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmFkbWluZGFzaF91cHBlcmNvbnRhaW5lcmFjdGl2ZV9fM3FQdzQge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uYWRtaW5kYXNoX2FkZGluZ2Zvcm0xX18xRmpvNSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcblxcbi5hZG1pbmRhc2hfYWRkaW5nZm9ybTJfX09EcEQtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmFkbWluZGFzaF9hZGRpbmdmb3JtM19fMnhXUGcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uYWRtaW5kYXNoX2l0ZW1zX19jVE9kbCB7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuLmFkbWluZGFzaF9pdGVtc19fY1RPZGwgc3ZnIHtcXG4gICAgcG9zaXRpb246IHN0YXRpYyAhaW1wb3J0YW50O1xcbn1cXG4uYWRtaW5kYXNoX2FkZGluZ0l0ZW1zX18zWGtHVCB7XFxuICAgIFxcbn1cXG4uYWRtaW5kYXNoX3N1Ykl0ZW1zX19wOHZmUiB7XFxuICAgIGdyaWQtY29sdW1uOiAzIC8gYXV0bztcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG4uYWRtaW5kYXNoX3N1Ykl0ZW1zX19wOHZmUiBzdmcge1xcbiAgICBwb3NpdGlvbjogc3RhdGljIWltcG9ydGFudDtcXG59XFxuLmFkbWluZGFzaF9tYW5hZ2VfXzJUYlQ4IHtcXG4gICAgXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvYWRtaW5kYXNoLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsdUVBQXVFO0lBQ3ZFLG9FQUFvRTtBQUN4RTtBQUNBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQix5QkFBeUI7O0lBRXpCLGFBQWE7SUFDYixvRUFBb0U7O0FBRXhFO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7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QixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSwwQkFBMEI7QUFDOUI7QUFDQTs7QUFFQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuYWRtaW5kYXNoIHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kOiAjZjJmNmZmO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6ICAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciA7XFxufVxcbi5uYXYge1xcbiAgICBncmlkLXJvdzogMS8tMTtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFmMWY0NztcXG4gICAgXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgO1xcbiAgICBcXG59XFxuLmFkbWluaW5mbyBzdmc6aG92ZXIge1xcbiAgICBmaWxsOiBicmlnaHRuZXNzKDEuMSk7XFxufVxcbi51c2VybmF2IHtcXG4gICAgbWF4LXdpZHRoOiAyNTBweDtcXG4gICAgbWF4LWhlaWdodDogMTUwcHg7XFxuICAgIHdpZHRoOiAyMzBweDtcXG4gICAgaGVpZ2h0OiAxNDBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMjVweDtcXG4gICAgdG9wOiA2MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG4ubmF2IHN2ZyB7XFxuICAgIGdyaWQtcm93OiAxLzM7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgXFxufVxcbi5hZG1pbmluZm8ge1xcbiAgICBncmlkLWNvbHVtbjogMTEvLTE7XFxuICAgIGdyaWQtcm93OiAxLy0xO1xcbn1cXG4uY2VudGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDMvMTE7XFxuICAgIGdyaWQtcm93OiAxLy0xO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciA7XFxufVxcbi5hY3RpdmUge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuLmNlbnRlciBoMSB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzQ7XFxuICAgIGdyaWQtcm93OiAxLzM7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIFxcbiAgICAvKiBwYWRkaW5nOiAyNXB4IDAgMCAwOyAqL1xcbn1cXG4udGV4dGRhdGEge1xcbiAgICBncmlkLWNvbHVtbjogMS80O1xcbiAgICBncmlkLXJvdzogMS8zO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEzMHB4O1xcbiAgICBwYWRkaW5nOiAyNXB4IDAgMCAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4udGV4dGRhdGEgaDEge1xcbiAgICBmb250LXNpemU6IDM2cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG4udGV4dGRhdGEgcCB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLmFuYWx5dGljcyB7XFxuICAgIGdyaWQtcm93OiAzLzEyO1xcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciA7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgO1xcblxcbn1cXG4uc2FsZXMge1xcbiAgICBncmlkLXJvdzogMi83O1xcbiAgICBncmlkLWNvbHVtbjogMi8xMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFmMWY0NztcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuLnNlY29uZGFyeSB7XFxuICAgIGdyaWQtcm93OiA4LzEyO1xcbiAgICBncmlkLWNvbHVtbjogMi83O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYxZjQ3O1xcbiAgICB3aWR0aDogOTUlO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG4udGhpcmQge1xcbiAgICBncmlkLXJvdzo4LzEyO1xcbiAgICBncmlkLWNvbHVtbjogNy8xMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFmMWY0NztcXG4gICAgd2lkdGg6IDk1JTtcXG4gICAganVzdGlmeS1zZWxmOiByaWdodDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuLmFkbWluaW5mbyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyO1xcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNlOWU5ZTkgO1xcbiAgICBcXG59XFxuLnBob3RvIHtcXG4gICAgZ3JpZC1yb3c6IDIvNTtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgaGVpZ2h0OiA5MCU7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYxZjQ3O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1heC13aWR0aDogMTUwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMGMwcHg7XFxufVxcbi5hZG1pbmluZm8gaDEge1xcbiAgICBncmlkLXJvdzogNS82O1xcbiAgICBmb250LXNpemU6IDM2cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcbi5hZG1pbmluZm8gcCB7XFxuICAgIGdyaWQtcm93OiA2Lzc7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IHRvcDtcXG59XFxuLmFkbWluaW5mbyBzdmcge1xcbiAgICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XFxufVxcbi5pbmZvc2VjdGlvbiB7XFxuICAgIGdyaWQtcm93OiA3LzEyO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuLmluZm9zZWN0aW9uIGRpdiB7XFxuICAgIGhlaWdodDogIDgwcHg7XFxuICAgIC8qIHdpZHRoOiAyNTBweDsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFmMWY0NztcXG4gICAgbWFyZ2luOiAyMHB4IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcbi5uYXYgLm9wdGlvbnMge1xcbiAgICBncmlkLXJvdzogMy85O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcbi5uYXYgLm9wdGlvbnMgZGl2IHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogMjIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlXFxuICAgIDtcXG59XFxuLm5hdiAub3B0aW9ucyBkaXY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYxZjYwO1xcbn1cXG4ub3B0aW9ucyAuYWN0aXZlIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG59XFxuLm9wdGlvbnMgLmFjdGl2ZSBzdmcge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG4ub3B0aW9ucyAuYWN0aXZlIGgxIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGxlZnQ7XFxufVxcbi5vcHRpb25zOmhvdmVyIHtcXG4gICAgXFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjEpO1xcblxcbiAgICB0cmFuc2l0aW9uOiBmaWx0ZXIgNTAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcbi5uYXYge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5mZWF0dXJlcyB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzEyICAgO1xcbiAgICBncmlkLXJvdzogMy8xMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBcXG59XFxuLmZlYXR1cmVzIC5mZWF0dXJlIHtcXG4gICAgaGVpZ2h0OiAxNTVweDtcXG4gICAgd2lkdGg6IDMyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIFxcbn1cXG4uZmVhdHVyZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDRmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5mZWF0dXJlOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IC0xcHggcmdiYSgwLDAsMCwuMiksMCA0cHggNXB4IDAgcmdiYSgwLDAsMCwuMTQpLDAgMXB4IDEwcHggMCByZ2JhKDAsMCwwLC4xMik7XFxufVxcbi5mZWF0dXJlIHN2ZyB7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBtYXJnaW46IDI1cHg7XFxuICAgIFxcbn1cXG4uZmVhdHVyZSBoMSB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzI7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGxlZnQ7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG4uZmVhdHVyZWZvcm0ge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IDkwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2U7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmZlYXR1cmVmb3JtOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IC0xcHggcmdiYSgwLDAsMCwuMiksMCA0cHggNXB4IDAgcmdiYSgwLDAsMCwuMTQpLDAgMXB4IDEwcHggMCByZ2JhKDAsMCwwLC4xMik7XFxufVxcbi5mZWF0dXJlZm9ybTphY3RpdmUge1xcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggLTFweCByZ2JhKDAsMCwwLC4yKSwwIDRweCA1cHggMCByZ2JhKDAsMCwwLC4xNCksMCAxcHggMTBweCAwIHJnYmEoMCwwLDAsLjEyKTtcXG59XFxuLmdvYmlnZ2VyIHtcXG4gICAgXFxuICAgIFxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGhlaWdodDogMTAwdmghaW1wb3J0YW50O1xcbiAgICB3aWR0aDogMTAwdnchaW1wb3J0YW50O1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlO1xcbiAgICB0b3A6MDtcXG4gICAgbGVmdDogMDtcXG5cXG5cXG59XFxuLmdvYmlnZ2VyIHN2ZyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSFpbXBvcnRhbnQ7XFxuICAgIHRvcDogMjVweDtcXG4gICAgbGVmdDogMjVweDtcXG59XFxuLmFkZGluZ2Zvcm0gIHtcXG4gICAgd2lkdGg6IDgwJTtcXG59XFxuLmdvc21hbGxlciB7XFxuICAgIGhlaWdodDogMTU1cHghaW1wb3J0YW50O1xcbiAgICB3aWR0aDogMzIwcHghaW1wb3J0YW50O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZTtcXG59XFxuLnVwcGVyY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiA4MCU7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTEwJSk7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcbi51cHBlcmNvbnRhaW5lcmFjdGl2ZSBoMSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4udXBwZXJjb250YWluZXJhY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uYWRkaW5nZm9ybTEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5cXG4uYWRkaW5nZm9ybTIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uYWRkaW5nZm9ybTMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uaXRlbXMge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcbi5pdGVtcyBzdmcge1xcbiAgICBwb3NpdGlvbjogc3RhdGljICFpbXBvcnRhbnQ7XFxufVxcbi5hZGRpbmdJdGVtcyB7XFxuICAgIFxcbn1cXG4uc3ViSXRlbXMge1xcbiAgICBncmlkLWNvbHVtbjogMyAvIGF1dG87XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuLnN1Ykl0ZW1zIHN2ZyB7XFxuICAgIHBvc2l0aW9uOiBzdGF0aWMhaW1wb3J0YW50O1xcbn1cXG4ubWFuYWdlIHtcXG4gICAgXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImFkbWluZGFzaFwiOiBcImFkbWluZGFzaF9hZG1pbmRhc2hfXzFWd2lGXCIsXG5cdFwibmF2XCI6IFwiYWRtaW5kYXNoX25hdl9fMzZFcURcIixcblx0XCJhZG1pbmluZm9cIjogXCJhZG1pbmRhc2hfYWRtaW5pbmZvX18xTmxocVwiLFxuXHRcInVzZXJuYXZcIjogXCJhZG1pbmRhc2hfdXNlcm5hdl9fMzJjMGpcIixcblx0XCJjZW50ZXJcIjogXCJhZG1pbmRhc2hfY2VudGVyX18xREhZMFwiLFxuXHRcImFjdGl2ZVwiOiBcImFkbWluZGFzaF9hY3RpdmVfXzI1UkZHXCIsXG5cdFwidGV4dGRhdGFcIjogXCJhZG1pbmRhc2hfdGV4dGRhdGFfXzFscURwXCIsXG5cdFwiYW5hbHl0aWNzXCI6IFwiYWRtaW5kYXNoX2FuYWx5dGljc19fMWRsR0dcIixcblx0XCJzYWxlc1wiOiBcImFkbWluZGFzaF9zYWxlc19fcl8zbmxcIixcblx0XCJzZWNvbmRhcnlcIjogXCJhZG1pbmRhc2hfc2Vjb25kYXJ5X18yS0hBYVwiLFxuXHRcInRoaXJkXCI6IFwiYWRtaW5kYXNoX3RoaXJkX19OcTJNOFwiLFxuXHRcInBob3RvXCI6IFwiYWRtaW5kYXNoX3Bob3RvX18yX05CdFwiLFxuXHRcImluZm9zZWN0aW9uXCI6IFwiYWRtaW5kYXNoX2luZm9zZWN0aW9uX18za1VjRFwiLFxuXHRcIm9wdGlvbnNcIjogXCJhZG1pbmRhc2hfb3B0aW9uc19fMV8xblpcIixcblx0XCJmZWF0dXJlc1wiOiBcImFkbWluZGFzaF9mZWF0dXJlc19fM3BDN1FcIixcblx0XCJmZWF0dXJlXCI6IFwiYWRtaW5kYXNoX2ZlYXR1cmVfXzJHOE1qXCIsXG5cdFwiZmVhdHVyZWZvcm1cIjogXCJhZG1pbmRhc2hfZmVhdHVyZWZvcm1fXzJPM0JBXCIsXG5cdFwiZ29iaWdnZXJcIjogXCJhZG1pbmRhc2hfZ29iaWdnZXJfXzN3ZmRaXCIsXG5cdFwiYWRkaW5nZm9ybVwiOiBcImFkbWluZGFzaF9hZGRpbmdmb3JtX18xZlhMeFwiLFxuXHRcImdvc21hbGxlclwiOiBcImFkbWluZGFzaF9nb3NtYWxsZXJfX05KSXVjXCIsXG5cdFwidXBwZXJjb250YWluZXJcIjogXCJhZG1pbmRhc2hfdXBwZXJjb250YWluZXJfXzJmY2liXCIsXG5cdFwidXBwZXJjb250YWluZXJhY3RpdmVcIjogXCJhZG1pbmRhc2hfdXBwZXJjb250YWluZXJhY3RpdmVfXzNxUHc0XCIsXG5cdFwiYWRkaW5nZm9ybTFcIjogXCJhZG1pbmRhc2hfYWRkaW5nZm9ybTFfXzFGam81XCIsXG5cdFwiYWRkaW5nZm9ybTJcIjogXCJhZG1pbmRhc2hfYWRkaW5nZm9ybTJfX09EcEQtXCIsXG5cdFwiYWRkaW5nZm9ybTNcIjogXCJhZG1pbmRhc2hfYWRkaW5nZm9ybTNfXzJ4V1BnXCIsXG5cdFwiaXRlbXNcIjogXCJhZG1pbmRhc2hfaXRlbXNfX2NUT2RsXCIsXG5cdFwiYWRkaW5nSXRlbXNcIjogXCJhZG1pbmRhc2hfYWRkaW5nSXRlbXNfXzNYa0dUXCIsXG5cdFwic3ViSXRlbXNcIjogXCJhZG1pbmRhc2hfc3ViSXRlbXNfX3A4dmZSXCIsXG5cdFwibWFuYWdlXCI6IFwiYWRtaW5kYXNoX21hbmFnZV9fMlRiVDhcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9