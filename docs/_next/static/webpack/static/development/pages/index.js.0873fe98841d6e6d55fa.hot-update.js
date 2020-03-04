webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/home/index.js":
/*!*****************************!*\
  !*** ./pages/home/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./pages/home/style.js");
/* harmony import */ var _app_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/helpers */ "./app/helpers.js");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _repo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./repo */ "./pages/home/repo.js");
/* harmony import */ var _app_constants_sections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app/constants/sections */ "./app/constants/sections.js");

var _jsxFileName = "/Users/luismelendez/personalPage/pages/home/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var Home = function Home() {
  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_4__["default"])('/users/zedlen/repos', _app_helpers__WEBPACK_IMPORTED_MODULE_3__["github_fetcher"]),
      data = _useSWR.data,
      error = _useSWR.error;

  var repos = __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null);

  if (error) {
    repos = __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, "failed to load");
  } else {
    if (!data) {
      repos = __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, "loading...");
    } else {
      repos = __jsx(_style__WEBPACK_IMPORTED_MODULE_2__["Section"], {
        bg: "rgba(125,125,125,0.1)",
        id: 'projects',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, __jsx(_style__WEBPACK_IMPORTED_MODULE_2__["ReposHolder"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, data.map(function (repo) {
        if (repo.size && repo.description) {
          return __jsx(_repo__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
            key: repo.id
          }, repo, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            },
            __self: this
          }));
        }
      })));
    }
  }

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx(_style__WEBPACK_IMPORTED_MODULE_2__["BannerHolder"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), __jsx(_style__WEBPACK_IMPORTED_MODULE_2__["Section"], {
    id: _app_constants_sections__WEBPACK_IMPORTED_MODULE_6__["ABOUT"].id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, _app_constants_sections__WEBPACK_IMPORTED_MODULE_6__["ABOUT"].info.map(function (item, index) {
    return __jsx(_style__WEBPACK_IMPORTED_MODULE_2__["AboutItem"], {
      key: 'about' + index,
      position: index % 2 == 0 ? 'left' : 'rigth',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx(_style__WEBPACK_IMPORTED_MODULE_2__["AboutImage"], {
      image: item.image,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }), __jsx(_style__WEBPACK_IMPORTED_MODULE_2__["AboutTextHolder"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx(_style__WEBPACK_IMPORTED_MODULE_2__["AboutTitle"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, item.title), __jsx(_style__WEBPACK_IMPORTED_MODULE_2__["AboutText"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, item.body)));
  })), repos);
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.0873fe98841d6e6d55fa.hot-update.js.map