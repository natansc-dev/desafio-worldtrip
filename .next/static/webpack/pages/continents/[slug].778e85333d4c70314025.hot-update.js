/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/continents/[slug]",{

/***/ "./src/components/CardCountry/CardCountry.tsx":
/*!****************************************************!*\
  !*** ./src/components/CardCountry/CardCountry.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CardCountry\": function() { return /* binding */ CardCountry; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/home/nar0n/WWW/Ignite/Desafios/Desafios Complementares/desafio-worldtrip/src/components/CardCountry/CardCountry.tsx\";\n\nfunction CardCountry(_ref) {\n  var thumb = _ref.thumb,\n      image = _ref.image,\n      capital = _ref.capital,\n      country = _ref.country;\n  var countryUrl = (image !== null && image !== void 0 ? image : country).replace(/[[:blank:]]/g, '-').toLocaleLowerCase();\n  var avatarUrl = \"https://n.i.uol.com.br/licaodecasa/ensfundamental/geografia/bandeiras/\".concat(countryUrl, \".gif\");\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {\n    direction: \"column\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {\n      src: thumb,\n      alt: country,\n      w: \"256px\",\n      h: \"auto\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {\n      direction: \"row\",\n      justify: \"space-between\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {\n        direction: \"column\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n          color: 'gray.700',\n          fontSize: \"xl\",\n          fontWeight: \"600\",\n          children: capital\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n          color: 'gray.400',\n          fontSize: \"md\",\n          fontWeight: \"600\",\n          children: country\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 17\n      }, this), avatarUrl, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {\n        src: image,\n        alt: capital,\n        maxW: \"85px\",\n        maxH: \"85px\",\n        borderRadius: \"100%\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 9\n  }, this);\n}\n_c = CardCountry;\n\nvar _c;\n\n$RefreshReg$(_c, \"CardCountry\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2FyZENvdW50cnkvQ2FyZENvdW50cnkudHN4P2Q3NjQiXSwibmFtZXMiOlsiQ2FyZENvdW50cnkiLCJ0aHVtYiIsImltYWdlIiwiY2FwaXRhbCIsImNvdW50cnkiLCJjb3VudHJ5VXJsIiwicmVwbGFjZSIsInRvTG9jYWxlTG93ZXJDYXNlIiwiYXZhdGFyVXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFjTyxTQUFTQSxXQUFULE9BQTZFO0FBQUEsTUFBdERDLEtBQXNELFFBQXREQSxLQUFzRDtBQUFBLE1BQS9DQyxLQUErQyxRQUEvQ0EsS0FBK0M7QUFBQSxNQUF4Q0MsT0FBd0MsUUFBeENBLE9BQXdDO0FBQUEsTUFBL0JDLE9BQStCLFFBQS9CQSxPQUErQjtBQUNoRixNQUFNQyxVQUFVLEdBQUcsQ0FBQ0gsS0FBRCxhQUFDQSxLQUFELGNBQUNBLEtBQUQsR0FBVUUsT0FBVixFQUFtQkUsT0FBbkIsQ0FBMkIsY0FBM0IsRUFBMkMsR0FBM0MsRUFBZ0RDLGlCQUFoRCxFQUFuQjtBQUNBLE1BQU1DLFNBQVMsbUZBQzhESCxVQUQ5RCxTQUFmO0FBRUEsc0JBQ0ksOERBQUMsa0RBQUQ7QUFBTSxhQUFTLEVBQUMsUUFBaEI7QUFBQSw0QkFDSSw4REFBQyxtREFBRDtBQUFPLFNBQUcsRUFBRUosS0FBWjtBQUFtQixTQUFHLEVBQUVHLE9BQXhCO0FBQWlDLE9BQUMsRUFBQyxPQUFuQztBQUEyQyxPQUFDLEVBQUM7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUksOERBQUMsbURBQUQ7QUFBTyxlQUFTLEVBQUMsS0FBakI7QUFBdUIsYUFBTyxFQUFDLGVBQS9CO0FBQUEsOEJBQ0ksOERBQUMsa0RBQUQ7QUFBTSxpQkFBUyxFQUFDLFFBQWhCO0FBQUEsZ0NBQ0ksOERBQUMsa0RBQUQ7QUFBTSxlQUFLLEVBQUUsVUFBYjtBQUF5QixrQkFBUSxFQUFDLElBQWxDO0FBQXVDLG9CQUFVLEVBQUMsS0FBbEQ7QUFBQSxvQkFDS0Q7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBS0ksOERBQUMsa0RBQUQ7QUFBTSxlQUFLLEVBQUUsVUFBYjtBQUF5QixrQkFBUSxFQUFDLElBQWxDO0FBQXVDLG9CQUFVLEVBQUMsS0FBbEQ7QUFBQSxvQkFDS0M7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLEVBV0tJLFNBWEwsZUFZSSw4REFBQyxtREFBRDtBQUFPLFdBQUcsRUFBRU4sS0FBWjtBQUFtQixXQUFHLEVBQUVDLE9BQXhCO0FBQWlDLFlBQUksRUFBQyxNQUF0QztBQUE2QyxZQUFJLEVBQUMsTUFBbEQ7QUFBeUQsb0JBQVksRUFBQztBQUF0RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFtQkg7S0F2QmVILFciLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYXJkQ291bnRyeS9DYXJkQ291bnRyeS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIEltYWdlLFxuICAgIFRleHQsXG4gICAgU3RhY2ssXG4gICAgRmxleCxcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG4gIFxuaW50ZXJmYWNlIEl0ZW5zRmVhdHVyZXNQcm9wcyB7XG4gICAgdGh1bWI6IHN0cmluZztcbiAgICBpbWFnZTogc3RyaW5nO1xuICAgIGNhcGl0YWw6IHN0cmluZztcbiAgICBjb3VudHJ5OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDYXJkQ291bnRyeSh7IHRodW1iLCBpbWFnZSwgY2FwaXRhbCwgY291bnRyeSB9OiBJdGVuc0ZlYXR1cmVzUHJvcHMpIHtcbiAgICBjb25zdCBjb3VudHJ5VXJsID0gKGltYWdlID8/IGNvdW50cnkpLnJlcGxhY2UoL1tbOmJsYW5rOl1dL2csICctJykudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICBjb25zdCBhdmF0YXJVcmwgPVxuICAgICAgICBgaHR0cHM6Ly9uLmkudW9sLmNvbS5ici9saWNhb2RlY2FzYS9lbnNmdW5kYW1lbnRhbC9nZW9ncmFmaWEvYmFuZGVpcmFzLyR7Y291bnRyeVVybH0uZ2lmYDtcbiAgICByZXR1cm4gKFxuICAgICAgICA8RmxleCBkaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e3RodW1ifSBhbHQ9e2NvdW50cnl9IHc9XCIyNTZweFwiIGg9XCJhdXRvXCIgLz5cbiAgICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIiBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgIDxGbGV4IGRpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBjb2xvcj17J2dyYXkuNzAwJ30gZm9udFNpemU9XCJ4bFwiIGZvbnRXZWlnaHQ9XCI2MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjYXBpdGFsfVxuICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG5cbiAgICAgICAgICAgICAgICAgICAgPFRleHQgY29sb3I9eydncmF5LjQwMCd9IGZvbnRTaXplPVwibWRcIiBmb250V2VpZ2h0PVwiNjAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRyeX1cbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuXG4gICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICAgIHthdmF0YXJVcmx9XG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz17aW1hZ2V9IGFsdD17Y2FwaXRhbH0gbWF4Vz1cIjg1cHhcIiBtYXhIPVwiODVweFwiIGJvcmRlclJhZGl1cz1cIjEwMCVcIi8+XG4gICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8L0ZsZXg+XG4gICAgKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/CardCountry/CardCountry.tsx\n");

/***/ })

});