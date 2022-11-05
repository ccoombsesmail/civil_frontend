"use strict";
(self["webpackChunkcivil"] = self["webpackChunkcivil"] || []).push([["topic-form"],{

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

/***/ "./src/generic/regex/urlValidators.js":
/*!********************************************!*\
  !*** ./src/generic/regex/urlValidators.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "twitterUrlValidtor": () => (/* binding */ twitterUrlValidtor),
/* harmony export */   "youTubeUrlValidator": () => (/* binding */ youTubeUrlValidator)
/* harmony export */ });
var youTubeUrlValidator = new RegExp(/^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/gm);
var twitterUrlValidtor = new RegExp(/http(?:s)?:\/\/(?:www)?twitter\.com\/([a-zA-Z0-9_]+)/gm);

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

/***/ "./src/pages/CommonComponents/Form/Select/Index.jsx":
/*!**********************************************************!*\
  !*** ./src/pages/CommonComponents/Form/Select/Index.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Fade.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Style */ "./src/pages/CommonComponents/Form/Select/Style/index.js");
/* harmony import */ var _ErrorMessage_Index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ErrorMessage/Index */ "./src/pages/CommonComponents/Form/ErrorMessage/Index.jsx");



var _excluded = ["width", "field", "form", "placeholder", "setFieldValue", "setFieldTouched"];
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */







var Select = function Select(_ref) {
  var width = _ref.width,
    field = _ref.field,
    form = _ref.form,
    placeholder = _ref.placeholder,
    setFieldValue = _ref.setFieldValue,
    setFieldTouched = _ref.setFieldTouched,
    props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
    open = _useState2[0],
    isOpen = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
    _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
    value = _useState4[0],
    setValue = _useState4[1];
  var metaData = form.getFieldMeta(field.name);
  var showError = metaData.error && metaData.touched;
  var enums = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(function (state) {
    return state.enums.topicCategories;
  });
  var _onChange = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function (e, setField) {
    setField(field.name, e.target.value);
    setValue(e.target.value);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_6__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
    "in": open
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_6__.Label, {
    htmlFor: field.name
  }, "Select A Category"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_6__.StyledSelect, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    width: width
  }, field, {
    id: field.name,
    showError: showError,
    value: value,
    onChange: function onChange(e) {
      return _onChange(e, setFieldValue);
    },
    onFocus: function onFocus() {
      return isOpen(true);
    },
    onBlur: function onBlur() {
      return isOpen(false);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("option", {
    value: ""
  }, "Select A Category"), enums === null || enums === void 0 ? void 0 : enums.map(function (val) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("option", {
      key: val,
      value: val
    }, val);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(formik__WEBPACK_IMPORTED_MODULE_4__.ErrorMessage, {
    width: width,
    name: field.name,
    component: _ErrorMessage_Index__WEBPACK_IMPORTED_MODULE_7__["default"]
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Select);

/***/ }),

/***/ "./src/pages/CommonComponents/Form/Select/Style/index.js":
/*!***************************************************************!*\
  !*** ./src/pages/CommonComponents/Form/Select/Style/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "Label": () => (/* binding */ Label),
/* harmony export */   "StyledSelect": () => (/* binding */ StyledSelect)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _templateObject, _templateObject2, _templateObject3;

var Container = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  margin: auto;\n  font-family: 'Ubuntu', sans-serif;\n  .fade {\n    margin: auto;\n    width: 85%;\n  }\n"])));
var Label = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('label')(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  justify-content: flex-start;\n  color: var(--m-trim-color);\n  font-size: .5em;\n  font-weight: bold;\n\n"])));
var StyledSelect = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('select')(_templateObject3 || (_templateObject3 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: block;\n  margin: auto;\n  padding: .5em;\n  color: black;\n  width: ", ";\n  height: 3.5em;\n  font-size: .8em;\n  font-weight: bold;\n  line-height: var(--inputLineHeight);\n  outline:none;\n  background: #E5E5E5;\n  border: ", ";\n  border-radius: 0.4rem;\n  transition: box-shadow var(--transitionDuration);\n\n  ::placeholder {\n    color: var(--m-trim-color);\n  }\n  :focus {\n    outline: none;\n    box-shadow:  5px 5px 8px #ffffff,\n             -5px -5px 8px #ffffff;\n  }\n\n  :not(:placeholder-shown) + ", ",\n  :focus:not(:placeholder-shown) + ", " {\n    visibility: visible;\n    z-index: 1;\n    opacity: 1;\n    transform:\n      translate3d(0, var(--labelTransformedPosY), 0)\n      scale(var(--labelScaleFactor));\n    transition:\n      transform var(--inputTransitionDuration),\n      visibility 0ms,\n      z-index 0ms;\n\n  option {\n    color: var(--m-trim-color);\n    font-size: .8em;\n    cursor: pointer;\n  }\n}\n"])), function (props) {
  return props.width || '30%';
}, function (props) {
  return props.showError ? '1px solid var(--m-danger-color)' : '1px solid var(--bg)';
}, Label, Label);

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

/***/ }),

/***/ "./src/pages/SubTopicForm/Index.jsx":
/*!******************************************!*\
  !*** ./src/pages/SubTopicForm/Index.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Fade.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Collapse.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/node_modules/react-router/dist/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _hooks_redux_useBindDispatch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/redux/useBindDispatch */ "./src/pages/hooks/redux/useBindDispatch.js");
/* harmony import */ var _hooks_useHandleSubmit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hooks/useHandleSubmit */ "./src/pages/SubTopicForm/hooks/useHandleSubmit.js");
/* harmony import */ var _hooks_useGetLinkMetaDataOnBlur__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks/useGetLinkMetaDataOnBlur */ "./src/pages/SubTopicForm/hooks/useGetLinkMetaDataOnBlur.js");
/* harmony import */ var _CommonComponents_Form_Input_Index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../CommonComponents/Form/Input/Index */ "./src/pages/CommonComponents/Form/Input/Index.jsx");
/* harmony import */ var _CommonComponents_Button_Index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../CommonComponents/Button/Index */ "./src/pages/CommonComponents/Button/Index.jsx");
/* harmony import */ var _redux_actions_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../redux/actions/ui */ "./src/redux/actions/ui/index.js");
/* harmony import */ var _redux_actions_topics__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../redux/actions/topics */ "./src/redux/actions/topics/index.js");
/* harmony import */ var _CommonComponents_Tooltip_Index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../CommonComponents/Tooltip/Index */ "./src/pages/CommonComponents/Tooltip/Index.jsx");
/* harmony import */ var _TopicForm_components_UploadMedia_Index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../TopicForm/components/UploadMedia/Index */ "./src/pages/TopicForm/components/UploadMedia/Index.jsx");
/* harmony import */ var _TopicForm_components_DisplayMedia_Index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../TopicForm/components/DisplayMedia/Index */ "./src/pages/TopicForm/components/DisplayMedia/Index.jsx");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Style */ "./src/pages/SubTopicForm/Style/index.js");
/* harmony import */ var _svgs_svgs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../svgs/svgs */ "./src/svgs/svgs.jsx");
/* harmony import */ var _CommonComponents_RichTextEditor_Index__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../CommonComponents/RichTextEditor/Index */ "./src/pages/CommonComponents/RichTextEditor/Index.jsx");




















var uuidRegEx = new RegExp(/\b[0-9a-f]{8}\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\b[0-9a-f]{12}\b/g);
var CreateSubTopicForm = function CreateSubTopicForm() {
  var _useSelector;
  var _useLocation = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_17__.useLocation)(),
    pathname = _useLocation.pathname;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
    _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
    imgFile = _useState4[0],
    setImgFile = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
    _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
    videoFile = _useState6[0],
    setVideoFile = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
    _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState7, 2),
    rotate = _useState8[0],
    setRotate = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
    _useState10 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState9, 2),
    content = _useState10[0],
    setContent = _useState10[1];
  // const validator = useConfigFormErrors(ERRORS)
  var _pathname$match = pathname.match(uuidRegEx),
    _pathname$match2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_pathname$match, 1),
    topicId = _pathname$match2[0];
  var _useGetLinkMetaDataOn = (0,_hooks_useGetLinkMetaDataOnBlur__WEBPACK_IMPORTED_MODULE_6__["default"])(),
    metaData = _useGetLinkMetaDataOn.metaData,
    getLinkMetaDataOnBlur = _useGetLinkMetaDataOn.getLinkMetaDataOnBlur;
  var handleSubmit = (0,_hooks_useHandleSubmit__WEBPACK_IMPORTED_MODULE_5__["default"])(metaData, topicId);
  var _useBindDispatch = (0,_hooks_redux_useBindDispatch__WEBPACK_IMPORTED_MODULE_4__["default"])(_redux_actions_ui__WEBPACK_IMPORTED_MODULE_9__["default"], _redux_actions_topics__WEBPACK_IMPORTED_MODULE_10__["default"]),
    getTopic = _useBindDispatch.getTopic,
    closeModal = _useBindDispatch.closeModal;
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (s) {
    return s.session.currentUser;
  });
  var topic = (_useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (s) {
    return s.topics.list;
  })) === null || _useSelector === void 0 ? void 0 : _useSelector.find(function (t) {
    return t.id === topicId;
  });
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    getTopic(topicId, user === null || user === void 0 ? void 0 : user.id);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_14__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(formik__WEBPACK_IMPORTED_MODULE_3__.Formik, {
    initialValues: {
      title: ''
    },
    validate: function validate(values) {
      var errors = {};
      if (!values.title) {
        errors.title = 'Title Is Required';
      }
      return errors;
    },
    onSubmit: function onSubmit(values, params) {
      return handleSubmit(values, params, content);
    }
  }, function (_ref) {
    var isSubmitting = _ref.isSubmitting,
      setFieldValue = _ref.setFieldValue;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_18__["default"].Header, {
      closeButton: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_18__["default"].Title, null, "Create Sub Topic Regarding The Topic", ' ', "\"".concat(topic === null || topic === void 0 ? void 0 : topic.title, "\""))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_14__.FormContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_18__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_14__.InputsContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_14__.Left, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_14__.FlexDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h2", null, " Topic Description "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_CommonComponents_Tooltip_Index__WEBPACK_IMPORTED_MODULE_11__["default"], {
      tooltipHeader: "Topic Description",
      tooltipText: "Provide information about the topic you would like to discuss"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
      type: "text",
      name: "title",
      component: _CommonComponents_Form_Input_Index__WEBPACK_IMPORTED_MODULE_7__["default"],
      width: "100%",
      placeholder: "Enter A Topic Title"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
      type: "text",
      name: "summary",
      component: _CommonComponents_Form_Input_Index__WEBPACK_IMPORTED_MODULE_7__["default"],
      width: "100%",
      placeholder: "Give A Short Opinion Or Point"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_14__.Right, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_14__.FlexDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h2", null, " Link to what you want to discuss here... "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_CommonComponents_Tooltip_Index__WEBPACK_IMPORTED_MODULE_11__["default"], {
      tooltipHeader: "Discussed Content",
      tooltipText: "Add a link to the external content you would like to discuss ( e.g a YouTube video, Tweet, publication, or anything else)"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
      type: "url",
      name: "contentUrl",
      placeholder: "Link To Content",
      component: _CommonComponents_Form_Input_Index__WEBPACK_IMPORTED_MODULE_7__["default"],
      width: "100%",
      onBlur: getLinkMetaDataOnBlur
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_14__.Line, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_14__.FlexDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h2", null, " Add your own media content "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_CommonComponents_Tooltip_Index__WEBPACK_IMPORTED_MODULE_11__["default"], {
      tooltipHeader: "User Provided Content",
      tooltipText: "This could be an image, graphic, or video pertaining to the topic you would like to discuss"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_TopicForm_components_UploadMedia_Index__WEBPACK_IMPORTED_MODULE_12__["default"], {
      setFieldValue: setFieldValue,
      imgFile: imgFile,
      videoFile: videoFile,
      setImgFile: setImgFile,
      setVideoFile: setVideoFile
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_14__.Line, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_TopicForm_components_DisplayMedia_Index__WEBPACK_IMPORTED_MODULE_13__["default"], {
      imgFile: imgFile,
      videoFile: videoFile,
      metaData: metaData
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_CommonComponents_RichTextEditor_Index__WEBPACK_IMPORTED_MODULE_16__["default"], {
      content: content,
      setContent: setContent
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_14__.Arrow, {
      rotate: rotate
      // icon={<DownArrowCircleSvg />}
      ,
      onClick: function onClick() {
        setOpen(!open);
        setRotate(rotate + (open ? -180 : 180));
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_svgs_svgs__WEBPACK_IMPORTED_MODULE_15__.DownArrowCircleSvg, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_19__["default"], {
      "in": !open
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, "Enter Supplemental Information")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_14__.InputsContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_20__["default"], {
      "in": open
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      style: {
        whiteSpace: 'nowrap',
        width: '100%'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_14__.FlexDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h2", null, " Enter Links To Supplemental Evidence... "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_CommonComponents_Tooltip_Index__WEBPACK_IMPORTED_MODULE_11__["default"], {
      tooltipText: "Provide links to additional reading or evidence etc...",
      tooltipHeader: "Supplemental Information"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
      type: "url",
      name: "Evidence Link 1",
      component: _CommonComponents_Form_Input_Index__WEBPACK_IMPORTED_MODULE_7__["default"],
      width: "100%"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
      type: "url",
      name: "Evidence Link 2",
      component: _CommonComponents_Form_Input_Index__WEBPACK_IMPORTED_MODULE_7__["default"],
      width: "100%"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
      type: "url",
      name: "Evidence Link 3",
      component: _CommonComponents_Form_Input_Index__WEBPACK_IMPORTED_MODULE_7__["default"],
      width: "100%"
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_18__["default"].Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_CommonComponents_Button_Index__WEBPACK_IMPORTED_MODULE_8__["default"], {
      type: "submit",
      disabled: isSubmitting,
      onClick: closeModal
    }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_CommonComponents_Button_Index__WEBPACK_IMPORTED_MODULE_8__["default"], {
      type: "submit",
      disabled: isSubmitting
    }, "Submit"))));
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateSubTopicForm);

/***/ }),

/***/ "./src/pages/SubTopicForm/Style/index.js":
/*!***********************************************!*\
  !*** ./src/pages/SubTopicForm/Style/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Arrow": () => (/* binding */ Arrow),
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "FlexDiv": () => (/* binding */ FlexDiv),
/* harmony export */   "FormContainer": () => (/* binding */ FormContainer),
/* harmony export */   "InputWrapper": () => (/* binding */ InputWrapper),
/* harmony export */   "InputsContainer": () => (/* binding */ InputsContainer),
/* harmony export */   "Left": () => (/* binding */ Left),
/* harmony export */   "Line": () => (/* binding */ Line),
/* harmony export */   "Right": () => (/* binding */ Right),
/* harmony export */   "SupplementalInformation": () => (/* binding */ SupplementalInformation)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;


var Container = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])('div')(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  overflow-y: scroll;\n  height: 90vh;\n  background: white;\n  border-radius: 1em;\n  box-shadow:  5px 5px 5px -3px #000000;\n\n  h1 {\n    width: 100%;\n    margin: 0;\n    text-align: center;\n    padding-bottom: .5em;\n    border-bottom: 1px solid black;\n  }\n "])));
var FlexDiv = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])('div')(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([" \n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n"])));
var FormContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(formik__WEBPACK_IMPORTED_MODULE_1__.Form)(_templateObject3 || (_templateObject3 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin-top: 1em;\n   h2 {\n    font-size: 1em;\n    margin: 0 1em;\n  }\n"])));
var InputsContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])('div')(_templateObject4 || (_templateObject4 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  width: 100%;\n"])));
var Left = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])('div')(_templateObject5 || (_templateObject5 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  display: inline-block;\n  flex-direction: column;\n  width: 50%;\n  border-right: 1px solid black;\n"])));
var Right = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])('div')(_templateObject6 || (_templateObject6 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  display: inline-block;\n  flex-direction: column;\n  width: 50%;\n"])));
var SupplementalInformation = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])('section')(_templateObject7 || (_templateObject7 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\n"])));
var InputWrapper = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])('div')(_templateObject8 || (_templateObject8 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: column;\n"])));
var Arrow = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])('span')(_templateObject9 || (_templateObject9 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    transition: transform .5s ease-in-out;\n    transform: ", ";\n    cursor: pointer;\n"])), function (props) {
  return "rotate(".concat(props.rotate, "deg)");
});
var Line = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])('hr')(_templateObject10 || (_templateObject10 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([" \n  width: 90%;\n  margin: 2em 1.3em;\n  background-color: rgb(48,48,50);\n  height: .5px;\n  border: none;\n"])));

/***/ }),

/***/ "./src/pages/SubTopicForm/hooks/checkLinkType.js":
/*!*******************************************************!*\
  !*** ./src/pages/SubTopicForm/hooks/checkLinkType.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _generic_regex_urlValidators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../generic/regex/urlValidators */ "./src/generic/regex/urlValidators.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (url) {
  var ytUrl = url.search(_generic_regex_urlValidators__WEBPACK_IMPORTED_MODULE_0__.youTubeUrlValidator) === -1 ? null : 'ytUrl';
  var tweetUrl = url.search(_generic_regex_urlValidators__WEBPACK_IMPORTED_MODULE_0__.twitterUrlValidtor) === -1 ? null : 'tweetUrl';
  return ytUrl || tweetUrl;
});

/***/ }),

/***/ "./src/pages/SubTopicForm/hooks/useGetLinkMetaDataOnBlur.js":
/*!******************************************************************!*\
  !*** ./src/pages/SubTopicForm/hooks/useGetLinkMetaDataOnBlur.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_v1_topics_topics_api_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../api/v1/topics/topics_api_util */ "./src/api/v1/topics/topics_api_util.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
    metaData = _useState2[0],
    setMetaData = _useState2[1];
  var getLinkMetaDataOnBlur = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (e) {
    (0,_api_v1_topics_topics_api_util__WEBPACK_IMPORTED_MODULE_2__.getLinkMetaData)(e.currentTarget.value).then(function (_ref) {
      var data = _ref.data;
      setMetaData(data);
    });
  }, []);
  return {
    metaData: metaData,
    getLinkMetaDataOnBlur: getLinkMetaDataOnBlur
  };
});

/***/ }),

/***/ "./src/pages/SubTopicForm/hooks/useHandleSubmit.js":
/*!*********************************************************!*\
  !*** ./src/pages/SubTopicForm/hooks/useHandleSubmit.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_topics_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../redux/actions/topics/index */ "./src/redux/actions/topics/index.js");
/* harmony import */ var _redux_actions_subtopics_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../redux/actions/subtopics/index */ "./src/redux/actions/subtopics/index.js");
/* harmony import */ var _hooks_redux_useBindDispatch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/redux/useBindDispatch */ "./src/pages/hooks/redux/useBindDispatch.js");
/* harmony import */ var _checkLinkType__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./checkLinkType */ "./src/pages/SubTopicForm/hooks/checkLinkType.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (metaData, topicId) {
  var _useBindDispatch = (0,_hooks_redux_useBindDispatch__WEBPACK_IMPORTED_MODULE_6__["default"])(_redux_actions_topics_index__WEBPACK_IMPORTED_MODULE_4__["default"], _redux_actions_subtopics_index__WEBPACK_IMPORTED_MODULE_5__["default"]),
    createSubTopic = _useBindDispatch.createSubTopic,
    uploadTopicMedia = _useBindDispatch.uploadTopicMedia;
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (s) {
    return s.session.currentUser;
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (values, _ref, content) {
    var _metaData$ogImage, _objectSpread2;
    var setSubmitting = _ref.setSubmitting,
      resetForm = _ref.resetForm;
    var eLinks = Object.entries(values).map(function (_ref2) {
      var _ref3 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, 2),
        k = _ref3[0],
        v = _ref3[1];
      return k.includes('Evidence') ? v : null;
    }).filter(Boolean);
    var linkType = (0,_checkLinkType__WEBPACK_IMPORTED_MODULE_7__["default"])(values.contentUrl);
    var data = _objectSpread(_objectSpread({}, values), {}, (_objectSpread2 = {
      description: content,
      createdBy: user.username,
      userId: user.id,
      evidenceLinks: eLinks
    }, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread2, linkType, values.contentUrl), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread2, "thumbImgUrl", (_metaData$ogImage = metaData.ogImage) === null || _metaData$ogImage === void 0 ? void 0 : _metaData$ogImage.url), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread2, "topicId", topicId), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread2, "tweetUrl", null), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread2, "imageUrl", null), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread2, "vodUrl", null), _objectSpread2));
    if (values.file instanceof File) {
      var _values$file$type$spl = values.file.type.split('/'),
        _values$file$type$spl2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_values$file$type$spl, 2),
        fileType = _values$file$type$spl2[0],
        fileFormat = _values$file$type$spl2[1];
      var formData = new FormData();
      formData.append('image', values.file);
      uploadTopicMedia(formData, fileType, fileFormat, data);
    } else {
      createSubTopic(data);
    }
    setSubmitting(false);
    resetForm({});
  }, [metaData, topicId]);
});

/***/ }),

/***/ "./src/pages/TopicForm/Index.jsx":
/*!***************************************!*\
  !*** ./src/pages/TopicForm/Index.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Fade.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Collapse.js");
/* harmony import */ var _hooks_redux_useBindDispatch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/redux/useBindDispatch */ "./src/pages/hooks/redux/useBindDispatch.js");
/* harmony import */ var _hooks_useHandleSubmit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks/useHandleSubmit */ "./src/pages/TopicForm/hooks/useHandleSubmit.js");
/* harmony import */ var _util_form_helpers_hooks_useConfigFormErrors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/form_helpers/hooks/useConfigFormErrors */ "./src/pages/util/form_helpers/hooks/useConfigFormErrors.js");
/* harmony import */ var _redux_actions_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/actions/ui */ "./src/redux/actions/ui/index.js");
/* harmony import */ var _svgs_svgs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../svgs/svgs */ "./src/svgs/svgs.jsx");
/* harmony import */ var _CommonComponents_Form_Input3_Index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../CommonComponents/Form/Input3/Index */ "./src/pages/CommonComponents/Form/Input3/Index.jsx");
/* harmony import */ var _CommonComponents_Form_Select_Index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../CommonComponents/Form/Select/Index */ "./src/pages/CommonComponents/Form/Select/Index.jsx");
/* harmony import */ var _CommonComponents_RichTextEditor_Index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../CommonComponents/RichTextEditor/Index */ "./src/pages/CommonComponents/RichTextEditor/Index.jsx");
/* harmony import */ var _CommonComponents_Button_Index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../CommonComponents/Button/Index */ "./src/pages/CommonComponents/Button/Index.jsx");
/* harmony import */ var _components_UploadMedia_Index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/UploadMedia/Index */ "./src/pages/TopicForm/components/UploadMedia/Index.jsx");
/* harmony import */ var _components_DisplayMedia_Index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/DisplayMedia/Index */ "./src/pages/TopicForm/components/DisplayMedia/Index.jsx");
/* harmony import */ var _components_LinkTypeIcon_Index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/LinkTypeIcon/Index */ "./src/pages/TopicForm/components/LinkTypeIcon/Index.jsx");
/* harmony import */ var _CommonComponents_Tooltip_Index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../CommonComponents/Tooltip/Index */ "./src/pages/CommonComponents/Tooltip/Index.jsx");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Style */ "./src/pages/TopicForm/Style/index.js");
/* harmony import */ var _util_form_helpers_init_form_values__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../util/form_helpers/init_form_values */ "./src/pages/util/form_helpers/init_form_values.js");
/* harmony import */ var _hooks_useGetLinkMetaDataOnBlur__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./hooks/useGetLinkMetaDataOnBlur */ "./src/pages/TopicForm/hooks/useGetLinkMetaDataOnBlur.js");





















var VALIDATIONS = {
  title: {
    REQUIRED: true
  },
  summary: {
    REQUIRED: true,
    MIN_LENGTH: 5
  },
  category: {
    REQUIRED: true
  }
};
var CreateTopicForm = function CreateTopicForm() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
    _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
    imgFile = _useState4[0],
    setImgFile = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
    _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
    videoFile = _useState6[0],
    setVideoFile = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
    _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState7, 2),
    metaData = _useState8[0],
    setMetaData = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
    _useState10 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState9, 2),
    rotate = _useState10[0],
    setRotate = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
      rawHTML: '',
      content: ''
    }),
    _useState12 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState11, 2),
    richTextEditorContent = _useState12[0],
    setRichTextEditorContent = _useState12[1];
  var validator = (0,_util_form_helpers_hooks_useConfigFormErrors__WEBPACK_IMPORTED_MODULE_5__["default"])(VALIDATIONS);
  var _useGetLinkMetaDataOn = (0,_hooks_useGetLinkMetaDataOnBlur__WEBPACK_IMPORTED_MODULE_18__["default"])(),
    contentUrl = _useGetLinkMetaDataOn.contentUrl,
    getContentUrlOnBlur = _useGetLinkMetaDataOn.getContentUrlOnBlur;
  var handleSubmit = (0,_hooks_useHandleSubmit__WEBPACK_IMPORTED_MODULE_4__["default"])(metaData);
  var _useBindDispatch = (0,_hooks_redux_useBindDispatch__WEBPACK_IMPORTED_MODULE_3__["default"])(_redux_actions_ui__WEBPACK_IMPORTED_MODULE_6__["default"]),
    closeModal = _useBindDispatch.closeModal;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_16__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {
    initialValues: _util_form_helpers_init_form_values__WEBPACK_IMPORTED_MODULE_17__.INIT_TOPIC_FORM_VALUES,
    validate: validator,
    onSubmit: function onSubmit(values, params) {
      return handleSubmit(values, params, richTextEditorContent.rawHTML);
    }
  }, function (_ref) {
    var isSubmitting = _ref.isSubmitting,
      setFieldValue = _ref.setFieldValue,
      setFieldTouched = _ref.setFieldTouched;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_19__["default"].Header, {
      closeButton: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_19__["default"].Title, null, "Create Topic")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_16__.FormContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_19__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_16__.InputsContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_16__.Left, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_16__.FlexDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_16__.SectionDescription, null, " Topic Description "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_CommonComponents_Tooltip_Index__WEBPACK_IMPORTED_MODULE_15__["default"], {
      tooltipHeader: "Topic Description",
      tooltipText: "Provide information about the topic you would like to discuss"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
      type: "text",
      name: "title",
      label: "Title",
      component: _CommonComponents_Form_Input3_Index__WEBPACK_IMPORTED_MODULE_8__["default"],
      width: "85%",
      placeholder: "Enter A Topic Title"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
      type: "text",
      name: "summary",
      label: "Summary",
      component: _CommonComponents_Form_Input3_Index__WEBPACK_IMPORTED_MODULE_8__["default"],
      width: "85%",
      placeholder: "Give A Short Opinion Or Point"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
      type: "text",
      name: "category",
      label: "Category",
      component: _CommonComponents_Form_Select_Index__WEBPACK_IMPORTED_MODULE_9__["default"],
      setFieldValue: setFieldValue,
      setFieldTouched: setFieldTouched,
      width: "85%"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_16__.MobileOnlyLine, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_16__.Right, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_16__.FlexDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_16__.SectionDescription, null, "Link to what you want to discuss here..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_CommonComponents_Tooltip_Index__WEBPACK_IMPORTED_MODULE_15__["default"], {
      tooltipHeader: "Discussed Content",
      tooltipText: "Add a link to the external content you would like to discuss ( e.g a YouTube video, Tweet, publication, or anything else)"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_16__.FlexDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
      type: "url",
      name: "contentUrl",
      placeholder: "Link To Content",
      label: "Link To Content",
      component: _CommonComponents_Form_Input3_Index__WEBPACK_IMPORTED_MODULE_8__["default"],
      width: "85%",
      onBlur: getContentUrlOnBlur
    }), contentUrl && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_LinkTypeIcon_Index__WEBPACK_IMPORTED_MODULE_14__["default"], {
      metaData: metaData,
      contentUrl: contentUrl
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_16__.Line, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_16__.FlexDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_16__.SectionDescription, null, " Add your own media content "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_CommonComponents_Tooltip_Index__WEBPACK_IMPORTED_MODULE_15__["default"], {
      tooltipHeader: "User Provided Content",
      tooltipText: "This could be an image, graphic, or video pertaining to the topic you would like to discuss"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_UploadMedia_Index__WEBPACK_IMPORTED_MODULE_12__["default"], {
      setFieldValue: setFieldValue,
      imgFile: imgFile,
      videoFile: videoFile,
      setImgFile: setImgFile,
      setVideoFile: setVideoFile
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_16__.Line, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_DisplayMedia_Index__WEBPACK_IMPORTED_MODULE_13__["default"], {
      imgFile: imgFile,
      videoFile: videoFile,
      contentUrl: contentUrl,
      setMetaData: setMetaData
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_CommonComponents_RichTextEditor_Index__WEBPACK_IMPORTED_MODULE_10__["default"], {
      content: richTextEditorContent.content,
      setContent: setRichTextEditorContent
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_16__.Arrow, {
      rotate: rotate
      // icon={<DownArrowCircleSvg />}
      ,
      onClick: function onClick() {
        setOpen(!open);
        setRotate(rotate + (open ? -180 : 180));
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_svgs_svgs__WEBPACK_IMPORTED_MODULE_7__.DownArrowCircleSvg, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_20__["default"], {
      "in": !open
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, "Enter Supplemental Information")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_16__.InputsContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_21__["default"], {
      "in": open
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      style: {
        whiteSpace: 'nowrap',
        width: '100%'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_16__.FlexDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h2", null, " Enter Links To Supplemental Evidence... "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_CommonComponents_Tooltip_Index__WEBPACK_IMPORTED_MODULE_15__["default"], {
      tooltipText: "Provide links to additional reading or evidence etc...",
      tooltipHeader: "Supplemental Information"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
      type: "url",
      name: "Evidence Link 1",
      component: _CommonComponents_Form_Input3_Index__WEBPACK_IMPORTED_MODULE_8__["default"],
      width: "70%",
      label: "Link To Evidence"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
      type: "url",
      name: "Evidence Link 2",
      component: _CommonComponents_Form_Input3_Index__WEBPACK_IMPORTED_MODULE_8__["default"],
      width: "70%",
      label: "Link To Evidence"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
      type: "url",
      name: "Evidence Link 3",
      component: _CommonComponents_Form_Input3_Index__WEBPACK_IMPORTED_MODULE_8__["default"],
      width: "70%",
      label: "Link To Evidence"
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_19__["default"].Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_CommonComponents_Button_Index__WEBPACK_IMPORTED_MODULE_11__["default"], {
      type: "submit",
      disabled: isSubmitting,
      onClick: closeModal
    }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_CommonComponents_Button_Index__WEBPACK_IMPORTED_MODULE_11__["default"], {
      type: "submit",
      disabled: isSubmitting
    }, "Submit"))));
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateTopicForm);

/***/ }),

/***/ "./src/pages/TopicForm/Style/index.js":
/*!********************************************!*\
  !*** ./src/pages/TopicForm/Style/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Arrow": () => (/* binding */ Arrow),
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "FlexDiv": () => (/* binding */ FlexDiv),
/* harmony export */   "FormContainer": () => (/* binding */ FormContainer),
/* harmony export */   "InputWrapper": () => (/* binding */ InputWrapper),
/* harmony export */   "InputsContainer": () => (/* binding */ InputsContainer),
/* harmony export */   "Left": () => (/* binding */ Left),
/* harmony export */   "Line": () => (/* binding */ Line),
/* harmony export */   "MobileOnlyLine": () => (/* binding */ MobileOnlyLine),
/* harmony export */   "Right": () => (/* binding */ Right),
/* harmony export */   "SectionDescription": () => (/* binding */ SectionDescription),
/* harmony export */   "SupplementalInformation": () => (/* binding */ SupplementalInformation),
/* harmony export */   "UploadMediaContainer": () => (/* binding */ UploadMediaContainer)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13;


// import { FiArrowDownCircle } from 'react-icons/fi'

var FlexDiv = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])('div')(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([" \n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n"])));
var FormContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(formik__WEBPACK_IMPORTED_MODULE_1__.Form)(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  /* display: flex;\n  align-items: flex-start; */\n  margin-top: 1em;\n   h2 {\n    font-size: 1em;\n  }\n \n"])));
var Arrow = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])('span')(_templateObject3 || (_templateObject3 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    transition: transform .5s ease-in-out;\n    transform: ", ";\n    cursor: pointer;\n"])), function (props) {
  return "rotate(".concat(props.rotate, "deg)");
});
var InputsContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])('div')(_templateObject4 || (_templateObject4 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  width: 100%;\n  @media only screen and (max-width: 800px) {\n     flex-direction: column;\n  }\n"])));
var Left = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])('div')(_templateObject5 || (_templateObject5 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  display: inline-block;\n  flex-direction: column;\n  width: 50%;\n  border-right: 1px solid black;\n  @media only screen and (max-width: 800px) {\n    width: 100%;\n    border-right: none;\n  }\n"])));
var Right = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])('div')(_templateObject6 || (_templateObject6 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  display: inline-block;\n  flex-direction: column;\n  width: 50%;\n  @media only screen and (max-width: 800px) {\n    width: 100%;\n  }\n"])));
var SupplementalInformation = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])('section')(_templateObject7 || (_templateObject7 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\n"])));
var InputWrapper = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])('div')(_templateObject8 || (_templateObject8 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: column;\n"])));
var Container = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])('div')(_templateObject9 || (_templateObject9 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  overflow-y: scroll;\n  height: 90vh;\n  width: 100vw;\n  max-width: 1000px;\n  background: white;\n  \n  border-radius: 1em;\n  /* box-shadow: var(--m-primary-box-shadow); */\n  box-shadow:  5px 5px 5px -3px #000000;\n\n  h1 {\n    width: 100%;\n    margin: 0;\n    text-align: center;\n    padding-bottom: .5em;\n    border-bottom: 1px solid black;\n  }\n  \n  /* @media only screen and (max-width: 1600px) {\n     width: 80vw;\n  }\n\n  @media only screen and (max-width: 800px) {\n     width: 90vw;\n  }\n\n  @media only screen and (max-width: 600px) {\n     width: 100vw;\n  } */\n "])));
var Line = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])('hr')(_templateObject10 || (_templateObject10 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([" \n  width: 90%;\n  margin: 2em 1.3em;\n  background-color: rgb(48,48,50);\n  height: .5px;\n  border: none;\n"])));
var UploadMediaContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])('div')(_templateObject11 || (_templateObject11 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([" \n  margin-left: 1.3em;\n  padding: .5em;\n  border-radius: .5em;\n  display: flex;\n  box-shadow:  5px 5px 5px -3px #AAAAAA;\n  background: #E5E5E5;\n\n;\n\n"])));
var SectionDescription = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])('h2')(_templateObject12 || (_templateObject12 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  text-decoration: underline;\n  @media only screen and (max-width: 600px) {\n    /* display: none; */\n  }\n\n"])));
var MobileOnlyLine = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])('hr')(_templateObject13 || (_templateObject13 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([" \n  width: 90%;\n  margin: 2em 1.3em;\n  background-color: rgb(48,48,50);\n  height: .5px;\n  border: none;\n  display: none;\n\n  @media only screen and (max-width: 800px) {\n    display: block;\n  }\n"])));

/***/ }),

/***/ "./src/pages/TopicForm/components/LinkTypeIcon/Index.jsx":
/*!***************************************************************!*\
  !*** ./src/pages/TopicForm/components/LinkTypeIcon/Index.jsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Style_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Style/index */ "./src/pages/TopicForm/components/LinkTypeIcon/Style/index.js");
/* harmony import */ var _hocs_IsLoadingHOC__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../hocs/IsLoadingHOC */ "./src/hocs/IsLoadingHOC.jsx");



var LinkTypeIcon = function LinkTypeIcon(_ref) {
  var contentUrl = _ref.contentUrl,
    metaData = _ref.metaData,
    setIsLoading = _ref.setIsLoading;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setIsLoading(true);
  }, [contentUrl]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (metaData) setIsLoading(false);
  }, [metaData]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_1__.OGFavicon, {
    src: metaData === null || metaData === void 0 ? void 0 : metaData.favicon,
    alt: ""
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_hocs_IsLoadingHOC__WEBPACK_IMPORTED_MODULE_2__["default"])(LinkTypeIcon, '30px', true));

/***/ }),

/***/ "./src/pages/TopicForm/components/LinkTypeIcon/Style/index.js":
/*!********************************************************************!*\
  !*** ./src/pages/TopicForm/components/LinkTypeIcon/Style/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OGFavicon": () => (/* binding */ OGFavicon)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _templateObject;

var OGFavicon = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('img')(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([" \n  border-radius: 1vw;\n  width: 1.5vw;\n\n"])));

/***/ }),

/***/ "./src/pages/TopicForm/components/UploadImageInput/Index.jsx":
/*!*******************************************************************!*\
  !*** ./src/pages/TopicForm/components/UploadImageInput/Index.jsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Style */ "./src/pages/TopicForm/components/UploadImageInput/Style/index.js");

/* eslint-disable react/jsx-props-no-spreading */


var UploadImageInput = function UploadImageInput(_ref) {
  var field = _ref.field,
    onChange = _ref.onChange,
    icon = _ref.icon,
    fileType = _ref.fileType,
    disabled = _ref.disabled;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_2__.Label, null, icon, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_2__.UploadInput, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "data-filetype": fileType,
    type: "file"
  }, field, {
    id: field.name,
    onChange: onChange,
    disabled: disabled
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UploadImageInput);

/***/ }),

/***/ "./src/pages/TopicForm/components/UploadImageInput/Style/index.js":
/*!************************************************************************!*\
  !*** ./src/pages/TopicForm/components/UploadImageInput/Style/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Label": () => (/* binding */ Label),
/* harmony export */   "UploadInput": () => (/* binding */ UploadInput)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _templateObject, _templateObject2;

var Label = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('label')(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([" \n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  width: 10%;\n  img {\n    width: 100%;\n    height: auto;\n  }\n"])));
var UploadInput = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('input')(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([" \n  position: absolute; \n  left: -99999rem;\n"])));

/***/ }),

/***/ "./src/pages/TopicForm/components/UploadMedia/Index.jsx":
/*!**************************************************************!*\
  !*** ./src/pages/TopicForm/components/UploadMedia/Index.jsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _UploadImageInput_Index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UploadImageInput/Index */ "./src/pages/TopicForm/components/UploadImageInput/Index.jsx");
/* harmony import */ var _svgs_svgs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../svgs/svgs */ "./src/svgs/svgs.jsx");
/* harmony import */ var _hooks_useOnFileChangeHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useOnFileChangeHandler */ "./src/pages/TopicForm/hooks/useOnFileChangeHandler.js");
/* harmony import */ var _Style_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Style/index */ "./src/pages/TopicForm/components/UploadMedia/Style/index.js");






var UploadMediaContainer = function UploadMediaContainer(_ref) {
  var setFieldValue = _ref.setFieldValue,
    imgFile = _ref.imgFile,
    videoFile = _ref.videoFile,
    setImgFile = _ref.setImgFile,
    setVideoFile = _ref.setVideoFile;
  var onFileChange = (0,_hooks_useOnFileChangeHandler__WEBPACK_IMPORTED_MODULE_4__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_5__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(formik__WEBPACK_IMPORTED_MODULE_1__.Field, {
    fileType: "file",
    name: "topicImage",
    disabled: Boolean(videoFile),
    file: imgFile,
    component: _UploadImageInput_Index__WEBPACK_IMPORTED_MODULE_2__["default"],
    onChange: function onChange(e) {
      return onFileChange(e, setFieldValue, setImgFile);
    },
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_svgs_svgs__WEBPACK_IMPORTED_MODULE_3__.ImageSvg, null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(formik__WEBPACK_IMPORTED_MODULE_1__.Field, {
    fileType: "file",
    name: "topicVideo",
    disabled: Boolean(imgFile),
    file: videoFile,
    component: _UploadImageInput_Index__WEBPACK_IMPORTED_MODULE_2__["default"],
    onChange: function onChange(e) {
      return onFileChange(e, setFieldValue, setVideoFile);
    },
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_svgs_svgs__WEBPACK_IMPORTED_MODULE_3__.VideoSvg, null)
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UploadMediaContainer);

/***/ }),

/***/ "./src/pages/TopicForm/components/UploadMedia/Style/index.js":
/*!*******************************************************************!*\
  !*** ./src/pages/TopicForm/components/UploadMedia/Style/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _templateObject;

var Container = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([" \n  margin-left: 1.3em;\n  padding: .5em;\n  border-radius: .5em;\n  display: flex;\n  box-shadow:  5px 5px 5px -3px #AAAAAA;\n  background: #E5E5E5;\n\n"])));

/***/ }),

/***/ "./src/pages/TopicForm/hooks/checkLinkType.js":
/*!****************************************************!*\
  !*** ./src/pages/TopicForm/hooks/checkLinkType.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _generic_regex_urlValidators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../generic/regex/urlValidators */ "./src/generic/regex/urlValidators.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (url) {
  var ytUrl = url.search(_generic_regex_urlValidators__WEBPACK_IMPORTED_MODULE_0__.youTubeUrlValidator) === -1 ? null : 'ytUrl';
  var tweetUrl = url.search(_generic_regex_urlValidators__WEBPACK_IMPORTED_MODULE_0__.twitterUrlValidtor) === -1 ? null : 'tweetUrl';
  return ytUrl || tweetUrl;
});

/***/ }),

/***/ "./src/pages/TopicForm/hooks/useGetLinkMetaDataOnBlur.js":
/*!***************************************************************!*\
  !*** ./src/pages/TopicForm/hooks/useGetLinkMetaDataOnBlur.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
    contentUrl = _useState2[0],
    setContentUrl = _useState2[1];
  var getContentUrlOnBlur = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (e) {
    setContentUrl(e.currentTarget.value);
  }, []);
  return {
    contentUrl: contentUrl,
    getContentUrlOnBlur: getContentUrlOnBlur
  };
});

/***/ }),

/***/ "./src/pages/TopicForm/hooks/useHandleSubmit.js":
/*!******************************************************!*\
  !*** ./src/pages/TopicForm/hooks/useHandleSubmit.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _redux_actions_topics_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../redux/actions/topics/index */ "./src/redux/actions/topics/index.js");
/* harmony import */ var _hooks_redux_useBindDispatch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/redux/useBindDispatch */ "./src/pages/hooks/redux/useBindDispatch.js");
/* harmony import */ var _checkLinkType__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./checkLinkType */ "./src/pages/TopicForm/hooks/checkLinkType.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }







// const resolveAfter1500ms = new Promise((resolve) => setTimeout(resolve, 1500))

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (metaData) {
  var _useBindDispatch = (0,_hooks_redux_useBindDispatch__WEBPACK_IMPORTED_MODULE_6__["default"])(_redux_actions_topics_index__WEBPACK_IMPORTED_MODULE_5__["default"]),
    createTopic = _useBindDispatch.createTopic,
    uploadTopicMedia = _useBindDispatch.uploadTopicMedia;
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (s) {
    return s.session.currentUser;
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (values, _ref, content) {
    var _metaData$ogImage, _objectSpread2;
    var setSubmitting = _ref.setSubmitting,
      resetForm = _ref.resetForm;
    var eLinks = Object.entries(values).map(function (_ref2) {
      var _ref3 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, 2),
        k = _ref3[0],
        v = _ref3[1];
      return k.includes('Evidence') ? v : null;
    }).filter(Boolean);
    var linkType = (0,_checkLinkType__WEBPACK_IMPORTED_MODULE_7__["default"])(values.contentUrl);
    var data = _objectSpread(_objectSpread({}, values), {}, (_objectSpread2 = {
      description: content,
      createdBy: user.username,
      userId: user.id,
      evidenceLinks: eLinks
    }, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread2, linkType, values.contentUrl), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread2, "thumbImgUrl", (_metaData$ogImage = metaData.ogImage) === null || _metaData$ogImage === void 0 ? void 0 : _metaData$ogImage.url), _objectSpread2));
    if (values.file instanceof File) {
      var _values$file$type$spl = values.file.type.split('/'),
        _values$file$type$spl2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_values$file$type$spl, 2),
        fileType = _values$file$type$spl2[0],
        fileFormat = _values$file$type$spl2[1];
      var formData = new FormData();
      formData.append('image', values.file);
      uploadTopicMedia(formData, fileType, fileFormat, data);
    } else {
      react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.promise(createTopic(data), {
        pending: 'Creating Topic...',
        success: 'Topic Successfully Created!',
        error: {
          render: function render(_ref4) {
            var errorData = _ref4.data;
            var response = errorData.response;
            var responseData = response.data;
            return "".concat(responseData.msg, " \uD83E\uDD2F ");
          }
        }
      });
    }
    setSubmitting(false);
    resetForm({});
  }, [metaData]);
});

/***/ }),

/***/ "./src/pages/TopicForm/hooks/useOnFileChangeHandler.js":
/*!*************************************************************!*\
  !*** ./src/pages/TopicForm/hooks/useOnFileChangeHandler.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (e, setFieldValue, setStateValue) {
    setFieldValue(e.target.dataset.filetype, e.currentTarget.files[0]);
    var reader = new FileReader();
    var currFile = e.target.files[0];
    reader.onloadend = function () {
      setStateValue(reader.result);
    };
    reader.readAsDataURL(currFile);
  }, []);
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsVUFBQzhELENBQUMsRUFBRWYsYUFBYSxFQUFFMEosYUFBYSxFQUFLO0lBQ3BFMUosYUFBYSxDQUFDZSxDQUFDLENBQUNFLE1BQU0sQ0FBQzBJLE9BQU8sQ0FBQ0MsUUFBUSxFQUFFN0ksQ0FBQyxDQUFDa0YsYUFBYSxDQUFDNEQsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xFLElBQU1DLE1BQU0sR0FBRyxJQUFJQyxVQUFVLEVBQUU7SUFDL0IsSUFBTUMsUUFBUSxHQUFHakosQ0FBQyxDQUFDRSxNQUFNLENBQUM0SSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ2xDQyxNQUFNLENBQUNHLFNBQVMsR0FBRyxZQUFNO01BQ3ZCUCxhQUFhLENBQUNJLE1BQU0sQ0FBQ0ksTUFBTSxDQUFDO0lBQzlCLENBQUM7SUFDREosTUFBTSxDQUFDSyxhQUFhLENBQUNILFFBQVEsQ0FBQztFQUNoQyxDQUFDLEVBQUUsRUFBRSxDQUFDO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9nZW5lcmljL2RlbGF5LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL2dlbmVyaWMvcmVnZXgvdXJsVmFsaWRhdG9ycy5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9Db21tZW50Rm9ybS9JbmRleC5qc3giLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvQ29tbWVudEZvcm0vU3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvQ29tbWVudEZvcm0vaG9va3MvdXNlR2V0U3RhdGVFZmZlY3QuanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvQ29tbWVudEZvcm0vaG9va3MvdXNlSGFuZGxlU3VibWl0LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL0NvbW1vbkNvbXBvbmVudHMvQW5pbWF0ZWRDaGVja21hcmsvSW5kZXguanN4Iiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL0NvbW1vbkNvbXBvbmVudHMvQW5pbWF0ZWRDaGVja21hcmsvU3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvQ29tbW9uQ29tcG9uZW50cy9Gb3JtL1NlbGVjdC9JbmRleC5qc3giLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvQ29tbW9uQ29tcG9uZW50cy9Gb3JtL1NlbGVjdC9TdHlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9Db21tb25Db21wb25lbnRzL092ZXJsYXkvc3R5bGUuanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvQ29tbW9uQ29tcG9uZW50cy9SaWNoVGV4dEVkaXRvci9JbmRleC5qc3giLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvQ29tbW9uQ29tcG9uZW50cy9SaWNoVGV4dEVkaXRvci9TdHlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9TdWJUb3BpY0Zvcm0vSW5kZXguanN4Iiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL1N1YlRvcGljRm9ybS9TdHlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9TdWJUb3BpY0Zvcm0vaG9va3MvY2hlY2tMaW5rVHlwZS5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9TdWJUb3BpY0Zvcm0vaG9va3MvdXNlR2V0TGlua01ldGFEYXRhT25CbHVyLmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL1N1YlRvcGljRm9ybS9ob29rcy91c2VIYW5kbGVTdWJtaXQuanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvVG9waWNGb3JtL0luZGV4LmpzeCIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9Ub3BpY0Zvcm0vU3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvVG9waWNGb3JtL2NvbXBvbmVudHMvTGlua1R5cGVJY29uL0luZGV4LmpzeCIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9Ub3BpY0Zvcm0vY29tcG9uZW50cy9MaW5rVHlwZUljb24vU3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvVG9waWNGb3JtL2NvbXBvbmVudHMvVXBsb2FkSW1hZ2VJbnB1dC9JbmRleC5qc3giLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvVG9waWNGb3JtL2NvbXBvbmVudHMvVXBsb2FkSW1hZ2VJbnB1dC9TdHlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9Ub3BpY0Zvcm0vY29tcG9uZW50cy9VcGxvYWRNZWRpYS9JbmRleC5qc3giLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvVG9waWNGb3JtL2NvbXBvbmVudHMvVXBsb2FkTWVkaWEvU3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvVG9waWNGb3JtL2hvb2tzL2NoZWNrTGlua1R5cGUuanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvVG9waWNGb3JtL2hvb2tzL3VzZUdldExpbmtNZXRhRGF0YU9uQmx1ci5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9Ub3BpY0Zvcm0vaG9va3MvdXNlSGFuZGxlU3VibWl0LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL1RvcGljRm9ybS9ob29rcy91c2VPbkZpbGVDaGFuZ2VIYW5kbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICh0LCB2KSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gIGlmICh2ID09PSB0cnVlKSByZWplY3QoKVxuICBzZXRUaW1lb3V0KHJlc29sdmUuYmluZChudWxsLCB2KSwgdClcbn0pXG4iLCJleHBvcnQgY29uc3QgeW91VHViZVVybFZhbGlkYXRvciA9IG5ldyBSZWdFeHAoL14oKD86aHR0cHM/Oik/XFwvXFwvKT8oKD86d3d3fG0pXFwuKT8oKD86eW91dHViZVxcLmNvbXx5b3V0dS5iZSkpKFxcLyg/OltcXHdcXC1dK1xcP3Y9fGVtYmVkXFwvfHZcXC8pPykoW1xcd1xcLV0rKShcXFMrKT8kL2dtKVxuZXhwb3J0IGNvbnN0IHR3aXR0ZXJVcmxWYWxpZHRvciA9IG5ldyBSZWdFeHAoL2h0dHAoPzpzKT86XFwvXFwvKD86d3d3KT90d2l0dGVyXFwuY29tXFwvKFthLXpBLVowLTlfXSspL2dtKVxuIiwiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1ib290c3RyYXAvTW9kYWwnXG5pbXBvcnQgeyBGb3JtaWsgfSBmcm9tICdmb3JtaWsnXG5cbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vQ29tbW9uQ29tcG9uZW50cy9CdXR0b24vSW5kZXgnXG5pbXBvcnQgVXNlckluZm9IZWFkZXIgZnJvbSAnLi4vQ29tbW9uQ29tcG9uZW50cy9Vc2VySW5mb0hlYWRlci9JbmRleCdcbmltcG9ydCBBbmltYXRlZENoZWNrbWFyayBmcm9tICcuLi9Db21tb25Db21wb25lbnRzL0FuaW1hdGVkQ2hlY2ttYXJrL0luZGV4J1xuaW1wb3J0IFJpY2hUZXh0RWRpdG9yIGZyb20gJy4uL0NvbW1vbkNvbXBvbmVudHMvUmljaFRleHRFZGl0b3IvSW5kZXgnXG5cbmltcG9ydCB1c2VTZXRJbm5lckh0bWwgZnJvbSAnLi4vaG9va3MvdXNlU2V0SW5uZXJIdG1sJ1xuaW1wb3J0IHVzZUdldFN0YXRlRWZmZWN0IGZyb20gJy4vaG9va3MvdXNlR2V0U3RhdGVFZmZlY3QnXG5pbXBvcnQgdXNlSGFuZGxlU3VibWl0IGZyb20gJy4vaG9va3MvdXNlSGFuZGxlU3VibWl0J1xuXG5pbXBvcnQgeyBnZXRUaW1lU2luY2UgfSBmcm9tICcuLi8uLi9nZW5lcmljL3N0cmluZy9kYXRlRm9ybWF0dGVyJ1xuaW1wb3J0IHsgY2hlY2tUb3hpY2l0eSB9IGZyb20gJy4uLy4uL2FwaS92MS9jb21tZW50cy9jb21tZW50c19hcGlfdXRpbCdcblxuaW1wb3J0IHtcbiAgRm9ybUNvbnRhaW5lciwgSW5wdXRXcmFwcGVyLCBDb250YWluZXIsIERlc2NyaXB0aW9uLCBUb3hpY2l0eUNvbnRyb2xzLFxufSBmcm9tICcuL1N0eWxlJ1xuXG5jb25zdCB1dWlkUmVnRXggPSBuZXcgUmVnRXhwKC9cXGJbMC05YS1mXXs4fVxcYi1bMC05YS1mXXs0fS1bMC05YS1mXXs0fS1bMC05YS1mXXs0fS1cXGJbMC05YS1mXXsxMn1cXGIvZylcblxuY29uc3QgQ3JlYXRlQ29tbWVudEZvcm0gPSAoeyBtb2RhbFByb3BzIH0pID0+IHtcbiAgY29uc3QgZGVzY1JlZiA9IHVzZVJlZihudWxsKVxuICBjb25zdCBbcmljaFRleHRFZGl0b3JEYXRhLCBzZXRSaWNoVGV4dEVkaXRvckRhdGFdID0gdXNlU3RhdGUoe1xuICAgIHJhd0hUTUw6ICcnLFxuICAgIGNvbnRlbnQ6ICcnLFxuICAgIHJhd1RleHQ6ICcnLFxuICB9KVxuICBjb25zdCBbdG94aWNpdHlTY29yZSwgc2V0VG94aWNpdHlTY29yZV0gPSB1c2VTdGF0ZShudWxsKVxuXG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZUxvY2F0aW9uKClcbiAgY29uc3QgY29udGVudElkID0gcGF0aG5hbWUubWF0Y2godXVpZFJlZ0V4KVswXVxuICBjb25zdCBzdWJ0b3BpY0lkID0gcGF0aG5hbWUubWF0Y2godXVpZFJlZ0V4KVsxXVxuICBjb25zb2xlLmxvZyhwYXRobmFtZSlcbiAgY29uc3QgY29tcFN0YXRlID0gdXNlR2V0U3RhdGVFZmZlY3QoY29udGVudElkLCBzdWJ0b3BpY0lkLCBtb2RhbFByb3BzKVxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSB1c2VIYW5kbGVTdWJtaXQoY29tcFN0YXRlLCByaWNoVGV4dEVkaXRvckRhdGEucmF3SFRNTCwgcmljaFRleHRFZGl0b3JEYXRhLnJhd1RleHQsIG1vZGFsUHJvcHMsIHN1YnRvcGljSWQgfHwgY29udGVudElkLCBjb250ZW50SWQpXG4gIHVzZVNldElubmVySHRtbChkZXNjUmVmLCBjb21wU3RhdGUuaHRtbENvbnRlbnQpXG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPEZvcm1pa1xuICAgICAgICBpbml0aWFsVmFsdWVzPXt7XG4gICAgICAgICAgY29udGVudDogJycsXG4gICAgICAgICAgcG9zaXRpdmU6ICcnLFxuICAgICAgICAgIG5lZ2F0aXZlOiAnJyxcbiAgICAgICAgICBuZXV0cmFsOiAnJyxcbiAgICAgICAgfX1cbiAgICAgICAgdmFsaWRhdGU9eygpID0+IHtcbiAgICAgICAgICBjb25zdCBlcnJvcnMgPSB7fVxuICAgICAgICAgIGlmIChyaWNoVGV4dEVkaXRvckRhdGEuY29udGVudC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGVycm9ycy5jb250ZW50ID0gJ1dyaXRlIFNvbWV0aGluZydcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGVycm9yc1xuICAgICAgICB9fVxuICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxuICAgICAgPlxuICAgICAgICB7KHsgaXNTdWJtaXR0aW5nIH0pID0+IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cbiAgICAgICAgICAgICAgPE1vZGFsLlRpdGxlPldyaXRlIFlvdXIgUmVwbHk8L01vZGFsLlRpdGxlPlxuICAgICAgICAgICAgPC9Nb2RhbC5IZWFkZXI+XG4gICAgICAgICAgICA8Rm9ybUNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPE1vZGFsLkJvZHk+XG4gICAgICAgICAgICAgICAgPFVzZXJJbmZvSGVhZGVyXG4gICAgICAgICAgICAgICAgICBpY29uU3JjPXtjb21wU3RhdGUuY3JlYXRlZEJ5SWNvblNyY31cbiAgICAgICAgICAgICAgICAgIHVzZXJuYW1lPXtjb21wU3RhdGUuY3JlYXRlZEJ5fVxuICAgICAgICAgICAgICAgICAgdGltZT17Z2V0VGltZVNpbmNlKGNvbXBTdGF0ZS50aW1lKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxEZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIHJlZj17ZGVzY1JlZn0gLz5cbiAgICAgICAgICAgICAgICA8L0Rlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICAgIDxJbnB1dFdyYXBwZXI+XG4gICAgICAgICAgICAgICAgICA8UmljaFRleHRFZGl0b3JcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD17cmljaFRleHRFZGl0b3JEYXRhLmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgICAgIHNldENvbnRlbnQ9e3NldFJpY2hUZXh0RWRpdG9yRGF0YX1cbiAgICAgICAgICAgICAgICAgICAgc2V0VG94aWNpdHlTY29yZT17c2V0VG94aWNpdHlTY29yZX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9JbnB1dFdyYXBwZXI+XG4gICAgICAgICAgICAgIDwvTW9kYWwuQm9keT5cbiAgICAgICAgICAgICAgPE1vZGFsLkZvb3Rlcj5cbiAgICAgICAgICAgICAgICA8VG94aWNpdHlDb250cm9scz5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNoZWNrVG94aWNpdHkoeyBjb250ZW50OiByaWNoVGV4dEVkaXRvckRhdGEucmF3VGV4dCB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VG94aWNpdHlTY29yZShyZXMuZGF0YS5TRVZFUkVfVE9YSUNJVFkudG9GaXhlZCgyKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIENoZWNrIFRveGljaXR5IFNjb3JlXG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPEFuaW1hdGVkQ2hlY2ttYXJrIHRveGljaXR5U2NvcmU9e3RveGljaXR5U2NvcmV9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cD57IHRveGljaXR5U2NvcmUgJiYgYFlvdXIgdG94aWNpdHkgc2NvcmUgaXMgJHt0b3hpY2l0eVNjb3JlfWB9PC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9Ub3hpY2l0eUNvbnRyb2xzPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9PlxuICAgICAgICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvTW9kYWwuRm9vdGVyPlxuICAgICAgICAgICAgPC9Gb3JtQ29udGFpbmVyPlxuXG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L0Zvcm1paz5cbiAgICA8L0NvbnRhaW5lcj5cblxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENyZWF0ZUNvbW1lbnRGb3JtXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgRm9ybSB9IGZyb20gJ2Zvcm1paydcblxuZXhwb3J0IGNvbnN0IEZvcm1Db250YWluZXIgPSBzdHlsZWQoRm9ybSlgXG4gIG1hcmdpbi10b3A6IDA7XG4gIGJvcmRlci1yYWRpdXM6IC41ZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuYFxuXG5leHBvcnQgY29uc3QgRGVzY3JpcHRpb24gPSBzdHlsZWQoJ3AnKWAgXG4gIHdpZHRoOiA5MCU7XG4gIHBhZGRpbmc6IC41ZW0gMDtcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xuICBmb250LXNpemU6IC44NWVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogYmxhY2s7XG5gXG5cbmV4cG9ydCBjb25zdCBJbnB1dFdyYXBwZXIgPSBzdHlsZWQoJ2RpdicpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBzZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgd2lkdGg6IDMwdnc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICAgIHBhZGRpbmc6IC4yZW0gLjVlbTtcbiAgICBiYWNrZ3JvdW5kOiAjZTBlNWVjO1xuICAgIGJvcmRlci1yYWRpdXM6IC40ZW07XG4gICAgYm94LXNoYWRvdzpcbiAgIC03cHggLTdweCAyMHB4IDBweCAjZmZmOSxcbiAgIC00cHggLTRweCA1cHggMHB4ICNmZmY5LFxuICAgN3B4IDdweCAyMHB4IDBweCAjMDAwMixcbiAgIDRweCA0cHggNXB4IDBweCAjMDAwMSxcbiAgIGluc2V0IDBweCAwcHggMHB4IDBweCAjZmZmOSxcbiAgIGluc2V0IDBweCAwcHggMHB4IDBweCAjMDAwMSxcbiAgIGluc2V0IDBweCAwcHggMHB4IDBweCAjZmZmOSxcbiAgIGluc2V0IDBweCAwcHggMHB4IDBweCAjMDAwMTtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoMSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLWJvdHRvbTogLjVlbTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gIH1cbiBgXG5cbmV4cG9ydCBjb25zdCBUb3hpY2l0eUNvbnRyb2xzID0gc3R5bGVkKCdkaXYnKWBcbiAgZmxleC1ncm93OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICA+IGRpdiB7XG4gICAgbWFyZ2luLWxlZnQ6IDF2dztcbiAgfVxuXG4gIHAge1xuICAgIG1hcmdpbjogMCAxZW07XG4gICAgY29sb3I6ICM5NzljYjA7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC4xdnc7ICBcbiAgfVxuXG5gXG4iLCJpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5jb25zdCBmaW5kQ29tbWVudENvbnRlbnQgPSAoY29tbWVudCwgaWQpID0+IHtcbiAgY29uc3QgdmlzaXRlZCA9IG5ldyBTZXQoKVxuICBjb25zdCBxID0gW2NvbW1lbnRdXG4gIHdoaWxlIChxLmxlbmd0aCAhPT0gMCkge1xuICAgIGNvbnN0IGN1cnJOb2RlID0gcS5zaGlmdCgpXG4gICAgdmlzaXRlZC5hZGQoY3Vyck5vZGUuZGF0YS5pZClcbiAgICBpZiAoY3Vyck5vZGUuZGF0YS5pZCA9PT0gaWQpIHJldHVybiBjdXJyTm9kZS5kYXRhLmNvbnRlbnRcbiAgICBjdXJyTm9kZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgaWYgKCF2aXNpdGVkLmhhcyhjaGlsZC5kYXRhLmlkKSkgcS5wdXNoKGNoaWxkKVxuICAgIH0pXG4gIH1cbiAgcmV0dXJuICcnXG59XG5cbmV4cG9ydCBkZWZhdWx0ICh0b3BpY0lkLCBzdWJ0b3BpY0lkLCBtb2RhbFByb3BzKSA9PiB7XG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3RvcigocykgPT4gcy5zZXNzaW9uLmN1cnJlbnRVc2VyKVxuICBjb25zdCB0b3BpYyA9IHVzZVNlbGVjdG9yKChzKSA9PiBzLnRvcGljcy5saXN0KT8uZmluZCgodCkgPT4gdC5pZCA9PT0gdG9waWNJZClcbiAgY29uc3QgY29tbWVudCA9IHVzZVNlbGVjdG9yKChzKSA9PiBzLmNvbW1lbnRzLmxpc3QpPy5maW5kKFxuICAgIChjKSA9PiBjLmRhdGE/LmlkID09PSBtb2RhbFByb3BzPy5yb290UGFyZW50Q29tbWVudElkIHx8IG1vZGFsUHJvcHM/LmNvbW1lbnRJZCxcbiAgKVxuICBjb25zdCB0cmlidW5hbENvbW1lbnQgPSB1c2VTZWxlY3RvcigocykgPT4gcy50cmlidW5hbENvbW1lbnRzLmxpc3QpPy5maW5kKFxuICAgIChjKSA9PiBjLmRhdGE/LmlkID09PSBtb2RhbFByb3BzPy5yb290UGFyZW50Q29tbWVudElkLFxuICApXG5cbiAgY29uc3QgeyBjcmVhdGVkQnksIGNyZWF0ZWRCeUljb25TcmMsIGNyZWF0ZWRBdCB9ID0gY29tbWVudD8uZGF0YSB8fCB0cmlidW5hbENvbW1lbnQ/LmRhdGEgfHwge31cbiAgcmV0dXJuIHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IGNvbW1lbnRDb250ZW50ID0gbW9kYWxQcm9wcz8ucmVwbHlUeXBlICE9PSAnUkVQTFlfRlJPTV9UT1BJQydcbiAgICAgID8gZmluZENvbW1lbnRDb250ZW50KGNvbW1lbnQgfHwgdHJpYnVuYWxDb21tZW50LCBtb2RhbFByb3BzPy5jb21tZW50SWQpIDogdG9waWM/LmRlc2NyaXB0aW9uXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1YnRvcGljSWQsXG4gICAgICBjcmVhdGVkQnlJY29uU3JjOiBjcmVhdGVkQnlJY29uU3JjIHx8IHRvcGljPy5jcmVhdGVkQnlJY29uU3JjLFxuICAgICAgdXNlcm5hbWU6IHVzZXI/LnVzZXJuYW1lLFxuICAgICAgY3JlYXRlZEJ5OiBjcmVhdGVkQnkgfHwgdG9waWM/LmNyZWF0ZWRCeSB8fCB0cmlidW5hbENvbW1lbnQ/LmNyZWF0ZWRCeSxcbiAgICAgIHRpbWU6IGNyZWF0ZWRBdCB8fCB0b3BpYz8uY3JlYXRlZEF0LFxuICAgICAgaHRtbENvbnRlbnQ6IGNvbW1lbnRDb250ZW50LFxuICAgICAgcm9vdFBhcmVudENvbW1lbnRJZDogbW9kYWxQcm9wcz8ucm9vdFBhcmVudENvbW1lbnRJZCB8fCBudWxsLFxuICAgICAgdHlwZTogbW9kYWxQcm9wcz8ucmVwbHlUeXBlLFxuICAgIH1cbiAgfSwgW3RvcGljLCB1c2VyLCBjb21tZW50LCBzdWJ0b3BpY0lkLCBtb2RhbFByb3BzXSlcbn1cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5J1xuXG5pbXBvcnQgdXNlQmluZERpc3BhdGNoIGZyb20gJy4uLy4uL2hvb2tzL3JlZHV4L3VzZUJpbmREaXNwYXRjaCdcbmltcG9ydCBjb21tZW50QWN0aW9ucyBmcm9tICcuLi8uLi8uLi9yZWR1eC9hY3Rpb25zL2NvbW1lbnRzJ1xuaW1wb3J0IHRyaWJ1bmFsQ29tbWVudEFjdGlvbnMgZnJvbSAnLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy90cmlidW5hbF9jb21tZW50cydcblxuaW1wb3J0IHsgY2hlY2tUb3hpY2l0eSB9IGZyb20gJy4uLy4uLy4uL2FwaS92MS9jb21tZW50cy9jb21tZW50c19hcGlfdXRpbCdcbmltcG9ydCBkZWxheSBmcm9tICcuLi8uLi8uLi9nZW5lcmljL2RlbGF5J1xuaW1wb3J0IHVzZURldGVjdEN1cnJlbnRQYWdlIGZyb20gJy4uLy4uL2hvb2tzL3JvdXRpbmcvdXNlRGV0ZWN0Q3VycmVudFBhZ2UnXG5cbmV4cG9ydCBkZWZhdWx0IChjb21wU3RhdGUsIGNvbnRlbnQsIHJhd1RleHQsIG1vZGFsUHJvcHMsIGNvbnRlbnRJZCwgdG9waWNJZCkgPT4ge1xuICBjb25zdCB7IGlzT25UcmlidW5hbFBhZ2U6IGlzVHJpYnVuYWxDb21tZW50IH0gPSB1c2VEZXRlY3RDdXJyZW50UGFnZSgpXG5cbiAgY29uc3Qge1xuICAgIHRyaWJ1bmFsQ29tbWVudFVuZGVyUmV2aWV3SWQsXG4gICAgY29tbWVudElkLFxuICB9ID0gbW9kYWxQcm9wcyB8fCB7fVxuXG4gIGNvbnN0IGlzUGFyZW50VHJpYnVuYWxDb21tZW50VW5kZXJSZXZpZXcgPSBpc1RyaWJ1bmFsQ29tbWVudFxuICAmJiB0cmlidW5hbENvbW1lbnRVbmRlclJldmlld0lkID09PSBjb21tZW50SWRcblxuICBjb25zdCBwYXJlbnRJZCA9IGlzUGFyZW50VHJpYnVuYWxDb21tZW50VW5kZXJSZXZpZXcgPyBudWxsIDogY29tbWVudElkIHx8IG51bGxcbiAgY29uc3Qgcm9vdElkID0gaXNQYXJlbnRUcmlidW5hbENvbW1lbnRVbmRlclJldmlldyA/IG51bGwgOiBjb21wU3RhdGUucm9vdFBhcmVudENvbW1lbnRJZFxuXG4gIGNvbnN0IHtcbiAgICBjcmVhdGVDb21tZW50LFxuICAgIGNyZWF0ZVRyaWJ1bmFsQ29tbWVudCxcbiAgfSA9IHVzZUJpbmREaXNwYXRjaChjb21tZW50QWN0aW9ucywgdHJpYnVuYWxDb21tZW50QWN0aW9ucylcblxuICByZXR1cm4gdXNlQ2FsbGJhY2soKHZhbHVlcywgeyBzZXRTdWJtaXR0aW5nLCByZXNldEZvcm0gfSkgPT4ge1xuICAgIHRvYXN0LnByb21pc2UoXG4gICAgICBQcm9taXNlLmFsbChbZGVsYXkoMTUwMCksIGNoZWNrVG94aWNpdHkoeyBjb250ZW50OiByYXdUZXh0IH0pXSksXG4gICAgICB7XG4gICAgICAgIHBlbmRpbmc6ICdBbmFseXppbmcgQ29tbWVudC4uLicsXG4gICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICByZW5kZXIoeyBkYXRhIH0pIHtcbiAgICAgICAgICAgIGNvbnN0IHRveGljaXR5U2NvcmUgPSBkYXRhWzFdLmRhdGEuU0VWRVJFX1RPWElDSVRZXG4gICAgICAgICAgICBpZiAodG94aWNpdHlTY29yZSA8IDAuNikgcmV0dXJuICdUaGFua3MgRm9yIEJlaW5nIENpdmlsISdcbiAgICAgICAgICAgIGlmICh0b3hpY2l0eVNjb3JlID49IDAuNiAmJiB0b3hpY2l0eVNjb3JlIDw9IDAuOSkgcmV0dXJuICdUaGFua3MgZm9yIGJlaW5nIHNlbWktY2l2aWwuIE1heWJlIHNheSB0aGluZ3MgYSBiaXQgbmljZXInXG4gICAgICAgICAgICByZXR1cm4gJ1lvdSBhcmUgYmVpbmcgdG94aWMgOiggXFxuIFlvdXIgY29tbWVudCB3aWxsIGJlIGZsYWdnZWQnXG4gICAgICAgICAgfSxcbiAgICAgICAgICAvLyBvdGhlciBvcHRpb25zXG4gICAgICAgICAgaWNvbjogJ/Cfn6InLFxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogJ1Byb21pc2UgcmVqZWN0ZWQg8J+krycsXG4gICAgICB9LFxuICAgICkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgY29uc3QgdG94aWNpdHlTY29yZSA9IGRhdGFbMV0uZGF0YS5TRVZFUkVfVE9YSUNJVFlcbiAgICAgIGxldCB0b3hpY2l0eVN0YXR1c1xuICAgICAgaWYgKHRveGljaXR5U2NvcmUgPCAwLjYpIHRveGljaXR5U3RhdHVzID0gJ05PVF9UT1hJQydcbiAgICAgIGlmICh0b3hpY2l0eVNjb3JlID4gMC45KSB0b3hpY2l0eVN0YXR1cyA9ICdUT1hJQydcbiAgICAgIGNvbnN0IGNvbW1lbnQgPSB7XG4gICAgICAgIC4uLnZhbHVlcyxcbiAgICAgICAgY29udGVudCxcbiAgICAgICAgbWVtZUZsYWc6IGZhbHNlLFxuICAgICAgICBwYXJlbnRJZCxcbiAgICAgICAgY29udGVudElkLFxuICAgICAgICBzdWJ0b3BpY0lkOiBjb250ZW50SWQsXG4gICAgICAgIHRvcGljSWQsXG4gICAgICAgIGNyZWF0ZWRCeTogY29tcFN0YXRlLnVzZXJuYW1lLFxuICAgICAgICByb290SWQsXG4gICAgICAgIHJhd1RleHQsXG4gICAgICAgIHRveGljaXR5U3RhdHVzLFxuICAgICAgfVxuICAgICAgcmV0dXJuIGlzVHJpYnVuYWxDb21tZW50ID8gY3JlYXRlVHJpYnVuYWxDb21tZW50KGNvbW1lbnQpIDogY3JlYXRlQ29tbWVudChjb21tZW50KVxuICAgIH0pXG5cbiAgICBzZXRTdWJtaXR0aW5nKGZhbHNlKVxuICAgIHJlc2V0Rm9ybSh7fSlcbiAgfSwgW1xuICAgIGNvbXBTdGF0ZSxcbiAgICBjb250ZW50LFxuICAgIHJhd1RleHQsXG4gICAgbW9kYWxQcm9wcy50cmlidW5hbENvbW1lbnRVbmRlclJldmlld0lkLFxuICAgIG1vZGFsUHJvcHMuY29tbWVudElkLFxuICAgIGNvbnRlbnRJZCxcbiAgXSlcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2xhYmVsLWhhcy1hc3NvY2lhdGVkLWNvbnRyb2wgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgQ29udGFpbmVyLCBJbnB1dCB9IGZyb20gJy4vU3R5bGUvaW5kZXgnXG5cbmNvbnN0IEFuaW1hdGVkQ2hlY2ttYXJrID0gKHsgdG94aWNpdHlTY29yZSB9KSA9PiB7XG4gIGxldCBjb2xvclxuICBsZXQgdGV4dFxuICBpZiAodG94aWNpdHlTY29yZSA8IDAuNikgeyBjb2xvciA9ICdncmVlbic7IHRleHQgPSAnR3JlYXQhJyB9XG4gIGlmICh0b3hpY2l0eVNjb3JlID49IDAuNiAmJiB0b3hpY2l0eVNjb3JlIDw9IDAuOSkgeyBjb2xvciA9ICd2YXIoLS1tLWRhbmdlci1jb2xvciknOyB0ZXh0ID0gJ1lvdSBhcmUgT0sgYnV0IGdldHRpbmcgY2xvc2UnIH1cbiAgaWYgKHRveGljaXR5U2NvcmUgPiAwLjkpIHsgY29sb3IgPSAncmVkJzsgdGV4dCA9ICdZb3UgYXJlIGJlaW5nIHRveGljJyB9XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxDb250YWluZXIgY29sb3I9e2NvbG9yfT5cbiAgICAgICAgPElucHV0IHJlYWRPbmx5IGRpc2FibGVkIGNoZWNrZWQ9e0Jvb2xlYW4odG94aWNpdHlTY29yZSl9IHR5cGU9XCJjaGVja2JveFwiIC8+XG4gICAgICAgIDxsYWJlbCAvPlxuICAgICAgICA8c3ZnIHdpZHRoPVwiMTVcIiBoZWlnaHQ9XCIxNFwiIHZpZXdCb3g9XCIwIDAgMTUgMTRcIiBmaWxsPVwibm9uZVwiPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNMiA4LjM2MzY0TDYuMjMwNzcgMTJMMTMgMlwiIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgICB7dG94aWNpdHlTY29yZSAmJiA8c3BhbiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMC41dncnIH19Pnt0ZXh0fTwvc3Bhbj59XG4gICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2ZXJzaW9uPVwiMS4xXCIgc3R5bGU9e3sgd2lkdGg6IDAsIGhlaWdodDogMCB9fT5cbiAgICAgICAgPGRlZnM+XG4gICAgICAgICAgPGZpbHRlciBpZD1cImdvb1wiPlxuICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIGluPVwiU291cmNlR3JhcGhpY1wiIHN0ZERldmlhdGlvbj1cIjRcIiByZXN1bHQ9XCJibHVyXCIgLz5cbiAgICAgICAgICAgIDxmZUNvbG9yTWF0cml4IGluPVwiYmx1clwiIG1vZGU9XCJtYXRyaXhcIiB2YWx1ZXM9XCIxIDAgMCAwIDAgIDAgMSAwIDAgMCAgMCAwIDEgMCAwICAwIDAgMCAyMiAtN1wiIHJlc3VsdD1cImdvb1wiIC8+XG4gICAgICAgICAgICA8ZmVCbGVuZCBpbj1cIlNvdXJjZUdyYXBoaWNcIiBpbjI9XCJnb29cIiAvPlxuICAgICAgICAgIDwvZmlsdGVyPlxuICAgICAgICA8L2RlZnM+XG4gICAgICA8L3N2Zz5cbiAgICA8Lz5cbiAgKVxufVxuZXhwb3J0IGRlZmF1bHQgQW5pbWF0ZWRDaGVja21hcmtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbmltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbi8vIGNvbnN0IHByaW1hcnkgPSAnIzRkMjcxYTg4J1xuXG5jb25zdCBzcGxhc2ggPSAocHJpbWFyeSkgPT4ga2V5ZnJhbWVzYFxuICA0MCUge1xuICAgIGJhY2tncm91bmQ6ICR7cHJpbWFyeX07XG4gICAgYm94LXNoYWRvdzogMCAtMThweCAwIC04cHggJHtwcmltYXJ5fSwgMTZweCAtOHB4IDAgLThweCAke3ByaW1hcnl9LCAxNnB4IDhweCAwIC04cHggJHtwcmltYXJ5fSwgMCAxOHB4IDAgLThweCAke3ByaW1hcnl9LCAtMTZweCA4cHggMCAtOHB4ICR7cHJpbWFyeX0sIC0xNnB4IC04cHggMCAtOHB4ICR7cHJpbWFyeX07XG4gIH1cblxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kOiAke3ByaW1hcnl9O1xuICAgIGJveC1zaGFkb3c6IDAgLTM2cHggMCAtMTBweCB0cmFuc3BhcmVudCwgMzJweCAtMTZweCAwIC0xMHB4IHRyYW5zcGFyZW50LCAzMnB4IDE2cHggMCAtMTBweCB0cmFuc3BhcmVudCwgMCAzNnB4IDAgLTEwcHggdHJhbnNwYXJlbnQsIC0zMnB4IDE2cHggMCAtMTBweCB0cmFuc3BhcmVudCwgLTMycHggLTE2cHggMCAtMTBweCB0cmFuc3BhcmVudDtcbiAgfVxuICBcblxuYFxuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLmNvbG9yfTtcbiAgLyogdHJhbnNmb3JtOiBzY2FsZSgzKTsgKi9cbiAgc3BhbiB7XG4gICAgbWFyZ2luLWxlZnQ6IC41dnc7XG4gIH1cbiAgaW5wdXQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMjRweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2JmYmZjMDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgei1pbmRleDogOTk5OTk5OTk5OTtcblxuICB9XG5cbiAgbGFiZWwge1xuICAgIHotaW5kZXg6IDk5OTk5OTk5OTtcbiAgICB3aWR0aDogMjRweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIC13ZWJraXQtZmlsdGVyOiB1cmwoI2dvbyk7XG4gICAgZmlsdGVyOiB1cmwoI2dvbyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XG4gICAgLyogcG9pbnRlci1ldmVudHM6IG5vbmU7ICovXG4gIH1cblxuICBzdmcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDVweDtcbiAgICBsZWZ0OiA0cHg7XG4gICAgei1pbmRleDogOTk5OTk5OTk5OTk7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgcGF0aCB7XG4gICAgICBzdHJva2U6IHdoaXRlO1xuICAgICAgc3Ryb2tlLXdpZHRoOiAzO1xuICAgICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xuICAgICAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDtcbiAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDE5O1xuICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDE5O1xuICAgICAgdHJhbnNpdGlvbjogc3Ryb2tlLWRhc2hvZmZzZXQgLjNzIGVhc2U7XG4gICAgICB0cmFuc2l0aW9uLWRlbGF5OiAuMnM7XG4gICAgfVxuICB9XG5cbiAgaW5wdXQ6Y2hlY2tlZCB7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG4gIGlucHV0OmNoZWNrZWQgKyBsYWJlbCB7XG4gICAgICBhbmltYXRpb246ICR7KHByb3BzKSA9PiBzcGxhc2gocHJvcHMuY29sb3IpfSAuNnMgZWFzZSBmb3J3YXJkcztcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICR7KHByb3BzKSA9PiBwcm9wcy5jb2xvcn07XG5cbiAgICAgICsgc3ZnIHBhdGgge1xuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMFxuICAgICAgfVxuICB9XG5cbmBcblxuZXhwb3J0IGNvbnN0IElucHV0ID0gc3R5bGVkKCdpbnB1dCcpYFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW46IDA7XG4gICAgJjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiAwO1xuICAgIH1cbmBcbiIsIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2xhYmVsLWhhcy1hc3NvY2lhdGVkLWNvbnRyb2wgKi9cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3Byb3AtdHlwZXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1wcm9wcy1uby1zcHJlYWRpbmcgKi9cblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRXJyb3JNZXNzYWdlIH0gZnJvbSAnZm9ybWlrJ1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IEZhZGUgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5pbXBvcnQgeyBTdHlsZWRTZWxlY3QsIExhYmVsLCBDb250YWluZXIgfSBmcm9tICcuL1N0eWxlJ1xuaW1wb3J0IEVycm9yIGZyb20gJy4uL0Vycm9yTWVzc2FnZS9JbmRleCdcblxuY29uc3QgU2VsZWN0ID0gKHtcbiAgd2lkdGgsIGZpZWxkLCBmb3JtLCBwbGFjZWhvbGRlciwgc2V0RmllbGRWYWx1ZSwgc2V0RmllbGRUb3VjaGVkLCAuLi5wcm9wc1xufSkgPT4ge1xuICBjb25zdCBbb3BlbiwgaXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBtZXRhRGF0YSA9IGZvcm0uZ2V0RmllbGRNZXRhKGZpZWxkLm5hbWUpXG4gIGNvbnN0IHNob3dFcnJvciA9IG1ldGFEYXRhLmVycm9yICYmIG1ldGFEYXRhLnRvdWNoZWRcbiAgY29uc3QgZW51bXMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmVudW1zLnRvcGljQ2F0ZWdvcmllcylcblxuICBjb25zdCBvbkNoYW5nZSA9IHVzZUNhbGxiYWNrKChlLCBzZXRGaWVsZCkgPT4ge1xuICAgIHNldEZpZWxkKGZpZWxkLm5hbWUsIGUudGFyZ2V0LnZhbHVlKVxuICAgIHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG5cbiAgICAgIDxGYWRlIGluPXtvcGVufT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8TGFiZWwgaHRtbEZvcj17ZmllbGQubmFtZX0+U2VsZWN0IEEgQ2F0ZWdvcnk8L0xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRmFkZT5cblxuICAgICAgPFN0eWxlZFNlbGVjdFxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgey4uLmZpZWxkfVxuICAgICAgICBpZD17ZmllbGQubmFtZX1cbiAgICAgICAgc2hvd0Vycm9yPXtzaG93RXJyb3J9XG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkNoYW5nZShlLCBzZXRGaWVsZFZhbHVlKX1cbiAgICAgICAgb25Gb2N1cz17KCkgPT4gaXNPcGVuKHRydWUpfVxuICAgICAgICBvbkJsdXI9eygpID0+IGlzT3BlbihmYWxzZSl9XG4gICAgICA+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5TZWxlY3QgQSBDYXRlZ29yeTwvb3B0aW9uPlxuICAgICAgICB7XG4gICAgICAgIGVudW1zPy5tYXAoKHZhbCkgPT4gPG9wdGlvbiBrZXk9e3ZhbH0gdmFsdWU9e3ZhbH0+e3ZhbH08L29wdGlvbj4pXG4gICAgICB9XG4gICAgICA8L1N0eWxlZFNlbGVjdD5cbiAgICAgIDxFcnJvck1lc3NhZ2Ugd2lkdGg9e3dpZHRofSBuYW1lPXtmaWVsZC5uYW1lfSBjb21wb25lbnQ9e0Vycm9yfSAvPlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdFxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZCgnZGl2JylgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiBhdXRvO1xuICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XG4gIC5mYWRlIHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDg1JTtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgTGFiZWwgPSBzdHlsZWQoJ2xhYmVsJylgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgY29sb3I6IHZhcigtLW0tdHJpbS1jb2xvcik7XG4gIGZvbnQtc2l6ZTogLjVlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbmBcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFNlbGVjdCA9IHN0eWxlZCgnc2VsZWN0JylgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IC41ZW07XG4gIGNvbG9yOiBibGFjaztcbiAgd2lkdGg6ICR7KHByb3BzKSA9PiBwcm9wcy53aWR0aCB8fCAnMzAlJ307XG4gIGhlaWdodDogMy41ZW07XG4gIGZvbnQtc2l6ZTogLjhlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1pbnB1dExpbmVIZWlnaHQpO1xuICBvdXRsaW5lOm5vbmU7XG4gIGJhY2tncm91bmQ6ICNFNUU1RTU7XG4gIGJvcmRlcjogJHsocHJvcHMpID0+IChwcm9wcy5zaG93RXJyb3IgPyAnMXB4IHNvbGlkIHZhcigtLW0tZGFuZ2VyLWNvbG9yKScgOiAnMXB4IHNvbGlkIHZhcigtLWJnKScpfTtcbiAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IHZhcigtLXRyYW5zaXRpb25EdXJhdGlvbik7XG5cbiAgOjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IHZhcigtLW0tdHJpbS1jb2xvcik7XG4gIH1cbiAgOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJveC1zaGFkb3c6ICA1cHggNXB4IDhweCAjZmZmZmZmLFxuICAgICAgICAgICAgIC01cHggLTVweCA4cHggI2ZmZmZmZjtcbiAgfVxuXG4gIDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSArICR7TGFiZWx9LFxuICA6Zm9jdXM6bm90KDpwbGFjZWhvbGRlci1zaG93bikgKyAke0xhYmVsfSB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOlxuICAgICAgdHJhbnNsYXRlM2QoMCwgdmFyKC0tbGFiZWxUcmFuc2Zvcm1lZFBvc1kpLCAwKVxuICAgICAgc2NhbGUodmFyKC0tbGFiZWxTY2FsZUZhY3RvcikpO1xuICAgIHRyYW5zaXRpb246XG4gICAgICB0cmFuc2Zvcm0gdmFyKC0taW5wdXRUcmFuc2l0aW9uRHVyYXRpb24pLFxuICAgICAgdmlzaWJpbGl0eSAwbXMsXG4gICAgICB6LWluZGV4IDBtcztcblxuICBvcHRpb24ge1xuICAgIGNvbG9yOiB2YXIoLS1tLXRyaW0tY29sb3IpO1xuICAgIGZvbnQtc2l6ZTogLjhlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cbmBcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBPdmVybGF5ID0gc3R5bGVkKCdkaXYnKWBcbiAgei1pbmRleDogOTk5OTk5O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgb3BhY2l0eTogMC4xO1xuYFxuIiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tdGhpcy1pbi1zZmMgKi9cbi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2NvbnRyb2wtaGFzLWFzc29jaWF0ZWQtbGFiZWwgKi9cbmltcG9ydCBSZWFjdCwge1xuICB1c2VDYWxsYmFjaywgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmLFxufSBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdFF1aWxsIGZyb20gJ3JlYWN0LXF1aWxsJ1xuXG5pbXBvcnQgJ3JlYWN0LXF1aWxsL2Rpc3QvcXVpbGwuc25vdy5jc3MnXG5cbmltcG9ydCB7IENvbnRhaW5lciwgRW1vamlCdXR0b24sIEVtb2ppQ29udGFpbmVyIH0gZnJvbSAnLi9TdHlsZSdcbmltcG9ydCB7IE92ZXJsYXkgfSBmcm9tICcuLi9PdmVybGF5L3N0eWxlJ1xuXG5jb25zdCBSaWNoVGV4dEVkaXRvciA9ICh7XG4gIGNvbnRlbnQsIHNldENvbnRlbnQsIHNldFRveGljaXR5U2NvcmUsXG59KSA9PiB7XG4gIGNvbnN0IFtpc0hpZGRlbiwgc2V0SXNIaWRkZW5dID0gdXNlU3RhdGUodHJ1ZSlcblxuICBjb25zdCBtb2R1bGVzID0ge1xuICAgIHRvb2xiYXI6IHtcbiAgICAgIGNvbnRhaW5lcjogJyN0b29sYmFyJyxcbiAgICB9LFxuICB9XG5cbiAgY29uc3QgaGFuZGxlT25DaGFuZ2UgPSB1c2VDYWxsYmFjaygoY3VyckNvbnRlbnQsIGRlbHRhLCBzb3VyY2UsIGVkaXRvcikgPT4ge1xuICAgIHNldENvbnRlbnQoe1xuICAgICAgcmF3SFRNTDogZWRpdG9yLmdldEhUTUwoKSxcbiAgICAgIGNvbnRlbnQ6IGVkaXRvci5nZXRDb250ZW50cygpLFxuICAgICAgcmF3VGV4dDogZWRpdG9yLmdldFRleHQoKSxcbiAgICB9KVxuICAgIGlmIChzZXRUb3hpY2l0eVNjb3JlKSBzZXRUb3hpY2l0eVNjb3JlKG51bGwpXG4gIH0sIFtdKVxuXG4gIGNvbnN0IHBpY2tlclJlZiA9IHVzZVJlZihudWxsKVxuICBjb25zdCBxdWlsbFJlZiA9IHVzZVJlZihudWxsKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHBpY2tlclJlZikge1xuICAgICAgY29uc3QgZW1vamlQaWNrZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd1bmljb2RlLWVtb2ppLXBpY2tlcicpXG4gICAgICBlbW9qaVBpY2tlci5hZGRFdmVudExpc3RlbmVyKCdlbW9qaS1waWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChxdWlsbFJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgY29uc3QgeyBlZGl0b3IgfSA9IHF1aWxsUmVmLmN1cnJlbnRcbiAgICAgICAgICBjb25zdCBjdXJzb3JQb3NpdGlvbiA9IGVkaXRvci5nZXRTZWxlY3Rpb24oKT8uaW5kZXggfHwgZWRpdG9yLmdldExlbmd0aCgpIC0gMVxuICAgICAgICAgIGVkaXRvci5pbnNlcnRUZXh0KGN1cnNvclBvc2l0aW9uLCBgJHtldmVudC5kZXRhaWwuZW1vaml9YClcbiAgICAgICAgICBlZGl0b3Iuc2V0U2VsZWN0aW9uKGN1cnNvclBvc2l0aW9uICsgMilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH0sIFtwaWNrZXJSZWYsIHF1aWxsUmVmXSlcblxuICBjb25zdCBmb3JtYXRzID0gWydib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnLCAnc3RyaWtlJywgJ2Jsb2NrcXVvdGUnLCAnY2xlYW4nXVxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwidGV4dC1lZGl0b3JcIj5cbiAgICAgIDxPdmVybGF5IGhpZGRlbj17aXNIaWRkZW59IG9uQ2xpY2s9eygpID0+IHNldElzSGlkZGVuKChwcmV2KSA9PiAhcHJldil9IC8+XG4gICAgICA8Q3VzdG9tVG9vbGJhciBzZXRJc0hpZGRlbj17c2V0SXNIaWRkZW59IHBpY2tlclJlZj17cGlja2VyUmVmfSBpc0hpZGRlbj17aXNIaWRkZW59IC8+XG4gICAgICA8UmVhY3RRdWlsbFxuICAgICAgICByZWY9e3F1aWxsUmVmfVxuICAgICAgICB0aGVtZT1cInNub3dcIlxuICAgICAgICB2YWx1ZT17Y29udGVudH1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxuICAgICAgICBtb2R1bGVzPXttb2R1bGVzfVxuICAgICAgICBmb3JtYXRzPXtmb3JtYXRzfVxuICAgICAgICBwbGFjZWhvbGRlcj1cIlNheSBzb21ldGhpbmcuLi5cIlxuICAgICAgLz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuXG5jb25zdCBDdXN0b21CdXR0b24gPSAoeyBpc0hpZGRlbiwgcGlja2VyUmVmLCBzZXRJc0hpZGRlbiB9KSA9PiAoXG4gIDw+XG4gICAgPHNwYW5cbiAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzSGlkZGVuKChwcmV2KSA9PiAhcHJldil9XG4gICAgICBvbktleURvd249eygpID0+IHNldElzSGlkZGVuKChwcmV2KSA9PiAhcHJldil9XG4gICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgIHRhYkluZGV4PXswfVxuICAgID5cbiAgICAgIPCfmYJcbiAgICA8L3NwYW4+XG4gICAgPEVtb2ppQ29udGFpbmVyIGhpZGRlbj17aXNIaWRkZW59PlxuICAgICAgPHVuaWNvZGUtZW1vamktcGlja2VyIHJlZj17cGlja2VyUmVmfSB2ZXJzaW9uPVwiMTQuMFwiIC8+XG4gICAgPC9FbW9qaUNvbnRhaW5lcj5cbiAgPC8+XG4pXG5cbmNvbnN0IEN1c3RvbVRvb2xiYXIgPSAoeyBzZXRJc0hpZGRlbiwgaXNIaWRkZW4sIHBpY2tlclJlZiB9KSA9PiAoXG4gIDxkaXYgaWQ9XCJ0b29sYmFyXCIgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nIH19PlxuICAgIDxkaXY+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJxbC1ib2xkXCIgLz5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cInFsLWl0YWxpY1wiIC8+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJxbC11bmRlcmxpbmVcIiAvPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwicWwtc3RyaWtlXCIgLz5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cInFsLWJsb2NrcXVvdGVcIiAvPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwicWwtY2xlYW5cIiAvPlxuXG4gICAgPC9kaXY+XG5cbiAgICA8RW1vamlCdXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cInFsLWluc2VydEVtb2ppXCI+XG4gICAgICA8Q3VzdG9tQnV0dG9uIHBpY2tlclJlZj17cGlja2VyUmVmfSBpc0hpZGRlbj17aXNIaWRkZW59IHNldElzSGlkZGVuPXtzZXRJc0hpZGRlbn0gLz5cbiAgICA8L0Vtb2ppQnV0dG9uPlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgUmljaFRleHRFZGl0b3JcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogLjVlbTtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICBtaW4td2lkdGg6IDkyJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAucWwtc25vdy5xbC10b29sYmFyOmFmdGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5xbC10b29sYmFyIHtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAuNWVtO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAuNWVtO1xuICB9XG5cbiAgLnFsLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogLjVlbTtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogLjVlbTtcbiAgfVxuXG4gICN0b29sYmFyIHtcbiAgICBidXR0b246YWZ0ZXIge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuYFxuXG5leHBvcnQgY29uc3QgRW1vamlCdXR0b24gPSBzdHlsZWQoJ2J1dHRvbicpYFxuICBwb3NpdGlvbjogcmVsYXRpdmUgO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICY6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuYFxuXG5leHBvcnQgY29uc3QgRW1vamlDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpYCBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgei1pbmRleDogOTk5OTk5OTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTkwJSwgLTkwJSkgc2NhbGUoLjgpO1xuYFxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1ib290c3RyYXAvTW9kYWwnXG5pbXBvcnQgeyBDb2xsYXBzZSwgRmFkZSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcblxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IEZvcm1paywgRmllbGQgfSBmcm9tICdmb3JtaWsnXG5cbmltcG9ydCB1c2VCaW5kRGlzcGF0Y2ggZnJvbSAnLi4vaG9va3MvcmVkdXgvdXNlQmluZERpc3BhdGNoJ1xuaW1wb3J0IHVzZUhhbmRsZVN1Ym1pdCBmcm9tICcuL2hvb2tzL3VzZUhhbmRsZVN1Ym1pdCdcbmltcG9ydCB1c2VHZXRMaW5rTWV0YURhdGFPbkJsdXIgZnJvbSAnLi9ob29rcy91c2VHZXRMaW5rTWV0YURhdGFPbkJsdXInXG5cbmltcG9ydCBJbnB1dCBmcm9tICcuLi9Db21tb25Db21wb25lbnRzL0Zvcm0vSW5wdXQvSW5kZXgnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL0NvbW1vbkNvbXBvbmVudHMvQnV0dG9uL0luZGV4J1xuXG5pbXBvcnQgdWlBY3Rpb25zIGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMvdWknXG5pbXBvcnQgdG9waWNBY3Rpb25zIGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMvdG9waWNzJ1xuXG5pbXBvcnQgVGhlbWVUb29sdGlwIGZyb20gJy4uL0NvbW1vbkNvbXBvbmVudHMvVG9vbHRpcC9JbmRleCdcbmltcG9ydCBVcGxvYWRNZWRpYUNvbnRhaW5lciBmcm9tICcuLi9Ub3BpY0Zvcm0vY29tcG9uZW50cy9VcGxvYWRNZWRpYS9JbmRleCdcbmltcG9ydCBEaXNwbGF5TWVkaWEgZnJvbSAnLi4vVG9waWNGb3JtL2NvbXBvbmVudHMvRGlzcGxheU1lZGlhL0luZGV4J1xuXG5pbXBvcnQge1xuICBGb3JtQ29udGFpbmVyLCBMZWZ0LCBSaWdodCwgRmxleERpdiwgQ29udGFpbmVyLCBJbnB1dHNDb250YWluZXIsIEFycm93LCBMaW5lLFxufSBmcm9tICcuL1N0eWxlJ1xuaW1wb3J0IHsgRG93bkFycm93Q2lyY2xlU3ZnIH0gZnJvbSAnLi4vLi4vc3Zncy9zdmdzJ1xuaW1wb3J0IFJpY2hUZXh0RWRpdG9yIGZyb20gJy4uL0NvbW1vbkNvbXBvbmVudHMvUmljaFRleHRFZGl0b3IvSW5kZXgnXG5cbmNvbnN0IHV1aWRSZWdFeCA9IG5ldyBSZWdFeHAoL1xcYlswLTlhLWZdezh9XFxiLVswLTlhLWZdezR9LVswLTlhLWZdezR9LVswLTlhLWZdezR9LVxcYlswLTlhLWZdezEyfVxcYi9nKVxuXG5jb25zdCBDcmVhdGVTdWJUb3BpY0Zvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZUxvY2F0aW9uKClcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtpbWdGaWxlLCBzZXRJbWdGaWxlXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFt2aWRlb0ZpbGUsIHNldFZpZGVvRmlsZV0gPSB1c2VTdGF0ZShudWxsKVxuXG4gIGNvbnN0IFtyb3RhdGUsIHNldFJvdGF0ZV0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBbY29udGVudCwgc2V0Q29udGVudF0gPSB1c2VTdGF0ZSgnJylcbiAgLy8gY29uc3QgdmFsaWRhdG9yID0gdXNlQ29uZmlnRm9ybUVycm9ycyhFUlJPUlMpXG4gIGNvbnN0IFt0b3BpY0lkXSA9IHBhdGhuYW1lLm1hdGNoKHV1aWRSZWdFeClcblxuICBjb25zdCB7IG1ldGFEYXRhLCBnZXRMaW5rTWV0YURhdGFPbkJsdXIgfSA9IHVzZUdldExpbmtNZXRhRGF0YU9uQmx1cigpXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IHVzZUhhbmRsZVN1Ym1pdChtZXRhRGF0YSwgdG9waWNJZClcblxuICBjb25zdCB7IGdldFRvcGljLCBjbG9zZU1vZGFsIH0gPSB1c2VCaW5kRGlzcGF0Y2goXG4gICAgdWlBY3Rpb25zLCB0b3BpY0FjdGlvbnMsXG4gIClcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKChzKSA9PiBzLnNlc3Npb24uY3VycmVudFVzZXIpXG4gIGNvbnN0IHRvcGljID0gdXNlU2VsZWN0b3IoKHMpID0+IHMudG9waWNzLmxpc3QpPy5maW5kKCh0KSA9PiB0LmlkID09PSB0b3BpY0lkKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0VG9waWModG9waWNJZCwgdXNlcj8uaWQpXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxGb3JtaWtcbiAgICAgICAgaW5pdGlhbFZhbHVlcz17eyB0aXRsZTogJycgfX1cbiAgICAgICAgdmFsaWRhdGU9eyh2YWx1ZXMpID0+IHtcbiAgICAgICAgICBjb25zdCBlcnJvcnMgPSB7fVxuICAgICAgICAgIGlmICghdmFsdWVzLnRpdGxlKSB7XG4gICAgICAgICAgICBlcnJvcnMudGl0bGUgPSAnVGl0bGUgSXMgUmVxdWlyZWQnXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBlcnJvcnNcbiAgICAgICAgfX1cbiAgICAgICAgb25TdWJtaXQ9eygodmFsdWVzLCBwYXJhbXMpID0+IGhhbmRsZVN1Ym1pdCh2YWx1ZXMsIHBhcmFtcywgY29udGVudCkpfVxuICAgICAgPlxuICAgICAgICB7KHsgaXNTdWJtaXR0aW5nLCBzZXRGaWVsZFZhbHVlIH0pID0+IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cbiAgICAgICAgICAgICAgPE1vZGFsLlRpdGxlPlxuICAgICAgICAgICAgICAgIENyZWF0ZSBTdWIgVG9waWMgUmVnYXJkaW5nIFRoZSBUb3BpY1xuICAgICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgICAge2BcIiR7dG9waWM/LnRpdGxlfVwiYH1cbiAgICAgICAgICAgICAgPC9Nb2RhbC5UaXRsZT5cbiAgICAgICAgICAgIDwvTW9kYWwuSGVhZGVyPlxuICAgICAgICAgICAgPEZvcm1Db250YWluZXI+XG4gICAgICAgICAgICAgIDxNb2RhbC5Cb2R5PlxuICAgICAgICAgICAgICAgIDxJbnB1dHNDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICA8TGVmdD5cbiAgICAgICAgICAgICAgICAgICAgPEZsZXhEaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGgyPiBUb3BpYyBEZXNjcmlwdGlvbiA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgIDxUaGVtZVRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBIZWFkZXI9XCJUb3BpYyBEZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwVGV4dD1cIlByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHRvcGljIHlvdSB3b3VsZCBsaWtlIHRvIGRpc2N1c3NcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRmxleERpdj5cbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRpdGxlXCIgY29tcG9uZW50PXtJbnB1dH0gd2lkdGg9XCIxMDAlXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBBIFRvcGljIFRpdGxlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInN1bW1hcnlcIiBjb21wb25lbnQ9e0lucHV0fSB3aWR0aD1cIjEwMCVcIiBwbGFjZWhvbGRlcj1cIkdpdmUgQSBTaG9ydCBPcGluaW9uIE9yIFBvaW50XCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvTGVmdD5cbiAgICAgICAgICAgICAgICAgIDxSaWdodD5cbiAgICAgICAgICAgICAgICAgICAgPEZsZXhEaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGgyPiBMaW5rIHRvIHdoYXQgeW91IHdhbnQgdG8gZGlzY3VzcyBoZXJlLi4uIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgPFRoZW1lVG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcEhlYWRlcj1cIkRpc2N1c3NlZCBDb250ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBUZXh0PVwiQWRkIGEgbGluayB0byB0aGUgZXh0ZXJuYWwgY29udGVudCB5b3Ugd291bGQgbGlrZSB0byBkaXNjdXNzIChcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuZyBhIFlvdVR1YmUgdmlkZW8sIFR3ZWV0LCBwdWJsaWNhdGlvbiwgb3IgYW55dGhpbmcgZWxzZSlcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRmxleERpdj5cblxuICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZT1cInVybFwiIG5hbWU9XCJjb250ZW50VXJsXCIgcGxhY2Vob2xkZXI9XCJMaW5rIFRvIENvbnRlbnRcIiBjb21wb25lbnQ9e0lucHV0fSB3aWR0aD1cIjEwMCVcIiBvbkJsdXI9e2dldExpbmtNZXRhRGF0YU9uQmx1cn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmUgLz5cbiAgICAgICAgICAgICAgICAgICAgPEZsZXhEaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGgyPiBBZGQgeW91ciBvd24gbWVkaWEgY29udGVudCA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgIDxUaGVtZVRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBIZWFkZXI9XCJVc2VyIFByb3ZpZGVkIENvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcFRleHQ9XCJUaGlzIGNvdWxkIGJlIGFuIGltYWdlLCBncmFwaGljLCBvciB2aWRlbyBwZXJ0YWluaW5nIHRvIHRoZSB0b3BpYyB5b3Ugd291bGQgbGlrZSB0byBkaXNjdXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXhEaXY+XG4gICAgICAgICAgICAgICAgICAgIDxVcGxvYWRNZWRpYUNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgIHNldEZpZWxkVmFsdWU9e3NldEZpZWxkVmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgaW1nRmlsZT17aW1nRmlsZX1cbiAgICAgICAgICAgICAgICAgICAgICB2aWRlb0ZpbGU9e3ZpZGVvRmlsZX1cbiAgICAgICAgICAgICAgICAgICAgICBzZXRJbWdGaWxlPXtzZXRJbWdGaWxlfVxuICAgICAgICAgICAgICAgICAgICAgIHNldFZpZGVvRmlsZT17c2V0VmlkZW9GaWxlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9SaWdodD5cbiAgICAgICAgICAgICAgICA8L0lucHV0c0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8TGluZSAvPlxuICAgICAgICAgICAgICAgIDxEaXNwbGF5TWVkaWFcbiAgICAgICAgICAgICAgICAgIGltZ0ZpbGU9e2ltZ0ZpbGV9XG4gICAgICAgICAgICAgICAgICB2aWRlb0ZpbGU9e3ZpZGVvRmlsZX1cbiAgICAgICAgICAgICAgICAgIG1ldGFEYXRhPXttZXRhRGF0YX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxSaWNoVGV4dEVkaXRvciBjb250ZW50PXtjb250ZW50fSBzZXRDb250ZW50PXtzZXRDb250ZW50fSAvPlxuICAgICAgICAgICAgICAgIDxBcnJvd1xuICAgICAgICAgICAgICAgICAgcm90YXRlPXtyb3RhdGV9XG4gICAgICAgICAgICAgICAgICAvLyBpY29uPXs8RG93bkFycm93Q2lyY2xlU3ZnIC8+fVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRPcGVuKCFvcGVuKVxuICAgICAgICAgICAgICAgICAgICBzZXRSb3RhdGUocm90YXRlICsgKG9wZW4gPyAtMTgwIDogMTgwKSlcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPERvd25BcnJvd0NpcmNsZVN2ZyAvPlxuICAgICAgICAgICAgICAgIDwvQXJyb3c+XG4gICAgICAgICAgICAgICAgPEZhZGUgaW49eyFvcGVufT5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIEVudGVyIFN1cHBsZW1lbnRhbCBJbmZvcm1hdGlvblxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9GYWRlPlxuICAgICAgICAgICAgICAgIDxJbnB1dHNDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICA8Q29sbGFwc2UgaW49e29wZW59PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdoaXRlU3BhY2U6ICdub3dyYXAnLCB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgICAgICAgICAgICAgICAgIDxGbGV4RGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPiBFbnRlciBMaW5rcyBUbyBTdXBwbGVtZW50YWwgRXZpZGVuY2UuLi4gPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUaGVtZVRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcFRleHQ9XCJQcm92aWRlIGxpbmtzIHRvIGFkZGl0aW9uYWwgcmVhZGluZyBvciBldmlkZW5jZSBldGMuLi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwSGVhZGVyPVwiU3VwcGxlbWVudGFsIEluZm9ybWF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9GbGV4RGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCB0eXBlPVwidXJsXCIgbmFtZT1cIkV2aWRlbmNlIExpbmsgMVwiIGNvbXBvbmVudD17SW5wdXR9IHdpZHRoPVwiMTAwJVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGU9XCJ1cmxcIiBuYW1lPVwiRXZpZGVuY2UgTGluayAyXCIgY29tcG9uZW50PXtJbnB1dH0gd2lkdGg9XCIxMDAlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZT1cInVybFwiIG5hbWU9XCJFdmlkZW5jZSBMaW5rIDNcIiBjb21wb25lbnQ9e0lucHV0fSB3aWR0aD1cIjEwMCVcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvQ29sbGFwc2U+XG4gICAgICAgICAgICAgICAgPC9JbnB1dHNDb250YWluZXI+XG4gICAgICAgICAgICAgIDwvTW9kYWwuQm9keT5cbiAgICAgICAgICAgICAgPE1vZGFsLkZvb3Rlcj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17aXNTdWJtaXR0aW5nfSBvbkNsaWNrPXtjbG9zZU1vZGFsfT5cbiAgICAgICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9PlxuICAgICAgICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvTW9kYWwuRm9vdGVyPlxuICAgICAgICAgICAgPC9Gb3JtQ29udGFpbmVyPlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9Gb3JtaWs+XG4gICAgPC9Db250YWluZXI+XG5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVTdWJUb3BpY0Zvcm1cbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBGb3JtIH0gZnJvbSAnZm9ybWlrJ1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWBcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBoZWlnaHQ6IDkwdmg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxZW07XG4gIGJveC1zaGFkb3c6ICA1cHggNXB4IDVweCAtM3B4ICMwMDAwMDA7XG5cbiAgaDEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy1ib3R0b206IC41ZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICB9XG4gYFxuXG5leHBvcnQgY29uc3QgRmxleERpdiA9IHN0eWxlZCgnZGl2JylgIFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG5gXG5cbmV4cG9ydCBjb25zdCBGb3JtQ29udGFpbmVyID0gc3R5bGVkKEZvcm0pYFxuICBtYXJnaW4tdG9wOiAxZW07XG4gICBoMiB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgbWFyZ2luOiAwIDFlbTtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgSW5wdXRzQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWBcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG5gXG5cbmV4cG9ydCBjb25zdCBMZWZ0ID0gc3R5bGVkKCdkaXYnKWBcbiAgZGlzcGxheTogZmxleDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogNTAlO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcbmBcbmV4cG9ydCBjb25zdCBSaWdodCA9IHN0eWxlZCgnZGl2JylgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDUwJTtcbmBcblxuZXhwb3J0IGNvbnN0IFN1cHBsZW1lbnRhbEluZm9ybWF0aW9uID0gc3R5bGVkKCdzZWN0aW9uJylgXG5cbmBcblxuZXhwb3J0IGNvbnN0IElucHV0V3JhcHBlciA9IHN0eWxlZCgnZGl2JylgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5gXG5cbmV4cG9ydCBjb25zdCBBcnJvdyA9IHN0eWxlZCgnc3BhbicpYFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNmb3JtOiAkeyhwcm9wcykgPT4gYHJvdGF0ZSgke3Byb3BzLnJvdGF0ZX1kZWcpYH07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuYFxuXG5leHBvcnQgY29uc3QgTGluZSA9IHN0eWxlZCgnaHInKWAgXG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMmVtIDEuM2VtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDgsNDgsNTApO1xuICBoZWlnaHQ6IC41cHg7XG4gIGJvcmRlcjogbm9uZTtcbmBcbiIsImltcG9ydCB7IHlvdVR1YmVVcmxWYWxpZGF0b3IsIHR3aXR0ZXJVcmxWYWxpZHRvciB9IGZyb20gJy4uLy4uLy4uL2dlbmVyaWMvcmVnZXgvdXJsVmFsaWRhdG9ycydcblxuZXhwb3J0IGRlZmF1bHQgKHVybCkgPT4ge1xuICBjb25zdCB5dFVybCA9IHVybC5zZWFyY2goeW91VHViZVVybFZhbGlkYXRvcikgPT09IC0xID8gbnVsbCA6ICd5dFVybCdcbiAgY29uc3QgdHdlZXRVcmwgPSB1cmwuc2VhcmNoKHR3aXR0ZXJVcmxWYWxpZHRvcikgPT09IC0xID8gbnVsbCA6ICd0d2VldFVybCdcbiAgcmV0dXJuIHl0VXJsIHx8IHR3ZWV0VXJsXG59XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgZ2V0TGlua01ldGFEYXRhIH0gZnJvbSAnLi4vLi4vLi4vYXBpL3YxL3RvcGljcy90b3BpY3NfYXBpX3V0aWwnXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY29uc3QgW21ldGFEYXRhLCBzZXRNZXRhRGF0YV0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBnZXRMaW5rTWV0YURhdGFPbkJsdXIgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xuICAgIGdldExpbmtNZXRhRGF0YShlLmN1cnJlbnRUYXJnZXQudmFsdWUpLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICBzZXRNZXRhRGF0YShkYXRhKVxuICAgIH0pXG4gIH0sIFtdKVxuXG4gIHJldHVybiB7IG1ldGFEYXRhLCBnZXRMaW5rTWV0YURhdGFPbkJsdXIgfVxufVxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB0b3BpY0FjdGlvbnMgZnJvbSAnLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy90b3BpY3MvaW5kZXgnXG5pbXBvcnQgc3VidG9waWNBY3Rpb25zIGZyb20gJy4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvc3VidG9waWNzL2luZGV4J1xuXG5pbXBvcnQgdXNlQmluZERpc3BhdGNoIGZyb20gJy4uLy4uL2hvb2tzL3JlZHV4L3VzZUJpbmREaXNwYXRjaCdcblxuaW1wb3J0IGNoZWNrTGlua1R5cGUgZnJvbSAnLi9jaGVja0xpbmtUeXBlJ1xuXG5leHBvcnQgZGVmYXVsdCAobWV0YURhdGEsIHRvcGljSWQpID0+IHtcbiAgY29uc3QgeyBjcmVhdGVTdWJUb3BpYywgdXBsb2FkVG9waWNNZWRpYSB9ID0gdXNlQmluZERpc3BhdGNoKHRvcGljQWN0aW9ucywgc3VidG9waWNBY3Rpb25zKVxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3IoKHMpID0+IHMuc2Vzc2lvbi5jdXJyZW50VXNlcilcblxuICByZXR1cm4gdXNlQ2FsbGJhY2soKHZhbHVlcywgeyBzZXRTdWJtaXR0aW5nLCByZXNldEZvcm0gfSwgY29udGVudCkgPT4ge1xuICAgIGNvbnN0IGVMaW5rcyA9IE9iamVjdC5lbnRyaWVzKHZhbHVlcykubWFwKChbaywgdl0pID0+IChrLmluY2x1ZGVzKCdFdmlkZW5jZScpID8gdiA6IG51bGwpKS5maWx0ZXIoQm9vbGVhbilcbiAgICBjb25zdCBsaW5rVHlwZSA9IGNoZWNrTGlua1R5cGUodmFsdWVzLmNvbnRlbnRVcmwpXG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIC4uLnZhbHVlcyxcbiAgICAgIGRlc2NyaXB0aW9uOiBjb250ZW50LFxuICAgICAgY3JlYXRlZEJ5OiB1c2VyLnVzZXJuYW1lLFxuICAgICAgdXNlcklkOiB1c2VyLmlkLFxuICAgICAgZXZpZGVuY2VMaW5rczogZUxpbmtzLFxuICAgICAgW2xpbmtUeXBlXTogdmFsdWVzLmNvbnRlbnRVcmwsXG4gICAgICB0aHVtYkltZ1VybDogbWV0YURhdGEub2dJbWFnZT8udXJsLFxuICAgICAgdG9waWNJZCxcbiAgICAgIHR3ZWV0VXJsOiBudWxsLFxuICAgICAgaW1hZ2VVcmw6IG51bGwsXG4gICAgICB2b2RVcmw6IG51bGwsXG4gICAgfVxuICAgIGlmICh2YWx1ZXMuZmlsZSBpbnN0YW5jZW9mIEZpbGUpIHtcbiAgICAgIGNvbnN0IFtmaWxlVHlwZSwgZmlsZUZvcm1hdF0gPSB2YWx1ZXMuZmlsZS50eXBlLnNwbGl0KCcvJylcbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLCB2YWx1ZXMuZmlsZSlcbiAgICAgIHVwbG9hZFRvcGljTWVkaWEoZm9ybURhdGEsIGZpbGVUeXBlLCBmaWxlRm9ybWF0LCBkYXRhKVxuICAgIH0gZWxzZSB7XG4gICAgICBjcmVhdGVTdWJUb3BpYyhkYXRhKVxuICAgIH1cbiAgICBzZXRTdWJtaXR0aW5nKGZhbHNlKVxuICAgIHJlc2V0Rm9ybSh7fSlcbiAgfSwgW21ldGFEYXRhLCB0b3BpY0lkXSlcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtYm9vdHN0cmFwL01vZGFsJ1xuaW1wb3J0IHsgRm9ybWlrLCBGaWVsZCB9IGZyb20gJ2Zvcm1paydcbmltcG9ydCB7IENvbGxhcHNlLCBGYWRlIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuXG5pbXBvcnQgdXNlQmluZERpc3BhdGNoIGZyb20gJy4uL2hvb2tzL3JlZHV4L3VzZUJpbmREaXNwYXRjaCdcbmltcG9ydCB1c2VIYW5kbGVTdWJtaXQgZnJvbSAnLi9ob29rcy91c2VIYW5kbGVTdWJtaXQnXG5pbXBvcnQgdXNlQ29uZmlnRm9ybUVycm9ycyBmcm9tICcuLi91dGlsL2Zvcm1faGVscGVycy9ob29rcy91c2VDb25maWdGb3JtRXJyb3JzJ1xuaW1wb3J0IHVpQWN0aW9ucyBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zL3VpJ1xuXG5pbXBvcnQgeyBEb3duQXJyb3dDaXJjbGVTdmcgfSBmcm9tICcuLi8uLi9zdmdzL3N2Z3MnXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi4vQ29tbW9uQ29tcG9uZW50cy9Gb3JtL0lucHV0My9JbmRleCdcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi4vQ29tbW9uQ29tcG9uZW50cy9Gb3JtL1NlbGVjdC9JbmRleCdcbmltcG9ydCBSaWNoVGV4dEVkaXRvciBmcm9tICcuLi9Db21tb25Db21wb25lbnRzL1JpY2hUZXh0RWRpdG9yL0luZGV4J1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9Db21tb25Db21wb25lbnRzL0J1dHRvbi9JbmRleCdcbmltcG9ydCBVcGxvYWRNZWRpYUNvbnRhaW5lciBmcm9tICcuL2NvbXBvbmVudHMvVXBsb2FkTWVkaWEvSW5kZXgnXG5pbXBvcnQgRGlzcGxheU1lZGlhIGZyb20gJy4vY29tcG9uZW50cy9EaXNwbGF5TWVkaWEvSW5kZXgnXG5pbXBvcnQgTGlua1R5cGVJY29uIGZyb20gJy4vY29tcG9uZW50cy9MaW5rVHlwZUljb24vSW5kZXgnXG5cbmltcG9ydCBUaGVtZVRvb2x0aXAgZnJvbSAnLi4vQ29tbW9uQ29tcG9uZW50cy9Ub29sdGlwL0luZGV4J1xuXG5pbXBvcnQge1xuICBGb3JtQ29udGFpbmVyLCBJbnB1dHNDb250YWluZXIsIENvbnRhaW5lciwgTGVmdCwgUmlnaHQsIFNlY3Rpb25EZXNjcmlwdGlvbiwgTW9iaWxlT25seUxpbmUsXG4gIExpbmUsIEFycm93LCBGbGV4RGl2LFxufSBmcm9tICcuL1N0eWxlJ1xuXG5pbXBvcnQgeyBJTklUX1RPUElDX0ZPUk1fVkFMVUVTIH0gZnJvbSAnLi4vdXRpbC9mb3JtX2hlbHBlcnMvaW5pdF9mb3JtX3ZhbHVlcydcbmltcG9ydCB1c2VHZXRMaW5rTWV0YURhdGFPbkJsdXIgZnJvbSAnLi9ob29rcy91c2VHZXRMaW5rTWV0YURhdGFPbkJsdXInXG5cbmNvbnN0IFZBTElEQVRJT05TID0ge1xuICB0aXRsZTogeyBSRVFVSVJFRDogdHJ1ZSB9LFxuICBzdW1tYXJ5OiB7IFJFUVVJUkVEOiB0cnVlLCBNSU5fTEVOR1RIOiA1IH0sXG4gIGNhdGVnb3J5OiB7IFJFUVVJUkVEOiB0cnVlIH0sXG59XG5cbmNvbnN0IENyZWF0ZVRvcGljRm9ybSA9ICgpID0+IHtcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtpbWdGaWxlLCBzZXRJbWdGaWxlXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFt2aWRlb0ZpbGUsIHNldFZpZGVvRmlsZV0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbbWV0YURhdGEsIHNldE1ldGFEYXRhXSA9IHVzZVN0YXRlKG51bGwpXG5cbiAgY29uc3QgW3JvdGF0ZSwgc2V0Um90YXRlXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFtyaWNoVGV4dEVkaXRvckNvbnRlbnQsIHNldFJpY2hUZXh0RWRpdG9yQ29udGVudF0gPSB1c2VTdGF0ZSh7XG4gICAgcmF3SFRNTDogJycsXG4gICAgY29udGVudDogJycsXG4gIH0pXG5cbiAgY29uc3QgdmFsaWRhdG9yID0gdXNlQ29uZmlnRm9ybUVycm9ycyhWQUxJREFUSU9OUylcbiAgY29uc3QgeyBjb250ZW50VXJsLCBnZXRDb250ZW50VXJsT25CbHVyIH0gPSB1c2VHZXRMaW5rTWV0YURhdGFPbkJsdXIoKVxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSB1c2VIYW5kbGVTdWJtaXQobWV0YURhdGEpXG4gIGNvbnN0IHsgY2xvc2VNb2RhbCB9ID0gdXNlQmluZERpc3BhdGNoKHVpQWN0aW9ucylcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8Rm9ybWlrXG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e0lOSVRfVE9QSUNfRk9STV9WQUxVRVN9XG4gICAgICAgIHZhbGlkYXRlPXt2YWxpZGF0b3J9XG4gICAgICAgIG9uU3VibWl0PXsoKHZhbHVlcywgcGFyYW1zKSA9PiBoYW5kbGVTdWJtaXQodmFsdWVzLCBwYXJhbXMsIHJpY2hUZXh0RWRpdG9yQ29udGVudC5yYXdIVE1MKSl9XG4gICAgICA+XG4gICAgICAgIHsoeyBpc1N1Ym1pdHRpbmcsIHNldEZpZWxkVmFsdWUsIHNldEZpZWxkVG91Y2hlZCB9KSA9PiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XG4gICAgICAgICAgICAgIDxNb2RhbC5UaXRsZT5DcmVhdGUgVG9waWM8L01vZGFsLlRpdGxlPlxuICAgICAgICAgICAgPC9Nb2RhbC5IZWFkZXI+XG5cbiAgICAgICAgICAgIDxGb3JtQ29udGFpbmVyPlxuICAgICAgICAgICAgICA8TW9kYWwuQm9keT5cbiAgICAgICAgICAgICAgICA8SW5wdXRzQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgPExlZnQ+XG4gICAgICAgICAgICAgICAgICAgIDxGbGV4RGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxTZWN0aW9uRGVzY3JpcHRpb24+IFRvcGljIERlc2NyaXB0aW9uIDwvU2VjdGlvbkRlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxUaGVtZVRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBIZWFkZXI9XCJUb3BpYyBEZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwVGV4dD1cIlByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHRvcGljIHlvdSB3b3VsZCBsaWtlIHRvIGRpc2N1c3NcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRmxleERpdj5cbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRpdGxlXCIgbGFiZWw9XCJUaXRsZVwiIGNvbXBvbmVudD17SW5wdXR9IHdpZHRoPVwiODUlXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBBIFRvcGljIFRpdGxlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInN1bW1hcnlcIiBsYWJlbD1cIlN1bW1hcnlcIiBjb21wb25lbnQ9e0lucHV0fSB3aWR0aD1cIjg1JVwiIHBsYWNlaG9sZGVyPVwiR2l2ZSBBIFNob3J0IE9waW5pb24gT3IgUG9pbnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZT1cInRleHRcIiBuYW1lPVwiY2F0ZWdvcnlcIiBsYWJlbD1cIkNhdGVnb3J5XCIgY29tcG9uZW50PXtTZWxlY3R9IHNldEZpZWxkVmFsdWU9e3NldEZpZWxkVmFsdWV9IHNldEZpZWxkVG91Y2hlZD17c2V0RmllbGRUb3VjaGVkfSB3aWR0aD1cIjg1JVwiIC8+XG4gICAgICAgICAgICAgICAgICA8L0xlZnQ+XG4gICAgICAgICAgICAgICAgICA8TW9iaWxlT25seUxpbmUgLz5cbiAgICAgICAgICAgICAgICAgIDxSaWdodD5cbiAgICAgICAgICAgICAgICAgICAgPEZsZXhEaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPFNlY3Rpb25EZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIExpbmsgdG8gd2hhdCB5b3Ugd2FudCB0byBkaXNjdXNzIGhlcmUuLi5cbiAgICAgICAgICAgICAgICAgICAgICA8L1NlY3Rpb25EZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8VGhlbWVUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwSGVhZGVyPVwiRGlzY3Vzc2VkIENvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcFRleHQ9XCJBZGQgYSBsaW5rIHRvIHRoZSBleHRlcm5hbCBjb250ZW50IHlvdSB3b3VsZCBsaWtlIHRvIGRpc2N1c3MgKFxuICAgICAgICAgICAgICAgICAgICAgICAgZS5nIGEgWW91VHViZSB2aWRlbywgVHdlZXQsIHB1YmxpY2F0aW9uLCBvciBhbnl0aGluZyBlbHNlKVwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4RGl2PlxuICAgICAgICAgICAgICAgICAgICA8RmxleERpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ1cmxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvbnRlbnRVcmxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMaW5rIFRvIENvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJMaW5rIFRvIENvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtJbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiODUlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17Z2V0Q29udGVudFVybE9uQmx1cn1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIHsgY29udGVudFVybCAmJiA8TGlua1R5cGVJY29uIG1ldGFEYXRhPXttZXRhRGF0YX0gY29udGVudFVybD17Y29udGVudFVybH0gLz4gfVxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXhEaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPExpbmUgLz5cbiAgICAgICAgICAgICAgICAgICAgPEZsZXhEaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPFNlY3Rpb25EZXNjcmlwdGlvbj4gQWRkIHlvdXIgb3duIG1lZGlhIGNvbnRlbnQgPC9TZWN0aW9uRGVzY3JpcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgPFRoZW1lVG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcEhlYWRlcj1cIlVzZXIgUHJvdmlkZWQgQ29udGVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwVGV4dD1cIlRoaXMgY291bGQgYmUgYW4gaW1hZ2UsIGdyYXBoaWMsIG9yIHZpZGVvIHBlcnRhaW5pbmcgdG8gdGhlIHRvcGljIHlvdSB3b3VsZCBsaWtlIHRvIGRpc2N1c3NcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRmxleERpdj5cbiAgICAgICAgICAgICAgICAgICAgPFVwbG9hZE1lZGlhQ29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0RmllbGRWYWx1ZT17c2V0RmllbGRWYWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICBpbWdGaWxlPXtpbWdGaWxlfVxuICAgICAgICAgICAgICAgICAgICAgIHZpZGVvRmlsZT17dmlkZW9GaWxlfVxuICAgICAgICAgICAgICAgICAgICAgIHNldEltZ0ZpbGU9e3NldEltZ0ZpbGV9XG4gICAgICAgICAgICAgICAgICAgICAgc2V0VmlkZW9GaWxlPXtzZXRWaWRlb0ZpbGV9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L1JpZ2h0PlxuICAgICAgICAgICAgICAgIDwvSW5wdXRzQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxMaW5lIC8+XG4gICAgICAgICAgICAgICAgPERpc3BsYXlNZWRpYVxuICAgICAgICAgICAgICAgICAgaW1nRmlsZT17aW1nRmlsZX1cbiAgICAgICAgICAgICAgICAgIHZpZGVvRmlsZT17dmlkZW9GaWxlfVxuICAgICAgICAgICAgICAgICAgY29udGVudFVybD17Y29udGVudFVybH1cbiAgICAgICAgICAgICAgICAgIHNldE1ldGFEYXRhPXtzZXRNZXRhRGF0YX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxSaWNoVGV4dEVkaXRvclxuICAgICAgICAgICAgICAgICAgY29udGVudD17cmljaFRleHRFZGl0b3JDb250ZW50LmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgICBzZXRDb250ZW50PXtzZXRSaWNoVGV4dEVkaXRvckNvbnRlbnR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8QXJyb3dcbiAgICAgICAgICAgICAgICAgIHJvdGF0ZT17cm90YXRlfVxuICAgICAgICAgICAgICAgICAgLy8gaWNvbj17PERvd25BcnJvd0NpcmNsZVN2ZyAvPn1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0T3Blbighb3BlbilcbiAgICAgICAgICAgICAgICAgICAgc2V0Um90YXRlKHJvdGF0ZSArIChvcGVuID8gLTE4MCA6IDE4MCkpXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxEb3duQXJyb3dDaXJjbGVTdmcgLz5cbiAgICAgICAgICAgICAgICA8L0Fycm93PlxuICAgICAgICAgICAgICAgIDxGYWRlIGluPXshb3Blbn0+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICBFbnRlciBTdXBwbGVtZW50YWwgSW5mb3JtYXRpb25cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvRmFkZT5cbiAgICAgICAgICAgICAgICA8SW5wdXRzQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgPENvbGxhcHNlIGluPXtvcGVufT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aGl0ZVNwYWNlOiAnbm93cmFwJywgd2lkdGg6ICcxMDAlJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICA8RmxleERpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj4gRW50ZXIgTGlua3MgVG8gU3VwcGxlbWVudGFsIEV2aWRlbmNlLi4uIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGhlbWVUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBUZXh0PVwiUHJvdmlkZSBsaW5rcyB0byBhZGRpdGlvbmFsIHJlYWRpbmcgb3IgZXZpZGVuY2UgZXRjLi4uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcEhlYWRlcj1cIlN1cHBsZW1lbnRhbCBJbmZvcm1hdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvRmxleERpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZT1cInVybFwiIG5hbWU9XCJFdmlkZW5jZSBMaW5rIDFcIiBjb21wb25lbnQ9e0lucHV0fSB3aWR0aD1cIjcwJVwiIGxhYmVsPVwiTGluayBUbyBFdmlkZW5jZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGU9XCJ1cmxcIiBuYW1lPVwiRXZpZGVuY2UgTGluayAyXCIgY29tcG9uZW50PXtJbnB1dH0gd2lkdGg9XCI3MCVcIiBsYWJlbD1cIkxpbmsgVG8gRXZpZGVuY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCB0eXBlPVwidXJsXCIgbmFtZT1cIkV2aWRlbmNlIExpbmsgM1wiIGNvbXBvbmVudD17SW5wdXR9IHdpZHRoPVwiNzAlXCIgbGFiZWw9XCJMaW5rIFRvIEV2aWRlbmNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L0NvbGxhcHNlPlxuICAgICAgICAgICAgICAgIDwvSW5wdXRzQ29udGFpbmVyPlxuICAgICAgICAgICAgICA8L01vZGFsLkJvZHk+XG4gICAgICAgICAgICAgIDxNb2RhbC5Gb290ZXI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgZGlzYWJsZWQ9e2lzU3VibWl0dGluZ30gb25DbGljaz17Y2xvc2VNb2RhbH0+XG4gICAgICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17aXNTdWJtaXR0aW5nfT5cbiAgICAgICAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L01vZGFsLkZvb3Rlcj5cbiAgICAgICAgICAgIDwvRm9ybUNvbnRhaW5lcj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvRm9ybWlrPlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENyZWF0ZVRvcGljRm9ybVxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IEZvcm0gfSBmcm9tICdmb3JtaWsnXG4vLyBpbXBvcnQgeyBGaUFycm93RG93bkNpcmNsZSB9IGZyb20gJ3JlYWN0LWljb25zL2ZpJ1xuXG5leHBvcnQgY29uc3QgRmxleERpdiA9IHN0eWxlZCgnZGl2JylgIFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG5gXG5cbmV4cG9ydCBjb25zdCBGb3JtQ29udGFpbmVyID0gc3R5bGVkKEZvcm0pYFxuICAvKiBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgKi9cbiAgbWFyZ2luLXRvcDogMWVtO1xuICAgaDIge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICB9XG4gXG5gXG5cbmV4cG9ydCBjb25zdCBBcnJvdyA9IHN0eWxlZCgnc3BhbicpYFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNmb3JtOiAkeyhwcm9wcykgPT4gYHJvdGF0ZSgke3Byb3BzLnJvdGF0ZX1kZWcpYH07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuYFxuXG5leHBvcnQgY29uc3QgSW5wdXRzQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWBcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgTGVmdCA9IHN0eWxlZCgnZGl2JylgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDUwJTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIH1cbmBcbmV4cG9ydCBjb25zdCBSaWdodCA9IHN0eWxlZCgnZGl2JylgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDUwJTtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBTdXBwbGVtZW50YWxJbmZvcm1hdGlvbiA9IHN0eWxlZCgnc2VjdGlvbicpYFxuXG5gXG5cbmV4cG9ydCBjb25zdCBJbnB1dFdyYXBwZXIgPSBzdHlsZWQoJ2RpdicpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuYFxuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWBcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBoZWlnaHQ6IDkwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xuICAvKiBib3gtc2hhZG93OiB2YXIoLS1tLXByaW1hcnktYm94LXNoYWRvdyk7ICovXG4gIGJveC1zaGFkb3c6ICA1cHggNXB4IDVweCAtM3B4ICMwMDAwMDA7XG5cbiAgaDEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy1ib3R0b206IC41ZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICB9XG4gIFxuICAvKiBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2MDBweCkge1xuICAgICB3aWR0aDogODB2dztcbiAgfVxuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAgd2lkdGg6IDkwdnc7XG4gIH1cblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgIHdpZHRoOiAxMDB2dztcbiAgfSAqL1xuIGBcblxuZXhwb3J0IGNvbnN0IExpbmUgPSBzdHlsZWQoJ2hyJylgIFxuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDJlbSAxLjNlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ4LDQ4LDUwKTtcbiAgaGVpZ2h0OiAuNXB4O1xuICBib3JkZXI6IG5vbmU7XG5gXG5cbmV4cG9ydCBjb25zdCBVcGxvYWRNZWRpYUNvbnRhaW5lciA9IHN0eWxlZCgnZGl2JylgIFxuICBtYXJnaW4tbGVmdDogMS4zZW07XG4gIHBhZGRpbmc6IC41ZW07XG4gIGJvcmRlci1yYWRpdXM6IC41ZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJveC1zaGFkb3c6ICA1cHggNXB4IDVweCAtM3B4ICNBQUFBQUE7XG4gIGJhY2tncm91bmQ6ICNFNUU1RTU7XG5cbjtcblxuYFxuXG5leHBvcnQgY29uc3QgU2VjdGlvbkRlc2NyaXB0aW9uID0gc3R5bGVkKCdoMicpYFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC8qIGRpc3BsYXk6IG5vbmU7ICovXG4gIH1cblxuYFxuXG5leHBvcnQgY29uc3QgTW9iaWxlT25seUxpbmUgPSBzdHlsZWQoJ2hyJylgIFxuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDJlbSAxLjNlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ4LDQ4LDUwKTtcbiAgaGVpZ2h0OiAuNXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGRpc3BsYXk6IG5vbmU7XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5gXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7XG4gIE9HRmF2aWNvbixcbn0gZnJvbSAnLi9TdHlsZS9pbmRleCdcbmltcG9ydCBJc0xvYWRpbmdIT0MgZnJvbSAnLi4vLi4vLi4vLi4vaG9jcy9Jc0xvYWRpbmdIT0MnXG5cbmNvbnN0IExpbmtUeXBlSWNvbiA9ICh7XG4gIGNvbnRlbnRVcmwsIG1ldGFEYXRhLCBzZXRJc0xvYWRpbmcsXG59KSA9PiB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SXNMb2FkaW5nKHRydWUpXG4gIH0sIFtjb250ZW50VXJsXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChtZXRhRGF0YSkgc2V0SXNMb2FkaW5nKGZhbHNlKVxuICB9LCBbbWV0YURhdGFdKVxuXG4gIHJldHVybiAoXG4gICAgPE9HRmF2aWNvbiBzcmM9e21ldGFEYXRhPy5mYXZpY29ufSBhbHQ9XCJcIiAvPlxuICApXG59XG5leHBvcnQgZGVmYXVsdCBJc0xvYWRpbmdIT0MoTGlua1R5cGVJY29uLCAnMzBweCcsIHRydWUpXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgT0dGYXZpY29uID0gc3R5bGVkKCdpbWcnKWAgXG4gIGJvcmRlci1yYWRpdXM6IDF2dztcbiAgd2lkdGg6IDEuNXZ3O1xuXG5gIiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LXByb3BzLW5vLXNwcmVhZGluZyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGFiZWwsIFVwbG9hZElucHV0IH0gZnJvbSAnLi9TdHlsZSdcblxuY29uc3QgVXBsb2FkSW1hZ2VJbnB1dCA9ICh7XG4gIGZpZWxkLCBvbkNoYW5nZSwgaWNvbiwgZmlsZVR5cGUsIGRpc2FibGVkLFxufSkgPT4gKFxuICA8TGFiZWw+XG4gICAge2ljb259XG4gICAgPFVwbG9hZElucHV0IGRhdGEtZmlsZXR5cGU9e2ZpbGVUeXBlfSB0eXBlPVwiZmlsZVwiIHsuLi5maWVsZH0gaWQ9e2ZpZWxkLm5hbWV9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gZGlzYWJsZWQ9e2Rpc2FibGVkfSAvPlxuICA8L0xhYmVsPlxuXG4pXG5cbmV4cG9ydCBkZWZhdWx0IFVwbG9hZEltYWdlSW5wdXRcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBMYWJlbCA9IHN0eWxlZCgnbGFiZWwnKWAgXG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwJTtcbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IFVwbG9hZElucHV0ID0gc3R5bGVkKCdpbnB1dCcpYCBcbiAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgbGVmdDogLTk5OTk5cmVtO1xuYFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJ2Zvcm1paydcblxuaW1wb3J0IFVwbG9hZEZpbGVJbnB1dCBmcm9tICcuLi9VcGxvYWRJbWFnZUlucHV0L0luZGV4J1xuaW1wb3J0IHsgVmlkZW9TdmcsIEltYWdlU3ZnIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3Zncy9zdmdzJ1xuXG5pbXBvcnQgdXNlT25GaWxlQ2hhbmdlSGFuZGxlciBmcm9tICcuLi8uLi9ob29rcy91c2VPbkZpbGVDaGFuZ2VIYW5kbGVyJ1xuXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuL1N0eWxlL2luZGV4J1xuXG5jb25zdCBVcGxvYWRNZWRpYUNvbnRhaW5lciA9ICh7XG4gIHNldEZpZWxkVmFsdWUsIGltZ0ZpbGUsIHZpZGVvRmlsZSwgc2V0SW1nRmlsZSwgc2V0VmlkZW9GaWxlLFxufSkgPT4ge1xuICBjb25zdCBvbkZpbGVDaGFuZ2UgPSB1c2VPbkZpbGVDaGFuZ2VIYW5kbGVyKClcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPEZpZWxkXG4gICAgICAgIGZpbGVUeXBlPVwiZmlsZVwiXG4gICAgICAgIG5hbWU9XCJ0b3BpY0ltYWdlXCJcbiAgICAgICAgZGlzYWJsZWQ9e0Jvb2xlYW4odmlkZW9GaWxlKX1cbiAgICAgICAgZmlsZT17aW1nRmlsZX1cbiAgICAgICAgY29tcG9uZW50PXtVcGxvYWRGaWxlSW5wdXR9XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25GaWxlQ2hhbmdlKGUsIHNldEZpZWxkVmFsdWUsIHNldEltZ0ZpbGUpfVxuICAgICAgICBpY29uPXs8SW1hZ2VTdmcgLz59XG4gICAgICAvPlxuICAgICAgPEZpZWxkXG4gICAgICAgIGZpbGVUeXBlPVwiZmlsZVwiXG4gICAgICAgIG5hbWU9XCJ0b3BpY1ZpZGVvXCJcbiAgICAgICAgZGlzYWJsZWQ9e0Jvb2xlYW4oaW1nRmlsZSl9XG4gICAgICAgIGZpbGU9e3ZpZGVvRmlsZX1cbiAgICAgICAgY29tcG9uZW50PXtVcGxvYWRGaWxlSW5wdXR9XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25GaWxlQ2hhbmdlKGUsIHNldEZpZWxkVmFsdWUsIHNldFZpZGVvRmlsZSl9XG4gICAgICAgIGljb249ezxWaWRlb1N2ZyAvPn1cbiAgICAgIC8+XG4gICAgPC9Db250YWluZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXBsb2FkTWVkaWFDb250YWluZXJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpYCBcbiAgbWFyZ2luLWxlZnQ6IDEuM2VtO1xuICBwYWRkaW5nOiAuNWVtO1xuICBib3JkZXItcmFkaXVzOiAuNWVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3gtc2hhZG93OiAgNXB4IDVweCA1cHggLTNweCAjQUFBQUFBO1xuICBiYWNrZ3JvdW5kOiAjRTVFNUU1O1xuXG5gXG4iLCJpbXBvcnQgeyB5b3VUdWJlVXJsVmFsaWRhdG9yLCB0d2l0dGVyVXJsVmFsaWR0b3IgfSBmcm9tICcuLi8uLi8uLi9nZW5lcmljL3JlZ2V4L3VybFZhbGlkYXRvcnMnXG5cbmV4cG9ydCBkZWZhdWx0ICh1cmwpID0+IHtcbiAgY29uc3QgeXRVcmwgPSB1cmwuc2VhcmNoKHlvdVR1YmVVcmxWYWxpZGF0b3IpID09PSAtMSA/IG51bGwgOiAneXRVcmwnXG4gIGNvbnN0IHR3ZWV0VXJsID0gdXJsLnNlYXJjaCh0d2l0dGVyVXJsVmFsaWR0b3IpID09PSAtMSA/IG51bGwgOiAndHdlZXRVcmwnXG4gIHJldHVybiB5dFVybCB8fCB0d2VldFVybFxufVxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY29uc3QgW2NvbnRlbnRVcmwsIHNldENvbnRlbnRVcmxdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgZ2V0Q29udGVudFVybE9uQmx1ciA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XG4gICAgc2V0Q29udGVudFVybChlLmN1cnJlbnRUYXJnZXQudmFsdWUpXG4gIH0sIFtdKVxuXG4gIHJldHVybiB7IGNvbnRlbnRVcmwsIGdldENvbnRlbnRVcmxPbkJsdXIgfVxufVxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5J1xuXG5pbXBvcnQgdG9waWNBY3Rpb25zIGZyb20gJy4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvdG9waWNzL2luZGV4J1xuaW1wb3J0IHVzZUJpbmREaXNwYXRjaCBmcm9tICcuLi8uLi9ob29rcy9yZWR1eC91c2VCaW5kRGlzcGF0Y2gnXG5cbmltcG9ydCBjaGVja0xpbmtUeXBlIGZyb20gJy4vY2hlY2tMaW5rVHlwZSdcblxuLy8gY29uc3QgcmVzb2x2ZUFmdGVyMTUwMG1zID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMTUwMCkpXG5cbmV4cG9ydCBkZWZhdWx0IChtZXRhRGF0YSkgPT4ge1xuICBjb25zdCB7IGNyZWF0ZVRvcGljLCB1cGxvYWRUb3BpY01lZGlhIH0gPSB1c2VCaW5kRGlzcGF0Y2godG9waWNBY3Rpb25zKVxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3IoKHMpID0+IHMuc2Vzc2lvbi5jdXJyZW50VXNlcilcblxuICByZXR1cm4gdXNlQ2FsbGJhY2soKHZhbHVlcywgeyBzZXRTdWJtaXR0aW5nLCByZXNldEZvcm0gfSwgY29udGVudCkgPT4ge1xuICAgIGNvbnN0IGVMaW5rcyA9IE9iamVjdC5lbnRyaWVzKHZhbHVlcykubWFwKChbaywgdl0pID0+IChrLmluY2x1ZGVzKCdFdmlkZW5jZScpID8gdiA6IG51bGwpKS5maWx0ZXIoQm9vbGVhbilcbiAgICBjb25zdCBsaW5rVHlwZSA9IGNoZWNrTGlua1R5cGUodmFsdWVzLmNvbnRlbnRVcmwpXG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIC4uLnZhbHVlcyxcbiAgICAgIGRlc2NyaXB0aW9uOiBjb250ZW50LFxuICAgICAgY3JlYXRlZEJ5OiB1c2VyLnVzZXJuYW1lLFxuICAgICAgdXNlcklkOiB1c2VyLmlkLFxuICAgICAgZXZpZGVuY2VMaW5rczogZUxpbmtzLFxuICAgICAgW2xpbmtUeXBlXTogdmFsdWVzLmNvbnRlbnRVcmwsXG4gICAgICB0aHVtYkltZ1VybDogbWV0YURhdGEub2dJbWFnZT8udXJsLFxuICAgIH1cbiAgICBpZiAodmFsdWVzLmZpbGUgaW5zdGFuY2VvZiBGaWxlKSB7XG4gICAgICBjb25zdCBbZmlsZVR5cGUsIGZpbGVGb3JtYXRdID0gdmFsdWVzLmZpbGUudHlwZS5zcGxpdCgnLycpXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ltYWdlJywgdmFsdWVzLmZpbGUpXG4gICAgICB1cGxvYWRUb3BpY01lZGlhKGZvcm1EYXRhLCBmaWxlVHlwZSwgZmlsZUZvcm1hdCwgZGF0YSlcbiAgICB9IGVsc2Uge1xuICAgICAgdG9hc3QucHJvbWlzZShcbiAgICAgICAgY3JlYXRlVG9waWMoZGF0YSksXG4gICAgICAgIHtcbiAgICAgICAgICBwZW5kaW5nOiAnQ3JlYXRpbmcgVG9waWMuLi4nLFxuICAgICAgICAgIHN1Y2Nlc3M6ICdUb3BpYyBTdWNjZXNzZnVsbHkgQ3JlYXRlZCEnLFxuICAgICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgICByZW5kZXIoeyBkYXRhOiBlcnJvckRhdGEgfSkge1xuICAgICAgICAgICAgICBjb25zdCB7IHJlc3BvbnNlIH0gPSBlcnJvckRhdGFcbiAgICAgICAgICAgICAgY29uc3QgeyBkYXRhOiByZXNwb25zZURhdGEgfSA9IHJlc3BvbnNlXG4gICAgICAgICAgICAgIHJldHVybiBgJHtyZXNwb25zZURhdGEubXNnfSDwn6SvIGBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIClcbiAgICB9XG4gICAgc2V0U3VibWl0dGluZyhmYWxzZSlcbiAgICByZXNldEZvcm0oe30pXG4gIH0sIFttZXRhRGF0YV0pXG59XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB1c2VDYWxsYmFjaygoZSwgc2V0RmllbGRWYWx1ZSwgc2V0U3RhdGVWYWx1ZSkgPT4ge1xuICBzZXRGaWVsZFZhbHVlKGUudGFyZ2V0LmRhdGFzZXQuZmlsZXR5cGUsIGUuY3VycmVudFRhcmdldC5maWxlc1swXSlcbiAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICBjb25zdCBjdXJyRmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdXG4gIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XG4gICAgc2V0U3RhdGVWYWx1ZShyZWFkZXIucmVzdWx0KVxuICB9XG4gIHJlYWRlci5yZWFkQXNEYXRhVVJMKGN1cnJGaWxlKVxufSwgW10pXG4iXSwibmFtZXMiOlsidCIsInYiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNldFRpbWVvdXQiLCJiaW5kIiwieW91VHViZVVybFZhbGlkYXRvciIsIlJlZ0V4cCIsInR3aXR0ZXJVcmxWYWxpZHRvciIsIlJlYWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJ1c2VMb2NhdGlvbiIsIk1vZGFsIiwiRm9ybWlrIiwiQnV0dG9uIiwiVXNlckluZm9IZWFkZXIiLCJBbmltYXRlZENoZWNrbWFyayIsIlJpY2hUZXh0RWRpdG9yIiwidXNlU2V0SW5uZXJIdG1sIiwidXNlR2V0U3RhdGVFZmZlY3QiLCJ1c2VIYW5kbGVTdWJtaXQiLCJnZXRUaW1lU2luY2UiLCJjaGVja1RveGljaXR5IiwiRm9ybUNvbnRhaW5lciIsIklucHV0V3JhcHBlciIsIkNvbnRhaW5lciIsIkRlc2NyaXB0aW9uIiwiVG94aWNpdHlDb250cm9scyIsInV1aWRSZWdFeCIsIkNyZWF0ZUNvbW1lbnRGb3JtIiwibW9kYWxQcm9wcyIsImRlc2NSZWYiLCJyYXdIVE1MIiwiY29udGVudCIsInJhd1RleHQiLCJyaWNoVGV4dEVkaXRvckRhdGEiLCJzZXRSaWNoVGV4dEVkaXRvckRhdGEiLCJ0b3hpY2l0eVNjb3JlIiwic2V0VG94aWNpdHlTY29yZSIsInBhdGhuYW1lIiwiY29udGVudElkIiwibWF0Y2giLCJzdWJ0b3BpY0lkIiwiY29uc29sZSIsImxvZyIsImNvbXBTdGF0ZSIsImhhbmRsZVN1Ym1pdCIsImh0bWxDb250ZW50IiwicG9zaXRpdmUiLCJuZWdhdGl2ZSIsIm5ldXRyYWwiLCJlcnJvcnMiLCJsZW5ndGgiLCJpc1N1Ym1pdHRpbmciLCJjcmVhdGVkQnlJY29uU3JjIiwiY3JlYXRlZEJ5IiwidGltZSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwidGhlbiIsInJlcyIsImRhdGEiLCJTRVZFUkVfVE9YSUNJVFkiLCJ0b0ZpeGVkIiwic3R5bGVkIiwiRm9ybSIsInVzZU1lbW8iLCJ1c2VTZWxlY3RvciIsImZpbmRDb21tZW50Q29udGVudCIsImNvbW1lbnQiLCJpZCIsInZpc2l0ZWQiLCJTZXQiLCJxIiwiY3Vyck5vZGUiLCJzaGlmdCIsImFkZCIsImNoaWxkcmVuIiwiZm9yRWFjaCIsImNoaWxkIiwiaGFzIiwicHVzaCIsInRvcGljSWQiLCJ1c2VyIiwicyIsInNlc3Npb24iLCJjdXJyZW50VXNlciIsInRvcGljIiwidG9waWNzIiwibGlzdCIsImZpbmQiLCJjb21tZW50cyIsImMiLCJyb290UGFyZW50Q29tbWVudElkIiwiY29tbWVudElkIiwidHJpYnVuYWxDb21tZW50IiwidHJpYnVuYWxDb21tZW50cyIsImNyZWF0ZWRBdCIsImNvbW1lbnRDb250ZW50IiwicmVwbHlUeXBlIiwiZGVzY3JpcHRpb24iLCJ1c2VybmFtZSIsInR5cGUiLCJ1c2VDYWxsYmFjayIsInRvYXN0IiwidXNlQmluZERpc3BhdGNoIiwiY29tbWVudEFjdGlvbnMiLCJ0cmlidW5hbENvbW1lbnRBY3Rpb25zIiwiZGVsYXkiLCJ1c2VEZXRlY3RDdXJyZW50UGFnZSIsImlzVHJpYnVuYWxDb21tZW50IiwiaXNPblRyaWJ1bmFsUGFnZSIsInRyaWJ1bmFsQ29tbWVudFVuZGVyUmV2aWV3SWQiLCJpc1BhcmVudFRyaWJ1bmFsQ29tbWVudFVuZGVyUmV2aWV3IiwicGFyZW50SWQiLCJyb290SWQiLCJjcmVhdGVDb21tZW50IiwiY3JlYXRlVHJpYnVuYWxDb21tZW50IiwidmFsdWVzIiwic2V0U3VibWl0dGluZyIsInJlc2V0Rm9ybSIsInByb21pc2UiLCJhbGwiLCJwZW5kaW5nIiwic3VjY2VzcyIsInJlbmRlciIsImljb24iLCJlcnJvciIsInRveGljaXR5U3RhdHVzIiwibWVtZUZsYWciLCJJbnB1dCIsImNvbG9yIiwidGV4dCIsIkJvb2xlYW4iLCJtYXJnaW5MZWZ0Iiwid2lkdGgiLCJoZWlnaHQiLCJrZXlmcmFtZXMiLCJzcGxhc2giLCJwcmltYXJ5IiwicHJvcHMiLCJFcnJvck1lc3NhZ2UiLCJGYWRlIiwiU3R5bGVkU2VsZWN0IiwiTGFiZWwiLCJFcnJvciIsIlNlbGVjdCIsImZpZWxkIiwiZm9ybSIsInBsYWNlaG9sZGVyIiwic2V0RmllbGRWYWx1ZSIsInNldEZpZWxkVG91Y2hlZCIsIm9wZW4iLCJpc09wZW4iLCJ2YWx1ZSIsInNldFZhbHVlIiwibWV0YURhdGEiLCJnZXRGaWVsZE1ldGEiLCJuYW1lIiwic2hvd0Vycm9yIiwidG91Y2hlZCIsImVudW1zIiwic3RhdGUiLCJ0b3BpY0NhdGVnb3JpZXMiLCJvbkNoYW5nZSIsImUiLCJzZXRGaWVsZCIsInRhcmdldCIsIm1hcCIsInZhbCIsIk92ZXJsYXkiLCJ1c2VFZmZlY3QiLCJSZWFjdFF1aWxsIiwiRW1vamlCdXR0b24iLCJFbW9qaUNvbnRhaW5lciIsInNldENvbnRlbnQiLCJpc0hpZGRlbiIsInNldElzSGlkZGVuIiwibW9kdWxlcyIsInRvb2xiYXIiLCJjb250YWluZXIiLCJoYW5kbGVPbkNoYW5nZSIsImN1cnJDb250ZW50IiwiZGVsdGEiLCJzb3VyY2UiLCJlZGl0b3IiLCJnZXRIVE1MIiwiZ2V0Q29udGVudHMiLCJnZXRUZXh0IiwicGlja2VyUmVmIiwicXVpbGxSZWYiLCJlbW9qaVBpY2tlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImN1cnJlbnQiLCJjdXJzb3JQb3NpdGlvbiIsImdldFNlbGVjdGlvbiIsImluZGV4IiwiZ2V0TGVuZ3RoIiwiaW5zZXJ0VGV4dCIsImRldGFpbCIsImVtb2ppIiwic2V0U2VsZWN0aW9uIiwiZm9ybWF0cyIsInByZXYiLCJDdXN0b21CdXR0b24iLCJDdXN0b21Ub29sYmFyIiwianVzdGlmeUNvbnRlbnQiLCJkaXYiLCJDb2xsYXBzZSIsIkZpZWxkIiwidXNlR2V0TGlua01ldGFEYXRhT25CbHVyIiwidWlBY3Rpb25zIiwidG9waWNBY3Rpb25zIiwiVGhlbWVUb29sdGlwIiwiVXBsb2FkTWVkaWFDb250YWluZXIiLCJEaXNwbGF5TWVkaWEiLCJMZWZ0IiwiUmlnaHQiLCJGbGV4RGl2IiwiSW5wdXRzQ29udGFpbmVyIiwiQXJyb3ciLCJMaW5lIiwiRG93bkFycm93Q2lyY2xlU3ZnIiwiQ3JlYXRlU3ViVG9waWNGb3JtIiwic2V0T3BlbiIsImltZ0ZpbGUiLCJzZXRJbWdGaWxlIiwidmlkZW9GaWxlIiwic2V0VmlkZW9GaWxlIiwicm90YXRlIiwic2V0Um90YXRlIiwiZ2V0TGlua01ldGFEYXRhT25CbHVyIiwiZ2V0VG9waWMiLCJjbG9zZU1vZGFsIiwidGl0bGUiLCJwYXJhbXMiLCJ3aGl0ZVNwYWNlIiwiU3VwcGxlbWVudGFsSW5mb3JtYXRpb24iLCJ1cmwiLCJ5dFVybCIsInNlYXJjaCIsInR3ZWV0VXJsIiwiZ2V0TGlua01ldGFEYXRhIiwic2V0TWV0YURhdGEiLCJjdXJyZW50VGFyZ2V0Iiwic3VidG9waWNBY3Rpb25zIiwiY2hlY2tMaW5rVHlwZSIsImNyZWF0ZVN1YlRvcGljIiwidXBsb2FkVG9waWNNZWRpYSIsImVMaW5rcyIsIk9iamVjdCIsImVudHJpZXMiLCJrIiwiaW5jbHVkZXMiLCJmaWx0ZXIiLCJsaW5rVHlwZSIsImNvbnRlbnRVcmwiLCJ1c2VySWQiLCJldmlkZW5jZUxpbmtzIiwib2dJbWFnZSIsImZpbGUiLCJGaWxlIiwic3BsaXQiLCJmaWxlVHlwZSIsImZpbGVGb3JtYXQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwidXNlQ29uZmlnRm9ybUVycm9ycyIsIkxpbmtUeXBlSWNvbiIsIlNlY3Rpb25EZXNjcmlwdGlvbiIsIk1vYmlsZU9ubHlMaW5lIiwiSU5JVF9UT1BJQ19GT1JNX1ZBTFVFUyIsIlZBTElEQVRJT05TIiwiUkVRVUlSRUQiLCJzdW1tYXJ5IiwiTUlOX0xFTkdUSCIsImNhdGVnb3J5IiwiQ3JlYXRlVG9waWNGb3JtIiwicmljaFRleHRFZGl0b3JDb250ZW50Iiwic2V0UmljaFRleHRFZGl0b3JDb250ZW50IiwidmFsaWRhdG9yIiwiZ2V0Q29udGVudFVybE9uQmx1ciIsIk9HRmF2aWNvbiIsIklzTG9hZGluZ0hPQyIsInNldElzTG9hZGluZyIsImZhdmljb24iLCJVcGxvYWRJbnB1dCIsIlVwbG9hZEltYWdlSW5wdXQiLCJkaXNhYmxlZCIsIlVwbG9hZEZpbGVJbnB1dCIsIlZpZGVvU3ZnIiwiSW1hZ2VTdmciLCJ1c2VPbkZpbGVDaGFuZ2VIYW5kbGVyIiwib25GaWxlQ2hhbmdlIiwic2V0Q29udGVudFVybCIsImNyZWF0ZVRvcGljIiwiZXJyb3JEYXRhIiwicmVzcG9uc2UiLCJyZXNwb25zZURhdGEiLCJtc2ciLCJzZXRTdGF0ZVZhbHVlIiwiZGF0YXNldCIsImZpbGV0eXBlIiwiZmlsZXMiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwiY3VyckZpbGUiLCJvbmxvYWRlbmQiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIl0sInNvdXJjZVJvb3QiOiIifQ==