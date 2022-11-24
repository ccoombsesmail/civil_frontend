"use strict";
(self["webpackChunkcivil"] = self["webpackChunkcivil"] || []).push([["comment-form"],{

/***/ "./src/api/v1/subtopics/subtopics_api_util.js":
/*!****************************************************!*\
  !*** ./src/api/v1/subtopics/subtopics_api_util.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSubTopic": () => (/* binding */ createSubTopic),
/* harmony export */   "getAllSubTopics": () => (/* binding */ getAllSubTopics),
/* harmony export */   "getSubTopic": () => (/* binding */ getSubTopic)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _endpoints_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../endpoints/endpoints */ "./src/api/endpoints/endpoints.js");


var createSubTopic = function createSubTopic(subTopicData) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().post("".concat(_endpoints_endpoints__WEBPACK_IMPORTED_MODULE_1__.BACKEND_DEV, "/subtopics"), subTopicData);
};
var getAllSubTopics = function getAllSubTopics(topicId) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().get("".concat(_endpoints_endpoints__WEBPACK_IMPORTED_MODULE_1__.BACKEND_DEV, "/subtopics?topicId=").concat(topicId));
};
var getSubTopic = function getSubTopic(subTopicId) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().get("".concat(_endpoints_endpoints__WEBPACK_IMPORTED_MODULE_1__.BACKEND_DEV, "/subtopics/").concat(subTopicId));
};

/***/ }),

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

/***/ }),

/***/ "./src/redux/actions/subtopics/index.js":
/*!**********************************************!*\
  !*** ./src/redux/actions/subtopics/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSubTopic": () => (/* binding */ createSubTopic),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getAllSubTopics": () => (/* binding */ getAllSubTopics),
/* harmony export */   "getSubTopic": () => (/* binding */ getSubTopic)
/* harmony export */ });
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _ui_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/index */ "./src/redux/actions/ui/index.js");
/* harmony import */ var _reducers_subtopics_subTopicsReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../reducers/subtopics/subTopicsReducer */ "./src/redux/reducers/subtopics/subTopicsReducer.js");
/* harmony import */ var _api_v1_subtopics_subtopics_api_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../api/v1/subtopics/subtopics_api_util */ "./src/api/v1/subtopics/subtopics_api_util.js");
/* harmony import */ var _utils_errorFormatter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/errorFormatter */ "./src/redux/utils/errorFormatter.js");
/* eslint-disable max-len */
// action creator is just a function that dispatches an action





var getAllTopicsActionCreator = function getAllTopicsActionCreator(subtopics) {
  return {
    type: _reducers_subtopics_subTopicsReducer__WEBPACK_IMPORTED_MODULE_2__.GET_ALL_SUB_TOPICS,
    payload: subtopics
  };
};
var addTopicActionCreator = function addTopicActionCreator(subTopicData) {
  return {
    type: _reducers_subtopics_subTopicsReducer__WEBPACK_IMPORTED_MODULE_2__.ADD_SUB_TOPIC,
    payload: subTopicData
  };
};
var createSubTopic = function createSubTopic(topicData) {
  return function (dispatch) {
    return _api_v1_subtopics_subtopics_api_util__WEBPACK_IMPORTED_MODULE_3__.createSubTopic(topicData).then(function (res) {
      return dispatch(addTopicActionCreator(res.data));
    }).then(function () {
      return dispatch((0,_ui_index__WEBPACK_IMPORTED_MODULE_1__.closeModal)());
    })["catch"](function (error) {
      return react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.error((0,_utils_errorFormatter__WEBPACK_IMPORTED_MODULE_4__.errorFormatter)(error));
    });
  };
};
var getAllSubTopics = function getAllSubTopics(topicId) {
  return function (dispatch) {
    return _api_v1_subtopics_subtopics_api_util__WEBPACK_IMPORTED_MODULE_3__.getAllSubTopics(topicId).then(function (res) {
      return dispatch(getAllTopicsActionCreator(res.data));
    })["catch"](function (error) {
      return react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.error((0,_utils_errorFormatter__WEBPACK_IMPORTED_MODULE_4__.errorFormatter)(error));
    });
  };
};
var getSubTopic = function getSubTopic(subTopicId) {
  return function (dispatch) {
    return _api_v1_subtopics_subtopics_api_util__WEBPACK_IMPORTED_MODULE_3__.getSubTopic(subTopicId).then(function (res) {
      return dispatch(addTopicActionCreator(res.data));
    })["catch"](function (error) {
      return react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.error((0,_utils_errorFormatter__WEBPACK_IMPORTED_MODULE_4__.errorFormatter)(error));
    });
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  createSubTopic: createSubTopic,
  getAllSubTopics: getAllSubTopics,
  getSubTopic: getSubTopic
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzBLLHFFQUFjLENBQUNuSixLQUFLLENBQUMsQ0FBQztJQUFBLEVBQUM7RUFBQTtBQUFBO0FBRWhELElBQU1oSSxXQUFXLEdBQUcsU0FBZEEsV0FBVyxDQUFJQyxVQUFVO0VBQUEsT0FBSyxVQUFDd1IsUUFBUTtJQUFBLE9BQUtQLDZFQUE0QixDQUFDalIsVUFBVSxDQUFDLENBQzlGNEQsSUFBSSxDQUFDLFVBQUNDLEdBQUc7TUFBQSxPQUFLMk4sUUFBUSxDQUFDRixxQkFBcUIsQ0FBQ3pOLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDLENBQUM7SUFBQSxFQUFDLFNBQ25ELENBQUMsVUFBQ2lFLEtBQUs7TUFBQSxPQUFLdkIsdURBQVcsQ0FBQzBLLHFFQUFjLENBQUNuSixLQUFLLENBQUMsQ0FBQztJQUFBLEVBQUM7RUFBQTtBQUFBO0FBRXZELGlFQUFlO0VBQ2J0SSxjQUFjLEVBQWRBLGNBQWM7RUFDZEcsZUFBZSxFQUFmQSxlQUFlO0VBQ2ZHLFdBQVcsRUFBWEE7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvYXBpL3YxL3N1YnRvcGljcy9zdWJ0b3BpY3NfYXBpX3V0aWwuanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvZ2VuZXJpYy9kZWxheS5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9nZW5lcmljL3JlZ2V4L3VybFZhbGlkYXRvcnMuanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvQ29tbWVudEZvcm0vSW5kZXguanN4Iiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL0NvbW1lbnRGb3JtL1N0eWxlL2luZGV4LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL0NvbW1lbnRGb3JtL2hvb2tzL3VzZUdldFN0YXRlRWZmZWN0LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL0NvbW1lbnRGb3JtL2hvb2tzL3VzZUhhbmRsZVN1Ym1pdC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9Db21tb25Db21wb25lbnRzL0FuaW1hdGVkQ2hlY2ttYXJrL0luZGV4LmpzeCIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9Db21tb25Db21wb25lbnRzL0FuaW1hdGVkQ2hlY2ttYXJrL1N0eWxlL2luZGV4LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL0NvbW1vbkNvbXBvbmVudHMvT3ZlcmxheS9zdHlsZS5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9Db21tb25Db21wb25lbnRzL1JpY2hUZXh0RWRpdG9yL0luZGV4LmpzeCIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9Db21tb25Db21wb25lbnRzL1JpY2hUZXh0RWRpdG9yL1N0eWxlL2luZGV4LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL1N1YlRvcGljRm9ybS9JbmRleC5qc3giLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvU3ViVG9waWNGb3JtL1N0eWxlL2luZGV4LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL1N1YlRvcGljRm9ybS9ob29rcy9jaGVja0xpbmtUeXBlLmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL1N1YlRvcGljRm9ybS9ob29rcy91c2VHZXRMaW5rTWV0YURhdGFPbkJsdXIuanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvU3ViVG9waWNGb3JtL2hvb2tzL3VzZUhhbmRsZVN1Ym1pdC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9Ub3BpY0Zvcm0vY29tcG9uZW50cy9VcGxvYWRJbWFnZUlucHV0L0luZGV4LmpzeCIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9Ub3BpY0Zvcm0vY29tcG9uZW50cy9VcGxvYWRJbWFnZUlucHV0L1N0eWxlL2luZGV4LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL1RvcGljRm9ybS9jb21wb25lbnRzL1VwbG9hZE1lZGlhL0luZGV4LmpzeCIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9Ub3BpY0Zvcm0vY29tcG9uZW50cy9VcGxvYWRNZWRpYS9TdHlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9Ub3BpY0Zvcm0vaG9va3MvdXNlT25GaWxlQ2hhbmdlSGFuZGxlci5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9yZWR1eC9hY3Rpb25zL3N1YnRvcGljcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyBCQUNLRU5EX0RFViB9IGZyb20gJy4uLy4uL2VuZHBvaW50cy9lbmRwb2ludHMnXG5cbmV4cG9ydCBjb25zdCBjcmVhdGVTdWJUb3BpYyA9IChzdWJUb3BpY0RhdGEpID0+IGF4aW9zLnBvc3QoYCR7QkFDS0VORF9ERVZ9L3N1YnRvcGljc2AsIHN1YlRvcGljRGF0YSlcblxuZXhwb3J0IGNvbnN0IGdldEFsbFN1YlRvcGljcyA9ICh0b3BpY0lkKSA9PiBheGlvcy5nZXQoYCR7QkFDS0VORF9ERVZ9L3N1YnRvcGljcz90b3BpY0lkPSR7dG9waWNJZH1gKVxuXG5leHBvcnQgY29uc3QgZ2V0U3ViVG9waWMgPSAoc3ViVG9waWNJZCkgPT4gYXhpb3MuZ2V0KGAke0JBQ0tFTkRfREVWfS9zdWJ0b3BpY3MvJHtzdWJUb3BpY0lkfWApXG4iLCJleHBvcnQgZGVmYXVsdCAodCwgdikgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICBpZiAodiA9PT0gdHJ1ZSkgcmVqZWN0KClcbiAgc2V0VGltZW91dChyZXNvbHZlLmJpbmQobnVsbCwgdiksIHQpXG59KVxuIiwiZXhwb3J0IGNvbnN0IHlvdVR1YmVVcmxWYWxpZGF0b3IgPSBuZXcgUmVnRXhwKC9eKCg/Omh0dHBzPzopP1xcL1xcLyk/KCg/Ond3d3xtKVxcLik/KCg/OnlvdXR1YmVcXC5jb218eW91dHUuYmUpKShcXC8oPzpbXFx3XFwtXStcXD92PXxlbWJlZFxcL3x2XFwvKT8pKFtcXHdcXC1dKykoXFxTKyk/JC9nbSlcbmV4cG9ydCBjb25zdCB0d2l0dGVyVXJsVmFsaWR0b3IgPSBuZXcgUmVnRXhwKC9odHRwKD86cyk/OlxcL1xcLyg/Ond3dyk/dHdpdHRlclxcLmNvbVxcLyhbYS16QS1aMC05X10rKS9nbSlcbiIsIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtYm9vdHN0cmFwL01vZGFsJ1xuaW1wb3J0IHsgRm9ybWlrIH0gZnJvbSAnZm9ybWlrJ1xuXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL0NvbW1vbkNvbXBvbmVudHMvQnV0dG9uL0luZGV4J1xuaW1wb3J0IFVzZXJJbmZvSGVhZGVyIGZyb20gJy4uL0NvbW1vbkNvbXBvbmVudHMvVXNlckluZm9IZWFkZXIvSW5kZXgnXG5pbXBvcnQgQW5pbWF0ZWRDaGVja21hcmsgZnJvbSAnLi4vQ29tbW9uQ29tcG9uZW50cy9BbmltYXRlZENoZWNrbWFyay9JbmRleCdcbmltcG9ydCBSaWNoVGV4dEVkaXRvciBmcm9tICcuLi9Db21tb25Db21wb25lbnRzL1JpY2hUZXh0RWRpdG9yL0luZGV4J1xuXG5pbXBvcnQgdXNlU2V0SW5uZXJIdG1sIGZyb20gJy4uL2hvb2tzL3VzZVNldElubmVySHRtbCdcbmltcG9ydCB1c2VHZXRTdGF0ZUVmZmVjdCBmcm9tICcuL2hvb2tzL3VzZUdldFN0YXRlRWZmZWN0J1xuaW1wb3J0IHVzZUhhbmRsZVN1Ym1pdCBmcm9tICcuL2hvb2tzL3VzZUhhbmRsZVN1Ym1pdCdcblxuaW1wb3J0IHsgZ2V0VGltZVNpbmNlIH0gZnJvbSAnLi4vLi4vZ2VuZXJpYy9zdHJpbmcvZGF0ZUZvcm1hdHRlcidcbmltcG9ydCB7IGNoZWNrVG94aWNpdHkgfSBmcm9tICcuLi8uLi9hcGkvdjEvY29tbWVudHMvY29tbWVudHNfYXBpX3V0aWwnXG5cbmltcG9ydCB7XG4gIEZvcm1Db250YWluZXIsIElucHV0V3JhcHBlciwgQ29udGFpbmVyLCBEZXNjcmlwdGlvbiwgVG94aWNpdHlDb250cm9scyxcbn0gZnJvbSAnLi9TdHlsZSdcblxuY29uc3QgdXVpZFJlZ0V4ID0gbmV3IFJlZ0V4cCgvXFxiWzAtOWEtZl17OH1cXGItWzAtOWEtZl17NH0tWzAtOWEtZl17NH0tWzAtOWEtZl17NH0tXFxiWzAtOWEtZl17MTJ9XFxiL2cpXG5cbmNvbnN0IENyZWF0ZUNvbW1lbnRGb3JtID0gKHsgbW9kYWxQcm9wcyB9KSA9PiB7XG4gIGNvbnN0IGRlc2NSZWYgPSB1c2VSZWYobnVsbClcbiAgY29uc3QgW3JpY2hUZXh0RWRpdG9yRGF0YSwgc2V0UmljaFRleHRFZGl0b3JEYXRhXSA9IHVzZVN0YXRlKHtcbiAgICByYXdIVE1MOiAnJyxcbiAgICBjb250ZW50OiAnJyxcbiAgICByYXdUZXh0OiAnJyxcbiAgfSlcbiAgY29uc3QgW3RveGljaXR5U2NvcmUsIHNldFRveGljaXR5U2NvcmVdID0gdXNlU3RhdGUobnVsbClcblxuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VMb2NhdGlvbigpXG4gIGNvbnN0IGNvbnRlbnRJZCA9IHBhdGhuYW1lLm1hdGNoKHV1aWRSZWdFeClbMF1cbiAgY29uc3Qgc3VidG9waWNJZCA9IHBhdGhuYW1lLm1hdGNoKHV1aWRSZWdFeClbMV1cbiAgY29uc3QgY29tcFN0YXRlID0gdXNlR2V0U3RhdGVFZmZlY3QoY29udGVudElkLCBzdWJ0b3BpY0lkLCBtb2RhbFByb3BzKVxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSB1c2VIYW5kbGVTdWJtaXQoY29tcFN0YXRlLCByaWNoVGV4dEVkaXRvckRhdGEucmF3SFRNTCwgcmljaFRleHRFZGl0b3JEYXRhLnJhd1RleHQsIG1vZGFsUHJvcHMsIHN1YnRvcGljSWQgfHwgY29udGVudElkLCBjb250ZW50SWQpXG4gIHVzZVNldElubmVySHRtbChkZXNjUmVmLCBjb21wU3RhdGUuaHRtbENvbnRlbnQpXG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPEZvcm1pa1xuICAgICAgICBpbml0aWFsVmFsdWVzPXt7XG4gICAgICAgICAgY29udGVudDogJycsXG4gICAgICAgICAgcG9zaXRpdmU6ICcnLFxuICAgICAgICAgIG5lZ2F0aXZlOiAnJyxcbiAgICAgICAgICBuZXV0cmFsOiAnJyxcbiAgICAgICAgfX1cbiAgICAgICAgdmFsaWRhdGU9eygpID0+IHtcbiAgICAgICAgICBjb25zdCBlcnJvcnMgPSB7fVxuICAgICAgICAgIGlmIChyaWNoVGV4dEVkaXRvckRhdGEuY29udGVudC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGVycm9ycy5jb250ZW50ID0gJ1dyaXRlIFNvbWV0aGluZydcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGVycm9yc1xuICAgICAgICB9fVxuICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxuICAgICAgPlxuICAgICAgICB7KHsgaXNTdWJtaXR0aW5nIH0pID0+IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cbiAgICAgICAgICAgICAgPE1vZGFsLlRpdGxlPldyaXRlIFlvdXIgUmVwbHk8L01vZGFsLlRpdGxlPlxuICAgICAgICAgICAgPC9Nb2RhbC5IZWFkZXI+XG4gICAgICAgICAgICA8Rm9ybUNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPE1vZGFsLkJvZHk+XG4gICAgICAgICAgICAgICAgPFVzZXJJbmZvSGVhZGVyXG4gICAgICAgICAgICAgICAgICBpY29uU3JjPXtjb21wU3RhdGUuY3JlYXRlZEJ5SWNvblNyY31cbiAgICAgICAgICAgICAgICAgIHVzZXJuYW1lPXtjb21wU3RhdGUuY3JlYXRlZEJ5fVxuICAgICAgICAgICAgICAgICAgdGltZT17Z2V0VGltZVNpbmNlKGNvbXBTdGF0ZS50aW1lKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxEZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIHJlZj17ZGVzY1JlZn0gLz5cbiAgICAgICAgICAgICAgICA8L0Rlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICAgIDxJbnB1dFdyYXBwZXI+XG4gICAgICAgICAgICAgICAgICA8UmljaFRleHRFZGl0b3JcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD17cmljaFRleHRFZGl0b3JEYXRhLmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgICAgIHNldENvbnRlbnQ9e3NldFJpY2hUZXh0RWRpdG9yRGF0YX1cbiAgICAgICAgICAgICAgICAgICAgc2V0VG94aWNpdHlTY29yZT17c2V0VG94aWNpdHlTY29yZX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9JbnB1dFdyYXBwZXI+XG4gICAgICAgICAgICAgIDwvTW9kYWwuQm9keT5cbiAgICAgICAgICAgICAgPE1vZGFsLkZvb3Rlcj5cbiAgICAgICAgICAgICAgICA8VG94aWNpdHlDb250cm9scz5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNoZWNrVG94aWNpdHkoeyBjb250ZW50OiByaWNoVGV4dEVkaXRvckRhdGEucmF3VGV4dCB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VG94aWNpdHlTY29yZShyZXMuZGF0YS5TRVZFUkVfVE9YSUNJVFkudG9GaXhlZCgyKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIENoZWNrIFRveGljaXR5IFNjb3JlXG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPEFuaW1hdGVkQ2hlY2ttYXJrIHRveGljaXR5U2NvcmU9e3RveGljaXR5U2NvcmV9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cD57IHRveGljaXR5U2NvcmUgJiYgYFlvdXIgdG94aWNpdHkgc2NvcmUgaXMgJHt0b3hpY2l0eVNjb3JlfWB9PC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9Ub3hpY2l0eUNvbnRyb2xzPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9PlxuICAgICAgICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvTW9kYWwuRm9vdGVyPlxuICAgICAgICAgICAgPC9Gb3JtQ29udGFpbmVyPlxuXG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L0Zvcm1paz5cbiAgICA8L0NvbnRhaW5lcj5cblxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENyZWF0ZUNvbW1lbnRGb3JtXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgRm9ybSB9IGZyb20gJ2Zvcm1paydcblxuZXhwb3J0IGNvbnN0IEZvcm1Db250YWluZXIgPSBzdHlsZWQoRm9ybSlgXG4gIG1hcmdpbi10b3A6IDA7XG4gIGJvcmRlci1yYWRpdXM6IC41ZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuYFxuXG5leHBvcnQgY29uc3QgRGVzY3JpcHRpb24gPSBzdHlsZWQoJ3AnKWAgXG4gIHdpZHRoOiA5MCU7XG4gIHBhZGRpbmc6IC41ZW0gMDtcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xuICBmb250LXNpemU6IC44NWVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogYmxhY2s7XG5gXG5cbmV4cG9ydCBjb25zdCBJbnB1dFdyYXBwZXIgPSBzdHlsZWQoJ2RpdicpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBzZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgd2lkdGg6IDMwdnc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICAgIHBhZGRpbmc6IC4yZW0gLjVlbTtcbiAgICBiYWNrZ3JvdW5kOiAjZTBlNWVjO1xuICAgIGJvcmRlci1yYWRpdXM6IC40ZW07XG4gICAgYm94LXNoYWRvdzpcbiAgIC03cHggLTdweCAyMHB4IDBweCAjZmZmOSxcbiAgIC00cHggLTRweCA1cHggMHB4ICNmZmY5LFxuICAgN3B4IDdweCAyMHB4IDBweCAjMDAwMixcbiAgIDRweCA0cHggNXB4IDBweCAjMDAwMSxcbiAgIGluc2V0IDBweCAwcHggMHB4IDBweCAjZmZmOSxcbiAgIGluc2V0IDBweCAwcHggMHB4IDBweCAjMDAwMSxcbiAgIGluc2V0IDBweCAwcHggMHB4IDBweCAjZmZmOSxcbiAgIGluc2V0IDBweCAwcHggMHB4IDBweCAjMDAwMTtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoMSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLWJvdHRvbTogLjVlbTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gIH1cbiBgXG5cbmV4cG9ydCBjb25zdCBUb3hpY2l0eUNvbnRyb2xzID0gc3R5bGVkKCdkaXYnKWBcbiAgZmxleC1ncm93OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICA+IGRpdiB7XG4gICAgbWFyZ2luLWxlZnQ6IDF2dztcbiAgfVxuXG4gIHAge1xuICAgIG1hcmdpbjogMCAxZW07XG4gICAgY29sb3I6ICM5NzljYjA7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC4xdnc7ICBcbiAgfVxuXG5gXG4iLCJpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5jb25zdCBmaW5kQ29tbWVudENvbnRlbnQgPSAoY29tbWVudCwgaWQpID0+IHtcbiAgY29uc3QgdmlzaXRlZCA9IG5ldyBTZXQoKVxuICBjb25zdCBxID0gW2NvbW1lbnRdXG4gIHdoaWxlIChxLmxlbmd0aCAhPT0gMCkge1xuICAgIGNvbnN0IGN1cnJOb2RlID0gcS5zaGlmdCgpXG4gICAgdmlzaXRlZC5hZGQoY3Vyck5vZGUuZGF0YS5pZClcbiAgICBpZiAoY3Vyck5vZGUuZGF0YS5pZCA9PT0gaWQpIHJldHVybiBjdXJyTm9kZS5kYXRhLmNvbnRlbnRcbiAgICBjdXJyTm9kZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgaWYgKCF2aXNpdGVkLmhhcyhjaGlsZC5kYXRhLmlkKSkgcS5wdXNoKGNoaWxkKVxuICAgIH0pXG4gIH1cbiAgcmV0dXJuICcnXG59XG5cbmV4cG9ydCBkZWZhdWx0ICh0b3BpY0lkLCBzdWJ0b3BpY0lkLCBtb2RhbFByb3BzKSA9PiB7XG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3RvcigocykgPT4gcy5zZXNzaW9uLmN1cnJlbnRVc2VyKVxuICBjb25zdCB0b3BpYyA9IHVzZVNlbGVjdG9yKChzKSA9PiBzLnRvcGljcy5saXN0KT8uZmluZCgodCkgPT4gdC5pZCA9PT0gdG9waWNJZClcbiAgY29uc3QgY29tbWVudCA9IHVzZVNlbGVjdG9yKChzKSA9PiBzLmNvbW1lbnRzLmxpc3QpPy5maW5kKFxuICAgIChjKSA9PiBjLmRhdGE/LmlkID09PSBtb2RhbFByb3BzPy5yb290UGFyZW50Q29tbWVudElkIHx8IG1vZGFsUHJvcHM/LmNvbW1lbnRJZCxcbiAgKVxuICBjb25zdCB0cmlidW5hbENvbW1lbnQgPSB1c2VTZWxlY3RvcigocykgPT4gcy50cmlidW5hbENvbW1lbnRzLmxpc3QpPy5maW5kKFxuICAgIChjKSA9PiBjLmRhdGE/LmlkID09PSBtb2RhbFByb3BzPy5yb290UGFyZW50Q29tbWVudElkLFxuICApXG5cbiAgY29uc3QgeyBjcmVhdGVkQnksIGNyZWF0ZWRCeUljb25TcmMsIGNyZWF0ZWRBdCB9ID0gY29tbWVudD8uZGF0YSB8fCB0cmlidW5hbENvbW1lbnQ/LmRhdGEgfHwge31cbiAgcmV0dXJuIHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IGNvbW1lbnRDb250ZW50ID0gbW9kYWxQcm9wcz8ucmVwbHlUeXBlICE9PSAnUkVQTFlfRlJPTV9UT1BJQydcbiAgICAgID8gZmluZENvbW1lbnRDb250ZW50KGNvbW1lbnQgfHwgdHJpYnVuYWxDb21tZW50LCBtb2RhbFByb3BzPy5jb21tZW50SWQpIDogdG9waWM/LmRlc2NyaXB0aW9uXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1YnRvcGljSWQsXG4gICAgICBjcmVhdGVkQnlJY29uU3JjOiBjcmVhdGVkQnlJY29uU3JjIHx8IHRvcGljPy5jcmVhdGVkQnlJY29uU3JjLFxuICAgICAgdXNlcm5hbWU6IHVzZXI/LnVzZXJuYW1lLFxuICAgICAgY3JlYXRlZEJ5OiBjcmVhdGVkQnkgfHwgdG9waWM/LmNyZWF0ZWRCeSB8fCB0cmlidW5hbENvbW1lbnQ/LmNyZWF0ZWRCeSxcbiAgICAgIHRpbWU6IGNyZWF0ZWRBdCB8fCB0b3BpYz8uY3JlYXRlZEF0LFxuICAgICAgaHRtbENvbnRlbnQ6IGNvbW1lbnRDb250ZW50LFxuICAgICAgcm9vdFBhcmVudENvbW1lbnRJZDogbW9kYWxQcm9wcz8ucm9vdFBhcmVudENvbW1lbnRJZCB8fCBudWxsLFxuICAgICAgdHlwZTogbW9kYWxQcm9wcz8ucmVwbHlUeXBlLFxuICAgIH1cbiAgfSwgW3RvcGljLCB1c2VyLCBjb21tZW50LCBzdWJ0b3BpY0lkLCBtb2RhbFByb3BzXSlcbn1cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5J1xuXG5pbXBvcnQgdXNlQmluZERpc3BhdGNoIGZyb20gJy4uLy4uL2hvb2tzL3JlZHV4L3VzZUJpbmREaXNwYXRjaCdcbmltcG9ydCBjb21tZW50QWN0aW9ucyBmcm9tICcuLi8uLi8uLi9yZWR1eC9hY3Rpb25zL2NvbW1lbnRzJ1xuaW1wb3J0IHRyaWJ1bmFsQ29tbWVudEFjdGlvbnMgZnJvbSAnLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy90cmlidW5hbF9jb21tZW50cydcblxuaW1wb3J0IHsgY2hlY2tUb3hpY2l0eSB9IGZyb20gJy4uLy4uLy4uL2FwaS92MS9jb21tZW50cy9jb21tZW50c19hcGlfdXRpbCdcbmltcG9ydCBkZWxheSBmcm9tICcuLi8uLi8uLi9nZW5lcmljL2RlbGF5J1xuaW1wb3J0IHVzZURldGVjdEN1cnJlbnRQYWdlIGZyb20gJy4uLy4uL2hvb2tzL3JvdXRpbmcvdXNlRGV0ZWN0Q3VycmVudFBhZ2UnXG5cbmV4cG9ydCBkZWZhdWx0IChjb21wU3RhdGUsIGNvbnRlbnQsIHJhd1RleHQsIG1vZGFsUHJvcHMsIGNvbnRlbnRJZCwgdG9waWNJZCkgPT4ge1xuICBjb25zdCB7IGlzT25UcmlidW5hbFBhZ2U6IGlzVHJpYnVuYWxDb21tZW50IH0gPSB1c2VEZXRlY3RDdXJyZW50UGFnZSgpXG5cbiAgY29uc3Qge1xuICAgIHRyaWJ1bmFsQ29tbWVudFVuZGVyUmV2aWV3SWQsXG4gICAgY29tbWVudElkLFxuICB9ID0gbW9kYWxQcm9wcyB8fCB7fVxuXG4gIGNvbnN0IGlzUGFyZW50VHJpYnVuYWxDb21tZW50VW5kZXJSZXZpZXcgPSBpc1RyaWJ1bmFsQ29tbWVudFxuICAmJiB0cmlidW5hbENvbW1lbnRVbmRlclJldmlld0lkID09PSBjb21tZW50SWRcblxuICBjb25zdCBwYXJlbnRJZCA9IGlzUGFyZW50VHJpYnVuYWxDb21tZW50VW5kZXJSZXZpZXcgPyBudWxsIDogY29tbWVudElkIHx8IG51bGxcbiAgY29uc3Qgcm9vdElkID0gaXNQYXJlbnRUcmlidW5hbENvbW1lbnRVbmRlclJldmlldyA/IG51bGwgOiBjb21wU3RhdGUucm9vdFBhcmVudENvbW1lbnRJZFxuXG4gIGNvbnN0IHtcbiAgICBjcmVhdGVDb21tZW50LFxuICAgIGNyZWF0ZVRyaWJ1bmFsQ29tbWVudCxcbiAgfSA9IHVzZUJpbmREaXNwYXRjaChjb21tZW50QWN0aW9ucywgdHJpYnVuYWxDb21tZW50QWN0aW9ucylcblxuICByZXR1cm4gdXNlQ2FsbGJhY2soKHZhbHVlcywgeyBzZXRTdWJtaXR0aW5nLCByZXNldEZvcm0gfSkgPT4ge1xuICAgIHRvYXN0LnByb21pc2UoXG4gICAgICBQcm9taXNlLmFsbChbZGVsYXkoMTUwMCksIGNoZWNrVG94aWNpdHkoeyBjb250ZW50OiByYXdUZXh0IH0pXSksXG4gICAgICB7XG4gICAgICAgIHBlbmRpbmc6ICdBbmFseXppbmcgQ29tbWVudC4uLicsXG4gICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICByZW5kZXIoeyBkYXRhIH0pIHtcbiAgICAgICAgICAgIGNvbnN0IHRveGljaXR5U2NvcmUgPSBkYXRhWzFdLmRhdGEuU0VWRVJFX1RPWElDSVRZXG4gICAgICAgICAgICBpZiAodG94aWNpdHlTY29yZSA8IDAuNikgcmV0dXJuICdUaGFua3MgRm9yIEJlaW5nIENpdmlsISdcbiAgICAgICAgICAgIGlmICh0b3hpY2l0eVNjb3JlID49IDAuNiAmJiB0b3hpY2l0eVNjb3JlIDw9IDAuOSkgcmV0dXJuICdUaGFua3MgZm9yIGJlaW5nIHNlbWktY2l2aWwuIE1heWJlIHNheSB0aGluZ3MgYSBiaXQgbmljZXInXG4gICAgICAgICAgICByZXR1cm4gJ1lvdSBhcmUgYmVpbmcgdG94aWMgOiggXFxuIFlvdXIgY29tbWVudCB3aWxsIGJlIGZsYWdnZWQnXG4gICAgICAgICAgfSxcbiAgICAgICAgICAvLyBvdGhlciBvcHRpb25zXG4gICAgICAgICAgaWNvbjogJ/Cfn6InLFxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogJ1Byb21pc2UgcmVqZWN0ZWQg8J+krycsXG4gICAgICB9LFxuICAgICkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgY29uc3QgdG94aWNpdHlTY29yZSA9IGRhdGFbMV0uZGF0YS5TRVZFUkVfVE9YSUNJVFlcbiAgICAgIGxldCB0b3hpY2l0eVN0YXR1c1xuICAgICAgaWYgKHRveGljaXR5U2NvcmUgPCAwLjYpIHRveGljaXR5U3RhdHVzID0gJ05PVF9UT1hJQydcbiAgICAgIGlmICh0b3hpY2l0eVNjb3JlID4gMC45KSB0b3hpY2l0eVN0YXR1cyA9ICdUT1hJQydcbiAgICAgIGNvbnN0IGNvbW1lbnQgPSB7XG4gICAgICAgIC4uLnZhbHVlcyxcbiAgICAgICAgY29udGVudCxcbiAgICAgICAgbWVtZUZsYWc6IGZhbHNlLFxuICAgICAgICBwYXJlbnRJZCxcbiAgICAgICAgY29udGVudElkLFxuICAgICAgICBzdWJ0b3BpY0lkOiBjb250ZW50SWQsXG4gICAgICAgIHRvcGljSWQsXG4gICAgICAgIGNyZWF0ZWRCeTogY29tcFN0YXRlLnVzZXJuYW1lLFxuICAgICAgICByb290SWQsXG4gICAgICAgIHJhd1RleHQsXG4gICAgICAgIHRveGljaXR5U3RhdHVzLFxuICAgICAgfVxuICAgICAgcmV0dXJuIGlzVHJpYnVuYWxDb21tZW50ID8gY3JlYXRlVHJpYnVuYWxDb21tZW50KGNvbW1lbnQpIDogY3JlYXRlQ29tbWVudChjb21tZW50KVxuICAgIH0pXG5cbiAgICBzZXRTdWJtaXR0aW5nKGZhbHNlKVxuICAgIHJlc2V0Rm9ybSh7fSlcbiAgfSwgW1xuICAgIGNvbXBTdGF0ZSxcbiAgICBjb250ZW50LFxuICAgIHJhd1RleHQsXG4gICAgbW9kYWxQcm9wcy50cmlidW5hbENvbW1lbnRVbmRlclJldmlld0lkLFxuICAgIG1vZGFsUHJvcHMuY29tbWVudElkLFxuICAgIGNvbnRlbnRJZCxcbiAgXSlcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2xhYmVsLWhhcy1hc3NvY2lhdGVkLWNvbnRyb2wgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgQ29udGFpbmVyLCBJbnB1dCB9IGZyb20gJy4vU3R5bGUvaW5kZXgnXG5cbmNvbnN0IEFuaW1hdGVkQ2hlY2ttYXJrID0gKHsgdG94aWNpdHlTY29yZSB9KSA9PiB7XG4gIGxldCBjb2xvclxuICBsZXQgdGV4dFxuICBpZiAodG94aWNpdHlTY29yZSA8IDAuNikgeyBjb2xvciA9ICdncmVlbic7IHRleHQgPSAnR3JlYXQhJyB9XG4gIGlmICh0b3hpY2l0eVNjb3JlID49IDAuNiAmJiB0b3hpY2l0eVNjb3JlIDw9IDAuOSkgeyBjb2xvciA9ICd2YXIoLS1tLWRhbmdlci1jb2xvciknOyB0ZXh0ID0gJ1lvdSBhcmUgT0sgYnV0IGdldHRpbmcgY2xvc2UnIH1cbiAgaWYgKHRveGljaXR5U2NvcmUgPiAwLjkpIHsgY29sb3IgPSAncmVkJzsgdGV4dCA9ICdZb3UgYXJlIGJlaW5nIHRveGljJyB9XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxDb250YWluZXIgY29sb3I9e2NvbG9yfT5cbiAgICAgICAgPElucHV0IHJlYWRPbmx5IGRpc2FibGVkIGNoZWNrZWQ9e0Jvb2xlYW4odG94aWNpdHlTY29yZSl9IHR5cGU9XCJjaGVja2JveFwiIC8+XG4gICAgICAgIDxsYWJlbCAvPlxuICAgICAgICA8c3ZnIHdpZHRoPVwiMTVcIiBoZWlnaHQ9XCIxNFwiIHZpZXdCb3g9XCIwIDAgMTUgMTRcIiBmaWxsPVwibm9uZVwiPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNMiA4LjM2MzY0TDYuMjMwNzcgMTJMMTMgMlwiIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgICB7dG94aWNpdHlTY29yZSAmJiA8c3BhbiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMC41dncnIH19Pnt0ZXh0fTwvc3Bhbj59XG4gICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2ZXJzaW9uPVwiMS4xXCIgc3R5bGU9e3sgd2lkdGg6IDAsIGhlaWdodDogMCB9fT5cbiAgICAgICAgPGRlZnM+XG4gICAgICAgICAgPGZpbHRlciBpZD1cImdvb1wiPlxuICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIGluPVwiU291cmNlR3JhcGhpY1wiIHN0ZERldmlhdGlvbj1cIjRcIiByZXN1bHQ9XCJibHVyXCIgLz5cbiAgICAgICAgICAgIDxmZUNvbG9yTWF0cml4IGluPVwiYmx1clwiIG1vZGU9XCJtYXRyaXhcIiB2YWx1ZXM9XCIxIDAgMCAwIDAgIDAgMSAwIDAgMCAgMCAwIDEgMCAwICAwIDAgMCAyMiAtN1wiIHJlc3VsdD1cImdvb1wiIC8+XG4gICAgICAgICAgICA8ZmVCbGVuZCBpbj1cIlNvdXJjZUdyYXBoaWNcIiBpbjI9XCJnb29cIiAvPlxuICAgICAgICAgIDwvZmlsdGVyPlxuICAgICAgICA8L2RlZnM+XG4gICAgICA8L3N2Zz5cbiAgICA8Lz5cbiAgKVxufVxuZXhwb3J0IGRlZmF1bHQgQW5pbWF0ZWRDaGVja21hcmtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbmltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbi8vIGNvbnN0IHByaW1hcnkgPSAnIzRkMjcxYTg4J1xuXG5jb25zdCBzcGxhc2ggPSAocHJpbWFyeSkgPT4ga2V5ZnJhbWVzYFxuICA0MCUge1xuICAgIGJhY2tncm91bmQ6ICR7cHJpbWFyeX07XG4gICAgYm94LXNoYWRvdzogMCAtMThweCAwIC04cHggJHtwcmltYXJ5fSwgMTZweCAtOHB4IDAgLThweCAke3ByaW1hcnl9LCAxNnB4IDhweCAwIC04cHggJHtwcmltYXJ5fSwgMCAxOHB4IDAgLThweCAke3ByaW1hcnl9LCAtMTZweCA4cHggMCAtOHB4ICR7cHJpbWFyeX0sIC0xNnB4IC04cHggMCAtOHB4ICR7cHJpbWFyeX07XG4gIH1cblxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kOiAke3ByaW1hcnl9O1xuICAgIGJveC1zaGFkb3c6IDAgLTM2cHggMCAtMTBweCB0cmFuc3BhcmVudCwgMzJweCAtMTZweCAwIC0xMHB4IHRyYW5zcGFyZW50LCAzMnB4IDE2cHggMCAtMTBweCB0cmFuc3BhcmVudCwgMCAzNnB4IDAgLTEwcHggdHJhbnNwYXJlbnQsIC0zMnB4IDE2cHggMCAtMTBweCB0cmFuc3BhcmVudCwgLTMycHggLTE2cHggMCAtMTBweCB0cmFuc3BhcmVudDtcbiAgfVxuICBcblxuYFxuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLmNvbG9yfTtcbiAgLyogdHJhbnNmb3JtOiBzY2FsZSgzKTsgKi9cbiAgc3BhbiB7XG4gICAgbWFyZ2luLWxlZnQ6IC41dnc7XG4gIH1cbiAgaW5wdXQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMjRweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2JmYmZjMDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgei1pbmRleDogOTk5OTk5OTk5OTtcblxuICB9XG5cbiAgbGFiZWwge1xuICAgIHotaW5kZXg6IDk5OTk5OTk5OTtcbiAgICB3aWR0aDogMjRweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIC13ZWJraXQtZmlsdGVyOiB1cmwoI2dvbyk7XG4gICAgZmlsdGVyOiB1cmwoI2dvbyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XG4gICAgLyogcG9pbnRlci1ldmVudHM6IG5vbmU7ICovXG4gIH1cblxuICBzdmcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDVweDtcbiAgICBsZWZ0OiA0cHg7XG4gICAgei1pbmRleDogOTk5OTk5OTk5OTk7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgcGF0aCB7XG4gICAgICBzdHJva2U6IHdoaXRlO1xuICAgICAgc3Ryb2tlLXdpZHRoOiAzO1xuICAgICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xuICAgICAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDtcbiAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDE5O1xuICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDE5O1xuICAgICAgdHJhbnNpdGlvbjogc3Ryb2tlLWRhc2hvZmZzZXQgLjNzIGVhc2U7XG4gICAgICB0cmFuc2l0aW9uLWRlbGF5OiAuMnM7XG4gICAgfVxuICB9XG5cbiAgaW5wdXQ6Y2hlY2tlZCB7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG4gIGlucHV0OmNoZWNrZWQgKyBsYWJlbCB7XG4gICAgICBhbmltYXRpb246ICR7KHByb3BzKSA9PiBzcGxhc2gocHJvcHMuY29sb3IpfSAuNnMgZWFzZSBmb3J3YXJkcztcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICR7KHByb3BzKSA9PiBwcm9wcy5jb2xvcn07XG5cbiAgICAgICsgc3ZnIHBhdGgge1xuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMFxuICAgICAgfVxuICB9XG5cbmBcblxuZXhwb3J0IGNvbnN0IElucHV0ID0gc3R5bGVkKCdpbnB1dCcpYFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW46IDA7XG4gICAgJjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiAwO1xuICAgIH1cbmBcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBPdmVybGF5ID0gc3R5bGVkKCdkaXYnKWBcbiAgei1pbmRleDogOTk5OTk5O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgb3BhY2l0eTogMC4xO1xuYFxuIiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tdGhpcy1pbi1zZmMgKi9cbi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2NvbnRyb2wtaGFzLWFzc29jaWF0ZWQtbGFiZWwgKi9cbmltcG9ydCBSZWFjdCwge1xuICB1c2VDYWxsYmFjaywgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmLFxufSBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdFF1aWxsIGZyb20gJ3JlYWN0LXF1aWxsJ1xuXG5pbXBvcnQgJ3JlYWN0LXF1aWxsL2Rpc3QvcXVpbGwuc25vdy5jc3MnXG5cbmltcG9ydCB7IENvbnRhaW5lciwgRW1vamlCdXR0b24sIEVtb2ppQ29udGFpbmVyIH0gZnJvbSAnLi9TdHlsZSdcbmltcG9ydCB7IE92ZXJsYXkgfSBmcm9tICcuLi9PdmVybGF5L3N0eWxlJ1xuXG5jb25zdCBSaWNoVGV4dEVkaXRvciA9ICh7XG4gIGNvbnRlbnQsIHNldENvbnRlbnQsIHNldFRveGljaXR5U2NvcmUsXG59KSA9PiB7XG4gIGNvbnN0IFtpc0hpZGRlbiwgc2V0SXNIaWRkZW5dID0gdXNlU3RhdGUodHJ1ZSlcblxuICBjb25zdCBtb2R1bGVzID0ge1xuICAgIHRvb2xiYXI6IHtcbiAgICAgIGNvbnRhaW5lcjogJyN0b29sYmFyJyxcbiAgICB9LFxuICB9XG5cbiAgY29uc3QgaGFuZGxlT25DaGFuZ2UgPSB1c2VDYWxsYmFjaygoY3VyckNvbnRlbnQsIGRlbHRhLCBzb3VyY2UsIGVkaXRvcikgPT4ge1xuICAgIHNldENvbnRlbnQoe1xuICAgICAgcmF3SFRNTDogZWRpdG9yLmdldEhUTUwoKSxcbiAgICAgIGNvbnRlbnQ6IGVkaXRvci5nZXRDb250ZW50cygpLFxuICAgICAgcmF3VGV4dDogZWRpdG9yLmdldFRleHQoKSxcbiAgICB9KVxuICAgIGlmIChzZXRUb3hpY2l0eVNjb3JlKSBzZXRUb3hpY2l0eVNjb3JlKG51bGwpXG4gIH0sIFtdKVxuXG4gIGNvbnN0IHBpY2tlclJlZiA9IHVzZVJlZihudWxsKVxuICBjb25zdCBxdWlsbFJlZiA9IHVzZVJlZihudWxsKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHBpY2tlclJlZikge1xuICAgICAgY29uc3QgZW1vamlQaWNrZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd1bmljb2RlLWVtb2ppLXBpY2tlcicpXG4gICAgICBlbW9qaVBpY2tlci5hZGRFdmVudExpc3RlbmVyKCdlbW9qaS1waWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChxdWlsbFJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgY29uc3QgeyBlZGl0b3IgfSA9IHF1aWxsUmVmLmN1cnJlbnRcbiAgICAgICAgICBjb25zdCBjdXJzb3JQb3NpdGlvbiA9IGVkaXRvci5nZXRTZWxlY3Rpb24oKT8uaW5kZXggfHwgZWRpdG9yLmdldExlbmd0aCgpIC0gMVxuICAgICAgICAgIGVkaXRvci5pbnNlcnRUZXh0KGN1cnNvclBvc2l0aW9uLCBgJHtldmVudC5kZXRhaWwuZW1vaml9YClcbiAgICAgICAgICBlZGl0b3Iuc2V0U2VsZWN0aW9uKGN1cnNvclBvc2l0aW9uICsgMilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH0sIFtwaWNrZXJSZWYsIHF1aWxsUmVmXSlcblxuICBjb25zdCBmb3JtYXRzID0gWydib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnLCAnc3RyaWtlJywgJ2Jsb2NrcXVvdGUnLCAnY2xlYW4nXVxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwidGV4dC1lZGl0b3JcIj5cbiAgICAgIDxPdmVybGF5IGhpZGRlbj17aXNIaWRkZW59IG9uQ2xpY2s9eygpID0+IHNldElzSGlkZGVuKChwcmV2KSA9PiAhcHJldil9IC8+XG4gICAgICA8Q3VzdG9tVG9vbGJhciBzZXRJc0hpZGRlbj17c2V0SXNIaWRkZW59IHBpY2tlclJlZj17cGlja2VyUmVmfSBpc0hpZGRlbj17aXNIaWRkZW59IC8+XG4gICAgICA8UmVhY3RRdWlsbFxuICAgICAgICByZWY9e3F1aWxsUmVmfVxuICAgICAgICB0aGVtZT1cInNub3dcIlxuICAgICAgICB2YWx1ZT17Y29udGVudH1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxuICAgICAgICBtb2R1bGVzPXttb2R1bGVzfVxuICAgICAgICBmb3JtYXRzPXtmb3JtYXRzfVxuICAgICAgICBwbGFjZWhvbGRlcj1cIlNheSBzb21ldGhpbmcuLi5cIlxuICAgICAgLz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuXG5jb25zdCBDdXN0b21CdXR0b24gPSAoeyBpc0hpZGRlbiwgcGlja2VyUmVmLCBzZXRJc0hpZGRlbiB9KSA9PiAoXG4gIDw+XG4gICAgPHNwYW5cbiAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzSGlkZGVuKChwcmV2KSA9PiAhcHJldil9XG4gICAgICBvbktleURvd249eygpID0+IHNldElzSGlkZGVuKChwcmV2KSA9PiAhcHJldil9XG4gICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgIHRhYkluZGV4PXswfVxuICAgID5cbiAgICAgIPCfmYJcbiAgICA8L3NwYW4+XG4gICAgPEVtb2ppQ29udGFpbmVyIGhpZGRlbj17aXNIaWRkZW59PlxuICAgICAgPHVuaWNvZGUtZW1vamktcGlja2VyIHJlZj17cGlja2VyUmVmfSB2ZXJzaW9uPVwiMTQuMFwiIC8+XG4gICAgPC9FbW9qaUNvbnRhaW5lcj5cbiAgPC8+XG4pXG5cbmNvbnN0IEN1c3RvbVRvb2xiYXIgPSAoeyBzZXRJc0hpZGRlbiwgaXNIaWRkZW4sIHBpY2tlclJlZiB9KSA9PiAoXG4gIDxkaXYgaWQ9XCJ0b29sYmFyXCIgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nIH19PlxuICAgIDxkaXY+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJxbC1ib2xkXCIgLz5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cInFsLWl0YWxpY1wiIC8+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJxbC11bmRlcmxpbmVcIiAvPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwicWwtc3RyaWtlXCIgLz5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cInFsLWJsb2NrcXVvdGVcIiAvPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwicWwtY2xlYW5cIiAvPlxuXG4gICAgPC9kaXY+XG5cbiAgICA8RW1vamlCdXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cInFsLWluc2VydEVtb2ppXCI+XG4gICAgICA8Q3VzdG9tQnV0dG9uIHBpY2tlclJlZj17cGlja2VyUmVmfSBpc0hpZGRlbj17aXNIaWRkZW59IHNldElzSGlkZGVuPXtzZXRJc0hpZGRlbn0gLz5cbiAgICA8L0Vtb2ppQnV0dG9uPlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgUmljaFRleHRFZGl0b3JcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogLjVlbTtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICBtaW4td2lkdGg6IDkyJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAucWwtc25vdy5xbC10b29sYmFyOmFmdGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5xbC10b29sYmFyIHtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAuNWVtO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAuNWVtO1xuICB9XG5cbiAgLnFsLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogLjVlbTtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogLjVlbTtcbiAgfVxuXG4gICN0b29sYmFyIHtcbiAgICBidXR0b246YWZ0ZXIge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuYFxuXG5leHBvcnQgY29uc3QgRW1vamlCdXR0b24gPSBzdHlsZWQoJ2J1dHRvbicpYFxuICBwb3NpdGlvbjogcmVsYXRpdmUgO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICY6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuYFxuXG5leHBvcnQgY29uc3QgRW1vamlDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpYCBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgei1pbmRleDogOTk5OTk5OTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTkwJSwgLTkwJSkgc2NhbGUoLjgpO1xuYFxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1ib290c3RyYXAvTW9kYWwnXG5pbXBvcnQgeyBDb2xsYXBzZSwgRmFkZSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcblxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IEZvcm1paywgRmllbGQgfSBmcm9tICdmb3JtaWsnXG5cbmltcG9ydCB1c2VCaW5kRGlzcGF0Y2ggZnJvbSAnLi4vaG9va3MvcmVkdXgvdXNlQmluZERpc3BhdGNoJ1xuaW1wb3J0IHVzZUhhbmRsZVN1Ym1pdCBmcm9tICcuL2hvb2tzL3VzZUhhbmRsZVN1Ym1pdCdcbmltcG9ydCB1c2VHZXRMaW5rTWV0YURhdGFPbkJsdXIgZnJvbSAnLi9ob29rcy91c2VHZXRMaW5rTWV0YURhdGFPbkJsdXInXG5cbmltcG9ydCBJbnB1dCBmcm9tICcuLi9Db21tb25Db21wb25lbnRzL0Zvcm0vSW5wdXQvSW5kZXgnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL0NvbW1vbkNvbXBvbmVudHMvQnV0dG9uL0luZGV4J1xuXG5pbXBvcnQgdWlBY3Rpb25zIGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMvdWknXG5pbXBvcnQgdG9waWNBY3Rpb25zIGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMvdG9waWNzJ1xuXG5pbXBvcnQgVGhlbWVUb29sdGlwIGZyb20gJy4uL0NvbW1vbkNvbXBvbmVudHMvVG9vbHRpcC9JbmRleCdcbmltcG9ydCBVcGxvYWRNZWRpYUNvbnRhaW5lciBmcm9tICcuLi9Ub3BpY0Zvcm0vY29tcG9uZW50cy9VcGxvYWRNZWRpYS9JbmRleCdcbmltcG9ydCBEaXNwbGF5TWVkaWEgZnJvbSAnLi4vVG9waWNGb3JtL2NvbXBvbmVudHMvRGlzcGxheU1lZGlhL0luZGV4J1xuXG5pbXBvcnQge1xuICBGb3JtQ29udGFpbmVyLCBMZWZ0LCBSaWdodCwgRmxleERpdiwgQ29udGFpbmVyLCBJbnB1dHNDb250YWluZXIsIEFycm93LCBMaW5lLFxufSBmcm9tICcuL1N0eWxlJ1xuaW1wb3J0IHsgRG93bkFycm93Q2lyY2xlU3ZnIH0gZnJvbSAnLi4vLi4vc3Zncy9zdmdzJ1xuaW1wb3J0IFJpY2hUZXh0RWRpdG9yIGZyb20gJy4uL0NvbW1vbkNvbXBvbmVudHMvUmljaFRleHRFZGl0b3IvSW5kZXgnXG5cbmNvbnN0IHV1aWRSZWdFeCA9IG5ldyBSZWdFeHAoL1xcYlswLTlhLWZdezh9XFxiLVswLTlhLWZdezR9LVswLTlhLWZdezR9LVswLTlhLWZdezR9LVxcYlswLTlhLWZdezEyfVxcYi9nKVxuXG5jb25zdCBDcmVhdGVTdWJUb3BpY0Zvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZUxvY2F0aW9uKClcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtpbWdGaWxlLCBzZXRJbWdGaWxlXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFt2aWRlb0ZpbGUsIHNldFZpZGVvRmlsZV0gPSB1c2VTdGF0ZShudWxsKVxuXG4gIGNvbnN0IFtyb3RhdGUsIHNldFJvdGF0ZV0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBbY29udGVudCwgc2V0Q29udGVudF0gPSB1c2VTdGF0ZSgnJylcbiAgLy8gY29uc3QgdmFsaWRhdG9yID0gdXNlQ29uZmlnRm9ybUVycm9ycyhFUlJPUlMpXG4gIGNvbnN0IFt0b3BpY0lkXSA9IHBhdGhuYW1lLm1hdGNoKHV1aWRSZWdFeClcblxuICBjb25zdCB7IG1ldGFEYXRhLCBnZXRMaW5rTWV0YURhdGFPbkJsdXIgfSA9IHVzZUdldExpbmtNZXRhRGF0YU9uQmx1cigpXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IHVzZUhhbmRsZVN1Ym1pdChtZXRhRGF0YSwgdG9waWNJZClcblxuICBjb25zdCB7IGdldFRvcGljLCBjbG9zZU1vZGFsIH0gPSB1c2VCaW5kRGlzcGF0Y2goXG4gICAgdWlBY3Rpb25zLCB0b3BpY0FjdGlvbnMsXG4gIClcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKChzKSA9PiBzLnNlc3Npb24uY3VycmVudFVzZXIpXG4gIGNvbnN0IHRvcGljID0gdXNlU2VsZWN0b3IoKHMpID0+IHMudG9waWNzLmxpc3QpPy5maW5kKCh0KSA9PiB0LmlkID09PSB0b3BpY0lkKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0VG9waWModG9waWNJZCwgdXNlcj8uaWQpXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxGb3JtaWtcbiAgICAgICAgaW5pdGlhbFZhbHVlcz17eyB0aXRsZTogJycgfX1cbiAgICAgICAgdmFsaWRhdGU9eyh2YWx1ZXMpID0+IHtcbiAgICAgICAgICBjb25zdCBlcnJvcnMgPSB7fVxuICAgICAgICAgIGlmICghdmFsdWVzLnRpdGxlKSB7XG4gICAgICAgICAgICBlcnJvcnMudGl0bGUgPSAnVGl0bGUgSXMgUmVxdWlyZWQnXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBlcnJvcnNcbiAgICAgICAgfX1cbiAgICAgICAgb25TdWJtaXQ9eygodmFsdWVzLCBwYXJhbXMpID0+IGhhbmRsZVN1Ym1pdCh2YWx1ZXMsIHBhcmFtcywgY29udGVudCkpfVxuICAgICAgPlxuICAgICAgICB7KHsgaXNTdWJtaXR0aW5nLCBzZXRGaWVsZFZhbHVlIH0pID0+IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cbiAgICAgICAgICAgICAgPE1vZGFsLlRpdGxlPlxuICAgICAgICAgICAgICAgIENyZWF0ZSBTdWIgVG9waWMgUmVnYXJkaW5nIFRoZSBUb3BpY1xuICAgICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgICAge2BcIiR7dG9waWM/LnRpdGxlfVwiYH1cbiAgICAgICAgICAgICAgPC9Nb2RhbC5UaXRsZT5cbiAgICAgICAgICAgIDwvTW9kYWwuSGVhZGVyPlxuICAgICAgICAgICAgPEZvcm1Db250YWluZXI+XG4gICAgICAgICAgICAgIDxNb2RhbC5Cb2R5PlxuICAgICAgICAgICAgICAgIDxJbnB1dHNDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICA8TGVmdD5cbiAgICAgICAgICAgICAgICAgICAgPEZsZXhEaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGgyPiBUb3BpYyBEZXNjcmlwdGlvbiA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgIDxUaGVtZVRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBIZWFkZXI9XCJUb3BpYyBEZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwVGV4dD1cIlByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHRvcGljIHlvdSB3b3VsZCBsaWtlIHRvIGRpc2N1c3NcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRmxleERpdj5cbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRpdGxlXCIgY29tcG9uZW50PXtJbnB1dH0gd2lkdGg9XCIxMDAlXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBBIFRvcGljIFRpdGxlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInN1bW1hcnlcIiBjb21wb25lbnQ9e0lucHV0fSB3aWR0aD1cIjEwMCVcIiBwbGFjZWhvbGRlcj1cIkdpdmUgQSBTaG9ydCBPcGluaW9uIE9yIFBvaW50XCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvTGVmdD5cbiAgICAgICAgICAgICAgICAgIDxSaWdodD5cbiAgICAgICAgICAgICAgICAgICAgPEZsZXhEaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGgyPiBMaW5rIHRvIHdoYXQgeW91IHdhbnQgdG8gZGlzY3VzcyBoZXJlLi4uIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgPFRoZW1lVG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcEhlYWRlcj1cIkRpc2N1c3NlZCBDb250ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBUZXh0PVwiQWRkIGEgbGluayB0byB0aGUgZXh0ZXJuYWwgY29udGVudCB5b3Ugd291bGQgbGlrZSB0byBkaXNjdXNzIChcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuZyBhIFlvdVR1YmUgdmlkZW8sIFR3ZWV0LCBwdWJsaWNhdGlvbiwgb3IgYW55dGhpbmcgZWxzZSlcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRmxleERpdj5cblxuICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZT1cInVybFwiIG5hbWU9XCJjb250ZW50VXJsXCIgcGxhY2Vob2xkZXI9XCJMaW5rIFRvIENvbnRlbnRcIiBjb21wb25lbnQ9e0lucHV0fSB3aWR0aD1cIjEwMCVcIiBvbkJsdXI9e2dldExpbmtNZXRhRGF0YU9uQmx1cn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmUgLz5cbiAgICAgICAgICAgICAgICAgICAgPEZsZXhEaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGgyPiBBZGQgeW91ciBvd24gbWVkaWEgY29udGVudCA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgIDxUaGVtZVRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBIZWFkZXI9XCJVc2VyIFByb3ZpZGVkIENvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcFRleHQ9XCJUaGlzIGNvdWxkIGJlIGFuIGltYWdlLCBncmFwaGljLCBvciB2aWRlbyBwZXJ0YWluaW5nIHRvIHRoZSB0b3BpYyB5b3Ugd291bGQgbGlrZSB0byBkaXNjdXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXhEaXY+XG4gICAgICAgICAgICAgICAgICAgIDxVcGxvYWRNZWRpYUNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgIHNldEZpZWxkVmFsdWU9e3NldEZpZWxkVmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgaW1nRmlsZT17aW1nRmlsZX1cbiAgICAgICAgICAgICAgICAgICAgICB2aWRlb0ZpbGU9e3ZpZGVvRmlsZX1cbiAgICAgICAgICAgICAgICAgICAgICBzZXRJbWdGaWxlPXtzZXRJbWdGaWxlfVxuICAgICAgICAgICAgICAgICAgICAgIHNldFZpZGVvRmlsZT17c2V0VmlkZW9GaWxlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9SaWdodD5cbiAgICAgICAgICAgICAgICA8L0lucHV0c0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8TGluZSAvPlxuICAgICAgICAgICAgICAgIDxEaXNwbGF5TWVkaWFcbiAgICAgICAgICAgICAgICAgIGltZ0ZpbGU9e2ltZ0ZpbGV9XG4gICAgICAgICAgICAgICAgICB2aWRlb0ZpbGU9e3ZpZGVvRmlsZX1cbiAgICAgICAgICAgICAgICAgIG1ldGFEYXRhPXttZXRhRGF0YX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxSaWNoVGV4dEVkaXRvciBjb250ZW50PXtjb250ZW50fSBzZXRDb250ZW50PXtzZXRDb250ZW50fSAvPlxuICAgICAgICAgICAgICAgIDxBcnJvd1xuICAgICAgICAgICAgICAgICAgcm90YXRlPXtyb3RhdGV9XG4gICAgICAgICAgICAgICAgICAvLyBpY29uPXs8RG93bkFycm93Q2lyY2xlU3ZnIC8+fVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRPcGVuKCFvcGVuKVxuICAgICAgICAgICAgICAgICAgICBzZXRSb3RhdGUocm90YXRlICsgKG9wZW4gPyAtMTgwIDogMTgwKSlcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPERvd25BcnJvd0NpcmNsZVN2ZyAvPlxuICAgICAgICAgICAgICAgIDwvQXJyb3c+XG4gICAgICAgICAgICAgICAgPEZhZGUgaW49eyFvcGVufT5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIEVudGVyIFN1cHBsZW1lbnRhbCBJbmZvcm1hdGlvblxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9GYWRlPlxuICAgICAgICAgICAgICAgIDxJbnB1dHNDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICA8Q29sbGFwc2UgaW49e29wZW59PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdoaXRlU3BhY2U6ICdub3dyYXAnLCB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgICAgICAgICAgICAgICAgIDxGbGV4RGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPiBFbnRlciBMaW5rcyBUbyBTdXBwbGVtZW50YWwgRXZpZGVuY2UuLi4gPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUaGVtZVRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcFRleHQ9XCJQcm92aWRlIGxpbmtzIHRvIGFkZGl0aW9uYWwgcmVhZGluZyBvciBldmlkZW5jZSBldGMuLi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwSGVhZGVyPVwiU3VwcGxlbWVudGFsIEluZm9ybWF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9GbGV4RGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCB0eXBlPVwidXJsXCIgbmFtZT1cIkV2aWRlbmNlIExpbmsgMVwiIGNvbXBvbmVudD17SW5wdXR9IHdpZHRoPVwiMTAwJVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGU9XCJ1cmxcIiBuYW1lPVwiRXZpZGVuY2UgTGluayAyXCIgY29tcG9uZW50PXtJbnB1dH0gd2lkdGg9XCIxMDAlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZT1cInVybFwiIG5hbWU9XCJFdmlkZW5jZSBMaW5rIDNcIiBjb21wb25lbnQ9e0lucHV0fSB3aWR0aD1cIjEwMCVcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvQ29sbGFwc2U+XG4gICAgICAgICAgICAgICAgPC9JbnB1dHNDb250YWluZXI+XG4gICAgICAgICAgICAgIDwvTW9kYWwuQm9keT5cbiAgICAgICAgICAgICAgPE1vZGFsLkZvb3Rlcj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17aXNTdWJtaXR0aW5nfSBvbkNsaWNrPXtjbG9zZU1vZGFsfT5cbiAgICAgICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9PlxuICAgICAgICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvTW9kYWwuRm9vdGVyPlxuICAgICAgICAgICAgPC9Gb3JtQ29udGFpbmVyPlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9Gb3JtaWs+XG4gICAgPC9Db250YWluZXI+XG5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVTdWJUb3BpY0Zvcm1cbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBGb3JtIH0gZnJvbSAnZm9ybWlrJ1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWBcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBoZWlnaHQ6IDkwdmg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxZW07XG4gIGJveC1zaGFkb3c6ICA1cHggNXB4IDVweCAtM3B4ICMwMDAwMDA7XG5cbiAgaDEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy1ib3R0b206IC41ZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICB9XG4gYFxuXG5leHBvcnQgY29uc3QgRmxleERpdiA9IHN0eWxlZCgnZGl2JylgIFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG5gXG5cbmV4cG9ydCBjb25zdCBGb3JtQ29udGFpbmVyID0gc3R5bGVkKEZvcm0pYFxuICBtYXJnaW4tdG9wOiAxZW07XG4gICBoMiB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgbWFyZ2luOiAwIDFlbTtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgSW5wdXRzQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWBcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG5gXG5cbmV4cG9ydCBjb25zdCBMZWZ0ID0gc3R5bGVkKCdkaXYnKWBcbiAgZGlzcGxheTogZmxleDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogNTAlO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcbmBcbmV4cG9ydCBjb25zdCBSaWdodCA9IHN0eWxlZCgnZGl2JylgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDUwJTtcbmBcblxuZXhwb3J0IGNvbnN0IFN1cHBsZW1lbnRhbEluZm9ybWF0aW9uID0gc3R5bGVkKCdzZWN0aW9uJylgXG5cbmBcblxuZXhwb3J0IGNvbnN0IElucHV0V3JhcHBlciA9IHN0eWxlZCgnZGl2JylgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5gXG5cbmV4cG9ydCBjb25zdCBBcnJvdyA9IHN0eWxlZCgnc3BhbicpYFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNmb3JtOiAkeyhwcm9wcykgPT4gYHJvdGF0ZSgke3Byb3BzLnJvdGF0ZX1kZWcpYH07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuYFxuXG5leHBvcnQgY29uc3QgTGluZSA9IHN0eWxlZCgnaHInKWAgXG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMmVtIDEuM2VtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDgsNDgsNTApO1xuICBoZWlnaHQ6IC41cHg7XG4gIGJvcmRlcjogbm9uZTtcbmBcbiIsImltcG9ydCB7IHlvdVR1YmVVcmxWYWxpZGF0b3IsIHR3aXR0ZXJVcmxWYWxpZHRvciB9IGZyb20gJy4uLy4uLy4uL2dlbmVyaWMvcmVnZXgvdXJsVmFsaWRhdG9ycydcblxuZXhwb3J0IGRlZmF1bHQgKHVybCkgPT4ge1xuICBjb25zdCB5dFVybCA9IHVybC5zZWFyY2goeW91VHViZVVybFZhbGlkYXRvcikgPT09IC0xID8gbnVsbCA6ICd5dFVybCdcbiAgY29uc3QgdHdlZXRVcmwgPSB1cmwuc2VhcmNoKHR3aXR0ZXJVcmxWYWxpZHRvcikgPT09IC0xID8gbnVsbCA6ICd0d2VldFVybCdcbiAgcmV0dXJuIHl0VXJsIHx8IHR3ZWV0VXJsXG59XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgZ2V0TGlua01ldGFEYXRhIH0gZnJvbSAnLi4vLi4vLi4vYXBpL3YxL3RvcGljcy90b3BpY3NfYXBpX3V0aWwnXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY29uc3QgW21ldGFEYXRhLCBzZXRNZXRhRGF0YV0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBnZXRMaW5rTWV0YURhdGFPbkJsdXIgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xuICAgIGdldExpbmtNZXRhRGF0YShlLmN1cnJlbnRUYXJnZXQudmFsdWUpLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICBzZXRNZXRhRGF0YShkYXRhKVxuICAgIH0pXG4gIH0sIFtdKVxuXG4gIHJldHVybiB7IG1ldGFEYXRhLCBnZXRMaW5rTWV0YURhdGFPbkJsdXIgfVxufVxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB0b3BpY0FjdGlvbnMgZnJvbSAnLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy90b3BpY3MvaW5kZXgnXG5pbXBvcnQgc3VidG9waWNBY3Rpb25zIGZyb20gJy4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvc3VidG9waWNzL2luZGV4J1xuXG5pbXBvcnQgdXNlQmluZERpc3BhdGNoIGZyb20gJy4uLy4uL2hvb2tzL3JlZHV4L3VzZUJpbmREaXNwYXRjaCdcblxuaW1wb3J0IGNoZWNrTGlua1R5cGUgZnJvbSAnLi9jaGVja0xpbmtUeXBlJ1xuXG5leHBvcnQgZGVmYXVsdCAobWV0YURhdGEsIHRvcGljSWQpID0+IHtcbiAgY29uc3QgeyBjcmVhdGVTdWJUb3BpYywgdXBsb2FkVG9waWNNZWRpYSB9ID0gdXNlQmluZERpc3BhdGNoKHRvcGljQWN0aW9ucywgc3VidG9waWNBY3Rpb25zKVxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3IoKHMpID0+IHMuc2Vzc2lvbi5jdXJyZW50VXNlcilcblxuICByZXR1cm4gdXNlQ2FsbGJhY2soKHZhbHVlcywgeyBzZXRTdWJtaXR0aW5nLCByZXNldEZvcm0gfSwgY29udGVudCkgPT4ge1xuICAgIGNvbnN0IGVMaW5rcyA9IE9iamVjdC5lbnRyaWVzKHZhbHVlcykubWFwKChbaywgdl0pID0+IChrLmluY2x1ZGVzKCdFdmlkZW5jZScpID8gdiA6IG51bGwpKS5maWx0ZXIoQm9vbGVhbilcbiAgICBjb25zdCBsaW5rVHlwZSA9IGNoZWNrTGlua1R5cGUodmFsdWVzLmNvbnRlbnRVcmwpXG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIC4uLnZhbHVlcyxcbiAgICAgIGRlc2NyaXB0aW9uOiBjb250ZW50LFxuICAgICAgY3JlYXRlZEJ5OiB1c2VyLnVzZXJuYW1lLFxuICAgICAgdXNlcklkOiB1c2VyLmlkLFxuICAgICAgZXZpZGVuY2VMaW5rczogZUxpbmtzLFxuICAgICAgW2xpbmtUeXBlXTogdmFsdWVzLmNvbnRlbnRVcmwsXG4gICAgICB0aHVtYkltZ1VybDogbWV0YURhdGEub2dJbWFnZT8udXJsLFxuICAgICAgdG9waWNJZCxcbiAgICAgIHR3ZWV0VXJsOiBudWxsLFxuICAgICAgaW1hZ2VVcmw6IG51bGwsXG4gICAgICB2b2RVcmw6IG51bGwsXG4gICAgfVxuICAgIGlmICh2YWx1ZXMuZmlsZSBpbnN0YW5jZW9mIEZpbGUpIHtcbiAgICAgIGNvbnN0IFtmaWxlVHlwZSwgZmlsZUZvcm1hdF0gPSB2YWx1ZXMuZmlsZS50eXBlLnNwbGl0KCcvJylcbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLCB2YWx1ZXMuZmlsZSlcbiAgICAgIHVwbG9hZFRvcGljTWVkaWEoZm9ybURhdGEsIGZpbGVUeXBlLCBmaWxlRm9ybWF0LCBkYXRhKVxuICAgIH0gZWxzZSB7XG4gICAgICBjcmVhdGVTdWJUb3BpYyhkYXRhKVxuICAgIH1cbiAgICBzZXRTdWJtaXR0aW5nKGZhbHNlKVxuICAgIHJlc2V0Rm9ybSh7fSlcbiAgfSwgW21ldGFEYXRhLCB0b3BpY0lkXSlcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1wcm9wcy1uby1zcHJlYWRpbmcgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExhYmVsLCBVcGxvYWRJbnB1dCB9IGZyb20gJy4vU3R5bGUnXG5cbmNvbnN0IFVwbG9hZEltYWdlSW5wdXQgPSAoe1xuICBmaWVsZCwgb25DaGFuZ2UsIGljb24sIGZpbGVUeXBlLCBkaXNhYmxlZCxcbn0pID0+IChcbiAgPExhYmVsPlxuICAgIHtpY29ufVxuICAgIDxVcGxvYWRJbnB1dCBkYXRhLWZpbGV0eXBlPXtmaWxlVHlwZX0gdHlwZT1cImZpbGVcIiB7Li4uZmllbGR9IGlkPXtmaWVsZC5uYW1lfSBvbkNoYW5nZT17b25DaGFuZ2V9IGRpc2FibGVkPXtkaXNhYmxlZH0gLz5cbiAgPC9MYWJlbD5cblxuKVxuXG5leHBvcnQgZGVmYXVsdCBVcGxvYWRJbWFnZUlucHV0XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgTGFiZWwgPSBzdHlsZWQoJ2xhYmVsJylgIFxuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMCU7XG4gIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBVcGxvYWRJbnB1dCA9IHN0eWxlZCgnaW5wdXQnKWAgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gIGxlZnQ6IC05OTk5OXJlbTtcbmBcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgRmllbGQgfSBmcm9tICdmb3JtaWsnXG5cbmltcG9ydCBVcGxvYWRGaWxlSW5wdXQgZnJvbSAnLi4vVXBsb2FkSW1hZ2VJbnB1dC9JbmRleCdcbmltcG9ydCB7IFZpZGVvU3ZnLCBJbWFnZVN2ZyB9IGZyb20gJy4uLy4uLy4uLy4uL3N2Z3Mvc3ZncydcblxuaW1wb3J0IHVzZU9uRmlsZUNoYW5nZUhhbmRsZXIgZnJvbSAnLi4vLi4vaG9va3MvdXNlT25GaWxlQ2hhbmdlSGFuZGxlcidcblxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi9TdHlsZS9pbmRleCdcblxuY29uc3QgVXBsb2FkTWVkaWFDb250YWluZXIgPSAoe1xuICBzZXRGaWVsZFZhbHVlLCBpbWdGaWxlLCB2aWRlb0ZpbGUsIHNldEltZ0ZpbGUsIHNldFZpZGVvRmlsZSxcbn0pID0+IHtcbiAgY29uc3Qgb25GaWxlQ2hhbmdlID0gdXNlT25GaWxlQ2hhbmdlSGFuZGxlcigpXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxGaWVsZFxuICAgICAgICBmaWxlVHlwZT1cImZpbGVcIlxuICAgICAgICBuYW1lPVwidG9waWNJbWFnZVwiXG4gICAgICAgIGRpc2FibGVkPXtCb29sZWFuKHZpZGVvRmlsZSl9XG4gICAgICAgIGZpbGU9e2ltZ0ZpbGV9XG4gICAgICAgIGNvbXBvbmVudD17VXBsb2FkRmlsZUlucHV0fVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uRmlsZUNoYW5nZShlLCBzZXRGaWVsZFZhbHVlLCBzZXRJbWdGaWxlKX1cbiAgICAgICAgaWNvbj17PEltYWdlU3ZnIC8+fVxuICAgICAgLz5cbiAgICAgIDxGaWVsZFxuICAgICAgICBmaWxlVHlwZT1cImZpbGVcIlxuICAgICAgICBuYW1lPVwidG9waWNWaWRlb1wiXG4gICAgICAgIGRpc2FibGVkPXtCb29sZWFuKGltZ0ZpbGUpfVxuICAgICAgICBmaWxlPXt2aWRlb0ZpbGV9XG4gICAgICAgIGNvbXBvbmVudD17VXBsb2FkRmlsZUlucHV0fVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uRmlsZUNoYW5nZShlLCBzZXRGaWVsZFZhbHVlLCBzZXRWaWRlb0ZpbGUpfVxuICAgICAgICBpY29uPXs8VmlkZW9TdmcgLz59XG4gICAgICAvPlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVwbG9hZE1lZGlhQ29udGFpbmVyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWAgXG4gIG1hcmdpbi1sZWZ0OiAxLjNlbTtcbiAgcGFkZGluZzogLjVlbTtcbiAgYm9yZGVyLXJhZGl1czogLjVlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYm94LXNoYWRvdzogIDVweCA1cHggNXB4IC0zcHggI0FBQUFBQTtcbiAgYmFja2dyb3VuZDogI0U1RTVFNTtcblxuYFxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gdXNlQ2FsbGJhY2soKGUsIHNldEZpZWxkVmFsdWUsIHNldFN0YXRlVmFsdWUpID0+IHtcbiAgc2V0RmllbGRWYWx1ZShlLnRhcmdldC5kYXRhc2V0LmZpbGV0eXBlLCBlLmN1cnJlbnRUYXJnZXQuZmlsZXNbMF0pXG4gIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgY29uc3QgY3VyckZpbGUgPSBlLnRhcmdldC5maWxlc1swXVxuICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xuICAgIHNldFN0YXRlVmFsdWUocmVhZGVyLnJlc3VsdClcbiAgfVxuICByZWFkZXIucmVhZEFzRGF0YVVSTChjdXJyRmlsZSlcbn0sIFtdKVxuIiwiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuLy8gYWN0aW9uIGNyZWF0b3IgaXMganVzdCBhIGZ1bmN0aW9uIHRoYXQgZGlzcGF0Y2hlcyBhbiBhY3Rpb25cbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknXG5pbXBvcnQgeyBjbG9zZU1vZGFsIH0gZnJvbSAnLi4vdWkvaW5kZXgnXG5pbXBvcnQgeyBBRERfU1VCX1RPUElDLCBHRVRfQUxMX1NVQl9UT1BJQ1MgfSBmcm9tICcuLi8uLi9yZWR1Y2Vycy9zdWJ0b3BpY3Mvc3ViVG9waWNzUmVkdWNlcidcbmltcG9ydCAqIGFzIFN1YlRvcGljc0FwaVV0aWwgZnJvbSAnLi4vLi4vLi4vYXBpL3YxL3N1YnRvcGljcy9zdWJ0b3BpY3NfYXBpX3V0aWwnXG5pbXBvcnQgeyBlcnJvckZvcm1hdHRlciB9IGZyb20gJy4uLy4uL3V0aWxzL2Vycm9yRm9ybWF0dGVyJ1xuXG5jb25zdCBnZXRBbGxUb3BpY3NBY3Rpb25DcmVhdG9yID0gKHN1YnRvcGljcykgPT4gKHtcbiAgdHlwZTogR0VUX0FMTF9TVUJfVE9QSUNTLFxuICBwYXlsb2FkOiBzdWJ0b3BpY3MsXG5cbn0pXG5cbmNvbnN0IGFkZFRvcGljQWN0aW9uQ3JlYXRvciA9IChzdWJUb3BpY0RhdGEpID0+ICh7XG4gIHR5cGU6IEFERF9TVUJfVE9QSUMsXG4gIHBheWxvYWQ6IHN1YlRvcGljRGF0YSxcbn0pXG5cbmV4cG9ydCBjb25zdCBjcmVhdGVTdWJUb3BpYyA9ICh0b3BpY0RhdGEpID0+IChkaXNwYXRjaCkgPT4gU3ViVG9waWNzQXBpVXRpbC5jcmVhdGVTdWJUb3BpYyh0b3BpY0RhdGEpXG4gIC50aGVuKChyZXMpID0+IGRpc3BhdGNoKGFkZFRvcGljQWN0aW9uQ3JlYXRvcihyZXMuZGF0YSkpKVxuICAudGhlbigoKSA9PiBkaXNwYXRjaChjbG9zZU1vZGFsKCkpKVxuICAuY2F0Y2goKGVycm9yKSA9PiB0b2FzdC5lcnJvcihlcnJvckZvcm1hdHRlcihlcnJvcikpKVxuXG5leHBvcnQgY29uc3QgZ2V0QWxsU3ViVG9waWNzID0gKHRvcGljSWQpID0+IChkaXNwYXRjaCkgPT4gU3ViVG9waWNzQXBpVXRpbC5nZXRBbGxTdWJUb3BpY3ModG9waWNJZClcbiAgLnRoZW4oKHJlcykgPT4gZGlzcGF0Y2goZ2V0QWxsVG9waWNzQWN0aW9uQ3JlYXRvcihyZXMuZGF0YSkpKVxuICAuY2F0Y2goKGVycm9yKSA9PiB0b2FzdC5lcnJvcihlcnJvckZvcm1hdHRlcihlcnJvcikpKVxuXG5leHBvcnQgY29uc3QgZ2V0U3ViVG9waWMgPSAoc3ViVG9waWNJZCkgPT4gKGRpc3BhdGNoKSA9PiBTdWJUb3BpY3NBcGlVdGlsLmdldFN1YlRvcGljKHN1YlRvcGljSWQpXG4gIC50aGVuKChyZXMpID0+IGRpc3BhdGNoKGFkZFRvcGljQWN0aW9uQ3JlYXRvcihyZXMuZGF0YSkpKVxuICAuY2F0Y2goKGVycm9yKSA9PiB0b2FzdC5lcnJvcihlcnJvckZvcm1hdHRlcihlcnJvcikpKVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNyZWF0ZVN1YlRvcGljLFxuICBnZXRBbGxTdWJUb3BpY3MsXG4gIGdldFN1YlRvcGljLFxufVxuIl0sIm5hbWVzIjpbImF4aW9zIiwiQkFDS0VORF9ERVYiLCJjcmVhdGVTdWJUb3BpYyIsInN1YlRvcGljRGF0YSIsInBvc3QiLCJnZXRBbGxTdWJUb3BpY3MiLCJ0b3BpY0lkIiwiZ2V0IiwiZ2V0U3ViVG9waWMiLCJzdWJUb3BpY0lkIiwidCIsInYiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNldFRpbWVvdXQiLCJiaW5kIiwieW91VHViZVVybFZhbGlkYXRvciIsIlJlZ0V4cCIsInR3aXR0ZXJVcmxWYWxpZHRvciIsIlJlYWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJ1c2VMb2NhdGlvbiIsIk1vZGFsIiwiRm9ybWlrIiwiQnV0dG9uIiwiVXNlckluZm9IZWFkZXIiLCJBbmltYXRlZENoZWNrbWFyayIsIlJpY2hUZXh0RWRpdG9yIiwidXNlU2V0SW5uZXJIdG1sIiwidXNlR2V0U3RhdGVFZmZlY3QiLCJ1c2VIYW5kbGVTdWJtaXQiLCJnZXRUaW1lU2luY2UiLCJjaGVja1RveGljaXR5IiwiRm9ybUNvbnRhaW5lciIsIklucHV0V3JhcHBlciIsIkNvbnRhaW5lciIsIkRlc2NyaXB0aW9uIiwiVG94aWNpdHlDb250cm9scyIsInV1aWRSZWdFeCIsIkNyZWF0ZUNvbW1lbnRGb3JtIiwibW9kYWxQcm9wcyIsImRlc2NSZWYiLCJyYXdIVE1MIiwiY29udGVudCIsInJhd1RleHQiLCJyaWNoVGV4dEVkaXRvckRhdGEiLCJzZXRSaWNoVGV4dEVkaXRvckRhdGEiLCJ0b3hpY2l0eVNjb3JlIiwic2V0VG94aWNpdHlTY29yZSIsInBhdGhuYW1lIiwiY29udGVudElkIiwibWF0Y2giLCJzdWJ0b3BpY0lkIiwiY29tcFN0YXRlIiwiaGFuZGxlU3VibWl0IiwiaHRtbENvbnRlbnQiLCJwb3NpdGl2ZSIsIm5lZ2F0aXZlIiwibmV1dHJhbCIsImVycm9ycyIsImxlbmd0aCIsImlzU3VibWl0dGluZyIsImNyZWF0ZWRCeUljb25TcmMiLCJjcmVhdGVkQnkiLCJ0aW1lIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJ0aGVuIiwicmVzIiwiZGF0YSIsIlNFVkVSRV9UT1hJQ0lUWSIsInRvRml4ZWQiLCJzdHlsZWQiLCJGb3JtIiwidXNlTWVtbyIsInVzZVNlbGVjdG9yIiwiZmluZENvbW1lbnRDb250ZW50IiwiY29tbWVudCIsImlkIiwidmlzaXRlZCIsIlNldCIsInEiLCJjdXJyTm9kZSIsInNoaWZ0IiwiYWRkIiwiY2hpbGRyZW4iLCJmb3JFYWNoIiwiY2hpbGQiLCJoYXMiLCJwdXNoIiwidXNlciIsInMiLCJzZXNzaW9uIiwiY3VycmVudFVzZXIiLCJ0b3BpYyIsInRvcGljcyIsImxpc3QiLCJmaW5kIiwiY29tbWVudHMiLCJjIiwicm9vdFBhcmVudENvbW1lbnRJZCIsImNvbW1lbnRJZCIsInRyaWJ1bmFsQ29tbWVudCIsInRyaWJ1bmFsQ29tbWVudHMiLCJjcmVhdGVkQXQiLCJjb21tZW50Q29udGVudCIsInJlcGx5VHlwZSIsImRlc2NyaXB0aW9uIiwidXNlcm5hbWUiLCJ0eXBlIiwidXNlQ2FsbGJhY2siLCJ0b2FzdCIsInVzZUJpbmREaXNwYXRjaCIsImNvbW1lbnRBY3Rpb25zIiwidHJpYnVuYWxDb21tZW50QWN0aW9ucyIsImRlbGF5IiwidXNlRGV0ZWN0Q3VycmVudFBhZ2UiLCJpc1RyaWJ1bmFsQ29tbWVudCIsImlzT25UcmlidW5hbFBhZ2UiLCJ0cmlidW5hbENvbW1lbnRVbmRlclJldmlld0lkIiwiaXNQYXJlbnRUcmlidW5hbENvbW1lbnRVbmRlclJldmlldyIsInBhcmVudElkIiwicm9vdElkIiwiY3JlYXRlQ29tbWVudCIsImNyZWF0ZVRyaWJ1bmFsQ29tbWVudCIsInZhbHVlcyIsInNldFN1Ym1pdHRpbmciLCJyZXNldEZvcm0iLCJwcm9taXNlIiwiYWxsIiwicGVuZGluZyIsInN1Y2Nlc3MiLCJyZW5kZXIiLCJpY29uIiwiZXJyb3IiLCJ0b3hpY2l0eVN0YXR1cyIsIm1lbWVGbGFnIiwiSW5wdXQiLCJjb2xvciIsInRleHQiLCJCb29sZWFuIiwibWFyZ2luTGVmdCIsIndpZHRoIiwiaGVpZ2h0Iiwia2V5ZnJhbWVzIiwic3BsYXNoIiwicHJpbWFyeSIsInByb3BzIiwiT3ZlcmxheSIsInVzZUVmZmVjdCIsIlJlYWN0UXVpbGwiLCJFbW9qaUJ1dHRvbiIsIkVtb2ppQ29udGFpbmVyIiwic2V0Q29udGVudCIsImlzSGlkZGVuIiwic2V0SXNIaWRkZW4iLCJtb2R1bGVzIiwidG9vbGJhciIsImNvbnRhaW5lciIsImhhbmRsZU9uQ2hhbmdlIiwiY3VyckNvbnRlbnQiLCJkZWx0YSIsInNvdXJjZSIsImVkaXRvciIsImdldEhUTUwiLCJnZXRDb250ZW50cyIsImdldFRleHQiLCJwaWNrZXJSZWYiLCJxdWlsbFJlZiIsImVtb2ppUGlja2VyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiY3VycmVudCIsImN1cnNvclBvc2l0aW9uIiwiZ2V0U2VsZWN0aW9uIiwiaW5kZXgiLCJnZXRMZW5ndGgiLCJpbnNlcnRUZXh0IiwiZGV0YWlsIiwiZW1vamkiLCJzZXRTZWxlY3Rpb24iLCJmb3JtYXRzIiwicHJldiIsIkN1c3RvbUJ1dHRvbiIsIkN1c3RvbVRvb2xiYXIiLCJqdXN0aWZ5Q29udGVudCIsImRpdiIsIkNvbGxhcHNlIiwiRmFkZSIsIkZpZWxkIiwidXNlR2V0TGlua01ldGFEYXRhT25CbHVyIiwidWlBY3Rpb25zIiwidG9waWNBY3Rpb25zIiwiVGhlbWVUb29sdGlwIiwiVXBsb2FkTWVkaWFDb250YWluZXIiLCJEaXNwbGF5TWVkaWEiLCJMZWZ0IiwiUmlnaHQiLCJGbGV4RGl2IiwiSW5wdXRzQ29udGFpbmVyIiwiQXJyb3ciLCJMaW5lIiwiRG93bkFycm93Q2lyY2xlU3ZnIiwiQ3JlYXRlU3ViVG9waWNGb3JtIiwib3BlbiIsInNldE9wZW4iLCJpbWdGaWxlIiwic2V0SW1nRmlsZSIsInZpZGVvRmlsZSIsInNldFZpZGVvRmlsZSIsInJvdGF0ZSIsInNldFJvdGF0ZSIsIm1ldGFEYXRhIiwiZ2V0TGlua01ldGFEYXRhT25CbHVyIiwiZ2V0VG9waWMiLCJjbG9zZU1vZGFsIiwidGl0bGUiLCJwYXJhbXMiLCJzZXRGaWVsZFZhbHVlIiwid2hpdGVTcGFjZSIsIlN1cHBsZW1lbnRhbEluZm9ybWF0aW9uIiwidXJsIiwieXRVcmwiLCJzZWFyY2giLCJ0d2VldFVybCIsImdldExpbmtNZXRhRGF0YSIsInNldE1ldGFEYXRhIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSIsInN1YnRvcGljQWN0aW9ucyIsImNoZWNrTGlua1R5cGUiLCJ1cGxvYWRUb3BpY01lZGlhIiwiZUxpbmtzIiwiT2JqZWN0IiwiZW50cmllcyIsIm1hcCIsImsiLCJpbmNsdWRlcyIsImZpbHRlciIsImxpbmtUeXBlIiwiY29udGVudFVybCIsInVzZXJJZCIsImV2aWRlbmNlTGlua3MiLCJvZ0ltYWdlIiwiZmlsZSIsIkZpbGUiLCJzcGxpdCIsImZpbGVUeXBlIiwiZmlsZUZvcm1hdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJMYWJlbCIsIlVwbG9hZElucHV0IiwiVXBsb2FkSW1hZ2VJbnB1dCIsImZpZWxkIiwib25DaGFuZ2UiLCJkaXNhYmxlZCIsIm5hbWUiLCJVcGxvYWRGaWxlSW5wdXQiLCJWaWRlb1N2ZyIsIkltYWdlU3ZnIiwidXNlT25GaWxlQ2hhbmdlSGFuZGxlciIsIm9uRmlsZUNoYW5nZSIsInNldFN0YXRlVmFsdWUiLCJ0YXJnZXQiLCJkYXRhc2V0IiwiZmlsZXR5cGUiLCJmaWxlcyIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJjdXJyRmlsZSIsIm9ubG9hZGVuZCIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiLCJBRERfU1VCX1RPUElDIiwiR0VUX0FMTF9TVUJfVE9QSUNTIiwiU3ViVG9waWNzQXBpVXRpbCIsImVycm9yRm9ybWF0dGVyIiwiZ2V0QWxsVG9waWNzQWN0aW9uQ3JlYXRvciIsInN1YnRvcGljcyIsInBheWxvYWQiLCJhZGRUb3BpY0FjdGlvbkNyZWF0b3IiLCJ0b3BpY0RhdGEiLCJkaXNwYXRjaCJdLCJzb3VyY2VSb290IjoiIn0=