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
                  axios__WEBPACK_IMPORTED_MODULE_4___default().post("/api/addFeature", add, {
                    headers: {
                      Authorization: `Bearer ${window.session.token}`
                    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bmloZWxwLy4vY29tcG9uZW50cy9hZG1pbmNvbnRyb2xzLmpzeCIsIndlYnBhY2s6Ly91bmloZWxwLy4vc3R5bGVzL2FkbWluZGFzaC5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbIkxvYWRlciIsImR5bmFtaWMiLCJBZG1pbkRhc2giLCJ0b2dnbGUiLCJzZXRUb2dnbGUiLCJ1c2VTdGF0ZSIsIm5hdiIsInNldE5hdiIsImZlYXR1cmUiLCJzZXRGZWF0dXJlIiwiYWRkIiwic2V0QWRkIiwibWFpblRpdGxlIiwiaW1nTGluayIsImluaXQiLCJzZXRJbml0IiwiZmV0Y2hlZERhdGEiLCJpZCIsImRhdGEiLCJheGlvcyIsInRoZW4iLCJyZXNwb25zZSIsImRhdGFpdGVtIiwic2V0ZGF0YUl0ZW0iLCJuYW1lIiwicHJpY2UiLCJuZXdEYXRhIiwic2V0bmV3RGF0YSIsInRpdGxlIiwiRGVzY3JpcHRpb24iLCJpbWFnZUxpbmsiLCJpdGVtcyIsImVkaXQiLCJzZXRFZGl0Iiwic2V0RGF0YSIsInVzZUVmZmVjdCIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImhhbmRsZXIiLCJzZXRIYW5kbGVyIiwiY2hhbmdlRXZlbnQiLCJlIiwiaGVpZ2h0Iiwid2lkdGgiLCJjbGFzc05hbWUiLCJzZXRUaW1lb3V0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0Iiwic3R5bGUiLCIkIiwiYWRkQ2xhc3MiLCJyZW1vdmUiLCJ1c2VybmF2IiwiY29sb3IiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJtYXAiLCJpdGVtIiwiX2lkIiwiZ3JpZENvbHVtbiIsImp1c3RpZnlTZWxmIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsIm1hcmdpbiIsImRpc3BsYXkiLCJwYWRkaW5nIiwiZGF0YWEiLCJwb3NpdGlvbiIsImFsaWduU2VsZiIsImZsZXhEaXJlY3Rpb24iLCJ0YXJnZXQiLCJ2YWx1ZSIsImtleSIsInByZXZlbnREZWZhdWx0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJ3aW5kb3ciLCJzZXNzaW9uIiwidG9rZW4iLCJyZXMiLCJtZXNzYWdlIiwicGhvdG8iLCJzYWxlcyIsInNlY29uZGFyeSIsInRoaXJkIiwiTG9nbyIsIkRhc2hpY29uIiwiZmlsbCIsIlNldHRpbmdJY29uIiwiU2lnbm91dCIsIlBsdXNTdmciLCJvbkNsaWNrIiwiQmFja3N2ZyIsIkRlbGV0ZVN2ZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQSxNQUFNQSxNQUFNLEdBQUdDLG1EQUFPLENBQUMsTUFBTSw2SkFBUDtBQUFBO0FBQUEsd0NBQWMseUNBQWQ7QUFBQSxzREFBYyxVQUFkO0FBQUE7QUFBQSxFQUF0QjtBQUNlLFNBQVNDLFNBQVQsR0FBcUI7QUFFaEMsUUFBTTtBQUFBLE9BQUNDLE1BQUQ7QUFBQSxPQUFRQztBQUFSLE1BQXFCQywrQ0FBUSxDQUFDLEtBQUQsQ0FBbkM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsR0FBRDtBQUFBLE9BQUtDO0FBQUwsTUFBZUYsK0NBQVEsQ0FBQyxLQUFELENBQTdCO0FBQ0EsUUFBTTtBQUFBLE9BQUNHLE9BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXVCSiwrQ0FBUSxDQUFDLEtBQUQsQ0FBckM7QUFDQSxRQUFNO0FBQUEsT0FBQ0ssR0FBRDtBQUFBLE9BQUtDO0FBQUwsTUFBZU4sK0NBQVEsQ0FBQztBQUMxQk8sYUFBUyxFQUFDLEVBRGdCO0FBRTFCQyxXQUFPLEVBQUM7QUFGa0IsR0FBRCxDQUE3QjtBQU1BLE1BQUk7QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBTUM7QUFBTixNQUFpQlYsK0NBQVEsQ0FBQyxFQUFELENBQTdCOztBQUNBLFFBQU1XLFdBQVcsR0FBRyxNQUFPQyxFQUFQLElBQWM7QUFDOUIsVUFBTUMsSUFBSSxHQUFHQyxnREFBQSxDQUFXLG1CQUFrQkYs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QUM5YkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJjb21wb25lbnRzX2FkbWluY29udHJvbHNfanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHN0eWxlIGZyb20gXCIuLi9zdHlsZXMvYWRtaW5kYXNoLm1vZHVsZS5jc3NcIlxuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiXG5pbXBvcnQgJCwgeyBkYXRhIH0gZnJvbSBcImpxdWVyeVwiXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcblxuXG5cbmNvbnN0IExvYWRlciA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiLi9sb2FkZXJcIikpXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZG1pbkRhc2goKSB7XG4gICAgXG4gICAgY29uc3QgW3RvZ2dsZSxzZXRUb2dnbGVdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW25hdixzZXROYXZdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW2ZlYXR1cmUsc2V0RmVhdHVyZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBbYWRkLHNldEFkZF0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIG1haW5UaXRsZTpcIlwiLFxuICAgICAgICBpbWdMaW5rOlwiXCJcbiAgICAgICAgXG5cbiAgICB9KVxuICAgIGxldCBbaW5pdCxzZXRJbml0XSA9IHVzZVN0YXRlKFtdKVxuICAgIGNvbnN0IGZldGNoZWREYXRhID0gYXN5bmMgKGlkKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBheGlvcy5nZXQoYC9hcGkvYWRkRmVhdHVyZS8ke2lkfWApLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgc2V0SW5pdChyZXNwb25zZS5kYXRhKVxuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIGxldCBbZGF0YWl0ZW0sIHNldGRhdGFJdGVtXSA9IHVzZVN0YXRlKFt7XG4gICAgICAgIG5hbWU6XCJcIixcbiAgICAgICAgcHJpY2U6XCJcIlxuICAgIH1dKVxuICAgIGxldCBbbmV3RGF0YSwgc2V0bmV3RGF0YV0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIHRpdGxlOlwiXCIsXG4gICAgICAgIERlc2NyaXB0aW9uOlwiXCIsXG4gICAgICAgIHByaWNlOlwiXCIsXG4gICAgICAgIGltYWdlTGluazpcIlwiLFxuICAgICAgICBpdGVtczpkYXRhaXRlbVxuICAgIH0pXG4gICAgXG4gICAgbGV0IFtlZGl0LHNldEVkaXRdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgbGV0IFtkYXRhLHNldERhdGFdID0gdXNlU3RhdGUoW10pXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgYXhpb3MuZ2V0KFwiL2FwaS9hZGRGZWF0dXJlXCIpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgc2V0RGF0YShyZXNwb25zZS5kYXRhKVxuICAgICAgICAgICAgXG5cbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHVtc2UgbmFpIGhvIHBheWVnYVwiKVxuICAgICAgICB9KVxuICAgIH0sW10pXG4gICAgXG4gICAgY29uc3QgW2hhbmRsZXIsc2V0SGFuZGxlcl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBcbiAgIFxuICAgIGFzeW5jIGZ1bmN0aW9uIGNoYW5nZUV2ZW50KGUsaGVpZ2h0LHdpZHRoLGZlYXR1cmUsY2xhc3NOYW1lKSB7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgaWYoZmVhdHVyZSkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuYWRtaW5kYXNoX2ZlYXR1cmVfXzJHOE1qYCkuY2xhc3NMaXN0LmFkZChzdHlsZS5nb2JpZ2dlcilcbiAgICAgICAgICAgICAgICAkKGAuJHtzdHlsZS51cHBlcmNvbnRhaW5lcn1gKS5hZGRDbGFzcyhgJHtzdHlsZS51cHBlcmNvbnRhaW5lcmFjdGl2ZX1gKVxuICAgICAgICAgICAgfSwxNTIpXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmFkbWluZGFzaF9mZWF0dXJlX18yRzhNamApLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGUuZ29iaWdnZXIpXG5cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuYWRtaW5kYXNoX2ZlYXR1cmVfXzJHOE1qYCkuY2xhc3NMaXN0LmFkZChzdHlsZS5nb3NtYWxsZXIpXG4gICAgICAgICAgICB9LDE1MilcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHNldEZlYXR1cmUoZmVhdHVyZSlcbiAgICAgICAgICAgIFxuICAgICAgICB9LDE1MClcbiAgICB9XG4gICAgaWYodG9nZ2xlKSByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYWRtaW5kYXNofT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYXYgJiYgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnVzZXJuYXZ9ID5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLm5hdn0+XG4gICAgICAgICAgICAgICAgPExvZ28gLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUub3B0aW9uc30+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5hY3RpdmV9IG9uQ2xpY2s9eygpID0+IHtzZXRUb2dnbGUoZmFsc2UpfX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgPERhc2hpY29uIGZpbGw9XCIjZjJmNmZmXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyBjb2xvcjogXCIjZjJmNmZmXCIsIGZvbnRXZWlnaHQ6IDQwMCwgZm9udFNpemU6IFwiMjJweFwiIH19PkRhc2hib2FyZDwvaDE+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5hY3RpdmV9IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjZjJmNmZmXCIsIGJvcmRlclJhZGl1czogXCIxNXB4XCIgfX0gb25DbGljaz17KCkgPT4geyBzZXRUb2dnbGUodHJ1ZSkgfX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNldHRpbmdJY29uIGZpbGw9XCIjMWYxZjQ3XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyBjb2xvcjogXCIjMWYxZjQ3XCIsIGZvbnRXZWlnaHQ6IDQwMCwgZm9udFNpemU6IFwiMjJweFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNldHRpbmdzXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY2VudGVyfT5cbiAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3tmb250U2l6ZTpcIjM2cHhcIn19PlNldHRpbmdzPC9oMT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZmVhdHVyZXN9PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB7IWZlYXR1cmUgJiYgPD5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5mZWF0dXJlfSBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VFdmVudChlLCBcIjcwMHB4XCIsIFwiNzAwcHhcIiwgdHJ1ZSxzdHlsZS5mZWF0dXJlKVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGx1c1N2ZyBmaWxsPVwiIzFmMWY0N1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+QWRkIGEgZmVhdHVyZTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZWRpdCkgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5mZWF0dXJlfSBrZXk9e2l0ZW0uX2lkfSBpZD17aXRlbS5faWR9IG9uQ2xpY2s9eyBhc3luYyAoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgYXhpb3MuZ2V0KGAvYXBpL2FkZEZlYXR1cmUvJHtpdGVtLl9pZH1gKS50aGVuKGFzeW5jIHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2V0SW5pdChyZXNwb25zZS5kYXRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFZGl0KHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyBncmlkQ29sdW1uOiBcIjEvLTFcIiwganVzdGlmeVNlbGY6XCJjZW50ZXJcIiB9fSA+e2l0ZW0udGl0bGV9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlLmZlYXR1cmV9ICR7c3R5bGUuZ29iaWdnZXJ9IGB9IGtleT17aXRlbS5kYXRhLl9pZH0gc3R5bGU9e3tncmlkVGVtcGxhdGVDb2x1bW5zOlwiMWZyIDFmciAxZnJcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYWNrc3ZnIGZpbGw9XCIjMWYxZjQ3XCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RWRpdChmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZG1pbmRhc2hfZ29iaWdnZXJfXzN3ZmRaXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJhZG1pbmRhc2hfZ29iaWdnZXJfXzN3ZmRaXCIpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAvPiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaXRlbXN9IHN0eWxlPXt7anVzdGlmeVNlbGY6XCJsZWZ0XCIsbWFyZ2luOlwiNTBweFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXQuZGF0YS5tYXAoKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2RhdGEuX2lkfSAgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwifX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOlwiYWxpY2VibHVlXCIscGFkZGluZzpcIjIwcHggNDBweFwiLG1hcmdpbjpcIjE1cHggMFwifX0gb25DbGljaz17IGFzeW5jIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhYSA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS9hZGRGZWF0dXJlLyR7aW5pdC5faWR9LyR7ZGF0YS5faWR9L2l0ZW1zYCkudGhlbiggYXN5bmMgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHNldEluaXQocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgY29uc29sZS5sb2cocmVzcG9uc2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19ID57ZGF0YS50aXRsZSB8fCBkYXRhLm5hbWV9IDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZWxldGVTdmcgZmlsbD1cImJsYWNrXCIgc3R5bGU9e3twb3NpdGlvbjpcInN0YXRpYyAhaW1wb3J0YW50XCJ9fSBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF4aW9zLmRlbGV0ZShgL2FwaS9hZGRGZWF0dXJlLyR7aW5pdC5faWR9LyR7ZGF0YS5faWR9YClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYWRkaW5nSXRlbXN9IHN0eWxlPXt7anVzdGlmeVNlbGY6XCJjZW50ZXJcIixhbGlnblNlbGY6XCJjZW50ZXJcIixncmlkQ29sdW1uOlwiMi8zXCIsZGlzcGxheTpcImZsZXhcIixmbGV4RGlyZWN0aW9uOlwiY29sdW1uXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPkFkZGluZyBhbiBFbnRyeTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVGl0bGVcIiBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldG5ld0RhdGEoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLm5ld0RhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRGVzY2lwdGlvblwiIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0bmV3RGF0YSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ubmV3RGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZXNjcmlwdGlvbjogZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiUHJpY2VcIiBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldG5ld0RhdGEoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLm5ld0RhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkltYWdlTGlua1wiIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0bmV3RGF0YSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ubmV3RGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZUxpbms6IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGJ1dHRvbiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6XCIjMWYxZjQ3XCIsY29sb3I6XCIjZmZmXCIsaGVpZ2h0OlwiNDBweFwiLGJvcmRlclJhZGl1czpcIjI1cHhcIn19PlN1Ym1pdDwvYnV0dG9uPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuc3ViSXRlbXN9IHN0eWxlPXt7Z3JpZENvbHVtbjpcIjNcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+QWRkIEl0ZW1zPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiL2FwaS90ZXN0RGF0YWJhc2VcIiBtZXRob2Q9XCJQT1NUXCIgY2xhc3NOYW1lPVwiaXRlbWZvcm1cIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YWl0ZW0ubWFwKChpdGVtcyxrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0ge3N0eWxlLm1hbmFnZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkl0ZW0gVGl0bGVcIiBuYW1lPVwidGl0bGVcIiBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluaXQgPSBkYXRhaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRba2V5XS5uYW1lID0gZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiUHJpY2VcIiAgbmFtZT1cInByaWNlXCIgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbml0ID0gZGF0YWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0W2tleV0ucHJpY2UgPSBlLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQbHVzU3ZnIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldGRhdGFJdGVtKFsuLi5kYXRhaXRlbSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjMWYxZjQ3XCIsIGNvbG9yOiBcIiNmZmZcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgYm9yZGVyUmFkaXVzOiBcIjI1cHhcIiB9fSBvbkNsaWNrPXsoZSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtLl9pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0RhdGFbXCJpdGVtc1wiXSA9IGRhdGFpdGVtIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXhpb3MucG9zdChgL2FwaS9hZGRGZWF0dXJlLyR7aW5pdC5faWR9YCxuZXdEYXRhKS50aGVuKChyZXNwb25zZSkgPT4gY29uc29sZS5sb2cocmVzcG9uc2UpIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmZWF0dXJlICYmIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5mZWF0dXJlfSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhY2tzdmcgZmlsbD1cIiMxZjFmNDdcIiAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlRXZlbnQoZSwgXCIzMjBweFwiLCBcIjE1NXB4XCIsIGZhbHNlLCBzdHlsZS5mZWF0dXJlKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUudXBwZXJjb250YWluZXJ9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7IGZvbnRTaXplOiBcIjMycHhcIiB9fT5BZGQgYSBmZWF0dXJlPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmFkZGluZ2Zvcm0xfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPk1haW4gdGl0bGU8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgIHBsYWNlaG9sZGVyPVwiVGl0bGVcIiBvbkNoYW5nZT17KGUpID0+IChzZXRBZGQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmFkZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWluVGl0bGU6ZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiSW1hZ2VMaW5rXCIgb25DaGFuZ2U9eyhlKSA9PiAoc2V0QWRkKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5hZGQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nTGluazplLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBheGlvcy5wb3N0KFwiL2FwaS9hZGRGZWF0dXJlXCIsIGFkZCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7d2luZG93LnNlc3Npb24udG9rZW59YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLmRhdGEubWVzc2FnZSA9PT0gXCJFbnRyeSBBZGRlZFwiKSBzZXRIYW5kbGVyKHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT4gU3VibWl0PC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlciAmJiA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuc3RhdHVzfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5FbnRyeSBBZGRlZDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5hZG1pbmluZm99PlxuICAgICAgICAgICAgICAgIDxTaWdub3V0IGZpbGw9XCIjMWYxZjQ3XCIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUucGhvdG99PlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGgxPlJhaiBBZ2Fyd2FsPC9oMT5cbiAgICAgICAgICAgICAgICA8cD5hZ2Fyd2Fsc2Fua2V0MjlAZ21haWwuY29tPC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5pbmZvc2VjdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgIClcbiAgICBlbHNlIGlmICghdG9nZ2xlKSByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5hZG1pbmRhc2h9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLm5hdn0+XG4gICAgICAgICAgICAgICAgPExvZ28gLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUub3B0aW9uc30gPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYWN0aXZlfSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2YyZjZmZlwiLCBib3JkZXJSYWRpdXM6IFwiMTVweFwiIH19IG9uQ2xpY2s9eygpID0+IHsgc2V0VG9nZ2xlKGZhbHNlKSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEYXNoaWNvbiBmaWxsPVwiIzFmMWY0N1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3sgY29sb3I6XCIjMWYxZjQ3XCIsZm9udFdlaWdodDo0MDAsZm9udFNpemU6XCIyMnB4XCJ9fT5EYXNoYm9hcmQ8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5hY3RpdmV9IG9uQ2xpY2s9eyhlKSA9PiB7IFxuICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRvZ2dsZSghdG9nZ2xlKSBcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNldHRpbmdJY29uIGZpbGw9XCIjZjJmNmZmXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyBjb2xvcjogXCIjZjJmNmZmXCIsIGZvbnRXZWlnaHQ6IDQwMCwgZm9udFNpemU6IFwiMjJweFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNldHRpbmdzXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jZW50ZXJ9PlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnRleHRkYXRhfT5cbiAgICAgICAgICAgICAgICAgICA8aDE+SGVsbG8sUmFqPC9oMT5cbiAgICAgICAgICAgICAgICAgICA8cD5XZWxjb21lIGJhY2shPC9wPlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYW5hbHl0aWNzfT5cbiAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuc2FsZXN9PlxuICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuc2Vjb25kYXJ5fT5cblxuICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS50aGlyZH0+XG5cbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5hZG1pbmluZm99PlxuICAgICAgICAgICAgICAgIDxTaWdub3V0IGZpbGw9XCIjMWYxZjQ3XCIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUucGhvdG99PlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGgxPlJhaiBBZ2Fyd2FsPC9oMT5cbiAgICAgICAgICAgICAgICA8cD5hZ2Fyd2Fsc2Fua2V0MjlAZ21haWwuY29tPC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5pbmZvc2VjdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4gXG5cbmZ1bmN0aW9uIExvZ28oKSB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8c3ZnIHdpZHRoPVwiMTg0XCIgaGVpZ2h0PVwiMTI5XCIgdmlld0JveD1cIjAgMCAxODQgMTI5XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTQxLjQ2ODIgMzUuODQzVjQ5LjQyMjZDNDEuNDY4MiA1MS42Nzg4IDQwLjc2MDIgNTMuNDYzIDM5LjM0NDIgNTQuNzc1MUMzNy45Mzc2IDU2LjA4NzMgMzYuMDExOCA1Ni43NDM0IDMzLjU2NjkgNTYuNzQzNEMzMS4xNTk2IDU2Ljc0MzQgMjkuMjQ4IDU2LjEwNjIgMjcuODMyIDU0LjgzMThDMjYuNDE2IDUzLjU1NzQgMjUuNjkzOCA1MS44MDYyIDI1LjY2NTUgNDkuNTc4NFYzNS44NDNIMjkuOTEzNVY0OS40NTA5QzI5LjkxMzUgNTAuODAwOSAzMC4yMzQ1IDUxLjc4NzQgMzAuODc2NCA1Mi40MTA0QzMxLjUyNzggNTMuMDI0IDMyLjQyNDYgNTMuMzMwOCAzMy41NjY5IDUzLjMzMDhDMzUuOTU1MiA1My4zMzA4IDM3LjE2ODMgNTIuMDc1MyAzNy4yMDYgNDkuNTY0MlYzNS44NDNINDEuNDY4MlpNNjEuNzE3MiA1Ni40NjAySDU3LjQ2OTJMNDkuMTk5NyA0Mi44OTQ4VjU2LjQ2MDJINDQuOTUxNlYzNS44NDNINDkuMTk5N0w1Ny40ODM0IDQ5LjQzNjhWMzUuODQzSDYxLjcxNzJWNTYuNDYwMlpNNjkuOTQ0MyA1Ni40NjAySDY1LjY5NjNWMzUuODQzSDY5Ljk0NDNWNTYuNDYwMlpcIiBmaWxsPVwiI0ZFRkVGRVwiIC8+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTg3LjQ4NjcgNTYuNDYwMkg4My4yMzg3VjQ3LjYyNDNINzQuOTU1VjU2LjQ2MDJINzAuNzA2OVYzNS44NDNINzQuOTU1VjQ0LjE5NzVIODMuMjM4N1YzNS44NDNIODcuNDg2N1Y1Ni40NjAyWk0xMDMuNjE1IDQ3LjUyNTFIOTUuNDU4OVY1My4wNDc2SDEwNS4wMzFWNTYuNDYwMkg5MS4yMTA4VjM1Ljg0M0gxMDUuMDAzVjM5LjI4MzlIOTUuNDU4OVY0NC4xOTc1SDEwMy42MTVWNDcuNTI1MVpNMTExLjc3MSA1My4wNDc2SDEyMC43OTFWNTYuNDYwMkgxMDcuNTIzVjM1Ljg0M0gxMTEuNzcxVjUzLjA0NzZaTTEyNy40ODkgNDkuMTk2VjU2LjQ2MDJIMTIzLjI0MVYzNS44NDNIMTMxLjI4NEMxMzIuODMyIDM1Ljg0MyAxMzQuMTkyIDM2LjEyNjIgMTM1LjM2MiAzNi42OTI2QzEzNi41NDIgMzcuMjU5IDEzNy40NDggMzguMDY2MiAxMzguMDgxIDM5LjExNEMxMzguNzEzIDQwLjE1MjQgMTM5LjAzIDQxLjMzNzIgMTM5LjAzIDQyLjY2ODJDMTM5LjAzIDQ0LjY4ODQgMTM4LjMzNiA0Ni4yODM4IDEzNi45NDggNDcuNDU0M0MxMzUuNTcgNDguNjE1NSAxMzMuNjU4IDQ5LjE5NiAxMzEuMjEzIDQ5LjE5NkgxMjcuNDg5Wk0xMjcuNDg5IDQ1Ljc1NTFIMTMxLjI4NEMxMzIuNDA3IDQ1Ljc1NTEgMTMzLjI2MiA0NS40OTA4IDEzMy44NDcgNDQuOTYyMkMxMzQuNDQyIDQ0LjQzMzUgMTM0LjczOSA0My42NzgzIDEzNC43MzkgNDIuNjk2NUMxMzQuNzM5IDQxLjY4NjQgMTM0LjQ0MiA0MC44Njk5IDEzMy44NDcgNDAuMjQ2OEMxMzMuMjUyIDM5LjYyMzggMTMyLjQzMSAzOS4zMDI4IDEzMS4zODMgMzkuMjgzOUgxMjcuNDg5VjQ1Ljc1NTFaXCIgZmlsbD1cIndoaXRlXCIgLz5cbiAgICAgICAgICAgIFxuICAgICAgICA8L3N2Zz5cblxuICAgIClcbn1cbmZ1bmN0aW9uIERhc2hpY29uKHtmaWxsfSkge1xuICAgIHJldHVybihcbiAgICAgICAgPHN2ZyB2ZXJzaW9uPVwiMS4wXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIyNVwiIHZpZXdCb3g9XCIwIDAgNTEyLjAwMDAwMCA1MTIuMDAwMDAwXCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkIG1lZXRcIiBmaWxsPVwiYmx1ZVwiPlxuXG4gICAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMC4wMDAwMDAsNTEyLjAwMDAwMCkgc2NhbGUoMC4xMDAwMDAsLTAuMTAwMDAwKVwiIGZpbGw9XCIjMDAwMDAwXCIgc3Ryb2tlPVwibm9uZVwiPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjc1IDUxMDYgYy0xMTEgLTM1IC0xOTAgLTEwNCAtMjM5IC0yMDYgbC0zMSAtNjUgMCAtNTcwIDAgLTU3MCAzMyAtNjcgYzQwIC04MiAxMTkgLTE1NyAyMDAgLTE5MCBsNTcgLTIzIDg0MCAtMyBjNjAzIC0yIDg1NyAwIDkwMCA4IDE2MCAzMSAyNzQgMTQ1IDMwNSAzMDUgOCA0MiAxMCAyMTYgOCA1ODAgLTMgNTE3IC0zIDUyMCAtMjYgNTc3IC0zMyA4MSAtMTA4IDE2MCAtMTkwIDIwMCBsLTY3IDMzIC04NzUgMiBjLTY4OCAyIC04ODQgLTEgLTkxNSAtMTF6XCIgZmlsbD0ge2ZpbGx9IC8+XG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk0zMDQ5IDUxMDYgYy0xMDYgLTI4IC0yMDkgLTEyMSAtMjUxIC0yMjQgbC0yMyAtNTcgLTMgLTExNjAgYy0yIC04MzggMCAtMTE3NyA4IC0xMjIwIDMxIC0xNjAgMTQ1IC0yNzQgMzA1IC0zMDUgNDMgLTggMjk3IC0xMCA5MDAgLTggbDg0MCAzIDU3IDIzIGM4MSAzMyAxNjAgMTA4IDIwMCAxOTAgbDMzIDY3IDAgMTIxMCAwIDEyMTAgLTMxIDY1IGMtNDAgODQgLTEwMCAxNDQgLTE4MiAxODMgbC02NyAzMiAtODcwIDIgYy02NjcgMSAtODgxIC0xIC05MTYgLTExelwiIGZpbGw9e2ZpbGx9Lz5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTMwMCAyOTc5IGMtMTEyIC0yMiAtMjE3IC0xMDcgLTI2OCAtMjE3IGwtMjcgLTU3IDAgLTEyMTAgMCAtMTIxMCAzMSAtNjUgYzM5IC04MyAxMDEgLTE0NSAxODQgLTE4NCBsNjUgLTMxIDg5MCAwIDg5MCAwIDY3IDMzIGM4MiA0MCAxNTcgMTE5IDE5MCAyMDAgbDIzIDU3IDMgMTE2MCBjMiA4MzggMCAxMTc3IC04IDEyMjAgLTMwIDE1NyAtMTQyIDI3MSAtMjk4IDMwNCAtNjQgMTMgLTE2NzIgMTQgLTE3NDIgMHpcIiBmaWxsPXtmaWxsfSAvPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMzA2NSAxNjk2IGMtMTUwIC0zNyAtMjU1IC0xNDggLTI4NSAtMzAxIC04IC00MiAtMTAgLTIxNSAtOCAtNTgwIDMgLTUxNyAzIC01MjAgMjYgLTU3NyAzMyAtODEgMTA4IC0xNjAgMTkwIC0yMDAgbDY3IC0zMyA4OTAgMCA4OTAgMCA2NyAzMiBjODIgMzkgMTQyIDk5IDE4MiAxODMgbDMxIDY1IDAgNTcwIDAgNTcwIC0zMyA2NyBjLTQwIDgyIC0xMTkgMTU3IC0yMDAgMTkwIGwtNTcgMjMgLTg1NSAyIGMtNjQ5IDEgLTg2NyAtMSAtOTA1IC0xMXpcIiBmaWxsPXtmaWxsfSAvPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICA8L3N2Zz5cbiAgICApXG59XG5mdW5jdGlvbiBTZXR0aW5nSWNvbih7ZmlsbH0pIHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIyNVwiIGZpbGw9e2ZpbGx9IGNsYXNzTmFtZT1cImJpIGJpLWdlYXItZmlsbFwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNOS40MDUgMS4wNWMtLjQxMy0xLjQtMi4zOTctMS40LTIuODEgMGwtLjEuMzRhMS40NjQgMS40NjQgMCAwIDEtMi4xMDUuODcybC0uMzEtLjE3Yy0xLjI4My0uNjk4LTIuNjg2LjcwNS0xLjk4NyAxLjk4N2wuMTY5LjMxMWMuNDQ2LjgyLjAyMyAxLjg0MS0uODcyIDIuMTA1bC0uMzQuMWMtMS40LjQxMy0xLjQgMi4zOTcgMCAyLjgxbC4zNC4xYTEuNDY0IDEuNDY0IDAgMCAxIC44NzIgMi4xMDVsLS4xNy4zMWMtLjY5OCAxLjI4My43MDUgMi42ODYgMS45ODcgMS45ODdsLjMxMS0uMTY5YTEuNDY0IDEuNDY0IDAgMCAxIDIuMTA1Ljg3MmwuMS4zNGMuNDEzIDEuNCAyLjM5NyAxLjQgMi44MSAwbC4xLS4zNGExLjQ2NCAxLjQ2NCAwIDAgMSAyLjEwNS0uODcybC4zMS4xN2MxLjI4My42OTggMi42ODYtLjcwNSAxLjk4Ny0xLjk4N2wtLjE2OS0uMzExYTEuNDY0IDEuNDY0IDAgMCAxIC44NzItMi4xMDVsLjM0LS4xYzEuNC0uNDEzIDEuNC0yLjM5NyAwLTIuODFsLS4zNC0uMWExLjQ2NCAxLjQ2NCAwIDAgMS0uODcyLTIuMTA1bC4xNy0uMzFjLjY5OC0xLjI4My0uNzA1LTIuNjg2LTEuOTg3LTEuOTg3bC0uMzExLjE2OWExLjQ2NCAxLjQ2NCAwIDAgMS0yLjEwNS0uODcybC0uMS0uMzR6TTggMTAuOTNhMi45MjkgMi45MjkgMCAxIDEgMC01Ljg2IDIuOTI5IDIuOTI5IDAgMCAxIDAgNS44NTh6XCIgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxufVxuZnVuY3Rpb24gU2lnbm91dCh7ZmlsbH0pe1xuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIFxuICAgICAgICA8c3ZnIG9uQ2xpY2s9eygpID0+IGRhdGEuc2V0TmF2KCFuYXYpfSBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIHdpZHRoPVwiMzBcIiBoZWlnaHQ9XCIzMFwiIGRhdGEtcHJlZml4PVwiZmFyXCIgZGF0YS1pY29uPVwidXNlci1jaXJjbGVcIiBjbGFzc05hbWU9XCJzdmctaW5saW5lLS1mYSBmYS11c2VyLWNpcmNsZSBmYS13LTE2XCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDQ5NiA1MTJcIj48cGF0aCBmaWxsPXtmaWxsfSBkPVwiTTI0OCAxMDRjLTUzIDAtOTYgNDMtOTYgOTZzNDMgOTYgOTYgOTYgOTYtNDMgOTYtOTYtNDMtOTYtOTYtOTZ6bTAgMTQ0Yy0yNi41IDAtNDgtMjEuNS00OC00OHMyMS41LTQ4IDQ4LTQ4IDQ4IDIxLjUgNDggNDgtMjEuNSA0OC00OCA0OHptMC0yNDBDMTExIDggMCAxMTkgMCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzODUgOCAyNDggOHptMCA0NDhjLTQ5LjcgMC05NS4xLTE4LjMtMTMwLjEtNDguNCAxNC45LTIzIDQwLjQtMzguNiA2OS42LTM5LjUgMjAuOCA2LjQgNDAuNiA5LjYgNjAuNSA5LjZzMzkuNy0zLjEgNjAuNS05LjZjMjkuMiAxIDU0LjcgMTYuNSA2OS42IDM5LjUtMzUgMzAuMS04MC40IDQ4LjQtMTMwLjEgNDguNHptMTYyLjctODQuMWMtMjQuNC0zMS40LTYyLjEtNTEuOS0xMDUuMS01MS45LTEwLjIgMC0yNiA5LjYtNTcuNiA5LjYtMzEuNSAwLTQ3LjQtOS42LTU3LjYtOS42LTQyLjkgMC04MC42IDIwLjUtMTA1LjEgNTEuOUM2MS45IDMzOS4yIDQ4IDI5OS4yIDQ4IDI1NmMwLTExMC4zIDg5LjctMjAwIDIwMC0yMDBzMjAwIDg5LjcgMjAwIDIwMGMwIDQzLjItMTMuOSA4My4yLTM3LjMgMTE1Ljl6XCI+PC9wYXRoPjwvc3ZnPlxuICAgIClcbn1cbmZ1bmN0aW9uIFBsdXNTdmcoe2ZpbGwsb25DbGlja30pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c3ZnIG9uQ2xpY2s9e29uQ2xpY2t9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjMwXCIgaGVpZ2h0PVwiMzBcIiBmaWxsPXtmaWxsfSBjbGFzc05hbWU9XCJiaSBiaS1wbHVzLWNpcmNsZS1maWxsXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0xNiA4QTggOCAwIDEgMSAwIDhhOCA4IDAgMCAxIDE2IDB6TTguNSA0LjVhLjUuNSAwIDAgMC0xIDB2M2gtM2EuNS41IDAgMCAwIDAgMWgzdjNhLjUuNSAwIDAgMCAxIDB2LTNoM2EuNS41IDAgMCAwIDAtMWgtM3YtM3pcIiAvPlxuICAgICAgICA8L3N2Zz5cbiAgICApXG59XG5mdW5jdGlvbiBCYWNrc3ZnKHtmaWxsLG9uQ2xpY2t9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgb25DbGljaz17b25DbGlja30gd2lkdGg9XCIzMFwiIGhlaWdodD1cIjMwXCIgZmlsbD17ZmlsbH0gY2xhc3NOYW1lPVwiYmkgYmktY2FyZXQtbGVmdC1zcXVhcmVcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTE0IDFhMSAxIDAgMCAxIDEgMXYxMmExIDEgMCAwIDEtMSAxSDJhMSAxIDAgMCAxLTEtMVYyYTEgMSAwIDAgMSAxLTFoMTJ6TTIgMGEyIDIgMCAwIDAtMiAydjEyYTIgMiAwIDAgMCAyIDJoMTJhMiAyIDAgMCAwIDItMlYyYTIgMiAwIDAgMC0yLTJIMnpcIiAvPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0xMC4yMDUgMTIuNDU2QS41LjUgMCAwIDAgMTAuNSAxMlY0YS41LjUgMCAwIDAtLjgzMi0uMzc0bC00LjUgNGEuNS41IDAgMCAwIDAgLjc0OGw0LjUgNGEuNS41IDAgMCAwIC41MzcuMDgyelwiIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcbn1cbmZ1bmN0aW9uIERlbGV0ZVN2Zyh7ZmlsbCxvbkNsaWNrLHN0eWxlfSkge1xuICAgIHJldHVybihcbiAgICAgICAgPHN2ZyBzdHlsZT17e3Bvc2l0aW9uOlwic3RhdGljICFpbXBvcnRhbnRcIn19IG9uQ2xpY2s9e29uQ2xpY2t9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI1XCIgaGVpZ2h0PVwiMjVcIiBmaWxsPXtmaWxsfSBjbGFzc05hbWU9XCJiaSBiaS10cmFzaFwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNNS41IDUuNUEuNS41IDAgMCAxIDYgNnY2YS41LjUgMCAwIDEtMSAwVjZhLjUuNSAwIDAgMSAuNS0uNXptMi41IDBhLjUuNSAwIDAgMSAuNS41djZhLjUuNSAwIDAgMS0xIDBWNmEuNS41IDAgMCAxIC41LS41em0zIC41YS41LjUgMCAwIDAtMSAwdjZhLjUuNSAwIDAgMCAxIDBWNnpcIiAvPlxuICAgICAgICAgICAgPHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgZD1cIk0xNC41IDNhMSAxIDAgMCAxLTEgMUgxM3Y5YTIgMiAwIDAgMS0yIDJINWEyIDIgMCAwIDEtMi0yVjRoLS41YTEgMSAwIDAgMS0xLTFWMmExIDEgMCAwIDEgMS0xSDZhMSAxIDAgMCAxIDEtMWgyYTEgMSAwIDAgMSAxIDFoMy41YTEgMSAwIDAgMSAxIDF2MXpNNC4xMTggNCA0IDQuMDU5VjEzYTEgMSAwIDAgMCAxIDFoNmExIDEgMCAwIDAgMS0xVjQuMDU5TDExLjg4MiA0SDQuMTE4ek0yLjUgM1YyaDExdjFoLTExelwiIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcbn0iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJhZG1pbmRhc2hcIjogXCJhZG1pbmRhc2hfYWRtaW5kYXNoX18xVndpRlwiLFxuXHRcIm5hdlwiOiBcImFkbWluZGFzaF9uYXZfXzM2RXFEXCIsXG5cdFwiYWRtaW5pbmZvXCI6IFwiYWRtaW5kYXNoX2FkbWluaW5mb19fMU5saHFcIixcblx0XCJ1c2VybmF2XCI6IFwiYWRtaW5kYXNoX3VzZXJuYXZfXzMyYzBqXCIsXG5cdFwiY2VudGVyXCI6IFwiYWRtaW5kYXNoX2NlbnRlcl9fMURIWTBcIixcblx0XCJhY3RpdmVcIjogXCJhZG1pbmRhc2hfYWN0aXZlX18yNVJGR1wiLFxuXHRcInRleHRkYXRhXCI6IFwiYWRtaW5kYXNoX3RleHRkYXRhX18xbHFEcFwiLFxuXHRcImFuYWx5dGljc1wiOiBcImFkbWluZGFzaF9hbmFseXRpY3NfXzFkbEdHXCIsXG5cdFwic2FsZXNcIjogXCJhZG1pbmRhc2hfc2FsZXNfX3JfM25sXCIsXG5cdFwic2Vjb25kYXJ5XCI6IFwiYWRtaW5kYXNoX3NlY29uZGFyeV9fMktIQWFcIixcblx0XCJ0aGlyZFwiOiBcImFkbWluZGFzaF90aGlyZF9fTnEyTThcIixcblx0XCJwaG90b1wiOiBcImFkbWluZGFzaF9waG90b19fMl9OQnRcIixcblx0XCJpbmZvc2VjdGlvblwiOiBcImFkbWluZGFzaF9pbmZvc2VjdGlvbl9fM2tVY0RcIixcblx0XCJvcHRpb25zXCI6IFwiYWRtaW5kYXNoX29wdGlvbnNfXzFfMW5aXCIsXG5cdFwiZmVhdHVyZXNcIjogXCJhZG1pbmRhc2hfZmVhdHVyZXNfXzNwQzdRXCIsXG5cdFwiZmVhdHVyZVwiOiBcImFkbWluZGFzaF9mZWF0dXJlX18yRzhNalwiLFxuXHRcImZlYXR1cmVmb3JtXCI6IFwiYWRtaW5kYXNoX2ZlYXR1cmVmb3JtX18yTzNCQVwiLFxuXHRcImdvYmlnZ2VyXCI6IFwiYWRtaW5kYXNoX2dvYmlnZ2VyX18zd2ZkWlwiLFxuXHRcImFkZGluZ2Zvcm1cIjogXCJhZG1pbmRhc2hfYWRkaW5nZm9ybV9fMWZYTHhcIixcblx0XCJnb3NtYWxsZXJcIjogXCJhZG1pbmRhc2hfZ29zbWFsbGVyX19OSkl1Y1wiLFxuXHRcInVwcGVyY29udGFpbmVyXCI6IFwiYWRtaW5kYXNoX3VwcGVyY29udGFpbmVyX18yZmNpYlwiLFxuXHRcInVwcGVyY29udGFpbmVyYWN0aXZlXCI6IFwiYWRtaW5kYXNoX3VwcGVyY29udGFpbmVyYWN0aXZlX18zcVB3NFwiLFxuXHRcImFkZGluZ2Zvcm0xXCI6IFwiYWRtaW5kYXNoX2FkZGluZ2Zvcm0xX18xRmpvNVwiLFxuXHRcImFkZGluZ2Zvcm0yXCI6IFwiYWRtaW5kYXNoX2FkZGluZ2Zvcm0yX19PRHBELVwiLFxuXHRcImFkZGluZ2Zvcm0zXCI6IFwiYWRtaW5kYXNoX2FkZGluZ2Zvcm0zX18yeFdQZ1wiLFxuXHRcIml0ZW1zXCI6IFwiYWRtaW5kYXNoX2l0ZW1zX19jVE9kbFwiLFxuXHRcImFkZGluZ0l0ZW1zXCI6IFwiYWRtaW5kYXNoX2FkZGluZ0l0ZW1zX18zWGtHVFwiLFxuXHRcInN1Ykl0ZW1zXCI6IFwiYWRtaW5kYXNoX3N1Ykl0ZW1zX19wOHZmUlwiLFxuXHRcIm1hbmFnZVwiOiBcImFkbWluZGFzaF9tYW5hZ2VfXzJUYlQ4XCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9