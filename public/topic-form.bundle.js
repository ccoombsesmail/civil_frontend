"use strict";
(self["webpackChunkcivil"] = self["webpackChunkcivil"] || []).push([["topic-form"],{

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
/* harmony import */ var _CommonComponents_Buttons_ExpandButton_Index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../CommonComponents/Buttons/ExpandButton/Index */ "./src/pages/CommonComponents/Buttons/ExpandButton/Index.jsx");
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
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_19__["default"].Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_CommonComponents_Buttons_ExpandButton_Index__WEBPACK_IMPORTED_MODULE_11__["default"], {
      type: "submit",
      height: "2.5vw",
      backgroundColor: "var(--m-primary-btn-color)",
      disabled: isSubmitting,
      onClick: closeModal
    }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_CommonComponents_Buttons_ExpandButton_Index__WEBPACK_IMPORTED_MODULE_11__["default"], {
      type: "submit",
      height: "2.5vw",
      backgroundColor: "var(--m-primary-btn-color)",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBLE9BQUssVUFBQ21VLFFBQVE7SUFBQSxPQUFLUCw2RUFBNEIsQ0FBQzVULFVBQVUsQ0FBQyxDQUM5RjRELElBQUksQ0FBQyxVQUFDQyxHQUFHO01BQUEsT0FBS3NRLFFBQVEsQ0FBQ0YscUJBQXFCLENBQUNwUSxHQUFHLENBQUNDLElBQUksQ0FBQyxDQUFDO0lBQUEsRUFBQyxTQUNuRCxDQUFDLFVBQUNpRSxLQUFLO01BQUEsT0FBS3ZCLHVEQUFXLENBQUNxTixxRUFBYyxDQUFDOUwsS0FBSyxDQUFDLENBQUM7SUFBQSxFQUFDO0VBQUE7QUFBQTtBQUV2RCxpRUFBZTtFQUNidEksY0FBYyxFQUFkQSxjQUFjO0VBQ2RHLGVBQWUsRUFBZkEsZUFBZTtFQUNmRyxXQUFXLEVBQVhBO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NpdmlsLy4vc3JjL2FwaS92MS9zdWJ0b3BpY3Mvc3VidG9waWNzX2FwaV91dGlsLmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL2dlbmVyaWMvZGVsYXkuanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvZ2VuZXJpYy9yZWdleC91cmxWYWxpZGF0b3JzLmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL0NvbW1lbnRGb3JtL0luZGV4LmpzeCIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9Db21tZW50Rm9ybS9TdHlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9Db21tZW50Rm9ybS9ob29rcy91c2VHZXRTdGF0ZUVmZmVjdC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9Db21tZW50Rm9ybS9ob29rcy91c2VIYW5kbGVTdWJtaXQuanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvQ29tbW9uQ29tcG9uZW50cy9BbmltYXRlZENoZWNrbWFyay9JbmRleC5qc3giLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvQ29tbW9uQ29tcG9uZW50cy9BbmltYXRlZENoZWNrbWFyay9TdHlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9Db21tb25Db21wb25lbnRzL0Zvcm0vU2VsZWN0L0luZGV4LmpzeCIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9Db21tb25Db21wb25lbnRzL0Zvcm0vU2VsZWN0L1N0eWxlL2luZGV4LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL0NvbW1vbkNvbXBvbmVudHMvT3ZlcmxheS9zdHlsZS5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9Db21tb25Db21wb25lbnRzL1JpY2hUZXh0RWRpdG9yL0luZGV4LmpzeCIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9Db21tb25Db21wb25lbnRzL1JpY2hUZXh0RWRpdG9yL1N0eWxlL2luZGV4LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL1N1YlRvcGljRm9ybS9JbmRleC5qc3giLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvU3ViVG9waWNGb3JtL1N0eWxlL2luZGV4LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL1N1YlRvcGljRm9ybS9ob29rcy9jaGVja0xpbmtUeXBlLmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL1N1YlRvcGljRm9ybS9ob29rcy91c2VHZXRMaW5rTWV0YURhdGFPbkJsdXIuanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvU3ViVG9waWNGb3JtL2hvb2tzL3VzZUhhbmRsZVN1Ym1pdC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9Ub3BpY0Zvcm0vSW5kZXguanN4Iiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL1RvcGljRm9ybS9TdHlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9Ub3BpY0Zvcm0vY29tcG9uZW50cy9MaW5rVHlwZUljb24vSW5kZXguanN4Iiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL1RvcGljRm9ybS9jb21wb25lbnRzL0xpbmtUeXBlSWNvbi9TdHlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9Ub3BpY0Zvcm0vY29tcG9uZW50cy9VcGxvYWRJbWFnZUlucHV0L0luZGV4LmpzeCIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9Ub3BpY0Zvcm0vY29tcG9uZW50cy9VcGxvYWRJbWFnZUlucHV0L1N0eWxlL2luZGV4LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL1RvcGljRm9ybS9jb21wb25lbnRzL1VwbG9hZE1lZGlhL0luZGV4LmpzeCIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9Ub3BpY0Zvcm0vY29tcG9uZW50cy9VcGxvYWRNZWRpYS9TdHlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9Ub3BpY0Zvcm0vaG9va3MvY2hlY2tMaW5rVHlwZS5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9Ub3BpY0Zvcm0vaG9va3MvdXNlR2V0TGlua01ldGFEYXRhT25CbHVyLmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL1RvcGljRm9ybS9ob29rcy91c2VIYW5kbGVTdWJtaXQuanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvVG9waWNGb3JtL2hvb2tzL3VzZU9uRmlsZUNoYW5nZUhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcmVkdXgvYWN0aW9ucy9zdWJ0b3BpY3MvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgQkFDS0VORF9ERVYgfSBmcm9tICcuLi8uLi9lbmRwb2ludHMvZW5kcG9pbnRzJ1xuXG5leHBvcnQgY29uc3QgY3JlYXRlU3ViVG9waWMgPSAoc3ViVG9waWNEYXRhKSA9PiBheGlvcy5wb3N0KGAke0JBQ0tFTkRfREVWfS9zdWJ0b3BpY3NgLCBzdWJUb3BpY0RhdGEpXG5cbmV4cG9ydCBjb25zdCBnZXRBbGxTdWJUb3BpY3MgPSAodG9waWNJZCkgPT4gYXhpb3MuZ2V0KGAke0JBQ0tFTkRfREVWfS9zdWJ0b3BpY3M/dG9waWNJZD0ke3RvcGljSWR9YClcblxuZXhwb3J0IGNvbnN0IGdldFN1YlRvcGljID0gKHN1YlRvcGljSWQpID0+IGF4aW9zLmdldChgJHtCQUNLRU5EX0RFVn0vc3VidG9waWNzLyR7c3ViVG9waWNJZH1gKVxuIiwiZXhwb3J0IGRlZmF1bHQgKHQsIHYpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgaWYgKHYgPT09IHRydWUpIHJlamVjdCgpXG4gIHNldFRpbWVvdXQocmVzb2x2ZS5iaW5kKG51bGwsIHYpLCB0KVxufSlcbiIsImV4cG9ydCBjb25zdCB5b3VUdWJlVXJsVmFsaWRhdG9yID0gbmV3IFJlZ0V4cCgvXigoPzpodHRwcz86KT9cXC9cXC8pPygoPzp3d3d8bSlcXC4pPygoPzp5b3V0dWJlXFwuY29tfHlvdXR1LmJlKSkoXFwvKD86W1xcd1xcLV0rXFw/dj18ZW1iZWRcXC98dlxcLyk/KShbXFx3XFwtXSspKFxcUyspPyQvZ20pXG5leHBvcnQgY29uc3QgdHdpdHRlclVybFZhbGlkdG9yID0gbmV3IFJlZ0V4cCgvaHR0cCg/OnMpPzpcXC9cXC8oPzp3d3cpP3R3aXR0ZXJcXC5jb21cXC8oW2EtekEtWjAtOV9dKykvZ20pXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Nb2RhbCdcbmltcG9ydCB7IEZvcm1payB9IGZyb20gJ2Zvcm1paydcblxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9Db21tb25Db21wb25lbnRzL0J1dHRvbi9JbmRleCdcbmltcG9ydCBVc2VySW5mb0hlYWRlciBmcm9tICcuLi9Db21tb25Db21wb25lbnRzL1VzZXJJbmZvSGVhZGVyL0luZGV4J1xuaW1wb3J0IEFuaW1hdGVkQ2hlY2ttYXJrIGZyb20gJy4uL0NvbW1vbkNvbXBvbmVudHMvQW5pbWF0ZWRDaGVja21hcmsvSW5kZXgnXG5pbXBvcnQgUmljaFRleHRFZGl0b3IgZnJvbSAnLi4vQ29tbW9uQ29tcG9uZW50cy9SaWNoVGV4dEVkaXRvci9JbmRleCdcblxuaW1wb3J0IHVzZVNldElubmVySHRtbCBmcm9tICcuLi9ob29rcy91c2VTZXRJbm5lckh0bWwnXG5pbXBvcnQgdXNlR2V0U3RhdGVFZmZlY3QgZnJvbSAnLi9ob29rcy91c2VHZXRTdGF0ZUVmZmVjdCdcbmltcG9ydCB1c2VIYW5kbGVTdWJtaXQgZnJvbSAnLi9ob29rcy91c2VIYW5kbGVTdWJtaXQnXG5cbmltcG9ydCB7IGdldFRpbWVTaW5jZSB9IGZyb20gJy4uLy4uL2dlbmVyaWMvc3RyaW5nL2RhdGVGb3JtYXR0ZXInXG5pbXBvcnQgeyBjaGVja1RveGljaXR5IH0gZnJvbSAnLi4vLi4vYXBpL3YxL2NvbW1lbnRzL2NvbW1lbnRzX2FwaV91dGlsJ1xuXG5pbXBvcnQge1xuICBGb3JtQ29udGFpbmVyLCBJbnB1dFdyYXBwZXIsIENvbnRhaW5lciwgRGVzY3JpcHRpb24sIFRveGljaXR5Q29udHJvbHMsXG59IGZyb20gJy4vU3R5bGUnXG5cbmNvbnN0IHV1aWRSZWdFeCA9IG5ldyBSZWdFeHAoL1xcYlswLTlhLWZdezh9XFxiLVswLTlhLWZdezR9LVswLTlhLWZdezR9LVswLTlhLWZdezR9LVxcYlswLTlhLWZdezEyfVxcYi9nKVxuXG5jb25zdCBDcmVhdGVDb21tZW50Rm9ybSA9ICh7IG1vZGFsUHJvcHMgfSkgPT4ge1xuICBjb25zdCBkZXNjUmVmID0gdXNlUmVmKG51bGwpXG4gIGNvbnN0IFtyaWNoVGV4dEVkaXRvckRhdGEsIHNldFJpY2hUZXh0RWRpdG9yRGF0YV0gPSB1c2VTdGF0ZSh7XG4gICAgcmF3SFRNTDogJycsXG4gICAgY29udGVudDogJycsXG4gICAgcmF3VGV4dDogJycsXG4gIH0pXG4gIGNvbnN0IFt0b3hpY2l0eVNjb3JlLCBzZXRUb3hpY2l0eVNjb3JlXSA9IHVzZVN0YXRlKG51bGwpXG5cbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlTG9jYXRpb24oKVxuICBjb25zdCBjb250ZW50SWQgPSBwYXRobmFtZS5tYXRjaCh1dWlkUmVnRXgpWzBdXG4gIGNvbnN0IHN1YnRvcGljSWQgPSBwYXRobmFtZS5tYXRjaCh1dWlkUmVnRXgpWzFdXG4gIGNvbnN0IGNvbXBTdGF0ZSA9IHVzZUdldFN0YXRlRWZmZWN0KGNvbnRlbnRJZCwgc3VidG9waWNJZCwgbW9kYWxQcm9wcylcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gdXNlSGFuZGxlU3VibWl0KGNvbXBTdGF0ZSwgcmljaFRleHRFZGl0b3JEYXRhLnJhd0hUTUwsIHJpY2hUZXh0RWRpdG9yRGF0YS5yYXdUZXh0LCBtb2RhbFByb3BzLCBzdWJ0b3BpY0lkIHx8IGNvbnRlbnRJZCwgY29udGVudElkKVxuICB1c2VTZXRJbm5lckh0bWwoZGVzY1JlZiwgY29tcFN0YXRlLmh0bWxDb250ZW50KVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxGb3JtaWtcbiAgICAgICAgaW5pdGlhbFZhbHVlcz17e1xuICAgICAgICAgIGNvbnRlbnQ6ICcnLFxuICAgICAgICAgIHBvc2l0aXZlOiAnJyxcbiAgICAgICAgICBuZWdhdGl2ZTogJycsXG4gICAgICAgICAgbmV1dHJhbDogJycsXG4gICAgICAgIH19XG4gICAgICAgIHZhbGlkYXRlPXsoKSA9PiB7XG4gICAgICAgICAgY29uc3QgZXJyb3JzID0ge31cbiAgICAgICAgICBpZiAocmljaFRleHRFZGl0b3JEYXRhLmNvbnRlbnQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBlcnJvcnMuY29udGVudCA9ICdXcml0ZSBTb21ldGhpbmcnXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBlcnJvcnNcbiAgICAgICAgfX1cbiAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cbiAgICAgID5cbiAgICAgICAgeyh7IGlzU3VibWl0dGluZyB9KSA9PiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XG4gICAgICAgICAgICAgIDxNb2RhbC5UaXRsZT5Xcml0ZSBZb3VyIFJlcGx5PC9Nb2RhbC5UaXRsZT5cbiAgICAgICAgICAgIDwvTW9kYWwuSGVhZGVyPlxuICAgICAgICAgICAgPEZvcm1Db250YWluZXI+XG4gICAgICAgICAgICAgIDxNb2RhbC5Cb2R5PlxuICAgICAgICAgICAgICAgIDxVc2VySW5mb0hlYWRlclxuICAgICAgICAgICAgICAgICAgaWNvblNyYz17Y29tcFN0YXRlLmNyZWF0ZWRCeUljb25TcmN9XG4gICAgICAgICAgICAgICAgICB1c2VybmFtZT17Y29tcFN0YXRlLmNyZWF0ZWRCeX1cbiAgICAgICAgICAgICAgICAgIHRpbWU9e2dldFRpbWVTaW5jZShjb21wU3RhdGUudGltZSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8RGVzY3JpcHRpb24+XG4gICAgICAgICAgICAgICAgICA8c3BhbiByZWY9e2Rlc2NSZWZ9IC8+XG4gICAgICAgICAgICAgICAgPC9EZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICA8SW5wdXRXcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgPFJpY2hUZXh0RWRpdG9yXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3JpY2hUZXh0RWRpdG9yRGF0YS5jb250ZW50fVxuICAgICAgICAgICAgICAgICAgICBzZXRDb250ZW50PXtzZXRSaWNoVGV4dEVkaXRvckRhdGF9XG4gICAgICAgICAgICAgICAgICAgIHNldFRveGljaXR5U2NvcmU9e3NldFRveGljaXR5U2NvcmV9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvSW5wdXRXcmFwcGVyPlxuICAgICAgICAgICAgICA8L01vZGFsLkJvZHk+XG4gICAgICAgICAgICAgIDxNb2RhbC5Gb290ZXI+XG4gICAgICAgICAgICAgICAgPFRveGljaXR5Q29udHJvbHM+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjaGVja1RveGljaXR5KHsgY29udGVudDogcmljaFRleHRFZGl0b3JEYXRhLnJhd1RleHQgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRveGljaXR5U2NvcmUocmVzLmRhdGEuU0VWRVJFX1RPWElDSVRZLnRvRml4ZWQoMikpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBDaGVjayBUb3hpY2l0eSBTY29yZVxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxBbmltYXRlZENoZWNrbWFyayB0b3hpY2l0eVNjb3JlPXt0b3hpY2l0eVNjb3JlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHA+eyB0b3hpY2l0eVNjb3JlICYmIGBZb3VyIHRveGljaXR5IHNjb3JlIGlzICR7dG94aWNpdHlTY29yZX1gfTwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvVG94aWNpdHlDb250cm9scz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17aXNTdWJtaXR0aW5nfT5cbiAgICAgICAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L01vZGFsLkZvb3Rlcj5cbiAgICAgICAgICAgIDwvRm9ybUNvbnRhaW5lcj5cblxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9Gb3JtaWs+XG4gICAgPC9Db250YWluZXI+XG5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVDb21tZW50Rm9ybVxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IEZvcm0gfSBmcm9tICdmb3JtaWsnXG5cbmV4cG9ydCBjb25zdCBGb3JtQ29udGFpbmVyID0gc3R5bGVkKEZvcm0pYFxuICBtYXJnaW4tdG9wOiAwO1xuICBib3JkZXItcmFkaXVzOiAuNWVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbmBcblxuZXhwb3J0IGNvbnN0IERlc2NyaXB0aW9uID0gc3R5bGVkKCdwJylgIFxuICB3aWR0aDogOTAlO1xuICBwYWRkaW5nOiAuNWVtIDA7XG4gIG1hcmdpbi1ib3R0b206IDJlbTtcbiAgZm9udC1zaXplOiAuODVlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IGJsYWNrO1xuYFxuXG5leHBvcnQgY29uc3QgSW5wdXRXcmFwcGVyID0gc3R5bGVkKCdkaXYnKWBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgc2VjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIHdpZHRoOiAzMHZ3O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgICBwYWRkaW5nOiAuMmVtIC41ZW07XG4gICAgYmFja2dyb3VuZDogI2UwZTVlYztcbiAgICBib3JkZXItcmFkaXVzOiAuNGVtO1xuICAgIGJveC1zaGFkb3c6XG4gICAtN3B4IC03cHggMjBweCAwcHggI2ZmZjksXG4gICAtNHB4IC00cHggNXB4IDBweCAjZmZmOSxcbiAgIDdweCA3cHggMjBweCAwcHggIzAwMDIsXG4gICA0cHggNHB4IDVweCAwcHggIzAwMDEsXG4gICBpbnNldCAwcHggMHB4IDBweCAwcHggI2ZmZjksXG4gICBpbnNldCAwcHggMHB4IDBweCAwcHggIzAwMDEsXG4gICBpbnNldCAwcHggMHB4IDBweCAwcHggI2ZmZjksXG4gICBpbnNldCAwcHggMHB4IDBweCAwcHggIzAwMDE7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZCgnZGl2JylgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaDEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy1ib3R0b206IC41ZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICB9XG4gYFxuXG5leHBvcnQgY29uc3QgVG94aWNpdHlDb250cm9scyA9IHN0eWxlZCgnZGl2JylgXG4gIGZsZXgtZ3JvdzogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgPiBkaXYge1xuICAgIG1hcmdpbi1sZWZ0OiAxdnc7XG4gIH1cblxuICBwIHtcbiAgICBtYXJnaW46IDAgMWVtO1xuICAgIGNvbG9yOiAjOTc5Y2IwO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAuMXZ3OyAgXG4gIH1cblxuYFxuIiwiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuY29uc3QgZmluZENvbW1lbnRDb250ZW50ID0gKGNvbW1lbnQsIGlkKSA9PiB7XG4gIGNvbnN0IHZpc2l0ZWQgPSBuZXcgU2V0KClcbiAgY29uc3QgcSA9IFtjb21tZW50XVxuICB3aGlsZSAocS5sZW5ndGggIT09IDApIHtcbiAgICBjb25zdCBjdXJyTm9kZSA9IHEuc2hpZnQoKVxuICAgIHZpc2l0ZWQuYWRkKGN1cnJOb2RlLmRhdGEuaWQpXG4gICAgaWYgKGN1cnJOb2RlLmRhdGEuaWQgPT09IGlkKSByZXR1cm4gY3Vyck5vZGUuZGF0YS5jb250ZW50XG4gICAgY3Vyck5vZGUuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGlmICghdmlzaXRlZC5oYXMoY2hpbGQuZGF0YS5pZCkpIHEucHVzaChjaGlsZClcbiAgICB9KVxuICB9XG4gIHJldHVybiAnJ1xufVxuXG5leHBvcnQgZGVmYXVsdCAodG9waWNJZCwgc3VidG9waWNJZCwgbW9kYWxQcm9wcykgPT4ge1xuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3IoKHMpID0+IHMuc2Vzc2lvbi5jdXJyZW50VXNlcilcbiAgY29uc3QgdG9waWMgPSB1c2VTZWxlY3RvcigocykgPT4gcy50b3BpY3MubGlzdCk/LmZpbmQoKHQpID0+IHQuaWQgPT09IHRvcGljSWQpXG4gIGNvbnN0IGNvbW1lbnQgPSB1c2VTZWxlY3RvcigocykgPT4gcy5jb21tZW50cy5saXN0KT8uZmluZChcbiAgICAoYykgPT4gYy5kYXRhPy5pZCA9PT0gbW9kYWxQcm9wcz8ucm9vdFBhcmVudENvbW1lbnRJZCB8fCBtb2RhbFByb3BzPy5jb21tZW50SWQsXG4gIClcbiAgY29uc3QgdHJpYnVuYWxDb21tZW50ID0gdXNlU2VsZWN0b3IoKHMpID0+IHMudHJpYnVuYWxDb21tZW50cy5saXN0KT8uZmluZChcbiAgICAoYykgPT4gYy5kYXRhPy5pZCA9PT0gbW9kYWxQcm9wcz8ucm9vdFBhcmVudENvbW1lbnRJZCxcbiAgKVxuXG4gIGNvbnN0IHsgY3JlYXRlZEJ5LCBjcmVhdGVkQnlJY29uU3JjLCBjcmVhdGVkQXQgfSA9IGNvbW1lbnQ/LmRhdGEgfHwgdHJpYnVuYWxDb21tZW50Py5kYXRhIHx8IHt9XG4gIHJldHVybiB1c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBjb21tZW50Q29udGVudCA9IG1vZGFsUHJvcHM/LnJlcGx5VHlwZSAhPT0gJ1JFUExZX0ZST01fVE9QSUMnXG4gICAgICA/IGZpbmRDb21tZW50Q29udGVudChjb21tZW50IHx8IHRyaWJ1bmFsQ29tbWVudCwgbW9kYWxQcm9wcz8uY29tbWVudElkKSA6IHRvcGljPy5kZXNjcmlwdGlvblxuICAgIHJldHVybiB7XG4gICAgICBzdWJ0b3BpY0lkLFxuICAgICAgY3JlYXRlZEJ5SWNvblNyYzogY3JlYXRlZEJ5SWNvblNyYyB8fCB0b3BpYz8uY3JlYXRlZEJ5SWNvblNyYyxcbiAgICAgIHVzZXJuYW1lOiB1c2VyPy51c2VybmFtZSxcbiAgICAgIGNyZWF0ZWRCeTogY3JlYXRlZEJ5IHx8IHRvcGljPy5jcmVhdGVkQnkgfHwgdHJpYnVuYWxDb21tZW50Py5jcmVhdGVkQnksXG4gICAgICB0aW1lOiBjcmVhdGVkQXQgfHwgdG9waWM/LmNyZWF0ZWRBdCxcbiAgICAgIGh0bWxDb250ZW50OiBjb21tZW50Q29udGVudCxcbiAgICAgIHJvb3RQYXJlbnRDb21tZW50SWQ6IG1vZGFsUHJvcHM/LnJvb3RQYXJlbnRDb21tZW50SWQgfHwgbnVsbCxcbiAgICAgIHR5cGU6IG1vZGFsUHJvcHM/LnJlcGx5VHlwZSxcbiAgICB9XG4gIH0sIFt0b3BpYywgdXNlciwgY29tbWVudCwgc3VidG9waWNJZCwgbW9kYWxQcm9wc10pXG59XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSdcblxuaW1wb3J0IHVzZUJpbmREaXNwYXRjaCBmcm9tICcuLi8uLi9ob29rcy9yZWR1eC91c2VCaW5kRGlzcGF0Y2gnXG5pbXBvcnQgY29tbWVudEFjdGlvbnMgZnJvbSAnLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy9jb21tZW50cydcbmltcG9ydCB0cmlidW5hbENvbW1lbnRBY3Rpb25zIGZyb20gJy4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvdHJpYnVuYWxfY29tbWVudHMnXG5cbmltcG9ydCB7IGNoZWNrVG94aWNpdHkgfSBmcm9tICcuLi8uLi8uLi9hcGkvdjEvY29tbWVudHMvY29tbWVudHNfYXBpX3V0aWwnXG5pbXBvcnQgZGVsYXkgZnJvbSAnLi4vLi4vLi4vZ2VuZXJpYy9kZWxheSdcbmltcG9ydCB1c2VEZXRlY3RDdXJyZW50UGFnZSBmcm9tICcuLi8uLi9ob29rcy9yb3V0aW5nL3VzZURldGVjdEN1cnJlbnRQYWdlJ1xuXG5leHBvcnQgZGVmYXVsdCAoY29tcFN0YXRlLCBjb250ZW50LCByYXdUZXh0LCBtb2RhbFByb3BzLCBjb250ZW50SWQsIHRvcGljSWQpID0+IHtcbiAgY29uc3QgeyBpc09uVHJpYnVuYWxQYWdlOiBpc1RyaWJ1bmFsQ29tbWVudCB9ID0gdXNlRGV0ZWN0Q3VycmVudFBhZ2UoKVxuXG4gIGNvbnN0IHtcbiAgICB0cmlidW5hbENvbW1lbnRVbmRlclJldmlld0lkLFxuICAgIGNvbW1lbnRJZCxcbiAgfSA9IG1vZGFsUHJvcHMgfHwge31cblxuICBjb25zdCBpc1BhcmVudFRyaWJ1bmFsQ29tbWVudFVuZGVyUmV2aWV3ID0gaXNUcmlidW5hbENvbW1lbnRcbiAgJiYgdHJpYnVuYWxDb21tZW50VW5kZXJSZXZpZXdJZCA9PT0gY29tbWVudElkXG5cbiAgY29uc3QgcGFyZW50SWQgPSBpc1BhcmVudFRyaWJ1bmFsQ29tbWVudFVuZGVyUmV2aWV3ID8gbnVsbCA6IGNvbW1lbnRJZCB8fCBudWxsXG4gIGNvbnN0IHJvb3RJZCA9IGlzUGFyZW50VHJpYnVuYWxDb21tZW50VW5kZXJSZXZpZXcgPyBudWxsIDogY29tcFN0YXRlLnJvb3RQYXJlbnRDb21tZW50SWRcblxuICBjb25zdCB7XG4gICAgY3JlYXRlQ29tbWVudCxcbiAgICBjcmVhdGVUcmlidW5hbENvbW1lbnQsXG4gIH0gPSB1c2VCaW5kRGlzcGF0Y2goY29tbWVudEFjdGlvbnMsIHRyaWJ1bmFsQ29tbWVudEFjdGlvbnMpXG5cbiAgcmV0dXJuIHVzZUNhbGxiYWNrKCh2YWx1ZXMsIHsgc2V0U3VibWl0dGluZywgcmVzZXRGb3JtIH0pID0+IHtcbiAgICB0b2FzdC5wcm9taXNlKFxuICAgICAgUHJvbWlzZS5hbGwoW2RlbGF5KDE1MDApLCBjaGVja1RveGljaXR5KHsgY29udGVudDogcmF3VGV4dCB9KV0pLFxuICAgICAge1xuICAgICAgICBwZW5kaW5nOiAnQW5hbHl6aW5nIENvbW1lbnQuLi4nLFxuICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgcmVuZGVyKHsgZGF0YSB9KSB7XG4gICAgICAgICAgICBjb25zdCB0b3hpY2l0eVNjb3JlID0gZGF0YVsxXS5kYXRhLlNFVkVSRV9UT1hJQ0lUWVxuICAgICAgICAgICAgaWYgKHRveGljaXR5U2NvcmUgPCAwLjYpIHJldHVybiAnVGhhbmtzIEZvciBCZWluZyBDaXZpbCEnXG4gICAgICAgICAgICBpZiAodG94aWNpdHlTY29yZSA+PSAwLjYgJiYgdG94aWNpdHlTY29yZSA8PSAwLjkpIHJldHVybiAnVGhhbmtzIGZvciBiZWluZyBzZW1pLWNpdmlsLiBNYXliZSBzYXkgdGhpbmdzIGEgYml0IG5pY2VyJ1xuICAgICAgICAgICAgcmV0dXJuICdZb3UgYXJlIGJlaW5nIHRveGljIDooIFxcbiBZb3VyIGNvbW1lbnQgd2lsbCBiZSBmbGFnZ2VkJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgLy8gb3RoZXIgb3B0aW9uc1xuICAgICAgICAgIGljb246ICfwn5+iJyxcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6ICdQcm9taXNlIHJlamVjdGVkIPCfpK8nLFxuICAgICAgfSxcbiAgICApLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGNvbnN0IHRveGljaXR5U2NvcmUgPSBkYXRhWzFdLmRhdGEuU0VWRVJFX1RPWElDSVRZXG4gICAgICBsZXQgdG94aWNpdHlTdGF0dXNcbiAgICAgIGlmICh0b3hpY2l0eVNjb3JlIDwgMC42KSB0b3hpY2l0eVN0YXR1cyA9ICdOT1RfVE9YSUMnXG4gICAgICBpZiAodG94aWNpdHlTY29yZSA+IDAuOSkgdG94aWNpdHlTdGF0dXMgPSAnVE9YSUMnXG4gICAgICBjb25zdCBjb21tZW50ID0ge1xuICAgICAgICAuLi52YWx1ZXMsXG4gICAgICAgIGNvbnRlbnQsXG4gICAgICAgIG1lbWVGbGFnOiBmYWxzZSxcbiAgICAgICAgcGFyZW50SWQsXG4gICAgICAgIGNvbnRlbnRJZCxcbiAgICAgICAgc3VidG9waWNJZDogY29udGVudElkLFxuICAgICAgICB0b3BpY0lkLFxuICAgICAgICBjcmVhdGVkQnk6IGNvbXBTdGF0ZS51c2VybmFtZSxcbiAgICAgICAgcm9vdElkLFxuICAgICAgICByYXdUZXh0LFxuICAgICAgICB0b3hpY2l0eVN0YXR1cyxcbiAgICAgIH1cbiAgICAgIHJldHVybiBpc1RyaWJ1bmFsQ29tbWVudCA/IGNyZWF0ZVRyaWJ1bmFsQ29tbWVudChjb21tZW50KSA6IGNyZWF0ZUNvbW1lbnQoY29tbWVudClcbiAgICB9KVxuXG4gICAgc2V0U3VibWl0dGluZyhmYWxzZSlcbiAgICByZXNldEZvcm0oe30pXG4gIH0sIFtcbiAgICBjb21wU3RhdGUsXG4gICAgY29udGVudCxcbiAgICByYXdUZXh0LFxuICAgIG1vZGFsUHJvcHMudHJpYnVuYWxDb21tZW50VW5kZXJSZXZpZXdJZCxcbiAgICBtb2RhbFByb3BzLmNvbW1lbnRJZCxcbiAgICBjb250ZW50SWQsXG4gIF0pXG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9sYWJlbC1oYXMtYXNzb2NpYXRlZC1jb250cm9sICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IENvbnRhaW5lciwgSW5wdXQgfSBmcm9tICcuL1N0eWxlL2luZGV4J1xuXG5jb25zdCBBbmltYXRlZENoZWNrbWFyayA9ICh7IHRveGljaXR5U2NvcmUgfSkgPT4ge1xuICBsZXQgY29sb3JcbiAgbGV0IHRleHRcbiAgaWYgKHRveGljaXR5U2NvcmUgPCAwLjYpIHsgY29sb3IgPSAnZ3JlZW4nOyB0ZXh0ID0gJ0dyZWF0IScgfVxuICBpZiAodG94aWNpdHlTY29yZSA+PSAwLjYgJiYgdG94aWNpdHlTY29yZSA8PSAwLjkpIHsgY29sb3IgPSAndmFyKC0tbS1kYW5nZXItY29sb3IpJzsgdGV4dCA9ICdZb3UgYXJlIE9LIGJ1dCBnZXR0aW5nIGNsb3NlJyB9XG4gIGlmICh0b3hpY2l0eVNjb3JlID4gMC45KSB7IGNvbG9yID0gJ3JlZCc7IHRleHQgPSAnWW91IGFyZSBiZWluZyB0b3hpYycgfVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Q29udGFpbmVyIGNvbG9yPXtjb2xvcn0+XG4gICAgICAgIDxJbnB1dCByZWFkT25seSBkaXNhYmxlZCBjaGVja2VkPXtCb29sZWFuKHRveGljaXR5U2NvcmUpfSB0eXBlPVwiY2hlY2tib3hcIiAvPlxuICAgICAgICA8bGFiZWwgLz5cbiAgICAgICAgPHN2ZyB3aWR0aD1cIjE1XCIgaGVpZ2h0PVwiMTRcIiB2aWV3Qm94PVwiMCAwIDE1IDE0XCIgZmlsbD1cIm5vbmVcIj5cbiAgICAgICAgICA8cGF0aCBkPVwiTTIgOC4zNjM2NEw2LjIzMDc3IDEyTDEzIDJcIiAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICAge3RveGljaXR5U2NvcmUgJiYgPHNwYW4gc3R5bGU9e3sgbWFyZ2luTGVmdDogJzAuNXZ3JyB9fT57dGV4dH08L3NwYW4+fVxuICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiIHN0eWxlPXt7IHdpZHRoOiAwLCBoZWlnaHQ6IDAgfX0+XG4gICAgICAgIDxkZWZzPlxuICAgICAgICAgIDxmaWx0ZXIgaWQ9XCJnb29cIj5cbiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBpbj1cIlNvdXJjZUdyYXBoaWNcIiBzdGREZXZpYXRpb249XCI0XCIgcmVzdWx0PVwiYmx1clwiIC8+XG4gICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCBpbj1cImJsdXJcIiBtb2RlPVwibWF0cml4XCIgdmFsdWVzPVwiMSAwIDAgMCAwICAwIDEgMCAwIDAgIDAgMCAxIDAgMCAgMCAwIDAgMjIgLTdcIiByZXN1bHQ9XCJnb29cIiAvPlxuICAgICAgICAgICAgPGZlQmxlbmQgaW49XCJTb3VyY2VHcmFwaGljXCIgaW4yPVwiZ29vXCIgLz5cbiAgICAgICAgICA8L2ZpbHRlcj5cbiAgICAgICAgPC9kZWZzPlxuICAgICAgPC9zdmc+XG4gICAgPC8+XG4gIClcbn1cbmV4cG9ydCBkZWZhdWx0IEFuaW1hdGVkQ2hlY2ttYXJrXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5pbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG4vLyBjb25zdCBwcmltYXJ5ID0gJyM0ZDI3MWE4OCdcblxuY29uc3Qgc3BsYXNoID0gKHByaW1hcnkpID0+IGtleWZyYW1lc2BcbiAgNDAlIHtcbiAgICBiYWNrZ3JvdW5kOiAke3ByaW1hcnl9O1xuICAgIGJveC1zaGFkb3c6IDAgLTE4cHggMCAtOHB4ICR7cHJpbWFyeX0sIDE2cHggLThweCAwIC04cHggJHtwcmltYXJ5fSwgMTZweCA4cHggMCAtOHB4ICR7cHJpbWFyeX0sIDAgMThweCAwIC04cHggJHtwcmltYXJ5fSwgLTE2cHggOHB4IDAgLThweCAke3ByaW1hcnl9LCAtMTZweCAtOHB4IDAgLThweCAke3ByaW1hcnl9O1xuICB9XG5cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZDogJHtwcmltYXJ5fTtcbiAgICBib3gtc2hhZG93OiAwIC0zNnB4IDAgLTEwcHggdHJhbnNwYXJlbnQsIDMycHggLTE2cHggMCAtMTBweCB0cmFuc3BhcmVudCwgMzJweCAxNnB4IDAgLTEwcHggdHJhbnNwYXJlbnQsIDAgMzZweCAwIC0xMHB4IHRyYW5zcGFyZW50LCAtMzJweCAxNnB4IDAgLTEwcHggdHJhbnNwYXJlbnQsIC0zMnB4IC0xNnB4IDAgLTEwcHggdHJhbnNwYXJlbnQ7XG4gIH1cbiAgXG5cbmBcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZCgnZGl2JylgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy5jb2xvcn07XG4gIC8qIHRyYW5zZm9ybTogc2NhbGUoMyk7ICovXG4gIHNwYW4ge1xuICAgIG1hcmdpbi1sZWZ0OiAuNXZ3O1xuICB9XG4gIGlucHV0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNiZmJmYzA7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHotaW5kZXg6IDk5OTk5OTk5OTk7XG5cbiAgfVxuXG4gIGxhYmVsIHtcbiAgICB6LWluZGV4OiA5OTk5OTk5OTk7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICAtd2Via2l0LWZpbHRlcjogdXJsKCNnb28pO1xuICAgIGZpbHRlcjogdXJsKCNnb28pO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xuICAgIC8qIHBvaW50ZXItZXZlbnRzOiBub25lOyAqL1xuICB9XG5cbiAgc3ZnIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1cHg7XG4gICAgbGVmdDogNHB4O1xuICAgIHotaW5kZXg6IDk5OTk5OTk5OTk5O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHBhdGgge1xuICAgICAgc3Ryb2tlOiB3aGl0ZTtcbiAgICAgIHN0cm9rZS13aWR0aDogMztcbiAgICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbiAgICAgIHN0cm9rZS1saW5lam9pbjogcm91bmQ7XG4gICAgICBzdHJva2UtZGFzaGFycmF5OiAxOTtcbiAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAxOTtcbiAgICAgIHRyYW5zaXRpb246IHN0cm9rZS1kYXNob2Zmc2V0IC4zcyBlYXNlO1xuICAgICAgdHJhbnNpdGlvbi1kZWxheTogLjJzO1xuICAgIH1cbiAgfVxuXG4gIGlucHV0OmNoZWNrZWQge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxuICBpbnB1dDpjaGVja2VkICsgbGFiZWwge1xuICAgICAgYW5pbWF0aW9uOiAkeyhwcm9wcykgPT4gc3BsYXNoKHByb3BzLmNvbG9yKX0gLjZzIGVhc2UgZm9yd2FyZHM7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAkeyhwcm9wcykgPT4gcHJvcHMuY29sb3J9O1xuXG4gICAgICArIHN2ZyBwYXRoIHtcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDBcbiAgICAgIH1cbiAgfVxuXG5gXG5cbmV4cG9ydCBjb25zdCBJbnB1dCA9IHN0eWxlZCgnaW5wdXQnKWBcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luOiAwO1xuICAgICY6Zm9jdXMge1xuICAgICAgb3V0bGluZTogMDtcbiAgICB9XG5gXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9sYWJlbC1oYXMtYXNzb2NpYXRlZC1jb250cm9sICovXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9wcm9wLXR5cGVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtcHJvcHMtbm8tc3ByZWFkaW5nICovXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEVycm9yTWVzc2FnZSB9IGZyb20gJ2Zvcm1paydcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBGYWRlIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuaW1wb3J0IHsgU3R5bGVkU2VsZWN0LCBMYWJlbCwgQ29udGFpbmVyIH0gZnJvbSAnLi9TdHlsZSdcbmltcG9ydCBFcnJvciBmcm9tICcuLi9FcnJvck1lc3NhZ2UvSW5kZXgnXG5cbmNvbnN0IFNlbGVjdCA9ICh7XG4gIHdpZHRoLCBmaWVsZCwgZm9ybSwgcGxhY2Vob2xkZXIsIHNldEZpZWxkVmFsdWUsIHNldEZpZWxkVG91Y2hlZCwgLi4ucHJvcHNcbn0pID0+IHtcbiAgY29uc3QgW29wZW4sIGlzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgbWV0YURhdGEgPSBmb3JtLmdldEZpZWxkTWV0YShmaWVsZC5uYW1lKVxuICBjb25zdCBzaG93RXJyb3IgPSBtZXRhRGF0YS5lcnJvciAmJiBtZXRhRGF0YS50b3VjaGVkXG4gIGNvbnN0IGVudW1zID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5lbnVtcy50b3BpY0NhdGVnb3JpZXMpXG5cbiAgY29uc3Qgb25DaGFuZ2UgPSB1c2VDYWxsYmFjaygoZSwgc2V0RmllbGQpID0+IHtcbiAgICBzZXRGaWVsZChmaWVsZC5uYW1lLCBlLnRhcmdldC52YWx1ZSlcbiAgICBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSlcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuXG4gICAgICA8RmFkZSBpbj17b3Blbn0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPExhYmVsIGh0bWxGb3I9e2ZpZWxkLm5hbWV9PlNlbGVjdCBBIENhdGVnb3J5PC9MYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0ZhZGU+XG5cbiAgICAgIDxTdHlsZWRTZWxlY3RcbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgIHsuLi5maWVsZH1cbiAgICAgICAgaWQ9e2ZpZWxkLm5hbWV9XG4gICAgICAgIHNob3dFcnJvcj17c2hvd0Vycm9yfVxuICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2UoZSwgc2V0RmllbGRWYWx1ZSl9XG4gICAgICAgIG9uRm9jdXM9eygpID0+IGlzT3Blbih0cnVlKX1cbiAgICAgICAgb25CbHVyPXsoKSA9PiBpc09wZW4oZmFsc2UpfVxuICAgICAgPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+U2VsZWN0IEEgQ2F0ZWdvcnk8L29wdGlvbj5cbiAgICAgICAge1xuICAgICAgICBlbnVtcz8ubWFwKCh2YWwpID0+IDxvcHRpb24ga2V5PXt2YWx9IHZhbHVlPXt2YWx9Pnt2YWx9PC9vcHRpb24+KVxuICAgICAgfVxuICAgICAgPC9TdHlsZWRTZWxlY3Q+XG4gICAgICA8RXJyb3JNZXNzYWdlIHdpZHRoPXt3aWR0aH0gbmFtZT17ZmllbGQubmFtZX0gY29tcG9uZW50PXtFcnJvcn0gLz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogYXV0bztcbiAgZm9udC1mYW1pbHk6ICdVYnVudHUnLCBzYW5zLXNlcmlmO1xuICAuZmFkZSB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiA4NSU7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IExhYmVsID0gc3R5bGVkKCdsYWJlbCcpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGNvbG9yOiB2YXIoLS1tLXRyaW0tY29sb3IpO1xuICBmb250LXNpemU6IC41ZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG5gXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRTZWxlY3QgPSBzdHlsZWQoJ3NlbGVjdCcpYFxuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAuNWVtO1xuICBjb2xvcjogYmxhY2s7XG4gIHdpZHRoOiAkeyhwcm9wcykgPT4gcHJvcHMud2lkdGggfHwgJzMwJSd9O1xuICBoZWlnaHQ6IDMuNWVtO1xuICBmb250LXNpemU6IC44ZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogdmFyKC0taW5wdXRMaW5lSGVpZ2h0KTtcbiAgb3V0bGluZTpub25lO1xuICBiYWNrZ3JvdW5kOiAjRTVFNUU1O1xuICBib3JkZXI6ICR7KHByb3BzKSA9PiAocHJvcHMuc2hvd0Vycm9yID8gJzFweCBzb2xpZCB2YXIoLS1tLWRhbmdlci1jb2xvciknIDogJzFweCBzb2xpZCB2YXIoLS1iZyknKX07XG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyB2YXIoLS10cmFuc2l0aW9uRHVyYXRpb24pO1xuXG4gIDo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiB2YXIoLS1tLXRyaW0tY29sb3IpO1xuICB9XG4gIDpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3gtc2hhZG93OiAgNXB4IDVweCA4cHggI2ZmZmZmZixcbiAgICAgICAgICAgICAtNXB4IC01cHggOHB4ICNmZmZmZmY7XG4gIH1cblxuICA6bm90KDpwbGFjZWhvbGRlci1zaG93bikgKyAke0xhYmVsfSxcbiAgOmZvY3VzOm5vdCg6cGxhY2Vob2xkZXItc2hvd24pICsgJHtMYWJlbH0ge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgei1pbmRleDogMTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTpcbiAgICAgIHRyYW5zbGF0ZTNkKDAsIHZhcigtLWxhYmVsVHJhbnNmb3JtZWRQb3NZKSwgMClcbiAgICAgIHNjYWxlKHZhcigtLWxhYmVsU2NhbGVGYWN0b3IpKTtcbiAgICB0cmFuc2l0aW9uOlxuICAgICAgdHJhbnNmb3JtIHZhcigtLWlucHV0VHJhbnNpdGlvbkR1cmF0aW9uKSxcbiAgICAgIHZpc2liaWxpdHkgMG1zLFxuICAgICAgei1pbmRleCAwbXM7XG5cbiAgb3B0aW9uIHtcbiAgICBjb2xvcjogdmFyKC0tbS10cmltLWNvbG9yKTtcbiAgICBmb250LXNpemU6IC44ZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG5gXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgT3ZlcmxheSA9IHN0eWxlZCgnZGl2JylgXG4gIHotaW5kZXg6IDk5OTk5OTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIG9wYWNpdHk6IDAuMTtcbmBcbiIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLXRoaXMtaW4tc2ZjICovXG4vKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9jb250cm9sLWhhcy1hc3NvY2lhdGVkLWxhYmVsICovXG5pbXBvcnQgUmVhY3QsIHtcbiAgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZixcbn0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RRdWlsbCBmcm9tICdyZWFjdC1xdWlsbCdcblxuaW1wb3J0ICdyZWFjdC1xdWlsbC9kaXN0L3F1aWxsLnNub3cuY3NzJ1xuXG5pbXBvcnQgeyBDb250YWluZXIsIEVtb2ppQnV0dG9uLCBFbW9qaUNvbnRhaW5lciB9IGZyb20gJy4vU3R5bGUnXG5pbXBvcnQgeyBPdmVybGF5IH0gZnJvbSAnLi4vT3ZlcmxheS9zdHlsZSdcblxuY29uc3QgUmljaFRleHRFZGl0b3IgPSAoe1xuICBjb250ZW50LCBzZXRDb250ZW50LCBzZXRUb3hpY2l0eVNjb3JlLFxufSkgPT4ge1xuICBjb25zdCBbaXNIaWRkZW4sIHNldElzSGlkZGVuXSA9IHVzZVN0YXRlKHRydWUpXG5cbiAgY29uc3QgbW9kdWxlcyA9IHtcbiAgICB0b29sYmFyOiB7XG4gICAgICBjb250YWluZXI6ICcjdG9vbGJhcicsXG4gICAgfSxcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZU9uQ2hhbmdlID0gdXNlQ2FsbGJhY2soKGN1cnJDb250ZW50LCBkZWx0YSwgc291cmNlLCBlZGl0b3IpID0+IHtcbiAgICBzZXRDb250ZW50KHtcbiAgICAgIHJhd0hUTUw6IGVkaXRvci5nZXRIVE1MKCksXG4gICAgICBjb250ZW50OiBlZGl0b3IuZ2V0Q29udGVudHMoKSxcbiAgICAgIHJhd1RleHQ6IGVkaXRvci5nZXRUZXh0KCksXG4gICAgfSlcbiAgICBpZiAoc2V0VG94aWNpdHlTY29yZSkgc2V0VG94aWNpdHlTY29yZShudWxsKVxuICB9LCBbXSlcblxuICBjb25zdCBwaWNrZXJSZWYgPSB1c2VSZWYobnVsbClcbiAgY29uc3QgcXVpbGxSZWYgPSB1c2VSZWYobnVsbClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwaWNrZXJSZWYpIHtcbiAgICAgIGNvbnN0IGVtb2ppUGlja2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndW5pY29kZS1lbW9qaS1waWNrZXInKVxuICAgICAgZW1vamlQaWNrZXIuYWRkRXZlbnRMaXN0ZW5lcignZW1vamktcGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAocXVpbGxSZWYuY3VycmVudCkge1xuICAgICAgICAgIGNvbnN0IHsgZWRpdG9yIH0gPSBxdWlsbFJlZi5jdXJyZW50XG4gICAgICAgICAgY29uc3QgY3Vyc29yUG9zaXRpb24gPSBlZGl0b3IuZ2V0U2VsZWN0aW9uKCk/LmluZGV4IHx8IGVkaXRvci5nZXRMZW5ndGgoKSAtIDFcbiAgICAgICAgICBlZGl0b3IuaW5zZXJ0VGV4dChjdXJzb3JQb3NpdGlvbiwgYCR7ZXZlbnQuZGV0YWlsLmVtb2ppfWApXG4gICAgICAgICAgZWRpdG9yLnNldFNlbGVjdGlvbihjdXJzb3JQb3NpdGlvbiArIDIpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9LCBbcGlja2VyUmVmLCBxdWlsbFJlZl0pXG5cbiAgY29uc3QgZm9ybWF0cyA9IFsnYm9sZCcsICdpdGFsaWMnLCAndW5kZXJsaW5lJywgJ3N0cmlrZScsICdibG9ja3F1b3RlJywgJ2NsZWFuJ11cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cInRleHQtZWRpdG9yXCI+XG4gICAgICA8T3ZlcmxheSBoaWRkZW49e2lzSGlkZGVufSBvbkNsaWNrPXsoKSA9PiBzZXRJc0hpZGRlbigocHJldikgPT4gIXByZXYpfSAvPlxuICAgICAgPEN1c3RvbVRvb2xiYXIgc2V0SXNIaWRkZW49e3NldElzSGlkZGVufSBwaWNrZXJSZWY9e3BpY2tlclJlZn0gaXNIaWRkZW49e2lzSGlkZGVufSAvPlxuICAgICAgPFJlYWN0UXVpbGxcbiAgICAgICAgcmVmPXtxdWlsbFJlZn1cbiAgICAgICAgdGhlbWU9XCJzbm93XCJcbiAgICAgICAgdmFsdWU9e2NvbnRlbnR9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cbiAgICAgICAgbW9kdWxlcz17bW9kdWxlc31cbiAgICAgICAgZm9ybWF0cz17Zm9ybWF0c31cbiAgICAgICAgcGxhY2Vob2xkZXI9XCJTYXkgc29tZXRoaW5nLi4uXCJcbiAgICAgIC8+XG4gICAgPC9Db250YWluZXI+XG4gIClcbn1cblxuY29uc3QgQ3VzdG9tQnV0dG9uID0gKHsgaXNIaWRkZW4sIHBpY2tlclJlZiwgc2V0SXNIaWRkZW4gfSkgPT4gKFxuICA8PlxuICAgIDxzcGFuXG4gICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc0hpZGRlbigocHJldikgPT4gIXByZXYpfVxuICAgICAgb25LZXlEb3duPXsoKSA9PiBzZXRJc0hpZGRlbigocHJldikgPT4gIXByZXYpfVxuICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICB0YWJJbmRleD17MH1cbiAgICA+XG4gICAgICDwn5mCXG4gICAgPC9zcGFuPlxuICAgIDxFbW9qaUNvbnRhaW5lciBoaWRkZW49e2lzSGlkZGVufT5cbiAgICAgIDx1bmljb2RlLWVtb2ppLXBpY2tlciByZWY9e3BpY2tlclJlZn0gdmVyc2lvbj1cIjE0LjBcIiAvPlxuICAgIDwvRW1vamlDb250YWluZXI+XG4gIDwvPlxuKVxuXG5jb25zdCBDdXN0b21Ub29sYmFyID0gKHsgc2V0SXNIaWRkZW4sIGlzSGlkZGVuLCBwaWNrZXJSZWYgfSkgPT4gKFxuICA8ZGl2IGlkPVwidG9vbGJhclwiIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyB9fT5cbiAgICA8ZGl2PlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwicWwtYm9sZFwiIC8+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJxbC1pdGFsaWNcIiAvPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwicWwtdW5kZXJsaW5lXCIgLz5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cInFsLXN0cmlrZVwiIC8+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJxbC1ibG9ja3F1b3RlXCIgLz5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cInFsLWNsZWFuXCIgLz5cblxuICAgIDwvZGl2PlxuXG4gICAgPEVtb2ppQnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJxbC1pbnNlcnRFbW9qaVwiPlxuICAgICAgPEN1c3RvbUJ1dHRvbiBwaWNrZXJSZWY9e3BpY2tlclJlZn0gaXNIaWRkZW49e2lzSGlkZGVufSBzZXRJc0hpZGRlbj17c2V0SXNIaWRkZW59IC8+XG4gICAgPC9FbW9qaUJ1dHRvbj5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IFJpY2hUZXh0RWRpdG9yXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IC41ZW07XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgbWluLXdpZHRoOiA5MiU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLnFsLXNub3cucWwtdG9vbGJhcjphZnRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAucWwtdG9vbGJhciB7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogLjVlbTtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogLjVlbTtcbiAgfVxuXG4gIC5xbC1jb250YWluZXIge1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IC41ZW07XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IC41ZW07XG4gIH1cblxuICAjdG9vbGJhciB7XG4gICAgYnV0dG9uOmFmdGVyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5cbmBcblxuZXhwb3J0IGNvbnN0IEVtb2ppQnV0dG9uID0gc3R5bGVkKCdidXR0b24nKWBcbiAgcG9zaXRpb246IHJlbGF0aXZlIDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAmOmFmdGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbmBcblxuZXhwb3J0IGNvbnN0IEVtb2ppQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWAgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHotaW5kZXg6IDk5OTk5OTk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC05MCUsIC05MCUpIHNjYWxlKC44KTtcbmBcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtYm9vdHN0cmFwL01vZGFsJ1xuaW1wb3J0IHsgQ29sbGFwc2UsIEZhZGUgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5cbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBGb3JtaWssIEZpZWxkIH0gZnJvbSAnZm9ybWlrJ1xuXG5pbXBvcnQgdXNlQmluZERpc3BhdGNoIGZyb20gJy4uL2hvb2tzL3JlZHV4L3VzZUJpbmREaXNwYXRjaCdcbmltcG9ydCB1c2VIYW5kbGVTdWJtaXQgZnJvbSAnLi9ob29rcy91c2VIYW5kbGVTdWJtaXQnXG5pbXBvcnQgdXNlR2V0TGlua01ldGFEYXRhT25CbHVyIGZyb20gJy4vaG9va3MvdXNlR2V0TGlua01ldGFEYXRhT25CbHVyJ1xuXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi4vQ29tbW9uQ29tcG9uZW50cy9Gb3JtL0lucHV0L0luZGV4J1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9Db21tb25Db21wb25lbnRzL0J1dHRvbi9JbmRleCdcblxuaW1wb3J0IHVpQWN0aW9ucyBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zL3VpJ1xuaW1wb3J0IHRvcGljQWN0aW9ucyBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zL3RvcGljcydcblxuaW1wb3J0IFRoZW1lVG9vbHRpcCBmcm9tICcuLi9Db21tb25Db21wb25lbnRzL1Rvb2x0aXAvSW5kZXgnXG5pbXBvcnQgVXBsb2FkTWVkaWFDb250YWluZXIgZnJvbSAnLi4vVG9waWNGb3JtL2NvbXBvbmVudHMvVXBsb2FkTWVkaWEvSW5kZXgnXG5pbXBvcnQgRGlzcGxheU1lZGlhIGZyb20gJy4uL1RvcGljRm9ybS9jb21wb25lbnRzL0Rpc3BsYXlNZWRpYS9JbmRleCdcblxuaW1wb3J0IHtcbiAgRm9ybUNvbnRhaW5lciwgTGVmdCwgUmlnaHQsIEZsZXhEaXYsIENvbnRhaW5lciwgSW5wdXRzQ29udGFpbmVyLCBBcnJvdywgTGluZSxcbn0gZnJvbSAnLi9TdHlsZSdcbmltcG9ydCB7IERvd25BcnJvd0NpcmNsZVN2ZyB9IGZyb20gJy4uLy4uL3N2Z3Mvc3ZncydcbmltcG9ydCBSaWNoVGV4dEVkaXRvciBmcm9tICcuLi9Db21tb25Db21wb25lbnRzL1JpY2hUZXh0RWRpdG9yL0luZGV4J1xuXG5jb25zdCB1dWlkUmVnRXggPSBuZXcgUmVnRXhwKC9cXGJbMC05YS1mXXs4fVxcYi1bMC05YS1mXXs0fS1bMC05YS1mXXs0fS1bMC05YS1mXXs0fS1cXGJbMC05YS1mXXsxMn1cXGIvZylcblxuY29uc3QgQ3JlYXRlU3ViVG9waWNGb3JtID0gKCkgPT4ge1xuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VMb2NhdGlvbigpXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbaW1nRmlsZSwgc2V0SW1nRmlsZV0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbdmlkZW9GaWxlLCBzZXRWaWRlb0ZpbGVdID0gdXNlU3RhdGUobnVsbClcblxuICBjb25zdCBbcm90YXRlLCBzZXRSb3RhdGVdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgW2NvbnRlbnQsIHNldENvbnRlbnRdID0gdXNlU3RhdGUoJycpXG4gIC8vIGNvbnN0IHZhbGlkYXRvciA9IHVzZUNvbmZpZ0Zvcm1FcnJvcnMoRVJST1JTKVxuICBjb25zdCBbdG9waWNJZF0gPSBwYXRobmFtZS5tYXRjaCh1dWlkUmVnRXgpXG5cbiAgY29uc3QgeyBtZXRhRGF0YSwgZ2V0TGlua01ldGFEYXRhT25CbHVyIH0gPSB1c2VHZXRMaW5rTWV0YURhdGFPbkJsdXIoKVxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSB1c2VIYW5kbGVTdWJtaXQobWV0YURhdGEsIHRvcGljSWQpXG5cbiAgY29uc3QgeyBnZXRUb3BpYywgY2xvc2VNb2RhbCB9ID0gdXNlQmluZERpc3BhdGNoKFxuICAgIHVpQWN0aW9ucywgdG9waWNBY3Rpb25zLFxuICApXG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3RvcigocykgPT4gcy5zZXNzaW9uLmN1cnJlbnRVc2VyKVxuICBjb25zdCB0b3BpYyA9IHVzZVNlbGVjdG9yKChzKSA9PiBzLnRvcGljcy5saXN0KT8uZmluZCgodCkgPT4gdC5pZCA9PT0gdG9waWNJZClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldFRvcGljKHRvcGljSWQsIHVzZXI/LmlkKVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8Rm9ybWlrXG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e3sgdGl0bGU6ICcnIH19XG4gICAgICAgIHZhbGlkYXRlPXsodmFsdWVzKSA9PiB7XG4gICAgICAgICAgY29uc3QgZXJyb3JzID0ge31cbiAgICAgICAgICBpZiAoIXZhbHVlcy50aXRsZSkge1xuICAgICAgICAgICAgZXJyb3JzLnRpdGxlID0gJ1RpdGxlIElzIFJlcXVpcmVkJ1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZXJyb3JzXG4gICAgICAgIH19XG4gICAgICAgIG9uU3VibWl0PXsoKHZhbHVlcywgcGFyYW1zKSA9PiBoYW5kbGVTdWJtaXQodmFsdWVzLCBwYXJhbXMsIGNvbnRlbnQpKX1cbiAgICAgID5cbiAgICAgICAgeyh7IGlzU3VibWl0dGluZywgc2V0RmllbGRWYWx1ZSB9KSA9PiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XG4gICAgICAgICAgICAgIDxNb2RhbC5UaXRsZT5cbiAgICAgICAgICAgICAgICBDcmVhdGUgU3ViIFRvcGljIFJlZ2FyZGluZyBUaGUgVG9waWNcbiAgICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICAgIHtgXCIke3RvcGljPy50aXRsZX1cImB9XG4gICAgICAgICAgICAgIDwvTW9kYWwuVGl0bGU+XG4gICAgICAgICAgICA8L01vZGFsLkhlYWRlcj5cbiAgICAgICAgICAgIDxGb3JtQ29udGFpbmVyPlxuICAgICAgICAgICAgICA8TW9kYWwuQm9keT5cbiAgICAgICAgICAgICAgICA8SW5wdXRzQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgPExlZnQ+XG4gICAgICAgICAgICAgICAgICAgIDxGbGV4RGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxoMj4gVG9waWMgRGVzY3JpcHRpb24gPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICA8VGhlbWVUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwSGVhZGVyPVwiVG9waWMgRGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcFRleHQ9XCJQcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHRoZSB0b3BpYyB5b3Ugd291bGQgbGlrZSB0byBkaXNjdXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXhEaXY+XG4gICAgICAgICAgICAgICAgICAgIDxGaWVsZCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0aXRsZVwiIGNvbXBvbmVudD17SW5wdXR9IHdpZHRoPVwiMTAwJVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgQSBUb3BpYyBUaXRsZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxGaWVsZCB0eXBlPVwidGV4dFwiIG5hbWU9XCJzdW1tYXJ5XCIgY29tcG9uZW50PXtJbnB1dH0gd2lkdGg9XCIxMDAlXCIgcGxhY2Vob2xkZXI9XCJHaXZlIEEgU2hvcnQgT3BpbmlvbiBPciBQb2ludFwiIC8+XG4gICAgICAgICAgICAgICAgICA8L0xlZnQ+XG4gICAgICAgICAgICAgICAgICA8UmlnaHQ+XG4gICAgICAgICAgICAgICAgICAgIDxGbGV4RGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxoMj4gTGluayB0byB3aGF0IHlvdSB3YW50IHRvIGRpc2N1c3MgaGVyZS4uLiA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgIDxUaGVtZVRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBIZWFkZXI9XCJEaXNjdXNzZWQgQ29udGVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwVGV4dD1cIkFkZCBhIGxpbmsgdG8gdGhlIGV4dGVybmFsIGNvbnRlbnQgeW91IHdvdWxkIGxpa2UgdG8gZGlzY3VzcyAoXG4gICAgICAgICAgICAgICAgICAgICAgICBlLmcgYSBZb3VUdWJlIHZpZGVvLCBUd2VldCwgcHVibGljYXRpb24sIG9yIGFueXRoaW5nIGVsc2UpXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXhEaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGU9XCJ1cmxcIiBuYW1lPVwiY29udGVudFVybFwiIHBsYWNlaG9sZGVyPVwiTGluayBUbyBDb250ZW50XCIgY29tcG9uZW50PXtJbnB1dH0gd2lkdGg9XCIxMDAlXCIgb25CbHVyPXtnZXRMaW5rTWV0YURhdGFPbkJsdXJ9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5lIC8+XG4gICAgICAgICAgICAgICAgICAgIDxGbGV4RGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxoMj4gQWRkIHlvdXIgb3duIG1lZGlhIGNvbnRlbnQgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICA8VGhlbWVUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwSGVhZGVyPVwiVXNlciBQcm92aWRlZCBDb250ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBUZXh0PVwiVGhpcyBjb3VsZCBiZSBhbiBpbWFnZSwgZ3JhcGhpYywgb3IgdmlkZW8gcGVydGFpbmluZyB0byB0aGUgdG9waWMgeW91IHdvdWxkIGxpa2UgdG8gZGlzY3Vzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4RGl2PlxuICAgICAgICAgICAgICAgICAgICA8VXBsb2FkTWVkaWFDb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRGaWVsZFZhbHVlPXtzZXRGaWVsZFZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgIGltZ0ZpbGU9e2ltZ0ZpbGV9XG4gICAgICAgICAgICAgICAgICAgICAgdmlkZW9GaWxlPXt2aWRlb0ZpbGV9XG4gICAgICAgICAgICAgICAgICAgICAgc2V0SW1nRmlsZT17c2V0SW1nRmlsZX1cbiAgICAgICAgICAgICAgICAgICAgICBzZXRWaWRlb0ZpbGU9e3NldFZpZGVvRmlsZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvUmlnaHQ+XG4gICAgICAgICAgICAgICAgPC9JbnB1dHNDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPExpbmUgLz5cbiAgICAgICAgICAgICAgICA8RGlzcGxheU1lZGlhXG4gICAgICAgICAgICAgICAgICBpbWdGaWxlPXtpbWdGaWxlfVxuICAgICAgICAgICAgICAgICAgdmlkZW9GaWxlPXt2aWRlb0ZpbGV9XG4gICAgICAgICAgICAgICAgICBtZXRhRGF0YT17bWV0YURhdGF9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8UmljaFRleHRFZGl0b3IgY29udGVudD17Y29udGVudH0gc2V0Q29udGVudD17c2V0Q29udGVudH0gLz5cbiAgICAgICAgICAgICAgICA8QXJyb3dcbiAgICAgICAgICAgICAgICAgIHJvdGF0ZT17cm90YXRlfVxuICAgICAgICAgICAgICAgICAgLy8gaWNvbj17PERvd25BcnJvd0NpcmNsZVN2ZyAvPn1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0T3Blbighb3BlbilcbiAgICAgICAgICAgICAgICAgICAgc2V0Um90YXRlKHJvdGF0ZSArIChvcGVuID8gLTE4MCA6IDE4MCkpXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxEb3duQXJyb3dDaXJjbGVTdmcgLz5cbiAgICAgICAgICAgICAgICA8L0Fycm93PlxuICAgICAgICAgICAgICAgIDxGYWRlIGluPXshb3Blbn0+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICBFbnRlciBTdXBwbGVtZW50YWwgSW5mb3JtYXRpb25cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvRmFkZT5cbiAgICAgICAgICAgICAgICA8SW5wdXRzQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgPENvbGxhcHNlIGluPXtvcGVufT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aGl0ZVNwYWNlOiAnbm93cmFwJywgd2lkdGg6ICcxMDAlJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICA8RmxleERpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj4gRW50ZXIgTGlua3MgVG8gU3VwcGxlbWVudGFsIEV2aWRlbmNlLi4uIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGhlbWVUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBUZXh0PVwiUHJvdmlkZSBsaW5rcyB0byBhZGRpdGlvbmFsIHJlYWRpbmcgb3IgZXZpZGVuY2UgZXRjLi4uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcEhlYWRlcj1cIlN1cHBsZW1lbnRhbCBJbmZvcm1hdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvRmxleERpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZT1cInVybFwiIG5hbWU9XCJFdmlkZW5jZSBMaW5rIDFcIiBjb21wb25lbnQ9e0lucHV0fSB3aWR0aD1cIjEwMCVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCB0eXBlPVwidXJsXCIgbmFtZT1cIkV2aWRlbmNlIExpbmsgMlwiIGNvbXBvbmVudD17SW5wdXR9IHdpZHRoPVwiMTAwJVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGU9XCJ1cmxcIiBuYW1lPVwiRXZpZGVuY2UgTGluayAzXCIgY29tcG9uZW50PXtJbnB1dH0gd2lkdGg9XCIxMDAlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L0NvbGxhcHNlPlxuICAgICAgICAgICAgICAgIDwvSW5wdXRzQ29udGFpbmVyPlxuICAgICAgICAgICAgICA8L01vZGFsLkJvZHk+XG4gICAgICAgICAgICAgIDxNb2RhbC5Gb290ZXI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgZGlzYWJsZWQ9e2lzU3VibWl0dGluZ30gb25DbGljaz17Y2xvc2VNb2RhbH0+XG4gICAgICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17aXNTdWJtaXR0aW5nfT5cbiAgICAgICAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L01vZGFsLkZvb3Rlcj5cbiAgICAgICAgICAgIDwvRm9ybUNvbnRhaW5lcj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvRm9ybWlrPlxuICAgIDwvQ29udGFpbmVyPlxuXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlU3ViVG9waWNGb3JtXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgRm9ybSB9IGZyb20gJ2Zvcm1paydcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZCgnZGl2JylgXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgaGVpZ2h0OiA5MHZoO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xuICBib3gtc2hhZG93OiAgNXB4IDVweCA1cHggLTNweCAjMDAwMDAwO1xuXG4gIGgxIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctYm90dG9tOiAuNWVtO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgfVxuIGBcblxuZXhwb3J0IGNvbnN0IEZsZXhEaXYgPSBzdHlsZWQoJ2RpdicpYCBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuYFxuXG5leHBvcnQgY29uc3QgRm9ybUNvbnRhaW5lciA9IHN0eWxlZChGb3JtKWBcbiAgbWFyZ2luLXRvcDogMWVtO1xuICAgaDIge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIG1hcmdpbjogMCAxZW07XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IElucHV0c0NvbnRhaW5lciA9IHN0eWxlZCgnZGl2JylgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuYFxuXG5leHBvcnQgY29uc3QgTGVmdCA9IHN0eWxlZCgnZGl2JylgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDUwJTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XG5gXG5leHBvcnQgY29uc3QgUmlnaHQgPSBzdHlsZWQoJ2RpdicpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiA1MCU7XG5gXG5cbmV4cG9ydCBjb25zdCBTdXBwbGVtZW50YWxJbmZvcm1hdGlvbiA9IHN0eWxlZCgnc2VjdGlvbicpYFxuXG5gXG5cbmV4cG9ydCBjb25zdCBJbnB1dFdyYXBwZXIgPSBzdHlsZWQoJ2RpdicpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuYFxuXG5leHBvcnQgY29uc3QgQXJyb3cgPSBzdHlsZWQoJ3NwYW4nKWBcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjVzIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zZm9ybTogJHsocHJvcHMpID0+IGByb3RhdGUoJHtwcm9wcy5yb3RhdGV9ZGVnKWB9O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbmBcblxuZXhwb3J0IGNvbnN0IExpbmUgPSBzdHlsZWQoJ2hyJylgIFxuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDJlbSAxLjNlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ4LDQ4LDUwKTtcbiAgaGVpZ2h0OiAuNXB4O1xuICBib3JkZXI6IG5vbmU7XG5gXG4iLCJpbXBvcnQgeyB5b3VUdWJlVXJsVmFsaWRhdG9yLCB0d2l0dGVyVXJsVmFsaWR0b3IgfSBmcm9tICcuLi8uLi8uLi9nZW5lcmljL3JlZ2V4L3VybFZhbGlkYXRvcnMnXG5cbmV4cG9ydCBkZWZhdWx0ICh1cmwpID0+IHtcbiAgY29uc3QgeXRVcmwgPSB1cmwuc2VhcmNoKHlvdVR1YmVVcmxWYWxpZGF0b3IpID09PSAtMSA/IG51bGwgOiAneXRVcmwnXG4gIGNvbnN0IHR3ZWV0VXJsID0gdXJsLnNlYXJjaCh0d2l0dGVyVXJsVmFsaWR0b3IpID09PSAtMSA/IG51bGwgOiAndHdlZXRVcmwnXG4gIHJldHVybiB5dFVybCB8fCB0d2VldFVybFxufVxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IGdldExpbmtNZXRhRGF0YSB9IGZyb20gJy4uLy4uLy4uL2FwaS92MS90b3BpY3MvdG9waWNzX2FwaV91dGlsJ1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IFttZXRhRGF0YSwgc2V0TWV0YURhdGFdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgZ2V0TGlua01ldGFEYXRhT25CbHVyID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcbiAgICBnZXRMaW5rTWV0YURhdGEoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKS50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAgICAgc2V0TWV0YURhdGEoZGF0YSlcbiAgICB9KVxuICB9LCBbXSlcblxuICByZXR1cm4geyBtZXRhRGF0YSwgZ2V0TGlua01ldGFEYXRhT25CbHVyIH1cbn1cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgdG9waWNBY3Rpb25zIGZyb20gJy4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvdG9waWNzL2luZGV4J1xuaW1wb3J0IHN1YnRvcGljQWN0aW9ucyBmcm9tICcuLi8uLi8uLi9yZWR1eC9hY3Rpb25zL3N1YnRvcGljcy9pbmRleCdcblxuaW1wb3J0IHVzZUJpbmREaXNwYXRjaCBmcm9tICcuLi8uLi9ob29rcy9yZWR1eC91c2VCaW5kRGlzcGF0Y2gnXG5cbmltcG9ydCBjaGVja0xpbmtUeXBlIGZyb20gJy4vY2hlY2tMaW5rVHlwZSdcblxuZXhwb3J0IGRlZmF1bHQgKG1ldGFEYXRhLCB0b3BpY0lkKSA9PiB7XG4gIGNvbnN0IHsgY3JlYXRlU3ViVG9waWMsIHVwbG9hZFRvcGljTWVkaWEgfSA9IHVzZUJpbmREaXNwYXRjaCh0b3BpY0FjdGlvbnMsIHN1YnRvcGljQWN0aW9ucylcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKChzKSA9PiBzLnNlc3Npb24uY3VycmVudFVzZXIpXG5cbiAgcmV0dXJuIHVzZUNhbGxiYWNrKCh2YWx1ZXMsIHsgc2V0U3VibWl0dGluZywgcmVzZXRGb3JtIH0sIGNvbnRlbnQpID0+IHtcbiAgICBjb25zdCBlTGlua3MgPSBPYmplY3QuZW50cmllcyh2YWx1ZXMpLm1hcCgoW2ssIHZdKSA9PiAoay5pbmNsdWRlcygnRXZpZGVuY2UnKSA/IHYgOiBudWxsKSkuZmlsdGVyKEJvb2xlYW4pXG4gICAgY29uc3QgbGlua1R5cGUgPSBjaGVja0xpbmtUeXBlKHZhbHVlcy5jb250ZW50VXJsKVxuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAuLi52YWx1ZXMsXG4gICAgICBkZXNjcmlwdGlvbjogY29udGVudCxcbiAgICAgIGNyZWF0ZWRCeTogdXNlci51c2VybmFtZSxcbiAgICAgIHVzZXJJZDogdXNlci5pZCxcbiAgICAgIGV2aWRlbmNlTGlua3M6IGVMaW5rcyxcbiAgICAgIFtsaW5rVHlwZV06IHZhbHVlcy5jb250ZW50VXJsLFxuICAgICAgdGh1bWJJbWdVcmw6IG1ldGFEYXRhLm9nSW1hZ2U/LnVybCxcbiAgICAgIHRvcGljSWQsXG4gICAgICB0d2VldFVybDogbnVsbCxcbiAgICAgIGltYWdlVXJsOiBudWxsLFxuICAgICAgdm9kVXJsOiBudWxsLFxuICAgIH1cbiAgICBpZiAodmFsdWVzLmZpbGUgaW5zdGFuY2VvZiBGaWxlKSB7XG4gICAgICBjb25zdCBbZmlsZVR5cGUsIGZpbGVGb3JtYXRdID0gdmFsdWVzLmZpbGUudHlwZS5zcGxpdCgnLycpXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ltYWdlJywgdmFsdWVzLmZpbGUpXG4gICAgICB1cGxvYWRUb3BpY01lZGlhKGZvcm1EYXRhLCBmaWxlVHlwZSwgZmlsZUZvcm1hdCwgZGF0YSlcbiAgICB9IGVsc2Uge1xuICAgICAgY3JlYXRlU3ViVG9waWMoZGF0YSlcbiAgICB9XG4gICAgc2V0U3VibWl0dGluZyhmYWxzZSlcbiAgICByZXNldEZvcm0oe30pXG4gIH0sIFttZXRhRGF0YSwgdG9waWNJZF0pXG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Nb2RhbCdcbmltcG9ydCB7IEZvcm1paywgRmllbGQgfSBmcm9tICdmb3JtaWsnXG5pbXBvcnQgeyBDb2xsYXBzZSwgRmFkZSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcblxuaW1wb3J0IHVzZUJpbmREaXNwYXRjaCBmcm9tICcuLi9ob29rcy9yZWR1eC91c2VCaW5kRGlzcGF0Y2gnXG5pbXBvcnQgdXNlSGFuZGxlU3VibWl0IGZyb20gJy4vaG9va3MvdXNlSGFuZGxlU3VibWl0J1xuaW1wb3J0IHVzZUNvbmZpZ0Zvcm1FcnJvcnMgZnJvbSAnLi4vdXRpbC9mb3JtX2hlbHBlcnMvaG9va3MvdXNlQ29uZmlnRm9ybUVycm9ycydcbmltcG9ydCB1aUFjdGlvbnMgZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucy91aSdcblxuaW1wb3J0IHsgRG93bkFycm93Q2lyY2xlU3ZnIH0gZnJvbSAnLi4vLi4vc3Zncy9zdmdzJ1xuaW1wb3J0IElucHV0IGZyb20gJy4uL0NvbW1vbkNvbXBvbmVudHMvRm9ybS9JbnB1dDMvSW5kZXgnXG5pbXBvcnQgU2VsZWN0IGZyb20gJy4uL0NvbW1vbkNvbXBvbmVudHMvRm9ybS9TZWxlY3QvSW5kZXgnXG5pbXBvcnQgUmljaFRleHRFZGl0b3IgZnJvbSAnLi4vQ29tbW9uQ29tcG9uZW50cy9SaWNoVGV4dEVkaXRvci9JbmRleCdcbmltcG9ydCBFeHBhbmRCdXR0b24gZnJvbSAnLi4vQ29tbW9uQ29tcG9uZW50cy9CdXR0b25zL0V4cGFuZEJ1dHRvbi9JbmRleCdcblxuaW1wb3J0IFVwbG9hZE1lZGlhQ29udGFpbmVyIGZyb20gJy4vY29tcG9uZW50cy9VcGxvYWRNZWRpYS9JbmRleCdcbmltcG9ydCBEaXNwbGF5TWVkaWEgZnJvbSAnLi9jb21wb25lbnRzL0Rpc3BsYXlNZWRpYS9JbmRleCdcbmltcG9ydCBMaW5rVHlwZUljb24gZnJvbSAnLi9jb21wb25lbnRzL0xpbmtUeXBlSWNvbi9JbmRleCdcblxuaW1wb3J0IFRoZW1lVG9vbHRpcCBmcm9tICcuLi9Db21tb25Db21wb25lbnRzL1Rvb2x0aXAvSW5kZXgnXG5cbmltcG9ydCB7XG4gIEZvcm1Db250YWluZXIsIElucHV0c0NvbnRhaW5lciwgQ29udGFpbmVyLCBMZWZ0LCBSaWdodCwgU2VjdGlvbkRlc2NyaXB0aW9uLCBNb2JpbGVPbmx5TGluZSxcbiAgTGluZSwgQXJyb3csIEZsZXhEaXYsXG59IGZyb20gJy4vU3R5bGUnXG5cbmltcG9ydCB7IElOSVRfVE9QSUNfRk9STV9WQUxVRVMgfSBmcm9tICcuLi91dGlsL2Zvcm1faGVscGVycy9pbml0X2Zvcm1fdmFsdWVzJ1xuaW1wb3J0IHVzZUdldExpbmtNZXRhRGF0YU9uQmx1ciBmcm9tICcuL2hvb2tzL3VzZUdldExpbmtNZXRhRGF0YU9uQmx1cidcblxuY29uc3QgVkFMSURBVElPTlMgPSB7XG4gIHRpdGxlOiB7IFJFUVVJUkVEOiB0cnVlIH0sXG4gIHN1bW1hcnk6IHsgUkVRVUlSRUQ6IHRydWUsIE1JTl9MRU5HVEg6IDUgfSxcbiAgY2F0ZWdvcnk6IHsgUkVRVUlSRUQ6IHRydWUgfSxcbn1cblxuY29uc3QgQ3JlYXRlVG9waWNGb3JtID0gKCkgPT4ge1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2ltZ0ZpbGUsIHNldEltZ0ZpbGVdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW3ZpZGVvRmlsZSwgc2V0VmlkZW9GaWxlXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFttZXRhRGF0YSwgc2V0TWV0YURhdGFdID0gdXNlU3RhdGUobnVsbClcblxuICBjb25zdCBbcm90YXRlLCBzZXRSb3RhdGVdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgW3JpY2hUZXh0RWRpdG9yQ29udGVudCwgc2V0UmljaFRleHRFZGl0b3JDb250ZW50XSA9IHVzZVN0YXRlKHtcbiAgICByYXdIVE1MOiAnJyxcbiAgICBjb250ZW50OiAnJyxcbiAgfSlcblxuICBjb25zdCB2YWxpZGF0b3IgPSB1c2VDb25maWdGb3JtRXJyb3JzKFZBTElEQVRJT05TKVxuICBjb25zdCB7IGNvbnRlbnRVcmwsIGdldENvbnRlbnRVcmxPbkJsdXIgfSA9IHVzZUdldExpbmtNZXRhRGF0YU9uQmx1cigpXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IHVzZUhhbmRsZVN1Ym1pdChtZXRhRGF0YSlcbiAgY29uc3QgeyBjbG9zZU1vZGFsIH0gPSB1c2VCaW5kRGlzcGF0Y2godWlBY3Rpb25zKVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxGb3JtaWtcbiAgICAgICAgaW5pdGlhbFZhbHVlcz17SU5JVF9UT1BJQ19GT1JNX1ZBTFVFU31cbiAgICAgICAgdmFsaWRhdGU9e3ZhbGlkYXRvcn1cbiAgICAgICAgb25TdWJtaXQ9eygodmFsdWVzLCBwYXJhbXMpID0+IGhhbmRsZVN1Ym1pdCh2YWx1ZXMsIHBhcmFtcywgcmljaFRleHRFZGl0b3JDb250ZW50LnJhd0hUTUwpKX1cbiAgICAgID5cbiAgICAgICAgeyh7IGlzU3VibWl0dGluZywgc2V0RmllbGRWYWx1ZSwgc2V0RmllbGRUb3VjaGVkIH0pID0+IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cbiAgICAgICAgICAgICAgPE1vZGFsLlRpdGxlPkNyZWF0ZSBUb3BpYzwvTW9kYWwuVGl0bGU+XG4gICAgICAgICAgICA8L01vZGFsLkhlYWRlcj5cblxuICAgICAgICAgICAgPEZvcm1Db250YWluZXI+XG4gICAgICAgICAgICAgIDxNb2RhbC5Cb2R5PlxuICAgICAgICAgICAgICAgIDxJbnB1dHNDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICA8TGVmdD5cbiAgICAgICAgICAgICAgICAgICAgPEZsZXhEaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPFNlY3Rpb25EZXNjcmlwdGlvbj4gVG9waWMgRGVzY3JpcHRpb24gPC9TZWN0aW9uRGVzY3JpcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgPFRoZW1lVG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcEhlYWRlcj1cIlRvcGljIERlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBUZXh0PVwiUHJvdmlkZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgdG9waWMgeW91IHdvdWxkIGxpa2UgdG8gZGlzY3Vzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4RGl2PlxuICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZT1cInRleHRcIiBuYW1lPVwidGl0bGVcIiBsYWJlbD1cIlRpdGxlXCIgY29tcG9uZW50PXtJbnB1dH0gd2lkdGg9XCI4NSVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIEEgVG9waWMgVGl0bGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZT1cInRleHRcIiBuYW1lPVwic3VtbWFyeVwiIGxhYmVsPVwiU3VtbWFyeVwiIGNvbXBvbmVudD17SW5wdXR9IHdpZHRoPVwiODUlXCIgcGxhY2Vob2xkZXI9XCJHaXZlIEEgU2hvcnQgT3BpbmlvbiBPciBQb2ludFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxGaWVsZCB0eXBlPVwidGV4dFwiIG5hbWU9XCJjYXRlZ29yeVwiIGxhYmVsPVwiQ2F0ZWdvcnlcIiBjb21wb25lbnQ9e1NlbGVjdH0gc2V0RmllbGRWYWx1ZT17c2V0RmllbGRWYWx1ZX0gc2V0RmllbGRUb3VjaGVkPXtzZXRGaWVsZFRvdWNoZWR9IHdpZHRoPVwiODUlXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvTGVmdD5cbiAgICAgICAgICAgICAgICAgIDxNb2JpbGVPbmx5TGluZSAvPlxuICAgICAgICAgICAgICAgICAgPFJpZ2h0PlxuICAgICAgICAgICAgICAgICAgICA8RmxleERpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8U2VjdGlvbkRlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgTGluayB0byB3aGF0IHlvdSB3YW50IHRvIGRpc2N1c3MgaGVyZS4uLlxuICAgICAgICAgICAgICAgICAgICAgIDwvU2VjdGlvbkRlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxUaGVtZVRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBIZWFkZXI9XCJEaXNjdXNzZWQgQ29udGVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwVGV4dD1cIkFkZCBhIGxpbmsgdG8gdGhlIGV4dGVybmFsIGNvbnRlbnQgeW91IHdvdWxkIGxpa2UgdG8gZGlzY3VzcyAoXG4gICAgICAgICAgICAgICAgICAgICAgICBlLmcgYSBZb3VUdWJlIHZpZGVvLCBUd2VldCwgcHVibGljYXRpb24sIG9yIGFueXRoaW5nIGVsc2UpXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXhEaXY+XG4gICAgICAgICAgICAgICAgICAgIDxGbGV4RGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInVybFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY29udGVudFVybFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxpbmsgVG8gQ29udGVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkxpbmsgVG8gQ29udGVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0lucHV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI4NSVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtnZXRDb250ZW50VXJsT25CbHVyfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgeyBjb250ZW50VXJsICYmIDxMaW5rVHlwZUljb24gbWV0YURhdGE9e21ldGFEYXRhfSBjb250ZW50VXJsPXtjb250ZW50VXJsfSAvPiB9XG4gICAgICAgICAgICAgICAgICAgIDwvRmxleERpdj5cblxuICAgICAgICAgICAgICAgICAgICA8TGluZSAvPlxuICAgICAgICAgICAgICAgICAgICA8RmxleERpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8U2VjdGlvbkRlc2NyaXB0aW9uPiBBZGQgeW91ciBvd24gbWVkaWEgY29udGVudCA8L1NlY3Rpb25EZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8VGhlbWVUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwSGVhZGVyPVwiVXNlciBQcm92aWRlZCBDb250ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBUZXh0PVwiVGhpcyBjb3VsZCBiZSBhbiBpbWFnZSwgZ3JhcGhpYywgb3IgdmlkZW8gcGVydGFpbmluZyB0byB0aGUgdG9waWMgeW91IHdvdWxkIGxpa2UgdG8gZGlzY3Vzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4RGl2PlxuICAgICAgICAgICAgICAgICAgICA8VXBsb2FkTWVkaWFDb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRGaWVsZFZhbHVlPXtzZXRGaWVsZFZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgIGltZ0ZpbGU9e2ltZ0ZpbGV9XG4gICAgICAgICAgICAgICAgICAgICAgdmlkZW9GaWxlPXt2aWRlb0ZpbGV9XG4gICAgICAgICAgICAgICAgICAgICAgc2V0SW1nRmlsZT17c2V0SW1nRmlsZX1cbiAgICAgICAgICAgICAgICAgICAgICBzZXRWaWRlb0ZpbGU9e3NldFZpZGVvRmlsZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvUmlnaHQ+XG4gICAgICAgICAgICAgICAgPC9JbnB1dHNDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPExpbmUgLz5cbiAgICAgICAgICAgICAgICA8RGlzcGxheU1lZGlhXG4gICAgICAgICAgICAgICAgICBpbWdGaWxlPXtpbWdGaWxlfVxuICAgICAgICAgICAgICAgICAgdmlkZW9GaWxlPXt2aWRlb0ZpbGV9XG4gICAgICAgICAgICAgICAgICBjb250ZW50VXJsPXtjb250ZW50VXJsfVxuICAgICAgICAgICAgICAgICAgc2V0TWV0YURhdGE9e3NldE1ldGFEYXRhfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFJpY2hUZXh0RWRpdG9yXG4gICAgICAgICAgICAgICAgICBjb250ZW50PXtyaWNoVGV4dEVkaXRvckNvbnRlbnQuY29udGVudH1cbiAgICAgICAgICAgICAgICAgIHNldENvbnRlbnQ9e3NldFJpY2hUZXh0RWRpdG9yQ29udGVudH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxBcnJvd1xuICAgICAgICAgICAgICAgICAgcm90YXRlPXtyb3RhdGV9XG4gICAgICAgICAgICAgICAgICAvLyBpY29uPXs8RG93bkFycm93Q2lyY2xlU3ZnIC8+fVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRPcGVuKCFvcGVuKVxuICAgICAgICAgICAgICAgICAgICBzZXRSb3RhdGUocm90YXRlICsgKG9wZW4gPyAtMTgwIDogMTgwKSlcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPERvd25BcnJvd0NpcmNsZVN2ZyAvPlxuICAgICAgICAgICAgICAgIDwvQXJyb3c+XG4gICAgICAgICAgICAgICAgPEZhZGUgaW49eyFvcGVufT5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIEVudGVyIFN1cHBsZW1lbnRhbCBJbmZvcm1hdGlvblxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9GYWRlPlxuICAgICAgICAgICAgICAgIDxJbnB1dHNDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICA8Q29sbGFwc2UgaW49e29wZW59PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdoaXRlU3BhY2U6ICdub3dyYXAnLCB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgICAgICAgICAgICAgICAgIDxGbGV4RGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPiBFbnRlciBMaW5rcyBUbyBTdXBwbGVtZW50YWwgRXZpZGVuY2UuLi4gPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUaGVtZVRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcFRleHQ9XCJQcm92aWRlIGxpbmtzIHRvIGFkZGl0aW9uYWwgcmVhZGluZyBvciBldmlkZW5jZSBldGMuLi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwSGVhZGVyPVwiU3VwcGxlbWVudGFsIEluZm9ybWF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9GbGV4RGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCB0eXBlPVwidXJsXCIgbmFtZT1cIkV2aWRlbmNlIExpbmsgMVwiIGNvbXBvbmVudD17SW5wdXR9IHdpZHRoPVwiNzAlXCIgbGFiZWw9XCJMaW5rIFRvIEV2aWRlbmNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZT1cInVybFwiIG5hbWU9XCJFdmlkZW5jZSBMaW5rIDJcIiBjb21wb25lbnQ9e0lucHV0fSB3aWR0aD1cIjcwJVwiIGxhYmVsPVwiTGluayBUbyBFdmlkZW5jZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGU9XCJ1cmxcIiBuYW1lPVwiRXZpZGVuY2UgTGluayAzXCIgY29tcG9uZW50PXtJbnB1dH0gd2lkdGg9XCI3MCVcIiBsYWJlbD1cIkxpbmsgVG8gRXZpZGVuY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvQ29sbGFwc2U+XG4gICAgICAgICAgICAgICAgPC9JbnB1dHNDb250YWluZXI+XG4gICAgICAgICAgICAgIDwvTW9kYWwuQm9keT5cbiAgICAgICAgICAgICAgPE1vZGFsLkZvb3Rlcj5cbiAgICAgICAgICAgICAgICA8RXhwYW5kQnV0dG9uXG4gICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIuNXZ3XCJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj1cInZhcigtLW0tcHJpbWFyeS1idG4tY29sb3IpXCJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjbG9zZU1vZGFsfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgICAgIDwvRXhwYW5kQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxFeHBhbmRCdXR0b25cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMi41dndcIlxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPVwidmFyKC0tbS1wcmltYXJ5LWJ0bi1jb2xvcilcIlxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzU3VibWl0dGluZ31cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBTdWJtaXRcbiAgICAgICAgICAgICAgICA8L0V4cGFuZEJ1dHRvbj5cbiAgICAgICAgICAgICAgPC9Nb2RhbC5Gb290ZXI+XG4gICAgICAgICAgICA8L0Zvcm1Db250YWluZXI+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L0Zvcm1paz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVUb3BpY0Zvcm1cbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBGb3JtIH0gZnJvbSAnZm9ybWlrJ1xuLy8gaW1wb3J0IHsgRmlBcnJvd0Rvd25DaXJjbGUgfSBmcm9tICdyZWFjdC1pY29ucy9maSdcblxuZXhwb3J0IGNvbnN0IEZsZXhEaXYgPSBzdHlsZWQoJ2RpdicpYCBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuYFxuXG5leHBvcnQgY29uc3QgRm9ybUNvbnRhaW5lciA9IHN0eWxlZChGb3JtKWBcbiAgLyogZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7ICovXG4gIG1hcmdpbi10b3A6IDFlbTtcbiAgIGgyIHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgfVxuIFxuYFxuXG5leHBvcnQgY29uc3QgQXJyb3cgPSBzdHlsZWQoJ3NwYW4nKWBcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjVzIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zZm9ybTogJHsocHJvcHMpID0+IGByb3RhdGUoJHtwcm9wcy5yb3RhdGV9ZGVnKWB9O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbmBcblxuZXhwb3J0IGNvbnN0IElucHV0c0NvbnRhaW5lciA9IHN0eWxlZCgnZGl2JylgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IExlZnQgPSBzdHlsZWQoJ2RpdicpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiA1MCU7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICB9XG5gXG5leHBvcnQgY29uc3QgUmlnaHQgPSBzdHlsZWQoJ2RpdicpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiA1MCU7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgU3VwcGxlbWVudGFsSW5mb3JtYXRpb24gPSBzdHlsZWQoJ3NlY3Rpb24nKWBcblxuYFxuXG5leHBvcnQgY29uc3QgSW5wdXRXcmFwcGVyID0gc3R5bGVkKCdkaXYnKWBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbmBcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZCgnZGl2JylgXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgaGVpZ2h0OiA5MHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIG1heC13aWR0aDogMTAwMHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcbiAgLyogYm94LXNoYWRvdzogdmFyKC0tbS1wcmltYXJ5LWJveC1zaGFkb3cpOyAqL1xuICBib3gtc2hhZG93OiAgNXB4IDVweCA1cHggLTNweCAjMDAwMDAwO1xuXG4gIGgxIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctYm90dG9tOiAuNWVtO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgfVxuICBcbiAgLyogQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjAwcHgpIHtcbiAgICAgd2lkdGg6IDgwdnc7XG4gIH1cblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgIHdpZHRoOiA5MHZ3O1xuICB9XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICB3aWR0aDogMTAwdnc7XG4gIH0gKi9cbiBgXG5cbmV4cG9ydCBjb25zdCBMaW5lID0gc3R5bGVkKCdocicpYCBcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAyZW0gMS4zZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0OCw0OCw1MCk7XG4gIGhlaWdodDogLjVweDtcbiAgYm9yZGVyOiBub25lO1xuYFxuXG5leHBvcnQgY29uc3QgVXBsb2FkTWVkaWFDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpYCBcbiAgbWFyZ2luLWxlZnQ6IDEuM2VtO1xuICBwYWRkaW5nOiAuNWVtO1xuICBib3JkZXItcmFkaXVzOiAuNWVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3gtc2hhZG93OiAgNXB4IDVweCA1cHggLTNweCAjQUFBQUFBO1xuICBiYWNrZ3JvdW5kOiAjRTVFNUU1O1xuXG47XG5cbmBcblxuZXhwb3J0IGNvbnN0IFNlY3Rpb25EZXNjcmlwdGlvbiA9IHN0eWxlZCgnaDInKWBcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAvKiBkaXNwbGF5OiBub25lOyAqL1xuICB9XG5cbmBcblxuZXhwb3J0IGNvbnN0IE1vYmlsZU9ubHlMaW5lID0gc3R5bGVkKCdocicpYCBcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAyZW0gMS4zZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0OCw0OCw1MCk7XG4gIGhlaWdodDogLjVweDtcbiAgYm9yZGVyOiBub25lO1xuICBkaXNwbGF5OiBub25lO1xuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuYFxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQge1xuICBPR0Zhdmljb24sXG59IGZyb20gJy4vU3R5bGUvaW5kZXgnXG5pbXBvcnQgSXNMb2FkaW5nSE9DIGZyb20gJy4uLy4uLy4uLy4uL2hvY3MvSXNMb2FkaW5nSE9DJ1xuXG5jb25zdCBMaW5rVHlwZUljb24gPSAoe1xuICBjb250ZW50VXJsLCBtZXRhRGF0YSwgc2V0SXNMb2FkaW5nLFxufSkgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldElzTG9hZGluZyh0cnVlKVxuICB9LCBbY29udGVudFVybF0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobWV0YURhdGEpIHNldElzTG9hZGluZyhmYWxzZSlcbiAgfSwgW21ldGFEYXRhXSlcblxuICByZXR1cm4gKFxuICAgIDxPR0Zhdmljb24gc3JjPXttZXRhRGF0YT8uZmF2aWNvbn0gYWx0PVwiXCIgLz5cbiAgKVxufVxuZXhwb3J0IGRlZmF1bHQgSXNMb2FkaW5nSE9DKExpbmtUeXBlSWNvbiwgJzMwcHgnLCB0cnVlKVxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IE9HRmF2aWNvbiA9IHN0eWxlZCgnaW1nJylgIFxuICBib3JkZXItcmFkaXVzOiAxdnc7XG4gIHdpZHRoOiAxLjV2dztcblxuYCIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1wcm9wcy1uby1zcHJlYWRpbmcgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExhYmVsLCBVcGxvYWRJbnB1dCB9IGZyb20gJy4vU3R5bGUnXG5cbmNvbnN0IFVwbG9hZEltYWdlSW5wdXQgPSAoe1xuICBmaWVsZCwgb25DaGFuZ2UsIGljb24sIGZpbGVUeXBlLCBkaXNhYmxlZCxcbn0pID0+IChcbiAgPExhYmVsPlxuICAgIHtpY29ufVxuICAgIDxVcGxvYWRJbnB1dCBkYXRhLWZpbGV0eXBlPXtmaWxlVHlwZX0gdHlwZT1cImZpbGVcIiB7Li4uZmllbGR9IGlkPXtmaWVsZC5uYW1lfSBvbkNoYW5nZT17b25DaGFuZ2V9IGRpc2FibGVkPXtkaXNhYmxlZH0gLz5cbiAgPC9MYWJlbD5cblxuKVxuXG5leHBvcnQgZGVmYXVsdCBVcGxvYWRJbWFnZUlucHV0XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgTGFiZWwgPSBzdHlsZWQoJ2xhYmVsJylgIFxuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMCU7XG4gIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBVcGxvYWRJbnB1dCA9IHN0eWxlZCgnaW5wdXQnKWAgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gIGxlZnQ6IC05OTk5OXJlbTtcbmBcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgRmllbGQgfSBmcm9tICdmb3JtaWsnXG5cbmltcG9ydCBVcGxvYWRGaWxlSW5wdXQgZnJvbSAnLi4vVXBsb2FkSW1hZ2VJbnB1dC9JbmRleCdcbmltcG9ydCB7IFZpZGVvU3ZnLCBJbWFnZVN2ZyB9IGZyb20gJy4uLy4uLy4uLy4uL3N2Z3Mvc3ZncydcblxuaW1wb3J0IHVzZU9uRmlsZUNoYW5nZUhhbmRsZXIgZnJvbSAnLi4vLi4vaG9va3MvdXNlT25GaWxlQ2hhbmdlSGFuZGxlcidcblxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi9TdHlsZS9pbmRleCdcblxuY29uc3QgVXBsb2FkTWVkaWFDb250YWluZXIgPSAoe1xuICBzZXRGaWVsZFZhbHVlLCBpbWdGaWxlLCB2aWRlb0ZpbGUsIHNldEltZ0ZpbGUsIHNldFZpZGVvRmlsZSxcbn0pID0+IHtcbiAgY29uc3Qgb25GaWxlQ2hhbmdlID0gdXNlT25GaWxlQ2hhbmdlSGFuZGxlcigpXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxGaWVsZFxuICAgICAgICBmaWxlVHlwZT1cImZpbGVcIlxuICAgICAgICBuYW1lPVwidG9waWNJbWFnZVwiXG4gICAgICAgIGRpc2FibGVkPXtCb29sZWFuKHZpZGVvRmlsZSl9XG4gICAgICAgIGZpbGU9e2ltZ0ZpbGV9XG4gICAgICAgIGNvbXBvbmVudD17VXBsb2FkRmlsZUlucHV0fVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uRmlsZUNoYW5nZShlLCBzZXRGaWVsZFZhbHVlLCBzZXRJbWdGaWxlKX1cbiAgICAgICAgaWNvbj17PEltYWdlU3ZnIC8+fVxuICAgICAgLz5cbiAgICAgIDxGaWVsZFxuICAgICAgICBmaWxlVHlwZT1cImZpbGVcIlxuICAgICAgICBuYW1lPVwidG9waWNWaWRlb1wiXG4gICAgICAgIGRpc2FibGVkPXtCb29sZWFuKGltZ0ZpbGUpfVxuICAgICAgICBmaWxlPXt2aWRlb0ZpbGV9XG4gICAgICAgIGNvbXBvbmVudD17VXBsb2FkRmlsZUlucHV0fVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uRmlsZUNoYW5nZShlLCBzZXRGaWVsZFZhbHVlLCBzZXRWaWRlb0ZpbGUpfVxuICAgICAgICBpY29uPXs8VmlkZW9TdmcgLz59XG4gICAgICAvPlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVwbG9hZE1lZGlhQ29udGFpbmVyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWAgXG4gIG1hcmdpbi1sZWZ0OiAxLjNlbTtcbiAgcGFkZGluZzogLjVlbTtcbiAgYm9yZGVyLXJhZGl1czogLjVlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYm94LXNoYWRvdzogIDVweCA1cHggNXB4IC0zcHggI0FBQUFBQTtcbiAgYmFja2dyb3VuZDogI0U1RTVFNTtcblxuYFxuIiwiaW1wb3J0IHsgeW91VHViZVVybFZhbGlkYXRvciwgdHdpdHRlclVybFZhbGlkdG9yIH0gZnJvbSAnLi4vLi4vLi4vZ2VuZXJpYy9yZWdleC91cmxWYWxpZGF0b3JzJ1xuXG5leHBvcnQgZGVmYXVsdCAodXJsKSA9PiB7XG4gIGNvbnN0IHl0VXJsID0gdXJsLnNlYXJjaCh5b3VUdWJlVXJsVmFsaWRhdG9yKSA9PT0gLTEgPyBudWxsIDogJ3l0VXJsJ1xuICBjb25zdCB0d2VldFVybCA9IHVybC5zZWFyY2godHdpdHRlclVybFZhbGlkdG9yKSA9PT0gLTEgPyBudWxsIDogJ3R3ZWV0VXJsJ1xuICByZXR1cm4geXRVcmwgfHwgdHdlZXRVcmxcbn1cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IFtjb250ZW50VXJsLCBzZXRDb250ZW50VXJsXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IGdldENvbnRlbnRVcmxPbkJsdXIgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xuICAgIHNldENvbnRlbnRVcmwoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKVxuICB9LCBbXSlcblxuICByZXR1cm4geyBjb250ZW50VXJsLCBnZXRDb250ZW50VXJsT25CbHVyIH1cbn1cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSdcblxuaW1wb3J0IHRvcGljQWN0aW9ucyBmcm9tICcuLi8uLi8uLi9yZWR1eC9hY3Rpb25zL3RvcGljcy9pbmRleCdcbmltcG9ydCB1c2VCaW5kRGlzcGF0Y2ggZnJvbSAnLi4vLi4vaG9va3MvcmVkdXgvdXNlQmluZERpc3BhdGNoJ1xuXG5pbXBvcnQgY2hlY2tMaW5rVHlwZSBmcm9tICcuL2NoZWNrTGlua1R5cGUnXG5cbi8vIGNvbnN0IHJlc29sdmVBZnRlcjE1MDBtcyA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDE1MDApKVxuXG5leHBvcnQgZGVmYXVsdCAobWV0YURhdGEpID0+IHtcbiAgY29uc3QgeyBjcmVhdGVUb3BpYywgdXBsb2FkVG9waWNNZWRpYSB9ID0gdXNlQmluZERpc3BhdGNoKHRvcGljQWN0aW9ucylcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKChzKSA9PiBzLnNlc3Npb24uY3VycmVudFVzZXIpXG5cbiAgcmV0dXJuIHVzZUNhbGxiYWNrKCh2YWx1ZXMsIHsgc2V0U3VibWl0dGluZywgcmVzZXRGb3JtIH0sIGNvbnRlbnQpID0+IHtcbiAgICBjb25zdCBlTGlua3MgPSBPYmplY3QuZW50cmllcyh2YWx1ZXMpLm1hcCgoW2ssIHZdKSA9PiAoay5pbmNsdWRlcygnRXZpZGVuY2UnKSA/IHYgOiBudWxsKSkuZmlsdGVyKEJvb2xlYW4pXG4gICAgY29uc3QgbGlua1R5cGUgPSBjaGVja0xpbmtUeXBlKHZhbHVlcy5jb250ZW50VXJsKVxuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAuLi52YWx1ZXMsXG4gICAgICBkZXNjcmlwdGlvbjogY29udGVudCxcbiAgICAgIGNyZWF0ZWRCeTogdXNlci51c2VybmFtZSxcbiAgICAgIHVzZXJJZDogdXNlci5pZCxcbiAgICAgIGV2aWRlbmNlTGlua3M6IGVMaW5rcyxcbiAgICAgIFtsaW5rVHlwZV06IHZhbHVlcy5jb250ZW50VXJsLFxuICAgICAgdGh1bWJJbWdVcmw6IG1ldGFEYXRhLm9nSW1hZ2U/LnVybCxcbiAgICB9XG4gICAgaWYgKHZhbHVlcy5maWxlIGluc3RhbmNlb2YgRmlsZSkge1xuICAgICAgY29uc3QgW2ZpbGVUeXBlLCBmaWxlRm9ybWF0XSA9IHZhbHVlcy5maWxlLnR5cGUuc3BsaXQoJy8nKVxuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKVxuICAgICAgZm9ybURhdGEuYXBwZW5kKCdpbWFnZScsIHZhbHVlcy5maWxlKVxuICAgICAgdXBsb2FkVG9waWNNZWRpYShmb3JtRGF0YSwgZmlsZVR5cGUsIGZpbGVGb3JtYXQsIGRhdGEpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRvYXN0LnByb21pc2UoXG4gICAgICAgIGNyZWF0ZVRvcGljKGRhdGEpLFxuICAgICAgICB7XG4gICAgICAgICAgcGVuZGluZzogJ0NyZWF0aW5nIFRvcGljLi4uJyxcbiAgICAgICAgICBzdWNjZXNzOiAnVG9waWMgU3VjY2Vzc2Z1bGx5IENyZWF0ZWQhJyxcbiAgICAgICAgICBlcnJvcjoge1xuICAgICAgICAgICAgcmVuZGVyKHsgZGF0YTogZXJyb3JEYXRhIH0pIHtcbiAgICAgICAgICAgICAgY29uc3QgeyByZXNwb25zZSB9ID0gZXJyb3JEYXRhXG4gICAgICAgICAgICAgIGNvbnN0IHsgZGF0YTogcmVzcG9uc2VEYXRhIH0gPSByZXNwb25zZVxuICAgICAgICAgICAgICByZXR1cm4gYCR7cmVzcG9uc2VEYXRhLm1zZ30g8J+kryBgXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICApXG4gICAgfVxuICAgIHNldFN1Ym1pdHRpbmcoZmFsc2UpXG4gICAgcmVzZXRGb3JtKHt9KVxuICB9LCBbbWV0YURhdGFdKVxufVxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gdXNlQ2FsbGJhY2soKGUsIHNldEZpZWxkVmFsdWUsIHNldFN0YXRlVmFsdWUpID0+IHtcbiAgc2V0RmllbGRWYWx1ZShlLnRhcmdldC5kYXRhc2V0LmZpbGV0eXBlLCBlLmN1cnJlbnRUYXJnZXQuZmlsZXNbMF0pXG4gIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgY29uc3QgY3VyckZpbGUgPSBlLnRhcmdldC5maWxlc1swXVxuICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xuICAgIHNldFN0YXRlVmFsdWUocmVhZGVyLnJlc3VsdClcbiAgfVxuICByZWFkZXIucmVhZEFzRGF0YVVSTChjdXJyRmlsZSlcbn0sIFtdKVxuIiwiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuLy8gYWN0aW9uIGNyZWF0b3IgaXMganVzdCBhIGZ1bmN0aW9uIHRoYXQgZGlzcGF0Y2hlcyBhbiBhY3Rpb25cbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknXG5pbXBvcnQgeyBjbG9zZU1vZGFsIH0gZnJvbSAnLi4vdWkvaW5kZXgnXG5pbXBvcnQgeyBBRERfU1VCX1RPUElDLCBHRVRfQUxMX1NVQl9UT1BJQ1MgfSBmcm9tICcuLi8uLi9yZWR1Y2Vycy9zdWJ0b3BpY3Mvc3ViVG9waWNzUmVkdWNlcidcbmltcG9ydCAqIGFzIFN1YlRvcGljc0FwaVV0aWwgZnJvbSAnLi4vLi4vLi4vYXBpL3YxL3N1YnRvcGljcy9zdWJ0b3BpY3NfYXBpX3V0aWwnXG5pbXBvcnQgeyBlcnJvckZvcm1hdHRlciB9IGZyb20gJy4uLy4uL3V0aWxzL2Vycm9yRm9ybWF0dGVyJ1xuXG5jb25zdCBnZXRBbGxUb3BpY3NBY3Rpb25DcmVhdG9yID0gKHN1YnRvcGljcykgPT4gKHtcbiAgdHlwZTogR0VUX0FMTF9TVUJfVE9QSUNTLFxuICBwYXlsb2FkOiBzdWJ0b3BpY3MsXG5cbn0pXG5cbmNvbnN0IGFkZFRvcGljQWN0aW9uQ3JlYXRvciA9IChzdWJUb3BpY0RhdGEpID0+ICh7XG4gIHR5cGU6IEFERF9TVUJfVE9QSUMsXG4gIHBheWxvYWQ6IHN1YlRvcGljRGF0YSxcbn0pXG5cbmV4cG9ydCBjb25zdCBjcmVhdGVTdWJUb3BpYyA9ICh0b3BpY0RhdGEpID0+IChkaXNwYXRjaCkgPT4gU3ViVG9waWNzQXBpVXRpbC5jcmVhdGVTdWJUb3BpYyh0b3BpY0RhdGEpXG4gIC50aGVuKChyZXMpID0+IGRpc3BhdGNoKGFkZFRvcGljQWN0aW9uQ3JlYXRvcihyZXMuZGF0YSkpKVxuICAudGhlbigoKSA9PiBkaXNwYXRjaChjbG9zZU1vZGFsKCkpKVxuICAuY2F0Y2goKGVycm9yKSA9PiB0b2FzdC5lcnJvcihlcnJvckZvcm1hdHRlcihlcnJvcikpKVxuXG5leHBvcnQgY29uc3QgZ2V0QWxsU3ViVG9waWNzID0gKHRvcGljSWQpID0+IChkaXNwYXRjaCkgPT4gU3ViVG9waWNzQXBpVXRpbC5nZXRBbGxTdWJUb3BpY3ModG9waWNJZClcbiAgLnRoZW4oKHJlcykgPT4gZGlzcGF0Y2goZ2V0QWxsVG9waWNzQWN0aW9uQ3JlYXRvcihyZXMuZGF0YSkpKVxuICAuY2F0Y2goKGVycm9yKSA9PiB0b2FzdC5lcnJvcihlcnJvckZvcm1hdHRlcihlcnJvcikpKVxuXG5leHBvcnQgY29uc3QgZ2V0U3ViVG9waWMgPSAoc3ViVG9waWNJZCkgPT4gKGRpc3BhdGNoKSA9PiBTdWJUb3BpY3NBcGlVdGlsLmdldFN1YlRvcGljKHN1YlRvcGljSWQpXG4gIC50aGVuKChyZXMpID0+IGRpc3BhdGNoKGFkZFRvcGljQWN0aW9uQ3JlYXRvcihyZXMuZGF0YSkpKVxuICAuY2F0Y2goKGVycm9yKSA9PiB0b2FzdC5lcnJvcihlcnJvckZvcm1hdHRlcihlcnJvcikpKVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNyZWF0ZVN1YlRvcGljLFxuICBnZXRBbGxTdWJUb3BpY3MsXG4gIGdldFN1YlRvcGljLFxufVxuIl0sIm5hbWVzIjpbImF4aW9zIiwiQkFDS0VORF9ERVYiLCJjcmVhdGVTdWJUb3BpYyIsInN1YlRvcGljRGF0YSIsInBvc3QiLCJnZXRBbGxTdWJUb3BpY3MiLCJ0b3BpY0lkIiwiZ2V0IiwiZ2V0U3ViVG9waWMiLCJzdWJUb3BpY0lkIiwidCIsInYiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNldFRpbWVvdXQiLCJiaW5kIiwieW91VHViZVVybFZhbGlkYXRvciIsIlJlZ0V4cCIsInR3aXR0ZXJVcmxWYWxpZHRvciIsIlJlYWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJ1c2VMb2NhdGlvbiIsIk1vZGFsIiwiRm9ybWlrIiwiQnV0dG9uIiwiVXNlckluZm9IZWFkZXIiLCJBbmltYXRlZENoZWNrbWFyayIsIlJpY2hUZXh0RWRpdG9yIiwidXNlU2V0SW5uZXJIdG1sIiwidXNlR2V0U3RhdGVFZmZlY3QiLCJ1c2VIYW5kbGVTdWJtaXQiLCJnZXRUaW1lU2luY2UiLCJjaGVja1RveGljaXR5IiwiRm9ybUNvbnRhaW5lciIsIklucHV0V3JhcHBlciIsIkNvbnRhaW5lciIsIkRlc2NyaXB0aW9uIiwiVG94aWNpdHlDb250cm9scyIsInV1aWRSZWdFeCIsIkNyZWF0ZUNvbW1lbnRGb3JtIiwibW9kYWxQcm9wcyIsImRlc2NSZWYiLCJyYXdIVE1MIiwiY29udGVudCIsInJhd1RleHQiLCJyaWNoVGV4dEVkaXRvckRhdGEiLCJzZXRSaWNoVGV4dEVkaXRvckRhdGEiLCJ0b3hpY2l0eVNjb3JlIiwic2V0VG94aWNpdHlTY29yZSIsInBhdGhuYW1lIiwiY29udGVudElkIiwibWF0Y2giLCJzdWJ0b3BpY0lkIiwiY29tcFN0YXRlIiwiaGFuZGxlU3VibWl0IiwiaHRtbENvbnRlbnQiLCJwb3NpdGl2ZSIsIm5lZ2F0aXZlIiwibmV1dHJhbCIsImVycm9ycyIsImxlbmd0aCIsImlzU3VibWl0dGluZyIsImNyZWF0ZWRCeUljb25TcmMiLCJjcmVhdGVkQnkiLCJ0aW1lIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJ0aGVuIiwicmVzIiwiZGF0YSIsIlNFVkVSRV9UT1hJQ0lUWSIsInRvRml4ZWQiLCJzdHlsZWQiLCJGb3JtIiwidXNlTWVtbyIsInVzZVNlbGVjdG9yIiwiZmluZENvbW1lbnRDb250ZW50IiwiY29tbWVudCIsImlkIiwidmlzaXRlZCIsIlNldCIsInEiLCJjdXJyTm9kZSIsInNoaWZ0IiwiYWRkIiwiY2hpbGRyZW4iLCJmb3JFYWNoIiwiY2hpbGQiLCJoYXMiLCJwdXNoIiwidXNlciIsInMiLCJzZXNzaW9uIiwiY3VycmVudFVzZXIiLCJ0b3BpYyIsInRvcGljcyIsImxpc3QiLCJmaW5kIiwiY29tbWVudHMiLCJjIiwicm9vdFBhcmVudENvbW1lbnRJZCIsImNvbW1lbnRJZCIsInRyaWJ1bmFsQ29tbWVudCIsInRyaWJ1bmFsQ29tbWVudHMiLCJjcmVhdGVkQXQiLCJjb21tZW50Q29udGVudCIsInJlcGx5VHlwZSIsImRlc2NyaXB0aW9uIiwidXNlcm5hbWUiLCJ0eXBlIiwidXNlQ2FsbGJhY2siLCJ0b2FzdCIsInVzZUJpbmREaXNwYXRjaCIsImNvbW1lbnRBY3Rpb25zIiwidHJpYnVuYWxDb21tZW50QWN0aW9ucyIsImRlbGF5IiwidXNlRGV0ZWN0Q3VycmVudFBhZ2UiLCJpc1RyaWJ1bmFsQ29tbWVudCIsImlzT25UcmlidW5hbFBhZ2UiLCJ0cmlidW5hbENvbW1lbnRVbmRlclJldmlld0lkIiwiaXNQYXJlbnRUcmlidW5hbENvbW1lbnRVbmRlclJldmlldyIsInBhcmVudElkIiwicm9vdElkIiwiY3JlYXRlQ29tbWVudCIsImNyZWF0ZVRyaWJ1bmFsQ29tbWVudCIsInZhbHVlcyIsInNldFN1Ym1pdHRpbmciLCJyZXNldEZvcm0iLCJwcm9taXNlIiwiYWxsIiwicGVuZGluZyIsInN1Y2Nlc3MiLCJyZW5kZXIiLCJpY29uIiwiZXJyb3IiLCJ0b3hpY2l0eVN0YXR1cyIsIm1lbWVGbGFnIiwiSW5wdXQiLCJjb2xvciIsInRleHQiLCJCb29sZWFuIiwibWFyZ2luTGVmdCIsIndpZHRoIiwiaGVpZ2h0Iiwia2V5ZnJhbWVzIiwic3BsYXNoIiwicHJpbWFyeSIsInByb3BzIiwiRXJyb3JNZXNzYWdlIiwiRmFkZSIsIlN0eWxlZFNlbGVjdCIsIkxhYmVsIiwiRXJyb3IiLCJTZWxlY3QiLCJmaWVsZCIsImZvcm0iLCJwbGFjZWhvbGRlciIsInNldEZpZWxkVmFsdWUiLCJzZXRGaWVsZFRvdWNoZWQiLCJvcGVuIiwiaXNPcGVuIiwidmFsdWUiLCJzZXRWYWx1ZSIsIm1ldGFEYXRhIiwiZ2V0RmllbGRNZXRhIiwibmFtZSIsInNob3dFcnJvciIsInRvdWNoZWQiLCJlbnVtcyIsInN0YXRlIiwidG9waWNDYXRlZ29yaWVzIiwib25DaGFuZ2UiLCJlIiwic2V0RmllbGQiLCJ0YXJnZXQiLCJtYXAiLCJ2YWwiLCJPdmVybGF5IiwidXNlRWZmZWN0IiwiUmVhY3RRdWlsbCIsIkVtb2ppQnV0dG9uIiwiRW1vamlDb250YWluZXIiLCJzZXRDb250ZW50IiwiaXNIaWRkZW4iLCJzZXRJc0hpZGRlbiIsIm1vZHVsZXMiLCJ0b29sYmFyIiwiY29udGFpbmVyIiwiaGFuZGxlT25DaGFuZ2UiLCJjdXJyQ29udGVudCIsImRlbHRhIiwic291cmNlIiwiZWRpdG9yIiwiZ2V0SFRNTCIsImdldENvbnRlbnRzIiwiZ2V0VGV4dCIsInBpY2tlclJlZiIsInF1aWxsUmVmIiwiZW1vamlQaWNrZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJjdXJyZW50IiwiY3Vyc29yUG9zaXRpb24iLCJnZXRTZWxlY3Rpb24iLCJpbmRleCIsImdldExlbmd0aCIsImluc2VydFRleHQiLCJkZXRhaWwiLCJlbW9qaSIsInNldFNlbGVjdGlvbiIsImZvcm1hdHMiLCJwcmV2IiwiQ3VzdG9tQnV0dG9uIiwiQ3VzdG9tVG9vbGJhciIsImp1c3RpZnlDb250ZW50IiwiZGl2IiwiQ29sbGFwc2UiLCJGaWVsZCIsInVzZUdldExpbmtNZXRhRGF0YU9uQmx1ciIsInVpQWN0aW9ucyIsInRvcGljQWN0aW9ucyIsIlRoZW1lVG9vbHRpcCIsIlVwbG9hZE1lZGlhQ29udGFpbmVyIiwiRGlzcGxheU1lZGlhIiwiTGVmdCIsIlJpZ2h0IiwiRmxleERpdiIsIklucHV0c0NvbnRhaW5lciIsIkFycm93IiwiTGluZSIsIkRvd25BcnJvd0NpcmNsZVN2ZyIsIkNyZWF0ZVN1YlRvcGljRm9ybSIsInNldE9wZW4iLCJpbWdGaWxlIiwic2V0SW1nRmlsZSIsInZpZGVvRmlsZSIsInNldFZpZGVvRmlsZSIsInJvdGF0ZSIsInNldFJvdGF0ZSIsImdldExpbmtNZXRhRGF0YU9uQmx1ciIsImdldFRvcGljIiwiY2xvc2VNb2RhbCIsInRpdGxlIiwicGFyYW1zIiwid2hpdGVTcGFjZSIsIlN1cHBsZW1lbnRhbEluZm9ybWF0aW9uIiwidXJsIiwieXRVcmwiLCJzZWFyY2giLCJ0d2VldFVybCIsImdldExpbmtNZXRhRGF0YSIsInNldE1ldGFEYXRhIiwiY3VycmVudFRhcmdldCIsInN1YnRvcGljQWN0aW9ucyIsImNoZWNrTGlua1R5cGUiLCJ1cGxvYWRUb3BpY01lZGlhIiwiZUxpbmtzIiwiT2JqZWN0IiwiZW50cmllcyIsImsiLCJpbmNsdWRlcyIsImZpbHRlciIsImxpbmtUeXBlIiwiY29udGVudFVybCIsInVzZXJJZCIsImV2aWRlbmNlTGlua3MiLCJvZ0ltYWdlIiwiZmlsZSIsIkZpbGUiLCJzcGxpdCIsImZpbGVUeXBlIiwiZmlsZUZvcm1hdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJ1c2VDb25maWdGb3JtRXJyb3JzIiwiRXhwYW5kQnV0dG9uIiwiTGlua1R5cGVJY29uIiwiU2VjdGlvbkRlc2NyaXB0aW9uIiwiTW9iaWxlT25seUxpbmUiLCJJTklUX1RPUElDX0ZPUk1fVkFMVUVTIiwiVkFMSURBVElPTlMiLCJSRVFVSVJFRCIsInN1bW1hcnkiLCJNSU5fTEVOR1RIIiwiY2F0ZWdvcnkiLCJDcmVhdGVUb3BpY0Zvcm0iLCJyaWNoVGV4dEVkaXRvckNvbnRlbnQiLCJzZXRSaWNoVGV4dEVkaXRvckNvbnRlbnQiLCJ2YWxpZGF0b3IiLCJnZXRDb250ZW50VXJsT25CbHVyIiwiT0dGYXZpY29uIiwiSXNMb2FkaW5nSE9DIiwic2V0SXNMb2FkaW5nIiwiZmF2aWNvbiIsIlVwbG9hZElucHV0IiwiVXBsb2FkSW1hZ2VJbnB1dCIsImRpc2FibGVkIiwiVXBsb2FkRmlsZUlucHV0IiwiVmlkZW9TdmciLCJJbWFnZVN2ZyIsInVzZU9uRmlsZUNoYW5nZUhhbmRsZXIiLCJvbkZpbGVDaGFuZ2UiLCJzZXRDb250ZW50VXJsIiwiY3JlYXRlVG9waWMiLCJlcnJvckRhdGEiLCJyZXNwb25zZSIsInJlc3BvbnNlRGF0YSIsIm1zZyIsInNldFN0YXRlVmFsdWUiLCJkYXRhc2V0IiwiZmlsZXR5cGUiLCJmaWxlcyIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJjdXJyRmlsZSIsIm9ubG9hZGVuZCIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiLCJBRERfU1VCX1RPUElDIiwiR0VUX0FMTF9TVUJfVE9QSUNTIiwiU3ViVG9waWNzQXBpVXRpbCIsImVycm9yRm9ybWF0dGVyIiwiZ2V0QWxsVG9waWNzQWN0aW9uQ3JlYXRvciIsInN1YnRvcGljcyIsInBheWxvYWQiLCJhZGRUb3BpY0FjdGlvbkNyZWF0b3IiLCJ0b3BpY0RhdGEiLCJkaXNwYXRjaCJdLCJzb3VyY2VSb290IjoiIn0=