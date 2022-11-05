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
    if (user) getCurrentUser(user === null || user === void 0 ? void 0 : user.id);
  }, []);
  // const addVcCred = useAddVcCred()
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Loading...")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_3__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Header_Index__WEBPACK_IMPORTED_MODULE_6__["default"], {
    user: user
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CommonComponents_Line__WEBPACK_IMPORTED_MODULE_7__.Line, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_clerk_clerk_react__WEBPACK_IMPORTED_MODULE_2__.UserProfile, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CommonComponents_Line__WEBPACK_IMPORTED_MODULE_7__.Line, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_BioForm_Index__WEBPACK_IMPORTED_MODULE_8__["default"], {
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

var Container = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(_templateObject4 || (_templateObject4 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([" \n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin: 4vw;\n\n  .cl-component.cl-user-profile .cl-main {\n    margin: 3em 0 0 1em;\n}\n"])));

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
var Container = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 3em 2em;\n  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);\n  font-family: \"Source Sans Pro\", sans-serif;;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #151515;\n  text-align: left;\n  border-radius: 0.5em;\n  width: 840px;\n"])));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNmO0FBRUY7QUFDRTtBQUV0RCxJQUFNL0IsTUFBTSxHQUFHLFNBQVRBLE1BQU0sT0FBaUI7RUFBQSxJQUFYSyxJQUFJLFFBQUpBLElBQUk7RUFDcEIsSUFBTWtELFNBQVMsR0FBR0osK0RBQVksQ0FBQ0MsdURBQVMsQ0FBQztFQUN6QyxvQkFDRSwyREFBQyw2Q0FBUyxxQkFDUix1RUFBSy9DLElBQUksYUFBSkEsSUFBSSx1QkFBSkEsSUFBSSxDQUFFbUQsUUFBUSxDQUFNLGVBQ3pCLDJEQUFDLDJDQUFPLHFCQUNOLDJEQUFDLDRDQUFRO0lBQUMsR0FBRyxFQUFFLENBQUFuRCxJQUFJLGFBQUpBLElBQUksdUJBQUpBLElBQUksQ0FBRW9ELE9BQU8sS0FBSSxnRUFBaUU7SUFBQyxPQUFPLEVBQUVGLFNBQVU7SUFBQyxHQUFHLEVBQUM7RUFBRSxFQUFHLGVBQy9ILDJEQUFDLDJFQUFXO0lBQUMsS0FBSyxFQUFFbEQsSUFBSSxhQUFKQSxJQUFJLHVCQUFKQSxJQUFJLENBQUVxRCxRQUFTO0lBQUMsUUFBUSxFQUFFO0VBQUcsRUFBRyxDQUM1QyxDQUNBO0FBRWhCLENBQUM7QUFFRCxpRUFBZTFELE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJyQjtBQUNzQztBQUUvQixJQUFNSCxTQUFTLEdBQUdULDZEQUFNLENBQUMsUUFBUSxDQUFDLHlUQVV4QztBQUVNLElBQU1pRSxPQUFPLEdBQUdqRSw2REFBTSxDQUFDLEtBQUssQ0FBQyx1TEFJbkM7QUFFTSxJQUFNa0UsUUFBUSxHQUFHbEUsNkRBQU0sQ0FBQyxLQUFLLENBQUMsMk5BTXBDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvQ29tbW9uQ29tcG9uZW50cy9Qcm9ncmVzc0Jhci9JbmRleC5qc3giLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvQ29tbW9uQ29tcG9uZW50cy9Qcm9ncmVzc0Jhci9TdHlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9EYXNoYm9hcmQvSW5kZXguanN4Iiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL0Rhc2hib2FyZC9TdHlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9EYXNoYm9hcmQvY29tcG9uZW50cy9CaW9Gb3JtL0luZGV4LmpzeCIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9EYXNoYm9hcmQvY29tcG9uZW50cy9CaW9Gb3JtL1N0eWxlL0luZGV4LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL0Rhc2hib2FyZC9jb21wb25lbnRzL0Jpb0Zvcm0vaG9va3MvdXNlT25TdWJtaXQuanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvRGFzaGJvYXJkL2NvbXBvbmVudHMvSGVhZGVyL0luZGV4LmpzeCIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9EYXNoYm9hcmQvY29tcG9uZW50cy9IZWFkZXIvU3R5bGUvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyBQcm9ncmVzc0JhckNvbnRhaW5lciwgUHJvZ3Jlc3NWYWx1ZSB9IGZyb20gJy4vU3R5bGUvaW5kZXgnXG5cbmNvbnN0IFByb2dyZXNzQmFyID0gKHsgdmFsdWUsIG1heFZhbHVlIH0pID0+IChcbiAgPFByb2dyZXNzQmFyQ29udGFpbmVyPlxuICAgIDxQcm9ncmVzc1ZhbHVlIHJhdGlvPXt2YWx1ZSAvIG1heFZhbHVlfSAvPlxuICA8L1Byb2dyZXNzQmFyQ29udGFpbmVyPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBQcm9ncmVzc0JhclxuIiwiaW1wb3J0IHN0eWxlZCwgeyBrZXlmcmFtZXMgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuY29uc3QgbG9hZCA9IChyYXRpbykgPT4ga2V5ZnJhbWVzYFxuICAwJSB7IG1heC13aWR0aDogMDsgfVxuICAxMDAlIHsgbWF4LXdpZHRoOiAke3JhdGlvICogMTAwfSU7IH1cbmBcblxuZXhwb3J0IGNvbnN0IFByb2dyZXNzQmFyQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWAgXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBib3JkZXItcmFkaXVzOiAxZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLyogcGFkZGluZzogMCAuMmVtOyAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDJ2aDtcbiAgd2lkdGg6IDEwdnc7XG5cbmBcblxuZXhwb3J0IGNvbnN0IFByb2dyZXNzVmFsdWUgPSBzdHlsZWQoJ2RpdicpYCBcbiAgYW5pbWF0aW9uOiAkeyhwcm9wcykgPT4gbG9hZChwcm9wcy5yYXRpbyl9IDFzIGVhc2Utb3V0IG5vcm1hbCBmb3J3YXJkcztcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjVzO1xuICBib3JkZXItcmFkaXVzOiAxZW07XG4gIGJhY2tncm91bmQ6ICM0N0REQTY7XG4gIGhlaWdodDogMS44dmg7XG4gIHdpZHRoOiAxMHZ3O1xuICBtYXgtd2lkdGg6IDA7XG5gXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCBTdXNwZW5zZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IFVzZXJQcm9maWxlIH0gZnJvbSAnQGNsZXJrL2NsZXJrLXJlYWN0J1xuXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuL1N0eWxlJ1xuaW1wb3J0IHNlc3Npb25BY3Rpb25zIGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMvc2Vzc2lvbi9pbmRleCdcblxuaW1wb3J0IHVzZUJpbmREaXNwYXRjaCBmcm9tICcuLi9ob29rcy9yZWR1eC91c2VCaW5kRGlzcGF0Y2gnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9IZWFkZXIvSW5kZXgnXG5pbXBvcnQgeyBMaW5lIH0gZnJvbSAnLi4vQ29tbW9uQ29tcG9uZW50cy9MaW5lJ1xuLy8gaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9Db21tb25Db21wb25lbnRzL0J1dHRvbi9JbmRleCdcblxuaW1wb3J0IEJpb0Zvcm0gZnJvbSAnLi9jb21wb25lbnRzL0Jpb0Zvcm0vSW5kZXgnXG4vLyBpbXBvcnQgQmFzaWNJbmZvcm1hdGlvbiBmcm9tICcuLi9BdXRoRmxvdy9jb21wb25lbnRzL0Jhc2ljSW5mb3JtYXRpb24vSW5kZXgnXG4vLyBpbXBvcnQgeyBJTklUX0RJRF9GT1JNX1ZBTFVFUyB9IGZyb20gJy4uL3V0aWwvZm9ybV9oZWxwZXJzL2luaXRfZm9ybV92YWx1ZXMnXG4vLyBpbXBvcnQgdXNlQWRkVmNDcmVkIGZyb20gJy4uL0RJRC9ob29rcy91c2VBZGRWY0NyZWQnXG5cbmNvbnN0IERhc2hib2FyZCA9ICgpID0+IHtcbiAgY29uc3QgeyBnZXRDdXJyZW50VXNlciB9ID0gdXNlQmluZERpc3BhdGNoKHNlc3Npb25BY3Rpb25zKVxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3IoKHMpID0+IHMuc2Vzc2lvbi5jdXJyZW50VXNlcilcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjbGVya1dyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjbC1tYWluJylbMF1cbiAgICBpZiAoY2xlcmtXcmFwcGVyKSBjbGVya1dyYXBwZXIuaW5zZXJ0QmVmb3JlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiaW8tZGFzaGJvYXJkJyksIG51bGwpXG4gICAgaWYgKHVzZXIpIGdldEN1cnJlbnRVc2VyKHVzZXI/LmlkKVxuICB9LCBbXSlcbiAgLy8gY29uc3QgYWRkVmNDcmVkID0gdXNlQWRkVmNDcmVkKClcbiAgcmV0dXJuIChcbiAgICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxkaXY+TG9hZGluZy4uLjwvZGl2Pn0+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8SGVhZGVyIHVzZXI9e3VzZXJ9IC8+XG4gICAgICAgIDxMaW5lIC8+XG4gICAgICAgIDxVc2VyUHJvZmlsZSAvPlxuICAgICAgICB7LyogPEZvcm1pa1xuICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e0lOSVRfRElEX0ZPUk1fVkFMVUVTfVxuICAgICAgICAgIG9uU3VibWl0PXsodmFsdWVzLCBwYXJhbXMpID0+IGFkZFZjQ3JlZCh2YWx1ZXMsIHBhcmFtcyl9XG4gICAgICAgID5cbiAgICAgICAgICB7KHsgaXNTdWJtaXR0aW5nLCB2YWx1ZXMsIHNldEZpZWxkVmFsdWUgfSkgPT4gKFxuICAgICAgICAgICAgPEZvcm1Db250YWluZXI+XG4gICAgICAgICAgICAgIDxCYXNpY0luZm9ybWF0aW9uIHNldEZpZWxkVmFsdWU9e3NldEZpZWxkVmFsdWV9IC8+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICB3aWR0aD1cIjQwJVwiXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMi41dndcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj1cInZhcigtLW0tZWxhc3Rvcy10aGVtZSlcIlxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYWRkVmNDcmVkKHZhbHVlcyl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBVcGRhdGUgRGVjZW50cmFsaXplZCBJZGVudGl0eVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvRm9ybUNvbnRhaW5lcj5cbiAgICAgICAgICApfVxuICAgICAgICA8L0Zvcm1paz4gKi99XG4gICAgICAgIDxMaW5lIC8+XG4gICAgICAgIDxCaW9Gb3JtIHVzZXI9e3VzZXJ9IC8+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L1N1c3BlbnNlPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZFxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbi8vIGltcG9ydCB7IEZpVXNlciB9IGZyb20gJ3JlYWN0LWljb25zL2ZpJ1xuXG5leHBvcnQgY29uc3QgRm9ybUNvbnRhaW5lciA9IHN0eWxlZCgnZGl2JylgIFxuICB3aWR0aDogNzAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDN2dyBhdXRvO1xuXG5gXG5cbmV4cG9ydCBjb25zdCBMYWJlbCA9IHN0eWxlZCgnbGFiZWwnKWAgXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9jaXZpbC1kZXYuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vcHJvZmlsZV9pbWFnZXMvNjRfMS5wbmcnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgaGVpZ2h0OiA0ZW07XG4gIHdpZHRoOiA0ZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuYFxuXG5leHBvcnQgY29uc3QgVXBsb2FkSW5wdXQgPSBzdHlsZWQoJ2lucHV0JylgIFxuICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICBsZWZ0OiAtOTk5OTlyZW07XG5gXG5cbi8vIGV4cG9ydCBjb25zdCBVcGxvYWRJY29uID0gc3R5bGVkKEZpVXNlcilgXG4vLyAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gYFxuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWAgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDR2dztcblxuICAuY2wtY29tcG9uZW50LmNsLXVzZXItcHJvZmlsZSAuY2wtbWFpbiB7XG4gICAgbWFyZ2luOiAzZW0gMCAwIDFlbTtcbn1cbmBcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHVzZU9uU3VibWl0IGZyb20gJy4vaG9va3MvdXNlT25TdWJtaXQnXG5cbmltcG9ydCB7XG4gIENvbnRhaW5lciwgT3V0ZXJDb250YWluZXIsIEhlYWRlckNvbnRhaW5lcixcbiAgSGVhZGVyLCBTdWJIZWFkZXIsIEZpZWxkQ29udGFpbmVyLFxuICBGaWVsZExhYmVsLCBUZXh0YXJlYSwgQnV0dG9uQ29udGFpbmVyLFxufSBmcm9tICcuL1N0eWxlL0luZGV4J1xuXG5jb25zdCBCaW9Gb3JtID0gKHsgdXNlciB9KSA9PiB7XG4gIGNvbnN0IHVzZXJEYXRhID0gdXNlU2VsZWN0b3IoKHMpID0+IHMudXNlcnMpW3VzZXI/LmlkXVxuICBjb25zdCBbYmlvLCBzZXRCaW9dID0gdXNlU3RhdGUodXNlckRhdGE/LmJpbylcbiAgY29uc3QgW2V4cGVyaWVuY2UsIHNldEV4cGVyaWVuY2VdID0gdXNlU3RhdGUodXNlckRhdGE/LmV4cGVyaWVuY2UpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRCaW8odXNlckRhdGE/LmJpbylcbiAgICBzZXRFeHBlcmllbmNlKHVzZXJEYXRhPy5leHBlcmllbmNlKVxuICB9LCBbdXNlckRhdGFdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY2xlcmtXcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2wtbWFpbicpWzBdXG4gICAgaWYgKGNsZXJrV3JhcHBlcikgY2xlcmtXcmFwcGVyLmluc2VydEJlZm9yZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmlvLWRhc2hib2FyZCcpLCBudWxsKVxuICB9LCBbXSlcblxuICBjb25zdCBvblN1Ym1pdCA9IHVzZU9uU3VibWl0KGJpbywgZXhwZXJpZW5jZSwgc2V0QmlvLCBzZXRFeHBlcmllbmNlKVxuICByZXR1cm4gKFxuICAgIDxPdXRlckNvbnRhaW5lciBpZD1cImJpby1kYXNoYm9hcmRcIj5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxIZWFkZXJDb250YWluZXI+XG4gICAgICAgICAgPEhlYWRlcj5CaW8gSW5mb3JtYXRpb248L0hlYWRlcj5cbiAgICAgICAgICA8U3ViSGVhZGVyPk1hbmFnZSBCaW8gYW5kIEV4cGVyaWVuY2UgSW5mb3JtYXRpb248L1N1YkhlYWRlcj5cbiAgICAgICAgPC9IZWFkZXJDb250YWluZXI+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XG4gICAgICAgICAgPEZpZWxkQ29udGFpbmVyPlxuICAgICAgICAgICAgPEZpZWxkTGFiZWw+XG4gICAgICAgICAgICAgIEJpb1xuICAgICAgICAgICAgPC9GaWVsZExhYmVsPlxuICAgICAgICAgICAgPFRleHRhcmVhIHZhbHVlPXtiaW99IG9uQ2hhbmdlPXsoZSkgPT4gc2V0QmlvKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgICA8L0ZpZWxkQ29udGFpbmVyPlxuICAgICAgICAgIDxGaWVsZENvbnRhaW5lcj5cbiAgICAgICAgICAgIDxGaWVsZExhYmVsPlxuICAgICAgICAgICAgICBFeHBlcmllbmNlXG4gICAgICAgICAgICA8L0ZpZWxkTGFiZWw+XG4gICAgICAgICAgICA8VGV4dGFyZWEgdmFsdWU9e2V4cGVyaWVuY2V9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0RXhwZXJpZW5jZShlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgICAgPC9GaWVsZENvbnRhaW5lcj5cbiAgICAgICAgICA8QnV0dG9uQ29udGFpbmVyPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2F2ZSBCaW8gSW5mb3JtYXRpb248L2J1dHRvbj5cbiAgICAgICAgICA8L0J1dHRvbkNvbnRhaW5lcj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9PdXRlckNvbnRhaW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCaW9Gb3JtXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgT3V0ZXJDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpYCBcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG5gXG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpYFxuICBwYWRkaW5nOiAzZW0gMmVtO1xuICBib3gtc2hhZG93OiAwcHggMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGZvbnQtZmFtaWx5OiBcIlNvdXJjZSBTYW5zIFByb1wiLCBzYW5zLXNlcmlmOztcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzE1MTUxNTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XG4gIHdpZHRoOiA4NDBweDtcbmBcblxuZXhwb3J0IGNvbnN0IEhlYWRlckNvbnRhaW5lciA9IHN0eWxlZCgnZGl2JylgXG4gIG1hcmdpbi1ib3R0b206IDEuMjVlbTtcblxuYFxuXG5leHBvcnQgY29uc3QgSGVhZGVyID0gc3R5bGVkKCdoMScpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbjogMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcblxuYFxuXG5leHBvcnQgY29uc3QgU3ViSGVhZGVyID0gc3R5bGVkKCdwJylgXG4gIGNvbG9yOiAjODA4MDgwO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICBtYXJnaW46IDAgMCAxcmVtIDA7XG5gXG5cbmV4cG9ydCBjb25zdCBGaWVsZENvbnRhaW5lciA9IHN0eWxlZCgnZGl2JylgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWJvdHRvbTogMS41ZW07XG5gXG5cbmV4cG9ydCBjb25zdCBGaWVsZExhYmVsID0gc3R5bGVkKCdkaXYnKWAgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDAgMCAzMCU7XG4gIG1hcmdpbi1yaWdodDogMC41ZW07XG4gIHBhZGRpbmctdG9wOiAxLjVlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMjVlbTtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1jbGVyay1sYWJlbC1mb250LXdlaWdodCwgNjAwKTtcblxuYFxuXG5leHBvcnQgY29uc3QgVGV4dGFyZWEgPSBzdHlsZWQoJ3RleHRhcmVhJylgXG4gIG1pbi1oZWlnaHQ6IDR2aDtcbiAgZmxleDogMTtcbiAgcGFkZGluZy10b3A6IDEuNWVtO1xuICBwYWRkaW5nLWJvdHRvbTogMS41ZW07XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBsaW5lLWhlaWdodDogMS4yNWVtO1xuXG4gIHRyYW5zaXRpb246IGNvbG9yIC4ycyBlYXNlLWluLW91dCxiYWNrZ3JvdW5kLWNvbG9yIC4ycyBlYXNlLWluLW91dCxib3JkZXItY29sb3IgLjJzIGVhc2UtaW4tb3V0LGJveC1zaGFkb3cgLjJzIGVhc2UtaW4tb3V0O1xuICBwYWRkaW5nOiBjYWxjKDFlbSAtIDJweCk7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZTVlNWU1O1xuICBjb2xvcjogIzE1MTUxNTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cbiAgOmZvY3VzIHtcbiAgICBib3JkZXItY29sb3I6ICM4N0MyMzI7XG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgICBvdXRsaW5lLW9mZnNldDogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBCdXR0b25Db250YWluZXIgPSBzdHlsZWQoJ2RpdicpYCBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgbWFyZ2luLXRvcDogMmVtO1xuICB3aWR0aDogMTAwJTtcblxuICBidXR0b24ge1xuICAgIHRyYW5zaXRpb246IGNvbG9yIC4ycyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAuMnMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAuMnMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjJzIGVhc2UtaW4tb3V0O1xuICAgIHBhZGRpbmc6IGNhbGMoMWVtIC0gMnB4KTtcbiAgICBsaW5lLWhlaWdodDogMS4yNXJlbTtcbiAgICBiYWNrZ3JvdW5kOiAjODdDMjMyO1xuICAgIGJvcmRlci1jb2xvcjogIzg3QzIzMjsgICAgXG4gICAgYm9yZGVyLXJhZGl1czogMC41ZW07XG4gICAgYm9yZGVyOiAycHggc29saWQgI2U1ZTVlNTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAxZW0gMmVtO1xuICAgIGJvcmRlcjogMDtcbiAgICBvdXRsaW5lOiAwO1xuICB9XG5cbmBcbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSdcbmltcG9ydCB1c2VCaW5kRGlzcGF0Y2ggZnJvbSAnLi4vLi4vLi4vLi4vaG9va3MvcmVkdXgvdXNlQmluZERpc3BhdGNoJ1xuaW1wb3J0IHVzZXJBY3Rpb25zIGZyb20gJy4uLy4uLy4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvdXNlcnMnXG5cbmV4cG9ydCBkZWZhdWx0IChiaW8sIGV4cGVyaWVuY2UpID0+IHtcbiAgY29uc3QgY3VycmVudFVzZXIgPSB1c2VTZWxlY3RvcigocykgPT4gcy5zZXNzaW9uLmN1cnJlbnRVc2VyKVxuICBjb25zdCB7IHVwZGF0ZVVzZXJCaW9JbmZvcm1hdGlvbiB9ID0gdXNlQmluZERpc3BhdGNoKHVzZXJBY3Rpb25zKVxuICByZXR1cm4gdXNlQ2FsbGJhY2soKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIHRvYXN0LnByb21pc2UodXBkYXRlVXNlckJpb0luZm9ybWF0aW9uKGN1cnJlbnRVc2VyPy5pZCwgYmlvIHx8IG51bGwsIGV4cGVyaWVuY2UgfHwgbnVsbCksXG4gICAgICB7XG4gICAgICAgIHBlbmRpbmc6ICdTYXZpbmcgQmlvIEluZnJvbWF0aW9uLi4uJyxcbiAgICAgICAgc3VjY2VzczogJ0JpbyBJbmZvIFN1Y2NlZnVsbHkgU2F2ZWQhJyxcbiAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICByZW5kZXIoeyBkYXRhOiBlcnJvckRhdGEgfSkge1xuICAgICAgICAgICAgY29uc3QgeyByZXNwb25zZSB9ID0gZXJyb3JEYXRhXG4gICAgICAgICAgICBjb25zdCB7IGRhdGE6IHJlc3BvbnNlRGF0YSB9ID0gcmVzcG9uc2VcbiAgICAgICAgICAgIHJldHVybiBgJHtyZXNwb25zZURhdGEubXNnfSDwn6SvIGBcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgfSwgW2N1cnJlbnRVc2VyLCBiaW8sIGV4cGVyaWVuY2VdKVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gJy4uLy4uLy4uL0NvbW1vbkNvbXBvbmVudHMvUHJvZ3Jlc3NCYXIvSW5kZXgnXG5pbXBvcnQgdXNlT3Blbk1vZGFsIGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZU9wZW5Nb2RhbCdcblxuaW1wb3J0IHsgSUNPTl9GT1JNIH0gZnJvbSAnLi4vLi4vLi4vQXBwL01vZGFsL0luZGV4J1xuaW1wb3J0IHsgQ29udGFpbmVyLCBGbGV4RGl2LCBVc2VySWNvbiB9IGZyb20gJy4vU3R5bGUnXG5cbmNvbnN0IEhlYWRlciA9ICh7IHVzZXIgfSkgPT4ge1xuICBjb25zdCBvcGVuTW9kYWwgPSB1c2VPcGVuTW9kYWwoSUNPTl9GT1JNKVxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8aDE+e3VzZXI/LnVzZXJuYW1lfTwvaDE+XG4gICAgICA8RmxleERpdj5cbiAgICAgICAgPFVzZXJJY29uIHNyYz17dXNlcj8uaWNvblNyYyB8fCAnaHR0cHM6Ly9jaXZpbC1kZXYuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vcHJvZmlsZV9pbWdfMS5wbmcnfSBvbkNsaWNrPXtvcGVuTW9kYWx9IGFsdD1cIlwiIC8+XG4gICAgICAgIDxQcm9ncmVzc0JhciB2YWx1ZT17dXNlcj8uY2l2aWxpdHl9IG1heFZhbHVlPXsyMH0gLz5cbiAgICAgIDwvRmxleERpdj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQoJ2hlYWRlcicpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LWdyb3c6IDE7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGgxIHtcbiAgICBjb2xvcjogdmFyKC0tYmctYWNjZW50KTtcbiAgICBmb250LXNpemU6IDEuNGVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBGbGV4RGl2ID0gc3R5bGVkKCdkaXYnKWBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuYFxuXG5leHBvcnQgY29uc3QgVXNlckljb24gPSBzdHlsZWQoJ2ltZycpYCAgXG4gIG1hcmdpbi1yaWdodDogMXZ3O1xuICBoZWlnaHQ6IDJ2dztcbiAgd2lkdGg6IDJ2dztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuXG5gXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9ncmVzc0JhckNvbnRhaW5lciIsIlByb2dyZXNzVmFsdWUiLCJQcm9ncmVzc0JhciIsInZhbHVlIiwibWF4VmFsdWUiLCJzdHlsZWQiLCJrZXlmcmFtZXMiLCJsb2FkIiwicmF0aW8iLCJwcm9wcyIsInVzZUVmZmVjdCIsIlN1c3BlbnNlIiwidXNlU2VsZWN0b3IiLCJVc2VyUHJvZmlsZSIsIkNvbnRhaW5lciIsInNlc3Npb25BY3Rpb25zIiwidXNlQmluZERpc3BhdGNoIiwiSGVhZGVyIiwiTGluZSIsIkJpb0Zvcm0iLCJEYXNoYm9hcmQiLCJnZXRDdXJyZW50VXNlciIsInVzZXIiLCJzIiwic2Vzc2lvbiIsImN1cnJlbnRVc2VyIiwiY2xlcmtXcmFwcGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiaW5zZXJ0QmVmb3JlIiwiZ2V0RWxlbWVudEJ5SWQiLCJpZCIsIkZvcm1Db250YWluZXIiLCJMYWJlbCIsIlVwbG9hZElucHV0IiwidXNlU3RhdGUiLCJ1c2VPblN1Ym1pdCIsIk91dGVyQ29udGFpbmVyIiwiSGVhZGVyQ29udGFpbmVyIiwiU3ViSGVhZGVyIiwiRmllbGRDb250YWluZXIiLCJGaWVsZExhYmVsIiwiVGV4dGFyZWEiLCJCdXR0b25Db250YWluZXIiLCJ1c2VyRGF0YSIsInVzZXJzIiwiYmlvIiwic2V0QmlvIiwiZXhwZXJpZW5jZSIsInNldEV4cGVyaWVuY2UiLCJvblN1Ym1pdCIsImUiLCJ0YXJnZXQiLCJ1c2VDYWxsYmFjayIsInRvYXN0IiwidXNlckFjdGlvbnMiLCJ1cGRhdGVVc2VyQmlvSW5mb3JtYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsInByb21pc2UiLCJwZW5kaW5nIiwic3VjY2VzcyIsImVycm9yIiwicmVuZGVyIiwiZXJyb3JEYXRhIiwiZGF0YSIsInJlc3BvbnNlIiwicmVzcG9uc2VEYXRhIiwibXNnIiwidXNlT3Blbk1vZGFsIiwiSUNPTl9GT1JNIiwiRmxleERpdiIsIlVzZXJJY29uIiwib3Blbk1vZGFsIiwidXNlcm5hbWUiLCJpY29uU3JjIiwiY2l2aWxpdHkiXSwic291cmNlUm9vdCI6IiJ9