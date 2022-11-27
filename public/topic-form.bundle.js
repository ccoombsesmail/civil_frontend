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

/***/ }),

/***/ "./src/redux/reducers/subtopics/index.js":
/*!***********************************************!*\
  !*** ./src/redux/reducers/subtopics/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addAllSubtopics": () => (/* binding */ addAllSubtopics),
/* harmony export */   "addSubtopic": () => (/* binding */ addSubtopic)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
/* eslint-disable import/prefer-default-export */

var addSubtopic = function addSubtopic(action, state) {
  var newState = _objectSpread({}, state);
  newState[action.payload.id] = action.payload;
  return newState;
};
var addAllSubtopics = function addAllSubtopics(action) {
  var newState = action.payload.reduce(function (acc, subtopic) {
    acc[subtopic.id] = subtopic;
    return acc;
  }, {});
  return newState;
};

/***/ }),

/***/ "./src/redux/reducers/subtopics/subTopicsReducer.js":
/*!**********************************************************!*\
  !*** ./src/redux/reducers/subtopics/subTopicsReducer.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADD_SUB_TOPIC": () => (/* binding */ ADD_SUB_TOPIC),
/* harmony export */   "GET_ALL_SUB_TOPICS": () => (/* binding */ GET_ALL_SUB_TOPICS),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/redux/reducers/subtopics/index.js");

var ADD_SUB_TOPIC = 'ADD_SUB_TOPIC';
var GET_ALL_SUB_TOPICS = 'GET_ALL_SUB_TOPICS';
var reducerActionMap = new Map([[ADD_SUB_TOPIC, _index__WEBPACK_IMPORTED_MODULE_0__.addSubtopic], [GET_ALL_SUB_TOPICS, _index__WEBPACK_IMPORTED_MODULE_0__.addAllSubtopics]]);
var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  if (!reducerActionMap.has(action.type)) return state;
  return reducerActionMap.get(action.type)(action, state);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFdEQsSUFBTWdCLGdCQUFnQixHQUFHLElBQUlDLEdBQUcsQ0FBQyxDQUMvQixDQUFDbEIsYUFBYSxFQUFFVSwrQ0FBVyxDQUFDLEVBQzVCLENBQUNULGtCQUFrQixFQUFFWSxtREFBZSxDQUFDLENBQ3RDLENBQUM7QUFFRixJQUFNTSxPQUFPLEdBQUcsU0FBVkEsT0FBTyxHQUEyQjtFQUFBLElBQXZCM0ssS0FBSyx1RUFBRyxDQUFDLENBQUM7RUFBQSxJQUFFbUssTUFBTTtFQUNqQyxJQUFJLENBQUNNLGdCQUFnQixDQUFDMVAsR0FBRyxDQUFDb1AsTUFBTSxDQUFDL04sSUFBSSxDQUFDLEVBQUUsT0FBTzRELEtBQUs7RUFDcEQsT0FBT3lLLGdCQUFnQixDQUFDN1UsR0FBRyxDQUFDdVUsTUFBTSxDQUFDL04sSUFBSSxDQUFDLENBQUMrTixNQUFNLEVBQUVuSyxLQUFLLENBQUM7QUFDekQsQ0FBQztBQUVELGlFQUFlMkssT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL2NpdmlsLy4vc3JjL2FwaS92MS9zdWJ0b3BpY3Mvc3VidG9waWNzX2FwaV91dGlsLmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL2dlbmVyaWMvZGVsYXkuanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvZ2VuZXJpYy9yZWdleC91cmxWYWxpZGF0b3JzLmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL0NvbW1lbnRGb3JtL0luZGV4LmpzeCIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9Db21tZW50Rm9ybS9TdHlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9Db21tZW50Rm9ybS9ob29rcy91c2VHZXRTdGF0ZUVmZmVjdC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9Db21tZW50Rm9ybS9ob29rcy91c2VIYW5kbGVTdWJtaXQuanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvQ29tbW9uQ29tcG9uZW50cy9BbmltYXRlZENoZWNrbWFyay9JbmRleC5qc3giLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvQ29tbW9uQ29tcG9uZW50cy9BbmltYXRlZENoZWNrbWFyay9TdHlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9Db21tb25Db21wb25lbnRzL0Zvcm0vU2VsZWN0L0luZGV4LmpzeCIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9Db21tb25Db21wb25lbnRzL0Zvcm0vU2VsZWN0L1N0eWxlL2luZGV4LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL0NvbW1vbkNvbXBvbmVudHMvT3ZlcmxheS9zdHlsZS5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9Db21tb25Db21wb25lbnRzL1JpY2hUZXh0RWRpdG9yL0luZGV4LmpzeCIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9Db21tb25Db21wb25lbnRzL1JpY2hUZXh0RWRpdG9yL1N0eWxlL2luZGV4LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL1N1YlRvcGljRm9ybS9JbmRleC5qc3giLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvU3ViVG9waWNGb3JtL1N0eWxlL2luZGV4LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL1N1YlRvcGljRm9ybS9ob29rcy9jaGVja0xpbmtUeXBlLmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL1N1YlRvcGljRm9ybS9ob29rcy91c2VHZXRMaW5rTWV0YURhdGFPbkJsdXIuanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvU3ViVG9waWNGb3JtL2hvb2tzL3VzZUhhbmRsZVN1Ym1pdC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9Ub3BpY0Zvcm0vSW5kZXguanN4Iiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL1RvcGljRm9ybS9TdHlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9Ub3BpY0Zvcm0vY29tcG9uZW50cy9MaW5rVHlwZUljb24vSW5kZXguanN4Iiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL1RvcGljRm9ybS9jb21wb25lbnRzL0xpbmtUeXBlSWNvbi9TdHlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9Ub3BpY0Zvcm0vY29tcG9uZW50cy9VcGxvYWRJbWFnZUlucHV0L0luZGV4LmpzeCIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9Ub3BpY0Zvcm0vY29tcG9uZW50cy9VcGxvYWRJbWFnZUlucHV0L1N0eWxlL2luZGV4LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL1RvcGljRm9ybS9jb21wb25lbnRzL1VwbG9hZE1lZGlhL0luZGV4LmpzeCIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9Ub3BpY0Zvcm0vY29tcG9uZW50cy9VcGxvYWRNZWRpYS9TdHlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9Ub3BpY0Zvcm0vaG9va3MvY2hlY2tMaW5rVHlwZS5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9Ub3BpY0Zvcm0vaG9va3MvdXNlR2V0TGlua01ldGFEYXRhT25CbHVyLmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL1RvcGljRm9ybS9ob29rcy91c2VIYW5kbGVTdWJtaXQuanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvVG9waWNGb3JtL2hvb2tzL3VzZU9uRmlsZUNoYW5nZUhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcmVkdXgvYWN0aW9ucy9zdWJ0b3BpY3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcmVkdXgvcmVkdWNlcnMvc3VidG9waWNzL2luZGV4LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3JlZHV4L3JlZHVjZXJzL3N1YnRvcGljcy9zdWJUb3BpY3NSZWR1Y2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7IEJBQ0tFTkRfREVWIH0gZnJvbSAnLi4vLi4vZW5kcG9pbnRzL2VuZHBvaW50cydcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVN1YlRvcGljID0gKHN1YlRvcGljRGF0YSkgPT4gYXhpb3MucG9zdChgJHtCQUNLRU5EX0RFVn0vc3VidG9waWNzYCwgc3ViVG9waWNEYXRhKVxuXG5leHBvcnQgY29uc3QgZ2V0QWxsU3ViVG9waWNzID0gKHRvcGljSWQpID0+IGF4aW9zLmdldChgJHtCQUNLRU5EX0RFVn0vc3VidG9waWNzP3RvcGljSWQ9JHt0b3BpY0lkfWApXG5cbmV4cG9ydCBjb25zdCBnZXRTdWJUb3BpYyA9IChzdWJUb3BpY0lkKSA9PiBheGlvcy5nZXQoYCR7QkFDS0VORF9ERVZ9L3N1YnRvcGljcy8ke3N1YlRvcGljSWR9YClcbiIsImV4cG9ydCBkZWZhdWx0ICh0LCB2KSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gIGlmICh2ID09PSB0cnVlKSByZWplY3QoKVxuICBzZXRUaW1lb3V0KHJlc29sdmUuYmluZChudWxsLCB2KSwgdClcbn0pXG4iLCJleHBvcnQgY29uc3QgeW91VHViZVVybFZhbGlkYXRvciA9IG5ldyBSZWdFeHAoL14oKD86aHR0cHM/Oik/XFwvXFwvKT8oKD86d3d3fG0pXFwuKT8oKD86eW91dHViZVxcLmNvbXx5b3V0dS5iZSkpKFxcLyg/OltcXHdcXC1dK1xcP3Y9fGVtYmVkXFwvfHZcXC8pPykoW1xcd1xcLV0rKShcXFMrKT8kL2dtKVxuZXhwb3J0IGNvbnN0IHR3aXR0ZXJVcmxWYWxpZHRvciA9IG5ldyBSZWdFeHAoL2h0dHAoPzpzKT86XFwvXFwvKD86d3d3KT90d2l0dGVyXFwuY29tXFwvKFthLXpBLVowLTlfXSspL2dtKVxuIiwiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1ib290c3RyYXAvTW9kYWwnXG5pbXBvcnQgeyBGb3JtaWsgfSBmcm9tICdmb3JtaWsnXG5cbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vQ29tbW9uQ29tcG9uZW50cy9CdXR0b24vSW5kZXgnXG5pbXBvcnQgVXNlckluZm9IZWFkZXIgZnJvbSAnLi4vQ29tbW9uQ29tcG9uZW50cy9Vc2VySW5mb0hlYWRlci9JbmRleCdcbmltcG9ydCBBbmltYXRlZENoZWNrbWFyayBmcm9tICcuLi9Db21tb25Db21wb25lbnRzL0FuaW1hdGVkQ2hlY2ttYXJrL0luZGV4J1xuaW1wb3J0IFJpY2hUZXh0RWRpdG9yIGZyb20gJy4uL0NvbW1vbkNvbXBvbmVudHMvUmljaFRleHRFZGl0b3IvSW5kZXgnXG5cbmltcG9ydCB1c2VTZXRJbm5lckh0bWwgZnJvbSAnLi4vaG9va3MvdXNlU2V0SW5uZXJIdG1sJ1xuaW1wb3J0IHVzZUdldFN0YXRlRWZmZWN0IGZyb20gJy4vaG9va3MvdXNlR2V0U3RhdGVFZmZlY3QnXG5pbXBvcnQgdXNlSGFuZGxlU3VibWl0IGZyb20gJy4vaG9va3MvdXNlSGFuZGxlU3VibWl0J1xuXG5pbXBvcnQgeyBnZXRUaW1lU2luY2UgfSBmcm9tICcuLi8uLi9nZW5lcmljL3N0cmluZy9kYXRlRm9ybWF0dGVyJ1xuaW1wb3J0IHsgY2hlY2tUb3hpY2l0eSB9IGZyb20gJy4uLy4uL2FwaS92MS9jb21tZW50cy9jb21tZW50c19hcGlfdXRpbCdcblxuaW1wb3J0IHtcbiAgRm9ybUNvbnRhaW5lciwgSW5wdXRXcmFwcGVyLCBDb250YWluZXIsIERlc2NyaXB0aW9uLCBUb3hpY2l0eUNvbnRyb2xzLFxufSBmcm9tICcuL1N0eWxlJ1xuXG5jb25zdCB1dWlkUmVnRXggPSBuZXcgUmVnRXhwKC9cXGJbMC05YS1mXXs4fVxcYi1bMC05YS1mXXs0fS1bMC05YS1mXXs0fS1bMC05YS1mXXs0fS1cXGJbMC05YS1mXXsxMn1cXGIvZylcblxuY29uc3QgQ3JlYXRlQ29tbWVudEZvcm0gPSAoeyBtb2RhbFByb3BzIH0pID0+IHtcbiAgY29uc3QgZGVzY1JlZiA9IHVzZVJlZihudWxsKVxuICBjb25zdCBbcmljaFRleHRFZGl0b3JEYXRhLCBzZXRSaWNoVGV4dEVkaXRvckRhdGFdID0gdXNlU3RhdGUoe1xuICAgIHJhd0hUTUw6ICcnLFxuICAgIGNvbnRlbnQ6ICcnLFxuICAgIHJhd1RleHQ6ICcnLFxuICB9KVxuICBjb25zdCBbdG94aWNpdHlTY29yZSwgc2V0VG94aWNpdHlTY29yZV0gPSB1c2VTdGF0ZShudWxsKVxuXG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZUxvY2F0aW9uKClcbiAgY29uc3QgY29udGVudElkID0gcGF0aG5hbWUubWF0Y2godXVpZFJlZ0V4KVswXVxuICBjb25zdCBzdWJ0b3BpY0lkID0gcGF0aG5hbWUubWF0Y2godXVpZFJlZ0V4KVsxXVxuICBjb25zdCBjb21wU3RhdGUgPSB1c2VHZXRTdGF0ZUVmZmVjdChjb250ZW50SWQsIHN1YnRvcGljSWQsIG1vZGFsUHJvcHMpXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IHVzZUhhbmRsZVN1Ym1pdChjb21wU3RhdGUsIHJpY2hUZXh0RWRpdG9yRGF0YS5yYXdIVE1MLCByaWNoVGV4dEVkaXRvckRhdGEucmF3VGV4dCwgbW9kYWxQcm9wcywgc3VidG9waWNJZCB8fCBjb250ZW50SWQsIGNvbnRlbnRJZClcbiAgdXNlU2V0SW5uZXJIdG1sKGRlc2NSZWYsIGNvbXBTdGF0ZS5odG1sQ29udGVudClcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8Rm9ybWlrXG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcbiAgICAgICAgICBjb250ZW50OiAnJyxcbiAgICAgICAgICBwb3NpdGl2ZTogJycsXG4gICAgICAgICAgbmVnYXRpdmU6ICcnLFxuICAgICAgICAgIG5ldXRyYWw6ICcnLFxuICAgICAgICB9fVxuICAgICAgICB2YWxpZGF0ZT17KCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGVycm9ycyA9IHt9XG4gICAgICAgICAgaWYgKHJpY2hUZXh0RWRpdG9yRGF0YS5jb250ZW50Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgZXJyb3JzLmNvbnRlbnQgPSAnV3JpdGUgU29tZXRoaW5nJ1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZXJyb3JzXG4gICAgICAgIH19XG4gICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgICA+XG4gICAgICAgIHsoeyBpc1N1Ym1pdHRpbmcgfSkgPT4gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxuICAgICAgICAgICAgICA8TW9kYWwuVGl0bGU+V3JpdGUgWW91ciBSZXBseTwvTW9kYWwuVGl0bGU+XG4gICAgICAgICAgICA8L01vZGFsLkhlYWRlcj5cbiAgICAgICAgICAgIDxGb3JtQ29udGFpbmVyPlxuICAgICAgICAgICAgICA8TW9kYWwuQm9keT5cbiAgICAgICAgICAgICAgICA8VXNlckluZm9IZWFkZXJcbiAgICAgICAgICAgICAgICAgIGljb25TcmM9e2NvbXBTdGF0ZS5jcmVhdGVkQnlJY29uU3JjfVxuICAgICAgICAgICAgICAgICAgdXNlcm5hbWU9e2NvbXBTdGF0ZS5jcmVhdGVkQnl9XG4gICAgICAgICAgICAgICAgICB0aW1lPXtnZXRUaW1lU2luY2UoY29tcFN0YXRlLnRpbWUpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPERlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gcmVmPXtkZXNjUmVmfSAvPlxuICAgICAgICAgICAgICAgIDwvRGVzY3JpcHRpb24+XG4gICAgICAgICAgICAgICAgPElucHV0V3JhcHBlcj5cbiAgICAgICAgICAgICAgICAgIDxSaWNoVGV4dEVkaXRvclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtyaWNoVGV4dEVkaXRvckRhdGEuY29udGVudH1cbiAgICAgICAgICAgICAgICAgICAgc2V0Q29udGVudD17c2V0UmljaFRleHRFZGl0b3JEYXRhfVxuICAgICAgICAgICAgICAgICAgICBzZXRUb3hpY2l0eVNjb3JlPXtzZXRUb3hpY2l0eVNjb3JlfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0lucHV0V3JhcHBlcj5cbiAgICAgICAgICAgICAgPC9Nb2RhbC5Cb2R5PlxuICAgICAgICAgICAgICA8TW9kYWwuRm9vdGVyPlxuICAgICAgICAgICAgICAgIDxUb3hpY2l0eUNvbnRyb2xzPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2hlY2tUb3hpY2l0eSh7IGNvbnRlbnQ6IHJpY2hUZXh0RWRpdG9yRGF0YS5yYXdUZXh0IH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUb3hpY2l0eVNjb3JlKHJlcy5kYXRhLlNFVkVSRV9UT1hJQ0lUWS50b0ZpeGVkKDIpKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ2hlY2sgVG94aWNpdHkgU2NvcmVcbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8QW5pbWF0ZWRDaGVja21hcmsgdG94aWNpdHlTY29yZT17dG94aWNpdHlTY29yZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwPnsgdG94aWNpdHlTY29yZSAmJiBgWW91ciB0b3hpY2l0eSBzY29yZSBpcyAke3RveGljaXR5U2NvcmV9YH08L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1RveGljaXR5Q29udHJvbHM+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgZGlzYWJsZWQ9e2lzU3VibWl0dGluZ30+XG4gICAgICAgICAgICAgICAgICBTdWJtaXRcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9Nb2RhbC5Gb290ZXI+XG4gICAgICAgICAgICA8L0Zvcm1Db250YWluZXI+XG5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvRm9ybWlrPlxuICAgIDwvQ29udGFpbmVyPlxuXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlQ29tbWVudEZvcm1cbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBGb3JtIH0gZnJvbSAnZm9ybWlrJ1xuXG5leHBvcnQgY29uc3QgRm9ybUNvbnRhaW5lciA9IHN0eWxlZChGb3JtKWBcbiAgbWFyZ2luLXRvcDogMDtcbiAgYm9yZGVyLXJhZGl1czogLjVlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG5gXG5cbmV4cG9ydCBjb25zdCBEZXNjcmlwdGlvbiA9IHN0eWxlZCgncCcpYCBcbiAgd2lkdGg6IDkwJTtcbiAgcGFkZGluZzogLjVlbSAwO1xuICBtYXJnaW4tYm90dG9tOiAyZW07XG4gIGZvbnQtc2l6ZTogLjg1ZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbmBcblxuZXhwb3J0IGNvbnN0IElucHV0V3JhcHBlciA9IHN0eWxlZCgnZGl2JylgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICB3aWR0aDogMzB2dztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgICAgcGFkZGluZzogLjJlbSAuNWVtO1xuICAgIGJhY2tncm91bmQ6ICNlMGU1ZWM7XG4gICAgYm9yZGVyLXJhZGl1czogLjRlbTtcbiAgICBib3gtc2hhZG93OlxuICAgLTdweCAtN3B4IDIwcHggMHB4ICNmZmY5LFxuICAgLTRweCAtNHB4IDVweCAwcHggI2ZmZjksXG4gICA3cHggN3B4IDIwcHggMHB4ICMwMDAyLFxuICAgNHB4IDRweCA1cHggMHB4ICMwMDAxLFxuICAgaW5zZXQgMHB4IDBweCAwcHggMHB4ICNmZmY5LFxuICAgaW5zZXQgMHB4IDBweCAwcHggMHB4ICMwMDAxLFxuICAgaW5zZXQgMHB4IDBweCAwcHggMHB4ICNmZmY5LFxuICAgaW5zZXQgMHB4IDBweCAwcHggMHB4ICMwMDAxO1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGgxIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctYm90dG9tOiAuNWVtO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgfVxuIGBcblxuZXhwb3J0IGNvbnN0IFRveGljaXR5Q29udHJvbHMgPSBzdHlsZWQoJ2RpdicpYFxuICBmbGV4LWdyb3c6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gID4gZGl2IHtcbiAgICBtYXJnaW4tbGVmdDogMXZ3O1xuICB9XG5cbiAgcCB7XG4gICAgbWFyZ2luOiAwIDFlbTtcbiAgICBjb2xvcjogIzk3OWNiMDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLjF2dzsgIFxuICB9XG5cbmBcbiIsImltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmNvbnN0IGZpbmRDb21tZW50Q29udGVudCA9IChjb21tZW50LCBpZCkgPT4ge1xuICBjb25zdCB2aXNpdGVkID0gbmV3IFNldCgpXG4gIGNvbnN0IHEgPSBbY29tbWVudF1cbiAgd2hpbGUgKHEubGVuZ3RoICE9PSAwKSB7XG4gICAgY29uc3QgY3Vyck5vZGUgPSBxLnNoaWZ0KClcbiAgICB2aXNpdGVkLmFkZChjdXJyTm9kZS5kYXRhLmlkKVxuICAgIGlmIChjdXJyTm9kZS5kYXRhLmlkID09PSBpZCkgcmV0dXJuIGN1cnJOb2RlLmRhdGEuY29udGVudFxuICAgIGN1cnJOb2RlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBpZiAoIXZpc2l0ZWQuaGFzKGNoaWxkLmRhdGEuaWQpKSBxLnB1c2goY2hpbGQpXG4gICAgfSlcbiAgfVxuICByZXR1cm4gJydcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHRvcGljSWQsIHN1YnRvcGljSWQsIG1vZGFsUHJvcHMpID0+IHtcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKChzKSA9PiBzLnNlc3Npb24uY3VycmVudFVzZXIpXG4gIGNvbnN0IHRvcGljID0gdXNlU2VsZWN0b3IoKHMpID0+IHMudG9waWNzLmxpc3QpPy5maW5kKCh0KSA9PiB0LmlkID09PSB0b3BpY0lkKVxuICBjb25zdCBjb21tZW50ID0gdXNlU2VsZWN0b3IoKHMpID0+IHMuY29tbWVudHMubGlzdCk/LmZpbmQoXG4gICAgKGMpID0+IGMuZGF0YT8uaWQgPT09IG1vZGFsUHJvcHM/LnJvb3RQYXJlbnRDb21tZW50SWQgfHwgbW9kYWxQcm9wcz8uY29tbWVudElkLFxuICApXG4gIGNvbnN0IHRyaWJ1bmFsQ29tbWVudCA9IHVzZVNlbGVjdG9yKChzKSA9PiBzLnRyaWJ1bmFsQ29tbWVudHMubGlzdCk/LmZpbmQoXG4gICAgKGMpID0+IGMuZGF0YT8uaWQgPT09IG1vZGFsUHJvcHM/LnJvb3RQYXJlbnRDb21tZW50SWQsXG4gIClcblxuICBjb25zdCB7IGNyZWF0ZWRCeSwgY3JlYXRlZEJ5SWNvblNyYywgY3JlYXRlZEF0IH0gPSBjb21tZW50Py5kYXRhIHx8IHRyaWJ1bmFsQ29tbWVudD8uZGF0YSB8fCB7fVxuICByZXR1cm4gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgY29tbWVudENvbnRlbnQgPSBtb2RhbFByb3BzPy5yZXBseVR5cGUgIT09ICdSRVBMWV9GUk9NX1RPUElDJ1xuICAgICAgPyBmaW5kQ29tbWVudENvbnRlbnQoY29tbWVudCB8fCB0cmlidW5hbENvbW1lbnQsIG1vZGFsUHJvcHM/LmNvbW1lbnRJZCkgOiB0b3BpYz8uZGVzY3JpcHRpb25cbiAgICByZXR1cm4ge1xuICAgICAgc3VidG9waWNJZCxcbiAgICAgIGNyZWF0ZWRCeUljb25TcmM6IGNyZWF0ZWRCeUljb25TcmMgfHwgdG9waWM/LmNyZWF0ZWRCeUljb25TcmMsXG4gICAgICB1c2VybmFtZTogdXNlcj8udXNlcm5hbWUsXG4gICAgICBjcmVhdGVkQnk6IGNyZWF0ZWRCeSB8fCB0b3BpYz8uY3JlYXRlZEJ5IHx8IHRyaWJ1bmFsQ29tbWVudD8uY3JlYXRlZEJ5LFxuICAgICAgdGltZTogY3JlYXRlZEF0IHx8IHRvcGljPy5jcmVhdGVkQXQsXG4gICAgICBodG1sQ29udGVudDogY29tbWVudENvbnRlbnQsXG4gICAgICByb290UGFyZW50Q29tbWVudElkOiBtb2RhbFByb3BzPy5yb290UGFyZW50Q29tbWVudElkIHx8IG51bGwsXG4gICAgICB0eXBlOiBtb2RhbFByb3BzPy5yZXBseVR5cGUsXG4gICAgfVxuICB9LCBbdG9waWMsIHVzZXIsIGNvbW1lbnQsIHN1YnRvcGljSWQsIG1vZGFsUHJvcHNdKVxufVxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknXG5cbmltcG9ydCB1c2VCaW5kRGlzcGF0Y2ggZnJvbSAnLi4vLi4vaG9va3MvcmVkdXgvdXNlQmluZERpc3BhdGNoJ1xuaW1wb3J0IGNvbW1lbnRBY3Rpb25zIGZyb20gJy4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvY29tbWVudHMnXG5pbXBvcnQgdHJpYnVuYWxDb21tZW50QWN0aW9ucyBmcm9tICcuLi8uLi8uLi9yZWR1eC9hY3Rpb25zL3RyaWJ1bmFsX2NvbW1lbnRzJ1xuXG5pbXBvcnQgeyBjaGVja1RveGljaXR5IH0gZnJvbSAnLi4vLi4vLi4vYXBpL3YxL2NvbW1lbnRzL2NvbW1lbnRzX2FwaV91dGlsJ1xuaW1wb3J0IGRlbGF5IGZyb20gJy4uLy4uLy4uL2dlbmVyaWMvZGVsYXknXG5pbXBvcnQgdXNlRGV0ZWN0Q3VycmVudFBhZ2UgZnJvbSAnLi4vLi4vaG9va3Mvcm91dGluZy91c2VEZXRlY3RDdXJyZW50UGFnZSdcblxuZXhwb3J0IGRlZmF1bHQgKGNvbXBTdGF0ZSwgY29udGVudCwgcmF3VGV4dCwgbW9kYWxQcm9wcywgY29udGVudElkLCB0b3BpY0lkKSA9PiB7XG4gIGNvbnN0IHsgaXNPblRyaWJ1bmFsUGFnZTogaXNUcmlidW5hbENvbW1lbnQgfSA9IHVzZURldGVjdEN1cnJlbnRQYWdlKClcblxuICBjb25zdCB7XG4gICAgdHJpYnVuYWxDb21tZW50VW5kZXJSZXZpZXdJZCxcbiAgICBjb21tZW50SWQsXG4gIH0gPSBtb2RhbFByb3BzIHx8IHt9XG5cbiAgY29uc3QgaXNQYXJlbnRUcmlidW5hbENvbW1lbnRVbmRlclJldmlldyA9IGlzVHJpYnVuYWxDb21tZW50XG4gICYmIHRyaWJ1bmFsQ29tbWVudFVuZGVyUmV2aWV3SWQgPT09IGNvbW1lbnRJZFxuXG4gIGNvbnN0IHBhcmVudElkID0gaXNQYXJlbnRUcmlidW5hbENvbW1lbnRVbmRlclJldmlldyA/IG51bGwgOiBjb21tZW50SWQgfHwgbnVsbFxuICBjb25zdCByb290SWQgPSBpc1BhcmVudFRyaWJ1bmFsQ29tbWVudFVuZGVyUmV2aWV3ID8gbnVsbCA6IGNvbXBTdGF0ZS5yb290UGFyZW50Q29tbWVudElkXG5cbiAgY29uc3Qge1xuICAgIGNyZWF0ZUNvbW1lbnQsXG4gICAgY3JlYXRlVHJpYnVuYWxDb21tZW50LFxuICB9ID0gdXNlQmluZERpc3BhdGNoKGNvbW1lbnRBY3Rpb25zLCB0cmlidW5hbENvbW1lbnRBY3Rpb25zKVxuXG4gIHJldHVybiB1c2VDYWxsYmFjaygodmFsdWVzLCB7IHNldFN1Ym1pdHRpbmcsIHJlc2V0Rm9ybSB9KSA9PiB7XG4gICAgdG9hc3QucHJvbWlzZShcbiAgICAgIFByb21pc2UuYWxsKFtkZWxheSgxNTAwKSwgY2hlY2tUb3hpY2l0eSh7IGNvbnRlbnQ6IHJhd1RleHQgfSldKSxcbiAgICAgIHtcbiAgICAgICAgcGVuZGluZzogJ0FuYWx5emluZyBDb21tZW50Li4uJyxcbiAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgIHJlbmRlcih7IGRhdGEgfSkge1xuICAgICAgICAgICAgY29uc3QgdG94aWNpdHlTY29yZSA9IGRhdGFbMV0uZGF0YS5TRVZFUkVfVE9YSUNJVFlcbiAgICAgICAgICAgIGlmICh0b3hpY2l0eVNjb3JlIDwgMC42KSByZXR1cm4gJ1RoYW5rcyBGb3IgQmVpbmcgQ2l2aWwhJ1xuICAgICAgICAgICAgaWYgKHRveGljaXR5U2NvcmUgPj0gMC42ICYmIHRveGljaXR5U2NvcmUgPD0gMC45KSByZXR1cm4gJ1RoYW5rcyBmb3IgYmVpbmcgc2VtaS1jaXZpbC4gTWF5YmUgc2F5IHRoaW5ncyBhIGJpdCBuaWNlcidcbiAgICAgICAgICAgIHJldHVybiAnWW91IGFyZSBiZWluZyB0b3hpYyA6KCBcXG4gWW91ciBjb21tZW50IHdpbGwgYmUgZmxhZ2dlZCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIC8vIG90aGVyIG9wdGlvbnNcbiAgICAgICAgICBpY29uOiAn8J+foicsXG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiAnUHJvbWlzZSByZWplY3RlZCDwn6SvJyxcbiAgICAgIH0sXG4gICAgKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBjb25zdCB0b3hpY2l0eVNjb3JlID0gZGF0YVsxXS5kYXRhLlNFVkVSRV9UT1hJQ0lUWVxuICAgICAgbGV0IHRveGljaXR5U3RhdHVzXG4gICAgICBpZiAodG94aWNpdHlTY29yZSA8IDAuNikgdG94aWNpdHlTdGF0dXMgPSAnTk9UX1RPWElDJ1xuICAgICAgaWYgKHRveGljaXR5U2NvcmUgPiAwLjkpIHRveGljaXR5U3RhdHVzID0gJ1RPWElDJ1xuICAgICAgY29uc3QgY29tbWVudCA9IHtcbiAgICAgICAgLi4udmFsdWVzLFxuICAgICAgICBjb250ZW50LFxuICAgICAgICBtZW1lRmxhZzogZmFsc2UsXG4gICAgICAgIHBhcmVudElkLFxuICAgICAgICBjb250ZW50SWQsXG4gICAgICAgIHN1YnRvcGljSWQ6IGNvbnRlbnRJZCxcbiAgICAgICAgdG9waWNJZCxcbiAgICAgICAgY3JlYXRlZEJ5OiBjb21wU3RhdGUudXNlcm5hbWUsXG4gICAgICAgIHJvb3RJZCxcbiAgICAgICAgcmF3VGV4dCxcbiAgICAgICAgdG94aWNpdHlTdGF0dXMsXG4gICAgICB9XG4gICAgICByZXR1cm4gaXNUcmlidW5hbENvbW1lbnQgPyBjcmVhdGVUcmlidW5hbENvbW1lbnQoY29tbWVudCkgOiBjcmVhdGVDb21tZW50KGNvbW1lbnQpXG4gICAgfSlcblxuICAgIHNldFN1Ym1pdHRpbmcoZmFsc2UpXG4gICAgcmVzZXRGb3JtKHt9KVxuICB9LCBbXG4gICAgY29tcFN0YXRlLFxuICAgIGNvbnRlbnQsXG4gICAgcmF3VGV4dCxcbiAgICBtb2RhbFByb3BzLnRyaWJ1bmFsQ29tbWVudFVuZGVyUmV2aWV3SWQsXG4gICAgbW9kYWxQcm9wcy5jb21tZW50SWQsXG4gICAgY29udGVudElkLFxuICBdKVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbGFiZWwtaGFzLWFzc29jaWF0ZWQtY29udHJvbCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyBDb250YWluZXIsIElucHV0IH0gZnJvbSAnLi9TdHlsZS9pbmRleCdcblxuY29uc3QgQW5pbWF0ZWRDaGVja21hcmsgPSAoeyB0b3hpY2l0eVNjb3JlIH0pID0+IHtcbiAgbGV0IGNvbG9yXG4gIGxldCB0ZXh0XG4gIGlmICh0b3hpY2l0eVNjb3JlIDwgMC42KSB7IGNvbG9yID0gJ2dyZWVuJzsgdGV4dCA9ICdHcmVhdCEnIH1cbiAgaWYgKHRveGljaXR5U2NvcmUgPj0gMC42ICYmIHRveGljaXR5U2NvcmUgPD0gMC45KSB7IGNvbG9yID0gJ3ZhcigtLW0tZGFuZ2VyLWNvbG9yKSc7IHRleHQgPSAnWW91IGFyZSBPSyBidXQgZ2V0dGluZyBjbG9zZScgfVxuICBpZiAodG94aWNpdHlTY29yZSA+IDAuOSkgeyBjb2xvciA9ICdyZWQnOyB0ZXh0ID0gJ1lvdSBhcmUgYmVpbmcgdG94aWMnIH1cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPENvbnRhaW5lciBjb2xvcj17Y29sb3J9PlxuICAgICAgICA8SW5wdXQgcmVhZE9ubHkgZGlzYWJsZWQgY2hlY2tlZD17Qm9vbGVhbih0b3hpY2l0eVNjb3JlKX0gdHlwZT1cImNoZWNrYm94XCIgLz5cbiAgICAgICAgPGxhYmVsIC8+XG4gICAgICAgIDxzdmcgd2lkdGg9XCIxNVwiIGhlaWdodD1cIjE0XCIgdmlld0JveD1cIjAgMCAxNSAxNFwiIGZpbGw9XCJub25lXCI+XG4gICAgICAgICAgPHBhdGggZD1cIk0yIDguMzYzNjRMNi4yMzA3NyAxMkwxMyAyXCIgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIHt0b3hpY2l0eVNjb3JlICYmIDxzcGFuIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcwLjV2dycgfX0+e3RleHR9PC9zcGFuPn1cbiAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZlcnNpb249XCIxLjFcIiBzdHlsZT17eyB3aWR0aDogMCwgaGVpZ2h0OiAwIH19PlxuICAgICAgICA8ZGVmcz5cbiAgICAgICAgICA8ZmlsdGVyIGlkPVwiZ29vXCI+XG4gICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgaW49XCJTb3VyY2VHcmFwaGljXCIgc3RkRGV2aWF0aW9uPVwiNFwiIHJlc3VsdD1cImJsdXJcIiAvPlxuICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggaW49XCJibHVyXCIgbW9kZT1cIm1hdHJpeFwiIHZhbHVlcz1cIjEgMCAwIDAgMCAgMCAxIDAgMCAwICAwIDAgMSAwIDAgIDAgMCAwIDIyIC03XCIgcmVzdWx0PVwiZ29vXCIgLz5cbiAgICAgICAgICAgIDxmZUJsZW5kIGluPVwiU291cmNlR3JhcGhpY1wiIGluMj1cImdvb1wiIC8+XG4gICAgICAgICAgPC9maWx0ZXI+XG4gICAgICAgIDwvZGVmcz5cbiAgICAgIDwvc3ZnPlxuICAgIDwvPlxuICApXG59XG5leHBvcnQgZGVmYXVsdCBBbmltYXRlZENoZWNrbWFya1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuaW1wb3J0IHN0eWxlZCwgeyBrZXlmcmFtZXMgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuLy8gY29uc3QgcHJpbWFyeSA9ICcjNGQyNzFhODgnXG5cbmNvbnN0IHNwbGFzaCA9IChwcmltYXJ5KSA9PiBrZXlmcmFtZXNgXG4gIDQwJSB7XG4gICAgYmFja2dyb3VuZDogJHtwcmltYXJ5fTtcbiAgICBib3gtc2hhZG93OiAwIC0xOHB4IDAgLThweCAke3ByaW1hcnl9LCAxNnB4IC04cHggMCAtOHB4ICR7cHJpbWFyeX0sIDE2cHggOHB4IDAgLThweCAke3ByaW1hcnl9LCAwIDE4cHggMCAtOHB4ICR7cHJpbWFyeX0sIC0xNnB4IDhweCAwIC04cHggJHtwcmltYXJ5fSwgLTE2cHggLThweCAwIC04cHggJHtwcmltYXJ5fTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQ6ICR7cHJpbWFyeX07XG4gICAgYm94LXNoYWRvdzogMCAtMzZweCAwIC0xMHB4IHRyYW5zcGFyZW50LCAzMnB4IC0xNnB4IDAgLTEwcHggdHJhbnNwYXJlbnQsIDMycHggMTZweCAwIC0xMHB4IHRyYW5zcGFyZW50LCAwIDM2cHggMCAtMTBweCB0cmFuc3BhcmVudCwgLTMycHggMTZweCAwIC0xMHB4IHRyYW5zcGFyZW50LCAtMzJweCAtMTZweCAwIC0xMHB4IHRyYW5zcGFyZW50O1xuICB9XG4gIFxuXG5gXG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMuY29sb3J9O1xuICAvKiB0cmFuc2Zvcm06IHNjYWxlKDMpOyAqL1xuICBzcGFuIHtcbiAgICBtYXJnaW4tbGVmdDogLjV2dztcbiAgfVxuICBpbnB1dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIGhlaWdodDogMjRweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjYmZiZmMwO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB6LWluZGV4OiA5OTk5OTk5OTk5O1xuXG4gIH1cblxuICBsYWJlbCB7XG4gICAgei1pbmRleDogOTk5OTk5OTk5O1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIGhlaWdodDogMjRweDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgLXdlYmtpdC1maWx0ZXI6IHVybCgjZ29vKTtcbiAgICBmaWx0ZXI6IHVybCgjZ29vKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcbiAgICAvKiBwb2ludGVyLWV2ZW50czogbm9uZTsgKi9cbiAgfVxuXG4gIHN2ZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNXB4O1xuICAgIGxlZnQ6IDRweDtcbiAgICB6LWluZGV4OiA5OTk5OTk5OTk5OTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBwYXRoIHtcbiAgICAgIHN0cm9rZTogd2hpdGU7XG4gICAgICBzdHJva2Utd2lkdGg6IDM7XG4gICAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7XG4gICAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kO1xuICAgICAgc3Ryb2tlLWRhc2hhcnJheTogMTk7XG4gICAgICBzdHJva2UtZGFzaG9mZnNldDogMTk7XG4gICAgICB0cmFuc2l0aW9uOiBzdHJva2UtZGFzaG9mZnNldCAuM3MgZWFzZTtcbiAgICAgIHRyYW5zaXRpb24tZGVsYXk6IC4ycztcbiAgICB9XG4gIH1cblxuICBpbnB1dDpjaGVja2VkIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbiAgaW5wdXQ6Y2hlY2tlZCArIGxhYmVsIHtcbiAgICAgIGFuaW1hdGlvbjogJHsocHJvcHMpID0+IHNwbGFzaChwcm9wcy5jb2xvcil9IC42cyBlYXNlIGZvcndhcmRzO1xuICAgICAgYm9yZGVyOiAycHggc29saWQgJHsocHJvcHMpID0+IHByb3BzLmNvbG9yfTtcblxuICAgICAgKyBzdmcgcGF0aCB7XG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwXG4gICAgICB9XG4gIH1cblxuYFxuXG5leHBvcnQgY29uc3QgSW5wdXQgPSBzdHlsZWQoJ2lucHV0JylgXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1hcmdpbjogMDtcbiAgICAmOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IDA7XG4gICAgfVxuYFxuIiwiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbGFiZWwtaGFzLWFzc29jaWF0ZWQtY29udHJvbCAqL1xuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcHJvcC10eXBlcyAqL1xuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LXByb3BzLW5vLXNwcmVhZGluZyAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBFcnJvck1lc3NhZ2UgfSBmcm9tICdmb3JtaWsnXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgRmFkZSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcbmltcG9ydCB7IFN0eWxlZFNlbGVjdCwgTGFiZWwsIENvbnRhaW5lciB9IGZyb20gJy4vU3R5bGUnXG5pbXBvcnQgRXJyb3IgZnJvbSAnLi4vRXJyb3JNZXNzYWdlL0luZGV4J1xuXG5jb25zdCBTZWxlY3QgPSAoe1xuICB3aWR0aCwgZmllbGQsIGZvcm0sIHBsYWNlaG9sZGVyLCBzZXRGaWVsZFZhbHVlLCBzZXRGaWVsZFRvdWNoZWQsIC4uLnByb3BzXG59KSA9PiB7XG4gIGNvbnN0IFtvcGVuLCBpc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IG1ldGFEYXRhID0gZm9ybS5nZXRGaWVsZE1ldGEoZmllbGQubmFtZSlcbiAgY29uc3Qgc2hvd0Vycm9yID0gbWV0YURhdGEuZXJyb3IgJiYgbWV0YURhdGEudG91Y2hlZFxuICBjb25zdCBlbnVtcyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuZW51bXMudG9waWNDYXRlZ29yaWVzKVxuXG4gIGNvbnN0IG9uQ2hhbmdlID0gdXNlQ2FsbGJhY2soKGUsIHNldEZpZWxkKSA9PiB7XG4gICAgc2V0RmllbGQoZmllbGQubmFtZSwgZS50YXJnZXQudmFsdWUpXG4gICAgc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cblxuICAgICAgPEZhZGUgaW49e29wZW59PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxMYWJlbCBodG1sRm9yPXtmaWVsZC5uYW1lfT5TZWxlY3QgQSBDYXRlZ29yeTwvTGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9GYWRlPlxuXG4gICAgICA8U3R5bGVkU2VsZWN0XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICB7Li4uZmllbGR9XG4gICAgICAgIGlkPXtmaWVsZC5uYW1lfVxuICAgICAgICBzaG93RXJyb3I9e3Nob3dFcnJvcn1cbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uQ2hhbmdlKGUsIHNldEZpZWxkVmFsdWUpfVxuICAgICAgICBvbkZvY3VzPXsoKSA9PiBpc09wZW4odHJ1ZSl9XG4gICAgICAgIG9uQmx1cj17KCkgPT4gaXNPcGVuKGZhbHNlKX1cbiAgICAgID5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlNlbGVjdCBBIENhdGVnb3J5PC9vcHRpb24+XG4gICAgICAgIHtcbiAgICAgICAgZW51bXM/Lm1hcCgodmFsKSA9PiA8b3B0aW9uIGtleT17dmFsfSB2YWx1ZT17dmFsfT57dmFsfTwvb3B0aW9uPilcbiAgICAgIH1cbiAgICAgIDwvU3R5bGVkU2VsZWN0PlxuICAgICAgPEVycm9yTWVzc2FnZSB3aWR0aD17d2lkdGh9IG5hbWU9e2ZpZWxkLm5hbWV9IGNvbXBvbmVudD17RXJyb3J9IC8+XG4gICAgPC9Db250YWluZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IGF1dG87XG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcbiAgLmZhZGUge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogODUlO1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBMYWJlbCA9IHN0eWxlZCgnbGFiZWwnKWBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBjb2xvcjogdmFyKC0tbS10cmltLWNvbG9yKTtcbiAgZm9udC1zaXplOiAuNWVtO1xuICBmb250LXdlaWdodDogYm9sZDtcblxuYFxuXG5leHBvcnQgY29uc3QgU3R5bGVkU2VsZWN0ID0gc3R5bGVkKCdzZWxlY3QnKWBcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogLjVlbTtcbiAgY29sb3I6IGJsYWNrO1xuICB3aWR0aDogJHsocHJvcHMpID0+IHByb3BzLndpZHRoIHx8ICczMCUnfTtcbiAgaGVpZ2h0OiAzLjVlbTtcbiAgZm9udC1zaXplOiAuOGVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWlucHV0TGluZUhlaWdodCk7XG4gIG91dGxpbmU6bm9uZTtcbiAgYmFja2dyb3VuZDogI0U1RTVFNTtcbiAgYm9yZGVyOiAkeyhwcm9wcykgPT4gKHByb3BzLnNob3dFcnJvciA/ICcxcHggc29saWQgdmFyKC0tbS1kYW5nZXItY29sb3IpJyA6ICcxcHggc29saWQgdmFyKC0tYmcpJyl9O1xuICBib3JkZXItcmFkaXVzOiAwLjRyZW07XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgdmFyKC0tdHJhbnNpdGlvbkR1cmF0aW9uKTtcblxuICA6OnBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogdmFyKC0tbS10cmltLWNvbG9yKTtcbiAgfVxuICA6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogIDVweCA1cHggOHB4ICNmZmZmZmYsXG4gICAgICAgICAgICAgLTVweCAtNXB4IDhweCAjZmZmZmZmO1xuICB9XG5cbiAgOm5vdCg6cGxhY2Vob2xkZXItc2hvd24pICsgJHtMYWJlbH0sXG4gIDpmb2N1czpub3QoOnBsYWNlaG9sZGVyLXNob3duKSArICR7TGFiZWx9IHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06XG4gICAgICB0cmFuc2xhdGUzZCgwLCB2YXIoLS1sYWJlbFRyYW5zZm9ybWVkUG9zWSksIDApXG4gICAgICBzY2FsZSh2YXIoLS1sYWJlbFNjYWxlRmFjdG9yKSk7XG4gICAgdHJhbnNpdGlvbjpcbiAgICAgIHRyYW5zZm9ybSB2YXIoLS1pbnB1dFRyYW5zaXRpb25EdXJhdGlvbiksXG4gICAgICB2aXNpYmlsaXR5IDBtcyxcbiAgICAgIHotaW5kZXggMG1zO1xuXG4gIG9wdGlvbiB7XG4gICAgY29sb3I6IHZhcigtLW0tdHJpbS1jb2xvcik7XG4gICAgZm9udC1zaXplOiAuOGVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuYFxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IE92ZXJsYXkgPSBzdHlsZWQoJ2RpdicpYFxuICB6LWluZGV4OiA5OTk5OTk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICBvcGFjaXR5OiAwLjE7XG5gXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby10aGlzLWluLXNmYyAqL1xuLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvY29udHJvbC1oYXMtYXNzb2NpYXRlZC1sYWJlbCAqL1xuaW1wb3J0IFJlYWN0LCB7XG4gIHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYsXG59IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0UXVpbGwgZnJvbSAncmVhY3QtcXVpbGwnXG5cbmltcG9ydCAncmVhY3QtcXVpbGwvZGlzdC9xdWlsbC5zbm93LmNzcydcblxuaW1wb3J0IHsgQ29udGFpbmVyLCBFbW9qaUJ1dHRvbiwgRW1vamlDb250YWluZXIgfSBmcm9tICcuL1N0eWxlJ1xuaW1wb3J0IHsgT3ZlcmxheSB9IGZyb20gJy4uL092ZXJsYXkvc3R5bGUnXG5cbmNvbnN0IFJpY2hUZXh0RWRpdG9yID0gKHtcbiAgY29udGVudCwgc2V0Q29udGVudCwgc2V0VG94aWNpdHlTY29yZSxcbn0pID0+IHtcbiAgY29uc3QgW2lzSGlkZGVuLCBzZXRJc0hpZGRlbl0gPSB1c2VTdGF0ZSh0cnVlKVxuXG4gIGNvbnN0IG1vZHVsZXMgPSB7XG4gICAgdG9vbGJhcjoge1xuICAgICAgY29udGFpbmVyOiAnI3Rvb2xiYXInLFxuICAgIH0sXG4gIH1cblxuICBjb25zdCBoYW5kbGVPbkNoYW5nZSA9IHVzZUNhbGxiYWNrKChjdXJyQ29udGVudCwgZGVsdGEsIHNvdXJjZSwgZWRpdG9yKSA9PiB7XG4gICAgc2V0Q29udGVudCh7XG4gICAgICByYXdIVE1MOiBlZGl0b3IuZ2V0SFRNTCgpLFxuICAgICAgY29udGVudDogZWRpdG9yLmdldENvbnRlbnRzKCksXG4gICAgICByYXdUZXh0OiBlZGl0b3IuZ2V0VGV4dCgpLFxuICAgIH0pXG4gICAgaWYgKHNldFRveGljaXR5U2NvcmUpIHNldFRveGljaXR5U2NvcmUobnVsbClcbiAgfSwgW10pXG5cbiAgY29uc3QgcGlja2VyUmVmID0gdXNlUmVmKG51bGwpXG4gIGNvbnN0IHF1aWxsUmVmID0gdXNlUmVmKG51bGwpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocGlja2VyUmVmKSB7XG4gICAgICBjb25zdCBlbW9qaVBpY2tlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VuaWNvZGUtZW1vamktcGlja2VyJylcbiAgICAgIGVtb2ppUGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2Vtb2ppLXBpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKHF1aWxsUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICBjb25zdCB7IGVkaXRvciB9ID0gcXVpbGxSZWYuY3VycmVudFxuICAgICAgICAgIGNvbnN0IGN1cnNvclBvc2l0aW9uID0gZWRpdG9yLmdldFNlbGVjdGlvbigpPy5pbmRleCB8fCBlZGl0b3IuZ2V0TGVuZ3RoKCkgLSAxXG4gICAgICAgICAgZWRpdG9yLmluc2VydFRleHQoY3Vyc29yUG9zaXRpb24sIGAke2V2ZW50LmRldGFpbC5lbW9qaX1gKVxuICAgICAgICAgIGVkaXRvci5zZXRTZWxlY3Rpb24oY3Vyc29yUG9zaXRpb24gKyAyKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfSwgW3BpY2tlclJlZiwgcXVpbGxSZWZdKVxuXG4gIGNvbnN0IGZvcm1hdHMgPSBbJ2JvbGQnLCAnaXRhbGljJywgJ3VuZGVybGluZScsICdzdHJpa2UnLCAnYmxvY2txdW90ZScsICdjbGVhbiddXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJ0ZXh0LWVkaXRvclwiPlxuICAgICAgPE92ZXJsYXkgaGlkZGVuPXtpc0hpZGRlbn0gb25DbGljaz17KCkgPT4gc2V0SXNIaWRkZW4oKHByZXYpID0+ICFwcmV2KX0gLz5cbiAgICAgIDxDdXN0b21Ub29sYmFyIHNldElzSGlkZGVuPXtzZXRJc0hpZGRlbn0gcGlja2VyUmVmPXtwaWNrZXJSZWZ9IGlzSGlkZGVuPXtpc0hpZGRlbn0gLz5cbiAgICAgIDxSZWFjdFF1aWxsXG4gICAgICAgIHJlZj17cXVpbGxSZWZ9XG4gICAgICAgIHRoZW1lPVwic25vd1wiXG4gICAgICAgIHZhbHVlPXtjb250ZW50fVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9XG4gICAgICAgIG1vZHVsZXM9e21vZHVsZXN9XG4gICAgICAgIGZvcm1hdHM9e2Zvcm1hdHN9XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2F5IHNvbWV0aGluZy4uLlwiXG4gICAgICAvPlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG5cbmNvbnN0IEN1c3RvbUJ1dHRvbiA9ICh7IGlzSGlkZGVuLCBwaWNrZXJSZWYsIHNldElzSGlkZGVuIH0pID0+IChcbiAgPD5cbiAgICA8c3BhblxuICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNIaWRkZW4oKHByZXYpID0+ICFwcmV2KX1cbiAgICAgIG9uS2V5RG93bj17KCkgPT4gc2V0SXNIaWRkZW4oKHByZXYpID0+ICFwcmV2KX1cbiAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgdGFiSW5kZXg9ezB9XG4gICAgPlxuICAgICAg8J+ZglxuICAgIDwvc3Bhbj5cbiAgICA8RW1vamlDb250YWluZXIgaGlkZGVuPXtpc0hpZGRlbn0+XG4gICAgICA8dW5pY29kZS1lbW9qaS1waWNrZXIgcmVmPXtwaWNrZXJSZWZ9IHZlcnNpb249XCIxNC4wXCIgLz5cbiAgICA8L0Vtb2ppQ29udGFpbmVyPlxuICA8Lz5cbilcblxuY29uc3QgQ3VzdG9tVG9vbGJhciA9ICh7IHNldElzSGlkZGVuLCBpc0hpZGRlbiwgcGlja2VyUmVmIH0pID0+IChcbiAgPGRpdiBpZD1cInRvb2xiYXJcIiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicgfX0+XG4gICAgPGRpdj5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cInFsLWJvbGRcIiAvPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwicWwtaXRhbGljXCIgLz5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cInFsLXVuZGVybGluZVwiIC8+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJxbC1zdHJpa2VcIiAvPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwicWwtYmxvY2txdW90ZVwiIC8+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJxbC1jbGVhblwiIC8+XG5cbiAgICA8L2Rpdj5cblxuICAgIDxFbW9qaUJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwicWwtaW5zZXJ0RW1vamlcIj5cbiAgICAgIDxDdXN0b21CdXR0b24gcGlja2VyUmVmPXtwaWNrZXJSZWZ9IGlzSGlkZGVuPXtpc0hpZGRlbn0gc2V0SXNIaWRkZW49e3NldElzSGlkZGVufSAvPlxuICAgIDwvRW1vamlCdXR0b24+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBSaWNoVGV4dEVkaXRvclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAuNWVtO1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIG1pbi13aWR0aDogOTIlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC5xbC1zbm93LnFsLXRvb2xiYXI6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLnFsLXRvb2xiYXIge1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IC41ZW07XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IC41ZW07XG4gIH1cblxuICAucWwtY29udGFpbmVyIHtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAuNWVtO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAuNWVtO1xuICB9XG5cbiAgI3Rvb2xiYXIge1xuICAgIGJ1dHRvbjphZnRlciB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuXG5gXG5cbmV4cG9ydCBjb25zdCBFbW9qaUJ1dHRvbiA9IHN0eWxlZCgnYnV0dG9uJylgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZSA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgJjphZnRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG5gXG5cbmV4cG9ydCBjb25zdCBFbW9qaUNvbnRhaW5lciA9IHN0eWxlZCgnZGl2JylgIFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB6LWluZGV4OiA5OTk5OTk5O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtOTAlLCAtOTAlKSBzY2FsZSguOCk7XG5gXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Nb2RhbCdcbmltcG9ydCB7IENvbGxhcHNlLCBGYWRlIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgRm9ybWlrLCBGaWVsZCB9IGZyb20gJ2Zvcm1paydcblxuaW1wb3J0IHVzZUJpbmREaXNwYXRjaCBmcm9tICcuLi9ob29rcy9yZWR1eC91c2VCaW5kRGlzcGF0Y2gnXG5pbXBvcnQgdXNlSGFuZGxlU3VibWl0IGZyb20gJy4vaG9va3MvdXNlSGFuZGxlU3VibWl0J1xuaW1wb3J0IHVzZUdldExpbmtNZXRhRGF0YU9uQmx1ciBmcm9tICcuL2hvb2tzL3VzZUdldExpbmtNZXRhRGF0YU9uQmx1cidcblxuaW1wb3J0IElucHV0IGZyb20gJy4uL0NvbW1vbkNvbXBvbmVudHMvRm9ybS9JbnB1dC9JbmRleCdcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vQ29tbW9uQ29tcG9uZW50cy9CdXR0b24vSW5kZXgnXG5cbmltcG9ydCB1aUFjdGlvbnMgZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucy91aSdcbmltcG9ydCB0b3BpY0FjdGlvbnMgZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucy90b3BpY3MnXG5cbmltcG9ydCBUaGVtZVRvb2x0aXAgZnJvbSAnLi4vQ29tbW9uQ29tcG9uZW50cy9Ub29sdGlwL0luZGV4J1xuaW1wb3J0IFVwbG9hZE1lZGlhQ29udGFpbmVyIGZyb20gJy4uL1RvcGljRm9ybS9jb21wb25lbnRzL1VwbG9hZE1lZGlhL0luZGV4J1xuaW1wb3J0IERpc3BsYXlNZWRpYSBmcm9tICcuLi9Ub3BpY0Zvcm0vY29tcG9uZW50cy9EaXNwbGF5TWVkaWEvSW5kZXgnXG5cbmltcG9ydCB7XG4gIEZvcm1Db250YWluZXIsIExlZnQsIFJpZ2h0LCBGbGV4RGl2LCBDb250YWluZXIsIElucHV0c0NvbnRhaW5lciwgQXJyb3csIExpbmUsXG59IGZyb20gJy4vU3R5bGUnXG5pbXBvcnQgeyBEb3duQXJyb3dDaXJjbGVTdmcgfSBmcm9tICcuLi8uLi9zdmdzL3N2Z3MnXG5pbXBvcnQgUmljaFRleHRFZGl0b3IgZnJvbSAnLi4vQ29tbW9uQ29tcG9uZW50cy9SaWNoVGV4dEVkaXRvci9JbmRleCdcblxuY29uc3QgdXVpZFJlZ0V4ID0gbmV3IFJlZ0V4cCgvXFxiWzAtOWEtZl17OH1cXGItWzAtOWEtZl17NH0tWzAtOWEtZl17NH0tWzAtOWEtZl17NH0tXFxiWzAtOWEtZl17MTJ9XFxiL2cpXG5cbmNvbnN0IENyZWF0ZVN1YlRvcGljRm9ybSA9ICgpID0+IHtcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlTG9jYXRpb24oKVxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2ltZ0ZpbGUsIHNldEltZ0ZpbGVdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW3ZpZGVvRmlsZSwgc2V0VmlkZW9GaWxlXSA9IHVzZVN0YXRlKG51bGwpXG5cbiAgY29uc3QgW3JvdGF0ZSwgc2V0Um90YXRlXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFtjb250ZW50LCBzZXRDb250ZW50XSA9IHVzZVN0YXRlKCcnKVxuICAvLyBjb25zdCB2YWxpZGF0b3IgPSB1c2VDb25maWdGb3JtRXJyb3JzKEVSUk9SUylcbiAgY29uc3QgW3RvcGljSWRdID0gcGF0aG5hbWUubWF0Y2godXVpZFJlZ0V4KVxuXG4gIGNvbnN0IHsgbWV0YURhdGEsIGdldExpbmtNZXRhRGF0YU9uQmx1ciB9ID0gdXNlR2V0TGlua01ldGFEYXRhT25CbHVyKClcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gdXNlSGFuZGxlU3VibWl0KG1ldGFEYXRhLCB0b3BpY0lkKVxuXG4gIGNvbnN0IHsgZ2V0VG9waWMsIGNsb3NlTW9kYWwgfSA9IHVzZUJpbmREaXNwYXRjaChcbiAgICB1aUFjdGlvbnMsIHRvcGljQWN0aW9ucyxcbiAgKVxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3IoKHMpID0+IHMuc2Vzc2lvbi5jdXJyZW50VXNlcilcbiAgY29uc3QgdG9waWMgPSB1c2VTZWxlY3RvcigocykgPT4gcy50b3BpY3MubGlzdCk/LmZpbmQoKHQpID0+IHQuaWQgPT09IHRvcGljSWQpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRUb3BpYyh0b3BpY0lkLCB1c2VyPy5pZClcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPEZvcm1pa1xuICAgICAgICBpbml0aWFsVmFsdWVzPXt7IHRpdGxlOiAnJyB9fVxuICAgICAgICB2YWxpZGF0ZT17KHZhbHVlcykgPT4ge1xuICAgICAgICAgIGNvbnN0IGVycm9ycyA9IHt9XG4gICAgICAgICAgaWYgKCF2YWx1ZXMudGl0bGUpIHtcbiAgICAgICAgICAgIGVycm9ycy50aXRsZSA9ICdUaXRsZSBJcyBSZXF1aXJlZCdcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGVycm9yc1xuICAgICAgICB9fVxuICAgICAgICBvblN1Ym1pdD17KCh2YWx1ZXMsIHBhcmFtcykgPT4gaGFuZGxlU3VibWl0KHZhbHVlcywgcGFyYW1zLCBjb250ZW50KSl9XG4gICAgICA+XG4gICAgICAgIHsoeyBpc1N1Ym1pdHRpbmcsIHNldEZpZWxkVmFsdWUgfSkgPT4gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxuICAgICAgICAgICAgICA8TW9kYWwuVGl0bGU+XG4gICAgICAgICAgICAgICAgQ3JlYXRlIFN1YiBUb3BpYyBSZWdhcmRpbmcgVGhlIFRvcGljXG4gICAgICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgICAgICB7YFwiJHt0b3BpYz8udGl0bGV9XCJgfVxuICAgICAgICAgICAgICA8L01vZGFsLlRpdGxlPlxuICAgICAgICAgICAgPC9Nb2RhbC5IZWFkZXI+XG4gICAgICAgICAgICA8Rm9ybUNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPE1vZGFsLkJvZHk+XG4gICAgICAgICAgICAgICAgPElucHV0c0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgIDxMZWZ0PlxuICAgICAgICAgICAgICAgICAgICA8RmxleERpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDI+IFRvcGljIERlc2NyaXB0aW9uIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgPFRoZW1lVG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcEhlYWRlcj1cIlRvcGljIERlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBUZXh0PVwiUHJvdmlkZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgdG9waWMgeW91IHdvdWxkIGxpa2UgdG8gZGlzY3Vzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4RGl2PlxuICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZT1cInRleHRcIiBuYW1lPVwidGl0bGVcIiBjb21wb25lbnQ9e0lucHV0fSB3aWR0aD1cIjEwMCVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIEEgVG9waWMgVGl0bGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZT1cInRleHRcIiBuYW1lPVwic3VtbWFyeVwiIGNvbXBvbmVudD17SW5wdXR9IHdpZHRoPVwiMTAwJVwiIHBsYWNlaG9sZGVyPVwiR2l2ZSBBIFNob3J0IE9waW5pb24gT3IgUG9pbnRcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9MZWZ0PlxuICAgICAgICAgICAgICAgICAgPFJpZ2h0PlxuICAgICAgICAgICAgICAgICAgICA8RmxleERpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDI+IExpbmsgdG8gd2hhdCB5b3Ugd2FudCB0byBkaXNjdXNzIGhlcmUuLi4gPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICA8VGhlbWVUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwSGVhZGVyPVwiRGlzY3Vzc2VkIENvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcFRleHQ9XCJBZGQgYSBsaW5rIHRvIHRoZSBleHRlcm5hbCBjb250ZW50IHlvdSB3b3VsZCBsaWtlIHRvIGRpc2N1c3MgKFxuICAgICAgICAgICAgICAgICAgICAgICAgZS5nIGEgWW91VHViZSB2aWRlbywgVHdlZXQsIHB1YmxpY2F0aW9uLCBvciBhbnl0aGluZyBlbHNlKVwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4RGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxGaWVsZCB0eXBlPVwidXJsXCIgbmFtZT1cImNvbnRlbnRVcmxcIiBwbGFjZWhvbGRlcj1cIkxpbmsgVG8gQ29udGVudFwiIGNvbXBvbmVudD17SW5wdXR9IHdpZHRoPVwiMTAwJVwiIG9uQmx1cj17Z2V0TGlua01ldGFEYXRhT25CbHVyfSAvPlxuICAgICAgICAgICAgICAgICAgICA8TGluZSAvPlxuICAgICAgICAgICAgICAgICAgICA8RmxleERpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDI+IEFkZCB5b3VyIG93biBtZWRpYSBjb250ZW50IDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgPFRoZW1lVG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcEhlYWRlcj1cIlVzZXIgUHJvdmlkZWQgQ29udGVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwVGV4dD1cIlRoaXMgY291bGQgYmUgYW4gaW1hZ2UsIGdyYXBoaWMsIG9yIHZpZGVvIHBlcnRhaW5pbmcgdG8gdGhlIHRvcGljIHlvdSB3b3VsZCBsaWtlIHRvIGRpc2N1c3NcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRmxleERpdj5cbiAgICAgICAgICAgICAgICAgICAgPFVwbG9hZE1lZGlhQ29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0RmllbGRWYWx1ZT17c2V0RmllbGRWYWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICBpbWdGaWxlPXtpbWdGaWxlfVxuICAgICAgICAgICAgICAgICAgICAgIHZpZGVvRmlsZT17dmlkZW9GaWxlfVxuICAgICAgICAgICAgICAgICAgICAgIHNldEltZ0ZpbGU9e3NldEltZ0ZpbGV9XG4gICAgICAgICAgICAgICAgICAgICAgc2V0VmlkZW9GaWxlPXtzZXRWaWRlb0ZpbGV9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L1JpZ2h0PlxuICAgICAgICAgICAgICAgIDwvSW5wdXRzQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxMaW5lIC8+XG4gICAgICAgICAgICAgICAgPERpc3BsYXlNZWRpYVxuICAgICAgICAgICAgICAgICAgaW1nRmlsZT17aW1nRmlsZX1cbiAgICAgICAgICAgICAgICAgIHZpZGVvRmlsZT17dmlkZW9GaWxlfVxuICAgICAgICAgICAgICAgICAgbWV0YURhdGE9e21ldGFEYXRhfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFJpY2hUZXh0RWRpdG9yIGNvbnRlbnQ9e2NvbnRlbnR9IHNldENvbnRlbnQ9e3NldENvbnRlbnR9IC8+XG4gICAgICAgICAgICAgICAgPEFycm93XG4gICAgICAgICAgICAgICAgICByb3RhdGU9e3JvdGF0ZX1cbiAgICAgICAgICAgICAgICAgIC8vIGljb249ezxEb3duQXJyb3dDaXJjbGVTdmcgLz59XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldE9wZW4oIW9wZW4pXG4gICAgICAgICAgICAgICAgICAgIHNldFJvdGF0ZShyb3RhdGUgKyAob3BlbiA/IC0xODAgOiAxODApKVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8RG93bkFycm93Q2lyY2xlU3ZnIC8+XG4gICAgICAgICAgICAgICAgPC9BcnJvdz5cbiAgICAgICAgICAgICAgICA8RmFkZSBpbj17IW9wZW59PlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgRW50ZXIgU3VwcGxlbWVudGFsIEluZm9ybWF0aW9uXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0ZhZGU+XG4gICAgICAgICAgICAgICAgPElucHV0c0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgIDxDb2xsYXBzZSBpbj17b3Blbn0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2hpdGVTcGFjZTogJ25vd3JhcCcsIHdpZHRoOiAnMTAwJScgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgPEZsZXhEaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+IEVudGVyIExpbmtzIFRvIFN1cHBsZW1lbnRhbCBFdmlkZW5jZS4uLiA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRoZW1lVG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwVGV4dD1cIlByb3ZpZGUgbGlua3MgdG8gYWRkaXRpb25hbCByZWFkaW5nIG9yIGV2aWRlbmNlIGV0Yy4uLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBIZWFkZXI9XCJTdXBwbGVtZW50YWwgSW5mb3JtYXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhEaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGU9XCJ1cmxcIiBuYW1lPVwiRXZpZGVuY2UgTGluayAxXCIgY29tcG9uZW50PXtJbnB1dH0gd2lkdGg9XCIxMDAlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZT1cInVybFwiIG5hbWU9XCJFdmlkZW5jZSBMaW5rIDJcIiBjb21wb25lbnQ9e0lucHV0fSB3aWR0aD1cIjEwMCVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCB0eXBlPVwidXJsXCIgbmFtZT1cIkV2aWRlbmNlIExpbmsgM1wiIGNvbXBvbmVudD17SW5wdXR9IHdpZHRoPVwiMTAwJVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9Db2xsYXBzZT5cbiAgICAgICAgICAgICAgICA8L0lucHV0c0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPC9Nb2RhbC5Cb2R5PlxuICAgICAgICAgICAgICA8TW9kYWwuRm9vdGVyPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9IG9uQ2xpY2s9e2Nsb3NlTW9kYWx9PlxuICAgICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgZGlzYWJsZWQ9e2lzU3VibWl0dGluZ30+XG4gICAgICAgICAgICAgICAgICBTdWJtaXRcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9Nb2RhbC5Gb290ZXI+XG4gICAgICAgICAgICA8L0Zvcm1Db250YWluZXI+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L0Zvcm1paz5cbiAgICA8L0NvbnRhaW5lcj5cblxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENyZWF0ZVN1YlRvcGljRm9ybVxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IEZvcm0gfSBmcm9tICdmb3JtaWsnXG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpYFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIGhlaWdodDogOTB2aDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcbiAgYm94LXNoYWRvdzogIDVweCA1cHggNXB4IC0zcHggIzAwMDAwMDtcblxuICBoMSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLWJvdHRvbTogLjVlbTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gIH1cbiBgXG5cbmV4cG9ydCBjb25zdCBGbGV4RGl2ID0gc3R5bGVkKCdkaXYnKWAgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbmBcblxuZXhwb3J0IGNvbnN0IEZvcm1Db250YWluZXIgPSBzdHlsZWQoRm9ybSlgXG4gIG1hcmdpbi10b3A6IDFlbTtcbiAgIGgyIHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBtYXJnaW46IDAgMWVtO1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBJbnB1dHNDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpYFxuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbmBcblxuZXhwb3J0IGNvbnN0IExlZnQgPSBzdHlsZWQoJ2RpdicpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiA1MCU7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xuYFxuZXhwb3J0IGNvbnN0IFJpZ2h0ID0gc3R5bGVkKCdkaXYnKWBcbiAgZGlzcGxheTogZmxleDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogNTAlO1xuYFxuXG5leHBvcnQgY29uc3QgU3VwcGxlbWVudGFsSW5mb3JtYXRpb24gPSBzdHlsZWQoJ3NlY3Rpb24nKWBcblxuYFxuXG5leHBvcnQgY29uc3QgSW5wdXRXcmFwcGVyID0gc3R5bGVkKCdkaXYnKWBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbmBcblxuZXhwb3J0IGNvbnN0IEFycm93ID0gc3R5bGVkKCdzcGFuJylgXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC41cyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2Zvcm06ICR7KHByb3BzKSA9PiBgcm90YXRlKCR7cHJvcHMucm90YXRlfWRlZylgfTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5gXG5cbmV4cG9ydCBjb25zdCBMaW5lID0gc3R5bGVkKCdocicpYCBcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAyZW0gMS4zZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0OCw0OCw1MCk7XG4gIGhlaWdodDogLjVweDtcbiAgYm9yZGVyOiBub25lO1xuYFxuIiwiaW1wb3J0IHsgeW91VHViZVVybFZhbGlkYXRvciwgdHdpdHRlclVybFZhbGlkdG9yIH0gZnJvbSAnLi4vLi4vLi4vZ2VuZXJpYy9yZWdleC91cmxWYWxpZGF0b3JzJ1xuXG5leHBvcnQgZGVmYXVsdCAodXJsKSA9PiB7XG4gIGNvbnN0IHl0VXJsID0gdXJsLnNlYXJjaCh5b3VUdWJlVXJsVmFsaWRhdG9yKSA9PT0gLTEgPyBudWxsIDogJ3l0VXJsJ1xuICBjb25zdCB0d2VldFVybCA9IHVybC5zZWFyY2godHdpdHRlclVybFZhbGlkdG9yKSA9PT0gLTEgPyBudWxsIDogJ3R3ZWV0VXJsJ1xuICByZXR1cm4geXRVcmwgfHwgdHdlZXRVcmxcbn1cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyBnZXRMaW5rTWV0YURhdGEgfSBmcm9tICcuLi8uLi8uLi9hcGkvdjEvdG9waWNzL3RvcGljc19hcGlfdXRpbCdcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCBbbWV0YURhdGEsIHNldE1ldGFEYXRhXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IGdldExpbmtNZXRhRGF0YU9uQmx1ciA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XG4gICAgZ2V0TGlua01ldGFEYXRhKGUuY3VycmVudFRhcmdldC52YWx1ZSkudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgIHNldE1ldGFEYXRhKGRhdGEpXG4gICAgfSlcbiAgfSwgW10pXG5cbiAgcmV0dXJuIHsgbWV0YURhdGEsIGdldExpbmtNZXRhRGF0YU9uQmx1ciB9XG59XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHRvcGljQWN0aW9ucyBmcm9tICcuLi8uLi8uLi9yZWR1eC9hY3Rpb25zL3RvcGljcy9pbmRleCdcbmltcG9ydCBzdWJ0b3BpY0FjdGlvbnMgZnJvbSAnLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy9zdWJ0b3BpY3MvaW5kZXgnXG5cbmltcG9ydCB1c2VCaW5kRGlzcGF0Y2ggZnJvbSAnLi4vLi4vaG9va3MvcmVkdXgvdXNlQmluZERpc3BhdGNoJ1xuXG5pbXBvcnQgY2hlY2tMaW5rVHlwZSBmcm9tICcuL2NoZWNrTGlua1R5cGUnXG5cbmV4cG9ydCBkZWZhdWx0IChtZXRhRGF0YSwgdG9waWNJZCkgPT4ge1xuICBjb25zdCB7IGNyZWF0ZVN1YlRvcGljLCB1cGxvYWRUb3BpY01lZGlhIH0gPSB1c2VCaW5kRGlzcGF0Y2godG9waWNBY3Rpb25zLCBzdWJ0b3BpY0FjdGlvbnMpXG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3RvcigocykgPT4gcy5zZXNzaW9uLmN1cnJlbnRVc2VyKVxuXG4gIHJldHVybiB1c2VDYWxsYmFjaygodmFsdWVzLCB7IHNldFN1Ym1pdHRpbmcsIHJlc2V0Rm9ybSB9LCBjb250ZW50KSA9PiB7XG4gICAgY29uc3QgZUxpbmtzID0gT2JqZWN0LmVudHJpZXModmFsdWVzKS5tYXAoKFtrLCB2XSkgPT4gKGsuaW5jbHVkZXMoJ0V2aWRlbmNlJykgPyB2IDogbnVsbCkpLmZpbHRlcihCb29sZWFuKVxuICAgIGNvbnN0IGxpbmtUeXBlID0gY2hlY2tMaW5rVHlwZSh2YWx1ZXMuY29udGVudFVybClcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgLi4udmFsdWVzLFxuICAgICAgZGVzY3JpcHRpb246IGNvbnRlbnQsXG4gICAgICBjcmVhdGVkQnk6IHVzZXIudXNlcm5hbWUsXG4gICAgICB1c2VySWQ6IHVzZXIuaWQsXG4gICAgICBldmlkZW5jZUxpbmtzOiBlTGlua3MsXG4gICAgICBbbGlua1R5cGVdOiB2YWx1ZXMuY29udGVudFVybCxcbiAgICAgIHRodW1iSW1nVXJsOiBtZXRhRGF0YS5vZ0ltYWdlPy51cmwsXG4gICAgICB0b3BpY0lkLFxuICAgICAgdHdlZXRVcmw6IG51bGwsXG4gICAgICBpbWFnZVVybDogbnVsbCxcbiAgICAgIHZvZFVybDogbnVsbCxcbiAgICB9XG4gICAgaWYgKHZhbHVlcy5maWxlIGluc3RhbmNlb2YgRmlsZSkge1xuICAgICAgY29uc3QgW2ZpbGVUeXBlLCBmaWxlRm9ybWF0XSA9IHZhbHVlcy5maWxlLnR5cGUuc3BsaXQoJy8nKVxuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKVxuICAgICAgZm9ybURhdGEuYXBwZW5kKCdpbWFnZScsIHZhbHVlcy5maWxlKVxuICAgICAgdXBsb2FkVG9waWNNZWRpYShmb3JtRGF0YSwgZmlsZVR5cGUsIGZpbGVGb3JtYXQsIGRhdGEpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNyZWF0ZVN1YlRvcGljKGRhdGEpXG4gICAgfVxuICAgIHNldFN1Ym1pdHRpbmcoZmFsc2UpXG4gICAgcmVzZXRGb3JtKHt9KVxuICB9LCBbbWV0YURhdGEsIHRvcGljSWRdKVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1ib290c3RyYXAvTW9kYWwnXG5pbXBvcnQgeyBGb3JtaWssIEZpZWxkIH0gZnJvbSAnZm9ybWlrJ1xuaW1wb3J0IHsgQ29sbGFwc2UsIEZhZGUgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5cbmltcG9ydCB1c2VCaW5kRGlzcGF0Y2ggZnJvbSAnLi4vaG9va3MvcmVkdXgvdXNlQmluZERpc3BhdGNoJ1xuaW1wb3J0IHVzZUhhbmRsZVN1Ym1pdCBmcm9tICcuL2hvb2tzL3VzZUhhbmRsZVN1Ym1pdCdcbmltcG9ydCB1c2VDb25maWdGb3JtRXJyb3JzIGZyb20gJy4uL3V0aWwvZm9ybV9oZWxwZXJzL2hvb2tzL3VzZUNvbmZpZ0Zvcm1FcnJvcnMnXG5pbXBvcnQgdWlBY3Rpb25zIGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMvdWknXG5cbmltcG9ydCB7IERvd25BcnJvd0NpcmNsZVN2ZyB9IGZyb20gJy4uLy4uL3N2Z3Mvc3ZncydcbmltcG9ydCBJbnB1dCBmcm9tICcuLi9Db21tb25Db21wb25lbnRzL0Zvcm0vSW5wdXQzL0luZGV4J1xuaW1wb3J0IFNlbGVjdCBmcm9tICcuLi9Db21tb25Db21wb25lbnRzL0Zvcm0vU2VsZWN0L0luZGV4J1xuaW1wb3J0IFJpY2hUZXh0RWRpdG9yIGZyb20gJy4uL0NvbW1vbkNvbXBvbmVudHMvUmljaFRleHRFZGl0b3IvSW5kZXgnXG5pbXBvcnQgRXhwYW5kQnV0dG9uIGZyb20gJy4uL0NvbW1vbkNvbXBvbmVudHMvQnV0dG9ucy9FeHBhbmRCdXR0b24vSW5kZXgnXG5cbmltcG9ydCBVcGxvYWRNZWRpYUNvbnRhaW5lciBmcm9tICcuL2NvbXBvbmVudHMvVXBsb2FkTWVkaWEvSW5kZXgnXG5pbXBvcnQgRGlzcGxheU1lZGlhIGZyb20gJy4vY29tcG9uZW50cy9EaXNwbGF5TWVkaWEvSW5kZXgnXG5pbXBvcnQgTGlua1R5cGVJY29uIGZyb20gJy4vY29tcG9uZW50cy9MaW5rVHlwZUljb24vSW5kZXgnXG5cbmltcG9ydCBUaGVtZVRvb2x0aXAgZnJvbSAnLi4vQ29tbW9uQ29tcG9uZW50cy9Ub29sdGlwL0luZGV4J1xuXG5pbXBvcnQge1xuICBGb3JtQ29udGFpbmVyLCBJbnB1dHNDb250YWluZXIsIENvbnRhaW5lciwgTGVmdCwgUmlnaHQsIFNlY3Rpb25EZXNjcmlwdGlvbiwgTW9iaWxlT25seUxpbmUsXG4gIExpbmUsIEFycm93LCBGbGV4RGl2LFxufSBmcm9tICcuL1N0eWxlJ1xuXG5pbXBvcnQgeyBJTklUX1RPUElDX0ZPUk1fVkFMVUVTIH0gZnJvbSAnLi4vdXRpbC9mb3JtX2hlbHBlcnMvaW5pdF9mb3JtX3ZhbHVlcydcbmltcG9ydCB1c2VHZXRMaW5rTWV0YURhdGFPbkJsdXIgZnJvbSAnLi9ob29rcy91c2VHZXRMaW5rTWV0YURhdGFPbkJsdXInXG5cbmNvbnN0IFZBTElEQVRJT05TID0ge1xuICB0aXRsZTogeyBSRVFVSVJFRDogdHJ1ZSB9LFxuICBzdW1tYXJ5OiB7IFJFUVVJUkVEOiB0cnVlLCBNSU5fTEVOR1RIOiA1IH0sXG4gIGNhdGVnb3J5OiB7IFJFUVVJUkVEOiB0cnVlIH0sXG59XG5cbmNvbnN0IENyZWF0ZVRvcGljRm9ybSA9ICgpID0+IHtcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtpbWdGaWxlLCBzZXRJbWdGaWxlXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFt2aWRlb0ZpbGUsIHNldFZpZGVvRmlsZV0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbbWV0YURhdGEsIHNldE1ldGFEYXRhXSA9IHVzZVN0YXRlKG51bGwpXG5cbiAgY29uc3QgW3JvdGF0ZSwgc2V0Um90YXRlXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFtyaWNoVGV4dEVkaXRvckNvbnRlbnQsIHNldFJpY2hUZXh0RWRpdG9yQ29udGVudF0gPSB1c2VTdGF0ZSh7XG4gICAgcmF3SFRNTDogJycsXG4gICAgY29udGVudDogJycsXG4gIH0pXG5cbiAgY29uc3QgdmFsaWRhdG9yID0gdXNlQ29uZmlnRm9ybUVycm9ycyhWQUxJREFUSU9OUylcbiAgY29uc3QgeyBjb250ZW50VXJsLCBnZXRDb250ZW50VXJsT25CbHVyIH0gPSB1c2VHZXRMaW5rTWV0YURhdGFPbkJsdXIoKVxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSB1c2VIYW5kbGVTdWJtaXQobWV0YURhdGEpXG4gIGNvbnN0IHsgY2xvc2VNb2RhbCB9ID0gdXNlQmluZERpc3BhdGNoKHVpQWN0aW9ucylcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8Rm9ybWlrXG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e0lOSVRfVE9QSUNfRk9STV9WQUxVRVN9XG4gICAgICAgIHZhbGlkYXRlPXt2YWxpZGF0b3J9XG4gICAgICAgIG9uU3VibWl0PXsoKHZhbHVlcywgcGFyYW1zKSA9PiBoYW5kbGVTdWJtaXQodmFsdWVzLCBwYXJhbXMsIHJpY2hUZXh0RWRpdG9yQ29udGVudC5yYXdIVE1MKSl9XG4gICAgICA+XG4gICAgICAgIHsoeyBpc1N1Ym1pdHRpbmcsIHNldEZpZWxkVmFsdWUsIHNldEZpZWxkVG91Y2hlZCB9KSA9PiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XG4gICAgICAgICAgICAgIDxNb2RhbC5UaXRsZT5DcmVhdGUgVG9waWM8L01vZGFsLlRpdGxlPlxuICAgICAgICAgICAgPC9Nb2RhbC5IZWFkZXI+XG5cbiAgICAgICAgICAgIDxGb3JtQ29udGFpbmVyPlxuICAgICAgICAgICAgICA8TW9kYWwuQm9keT5cbiAgICAgICAgICAgICAgICA8SW5wdXRzQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgPExlZnQ+XG4gICAgICAgICAgICAgICAgICAgIDxGbGV4RGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxTZWN0aW9uRGVzY3JpcHRpb24+IFRvcGljIERlc2NyaXB0aW9uIDwvU2VjdGlvbkRlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxUaGVtZVRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBIZWFkZXI9XCJUb3BpYyBEZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwVGV4dD1cIlByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHRvcGljIHlvdSB3b3VsZCBsaWtlIHRvIGRpc2N1c3NcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRmxleERpdj5cbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRpdGxlXCIgbGFiZWw9XCJUaXRsZVwiIGNvbXBvbmVudD17SW5wdXR9IHdpZHRoPVwiODUlXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBBIFRvcGljIFRpdGxlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInN1bW1hcnlcIiBsYWJlbD1cIlN1bW1hcnlcIiBjb21wb25lbnQ9e0lucHV0fSB3aWR0aD1cIjg1JVwiIHBsYWNlaG9sZGVyPVwiR2l2ZSBBIFNob3J0IE9waW5pb24gT3IgUG9pbnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZT1cInRleHRcIiBuYW1lPVwiY2F0ZWdvcnlcIiBsYWJlbD1cIkNhdGVnb3J5XCIgY29tcG9uZW50PXtTZWxlY3R9IHNldEZpZWxkVmFsdWU9e3NldEZpZWxkVmFsdWV9IHNldEZpZWxkVG91Y2hlZD17c2V0RmllbGRUb3VjaGVkfSB3aWR0aD1cIjg1JVwiIC8+XG4gICAgICAgICAgICAgICAgICA8L0xlZnQ+XG4gICAgICAgICAgICAgICAgICA8TW9iaWxlT25seUxpbmUgLz5cbiAgICAgICAgICAgICAgICAgIDxSaWdodD5cbiAgICAgICAgICAgICAgICAgICAgPEZsZXhEaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPFNlY3Rpb25EZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIExpbmsgdG8gd2hhdCB5b3Ugd2FudCB0byBkaXNjdXNzIGhlcmUuLi5cbiAgICAgICAgICAgICAgICAgICAgICA8L1NlY3Rpb25EZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8VGhlbWVUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwSGVhZGVyPVwiRGlzY3Vzc2VkIENvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcFRleHQ9XCJBZGQgYSBsaW5rIHRvIHRoZSBleHRlcm5hbCBjb250ZW50IHlvdSB3b3VsZCBsaWtlIHRvIGRpc2N1c3MgKFxuICAgICAgICAgICAgICAgICAgICAgICAgZS5nIGEgWW91VHViZSB2aWRlbywgVHdlZXQsIHB1YmxpY2F0aW9uLCBvciBhbnl0aGluZyBlbHNlKVwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4RGl2PlxuICAgICAgICAgICAgICAgICAgICA8RmxleERpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ1cmxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvbnRlbnRVcmxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMaW5rIFRvIENvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJMaW5rIFRvIENvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtJbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiODUlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17Z2V0Q29udGVudFVybE9uQmx1cn1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIHsgY29udGVudFVybCAmJiA8TGlua1R5cGVJY29uIG1ldGFEYXRhPXttZXRhRGF0YX0gY29udGVudFVybD17Y29udGVudFVybH0gLz4gfVxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXhEaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPExpbmUgLz5cbiAgICAgICAgICAgICAgICAgICAgPEZsZXhEaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPFNlY3Rpb25EZXNjcmlwdGlvbj4gQWRkIHlvdXIgb3duIG1lZGlhIGNvbnRlbnQgPC9TZWN0aW9uRGVzY3JpcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgPFRoZW1lVG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcEhlYWRlcj1cIlVzZXIgUHJvdmlkZWQgQ29udGVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwVGV4dD1cIlRoaXMgY291bGQgYmUgYW4gaW1hZ2UsIGdyYXBoaWMsIG9yIHZpZGVvIHBlcnRhaW5pbmcgdG8gdGhlIHRvcGljIHlvdSB3b3VsZCBsaWtlIHRvIGRpc2N1c3NcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRmxleERpdj5cbiAgICAgICAgICAgICAgICAgICAgPFVwbG9hZE1lZGlhQ29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0RmllbGRWYWx1ZT17c2V0RmllbGRWYWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICBpbWdGaWxlPXtpbWdGaWxlfVxuICAgICAgICAgICAgICAgICAgICAgIHZpZGVvRmlsZT17dmlkZW9GaWxlfVxuICAgICAgICAgICAgICAgICAgICAgIHNldEltZ0ZpbGU9e3NldEltZ0ZpbGV9XG4gICAgICAgICAgICAgICAgICAgICAgc2V0VmlkZW9GaWxlPXtzZXRWaWRlb0ZpbGV9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L1JpZ2h0PlxuICAgICAgICAgICAgICAgIDwvSW5wdXRzQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxMaW5lIC8+XG4gICAgICAgICAgICAgICAgPERpc3BsYXlNZWRpYVxuICAgICAgICAgICAgICAgICAgaW1nRmlsZT17aW1nRmlsZX1cbiAgICAgICAgICAgICAgICAgIHZpZGVvRmlsZT17dmlkZW9GaWxlfVxuICAgICAgICAgICAgICAgICAgY29udGVudFVybD17Y29udGVudFVybH1cbiAgICAgICAgICAgICAgICAgIHNldE1ldGFEYXRhPXtzZXRNZXRhRGF0YX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxSaWNoVGV4dEVkaXRvclxuICAgICAgICAgICAgICAgICAgY29udGVudD17cmljaFRleHRFZGl0b3JDb250ZW50LmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgICBzZXRDb250ZW50PXtzZXRSaWNoVGV4dEVkaXRvckNvbnRlbnR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8QXJyb3dcbiAgICAgICAgICAgICAgICAgIHJvdGF0ZT17cm90YXRlfVxuICAgICAgICAgICAgICAgICAgLy8gaWNvbj17PERvd25BcnJvd0NpcmNsZVN2ZyAvPn1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0T3Blbighb3BlbilcbiAgICAgICAgICAgICAgICAgICAgc2V0Um90YXRlKHJvdGF0ZSArIChvcGVuID8gLTE4MCA6IDE4MCkpXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxEb3duQXJyb3dDaXJjbGVTdmcgLz5cbiAgICAgICAgICAgICAgICA8L0Fycm93PlxuICAgICAgICAgICAgICAgIDxGYWRlIGluPXshb3Blbn0+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICBFbnRlciBTdXBwbGVtZW50YWwgSW5mb3JtYXRpb25cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvRmFkZT5cbiAgICAgICAgICAgICAgICA8SW5wdXRzQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgPENvbGxhcHNlIGluPXtvcGVufT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aGl0ZVNwYWNlOiAnbm93cmFwJywgd2lkdGg6ICcxMDAlJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICA8RmxleERpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj4gRW50ZXIgTGlua3MgVG8gU3VwcGxlbWVudGFsIEV2aWRlbmNlLi4uIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGhlbWVUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBUZXh0PVwiUHJvdmlkZSBsaW5rcyB0byBhZGRpdGlvbmFsIHJlYWRpbmcgb3IgZXZpZGVuY2UgZXRjLi4uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcEhlYWRlcj1cIlN1cHBsZW1lbnRhbCBJbmZvcm1hdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvRmxleERpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZT1cInVybFwiIG5hbWU9XCJFdmlkZW5jZSBMaW5rIDFcIiBjb21wb25lbnQ9e0lucHV0fSB3aWR0aD1cIjcwJVwiIGxhYmVsPVwiTGluayBUbyBFdmlkZW5jZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGU9XCJ1cmxcIiBuYW1lPVwiRXZpZGVuY2UgTGluayAyXCIgY29tcG9uZW50PXtJbnB1dH0gd2lkdGg9XCI3MCVcIiBsYWJlbD1cIkxpbmsgVG8gRXZpZGVuY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCB0eXBlPVwidXJsXCIgbmFtZT1cIkV2aWRlbmNlIExpbmsgM1wiIGNvbXBvbmVudD17SW5wdXR9IHdpZHRoPVwiNzAlXCIgbGFiZWw9XCJMaW5rIFRvIEV2aWRlbmNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L0NvbGxhcHNlPlxuICAgICAgICAgICAgICAgIDwvSW5wdXRzQ29udGFpbmVyPlxuICAgICAgICAgICAgICA8L01vZGFsLkJvZHk+XG4gICAgICAgICAgICAgIDxNb2RhbC5Gb290ZXI+XG4gICAgICAgICAgICAgICAgPEV4cGFuZEJ1dHRvblxuICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyLjV2d1wiXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCJ2YXIoLS1tLXByaW1hcnktYnRuLWNvbG9yKVwiXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNTdWJtaXR0aW5nfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2xvc2VNb2RhbH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgICAgICA8L0V4cGFuZEJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8RXhwYW5kQnV0dG9uXG4gICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIuNXZ3XCJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj1cInZhcigtLW0tcHJpbWFyeS1idG4tY29sb3IpXCJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgICAgICAgPC9FeHBhbmRCdXR0b24+XG4gICAgICAgICAgICAgIDwvTW9kYWwuRm9vdGVyPlxuICAgICAgICAgICAgPC9Gb3JtQ29udGFpbmVyPlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9Gb3JtaWs+XG4gICAgPC9Db250YWluZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlVG9waWNGb3JtXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgRm9ybSB9IGZyb20gJ2Zvcm1paydcbi8vIGltcG9ydCB7IEZpQXJyb3dEb3duQ2lyY2xlIH0gZnJvbSAncmVhY3QtaWNvbnMvZmknXG5cbmV4cG9ydCBjb25zdCBGbGV4RGl2ID0gc3R5bGVkKCdkaXYnKWAgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbmBcblxuZXhwb3J0IGNvbnN0IEZvcm1Db250YWluZXIgPSBzdHlsZWQoRm9ybSlgXG4gIC8qIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyAqL1xuICBtYXJnaW4tdG9wOiAxZW07XG4gICBoMiB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gIH1cbiBcbmBcblxuZXhwb3J0IGNvbnN0IEFycm93ID0gc3R5bGVkKCdzcGFuJylgXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC41cyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2Zvcm06ICR7KHByb3BzKSA9PiBgcm90YXRlKCR7cHJvcHMucm90YXRlfWRlZylgfTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5gXG5cbmV4cG9ydCBjb25zdCBJbnB1dHNDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpYFxuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBMZWZ0ID0gc3R5bGVkKCdkaXYnKWBcbiAgZGlzcGxheTogZmxleDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogNTAlO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgfVxuYFxuZXhwb3J0IGNvbnN0IFJpZ2h0ID0gc3R5bGVkKCdkaXYnKWBcbiAgZGlzcGxheTogZmxleDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogNTAlO1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IFN1cHBsZW1lbnRhbEluZm9ybWF0aW9uID0gc3R5bGVkKCdzZWN0aW9uJylgXG5cbmBcblxuZXhwb3J0IGNvbnN0IElucHV0V3JhcHBlciA9IHN0eWxlZCgnZGl2JylgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5gXG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpYFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIGhlaWdodDogOTB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIFxuICBib3JkZXItcmFkaXVzOiAxZW07XG4gIC8qIGJveC1zaGFkb3c6IHZhcigtLW0tcHJpbWFyeS1ib3gtc2hhZG93KTsgKi9cbiAgYm94LXNoYWRvdzogIDVweCA1cHggNXB4IC0zcHggIzAwMDAwMDtcblxuICBoMSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLWJvdHRvbTogLjVlbTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gIH1cbiAgXG4gIC8qIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTYwMHB4KSB7XG4gICAgIHdpZHRoOiA4MHZ3O1xuICB9XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgICB3aWR0aDogOTB2dztcbiAgfVxuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgd2lkdGg6IDEwMHZ3O1xuICB9ICovXG4gYFxuXG5leHBvcnQgY29uc3QgTGluZSA9IHN0eWxlZCgnaHInKWAgXG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMmVtIDEuM2VtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDgsNDgsNTApO1xuICBoZWlnaHQ6IC41cHg7XG4gIGJvcmRlcjogbm9uZTtcbmBcblxuZXhwb3J0IGNvbnN0IFVwbG9hZE1lZGlhQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWAgXG4gIG1hcmdpbi1sZWZ0OiAxLjNlbTtcbiAgcGFkZGluZzogLjVlbTtcbiAgYm9yZGVyLXJhZGl1czogLjVlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYm94LXNoYWRvdzogIDVweCA1cHggNXB4IC0zcHggI0FBQUFBQTtcbiAgYmFja2dyb3VuZDogI0U1RTVFNTtcblxuO1xuXG5gXG5cbmV4cG9ydCBjb25zdCBTZWN0aW9uRGVzY3JpcHRpb24gPSBzdHlsZWQoJ2gyJylgXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgLyogZGlzcGxheTogbm9uZTsgKi9cbiAgfVxuXG5gXG5cbmV4cG9ydCBjb25zdCBNb2JpbGVPbmx5TGluZSA9IHN0eWxlZCgnaHInKWAgXG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMmVtIDEuM2VtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDgsNDgsNTApO1xuICBoZWlnaHQ6IC41cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgZGlzcGxheTogbm9uZTtcblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbmBcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHtcbiAgT0dGYXZpY29uLFxufSBmcm9tICcuL1N0eWxlL2luZGV4J1xuaW1wb3J0IElzTG9hZGluZ0hPQyBmcm9tICcuLi8uLi8uLi8uLi9ob2NzL0lzTG9hZGluZ0hPQydcblxuY29uc3QgTGlua1R5cGVJY29uID0gKHtcbiAgY29udGVudFVybCwgbWV0YURhdGEsIHNldElzTG9hZGluZyxcbn0pID0+IHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSlcbiAgfSwgW2NvbnRlbnRVcmxdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKG1ldGFEYXRhKSBzZXRJc0xvYWRpbmcoZmFsc2UpXG4gIH0sIFttZXRhRGF0YV0pXG5cbiAgcmV0dXJuIChcbiAgICA8T0dGYXZpY29uIHNyYz17bWV0YURhdGE/LmZhdmljb259IGFsdD1cIlwiIC8+XG4gIClcbn1cbmV4cG9ydCBkZWZhdWx0IElzTG9hZGluZ0hPQyhMaW5rVHlwZUljb24sICczMHB4JywgdHJ1ZSlcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBPR0Zhdmljb24gPSBzdHlsZWQoJ2ltZycpYCBcbiAgYm9yZGVyLXJhZGl1czogMXZ3O1xuICB3aWR0aDogMS41dnc7XG5cbmAiLCIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtcHJvcHMtbm8tc3ByZWFkaW5nICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMYWJlbCwgVXBsb2FkSW5wdXQgfSBmcm9tICcuL1N0eWxlJ1xuXG5jb25zdCBVcGxvYWRJbWFnZUlucHV0ID0gKHtcbiAgZmllbGQsIG9uQ2hhbmdlLCBpY29uLCBmaWxlVHlwZSwgZGlzYWJsZWQsXG59KSA9PiAoXG4gIDxMYWJlbD5cbiAgICB7aWNvbn1cbiAgICA8VXBsb2FkSW5wdXQgZGF0YS1maWxldHlwZT17ZmlsZVR5cGV9IHR5cGU9XCJmaWxlXCIgey4uLmZpZWxkfSBpZD17ZmllbGQubmFtZX0gb25DaGFuZ2U9e29uQ2hhbmdlfSBkaXNhYmxlZD17ZGlzYWJsZWR9IC8+XG4gIDwvTGFiZWw+XG5cbilcblxuZXhwb3J0IGRlZmF1bHQgVXBsb2FkSW1hZ2VJbnB1dFxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IExhYmVsID0gc3R5bGVkKCdsYWJlbCcpYCBcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAlO1xuICBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgVXBsb2FkSW5wdXQgPSBzdHlsZWQoJ2lucHV0JylgIFxuICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICBsZWZ0OiAtOTk5OTlyZW07XG5gXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnZm9ybWlrJ1xuXG5pbXBvcnQgVXBsb2FkRmlsZUlucHV0IGZyb20gJy4uL1VwbG9hZEltYWdlSW5wdXQvSW5kZXgnXG5pbXBvcnQgeyBWaWRlb1N2ZywgSW1hZ2VTdmcgfSBmcm9tICcuLi8uLi8uLi8uLi9zdmdzL3N2Z3MnXG5cbmltcG9ydCB1c2VPbkZpbGVDaGFuZ2VIYW5kbGVyIGZyb20gJy4uLy4uL2hvb2tzL3VzZU9uRmlsZUNoYW5nZUhhbmRsZXInXG5cbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4vU3R5bGUvaW5kZXgnXG5cbmNvbnN0IFVwbG9hZE1lZGlhQ29udGFpbmVyID0gKHtcbiAgc2V0RmllbGRWYWx1ZSwgaW1nRmlsZSwgdmlkZW9GaWxlLCBzZXRJbWdGaWxlLCBzZXRWaWRlb0ZpbGUsXG59KSA9PiB7XG4gIGNvbnN0IG9uRmlsZUNoYW5nZSA9IHVzZU9uRmlsZUNoYW5nZUhhbmRsZXIoKVxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8RmllbGRcbiAgICAgICAgZmlsZVR5cGU9XCJmaWxlXCJcbiAgICAgICAgbmFtZT1cInRvcGljSW1hZ2VcIlxuICAgICAgICBkaXNhYmxlZD17Qm9vbGVhbih2aWRlb0ZpbGUpfVxuICAgICAgICBmaWxlPXtpbWdGaWxlfVxuICAgICAgICBjb21wb25lbnQ9e1VwbG9hZEZpbGVJbnB1dH1cbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkZpbGVDaGFuZ2UoZSwgc2V0RmllbGRWYWx1ZSwgc2V0SW1nRmlsZSl9XG4gICAgICAgIGljb249ezxJbWFnZVN2ZyAvPn1cbiAgICAgIC8+XG4gICAgICA8RmllbGRcbiAgICAgICAgZmlsZVR5cGU9XCJmaWxlXCJcbiAgICAgICAgbmFtZT1cInRvcGljVmlkZW9cIlxuICAgICAgICBkaXNhYmxlZD17Qm9vbGVhbihpbWdGaWxlKX1cbiAgICAgICAgZmlsZT17dmlkZW9GaWxlfVxuICAgICAgICBjb21wb25lbnQ9e1VwbG9hZEZpbGVJbnB1dH1cbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkZpbGVDaGFuZ2UoZSwgc2V0RmllbGRWYWx1ZSwgc2V0VmlkZW9GaWxlKX1cbiAgICAgICAgaWNvbj17PFZpZGVvU3ZnIC8+fVxuICAgICAgLz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBVcGxvYWRNZWRpYUNvbnRhaW5lclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZCgnZGl2JylgIFxuICBtYXJnaW4tbGVmdDogMS4zZW07XG4gIHBhZGRpbmc6IC41ZW07XG4gIGJvcmRlci1yYWRpdXM6IC41ZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJveC1zaGFkb3c6ICA1cHggNXB4IDVweCAtM3B4ICNBQUFBQUE7XG4gIGJhY2tncm91bmQ6ICNFNUU1RTU7XG5cbmBcbiIsImltcG9ydCB7IHlvdVR1YmVVcmxWYWxpZGF0b3IsIHR3aXR0ZXJVcmxWYWxpZHRvciB9IGZyb20gJy4uLy4uLy4uL2dlbmVyaWMvcmVnZXgvdXJsVmFsaWRhdG9ycydcblxuZXhwb3J0IGRlZmF1bHQgKHVybCkgPT4ge1xuICBjb25zdCB5dFVybCA9IHVybC5zZWFyY2goeW91VHViZVVybFZhbGlkYXRvcikgPT09IC0xID8gbnVsbCA6ICd5dFVybCdcbiAgY29uc3QgdHdlZXRVcmwgPSB1cmwuc2VhcmNoKHR3aXR0ZXJVcmxWYWxpZHRvcikgPT09IC0xID8gbnVsbCA6ICd0d2VldFVybCdcbiAgcmV0dXJuIHl0VXJsIHx8IHR3ZWV0VXJsXG59XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCBbY29udGVudFVybCwgc2V0Q29udGVudFVybF0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBnZXRDb250ZW50VXJsT25CbHVyID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcbiAgICBzZXRDb250ZW50VXJsKGUuY3VycmVudFRhcmdldC52YWx1ZSlcbiAgfSwgW10pXG5cbiAgcmV0dXJuIHsgY29udGVudFVybCwgZ2V0Q29udGVudFVybE9uQmx1ciB9XG59XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknXG5cbmltcG9ydCB0b3BpY0FjdGlvbnMgZnJvbSAnLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy90b3BpY3MvaW5kZXgnXG5pbXBvcnQgdXNlQmluZERpc3BhdGNoIGZyb20gJy4uLy4uL2hvb2tzL3JlZHV4L3VzZUJpbmREaXNwYXRjaCdcblxuaW1wb3J0IGNoZWNrTGlua1R5cGUgZnJvbSAnLi9jaGVja0xpbmtUeXBlJ1xuXG4vLyBjb25zdCByZXNvbHZlQWZ0ZXIxNTAwbXMgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCAxNTAwKSlcblxuZXhwb3J0IGRlZmF1bHQgKG1ldGFEYXRhKSA9PiB7XG4gIGNvbnN0IHsgY3JlYXRlVG9waWMsIHVwbG9hZFRvcGljTWVkaWEgfSA9IHVzZUJpbmREaXNwYXRjaCh0b3BpY0FjdGlvbnMpXG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3RvcigocykgPT4gcy5zZXNzaW9uLmN1cnJlbnRVc2VyKVxuXG4gIHJldHVybiB1c2VDYWxsYmFjaygodmFsdWVzLCB7IHNldFN1Ym1pdHRpbmcsIHJlc2V0Rm9ybSB9LCBjb250ZW50KSA9PiB7XG4gICAgY29uc3QgZUxpbmtzID0gT2JqZWN0LmVudHJpZXModmFsdWVzKS5tYXAoKFtrLCB2XSkgPT4gKGsuaW5jbHVkZXMoJ0V2aWRlbmNlJykgPyB2IDogbnVsbCkpLmZpbHRlcihCb29sZWFuKVxuICAgIGNvbnN0IGxpbmtUeXBlID0gY2hlY2tMaW5rVHlwZSh2YWx1ZXMuY29udGVudFVybClcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgLi4udmFsdWVzLFxuICAgICAgZGVzY3JpcHRpb246IGNvbnRlbnQsXG4gICAgICBjcmVhdGVkQnk6IHVzZXIudXNlcm5hbWUsXG4gICAgICB1c2VySWQ6IHVzZXIuaWQsXG4gICAgICBldmlkZW5jZUxpbmtzOiBlTGlua3MsXG4gICAgICBbbGlua1R5cGVdOiB2YWx1ZXMuY29udGVudFVybCxcbiAgICAgIHRodW1iSW1nVXJsOiBtZXRhRGF0YS5vZ0ltYWdlPy51cmwsXG4gICAgfVxuICAgIGlmICh2YWx1ZXMuZmlsZSBpbnN0YW5jZW9mIEZpbGUpIHtcbiAgICAgIGNvbnN0IFtmaWxlVHlwZSwgZmlsZUZvcm1hdF0gPSB2YWx1ZXMuZmlsZS50eXBlLnNwbGl0KCcvJylcbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLCB2YWx1ZXMuZmlsZSlcbiAgICAgIHVwbG9hZFRvcGljTWVkaWEoZm9ybURhdGEsIGZpbGVUeXBlLCBmaWxlRm9ybWF0LCBkYXRhKVxuICAgIH0gZWxzZSB7XG4gICAgICB0b2FzdC5wcm9taXNlKFxuICAgICAgICBjcmVhdGVUb3BpYyhkYXRhKSxcbiAgICAgICAge1xuICAgICAgICAgIHBlbmRpbmc6ICdDcmVhdGluZyBUb3BpYy4uLicsXG4gICAgICAgICAgc3VjY2VzczogJ1RvcGljIFN1Y2Nlc3NmdWxseSBDcmVhdGVkIScsXG4gICAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAgIHJlbmRlcih7IGRhdGE6IGVycm9yRGF0YSB9KSB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgcmVzcG9uc2UgfSA9IGVycm9yRGF0YVxuICAgICAgICAgICAgICBjb25zdCB7IGRhdGE6IHJlc3BvbnNlRGF0YSB9ID0gcmVzcG9uc2VcbiAgICAgICAgICAgICAgcmV0dXJuIGAke3Jlc3BvbnNlRGF0YS5tc2d9IPCfpK8gYFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgKVxuICAgIH1cbiAgICBzZXRTdWJtaXR0aW5nKGZhbHNlKVxuICAgIHJlc2V0Rm9ybSh7fSlcbiAgfSwgW21ldGFEYXRhXSlcbn1cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHVzZUNhbGxiYWNrKChlLCBzZXRGaWVsZFZhbHVlLCBzZXRTdGF0ZVZhbHVlKSA9PiB7XG4gIHNldEZpZWxkVmFsdWUoZS50YXJnZXQuZGF0YXNldC5maWxldHlwZSwgZS5jdXJyZW50VGFyZ2V0LmZpbGVzWzBdKVxuICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gIGNvbnN0IGN1cnJGaWxlID0gZS50YXJnZXQuZmlsZXNbMF1cbiAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcbiAgICBzZXRTdGF0ZVZhbHVlKHJlYWRlci5yZXN1bHQpXG4gIH1cbiAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoY3VyckZpbGUpXG59LCBbXSlcbiIsIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbi8vIGFjdGlvbiBjcmVhdG9yIGlzIGp1c3QgYSBmdW5jdGlvbiB0aGF0IGRpc3BhdGNoZXMgYW4gYWN0aW9uXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5J1xuaW1wb3J0IHsgY2xvc2VNb2RhbCB9IGZyb20gJy4uL3VpL2luZGV4J1xuaW1wb3J0IHsgQUREX1NVQl9UT1BJQywgR0VUX0FMTF9TVUJfVE9QSUNTIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvc3VidG9waWNzL3N1YlRvcGljc1JlZHVjZXInXG5pbXBvcnQgKiBhcyBTdWJUb3BpY3NBcGlVdGlsIGZyb20gJy4uLy4uLy4uL2FwaS92MS9zdWJ0b3BpY3Mvc3VidG9waWNzX2FwaV91dGlsJ1xuaW1wb3J0IHsgZXJyb3JGb3JtYXR0ZXIgfSBmcm9tICcuLi8uLi91dGlscy9lcnJvckZvcm1hdHRlcidcblxuY29uc3QgZ2V0QWxsVG9waWNzQWN0aW9uQ3JlYXRvciA9IChzdWJ0b3BpY3MpID0+ICh7XG4gIHR5cGU6IEdFVF9BTExfU1VCX1RPUElDUyxcbiAgcGF5bG9hZDogc3VidG9waWNzLFxuXG59KVxuXG5jb25zdCBhZGRUb3BpY0FjdGlvbkNyZWF0b3IgPSAoc3ViVG9waWNEYXRhKSA9PiAoe1xuICB0eXBlOiBBRERfU1VCX1RPUElDLFxuICBwYXlsb2FkOiBzdWJUb3BpY0RhdGEsXG59KVxuXG5leHBvcnQgY29uc3QgY3JlYXRlU3ViVG9waWMgPSAodG9waWNEYXRhKSA9PiAoZGlzcGF0Y2gpID0+IFN1YlRvcGljc0FwaVV0aWwuY3JlYXRlU3ViVG9waWModG9waWNEYXRhKVxuICAudGhlbigocmVzKSA9PiBkaXNwYXRjaChhZGRUb3BpY0FjdGlvbkNyZWF0b3IocmVzLmRhdGEpKSlcbiAgLnRoZW4oKCkgPT4gZGlzcGF0Y2goY2xvc2VNb2RhbCgpKSlcbiAgLmNhdGNoKChlcnJvcikgPT4gdG9hc3QuZXJyb3IoZXJyb3JGb3JtYXR0ZXIoZXJyb3IpKSlcblxuZXhwb3J0IGNvbnN0IGdldEFsbFN1YlRvcGljcyA9ICh0b3BpY0lkKSA9PiAoZGlzcGF0Y2gpID0+IFN1YlRvcGljc0FwaVV0aWwuZ2V0QWxsU3ViVG9waWNzKHRvcGljSWQpXG4gIC50aGVuKChyZXMpID0+IGRpc3BhdGNoKGdldEFsbFRvcGljc0FjdGlvbkNyZWF0b3IocmVzLmRhdGEpKSlcbiAgLmNhdGNoKChlcnJvcikgPT4gdG9hc3QuZXJyb3IoZXJyb3JGb3JtYXR0ZXIoZXJyb3IpKSlcblxuZXhwb3J0IGNvbnN0IGdldFN1YlRvcGljID0gKHN1YlRvcGljSWQpID0+IChkaXNwYXRjaCkgPT4gU3ViVG9waWNzQXBpVXRpbC5nZXRTdWJUb3BpYyhzdWJUb3BpY0lkKVxuICAudGhlbigocmVzKSA9PiBkaXNwYXRjaChhZGRUb3BpY0FjdGlvbkNyZWF0b3IocmVzLmRhdGEpKSlcbiAgLmNhdGNoKChlcnJvcikgPT4gdG9hc3QuZXJyb3IoZXJyb3JGb3JtYXR0ZXIoZXJyb3IpKSlcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjcmVhdGVTdWJUb3BpYyxcbiAgZ2V0QWxsU3ViVG9waWNzLFxuICBnZXRTdWJUb3BpYyxcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cblxuZXhwb3J0IGNvbnN0IGFkZFN1YnRvcGljID0gKGFjdGlvbiwgc3RhdGUpID0+IHtcbiAgY29uc3QgbmV3U3RhdGUgPSB7IC4uLnN0YXRlIH1cbiAgbmV3U3RhdGVbYWN0aW9uLnBheWxvYWQuaWRdID0gYWN0aW9uLnBheWxvYWRcbiAgcmV0dXJuIG5ld1N0YXRlXG59XG5cbmV4cG9ydCBjb25zdCBhZGRBbGxTdWJ0b3BpY3MgPSAoYWN0aW9uKSA9PiB7XG4gIGNvbnN0IG5ld1N0YXRlID0gYWN0aW9uLnBheWxvYWQucmVkdWNlKChhY2MsIHN1YnRvcGljKSA9PiB7XG4gICAgYWNjW3N1YnRvcGljLmlkXSA9IHN1YnRvcGljXG4gICAgcmV0dXJuIGFjY1xuICB9LCB7fSlcbiAgcmV0dXJuIG5ld1N0YXRlXG59XG4iLCJpbXBvcnQgeyBhZGRTdWJ0b3BpYywgYWRkQWxsU3VidG9waWNzIH0gZnJvbSAnLi9pbmRleCdcblxuZXhwb3J0IGNvbnN0IEFERF9TVUJfVE9QSUMgPSAnQUREX1NVQl9UT1BJQydcbmV4cG9ydCBjb25zdCBHRVRfQUxMX1NVQl9UT1BJQ1MgPSAnR0VUX0FMTF9TVUJfVE9QSUNTJ1xuXG5jb25zdCByZWR1Y2VyQWN0aW9uTWFwID0gbmV3IE1hcChbXG4gIFtBRERfU1VCX1RPUElDLCBhZGRTdWJ0b3BpY10sXG4gIFtHRVRfQUxMX1NVQl9UT1BJQ1MsIGFkZEFsbFN1YnRvcGljc10sXG5dKVxuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0ge30sIGFjdGlvbikgPT4ge1xuICBpZiAoIXJlZHVjZXJBY3Rpb25NYXAuaGFzKGFjdGlvbi50eXBlKSkgcmV0dXJuIHN0YXRlXG4gIHJldHVybiByZWR1Y2VyQWN0aW9uTWFwLmdldChhY3Rpb24udHlwZSkoYWN0aW9uLCBzdGF0ZSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlclxuIl0sIm5hbWVzIjpbImF4aW9zIiwiQkFDS0VORF9ERVYiLCJjcmVhdGVTdWJUb3BpYyIsInN1YlRvcGljRGF0YSIsInBvc3QiLCJnZXRBbGxTdWJUb3BpY3MiLCJ0b3BpY0lkIiwiZ2V0IiwiZ2V0U3ViVG9waWMiLCJzdWJUb3BpY0lkIiwidCIsInYiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNldFRpbWVvdXQiLCJiaW5kIiwieW91VHViZVVybFZhbGlkYXRvciIsIlJlZ0V4cCIsInR3aXR0ZXJVcmxWYWxpZHRvciIsIlJlYWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJ1c2VMb2NhdGlvbiIsIk1vZGFsIiwiRm9ybWlrIiwiQnV0dG9uIiwiVXNlckluZm9IZWFkZXIiLCJBbmltYXRlZENoZWNrbWFyayIsIlJpY2hUZXh0RWRpdG9yIiwidXNlU2V0SW5uZXJIdG1sIiwidXNlR2V0U3RhdGVFZmZlY3QiLCJ1c2VIYW5kbGVTdWJtaXQiLCJnZXRUaW1lU2luY2UiLCJjaGVja1RveGljaXR5IiwiRm9ybUNvbnRhaW5lciIsIklucHV0V3JhcHBlciIsIkNvbnRhaW5lciIsIkRlc2NyaXB0aW9uIiwiVG94aWNpdHlDb250cm9scyIsInV1aWRSZWdFeCIsIkNyZWF0ZUNvbW1lbnRGb3JtIiwibW9kYWxQcm9wcyIsImRlc2NSZWYiLCJyYXdIVE1MIiwiY29udGVudCIsInJhd1RleHQiLCJyaWNoVGV4dEVkaXRvckRhdGEiLCJzZXRSaWNoVGV4dEVkaXRvckRhdGEiLCJ0b3hpY2l0eVNjb3JlIiwic2V0VG94aWNpdHlTY29yZSIsInBhdGhuYW1lIiwiY29udGVudElkIiwibWF0Y2giLCJzdWJ0b3BpY0lkIiwiY29tcFN0YXRlIiwiaGFuZGxlU3VibWl0IiwiaHRtbENvbnRlbnQiLCJwb3NpdGl2ZSIsIm5lZ2F0aXZlIiwibmV1dHJhbCIsImVycm9ycyIsImxlbmd0aCIsImlzU3VibWl0dGluZyIsImNyZWF0ZWRCeUljb25TcmMiLCJjcmVhdGVkQnkiLCJ0aW1lIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJ0aGVuIiwicmVzIiwiZGF0YSIsIlNFVkVSRV9UT1hJQ0lUWSIsInRvRml4ZWQiLCJzdHlsZWQiLCJGb3JtIiwidXNlTWVtbyIsInVzZVNlbGVjdG9yIiwiZmluZENvbW1lbnRDb250ZW50IiwiY29tbWVudCIsImlkIiwidmlzaXRlZCIsIlNldCIsInEiLCJjdXJyTm9kZSIsInNoaWZ0IiwiYWRkIiwiY2hpbGRyZW4iLCJmb3JFYWNoIiwiY2hpbGQiLCJoYXMiLCJwdXNoIiwidXNlciIsInMiLCJzZXNzaW9uIiwiY3VycmVudFVzZXIiLCJ0b3BpYyIsInRvcGljcyIsImxpc3QiLCJmaW5kIiwiY29tbWVudHMiLCJjIiwicm9vdFBhcmVudENvbW1lbnRJZCIsImNvbW1lbnRJZCIsInRyaWJ1bmFsQ29tbWVudCIsInRyaWJ1bmFsQ29tbWVudHMiLCJjcmVhdGVkQXQiLCJjb21tZW50Q29udGVudCIsInJlcGx5VHlwZSIsImRlc2NyaXB0aW9uIiwidXNlcm5hbWUiLCJ0eXBlIiwidXNlQ2FsbGJhY2siLCJ0b2FzdCIsInVzZUJpbmREaXNwYXRjaCIsImNvbW1lbnRBY3Rpb25zIiwidHJpYnVuYWxDb21tZW50QWN0aW9ucyIsImRlbGF5IiwidXNlRGV0ZWN0Q3VycmVudFBhZ2UiLCJpc1RyaWJ1bmFsQ29tbWVudCIsImlzT25UcmlidW5hbFBhZ2UiLCJ0cmlidW5hbENvbW1lbnRVbmRlclJldmlld0lkIiwiaXNQYXJlbnRUcmlidW5hbENvbW1lbnRVbmRlclJldmlldyIsInBhcmVudElkIiwicm9vdElkIiwiY3JlYXRlQ29tbWVudCIsImNyZWF0ZVRyaWJ1bmFsQ29tbWVudCIsInZhbHVlcyIsInNldFN1Ym1pdHRpbmciLCJyZXNldEZvcm0iLCJwcm9taXNlIiwiYWxsIiwicGVuZGluZyIsInN1Y2Nlc3MiLCJyZW5kZXIiLCJpY29uIiwiZXJyb3IiLCJ0b3hpY2l0eVN0YXR1cyIsIm1lbWVGbGFnIiwiSW5wdXQiLCJjb2xvciIsInRleHQiLCJCb29sZWFuIiwibWFyZ2luTGVmdCIsIndpZHRoIiwiaGVpZ2h0Iiwia2V5ZnJhbWVzIiwic3BsYXNoIiwicHJpbWFyeSIsInByb3BzIiwiRXJyb3JNZXNzYWdlIiwiRmFkZSIsIlN0eWxlZFNlbGVjdCIsIkxhYmVsIiwiRXJyb3IiLCJTZWxlY3QiLCJmaWVsZCIsImZvcm0iLCJwbGFjZWhvbGRlciIsInNldEZpZWxkVmFsdWUiLCJzZXRGaWVsZFRvdWNoZWQiLCJvcGVuIiwiaXNPcGVuIiwidmFsdWUiLCJzZXRWYWx1ZSIsIm1ldGFEYXRhIiwiZ2V0RmllbGRNZXRhIiwibmFtZSIsInNob3dFcnJvciIsInRvdWNoZWQiLCJlbnVtcyIsInN0YXRlIiwidG9waWNDYXRlZ29yaWVzIiwib25DaGFuZ2UiLCJlIiwic2V0RmllbGQiLCJ0YXJnZXQiLCJtYXAiLCJ2YWwiLCJPdmVybGF5IiwidXNlRWZmZWN0IiwiUmVhY3RRdWlsbCIsIkVtb2ppQnV0dG9uIiwiRW1vamlDb250YWluZXIiLCJzZXRDb250ZW50IiwiaXNIaWRkZW4iLCJzZXRJc0hpZGRlbiIsIm1vZHVsZXMiLCJ0b29sYmFyIiwiY29udGFpbmVyIiwiaGFuZGxlT25DaGFuZ2UiLCJjdXJyQ29udGVudCIsImRlbHRhIiwic291cmNlIiwiZWRpdG9yIiwiZ2V0SFRNTCIsImdldENvbnRlbnRzIiwiZ2V0VGV4dCIsInBpY2tlclJlZiIsInF1aWxsUmVmIiwiZW1vamlQaWNrZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJjdXJyZW50IiwiY3Vyc29yUG9zaXRpb24iLCJnZXRTZWxlY3Rpb24iLCJpbmRleCIsImdldExlbmd0aCIsImluc2VydFRleHQiLCJkZXRhaWwiLCJlbW9qaSIsInNldFNlbGVjdGlvbiIsImZvcm1hdHMiLCJwcmV2IiwiQ3VzdG9tQnV0dG9uIiwiQ3VzdG9tVG9vbGJhciIsImp1c3RpZnlDb250ZW50IiwiZGl2IiwiQ29sbGFwc2UiLCJGaWVsZCIsInVzZUdldExpbmtNZXRhRGF0YU9uQmx1ciIsInVpQWN0aW9ucyIsInRvcGljQWN0aW9ucyIsIlRoZW1lVG9vbHRpcCIsIlVwbG9hZE1lZGlhQ29udGFpbmVyIiwiRGlzcGxheU1lZGlhIiwiTGVmdCIsIlJpZ2h0IiwiRmxleERpdiIsIklucHV0c0NvbnRhaW5lciIsIkFycm93IiwiTGluZSIsIkRvd25BcnJvd0NpcmNsZVN2ZyIsIkNyZWF0ZVN1YlRvcGljRm9ybSIsInNldE9wZW4iLCJpbWdGaWxlIiwic2V0SW1nRmlsZSIsInZpZGVvRmlsZSIsInNldFZpZGVvRmlsZSIsInJvdGF0ZSIsInNldFJvdGF0ZSIsImdldExpbmtNZXRhRGF0YU9uQmx1ciIsImdldFRvcGljIiwiY2xvc2VNb2RhbCIsInRpdGxlIiwicGFyYW1zIiwid2hpdGVTcGFjZSIsIlN1cHBsZW1lbnRhbEluZm9ybWF0aW9uIiwidXJsIiwieXRVcmwiLCJzZWFyY2giLCJ0d2VldFVybCIsImdldExpbmtNZXRhRGF0YSIsInNldE1ldGFEYXRhIiwiY3VycmVudFRhcmdldCIsInN1YnRvcGljQWN0aW9ucyIsImNoZWNrTGlua1R5cGUiLCJ1cGxvYWRUb3BpY01lZGlhIiwiZUxpbmtzIiwiT2JqZWN0IiwiZW50cmllcyIsImsiLCJpbmNsdWRlcyIsImZpbHRlciIsImxpbmtUeXBlIiwiY29udGVudFVybCIsInVzZXJJZCIsImV2aWRlbmNlTGlua3MiLCJvZ0ltYWdlIiwiZmlsZSIsIkZpbGUiLCJzcGxpdCIsImZpbGVUeXBlIiwiZmlsZUZvcm1hdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJ1c2VDb25maWdGb3JtRXJyb3JzIiwiRXhwYW5kQnV0dG9uIiwiTGlua1R5cGVJY29uIiwiU2VjdGlvbkRlc2NyaXB0aW9uIiwiTW9iaWxlT25seUxpbmUiLCJJTklUX1RPUElDX0ZPUk1fVkFMVUVTIiwiVkFMSURBVElPTlMiLCJSRVFVSVJFRCIsInN1bW1hcnkiLCJNSU5fTEVOR1RIIiwiY2F0ZWdvcnkiLCJDcmVhdGVUb3BpY0Zvcm0iLCJyaWNoVGV4dEVkaXRvckNvbnRlbnQiLCJzZXRSaWNoVGV4dEVkaXRvckNvbnRlbnQiLCJ2YWxpZGF0b3IiLCJnZXRDb250ZW50VXJsT25CbHVyIiwiT0dGYXZpY29uIiwiSXNMb2FkaW5nSE9DIiwic2V0SXNMb2FkaW5nIiwiZmF2aWNvbiIsIlVwbG9hZElucHV0IiwiVXBsb2FkSW1hZ2VJbnB1dCIsImRpc2FibGVkIiwiVXBsb2FkRmlsZUlucHV0IiwiVmlkZW9TdmciLCJJbWFnZVN2ZyIsInVzZU9uRmlsZUNoYW5nZUhhbmRsZXIiLCJvbkZpbGVDaGFuZ2UiLCJzZXRDb250ZW50VXJsIiwiY3JlYXRlVG9waWMiLCJlcnJvckRhdGEiLCJyZXNwb25zZSIsInJlc3BvbnNlRGF0YSIsIm1zZyIsInNldFN0YXRlVmFsdWUiLCJkYXRhc2V0IiwiZmlsZXR5cGUiLCJmaWxlcyIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJjdXJyRmlsZSIsIm9ubG9hZGVuZCIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiLCJBRERfU1VCX1RPUElDIiwiR0VUX0FMTF9TVUJfVE9QSUNTIiwiU3ViVG9waWNzQXBpVXRpbCIsImVycm9yRm9ybWF0dGVyIiwiZ2V0QWxsVG9waWNzQWN0aW9uQ3JlYXRvciIsInN1YnRvcGljcyIsInBheWxvYWQiLCJhZGRUb3BpY0FjdGlvbkNyZWF0b3IiLCJ0b3BpY0RhdGEiLCJkaXNwYXRjaCIsImFkZFN1YnRvcGljIiwiYWN0aW9uIiwibmV3U3RhdGUiLCJhZGRBbGxTdWJ0b3BpY3MiLCJyZWR1Y2UiLCJhY2MiLCJzdWJ0b3BpYyIsInJlZHVjZXJBY3Rpb25NYXAiLCJNYXAiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==