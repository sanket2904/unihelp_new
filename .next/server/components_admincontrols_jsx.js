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
  let {
    0: fdata,
    1: setFdata
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    firstName: "",
    lastName: "",
    email: ""
  });
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    axios__WEBPACK_IMPORTED_MODULE_4___default().get(`/api/user/${JSON.parse(window.localStorage.session)}`).then(res => {
      console.log(res);
    });
    axios__WEBPACK_IMPORTED_MODULE_4___default().get("/api/addFeature").then(response => {
      console.log(response);
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
      className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().usernav),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: () => {
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
      className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().nav),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Logo, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
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
      className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().center),
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
                lineNumber: 153,
                columnNumber: 41
              }, this)
            }, item._id, false, {
              fileName: _jsxFileName,
              lineNumber: 143,
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
                lineNumber: 159,
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
                      lineNumber: 173,
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
                      lineNumber: 181,
                      columnNumber: 61
                    }, this)]
                  }, data._id, true, {
                    fileName: _jsxFileName,
                    lineNumber: 172,
                    columnNumber: 57
                  }, this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 166,
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
                  lineNumber: 190,
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
                  lineNumber: 191,
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
                  lineNumber: 197,
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
                  lineNumber: 203,
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
                  lineNumber: 209,
                  columnNumber: 45
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 189,
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
                  lineNumber: 218,
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
                        lineNumber: 227,
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
                        lineNumber: 232,
                        columnNumber: 61
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 226,
                      columnNumber: 57
                    }, this);
                  }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PlusSvg, {
                    onClick: () => {
                      setdataItem([...dataitem, {}]);
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 242,
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
                    lineNumber: 249,
                    columnNumber: 49
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 219,
                  columnNumber: 45
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 217,
                columnNumber: 41
              }, this)]
            }, item.data._id, true, {
              fileName: _jsxFileName,
              lineNumber: 158,
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
            lineNumber: 269,
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
              lineNumber: 275,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().addingform1),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                children: "Main title"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 278,
                columnNumber: 37
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                type: "text",
                placeholder: "Title",
                onChange: e => setAdd(_objectSpread(_objectSpread({}, add), {}, {
                  mainTitle: e.target.value
                }))
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 279,
                columnNumber: 37
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                type: "text",
                placeholder: "ImageLink",
                onChange: e => setAdd(_objectSpread(_objectSpread({}, add), {}, {
                  imgLink: e.target.value
                }))
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 283,
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
                lineNumber: 287,
                columnNumber: 37
              }, this), handler && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().status),
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
      className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().admininfo),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Signout, {
        fill: "#1f1f47",
        nav: nav,
        setNav: setNav
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 312,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().photo)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 313,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: `${fdata.firstName || null} ${fdata.lastName || null}`
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
        className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().infosection),
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
    className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().admindash),
    children: [nav && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().usernav),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: () => {
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
      className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().nav),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Logo, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 341,
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
          className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().active),
          onClick: e => {
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
      className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().center),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().textdata),
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
        className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().analytics),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().sales)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 370,
          columnNumber: 20
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().secondary)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 373,
          columnNumber: 20
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().third)
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
      className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().admininfo),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Signout, {
        fill: "#1f1f47",
        nav: nav,
        setNav: setNav
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 383,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().photo)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 384,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: `${fdata.firstName || null} ${fdata.lastName || null}`
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
        className: (_styles_admindash_module_css__WEBPACK_IMPORTED_MODULE_5___default().infosection),
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
      lineNumber: 428,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 427,
    columnNumber: 9
  }, this);
}

function Signout({
  fill,
  nav,
  setNav
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
    onClick: () => setNav(!nav),
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
      lineNumber: 442,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 441,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bmloZWxwLy4vY29tcG9uZW50cy9hZG1pbmNvbnRyb2xzLmpzeCIsIndlYnBhY2s6Ly91bmloZWxwLy4vc3R5bGVzL2FkbWluZGFzaC5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbIkxvYWRlciIsImR5bmFtaWMiLCJBZG1pbkRhc2giLCJ0b2dnbGUiLCJzZXRUb2dnbGUiLCJ1c2VTdGF0ZSIsIm5hdiIsInNldE5hdiIsImZlYXR1cmUiLCJzZXRGZWF0dXJlIiwiYWRkIiwic2V0QWRkIiwibWFpblRpdGxlIiwiaW1nTGluayIsImluaXQiLCJzZXRJbml0IiwiZGF0YWl0ZW0iLCJzZXRkYXRhSXRlbSIsIm5hbWUiLCJwcmljZSIsIm5ld0RhdGEiLCJzZXRuZXdEYXRhIiwidGl0bGUiLCJEZXNjcmlwdGlvbiIsImltYWdlTGluayIsIml0ZW1zIiwiZWRpdCIsInNldEVkaXQiLCJkYXRhIiwic2V0RGF0YSIsImZkYXRhIiwic2V0RmRhdGEiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJKU09OIiwicGFyc2UiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJzZXNzaW9uIiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsImNhdGNoIiwiZXJyIiwiaGFuZGxlciIsInNldEhhbmRsZXIiLCJjaGFuZ2VFdmVudCIsImUiLCJoZWlnaHQiLCJ3aWR0aCIsImNsYXNzTmFtZSIsInNldFRpbWVvdXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJzdHlsZSIsIiQiLCJhZGRDbGFzcyIsInJlbW92ZSIsImxvY2F0aW9uIiwicmVsb2FkIiwiY29sb3IiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJtYXAiLCJpdGVtIiwiX2lkIiwiZ3JpZENvbHVtbiIsImp1c3RpZnlTZWxmIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsIm1hcmdpbiIsImRpc3BsYXkiLCJwYWRkaW5nIiwiZGF0YWEiLCJwb3NpdGlvbiIsImFsaWduU2VsZiIsImZsZXhEaXJlY3Rpb24iLCJ0YXJnZXQiLCJ2YWx1ZSIsImtleSIsInByZXZlbnREZWZhdWx0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJ0b2tlbiIsIm1lc3NhZ2UiLCJwaG90byIsInNhbGVzIiwic2Vjb25kYXJ5IiwidGhpcmQiLCJMb2dvIiwiRGFzaGljb24iLCJmaWxsIiwiU2V0dGluZ0ljb24iLCJTaWdub3V0IiwiUGx1c1N2ZyIsIm9uQ2xpY2siLCJCYWNrc3ZnIiwiRGVsZXRlU3ZnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBLE1BQU1BLE1BQU0sR0FBR0MsbURBQU8sQ0FBQyxNQUFNLDZKQUFQO0FBQUE7QUFBQSx3Q0FBYyx5Q0FBZDtBQUFBLHNEQUFjLFVBQWQ7QUFBQTtBQUFBLEVBQXRCO0FBQ2UsU0FBU0MsU0FBVCxHQUFxQjtBQUVoQyxRQUFNO0FBQUEsT0FBQ0MsTUFBRDtBQUFBLE9BQVFDO0FBQVIsTUFBcUJDLCtDQUFRLENBQUMsS0FBRCxDQUFuQztBQUNBLFFBQU07QUFBQSxPQUFDQyxHQUFEO0FBQUEsT0FBS0M7QUFBTCxNQUFlRiwrQ0FBUSxDQUFDLEtBQUQsQ0FBN0I7QUFDQSxRQUFNO0FBQUEsT0FBQ0csT0FBRDtBQUFBLE9BQVNDO0FBQVQsTUFBdUJKLCtDQUFRLENBQUMsS0FBRCxDQUFyQztBQUNBLFFBQU07QUFBQSxPQUFDSyxHQUFEO0FBQUEsT0FBS0M7QUFBTCxNQUFlTiwrQ0FBUSxDQUFDO0FBQzFCTyxhQUFTLEVBQUMsRUFEZ0I7QUFFMUJDLFdBQU8sRUFBQztBQUZrQixHQUFELENBQTdCO0FBTUEsTUFBSTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFNQztBQUFOLE1BQWlCViwrQ0FBUSxDQUFDLEVBQUQsQ0FBN0I7QUFDQSxNQUFJ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O0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQU1ILEM7Ozs7Ozs7Ozs7QUM1Y0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJjb21wb25lbnRzX2FkbWluY29udHJvbHNfanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHN0eWxlIGZyb20gXCIuLi9zdHlsZXMvYWRtaW5kYXNoLm1vZHVsZS5jc3NcIlxuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiXG5pbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxuXG5cblxuY29uc3QgTG9hZGVyID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCIuL2xvYWRlclwiKSlcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkbWluRGFzaCgpIHtcbiAgICBcbiAgICBjb25zdCBbdG9nZ2xlLHNldFRvZ2dsZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBbbmF2LHNldE5hdl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBbZmVhdHVyZSxzZXRGZWF0dXJlXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IFthZGQsc2V0QWRkXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgbWFpblRpdGxlOlwiXCIsXG4gICAgICAgIGltZ0xpbms6XCJcIlxuICAgICAgICBcblxuICAgIH0pXG4gICAgbGV0IFtpbml0LHNldEluaXRdID0gdXNlU3RhdGUoW10pXG4gICAgbGV0IFtkYXRhaXRlbSwgc2V0ZGF0YUl0ZW1dID0gdXNlU3RhdGUoW3tcbiAgICAgICAgbmFtZTpcIlwiLFxuICAgICAgICBwcmljZTpcIlwiXG4gICAgfV0pXG4gICAgbGV0IFtuZXdEYXRhLCBzZXRuZXdEYXRhXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgdGl0bGU6XCJcIixcbiAgICAgICAgRGVzY3JpcHRpb246XCJcIixcbiAgICAgICAgcHJpY2U6XCJcIixcbiAgICAgICAgaW1hZ2VMaW5rOlwiXCIsXG4gICAgICAgIGl0ZW1zOmRhdGFpdGVtXG4gICAgfSlcbiAgICBcbiAgICBsZXQgW2VkaXQsc2V0RWRpdF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBsZXQgW2RhdGEsc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSlcbiAgICBsZXQgW2ZkYXRhLHNldEZkYXRhXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgZmlyc3ROYW1lOlwiXCIsXG4gICAgICAgIGxhc3ROYW1lOlwiXCIsXG4gICAgICAgIGVtYWlsOlwiXCJcbiAgICB9KVxuICAgIFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGF4aW9zLmdldChgL2FwaS91c2VyLyR7SlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLnNlc3Npb24pfWApLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICB9KVxuICAgICAgICBheGlvcy5nZXQoXCIvYXBpL2FkZEZlYXR1cmVcIikudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcbiAgICAgICAgICAgIHNldERhdGEocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgICAgIFxuXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInR1bXNlIG5haSBobyBwYXllZ2FcIilcbiAgICAgICAgfSlcbiAgICB9LFtdKVxuICAgIFxuICAgIGNvbnN0IFtoYW5kbGVyLHNldEhhbmRsZXJdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgXG4gICBcbiAgICBhc3luYyBmdW5jdGlvbiBjaGFuZ2VFdmVudChlLGhlaWdodCx3aWR0aCxmZWF0dXJlLGNsYXNzTmFtZSkge1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGlmKGZlYXR1cmUpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmFkbWluZGFzaF9mZWF0dXJlX18yRzhNamApLmNsYXNzTGlzdC5hZGQoc3R5bGUuZ29iaWdnZXIpXG4gICAgICAgICAgICAgICAgJChgLiR7c3R5bGUudXBwZXJjb250YWluZXJ9YCkuYWRkQ2xhc3MoYCR7c3R5bGUudXBwZXJjb250YWluZXJhY3RpdmV9YClcbiAgICAgICAgICAgIH0sMTUyKVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5hZG1pbmRhc2hfZmVhdHVyZV9fMkc4TWpgKS5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlLmdvYmlnZ2VyKVxuXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmFkbWluZGFzaF9mZWF0dXJlX18yRzhNamApLmNsYXNzTGlzdC5hZGQoc3R5bGUuZ29zbWFsbGVyKVxuICAgICAgICAgICAgfSwxNTIpXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBzZXRGZWF0dXJlKGZlYXR1cmUpXG4gICAgICAgICAgICBcbiAgICAgICAgfSwxNTApXG4gICAgfVxuICAgIGlmKHRvZ2dsZSkgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmFkbWluZGFzaH0+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmF2ICYmIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS51c2VybmF2fSA+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2Vzc2lvblxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKClcbiAgICAgICAgICAgICAgICAgICAgfX0+IFNpZ25vdXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5uYXZ9PlxuICAgICAgICAgICAgICAgIDxMb2dvIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLm9wdGlvbnN9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYWN0aXZlfSBvbkNsaWNrPXsoKSA9PiB7c2V0VG9nZ2xlKGZhbHNlKX19ID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEYXNoaWNvbiBmaWxsPVwiI2YyZjZmZlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3sgY29sb3I6IFwiI2YyZjZmZlwiLCBmb250V2VpZ2h0OiA0MDAsIGZvbnRTaXplOiBcIjIycHhcIiB9fT5EYXNoYm9hcmQ8L2gxPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYWN0aXZlfSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2YyZjZmZlwiLCBib3JkZXJSYWRpdXM6IFwiMTVweFwiIH19IG9uQ2xpY2s9eygpID0+IHsgc2V0VG9nZ2xlKHRydWUpIH19ID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZXR0aW5nSWNvbiBmaWxsPVwiIzFmMWY0N1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3sgY29sb3I6IFwiIzFmMWY0N1wiLCBmb250V2VpZ2h0OiA0MDAsIGZvbnRTaXplOiBcIjIycHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXR0aW5nc1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNlbnRlcn0+XG4gICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7Zm9udFNpemU6XCIzNnB4XCJ9fT5TZXR0aW5nczwvaDE+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmZlYXR1cmVzfT5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgeyFmZWF0dXJlICYmIDw+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZmVhdHVyZX0gb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlRXZlbnQoZSwgXCI3MDBweFwiLCBcIjcwMHB4XCIsIHRydWUsc3R5bGUuZmVhdHVyZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFBsdXNTdmcgZmlsbD1cIiMxZjFmNDdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPkFkZCBhIGZlYXR1cmU8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWVkaXQpIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZmVhdHVyZX0ga2V5PXtpdGVtLl9pZH0gaWQ9e2l0ZW0uX2lkfSBvbkNsaWNrPXsgYXN5bmMgKCkgPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS9hZGRGZWF0dXJlLyR7aXRlbS5faWR9YCkudGhlbihhc3luYyByZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHNldEluaXQocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RWRpdCh0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3sgZ3JpZENvbHVtbjogXCIxLy0xXCIsIGp1c3RpZnlTZWxmOlwiY2VudGVyXCIgfX0gPntpdGVtLnRpdGxlfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZS5mZWF0dXJlfSAke3N0eWxlLmdvYmlnZ2VyfSBgfSBrZXk9e2l0ZW0uZGF0YS5faWR9IHN0eWxlPXt7Z3JpZFRlbXBsYXRlQ29sdW1uczpcIjFmciAxZnIgMWZyXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFja3N2ZyBmaWxsPVwiIzFmMWY0N1wiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEVkaXQoZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRtaW5kYXNoX2dvYmlnZ2VyX18zd2ZkWlwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiYWRtaW5kYXNoX2dvYmlnZ2VyX18zd2ZkWlwiKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gLz4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLml0ZW1zfSBzdHlsZT17e2p1c3RpZnlTZWxmOlwibGVmdFwiLG1hcmdpbjpcIjUwcHhcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0LmRhdGEubWFwKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtkYXRhLl9pZH0gIHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIn19ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjpcImFsaWNlYmx1ZVwiLHBhZGRpbmc6XCIyMHB4IDQwcHhcIixtYXJnaW46XCIxNXB4IDBcIn19IG9uQ2xpY2s9eyBhc3luYyAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YWEgPSBhd2FpdCBheGlvcy5nZXQoYC9hcGkvYWRkRmVhdHVyZS8ke2luaXQuX2lkfS8ke2RhdGEuX2lkfS9pdGVtc2ApLnRoZW4oIGFzeW5jIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBzZXRJbml0KHJlc3BvbnNlLmRhdGEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSA+e2RhdGEudGl0bGUgfHwgZGF0YS5uYW1lfSA8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGVsZXRlU3ZnIGZpbGw9XCJibGFja1wiIHN0eWxlPXt7cG9zaXRpb246XCJzdGF0aWMgIWltcG9ydGFudFwifX0gb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBheGlvcy5kZWxldGUoYC9hcGkvYWRkRmVhdHVyZS8ke2luaXQuX2lkfS8ke2RhdGEuX2lkfWApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmFkZGluZ0l0ZW1zfSBzdHlsZT17e2p1c3RpZnlTZWxmOlwiY2VudGVyXCIsYWxpZ25TZWxmOlwiY2VudGVyXCIsZ3JpZENvbHVtbjpcIjIvM1wiLGRpc3BsYXk6XCJmbGV4XCIsZmxleERpcmVjdGlvbjpcImNvbHVtblwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5BZGRpbmcgYW4gRW50cnk8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlRpdGxlXCIgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRuZXdEYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5uZXdEYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOmUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkRlc2NpcHRpb25cIiBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldG5ld0RhdGEoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLm5ld0RhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVzY3JpcHRpb246IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlByaWNlXCIgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRuZXdEYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5uZXdEYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJJbWFnZUxpbmtcIiBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldG5ld0RhdGEoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLm5ld0RhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VMaW5rOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxidXR0b24gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOlwiIzFmMWY0N1wiLGNvbG9yOlwiI2ZmZlwiLGhlaWdodDpcIjQwcHhcIixib3JkZXJSYWRpdXM6XCIyNXB4XCJ9fT5TdWJtaXQ8L2J1dHRvbj4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnN1Ykl0ZW1zfSBzdHlsZT17e2dyaWRDb2x1bW46XCIzXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPkFkZCBJdGVtczwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIi9hcGkvdGVzdERhdGFiYXNlXCIgbWV0aG9kPVwiUE9TVFwiIGNsYXNzTmFtZT1cIml0ZW1mb3JtXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFpdGVtLm1hcCgoaXRlbXMsa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IHtzdHlsZS5tYW5hZ2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJJdGVtIFRpdGxlXCIgbmFtZT1cInRpdGxlXCIgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbml0ID0gZGF0YWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0W2tleV0ubmFtZSA9IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlByaWNlXCIgIG5hbWU9XCJwcmljZVwiIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5pdCA9IGRhdGFpdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdFtrZXldLnByaWNlID0gZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2RpdiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGx1c1N2ZyBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRkYXRhSXRlbShbLi4uZGF0YWl0ZW0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzFmMWY0N1wiLCBjb2xvcjogXCIjZmZmXCIsIGhlaWdodDogXCI0MHB4XCIsIGJvcmRlclJhZGl1czogXCIyNXB4XCIgfX0gb25DbGljaz17KGUpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coaXRlbS5faWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdEYXRhW1wiaXRlbXNcIl0gPSBkYXRhaXRlbSBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF4aW9zLnBvc3QoYC9hcGkvYWRkRmVhdHVyZS8ke2luaXQuX2lkfWAsbmV3RGF0YSkudGhlbigocmVzcG9uc2UpID0+IGNvbnNvbGUubG9nKHJlc3BvbnNlKSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZSAmJiA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZmVhdHVyZX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYWNrc3ZnIGZpbGw9XCIjMWYxZjQ3XCIgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZUV2ZW50KGUsIFwiMzIwcHhcIiwgXCIxNTVweFwiLCBmYWxzZSwgc3R5bGUuZmVhdHVyZSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnVwcGVyY29udGFpbmVyfSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyBmb250U2l6ZTogXCIzMnB4XCIgfX0+QWRkIGEgZmVhdHVyZTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5hZGRpbmdmb3JtMX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5NYWluIHRpdGxlPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICBwbGFjZWhvbGRlcj1cIlRpdGxlXCIgb25DaGFuZ2U9eyhlKSA9PiAoc2V0QWRkKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5hZGQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFpblRpdGxlOmUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkltYWdlTGlua1wiIG9uQ2hhbmdlPXsoZSkgPT4gKHNldEFkZCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uYWRkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZ0xpbms6ZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXhpb3MucG9zdChcIi9hcGkvYWRkRmVhdHVyZVwiLCBhZGQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3dpbmRvdy5zZXNzaW9uLnRva2VufWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5kYXRhLm1lc3NhZ2UgPT09IFwiRW50cnkgQWRkZWRcIikgc2V0SGFuZGxlcih0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+IFN1Ym1pdDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXIgJiYgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnN0YXR1c30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+RW50cnkgQWRkZWQ8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYWRtaW5pbmZvfT5cbiAgICAgICAgICAgICAgICA8U2lnbm91dCBmaWxsPVwiIzFmMWY0N1wiIG5hdj17bmF2fSBzZXROYXY9e3NldE5hdn0gLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUucGhvdG99PlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGgxPntgJHtmZGF0YS5maXJzdE5hbWUgfHwgbnVsbH0gJHtmZGF0YS5sYXN0TmFtZSB8fCBudWxsfWB9PC9oMT5cbiAgICAgICAgICAgICAgICA8cD57ZmRhdGEuZW1haWwgfHwgbnVsbH08L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmluZm9zZWN0aW9ufT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgKVxuICAgIGVsc2UgaWYgKCF0b2dnbGUpIHJldHVybihcbiAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5hZG1pbmRhc2h9PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hdiAmJiA8ZGl2IGNsYXNzTmFtZT17c3R5bGUudXNlcm5hdn0gPlxuICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgd2luZG93LmxvY2FsU3RvcmFnZS5zZXNzaW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgICAgICAgICAgICAgICAgfX0+IFNpZ25vdXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5uYXZ9PlxuICAgICAgICAgICAgICAgIDxMb2dvIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLm9wdGlvbnN9ID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmFjdGl2ZX0gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiNmMmY2ZmZcIiwgYm9yZGVyUmFkaXVzOiBcIjE1cHhcIiB9fSBvbkNsaWNrPXsoKSA9PiB7IHNldFRvZ2dsZShmYWxzZSkgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RGFzaGljb24gZmlsbD1cIiMxZjFmNDdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7IGNvbG9yOlwiIzFmMWY0N1wiLGZvbnRXZWlnaHQ6NDAwLGZvbnRTaXplOlwiMjJweFwifX0+RGFzaGJvYXJkPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYWN0aXZlfSBvbkNsaWNrPXsoZSkgPT4geyBcbiAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUb2dnbGUoIXRvZ2dsZSkgXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZXR0aW5nSWNvbiBmaWxsPVwiI2YyZjZmZlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3sgY29sb3I6IFwiI2YyZjZmZlwiLCBmb250V2VpZ2h0OiA0MDAsIGZvbnRTaXplOiBcIjIycHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXR0aW5nc1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY2VudGVyfT5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS50ZXh0ZGF0YX0+XG4gICAgICAgICAgICAgICAgICAgPGgxPkhlbGxvLHtmZGF0YS5maXJzdE5hbWUgfHwgbnVsbH08L2gxPlxuICAgICAgICAgICAgICAgICAgIDxwPldlbGNvbWUgYmFjayE8L3A+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5hbmFseXRpY3N9PlxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5zYWxlc30+XG4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5zZWNvbmRhcnl9PlxuXG4gICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnRoaXJkfT5cblxuICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmFkbWluaW5mb30+XG4gICAgICAgICAgICAgICAgPFNpZ25vdXQgZmlsbD1cIiMxZjFmNDdcIiBuYXY9e25hdn0gc2V0TmF2PXtzZXROYXZ9IC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnBob3RvfT5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxoMT57YCR7ZmRhdGEuZmlyc3ROYW1lIHx8IG51bGx9ICR7ZmRhdGEubGFzdE5hbWUgfHwgbnVsbH1gfTwvaDE+XG4gICAgICAgICAgICAgICAgPHA+e2ZkYXRhLmVtYWlsIHx8IG51bGx9PC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5pbmZvc2VjdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4gXG5cbmZ1bmN0aW9uIExvZ28oKSB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8c3ZnIHdpZHRoPVwiMTg0XCIgaGVpZ2h0PVwiMTI5XCIgdmlld0JveD1cIjAgMCAxODQgMTI5XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTQxLjQ2ODIgMzUuODQzVjQ5LjQyMjZDNDEuNDY4MiA1MS42Nzg4IDQwLjc2MDIgNTMuNDYzIDM5LjM0NDIgNTQuNzc1MUMzNy45Mzc2IDU2LjA4NzMgMzYuMDExOCA1Ni43NDM0IDMzLjU2NjkgNTYuNzQzNEMzMS4xNTk2IDU2Ljc0MzQgMjkuMjQ4IDU2LjEwNjIgMjcuODMyIDU0LjgzMThDMjYuNDE2IDUzLjU1NzQgMjUuNjkzOCA1MS44MDYyIDI1LjY2NTUgNDkuNTc4NFYzNS44NDNIMjkuOTEzNVY0OS40NTA5QzI5LjkxMzUgNTAuODAwOSAzMC4yMzQ1IDUxLjc4NzQgMzAuODc2NCA1Mi40MTA0QzMxLjUyNzggNTMuMDI0IDMyLjQyNDYgNTMuMzMwOCAzMy41NjY5IDUzLjMzMDhDMzUuOTU1MiA1My4zMzA4IDM3LjE2ODMgNTIuMDc1MyAzNy4yMDYgNDkuNTY0MlYzNS44NDNINDEuNDY4MlpNNjEuNzE3MiA1Ni40NjAySDU3LjQ2OTJMNDkuMTk5NyA0Mi44OTQ4VjU2LjQ2MDJINDQuOTUxNlYzNS44NDNINDkuMTk5N0w1Ny40ODM0IDQ5LjQzNjhWMzUuODQzSDYxLjcxNzJWNTYuNDYwMlpNNjkuOTQ0MyA1Ni40NjAySDY1LjY5NjNWMzUuODQzSDY5Ljk0NDNWNTYuNDYwMlpcIiBmaWxsPVwiI0ZFRkVGRVwiIC8+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTg3LjQ4NjcgNTYuNDYwMkg4My4yMzg3VjQ3LjYyNDNINzQuOTU1VjU2LjQ2MDJINzAuNzA2OVYzNS44NDNINzQuOTU1VjQ0LjE5NzVIODMuMjM4N1YzNS44NDNIODcuNDg2N1Y1Ni40NjAyWk0xMDMuNjE1IDQ3LjUyNTFIOTUuNDU4OVY1My4wNDc2SDEwNS4wMzFWNTYuNDYwMkg5MS4yMTA4VjM1Ljg0M0gxMDUuMDAzVjM5LjI4MzlIOTUuNDU4OVY0NC4xOTc1SDEwMy42MTVWNDcuNTI1MVpNMTExLjc3MSA1My4wNDc2SDEyMC43OTFWNTYuNDYwMkgxMDcuNTIzVjM1Ljg0M0gxMTEuNzcxVjUzLjA0NzZaTTEyNy40ODkgNDkuMTk2VjU2LjQ2MDJIMTIzLjI0MVYzNS44NDNIMTMxLjI4NEMxMzIuODMyIDM1Ljg0MyAxMzQuMTkyIDM2LjEyNjIgMTM1LjM2MiAzNi42OTI2QzEzNi41NDIgMzcuMjU5IDEzNy40NDggMzguMDY2MiAxMzguMDgxIDM5LjExNEMxMzguNzEzIDQwLjE1MjQgMTM5LjAzIDQxLjMzNzIgMTM5LjAzIDQyLjY2ODJDMTM5LjAzIDQ0LjY4ODQgMTM4LjMzNiA0Ni4yODM4IDEzNi45NDggNDcuNDU0M0MxMzUuNTcgNDguNjE1NSAxMzMuNjU4IDQ5LjE5NiAxMzEuMjEzIDQ5LjE5NkgxMjcuNDg5Wk0xMjcuNDg5IDQ1Ljc1NTFIMTMxLjI4NEMxMzIuNDA3IDQ1Ljc1NTEgMTMzLjI2MiA0NS40OTA4IDEzMy44NDcgNDQuOTYyMkMxMzQuNDQyIDQ0LjQzMzUgMTM0LjczOSA0My42NzgzIDEzNC43MzkgNDIuNjk2NUMxMzQuNzM5IDQxLjY4NjQgMTM0LjQ0MiA0MC44Njk5IDEzMy44NDcgNDAuMjQ2OEMxMzMuMjUyIDM5LjYyMzggMTMyLjQzMSAzOS4zMDI4IDEzMS4zODMgMzkuMjgzOUgxMjcuNDg5VjQ1Ljc1NTFaXCIgZmlsbD1cIndoaXRlXCIgLz5cbiAgICAgICAgICAgIFxuICAgICAgICA8L3N2Zz5cblxuICAgIClcbn1cbmZ1bmN0aW9uIERhc2hpY29uKHtmaWxsfSkge1xuICAgIHJldHVybihcbiAgICAgICAgPHN2ZyB2ZXJzaW9uPVwiMS4wXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIyNVwiIHZpZXdCb3g9XCIwIDAgNTEyLjAwMDAwMCA1MTIuMDAwMDAwXCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkIG1lZXRcIiBmaWxsPVwiYmx1ZVwiPlxuXG4gICAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMC4wMDAwMDAsNTEyLjAwMDAwMCkgc2NhbGUoMC4xMDAwMDAsLTAuMTAwMDAwKVwiIGZpbGw9XCIjMDAwMDAwXCIgc3Ryb2tlPVwibm9uZVwiPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjc1IDUxMDYgYy0xMTEgLTM1IC0xOTAgLTEwNCAtMjM5IC0yMDYgbC0zMSAtNjUgMCAtNTcwIDAgLTU3MCAzMyAtNjcgYzQwIC04MiAxMTkgLTE1NyAyMDAgLTE5MCBsNTcgLTIzIDg0MCAtMyBjNjAzIC0yIDg1NyAwIDkwMCA4IDE2MCAzMSAyNzQgMTQ1IDMwNSAzMDUgOCA0MiAxMCAyMTYgOCA1ODAgLTMgNTE3IC0zIDUyMCAtMjYgNTc3IC0zMyA4MSAtMTA4IDE2MCAtMTkwIDIwMCBsLTY3IDMzIC04NzUgMiBjLTY4OCAyIC04ODQgLTEgLTkxNSAtMTF6XCIgZmlsbD0ge2ZpbGx9IC8+XG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk0zMDQ5IDUxMDYgYy0xMDYgLTI4IC0yMDkgLTEyMSAtMjUxIC0yMjQgbC0yMyAtNTcgLTMgLTExNjAgYy0yIC04MzggMCAtMTE3NyA4IC0xMjIwIDMxIC0xNjAgMTQ1IC0yNzQgMzA1IC0zMDUgNDMgLTggMjk3IC0xMCA5MDAgLTggbDg0MCAzIDU3IDIzIGM4MSAzMyAxNjAgMTA4IDIwMCAxOTAgbDMzIDY3IDAgMTIxMCAwIDEyMTAgLTMxIDY1IGMtNDAgODQgLTEwMCAxNDQgLTE4MiAxODMgbC02NyAzMiAtODcwIDIgYy02NjcgMSAtODgxIC0xIC05MTYgLTExelwiIGZpbGw9e2ZpbGx9Lz5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTMwMCAyOTc5IGMtMTEyIC0yMiAtMjE3IC0xMDcgLTI2OCAtMjE3IGwtMjcgLTU3IDAgLTEyMTAgMCAtMTIxMCAzMSAtNjUgYzM5IC04MyAxMDEgLTE0NSAxODQgLTE4NCBsNjUgLTMxIDg5MCAwIDg5MCAwIDY3IDMzIGM4MiA0MCAxNTcgMTE5IDE5MCAyMDAgbDIzIDU3IDMgMTE2MCBjMiA4MzggMCAxMTc3IC04IDEyMjAgLTMwIDE1NyAtMTQyIDI3MSAtMjk4IDMwNCAtNjQgMTMgLTE2NzIgMTQgLTE3NDIgMHpcIiBmaWxsPXtmaWxsfSAvPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMzA2NSAxNjk2IGMtMTUwIC0zNyAtMjU1IC0xNDggLTI4NSAtMzAxIC04IC00MiAtMTAgLTIxNSAtOCAtNTgwIDMgLTUxNyAzIC01MjAgMjYgLTU3NyAzMyAtODEgMTA4IC0xNjAgMTkwIC0yMDAgbDY3IC0zMyA4OTAgMCA4OTAgMCA2NyAzMiBjODIgMzkgMTQyIDk5IDE4MiAxODMgbDMxIDY1IDAgNTcwIDAgNTcwIC0zMyA2NyBjLTQwIDgyIC0xMTkgMTU3IC0yMDAgMTkwIGwtNTcgMjMgLTg1NSAyIGMtNjQ5IDEgLTg2NyAtMSAtOTA1IC0xMXpcIiBmaWxsPXtmaWxsfSAvPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICA8L3N2Zz5cbiAgICApXG59XG5mdW5jdGlvbiBTZXR0aW5nSWNvbih7ZmlsbH0pIHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIyNVwiIGZpbGw9e2ZpbGx9IGNsYXNzTmFtZT1cImJpIGJpLWdlYXItZmlsbFwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNOS40MDUgMS4wNWMtLjQxMy0xLjQtMi4zOTctMS40LTIuODEgMGwtLjEuMzRhMS40NjQgMS40NjQgMCAwIDEtMi4xMDUuODcybC0uMzEtLjE3Yy0xLjI4My0uNjk4LTIuNjg2LjcwNS0xLjk4NyAxLjk4N2wuMTY5LjMxMWMuNDQ2LjgyLjAyMyAxLjg0MS0uODcyIDIuMTA1bC0uMzQuMWMtMS40LjQxMy0xLjQgMi4zOTcgMCAyLjgxbC4zNC4xYTEuNDY0IDEuNDY0IDAgMCAxIC44NzIgMi4xMDVsLS4xNy4zMWMtLjY5OCAxLjI4My43MDUgMi42ODYgMS45ODcgMS45ODdsLjMxMS0uMTY5YTEuNDY0IDEuNDY0IDAgMCAxIDIuMTA1Ljg3MmwuMS4zNGMuNDEzIDEuNCAyLjM5NyAxLjQgMi44MSAwbC4xLS4zNGExLjQ2NCAxLjQ2NCAwIDAgMSAyLjEwNS0uODcybC4zMS4xN2MxLjI4My42OTggMi42ODYtLjcwNSAxLjk4Ny0xLjk4N2wtLjE2OS0uMzExYTEuNDY0IDEuNDY0IDAgMCAxIC44NzItMi4xMDVsLjM0LS4xYzEuNC0uNDEzIDEuNC0yLjM5NyAwLTIuODFsLS4zNC0uMWExLjQ2NCAxLjQ2NCAwIDAgMS0uODcyLTIuMTA1bC4xNy0uMzFjLjY5OC0xLjI4My0uNzA1LTIuNjg2LTEuOTg3LTEuOTg3bC0uMzExLjE2OWExLjQ2NCAxLjQ2NCAwIDAgMS0yLjEwNS0uODcybC0uMS0uMzR6TTggMTAuOTNhMi45MjkgMi45MjkgMCAxIDEgMC01Ljg2IDIuOTI5IDIuOTI5IDAgMCAxIDAgNS44NTh6XCIgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxufVxuZnVuY3Rpb24gU2lnbm91dCh7ZmlsbCxuYXYsc2V0TmF2fSl7XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgXG4gICAgICAgIDxzdmcgb25DbGljaz17KCkgPT4gc2V0TmF2KCFuYXYpfSBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIHdpZHRoPVwiMzBcIiBoZWlnaHQ9XCIzMFwiIGRhdGEtcHJlZml4PVwiZmFyXCIgZGF0YS1pY29uPVwidXNlci1jaXJjbGVcIiBjbGFzc05hbWU9XCJzdmctaW5saW5lLS1mYSBmYS11c2VyLWNpcmNsZSBmYS13LTE2XCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDQ5NiA1MTJcIj48cGF0aCBmaWxsPXtmaWxsfSBkPVwiTTI0OCAxMDRjLTUzIDAtOTYgNDMtOTYgOTZzNDMgOTYgOTYgOTYgOTYtNDMgOTYtOTYtNDMtOTYtOTYtOTZ6bTAgMTQ0Yy0yNi41IDAtNDgtMjEuNS00OC00OHMyMS41LTQ4IDQ4LTQ4IDQ4IDIxLjUgNDggNDgtMjEuNSA0OC00OCA0OHptMC0yNDBDMTExIDggMCAxMTkgMCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzODUgOCAyNDggOHptMCA0NDhjLTQ5LjcgMC05NS4xLTE4LjMtMTMwLjEtNDguNCAxNC45LTIzIDQwLjQtMzguNiA2OS42LTM5LjUgMjAuOCA2LjQgNDAuNiA5LjYgNjAuNSA5LjZzMzkuNy0zLjEgNjAuNS05LjZjMjkuMiAxIDU0LjcgMTYuNSA2OS42IDM5LjUtMzUgMzAuMS04MC40IDQ4LjQtMTMwLjEgNDguNHptMTYyLjctODQuMWMtMjQuNC0zMS40LTYyLjEtNTEuOS0xMDUuMS01MS45LTEwLjIgMC0yNiA5LjYtNTcuNiA5LjYtMzEuNSAwLTQ3LjQtOS42LTU3LjYtOS42LTQyLjkgMC04MC42IDIwLjUtMTA1LjEgNTEuOUM2MS45IDMzOS4yIDQ4IDI5OS4yIDQ4IDI1NmMwLTExMC4zIDg5LjctMjAwIDIwMC0yMDBzMjAwIDg5LjcgMjAwIDIwMGMwIDQzLjItMTMuOSA4My4yLTM3LjMgMTE1Ljl6XCI+PC9wYXRoPjwvc3ZnPlxuICAgIClcbn1cbmZ1bmN0aW9uIFBsdXNTdmcoe2ZpbGwsb25DbGlja30pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c3ZnIG9uQ2xpY2s9e29uQ2xpY2t9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjMwXCIgaGVpZ2h0PVwiMzBcIiBmaWxsPXtmaWxsfSBjbGFzc05hbWU9XCJiaSBiaS1wbHVzLWNpcmNsZS1maWxsXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0xNiA4QTggOCAwIDEgMSAwIDhhOCA4IDAgMCAxIDE2IDB6TTguNSA0LjVhLjUuNSAwIDAgMC0xIDB2M2gtM2EuNS41IDAgMCAwIDAgMWgzdjNhLjUuNSAwIDAgMCAxIDB2LTNoM2EuNS41IDAgMCAwIDAtMWgtM3YtM3pcIiAvPlxuICAgICAgICA8L3N2Zz5cbiAgICApXG59XG5mdW5jdGlvbiBCYWNrc3ZnKHtmaWxsLG9uQ2xpY2t9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgb25DbGljaz17b25DbGlja30gd2lkdGg9XCIzMFwiIGhlaWdodD1cIjMwXCIgZmlsbD17ZmlsbH0gY2xhc3NOYW1lPVwiYmkgYmktY2FyZXQtbGVmdC1zcXVhcmVcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTE0IDFhMSAxIDAgMCAxIDEgMXYxMmExIDEgMCAwIDEtMSAxSDJhMSAxIDAgMCAxLTEtMVYyYTEgMSAwIDAgMSAxLTFoMTJ6TTIgMGEyIDIgMCAwIDAtMiAydjEyYTIgMiAwIDAgMCAyIDJoMTJhMiAyIDAgMCAwIDItMlYyYTIgMiAwIDAgMC0yLTJIMnpcIiAvPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0xMC4yMDUgMTIuNDU2QS41LjUgMCAwIDAgMTAuNSAxMlY0YS41LjUgMCAwIDAtLjgzMi0uMzc0bC00LjUgNGEuNS41IDAgMCAwIDAgLjc0OGw0LjUgNGEuNS41IDAgMCAwIC41MzcuMDgyelwiIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcbn1cbmZ1bmN0aW9uIERlbGV0ZVN2Zyh7ZmlsbCxvbkNsaWNrLHN0eWxlfSkge1xuICAgIHJldHVybihcbiAgICAgICAgPHN2ZyBzdHlsZT17e3Bvc2l0aW9uOlwic3RhdGljICFpbXBvcnRhbnRcIn19IG9uQ2xpY2s9e29uQ2xpY2t9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI1XCIgaGVpZ2h0PVwiMjVcIiBmaWxsPXtmaWxsfSBjbGFzc05hbWU9XCJiaSBiaS10cmFzaFwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNNS41IDUuNUEuNS41IDAgMCAxIDYgNnY2YS41LjUgMCAwIDEtMSAwVjZhLjUuNSAwIDAgMSAuNS0uNXptMi41IDBhLjUuNSAwIDAgMSAuNS41djZhLjUuNSAwIDAgMS0xIDBWNmEuNS41IDAgMCAxIC41LS41em0zIC41YS41LjUgMCAwIDAtMSAwdjZhLjUuNSAwIDAgMCAxIDBWNnpcIiAvPlxuICAgICAgICAgICAgPHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgZD1cIk0xNC41IDNhMSAxIDAgMCAxLTEgMUgxM3Y5YTIgMiAwIDAgMS0yIDJINWEyIDIgMCAwIDEtMi0yVjRoLS41YTEgMSAwIDAgMS0xLTFWMmExIDEgMCAwIDEgMS0xSDZhMSAxIDAgMCAxIDEtMWgyYTEgMSAwIDAgMSAxIDFoMy41YTEgMSAwIDAgMSAxIDF2MXpNNC4xMTggNCA0IDQuMDU5VjEzYTEgMSAwIDAgMCAxIDFoNmExIDEgMCAwIDAgMS0xVjQuMDU5TDExLjg4MiA0SDQuMTE4ek0yLjUgM1YyaDExdjFoLTExelwiIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcbn0iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJhZG1pbmRhc2hcIjogXCJhZG1pbmRhc2hfYWRtaW5kYXNoX18xVndpRlwiLFxuXHRcIm5hdlwiOiBcImFkbWluZGFzaF9uYXZfXzM2RXFEXCIsXG5cdFwiYWRtaW5pbmZvXCI6IFwiYWRtaW5kYXNoX2FkbWluaW5mb19fMU5saHFcIixcblx0XCJ1c2VybmF2XCI6IFwiYWRtaW5kYXNoX3VzZXJuYXZfXzMyYzBqXCIsXG5cdFwiY2VudGVyXCI6IFwiYWRtaW5kYXNoX2NlbnRlcl9fMURIWTBcIixcblx0XCJhY3RpdmVcIjogXCJhZG1pbmRhc2hfYWN0aXZlX18yNVJGR1wiLFxuXHRcInRleHRkYXRhXCI6IFwiYWRtaW5kYXNoX3RleHRkYXRhX18xbHFEcFwiLFxuXHRcImFuYWx5dGljc1wiOiBcImFkbWluZGFzaF9hbmFseXRpY3NfXzFkbEdHXCIsXG5cdFwic2FsZXNcIjogXCJhZG1pbmRhc2hfc2FsZXNfX3JfM25sXCIsXG5cdFwic2Vjb25kYXJ5XCI6IFwiYWRtaW5kYXNoX3NlY29uZGFyeV9fMktIQWFcIixcblx0XCJ0aGlyZFwiOiBcImFkbWluZGFzaF90aGlyZF9fTnEyTThcIixcblx0XCJwaG90b1wiOiBcImFkbWluZGFzaF9waG90b19fMl9OQnRcIixcblx0XCJpbmZvc2VjdGlvblwiOiBcImFkbWluZGFzaF9pbmZvc2VjdGlvbl9fM2tVY0RcIixcblx0XCJvcHRpb25zXCI6IFwiYWRtaW5kYXNoX29wdGlvbnNfXzFfMW5aXCIsXG5cdFwiZmVhdHVyZXNcIjogXCJhZG1pbmRhc2hfZmVhdHVyZXNfXzNwQzdRXCIsXG5cdFwiZmVhdHVyZVwiOiBcImFkbWluZGFzaF9mZWF0dXJlX18yRzhNalwiLFxuXHRcImZlYXR1cmVmb3JtXCI6IFwiYWRtaW5kYXNoX2ZlYXR1cmVmb3JtX18yTzNCQVwiLFxuXHRcImdvYmlnZ2VyXCI6IFwiYWRtaW5kYXNoX2dvYmlnZ2VyX18zd2ZkWlwiLFxuXHRcImFkZGluZ2Zvcm1cIjogXCJhZG1pbmRhc2hfYWRkaW5nZm9ybV9fMWZYTHhcIixcblx0XCJnb3NtYWxsZXJcIjogXCJhZG1pbmRhc2hfZ29zbWFsbGVyX19OSkl1Y1wiLFxuXHRcInVwcGVyY29udGFpbmVyXCI6IFwiYWRtaW5kYXNoX3VwcGVyY29udGFpbmVyX18yZmNpYlwiLFxuXHRcInVwcGVyY29udGFpbmVyYWN0aXZlXCI6IFwiYWRtaW5kYXNoX3VwcGVyY29udGFpbmVyYWN0aXZlX18zcVB3NFwiLFxuXHRcImFkZGluZ2Zvcm0xXCI6IFwiYWRtaW5kYXNoX2FkZGluZ2Zvcm0xX18xRmpvNVwiLFxuXHRcImFkZGluZ2Zvcm0yXCI6IFwiYWRtaW5kYXNoX2FkZGluZ2Zvcm0yX19PRHBELVwiLFxuXHRcImFkZGluZ2Zvcm0zXCI6IFwiYWRtaW5kYXNoX2FkZGluZ2Zvcm0zX18yeFdQZ1wiLFxuXHRcIml0ZW1zXCI6IFwiYWRtaW5kYXNoX2l0ZW1zX19jVE9kbFwiLFxuXHRcImFkZGluZ0l0ZW1zXCI6IFwiYWRtaW5kYXNoX2FkZGluZ0l0ZW1zX18zWGtHVFwiLFxuXHRcInN1Ykl0ZW1zXCI6IFwiYWRtaW5kYXNoX3N1Ykl0ZW1zX19wOHZmUlwiLFxuXHRcIm1hbmFnZVwiOiBcImFkbWluZGFzaF9tYW5hZ2VfXzJUYlQ4XCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9