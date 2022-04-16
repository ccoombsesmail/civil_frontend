(self["webpackChunkcivil"] = self["webpackChunkcivil"] || []).push([["comment-form"],{

/***/ "./src/generic/delay.js":
/*!******************************!*\
  !*** ./src/generic/delay.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (t, v) {
  return new Promise(function (resolve, reject) {
    if (v === true) reject();
    setTimeout(resolve.bind(null, v), t);
  });
});

/***/ }),

/***/ "./src/pages/CommentForm/Index.jsx":
/*!*****************************************!*\
  !*** ./src/pages/CommentForm/Index.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/node_modules/react-router/index.js");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _CommonComponents_Button_Index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CommonComponents/Button/Index */ "./src/pages/CommonComponents/Button/Index.jsx");
/* harmony import */ var _CommonComponents_UserInfoHeader_Index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../CommonComponents/UserInfoHeader/Index */ "./src/pages/CommonComponents/UserInfoHeader/Index.jsx");
/* harmony import */ var _CommonComponents_AnimatedCheckmark_Index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../CommonComponents/AnimatedCheckmark/Index */ "./src/pages/CommonComponents/AnimatedCheckmark/Index.jsx");
/* harmony import */ var _CommonComponents_RichTextEditor_Index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../CommonComponents/RichTextEditor/Index */ "./src/pages/CommonComponents/RichTextEditor/Index.jsx");
/* harmony import */ var _hooks_useSetInnerHtml__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useSetInnerHtml */ "./src/pages/hooks/useSetInnerHtml.js");
/* harmony import */ var _hooks_useGetStateEffect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hooks/useGetStateEffect */ "./src/pages/CommentForm/hooks/useGetStateEffect.js");
/* harmony import */ var _hooks_useHandleSubmit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hooks/useHandleSubmit */ "./src/pages/CommentForm/hooks/useHandleSubmit.js");
/* harmony import */ var _generic_string_dateFormatter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../generic/string/dateFormatter */ "./src/generic/string/dateFormatter.js");
/* harmony import */ var _api_v1_comments_comments_api_util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../api/v1/comments/comments_api_util */ "./src/api/v1/comments/comments_api_util.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Style */ "./src/pages/CommentForm/Style/index.js");


/* eslint-disable max-len */














var uuidRegEx = new RegExp(/\b[0-9a-f]{8}\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\b[0-9a-f]{12}\b/g);

var CreateCommentForm = function CreateCommentForm(_ref) {
  var modalProps = _ref.modalProps;
  var descRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    rawHTML: '',
    content: '',
    rawText: ''
  }),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      richTextEditorData = _useState2[0],
      setRichTextEditorData = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      toxicityScore = _useState4[0],
      setToxicityScore = _useState4[1];

  var _useLocation = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_13__.useLocation)(),
      pathname = _useLocation.pathname;

  var topicId = pathname.match(uuidRegEx)[0];
  var subtopicId = pathname.match(uuidRegEx)[1];
  var compState = (0,_hooks_useGetStateEffect__WEBPACK_IMPORTED_MODULE_8__["default"])(topicId, subtopicId, modalProps);
  var handleSubmit = (0,_hooks_useHandleSubmit__WEBPACK_IMPORTED_MODULE_9__["default"])(compState, richTextEditorData.rawHTML, richTextEditorData.rawText, modalProps, subtopicId);
  (0,_hooks_useSetInnerHtml__WEBPACK_IMPORTED_MODULE_7__["default"])(descRef, compState.htmlContent);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_12__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {
    initialValues: {
      content: '',
      positive: '',
      negative: '',
      neutral: ''
    },
    validate: function validate() {
      var errors = {};

      if (richTextEditorData.content.length === 0) {
        errors.content = 'Write Something';
      }

      return errors;
    },
    onSubmit: handleSubmit
  }, function (_ref2) {
    var isSubmitting = _ref2.isSubmitting;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_14__["default"].Header, {
      closeButton: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_14__["default"].Title, null, "Write Your Reply")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_12__.FormContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_14__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_CommonComponents_UserInfoHeader_Index__WEBPACK_IMPORTED_MODULE_4__["default"], {
      iconSrc: compState.createdByIconSrc,
      username: compState.createdBy,
      time: (0,_generic_string_dateFormatter__WEBPACK_IMPORTED_MODULE_10__.getTimeSince)(compState.time)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_12__.Description, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
      ref: descRef
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_12__.InputWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_CommonComponents_RichTextEditor_Index__WEBPACK_IMPORTED_MODULE_6__["default"], {
      content: richTextEditorData.content,
      setContent: setRichTextEditorData,
      setToxicityScore: setToxicityScore
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_14__["default"].Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_12__.ToxicityControls, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_CommonComponents_Button_Index__WEBPACK_IMPORTED_MODULE_3__["default"], {
      type: "button",
      onClick: function onClick() {
        return (0,_api_v1_comments_comments_api_util__WEBPACK_IMPORTED_MODULE_11__.checkToxicity)({
          content: richTextEditorData.rawText
        }).then(function (res) {
          setToxicityScore(res.data.SEVERE_TOXICITY.toFixed(2));
        });
      }
    }, "Check Toxicity Score"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_CommonComponents_AnimatedCheckmark_Index__WEBPACK_IMPORTED_MODULE_5__["default"], {
      toxicityScore: toxicityScore
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", null, toxicityScore && "Your toxicity score is ".concat(toxicityScore)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_CommonComponents_Button_Index__WEBPACK_IMPORTED_MODULE_3__["default"], {
      type: "submit",
      disabled: isSubmitting
    }, "Submit"))));
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateCommentForm);

/***/ }),

/***/ "./src/pages/CommentForm/Style/index.js":
/*!**********************************************!*\
  !*** ./src/pages/CommentForm/Style/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormContainer": () => (/* binding */ FormContainer),
/* harmony export */   "Description": () => (/* binding */ Description),
/* harmony export */   "InputWrapper": () => (/* binding */ InputWrapper),
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "ToxicityControls": () => (/* binding */ ToxicityControls)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");


var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;



var FormContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(formik__WEBPACK_IMPORTED_MODULE_1__.Form)(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin-top: 0;\n  border-radius: .5em;\n  position: relative;\n\n"])));
var Description = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])('p')(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([" \n  width: 90%;\n  padding: .5em 0;\n  margin-bottom: 2em;\n  font-size: .85em;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  background-color: white;\n  color: black;\n"])));
var InputWrapper = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])('div')(_templateObject3 || (_templateObject3 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  width: 100%;\n  section {\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n    width: 30vw;\n    position: absolute;\n    bottom: 0;\n      padding: .2em .5em;\n    background: #e0e5ec;\n    border-radius: .4em;\n    box-shadow:\n   -7px -7px 20px 0px #fff9,\n   -4px -4px 5px 0px #fff9,\n   7px 7px 20px 0px #0002,\n   4px 4px 5px 0px #0001,\n   inset 0px 0px 0px 0px #fff9,\n   inset 0px 0px 0px 0px #0001,\n   inset 0px 0px 0px 0px #fff9,\n   inset 0px 0px 0px 0px #0001;\n  }\n"])));
var Container = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])('div')(_templateObject4 || (_templateObject4 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  h1 {\n    width: 100%;\n    margin: 0;\n    text-align: center;\n    padding-bottom: .5em;\n    border-bottom: 1px solid black;\n  }\n "])));
var ToxicityControls = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])('div')(_templateObject5 || (_templateObject5 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  flex-grow: 1;\n  display: flex;\n  align-items: center;\n  > div {\n    margin-left: 1vw;\n  }\n\n  p {\n    margin: 0 1em;\n    color: #979cb0;\n    font-weight: 600;\n    font-size: 16px;\n    letter-spacing: .1vw;  \n  }\n\n"])));

/***/ }),

/***/ "./src/pages/CommentForm/hooks/useGetStateEffect.js":
/*!**********************************************************!*\
  !*** ./src/pages/CommentForm/hooks/useGetStateEffect.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");



var findCommentContent = function findCommentContent(comment, id) {
  var visited = new Set();
  var q = [comment];

  while (q.length !== 0) {
    var currNode = q.shift();
    visited.add(currNode.data.id);
    if (currNode.data.id === id) return currNode.data.content;
    currNode.children.forEach(function (child) {
      if (!visited.has(child.data.id)) q.push(child);
    });
  }

  return '';
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (topicId, subtopicId, modalProps) {
  var _useSelector, _useSelector2;

  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (s) {
    return s.session.currentUser;
  });
  var topic = (_useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (s) {
    return s.topics.list;
  })) === null || _useSelector === void 0 ? void 0 : _useSelector.find(function (t) {
    return t.id === topicId;
  });
  var comment = (_useSelector2 = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (s) {
    return s.comments.list;
  })) === null || _useSelector2 === void 0 ? void 0 : _useSelector2.find(function (c) {
    var _c$data;

    return ((_c$data = c.data) === null || _c$data === void 0 ? void 0 : _c$data.id) === (modalProps === null || modalProps === void 0 ? void 0 : modalProps.rootParentCommentId);
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var commentContent = (modalProps === null || modalProps === void 0 ? void 0 : modalProps.replyType) !== 'TOPIC_REPLY' ? findCommentContent(comment, modalProps === null || modalProps === void 0 ? void 0 : modalProps.commentId) : topic === null || topic === void 0 ? void 0 : topic.description;
    return {
      subtopicId: subtopicId,
      createdByIconSrc: (comment === null || comment === void 0 ? void 0 : comment.iconSrc) || (topic === null || topic === void 0 ? void 0 : topic.createdByIconSrc),
      username: user === null || user === void 0 ? void 0 : user.username,
      createdBy: (comment === null || comment === void 0 ? void 0 : comment.createdBy) || (topic === null || topic === void 0 ? void 0 : topic.createdBy),
      time: (comment === null || comment === void 0 ? void 0 : comment.createdAt) || (topic === null || topic === void 0 ? void 0 : topic.createdAt),
      htmlContent: commentContent,
      rootParentCommentId: (modalProps === null || modalProps === void 0 ? void 0 : modalProps.rootParentCommentId) || null,
      type: modalProps === null || modalProps === void 0 ? void 0 : modalProps.replyType
    };
  }, [topic, user, comment, subtopicId, modalProps]);
});

/***/ }),

/***/ "./src/pages/CommentForm/hooks/useHandleSubmit.js":
/*!********************************************************!*\
  !*** ./src/pages/CommentForm/hooks/useHandleSubmit.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _hooks_redux_useBindDispatch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/redux/useBindDispatch */ "./src/pages/hooks/redux/useBindDispatch.js");
/* harmony import */ var _redux_actions_comments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../redux/actions/comments */ "./src/redux/actions/comments/index.js");
/* harmony import */ var _api_v1_comments_comments_api_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../api/v1/comments/comments_api_util */ "./src/api/v1/comments/comments_api_util.js");
/* harmony import */ var _generic_delay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../generic/delay */ "./src/generic/delay.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (compState, content, rawText, modalProps, subtopicId) {
  var _useBindDispatch = (0,_hooks_redux_useBindDispatch__WEBPACK_IMPORTED_MODULE_3__["default"])(_redux_actions_comments__WEBPACK_IMPORTED_MODULE_4__["default"]),
      createComment = _useBindDispatch.createComment;

  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (values, _ref) {
    var setSubmitting = _ref.setSubmitting,
        resetForm = _ref.resetForm;
    // const { positive, negative, neutral } = values
    // let sentiment
    // if (positive) sentiment = 'positive'
    // if (neutral) sentiment = 'neutral'
    // if (negative) sentiment = 'negative'
    react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.promise(Promise.all([(0,_generic_delay__WEBPACK_IMPORTED_MODULE_6__["default"])(1500), (0,_api_v1_comments_comments_api_util__WEBPACK_IMPORTED_MODULE_5__.checkToxicity)({
      content: rawText
    })]), {
      pending: 'Analyzing Comment...',
      success: 'Thanks For Being Civil!',
      error: 'Promise rejected 🤯'
    }).then(function () {
      createComment(_objectSpread(_objectSpread({}, values), {}, {
        content: content,
        memeFlag: false,
        parentId: (modalProps === null || modalProps === void 0 ? void 0 : modalProps.commentId) || null,
        subtopicId: subtopicId,
        createdBy: compState.username,
        rootId: compState.rootParentCommentId,
        rawText: rawText
      }));
    });
    setSubmitting(false);
    resetForm({});
  }, [compState, content, rawText, modalProps, subtopicId]);
});

/***/ }),

/***/ "./src/pages/CommonComponents/AnimatedCheckmark/Index.jsx":
/*!****************************************************************!*\
  !*** ./src/pages/CommonComponents/AnimatedCheckmark/Index.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Style_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Style/index */ "./src/pages/CommonComponents/AnimatedCheckmark/Style/index.js");
/* eslint-disable jsx-a11y/label-has-associated-control */



var AnimatedCheckmark = function AnimatedCheckmark(_ref) {
  var toxicityScore = _ref.toxicityScore;
  var color;
  var text;

  if (toxicityScore < 0.6) {
    color = 'green';
    text = 'Great!';
  }

  if (toxicityScore >= 0.6 && toxicityScore <= 0.9) {
    color = 'var(--m-danger-color)';
    text = 'You are OK but getting close';
  }

  if (toxicityScore > 0.9) {
    color = 'red';
    text = 'You are being toxic';
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_1__.Container, {
    color: color
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_1__.Input, {
    readOnly: true,
    disabled: true,
    checked: Boolean(toxicityScore),
    type: "checkbox"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    width: "15",
    height: "14",
    viewBox: "0 0 15 14",
    fill: "none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M2 8.36364L6.23077 12L13 2"
  }))), toxicityScore && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      marginLeft: '0.5vw'
    }
  }, text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    style: {
      width: 0,
      height: 0
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("filter", {
    id: "goo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("feGaussianBlur", {
    "in": "SourceGraphic",
    stdDeviation: "4",
    result: "blur"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("feColorMatrix", {
    "in": "blur",
    mode: "matrix",
    values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7",
    result: "goo"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("feBlend", {
    "in": "SourceGraphic",
    in2: "goo"
  })))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnimatedCheckmark);

/***/ }),

/***/ "./src/pages/CommonComponents/AnimatedCheckmark/Style/index.js":
/*!*********************************************************************!*\
  !*** ./src/pages/CommonComponents/AnimatedCheckmark/Style/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "Input": () => (/* binding */ Input)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _templateObject, _templateObject2, _templateObject3;

/* eslint-disable import/prefer-default-export */
 // const primary = '#4d271a88'

var splash = function splash(primary) {
  return (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.keyframes)(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  40% {\n    background: ", ";\n    box-shadow: 0 -18px 0 -8px ", ", 16px -8px 0 -8px ", ", 16px 8px 0 -8px ", ", 0 18px 0 -8px ", ", -16px 8px 0 -8px ", ", -16px -8px 0 -8px ", ";\n  }\n\n  100% {\n    background: ", ";\n    box-shadow: 0 -36px 0 -10px transparent, 32px -16px 0 -10px transparent, 32px 16px 0 -10px transparent, 0 36px 0 -10px transparent, -32px 16px 0 -10px transparent, -32px -16px 0 -10px transparent;\n  }\n  \n\n"])), primary, primary, primary, primary, primary, primary, primary, primary);
};

var Container = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  width: 24px;\n  height: 24px;\n  color: ", ";\n  /* transform: scale(3); */\n  span {\n    margin-left: .5vw;\n  }\n  input {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 24px;\n    height: 24px;\n    border: 2px solid #bfbfc0;\n    border-radius: 50%;\n    z-index: 9999999999;\n\n  }\n\n  label {\n    z-index: 999999999;\n    width: 24px;\n    height: 24px;\n    background: none;\n    border-radius: 50%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    -webkit-filter: url(#goo);\n    filter: url(#goo);\n    transform: translate3d(0,0,0);\n    /* pointer-events: none; */\n  }\n\n  svg {\n    position: absolute;\n    top: 5px;\n    left: 4px;\n    z-index: 99999999999;\n    pointer-events: none;\n    path {\n      stroke: white;\n      stroke-width: 3;\n      stroke-linecap: round;\n      stroke-linejoin: round;\n      stroke-dasharray: 19;\n      stroke-dashoffset: 19;\n      transition: stroke-dashoffset .3s ease;\n      transition-delay: .2s;\n    }\n  }\n\n  input:checked {\n    border: none;\n  }\n  input:checked + label {\n      animation: ", " .6s ease forwards;\n      border: 2px solid ", ";\n\n      + svg path {\n        stroke-dashoffset: 0\n      }\n  }\n\n"])), function (props) {
  return props.color;
}, function (props) {
  return splash(props.color);
}, function (props) {
  return props.color;
});
var Input = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('input')(_templateObject3 || (_templateObject3 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    -webkit-tap-highlight-color: transparent;\n    cursor: pointer;\n    margin: 0;\n    &:focus {\n      outline: 0;\n    }\n"])));

/***/ }),

/***/ "./src/pages/CommonComponents/RichTextEditor/Index.jsx":
/*!*************************************************************!*\
  !*** ./src/pages/CommonComponents/RichTextEditor/Index.jsx ***!
  \*************************************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/charlescoombs/deployments/civil_frontend/src/pages/CommonComponents/RichTextEditor/Index.jsx: Unexpected token, expected \"}\" (82:68)\n\n\u001b[0m \u001b[90m 80 |\u001b[39m \u001b[36mconst\u001b[39m \u001b[33mCustomButton\u001b[39m \u001b[33m=\u001b[39m ({ isHidden\u001b[33m,\u001b[39m pickerRef\u001b[33m,\u001b[39m setIsHidden }) \u001b[33m=>\u001b[39m (\u001b[0m\n\u001b[0m \u001b[90m 81 |\u001b[39m   \u001b[33m<\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 82 |\u001b[39m     \u001b[33m<\u001b[39m\u001b[33mspan\u001b[39m role\u001b[33m=\u001b[39m\u001b[32m\"button\"\u001b[39m onClick\u001b[33m=\u001b[39m{() \u001b[33m=>\u001b[39m setIsHidden((prev) \u001b[33m=>\u001b[39m \u001b[33m!\u001b[39mprev) onClick\u001b[33m=\u001b[39m{() \u001b[33m=>\u001b[39m setIsHidden((prev) \u001b[33m=>\u001b[39m \u001b[33m!\u001b[39mprev)}\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m                                                                     \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 83 |\u001b[39m       🙂\u001b[0m\n\u001b[0m \u001b[90m 84 |\u001b[39m     \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mspan\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 85 |\u001b[39m     \u001b[33m<\u001b[39m\u001b[33mEmojiContainer\u001b[39m hidden\u001b[33m=\u001b[39m{isHidden}\u001b[33m>\u001b[39m\u001b[0m\n    at Object._raise (/Users/charlescoombs/deployments/civil_frontend/node_modules/@babel/parser/lib/index.js:476:17)\n    at Object.raiseWithData (/Users/charlescoombs/deployments/civil_frontend/node_modules/@babel/parser/lib/index.js:469:17)\n    at Object.raise (/Users/charlescoombs/deployments/civil_frontend/node_modules/@babel/parser/lib/index.js:430:17)\n    at Object.unexpected (/Users/charlescoombs/deployments/civil_frontend/node_modules/@babel/parser/lib/index.js:3789:16)\n    at Object.expect (/Users/charlescoombs/deployments/civil_frontend/node_modules/@babel/parser/lib/index.js:3773:28)\n    at Object.jsxParseExpressionContainer (/Users/charlescoombs/deployments/civil_frontend/node_modules/@babel/parser/lib/index.js:7647:10)\n    at Object.jsxParseAttributeValue (/Users/charlescoombs/deployments/civil_frontend/node_modules/@babel/parser/lib/index.js:7604:21)\n    at Object.jsxParseAttribute (/Users/charlescoombs/deployments/civil_frontend/node_modules/@babel/parser/lib/index.js:7665:38)\n    at Object.jsxParseOpeningElementAfterName (/Users/charlescoombs/deployments/civil_frontend/node_modules/@babel/parser/lib/index.js:7685:28)\n    at Object.jsxParseOpeningElementAt (/Users/charlescoombs/deployments/civil_frontend/node_modules/@babel/parser/lib/index.js:7678:17)\n    at Object.jsxParseElementAt (/Users/charlescoombs/deployments/civil_frontend/node_modules/@babel/parser/lib/index.js:7710:33)\n    at Object.jsxParseElementAt (/Users/charlescoombs/deployments/civil_frontend/node_modules/@babel/parser/lib/index.js:7726:32)\n    at Object.jsxParseElement (/Users/charlescoombs/deployments/civil_frontend/node_modules/@babel/parser/lib/index.js:7793:17)\n    at Object.parseExprAtom (/Users/charlescoombs/deployments/civil_frontend/node_modules/@babel/parser/lib/index.js:7807:19)\n    at Object.parseExprSubscripts (/Users/charlescoombs/deployments/civil_frontend/node_modules/@babel/parser/lib/index.js:12149:23)\n    at Object.parseUpdate (/Users/charlescoombs/deployments/civil_frontend/node_modules/@babel/parser/lib/index.js:12129:21)\n    at Object.parseMaybeUnary (/Users/charlescoombs/deployments/civil_frontend/node_modules/@babel/parser/lib/index.js:12104:23)\n    at Object.parseMaybeUnaryOrPrivate (/Users/charlescoombs/deployments/civil_frontend/node_modules/@babel/parser/lib/index.js:11901:61)\n    at Object.parseExprOps (/Users/charlescoombs/deployments/civil_frontend/node_modules/@babel/parser/lib/index.js:11908:23)\n    at Object.parseMaybeConditional (/Users/charlescoombs/deployments/civil_frontend/node_modules/@babel/parser/lib/index.js:11878:23)\n    at Object.parseMaybeAssign (/Users/charlescoombs/deployments/civil_frontend/node_modules/@babel/parser/lib/index.js:11833:21)\n    at /Users/charlescoombs/deployments/civil_frontend/node_modules/@babel/parser/lib/index.js:11791:39\n    at Object.allowInAnd (/Users/charlescoombs/deployments/civil_frontend/node_modules/@babel/parser/lib/index.js:13823:12)\n    at Object.parseMaybeAssignAllowIn (/Users/charlescoombs/deployments/civil_frontend/node_modules/@babel/parser/lib/index.js:11791:17)\n    at Object.parseParenAndDistinguishExpression (/Users/charlescoombs/deployments/civil_frontend/node_modules/@babel/parser/lib/index.js:12901:28)\n    at Object.parseExprAtom (/Users/charlescoombs/deployments/civil_frontend/node_modules/@babel/parser/lib/index.js:12476:23)\n    at Object.parseExprAtom (/Users/charlescoombs/deployments/civil_frontend/node_modules/@babel/parser/lib/index.js:7812:20)\n    at Object.parseExprSubscripts (/Users/charlescoombs/deployments/civil_frontend/node_modules/@babel/parser/lib/index.js:12149:23)\n    at Object.parseUpdate (/Users/charlescoombs/deployments/civil_frontend/node_modules/@babel/parser/lib/index.js:12129:21)\n    at Object.parseMaybeUnary (/Users/charlescoombs/deployments/civil_frontend/node_modules/@babel/parser/lib/index.js:12104:23)\n    at Object.parseMaybeUnaryOrPrivate (/Users/charlescoombs/deployments/civil_frontend/node_modules/@babel/parser/lib/index.js:11901:61)\n    at Object.parseExprOps (/Users/charlescoombs/deployments/civil_frontend/node_modules/@babel/parser/lib/index.js:11908:23)\n    at Object.parseMaybeConditional (/Users/charlescoombs/deployments/civil_frontend/node_modules/@babel/parser/lib/index.js:11878:23)\n    at Object.parseMaybeAssign (/Users/charlescoombs/deployments/civil_frontend/node_modules/@babel/parser/lib/index.js:11833:21)\n    at Object.parseFunctionBody (/Users/charlescoombs/deployments/civil_frontend/node_modules/@babel/parser/lib/index.js:13433:24)\n    at Object.parseArrowExpression (/Users/charlescoombs/deployments/civil_frontend/node_modules/@babel/parser/lib/index.js:13412:10)");

/***/ })

}]);
//# sourceMappingURL=comment-form.bundle.js.map