/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./Project/In/Components/InitializeGlobal.js
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var initializeMethods = function initializeMethods(methodsList) {
  var _iterator = _createForOfIteratorHelper(methodsList),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var method = _step.value;
      window[method.name] = method;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};
var initializeClass = function initializeClass(classList) {
  var _iterator2 = _createForOfIteratorHelper(classList),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var item = _step2.value;
      window[item.name] = new item();
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
};
;// CONCATENATED MODULE: ./Project/In/Components/createCSV.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var defaultSep = ";";

var createCSV = function createCSV() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    content: content,
    headers: headers,
    sep: sep
  };
  return function () {
    var _headers;

    //Ошибки
    if (!params) throw new Error("props {content, headers, sep}");
    var content = params.content;
    var sep = params.sep ? params.sep : defaultSep;
    var headers = params.headers;
    var contentType = Array.isArray(content) ? "array" : _typeof(content);

    if (headers === "template" && contentType === "array") {
      if (!(_typeof(content[0]) === "object")) {
        throw new Error("For template headers need a first object");
      }

      headers = Object.keys(content[0]);
    }

    if (headers && !Array.isArray(headers)) {
      throw new Error("The headers must be in array format");
    }

    if (!content) {
      throw new Error("Content is empty");
    }

    var fileData = "sep=".concat(sep, "\n"); //Заголовки

    if ((_headers = headers) !== null && _headers !== void 0 && _headers.length) {
      fileData += headersHandler(headers, sep);
    } //Содержание


    switch (contentType) {
      case "array":
        {
          fileData += arrayHandler(content, sep);
          break;
        }

      case "object":
        {
          fileData += objectHandler(content, sep);
          break;
        }

      default:
        {
          fileData += content + "\n";
        }
    }

    return fileData;
  }();
};

var objectHandler = function objectHandler(object) {
  var sep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSep;
  var fileData = "";

  for (var _i = 0, _Object$values = Object.values(object); _i < _Object$values.length; _i++) {
    var value = _Object$values[_i];
    //1 объект = 1 строка
    fileData += "".concat(value).concat(sep); //1 свойство = 1 столбец
  }

  return fileData + "\n";
};

var arrayHandler = function arrayHandler(array) {
  var sep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSep;
  var fileData = "";
  array.forEach(function (item) {
    //Массив объектов
    fileData += _typeof(item) === "object" ? objectHandler(item, sep) : item;
  });
  fileData += "\n";
  return fileData;
};

var headersHandler = function headersHandler(headers) {
  var sep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSep;
  return "".concat(headers.join(sep), "\n");
};

/* harmony default export */ var Components_createCSV = (createCSV);
;// CONCATENATED MODULE: ./Project/In/Components/downloadData.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var download = function download(content, fileName, fileFormat) {
  if (!content || !fileName || !fileFormat) {
    throw new Error("Need all arguments");
  }

  var data = content;

  switch (fileFormat) {
    case "txt":
      {
        data = "data:text/plain;charset=utf-8," + encodeURIComponent(content);
        break;
      }

    case "csv":
      {
        data = "data:text/plain;charset=utf-8," + encodeURIComponent(Components_createCSV(_objectSpread({}, content)));
        break;
      }
  }

  var a = document.createElement("a");
  a.style.display = "none";
  a.href = data;
  a.setAttribute("download", fileName + "." + fileFormat);
  a.click();
};

/* harmony default export */ var downloadData = (download);
;// CONCATENATED MODULE: ./Project/In/Components/sleep.js
var sleep = function sleep() {
  var sec = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.5;
  return new Promise(function (res) {
    setTimeout(function () {
      return res();
    }, sec * 1000);
  });
};

/* harmony default export */ var Components_sleep = (sleep);
;// CONCATENATED MODULE: ./Project/In/Components/copyToClipboard.js
var copyToClipboard = function copyToClipboard(string) {
  var area = document.createElement("textarea");
  document.body.appendChild(area);
  area.value = string;
  area.select();
  document.execCommand("copy");
  document.body.removeChild(area);
  console.log("\ncopied");
};

/* harmony default export */ var Components_copyToClipboard = (copyToClipboard);
;// CONCATENATED MODULE: ./Project/In/Components/localStorageUtil.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var LocalStorageUtil = /*#__PURE__*/function () {
  function LocalStorageUtil() {
    _classCallCheck(this, LocalStorageUtil);
  }

  _createClass(LocalStorageUtil, [{
    key: "get",
    value: function get() {
      var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (!key) return;

      try {
        return JSON.parse(localStorage.getItem(key));
      } catch (error) {
        console.error(error);
      }
    }
  }, {
    key: "set",
    value: function set() {
      var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var value = arguments.length > 1 ? arguments[1] : undefined;
      if (!key) return;
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, {
    key: "delete",
    value: function _delete() {
      var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (!key) return;
      localStorage.removeItem(key);
    }
  }]);

  return LocalStorageUtil;
}();

/* harmony default export */ var localStorageUtil = (LocalStorageUtil);
;// CONCATENATED MODULE: ./Project/In/Components/toBottomElement.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var toBottomElement = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var elementSelector,
        offset,
        element,
        _args2 = arguments;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            elementSelector = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : "html";
            offset = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : 0;
            element = document.querySelector(elementSelector);
            return _context2.abrupt("return", new Promise( /*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(res) {
                var actualScroll, maxScroll;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        actualScroll = 1;
                        maxScroll = 0;

                      case 2:
                        if (!(actualScroll != maxScroll)) {
                          _context.next = 10;
                          break;
                        }

                        _context.next = 5;
                        return window.sleep(0.5);

                      case 5:
                        actualScroll = element.scrollTop;
                        element.scrollTop += 9999;
                        maxScroll = element.scrollTop;
                        _context.next = 2;
                        break;

                      case 10:
                        element.scrollTop -= offset;
                        res();

                      case 12:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x) {
                return _ref2.apply(this, arguments);
              };
            }()));

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function toBottomElement() {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ var Components_toBottomElement = (toBottomElement);
;// CONCATENATED MODULE: ./Project/In/index.js






initializeClass([localStorageUtil]);
initializeMethods([Components_sleep, downloadData, Components_copyToClipboard, Components_toBottomElement]);
/******/ })()
;