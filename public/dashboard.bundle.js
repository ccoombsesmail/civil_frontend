"use strict";
(self["webpackChunkcivil"] = self["webpackChunkcivil"] || []).push([["dashboard"],{

/***/ "./src/pages/CommonComponents/ProgressBar2/Index.jsx":
/*!***********************************************************!*\
  !*** ./src/pages/CommonComponents/ProgressBar2/Index.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Style_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Style/index */ "./src/pages/CommonComponents/ProgressBar2/Style/index.js");


var ProgressBar = function ProgressBar(_ref) {
  var userLevelData = _ref.userLevelData;
  var _ref2 = userLevelData || {},
    exp = _ref2.exp,
    level = _ref2.level,
    pointsForNextLevel = _ref2.pointsForNextLevel;
  var ratio = exp / pointsForNextLevel;
  console.log(exp, level, pointsForNextLevel);
  if (Number.isNaN(ratio)) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_1__.ProgressBarContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Level:", ' ', level), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_1__.InnerProgressContainer, {
    ratio: ratio * 100
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "70",
    cy: "70",
    r: "70"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "70",
    cy: "70",
    r: "70"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_1__.MiddleOfCircleContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, Number(ratio * 100).toFixed(2), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "%")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Progress Until Next Level"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "".concat(exp.toFixed(2), "/").concat(pointsForNextLevel.toFixed(2))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProgressBar);

/***/ }),

/***/ "./src/pages/CommonComponents/ProgressBar2/Style/index.js":
/*!****************************************************************!*\
  !*** ./src/pages/CommonComponents/ProgressBar2/Style/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InnerProgressContainer": () => (/* binding */ InnerProgressContainer),
/* harmony export */   "MiddleOfCircleContainer": () => (/* binding */ MiddleOfCircleContainer),
/* harmony export */   "ProgressBarContainer": () => (/* binding */ ProgressBarContainer),
/* harmony export */   "ProgressValue": () => (/* binding */ ProgressValue)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var load = function load(ratio) {
  return (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  0% { stroke-dashoffset: (440 - (440 * 1) / 100); }\n  100% { stroke-dashoffset: (440 - (440 * ", ") / 100); }\n"])), ratio);
};
var ProgressBarContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])('div')(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([" \n  background:#fff;\n  width: clamp(200px, 20vw, 100vw);\n  height: clamp(200px, 20vw, 100vw);\n  transform: scale(.9);\n  display:flex;\n  justify-content:center;\n  align-items:center;\n  position:relative;\n  flex-direction:column;\n  border-radius: .4vw;\n  /* box-shadow:0 30px 60px rgba(0,0,0,.4); */\n  transition: transform .5s;\n  > h2, h1 {\n    margin: 1vw 0;\n  }\n  :hover {\n    transform: translateY(-10px);\n    box-shadow:0 15px 35px rgba(0,0,0,.5);\n  }\n\n"])));
var InnerProgressContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])('div')(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    --m-circle-width: clamp(70px, 150px, 90vw);\n    --m-circle-height: clamp(70px, 150px, 90vw);\n\n    width: var(--m-circle-width);\n    height: var(--m-circle-height);\n    position:relative;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    svg {\n      width:var(--m-circle-width);\n      height:var(--m-circle-height);\n      position:relative;\n      circle {\n        width:var(--m-circle-width);\n        height:var(--m-circle-height);\n        fill:none;\n        stroke-width:10;\n        stroke:#000;\n        transform:translate(5px,5px);\n        stroke-dasharray:440;\n        stroke-dashoffset:440;\n        stroke-linecap:round;\n        /* animation: ", " 1s ease-out normal; */\n\n        :nth-child(1){\n          stroke-dashoffset:0;\n          stroke:#f3f3f3;\n        }\n        :nth-child(2) {\n\n          stroke-dashoffset: ", ";\n          stroke: #03a9f4;\n        }\n      }\n    }\n"])), function (props) {
  return load(props.ratio);
}, function (props) {
  return "calc(440 - (440 * ".concat(props.ratio, ") / 100)");
});
var MiddleOfCircleContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])('div')(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral([" \n    top:0;\n    left:0;\n    width:100%;\n    height:100%;\n    display:flex;\n    justify-content:center;\n    align-items:center;\n    position:absolute;\n    color:#111;\n    h2 {\n      font-size: 1.8vw;\n    span{\n      font-size:20px;\n    }\n  }\n"])));
var ProgressValue = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])('div')(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral([" \n  animation: ", " 1s ease-out normal forwards;\n  animation-delay: 1.5s;\n  border-radius: 1em;\n  background: #47DDA6;\n  height: 1.8vh;\n  width: 10vw;\n  max-width: 0;\n"])), function (props) {
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _clerk_clerk_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @clerk/clerk-react */ "./node_modules/@clerk/clerk-react/dist/index.js");
/* harmony import */ var _clerk_clerk_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_clerk_clerk_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Style */ "./src/pages/Dashboard/Style/index.js");
/* harmony import */ var _redux_actions_session_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/actions/session/index */ "./src/redux/actions/session/index.js");
/* harmony import */ var _hooks_redux_useBindDispatch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/redux/useBindDispatch */ "./src/pages/hooks/redux/useBindDispatch.js");
/* harmony import */ var _components_Header_Index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Header/Index */ "./src/pages/Dashboard/components/Header/Index.jsx");
/* harmony import */ var _CommonComponents_Line__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../CommonComponents/Line */ "./src/pages/CommonComponents/Line/index.js");
/* harmony import */ var _components_BioForm_Index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/BioForm/Index */ "./src/pages/Dashboard/components/BioForm/Index.jsx");
/* harmony import */ var _AuthFlow_components_CivicTest_Index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../AuthFlow/components/CivicTest/Index */ "./src/pages/AuthFlow/components/CivicTest/Index.jsx");








// import Button from '../CommonComponents/Button/Index'



// import BasicInformation from '../AuthFlow/components/BasicInformation/Index'
// import { INIT_DID_FORM_VALUES } from '../util/form_helpers/init_form_values'
// import useAddVcCred from '../DID/hooks/useAddVcCred'

var Dashboard = function Dashboard() {
  var _useBindDispatch = (0,_hooks_redux_useBindDispatch__WEBPACK_IMPORTED_MODULE_5__["default"])(_redux_actions_session_index__WEBPACK_IMPORTED_MODULE_4__["default"]),
    getCurrentUser = _useBindDispatch.getCurrentUser;
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (s) {
    return s.session.currentUser;
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var clerkWrapper = document.getElementsByClassName('cl-main')[0];
    if (clerkWrapper) clerkWrapper.insertBefore(document.getElementById('bio-dashboard'), null);
    if (user) getCurrentUser(user === null || user === void 0 ? void 0 : user.userId);
  }, []);
  // const addVcCred = useAddVcCred()
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Loading...")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_3__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Header_Index__WEBPACK_IMPORTED_MODULE_6__["default"], {
    user: user
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CommonComponents_Line__WEBPACK_IMPORTED_MODULE_7__.Line, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_clerk_clerk_react__WEBPACK_IMPORTED_MODULE_2__.UserProfile, {
    appearance: {
      variables: {
        fontSize: '1.2vw',
        fontSmoothing: 'antialiased',
        fontWeight: 900,
        fontFamily: 'Source Sans Pro, sans-serif'
      }
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AuthFlow_components_CivicTest_Index__WEBPACK_IMPORTED_MODULE_9__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CommonComponents_Line__WEBPACK_IMPORTED_MODULE_7__.Line, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_BioForm_Index__WEBPACK_IMPORTED_MODULE_8__["default"], {
    user: user
  })));
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
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "FormContainer": () => (/* binding */ FormContainer),
/* harmony export */   "Label": () => (/* binding */ Label),
/* harmony export */   "UploadInput": () => (/* binding */ UploadInput)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// import { FiUser } from 'react-icons/fi'

var FormContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])('div')(_templateObject || (_templateObject = _taggedTemplateLiteral([" \n  width: 70%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 3vw auto;\n\n"])));
var Label = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])('label')(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([" \n  background-image: url('https://civil-dev.s3.us-west-1.amazonaws.com/profile_images/64_1.png');\n  background-size: cover;\n  height: 4em;\n  width: 4em;\n  border-radius: 50%;\n  cursor: pointer;\n"])));
var UploadInput = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])('input')(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([" \n  position: absolute; \n  left: -99999rem;\n"])));

// export const UploadIcon = styled(FiUser)`
//   background-color: gray;
//   border-radius: 50%;
//   cursor: pointer;
// `

var Container = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])('div')(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral([" \n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  align-items: center;\n  margin: 4vw;\n\n  .cl-card {\n    width: 60vw;\n  }\n  .cl-component.cl-user-profile .cl-main {\n    margin: 3em 0 0 1em;\n}\n"])));

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _hooks_useOnSubmit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hooks/useOnSubmit */ "./src/pages/Dashboard/components/BioForm/hooks/useOnSubmit.js");
/* harmony import */ var _Style_Index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Style/Index */ "./src/pages/Dashboard/components/BioForm/Style/Index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var BioForm = function BioForm(_ref) {
  var user = _ref.user;
  var userData = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (s) {
    return s.users;
  })[user === null || user === void 0 ? void 0 : user.id];
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(userData === null || userData === void 0 ? void 0 : userData.bio),
    _useState2 = _slicedToArray(_useState, 2),
    bio = _useState2[0],
    setBio = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(userData === null || userData === void 0 ? void 0 : userData.experience),
    _useState4 = _slicedToArray(_useState3, 2),
    experience = _useState4[0],
    setExperience = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setBio(userData === null || userData === void 0 ? void 0 : userData.bio);
    setExperience(userData === null || userData === void 0 ? void 0 : userData.experience);
  }, [userData]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var clerkWrapper = document.getElementsByClassName('cl-main')[0];
    if (clerkWrapper) clerkWrapper.insertBefore(document.getElementById('bio-dashboard'), null);
  }, []);
  var onSubmit = (0,_hooks_useOnSubmit__WEBPACK_IMPORTED_MODULE_2__["default"])(bio, experience, setBio, setExperience);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style_Index__WEBPACK_IMPORTED_MODULE_3__.OuterContainer, {
    id: "bio-dashboard"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style_Index__WEBPACK_IMPORTED_MODULE_3__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style_Index__WEBPACK_IMPORTED_MODULE_3__.HeaderContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style_Index__WEBPACK_IMPORTED_MODULE_3__.Header, null, "Bio Information"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style_Index__WEBPACK_IMPORTED_MODULE_3__.SubHeader, null, "Manage Bio and Experience Information")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: onSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style_Index__WEBPACK_IMPORTED_MODULE_3__.FieldContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style_Index__WEBPACK_IMPORTED_MODULE_3__.FieldLabel, null, "Bio"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style_Index__WEBPACK_IMPORTED_MODULE_3__.Textarea, {
    value: bio,
    onChange: function onChange(e) {
      return setBio(e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style_Index__WEBPACK_IMPORTED_MODULE_3__.FieldContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style_Index__WEBPACK_IMPORTED_MODULE_3__.FieldLabel, null, "Experience"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style_Index__WEBPACK_IMPORTED_MODULE_3__.Textarea, {
    value: experience,
    onChange: function onChange(e) {
      return setExperience(e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style_Index__WEBPACK_IMPORTED_MODULE_3__.ButtonContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
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
/* harmony export */   "ButtonContainer": () => (/* binding */ ButtonContainer),
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "FieldContainer": () => (/* binding */ FieldContainer),
/* harmony export */   "FieldLabel": () => (/* binding */ FieldLabel),
/* harmony export */   "Header": () => (/* binding */ Header),
/* harmony export */   "HeaderContainer": () => (/* binding */ HeaderContainer),
/* harmony export */   "OuterContainer": () => (/* binding */ OuterContainer),
/* harmony export */   "SubHeader": () => (/* binding */ SubHeader),
/* harmony export */   "Textarea": () => (/* binding */ Textarea)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var OuterContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])('div')(_templateObject || (_templateObject = _taggedTemplateLiteral([" \n  width: 100%;\n  display: flex;\n  justify-content: center;\n\n"])));
var Container = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])('div')(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 60vw;\n  padding: 3em 2em;\n  /* box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2); */\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 24px 48px;\n  font-family: \"Source Sans Pro\", sans-serif;;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #151515;\n  text-align: left;\n  border-radius: 1rem;\n  border: 1px solid transparent;\n  background-color: white;\n  /* width: 840px; */\n"])));
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _hooks_redux_useBindDispatch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../hooks/redux/useBindDispatch */ "./src/pages/hooks/redux/useBindDispatch.js");
/* harmony import */ var _redux_actions_users__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../redux/actions/users */ "./src/redux/actions/users/index.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (bio, experience) {
  var currentUser = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (s) {
    return s.session.currentUser;
  });
  var _useBindDispatch = (0,_hooks_redux_useBindDispatch__WEBPACK_IMPORTED_MODULE_3__["default"])(_redux_actions_users__WEBPACK_IMPORTED_MODULE_4__["default"]),
    updateUserBioInformation = _useBindDispatch.updateUserBioInformation;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (e) {
    e.preventDefault();
    react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.promise(updateUserBioInformation(bio || null, experience || null), {
      pending: 'Saving Bio Infromation...',
      success: 'Bio Info Succefully Saved!',
      error: {
        render: function render(_ref) {
          var errorData = _ref.data;
          var response = errorData.response;
          var responseData = response.data;
          return "".concat(responseData.msg, " \uD83E\uDD2F ");
        }
      }
    });
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CommonComponents_ProgressBar2_Index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../CommonComponents/ProgressBar2/Index */ "./src/pages/CommonComponents/ProgressBar2/Index.jsx");
/* harmony import */ var _hooks_useOpenModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useOpenModal */ "./src/pages/hooks/useOpenModal.js");
/* harmony import */ var _App_Modal_Index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../App/Modal/Index */ "./src/pages/App/Modal/Index.jsx");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Style */ "./src/pages/Dashboard/components/Header/Style/index.js");





var Header = function Header(_ref) {
  var user = _ref.user;
  var openModal = (0,_hooks_useOpenModal__WEBPACK_IMPORTED_MODULE_2__["default"])(_App_Modal_Index__WEBPACK_IMPORTED_MODULE_3__.ICON_FORM);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_4__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_4__.FlexDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_4__.UserIcon, {
    src: (user === null || user === void 0 ? void 0 : user.iconSrc) || 'https://civil-dev.s3.us-west-1.amazonaws.com/profile_img_1.png',
    onClick: openModal,
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, user === null || user === void 0 ? void 0 : user.username)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CommonComponents_ProgressBar2_Index__WEBPACK_IMPORTED_MODULE_1__["default"], {
    userLevelData: user === null || user === void 0 ? void 0 : user.userLevelData
  }));
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
var FlexDiv = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])('div')(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  h1 {\n    text-align: center;\n    vertical-align: center;\n  }\n  margin-bottom: 2vw;\n\n\n"])));
var UserIcon = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])('img')(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["  \n  margin-right: 1vw;\n  height: 4vw;\n  width: 4vw;\n  border-radius: 50%;\n\n"])));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNqRCxXQUFXLEVBQUUyQixHQUFHLEVBQUVFLFVBQVUsQ0FBQyxDQUFDO0FBQ3BDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJ3QjtBQUM2QztBQUNoQjtBQUVGO0FBQ0U7QUFFdEQsSUFBTXRDLE1BQU0sR0FBRyxTQUFUQSxNQUFNLE9BQWlCO0VBQUEsSUFBWE0sSUFBSSxRQUFKQSxJQUFJO0VBQ3BCLElBQU15RCxTQUFTLEdBQUdKLCtEQUFZLENBQUNDLHVEQUFTLENBQUM7RUFDekMsb0JBQ0UsMkRBQUMsNkNBQVMscUJBQ1IsMkRBQUMsMkNBQU8scUJBQ04sMkRBQUMsNENBQVE7SUFBQyxHQUFHLEVBQUUsQ0FBQXRELElBQUksYUFBSkEsSUFBSSx1QkFBSkEsSUFBSSxDQUFFMEQsT0FBTyxLQUFJLGdFQUFpRTtJQUFDLE9BQU8sRUFBRUQsU0FBVTtJQUFDLEdBQUcsRUFBQztFQUFFLEVBQUcsZUFDL0gsdUVBQUt6RCxJQUFJLGFBQUpBLElBQUksdUJBQUpBLElBQUksQ0FBRTJELFFBQVEsQ0FBTSxDQUNqQixlQUVWLDJEQUFDLDRFQUFXO0lBQUMsYUFBYSxFQUFFM0QsSUFBSSxhQUFKQSxJQUFJLHVCQUFKQSxJQUFJLENBQUU1QjtFQUFjLEVBQUcsQ0FDekM7QUFFaEIsQ0FBQztBQUVELGlFQUFlc0IsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCckI7QUFDc0M7QUFFL0IsSUFBTUgsU0FBUyxHQUFHVCw2REFBTSxDQUFDLFFBQVEsQ0FBQyx1UEFVeEM7QUFFTSxJQUFNeUUsT0FBTyxHQUFHekUsNkRBQU0sQ0FBQyxLQUFLLENBQUMsNk9BV25DO0FBRU0sSUFBTTBFLFFBQVEsR0FBRzFFLDZEQUFNLENBQUMsS0FBSyxDQUFDLHlKQU1wQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL0NvbW1vbkNvbXBvbmVudHMvUHJvZ3Jlc3NCYXIyL0luZGV4LmpzeCIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9Db21tb25Db21wb25lbnRzL1Byb2dyZXNzQmFyMi9TdHlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9EYXNoYm9hcmQvSW5kZXguanN4Iiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL0Rhc2hib2FyZC9TdHlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9EYXNoYm9hcmQvY29tcG9uZW50cy9CaW9Gb3JtL0luZGV4LmpzeCIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9EYXNoYm9hcmQvY29tcG9uZW50cy9CaW9Gb3JtL1N0eWxlL0luZGV4LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL0Rhc2hib2FyZC9jb21wb25lbnRzL0Jpb0Zvcm0vaG9va3MvdXNlT25TdWJtaXQuanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvRGFzaGJvYXJkL2NvbXBvbmVudHMvSGVhZGVyL0luZGV4LmpzeCIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9EYXNoYm9hcmQvY29tcG9uZW50cy9IZWFkZXIvU3R5bGUvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyBQcm9ncmVzc0JhckNvbnRhaW5lciwgSW5uZXJQcm9ncmVzc0NvbnRhaW5lciwgTWlkZGxlT2ZDaXJjbGVDb250YWluZXIgfSBmcm9tICcuL1N0eWxlL2luZGV4J1xuXG5jb25zdCBQcm9ncmVzc0JhciA9ICh7IHVzZXJMZXZlbERhdGEgfSkgPT4ge1xuICBjb25zdCB7IGV4cCwgbGV2ZWwsIHBvaW50c0Zvck5leHRMZXZlbCB9ID0gdXNlckxldmVsRGF0YSB8fCB7fVxuICBjb25zdCByYXRpbyA9IGV4cCAvIChwb2ludHNGb3JOZXh0TGV2ZWwpXG4gIGNvbnNvbGUubG9nKGV4cCwgbGV2ZWwsIHBvaW50c0Zvck5leHRMZXZlbClcbiAgaWYgKE51bWJlci5pc05hTihyYXRpbykpIHJldHVybiBudWxsXG4gIHJldHVybiAoXG4gICAgPFByb2dyZXNzQmFyQ29udGFpbmVyPlxuICAgICAgPGgxPlxuICAgICAgICBMZXZlbDpcbiAgICAgICAgeycgJ31cbiAgICAgICAge2xldmVsfVxuICAgICAgPC9oMT5cbiAgICAgIDxJbm5lclByb2dyZXNzQ29udGFpbmVyIHJhdGlvPXtyYXRpbyAqIDEwMH0+XG4gICAgICAgIDxzdmc+XG4gICAgICAgICAgPGNpcmNsZSBjeD1cIjcwXCIgY3k9XCI3MFwiIHI9XCI3MFwiIC8+XG4gICAgICAgICAgPGNpcmNsZSBjeD1cIjcwXCIgY3k9XCI3MFwiIHI9XCI3MFwiIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgICA8TWlkZGxlT2ZDaXJjbGVDb250YWluZXI+XG4gICAgICAgICAgPGgyPlxuICAgICAgICAgICAge051bWJlcihyYXRpbyAqIDEwMCkudG9GaXhlZCgyKX1cbiAgICAgICAgICAgIDxzcGFuPiU8L3NwYW4+XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgPC9NaWRkbGVPZkNpcmNsZUNvbnRhaW5lcj5cbiAgICAgIDwvSW5uZXJQcm9ncmVzc0NvbnRhaW5lcj5cbiAgICAgIDxoMj5Qcm9ncmVzcyBVbnRpbCBOZXh0IExldmVsPC9oMj5cbiAgICAgIDxoMz57YCR7ZXhwLnRvRml4ZWQoMil9LyR7KHBvaW50c0Zvck5leHRMZXZlbCkudG9GaXhlZCgyKX1gfTwvaDM+XG4gICAgPC9Qcm9ncmVzc0JhckNvbnRhaW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9ncmVzc0JhclxuIiwiaW1wb3J0IHN0eWxlZCwgeyBrZXlmcmFtZXMgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuY29uc3QgbG9hZCA9IChyYXRpbykgPT4ga2V5ZnJhbWVzYFxuICAwJSB7IHN0cm9rZS1kYXNob2Zmc2V0OiAoNDQwIC0gKDQ0MCAqIDEpIC8gMTAwKTsgfVxuICAxMDAlIHsgc3Ryb2tlLWRhc2hvZmZzZXQ6ICg0NDAgLSAoNDQwICogJHtyYXRpb30pIC8gMTAwKTsgfVxuYFxuXG5leHBvcnQgY29uc3QgUHJvZ3Jlc3NCYXJDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpYCBcbiAgYmFja2dyb3VuZDojZmZmO1xuICB3aWR0aDogY2xhbXAoMjAwcHgsIDIwdncsIDEwMHZ3KTtcbiAgaGVpZ2h0OiBjbGFtcCgyMDBweCwgMjB2dywgMTAwdncpO1xuICB0cmFuc2Zvcm06IHNjYWxlKC45KTtcbiAgZGlzcGxheTpmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xuICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG4gIGJvcmRlci1yYWRpdXM6IC40dnc7XG4gIC8qIGJveC1zaGFkb3c6MCAzMHB4IDYwcHggcmdiYSgwLDAsMCwuNCk7ICovXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNXM7XG4gID4gaDIsIGgxIHtcbiAgICBtYXJnaW46IDF2dyAwO1xuICB9XG4gIDpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbiAgICBib3gtc2hhZG93OjAgMTVweCAzNXB4IHJnYmEoMCwwLDAsLjUpO1xuICB9XG5cbmBcblxuZXhwb3J0IGNvbnN0IElubmVyUHJvZ3Jlc3NDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpYFxuICAgIC0tbS1jaXJjbGUtd2lkdGg6IGNsYW1wKDcwcHgsIDE1MHB4LCA5MHZ3KTtcbiAgICAtLW0tY2lyY2xlLWhlaWdodDogY2xhbXAoNzBweCwgMTUwcHgsIDkwdncpO1xuXG4gICAgd2lkdGg6IHZhcigtLW0tY2lyY2xlLXdpZHRoKTtcbiAgICBoZWlnaHQ6IHZhcigtLW0tY2lyY2xlLWhlaWdodCk7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBzdmcge1xuICAgICAgd2lkdGg6dmFyKC0tbS1jaXJjbGUtd2lkdGgpO1xuICAgICAgaGVpZ2h0OnZhcigtLW0tY2lyY2xlLWhlaWdodCk7XG4gICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgIGNpcmNsZSB7XG4gICAgICAgIHdpZHRoOnZhcigtLW0tY2lyY2xlLXdpZHRoKTtcbiAgICAgICAgaGVpZ2h0OnZhcigtLW0tY2lyY2xlLWhlaWdodCk7XG4gICAgICAgIGZpbGw6bm9uZTtcbiAgICAgICAgc3Ryb2tlLXdpZHRoOjEwO1xuICAgICAgICBzdHJva2U6IzAwMDtcbiAgICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZSg1cHgsNXB4KTtcbiAgICAgICAgc3Ryb2tlLWRhc2hhcnJheTo0NDA7XG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OjQ0MDtcbiAgICAgICAgc3Ryb2tlLWxpbmVjYXA6cm91bmQ7XG4gICAgICAgIC8qIGFuaW1hdGlvbjogJHsocHJvcHMpID0+IGxvYWQocHJvcHMucmF0aW8pfSAxcyBlYXNlLW91dCBub3JtYWw7ICovXG5cbiAgICAgICAgOm50aC1jaGlsZCgxKXtcbiAgICAgICAgICBzdHJva2UtZGFzaG9mZnNldDowO1xuICAgICAgICAgIHN0cm9rZTojZjNmM2YzO1xuICAgICAgICB9XG4gICAgICAgIDpudGgtY2hpbGQoMikge1xuXG4gICAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6ICR7KHByb3BzKSA9PiBgY2FsYyg0NDAgLSAoNDQwICogJHtwcm9wcy5yYXRpb30pIC8gMTAwKWB9O1xuICAgICAgICAgIHN0cm9rZTogIzAzYTlmNDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbmBcblxuZXhwb3J0IGNvbnN0IE1pZGRsZU9mQ2lyY2xlQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWAgXG4gICAgdG9wOjA7XG4gICAgbGVmdDowO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OjEwMCU7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgIGNvbG9yOiMxMTE7XG4gICAgaDIge1xuICAgICAgZm9udC1zaXplOiAxLjh2dztcbiAgICBzcGFue1xuICAgICAgZm9udC1zaXplOjIwcHg7XG4gICAgfVxuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBQcm9ncmVzc1ZhbHVlID0gc3R5bGVkKCdkaXYnKWAgXG4gIGFuaW1hdGlvbjogJHsocHJvcHMpID0+IGxvYWQocHJvcHMucmF0aW8pfSAxcyBlYXNlLW91dCBub3JtYWwgZm9yd2FyZHM7XG4gIGFuaW1hdGlvbi1kZWxheTogMS41cztcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xuICBiYWNrZ3JvdW5kOiAjNDdEREE2O1xuICBoZWlnaHQ6IDEuOHZoO1xuICB3aWR0aDogMTB2dztcbiAgbWF4LXdpZHRoOiAwO1xuYFxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgU3VzcGVuc2UgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBVc2VyUHJvZmlsZSB9IGZyb20gJ0BjbGVyay9jbGVyay1yZWFjdCdcblxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi9TdHlsZSdcbmltcG9ydCBzZXNzaW9uQWN0aW9ucyBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zL3Nlc3Npb24vaW5kZXgnXG5cbmltcG9ydCB1c2VCaW5kRGlzcGF0Y2ggZnJvbSAnLi4vaG9va3MvcmVkdXgvdXNlQmluZERpc3BhdGNoJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvSGVhZGVyL0luZGV4J1xuaW1wb3J0IHsgTGluZSB9IGZyb20gJy4uL0NvbW1vbkNvbXBvbmVudHMvTGluZSdcbi8vIGltcG9ydCBCdXR0b24gZnJvbSAnLi4vQ29tbW9uQ29tcG9uZW50cy9CdXR0b24vSW5kZXgnXG5cbmltcG9ydCBCaW9Gb3JtIGZyb20gJy4vY29tcG9uZW50cy9CaW9Gb3JtL0luZGV4J1xuaW1wb3J0IENpdmljVGVzdCBmcm9tICcuLi9BdXRoRmxvdy9jb21wb25lbnRzL0NpdmljVGVzdC9JbmRleCdcbi8vIGltcG9ydCBCYXNpY0luZm9ybWF0aW9uIGZyb20gJy4uL0F1dGhGbG93L2NvbXBvbmVudHMvQmFzaWNJbmZvcm1hdGlvbi9JbmRleCdcbi8vIGltcG9ydCB7IElOSVRfRElEX0ZPUk1fVkFMVUVTIH0gZnJvbSAnLi4vdXRpbC9mb3JtX2hlbHBlcnMvaW5pdF9mb3JtX3ZhbHVlcydcbi8vIGltcG9ydCB1c2VBZGRWY0NyZWQgZnJvbSAnLi4vRElEL2hvb2tzL3VzZUFkZFZjQ3JlZCdcblxuY29uc3QgRGFzaGJvYXJkID0gKCkgPT4ge1xuICBjb25zdCB7IGdldEN1cnJlbnRVc2VyIH0gPSB1c2VCaW5kRGlzcGF0Y2goc2Vzc2lvbkFjdGlvbnMpXG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3RvcigocykgPT4gcy5zZXNzaW9uLmN1cnJlbnRVc2VyKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGNsZXJrV3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NsLW1haW4nKVswXVxuICAgIGlmIChjbGVya1dyYXBwZXIpIGNsZXJrV3JhcHBlci5pbnNlcnRCZWZvcmUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jpby1kYXNoYm9hcmQnKSwgbnVsbClcbiAgICBpZiAodXNlcikgZ2V0Q3VycmVudFVzZXIodXNlcj8udXNlcklkKVxuICB9LCBbXSlcbiAgLy8gY29uc3QgYWRkVmNDcmVkID0gdXNlQWRkVmNDcmVkKClcbiAgcmV0dXJuIChcbiAgICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxkaXY+TG9hZGluZy4uLjwvZGl2Pn0+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8SGVhZGVyIHVzZXI9e3VzZXJ9IC8+XG4gICAgICAgIDxMaW5lIC8+XG4gICAgICAgIDxVc2VyUHJvZmlsZVxuICAgICAgICAgIGFwcGVhcmFuY2U9e3tcbiAgICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgICBmb250U2l6ZTogJzEuMnZ3JyxcbiAgICAgICAgICAgICAgZm9udFNtb290aGluZzogJ2FudGlhbGlhc2VkJyxcbiAgICAgICAgICAgICAgZm9udFdlaWdodDogOTAwLFxuICAgICAgICAgICAgICBmb250RmFtaWx5OiAnU291cmNlIFNhbnMgUHJvLCBzYW5zLXNlcmlmJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgey8qIDxGb3JtaWtcbiAgICAgICAgICBpbml0aWFsVmFsdWVzPXtJTklUX0RJRF9GT1JNX1ZBTFVFU31cbiAgICAgICAgICBvblN1Ym1pdD17KHZhbHVlcywgcGFyYW1zKSA9PiBhZGRWY0NyZWQodmFsdWVzLCBwYXJhbXMpfVxuICAgICAgICA+XG4gICAgICAgICAgeyh7IGlzU3VibWl0dGluZywgdmFsdWVzLCBzZXRGaWVsZFZhbHVlIH0pID0+IChcbiAgICAgICAgICAgIDxGb3JtQ29udGFpbmVyPlxuICAgICAgICAgICAgICA8QmFzaWNJbmZvcm1hdGlvbiBzZXRGaWVsZFZhbHVlPXtzZXRGaWVsZFZhbHVlfSAvPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgd2lkdGg9XCI0MCVcIlxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjIuNXZ3XCJcbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCJ2YXIoLS1tLWVsYXN0b3MtdGhlbWUpXCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNTdWJtaXR0aW5nfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFkZFZjQ3JlZCh2YWx1ZXMpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgVXBkYXRlIERlY2VudHJhbGl6ZWQgSWRlbnRpdHlcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0Zvcm1Db250YWluZXI+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9Gb3JtaWs+ICovfVxuICAgICAgICA8Q2l2aWNUZXN0IC8+XG4gICAgICAgIDxMaW5lIC8+XG4gICAgICAgIDxCaW9Gb3JtIHVzZXI9e3VzZXJ9IC8+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L1N1c3BlbnNlPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZFxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbi8vIGltcG9ydCB7IEZpVXNlciB9IGZyb20gJ3JlYWN0LWljb25zL2ZpJ1xuXG5leHBvcnQgY29uc3QgRm9ybUNvbnRhaW5lciA9IHN0eWxlZCgnZGl2JylgIFxuICB3aWR0aDogNzAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDN2dyBhdXRvO1xuXG5gXG5cbmV4cG9ydCBjb25zdCBMYWJlbCA9IHN0eWxlZCgnbGFiZWwnKWAgXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9jaXZpbC1kZXYuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vcHJvZmlsZV9pbWFnZXMvNjRfMS5wbmcnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgaGVpZ2h0OiA0ZW07XG4gIHdpZHRoOiA0ZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuYFxuXG5leHBvcnQgY29uc3QgVXBsb2FkSW5wdXQgPSBzdHlsZWQoJ2lucHV0JylgIFxuICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICBsZWZ0OiAtOTk5OTlyZW07XG5gXG5cbi8vIGV4cG9ydCBjb25zdCBVcGxvYWRJY29uID0gc3R5bGVkKEZpVXNlcilgXG4vLyAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gYFxuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWAgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDR2dztcblxuICAuY2wtY2FyZCB7XG4gICAgd2lkdGg6IDYwdnc7XG4gIH1cbiAgLmNsLWNvbXBvbmVudC5jbC11c2VyLXByb2ZpbGUgLmNsLW1haW4ge1xuICAgIG1hcmdpbjogM2VtIDAgMCAxZW07XG59XG5gXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB1c2VPblN1Ym1pdCBmcm9tICcuL2hvb2tzL3VzZU9uU3VibWl0J1xuXG5pbXBvcnQge1xuICBDb250YWluZXIsIE91dGVyQ29udGFpbmVyLCBIZWFkZXJDb250YWluZXIsXG4gIEhlYWRlciwgU3ViSGVhZGVyLCBGaWVsZENvbnRhaW5lcixcbiAgRmllbGRMYWJlbCwgVGV4dGFyZWEsIEJ1dHRvbkNvbnRhaW5lcixcbn0gZnJvbSAnLi9TdHlsZS9JbmRleCdcblxuY29uc3QgQmlvRm9ybSA9ICh7IHVzZXIgfSkgPT4ge1xuICBjb25zdCB1c2VyRGF0YSA9IHVzZVNlbGVjdG9yKChzKSA9PiBzLnVzZXJzKVt1c2VyPy5pZF1cbiAgY29uc3QgW2Jpbywgc2V0QmlvXSA9IHVzZVN0YXRlKHVzZXJEYXRhPy5iaW8pXG4gIGNvbnN0IFtleHBlcmllbmNlLCBzZXRFeHBlcmllbmNlXSA9IHVzZVN0YXRlKHVzZXJEYXRhPy5leHBlcmllbmNlKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0QmlvKHVzZXJEYXRhPy5iaW8pXG4gICAgc2V0RXhwZXJpZW5jZSh1c2VyRGF0YT8uZXhwZXJpZW5jZSlcbiAgfSwgW3VzZXJEYXRhXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGNsZXJrV3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NsLW1haW4nKVswXVxuICAgIGlmIChjbGVya1dyYXBwZXIpIGNsZXJrV3JhcHBlci5pbnNlcnRCZWZvcmUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jpby1kYXNoYm9hcmQnKSwgbnVsbClcbiAgfSwgW10pXG5cbiAgY29uc3Qgb25TdWJtaXQgPSB1c2VPblN1Ym1pdChiaW8sIGV4cGVyaWVuY2UsIHNldEJpbywgc2V0RXhwZXJpZW5jZSlcbiAgcmV0dXJuIChcbiAgICA8T3V0ZXJDb250YWluZXIgaWQ9XCJiaW8tZGFzaGJvYXJkXCI+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8SGVhZGVyQ29udGFpbmVyPlxuICAgICAgICAgIDxIZWFkZXI+QmlvIEluZm9ybWF0aW9uPC9IZWFkZXI+XG4gICAgICAgICAgPFN1YkhlYWRlcj5NYW5hZ2UgQmlvIGFuZCBFeHBlcmllbmNlIEluZm9ybWF0aW9uPC9TdWJIZWFkZXI+XG4gICAgICAgIDwvSGVhZGVyQ29udGFpbmVyPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxuICAgICAgICAgIDxGaWVsZENvbnRhaW5lcj5cbiAgICAgICAgICAgIDxGaWVsZExhYmVsPlxuICAgICAgICAgICAgICBCaW9cbiAgICAgICAgICAgIDwvRmllbGRMYWJlbD5cbiAgICAgICAgICAgIDxUZXh0YXJlYSB2YWx1ZT17YmlvfSBvbkNoYW5nZT17KGUpID0+IHNldEJpbyhlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgICAgPC9GaWVsZENvbnRhaW5lcj5cbiAgICAgICAgICA8RmllbGRDb250YWluZXI+XG4gICAgICAgICAgICA8RmllbGRMYWJlbD5cbiAgICAgICAgICAgICAgRXhwZXJpZW5jZVxuICAgICAgICAgICAgPC9GaWVsZExhYmVsPlxuICAgICAgICAgICAgPFRleHRhcmVhIHZhbHVlPXtleHBlcmllbmNlfSBvbkNoYW5nZT17KGUpID0+IHNldEV4cGVyaWVuY2UoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICAgIDwvRmllbGRDb250YWluZXI+XG4gICAgICAgICAgPEJ1dHRvbkNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlNhdmUgQmlvIEluZm9ybWF0aW9uPC9idXR0b24+XG4gICAgICAgICAgPC9CdXR0b25Db250YWluZXI+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvT3V0ZXJDb250YWluZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmlvRm9ybVxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IE91dGVyQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWAgXG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuYFxuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWBcbiAgd2lkdGg6IDYwdnc7XG4gIHBhZGRpbmc6IDNlbSAyZW07XG4gIC8qIGJveC1zaGFkb3c6IDBweCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTsgKi9cbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggMjRweCA0OHB4O1xuICBmb250LWZhbWlseTogXCJTb3VyY2UgU2FucyBQcm9cIiwgc2Fucy1zZXJpZjs7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICMxNTE1MTU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgLyogd2lkdGg6IDg0MHB4OyAqL1xuYFxuXG5leHBvcnQgY29uc3QgSGVhZGVyQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWBcbiAgbWFyZ2luLWJvdHRvbTogMS4yNWVtO1xuXG5gXG5cbmV4cG9ydCBjb25zdCBIZWFkZXIgPSBzdHlsZWQoJ2gxJylgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luOiAwO1xuICBsaW5lLWhlaWdodDogMS4yO1xuXG5gXG5cbmV4cG9ydCBjb25zdCBTdWJIZWFkZXIgPSBzdHlsZWQoJ3AnKWBcbiAgY29sb3I6ICM4MDgwODA7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS41ZW07XG4gIG1hcmdpbjogMCAwIDFyZW0gMDtcbmBcblxuZXhwb3J0IGNvbnN0IEZpZWxkQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWBcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctYm90dG9tOiAxLjVlbTtcbmBcblxuZXhwb3J0IGNvbnN0IEZpZWxkTGFiZWwgPSBzdHlsZWQoJ2RpdicpYCBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMCAwIDMwJTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcbiAgcGFkZGluZy10b3A6IDEuNWVtO1xuICBsaW5lLWhlaWdodDogMS4yNWVtO1xuICBmb250LXNpemU6IDFlbTtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWNsZXJrLWxhYmVsLWZvbnQtd2VpZ2h0LCA2MDApO1xuXG5gXG5cbmV4cG9ydCBjb25zdCBUZXh0YXJlYSA9IHN0eWxlZCgndGV4dGFyZWEnKWBcbiAgbWluLWhlaWdodDogNHZoO1xuICBmbGV4OiAxO1xuICBwYWRkaW5nLXRvcDogMS41ZW07XG4gIHBhZGRpbmctYm90dG9tOiAxLjVlbTtcbiAgZm9udC1zaXplOiAxZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjI1ZW07XG5cbiAgdHJhbnNpdGlvbjogY29sb3IgLjJzIGVhc2UtaW4tb3V0LGJhY2tncm91bmQtY29sb3IgLjJzIGVhc2UtaW4tb3V0LGJvcmRlci1jb2xvciAuMnMgZWFzZS1pbi1vdXQsYm94LXNoYWRvdyAuMnMgZWFzZS1pbi1vdXQ7XG4gIHBhZGRpbmc6IGNhbGMoMWVtIC0gMnB4KTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XG4gIGJvcmRlcjogMnB4IHNvbGlkICNlNWU1ZTU7XG4gIGNvbG9yOiAjMTUxNTE1O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblxuICA6Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogIzg3QzIzMjtcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICAgIG91dGxpbmUtb2Zmc2V0OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbkNvbnRhaW5lciA9IHN0eWxlZCgnZGl2JylgIFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBtYXJnaW4tdG9wOiAyZW07XG4gIHdpZHRoOiAxMDAlO1xuXG4gIGJ1dHRvbiB7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgLjJzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIC4ycyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgcGFkZGluZzogY2FsYygxZW0gLSAycHgpO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xuICAgIGJhY2tncm91bmQ6ICM4N0MyMzI7XG4gICAgYm9yZGVyLWNvbG9yOiAjODdDMjMyOyAgICBcbiAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZTVlNWU1O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDFlbSAyZW07XG4gICAgYm9yZGVyOiAwO1xuICAgIG91dGxpbmU6IDA7XG4gIH1cblxuYFxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5J1xuaW1wb3J0IHVzZUJpbmREaXNwYXRjaCBmcm9tICcuLi8uLi8uLi8uLi9ob29rcy9yZWR1eC91c2VCaW5kRGlzcGF0Y2gnXG5pbXBvcnQgdXNlckFjdGlvbnMgZnJvbSAnLi4vLi4vLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy91c2VycydcblxuZXhwb3J0IGRlZmF1bHQgKGJpbywgZXhwZXJpZW5jZSkgPT4ge1xuICBjb25zdCBjdXJyZW50VXNlciA9IHVzZVNlbGVjdG9yKChzKSA9PiBzLnNlc3Npb24uY3VycmVudFVzZXIpXG4gIGNvbnN0IHsgdXBkYXRlVXNlckJpb0luZm9ybWF0aW9uIH0gPSB1c2VCaW5kRGlzcGF0Y2godXNlckFjdGlvbnMpXG4gIHJldHVybiB1c2VDYWxsYmFjaygoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgdG9hc3QucHJvbWlzZSh1cGRhdGVVc2VyQmlvSW5mb3JtYXRpb24oYmlvIHx8IG51bGwsIGV4cGVyaWVuY2UgfHwgbnVsbCksXG4gICAgICB7XG4gICAgICAgIHBlbmRpbmc6ICdTYXZpbmcgQmlvIEluZnJvbWF0aW9uLi4uJyxcbiAgICAgICAgc3VjY2VzczogJ0JpbyBJbmZvIFN1Y2NlZnVsbHkgU2F2ZWQhJyxcbiAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICByZW5kZXIoeyBkYXRhOiBlcnJvckRhdGEgfSkge1xuICAgICAgICAgICAgY29uc3QgeyByZXNwb25zZSB9ID0gZXJyb3JEYXRhXG4gICAgICAgICAgICBjb25zdCB7IGRhdGE6IHJlc3BvbnNlRGF0YSB9ID0gcmVzcG9uc2VcbiAgICAgICAgICAgIHJldHVybiBgJHtyZXNwb25zZURhdGEubXNnfSDwn6SvIGBcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgfSwgW2N1cnJlbnRVc2VyLCBiaW8sIGV4cGVyaWVuY2VdKVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gJy4uLy4uLy4uL0NvbW1vbkNvbXBvbmVudHMvUHJvZ3Jlc3NCYXIyL0luZGV4J1xuaW1wb3J0IHVzZU9wZW5Nb2RhbCBmcm9tICcuLi8uLi8uLi9ob29rcy91c2VPcGVuTW9kYWwnXG5cbmltcG9ydCB7IElDT05fRk9STSB9IGZyb20gJy4uLy4uLy4uL0FwcC9Nb2RhbC9JbmRleCdcbmltcG9ydCB7IENvbnRhaW5lciwgRmxleERpdiwgVXNlckljb24gfSBmcm9tICcuL1N0eWxlJ1xuXG5jb25zdCBIZWFkZXIgPSAoeyB1c2VyIH0pID0+IHtcbiAgY29uc3Qgb3Blbk1vZGFsID0gdXNlT3Blbk1vZGFsKElDT05fRk9STSlcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPEZsZXhEaXY+XG4gICAgICAgIDxVc2VySWNvbiBzcmM9e3VzZXI/Lmljb25TcmMgfHwgJ2h0dHBzOi8vY2l2aWwtZGV2LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3Byb2ZpbGVfaW1nXzEucG5nJ30gb25DbGljaz17b3Blbk1vZGFsfSBhbHQ9XCJcIiAvPlxuICAgICAgICA8aDE+e3VzZXI/LnVzZXJuYW1lfTwvaDE+XG4gICAgICA8L0ZsZXhEaXY+XG5cbiAgICAgIDxQcm9ncmVzc0JhciB1c2VyTGV2ZWxEYXRhPXt1c2VyPy51c2VyTGV2ZWxEYXRhfSAvPlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZCgnaGVhZGVyJylgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtZ3JvdzogMTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaDEge1xuICAgIGNvbG9yOiB2YXIoLS1iZy1hY2NlbnQpO1xuICAgIGZvbnQtc2l6ZTogMS40ZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IEZsZXhEaXYgPSBzdHlsZWQoJ2RpdicpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaDEge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xuICB9XG4gIG1hcmdpbi1ib3R0b206IDJ2dztcblxuXG5gXG5cbmV4cG9ydCBjb25zdCBVc2VySWNvbiA9IHN0eWxlZCgnaW1nJylgICBcbiAgbWFyZ2luLXJpZ2h0OiAxdnc7XG4gIGhlaWdodDogNHZ3O1xuICB3aWR0aDogNHZ3O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG5cbmBcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb2dyZXNzQmFyQ29udGFpbmVyIiwiSW5uZXJQcm9ncmVzc0NvbnRhaW5lciIsIk1pZGRsZU9mQ2lyY2xlQ29udGFpbmVyIiwiUHJvZ3Jlc3NCYXIiLCJ1c2VyTGV2ZWxEYXRhIiwiZXhwIiwibGV2ZWwiLCJwb2ludHNGb3JOZXh0TGV2ZWwiLCJyYXRpbyIsImNvbnNvbGUiLCJsb2ciLCJOdW1iZXIiLCJpc05hTiIsInRvRml4ZWQiLCJzdHlsZWQiLCJrZXlmcmFtZXMiLCJsb2FkIiwicHJvcHMiLCJQcm9ncmVzc1ZhbHVlIiwidXNlRWZmZWN0IiwiU3VzcGVuc2UiLCJ1c2VTZWxlY3RvciIsIlVzZXJQcm9maWxlIiwiQ29udGFpbmVyIiwic2Vzc2lvbkFjdGlvbnMiLCJ1c2VCaW5kRGlzcGF0Y2giLCJIZWFkZXIiLCJMaW5lIiwiQmlvRm9ybSIsIkNpdmljVGVzdCIsIkRhc2hib2FyZCIsImdldEN1cnJlbnRVc2VyIiwidXNlciIsInMiLCJzZXNzaW9uIiwiY3VycmVudFVzZXIiLCJjbGVya1dyYXBwZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJpbnNlcnRCZWZvcmUiLCJnZXRFbGVtZW50QnlJZCIsInVzZXJJZCIsInZhcmlhYmxlcyIsImZvbnRTaXplIiwiZm9udFNtb290aGluZyIsImZvbnRXZWlnaHQiLCJmb250RmFtaWx5IiwiRm9ybUNvbnRhaW5lciIsIkxhYmVsIiwiVXBsb2FkSW5wdXQiLCJ1c2VTdGF0ZSIsInVzZU9uU3VibWl0IiwiT3V0ZXJDb250YWluZXIiLCJIZWFkZXJDb250YWluZXIiLCJTdWJIZWFkZXIiLCJGaWVsZENvbnRhaW5lciIsIkZpZWxkTGFiZWwiLCJUZXh0YXJlYSIsIkJ1dHRvbkNvbnRhaW5lciIsInVzZXJEYXRhIiwidXNlcnMiLCJpZCIsImJpbyIsInNldEJpbyIsImV4cGVyaWVuY2UiLCJzZXRFeHBlcmllbmNlIiwib25TdWJtaXQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ1c2VDYWxsYmFjayIsInRvYXN0IiwidXNlckFjdGlvbnMiLCJ1cGRhdGVVc2VyQmlvSW5mb3JtYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsInByb21pc2UiLCJwZW5kaW5nIiwic3VjY2VzcyIsImVycm9yIiwicmVuZGVyIiwiZXJyb3JEYXRhIiwiZGF0YSIsInJlc3BvbnNlIiwicmVzcG9uc2VEYXRhIiwibXNnIiwidXNlT3Blbk1vZGFsIiwiSUNPTl9GT1JNIiwiRmxleERpdiIsIlVzZXJJY29uIiwib3Blbk1vZGFsIiwiaWNvblNyYyIsInVzZXJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==