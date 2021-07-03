self["webpackHotUpdate_N_E"]("pages/admincontrols",{

/***/ "./pages/admincontrols.jsx":
/*!*********************************!*\
  !*** ./pages/admincontrols.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AdminDash; }
/* harmony export */ });
/* harmony import */ var _home_sanket2904_unihelp_new_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_sanket2904_unihelp_new_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_sanket2904_unihelp_new_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_sanket2904_unihelp_new_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _home_sanket2904_unihelp_new_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
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







var _jsxFileName = "/home/sanket2904/unihelp_new/pages/admincontrols.jsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_home_sanket2904_unihelp_new_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var Loader = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ "components_loader_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ../components/loader */ "./components/loader.jsx"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../components/loader */ "./components/loader.jsx")];
    },
    modules: ["admincontrols.jsx -> " + "../components/loader"]
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

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([{
    name: "",
    price: ""
  }]),
      dataitem = _useState5[0],
      setdataItem = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({
    title: "",
    Description: "",
    price: "",
    imageLink: "",
    items: dataitem
  }),
      newData = _useState6[0],
      setnewData = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      edit = _useState7[0],
      setEdit = _useState7[1];

  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]),
      data = _useState8[0],
      setData = _useState8[1];

  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    axios__WEBPACK_IMPORTED_MODULE_8___default().get("/api/addFeature").then(function (response) {
      setData(response.data);
      console.log(response.data);
    })["catch"](function (err) {
      console.err("tumse nai ho payega");
    });
  }, []);

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      handler = _useState9[0],
      setHandler = _useState9[1];

  function changeEvent(_x, _x2, _x3, _x4, _x5) {
    return _changeEvent.apply(this, arguments);
  }

  function _changeEvent() {
    _changeEvent = (0,_home_sanket2904_unihelp_new_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__.default)( /*#__PURE__*/_home_sanket2904_unihelp_new_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e, height, width, feature, className) {
      return _home_sanket2904_unihelp_new_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
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
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _changeEvent.apply(this, arguments);
  }

  if (toggle) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().admindash),
    children: [nav && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().usernav)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 24
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().nav),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Logo, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().options),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().active),
          onClick: function onClick() {
            setToggle(false);
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Dashicon, {
            fill: "#f2f6ff"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
            style: {
              color: "#f2f6ff",
              fontWeight: 400,
              fontSize: "22px"
            },
            children: "Dashboard"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().active),
          style: {
            backgroundColor: "#f2f6ff",
            borderRadius: "15px"
          },
          onClick: function onClick() {
            setToggle(true);
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SettingIcon, {
            fill: "#1f1f47"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
            style: {
              color: "#1f1f47",
              fontWeight: 400,
              fontSize: "22px"
            },
            children: "Settings"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().center),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
        style: {
          fontSize: "36px"
        },
        children: "Settings"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().features),
        children: [!feature && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().feature),
            onClick: function onClick(e) {
              changeEvent(e, "700px", "700px", true, (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().feature));
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(PlusSvg, {
              fill: "#1f1f47"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
              children: "Add a feature"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 21
          }, this), data.map(function (item) {
            if (!edit) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().feature),
              onClick: function onClick() {
                return setEdit(true);
              },
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
                style: {
                  gridColumn: "1/-1",
                  justifySelf: "center"
                },
                children: item.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 130,
                columnNumber: 41
              }, _this)
            }, item._id, false, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 37
            }, _this);else return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "".concat((_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().feature), " ").concat((_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().gobigger), " "),
              style: {
                gridTemplateColumns: "1fr 1fr 1fr"
              },
              onClick: function onClick(e) {},
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Backsvg, {
                fill: "#1f1f47",
                onClick: function onClick(e) {
                  setEdit(false);
                  document.querySelector(".admindash_gobigger__3wfdZ").classList.remove("admindash_gobigger__3wfdZ");
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 137,
                columnNumber: 41
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().items),
                style: {
                  justifySelf: "left",
                  margin: "50px"
                },
                children: item.data.map(function (data) {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                    style: {
                      display: "flex"
                    },
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
                      style: {
                        backgroundColor: "aliceblue",
                        padding: "20px 40px",
                        margin: "15px 0"
                      },
                      children: data.title
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 150,
                      columnNumber: 61
                    }, _this), console.log(data), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(DeleteSvg, {
                      fill: "black",
                      style: {
                        position: "static !important"
                      },
                      onClick: function onClick(e) {
                        axios__WEBPACK_IMPORTED_MODULE_8___default().delete("/api/addFeature/".concat(item._id, "/").concat(data._id));
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 152,
                      columnNumber: 61
                    }, _this)]
                  }, data._id, true, {
                    fileName: _jsxFileName,
                    lineNumber: 149,
                    columnNumber: 57
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 143,
                columnNumber: 41
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().addingItems),
                style: {
                  justifySelf: "center",
                  alignSelf: "center",
                  gridColumn: "2/3",
                  display: "flex",
                  flexDirection: "column"
                },
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
                  children: "Adding an Entry"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 161,
                  columnNumber: 45
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
                  type: "text",
                  placeholder: "Title",
                  onChange: function onChange(e) {
                    setnewData(_objectSpread(_objectSpread({}, newData), {}, {
                      title: e.target.value
                    }));
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 162,
                  columnNumber: 45
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
                  type: "text",
                  placeholder: "Desciption",
                  onChange: function onChange(e) {
                    setnewData(_objectSpread(_objectSpread({}, newData), {}, {
                      Description: e.target.value
                    }));
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 168,
                  columnNumber: 45
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
                  type: "text",
                  placeholder: "Price",
                  onChange: function onChange(e) {
                    setnewData(_objectSpread(_objectSpread({}, newData), {}, {
                      price: e.target.value
                    }));
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 174,
                  columnNumber: 45
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
                  type: "text",
                  placeholder: "ImageLink",
                  onChange: function onChange(e) {
                    setnewData(_objectSpread(_objectSpread({}, newData), {}, {
                      imageLink: e.target.value
                    }));
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 180,
                  columnNumber: 45
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
                  style: {
                    backgroundColor: "#1f1f47",
                    color: "#fff",
                    height: "40px",
                    borderRadius: "25px"
                  },
                  children: "Submit"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 186,
                  columnNumber: 45
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 160,
                columnNumber: 41
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().subItems),
                style: {
                  gridColumn: "3"
                },
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
                  children: "Add Items"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 189,
                  columnNumber: 45
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("form", {
                  action: "/api/testDatabase",
                  method: "POST",
                  className: "itemform",
                  children: [dataitem.map(function (items, key) {
                    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                      className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().manage),
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
                        type: "text",
                        placeholder: "Item Title",
                        name: "title",
                        onChange: function onChange(e) {
                          var init = dataitem;
                          init[key].name = e.target.value;
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 198,
                        columnNumber: 61
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
                        type: "text",
                        placeholder: "Price",
                        name: "price",
                        onChange: function onChange(e) {
                          var init = dataitem;
                          init[key].price = e.target.value;
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 203,
                        columnNumber: 61
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 197,
                      columnNumber: 57
                    }, _this);
                  }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(PlusSvg, {
                    onClick: function onClick() {
                      setdataItem([].concat((0,_home_sanket2904_unihelp_new_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(dataitem), [{}]));
                      console.log(document.querySelector(".itemform"));
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 213,
                    columnNumber: 45
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
                    type: "submit",
                    value: "Submit",
                    onClick: function onClick(e) {
                      e.preventDefault();
                      newData["items"] = dataitem;
                      axios__WEBPACK_IMPORTED_MODULE_8___default().post("/api/addFeature/".concat(item._id), newData).then(function (response) {
                        return console.log(response);
                      });
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 220,
                    columnNumber: 45
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 190,
                  columnNumber: 45
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 188,
                columnNumber: 41
              }, _this)]
            }, item.data._id, true, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 37
            }, _this);
          })]
        }, void 0, true), feature && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().feature),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Backsvg, {
            fill: "#1f1f47",
            onClick: function onClick(e) {
              changeEvent(e, "320px", "155px", false, (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().feature));
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 237,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().uppercontainer),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
              style: {
                fontSize: "32px"
              },
              children: "Add a feature"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 243,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().addingform1),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
                children: "Main title"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 246,
                columnNumber: 37
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
                type: "text",
                placeholder: "Title",
                onChange: function onChange(e) {
                  return setAdd(_objectSpread(_objectSpread({}, add), {}, {
                    mainTitle: e.target.value
                  }));
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 247,
                columnNumber: 37
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
                type: "text",
                placeholder: "ImageLink",
                onChange: function onChange(e) {
                  return setAdd(_objectSpread(_objectSpread({}, add), {}, {
                    imgLink: e.target.value
                  }));
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 251,
                columnNumber: 37
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
                type: "submit",
                onClick: function onClick(e) {
                  axios__WEBPACK_IMPORTED_MODULE_8___default().post("/api/addFeature", add).then(function (res) {
                    if (res.data.message === "Entry Added") setHandler(true);
                  });
                },
                children: " Submit"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 255,
                columnNumber: 37
              }, this), handler && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().status),
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
                  children: "Entry Added"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 264,
                  columnNumber: 49
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 263,
                columnNumber: 56
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 244,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 242,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 36
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().admininfo),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Signout, {
        fill: "#1f1f47"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().photo)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
        children: "Raj Agarwal"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
        children: "agarwalsanket29@gmail.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 281,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().infosection),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 283,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 284,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 285,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 286,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 282,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 81,
    columnNumber: 9
  }, this);else if (!toggle) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().admindash),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().nav),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Logo, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 296,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().options),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().active),
          style: {
            backgroundColor: "#f2f6ff",
            borderRadius: "15px"
          },
          onClick: function onClick() {
            setToggle(false);
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Dashicon, {
            fill: "#1f1f47"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 299,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
            style: {
              color: "#1f1f47",
              fontWeight: 400,
              fontSize: "22px"
            },
            children: "Dashboard"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 300,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 298,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().active),
          onClick: function onClick(e) {
            setToggle(!toggle);
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SettingIcon, {
            fill: "#f2f6ff"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 307,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
            style: {
              color: "#f2f6ff",
              fontWeight: 400,
              fontSize: "22px"
            },
            children: "Settings"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 308,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 303,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 313,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 314,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 315,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 316,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 297,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().center),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().textdata),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
          children: "Hello,Raj"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 321,
          columnNumber: 20
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
          children: "Welcome back!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 322,
          columnNumber: 20
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 320,
        columnNumber: 16
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().analytics),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().sales)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 325,
          columnNumber: 20
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().secondary)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 328,
          columnNumber: 20
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().third)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 331,
          columnNumber: 20
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 324,
        columnNumber: 16
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().admininfo),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Signout, {
        fill: "#1f1f47"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 338,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().photo)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 339,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
        children: "Raj Agarwal"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 342,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
        children: "agarwalsanket29@gmail.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 343,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().infosection),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 345,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 346,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 347,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 348,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 344,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 294,
    columnNumber: 9
  }, this);
}

_s(AdminDash, "d6mMulyx1CI5q8B29tZlhj3VoQo=");

_c3 = AdminDash;

function Logo() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
    width: "184",
    height: "129",
    viewBox: "0 0 184 129",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M41.4682 35.843V49.4226C41.4682 51.6788 40.7602 53.463 39.3442 54.7751C37.9376 56.0873 36.0118 56.7434 33.5669 56.7434C31.1596 56.7434 29.248 56.1062 27.832 54.8318C26.416 53.5574 25.6938 51.8062 25.6655 49.5784V35.843H29.9135V49.4509C29.9135 50.8009 30.2345 51.7874 30.8764 52.4104C31.5278 53.024 32.4246 53.3308 33.5669 53.3308C35.9552 53.3308 37.1683 52.0753 37.206 49.5642V35.843H41.4682ZM61.7172 56.4602H57.4692L49.1997 42.8948V56.4602H44.9516V35.843H49.1997L57.4834 49.4368V35.843H61.7172V56.4602ZM69.9443 56.4602H65.6963V35.843H69.9443V56.4602Z",
      fill: "#FEFEFE"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M87.4867 56.4602H83.2387V47.6243H74.955V56.4602H70.7069V35.843H74.955V44.1975H83.2387V35.843H87.4867V56.4602ZM103.615 47.5251H95.4589V53.0476H105.031V56.4602H91.2108V35.843H105.003V39.2839H95.4589V44.1975H103.615V47.5251ZM111.771 53.0476H120.791V56.4602H107.523V35.843H111.771V53.0476ZM127.489 49.196V56.4602H123.241V35.843H131.284C132.832 35.843 134.192 36.1262 135.362 36.6926C136.542 37.259 137.448 38.0662 138.081 39.114C138.713 40.1524 139.03 41.3372 139.03 42.6682C139.03 44.6884 138.336 46.2838 136.948 47.4543C135.57 48.6155 133.658 49.196 131.213 49.196H127.489ZM127.489 45.7551H131.284C132.407 45.7551 133.262 45.4908 133.847 44.9622C134.442 44.4335 134.739 43.6783 134.739 42.6965C134.739 41.6864 134.442 40.8699 133.847 40.2468C133.252 39.6238 132.431 39.3028 131.383 39.2839H127.489V45.7551Z",
      fill: "white"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 361,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 359,
    columnNumber: 9
  }, this);
}

_c4 = Logo;

function Dashicon(_ref) {
  var fill = _ref.fill;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
    version: "1.0",
    xmlns: "http://www.w3.org/2000/svg",
    width: "25",
    height: "25",
    viewBox: "0 0 512.000000 512.000000",
    preserveAspectRatio: "xMidYMid meet",
    fill: "blue",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
      transform: "translate(0.000000,512.000000) scale(0.100000,-0.100000)",
      fill: "#000000",
      stroke: "none",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        d: "M275 5106 c-111 -35 -190 -104 -239 -206 l-31 -65 0 -570 0 -570 33 -67 c40 -82 119 -157 200 -190 l57 -23 840 -3 c603 -2 857 0 900 8 160 31 274 145 305 305 8 42 10 216 8 580 -3 517 -3 520 -26 577 -33 81 -108 160 -190 200 l-67 33 -875 2 c-688 2 -884 -1 -915 -11z",
        fill: fill
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 372,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        d: "M3049 5106 c-106 -28 -209 -121 -251 -224 l-23 -57 -3 -1160 c-2 -838 0 -1177 8 -1220 31 -160 145 -274 305 -305 43 -8 297 -10 900 -8 l840 3 57 23 c81 33 160 108 200 190 l33 67 0 1210 0 1210 -31 65 c-40 84 -100 144 -182 183 l-67 32 -870 2 c-667 1 -881 -1 -916 -11z",
        fill: fill
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 373,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        d: "M300 2979 c-112 -22 -217 -107 -268 -217 l-27 -57 0 -1210 0 -1210 31 -65 c39 -83 101 -145 184 -184 l65 -31 890 0 890 0 67 33 c82 40 157 119 190 200 l23 57 3 1160 c2 838 0 1177 -8 1220 -30 157 -142 271 -298 304 -64 13 -1672 14 -1742 0z",
        fill: fill
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 374,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        d: "M3065 1696 c-150 -37 -255 -148 -285 -301 -8 -42 -10 -215 -8 -580 3 -517 3 -520 26 -577 33 -81 108 -160 190 -200 l67 -33 890 0 890 0 67 32 c82 39 142 99 182 183 l31 65 0 570 0 570 -33 67 c-40 82 -119 157 -200 190 l-57 23 -855 2 c-649 1 -867 -1 -905 -11z",
        fill: fill
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 375,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 371,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 369,
    columnNumber: 9
  }, this);
}

_c5 = Dashicon;

function SettingIcon(_ref2) {
  var fill = _ref2.fill;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "25",
    height: "25",
    fill: fill,
    className: "bi bi-gear-fill",
    viewBox: "0 0 16 16",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 383,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 382,
    columnNumber: 9
  }, this);
}

_c6 = SettingIcon;

function Signout(_ref3) {
  var fill = _ref3.fill;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
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
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      fill: fill,
      d: "M248 104c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96zm0 144c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm0-240C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-49.7 0-95.1-18.3-130.1-48.4 14.9-23 40.4-38.6 69.6-39.5 20.8 6.4 40.6 9.6 60.5 9.6s39.7-3.1 60.5-9.6c29.2 1 54.7 16.5 69.6 39.5-35 30.1-80.4 48.4-130.1 48.4zm162.7-84.1c-24.4-31.4-62.1-51.9-105.1-51.9-10.2 0-26 9.6-57.6 9.6-31.5 0-47.4-9.6-57.6-9.6-42.9 0-80.6 20.5-105.1 51.9C61.9 339.2 48 299.2 48 256c0-110.3 89.7-200 200-200s200 89.7 200 200c0 43.2-13.9 83.2-37.3 115.9z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 391,
      columnNumber: 268
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 391,
    columnNumber: 9
  }, this);
}

_c7 = Signout;

function PlusSvg(_ref4) {
  var fill = _ref4.fill,
      onClick = _ref4.onClick;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
    onClick: onClick,
    xmlns: "http://www.w3.org/2000/svg",
    width: "30",
    height: "30",
    fill: fill,
    className: "bi bi-plus-circle-fill",
    viewBox: "0 0 16 16",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 397,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 396,
    columnNumber: 9
  }, this);
}

_c8 = PlusSvg;

function Backsvg(_ref5) {
  var fill = _ref5.fill,
      onClick = _ref5.onClick;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    onClick: onClick,
    width: "30",
    height: "30",
    fill: fill,
    className: "bi bi-caret-left-square",
    viewBox: "0 0 16 16",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 404,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M10.205 12.456A.5.5 0 0 0 10.5 12V4a.5.5 0 0 0-.832-.374l-4.5 4a.5.5 0 0 0 0 .748l4.5 4a.5.5 0 0 0 .537.082z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 405,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 403,
    columnNumber: 9
  }, this);
}

_c9 = Backsvg;

function DeleteSvg(_ref6) {
  var fill = _ref6.fill,
      onClick = _ref6.onClick,
      style = _ref6.style;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
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
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 412,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      fillRule: "evenodd",
      d: "M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 413,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 411,
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW5jb250cm9scy5qc3giXSwibmFtZXMiOlsiTG9hZGVyIiwiZHluYW1pYyIsIkFkbWluRGFzaCIsInVzZVN0YXRlIiwidG9nZ2xlIiwic2V0VG9nZ2xlIiwibmF2Iiwic2V0TmF2IiwiZmVhdHVyZSIsInNldEZlYXR1cmUiLCJtYWluVGl0bGUiLCJpbWdMaW5rIiwiYWRkIiwic2V0QWRkIiwibmFtZSIsInByaWNlIiwiZGF0YWl0ZW0iLCJzZXRkYXRhSXRlbSIsInRpdGxlIiwiRGVzY3JpcHRpb24iLCJpbWFnZUxpbmsiLCJpdGVtcyIsIm5ld0RhdGEiLCJzZXRuZXdEYXRhIiwiZWRpdCIsInNldEVkaXQiLCJkYXRhIiwic2V0RGF0YSIsInVzZUVmZmVjdCIsImF4aW9zIiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImVyciIsImhhbmRsZXIiLCJzZXRIYW5kbGVyIiwiY2hhbmdlRXZlbnQiLCJlIiwiaGVpZ2h0Iiwid2lkdGgiLCJjbGFzc05hbWUiLCJzZXRUaW1lb3V0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0Iiwic3R5bGUiLCIkIiwiYWRkQ2xhc3MiLCJyZW1vdmUiLCJ1c2VybmF2IiwiY29sb3IiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJtYXAiLCJpdGVtIiwiZ3JpZENvbHVtbiIsImp1c3RpZnlTZWxmIiwiX2lkIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsIm1hcmdpbiIsImRpc3BsYXkiLCJwYWRkaW5nIiwicG9zaXRpb24iLCJhbGlnblNlbGYiLCJmbGV4RGlyZWN0aW9uIiwidGFyZ2V0IiwidmFsdWUiLCJrZXkiLCJpbml0IiwicHJldmVudERlZmF1bHQiLCJyZXMiLCJtZXNzYWdlIiwicGhvdG8iLCJzYWxlcyIsInNlY29uZGFyeSIsInRoaXJkIiwiTG9nbyIsIkRhc2hpY29uIiwiZmlsbCIsIlNldHRpbmdJY29uIiwiU2lnbm91dCIsIlBsdXNTdmciLCJvbkNsaWNrIiwiQmFja3N2ZyIsIkRlbGV0ZVN2ZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBLElBQU1BLE1BQU0sR0FBR0MsbURBQU8sTUFBQztBQUFBLFNBQU0seUtBQU47QUFBQSxDQUFEO0FBQUE7QUFBQTtBQUFBLGtDQUFjLHFEQUFkO0FBQUE7QUFBQSx3Q0FBYyxzQkFBZDtBQUFBO0FBQUEsRUFBdEI7TUFBTUQsTTtBQUNTLFNBQVNFLFNBQVQsR0FBcUI7QUFBQTs7QUFBQTs7QUFBQSxrQkFFTEMsK0NBQVEsQ0FBQyxLQUFELENBRkg7QUFBQSxNQUV6QkMsTUFGeUI7QUFBQSxNQUVsQkMsU0FGa0I7O0FBQUEsbUJBR1hGLCtDQUFRLENBQUMsS0FBRCxDQUhHO0FBQUEsTUFHekJHLEdBSHlCO0FBQUEsTUFHckJDLE1BSHFCOztBQUFBLG1CQUlISiwrQ0FBUSxDQUFDLEtBQUQsQ0FKTDtBQUFBLE1BSXpCSyxPQUp5QjtBQUFBLE1BSWpCQyxVQUppQjs7QUFBQSxtQkFLWE4sK0NBQVEsQ0FBQztBQUMxQk8sYUFBUyxFQUFDLEVBRGdCO0FBRTFCQyxXQUFPLEVBQUM7QUFGa0IsR0FBRCxDQUxHO0FBQUEsTUFLekJDLEdBTHlCO0FBQUEsTUFLckJDLE1BTHFCOztBQUFBLG1CQVdGViwrQ0FBUSxDQUFDLENBQUM7QUFDcENXLFFBQUksRUFBQyxFQUQrQjtBQUVwQ0MsU0FBSyxFQUFDO0FBRjhCLEdBQUQsQ0FBRCxDQVhOO0FBQUEsTUFXM0JDLFFBWDJCO0FBQUEsTUFXakJDLFdBWGlCOztBQUFBLG1CQWVKZCwrQ0FBUSxDQUFDO0FBQ2pDZSxTQUFLLEVBQUMsRUFEMkI7QUFFakNDLGVBQVcsRUFBQyxFQUZxQjtBQUdqQ0osU0FBSyxFQUFDLEVBSDJCO0FBSWpDSyxhQUFTLEVBQUMsRUFKdUI7QUFLakNDLFNBQUssRUFB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O0FBQUEsTUFBckJOLElBQXFCLFNBQXJCQSxJQUFxQjtBQUFBLE1BQWhCSSxPQUFnQixTQUFoQkEsT0FBZ0I7QUFBQSxNQUFSdkMsS0FBUSxTQUFSQSxLQUFRO0FBQ3JDLHNCQUNJO0FBQUssU0FBSyxFQUFFO0FBQUNtQixjQUFRLEVBQUM7QUFBVixLQUFaO0FBQTRDLFdBQU8sRUFBRW9CLE9BQXJEO0FBQThELFNBQUssRUFBQyw0QkFBcEU7QUFBaUcsU0FBSyxFQUFDLElBQXZHO0FBQTRHLFVBQU0sRUFBQyxJQUFuSDtBQUF3SCxRQUFJLEVBQUVKLElBQTlIO0FBQW9JLGFBQVMsRUFBQyxhQUE5STtBQUE0SixXQUFPLEVBQUMsV0FBcEs7QUFBQSw0QkFDSTtBQUFNLE9BQUMsRUFBQztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJO0FBQU0sY0FBUSxFQUFDLFNBQWY7QUFBeUIsT0FBQyxFQUFDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQU1IOztPQVBRTSxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluY29udHJvbHMuNmU4NjE2OWMzMGZiNmQxZmIxNjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi4vc3R5bGVzL2FkbWluZGFzaC5tb2R1bGUuY3NzXCJcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIlxuaW1wb3J0ICQsIHsgZGF0YSB9IGZyb20gXCJqcXVlcnlcIlxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXG5cblxuXG5jb25zdCBMb2FkZXIgPSBkeW5hbWljKCgpID0+IGltcG9ydChcIi4uL2NvbXBvbmVudHMvbG9hZGVyXCIpKVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRtaW5EYXNoKCkge1xuICAgIFxuICAgIGNvbnN0IFt0b2dnbGUsc2V0VG9nZ2xlXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IFtuYXYsc2V0TmF2XSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IFtmZWF0dXJlLHNldEZlYXR1cmVdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW2FkZCxzZXRBZGRdID0gdXNlU3RhdGUoe1xuICAgICAgICBtYWluVGl0bGU6XCJcIixcbiAgICAgICAgaW1nTGluazpcIlwiXG4gICAgICAgIFxuXG4gICAgfSlcbiAgICBsZXQgW2RhdGFpdGVtLCBzZXRkYXRhSXRlbV0gPSB1c2VTdGF0ZShbe1xuICAgICAgICBuYW1lOlwiXCIsXG4gICAgICAgIHByaWNlOlwiXCJcbiAgICB9XSlcbiAgICBsZXQgW25ld0RhdGEsIHNldG5ld0RhdGFdID0gdXNlU3RhdGUoe1xuICAgICAgICB0aXRsZTpcIlwiLFxuICAgICAgICBEZXNjcmlwdGlvbjpcIlwiLFxuICAgICAgICBwcmljZTpcIlwiLFxuICAgICAgICBpbWFnZUxpbms6XCJcIixcbiAgICAgICAgaXRlbXM6ZGF0YWl0ZW1cbiAgICB9KVxuICAgIFxuICAgIGxldCBbZWRpdCxzZXRFZGl0XSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGxldCBbZGF0YSxzZXREYXRhXSA9IHVzZVN0YXRlKFtdKVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGF4aW9zLmdldChcIi9hcGkvYWRkRmVhdHVyZVwiKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIHNldERhdGEocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpXG5cbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyKFwidHVtc2UgbmFpIGhvIHBheWVnYVwiKVxuICAgICAgICB9KVxuICAgIH0sW10pXG4gICAgXG4gICAgY29uc3QgW2hhbmRsZXIsc2V0SGFuZGxlcl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBcbiAgIFxuICAgIGFzeW5jIGZ1bmN0aW9uIGNoYW5nZUV2ZW50KGUsaGVpZ2h0LHdpZHRoLGZlYXR1cmUsY2xhc3NOYW1lKSB7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgaWYoZmVhdHVyZSkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuYWRtaW5kYXNoX2ZlYXR1cmVfXzJHOE1qYCkuY2xhc3NMaXN0LmFkZChzdHlsZS5nb2JpZ2dlcilcbiAgICAgICAgICAgICAgICAkKGAuJHtzdHlsZS51cHBlcmNvbnRhaW5lcn1gKS5hZGRDbGFzcyhgJHtzdHlsZS51cHBlcmNvbnRhaW5lcmFjdGl2ZX1gKVxuICAgICAgICAgICAgfSwxNTIpXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmFkbWluZGFzaF9mZWF0dXJlX18yRzhNamApLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGUuZ29iaWdnZXIpXG5cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuYWRtaW5kYXNoX2ZlYXR1cmVfXzJHOE1qYCkuY2xhc3NMaXN0LmFkZChzdHlsZS5nb3NtYWxsZXIpXG4gICAgICAgICAgICB9LDE1MilcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHNldEZlYXR1cmUoZmVhdHVyZSlcbiAgICAgICAgICAgIFxuICAgICAgICB9LDE1MClcbiAgICB9XG4gICAgaWYodG9nZ2xlKSByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYWRtaW5kYXNofT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYXYgJiYgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnVzZXJuYXZ9ID5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLm5hdn0+XG4gICAgICAgICAgICAgICAgPExvZ28gLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUub3B0aW9uc30+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5hY3RpdmV9IG9uQ2xpY2s9eygpID0+IHtzZXRUb2dnbGUoZmFsc2UpfX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgPERhc2hpY29uIGZpbGw9XCIjZjJmNmZmXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyBjb2xvcjogXCIjZjJmNmZmXCIsIGZvbnRXZWlnaHQ6IDQwMCwgZm9udFNpemU6IFwiMjJweFwiIH19PkRhc2hib2FyZDwvaDE+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5hY3RpdmV9IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjZjJmNmZmXCIsIGJvcmRlclJhZGl1czogXCIxNXB4XCIgfX0gb25DbGljaz17KCkgPT4geyBzZXRUb2dnbGUodHJ1ZSkgfX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNldHRpbmdJY29uIGZpbGw9XCIjMWYxZjQ3XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyBjb2xvcjogXCIjMWYxZjQ3XCIsIGZvbnRXZWlnaHQ6IDQwMCwgZm9udFNpemU6IFwiMjJweFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNldHRpbmdzXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY2VudGVyfT5cbiAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3tmb250U2l6ZTpcIjM2cHhcIn19PlNldHRpbmdzPC9oMT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZmVhdHVyZXN9PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB7IWZlYXR1cmUgJiYgPD5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5mZWF0dXJlfSBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VFdmVudChlLCBcIjcwMHB4XCIsIFwiNzAwcHhcIiwgdHJ1ZSxzdHlsZS5mZWF0dXJlKVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGx1c1N2ZyBmaWxsPVwiIzFmMWY0N1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+QWRkIGEgZmVhdHVyZTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZWRpdCkgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5mZWF0dXJlfSBrZXk9e2l0ZW0uX2lkfSBvbkNsaWNrPXsoKSA9PiBzZXRFZGl0KHRydWUpfSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7IGdyaWRDb2x1bW46IFwiMS8tMVwiLCBqdXN0aWZ5U2VsZjpcImNlbnRlclwiIH19ID57aXRlbS50aXRsZX08L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlLmZlYXR1cmV9ICR7c3R5bGUuZ29iaWdnZXJ9IGB9IGtleT17aXRlbS5kYXRhLl9pZH0gc3R5bGU9e3tncmlkVGVtcGxhdGVDb2x1bW5zOlwiMWZyIDFmciAxZnJcIn19ICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhY2tzdmcgZmlsbD1cIiMxZjFmNDdcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFZGl0KGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkbWluZGFzaF9nb2JpZ2dlcl9fM3dmZFpcIikuY2xhc3NMaXN0LnJlbW92ZShcImFkbWluZGFzaF9nb2JpZ2dlcl9fM3dmZFpcIilcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IC8+ICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5pdGVtc30gc3R5bGU9e3tqdXN0aWZ5U2VsZjpcImxlZnRcIixtYXJnaW46XCI1MHB4XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5kYXRhLm1hcCgoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17ZGF0YS5faWR9ICBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCJ9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6XCJhbGljZWJsdWVcIixwYWRkaW5nOlwiMjBweCA0MHB4XCIsbWFyZ2luOlwiMTVweCAwXCJ9fT57ZGF0YS50aXRsZX08L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbnNvbGUubG9nKGRhdGEpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZVN2ZyBmaWxsPVwiYmxhY2tcIiBzdHlsZT17e3Bvc2l0aW9uOlwic3RhdGljICFpbXBvcnRhbnRcIn19IG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXhpb3MuZGVsZXRlKGAvYXBpL2FkZEZlYXR1cmUvJHtpdGVtLl9pZH0vJHtkYXRhLl9pZH1gKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5hZGRpbmdJdGVtc30gc3R5bGU9e3tqdXN0aWZ5U2VsZjpcImNlbnRlclwiLGFsaWduU2VsZjpcImNlbnRlclwiLGdyaWRDb2x1bW46XCIyLzNcIixkaXNwbGF5OlwiZmxleFwiLGZsZXhEaXJlY3Rpb246XCJjb2x1bW5cIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+QWRkaW5nIGFuIEVudHJ5PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJUaXRsZVwiIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0bmV3RGF0YSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ubmV3RGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTplLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJEZXNjaXB0aW9uXCIgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRuZXdEYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5uZXdEYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlc2NyaXB0aW9uOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJQcmljZVwiIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0bmV3RGF0YSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ubmV3RGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiSW1hZ2VMaW5rXCIgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRuZXdEYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5uZXdEYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlTGluazogZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOlwiIzFmMWY0N1wiLGNvbG9yOlwiI2ZmZlwiLGhlaWdodDpcIjQwcHhcIixib3JkZXJSYWRpdXM6XCIyNXB4XCJ9fT5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuc3ViSXRlbXN9IHN0eWxlPXt7Z3JpZENvbHVtbjpcIjNcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+QWRkIEl0ZW1zPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiL2FwaS90ZXN0RGF0YWJhc2VcIiBtZXRob2Q9XCJQT1NUXCIgY2xhc3NOYW1lPVwiaXRlbWZvcm1cIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YWl0ZW0ubWFwKChpdGVtcyxrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0ge3N0eWxlLm1hbmFnZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkl0ZW0gVGl0bGVcIiBuYW1lPVwidGl0bGVcIiBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluaXQgPSBkYXRhaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRba2V5XS5uYW1lID0gZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiUHJpY2VcIiAgbmFtZT1cInByaWNlXCIgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbml0ID0gZGF0YWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0W2tleV0ucHJpY2UgPSBlLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQbHVzU3ZnIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldGRhdGFJdGVtKFsuLi5kYXRhaXRlbSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLml0ZW1mb3JtXCIpKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIiBvbkNsaWNrPXsoZSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0RhdGFbXCJpdGVtc1wiXSA9IGRhdGFpdGVtIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF4aW9zLnBvc3QoYC9hcGkvYWRkRmVhdHVyZS8ke2l0ZW0uX2lkfWAsbmV3RGF0YSkudGhlbigocmVzcG9uc2UpID0+IGNvbnNvbGUubG9nKHJlc3BvbnNlKSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZSAmJiA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZmVhdHVyZX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYWNrc3ZnIGZpbGw9XCIjMWYxZjQ3XCIgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZUV2ZW50KGUsIFwiMzIwcHhcIiwgXCIxNTVweFwiLCBmYWxzZSwgc3R5bGUuZmVhdHVyZSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnVwcGVyY29udGFpbmVyfSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyBmb250U2l6ZTogXCIzMnB4XCIgfX0+QWRkIGEgZmVhdHVyZTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5hZGRpbmdmb3JtMX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5NYWluIHRpdGxlPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICBwbGFjZWhvbGRlcj1cIlRpdGxlXCIgb25DaGFuZ2U9eyhlKSA9PiAoc2V0QWRkKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5hZGQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFpblRpdGxlOmUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkltYWdlTGlua1wiIG9uQ2hhbmdlPXsoZSkgPT4gKHNldEFkZCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uYWRkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZ0xpbms6ZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXhpb3MucG9zdChcIi9hcGkvYWRkRmVhdHVyZVwiLGFkZCkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuZGF0YS5tZXNzYWdlID09PSBcIkVudHJ5IEFkZGVkXCIpIHNldEhhbmRsZXIodHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PiBTdWJtaXQ8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyICYmIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5zdGF0dXN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPkVudHJ5IEFkZGVkPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmFkbWluaW5mb30+XG4gICAgICAgICAgICAgICAgPFNpZ25vdXQgZmlsbD1cIiMxZjFmNDdcIiAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5waG90b30+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aDE+UmFqIEFnYXJ3YWw8L2gxPlxuICAgICAgICAgICAgICAgIDxwPmFnYXJ3YWxzYW5rZXQyOUBnbWFpbC5jb208L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmluZm9zZWN0aW9ufT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgKVxuICAgIGVsc2UgaWYgKCF0b2dnbGUpIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmFkbWluZGFzaH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubmF2fT5cbiAgICAgICAgICAgICAgICA8TG9nbyAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5vcHRpb25zfSA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5hY3RpdmV9IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjZjJmNmZmXCIsIGJvcmRlclJhZGl1czogXCIxNXB4XCIgfX0gb25DbGljaz17KCkgPT4geyBzZXRUb2dnbGUoZmFsc2UpIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPERhc2hpY29uIGZpbGw9XCIjMWYxZjQ3XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyBjb2xvcjpcIiMxZjFmNDdcIixmb250V2VpZ2h0OjQwMCxmb250U2l6ZTpcIjIycHhcIn19PkRhc2hib2FyZDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmFjdGl2ZX0gb25DbGljaz17KGUpID0+IHsgXG4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VG9nZ2xlKCF0b2dnbGUpIFxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2V0dGluZ0ljb24gZmlsbD1cIiNmMmY2ZmZcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7IGNvbG9yOiBcIiNmMmY2ZmZcIiwgZm9udFdlaWdodDogNDAwLCBmb250U2l6ZTogXCIyMnB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2V0dGluZ3NcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNlbnRlcn0+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUudGV4dGRhdGF9PlxuICAgICAgICAgICAgICAgICAgIDxoMT5IZWxsbyxSYWo8L2gxPlxuICAgICAgICAgICAgICAgICAgIDxwPldlbGNvbWUgYmFjayE8L3A+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5hbmFseXRpY3N9PlxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5zYWxlc30+XG4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5zZWNvbmRhcnl9PlxuXG4gICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnRoaXJkfT5cblxuICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmFkbWluaW5mb30+XG4gICAgICAgICAgICAgICAgPFNpZ25vdXQgZmlsbD1cIiMxZjFmNDdcIiAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5waG90b30+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aDE+UmFqIEFnYXJ3YWw8L2gxPlxuICAgICAgICAgICAgICAgIDxwPmFnYXJ3YWxzYW5rZXQyOUBnbWFpbC5jb208L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmluZm9zZWN0aW9ufT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiBcblxuZnVuY3Rpb24gTG9nbygpIHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxzdmcgd2lkdGg9XCIxODRcIiBoZWlnaHQ9XCIxMjlcIiB2aWV3Qm94PVwiMCAwIDE4NCAxMjlcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNNDEuNDY4MiAzNS44NDNWNDkuNDIyNkM0MS40NjgyIDUxLjY3ODggNDAuNzYwMiA1My40NjMgMzkuMzQ0MiA1NC43NzUxQzM3LjkzNzYgNTYuMDg3MyAzNi4wMTE4IDU2Ljc0MzQgMzMuNTY2OSA1Ni43NDM0QzMxLjE1OTYgNTYuNzQzNCAyOS4yNDggNTYuMTA2MiAyNy44MzIgNTQuODMxOEMyNi40MTYgNTMuNTU3NCAyNS42OTM4IDUxLjgwNjIgMjUuNjY1NSA0OS41Nzg0VjM1Ljg0M0gyOS45MTM1VjQ5LjQ1MDlDMjkuOTEzNSA1MC44MDA5IDMwLjIzNDUgNTEuNzg3NCAzMC44NzY0IDUyLjQxMDRDMzEuNTI3OCA1My4wMjQgMzIuNDI0NiA1My4zMzA4IDMzLjU2NjkgNTMuMzMwOEMzNS45NTUyIDUzLjMzMDggMzcuMTY4MyA1Mi4wNzUzIDM3LjIwNiA0OS41NjQyVjM1Ljg0M0g0MS40NjgyWk02MS43MTcyIDU2LjQ2MDJINTcuNDY5Mkw0OS4xOTk3IDQyLjg5NDhWNTYuNDYwMkg0NC45NTE2VjM1Ljg0M0g0OS4xOTk3TDU3LjQ4MzQgNDkuNDM2OFYzNS44NDNINjEuNzE3MlY1Ni40NjAyWk02OS45NDQzIDU2LjQ2MDJINjUuNjk2M1YzNS44NDNINjkuOTQ0M1Y1Ni40NjAyWlwiIGZpbGw9XCIjRkVGRUZFXCIgLz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNODcuNDg2NyA1Ni40NjAySDgzLjIzODdWNDcuNjI0M0g3NC45NTVWNTYuNDYwMkg3MC43MDY5VjM1Ljg0M0g3NC45NTVWNDQuMTk3NUg4My4yMzg3VjM1Ljg0M0g4Ny40ODY3VjU2LjQ2MDJaTTEwMy42MTUgNDcuNTI1MUg5NS40NTg5VjUzLjA0NzZIMTA1LjAzMVY1Ni40NjAySDkxLjIxMDhWMzUuODQzSDEwNS4wMDNWMzkuMjgzOUg5NS40NTg5VjQ0LjE5NzVIMTAzLjYxNVY0Ny41MjUxWk0xMTEuNzcxIDUzLjA0NzZIMTIwLjc5MVY1Ni40NjAySDEwNy41MjNWMzUuODQzSDExMS43NzFWNTMuMDQ3NlpNMTI3LjQ4OSA0OS4xOTZWNTYuNDYwMkgxMjMuMjQxVjM1Ljg0M0gxMzEuMjg0QzEzMi44MzIgMzUuODQzIDEzNC4xOTIgMzYuMTI2MiAxMzUuMzYyIDM2LjY5MjZDMTM2LjU0MiAzNy4yNTkgMTM3LjQ0OCAzOC4wNjYyIDEzOC4wODEgMzkuMTE0QzEzOC43MTMgNDAuMTUyNCAxMzkuMDMgNDEuMzM3MiAxMzkuMDMgNDIuNjY4MkMxMzkuMDMgNDQuNjg4NCAxMzguMzM2IDQ2LjI4MzggMTM2Ljk0OCA0Ny40NTQzQzEzNS41NyA0OC42MTU1IDEzMy42NTggNDkuMTk2IDEzMS4yMTMgNDkuMTk2SDEyNy40ODlaTTEyNy40ODkgNDUuNzU1MUgxMzEuMjg0QzEzMi40MDcgNDUuNzU1MSAxMzMuMjYyIDQ1LjQ5MDggMTMzLjg0NyA0NC45NjIyQzEzNC40NDIgNDQuNDMzNSAxMzQuNzM5IDQzLjY3ODMgMTM0LjczOSA0Mi42OTY1QzEzNC43MzkgNDEuNjg2NCAxMzQuNDQyIDQwLjg2OTkgMTMzLjg0NyA0MC4yNDY4QzEzMy4yNTIgMzkuNjIzOCAxMzIuNDMxIDM5LjMwMjggMTMxLjM4MyAzOS4yODM5SDEyNy40ODlWNDUuNzU1MVpcIiBmaWxsPVwid2hpdGVcIiAvPlxuICAgICAgICAgICAgXG4gICAgICAgIDwvc3ZnPlxuXG4gICAgKVxufVxuZnVuY3Rpb24gRGFzaGljb24oe2ZpbGx9KSB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8c3ZnIHZlcnNpb249XCIxLjBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNVwiIGhlaWdodD1cIjI1XCIgdmlld0JveD1cIjAgMCA1MTIuMDAwMDAwIDUxMi4wMDAwMDBcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWQgbWVldFwiIGZpbGw9XCJibHVlXCI+XG5cbiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwLjAwMDAwMCw1MTIuMDAwMDAwKSBzY2FsZSgwLjEwMDAwMCwtMC4xMDAwMDApXCIgZmlsbD1cIiMwMDAwMDBcIiBzdHJva2U9XCJub25lXCI+XG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yNzUgNTEwNiBjLTExMSAtMzUgLTE5MCAtMTA0IC0yMzkgLTIwNiBsLTMxIC02NSAwIC01NzAgMCAtNTcwIDMzIC02NyBjNDAgLTgyIDExOSAtMTU3IDIwMCAtMTkwIGw1NyAtMjMgODQwIC0zIGM2MDMgLTIgODU3IDAgOTAwIDggMTYwIDMxIDI3NCAxNDUgMzA1IDMwNSA4IDQyIDEwIDIxNiA4IDU4MCAtMyA1MTcgLTMgNTIwIC0yNiA1NzcgLTMzIDgxIC0xMDggMTYwIC0xOTAgMjAwIGwtNjcgMzMgLTg3NSAyIGMtNjg4IDIgLTg4NCAtMSAtOTE1IC0xMXpcIiBmaWxsPSB7ZmlsbH0gLz5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTMwNDkgNTEwNiBjLTEwNiAtMjggLTIwOSAtMTIxIC0yNTEgLTIyNCBsLTIzIC01NyAtMyAtMTE2MCBjLTIgLTgzOCAwIC0xMTc3IDggLTEyMjAgMzEgLTE2MCAxNDUgLTI3NCAzMDUgLTMwNSA0MyAtOCAyOTcgLTEwIDkwMCAtOCBsODQwIDMgNTcgMjMgYzgxIDMzIDE2MCAxMDggMjAwIDE5MCBsMzMgNjcgMCAxMjEwIDAgMTIxMCAtMzEgNjUgYy00MCA4NCAtMTAwIDE0NCAtMTgyIDE4MyBsLTY3IDMyIC04NzAgMiBjLTY2NyAxIC04ODEgLTEgLTkxNiAtMTF6XCIgZmlsbD17ZmlsbH0vPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMzAwIDI5NzkgYy0xMTIgLTIyIC0yMTcgLTEwNyAtMjY4IC0yMTcgbC0yNyAtNTcgMCAtMTIxMCAwIC0xMjEwIDMxIC02NSBjMzkgLTgzIDEwMSAtMTQ1IDE4NCAtMTg0IGw2NSAtMzEgODkwIDAgODkwIDAgNjcgMzMgYzgyIDQwIDE1NyAxMTkgMTkwIDIwMCBsMjMgNTcgMyAxMTYwIGMyIDgzOCAwIDExNzcgLTggMTIyMCAtMzAgMTU3IC0xNDIgMjcxIC0yOTggMzA0IC02NCAxMyAtMTY3MiAxNCAtMTc0MiAwelwiIGZpbGw9e2ZpbGx9IC8+XG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk0zMDY1IDE2OTYgYy0xNTAgLTM3IC0yNTUgLTE0OCAtMjg1IC0zMDEgLTggLTQyIC0xMCAtMjE1IC04IC01ODAgMyAtNTE3IDMgLTUyMCAyNiAtNTc3IDMzIC04MSAxMDggLTE2MCAxOTAgLTIwMCBsNjcgLTMzIDg5MCAwIDg5MCAwIDY3IDMyIGM4MiAzOSAxNDIgOTkgMTgyIDE4MyBsMzEgNjUgMCA1NzAgMCA1NzAgLTMzIDY3IGMtNDAgODIgLTExOSAxNTcgLTIwMCAxOTAgbC01NyAyMyAtODU1IDIgYy02NDkgMSAtODY3IC0xIC05MDUgLTExelwiIGZpbGw9e2ZpbGx9IC8+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcbn1cbmZ1bmN0aW9uIFNldHRpbmdJY29uKHtmaWxsfSkge1xuICAgIHJldHVybihcbiAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNVwiIGhlaWdodD1cIjI1XCIgZmlsbD17ZmlsbH0gY2xhc3NOYW1lPVwiYmkgYmktZ2Vhci1maWxsXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPlxuICAgICAgICAgICAgPHBhdGggZD1cIk05LjQwNSAxLjA1Yy0uNDEzLTEuNC0yLjM5Ny0xLjQtMi44MSAwbC0uMS4zNGExLjQ2NCAxLjQ2NCAwIDAgMS0yLjEwNS44NzJsLS4zMS0uMTdjLTEuMjgzLS42OTgtMi42ODYuNzA1LTEuOTg3IDEuOTg3bC4xNjkuMzExYy40NDYuODIuMDIzIDEuODQxLS44NzIgMi4xMDVsLS4zNC4xYy0xLjQuNDEzLTEuNCAyLjM5NyAwIDIuODFsLjM0LjFhMS40NjQgMS40NjQgMCAwIDEgLjg3MiAyLjEwNWwtLjE3LjMxYy0uNjk4IDEuMjgzLjcwNSAyLjY4NiAxLjk4NyAxLjk4N2wuMzExLS4xNjlhMS40NjQgMS40NjQgMCAwIDEgMi4xMDUuODcybC4xLjM0Yy40MTMgMS40IDIuMzk3IDEuNCAyLjgxIDBsLjEtLjM0YTEuNDY0IDEuNDY0IDAgMCAxIDIuMTA1LS44NzJsLjMxLjE3YzEuMjgzLjY5OCAyLjY4Ni0uNzA1IDEuOTg3LTEuOTg3bC0uMTY5LS4zMTFhMS40NjQgMS40NjQgMCAwIDEgLjg3Mi0yLjEwNWwuMzQtLjFjMS40LS40MTMgMS40LTIuMzk3IDAtMi44MWwtLjM0LS4xYTEuNDY0IDEuNDY0IDAgMCAxLS44NzItMi4xMDVsLjE3LS4zMWMuNjk4LTEuMjgzLS43MDUtMi42ODYtMS45ODctMS45ODdsLS4zMTEuMTY5YTEuNDY0IDEuNDY0IDAgMCAxLTIuMTA1LS44NzJsLS4xLS4zNHpNOCAxMC45M2EyLjkyOSAyLjkyOSAwIDEgMSAwLTUuODYgMi45MjkgMi45MjkgMCAwIDEgMCA1Ljg1OHpcIiAvPlxuICAgICAgICA8L3N2Zz5cbiAgICApXG59XG5mdW5jdGlvbiBTaWdub3V0KHtmaWxsfSl7XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgXG4gICAgICAgIDxzdmcgb25DbGljaz17KCkgPT4gZGF0YS5zZXROYXYoIW5hdil9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgd2lkdGg9XCIzMFwiIGhlaWdodD1cIjMwXCIgZGF0YS1wcmVmaXg9XCJmYXJcIiBkYXRhLWljb249XCJ1c2VyLWNpcmNsZVwiIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUtLWZhIGZhLXVzZXItY2lyY2xlIGZhLXctMTZcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNDk2IDUxMlwiPjxwYXRoIGZpbGw9e2ZpbGx9IGQ9XCJNMjQ4IDEwNGMtNTMgMC05NiA0My05NiA5NnM0MyA5NiA5NiA5NiA5Ni00MyA5Ni05Ni00My05Ni05Ni05NnptMCAxNDRjLTI2LjUgMC00OC0yMS41LTQ4LTQ4czIxLjUtNDggNDgtNDggNDggMjEuNSA0OCA0OC0yMS41IDQ4LTQ4IDQ4em0wLTI0MEMxMTEgOCAwIDExOSAwIDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM4NSA4IDI0OCA4em0wIDQ0OGMtNDkuNyAwLTk1LjEtMTguMy0xMzAuMS00OC40IDE0LjktMjMgNDAuNC0zOC42IDY5LjYtMzkuNSAyMC44IDYuNCA0MC42IDkuNiA2MC41IDkuNnMzOS43LTMuMSA2MC41LTkuNmMyOS4yIDEgNTQuNyAxNi41IDY5LjYgMzkuNS0zNSAzMC4xLTgwLjQgNDguNC0xMzAuMSA0OC40em0xNjIuNy04NC4xYy0yNC40LTMxLjQtNjIuMS01MS45LTEwNS4xLTUxLjktMTAuMiAwLTI2IDkuNi01Ny42IDkuNi0zMS41IDAtNDcuNC05LjYtNTcuNi05LjYtNDIuOSAwLTgwLjYgMjAuNS0xMDUuMSA1MS45QzYxLjkgMzM5LjIgNDggMjk5LjIgNDggMjU2YzAtMTEwLjMgODkuNy0yMDAgMjAwLTIwMHMyMDAgODkuNyAyMDAgMjAwYzAgNDMuMi0xMy45IDgzLjItMzcuMyAxMTUuOXpcIj48L3BhdGg+PC9zdmc+XG4gICAgKVxufVxuZnVuY3Rpb24gUGx1c1N2Zyh7ZmlsbCxvbkNsaWNrfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzdmcgb25DbGljaz17b25DbGlja30geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMzBcIiBoZWlnaHQ9XCIzMFwiIGZpbGw9e2ZpbGx9IGNsYXNzTmFtZT1cImJpIGJpLXBsdXMtY2lyY2xlLWZpbGxcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTE2IDhBOCA4IDAgMSAxIDAgOGE4IDggMCAwIDEgMTYgMHpNOC41IDQuNWEuNS41IDAgMCAwLTEgMHYzaC0zYS41LjUgMCAwIDAgMCAxaDN2M2EuNS41IDAgMCAwIDEgMHYtM2gzYS41LjUgMCAwIDAgMC0xaC0zdi0zelwiIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcbn1cbmZ1bmN0aW9uIEJhY2tzdmcoe2ZpbGwsb25DbGlja30pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBvbkNsaWNrPXtvbkNsaWNrfSB3aWR0aD1cIjMwXCIgaGVpZ2h0PVwiMzBcIiBmaWxsPXtmaWxsfSBjbGFzc05hbWU9XCJiaSBiaS1jYXJldC1sZWZ0LXNxdWFyZVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTQgMWExIDEgMCAwIDEgMSAxdjEyYTEgMSAwIDAgMS0xIDFIMmExIDEgMCAwIDEtMS0xVjJhMSAxIDAgMCAxIDEtMWgxMnpNMiAwYTIgMiAwIDAgMC0yIDJ2MTJhMiAyIDAgMCAwIDIgMmgxMmEyIDIgMCAwIDAgMi0yVjJhMiAyIDAgMCAwLTItMkgyelwiIC8+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTEwLjIwNSAxMi40NTZBLjUuNSAwIDAgMCAxMC41IDEyVjRhLjUuNSAwIDAgMC0uODMyLS4zNzRsLTQuNSA0YS41LjUgMCAwIDAgMCAuNzQ4bDQuNSA0YS41LjUgMCAwIDAgLjUzNy4wODJ6XCIgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxufVxuZnVuY3Rpb24gRGVsZXRlU3ZnKHtmaWxsLG9uQ2xpY2ssc3R5bGV9KSB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8c3ZnIHN0eWxlPXt7cG9zaXRpb246XCJzdGF0aWMgIWltcG9ydGFudFwifX0gb25DbGljaz17b25DbGlja30geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIyNVwiIGZpbGw9e2ZpbGx9IGNsYXNzTmFtZT1cImJpIGJpLXRyYXNoXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPlxuICAgICAgICAgICAgPHBhdGggZD1cIk01LjUgNS41QS41LjUgMCAwIDEgNiA2djZhLjUuNSAwIDAgMS0xIDBWNmEuNS41IDAgMCAxIC41LS41em0yLjUgMGEuNS41IDAgMCAxIC41LjV2NmEuNS41IDAgMCAxLTEgMFY2YS41LjUgMCAwIDEgLjUtLjV6bTMgLjVhLjUuNSAwIDAgMC0xIDB2NmEuNS41IDAgMCAwIDEgMFY2elwiIC8+XG4gICAgICAgICAgICA8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTE0LjUgM2ExIDEgMCAwIDEtMSAxSDEzdjlhMiAyIDAgMCAxLTIgMkg1YTIgMiAwIDAgMS0yLTJWNGgtLjVhMSAxIDAgMCAxLTEtMVYyYTEgMSAwIDAgMSAxLTFINmExIDEgMCAwIDEgMS0xaDJhMSAxIDAgMCAxIDEgMWgzLjVhMSAxIDAgMCAxIDEgMXYxek00LjExOCA0IDQgNC4wNTlWMTNhMSAxIDAgMCAwIDEgMWg2YTEgMSAwIDAgMCAxLTFWNC4wNTlMMTEuODgyIDRINC4xMTh6TTIuNSAzVjJoMTF2MWgtMTF6XCIgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=