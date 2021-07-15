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
/* harmony import */ var _styles_login_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/login.module.css */ "./styles/login.module.css");
/* harmony import */ var _styles_login_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_login_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);


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
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    jquery__WEBPACK_IMPORTED_MODULE_4___default()("body").css("backgroundSize", "0");
  }, []);
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
    0: udata,
    1: setUdata
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
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
    } else if (window.session.err) {
      setMain(_objectSpread(_objectSpread({}, main), {}, {
        up: false,
        signin: true,
        signup: false,
        loader: false
      }));
    } else {
      console.log("here as well");
      setMain(_objectSpread(_objectSpread({}, main), {}, {
        loader: false,
        up: true
      }));
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    initialCheck();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (window.localStorage.session) {
      console.log("doing the task");
      console.log(window.session.session);
      axios__WEBPACK_IMPORTED_MODULE_3___default().post("/api/tokenauth", window.session.session, {
        headers: {
          Authorization: `Bearer ${window.session.token}`
        }
      }).then(res => {
        if (res.status === 200) {
          window.localStorage.session = JSON.stringify(res.data);
          window.session = JSON.parse(window.localStorage.session);
          setMain(_objectSpread(_objectSpread({}, main), {}, {
            user: true,
            loader: false
          }));
        }
      }).catch(err => {
        setMain(_objectSpread(_objectSpread({}, main), {}, {
          up: false,
          signin: true,
          signup: false,
          loader: false
        }));
      });
    } else {
      setMain(_objectSpread(_objectSpread({}, main), {}, {
        loader: false,
        up: true
      }));
    }
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
    lineNumber: 215,
    columnNumber: 27
  }, this);else if (main.loader) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Loader, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 216,
    columnNumber: 34
  }, this);else if (main.up) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().top),
      style: {
        backgroundColor: "#f2f6ff",
        boxSizing: "border-box"
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Logo, {
        fill: "#1f1f47"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().login),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().leftContent)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().rightContent),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: " Sign In or Sign Up"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 228,
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
            lineNumber: 232,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "button",
            value: "Submit",
            className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().button),
            onClick: Check,
            onSubmit: Check
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 235,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 9
    }, this)]
  }, void 0, true);else if (main.signin) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().top),
      style: {
        backgroundColor: "#f2f6ff",
        boxSizing: "border-box"
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Logo, {
        fill: "#1f1f47"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().login),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().leftContent)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().rightContent),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: " Sign In"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 254,
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
            lineNumber: 258,
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
            lineNumber: 259,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "button",
            value: "Submit",
            className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().button),
            onClick: SignIn,
            onSubmit: SignIn
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 261,
            columnNumber: 21
          }, this), err && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            htmlFor: "test",
            children: "Wrong password try again"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 263,
            columnNumber: 32
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 255,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 9
    }, this)]
  }, void 0, true);else if (main.signup) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().top),
      style: {
        backgroundColor: "#f2f6ff",
        boxSizing: "border-box"
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Logo, {
        fill: "#1f1f47"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 273,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().login),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().leftContent)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().rightContent),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: " Sign Up"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 281,
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
            lineNumber: 284,
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
            lineNumber: 285,
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
            lineNumber: 286,
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
            lineNumber: 287,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "Password must be at least 8 characters long"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 288,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "button",
            value: "Submit",
            className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().button),
            onClick: Send,
            onSubmit: Send
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 289,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 282,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 9
    }, this)]
  }, void 0, true);
}

function Logo({
  fill
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
    width: "184",
    height: "129",
    viewBox: "0 0 184 129",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M41.4682 35.843V49.4226C41.4682 51.6788 40.7602 53.463 39.3442 54.7751C37.9376 56.0873 36.0118 56.7434 33.5669 56.7434C31.1596 56.7434 29.248 56.1062 27.832 54.8318C26.416 53.5574 25.6938 51.8062 25.6655 49.5784V35.843H29.9135V49.4509C29.9135 50.8009 30.2345 51.7874 30.8764 52.4104C31.5278 53.024 32.4246 53.3308 33.5669 53.3308C35.9552 53.3308 37.1683 52.0753 37.206 49.5642V35.843H41.4682ZM61.7172 56.4602H57.4692L49.1997 42.8948V56.4602H44.9516V35.843H49.1997L57.4834 49.4368V35.843H61.7172V56.4602ZM69.9443 56.4602H65.6963V35.843H69.9443V56.4602Z",
      fill: fill
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M87.4867 56.4602H83.2387V47.6243H74.955V56.4602H70.7069V35.843H74.955V44.1975H83.2387V35.843H87.4867V56.4602ZM103.615 47.5251H95.4589V53.0476H105.031V56.4602H91.2108V35.843H105.003V39.2839H95.4589V44.1975H103.615V47.5251ZM111.771 53.0476H120.791V56.4602H107.523V35.843H111.771V53.0476ZM127.489 49.196V56.4602H123.241V35.843H131.284C132.832 35.843 134.192 36.1262 135.362 36.6926C136.542 37.259 137.448 38.0662 138.081 39.114C138.713 40.1524 139.03 41.3372 139.03 42.6682C139.03 44.6884 138.336 46.2838 136.948 47.4543C135.57 48.6155 133.658 49.196 131.213 49.196H127.489ZM127.489 45.7551H131.284C132.407 45.7551 133.262 45.4908 133.847 44.9622C134.442 44.4335 134.739 43.6783 134.739 42.6965C134.739 41.6864 134.442 40.8699 133.847 40.2468C133.252 39.6238 132.431 39.3028 131.383 39.2839H127.489V45.7551Z",
      fill: fill
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M29.4106 69.3723H28.9263V66.6458H25.6763V69.3723H25.1958V63.6848H25.6763V66.2395H28.9263V63.6848H29.4106V69.3723ZM30.4927 67.1965C30.4927 66.7903 30.5708 66.4244 30.7271 66.0989C30.8859 65.7734 31.1086 65.5208 31.395 65.3411C31.6841 65.1588 32.0109 65.0676 32.3755 65.0676C32.938 65.0676 33.3937 65.2655 33.7427 65.6614C34.0916 66.0546 34.2661 66.5767 34.2661 67.2278V67.3254C34.2661 67.7343 34.1867 68.1028 34.0278 68.4309C33.8716 68.7564 33.6502 69.0077 33.3638 69.1848C33.0773 69.3619 32.7505 69.4504 32.3833 69.4504C31.8234 69.4504 31.3677 69.2538 31.0161 68.8606C30.6672 68.4648 30.4927 67.9413 30.4927 67.2903V67.1965ZM30.9614 67.3254C30.9614 67.8306 31.0916 68.246 31.3521 68.5715C31.6151 68.8944 31.9588 69.0559 32.3833 69.0559C32.8052 69.0559 33.1463 68.8944 33.4067 68.5715C33.6698 68.246 33.8013 67.8176 33.8013 67.2864V67.1965C33.8013 66.8736 33.7414 66.578 33.6216 66.3098C33.5018 66.0416 33.3338 65.8346 33.1177 65.6887C32.9015 65.5403 32.6541 65.4661 32.3755 65.4661C31.9588 65.4661 31.619 65.6301 31.356 65.9583C31.0929 66.2838 30.9614 66.7109 30.9614 67.2395V67.3254ZM35.6606 65.1458L35.6763 65.8333C35.8325 65.578 36.0278 65.3866 36.2622 65.259C36.4966 65.1314 36.757 65.0676 37.0435 65.0676C37.7101 65.0676 38.1333 65.3411 38.313 65.8879C38.464 65.6249 38.6659 65.4231 38.9185 65.2825C39.1711 65.1392 39.4497 65.0676 39.7544 65.0676C40.6606 65.0676 41.1229 65.5624 41.1411 66.552V69.3723H40.6724V66.5872C40.6698 66.2096 40.5877 65.9296 40.4263 65.7473C40.2674 65.565 40.007 65.4739 39.645 65.4739C39.3091 65.4791 39.0252 65.5885 38.7935 65.802C38.5617 66.0129 38.4328 66.2708 38.4067 66.5754V69.3723H37.938V66.552C37.9354 66.19 37.8494 65.9205 37.6802 65.7434C37.5135 65.5637 37.2557 65.4739 36.9067 65.4739C36.6125 65.4739 36.3599 65.5585 36.1489 65.7278C35.938 65.8944 35.7817 66.1431 35.6802 66.4739V69.3723H35.2114V65.1458H35.6606ZM43.9653 69.4504C43.606 69.4504 43.2804 69.3619 42.9888 69.1848C42.6997 69.0077 42.4744 68.7616 42.313 68.4465C42.1515 68.1288 42.0708 67.7734 42.0708 67.3801V67.2122C42.0708 66.8059 42.1489 66.44 42.3052 66.1145C42.464 65.789 42.6841 65.5338 42.9653 65.3489C43.2466 65.1614 43.5513 65.0676 43.8794 65.0676C44.3924 65.0676 44.7987 65.2434 45.0981 65.595C45.4002 65.9439 45.5513 66.4218 45.5513 67.0286V67.2903H42.5356V67.3801C42.5356 67.8593 42.6724 68.259 42.9458 68.5793C43.2218 68.8971 43.5682 69.0559 43.9849 69.0559C44.2349 69.0559 44.4549 69.0103 44.645 68.9192C44.8377 68.828 45.0122 68.6822 45.1685 68.4817L45.4614 68.7043C45.1177 69.2017 44.619 69.4504 43.9653 69.4504ZM43.8794 65.4661C43.5278 65.4661 43.231 65.595 42.9888 65.8528C42.7492 66.1106 42.6034 66.4569 42.5513 66.8918H45.0864V66.8411C45.0734 66.4348 44.9575 66.1041 44.7388 65.8489C44.52 65.5937 44.2336 65.4661 43.8794 65.4661ZM48.9302 69.3723H48.4614V65.1458H48.9302V69.3723ZM48.3794 63.9231C48.3794 63.8346 48.408 63.7603 48.4653 63.7004C48.5226 63.6379 48.6007 63.6067 48.6997 63.6067C48.7987 63.6067 48.8768 63.6379 48.9341 63.7004C48.994 63.7603 49.0239 63.8346 49.0239 63.9231C49.0239 64.0116 48.994 64.0859 48.9341 64.1458C48.8768 64.2056 48.7987 64.2356 48.6997 64.2356C48.6007 64.2356 48.5226 64.2056 48.4653 64.1458C48.408 64.0859 48.3794 64.0116 48.3794 63.9231ZM52.7349 68.2981C52.7349 68.0663 52.6411 67.8801 52.4536 67.7395C52.2687 67.5989 51.9888 67.4895 51.6138 67.4114C51.2388 67.3306 50.9471 67.2395 50.7388 67.1379C50.533 67.0338 50.3794 66.9075 50.2778 66.759C50.1789 66.6106 50.1294 66.4309 50.1294 66.22C50.1294 65.8866 50.2687 65.6119 50.5474 65.3958C50.826 65.177 51.1828 65.0676 51.6177 65.0676C52.089 65.0676 52.4666 65.1848 52.7505 65.4192C53.0369 65.651 53.1802 65.9543 53.1802 66.3293H52.7114C52.7114 66.0819 52.6073 65.8762 52.3989 65.7122C52.1932 65.5481 51.9328 65.4661 51.6177 65.4661C51.3104 65.4661 51.063 65.5351 50.8755 65.6731C50.6906 65.8085 50.5981 65.9856 50.5981 66.2043C50.5981 66.4153 50.675 66.5793 50.8286 66.6965C50.9849 66.8111 51.2674 66.9166 51.6763 67.0129C52.0877 67.1093 52.395 67.2122 52.5981 67.3215C52.8039 67.4309 52.9562 67.5624 53.0552 67.7161C53.1541 67.8697 53.2036 68.0559 53.2036 68.2747C53.2036 68.6314 53.0591 68.9166 52.77 69.1301C52.4836 69.3437 52.1086 69.4504 51.645 69.4504C51.1528 69.4504 50.7531 69.3319 50.4458 69.095C50.1411 68.8554 49.9888 68.5533 49.9888 68.1887H50.4575C50.4757 68.4622 50.5903 68.6757 50.8013 68.8293C51.0148 68.9804 51.2961 69.0559 51.645 69.0559C51.9705 69.0559 52.2336 68.9843 52.4341 68.8411C52.6346 68.6978 52.7349 68.5168 52.7349 68.2981ZM57.2153 68.3997L57.2856 68.7629L57.3794 68.3801L58.395 65.1458H58.7935L59.7974 68.3528L59.9067 68.7981L59.9966 68.3879L60.8638 65.1458H61.3481L60.1177 69.3723H59.7192L58.6333 66.0208L58.5825 65.7903L58.5317 66.0247L57.4653 69.3723H57.0669L55.8403 65.1458H56.3208L57.2153 68.3997ZM62.6997 65.8606C62.8534 65.608 63.05 65.4127 63.2896 65.2747C63.5291 65.1366 63.7909 65.0676 64.0747 65.0676C64.5278 65.0676 64.8651 65.1952 65.0864 65.4504C65.3078 65.7056 65.4198 66.0885 65.4224 66.5989V69.3723H64.9575V66.595C64.9549 66.2174 64.8742 65.9361 64.7153 65.7512C64.5591 65.5663 64.3078 65.4739 63.9614 65.4739C63.6724 65.4739 63.4159 65.565 63.1919 65.7473C62.9705 65.927 62.8065 66.1705 62.6997 66.4778V69.3723H62.2349V63.3723H62.6997V65.8606ZM68.2622 69.4504C67.9028 69.4504 67.5773 69.3619 67.2856 69.1848C66.9966 69.0077 66.7713 68.7616 66.6099 68.4465C66.4484 68.1288 66.3677 67.7734 66.3677 67.3801V67.2122C66.3677 66.8059 66.4458 66.44 66.6021 66.1145C66.7609 65.789 66.981 65.5338 67.2622 65.3489C67.5435 65.1614 67.8481 65.0676 68.1763 65.0676C68.6893 65.0676 69.0955 65.2434 69.395 65.595C69.6971 65.9439 69.8481 66.4218 69.8481 67.0286V67.2903H66.8325V67.3801C66.8325 67.8593 66.9692 68.259 67.2427 68.5793C67.5187 68.8971 67.8651 69.0559 68.2817 69.0559C68.5317 69.0559 68.7518 69.0103 68.9419 68.9192C69.1346 68.828 69.3091 68.6822 69.4653 68.4817L69.7583 68.7043C69.4146 69.2017 68.9159 69.4504 68.2622 69.4504ZM68.1763 65.4661C67.8247 65.4661 67.5278 65.595 67.2856 65.8528C67.0461 66.1106 66.9002 66.4569 66.8481 66.8918H69.3833V66.8411C69.3703 66.4348 69.2544 66.1041 69.0356 65.8489C68.8169 65.5937 68.5304 65.4661 68.1763 65.4661ZM72.7114 65.5442C72.6125 65.526 72.507 65.5168 72.395 65.5168C72.1034 65.5168 71.856 65.5989 71.6528 65.7629C71.4523 65.9244 71.3091 66.1601 71.2231 66.47V69.3723H70.7583V65.1458H71.2153L71.2231 65.8176C71.4705 65.3176 71.8677 65.0676 72.4146 65.0676C72.5448 65.0676 72.6476 65.0846 72.7231 65.1184L72.7114 65.5442ZM75.0122 69.4504C74.6528 69.4504 74.3273 69.3619 74.0356 69.1848C73.7466 69.0077 73.5213 68.7616 73.3599 68.4465C73.1984 68.1288 73.1177 67.7734 73.1177 67.3801V67.2122C73.1177 66.8059 73.1958 66.44 73.3521 66.1145C73.5109 65.789 73.731 65.5338 74.0122 65.3489C74.2935 65.1614 74.5981 65.0676 74.9263 65.0676C75.4393 65.0676 75.8455 65.2434 76.145 65.595C76.4471 65.9439 76.5981 66.4218 76.5981 67.0286V67.2903H73.5825V67.3801C73.5825 67.8593 73.7192 68.259 73.9927 68.5793C74.2687 68.8971 74.6151 69.0559 75.0317 69.0559C75.2817 69.0559 75.5018 69.0103 75.6919 68.9192C75.8846 68.828 76.0591 68.6822 76.2153 68.4817L76.5083 68.7043C76.1646 69.2017 75.6659 69.4504 75.0122 69.4504ZM74.9263 65.4661C74.5747 65.4661 74.2778 65.595 74.0356 65.8528C73.7961 66.1106 73.6502 66.4569 73.5981 66.8918H76.1333V66.8411C76.1203 66.4348 76.0044 66.1041 75.7856 65.8489C75.5669 65.5937 75.2804 65.4661 74.9263 65.4661ZM80.7935 68.7004L82.0278 65.1458H82.5317L80.7271 70.0911L80.6333 70.3098C80.4015 70.8228 80.0435 71.0793 79.5591 71.0793C79.4471 71.0793 79.3273 71.0611 79.1997 71.0247L79.1958 70.6379L79.438 70.6614C79.6672 70.6614 79.8521 70.6041 79.9927 70.4895C80.1359 70.3775 80.257 70.1835 80.356 69.9075L80.563 69.3372L78.9692 65.1458H79.481L80.7935 68.7004ZM82.938 67.1965C82.938 66.7903 83.0161 66.4244 83.1724 66.0989C83.3312 65.7734 83.5539 65.5208 83.8403 65.3411C84.1294 65.1588 84.4562 65.0676 84.8208 65.0676C85.3833 65.0676 85.839 65.2655 86.188 65.6614C86.5369 66.0546 86.7114 66.5767 86.7114 67.2278V67.3254C86.7114 67.7343 86.632 68.1028 86.4731 68.4309C86.3169 68.7564 86.0955 69.0077 85.8091 69.1848C85.5226 69.3619 85.1958 69.4504 84.8286 69.4504C84.2687 69.4504 83.813 69.2538 83.4614 68.8606C83.1125 68.4648 82.938 67.9413 82.938 67.2903V67.1965ZM83.4067 67.3254C83.4067 67.8306 83.5369 68.246 83.7974 68.5715C84.0604 68.8944 84.4041 69.0559 84.8286 69.0559C85.2505 69.0559 85.5916 68.8944 85.8521 68.5715C86.1151 68.246 86.2466 67.8176 86.2466 67.2864V67.1965C86.2466 66.8736 86.1867 66.578 86.0669 66.3098C85.9471 66.0416 85.7791 65.8346 85.563 65.6887C85.3468 65.5403 85.0994 65.4661 84.8208 65.4661C84.4041 65.4661 84.0643 65.6301 83.8013 65.9583C83.5382 66.2838 83.4067 66.7109 83.4067 67.2395V67.3254ZM90.3989 68.8372C90.1177 69.246 89.6685 69.4504 89.0513 69.4504C88.6007 69.4504 88.2583 69.3202 88.0239 69.0598C87.7896 68.7968 87.6698 68.4088 87.6646 67.8958V65.1458H88.1294V67.8372C88.1294 68.6418 88.4549 69.0442 89.106 69.0442C89.783 69.0442 90.2114 68.7642 90.3911 68.2043V65.1458H90.8599V69.3723H90.4067L90.3989 68.8372ZM96.6919 69.3723C96.645 69.2395 96.6151 69.0429 96.6021 68.7825C96.438 68.996 96.2284 69.1614 95.9731 69.2786C95.7205 69.3931 95.4523 69.4504 95.1685 69.4504C94.7622 69.4504 94.4328 69.3372 94.1802 69.1106C93.9302 68.884 93.8052 68.5976 93.8052 68.2512C93.8052 67.8398 93.9757 67.5142 94.3169 67.2747C94.6606 67.0351 95.1385 66.9153 95.7505 66.9153H96.5981V66.4348C96.5981 66.1327 96.5044 65.8958 96.3169 65.7239C96.132 65.5494 95.8612 65.4622 95.5044 65.4622C95.1789 65.4622 94.9093 65.5455 94.6958 65.7122C94.4823 65.8788 94.3755 66.0793 94.3755 66.3137L93.9067 66.3098C93.9067 65.9739 94.063 65.6835 94.3755 65.4387C94.688 65.1913 95.0721 65.0676 95.5278 65.0676C95.9992 65.0676 96.3703 65.1861 96.6411 65.4231C96.9146 65.6575 97.0552 65.9856 97.063 66.4075V68.4075C97.063 68.8163 97.106 69.1223 97.1919 69.3254V69.3723H96.6919ZM95.2231 69.0364C95.5356 69.0364 95.8143 68.9609 96.0591 68.8098C96.3065 68.6588 96.4862 68.4569 96.5981 68.2043V67.2747H95.7622C95.2961 67.2799 94.9315 67.3658 94.6685 67.5325C94.4054 67.6965 94.2739 67.9231 94.2739 68.2122C94.2739 68.4491 94.3612 68.6458 94.5356 68.802C94.7127 68.9583 94.9419 69.0364 95.2231 69.0364ZM100.266 65.5442C100.167 65.526 100.062 65.5168 99.9497 65.5168C99.658 65.5168 99.4106 65.5989 99.2075 65.7629C99.007 65.9244 98.8638 66.1601 98.7778 66.47V69.3723H98.313V65.1458H98.77L98.7778 65.8176C99.0252 65.3176 99.4224 65.0676 99.9692 65.0676C100.099 65.0676 100.202 65.0846 100.278 65.1184L100.266 65.5442ZM102.567 69.4504C102.208 69.4504 101.882 69.3619 101.59 69.1848C101.301 69.0077 101.076 68.7616 100.915 68.4465C100.753 68.1288 100.672 67.7734 100.672 67.3801V67.2122C100.672 66.8059 100.75 66.44 100.907 66.1145C101.066 65.789 101.286 65.5338 101.567 65.3489C101.848 65.1614 102.153 65.0676 102.481 65.0676C102.994 65.0676 103.4 65.2434 103.7 65.595C104.002 65.9439 104.153 66.4218 104.153 67.0286V67.2903H101.137V67.3801C101.137 67.8593 101.274 68.259 101.547 68.5793C101.823 68.8971 102.17 69.0559 102.586 69.0559C102.836 69.0559 103.056 69.0103 103.247 68.9192C103.439 68.828 103.614 68.6822 103.77 68.4817L104.063 68.7043C103.719 69.2017 103.221 69.4504 102.567 69.4504ZM102.481 65.4661C102.129 65.4661 101.833 65.595 101.59 65.8528C101.351 66.1106 101.205 66.4569 101.153 66.8918H103.688V66.8411C103.675 66.4348 103.559 66.1041 103.34 65.8489C103.122 65.5937 102.835 65.4661 102.481 65.4661Z",
      fill: "white"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 300,
    columnNumber: 9
  }, this);
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
	"rightContent": "login_rightContent__3SUgi"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bmloZWxwLy4vcGFnZXMvYWRtaW4vaW5kZXguanN4Iiwid2VicGFjazovL3VuaWhlbHAvLi9zdHlsZXMvbG9naW4ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly91bmloZWxwL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly91bmloZWxwL2V4dGVybmFsIFwianF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vdW5paGVscC9leHRlcm5hbCBcIm5leHQvZHluYW1pY1wiIiwid2VicGFjazovL3VuaWhlbHAvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3VuaWhlbHAvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJMb2FkZXIiLCJkeW5hbWljIiwiVG9wIiwiRGFzaGJvYXJkIiwiRGFzaEhvbWUiLCJ1c2VFZmZlY3QiLCIkIiwiY3NzIiwiZXJyIiwic2V0RXJyIiwidXNlU3RhdGUiLCJtYWluIiwic2V0TWFpbiIsInVzZXIiLCJ1cCIsInNpZ25pbiIsInNpZ251cCIsImxvYWRlciIsInVkYXRhIiwic2V0VWRhdGEiLCJzdGF0ZSIsInNldFN0YXRlIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwic2V0RW1haWwiLCJzaWduU3RhdGUiLCJzZXRTaWduU3RhdGUiLCJpbml0aWFsQ2hlY2siLCJ3aW5kb3ciLCJzZXNzaW9uIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNvbnNvbGUiLCJsb2ciLCJheGlvcyIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidG9rZW4iLCJ0aGVuIiwicmVzIiwic3RhdHVzIiwic3RyaW5naWZ5IiwiZGF0YSIsImNhdGNoIiwiaGFuZGxlU2lnbkluIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsIkNoZWNrIiwidmFsaWRhdGlvbiIsInNldFRpbWVvdXQiLCJoYW5kbGVDaGFuZ2UiLCJTZW5kIiwiU2lnbkluIiwidmVyaWZpY2F0aW9uIiwic2V0SXRlbSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiYm94U2l6aW5nIiwibGVmdENvbnRlbnQiLCJMb2dvIiwiZmlsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsTUFBTUEsTUFBTSxHQUFHQyxtREFBTyxDQUFDLE1BQU0sNEtBQVA7QUFBQTtBQUFBLHdDQUFjLHdEQUFkO0FBQUEsc0NBQWMseUJBQWQ7QUFBQTtBQUFBLEVBQXRCO0FBQ0EsTUFBTUMsR0FBRyxHQUFHRCxtREFBTyxDQUFDLE1BQU0sbUtBQVA7QUFBQTtBQUFBLHdDQUFjLGtEQUFkO0FBQUEsc0NBQWMsc0JBQWQ7QUFBQTtBQUFBLEVBQW5CO0FBQ0EsTUFBTUUsU0FBUyxHQUFHRixtREFBTyxDQUFDLE1BQU0saU1BQVA7QUFBQTtBQUFBLHdDQUFjLHNFQUFkO0FBQUEsc0NBQWMsZ0NBQWQ7QUFBQTtBQUFBLEVBQXpCO0FBQ2UsU0FBU0csUUFBVCxHQUFxQjtBQUNoQ0Msa0RBQVMsQ0FBQyxNQUFNO0FBQ1pDLGlEQUFDLENBQUMsTUFBRCxDQUFELENBQVVDLEdBQVYsQ0FBYyxnQkFBZCxFQUErQixHQUEvQjtBQUVILEdBSFEsRUFHTixFQUhNLENBQVQ7QUFJQSxRQUFNO0FBQUEsT0FBQ0MsR0FBRDtBQUFBLE9BQUtDO0FBQUwsTUFBZUMsK0NBQVEsQ0FBQyxLQUFELENBQTdCO0FBRUEsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFNQztBQUFOLE1BQWlCRiwrQ0FBUSxDQUFDO0FBQzVCRyxRQUFJLEVBQUMsS0FEdUI7QUFFNUJDLE1BQUUsRUFBQyxLQUZ5QjtBQUc1QkMsVUFBTSxFQUFDLElBSHFCO0FBSTVCQyxVQUFNLEVBQUMsS0FKcUI7QUFLNUJDLFVBQU0sRUFBQztBQUxxQixHQUFELENBQS9CO0FBT0EsUUFBTTtBQUFBLE9BQUND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QUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0pBLG1DOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL2FkbWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCJcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi4vLi4vc3R5bGVzL2xvZ2luLm1vZHVsZS5jc3NcIlxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxuaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiXG5cblxuY29uc3QgTG9hZGVyID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCIuLi8uLi9jb21wb25lbnRzL2xvYWRlclwiKSlcbmNvbnN0IFRvcCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiLi4vLi4vY29tcG9uZW50cy90b3BcIikpXG5jb25zdCBEYXNoYm9hcmQgPSBkeW5hbWljKCgpID0+IGltcG9ydChcIi4uLy4uL2NvbXBvbmVudHMvYWRtaW5jb250cm9sc1wiKSlcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhc2hIb21lICgpIHtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAkKFwiYm9keVwiKS5jc3MoXCJiYWNrZ3JvdW5kU2l6ZVwiLFwiMFwiKVxuICAgICAgICBcbiAgICB9LCBbXSlcbiAgICBjb25zdCBbZXJyLHNldEVycl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgIFxuICAgIGNvbnN0IFttYWluLHNldE1haW5dID0gdXNlU3RhdGUoe1xuICAgICAgICB1c2VyOmZhbHNlLFxuICAgICAgICB1cDpmYWxzZSxcbiAgICAgICAgc2lnbmluOnRydWUsXG4gICAgICAgIHNpZ251cDpmYWxzZSxcbiAgICAgICAgbG9hZGVyOmZhbHNlXG4gICAgfSlcbiAgICBjb25zdCBbdWRhdGEsc2V0VWRhdGFdID0gdXNlU3RhdGUoKVxuICAgIGNvbnN0IFtzdGF0ZSxzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIGZpcnN0TmFtZTpcIlwiLFxuICAgICAgICBsYXN0TmFtZTogXCJcIixcbiAgICAgICAgZW1haWw6XCJcIixcbiAgICAgICAgcGFzc3dvcmQ6XCJcIlxuICAgIH0pXG4gICAgY29uc3QgW2VtYWlsLHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpXG4gICAgY29uc3QgW3NpZ25TdGF0ZSxzZXRTaWduU3RhdGVdID0gdXNlU3RhdGUoe1xuICAgICAgICBlbWFpbDpcIlwiLFxuICAgICAgICBwYXNzd29yZDpcIlwiXG4gICAgfSlcbiAgICBjb25zdCBpbml0aWFsQ2hlY2sgPSAoKSA9PiB7XG4gICAgICAgIGlmKCF3aW5kb3cuc2Vzc2lvbikge1xuICAgICAgICAgICAgd2luZG93LnNlc3Npb24gPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNlc3Npb25cIikpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAod2luZG93LnNlc3Npb24uZXJyKSB7XG4gICAgICAgICAgICBzZXRNYWluKHtcbiAgICAgICAgICAgICAgICAuLi5tYWluLFxuICAgICAgICAgICAgICAgIHVwOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzaWduaW46IHRydWUsXG4gICAgICAgICAgICAgICAgc2lnbnVwOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBsb2FkZXI6IGZhbHNlLFxuXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGVyZSBhcyB3ZWxsXCIpXG4gICAgICAgICAgICBzZXRNYWluKHtcbiAgICAgICAgICAgICAgICAuLi5tYWluLFxuICAgICAgICAgICAgICAgIGxvYWRlcjpmYWxzZSxcbiAgICAgICAgICAgICAgICB1cDp0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGluaXRpYWxDaGVjaygpXG5cblxuICAgIH0sIFtdKVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLnNlc3Npb24pIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZG9pbmcgdGhlIHRhc2tcIilcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHdpbmRvdy5zZXNzaW9uLnNlc3Npb24pXG4gICAgICAgICAgICBheGlvcy5wb3N0KFwiL2FwaS90b2tlbmF1dGhcIiwgd2luZG93LnNlc3Npb24uc2Vzc2lvbiwge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3dpbmRvdy5zZXNzaW9uLnRva2VufWBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNlc3Npb24gPSBKU09OLnN0cmluZ2lmeShyZXMuZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnNlc3Npb24gPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2Vzc2lvbilcbiAgICAgICAgICAgICAgICAgICAgc2V0TWFpbih7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5tYWluLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRlcjogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRNYWluKHtcbiAgICAgICAgICAgICAgICAgICAgLi4ubWFpbixcbiAgICAgICAgICAgICAgICAgICAgdXA6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBzaWduaW46IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHNpZ251cDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGxvYWRlcjogZmFsc2UsXG5cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZXRNYWluKHtcbiAgICAgICAgICAgICAgICAuLi5tYWluLFxuICAgICAgICAgICAgICAgIGxvYWRlcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgdXA6IHRydWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfSxbXSlcbiAgICBcbiAgICBmdW5jdGlvbiBoYW5kbGVTaWduSW4oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICBzZXRTaWduU3RhdGUoe1xuICAgICAgICAgICAgLi4uc2lnblN0YXRlLFxuICAgICAgICAgICAgW2V2ZW50LnRhcmdldC5uYW1lXTpldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgfSlcbiAgICB9XG4gICAgZnVuY3Rpb24gQ2hlY2soKSB7XG4gICAgICAgIHNldE1haW4oe1xuICAgICAgICAgICAgdXNlcjpmYWxzZSxcbiAgICAgICAgICAgIHVwOmZhbHNlLFxuICAgICAgICAgICAgc2lnbmluOmZhbHNlLFxuICAgICAgICAgICAgc2lnbnVwOmZhbHNlLFxuICAgICAgICAgICAgbG9hZGVyOnRydWVcbiAgICAgICAgfSlcbiAgICAgICAgYXhpb3MucG9zdChcIi9hcGkvZW1haWxcIix7ZW1haWwgOiBlbWFpbH0pLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGlmKHJlcy5kYXRhLnZhbGlkYXRpb24gPT09ICdzaWdudXAnKSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldE1haW4oe1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4ubWFpbixcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwOmZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2lnbmluOmZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2lnbnVwOnRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkZXI6ZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfSwzMDApXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihyZXMuZGF0YS52YWxpZGF0aW9uID09PSAnc2lnbmluJykge1xuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TWFpbih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ubWFpbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cDpmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaWduaW46dHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaWdudXA6ZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGVyOmZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9LDMwMClcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICBzZXRTdGF0ZSh7Li4uc3RhdGUsXG4gICAgICAgICAgICBbZXZlbnQudGFyZ2V0Lm5hbWVdOmV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICB9KVxuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBTZW5kKCkge1xuICAgICAgICBcbiAgICAgICAgYXhpb3MucG9zdChcIi9hcGkvYWRkVXNlclwiLHN0YXRlKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgICBpZihyZXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBTaWduSW4oKSB7XG4gICAgICAgIHNldE1haW4oe1xuICAgICAgICAgICAgdXNlcjpmYWxzZSxcbiAgICAgICAgICAgIHVwOmZhbHNlLFxuICAgICAgICAgICAgc2lnbmluOmZhbHNlLFxuICAgICAgICAgICAgc2lnbnVwOmZhbHNlLFxuICAgICAgICAgICAgbG9hZGVyOnRydWVcbiAgICAgICAgfSlcbiAgICAgICAgYXhpb3MucG9zdChcIi9hcGkvc2lnbmluXCIsc2lnblN0YXRlKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKHJlcy5kYXRhLnZlcmlmaWNhdGlvbikge1xuICAgICAgICAgICAgICAgIGxldCBzZXNzaW9uID0ge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbjpyZXMuZGF0YS50b2tlbixcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvbjpyZXMuZGF0YS5zZXNzaW9uXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHdpbmRvdy5zZXNzaW9uID0gc2Vzc2lvblxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNlc3Npb25cIixKU09OLnN0cmluZ2lmeShzZXNzaW9uKSlcblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICBzZXRNYWluKHtcbiAgICAgICAgICAgICAgICAgICAgdXNlcjp0cnVlLFxuICAgICAgICAgICAgICAgICAgICB1cDpmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgc2lnbmluOmZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBzaWdudXA6ZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGxvYWRlcjpmYWxzZVxuICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAvLyB9LDMwMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldEVycighZXJyKVxuICAgICAgICAgICAgICAgIHNldE1haW4oe1xuICAgICAgICAgICAgICAgICAgICAuLi5tYWluLFxuICAgICAgICAgICAgICAgICAgICBsb2FkZXI6ZmFsc2VcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGlmIChtYWluLnVzZXIpIHJldHVybiA8RGFzaGJvYXJkIC8+XG4gICAgZWxzZSBpZiAobWFpbi5sb2FkZXIpIHJldHVybiA8TG9hZGVyIC8+XG4gICAgZWxzZSBpZihtYWluLnVwKSByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnRvcH0gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOlwiI2YyZjZmZlwiLGJveFNpemluZzpcImJvcmRlci1ib3hcIn19PlxuICAgICAgICAgICAgICAgIDxMb2dvIGZpbGw9XCIjMWYxZjQ3XCIgIC8+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubG9naW59PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmxlZnRDb250ZW50fT5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUucmlnaHRDb250ZW50fT5cbiAgICAgICAgICAgICAgICA8aDI+IFNpZ24gSW4gb3IgU2lnbiBVcDwvaDI+XG4gICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiI1wiIG9uU3VibWl0PXtDaGVja30+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgaWQ9XCJcIiBwbGFjZWhvbGRlcj1cIkVtYWlsKlwiIHZhbHVlPXtlbWFpbH0gb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0RW1haWwoZXZlbnQudGFyZ2V0LnZhbHVlKSB9IC8+XG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiU3VibWl0XCIgY2xhc3NOYW1lPXtzdHlsZS5idXR0b259ICBvbkNsaWNrPXtDaGVja30gb25TdWJtaXQ9e0NoZWNrfSAgLz5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPiBcbiAgICApXG4gICAgICAgIFxuICAgIFxuICAgIGVsc2UgaWYgKG1haW4uc2lnbmluKSByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnRvcH0gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiNmMmY2ZmZcIiwgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIiB9fT5cbiAgICAgICAgICAgICAgICA8TG9nbyBmaWxsPVwiIzFmMWY0N1wiIC8+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubG9naW59PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmxlZnRDb250ZW50fT5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUucmlnaHRDb250ZW50fT5cbiAgICAgICAgICAgICAgICA8aDI+IFNpZ24gSW48L2gyPlxuICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIiNcIiBvblN1Ym1pdD17U2lnbklufT5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgaWQ9XCJcIiBwbGFjZWhvbGRlcj1cIkVtYWlsKlwiIHZhbHVlPXtzaWduU3RhdGUuZW1haWx9IG9uQ2hhbmdlPXtoYW5kbGVTaWduSW59IC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiBpZD1cIlwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmQqXCIgdmFsdWU9e3NpZ25TdGF0ZS5wYXNzd29yZH0gb25DaGFuZ2U9e2hhbmRsZVNpZ25Jbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJTdWJtaXRcIiBjbGFzc05hbWU9e3N0eWxlLmJ1dHRvbn0gIG9uQ2xpY2s9e1NpZ25Jbn0gb25TdWJtaXQ9e1NpZ25Jbn0gLz5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyICYmIDxsYWJlbCBodG1sRm9yPVwidGVzdFwiPldyb25nIHBhc3N3b3JkIHRyeSBhZ2FpbjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPiBcbiAgICApXG4gICAgZWxzZSBpZihtYWluLnNpZ251cCkgcmV0dXJuKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnRvcH0gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiNmMmY2ZmZcIiwgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIiB9fT5cbiAgICAgICAgICAgICAgICA8TG9nbyBmaWxsPVwiIzFmMWY0N1wiIC8+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubG9naW59PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmxlZnRDb250ZW50fT5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUucmlnaHRDb250ZW50fT5cbiAgICAgICAgICAgICAgICA8aDI+IFNpZ24gVXA8L2gyPlxuICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIiNcIiBvblN1Ym1pdD17U2VuZH0+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZmlyc3ROYW1lXCIgaWQ9XCJcIiBwbGFjZWhvbGRlcj1cIkZpcnN0IE5hbWUqXCIgdmFsdWU9e3N0YXRlLmZpcnN0TmFtZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImxhc3ROYW1lXCIgaWQ9XCJcIiBwbGFjZWhvbGRlcj1cIkxhc3QgTmFtZSpcIiB2YWx1ZT17c3RhdGUubGFzdE5hbWV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBpZD1cIlwiIHBsYWNlaG9sZGVyPVwiRW1haWwqXCIgdmFsdWU9e3N0YXRlLmVtYWlsfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgaWQ9XCJcIiBwbGFjZWhvbGRlcj1cIkNyZWF0ZSBQYXNzd29yZFwiIHZhbHVlPXtzdGF0ZS5wYXNzd29yZH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPHA+UGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA4IGNoYXJhY3RlcnMgbG9uZzwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIlN1Ym1pdFwiIGNsYXNzTmFtZT17c3R5bGUuYnV0dG9ufSAgb25DbGljaz17U2VuZH0gb25TdWJtaXQ9e1NlbmR9IC8+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApXG4gICBcbn1cblxuZnVuY3Rpb24gTG9nbyh7ZmlsbH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c3ZnIHdpZHRoPVwiMTg0XCIgaGVpZ2h0PVwiMTI5XCIgdmlld0JveD1cIjAgMCAxODQgMTI5XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTQxLjQ2ODIgMzUuODQzVjQ5LjQyMjZDNDEuNDY4MiA1MS42Nzg4IDQwLjc2MDIgNTMuNDYzIDM5LjM0NDIgNTQuNzc1MUMzNy45Mzc2IDU2LjA4NzMgMzYuMDExOCA1Ni43NDM0IDMzLjU2NjkgNTYuNzQzNEMzMS4xNTk2IDU2Ljc0MzQgMjkuMjQ4IDU2LjEwNjIgMjcuODMyIDU0LjgzMThDMjYuNDE2IDUzLjU1NzQgMjUuNjkzOCA1MS44MDYyIDI1LjY2NTUgNDkuNTc4NFYzNS44NDNIMjkuOTEzNVY0OS40NTA5QzI5LjkxMzUgNTAuODAwOSAzMC4yMzQ1IDUxLjc4NzQgMzAuODc2NCA1Mi40MTA0QzMxLjUyNzggNTMuMDI0IDMyLjQyNDYgNTMuMzMwOCAzMy41NjY5IDUzLjMzMDhDMzUuOTU1MiA1My4zMzA4IDM3LjE2ODMgNTIuMDc1MyAzNy4yMDYgNDkuNTY0MlYzNS44NDNINDEuNDY4MlpNNjEuNzE3MiA1Ni40NjAySDU3LjQ2OTJMNDkuMTk5NyA0Mi44OTQ4VjU2LjQ2MDJINDQuOTUxNlYzNS44NDNINDkuMTk5N0w1Ny40ODM0IDQ5LjQzNjhWMzUuODQzSDYxLjcxNzJWNTYuNDYwMlpNNjkuOTQ0MyA1Ni40NjAySDY1LjY5NjNWMzUuODQzSDY5Ljk0NDNWNTYuNDYwMlpcIiBmaWxsPXtmaWxsfSAvPlxuICAgICAgICAgICAgPHBhdGggZD1cIk04Ny40ODY3IDU2LjQ2MDJIODMuMjM4N1Y0Ny42MjQzSDc0Ljk1NVY1Ni40NjAySDcwLjcwNjlWMzUuODQzSDc0Ljk1NVY0NC4xOTc1SDgzLjIzODdWMzUuODQzSDg3LjQ4NjdWNTYuNDYwMlpNMTAzLjYxNSA0Ny41MjUxSDk1LjQ1ODlWNTMuMDQ3NkgxMDUuMDMxVjU2LjQ2MDJIOTEuMjEwOFYzNS44NDNIMTA1LjAwM1YzOS4yODM5SDk1LjQ1ODlWNDQuMTk3NUgxMDMuNjE1VjQ3LjUyNTFaTTExMS43NzEgNTMuMDQ3NkgxMjAuNzkxVjU2LjQ2MDJIMTA3LjUyM1YzNS44NDNIMTExLjc3MVY1My4wNDc2Wk0xMjcuNDg5IDQ5LjE5NlY1Ni40NjAySDEyMy4yNDFWMzUuODQzSDEzMS4yODRDMTMyLjgzMiAzNS44NDMgMTM0LjE5MiAzNi4xMjYyIDEzNS4zNjIgMzYuNjkyNkMxMzYuNTQyIDM3LjI1OSAxMzcuNDQ4IDM4LjA2NjIgMTM4LjA4MSAzOS4xMTRDMTM4LjcxMyA0MC4xNTI0IDEzOS4wMyA0MS4zMzcyIDEzOS4wMyA0Mi42NjgyQzEzOS4wMyA0NC42ODg0IDEzOC4zMzYgNDYuMjgzOCAxMzYuOTQ4IDQ3LjQ1NDNDMTM1LjU3IDQ4LjYxNTUgMTMzLjY1OCA0OS4xOTYgMTMxLjIxMyA0OS4xOTZIMTI3LjQ4OVpNMTI3LjQ4OSA0NS43NTUxSDEzMS4yODRDMTMyLjQwNyA0NS43NTUxIDEzMy4yNjIgNDUuNDkwOCAxMzMuODQ3IDQ0Ljk2MjJDMTM0LjQ0MiA0NC40MzM1IDEzNC43MzkgNDMuNjc4MyAxMzQuNzM5IDQyLjY5NjVDMTM0LjczOSA0MS42ODY0IDEzNC40NDIgNDAuODY5OSAxMzMuODQ3IDQwLjI0NjhDMTMzLjI1MiAzOS42MjM4IDEzMi40MzEgMzkuMzAyOCAxMzEuMzgzIDM5LjI4MzlIMTI3LjQ4OVY0NS43NTUxWlwiIGZpbGw9e2ZpbGx9IC8+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTI5LjQxMDYgNjkuMzcyM0gyOC45MjYzVjY2LjY0NThIMjUuNjc2M1Y2OS4zNzIzSDI1LjE5NThWNjMuNjg0OEgyNS42NzYzVjY2LjIzOTVIMjguOTI2M1Y2My42ODQ4SDI5LjQxMDZWNjkuMzcyM1pNMzAuNDkyNyA2Ny4xOTY1QzMwLjQ5MjcgNjYuNzkwMyAzMC41NzA4IDY2LjQyNDQgMzAuNzI3MSA2Ni4wOTg5QzMwLjg4NTkgNjUuNzczNCAzMS4xMDg2IDY1LjUyMDggMzEuMzk1IDY1LjM0MTFDMzEuNjg0MSA2NS4xNTg4IDMyLjAxMDkgNjUuMDY3NiAzMi4zNzU1IDY1LjA2NzZDMzIuOTM4IDY1LjA2NzYgMzMuMzkzNyA2NS4yNjU1IDMzLjc0MjcgNjUuNjYxNEMzNC4wOTE2IDY2LjA1NDYgMzQuMjY2MSA2Ni41NzY3IDM0LjI2NjEgNjcuMjI3OFY2Ny4zMjU0QzM0LjI2NjEgNjcuNzM0MyAzNC4xODY3IDY4LjEwMjggMzQuMDI3OCA2OC40MzA5QzMzLjg3MTYgNjguNzU2NCAzMy42NTAyIDY5LjAwNzcgMzMuMzYzOCA2OS4xODQ4QzMzLjA3NzMgNjkuMzYxOSAzMi43NTA1IDY5LjQ1MDQgMzIuMzgzMyA2OS40NTA0QzMxLjgyMzQgNjkuNDUwNCAzMS4zNjc3IDY5LjI1MzggMzEuMDE2MSA2OC44NjA2QzMwLjY2NzIgNjguNDY0OCAzMC40OTI3IDY3Ljk0MTMgMzAuNDkyNyA2Ny4yOTAzVjY3LjE5NjVaTTMwLjk2MTQgNjcuMzI1NEMzMC45NjE0IDY3LjgzMDYgMzEuMDkxNiA2OC4yNDYgMzEuMzUyMSA2OC41NzE1QzMxLjYxNTEgNjguODk0NCAzMS45NTg4IDY5LjA1NTkgMzIuMzgzMyA2OS4wNTU5QzMyLjgwNTIgNjkuMDU1OSAzMy4xNDYzIDY4Ljg5NDQgMzMuNDA2NyA2OC41NzE1QzMzLjY2OTggNjguMjQ2IDMzLjgwMTMgNjcuODE3NiAzMy44MDEzIDY3LjI4NjRWNjcuMTk2NUMzMy44MDEzIDY2Ljg3MzYgMzMuNzQxNCA2Ni41NzggMzMuNjIxNiA2Ni4zMDk4QzMzLjUwMTggNjYuMDQxNiAzMy4zMzM4IDY1LjgzNDYgMzMuMTE3NyA2NS42ODg3QzMyLjkwMTUgNjUuNTQwMyAzMi42NTQxIDY1LjQ2NjEgMzIuMzc1NSA2NS40NjYxQzMxLjk1ODggNjUuNDY2MSAzMS42MTkgNjUuNjMwMSAzMS4zNTYgNjUuOTU4M0MzMS4wOTI5IDY2LjI4MzggMzAuOTYxNCA2Ni43MTA5IDMwLjk2MTQgNjcuMjM5NVY2Ny4zMjU0Wk0zNS42NjA2IDY1LjE0NThMMzUuNjc2MyA2NS44MzMzQzM1LjgzMjUgNjUuNTc4IDM2LjAyNzggNjUuMzg2NiAzNi4yNjIyIDY1LjI1OUMzNi40OTY2IDY1LjEzMTQgMzYuNzU3IDY1LjA2NzYgMzcuMDQzNSA2NS4wNjc2QzM3LjcxMDEgNjUuMDY3NiAzOC4xMzMzIDY1LjM0MTEgMzguMzEzIDY1Ljg4NzlDMzguNDY0IDY1LjYyNDkgMzguNjY1OSA2NS40MjMxIDM4LjkxODUgNjUuMjgyNUMzOS4xNzExIDY1LjEzOTIgMzkuNDQ5NyA2NS4wNjc2IDM5Ljc1NDQgNjUuMDY3NkM0MC42NjA2IDY1LjA2NzYgNDEuMTIyOSA2NS41NjI0IDQxLjE0MTEgNjYuNTUyVjY5LjM3MjNINDAuNjcyNFY2Ni41ODcyQzQwLjY2OTggNjYuMjA5NiA0MC41ODc3IDY1LjkyOTYgNDAuNDI2MyA2NS43NDczQzQwLjI2NzQgNjUuNTY1IDQwLjAwNyA2NS40NzM5IDM5LjY0NSA2NS40NzM5QzM5LjMwOTEgNjUuNDc5MSAzOS4wMjUyIDY1LjU4ODUgMzguNzkzNSA2NS44MDJDMzguNTYxNyA2Ni4wMTI5IDM4LjQzMjggNjYuMjcwOCAzOC40MDY3IDY2LjU3NTRWNjkuMzcyM0gzNy45MzhWNjYuNTUyQzM3LjkzNTQgNjYuMTkgMzcuODQ5NCA2NS45MjA1IDM3LjY4MDIgNjUuNzQzNEMzNy41MTM1IDY1LjU2MzcgMzcuMjU1NyA2NS40NzM5IDM2LjkwNjcgNjUuNDczOUMzNi42MTI1IDY1LjQ3MzkgMzYuMzU5OSA2NS41NTg1IDM2LjE0ODkgNjUuNzI3OEMzNS45MzggNjUuODk0NCAzNS43ODE3IDY2LjE0MzEgMzUuNjgwMiA2Ni40NzM5VjY5LjM3MjNIMzUuMjExNFY2NS4xNDU4SDM1LjY2MDZaTTQzLjk2NTMgNjkuNDUwNEM0My42MDYgNjkuNDUwNCA0My4yODA0IDY5LjM2MTkgNDIuOTg4OCA2OS4xODQ4QzQyLjY5OTcgNjkuMDA3NyA0Mi40NzQ0IDY4Ljc2MTYgNDIuMzEzIDY4LjQ0NjVDNDIuMTUxNSA2OC4xMjg4IDQyLjA3MDggNjcuNzczNCA0Mi4wNzA4IDY3LjM4MDFWNjcuMjEyMkM0Mi4wNzA4IDY2LjgwNTkgNDIuMTQ4OSA2Ni40NCA0Mi4zMDUyIDY2LjExNDVDNDIuNDY0IDY1Ljc4OSA0Mi42ODQxIDY1LjUzMzggNDIuOTY1MyA2NS4zNDg5QzQzLjI0NjYgNjUuMTYxNCA0My41NTEzIDY1LjA2NzYgNDMuODc5NCA2NS4wNjc2QzQ0LjM5MjQgNjUuMDY3NiA0NC43OTg3IDY1LjI0MzQgNDUuMDk4MSA2NS41OTVDNDUuNDAwMiA2NS45NDM5IDQ1LjU1MTMgNjYuNDIxOCA0NS41NTEzIDY3LjAyODZWNjcuMjkwM0g0Mi41MzU2VjY3LjM4MDFDNDIuNTM1NiA2Ny44NTkzIDQyLjY3MjQgNjguMjU5IDQyLjk0NTggNjguNTc5M0M0My4yMjE4IDY4Ljg5NzEgNDMuNTY4MiA2OS4wNTU5IDQzLjk4NDkgNjkuMDU1OUM0NC4yMzQ5IDY5LjA1NTkgNDQuNDU0OSA2OS4wMTAzIDQ0LjY0NSA2OC45MTkyQzQ0LjgzNzcgNjguODI4IDQ1LjAxMjIgNjguNjgyMiA0NS4xNjg1IDY4LjQ4MTdMNDUuNDYxNCA2OC43MDQzQzQ1LjExNzcgNjkuMjAxNyA0NC42MTkgNjkuNDUwNCA0My45NjUzIDY5LjQ1MDRaTTQzLjg3OTQgNjUuNDY2MUM0My41Mjc4IDY1LjQ2NjEgNDMuMjMxIDY1LjU5NSA0Mi45ODg4IDY1Ljg1MjhDNDIuNzQ5MiA2Ni4xMTA2IDQyLjYwMzQgNjYuNDU2OSA0Mi41NTEzIDY2Ljg5MThINDUuMDg2NFY2Ni44NDExQzQ1LjA3MzQgNjYuNDM0OCA0NC45NTc1IDY2LjEwNDEgNDQuNzM4OCA2NS44NDg5QzQ0LjUyIDY1LjU5MzcgNDQuMjMzNiA2NS40NjYxIDQzLjg3OTQgNjUuNDY2MVpNNDguOTMwMiA2OS4zNzIzSDQ4LjQ2MTRWNjUuMTQ1OEg0OC45MzAyVjY5LjM3MjNaTTQ4LjM3OTQgNjMuOTIzMUM0OC4zNzk0IDYzLjgzNDYgNDguNDA4IDYzLjc2MDMgNDguNDY1MyA2My43MDA0QzQ4LjUyMjYgNjMuNjM3OSA0OC42MDA3IDYzLjYwNjcgNDguNjk5NyA2My42MDY3QzQ4Ljc5ODcgNjMuNjA2NyA0OC44NzY4IDYzLjYzNzkgNDguOTM0MSA2My43MDA0QzQ4Ljk5NCA2My43NjAzIDQ5LjAyMzkgNjMuODM0NiA0OS4wMjM5IDYzLjkyMzFDNDkuMDIzOSA2NC4wMTE2IDQ4Ljk5NCA2NC4wODU5IDQ4LjkzNDEgNjQuMTQ1OEM0OC44NzY4IDY0LjIwNTYgNDguNzk4NyA2NC4yMzU2IDQ4LjY5OTcgNjQuMjM1NkM0OC42MDA3IDY0LjIzNTYgNDguNTIyNiA2NC4yMDU2IDQ4LjQ2NTMgNjQuMTQ1OEM0OC40MDggNjQuMDg1OSA0OC4zNzk0IDY0LjAxMTYgNDguMzc5NCA2My45MjMxWk01Mi43MzQ5IDY4LjI5ODFDNTIuNzM0OSA2OC4wNjYzIDUyLjY0MTEgNjcuODgwMSA1Mi40NTM2IDY3LjczOTVDNTIuMjY4NyA2Ny41OTg5IDUxLjk4ODggNjcuNDg5NSA1MS42MTM4IDY3LjQxMTRDNTEuMjM4OCA2Ny4zMzA2IDUwLjk0NzEgNjcuMjM5NSA1MC43Mzg4IDY3LjEzNzlDNTAuNTMzIDY3LjAzMzggNTAuMzc5NCA2Ni45MDc1IDUwLjI3NzggNjYuNzU5QzUwLjE3ODkgNjYuNjEwNiA1MC4xMjk0IDY2LjQzMDkgNTAuMTI5NCA2Ni4yMkM1MC4xMjk0IDY1Ljg4NjYgNTAuMjY4NyA2NS42MTE5IDUwLjU0NzQgNjUuMzk1OEM1MC44MjYgNjUuMTc3IDUxLjE4MjggNjUuMDY3NiA1MS42MTc3IDY1LjA2NzZDNTIuMDg5IDY1LjA2NzYgNTIuNDY2NiA2NS4xODQ4IDUyLjc1MDUgNjUuNDE5MkM1My4wMzY5IDY1LjY1MSA1My4xODAyIDY1Ljk1NDMgNTMuMTgwMiA2Ni4zMjkzSDUyLjcxMTRDNTIuNzExNCA2Ni4wODE5IDUyLjYwNzMgNjUuODc2MiA1Mi4zOTg5IDY1LjcxMjJDNTIuMTkzMiA2NS41NDgxIDUxLjkzMjggNjUuNDY2MSA1MS42MTc3IDY1LjQ2NjFDNTEuMzEwNCA2NS40NjYxIDUxLjA2MyA2NS41MzUxIDUwLjg3NTUgNjUuNjczMUM1MC42OTA2IDY1LjgwODUgNTAuNTk4MSA2NS45ODU2IDUwLjU5ODEgNjYuMjA0M0M1MC41OTgxIDY2LjQxNTMgNTAuNjc1IDY2LjU3OTMgNTAuODI4NiA2Ni42OTY1QzUwLjk4NDkgNjYuODExMSA1MS4yNjc0IDY2LjkxNjYgNTEuNjc2MyA2Ny4wMTI5QzUyLjA4NzcgNjcuMTA5MyA1Mi4zOTUgNjcuMjEyMiA1Mi41OTgxIDY3LjMyMTVDNTIuODAzOSA2Ny40MzA5IDUyLjk1NjIgNjcuNTYyNCA1My4wNTUyIDY3LjcxNjFDNTMuMTU0MSA2Ny44Njk3IDUzLjIwMzYgNjguMDU1OSA1My4yMDM2IDY4LjI3NDdDNTMuMjAzNiA2OC42MzE0IDUzLjA1OTEgNjguOTE2NiA1Mi43NyA2OS4xMzAxQzUyLjQ4MzYgNjkuMzQzNyA1Mi4xMDg2IDY5LjQ1MDQgNTEuNjQ1IDY5LjQ1MDRDNTEuMTUyOCA2OS40NTA0IDUwLjc1MzEgNjkuMzMxOSA1MC40NDU4IDY5LjA5NUM1MC4xNDExIDY4Ljg1NTQgNDkuOTg4OCA2OC41NTMzIDQ5Ljk4ODggNjguMTg4N0g1MC40NTc1QzUwLjQ3NTcgNjguNDYyMiA1MC41OTAzIDY4LjY3NTcgNTAuODAxMyA2OC44MjkzQzUxLjAxNDggNjguOTgwNCA1MS4yOTYxIDY5LjA1NTkgNTEuNjQ1IDY5LjA1NTlDNTEuOTcwNSA2OS4wNTU5IDUyLjIzMzYgNjguOTg0MyA1Mi40MzQxIDY4Ljg0MTFDNTIuNjM0NiA2OC42OTc4IDUyLjczNDkgNjguNTE2OCA1Mi43MzQ5IDY4LjI5ODFaTTU3LjIxNTMgNjguMzk5N0w1Ny4yODU2IDY4Ljc2MjlMNTcuMzc5NCA2OC4zODAxTDU4LjM5NSA2NS4xNDU4SDU4Ljc5MzVMNTkuNzk3NCA2OC4zNTI4TDU5LjkwNjcgNjguNzk4MUw1OS45OTY2IDY4LjM4NzlMNjAuODYzOCA2NS4xNDU4SDYxLjM0ODFMNjAuMTE3NyA2OS4zNzIzSDU5LjcxOTJMNTguNjMzMyA2Ni4wMjA4TDU4LjU4MjUgNjUuNzkwM0w1OC41MzE3IDY2LjAyNDdMNTcuNDY1MyA2OS4zNzIzSDU3LjA2NjlMNTUuODQwMyA2NS4xNDU4SDU2LjMyMDhMNTcuMjE1MyA2OC4zOTk3Wk02Mi42OTk3IDY1Ljg2MDZDNjIuODUzNCA2NS42MDggNjMuMDUgNjUuNDEyNyA2My4yODk2IDY1LjI3NDdDNjMuNTI5MSA2NS4xMzY2IDYzLjc5MDkgNjUuMDY3NiA2NC4wNzQ3IDY1LjA2NzZDNjQuNTI3OCA2NS4wNjc2IDY0Ljg2NTEgNjUuMTk1MiA2NS4wODY0IDY1LjQ1MDRDNjUuMzA3OCA2NS43MDU2IDY1LjQxOTggNjYuMDg4NSA2NS40MjI0IDY2LjU5ODlWNjkuMzcyM0g2NC45NTc1VjY2LjU5NUM2NC45NTQ5IDY2LjIxNzQgNjQuODc0MiA2NS45MzYxIDY0LjcxNTMgNjUuNzUxMkM2NC41NTkxIDY1LjU2NjMgNjQuMzA3OCA2NS40NzM5IDYzLjk2MTQgNjUuNDczOUM2My42NzI0IDY1LjQ3MzkgNjMuNDE1OSA2NS41NjUgNjMuMTkxOSA2NS43NDczQzYyLjk3MDUgNjUuOTI3IDYyLjgwNjUgNjYuMTcwNSA2Mi42OTk3IDY2LjQ3NzhWNjkuMzcyM0g2Mi4yMzQ5VjYzLjM3MjNINjIuNjk5N1Y2NS44NjA2Wk02OC4yNjIyIDY5LjQ1MDRDNjcuOTAyOCA2OS40NTA0IDY3LjU3NzMgNjkuMzYxOSA2Ny4yODU2IDY5LjE4NDhDNjYuOTk2NiA2OS4wMDc3IDY2Ljc3MTMgNjguNzYxNiA2Ni42MDk5IDY4LjQ0NjVDNjYuNDQ4NCA2OC4xMjg4IDY2LjM2NzcgNjcuNzczNCA2Ni4zNjc3IDY3LjM4MDFWNjcuMjEyMkM2Ni4zNjc3IDY2LjgwNTkgNjYuNDQ1OCA2Ni40NCA2Ni42MDIxIDY2LjExNDVDNjYuNzYwOSA2NS43ODkgNjYuOTgxIDY1LjUzMzggNjcuMjYyMiA2NS4zNDg5QzY3LjU0MzUgNjUuMTYxNCA2Ny44NDgxIDY1LjA2NzYgNjguMTc2MyA2NS4wNjc2QzY4LjY4OTMgNjUuMDY3NiA2OS4wOTU1IDY1LjI0MzQgNjkuMzk1IDY1LjU5NUM2OS42OTcxIDY1Ljk0MzkgNjkuODQ4MSA2Ni40MjE4IDY5Ljg0ODEgNjcuMDI4NlY2Ny4yOTAzSDY2LjgzMjVWNjcuMzgwMUM2Ni44MzI1IDY3Ljg1OTMgNjYuOTY5MiA2OC4yNTkgNjcuMjQyNyA2OC41NzkzQzY3LjUxODcgNjguODk3MSA2Ny44NjUxIDY5LjA1NTkgNjguMjgxNyA2OS4wNTU5QzY4LjUzMTcgNjkuMDU1OSA2OC43NTE4IDY5LjAxMDMgNjguOTQxOSA2OC45MTkyQzY5LjEzNDYgNjguODI4IDY5LjMwOTEgNjguNjgyMiA2OS40NjUzIDY4LjQ4MTdMNjkuNzU4MyA2OC43MDQzQzY5LjQxNDYgNjkuMjAxNyA2OC45MTU5IDY5LjQ1MDQgNjguMjYyMiA2OS40NTA0Wk02OC4xNzYzIDY1LjQ2NjFDNjcuODI0NyA2NS40NjYxIDY3LjUyNzggNjUuNTk1IDY3LjI4NTYgNjUuODUyOEM2Ny4wNDYxIDY2LjExMDYgNjYuOTAwMiA2Ni40NTY5IDY2Ljg0ODEgNjYuODkxOEg2OS4zODMzVjY2Ljg0MTFDNjkuMzcwMyA2Ni40MzQ4IDY5LjI1NDQgNjYuMTA0MSA2OS4wMzU2IDY1Ljg0ODlDNjguODE2OSA2NS41OTM3IDY4LjUzMDQgNjUuNDY2MSA2OC4xNzYzIDY1LjQ2NjFaTTcyLjcxMTQgNjUuNTQ0MkM3Mi42MTI1IDY1LjUyNiA3Mi41MDcgNjUuNTE2OCA3Mi4zOTUgNjUuNTE2OEM3Mi4xMDM0IDY1LjUxNjggNzEuODU2IDY1LjU5ODkgNzEuNjUyOCA2NS43NjI5QzcxLjQ1MjMgNjUuOTI0NCA3MS4zMDkxIDY2LjE2MDEgNzEuMjIzMSA2Ni40N1Y2OS4zNzIzSDcwLjc1ODNWNjUuMTQ1OEg3MS4yMTUzTDcxLjIyMzEgNjUuODE3NkM3MS40NzA1IDY1LjMxNzYgNzEuODY3NyA2NS4wNjc2IDcyLjQxNDYgNjUuMDY3NkM3Mi41NDQ4IDY1LjA2NzYgNzIuNjQ3NiA2NS4wODQ2IDcyLjcyMzEgNjUuMTE4NEw3Mi43MTE0IDY1LjU0NDJaTTc1LjAxMjIgNjkuNDUwNEM3NC42NTI4IDY5LjQ1MDQgNzQuMzI3MyA2OS4zNjE5IDc0LjAzNTYgNjkuMTg0OEM3My43NDY2IDY5LjAwNzcgNzMuNTIxMyA2OC43NjE2IDczLjM1OTkgNjguNDQ2NUM3My4xOTg0IDY4LjEyODggNzMuMTE3NyA2Ny43NzM0IDczLjExNzcgNjcuMzgwMVY2Ny4yMTIyQzczLjExNzcgNjYuODA1OSA3My4xOTU4IDY2LjQ0IDczLjM1MjEgNjYuMTE0NUM3My41MTA5IDY1Ljc4OSA3My43MzEgNjUuNTMzOCA3NC4wMTIyIDY1LjM0ODlDNzQuMjkzNSA2NS4xNjE0IDc0LjU5ODEgNjUuMDY3NiA3NC45MjYzIDY1LjA2NzZDNzUuNDM5MyA2NS4wNjc2IDc1Ljg0NTUgNjUuMjQzNCA3Ni4xNDUgNjUuNTk1Qzc2LjQ0NzEgNjUuOTQzOSA3Ni41OTgxIDY2LjQyMTggNzYuNTk4MSA2Ny4wMjg2VjY3LjI5MDNINzMuNTgyNVY2Ny4zODAxQzczLjU4MjUgNjcuODU5MyA3My43MTkyIDY4LjI1OSA3My45OTI3IDY4LjU3OTNDNzQuMjY4NyA2OC44OTcxIDc0LjYxNTEgNjkuMDU1OSA3NS4wMzE3IDY5LjA1NTlDNzUuMjgxNyA2OS4wNTU5IDc1LjUwMTggNjkuMDEwMyA3NS42OTE5IDY4LjkxOTJDNzUuODg0NiA2OC44MjggNzYuMDU5MSA2OC42ODIyIDc2LjIxNTMgNjguNDgxN0w3Ni41MDgzIDY4LjcwNDNDNzYuMTY0NiA2OS4yMDE3IDc1LjY2NTkgNjkuNDUwNCA3NS4wMTIyIDY5LjQ1MDRaTTc0LjkyNjMgNjUuNDY2MUM3NC41NzQ3IDY1LjQ2NjEgNzQuMjc3OCA2NS41OTUgNzQuMDM1NiA2NS44NTI4QzczLjc5NjEgNjYuMTEwNiA3My42NTAyIDY2LjQ1NjkgNzMuNTk4MSA2Ni44OTE4SDc2LjEzMzNWNjYuODQxMUM3Ni4xMjAzIDY2LjQzNDggNzYuMDA0NCA2Ni4xMDQxIDc1Ljc4NTYgNjUuODQ4OUM3NS41NjY5IDY1LjU5MzcgNzUuMjgwNCA2NS40NjYxIDc0LjkyNjMgNjUuNDY2MVpNODAuNzkzNSA2OC43MDA0TDgyLjAyNzggNjUuMTQ1OEg4Mi41MzE3TDgwLjcyNzEgNzAuMDkxMUw4MC42MzMzIDcwLjMwOThDODAuNDAxNSA3MC44MjI4IDgwLjA0MzUgNzEuMDc5MyA3OS41NTkxIDcxLjA3OTNDNzkuNDQ3MSA3MS4wNzkzIDc5LjMyNzMgNzEuMDYxMSA3OS4xOTk3IDcxLjAyNDdMNzkuMTk1OCA3MC42Mzc5TDc5LjQzOCA3MC42NjE0Qzc5LjY2NzIgNzAuNjYxNCA3OS44NTIxIDcwLjYwNDEgNzkuOTkyNyA3MC40ODk1QzgwLjEzNTkgNzAuMzc3NSA4MC4yNTcgNzAuMTgzNSA4MC4zNTYgNjkuOTA3NUw4MC41NjMgNjkuMzM3Mkw3OC45NjkyIDY1LjE0NThINzkuNDgxTDgwLjc5MzUgNjguNzAwNFpNODIuOTM4IDY3LjE5NjVDODIuOTM4IDY2Ljc5MDMgODMuMDE2MSA2Ni40MjQ0IDgzLjE3MjQgNjYuMDk4OUM4My4zMzEyIDY1Ljc3MzQgODMuNTUzOSA2NS41MjA4IDgzLjg0MDMgNjUuMzQxMUM4NC4xMjk0IDY1LjE1ODggODQuNDU2MiA2NS4wNjc2IDg0LjgyMDggNjUuMDY3NkM4NS4zODMzIDY1LjA2NzYgODUuODM5IDY1LjI2NTUgODYuMTg4IDY1LjY2MTRDODYuNTM2OSA2Ni4wNTQ2IDg2LjcxMTQgNjYuNTc2NyA4Ni43MTE0IDY3LjIyNzhWNjcuMzI1NEM4Ni43MTE0IDY3LjczNDMgODYuNjMyIDY4LjEwMjggODYuNDczMSA2OC40MzA5Qzg2LjMxNjkgNjguNzU2NCA4Ni4wOTU1IDY5LjAwNzcgODUuODA5MSA2OS4xODQ4Qzg1LjUyMjYgNjkuMzYxOSA4NS4xOTU4IDY5LjQ1MDQgODQuODI4NiA2OS40NTA0Qzg0LjI2ODcgNjkuNDUwNCA4My44MTMgNjkuMjUzOCA4My40NjE0IDY4Ljg2MDZDODMuMTEyNSA2OC40NjQ4IDgyLjkzOCA2Ny45NDEzIDgyLjkzOCA2Ny4yOTAzVjY3LjE5NjVaTTgzLjQwNjcgNjcuMzI1NEM4My40MDY3IDY3LjgzMDYgODMuNTM2OSA2OC4yNDYgODMuNzk3NCA2OC41NzE1Qzg0LjA2MDQgNjguODk0NCA4NC40MDQxIDY5LjA1NTkgODQuODI4NiA2OS4wNTU5Qzg1LjI1MDUgNjkuMDU1OSA4NS41OTE2IDY4Ljg5NDQgODUuODUyMSA2OC41NzE1Qzg2LjExNTEgNjguMjQ2IDg2LjI0NjYgNjcuODE3NiA4Ni4yNDY2IDY3LjI4NjRWNjcuMTk2NUM4Ni4yNDY2IDY2Ljg3MzYgODYuMTg2NyA2Ni41NzggODYuMDY2OSA2Ni4zMDk4Qzg1Ljk0NzEgNjYuMDQxNiA4NS43NzkxIDY1LjgzNDYgODUuNTYzIDY1LjY4ODdDODUuMzQ2OCA2NS41NDAzIDg1LjA5OTQgNjUuNDY2MSA4NC44MjA4IDY1LjQ2NjFDODQuNDA0MSA2NS40NjYxIDg0LjA2NDMgNjUuNjMwMSA4My44MDEzIDY1Ljk1ODNDODMuNTM4MiA2Ni4yODM4IDgzLjQwNjcgNjYuNzEwOSA4My40MDY3IDY3LjIzOTVWNjcuMzI1NFpNOTAuMzk4OSA2OC44MzcyQzkwLjExNzcgNjkuMjQ2IDg5LjY2ODUgNjkuNDUwNCA4OS4wNTEzIDY5LjQ1MDRDODguNjAwNyA2OS40NTA0IDg4LjI1ODMgNjkuMzIwMiA4OC4wMjM5IDY5LjA1OThDODcuNzg5NiA2OC43OTY4IDg3LjY2OTggNjguNDA4OCA4Ny42NjQ2IDY3Ljg5NThWNjUuMTQ1OEg4OC4xMjk0VjY3LjgzNzJDODguMTI5NCA2OC42NDE4IDg4LjQ1NDkgNjkuMDQ0MiA4OS4xMDYgNjkuMDQ0MkM4OS43ODMgNjkuMDQ0MiA5MC4yMTE0IDY4Ljc2NDIgOTAuMzkxMSA2OC4yMDQzVjY1LjE0NThIOTAuODU5OVY2OS4zNzIzSDkwLjQwNjdMOTAuMzk4OSA2OC44MzcyWk05Ni42OTE5IDY5LjM3MjNDOTYuNjQ1IDY5LjIzOTUgOTYuNjE1MSA2OS4wNDI5IDk2LjYwMjEgNjguNzgyNUM5Ni40MzggNjguOTk2IDk2LjIyODQgNjkuMTYxNCA5NS45NzMxIDY5LjI3ODZDOTUuNzIwNSA2OS4zOTMxIDk1LjQ1MjMgNjkuNDUwNCA5NS4xNjg1IDY5LjQ1MDRDOTQuNzYyMiA2OS40NTA0IDk0LjQzMjggNjkuMzM3MiA5NC4xODAyIDY5LjExMDZDOTMuOTMwMiA2OC44ODQgOTMuODA1MiA2OC41OTc2IDkzLjgwNTIgNjguMjUxMkM5My44MDUyIDY3LjgzOTggOTMuOTc1NyA2Ny41MTQyIDk0LjMxNjkgNjcuMjc0N0M5NC42NjA2IDY3LjAzNTEgOTUuMTM4NSA2Ni45MTUzIDk1Ljc1MDUgNjYuOTE1M0g5Ni41OTgxVjY2LjQzNDhDOTYuNTk4MSA2Ni4xMzI3IDk2LjUwNDQgNjUuODk1OCA5Ni4zMTY5IDY1LjcyMzlDOTYuMTMyIDY1LjU0OTQgOTUuODYxMiA2NS40NjIyIDk1LjUwNDQgNjUuNDYyMkM5NS4xNzg5IDY1LjQ2MjIgOTQuOTA5MyA2NS41NDU1IDk0LjY5NTggNjUuNzEyMkM5NC40ODIzIDY1Ljg3ODggOTQuMzc1NSA2Ni4wNzkzIDk0LjM3NTUgNjYuMzEzN0w5My45MDY3IDY2LjMwOThDOTMuOTA2NyA2NS45NzM5IDk0LjA2MyA2NS42ODM1IDk0LjM3NTUgNjUuNDM4N0M5NC42ODggNjUuMTkxMyA5NS4wNzIxIDY1LjA2NzYgOTUuNTI3OCA2NS4wNjc2Qzk1Ljk5OTIgNjUuMDY3NiA5Ni4zNzAzIDY1LjE4NjEgOTYuNjQxMSA2NS40MjMxQzk2LjkxNDYgNjUuNjU3NSA5Ny4wNTUyIDY1Ljk4NTYgOTcuMDYzIDY2LjQwNzVWNjguNDA3NUM5Ny4wNjMgNjguODE2MyA5Ny4xMDYgNjkuMTIyMyA5Ny4xOTE5IDY5LjMyNTRWNjkuMzcyM0g5Ni42OTE5Wk05NS4yMjMxIDY5LjAzNjRDOTUuNTM1NiA2OS4wMzY0IDk1LjgxNDMgNjguOTYwOSA5Ni4wNTkxIDY4LjgwOThDOTYuMzA2NSA2OC42NTg4IDk2LjQ4NjIgNjguNDU2OSA5Ni41OTgxIDY4LjIwNDNWNjcuMjc0N0g5NS43NjIyQzk1LjI5NjEgNjcuMjc5OSA5NC45MzE1IDY3LjM2NTggOTQuNjY4NSA2Ny41MzI1Qzk0LjQwNTQgNjcuNjk2NSA5NC4yNzM5IDY3LjkyMzEgOTQuMjczOSA2OC4yMTIyQzk0LjI3MzkgNjguNDQ5MSA5NC4zNjEyIDY4LjY0NTggOTQuNTM1NiA2OC44MDJDOTQuNzEyNyA2OC45NTgzIDk0Ljk0MTkgNjkuMDM2NCA5NS4yMjMxIDY5LjAzNjRaTTEwMC4yNjYgNjUuNTQ0MkMxMDAuMTY3IDY1LjUyNiAxMDAuMDYyIDY1LjUxNjggOTkuOTQ5NyA2NS41MTY4Qzk5LjY1OCA2NS41MTY4IDk5LjQxMDYgNjUuNTk4OSA5OS4yMDc1IDY1Ljc2MjlDOTkuMDA3IDY1LjkyNDQgOTguODYzOCA2Ni4xNjAxIDk4Ljc3NzggNjYuNDdWNjkuMzcyM0g5OC4zMTNWNjUuMTQ1OEg5OC43N0w5OC43Nzc4IDY1LjgxNzZDOTkuMDI1MiA2NS4zMTc2IDk5LjQyMjQgNjUuMDY3NiA5OS45NjkyIDY1LjA2NzZDMTAwLjA5OSA2NS4wNjc2IDEwMC4yMDIgNjUuMDg0NiAxMDAuMjc4IDY1LjExODRMMTAwLjI2NiA2NS41NDQyWk0xMDIuNTY3IDY5LjQ1MDRDMTAyLjIwOCA2OS40NTA0IDEwMS44ODIgNjkuMzYxOSAxMDEuNTkgNjkuMTg0OEMxMDEuMzAxIDY5LjAwNzcgMTAxLjA3NiA2OC43NjE2IDEwMC45MTUgNjguNDQ2NUMxMDAuNzUzIDY4LjEyODggMTAwLjY3MiA2Ny43NzM0IDEwMC42NzIgNjcuMzgwMVY2Ny4yMTIyQzEwMC42NzIgNjYuODA1OSAxMDAuNzUgNjYuNDQgMTAwLjkwNyA2Ni4xMTQ1QzEwMS4wNjYgNjUuNzg5IDEwMS4yODYgNjUuNTMzOCAxMDEuNTY3IDY1LjM0ODlDMTAxLjg0OCA2NS4xNjE0IDEwMi4xNTMgNjUuMDY3NiAxMDIuNDgxIDY1LjA2NzZDMTAyLjk5NCA2NS4wNjc2IDEwMy40IDY1LjI0MzQgMTAzLjcgNjUuNTk1QzEwNC4wMDIgNjUuOTQzOSAxMDQuMTUzIDY2LjQyMTggMTA0LjE1MyA2Ny4wMjg2VjY3LjI5MDNIMTAxLjEzN1Y2Ny4zODAxQzEwMS4xMzcgNjcuODU5MyAxMDEuMjc0IDY4LjI1OSAxMDEuNTQ3IDY4LjU3OTNDMTAxLjgyMyA2OC44OTcxIDEwMi4xNyA2OS4wNTU5IDEwMi41ODYgNjkuMDU1OUMxMDIuODM2IDY5LjA1NTkgMTAzLjA1NiA2OS4wMTAzIDEwMy4yNDcgNjguOTE5MkMxMDMuNDM5IDY4LjgyOCAxMDMuNjE0IDY4LjY4MjIgMTAzLjc3IDY4LjQ4MTdMMTA0LjA2MyA2OC43MDQzQzEwMy43MTkgNjkuMjAxNyAxMDMuMjIxIDY5LjQ1MDQgMTAyLjU2NyA2OS40NTA0Wk0xMDIuNDgxIDY1LjQ2NjFDMTAyLjEyOSA2NS40NjYxIDEwMS44MzMgNjUuNTk1IDEwMS41OSA2NS44NTI4QzEwMS4zNTEgNjYuMTEwNiAxMDEuMjA1IDY2LjQ1NjkgMTAxLjE1MyA2Ni44OTE4SDEwMy42ODhWNjYuODQxMUMxMDMuNjc1IDY2LjQzNDggMTAzLjU1OSA2Ni4xMDQxIDEwMy4zNCA2NS44NDg5QzEwMy4xMjIgNjUuNTkzNyAxMDIuODM1IDY1LjQ2NjEgMTAyLjQ4MSA2NS40NjYxWlwiIGZpbGw9XCJ3aGl0ZVwiIC8+XG4gICAgICAgIDwvc3ZnPlxuXG4gICAgKVxufSIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImxvZ2luXCI6IFwibG9naW5fbG9naW5fXzJJcEhZXCIsXG5cdFwicmlnaHRDb250ZW50XCI6IFwibG9naW5fcmlnaHRDb250ZW50X18zU1VnaVwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpxdWVyeVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9keW5hbWljXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9