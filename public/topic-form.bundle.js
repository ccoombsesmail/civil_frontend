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
      setContent = _useState10[1]; // const validator = useConfigFormErrors(ERRORS)


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
      rotate: rotate // icon={<DownArrowCircleSvg />}
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
      rotate: rotate // icon={<DownArrowCircleSvg />}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNYQTtBQUVBLGlFQUFlO0VBQUEsT0FBTXJELGtEQUFXLENBQUMsVUFBQzhELENBQUQsRUFBSWYsYUFBSixFQUFtQjBKLGFBQW5CLEVBQXFDO0lBQ3BFMUosYUFBYSxDQUFDZSxDQUFDLENBQUNFLE1BQUYsQ0FBUzBJLE9BQVQsQ0FBaUJDLFFBQWxCLEVBQTRCN0ksQ0FBQyxDQUFDa0YsYUFBRixDQUFnQjRELEtBQWhCLENBQXNCLENBQXRCLENBQTVCLENBQWI7SUFDQSxJQUFNQyxNQUFNLEdBQUcsSUFBSUMsVUFBSixFQUFmO0lBQ0EsSUFBTUMsUUFBUSxHQUFHakosQ0FBQyxDQUFDRSxNQUFGLENBQVM0SSxLQUFULENBQWUsQ0FBZixDQUFqQjs7SUFDQUMsTUFBTSxDQUFDRyxTQUFQLEdBQW1CLFlBQU07TUFDdkJQLGFBQWEsQ0FBQ0ksTUFBTSxDQUFDSSxNQUFSLENBQWI7SUFDRCxDQUZEOztJQUdBSixNQUFNLENBQUNLLGFBQVAsQ0FBcUJILFFBQXJCO0VBQ0QsQ0FSK0IsRUFRN0IsRUFSNkIsQ0FBakI7QUFBQSxDQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvZ2VuZXJpYy9kZWxheS5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9nZW5lcmljL3JlZ2V4L3VybFZhbGlkYXRvcnMuanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvQ29tbWVudEZvcm0vSW5kZXguanN4Iiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL0NvbW1lbnRGb3JtL1N0eWxlL2luZGV4LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL0NvbW1lbnRGb3JtL2hvb2tzL3VzZUdldFN0YXRlRWZmZWN0LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL0NvbW1lbnRGb3JtL2hvb2tzL3VzZUhhbmRsZVN1Ym1pdC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9Db21tb25Db21wb25lbnRzL0FuaW1hdGVkQ2hlY2ttYXJrL0luZGV4LmpzeCIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9Db21tb25Db21wb25lbnRzL0FuaW1hdGVkQ2hlY2ttYXJrL1N0eWxlL2luZGV4LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL0NvbW1vbkNvbXBvbmVudHMvRm9ybS9TZWxlY3QvSW5kZXguanN4Iiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL0NvbW1vbkNvbXBvbmVudHMvRm9ybS9TZWxlY3QvU3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvQ29tbW9uQ29tcG9uZW50cy9PdmVybGF5L3N0eWxlLmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL0NvbW1vbkNvbXBvbmVudHMvUmljaFRleHRFZGl0b3IvSW5kZXguanN4Iiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL0NvbW1vbkNvbXBvbmVudHMvUmljaFRleHRFZGl0b3IvU3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvU3ViVG9waWNGb3JtL0luZGV4LmpzeCIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9TdWJUb3BpY0Zvcm0vU3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvU3ViVG9waWNGb3JtL2hvb2tzL2NoZWNrTGlua1R5cGUuanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvU3ViVG9waWNGb3JtL2hvb2tzL3VzZUdldExpbmtNZXRhRGF0YU9uQmx1ci5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9TdWJUb3BpY0Zvcm0vaG9va3MvdXNlSGFuZGxlU3VibWl0LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL1RvcGljRm9ybS9JbmRleC5qc3giLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvVG9waWNGb3JtL1N0eWxlL2luZGV4LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL1RvcGljRm9ybS9jb21wb25lbnRzL0xpbmtUeXBlSWNvbi9JbmRleC5qc3giLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvVG9waWNGb3JtL2NvbXBvbmVudHMvTGlua1R5cGVJY29uL1N0eWxlL2luZGV4LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL1RvcGljRm9ybS9jb21wb25lbnRzL1VwbG9hZEltYWdlSW5wdXQvSW5kZXguanN4Iiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL1RvcGljRm9ybS9jb21wb25lbnRzL1VwbG9hZEltYWdlSW5wdXQvU3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvVG9waWNGb3JtL2NvbXBvbmVudHMvVXBsb2FkTWVkaWEvSW5kZXguanN4Iiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL1RvcGljRm9ybS9jb21wb25lbnRzL1VwbG9hZE1lZGlhL1N0eWxlL2luZGV4LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL1RvcGljRm9ybS9ob29rcy9jaGVja0xpbmtUeXBlLmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL1RvcGljRm9ybS9ob29rcy91c2VHZXRMaW5rTWV0YURhdGFPbkJsdXIuanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvVG9waWNGb3JtL2hvb2tzL3VzZUhhbmRsZVN1Ym1pdC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9Ub3BpY0Zvcm0vaG9va3MvdXNlT25GaWxlQ2hhbmdlSGFuZGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAodCwgdikgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICBpZiAodiA9PT0gdHJ1ZSkgcmVqZWN0KClcbiAgc2V0VGltZW91dChyZXNvbHZlLmJpbmQobnVsbCwgdiksIHQpXG59KVxuIiwiZXhwb3J0IGNvbnN0IHlvdVR1YmVVcmxWYWxpZGF0b3IgPSBuZXcgUmVnRXhwKC9eKCg/Omh0dHBzPzopP1xcL1xcLyk/KCg/Ond3d3xtKVxcLik/KCg/OnlvdXR1YmVcXC5jb218eW91dHUuYmUpKShcXC8oPzpbXFx3XFwtXStcXD92PXxlbWJlZFxcL3x2XFwvKT8pKFtcXHdcXC1dKykoXFxTKyk/JC9nbSlcbmV4cG9ydCBjb25zdCB0d2l0dGVyVXJsVmFsaWR0b3IgPSBuZXcgUmVnRXhwKC9odHRwKD86cyk/OlxcL1xcLyg/Ond3dyk/dHdpdHRlclxcLmNvbVxcLyhbYS16QS1aMC05X10rKS9nbSlcbiIsIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtYm9vdHN0cmFwL01vZGFsJ1xuaW1wb3J0IHsgRm9ybWlrIH0gZnJvbSAnZm9ybWlrJ1xuXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL0NvbW1vbkNvbXBvbmVudHMvQnV0dG9uL0luZGV4J1xuaW1wb3J0IFVzZXJJbmZvSGVhZGVyIGZyb20gJy4uL0NvbW1vbkNvbXBvbmVudHMvVXNlckluZm9IZWFkZXIvSW5kZXgnXG5pbXBvcnQgQW5pbWF0ZWRDaGVja21hcmsgZnJvbSAnLi4vQ29tbW9uQ29tcG9uZW50cy9BbmltYXRlZENoZWNrbWFyay9JbmRleCdcbmltcG9ydCBSaWNoVGV4dEVkaXRvciBmcm9tICcuLi9Db21tb25Db21wb25lbnRzL1JpY2hUZXh0RWRpdG9yL0luZGV4J1xuXG5pbXBvcnQgdXNlU2V0SW5uZXJIdG1sIGZyb20gJy4uL2hvb2tzL3VzZVNldElubmVySHRtbCdcbmltcG9ydCB1c2VHZXRTdGF0ZUVmZmVjdCBmcm9tICcuL2hvb2tzL3VzZUdldFN0YXRlRWZmZWN0J1xuaW1wb3J0IHVzZUhhbmRsZVN1Ym1pdCBmcm9tICcuL2hvb2tzL3VzZUhhbmRsZVN1Ym1pdCdcblxuaW1wb3J0IHsgZ2V0VGltZVNpbmNlIH0gZnJvbSAnLi4vLi4vZ2VuZXJpYy9zdHJpbmcvZGF0ZUZvcm1hdHRlcidcbmltcG9ydCB7IGNoZWNrVG94aWNpdHkgfSBmcm9tICcuLi8uLi9hcGkvdjEvY29tbWVudHMvY29tbWVudHNfYXBpX3V0aWwnXG5cbmltcG9ydCB7XG4gIEZvcm1Db250YWluZXIsIElucHV0V3JhcHBlciwgQ29udGFpbmVyLCBEZXNjcmlwdGlvbiwgVG94aWNpdHlDb250cm9scyxcbn0gZnJvbSAnLi9TdHlsZSdcblxuY29uc3QgdXVpZFJlZ0V4ID0gbmV3IFJlZ0V4cCgvXFxiWzAtOWEtZl17OH1cXGItWzAtOWEtZl17NH0tWzAtOWEtZl17NH0tWzAtOWEtZl17NH0tXFxiWzAtOWEtZl17MTJ9XFxiL2cpXG5cbmNvbnN0IENyZWF0ZUNvbW1lbnRGb3JtID0gKHsgbW9kYWxQcm9wcyB9KSA9PiB7XG4gIGNvbnN0IGRlc2NSZWYgPSB1c2VSZWYobnVsbClcbiAgY29uc3QgW3JpY2hUZXh0RWRpdG9yRGF0YSwgc2V0UmljaFRleHRFZGl0b3JEYXRhXSA9IHVzZVN0YXRlKHtcbiAgICByYXdIVE1MOiAnJyxcbiAgICBjb250ZW50OiAnJyxcbiAgICByYXdUZXh0OiAnJyxcbiAgfSlcbiAgY29uc3QgW3RveGljaXR5U2NvcmUsIHNldFRveGljaXR5U2NvcmVdID0gdXNlU3RhdGUobnVsbClcblxuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VMb2NhdGlvbigpXG4gIGNvbnN0IGNvbnRlbnRJZCA9IHBhdGhuYW1lLm1hdGNoKHV1aWRSZWdFeClbMF1cbiAgY29uc3Qgc3VidG9waWNJZCA9IHBhdGhuYW1lLm1hdGNoKHV1aWRSZWdFeClbMV1cbiAgY29uc29sZS5sb2cocGF0aG5hbWUpXG4gIGNvbnN0IGNvbXBTdGF0ZSA9IHVzZUdldFN0YXRlRWZmZWN0KGNvbnRlbnRJZCwgc3VidG9waWNJZCwgbW9kYWxQcm9wcylcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gdXNlSGFuZGxlU3VibWl0KGNvbXBTdGF0ZSwgcmljaFRleHRFZGl0b3JEYXRhLnJhd0hUTUwsIHJpY2hUZXh0RWRpdG9yRGF0YS5yYXdUZXh0LCBtb2RhbFByb3BzLCBzdWJ0b3BpY0lkIHx8IGNvbnRlbnRJZCwgY29udGVudElkKVxuICB1c2VTZXRJbm5lckh0bWwoZGVzY1JlZiwgY29tcFN0YXRlLmh0bWxDb250ZW50KVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxGb3JtaWtcbiAgICAgICAgaW5pdGlhbFZhbHVlcz17e1xuICAgICAgICAgIGNvbnRlbnQ6ICcnLFxuICAgICAgICAgIHBvc2l0aXZlOiAnJyxcbiAgICAgICAgICBuZWdhdGl2ZTogJycsXG4gICAgICAgICAgbmV1dHJhbDogJycsXG4gICAgICAgIH19XG4gICAgICAgIHZhbGlkYXRlPXsoKSA9PiB7XG4gICAgICAgICAgY29uc3QgZXJyb3JzID0ge31cbiAgICAgICAgICBpZiAocmljaFRleHRFZGl0b3JEYXRhLmNvbnRlbnQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBlcnJvcnMuY29udGVudCA9ICdXcml0ZSBTb21ldGhpbmcnXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBlcnJvcnNcbiAgICAgICAgfX1cbiAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cbiAgICAgID5cbiAgICAgICAgeyh7IGlzU3VibWl0dGluZyB9KSA9PiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XG4gICAgICAgICAgICAgIDxNb2RhbC5UaXRsZT5Xcml0ZSBZb3VyIFJlcGx5PC9Nb2RhbC5UaXRsZT5cbiAgICAgICAgICAgIDwvTW9kYWwuSGVhZGVyPlxuICAgICAgICAgICAgPEZvcm1Db250YWluZXI+XG4gICAgICAgICAgICAgIDxNb2RhbC5Cb2R5PlxuICAgICAgICAgICAgICAgIDxVc2VySW5mb0hlYWRlclxuICAgICAgICAgICAgICAgICAgaWNvblNyYz17Y29tcFN0YXRlLmNyZWF0ZWRCeUljb25TcmN9XG4gICAgICAgICAgICAgICAgICB1c2VybmFtZT17Y29tcFN0YXRlLmNyZWF0ZWRCeX1cbiAgICAgICAgICAgICAgICAgIHRpbWU9e2dldFRpbWVTaW5jZShjb21wU3RhdGUudGltZSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8RGVzY3JpcHRpb24+XG4gICAgICAgICAgICAgICAgICA8c3BhbiByZWY9e2Rlc2NSZWZ9IC8+XG4gICAgICAgICAgICAgICAgPC9EZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICA8SW5wdXRXcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgPFJpY2hUZXh0RWRpdG9yXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3JpY2hUZXh0RWRpdG9yRGF0YS5jb250ZW50fVxuICAgICAgICAgICAgICAgICAgICBzZXRDb250ZW50PXtzZXRSaWNoVGV4dEVkaXRvckRhdGF9XG4gICAgICAgICAgICAgICAgICAgIHNldFRveGljaXR5U2NvcmU9e3NldFRveGljaXR5U2NvcmV9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvSW5wdXRXcmFwcGVyPlxuICAgICAgICAgICAgICA8L01vZGFsLkJvZHk+XG4gICAgICAgICAgICAgIDxNb2RhbC5Gb290ZXI+XG4gICAgICAgICAgICAgICAgPFRveGljaXR5Q29udHJvbHM+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjaGVja1RveGljaXR5KHsgY29udGVudDogcmljaFRleHRFZGl0b3JEYXRhLnJhd1RleHQgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRveGljaXR5U2NvcmUocmVzLmRhdGEuU0VWRVJFX1RPWElDSVRZLnRvRml4ZWQoMikpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBDaGVjayBUb3hpY2l0eSBTY29yZVxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxBbmltYXRlZENoZWNrbWFyayB0b3hpY2l0eVNjb3JlPXt0b3hpY2l0eVNjb3JlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHA+eyB0b3hpY2l0eVNjb3JlICYmIGBZb3VyIHRveGljaXR5IHNjb3JlIGlzICR7dG94aWNpdHlTY29yZX1gfTwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvVG94aWNpdHlDb250cm9scz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17aXNTdWJtaXR0aW5nfT5cbiAgICAgICAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L01vZGFsLkZvb3Rlcj5cbiAgICAgICAgICAgIDwvRm9ybUNvbnRhaW5lcj5cblxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9Gb3JtaWs+XG4gICAgPC9Db250YWluZXI+XG5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVDb21tZW50Rm9ybVxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IEZvcm0gfSBmcm9tICdmb3JtaWsnXG5cbmV4cG9ydCBjb25zdCBGb3JtQ29udGFpbmVyID0gc3R5bGVkKEZvcm0pYFxuICBtYXJnaW4tdG9wOiAwO1xuICBib3JkZXItcmFkaXVzOiAuNWVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbmBcblxuZXhwb3J0IGNvbnN0IERlc2NyaXB0aW9uID0gc3R5bGVkKCdwJylgIFxuICB3aWR0aDogOTAlO1xuICBwYWRkaW5nOiAuNWVtIDA7XG4gIG1hcmdpbi1ib3R0b206IDJlbTtcbiAgZm9udC1zaXplOiAuODVlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IGJsYWNrO1xuYFxuXG5leHBvcnQgY29uc3QgSW5wdXRXcmFwcGVyID0gc3R5bGVkKCdkaXYnKWBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgc2VjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIHdpZHRoOiAzMHZ3O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgICBwYWRkaW5nOiAuMmVtIC41ZW07XG4gICAgYmFja2dyb3VuZDogI2UwZTVlYztcbiAgICBib3JkZXItcmFkaXVzOiAuNGVtO1xuICAgIGJveC1zaGFkb3c6XG4gICAtN3B4IC03cHggMjBweCAwcHggI2ZmZjksXG4gICAtNHB4IC00cHggNXB4IDBweCAjZmZmOSxcbiAgIDdweCA3cHggMjBweCAwcHggIzAwMDIsXG4gICA0cHggNHB4IDVweCAwcHggIzAwMDEsXG4gICBpbnNldCAwcHggMHB4IDBweCAwcHggI2ZmZjksXG4gICBpbnNldCAwcHggMHB4IDBweCAwcHggIzAwMDEsXG4gICBpbnNldCAwcHggMHB4IDBweCAwcHggI2ZmZjksXG4gICBpbnNldCAwcHggMHB4IDBweCAwcHggIzAwMDE7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZCgnZGl2JylgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaDEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy1ib3R0b206IC41ZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICB9XG4gYFxuXG5leHBvcnQgY29uc3QgVG94aWNpdHlDb250cm9scyA9IHN0eWxlZCgnZGl2JylgXG4gIGZsZXgtZ3JvdzogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgPiBkaXYge1xuICAgIG1hcmdpbi1sZWZ0OiAxdnc7XG4gIH1cblxuICBwIHtcbiAgICBtYXJnaW46IDAgMWVtO1xuICAgIGNvbG9yOiAjOTc5Y2IwO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAuMXZ3OyAgXG4gIH1cblxuYFxuIiwiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuY29uc3QgZmluZENvbW1lbnRDb250ZW50ID0gKGNvbW1lbnQsIGlkKSA9PiB7XG4gIGNvbnN0IHZpc2l0ZWQgPSBuZXcgU2V0KClcbiAgY29uc3QgcSA9IFtjb21tZW50XVxuICB3aGlsZSAocS5sZW5ndGggIT09IDApIHtcbiAgICBjb25zdCBjdXJyTm9kZSA9IHEuc2hpZnQoKVxuICAgIHZpc2l0ZWQuYWRkKGN1cnJOb2RlLmRhdGEuaWQpXG4gICAgaWYgKGN1cnJOb2RlLmRhdGEuaWQgPT09IGlkKSByZXR1cm4gY3Vyck5vZGUuZGF0YS5jb250ZW50XG4gICAgY3Vyck5vZGUuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGlmICghdmlzaXRlZC5oYXMoY2hpbGQuZGF0YS5pZCkpIHEucHVzaChjaGlsZClcbiAgICB9KVxuICB9XG4gIHJldHVybiAnJ1xufVxuXG5leHBvcnQgZGVmYXVsdCAodG9waWNJZCwgc3VidG9waWNJZCwgbW9kYWxQcm9wcykgPT4ge1xuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3IoKHMpID0+IHMuc2Vzc2lvbi5jdXJyZW50VXNlcilcbiAgY29uc3QgdG9waWMgPSB1c2VTZWxlY3RvcigocykgPT4gcy50b3BpY3MubGlzdCk/LmZpbmQoKHQpID0+IHQuaWQgPT09IHRvcGljSWQpXG4gIGNvbnN0IGNvbW1lbnQgPSB1c2VTZWxlY3RvcigocykgPT4gcy5jb21tZW50cy5saXN0KT8uZmluZChcbiAgICAoYykgPT4gYy5kYXRhPy5pZCA9PT0gbW9kYWxQcm9wcz8ucm9vdFBhcmVudENvbW1lbnRJZCB8fCBtb2RhbFByb3BzPy5jb21tZW50SWQsXG4gIClcbiAgY29uc3QgdHJpYnVuYWxDb21tZW50ID0gdXNlU2VsZWN0b3IoKHMpID0+IHMudHJpYnVuYWxDb21tZW50cy5saXN0KT8uZmluZChcbiAgICAoYykgPT4gYy5kYXRhPy5pZCA9PT0gbW9kYWxQcm9wcz8ucm9vdFBhcmVudENvbW1lbnRJZCxcbiAgKVxuXG4gIGNvbnN0IHsgY3JlYXRlZEJ5LCBjcmVhdGVkQnlJY29uU3JjLCBjcmVhdGVkQXQgfSA9IGNvbW1lbnQ/LmRhdGEgfHwgdHJpYnVuYWxDb21tZW50Py5kYXRhIHx8IHt9XG4gIHJldHVybiB1c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBjb21tZW50Q29udGVudCA9IG1vZGFsUHJvcHM/LnJlcGx5VHlwZSAhPT0gJ1JFUExZX0ZST01fVE9QSUMnXG4gICAgICA/IGZpbmRDb21tZW50Q29udGVudChjb21tZW50IHx8IHRyaWJ1bmFsQ29tbWVudCwgbW9kYWxQcm9wcz8uY29tbWVudElkKSA6IHRvcGljPy5kZXNjcmlwdGlvblxuICAgIHJldHVybiB7XG4gICAgICBzdWJ0b3BpY0lkLFxuICAgICAgY3JlYXRlZEJ5SWNvblNyYzogY3JlYXRlZEJ5SWNvblNyYyB8fCB0b3BpYz8uY3JlYXRlZEJ5SWNvblNyYyxcbiAgICAgIHVzZXJuYW1lOiB1c2VyPy51c2VybmFtZSxcbiAgICAgIGNyZWF0ZWRCeTogY3JlYXRlZEJ5IHx8IHRvcGljPy5jcmVhdGVkQnkgfHwgdHJpYnVuYWxDb21tZW50Py5jcmVhdGVkQnksXG4gICAgICB0aW1lOiBjcmVhdGVkQXQgfHwgdG9waWM/LmNyZWF0ZWRBdCxcbiAgICAgIGh0bWxDb250ZW50OiBjb21tZW50Q29udGVudCxcbiAgICAgIHJvb3RQYXJlbnRDb21tZW50SWQ6IG1vZGFsUHJvcHM/LnJvb3RQYXJlbnRDb21tZW50SWQgfHwgbnVsbCxcbiAgICAgIHR5cGU6IG1vZGFsUHJvcHM/LnJlcGx5VHlwZSxcbiAgICB9XG4gIH0sIFt0b3BpYywgdXNlciwgY29tbWVudCwgc3VidG9waWNJZCwgbW9kYWxQcm9wc10pXG59XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSdcblxuaW1wb3J0IHVzZUJpbmREaXNwYXRjaCBmcm9tICcuLi8uLi9ob29rcy9yZWR1eC91c2VCaW5kRGlzcGF0Y2gnXG5pbXBvcnQgY29tbWVudEFjdGlvbnMgZnJvbSAnLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy9jb21tZW50cydcbmltcG9ydCB0cmlidW5hbENvbW1lbnRBY3Rpb25zIGZyb20gJy4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvdHJpYnVuYWxfY29tbWVudHMnXG5cbmltcG9ydCB7IGNoZWNrVG94aWNpdHkgfSBmcm9tICcuLi8uLi8uLi9hcGkvdjEvY29tbWVudHMvY29tbWVudHNfYXBpX3V0aWwnXG5pbXBvcnQgZGVsYXkgZnJvbSAnLi4vLi4vLi4vZ2VuZXJpYy9kZWxheSdcbmltcG9ydCB1c2VEZXRlY3RDdXJyZW50UGFnZSBmcm9tICcuLi8uLi9ob29rcy9yb3V0aW5nL3VzZURldGVjdEN1cnJlbnRQYWdlJ1xuXG5leHBvcnQgZGVmYXVsdCAoY29tcFN0YXRlLCBjb250ZW50LCByYXdUZXh0LCBtb2RhbFByb3BzLCBjb250ZW50SWQsIHRvcGljSWQpID0+IHtcbiAgY29uc3QgeyBpc09uVHJpYnVuYWxQYWdlOiBpc1RyaWJ1bmFsQ29tbWVudCB9ID0gdXNlRGV0ZWN0Q3VycmVudFBhZ2UoKVxuXG4gIGNvbnN0IHtcbiAgICB0cmlidW5hbENvbW1lbnRVbmRlclJldmlld0lkLFxuICAgIGNvbW1lbnRJZCxcbiAgfSA9IG1vZGFsUHJvcHMgfHwge31cblxuICBjb25zdCBpc1BhcmVudFRyaWJ1bmFsQ29tbWVudFVuZGVyUmV2aWV3ID0gaXNUcmlidW5hbENvbW1lbnRcbiAgJiYgdHJpYnVuYWxDb21tZW50VW5kZXJSZXZpZXdJZCA9PT0gY29tbWVudElkXG5cbiAgY29uc3QgcGFyZW50SWQgPSBpc1BhcmVudFRyaWJ1bmFsQ29tbWVudFVuZGVyUmV2aWV3ID8gbnVsbCA6IGNvbW1lbnRJZCB8fCBudWxsXG4gIGNvbnN0IHJvb3RJZCA9IGlzUGFyZW50VHJpYnVuYWxDb21tZW50VW5kZXJSZXZpZXcgPyBudWxsIDogY29tcFN0YXRlLnJvb3RQYXJlbnRDb21tZW50SWRcblxuICBjb25zdCB7XG4gICAgY3JlYXRlQ29tbWVudCxcbiAgICBjcmVhdGVUcmlidW5hbENvbW1lbnQsXG4gIH0gPSB1c2VCaW5kRGlzcGF0Y2goY29tbWVudEFjdGlvbnMsIHRyaWJ1bmFsQ29tbWVudEFjdGlvbnMpXG5cbiAgcmV0dXJuIHVzZUNhbGxiYWNrKCh2YWx1ZXMsIHsgc2V0U3VibWl0dGluZywgcmVzZXRGb3JtIH0pID0+IHtcbiAgICB0b2FzdC5wcm9taXNlKFxuICAgICAgUHJvbWlzZS5hbGwoW2RlbGF5KDE1MDApLCBjaGVja1RveGljaXR5KHsgY29udGVudDogcmF3VGV4dCB9KV0pLFxuICAgICAge1xuICAgICAgICBwZW5kaW5nOiAnQW5hbHl6aW5nIENvbW1lbnQuLi4nLFxuICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgcmVuZGVyKHsgZGF0YSB9KSB7XG4gICAgICAgICAgICBjb25zdCB0b3hpY2l0eVNjb3JlID0gZGF0YVsxXS5kYXRhLlNFVkVSRV9UT1hJQ0lUWVxuICAgICAgICAgICAgaWYgKHRveGljaXR5U2NvcmUgPCAwLjYpIHJldHVybiAnVGhhbmtzIEZvciBCZWluZyBDaXZpbCEnXG4gICAgICAgICAgICBpZiAodG94aWNpdHlTY29yZSA+PSAwLjYgJiYgdG94aWNpdHlTY29yZSA8PSAwLjkpIHJldHVybiAnVGhhbmtzIGZvciBiZWluZyBzZW1pLWNpdmlsLiBNYXliZSBzYXkgdGhpbmdzIGEgYml0IG5pY2VyJ1xuICAgICAgICAgICAgcmV0dXJuICdZb3UgYXJlIGJlaW5nIHRveGljIDooIFxcbiBZb3VyIGNvbW1lbnQgd2lsbCBiZSBmbGFnZ2VkJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgLy8gb3RoZXIgb3B0aW9uc1xuICAgICAgICAgIGljb246ICfwn5+iJyxcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6ICdQcm9taXNlIHJlamVjdGVkIPCfpK8nLFxuICAgICAgfSxcbiAgICApLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGNvbnN0IHRveGljaXR5U2NvcmUgPSBkYXRhWzFdLmRhdGEuU0VWRVJFX1RPWElDSVRZXG4gICAgICBsZXQgdG94aWNpdHlTdGF0dXNcbiAgICAgIGlmICh0b3hpY2l0eVNjb3JlIDwgMC42KSB0b3hpY2l0eVN0YXR1cyA9ICdOT1RfVE9YSUMnXG4gICAgICBpZiAodG94aWNpdHlTY29yZSA+IDAuOSkgdG94aWNpdHlTdGF0dXMgPSAnVE9YSUMnXG4gICAgICBjb25zdCBjb21tZW50ID0ge1xuICAgICAgICAuLi52YWx1ZXMsXG4gICAgICAgIGNvbnRlbnQsXG4gICAgICAgIG1lbWVGbGFnOiBmYWxzZSxcbiAgICAgICAgcGFyZW50SWQsXG4gICAgICAgIGNvbnRlbnRJZCxcbiAgICAgICAgc3VidG9waWNJZDogY29udGVudElkLFxuICAgICAgICB0b3BpY0lkLFxuICAgICAgICBjcmVhdGVkQnk6IGNvbXBTdGF0ZS51c2VybmFtZSxcbiAgICAgICAgcm9vdElkLFxuICAgICAgICByYXdUZXh0LFxuICAgICAgICB0b3hpY2l0eVN0YXR1cyxcbiAgICAgIH1cbiAgICAgIHJldHVybiBpc1RyaWJ1bmFsQ29tbWVudCA/IGNyZWF0ZVRyaWJ1bmFsQ29tbWVudChjb21tZW50KSA6IGNyZWF0ZUNvbW1lbnQoY29tbWVudClcbiAgICB9KVxuXG4gICAgc2V0U3VibWl0dGluZyhmYWxzZSlcbiAgICByZXNldEZvcm0oe30pXG4gIH0sIFtcbiAgICBjb21wU3RhdGUsXG4gICAgY29udGVudCxcbiAgICByYXdUZXh0LFxuICAgIG1vZGFsUHJvcHMudHJpYnVuYWxDb21tZW50VW5kZXJSZXZpZXdJZCxcbiAgICBtb2RhbFByb3BzLmNvbW1lbnRJZCxcbiAgICBjb250ZW50SWQsXG4gIF0pXG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9sYWJlbC1oYXMtYXNzb2NpYXRlZC1jb250cm9sICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IENvbnRhaW5lciwgSW5wdXQgfSBmcm9tICcuL1N0eWxlL2luZGV4J1xuXG5jb25zdCBBbmltYXRlZENoZWNrbWFyayA9ICh7IHRveGljaXR5U2NvcmUgfSkgPT4ge1xuICBsZXQgY29sb3JcbiAgbGV0IHRleHRcbiAgaWYgKHRveGljaXR5U2NvcmUgPCAwLjYpIHsgY29sb3IgPSAnZ3JlZW4nOyB0ZXh0ID0gJ0dyZWF0IScgfVxuICBpZiAodG94aWNpdHlTY29yZSA+PSAwLjYgJiYgdG94aWNpdHlTY29yZSA8PSAwLjkpIHsgY29sb3IgPSAndmFyKC0tbS1kYW5nZXItY29sb3IpJzsgdGV4dCA9ICdZb3UgYXJlIE9LIGJ1dCBnZXR0aW5nIGNsb3NlJyB9XG4gIGlmICh0b3hpY2l0eVNjb3JlID4gMC45KSB7IGNvbG9yID0gJ3JlZCc7IHRleHQgPSAnWW91IGFyZSBiZWluZyB0b3hpYycgfVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Q29udGFpbmVyIGNvbG9yPXtjb2xvcn0+XG4gICAgICAgIDxJbnB1dCByZWFkT25seSBkaXNhYmxlZCBjaGVja2VkPXtCb29sZWFuKHRveGljaXR5U2NvcmUpfSB0eXBlPVwiY2hlY2tib3hcIiAvPlxuICAgICAgICA8bGFiZWwgLz5cbiAgICAgICAgPHN2ZyB3aWR0aD1cIjE1XCIgaGVpZ2h0PVwiMTRcIiB2aWV3Qm94PVwiMCAwIDE1IDE0XCIgZmlsbD1cIm5vbmVcIj5cbiAgICAgICAgICA8cGF0aCBkPVwiTTIgOC4zNjM2NEw2LjIzMDc3IDEyTDEzIDJcIiAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICAge3RveGljaXR5U2NvcmUgJiYgPHNwYW4gc3R5bGU9e3sgbWFyZ2luTGVmdDogJzAuNXZ3JyB9fT57dGV4dH08L3NwYW4+fVxuICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiIHN0eWxlPXt7IHdpZHRoOiAwLCBoZWlnaHQ6IDAgfX0+XG4gICAgICAgIDxkZWZzPlxuICAgICAgICAgIDxmaWx0ZXIgaWQ9XCJnb29cIj5cbiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBpbj1cIlNvdXJjZUdyYXBoaWNcIiBzdGREZXZpYXRpb249XCI0XCIgcmVzdWx0PVwiYmx1clwiIC8+XG4gICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCBpbj1cImJsdXJcIiBtb2RlPVwibWF0cml4XCIgdmFsdWVzPVwiMSAwIDAgMCAwICAwIDEgMCAwIDAgIDAgMCAxIDAgMCAgMCAwIDAgMjIgLTdcIiByZXN1bHQ9XCJnb29cIiAvPlxuICAgICAgICAgICAgPGZlQmxlbmQgaW49XCJTb3VyY2VHcmFwaGljXCIgaW4yPVwiZ29vXCIgLz5cbiAgICAgICAgICA8L2ZpbHRlcj5cbiAgICAgICAgPC9kZWZzPlxuICAgICAgPC9zdmc+XG4gICAgPC8+XG4gIClcbn1cbmV4cG9ydCBkZWZhdWx0IEFuaW1hdGVkQ2hlY2ttYXJrXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5pbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG4vLyBjb25zdCBwcmltYXJ5ID0gJyM0ZDI3MWE4OCdcblxuY29uc3Qgc3BsYXNoID0gKHByaW1hcnkpID0+IGtleWZyYW1lc2BcbiAgNDAlIHtcbiAgICBiYWNrZ3JvdW5kOiAke3ByaW1hcnl9O1xuICAgIGJveC1zaGFkb3c6IDAgLTE4cHggMCAtOHB4ICR7cHJpbWFyeX0sIDE2cHggLThweCAwIC04cHggJHtwcmltYXJ5fSwgMTZweCA4cHggMCAtOHB4ICR7cHJpbWFyeX0sIDAgMThweCAwIC04cHggJHtwcmltYXJ5fSwgLTE2cHggOHB4IDAgLThweCAke3ByaW1hcnl9LCAtMTZweCAtOHB4IDAgLThweCAke3ByaW1hcnl9O1xuICB9XG5cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZDogJHtwcmltYXJ5fTtcbiAgICBib3gtc2hhZG93OiAwIC0zNnB4IDAgLTEwcHggdHJhbnNwYXJlbnQsIDMycHggLTE2cHggMCAtMTBweCB0cmFuc3BhcmVudCwgMzJweCAxNnB4IDAgLTEwcHggdHJhbnNwYXJlbnQsIDAgMzZweCAwIC0xMHB4IHRyYW5zcGFyZW50LCAtMzJweCAxNnB4IDAgLTEwcHggdHJhbnNwYXJlbnQsIC0zMnB4IC0xNnB4IDAgLTEwcHggdHJhbnNwYXJlbnQ7XG4gIH1cbiAgXG5cbmBcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZCgnZGl2JylgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy5jb2xvcn07XG4gIC8qIHRyYW5zZm9ybTogc2NhbGUoMyk7ICovXG4gIHNwYW4ge1xuICAgIG1hcmdpbi1sZWZ0OiAuNXZ3O1xuICB9XG4gIGlucHV0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNiZmJmYzA7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHotaW5kZXg6IDk5OTk5OTk5OTk7XG5cbiAgfVxuXG4gIGxhYmVsIHtcbiAgICB6LWluZGV4OiA5OTk5OTk5OTk7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICAtd2Via2l0LWZpbHRlcjogdXJsKCNnb28pO1xuICAgIGZpbHRlcjogdXJsKCNnb28pO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xuICAgIC8qIHBvaW50ZXItZXZlbnRzOiBub25lOyAqL1xuICB9XG5cbiAgc3ZnIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1cHg7XG4gICAgbGVmdDogNHB4O1xuICAgIHotaW5kZXg6IDk5OTk5OTk5OTk5O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHBhdGgge1xuICAgICAgc3Ryb2tlOiB3aGl0ZTtcbiAgICAgIHN0cm9rZS13aWR0aDogMztcbiAgICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbiAgICAgIHN0cm9rZS1saW5lam9pbjogcm91bmQ7XG4gICAgICBzdHJva2UtZGFzaGFycmF5OiAxOTtcbiAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAxOTtcbiAgICAgIHRyYW5zaXRpb246IHN0cm9rZS1kYXNob2Zmc2V0IC4zcyBlYXNlO1xuICAgICAgdHJhbnNpdGlvbi1kZWxheTogLjJzO1xuICAgIH1cbiAgfVxuXG4gIGlucHV0OmNoZWNrZWQge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxuICBpbnB1dDpjaGVja2VkICsgbGFiZWwge1xuICAgICAgYW5pbWF0aW9uOiAkeyhwcm9wcykgPT4gc3BsYXNoKHByb3BzLmNvbG9yKX0gLjZzIGVhc2UgZm9yd2FyZHM7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAkeyhwcm9wcykgPT4gcHJvcHMuY29sb3J9O1xuXG4gICAgICArIHN2ZyBwYXRoIHtcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDBcbiAgICAgIH1cbiAgfVxuXG5gXG5cbmV4cG9ydCBjb25zdCBJbnB1dCA9IHN0eWxlZCgnaW5wdXQnKWBcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luOiAwO1xuICAgICY6Zm9jdXMge1xuICAgICAgb3V0bGluZTogMDtcbiAgICB9XG5gXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9sYWJlbC1oYXMtYXNzb2NpYXRlZC1jb250cm9sICovXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9wcm9wLXR5cGVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtcHJvcHMtbm8tc3ByZWFkaW5nICovXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEVycm9yTWVzc2FnZSB9IGZyb20gJ2Zvcm1paydcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBGYWRlIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuaW1wb3J0IHsgU3R5bGVkU2VsZWN0LCBMYWJlbCwgQ29udGFpbmVyIH0gZnJvbSAnLi9TdHlsZSdcbmltcG9ydCBFcnJvciBmcm9tICcuLi9FcnJvck1lc3NhZ2UvSW5kZXgnXG5cbmNvbnN0IFNlbGVjdCA9ICh7XG4gIHdpZHRoLCBmaWVsZCwgZm9ybSwgcGxhY2Vob2xkZXIsIHNldEZpZWxkVmFsdWUsIHNldEZpZWxkVG91Y2hlZCwgLi4ucHJvcHNcbn0pID0+IHtcbiAgY29uc3QgW29wZW4sIGlzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgbWV0YURhdGEgPSBmb3JtLmdldEZpZWxkTWV0YShmaWVsZC5uYW1lKVxuICBjb25zdCBzaG93RXJyb3IgPSBtZXRhRGF0YS5lcnJvciAmJiBtZXRhRGF0YS50b3VjaGVkXG4gIGNvbnN0IGVudW1zID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5lbnVtcy50b3BpY0NhdGVnb3JpZXMpXG5cbiAgY29uc3Qgb25DaGFuZ2UgPSB1c2VDYWxsYmFjaygoZSwgc2V0RmllbGQpID0+IHtcbiAgICBzZXRGaWVsZChmaWVsZC5uYW1lLCBlLnRhcmdldC52YWx1ZSlcbiAgICBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSlcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuXG4gICAgICA8RmFkZSBpbj17b3Blbn0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPExhYmVsIGh0bWxGb3I9e2ZpZWxkLm5hbWV9PlNlbGVjdCBBIENhdGVnb3J5PC9MYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0ZhZGU+XG5cbiAgICAgIDxTdHlsZWRTZWxlY3RcbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgIHsuLi5maWVsZH1cbiAgICAgICAgaWQ9e2ZpZWxkLm5hbWV9XG4gICAgICAgIHNob3dFcnJvcj17c2hvd0Vycm9yfVxuICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2UoZSwgc2V0RmllbGRWYWx1ZSl9XG4gICAgICAgIG9uRm9jdXM9eygpID0+IGlzT3Blbih0cnVlKX1cbiAgICAgICAgb25CbHVyPXsoKSA9PiBpc09wZW4oZmFsc2UpfVxuICAgICAgPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+U2VsZWN0IEEgQ2F0ZWdvcnk8L29wdGlvbj5cbiAgICAgICAge1xuICAgICAgICBlbnVtcz8ubWFwKCh2YWwpID0+IDxvcHRpb24ga2V5PXt2YWx9IHZhbHVlPXt2YWx9Pnt2YWx9PC9vcHRpb24+KVxuICAgICAgfVxuICAgICAgPC9TdHlsZWRTZWxlY3Q+XG4gICAgICA8RXJyb3JNZXNzYWdlIHdpZHRoPXt3aWR0aH0gbmFtZT17ZmllbGQubmFtZX0gY29tcG9uZW50PXtFcnJvcn0gLz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogYXV0bztcbiAgZm9udC1mYW1pbHk6ICdVYnVudHUnLCBzYW5zLXNlcmlmO1xuICAuZmFkZSB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiA4NSU7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IExhYmVsID0gc3R5bGVkKCdsYWJlbCcpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGNvbG9yOiB2YXIoLS1tLXRyaW0tY29sb3IpO1xuICBmb250LXNpemU6IC41ZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG5gXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRTZWxlY3QgPSBzdHlsZWQoJ3NlbGVjdCcpYFxuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAuNWVtO1xuICBjb2xvcjogYmxhY2s7XG4gIHdpZHRoOiAkeyhwcm9wcykgPT4gcHJvcHMud2lkdGggfHwgJzMwJSd9O1xuICBoZWlnaHQ6IDMuNWVtO1xuICBmb250LXNpemU6IC44ZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogdmFyKC0taW5wdXRMaW5lSGVpZ2h0KTtcbiAgb3V0bGluZTpub25lO1xuICBiYWNrZ3JvdW5kOiAjRTVFNUU1O1xuICBib3JkZXI6ICR7KHByb3BzKSA9PiAocHJvcHMuc2hvd0Vycm9yID8gJzFweCBzb2xpZCB2YXIoLS1tLWRhbmdlci1jb2xvciknIDogJzFweCBzb2xpZCB2YXIoLS1iZyknKX07XG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyB2YXIoLS10cmFuc2l0aW9uRHVyYXRpb24pO1xuXG4gIDo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiB2YXIoLS1tLXRyaW0tY29sb3IpO1xuICB9XG4gIDpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3gtc2hhZG93OiAgNXB4IDVweCA4cHggI2ZmZmZmZixcbiAgICAgICAgICAgICAtNXB4IC01cHggOHB4ICNmZmZmZmY7XG4gIH1cblxuICA6bm90KDpwbGFjZWhvbGRlci1zaG93bikgKyAke0xhYmVsfSxcbiAgOmZvY3VzOm5vdCg6cGxhY2Vob2xkZXItc2hvd24pICsgJHtMYWJlbH0ge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgei1pbmRleDogMTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTpcbiAgICAgIHRyYW5zbGF0ZTNkKDAsIHZhcigtLWxhYmVsVHJhbnNmb3JtZWRQb3NZKSwgMClcbiAgICAgIHNjYWxlKHZhcigtLWxhYmVsU2NhbGVGYWN0b3IpKTtcbiAgICB0cmFuc2l0aW9uOlxuICAgICAgdHJhbnNmb3JtIHZhcigtLWlucHV0VHJhbnNpdGlvbkR1cmF0aW9uKSxcbiAgICAgIHZpc2liaWxpdHkgMG1zLFxuICAgICAgei1pbmRleCAwbXM7XG5cbiAgb3B0aW9uIHtcbiAgICBjb2xvcjogdmFyKC0tbS10cmltLWNvbG9yKTtcbiAgICBmb250LXNpemU6IC44ZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG5gXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgT3ZlcmxheSA9IHN0eWxlZCgnZGl2JylgXG4gIHotaW5kZXg6IDk5OTk5OTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIG9wYWNpdHk6IDAuMTtcbmBcbiIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLXRoaXMtaW4tc2ZjICovXG4vKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9jb250cm9sLWhhcy1hc3NvY2lhdGVkLWxhYmVsICovXG5pbXBvcnQgUmVhY3QsIHtcbiAgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZixcbn0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RRdWlsbCBmcm9tICdyZWFjdC1xdWlsbCdcblxuaW1wb3J0ICdyZWFjdC1xdWlsbC9kaXN0L3F1aWxsLnNub3cuY3NzJ1xuXG5pbXBvcnQgeyBDb250YWluZXIsIEVtb2ppQnV0dG9uLCBFbW9qaUNvbnRhaW5lciB9IGZyb20gJy4vU3R5bGUnXG5pbXBvcnQgeyBPdmVybGF5IH0gZnJvbSAnLi4vT3ZlcmxheS9zdHlsZSdcblxuY29uc3QgUmljaFRleHRFZGl0b3IgPSAoe1xuICBjb250ZW50LCBzZXRDb250ZW50LCBzZXRUb3hpY2l0eVNjb3JlLFxufSkgPT4ge1xuICBjb25zdCBbaXNIaWRkZW4sIHNldElzSGlkZGVuXSA9IHVzZVN0YXRlKHRydWUpXG5cbiAgY29uc3QgbW9kdWxlcyA9IHtcbiAgICB0b29sYmFyOiB7XG4gICAgICBjb250YWluZXI6ICcjdG9vbGJhcicsXG4gICAgfSxcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZU9uQ2hhbmdlID0gdXNlQ2FsbGJhY2soKGN1cnJDb250ZW50LCBkZWx0YSwgc291cmNlLCBlZGl0b3IpID0+IHtcbiAgICBzZXRDb250ZW50KHtcbiAgICAgIHJhd0hUTUw6IGVkaXRvci5nZXRIVE1MKCksXG4gICAgICBjb250ZW50OiBlZGl0b3IuZ2V0Q29udGVudHMoKSxcbiAgICAgIHJhd1RleHQ6IGVkaXRvci5nZXRUZXh0KCksXG4gICAgfSlcbiAgICBpZiAoc2V0VG94aWNpdHlTY29yZSkgc2V0VG94aWNpdHlTY29yZShudWxsKVxuICB9LCBbXSlcblxuICBjb25zdCBwaWNrZXJSZWYgPSB1c2VSZWYobnVsbClcbiAgY29uc3QgcXVpbGxSZWYgPSB1c2VSZWYobnVsbClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwaWNrZXJSZWYpIHtcbiAgICAgIGNvbnN0IGVtb2ppUGlja2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndW5pY29kZS1lbW9qaS1waWNrZXInKVxuICAgICAgZW1vamlQaWNrZXIuYWRkRXZlbnRMaXN0ZW5lcignZW1vamktcGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAocXVpbGxSZWYuY3VycmVudCkge1xuICAgICAgICAgIGNvbnN0IHsgZWRpdG9yIH0gPSBxdWlsbFJlZi5jdXJyZW50XG4gICAgICAgICAgY29uc3QgY3Vyc29yUG9zaXRpb24gPSBlZGl0b3IuZ2V0U2VsZWN0aW9uKCk/LmluZGV4IHx8IGVkaXRvci5nZXRMZW5ndGgoKSAtIDFcbiAgICAgICAgICBlZGl0b3IuaW5zZXJ0VGV4dChjdXJzb3JQb3NpdGlvbiwgYCR7ZXZlbnQuZGV0YWlsLmVtb2ppfWApXG4gICAgICAgICAgZWRpdG9yLnNldFNlbGVjdGlvbihjdXJzb3JQb3NpdGlvbiArIDIpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9LCBbcGlja2VyUmVmLCBxdWlsbFJlZl0pXG5cbiAgY29uc3QgZm9ybWF0cyA9IFsnYm9sZCcsICdpdGFsaWMnLCAndW5kZXJsaW5lJywgJ3N0cmlrZScsICdibG9ja3F1b3RlJywgJ2NsZWFuJ11cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cInRleHQtZWRpdG9yXCI+XG4gICAgICA8T3ZlcmxheSBoaWRkZW49e2lzSGlkZGVufSBvbkNsaWNrPXsoKSA9PiBzZXRJc0hpZGRlbigocHJldikgPT4gIXByZXYpfSAvPlxuICAgICAgPEN1c3RvbVRvb2xiYXIgc2V0SXNIaWRkZW49e3NldElzSGlkZGVufSBwaWNrZXJSZWY9e3BpY2tlclJlZn0gaXNIaWRkZW49e2lzSGlkZGVufSAvPlxuICAgICAgPFJlYWN0UXVpbGxcbiAgICAgICAgcmVmPXtxdWlsbFJlZn1cbiAgICAgICAgdGhlbWU9XCJzbm93XCJcbiAgICAgICAgdmFsdWU9e2NvbnRlbnR9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cbiAgICAgICAgbW9kdWxlcz17bW9kdWxlc31cbiAgICAgICAgZm9ybWF0cz17Zm9ybWF0c31cbiAgICAgICAgcGxhY2Vob2xkZXI9XCJTYXkgc29tZXRoaW5nLi4uXCJcbiAgICAgIC8+XG4gICAgPC9Db250YWluZXI+XG4gIClcbn1cblxuY29uc3QgQ3VzdG9tQnV0dG9uID0gKHsgaXNIaWRkZW4sIHBpY2tlclJlZiwgc2V0SXNIaWRkZW4gfSkgPT4gKFxuICA8PlxuICAgIDxzcGFuXG4gICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc0hpZGRlbigocHJldikgPT4gIXByZXYpfVxuICAgICAgb25LZXlEb3duPXsoKSA9PiBzZXRJc0hpZGRlbigocHJldikgPT4gIXByZXYpfVxuICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICB0YWJJbmRleD17MH1cbiAgICA+XG4gICAgICDwn5mCXG4gICAgPC9zcGFuPlxuICAgIDxFbW9qaUNvbnRhaW5lciBoaWRkZW49e2lzSGlkZGVufT5cbiAgICAgIDx1bmljb2RlLWVtb2ppLXBpY2tlciByZWY9e3BpY2tlclJlZn0gdmVyc2lvbj1cIjE0LjBcIiAvPlxuICAgIDwvRW1vamlDb250YWluZXI+XG4gIDwvPlxuKVxuXG5jb25zdCBDdXN0b21Ub29sYmFyID0gKHsgc2V0SXNIaWRkZW4sIGlzSGlkZGVuLCBwaWNrZXJSZWYgfSkgPT4gKFxuICA8ZGl2IGlkPVwidG9vbGJhclwiIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyB9fT5cbiAgICA8ZGl2PlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwicWwtYm9sZFwiIC8+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJxbC1pdGFsaWNcIiAvPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwicWwtdW5kZXJsaW5lXCIgLz5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cInFsLXN0cmlrZVwiIC8+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJxbC1ibG9ja3F1b3RlXCIgLz5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cInFsLWNsZWFuXCIgLz5cblxuICAgIDwvZGl2PlxuXG4gICAgPEVtb2ppQnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJxbC1pbnNlcnRFbW9qaVwiPlxuICAgICAgPEN1c3RvbUJ1dHRvbiBwaWNrZXJSZWY9e3BpY2tlclJlZn0gaXNIaWRkZW49e2lzSGlkZGVufSBzZXRJc0hpZGRlbj17c2V0SXNIaWRkZW59IC8+XG4gICAgPC9FbW9qaUJ1dHRvbj5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IFJpY2hUZXh0RWRpdG9yXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IC41ZW07XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgbWluLXdpZHRoOiA5MiU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLnFsLXNub3cucWwtdG9vbGJhcjphZnRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAucWwtdG9vbGJhciB7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogLjVlbTtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogLjVlbTtcbiAgfVxuXG4gIC5xbC1jb250YWluZXIge1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IC41ZW07XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IC41ZW07XG4gIH1cblxuICAjdG9vbGJhciB7XG4gICAgYnV0dG9uOmFmdGVyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5cbmBcblxuZXhwb3J0IGNvbnN0IEVtb2ppQnV0dG9uID0gc3R5bGVkKCdidXR0b24nKWBcbiAgcG9zaXRpb246IHJlbGF0aXZlIDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAmOmFmdGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbmBcblxuZXhwb3J0IGNvbnN0IEVtb2ppQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWAgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHotaW5kZXg6IDk5OTk5OTk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC05MCUsIC05MCUpIHNjYWxlKC44KTtcbmBcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtYm9vdHN0cmFwL01vZGFsJ1xuaW1wb3J0IHsgQ29sbGFwc2UsIEZhZGUgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5cbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBGb3JtaWssIEZpZWxkIH0gZnJvbSAnZm9ybWlrJ1xuXG5pbXBvcnQgdXNlQmluZERpc3BhdGNoIGZyb20gJy4uL2hvb2tzL3JlZHV4L3VzZUJpbmREaXNwYXRjaCdcbmltcG9ydCB1c2VIYW5kbGVTdWJtaXQgZnJvbSAnLi9ob29rcy91c2VIYW5kbGVTdWJtaXQnXG5pbXBvcnQgdXNlR2V0TGlua01ldGFEYXRhT25CbHVyIGZyb20gJy4vaG9va3MvdXNlR2V0TGlua01ldGFEYXRhT25CbHVyJ1xuXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi4vQ29tbW9uQ29tcG9uZW50cy9Gb3JtL0lucHV0L0luZGV4J1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9Db21tb25Db21wb25lbnRzL0J1dHRvbi9JbmRleCdcblxuaW1wb3J0IHVpQWN0aW9ucyBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zL3VpJ1xuaW1wb3J0IHRvcGljQWN0aW9ucyBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zL3RvcGljcydcblxuaW1wb3J0IFRoZW1lVG9vbHRpcCBmcm9tICcuLi9Db21tb25Db21wb25lbnRzL1Rvb2x0aXAvSW5kZXgnXG5pbXBvcnQgVXBsb2FkTWVkaWFDb250YWluZXIgZnJvbSAnLi4vVG9waWNGb3JtL2NvbXBvbmVudHMvVXBsb2FkTWVkaWEvSW5kZXgnXG5pbXBvcnQgRGlzcGxheU1lZGlhIGZyb20gJy4uL1RvcGljRm9ybS9jb21wb25lbnRzL0Rpc3BsYXlNZWRpYS9JbmRleCdcblxuaW1wb3J0IHtcbiAgRm9ybUNvbnRhaW5lciwgTGVmdCwgUmlnaHQsIEZsZXhEaXYsIENvbnRhaW5lciwgSW5wdXRzQ29udGFpbmVyLCBBcnJvdywgTGluZSxcbn0gZnJvbSAnLi9TdHlsZSdcbmltcG9ydCB7IERvd25BcnJvd0NpcmNsZVN2ZyB9IGZyb20gJy4uLy4uL3N2Z3Mvc3ZncydcbmltcG9ydCBSaWNoVGV4dEVkaXRvciBmcm9tICcuLi9Db21tb25Db21wb25lbnRzL1JpY2hUZXh0RWRpdG9yL0luZGV4J1xuXG5jb25zdCB1dWlkUmVnRXggPSBuZXcgUmVnRXhwKC9cXGJbMC05YS1mXXs4fVxcYi1bMC05YS1mXXs0fS1bMC05YS1mXXs0fS1bMC05YS1mXXs0fS1cXGJbMC05YS1mXXsxMn1cXGIvZylcblxuY29uc3QgQ3JlYXRlU3ViVG9waWNGb3JtID0gKCkgPT4ge1xuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VMb2NhdGlvbigpXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbaW1nRmlsZSwgc2V0SW1nRmlsZV0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbdmlkZW9GaWxlLCBzZXRWaWRlb0ZpbGVdID0gdXNlU3RhdGUobnVsbClcblxuICBjb25zdCBbcm90YXRlLCBzZXRSb3RhdGVdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgW2NvbnRlbnQsIHNldENvbnRlbnRdID0gdXNlU3RhdGUoJycpXG4gIC8vIGNvbnN0IHZhbGlkYXRvciA9IHVzZUNvbmZpZ0Zvcm1FcnJvcnMoRVJST1JTKVxuICBjb25zdCBbdG9waWNJZF0gPSBwYXRobmFtZS5tYXRjaCh1dWlkUmVnRXgpXG5cbiAgY29uc3QgeyBtZXRhRGF0YSwgZ2V0TGlua01ldGFEYXRhT25CbHVyIH0gPSB1c2VHZXRMaW5rTWV0YURhdGFPbkJsdXIoKVxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSB1c2VIYW5kbGVTdWJtaXQobWV0YURhdGEsIHRvcGljSWQpXG5cbiAgY29uc3QgeyBnZXRUb3BpYywgY2xvc2VNb2RhbCB9ID0gdXNlQmluZERpc3BhdGNoKFxuICAgIHVpQWN0aW9ucywgdG9waWNBY3Rpb25zLFxuICApXG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3RvcigocykgPT4gcy5zZXNzaW9uLmN1cnJlbnRVc2VyKVxuICBjb25zdCB0b3BpYyA9IHVzZVNlbGVjdG9yKChzKSA9PiBzLnRvcGljcy5saXN0KT8uZmluZCgodCkgPT4gdC5pZCA9PT0gdG9waWNJZClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldFRvcGljKHRvcGljSWQsIHVzZXI/LmlkKVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8Rm9ybWlrXG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e3sgdGl0bGU6ICcnIH19XG4gICAgICAgIHZhbGlkYXRlPXsodmFsdWVzKSA9PiB7XG4gICAgICAgICAgY29uc3QgZXJyb3JzID0ge31cbiAgICAgICAgICBpZiAoIXZhbHVlcy50aXRsZSkge1xuICAgICAgICAgICAgZXJyb3JzLnRpdGxlID0gJ1RpdGxlIElzIFJlcXVpcmVkJ1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZXJyb3JzXG4gICAgICAgIH19XG4gICAgICAgIG9uU3VibWl0PXsoKHZhbHVlcywgcGFyYW1zKSA9PiBoYW5kbGVTdWJtaXQodmFsdWVzLCBwYXJhbXMsIGNvbnRlbnQpKX1cbiAgICAgID5cbiAgICAgICAgeyh7IGlzU3VibWl0dGluZywgc2V0RmllbGRWYWx1ZSB9KSA9PiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XG4gICAgICAgICAgICAgIDxNb2RhbC5UaXRsZT5cbiAgICAgICAgICAgICAgICBDcmVhdGUgU3ViIFRvcGljIFJlZ2FyZGluZyBUaGUgVG9waWNcbiAgICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICAgIHtgXCIke3RvcGljPy50aXRsZX1cImB9XG4gICAgICAgICAgICAgIDwvTW9kYWwuVGl0bGU+XG4gICAgICAgICAgICA8L01vZGFsLkhlYWRlcj5cbiAgICAgICAgICAgIDxGb3JtQ29udGFpbmVyPlxuICAgICAgICAgICAgICA8TW9kYWwuQm9keT5cbiAgICAgICAgICAgICAgICA8SW5wdXRzQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgPExlZnQ+XG4gICAgICAgICAgICAgICAgICAgIDxGbGV4RGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxoMj4gVG9waWMgRGVzY3JpcHRpb24gPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICA8VGhlbWVUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwSGVhZGVyPVwiVG9waWMgRGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcFRleHQ9XCJQcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHRoZSB0b3BpYyB5b3Ugd291bGQgbGlrZSB0byBkaXNjdXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXhEaXY+XG4gICAgICAgICAgICAgICAgICAgIDxGaWVsZCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0aXRsZVwiIGNvbXBvbmVudD17SW5wdXR9IHdpZHRoPVwiMTAwJVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgQSBUb3BpYyBUaXRsZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxGaWVsZCB0eXBlPVwidGV4dFwiIG5hbWU9XCJzdW1tYXJ5XCIgY29tcG9uZW50PXtJbnB1dH0gd2lkdGg9XCIxMDAlXCIgcGxhY2Vob2xkZXI9XCJHaXZlIEEgU2hvcnQgT3BpbmlvbiBPciBQb2ludFwiIC8+XG4gICAgICAgICAgICAgICAgICA8L0xlZnQ+XG4gICAgICAgICAgICAgICAgICA8UmlnaHQ+XG4gICAgICAgICAgICAgICAgICAgIDxGbGV4RGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxoMj4gTGluayB0byB3aGF0IHlvdSB3YW50IHRvIGRpc2N1c3MgaGVyZS4uLiA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgIDxUaGVtZVRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBIZWFkZXI9XCJEaXNjdXNzZWQgQ29udGVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwVGV4dD1cIkFkZCBhIGxpbmsgdG8gdGhlIGV4dGVybmFsIGNvbnRlbnQgeW91IHdvdWxkIGxpa2UgdG8gZGlzY3VzcyAoXG4gICAgICAgICAgICAgICAgICAgICAgICBlLmcgYSBZb3VUdWJlIHZpZGVvLCBUd2VldCwgcHVibGljYXRpb24sIG9yIGFueXRoaW5nIGVsc2UpXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXhEaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGU9XCJ1cmxcIiBuYW1lPVwiY29udGVudFVybFwiIHBsYWNlaG9sZGVyPVwiTGluayBUbyBDb250ZW50XCIgY29tcG9uZW50PXtJbnB1dH0gd2lkdGg9XCIxMDAlXCIgb25CbHVyPXtnZXRMaW5rTWV0YURhdGFPbkJsdXJ9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5lIC8+XG4gICAgICAgICAgICAgICAgICAgIDxGbGV4RGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxoMj4gQWRkIHlvdXIgb3duIG1lZGlhIGNvbnRlbnQgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICA8VGhlbWVUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwSGVhZGVyPVwiVXNlciBQcm92aWRlZCBDb250ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBUZXh0PVwiVGhpcyBjb3VsZCBiZSBhbiBpbWFnZSwgZ3JhcGhpYywgb3IgdmlkZW8gcGVydGFpbmluZyB0byB0aGUgdG9waWMgeW91IHdvdWxkIGxpa2UgdG8gZGlzY3Vzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4RGl2PlxuICAgICAgICAgICAgICAgICAgICA8VXBsb2FkTWVkaWFDb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRGaWVsZFZhbHVlPXtzZXRGaWVsZFZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgIGltZ0ZpbGU9e2ltZ0ZpbGV9XG4gICAgICAgICAgICAgICAgICAgICAgdmlkZW9GaWxlPXt2aWRlb0ZpbGV9XG4gICAgICAgICAgICAgICAgICAgICAgc2V0SW1nRmlsZT17c2V0SW1nRmlsZX1cbiAgICAgICAgICAgICAgICAgICAgICBzZXRWaWRlb0ZpbGU9e3NldFZpZGVvRmlsZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvUmlnaHQ+XG4gICAgICAgICAgICAgICAgPC9JbnB1dHNDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPExpbmUgLz5cbiAgICAgICAgICAgICAgICA8RGlzcGxheU1lZGlhXG4gICAgICAgICAgICAgICAgICBpbWdGaWxlPXtpbWdGaWxlfVxuICAgICAgICAgICAgICAgICAgdmlkZW9GaWxlPXt2aWRlb0ZpbGV9XG4gICAgICAgICAgICAgICAgICBtZXRhRGF0YT17bWV0YURhdGF9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8UmljaFRleHRFZGl0b3IgY29udGVudD17Y29udGVudH0gc2V0Q29udGVudD17c2V0Q29udGVudH0gLz5cbiAgICAgICAgICAgICAgICA8QXJyb3dcbiAgICAgICAgICAgICAgICAgIHJvdGF0ZT17cm90YXRlfVxuICAgICAgICAgICAgICAgICAgLy8gaWNvbj17PERvd25BcnJvd0NpcmNsZVN2ZyAvPn1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0T3Blbighb3BlbilcbiAgICAgICAgICAgICAgICAgICAgc2V0Um90YXRlKHJvdGF0ZSArIChvcGVuID8gLTE4MCA6IDE4MCkpXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxEb3duQXJyb3dDaXJjbGVTdmcgLz5cbiAgICAgICAgICAgICAgICA8L0Fycm93PlxuICAgICAgICAgICAgICAgIDxGYWRlIGluPXshb3Blbn0+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICBFbnRlciBTdXBwbGVtZW50YWwgSW5mb3JtYXRpb25cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvRmFkZT5cbiAgICAgICAgICAgICAgICA8SW5wdXRzQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgPENvbGxhcHNlIGluPXtvcGVufT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aGl0ZVNwYWNlOiAnbm93cmFwJywgd2lkdGg6ICcxMDAlJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICA8RmxleERpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj4gRW50ZXIgTGlua3MgVG8gU3VwcGxlbWVudGFsIEV2aWRlbmNlLi4uIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGhlbWVUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBUZXh0PVwiUHJvdmlkZSBsaW5rcyB0byBhZGRpdGlvbmFsIHJlYWRpbmcgb3IgZXZpZGVuY2UgZXRjLi4uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcEhlYWRlcj1cIlN1cHBsZW1lbnRhbCBJbmZvcm1hdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvRmxleERpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZT1cInVybFwiIG5hbWU9XCJFdmlkZW5jZSBMaW5rIDFcIiBjb21wb25lbnQ9e0lucHV0fSB3aWR0aD1cIjEwMCVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCB0eXBlPVwidXJsXCIgbmFtZT1cIkV2aWRlbmNlIExpbmsgMlwiIGNvbXBvbmVudD17SW5wdXR9IHdpZHRoPVwiMTAwJVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGU9XCJ1cmxcIiBuYW1lPVwiRXZpZGVuY2UgTGluayAzXCIgY29tcG9uZW50PXtJbnB1dH0gd2lkdGg9XCIxMDAlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L0NvbGxhcHNlPlxuICAgICAgICAgICAgICAgIDwvSW5wdXRzQ29udGFpbmVyPlxuICAgICAgICAgICAgICA8L01vZGFsLkJvZHk+XG4gICAgICAgICAgICAgIDxNb2RhbC5Gb290ZXI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgZGlzYWJsZWQ9e2lzU3VibWl0dGluZ30gb25DbGljaz17Y2xvc2VNb2RhbH0+XG4gICAgICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17aXNTdWJtaXR0aW5nfT5cbiAgICAgICAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L01vZGFsLkZvb3Rlcj5cbiAgICAgICAgICAgIDwvRm9ybUNvbnRhaW5lcj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvRm9ybWlrPlxuICAgIDwvQ29udGFpbmVyPlxuXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlU3ViVG9waWNGb3JtXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgRm9ybSB9IGZyb20gJ2Zvcm1paydcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZCgnZGl2JylgXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgaGVpZ2h0OiA5MHZoO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xuICBib3gtc2hhZG93OiAgNXB4IDVweCA1cHggLTNweCAjMDAwMDAwO1xuXG4gIGgxIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctYm90dG9tOiAuNWVtO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgfVxuIGBcblxuZXhwb3J0IGNvbnN0IEZsZXhEaXYgPSBzdHlsZWQoJ2RpdicpYCBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuYFxuXG5leHBvcnQgY29uc3QgRm9ybUNvbnRhaW5lciA9IHN0eWxlZChGb3JtKWBcbiAgbWFyZ2luLXRvcDogMWVtO1xuICAgaDIge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIG1hcmdpbjogMCAxZW07XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IElucHV0c0NvbnRhaW5lciA9IHN0eWxlZCgnZGl2JylgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuYFxuXG5leHBvcnQgY29uc3QgTGVmdCA9IHN0eWxlZCgnZGl2JylgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDUwJTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XG5gXG5leHBvcnQgY29uc3QgUmlnaHQgPSBzdHlsZWQoJ2RpdicpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiA1MCU7XG5gXG5cbmV4cG9ydCBjb25zdCBTdXBwbGVtZW50YWxJbmZvcm1hdGlvbiA9IHN0eWxlZCgnc2VjdGlvbicpYFxuXG5gXG5cbmV4cG9ydCBjb25zdCBJbnB1dFdyYXBwZXIgPSBzdHlsZWQoJ2RpdicpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuYFxuXG5leHBvcnQgY29uc3QgQXJyb3cgPSBzdHlsZWQoJ3NwYW4nKWBcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjVzIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zZm9ybTogJHsocHJvcHMpID0+IGByb3RhdGUoJHtwcm9wcy5yb3RhdGV9ZGVnKWB9O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbmBcblxuZXhwb3J0IGNvbnN0IExpbmUgPSBzdHlsZWQoJ2hyJylgIFxuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDJlbSAxLjNlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ4LDQ4LDUwKTtcbiAgaGVpZ2h0OiAuNXB4O1xuICBib3JkZXI6IG5vbmU7XG5gXG4iLCJpbXBvcnQgeyB5b3VUdWJlVXJsVmFsaWRhdG9yLCB0d2l0dGVyVXJsVmFsaWR0b3IgfSBmcm9tICcuLi8uLi8uLi9nZW5lcmljL3JlZ2V4L3VybFZhbGlkYXRvcnMnXG5cbmV4cG9ydCBkZWZhdWx0ICh1cmwpID0+IHtcbiAgY29uc3QgeXRVcmwgPSB1cmwuc2VhcmNoKHlvdVR1YmVVcmxWYWxpZGF0b3IpID09PSAtMSA/IG51bGwgOiAneXRVcmwnXG4gIGNvbnN0IHR3ZWV0VXJsID0gdXJsLnNlYXJjaCh0d2l0dGVyVXJsVmFsaWR0b3IpID09PSAtMSA/IG51bGwgOiAndHdlZXRVcmwnXG4gIHJldHVybiB5dFVybCB8fCB0d2VldFVybFxufVxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IGdldExpbmtNZXRhRGF0YSB9IGZyb20gJy4uLy4uLy4uL2FwaS92MS90b3BpY3MvdG9waWNzX2FwaV91dGlsJ1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IFttZXRhRGF0YSwgc2V0TWV0YURhdGFdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgZ2V0TGlua01ldGFEYXRhT25CbHVyID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcbiAgICBnZXRMaW5rTWV0YURhdGEoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKS50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAgICAgc2V0TWV0YURhdGEoZGF0YSlcbiAgICB9KVxuICB9LCBbXSlcblxuICByZXR1cm4geyBtZXRhRGF0YSwgZ2V0TGlua01ldGFEYXRhT25CbHVyIH1cbn1cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgdG9waWNBY3Rpb25zIGZyb20gJy4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvdG9waWNzL2luZGV4J1xuaW1wb3J0IHN1YnRvcGljQWN0aW9ucyBmcm9tICcuLi8uLi8uLi9yZWR1eC9hY3Rpb25zL3N1YnRvcGljcy9pbmRleCdcblxuaW1wb3J0IHVzZUJpbmREaXNwYXRjaCBmcm9tICcuLi8uLi9ob29rcy9yZWR1eC91c2VCaW5kRGlzcGF0Y2gnXG5cbmltcG9ydCBjaGVja0xpbmtUeXBlIGZyb20gJy4vY2hlY2tMaW5rVHlwZSdcblxuZXhwb3J0IGRlZmF1bHQgKG1ldGFEYXRhLCB0b3BpY0lkKSA9PiB7XG4gIGNvbnN0IHsgY3JlYXRlU3ViVG9waWMsIHVwbG9hZFRvcGljTWVkaWEgfSA9IHVzZUJpbmREaXNwYXRjaCh0b3BpY0FjdGlvbnMsIHN1YnRvcGljQWN0aW9ucylcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKChzKSA9PiBzLnNlc3Npb24uY3VycmVudFVzZXIpXG5cbiAgcmV0dXJuIHVzZUNhbGxiYWNrKCh2YWx1ZXMsIHsgc2V0U3VibWl0dGluZywgcmVzZXRGb3JtIH0sIGNvbnRlbnQpID0+IHtcbiAgICBjb25zdCBlTGlua3MgPSBPYmplY3QuZW50cmllcyh2YWx1ZXMpLm1hcCgoW2ssIHZdKSA9PiAoay5pbmNsdWRlcygnRXZpZGVuY2UnKSA/IHYgOiBudWxsKSkuZmlsdGVyKEJvb2xlYW4pXG4gICAgY29uc3QgbGlua1R5cGUgPSBjaGVja0xpbmtUeXBlKHZhbHVlcy5jb250ZW50VXJsKVxuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAuLi52YWx1ZXMsXG4gICAgICBkZXNjcmlwdGlvbjogY29udGVudCxcbiAgICAgIGNyZWF0ZWRCeTogdXNlci51c2VybmFtZSxcbiAgICAgIHVzZXJJZDogdXNlci5pZCxcbiAgICAgIGV2aWRlbmNlTGlua3M6IGVMaW5rcyxcbiAgICAgIFtsaW5rVHlwZV06IHZhbHVlcy5jb250ZW50VXJsLFxuICAgICAgdGh1bWJJbWdVcmw6IG1ldGFEYXRhLm9nSW1hZ2U/LnVybCxcbiAgICAgIHRvcGljSWQsXG4gICAgICB0d2VldFVybDogbnVsbCxcbiAgICAgIGltYWdlVXJsOiBudWxsLFxuICAgICAgdm9kVXJsOiBudWxsLFxuICAgIH1cbiAgICBpZiAodmFsdWVzLmZpbGUgaW5zdGFuY2VvZiBGaWxlKSB7XG4gICAgICBjb25zdCBbZmlsZVR5cGUsIGZpbGVGb3JtYXRdID0gdmFsdWVzLmZpbGUudHlwZS5zcGxpdCgnLycpXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ltYWdlJywgdmFsdWVzLmZpbGUpXG4gICAgICB1cGxvYWRUb3BpY01lZGlhKGZvcm1EYXRhLCBmaWxlVHlwZSwgZmlsZUZvcm1hdCwgZGF0YSlcbiAgICB9IGVsc2Uge1xuICAgICAgY3JlYXRlU3ViVG9waWMoZGF0YSlcbiAgICB9XG4gICAgc2V0U3VibWl0dGluZyhmYWxzZSlcbiAgICByZXNldEZvcm0oe30pXG4gIH0sIFttZXRhRGF0YSwgdG9waWNJZF0pXG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Nb2RhbCdcbmltcG9ydCB7IEZvcm1paywgRmllbGQgfSBmcm9tICdmb3JtaWsnXG5pbXBvcnQgeyBDb2xsYXBzZSwgRmFkZSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcblxuaW1wb3J0IHVzZUJpbmREaXNwYXRjaCBmcm9tICcuLi9ob29rcy9yZWR1eC91c2VCaW5kRGlzcGF0Y2gnXG5pbXBvcnQgdXNlSGFuZGxlU3VibWl0IGZyb20gJy4vaG9va3MvdXNlSGFuZGxlU3VibWl0J1xuaW1wb3J0IHVzZUNvbmZpZ0Zvcm1FcnJvcnMgZnJvbSAnLi4vdXRpbC9mb3JtX2hlbHBlcnMvaG9va3MvdXNlQ29uZmlnRm9ybUVycm9ycydcbmltcG9ydCB1aUFjdGlvbnMgZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucy91aSdcblxuaW1wb3J0IHsgRG93bkFycm93Q2lyY2xlU3ZnIH0gZnJvbSAnLi4vLi4vc3Zncy9zdmdzJ1xuaW1wb3J0IElucHV0IGZyb20gJy4uL0NvbW1vbkNvbXBvbmVudHMvRm9ybS9JbnB1dDMvSW5kZXgnXG5pbXBvcnQgU2VsZWN0IGZyb20gJy4uL0NvbW1vbkNvbXBvbmVudHMvRm9ybS9TZWxlY3QvSW5kZXgnXG5pbXBvcnQgUmljaFRleHRFZGl0b3IgZnJvbSAnLi4vQ29tbW9uQ29tcG9uZW50cy9SaWNoVGV4dEVkaXRvci9JbmRleCdcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vQ29tbW9uQ29tcG9uZW50cy9CdXR0b24vSW5kZXgnXG5pbXBvcnQgVXBsb2FkTWVkaWFDb250YWluZXIgZnJvbSAnLi9jb21wb25lbnRzL1VwbG9hZE1lZGlhL0luZGV4J1xuaW1wb3J0IERpc3BsYXlNZWRpYSBmcm9tICcuL2NvbXBvbmVudHMvRGlzcGxheU1lZGlhL0luZGV4J1xuaW1wb3J0IExpbmtUeXBlSWNvbiBmcm9tICcuL2NvbXBvbmVudHMvTGlua1R5cGVJY29uL0luZGV4J1xuXG5pbXBvcnQgVGhlbWVUb29sdGlwIGZyb20gJy4uL0NvbW1vbkNvbXBvbmVudHMvVG9vbHRpcC9JbmRleCdcblxuaW1wb3J0IHtcbiAgRm9ybUNvbnRhaW5lciwgSW5wdXRzQ29udGFpbmVyLCBDb250YWluZXIsIExlZnQsIFJpZ2h0LCBTZWN0aW9uRGVzY3JpcHRpb24sIE1vYmlsZU9ubHlMaW5lLFxuICBMaW5lLCBBcnJvdywgRmxleERpdixcbn0gZnJvbSAnLi9TdHlsZSdcblxuaW1wb3J0IHsgSU5JVF9UT1BJQ19GT1JNX1ZBTFVFUyB9IGZyb20gJy4uL3V0aWwvZm9ybV9oZWxwZXJzL2luaXRfZm9ybV92YWx1ZXMnXG5pbXBvcnQgdXNlR2V0TGlua01ldGFEYXRhT25CbHVyIGZyb20gJy4vaG9va3MvdXNlR2V0TGlua01ldGFEYXRhT25CbHVyJ1xuXG5jb25zdCBWQUxJREFUSU9OUyA9IHtcbiAgdGl0bGU6IHsgUkVRVUlSRUQ6IHRydWUgfSxcbiAgc3VtbWFyeTogeyBSRVFVSVJFRDogdHJ1ZSwgTUlOX0xFTkdUSDogNSB9LFxuICBjYXRlZ29yeTogeyBSRVFVSVJFRDogdHJ1ZSB9LFxufVxuXG5jb25zdCBDcmVhdGVUb3BpY0Zvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbaW1nRmlsZSwgc2V0SW1nRmlsZV0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbdmlkZW9GaWxlLCBzZXRWaWRlb0ZpbGVdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW21ldGFEYXRhLCBzZXRNZXRhRGF0YV0gPSB1c2VTdGF0ZShudWxsKVxuXG4gIGNvbnN0IFtyb3RhdGUsIHNldFJvdGF0ZV0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBbcmljaFRleHRFZGl0b3JDb250ZW50LCBzZXRSaWNoVGV4dEVkaXRvckNvbnRlbnRdID0gdXNlU3RhdGUoe1xuICAgIHJhd0hUTUw6ICcnLFxuICAgIGNvbnRlbnQ6ICcnLFxuICB9KVxuXG4gIGNvbnN0IHZhbGlkYXRvciA9IHVzZUNvbmZpZ0Zvcm1FcnJvcnMoVkFMSURBVElPTlMpXG4gIGNvbnN0IHsgY29udGVudFVybCwgZ2V0Q29udGVudFVybE9uQmx1ciB9ID0gdXNlR2V0TGlua01ldGFEYXRhT25CbHVyKClcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gdXNlSGFuZGxlU3VibWl0KG1ldGFEYXRhKVxuICBjb25zdCB7IGNsb3NlTW9kYWwgfSA9IHVzZUJpbmREaXNwYXRjaCh1aUFjdGlvbnMpXG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPEZvcm1pa1xuICAgICAgICBpbml0aWFsVmFsdWVzPXtJTklUX1RPUElDX0ZPUk1fVkFMVUVTfVxuICAgICAgICB2YWxpZGF0ZT17dmFsaWRhdG9yfVxuICAgICAgICBvblN1Ym1pdD17KCh2YWx1ZXMsIHBhcmFtcykgPT4gaGFuZGxlU3VibWl0KHZhbHVlcywgcGFyYW1zLCByaWNoVGV4dEVkaXRvckNvbnRlbnQucmF3SFRNTCkpfVxuICAgICAgPlxuICAgICAgICB7KHsgaXNTdWJtaXR0aW5nLCBzZXRGaWVsZFZhbHVlLCBzZXRGaWVsZFRvdWNoZWQgfSkgPT4gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxuICAgICAgICAgICAgICA8TW9kYWwuVGl0bGU+Q3JlYXRlIFRvcGljPC9Nb2RhbC5UaXRsZT5cbiAgICAgICAgICAgIDwvTW9kYWwuSGVhZGVyPlxuXG4gICAgICAgICAgICA8Rm9ybUNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPE1vZGFsLkJvZHk+XG4gICAgICAgICAgICAgICAgPElucHV0c0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgIDxMZWZ0PlxuICAgICAgICAgICAgICAgICAgICA8RmxleERpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8U2VjdGlvbkRlc2NyaXB0aW9uPiBUb3BpYyBEZXNjcmlwdGlvbiA8L1NlY3Rpb25EZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8VGhlbWVUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwSGVhZGVyPVwiVG9waWMgRGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcFRleHQ9XCJQcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHRoZSB0b3BpYyB5b3Ugd291bGQgbGlrZSB0byBkaXNjdXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXhEaXY+XG4gICAgICAgICAgICAgICAgICAgIDxGaWVsZCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0aXRsZVwiIGxhYmVsPVwiVGl0bGVcIiBjb21wb25lbnQ9e0lucHV0fSB3aWR0aD1cIjg1JVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgQSBUb3BpYyBUaXRsZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxGaWVsZCB0eXBlPVwidGV4dFwiIG5hbWU9XCJzdW1tYXJ5XCIgbGFiZWw9XCJTdW1tYXJ5XCIgY29tcG9uZW50PXtJbnB1dH0gd2lkdGg9XCI4NSVcIiBwbGFjZWhvbGRlcj1cIkdpdmUgQSBTaG9ydCBPcGluaW9uIE9yIFBvaW50XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImNhdGVnb3J5XCIgbGFiZWw9XCJDYXRlZ29yeVwiIGNvbXBvbmVudD17U2VsZWN0fSBzZXRGaWVsZFZhbHVlPXtzZXRGaWVsZFZhbHVlfSBzZXRGaWVsZFRvdWNoZWQ9e3NldEZpZWxkVG91Y2hlZH0gd2lkdGg9XCI4NSVcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9MZWZ0PlxuICAgICAgICAgICAgICAgICAgPE1vYmlsZU9ubHlMaW5lIC8+XG4gICAgICAgICAgICAgICAgICA8UmlnaHQ+XG4gICAgICAgICAgICAgICAgICAgIDxGbGV4RGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxTZWN0aW9uRGVzY3JpcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICBMaW5rIHRvIHdoYXQgeW91IHdhbnQgdG8gZGlzY3VzcyBoZXJlLi4uXG4gICAgICAgICAgICAgICAgICAgICAgPC9TZWN0aW9uRGVzY3JpcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgPFRoZW1lVG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcEhlYWRlcj1cIkRpc2N1c3NlZCBDb250ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBUZXh0PVwiQWRkIGEgbGluayB0byB0aGUgZXh0ZXJuYWwgY29udGVudCB5b3Ugd291bGQgbGlrZSB0byBkaXNjdXNzIChcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuZyBhIFlvdVR1YmUgdmlkZW8sIFR3ZWV0LCBwdWJsaWNhdGlvbiwgb3IgYW55dGhpbmcgZWxzZSlcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRmxleERpdj5cbiAgICAgICAgICAgICAgICAgICAgPEZsZXhEaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidXJsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb250ZW50VXJsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTGluayBUbyBDb250ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTGluayBUbyBDb250ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17SW5wdXR9XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjg1JVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e2dldENvbnRlbnRVcmxPbkJsdXJ9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICB7IGNvbnRlbnRVcmwgJiYgPExpbmtUeXBlSWNvbiBtZXRhRGF0YT17bWV0YURhdGF9IGNvbnRlbnRVcmw9e2NvbnRlbnRVcmx9IC8+IH1cbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4RGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxMaW5lIC8+XG4gICAgICAgICAgICAgICAgICAgIDxGbGV4RGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxTZWN0aW9uRGVzY3JpcHRpb24+IEFkZCB5b3VyIG93biBtZWRpYSBjb250ZW50IDwvU2VjdGlvbkRlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxUaGVtZVRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBIZWFkZXI9XCJVc2VyIFByb3ZpZGVkIENvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcFRleHQ9XCJUaGlzIGNvdWxkIGJlIGFuIGltYWdlLCBncmFwaGljLCBvciB2aWRlbyBwZXJ0YWluaW5nIHRvIHRoZSB0b3BpYyB5b3Ugd291bGQgbGlrZSB0byBkaXNjdXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXhEaXY+XG4gICAgICAgICAgICAgICAgICAgIDxVcGxvYWRNZWRpYUNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgIHNldEZpZWxkVmFsdWU9e3NldEZpZWxkVmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgaW1nRmlsZT17aW1nRmlsZX1cbiAgICAgICAgICAgICAgICAgICAgICB2aWRlb0ZpbGU9e3ZpZGVvRmlsZX1cbiAgICAgICAgICAgICAgICAgICAgICBzZXRJbWdGaWxlPXtzZXRJbWdGaWxlfVxuICAgICAgICAgICAgICAgICAgICAgIHNldFZpZGVvRmlsZT17c2V0VmlkZW9GaWxlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9SaWdodD5cbiAgICAgICAgICAgICAgICA8L0lucHV0c0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8TGluZSAvPlxuICAgICAgICAgICAgICAgIDxEaXNwbGF5TWVkaWFcbiAgICAgICAgICAgICAgICAgIGltZ0ZpbGU9e2ltZ0ZpbGV9XG4gICAgICAgICAgICAgICAgICB2aWRlb0ZpbGU9e3ZpZGVvRmlsZX1cbiAgICAgICAgICAgICAgICAgIGNvbnRlbnRVcmw9e2NvbnRlbnRVcmx9XG4gICAgICAgICAgICAgICAgICBzZXRNZXRhRGF0YT17c2V0TWV0YURhdGF9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8UmljaFRleHRFZGl0b3JcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3JpY2hUZXh0RWRpdG9yQ29udGVudC5jb250ZW50fVxuICAgICAgICAgICAgICAgICAgc2V0Q29udGVudD17c2V0UmljaFRleHRFZGl0b3JDb250ZW50fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEFycm93XG4gICAgICAgICAgICAgICAgICByb3RhdGU9e3JvdGF0ZX1cbiAgICAgICAgICAgICAgICAgIC8vIGljb249ezxEb3duQXJyb3dDaXJjbGVTdmcgLz59XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldE9wZW4oIW9wZW4pXG4gICAgICAgICAgICAgICAgICAgIHNldFJvdGF0ZShyb3RhdGUgKyAob3BlbiA/IC0xODAgOiAxODApKVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8RG93bkFycm93Q2lyY2xlU3ZnIC8+XG4gICAgICAgICAgICAgICAgPC9BcnJvdz5cbiAgICAgICAgICAgICAgICA8RmFkZSBpbj17IW9wZW59PlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgRW50ZXIgU3VwcGxlbWVudGFsIEluZm9ybWF0aW9uXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0ZhZGU+XG4gICAgICAgICAgICAgICAgPElucHV0c0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgIDxDb2xsYXBzZSBpbj17b3Blbn0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2hpdGVTcGFjZTogJ25vd3JhcCcsIHdpZHRoOiAnMTAwJScgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgPEZsZXhEaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+IEVudGVyIExpbmtzIFRvIFN1cHBsZW1lbnRhbCBFdmlkZW5jZS4uLiA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRoZW1lVG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwVGV4dD1cIlByb3ZpZGUgbGlua3MgdG8gYWRkaXRpb25hbCByZWFkaW5nIG9yIGV2aWRlbmNlIGV0Yy4uLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBIZWFkZXI9XCJTdXBwbGVtZW50YWwgSW5mb3JtYXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhEaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGU9XCJ1cmxcIiBuYW1lPVwiRXZpZGVuY2UgTGluayAxXCIgY29tcG9uZW50PXtJbnB1dH0gd2lkdGg9XCI3MCVcIiBsYWJlbD1cIkxpbmsgVG8gRXZpZGVuY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCB0eXBlPVwidXJsXCIgbmFtZT1cIkV2aWRlbmNlIExpbmsgMlwiIGNvbXBvbmVudD17SW5wdXR9IHdpZHRoPVwiNzAlXCIgbGFiZWw9XCJMaW5rIFRvIEV2aWRlbmNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZT1cInVybFwiIG5hbWU9XCJFdmlkZW5jZSBMaW5rIDNcIiBjb21wb25lbnQ9e0lucHV0fSB3aWR0aD1cIjcwJVwiIGxhYmVsPVwiTGluayBUbyBFdmlkZW5jZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9Db2xsYXBzZT5cbiAgICAgICAgICAgICAgICA8L0lucHV0c0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPC9Nb2RhbC5Cb2R5PlxuICAgICAgICAgICAgICA8TW9kYWwuRm9vdGVyPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9IG9uQ2xpY2s9e2Nsb3NlTW9kYWx9PlxuICAgICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgZGlzYWJsZWQ9e2lzU3VibWl0dGluZ30+XG4gICAgICAgICAgICAgICAgICBTdWJtaXRcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9Nb2RhbC5Gb290ZXI+XG4gICAgICAgICAgICA8L0Zvcm1Db250YWluZXI+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L0Zvcm1paz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVUb3BpY0Zvcm1cbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBGb3JtIH0gZnJvbSAnZm9ybWlrJ1xuLy8gaW1wb3J0IHsgRmlBcnJvd0Rvd25DaXJjbGUgfSBmcm9tICdyZWFjdC1pY29ucy9maSdcblxuZXhwb3J0IGNvbnN0IEZsZXhEaXYgPSBzdHlsZWQoJ2RpdicpYCBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuYFxuXG5leHBvcnQgY29uc3QgRm9ybUNvbnRhaW5lciA9IHN0eWxlZChGb3JtKWBcbiAgLyogZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7ICovXG4gIG1hcmdpbi10b3A6IDFlbTtcbiAgIGgyIHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgfVxuIFxuYFxuXG5leHBvcnQgY29uc3QgQXJyb3cgPSBzdHlsZWQoJ3NwYW4nKWBcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjVzIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zZm9ybTogJHsocHJvcHMpID0+IGByb3RhdGUoJHtwcm9wcy5yb3RhdGV9ZGVnKWB9O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbmBcblxuZXhwb3J0IGNvbnN0IElucHV0c0NvbnRhaW5lciA9IHN0eWxlZCgnZGl2JylgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IExlZnQgPSBzdHlsZWQoJ2RpdicpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiA1MCU7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICB9XG5gXG5leHBvcnQgY29uc3QgUmlnaHQgPSBzdHlsZWQoJ2RpdicpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiA1MCU7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgU3VwcGxlbWVudGFsSW5mb3JtYXRpb24gPSBzdHlsZWQoJ3NlY3Rpb24nKWBcblxuYFxuXG5leHBvcnQgY29uc3QgSW5wdXRXcmFwcGVyID0gc3R5bGVkKCdkaXYnKWBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbmBcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZCgnZGl2JylgXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgaGVpZ2h0OiA5MHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIG1heC13aWR0aDogMTAwMHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcbiAgLyogYm94LXNoYWRvdzogdmFyKC0tbS1wcmltYXJ5LWJveC1zaGFkb3cpOyAqL1xuICBib3gtc2hhZG93OiAgNXB4IDVweCA1cHggLTNweCAjMDAwMDAwO1xuXG4gIGgxIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctYm90dG9tOiAuNWVtO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgfVxuICBcbiAgLyogQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjAwcHgpIHtcbiAgICAgd2lkdGg6IDgwdnc7XG4gIH1cblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgIHdpZHRoOiA5MHZ3O1xuICB9XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICB3aWR0aDogMTAwdnc7XG4gIH0gKi9cbiBgXG5cbmV4cG9ydCBjb25zdCBMaW5lID0gc3R5bGVkKCdocicpYCBcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAyZW0gMS4zZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0OCw0OCw1MCk7XG4gIGhlaWdodDogLjVweDtcbiAgYm9yZGVyOiBub25lO1xuYFxuXG5leHBvcnQgY29uc3QgVXBsb2FkTWVkaWFDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpYCBcbiAgbWFyZ2luLWxlZnQ6IDEuM2VtO1xuICBwYWRkaW5nOiAuNWVtO1xuICBib3JkZXItcmFkaXVzOiAuNWVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3gtc2hhZG93OiAgNXB4IDVweCA1cHggLTNweCAjQUFBQUFBO1xuICBiYWNrZ3JvdW5kOiAjRTVFNUU1O1xuXG47XG5cbmBcblxuZXhwb3J0IGNvbnN0IFNlY3Rpb25EZXNjcmlwdGlvbiA9IHN0eWxlZCgnaDInKWBcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAvKiBkaXNwbGF5OiBub25lOyAqL1xuICB9XG5cbmBcblxuZXhwb3J0IGNvbnN0IE1vYmlsZU9ubHlMaW5lID0gc3R5bGVkKCdocicpYCBcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAyZW0gMS4zZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0OCw0OCw1MCk7XG4gIGhlaWdodDogLjVweDtcbiAgYm9yZGVyOiBub25lO1xuICBkaXNwbGF5OiBub25lO1xuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuYFxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQge1xuICBPR0Zhdmljb24sXG59IGZyb20gJy4vU3R5bGUvaW5kZXgnXG5pbXBvcnQgSXNMb2FkaW5nSE9DIGZyb20gJy4uLy4uLy4uLy4uL2hvY3MvSXNMb2FkaW5nSE9DJ1xuXG5jb25zdCBMaW5rVHlwZUljb24gPSAoe1xuICBjb250ZW50VXJsLCBtZXRhRGF0YSwgc2V0SXNMb2FkaW5nLFxufSkgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldElzTG9hZGluZyh0cnVlKVxuICB9LCBbY29udGVudFVybF0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobWV0YURhdGEpIHNldElzTG9hZGluZyhmYWxzZSlcbiAgfSwgW21ldGFEYXRhXSlcblxuICByZXR1cm4gKFxuICAgIDxPR0Zhdmljb24gc3JjPXttZXRhRGF0YT8uZmF2aWNvbn0gYWx0PVwiXCIgLz5cbiAgKVxufVxuZXhwb3J0IGRlZmF1bHQgSXNMb2FkaW5nSE9DKExpbmtUeXBlSWNvbiwgJzMwcHgnLCB0cnVlKVxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IE9HRmF2aWNvbiA9IHN0eWxlZCgnaW1nJylgIFxuICBib3JkZXItcmFkaXVzOiAxdnc7XG4gIHdpZHRoOiAxLjV2dztcblxuYCIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1wcm9wcy1uby1zcHJlYWRpbmcgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExhYmVsLCBVcGxvYWRJbnB1dCB9IGZyb20gJy4vU3R5bGUnXG5cbmNvbnN0IFVwbG9hZEltYWdlSW5wdXQgPSAoe1xuICBmaWVsZCwgb25DaGFuZ2UsIGljb24sIGZpbGVUeXBlLCBkaXNhYmxlZCxcbn0pID0+IChcbiAgPExhYmVsPlxuICAgIHtpY29ufVxuICAgIDxVcGxvYWRJbnB1dCBkYXRhLWZpbGV0eXBlPXtmaWxlVHlwZX0gdHlwZT1cImZpbGVcIiB7Li4uZmllbGR9IGlkPXtmaWVsZC5uYW1lfSBvbkNoYW5nZT17b25DaGFuZ2V9IGRpc2FibGVkPXtkaXNhYmxlZH0gLz5cbiAgPC9MYWJlbD5cblxuKVxuXG5leHBvcnQgZGVmYXVsdCBVcGxvYWRJbWFnZUlucHV0XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgTGFiZWwgPSBzdHlsZWQoJ2xhYmVsJylgIFxuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMCU7XG4gIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBVcGxvYWRJbnB1dCA9IHN0eWxlZCgnaW5wdXQnKWAgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gIGxlZnQ6IC05OTk5OXJlbTtcbmBcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgRmllbGQgfSBmcm9tICdmb3JtaWsnXG5cbmltcG9ydCBVcGxvYWRGaWxlSW5wdXQgZnJvbSAnLi4vVXBsb2FkSW1hZ2VJbnB1dC9JbmRleCdcbmltcG9ydCB7IFZpZGVvU3ZnLCBJbWFnZVN2ZyB9IGZyb20gJy4uLy4uLy4uLy4uL3N2Z3Mvc3ZncydcblxuaW1wb3J0IHVzZU9uRmlsZUNoYW5nZUhhbmRsZXIgZnJvbSAnLi4vLi4vaG9va3MvdXNlT25GaWxlQ2hhbmdlSGFuZGxlcidcblxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi9TdHlsZS9pbmRleCdcblxuY29uc3QgVXBsb2FkTWVkaWFDb250YWluZXIgPSAoe1xuICBzZXRGaWVsZFZhbHVlLCBpbWdGaWxlLCB2aWRlb0ZpbGUsIHNldEltZ0ZpbGUsIHNldFZpZGVvRmlsZSxcbn0pID0+IHtcbiAgY29uc3Qgb25GaWxlQ2hhbmdlID0gdXNlT25GaWxlQ2hhbmdlSGFuZGxlcigpXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxGaWVsZFxuICAgICAgICBmaWxlVHlwZT1cImZpbGVcIlxuICAgICAgICBuYW1lPVwidG9waWNJbWFnZVwiXG4gICAgICAgIGRpc2FibGVkPXtCb29sZWFuKHZpZGVvRmlsZSl9XG4gICAgICAgIGZpbGU9e2ltZ0ZpbGV9XG4gICAgICAgIGNvbXBvbmVudD17VXBsb2FkRmlsZUlucHV0fVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uRmlsZUNoYW5nZShlLCBzZXRGaWVsZFZhbHVlLCBzZXRJbWdGaWxlKX1cbiAgICAgICAgaWNvbj17PEltYWdlU3ZnIC8+fVxuICAgICAgLz5cbiAgICAgIDxGaWVsZFxuICAgICAgICBmaWxlVHlwZT1cImZpbGVcIlxuICAgICAgICBuYW1lPVwidG9waWNWaWRlb1wiXG4gICAgICAgIGRpc2FibGVkPXtCb29sZWFuKGltZ0ZpbGUpfVxuICAgICAgICBmaWxlPXt2aWRlb0ZpbGV9XG4gICAgICAgIGNvbXBvbmVudD17VXBsb2FkRmlsZUlucHV0fVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uRmlsZUNoYW5nZShlLCBzZXRGaWVsZFZhbHVlLCBzZXRWaWRlb0ZpbGUpfVxuICAgICAgICBpY29uPXs8VmlkZW9TdmcgLz59XG4gICAgICAvPlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVwbG9hZE1lZGlhQ29udGFpbmVyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWAgXG4gIG1hcmdpbi1sZWZ0OiAxLjNlbTtcbiAgcGFkZGluZzogLjVlbTtcbiAgYm9yZGVyLXJhZGl1czogLjVlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYm94LXNoYWRvdzogIDVweCA1cHggNXB4IC0zcHggI0FBQUFBQTtcbiAgYmFja2dyb3VuZDogI0U1RTVFNTtcblxuYFxuIiwiaW1wb3J0IHsgeW91VHViZVVybFZhbGlkYXRvciwgdHdpdHRlclVybFZhbGlkdG9yIH0gZnJvbSAnLi4vLi4vLi4vZ2VuZXJpYy9yZWdleC91cmxWYWxpZGF0b3JzJ1xuXG5leHBvcnQgZGVmYXVsdCAodXJsKSA9PiB7XG4gIGNvbnN0IHl0VXJsID0gdXJsLnNlYXJjaCh5b3VUdWJlVXJsVmFsaWRhdG9yKSA9PT0gLTEgPyBudWxsIDogJ3l0VXJsJ1xuICBjb25zdCB0d2VldFVybCA9IHVybC5zZWFyY2godHdpdHRlclVybFZhbGlkdG9yKSA9PT0gLTEgPyBudWxsIDogJ3R3ZWV0VXJsJ1xuICByZXR1cm4geXRVcmwgfHwgdHdlZXRVcmxcbn1cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IFtjb250ZW50VXJsLCBzZXRDb250ZW50VXJsXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IGdldENvbnRlbnRVcmxPbkJsdXIgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xuICAgIHNldENvbnRlbnRVcmwoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKVxuICB9LCBbXSlcblxuICByZXR1cm4geyBjb250ZW50VXJsLCBnZXRDb250ZW50VXJsT25CbHVyIH1cbn1cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSdcblxuaW1wb3J0IHRvcGljQWN0aW9ucyBmcm9tICcuLi8uLi8uLi9yZWR1eC9hY3Rpb25zL3RvcGljcy9pbmRleCdcbmltcG9ydCB1c2VCaW5kRGlzcGF0Y2ggZnJvbSAnLi4vLi4vaG9va3MvcmVkdXgvdXNlQmluZERpc3BhdGNoJ1xuXG5pbXBvcnQgY2hlY2tMaW5rVHlwZSBmcm9tICcuL2NoZWNrTGlua1R5cGUnXG5cbi8vIGNvbnN0IHJlc29sdmVBZnRlcjE1MDBtcyA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDE1MDApKVxuXG5leHBvcnQgZGVmYXVsdCAobWV0YURhdGEpID0+IHtcbiAgY29uc3QgeyBjcmVhdGVUb3BpYywgdXBsb2FkVG9waWNNZWRpYSB9ID0gdXNlQmluZERpc3BhdGNoKHRvcGljQWN0aW9ucylcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKChzKSA9PiBzLnNlc3Npb24uY3VycmVudFVzZXIpXG5cbiAgcmV0dXJuIHVzZUNhbGxiYWNrKCh2YWx1ZXMsIHsgc2V0U3VibWl0dGluZywgcmVzZXRGb3JtIH0sIGNvbnRlbnQpID0+IHtcbiAgICBjb25zdCBlTGlua3MgPSBPYmplY3QuZW50cmllcyh2YWx1ZXMpLm1hcCgoW2ssIHZdKSA9PiAoay5pbmNsdWRlcygnRXZpZGVuY2UnKSA/IHYgOiBudWxsKSkuZmlsdGVyKEJvb2xlYW4pXG4gICAgY29uc3QgbGlua1R5cGUgPSBjaGVja0xpbmtUeXBlKHZhbHVlcy5jb250ZW50VXJsKVxuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAuLi52YWx1ZXMsXG4gICAgICBkZXNjcmlwdGlvbjogY29udGVudCxcbiAgICAgIGNyZWF0ZWRCeTogdXNlci51c2VybmFtZSxcbiAgICAgIHVzZXJJZDogdXNlci5pZCxcbiAgICAgIGV2aWRlbmNlTGlua3M6IGVMaW5rcyxcbiAgICAgIFtsaW5rVHlwZV06IHZhbHVlcy5jb250ZW50VXJsLFxuICAgICAgdGh1bWJJbWdVcmw6IG1ldGFEYXRhLm9nSW1hZ2U/LnVybCxcbiAgICB9XG4gICAgaWYgKHZhbHVlcy5maWxlIGluc3RhbmNlb2YgRmlsZSkge1xuICAgICAgY29uc3QgW2ZpbGVUeXBlLCBmaWxlRm9ybWF0XSA9IHZhbHVlcy5maWxlLnR5cGUuc3BsaXQoJy8nKVxuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKVxuICAgICAgZm9ybURhdGEuYXBwZW5kKCdpbWFnZScsIHZhbHVlcy5maWxlKVxuICAgICAgdXBsb2FkVG9waWNNZWRpYShmb3JtRGF0YSwgZmlsZVR5cGUsIGZpbGVGb3JtYXQsIGRhdGEpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRvYXN0LnByb21pc2UoXG4gICAgICAgIGNyZWF0ZVRvcGljKGRhdGEpLFxuICAgICAgICB7XG4gICAgICAgICAgcGVuZGluZzogJ0NyZWF0aW5nIFRvcGljLi4uJyxcbiAgICAgICAgICBzdWNjZXNzOiAnVG9waWMgU3VjY2Vzc2Z1bGx5IENyZWF0ZWQhJyxcbiAgICAgICAgICBlcnJvcjoge1xuICAgICAgICAgICAgcmVuZGVyKHsgZGF0YTogZXJyb3JEYXRhIH0pIHtcbiAgICAgICAgICAgICAgY29uc3QgeyByZXNwb25zZSB9ID0gZXJyb3JEYXRhXG4gICAgICAgICAgICAgIGNvbnN0IHsgZGF0YTogcmVzcG9uc2VEYXRhIH0gPSByZXNwb25zZVxuICAgICAgICAgICAgICByZXR1cm4gYCR7cmVzcG9uc2VEYXRhLm1zZ30g8J+kryBgXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICApXG4gICAgfVxuICAgIHNldFN1Ym1pdHRpbmcoZmFsc2UpXG4gICAgcmVzZXRGb3JtKHt9KVxuICB9LCBbbWV0YURhdGFdKVxufVxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gdXNlQ2FsbGJhY2soKGUsIHNldEZpZWxkVmFsdWUsIHNldFN0YXRlVmFsdWUpID0+IHtcbiAgc2V0RmllbGRWYWx1ZShlLnRhcmdldC5kYXRhc2V0LmZpbGV0eXBlLCBlLmN1cnJlbnRUYXJnZXQuZmlsZXNbMF0pXG4gIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgY29uc3QgY3VyckZpbGUgPSBlLnRhcmdldC5maWxlc1swXVxuICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xuICAgIHNldFN0YXRlVmFsdWUocmVhZGVyLnJlc3VsdClcbiAgfVxuICByZWFkZXIucmVhZEFzRGF0YVVSTChjdXJyRmlsZSlcbn0sIFtdKVxuIl0sIm5hbWVzIjpbInQiLCJ2IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZXRUaW1lb3V0IiwiYmluZCIsInlvdVR1YmVVcmxWYWxpZGF0b3IiLCJSZWdFeHAiLCJ0d2l0dGVyVXJsVmFsaWR0b3IiLCJSZWFjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwidXNlTG9jYXRpb24iLCJNb2RhbCIsIkZvcm1payIsIkJ1dHRvbiIsIlVzZXJJbmZvSGVhZGVyIiwiQW5pbWF0ZWRDaGVja21hcmsiLCJSaWNoVGV4dEVkaXRvciIsInVzZVNldElubmVySHRtbCIsInVzZUdldFN0YXRlRWZmZWN0IiwidXNlSGFuZGxlU3VibWl0IiwiZ2V0VGltZVNpbmNlIiwiY2hlY2tUb3hpY2l0eSIsIkZvcm1Db250YWluZXIiLCJJbnB1dFdyYXBwZXIiLCJDb250YWluZXIiLCJEZXNjcmlwdGlvbiIsIlRveGljaXR5Q29udHJvbHMiLCJ1dWlkUmVnRXgiLCJDcmVhdGVDb21tZW50Rm9ybSIsIm1vZGFsUHJvcHMiLCJkZXNjUmVmIiwicmF3SFRNTCIsImNvbnRlbnQiLCJyYXdUZXh0IiwicmljaFRleHRFZGl0b3JEYXRhIiwic2V0UmljaFRleHRFZGl0b3JEYXRhIiwidG94aWNpdHlTY29yZSIsInNldFRveGljaXR5U2NvcmUiLCJwYXRobmFtZSIsImNvbnRlbnRJZCIsIm1hdGNoIiwic3VidG9waWNJZCIsImNvbnNvbGUiLCJsb2ciLCJjb21wU3RhdGUiLCJoYW5kbGVTdWJtaXQiLCJodG1sQ29udGVudCIsInBvc2l0aXZlIiwibmVnYXRpdmUiLCJuZXV0cmFsIiwiZXJyb3JzIiwibGVuZ3RoIiwiaXNTdWJtaXR0aW5nIiwiY3JlYXRlZEJ5SWNvblNyYyIsImNyZWF0ZWRCeSIsInRpbWUiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsInRoZW4iLCJyZXMiLCJkYXRhIiwiU0VWRVJFX1RPWElDSVRZIiwidG9GaXhlZCIsInN0eWxlZCIsIkZvcm0iLCJ1c2VNZW1vIiwidXNlU2VsZWN0b3IiLCJmaW5kQ29tbWVudENvbnRlbnQiLCJjb21tZW50IiwiaWQiLCJ2aXNpdGVkIiwiU2V0IiwicSIsImN1cnJOb2RlIiwic2hpZnQiLCJhZGQiLCJjaGlsZHJlbiIsImZvckVhY2giLCJjaGlsZCIsImhhcyIsInB1c2giLCJ0b3BpY0lkIiwidXNlciIsInMiLCJzZXNzaW9uIiwiY3VycmVudFVzZXIiLCJ0b3BpYyIsInRvcGljcyIsImxpc3QiLCJmaW5kIiwiY29tbWVudHMiLCJjIiwicm9vdFBhcmVudENvbW1lbnRJZCIsImNvbW1lbnRJZCIsInRyaWJ1bmFsQ29tbWVudCIsInRyaWJ1bmFsQ29tbWVudHMiLCJjcmVhdGVkQXQiLCJjb21tZW50Q29udGVudCIsInJlcGx5VHlwZSIsImRlc2NyaXB0aW9uIiwidXNlcm5hbWUiLCJ0eXBlIiwidXNlQ2FsbGJhY2siLCJ0b2FzdCIsInVzZUJpbmREaXNwYXRjaCIsImNvbW1lbnRBY3Rpb25zIiwidHJpYnVuYWxDb21tZW50QWN0aW9ucyIsImRlbGF5IiwidXNlRGV0ZWN0Q3VycmVudFBhZ2UiLCJpc1RyaWJ1bmFsQ29tbWVudCIsImlzT25UcmlidW5hbFBhZ2UiLCJ0cmlidW5hbENvbW1lbnRVbmRlclJldmlld0lkIiwiaXNQYXJlbnRUcmlidW5hbENvbW1lbnRVbmRlclJldmlldyIsInBhcmVudElkIiwicm9vdElkIiwiY3JlYXRlQ29tbWVudCIsImNyZWF0ZVRyaWJ1bmFsQ29tbWVudCIsInZhbHVlcyIsInNldFN1Ym1pdHRpbmciLCJyZXNldEZvcm0iLCJwcm9taXNlIiwiYWxsIiwicGVuZGluZyIsInN1Y2Nlc3MiLCJyZW5kZXIiLCJpY29uIiwiZXJyb3IiLCJ0b3hpY2l0eVN0YXR1cyIsIm1lbWVGbGFnIiwiSW5wdXQiLCJjb2xvciIsInRleHQiLCJCb29sZWFuIiwibWFyZ2luTGVmdCIsIndpZHRoIiwiaGVpZ2h0Iiwia2V5ZnJhbWVzIiwic3BsYXNoIiwicHJpbWFyeSIsInByb3BzIiwiRXJyb3JNZXNzYWdlIiwiRmFkZSIsIlN0eWxlZFNlbGVjdCIsIkxhYmVsIiwiRXJyb3IiLCJTZWxlY3QiLCJmaWVsZCIsImZvcm0iLCJwbGFjZWhvbGRlciIsInNldEZpZWxkVmFsdWUiLCJzZXRGaWVsZFRvdWNoZWQiLCJvcGVuIiwiaXNPcGVuIiwidmFsdWUiLCJzZXRWYWx1ZSIsIm1ldGFEYXRhIiwiZ2V0RmllbGRNZXRhIiwibmFtZSIsInNob3dFcnJvciIsInRvdWNoZWQiLCJlbnVtcyIsInN0YXRlIiwidG9waWNDYXRlZ29yaWVzIiwib25DaGFuZ2UiLCJlIiwic2V0RmllbGQiLCJ0YXJnZXQiLCJtYXAiLCJ2YWwiLCJPdmVybGF5IiwidXNlRWZmZWN0IiwiUmVhY3RRdWlsbCIsIkVtb2ppQnV0dG9uIiwiRW1vamlDb250YWluZXIiLCJzZXRDb250ZW50IiwiaXNIaWRkZW4iLCJzZXRJc0hpZGRlbiIsIm1vZHVsZXMiLCJ0b29sYmFyIiwiY29udGFpbmVyIiwiaGFuZGxlT25DaGFuZ2UiLCJjdXJyQ29udGVudCIsImRlbHRhIiwic291cmNlIiwiZWRpdG9yIiwiZ2V0SFRNTCIsImdldENvbnRlbnRzIiwiZ2V0VGV4dCIsInBpY2tlclJlZiIsInF1aWxsUmVmIiwiZW1vamlQaWNrZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJjdXJyZW50IiwiY3Vyc29yUG9zaXRpb24iLCJnZXRTZWxlY3Rpb24iLCJpbmRleCIsImdldExlbmd0aCIsImluc2VydFRleHQiLCJkZXRhaWwiLCJlbW9qaSIsInNldFNlbGVjdGlvbiIsImZvcm1hdHMiLCJwcmV2IiwiQ3VzdG9tQnV0dG9uIiwiQ3VzdG9tVG9vbGJhciIsImp1c3RpZnlDb250ZW50IiwiZGl2IiwiQ29sbGFwc2UiLCJGaWVsZCIsInVzZUdldExpbmtNZXRhRGF0YU9uQmx1ciIsInVpQWN0aW9ucyIsInRvcGljQWN0aW9ucyIsIlRoZW1lVG9vbHRpcCIsIlVwbG9hZE1lZGlhQ29udGFpbmVyIiwiRGlzcGxheU1lZGlhIiwiTGVmdCIsIlJpZ2h0IiwiRmxleERpdiIsIklucHV0c0NvbnRhaW5lciIsIkFycm93IiwiTGluZSIsIkRvd25BcnJvd0NpcmNsZVN2ZyIsIkNyZWF0ZVN1YlRvcGljRm9ybSIsInNldE9wZW4iLCJpbWdGaWxlIiwic2V0SW1nRmlsZSIsInZpZGVvRmlsZSIsInNldFZpZGVvRmlsZSIsInJvdGF0ZSIsInNldFJvdGF0ZSIsImdldExpbmtNZXRhRGF0YU9uQmx1ciIsImdldFRvcGljIiwiY2xvc2VNb2RhbCIsInRpdGxlIiwicGFyYW1zIiwid2hpdGVTcGFjZSIsIlN1cHBsZW1lbnRhbEluZm9ybWF0aW9uIiwidXJsIiwieXRVcmwiLCJzZWFyY2giLCJ0d2VldFVybCIsImdldExpbmtNZXRhRGF0YSIsInNldE1ldGFEYXRhIiwiY3VycmVudFRhcmdldCIsInN1YnRvcGljQWN0aW9ucyIsImNoZWNrTGlua1R5cGUiLCJjcmVhdGVTdWJUb3BpYyIsInVwbG9hZFRvcGljTWVkaWEiLCJlTGlua3MiLCJPYmplY3QiLCJlbnRyaWVzIiwiayIsImluY2x1ZGVzIiwiZmlsdGVyIiwibGlua1R5cGUiLCJjb250ZW50VXJsIiwidXNlcklkIiwiZXZpZGVuY2VMaW5rcyIsIm9nSW1hZ2UiLCJmaWxlIiwiRmlsZSIsInNwbGl0IiwiZmlsZVR5cGUiLCJmaWxlRm9ybWF0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInVzZUNvbmZpZ0Zvcm1FcnJvcnMiLCJMaW5rVHlwZUljb24iLCJTZWN0aW9uRGVzY3JpcHRpb24iLCJNb2JpbGVPbmx5TGluZSIsIklOSVRfVE9QSUNfRk9STV9WQUxVRVMiLCJWQUxJREFUSU9OUyIsIlJFUVVJUkVEIiwic3VtbWFyeSIsIk1JTl9MRU5HVEgiLCJjYXRlZ29yeSIsIkNyZWF0ZVRvcGljRm9ybSIsInJpY2hUZXh0RWRpdG9yQ29udGVudCIsInNldFJpY2hUZXh0RWRpdG9yQ29udGVudCIsInZhbGlkYXRvciIsImdldENvbnRlbnRVcmxPbkJsdXIiLCJPR0Zhdmljb24iLCJJc0xvYWRpbmdIT0MiLCJzZXRJc0xvYWRpbmciLCJmYXZpY29uIiwiVXBsb2FkSW5wdXQiLCJVcGxvYWRJbWFnZUlucHV0IiwiZGlzYWJsZWQiLCJVcGxvYWRGaWxlSW5wdXQiLCJWaWRlb1N2ZyIsIkltYWdlU3ZnIiwidXNlT25GaWxlQ2hhbmdlSGFuZGxlciIsIm9uRmlsZUNoYW5nZSIsInNldENvbnRlbnRVcmwiLCJjcmVhdGVUb3BpYyIsImVycm9yRGF0YSIsInJlc3BvbnNlIiwicmVzcG9uc2VEYXRhIiwibXNnIiwic2V0U3RhdGVWYWx1ZSIsImRhdGFzZXQiLCJmaWxldHlwZSIsImZpbGVzIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsImN1cnJGaWxlIiwib25sb2FkZW5kIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCJdLCJzb3VyY2VSb290IjoiIn0=