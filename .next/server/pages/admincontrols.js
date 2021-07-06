(function() {
var exports = {};
exports.id = "pages/admincontrols";
exports.ids = ["pages/admincontrols"];
exports.modules = {

/***/ "./pages/admincontrols.jsx":
/*!*********************************!*\
  !*** ./pages/admincontrols.jsx ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AdminDash; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/admindash.module.css */ "./styles/admindash.module.css");
/* harmony import */ var _styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "/home/sanket2904/unihelp_new/pages/admincontrols.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const Loader = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => __webpack_require__.e(/*! import() */ "components_loader_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ../components/loader */ "./components/loader.jsx")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ../components/loader */ "./components/loader.jsx")],
    modules: ["admincontrols.jsx -> " + "../components/loader"]
  }
});
function AdminDash() {
  const {
    0: toggle,
    1: setToggle
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: nav,
    1: setNav
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: feature,
    1: setFeature
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: add,
    1: setAdd
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    mainTitle: "",
    imgLink: ""
  });
  let {
    0: init,
    1: setInit
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);

  const fetchedData = async id => {
    const data = axios__WEBPACK_IMPORTED_MODULE_4___default().get(`/api/addFeature/${id}`).then(response => {
      setInit(response.data);
    });
  };

  let {
    0: dataitem,
    1: setdataItem
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([{
    name: "",
    price: ""
  }]);
  let {
    0: newData,
    1: setnewData
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    title: "",
    Description: "",
    price: "",
    imageLink: "",
    items: dataitem
  });
  let {
    0: edit,
    1: setEdit
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  let {
    0: data,
    1: setData
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    axios__WEBPACK_IMPORTED_MODULE_4___default().get("/api/addFeature").then(response => {
      setData(response.data);
    }).catch(err => {
      console.log("tumse nai ho payega");
    });
  }, []);
  const {
    0: handler,
    1: setHandler
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  async function changeEvent(e, height, width, feature, className) {
    if (feature) {
      setTimeout(() => {
        document.querySelector(`.admindash_feature__2G8Mj`).classList.add((_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().gobigger));
        jquery__WEBPACK_IMPORTED_MODULE_3___default()(`.${(_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().uppercontainer)}`).addClass(`${(_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().uppercontaineractive)}`);
      }, 152);
    } else {
      setTimeout(() => {
        document.querySelector(`.admindash_feature__2G8Mj`).classList.remove((_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().gobigger));
        document.querySelector(`.admindash_feature__2G8Mj`).classList.add((_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().gosmaller));
      }, 152);
    }

    setTimeout(() => {
      setFeature(feature);
    }, 150);
  }

  if (toggle) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().admindash),
    children: [nav && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().usernav)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 24
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().nav),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Logo, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().options),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().active),
          onClick: () => {
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
          className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().active),
          style: {
            backgroundColor: "#f2f6ff",
            borderRadius: "15px"
          },
          onClick: () => {
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
      className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().center),
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
        className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().features),
        children: [!feature && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().feature),
            onClick: e => {
              changeEvent(e, "700px", "700px", true, (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().feature));
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
          }, this), data.map(item => {
            if (!edit) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().feature),
              id: item._id,
              onClick: async () => {
                const data = await axios__WEBPACK_IMPORTED_MODULE_4___default().get(`/api/addFeature/${item._id}`).then(async response => {
                  await setInit(response.data);
                  await console.log(response.data);
                });
                setEdit(true);
              },
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
              }, this)
            }, item._id, false, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 37
            }, this);else return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: `${(_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().feature)} ${(_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().gobigger)} `,
              style: {
                gridTemplateColumns: "1fr 1fr 1fr"
              },
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Backsvg, {
                fill: "#1f1f47",
                onClick: e => {
                  setEdit(false);
                  document.querySelector(".admindash_gobigger__3wfdZ").classList.remove("admindash_gobigger__3wfdZ");
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 154,
                columnNumber: 41
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().items),
                style: {
                  justifySelf: "left",
                  margin: "50px"
                },
                children: init.data.map(data => {
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
                      onClick: async e => {
                        const dataa = await axios__WEBPACK_IMPORTED_MODULE_4___default().get(`/api/addFeature/${init._id}/${data._id}/items`).then(async response => {
                          await setInit(response.data);
                          await console.log(response);
                        });
                      },
                      children: [data.title || data.name, " "]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 168,
                      columnNumber: 61
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DeleteSvg, {
                      fill: "black",
                      style: {
                        position: "static !important"
                      },
                      onClick: e => {
                        axios__WEBPACK_IMPORTED_MODULE_4___default().delete(`/api/addFeature/${init._id}/${data._id}`);
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 176,
                      columnNumber: 61
                    }, this)]
                  }, data._id, true, {
                    fileName: _jsxFileName,
                    lineNumber: 167,
                    columnNumber: 57
                  }, this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 161,
                columnNumber: 41
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().addingItems),
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
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                  type: "text",
                  placeholder: "Title",
                  onChange: e => {
                    setnewData(_objectSpread(_objectSpread({}, newData), {}, {
                      title: e.target.value
                    }));
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 186,
                  columnNumber: 45
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                  type: "text",
                  placeholder: "Desciption",
                  onChange: e => {
                    setnewData(_objectSpread(_objectSpread({}, newData), {}, {
                      Description: e.target.value
                    }));
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 192,
                  columnNumber: 45
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                  type: "text",
                  placeholder: "Price",
                  onChange: e => {
                    setnewData(_objectSpread(_objectSpread({}, newData), {}, {
                      price: e.target.value
                    }));
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 198,
                  columnNumber: 45
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                  type: "text",
                  placeholder: "ImageLink",
                  onChange: e => {
                    setnewData(_objectSpread(_objectSpread({}, newData), {}, {
                      imageLink: e.target.value
                    }));
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 204,
                  columnNumber: 45
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 184,
                columnNumber: 41
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().subItems),
                style: {
                  gridColumn: "3"
                },
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
                  children: "Add Items"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 213,
                  columnNumber: 45
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
                  action: "/api/testDatabase",
                  method: "POST",
                  className: "itemform",
                  children: [dataitem.map((items, key) => {
                    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                      className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().manage),
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                        type: "text",
                        placeholder: "Item Title",
                        name: "title",
                        onChange: e => {
                          let init = dataitem;
                          init[key].name = e.target.value;
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 222,
                        columnNumber: 61
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                        type: "text",
                        placeholder: "Price",
                        name: "price",
                        onChange: e => {
                          let init = dataitem;
                          init[key].price = e.target.value;
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 227,
                        columnNumber: 61
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 221,
                      columnNumber: 57
                    }, this);
                  }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PlusSvg, {
                    onClick: () => {
                      setdataItem([...dataitem, {}]);
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 237,
                    columnNumber: 45
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                    type: "submit",
                    value: "Submit",
                    style: {
                      backgroundColor: "#1f1f47",
                      color: "#fff",
                      height: "40px",
                      borderRadius: "25px"
                    },
                    onClick: e => {
                      e.preventDefault();
                      console.log(item._id);
                      newData["items"] = dataitem;
                      axios__WEBPACK_IMPORTED_MODULE_4___default().post(`/api/addFeature/${init._id}`, newData).then(response => console.log(response));
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 244,
                    columnNumber: 49
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 214,
                  columnNumber: 45
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 212,
                columnNumber: 41
              }, this)]
            }, item.data._id, true, {
              fileName: _jsxFileName,
              lineNumber: 153,
              columnNumber: 37
            }, this);
          })]
        }, void 0, true), feature && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().feature),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Backsvg, {
            fill: "#1f1f47",
            onClick: e => {
              changeEvent(e, "320px", "155px", false, (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().feature));
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 264,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().uppercontainer),
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
              className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().addingform1),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                children: "Main title"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 273,
                columnNumber: 37
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                type: "text",
                placeholder: "Title",
                onChange: e => setAdd(_objectSpread(_objectSpread({}, add), {}, {
                  mainTitle: e.target.value
                }))
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 274,
                columnNumber: 37
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                type: "text",
                placeholder: "ImageLink",
                onChange: e => setAdd(_objectSpread(_objectSpread({}, add), {}, {
                  imgLink: e.target.value
                }))
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 278,
                columnNumber: 37
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                type: "submit",
                onClick: e => {
                  axios__WEBPACK_IMPORTED_MODULE_4___default().post("/api/addFeature", add).then(res => {
                    if (res.data.message === "Entry Added") setHandler(true);
                  });
                },
                children: " Submit"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 282,
                columnNumber: 37
              }, this), handler && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().status),
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
                  children: "Entry Added"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 291,
                  columnNumber: 49
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 290,
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
      className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().admininfo),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Signout, {
        fill: "#1f1f47"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 303,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().photo)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 304,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: "Raj Agarwal"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 307,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "agarwalsanket29@gmail.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 308,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().infosection),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 310,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 311,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 312,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 313,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 309,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 90,
    columnNumber: 9
  }, this);else if (!toggle) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().admindash),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().nav),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Logo, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 323,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().options),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().active),
          style: {
            backgroundColor: "#f2f6ff",
            borderRadius: "15px"
          },
          onClick: () => {
            setToggle(false);
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Dashicon, {
            fill: "#1f1f47"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 326,
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
            lineNumber: 327,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 325,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().active),
          onClick: e => {
            setToggle(!toggle);
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SettingIcon, {
            fill: "#f2f6ff"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 334,
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
            lineNumber: 335,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 330,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 340,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 341,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 342,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 343,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 324,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().center),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().textdata),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: "Hello,Raj"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 348,
          columnNumber: 20
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "Welcome back!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 349,
          columnNumber: 20
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 347,
        columnNumber: 16
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().analytics),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().sales)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 352,
          columnNumber: 20
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().secondary)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 355,
          columnNumber: 20
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().third)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 358,
          columnNumber: 20
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 351,
        columnNumber: 16
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().admininfo),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Signout, {
        fill: "#1f1f47"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 365,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().photo)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 366,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: "Raj Agarwal"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 369,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "agarwalsanket29@gmail.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 370,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().infosection),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 372,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 373,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 374,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 375,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 371,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 364,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 321,
    columnNumber: 9
  }, this);
}

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
      lineNumber: 387,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M87.4867 56.4602H83.2387V47.6243H74.955V56.4602H70.7069V35.843H74.955V44.1975H83.2387V35.843H87.4867V56.4602ZM103.615 47.5251H95.4589V53.0476H105.031V56.4602H91.2108V35.843H105.003V39.2839H95.4589V44.1975H103.615V47.5251ZM111.771 53.0476H120.791V56.4602H107.523V35.843H111.771V53.0476ZM127.489 49.196V56.4602H123.241V35.843H131.284C132.832 35.843 134.192 36.1262 135.362 36.6926C136.542 37.259 137.448 38.0662 138.081 39.114C138.713 40.1524 139.03 41.3372 139.03 42.6682C139.03 44.6884 138.336 46.2838 136.948 47.4543C135.57 48.6155 133.658 49.196 131.213 49.196H127.489ZM127.489 45.7551H131.284C132.407 45.7551 133.262 45.4908 133.847 44.9622C134.442 44.4335 134.739 43.6783 134.739 42.6965C134.739 41.6864 134.442 40.8699 133.847 40.2468C133.252 39.6238 132.431 39.3028 131.383 39.2839H127.489V45.7551Z",
      fill: "white"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 388,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 386,
    columnNumber: 9
  }, this);
}

function Dashicon({
  fill
}) {
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
        lineNumber: 399,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M3049 5106 c-106 -28 -209 -121 -251 -224 l-23 -57 -3 -1160 c-2 -838 0 -1177 8 -1220 31 -160 145 -274 305 -305 43 -8 297 -10 900 -8 l840 3 57 23 c81 33 160 108 200 190 l33 67 0 1210 0 1210 -31 65 c-40 84 -100 144 -182 183 l-67 32 -870 2 c-667 1 -881 -1 -916 -11z",
        fill: fill
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 400,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M300 2979 c-112 -22 -217 -107 -268 -217 l-27 -57 0 -1210 0 -1210 31 -65 c39 -83 101 -145 184 -184 l65 -31 890 0 890 0 67 33 c82 40 157 119 190 200 l23 57 3 1160 c2 838 0 1177 -8 1220 -30 157 -142 271 -298 304 -64 13 -1672 14 -1742 0z",
        fill: fill
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 401,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M3065 1696 c-150 -37 -255 -148 -285 -301 -8 -42 -10 -215 -8 -580 3 -517 3 -520 26 -577 33 -81 108 -160 190 -200 l67 -33 890 0 890 0 67 32 c82 39 142 99 182 183 l31 65 0 570 0 570 -33 67 c-40 82 -119 157 -200 190 l-57 23 -855 2 c-649 1 -867 -1 -905 -11z",
        fill: fill
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 402,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 398,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 396,
    columnNumber: 9
  }, this);
}

function SettingIcon({
  fill
}) {
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
      lineNumber: 410,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 409,
    columnNumber: 9
  }, this);
}

function Signout({
  fill
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
    onClick: () => jquery__WEBPACK_IMPORTED_MODULE_3__.data.setNav(!nav),
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
      lineNumber: 418,
      columnNumber: 268
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 418,
    columnNumber: 9
  }, this);
}

function PlusSvg({
  fill,
  onClick
}) {
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
      lineNumber: 424,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 423,
    columnNumber: 9
  }, this);
}

function Backsvg({
  fill,
  onClick
}) {
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
      lineNumber: 431,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M10.205 12.456A.5.5 0 0 0 10.5 12V4a.5.5 0 0 0-.832-.374l-4.5 4a.5.5 0 0 0 0 .748l4.5 4a.5.5 0 0 0 .537.082z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 432,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 430,
    columnNumber: 9
  }, this);
}

function DeleteSvg({
  fill,
  onClick,
  style
}) {
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
      lineNumber: 439,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      fillRule: "evenodd",
      d: "M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 440,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 438,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./styles/admindash.module.css":
/*!*************************************!*\
  !*** ./styles/admindash.module.css ***!
  \*************************************/
/***/ (function(module) {

// Exports
module.exports = {
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


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jquery" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("jquery");;

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
var __webpack_exports__ = (__webpack_exec__("./pages/admincontrols.jsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bmloZWxwLy4vcGFnZXMvYWRtaW5jb250cm9scy5qc3giLCJ3ZWJwYWNrOi8vdW5paGVscC8uL3N0eWxlcy9hZG1pbmRhc2gubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly91bmloZWxwL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly91bmloZWxwL2V4dGVybmFsIFwianF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vdW5paGVscC9leHRlcm5hbCBcIm5leHQvZHluYW1pY1wiIiwid2VicGFjazovL3VuaWhlbHAvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3VuaWhlbHAvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJMb2FkZXIiLCJkeW5hbWljIiwiQWRtaW5EYXNoIiwidG9nZ2xlIiwic2V0VG9nZ2xlIiwidXNlU3RhdGUiLCJuYXYiLCJzZXROYXYiLCJmZWF0dXJlIiwic2V0RmVhdHVyZSIsImFkZCIsInNldEFkZCIsIm1haW5UaXRsZSIsImltZ0xpbmsiLCJpbml0Iiwic2V0SW5pdCIsImZldGNoZWREYXRhIiwiaWQiLCJkYXRhIiwiYXhpb3MiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhaXRlbSIsInNldGRhdGFJdGVtIiwibmFtZSIsInByaWNlIiwibmV3RGF0YSIsInNldG5ld0RhdGEiLCJ0aXRsZSIsIkRlc2NyaXB0aW9uIiwiaW1hZ2VMaW5rIiwiaXRlbXMiLCJlZGl0Iiwic2V0RWRpdCIsInNldERhdGEiLCJ1c2VFZmZlY3QiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVyIiwic2V0SGFuZGxlciIsImNoYW5nZUV2ZW50IiwiZSIsImhlaWdodCIsIndpZHRoIiwiY2xhc3NOYW1lIiwic2V0VGltZW91dCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsInN0eWxlIiwiJCIsImFkZENsYXNzIiwicmVtb3ZlIiwidXNlcm5hdiIsImNvbG9yIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyUmFkaXVzIiwibWFwIiwiaXRlbSIsIl9pZCIsImdyaWRDb2x1bW4iLCJqdXN0aWZ5U2VsZiIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJtYXJnaW4iLCJkaXNwbGF5IiwicGFkZGluZyIsImRhdGFhIiwicG9zaXRpb24iLCJhbGlnblNlbGYiLCJmbGV4RGlyZWN0aW9uIiwidGFyZ2V0IiwidmFsdWUiLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsInJlcyIsIm1lc3NhZ2UiLCJwaG90byIsInNhbGVzIiwic2Vjb25kYXJ5IiwidGhpcmQiLCJMb2dvIiwiRGFzaGljb24iLCJmaWxsIiwiU2V0dGluZ0ljb24iLCJTaWdub3V0IiwiUGx1c1N2ZyIsIm9uQ2xpY2siLCJCYWNrc3ZnIiwiRGVsZXRlU3ZnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUEsTUFBTUEsTUFBTSxHQUFHQyxtREFBTyxDQUFDLE1BQU0seUtBQVA7QUFBQTtBQUFBLHdDQUFjLHFEQUFkO0FBQUEsd0NBQWMsc0JBQWQ7QUFBQTtBQUFBLEVBQXRCO0FBQ2UsU0FBU0MsU0FBVCxHQUFxQjtBQUVoQyxRQUFNO0FBQUEsT0FBQ0MsTUFBRDtBQUFBLE9BQVFDO0FBQVIsTUFBcUJDLCtDQUFRLENBQUMsS0FBRCxDQUFuQztBQUNBLFFBQU07QUFBQSxPQUFDQyxHQUFEO0FBQUEsT0FBS0M7QUFBTCxNQUFlRiwrQ0FBUSxDQUFDLEtBQUQsQ0FBN0I7QUFDQSxRQUFNO0FBQUEsT0FBQ0csT0FBRDtBQUFBLE9BQVNDO0FBQVQsTUFBdUJKLCtDQUFRLENBQUMsS0FBRCxDQUFyQztBQUNBLFFBQU07QUFBQSxPQUFDSyxHQUFEO0FBQUEsT0FBS0M7QUFBTCxNQUFlTiwrQ0FBUSxDQUFDO0FBQzFCTyxhQUFTLEVBQUMsRUFEZ0I7QUFFMUJDLFdBQU8sRUFBQztBQUZrQixHQUFELENBQTdCO0FBTUEsTUFBSTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFNQztBQUFOLE1BQWlCViwrQ0FBUSxDQUFDLEVBQUQsQ0FBN0I7O0FBQ0EsUUFBTVcsV0FBVyxHQUFHLE1BQU9DLEVBQVAsSUFBYztBQUM5QixVQUFNQyxJQUFJLEdBQUdDLGdEQUFBLENBQVcsbUJBQWtCRixFQUFHLEVBQWhDLEVBQW1DRyxJQUFuQyxDQUF3Q0MsUUFBUSxJQUFJO0FBQzdETixhQUFPLENBQUNNLFFBQVEsQ0FBQ0gsSUFBVixDQUFQO0FBQ0gsS0FGWSxDQUFiO0FBS0gsR0FORDs7QUFRQSxNQUFJO0FBQUEsT0FBQ0ksUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJsQiwrQ0FBUSxDQUFDLENBQUM7QUFDcENtQixRQUFJLEVBQUMsRUFEK0I7QUFFcENDLFNBQUssRUFBQztBQUY4QixHQUFELENBQUQsQ0FBdEM7QUFJQSxNQUFJO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0J0QiwrQ0FBUSxDQUFDO0FBQ2pDdUIsU0FBSyxFQUFDLEVBRDJCO0FBRWpDQyxlQUFXLEVBQUMsRUFGcUI7QUFHakNKLFNBQUssRUFBQyxFQUgyQjtBQUlqQ0ssYUFBUyxFQUFDLEVBSnVCO0FBS2pDQyxTQUFLLEVBQUNUO0FBTDJCLEdBQUQsQ0FBcEM7QUFRQSxNQUFJO0FBQUEsT0FBQ1UsSUFBRDtBQUFBLE9BQU1DO0FBQU4sTUFBaUI1QiwrQ0FBUSxDQUFDLEtBQUQsQ0FBN0I7QUFDQSxNQUFJO0FBQUEsT0FBQ2EsSUFBRDtBQUFBLE9BQU1nQjtBQUFOLE1BQWlCN0IsK0NBQVEsQ0FBQyxFQUFELENBQTdCO0FBQ0E4QixrREFBUyxDQUFDLE1BQU07QUFDWmhCLG9EQUFBLENBQVUsaUJBQVYsRUFBNkJDLElBQTdCLENBQWtDQyxRQUFRLElBQUk7QUFDMUNhLGFBQU8sQ0FBQ2IsUUFBUSxDQUFDSCxJQUFWLENBQVA7QUFHSCxLQUpELEVBSUdrQixLQUpILENBSVNDLEdBQUcsSUFBSTtBQUNaQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxxQkFBWjtBQUNILEtBTkQ7QUFPSCxHQVJRLEVBUVAsRUFSTyxDQUFUO0FBVUEsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXVCcEMsK0NBQVEsQ0FBQyxLQUFELENBQXJDOztBQUdBLGlCQUFlcUMsV0FBZixDQUEyQkMsQ0FBM0IsRUFBNkJDLE1BQTdCLEVBQW9DQyxLQUFwQyxFQUEwQ3JDLE9BQTFDLEVBQWtEc0MsU0FBbEQsRUFBNkQ7QUFHekQsUUFBR3RDLE9BQUgsRUFBWTtBQUtSdUMsZ0JBQVUsQ0FBQyxNQUFNO0FBRWJDLGdCQUFRLENBQUNDLGFBQVQsQ0FBd0IsMkJBQXhCLEVBQW9EQyxTQUFwRCxDQUE4RHhDLEdBQTlELENBQWtFeUMsOEVBQWxFO0FBQ0FDLHFEQUFDLENBQUUsSUFBR0Qsb0ZBQXFCLEVBQTFCLENBQUQsQ0FBOEJFLFFBQTlCLENBQXdDLEdBQUVGLDBGQUEyQixFQUFyRTtBQUNILE9BSlMsRUFJUixHQUpRLENBQVY7QUFNSCxLQVhELE1BWUs7QUFFREosZ0JBQVUsQ0FBQyxNQUFNO0FBQ2JDLGdCQUFRLENBQUNDLGFBQVQsQ0FBd0IsMkJBQXhCLEVBQW9EQyxTQUFwRCxDQUE4REksTUFBOUQsQ0FBcUVILDhFQUFyRTtBQUVBSCxnQkFBUSxDQUFDQyxhQUFULENBQXdCLDJCQUF4QixFQUFvREMsU0FBcEQsQ0FBOER4QyxHQUE5RCxDQUFrRXlDLCtFQUFsRTtBQUNILE9BSlMsRUFJUixHQUpRLENBQVY7QUFNSDs7QUFHREosY0FBVSxDQUFDLE1BQU07QUFFYnRDLGdCQUFVLENBQUNELE9BQUQsQ0FBVjtBQUVILEtBSlMsRUFJUixHQUpRLENBQVY7QUFLSDs7QUFDRCxNQUFHTCxNQUFILEVBQVcsb0JBQ1A7QUFBSyxhQUFTLEVBQUVnRCwrRUFBaEI7QUFBQSxlQUVRN0MsR0FBRyxpQkFBSTtBQUFLLGVBQVMsRUFBRTZDLDZFQUFhSTtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRmYsZUFNSTtBQUFLLGVBQVMsRUFBRUoseUVBQWhCO0FBQUEsOEJBQ0ksOERBQUMsSUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFLLGlCQUFTLEVBQUVBLDZFQUFoQjtBQUFBLGdDQUNJO0FBQUssbUJBQVMsRUFBRUEsNEVBQWhCO0FBQThCLGlCQUFPLEVBQUUsTUFBTTtBQUFDL0MscUJBQVMsQ0FBQyxLQUFELENBQVQ7QUFBaUIsV0FBL0Q7QUFBQSxrQ0FDSSw4REFBQyxRQUFEO0FBQVUsZ0JBQUksRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFFSTtBQUFJLGlCQUFLLEVBQUU7QUFBRW9ELG1CQUFLLEVBQUUsU0FBVDtBQUFvQkMsd0JBQVUsRUFBRSxHQUFoQztBQUFxQ0Msc0JBQVEsRUFBRTtBQUEvQyxhQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQU1JO0FBQUssbUJBQVMsRUFBRVAsNEVBQWhCO0FBQThCLGVBQUssRUFBRTtBQUFFUSwyQkFBZSxFQUFFLFNBQW5CO0FBQThCQyx3QkFBWSxFQUFFO0FBQTVDLFdBQXJDO0FBQTJGLGlCQUFPLEVBQUUsTUFBTTtBQUFFeEQscUJBQVMsQ0FBQyxJQUFELENBQVQ7QUFBaUIsV0FBN0g7QUFBQSxrQ0FDSSw4REFBQyxXQUFEO0FBQWEsZ0JBQUksRUFBQztBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBRUk7QUFBSSxpQkFBSyxFQUFFO0FBQUVvRCxtQkFBSyxFQUFFLFNBQVQ7QUFBb0JDLHdCQUFVLEVBQUUsR0FBaEM7QUFBcUNDLHNCQUFRLEVBQUU7QUFBL0MsYUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkosZUFhSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWJKLGVBY0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFkSixlQWVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBZkosZUFnQkk7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFoQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkosZUEyQkk7QUFBSyxlQUFTLEVBQUVQLDRFQUFoQjtBQUFBLDhCQUNJO0FBQUksYUFBSyxFQUFFO0FBQUNPLGtCQUFRLEVBQUM7QUFBVixTQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFLLGlCQUFTLEVBQUVQLDhFQUFoQjtBQUFBLG1CQUlLLENBQUMzQyxPQUFELGlCQUFZO0FBQUEsa0NBRWI7QUFBSyxxQkFBUyxFQUFFMkMsNkVBQWhCO0FBQStCLG1CQUFPLEVBQUdSLENBQUQsSUFBTztBQUUzQ0QseUJBQVcsQ0FBQ0MsQ0FBRCxFQUFJLE9BQUosRUFBYSxPQUFiLEVBQXNCLElBQXRCLEVBQTJCUSw2RUFBM0IsQ0FBWDtBQUVQLGFBSkc7QUFBQSxvQ0FLSSw4REFBQyxPQUFEO0FBQVMsa0JBQUksRUFBQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBTEosZUFNSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRmEsRUFZTGpDLElBQUksQ0FBQzJDLEdBQUwsQ0FBVUMsSUFBRCxJQUFVO0FBRWYsZ0JBQUksQ0FBQzlCLElBQUwsRUFBVyxvQkFDUDtBQUFLLHVCQUFTLEVBQUVtQiw2RUFBaEI7QUFBOEMsZ0JBQUUsRUFBRVcsSUFBSSxDQUFDQyxHQUF2RDtBQUE0RCxxQkFBTyxFQUFHLFlBQVc7QUFDN0Usc0JBQU03QyxJQUFJLEdBQUcsTUFBTUMsZ0RBQUEsQ0FBVyxtQkFBa0IyQyxJQUFJLENBQUNDLEdBQUksRUFBdEMsRUFBeUMzQyxJQUF6QyxDQUE4QyxNQUFNQyxRQUFOLElBQWtCO0FBQy9FLHdCQUFNTixPQUFPLENBQUNNLFFBQVEsQ0FBQ0gsSUFBVixDQUFiO0FBQ0Esd0JBQU1vQixPQUFPLENBQUNDLEdBQVIsQ0FBWWxCLFFBQVEsQ0FBQ0gsSUFBckIsQ0FBTjtBQUVILGlCQUprQixDQUFuQjtBQU1BZSx1QkFBTyxDQUFDLElBQUQsQ0FBUDtBQUVDLGVBVEw7QUFBQSxxQ0FVSTtBQUFJLHFCQUFLLEVBQUU7QUFBRStCLDRCQUFVLEVBQUUsTUFBZDtBQUFzQkMsNkJBQVcsRUFBQztBQUFsQyxpQkFBWDtBQUFBLDBCQUEyREgsSUFBSSxDQUFDbEM7QUFBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVZKLGVBQW9Da0MsSUFBSSxDQUFDQyxHQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURPLENBQVgsS0FjSyxvQkFFRDtBQUFLLHVCQUFTLEVBQUcsR0FBRVosNkVBQWMsSUFBR0EsOEVBQWUsR0FBbkQ7QUFBMkUsbUJBQUssRUFBRTtBQUFDZSxtQ0FBbUIsRUFBQztBQUFyQixlQUFsRjtBQUFBLHNDQUNJLDhEQUFDLE9BQUQ7QUFBUyxvQkFBSSxFQUFDLFNBQWQ7QUFBd0IsdUJBQU8sRUFBR3ZCLENBQUQsSUFBTztBQUNwQ1YseUJBQU8sQ0FBQyxLQUFELENBQVA7QUFDQWUsMEJBQVEsQ0FBQ0MsYUFBVCxDQUF1Qiw0QkFBdkIsRUFBcURDLFNBQXJELENBQStESSxNQUEvRCxDQUFzRSwyQkFBdEU7QUFFSDtBQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREosZUFRSTtBQUFLLHlCQUFTLEVBQUVILDJFQUFoQjtBQUE2QixxQkFBSyxFQUFFO0FBQUNjLDZCQUFXLEVBQUMsTUFBYjtBQUFvQkUsd0JBQU0sRUFBQztBQUEzQixpQkFBcEM7QUFBQSwwQkFFUXJELElBQUksQ0FBQ0ksSUFBTCxDQUFVMkMsR0FBVixDQUFlM0MsSUFBRCxJQUFVO0FBRXBCLHNDQUVJO0FBQXFCLHlCQUFLLEVBQUU7QUFBQ2tELDZCQUFPLEVBQUM7QUFBVCxxQkFBNUI7QUFBQSw0Q0FDSTtBQUFJLDJCQUFLLEVBQUU7QUFBQ1QsdUNBQWUsRUFBQyxXQUFqQjtBQUE2QlUsK0JBQU8sRUFBQyxXQUFyQztBQUFpREYsOEJBQU0sRUFBQztBQUF4RCx1QkFBWDtBQUE4RSw2QkFBTyxFQUFHLE1BQU94QixDQUFQLElBQWE7QUFFakcsOEJBQU0yQixLQUFLLEdBQUcsTUFBTW5ELGdEQUFBLENBQVcsbUJBQWtCTCxJQUFJLENBQUNpRCxHQUFJLElBQUc3QyxJQUFJLENBQUM2QyxHQUFJLFFBQWxELEVBQTJEM0MsSUFBM0QsQ0FBaUUsTUFBT0MsUUFBUCxJQUFvQjtBQUNyRyxnQ0FBTU4sT0FBTyxDQUFDTSxRQUFRLENBQUNILElBQVYsQ0FBYjtBQUNBLGdDQUFNb0IsT0FBTyxDQUFDQyxHQUFSLENBQVlsQixRQUFaLENBQU47QUFDSCx5QkFIbUIsQ0FBcEI7QUFJSCx1QkFORDtBQUFBLGlDQU1LSCxJQUFJLENBQUNVLEtBQUwsSUFBY1YsSUFBSSxDQUFDTSxJQU54QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREosZUFTSSw4REFBQyxTQUFEO0FBQVcsMEJBQUksRUFBQyxPQUFoQjtBQUF3QiwyQkFBSyxFQUFFO0FBQUMrQyxnQ0FBUSxFQUFDO0FBQVYsdUJBQS9CO0FBQStELDZCQUFPLEVBQUc1QixDQUFELElBQU87QUFDM0V4QiwyRUFBQSxDQUFjLG1CQUFrQkwsSUFBSSxDQUFDaUQsR0FBSSxJQUFHN0MsSUFBSSxDQUFDNkMsR0FBSSxFQUFyRDtBQUNIO0FBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFUSjtBQUFBLHFCQUFVN0MsSUFBSSxDQUFDNkMsR0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUZKO0FBZ0JILGlCQWxCRDtBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBUkosZUErQkk7QUFBSyx5QkFBUyxFQUFFWixpRkFBaEI7QUFBbUMscUJBQUssRUFBRTtBQUFDYyw2QkFBVyxFQUFDLFFBQWI7QUFBc0JPLDJCQUFTLEVBQUMsUUFBaEM7QUFBeUNSLDRCQUFVLEVBQUMsS0FBcEQ7QUFBMERJLHlCQUFPLEVBQUMsTUFBbEU7QUFBeUVLLCtCQUFhLEVBQUM7QUFBdkYsaUJBQTFDO0FBQUEsd0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREosZUFFSTtBQUFPLHNCQUFJLEVBQUMsTUFBWjtBQUFtQiw2QkFBVyxFQUFDLE9BQS9CO0FBQXVDLDBCQUFRLEVBQUc5QixDQUFELElBQU87QUFDcERoQiw4QkFBVSxpQ0FDSEQsT0FERztBQUVORSwyQkFBSyxFQUFDZSxDQUFDLENBQUMrQixNQUFGLENBQVNDO0FBRlQsdUJBQVY7QUFJSDtBQUxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRkosZUFRSTtBQUFPLHNCQUFJLEVBQUMsTUFBWjtBQUFtQiw2QkFBVyxFQUFDLFlBQS9CO0FBQTRDLDBCQUFRLEVBQUdoQyxDQUFELElBQU87QUFDekRoQiw4QkFBVSxpQ0FDSEQsT0FERztBQUVORyxpQ0FBVyxFQUFFYyxDQUFDLENBQUMrQixNQUFGLENBQVNDO0FBRmhCLHVCQUFWO0FBSUg7QUFMRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQVJKLGVBY0k7QUFBTyxzQkFBSSxFQUFDLE1BQVo7QUFBbUIsNkJBQVcsRUFBQyxPQUEvQjtBQUF1QywwQkFBUSxFQUFHaEMsQ0FBRCxJQUFPO0FBQ3BEaEIsOEJBQVUsaUNBQ0hELE9BREc7QUFFTkQsMkJBQUssRUFBRWtCLENBQUMsQ0FBQytCLE1BQUYsQ0FBU0M7QUFGVix1QkFBVjtBQUlIO0FBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFkSixlQW9CSTtBQUFPLHNCQUFJLEVBQUMsTUFBWjtBQUFtQiw2QkFBVyxFQUFDLFdBQS9CO0FBQTJDLDBCQUFRLEVBQUdoQyxDQUFELElBQU87QUFDeERoQiw4QkFBVSxpQ0FDSEQsT0FERztBQUVOSSwrQkFBUyxFQUFFYSxDQUFDLENBQUMrQixNQUFGLENBQVNDO0FBRmQsdUJBQVY7QUFJSDtBQUxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBcEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkEvQkosZUEyREk7QUFBSyx5QkFBUyxFQUFFeEIsOEVBQWhCO0FBQWdDLHFCQUFLLEVBQUU7QUFBQ2EsNEJBQVUsRUFBQztBQUFaLGlCQUF2QztBQUFBLHdDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURKLGVBRUk7QUFBTSx3QkFBTSxFQUFDLG1CQUFiO0FBQWlDLHdCQUFNLEVBQUMsTUFBeEM7QUFBK0MsMkJBQVMsRUFBQyxVQUF6RDtBQUFBLDZCQUdJMUMsUUFBUSxDQUFDdUMsR0FBVCxDQUFhLENBQUM5QixLQUFELEVBQU82QyxHQUFQLEtBQWU7QUFHeEIsd0NBQ0k7QUFBSywrQkFBUyxFQUFJekIsNEVBQWxCO0FBQUEsOENBQ0k7QUFBTyw0QkFBSSxFQUFDLE1BQVo7QUFBbUIsbUNBQVcsRUFBQyxZQUEvQjtBQUE0Qyw0QkFBSSxFQUFDLE9BQWpEO0FBQXlELGdDQUFRLEVBQUVSLENBQUMsSUFBSTtBQUNwRSw4QkFBSTdCLElBQUksR0FBR1EsUUFBWDtBQUNBUiw4QkFBSSxDQUFDOEQsR0FBRCxDQUFKLENBQVVwRCxJQUFWLEdBQWlCbUIsQ0FBQyxDQUFDK0IsTUFBRixDQUFTQyxLQUExQjtBQUVIO0FBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFESixlQU1JO0FBQU8sNEJBQUksRUFBQyxNQUFaO0FBQW1CLG1DQUFXLEVBQUMsT0FBL0I7QUFBd0MsNEJBQUksRUFBQyxPQUE3QztBQUFxRCxnQ0FBUSxFQUFFaEMsQ0FBQyxJQUFJO0FBQ2hFLDhCQUFJN0IsSUFBSSxHQUFHUSxRQUFYO0FBQ0FSLDhCQUFJLENBQUM4RCxHQUFELENBQUosQ0FBVW5ELEtBQVYsR0FBa0JrQixDQUFDLENBQUMrQixNQUFGLENBQVNDLEtBQTNCO0FBRUg7QUFKRDtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFESjtBQWVILG1CQWxCRCxDQUhKLGVBdUJBLDhEQUFDLE9BQUQ7QUFBUywyQkFBTyxFQUFFLE1BQU07QUFDcEJwRCxpQ0FBVyxDQUFDLENBQUMsR0FBR0QsUUFBSixFQUFjLEVBQWQsQ0FBRCxDQUFYO0FBS0g7QUFORDtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQXZCQSxlQThCSTtBQUFPLHdCQUFJLEVBQUMsUUFBWjtBQUFxQix5QkFBSyxFQUFDLFFBQTNCO0FBQW9DLHlCQUFLLEVBQUU7QUFBRXFDLHFDQUFlLEVBQUUsU0FBbkI7QUFBOEJILDJCQUFLLEVBQUUsTUFBckM7QUFBNkNaLDRCQUFNLEVBQUUsTUFBckQ7QUFBNkRnQixrQ0FBWSxFQUFFO0FBQTNFLHFCQUEzQztBQUFnSSwyQkFBTyxFQUFHakIsQ0FBRCxJQUFPO0FBRWhKQSx1QkFBQyxDQUFDa0MsY0FBRjtBQUNJdkMsNkJBQU8sQ0FBQ0MsR0FBUixDQUFZdUIsSUFBSSxDQUFDQyxHQUFqQjtBQUNKckMsNkJBQU8sQ0FBQyxPQUFELENBQVAsR0FBbUJKLFFBQW5CO0FBRUlILHVFQUFBLENBQVksbUJBQWtCTCxJQUFJLENBQUNpRCxHQUFJLEVBQXZDLEVBQXlDckMsT0FBekMsRUFBa0ROLElBQWxELENBQXdEQyxRQUFELElBQWNpQixPQUFPLENBQUNDLEdBQVIsQ0FBWWxCLFFBQVosQ0FBckU7QUFFUDtBQVJHO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBOUJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBM0RKO0FBQUEsZUFBNER5QyxJQUFJLENBQUM1QyxJQUFMLENBQVU2QyxHQUF0RTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZDO0FBMkdSLFdBM0hELENBWks7QUFBQSx3QkFKakIsRUFnSlF2RCxPQUFPLGlCQUFJO0FBQUssbUJBQVMsRUFBRTJDLDZFQUFoQjtBQUFBLGtDQUNQLDhEQUFDLE9BQUQ7QUFBUyxnQkFBSSxFQUFDLFNBQWQ7QUFBeUIsbUJBQU8sRUFBR1IsQ0FBRCxJQUFPO0FBQ3JDRCx5QkFBVyxDQUFDQyxDQUFELEVBQUksT0FBSixFQUFhLE9BQWIsRUFBc0IsS0FBdEIsRUFBNkJRLDZFQUE3QixDQUFYO0FBRUg7QUFIRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURPLGVBTVA7QUFBSyxxQkFBUyxFQUFFQSxvRkFBaEI7QUFBQSxvQ0FDSTtBQUFJLG1CQUFLLEVBQUU7QUFBRU8sd0JBQVEsRUFBRTtBQUFaLGVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosZUFFSTtBQUFLLHVCQUFTLEVBQUVQLGlGQUFoQjtBQUFBLHNDQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZKLGVBR0k7QUFBTyxvQkFBSSxFQUFDLE1BQVo7QUFBb0IsMkJBQVcsRUFBQyxPQUFoQztBQUF3Qyx3QkFBUSxFQUFHUixDQUFELElBQVFoQyxNQUFNLGlDQUN6REQsR0FEeUQ7QUFFNURFLDJCQUFTLEVBQUMrQixDQUFDLENBQUMrQixNQUFGLENBQVNDO0FBRnlDO0FBQWhFO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSEosZUFPSTtBQUFPLG9CQUFJLEVBQUMsTUFBWjtBQUFtQiwyQkFBVyxFQUFDLFdBQS9CO0FBQTJDLHdCQUFRLEVBQUdoQyxDQUFELElBQVFoQyxNQUFNLGlDQUM1REQsR0FENEQ7QUFFL0RHLHlCQUFPLEVBQUM4QixDQUFDLENBQUMrQixNQUFGLENBQVNDO0FBRjhDO0FBQW5FO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBUEosZUFXSTtBQUFRLG9CQUFJLEVBQUMsUUFBYjtBQUFzQix1QkFBTyxFQUFHaEMsQ0FBRCxJQUFPO0FBQ2xDeEIsbUVBQUEsQ0FBVyxpQkFBWCxFQUE2QlQsR0FBN0IsRUFBa0NVLElBQWxDLENBQXVDMEQsR0FBRyxJQUFJO0FBQzFDLHdCQUFHQSxHQUFHLENBQUM1RCxJQUFKLENBQVM2RCxPQUFULEtBQXFCLGFBQXhCLEVBQXVDdEMsVUFBVSxDQUFDLElBQUQsQ0FBVjtBQUMxQyxtQkFGRDtBQUdILGlCQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVhKLEVBbUJZRCxPQUFPLGlCQUFJO0FBQUsseUJBQVMsRUFBRVcsNEVBQWhCO0FBQUEsdUNBQ1A7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFETztBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQW5CdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFOTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBaEpuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUEzQkosZUFvTkk7QUFBSyxlQUFTLEVBQUVBLCtFQUFoQjtBQUFBLDhCQUNJLDhEQUFDLE9BQUQ7QUFBUyxZQUFJLEVBQUM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFLLGlCQUFTLEVBQUVBLDJFQUFXNkI7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBS0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMSixlQU1JO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkosZUFPSTtBQUFLLGlCQUFTLEVBQUU3QixpRkFBaEI7QUFBQSxnQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSixlQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEosZUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXBOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFETyxDQUFYLEtBdU9LLElBQUksQ0FBQ2hELE1BQUwsRUFBYSxvQkFDZDtBQUFLLGFBQVMsRUFBRWdELCtFQUFoQjtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFFQSx5RUFBaEI7QUFBQSw4QkFDSSw4REFBQyxJQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQUssaUJBQVMsRUFBRUEsNkVBQWhCO0FBQUEsZ0NBQ0k7QUFBSyxtQkFBUyxFQUFFQSw0RUFBaEI7QUFBOEIsZUFBSyxFQUFFO0FBQUVRLDJCQUFlLEVBQUUsU0FBbkI7QUFBOEJDLHdCQUFZLEVBQUU7QUFBNUMsV0FBckM7QUFBMkYsaUJBQU8sRUFBRSxNQUFNO0FBQUV4RCxxQkFBUyxDQUFDLEtBQUQsQ0FBVDtBQUFrQixXQUE5SDtBQUFBLGtDQUNJLDhEQUFDLFFBQUQ7QUFBVSxnQkFBSSxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUVJO0FBQUksaUJBQUssRUFBRTtBQUFFb0QsbUJBQUssRUFBQyxTQUFSO0FBQWtCQyx3QkFBVSxFQUFDLEdBQTdCO0FBQWlDQyxzQkFBUSxFQUFDO0FBQTFDLGFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBTUk7QUFBSyxtQkFBUyxFQUFFUCw0RUFBaEI7QUFBOEIsaUJBQU8sRUFBR1IsQ0FBRCxJQUFPO0FBRTFDdkMscUJBQVMsQ0FBQyxDQUFDRCxNQUFGLENBQVQ7QUFDQyxXQUhMO0FBQUEsa0NBSUksOERBQUMsV0FBRDtBQUFhLGdCQUFJLEVBQUM7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKSixlQUtJO0FBQUksaUJBQUssRUFBRTtBQUFFcUQsbUJBQUssRUFBRSxTQUFUO0FBQW9CQyx3QkFBVSxFQUFFLEdBQWhDO0FBQXFDQyxzQkFBUSxFQUFFO0FBQS9DLGFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5KLGVBZ0JJO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBaEJKLGVBaUJJO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBakJKLGVBa0JJO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBbEJKLGVBbUJJO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBbkJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBeUJJO0FBQUssZUFBUyxFQUFFUCw0RUFBaEI7QUFBQSw4QkFDRztBQUFLLGlCQUFTLEVBQUVBLDhFQUFoQjtBQUFBLGdDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREgsZUFLRztBQUFLLGlCQUFTLEVBQUVBLCtFQUFoQjtBQUFBLGdDQUNJO0FBQUssbUJBQVMsRUFBRUEsMkVBQVc4QjtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBSUk7QUFBSyxtQkFBUyxFQUFFOUIsK0VBQWUrQjtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpKLGVBT0k7QUFBSyxtQkFBUyxFQUFFL0IsMkVBQVdnQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXpCSixlQTJDSTtBQUFLLGVBQVMsRUFBRWhDLCtFQUFoQjtBQUFBLDhCQUNJLDhEQUFDLE9BQUQ7QUFBUyxZQUFJLEVBQUM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFLLGlCQUFTLEVBQUVBLDJFQUFXNkI7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBS0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMSixlQU1JO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkosZUFPSTtBQUFLLGlCQUFTLEVBQUU3QixpRkFBaEI7QUFBQSxnQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSixlQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEosZUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTNDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFEYztBQTZEckI7O0FBR0QsU0FBU2lDLElBQVQsR0FBZ0I7QUFDWixzQkFDSTtBQUFLLFNBQUssRUFBQyxLQUFYO0FBQWlCLFVBQU0sRUFBQyxLQUF4QjtBQUE4QixXQUFPLEVBQUMsYUFBdEM7QUFBb0QsUUFBSSxFQUFDLE1BQXpEO0FBQWdFLFNBQUssRUFBQyw0QkFBdEU7QUFBQSw0QkFDSTtBQUFNLE9BQUMsRUFBQyx5aUJBQVI7QUFBa2pCLFVBQUksRUFBQztBQUF2akI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBTSxPQUFDLEVBQUMsc3lCQUFSO0FBQSt5QixVQUFJLEVBQUM7QUFBcHpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVFIOztBQUNELFNBQVNDLFFBQVQsQ0FBa0I7QUFBQ0M7QUFBRCxDQUFsQixFQUEwQjtBQUN0QixzQkFDSTtBQUFLLFdBQU8sRUFBQyxLQUFiO0FBQW1CLFNBQUssRUFBQyw0QkFBekI7QUFBc0QsU0FBSyxFQUFDLElBQTVEO0FBQWlFLFVBQU0sRUFBQyxJQUF4RTtBQUE2RSxXQUFPLEVBQUMsMkJBQXJGO0FBQWlILHVCQUFtQixFQUFDLGVBQXJJO0FBQXFKLFFBQUksRUFBQyxNQUExSjtBQUFBLDJCQUVJO0FBQUcsZUFBUyxFQUFDLDBEQUFiO0FBQXdFLFVBQUksRUFBQyxTQUE3RTtBQUF1RixZQUFNLEVBQUMsTUFBOUY7QUFBQSw4QkFDSTtBQUFNLFNBQUMsRUFBQyxxUUFBUjtBQUE4USxZQUFJLEVBQUdBO0FBQXJSO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQU0sU0FBQyxFQUFDLHVRQUFSO0FBQWdSLFlBQUksRUFBRUE7QUFBdFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBR0k7QUFBTSxTQUFDLEVBQUMsMk9BQVI7QUFBb1AsWUFBSSxFQUFFQTtBQUExUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEosZUFJSTtBQUFNLFNBQUMsRUFBQyw4UEFBUjtBQUF1USxZQUFJLEVBQUVBO0FBQTdRO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFXSDs7QUFDRCxTQUFTQyxXQUFULENBQXFCO0FBQUNEO0FBQUQsQ0FBckIsRUFBNkI7QUFDekIsc0JBQ0k7QUFBSyxTQUFLLEVBQUMsNEJBQVg7QUFBd0MsU0FBSyxFQUFDLElBQTlDO0FBQW1ELFVBQU0sRUFBQyxJQUExRDtBQUErRCxRQUFJLEVBQUVBLElBQXJFO0FBQTJFLGFBQVMsRUFBQyxpQkFBckY7QUFBdUcsV0FBTyxFQUFDLFdBQS9HO0FBQUEsMkJBQ0k7QUFBTSxPQUFDLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBS0g7O0FBQ0QsU0FBU0UsT0FBVCxDQUFpQjtBQUFDRjtBQUFELENBQWpCLEVBQXdCO0FBRXBCLHNCQUVJO0FBQUssV0FBTyxFQUFFLE1BQU1wRSwrQ0FBQSxDQUFZLENBQUNaLEdBQWIsQ0FBcEI7QUFBdUMsbUJBQVksTUFBbkQ7QUFBMEQsYUFBUyxFQUFDLE9BQXBFO0FBQTRFLFNBQUssRUFBQyxJQUFsRjtBQUF1RixVQUFNLEVBQUMsSUFBOUY7QUFBbUcsbUJBQVksS0FBL0c7QUFBcUgsaUJBQVUsYUFBL0g7QUFBNkksYUFBUyxFQUFDLHVDQUF2SjtBQUErTCxRQUFJLEVBQUMsS0FBcE07QUFBME0sU0FBSyxFQUFDLDRCQUFoTjtBQUE2TyxXQUFPLEVBQUMsYUFBclA7QUFBQSwyQkFBbVE7QUFBTSxVQUFJLEVBQUVnRixJQUFaO0FBQWtCLE9BQUMsRUFBQztBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW5RO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGSjtBQUlIOztBQUNELFNBQVNHLE9BQVQsQ0FBaUI7QUFBQ0gsTUFBRDtBQUFNSTtBQUFOLENBQWpCLEVBQWlDO0FBQzdCLHNCQUNJO0FBQUssV0FBTyxFQUFFQSxPQUFkO0FBQXVCLFNBQUssRUFBQyw0QkFBN0I7QUFBMEQsU0FBSyxFQUFDLElBQWhFO0FBQXFFLFVBQU0sRUFBQyxJQUE1RTtBQUFpRixRQUFJLEVBQUVKLElBQXZGO0FBQTZGLGFBQVMsRUFBQyx3QkFBdkc7QUFBZ0ksV0FBTyxFQUFDLFdBQXhJO0FBQUEsMkJBQ0k7QUFBTSxPQUFDLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBS0g7O0FBQ0QsU0FBU0ssT0FBVCxDQUFpQjtBQUFDTCxNQUFEO0FBQU1JO0FBQU4sQ0FBakIsRUFBaUM7QUFDN0Isc0JBQ0k7QUFBSyxTQUFLLEVBQUMsNEJBQVg7QUFBd0MsV0FBTyxFQUFFQSxPQUFqRDtBQUEwRCxTQUFLLEVBQUMsSUFBaEU7QUFBcUUsVUFBTSxFQUFDLElBQTVFO0FBQWlGLFFBQUksRUFBRUosSUFBdkY7QUFBNkYsYUFBUyxFQUFDLHlCQUF2RztBQUFpSSxXQUFPLEVBQUMsV0FBekk7QUFBQSw0QkFDSTtBQUFNLE9BQUMsRUFBQztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJO0FBQU0sT0FBQyxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBTUg7O0FBQ0QsU0FBU00sU0FBVCxDQUFtQjtBQUFDTixNQUFEO0FBQU1JLFNBQU47QUFBY3ZDO0FBQWQsQ0FBbkIsRUFBeUM7QUFDckMsc0JBQ0k7QUFBSyxTQUFLLEVBQUU7QUFBQ29CLGNBQVEsRUFBQztBQUFWLEtBQVo7QUFBNEMsV0FBTyxFQUFFbUIsT0FBckQ7QUFBOEQsU0FBSyxFQUFDLDRCQUFwRTtBQUFpRyxTQUFLLEVBQUMsSUFBdkc7QUFBNEcsVUFBTSxFQUFDLElBQW5IO0FBQXdILFFBQUksRUFBRUosSUFBOUg7QUFBb0ksYUFBUyxFQUFDLGFBQTlJO0FBQTRKLFdBQU8sRUFBQyxXQUFwSztBQUFBLDRCQUNJO0FBQU0sT0FBQyxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBTSxjQUFRLEVBQUMsU0FBZjtBQUF5QixPQUFDLEVBQUM7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBTUgsQzs7Ozs7Ozs7OztBQzFiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMvQkEsbUM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvYWRtaW5jb250cm9scy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi4vc3R5bGVzL2FkbWluZGFzaC5tb2R1bGUuY3NzXCJcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIlxuaW1wb3J0ICQsIHsgZGF0YSB9IGZyb20gXCJqcXVlcnlcIlxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXG5cblxuXG5jb25zdCBMb2FkZXIgPSBkeW5hbWljKCgpID0+IGltcG9ydChcIi4uL2NvbXBvbmVudHMvbG9hZGVyXCIpKVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRtaW5EYXNoKCkge1xuICAgIFxuICAgIGNvbnN0IFt0b2dnbGUsc2V0VG9nZ2xlXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IFtuYXYsc2V0TmF2XSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IFtmZWF0dXJlLHNldEZlYXR1cmVdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW2FkZCxzZXRBZGRdID0gdXNlU3RhdGUoe1xuICAgICAgICBtYWluVGl0bGU6XCJcIixcbiAgICAgICAgaW1nTGluazpcIlwiXG4gICAgICAgIFxuXG4gICAgfSlcbiAgICBsZXQgW2luaXQsc2V0SW5pdF0gPSB1c2VTdGF0ZShbXSlcbiAgICBjb25zdCBmZXRjaGVkRGF0YSA9IGFzeW5jIChpZCkgPT4ge1xuICAgICAgICBjb25zdCBkYXRhID0gYXhpb3MuZ2V0KGAvYXBpL2FkZEZlYXR1cmUvJHtpZH1gKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIHNldEluaXQocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICBsZXQgW2RhdGFpdGVtLCBzZXRkYXRhSXRlbV0gPSB1c2VTdGF0ZShbe1xuICAgICAgICBuYW1lOlwiXCIsXG4gICAgICAgIHByaWNlOlwiXCJcbiAgICB9XSlcbiAgICBsZXQgW25ld0RhdGEsIHNldG5ld0RhdGFdID0gdXNlU3RhdGUoe1xuICAgICAgICB0aXRsZTpcIlwiLFxuICAgICAgICBEZXNjcmlwdGlvbjpcIlwiLFxuICAgICAgICBwcmljZTpcIlwiLFxuICAgICAgICBpbWFnZUxpbms6XCJcIixcbiAgICAgICAgaXRlbXM6ZGF0YWl0ZW1cbiAgICB9KVxuICAgIFxuICAgIGxldCBbZWRpdCxzZXRFZGl0XSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGxldCBbZGF0YSxzZXREYXRhXSA9IHVzZVN0YXRlKFtdKVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGF4aW9zLmdldChcIi9hcGkvYWRkRmVhdHVyZVwiKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIHNldERhdGEocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgICAgIFxuXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInR1bXNlIG5haSBobyBwYXllZ2FcIilcbiAgICAgICAgfSlcbiAgICB9LFtdKVxuICAgIFxuICAgIGNvbnN0IFtoYW5kbGVyLHNldEhhbmRsZXJdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgXG4gICBcbiAgICBhc3luYyBmdW5jdGlvbiBjaGFuZ2VFdmVudChlLGhlaWdodCx3aWR0aCxmZWF0dXJlLGNsYXNzTmFtZSkge1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGlmKGZlYXR1cmUpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmFkbWluZGFzaF9mZWF0dXJlX18yRzhNamApLmNsYXNzTGlzdC5hZGQoc3R5bGUuZ29iaWdnZXIpXG4gICAgICAgICAgICAgICAgJChgLiR7c3R5bGUudXBwZXJjb250YWluZXJ9YCkuYWRkQ2xhc3MoYCR7c3R5bGUudXBwZXJjb250YWluZXJhY3RpdmV9YClcbiAgICAgICAgICAgIH0sMTUyKVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5hZG1pbmRhc2hfZmVhdHVyZV9fMkc4TWpgKS5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlLmdvYmlnZ2VyKVxuXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmFkbWluZGFzaF9mZWF0dXJlX18yRzhNamApLmNsYXNzTGlzdC5hZGQoc3R5bGUuZ29zbWFsbGVyKVxuICAgICAgICAgICAgfSwxNTIpXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBzZXRGZWF0dXJlKGZlYXR1cmUpXG4gICAgICAgICAgICBcbiAgICAgICAgfSwxNTApXG4gICAgfVxuICAgIGlmKHRvZ2dsZSkgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmFkbWluZGFzaH0+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmF2ICYmIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS51c2VybmF2fSA+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5uYXZ9PlxuICAgICAgICAgICAgICAgIDxMb2dvIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLm9wdGlvbnN9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYWN0aXZlfSBvbkNsaWNrPXsoKSA9PiB7c2V0VG9nZ2xlKGZhbHNlKX19ID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEYXNoaWNvbiBmaWxsPVwiI2YyZjZmZlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3sgY29sb3I6IFwiI2YyZjZmZlwiLCBmb250V2VpZ2h0OiA0MDAsIGZvbnRTaXplOiBcIjIycHhcIiB9fT5EYXNoYm9hcmQ8L2gxPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYWN0aXZlfSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2YyZjZmZlwiLCBib3JkZXJSYWRpdXM6IFwiMTVweFwiIH19IG9uQ2xpY2s9eygpID0+IHsgc2V0VG9nZ2xlKHRydWUpIH19ID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZXR0aW5nSWNvbiBmaWxsPVwiIzFmMWY0N1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3sgY29sb3I6IFwiIzFmMWY0N1wiLCBmb250V2VpZ2h0OiA0MDAsIGZvbnRTaXplOiBcIjIycHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXR0aW5nc1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNlbnRlcn0+XG4gICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7Zm9udFNpemU6XCIzNnB4XCJ9fT5TZXR0aW5nczwvaDE+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmZlYXR1cmVzfT5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgeyFmZWF0dXJlICYmIDw+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZmVhdHVyZX0gb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlRXZlbnQoZSwgXCI3MDBweFwiLCBcIjcwMHB4XCIsIHRydWUsc3R5bGUuZmVhdHVyZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFBsdXNTdmcgZmlsbD1cIiMxZjFmNDdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPkFkZCBhIGZlYXR1cmU8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWVkaXQpIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZmVhdHVyZX0ga2V5PXtpdGVtLl9pZH0gaWQ9e2l0ZW0uX2lkfSBvbkNsaWNrPXsgYXN5bmMgKCkgPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS9hZGRGZWF0dXJlLyR7aXRlbS5faWR9YCkudGhlbihhc3luYyByZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHNldEluaXQocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFZGl0KHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyBncmlkQ29sdW1uOiBcIjEvLTFcIiwganVzdGlmeVNlbGY6XCJjZW50ZXJcIiB9fSA+e2l0ZW0udGl0bGV9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlLmZlYXR1cmV9ICR7c3R5bGUuZ29iaWdnZXJ9IGB9IGtleT17aXRlbS5kYXRhLl9pZH0gc3R5bGU9e3tncmlkVGVtcGxhdGVDb2x1bW5zOlwiMWZyIDFmciAxZnJcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYWNrc3ZnIGZpbGw9XCIjMWYxZjQ3XCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RWRpdChmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZG1pbmRhc2hfZ29iaWdnZXJfXzN3ZmRaXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJhZG1pbmRhc2hfZ29iaWdnZXJfXzN3ZmRaXCIpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAvPiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaXRlbXN9IHN0eWxlPXt7anVzdGlmeVNlbGY6XCJsZWZ0XCIsbWFyZ2luOlwiNTBweFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXQuZGF0YS5tYXAoKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2RhdGEuX2lkfSAgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwifX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOlwiYWxpY2VibHVlXCIscGFkZGluZzpcIjIwcHggNDBweFwiLG1hcmdpbjpcIjE1cHggMFwifX0gb25DbGljaz17IGFzeW5jIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhYSA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS9hZGRGZWF0dXJlLyR7aW5pdC5faWR9LyR7ZGF0YS5faWR9L2l0ZW1zYCkudGhlbiggYXN5bmMgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHNldEluaXQocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgY29uc29sZS5sb2cocmVzcG9uc2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19ID57ZGF0YS50aXRsZSB8fCBkYXRhLm5hbWV9IDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZWxldGVTdmcgZmlsbD1cImJsYWNrXCIgc3R5bGU9e3twb3NpdGlvbjpcInN0YXRpYyAhaW1wb3J0YW50XCJ9fSBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF4aW9zLmRlbGV0ZShgL2FwaS9hZGRGZWF0dXJlLyR7aW5pdC5faWR9LyR7ZGF0YS5faWR9YClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYWRkaW5nSXRlbXN9IHN0eWxlPXt7anVzdGlmeVNlbGY6XCJjZW50ZXJcIixhbGlnblNlbGY6XCJjZW50ZXJcIixncmlkQ29sdW1uOlwiMi8zXCIsZGlzcGxheTpcImZsZXhcIixmbGV4RGlyZWN0aW9uOlwiY29sdW1uXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPkFkZGluZyBhbiBFbnRyeTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVGl0bGVcIiBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldG5ld0RhdGEoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLm5ld0RhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRGVzY2lwdGlvblwiIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0bmV3RGF0YSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ubmV3RGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZXNjcmlwdGlvbjogZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiUHJpY2VcIiBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldG5ld0RhdGEoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLm5ld0RhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkltYWdlTGlua1wiIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0bmV3RGF0YSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ubmV3RGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZUxpbms6IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGJ1dHRvbiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6XCIjMWYxZjQ3XCIsY29sb3I6XCIjZmZmXCIsaGVpZ2h0OlwiNDBweFwiLGJvcmRlclJhZGl1czpcIjI1cHhcIn19PlN1Ym1pdDwvYnV0dG9uPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuc3ViSXRlbXN9IHN0eWxlPXt7Z3JpZENvbHVtbjpcIjNcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+QWRkIEl0ZW1zPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiL2FwaS90ZXN0RGF0YWJhc2VcIiBtZXRob2Q9XCJQT1NUXCIgY2xhc3NOYW1lPVwiaXRlbWZvcm1cIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YWl0ZW0ubWFwKChpdGVtcyxrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0ge3N0eWxlLm1hbmFnZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkl0ZW0gVGl0bGVcIiBuYW1lPVwidGl0bGVcIiBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluaXQgPSBkYXRhaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRba2V5XS5uYW1lID0gZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiUHJpY2VcIiAgbmFtZT1cInByaWNlXCIgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbml0ID0gZGF0YWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0W2tleV0ucHJpY2UgPSBlLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQbHVzU3ZnIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldGRhdGFJdGVtKFsuLi5kYXRhaXRlbSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjMWYxZjQ3XCIsIGNvbG9yOiBcIiNmZmZcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgYm9yZGVyUmFkaXVzOiBcIjI1cHhcIiB9fSBvbkNsaWNrPXsoZSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtLl9pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0RhdGFbXCJpdGVtc1wiXSA9IGRhdGFpdGVtIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXhpb3MucG9zdChgL2FwaS9hZGRGZWF0dXJlLyR7aW5pdC5faWR9YCxuZXdEYXRhKS50aGVuKChyZXNwb25zZSkgPT4gY29uc29sZS5sb2cocmVzcG9uc2UpIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmZWF0dXJlICYmIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5mZWF0dXJlfSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhY2tzdmcgZmlsbD1cIiMxZjFmNDdcIiAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlRXZlbnQoZSwgXCIzMjBweFwiLCBcIjE1NXB4XCIsIGZhbHNlLCBzdHlsZS5mZWF0dXJlKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUudXBwZXJjb250YWluZXJ9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7IGZvbnRTaXplOiBcIjMycHhcIiB9fT5BZGQgYSBmZWF0dXJlPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmFkZGluZ2Zvcm0xfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPk1haW4gdGl0bGU8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgIHBsYWNlaG9sZGVyPVwiVGl0bGVcIiBvbkNoYW5nZT17KGUpID0+IChzZXRBZGQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmFkZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWluVGl0bGU6ZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiSW1hZ2VMaW5rXCIgb25DaGFuZ2U9eyhlKSA9PiAoc2V0QWRkKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5hZGQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nTGluazplLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBheGlvcy5wb3N0KFwiL2FwaS9hZGRGZWF0dXJlXCIsYWRkKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5kYXRhLm1lc3NhZ2UgPT09IFwiRW50cnkgQWRkZWRcIikgc2V0SGFuZGxlcih0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+IFN1Ym1pdDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXIgJiYgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnN0YXR1c30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+RW50cnkgQWRkZWQ8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYWRtaW5pbmZvfT5cbiAgICAgICAgICAgICAgICA8U2lnbm91dCBmaWxsPVwiIzFmMWY0N1wiIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnBob3RvfT5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxoMT5SYWogQWdhcndhbDwvaDE+XG4gICAgICAgICAgICAgICAgPHA+YWdhcndhbHNhbmtldDI5QGdtYWlsLmNvbTwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaW5mb3NlY3Rpb259PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICApXG4gICAgZWxzZSBpZiAoIXRvZ2dsZSkgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYWRtaW5kYXNofT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5uYXZ9PlxuICAgICAgICAgICAgICAgIDxMb2dvIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLm9wdGlvbnN9ID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmFjdGl2ZX0gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiNmMmY2ZmZcIiwgYm9yZGVyUmFkaXVzOiBcIjE1cHhcIiB9fSBvbkNsaWNrPXsoKSA9PiB7IHNldFRvZ2dsZShmYWxzZSkgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RGFzaGljb24gZmlsbD1cIiMxZjFmNDdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7IGNvbG9yOlwiIzFmMWY0N1wiLGZvbnRXZWlnaHQ6NDAwLGZvbnRTaXplOlwiMjJweFwifX0+RGFzaGJvYXJkPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYWN0aXZlfSBvbkNsaWNrPXsoZSkgPT4geyBcbiAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUb2dnbGUoIXRvZ2dsZSkgXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZXR0aW5nSWNvbiBmaWxsPVwiI2YyZjZmZlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3sgY29sb3I6IFwiI2YyZjZmZlwiLCBmb250V2VpZ2h0OiA0MDAsIGZvbnRTaXplOiBcIjIycHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXR0aW5nc1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY2VudGVyfT5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS50ZXh0ZGF0YX0+XG4gICAgICAgICAgICAgICAgICAgPGgxPkhlbGxvLFJhajwvaDE+XG4gICAgICAgICAgICAgICAgICAgPHA+V2VsY29tZSBiYWNrITwvcD5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmFuYWx5dGljc30+XG4gICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnNhbGVzfT5cbiAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnNlY29uZGFyeX0+XG5cbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUudGhpcmR9PlxuXG4gICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYWRtaW5pbmZvfT5cbiAgICAgICAgICAgICAgICA8U2lnbm91dCBmaWxsPVwiIzFmMWY0N1wiIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnBob3RvfT5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxoMT5SYWogQWdhcndhbDwvaDE+XG4gICAgICAgICAgICAgICAgPHA+YWdhcndhbHNhbmtldDI5QGdtYWlsLmNvbTwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaW5mb3NlY3Rpb259PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIFxuXG5mdW5jdGlvbiBMb2dvKCkge1xuICAgIHJldHVybihcbiAgICAgICAgPHN2ZyB3aWR0aD1cIjE4NFwiIGhlaWdodD1cIjEyOVwiIHZpZXdCb3g9XCIwIDAgMTg0IDEyOVwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgPHBhdGggZD1cIk00MS40NjgyIDM1Ljg0M1Y0OS40MjI2QzQxLjQ2ODIgNTEuNjc4OCA0MC43NjAyIDUzLjQ2MyAzOS4zNDQyIDU0Ljc3NTFDMzcuOTM3NiA1Ni4wODczIDM2LjAxMTggNTYuNzQzNCAzMy41NjY5IDU2Ljc0MzRDMzEuMTU5NiA1Ni43NDM0IDI5LjI0OCA1Ni4xMDYyIDI3LjgzMiA1NC44MzE4QzI2LjQxNiA1My41NTc0IDI1LjY5MzggNTEuODA2MiAyNS42NjU1IDQ5LjU3ODRWMzUuODQzSDI5LjkxMzVWNDkuNDUwOUMyOS45MTM1IDUwLjgwMDkgMzAuMjM0NSA1MS43ODc0IDMwLjg3NjQgNTIuNDEwNEMzMS41Mjc4IDUzLjAyNCAzMi40MjQ2IDUzLjMzMDggMzMuNTY2OSA1My4zMzA4QzM1Ljk1NTIgNTMuMzMwOCAzNy4xNjgzIDUyLjA3NTMgMzcuMjA2IDQ5LjU2NDJWMzUuODQzSDQxLjQ2ODJaTTYxLjcxNzIgNTYuNDYwMkg1Ny40NjkyTDQ5LjE5OTcgNDIuODk0OFY1Ni40NjAySDQ0Ljk1MTZWMzUuODQzSDQ5LjE5OTdMNTcuNDgzNCA0OS40MzY4VjM1Ljg0M0g2MS43MTcyVjU2LjQ2MDJaTTY5Ljk0NDMgNTYuNDYwMkg2NS42OTYzVjM1Ljg0M0g2OS45NDQzVjU2LjQ2MDJaXCIgZmlsbD1cIiNGRUZFRkVcIiAvPlxuICAgICAgICAgICAgPHBhdGggZD1cIk04Ny40ODY3IDU2LjQ2MDJIODMuMjM4N1Y0Ny42MjQzSDc0Ljk1NVY1Ni40NjAySDcwLjcwNjlWMzUuODQzSDc0Ljk1NVY0NC4xOTc1SDgzLjIzODdWMzUuODQzSDg3LjQ4NjdWNTYuNDYwMlpNMTAzLjYxNSA0Ny41MjUxSDk1LjQ1ODlWNTMuMDQ3NkgxMDUuMDMxVjU2LjQ2MDJIOTEuMjEwOFYzNS44NDNIMTA1LjAwM1YzOS4yODM5SDk1LjQ1ODlWNDQuMTk3NUgxMDMuNjE1VjQ3LjUyNTFaTTExMS43NzEgNTMuMDQ3NkgxMjAuNzkxVjU2LjQ2MDJIMTA3LjUyM1YzNS44NDNIMTExLjc3MVY1My4wNDc2Wk0xMjcuNDg5IDQ5LjE5NlY1Ni40NjAySDEyMy4yNDFWMzUuODQzSDEzMS4yODRDMTMyLjgzMiAzNS44NDMgMTM0LjE5MiAzNi4xMjYyIDEzNS4zNjIgMzYuNjkyNkMxMzYuNTQyIDM3LjI1OSAxMzcuNDQ4IDM4LjA2NjIgMTM4LjA4MSAzOS4xMTRDMTM4LjcxMyA0MC4xNTI0IDEzOS4wMyA0MS4zMzcyIDEzOS4wMyA0Mi42NjgyQzEzOS4wMyA0NC42ODg0IDEzOC4zMzYgNDYuMjgzOCAxMzYuOTQ4IDQ3LjQ1NDNDMTM1LjU3IDQ4LjYxNTUgMTMzLjY1OCA0OS4xOTYgMTMxLjIxMyA0OS4xOTZIMTI3LjQ4OVpNMTI3LjQ4OSA0NS43NTUxSDEzMS4yODRDMTMyLjQwNyA0NS43NTUxIDEzMy4yNjIgNDUuNDkwOCAxMzMuODQ3IDQ0Ljk2MjJDMTM0LjQ0MiA0NC40MzM1IDEzNC43MzkgNDMuNjc4MyAxMzQuNzM5IDQyLjY5NjVDMTM0LjczOSA0MS42ODY0IDEzNC40NDIgNDAuODY5OSAxMzMuODQ3IDQwLjI0NjhDMTMzLjI1MiAzOS42MjM4IDEzMi40MzEgMzkuMzAyOCAxMzEuMzgzIDM5LjI4MzlIMTI3LjQ4OVY0NS43NTUxWlwiIGZpbGw9XCJ3aGl0ZVwiIC8+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9zdmc+XG5cbiAgICApXG59XG5mdW5jdGlvbiBEYXNoaWNvbih7ZmlsbH0pIHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxzdmcgdmVyc2lvbj1cIjEuMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI1XCIgaGVpZ2h0PVwiMjVcIiB2aWV3Qm94PVwiMCAwIDUxMi4wMDAwMDAgNTEyLjAwMDAwMFwiIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZCBtZWV0XCIgZmlsbD1cImJsdWVcIj5cblxuICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAuMDAwMDAwLDUxMi4wMDAwMDApIHNjYWxlKDAuMTAwMDAwLC0wLjEwMDAwMClcIiBmaWxsPVwiIzAwMDAwMFwiIHN0cm9rZT1cIm5vbmVcIj5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTI3NSA1MTA2IGMtMTExIC0zNSAtMTkwIC0xMDQgLTIzOSAtMjA2IGwtMzEgLTY1IDAgLTU3MCAwIC01NzAgMzMgLTY3IGM0MCAtODIgMTE5IC0xNTcgMjAwIC0xOTAgbDU3IC0yMyA4NDAgLTMgYzYwMyAtMiA4NTcgMCA5MDAgOCAxNjAgMzEgMjc0IDE0NSAzMDUgMzA1IDggNDIgMTAgMjE2IDggNTgwIC0zIDUxNyAtMyA1MjAgLTI2IDU3NyAtMzMgODEgLTEwOCAxNjAgLTE5MCAyMDAgbC02NyAzMyAtODc1IDIgYy02ODggMiAtODg0IC0xIC05MTUgLTExelwiIGZpbGw9IHtmaWxsfSAvPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMzA0OSA1MTA2IGMtMTA2IC0yOCAtMjA5IC0xMjEgLTI1MSAtMjI0IGwtMjMgLTU3IC0zIC0xMTYwIGMtMiAtODM4IDAgLTExNzcgOCAtMTIyMCAzMSAtMTYwIDE0NSAtMjc0IDMwNSAtMzA1IDQzIC04IDI5NyAtMTAgOTAwIC04IGw4NDAgMyA1NyAyMyBjODEgMzMgMTYwIDEwOCAyMDAgMTkwIGwzMyA2NyAwIDEyMTAgMCAxMjEwIC0zMSA2NSBjLTQwIDg0IC0xMDAgMTQ0IC0xODIgMTgzIGwtNjcgMzIgLTg3MCAyIGMtNjY3IDEgLTg4MSAtMSAtOTE2IC0xMXpcIiBmaWxsPXtmaWxsfS8+XG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk0zMDAgMjk3OSBjLTExMiAtMjIgLTIxNyAtMTA3IC0yNjggLTIxNyBsLTI3IC01NyAwIC0xMjEwIDAgLTEyMTAgMzEgLTY1IGMzOSAtODMgMTAxIC0xNDUgMTg0IC0xODQgbDY1IC0zMSA4OTAgMCA4OTAgMCA2NyAzMyBjODIgNDAgMTU3IDExOSAxOTAgMjAwIGwyMyA1NyAzIDExNjAgYzIgODM4IDAgMTE3NyAtOCAxMjIwIC0zMCAxNTcgLTE0MiAyNzEgLTI5OCAzMDQgLTY0IDEzIC0xNjcyIDE0IC0xNzQyIDB6XCIgZmlsbD17ZmlsbH0gLz5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTMwNjUgMTY5NiBjLTE1MCAtMzcgLTI1NSAtMTQ4IC0yODUgLTMwMSAtOCAtNDIgLTEwIC0yMTUgLTggLTU4MCAzIC01MTcgMyAtNTIwIDI2IC01NzcgMzMgLTgxIDEwOCAtMTYwIDE5MCAtMjAwIGw2NyAtMzMgODkwIDAgODkwIDAgNjcgMzIgYzgyIDM5IDE0MiA5OSAxODIgMTgzIGwzMSA2NSAwIDU3MCAwIDU3MCAtMzMgNjcgYy00MCA4MiAtMTE5IDE1NyAtMjAwIDE5MCBsLTU3IDIzIC04NTUgMiBjLTY0OSAxIC04NjcgLTEgLTkwNSAtMTF6XCIgZmlsbD17ZmlsbH0gLz5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxufVxuZnVuY3Rpb24gU2V0dGluZ0ljb24oe2ZpbGx9KSB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI1XCIgaGVpZ2h0PVwiMjVcIiBmaWxsPXtmaWxsfSBjbGFzc05hbWU9XCJiaSBiaS1nZWFyLWZpbGxcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTkuNDA1IDEuMDVjLS40MTMtMS40LTIuMzk3LTEuNC0yLjgxIDBsLS4xLjM0YTEuNDY0IDEuNDY0IDAgMCAxLTIuMTA1Ljg3MmwtLjMxLS4xN2MtMS4yODMtLjY5OC0yLjY4Ni43MDUtMS45ODcgMS45ODdsLjE2OS4zMTFjLjQ0Ni44Mi4wMjMgMS44NDEtLjg3MiAyLjEwNWwtLjM0LjFjLTEuNC40MTMtMS40IDIuMzk3IDAgMi44MWwuMzQuMWExLjQ2NCAxLjQ2NCAwIDAgMSAuODcyIDIuMTA1bC0uMTcuMzFjLS42OTggMS4yODMuNzA1IDIuNjg2IDEuOTg3IDEuOTg3bC4zMTEtLjE2OWExLjQ2NCAxLjQ2NCAwIDAgMSAyLjEwNS44NzJsLjEuMzRjLjQxMyAxLjQgMi4zOTcgMS40IDIuODEgMGwuMS0uMzRhMS40NjQgMS40NjQgMCAwIDEgMi4xMDUtLjg3MmwuMzEuMTdjMS4yODMuNjk4IDIuNjg2LS43MDUgMS45ODctMS45ODdsLS4xNjktLjMxMWExLjQ2NCAxLjQ2NCAwIDAgMSAuODcyLTIuMTA1bC4zNC0uMWMxLjQtLjQxMyAxLjQtMi4zOTcgMC0yLjgxbC0uMzQtLjFhMS40NjQgMS40NjQgMCAwIDEtLjg3Mi0yLjEwNWwuMTctLjMxYy42OTgtMS4yODMtLjcwNS0yLjY4Ni0xLjk4Ny0xLjk4N2wtLjMxMS4xNjlhMS40NjQgMS40NjQgMCAwIDEtMi4xMDUtLjg3MmwtLjEtLjM0ek04IDEwLjkzYTIuOTI5IDIuOTI5IDAgMSAxIDAtNS44NiAyLjkyOSAyLjkyOSAwIDAgMSAwIDUuODU4elwiIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcbn1cbmZ1bmN0aW9uIFNpZ25vdXQoe2ZpbGx9KXtcbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICBcbiAgICAgICAgPHN2ZyBvbkNsaWNrPXsoKSA9PiBkYXRhLnNldE5hdighbmF2KX0gYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiB3aWR0aD1cIjMwXCIgaGVpZ2h0PVwiMzBcIiBkYXRhLXByZWZpeD1cImZhclwiIGRhdGEtaWNvbj1cInVzZXItY2lyY2xlXCIgY2xhc3NOYW1lPVwic3ZnLWlubGluZS0tZmEgZmEtdXNlci1jaXJjbGUgZmEtdy0xNlwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA0OTYgNTEyXCI+PHBhdGggZmlsbD17ZmlsbH0gZD1cIk0yNDggMTA0Yy01MyAwLTk2IDQzLTk2IDk2czQzIDk2IDk2IDk2IDk2LTQzIDk2LTk2LTQzLTk2LTk2LTk2em0wIDE0NGMtMjYuNSAwLTQ4LTIxLjUtNDgtNDhzMjEuNS00OCA0OC00OCA0OCAyMS41IDQ4IDQ4LTIxLjUgNDgtNDggNDh6bTAtMjQwQzExMSA4IDAgMTE5IDAgMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzg1IDggMjQ4IDh6bTAgNDQ4Yy00OS43IDAtOTUuMS0xOC4zLTEzMC4xLTQ4LjQgMTQuOS0yMyA0MC40LTM4LjYgNjkuNi0zOS41IDIwLjggNi40IDQwLjYgOS42IDYwLjUgOS42czM5LjctMy4xIDYwLjUtOS42YzI5LjIgMSA1NC43IDE2LjUgNjkuNiAzOS41LTM1IDMwLjEtODAuNCA0OC40LTEzMC4xIDQ4LjR6bTE2Mi43LTg0LjFjLTI0LjQtMzEuNC02Mi4xLTUxLjktMTA1LjEtNTEuOS0xMC4yIDAtMjYgOS42LTU3LjYgOS42LTMxLjUgMC00Ny40LTkuNi01Ny42LTkuNi00Mi45IDAtODAuNiAyMC41LTEwNS4xIDUxLjlDNjEuOSAzMzkuMiA0OCAyOTkuMiA0OCAyNTZjMC0xMTAuMyA4OS43LTIwMCAyMDAtMjAwczIwMCA4OS43IDIwMCAyMDBjMCA0My4yLTEzLjkgODMuMi0zNy4zIDExNS45elwiPjwvcGF0aD48L3N2Zz5cbiAgICApXG59XG5mdW5jdGlvbiBQbHVzU3ZnKHtmaWxsLG9uQ2xpY2t9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHN2ZyBvbkNsaWNrPXtvbkNsaWNrfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIzMFwiIGhlaWdodD1cIjMwXCIgZmlsbD17ZmlsbH0gY2xhc3NOYW1lPVwiYmkgYmktcGx1cy1jaXJjbGUtZmlsbFwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTYgOEE4IDggMCAxIDEgMCA4YTggOCAwIDAgMSAxNiAwek04LjUgNC41YS41LjUgMCAwIDAtMSAwdjNoLTNhLjUuNSAwIDAgMCAwIDFoM3YzYS41LjUgMCAwIDAgMSAwdi0zaDNhLjUuNSAwIDAgMCAwLTFoLTN2LTN6XCIgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxufVxuZnVuY3Rpb24gQmFja3N2Zyh7ZmlsbCxvbkNsaWNrfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIG9uQ2xpY2s9e29uQ2xpY2t9IHdpZHRoPVwiMzBcIiBoZWlnaHQ9XCIzMFwiIGZpbGw9e2ZpbGx9IGNsYXNzTmFtZT1cImJpIGJpLWNhcmV0LWxlZnQtc3F1YXJlXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0xNCAxYTEgMSAwIDAgMSAxIDF2MTJhMSAxIDAgMCAxLTEgMUgyYTEgMSAwIDAgMS0xLTFWMmExIDEgMCAwIDEgMS0xaDEyek0yIDBhMiAyIDAgMCAwLTIgMnYxMmEyIDIgMCAwIDAgMiAyaDEyYTIgMiAwIDAgMCAyLTJWMmEyIDIgMCAwIDAtMi0ySDJ6XCIgLz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTAuMjA1IDEyLjQ1NkEuNS41IDAgMCAwIDEwLjUgMTJWNGEuNS41IDAgMCAwLS44MzItLjM3NGwtNC41IDRhLjUuNSAwIDAgMCAwIC43NDhsNC41IDRhLjUuNSAwIDAgMCAuNTM3LjA4MnpcIiAvPlxuICAgICAgICA8L3N2Zz5cbiAgICApXG59XG5mdW5jdGlvbiBEZWxldGVTdmcoe2ZpbGwsb25DbGljayxzdHlsZX0pIHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxzdmcgc3R5bGU9e3twb3NpdGlvbjpcInN0YXRpYyAhaW1wb3J0YW50XCJ9fSBvbkNsaWNrPXtvbkNsaWNrfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNVwiIGhlaWdodD1cIjI1XCIgZmlsbD17ZmlsbH0gY2xhc3NOYW1lPVwiYmkgYmktdHJhc2hcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTUuNSA1LjVBLjUuNSAwIDAgMSA2IDZ2NmEuNS41IDAgMCAxLTEgMFY2YS41LjUgMCAwIDEgLjUtLjV6bTIuNSAwYS41LjUgMCAwIDEgLjUuNXY2YS41LjUgMCAwIDEtMSAwVjZhLjUuNSAwIDAgMSAuNS0uNXptMyAuNWEuNS41IDAgMCAwLTEgMHY2YS41LjUgMCAwIDAgMSAwVjZ6XCIgLz5cbiAgICAgICAgICAgIDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTQuNSAzYTEgMSAwIDAgMS0xIDFIMTN2OWEyIDIgMCAwIDEtMiAySDVhMiAyIDAgMCAxLTItMlY0aC0uNWExIDEgMCAwIDEtMS0xVjJhMSAxIDAgMCAxIDEtMUg2YTEgMSAwIDAgMSAxLTFoMmExIDEgMCAwIDEgMSAxaDMuNWExIDEgMCAwIDEgMSAxdjF6TTQuMTE4IDQgNCA0LjA1OVYxM2ExIDEgMCAwIDAgMSAxaDZhMSAxIDAgMCAwIDEtMVY0LjA1OUwxMS44ODIgNEg0LjExOHpNMi41IDNWMmgxMXYxaC0xMXpcIiAvPlxuICAgICAgICA8L3N2Zz5cbiAgICApXG59IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYWRtaW5kYXNoXCI6IFwiYWRtaW5kYXNoX2FkbWluZGFzaF9fMVZ3aUZcIixcblx0XCJuYXZcIjogXCJhZG1pbmRhc2hfbmF2X18zNkVxRFwiLFxuXHRcImFkbWluaW5mb1wiOiBcImFkbWluZGFzaF9hZG1pbmluZm9fXzFObGhxXCIsXG5cdFwidXNlcm5hdlwiOiBcImFkbWluZGFzaF91c2VybmF2X18zMmMwalwiLFxuXHRcImNlbnRlclwiOiBcImFkbWluZGFzaF9jZW50ZXJfXzFESFkwXCIsXG5cdFwiYWN0aXZlXCI6IFwiYWRtaW5kYXNoX2FjdGl2ZV9fMjVSRkdcIixcblx0XCJ0ZXh0ZGF0YVwiOiBcImFkbWluZGFzaF90ZXh0ZGF0YV9fMWxxRHBcIixcblx0XCJhbmFseXRpY3NcIjogXCJhZG1pbmRhc2hfYW5hbHl0aWNzX18xZGxHR1wiLFxuXHRcInNhbGVzXCI6IFwiYWRtaW5kYXNoX3NhbGVzX19yXzNubFwiLFxuXHRcInNlY29uZGFyeVwiOiBcImFkbWluZGFzaF9zZWNvbmRhcnlfXzJLSEFhXCIsXG5cdFwidGhpcmRcIjogXCJhZG1pbmRhc2hfdGhpcmRfX05xMk04XCIsXG5cdFwicGhvdG9cIjogXCJhZG1pbmRhc2hfcGhvdG9fXzJfTkJ0XCIsXG5cdFwiaW5mb3NlY3Rpb25cIjogXCJhZG1pbmRhc2hfaW5mb3NlY3Rpb25fXzNrVWNEXCIsXG5cdFwib3B0aW9uc1wiOiBcImFkbWluZGFzaF9vcHRpb25zX18xXzFuWlwiLFxuXHRcImZlYXR1cmVzXCI6IFwiYWRtaW5kYXNoX2ZlYXR1cmVzX18zcEM3UVwiLFxuXHRcImZlYXR1cmVcIjogXCJhZG1pbmRhc2hfZmVhdHVyZV9fMkc4TWpcIixcblx0XCJmZWF0dXJlZm9ybVwiOiBcImFkbWluZGFzaF9mZWF0dXJlZm9ybV9fMk8zQkFcIixcblx0XCJnb2JpZ2dlclwiOiBcImFkbWluZGFzaF9nb2JpZ2dlcl9fM3dmZFpcIixcblx0XCJhZGRpbmdmb3JtXCI6IFwiYWRtaW5kYXNoX2FkZGluZ2Zvcm1fXzFmWEx4XCIsXG5cdFwiZ29zbWFsbGVyXCI6IFwiYWRtaW5kYXNoX2dvc21hbGxlcl9fTkpJdWNcIixcblx0XCJ1cHBlcmNvbnRhaW5lclwiOiBcImFkbWluZGFzaF91cHBlcmNvbnRhaW5lcl9fMmZjaWJcIixcblx0XCJ1cHBlcmNvbnRhaW5lcmFjdGl2ZVwiOiBcImFkbWluZGFzaF91cHBlcmNvbnRhaW5lcmFjdGl2ZV9fM3FQdzRcIixcblx0XCJhZGRpbmdmb3JtMVwiOiBcImFkbWluZGFzaF9hZGRpbmdmb3JtMV9fMUZqbzVcIixcblx0XCJhZGRpbmdmb3JtMlwiOiBcImFkbWluZGFzaF9hZGRpbmdmb3JtMl9fT0RwRC1cIixcblx0XCJhZGRpbmdmb3JtM1wiOiBcImFkbWluZGFzaF9hZGRpbmdmb3JtM19fMnhXUGdcIixcblx0XCJpdGVtc1wiOiBcImFkbWluZGFzaF9pdGVtc19fY1RPZGxcIixcblx0XCJhZGRpbmdJdGVtc1wiOiBcImFkbWluZGFzaF9hZGRpbmdJdGVtc19fM1hrR1RcIixcblx0XCJzdWJJdGVtc1wiOiBcImFkbWluZGFzaF9zdWJJdGVtc19fcDh2ZlJcIixcblx0XCJtYW5hZ2VcIjogXCJhZG1pbmRhc2hfbWFuYWdlX18yVGJUOFwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpxdWVyeVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9keW5hbWljXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9