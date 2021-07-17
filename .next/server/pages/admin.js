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
      if (window.session.err) {
        console.log("run");
        setMain(_objectSpread(_objectSpread({}, main), {}, {
          up: false,
          signin: true,
          signup: false,
          loader: false
        }));
      }

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
    lineNumber: 226,
    columnNumber: 27
  }, this);else if (main.loader) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Loader, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 227,
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
        lineNumber: 231,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().login),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().leftContent)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().rightContent),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: " Sign In or Sign Up"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 239,
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
            lineNumber: 243,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "button",
            value: "Submit",
            className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().button),
            onClick: Check,
            onSubmit: Check
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 246,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 240,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 234,
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
        lineNumber: 257,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().login),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().leftContent)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 261,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().rightContent),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: " Sign In"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 265,
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
            lineNumber: 269,
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
            lineNumber: 270,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "button",
            value: "Submit",
            className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().button),
            onClick: SignIn,
            onSubmit: SignIn
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 272,
            columnNumber: 21
          }, this), err && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            htmlFor: "test",
            children: "Wrong password try again"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 274,
            columnNumber: 32
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 266,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 260,
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
        lineNumber: 284,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().login),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().leftContent)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 288,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().rightContent),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: " Sign Up"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 292,
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
            lineNumber: 295,
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
            lineNumber: 296,
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
            lineNumber: 297,
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
            lineNumber: 298,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "Password must be at least 8 characters long"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 299,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "button",
            value: "Submit",
            className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().button),
            onClick: Send,
            onSubmit: Send
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 300,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 293,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 291,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 287,
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
      lineNumber: 312,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M87.4867 56.4602H83.2387V47.6243H74.955V56.4602H70.7069V35.843H74.955V44.1975H83.2387V35.843H87.4867V56.4602ZM103.615 47.5251H95.4589V53.0476H105.031V56.4602H91.2108V35.843H105.003V39.2839H95.4589V44.1975H103.615V47.5251ZM111.771 53.0476H120.791V56.4602H107.523V35.843H111.771V53.0476ZM127.489 49.196V56.4602H123.241V35.843H131.284C132.832 35.843 134.192 36.1262 135.362 36.6926C136.542 37.259 137.448 38.0662 138.081 39.114C138.713 40.1524 139.03 41.3372 139.03 42.6682C139.03 44.6884 138.336 46.2838 136.948 47.4543C135.57 48.6155 133.658 49.196 131.213 49.196H127.489ZM127.489 45.7551H131.284C132.407 45.7551 133.262 45.4908 133.847 44.9622C134.442 44.4335 134.739 43.6783 134.739 42.6965C134.739 41.6864 134.442 40.8699 133.847 40.2468C133.252 39.6238 132.431 39.3028 131.383 39.2839H127.489V45.7551Z",
      fill: fill
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M29.4106 69.3723H28.9263V66.6458H25.6763V69.3723H25.1958V63.6848H25.6763V66.2395H28.9263V63.6848H29.4106V69.3723ZM30.4927 67.1965C30.4927 66.7903 30.5708 66.4244 30.7271 66.0989C30.8859 65.7734 31.1086 65.5208 31.395 65.3411C31.6841 65.1588 32.0109 65.0676 32.3755 65.0676C32.938 65.0676 33.3937 65.2655 33.7427 65.6614C34.0916 66.0546 34.2661 66.5767 34.2661 67.2278V67.3254C34.2661 67.7343 34.1867 68.1028 34.0278 68.4309C33.8716 68.7564 33.6502 69.0077 33.3638 69.1848C33.0773 69.3619 32.7505 69.4504 32.3833 69.4504C31.8234 69.4504 31.3677 69.2538 31.0161 68.8606C30.6672 68.4648 30.4927 67.9413 30.4927 67.2903V67.1965ZM30.9614 67.3254C30.9614 67.8306 31.0916 68.246 31.3521 68.5715C31.6151 68.8944 31.9588 69.0559 32.3833 69.0559C32.8052 69.0559 33.1463 68.8944 33.4067 68.5715C33.6698 68.246 33.8013 67.8176 33.8013 67.2864V67.1965C33.8013 66.8736 33.7414 66.578 33.6216 66.3098C33.5018 66.0416 33.3338 65.8346 33.1177 65.6887C32.9015 65.5403 32.6541 65.4661 32.3755 65.4661C31.9588 65.4661 31.619 65.6301 31.356 65.9583C31.0929 66.2838 30.9614 66.7109 30.9614 67.2395V67.3254ZM35.6606 65.1458L35.6763 65.8333C35.8325 65.578 36.0278 65.3866 36.2622 65.259C36.4966 65.1314 36.757 65.0676 37.0435 65.0676C37.7101 65.0676 38.1333 65.3411 38.313 65.8879C38.464 65.6249 38.6659 65.4231 38.9185 65.2825C39.1711 65.1392 39.4497 65.0676 39.7544 65.0676C40.6606 65.0676 41.1229 65.5624 41.1411 66.552V69.3723H40.6724V66.5872C40.6698 66.2096 40.5877 65.9296 40.4263 65.7473C40.2674 65.565 40.007 65.4739 39.645 65.4739C39.3091 65.4791 39.0252 65.5885 38.7935 65.802C38.5617 66.0129 38.4328 66.2708 38.4067 66.5754V69.3723H37.938V66.552C37.9354 66.19 37.8494 65.9205 37.6802 65.7434C37.5135 65.5637 37.2557 65.4739 36.9067 65.4739C36.6125 65.4739 36.3599 65.5585 36.1489 65.7278C35.938 65.8944 35.7817 66.1431 35.6802 66.4739V69.3723H35.2114V65.1458H35.6606ZM43.9653 69.4504C43.606 69.4504 43.2804 69.3619 42.9888 69.1848C42.6997 69.0077 42.4744 68.7616 42.313 68.4465C42.1515 68.1288 42.0708 67.7734 42.0708 67.3801V67.2122C42.0708 66.8059 42.1489 66.44 42.3052 66.1145C42.464 65.789 42.6841 65.5338 42.9653 65.3489C43.2466 65.1614 43.5513 65.0676 43.8794 65.0676C44.3924 65.0676 44.7987 65.2434 45.0981 65.595C45.4002 65.9439 45.5513 66.4218 45.5513 67.0286V67.2903H42.5356V67.3801C42.5356 67.8593 42.6724 68.259 42.9458 68.5793C43.2218 68.8971 43.5682 69.0559 43.9849 69.0559C44.2349 69.0559 44.4549 69.0103 44.645 68.9192C44.8377 68.828 45.0122 68.6822 45.1685 68.4817L45.4614 68.7043C45.1177 69.2017 44.619 69.4504 43.9653 69.4504ZM43.8794 65.4661C43.5278 65.4661 43.231 65.595 42.9888 65.8528C42.7492 66.1106 42.6034 66.4569 42.5513 66.8918H45.0864V66.8411C45.0734 66.4348 44.9575 66.1041 44.7388 65.8489C44.52 65.5937 44.2336 65.4661 43.8794 65.4661ZM48.9302 69.3723H48.4614V65.1458H48.9302V69.3723ZM48.3794 63.9231C48.3794 63.8346 48.408 63.7603 48.4653 63.7004C48.5226 63.6379 48.6007 63.6067 48.6997 63.6067C48.7987 63.6067 48.8768 63.6379 48.9341 63.7004C48.994 63.7603 49.0239 63.8346 49.0239 63.9231C49.0239 64.0116 48.994 64.0859 48.9341 64.1458C48.8768 64.2056 48.7987 64.2356 48.6997 64.2356C48.6007 64.2356 48.5226 64.2056 48.4653 64.1458C48.408 64.0859 48.3794 64.0116 48.3794 63.9231ZM52.7349 68.2981C52.7349 68.0663 52.6411 67.8801 52.4536 67.7395C52.2687 67.5989 51.9888 67.4895 51.6138 67.4114C51.2388 67.3306 50.9471 67.2395 50.7388 67.1379C50.533 67.0338 50.3794 66.9075 50.2778 66.759C50.1789 66.6106 50.1294 66.4309 50.1294 66.22C50.1294 65.8866 50.2687 65.6119 50.5474 65.3958C50.826 65.177 51.1828 65.0676 51.6177 65.0676C52.089 65.0676 52.4666 65.1848 52.7505 65.4192C53.0369 65.651 53.1802 65.9543 53.1802 66.3293H52.7114C52.7114 66.0819 52.6073 65.8762 52.3989 65.7122C52.1932 65.5481 51.9328 65.4661 51.6177 65.4661C51.3104 65.4661 51.063 65.5351 50.8755 65.6731C50.6906 65.8085 50.5981 65.9856 50.5981 66.2043C50.5981 66.4153 50.675 66.5793 50.8286 66.6965C50.9849 66.8111 51.2674 66.9166 51.6763 67.0129C52.0877 67.1093 52.395 67.2122 52.5981 67.3215C52.8039 67.4309 52.9562 67.5624 53.0552 67.7161C53.1541 67.8697 53.2036 68.0559 53.2036 68.2747C53.2036 68.6314 53.0591 68.9166 52.77 69.1301C52.4836 69.3437 52.1086 69.4504 51.645 69.4504C51.1528 69.4504 50.7531 69.3319 50.4458 69.095C50.1411 68.8554 49.9888 68.5533 49.9888 68.1887H50.4575C50.4757 68.4622 50.5903 68.6757 50.8013 68.8293C51.0148 68.9804 51.2961 69.0559 51.645 69.0559C51.9705 69.0559 52.2336 68.9843 52.4341 68.8411C52.6346 68.6978 52.7349 68.5168 52.7349 68.2981ZM57.2153 68.3997L57.2856 68.7629L57.3794 68.3801L58.395 65.1458H58.7935L59.7974 68.3528L59.9067 68.7981L59.9966 68.3879L60.8638 65.1458H61.3481L60.1177 69.3723H59.7192L58.6333 66.0208L58.5825 65.7903L58.5317 66.0247L57.4653 69.3723H57.0669L55.8403 65.1458H56.3208L57.2153 68.3997ZM62.6997 65.8606C62.8534 65.608 63.05 65.4127 63.2896 65.2747C63.5291 65.1366 63.7909 65.0676 64.0747 65.0676C64.5278 65.0676 64.8651 65.1952 65.0864 65.4504C65.3078 65.7056 65.4198 66.0885 65.4224 66.5989V69.3723H64.9575V66.595C64.9549 66.2174 64.8742 65.9361 64.7153 65.7512C64.5591 65.5663 64.3078 65.4739 63.9614 65.4739C63.6724 65.4739 63.4159 65.565 63.1919 65.7473C62.9705 65.927 62.8065 66.1705 62.6997 66.4778V69.3723H62.2349V63.3723H62.6997V65.8606ZM68.2622 69.4504C67.9028 69.4504 67.5773 69.3619 67.2856 69.1848C66.9966 69.0077 66.7713 68.7616 66.6099 68.4465C66.4484 68.1288 66.3677 67.7734 66.3677 67.3801V67.2122C66.3677 66.8059 66.4458 66.44 66.6021 66.1145C66.7609 65.789 66.981 65.5338 67.2622 65.3489C67.5435 65.1614 67.8481 65.0676 68.1763 65.0676C68.6893 65.0676 69.0955 65.2434 69.395 65.595C69.6971 65.9439 69.8481 66.4218 69.8481 67.0286V67.2903H66.8325V67.3801C66.8325 67.8593 66.9692 68.259 67.2427 68.5793C67.5187 68.8971 67.8651 69.0559 68.2817 69.0559C68.5317 69.0559 68.7518 69.0103 68.9419 68.9192C69.1346 68.828 69.3091 68.6822 69.4653 68.4817L69.7583 68.7043C69.4146 69.2017 68.9159 69.4504 68.2622 69.4504ZM68.1763 65.4661C67.8247 65.4661 67.5278 65.595 67.2856 65.8528C67.0461 66.1106 66.9002 66.4569 66.8481 66.8918H69.3833V66.8411C69.3703 66.4348 69.2544 66.1041 69.0356 65.8489C68.8169 65.5937 68.5304 65.4661 68.1763 65.4661ZM72.7114 65.5442C72.6125 65.526 72.507 65.5168 72.395 65.5168C72.1034 65.5168 71.856 65.5989 71.6528 65.7629C71.4523 65.9244 71.3091 66.1601 71.2231 66.47V69.3723H70.7583V65.1458H71.2153L71.2231 65.8176C71.4705 65.3176 71.8677 65.0676 72.4146 65.0676C72.5448 65.0676 72.6476 65.0846 72.7231 65.1184L72.7114 65.5442ZM75.0122 69.4504C74.6528 69.4504 74.3273 69.3619 74.0356 69.1848C73.7466 69.0077 73.5213 68.7616 73.3599 68.4465C73.1984 68.1288 73.1177 67.7734 73.1177 67.3801V67.2122C73.1177 66.8059 73.1958 66.44 73.3521 66.1145C73.5109 65.789 73.731 65.5338 74.0122 65.3489C74.2935 65.1614 74.5981 65.0676 74.9263 65.0676C75.4393 65.0676 75.8455 65.2434 76.145 65.595C76.4471 65.9439 76.5981 66.4218 76.5981 67.0286V67.2903H73.5825V67.3801C73.5825 67.8593 73.7192 68.259 73.9927 68.5793C74.2687 68.8971 74.6151 69.0559 75.0317 69.0559C75.2817 69.0559 75.5018 69.0103 75.6919 68.9192C75.8846 68.828 76.0591 68.6822 76.2153 68.4817L76.5083 68.7043C76.1646 69.2017 75.6659 69.4504 75.0122 69.4504ZM74.9263 65.4661C74.5747 65.4661 74.2778 65.595 74.0356 65.8528C73.7961 66.1106 73.6502 66.4569 73.5981 66.8918H76.1333V66.8411C76.1203 66.4348 76.0044 66.1041 75.7856 65.8489C75.5669 65.5937 75.2804 65.4661 74.9263 65.4661ZM80.7935 68.7004L82.0278 65.1458H82.5317L80.7271 70.0911L80.6333 70.3098C80.4015 70.8228 80.0435 71.0793 79.5591 71.0793C79.4471 71.0793 79.3273 71.0611 79.1997 71.0247L79.1958 70.6379L79.438 70.6614C79.6672 70.6614 79.8521 70.6041 79.9927 70.4895C80.1359 70.3775 80.257 70.1835 80.356 69.9075L80.563 69.3372L78.9692 65.1458H79.481L80.7935 68.7004ZM82.938 67.1965C82.938 66.7903 83.0161 66.4244 83.1724 66.0989C83.3312 65.7734 83.5539 65.5208 83.8403 65.3411C84.1294 65.1588 84.4562 65.0676 84.8208 65.0676C85.3833 65.0676 85.839 65.2655 86.188 65.6614C86.5369 66.0546 86.7114 66.5767 86.7114 67.2278V67.3254C86.7114 67.7343 86.632 68.1028 86.4731 68.4309C86.3169 68.7564 86.0955 69.0077 85.8091 69.1848C85.5226 69.3619 85.1958 69.4504 84.8286 69.4504C84.2687 69.4504 83.813 69.2538 83.4614 68.8606C83.1125 68.4648 82.938 67.9413 82.938 67.2903V67.1965ZM83.4067 67.3254C83.4067 67.8306 83.5369 68.246 83.7974 68.5715C84.0604 68.8944 84.4041 69.0559 84.8286 69.0559C85.2505 69.0559 85.5916 68.8944 85.8521 68.5715C86.1151 68.246 86.2466 67.8176 86.2466 67.2864V67.1965C86.2466 66.8736 86.1867 66.578 86.0669 66.3098C85.9471 66.0416 85.7791 65.8346 85.563 65.6887C85.3468 65.5403 85.0994 65.4661 84.8208 65.4661C84.4041 65.4661 84.0643 65.6301 83.8013 65.9583C83.5382 66.2838 83.4067 66.7109 83.4067 67.2395V67.3254ZM90.3989 68.8372C90.1177 69.246 89.6685 69.4504 89.0513 69.4504C88.6007 69.4504 88.2583 69.3202 88.0239 69.0598C87.7896 68.7968 87.6698 68.4088 87.6646 67.8958V65.1458H88.1294V67.8372C88.1294 68.6418 88.4549 69.0442 89.106 69.0442C89.783 69.0442 90.2114 68.7642 90.3911 68.2043V65.1458H90.8599V69.3723H90.4067L90.3989 68.8372ZM96.6919 69.3723C96.645 69.2395 96.6151 69.0429 96.6021 68.7825C96.438 68.996 96.2284 69.1614 95.9731 69.2786C95.7205 69.3931 95.4523 69.4504 95.1685 69.4504C94.7622 69.4504 94.4328 69.3372 94.1802 69.1106C93.9302 68.884 93.8052 68.5976 93.8052 68.2512C93.8052 67.8398 93.9757 67.5142 94.3169 67.2747C94.6606 67.0351 95.1385 66.9153 95.7505 66.9153H96.5981V66.4348C96.5981 66.1327 96.5044 65.8958 96.3169 65.7239C96.132 65.5494 95.8612 65.4622 95.5044 65.4622C95.1789 65.4622 94.9093 65.5455 94.6958 65.7122C94.4823 65.8788 94.3755 66.0793 94.3755 66.3137L93.9067 66.3098C93.9067 65.9739 94.063 65.6835 94.3755 65.4387C94.688 65.1913 95.0721 65.0676 95.5278 65.0676C95.9992 65.0676 96.3703 65.1861 96.6411 65.4231C96.9146 65.6575 97.0552 65.9856 97.063 66.4075V68.4075C97.063 68.8163 97.106 69.1223 97.1919 69.3254V69.3723H96.6919ZM95.2231 69.0364C95.5356 69.0364 95.8143 68.9609 96.0591 68.8098C96.3065 68.6588 96.4862 68.4569 96.5981 68.2043V67.2747H95.7622C95.2961 67.2799 94.9315 67.3658 94.6685 67.5325C94.4054 67.6965 94.2739 67.9231 94.2739 68.2122C94.2739 68.4491 94.3612 68.6458 94.5356 68.802C94.7127 68.9583 94.9419 69.0364 95.2231 69.0364ZM100.266 65.5442C100.167 65.526 100.062 65.5168 99.9497 65.5168C99.658 65.5168 99.4106 65.5989 99.2075 65.7629C99.007 65.9244 98.8638 66.1601 98.7778 66.47V69.3723H98.313V65.1458H98.77L98.7778 65.8176C99.0252 65.3176 99.4224 65.0676 99.9692 65.0676C100.099 65.0676 100.202 65.0846 100.278 65.1184L100.266 65.5442ZM102.567 69.4504C102.208 69.4504 101.882 69.3619 101.59 69.1848C101.301 69.0077 101.076 68.7616 100.915 68.4465C100.753 68.1288 100.672 67.7734 100.672 67.3801V67.2122C100.672 66.8059 100.75 66.44 100.907 66.1145C101.066 65.789 101.286 65.5338 101.567 65.3489C101.848 65.1614 102.153 65.0676 102.481 65.0676C102.994 65.0676 103.4 65.2434 103.7 65.595C104.002 65.9439 104.153 66.4218 104.153 67.0286V67.2903H101.137V67.3801C101.137 67.8593 101.274 68.259 101.547 68.5793C101.823 68.8971 102.17 69.0559 102.586 69.0559C102.836 69.0559 103.056 69.0103 103.247 68.9192C103.439 68.828 103.614 68.6822 103.77 68.4817L104.063 68.7043C103.719 69.2017 103.221 69.4504 102.567 69.4504ZM102.481 65.4661C102.129 65.4661 101.833 65.595 101.59 65.8528C101.351 66.1106 101.205 66.4569 101.153 66.8918H103.688V66.8411C103.675 66.4348 103.559 66.1041 103.34 65.8489C103.122 65.5937 102.835 65.4661 102.481 65.4661Z",
      fill: "white"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 311,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bmloZWxwLy4vcGFnZXMvYWRtaW4vaW5kZXguanN4Iiwid2VicGFjazovL3VuaWhlbHAvLi9zdHlsZXMvbG9naW4ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly91bmloZWxwL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly91bmloZWxwL2V4dGVybmFsIFwianF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vdW5paGVscC9leHRlcm5hbCBcIm5leHQvZHluYW1pY1wiIiwid2VicGFjazovL3VuaWhlbHAvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3VuaWhlbHAvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJMb2FkZXIiLCJkeW5hbWljIiwiVG9wIiwiRGFzaGJvYXJkIiwiRGFzaEhvbWUiLCJ1c2VFZmZlY3QiLCIkIiwiY3NzIiwiZXJyIiwic2V0RXJyIiwidXNlU3RhdGUiLCJtYWluIiwic2V0TWFpbiIsInVzZXIiLCJ1cCIsInNpZ25pbiIsInNpZ251cCIsImxvYWRlciIsInVkYXRhIiwic2V0VWRhdGEiLCJzdGF0ZSIsInNldFN0YXRlIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwic2V0RW1haWwiLCJzaWduU3RhdGUiLCJzZXRTaWduU3RhdGUiLCJpbml0aWFsQ2hlY2siLCJ3aW5kb3ciLCJzZXNzaW9uIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNvbnNvbGUiLCJsb2ciLCJheGlvcyIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidG9rZW4iLCJ0aGVuIiwicmVzIiwic3RhdHVzIiwic3RyaW5naWZ5IiwiZGF0YSIsImNhdGNoIiwiaGFuZGxlU2lnbkluIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsIkNoZWNrIiwidmFsaWRhdGlvbiIsInNldFRpbWVvdXQiLCJoYW5kbGVDaGFuZ2UiLCJTZW5kIiwiU2lnbkluIiwidmVyaWZpY2F0aW9uIiwic2V0SXRlbSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiYm94U2l6aW5nIiwibGVmdENvbnRlbnQiLCJMb2dvIiwiZmlsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsTUFBTUEsTUFBTSxHQUFHQyxtREFBTyxDQUFDLE1BQU0sNEtBQVA7QUFBQTtBQUFBLHdDQUFjLHdEQUFkO0FBQUEsc0NBQWMseUJBQWQ7QUFBQTtBQUFBLEVBQXRCO0FBQ0EsTUFBTUMsR0FBRyxHQUFHRCxtREFBTyxDQUFDLE1BQU0sbUtBQVA7QUFBQTtBQUFBLHdDQUFjLGtEQUFkO0FBQUEsc0NBQWMsc0JBQWQ7QUFBQTtBQUFBLEVBQW5CO0FBQ0EsTUFBTUUsU0FBUyxHQUFHRixtREFBTyxDQUFDLE1BQU0saU1BQVA7QUFBQTtBQUFBLHdDQUFjLHNFQUFkO0FBQUEsc0NBQWMsZ0NBQWQ7QUFBQTtBQUFBLEVBQXpCO0FBQ2UsU0FBU0csUUFBVCxHQUFxQjtBQUNoQ0Msa0RBQVMsQ0FBQyxNQUFNO0FBQ1pDLGlEQUFDLENBQUMsTUFBRCxDQUFELENBQVVDLEdBQVYsQ0FBYyxnQkFBZCxFQUErQixHQUEvQjtBQUVILEdBSFEsRUFHTixFQUhNLENBQVQ7QUFJQSxRQUFNO0FBQUEsT0FBQ0MsR0FBRDtBQUFBLE9BQUtDO0FBQUwsTUFBZUMsK0NBQVEsQ0FBQyxLQUFELENBQTdCO0FBRUEsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFNQztBQUFOLE1BQWlCRiwrQ0FBUSxDQUFDO0FBQzVCRyxRQUFJLEVBQUMsS0FEdUI7QUFFNUJDLE1BQUUsRUFBQyxLQUZ5QjtBQUc1QkMsVUFBTSxFQUFDLElBSHFCO0FBSTVCQyxVQUFNLEVBQUMsS0FKcUI7QUFLNUJDLFVBQU0sRUFBQztBQUxxQixHQUFELENBQS9CO0FBT0EsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQW1CVCwrQ0FBUSxFQUFqQztBQUNBLFFBQU07QUFBQSxPQUFDVSxLQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFtQlgsK0NBQVEsQ0FBQztBQUM5QlksYUFBUyxFQUFDLEVBRG9CO0FBRTlCQyxZQUFRLEVBQUUsRUFGb0I7QUFHOUJDLFNBQUssRUFBQyxFQUh3QjtBQUk5QkMsWUFBUSxFQUFDO0FBSnFCLEdBQUQsQ0FBakM7QUFNQSxRQUFNO0FBQUEsT0FBQ0QsS0FBRDtBQUFBLE9BQU9FO0FBQVAsTUFBbUJoQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBakM7QUFDQSxRQUFNO0FBQUEsT0FBQ2lCLFNBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTJCbEIsK0NBQVEsQ0FBQztBQUN0Q2MsU0FBSyxFQUFDLEVBRGdDO0FBRXRDQyxZQUFRLEVBQUM7QUFGNkIsR0FBRCxDQUF6Qzs7QUFJQSxRQUFNSSxZQUFZLEdBQUcsTUFBTTtBQUN2QixRQUFHLENBQUNDLE1BQU0sQ0FBQ0MsT0FBWCxFQUFvQjtBQUNoQkQsWUFBTSxDQUFDQyxPQUFQLEdBQWlCQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsTUFBTSxDQUFDSSxZQUFQLENBQW9CQyxPQUFwQixDQUE0QixTQUE1QixDQUFYLENBQWpCO0FBQ0gsS0FGRCxNQUdLLElBQUlMLE1BQU0sQ0FBQ0MsT0FBUCxDQUFldkIsR0FBbkIsRUFBd0I7QUFDekJJLGFBQU8saUNBQ0FELElBREE7QUFFSEcsVUFBRSxFQUFFLEtBRkQ7QUFHSEMsY0FBTSxFQUFFLElBSEw7QUFJSEMsY0FBTSxFQUFFLEtBSkw7QUFLSEMsY0FBTSxFQUFFO0FBTEwsU0FBUDtBQVFILEtBVEksTUFXQTtBQUNEbUIsYUFBTyxDQUFDQyxHQUFSLENBQVksY0FBWjtBQUNBekIsYUFBTyxpQ0FDQUQsSUFEQTtBQUVITSxjQUFNLEVBQUMsS0FGSjtBQUdISCxVQUFFLEVBQUM7QUFIQSxTQUFQO0FBS0g7QUFDSixHQXZCRDs7QUF3QkFULGtEQUFTLENBQUMsTUFBTTtBQUNad0IsZ0JBQVk7QUFHZixHQUpRLEVBSU4sRUFKTSxDQUFUO0FBS0F4QixrREFBUyxDQUFDLE1BQU07QUFFWixRQUFJeUIsTUFBTSxDQUFDSSxZQUFQLENBQW9CSCxPQUF4QixFQUFpQztBQUM3QixVQUFHRCxNQUFNLENBQUNDLE9BQVAsQ0FBZXZCLEdBQWxCLEVBQXVCO0FBQ25CNEIsZUFBTyxDQUFDQyxHQUFSLENBQVksS0FBWjtBQUNBekIsZUFBTyxpQ0FDQUQsSUFEQTtBQUVIRyxZQUFFLEVBQUUsS0FGRDtBQUdIQyxnQkFBTSxFQUFFLElBSEw7QUFJSEMsZ0JBQU0sRUFBRSxLQUpMO0FBS0hDLGdCQUFNLEVBQUU7QUFMTCxXQUFQO0FBUUg7O0FBQ0RxQix1REFBQSxDQUFXLGdCQUFYLEVBQTZCUixNQUFNLENBQUNDLE9BQVAsQ0FBZUEsT0FBNUMsRUFBcUQ7QUFDakRRLGVBQU8sRUFBRTtBQUNMQyx1QkFBYSxFQUFHLFVBQVNWLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlVSxLQUFNO0FBRHpDO0FBRHdDLE9BQXJELEVBSUdDLElBSkgsQ0FJUUMsR0FBRyxJQUFJO0FBRVgsWUFBSUEsR0FBRyxDQUFDQyxNQUFKLEtBQWUsR0FBbkIsRUFBd0I7QUFDcEJkLGdCQUFNLENBQUNJLFlBQVAsQ0FBb0JILE9BQXBCLEdBQThCQyxJQUFJLENBQUNhLFNBQUwsQ0FBZUYsR0FBRyxDQUFDRyxJQUFuQixDQUE5QjtBQUNBaEIsZ0JBQU0sQ0FBQ0MsT0FBUCxHQUFpQkMsSUFBSSxDQUFDQyxLQUFMLENBQVdILE1BQU0sQ0FBQ0ksWUFBUCxDQUFvQkgsT0FBL0IsQ0FBakI7QUFDQW5CLGlCQUFPLGlDQUNBRCxJQURBO0FBRUhFLGdCQUFJLEVBQUUsSUFGSDtBQUdISSxrQkFBTSxFQUFFO0FBSEwsYUFBUDtBQUtIO0FBRUosT0FoQkQsRUFnQkc4QixLQWhCSCxDQWdCVXZDLEdBQUQsSUFBUztBQUNkSSxlQUFPLGlDQUNBRCxJQURBO0FBRUhHLFlBQUUsRUFBRSxLQUZEO0FBR0hDLGdCQUFNLEVBQUUsSUFITDtBQUlIQyxnQkFBTSxFQUFFLEtBSkw7QUFLSEMsZ0JBQU0sRUFBRTtBQUxMLFdBQVA7QUFRSCxPQXpCRDtBQTBCSCxLQXRDRCxNQXdDSztBQUNETCxhQUFPLGlDQUNBRCxJQURBO0FBRUhNLGNBQU0sRUFBRSxLQUZMO0FBR0hILFVBQUUsRUFBRTtBQUhELFNBQVA7QUFLSDtBQUVKLEdBbERRLEVBa0RQLEVBbERPLENBQVQ7O0FBb0RBLFdBQVNrQyxZQUFULENBQXNCQyxLQUF0QixFQUE2QjtBQUN6QkEsU0FBSyxDQUFDQyxjQUFOO0FBQ0F0QixnQkFBWSxpQ0FDTEQsU0FESztBQUVSLE9BQUNzQixLQUFLLENBQUNFLE1BQU4sQ0FBYUMsSUFBZCxHQUFvQkgsS0FBSyxDQUFDRSxNQUFOLENBQWFFO0FBRnpCLE9BQVo7QUFJSDs7QUFDRCxXQUFTQyxLQUFULEdBQWlCO0FBQ2IxQyxXQUFPLENBQUM7QUFDSkMsVUFBSSxFQUFDLEtBREQ7QUFFSkMsUUFBRSxFQUFDLEtBRkM7QUFHSkMsWUFBTSxFQUFDLEtBSEg7QUFJSkMsWUFBTSxFQUFDLEtBSkg7QUFLSkMsWUFBTSxFQUFDO0FBTEgsS0FBRCxDQUFQO0FBT0FxQixxREFBQSxDQUFXLFlBQVgsRUFBd0I7QUFBQ2QsV0FBSyxFQUFHQTtBQUFULEtBQXhCLEVBQXlDa0IsSUFBekMsQ0FBOENDLEdBQUcsSUFBSTtBQUNqRCxVQUFHQSxHQUFHLENBQUNHLElBQUosQ0FBU1MsVUFBVCxLQUF3QixRQUEzQixFQUFxQztBQUVqQ0Msa0JBQVUsQ0FBQyxNQUFNO0FBQ2I1QyxpQkFBTyxpQ0FDQUQsSUFEQTtBQUVIRyxjQUFFLEVBQUMsS0FGQTtBQUdIQyxrQkFBTSxFQUFDLEtBSEo7QUFJSEMsa0JBQU0sRUFBQyxJQUpKO0FBS0hDLGtCQUFNLEVBQUM7QUFMSixhQUFQO0FBU0gsU0FWUyxFQVVSLEdBVlEsQ0FBVjtBQWFILE9BZkQsTUFnQkssSUFBRzBCLEdBQUcsQ0FBQ0csSUFBSixDQUFTUyxVQUFULEtBQXdCLFFBQTNCLEVBQXFDO0FBRWxDQyxrQkFBVSxDQUFDLE1BQU07QUFDYjVDLGlCQUFPLGlDQUNBRCxJQURBO0FBRUhHLGNBQUUsRUFBQyxLQUZBO0FBR0hDLGtCQUFNLEVBQUMsSUFISjtBQUlIQyxrQkFBTSxFQUFDLEtBSko7QUFLSEMsa0JBQU0sRUFBQztBQUxKLGFBQVA7QUFTSCxTQVZTLEVBVVIsR0FWUSxDQUFWO0FBWVA7QUFDSixLQWhDRDtBQWlDSDs7QUFDRCxXQUFTd0MsWUFBVCxDQUFzQlIsS0FBdEIsRUFBNkI7QUFDekJBLFNBQUssQ0FBQ0MsY0FBTjtBQUNBN0IsWUFBUSxpQ0FBS0QsS0FBTDtBQUNKLE9BQUM2QixLQUFLLENBQUNFLE1BQU4sQ0FBYUMsSUFBZCxHQUFvQkgsS0FBSyxDQUFDRSxNQUFOLENBQWFFO0FBRDdCLE9BQVI7QUFHSDs7QUFFRCxXQUFTSyxJQUFULEdBQWdCO0FBRVpwQixxREFBQSxDQUFXLGNBQVgsRUFBMEJsQixLQUExQixFQUFpQ3NCLElBQWpDLENBQXNDQyxHQUFHLElBQUk7QUFDekNQLGFBQU8sQ0FBQ0MsR0FBUixDQUFZTSxHQUFaOztBQUNBLFVBQUdBLEdBQUcsQ0FBQ0MsTUFBSixLQUFlLEdBQWxCLEVBQXVCLENBRXRCO0FBQ0osS0FMRDtBQU1IOztBQUVELFdBQVNlLE1BQVQsR0FBa0I7QUFDZC9DLFdBQU8sQ0FBQztBQUNKQyxVQUFJLEVBQUMsS0FERDtBQUVKQyxRQUFFLEVBQUMsS0FGQztBQUdKQyxZQUFNLEVBQUMsS0FISDtBQUlKQyxZQUFNLEVBQUMsS0FKSDtBQUtKQyxZQUFNLEVBQUM7QUFMSCxLQUFELENBQVA7QUFPQXFCLHFEQUFBLENBQVcsYUFBWCxFQUF5QlgsU0FBekIsRUFBb0NlLElBQXBDLENBQXlDQyxHQUFHLElBQUk7QUFFNUMsVUFBR0EsR0FBRyxDQUFDRyxJQUFKLENBQVNjLFlBQVosRUFBMEI7QUFDdEIsWUFBSTdCLE9BQU8sR0FBRztBQUNWVSxlQUFLLEVBQUNFLEdBQUcsQ0FBQ0csSUFBSixDQUFTTCxLQURMO0FBRVZWLGlCQUFPLEVBQUNZLEdBQUcsQ0FBQ0csSUFBSixDQUFTZjtBQUZQLFNBQWQ7QUFJQUQsY0FBTSxDQUFDQyxPQUFQLEdBQWlCQSxPQUFqQjtBQUNBRCxjQUFNLENBQUNJLFlBQVAsQ0FBb0IyQixPQUFwQixDQUE0QixTQUE1QixFQUFzQzdCLElBQUksQ0FBQ2EsU0FBTCxDQUFlZCxPQUFmLENBQXRDLEVBTnNCLENBU3RCOztBQUVHbkIsZUFBTyxDQUFDO0FBQ1BDLGNBQUksRUFBQyxJQURFO0FBRVBDLFlBQUUsRUFBQyxLQUZJO0FBR1BDLGdCQUFNLEVBQUMsS0FIQTtBQUlQQyxnQkFBTSxFQUFDLEtBSkE7QUFLUEMsZ0JBQU0sRUFBQztBQUxBLFNBQUQsQ0FBUCxDQVhtQixDQW1CdEI7QUFDSCxPQXBCRCxNQXFCSztBQUNEUixjQUFNLENBQUMsQ0FBQ0QsR0FBRixDQUFOO0FBQ0FJLGVBQU8saUNBQ0FELElBREE7QUFFSE0sZ0JBQU0sRUFBQztBQUZKLFdBQVA7QUFJSDtBQUVKLEtBL0JEO0FBZ0NIOztBQUNELE1BQUlOLElBQUksQ0FBQ0UsSUFBVCxFQUFlLG9CQUFPLDhEQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQLENBQWYsS0FDSyxJQUFJRixJQUFJLENBQUNNLE1BQVQsRUFBaUIsb0JBQU8sOERBQUMsTUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVAsQ0FBakIsS0FDQSxJQUFHTixJQUFJLENBQUNHLEVBQVIsRUFBWSxvQkFDYjtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFFZ0QscUVBQWhCO0FBQTJCLFdBQUssRUFBRTtBQUFFQyx1QkFBZSxFQUFDLFNBQWxCO0FBQTRCQyxpQkFBUyxFQUFDO0FBQXRDLE9BQWxDO0FBQUEsNkJBQ0ksOERBQUMsSUFBRDtBQUFNLFlBQUksRUFBQztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFLQTtBQUFLLGVBQVMsRUFBRUYsdUVBQWhCO0FBQUEsOEJBQ0k7QUFBSyxpQkFBUyxFQUFFQSw2RUFBaUJHO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUlJO0FBQUssaUJBQVMsRUFBRUgsOEVBQWhCO0FBQUEsZ0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFNLGdCQUFNLEVBQUMsR0FBYjtBQUFpQixrQkFBUSxFQUFFUixLQUEzQjtBQUFBLGtDQUdJO0FBQU8sZ0JBQUksRUFBQyxPQUFaO0FBQW9CLGdCQUFJLEVBQUMsT0FBekI7QUFBaUMsY0FBRSxFQUFDLEVBQXBDO0FBQXVDLHVCQUFXLEVBQUMsUUFBbkQ7QUFBNEQsaUJBQUssRUFBRTlCLEtBQW5FO0FBQTBFLG9CQUFRLEVBQUd5QixLQUFELElBQVd2QixRQUFRLENBQUN1QixLQUFLLENBQUNFLE1BQU4sQ0FBYUUsS0FBZDtBQUF2RztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhKLGVBTUk7QUFBTyxnQkFBSSxFQUFDLFFBQVo7QUFBcUIsaUJBQUssRUFBQyxRQUEzQjtBQUFvQyxxQkFBUyxFQUFFUyx3RUFBL0M7QUFBOEQsbUJBQU8sRUFBRVIsS0FBdkU7QUFBOEUsb0JBQVEsRUFBRUE7QUFBeEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEE7QUFBQSxrQkFEYSxDQUFaLEtBMEJBLElBQUkzQyxJQUFJLENBQUNJLE1BQVQsRUFBaUIsb0JBQ2xCO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUUrQyxxRUFBaEI7QUFBMkIsV0FBSyxFQUFFO0FBQUVDLHVCQUFlLEVBQUUsU0FBbkI7QUFBOEJDLGlCQUFTLEVBQUU7QUFBekMsT0FBbEM7QUFBQSw2QkFDSSw4REFBQyxJQUFEO0FBQU0sWUFBSSxFQUFDO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUtBO0FBQUssZUFBUyxFQUFFRix1RUFBaEI7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUVBLDZFQUFpQkc7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBSUk7QUFBSyxpQkFBUyxFQUFFSCw4RUFBaEI7QUFBQSxnQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQU0sZ0JBQU0sRUFBQyxHQUFiO0FBQWlCLGtCQUFRLEVBQUVILE1BQTNCO0FBQUEsa0NBR0k7QUFBTyxnQkFBSSxFQUFDLE9BQVo7QUFBb0IsZ0JBQUksRUFBQyxPQUF6QjtBQUFpQyxjQUFFLEVBQUMsRUFBcEM7QUFBdUMsdUJBQVcsRUFBQyxRQUFuRDtBQUE0RCxpQkFBSyxFQUFFaEMsU0FBUyxDQUFDSCxLQUE3RTtBQUFvRixvQkFBUSxFQUFFd0I7QUFBOUY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFISixlQUlJO0FBQU8sZ0JBQUksRUFBQyxVQUFaO0FBQXVCLGdCQUFJLEVBQUMsVUFBNUI7QUFBdUMsY0FBRSxFQUFDLEVBQTFDO0FBQTZDLHVCQUFXLEVBQUMsV0FBekQ7QUFBcUUsaUJBQUssRUFBRXJCLFNBQVMsQ0FBQ0YsUUFBdEY7QUFBZ0csb0JBQVEsRUFBRXVCO0FBQTFHO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkosZUFNSTtBQUFPLGdCQUFJLEVBQUMsUUFBWjtBQUFxQixpQkFBSyxFQUFDLFFBQTNCO0FBQW9DLHFCQUFTLEVBQUVjLHdFQUEvQztBQUE4RCxtQkFBTyxFQUFFSCxNQUF2RTtBQUErRSxvQkFBUSxFQUFFQTtBQUF6RjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQU5KLEVBUVFuRCxHQUFHLGlCQUFJO0FBQU8sbUJBQU8sRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVJmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMQTtBQUFBLGtCQURrQixDQUFqQixLQTJCQSxJQUFHRyxJQUFJLENBQUNLLE1BQVIsRUFBZ0Isb0JBQ2pCO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUU4QyxxRUFBaEI7QUFBMkIsV0FBSyxFQUFFO0FBQUVDLHVCQUFlLEVBQUUsU0FBbkI7QUFBOEJDLGlCQUFTLEVBQUU7QUFBekMsT0FBbEM7QUFBQSw2QkFDSSw4REFBQyxJQUFEO0FBQU0sWUFBSSxFQUFDO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUtBO0FBQUssZUFBUyxFQUFFRix1RUFBaEI7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUVBLDZFQUFpQkc7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBSUk7QUFBSyxpQkFBUyxFQUFFSCw4RUFBaEI7QUFBQSxnQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQU0sZ0JBQU0sRUFBQyxHQUFiO0FBQWlCLGtCQUFRLEVBQUVKLElBQTNCO0FBQUEsa0NBRUk7QUFBTyxnQkFBSSxFQUFDLE1BQVo7QUFBbUIsZ0JBQUksRUFBQyxXQUF4QjtBQUFvQyxjQUFFLEVBQUMsRUFBdkM7QUFBMEMsdUJBQVcsRUFBQyxhQUF0RDtBQUFvRSxpQkFBSyxFQUFFdEMsS0FBSyxDQUFDRSxTQUFqRjtBQUE0RixvQkFBUSxFQUFFbUM7QUFBdEc7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSixlQUdJO0FBQU8sZ0JBQUksRUFBQyxNQUFaO0FBQW1CLGdCQUFJLEVBQUMsVUFBeEI7QUFBbUMsY0FBRSxFQUFDLEVBQXRDO0FBQXlDLHVCQUFXLEVBQUMsWUFBckQ7QUFBa0UsaUJBQUssRUFBRXJDLEtBQUssQ0FBQ0csUUFBL0U7QUFBeUYsb0JBQVEsRUFBRWtDO0FBQW5HO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEosZUFJSTtBQUFPLGdCQUFJLEVBQUMsT0FBWjtBQUFvQixnQkFBSSxFQUFDLE9BQXpCO0FBQWlDLGNBQUUsRUFBQyxFQUFwQztBQUF1Qyx1QkFBVyxFQUFDLFFBQW5EO0FBQTRELGlCQUFLLEVBQUVyQyxLQUFLLENBQUNJLEtBQXpFO0FBQWdGLG9CQUFRLEVBQUVpQztBQUExRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpKLGVBS0k7QUFBTyxnQkFBSSxFQUFDLFVBQVo7QUFBdUIsZ0JBQUksRUFBQyxVQUE1QjtBQUF1QyxjQUFFLEVBQUMsRUFBMUM7QUFBNkMsdUJBQVcsRUFBQyxpQkFBekQ7QUFBMkUsaUJBQUssRUFBRXJDLEtBQUssQ0FBQ0ssUUFBeEY7QUFBa0csb0JBQVEsRUFBRWdDO0FBQTVHO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTEosZUFNSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFOSixlQU9JO0FBQU8sZ0JBQUksRUFBQyxRQUFaO0FBQXFCLGlCQUFLLEVBQUMsUUFBM0I7QUFBb0MscUJBQVMsRUFBRUssd0VBQS9DO0FBQThELG1CQUFPLEVBQUVKLElBQXZFO0FBQTZFLG9CQUFRLEVBQUVBO0FBQXZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxBO0FBQUEsa0JBRGlCO0FBMEJ4Qjs7QUFFRCxTQUFTUSxJQUFULENBQWM7QUFBQ0M7QUFBRCxDQUFkLEVBQXNCO0FBQ2xCLHNCQUNJO0FBQUssU0FBSyxFQUFDLEtBQVg7QUFBaUIsVUFBTSxFQUFDLEtBQXhCO0FBQThCLFdBQU8sRUFBQyxhQUF0QztBQUFvRCxRQUFJLEVBQUMsTUFBekQ7QUFBZ0UsU0FBSyxFQUFDLDRCQUF0RTtBQUFBLDRCQUNJO0FBQU0sT0FBQyxFQUFDLHlpQkFBUjtBQUFrakIsVUFBSSxFQUFFQTtBQUF4akI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBTSxPQUFDLEVBQUMsc3lCQUFSO0FBQSt5QixVQUFJLEVBQUVBO0FBQXJ6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFHSTtBQUFNLE9BQUMsRUFBQyxta1dBQVI7QUFBNGtXLFVBQUksRUFBQztBQUFqbFc7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBUUgsQzs7Ozs7Ozs7OztBQzdURDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNKQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9hZG1pbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiXG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4uLy4uL3N0eWxlcy9sb2dpbi5tb2R1bGUuY3NzXCJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcbmltcG9ydCAkIGZyb20gXCJqcXVlcnlcIlxuXG5cbmNvbnN0IExvYWRlciA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiLi4vLi4vY29tcG9uZW50cy9sb2FkZXJcIikpXG5jb25zdCBUb3AgPSBkeW5hbWljKCgpID0+IGltcG9ydChcIi4uLy4uL2NvbXBvbmVudHMvdG9wXCIpKVxuY29uc3QgRGFzaGJvYXJkID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCIuLi8uLi9jb21wb25lbnRzL2FkbWluY29udHJvbHNcIikpXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXNoSG9tZSAoKSB7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgJChcImJvZHlcIikuY3NzKFwiYmFja2dyb3VuZFNpemVcIixcIjBcIilcbiAgICAgICAgXG4gICAgfSwgW10pXG4gICAgY29uc3QgW2VycixzZXRFcnJdID0gdXNlU3RhdGUoZmFsc2UpXG4gICBcbiAgICBjb25zdCBbbWFpbixzZXRNYWluXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgdXNlcjpmYWxzZSxcbiAgICAgICAgdXA6ZmFsc2UsXG4gICAgICAgIHNpZ25pbjp0cnVlLFxuICAgICAgICBzaWdudXA6ZmFsc2UsXG4gICAgICAgIGxvYWRlcjpmYWxzZVxuICAgIH0pXG4gICAgY29uc3QgW3VkYXRhLHNldFVkYXRhXSA9IHVzZVN0YXRlKClcbiAgICBjb25zdCBbc3RhdGUsc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xuICAgICAgICBmaXJzdE5hbWU6XCJcIixcbiAgICAgICAgbGFzdE5hbWU6IFwiXCIsXG4gICAgICAgIGVtYWlsOlwiXCIsXG4gICAgICAgIHBhc3N3b3JkOlwiXCJcbiAgICB9KVxuICAgIGNvbnN0IFtlbWFpbCxzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKVxuICAgIGNvbnN0IFtzaWduU3RhdGUsc2V0U2lnblN0YXRlXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgZW1haWw6XCJcIixcbiAgICAgICAgcGFzc3dvcmQ6XCJcIlxuICAgIH0pXG4gICAgY29uc3QgaW5pdGlhbENoZWNrID0gKCkgPT4ge1xuICAgICAgICBpZighd2luZG93LnNlc3Npb24pIHtcbiAgICAgICAgICAgIHdpbmRvdy5zZXNzaW9uID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzZXNzaW9uXCIpKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHdpbmRvdy5zZXNzaW9uLmVycikge1xuICAgICAgICAgICAgc2V0TWFpbih7XG4gICAgICAgICAgICAgICAgLi4ubWFpbixcbiAgICAgICAgICAgICAgICB1cDogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2lnbmluOiB0cnVlLFxuICAgICAgICAgICAgICAgIHNpZ251cDogZmFsc2UsXG4gICAgICAgICAgICAgICAgbG9hZGVyOiBmYWxzZSxcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImhlcmUgYXMgd2VsbFwiKVxuICAgICAgICAgICAgc2V0TWFpbih7XG4gICAgICAgICAgICAgICAgLi4ubWFpbixcbiAgICAgICAgICAgICAgICBsb2FkZXI6ZmFsc2UsXG4gICAgICAgICAgICAgICAgdXA6dHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpbml0aWFsQ2hlY2soKVxuXG5cbiAgICB9LCBbXSlcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2Vzc2lvbikge1xuICAgICAgICAgICAgaWYod2luZG93LnNlc3Npb24uZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJydW5cIilcbiAgICAgICAgICAgICAgICBzZXRNYWluKHtcbiAgICAgICAgICAgICAgICAgICAgLi4ubWFpbixcbiAgICAgICAgICAgICAgICAgICAgdXA6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBzaWduaW46IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHNpZ251cDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGxvYWRlcjogZmFsc2UsXG5cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXhpb3MucG9zdChcIi9hcGkvdG9rZW5hdXRoXCIsIHdpbmRvdy5zZXNzaW9uLnNlc3Npb24sIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt3aW5kb3cuc2Vzc2lvbi50b2tlbn1gXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXNzaW9uID0gSlNPTi5zdHJpbmdpZnkocmVzLmRhdGEpXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXNzaW9uID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLnNlc3Npb24pXG4gICAgICAgICAgICAgICAgICAgIHNldE1haW4oe1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4ubWFpbixcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkZXI6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0TWFpbih7XG4gICAgICAgICAgICAgICAgICAgIC4uLm1haW4sXG4gICAgICAgICAgICAgICAgICAgIHVwOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgc2lnbmluOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBzaWdudXA6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBsb2FkZXI6IGZhbHNlLFxuXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2V0TWFpbih7XG4gICAgICAgICAgICAgICAgLi4ubWFpbixcbiAgICAgICAgICAgICAgICBsb2FkZXI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHVwOiB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH0sW10pXG4gICAgXG4gICAgZnVuY3Rpb24gaGFuZGxlU2lnbkluKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgc2V0U2lnblN0YXRlKHtcbiAgICAgICAgICAgIC4uLnNpZ25TdGF0ZSxcbiAgICAgICAgICAgIFtldmVudC50YXJnZXQubmFtZV06ZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGZ1bmN0aW9uIENoZWNrKCkge1xuICAgICAgICBzZXRNYWluKHtcbiAgICAgICAgICAgIHVzZXI6ZmFsc2UsXG4gICAgICAgICAgICB1cDpmYWxzZSxcbiAgICAgICAgICAgIHNpZ25pbjpmYWxzZSxcbiAgICAgICAgICAgIHNpZ251cDpmYWxzZSxcbiAgICAgICAgICAgIGxvYWRlcjp0cnVlXG4gICAgICAgIH0pXG4gICAgICAgIGF4aW9zLnBvc3QoXCIvYXBpL2VtYWlsXCIse2VtYWlsIDogZW1haWx9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBpZihyZXMuZGF0YS52YWxpZGF0aW9uID09PSAnc2lnbnVwJykge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRNYWluKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLm1haW4sXG4gICAgICAgICAgICAgICAgICAgICAgICB1cDpmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25pbjpmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZ251cDp0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGVyOmZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH0sMzAwKVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYocmVzLmRhdGEudmFsaWRhdGlvbiA9PT0gJ3NpZ25pbicpIHtcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldE1haW4oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLm1haW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXA6ZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lnbmluOnRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lnbnVwOmZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRlcjpmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfSwzMDApXG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gICAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgc2V0U3RhdGUoey4uLnN0YXRlLFxuICAgICAgICAgICAgW2V2ZW50LnRhcmdldC5uYW1lXTpldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgfSlcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gU2VuZCgpIHtcbiAgICAgICAgXG4gICAgICAgIGF4aW9zLnBvc3QoXCIvYXBpL2FkZFVzZXJcIixzdGF0ZSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICAgICAgaWYocmVzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gU2lnbkluKCkge1xuICAgICAgICBzZXRNYWluKHtcbiAgICAgICAgICAgIHVzZXI6ZmFsc2UsXG4gICAgICAgICAgICB1cDpmYWxzZSxcbiAgICAgICAgICAgIHNpZ25pbjpmYWxzZSxcbiAgICAgICAgICAgIHNpZ251cDpmYWxzZSxcbiAgICAgICAgICAgIGxvYWRlcjp0cnVlXG4gICAgICAgIH0pXG4gICAgICAgIGF4aW9zLnBvc3QoXCIvYXBpL3NpZ25pblwiLHNpZ25TdGF0ZSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZihyZXMuZGF0YS52ZXJpZmljYXRpb24pIHtcbiAgICAgICAgICAgICAgICBsZXQgc2Vzc2lvbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46cmVzLmRhdGEudG9rZW4sXG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb246cmVzLmRhdGEuc2Vzc2lvblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB3aW5kb3cuc2Vzc2lvbiA9IHNlc3Npb25cbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzZXNzaW9uXCIsSlNPTi5zdHJpbmdpZnkoc2Vzc2lvbikpXG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgc2V0TWFpbih7XG4gICAgICAgICAgICAgICAgICAgIHVzZXI6dHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdXA6ZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHNpZ25pbjpmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgc2lnbnVwOmZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBsb2FkZXI6ZmFsc2VcbiAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgLy8gfSwzMDApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRFcnIoIWVycilcbiAgICAgICAgICAgICAgICBzZXRNYWluKHtcbiAgICAgICAgICAgICAgICAgICAgLi4ubWFpbixcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVyOmZhbHNlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuICAgIH1cbiAgICBpZiAobWFpbi51c2VyKSByZXR1cm4gPERhc2hib2FyZCAvPlxuICAgIGVsc2UgaWYgKG1haW4ubG9hZGVyKSByZXR1cm4gPExvYWRlciAvPlxuICAgIGVsc2UgaWYobWFpbi51cCkgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS50b3B9IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjpcIiNmMmY2ZmZcIixib3hTaXppbmc6XCJib3JkZXItYm94XCJ9fT5cbiAgICAgICAgICAgICAgICA8TG9nbyBmaWxsPVwiIzFmMWY0N1wiICAvPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmxvZ2lufT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5sZWZ0Q29udGVudH0+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnJpZ2h0Q29udGVudH0+XG4gICAgICAgICAgICAgICAgPGgyPiBTaWduIEluIG9yIFNpZ24gVXA8L2gyPlxuICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIiNcIiBvblN1Ym1pdD17Q2hlY2t9PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIGlkPVwiXCIgcGxhY2Vob2xkZXI9XCJFbWFpbCpcIiB2YWx1ZT17ZW1haWx9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldEVtYWlsKGV2ZW50LnRhcmdldC52YWx1ZSkgfSAvPlxuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIlN1Ym1pdFwiIGNsYXNzTmFtZT17c3R5bGUuYnV0dG9ufSAgb25DbGljaz17Q2hlY2t9IG9uU3VibWl0PXtDaGVja30gIC8+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz4gXG4gICAgKVxuICAgICAgICBcbiAgICBcbiAgICBlbHNlIGlmIChtYWluLnNpZ25pbikgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS50b3B9IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjZjJmNmZmXCIsIGJveFNpemluZzogXCJib3JkZXItYm94XCIgfX0+XG4gICAgICAgICAgICAgICAgPExvZ28gZmlsbD1cIiMxZjFmNDdcIiAvPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmxvZ2lufT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5sZWZ0Q29udGVudH0+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnJpZ2h0Q29udGVudH0+XG4gICAgICAgICAgICAgICAgPGgyPiBTaWduIEluPC9oMj5cbiAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIjXCIgb25TdWJtaXQ9e1NpZ25Jbn0+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIGlkPVwiXCIgcGxhY2Vob2xkZXI9XCJFbWFpbCpcIiB2YWx1ZT17c2lnblN0YXRlLmVtYWlsfSBvbkNoYW5nZT17aGFuZGxlU2lnbklufSAvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgaWQ9XCJcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkKlwiIHZhbHVlPXtzaWduU3RhdGUucGFzc3dvcmR9IG9uQ2hhbmdlPXtoYW5kbGVTaWduSW59IC8+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiU3VibWl0XCIgY2xhc3NOYW1lPXtzdHlsZS5idXR0b259ICBvbkNsaWNrPXtTaWduSW59IG9uU3VibWl0PXtTaWduSW59IC8+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVyciAmJiA8bGFiZWwgaHRtbEZvcj1cInRlc3RcIj5Xcm9uZyBwYXNzd29yZCB0cnkgYWdhaW48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz4gXG4gICAgKVxuICAgIGVsc2UgaWYobWFpbi5zaWdudXApIHJldHVybihcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS50b3B9IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjZjJmNmZmXCIsIGJveFNpemluZzogXCJib3JkZXItYm94XCIgfX0+XG4gICAgICAgICAgICAgICAgPExvZ28gZmlsbD1cIiMxZjFmNDdcIiAvPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmxvZ2lufT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5sZWZ0Q29udGVudH0+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnJpZ2h0Q29udGVudH0+XG4gICAgICAgICAgICAgICAgPGgyPiBTaWduIFVwPC9oMj5cbiAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIjXCIgb25TdWJtaXQ9e1NlbmR9PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImZpcnN0TmFtZVwiIGlkPVwiXCIgcGxhY2Vob2xkZXI9XCJGaXJzdCBOYW1lKlwiIHZhbHVlPXtzdGF0ZS5maXJzdE5hbWV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJsYXN0TmFtZVwiIGlkPVwiXCIgcGxhY2Vob2xkZXI9XCJMYXN0IE5hbWUqXCIgdmFsdWU9e3N0YXRlLmxhc3ROYW1lfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgaWQ9XCJcIiBwbGFjZWhvbGRlcj1cIkVtYWlsKlwiIHZhbHVlPXtzdGF0ZS5lbWFpbH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIGlkPVwiXCIgcGxhY2Vob2xkZXI9XCJDcmVhdGUgUGFzc3dvcmRcIiB2YWx1ZT17c3RhdGUucGFzc3dvcmR9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxwPlBhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgOCBjaGFyYWN0ZXJzIGxvbmc8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJTdWJtaXRcIiBjbGFzc05hbWU9e3N0eWxlLmJ1dHRvbn0gIG9uQ2xpY2s9e1NlbmR9IG9uU3VibWl0PXtTZW5kfSAvPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKVxuICAgXG59XG5cbmZ1bmN0aW9uIExvZ28oe2ZpbGx9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHN2ZyB3aWR0aD1cIjE4NFwiIGhlaWdodD1cIjEyOVwiIHZpZXdCb3g9XCIwIDAgMTg0IDEyOVwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgPHBhdGggZD1cIk00MS40NjgyIDM1Ljg0M1Y0OS40MjI2QzQxLjQ2ODIgNTEuNjc4OCA0MC43NjAyIDUzLjQ2MyAzOS4zNDQyIDU0Ljc3NTFDMzcuOTM3NiA1Ni4wODczIDM2LjAxMTggNTYuNzQzNCAzMy41NjY5IDU2Ljc0MzRDMzEuMTU5NiA1Ni43NDM0IDI5LjI0OCA1Ni4xMDYyIDI3LjgzMiA1NC44MzE4QzI2LjQxNiA1My41NTc0IDI1LjY5MzggNTEuODA2MiAyNS42NjU1IDQ5LjU3ODRWMzUuODQzSDI5LjkxMzVWNDkuNDUwOUMyOS45MTM1IDUwLjgwMDkgMzAuMjM0NSA1MS43ODc0IDMwLjg3NjQgNTIuNDEwNEMzMS41Mjc4IDUzLjAyNCAzMi40MjQ2IDUzLjMzMDggMzMuNTY2OSA1My4zMzA4QzM1Ljk1NTIgNTMuMzMwOCAzNy4xNjgzIDUyLjA3NTMgMzcuMjA2IDQ5LjU2NDJWMzUuODQzSDQxLjQ2ODJaTTYxLjcxNzIgNTYuNDYwMkg1Ny40NjkyTDQ5LjE5OTcgNDIuODk0OFY1Ni40NjAySDQ0Ljk1MTZWMzUuODQzSDQ5LjE5OTdMNTcuNDgzNCA0OS40MzY4VjM1Ljg0M0g2MS43MTcyVjU2LjQ2MDJaTTY5Ljk0NDMgNTYuNDYwMkg2NS42OTYzVjM1Ljg0M0g2OS45NDQzVjU2LjQ2MDJaXCIgZmlsbD17ZmlsbH0gLz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNODcuNDg2NyA1Ni40NjAySDgzLjIzODdWNDcuNjI0M0g3NC45NTVWNTYuNDYwMkg3MC43MDY5VjM1Ljg0M0g3NC45NTVWNDQuMTk3NUg4My4yMzg3VjM1Ljg0M0g4Ny40ODY3VjU2LjQ2MDJaTTEwMy42MTUgNDcuNTI1MUg5NS40NTg5VjUzLjA0NzZIMTA1LjAzMVY1Ni40NjAySDkxLjIxMDhWMzUuODQzSDEwNS4wMDNWMzkuMjgzOUg5NS40NTg5VjQ0LjE5NzVIMTAzLjYxNVY0Ny41MjUxWk0xMTEuNzcxIDUzLjA0NzZIMTIwLjc5MVY1Ni40NjAySDEwNy41MjNWMzUuODQzSDExMS43NzFWNTMuMDQ3NlpNMTI3LjQ4OSA0OS4xOTZWNTYuNDYwMkgxMjMuMjQxVjM1Ljg0M0gxMzEuMjg0QzEzMi44MzIgMzUuODQzIDEzNC4xOTIgMzYuMTI2MiAxMzUuMzYyIDM2LjY5MjZDMTM2LjU0MiAzNy4yNTkgMTM3LjQ0OCAzOC4wNjYyIDEzOC4wODEgMzkuMTE0QzEzOC43MTMgNDAuMTUyNCAxMzkuMDMgNDEuMzM3MiAxMzkuMDMgNDIuNjY4MkMxMzkuMDMgNDQuNjg4NCAxMzguMzM2IDQ2LjI4MzggMTM2Ljk0OCA0Ny40NTQzQzEzNS41NyA0OC42MTU1IDEzMy42NTggNDkuMTk2IDEzMS4yMTMgNDkuMTk2SDEyNy40ODlaTTEyNy40ODkgNDUuNzU1MUgxMzEuMjg0QzEzMi40MDcgNDUuNzU1MSAxMzMuMjYyIDQ1LjQ5MDggMTMzLjg0NyA0NC45NjIyQzEzNC40NDIgNDQuNDMzNSAxMzQuNzM5IDQzLjY3ODMgMTM0LjczOSA0Mi42OTY1QzEzNC43MzkgNDEuNjg2NCAxMzQuNDQyIDQwLjg2OTkgMTMzLjg0NyA0MC4yNDY4QzEzMy4yNTIgMzkuNjIzOCAxMzIuNDMxIDM5LjMwMjggMTMxLjM4MyAzOS4yODM5SDEyNy40ODlWNDUuNzU1MVpcIiBmaWxsPXtmaWxsfSAvPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0yOS40MTA2IDY5LjM3MjNIMjguOTI2M1Y2Ni42NDU4SDI1LjY3NjNWNjkuMzcyM0gyNS4xOTU4VjYzLjY4NDhIMjUuNjc2M1Y2Ni4yMzk1SDI4LjkyNjNWNjMuNjg0OEgyOS40MTA2VjY5LjM3MjNaTTMwLjQ5MjcgNjcuMTk2NUMzMC40OTI3IDY2Ljc5MDMgMzAuNTcwOCA2Ni40MjQ0IDMwLjcyNzEgNjYuMDk4OUMzMC44ODU5IDY1Ljc3MzQgMzEuMTA4NiA2NS41MjA4IDMxLjM5NSA2NS4zNDExQzMxLjY4NDEgNjUuMTU4OCAzMi4wMTA5IDY1LjA2NzYgMzIuMzc1NSA2NS4wNjc2QzMyLjkzOCA2NS4wNjc2IDMzLjM5MzcgNjUuMjY1NSAzMy43NDI3IDY1LjY2MTRDMzQuMDkxNiA2Ni4wNTQ2IDM0LjI2NjEgNjYuNTc2NyAzNC4yNjYxIDY3LjIyNzhWNjcuMzI1NEMzNC4yNjYxIDY3LjczNDMgMzQuMTg2NyA2OC4xMDI4IDM0LjAyNzggNjguNDMwOUMzMy44NzE2IDY4Ljc1NjQgMzMuNjUwMiA2OS4wMDc3IDMzLjM2MzggNjkuMTg0OEMzMy4wNzczIDY5LjM2MTkgMzIuNzUwNSA2OS40NTA0IDMyLjM4MzMgNjkuNDUwNEMzMS44MjM0IDY5LjQ1MDQgMzEuMzY3NyA2OS4yNTM4IDMxLjAxNjEgNjguODYwNkMzMC42NjcyIDY4LjQ2NDggMzAuNDkyNyA2Ny45NDEzIDMwLjQ5MjcgNjcuMjkwM1Y2Ny4xOTY1Wk0zMC45NjE0IDY3LjMyNTRDMzAuOTYxNCA2Ny44MzA2IDMxLjA5MTYgNjguMjQ2IDMxLjM1MjEgNjguNTcxNUMzMS42MTUxIDY4Ljg5NDQgMzEuOTU4OCA2OS4wNTU5IDMyLjM4MzMgNjkuMDU1OUMzMi44MDUyIDY5LjA1NTkgMzMuMTQ2MyA2OC44OTQ0IDMzLjQwNjcgNjguNTcxNUMzMy42Njk4IDY4LjI0NiAzMy44MDEzIDY3LjgxNzYgMzMuODAxMyA2Ny4yODY0VjY3LjE5NjVDMzMuODAxMyA2Ni44NzM2IDMzLjc0MTQgNjYuNTc4IDMzLjYyMTYgNjYuMzA5OEMzMy41MDE4IDY2LjA0MTYgMzMuMzMzOCA2NS44MzQ2IDMzLjExNzcgNjUuNjg4N0MzMi45MDE1IDY1LjU0MDMgMzIuNjU0MSA2NS40NjYxIDMyLjM3NTUgNjUuNDY2MUMzMS45NTg4IDY1LjQ2NjEgMzEuNjE5IDY1LjYzMDEgMzEuMzU2IDY1Ljk1ODNDMzEuMDkyOSA2Ni4yODM4IDMwLjk2MTQgNjYuNzEwOSAzMC45NjE0IDY3LjIzOTVWNjcuMzI1NFpNMzUuNjYwNiA2NS4xNDU4TDM1LjY3NjMgNjUuODMzM0MzNS44MzI1IDY1LjU3OCAzNi4wMjc4IDY1LjM4NjYgMzYuMjYyMiA2NS4yNTlDMzYuNDk2NiA2NS4xMzE0IDM2Ljc1NyA2NS4wNjc2IDM3LjA0MzUgNjUuMDY3NkMzNy43MTAxIDY1LjA2NzYgMzguMTMzMyA2NS4zNDExIDM4LjMxMyA2NS44ODc5QzM4LjQ2NCA2NS42MjQ5IDM4LjY2NTkgNjUuNDIzMSAzOC45MTg1IDY1LjI4MjVDMzkuMTcxMSA2NS4xMzkyIDM5LjQ0OTcgNjUuMDY3NiAzOS43NTQ0IDY1LjA2NzZDNDAuNjYwNiA2NS4wNjc2IDQxLjEyMjkgNjUuNTYyNCA0MS4xNDExIDY2LjU1MlY2OS4zNzIzSDQwLjY3MjRWNjYuNTg3MkM0MC42Njk4IDY2LjIwOTYgNDAuNTg3NyA2NS45Mjk2IDQwLjQyNjMgNjUuNzQ3M0M0MC4yNjc0IDY1LjU2NSA0MC4wMDcgNjUuNDczOSAzOS42NDUgNjUuNDczOUMzOS4zMDkxIDY1LjQ3OTEgMzkuMDI1MiA2NS41ODg1IDM4Ljc5MzUgNjUuODAyQzM4LjU2MTcgNjYuMDEyOSAzOC40MzI4IDY2LjI3MDggMzguNDA2NyA2Ni41NzU0VjY5LjM3MjNIMzcuOTM4VjY2LjU1MkMzNy45MzU0IDY2LjE5IDM3Ljg0OTQgNjUuOTIwNSAzNy42ODAyIDY1Ljc0MzRDMzcuNTEzNSA2NS41NjM3IDM3LjI1NTcgNjUuNDczOSAzNi45MDY3IDY1LjQ3MzlDMzYuNjEyNSA2NS40NzM5IDM2LjM1OTkgNjUuNTU4NSAzNi4xNDg5IDY1LjcyNzhDMzUuOTM4IDY1Ljg5NDQgMzUuNzgxNyA2Ni4xNDMxIDM1LjY4MDIgNjYuNDczOVY2OS4zNzIzSDM1LjIxMTRWNjUuMTQ1OEgzNS42NjA2Wk00My45NjUzIDY5LjQ1MDRDNDMuNjA2IDY5LjQ1MDQgNDMuMjgwNCA2OS4zNjE5IDQyLjk4ODggNjkuMTg0OEM0Mi42OTk3IDY5LjAwNzcgNDIuNDc0NCA2OC43NjE2IDQyLjMxMyA2OC40NDY1QzQyLjE1MTUgNjguMTI4OCA0Mi4wNzA4IDY3Ljc3MzQgNDIuMDcwOCA2Ny4zODAxVjY3LjIxMjJDNDIuMDcwOCA2Ni44MDU5IDQyLjE0ODkgNjYuNDQgNDIuMzA1MiA2Ni4xMTQ1QzQyLjQ2NCA2NS43ODkgNDIuNjg0MSA2NS41MzM4IDQyLjk2NTMgNjUuMzQ4OUM0My4yNDY2IDY1LjE2MTQgNDMuNTUxMyA2NS4wNjc2IDQzLjg3OTQgNjUuMDY3NkM0NC4zOTI0IDY1LjA2NzYgNDQuNzk4NyA2NS4yNDM0IDQ1LjA5ODEgNjUuNTk1QzQ1LjQwMDIgNjUuOTQzOSA0NS41NTEzIDY2LjQyMTggNDUuNTUxMyA2Ny4wMjg2VjY3LjI5MDNINDIuNTM1NlY2Ny4zODAxQzQyLjUzNTYgNjcuODU5MyA0Mi42NzI0IDY4LjI1OSA0Mi45NDU4IDY4LjU3OTNDNDMuMjIxOCA2OC44OTcxIDQzLjU2ODIgNjkuMDU1OSA0My45ODQ5IDY5LjA1NTlDNDQuMjM0OSA2OS4wNTU5IDQ0LjQ1NDkgNjkuMDEwMyA0NC42NDUgNjguOTE5MkM0NC44Mzc3IDY4LjgyOCA0NS4wMTIyIDY4LjY4MjIgNDUuMTY4NSA2OC40ODE3TDQ1LjQ2MTQgNjguNzA0M0M0NS4xMTc3IDY5LjIwMTcgNDQuNjE5IDY5LjQ1MDQgNDMuOTY1MyA2OS40NTA0Wk00My44Nzk0IDY1LjQ2NjFDNDMuNTI3OCA2NS40NjYxIDQzLjIzMSA2NS41OTUgNDIuOTg4OCA2NS44NTI4QzQyLjc0OTIgNjYuMTEwNiA0Mi42MDM0IDY2LjQ1NjkgNDIuNTUxMyA2Ni44OTE4SDQ1LjA4NjRWNjYuODQxMUM0NS4wNzM0IDY2LjQzNDggNDQuOTU3NSA2Ni4xMDQxIDQ0LjczODggNjUuODQ4OUM0NC41MiA2NS41OTM3IDQ0LjIzMzYgNjUuNDY2MSA0My44Nzk0IDY1LjQ2NjFaTTQ4LjkzMDIgNjkuMzcyM0g0OC40NjE0VjY1LjE0NThINDguOTMwMlY2OS4zNzIzWk00OC4zNzk0IDYzLjkyMzFDNDguMzc5NCA2My44MzQ2IDQ4LjQwOCA2My43NjAzIDQ4LjQ2NTMgNjMuNzAwNEM0OC41MjI2IDYzLjYzNzkgNDguNjAwNyA2My42MDY3IDQ4LjY5OTcgNjMuNjA2N0M0OC43OTg3IDYzLjYwNjcgNDguODc2OCA2My42Mzc5IDQ4LjkzNDEgNjMuNzAwNEM0OC45OTQgNjMuNzYwMyA0OS4wMjM5IDYzLjgzNDYgNDkuMDIzOSA2My45MjMxQzQ5LjAyMzkgNjQuMDExNiA0OC45OTQgNjQuMDg1OSA0OC45MzQxIDY0LjE0NThDNDguODc2OCA2NC4yMDU2IDQ4Ljc5ODcgNjQuMjM1NiA0OC42OTk3IDY0LjIzNTZDNDguNjAwNyA2NC4yMzU2IDQ4LjUyMjYgNjQuMjA1NiA0OC40NjUzIDY0LjE0NThDNDguNDA4IDY0LjA4NTkgNDguMzc5NCA2NC4wMTE2IDQ4LjM3OTQgNjMuOTIzMVpNNTIuNzM0OSA2OC4yOTgxQzUyLjczNDkgNjguMDY2MyA1Mi42NDExIDY3Ljg4MDEgNTIuNDUzNiA2Ny43Mzk1QzUyLjI2ODcgNjcuNTk4OSA1MS45ODg4IDY3LjQ4OTUgNTEuNjEzOCA2Ny40MTE0QzUxLjIzODggNjcuMzMwNiA1MC45NDcxIDY3LjIzOTUgNTAuNzM4OCA2Ny4xMzc5QzUwLjUzMyA2Ny4wMzM4IDUwLjM3OTQgNjYuOTA3NSA1MC4yNzc4IDY2Ljc1OUM1MC4xNzg5IDY2LjYxMDYgNTAuMTI5NCA2Ni40MzA5IDUwLjEyOTQgNjYuMjJDNTAuMTI5NCA2NS44ODY2IDUwLjI2ODcgNjUuNjExOSA1MC41NDc0IDY1LjM5NThDNTAuODI2IDY1LjE3NyA1MS4xODI4IDY1LjA2NzYgNTEuNjE3NyA2NS4wNjc2QzUyLjA4OSA2NS4wNjc2IDUyLjQ2NjYgNjUuMTg0OCA1Mi43NTA1IDY1LjQxOTJDNTMuMDM2OSA2NS42NTEgNTMuMTgwMiA2NS45NTQzIDUzLjE4MDIgNjYuMzI5M0g1Mi43MTE0QzUyLjcxMTQgNjYuMDgxOSA1Mi42MDczIDY1Ljg3NjIgNTIuMzk4OSA2NS43MTIyQzUyLjE5MzIgNjUuNTQ4MSA1MS45MzI4IDY1LjQ2NjEgNTEuNjE3NyA2NS40NjYxQzUxLjMxMDQgNjUuNDY2MSA1MS4wNjMgNjUuNTM1MSA1MC44NzU1IDY1LjY3MzFDNTAuNjkwNiA2NS44MDg1IDUwLjU5ODEgNjUuOTg1NiA1MC41OTgxIDY2LjIwNDNDNTAuNTk4MSA2Ni40MTUzIDUwLjY3NSA2Ni41NzkzIDUwLjgyODYgNjYuNjk2NUM1MC45ODQ5IDY2LjgxMTEgNTEuMjY3NCA2Ni45MTY2IDUxLjY3NjMgNjcuMDEyOUM1Mi4wODc3IDY3LjEwOTMgNTIuMzk1IDY3LjIxMjIgNTIuNTk4MSA2Ny4zMjE1QzUyLjgwMzkgNjcuNDMwOSA1Mi45NTYyIDY3LjU2MjQgNTMuMDU1MiA2Ny43MTYxQzUzLjE1NDEgNjcuODY5NyA1My4yMDM2IDY4LjA1NTkgNTMuMjAzNiA2OC4yNzQ3QzUzLjIwMzYgNjguNjMxNCA1My4wNTkxIDY4LjkxNjYgNTIuNzcgNjkuMTMwMUM1Mi40ODM2IDY5LjM0MzcgNTIuMTA4NiA2OS40NTA0IDUxLjY0NSA2OS40NTA0QzUxLjE1MjggNjkuNDUwNCA1MC43NTMxIDY5LjMzMTkgNTAuNDQ1OCA2OS4wOTVDNTAuMTQxMSA2OC44NTU0IDQ5Ljk4ODggNjguNTUzMyA0OS45ODg4IDY4LjE4ODdINTAuNDU3NUM1MC40NzU3IDY4LjQ2MjIgNTAuNTkwMyA2OC42NzU3IDUwLjgwMTMgNjguODI5M0M1MS4wMTQ4IDY4Ljk4MDQgNTEuMjk2MSA2OS4wNTU5IDUxLjY0NSA2OS4wNTU5QzUxLjk3MDUgNjkuMDU1OSA1Mi4yMzM2IDY4Ljk4NDMgNTIuNDM0MSA2OC44NDExQzUyLjYzNDYgNjguNjk3OCA1Mi43MzQ5IDY4LjUxNjggNTIuNzM0OSA2OC4yOTgxWk01Ny4yMTUzIDY4LjM5OTdMNTcuMjg1NiA2OC43NjI5TDU3LjM3OTQgNjguMzgwMUw1OC4zOTUgNjUuMTQ1OEg1OC43OTM1TDU5Ljc5NzQgNjguMzUyOEw1OS45MDY3IDY4Ljc5ODFMNTkuOTk2NiA2OC4zODc5TDYwLjg2MzggNjUuMTQ1OEg2MS4zNDgxTDYwLjExNzcgNjkuMzcyM0g1OS43MTkyTDU4LjYzMzMgNjYuMDIwOEw1OC41ODI1IDY1Ljc5MDNMNTguNTMxNyA2Ni4wMjQ3TDU3LjQ2NTMgNjkuMzcyM0g1Ny4wNjY5TDU1Ljg0MDMgNjUuMTQ1OEg1Ni4zMjA4TDU3LjIxNTMgNjguMzk5N1pNNjIuNjk5NyA2NS44NjA2QzYyLjg1MzQgNjUuNjA4IDYzLjA1IDY1LjQxMjcgNjMuMjg5NiA2NS4yNzQ3QzYzLjUyOTEgNjUuMTM2NiA2My43OTA5IDY1LjA2NzYgNjQuMDc0NyA2NS4wNjc2QzY0LjUyNzggNjUuMDY3NiA2NC44NjUxIDY1LjE5NTIgNjUuMDg2NCA2NS40NTA0QzY1LjMwNzggNjUuNzA1NiA2NS40MTk4IDY2LjA4ODUgNjUuNDIyNCA2Ni41OTg5VjY5LjM3MjNINjQuOTU3NVY2Ni41OTVDNjQuOTU0OSA2Ni4yMTc0IDY0Ljg3NDIgNjUuOTM2MSA2NC43MTUzIDY1Ljc1MTJDNjQuNTU5MSA2NS41NjYzIDY0LjMwNzggNjUuNDczOSA2My45NjE0IDY1LjQ3MzlDNjMuNjcyNCA2NS40NzM5IDYzLjQxNTkgNjUuNTY1IDYzLjE5MTkgNjUuNzQ3M0M2Mi45NzA1IDY1LjkyNyA2Mi44MDY1IDY2LjE3MDUgNjIuNjk5NyA2Ni40Nzc4VjY5LjM3MjNINjIuMjM0OVY2My4zNzIzSDYyLjY5OTdWNjUuODYwNlpNNjguMjYyMiA2OS40NTA0QzY3LjkwMjggNjkuNDUwNCA2Ny41NzczIDY5LjM2MTkgNjcuMjg1NiA2OS4xODQ4QzY2Ljk5NjYgNjkuMDA3NyA2Ni43NzEzIDY4Ljc2MTYgNjYuNjA5OSA2OC40NDY1QzY2LjQ0ODQgNjguMTI4OCA2Ni4zNjc3IDY3Ljc3MzQgNjYuMzY3NyA2Ny4zODAxVjY3LjIxMjJDNjYuMzY3NyA2Ni44MDU5IDY2LjQ0NTggNjYuNDQgNjYuNjAyMSA2Ni4xMTQ1QzY2Ljc2MDkgNjUuNzg5IDY2Ljk4MSA2NS41MzM4IDY3LjI2MjIgNjUuMzQ4OUM2Ny41NDM1IDY1LjE2MTQgNjcuODQ4MSA2NS4wNjc2IDY4LjE3NjMgNjUuMDY3NkM2OC42ODkzIDY1LjA2NzYgNjkuMDk1NSA2NS4yNDM0IDY5LjM5NSA2NS41OTVDNjkuNjk3MSA2NS45NDM5IDY5Ljg0ODEgNjYuNDIxOCA2OS44NDgxIDY3LjAyODZWNjcuMjkwM0g2Ni44MzI1VjY3LjM4MDFDNjYuODMyNSA2Ny44NTkzIDY2Ljk2OTIgNjguMjU5IDY3LjI0MjcgNjguNTc5M0M2Ny41MTg3IDY4Ljg5NzEgNjcuODY1MSA2OS4wNTU5IDY4LjI4MTcgNjkuMDU1OUM2OC41MzE3IDY5LjA1NTkgNjguNzUxOCA2OS4wMTAzIDY4Ljk0MTkgNjguOTE5MkM2OS4xMzQ2IDY4LjgyOCA2OS4zMDkxIDY4LjY4MjIgNjkuNDY1MyA2OC40ODE3TDY5Ljc1ODMgNjguNzA0M0M2OS40MTQ2IDY5LjIwMTcgNjguOTE1OSA2OS40NTA0IDY4LjI2MjIgNjkuNDUwNFpNNjguMTc2MyA2NS40NjYxQzY3LjgyNDcgNjUuNDY2MSA2Ny41Mjc4IDY1LjU5NSA2Ny4yODU2IDY1Ljg1MjhDNjcuMDQ2MSA2Ni4xMTA2IDY2LjkwMDIgNjYuNDU2OSA2Ni44NDgxIDY2Ljg5MThINjkuMzgzM1Y2Ni44NDExQzY5LjM3MDMgNjYuNDM0OCA2OS4yNTQ0IDY2LjEwNDEgNjkuMDM1NiA2NS44NDg5QzY4LjgxNjkgNjUuNTkzNyA2OC41MzA0IDY1LjQ2NjEgNjguMTc2MyA2NS40NjYxWk03Mi43MTE0IDY1LjU0NDJDNzIuNjEyNSA2NS41MjYgNzIuNTA3IDY1LjUxNjggNzIuMzk1IDY1LjUxNjhDNzIuMTAzNCA2NS41MTY4IDcxLjg1NiA2NS41OTg5IDcxLjY1MjggNjUuNzYyOUM3MS40NTIzIDY1LjkyNDQgNzEuMzA5MSA2Ni4xNjAxIDcxLjIyMzEgNjYuNDdWNjkuMzcyM0g3MC43NTgzVjY1LjE0NThINzEuMjE1M0w3MS4yMjMxIDY1LjgxNzZDNzEuNDcwNSA2NS4zMTc2IDcxLjg2NzcgNjUuMDY3NiA3Mi40MTQ2IDY1LjA2NzZDNzIuNTQ0OCA2NS4wNjc2IDcyLjY0NzYgNjUuMDg0NiA3Mi43MjMxIDY1LjExODRMNzIuNzExNCA2NS41NDQyWk03NS4wMTIyIDY5LjQ1MDRDNzQuNjUyOCA2OS40NTA0IDc0LjMyNzMgNjkuMzYxOSA3NC4wMzU2IDY5LjE4NDhDNzMuNzQ2NiA2OS4wMDc3IDczLjUyMTMgNjguNzYxNiA3My4zNTk5IDY4LjQ0NjVDNzMuMTk4NCA2OC4xMjg4IDczLjExNzcgNjcuNzczNCA3My4xMTc3IDY3LjM4MDFWNjcuMjEyMkM3My4xMTc3IDY2LjgwNTkgNzMuMTk1OCA2Ni40NCA3My4zNTIxIDY2LjExNDVDNzMuNTEwOSA2NS43ODkgNzMuNzMxIDY1LjUzMzggNzQuMDEyMiA2NS4zNDg5Qzc0LjI5MzUgNjUuMTYxNCA3NC41OTgxIDY1LjA2NzYgNzQuOTI2MyA2NS4wNjc2Qzc1LjQzOTMgNjUuMDY3NiA3NS44NDU1IDY1LjI0MzQgNzYuMTQ1IDY1LjU5NUM3Ni40NDcxIDY1Ljk0MzkgNzYuNTk4MSA2Ni40MjE4IDc2LjU5ODEgNjcuMDI4NlY2Ny4yOTAzSDczLjU4MjVWNjcuMzgwMUM3My41ODI1IDY3Ljg1OTMgNzMuNzE5MiA2OC4yNTkgNzMuOTkyNyA2OC41NzkzQzc0LjI2ODcgNjguODk3MSA3NC42MTUxIDY5LjA1NTkgNzUuMDMxNyA2OS4wNTU5Qzc1LjI4MTcgNjkuMDU1OSA3NS41MDE4IDY5LjAxMDMgNzUuNjkxOSA2OC45MTkyQzc1Ljg4NDYgNjguODI4IDc2LjA1OTEgNjguNjgyMiA3Ni4yMTUzIDY4LjQ4MTdMNzYuNTA4MyA2OC43MDQzQzc2LjE2NDYgNjkuMjAxNyA3NS42NjU5IDY5LjQ1MDQgNzUuMDEyMiA2OS40NTA0Wk03NC45MjYzIDY1LjQ2NjFDNzQuNTc0NyA2NS40NjYxIDc0LjI3NzggNjUuNTk1IDc0LjAzNTYgNjUuODUyOEM3My43OTYxIDY2LjExMDYgNzMuNjUwMiA2Ni40NTY5IDczLjU5ODEgNjYuODkxOEg3Ni4xMzMzVjY2Ljg0MTFDNzYuMTIwMyA2Ni40MzQ4IDc2LjAwNDQgNjYuMTA0MSA3NS43ODU2IDY1Ljg0ODlDNzUuNTY2OSA2NS41OTM3IDc1LjI4MDQgNjUuNDY2MSA3NC45MjYzIDY1LjQ2NjFaTTgwLjc5MzUgNjguNzAwNEw4Mi4wMjc4IDY1LjE0NThIODIuNTMxN0w4MC43MjcxIDcwLjA5MTFMODAuNjMzMyA3MC4zMDk4QzgwLjQwMTUgNzAuODIyOCA4MC4wNDM1IDcxLjA3OTMgNzkuNTU5MSA3MS4wNzkzQzc5LjQ0NzEgNzEuMDc5MyA3OS4zMjczIDcxLjA2MTEgNzkuMTk5NyA3MS4wMjQ3TDc5LjE5NTggNzAuNjM3OUw3OS40MzggNzAuNjYxNEM3OS42NjcyIDcwLjY2MTQgNzkuODUyMSA3MC42MDQxIDc5Ljk5MjcgNzAuNDg5NUM4MC4xMzU5IDcwLjM3NzUgODAuMjU3IDcwLjE4MzUgODAuMzU2IDY5LjkwNzVMODAuNTYzIDY5LjMzNzJMNzguOTY5MiA2NS4xNDU4SDc5LjQ4MUw4MC43OTM1IDY4LjcwMDRaTTgyLjkzOCA2Ny4xOTY1QzgyLjkzOCA2Ni43OTAzIDgzLjAxNjEgNjYuNDI0NCA4My4xNzI0IDY2LjA5ODlDODMuMzMxMiA2NS43NzM0IDgzLjU1MzkgNjUuNTIwOCA4My44NDAzIDY1LjM0MTFDODQuMTI5NCA2NS4xNTg4IDg0LjQ1NjIgNjUuMDY3NiA4NC44MjA4IDY1LjA2NzZDODUuMzgzMyA2NS4wNjc2IDg1LjgzOSA2NS4yNjU1IDg2LjE4OCA2NS42NjE0Qzg2LjUzNjkgNjYuMDU0NiA4Ni43MTE0IDY2LjU3NjcgODYuNzExNCA2Ny4yMjc4VjY3LjMyNTRDODYuNzExNCA2Ny43MzQzIDg2LjYzMiA2OC4xMDI4IDg2LjQ3MzEgNjguNDMwOUM4Ni4zMTY5IDY4Ljc1NjQgODYuMDk1NSA2OS4wMDc3IDg1LjgwOTEgNjkuMTg0OEM4NS41MjI2IDY5LjM2MTkgODUuMTk1OCA2OS40NTA0IDg0LjgyODYgNjkuNDUwNEM4NC4yNjg3IDY5LjQ1MDQgODMuODEzIDY5LjI1MzggODMuNDYxNCA2OC44NjA2QzgzLjExMjUgNjguNDY0OCA4Mi45MzggNjcuOTQxMyA4Mi45MzggNjcuMjkwM1Y2Ny4xOTY1Wk04My40MDY3IDY3LjMyNTRDODMuNDA2NyA2Ny44MzA2IDgzLjUzNjkgNjguMjQ2IDgzLjc5NzQgNjguNTcxNUM4NC4wNjA0IDY4Ljg5NDQgODQuNDA0MSA2OS4wNTU5IDg0LjgyODYgNjkuMDU1OUM4NS4yNTA1IDY5LjA1NTkgODUuNTkxNiA2OC44OTQ0IDg1Ljg1MjEgNjguNTcxNUM4Ni4xMTUxIDY4LjI0NiA4Ni4yNDY2IDY3LjgxNzYgODYuMjQ2NiA2Ny4yODY0VjY3LjE5NjVDODYuMjQ2NiA2Ni44NzM2IDg2LjE4NjcgNjYuNTc4IDg2LjA2NjkgNjYuMzA5OEM4NS45NDcxIDY2LjA0MTYgODUuNzc5MSA2NS44MzQ2IDg1LjU2MyA2NS42ODg3Qzg1LjM0NjggNjUuNTQwMyA4NS4wOTk0IDY1LjQ2NjEgODQuODIwOCA2NS40NjYxQzg0LjQwNDEgNjUuNDY2MSA4NC4wNjQzIDY1LjYzMDEgODMuODAxMyA2NS45NTgzQzgzLjUzODIgNjYuMjgzOCA4My40MDY3IDY2LjcxMDkgODMuNDA2NyA2Ny4yMzk1VjY3LjMyNTRaTTkwLjM5ODkgNjguODM3MkM5MC4xMTc3IDY5LjI0NiA4OS42Njg1IDY5LjQ1MDQgODkuMDUxMyA2OS40NTA0Qzg4LjYwMDcgNjkuNDUwNCA4OC4yNTgzIDY5LjMyMDIgODguMDIzOSA2OS4wNTk4Qzg3Ljc4OTYgNjguNzk2OCA4Ny42Njk4IDY4LjQwODggODcuNjY0NiA2Ny44OTU4VjY1LjE0NThIODguMTI5NFY2Ny44MzcyQzg4LjEyOTQgNjguNjQxOCA4OC40NTQ5IDY5LjA0NDIgODkuMTA2IDY5LjA0NDJDODkuNzgzIDY5LjA0NDIgOTAuMjExNCA2OC43NjQyIDkwLjM5MTEgNjguMjA0M1Y2NS4xNDU4SDkwLjg1OTlWNjkuMzcyM0g5MC40MDY3TDkwLjM5ODkgNjguODM3MlpNOTYuNjkxOSA2OS4zNzIzQzk2LjY0NSA2OS4yMzk1IDk2LjYxNTEgNjkuMDQyOSA5Ni42MDIxIDY4Ljc4MjVDOTYuNDM4IDY4Ljk5NiA5Ni4yMjg0IDY5LjE2MTQgOTUuOTczMSA2OS4yNzg2Qzk1LjcyMDUgNjkuMzkzMSA5NS40NTIzIDY5LjQ1MDQgOTUuMTY4NSA2OS40NTA0Qzk0Ljc2MjIgNjkuNDUwNCA5NC40MzI4IDY5LjMzNzIgOTQuMTgwMiA2OS4xMTA2QzkzLjkzMDIgNjguODg0IDkzLjgwNTIgNjguNTk3NiA5My44MDUyIDY4LjI1MTJDOTMuODA1MiA2Ny44Mzk4IDkzLjk3NTcgNjcuNTE0MiA5NC4zMTY5IDY3LjI3NDdDOTQuNjYwNiA2Ny4wMzUxIDk1LjEzODUgNjYuOTE1MyA5NS43NTA1IDY2LjkxNTNIOTYuNTk4MVY2Ni40MzQ4Qzk2LjU5ODEgNjYuMTMyNyA5Ni41MDQ0IDY1Ljg5NTggOTYuMzE2OSA2NS43MjM5Qzk2LjEzMiA2NS41NDk0IDk1Ljg2MTIgNjUuNDYyMiA5NS41MDQ0IDY1LjQ2MjJDOTUuMTc4OSA2NS40NjIyIDk0LjkwOTMgNjUuNTQ1NSA5NC42OTU4IDY1LjcxMjJDOTQuNDgyMyA2NS44Nzg4IDk0LjM3NTUgNjYuMDc5MyA5NC4zNzU1IDY2LjMxMzdMOTMuOTA2NyA2Ni4zMDk4QzkzLjkwNjcgNjUuOTczOSA5NC4wNjMgNjUuNjgzNSA5NC4zNzU1IDY1LjQzODdDOTQuNjg4IDY1LjE5MTMgOTUuMDcyMSA2NS4wNjc2IDk1LjUyNzggNjUuMDY3NkM5NS45OTkyIDY1LjA2NzYgOTYuMzcwMyA2NS4xODYxIDk2LjY0MTEgNjUuNDIzMUM5Ni45MTQ2IDY1LjY1NzUgOTcuMDU1MiA2NS45ODU2IDk3LjA2MyA2Ni40MDc1VjY4LjQwNzVDOTcuMDYzIDY4LjgxNjMgOTcuMTA2IDY5LjEyMjMgOTcuMTkxOSA2OS4zMjU0VjY5LjM3MjNIOTYuNjkxOVpNOTUuMjIzMSA2OS4wMzY0Qzk1LjUzNTYgNjkuMDM2NCA5NS44MTQzIDY4Ljk2MDkgOTYuMDU5MSA2OC44MDk4Qzk2LjMwNjUgNjguNjU4OCA5Ni40ODYyIDY4LjQ1NjkgOTYuNTk4MSA2OC4yMDQzVjY3LjI3NDdIOTUuNzYyMkM5NS4yOTYxIDY3LjI3OTkgOTQuOTMxNSA2Ny4zNjU4IDk0LjY2ODUgNjcuNTMyNUM5NC40MDU0IDY3LjY5NjUgOTQuMjczOSA2Ny45MjMxIDk0LjI3MzkgNjguMjEyMkM5NC4yNzM5IDY4LjQ0OTEgOTQuMzYxMiA2OC42NDU4IDk0LjUzNTYgNjguODAyQzk0LjcxMjcgNjguOTU4MyA5NC45NDE5IDY5LjAzNjQgOTUuMjIzMSA2OS4wMzY0Wk0xMDAuMjY2IDY1LjU0NDJDMTAwLjE2NyA2NS41MjYgMTAwLjA2MiA2NS41MTY4IDk5Ljk0OTcgNjUuNTE2OEM5OS42NTggNjUuNTE2OCA5OS40MTA2IDY1LjU5ODkgOTkuMjA3NSA2NS43NjI5Qzk5LjAwNyA2NS45MjQ0IDk4Ljg2MzggNjYuMTYwMSA5OC43Nzc4IDY2LjQ3VjY5LjM3MjNIOTguMzEzVjY1LjE0NThIOTguNzdMOTguNzc3OCA2NS44MTc2Qzk5LjAyNTIgNjUuMzE3NiA5OS40MjI0IDY1LjA2NzYgOTkuOTY5MiA2NS4wNjc2QzEwMC4wOTkgNjUuMDY3NiAxMDAuMjAyIDY1LjA4NDYgMTAwLjI3OCA2NS4xMTg0TDEwMC4yNjYgNjUuNTQ0MlpNMTAyLjU2NyA2OS40NTA0QzEwMi4yMDggNjkuNDUwNCAxMDEuODgyIDY5LjM2MTkgMTAxLjU5IDY5LjE4NDhDMTAxLjMwMSA2OS4wMDc3IDEwMS4wNzYgNjguNzYxNiAxMDAuOTE1IDY4LjQ0NjVDMTAwLjc1MyA2OC4xMjg4IDEwMC42NzIgNjcuNzczNCAxMDAuNjcyIDY3LjM4MDFWNjcuMjEyMkMxMDAuNjcyIDY2LjgwNTkgMTAwLjc1IDY2LjQ0IDEwMC45MDcgNjYuMTE0NUMxMDEuMDY2IDY1Ljc4OSAxMDEuMjg2IDY1LjUzMzggMTAxLjU2NyA2NS4zNDg5QzEwMS44NDggNjUuMTYxNCAxMDIuMTUzIDY1LjA2NzYgMTAyLjQ4MSA2NS4wNjc2QzEwMi45OTQgNjUuMDY3NiAxMDMuNCA2NS4yNDM0IDEwMy43IDY1LjU5NUMxMDQuMDAyIDY1Ljk0MzkgMTA0LjE1MyA2Ni40MjE4IDEwNC4xNTMgNjcuMDI4NlY2Ny4yOTAzSDEwMS4xMzdWNjcuMzgwMUMxMDEuMTM3IDY3Ljg1OTMgMTAxLjI3NCA2OC4yNTkgMTAxLjU0NyA2OC41NzkzQzEwMS44MjMgNjguODk3MSAxMDIuMTcgNjkuMDU1OSAxMDIuNTg2IDY5LjA1NTlDMTAyLjgzNiA2OS4wNTU5IDEwMy4wNTYgNjkuMDEwMyAxMDMuMjQ3IDY4LjkxOTJDMTAzLjQzOSA2OC44MjggMTAzLjYxNCA2OC42ODIyIDEwMy43NyA2OC40ODE3TDEwNC4wNjMgNjguNzA0M0MxMDMuNzE5IDY5LjIwMTcgMTAzLjIyMSA2OS40NTA0IDEwMi41NjcgNjkuNDUwNFpNMTAyLjQ4MSA2NS40NjYxQzEwMi4xMjkgNjUuNDY2MSAxMDEuODMzIDY1LjU5NSAxMDEuNTkgNjUuODUyOEMxMDEuMzUxIDY2LjExMDYgMTAxLjIwNSA2Ni40NTY5IDEwMS4xNTMgNjYuODkxOEgxMDMuNjg4VjY2Ljg0MTFDMTAzLjY3NSA2Ni40MzQ4IDEwMy41NTkgNjYuMTA0MSAxMDMuMzQgNjUuODQ4OUMxMDMuMTIyIDY1LjU5MzcgMTAyLjgzNSA2NS40NjYxIDEwMi40ODEgNjUuNDY2MVpcIiBmaWxsPVwid2hpdGVcIiAvPlxuICAgICAgICA8L3N2Zz5cblxuICAgIClcbn0iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJsb2dpblwiOiBcImxvZ2luX2xvZ2luX18ySXBIWVwiLFxuXHRcInJpZ2h0Q29udGVudFwiOiBcImxvZ2luX3JpZ2h0Q29udGVudF9fM1NVZ2lcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcXVlcnlcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZHluYW1pY1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==