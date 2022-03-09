"use strict";
(self["webpackChunkcivil"] = self["webpackChunkcivil"] || []).push([["dashboard"],{

/***/ "./src/pages/CommonComponents/ProgressBar/Index.jsx":
/*!**********************************************************!*\
  !*** ./src/pages/CommonComponents/ProgressBar/Index.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Style_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Style/index */ "./src/pages/CommonComponents/ProgressBar/Style/index.js");



var ProgressBar = function ProgressBar(_ref) {
  var value = _ref.value,
      maxValue = _ref.maxValue;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Style_index__WEBPACK_IMPORTED_MODULE_1__.ProgressBarContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Style_index__WEBPACK_IMPORTED_MODULE_1__.ProgressValue, {
    ratio: value / maxValue
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProgressBar);

/***/ }),

/***/ "./src/pages/CommonComponents/ProgressBar/Style/index.js":
/*!***************************************************************!*\
  !*** ./src/pages/CommonComponents/ProgressBar/Style/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgressBarContainer": () => (/* binding */ ProgressBarContainer),
/* harmony export */   "ProgressValue": () => (/* binding */ ProgressValue)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject, _templateObject2, _templateObject3;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var load = function load(ratio) {
  return (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  0% { max-width: 0; }\n  100% { max-width: ", "%; }\n"])), ratio * 100);
};

var ProgressBarContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])('div')(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([" \n  background: white;\n  border: 1px solid black;\n  justify-content: flex-start;\n  border-radius: 1em;\n  align-items: center;\n  position: relative;\n  /* padding: 0 .2em; */\n  display: flex;\n  height: 2vh;\n  width: 10vw;\n\n"])));
var ProgressValue = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])('div')(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([" \n  animation: ", " 1s ease-out normal forwards;\n  animation-delay: 1.5s;\n  border-radius: 1em;\n  background: #47DDA6;\n  height: 1.8vh;\n  width: 10vw;\n  max-width: 0;\n"])), function (props) {
  return load(props.ratio);
});

/***/ }),

/***/ "./src/pages/Dashboard/Index.jsx":
/*!***************************************!*\
  !*** ./src/pages/Dashboard/Index.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _clerk_clerk_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @clerk/clerk-react */ "./node_modules/@clerk/clerk-react/dist/index.js");
/* harmony import */ var _clerk_clerk_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_clerk_clerk_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Style */ "./src/pages/Dashboard/Style/index.js");
/* harmony import */ var _redux_actions_session_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/actions/session/index */ "./src/redux/actions/session/index.js");
/* harmony import */ var _hooks_redux_useBindDispatch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/redux/useBindDispatch */ "./src/pages/hooks/redux/useBindDispatch.js");
/* harmony import */ var _components_Header_Index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Header/Index */ "./src/pages/Dashboard/components/Header/Index.jsx");
/* harmony import */ var _CommonComponents_Line__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../CommonComponents/Line */ "./src/pages/CommonComponents/Line/index.js");
/* harmony import */ var _components_BioForm_Index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/BioForm/Index */ "./src/pages/Dashboard/components/BioForm/Index.jsx");










var Dashboard = function Dashboard() {
  var _useBindDispatch = (0,_hooks_redux_useBindDispatch__WEBPACK_IMPORTED_MODULE_5__["default"])(_redux_actions_session_index__WEBPACK_IMPORTED_MODULE_4__["default"]),
      getCurrentUser = _useBindDispatch.getCurrentUser;

  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (s) {
    return s.session.currentUser;
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (user) getCurrentUser(user === null || user === void 0 ? void 0 : user.id);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "Loading...")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Style__WEBPACK_IMPORTED_MODULE_3__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Header_Index__WEBPACK_IMPORTED_MODULE_6__["default"], {
    user: user
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CommonComponents_Line__WEBPACK_IMPORTED_MODULE_7__.Line, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_clerk_clerk_react__WEBPACK_IMPORTED_MODULE_2__.UserProfile, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_BioForm_Index__WEBPACK_IMPORTED_MODULE_8__["default"], null)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashboard);

/***/ }),

/***/ "./src/pages/Dashboard/Style/index.js":
/*!********************************************!*\
  !*** ./src/pages/Dashboard/Style/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Label": () => (/* binding */ Label),
/* harmony export */   "UploadInput": () => (/* binding */ UploadInput),
/* harmony export */   "Container": () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject, _templateObject2, _templateObject3;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

 // import { FiUser } from 'react-icons/fi'

var Label = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])('label')(_templateObject || (_templateObject = _taggedTemplateLiteral([" \n  background-image: url('https://civil-dev.s3.us-west-1.amazonaws.com/profile_images/64_1.png');\n  background-size: cover;\n  height: 4em;\n  width: 4em;\n  border-radius: 50%;\n  cursor: pointer;\n"])));
var UploadInput = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])('input')(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([" \n  position: absolute; \n  left: -99999rem;\n"]))); // export const UploadIcon = styled(FiUser)`
//   background-color: gray;
//   border-radius: 50%;
//   cursor: pointer;
// `

var Container = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])('div')(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([" \n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin: 1em;\n"])));

/***/ }),

/***/ "./src/pages/Dashboard/components/BioForm/Index.jsx":
/*!**********************************************************!*\
  !*** ./src/pages/Dashboard/components/BioForm/Index.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _hooks_useOnSubmit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hooks/useOnSubmit */ "./src/pages/Dashboard/components/BioForm/hooks/useOnSubmit.js");
/* harmony import */ var _Style_Index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Style/Index */ "./src/pages/Dashboard/components/BioForm/Style/Index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var BioForm = function BioForm() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      bio = _useState2[0],
      setBio = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      experience = _useState4[0],
      setExperience = _useState4[1];

  var onSubmit = (0,_hooks_useOnSubmit__WEBPACK_IMPORTED_MODULE_1__["default"])(bio, experience, setBio, setExperience);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Style_Index__WEBPACK_IMPORTED_MODULE_2__.OuterContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Style_Index__WEBPACK_IMPORTED_MODULE_2__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Style_Index__WEBPACK_IMPORTED_MODULE_2__.HeaderContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Style_Index__WEBPACK_IMPORTED_MODULE_2__.Header, null, "Bio Information"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Style_Index__WEBPACK_IMPORTED_MODULE_2__.SubHeader, null, "Manage Bio and Experience Information")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    onSubmit: onSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Style_Index__WEBPACK_IMPORTED_MODULE_2__.FieldContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Style_Index__WEBPACK_IMPORTED_MODULE_2__.FieldLabel, null, "Bio"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Style_Index__WEBPACK_IMPORTED_MODULE_2__.Textarea, {
    value: bio,
    onChange: function onChange(e) {
      return setBio(e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Style_Index__WEBPACK_IMPORTED_MODULE_2__.FieldContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Style_Index__WEBPACK_IMPORTED_MODULE_2__.FieldLabel, null, "Experience"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Style_Index__WEBPACK_IMPORTED_MODULE_2__.Textarea, {
    value: experience,
    onChange: function onChange(e) {
      return setExperience(e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Style_Index__WEBPACK_IMPORTED_MODULE_2__.ButtonContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "submit"
  }, "Save Bio Information")))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BioForm);

/***/ }),

/***/ "./src/pages/Dashboard/components/BioForm/Style/Index.js":
/*!***************************************************************!*\
  !*** ./src/pages/Dashboard/components/BioForm/Style/Index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OuterContainer": () => (/* binding */ OuterContainer),
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "HeaderContainer": () => (/* binding */ HeaderContainer),
/* harmony export */   "Header": () => (/* binding */ Header),
/* harmony export */   "SubHeader": () => (/* binding */ SubHeader),
/* harmony export */   "FieldContainer": () => (/* binding */ FieldContainer),
/* harmony export */   "FieldLabel": () => (/* binding */ FieldLabel),
/* harmony export */   "Textarea": () => (/* binding */ Textarea),
/* harmony export */   "ButtonContainer": () => (/* binding */ ButtonContainer)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var OuterContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])('div')(_templateObject || (_templateObject = _taggedTemplateLiteral([" \n  width: 100%;\n  display: flex;\n  justify-content: center;\n\n"])));
var Container = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])('div')(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  padding: 3em 2em;\n  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);\n  font-family: \"Source Sans Pro\", sans-serif;;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #151515;\n  text-align: left;\n  margin-left: 300px;\n  border-radius: 0.5em;\n  width: 840px;\n"])));
var HeaderContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])('div')(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin-bottom: 1.25em;\n\n"])));
var Header = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])('h1')(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  font-size: 2rem;\n  font-weight: 600;\n  margin: 0;\n  line-height: 1.2;\n\n"])));
var SubHeader = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])('p')(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  color: #808080;\n  font-size: 1.25rem;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5em;\n  margin: 0 0 1rem 0;\n"])));
var FieldContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])('div')(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  padding-bottom: 1.5em;\n"])));
var FieldLabel = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])('div')(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral([" \n  display: flex;\n  flex: 0 0 30%;\n  margin-right: 0.5em;\n  padding-top: 1.5em;\n  line-height: 1.25em;\n  font-size: 1em;\n  font-weight: var(--clerk-label-font-weight, 600);\n\n"])));
var Textarea = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])('textarea')(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  min-height: 4vh;\n  flex: 1;\n  padding-top: 1.5em;\n  padding-bottom: 1.5em;\n  font-size: 1em;\n  line-height: 1.25em;\n\n  transition: color .2s ease-in-out,background-color .2s ease-in-out,border-color .2s ease-in-out,box-shadow .2s ease-in-out;\n  padding: calc(1em - 2px);\n  background: none;\n  border-radius: 0.5em;\n  border: 2px solid #e5e5e5;\n  color: #151515;\n  width: 100%;\n  background-color: #fff;\n\n  :focus {\n    border-color: #87C232;\n    box-shadow: none !important;\n    outline: none !important;\n    outline-offset: none !important;\n  }\n"])));
var ButtonContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])('div')(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral([" \n  display: flex;\n  justify-content: flex-end;\n  margin-top: 2em;\n  width: 100%;\n\n  button {\n    transition: color .2s ease-in-out, background-color .2s ease-in-out, border-color .2s ease-in-out, box-shadow .2s ease-in-out;\n    padding: calc(1em - 2px);\n    line-height: 1.25rem;\n    background: #87C232;\n    border-color: #87C232;    \n    border-radius: 0.5em;\n    border: 2px solid #e5e5e5;\n    color: white;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    vertical-align: middle;\n    font-family: inherit;\n    font-weight: 600;\n    font-size: 1rem;\n    margin: 0;\n    padding: 1em 2em;\n    border: 0;\n    outline: 0;\n  }\n\n"])));

/***/ }),

/***/ "./src/pages/Dashboard/components/BioForm/hooks/useOnSubmit.js":
/*!*********************************************************************!*\
  !*** ./src/pages/Dashboard/components/BioForm/hooks/useOnSubmit.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _api_v1_users_users_api_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../api/v1/users/users_api_util */ "./src/api/v1/users/users_api_util.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (bio, experience, setBio, setExperience) {
  var currentUser = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (s) {
    return s.session.currentUser;
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (e) {
    e.preventDefault();
    (0,_api_v1_users_users_api_util__WEBPACK_IMPORTED_MODULE_2__.updateUserBioInformation)(currentUser === null || currentUser === void 0 ? void 0 : currentUser.id, bio, experience);
    setBio('');
    setExperience('');
  }, [currentUser, bio, experience]);
});

/***/ }),

/***/ "./src/pages/Dashboard/components/Header/Index.jsx":
/*!*********************************************************!*\
  !*** ./src/pages/Dashboard/components/Header/Index.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _CommonComponents_ProgressBar_Index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../CommonComponents/ProgressBar/Index */ "./src/pages/CommonComponents/ProgressBar/Index.jsx");
/* harmony import */ var _hooks_useOpenModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useOpenModal */ "./src/pages/hooks/useOpenModal.js");
/* harmony import */ var _App_Modal_Index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../App/Modal/Index */ "./src/pages/App/Modal/Index.jsx");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Style */ "./src/pages/Dashboard/components/Header/Style/index.js");






var Header = function Header(_ref) {
  var user = _ref.user;
  var openModal = (0,_hooks_useOpenModal__WEBPACK_IMPORTED_MODULE_2__["default"])(_App_Modal_Index__WEBPACK_IMPORTED_MODULE_3__.ICON_FORM);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Style__WEBPACK_IMPORTED_MODULE_4__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, user === null || user === void 0 ? void 0 : user.username), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Style__WEBPACK_IMPORTED_MODULE_4__.FlexDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Style__WEBPACK_IMPORTED_MODULE_4__.UserIcon, {
    src: user === null || user === void 0 ? void 0 : user.iconSrc,
    onClick: openModal
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CommonComponents_ProgressBar_Index__WEBPACK_IMPORTED_MODULE_1__["default"], {
    value: user === null || user === void 0 ? void 0 : user.civility,
    maxValue: 20
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/pages/Dashboard/components/Header/Style/index.js":
/*!**************************************************************!*\
  !*** ./src/pages/Dashboard/components/Header/Style/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "FlexDiv": () => (/* binding */ FlexDiv),
/* harmony export */   "UserIcon": () => (/* binding */ UserIcon)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject, _templateObject2, _templateObject3;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/* eslint-disable import/prefer-default-export */

var Container = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])('header')(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  align-items: center;\n  h1 {\n    color: var(--bg-accent);\n    font-size: 1.4em;\n    font-weight: bold;\n  }\n"])));
var FlexDiv = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])('div')(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n"])));
var UserIcon = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])('img')(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["  \n  margin-right: 1vw;\n  height: 2vw;\n  width: 2vw;\n  border-radius: 50%;\n\n"])));

/***/ })

}]);
//# sourceMappingURL=dashboard.bundle.js.map