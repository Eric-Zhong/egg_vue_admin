exports.ids = [0];
exports.modules = {

/***/ "./app/vendor/Export2Zip.js":
/*!**********************************!*\
  !*** ./app/vendor/Export2Zip.js ***!
  \**********************************/
/*! exports provided: export_txt_to_zip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"export_txt_to_zip\", function() { return export_txt_to_zip; });\n/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jszip */ \"./node_modules/jszip/lib/index.js\");\n/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jszip__WEBPACK_IMPORTED_MODULE_0__);\n\n__webpack_require__(/*! script-loader!file-saver */ \"./node_modules/script-loader/index.js!./node_modules/file-saver/FileSaver.js\");\n\n\nfunction export_txt_to_zip(th, jsonData, txtName, zipName) {\n  var zip = new jszip__WEBPACK_IMPORTED_MODULE_0___default.a();\n  var txt_name = txtName || 'file';\n  var zip_name = zipName || 'file';\n  var data = jsonData;\n  var txtData = th + '\\r\\n';\n  data.forEach(function (row) {\n    var tempStr = '';\n    tempStr = row.toString();\n    txtData += tempStr + '\\r\\n';\n  });\n  zip.file(txt_name + '.txt', txtData);\n  zip.generateAsync({ type: \"blob\" }).then(function (blob) {\n    saveAs(blob, zip_name + '.zip');\n  }, function (err) {\n    alert('导出失败');\n  });\n}\n\n//# sourceURL=webpack:///./app/vendor/Export2Zip.js?");

/***/ })

};;