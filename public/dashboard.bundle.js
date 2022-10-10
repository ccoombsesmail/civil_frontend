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
  }, []); // const addVcCred = useAddVcCred()

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
var UploadInput = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('input')(_templateObject3 || (_templateObject3 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([" \n  position: absolute; \n  left: -99999rem;\n"]))); // export const UploadIcon = styled(FiUser)`
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0JELENBbkJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTS9CLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQWM7RUFBQSxJQUFYSyxJQUFXLFFBQVhBLElBQVc7RUFDM0IsSUFBTWtELFNBQVMsR0FBR0osK0RBQVksQ0FBQ0MsdURBQUQsQ0FBOUI7RUFDQSxvQkFDRSwyREFBQyw2Q0FBRCxxQkFDRSx1RUFBSy9DLElBQUwsYUFBS0EsSUFBTCx1QkFBS0EsSUFBSSxDQUFFbUQsUUFBWCxDQURGLGVBRUUsMkRBQUMsMkNBQUQscUJBQ0UsMkRBQUMsNENBQUQ7SUFBVSxHQUFHLEVBQUUsQ0FBQW5ELElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosWUFBQUEsSUFBSSxDQUFFb0QsT0FBTixLQUFpQixnRUFBaEM7SUFBa0csT0FBTyxFQUFFRixTQUEzRztJQUFzSCxHQUFHLEVBQUM7RUFBMUgsRUFERixlQUVFLDJEQUFDLDJFQUFEO0lBQWEsS0FBSyxFQUFFbEQsSUFBRixhQUFFQSxJQUFGLHVCQUFFQSxJQUFJLENBQUVxRCxRQUExQjtJQUFvQyxRQUFRLEVBQUU7RUFBOUMsRUFGRixDQUZGLENBREY7QUFTRCxDQVhEOztBQWFBLGlFQUFlMUQsTUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBO0FBRU8sSUFBTUgsU0FBUyxHQUFHVCw2REFBTSxDQUFDLFFBQUQsQ0FBVCx5VEFBZjtBQVlBLElBQU1pRSxPQUFPLEdBQUdqRSw2REFBTSxDQUFDLEtBQUQsQ0FBVCx1TEFBYjtBQU1BLElBQU1rRSxRQUFRLEdBQUdsRSw2REFBTSxDQUFDLEtBQUQsQ0FBVCwyTkFBZCIsInNvdXJjZXMiOlsid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL0NvbW1vbkNvbXBvbmVudHMvUHJvZ3Jlc3NCYXIvSW5kZXguanN4Iiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL0NvbW1vbkNvbXBvbmVudHMvUHJvZ3Jlc3NCYXIvU3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvRGFzaGJvYXJkL0luZGV4LmpzeCIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9EYXNoYm9hcmQvU3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvRGFzaGJvYXJkL2NvbXBvbmVudHMvQmlvRm9ybS9JbmRleC5qc3giLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvRGFzaGJvYXJkL2NvbXBvbmVudHMvQmlvRm9ybS9TdHlsZS9JbmRleC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9EYXNoYm9hcmQvY29tcG9uZW50cy9CaW9Gb3JtL2hvb2tzL3VzZU9uU3VibWl0LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL0Rhc2hib2FyZC9jb21wb25lbnRzL0hlYWRlci9JbmRleC5qc3giLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvRGFzaGJvYXJkL2NvbXBvbmVudHMvSGVhZGVyL1N0eWxlL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgUHJvZ3Jlc3NCYXJDb250YWluZXIsIFByb2dyZXNzVmFsdWUgfSBmcm9tICcuL1N0eWxlL2luZGV4J1xuXG5jb25zdCBQcm9ncmVzc0JhciA9ICh7IHZhbHVlLCBtYXhWYWx1ZSB9KSA9PiAoXG4gIDxQcm9ncmVzc0JhckNvbnRhaW5lcj5cbiAgICA8UHJvZ3Jlc3NWYWx1ZSByYXRpbz17dmFsdWUgLyBtYXhWYWx1ZX0gLz5cbiAgPC9Qcm9ncmVzc0JhckNvbnRhaW5lcj5cbilcblxuZXhwb3J0IGRlZmF1bHQgUHJvZ3Jlc3NCYXJcbiIsImltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmNvbnN0IGxvYWQgPSAocmF0aW8pID0+IGtleWZyYW1lc2BcbiAgMCUgeyBtYXgtd2lkdGg6IDA7IH1cbiAgMTAwJSB7IG1heC13aWR0aDogJHtyYXRpbyAqIDEwMH0lOyB9XG5gXG5cbmV4cG9ydCBjb25zdCBQcm9ncmVzc0JhckNvbnRhaW5lciA9IHN0eWxlZCgnZGl2JylgIFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8qIHBhZGRpbmc6IDAgLjJlbTsgKi9cbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAydmg7XG4gIHdpZHRoOiAxMHZ3O1xuXG5gXG5cbmV4cG9ydCBjb25zdCBQcm9ncmVzc1ZhbHVlID0gc3R5bGVkKCdkaXYnKWAgXG4gIGFuaW1hdGlvbjogJHsocHJvcHMpID0+IGxvYWQocHJvcHMucmF0aW8pfSAxcyBlYXNlLW91dCBub3JtYWwgZm9yd2FyZHM7XG4gIGFuaW1hdGlvbi1kZWxheTogMS41cztcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xuICBiYWNrZ3JvdW5kOiAjNDdEREE2O1xuICBoZWlnaHQ6IDEuOHZoO1xuICB3aWR0aDogMTB2dztcbiAgbWF4LXdpZHRoOiAwO1xuYFxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgU3VzcGVuc2UgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBVc2VyUHJvZmlsZSB9IGZyb20gJ0BjbGVyay9jbGVyay1yZWFjdCdcblxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi9TdHlsZSdcbmltcG9ydCBzZXNzaW9uQWN0aW9ucyBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zL3Nlc3Npb24vaW5kZXgnXG5cbmltcG9ydCB1c2VCaW5kRGlzcGF0Y2ggZnJvbSAnLi4vaG9va3MvcmVkdXgvdXNlQmluZERpc3BhdGNoJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvSGVhZGVyL0luZGV4J1xuaW1wb3J0IHsgTGluZSB9IGZyb20gJy4uL0NvbW1vbkNvbXBvbmVudHMvTGluZSdcbi8vIGltcG9ydCBCdXR0b24gZnJvbSAnLi4vQ29tbW9uQ29tcG9uZW50cy9CdXR0b24vSW5kZXgnXG5cbmltcG9ydCBCaW9Gb3JtIGZyb20gJy4vY29tcG9uZW50cy9CaW9Gb3JtL0luZGV4J1xuLy8gaW1wb3J0IEJhc2ljSW5mb3JtYXRpb24gZnJvbSAnLi4vQXV0aEZsb3cvY29tcG9uZW50cy9CYXNpY0luZm9ybWF0aW9uL0luZGV4J1xuLy8gaW1wb3J0IHsgSU5JVF9ESURfRk9STV9WQUxVRVMgfSBmcm9tICcuLi91dGlsL2Zvcm1faGVscGVycy9pbml0X2Zvcm1fdmFsdWVzJ1xuLy8gaW1wb3J0IHVzZUFkZFZjQ3JlZCBmcm9tICcuLi9ESUQvaG9va3MvdXNlQWRkVmNDcmVkJ1xuXG5jb25zdCBEYXNoYm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IHsgZ2V0Q3VycmVudFVzZXIgfSA9IHVzZUJpbmREaXNwYXRjaChzZXNzaW9uQWN0aW9ucylcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKChzKSA9PiBzLnNlc3Npb24uY3VycmVudFVzZXIpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY2xlcmtXcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2wtbWFpbicpWzBdXG4gICAgaWYgKGNsZXJrV3JhcHBlcikgY2xlcmtXcmFwcGVyLmluc2VydEJlZm9yZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmlvLWRhc2hib2FyZCcpLCBudWxsKVxuICAgIGlmICh1c2VyKSBnZXRDdXJyZW50VXNlcih1c2VyPy5pZClcbiAgfSwgW10pXG4gIC8vIGNvbnN0IGFkZFZjQ3JlZCA9IHVzZUFkZFZjQ3JlZCgpXG4gIHJldHVybiAoXG4gICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8ZGl2PkxvYWRpbmcuLi48L2Rpdj59PlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPEhlYWRlciB1c2VyPXt1c2VyfSAvPlxuICAgICAgICA8TGluZSAvPlxuICAgICAgICA8VXNlclByb2ZpbGUgLz5cbiAgICAgICAgey8qIDxGb3JtaWtcbiAgICAgICAgICBpbml0aWFsVmFsdWVzPXtJTklUX0RJRF9GT1JNX1ZBTFVFU31cbiAgICAgICAgICBvblN1Ym1pdD17KHZhbHVlcywgcGFyYW1zKSA9PiBhZGRWY0NyZWQodmFsdWVzLCBwYXJhbXMpfVxuICAgICAgICA+XG4gICAgICAgICAgeyh7IGlzU3VibWl0dGluZywgdmFsdWVzLCBzZXRGaWVsZFZhbHVlIH0pID0+IChcbiAgICAgICAgICAgIDxGb3JtQ29udGFpbmVyPlxuICAgICAgICAgICAgICA8QmFzaWNJbmZvcm1hdGlvbiBzZXRGaWVsZFZhbHVlPXtzZXRGaWVsZFZhbHVlfSAvPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgd2lkdGg9XCI0MCVcIlxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjIuNXZ3XCJcbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCJ2YXIoLS1tLWVsYXN0b3MtdGhlbWUpXCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNTdWJtaXR0aW5nfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFkZFZjQ3JlZCh2YWx1ZXMpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgVXBkYXRlIERlY2VudHJhbGl6ZWQgSWRlbnRpdHlcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0Zvcm1Db250YWluZXI+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9Gb3JtaWs+ICovfVxuICAgICAgICA8TGluZSAvPlxuICAgICAgICA8QmlvRm9ybSB1c2VyPXt1c2VyfSAvPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9TdXNwZW5zZT5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmRcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG4vLyBpbXBvcnQgeyBGaVVzZXIgfSBmcm9tICdyZWFjdC1pY29ucy9maSdcblxuZXhwb3J0IGNvbnN0IEZvcm1Db250YWluZXIgPSBzdHlsZWQoJ2RpdicpYCBcbiAgd2lkdGg6IDcwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAzdncgYXV0bztcblxuYFxuXG5leHBvcnQgY29uc3QgTGFiZWwgPSBzdHlsZWQoJ2xhYmVsJylgIFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vY2l2aWwtZGV2LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3Byb2ZpbGVfaW1hZ2VzLzY0XzEucG5nJyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGhlaWdodDogNGVtO1xuICB3aWR0aDogNGVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbmBcblxuZXhwb3J0IGNvbnN0IFVwbG9hZElucHV0ID0gc3R5bGVkKCdpbnB1dCcpYCBcbiAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgbGVmdDogLTk5OTk5cmVtO1xuYFxuXG4vLyBleHBvcnQgY29uc3QgVXBsb2FkSWNvbiA9IHN0eWxlZChGaVVzZXIpYFxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xuLy8gICBib3JkZXItcmFkaXVzOiA1MCU7XG4vLyAgIGN1cnNvcjogcG9pbnRlcjtcbi8vIGBcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZCgnZGl2JylgIFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiA0dnc7XG5cbiAgLmNsLWNvbXBvbmVudC5jbC11c2VyLXByb2ZpbGUgLmNsLW1haW4ge1xuICAgIG1hcmdpbjogM2VtIDAgMCAxZW07XG59XG5gXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB1c2VPblN1Ym1pdCBmcm9tICcuL2hvb2tzL3VzZU9uU3VibWl0J1xuXG5pbXBvcnQge1xuICBDb250YWluZXIsIE91dGVyQ29udGFpbmVyLCBIZWFkZXJDb250YWluZXIsXG4gIEhlYWRlciwgU3ViSGVhZGVyLCBGaWVsZENvbnRhaW5lcixcbiAgRmllbGRMYWJlbCwgVGV4dGFyZWEsIEJ1dHRvbkNvbnRhaW5lcixcbn0gZnJvbSAnLi9TdHlsZS9JbmRleCdcblxuY29uc3QgQmlvRm9ybSA9ICh7IHVzZXIgfSkgPT4ge1xuICBjb25zdCB1c2VyRGF0YSA9IHVzZVNlbGVjdG9yKChzKSA9PiBzLnVzZXJzKVt1c2VyPy5pZF1cbiAgY29uc3QgW2Jpbywgc2V0QmlvXSA9IHVzZVN0YXRlKHVzZXJEYXRhPy5iaW8pXG4gIGNvbnN0IFtleHBlcmllbmNlLCBzZXRFeHBlcmllbmNlXSA9IHVzZVN0YXRlKHVzZXJEYXRhPy5leHBlcmllbmNlKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0QmlvKHVzZXJEYXRhPy5iaW8pXG4gICAgc2V0RXhwZXJpZW5jZSh1c2VyRGF0YT8uZXhwZXJpZW5jZSlcbiAgfSwgW3VzZXJEYXRhXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGNsZXJrV3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NsLW1haW4nKVswXVxuICAgIGlmIChjbGVya1dyYXBwZXIpIGNsZXJrV3JhcHBlci5pbnNlcnRCZWZvcmUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jpby1kYXNoYm9hcmQnKSwgbnVsbClcbiAgfSwgW10pXG5cbiAgY29uc3Qgb25TdWJtaXQgPSB1c2VPblN1Ym1pdChiaW8sIGV4cGVyaWVuY2UsIHNldEJpbywgc2V0RXhwZXJpZW5jZSlcbiAgcmV0dXJuIChcbiAgICA8T3V0ZXJDb250YWluZXIgaWQ9XCJiaW8tZGFzaGJvYXJkXCI+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8SGVhZGVyQ29udGFpbmVyPlxuICAgICAgICAgIDxIZWFkZXI+QmlvIEluZm9ybWF0aW9uPC9IZWFkZXI+XG4gICAgICAgICAgPFN1YkhlYWRlcj5NYW5hZ2UgQmlvIGFuZCBFeHBlcmllbmNlIEluZm9ybWF0aW9uPC9TdWJIZWFkZXI+XG4gICAgICAgIDwvSGVhZGVyQ29udGFpbmVyPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxuICAgICAgICAgIDxGaWVsZENvbnRhaW5lcj5cbiAgICAgICAgICAgIDxGaWVsZExhYmVsPlxuICAgICAgICAgICAgICBCaW9cbiAgICAgICAgICAgIDwvRmllbGRMYWJlbD5cbiAgICAgICAgICAgIDxUZXh0YXJlYSB2YWx1ZT17YmlvfSBvbkNoYW5nZT17KGUpID0+IHNldEJpbyhlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgICAgPC9GaWVsZENvbnRhaW5lcj5cbiAgICAgICAgICA8RmllbGRDb250YWluZXI+XG4gICAgICAgICAgICA8RmllbGRMYWJlbD5cbiAgICAgICAgICAgICAgRXhwZXJpZW5jZVxuICAgICAgICAgICAgPC9GaWVsZExhYmVsPlxuICAgICAgICAgICAgPFRleHRhcmVhIHZhbHVlPXtleHBlcmllbmNlfSBvbkNoYW5nZT17KGUpID0+IHNldEV4cGVyaWVuY2UoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICAgIDwvRmllbGRDb250YWluZXI+XG4gICAgICAgICAgPEJ1dHRvbkNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlNhdmUgQmlvIEluZm9ybWF0aW9uPC9idXR0b24+XG4gICAgICAgICAgPC9CdXR0b25Db250YWluZXI+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvT3V0ZXJDb250YWluZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmlvRm9ybVxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IE91dGVyQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWAgXG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuYFxuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWBcbiAgcGFkZGluZzogM2VtIDJlbTtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBmb250LWZhbWlseTogXCJTb3VyY2UgU2FucyBQcm9cIiwgc2Fucy1zZXJpZjs7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICMxNTE1MTU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xuICB3aWR0aDogODQwcHg7XG5gXG5cbmV4cG9ydCBjb25zdCBIZWFkZXJDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpYFxuICBtYXJnaW4tYm90dG9tOiAxLjI1ZW07XG5cbmBcblxuZXhwb3J0IGNvbnN0IEhlYWRlciA9IHN0eWxlZCgnaDEnKWBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW46IDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG5cbmBcblxuZXhwb3J0IGNvbnN0IFN1YkhlYWRlciA9IHN0eWxlZCgncCcpYFxuICBjb2xvcjogIzgwODA4MDtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgbWFyZ2luOiAwIDAgMXJlbSAwO1xuYFxuXG5leHBvcnQgY29uc3QgRmllbGRDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpYFxuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1ib3R0b206IDEuNWVtO1xuYFxuXG5leHBvcnQgY29uc3QgRmllbGRMYWJlbCA9IHN0eWxlZCgnZGl2JylgIFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAwIDAgMzAlO1xuICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xuICBwYWRkaW5nLXRvcDogMS41ZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjI1ZW07XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBmb250LXdlaWdodDogdmFyKC0tY2xlcmstbGFiZWwtZm9udC13ZWlnaHQsIDYwMCk7XG5cbmBcblxuZXhwb3J0IGNvbnN0IFRleHRhcmVhID0gc3R5bGVkKCd0ZXh0YXJlYScpYFxuICBtaW4taGVpZ2h0OiA0dmg7XG4gIGZsZXg6IDE7XG4gIHBhZGRpbmctdG9wOiAxLjVlbTtcbiAgcGFkZGluZy1ib3R0b206IDEuNWVtO1xuICBmb250LXNpemU6IDFlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMjVlbTtcblxuICB0cmFuc2l0aW9uOiBjb2xvciAuMnMgZWFzZS1pbi1vdXQsYmFja2dyb3VuZC1jb2xvciAuMnMgZWFzZS1pbi1vdXQsYm9yZGVyLWNvbG9yIC4ycyBlYXNlLWluLW91dCxib3gtc2hhZG93IC4ycyBlYXNlLWluLW91dDtcbiAgcGFkZGluZzogY2FsYygxZW0gLSAycHgpO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcbiAgYm9yZGVyOiAycHggc29saWQgI2U1ZTVlNTtcbiAgY29sb3I6ICMxNTE1MTU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXG4gIDpmb2N1cyB7XG4gICAgYm9yZGVyLWNvbG9yOiAjODdDMjMyO1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gICAgb3V0bGluZS1vZmZzZXQ6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgQnV0dG9uQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWAgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIG1hcmdpbi10b3A6IDJlbTtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgYnV0dG9uIHtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAuMnMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgLjJzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgLjJzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4ycyBlYXNlLWluLW91dDtcbiAgICBwYWRkaW5nOiBjYWxjKDFlbSAtIDJweCk7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XG4gICAgYmFja2dyb3VuZDogIzg3QzIzMjtcbiAgICBib3JkZXItY29sb3I6ICM4N0MyMzI7ICAgIFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlNWU1ZTU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMWVtIDJlbTtcbiAgICBib3JkZXI6IDA7XG4gICAgb3V0bGluZTogMDtcbiAgfVxuXG5gXG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknXG5pbXBvcnQgdXNlQmluZERpc3BhdGNoIGZyb20gJy4uLy4uLy4uLy4uL2hvb2tzL3JlZHV4L3VzZUJpbmREaXNwYXRjaCdcbmltcG9ydCB1c2VyQWN0aW9ucyBmcm9tICcuLi8uLi8uLi8uLi8uLi9yZWR1eC9hY3Rpb25zL3VzZXJzJ1xuXG5leHBvcnQgZGVmYXVsdCAoYmlvLCBleHBlcmllbmNlKSA9PiB7XG4gIGNvbnN0IGN1cnJlbnRVc2VyID0gdXNlU2VsZWN0b3IoKHMpID0+IHMuc2Vzc2lvbi5jdXJyZW50VXNlcilcbiAgY29uc3QgeyB1cGRhdGVVc2VyQmlvSW5mb3JtYXRpb24gfSA9IHVzZUJpbmREaXNwYXRjaCh1c2VyQWN0aW9ucylcbiAgcmV0dXJuIHVzZUNhbGxiYWNrKChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICB0b2FzdC5wcm9taXNlKHVwZGF0ZVVzZXJCaW9JbmZvcm1hdGlvbihjdXJyZW50VXNlcj8uaWQsIGJpbyB8fCBudWxsLCBleHBlcmllbmNlIHx8IG51bGwpLFxuICAgICAge1xuICAgICAgICBwZW5kaW5nOiAnU2F2aW5nIEJpbyBJbmZyb21hdGlvbi4uLicsXG4gICAgICAgIHN1Y2Nlc3M6ICdCaW8gSW5mbyBTdWNjZWZ1bGx5IFNhdmVkIScsXG4gICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgcmVuZGVyKHsgZGF0YTogZXJyb3JEYXRhIH0pIHtcbiAgICAgICAgICAgIGNvbnN0IHsgcmVzcG9uc2UgfSA9IGVycm9yRGF0YVxuICAgICAgICAgICAgY29uc3QgeyBkYXRhOiByZXNwb25zZURhdGEgfSA9IHJlc3BvbnNlXG4gICAgICAgICAgICByZXR1cm4gYCR7cmVzcG9uc2VEYXRhLm1zZ30g8J+kryBgXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gIH0sIFtjdXJyZW50VXNlciwgYmlvLCBleHBlcmllbmNlXSlcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tICcuLi8uLi8uLi9Db21tb25Db21wb25lbnRzL1Byb2dyZXNzQmFyL0luZGV4J1xuaW1wb3J0IHVzZU9wZW5Nb2RhbCBmcm9tICcuLi8uLi8uLi9ob29rcy91c2VPcGVuTW9kYWwnXG5cbmltcG9ydCB7IElDT05fRk9STSB9IGZyb20gJy4uLy4uLy4uL0FwcC9Nb2RhbC9JbmRleCdcbmltcG9ydCB7IENvbnRhaW5lciwgRmxleERpdiwgVXNlckljb24gfSBmcm9tICcuL1N0eWxlJ1xuXG5jb25zdCBIZWFkZXIgPSAoeyB1c2VyIH0pID0+IHtcbiAgY29uc3Qgb3Blbk1vZGFsID0gdXNlT3Blbk1vZGFsKElDT05fRk9STSlcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPGgxPnt1c2VyPy51c2VybmFtZX08L2gxPlxuICAgICAgPEZsZXhEaXY+XG4gICAgICAgIDxVc2VySWNvbiBzcmM9e3VzZXI/Lmljb25TcmMgfHwgJ2h0dHBzOi8vY2l2aWwtZGV2LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3Byb2ZpbGVfaW1nXzEucG5nJ30gb25DbGljaz17b3Blbk1vZGFsfSBhbHQ9XCJcIiAvPlxuICAgICAgICA8UHJvZ3Jlc3NCYXIgdmFsdWU9e3VzZXI/LmNpdmlsaXR5fSBtYXhWYWx1ZT17MjB9IC8+XG4gICAgICA8L0ZsZXhEaXY+XG4gICAgPC9Db250YWluZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKCdoZWFkZXInKWBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1ncm93OiAxO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoMSB7XG4gICAgY29sb3I6IHZhcigtLWJnLWFjY2VudCk7XG4gICAgZm9udC1zaXplOiAxLjRlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgRmxleERpdiA9IHN0eWxlZCgnZGl2JylgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbmBcblxuZXhwb3J0IGNvbnN0IFVzZXJJY29uID0gc3R5bGVkKCdpbWcnKWAgIFxuICBtYXJnaW4tcmlnaHQ6IDF2dztcbiAgaGVpZ2h0OiAydnc7XG4gIHdpZHRoOiAydnc7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcblxuYFxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvZ3Jlc3NCYXJDb250YWluZXIiLCJQcm9ncmVzc1ZhbHVlIiwiUHJvZ3Jlc3NCYXIiLCJ2YWx1ZSIsIm1heFZhbHVlIiwic3R5bGVkIiwia2V5ZnJhbWVzIiwibG9hZCIsInJhdGlvIiwicHJvcHMiLCJ1c2VFZmZlY3QiLCJTdXNwZW5zZSIsInVzZVNlbGVjdG9yIiwiVXNlclByb2ZpbGUiLCJDb250YWluZXIiLCJzZXNzaW9uQWN0aW9ucyIsInVzZUJpbmREaXNwYXRjaCIsIkhlYWRlciIsIkxpbmUiLCJCaW9Gb3JtIiwiRGFzaGJvYXJkIiwiZ2V0Q3VycmVudFVzZXIiLCJ1c2VyIiwicyIsInNlc3Npb24iLCJjdXJyZW50VXNlciIsImNsZXJrV3JhcHBlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImluc2VydEJlZm9yZSIsImdldEVsZW1lbnRCeUlkIiwiaWQiLCJGb3JtQ29udGFpbmVyIiwiTGFiZWwiLCJVcGxvYWRJbnB1dCIsInVzZVN0YXRlIiwidXNlT25TdWJtaXQiLCJPdXRlckNvbnRhaW5lciIsIkhlYWRlckNvbnRhaW5lciIsIlN1YkhlYWRlciIsIkZpZWxkQ29udGFpbmVyIiwiRmllbGRMYWJlbCIsIlRleHRhcmVhIiwiQnV0dG9uQ29udGFpbmVyIiwidXNlckRhdGEiLCJ1c2VycyIsImJpbyIsInNldEJpbyIsImV4cGVyaWVuY2UiLCJzZXRFeHBlcmllbmNlIiwib25TdWJtaXQiLCJlIiwidGFyZ2V0IiwidXNlQ2FsbGJhY2siLCJ0b2FzdCIsInVzZXJBY3Rpb25zIiwidXBkYXRlVXNlckJpb0luZm9ybWF0aW9uIiwicHJldmVudERlZmF1bHQiLCJwcm9taXNlIiwicGVuZGluZyIsInN1Y2Nlc3MiLCJlcnJvciIsInJlbmRlciIsImVycm9yRGF0YSIsImRhdGEiLCJyZXNwb25zZSIsInJlc3BvbnNlRGF0YSIsIm1zZyIsInVzZU9wZW5Nb2RhbCIsIklDT05fRk9STSIsIkZsZXhEaXYiLCJVc2VySWNvbiIsIm9wZW5Nb2RhbCIsInVzZXJuYW1lIiwiaWNvblNyYyIsImNpdmlsaXR5Il0sInNvdXJjZVJvb3QiOiIifQ==