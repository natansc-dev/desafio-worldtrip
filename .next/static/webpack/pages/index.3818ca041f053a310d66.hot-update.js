/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Slides/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Slides/index.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Slides\": function() { return /* binding */ Slides; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/swiper-react.esm.js\");\n/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/core */ \"./node_modules/swiper/swiper.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/home/nar0n/WWW/Ignite/Desafios/Desafios Complementares/desafio-worldtrip/src/components/Slides/index.tsx\";\n\n\n\n\nswiper_core__WEBPACK_IMPORTED_MODULE_2__.default.use([swiper_core__WEBPACK_IMPORTED_MODULE_2__.Navigation, swiper_core__WEBPACK_IMPORTED_MODULE_2__.Pagination, swiper_core__WEBPACK_IMPORTED_MODULE_2__.Mousewheel, swiper_core__WEBPACK_IMPORTED_MODULE_2__.Keyboard]);\nfunction Slides(_ref) {\n  var _this = this;\n\n  var continents = _ref.continents;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n    py: 12,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.VStack, {\n      spacing: 2,\n      textAlign: \"center\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n        as: \"h1\",\n        fontSize: \"4xl\",\n        lineHeight: \"4rem\",\n        children: [\"Vamos nessa?\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 23\n        }, this), \"Ent\\xE3o escolha seu continente\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Container, {\n      maxW: \"container.xl\",\n      paddingY: \"20px\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_4__.Swiper, {\n        cssMode: true,\n        navigation: true,\n        pagination: true,\n        mousewheel: true,\n        keyboard: true,\n        className: \"mySwiper\",\n        children: continents.map(function (continent) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_4__.SwiperSlide, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n              alignItems: \"center\",\n              justifyContent: \"center\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Image, {\n                src: \"\".concat(continent.image),\n                alt: \"europa\",\n                position: \"relative\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 42,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/continents/\".concat(continent.id),\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                  position: \"absolute\",\n                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n                    as: \"h1\",\n                    size: \"2xl\",\n                    color: \"white\",\n                    children: continent.title\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 45,\n                    columnNumber: 23\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n                    as: \"h2\",\n                    size: \"md\",\n                    color: \"white\",\n                    marginTop: \"2rem\",\n                    children: continent.description\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 48,\n                    columnNumber: 23\n                  }, _this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 44,\n                  columnNumber: 21\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 43,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 41,\n              columnNumber: 17\n            }, _this)\n          }, continent.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 15\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 5\n  }, this);\n}\n_c = Slides;\n\nvar _c;\n\n$RefreshReg$(_c, \"Slides\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2xpZGVzL2luZGV4LnRzeD8wYjZlIl0sIm5hbWVzIjpbIlN3aXBlckNvcmUiLCJOYXZpZ2F0aW9uIiwiUGFnaW5hdGlvbiIsIk1vdXNld2hlZWwiLCJLZXlib2FyZCIsIlNsaWRlcyIsImNvbnRpbmVudHMiLCJtYXAiLCJjb250aW5lbnQiLCJpbWFnZSIsImlkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVFBO0FBQ0E7QUFDQTtBQU1BQSxvREFBQSxDQUFlLENBQUNDLG1EQUFELEVBQVlDLG1EQUFaLEVBQXVCQyxtREFBdkIsRUFBa0NDLGlEQUFsQyxDQUFmO0FBV08sU0FBU0MsTUFBVCxPQUF5QztBQUFBOztBQUFBLE1BQXhCQyxVQUF3QixRQUF4QkEsVUFBd0I7QUFDOUMsc0JBQ0UsOERBQUMsaURBQUQ7QUFBSyxNQUFFLEVBQUUsRUFBVDtBQUFBLDRCQUNFLDhEQUFDLG9EQUFEO0FBQVEsYUFBTyxFQUFFLENBQWpCO0FBQW9CLGVBQVMsRUFBQyxRQUE5QjtBQUFBLDZCQUNFLDhEQUFDLHFEQUFEO0FBQVMsVUFBRSxFQUFDLElBQVo7QUFBaUIsZ0JBQVEsRUFBQyxLQUExQjtBQUFnQyxrQkFBVSxFQUFDLE1BQTNDO0FBQUEsZ0RBQ2M7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFNRSw4REFBQyx1REFBRDtBQUFXLFVBQUksRUFBQyxjQUFoQjtBQUErQixjQUFRLEVBQUMsTUFBeEM7QUFBQSw2QkFDRSw4REFBQyxnREFBRDtBQUFRLGVBQU8sRUFBRSxJQUFqQjtBQUF1QixrQkFBVSxFQUFFLElBQW5DO0FBQXlDLGtCQUFVLEVBQUUsSUFBckQ7QUFBMkQsa0JBQVUsRUFBRSxJQUF2RTtBQUE2RSxnQkFBUSxFQUFFLElBQXZGO0FBQTZGLGlCQUFTLEVBQUMsVUFBdkc7QUFBQSxrQkFDR0EsVUFBVSxDQUFDQyxHQUFYLENBQWUsVUFBQUMsU0FBUyxFQUFJO0FBQzNCLDhCQUNFLDhEQUFDLHFEQUFEO0FBQUEsbUNBQ0UsOERBQUMsa0RBQUQ7QUFBTSx3QkFBVSxFQUFDLFFBQWpCO0FBQTBCLDRCQUFjLEVBQUMsUUFBekM7QUFBQSxzQ0FDRSw4REFBQyxtREFBRDtBQUFPLG1CQUFHLFlBQUtBLFNBQVMsQ0FBQ0MsS0FBZixDQUFWO0FBQWtDLG1CQUFHLEVBQUMsUUFBdEM7QUFBK0Msd0JBQVEsRUFBQztBQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBRUUsOERBQUMsa0RBQUQ7QUFBTSxvQkFBSSx3QkFBaUJELFNBQVMsQ0FBQ0UsRUFBM0IsQ0FBVjtBQUFBLHVDQUNFLDhEQUFDLGlEQUFEO0FBQUssMEJBQVEsRUFBQyxVQUFkO0FBQUEsMENBQ0UsOERBQUMscURBQUQ7QUFBUyxzQkFBRSxFQUFDLElBQVo7QUFBaUIsd0JBQUksRUFBQyxLQUF0QjtBQUE0Qix5QkFBSyxFQUFDLE9BQWxDO0FBQUEsOEJBQ0dGLFNBQVMsQ0FBQ0c7QUFEYjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLGVBSUUsOERBQUMscURBQUQ7QUFBUyxzQkFBRSxFQUFDLElBQVo7QUFBaUIsd0JBQUksRUFBQyxJQUF0QjtBQUEyQix5QkFBSyxFQUFDLE9BQWpDO0FBQXlDLDZCQUFTLEVBQUMsTUFBbkQ7QUFBQSw4QkFDR0gsU0FBUyxDQUFDSTtBQURiO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixhQUFrQkosU0FBUyxDQUFDRSxFQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBaUJELFNBbEJBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWdDRDtLQWpDZUwsTSIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1NsaWRlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEJveCxcclxuICBIZWFkaW5nLFxyXG4gIFZTdGFjayxcclxuICBJbWFnZSxcclxuICBDb250YWluZXIsXHJcbiAgRmxleCxcclxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuaW1wb3J0IExpbmsgIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gXCJzd2lwZXIvcmVhY3RcIjtcclxuaW1wb3J0IFN3aXBlckNvcmUsIHtcclxuICBOYXZpZ2F0aW9uLFBhZ2luYXRpb24sTW91c2V3aGVlbCxLZXlib2FyZFxyXG59IGZyb20gJ3N3aXBlci9jb3JlJztcclxuaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvYXBpJztcclxuXHJcblN3aXBlckNvcmUudXNlKFtOYXZpZ2F0aW9uLFBhZ2luYXRpb24sTW91c2V3aGVlbCxLZXlib2FyZF0pO1xyXG5cclxuaW50ZXJmYWNlIEhvbWVQcm9wcyB7XHJcbiAgY29udGluZW50czoge1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgaW1hZ2U6IHN0cmluZztcclxuICB9W11cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNsaWRlcyh7Y29udGluZW50c306IEhvbWVQcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHB5PXsxMn0+XHJcbiAgICAgIDxWU3RhY2sgc3BhY2luZz17Mn0gdGV4dEFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgPEhlYWRpbmcgYXM9XCJoMVwiIGZvbnRTaXplPVwiNHhsXCIgbGluZUhlaWdodD1cIjRyZW1cIj5cclxuICAgICAgICAgIFZhbW9zIG5lc3NhPzxiciAvPkVudMOjbyBlc2NvbGhhIHNldSBjb250aW5lbnRlXHJcbiAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICA8L1ZTdGFjaz5cclxuICAgICAgPENvbnRhaW5lciBtYXhXPVwiY29udGFpbmVyLnhsXCIgcGFkZGluZ1k9XCIyMHB4XCI+XHJcbiAgICAgICAgPFN3aXBlciBjc3NNb2RlPXt0cnVlfSBuYXZpZ2F0aW9uPXt0cnVlfSBwYWdpbmF0aW9uPXt0cnVlfSBtb3VzZXdoZWVsPXt0cnVlfSBrZXlib2FyZD17dHJ1ZX0gY2xhc3NOYW1lPVwibXlTd2lwZXJcIj5cclxuICAgICAgICAgIHtjb250aW5lbnRzLm1hcChjb250aW5lbnQgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxTd2lwZXJTbGlkZSBrZXk9e2NvbnRpbmVudC5pZH0gPlxyXG4gICAgICAgICAgICAgICAgPEZsZXggYWxpZ25JdGVtcz1cImNlbnRlclwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2Ake2NvbnRpbmVudC5pbWFnZX1gfSBhbHQ9XCJldXJvcGFcIiBwb3NpdGlvbj1cInJlbGF0aXZlXCIvPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2NvbnRpbmVudHMvJHtjb250aW5lbnQuaWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJveCBwb3NpdGlvbj1cImFic29sdXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SGVhZGluZyBhcz1cImgxXCIgc2l6ZT1cIjJ4bFwiIGNvbG9yPVwid2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NvbnRpbmVudC50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDJcIiBzaXplPVwibWRcIiBjb2xvcj1cIndoaXRlXCIgbWFyZ2luVG9wPVwiMnJlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29udGluZW50LmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9Td2lwZXI+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Slides/index.tsx\n");

/***/ })

});