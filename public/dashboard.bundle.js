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

/***/ "./src/pages/DID/hooks/useAddVcCred.js":
/*!*********************************************!*\
  !*** ./src/pages/DID/hooks/useAddVcCred.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elastosfoundation_did_js_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elastosfoundation/did-js-sdk */ "./node_modules/@elastosfoundation/did-js-sdk/dist/es/did.browser.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _AssistDIDAdapter_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../AssistDIDAdapter.ts */ "./src/pages/DID/AssistDIDAdapter.ts");
/* harmony import */ var _hooks_redux_useBindDispatch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/redux/useBindDispatch */ "./src/pages/hooks/redux/useBindDispatch.js");
/* harmony import */ var _redux_actions_session__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../redux/actions/session */ "./src/redux/actions/session/index.js");
/* harmony import */ var _redux_actions_users_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../redux/actions/users/index */ "./src/redux/actions/users/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../constants */ "./src/pages/DID/constants.js");



/* eslint-disable max-len */








var STORE_PASS = 'pwd'; // const password = 'password'

var addVCToDoc = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(db, issuer, doc, id, value) {
    var cb, vc;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            cb = issuer.issueFor(doc.getSubject());

            if (value) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return");

          case 3:
            _context.next = 5;
            return cb.id("#".concat(id)).type('SelfProclaimedCredential').properties({
              value: value
            }).seal(STORE_PASS);

          case 5:
            vc = _context.sent;
            vc.getMetadata().attachStore(doc.getStore());
            db.addCredential(vc);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function addVCToDoc(_x, _x2, _x3, _x4, _x5) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var _useBindDispatch = (0,_hooks_redux_useBindDispatch__WEBPACK_IMPORTED_MODULE_6__["default"])(_redux_actions_session__WEBPACK_IMPORTED_MODULE_7__["default"], _redux_actions_users_index__WEBPACK_IMPORTED_MODULE_8__["default"]),
      addDIDSession = _useBindDispatch.addDIDSession,
      upsertDidUser = _useBindDispatch.upsertDidUser;

  var currentUser = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (s) {
    return s.session.currentUser;
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)( /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(props) {
      var _doc$getCredential, _docWithVC$getCredent2;

      var rootPath, store, doc, issuer, db, _ref3, username, docWithVC, _docWithVC$getCredent, avatar;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _elastosfoundation_did_js_sdk__WEBPACK_IMPORTED_MODULE_3__.DIDBackend.initialize(new _AssistDIDAdapter_ts__WEBPACK_IMPORTED_MODULE_5__.AssistDIDAdapter('mainnet'));
              rootPath = _constants__WEBPACK_IMPORTED_MODULE_9__.STORE_PATH;
              _context2.next = 4;
              return _elastosfoundation_did_js_sdk__WEBPACK_IMPORTED_MODULE_3__.DIDStore.open(rootPath);

            case 4:
              store = _context2.sent;
              doc = currentUser.doc;
              issuer = new _elastosfoundation_did_js_sdk__WEBPACK_IMPORTED_MODULE_3__.Issuer(doc);
              db = _elastosfoundation_did_js_sdk__WEBPACK_IMPORTED_MODULE_3__.DIDDocument.Builder.newFromDocument(doc).edit();
              _ref3 = ((_doc$getCredential = doc.getCredential('username')) === null || _doc$getCredential === void 0 ? void 0 : _doc$getCredential.getSubject().getProperties()) || {}, username = _ref3.value; // const { value: firstName } = doc.getCredential('firstName')?.getSubject().getProperties() || {}
              // const { value: lastName } = doc.getCredential('lastName')?.getSubject().getProperties() || {}
              // await addVCToDoc(db, issuer, doc, 'firstName', firstName)
              // await addVCToDoc(db, issuer, doc, 'lastName', lastName)
              // await addVCToDoc(db, issuer, doc, 'username', username)

              _context2.next = 11;
              return addVCToDoc(db, issuer, doc, 'avatar', props.file);

            case 11:
              _context2.next = 13;
              return db.seal(STORE_PASS);

            case 13:
              docWithVC = _context2.sent;
              _context2.next = 16;
              return docWithVC.publish(STORE_PASS);

            case 16:
              // const { value: usernameAfter } = docWithVC.getCredential('username')?.getSubject().getProperties()
              _docWithVC$getCredent = (_docWithVC$getCredent2 = docWithVC.getCredential('avatar')) === null || _docWithVC$getCredent2 === void 0 ? void 0 : _docWithVC$getCredent2.getSubject().getProperties(), avatar = _docWithVC$getCredent.value;
              upsertDidUser({
                userId: docWithVC.getSubject().repr,
                username: username || docWithVC.getSubject().getMethodSpecificId(),
                iconSrc: avatar
              });
              addDIDSession({
                did: docWithVC.getSubject(),
                doc: docWithVC,
                username: username
              });
              store.close();

            case 20:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x6) {
      return _ref2.apply(this, arguments);
    };
  }(), []);
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
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _clerk_clerk_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @clerk/clerk-react */ "./node_modules/@clerk/clerk-react/dist/index.js");
/* harmony import */ var _clerk_clerk_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_clerk_clerk_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Style */ "./src/pages/Dashboard/Style/index.js");
/* harmony import */ var _redux_actions_session_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/actions/session/index */ "./src/redux/actions/session/index.js");
/* harmony import */ var _hooks_redux_useBindDispatch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/redux/useBindDispatch */ "./src/pages/hooks/redux/useBindDispatch.js");
/* harmony import */ var _components_Header_Index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Header/Index */ "./src/pages/Dashboard/components/Header/Index.jsx");
/* harmony import */ var _CommonComponents_Line__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../CommonComponents/Line */ "./src/pages/CommonComponents/Line/index.js");
/* harmony import */ var _CommonComponents_Button_Index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../CommonComponents/Button/Index */ "./src/pages/CommonComponents/Button/Index.jsx");
/* harmony import */ var _components_BioForm_Index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/BioForm/Index */ "./src/pages/Dashboard/components/BioForm/Index.jsx");
/* harmony import */ var _AuthFlow_components_BasicInformation_Index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../AuthFlow/components/BasicInformation/Index */ "./src/pages/AuthFlow/components/BasicInformation/Index.jsx");
/* harmony import */ var _util_form_helpers_init_form_values__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../util/form_helpers/init_form_values */ "./src/pages/util/form_helpers/init_form_values.js");
/* harmony import */ var _DID_hooks_useAddVcCred__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../DID/hooks/useAddVcCred */ "./src/pages/DID/hooks/useAddVcCred.js");















var Dashboard = function Dashboard() {
  var _useBindDispatch = (0,_hooks_redux_useBindDispatch__WEBPACK_IMPORTED_MODULE_6__["default"])(_redux_actions_session_index__WEBPACK_IMPORTED_MODULE_5__["default"]),
      getCurrentUser = _useBindDispatch.getCurrentUser;

  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (s) {
    return s.session.currentUser;
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var clerkWrapper = document.getElementsByClassName('cl-main')[0];
    if (clerkWrapper) clerkWrapper.insertBefore(document.getElementById('bio-dashboard'), null);
    if (user) getCurrentUser(user === null || user === void 0 ? void 0 : user.id);
  }, []);
  var addVcCred = (0,_DID_hooks_useAddVcCred__WEBPACK_IMPORTED_MODULE_13__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Loading...")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_4__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Header_Index__WEBPACK_IMPORTED_MODULE_7__["default"], {
    user: user
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CommonComponents_Line__WEBPACK_IMPORTED_MODULE_8__.Line, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_clerk_clerk_react__WEBPACK_IMPORTED_MODULE_3__.UserProfile, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CommonComponents_Line__WEBPACK_IMPORTED_MODULE_8__.Line, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_BioForm_Index__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0lBQW9DLFFBQVEsRUFBRTtFQUE5QyxFQUZGLENBRkYsQ0FERjtBQVNELENBWEQ7O0FBYUEsaUVBQWV0RCxNQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQ0E7QUFFTyxJQUFNRixTQUFTLEdBQUc5RCw2REFBTSxDQUFDLFFBQUQsQ0FBVCx5VEFBZjtBQVlBLElBQU1tSCxPQUFPLEdBQUduSCw2REFBTSxDQUFDLEtBQUQsQ0FBVCx1TEFBYjtBQU1BLElBQU1vSCxRQUFRLEdBQUdwSCw2REFBTSxDQUFDLEtBQUQsQ0FBVCwyTkFBZCIsInNvdXJjZXMiOlsid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL0NvbW1vbkNvbXBvbmVudHMvUHJvZ3Jlc3NCYXIvSW5kZXguanN4Iiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL0NvbW1vbkNvbXBvbmVudHMvUHJvZ3Jlc3NCYXIvU3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvRElEL2hvb2tzL3VzZUFkZFZjQ3JlZC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9EYXNoYm9hcmQvSW5kZXguanN4Iiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL0Rhc2hib2FyZC9TdHlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9EYXNoYm9hcmQvY29tcG9uZW50cy9CaW9Gb3JtL0luZGV4LmpzeCIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9EYXNoYm9hcmQvY29tcG9uZW50cy9CaW9Gb3JtL1N0eWxlL0luZGV4LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL0Rhc2hib2FyZC9jb21wb25lbnRzL0Jpb0Zvcm0vaG9va3MvdXNlT25TdWJtaXQuanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvRGFzaGJvYXJkL2NvbXBvbmVudHMvSGVhZGVyL0luZGV4LmpzeCIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9EYXNoYm9hcmQvY29tcG9uZW50cy9IZWFkZXIvU3R5bGUvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyBQcm9ncmVzc0JhckNvbnRhaW5lciwgUHJvZ3Jlc3NWYWx1ZSB9IGZyb20gJy4vU3R5bGUvaW5kZXgnXG5cbmNvbnN0IFByb2dyZXNzQmFyID0gKHsgdmFsdWUsIG1heFZhbHVlIH0pID0+IChcbiAgPFByb2dyZXNzQmFyQ29udGFpbmVyPlxuICAgIDxQcm9ncmVzc1ZhbHVlIHJhdGlvPXt2YWx1ZSAvIG1heFZhbHVlfSAvPlxuICA8L1Byb2dyZXNzQmFyQ29udGFpbmVyPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBQcm9ncmVzc0JhclxuIiwiaW1wb3J0IHN0eWxlZCwgeyBrZXlmcmFtZXMgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuY29uc3QgbG9hZCA9IChyYXRpbykgPT4ga2V5ZnJhbWVzYFxuICAwJSB7IG1heC13aWR0aDogMDsgfVxuICAxMDAlIHsgbWF4LXdpZHRoOiAke3JhdGlvICogMTAwfSU7IH1cbmBcblxuZXhwb3J0IGNvbnN0IFByb2dyZXNzQmFyQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWAgXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBib3JkZXItcmFkaXVzOiAxZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLyogcGFkZGluZzogMCAuMmVtOyAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDJ2aDtcbiAgd2lkdGg6IDEwdnc7XG5cbmBcblxuZXhwb3J0IGNvbnN0IFByb2dyZXNzVmFsdWUgPSBzdHlsZWQoJ2RpdicpYCBcbiAgYW5pbWF0aW9uOiAkeyhwcm9wcykgPT4gbG9hZChwcm9wcy5yYXRpbyl9IDFzIGVhc2Utb3V0IG5vcm1hbCBmb3J3YXJkcztcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjVzO1xuICBib3JkZXItcmFkaXVzOiAxZW07XG4gIGJhY2tncm91bmQ6ICM0N0REQTY7XG4gIGhlaWdodDogMS44dmg7XG4gIHdpZHRoOiAxMHZ3O1xuICBtYXgtd2lkdGg6IDA7XG5gXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5pbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgRElEU3RvcmUsIElzc3VlciwgRElERG9jdW1lbnQsIERJREJhY2tlbmQsXG59IGZyb20gJ0BlbGFzdG9zZm91bmRhdGlvbi9kaWQtanMtc2RrJ1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IEFzc2lzdERJREFkYXB0ZXIgfSBmcm9tICcuLi9Bc3Npc3RESURBZGFwdGVyLnRzJ1xuaW1wb3J0IHVzZUJpbmREaXNwYXRjaCBmcm9tICcuLi8uLi9ob29rcy9yZWR1eC91c2VCaW5kRGlzcGF0Y2gnXG5pbXBvcnQgc2Vzc2lvbkFjdGlvbnMgZnJvbSAnLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy9zZXNzaW9uJ1xuaW1wb3J0IHVzZXJBY3Rpb25zIGZyb20gJy4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvdXNlcnMvaW5kZXgnXG5pbXBvcnQgeyBTVE9SRV9QQVRIIH0gZnJvbSAnLi4vY29uc3RhbnRzJ1xuXG5jb25zdCBTVE9SRV9QQVNTID0gJ3B3ZCdcbi8vIGNvbnN0IHBhc3N3b3JkID0gJ3Bhc3N3b3JkJ1xuXG5jb25zdCBhZGRWQ1RvRG9jID0gYXN5bmMgKGRiLCBpc3N1ZXIsIGRvYywgaWQsIHZhbHVlKSA9PiB7XG4gIGNvbnN0IGNiID0gaXNzdWVyLmlzc3VlRm9yKGRvYy5nZXRTdWJqZWN0KCkpXG4gIGlmICghdmFsdWUpIHJldHVyblxuICBjb25zdCB2YyA9IGF3YWl0IGNiLmlkKGAjJHtpZH1gKVxuICAgIC50eXBlKCdTZWxmUHJvY2xhaW1lZENyZWRlbnRpYWwnKVxuICAgIC5wcm9wZXJ0aWVzKHsgdmFsdWUgfSlcbiAgICAuc2VhbChTVE9SRV9QQVNTKVxuICB2Yy5nZXRNZXRhZGF0YSgpLmF0dGFjaFN0b3JlKGRvYy5nZXRTdG9yZSgpKVxuICBkYi5hZGRDcmVkZW50aWFsKHZjKVxufVxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IHsgYWRkRElEU2Vzc2lvbiwgdXBzZXJ0RGlkVXNlciB9ID0gdXNlQmluZERpc3BhdGNoKHNlc3Npb25BY3Rpb25zLCB1c2VyQWN0aW9ucylcbiAgY29uc3QgY3VycmVudFVzZXIgPSB1c2VTZWxlY3RvcigocykgPT4gcy5zZXNzaW9uLmN1cnJlbnRVc2VyKVxuICByZXR1cm4gdXNlQ2FsbGJhY2soYXN5bmMgKHByb3BzKSA9PiB7XG4gICAgRElEQmFja2VuZC5pbml0aWFsaXplKG5ldyBBc3Npc3RESURBZGFwdGVyKCdtYWlubmV0JykpXG4gICAgY29uc3Qgcm9vdFBhdGggPSBTVE9SRV9QQVRIXG4gICAgY29uc3Qgc3RvcmUgPSBhd2FpdCBESURTdG9yZS5vcGVuKHJvb3RQYXRoKVxuICAgIGNvbnN0IHsgZG9jIH0gPSBjdXJyZW50VXNlclxuICAgIGNvbnN0IGlzc3VlciA9IG5ldyBJc3N1ZXIoZG9jKVxuICAgIGNvbnN0IGRiID0gRElERG9jdW1lbnQuQnVpbGRlci5uZXdGcm9tRG9jdW1lbnQoZG9jKS5lZGl0KClcbiAgICBjb25zdCB7IHZhbHVlOiB1c2VybmFtZSB9ID0gZG9jLmdldENyZWRlbnRpYWwoJ3VzZXJuYW1lJyk/LmdldFN1YmplY3QoKS5nZXRQcm9wZXJ0aWVzKCkgfHwge31cbiAgICAvLyBjb25zdCB7IHZhbHVlOiBmaXJzdE5hbWUgfSA9IGRvYy5nZXRDcmVkZW50aWFsKCdmaXJzdE5hbWUnKT8uZ2V0U3ViamVjdCgpLmdldFByb3BlcnRpZXMoKSB8fCB7fVxuICAgIC8vIGNvbnN0IHsgdmFsdWU6IGxhc3ROYW1lIH0gPSBkb2MuZ2V0Q3JlZGVudGlhbCgnbGFzdE5hbWUnKT8uZ2V0U3ViamVjdCgpLmdldFByb3BlcnRpZXMoKSB8fCB7fVxuXG4gICAgLy8gYXdhaXQgYWRkVkNUb0RvYyhkYiwgaXNzdWVyLCBkb2MsICdmaXJzdE5hbWUnLCBmaXJzdE5hbWUpXG4gICAgLy8gYXdhaXQgYWRkVkNUb0RvYyhkYiwgaXNzdWVyLCBkb2MsICdsYXN0TmFtZScsIGxhc3ROYW1lKVxuICAgIC8vIGF3YWl0IGFkZFZDVG9Eb2MoZGIsIGlzc3VlciwgZG9jLCAndXNlcm5hbWUnLCB1c2VybmFtZSlcbiAgICBhd2FpdCBhZGRWQ1RvRG9jKGRiLCBpc3N1ZXIsIGRvYywgJ2F2YXRhcicsIHByb3BzLmZpbGUpXG5cbiAgICBjb25zdCBkb2NXaXRoVkMgPSBhd2FpdCBkYi5zZWFsKFNUT1JFX1BBU1MpXG4gICAgYXdhaXQgZG9jV2l0aFZDLnB1Ymxpc2goU1RPUkVfUEFTUylcbiAgICAvLyBjb25zdCB7IHZhbHVlOiB1c2VybmFtZUFmdGVyIH0gPSBkb2NXaXRoVkMuZ2V0Q3JlZGVudGlhbCgndXNlcm5hbWUnKT8uZ2V0U3ViamVjdCgpLmdldFByb3BlcnRpZXMoKVxuICAgIGNvbnN0IHsgdmFsdWU6IGF2YXRhciB9ID0gZG9jV2l0aFZDLmdldENyZWRlbnRpYWwoJ2F2YXRhcicpPy5nZXRTdWJqZWN0KCkuZ2V0UHJvcGVydGllcygpXG5cbiAgICB1cHNlcnREaWRVc2VyKHtcbiAgICAgIHVzZXJJZDogZG9jV2l0aFZDLmdldFN1YmplY3QoKS5yZXByLFxuICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lIHx8IGRvY1dpdGhWQy5nZXRTdWJqZWN0KCkuZ2V0TWV0aG9kU3BlY2lmaWNJZCgpLFxuICAgICAgaWNvblNyYzogYXZhdGFyLFxuICAgIH0pXG5cbiAgICBhZGRESURTZXNzaW9uKHsgZGlkOiBkb2NXaXRoVkMuZ2V0U3ViamVjdCgpLCBkb2M6IGRvY1dpdGhWQywgdXNlcm5hbWUgfSlcbiAgICBzdG9yZS5jbG9zZSgpXG4gIH0sIFtdKVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgU3VzcGVuc2UgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEZvcm1payB9IGZyb20gJ2Zvcm1paydcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBVc2VyUHJvZmlsZSB9IGZyb20gJ0BjbGVyay9jbGVyay1yZWFjdCdcblxuaW1wb3J0IHsgQ29udGFpbmVyLCBGb3JtQ29udGFpbmVyIH0gZnJvbSAnLi9TdHlsZSdcbmltcG9ydCBzZXNzaW9uQWN0aW9ucyBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zL3Nlc3Npb24vaW5kZXgnXG5cbmltcG9ydCB1c2VCaW5kRGlzcGF0Y2ggZnJvbSAnLi4vaG9va3MvcmVkdXgvdXNlQmluZERpc3BhdGNoJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvSGVhZGVyL0luZGV4J1xuaW1wb3J0IHsgTGluZSB9IGZyb20gJy4uL0NvbW1vbkNvbXBvbmVudHMvTGluZSdcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vQ29tbW9uQ29tcG9uZW50cy9CdXR0b24vSW5kZXgnXG5cbmltcG9ydCBCaW9Gb3JtIGZyb20gJy4vY29tcG9uZW50cy9CaW9Gb3JtL0luZGV4J1xuaW1wb3J0IEJhc2ljSW5mb3JtYXRpb24gZnJvbSAnLi4vQXV0aEZsb3cvY29tcG9uZW50cy9CYXNpY0luZm9ybWF0aW9uL0luZGV4J1xuaW1wb3J0IHsgSU5JVF9ESURfRk9STV9WQUxVRVMgfSBmcm9tICcuLi91dGlsL2Zvcm1faGVscGVycy9pbml0X2Zvcm1fdmFsdWVzJ1xuaW1wb3J0IHVzZUFkZFZjQ3JlZCBmcm9tICcuLi9ESUQvaG9va3MvdXNlQWRkVmNDcmVkJ1xuXG5jb25zdCBEYXNoYm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IHsgZ2V0Q3VycmVudFVzZXIgfSA9IHVzZUJpbmREaXNwYXRjaChzZXNzaW9uQWN0aW9ucylcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKChzKSA9PiBzLnNlc3Npb24uY3VycmVudFVzZXIpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY2xlcmtXcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2wtbWFpbicpWzBdXG4gICAgaWYgKGNsZXJrV3JhcHBlcikgY2xlcmtXcmFwcGVyLmluc2VydEJlZm9yZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmlvLWRhc2hib2FyZCcpLCBudWxsKVxuICAgIGlmICh1c2VyKSBnZXRDdXJyZW50VXNlcih1c2VyPy5pZClcbiAgfSwgW10pXG4gIGNvbnN0IGFkZFZjQ3JlZCA9IHVzZUFkZFZjQ3JlZCgpXG5cbiAgcmV0dXJuIChcbiAgICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxkaXY+TG9hZGluZy4uLjwvZGl2Pn0+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8SGVhZGVyIHVzZXI9e3VzZXJ9IC8+XG4gICAgICAgIDxMaW5lIC8+XG4gICAgICAgIDxVc2VyUHJvZmlsZSAvPlxuICAgICAgICB7LyogPEZvcm1pa1xuICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e0lOSVRfRElEX0ZPUk1fVkFMVUVTfVxuICAgICAgICAgIG9uU3VibWl0PXsodmFsdWVzLCBwYXJhbXMpID0+IGFkZFZjQ3JlZCh2YWx1ZXMsIHBhcmFtcyl9XG4gICAgICAgID5cbiAgICAgICAgICB7KHsgaXNTdWJtaXR0aW5nLCB2YWx1ZXMsIHNldEZpZWxkVmFsdWUgfSkgPT4gKFxuICAgICAgICAgICAgPEZvcm1Db250YWluZXI+XG4gICAgICAgICAgICAgIDxCYXNpY0luZm9ybWF0aW9uIHNldEZpZWxkVmFsdWU9e3NldEZpZWxkVmFsdWV9IC8+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICB3aWR0aD1cIjQwJVwiXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMi41dndcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj1cInZhcigtLW0tZWxhc3Rvcy10aGVtZSlcIlxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYWRkVmNDcmVkKHZhbHVlcyl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBVcGRhdGUgRGVjZW50cmFsaXplZCBJZGVudGl0eVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvRm9ybUNvbnRhaW5lcj5cbiAgICAgICAgICApfVxuICAgICAgICA8L0Zvcm1paz4gKi99XG4gICAgICAgIDxMaW5lIC8+XG4gICAgICAgIDxCaW9Gb3JtIHVzZXI9e3VzZXJ9IC8+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L1N1c3BlbnNlPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZFxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbi8vIGltcG9ydCB7IEZpVXNlciB9IGZyb20gJ3JlYWN0LWljb25zL2ZpJ1xuXG5leHBvcnQgY29uc3QgRm9ybUNvbnRhaW5lciA9IHN0eWxlZCgnZGl2JylgIFxuICB3aWR0aDogNzAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDN2dyBhdXRvO1xuXG5gXG5cbmV4cG9ydCBjb25zdCBMYWJlbCA9IHN0eWxlZCgnbGFiZWwnKWAgXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9jaXZpbC1kZXYuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vcHJvZmlsZV9pbWFnZXMvNjRfMS5wbmcnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgaGVpZ2h0OiA0ZW07XG4gIHdpZHRoOiA0ZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuYFxuXG5leHBvcnQgY29uc3QgVXBsb2FkSW5wdXQgPSBzdHlsZWQoJ2lucHV0JylgIFxuICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICBsZWZ0OiAtOTk5OTlyZW07XG5gXG5cbi8vIGV4cG9ydCBjb25zdCBVcGxvYWRJY29uID0gc3R5bGVkKEZpVXNlcilgXG4vLyAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gYFxuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWAgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDR2dztcblxuICAuY2wtY29tcG9uZW50LmNsLXVzZXItcHJvZmlsZSAuY2wtbWFpbiB7XG4gICAgbWFyZ2luOiAzZW0gMCAwIDFlbTtcbn1cbmBcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHVzZU9uU3VibWl0IGZyb20gJy4vaG9va3MvdXNlT25TdWJtaXQnXG5cbmltcG9ydCB7XG4gIENvbnRhaW5lciwgT3V0ZXJDb250YWluZXIsIEhlYWRlckNvbnRhaW5lcixcbiAgSGVhZGVyLCBTdWJIZWFkZXIsIEZpZWxkQ29udGFpbmVyLFxuICBGaWVsZExhYmVsLCBUZXh0YXJlYSwgQnV0dG9uQ29udGFpbmVyLFxufSBmcm9tICcuL1N0eWxlL0luZGV4J1xuXG5jb25zdCBCaW9Gb3JtID0gKHsgdXNlciB9KSA9PiB7XG4gIGNvbnN0IHVzZXJEYXRhID0gdXNlU2VsZWN0b3IoKHMpID0+IHMudXNlcnMpW3VzZXI/LmlkXVxuICBjb25zdCBbYmlvLCBzZXRCaW9dID0gdXNlU3RhdGUodXNlckRhdGE/LmJpbylcbiAgY29uc3QgW2V4cGVyaWVuY2UsIHNldEV4cGVyaWVuY2VdID0gdXNlU3RhdGUodXNlckRhdGE/LmV4cGVyaWVuY2UpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRCaW8odXNlckRhdGE/LmJpbylcbiAgICBzZXRFeHBlcmllbmNlKHVzZXJEYXRhPy5leHBlcmllbmNlKVxuICB9LCBbdXNlckRhdGFdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY2xlcmtXcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2wtbWFpbicpWzBdXG4gICAgaWYgKGNsZXJrV3JhcHBlcikgY2xlcmtXcmFwcGVyLmluc2VydEJlZm9yZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmlvLWRhc2hib2FyZCcpLCBudWxsKVxuICB9LCBbXSlcblxuICBjb25zdCBvblN1Ym1pdCA9IHVzZU9uU3VibWl0KGJpbywgZXhwZXJpZW5jZSwgc2V0QmlvLCBzZXRFeHBlcmllbmNlKVxuICByZXR1cm4gKFxuICAgIDxPdXRlckNvbnRhaW5lciBpZD1cImJpby1kYXNoYm9hcmRcIj5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxIZWFkZXJDb250YWluZXI+XG4gICAgICAgICAgPEhlYWRlcj5CaW8gSW5mb3JtYXRpb248L0hlYWRlcj5cbiAgICAgICAgICA8U3ViSGVhZGVyPk1hbmFnZSBCaW8gYW5kIEV4cGVyaWVuY2UgSW5mb3JtYXRpb248L1N1YkhlYWRlcj5cbiAgICAgICAgPC9IZWFkZXJDb250YWluZXI+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XG4gICAgICAgICAgPEZpZWxkQ29udGFpbmVyPlxuICAgICAgICAgICAgPEZpZWxkTGFiZWw+XG4gICAgICAgICAgICAgIEJpb1xuICAgICAgICAgICAgPC9GaWVsZExhYmVsPlxuICAgICAgICAgICAgPFRleHRhcmVhIHZhbHVlPXtiaW99IG9uQ2hhbmdlPXsoZSkgPT4gc2V0QmlvKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgICA8L0ZpZWxkQ29udGFpbmVyPlxuICAgICAgICAgIDxGaWVsZENvbnRhaW5lcj5cbiAgICAgICAgICAgIDxGaWVsZExhYmVsPlxuICAgICAgICAgICAgICBFeHBlcmllbmNlXG4gICAgICAgICAgICA8L0ZpZWxkTGFiZWw+XG4gICAgICAgICAgICA8VGV4dGFyZWEgdmFsdWU9e2V4cGVyaWVuY2V9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0RXhwZXJpZW5jZShlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgICAgPC9GaWVsZENvbnRhaW5lcj5cbiAgICAgICAgICA8QnV0dG9uQ29udGFpbmVyPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2F2ZSBCaW8gSW5mb3JtYXRpb248L2J1dHRvbj5cbiAgICAgICAgICA8L0J1dHRvbkNvbnRhaW5lcj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9PdXRlckNvbnRhaW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCaW9Gb3JtXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgT3V0ZXJDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpYCBcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG5gXG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpYFxuICBwYWRkaW5nOiAzZW0gMmVtO1xuICBib3gtc2hhZG93OiAwcHggMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGZvbnQtZmFtaWx5OiBcIlNvdXJjZSBTYW5zIFByb1wiLCBzYW5zLXNlcmlmOztcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzE1MTUxNTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XG4gIHdpZHRoOiA4NDBweDtcbmBcblxuZXhwb3J0IGNvbnN0IEhlYWRlckNvbnRhaW5lciA9IHN0eWxlZCgnZGl2JylgXG4gIG1hcmdpbi1ib3R0b206IDEuMjVlbTtcblxuYFxuXG5leHBvcnQgY29uc3QgSGVhZGVyID0gc3R5bGVkKCdoMScpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbjogMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcblxuYFxuXG5leHBvcnQgY29uc3QgU3ViSGVhZGVyID0gc3R5bGVkKCdwJylgXG4gIGNvbG9yOiAjODA4MDgwO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICBtYXJnaW46IDAgMCAxcmVtIDA7XG5gXG5cbmV4cG9ydCBjb25zdCBGaWVsZENvbnRhaW5lciA9IHN0eWxlZCgnZGl2JylgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWJvdHRvbTogMS41ZW07XG5gXG5cbmV4cG9ydCBjb25zdCBGaWVsZExhYmVsID0gc3R5bGVkKCdkaXYnKWAgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDAgMCAzMCU7XG4gIG1hcmdpbi1yaWdodDogMC41ZW07XG4gIHBhZGRpbmctdG9wOiAxLjVlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMjVlbTtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1jbGVyay1sYWJlbC1mb250LXdlaWdodCwgNjAwKTtcblxuYFxuXG5leHBvcnQgY29uc3QgVGV4dGFyZWEgPSBzdHlsZWQoJ3RleHRhcmVhJylgXG4gIG1pbi1oZWlnaHQ6IDR2aDtcbiAgZmxleDogMTtcbiAgcGFkZGluZy10b3A6IDEuNWVtO1xuICBwYWRkaW5nLWJvdHRvbTogMS41ZW07XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBsaW5lLWhlaWdodDogMS4yNWVtO1xuXG4gIHRyYW5zaXRpb246IGNvbG9yIC4ycyBlYXNlLWluLW91dCxiYWNrZ3JvdW5kLWNvbG9yIC4ycyBlYXNlLWluLW91dCxib3JkZXItY29sb3IgLjJzIGVhc2UtaW4tb3V0LGJveC1zaGFkb3cgLjJzIGVhc2UtaW4tb3V0O1xuICBwYWRkaW5nOiBjYWxjKDFlbSAtIDJweCk7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZTVlNWU1O1xuICBjb2xvcjogIzE1MTUxNTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cbiAgOmZvY3VzIHtcbiAgICBib3JkZXItY29sb3I6ICM4N0MyMzI7XG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgICBvdXRsaW5lLW9mZnNldDogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBCdXR0b25Db250YWluZXIgPSBzdHlsZWQoJ2RpdicpYCBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgbWFyZ2luLXRvcDogMmVtO1xuICB3aWR0aDogMTAwJTtcblxuICBidXR0b24ge1xuICAgIHRyYW5zaXRpb246IGNvbG9yIC4ycyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAuMnMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAuMnMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjJzIGVhc2UtaW4tb3V0O1xuICAgIHBhZGRpbmc6IGNhbGMoMWVtIC0gMnB4KTtcbiAgICBsaW5lLWhlaWdodDogMS4yNXJlbTtcbiAgICBiYWNrZ3JvdW5kOiAjODdDMjMyO1xuICAgIGJvcmRlci1jb2xvcjogIzg3QzIzMjsgICAgXG4gICAgYm9yZGVyLXJhZGl1czogMC41ZW07XG4gICAgYm9yZGVyOiAycHggc29saWQgI2U1ZTVlNTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAxZW0gMmVtO1xuICAgIGJvcmRlcjogMDtcbiAgICBvdXRsaW5lOiAwO1xuICB9XG5cbmBcbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSdcbmltcG9ydCB1c2VCaW5kRGlzcGF0Y2ggZnJvbSAnLi4vLi4vLi4vLi4vaG9va3MvcmVkdXgvdXNlQmluZERpc3BhdGNoJ1xuaW1wb3J0IHVzZXJBY3Rpb25zIGZyb20gJy4uLy4uLy4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvdXNlcnMnXG5cbmV4cG9ydCBkZWZhdWx0IChiaW8sIGV4cGVyaWVuY2UpID0+IHtcbiAgY29uc3QgY3VycmVudFVzZXIgPSB1c2VTZWxlY3RvcigocykgPT4gcy5zZXNzaW9uLmN1cnJlbnRVc2VyKVxuICBjb25zdCB7IHVwZGF0ZVVzZXJCaW9JbmZvcm1hdGlvbiB9ID0gdXNlQmluZERpc3BhdGNoKHVzZXJBY3Rpb25zKVxuICByZXR1cm4gdXNlQ2FsbGJhY2soKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIHRvYXN0LnByb21pc2UodXBkYXRlVXNlckJpb0luZm9ybWF0aW9uKGN1cnJlbnRVc2VyPy5pZCwgYmlvIHx8IG51bGwsIGV4cGVyaWVuY2UgfHwgbnVsbCksXG4gICAgICB7XG4gICAgICAgIHBlbmRpbmc6ICdTYXZpbmcgQmlvIEluZnJvbWF0aW9uLi4uJyxcbiAgICAgICAgc3VjY2VzczogJ0JpbyBJbmZvIFN1Y2NlZnVsbHkgU2F2ZWQhJyxcbiAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICByZW5kZXIoeyBkYXRhOiBlcnJvckRhdGEgfSkge1xuICAgICAgICAgICAgY29uc3QgeyByZXNwb25zZSB9ID0gZXJyb3JEYXRhXG4gICAgICAgICAgICBjb25zdCB7IGRhdGE6IHJlc3BvbnNlRGF0YSB9ID0gcmVzcG9uc2VcbiAgICAgICAgICAgIHJldHVybiBgJHtyZXNwb25zZURhdGEubXNnfSDwn6SvIGBcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgfSwgW2N1cnJlbnRVc2VyLCBiaW8sIGV4cGVyaWVuY2VdKVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gJy4uLy4uLy4uL0NvbW1vbkNvbXBvbmVudHMvUHJvZ3Jlc3NCYXIvSW5kZXgnXG5pbXBvcnQgdXNlT3Blbk1vZGFsIGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZU9wZW5Nb2RhbCdcblxuaW1wb3J0IHsgSUNPTl9GT1JNIH0gZnJvbSAnLi4vLi4vLi4vQXBwL01vZGFsL0luZGV4J1xuaW1wb3J0IHsgQ29udGFpbmVyLCBGbGV4RGl2LCBVc2VySWNvbiB9IGZyb20gJy4vU3R5bGUnXG5cbmNvbnN0IEhlYWRlciA9ICh7IHVzZXIgfSkgPT4ge1xuICBjb25zdCBvcGVuTW9kYWwgPSB1c2VPcGVuTW9kYWwoSUNPTl9GT1JNKVxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8aDE+e3VzZXI/LnVzZXJuYW1lfTwvaDE+XG4gICAgICA8RmxleERpdj5cbiAgICAgICAgPFVzZXJJY29uIHNyYz17dXNlcj8uaWNvblNyYyB8fCAnaHR0cHM6Ly9jaXZpbC1kZXYuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vcHJvZmlsZV9pbWdfMS5wbmcnfSBvbkNsaWNrPXtvcGVuTW9kYWx9IGFsdD1cIlwiIC8+XG4gICAgICAgIDxQcm9ncmVzc0JhciB2YWx1ZT17dXNlcj8uY2l2aWxpdHl9IG1heFZhbHVlPXsyMH0gLz5cbiAgICAgIDwvRmxleERpdj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQoJ2hlYWRlcicpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LWdyb3c6IDE7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGgxIHtcbiAgICBjb2xvcjogdmFyKC0tYmctYWNjZW50KTtcbiAgICBmb250LXNpemU6IDEuNGVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBGbGV4RGl2ID0gc3R5bGVkKCdkaXYnKWBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuYFxuXG5leHBvcnQgY29uc3QgVXNlckljb24gPSBzdHlsZWQoJ2ltZycpYCAgXG4gIG1hcmdpbi1yaWdodDogMXZ3O1xuICBoZWlnaHQ6IDJ2dztcbiAgd2lkdGg6IDJ2dztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuXG5gXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9ncmVzc0JhckNvbnRhaW5lciIsIlByb2dyZXNzVmFsdWUiLCJQcm9ncmVzc0JhciIsInZhbHVlIiwibWF4VmFsdWUiLCJzdHlsZWQiLCJrZXlmcmFtZXMiLCJsb2FkIiwicmF0aW8iLCJwcm9wcyIsInVzZUNhbGxiYWNrIiwiRElEU3RvcmUiLCJJc3N1ZXIiLCJESUREb2N1bWVudCIsIkRJREJhY2tlbmQiLCJ1c2VTZWxlY3RvciIsIkFzc2lzdERJREFkYXB0ZXIiLCJ1c2VCaW5kRGlzcGF0Y2giLCJzZXNzaW9uQWN0aW9ucyIsInVzZXJBY3Rpb25zIiwiU1RPUkVfUEFUSCIsIlNUT1JFX1BBU1MiLCJhZGRWQ1RvRG9jIiwiZGIiLCJpc3N1ZXIiLCJkb2MiLCJpZCIsImNiIiwiaXNzdWVGb3IiLCJnZXRTdWJqZWN0IiwidHlwZSIsInByb3BlcnRpZXMiLCJzZWFsIiwidmMiLCJnZXRNZXRhZGF0YSIsImF0dGFjaFN0b3JlIiwiZ2V0U3RvcmUiLCJhZGRDcmVkZW50aWFsIiwiYWRkRElEU2Vzc2lvbiIsInVwc2VydERpZFVzZXIiLCJjdXJyZW50VXNlciIsInMiLCJzZXNzaW9uIiwiaW5pdGlhbGl6ZSIsInJvb3RQYXRoIiwib3BlbiIsInN0b3JlIiwiQnVpbGRlciIsIm5ld0Zyb21Eb2N1bWVudCIsImVkaXQiLCJnZXRDcmVkZW50aWFsIiwiZ2V0UHJvcGVydGllcyIsInVzZXJuYW1lIiwiZmlsZSIsImRvY1dpdGhWQyIsInB1Ymxpc2giLCJhdmF0YXIiLCJ1c2VySWQiLCJyZXByIiwiZ2V0TWV0aG9kU3BlY2lmaWNJZCIsImljb25TcmMiLCJkaWQiLCJjbG9zZSIsInVzZUVmZmVjdCIsIlN1c3BlbnNlIiwiRm9ybWlrIiwiVXNlclByb2ZpbGUiLCJDb250YWluZXIiLCJGb3JtQ29udGFpbmVyIiwiSGVhZGVyIiwiTGluZSIsIkJ1dHRvbiIsIkJpb0Zvcm0iLCJCYXNpY0luZm9ybWF0aW9uIiwiSU5JVF9ESURfRk9STV9WQUxVRVMiLCJ1c2VBZGRWY0NyZWQiLCJEYXNoYm9hcmQiLCJnZXRDdXJyZW50VXNlciIsInVzZXIiLCJjbGVya1dyYXBwZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJpbnNlcnRCZWZvcmUiLCJnZXRFbGVtZW50QnlJZCIsImFkZFZjQ3JlZCIsIkxhYmVsIiwiVXBsb2FkSW5wdXQiLCJ1c2VTdGF0ZSIsInVzZU9uU3VibWl0IiwiT3V0ZXJDb250YWluZXIiLCJIZWFkZXJDb250YWluZXIiLCJTdWJIZWFkZXIiLCJGaWVsZENvbnRhaW5lciIsIkZpZWxkTGFiZWwiLCJUZXh0YXJlYSIsIkJ1dHRvbkNvbnRhaW5lciIsInVzZXJEYXRhIiwidXNlcnMiLCJiaW8iLCJzZXRCaW8iLCJleHBlcmllbmNlIiwic2V0RXhwZXJpZW5jZSIsIm9uU3VibWl0IiwiZSIsInRhcmdldCIsInRvYXN0IiwidXBkYXRlVXNlckJpb0luZm9ybWF0aW9uIiwicHJldmVudERlZmF1bHQiLCJwcm9taXNlIiwicGVuZGluZyIsInN1Y2Nlc3MiLCJlcnJvciIsInJlbmRlciIsImVycm9yRGF0YSIsImRhdGEiLCJyZXNwb25zZSIsInJlc3BvbnNlRGF0YSIsIm1zZyIsInVzZU9wZW5Nb2RhbCIsIklDT05fRk9STSIsIkZsZXhEaXYiLCJVc2VySWNvbiIsIm9wZW5Nb2RhbCIsImNpdmlsaXR5Il0sInNvdXJjZVJvb3QiOiIifQ==