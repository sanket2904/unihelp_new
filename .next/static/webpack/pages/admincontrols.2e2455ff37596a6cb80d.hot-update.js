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
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Backsvg, {
                fill: "#1f1f47",
                onClick: function onClick(e) {
                  setEdit(false);
                  document.querySelector(".admindash_gobigger__3wfdZ").classList.remove("admindash_gobigger__3wfdZ");
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 135,
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
                      lineNumber: 148,
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
                      lineNumber: 150,
                      columnNumber: 61
                    }, _this)]
                  }, data._id, true, {
                    fileName: _jsxFileName,
                    lineNumber: 147,
                    columnNumber: 57
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 141,
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
                  lineNumber: 159,
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
                  lineNumber: 160,
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
                  lineNumber: 166,
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
                  lineNumber: 172,
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
                  lineNumber: 178,
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
                  lineNumber: 184,
                  columnNumber: 45
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 158,
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
                  lineNumber: 187,
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
                        lineNumber: 196,
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
                        lineNumber: 201,
                        columnNumber: 61
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 195,
                      columnNumber: 57
                    }, _this);
                  }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(PlusSvg, {
                    onClick: function onClick() {
                      setdataItem([].concat((0,_home_sanket2904_unihelp_new_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(dataitem), [{}]));
                      console.log(document.querySelector(".itemform"));
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 211,
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
                    lineNumber: 218,
                    columnNumber: 45
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 188,
                  columnNumber: 45
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 186,
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
            lineNumber: 235,
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
              lineNumber: 241,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().addingform1),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
                children: "Main title"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 244,
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
                lineNumber: 245,
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
                lineNumber: 249,
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
                lineNumber: 253,
                columnNumber: 37
              }, this), handler && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().status),
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
                  children: "Entry Added"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 262,
                  columnNumber: 49
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 261,
                columnNumber: 56
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 242,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 240,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 234,
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
        lineNumber: 274,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().photo)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
        children: "Raj Agarwal"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
        children: "agarwalsanket29@gmail.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 279,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().infosection),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 281,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 282,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 283,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 284,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 273,
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
        lineNumber: 294,
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
            lineNumber: 297,
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
            lineNumber: 298,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 296,
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
            lineNumber: 305,
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
            lineNumber: 306,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 301,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 311,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 312,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 313,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 314,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 295,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().center),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().textdata),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
          children: "Hello,Raj"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 319,
          columnNumber: 20
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
          children: "Welcome back!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 320,
          columnNumber: 20
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 318,
        columnNumber: 16
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().analytics),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().sales)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 323,
          columnNumber: 20
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().secondary)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 326,
          columnNumber: 20
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().third)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 329,
          columnNumber: 20
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 322,
        columnNumber: 16
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().admininfo),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Signout, {
        fill: "#1f1f47"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 336,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().photo)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 337,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
        children: "Raj Agarwal"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 340,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
        children: "agarwalsanket29@gmail.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 341,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_9___default().infosection),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 343,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 344,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 345,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 346,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 342,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 292,
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
      lineNumber: 358,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M87.4867 56.4602H83.2387V47.6243H74.955V56.4602H70.7069V35.843H74.955V44.1975H83.2387V35.843H87.4867V56.4602ZM103.615 47.5251H95.4589V53.0476H105.031V56.4602H91.2108V35.843H105.003V39.2839H95.4589V44.1975H103.615V47.5251ZM111.771 53.0476H120.791V56.4602H107.523V35.843H111.771V53.0476ZM127.489 49.196V56.4602H123.241V35.843H131.284C132.832 35.843 134.192 36.1262 135.362 36.6926C136.542 37.259 137.448 38.0662 138.081 39.114C138.713 40.1524 139.03 41.3372 139.03 42.6682C139.03 44.6884 138.336 46.2838 136.948 47.4543C135.57 48.6155 133.658 49.196 131.213 49.196H127.489ZM127.489 45.7551H131.284C132.407 45.7551 133.262 45.4908 133.847 44.9622C134.442 44.4335 134.739 43.6783 134.739 42.6965C134.739 41.6864 134.442 40.8699 133.847 40.2468C133.252 39.6238 132.431 39.3028 131.383 39.2839H127.489V45.7551Z",
      fill: "white"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 359,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 357,
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
        lineNumber: 370,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        d: "M3049 5106 c-106 -28 -209 -121 -251 -224 l-23 -57 -3 -1160 c-2 -838 0 -1177 8 -1220 31 -160 145 -274 305 -305 43 -8 297 -10 900 -8 l840 3 57 23 c81 33 160 108 200 190 l33 67 0 1210 0 1210 -31 65 c-40 84 -100 144 -182 183 l-67 32 -870 2 c-667 1 -881 -1 -916 -11z",
        fill: fill
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 371,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        d: "M300 2979 c-112 -22 -217 -107 -268 -217 l-27 -57 0 -1210 0 -1210 31 -65 c39 -83 101 -145 184 -184 l65 -31 890 0 890 0 67 33 c82 40 157 119 190 200 l23 57 3 1160 c2 838 0 1177 -8 1220 -30 157 -142 271 -298 304 -64 13 -1672 14 -1742 0z",
        fill: fill
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 372,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        d: "M3065 1696 c-150 -37 -255 -148 -285 -301 -8 -42 -10 -215 -8 -580 3 -517 3 -520 26 -577 33 -81 108 -160 190 -200 l67 -33 890 0 890 0 67 32 c82 39 142 99 182 183 l31 65 0 570 0 570 -33 67 c-40 82 -119 157 -200 190 l-57 23 -855 2 c-649 1 -867 -1 -905 -11z",
        fill: fill
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 373,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 369,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 367,
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
      lineNumber: 381,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 380,
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
      lineNumber: 389,
      columnNumber: 268
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 389,
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
      lineNumber: 395,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 394,
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
      lineNumber: 402,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M10.205 12.456A.5.5 0 0 0 10.5 12V4a.5.5 0 0 0-.832-.374l-4.5 4a.5.5 0 0 0 0 .748l4.5 4a.5.5 0 0 0 .537.082z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 403,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 401,
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
      lineNumber: 410,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      fillRule: "evenodd",
      d: "M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 411,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 409,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW5jb250cm9scy5qc3giXSwibmFtZXMiOlsiTG9hZGVyIiwiZHluYW1pYyIsIkFkbWluRGFzaCIsInVzZVN0YXRlIiwidG9nZ2xlIiwic2V0VG9nZ2xlIiwibmF2Iiwic2V0TmF2IiwiZmVhdHVyZSIsInNldEZlYXR1cmUiLCJtYWluVGl0bGUiLCJpbWdMaW5rIiwiYWRkIiwic2V0QWRkIiwibmFtZSIsInByaWNlIiwiZGF0YWl0ZW0iLCJzZXRkYXRhSXRlbSIsInRpdGxlIiwiRGVzY3JpcHRpb24iLCJpbWFnZUxpbmsiLCJpdGVtcyIsIm5ld0RhdGEiLCJzZXRuZXdEYXRhIiwiZWRpdCIsInNldEVkaXQiLCJkYXRhIiwic2V0RGF0YSIsInVzZUVmZmVjdCIsImF4aW9zIiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImVyciIsImhhbmRsZXIiLCJzZXRIYW5kbGVyIiwiY2hhbmdlRXZlbnQiLCJlIiwiaGVpZ2h0Iiwid2lkdGgiLCJjbGFzc05hbWUiLCJzZXRUaW1lb3V0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0Iiwic3R5bGUiLCIkIiwiYWRkQ2xhc3MiLCJyZW1vdmUiLCJ1c2VybmF2IiwiY29sb3IiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJtYXAiLCJpdGVtIiwiZ3JpZENvbHVtbiIsImp1c3RpZnlTZWxmIiwiX2lkIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsIm1hcmdpbiIsImRpc3BsYXkiLCJwYWRkaW5nIiwicG9zaXRpb24iLCJhbGlnblNlbGYiLCJmbGV4RGlyZWN0aW9uIiwidGFyZ2V0IiwidmFsdWUiLCJrZXkiLCJpbml0IiwicHJldmVudERlZmF1bHQiLCJyZXMiLCJtZXNzYWdlIiwicGhvdG8iLCJzYWxlcyIsInNlY29uZGFyeSIsInRoaXJkIiwiTG9nbyIsIkRhc2hpY29uIiwiZmlsbCIsIlNldHRpbmdJY29uIiwiU2lnbm91dCIsIlBsdXNTdmciLCJvbkNsaWNrIiwiQmFja3N2ZyIsIkRlbGV0ZVN2ZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBLElBQU1BLE1BQU0sR0FBR0MsbURBQU8sTUFBQztBQUFBLFNBQU0seUtBQU47QUFBQSxDQUFEO0FBQUE7QUFBQTtBQUFBLGtDQUFjLHFEQUFkO0FBQUE7QUFBQSx3Q0FBYyxzQkFBZDtBQUFBO0FBQUEsRUFBdEI7TUFBTUQsTTtBQUNTLFNBQVNFLFNBQVQsR0FBcUI7QUFBQTs7QUFBQTs7QUFBQSxrQkFFTEMsK0NBQVEsQ0FBQyxLQUFELENBRkg7QUFBQSxNQUV6QkMsTUFGeUI7QUFBQSxNQUVsQkMsU0FGa0I7O0FBQUEsbUJBR1hGLCtDQUFRLENBQUMsS0FBRCxDQUhHO0FBQUEsTUFHekJHLEdBSHlCO0FBQUEsTUFHckJDLE1BSHFCOztBQUFBLG1CQUlISiwrQ0FBUSxDQUFDLEtBQUQsQ0FKTDtBQUFBLE1BSXpCSyxPQUp5QjtBQUFBLE1BSWpCQyxVQUppQjs7QUFBQSxtQkFLWE4sK0NBQVEsQ0FBQztBQUMxQk8sYUFBUyxFQUFDLEVBRGdCO0FBRTFCQyxXQUFPLEVBQUM7QUFGa0IsR0FBRCxDQUxHO0FBQUEsTUFLekJDLEdBTHlCO0FBQUEsTUFLckJDLE1BTHFCOztBQUFBLG1CQVdGViwrQ0FBUSxDQUFDLENBQUM7QUFDcENXLFFBQUksRUFBQyxFQUQrQjtBQUVwQ0MsU0FBSyxFQUFDO0FBRjhCLEdBQUQsQ0FBRCxDQVhOO0FBQUEsTUFXM0JDLFFBWDJCO0FBQUEsTUFXakJDLFdBWGlCOztBQUFBLG1CQWVKZCwrQ0FBUSxDQUFDO0FBQ2pDZSxTQUFLLEVBQUMsRUFEMkI7QUFFakNDLGVBQVcsRUFBQyxFQUZxQjtBQUdqQ0osU0FBSyxFQUFDLEVBSDJCO0FBSWpDSyxhQUFTLEVBQUMsRUFKdUI7QUFLakNDLFNBQUssRUFBQ0w7QUFMMkIsR0FBRCxDQWZKO0FBQUEsTUFlM0JNLE9BZjJCO0FBQUEsTUFlbEJDLFVBZmtCOztBQUFBLG1CQXVCWHBCLCtDQUFRLENBQUMsS0FBRCxDQXZCRztBQUFBLE1BdUIzQnFCLElBdkIyQjtBQUFBLE1BdUJ0QkMsT0F2QnNCOztBQUFBLG1CQXdCWHRCLCtDQUFRLENBQUMsRUFBRCxDQXhCRztBQUFBLE1Bd0IzQnVCLElBeEIyQjtBQUFBLE1Bd0J0QkMsT0F4QnNCOztBQXlCaENDLGtEQUFTLENBQUMsWUFBTTtBQUNaQyxvREFBQSxDQUFVLGlCQUFWLEVBQTZCQyxJQUE3QixDQUFrQyxVQUFBQyxRQUFRLEVBQUk7QUFDMUNKLGFBQU8sQ0FBQ0ksUUFBUSxDQUFDTCxJQUFWLENBQVA7QUFDQU0sYUFBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVEsQ0FBQ0wsSUFBckI7QUFFSCxLQUpELFdBSVMsVUFBQVEsR0FBRyxFQUFJO0FBQ1pGLGFBQU8sQ0FBQ0UsR0FBUixDQUFZLHFCQUFaO0FBQ0gsS0FORDtBQU9ILEdBUlEsRUFRUCxFQVJPLENBQVQ7O0FBekJnQyxtQkFtQ0gvQiwrQ0FBUSxDQUFDLEtBQUQsQ0FuQ0w7QUFBQSxNQW1DekJnQyxPQW5DeUI7QUFBQSxNQW1DakJDLFVBbkNpQjs7QUFBQSxXQXNDakJDLFdBdENpQjtBQUFBO0FBQUE7O0FBQUE7QUFBQSwrUUFzQ2hDLGlCQUEyQkMsQ0FBM0IsRUFBNkJDLE1BQTdCLEVBQW9DQyxLQUFwQyxFQUEwQ2hDLE9BQTFDLEVBQWtEaUMsU0FBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdJLGtCQUFHakMsT0FBSCxFQUFZO0FBS1JrQywwQkFBVSxDQUFDLFlBQU07QUFFYkMsMEJBQVEsQ0FBQ0MsYUFBVCw4QkFBb0RDLFNBQXBELENBQThEakMsR0FBOUQsQ0FBa0VrQyw4RUFBbEU7QUFDQUMsK0RBQUMsWUFBS0Qsb0ZBQUwsRUFBRCxDQUE4QkUsUUFBOUIsV0FBMENGLDBGQUExQztBQUNILGlCQUpTLEVBSVIsR0FKUSxDQUFWO0FBTUgsZUFYRCxNQVlLO0FBRURKLDBCQUFVLENBQUMsWUFBTTtBQUNiQywwQkFBUSxDQUFDQyxhQUFULDhCQUFvREMsU0FBcEQsQ0FBOERJLE1BQTlELENBQXFFSCw4RUFBckU7QUFFQUgsMEJBQVEsQ0FBQ0MsYUFBVCw4QkFBb0RDLFNBQXBELENBQThEakMsR0FBOUQsQ0FBa0VrQywrRUFBbEU7QUFDSCxpQkFKUyxFQUlSLEdBSlEsQ0FBVjtBQU1IOztBQUdESix3QkFBVSxDQUFDLFlBQU07QUFFYmpDLDBCQUFVLENBQUNELE9BQUQsQ0FBVjtBQUVILGVBSlMsRUFJUixHQUpRLENBQVY7O0FBMUJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBdENnQztBQUFBO0FBQUE7O0FBc0VoQyxNQUFHSixNQUFILEVBQVcsb0JBQ1A7QUFBSyxhQUFTLEVBQUUwQywrRUFBaEI7QUFBQSxlQUVReEMsR0FBRyxpQkFBSTtBQUFLLGVBQVMsRUFBRXdDLDZFQUFhSTtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRmYsZUFNSTtBQUFLLGVBQVMsRUFBRUoseUVBQWhCO0FBQUEsOEJBQ0ksOERBQUMsSUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFLLGlCQUFTLEVBQUVBLDZFQUFoQjtBQUFBLGdDQUNJO0FBQUssbUJBQVMsRUFBRUEsNEVBQWhCO0FBQThCLGlCQUFPLEVBQUUsbUJBQU07QUFBQ3pDLHFCQUFTLENBQUMsS0FBRCxDQUFUO0FBQWlCLFdBQS9EO0FBQUEsa0NBQ0ksOERBQUMsUUFBRDtBQUFVLGdCQUFJLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBRUk7QUFBSSxpQkFBSyxFQUFFO0FBQUU4QyxtQkFBSyxFQUFFLFNBQVQ7QUFBb0JDLHdCQUFVLEVBQUUsR0FBaEM7QUFBcUNDLHNCQUFRLEVBQUU7QUFBL0MsYUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFNSTtBQUFLLG1CQUFTLEVBQUVQLDRFQUFoQjtBQUE4QixlQUFLLEVBQUU7QUFBRVEsMkJBQWUsRUFBRSxTQUFuQjtBQUE4QkMsd0JBQVksRUFBRTtBQUE1QyxXQUFyQztBQUEyRixpQkFBTyxFQUFFLG1CQUFNO0FBQUVsRCxxQkFBUyxDQUFDLElBQUQsQ0FBVDtBQUFpQixXQUE3SDtBQUFBLGtDQUNJLDhEQUFDLFdBQUQ7QUFBYSxnQkFBSSxFQUFDO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFFSTtBQUFJLGlCQUFLLEVBQUU7QUFBRThDLG1CQUFLLEVBQUUsU0FBVDtBQUFvQkMsd0JBQVUsRUFBRSxHQUFoQztBQUFxQ0Msc0JBQVEsRUFBRTtBQUEvQyxhQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFOSixlQWFJO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBYkosZUFjSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWRKLGVBZUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFmSixlQWdCSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFOSixlQTJCSTtBQUFLLGVBQVMsRUFBRVAsNEVBQWhCO0FBQUEsOEJBQ0k7QUFBSSxhQUFLLEVBQUU7QUFBQ08sa0JBQVEsRUFBQztBQUFWLFNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQUssaUJBQVMsRUFBRVAsOEVBQWhCO0FBQUEsbUJBSUssQ0FBQ3RDLE9BQUQsaUJBQVk7QUFBQSxrQ0FFYjtBQUFLLHFCQUFTLEVBQUVzQyw2RUFBaEI7QUFBK0IsbUJBQU8sRUFBRSxpQkFBQ1IsQ0FBRCxFQUFPO0FBRTNDRCx5QkFBVyxDQUFDQyxDQUFELEVBQUksT0FBSixFQUFhLE9BQWIsRUFBc0IsSUFBdEIsRUFBMkJRLDZFQUEzQixDQUFYO0FBRVAsYUFKRztBQUFBLG9DQUtJLDhEQUFDLE9BQUQ7QUFBUyxrQkFBSSxFQUFDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFMSixlQU1JO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGYSxFQVlMcEIsSUFBSSxDQUFDOEIsR0FBTCxDQUFTLFVBQUNDLElBQUQsRUFBVTtBQUVmLGdCQUFJLENBQUNqQyxJQUFMLEVBQVcsb0JBQ1A7QUFBSyx1QkFBUyxFQUFFc0IsNkVBQWhCO0FBQThDLHFCQUFPLEVBQUU7QUFBQSx1QkFBTXJCLE9BQU8sQ0FBQyxJQUFELENBQWI7QUFBQSxlQUF2RDtBQUFBLHFDQUNJO0FBQUkscUJBQUssRUFBRTtBQUFFaUMsNEJBQVUsRUFBRSxNQUFkO0FBQXNCQyw2QkFBVyxFQUFDO0FBQWxDLGlCQUFYO0FBQUEsMEJBQTJERixJQUFJLENBQUN2QztBQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosZUFBb0N1QyxJQUFJLENBQUNHLEdBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRE8sQ0FBWCxLQUtLLG9CQUNEO0FBQUssdUJBQVMsWUFBS2QsNkVBQUwsY0FBc0JBLDhFQUF0QixNQUFkO0FBQTJFLG1CQUFLLEVBQUU7QUFBQ2UsbUNBQW1CLEVBQUM7QUFBckIsZUFBbEY7QUFBQSxzQ0FDSSw4REFBQyxPQUFEO0FBQVMsb0JBQUksRUFBQyxTQUFkO0FBQXdCLHVCQUFPLEVBQUUsaUJBQUN2QixDQUFELEVBQU87QUFDcENiLHlCQUFPLENBQUMsS0FBRCxDQUFQO0FBQ0FrQiwwQkFBUSxDQUFDQyxhQUFULENBQXVCLDRCQUF2QixFQUFxREMsU0FBckQsQ0FBK0RJLE1BQS9ELENBQXNFLDJCQUF0RTtBQUVIO0FBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQU9JO0FBQUsseUJBQVMsRUFBRUgsMkVBQWhCO0FBQTZCLHFCQUFLLEVBQUU7QUFBQ2EsNkJBQVcsRUFBQyxNQUFiO0FBQW9CRyx3QkFBTSxFQUFDO0FBQTNCLGlCQUFwQztBQUFBLDBCQUVRTCxJQUFJLENBQUMvQixJQUFMLENBQVU4QixHQUFWLENBQWMsVUFBQzlCLElBQUQsRUFBVTtBQUVwQixzQ0FFSTtBQUFxQix5QkFBSyxFQUFFO0FBQUNxQyw2QkFBTyxFQUFDO0FBQVQscUJBQTVCO0FBQUEsNENBQ0k7QUFBSSwyQkFBSyxFQUFFO0FBQUNULHVDQUFlLEVBQUMsV0FBakI7QUFBNkJVLCtCQUFPLEVBQUMsV0FBckM7QUFBaURGLDhCQUFNLEVBQUM7QUFBeEQsdUJBQVg7QUFBQSxnQ0FBK0VwQyxJQUFJLENBQUNSO0FBQXBGO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREosRUFFS2MsT0FBTyxDQUFDQyxHQUFSLENBQVlQLElBQVosQ0FGTCxlQUdJLDhEQUFDLFNBQUQ7QUFBVywwQkFBSSxFQUFDLE9BQWhCO0FBQXdCLDJCQUFLLEVBQUU7QUFBQ3VDLGdDQUFRLEVBQUM7QUFBVix1QkFBL0I7QUFBK0QsNkJBQU8sRUFBRSxpQkFBQzNCLENBQUQsRUFBTztBQUMzRVQsMkVBQUEsMkJBQWdDNEIsSUFBSSxDQUFDRyxHQUFyQyxjQUE0Q2xDLElBQUksQ0FBQ2tDLEdBQWpEO0FBQ0g7QUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUhKO0FBQUEscUJBQVVsQyxJQUFJLENBQUNrQyxHQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRko7QUFVSCxpQkFaRDtBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBUEosZUF3Qkk7QUFBSyx5QkFBUyxFQUFFZCxpRkFBaEI7QUFBbUMscUJBQUssRUFBRTtBQUFDYSw2QkFBVyxFQUFDLFFBQWI7QUFBc0JPLDJCQUFTLEVBQUMsUUFBaEM7QUFBeUNSLDRCQUFVLEVBQUMsS0FBcEQ7QUFBMERLLHlCQUFPLEVBQUMsTUFBbEU7QUFBeUVJLCtCQUFhLEVBQUM7QUFBdkYsaUJBQTFDO0FBQUEsd0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREosZUFFSTtBQUFPLHNCQUFJLEVBQUMsTUFBWjtBQUFtQiw2QkFBVyxFQUFDLE9BQS9CO0FBQXVDLDBCQUFRLEVBQUUsa0JBQUM3QixDQUFELEVBQU87QUFDcERmLDhCQUFVLGlDQUNIRCxPQURHO0FBRU5KLDJCQUFLLEVBQUNvQixDQUFDLENBQUM4QixNQUFGLENBQVNDO0FBRlQsdUJBQVY7QUFJSDtBQUxEO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRkosZUFRSTtBQUFPLHNCQUFJLEVBQUMsTUFBWjtBQUFtQiw2QkFBVyxFQUFDLFlBQS9CO0FBQTRDLDBCQUFRLEVBQUUsa0JBQUMvQixDQUFELEVBQU87QUFDekRmLDhCQUFVLGlDQUNIRCxPQURHO0FBRU5ILGlDQUFXLEVBQUVtQixDQUFDLENBQUM4QixNQUFGLENBQVNDO0FBRmhCLHVCQUFWO0FBSUg7QUFMRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVJKLGVBY0k7QUFBTyxzQkFBSSxFQUFDLE1BQVo7QUFBbUIsNkJBQVcsRUFBQyxPQUEvQjtBQUF1QywwQkFBUSxFQUFFLGtCQUFDL0IsQ0FBRCxFQUFPO0FBQ3BEZiw4QkFBVSxpQ0FDSEQsT0FERztBQUVOUCwyQkFBSyxFQUFFdUIsQ0FBQyxDQUFDOEIsTUFBRixDQUFTQztBQUZWLHVCQUFWO0FBSUg7QUFMRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQWRKLGVBb0JJO0FBQU8sc0JBQUksRUFBQyxNQUFaO0FBQW1CLDZCQUFXLEVBQUMsV0FBL0I7QUFBMkMsMEJBQVEsRUFBRSxrQkFBQy9CLENBQUQsRUFBTztBQUN4RGYsOEJBQVUsaUNBQ0hELE9BREc7QUFFTkYsK0JBQVMsRUFBRWtCLENBQUMsQ0FBQzhCLE1BQUYsQ0FBU0M7QUFGZCx1QkFBVjtBQUlIO0FBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFwQkosZUEwQkk7QUFBUSx1QkFBSyxFQUFFO0FBQUVmLG1DQUFlLEVBQUMsU0FBbEI7QUFBNEJILHlCQUFLLEVBQUMsTUFBbEM7QUFBeUNaLDBCQUFNLEVBQUMsTUFBaEQ7QUFBdURnQixnQ0FBWSxFQUFDO0FBQXBFLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQTFCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBeEJKLGVBb0RJO0FBQUsseUJBQVMsRUFBRVQsOEVBQWhCO0FBQWdDLHFCQUFLLEVBQUU7QUFBQ1ksNEJBQVUsRUFBQztBQUFaLGlCQUF2QztBQUFBLHdDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURKLGVBRUk7QUFBTSx3QkFBTSxFQUFDLG1CQUFiO0FBQWlDLHdCQUFNLEVBQUMsTUFBeEM7QUFBK0MsMkJBQVMsRUFBQyxVQUF6RDtBQUFBLDZCQUdJMUMsUUFBUSxDQUFDd0MsR0FBVCxDQUFhLFVBQUNuQyxLQUFELEVBQU9pRCxHQUFQLEVBQWU7QUFHeEIsd0NBQ0k7QUFBSywrQkFBUyxFQUFJeEIsNEVBQWxCO0FBQUEsOENBQ0k7QUFBTyw0QkFBSSxFQUFDLE1BQVo7QUFBbUIsbUNBQVcsRUFBQyxZQUEvQjtBQUE0Qyw0QkFBSSxFQUFDLE9BQWpEO0FBQXlELGdDQUFRLEVBQUUsa0JBQUFSLENBQUMsRUFBSTtBQUNwRSw4QkFBSWlDLElBQUksR0FBR3ZELFFBQVg7QUFDQXVELDhCQUFJLENBQUNELEdBQUQsQ0FBSixDQUFVeEQsSUFBVixHQUFpQndCLENBQUMsQ0FBQzhCLE1BQUYsQ0FBU0MsS0FBMUI7QUFFSDtBQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBREosZUFNSTtBQUFPLDRCQUFJLEVBQUMsTUFBWjtBQUFtQixtQ0FBVyxFQUFDLE9BQS9CO0FBQXdDLDRCQUFJLEVBQUMsT0FBN0M7QUFBcUQsZ0NBQVEsRUFBRSxrQkFBQS9CLENBQUMsRUFBSTtBQUNoRSw4QkFBSWlDLElBQUksR0FBR3ZELFFBQVg7QUFDQXVELDhCQUFJLENBQUNELEdBQUQsQ0FBSixDQUFVdkQsS0FBVixHQUFrQnVCLENBQUMsQ0FBQzhCLE1BQUYsQ0FBU0MsS0FBM0I7QUFFSDtBQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURKO0FBZUgsbUJBbEJELENBSEosZUF1QkEsOERBQUMsT0FBRDtBQUFTLDJCQUFPLEVBQUUsbUJBQU07QUFDcEJwRCxpQ0FBVywwSUFBS0QsUUFBTCxJQUFlLEVBQWYsR0FBWDtBQUdBZ0IsNkJBQU8sQ0FBQ0MsR0FBUixDQUFZVSxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBWjtBQUVIO0FBTkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkF2QkEsZUE4QkE7QUFBTyx3QkFBSSxFQUFDLFFBQVo7QUFBcUIseUJBQUssRUFBQyxRQUEzQjtBQUFvQywyQkFBTyxFQUFFLGlCQUFDTixDQUFELEVBQU87QUFFaERBLHVCQUFDLENBQUNrQyxjQUFGO0FBQ0FsRCw2QkFBTyxDQUFDLE9BQUQsQ0FBUCxHQUFtQk4sUUFBbkI7QUFDSWEsdUVBQUEsMkJBQThCNEIsSUFBSSxDQUFDRyxHQUFuQyxHQUF5Q3RDLE9BQXpDLEVBQWtEUSxJQUFsRCxDQUF1RCxVQUFDQyxRQUFEO0FBQUEsK0JBQWNDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixRQUFaLENBQWQ7QUFBQSx1QkFBdkQ7QUFDUDtBQUxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBOUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBcERKO0FBQUEsZUFBNEQwQixJQUFJLENBQUMvQixJQUFMLENBQVVrQyxHQUF0RTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURDO0FBZ0dSLFdBdkdELENBWks7QUFBQSx3QkFKakIsRUE0SFFwRCxPQUFPLGlCQUFJO0FBQUssbUJBQVMsRUFBRXNDLDZFQUFoQjtBQUFBLGtDQUNQLDhEQUFDLE9BQUQ7QUFBUyxnQkFBSSxFQUFDLFNBQWQ7QUFBeUIsbUJBQU8sRUFBRSxpQkFBQ1IsQ0FBRCxFQUFPO0FBQ3JDRCx5QkFBVyxDQUFDQyxDQUFELEVBQUksT0FBSixFQUFhLE9BQWIsRUFBc0IsS0FBdEIsRUFBNkJRLDZFQUE3QixDQUFYO0FBRUg7QUFIRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURPLGVBTVA7QUFBSyxxQkFBUyxFQUFFQSxvRkFBaEI7QUFBQSxvQ0FDSTtBQUFJLG1CQUFLLEVBQUU7QUFBRU8sd0JBQVEsRUFBRTtBQUFaLGVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosZUFFSTtBQUFLLHVCQUFTLEVBQUVQLGlGQUFoQjtBQUFBLHNDQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZKLGVBR0k7QUFBTyxvQkFBSSxFQUFDLE1BQVo7QUFBb0IsMkJBQVcsRUFBQyxPQUFoQztBQUF3Qyx3QkFBUSxFQUFFLGtCQUFDUixDQUFEO0FBQUEseUJBQVF6QixNQUFNLGlDQUN6REQsR0FEeUQ7QUFFNURGLDZCQUFTLEVBQUM0QixDQUFDLENBQUM4QixNQUFGLENBQVNDO0FBRnlDLHFCQUFkO0FBQUE7QUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFISixlQU9JO0FBQU8sb0JBQUksRUFBQyxNQUFaO0FBQW1CLDJCQUFXLEVBQUMsV0FBL0I7QUFBMkMsd0JBQVEsRUFBRSxrQkFBQy9CLENBQUQ7QUFBQSx5QkFBUXpCLE1BQU0saUNBQzVERCxHQUQ0RDtBQUUvREQsMkJBQU8sRUFBQzJCLENBQUMsQ0FBQzhCLE1BQUYsQ0FBU0M7QUFGOEMscUJBQWQ7QUFBQTtBQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVBKLGVBV0k7QUFBUSxvQkFBSSxFQUFDLFFBQWI7QUFBc0IsdUJBQU8sRUFBRSxpQkFBQy9CLENBQUQsRUFBTztBQUNsQ1QsbUVBQUEsQ0FBVyxpQkFBWCxFQUE2QmpCLEdBQTdCLEVBQWtDa0IsSUFBbEMsQ0FBdUMsVUFBQTJDLEdBQUcsRUFBSTtBQUMxQyx3QkFBR0EsR0FBRyxDQUFDL0MsSUFBSixDQUFTZ0QsT0FBVCxLQUFxQixhQUF4QixFQUF1Q3RDLFVBQVUsQ0FBQyxJQUFELENBQVY7QUFDMUMsbUJBRkQ7QUFHSCxpQkFKRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFYSixFQW1CWUQsT0FBTyxpQkFBSTtBQUFLLHlCQUFTLEVBQUVXLDRFQUFoQjtBQUFBLHVDQUNQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRE87QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFuQnZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTk87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTVIbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBM0JKLGVBZ01JO0FBQUssZUFBUyxFQUFFQSwrRUFBaEI7QUFBQSw4QkFDSSw4REFBQyxPQUFEO0FBQVMsWUFBSSxFQUFDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBSyxpQkFBUyxFQUFFQSwyRUFBVzZCO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixlQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEosZUFNSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5KLGVBT0k7QUFBSyxpQkFBUyxFQUFFN0IsaUZBQWhCO0FBQUEsZ0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkosZUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhKLGVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoTUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRE8sQ0FBWCxLQW1OSyxJQUFJLENBQUMxQyxNQUFMLEVBQWEsb0JBQ2Q7QUFBSyxhQUFTLEVBQUUwQywrRUFBaEI7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBRUEseUVBQWhCO0FBQUEsOEJBQ0ksOERBQUMsSUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFLLGlCQUFTLEVBQUVBLDZFQUFoQjtBQUFBLGdDQUNJO0FBQUssbUJBQVMsRUFBRUEsNEVBQWhCO0FBQThCLGVBQUssRUFBRTtBQUFFUSwyQkFBZSxFQUFFLFNBQW5CO0FBQThCQyx3QkFBWSxFQUFFO0FBQTVDLFdBQXJDO0FBQTJGLGlCQUFPLEVBQUUsbUJBQU07QUFBRWxELHFCQUFTLENBQUMsS0FBRCxDQUFUO0FBQWtCLFdBQTlIO0FBQUEsa0NBQ0ksOERBQUMsUUFBRDtBQUFVLGdCQUFJLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBRUk7QUFBSSxpQkFBSyxFQUFFO0FBQUU4QyxtQkFBSyxFQUFDLFNBQVI7QUFBa0JDLHdCQUFVLEVBQUMsR0FBN0I7QUFBaUNDLHNCQUFRLEVBQUM7QUFBMUMsYUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFNSTtBQUFLLG1CQUFTLEVBQUVQLDRFQUFoQjtBQUE4QixpQkFBTyxFQUFFLGlCQUFDUixDQUFELEVBQU87QUFFMUNqQyxxQkFBUyxDQUFDLENBQUNELE1BQUYsQ0FBVDtBQUNDLFdBSEw7QUFBQSxrQ0FJSSw4REFBQyxXQUFEO0FBQWEsZ0JBQUksRUFBQztBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpKLGVBS0k7QUFBSSxpQkFBSyxFQUFFO0FBQUUrQyxtQkFBSyxFQUFFLFNBQVQ7QUFBb0JDLHdCQUFVLEVBQUUsR0FBaEM7QUFBcUNDLHNCQUFRLEVBQUU7QUFBL0MsYUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkosZUFnQkk7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFoQkosZUFpQkk7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFqQkosZUFrQkk7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFsQkosZUFtQkk7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFuQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUF5Qkk7QUFBSyxlQUFTLEVBQUVQLDRFQUFoQjtBQUFBLDhCQUNHO0FBQUssaUJBQVMsRUFBRUEsOEVBQWhCO0FBQUEsZ0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESCxlQUtHO0FBQUssaUJBQVMsRUFBRUEsK0VBQWhCO0FBQUEsZ0NBQ0k7QUFBSyxtQkFBUyxFQUFFQSwyRUFBVzhCO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFJSTtBQUFLLG1CQUFTLEVBQUU5QiwrRUFBZStCO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkosZUFPSTtBQUFLLG1CQUFTLEVBQUUvQiwyRUFBV2dDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBekJKLGVBMkNJO0FBQUssZUFBUyxFQUFFaEMsK0VBQWhCO0FBQUEsOEJBQ0ksOERBQUMsT0FBRDtBQUFTLFlBQUksRUFBQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQUssaUJBQVMsRUFBRUEsMkVBQVc2QjtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosZUFLSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxKLGVBTUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FOSixlQU9JO0FBQUssaUJBQVMsRUFBRTdCLGlGQUFoQjtBQUFBLGdDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKLGVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFISixlQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBM0NKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURjO0FBNkRyQjs7R0F0VnVCNUMsUzs7TUFBQUEsUzs7QUF5VnhCLFNBQVM2RSxJQUFULEdBQWdCO0FBQ1osc0JBQ0k7QUFBSyxTQUFLLEVBQUMsS0FBWDtBQUFpQixVQUFNLEVBQUMsS0FBeEI7QUFBOEIsV0FBTyxFQUFDLGFBQXRDO0FBQW9ELFFBQUksRUFBQyxNQUF6RDtBQUFnRSxTQUFLLEVBQUMsNEJBQXRFO0FBQUEsNEJBQ0k7QUFBTSxPQUFDLEVBQUMseWlCQUFSO0FBQWtqQixVQUFJLEVBQUM7QUFBdmpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJO0FBQU0sT0FBQyxFQUFDLHN5QkFBUjtBQUEreUIsVUFBSSxFQUFDO0FBQXB6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFRSDs7TUFUUUEsSTs7QUFVVCxTQUFTQyxRQUFULE9BQTBCO0FBQUEsTUFBUEMsSUFBTyxRQUFQQSxJQUFPO0FBQ3RCLHNCQUNJO0FBQUssV0FBTyxFQUFDLEtBQWI7QUFBbUIsU0FBSyxFQUFDLDRCQUF6QjtBQUFzRCxTQUFLLEVBQUMsSUFBNUQ7QUFBaUUsVUFBTSxFQUFDLElBQXhFO0FBQTZFLFdBQU8sRUFBQywyQkFBckY7QUFBaUgsdUJBQW1CLEVBQUMsZUFBckk7QUFBcUosUUFBSSxFQUFDLE1BQTFKO0FBQUEsMkJBRUk7QUFBRyxlQUFTLEVBQUMsMERBQWI7QUFBd0UsVUFBSSxFQUFDLFNBQTdFO0FBQXVGLFlBQU0sRUFBQyxNQUE5RjtBQUFBLDhCQUNJO0FBQU0sU0FBQyxFQUFDLHFRQUFSO0FBQThRLFlBQUksRUFBR0E7QUFBclI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBTSxTQUFDLEVBQUMsdVFBQVI7QUFBZ1IsWUFBSSxFQUFFQTtBQUF0UjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosZUFHSTtBQUFNLFNBQUMsRUFBQywyT0FBUjtBQUFvUCxZQUFJLEVBQUVBO0FBQTFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISixlQUlJO0FBQU0sU0FBQyxFQUFDLDhQQUFSO0FBQXVRLFlBQUksRUFBRUE7QUFBN1E7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVdIOztNQVpRRCxROztBQWFULFNBQVNFLFdBQVQsUUFBNkI7QUFBQSxNQUFQRCxJQUFPLFNBQVBBLElBQU87QUFDekIsc0JBQ0k7QUFBSyxTQUFLLEVBQUMsNEJBQVg7QUFBd0MsU0FBSyxFQUFDLElBQTlDO0FBQW1ELFVBQU0sRUFBQyxJQUExRDtBQUErRCxRQUFJLEVBQUVBLElBQXJFO0FBQTJFLGFBQVMsRUFBQyxpQkFBckY7QUFBdUcsV0FBTyxFQUFDLFdBQS9HO0FBQUEsMkJBQ0k7QUFBTSxPQUFDLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBS0g7O01BTlFDLFc7O0FBT1QsU0FBU0MsT0FBVCxRQUF3QjtBQUFBLE1BQU5GLElBQU0sU0FBTkEsSUFBTTtBQUVwQixzQkFFSTtBQUFLLFdBQU8sRUFBRTtBQUFBLGFBQU12RCwrQ0FBQSxDQUFZLENBQUNwQixHQUFiLENBQU47QUFBQSxLQUFkO0FBQXVDLG1CQUFZLE1BQW5EO0FBQTBELGFBQVMsRUFBQyxPQUFwRTtBQUE0RSxTQUFLLEVBQUMsSUFBbEY7QUFBdUYsVUFBTSxFQUFDLElBQTlGO0FBQW1HLG1CQUFZLEtBQS9HO0FBQXFILGlCQUFVLGFBQS9IO0FBQTZJLGFBQVMsRUFBQyx1Q0FBdko7QUFBK0wsUUFBSSxFQUFDLEtBQXBNO0FBQTBNLFNBQUssRUFBQyw0QkFBaE47QUFBNk8sV0FBTyxFQUFDLGFBQXJQO0FBQUEsMkJBQW1RO0FBQU0sVUFBSSxFQUFFMkUsSUFBWjtBQUFrQixPQUFDLEVBQUM7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFuUTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRko7QUFJSDs7TUFOUUUsTzs7QUFPVCxTQUFTQyxPQUFULFFBQWlDO0FBQUEsTUFBZkgsSUFBZSxTQUFmQSxJQUFlO0FBQUEsTUFBVkksT0FBVSxTQUFWQSxPQUFVO0FBQzdCLHNCQUNJO0FBQUssV0FBTyxFQUFFQSxPQUFkO0FBQXVCLFNBQUssRUFBQyw0QkFBN0I7QUFBMEQsU0FBSyxFQUFDLElBQWhFO0FBQXFFLFVBQU0sRUFBQyxJQUE1RTtBQUFpRixRQUFJLEVBQUVKLElBQXZGO0FBQTZGLGFBQVMsRUFBQyx3QkFBdkc7QUFBZ0ksV0FBTyxFQUFDLFdBQXhJO0FBQUEsMkJBQ0k7QUFBTSxPQUFDLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBS0g7O01BTlFHLE87O0FBT1QsU0FBU0UsT0FBVCxRQUFpQztBQUFBLE1BQWZMLElBQWUsU0FBZkEsSUFBZTtBQUFBLE1BQVZJLE9BQVUsU0FBVkEsT0FBVTtBQUM3QixzQkFDSTtBQUFLLFNBQUssRUFBQyw0QkFBWDtBQUF3QyxXQUFPLEVBQUVBLE9BQWpEO0FBQTBELFNBQUssRUFBQyxJQUFoRTtBQUFxRSxVQUFNLEVBQUMsSUFBNUU7QUFBaUYsUUFBSSxFQUFFSixJQUF2RjtBQUE2RixhQUFTLEVBQUMseUJBQXZHO0FBQWlJLFdBQU8sRUFBQyxXQUF6STtBQUFBLDRCQUNJO0FBQU0sT0FBQyxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBTSxPQUFDLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFNSDs7TUFQUUssTzs7QUFRVCxTQUFTQyxTQUFULFFBQXlDO0FBQUEsTUFBckJOLElBQXFCLFNBQXJCQSxJQUFxQjtBQUFBLE1BQWhCSSxPQUFnQixTQUFoQkEsT0FBZ0I7QUFBQSxNQUFSdkMsS0FBUSxTQUFSQSxLQUFRO0FBQ3JDLHNCQUNJO0FBQUssU0FBSyxFQUFFO0FBQUNtQixjQUFRLEVBQUM7QUFBVixLQUFaO0FBQTRDLFdBQU8sRUFBRW9CLE9BQXJEO0FBQThELFNBQUssRUFBQyw0QkFBcEU7QUFBaUcsU0FBSyxFQUFDLElBQXZHO0FBQTRHLFVBQU0sRUFBQyxJQUFuSDtBQUF3SCxRQUFJLEVBQUVKLElBQTlIO0FBQW9JLGFBQVMsRUFBQyxhQUE5STtBQUE0SixXQUFPLEVBQUMsV0FBcEs7QUFBQSw0QkFDSTtBQUFNLE9BQUMsRUFBQztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJO0FBQU0sY0FBUSxFQUFDLFNBQWY7QUFBeUIsT0FBQyxFQUFDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQU1IOztPQVBRTSxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluY29udHJvbHMuMmUyNDU1ZmYzNzU5NmE2Y2I4MGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi4vc3R5bGVzL2FkbWluZGFzaC5tb2R1bGUuY3NzXCJcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIlxuaW1wb3J0ICQsIHsgZGF0YSB9IGZyb20gXCJqcXVlcnlcIlxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXG5cblxuXG5jb25zdCBMb2FkZXIgPSBkeW5hbWljKCgpID0+IGltcG9ydChcIi4uL2NvbXBvbmVudHMvbG9hZGVyXCIpKVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRtaW5EYXNoKCkge1xuICAgIFxuICAgIGNvbnN0IFt0b2dnbGUsc2V0VG9nZ2xlXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IFtuYXYsc2V0TmF2XSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IFtmZWF0dXJlLHNldEZlYXR1cmVdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW2FkZCxzZXRBZGRdID0gdXNlU3RhdGUoe1xuICAgICAgICBtYWluVGl0bGU6XCJcIixcbiAgICAgICAgaW1nTGluazpcIlwiXG4gICAgICAgIFxuXG4gICAgfSlcbiAgICBsZXQgW2RhdGFpdGVtLCBzZXRkYXRhSXRlbV0gPSB1c2VTdGF0ZShbe1xuICAgICAgICBuYW1lOlwiXCIsXG4gICAgICAgIHByaWNlOlwiXCJcbiAgICB9XSlcbiAgICBsZXQgW25ld0RhdGEsIHNldG5ld0RhdGFdID0gdXNlU3RhdGUoe1xuICAgICAgICB0aXRsZTpcIlwiLFxuICAgICAgICBEZXNjcmlwdGlvbjpcIlwiLFxuICAgICAgICBwcmljZTpcIlwiLFxuICAgICAgICBpbWFnZUxpbms6XCJcIixcbiAgICAgICAgaXRlbXM6ZGF0YWl0ZW1cbiAgICB9KVxuICAgIFxuICAgIGxldCBbZWRpdCxzZXRFZGl0XSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGxldCBbZGF0YSxzZXREYXRhXSA9IHVzZVN0YXRlKFtdKVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGF4aW9zLmdldChcIi9hcGkvYWRkRmVhdHVyZVwiKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIHNldERhdGEocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpXG5cbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyKFwidHVtc2UgbmFpIGhvIHBheWVnYVwiKVxuICAgICAgICB9KVxuICAgIH0sW10pXG4gICAgXG4gICAgY29uc3QgW2hhbmRsZXIsc2V0SGFuZGxlcl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBcbiAgIFxuICAgIGFzeW5jIGZ1bmN0aW9uIGNoYW5nZUV2ZW50KGUsaGVpZ2h0LHdpZHRoLGZlYXR1cmUsY2xhc3NOYW1lKSB7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgaWYoZmVhdHVyZSkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuYWRtaW5kYXNoX2ZlYXR1cmVfXzJHOE1qYCkuY2xhc3NMaXN0LmFkZChzdHlsZS5nb2JpZ2dlcilcbiAgICAgICAgICAgICAgICAkKGAuJHtzdHlsZS51cHBlcmNvbnRhaW5lcn1gKS5hZGRDbGFzcyhgJHtzdHlsZS51cHBlcmNvbnRhaW5lcmFjdGl2ZX1gKVxuICAgICAgICAgICAgfSwxNTIpXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmFkbWluZGFzaF9mZWF0dXJlX18yRzhNamApLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGUuZ29iaWdnZXIpXG5cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuYWRtaW5kYXNoX2ZlYXR1cmVfXzJHOE1qYCkuY2xhc3NMaXN0LmFkZChzdHlsZS5nb3NtYWxsZXIpXG4gICAgICAgICAgICB9LDE1MilcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHNldEZlYXR1cmUoZmVhdHVyZSlcbiAgICAgICAgICAgIFxuICAgICAgICB9LDE1MClcbiAgICB9XG4gICAgaWYodG9nZ2xlKSByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYWRtaW5kYXNofT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYXYgJiYgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnVzZXJuYXZ9ID5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLm5hdn0+XG4gICAgICAgICAgICAgICAgPExvZ28gLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUub3B0aW9uc30+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5hY3RpdmV9IG9uQ2xpY2s9eygpID0+IHtzZXRUb2dnbGUoZmFsc2UpfX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgPERhc2hpY29uIGZpbGw9XCIjZjJmNmZmXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyBjb2xvcjogXCIjZjJmNmZmXCIsIGZvbnRXZWlnaHQ6IDQwMCwgZm9udFNpemU6IFwiMjJweFwiIH19PkRhc2hib2FyZDwvaDE+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5hY3RpdmV9IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjZjJmNmZmXCIsIGJvcmRlclJhZGl1czogXCIxNXB4XCIgfX0gb25DbGljaz17KCkgPT4geyBzZXRUb2dnbGUodHJ1ZSkgfX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNldHRpbmdJY29uIGZpbGw9XCIjMWYxZjQ3XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyBjb2xvcjogXCIjMWYxZjQ3XCIsIGZvbnRXZWlnaHQ6IDQwMCwgZm9udFNpemU6IFwiMjJweFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNldHRpbmdzXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY2VudGVyfT5cbiAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3tmb250U2l6ZTpcIjM2cHhcIn19PlNldHRpbmdzPC9oMT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZmVhdHVyZXN9PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB7IWZlYXR1cmUgJiYgPD5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5mZWF0dXJlfSBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VFdmVudChlLCBcIjcwMHB4XCIsIFwiNzAwcHhcIiwgdHJ1ZSxzdHlsZS5mZWF0dXJlKVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGx1c1N2ZyBmaWxsPVwiIzFmMWY0N1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+QWRkIGEgZmVhdHVyZTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZWRpdCkgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5mZWF0dXJlfSBrZXk9e2l0ZW0uX2lkfSBvbkNsaWNrPXsoKSA9PiBzZXRFZGl0KHRydWUpfSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7IGdyaWRDb2x1bW46IFwiMS8tMVwiLCBqdXN0aWZ5U2VsZjpcImNlbnRlclwiIH19ID57aXRlbS50aXRsZX08L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlLmZlYXR1cmV9ICR7c3R5bGUuZ29iaWdnZXJ9IGB9IGtleT17aXRlbS5kYXRhLl9pZH0gc3R5bGU9e3tncmlkVGVtcGxhdGVDb2x1bW5zOlwiMWZyIDFmciAxZnJcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYWNrc3ZnIGZpbGw9XCIjMWYxZjQ3XCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RWRpdChmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZG1pbmRhc2hfZ29iaWdnZXJfXzN3ZmRaXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJhZG1pbmRhc2hfZ29iaWdnZXJfXzN3ZmRaXCIpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAvPiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaXRlbXN9IHN0eWxlPXt7anVzdGlmeVNlbGY6XCJsZWZ0XCIsbWFyZ2luOlwiNTBweFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZGF0YS5tYXAoKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2RhdGEuX2lkfSAgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwifX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOlwiYWxpY2VibHVlXCIscGFkZGluZzpcIjIwcHggNDBweFwiLG1hcmdpbjpcIjE1cHggMFwifX0+e2RhdGEudGl0bGV9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb25zb2xlLmxvZyhkYXRhKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZWxldGVTdmcgZmlsbD1cImJsYWNrXCIgc3R5bGU9e3twb3NpdGlvbjpcInN0YXRpYyAhaW1wb3J0YW50XCJ9fSBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF4aW9zLmRlbGV0ZShgL2FwaS9hZGRGZWF0dXJlLyR7aXRlbS5faWR9LyR7ZGF0YS5faWR9YClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYWRkaW5nSXRlbXN9IHN0eWxlPXt7anVzdGlmeVNlbGY6XCJjZW50ZXJcIixhbGlnblNlbGY6XCJjZW50ZXJcIixncmlkQ29sdW1uOlwiMi8zXCIsZGlzcGxheTpcImZsZXhcIixmbGV4RGlyZWN0aW9uOlwiY29sdW1uXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPkFkZGluZyBhbiBFbnRyeTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVGl0bGVcIiBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldG5ld0RhdGEoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLm5ld0RhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRGVzY2lwdGlvblwiIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0bmV3RGF0YSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ubmV3RGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZXNjcmlwdGlvbjogZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiUHJpY2VcIiBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldG5ld0RhdGEoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLm5ld0RhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkltYWdlTGlua1wiIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0bmV3RGF0YSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ubmV3RGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZUxpbms6IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjpcIiMxZjFmNDdcIixjb2xvcjpcIiNmZmZcIixoZWlnaHQ6XCI0MHB4XCIsYm9yZGVyUmFkaXVzOlwiMjVweFwifX0+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnN1Ykl0ZW1zfSBzdHlsZT17e2dyaWRDb2x1bW46XCIzXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPkFkZCBJdGVtczwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIi9hcGkvdGVzdERhdGFiYXNlXCIgbWV0aG9kPVwiUE9TVFwiIGNsYXNzTmFtZT1cIml0ZW1mb3JtXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFpdGVtLm1hcCgoaXRlbXMsa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IHtzdHlsZS5tYW5hZ2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJJdGVtIFRpdGxlXCIgbmFtZT1cInRpdGxlXCIgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbml0ID0gZGF0YWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0W2tleV0ubmFtZSA9IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlByaWNlXCIgIG5hbWU9XCJwcmljZVwiIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5pdCA9IGRhdGFpdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdFtrZXldLnByaWNlID0gZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2RpdiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGx1c1N2ZyBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRkYXRhSXRlbShbLi4uZGF0YWl0ZW0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pdGVtZm9ybVwiKSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCIgb25DbGljaz17KGUpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdEYXRhW1wiaXRlbXNcIl0gPSBkYXRhaXRlbSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBheGlvcy5wb3N0KGAvYXBpL2FkZEZlYXR1cmUvJHtpdGVtLl9pZH1gLG5ld0RhdGEpLnRoZW4oKHJlc3BvbnNlKSA9PiBjb25zb2xlLmxvZyhyZXNwb25zZSkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZlYXR1cmUgJiYgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmZlYXR1cmV9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFja3N2ZyBmaWxsPVwiIzFmMWY0N1wiICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VFdmVudChlLCBcIjMyMHB4XCIsIFwiMTU1cHhcIiwgZmFsc2UsIHN0eWxlLmZlYXR1cmUpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS51cHBlcmNvbnRhaW5lcn0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3sgZm9udFNpemU6IFwiMzJweFwiIH19PkFkZCBhIGZlYXR1cmU8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYWRkaW5nZm9ybTF9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+TWFpbiB0aXRsZTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAgcGxhY2Vob2xkZXI9XCJUaXRsZVwiIG9uQ2hhbmdlPXsoZSkgPT4gKHNldEFkZCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uYWRkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1haW5UaXRsZTplLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJJbWFnZUxpbmtcIiBvbkNoYW5nZT17KGUpID0+IChzZXRBZGQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmFkZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWdMaW5rOmUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF4aW9zLnBvc3QoXCIvYXBpL2FkZEZlYXR1cmVcIixhZGQpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLmRhdGEubWVzc2FnZSA9PT0gXCJFbnRyeSBBZGRlZFwiKSBzZXRIYW5kbGVyKHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT4gU3VibWl0PC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlciAmJiA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuc3RhdHVzfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5FbnRyeSBBZGRlZDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5hZG1pbmluZm99PlxuICAgICAgICAgICAgICAgIDxTaWdub3V0IGZpbGw9XCIjMWYxZjQ3XCIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUucGhvdG99PlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGgxPlJhaiBBZ2Fyd2FsPC9oMT5cbiAgICAgICAgICAgICAgICA8cD5hZ2Fyd2Fsc2Fua2V0MjlAZ21haWwuY29tPC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5pbmZvc2VjdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgIClcbiAgICBlbHNlIGlmICghdG9nZ2xlKSByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5hZG1pbmRhc2h9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLm5hdn0+XG4gICAgICAgICAgICAgICAgPExvZ28gLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUub3B0aW9uc30gPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYWN0aXZlfSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2YyZjZmZlwiLCBib3JkZXJSYWRpdXM6IFwiMTVweFwiIH19IG9uQ2xpY2s9eygpID0+IHsgc2V0VG9nZ2xlKGZhbHNlKSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEYXNoaWNvbiBmaWxsPVwiIzFmMWY0N1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3sgY29sb3I6XCIjMWYxZjQ3XCIsZm9udFdlaWdodDo0MDAsZm9udFNpemU6XCIyMnB4XCJ9fT5EYXNoYm9hcmQ8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5hY3RpdmV9IG9uQ2xpY2s9eyhlKSA9PiB7IFxuICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRvZ2dsZSghdG9nZ2xlKSBcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNldHRpbmdJY29uIGZpbGw9XCIjZjJmNmZmXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyBjb2xvcjogXCIjZjJmNmZmXCIsIGZvbnRXZWlnaHQ6IDQwMCwgZm9udFNpemU6IFwiMjJweFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNldHRpbmdzXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jZW50ZXJ9PlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnRleHRkYXRhfT5cbiAgICAgICAgICAgICAgICAgICA8aDE+SGVsbG8sUmFqPC9oMT5cbiAgICAgICAgICAgICAgICAgICA8cD5XZWxjb21lIGJhY2shPC9wPlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYW5hbHl0aWNzfT5cbiAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuc2FsZXN9PlxuICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuc2Vjb25kYXJ5fT5cblxuICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS50aGlyZH0+XG5cbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5hZG1pbmluZm99PlxuICAgICAgICAgICAgICAgIDxTaWdub3V0IGZpbGw9XCIjMWYxZjQ3XCIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUucGhvdG99PlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGgxPlJhaiBBZ2Fyd2FsPC9oMT5cbiAgICAgICAgICAgICAgICA8cD5hZ2Fyd2Fsc2Fua2V0MjlAZ21haWwuY29tPC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5pbmZvc2VjdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4gXG5cbmZ1bmN0aW9uIExvZ28oKSB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8c3ZnIHdpZHRoPVwiMTg0XCIgaGVpZ2h0PVwiMTI5XCIgdmlld0JveD1cIjAgMCAxODQgMTI5XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTQxLjQ2ODIgMzUuODQzVjQ5LjQyMjZDNDEuNDY4MiA1MS42Nzg4IDQwLjc2MDIgNTMuNDYzIDM5LjM0NDIgNTQuNzc1MUMzNy45Mzc2IDU2LjA4NzMgMzYuMDExOCA1Ni43NDM0IDMzLjU2NjkgNTYuNzQzNEMzMS4xNTk2IDU2Ljc0MzQgMjkuMjQ4IDU2LjEwNjIgMjcuODMyIDU0LjgzMThDMjYuNDE2IDUzLjU1NzQgMjUuNjkzOCA1MS44MDYyIDI1LjY2NTUgNDkuNTc4NFYzNS44NDNIMjkuOTEzNVY0OS40NTA5QzI5LjkxMzUgNTAuODAwOSAzMC4yMzQ1IDUxLjc4NzQgMzAuODc2NCA1Mi40MTA0QzMxLjUyNzggNTMuMDI0IDMyLjQyNDYgNTMuMzMwOCAzMy41NjY5IDUzLjMzMDhDMzUuOTU1MiA1My4zMzA4IDM3LjE2ODMgNTIuMDc1MyAzNy4yMDYgNDkuNTY0MlYzNS44NDNINDEuNDY4MlpNNjEuNzE3MiA1Ni40NjAySDU3LjQ2OTJMNDkuMTk5NyA0Mi44OTQ4VjU2LjQ2MDJINDQuOTUxNlYzNS44NDNINDkuMTk5N0w1Ny40ODM0IDQ5LjQzNjhWMzUuODQzSDYxLjcxNzJWNTYuNDYwMlpNNjkuOTQ0MyA1Ni40NjAySDY1LjY5NjNWMzUuODQzSDY5Ljk0NDNWNTYuNDYwMlpcIiBmaWxsPVwiI0ZFRkVGRVwiIC8+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTg3LjQ4NjcgNTYuNDYwMkg4My4yMzg3VjQ3LjYyNDNINzQuOTU1VjU2LjQ2MDJINzAuNzA2OVYzNS44NDNINzQuOTU1VjQ0LjE5NzVIODMuMjM4N1YzNS44NDNIODcuNDg2N1Y1Ni40NjAyWk0xMDMuNjE1IDQ3LjUyNTFIOTUuNDU4OVY1My4wNDc2SDEwNS4wMzFWNTYuNDYwMkg5MS4yMTA4VjM1Ljg0M0gxMDUuMDAzVjM5LjI4MzlIOTUuNDU4OVY0NC4xOTc1SDEwMy42MTVWNDcuNTI1MVpNMTExLjc3MSA1My4wNDc2SDEyMC43OTFWNTYuNDYwMkgxMDcuNTIzVjM1Ljg0M0gxMTEuNzcxVjUzLjA0NzZaTTEyNy40ODkgNDkuMTk2VjU2LjQ2MDJIMTIzLjI0MVYzNS44NDNIMTMxLjI4NEMxMzIuODMyIDM1Ljg0MyAxMzQuMTkyIDM2LjEyNjIgMTM1LjM2MiAzNi42OTI2QzEzNi41NDIgMzcuMjU5IDEzNy40NDggMzguMDY2MiAxMzguMDgxIDM5LjExNEMxMzguNzEzIDQwLjE1MjQgMTM5LjAzIDQxLjMzNzIgMTM5LjAzIDQyLjY2ODJDMTM5LjAzIDQ0LjY4ODQgMTM4LjMzNiA0Ni4yODM4IDEzNi45NDggNDcuNDU0M0MxMzUuNTcgNDguNjE1NSAxMzMuNjU4IDQ5LjE5NiAxMzEuMjEzIDQ5LjE5NkgxMjcuNDg5Wk0xMjcuNDg5IDQ1Ljc1NTFIMTMxLjI4NEMxMzIuNDA3IDQ1Ljc1NTEgMTMzLjI2MiA0NS40OTA4IDEzMy44NDcgNDQuOTYyMkMxMzQuNDQyIDQ0LjQzMzUgMTM0LjczOSA0My42NzgzIDEzNC43MzkgNDIuNjk2NUMxMzQuNzM5IDQxLjY4NjQgMTM0LjQ0MiA0MC44Njk5IDEzMy44NDcgNDAuMjQ2OEMxMzMuMjUyIDM5LjYyMzggMTMyLjQzMSAzOS4zMDI4IDEzMS4zODMgMzkuMjgzOUgxMjcuNDg5VjQ1Ljc1NTFaXCIgZmlsbD1cIndoaXRlXCIgLz5cbiAgICAgICAgICAgIFxuICAgICAgICA8L3N2Zz5cblxuICAgIClcbn1cbmZ1bmN0aW9uIERhc2hpY29uKHtmaWxsfSkge1xuICAgIHJldHVybihcbiAgICAgICAgPHN2ZyB2ZXJzaW9uPVwiMS4wXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIyNVwiIHZpZXdCb3g9XCIwIDAgNTEyLjAwMDAwMCA1MTIuMDAwMDAwXCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkIG1lZXRcIiBmaWxsPVwiYmx1ZVwiPlxuXG4gICAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMC4wMDAwMDAsNTEyLjAwMDAwMCkgc2NhbGUoMC4xMDAwMDAsLTAuMTAwMDAwKVwiIGZpbGw9XCIjMDAwMDAwXCIgc3Ryb2tlPVwibm9uZVwiPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjc1IDUxMDYgYy0xMTEgLTM1IC0xOTAgLTEwNCAtMjM5IC0yMDYgbC0zMSAtNjUgMCAtNTcwIDAgLTU3MCAzMyAtNjcgYzQwIC04MiAxMTkgLTE1NyAyMDAgLTE5MCBsNTcgLTIzIDg0MCAtMyBjNjAzIC0yIDg1NyAwIDkwMCA4IDE2MCAzMSAyNzQgMTQ1IDMwNSAzMDUgOCA0MiAxMCAyMTYgOCA1ODAgLTMgNTE3IC0zIDUyMCAtMjYgNTc3IC0zMyA4MSAtMTA4IDE2MCAtMTkwIDIwMCBsLTY3IDMzIC04NzUgMiBjLTY4OCAyIC04ODQgLTEgLTkxNSAtMTF6XCIgZmlsbD0ge2ZpbGx9IC8+XG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk0zMDQ5IDUxMDYgYy0xMDYgLTI4IC0yMDkgLTEyMSAtMjUxIC0yMjQgbC0yMyAtNTcgLTMgLTExNjAgYy0yIC04MzggMCAtMTE3NyA4IC0xMjIwIDMxIC0xNjAgMTQ1IC0yNzQgMzA1IC0zMDUgNDMgLTggMjk3IC0xMCA5MDAgLTggbDg0MCAzIDU3IDIzIGM4MSAzMyAxNjAgMTA4IDIwMCAxOTAgbDMzIDY3IDAgMTIxMCAwIDEyMTAgLTMxIDY1IGMtNDAgODQgLTEwMCAxNDQgLTE4MiAxODMgbC02NyAzMiAtODcwIDIgYy02NjcgMSAtODgxIC0xIC05MTYgLTExelwiIGZpbGw9e2ZpbGx9Lz5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTMwMCAyOTc5IGMtMTEyIC0yMiAtMjE3IC0xMDcgLTI2OCAtMjE3IGwtMjcgLTU3IDAgLTEyMTAgMCAtMTIxMCAzMSAtNjUgYzM5IC04MyAxMDEgLTE0NSAxODQgLTE4NCBsNjUgLTMxIDg5MCAwIDg5MCAwIDY3IDMzIGM4MiA0MCAxNTcgMTE5IDE5MCAyMDAgbDIzIDU3IDMgMTE2MCBjMiA4MzggMCAxMTc3IC04IDEyMjAgLTMwIDE1NyAtMTQyIDI3MSAtMjk4IDMwNCAtNjQgMTMgLTE2NzIgMTQgLTE3NDIgMHpcIiBmaWxsPXtmaWxsfSAvPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMzA2NSAxNjk2IGMtMTUwIC0zNyAtMjU1IC0xNDggLTI4NSAtMzAxIC04IC00MiAtMTAgLTIxNSAtOCAtNTgwIDMgLTUxNyAzIC01MjAgMjYgLTU3NyAzMyAtODEgMTA4IC0xNjAgMTkwIC0yMDAgbDY3IC0zMyA4OTAgMCA4OTAgMCA2NyAzMiBjODIgMzkgMTQyIDk5IDE4MiAxODMgbDMxIDY1IDAgNTcwIDAgNTcwIC0zMyA2NyBjLTQwIDgyIC0xMTkgMTU3IC0yMDAgMTkwIGwtNTcgMjMgLTg1NSAyIGMtNjQ5IDEgLTg2NyAtMSAtOTA1IC0xMXpcIiBmaWxsPXtmaWxsfSAvPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICA8L3N2Zz5cbiAgICApXG59XG5mdW5jdGlvbiBTZXR0aW5nSWNvbih7ZmlsbH0pIHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIyNVwiIGZpbGw9e2ZpbGx9IGNsYXNzTmFtZT1cImJpIGJpLWdlYXItZmlsbFwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNOS40MDUgMS4wNWMtLjQxMy0xLjQtMi4zOTctMS40LTIuODEgMGwtLjEuMzRhMS40NjQgMS40NjQgMCAwIDEtMi4xMDUuODcybC0uMzEtLjE3Yy0xLjI4My0uNjk4LTIuNjg2LjcwNS0xLjk4NyAxLjk4N2wuMTY5LjMxMWMuNDQ2LjgyLjAyMyAxLjg0MS0uODcyIDIuMTA1bC0uMzQuMWMtMS40LjQxMy0xLjQgMi4zOTcgMCAyLjgxbC4zNC4xYTEuNDY0IDEuNDY0IDAgMCAxIC44NzIgMi4xMDVsLS4xNy4zMWMtLjY5OCAxLjI4My43MDUgMi42ODYgMS45ODcgMS45ODdsLjMxMS0uMTY5YTEuNDY0IDEuNDY0IDAgMCAxIDIuMTA1Ljg3MmwuMS4zNGMuNDEzIDEuNCAyLjM5NyAxLjQgMi44MSAwbC4xLS4zNGExLjQ2NCAxLjQ2NCAwIDAgMSAyLjEwNS0uODcybC4zMS4xN2MxLjI4My42OTggMi42ODYtLjcwNSAxLjk4Ny0xLjk4N2wtLjE2OS0uMzExYTEuNDY0IDEuNDY0IDAgMCAxIC44NzItMi4xMDVsLjM0LS4xYzEuNC0uNDEzIDEuNC0yLjM5NyAwLTIuODFsLS4zNC0uMWExLjQ2NCAxLjQ2NCAwIDAgMS0uODcyLTIuMTA1bC4xNy0uMzFjLjY5OC0xLjI4My0uNzA1LTIuNjg2LTEuOTg3LTEuOTg3bC0uMzExLjE2OWExLjQ2NCAxLjQ2NCAwIDAgMS0yLjEwNS0uODcybC0uMS0uMzR6TTggMTAuOTNhMi45MjkgMi45MjkgMCAxIDEgMC01Ljg2IDIuOTI5IDIuOTI5IDAgMCAxIDAgNS44NTh6XCIgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxufVxuZnVuY3Rpb24gU2lnbm91dCh7ZmlsbH0pe1xuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIFxuICAgICAgICA8c3ZnIG9uQ2xpY2s9eygpID0+IGRhdGEuc2V0TmF2KCFuYXYpfSBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIHdpZHRoPVwiMzBcIiBoZWlnaHQ9XCIzMFwiIGRhdGEtcHJlZml4PVwiZmFyXCIgZGF0YS1pY29uPVwidXNlci1jaXJjbGVcIiBjbGFzc05hbWU9XCJzdmctaW5saW5lLS1mYSBmYS11c2VyLWNpcmNsZSBmYS13LTE2XCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDQ5NiA1MTJcIj48cGF0aCBmaWxsPXtmaWxsfSBkPVwiTTI0OCAxMDRjLTUzIDAtOTYgNDMtOTYgOTZzNDMgOTYgOTYgOTYgOTYtNDMgOTYtOTYtNDMtOTYtOTYtOTZ6bTAgMTQ0Yy0yNi41IDAtNDgtMjEuNS00OC00OHMyMS41LTQ4IDQ4LTQ4IDQ4IDIxLjUgNDggNDgtMjEuNSA0OC00OCA0OHptMC0yNDBDMTExIDggMCAxMTkgMCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzODUgOCAyNDggOHptMCA0NDhjLTQ5LjcgMC05NS4xLTE4LjMtMTMwLjEtNDguNCAxNC45LTIzIDQwLjQtMzguNiA2OS42LTM5LjUgMjAuOCA2LjQgNDAuNiA5LjYgNjAuNSA5LjZzMzkuNy0zLjEgNjAuNS05LjZjMjkuMiAxIDU0LjcgMTYuNSA2OS42IDM5LjUtMzUgMzAuMS04MC40IDQ4LjQtMTMwLjEgNDguNHptMTYyLjctODQuMWMtMjQuNC0zMS40LTYyLjEtNTEuOS0xMDUuMS01MS45LTEwLjIgMC0yNiA5LjYtNTcuNiA5LjYtMzEuNSAwLTQ3LjQtOS42LTU3LjYtOS42LTQyLjkgMC04MC42IDIwLjUtMTA1LjEgNTEuOUM2MS45IDMzOS4yIDQ4IDI5OS4yIDQ4IDI1NmMwLTExMC4zIDg5LjctMjAwIDIwMC0yMDBzMjAwIDg5LjcgMjAwIDIwMGMwIDQzLjItMTMuOSA4My4yLTM3LjMgMTE1Ljl6XCI+PC9wYXRoPjwvc3ZnPlxuICAgIClcbn1cbmZ1bmN0aW9uIFBsdXNTdmcoe2ZpbGwsb25DbGlja30pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c3ZnIG9uQ2xpY2s9e29uQ2xpY2t9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjMwXCIgaGVpZ2h0PVwiMzBcIiBmaWxsPXtmaWxsfSBjbGFzc05hbWU9XCJiaSBiaS1wbHVzLWNpcmNsZS1maWxsXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0xNiA4QTggOCAwIDEgMSAwIDhhOCA4IDAgMCAxIDE2IDB6TTguNSA0LjVhLjUuNSAwIDAgMC0xIDB2M2gtM2EuNS41IDAgMCAwIDAgMWgzdjNhLjUuNSAwIDAgMCAxIDB2LTNoM2EuNS41IDAgMCAwIDAtMWgtM3YtM3pcIiAvPlxuICAgICAgICA8L3N2Zz5cbiAgICApXG59XG5mdW5jdGlvbiBCYWNrc3ZnKHtmaWxsLG9uQ2xpY2t9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgb25DbGljaz17b25DbGlja30gd2lkdGg9XCIzMFwiIGhlaWdodD1cIjMwXCIgZmlsbD17ZmlsbH0gY2xhc3NOYW1lPVwiYmkgYmktY2FyZXQtbGVmdC1zcXVhcmVcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTE0IDFhMSAxIDAgMCAxIDEgMXYxMmExIDEgMCAwIDEtMSAxSDJhMSAxIDAgMCAxLTEtMVYyYTEgMSAwIDAgMSAxLTFoMTJ6TTIgMGEyIDIgMCAwIDAtMiAydjEyYTIgMiAwIDAgMCAyIDJoMTJhMiAyIDAgMCAwIDItMlYyYTIgMiAwIDAgMC0yLTJIMnpcIiAvPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0xMC4yMDUgMTIuNDU2QS41LjUgMCAwIDAgMTAuNSAxMlY0YS41LjUgMCAwIDAtLjgzMi0uMzc0bC00LjUgNGEuNS41IDAgMCAwIDAgLjc0OGw0LjUgNGEuNS41IDAgMCAwIC41MzcuMDgyelwiIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcbn1cbmZ1bmN0aW9uIERlbGV0ZVN2Zyh7ZmlsbCxvbkNsaWNrLHN0eWxlfSkge1xuICAgIHJldHVybihcbiAgICAgICAgPHN2ZyBzdHlsZT17e3Bvc2l0aW9uOlwic3RhdGljICFpbXBvcnRhbnRcIn19IG9uQ2xpY2s9e29uQ2xpY2t9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI1XCIgaGVpZ2h0PVwiMjVcIiBmaWxsPXtmaWxsfSBjbGFzc05hbWU9XCJiaSBiaS10cmFzaFwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNNS41IDUuNUEuNS41IDAgMCAxIDYgNnY2YS41LjUgMCAwIDEtMSAwVjZhLjUuNSAwIDAgMSAuNS0uNXptMi41IDBhLjUuNSAwIDAgMSAuNS41djZhLjUuNSAwIDAgMS0xIDBWNmEuNS41IDAgMCAxIC41LS41em0zIC41YS41LjUgMCAwIDAtMSAwdjZhLjUuNSAwIDAgMCAxIDBWNnpcIiAvPlxuICAgICAgICAgICAgPHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgZD1cIk0xNC41IDNhMSAxIDAgMCAxLTEgMUgxM3Y5YTIgMiAwIDAgMS0yIDJINWEyIDIgMCAwIDEtMi0yVjRoLS41YTEgMSAwIDAgMS0xLTFWMmExIDEgMCAwIDEgMS0xSDZhMSAxIDAgMCAxIDEtMWgyYTEgMSAwIDAgMSAxIDFoMy41YTEgMSAwIDAgMSAxIDF2MXpNNC4xMTggNCA0IDQuMDU5VjEzYTEgMSAwIDAgMCAxIDFoNmExIDEgMCAwIDAgMS0xVjQuMDU5TDExLjg4MiA0SDQuMTE4ek0yLjUgM1YyaDExdjFoLTExelwiIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9