(function() {
var exports = {};
exports.id = "pages/admin";
exports.ids = ["pages/admin"];
exports.modules = {

/***/ "./pages/admin/index.jsx":
/*!*******************************!*\
  !*** ./pages/admin/index.jsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashHome; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_login_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/login.module.css */ "./styles/login.module.css");
/* harmony import */ var _styles_login_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_login_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "/home/sanket2904/unihelp_new/pages/admin/index.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const Loader = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => __webpack_require__.e(/*! import() */ "components_loader_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/loader */ "./components/loader.jsx")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ../../components/loader */ "./components/loader.jsx")],
    modules: ["admin/index.jsx -> " + "../../components/loader"]
  }
});
const Top = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => __webpack_require__.e(/*! import() */ "components_top_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/top */ "./components/top.jsx")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ../../components/top */ "./components/top.jsx")],
    modules: ["admin/index.jsx -> " + "../../components/top"]
  }
});
const Dashboard = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => __webpack_require__.e(/*! import() */ "components_admincontrols_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/admincontrols */ "./components/admincontrols.jsx")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ../../components/admincontrols */ "./components/admincontrols.jsx")],
    modules: ["admin/index.jsx -> " + "../../components/admincontrols"]
  }
});
function DashHome() {
  const {
    0: err,
    1: setErr
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: main,
    1: setMain
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    user: false,
    up: false,
    signin: true,
    signup: false,
    loader: false
  });
  const {
    0: state,
    1: setState
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });
  const {
    0: email,
    1: setEmail
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: signState,
    1: setSignState
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    email: "",
    password: ""
  });

  const initialCheck = () => {
    if (!window.session) {
      window.session = JSON.parse(window.localStorage.getItem("session"));
    }

    if (window.session) {
      setMain(_objectSpread(_objectSpread({}, main), {}, {
        user: true,
        loader: false
      }));
    } else {
      setMain(_objectSpread(_objectSpread({}, main), {}, {
        loader: false,
        up: true
      }));
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    initialCheck();
  }, []);

  function handleSignIn(event) {
    event.preventDefault();
    setSignState(_objectSpread(_objectSpread({}, signState), {}, {
      [event.target.name]: event.target.value
    }));
  }

  function Check() {
    setMain({
      user: false,
      up: false,
      signin: false,
      signup: false,
      loader: true
    });
    axios__WEBPACK_IMPORTED_MODULE_3___default().post("/api/email", {
      email: email
    }).then(res => {
      if (res.data.validation === 'signup') {
        setTimeout(() => {
          setMain(_objectSpread(_objectSpread({}, main), {}, {
            up: false,
            signin: false,
            signup: true,
            loader: false
          }));
        }, 300);
      } else if (res.data.validation === 'signin') {
        setTimeout(() => {
          setMain(_objectSpread(_objectSpread({}, main), {}, {
            up: false,
            signin: true,
            signup: false,
            loader: false
          }));
        }, 300);
      }
    });
  }

  function handleChange(event) {
    event.preventDefault();
    setState(_objectSpread(_objectSpread({}, state), {}, {
      [event.target.name]: event.target.value
    }));
  }

  function Send() {
    axios__WEBPACK_IMPORTED_MODULE_3___default().post("/api/addUser", state).then(res => {
      console.log(res);

      if (res.status === 200) {}
    });
  }

  function SignIn() {
    setMain({
      user: false,
      up: false,
      signin: false,
      signup: false,
      loader: true
    });
    axios__WEBPACK_IMPORTED_MODULE_3___default().post("/api/signin", signState).then(res => {
      if (res.data.verification) {
        let session = {
          token: res.data.token,
          session: res.data.session
        };
        window.session = session;
        window.localStorage.setItem("session", JSON.stringify(session)); // setTimeout(() => {

        setMain({
          user: true,
          up: false,
          signin: false,
          signup: false,
          loader: false
        }); // },300)
      } else {
        setErr(!err);
        setMain(_objectSpread(_objectSpread({}, main), {}, {
          loader: false
        }));
      }
    });
  }

  if (main.user) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Dashboard, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 166,
    columnNumber: 27
  }, this);else if (main.loader) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Loader, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 167,
    columnNumber: 34
  }, this);else if (main.up) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Top, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_4___default().login),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_4___default().leftContent)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_4___default().rightContent),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: " Sign In or Sign Up"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
          action: "#",
          onSubmit: Check,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "email",
            name: "email",
            id: "",
            placeholder: "Email*",
            value: email,
            onChange: event => setEmail(event.target.value)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 180,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "button",
            value: "submit",
            className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_4___default().button),
            onClick: Check,
            onSubmit: Check
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 9
    }, this)]
  }, void 0, true);else if (main.signin) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Top, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_4___default().login),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_4___default().leftContent)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_4___default().rightContent),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: " Sign In"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
          action: "#",
          onSubmit: SignIn,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "email",
            name: "email",
            id: "",
            placeholder: "Email*",
            value: signState.email,
            onChange: handleSignIn
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 203,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "password",
            name: "password",
            id: "",
            placeholder: "Password*",
            value: signState.password,
            onChange: handleSignIn
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 204,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "button",
            value: "submit",
            className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_4___default().button),
            onClick: SignIn,
            onSubmit: SignIn
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 206,
            columnNumber: 21
          }, this), err && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            htmlFor: "test",
            children: "Wrong password try again"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 208,
            columnNumber: 32
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 9
    }, this)]
  }, void 0, true);else if (main.signup) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Top, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_4___default().login),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_4___default().leftContent)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_4___default().rightContent),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: " Sign Up"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 223,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
          action: "#",
          onSubmit: Send,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "text",
            name: "firstName",
            id: "",
            placeholder: "First Name*",
            value: state.firstName,
            onChange: handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "text",
            name: "lastName",
            id: "",
            placeholder: "Last Name*",
            value: state.lastName,
            onChange: handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 227,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "email",
            name: "email",
            id: "",
            placeholder: "Email*",
            value: state.email,
            onChange: handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 228,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "password",
            name: "password",
            id: "",
            placeholder: "Create Password",
            value: state.password,
            onChange: handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 229,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "Password must be at least 8 characters long"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 230,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "button",
            value: "submit",
            className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_4___default().button),
            onClick: Send,
            onSubmit: Send
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 231,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 9
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./styles/login.module.css":
/*!*********************************!*\
  !*** ./styles/login.module.css ***!
  \*********************************/
/***/ (function(module) {

// Exports
module.exports = {
	"login": "login_login__2IpHY",
	"leftContent": "login_leftContent__d_0Ae",
	"rightContent": "login_rightContent__3SUgi",
	"button": "login_button__3XC2R"
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
var __webpack_exports__ = (__webpack_exec__("./pages/admin/index.jsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bmloZWxwLy4vcGFnZXMvYWRtaW4vaW5kZXguanN4Iiwid2VicGFjazovL3VuaWhlbHAvLi9zdHlsZXMvbG9naW4ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly91bmloZWxwL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly91bmloZWxwL2V4dGVybmFsIFwianF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vdW5paGVscC9leHRlcm5hbCBcIm5leHQvZHluYW1pY1wiIiwid2VicGFjazovL3VuaWhlbHAvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3VuaWhlbHAvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJMb2FkZXIiLCJkeW5hbWljIiwiVG9wIiwiRGFzaGJvYXJkIiwiRGFzaEhvbWUiLCJlcnIiLCJzZXRFcnIiLCJ1c2VTdGF0ZSIsIm1haW4iLCJzZXRNYWluIiwidXNlciIsInVwIiwic2lnbmluIiwic2lnbnVwIiwibG9hZGVyIiwic3RhdGUiLCJzZXRTdGF0ZSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsInNldEVtYWlsIiwic2lnblN0YXRlIiwic2V0U2lnblN0YXRlIiwiaW5pdGlhbENoZWNrIiwid2luZG93Iiwic2Vzc2lvbiIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1c2VFZmZlY3QiLCJoYW5kbGVTaWduSW4iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiQ2hlY2siLCJheGlvcyIsInRoZW4iLCJyZXMiLCJkYXRhIiwidmFsaWRhdGlvbiIsInNldFRpbWVvdXQiLCJoYW5kbGVDaGFuZ2UiLCJTZW5kIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsIlNpZ25JbiIsInZlcmlmaWNhdGlvbiIsInRva2VuIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInN0eWxlIiwibGVmdENv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O0FBQUEsa0JBSkosZUFLSTtBQUFPLGdCQUFJLEVBQUMsVUFBWjtBQUF1QixnQkFBSSxFQUFDLFVBQTVCO0FBQXVDLGNBQUUsRUFBQyxFQUExQztBQUE2Qyx1QkFBVyxFQUFDLGlCQUF6RDtBQUEyRSxpQkFBSyxFQUFFOUIsS0FBSyxDQUFDSyxRQUF4RjtBQUFrRyxvQkFBUSxFQUFFeUI7QUFBNUc7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMSixlQU1JO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQU5KLGVBT0k7QUFBTyxnQkFBSSxFQUFDLFFBQVo7QUFBcUIsaUJBQUssRUFBQyxRQUEzQjtBQUFvQyxxQkFBUyxFQUFFVSx3RUFBL0M7QUFBOEQsbUJBQU8sRUFBRVQsSUFBdkU7QUFBNkUsb0JBQVEsRUFBRUE7QUFBdkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkE7QUFBQSxrQkFEaUI7QUF1QnhCLEM7Ozs7Ozs7Ozs7QUM3T0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ05BLG1DOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL2FkbWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCJcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi4vLi4vc3R5bGVzL2xvZ2luLm1vZHVsZS5jc3NcIlxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxuXG5cblxuY29uc3QgTG9hZGVyID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCIuLi8uLi9jb21wb25lbnRzL2xvYWRlclwiKSlcbmNvbnN0IFRvcCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiLi4vLi4vY29tcG9uZW50cy90b3BcIikpXG5jb25zdCBEYXNoYm9hcmQgPSBkeW5hbWljKCgpID0+IGltcG9ydChcIi4uLy4uL2NvbXBvbmVudHMvYWRtaW5jb250cm9sc1wiKSlcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhc2hIb21lICgpIHtcbiAgICBjb25zdCBbZXJyLHNldEVycl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgIFxuICAgIGNvbnN0IFttYWluLHNldE1haW5dID0gdXNlU3RhdGUoe1xuICAgICAgICB1c2VyOmZhbHNlLFxuICAgICAgICB1cDpmYWxzZSxcbiAgICAgICAgc2lnbmluOnRydWUsXG4gICAgICAgIHNpZ251cDpmYWxzZSxcbiAgICAgICAgbG9hZGVyOmZhbHNlXG4gICAgfSlcbiAgICBcbiAgICBjb25zdCBbc3RhdGUsc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xuICAgICAgICBmaXJzdE5hbWU6XCJcIixcbiAgICAgICAgbGFzdE5hbWU6IFwiXCIsXG4gICAgICAgIGVtYWlsOlwiXCIsXG4gICAgICAgIHBhc3N3b3JkOlwiXCJcbiAgICB9KVxuICAgIGNvbnN0IFtlbWFpbCxzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKVxuICAgIGNvbnN0IFtzaWduU3RhdGUsc2V0U2lnblN0YXRlXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgZW1haWw6XCJcIixcbiAgICAgICAgcGFzc3dvcmQ6XCJcIlxuICAgIH0pXG4gICAgY29uc3QgaW5pdGlhbENoZWNrID0gKCkgPT4ge1xuICAgICAgICBpZighd2luZG93LnNlc3Npb24pIHtcbiAgICAgICAgICAgIHdpbmRvdy5zZXNzaW9uID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzZXNzaW9uXCIpKVxuICAgICAgICB9XG4gICAgICAgIGlmKHdpbmRvdy5zZXNzaW9uKSB7XG4gICAgICAgICAgICBzZXRNYWluKHtcbiAgICAgICAgICAgICAgICAuLi5tYWluLFxuICAgICAgICAgICAgICAgIHVzZXI6dHJ1ZSxcbiAgICAgICAgICAgICAgICBsb2FkZXI6ZmFsc2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZXRNYWluKHtcbiAgICAgICAgICAgICAgICAuLi5tYWluLFxuICAgICAgICAgICAgICAgIGxvYWRlcjpmYWxzZSxcbiAgICAgICAgICAgICAgICB1cDp0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGluaXRpYWxDaGVjaygpXG4gICAgICAgIFxuICAgICAgICBcbiAgICB9LFtdKVxuICAgIGZ1bmN0aW9uIGhhbmRsZVNpZ25JbihldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIHNldFNpZ25TdGF0ZSh7XG4gICAgICAgICAgICAuLi5zaWduU3RhdGUsXG4gICAgICAgICAgICBbZXZlbnQudGFyZ2V0Lm5hbWVdOmV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICB9KVxuICAgIH1cbiAgICBmdW5jdGlvbiBDaGVjaygpIHtcbiAgICAgICAgc2V0TWFpbih7XG4gICAgICAgICAgICB1c2VyOmZhbHNlLFxuICAgICAgICAgICAgdXA6ZmFsc2UsXG4gICAgICAgICAgICBzaWduaW46ZmFsc2UsXG4gICAgICAgICAgICBzaWdudXA6ZmFsc2UsXG4gICAgICAgICAgICBsb2FkZXI6dHJ1ZVxuICAgICAgICB9KVxuICAgICAgICBheGlvcy5wb3N0KFwiL2FwaS9lbWFpbFwiLHtlbWFpbCA6IGVtYWlsfSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYocmVzLmRhdGEudmFsaWRhdGlvbiA9PT0gJ3NpZ251cCcpIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0TWFpbih7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5tYWluLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXA6ZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaWduaW46ZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaWdudXA6dHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRlcjpmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9LDMwMClcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKHJlcy5kYXRhLnZhbGlkYXRpb24gPT09ICdzaWduaW4nKSB7XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRNYWluKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5tYWluLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwOmZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25pbjp0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZ251cDpmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkZXI6ZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH0sMzAwKVxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIHNldFN0YXRlKHsuLi5zdGF0ZSxcbiAgICAgICAgICAgIFtldmVudC50YXJnZXQubmFtZV06ZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pXG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIFNlbmQoKSB7XG4gICAgICAgIFxuICAgICAgICBheGlvcy5wb3N0KFwiL2FwaS9hZGRVc2VyXCIsc3RhdGUpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgICAgIGlmKHJlcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIFNpZ25JbigpIHtcbiAgICAgICAgc2V0TWFpbih7XG4gICAgICAgICAgICB1c2VyOmZhbHNlLFxuICAgICAgICAgICAgdXA6ZmFsc2UsXG4gICAgICAgICAgICBzaWduaW46ZmFsc2UsXG4gICAgICAgICAgICBzaWdudXA6ZmFsc2UsXG4gICAgICAgICAgICBsb2FkZXI6dHJ1ZVxuICAgICAgICB9KVxuICAgICAgICBheGlvcy5wb3N0KFwiL2FwaS9zaWduaW5cIixzaWduU3RhdGUpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYocmVzLmRhdGEudmVyaWZpY2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNlc3Npb24gPSB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuOnJlcy5kYXRhLnRva2VuLFxuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uOnJlcy5kYXRhLnNlc3Npb25cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgd2luZG93LnNlc3Npb24gPSBzZXNzaW9uXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic2Vzc2lvblwiLEpTT04uc3RyaW5naWZ5KHNlc3Npb24pKVxuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgIHNldE1haW4oe1xuICAgICAgICAgICAgICAgICAgICB1c2VyOnRydWUsXG4gICAgICAgICAgICAgICAgICAgIHVwOmZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBzaWduaW46ZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHNpZ251cDpmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVyOmZhbHNlXG4gICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIC8vIH0sMzAwKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0RXJyKCFlcnIpXG4gICAgICAgICAgICAgICAgc2V0TWFpbih7XG4gICAgICAgICAgICAgICAgICAgIC4uLm1haW4sXG4gICAgICAgICAgICAgICAgICAgIGxvYWRlcjpmYWxzZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfSlcbiAgICB9XG4gICAgaWYgKG1haW4udXNlcikgcmV0dXJuIDxEYXNoYm9hcmQgLz5cbiAgICBlbHNlIGlmIChtYWluLmxvYWRlcikgcmV0dXJuIDxMb2FkZXIgLz5cbiAgICBlbHNlIGlmKG1haW4udXApIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIDxUb3AgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmxvZ2lufT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5sZWZ0Q29udGVudH0+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnJpZ2h0Q29udGVudH0+XG4gICAgICAgICAgICAgICAgPGgyPiBTaWduIEluIG9yIFNpZ24gVXA8L2gyPlxuICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIiNcIiBvblN1Ym1pdD17Q2hlY2t9PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIGlkPVwiXCIgcGxhY2Vob2xkZXI9XCJFbWFpbCpcIiB2YWx1ZT17ZW1haWx9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldEVtYWlsKGV2ZW50LnRhcmdldC52YWx1ZSkgfSAvPlxuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT17c3R5bGUuYnV0dG9ufSAgb25DbGljaz17Q2hlY2t9IG9uU3VibWl0PXtDaGVja30gIC8+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz4gXG4gICAgKVxuICAgICAgICBcbiAgICBcbiAgICBlbHNlIGlmIChtYWluLnNpZ25pbikgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgPFRvcCAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubG9naW59PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmxlZnRDb250ZW50fT5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUucmlnaHRDb250ZW50fT5cbiAgICAgICAgICAgICAgICA8aDI+IFNpZ24gSW48L2gyPlxuICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIiNcIiBvblN1Ym1pdD17U2lnbklufT5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBpZD1cIlwiIHBsYWNlaG9sZGVyPVwiRW1haWwqXCIgdmFsdWU9e3NpZ25TdGF0ZS5lbWFpbH0gb25DaGFuZ2U9e2hhbmRsZVNpZ25Jbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIGlkPVwiXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZCpcIiB2YWx1ZT17c2lnblN0YXRlLnBhc3N3b3JkfSBvbkNoYW5nZT17aGFuZGxlU2lnbklufSAvPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT17c3R5bGUuYnV0dG9ufSAgb25DbGljaz17U2lnbklufSBvblN1Ym1pdD17U2lnbklufSAvPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnIgJiYgPGxhYmVsIGh0bWxGb3I9XCJ0ZXN0XCI+V3JvbmcgcGFzc3dvcmQgdHJ5IGFnYWluPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+IFxuICAgIClcbiAgICBlbHNlIGlmKG1haW4uc2lnbnVwKSByZXR1cm4oXG4gICAgICAgIDw+XG4gICAgICAgIDxUb3AgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmxvZ2lufT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5sZWZ0Q29udGVudH0+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnJpZ2h0Q29udGVudH0+XG4gICAgICAgICAgICAgICAgPGgyPiBTaWduIFVwPC9oMj5cbiAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIjXCIgb25TdWJtaXQ9e1NlbmR9PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImZpcnN0TmFtZVwiIGlkPVwiXCIgcGxhY2Vob2xkZXI9XCJGaXJzdCBOYW1lKlwiIHZhbHVlPXtzdGF0ZS5maXJzdE5hbWV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJsYXN0TmFtZVwiIGlkPVwiXCIgcGxhY2Vob2xkZXI9XCJMYXN0IE5hbWUqXCIgdmFsdWU9e3N0YXRlLmxhc3ROYW1lfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgaWQ9XCJcIiBwbGFjZWhvbGRlcj1cIkVtYWlsKlwiIHZhbHVlPXtzdGF0ZS5lbWFpbH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIGlkPVwiXCIgcGxhY2Vob2xkZXI9XCJDcmVhdGUgUGFzc3dvcmRcIiB2YWx1ZT17c3RhdGUucGFzc3dvcmR9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxwPlBhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgOCBjaGFyYWN0ZXJzIGxvbmc8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJzdWJtaXRcIiBjbGFzc05hbWU9e3N0eWxlLmJ1dHRvbn0gIG9uQ2xpY2s9e1NlbmR9IG9uU3VibWl0PXtTZW5kfSAvPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKVxuICAgXG59XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJsb2dpblwiOiBcImxvZ2luX2xvZ2luX18ySXBIWVwiLFxuXHRcImxlZnRDb250ZW50XCI6IFwibG9naW5fbGVmdENvbnRlbnRfX2RfMEFlXCIsXG5cdFwicmlnaHRDb250ZW50XCI6IFwibG9naW5fcmlnaHRDb250ZW50X18zU1VnaVwiLFxuXHRcImJ1dHRvblwiOiBcImxvZ2luX2J1dHRvbl9fM1hDMlJcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcXVlcnlcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZHluYW1pY1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==