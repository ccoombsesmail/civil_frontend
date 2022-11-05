"use strict";
(self["webpackChunkcivil"] = self["webpackChunkcivil"] || []).push([["comment-form"],{

/***/ "./src/generic/delay.js":
/*!******************************!*\
  !*** ./src/generic/delay.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/node_modules/react-router/dist/index.js");
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
  var contentId = pathname.match(uuidRegEx)[0];
  var subtopicId = pathname.match(uuidRegEx)[1];
  console.log(pathname);
  var compState = (0,_hooks_useGetStateEffect__WEBPACK_IMPORTED_MODULE_8__["default"])(contentId, subtopicId, modalProps);
  var handleSubmit = (0,_hooks_useHandleSubmit__WEBPACK_IMPORTED_MODULE_9__["default"])(compState, richTextEditorData.rawHTML, richTextEditorData.rawText, modalProps, subtopicId || contentId, contentId);
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "Description": () => (/* binding */ Description),
/* harmony export */   "FormContainer": () => (/* binding */ FormContainer),
/* harmony export */   "InputWrapper": () => (/* binding */ InputWrapper),
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
  var _useSelector, _useSelector2, _useSelector3;
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
    return ((_c$data = c.data) === null || _c$data === void 0 ? void 0 : _c$data.id) === (modalProps === null || modalProps === void 0 ? void 0 : modalProps.rootParentCommentId) || (modalProps === null || modalProps === void 0 ? void 0 : modalProps.commentId);
  });
  var tribunalComment = (_useSelector3 = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (s) {
    return s.tribunalComments.list;
  })) === null || _useSelector3 === void 0 ? void 0 : _useSelector3.find(function (c) {
    var _c$data2;
    return ((_c$data2 = c.data) === null || _c$data2 === void 0 ? void 0 : _c$data2.id) === (modalProps === null || modalProps === void 0 ? void 0 : modalProps.rootParentCommentId);
  });
  var _ref = (comment === null || comment === void 0 ? void 0 : comment.data) || (tribunalComment === null || tribunalComment === void 0 ? void 0 : tribunalComment.data) || {},
    createdBy = _ref.createdBy,
    createdByIconSrc = _ref.createdByIconSrc,
    createdAt = _ref.createdAt;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var commentContent = (modalProps === null || modalProps === void 0 ? void 0 : modalProps.replyType) !== 'REPLY_FROM_TOPIC' ? findCommentContent(comment || tribunalComment, modalProps === null || modalProps === void 0 ? void 0 : modalProps.commentId) : topic === null || topic === void 0 ? void 0 : topic.description;
    return {
      subtopicId: subtopicId,
      createdByIconSrc: createdByIconSrc || (topic === null || topic === void 0 ? void 0 : topic.createdByIconSrc),
      username: user === null || user === void 0 ? void 0 : user.username,
      createdBy: createdBy || (topic === null || topic === void 0 ? void 0 : topic.createdBy) || (tribunalComment === null || tribunalComment === void 0 ? void 0 : tribunalComment.createdBy),
      time: createdAt || (topic === null || topic === void 0 ? void 0 : topic.createdAt),
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
/* harmony import */ var _redux_actions_tribunal_comments__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../redux/actions/tribunal_comments */ "./src/redux/actions/tribunal_comments/index.js");
/* harmony import */ var _api_v1_comments_comments_api_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../api/v1/comments/comments_api_util */ "./src/api/v1/comments/comments_api_util.js");
/* harmony import */ var _generic_delay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../generic/delay */ "./src/generic/delay.js");
/* harmony import */ var _hooks_routing_useDetectCurrentPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/routing/useDetectCurrentPage */ "./src/pages/hooks/routing/useDetectCurrentPage.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (compState, content, rawText, modalProps, contentId, topicId) {
  var _useDetectCurrentPage = (0,_hooks_routing_useDetectCurrentPage__WEBPACK_IMPORTED_MODULE_8__["default"])(),
    isTribunalComment = _useDetectCurrentPage.isOnTribunalPage;
  var _ref = modalProps || {},
    tribunalCommentUnderReviewId = _ref.tribunalCommentUnderReviewId,
    commentId = _ref.commentId;
  var isParentTribunalCommentUnderReview = isTribunalComment && tribunalCommentUnderReviewId === commentId;
  var parentId = isParentTribunalCommentUnderReview ? null : commentId || null;
  var rootId = isParentTribunalCommentUnderReview ? null : compState.rootParentCommentId;
  var _useBindDispatch = (0,_hooks_redux_useBindDispatch__WEBPACK_IMPORTED_MODULE_3__["default"])(_redux_actions_comments__WEBPACK_IMPORTED_MODULE_4__["default"], _redux_actions_tribunal_comments__WEBPACK_IMPORTED_MODULE_5__["default"]),
    createComment = _useBindDispatch.createComment,
    createTribunalComment = _useBindDispatch.createTribunalComment;
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (values, _ref2) {
    var setSubmitting = _ref2.setSubmitting,
      resetForm = _ref2.resetForm;
    react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.promise(Promise.all([(0,_generic_delay__WEBPACK_IMPORTED_MODULE_7__["default"])(1500), (0,_api_v1_comments_comments_api_util__WEBPACK_IMPORTED_MODULE_6__.checkToxicity)({
      content: rawText
    })]), {
      pending: 'Analyzing Comment...',
      success: {
        render: function render(_ref3) {
          var data = _ref3.data;
          var toxicityScore = data[1].data.SEVERE_TOXICITY;
          if (toxicityScore < 0.6) return 'Thanks For Being Civil!';
          if (toxicityScore >= 0.6 && toxicityScore <= 0.9) return 'Thanks for being semi-civil. Maybe say things a bit nicer';
          return 'You are being toxic :( \n Your comment will be flagged';
        },
        // other options
        icon: '🟢'
      },
      error: 'Promise rejected 🤯'
    }).then(function (data) {
      var toxicityScore = data[1].data.SEVERE_TOXICITY;
      var toxicityStatus;
      if (toxicityScore < 0.6) toxicityStatus = 'NOT_TOXIC';
      if (toxicityScore > 0.9) toxicityStatus = 'TOXIC';
      var comment = _objectSpread(_objectSpread({}, values), {}, {
        content: content,
        memeFlag: false,
        parentId: parentId,
        contentId: contentId,
        subtopicId: contentId,
        topicId: topicId,
        createdBy: compState.username,
        rootId: rootId,
        rawText: rawText,
        toxicityStatus: toxicityStatus
      });
      return isTribunalComment ? createTribunalComment(comment) : createComment(comment);
    });
    setSubmitting(false);
    resetForm({});
  }, [compState, content, rawText, modalProps.tribunalCommentUnderReviewId, modalProps.commentId, contentId]);
});

/***/ }),

/***/ "./src/pages/CommonComponents/AnimatedCheckmark/Index.jsx":
/*!****************************************************************!*\
  !*** ./src/pages/CommonComponents/AnimatedCheckmark/Index.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./src/pages/CommonComponents/Overlay/style.js":
/*!*****************************************************!*\
  !*** ./src/pages/CommonComponents/Overlay/style.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Overlay": () => (/* binding */ Overlay)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _templateObject;

var Overlay = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  z-index: 999999;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  background-color: #000;\n  opacity: 0.1;\n"])));

/***/ }),

/***/ "./src/pages/CommonComponents/RichTextEditor/Index.jsx":
/*!*************************************************************!*\
  !*** ./src/pages/CommonComponents/RichTextEditor/Index.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_quill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-quill */ "./node_modules/react-quill/lib/index.js");
/* harmony import */ var react_quill__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_quill__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-quill/dist/quill.snow.css */ "./node_modules/react-quill/dist/quill.snow.css");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Style */ "./src/pages/CommonComponents/RichTextEditor/Style/index.js");
/* harmony import */ var _Overlay_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Overlay/style */ "./src/pages/CommonComponents/Overlay/style.js");

/* eslint-disable react/no-this-in-sfc */
/* eslint-disable jsx-a11y/control-has-associated-label */





var RichTextEditor = function RichTextEditor(_ref) {
  var content = _ref.content,
    setContent = _ref.setContent,
    setToxicityScore = _ref.setToxicityScore;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
    isHidden = _useState2[0],
    setIsHidden = _useState2[1];
  var modules = {
    toolbar: {
      container: '#toolbar'
    }
  };
  var handleOnChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (currContent, delta, source, editor) {
    setContent({
      rawHTML: editor.getHTML(),
      content: editor.getContents(),
      rawText: editor.getText()
    });
    if (setToxicityScore) setToxicityScore(null);
  }, []);
  var pickerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  var quillRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (pickerRef) {
      var emojiPicker = document.querySelector('unicode-emoji-picker');
      emojiPicker.addEventListener('emoji-pick', function (event) {
        if (quillRef.current) {
          var _editor$getSelection;
          var editor = quillRef.current.editor;
          var cursorPosition = ((_editor$getSelection = editor.getSelection()) === null || _editor$getSelection === void 0 ? void 0 : _editor$getSelection.index) || editor.getLength() - 1;
          editor.insertText(cursorPosition, "".concat(event.detail.emoji));
          editor.setSelection(cursorPosition + 2);
        }
      });
    }
  }, [pickerRef, quillRef]);
  var formats = ['bold', 'italic', 'underline', 'strike', 'blockquote', 'clean'];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_4__.Container, {
    className: "text-editor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Overlay_style__WEBPACK_IMPORTED_MODULE_5__.Overlay, {
    hidden: isHidden,
    onClick: function onClick() {
      return setIsHidden(function (prev) {
        return !prev;
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(CustomToolbar, {
    setIsHidden: setIsHidden,
    pickerRef: pickerRef,
    isHidden: isHidden
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react_quill__WEBPACK_IMPORTED_MODULE_2___default()), {
    ref: quillRef,
    theme: "snow",
    value: content,
    onChange: handleOnChange,
    modules: modules,
    formats: formats,
    placeholder: "Say something..."
  }));
};
var CustomButton = function CustomButton(_ref2) {
  var isHidden = _ref2.isHidden,
    pickerRef = _ref2.pickerRef,
    setIsHidden = _ref2.setIsHidden;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    onClick: function onClick() {
      return setIsHidden(function (prev) {
        return !prev;
      });
    },
    onKeyDown: function onKeyDown() {
      return setIsHidden(function (prev) {
        return !prev;
      });
    },
    role: "button",
    tabIndex: 0
  }, "\uD83D\uDE42"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_4__.EmojiContainer, {
    hidden: isHidden
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("unicode-emoji-picker", {
    ref: pickerRef,
    version: "14.0"
  })));
};
var CustomToolbar = function CustomToolbar(_ref3) {
  var setIsHidden = _ref3.setIsHidden,
    isHidden = _ref3.isHidden,
    pickerRef = _ref3.pickerRef;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    id: "toolbar",
    style: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", {
    type: "button",
    className: "ql-bold"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", {
    type: "button",
    className: "ql-italic"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", {
    type: "button",
    className: "ql-underline"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", {
    type: "button",
    className: "ql-strike"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", {
    type: "button",
    className: "ql-blockquote"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", {
    type: "button",
    className: "ql-clean"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_4__.EmojiButton, {
    type: "button",
    className: "ql-insertEmoji"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(CustomButton, {
    pickerRef: pickerRef,
    isHidden: isHidden,
    setIsHidden: setIsHidden
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RichTextEditor);

/***/ }),

/***/ "./src/pages/CommonComponents/RichTextEditor/Style/index.js":
/*!******************************************************************!*\
  !*** ./src/pages/CommonComponents/RichTextEditor/Style/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "EmojiButton": () => (/* binding */ EmojiButton),
/* harmony export */   "EmojiContainer": () => (/* binding */ EmojiContainer)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _templateObject, _templateObject2, _templateObject3;

var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background-color: white;\n  border-radius: .5em;\n  margin-bottom: 1em;\n  min-width: 92%;\n  position: relative;\n  .ql-snow.ql-toolbar:after {\n    display: none;\n  }\n  .ql-toolbar {\n    border-top-left-radius: .5em;\n    border-top-right-radius: .5em;\n  }\n\n  .ql-container {\n    border-bottom-left-radius: .5em;\n    border-bottom-right-radius: .5em;\n  }\n\n  #toolbar {\n    button:after {\n      display: none;\n    }\n  }\n\n"])));
var EmojiButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('button')(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative ;\n  display: flex;\n  align-items: center;\n\n  &:after {\n    display: none;\n  }\n\n"])));
var EmojiContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(_templateObject3 || (_templateObject3 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([" \n  position: absolute;\n  background: white;\n  z-index: 9999999;\n  transform: translate(-90%, -90%) scale(.8);\n"])));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBZ0I7RUFBRSxnQkFDM0YscUZBQ0U7SUFBUSxJQUFJLEVBQUMsUUFBUTtJQUFDLFNBQVMsRUFBQztFQUFTLEVBQUcsZUFDNUM7SUFBUSxJQUFJLEVBQUMsUUFBUTtJQUFDLFNBQVMsRUFBQztFQUFXLEVBQUcsZUFDOUM7SUFBUSxJQUFJLEVBQUMsUUFBUTtJQUFDLFNBQVMsRUFBQztFQUFjLEVBQUcsZUFDakQ7SUFBUSxJQUFJLEVBQUMsUUFBUTtJQUFDLFNBQVMsRUFBQztFQUFXLEVBQUcsZUFDOUM7SUFBUSxJQUFJLEVBQUMsUUFBUTtJQUFDLFNBQVMsRUFBQztFQUFlLEVBQUcsZUFDbEQ7SUFBUSxJQUFJLEVBQUMsUUFBUTtJQUFDLFNBQVMsRUFBQztFQUFVLEVBQUcsQ0FFekMsZUFFTiwyREFBQywrQ0FBVztJQUFDLElBQUksRUFBQyxRQUFRO0lBQUMsU0FBUyxFQUFDO0VBQWdCLGdCQUNuRCwyREFBQyxZQUFZO0lBQUMsU0FBUyxFQUFFcEIsU0FBVTtJQUFDLFFBQVEsRUFBRWIsUUFBUztJQUFDLFdBQVcsRUFBRUM7RUFBWSxFQUFHLENBQ3hFLENBQ1Y7QUFBQSxDQUNQO0FBRUQsaUVBQWVwSSxjQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JHUztBQUUvQixJQUFNUSxTQUFTLEdBQUd3Qyw2REFBVSxra0JBeUJsQztBQUVNLElBQU1nRixXQUFXLEdBQUdoRiw2REFBTSxDQUFDLFFBQVEsQ0FBQyx1UEFTMUM7QUFFTSxJQUFNaUYsY0FBYyxHQUFHakYsNkRBQU0sQ0FBQyxLQUFLLENBQUMsNlBBSzFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvZ2VuZXJpYy9kZWxheS5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9Db21tZW50Rm9ybS9JbmRleC5qc3giLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvQ29tbWVudEZvcm0vU3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvQ29tbWVudEZvcm0vaG9va3MvdXNlR2V0U3RhdGVFZmZlY3QuanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvQ29tbWVudEZvcm0vaG9va3MvdXNlSGFuZGxlU3VibWl0LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL0NvbW1vbkNvbXBvbmVudHMvQW5pbWF0ZWRDaGVja21hcmsvSW5kZXguanN4Iiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL0NvbW1vbkNvbXBvbmVudHMvQW5pbWF0ZWRDaGVja21hcmsvU3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvQ29tbW9uQ29tcG9uZW50cy9PdmVybGF5L3N0eWxlLmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL0NvbW1vbkNvbXBvbmVudHMvUmljaFRleHRFZGl0b3IvSW5kZXguanN4Iiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL0NvbW1vbkNvbXBvbmVudHMvUmljaFRleHRFZGl0b3IvU3R5bGUvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKHQsIHYpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgaWYgKHYgPT09IHRydWUpIHJlamVjdCgpXG4gIHNldFRpbWVvdXQocmVzb2x2ZS5iaW5kKG51bGwsIHYpLCB0KVxufSlcbiIsIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtYm9vdHN0cmFwL01vZGFsJ1xuaW1wb3J0IHsgRm9ybWlrIH0gZnJvbSAnZm9ybWlrJ1xuXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL0NvbW1vbkNvbXBvbmVudHMvQnV0dG9uL0luZGV4J1xuaW1wb3J0IFVzZXJJbmZvSGVhZGVyIGZyb20gJy4uL0NvbW1vbkNvbXBvbmVudHMvVXNlckluZm9IZWFkZXIvSW5kZXgnXG5pbXBvcnQgQW5pbWF0ZWRDaGVja21hcmsgZnJvbSAnLi4vQ29tbW9uQ29tcG9uZW50cy9BbmltYXRlZENoZWNrbWFyay9JbmRleCdcbmltcG9ydCBSaWNoVGV4dEVkaXRvciBmcm9tICcuLi9Db21tb25Db21wb25lbnRzL1JpY2hUZXh0RWRpdG9yL0luZGV4J1xuXG5pbXBvcnQgdXNlU2V0SW5uZXJIdG1sIGZyb20gJy4uL2hvb2tzL3VzZVNldElubmVySHRtbCdcbmltcG9ydCB1c2VHZXRTdGF0ZUVmZmVjdCBmcm9tICcuL2hvb2tzL3VzZUdldFN0YXRlRWZmZWN0J1xuaW1wb3J0IHVzZUhhbmRsZVN1Ym1pdCBmcm9tICcuL2hvb2tzL3VzZUhhbmRsZVN1Ym1pdCdcblxuaW1wb3J0IHsgZ2V0VGltZVNpbmNlIH0gZnJvbSAnLi4vLi4vZ2VuZXJpYy9zdHJpbmcvZGF0ZUZvcm1hdHRlcidcbmltcG9ydCB7IGNoZWNrVG94aWNpdHkgfSBmcm9tICcuLi8uLi9hcGkvdjEvY29tbWVudHMvY29tbWVudHNfYXBpX3V0aWwnXG5cbmltcG9ydCB7XG4gIEZvcm1Db250YWluZXIsIElucHV0V3JhcHBlciwgQ29udGFpbmVyLCBEZXNjcmlwdGlvbiwgVG94aWNpdHlDb250cm9scyxcbn0gZnJvbSAnLi9TdHlsZSdcblxuY29uc3QgdXVpZFJlZ0V4ID0gbmV3IFJlZ0V4cCgvXFxiWzAtOWEtZl17OH1cXGItWzAtOWEtZl17NH0tWzAtOWEtZl17NH0tWzAtOWEtZl17NH0tXFxiWzAtOWEtZl17MTJ9XFxiL2cpXG5cbmNvbnN0IENyZWF0ZUNvbW1lbnRGb3JtID0gKHsgbW9kYWxQcm9wcyB9KSA9PiB7XG4gIGNvbnN0IGRlc2NSZWYgPSB1c2VSZWYobnVsbClcbiAgY29uc3QgW3JpY2hUZXh0RWRpdG9yRGF0YSwgc2V0UmljaFRleHRFZGl0b3JEYXRhXSA9IHVzZVN0YXRlKHtcbiAgICByYXdIVE1MOiAnJyxcbiAgICBjb250ZW50OiAnJyxcbiAgICByYXdUZXh0OiAnJyxcbiAgfSlcbiAgY29uc3QgW3RveGljaXR5U2NvcmUsIHNldFRveGljaXR5U2NvcmVdID0gdXNlU3RhdGUobnVsbClcblxuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VMb2NhdGlvbigpXG4gIGNvbnN0IGNvbnRlbnRJZCA9IHBhdGhuYW1lLm1hdGNoKHV1aWRSZWdFeClbMF1cbiAgY29uc3Qgc3VidG9waWNJZCA9IHBhdGhuYW1lLm1hdGNoKHV1aWRSZWdFeClbMV1cbiAgY29uc29sZS5sb2cocGF0aG5hbWUpXG4gIGNvbnN0IGNvbXBTdGF0ZSA9IHVzZUdldFN0YXRlRWZmZWN0KGNvbnRlbnRJZCwgc3VidG9waWNJZCwgbW9kYWxQcm9wcylcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gdXNlSGFuZGxlU3VibWl0KGNvbXBTdGF0ZSwgcmljaFRleHRFZGl0b3JEYXRhLnJhd0hUTUwsIHJpY2hUZXh0RWRpdG9yRGF0YS5yYXdUZXh0LCBtb2RhbFByb3BzLCBzdWJ0b3BpY0lkIHx8IGNvbnRlbnRJZCwgY29udGVudElkKVxuICB1c2VTZXRJbm5lckh0bWwoZGVzY1JlZiwgY29tcFN0YXRlLmh0bWxDb250ZW50KVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxGb3JtaWtcbiAgICAgICAgaW5pdGlhbFZhbHVlcz17e1xuICAgICAgICAgIGNvbnRlbnQ6ICcnLFxuICAgICAgICAgIHBvc2l0aXZlOiAnJyxcbiAgICAgICAgICBuZWdhdGl2ZTogJycsXG4gICAgICAgICAgbmV1dHJhbDogJycsXG4gICAgICAgIH19XG4gICAgICAgIHZhbGlkYXRlPXsoKSA9PiB7XG4gICAgICAgICAgY29uc3QgZXJyb3JzID0ge31cbiAgICAgICAgICBpZiAocmljaFRleHRFZGl0b3JEYXRhLmNvbnRlbnQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBlcnJvcnMuY29udGVudCA9ICdXcml0ZSBTb21ldGhpbmcnXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBlcnJvcnNcbiAgICAgICAgfX1cbiAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cbiAgICAgID5cbiAgICAgICAgeyh7IGlzU3VibWl0dGluZyB9KSA9PiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XG4gICAgICAgICAgICAgIDxNb2RhbC5UaXRsZT5Xcml0ZSBZb3VyIFJlcGx5PC9Nb2RhbC5UaXRsZT5cbiAgICAgICAgICAgIDwvTW9kYWwuSGVhZGVyPlxuICAgICAgICAgICAgPEZvcm1Db250YWluZXI+XG4gICAgICAgICAgICAgIDxNb2RhbC5Cb2R5PlxuICAgICAgICAgICAgICAgIDxVc2VySW5mb0hlYWRlclxuICAgICAgICAgICAgICAgICAgaWNvblNyYz17Y29tcFN0YXRlLmNyZWF0ZWRCeUljb25TcmN9XG4gICAgICAgICAgICAgICAgICB1c2VybmFtZT17Y29tcFN0YXRlLmNyZWF0ZWRCeX1cbiAgICAgICAgICAgICAgICAgIHRpbWU9e2dldFRpbWVTaW5jZShjb21wU3RhdGUudGltZSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8RGVzY3JpcHRpb24+XG4gICAgICAgICAgICAgICAgICA8c3BhbiByZWY9e2Rlc2NSZWZ9IC8+XG4gICAgICAgICAgICAgICAgPC9EZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICA8SW5wdXRXcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgPFJpY2hUZXh0RWRpdG9yXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3JpY2hUZXh0RWRpdG9yRGF0YS5jb250ZW50fVxuICAgICAgICAgICAgICAgICAgICBzZXRDb250ZW50PXtzZXRSaWNoVGV4dEVkaXRvckRhdGF9XG4gICAgICAgICAgICAgICAgICAgIHNldFRveGljaXR5U2NvcmU9e3NldFRveGljaXR5U2NvcmV9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvSW5wdXRXcmFwcGVyPlxuICAgICAgICAgICAgICA8L01vZGFsLkJvZHk+XG4gICAgICAgICAgICAgIDxNb2RhbC5Gb290ZXI+XG4gICAgICAgICAgICAgICAgPFRveGljaXR5Q29udHJvbHM+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjaGVja1RveGljaXR5KHsgY29udGVudDogcmljaFRleHRFZGl0b3JEYXRhLnJhd1RleHQgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRveGljaXR5U2NvcmUocmVzLmRhdGEuU0VWRVJFX1RPWElDSVRZLnRvRml4ZWQoMikpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBDaGVjayBUb3hpY2l0eSBTY29yZVxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxBbmltYXRlZENoZWNrbWFyayB0b3hpY2l0eVNjb3JlPXt0b3hpY2l0eVNjb3JlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHA+eyB0b3hpY2l0eVNjb3JlICYmIGBZb3VyIHRveGljaXR5IHNjb3JlIGlzICR7dG94aWNpdHlTY29yZX1gfTwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvVG94aWNpdHlDb250cm9scz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17aXNTdWJtaXR0aW5nfT5cbiAgICAgICAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L01vZGFsLkZvb3Rlcj5cbiAgICAgICAgICAgIDwvRm9ybUNvbnRhaW5lcj5cblxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9Gb3JtaWs+XG4gICAgPC9Db250YWluZXI+XG5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVDb21tZW50Rm9ybVxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IEZvcm0gfSBmcm9tICdmb3JtaWsnXG5cbmV4cG9ydCBjb25zdCBGb3JtQ29udGFpbmVyID0gc3R5bGVkKEZvcm0pYFxuICBtYXJnaW4tdG9wOiAwO1xuICBib3JkZXItcmFkaXVzOiAuNWVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbmBcblxuZXhwb3J0IGNvbnN0IERlc2NyaXB0aW9uID0gc3R5bGVkKCdwJylgIFxuICB3aWR0aDogOTAlO1xuICBwYWRkaW5nOiAuNWVtIDA7XG4gIG1hcmdpbi1ib3R0b206IDJlbTtcbiAgZm9udC1zaXplOiAuODVlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IGJsYWNrO1xuYFxuXG5leHBvcnQgY29uc3QgSW5wdXRXcmFwcGVyID0gc3R5bGVkKCdkaXYnKWBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgc2VjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIHdpZHRoOiAzMHZ3O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgICBwYWRkaW5nOiAuMmVtIC41ZW07XG4gICAgYmFja2dyb3VuZDogI2UwZTVlYztcbiAgICBib3JkZXItcmFkaXVzOiAuNGVtO1xuICAgIGJveC1zaGFkb3c6XG4gICAtN3B4IC03cHggMjBweCAwcHggI2ZmZjksXG4gICAtNHB4IC00cHggNXB4IDBweCAjZmZmOSxcbiAgIDdweCA3cHggMjBweCAwcHggIzAwMDIsXG4gICA0cHggNHB4IDVweCAwcHggIzAwMDEsXG4gICBpbnNldCAwcHggMHB4IDBweCAwcHggI2ZmZjksXG4gICBpbnNldCAwcHggMHB4IDBweCAwcHggIzAwMDEsXG4gICBpbnNldCAwcHggMHB4IDBweCAwcHggI2ZmZjksXG4gICBpbnNldCAwcHggMHB4IDBweCAwcHggIzAwMDE7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZCgnZGl2JylgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaDEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy1ib3R0b206IC41ZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICB9XG4gYFxuXG5leHBvcnQgY29uc3QgVG94aWNpdHlDb250cm9scyA9IHN0eWxlZCgnZGl2JylgXG4gIGZsZXgtZ3JvdzogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgPiBkaXYge1xuICAgIG1hcmdpbi1sZWZ0OiAxdnc7XG4gIH1cblxuICBwIHtcbiAgICBtYXJnaW46IDAgMWVtO1xuICAgIGNvbG9yOiAjOTc5Y2IwO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAuMXZ3OyAgXG4gIH1cblxuYFxuIiwiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuY29uc3QgZmluZENvbW1lbnRDb250ZW50ID0gKGNvbW1lbnQsIGlkKSA9PiB7XG4gIGNvbnN0IHZpc2l0ZWQgPSBuZXcgU2V0KClcbiAgY29uc3QgcSA9IFtjb21tZW50XVxuICB3aGlsZSAocS5sZW5ndGggIT09IDApIHtcbiAgICBjb25zdCBjdXJyTm9kZSA9IHEuc2hpZnQoKVxuICAgIHZpc2l0ZWQuYWRkKGN1cnJOb2RlLmRhdGEuaWQpXG4gICAgaWYgKGN1cnJOb2RlLmRhdGEuaWQgPT09IGlkKSByZXR1cm4gY3Vyck5vZGUuZGF0YS5jb250ZW50XG4gICAgY3Vyck5vZGUuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGlmICghdmlzaXRlZC5oYXMoY2hpbGQuZGF0YS5pZCkpIHEucHVzaChjaGlsZClcbiAgICB9KVxuICB9XG4gIHJldHVybiAnJ1xufVxuXG5leHBvcnQgZGVmYXVsdCAodG9waWNJZCwgc3VidG9waWNJZCwgbW9kYWxQcm9wcykgPT4ge1xuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3IoKHMpID0+IHMuc2Vzc2lvbi5jdXJyZW50VXNlcilcbiAgY29uc3QgdG9waWMgPSB1c2VTZWxlY3RvcigocykgPT4gcy50b3BpY3MubGlzdCk/LmZpbmQoKHQpID0+IHQuaWQgPT09IHRvcGljSWQpXG4gIGNvbnN0IGNvbW1lbnQgPSB1c2VTZWxlY3RvcigocykgPT4gcy5jb21tZW50cy5saXN0KT8uZmluZChcbiAgICAoYykgPT4gYy5kYXRhPy5pZCA9PT0gbW9kYWxQcm9wcz8ucm9vdFBhcmVudENvbW1lbnRJZCB8fCBtb2RhbFByb3BzPy5jb21tZW50SWQsXG4gIClcbiAgY29uc3QgdHJpYnVuYWxDb21tZW50ID0gdXNlU2VsZWN0b3IoKHMpID0+IHMudHJpYnVuYWxDb21tZW50cy5saXN0KT8uZmluZChcbiAgICAoYykgPT4gYy5kYXRhPy5pZCA9PT0gbW9kYWxQcm9wcz8ucm9vdFBhcmVudENvbW1lbnRJZCxcbiAgKVxuXG4gIGNvbnN0IHsgY3JlYXRlZEJ5LCBjcmVhdGVkQnlJY29uU3JjLCBjcmVhdGVkQXQgfSA9IGNvbW1lbnQ/LmRhdGEgfHwgdHJpYnVuYWxDb21tZW50Py5kYXRhIHx8IHt9XG4gIHJldHVybiB1c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBjb21tZW50Q29udGVudCA9IG1vZGFsUHJvcHM/LnJlcGx5VHlwZSAhPT0gJ1JFUExZX0ZST01fVE9QSUMnXG4gICAgICA/IGZpbmRDb21tZW50Q29udGVudChjb21tZW50IHx8IHRyaWJ1bmFsQ29tbWVudCwgbW9kYWxQcm9wcz8uY29tbWVudElkKSA6IHRvcGljPy5kZXNjcmlwdGlvblxuICAgIHJldHVybiB7XG4gICAgICBzdWJ0b3BpY0lkLFxuICAgICAgY3JlYXRlZEJ5SWNvblNyYzogY3JlYXRlZEJ5SWNvblNyYyB8fCB0b3BpYz8uY3JlYXRlZEJ5SWNvblNyYyxcbiAgICAgIHVzZXJuYW1lOiB1c2VyPy51c2VybmFtZSxcbiAgICAgIGNyZWF0ZWRCeTogY3JlYXRlZEJ5IHx8IHRvcGljPy5jcmVhdGVkQnkgfHwgdHJpYnVuYWxDb21tZW50Py5jcmVhdGVkQnksXG4gICAgICB0aW1lOiBjcmVhdGVkQXQgfHwgdG9waWM/LmNyZWF0ZWRBdCxcbiAgICAgIGh0bWxDb250ZW50OiBjb21tZW50Q29udGVudCxcbiAgICAgIHJvb3RQYXJlbnRDb21tZW50SWQ6IG1vZGFsUHJvcHM/LnJvb3RQYXJlbnRDb21tZW50SWQgfHwgbnVsbCxcbiAgICAgIHR5cGU6IG1vZGFsUHJvcHM/LnJlcGx5VHlwZSxcbiAgICB9XG4gIH0sIFt0b3BpYywgdXNlciwgY29tbWVudCwgc3VidG9waWNJZCwgbW9kYWxQcm9wc10pXG59XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSdcblxuaW1wb3J0IHVzZUJpbmREaXNwYXRjaCBmcm9tICcuLi8uLi9ob29rcy9yZWR1eC91c2VCaW5kRGlzcGF0Y2gnXG5pbXBvcnQgY29tbWVudEFjdGlvbnMgZnJvbSAnLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy9jb21tZW50cydcbmltcG9ydCB0cmlidW5hbENvbW1lbnRBY3Rpb25zIGZyb20gJy4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvdHJpYnVuYWxfY29tbWVudHMnXG5cbmltcG9ydCB7IGNoZWNrVG94aWNpdHkgfSBmcm9tICcuLi8uLi8uLi9hcGkvdjEvY29tbWVudHMvY29tbWVudHNfYXBpX3V0aWwnXG5pbXBvcnQgZGVsYXkgZnJvbSAnLi4vLi4vLi4vZ2VuZXJpYy9kZWxheSdcbmltcG9ydCB1c2VEZXRlY3RDdXJyZW50UGFnZSBmcm9tICcuLi8uLi9ob29rcy9yb3V0aW5nL3VzZURldGVjdEN1cnJlbnRQYWdlJ1xuXG5leHBvcnQgZGVmYXVsdCAoY29tcFN0YXRlLCBjb250ZW50LCByYXdUZXh0LCBtb2RhbFByb3BzLCBjb250ZW50SWQsIHRvcGljSWQpID0+IHtcbiAgY29uc3QgeyBpc09uVHJpYnVuYWxQYWdlOiBpc1RyaWJ1bmFsQ29tbWVudCB9ID0gdXNlRGV0ZWN0Q3VycmVudFBhZ2UoKVxuXG4gIGNvbnN0IHtcbiAgICB0cmlidW5hbENvbW1lbnRVbmRlclJldmlld0lkLFxuICAgIGNvbW1lbnRJZCxcbiAgfSA9IG1vZGFsUHJvcHMgfHwge31cblxuICBjb25zdCBpc1BhcmVudFRyaWJ1bmFsQ29tbWVudFVuZGVyUmV2aWV3ID0gaXNUcmlidW5hbENvbW1lbnRcbiAgJiYgdHJpYnVuYWxDb21tZW50VW5kZXJSZXZpZXdJZCA9PT0gY29tbWVudElkXG5cbiAgY29uc3QgcGFyZW50SWQgPSBpc1BhcmVudFRyaWJ1bmFsQ29tbWVudFVuZGVyUmV2aWV3ID8gbnVsbCA6IGNvbW1lbnRJZCB8fCBudWxsXG4gIGNvbnN0IHJvb3RJZCA9IGlzUGFyZW50VHJpYnVuYWxDb21tZW50VW5kZXJSZXZpZXcgPyBudWxsIDogY29tcFN0YXRlLnJvb3RQYXJlbnRDb21tZW50SWRcblxuICBjb25zdCB7XG4gICAgY3JlYXRlQ29tbWVudCxcbiAgICBjcmVhdGVUcmlidW5hbENvbW1lbnQsXG4gIH0gPSB1c2VCaW5kRGlzcGF0Y2goY29tbWVudEFjdGlvbnMsIHRyaWJ1bmFsQ29tbWVudEFjdGlvbnMpXG5cbiAgcmV0dXJuIHVzZUNhbGxiYWNrKCh2YWx1ZXMsIHsgc2V0U3VibWl0dGluZywgcmVzZXRGb3JtIH0pID0+IHtcbiAgICB0b2FzdC5wcm9taXNlKFxuICAgICAgUHJvbWlzZS5hbGwoW2RlbGF5KDE1MDApLCBjaGVja1RveGljaXR5KHsgY29udGVudDogcmF3VGV4dCB9KV0pLFxuICAgICAge1xuICAgICAgICBwZW5kaW5nOiAnQW5hbHl6aW5nIENvbW1lbnQuLi4nLFxuICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgcmVuZGVyKHsgZGF0YSB9KSB7XG4gICAgICAgICAgICBjb25zdCB0b3hpY2l0eVNjb3JlID0gZGF0YVsxXS5kYXRhLlNFVkVSRV9UT1hJQ0lUWVxuICAgICAgICAgICAgaWYgKHRveGljaXR5U2NvcmUgPCAwLjYpIHJldHVybiAnVGhhbmtzIEZvciBCZWluZyBDaXZpbCEnXG4gICAgICAgICAgICBpZiAodG94aWNpdHlTY29yZSA+PSAwLjYgJiYgdG94aWNpdHlTY29yZSA8PSAwLjkpIHJldHVybiAnVGhhbmtzIGZvciBiZWluZyBzZW1pLWNpdmlsLiBNYXliZSBzYXkgdGhpbmdzIGEgYml0IG5pY2VyJ1xuICAgICAgICAgICAgcmV0dXJuICdZb3UgYXJlIGJlaW5nIHRveGljIDooIFxcbiBZb3VyIGNvbW1lbnQgd2lsbCBiZSBmbGFnZ2VkJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgLy8gb3RoZXIgb3B0aW9uc1xuICAgICAgICAgIGljb246ICfwn5+iJyxcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6ICdQcm9taXNlIHJlamVjdGVkIPCfpK8nLFxuICAgICAgfSxcbiAgICApLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGNvbnN0IHRveGljaXR5U2NvcmUgPSBkYXRhWzFdLmRhdGEuU0VWRVJFX1RPWElDSVRZXG4gICAgICBsZXQgdG94aWNpdHlTdGF0dXNcbiAgICAgIGlmICh0b3hpY2l0eVNjb3JlIDwgMC42KSB0b3hpY2l0eVN0YXR1cyA9ICdOT1RfVE9YSUMnXG4gICAgICBpZiAodG94aWNpdHlTY29yZSA+IDAuOSkgdG94aWNpdHlTdGF0dXMgPSAnVE9YSUMnXG4gICAgICBjb25zdCBjb21tZW50ID0ge1xuICAgICAgICAuLi52YWx1ZXMsXG4gICAgICAgIGNvbnRlbnQsXG4gICAgICAgIG1lbWVGbGFnOiBmYWxzZSxcbiAgICAgICAgcGFyZW50SWQsXG4gICAgICAgIGNvbnRlbnRJZCxcbiAgICAgICAgc3VidG9waWNJZDogY29udGVudElkLFxuICAgICAgICB0b3BpY0lkLFxuICAgICAgICBjcmVhdGVkQnk6IGNvbXBTdGF0ZS51c2VybmFtZSxcbiAgICAgICAgcm9vdElkLFxuICAgICAgICByYXdUZXh0LFxuICAgICAgICB0b3hpY2l0eVN0YXR1cyxcbiAgICAgIH1cbiAgICAgIHJldHVybiBpc1RyaWJ1bmFsQ29tbWVudCA/IGNyZWF0ZVRyaWJ1bmFsQ29tbWVudChjb21tZW50KSA6IGNyZWF0ZUNvbW1lbnQoY29tbWVudClcbiAgICB9KVxuXG4gICAgc2V0U3VibWl0dGluZyhmYWxzZSlcbiAgICByZXNldEZvcm0oe30pXG4gIH0sIFtcbiAgICBjb21wU3RhdGUsXG4gICAgY29udGVudCxcbiAgICByYXdUZXh0LFxuICAgIG1vZGFsUHJvcHMudHJpYnVuYWxDb21tZW50VW5kZXJSZXZpZXdJZCxcbiAgICBtb2RhbFByb3BzLmNvbW1lbnRJZCxcbiAgICBjb250ZW50SWQsXG4gIF0pXG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9sYWJlbC1oYXMtYXNzb2NpYXRlZC1jb250cm9sICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IENvbnRhaW5lciwgSW5wdXQgfSBmcm9tICcuL1N0eWxlL2luZGV4J1xuXG5jb25zdCBBbmltYXRlZENoZWNrbWFyayA9ICh7IHRveGljaXR5U2NvcmUgfSkgPT4ge1xuICBsZXQgY29sb3JcbiAgbGV0IHRleHRcbiAgaWYgKHRveGljaXR5U2NvcmUgPCAwLjYpIHsgY29sb3IgPSAnZ3JlZW4nOyB0ZXh0ID0gJ0dyZWF0IScgfVxuICBpZiAodG94aWNpdHlTY29yZSA+PSAwLjYgJiYgdG94aWNpdHlTY29yZSA8PSAwLjkpIHsgY29sb3IgPSAndmFyKC0tbS1kYW5nZXItY29sb3IpJzsgdGV4dCA9ICdZb3UgYXJlIE9LIGJ1dCBnZXR0aW5nIGNsb3NlJyB9XG4gIGlmICh0b3hpY2l0eVNjb3JlID4gMC45KSB7IGNvbG9yID0gJ3JlZCc7IHRleHQgPSAnWW91IGFyZSBiZWluZyB0b3hpYycgfVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Q29udGFpbmVyIGNvbG9yPXtjb2xvcn0+XG4gICAgICAgIDxJbnB1dCByZWFkT25seSBkaXNhYmxlZCBjaGVja2VkPXtCb29sZWFuKHRveGljaXR5U2NvcmUpfSB0eXBlPVwiY2hlY2tib3hcIiAvPlxuICAgICAgICA8bGFiZWwgLz5cbiAgICAgICAgPHN2ZyB3aWR0aD1cIjE1XCIgaGVpZ2h0PVwiMTRcIiB2aWV3Qm94PVwiMCAwIDE1IDE0XCIgZmlsbD1cIm5vbmVcIj5cbiAgICAgICAgICA8cGF0aCBkPVwiTTIgOC4zNjM2NEw2LjIzMDc3IDEyTDEzIDJcIiAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICAge3RveGljaXR5U2NvcmUgJiYgPHNwYW4gc3R5bGU9e3sgbWFyZ2luTGVmdDogJzAuNXZ3JyB9fT57dGV4dH08L3NwYW4+fVxuICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiIHN0eWxlPXt7IHdpZHRoOiAwLCBoZWlnaHQ6IDAgfX0+XG4gICAgICAgIDxkZWZzPlxuICAgICAgICAgIDxmaWx0ZXIgaWQ9XCJnb29cIj5cbiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBpbj1cIlNvdXJjZUdyYXBoaWNcIiBzdGREZXZpYXRpb249XCI0XCIgcmVzdWx0PVwiYmx1clwiIC8+XG4gICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCBpbj1cImJsdXJcIiBtb2RlPVwibWF0cml4XCIgdmFsdWVzPVwiMSAwIDAgMCAwICAwIDEgMCAwIDAgIDAgMCAxIDAgMCAgMCAwIDAgMjIgLTdcIiByZXN1bHQ9XCJnb29cIiAvPlxuICAgICAgICAgICAgPGZlQmxlbmQgaW49XCJTb3VyY2VHcmFwaGljXCIgaW4yPVwiZ29vXCIgLz5cbiAgICAgICAgICA8L2ZpbHRlcj5cbiAgICAgICAgPC9kZWZzPlxuICAgICAgPC9zdmc+XG4gICAgPC8+XG4gIClcbn1cbmV4cG9ydCBkZWZhdWx0IEFuaW1hdGVkQ2hlY2ttYXJrXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5pbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG4vLyBjb25zdCBwcmltYXJ5ID0gJyM0ZDI3MWE4OCdcblxuY29uc3Qgc3BsYXNoID0gKHByaW1hcnkpID0+IGtleWZyYW1lc2BcbiAgNDAlIHtcbiAgICBiYWNrZ3JvdW5kOiAke3ByaW1hcnl9O1xuICAgIGJveC1zaGFkb3c6IDAgLTE4cHggMCAtOHB4ICR7cHJpbWFyeX0sIDE2cHggLThweCAwIC04cHggJHtwcmltYXJ5fSwgMTZweCA4cHggMCAtOHB4ICR7cHJpbWFyeX0sIDAgMThweCAwIC04cHggJHtwcmltYXJ5fSwgLTE2cHggOHB4IDAgLThweCAke3ByaW1hcnl9LCAtMTZweCAtOHB4IDAgLThweCAke3ByaW1hcnl9O1xuICB9XG5cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZDogJHtwcmltYXJ5fTtcbiAgICBib3gtc2hhZG93OiAwIC0zNnB4IDAgLTEwcHggdHJhbnNwYXJlbnQsIDMycHggLTE2cHggMCAtMTBweCB0cmFuc3BhcmVudCwgMzJweCAxNnB4IDAgLTEwcHggdHJhbnNwYXJlbnQsIDAgMzZweCAwIC0xMHB4IHRyYW5zcGFyZW50LCAtMzJweCAxNnB4IDAgLTEwcHggdHJhbnNwYXJlbnQsIC0zMnB4IC0xNnB4IDAgLTEwcHggdHJhbnNwYXJlbnQ7XG4gIH1cbiAgXG5cbmBcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZCgnZGl2JylgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy5jb2xvcn07XG4gIC8qIHRyYW5zZm9ybTogc2NhbGUoMyk7ICovXG4gIHNwYW4ge1xuICAgIG1hcmdpbi1sZWZ0OiAuNXZ3O1xuICB9XG4gIGlucHV0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNiZmJmYzA7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHotaW5kZXg6IDk5OTk5OTk5OTk7XG5cbiAgfVxuXG4gIGxhYmVsIHtcbiAgICB6LWluZGV4OiA5OTk5OTk5OTk7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICAtd2Via2l0LWZpbHRlcjogdXJsKCNnb28pO1xuICAgIGZpbHRlcjogdXJsKCNnb28pO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xuICAgIC8qIHBvaW50ZXItZXZlbnRzOiBub25lOyAqL1xuICB9XG5cbiAgc3ZnIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1cHg7XG4gICAgbGVmdDogNHB4O1xuICAgIHotaW5kZXg6IDk5OTk5OTk5OTk5O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHBhdGgge1xuICAgICAgc3Ryb2tlOiB3aGl0ZTtcbiAgICAgIHN0cm9rZS13aWR0aDogMztcbiAgICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbiAgICAgIHN0cm9rZS1saW5lam9pbjogcm91bmQ7XG4gICAgICBzdHJva2UtZGFzaGFycmF5OiAxOTtcbiAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAxOTtcbiAgICAgIHRyYW5zaXRpb246IHN0cm9rZS1kYXNob2Zmc2V0IC4zcyBlYXNlO1xuICAgICAgdHJhbnNpdGlvbi1kZWxheTogLjJzO1xuICAgIH1cbiAgfVxuXG4gIGlucHV0OmNoZWNrZWQge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxuICBpbnB1dDpjaGVja2VkICsgbGFiZWwge1xuICAgICAgYW5pbWF0aW9uOiAkeyhwcm9wcykgPT4gc3BsYXNoKHByb3BzLmNvbG9yKX0gLjZzIGVhc2UgZm9yd2FyZHM7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAkeyhwcm9wcykgPT4gcHJvcHMuY29sb3J9O1xuXG4gICAgICArIHN2ZyBwYXRoIHtcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDBcbiAgICAgIH1cbiAgfVxuXG5gXG5cbmV4cG9ydCBjb25zdCBJbnB1dCA9IHN0eWxlZCgnaW5wdXQnKWBcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luOiAwO1xuICAgICY6Zm9jdXMge1xuICAgICAgb3V0bGluZTogMDtcbiAgICB9XG5gXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgT3ZlcmxheSA9IHN0eWxlZCgnZGl2JylgXG4gIHotaW5kZXg6IDk5OTk5OTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIG9wYWNpdHk6IDAuMTtcbmBcbiIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLXRoaXMtaW4tc2ZjICovXG4vKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9jb250cm9sLWhhcy1hc3NvY2lhdGVkLWxhYmVsICovXG5pbXBvcnQgUmVhY3QsIHtcbiAgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZixcbn0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RRdWlsbCBmcm9tICdyZWFjdC1xdWlsbCdcblxuaW1wb3J0ICdyZWFjdC1xdWlsbC9kaXN0L3F1aWxsLnNub3cuY3NzJ1xuXG5pbXBvcnQgeyBDb250YWluZXIsIEVtb2ppQnV0dG9uLCBFbW9qaUNvbnRhaW5lciB9IGZyb20gJy4vU3R5bGUnXG5pbXBvcnQgeyBPdmVybGF5IH0gZnJvbSAnLi4vT3ZlcmxheS9zdHlsZSdcblxuY29uc3QgUmljaFRleHRFZGl0b3IgPSAoe1xuICBjb250ZW50LCBzZXRDb250ZW50LCBzZXRUb3hpY2l0eVNjb3JlLFxufSkgPT4ge1xuICBjb25zdCBbaXNIaWRkZW4sIHNldElzSGlkZGVuXSA9IHVzZVN0YXRlKHRydWUpXG5cbiAgY29uc3QgbW9kdWxlcyA9IHtcbiAgICB0b29sYmFyOiB7XG4gICAgICBjb250YWluZXI6ICcjdG9vbGJhcicsXG4gICAgfSxcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZU9uQ2hhbmdlID0gdXNlQ2FsbGJhY2soKGN1cnJDb250ZW50LCBkZWx0YSwgc291cmNlLCBlZGl0b3IpID0+IHtcbiAgICBzZXRDb250ZW50KHtcbiAgICAgIHJhd0hUTUw6IGVkaXRvci5nZXRIVE1MKCksXG4gICAgICBjb250ZW50OiBlZGl0b3IuZ2V0Q29udGVudHMoKSxcbiAgICAgIHJhd1RleHQ6IGVkaXRvci5nZXRUZXh0KCksXG4gICAgfSlcbiAgICBpZiAoc2V0VG94aWNpdHlTY29yZSkgc2V0VG94aWNpdHlTY29yZShudWxsKVxuICB9LCBbXSlcblxuICBjb25zdCBwaWNrZXJSZWYgPSB1c2VSZWYobnVsbClcbiAgY29uc3QgcXVpbGxSZWYgPSB1c2VSZWYobnVsbClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwaWNrZXJSZWYpIHtcbiAgICAgIGNvbnN0IGVtb2ppUGlja2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndW5pY29kZS1lbW9qaS1waWNrZXInKVxuICAgICAgZW1vamlQaWNrZXIuYWRkRXZlbnRMaXN0ZW5lcignZW1vamktcGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAocXVpbGxSZWYuY3VycmVudCkge1xuICAgICAgICAgIGNvbnN0IHsgZWRpdG9yIH0gPSBxdWlsbFJlZi5jdXJyZW50XG4gICAgICAgICAgY29uc3QgY3Vyc29yUG9zaXRpb24gPSBlZGl0b3IuZ2V0U2VsZWN0aW9uKCk/LmluZGV4IHx8IGVkaXRvci5nZXRMZW5ndGgoKSAtIDFcbiAgICAgICAgICBlZGl0b3IuaW5zZXJ0VGV4dChjdXJzb3JQb3NpdGlvbiwgYCR7ZXZlbnQuZGV0YWlsLmVtb2ppfWApXG4gICAgICAgICAgZWRpdG9yLnNldFNlbGVjdGlvbihjdXJzb3JQb3NpdGlvbiArIDIpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9LCBbcGlja2VyUmVmLCBxdWlsbFJlZl0pXG5cbiAgY29uc3QgZm9ybWF0cyA9IFsnYm9sZCcsICdpdGFsaWMnLCAndW5kZXJsaW5lJywgJ3N0cmlrZScsICdibG9ja3F1b3RlJywgJ2NsZWFuJ11cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cInRleHQtZWRpdG9yXCI+XG4gICAgICA8T3ZlcmxheSBoaWRkZW49e2lzSGlkZGVufSBvbkNsaWNrPXsoKSA9PiBzZXRJc0hpZGRlbigocHJldikgPT4gIXByZXYpfSAvPlxuICAgICAgPEN1c3RvbVRvb2xiYXIgc2V0SXNIaWRkZW49e3NldElzSGlkZGVufSBwaWNrZXJSZWY9e3BpY2tlclJlZn0gaXNIaWRkZW49e2lzSGlkZGVufSAvPlxuICAgICAgPFJlYWN0UXVpbGxcbiAgICAgICAgcmVmPXtxdWlsbFJlZn1cbiAgICAgICAgdGhlbWU9XCJzbm93XCJcbiAgICAgICAgdmFsdWU9e2NvbnRlbnR9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cbiAgICAgICAgbW9kdWxlcz17bW9kdWxlc31cbiAgICAgICAgZm9ybWF0cz17Zm9ybWF0c31cbiAgICAgICAgcGxhY2Vob2xkZXI9XCJTYXkgc29tZXRoaW5nLi4uXCJcbiAgICAgIC8+XG4gICAgPC9Db250YWluZXI+XG4gIClcbn1cblxuY29uc3QgQ3VzdG9tQnV0dG9uID0gKHsgaXNIaWRkZW4sIHBpY2tlclJlZiwgc2V0SXNIaWRkZW4gfSkgPT4gKFxuICA8PlxuICAgIDxzcGFuXG4gICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc0hpZGRlbigocHJldikgPT4gIXByZXYpfVxuICAgICAgb25LZXlEb3duPXsoKSA9PiBzZXRJc0hpZGRlbigocHJldikgPT4gIXByZXYpfVxuICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICB0YWJJbmRleD17MH1cbiAgICA+XG4gICAgICDwn5mCXG4gICAgPC9zcGFuPlxuICAgIDxFbW9qaUNvbnRhaW5lciBoaWRkZW49e2lzSGlkZGVufT5cbiAgICAgIDx1bmljb2RlLWVtb2ppLXBpY2tlciByZWY9e3BpY2tlclJlZn0gdmVyc2lvbj1cIjE0LjBcIiAvPlxuICAgIDwvRW1vamlDb250YWluZXI+XG4gIDwvPlxuKVxuXG5jb25zdCBDdXN0b21Ub29sYmFyID0gKHsgc2V0SXNIaWRkZW4sIGlzSGlkZGVuLCBwaWNrZXJSZWYgfSkgPT4gKFxuICA8ZGl2IGlkPVwidG9vbGJhclwiIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyB9fT5cbiAgICA8ZGl2PlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwicWwtYm9sZFwiIC8+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJxbC1pdGFsaWNcIiAvPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwicWwtdW5kZXJsaW5lXCIgLz5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cInFsLXN0cmlrZVwiIC8+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJxbC1ibG9ja3F1b3RlXCIgLz5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cInFsLWNsZWFuXCIgLz5cblxuICAgIDwvZGl2PlxuXG4gICAgPEVtb2ppQnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJxbC1pbnNlcnRFbW9qaVwiPlxuICAgICAgPEN1c3RvbUJ1dHRvbiBwaWNrZXJSZWY9e3BpY2tlclJlZn0gaXNIaWRkZW49e2lzSGlkZGVufSBzZXRJc0hpZGRlbj17c2V0SXNIaWRkZW59IC8+XG4gICAgPC9FbW9qaUJ1dHRvbj5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IFJpY2hUZXh0RWRpdG9yXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IC41ZW07XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgbWluLXdpZHRoOiA5MiU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLnFsLXNub3cucWwtdG9vbGJhcjphZnRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAucWwtdG9vbGJhciB7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogLjVlbTtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogLjVlbTtcbiAgfVxuXG4gIC5xbC1jb250YWluZXIge1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IC41ZW07XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IC41ZW07XG4gIH1cblxuICAjdG9vbGJhciB7XG4gICAgYnV0dG9uOmFmdGVyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5cbmBcblxuZXhwb3J0IGNvbnN0IEVtb2ppQnV0dG9uID0gc3R5bGVkKCdidXR0b24nKWBcbiAgcG9zaXRpb246IHJlbGF0aXZlIDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAmOmFmdGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbmBcblxuZXhwb3J0IGNvbnN0IEVtb2ppQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWAgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHotaW5kZXg6IDk5OTk5OTk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC05MCUsIC05MCUpIHNjYWxlKC44KTtcbmBcbiJdLCJuYW1lcyI6WyJ0IiwidiIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsImJpbmQiLCJSZWFjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwidXNlTG9jYXRpb24iLCJNb2RhbCIsIkZvcm1payIsIkJ1dHRvbiIsIlVzZXJJbmZvSGVhZGVyIiwiQW5pbWF0ZWRDaGVja21hcmsiLCJSaWNoVGV4dEVkaXRvciIsInVzZVNldElubmVySHRtbCIsInVzZUdldFN0YXRlRWZmZWN0IiwidXNlSGFuZGxlU3VibWl0IiwiZ2V0VGltZVNpbmNlIiwiY2hlY2tUb3hpY2l0eSIsIkZvcm1Db250YWluZXIiLCJJbnB1dFdyYXBwZXIiLCJDb250YWluZXIiLCJEZXNjcmlwdGlvbiIsIlRveGljaXR5Q29udHJvbHMiLCJ1dWlkUmVnRXgiLCJSZWdFeHAiLCJDcmVhdGVDb21tZW50Rm9ybSIsIm1vZGFsUHJvcHMiLCJkZXNjUmVmIiwicmF3SFRNTCIsImNvbnRlbnQiLCJyYXdUZXh0IiwicmljaFRleHRFZGl0b3JEYXRhIiwic2V0UmljaFRleHRFZGl0b3JEYXRhIiwidG94aWNpdHlTY29yZSIsInNldFRveGljaXR5U2NvcmUiLCJwYXRobmFtZSIsImNvbnRlbnRJZCIsIm1hdGNoIiwic3VidG9waWNJZCIsImNvbnNvbGUiLCJsb2ciLCJjb21wU3RhdGUiLCJoYW5kbGVTdWJtaXQiLCJodG1sQ29udGVudCIsInBvc2l0aXZlIiwibmVnYXRpdmUiLCJuZXV0cmFsIiwiZXJyb3JzIiwibGVuZ3RoIiwiaXNTdWJtaXR0aW5nIiwiY3JlYXRlZEJ5SWNvblNyYyIsImNyZWF0ZWRCeSIsInRpbWUiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsInRoZW4iLCJyZXMiLCJkYXRhIiwiU0VWRVJFX1RPWElDSVRZIiwidG9GaXhlZCIsInN0eWxlZCIsIkZvcm0iLCJ1c2VNZW1vIiwidXNlU2VsZWN0b3IiLCJmaW5kQ29tbWVudENvbnRlbnQiLCJjb21tZW50IiwiaWQiLCJ2aXNpdGVkIiwiU2V0IiwicSIsImN1cnJOb2RlIiwic2hpZnQiLCJhZGQiLCJjaGlsZHJlbiIsImZvckVhY2giLCJjaGlsZCIsImhhcyIsInB1c2giLCJ0b3BpY0lkIiwidXNlciIsInMiLCJzZXNzaW9uIiwiY3VycmVudFVzZXIiLCJ0b3BpYyIsInRvcGljcyIsImxpc3QiLCJmaW5kIiwiY29tbWVudHMiLCJjIiwicm9vdFBhcmVudENvbW1lbnRJZCIsImNvbW1lbnRJZCIsInRyaWJ1bmFsQ29tbWVudCIsInRyaWJ1bmFsQ29tbWVudHMiLCJjcmVhdGVkQXQiLCJjb21tZW50Q29udGVudCIsInJlcGx5VHlwZSIsImRlc2NyaXB0aW9uIiwidXNlcm5hbWUiLCJ0eXBlIiwidXNlQ2FsbGJhY2siLCJ0b2FzdCIsInVzZUJpbmREaXNwYXRjaCIsImNvbW1lbnRBY3Rpb25zIiwidHJpYnVuYWxDb21tZW50QWN0aW9ucyIsImRlbGF5IiwidXNlRGV0ZWN0Q3VycmVudFBhZ2UiLCJpc1RyaWJ1bmFsQ29tbWVudCIsImlzT25UcmlidW5hbFBhZ2UiLCJ0cmlidW5hbENvbW1lbnRVbmRlclJldmlld0lkIiwiaXNQYXJlbnRUcmlidW5hbENvbW1lbnRVbmRlclJldmlldyIsInBhcmVudElkIiwicm9vdElkIiwiY3JlYXRlQ29tbWVudCIsImNyZWF0ZVRyaWJ1bmFsQ29tbWVudCIsInZhbHVlcyIsInNldFN1Ym1pdHRpbmciLCJyZXNldEZvcm0iLCJwcm9taXNlIiwiYWxsIiwicGVuZGluZyIsInN1Y2Nlc3MiLCJyZW5kZXIiLCJpY29uIiwiZXJyb3IiLCJ0b3hpY2l0eVN0YXR1cyIsIm1lbWVGbGFnIiwiSW5wdXQiLCJjb2xvciIsInRleHQiLCJCb29sZWFuIiwibWFyZ2luTGVmdCIsIndpZHRoIiwiaGVpZ2h0Iiwia2V5ZnJhbWVzIiwic3BsYXNoIiwicHJpbWFyeSIsInByb3BzIiwiT3ZlcmxheSIsInVzZUVmZmVjdCIsIlJlYWN0UXVpbGwiLCJFbW9qaUJ1dHRvbiIsIkVtb2ppQ29udGFpbmVyIiwic2V0Q29udGVudCIsImlzSGlkZGVuIiwic2V0SXNIaWRkZW4iLCJtb2R1bGVzIiwidG9vbGJhciIsImNvbnRhaW5lciIsImhhbmRsZU9uQ2hhbmdlIiwiY3VyckNvbnRlbnQiLCJkZWx0YSIsInNvdXJjZSIsImVkaXRvciIsImdldEhUTUwiLCJnZXRDb250ZW50cyIsImdldFRleHQiLCJwaWNrZXJSZWYiLCJxdWlsbFJlZiIsImVtb2ppUGlja2VyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiY3VycmVudCIsImN1cnNvclBvc2l0aW9uIiwiZ2V0U2VsZWN0aW9uIiwiaW5kZXgiLCJnZXRMZW5ndGgiLCJpbnNlcnRUZXh0IiwiZGV0YWlsIiwiZW1vamkiLCJzZXRTZWxlY3Rpb24iLCJmb3JtYXRzIiwicHJldiIsIkN1c3RvbUJ1dHRvbiIsIkN1c3RvbVRvb2xiYXIiLCJqdXN0aWZ5Q29udGVudCIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=