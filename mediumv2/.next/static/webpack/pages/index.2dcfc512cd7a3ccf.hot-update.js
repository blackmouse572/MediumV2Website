"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/SignInPopUp/SignInPopUp.tsx":
/*!************************************************!*\
  !*** ./components/SignInPopUp/SignInPopUp.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction SignInPopUp(param) {\n    var open = param.open, onClose = param.onClose;\n    if (!open) return null;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: onClose,\n                className: \"container-fluid bg-black bg-opacity-40 fixed top-0 right-0 left-0 bottom-0 backdrop-blur-sm\"\n            }, void 0, false, {\n                fileName: \"D:\\\\class\\\\MediumV2\\\\mediumv2\\\\components\\\\SignInPopUp\\\\SignInPopUp.tsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white space-y-5 p-5 drop-shadow-lg border-2 rounded-md fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-1/3 sm:w-1/2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-yellow-600 underline font-bold text-2xl text-center \",\n                        children: \"SIGN IN\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\class\\\\MediumV2\\\\mediumv2\\\\components\\\\SignInPopUp\\\\SignInPopUp.tsx\",\n                        lineNumber: 11,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        className: \"space-y-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"email-address\",\n                                                className: \"sr-only\",\n                                                children: \"Email address\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\class\\\\MediumV2\\\\mediumv2\\\\components\\\\SignInPopUp\\\\SignInPopUp.tsx\",\n                                                lineNumber: 15,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                id: \"email-address\",\n                                                name: \"email\",\n                                                type: \"email\",\n                                                autoComplete: \"email\",\n                                                required: true,\n                                                className: \"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm\",\n                                                placeholder: \"Email address\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\class\\\\MediumV2\\\\mediumv2\\\\components\\\\SignInPopUp\\\\SignInPopUp.tsx\",\n                                                lineNumber: 18,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\class\\\\MediumV2\\\\mediumv2\\\\components\\\\SignInPopUp\\\\SignInPopUp.tsx\",\n                                        lineNumber: 14,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"password\",\n                                                className: \"sr-only\",\n                                                children: \"Password\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\class\\\\MediumV2\\\\mediumv2\\\\components\\\\SignInPopUp\\\\SignInPopUp.tsx\",\n                                                lineNumber: 29,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                id: \"password\",\n                                                name: \"password\",\n                                                type: \"password\",\n                                                autoComplete: \"current-password\",\n                                                required: true,\n                                                className: \"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm\",\n                                                placeholder: \"Password\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\class\\\\MediumV2\\\\mediumv2\\\\components\\\\SignInPopUp\\\\SignInPopUp.tsx\",\n                                                lineNumber: 32,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\class\\\\MediumV2\\\\mediumv2\\\\components\\\\SignInPopUp\\\\SignInPopUp.tsx\",\n                                        lineNumber: 28,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\class\\\\MediumV2\\\\mediumv2\\\\components\\\\SignInPopUp\\\\SignInPopUp.tsx\",\n                                lineNumber: 13,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col md:flex-row items-center justify-between text-center space-y-2 md:space-x-10 md:space-y-0\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-center\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                id: \"remember-me\",\n                                                name: \"remember-me\",\n                                                type: \"checkbox\",\n                                                className: \"h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\class\\\\MediumV2\\\\mediumv2\\\\components\\\\SignInPopUp\\\\SignInPopUp.tsx\",\n                                                lineNumber: 45,\n                                                columnNumber: 13\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"remember-me\",\n                                                className: \"ml-2 block text-sm text-gray-900\",\n                                                children: \"Remember me\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\class\\\\MediumV2\\\\mediumv2\\\\components\\\\SignInPopUp\\\\SignInPopUp.tsx\",\n                                                lineNumber: 51,\n                                                columnNumber: 13\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\class\\\\MediumV2\\\\mediumv2\\\\components\\\\SignInPopUp\\\\SignInPopUp.tsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 11\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-sm\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"/\",\n                                            className: \"font-medium text-yellow-600 hover:text-yellow-500\",\n                                            children: \"Forgot your password?\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\class\\\\MediumV2\\\\mediumv2\\\\components\\\\SignInPopUp\\\\SignInPopUp.tsx\",\n                                            lineNumber: 57,\n                                            columnNumber: 13\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\class\\\\MediumV2\\\\mediumv2\\\\components\\\\SignInPopUp\\\\SignInPopUp.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 11\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\class\\\\MediumV2\\\\mediumv2\\\\components\\\\SignInPopUp\\\\SignInPopUp.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"submit\",\n                                        className: \"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"absolute left-0 inset-y-0 flex items-center pl-3\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\class\\\\MediumV2\\\\mediumv2\\\\components\\\\SignInPopUp\\\\SignInPopUp.tsx\",\n                                                lineNumber: 67,\n                                                columnNumber: 13\n                                            }, this),\n                                            \"Sign in\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\class\\\\MediumV2\\\\mediumv2\\\\components\\\\SignInPopUp\\\\SignInPopUp.tsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 11\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"submit\",\n                                        className: \"mt-3 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500\",\n                                        children: \"Sign in with Google\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\class\\\\MediumV2\\\\mediumv2\\\\components\\\\SignInPopUp\\\\SignInPopUp.tsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 11\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\class\\\\MediumV2\\\\mediumv2\\\\components\\\\SignInPopUp\\\\SignInPopUp.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\class\\\\MediumV2\\\\mediumv2\\\\components\\\\SignInPopUp\\\\SignInPopUp.tsx\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\class\\\\MediumV2\\\\mediumv2\\\\components\\\\SignInPopUp\\\\SignInPopUp.tsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\class\\\\MediumV2\\\\mediumv2\\\\components\\\\SignInPopUp\\\\SignInPopUp.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this));\n}\n_c = SignInPopUp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignInPopUp);\nvar _c;\n$RefreshReg$(_c, \"SignInPopUp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZ25JblBvcFVwL1NpZ25JblBvcFVwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBeUI7U0FFaEJDLFdBQVcsQ0FBQyxLQUF5RCxFQUFFLENBQUM7UUFBMURDLElBQUksR0FBTixLQUF5RCxDQUF2REEsSUFBSSxFQUFFQyxPQUFPLEdBQWYsS0FBeUQsQ0FBakRBLE9BQU87SUFDbEMsRUFBRSxHQUFHRCxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7SUFDdEIsTUFBTSw2RUFFSEUsQ0FBRzs7d0ZBQ0RBLENBQUc7Z0JBQUNDLE9BQU8sRUFBRUYsT0FBTztnQkFBRUcsU0FBUyxFQUFDLENBQTZGOzs7Ozs7d0ZBRTdIRixDQUFHO2dCQUFDRSxTQUFTLEVBQUMsQ0FBdUk7O2dHQUNuSkMsQ0FBRTt3QkFBQ0QsU0FBUyxFQUFDLENBQTJEO2tDQUFDLENBQU87Ozs7OztnR0FDaEZFLENBQUk7d0JBQUNGLFNBQVMsRUFBQyxDQUFXOzt3R0FDeEJGLENBQUc7O2dIQUNEQSxDQUFHOzt3SEFDREssQ0FBSztnREFBQ0MsT0FBTyxFQUFDLENBQWU7Z0RBQUNKLFNBQVMsRUFBQyxDQUFTOzBEQUFDLENBRW5EOzs7Ozs7d0hBQ0NLLENBQUs7Z0RBQ0pDLEVBQUUsRUFBQyxDQUFlO2dEQUNsQkMsSUFBSSxFQUFDLENBQU87Z0RBQ1pDLElBQUksRUFBQyxDQUFPO2dEQUNaQyxZQUFZLEVBQUMsQ0FBTztnREFDcEJDLFFBQVE7Z0RBQ1JWLFNBQVMsRUFBQyxDQUE0TjtnREFDdE9XLFdBQVcsRUFBQyxDQUFlOzs7Ozs7Ozs7Ozs7Z0hBRzlCYixDQUFHOzt3SEFDREssQ0FBSztnREFBQ0MsT0FBTyxFQUFDLENBQVU7Z0RBQUNKLFNBQVMsRUFBQyxDQUFTOzBEQUFDLENBRTlDOzs7Ozs7d0hBQ0NLLENBQUs7Z0RBQ0pDLEVBQUUsRUFBQyxDQUFVO2dEQUNiQyxJQUFJLEVBQUMsQ0FBVTtnREFDZkMsSUFBSSxFQUFDLENBQVU7Z0RBQ2ZDLFlBQVksRUFBQyxDQUFrQjtnREFDL0JDLFFBQVE7Z0RBQ1JWLFNBQVMsRUFBQyxDQUE0TjtnREFDdE9XLFdBQVcsRUFBQyxDQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7d0dBSTdCYixDQUFHO2dDQUFDRSxTQUFTLEVBQUMsQ0FBeUc7O2dIQUNySEYsQ0FBRzt3Q0FBQ0UsU0FBUyxFQUFDLENBQW1COzt3SEFDL0JLLENBQUs7Z0RBQ0pDLEVBQUUsRUFBQyxDQUFhO2dEQUNoQkMsSUFBSSxFQUFDLENBQWE7Z0RBQ2xCQyxJQUFJLEVBQUMsQ0FBVTtnREFDZlIsU0FBUyxFQUFDLENBQXVFOzs7Ozs7d0hBRWxGRyxDQUFLO2dEQUFDQyxPQUFPLEVBQUMsQ0FBYTtnREFBQ0osU0FBUyxFQUFDLENBQWtDOzBEQUFDLENBRTFFOzs7Ozs7Ozs7Ozs7Z0hBR0RGLENBQUc7d0NBQUNFLFNBQVMsRUFBQyxDQUFTOzhIQUNyQlksQ0FBQzs0Q0FBQ0MsSUFBSSxFQUFDLENBQUc7NENBQUNiLFNBQVMsRUFBQyxDQUFtRDtzREFBQyxDQUUxRTs7Ozs7Ozs7Ozs7Ozs7Ozs7d0dBR0hGLENBQUc7O2dIQUNEZ0IsQ0FBTTt3Q0FDTE4sSUFBSSxFQUFDLENBQVE7d0NBQ2JSLFNBQVMsRUFBQyxDQUFxTzs7d0hBRTlPZSxDQUFJO2dEQUFDZixTQUFTLEVBQUMsQ0FBa0Q7Ozs7Ozs0Q0FDM0QsQ0FFVDs7Ozs7OztnSEFDQ2MsQ0FBTTt3Q0FDTE4sSUFBSSxFQUFDLENBQVE7d0NBQ2JSLFNBQVMsRUFBQyxDQUEwTztrREFDclAsQ0FHRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVYsQ0FBQztLQWhGUUwsV0FBVztBQWtGcEIsK0RBQWVBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWduSW5Qb3BVcC9TaWduSW5Qb3BVcC50c3g/OGRhMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiBTaWduSW5Qb3BVcCh7IG9wZW4sIG9uQ2xvc2UgfTogeyBvcGVuOiBib29sZWFuLCBvbkNsb3NlOiAoKSA9PiB2b2lkIH0pIHtcclxuICBpZiAoIW9wZW4pIHJldHVybiBudWxsXHJcbiAgcmV0dXJuIChcclxuXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IG9uQ2xpY2s9e29uQ2xvc2V9IGNsYXNzTmFtZT0nY29udGFpbmVyLWZsdWlkIGJnLWJsYWNrIGJnLW9wYWNpdHktNDAgZml4ZWQgdG9wLTAgcmlnaHQtMCBsZWZ0LTAgYm90dG9tLTAgYmFja2Ryb3AtYmx1ci1zbSc+PC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYmctd2hpdGUgc3BhY2UteS01IHAtNSBkcm9wLXNoYWRvdy1sZyBib3JkZXItMiAgcm91bmRlZC1tZCBmaXhlZCB0b3AtMS8yIGxlZnQtMS8yIC10cmFuc2xhdGUteC0xLzIgLXRyYW5zbGF0ZS15LTEvMiBtZDp3LTEvMyBzbTp3LTEvMic+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC15ZWxsb3ctNjAwIHVuZGVybGluZSBmb250LWJvbGQgdGV4dC0yeGwgdGV4dC1jZW50ZXIgJz5TSUdOIElOPC9oMT5cclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9J3NwYWNlLXktNSc+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWwtYWRkcmVzc1wiIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5cclxuICAgICAgICAgICAgICAgIEVtYWlsIGFkZHJlc3NcclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgaWQ9XCJlbWFpbC1hZGRyZXNzXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFwcGVhcmFuY2Utbm9uZSByb3VuZGVkLW5vbmUgcmVsYXRpdmUgYmxvY2sgdy1mdWxsIHB4LTMgcHktMiBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHBsYWNlaG9sZGVyLWdyYXktNTAwIHRleHQtZ3JheS05MDAgcm91bmRlZC10LW1kIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLXllbGxvdy01MDAgZm9jdXM6Ym9yZGVyLXllbGxvdy01MDAgZm9jdXM6ei0xMCBzbTp0ZXh0LXNtXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWwgYWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5cclxuICAgICAgICAgICAgICAgIFBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJjdXJyZW50LXBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhcHBlYXJhbmNlLW5vbmUgcm91bmRlZC1ub25lIHJlbGF0aXZlIGJsb2NrIHctZnVsbCBweC0zIHB5LTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBwbGFjZWhvbGRlci1ncmF5LTUwMCB0ZXh0LWdyYXktOTAwIHJvdW5kZWQtYi1tZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy15ZWxsb3ctNTAwIGZvY3VzOmJvcmRlci15ZWxsb3ctNTAwIGZvY3VzOnotMTAgc206dGV4dC1zbVwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHRleHQtY2VudGVyIHNwYWNlLXktMiBtZDpzcGFjZS14LTEwIG1kOnNwYWNlLXktMFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBpZD1cInJlbWVtYmVyLW1lXCJcclxuICAgICAgICAgICAgICBuYW1lPVwicmVtZW1iZXItbWVcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC00IHctNCB0ZXh0LXllbGxvdy02MDAgZm9jdXM6cmluZy15ZWxsb3ctNTAwIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyZW1lbWJlci1tZVwiIGNsYXNzTmFtZT1cIm1sLTIgYmxvY2sgdGV4dC1zbSB0ZXh0LWdyYXktOTAwXCI+XHJcbiAgICAgICAgICAgICAgUmVtZW1iZXIgbWVcclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbVwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIHRleHQteWVsbG93LTYwMCBob3Zlcjp0ZXh0LXllbGxvdy01MDBcIj5cclxuICAgICAgICAgICAgICBGb3Jnb3QgeW91ciBwYXNzd29yZD9cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyb3VwIHJlbGF0aXZlIHctZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyIHB5LTIgcHgtNCBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IHRleHQtc20gZm9udC1tZWRpdW0gcm91bmRlZC1tZCB0ZXh0LXdoaXRlIGJnLXllbGxvdy02MDAgaG92ZXI6YmcteWVsbG93LTUwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctb2Zmc2V0LTIgZm9jdXM6cmluZy15ZWxsb3ctNTAwXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC0wIGluc2V0LXktMCBmbGV4IGl0ZW1zLWNlbnRlciBwbC0zXCI+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgU2lnbiBpblxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0zIGdyb3VwIHJlbGF0aXZlIHctZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyIHB5LTIgcHgtNCBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IHRleHQtc20gZm9udC1tZWRpdW0gcm91bmRlZC1tZCB0ZXh0LXdoaXRlIGJnLXllbGxvdy02MDAgaG92ZXI6YmcteWVsbG93LTUwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctb2Zmc2V0LTIgZm9jdXM6cmluZy15ZWxsb3ctNTAwXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgU2lnbiBpbiB3aXRoIEdvb2dsZVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbkluUG9wVXAiXSwibmFtZXMiOlsiUmVhY3QiLCJTaWduSW5Qb3BVcCIsIm9wZW4iLCJvbkNsb3NlIiwiZGl2Iiwib25DbGljayIsImNsYXNzTmFtZSIsImgxIiwiZm9ybSIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwiaWQiLCJuYW1lIiwidHlwZSIsImF1dG9Db21wbGV0ZSIsInJlcXVpcmVkIiwicGxhY2Vob2xkZXIiLCJhIiwiaHJlZiIsImJ1dHRvbiIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SignInPopUp/SignInPopUp.tsx\n");

/***/ })

});