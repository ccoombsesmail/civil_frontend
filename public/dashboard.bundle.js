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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Style_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Style/index */ "./src/pages/CommonComponents/ProgressBar/Style/index.js");


var ProgressBar = function ProgressBar(_ref) {
  var value = _ref.value,
    maxValue = _ref.maxValue;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_1__.ProgressBarContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_1__.ProgressValue, {
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
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _templateObject, _templateObject2, _templateObject3;

var load = function load(ratio) {
  return (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.keyframes)(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  0% { max-width: 0; }\n  100% { max-width: ", "%; }\n"])), ratio * 100);
};
var ProgressBarContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([" \n  background: white;\n  border: 1px solid black;\n  justify-content: flex-start;\n  border-radius: 1em;\n  align-items: center;\n  position: relative;\n  /* padding: 0 .2em; */\n  display: flex;\n  height: 2vh;\n  width: 10vw;\n\n"])));
var ProgressValue = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(_templateObject3 || (_templateObject3 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([" \n  animation: ", " 1s ease-out normal forwards;\n  animation-delay: 1.5s;\n  border-radius: 1em;\n  background: #47DDA6;\n  height: 1.8vh;\n  width: 10vw;\n  max-width: 0;\n"])), function (props) {
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CommonComponents_Line__WEBPACK_IMPORTED_MODULE_7__.Line, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_BioForm_Index__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

// import { FiUser } from 'react-icons/fi'

var FormContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([" \n  width: 70%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 3vw auto;\n\n"])));
var Label = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('label')(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([" \n  background-image: url('https://civil-dev.s3.us-west-1.amazonaws.com/profile_images/64_1.png');\n  background-size: cover;\n  height: 4em;\n  width: 4em;\n  border-radius: 50%;\n  cursor: pointer;\n"])));
var UploadInput = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('input')(_templateObject3 || (_templateObject3 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([" \n  position: absolute; \n  left: -99999rem;\n"])));

// export const UploadIcon = styled(FiUser)`
//   background-color: gray;
//   border-radius: 50%;
//   cursor: pointer;
// `

var Container = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(_templateObject4 || (_templateObject4 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([" \n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  align-items: center;\n  margin: 4vw;\n\n  .cl-card {\n    width: 60vw;\n  }\n  .cl-component.cl-user-profile .cl-main {\n    margin: 3em 0 0 1em;\n}\n"])));

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
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _hooks_useOnSubmit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hooks/useOnSubmit */ "./src/pages/Dashboard/components/BioForm/hooks/useOnSubmit.js");
/* harmony import */ var _Style_Index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Style/Index */ "./src/pages/Dashboard/components/BioForm/Style/Index.js");





var BioForm = function BioForm(_ref) {
  var user = _ref.user;
  var userData = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (s) {
    return s.users;
  })[user === null || user === void 0 ? void 0 : user.id];
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(userData === null || userData === void 0 ? void 0 : userData.bio),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
    bio = _useState2[0],
    setBio = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(userData === null || userData === void 0 ? void 0 : userData.experience),
    _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
    experience = _useState4[0],
    setExperience = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    setBio(userData === null || userData === void 0 ? void 0 : userData.bio);
    setExperience(userData === null || userData === void 0 ? void 0 : userData.experience);
  }, [userData]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var clerkWrapper = document.getElementsByClassName('cl-main')[0];
    if (clerkWrapper) clerkWrapper.insertBefore(document.getElementById('bio-dashboard'), null);
  }, []);
  var onSubmit = (0,_hooks_useOnSubmit__WEBPACK_IMPORTED_MODULE_3__["default"])(bio, experience, setBio, setExperience);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_Index__WEBPACK_IMPORTED_MODULE_4__.OuterContainer, {
    id: "bio-dashboard"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_Index__WEBPACK_IMPORTED_MODULE_4__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_Index__WEBPACK_IMPORTED_MODULE_4__.HeaderContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_Index__WEBPACK_IMPORTED_MODULE_4__.Header, null, "Bio Information"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_Index__WEBPACK_IMPORTED_MODULE_4__.SubHeader, null, "Manage Bio and Experience Information")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("form", {
    onSubmit: onSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_Index__WEBPACK_IMPORTED_MODULE_4__.FieldContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_Index__WEBPACK_IMPORTED_MODULE_4__.FieldLabel, null, "Bio"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_Index__WEBPACK_IMPORTED_MODULE_4__.Textarea, {
    value: bio,
    onChange: function onChange(e) {
      return setBio(e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_Index__WEBPACK_IMPORTED_MODULE_4__.FieldContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_Index__WEBPACK_IMPORTED_MODULE_4__.FieldLabel, null, "Experience"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_Index__WEBPACK_IMPORTED_MODULE_4__.Textarea, {
    value: experience,
    onChange: function onChange(e) {
      return setExperience(e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_Index__WEBPACK_IMPORTED_MODULE_4__.ButtonContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", {
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
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;

var OuterContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([" \n  width: 100%;\n  display: flex;\n  justify-content: center;\n\n"])));
var Container = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 60vw;\n  padding: 3em 2em;\n  /* box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2); */\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 24px 48px;\n  font-family: \"Source Sans Pro\", sans-serif;;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #151515;\n  text-align: left;\n  border-radius: 1rem;\n  border: 1px solid transparent;\n  background-color: white;\n  /* width: 840px; */\n"])));
var HeaderContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(_templateObject3 || (_templateObject3 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin-bottom: 1.25em;\n\n"])));
var Header = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('h1')(_templateObject4 || (_templateObject4 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  align-items: center;\n  font-size: 2rem;\n  font-weight: 600;\n  margin: 0;\n  line-height: 1.2;\n\n"])));
var SubHeader = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('p')(_templateObject5 || (_templateObject5 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  color: #808080;\n  font-size: 1.25rem;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5em;\n  margin: 0 0 1rem 0;\n"])));
var FieldContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(_templateObject6 || (_templateObject6 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  width: 100%;\n  padding-bottom: 1.5em;\n"])));
var FieldLabel = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(_templateObject7 || (_templateObject7 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([" \n  display: flex;\n  flex: 0 0 30%;\n  margin-right: 0.5em;\n  padding-top: 1.5em;\n  line-height: 1.25em;\n  font-size: 1em;\n  font-weight: var(--clerk-label-font-weight, 600);\n\n"])));
var Textarea = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('textarea')(_templateObject8 || (_templateObject8 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  min-height: 4vh;\n  flex: 1;\n  padding-top: 1.5em;\n  padding-bottom: 1.5em;\n  font-size: 1em;\n  line-height: 1.25em;\n\n  transition: color .2s ease-in-out,background-color .2s ease-in-out,border-color .2s ease-in-out,box-shadow .2s ease-in-out;\n  padding: calc(1em - 2px);\n  background: none;\n  border-radius: 0.5em;\n  border: 2px solid #e5e5e5;\n  color: #151515;\n  width: 100%;\n  background-color: #fff;\n\n  :focus {\n    border-color: #87C232;\n    box-shadow: none !important;\n    outline: none !important;\n    outline-offset: none !important;\n  }\n"])));
var ButtonContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(_templateObject9 || (_templateObject9 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([" \n  display: flex;\n  justify-content: flex-end;\n  margin-top: 2em;\n  width: 100%;\n\n  button {\n    transition: color .2s ease-in-out, background-color .2s ease-in-out, border-color .2s ease-in-out, box-shadow .2s ease-in-out;\n    padding: calc(1em - 2px);\n    line-height: 1.25rem;\n    background: #87C232;\n    border-color: #87C232;    \n    border-radius: 0.5em;\n    border: 2px solid #e5e5e5;\n    color: white;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    vertical-align: middle;\n    font-family: inherit;\n    font-weight: 600;\n    font-size: 1rem;\n    margin: 0;\n    padding: 1em 2em;\n    border: 0;\n    outline: 0;\n  }\n\n"])));

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
    react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.promise(updateUserBioInformation(currentUser === null || currentUser === void 0 ? void 0 : currentUser.id, bio || null, experience || null), {
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
/* harmony import */ var _CommonComponents_ProgressBar_Index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../CommonComponents/ProgressBar/Index */ "./src/pages/CommonComponents/ProgressBar/Index.jsx");
/* harmony import */ var _hooks_useOpenModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useOpenModal */ "./src/pages/hooks/useOpenModal.js");
/* harmony import */ var _App_Modal_Index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../App/Modal/Index */ "./src/pages/App/Modal/Index.jsx");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Style */ "./src/pages/Dashboard/components/Header/Style/index.js");





var Header = function Header(_ref) {
  var user = _ref.user;
  var openModal = (0,_hooks_useOpenModal__WEBPACK_IMPORTED_MODULE_2__["default"])(_App_Modal_Index__WEBPACK_IMPORTED_MODULE_3__.ICON_FORM);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_4__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, user === null || user === void 0 ? void 0 : user.username), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_4__.FlexDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_4__.UserIcon, {
    src: (user === null || user === void 0 ? void 0 : user.iconSrc) || 'https://civil-dev.s3.us-west-1.amazonaws.com/profile_img_1.png',
    onClick: openModal,
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CommonComponents_ProgressBar_Index__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _templateObject, _templateObject2, _templateObject3;
/* eslint-disable import/prefer-default-export */

var Container = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('header')(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  align-items: center;\n  h1 {\n    color: var(--bg-accent);\n    font-size: 1.4em;\n    font-weight: bold;\n  }\n"])));
var FlexDiv = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  align-items: center;\n\n"])));
var UserIcon = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('img')(_templateObject3 || (_templateObject3 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["  \n  margin-right: 1vw;\n  height: 2vw;\n  width: 2vw;\n  border-radius: 50%;\n\n"])));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1FBQzVCO01BQ0Y7SUFDRixDQUFDLENBQUM7RUFDTixDQUFDLEVBQUUsQ0FBQ2hELFdBQVcsRUFBRTJCLEdBQUcsRUFBRUUsVUFBVSxDQUFDLENBQUM7QUFDcEMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QndCO0FBQzRDO0FBQ2Y7QUFFRjtBQUNFO0FBRXRELElBQU1yQyxNQUFNLEdBQUcsU0FBVEEsTUFBTSxPQUFpQjtFQUFBLElBQVhLLElBQUksUUFBSkEsSUFBSTtFQUNwQixJQUFNd0QsU0FBUyxHQUFHSiwrREFBWSxDQUFDQyx1REFBUyxDQUFDO0VBQ3pDLG9CQUNFLDJEQUFDLDZDQUFTLHFCQUNSLHVFQUFLckQsSUFBSSxhQUFKQSxJQUFJLHVCQUFKQSxJQUFJLENBQUV5RCxRQUFRLENBQU0sZUFDekIsMkRBQUMsMkNBQU8scUJBQ04sMkRBQUMsNENBQVE7SUFBQyxHQUFHLEVBQUUsQ0FBQXpELElBQUksYUFBSkEsSUFBSSx1QkFBSkEsSUFBSSxDQUFFMEQsT0FBTyxLQUFJLGdFQUFpRTtJQUFDLE9BQU8sRUFBRUYsU0FBVTtJQUFDLEdBQUcsRUFBQztFQUFFLEVBQUcsZUFDL0gsMkRBQUMsMkVBQVc7SUFBQyxLQUFLLEVBQUV4RCxJQUFJLGFBQUpBLElBQUksdUJBQUpBLElBQUksQ0FBRTJELFFBQVM7SUFBQyxRQUFRLEVBQUU7RUFBRyxFQUFHLENBQzVDLENBQ0E7QUFFaEIsQ0FBQztBQUVELGlFQUFlaEUsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQnJCO0FBQ3NDO0FBRS9CLElBQU1ILFNBQVMsR0FBR1QsNkRBQU0sQ0FBQyxRQUFRLENBQUMseVRBVXhDO0FBRU0sSUFBTXVFLE9BQU8sR0FBR3ZFLDZEQUFNLENBQUMsS0FBSyxDQUFDLHVMQUluQztBQUVNLElBQU13RSxRQUFRLEdBQUd4RSw2REFBTSxDQUFDLEtBQUssQ0FBQywyTkFNcEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9Db21tb25Db21wb25lbnRzL1Byb2dyZXNzQmFyL0luZGV4LmpzeCIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9Db21tb25Db21wb25lbnRzL1Byb2dyZXNzQmFyL1N0eWxlL2luZGV4LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL0Rhc2hib2FyZC9JbmRleC5qc3giLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvRGFzaGJvYXJkL1N0eWxlL2luZGV4LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL0Rhc2hib2FyZC9jb21wb25lbnRzL0Jpb0Zvcm0vSW5kZXguanN4Iiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL0Rhc2hib2FyZC9jb21wb25lbnRzL0Jpb0Zvcm0vU3R5bGUvSW5kZXguanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvRGFzaGJvYXJkL2NvbXBvbmVudHMvQmlvRm9ybS9ob29rcy91c2VPblN1Ym1pdC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9EYXNoYm9hcmQvY29tcG9uZW50cy9IZWFkZXIvSW5kZXguanN4Iiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL0Rhc2hib2FyZC9jb21wb25lbnRzL0hlYWRlci9TdHlsZS9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IFByb2dyZXNzQmFyQ29udGFpbmVyLCBQcm9ncmVzc1ZhbHVlIH0gZnJvbSAnLi9TdHlsZS9pbmRleCdcblxuY29uc3QgUHJvZ3Jlc3NCYXIgPSAoeyB2YWx1ZSwgbWF4VmFsdWUgfSkgPT4gKFxuICA8UHJvZ3Jlc3NCYXJDb250YWluZXI+XG4gICAgPFByb2dyZXNzVmFsdWUgcmF0aW89e3ZhbHVlIC8gbWF4VmFsdWV9IC8+XG4gIDwvUHJvZ3Jlc3NCYXJDb250YWluZXI+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IFByb2dyZXNzQmFyXG4iLCJpbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5jb25zdCBsb2FkID0gKHJhdGlvKSA9PiBrZXlmcmFtZXNgXG4gIDAlIHsgbWF4LXdpZHRoOiAwOyB9XG4gIDEwMCUgeyBtYXgtd2lkdGg6ICR7cmF0aW8gKiAxMDB9JTsgfVxuYFxuXG5leHBvcnQgY29uc3QgUHJvZ3Jlc3NCYXJDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpYCBcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvKiBwYWRkaW5nOiAwIC4yZW07ICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMnZoO1xuICB3aWR0aDogMTB2dztcblxuYFxuXG5leHBvcnQgY29uc3QgUHJvZ3Jlc3NWYWx1ZSA9IHN0eWxlZCgnZGl2JylgIFxuICBhbmltYXRpb246ICR7KHByb3BzKSA9PiBsb2FkKHByb3BzLnJhdGlvKX0gMXMgZWFzZS1vdXQgbm9ybWFsIGZvcndhcmRzO1xuICBhbmltYXRpb24tZGVsYXk6IDEuNXM7XG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcbiAgYmFja2dyb3VuZDogIzQ3RERBNjtcbiAgaGVpZ2h0OiAxLjh2aDtcbiAgd2lkdGg6IDEwdnc7XG4gIG1heC13aWR0aDogMDtcbmBcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIFN1c3BlbnNlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgVXNlclByb2ZpbGUgfSBmcm9tICdAY2xlcmsvY2xlcmstcmVhY3QnXG5cbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4vU3R5bGUnXG5pbXBvcnQgc2Vzc2lvbkFjdGlvbnMgZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucy9zZXNzaW9uL2luZGV4J1xuXG5pbXBvcnQgdXNlQmluZERpc3BhdGNoIGZyb20gJy4uL2hvb2tzL3JlZHV4L3VzZUJpbmREaXNwYXRjaCdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL0hlYWRlci9JbmRleCdcbmltcG9ydCB7IExpbmUgfSBmcm9tICcuLi9Db21tb25Db21wb25lbnRzL0xpbmUnXG4vLyBpbXBvcnQgQnV0dG9uIGZyb20gJy4uL0NvbW1vbkNvbXBvbmVudHMvQnV0dG9uL0luZGV4J1xuXG5pbXBvcnQgQmlvRm9ybSBmcm9tICcuL2NvbXBvbmVudHMvQmlvRm9ybS9JbmRleCdcbi8vIGltcG9ydCBCYXNpY0luZm9ybWF0aW9uIGZyb20gJy4uL0F1dGhGbG93L2NvbXBvbmVudHMvQmFzaWNJbmZvcm1hdGlvbi9JbmRleCdcbi8vIGltcG9ydCB7IElOSVRfRElEX0ZPUk1fVkFMVUVTIH0gZnJvbSAnLi4vdXRpbC9mb3JtX2hlbHBlcnMvaW5pdF9mb3JtX3ZhbHVlcydcbi8vIGltcG9ydCB1c2VBZGRWY0NyZWQgZnJvbSAnLi4vRElEL2hvb2tzL3VzZUFkZFZjQ3JlZCdcblxuY29uc3QgRGFzaGJvYXJkID0gKCkgPT4ge1xuICBjb25zdCB7IGdldEN1cnJlbnRVc2VyIH0gPSB1c2VCaW5kRGlzcGF0Y2goc2Vzc2lvbkFjdGlvbnMpXG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3RvcigocykgPT4gcy5zZXNzaW9uLmN1cnJlbnRVc2VyKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGNsZXJrV3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NsLW1haW4nKVswXVxuICAgIGlmIChjbGVya1dyYXBwZXIpIGNsZXJrV3JhcHBlci5pbnNlcnRCZWZvcmUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jpby1kYXNoYm9hcmQnKSwgbnVsbClcbiAgICBpZiAodXNlcikgZ2V0Q3VycmVudFVzZXIodXNlcj8udXNlcklkKVxuICB9LCBbXSlcbiAgLy8gY29uc3QgYWRkVmNDcmVkID0gdXNlQWRkVmNDcmVkKClcbiAgcmV0dXJuIChcbiAgICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxkaXY+TG9hZGluZy4uLjwvZGl2Pn0+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8SGVhZGVyIHVzZXI9e3VzZXJ9IC8+XG4gICAgICAgIDxMaW5lIC8+XG4gICAgICAgIDxVc2VyUHJvZmlsZVxuICAgICAgICAgIGFwcGVhcmFuY2U9e3tcbiAgICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgICBmb250U2l6ZTogJzEuMnZ3JyxcbiAgICAgICAgICAgICAgZm9udFNtb290aGluZzogJ2FudGlhbGlhc2VkJyxcbiAgICAgICAgICAgICAgZm9udFdlaWdodDogOTAwLFxuICAgICAgICAgICAgICBmb250RmFtaWx5OiAnU291cmNlIFNhbnMgUHJvLCBzYW5zLXNlcmlmJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgey8qIDxGb3JtaWtcbiAgICAgICAgICBpbml0aWFsVmFsdWVzPXtJTklUX0RJRF9GT1JNX1ZBTFVFU31cbiAgICAgICAgICBvblN1Ym1pdD17KHZhbHVlcywgcGFyYW1zKSA9PiBhZGRWY0NyZWQodmFsdWVzLCBwYXJhbXMpfVxuICAgICAgICA+XG4gICAgICAgICAgeyh7IGlzU3VibWl0dGluZywgdmFsdWVzLCBzZXRGaWVsZFZhbHVlIH0pID0+IChcbiAgICAgICAgICAgIDxGb3JtQ29udGFpbmVyPlxuICAgICAgICAgICAgICA8QmFzaWNJbmZvcm1hdGlvbiBzZXRGaWVsZFZhbHVlPXtzZXRGaWVsZFZhbHVlfSAvPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgd2lkdGg9XCI0MCVcIlxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjIuNXZ3XCJcbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCJ2YXIoLS1tLWVsYXN0b3MtdGhlbWUpXCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNTdWJtaXR0aW5nfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFkZFZjQ3JlZCh2YWx1ZXMpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgVXBkYXRlIERlY2VudHJhbGl6ZWQgSWRlbnRpdHlcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0Zvcm1Db250YWluZXI+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9Gb3JtaWs+ICovfVxuICAgICAgICA8TGluZSAvPlxuICAgICAgICA8QmlvRm9ybSB1c2VyPXt1c2VyfSAvPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9TdXNwZW5zZT5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmRcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG4vLyBpbXBvcnQgeyBGaVVzZXIgfSBmcm9tICdyZWFjdC1pY29ucy9maSdcblxuZXhwb3J0IGNvbnN0IEZvcm1Db250YWluZXIgPSBzdHlsZWQoJ2RpdicpYCBcbiAgd2lkdGg6IDcwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAzdncgYXV0bztcblxuYFxuXG5leHBvcnQgY29uc3QgTGFiZWwgPSBzdHlsZWQoJ2xhYmVsJylgIFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vY2l2aWwtZGV2LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3Byb2ZpbGVfaW1hZ2VzLzY0XzEucG5nJyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGhlaWdodDogNGVtO1xuICB3aWR0aDogNGVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbmBcblxuZXhwb3J0IGNvbnN0IFVwbG9hZElucHV0ID0gc3R5bGVkKCdpbnB1dCcpYCBcbiAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgbGVmdDogLTk5OTk5cmVtO1xuYFxuXG4vLyBleHBvcnQgY29uc3QgVXBsb2FkSWNvbiA9IHN0eWxlZChGaVVzZXIpYFxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xuLy8gICBib3JkZXItcmFkaXVzOiA1MCU7XG4vLyAgIGN1cnNvcjogcG9pbnRlcjtcbi8vIGBcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZCgnZGl2JylgIFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiA0dnc7XG5cbiAgLmNsLWNhcmQge1xuICAgIHdpZHRoOiA2MHZ3O1xuICB9XG4gIC5jbC1jb21wb25lbnQuY2wtdXNlci1wcm9maWxlIC5jbC1tYWluIHtcbiAgICBtYXJnaW46IDNlbSAwIDAgMWVtO1xufVxuYFxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgdXNlT25TdWJtaXQgZnJvbSAnLi9ob29rcy91c2VPblN1Ym1pdCdcblxuaW1wb3J0IHtcbiAgQ29udGFpbmVyLCBPdXRlckNvbnRhaW5lciwgSGVhZGVyQ29udGFpbmVyLFxuICBIZWFkZXIsIFN1YkhlYWRlciwgRmllbGRDb250YWluZXIsXG4gIEZpZWxkTGFiZWwsIFRleHRhcmVhLCBCdXR0b25Db250YWluZXIsXG59IGZyb20gJy4vU3R5bGUvSW5kZXgnXG5cbmNvbnN0IEJpb0Zvcm0gPSAoeyB1c2VyIH0pID0+IHtcbiAgY29uc3QgdXNlckRhdGEgPSB1c2VTZWxlY3RvcigocykgPT4gcy51c2VycylbdXNlcj8uaWRdXG4gIGNvbnN0IFtiaW8sIHNldEJpb10gPSB1c2VTdGF0ZSh1c2VyRGF0YT8uYmlvKVxuICBjb25zdCBbZXhwZXJpZW5jZSwgc2V0RXhwZXJpZW5jZV0gPSB1c2VTdGF0ZSh1c2VyRGF0YT8uZXhwZXJpZW5jZSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEJpbyh1c2VyRGF0YT8uYmlvKVxuICAgIHNldEV4cGVyaWVuY2UodXNlckRhdGE/LmV4cGVyaWVuY2UpXG4gIH0sIFt1c2VyRGF0YV0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjbGVya1dyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjbC1tYWluJylbMF1cbiAgICBpZiAoY2xlcmtXcmFwcGVyKSBjbGVya1dyYXBwZXIuaW5zZXJ0QmVmb3JlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiaW8tZGFzaGJvYXJkJyksIG51bGwpXG4gIH0sIFtdKVxuXG4gIGNvbnN0IG9uU3VibWl0ID0gdXNlT25TdWJtaXQoYmlvLCBleHBlcmllbmNlLCBzZXRCaW8sIHNldEV4cGVyaWVuY2UpXG4gIHJldHVybiAoXG4gICAgPE91dGVyQ29udGFpbmVyIGlkPVwiYmlvLWRhc2hib2FyZFwiPlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPEhlYWRlckNvbnRhaW5lcj5cbiAgICAgICAgICA8SGVhZGVyPkJpbyBJbmZvcm1hdGlvbjwvSGVhZGVyPlxuICAgICAgICAgIDxTdWJIZWFkZXI+TWFuYWdlIEJpbyBhbmQgRXhwZXJpZW5jZSBJbmZvcm1hdGlvbjwvU3ViSGVhZGVyPlxuICAgICAgICA8L0hlYWRlckNvbnRhaW5lcj5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cbiAgICAgICAgICA8RmllbGRDb250YWluZXI+XG4gICAgICAgICAgICA8RmllbGRMYWJlbD5cbiAgICAgICAgICAgICAgQmlvXG4gICAgICAgICAgICA8L0ZpZWxkTGFiZWw+XG4gICAgICAgICAgICA8VGV4dGFyZWEgdmFsdWU9e2Jpb30gb25DaGFuZ2U9eyhlKSA9PiBzZXRCaW8oZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICAgIDwvRmllbGRDb250YWluZXI+XG4gICAgICAgICAgPEZpZWxkQ29udGFpbmVyPlxuICAgICAgICAgICAgPEZpZWxkTGFiZWw+XG4gICAgICAgICAgICAgIEV4cGVyaWVuY2VcbiAgICAgICAgICAgIDwvRmllbGRMYWJlbD5cbiAgICAgICAgICAgIDxUZXh0YXJlYSB2YWx1ZT17ZXhwZXJpZW5jZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRFeHBlcmllbmNlKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgICA8L0ZpZWxkQ29udGFpbmVyPlxuICAgICAgICAgIDxCdXR0b25Db250YWluZXI+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TYXZlIEJpbyBJbmZvcm1hdGlvbjwvYnV0dG9uPlxuICAgICAgICAgIDwvQnV0dG9uQ29udGFpbmVyPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L091dGVyQ29udGFpbmVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJpb0Zvcm1cbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBPdXRlckNvbnRhaW5lciA9IHN0eWxlZCgnZGl2JylgIFxuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbmBcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZCgnZGl2JylgXG4gIHdpZHRoOiA2MHZ3O1xuICBwYWRkaW5nOiAzZW0gMmVtO1xuICAvKiBib3gtc2hhZG93OiAwcHggMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7ICovXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDI0cHggNDhweDtcbiAgZm9udC1mYW1pbHk6IFwiU291cmNlIFNhbnMgUHJvXCIsIHNhbnMtc2VyaWY7O1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjMTUxNTE1O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIC8qIHdpZHRoOiA4NDBweDsgKi9cbmBcblxuZXhwb3J0IGNvbnN0IEhlYWRlckNvbnRhaW5lciA9IHN0eWxlZCgnZGl2JylgXG4gIG1hcmdpbi1ib3R0b206IDEuMjVlbTtcblxuYFxuXG5leHBvcnQgY29uc3QgSGVhZGVyID0gc3R5bGVkKCdoMScpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbjogMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcblxuYFxuXG5leHBvcnQgY29uc3QgU3ViSGVhZGVyID0gc3R5bGVkKCdwJylgXG4gIGNvbG9yOiAjODA4MDgwO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICBtYXJnaW46IDAgMCAxcmVtIDA7XG5gXG5cbmV4cG9ydCBjb25zdCBGaWVsZENvbnRhaW5lciA9IHN0eWxlZCgnZGl2JylgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWJvdHRvbTogMS41ZW07XG5gXG5cbmV4cG9ydCBjb25zdCBGaWVsZExhYmVsID0gc3R5bGVkKCdkaXYnKWAgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDAgMCAzMCU7XG4gIG1hcmdpbi1yaWdodDogMC41ZW07XG4gIHBhZGRpbmctdG9wOiAxLjVlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMjVlbTtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1jbGVyay1sYWJlbC1mb250LXdlaWdodCwgNjAwKTtcblxuYFxuXG5leHBvcnQgY29uc3QgVGV4dGFyZWEgPSBzdHlsZWQoJ3RleHRhcmVhJylgXG4gIG1pbi1oZWlnaHQ6IDR2aDtcbiAgZmxleDogMTtcbiAgcGFkZGluZy10b3A6IDEuNWVtO1xuICBwYWRkaW5nLWJvdHRvbTogMS41ZW07XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBsaW5lLWhlaWdodDogMS4yNWVtO1xuXG4gIHRyYW5zaXRpb246IGNvbG9yIC4ycyBlYXNlLWluLW91dCxiYWNrZ3JvdW5kLWNvbG9yIC4ycyBlYXNlLWluLW91dCxib3JkZXItY29sb3IgLjJzIGVhc2UtaW4tb3V0LGJveC1zaGFkb3cgLjJzIGVhc2UtaW4tb3V0O1xuICBwYWRkaW5nOiBjYWxjKDFlbSAtIDJweCk7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZTVlNWU1O1xuICBjb2xvcjogIzE1MTUxNTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cbiAgOmZvY3VzIHtcbiAgICBib3JkZXItY29sb3I6ICM4N0MyMzI7XG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgICBvdXRsaW5lLW9mZnNldDogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBCdXR0b25Db250YWluZXIgPSBzdHlsZWQoJ2RpdicpYCBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgbWFyZ2luLXRvcDogMmVtO1xuICB3aWR0aDogMTAwJTtcblxuICBidXR0b24ge1xuICAgIHRyYW5zaXRpb246IGNvbG9yIC4ycyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAuMnMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAuMnMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjJzIGVhc2UtaW4tb3V0O1xuICAgIHBhZGRpbmc6IGNhbGMoMWVtIC0gMnB4KTtcbiAgICBsaW5lLWhlaWdodDogMS4yNXJlbTtcbiAgICBiYWNrZ3JvdW5kOiAjODdDMjMyO1xuICAgIGJvcmRlci1jb2xvcjogIzg3QzIzMjsgICAgXG4gICAgYm9yZGVyLXJhZGl1czogMC41ZW07XG4gICAgYm9yZGVyOiAycHggc29saWQgI2U1ZTVlNTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAxZW0gMmVtO1xuICAgIGJvcmRlcjogMDtcbiAgICBvdXRsaW5lOiAwO1xuICB9XG5cbmBcbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSdcbmltcG9ydCB1c2VCaW5kRGlzcGF0Y2ggZnJvbSAnLi4vLi4vLi4vLi4vaG9va3MvcmVkdXgvdXNlQmluZERpc3BhdGNoJ1xuaW1wb3J0IHVzZXJBY3Rpb25zIGZyb20gJy4uLy4uLy4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvdXNlcnMnXG5cbmV4cG9ydCBkZWZhdWx0IChiaW8sIGV4cGVyaWVuY2UpID0+IHtcbiAgY29uc3QgY3VycmVudFVzZXIgPSB1c2VTZWxlY3RvcigocykgPT4gcy5zZXNzaW9uLmN1cnJlbnRVc2VyKVxuICBjb25zdCB7IHVwZGF0ZVVzZXJCaW9JbmZvcm1hdGlvbiB9ID0gdXNlQmluZERpc3BhdGNoKHVzZXJBY3Rpb25zKVxuICByZXR1cm4gdXNlQ2FsbGJhY2soKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIHRvYXN0LnByb21pc2UodXBkYXRlVXNlckJpb0luZm9ybWF0aW9uKGN1cnJlbnRVc2VyPy5pZCwgYmlvIHx8IG51bGwsIGV4cGVyaWVuY2UgfHwgbnVsbCksXG4gICAgICB7XG4gICAgICAgIHBlbmRpbmc6ICdTYXZpbmcgQmlvIEluZnJvbWF0aW9uLi4uJyxcbiAgICAgICAgc3VjY2VzczogJ0JpbyBJbmZvIFN1Y2NlZnVsbHkgU2F2ZWQhJyxcbiAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICByZW5kZXIoeyBkYXRhOiBlcnJvckRhdGEgfSkge1xuICAgICAgICAgICAgY29uc3QgeyByZXNwb25zZSB9ID0gZXJyb3JEYXRhXG4gICAgICAgICAgICBjb25zdCB7IGRhdGE6IHJlc3BvbnNlRGF0YSB9ID0gcmVzcG9uc2VcbiAgICAgICAgICAgIHJldHVybiBgJHtyZXNwb25zZURhdGEubXNnfSDwn6SvIGBcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgfSwgW2N1cnJlbnRVc2VyLCBiaW8sIGV4cGVyaWVuY2VdKVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gJy4uLy4uLy4uL0NvbW1vbkNvbXBvbmVudHMvUHJvZ3Jlc3NCYXIvSW5kZXgnXG5pbXBvcnQgdXNlT3Blbk1vZGFsIGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZU9wZW5Nb2RhbCdcblxuaW1wb3J0IHsgSUNPTl9GT1JNIH0gZnJvbSAnLi4vLi4vLi4vQXBwL01vZGFsL0luZGV4J1xuaW1wb3J0IHsgQ29udGFpbmVyLCBGbGV4RGl2LCBVc2VySWNvbiB9IGZyb20gJy4vU3R5bGUnXG5cbmNvbnN0IEhlYWRlciA9ICh7IHVzZXIgfSkgPT4ge1xuICBjb25zdCBvcGVuTW9kYWwgPSB1c2VPcGVuTW9kYWwoSUNPTl9GT1JNKVxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8aDE+e3VzZXI/LnVzZXJuYW1lfTwvaDE+XG4gICAgICA8RmxleERpdj5cbiAgICAgICAgPFVzZXJJY29uIHNyYz17dXNlcj8uaWNvblNyYyB8fCAnaHR0cHM6Ly9jaXZpbC1kZXYuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vcHJvZmlsZV9pbWdfMS5wbmcnfSBvbkNsaWNrPXtvcGVuTW9kYWx9IGFsdD1cIlwiIC8+XG4gICAgICAgIDxQcm9ncmVzc0JhciB2YWx1ZT17dXNlcj8uY2l2aWxpdHl9IG1heFZhbHVlPXsyMH0gLz5cbiAgICAgIDwvRmxleERpdj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQoJ2hlYWRlcicpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LWdyb3c6IDE7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGgxIHtcbiAgICBjb2xvcjogdmFyKC0tYmctYWNjZW50KTtcbiAgICBmb250LXNpemU6IDEuNGVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBGbGV4RGl2ID0gc3R5bGVkKCdkaXYnKWBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuYFxuXG5leHBvcnQgY29uc3QgVXNlckljb24gPSBzdHlsZWQoJ2ltZycpYCAgXG4gIG1hcmdpbi1yaWdodDogMXZ3O1xuICBoZWlnaHQ6IDJ2dztcbiAgd2lkdGg6IDJ2dztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuXG5gXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9ncmVzc0JhckNvbnRhaW5lciIsIlByb2dyZXNzVmFsdWUiLCJQcm9ncmVzc0JhciIsInZhbHVlIiwibWF4VmFsdWUiLCJzdHlsZWQiLCJrZXlmcmFtZXMiLCJsb2FkIiwicmF0aW8iLCJwcm9wcyIsInVzZUVmZmVjdCIsIlN1c3BlbnNlIiwidXNlU2VsZWN0b3IiLCJVc2VyUHJvZmlsZSIsIkNvbnRhaW5lciIsInNlc3Npb25BY3Rpb25zIiwidXNlQmluZERpc3BhdGNoIiwiSGVhZGVyIiwiTGluZSIsIkJpb0Zvcm0iLCJEYXNoYm9hcmQiLCJnZXRDdXJyZW50VXNlciIsInVzZXIiLCJzIiwic2Vzc2lvbiIsImN1cnJlbnRVc2VyIiwiY2xlcmtXcmFwcGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiaW5zZXJ0QmVmb3JlIiwiZ2V0RWxlbWVudEJ5SWQiLCJ1c2VySWQiLCJ2YXJpYWJsZXMiLCJmb250U2l6ZSIsImZvbnRTbW9vdGhpbmciLCJmb250V2VpZ2h0IiwiZm9udEZhbWlseSIsIkZvcm1Db250YWluZXIiLCJMYWJlbCIsIlVwbG9hZElucHV0IiwidXNlU3RhdGUiLCJ1c2VPblN1Ym1pdCIsIk91dGVyQ29udGFpbmVyIiwiSGVhZGVyQ29udGFpbmVyIiwiU3ViSGVhZGVyIiwiRmllbGRDb250YWluZXIiLCJGaWVsZExhYmVsIiwiVGV4dGFyZWEiLCJCdXR0b25Db250YWluZXIiLCJ1c2VyRGF0YSIsInVzZXJzIiwiaWQiLCJiaW8iLCJzZXRCaW8iLCJleHBlcmllbmNlIiwic2V0RXhwZXJpZW5jZSIsIm9uU3VibWl0IiwiZSIsInRhcmdldCIsInVzZUNhbGxiYWNrIiwidG9hc3QiLCJ1c2VyQWN0aW9ucyIsInVwZGF0ZVVzZXJCaW9JbmZvcm1hdGlvbiIsInByZXZlbnREZWZhdWx0IiwicHJvbWlzZSIsInBlbmRpbmciLCJzdWNjZXNzIiwiZXJyb3IiLCJyZW5kZXIiLCJlcnJvckRhdGEiLCJkYXRhIiwicmVzcG9uc2UiLCJyZXNwb25zZURhdGEiLCJtc2ciLCJ1c2VPcGVuTW9kYWwiLCJJQ09OX0ZPUk0iLCJGbGV4RGl2IiwiVXNlckljb24iLCJvcGVuTW9kYWwiLCJ1c2VybmFtZSIsImljb25TcmMiLCJjaXZpbGl0eSJdLCJzb3VyY2VSb290IjoiIn0=