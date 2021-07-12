exports.id = "components_admincontrols_jsx";
exports.ids = ["components_admincontrols_jsx"];
exports.modules = {

/***/ "./components/admincontrols.jsx":
/*!**************************************!*\
  !*** ./components/admincontrols.jsx ***!
  \**************************************/
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


var _jsxFileName = "/home/sanket2904/unihelp_new/components/admincontrols.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const Loader = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => __webpack_require__.e(/*! import() */ "components_loader_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./loader */ "./components/loader.jsx")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ./loader */ "./components/loader.jsx")],
    modules: ["../components/admincontrols.jsx -> " + "./loader"]
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
                  axios__WEBPACK_IMPORTED_MODULE_4___default().post("/api/addFeature", add, {// headers: {
                    //     Authorization: `Bearer ${window.session.token}`
                    // }
                  }).then(res => {
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
      className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().admininfo),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Signout, {
        fill: "#1f1f47"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 307,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().photo)
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
        className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().infosection),
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
    className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().admindash),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().nav),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Logo, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 327,
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
          className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().active),
          onClick: e => {
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
      className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().center),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().textdata),
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
        className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().analytics),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().sales)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 356,
          columnNumber: 20
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().secondary)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 359,
          columnNumber: 20
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().third)
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
      className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().admininfo),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Signout, {
        fill: "#1f1f47"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 369,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().photo)
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
        className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().infosection),
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
      lineNumber: 414,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 413,
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
      lineNumber: 422,
      columnNumber: 268
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 422,
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
      lineNumber: 428,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 427,
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


/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bmloZWxwLy4vY29tcG9uZW50cy9hZG1pbmNvbnRyb2xzLmpzeCIsIndlYnBhY2s6Ly91bmloZWxwLy4vc3R5bGVzL2FkbWluZGFzaC5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbIkxvYWRlciIsImR5bmFtaWMiLCJBZG1pbkRhc2giLCJ0b2dnbGUiLCJzZXRUb2dnbGUiLCJ1c2VTdGF0ZSIsIm5hdiIsInNldE5hdiIsImZlYXR1cmUiLCJzZXRGZWF0dXJlIiwiYWRkIiwic2V0QWRkIiwibWFpblRpdGxlIiwiaW1nTGluayIsImluaXQiLCJzZXRJbml0IiwiZmV0Y2hlZERhdGEiLCJpZCIsImRhdGEiLCJheGlvcyIsInRoZW4iLCJyZXNwb25zZSIsImRhdGFpdGVtIiwic2V0ZGF0YUl0ZW0iLCJuYW1lIiwicHJpY2UiLCJuZXdEYXRhIiwic2V0bmV3RGF0YSIsInRpdGxlIiwiRGVzY3JpcHRpb24iLCJpbWFnZUxpbmsiLCJpdGVtcyIsImVkaXQiLCJzZXRFZGl0Iiwic2V0RGF0YSIsInVzZUVmZmVjdCIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImhhbmRsZXIiLCJzZXRIYW5kbGVyIiwiY2hhbmdlRXZlbnQiLCJlIiwiaGVpZ2h0Iiwid2lkdGgiLCJjbGFzc05hbWUiLCJzZXRUaW1lb3V0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0Iiwic3R5bGUiLCIkIiwiYWRkQ2xhc3MiLCJyZW1vdmUiLCJ1c2VybmF2IiwiY29sb3IiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJtYXAiLCJpdGVtIiwiX2lkIiwiZ3JpZENvbHVtbiIsImp1c3RpZnlTZWxmIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsIm1hcmdpbiIsImRpc3BsYXkiLCJwYWRkaW5nIiwiZGF0YWEiLCJwb3NpdGlvbiIsImFsaWduU2VsZiIsImZsZXhEaXJlY3Rpb24iLCJ0YXJnZXQiLCJ2YWx1ZSIsImtleSIsInByZXZlbnREZWZhdWx0IiwicmVzIiwibWVzc2FnZSIsInBob3RvIiwic2FsZXMiLCJzZWNvbmRhcnkiLCJ0aGlyZCIsIkxvZ28iLCJEYXNoaWNvbiIsImZpbGwiLCJTZXR0aW5nSWNvbiIsIlNpZ25vdXQiLCJQbHVzU3ZnIiwib25DbGljayIsIkJhY2tzdmciLCJEZWxldGVTdmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUEsTUFBTUEsTUFBTSxHQUFHQyxtREFBTyxDQUFDLE1BQU0sNkpBQVA7QUFBQTtBQUFBLHdDQUFjLHlDQUFkO0FBQUEsc0RBQWMsVUFBZDtBQUFBO0FBQUEsRUFBdEI7QUFDZSxTQUFTQyxTQUFULEdBQXFCO0FBRWhDLFFBQU07QUFBQSxPQUFDQyxNQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFxQkMsK0NBQVEsQ0FBQyxLQUFELENBQW5DO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLEdBQUQ7QUFBQSxPQUFLQztBQUFMLE1BQWVGLCtDQUFRLENBQUMsS0FBRCxDQUE3QjtBQUNBLFFBQU07QUFBQSxPQUFDRyxPQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUF1QkosK0NBQVEsQ0FBQyxLQUFELENBQXJDO0FBQ0EsUUFBTTtBQUFBLE9BQUNLLEdBQUQ7QUFBQSxPQUFLQztBQUFMLE1BQWVOLCtDQUFRLENBQUM7QUFDMUJPLGFBQVMsRUFBQyxFQURnQjtBQUUxQkMsV0FBTyxFQUFDO0FBRmtCLEdBQUQsQ0FBN0I7QUFNQSxNQUFJO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU1DO0FBQU4sTUFBaUJWLCtDQUFRLENBQUMsRUFBRCxDQUE3Qjs7QUFDQSxRQUFNVyxXQUFXLEdBQUcsTUFBT0MsRUFBUCxJQUFjO0FBQzlCLFVBQU1DLElBQUksR0FBR0MsZ0RBQUEsQ0FBVyxtQkFBa0JGLEVBQUcsRUFBaEMsRUFBbUNHLElBQW5DLENBQXdDQyxRQUFRLElBQUk7QUFDN0ROLGFBQU8s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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiY29tcG9uZW50c19hZG1pbmNvbnRyb2xzX2pzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi4vc3R5bGVzL2FkbWluZGFzaC5tb2R1bGUuY3NzXCJcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIlxuaW1wb3J0ICQsIHsgZGF0YSB9IGZyb20gXCJqcXVlcnlcIlxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXG5cblxuXG5jb25zdCBMb2FkZXIgPSBkeW5hbWljKCgpID0+IGltcG9ydChcIi4vbG9hZGVyXCIpKVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRtaW5EYXNoKCkge1xuICAgIFxuICAgIGNvbnN0IFt0b2dnbGUsc2V0VG9nZ2xlXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IFtuYXYsc2V0TmF2XSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IFtmZWF0dXJlLHNldEZlYXR1cmVdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW2FkZCxzZXRBZGRdID0gdXNlU3RhdGUoe1xuICAgICAgICBtYWluVGl0bGU6XCJcIixcbiAgICAgICAgaW1nTGluazpcIlwiXG4gICAgICAgIFxuXG4gICAgfSlcbiAgICBsZXQgW2luaXQsc2V0SW5pdF0gPSB1c2VTdGF0ZShbXSlcbiAgICBjb25zdCBmZXRjaGVkRGF0YSA9IGFzeW5jIChpZCkgPT4ge1xuICAgICAgICBjb25zdCBkYXRhID0gYXhpb3MuZ2V0KGAvYXBpL2FkZEZlYXR1cmUvJHtpZH1gKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIHNldEluaXQocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICBsZXQgW2RhdGFpdGVtLCBzZXRkYXRhSXRlbV0gPSB1c2VTdGF0ZShbe1xuICAgICAgICBuYW1lOlwiXCIsXG4gICAgICAgIHByaWNlOlwiXCJcbiAgICB9XSlcbiAgICBsZXQgW25ld0RhdGEsIHNldG5ld0RhdGFdID0gdXNlU3RhdGUoe1xuICAgICAgICB0aXRsZTpcIlwiLFxuICAgICAgICBEZXNjcmlwdGlvbjpcIlwiLFxuICAgICAgICBwcmljZTpcIlwiLFxuICAgICAgICBpbWFnZUxpbms6XCJcIixcbiAgICAgICAgaXRlbXM6ZGF0YWl0ZW1cbiAgICB9KVxuICAgIFxuICAgIGxldCBbZWRpdCxzZXRFZGl0XSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGxldCBbZGF0YSxzZXREYXRhXSA9IHVzZVN0YXRlKFtdKVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGF4aW9zLmdldChcIi9hcGkvYWRkRmVhdHVyZVwiKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIHNldERhdGEocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgICAgIFxuXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInR1bXNlIG5haSBobyBwYXllZ2FcIilcbiAgICAgICAgfSlcbiAgICB9LFtdKVxuICAgIFxuICAgIGNvbnN0IFtoYW5kbGVyLHNldEhhbmRsZXJdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgXG4gICBcbiAgICBhc3luYyBmdW5jdGlvbiBjaGFuZ2VFdmVudChlLGhlaWdodCx3aWR0aCxmZWF0dXJlLGNsYXNzTmFtZSkge1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGlmKGZlYXR1cmUpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmFkbWluZGFzaF9mZWF0dXJlX18yRzhNamApLmNsYXNzTGlzdC5hZGQoc3R5bGUuZ29iaWdnZXIpXG4gICAgICAgICAgICAgICAgJChgLiR7c3R5bGUudXBwZXJjb250YWluZXJ9YCkuYWRkQ2xhc3MoYCR7c3R5bGUudXBwZXJjb250YWluZXJhY3RpdmV9YClcbiAgICAgICAgICAgIH0sMTUyKVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5hZG1pbmRhc2hfZmVhdHVyZV9fMkc4TWpgKS5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlLmdvYmlnZ2VyKVxuXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmFkbWluZGFzaF9mZWF0dXJlX18yRzhNamApLmNsYXNzTGlzdC5hZGQoc3R5bGUuZ29zbWFsbGVyKVxuICAgICAgICAgICAgfSwxNTIpXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBzZXRGZWF0dXJlKGZlYXR1cmUpXG4gICAgICAgICAgICBcbiAgICAgICAgfSwxNTApXG4gICAgfVxuICAgIGlmKHRvZ2dsZSkgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmFkbWluZGFzaH0+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmF2ICYmIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS51c2VybmF2fSA+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5uYXZ9PlxuICAgICAgICAgICAgICAgIDxMb2dvIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLm9wdGlvbnN9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYWN0aXZlfSBvbkNsaWNrPXsoKSA9PiB7c2V0VG9nZ2xlKGZhbHNlKX19ID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEYXNoaWNvbiBmaWxsPVwiI2YyZjZmZlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3sgY29sb3I6IFwiI2YyZjZmZlwiLCBmb250V2VpZ2h0OiA0MDAsIGZvbnRTaXplOiBcIjIycHhcIiB9fT5EYXNoYm9hcmQ8L2gxPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYWN0aXZlfSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2YyZjZmZlwiLCBib3JkZXJSYWRpdXM6IFwiMTVweFwiIH19IG9uQ2xpY2s9eygpID0+IHsgc2V0VG9nZ2xlKHRydWUpIH19ID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZXR0aW5nSWNvbiBmaWxsPVwiIzFmMWY0N1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3sgY29sb3I6IFwiIzFmMWY0N1wiLCBmb250V2VpZ2h0OiA0MDAsIGZvbnRTaXplOiBcIjIycHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXR0aW5nc1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNlbnRlcn0+XG4gICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7Zm9udFNpemU6XCIzNnB4XCJ9fT5TZXR0aW5nczwvaDE+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmZlYXR1cmVzfT5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgeyFmZWF0dXJlICYmIDw+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZmVhdHVyZX0gb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlRXZlbnQoZSwgXCI3MDBweFwiLCBcIjcwMHB4XCIsIHRydWUsc3R5bGUuZmVhdHVyZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFBsdXNTdmcgZmlsbD1cIiMxZjFmNDdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPkFkZCBhIGZlYXR1cmU8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWVkaXQpIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZmVhdHVyZX0ga2V5PXtpdGVtLl9pZH0gaWQ9e2l0ZW0uX2lkfSBvbkNsaWNrPXsgYXN5bmMgKCkgPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS9hZGRGZWF0dXJlLyR7aXRlbS5faWR9YCkudGhlbihhc3luYyByZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHNldEluaXQocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RWRpdCh0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3sgZ3JpZENvbHVtbjogXCIxLy0xXCIsIGp1c3RpZnlTZWxmOlwiY2VudGVyXCIgfX0gPntpdGVtLnRpdGxlfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZS5mZWF0dXJlfSAke3N0eWxlLmdvYmlnZ2VyfSBgfSBrZXk9e2l0ZW0uZGF0YS5faWR9IHN0eWxlPXt7Z3JpZFRlbXBsYXRlQ29sdW1uczpcIjFmciAxZnIgMWZyXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFja3N2ZyBmaWxsPVwiIzFmMWY0N1wiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEVkaXQoZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRtaW5kYXNoX2dvYmlnZ2VyX18zd2ZkWlwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiYWRtaW5kYXNoX2dvYmlnZ2VyX18zd2ZkWlwiKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gLz4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLml0ZW1zfSBzdHlsZT17e2p1c3RpZnlTZWxmOlwibGVmdFwiLG1hcmdpbjpcIjUwcHhcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0LmRhdGEubWFwKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtkYXRhLl9pZH0gIHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIn19ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjpcImFsaWNlYmx1ZVwiLHBhZGRpbmc6XCIyMHB4IDQwcHhcIixtYXJnaW46XCIxNXB4IDBcIn19IG9uQ2xpY2s9eyBhc3luYyAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YWEgPSBhd2FpdCBheGlvcy5nZXQoYC9hcGkvYWRkRmVhdHVyZS8ke2luaXQuX2lkfS8ke2RhdGEuX2lkfS9pdGVtc2ApLnRoZW4oIGFzeW5jIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBzZXRJbml0KHJlc3BvbnNlLmRhdGEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSA+e2RhdGEudGl0bGUgfHwgZGF0YS5uYW1lfSA8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGVsZXRlU3ZnIGZpbGw9XCJibGFja1wiIHN0eWxlPXt7cG9zaXRpb246XCJzdGF0aWMgIWltcG9ydGFudFwifX0gb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBheGlvcy5kZWxldGUoYC9hcGkvYWRkRmVhdHVyZS8ke2luaXQuX2lkfS8ke2RhdGEuX2lkfWApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmFkZGluZ0l0ZW1zfSBzdHlsZT17e2p1c3RpZnlTZWxmOlwiY2VudGVyXCIsYWxpZ25TZWxmOlwiY2VudGVyXCIsZ3JpZENvbHVtbjpcIjIvM1wiLGRpc3BsYXk6XCJmbGV4XCIsZmxleERpcmVjdGlvbjpcImNvbHVtblwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5BZGRpbmcgYW4gRW50cnk8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlRpdGxlXCIgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRuZXdEYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5uZXdEYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOmUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkRlc2NpcHRpb25cIiBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldG5ld0RhdGEoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLm5ld0RhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVzY3JpcHRpb246IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlByaWNlXCIgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRuZXdEYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5uZXdEYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJJbWFnZUxpbmtcIiBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldG5ld0RhdGEoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLm5ld0RhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VMaW5rOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxidXR0b24gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOlwiIzFmMWY0N1wiLGNvbG9yOlwiI2ZmZlwiLGhlaWdodDpcIjQwcHhcIixib3JkZXJSYWRpdXM6XCIyNXB4XCJ9fT5TdWJtaXQ8L2J1dHRvbj4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnN1Ykl0ZW1zfSBzdHlsZT17e2dyaWRDb2x1bW46XCIzXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPkFkZCBJdGVtczwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIi9hcGkvdGVzdERhdGFiYXNlXCIgbWV0aG9kPVwiUE9TVFwiIGNsYXNzTmFtZT1cIml0ZW1mb3JtXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFpdGVtLm1hcCgoaXRlbXMsa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IHtzdHlsZS5tYW5hZ2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJJdGVtIFRpdGxlXCIgbmFtZT1cInRpdGxlXCIgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbml0ID0gZGF0YWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0W2tleV0ubmFtZSA9IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlByaWNlXCIgIG5hbWU9XCJwcmljZVwiIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5pdCA9IGRhdGFpdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdFtrZXldLnByaWNlID0gZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2RpdiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGx1c1N2ZyBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRkYXRhSXRlbShbLi4uZGF0YWl0ZW0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzFmMWY0N1wiLCBjb2xvcjogXCIjZmZmXCIsIGhlaWdodDogXCI0MHB4XCIsIGJvcmRlclJhZGl1czogXCIyNXB4XCIgfX0gb25DbGljaz17KGUpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coaXRlbS5faWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdEYXRhW1wiaXRlbXNcIl0gPSBkYXRhaXRlbSBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF4aW9zLnBvc3QoYC9hcGkvYWRkRmVhdHVyZS8ke2luaXQuX2lkfWAsbmV3RGF0YSkudGhlbigocmVzcG9uc2UpID0+IGNvbnNvbGUubG9nKHJlc3BvbnNlKSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZSAmJiA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZmVhdHVyZX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYWNrc3ZnIGZpbGw9XCIjMWYxZjQ3XCIgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZUV2ZW50KGUsIFwiMzIwcHhcIiwgXCIxNTVweFwiLCBmYWxzZSwgc3R5bGUuZmVhdHVyZSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnVwcGVyY29udGFpbmVyfSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyBmb250U2l6ZTogXCIzMnB4XCIgfX0+QWRkIGEgZmVhdHVyZTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5hZGRpbmdmb3JtMX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5NYWluIHRpdGxlPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICBwbGFjZWhvbGRlcj1cIlRpdGxlXCIgb25DaGFuZ2U9eyhlKSA9PiAoc2V0QWRkKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5hZGQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFpblRpdGxlOmUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkltYWdlTGlua1wiIG9uQ2hhbmdlPXsoZSkgPT4gKHNldEFkZCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uYWRkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZ0xpbms6ZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXhpb3MucG9zdChcIi9hcGkvYWRkRmVhdHVyZVwiLCBhZGQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3dpbmRvdy5zZXNzaW9uLnRva2VufWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5kYXRhLm1lc3NhZ2UgPT09IFwiRW50cnkgQWRkZWRcIikgc2V0SGFuZGxlcih0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+IFN1Ym1pdDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXIgJiYgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnN0YXR1c30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+RW50cnkgQWRkZWQ8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYWRtaW5pbmZvfT5cbiAgICAgICAgICAgICAgICA8U2lnbm91dCBmaWxsPVwiIzFmMWY0N1wiIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnBob3RvfT5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxoMT5SYWogQWdhcndhbDwvaDE+XG4gICAgICAgICAgICAgICAgPHA+YWdhcndhbHNhbmtldDI5QGdtYWlsLmNvbTwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaW5mb3NlY3Rpb259PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICApXG4gICAgZWxzZSBpZiAoIXRvZ2dsZSkgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYWRtaW5kYXNofT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5uYXZ9PlxuICAgICAgICAgICAgICAgIDxMb2dvIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLm9wdGlvbnN9ID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmFjdGl2ZX0gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiNmMmY2ZmZcIiwgYm9yZGVyUmFkaXVzOiBcIjE1cHhcIiB9fSBvbkNsaWNrPXsoKSA9PiB7IHNldFRvZ2dsZShmYWxzZSkgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RGFzaGljb24gZmlsbD1cIiMxZjFmNDdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7IGNvbG9yOlwiIzFmMWY0N1wiLGZvbnRXZWlnaHQ6NDAwLGZvbnRTaXplOlwiMjJweFwifX0+RGFzaGJvYXJkPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYWN0aXZlfSBvbkNsaWNrPXsoZSkgPT4geyBcbiAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUb2dnbGUoIXRvZ2dsZSkgXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZXR0aW5nSWNvbiBmaWxsPVwiI2YyZjZmZlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3sgY29sb3I6IFwiI2YyZjZmZlwiLCBmb250V2VpZ2h0OiA0MDAsIGZvbnRTaXplOiBcIjIycHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXR0aW5nc1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY2VudGVyfT5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS50ZXh0ZGF0YX0+XG4gICAgICAgICAgICAgICAgICAgPGgxPkhlbGxvLFJhajwvaDE+XG4gICAgICAgICAgICAgICAgICAgPHA+V2VsY29tZSBiYWNrITwvcD5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmFuYWx5dGljc30+XG4gICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnNhbGVzfT5cbiAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnNlY29uZGFyeX0+XG5cbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUudGhpcmR9PlxuXG4gICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYWRtaW5pbmZvfT5cbiAgICAgICAgICAgICAgICA8U2lnbm91dCBmaWxsPVwiIzFmMWY0N1wiIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnBob3RvfT5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxoMT5SYWogQWdhcndhbDwvaDE+XG4gICAgICAgICAgICAgICAgPHA+YWdhcndhbHNhbmtldDI5QGdtYWlsLmNvbTwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaW5mb3NlY3Rpb259PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIFxuXG5mdW5jdGlvbiBMb2dvKCkge1xuICAgIHJldHVybihcbiAgICAgICAgPHN2ZyB3aWR0aD1cIjE4NFwiIGhlaWdodD1cIjEyOVwiIHZpZXdCb3g9XCIwIDAgMTg0IDEyOVwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgPHBhdGggZD1cIk00MS40NjgyIDM1Ljg0M1Y0OS40MjI2QzQxLjQ2ODIgNTEuNjc4OCA0MC43NjAyIDUzLjQ2MyAzOS4zNDQyIDU0Ljc3NTFDMzcuOTM3NiA1Ni4wODczIDM2LjAxMTggNTYuNzQzNCAzMy41NjY5IDU2Ljc0MzRDMzEuMTU5NiA1Ni43NDM0IDI5LjI0OCA1Ni4xMDYyIDI3LjgzMiA1NC44MzE4QzI2LjQxNiA1My41NTc0IDI1LjY5MzggNTEuODA2MiAyNS42NjU1IDQ5LjU3ODRWMzUuODQzSDI5LjkxMzVWNDkuNDUwOUMyOS45MTM1IDUwLjgwMDkgMzAuMjM0NSA1MS43ODc0IDMwLjg3NjQgNTIuNDEwNEMzMS41Mjc4IDUzLjAyNCAzMi40MjQ2IDUzLjMzMDggMzMuNTY2OSA1My4zMzA4QzM1Ljk1NTIgNTMuMzMwOCAzNy4xNjgzIDUyLjA3NTMgMzcuMjA2IDQ5LjU2NDJWMzUuODQzSDQxLjQ2ODJaTTYxLjcxNzIgNTYuNDYwMkg1Ny40NjkyTDQ5LjE5OTcgNDIuODk0OFY1Ni40NjAySDQ0Ljk1MTZWMzUuODQzSDQ5LjE5OTdMNTcuNDgzNCA0OS40MzY4VjM1Ljg0M0g2MS43MTcyVjU2LjQ2MDJaTTY5Ljk0NDMgNTYuNDYwMkg2NS42OTYzVjM1Ljg0M0g2OS45NDQzVjU2LjQ2MDJaXCIgZmlsbD1cIiNGRUZFRkVcIiAvPlxuICAgICAgICAgICAgPHBhdGggZD1cIk04Ny40ODY3IDU2LjQ2MDJIODMuMjM4N1Y0Ny42MjQzSDc0Ljk1NVY1Ni40NjAySDcwLjcwNjlWMzUuODQzSDc0Ljk1NVY0NC4xOTc1SDgzLjIzODdWMzUuODQzSDg3LjQ4NjdWNTYuNDYwMlpNMTAzLjYxNSA0Ny41MjUxSDk1LjQ1ODlWNTMuMDQ3NkgxMDUuMDMxVjU2LjQ2MDJIOTEuMjEwOFYzNS44NDNIMTA1LjAwM1YzOS4yODM5SDk1LjQ1ODlWNDQuMTk3NUgxMDMuNjE1VjQ3LjUyNTFaTTExMS43NzEgNTMuMDQ3NkgxMjAuNzkxVjU2LjQ2MDJIMTA3LjUyM1YzNS44NDNIMTExLjc3MVY1My4wNDc2Wk0xMjcuNDg5IDQ5LjE5NlY1Ni40NjAySDEyMy4yNDFWMzUuODQzSDEzMS4yODRDMTMyLjgzMiAzNS44NDMgMTM0LjE5MiAzNi4xMjYyIDEzNS4zNjIgMzYuNjkyNkMxMzYuNTQyIDM3LjI1OSAxMzcuNDQ4IDM4LjA2NjIgMTM4LjA4MSAzOS4xMTRDMTM4LjcxMyA0MC4xNTI0IDEzOS4wMyA0MS4zMzcyIDEzOS4wMyA0Mi42NjgyQzEzOS4wMyA0NC42ODg0IDEzOC4zMzYgNDYuMjgzOCAxMzYuOTQ4IDQ3LjQ1NDNDMTM1LjU3IDQ4LjYxNTUgMTMzLjY1OCA0OS4xOTYgMTMxLjIxMyA0OS4xOTZIMTI3LjQ4OVpNMTI3LjQ4OSA0NS43NTUxSDEzMS4yODRDMTMyLjQwNyA0NS43NTUxIDEzMy4yNjIgNDUuNDkwOCAxMzMuODQ3IDQ0Ljk2MjJDMTM0LjQ0MiA0NC40MzM1IDEzNC43MzkgNDMuNjc4MyAxMzQuNzM5IDQyLjY5NjVDMTM0LjczOSA0MS42ODY0IDEzNC40NDIgNDAuODY5OSAxMzMuODQ3IDQwLjI0NjhDMTMzLjI1MiAzOS42MjM4IDEzMi40MzEgMzkuMzAyOCAxMzEuMzgzIDM5LjI4MzlIMTI3LjQ4OVY0NS43NTUxWlwiIGZpbGw9XCJ3aGl0ZVwiIC8+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9zdmc+XG5cbiAgICApXG59XG5mdW5jdGlvbiBEYXNoaWNvbih7ZmlsbH0pIHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxzdmcgdmVyc2lvbj1cIjEuMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI1XCIgaGVpZ2h0PVwiMjVcIiB2aWV3Qm94PVwiMCAwIDUxMi4wMDAwMDAgNTEyLjAwMDAwMFwiIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZCBtZWV0XCIgZmlsbD1cImJsdWVcIj5cblxuICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAuMDAwMDAwLDUxMi4wMDAwMDApIHNjYWxlKDAuMTAwMDAwLC0wLjEwMDAwMClcIiBmaWxsPVwiIzAwMDAwMFwiIHN0cm9rZT1cIm5vbmVcIj5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTI3NSA1MTA2IGMtMTExIC0zNSAtMTkwIC0xMDQgLTIzOSAtMjA2IGwtMzEgLTY1IDAgLTU3MCAwIC01NzAgMzMgLTY3IGM0MCAtODIgMTE5IC0xNTcgMjAwIC0xOTAgbDU3IC0yMyA4NDAgLTMgYzYwMyAtMiA4NTcgMCA5MDAgOCAxNjAgMzEgMjc0IDE0NSAzMDUgMzA1IDggNDIgMTAgMjE2IDggNTgwIC0zIDUxNyAtMyA1MjAgLTI2IDU3NyAtMzMgODEgLTEwOCAxNjAgLTE5MCAyMDAgbC02NyAzMyAtODc1IDIgYy02ODggMiAtODg0IC0xIC05MTUgLTExelwiIGZpbGw9IHtmaWxsfSAvPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMzA0OSA1MTA2IGMtMTA2IC0yOCAtMjA5IC0xMjEgLTI1MSAtMjI0IGwtMjMgLTU3IC0zIC0xMTYwIGMtMiAtODM4IDAgLTExNzcgOCAtMTIyMCAzMSAtMTYwIDE0NSAtMjc0IDMwNSAtMzA1IDQzIC04IDI5NyAtMTAgOTAwIC04IGw4NDAgMyA1NyAyMyBjODEgMzMgMTYwIDEwOCAyMDAgMTkwIGwzMyA2NyAwIDEyMTAgMCAxMjEwIC0zMSA2NSBjLTQwIDg0IC0xMDAgMTQ0IC0xODIgMTgzIGwtNjcgMzIgLTg3MCAyIGMtNjY3IDEgLTg4MSAtMSAtOTE2IC0xMXpcIiBmaWxsPXtmaWxsfS8+XG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk0zMDAgMjk3OSBjLTExMiAtMjIgLTIxNyAtMTA3IC0yNjggLTIxNyBsLTI3IC01NyAwIC0xMjEwIDAgLTEyMTAgMzEgLTY1IGMzOSAtODMgMTAxIC0xNDUgMTg0IC0xODQgbDY1IC0zMSA4OTAgMCA4OTAgMCA2NyAzMyBjODIgNDAgMTU3IDExOSAxOTAgMjAwIGwyMyA1NyAzIDExNjAgYzIgODM4IDAgMTE3NyAtOCAxMjIwIC0zMCAxNTcgLTE0MiAyNzEgLTI5OCAzMDQgLTY0IDEzIC0xNjcyIDE0IC0xNzQyIDB6XCIgZmlsbD17ZmlsbH0gLz5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTMwNjUgMTY5NiBjLTE1MCAtMzcgLTI1NSAtMTQ4IC0yODUgLTMwMSAtOCAtNDIgLTEwIC0yMTUgLTggLTU4MCAzIC01MTcgMyAtNTIwIDI2IC01NzcgMzMgLTgxIDEwOCAtMTYwIDE5MCAtMjAwIGw2NyAtMzMgODkwIDAgODkwIDAgNjcgMzIgYzgyIDM5IDE0MiA5OSAxODIgMTgzIGwzMSA2NSAwIDU3MCAwIDU3MCAtMzMgNjcgYy00MCA4MiAtMTE5IDE1NyAtMjAwIDE5MCBsLTU3IDIzIC04NTUgMiBjLTY0OSAxIC04NjcgLTEgLTkwNSAtMTF6XCIgZmlsbD17ZmlsbH0gLz5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxufVxuZnVuY3Rpb24gU2V0dGluZ0ljb24oe2ZpbGx9KSB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI1XCIgaGVpZ2h0PVwiMjVcIiBmaWxsPXtmaWxsfSBjbGFzc05hbWU9XCJiaSBiaS1nZWFyLWZpbGxcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTkuNDA1IDEuMDVjLS40MTMtMS40LTIuMzk3LTEuNC0yLjgxIDBsLS4xLjM0YTEuNDY0IDEuNDY0IDAgMCAxLTIuMTA1Ljg3MmwtLjMxLS4xN2MtMS4yODMtLjY5OC0yLjY4Ni43MDUtMS45ODcgMS45ODdsLjE2OS4zMTFjLjQ0Ni44Mi4wMjMgMS44NDEtLjg3MiAyLjEwNWwtLjM0LjFjLTEuNC40MTMtMS40IDIuMzk3IDAgMi44MWwuMzQuMWExLjQ2NCAxLjQ2NCAwIDAgMSAuODcyIDIuMTA1bC0uMTcuMzFjLS42OTggMS4yODMuNzA1IDIuNjg2IDEuOTg3IDEuOTg3bC4zMTEtLjE2OWExLjQ2NCAxLjQ2NCAwIDAgMSAyLjEwNS44NzJsLjEuMzRjLjQxMyAxLjQgMi4zOTcgMS40IDIuODEgMGwuMS0uMzRhMS40NjQgMS40NjQgMCAwIDEgMi4xMDUtLjg3MmwuMzEuMTdjMS4yODMuNjk4IDIuNjg2LS43MDUgMS45ODctMS45ODdsLS4xNjktLjMxMWExLjQ2NCAxLjQ2NCAwIDAgMSAuODcyLTIuMTA1bC4zNC0uMWMxLjQtLjQxMyAxLjQtMi4zOTcgMC0yLjgxbC0uMzQtLjFhMS40NjQgMS40NjQgMCAwIDEtLjg3Mi0yLjEwNWwuMTctLjMxYy42OTgtMS4yODMtLjcwNS0yLjY4Ni0xLjk4Ny0xLjk4N2wtLjMxMS4xNjlhMS40NjQgMS40NjQgMCAwIDEtMi4xMDUtLjg3MmwtLjEtLjM0ek04IDEwLjkzYTIuOTI5IDIuOTI5IDAgMSAxIDAtNS44NiAyLjkyOSAyLjkyOSAwIDAgMSAwIDUuODU4elwiIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcbn1cbmZ1bmN0aW9uIFNpZ25vdXQoe2ZpbGx9KXtcbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICBcbiAgICAgICAgPHN2ZyBvbkNsaWNrPXsoKSA9PiBkYXRhLnNldE5hdighbmF2KX0gYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiB3aWR0aD1cIjMwXCIgaGVpZ2h0PVwiMzBcIiBkYXRhLXByZWZpeD1cImZhclwiIGRhdGEtaWNvbj1cInVzZXItY2lyY2xlXCIgY2xhc3NOYW1lPVwic3ZnLWlubGluZS0tZmEgZmEtdXNlci1jaXJjbGUgZmEtdy0xNlwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA0OTYgNTEyXCI+PHBhdGggZmlsbD17ZmlsbH0gZD1cIk0yNDggMTA0Yy01MyAwLTk2IDQzLTk2IDk2czQzIDk2IDk2IDk2IDk2LTQzIDk2LTk2LTQzLTk2LTk2LTk2em0wIDE0NGMtMjYuNSAwLTQ4LTIxLjUtNDgtNDhzMjEuNS00OCA0OC00OCA0OCAyMS41IDQ4IDQ4LTIxLjUgNDgtNDggNDh6bTAtMjQwQzExMSA4IDAgMTE5IDAgMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzg1IDggMjQ4IDh6bTAgNDQ4Yy00OS43IDAtOTUuMS0xOC4zLTEzMC4xLTQ4LjQgMTQuOS0yMyA0MC40LTM4LjYgNjkuNi0zOS41IDIwLjggNi40IDQwLjYgOS42IDYwLjUgOS42czM5LjctMy4xIDYwLjUtOS42YzI5LjIgMSA1NC43IDE2LjUgNjkuNiAzOS41LTM1IDMwLjEtODAuNCA0OC40LTEzMC4xIDQ4LjR6bTE2Mi43LTg0LjFjLTI0LjQtMzEuNC02Mi4xLTUxLjktMTA1LjEtNTEuOS0xMC4yIDAtMjYgOS42LTU3LjYgOS42LTMxLjUgMC00Ny40LTkuNi01Ny42LTkuNi00Mi45IDAtODAuNiAyMC41LTEwNS4xIDUxLjlDNjEuOSAzMzkuMiA0OCAyOTkuMiA0OCAyNTZjMC0xMTAuMyA4OS43LTIwMCAyMDAtMjAwczIwMCA4OS43IDIwMCAyMDBjMCA0My4yLTEzLjkgODMuMi0zNy4zIDExNS45elwiPjwvcGF0aD48L3N2Zz5cbiAgICApXG59XG5mdW5jdGlvbiBQbHVzU3ZnKHtmaWxsLG9uQ2xpY2t9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHN2ZyBvbkNsaWNrPXtvbkNsaWNrfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIzMFwiIGhlaWdodD1cIjMwXCIgZmlsbD17ZmlsbH0gY2xhc3NOYW1lPVwiYmkgYmktcGx1cy1jaXJjbGUtZmlsbFwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTYgOEE4IDggMCAxIDEgMCA4YTggOCAwIDAgMSAxNiAwek04LjUgNC41YS41LjUgMCAwIDAtMSAwdjNoLTNhLjUuNSAwIDAgMCAwIDFoM3YzYS41LjUgMCAwIDAgMSAwdi0zaDNhLjUuNSAwIDAgMCAwLTFoLTN2LTN6XCIgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxufVxuZnVuY3Rpb24gQmFja3N2Zyh7ZmlsbCxvbkNsaWNrfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIG9uQ2xpY2s9e29uQ2xpY2t9IHdpZHRoPVwiMzBcIiBoZWlnaHQ9XCIzMFwiIGZpbGw9e2ZpbGx9IGNsYXNzTmFtZT1cImJpIGJpLWNhcmV0LWxlZnQtc3F1YXJlXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0xNCAxYTEgMSAwIDAgMSAxIDF2MTJhMSAxIDAgMCAxLTEgMUgyYTEgMSAwIDAgMS0xLTFWMmExIDEgMCAwIDEgMS0xaDEyek0yIDBhMiAyIDAgMCAwLTIgMnYxMmEyIDIgMCAwIDAgMiAyaDEyYTIgMiAwIDAgMCAyLTJWMmEyIDIgMCAwIDAtMi0ySDJ6XCIgLz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTAuMjA1IDEyLjQ1NkEuNS41IDAgMCAwIDEwLjUgMTJWNGEuNS41IDAgMCAwLS44MzItLjM3NGwtNC41IDRhLjUuNSAwIDAgMCAwIC43NDhsNC41IDRhLjUuNSAwIDAgMCAuNTM3LjA4MnpcIiAvPlxuICAgICAgICA8L3N2Zz5cbiAgICApXG59XG5mdW5jdGlvbiBEZWxldGVTdmcoe2ZpbGwsb25DbGljayxzdHlsZX0pIHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxzdmcgc3R5bGU9e3twb3NpdGlvbjpcInN0YXRpYyAhaW1wb3J0YW50XCJ9fSBvbkNsaWNrPXtvbkNsaWNrfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNVwiIGhlaWdodD1cIjI1XCIgZmlsbD17ZmlsbH0gY2xhc3NOYW1lPVwiYmkgYmktdHJhc2hcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTUuNSA1LjVBLjUuNSAwIDAgMSA2IDZ2NmEuNS41IDAgMCAxLTEgMFY2YS41LjUgMCAwIDEgLjUtLjV6bTIuNSAwYS41LjUgMCAwIDEgLjUuNXY2YS41LjUgMCAwIDEtMSAwVjZhLjUuNSAwIDAgMSAuNS0uNXptMyAuNWEuNS41IDAgMCAwLTEgMHY2YS41LjUgMCAwIDAgMSAwVjZ6XCIgLz5cbiAgICAgICAgICAgIDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTQuNSAzYTEgMSAwIDAgMS0xIDFIMTN2OWEyIDIgMCAwIDEtMiAySDVhMiAyIDAgMCAxLTItMlY0aC0uNWExIDEgMCAwIDEtMS0xVjJhMSAxIDAgMCAxIDEtMUg2YTEgMSAwIDAgMSAxLTFoMmExIDEgMCAwIDEgMSAxaDMuNWExIDEgMCAwIDEgMSAxdjF6TTQuMTE4IDQgNCA0LjA1OVYxM2ExIDEgMCAwIDAgMSAxaDZhMSAxIDAgMCAwIDEtMVY0LjA1OUwxMS44ODIgNEg0LjExOHpNMi41IDNWMmgxMXYxaC0xMXpcIiAvPlxuICAgICAgICA8L3N2Zz5cbiAgICApXG59IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYWRtaW5kYXNoXCI6IFwiYWRtaW5kYXNoX2FkbWluZGFzaF9fMVZ3aUZcIixcblx0XCJuYXZcIjogXCJhZG1pbmRhc2hfbmF2X18zNkVxRFwiLFxuXHRcImFkbWluaW5mb1wiOiBcImFkbWluZGFzaF9hZG1pbmluZm9fXzFObGhxXCIsXG5cdFwidXNlcm5hdlwiOiBcImFkbWluZGFzaF91c2VybmF2X18zMmMwalwiLFxuXHRcImNlbnRlclwiOiBcImFkbWluZGFzaF9jZW50ZXJfXzFESFkwXCIsXG5cdFwiYWN0aXZlXCI6IFwiYWRtaW5kYXNoX2FjdGl2ZV9fMjVSRkdcIixcblx0XCJ0ZXh0ZGF0YVwiOiBcImFkbWluZGFzaF90ZXh0ZGF0YV9fMWxxRHBcIixcblx0XCJhbmFseXRpY3NcIjogXCJhZG1pbmRhc2hfYW5hbHl0aWNzX18xZGxHR1wiLFxuXHRcInNhbGVzXCI6IFwiYWRtaW5kYXNoX3NhbGVzX19yXzNubFwiLFxuXHRcInNlY29uZGFyeVwiOiBcImFkbWluZGFzaF9zZWNvbmRhcnlfXzJLSEFhXCIsXG5cdFwidGhpcmRcIjogXCJhZG1pbmRhc2hfdGhpcmRfX05xMk04XCIsXG5cdFwicGhvdG9cIjogXCJhZG1pbmRhc2hfcGhvdG9fXzJfTkJ0XCIsXG5cdFwiaW5mb3NlY3Rpb25cIjogXCJhZG1pbmRhc2hfaW5mb3NlY3Rpb25fXzNrVWNEXCIsXG5cdFwib3B0aW9uc1wiOiBcImFkbWluZGFzaF9vcHRpb25zX18xXzFuWlwiLFxuXHRcImZlYXR1cmVzXCI6IFwiYWRtaW5kYXNoX2ZlYXR1cmVzX18zcEM3UVwiLFxuXHRcImZlYXR1cmVcIjogXCJhZG1pbmRhc2hfZmVhdHVyZV9fMkc4TWpcIixcblx0XCJmZWF0dXJlZm9ybVwiOiBcImFkbWluZGFzaF9mZWF0dXJlZm9ybV9fMk8zQkFcIixcblx0XCJnb2JpZ2dlclwiOiBcImFkbWluZGFzaF9nb2JpZ2dlcl9fM3dmZFpcIixcblx0XCJhZGRpbmdmb3JtXCI6IFwiYWRtaW5kYXNoX2FkZGluZ2Zvcm1fXzFmWEx4XCIsXG5cdFwiZ29zbWFsbGVyXCI6IFwiYWRtaW5kYXNoX2dvc21hbGxlcl9fTkpJdWNcIixcblx0XCJ1cHBlcmNvbnRhaW5lclwiOiBcImFkbWluZGFzaF91cHBlcmNvbnRhaW5lcl9fMmZjaWJcIixcblx0XCJ1cHBlcmNvbnRhaW5lcmFjdGl2ZVwiOiBcImFkbWluZGFzaF91cHBlcmNvbnRhaW5lcmFjdGl2ZV9fM3FQdzRcIixcblx0XCJhZGRpbmdmb3JtMVwiOiBcImFkbWluZGFzaF9hZGRpbmdmb3JtMV9fMUZqbzVcIixcblx0XCJhZGRpbmdmb3JtMlwiOiBcImFkbWluZGFzaF9hZGRpbmdmb3JtMl9fT0RwRC1cIixcblx0XCJhZGRpbmdmb3JtM1wiOiBcImFkbWluZGFzaF9hZGRpbmdmb3JtM19fMnhXUGdcIixcblx0XCJpdGVtc1wiOiBcImFkbWluZGFzaF9pdGVtc19fY1RPZGxcIixcblx0XCJhZGRpbmdJdGVtc1wiOiBcImFkbWluZGFzaF9hZGRpbmdJdGVtc19fM1hrR1RcIixcblx0XCJzdWJJdGVtc1wiOiBcImFkbWluZGFzaF9zdWJJdGVtc19fcDh2ZlJcIixcblx0XCJtYW5hZ2VcIjogXCJhZG1pbmRhc2hfbWFuYWdlX18yVGJUOFwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==