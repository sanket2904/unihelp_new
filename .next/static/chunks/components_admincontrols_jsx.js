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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbmNvbnRyb2xzLmpzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2FkbWluZGFzaC5tb2R1bGUuY3NzP2I2YTkiLCJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9hZG1pbmRhc2gubW9kdWxlLmNzcyJdLCJuYW1lcyI6WyJMb2FkZXIiLCJkeW5hbWljIiwiQWRtaW5EYXNoIiwidXNlU3RhdGUiLCJ0b2dnbGUiLCJzZXRUb2dnbGUiLCJuYXYiLCJzZXROYXYiLCJmZWF0dXJlIiwic2V0RmVhdHVyZSIsIm1haW5UaXRsZSIsImltZ0xpbmsiLCJhZGQiLCJzZXRBZGQiLCJpbml0Iiwic2V0SW5pdCIsImZldGNoZWREYXRhIiwiaWQiLCJkYXRhIiwiYXhpb3MiLCJ0aGVuIiwicmVzcG9uc2UiLCJuYW1lIiwicHJpY2UiLCJkYXRhaXRlbSIsInNldGRhdGFJdGVtIiwidGl0bGUiLCJEZXNjcmlwdGlvbiIsImltYWdlTGluayIsIml0ZW1zIiwibmV3RGF0YSIsInNldG5ld0RhdGEiLCJlZGl0Iiwic2V0RWRpdCIsInNldERhdGEiLCJ1c2VFZmZlY3QiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlciIsInNldEhhbmRsZXIiLCJjaGFuZ2VFdmVudCIsImUiLCJoZWlnaHQiLCJ3aWR0aCIsImNsYXNzTmFtZSIsInNldFRpbWVvdXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJzdHlsZSIsIiQiLCJhZGRDbGFzcyIsInJlbW92ZSIsInVzZXJuYXYiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclJhZGl1cyIsIm1hcCIsIml0ZW0iLCJfaWQiLCJncmlkQ29sdW1uIiwianVzdGlmeVNlbGYiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwibWFyZ2luIiwiZGlzcGxheSIsInBhZGRpbmciLCJkYXRhYSIsInBvc2l0aW9uIiwiYWxpZ25TZWxmIiwiZmxleERpcmVjdGlvbiIsInRhcmdldCIsInZhbHVlIiwia2V5IiwicHJldmVudERlZmF1bHQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsIndpbmRvdyIsInNlc3Npb24iLCJ0b2tlbiIsInJlcyIsIm1lc3NhZ2UiLCJwaG90byIsInNhbGVzIiwic2Vjb25kYXJ5IiwidGhpcmQiLCJMb2dvIiwiRGFzaGljb24iLCJmaWxsIiwiU2V0dGluZ0ljb24iLCJTaWdub3V0IiwiUGx1c1N2ZyIsIm9uQ2xpY2siLCJCYWNrc3ZnIiwiRGVsZXRlU3ZnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUEsSUFBTUEsTUFBTSxHQUFHQyxtREFBTyxNQUFDO0FBQUEsU0FBTSw2SkFBTjtBQUFBLENBQUQ7QUFBQTtBQUFBO0FBQUEsa0NBQWMseUNBQWQ7QUFBQTtBQUFBLHNEQUFjLFVBQWQ7QUFBQTtBQUFBLEVBQXRCO01BQU1ELE07QUFDUyxTQUFTRSxTQUFULEdBQXFCO0FBQUE7O0FBQUE7O0FBQUEsa0JBRUxDLCtDQUFRLENBQUMsS0FBRCxDQUZIO0FBQUEsTUFFekJDLE1BRnlCO0FBQUEsTUFFbEJDLFNBRmtCOztBQUFBLG1CQUdYRiwrQ0FBUSxDQUFDLEtBQUQsQ0FIRztBQUFBLE1BR3pCRyxHQUh5QjtBQUFBLE1BR3JCQyxNQUhxQjs7QUFBQSxtQkFJSEosK0NBQVEsQ0FBQyxLQUFELENBSkw7QUFBQSxNQUl6QkssT0FKeUI7QUFBQSxNQUlqQkMsVUFKaUI7O0FBQUEsbUJBS1hOLCtDQUFRLENBQUM7QUFDMUJPLGFBQVMsRUFBQyxFQURnQjtBQUUxQkMsV0FBTyxFQUFDO0FBRmtCLEdBQUQsQ0FMRztBQUFBLE1BS3pCQyxHQUx5QjtBQUFBLE1BS3JCQyxNQUxxQjs7QUFBQSxtQkFXWFYsK0NBQVEsQ0FBQyxFQUFELENBWEc7QUFBQSxNQVczQlcsSUFYMkI7QUFBQSxNQVd0QkMs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aUMsR0FBRyw0QkFBNEIsU0FBUyxPQUFPLDRGQUE0RixVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGNBQWMsV0FBVyxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxjQUFjLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxjQUFjLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksY0FBYyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGNBQWMsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFB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LDRCQUE0QiwyQkFBMkIseUJBQXlCLG9CQUFvQiw2QkFBNkIseUJBQXlCLEdBQUcsaUJBQWlCLGlDQUFpQyxHQUFHLFdBQVcsU0FBUyxtQkFBbUI7QUFDaG5qQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL2NodW5rcy9jb21wb25lbnRzX2FkbWluY29udHJvbHNfanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHN0eWxlIGZyb20gXCIuLi9zdHlsZXMvYWRtaW5kYXNoLm1vZHVsZS5jc3NcIlxuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiXG5pbXBvcnQgJCwgeyBkYXRhIH0gZnJvbSBcImpxdWVyeVwiXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcblxuXG5cbmNvbnN0IExvYWRlciA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiLi9sb2FkZXJcIikpXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZG1pbkRhc2goKSB7XG4gICAgXG4gICAgY29uc3QgW3RvZ2dsZSxzZXRUb2dnbGVdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW25hdixzZXROYXZdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW2ZlYXR1cmUsc2V0RmVhdHVyZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBbYWRkLHNldEFkZF0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIG1haW5UaXRsZTpcIlwiLFxuICAgICAgICBpbWdMaW5rOlwiXCJcbiAgICAgICAgXG5cbiAgICB9KVxuICAgIGxldCBbaW5pdCxzZXRJbml0XSA9IHVzZVN0YXRlKFtdKVxuICAgIGNvbnN0IGZldGNoZWREYXRhID0gYXN5bmMgKGlkKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBheGlvcy5nZXQoYC9hcGkvYWRkRmVhdHVyZS8ke2lkfWApLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgc2V0SW5pdChyZXNwb25zZS5kYXRhKVxuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIGxldCBbZGF0YWl0ZW0sIHNldGRhdGFJdGVtXSA9IHVzZVN0YXRlKFt7XG4gICAgICAgIG5hbWU6XCJcIixcbiAgICAgICAgcHJpY2U6XCJcIlxuICAgIH1dKVxuICAgIGxldCBbbmV3RGF0YSwgc2V0bmV3RGF0YV0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIHRpdGxlOlwiXCIsXG4gICAgICAgIERlc2NyaXB0aW9uOlwiXCIsXG4gICAgICAgIHByaWNlOlwiXCIsXG4gICAgICAgIGltYWdlTGluazpcIlwiLFxuICAgICAgICBpdGVtczpkYXRhaXRlbVxuICAgIH0pXG4gICAgXG4gICAgbGV0IFtlZGl0LHNldEVkaXRdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgbGV0IFtkYXRhLHNldERhdGFdID0gdXNlU3RhdGUoW10pXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgYXhpb3MuZ2V0KFwiL2FwaS9hZGRGZWF0dXJlXCIpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgc2V0RGF0YShyZXNwb25zZS5kYXRhKVxuICAgICAgICAgICAgXG5cbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHVtc2UgbmFpIGhvIHBheWVnYVwiKVxuICAgICAgICB9KVxuICAgIH0sW10pXG4gICAgXG4gICAgY29uc3QgW2hhbmRsZXIsc2V0SGFuZGxlcl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBcbiAgIFxuICAgIGFzeW5jIGZ1bmN0aW9uIGNoYW5nZUV2ZW50KGUsaGVpZ2h0LHdpZHRoLGZlYXR1cmUsY2xhc3NOYW1lKSB7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgaWYoZmVhdHVyZSkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuYWRtaW5kYXNoX2ZlYXR1cmVfXzJHOE1qYCkuY2xhc3NMaXN0LmFkZChzdHlsZS5nb2JpZ2dlcilcbiAgICAgICAgICAgICAgICAkKGAuJHtzdHlsZS51cHBlcmNvbnRhaW5lcn1gKS5hZGRDbGFzcyhgJHtzdHlsZS51cHBlcmNvbnRhaW5lcmFjdGl2ZX1gKVxuICAgICAgICAgICAgfSwxNTIpXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmFkbWluZGFzaF9mZWF0dXJlX18yRzhNamApLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGUuZ29iaWdnZXIpXG5cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuYWRtaW5kYXNoX2ZlYXR1cmVfXzJHOE1qYCkuY2xhc3NMaXN0LmFkZChzdHlsZS5nb3NtYWxsZXIpXG4gICAgICAgICAgICB9LDE1MilcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHNldEZlYXR1cmUoZmVhdHVyZSlcbiAgICAgICAgICAgIFxuICAgICAgICB9LDE1MClcbiAgICB9XG4gICAgaWYodG9nZ2xlKSByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYWRtaW5kYXNofT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYXYgJiYgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnVzZXJuYXZ9ID5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLm5hdn0+XG4gICAgICAgICAgICAgICAgPExvZ28gLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUub3B0aW9uc30+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5hY3RpdmV9IG9uQ2xpY2s9eygpID0+IHtzZXRUb2dnbGUoZmFsc2UpfX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgPERhc2hpY29uIGZpbGw9XCIjZjJmNmZmXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyBjb2xvcjogXCIjZjJmNmZmXCIsIGZvbnRXZWlnaHQ6IDQwMCwgZm9udFNpemU6IFwiMjJweFwiIH19PkRhc2hib2FyZDwvaDE+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5hY3RpdmV9IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjZjJmNmZmXCIsIGJvcmRlclJhZGl1czogXCIxNXB4XCIgfX0gb25DbGljaz17KCkgPT4geyBzZXRUb2dnbGUodHJ1ZSkgfX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNldHRpbmdJY29uIGZpbGw9XCIjMWYxZjQ3XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyBjb2xvcjogXCIjMWYxZjQ3XCIsIGZvbnRXZWlnaHQ6IDQwMCwgZm9udFNpemU6IFwiMjJweFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNldHRpbmdzXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY2VudGVyfT5cbiAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3tmb250U2l6ZTpcIjM2cHhcIn19PlNldHRpbmdzPC9oMT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZmVhdHVyZXN9PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB7IWZlYXR1cmUgJiYgPD5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5mZWF0dXJlfSBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VFdmVudChlLCBcIjcwMHB4XCIsIFwiNzAwcHhcIiwgdHJ1ZSxzdHlsZS5mZWF0dXJlKVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGx1c1N2ZyBmaWxsPVwiIzFmMWY0N1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+QWRkIGEgZmVhdHVyZTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZWRpdCkgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5mZWF0dXJlfSBrZXk9e2l0ZW0uX2lkfSBpZD17aXRlbS5faWR9IG9uQ2xpY2s9eyBhc3luYyAoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgYXhpb3MuZ2V0KGAvYXBpL2FkZEZlYXR1cmUvJHtpdGVtLl9pZH1gKS50aGVuKGFzeW5jIHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2V0SW5pdChyZXNwb25zZS5kYXRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFZGl0KHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyBncmlkQ29sdW1uOiBcIjEvLTFcIiwganVzdGlmeVNlbGY6XCJjZW50ZXJcIiB9fSA+e2l0ZW0udGl0bGV9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlLmZlYXR1cmV9ICR7c3R5bGUuZ29iaWdnZXJ9IGB9IGtleT17aXRlbS5kYXRhLl9pZH0gc3R5bGU9e3tncmlkVGVtcGxhdGVDb2x1bW5zOlwiMWZyIDFmciAxZnJcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYWNrc3ZnIGZpbGw9XCIjMWYxZjQ3XCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RWRpdChmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZG1pbmRhc2hfZ29iaWdnZXJfXzN3ZmRaXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJhZG1pbmRhc2hfZ29iaWdnZXJfXzN3ZmRaXCIpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAvPiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaXRlbXN9IHN0eWxlPXt7anVzdGlmeVNlbGY6XCJsZWZ0XCIsbWFyZ2luOlwiNTBweFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXQuZGF0YS5tYXAoKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2RhdGEuX2lkfSAgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwifX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOlwiYWxpY2VibHVlXCIscGFkZGluZzpcIjIwcHggNDBweFwiLG1hcmdpbjpcIjE1cHggMFwifX0gb25DbGljaz17IGFzeW5jIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhYSA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS9hZGRGZWF0dXJlLyR7aW5pdC5faWR9LyR7ZGF0YS5faWR9L2l0ZW1zYCkudGhlbiggYXN5bmMgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHNldEluaXQocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgY29uc29sZS5sb2cocmVzcG9uc2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19ID57ZGF0YS50aXRsZSB8fCBkYXRhLm5hbWV9IDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZWxldGVTdmcgZmlsbD1cImJsYWNrXCIgc3R5bGU9e3twb3NpdGlvbjpcInN0YXRpYyAhaW1wb3J0YW50XCJ9fSBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF4aW9zLmRlbGV0ZShgL2FwaS9hZGRGZWF0dXJlLyR7aW5pdC5faWR9LyR7ZGF0YS5faWR9YClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYWRkaW5nSXRlbXN9IHN0eWxlPXt7anVzdGlmeVNlbGY6XCJjZW50ZXJcIixhbGlnblNlbGY6XCJjZW50ZXJcIixncmlkQ29sdW1uOlwiMi8zXCIsZGlzcGxheTpcImZsZXhcIixmbGV4RGlyZWN0aW9uOlwiY29sdW1uXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPkFkZGluZyBhbiBFbnRyeTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVGl0bGVcIiBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldG5ld0RhdGEoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLm5ld0RhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRGVzY2lwdGlvblwiIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0bmV3RGF0YSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ubmV3RGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZXNjcmlwdGlvbjogZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiUHJpY2VcIiBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldG5ld0RhdGEoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLm5ld0RhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkltYWdlTGlua1wiIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0bmV3RGF0YSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ubmV3RGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZUxpbms6IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGJ1dHRvbiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6XCIjMWYxZjQ3XCIsY29sb3I6XCIjZmZmXCIsaGVpZ2h0OlwiNDBweFwiLGJvcmRlclJhZGl1czpcIjI1cHhcIn19PlN1Ym1pdDwvYnV0dG9uPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuc3ViSXRlbXN9IHN0eWxlPXt7Z3JpZENvbHVtbjpcIjNcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+QWRkIEl0ZW1zPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiL2FwaS90ZXN0RGF0YWJhc2VcIiBtZXRob2Q9XCJQT1NUXCIgY2xhc3NOYW1lPVwiaXRlbWZvcm1cIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YWl0ZW0ubWFwKChpdGVtcyxrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0ge3N0eWxlLm1hbmFnZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkl0ZW0gVGl0bGVcIiBuYW1lPVwidGl0bGVcIiBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluaXQgPSBkYXRhaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRba2V5XS5uYW1lID0gZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiUHJpY2VcIiAgbmFtZT1cInByaWNlXCIgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbml0ID0gZGF0YWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0W2tleV0ucHJpY2UgPSBlLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQbHVzU3ZnIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldGRhdGFJdGVtKFsuLi5kYXRhaXRlbSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjMWYxZjQ3XCIsIGNvbG9yOiBcIiNmZmZcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgYm9yZGVyUmFkaXVzOiBcIjI1cHhcIiB9fSBvbkNsaWNrPXsoZSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtLl9pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0RhdGFbXCJpdGVtc1wiXSA9IGRhdGFpdGVtIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXhpb3MucG9zdChgL2FwaS9hZGRGZWF0dXJlLyR7aW5pdC5faWR9YCxuZXdEYXRhKS50aGVuKChyZXNwb25zZSkgPT4gY29uc29sZS5sb2cocmVzcG9uc2UpIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmZWF0dXJlICYmIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5mZWF0dXJlfSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhY2tzdmcgZmlsbD1cIiMxZjFmNDdcIiAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlRXZlbnQoZSwgXCIzMjBweFwiLCBcIjE1NXB4XCIsIGZhbHNlLCBzdHlsZS5mZWF0dXJlKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUudXBwZXJjb250YWluZXJ9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7IGZvbnRTaXplOiBcIjMycHhcIiB9fT5BZGQgYSBmZWF0dXJlPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmFkZGluZ2Zvcm0xfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPk1haW4gdGl0bGU8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgIHBsYWNlaG9sZGVyPVwiVGl0bGVcIiBvbkNoYW5nZT17KGUpID0+IChzZXRBZGQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmFkZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWluVGl0bGU6ZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiSW1hZ2VMaW5rXCIgb25DaGFuZ2U9eyhlKSA9PiAoc2V0QWRkKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5hZGQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nTGluazplLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBheGlvcy5wb3N0KFwiL2FwaS9hZGRGZWF0dXJlXCIsIGFkZCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7d2luZG93LnNlc3Npb24udG9rZW59YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLmRhdGEubWVzc2FnZSA9PT0gXCJFbnRyeSBBZGRlZFwiKSBzZXRIYW5kbGVyKHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT4gU3VibWl0PC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlciAmJiA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuc3RhdHVzfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5FbnRyeSBBZGRlZDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5hZG1pbmluZm99PlxuICAgICAgICAgICAgICAgIDxTaWdub3V0IGZpbGw9XCIjMWYxZjQ3XCIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUucGhvdG99PlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGgxPlJhaiBBZ2Fyd2FsPC9oMT5cbiAgICAgICAgICAgICAgICA8cD5hZ2Fyd2Fsc2Fua2V0MjlAZ21haWwuY29tPC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5pbmZvc2VjdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgIClcbiAgICBlbHNlIGlmICghdG9nZ2xlKSByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5hZG1pbmRhc2h9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLm5hdn0+XG4gICAgICAgICAgICAgICAgPExvZ28gLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUub3B0aW9uc30gPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYWN0aXZlfSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2YyZjZmZlwiLCBib3JkZXJSYWRpdXM6IFwiMTVweFwiIH19IG9uQ2xpY2s9eygpID0+IHsgc2V0VG9nZ2xlKGZhbHNlKSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEYXNoaWNvbiBmaWxsPVwiIzFmMWY0N1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3sgY29sb3I6XCIjMWYxZjQ3XCIsZm9udFdlaWdodDo0MDAsZm9udFNpemU6XCIyMnB4XCJ9fT5EYXNoYm9hcmQ8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5hY3RpdmV9IG9uQ2xpY2s9eyhlKSA9PiB7IFxuICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRvZ2dsZSghdG9nZ2xlKSBcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNldHRpbmdJY29uIGZpbGw9XCIjZjJmNmZmXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyBjb2xvcjogXCIjZjJmNmZmXCIsIGZvbnRXZWlnaHQ6IDQwMCwgZm9udFNpemU6IFwiMjJweFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNldHRpbmdzXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jZW50ZXJ9PlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnRleHRkYXRhfT5cbiAgICAgICAgICAgICAgICAgICA8aDE+SGVsbG8sUmFqPC9oMT5cbiAgICAgICAgICAgICAgICAgICA8cD5XZWxjb21lIGJhY2shPC9wPlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYW5hbHl0aWNzfT5cbiAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuc2FsZXN9PlxuICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuc2Vjb25kYXJ5fT5cblxuICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS50aGlyZH0+XG5cbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5hZG1pbmluZm99PlxuICAgICAgICAgICAgICAgIDxTaWdub3V0IGZpbGw9XCIjMWYxZjQ3XCIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUucGhvdG99PlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGgxPlJhaiBBZ2Fyd2FsPC9oMT5cbiAgICAgICAgICAgICAgICA8cD5hZ2Fyd2Fsc2Fua2V0MjlAZ21haWwuY29tPC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5pbmZvc2VjdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4gXG5cbmZ1bmN0aW9uIExvZ28oKSB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8c3ZnIHdpZHRoPVwiMTg0XCIgaGVpZ2h0PVwiMTI5XCIgdmlld0JveD1cIjAgMCAxODQgMTI5XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTQxLjQ2ODIgMzUuODQzVjQ5LjQyMjZDNDEuNDY4MiA1MS42Nzg4IDQwLjc2MDIgNTMuNDYzIDM5LjM0NDIgNTQuNzc1MUMzNy45Mzc2IDU2LjA4NzMgMzYuMDExOCA1Ni43NDM0IDMzLjU2NjkgNTYuNzQzNEMzMS4xNTk2IDU2Ljc0MzQgMjkuMjQ4IDU2LjEwNjIgMjcuODMyIDU0LjgzMThDMjYuNDE2IDUzLjU1NzQgMjUuNjkzOCA1MS44MDYyIDI1LjY2NTUgNDkuNTc4NFYzNS44NDNIMjkuOTEzNVY0OS40NTA5QzI5LjkxMzUgNTAuODAwOSAzMC4yMzQ1IDUxLjc4NzQgMzAuODc2NCA1Mi40MTA0QzMxLjUyNzggNTMuMDI0IDMyLjQyNDYgNTMuMzMwOCAzMy41NjY5IDUzLjMzMDhDMzUuOTU1MiA1My4zMzA4IDM3LjE2ODMgNTIuMDc1MyAzNy4yMDYgNDkuNTY0MlYzNS44NDNINDEuNDY4MlpNNjEuNzE3MiA1Ni40NjAySDU3LjQ2OTJMNDkuMTk5NyA0Mi44OTQ4VjU2LjQ2MDJINDQuOTUxNlYzNS44NDNINDkuMTk5N0w1Ny40ODM0IDQ5LjQzNjhWMzUuODQzSDYxLjcxNzJWNTYuNDYwMlpNNjkuOTQ0MyA1Ni40NjAySDY1LjY5NjNWMzUuODQzSDY5Ljk0NDNWNTYuNDYwMlpcIiBmaWxsPVwiI0ZFRkVGRVwiIC8+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTg3LjQ4NjcgNTYuNDYwMkg4My4yMzg3VjQ3LjYyNDNINzQuOTU1VjU2LjQ2MDJINzAuNzA2OVYzNS44NDNINzQuOTU1VjQ0LjE5NzVIODMuMjM4N1YzNS44NDNIODcuNDg2N1Y1Ni40NjAyWk0xMDMuNjE1IDQ3LjUyNTFIOTUuNDU4OVY1My4wNDc2SDEwNS4wMzFWNTYuNDYwMkg5MS4yMTA4VjM1Ljg0M0gxMDUuMDAzVjM5LjI4MzlIOTUuNDU4OVY0NC4xOTc1SDEwMy42MTVWNDcuNTI1MVpNMTExLjc3MSA1My4wNDc2SDEyMC43OTFWNTYuNDYwMkgxMDcuNTIzVjM1Ljg0M0gxMTEuNzcxVjUzLjA0NzZaTTEyNy40ODkgNDkuMTk2VjU2LjQ2MDJIMTIzLjI0MVYzNS44NDNIMTMxLjI4NEMxMzIuODMyIDM1Ljg0MyAxMzQuMTkyIDM2LjEyNjIgMTM1LjM2MiAzNi42OTI2QzEzNi41NDIgMzcuMjU5IDEzNy40NDggMzguMDY2MiAxMzguMDgxIDM5LjExNEMxMzguNzEzIDQwLjE1MjQgMTM5LjAzIDQxLjMzNzIgMTM5LjAzIDQyLjY2ODJDMTM5LjAzIDQ0LjY4ODQgMTM4LjMzNiA0Ni4yODM4IDEzNi45NDggNDcuNDU0M0MxMzUuNTcgNDguNjE1NSAxMzMuNjU4IDQ5LjE5NiAxMzEuMjEzIDQ5LjE5NkgxMjcuNDg5Wk0xMjcuNDg5IDQ1Ljc1NTFIMTMxLjI4NEMxMzIuNDA3IDQ1Ljc1NTEgMTMzLjI2MiA0NS40OTA4IDEzMy44NDcgNDQuOTYyMkMxMzQuNDQyIDQ0LjQzMzUgMTM0LjczOSA0My42NzgzIDEzNC43MzkgNDIuNjk2NUMxMzQuNzM5IDQxLjY4NjQgMTM0LjQ0MiA0MC44Njk5IDEzMy44NDcgNDAuMjQ2OEMxMzMuMjUyIDM5LjYyMzggMTMyLjQzMSAzOS4zMDI4IDEzMS4zODMgMzkuMjgzOUgxMjcuNDg5VjQ1Ljc1NTFaXCIgZmlsbD1cIndoaXRlXCIgLz5cbiAgICAgICAgICAgIFxuICAgICAgICA8L3N2Zz5cblxuICAgIClcbn1cbmZ1bmN0aW9uIERhc2hpY29uKHtmaWxsfSkge1xuICAgIHJldHVybihcbiAgICAgICAgPHN2ZyB2ZXJzaW9uPVwiMS4wXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIyNVwiIHZpZXdCb3g9XCIwIDAgNTEyLjAwMDAwMCA1MTIuMDAwMDAwXCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkIG1lZXRcIiBmaWxsPVwiYmx1ZVwiPlxuXG4gICAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMC4wMDAwMDAsNTEyLjAwMDAwMCkgc2NhbGUoMC4xMDAwMDAsLTAuMTAwMDAwKVwiIGZpbGw9XCIjMDAwMDAwXCIgc3Ryb2tlPVwibm9uZVwiPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjc1IDUxMDYgYy0xMTEgLTM1IC0xOTAgLTEwNCAtMjM5IC0yMDYgbC0zMSAtNjUgMCAtNTcwIDAgLTU3MCAzMyAtNjcgYzQwIC04MiAxMTkgLTE1NyAyMDAgLTE5MCBsNTcgLTIzIDg0MCAtMyBjNjAzIC0yIDg1NyAwIDkwMCA4IDE2MCAzMSAyNzQgMTQ1IDMwNSAzMDUgOCA0MiAxMCAyMTYgOCA1ODAgLTMgNTE3IC0zIDUyMCAtMjYgNTc3IC0zMyA4MSAtMTA4IDE2MCAtMTkwIDIwMCBsLTY3IDMzIC04NzUgMiBjLTY4OCAyIC04ODQgLTEgLTkxNSAtMTF6XCIgZmlsbD0ge2ZpbGx9IC8+XG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk0zMDQ5IDUxMDYgYy0xMDYgLTI4IC0yMDkgLTEyMSAtMjUxIC0yMjQgbC0yMyAtNTcgLTMgLTExNjAgYy0yIC04MzggMCAtMTE3NyA4IC0xMjIwIDMxIC0xNjAgMTQ1IC0yNzQgMzA1IC0zMDUgNDMgLTggMjk3IC0xMCA5MDAgLTggbDg0MCAzIDU3IDIzIGM4MSAzMyAxNjAgMTA4IDIwMCAxOTAgbDMzIDY3IDAgMTIxMCAwIDEyMTAgLTMxIDY1IGMtNDAgODQgLTEwMCAxNDQgLTE4MiAxODMgbC02NyAzMiAtODcwIDIgYy02NjcgMSAtODgxIC0xIC05MTYgLTExelwiIGZpbGw9e2ZpbGx9Lz5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTMwMCAyOTc5IGMtMTEyIC0yMiAtMjE3IC0xMDcgLTI2OCAtMjE3IGwtMjcgLTU3IDAgLTEyMTAgMCAtMTIxMCAzMSAtNjUgYzM5IC04MyAxMDEgLTE0NSAxODQgLTE4NCBsNjUgLTMxIDg5MCAwIDg5MCAwIDY3IDMzIGM4MiA0MCAxNTcgMTE5IDE5MCAyMDAgbDIzIDU3IDMgMTE2MCBjMiA4MzggMCAxMTc3IC04IDEyMjAgLTMwIDE1NyAtMTQyIDI3MSAtMjk4IDMwNCAtNjQgMTMgLTE2NzIgMTQgLTE3NDIgMHpcIiBmaWxsPXtmaWxsfSAvPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMzA2NSAxNjk2IGMtMTUwIC0zNyAtMjU1IC0xNDggLTI4NSAtMzAxIC04IC00MiAtMTAgLTIxNSAtOCAtNTgwIDMgLTUxNyAzIC01MjAgMjYgLTU3NyAzMyAtODEgMTA4IC0xNjAgMTkwIC0yMDAgbDY3IC0zMyA4OTAgMCA4OTAgMCA2NyAzMiBjODIgMzkgMTQyIDk5IDE4MiAxODMgbDMxIDY1IDAgNTcwIDAgNTcwIC0zMyA2NyBjLTQwIDgyIC0xMTkgMTU3IC0yMDAgMTkwIGwtNTcgMjMgLTg1NSAyIGMtNjQ5IDEgLTg2NyAtMSAtOTA1IC0xMXpcIiBmaWxsPXtmaWxsfSAvPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICA8L3N2Zz5cbiAgICApXG59XG5mdW5jdGlvbiBTZXR0aW5nSWNvbih7ZmlsbH0pIHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIyNVwiIGZpbGw9e2ZpbGx9IGNsYXNzTmFtZT1cImJpIGJpLWdlYXItZmlsbFwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNOS40MDUgMS4wNWMtLjQxMy0xLjQtMi4zOTctMS40LTIuODEgMGwtLjEuMzRhMS40NjQgMS40NjQgMCAwIDEtMi4xMDUuODcybC0uMzEtLjE3Yy0xLjI4My0uNjk4LTIuNjg2LjcwNS0xLjk4NyAxLjk4N2wuMTY5LjMxMWMuNDQ2LjgyLjAyMyAxLjg0MS0uODcyIDIuMTA1bC0uMzQuMWMtMS40LjQxMy0xLjQgMi4zOTcgMCAyLjgxbC4zNC4xYTEuNDY0IDEuNDY0IDAgMCAxIC44NzIgMi4xMDVsLS4xNy4zMWMtLjY5OCAxLjI4My43MDUgMi42ODYgMS45ODcgMS45ODdsLjMxMS0uMTY5YTEuNDY0IDEuNDY0IDAgMCAxIDIuMTA1Ljg3MmwuMS4zNGMuNDEzIDEuNCAyLjM5NyAxLjQgMi44MSAwbC4xLS4zNGExLjQ2NCAxLjQ2NCAwIDAgMSAyLjEwNS0uODcybC4zMS4xN2MxLjI4My42OTggMi42ODYtLjcwNSAxLjk4Ny0xLjk4N2wtLjE2OS0uMzExYTEuNDY0IDEuNDY0IDAgMCAxIC44NzItMi4xMDVsLjM0LS4xYzEuNC0uNDEzIDEuNC0yLjM5NyAwLTIuODFsLS4zNC0uMWExLjQ2NCAxLjQ2NCAwIDAgMS0uODcyLTIuMTA1bC4xNy0uMzFjLjY5OC0xLjI4My0uNzA1LTIuNjg2LTEuOTg3LTEuOTg3bC0uMzExLjE2OWExLjQ2NCAxLjQ2NCAwIDAgMS0yLjEwNS0uODcybC0uMS0uMzR6TTggMTAuOTNhMi45MjkgMi45MjkgMCAxIDEgMC01Ljg2IDIuOTI5IDIuOTI5IDAgMCAxIDAgNS44NTh6XCIgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxufVxuZnVuY3Rpb24gU2lnbm91dCh7ZmlsbH0pe1xuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIFxuICAgICAgICA8c3ZnIG9uQ2xpY2s9eygpID0+IGRhdGEuc2V0TmF2KCFuYXYpfSBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIHdpZHRoPVwiMzBcIiBoZWlnaHQ9XCIzMFwiIGRhdGEtcHJlZml4PVwiZmFyXCIgZGF0YS1pY29uPVwidXNlci1jaXJjbGVcIiBjbGFzc05hbWU9XCJzdmctaW5saW5lLS1mYSBmYS11c2VyLWNpcmNsZSBmYS13LTE2XCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDQ5NiA1MTJcIj48cGF0aCBmaWxsPXtmaWxsfSBkPVwiTTI0OCAxMDRjLTUzIDAtOTYgNDMtOTYgOTZzNDMgOTYgOTYgOTYgOTYtNDMgOTYtOTYtNDMtOTYtOTYtOTZ6bTAgMTQ0Yy0yNi41IDAtNDgtMjEuNS00OC00OHMyMS41LTQ4IDQ4LTQ4IDQ4IDIxLjUgNDggNDgtMjEuNSA0OC00OCA0OHptMC0yNDBDMTExIDggMCAxMTkgMCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzODUgOCAyNDggOHptMCA0NDhjLTQ5LjcgMC05NS4xLTE4LjMtMTMwLjEtNDguNCAxNC45LTIzIDQwLjQtMzguNiA2OS42LTM5LjUgMjAuOCA2LjQgNDAuNiA5LjYgNjAuNSA5LjZzMzkuNy0zLjEgNjAuNS05LjZjMjkuMiAxIDU0LjcgMTYuNSA2OS42IDM5LjUtMzUgMzAuMS04MC40IDQ4LjQtMTMwLjEgNDguNHptMTYyLjctODQuMWMtMjQuNC0zMS40LTYyLjEtNTEuOS0xMDUuMS01MS45LTEwLjIgMC0yNiA5LjYtNTcuNiA5LjYtMzEuNSAwLTQ3LjQtOS42LTU3LjYtOS42LTQyLjkgMC04MC42IDIwLjUtMTA1LjEgNTEuOUM2MS45IDMzOS4yIDQ4IDI5OS4yIDQ4IDI1NmMwLTExMC4zIDg5LjctMjAwIDIwMC0yMDBzMjAwIDg5LjcgMjAwIDIwMGMwIDQzLjItMTMuOSA4My4yLTM3LjMgMTE1Ljl6XCI+PC9wYXRoPjwvc3ZnPlxuICAgIClcbn1cbmZ1bmN0aW9uIFBsdXNTdmcoe2ZpbGwsb25DbGlja30pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c3ZnIG9uQ2xpY2s9e29uQ2xpY2t9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjMwXCIgaGVpZ2h0PVwiMzBcIiBmaWxsPXtmaWxsfSBjbGFzc05hbWU9XCJiaSBiaS1wbHVzLWNpcmNsZS1maWxsXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0xNiA4QTggOCAwIDEgMSAwIDhhOCA4IDAgMCAxIDE2IDB6TTguNSA0LjVhLjUuNSAwIDAgMC0xIDB2M2gtM2EuNS41IDAgMCAwIDAgMWgzdjNhLjUuNSAwIDAgMCAxIDB2LTNoM2EuNS41IDAgMCAwIDAtMWgtM3YtM3pcIiAvPlxuICAgICAgICA8L3N2Zz5cbiAgICApXG59XG5mdW5jdGlvbiBCYWNrc3ZnKHtmaWxsLG9uQ2xpY2t9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgb25DbGljaz17b25DbGlja30gd2lkdGg9XCIzMFwiIGhlaWdodD1cIjMwXCIgZmlsbD17ZmlsbH0gY2xhc3NOYW1lPVwiYmkgYmktY2FyZXQtbGVmdC1zcXVhcmVcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTE0IDFhMSAxIDAgMCAxIDEgMXYxMmExIDEgMCAwIDEtMSAxSDJhMSAxIDAgMCAxLTEtMVYyYTEgMSAwIDAgMSAxLTFoMTJ6TTIgMGEyIDIgMCAwIDAtMiAydjEyYTIgMiAwIDAgMCAyIDJoMTJhMiAyIDAgMCAwIDItMlYyYTIgMiAwIDAgMC0yLTJIMnpcIiAvPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0xMC4yMDUgMTIuNDU2QS41LjUgMCAwIDAgMTAuNSAxMlY0YS41LjUgMCAwIDAtLjgzMi0uMzc0bC00LjUgNGEuNS41IDAgMCAwIDAgLjc0OGw0LjUgNGEuNS41IDAgMCAwIC41MzcuMDgyelwiIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcbn1cbmZ1bmN0aW9uIERlbGV0ZVN2Zyh7ZmlsbCxvbkNsaWNrLHN0eWxlfSkge1xuICAgIHJldHVybihcbiAgICAgICAgPHN2ZyBzdHlsZT17e3Bvc2l0aW9uOlwic3RhdGljICFpbXBvcnRhbnRcIn19IG9uQ2xpY2s9e29uQ2xpY2t9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI1XCIgaGVpZ2h0PVwiMjVcIiBmaWxsPXtmaWxsfSBjbGFzc05hbWU9XCJiaSBiaS10cmFzaFwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNNS41IDUuNUEuNS41IDAgMCAxIDYgNnY2YS41LjUgMCAwIDEtMSAwVjZhLjUuNSAwIDAgMSAuNS0uNXptMi41IDBhLjUuNSAwIDAgMSAuNS41djZhLjUuNSAwIDAgMS0xIDBWNmEuNS41IDAgMCAxIC41LS41em0zIC41YS41LjUgMCAwIDAtMSAwdjZhLjUuNSAwIDAgMCAxIDBWNnpcIiAvPlxuICAgICAgICAgICAgPHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgZD1cIk0xNC41IDNhMSAxIDAgMCAxLTEgMUgxM3Y5YTIgMiAwIDAgMS0yIDJINWEyIDIgMCAwIDEtMi0yVjRoLS41YTEgMSAwIDAgMS0xLTFWMmExIDEgMCAwIDEgMS0xSDZhMSAxIDAgMCAxIDEtMWgyYTEgMSAwIDAgMSAxIDFoMy41YTEgMSAwIDAgMSAxIDF2MXpNNC4xMTggNCA0IDQuMDU5VjEzYTEgMSAwIDAgMCAxIDFoNmExIDEgMCAwIDAgMS0xVjQuMDU5TDExLjg4MiA0SDQuMTE4ek0yLjUgM1YyaDExdjFoLTExelwiIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcbn0iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlsyXS51c2VbMV0hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbMl0udXNlWzJdIS4vYWRtaW5kYXNoLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlsyXS51c2VbMV0hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbMl0udXNlWzJdIS4vYWRtaW5kYXNoLm1vZHVsZS5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbMl0udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzJdLnVzZVsyXSEuL2FkbWluZGFzaC5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5hZG1pbmRhc2hfYWRtaW5kYXNoX18xVndpRiB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZDogI2YyZjZmZjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgO1xcbn1cXG4uYWRtaW5kYXNoX25hdl9fMzZFcUQge1xcbiAgICBncmlkLXJvdzogMS8tMTtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFmMWY0NztcXG4gICAgXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgO1xcbiAgICBcXG59XFxuLmFkbWluZGFzaF9hZG1pbmluZm9fXzFObGhxIHN2Zzpob3ZlciB7XFxuICAgIGZpbGw6IGJyaWdodG5lc3MoMS4xKTtcXG59XFxuLmFkbWluZGFzaF91c2VybmF2X18zMmMwaiB7XFxuICAgIG1heC13aWR0aDogMjUwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xcbiAgICB3aWR0aDogMjMwcHg7XFxuICAgIGhlaWdodDogMTQwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDI1cHg7XFxuICAgIHRvcDogNjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuXFxuLmFkbWluZGFzaF9uYXZfXzM2RXFEIHN2ZyB7XFxuICAgIGdyaWQtcm93OiAxLzM7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgXFxufVxcbi5hZG1pbmRhc2hfYWRtaW5pbmZvX18xTmxocSB7XFxuICAgIGdyaWQtY29sdW1uOiAxMS8tMTtcXG4gICAgZ3JpZC1yb3c6IDEvLTE7XFxufVxcbi5hZG1pbmRhc2hfY2VudGVyX18xREhZMCB7XFxuICAgIGdyaWQtY29sdW1uOiAzLzExO1xcbiAgICBncmlkLXJvdzogMS8tMTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciA7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgO1xcbn1cXG4uYWRtaW5kYXNoX2FjdGl2ZV9fMjVSRkcge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuLmFkbWluZGFzaF9jZW50ZXJfXzFESFkwIGgxIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvNDtcXG4gICAgZ3JpZC1yb3c6IDEvMztcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgXFxuICAgIC8qIHBhZGRpbmc6IDI1cHggMCAwIDA7ICovXFxufVxcbi5hZG1pbmRhc2hfdGV4dGRhdGFfXzFscURwIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvNDtcXG4gICAgZ3JpZC1yb3c6IDEvMztcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMzBweDtcXG4gICAgcGFkZGluZzogMjVweCAwIDAgMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLmFkbWluZGFzaF90ZXh0ZGF0YV9fMWxxRHAgaDEge1xcbiAgICBmb250LXNpemU6IDM2cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG4uYWRtaW5kYXNoX3RleHRkYXRhX18xbHFEcCBwIHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4uYWRtaW5kYXNoX2FuYWx5dGljc19fMWRsR0cge1xcbiAgICBncmlkLXJvdzogMy8xMjtcXG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDtcXG5cXG59XFxuLmFkbWluZGFzaF9zYWxlc19fcl8zbmwge1xcbiAgICBncmlkLXJvdzogMi83O1xcbiAgICBncmlkLWNvbHVtbjogMi8xMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFmMWY0NztcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuLmFkbWluZGFzaF9zZWNvbmRhcnlfXzJLSEFhIHtcXG4gICAgZ3JpZC1yb3c6IDgvMTI7XFxuICAgIGdyaWQtY29sdW1uOiAyLzc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZjFmNDc7XFxuICAgIHdpZHRoOiA5NSU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcbi5hZG1pbmRhc2hfdGhpcmRfX05xMk04IHtcXG4gICAgZ3JpZC1yb3c6OC8xMjtcXG4gICAgZ3JpZC1jb2x1bW46IDcvMTI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZjFmNDc7XFxuICAgIHdpZHRoOiA5NSU7XFxuICAgIGp1c3RpZnktc2VsZjogcmlnaHQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcbi5hZG1pbmRhc2hfYWRtaW5pbmZvX18xTmxocSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyO1xcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNlOWU5ZTkgO1xcbiAgICBcXG59XFxuLmFkbWluZGFzaF9waG90b19fMl9OQnQge1xcbiAgICBncmlkLXJvdzogMi81O1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBoZWlnaHQ6IDkwJTtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZjFmNDc7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgbWF4LXdpZHRoOiAxNTBweDtcXG4gICAgbWF4LWhlaWdodDogMTUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwYzBweDtcXG59XFxuLmFkbWluZGFzaF9hZG1pbmluZm9fXzFObGhxIGgxIHtcXG4gICAgZ3JpZC1yb3c6IDUvNjtcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG4uYWRtaW5kYXNoX2FkbWluaW5mb19fMU5saHEgcCB7XFxuICAgIGdyaWQtcm93OiA2Lzc7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IHRvcDtcXG59XFxuLmFkbWluZGFzaF9hZG1pbmluZm9fXzFObGhxIHN2ZyB7XFxuICAgIGp1c3RpZnktc2VsZjogcmlnaHQ7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcXG59XFxuLmFkbWluZGFzaF9pbmZvc2VjdGlvbl9fM2tVY0Qge1xcbiAgICBncmlkLXJvdzogNy8xMjtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcbi5hZG1pbmRhc2hfaW5mb3NlY3Rpb25fXzNrVWNEIGRpdiB7XFxuICAgIGhlaWdodDogIDgwcHg7XFxuICAgIC8qIHdpZHRoOiAyNTBweDsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFmMWY0NztcXG4gICAgbWFyZ2luOiAyMHB4IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcbi5hZG1pbmRhc2hfbmF2X18zNkVxRCAuYWRtaW5kYXNoX29wdGlvbnNfXzFfMW5aIHtcXG4gICAgZ3JpZC1yb3c6IDMvOTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG4uYWRtaW5kYXNoX25hdl9fMzZFcUQgLmFkbWluZGFzaF9vcHRpb25zX18xXzFuWiBkaXYge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiAyMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2VcXG4gICAgO1xcbn1cXG4uYWRtaW5kYXNoX25hdl9fMzZFcUQgLmFkbWluZGFzaF9vcHRpb25zX18xXzFuWiBkaXY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYxZjYwO1xcbn1cXG4uYWRtaW5kYXNoX29wdGlvbnNfXzFfMW5aIC5hZG1pbmRhc2hfYWN0aXZlX18yNVJGRyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxufVxcbi5hZG1pbmRhc2hfb3B0aW9uc19fMV8xblogLmFkbWluZGFzaF9hY3RpdmVfXzI1UkZHIHN2ZyB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcbi5hZG1pbmRhc2hfb3B0aW9uc19fMV8xblogLmFkbWluZGFzaF9hY3RpdmVfXzI1UkZHIGgxIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGxlZnQ7XFxufVxcbi5hZG1pbmRhc2hfb3B0aW9uc19fMV8xblo6aG92ZXIge1xcbiAgICBcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMSk7XFxuXFxuICAgIHRyYW5zaXRpb246IGZpbHRlciA1MDBtcyBlYXNlLWluLW91dDtcXG59XFxuLmFkbWluZGFzaF9uYXZfXzM2RXFEIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uYWRtaW5kYXNoX2ZlYXR1cmVzX18zcEM3USB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzEyICAgO1xcbiAgICBncmlkLXJvdzogMy8xMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBcXG59XFxuLmFkbWluZGFzaF9mZWF0dXJlc19fM3BDN1EgLmFkbWluZGFzaF9mZWF0dXJlX18yRzhNaiB7XFxuICAgIGhlaWdodDogMTU1cHg7XFxuICAgIHdpZHRoOiAzMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBcXG59XFxuLmFkbWluZGFzaF9mZWF0dXJlX18yRzhNaiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDRmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5hZG1pbmRhc2hfZmVhdHVyZV9fMkc4TWo6aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggLTFweCByZ2JhKDAsMCwwLC4yKSwwIDRweCA1cHggMCByZ2JhKDAsMCwwLC4xNCksMCAxcHggMTBweCAwIHJnYmEoMCwwLDAsLjEyKTtcXG59XFxuLmFkbWluZGFzaF9mZWF0dXJlX18yRzhNaiBzdmcge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogMTtcXG4gICAgbWFyZ2luOiAyNXB4O1xcbiAgICBcXG59XFxuLmFkbWluZGFzaF9mZWF0dXJlX18yRzhNaiBoMSB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzI7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGxlZnQ7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG4uYWRtaW5kYXNoX2ZlYXR1cmVmb3JtX18yTzNCQSB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogOTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uYWRtaW5kYXNoX2ZlYXR1cmVmb3JtX18yTzNCQTpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAtMXB4IHJnYmEoMCwwLDAsLjIpLDAgNHB4IDVweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDFweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTIpO1xcbn1cXG4uYWRtaW5kYXNoX2ZlYXR1cmVmb3JtX18yTzNCQTphY3RpdmUge1xcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggLTFweCByZ2JhKDAsMCwwLC4yKSwwIDRweCA1cHggMCByZ2JhKDAsMCwwLC4xNCksMCAxcHggMTBweCAwIHJnYmEoMCwwLDAsLjEyKTtcXG59XFxuLmFkbWluZGFzaF9nb2JpZ2dlcl9fM3dmZFoge1xcbiAgICBcXG4gICAgXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgaGVpZ2h0OiAxMDB2aCFpbXBvcnRhbnQ7XFxuICAgIHdpZHRoOiAxMDB2dyFpbXBvcnRhbnQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2U7XFxuICAgIHRvcDowO1xcbiAgICBsZWZ0OiAwO1xcblxcblxcbn1cXG4uYWRtaW5kYXNoX2dvYmlnZ2VyX18zd2ZkWiBzdmcge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUhaW1wb3J0YW50O1xcbiAgICB0b3A6IDI1cHg7XFxuICAgIGxlZnQ6IDI1cHg7XFxufVxcbi5hZG1pbmRhc2hfYWRkaW5nZm9ybV9fMWZYTHggIHtcXG4gICAgd2lkdGg6IDgwJTtcXG59XFxuLmFkbWluZGFzaF9nb3NtYWxsZXJfX05KSXVjIHtcXG4gICAgaGVpZ2h0OiAxNTVweCFpbXBvcnRhbnQ7XFxuICAgIHdpZHRoOiAzMjBweCFpbXBvcnRhbnQ7XFxuICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlO1xcbn1cXG4uYWRtaW5kYXNoX3VwcGVyY29udGFpbmVyX18yZmNpYiB7XFxuICAgIGhlaWdodDogODAlO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTExMCUpO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG4uYWRtaW5kYXNoX3VwcGVyY29udGFpbmVyYWN0aXZlX18zcVB3NCBoMSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uYWRtaW5kYXNoX3VwcGVyY29udGFpbmVyYWN0aXZlX18zcVB3NCB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2U7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5hZG1pbmRhc2hfYWRkaW5nZm9ybTFfXzFGam81IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuXFxuLmFkbWluZGFzaF9hZGRpbmdmb3JtMl9fT0RwRC0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uYWRtaW5kYXNoX2FkZGluZ2Zvcm0zX18yeFdQZyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5hZG1pbmRhc2hfaXRlbXNfX2NUT2RsIHtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG4uYWRtaW5kYXNoX2l0ZW1zX19jVE9kbCBzdmcge1xcbiAgICBwb3NpdGlvbjogc3RhdGljICFpbXBvcnRhbnQ7XFxufVxcbi5hZG1pbmRhc2hfYWRkaW5nSXRlbXNfXzNYa0dUIHtcXG4gICAgXFxufVxcbi5hZG1pbmRhc2hfc3ViSXRlbXNfX3A4dmZSIHtcXG4gICAgZ3JpZC1jb2x1bW46IDMgLyBhdXRvO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcbi5hZG1pbmRhc2hfc3ViSXRlbXNfX3A4dmZSIHN2ZyB7XFxuICAgIHBvc2l0aW9uOiBzdGF0aWMhaW1wb3J0YW50O1xcbn1cXG4uYWRtaW5kYXNoX21hbmFnZV9fMlRiVDgge1xcbiAgICBcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9hZG1pbmRhc2gubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYix1RUFBdUU7SUFD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Ozs7QUFHQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7QUFDQTs7QUFFQTtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUNBOztBQUVBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5hZG1pbmRhc2gge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQ6ICNmMmY2ZmY7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDtcXG59XFxuLm5hdiB7XFxuICAgIGdyaWQtcm93OiAxLy0xO1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYxZjQ3O1xcbiAgICBcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciA7XFxuICAgIFxcbn1cXG4uYWRtaW5pbmZvIHN2Zzpob3ZlciB7XFxuICAgIGZpbGw6IGJyaWdodG5lc3MoMS4xKTtcXG59XFxuLnVzZXJuYXYge1xcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcXG4gICAgd2lkdGg6IDIzMHB4O1xcbiAgICBoZWlnaHQ6IDE0MHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAyNXB4O1xcbiAgICB0b3A6IDYwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcblxcbi5uYXYgc3ZnIHtcXG4gICAgZ3JpZC1yb3c6IDEvMztcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICBcXG59XFxuLmFkbWluaW5mbyB7XFxuICAgIGdyaWQtY29sdW1uOiAxMS8tMTtcXG4gICAgZ3JpZC1yb3c6IDEvLTE7XFxufVxcbi5jZW50ZXIge1xcbiAgICBncmlkLWNvbHVtbjogMy8xMTtcXG4gICAgZ3JpZC1yb3c6IDEvLTE7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDtcXG59XFxuLmFjdGl2ZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4uY2VudGVyIGgxIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvNDtcXG4gICAgZ3JpZC1yb3c6IDEvMztcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgXFxuICAgIC8qIHBhZGRpbmc6IDI1cHggMCAwIDA7ICovXFxufVxcbi50ZXh0ZGF0YSB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzQ7XFxuICAgIGdyaWQtcm93OiAxLzM7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTMwcHg7XFxuICAgIHBhZGRpbmc6IDI1cHggMCAwIDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi50ZXh0ZGF0YSBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMzZweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcbi50ZXh0ZGF0YSBwIHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4uYW5hbHl0aWNzIHtcXG4gICAgZ3JpZC1yb3c6IDMvMTI7XFxuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciA7XFxuXFxufVxcbi5zYWxlcyB7XFxuICAgIGdyaWQtcm93OiAyLzc7XFxuICAgIGdyaWQtY29sdW1uOiAyLzEyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYxZjQ3O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG4uc2Vjb25kYXJ5IHtcXG4gICAgZ3JpZC1yb3c6IDgvMTI7XFxuICAgIGdyaWQtY29sdW1uOiAyLzc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZjFmNDc7XFxuICAgIHdpZHRoOiA5NSU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcbi50aGlyZCB7XFxuICAgIGdyaWQtcm93OjgvMTI7XFxuICAgIGdyaWQtY29sdW1uOiA3LzEyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYxZjQ3O1xcbiAgICB3aWR0aDogOTUlO1xcbiAgICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG4uYWRtaW5pbmZvIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnI7XFxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2U5ZTllOSA7XFxuICAgIFxcbn1cXG4ucGhvdG8ge1xcbiAgICBncmlkLXJvdzogMi81O1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBoZWlnaHQ6IDkwJTtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZjFmNDc7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgbWF4LXdpZHRoOiAxNTBweDtcXG4gICAgbWF4LWhlaWdodDogMTUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwYzBweDtcXG59XFxuLmFkbWluaW5mbyBoMSB7XFxuICAgIGdyaWQtcm93OiA1LzY7XFxuICAgIGZvbnQtc2l6ZTogMzZweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuLmFkbWluaW5mbyBwIHtcXG4gICAgZ3JpZC1yb3c6IDYvNztcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogdG9wO1xcbn1cXG4uYWRtaW5pbmZvIHN2ZyB7XFxuICAgIGp1c3RpZnktc2VsZjogcmlnaHQ7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcXG59XFxuLmluZm9zZWN0aW9uIHtcXG4gICAgZ3JpZC1yb3c6IDcvMTI7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG4uaW5mb3NlY3Rpb24gZGl2IHtcXG4gICAgaGVpZ2h0OiAgODBweDtcXG4gICAgLyogd2lkdGg6IDI1MHB4OyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYxZjQ3O1xcbiAgICBtYXJnaW46IDIwcHggMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuLm5hdiAub3B0aW9ucyB7XFxuICAgIGdyaWQtcm93OiAzLzk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuLm5hdiAub3B0aW9ucyBkaXYge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiAyMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2VcXG4gICAgO1xcbn1cXG4ubmF2IC5vcHRpb25zIGRpdjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZjFmNjA7XFxufVxcbi5vcHRpb25zIC5hY3RpdmUge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbn1cXG4ub3B0aW9ucyAuYWN0aXZlIHN2ZyB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcbi5vcHRpb25zIC5hY3RpdmUgaDEge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogbGVmdDtcXG59XFxuLm9wdGlvbnM6aG92ZXIge1xcbiAgICBcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMSk7XFxuXFxuICAgIHRyYW5zaXRpb246IGZpbHRlciA1MDBtcyBlYXNlLWluLW91dDtcXG59XFxuLm5hdiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmZlYXR1cmVzIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMTIgICA7XFxuICAgIGdyaWQtcm93OiAzLzEyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIFxcbn1cXG4uZmVhdHVyZXMgLmZlYXR1cmUge1xcbiAgICBoZWlnaHQ6IDE1NXB4O1xcbiAgICB3aWR0aDogMzIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIG1hcmdpbi1yaWdodDogMjVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgXFxufVxcbi5mZWF0dXJlIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgNGZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2U7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmZlYXR1cmU6aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggLTFweCByZ2JhKDAsMCwwLC4yKSwwIDRweCA1cHggMCByZ2JhKDAsMCwwLC4xNCksMCAxcHggMTBweCAwIHJnYmEoMCwwLDAsLjEyKTtcXG59XFxuLmZlYXR1cmUgc3ZnIHtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICAgIG1hcmdpbjogMjVweDtcXG4gICAgXFxufVxcbi5mZWF0dXJlIGgxIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMjtcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICAgIGp1c3RpZnktc2VsZjogbGVmdDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxufVxcbi5mZWF0dXJlZm9ybSB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogOTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZmVhdHVyZWZvcm06aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggLTFweCByZ2JhKDAsMCwwLC4yKSwwIDRweCA1cHggMCByZ2JhKDAsMCwwLC4xNCksMCAxcHggMTBweCAwIHJnYmEoMCwwLDAsLjEyKTtcXG59XFxuLmZlYXR1cmVmb3JtOmFjdGl2ZSB7XFxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAtMXB4IHJnYmEoMCwwLDAsLjIpLDAgNHB4IDVweCAwIHJnYmEoMCwwLDAsLjE0KSwwIDFweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTIpO1xcbn1cXG4uZ29iaWdnZXIge1xcbiAgICBcXG4gICAgXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgaGVpZ2h0OiAxMDB2aCFpbXBvcnRhbnQ7XFxuICAgIHdpZHRoOiAxMDB2dyFpbXBvcnRhbnQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2U7XFxuICAgIHRvcDowO1xcbiAgICBsZWZ0OiAwO1xcblxcblxcbn1cXG4uZ29iaWdnZXIgc3ZnIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlIWltcG9ydGFudDtcXG4gICAgdG9wOiAyNXB4O1xcbiAgICBsZWZ0OiAyNXB4O1xcbn1cXG4uYWRkaW5nZm9ybSAge1xcbiAgICB3aWR0aDogODAlO1xcbn1cXG4uZ29zbWFsbGVyIHtcXG4gICAgaGVpZ2h0OiAxNTVweCFpbXBvcnRhbnQ7XFxuICAgIHdpZHRoOiAzMjBweCFpbXBvcnRhbnQ7XFxuICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlO1xcbn1cXG4udXBwZXJjb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMTAlKTtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuLnVwcGVyY29udGFpbmVyYWN0aXZlIGgxIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDEwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi51cHBlcmNvbnRhaW5lcmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2U7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5hZGRpbmdmb3JtMSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcblxcbi5hZGRpbmdmb3JtMiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5hZGRpbmdmb3JtMyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5pdGVtcyB7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuLml0ZW1zIHN2ZyB7XFxuICAgIHBvc2l0aW9uOiBzdGF0aWMgIWltcG9ydGFudDtcXG59XFxuLmFkZGluZ0l0ZW1zIHtcXG4gICAgXFxufVxcbi5zdWJJdGVtcyB7XFxuICAgIGdyaWQtY29sdW1uOiAzIC8gYXV0bztcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG4uc3ViSXRlbXMgc3ZnIHtcXG4gICAgcG9zaXRpb246IHN0YXRpYyFpbXBvcnRhbnQ7XFxufVxcbi5tYW5hZ2Uge1xcbiAgICBcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiYWRtaW5kYXNoXCI6IFwiYWRtaW5kYXNoX2FkbWluZGFzaF9fMVZ3aUZcIixcblx0XCJuYXZcIjogXCJhZG1pbmRhc2hfbmF2X18zNkVxRFwiLFxuXHRcImFkbWluaW5mb1wiOiBcImFkbWluZGFzaF9hZG1pbmluZm9fXzFObGhxXCIsXG5cdFwidXNlcm5hdlwiOiBcImFkbWluZGFzaF91c2VybmF2X18zMmMwalwiLFxuXHRcImNlbnRlclwiOiBcImFkbWluZGFzaF9jZW50ZXJfXzFESFkwXCIsXG5cdFwiYWN0aXZlXCI6IFwiYWRtaW5kYXNoX2FjdGl2ZV9fMjVSRkdcIixcblx0XCJ0ZXh0ZGF0YVwiOiBcImFkbWluZGFzaF90ZXh0ZGF0YV9fMWxxRHBcIixcblx0XCJhbmFseXRpY3NcIjogXCJhZG1pbmRhc2hfYW5hbHl0aWNzX18xZGxHR1wiLFxuXHRcInNhbGVzXCI6IFwiYWRtaW5kYXNoX3NhbGVzX19yXzNubFwiLFxuXHRcInNlY29uZGFyeVwiOiBcImFkbWluZGFzaF9zZWNvbmRhcnlfXzJLSEFhXCIsXG5cdFwidGhpcmRcIjogXCJhZG1pbmRhc2hfdGhpcmRfX05xMk04XCIsXG5cdFwicGhvdG9cIjogXCJhZG1pbmRhc2hfcGhvdG9fXzJfTkJ0XCIsXG5cdFwiaW5mb3NlY3Rpb25cIjogXCJhZG1pbmRhc2hfaW5mb3NlY3Rpb25fXzNrVWNEXCIsXG5cdFwib3B0aW9uc1wiOiBcImFkbWluZGFzaF9vcHRpb25zX18xXzFuWlwiLFxuXHRcImZlYXR1cmVzXCI6IFwiYWRtaW5kYXNoX2ZlYXR1cmVzX18zcEM3UVwiLFxuXHRcImZlYXR1cmVcIjogXCJhZG1pbmRhc2hfZmVhdHVyZV9fMkc4TWpcIixcblx0XCJmZWF0dXJlZm9ybVwiOiBcImFkbWluZGFzaF9mZWF0dXJlZm9ybV9fMk8zQkFcIixcblx0XCJnb2JpZ2dlclwiOiBcImFkbWluZGFzaF9nb2JpZ2dlcl9fM3dmZFpcIixcblx0XCJhZGRpbmdmb3JtXCI6IFwiYWRtaW5kYXNoX2FkZGluZ2Zvcm1fXzFmWEx4XCIsXG5cdFwiZ29zbWFsbGVyXCI6IFwiYWRtaW5kYXNoX2dvc21hbGxlcl9fTkpJdWNcIixcblx0XCJ1cHBlcmNvbnRhaW5lclwiOiBcImFkbWluZGFzaF91cHBlcmNvbnRhaW5lcl9fMmZjaWJcIixcblx0XCJ1cHBlcmNvbnRhaW5lcmFjdGl2ZVwiOiBcImFkbWluZGFzaF91cHBlcmNvbnRhaW5lcmFjdGl2ZV9fM3FQdzRcIixcblx0XCJhZGRpbmdmb3JtMVwiOiBcImFkbWluZGFzaF9hZGRpbmdmb3JtMV9fMUZqbzVcIixcblx0XCJhZGRpbmdmb3JtMlwiOiBcImFkbWluZGFzaF9hZGRpbmdmb3JtMl9fT0RwRC1cIixcblx0XCJhZGRpbmdmb3JtM1wiOiBcImFkbWluZGFzaF9hZGRpbmdmb3JtM19fMnhXUGdcIixcblx0XCJpdGVtc1wiOiBcImFkbWluZGFzaF9pdGVtc19fY1RPZGxcIixcblx0XCJhZGRpbmdJdGVtc1wiOiBcImFkbWluZGFzaF9hZGRpbmdJdGVtc19fM1hrR1RcIixcblx0XCJzdWJJdGVtc1wiOiBcImFkbWluZGFzaF9zdWJJdGVtc19fcDh2ZlJcIixcblx0XCJtYW5hZ2VcIjogXCJhZG1pbmRhc2hfbWFuYWdlX18yVGJUOFwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=