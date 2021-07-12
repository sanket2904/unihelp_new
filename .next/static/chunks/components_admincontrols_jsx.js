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

  var fetchedData = /*#__PURE__*/function () {
    var _ref = (0,_home_sanket2904_unihelp_new_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__.default)( /*#__PURE__*/_home_sanket2904_unihelp_new_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(id) {
      var data;
      return _home_sanket2904_unihelp_new_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              data = axios__WEBPACK_IMPORTED_MODULE_8___default().get("/api/addFeature/".concat(id)).then(function (response) {
                setInit(response.data);
              });

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function fetchedData(_x) {
      return _ref.apply(this, arguments);
    };
  }();

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

  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    axios__WEBPACK_IMPORTED_MODULE_8___default().get("/api/addFeature").then(function (response) {
      setData(response.data);
    })["catch"](function (err) {
      console.log("tumse nai ho payega");
    });
  }, []);

  var _useState10 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      handler = _useState10[0],
      setHandler = _useState10[1];

  function changeEvent(_x2, _x3, _x4, _x5, _x6) {
    return _changeEvent.apply(this, arguments);
  }

  function _changeEvent() {
    _changeEvent = (0,_home_sanket2904_unihelp_new_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__.default)( /*#__PURE__*/_home_sanket2904_unihelp_new_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee6(e, height, width, feature, className) {
      return _home_sanket2904_unihelp_new_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
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
              return _context6.stop();
          }
        }
      }, _callee6);
    }));
    return _changeEvent.apply(this, arguments);
  }

  if (toggle) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().admindash),
    children: [nav && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().usernav)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 24
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().nav),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Logo, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
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
            lineNumber: 100,
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
            lineNumber: 101,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 99,
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
            lineNumber: 105,
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
            lineNumber: 106,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 96,
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
        lineNumber: 118,
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
              lineNumber: 130,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
              children: "Add a feature"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 21
          }, this), data.map(function (item) {
            if (!edit) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().feature),
              id: item._id,
              onClick: /*#__PURE__*/(0,_home_sanket2904_unihelp_new_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__.default)( /*#__PURE__*/_home_sanket2904_unihelp_new_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee3() {
                var data;
                return _home_sanket2904_unihelp_new_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        _context3.next = 2;
                        return axios__WEBPACK_IMPORTED_MODULE_8___default().get("/api/addFeature/".concat(item._id)).then( /*#__PURE__*/function () {
                          var _ref3 = (0,_home_sanket2904_unihelp_new_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__.default)( /*#__PURE__*/_home_sanket2904_unihelp_new_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2(response) {
                            return _home_sanket2904_unihelp_new_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {
                              while (1) {
                                switch (_context2.prev = _context2.next) {
                                  case 0:
                                    _context2.next = 2;
                                    return setInit(response.data);

                                  case 2:
                                  case "end":
                                    return _context2.stop();
                                }
                              }
                            }, _callee2);
                          }));

                          return function (_x7) {
                            return _ref3.apply(this, arguments);
                          };
                        }());

                      case 2:
                        data = _context3.sent;
                        setEdit(true);

                      case 4:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              })),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
                style: {
                  gridColumn: "1/-1",
                  justifySelf: "center"
                },
                children: item.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 148,
                columnNumber: 41
              }, _this)
            }, item._id, false, {
              fileName: _jsxFileName,
              lineNumber: 138,
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
                lineNumber: 154,
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
                        var _ref4 = (0,_home_sanket2904_unihelp_new_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__.default)( /*#__PURE__*/_home_sanket2904_unihelp_new_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee5(e) {
                          var dataa;
                          return _home_sanket2904_unihelp_new_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee5$(_context5) {
                            while (1) {
                              switch (_context5.prev = _context5.next) {
                                case 0:
                                  _context5.next = 2;
                                  return axios__WEBPACK_IMPORTED_MODULE_8___default().get("/api/addFeature/".concat(init._id, "/").concat(data._id, "/items")).then( /*#__PURE__*/function () {
                                    var _ref5 = (0,_home_sanket2904_unihelp_new_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__.default)( /*#__PURE__*/_home_sanket2904_unihelp_new_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee4(response) {
                                      return _home_sanket2904_unihelp_new_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee4$(_context4) {
                                        while (1) {
                                          switch (_context4.prev = _context4.next) {
                                            case 0:
                                              _context4.next = 2;
                                              return setInit(response.data);

                                            case 2:
                                              _context4.next = 4;
                                              return console.log(response);

                                            case 4:
                                            case "end":
                                              return _context4.stop();
                                          }
                                        }
                                      }, _callee4);
                                    }));

                                    return function (_x9) {
                                      return _ref5.apply(this, arguments);
                                    };
                                  }());

                                case 2:
                                  dataa = _context5.sent;

                                case 3:
                                case "end":
                                  return _context5.stop();
                              }
                            }
                          }, _callee5);
                        }));

                        return function (_x8) {
                          return _ref4.apply(this, arguments);
                        };
                      }(),
                      children: [data.title || data.name, " "]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 168,
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
                      lineNumber: 176,
                      columnNumber: 61
                    }, _this)]
                  }, data._id, true, {
                    fileName: _jsxFileName,
                    lineNumber: 167,
                    columnNumber: 57
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 161,
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
                  lineNumber: 185,
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
                  lineNumber: 186,
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
                  lineNumber: 192,
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
                  lineNumber: 198,
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
                  lineNumber: 204,
                  columnNumber: 45
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 184,
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
                  lineNumber: 213,
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
                        lineNumber: 222,
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
                        lineNumber: 227,
                        columnNumber: 61
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 221,
                      columnNumber: 57
                    }, _this);
                  }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PlusSvg, {
                    onClick: function onClick() {
                      setdataItem([].concat((0,_home_sanket2904_unihelp_new_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(dataitem), [{}]));
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 237,
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
                    lineNumber: 244,
                    columnNumber: 49
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 214,
                  columnNumber: 45
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 212,
                columnNumber: 41
              }, _this)]
            }, item.data._id, true, {
              fileName: _jsxFileName,
              lineNumber: 153,
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
            lineNumber: 264,
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
              lineNumber: 270,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().addingform1),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                children: "Main title"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 273,
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
                lineNumber: 274,
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
                lineNumber: 278,
                columnNumber: 37
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                type: "submit",
                onClick: function onClick(e) {
                  axios__WEBPACK_IMPORTED_MODULE_8___default().post("/api/addFeature", add, {// headers: {
                    //     Authorization: `Bearer ${window.session.token}`
                    // }
                  }).then(function (res) {
                    if (res.data.message === "Entry Added") setHandler(true);
                  });
                },
                children: " Submit"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 282,
                columnNumber: 37
              }, this), handler && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().status),
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
                  children: "Entry Added"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 295,
                  columnNumber: 49
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 294,
                columnNumber: 56
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 271,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 269,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 263,
          columnNumber: 36
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().admininfo),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Signout, {
        fill: "#1f1f47"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 307,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().photo)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 308,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: "Raj Agarwal"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 311,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "agarwalsanket29@gmail.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 312,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().infosection),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 314,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 315,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 316,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 317,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 313,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 90,
    columnNumber: 9
  }, this);else if (!toggle) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().admindash),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().nav),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Logo, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 327,
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
            lineNumber: 330,
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
            lineNumber: 331,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 329,
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
            lineNumber: 338,
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
            lineNumber: 339,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 334,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 344,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 345,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 346,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 347,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 328,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().center),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().textdata),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: "Hello,Raj"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 352,
          columnNumber: 20
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "Welcome back!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 353,
          columnNumber: 20
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 351,
        columnNumber: 16
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().analytics),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().sales)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 356,
          columnNumber: 20
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().secondary)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 359,
          columnNumber: 20
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().third)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 362,
          columnNumber: 20
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 355,
        columnNumber: 16
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 350,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().admininfo),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Signout, {
        fill: "#1f1f47"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 369,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().photo)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 370,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: "Raj Agarwal"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 373,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "agarwalsanket29@gmail.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 374,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().infosection),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 376,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 377,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 378,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 379,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 375,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 368,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 325,
    columnNumber: 9
  }, this);
}

_s(AdminDash, "1M3RTPNa1b/0X7G/kAx/3N4LP4M=");

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
      lineNumber: 391,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M87.4867 56.4602H83.2387V47.6243H74.955V56.4602H70.7069V35.843H74.955V44.1975H83.2387V35.843H87.4867V56.4602ZM103.615 47.5251H95.4589V53.0476H105.031V56.4602H91.2108V35.843H105.003V39.2839H95.4589V44.1975H103.615V47.5251ZM111.771 53.0476H120.791V56.4602H107.523V35.843H111.771V53.0476ZM127.489 49.196V56.4602H123.241V35.843H131.284C132.832 35.843 134.192 36.1262 135.362 36.6926C136.542 37.259 137.448 38.0662 138.081 39.114C138.713 40.1524 139.03 41.3372 139.03 42.6682C139.03 44.6884 138.336 46.2838 136.948 47.4543C135.57 48.6155 133.658 49.196 131.213 49.196H127.489ZM127.489 45.7551H131.284C132.407 45.7551 133.262 45.4908 133.847 44.9622C134.442 44.4335 134.739 43.6783 134.739 42.6965C134.739 41.6864 134.442 40.8699 133.847 40.2468C133.252 39.6238 132.431 39.3028 131.383 39.2839H127.489V45.7551Z",
      fill: "white"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 392,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 390,
    columnNumber: 9
  }, this);
}

_c4 = Logo;

function Dashicon(_ref6) {
  var fill = _ref6.fill;
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
        lineNumber: 403,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M3049 5106 c-106 -28 -209 -121 -251 -224 l-23 -57 -3 -1160 c-2 -838 0 -1177 8 -1220 31 -160 145 -274 305 -305 43 -8 297 -10 900 -8 l840 3 57 23 c81 33 160 108 200 190 l33 67 0 1210 0 1210 -31 65 c-40 84 -100 144 -182 183 l-67 32 -870 2 c-667 1 -881 -1 -916 -11z",
        fill: fill
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 404,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M300 2979 c-112 -22 -217 -107 -268 -217 l-27 -57 0 -1210 0 -1210 31 -65 c39 -83 101 -145 184 -184 l65 -31 890 0 890 0 67 33 c82 40 157 119 190 200 l23 57 3 1160 c2 838 0 1177 -8 1220 -30 157 -142 271 -298 304 -64 13 -1672 14 -1742 0z",
        fill: fill
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 405,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M3065 1696 c-150 -37 -255 -148 -285 -301 -8 -42 -10 -215 -8 -580 3 -517 3 -520 26 -577 33 -81 108 -160 190 -200 l67 -33 890 0 890 0 67 32 c82 39 142 99 182 183 l31 65 0 570 0 570 -33 67 c-40 82 -119 157 -200 190 l-57 23 -855 2 c-649 1 -867 -1 -905 -11z",
        fill: fill
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 406,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 402,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 400,
    columnNumber: 9
  }, this);
}

_c5 = Dashicon;

function SettingIcon(_ref7) {
  var fill = _ref7.fill;
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
      lineNumber: 414,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 413,
    columnNumber: 9
  }, this);
}

_c6 = SettingIcon;

function Signout(_ref8) {
  var fill = _ref8.fill;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
    onClick: function onClick() {
      return jquery__WEBPACK_IMPORTED_MODULE_7__.data.setNav(!nav);
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
      lineNumber: 422,
      columnNumber: 268
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 422,
    columnNumber: 9
  }, this);
}

_c7 = Signout;

function PlusSvg(_ref9) {
  var fill = _ref9.fill,
      onClick = _ref9.onClick;
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
      lineNumber: 428,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 427,
    columnNumber: 9
  }, this);
}

_c8 = PlusSvg;

function Backsvg(_ref10) {
  var fill = _ref10.fill,
      onClick = _ref10.onClick;
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
      lineNumber: 435,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M10.205 12.456A.5.5 0 0 0 10.5 12V4a.5.5 0 0 0-.832-.374l-4.5 4a.5.5 0 0 0 0 .748l4.5 4a.5.5 0 0 0 .537.082z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 436,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 434,
    columnNumber: 9
  }, this);
}

_c9 = Backsvg;

function DeleteSvg(_ref11) {
  var fill = _ref11.fill,
      onClick = _ref11.onClick,
      style = _ref11.style;
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
      lineNumber: 443,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      fillRule: "evenodd",
      d: "M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 444,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 442,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbmNvbnRyb2xzLmpzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2FkbWluZGFzaC5tb2R1bGUuY3NzP2I2YTkiLCJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9hZG1pbmRhc2gubW9kdWxlLmNzcyJdLCJuYW1lcyI6WyJMb2FkZXIiLCJkeW5hbWljIiwiQWRtaW5EYXNoIiwidXNlU3RhdGUiLCJ0b2dnbGUiLCJzZXRUb2dnbGUiLCJuYXYiLCJzZXROYXYiLCJmZWF0dXJlIiwic2V0RmVhdHVyZSIsIm1haW5UaXRsZSIsImltZ0xpbmsiLCJhZGQiLCJzZXRBZGQiLCJpbml0Iiwic2V0SW5pdCIsImZldGNoZWREYXRhIiwiaWQiLCJkYXRhIiwiYXhpb3MiLCJ0aGVuIiwicmVzcG9uc2UiLCJuYW1lIiwicHJpY2UiLCJkYXRhaXRlbSIsInNldGRhdGFJdGVtIiwidGl0bGUiLCJEZXNjcmlwdGlvbiIsImltYWdlTGluayIsIml0ZW1zIiwibmV3RGF0YSIsInNldG5ld0RhdGEiLCJlZGl0Iiwic2V0RWRpdCIsInNldERhdGEiLCJ1c2VFZmZlY3QiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlciIsInNldEhhbmRsZXIiLCJjaGFuZ2VFdmVudCIsImUiLCJoZWlnaHQiLCJ3aWR0aCIsImNsYXNzTmFtZSIsInNldFRpbWVvdXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJzdHlsZSIsIiQiLCJhZGRDbGFzcyIsInJlbW92ZSIsInVzZXJuYXYiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclJhZGl1cyIsIm1hcCIsIml0ZW0iLCJfaWQiLCJncmlkQ29sdW1uIiwianVzdGlmeVNlbGYiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwibWFyZ2luIiwiZGlzcGxheSIsInBhZGRpbmciLCJkYXRhYSIsInBvc2l0aW9uIiwiYWxpZ25TZWxmIiwiZmxleERpcmVjdGlvbiIsInRhcmdldCIsInZhbHVlIiwia2V5IiwicHJldmVudERlZmF1bHQiLCJyZXMiLCJtZXNzYWdlIiwicGhvdG8iLCJzYWxlcyIsInNlY29uZGFyeSIsInRoaXJkIiwiTG9nbyIsIkRhc2hpY29uIiwiZmlsbCIsIlNldHRpbmdJY29uIiwiU2lnbm91dCIsIlBsdXNTdmciLCJvbkNsaWNrIiwiQmFja3N2ZyIsIkRlbGV0ZVN2ZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBLElBQU1BLE1BQU0sR0FBR0MsbURBQU8sTUFBQztBQUFBLFNBQU0sNkpBQU47QUFBQSxDQUFEO0FBQUE7QUFBQTtBQUFBLGtDQUFjLHlDQUFkO0FBQUE7QUFBQSxzREFBYyxVQUFkO0FBQUE7QUFBQSxFQUF0QjtNQUFNRCxNO0FBQ1MsU0FBU0UsU0FBVCxHQUFxQjtBQUFBOztBQUFBOztBQUFBLGtCQUVMQywrQ0FBUSxDQUFDLEtBQUQsQ0FGSDtBQUFBLE1BRXpCQyxNQUZ5QjtBQUFBLE1BRWxCQyxTQUZrQjs7QUFBQSxtQkFHWEYsK0NBQVEsQ0FBQyxLQUFELENBSEc7QUFBQSxNQUd6QkcsR0FIeUI7QUFBQSxNQUdyQkMsTUFIcUI7O0FBQUEsbUJBSUhKLCtDQUFRLENBQUMsS0FBRCxDQUpMO0FBQUEsTUFJekJLLE9BSnlCO0FBQUEsTUFJakJDLFVBSmlCOztBQUFBLG1CQUtYTiwrQ0FBUSxDQUFDO0FBQzFCTyxhQUFTLEVBQUMsRUFEZ0I7QUFFMUJDLFdBQU8sRUFBQztBQUZrQixHQUFELENBTEc7QUFBQSxNQUt6QkMsR0FMeUI7QUFBQSxNQUtyQkMsTUFMcUI7O0FBQUEsbUJBV1hWLCtDQUFRLENBQUMsRUFBRCxDQVhHO0FBQUEsTUFXM0JXLElBWDJCO0FBQUEsTUFXdEJDLE9BWHNCOztBQVloQyxNQUFNQyxXQUFXO0FBQUEsMlFBQUcsaUJBQU9DLEVBQVA7QUFBQTtB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QVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGNBQWMsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGNBQWMsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxjQUFjLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksY0FBYyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzL2NvbXBvbmVudHNfYWRtaW5jb250cm9sc19qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4uL3N0eWxlcy9hZG1pbmRhc2gubW9kdWxlLmNzc1wiXG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCJcbmltcG9ydCAkLCB7IGRhdGEgfSBmcm9tIFwianF1ZXJ5XCJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxuXG5cblxuY29uc3QgTG9hZGVyID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCIuL2xvYWRlclwiKSlcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkbWluRGFzaCgpIHtcbiAgICBcbiAgICBjb25zdCBbdG9nZ2xlLHNldFRvZ2dsZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBbbmF2LHNldE5hdl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBbZmVhdHVyZSxzZXRGZWF0dXJlXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IFthZGQsc2V0QWRkXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgbWFpblRpdGxlOlwiXCIsXG4gICAgICAgIGltZ0xpbms6XCJcIlxuICAgICAgICBcblxuICAgIH0pXG4gICAgbGV0IFtpbml0LHNldEluaXRdID0gdXNlU3RhdGUoW10pXG4gICAgY29uc3QgZmV0Y2hlZERhdGEgPSBhc3luYyAoaWQpID0+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF4aW9zLmdldChgL2FwaS9hZGRGZWF0dXJlLyR7aWR9YCkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBzZXRJbml0KHJlc3BvbnNlLmRhdGEpXG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgbGV0IFtkYXRhaXRlbSwgc2V0ZGF0YUl0ZW1dID0gdXNlU3RhdGUoW3tcbiAgICAgICAgbmFtZTpcIlwiLFxuICAgICAgICBwcmljZTpcIlwiXG4gICAgfV0pXG4gICAgbGV0IFtuZXdEYXRhLCBzZXRuZXdEYXRhXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgdGl0bGU6XCJcIixcbiAgICAgICAgRGVzY3JpcHRpb246XCJcIixcbiAgICAgICAgcHJpY2U6XCJcIixcbiAgICAgICAgaW1hZ2VMaW5rOlwiXCIsXG4gICAgICAgIGl0ZW1zOmRhdGFpdGVtXG4gICAgfSlcbiAgICBcbiAgICBsZXQgW2VkaXQsc2V0RWRpdF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBsZXQgW2RhdGEsc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSlcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBheGlvcy5nZXQoXCIvYXBpL2FkZEZlYXR1cmVcIikudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBzZXREYXRhKHJlc3BvbnNlLmRhdGEpXG4gICAgICAgICAgICBcblxuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0dW1zZSBuYWkgaG8gcGF5ZWdhXCIpXG4gICAgICAgIH0pXG4gICAgfSxbXSlcbiAgICBcbiAgICBjb25zdCBbaGFuZGxlcixzZXRIYW5kbGVyXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIFxuICAgXG4gICAgYXN5bmMgZnVuY3Rpb24gY2hhbmdlRXZlbnQoZSxoZWlnaHQsd2lkdGgsZmVhdHVyZSxjbGFzc05hbWUpIHtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBpZihmZWF0dXJlKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5hZG1pbmRhc2hfZmVhdHVyZV9fMkc4TWpgKS5jbGFzc0xpc3QuYWRkKHN0eWxlLmdvYmlnZ2VyKVxuICAgICAgICAgICAgICAgICQoYC4ke3N0eWxlLnVwcGVyY29udGFpbmVyfWApLmFkZENsYXNzKGAke3N0eWxlLnVwcGVyY29udGFpbmVyYWN0aXZlfWApXG4gICAgICAgICAgICB9LDE1MilcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuYWRtaW5kYXNoX2ZlYXR1cmVfXzJHOE1qYCkuY2xhc3NMaXN0LnJlbW92ZShzdHlsZS5nb2JpZ2dlcilcblxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5hZG1pbmRhc2hfZmVhdHVyZV9fMkc4TWpgKS5jbGFzc0xpc3QuYWRkKHN0eWxlLmdvc21hbGxlcilcbiAgICAgICAgICAgIH0sMTUyKVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgc2V0RmVhdHVyZShmZWF0dXJlKVxuICAgICAgICAgICAgXG4gICAgICAgIH0sMTUwKVxuICAgIH1cbiAgICBpZih0b2dnbGUpIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5hZG1pbmRhc2h9PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hdiAmJiA8ZGl2IGNsYXNzTmFtZT17c3R5bGUudXNlcm5hdn0gPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubmF2fT5cbiAgICAgICAgICAgICAgICA8TG9nbyAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5vcHRpb25zfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmFjdGl2ZX0gb25DbGljaz17KCkgPT4ge3NldFRvZ2dsZShmYWxzZSl9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RGFzaGljb24gZmlsbD1cIiNmMmY2ZmZcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7IGNvbG9yOiBcIiNmMmY2ZmZcIiwgZm9udFdlaWdodDogNDAwLCBmb250U2l6ZTogXCIyMnB4XCIgfX0+RGFzaGJvYXJkPC9oMT5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmFjdGl2ZX0gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiNmMmY2ZmZcIiwgYm9yZGVyUmFkaXVzOiBcIjE1cHhcIiB9fSBvbkNsaWNrPXsoKSA9PiB7IHNldFRvZ2dsZSh0cnVlKSB9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2V0dGluZ0ljb24gZmlsbD1cIiMxZjFmNDdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7IGNvbG9yOiBcIiMxZjFmNDdcIiwgZm9udFdlaWdodDogNDAwLCBmb250U2l6ZTogXCIyMnB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2V0dGluZ3NcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jZW50ZXJ9PlxuICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17e2ZvbnRTaXplOlwiMzZweFwifX0+U2V0dGluZ3M8L2gxPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5mZWF0dXJlc30+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHshZmVhdHVyZSAmJiA8PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmZlYXR1cmV9IG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZUV2ZW50KGUsIFwiNzAwcHhcIiwgXCI3MDBweFwiLCB0cnVlLHN0eWxlLmZlYXR1cmUpXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQbHVzU3ZnIGZpbGw9XCIjMWYxZjQ3XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5BZGQgYSBmZWF0dXJlPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFlZGl0KSByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmZlYXR1cmV9IGtleT17aXRlbS5faWR9IGlkPXtpdGVtLl9pZH0gb25DbGljaz17IGFzeW5jICgpID0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBheGlvcy5nZXQoYC9hcGkvYWRkRmVhdHVyZS8ke2l0ZW0uX2lkfWApLnRoZW4oYXN5bmMgcmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBzZXRJbml0KHJlc3BvbnNlLmRhdGEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEVkaXQodHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7IGdyaWRDb2x1bW46IFwiMS8tMVwiLCBqdXN0aWZ5U2VsZjpcImNlbnRlclwiIH19ID57aXRlbS50aXRsZX08L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGUuZmVhdHVyZX0gJHtzdHlsZS5nb2JpZ2dlcn0gYH0ga2V5PXtpdGVtLmRhdGEuX2lkfSBzdHlsZT17e2dyaWRUZW1wbGF0ZUNvbHVtbnM6XCIxZnIgMWZyIDFmclwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhY2tzdmcgZmlsbD1cIiMxZjFmNDdcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFZGl0KGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkbWluZGFzaF9nb2JpZ2dlcl9fM3dmZFpcIikuY2xhc3NMaXN0LnJlbW92ZShcImFkbWluZGFzaF9nb2JpZ2dlcl9fM3dmZFpcIilcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IC8+ICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5pdGVtc30gc3R5bGU9e3tqdXN0aWZ5U2VsZjpcImxlZnRcIixtYXJnaW46XCI1MHB4XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdC5kYXRhLm1hcCgoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17ZGF0YS5faWR9ICBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCJ9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6XCJhbGljZWJsdWVcIixwYWRkaW5nOlwiMjBweCA0MHB4XCIsbWFyZ2luOlwiMTVweCAwXCJ9fSBvbkNsaWNrPXsgYXN5bmMgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFhID0gYXdhaXQgYXhpb3MuZ2V0KGAvYXBpL2FkZEZlYXR1cmUvJHtpbml0Ll9pZH0vJHtkYXRhLl9pZH0vaXRlbXNgKS50aGVuKCBhc3luYyAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2V0SW5pdChyZXNwb25zZS5kYXRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBjb25zb2xlLmxvZyhyZXNwb25zZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gPntkYXRhLnRpdGxlIHx8IGRhdGEubmFtZX0gPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZVN2ZyBmaWxsPVwiYmxhY2tcIiBzdHlsZT17e3Bvc2l0aW9uOlwic3RhdGljICFpbXBvcnRhbnRcIn19IG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXhpb3MuZGVsZXRlKGAvYXBpL2FkZEZlYXR1cmUvJHtpbml0Ll9pZH0vJHtkYXRhLl9pZH1gKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5hZGRpbmdJdGVtc30gc3R5bGU9e3tqdXN0aWZ5U2VsZjpcImNlbnRlclwiLGFsaWduU2VsZjpcImNlbnRlclwiLGdyaWRDb2x1bW46XCIyLzNcIixkaXNwbGF5OlwiZmxleFwiLGZsZXhEaXJlY3Rpb246XCJjb2x1bW5cIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+QWRkaW5nIGFuIEVudHJ5PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJUaXRsZVwiIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0bmV3RGF0YSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ubmV3RGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTplLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJEZXNjaXB0aW9uXCIgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRuZXdEYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5uZXdEYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlc2NyaXB0aW9uOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJQcmljZVwiIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0bmV3RGF0YSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ubmV3RGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiSW1hZ2VMaW5rXCIgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRuZXdEYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5uZXdEYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlTGluazogZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjpcIiMxZjFmNDdcIixjb2xvcjpcIiNmZmZcIixoZWlnaHQ6XCI0MHB4XCIsYm9yZGVyUmFkaXVzOlwiMjVweFwifX0+U3VibWl0PC9idXR0b24+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5zdWJJdGVtc30gc3R5bGU9e3tncmlkQ29sdW1uOlwiM1wifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5BZGQgSXRlbXM8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIvYXBpL3Rlc3REYXRhYmFzZVwiIG1ldGhvZD1cIlBPU1RcIiBjbGFzc05hbWU9XCJpdGVtZm9ybVwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhaXRlbS5tYXAoKGl0ZW1zLGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSB7c3R5bGUubWFuYWdlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiSXRlbSBUaXRsZVwiIG5hbWU9XCJ0aXRsZVwiIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5pdCA9IGRhdGFpdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdFtrZXldLm5hbWUgPSBlLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJQcmljZVwiICBuYW1lPVwicHJpY2VcIiBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluaXQgPSBkYXRhaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRba2V5XS5wcmljZSA9IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXYgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBsdXNTdmcgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0ZGF0YUl0ZW0oWy4uLmRhdGFpdGVtLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiMxZjFmNDdcIiwgY29sb3I6IFwiI2ZmZlwiLCBoZWlnaHQ6IFwiNDBweFwiLCBib3JkZXJSYWRpdXM6IFwiMjVweFwiIH19IG9uQ2xpY2s9eyhlKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0uX2lkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3RGF0YVtcIml0ZW1zXCJdID0gZGF0YWl0ZW0gXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBheGlvcy5wb3N0KGAvYXBpL2FkZEZlYXR1cmUvJHtpbml0Ll9pZH1gLG5ld0RhdGEpLnRoZW4oKHJlc3BvbnNlKSA9PiBjb25zb2xlLmxvZyhyZXNwb25zZSkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZlYXR1cmUgJiYgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmZlYXR1cmV9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFja3N2ZyBmaWxsPVwiIzFmMWY0N1wiICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VFdmVudChlLCBcIjMyMHB4XCIsIFwiMTU1cHhcIiwgZmFsc2UsIHN0eWxlLmZlYXR1cmUpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS51cHBlcmNvbnRhaW5lcn0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3sgZm9udFNpemU6IFwiMzJweFwiIH19PkFkZCBhIGZlYXR1cmU8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYWRkaW5nZm9ybTF9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+TWFpbiB0aXRsZTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAgcGxhY2Vob2xkZXI9XCJUaXRsZVwiIG9uQ2hhbmdlPXsoZSkgPT4gKHNldEFkZCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uYWRkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1haW5UaXRsZTplLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJJbWFnZUxpbmtcIiBvbkNoYW5nZT17KGUpID0+IChzZXRBZGQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmFkZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWdMaW5rOmUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF4aW9zLnBvc3QoXCIvYXBpL2FkZEZlYXR1cmVcIiwgYWRkLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt3aW5kb3cuc2Vzc2lvbi50b2tlbn1gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuZGF0YS5tZXNzYWdlID09PSBcIkVudHJ5IEFkZGVkXCIpIHNldEhhbmRsZXIodHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PiBTdWJtaXQ8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyICYmIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5zdGF0dXN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPkVudHJ5IEFkZGVkPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmFkbWluaW5mb30+XG4gICAgICAgICAgICAgICAgPFNpZ25vdXQgZmlsbD1cIiMxZjFmNDdcIiAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5waG90b30+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aDE+UmFqIEFnYXJ3YWw8L2gxPlxuICAgICAgICAgICAgICAgIDxwPmFnYXJ3YWxzYW5rZXQyOUBnbWFpbC5jb208L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmluZm9zZWN0aW9ufT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgKVxuICAgIGVsc2UgaWYgKCF0b2dnbGUpIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmFkbWluZGFzaH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubmF2fT5cbiAgICAgICAgICAgICAgICA8TG9nbyAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5vcHRpb25zfSA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5hY3RpdmV9IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjZjJmNmZmXCIsIGJvcmRlclJhZGl1czogXCIxNXB4XCIgfX0gb25DbGljaz17KCkgPT4geyBzZXRUb2dnbGUoZmFsc2UpIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPERhc2hpY29uIGZpbGw9XCIjMWYxZjQ3XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyBjb2xvcjpcIiMxZjFmNDdcIixmb250V2VpZ2h0OjQwMCxmb250U2l6ZTpcIjIycHhcIn19PkRhc2hib2FyZDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmFjdGl2ZX0gb25DbGljaz17KGUpID0+IHsgXG4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VG9nZ2xlKCF0b2dnbGUpIFxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2V0dGluZ0ljb24gZmlsbD1cIiNmMmY2ZmZcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7IGNvbG9yOiBcIiNmMmY2ZmZcIiwgZm9udFdlaWdodDogNDAwLCBmb250U2l6ZTogXCIyMnB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2V0dGluZ3NcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNlbnRlcn0+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUudGV4dGRhdGF9PlxuICAgICAgICAgICAgICAgICAgIDxoMT5IZWxsbyxSYWo8L2gxPlxuICAgICAgICAgICAgICAgICAgIDxwPldlbGNvbWUgYmFjayE8L3A+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5hbmFseXRpY3N9PlxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5zYWxlc30+XG4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5zZWNvbmRhcnl9PlxuXG4gICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnRoaXJkfT5cblxuICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmFkbWluaW5mb30+XG4gICAgICAgICAgICAgICAgPFNpZ25vdXQgZmlsbD1cIiMxZjFmNDdcIiAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5waG90b30+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aDE+UmFqIEFnYXJ3YWw8L2gxPlxuICAgICAgICAgICAgICAgIDxwPmFnYXJ3YWxzYW5rZXQyOUBnbWFpbC5jb208L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmluZm9zZWN0aW9ufT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiBcblxuZnVuY3Rpb24gTG9nbygpIHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxzdmcgd2lkdGg9XCIxODRcIiBoZWlnaHQ9XCIxMjlcIiB2aWV3Qm94PVwiMCAwIDE4NCAxMjlcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNNDEuNDY4MiAzNS44NDNWNDkuNDIyNkM0MS40NjgyIDUxLjY3ODggNDAuNzYwMiA1My40NjMgMzkuMzQ0MiA1NC43NzUxQzM3LjkzNzYgNTYuMDg3MyAzNi4wMTE4IDU2Ljc0MzQgMzMuNTY2OSA1Ni43NDM0QzMxLjE1OTYgNTYuNzQzNCAyOS4yNDggNTYuMTA2MiAyNy44MzIgNTQuODMxOEMyNi40MTYgNTMuNTU3NCAyNS42OTM4IDUxLjgwNjIgMjUuNjY1NSA0OS41Nzg0VjM1Ljg0M0gyOS45MTM1VjQ5LjQ1MDlDMjkuOTEzNSA1MC44MDA5IDMwLjIzNDUgNTEuNzg3NCAzMC44NzY0IDUyLjQxMDRDMzEuNTI3OCA1My4wMjQgMzIuNDI0NiA1My4zMzA4IDMzLjU2NjkgNTMuMzMwOEMzNS45NTUyIDUzLjMzMDggMzcuMTY4MyA1Mi4wNzUzIDM3LjIwNiA0OS41NjQyVjM1Ljg0M0g0MS40NjgyWk02MS43MTcyIDU2LjQ2MDJINTcuNDY5Mkw0OS4xOTk3IDQyLjg5NDhWNTYuNDYwMkg0NC45NTE2VjM1Ljg0M0g0OS4xOTk3TDU3LjQ4MzQgNDkuNDM2OFYzNS44NDNINjEuNzE3MlY1Ni40NjAyWk02OS45NDQzIDU2LjQ2MDJINjUuNjk2M1YzNS44NDNINjkuOTQ0M1Y1Ni40NjAyWlwiIGZpbGw9XCIjRkVGRUZFXCIgLz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNODcuNDg2NyA1Ni40NjAySDgzLjIzODdWNDcuNjI0M0g3NC45NTVWNTYuNDYwMkg3MC43MDY5VjM1Ljg0M0g3NC45NTVWNDQuMTk3NUg4My4yMzg3VjM1Ljg0M0g4Ny40ODY3VjU2LjQ2MDJaTTEwMy42MTUgNDcuNTI1MUg5NS40NTg5VjUzLjA0NzZIMTA1LjAzMVY1Ni40NjAySDkxLjIxMDhWMzUuODQzSDEwNS4wMDNWMzkuMjgzOUg5NS40NTg5VjQ0LjE5NzVIMTAzLjYxNVY0Ny41MjUxWk0xMTEuNzcxIDUzLjA0NzZIMTIwLjc5MVY1Ni40NjAySDEwNy41MjNWMzUuODQzSDExMS43NzFWNTMuMDQ3NlpNMTI3LjQ4OSA0OS4xOTZWNTYuNDYwMkgxMjMuMjQxVjM1Ljg0M0gxMzEuMjg0QzEzMi44MzIgMzUuODQzIDEzNC4xOTIgMzYuMTI2MiAxMzUuMzYyIDM2LjY5MjZDMTM2LjU0MiAzNy4yNTkgMTM3LjQ0OCAzOC4wNjYyIDEzOC4wODEgMzkuMTE0QzEzOC43MTMgNDAuMTUyNCAxMzkuMDMgNDEuMzM3MiAxMzkuMDMgNDIuNjY4MkMxMzkuMDMgNDQuNjg4NCAxMzguMzM2IDQ2LjI4MzggMTM2Ljk0OCA0Ny40NTQzQzEzNS41NyA0OC42MTU1IDEzMy42NTggNDkuMTk2IDEzMS4yMTMgNDkuMTk2SDEyNy40ODlaTTEyNy40ODkgNDUuNzU1MUgxMzEuMjg0QzEzMi40MDcgNDUuNzU1MSAxMzMuMjYyIDQ1LjQ5MDggMTMzLjg0NyA0NC45NjIyQzEzNC40NDIgNDQuNDMzNSAxMzQuNzM5IDQzLjY3ODMgMTM0LjczOSA0Mi42OTY1QzEzNC43MzkgNDEuNjg2NCAxMzQuNDQyIDQwLjg2OTkgMTMzLjg0NyA0MC4yNDY4QzEzMy4yNTIgMzkuNjIzOCAxMzIuNDMxIDM5LjMwMjggMTMxLjM4MyAzOS4yODM5SDEyNy40ODlWNDUuNzU1MVpcIiBmaWxsPVwid2hpdGVcIiAvPlxuICAgICAgICAgICAgXG4gICAgICAgIDwvc3ZnPlxuXG4gICAgKVxufVxuZnVuY3Rpb24gRGFzaGljb24oe2ZpbGx9KSB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8c3ZnIHZlcnNpb249XCIxLjBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNVwiIGhlaWdodD1cIjI1XCIgdmlld0JveD1cIjAgMCA1MTIuMDAwMDAwIDUxMi4wMDAwMDBcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWQgbWVldFwiIGZpbGw9XCJibHVlXCI+XG5cbiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwLjAwMDAwMCw1MTIuMDAwMDAwKSBzY2FsZSgwLjEwMDAwMCwtMC4xMDAwMDApXCIgZmlsbD1cIiMwMDAwMDBcIiBzdHJva2U9XCJub25lXCI+XG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yNzUgNTEwNiBjLTExMSAtMzUgLTE5MCAtMTA0IC0yMzkgLTIwNiBsLTMxIC02NSAwIC01NzAgMCAtNTcwIDMzIC02NyBjNDAgLTgyIDExOSAtMTU3IDIwMCAtMTkwIGw1NyAtMjMgODQwIC0zIGM2MDMgLTIgODU3IDAgOTAwIDggMTYwIDMxIDI3NCAxNDUgMzA1IDMwNSA4IDQyIDEwIDIxNiA4IDU4MCAtMyA1MTcgLTMgNTIwIC0yNiA1NzcgLTMzIDgxIC0xMDggMTYwIC0xOTAgMjAwIGwtNjcgMzMgLTg3NSAyIGMtNjg4IDIgLTg4NCAtMSAtOTE1IC0xMXpcIiBmaWxsPSB7ZmlsbH0gLz5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTMwNDkgNTEwNiBjLTEwNiAtMjggLTIwOSAtMTIxIC0yNTEgLTIyNCBsLTIzIC01NyAtMyAtMTE2MCBjLTIgLTgzOCAwIC0xMTc3IDggLTEyMjAgMzEgLTE2MCAxNDUgLTI3NCAzMDUgLTMwNSA0MyAtOCAyOTcgLTEwIDkwMCAtOCBsODQwIDMgNTcgMjMgYzgxIDMzIDE2MCAxMDggMjAwIDE5MCBsMzMgNjcgMCAxMjEwIDAgMTIxMCAtMzEgNjUgYy00MCA4NCAtMTAwIDE0NCAtMTgyIDE4MyBsLTY3IDMyIC04NzAgMiBjLTY2NyAxIC04ODEgLTEgLTkxNiAtMTF6XCIgZmlsbD17ZmlsbH0vPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMzAwIDI5NzkgYy0xMTIgLTIyIC0yMTcgLTEwNyAtMjY4IC0yMTcgbC0yNyAtNTcgMCAtMTIxMCAwIC0xMjEwIDMxIC02NSBjMzkgLTgzIDEwMSAtMTQ1IDE4NCAtMTg0IGw2NSAtMzEgODkwIDAgODkwIDAgNjcgMzMgYzgyIDQwIDE1NyAxMTkgMTkwIDIwMCBsMjMgNTcgMyAxMTYwIGMyIDgzOCAwIDExNzcgLTggMTIyMCAtMzAgMTU3IC0xNDIgMjcxIC0yOTggMzA0IC02NCAxMyAtMTY3MiAxNCAtMTc0MiAwelwiIGZpbGw9e2ZpbGx9IC8+XG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk0zMDY1IDE2OTYgYy0xNTAgLTM3IC0yNTUgLTE0OCAtMjg1IC0zMDEgLTggLTQyIC0xMCAtMjE1IC04IC01ODAgMyAtNTE3IDMgLTUyMCAyNiAtNTc3IDMzIC04MSAxMDggLTE2MCAxOTAgLTIwMCBsNjcgLTMzIDg5MCAwIDg5MCAwIDY3IDMyIGM4MiAzOSAxNDIgOTkgMTgyIDE4MyBsMzEgNjUgMCA1NzAgMCA1NzAgLTMzIDY3IGMtNDAgODIgLTExOSAxNTcgLTIwMCAxOTAgbC01NyAyMyAtODU1IDIgYy02NDkgMSAtODY3IC0xIC05MDUgLTExelwiIGZpbGw9e2ZpbGx9IC8+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcbn1cbmZ1bmN0aW9uIFNldHRpbmdJY29uKHtmaWxsfSkge1xuICAgIHJldHVybihcbiAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNVwiIGhlaWdodD1cIjI1XCIgZmlsbD17ZmlsbH0gY2xhc3NOYW1lPVwiYmkgYmktZ2Vhci1maWxsXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPlxuICAgICAgICAgICAgPHBhdGggZD1cIk05LjQwNSAxLjA1Yy0uNDEzLTEuNC0yLjM5Ny0xLjQtMi44MSAwbC0uMS4zNGExLjQ2NCAxLjQ2NCAwIDAgMS0yLjEwNS44NzJsLS4zMS0uMTdjLTEuMjgzLS42OTgtMi42ODYuNzA1LTEuOTg3IDEuOTg3bC4xNjkuMzExYy40NDYuODIuMDIzIDEuODQxLS44NzIgMi4xMDVsLS4zNC4xYy0xLjQuNDEzLTEuNCAyLjM5NyAwIDIuODFsLjM0LjFhMS40NjQgMS40NjQgMCAwIDEgLjg3MiAyLjEwNWwtLjE3LjMxYy0uNjk4IDEuMjgzLjcwNSAyLjY4NiAxLjk4NyAxLjk4N2wuMzExLS4xNjlhMS40NjQgMS40NjQgMCAwIDEgMi4xMDUuODcybC4xLjM0Yy40MTMgMS40IDIuMzk3IDEuNCAyLjgxIDBsLjEtLjM0YTEuNDY0IDEuNDY0IDAgMCAxIDIuMTA1LS44NzJsLjMxLjE3YzEuMjgzLjY5OCAyLjY4Ni0uNzA1IDEuOTg3LTEuOTg3bC0uMTY5LS4zMTFhMS40NjQgMS40NjQgMCAwIDEgLjg3Mi0yLjEwNWwuMzQtLjFjMS40LS40MTMgMS40LTIuMzk3IDAtMi44MWwtLjM0LS4xYTEuNDY0IDEuNDY0IDAgMCAxLS44NzItMi4xMDVsLjE3LS4zMWMuNjk4LTEuMjgzLS43MDUtMi42ODYtMS45ODctMS45ODdsLS4zMTEuMTY5YTEuNDY0IDEuNDY0IDAgMCAxLTIuMTA1LS44NzJsLS4xLS4zNHpNOCAxMC45M2EyLjkyOSAyLjkyOSAwIDEgMSAwLTUuODYgMi45MjkgMi45MjkgMCAwIDEgMCA1Ljg1OHpcIiAvPlxuICAgICAgICA8L3N2Zz5cbiAgICApXG59XG5mdW5jdGlvbiBTaWdub3V0KHtmaWxsfSl7XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgXG4gICAgICAgIDxzdmcgb25DbGljaz17KCkgPT4gZGF0YS5zZXROYXYoIW5hdil9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgd2lkdGg9XCIzMFwiIGhlaWdodD1cIjMwXCIgZGF0YS1wcmVmaXg9XCJmYXJcIiBkYXRhLWljb249XCJ1c2VyLWNpcmNsZVwiIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUtLWZhIGZhLXVzZXItY2lyY2xlIGZhLXctMTZcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNDk2IDUxMlwiPjxwYXRoIGZpbGw9e2ZpbGx9IGQ9XCJNMjQ4IDEwNGMtNTMgMC05NiA0My05NiA5NnM0MyA5NiA5NiA5NiA5Ni00MyA5Ni05Ni00My05Ni05Ni05NnptMCAxNDRjLTI2LjUgMC00OC0yMS41LTQ4LTQ4czIxLjUtNDggNDgtNDggNDggMjEuNSA0OCA0OC0yMS41IDQ4LTQ4IDQ4em0wLTI0MEMxMTEgOCAwIDExOSAwIDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM4NSA4IDI0OCA4em0wIDQ0OGMtNDkuNyAwLTk1LjEtMTguMy0xMzAuMS00OC40IDE0LjktMjMgNDAuNC0zOC42IDY5LjYtMzkuNSAyMC44IDYuNCA0MC42IDkuNiA2MC41IDkuNnMzOS43LTMuMSA2MC41LTkuNmMyOS4yIDEgNTQuNyAxNi41IDY5LjYgMzkuNS0zNSAzMC4xLTgwLjQgNDguNC0xMzAuMSA0OC40em0xNjIuNy04NC4xYy0yNC40LTMxLjQtNjIuMS01MS45LTEwNS4xLTUxLjktMTAuMiAwLTI2IDkuNi01Ny42IDkuNi0zMS41IDAtNDcuNC05LjYtNTcuNi05LjYtNDIuOSAwLTgwLjYgMjAuNS0xMDUuMSA1MS45QzYxLjkgMzM5LjIgNDggMjk5LjIgNDggMjU2YzAtMTEwLjMgODkuNy0yMDAgMjAwLTIwMHMyMDAgODkuNyAyMDAgMjAwYzAgNDMuMi0xMy45IDgzLjItMzcuMyAxMTUuOXpcIj48L3BhdGg+PC9zdmc+XG4gICAgKVxufVxuZnVuY3Rpb24gUGx1c1N2Zyh7ZmlsbCxvbkNsaWNrfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzdmcgb25DbGljaz17b25DbGlja30geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMzBcIiBoZWlnaHQ9XCIzMFwiIGZpbGw9e2ZpbGx9IGNsYXNzTmFtZT1cImJpIGJpLXBsdXMtY2lyY2xlLWZpbGxcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTE2IDhBOCA4IDAgMSAxIDAgOGE4IDggMCAwIDEgMTYgMHpNOC41IDQuNWEuNS41IDAgMCAwLTEgMHYzaC0zYS41LjUgMCAwIDAgMCAxaDN2M2EuNS41IDAgMCAwIDEgMHYtM2gzYS41LjUgMCAwIDAgMC0xaC0zdi0zelwiIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcbn1cbmZ1bmN0aW9uIEJhY2tzdmcoe2ZpbGwsb25DbGlja30pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBvbkNsaWNrPXtvbkNsaWNrfSB3aWR0aD1cIjMwXCIgaGVpZ2h0PVwiMzBcIiBmaWxsPXtmaWxsfSBjbGFzc05hbWU9XCJiaSBiaS1jYXJldC1sZWZ0LXNxdWFyZVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTQgMWExIDEgMCAwIDEgMSAxdjEyYTEgMSAwIDAgMS0xIDFIMmExIDEgMCAwIDEtMS0xVjJhMSAxIDAgMCAxIDEtMWgxMnpNMiAwYTIgMiAwIDAgMC0yIDJ2MTJhMiAyIDAgMCAwIDIgMmgxMmEyIDIgMCAwIDAgMi0yVjJhMiAyIDAgMCAwLTItMkgyelwiIC8+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTEwLjIwNSAxMi40NTZBLjUuNSAwIDAgMCAxMC41IDEyVjRhLjUuNSAwIDAgMC0uODMyLS4zNzRsLTQuNSA0YS41LjUgMCAwIDAgMCAuNzQ4bDQuNSA0YS41LjUgMCAwIDAgLjUzNy4wODJ6XCIgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxufVxuZnVuY3Rpb24gRGVsZXRlU3ZnKHtmaWxsLG9uQ2xpY2ssc3R5bGV9KSB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8c3ZnIHN0eWxlPXt7cG9zaXRpb246XCJzdGF0aWMgIWltcG9ydGFudFwifX0gb25DbGljaz17b25DbGlja30geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIyNVwiIGZpbGw9e2ZpbGx9IGNsYXNzTmFtZT1cImJpIGJpLXRyYXNoXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPlxuICAgICAgICAgICAgPHBhdGggZD1cIk01LjUgNS41QS41LjUgMCAwIDEgNiA2djZhLjUuNSAwIDAgMS0xIDBWNmEuNS41IDAgMCAxIC41LS41em0yLjUgMGEuNS41IDAgMCAxIC41LjV2NmEuNS41IDAgMCAxLTEgMFY2YS41LjUgMCAwIDEgLjUtLjV6bTMgLjVhLjUuNSAwIDAgMC0xIDB2NmEuNS41IDAgMCAwIDEgMFY2elwiIC8+XG4gICAgICAgICAgICA8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTE0LjUgM2ExIDEgMCAwIDEtMSAxSDEzdjlhMiAyIDAgMCAxLTIgMkg1YTIgMiAwIDAgMS0yLTJWNGgtLjVhMSAxIDAgMCAxLTEtMVYyYTEgMSAwIDAgMSAxLTFINmExIDEgMCAwIDEgMS0xaDJhMSAxIDAgMCAxIDEgMWgzLjVhMSAxIDAgMCAxIDEgMXYxek00LjExOCA0IDQgNC4wNTlWMTNhMSAxIDAgMCAwIDEgMWg2YTEgMSAwIDAgMCAxLTFWNC4wNTlMMTEuODgyIDRINC4xMTh6TTIuNSAzVjJoMTF2MWgtMTF6XCIgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxufSIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzJdLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlsyXS51c2VbMl0hLi9hZG1pbmRhc2gubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzJdLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlsyXS51c2VbMl0hLi9hZG1pbmRhc2gubW9kdWxlLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlsyXS51c2VbMV0hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbMl0udXNlWzJdIS4vYWRtaW5kYXNoLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmFkbWluZGFzaF9hZG1pbmRhc2hfXzFWd2lGIHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kOiAjZjJmNmZmO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6ICAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciA7XFxufVxcbi5hZG1pbmRhc2hfbmF2X18zNkVxRCB7XFxuICAgIGdyaWQtcm93OiAxLy0xO1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYxZjQ3O1xcbiAgICBcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciA7XFxuICAgIFxcbn1cXG4uYWRtaW5kYXNoX2FkbWluaW5mb19fMU5saHEgc3ZnOmhvdmVyIHtcXG4gICAgZmlsbDogYnJpZ2h0bmVzcygxLjEpO1xcbn1cXG4uYWRtaW5kYXNoX3VzZXJuYXZfXzMyYzBqIHtcXG4gICAgbWF4LXdpZHRoOiAyNTBweDtcXG4gICAgbWF4LWhlaWdodDogMTUwcHg7XFxuICAgIHdpZHRoOiAyMzBweDtcXG4gICAgaGVpZ2h0OiAxNDBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMjVweDtcXG4gICAgdG9wOiA2MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uYWRtaW5kYXNoX25hdl9fMzZFcUQgc3ZnIHtcXG4gICAgZ3JpZC1yb3c6IDEvMztcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICBcXG59XFxuLmFkbWluZGFzaF9hZG1pbmluZm9fXzFObGhxIHtcXG4gICAgZ3JpZC1jb2x1bW46IDExLy0xO1xcbiAgICBncmlkLXJvdzogMS8tMTtcXG59XFxuLmFkbWluZGFzaF9jZW50ZXJfXzFESFkwIHtcXG4gICAgZ3JpZC1jb2x1bW46IDMvMTE7XFxuICAgIGdyaWQtcm93OiAxLy0xO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciA7XFxufVxcbi5hZG1pbmRhc2hfYWN0aXZlX18yNVJGRyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4uYWRtaW5kYXNoX2NlbnRlcl9fMURIWTAgaDEge1xcbiAgICBncmlkLWNvbHVtbjogMS80O1xcbiAgICBncmlkLXJvdzogMS8zO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBcXG4gICAgLyogcGFkZGluZzogMjVweCAwIDAgMDsgKi9cXG59XFxuLmFkbWluZGFzaF90ZXh0ZGF0YV9fMWxxRHAge1xcbiAgICBncmlkLWNvbHVtbjogMS80O1xcbiAgICBncmlkLXJvdzogMS8zO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEzMHB4O1xcbiAgICBwYWRkaW5nOiAyNXB4IDAgMCAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4uYWRtaW5kYXNoX3RleHRkYXRhX18xbHFEcCBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMzZweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcbi5hZG1pbmRhc2hfdGV4dGRhdGFfXzFscURwIHAge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5hZG1pbmRhc2hfYW5hbHl0aWNzX18xZGxHRyB7XFxuICAgIGdyaWQtcm93OiAzLzEyO1xcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciA7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgO1xcblxcbn1cXG4uYWRtaW5kYXNoX3NhbGVzX19yXzNubCB7XFxuICAgIGdyaWQtcm93OiAyLzc7XFxuICAgIGdyaWQtY29sdW1uOiAyLzEyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYxZjQ3O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG4uYWRtaW5kYXNoX3NlY29uZGFyeV9fMktIQWEge1xcbiAgICBncmlkLXJvdzogOC8xMjtcXG4gICAgZ3JpZC1jb2x1bW46IDIvNztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFmMWY0NztcXG4gICAgd2lkdGg6IDk1JTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuLmFkbWluZGFzaF90aGlyZF9fTnEyTTgge1xcbiAgICBncmlkLXJvdzo4LzEyO1xcbiAgICBncmlkLWNvbHVtbjogNy8xMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFmMWY0NztcXG4gICAgd2lkdGg6IDk1JTtcXG4gICAganVzdGlmeS1zZWxmOiByaWdodDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuLmFkbWluZGFzaF9hZG1pbmluZm9fXzFObGhxIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnI7XFxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2U5ZTllOSA7XFxuICAgIFxcbn1cXG4uYWRtaW5kYXNoX3Bob3RvX18yX05CdCB7XFxuICAgIGdyaWQtcm93OiAyLzU7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGhlaWdodDogOTAlO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFmMWY0NztcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBjMHB4O1xcbn1cXG4uYWRtaW5kYXNoX2FkbWluaW5mb19fMU5saHEgaDEge1xcbiAgICBncmlkLXJvdzogNS82O1xcbiAgICBmb250LXNpemU6IDM2cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcbi5hZG1pbmRhc2hfYWRtaW5pbmZvX18xTmxocSBwIHtcXG4gICAgZ3JpZC1yb3c6IDYvNztcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogdG9wO1xcbn1cXG4uYWRtaW5kYXNoX2FkbWluaW5mb19fMU5saHEgc3ZnIHtcXG4gICAganVzdGlmeS1zZWxmOiByaWdodDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xcbn1cXG4uYWRtaW5kYXNoX2luZm9zZWN0aW9uX18za1VjRCB7XFxuICAgIGdyaWQtcm93OiA3LzEyO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuLmFkbWluZGFzaF9pbmZvc2VjdGlvbl9fM2tVY0QgZGl2IHtcXG4gICAgaGVpZ2h0OiAgODBweDtcXG4gICAgLyogd2lkdGg6IDI1MHB4OyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYxZjQ3O1xcbiAgICBtYXJnaW46IDIwcHggMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuLmFkbWluZGFzaF9uYXZfXzM2RXFEIC5hZG1pbmRhc2hfb3B0aW9uc19fMV8xbloge1xcbiAgICBncmlkLXJvdzogMy85O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcbi5hZG1pbmRhc2hfbmF2X18zNkVxRCAuYWRtaW5kYXNoX29wdGlvbnNfXzFfMW5aIGRpdiB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDIyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZVxcbiAgICA7XFxufVxcbi5hZG1pbmRhc2hfbmF2X18zNkVxRCAuYWRtaW5kYXNoX29wdGlvbnNfXzFfMW5aIGRpdjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZjFmNjA7XFxufVxcbi5hZG1pbmRhc2hfb3B0aW9uc19fMV8xblogLmFkbWluZGFzaF9hY3RpdmVfXzI1UkZHIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG59XFxuLmFkbWluZGFzaF9vcHRpb25zX18xXzFuWiAuYWRtaW5kYXNoX2FjdGl2ZV9fMjVSRkcgc3ZnIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuLmFkbWluZGFzaF9vcHRpb25zX18xXzFuWiAuYWRtaW5kYXNoX2FjdGl2ZV9fMjVSRkcgaDEge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogbGVmdDtcXG59XFxuLmFkbWluZGFzaF9vcHRpb25zX18xXzFuWjpob3ZlciB7XFxuICAgIFxcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4xKTtcXG5cXG4gICAgdHJhbnNpdGlvbjogZmlsdGVyIDUwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG4uYWRtaW5kYXNoX25hdl9fMzZFcUQge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5hZG1pbmRhc2hfZmVhdHVyZXNfXzNwQzdRIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMTIgICA7XFxuICAgIGdyaWQtcm93OiAzLzEyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIFxcbn1cXG4uYWRtaW5kYXNoX2ZlYXR1cmVzX18zcEM3USAuYWRtaW5kYXNoX2ZlYXR1cmVfXzJHOE1qIHtcXG4gICAgaGVpZ2h0OiAxNTVweDtcXG4gICAgd2lkdGg6IDMyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIFxcbn1cXG4uYWRtaW5kYXNoX2ZlYXR1cmVfXzJHOE1qIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgNGZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2U7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmFkbWluZGFzaF9mZWF0dXJlX18yRzhNajpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAtMXB4IHJnYmEoMCwwLDAsLjIpLDAgNHB4IDVweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDFweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTIpO1xcbn1cXG4uYWRtaW5kYXNoX2ZlYXR1cmVfXzJHOE1qIHN2ZyB7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBtYXJnaW46IDI1cHg7XFxuICAgIFxcbn1cXG4uYWRtaW5kYXNoX2ZlYXR1cmVfXzJHOE1qIGgxIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMjtcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICAgIGp1c3RpZnktc2VsZjogbGVmdDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxufVxcbi5hZG1pbmRhc2hfZmVhdHVyZWZvcm1fXzJPM0JBIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgaGVpZ2h0OiA5MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5hZG1pbmRhc2hfZmVhdHVyZWZvcm1fXzJPM0JBOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IC0xcHggcmdiYSgwLDAsMCwuMiksMCA0cHggNXB4IDAgcmdiYSgwLDAsMCwuMTQpLDAgMXB4IDEwcHggMCByZ2JhKDAsMCwwLC4xMik7XFxufVxcbi5hZG1pbmRhc2hfZmVhdHVyZWZvcm1fXzJPM0JBOmFjdGl2ZSB7XFxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAtMXB4IHJnYmEoMCwwLDAsLjIpLDAgNHB4IDVweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDFweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTIpO1xcbn1cXG4uYWRtaW5kYXNoX2dvYmlnZ2VyX18zd2ZkWiB7XFxuICAgIFxcbiAgICBcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBoZWlnaHQ6IDEwMHZoIWltcG9ydGFudDtcXG4gICAgd2lkdGg6IDEwMHZ3IWltcG9ydGFudDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZTtcXG4gICAgdG9wOjA7XFxuICAgIGxlZnQ6IDA7XFxuXFxuXFxufVxcbi5hZG1pbmRhc2hfZ29iaWdnZXJfXzN3ZmRaIHN2ZyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSFpbXBvcnRhbnQ7XFxuICAgIHRvcDogMjVweDtcXG4gICAgbGVmdDogMjVweDtcXG59XFxuLmFkbWluZGFzaF9hZGRpbmdmb3JtX18xZlhMeCAge1xcbiAgICB3aWR0aDogODAlO1xcbn1cXG4uYWRtaW5kYXNoX2dvc21hbGxlcl9fTkpJdWMge1xcbiAgICBoZWlnaHQ6IDE1NXB4IWltcG9ydGFudDtcXG4gICAgd2lkdGg6IDMyMHB4IWltcG9ydGFudDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2U7XFxufVxcbi5hZG1pbmRhc2hfdXBwZXJjb250YWluZXJfXzJmY2liIHtcXG4gICAgaGVpZ2h0OiA4MCU7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTEwJSk7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcbi5hZG1pbmRhc2hfdXBwZXJjb250YWluZXJhY3RpdmVfXzNxUHc0IGgxIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDEwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5hZG1pbmRhc2hfdXBwZXJjb250YWluZXJhY3RpdmVfXzNxUHc0IHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmFkbWluZGFzaF9hZGRpbmdmb3JtMV9fMUZqbzUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5cXG4uYWRtaW5kYXNoX2FkZGluZ2Zvcm0yX19PRHBELSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5hZG1pbmRhc2hfYWRkaW5nZm9ybTNfXzJ4V1BnIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmFkbWluZGFzaF9pdGVtc19fY1RPZGwge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcbi5hZG1pbmRhc2hfaXRlbXNfX2NUT2RsIHN2ZyB7XFxuICAgIHBvc2l0aW9uOiBzdGF0aWMgIWltcG9ydGFudDtcXG59XFxuLmFkbWluZGFzaF9hZGRpbmdJdGVtc19fM1hrR1Qge1xcbiAgICBcXG59XFxuLmFkbWluZGFzaF9zdWJJdGVtc19fcDh2ZlIge1xcbiAgICBncmlkLWNvbHVtbjogMyAvIGF1dG87XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuLmFkbWluZGFzaF9zdWJJdGVtc19fcDh2ZlIgc3ZnIHtcXG4gICAgcG9zaXRpb246IHN0YXRpYyFpbXBvcnRhbnQ7XFxufVxcbi5hZG1pbmRhc2hfbWFuYWdlX18yVGJUOCB7XFxuICAgIFxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL2FkbWluZGFzaC5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHVFQUF1RTtJQUN2RSxvRUFBb0U7QUFDeEU7QUFDQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIseUJBQXlCOztJQUV6QixhQUFhO0lBQ2Isb0VBQW9FOztBQUV4RTtBQUNBO0lBQ0kscUJB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QUNsQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUNBOztBQUVBO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksMEJBQTBCO0FBQzlCO0FBQ0E7O0FBRUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmFkbWluZGFzaCB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZDogI2YyZjZmZjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgO1xcbn1cXG4ubmF2IHtcXG4gICAgZ3JpZC1yb3c6IDEvLTE7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZjFmNDc7XFxuICAgIFxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDtcXG4gICAgXFxufVxcbi5hZG1pbmluZm8gc3ZnOmhvdmVyIHtcXG4gICAgZmlsbDogYnJpZ2h0bmVzcygxLjEpO1xcbn1cXG4udXNlcm5hdiB7XFxuICAgIG1heC13aWR0aDogMjUwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xcbiAgICB3aWR0aDogMjMwcHg7XFxuICAgIGhlaWdodDogMTQwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDI1cHg7XFxuICAgIHRvcDogNjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuXFxuLm5hdiBzdmcge1xcbiAgICBncmlkLXJvdzogMS8zO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgIFxcbn1cXG4uYWRtaW5pbmZvIHtcXG4gICAgZ3JpZC1jb2x1bW46IDExLy0xO1xcbiAgICBncmlkLXJvdzogMS8tMTtcXG59XFxuLmNlbnRlciB7XFxuICAgIGdyaWQtY29sdW1uOiAzLzExO1xcbiAgICBncmlkLXJvdzogMS8tMTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciA7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgO1xcbn1cXG4uYWN0aXZlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbi5jZW50ZXIgaDEge1xcbiAgICBncmlkLWNvbHVtbjogMS80O1xcbiAgICBncmlkLXJvdzogMS8zO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBcXG4gICAgLyogcGFkZGluZzogMjVweCAwIDAgMDsgKi9cXG59XFxuLnRleHRkYXRhIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvNDtcXG4gICAgZ3JpZC1yb3c6IDEvMztcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMzBweDtcXG4gICAgcGFkZGluZzogMjVweCAwIDAgMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLnRleHRkYXRhIGgxIHtcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuLnRleHRkYXRhIHAge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5hbmFseXRpY3Mge1xcbiAgICBncmlkLXJvdzogMy8xMjtcXG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDtcXG5cXG59XFxuLnNhbGVzIHtcXG4gICAgZ3JpZC1yb3c6IDIvNztcXG4gICAgZ3JpZC1jb2x1bW46IDIvMTI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZjFmNDc7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcbi5zZWNvbmRhcnkge1xcbiAgICBncmlkLXJvdzogOC8xMjtcXG4gICAgZ3JpZC1jb2x1bW46IDIvNztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFmMWY0NztcXG4gICAgd2lkdGg6IDk1JTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuLnRoaXJkIHtcXG4gICAgZ3JpZC1yb3c6OC8xMjtcXG4gICAgZ3JpZC1jb2x1bW46IDcvMTI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZjFmNDc7XFxuICAgIHdpZHRoOiA5NSU7XFxuICAgIGp1c3RpZnktc2VsZjogcmlnaHQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcbi5hZG1pbmluZm8ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6ICAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmcjtcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjZTllOWU5IDtcXG4gICAgXFxufVxcbi5waG90byB7XFxuICAgIGdyaWQtcm93OiAyLzU7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGhlaWdodDogOTAlO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFmMWY0NztcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBjMHB4O1xcbn1cXG4uYWRtaW5pbmZvIGgxIHtcXG4gICAgZ3JpZC1yb3c6IDUvNjtcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG4uYWRtaW5pbmZvIHAge1xcbiAgICBncmlkLXJvdzogNi83O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiB0b3A7XFxufVxcbi5hZG1pbmluZm8gc3ZnIHtcXG4gICAganVzdGlmeS1zZWxmOiByaWdodDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xcbn1cXG4uaW5mb3NlY3Rpb24ge1xcbiAgICBncmlkLXJvdzogNy8xMjtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcbi5pbmZvc2VjdGlvbiBkaXYge1xcbiAgICBoZWlnaHQ6ICA4MHB4O1xcbiAgICAvKiB3aWR0aDogMjUwcHg7ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZjFmNDc7XFxuICAgIG1hcmdpbjogMjBweCAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG4ubmF2IC5vcHRpb25zIHtcXG4gICAgZ3JpZC1yb3c6IDMvOTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG4ubmF2IC5vcHRpb25zIGRpdiB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDIyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZVxcbiAgICA7XFxufVxcbi5uYXYgLm9wdGlvbnMgZGl2OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFmMWY2MDtcXG59XFxuLm9wdGlvbnMgLmFjdGl2ZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxufVxcbi5vcHRpb25zIC5hY3RpdmUgc3ZnIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuLm9wdGlvbnMgLmFjdGl2ZSBoMSB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBsZWZ0O1xcbn1cXG4ub3B0aW9uczpob3ZlciB7XFxuICAgIFxcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4xKTtcXG5cXG4gICAgdHJhbnNpdGlvbjogZmlsdGVyIDUwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG4ubmF2IHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZmVhdHVyZXMge1xcbiAgICBncmlkLWNvbHVtbjogMi8xMiAgIDtcXG4gICAgZ3JpZC1yb3c6IDMvMTI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcXG4gICAgXFxufVxcbi5mZWF0dXJlcyAuZmVhdHVyZSB7XFxuICAgIGhlaWdodDogMTU1cHg7XFxuICAgIHdpZHRoOiAzMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBcXG59XFxuLmZlYXR1cmUge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciA0ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZmVhdHVyZTpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAtMXB4IHJnYmEoMCwwLDAsLjIpLDAgNHB4IDVweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDFweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTIpO1xcbn1cXG4uZmVhdHVyZSBzdmcge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogMTtcXG4gICAgbWFyZ2luOiAyNXB4O1xcbiAgICBcXG59XFxuLmZlYXR1cmUgaDEge1xcbiAgICBncmlkLWNvbHVtbjogMi8yO1xcbiAgICBncmlkLXJvdzogMTtcXG4gICAganVzdGlmeS1zZWxmOiBsZWZ0O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuLmZlYXR1cmVmb3JtIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgaGVpZ2h0OiA5MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5mZWF0dXJlZm9ybTpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAtMXB4IHJnYmEoMCwwLDAsLjIpLDAgNHB4IDVweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDFweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTIpO1xcbn1cXG4uZmVhdHVyZWZvcm06YWN0aXZlIHtcXG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IC0xcHggcmdiYSgwLDAsMCwuMiksMCA0cHggNXB4IDAgcmdiYSgwLDAsMCwuMTQpLDAgMXB4IDEwcHggMCByZ2JhKDAsMCwwLC4xMik7XFxufVxcbi5nb2JpZ2dlciB7XFxuICAgIFxcbiAgICBcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBoZWlnaHQ6IDEwMHZoIWltcG9ydGFudDtcXG4gICAgd2lkdGg6IDEwMHZ3IWltcG9ydGFudDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZTtcXG4gICAgdG9wOjA7XFxuICAgIGxlZnQ6IDA7XFxuXFxuXFxufVxcbi5nb2JpZ2dlciBzdmcge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUhaW1wb3J0YW50O1xcbiAgICB0b3A6IDI1cHg7XFxuICAgIGxlZnQ6IDI1cHg7XFxufVxcbi5hZGRpbmdmb3JtICB7XFxuICAgIHdpZHRoOiA4MCU7XFxufVxcbi5nb3NtYWxsZXIge1xcbiAgICBoZWlnaHQ6IDE1NXB4IWltcG9ydGFudDtcXG4gICAgd2lkdGg6IDMyMHB4IWltcG9ydGFudDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2U7XFxufVxcbi51cHBlcmNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogODAlO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTExMCUpO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG4udXBwZXJjb250YWluZXJhY3RpdmUgaDEge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnVwcGVyY29udGFpbmVyYWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmFkZGluZ2Zvcm0xIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuXFxuLmFkZGluZ2Zvcm0yIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmFkZGluZ2Zvcm0zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLml0ZW1zIHtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG4uaXRlbXMgc3ZnIHtcXG4gICAgcG9zaXRpb246IHN0YXRpYyAhaW1wb3J0YW50O1xcbn1cXG4uYWRkaW5nSXRlbXMge1xcbiAgICBcXG59XFxuLnN1Ykl0ZW1zIHtcXG4gICAgZ3JpZC1jb2x1bW46IDMgLyBhdXRvO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcbi5zdWJJdGVtcyBzdmcge1xcbiAgICBwb3NpdGlvbjogc3RhdGljIWltcG9ydGFudDtcXG59XFxuLm1hbmFnZSB7XFxuICAgIFxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJhZG1pbmRhc2hcIjogXCJhZG1pbmRhc2hfYWRtaW5kYXNoX18xVndpRlwiLFxuXHRcIm5hdlwiOiBcImFkbWluZGFzaF9uYXZfXzM2RXFEXCIsXG5cdFwiYWRtaW5pbmZvXCI6IFwiYWRtaW5kYXNoX2FkbWluaW5mb19fMU5saHFcIixcblx0XCJ1c2VybmF2XCI6IFwiYWRtaW5kYXNoX3VzZXJuYXZfXzMyYzBqXCIsXG5cdFwiY2VudGVyXCI6IFwiYWRtaW5kYXNoX2NlbnRlcl9fMURIWTBcIixcblx0XCJhY3RpdmVcIjogXCJhZG1pbmRhc2hfYWN0aXZlX18yNVJGR1wiLFxuXHRcInRleHRkYXRhXCI6IFwiYWRtaW5kYXNoX3RleHRkYXRhX18xbHFEcFwiLFxuXHRcImFuYWx5dGljc1wiOiBcImFkbWluZGFzaF9hbmFseXRpY3NfXzFkbEdHXCIsXG5cdFwic2FsZXNcIjogXCJhZG1pbmRhc2hfc2FsZXNfX3JfM25sXCIsXG5cdFwic2Vjb25kYXJ5XCI6IFwiYWRtaW5kYXNoX3NlY29uZGFyeV9fMktIQWFcIixcblx0XCJ0aGlyZFwiOiBcImFkbWluZGFzaF90aGlyZF9fTnEyTThcIixcblx0XCJwaG90b1wiOiBcImFkbWluZGFzaF9waG90b19fMl9OQnRcIixcblx0XCJpbmZvc2VjdGlvblwiOiBcImFkbWluZGFzaF9pbmZvc2VjdGlvbl9fM2tVY0RcIixcblx0XCJvcHRpb25zXCI6IFwiYWRtaW5kYXNoX29wdGlvbnNfXzFfMW5aXCIsXG5cdFwiZmVhdHVyZXNcIjogXCJhZG1pbmRhc2hfZmVhdHVyZXNfXzNwQzdRXCIsXG5cdFwiZmVhdHVyZVwiOiBcImFkbWluZGFzaF9mZWF0dXJlX18yRzhNalwiLFxuXHRcImZlYXR1cmVmb3JtXCI6IFwiYWRtaW5kYXNoX2ZlYXR1cmVmb3JtX18yTzNCQVwiLFxuXHRcImdvYmlnZ2VyXCI6IFwiYWRtaW5kYXNoX2dvYmlnZ2VyX18zd2ZkWlwiLFxuXHRcImFkZGluZ2Zvcm1cIjogXCJhZG1pbmRhc2hfYWRkaW5nZm9ybV9fMWZYTHhcIixcblx0XCJnb3NtYWxsZXJcIjogXCJhZG1pbmRhc2hfZ29zbWFsbGVyX19OSkl1Y1wiLFxuXHRcInVwcGVyY29udGFpbmVyXCI6IFwiYWRtaW5kYXNoX3VwcGVyY29udGFpbmVyX18yZmNpYlwiLFxuXHRcInVwcGVyY29udGFpbmVyYWN0aXZlXCI6IFwiYWRtaW5kYXNoX3VwcGVyY29udGFpbmVyYWN0aXZlX18zcVB3NFwiLFxuXHRcImFkZGluZ2Zvcm0xXCI6IFwiYWRtaW5kYXNoX2FkZGluZ2Zvcm0xX18xRmpvNVwiLFxuXHRcImFkZGluZ2Zvcm0yXCI6IFwiYWRtaW5kYXNoX2FkZGluZ2Zvcm0yX19PRHBELVwiLFxuXHRcImFkZGluZ2Zvcm0zXCI6IFwiYWRtaW5kYXNoX2FkZGluZ2Zvcm0zX18yeFdQZ1wiLFxuXHRcIml0ZW1zXCI6IFwiYWRtaW5kYXNoX2l0ZW1zX19jVE9kbFwiLFxuXHRcImFkZGluZ0l0ZW1zXCI6IFwiYWRtaW5kYXNoX2FkZGluZ0l0ZW1zX18zWGtHVFwiLFxuXHRcInN1Ykl0ZW1zXCI6IFwiYWRtaW5kYXNoX3N1Ykl0ZW1zX19wOHZmUlwiLFxuXHRcIm1hbmFnZVwiOiBcImFkbWluZGFzaF9tYW5hZ2VfXzJUYlQ4XCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==