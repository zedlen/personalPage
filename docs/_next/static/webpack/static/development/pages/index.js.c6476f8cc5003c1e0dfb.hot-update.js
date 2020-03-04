webpackHotUpdate("static/development/pages/index.js",{

/***/ "./app/layouts/home/index.js":
/*!***********************************!*\
  !*** ./app/layouts/home/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./app/layouts/home/style.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers */ "./app/helpers.js");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _repo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./repo */ "./app/layouts/home/repo.js");
/* harmony import */ var _constants_sections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants/sections */ "./app/constants/sections.js");

var _jsxFileName = "/Users/luismelendez/personalPage/app/layouts/home/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var Home = function Home() {
  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_4__["default"])('/users/zedlen/repos', _helpers__WEBPACK_IMPORTED_MODULE_3__["github_fetcher"]),
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
    id: _constants_sections__WEBPACK_IMPORTED_MODULE_6__["ABOUT"].id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, _constants_sections__WEBPACK_IMPORTED_MODULE_6__["ABOUT"].info.map(function (item, index) {
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

/***/ }),

/***/ "./app/layouts/home/repo.js":
/*!**********************************!*\
  !*** ./app/layouts/home/repo.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./app/layouts/home/style.js");
var _jsxFileName = "/Users/luismelendez/personalPage/app/layouts/home/repo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Repo = function Repo(_ref) {
  var name = _ref.name,
      description = _ref.description,
      svn_url = _ref.svn_url;
  return __jsx(_style__WEBPACK_IMPORTED_MODULE_1__["RepoHolder"], {
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx(_style__WEBPACK_IMPORTED_MODULE_1__["RepoTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, name), __jsx(_style__WEBPACK_IMPORTED_MODULE_1__["RepoDescription"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, description), __jsx(_style__WEBPACK_IMPORTED_MODULE_1__["RepoLink"], {
    href: svn_url,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Ver mas"));
};

/* harmony default export */ __webpack_exports__["default"] = (Repo);

/***/ }),

/***/ "./app/layouts/home/style.js":
/*!***********************************!*\
  !*** ./app/layouts/home/style.js ***!
  \***********************************/
/*! exports provided: BannerHolder, ReposHolder, RepoHolder, RepoTitle, RepoDescription, RepoLink, AboutItem, AboutImage, AboutTextHolder, AboutTitle, AboutText, Section */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerHolder", function() { return BannerHolder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReposHolder", function() { return ReposHolder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepoHolder", function() { return RepoHolder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepoTitle", function() { return RepoTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepoDescription", function() { return RepoDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepoLink", function() { return RepoLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutItem", function() { return AboutItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutImage", function() { return AboutImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutTextHolder", function() { return AboutTextHolder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutTitle", function() { return AboutTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutText", function() { return AboutText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return Section; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var BannerHolder = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "style__BannerHolder",
  componentId: "vc83p3-0"
})(["width:100%;height:400px;background-image:url('/static/images/background.png');background-repeat:no-repeat;background-position:center;background-size:cover;"]);
var ReposHolder = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "style__ReposHolder",
  componentId: "vc83p3-1"
})(["width:100%;flex-direction:row;width:100%;display:grid;grid-template-columns:repeat(12,1fr);"]);
var RepoHolder = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "style__RepoHolder",
  componentId: "vc83p3-2"
})(["display:table-cell;grid-column:span 4;padding:10px;position:relative;padding:15px;border:1px solid ", ";margin:15px;border-radius:5px;background:#fafafa;box-shadow:4px 4px  15px rgba(0,0,0,0.25);"], function (_ref) {
  var theme = _ref.theme;
  return theme.colors.lightPrimary;
});
var RepoTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h3.withConfig({
  displayName: "style__RepoTitle",
  componentId: "vc83p3-3"
})(["color:", ";"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.strongPrimary;
});
var RepoDescription = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p.withConfig({
  displayName: "style__RepoDescription",
  componentId: "vc83p3-4"
})(["color:", ";"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.lightPrimary;
});
var RepoLink = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].a.withConfig({
  displayName: "style__RepoLink",
  componentId: "vc83p3-5"
})(["color:", ";"], function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.lightPrimary;
});
var AboutItem = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "style__AboutItem",
  componentId: "vc83p3-6"
})(["display:flex;flex-direction:", ";background:", ";margin:10px;"], function (_ref5) {
  var position = _ref5.position;
  return position == "left" ? "row" : "row-reverse";
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.colors.lightPrimary;
});
var AboutImage = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "style__AboutImage",
  componentId: "vc83p3-7"
})(["flex:1;background-image:url(", ");background-size:cover;background-repeat:no-repeat;background-position:center;"], function (_ref7) {
  var image = _ref7.image;
  return image ? image : "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png";
});
var AboutTextHolder = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "style__AboutTextHolder",
  componentId: "vc83p3-8"
})(["flex:2;padding:1.5em 3em;margin:0;"]);
var AboutTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h1.withConfig({
  displayName: "style__AboutTitle",
  componentId: "vc83p3-9"
})(["text-align:center;padding:2px 10px;color:", ";"], function (_ref8) {
  var theme = _ref8.theme;
  return theme.colors.primaryContrast;
});
var AboutText = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p.withConfig({
  displayName: "style__AboutText",
  componentId: "vc83p3-10"
})(["text-align:justify;padding:5px 10px;color:", ";"], function (_ref9) {
  var theme = _ref9.theme;
  return theme.colors.primaryContrast;
});
var Section = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "style__Section",
  componentId: "vc83p3-11"
})(["padding:5em 1em;background-color:", ";"], function (_ref10) {
  var bg = _ref10.bg;
  return bg ? bg : '#fff';
});

/***/ }),

/***/ "./pages/home/index.js":
false,

/***/ "./pages/home/repo.js":
false,

/***/ "./pages/home/style.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_layouts_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/layouts/home */ "./app/layouts/home/index.js");
var _jsxFileName = "/Users/luismelendez/personalPage/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Index = function Index() {
  return __jsx(_app_layouts_home__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.c6476f8cc5003c1e0dfb.hot-update.js.map