"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/post/[slug]",{

/***/ "./components/SignInPopUp/SignInPopUp.tsx":
/*!************************************************!*\
  !*** ./components/SignInPopUp/SignInPopUp.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction SignInPopUp(param) {\n    var open = param.open, onClose = param.onClose;\n    if (!open) return null;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: onClose,\n                className: \"container-fluid fixed top-0 right-0 left-0 bottom-0 backdrop-blur-sm\"\n            }, void 0, false, {\n                fileName: \"D:\\\\class\\\\MediumV2\\\\mediumv2\\\\components\\\\SignInPopUp\\\\SignInPopUp.tsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white space-y-5 p-5 drop-shadow-lg border-2 rounded-md fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-blue-600 font-bold text-2xl px-5\",\n                    children: \"Sign in\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\class\\\\MediumV2\\\\mediumv2\\\\components\\\\SignInPopUp\\\\SignInPopUp.tsx\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\class\\\\MediumV2\\\\mediumv2\\\\components\\\\SignInPopUp\\\\SignInPopUp.tsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\class\\\\MediumV2\\\\mediumv2\\\\components\\\\SignInPopUp\\\\SignInPopUp.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this));\n}\n_c = SignInPopUp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignInPopUp);\nvar _c;\n$RefreshReg$(_c, \"SignInPopUp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZ25JblBvcFVwL1NpZ25JblBvcFVwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBeUI7U0FFaEJDLFdBQVcsQ0FBQyxLQUF5RCxFQUFFLENBQUM7UUFBMURDLElBQUksR0FBTixLQUF5RCxDQUF2REEsSUFBSSxFQUFFQyxPQUFPLEdBQWYsS0FBeUQsQ0FBakRBLE9BQU87SUFDbEMsRUFBRSxHQUFHRCxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7SUFDdEIsTUFBTSw2RUFFSEUsQ0FBRzs7d0ZBQ0RBLENBQUc7Z0JBQUNDLE9BQU8sRUFBRUYsT0FBTztnQkFBRUcsU0FBUyxFQUFDLENBQXNFOzs7Ozs7d0ZBRXRHRixDQUFHO2dCQUFDRSxTQUFTLEVBQUMsQ0FBcUg7c0dBQ2pJQyxDQUFFO29CQUFDRCxTQUFTLEVBQUMsQ0FBdUM7OEJBQUMsQ0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJckUsQ0FBQztLQVpRTCxXQUFXO0FBY3BCLCtEQUFlQSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2lnbkluUG9wVXAvU2lnbkluUG9wVXAudHN4PzhkYTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZnVuY3Rpb24gU2lnbkluUG9wVXAoeyBvcGVuLCBvbkNsb3NlIH06IHsgb3BlbjogYm9vbGVhbiwgb25DbG9zZTogKCkgPT4gdm9pZCB9KSB7XHJcbiAgaWYgKCFvcGVuKSByZXR1cm4gbnVsbFxyXG4gIHJldHVybiAoXHJcblxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBvbkNsaWNrPXtvbkNsb3NlfSBjbGFzc05hbWU9J2NvbnRhaW5lci1mbHVpZCBmaXhlZCB0b3AtMCByaWdodC0wIGxlZnQtMCBib3R0b20tMCBiYWNrZHJvcC1ibHVyLXNtJz48L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdiZy13aGl0ZSBzcGFjZS15LTUgcC01IGRyb3Atc2hhZG93LWxnIGJvcmRlci0yICByb3VuZGVkLW1kIGZpeGVkIHRvcC0xLzIgbGVmdC0xLzIgLXRyYW5zbGF0ZS14LTEvMiAtdHJhbnNsYXRlLXktMS8yJz5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LWJsdWUtNjAwIGZvbnQtYm9sZCB0ZXh0LTJ4bCBweC01Jz5TaWduIGluPC9oMT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25JblBvcFVwIl0sIm5hbWVzIjpbIlJlYWN0IiwiU2lnbkluUG9wVXAiLCJvcGVuIiwib25DbG9zZSIsImRpdiIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SignInPopUp/SignInPopUp.tsx\n");

/***/ })

});