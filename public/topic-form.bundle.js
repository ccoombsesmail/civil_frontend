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
  var compState = (0,_hooks_useGetStateEffect__WEBPACK_IMPORTED_MODULE_8__["default"])(contentId, subtopicId, modalProps);
  var handleSubmit = (0,_hooks_useHandleSubmit__WEBPACK_IMPORTED_MODULE_9__["default"])(compState, richTextEditorData.rawHTML, richTextEditorData.rawText, modalProps, subtopicId || contentId);
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









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (compState, content, rawText, modalProps, contentId) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MUosYUFBYSxDQUFDZSxDQUFDLENBQUNFLE1BQUYsQ0FBUzBJLE9BQVQsQ0FBaUJDLFFBQWxCLEVBQTRCN0ksQ0FBQyxDQUFDa0YsYUFBRixDQUFnQjRELEtBQWhCLENBQXNCLENBQXRCLENBQTVCLENBQWI7SUFDQSxJQUFNQyxNQUFNLEdBQUcsSUFBSUMsVUFBSixFQUFmO0lBQ0EsSUFBTUMsUUFBUSxHQUFHakosQ0FBQyxDQUFDRSxNQUFGLENBQVM0SSxLQUFULENBQWUsQ0FBZixDQUFqQjs7SUFDQUMsTUFBTSxDQUFDRyxTQUFQLEdBQW1CLFlBQU07TUFDdkJQLGFBQWEsQ0FBQ0ksTUFBTSxDQUFDSSxNQUFSLENBQWI7SUFDRCxDQUZEOztJQUdBSixNQUFNLENBQUNLLGFBQVAsQ0FBcUJILFFBQXJCO0VBQ0QsQ0FSK0IsRUFRN0IsRUFSNkIsQ0FBakI7QUFBQSxDQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvZ2VuZXJpYy9kZWxheS5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9nZW5lcmljL3JlZ2V4L3VybFZhbGlkYXRvcnMuanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvQ29tbWVudEZvcm0vSW5kZXguanN4Iiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL0NvbW1lbnRGb3JtL1N0eWxlL2luZGV4LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL0NvbW1lbnRGb3JtL2hvb2tzL3VzZUdldFN0YXRlRWZmZWN0LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL0NvbW1lbnRGb3JtL2hvb2tzL3VzZUhhbmRsZVN1Ym1pdC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9Db21tb25Db21wb25lbnRzL0FuaW1hdGVkQ2hlY2ttYXJrL0luZGV4LmpzeCIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9Db21tb25Db21wb25lbnRzL0FuaW1hdGVkQ2hlY2ttYXJrL1N0eWxlL2luZGV4LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL0NvbW1vbkNvbXBvbmVudHMvRm9ybS9TZWxlY3QvSW5kZXguanN4Iiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL0NvbW1vbkNvbXBvbmVudHMvRm9ybS9TZWxlY3QvU3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvQ29tbW9uQ29tcG9uZW50cy9PdmVybGF5L3N0eWxlLmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL0NvbW1vbkNvbXBvbmVudHMvUmljaFRleHRFZGl0b3IvSW5kZXguanN4Iiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL0NvbW1vbkNvbXBvbmVudHMvUmljaFRleHRFZGl0b3IvU3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvU3ViVG9waWNGb3JtL0luZGV4LmpzeCIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9TdWJUb3BpY0Zvcm0vU3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvU3ViVG9waWNGb3JtL2hvb2tzL2NoZWNrTGlua1R5cGUuanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvU3ViVG9waWNGb3JtL2hvb2tzL3VzZUdldExpbmtNZXRhRGF0YU9uQmx1ci5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9TdWJUb3BpY0Zvcm0vaG9va3MvdXNlSGFuZGxlU3VibWl0LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL1RvcGljRm9ybS9JbmRleC5qc3giLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvVG9waWNGb3JtL1N0eWxlL2luZGV4LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL1RvcGljRm9ybS9jb21wb25lbnRzL0xpbmtUeXBlSWNvbi9JbmRleC5qc3giLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvVG9waWNGb3JtL2NvbXBvbmVudHMvTGlua1R5cGVJY29uL1N0eWxlL2luZGV4LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL1RvcGljRm9ybS9jb21wb25lbnRzL1VwbG9hZEltYWdlSW5wdXQvSW5kZXguanN4Iiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL1RvcGljRm9ybS9jb21wb25lbnRzL1VwbG9hZEltYWdlSW5wdXQvU3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvVG9waWNGb3JtL2NvbXBvbmVudHMvVXBsb2FkTWVkaWEvSW5kZXguanN4Iiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL1RvcGljRm9ybS9jb21wb25lbnRzL1VwbG9hZE1lZGlhL1N0eWxlL2luZGV4LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL1RvcGljRm9ybS9ob29rcy9jaGVja0xpbmtUeXBlLmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL1RvcGljRm9ybS9ob29rcy91c2VHZXRMaW5rTWV0YURhdGFPbkJsdXIuanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvVG9waWNGb3JtL2hvb2tzL3VzZUhhbmRsZVN1Ym1pdC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9Ub3BpY0Zvcm0vaG9va3MvdXNlT25GaWxlQ2hhbmdlSGFuZGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAodCwgdikgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICBpZiAodiA9PT0gdHJ1ZSkgcmVqZWN0KClcbiAgc2V0VGltZW91dChyZXNvbHZlLmJpbmQobnVsbCwgdiksIHQpXG59KVxuIiwiZXhwb3J0IGNvbnN0IHlvdVR1YmVVcmxWYWxpZGF0b3IgPSBuZXcgUmVnRXhwKC9eKCg/Omh0dHBzPzopP1xcL1xcLyk/KCg/Ond3d3xtKVxcLik/KCg/OnlvdXR1YmVcXC5jb218eW91dHUuYmUpKShcXC8oPzpbXFx3XFwtXStcXD92PXxlbWJlZFxcL3x2XFwvKT8pKFtcXHdcXC1dKykoXFxTKyk/JC9nbSlcbmV4cG9ydCBjb25zdCB0d2l0dGVyVXJsVmFsaWR0b3IgPSBuZXcgUmVnRXhwKC9odHRwKD86cyk/OlxcL1xcLyg/Ond3dyk/dHdpdHRlclxcLmNvbVxcLyhbYS16QS1aMC05X10rKS9nbSlcbiIsIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtYm9vdHN0cmFwL01vZGFsJ1xuaW1wb3J0IHsgRm9ybWlrIH0gZnJvbSAnZm9ybWlrJ1xuXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL0NvbW1vbkNvbXBvbmVudHMvQnV0dG9uL0luZGV4J1xuaW1wb3J0IFVzZXJJbmZvSGVhZGVyIGZyb20gJy4uL0NvbW1vbkNvbXBvbmVudHMvVXNlckluZm9IZWFkZXIvSW5kZXgnXG5pbXBvcnQgQW5pbWF0ZWRDaGVja21hcmsgZnJvbSAnLi4vQ29tbW9uQ29tcG9uZW50cy9BbmltYXRlZENoZWNrbWFyay9JbmRleCdcbmltcG9ydCBSaWNoVGV4dEVkaXRvciBmcm9tICcuLi9Db21tb25Db21wb25lbnRzL1JpY2hUZXh0RWRpdG9yL0luZGV4J1xuXG5pbXBvcnQgdXNlU2V0SW5uZXJIdG1sIGZyb20gJy4uL2hvb2tzL3VzZVNldElubmVySHRtbCdcbmltcG9ydCB1c2VHZXRTdGF0ZUVmZmVjdCBmcm9tICcuL2hvb2tzL3VzZUdldFN0YXRlRWZmZWN0J1xuaW1wb3J0IHVzZUhhbmRsZVN1Ym1pdCBmcm9tICcuL2hvb2tzL3VzZUhhbmRsZVN1Ym1pdCdcblxuaW1wb3J0IHsgZ2V0VGltZVNpbmNlIH0gZnJvbSAnLi4vLi4vZ2VuZXJpYy9zdHJpbmcvZGF0ZUZvcm1hdHRlcidcbmltcG9ydCB7IGNoZWNrVG94aWNpdHkgfSBmcm9tICcuLi8uLi9hcGkvdjEvY29tbWVudHMvY29tbWVudHNfYXBpX3V0aWwnXG5cbmltcG9ydCB7XG4gIEZvcm1Db250YWluZXIsIElucHV0V3JhcHBlciwgQ29udGFpbmVyLCBEZXNjcmlwdGlvbiwgVG94aWNpdHlDb250cm9scyxcbn0gZnJvbSAnLi9TdHlsZSdcblxuY29uc3QgdXVpZFJlZ0V4ID0gbmV3IFJlZ0V4cCgvXFxiWzAtOWEtZl17OH1cXGItWzAtOWEtZl17NH0tWzAtOWEtZl17NH0tWzAtOWEtZl17NH0tXFxiWzAtOWEtZl17MTJ9XFxiL2cpXG5cbmNvbnN0IENyZWF0ZUNvbW1lbnRGb3JtID0gKHsgbW9kYWxQcm9wcyB9KSA9PiB7XG4gIGNvbnN0IGRlc2NSZWYgPSB1c2VSZWYobnVsbClcbiAgY29uc3QgW3JpY2hUZXh0RWRpdG9yRGF0YSwgc2V0UmljaFRleHRFZGl0b3JEYXRhXSA9IHVzZVN0YXRlKHtcbiAgICByYXdIVE1MOiAnJyxcbiAgICBjb250ZW50OiAnJyxcbiAgICByYXdUZXh0OiAnJyxcbiAgfSlcbiAgY29uc3QgW3RveGljaXR5U2NvcmUsIHNldFRveGljaXR5U2NvcmVdID0gdXNlU3RhdGUobnVsbClcblxuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VMb2NhdGlvbigpXG4gIGNvbnN0IGNvbnRlbnRJZCA9IHBhdGhuYW1lLm1hdGNoKHV1aWRSZWdFeClbMF1cbiAgY29uc3Qgc3VidG9waWNJZCA9IHBhdGhuYW1lLm1hdGNoKHV1aWRSZWdFeClbMV1cblxuICBjb25zdCBjb21wU3RhdGUgPSB1c2VHZXRTdGF0ZUVmZmVjdChjb250ZW50SWQsIHN1YnRvcGljSWQsIG1vZGFsUHJvcHMpXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IHVzZUhhbmRsZVN1Ym1pdChjb21wU3RhdGUsIHJpY2hUZXh0RWRpdG9yRGF0YS5yYXdIVE1MLCByaWNoVGV4dEVkaXRvckRhdGEucmF3VGV4dCwgbW9kYWxQcm9wcywgc3VidG9waWNJZCB8fCBjb250ZW50SWQpXG4gIHVzZVNldElubmVySHRtbChkZXNjUmVmLCBjb21wU3RhdGUuaHRtbENvbnRlbnQpXG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPEZvcm1pa1xuICAgICAgICBpbml0aWFsVmFsdWVzPXt7XG4gICAgICAgICAgY29udGVudDogJycsXG4gICAgICAgICAgcG9zaXRpdmU6ICcnLFxuICAgICAgICAgIG5lZ2F0aXZlOiAnJyxcbiAgICAgICAgICBuZXV0cmFsOiAnJyxcbiAgICAgICAgfX1cbiAgICAgICAgdmFsaWRhdGU9eygpID0+IHtcbiAgICAgICAgICBjb25zdCBlcnJvcnMgPSB7fVxuICAgICAgICAgIGlmIChyaWNoVGV4dEVkaXRvckRhdGEuY29udGVudC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGVycm9ycy5jb250ZW50ID0gJ1dyaXRlIFNvbWV0aGluZydcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGVycm9yc1xuICAgICAgICB9fVxuICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxuICAgICAgPlxuICAgICAgICB7KHsgaXNTdWJtaXR0aW5nIH0pID0+IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cbiAgICAgICAgICAgICAgPE1vZGFsLlRpdGxlPldyaXRlIFlvdXIgUmVwbHk8L01vZGFsLlRpdGxlPlxuICAgICAgICAgICAgPC9Nb2RhbC5IZWFkZXI+XG4gICAgICAgICAgICA8Rm9ybUNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPE1vZGFsLkJvZHk+XG4gICAgICAgICAgICAgICAgPFVzZXJJbmZvSGVhZGVyXG4gICAgICAgICAgICAgICAgICBpY29uU3JjPXtjb21wU3RhdGUuY3JlYXRlZEJ5SWNvblNyY31cbiAgICAgICAgICAgICAgICAgIHVzZXJuYW1lPXtjb21wU3RhdGUuY3JlYXRlZEJ5fVxuICAgICAgICAgICAgICAgICAgdGltZT17Z2V0VGltZVNpbmNlKGNvbXBTdGF0ZS50aW1lKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxEZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIHJlZj17ZGVzY1JlZn0gLz5cbiAgICAgICAgICAgICAgICA8L0Rlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICAgIDxJbnB1dFdyYXBwZXI+XG4gICAgICAgICAgICAgICAgICA8UmljaFRleHRFZGl0b3JcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD17cmljaFRleHRFZGl0b3JEYXRhLmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgICAgIHNldENvbnRlbnQ9e3NldFJpY2hUZXh0RWRpdG9yRGF0YX1cbiAgICAgICAgICAgICAgICAgICAgc2V0VG94aWNpdHlTY29yZT17c2V0VG94aWNpdHlTY29yZX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9JbnB1dFdyYXBwZXI+XG4gICAgICAgICAgICAgIDwvTW9kYWwuQm9keT5cbiAgICAgICAgICAgICAgPE1vZGFsLkZvb3Rlcj5cbiAgICAgICAgICAgICAgICA8VG94aWNpdHlDb250cm9scz5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNoZWNrVG94aWNpdHkoeyBjb250ZW50OiByaWNoVGV4dEVkaXRvckRhdGEucmF3VGV4dCB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VG94aWNpdHlTY29yZShyZXMuZGF0YS5TRVZFUkVfVE9YSUNJVFkudG9GaXhlZCgyKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIENoZWNrIFRveGljaXR5IFNjb3JlXG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPEFuaW1hdGVkQ2hlY2ttYXJrIHRveGljaXR5U2NvcmU9e3RveGljaXR5U2NvcmV9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cD57IHRveGljaXR5U2NvcmUgJiYgYFlvdXIgdG94aWNpdHkgc2NvcmUgaXMgJHt0b3hpY2l0eVNjb3JlfWB9PC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9Ub3hpY2l0eUNvbnRyb2xzPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9PlxuICAgICAgICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvTW9kYWwuRm9vdGVyPlxuICAgICAgICAgICAgPC9Gb3JtQ29udGFpbmVyPlxuXG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L0Zvcm1paz5cbiAgICA8L0NvbnRhaW5lcj5cblxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENyZWF0ZUNvbW1lbnRGb3JtXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgRm9ybSB9IGZyb20gJ2Zvcm1paydcblxuZXhwb3J0IGNvbnN0IEZvcm1Db250YWluZXIgPSBzdHlsZWQoRm9ybSlgXG4gIG1hcmdpbi10b3A6IDA7XG4gIGJvcmRlci1yYWRpdXM6IC41ZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuYFxuXG5leHBvcnQgY29uc3QgRGVzY3JpcHRpb24gPSBzdHlsZWQoJ3AnKWAgXG4gIHdpZHRoOiA5MCU7XG4gIHBhZGRpbmc6IC41ZW0gMDtcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xuICBmb250LXNpemU6IC44NWVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogYmxhY2s7XG5gXG5cbmV4cG9ydCBjb25zdCBJbnB1dFdyYXBwZXIgPSBzdHlsZWQoJ2RpdicpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBzZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgd2lkdGg6IDMwdnc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICAgIHBhZGRpbmc6IC4yZW0gLjVlbTtcbiAgICBiYWNrZ3JvdW5kOiAjZTBlNWVjO1xuICAgIGJvcmRlci1yYWRpdXM6IC40ZW07XG4gICAgYm94LXNoYWRvdzpcbiAgIC03cHggLTdweCAyMHB4IDBweCAjZmZmOSxcbiAgIC00cHggLTRweCA1cHggMHB4ICNmZmY5LFxuICAgN3B4IDdweCAyMHB4IDBweCAjMDAwMixcbiAgIDRweCA0cHggNXB4IDBweCAjMDAwMSxcbiAgIGluc2V0IDBweCAwcHggMHB4IDBweCAjZmZmOSxcbiAgIGluc2V0IDBweCAwcHggMHB4IDBweCAjMDAwMSxcbiAgIGluc2V0IDBweCAwcHggMHB4IDBweCAjZmZmOSxcbiAgIGluc2V0IDBweCAwcHggMHB4IDBweCAjMDAwMTtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoMSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLWJvdHRvbTogLjVlbTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gIH1cbiBgXG5cbmV4cG9ydCBjb25zdCBUb3hpY2l0eUNvbnRyb2xzID0gc3R5bGVkKCdkaXYnKWBcbiAgZmxleC1ncm93OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICA+IGRpdiB7XG4gICAgbWFyZ2luLWxlZnQ6IDF2dztcbiAgfVxuXG4gIHAge1xuICAgIG1hcmdpbjogMCAxZW07XG4gICAgY29sb3I6ICM5NzljYjA7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC4xdnc7ICBcbiAgfVxuXG5gXG4iLCJpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5jb25zdCBmaW5kQ29tbWVudENvbnRlbnQgPSAoY29tbWVudCwgaWQpID0+IHtcbiAgY29uc3QgdmlzaXRlZCA9IG5ldyBTZXQoKVxuICBjb25zdCBxID0gW2NvbW1lbnRdXG4gIHdoaWxlIChxLmxlbmd0aCAhPT0gMCkge1xuICAgIGNvbnN0IGN1cnJOb2RlID0gcS5zaGlmdCgpXG4gICAgdmlzaXRlZC5hZGQoY3Vyck5vZGUuZGF0YS5pZClcbiAgICBpZiAoY3Vyck5vZGUuZGF0YS5pZCA9PT0gaWQpIHJldHVybiBjdXJyTm9kZS5kYXRhLmNvbnRlbnRcbiAgICBjdXJyTm9kZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgaWYgKCF2aXNpdGVkLmhhcyhjaGlsZC5kYXRhLmlkKSkgcS5wdXNoKGNoaWxkKVxuICAgIH0pXG4gIH1cbiAgcmV0dXJuICcnXG59XG5cbmV4cG9ydCBkZWZhdWx0ICh0b3BpY0lkLCBzdWJ0b3BpY0lkLCBtb2RhbFByb3BzKSA9PiB7XG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3RvcigocykgPT4gcy5zZXNzaW9uLmN1cnJlbnRVc2VyKVxuICBjb25zdCB0b3BpYyA9IHVzZVNlbGVjdG9yKChzKSA9PiBzLnRvcGljcy5saXN0KT8uZmluZCgodCkgPT4gdC5pZCA9PT0gdG9waWNJZClcbiAgY29uc3QgY29tbWVudCA9IHVzZVNlbGVjdG9yKChzKSA9PiBzLmNvbW1lbnRzLmxpc3QpPy5maW5kKFxuICAgIChjKSA9PiBjLmRhdGE/LmlkID09PSBtb2RhbFByb3BzPy5yb290UGFyZW50Q29tbWVudElkIHx8IG1vZGFsUHJvcHM/LmNvbW1lbnRJZCxcbiAgKVxuICBjb25zdCB0cmlidW5hbENvbW1lbnQgPSB1c2VTZWxlY3RvcigocykgPT4gcy50cmlidW5hbENvbW1lbnRzLmxpc3QpPy5maW5kKFxuICAgIChjKSA9PiBjLmRhdGE/LmlkID09PSBtb2RhbFByb3BzPy5yb290UGFyZW50Q29tbWVudElkLFxuICApXG5cbiAgY29uc3QgeyBjcmVhdGVkQnksIGNyZWF0ZWRCeUljb25TcmMsIGNyZWF0ZWRBdCB9ID0gY29tbWVudD8uZGF0YSB8fCB0cmlidW5hbENvbW1lbnQ/LmRhdGEgfHwge31cbiAgcmV0dXJuIHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IGNvbW1lbnRDb250ZW50ID0gbW9kYWxQcm9wcz8ucmVwbHlUeXBlICE9PSAnUkVQTFlfRlJPTV9UT1BJQydcbiAgICAgID8gZmluZENvbW1lbnRDb250ZW50KGNvbW1lbnQgfHwgdHJpYnVuYWxDb21tZW50LCBtb2RhbFByb3BzPy5jb21tZW50SWQpIDogdG9waWM/LmRlc2NyaXB0aW9uXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1YnRvcGljSWQsXG4gICAgICBjcmVhdGVkQnlJY29uU3JjOiBjcmVhdGVkQnlJY29uU3JjIHx8IHRvcGljPy5jcmVhdGVkQnlJY29uU3JjLFxuICAgICAgdXNlcm5hbWU6IHVzZXI/LnVzZXJuYW1lLFxuICAgICAgY3JlYXRlZEJ5OiBjcmVhdGVkQnkgfHwgdG9waWM/LmNyZWF0ZWRCeSB8fCB0cmlidW5hbENvbW1lbnQ/LmNyZWF0ZWRCeSxcbiAgICAgIHRpbWU6IGNyZWF0ZWRBdCB8fCB0b3BpYz8uY3JlYXRlZEF0LFxuICAgICAgaHRtbENvbnRlbnQ6IGNvbW1lbnRDb250ZW50LFxuICAgICAgcm9vdFBhcmVudENvbW1lbnRJZDogbW9kYWxQcm9wcz8ucm9vdFBhcmVudENvbW1lbnRJZCB8fCBudWxsLFxuICAgICAgdHlwZTogbW9kYWxQcm9wcz8ucmVwbHlUeXBlLFxuICAgIH1cbiAgfSwgW3RvcGljLCB1c2VyLCBjb21tZW50LCBzdWJ0b3BpY0lkLCBtb2RhbFByb3BzXSlcbn1cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5J1xuXG5pbXBvcnQgdXNlQmluZERpc3BhdGNoIGZyb20gJy4uLy4uL2hvb2tzL3JlZHV4L3VzZUJpbmREaXNwYXRjaCdcbmltcG9ydCBjb21tZW50QWN0aW9ucyBmcm9tICcuLi8uLi8uLi9yZWR1eC9hY3Rpb25zL2NvbW1lbnRzJ1xuaW1wb3J0IHRyaWJ1bmFsQ29tbWVudEFjdGlvbnMgZnJvbSAnLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy90cmlidW5hbF9jb21tZW50cydcblxuaW1wb3J0IHsgY2hlY2tUb3hpY2l0eSB9IGZyb20gJy4uLy4uLy4uL2FwaS92MS9jb21tZW50cy9jb21tZW50c19hcGlfdXRpbCdcbmltcG9ydCBkZWxheSBmcm9tICcuLi8uLi8uLi9nZW5lcmljL2RlbGF5J1xuaW1wb3J0IHVzZURldGVjdEN1cnJlbnRQYWdlIGZyb20gJy4uLy4uL2hvb2tzL3JvdXRpbmcvdXNlRGV0ZWN0Q3VycmVudFBhZ2UnXG5cbmV4cG9ydCBkZWZhdWx0IChjb21wU3RhdGUsIGNvbnRlbnQsIHJhd1RleHQsIG1vZGFsUHJvcHMsIGNvbnRlbnRJZCkgPT4ge1xuICBjb25zdCB7IGlzT25UcmlidW5hbFBhZ2U6IGlzVHJpYnVuYWxDb21tZW50IH0gPSB1c2VEZXRlY3RDdXJyZW50UGFnZSgpXG5cbiAgY29uc3Qge1xuICAgIHRyaWJ1bmFsQ29tbWVudFVuZGVyUmV2aWV3SWQsXG4gICAgY29tbWVudElkLFxuICB9ID0gbW9kYWxQcm9wcyB8fCB7fVxuXG4gIGNvbnN0IGlzUGFyZW50VHJpYnVuYWxDb21tZW50VW5kZXJSZXZpZXcgPSBpc1RyaWJ1bmFsQ29tbWVudFxuICAmJiB0cmlidW5hbENvbW1lbnRVbmRlclJldmlld0lkID09PSBjb21tZW50SWRcblxuICBjb25zdCBwYXJlbnRJZCA9IGlzUGFyZW50VHJpYnVuYWxDb21tZW50VW5kZXJSZXZpZXcgPyBudWxsIDogY29tbWVudElkIHx8IG51bGxcbiAgY29uc3Qgcm9vdElkID0gaXNQYXJlbnRUcmlidW5hbENvbW1lbnRVbmRlclJldmlldyA/IG51bGwgOiBjb21wU3RhdGUucm9vdFBhcmVudENvbW1lbnRJZFxuXG4gIGNvbnN0IHtcbiAgICBjcmVhdGVDb21tZW50LFxuICAgIGNyZWF0ZVRyaWJ1bmFsQ29tbWVudCxcbiAgfSA9IHVzZUJpbmREaXNwYXRjaChjb21tZW50QWN0aW9ucywgdHJpYnVuYWxDb21tZW50QWN0aW9ucylcblxuICByZXR1cm4gdXNlQ2FsbGJhY2soKHZhbHVlcywgeyBzZXRTdWJtaXR0aW5nLCByZXNldEZvcm0gfSkgPT4ge1xuICAgIHRvYXN0LnByb21pc2UoXG4gICAgICBQcm9taXNlLmFsbChbZGVsYXkoMTUwMCksIGNoZWNrVG94aWNpdHkoeyBjb250ZW50OiByYXdUZXh0IH0pXSksXG4gICAgICB7XG4gICAgICAgIHBlbmRpbmc6ICdBbmFseXppbmcgQ29tbWVudC4uLicsXG4gICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICByZW5kZXIoeyBkYXRhIH0pIHtcbiAgICAgICAgICAgIGNvbnN0IHRveGljaXR5U2NvcmUgPSBkYXRhWzFdLmRhdGEuU0VWRVJFX1RPWElDSVRZXG4gICAgICAgICAgICBpZiAodG94aWNpdHlTY29yZSA8IDAuNikgcmV0dXJuICdUaGFua3MgRm9yIEJlaW5nIENpdmlsISdcbiAgICAgICAgICAgIGlmICh0b3hpY2l0eVNjb3JlID49IDAuNiAmJiB0b3hpY2l0eVNjb3JlIDw9IDAuOSkgcmV0dXJuICdUaGFua3MgZm9yIGJlaW5nIHNlbWktY2l2aWwuIE1heWJlIHNheSB0aGluZ3MgYSBiaXQgbmljZXInXG4gICAgICAgICAgICByZXR1cm4gJ1lvdSBhcmUgYmVpbmcgdG94aWMgOiggXFxuIFlvdXIgY29tbWVudCB3aWxsIGJlIGZsYWdnZWQnXG4gICAgICAgICAgfSxcbiAgICAgICAgICAvLyBvdGhlciBvcHRpb25zXG4gICAgICAgICAgaWNvbjogJ/Cfn6InLFxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogJ1Byb21pc2UgcmVqZWN0ZWQg8J+krycsXG4gICAgICB9LFxuICAgICkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgY29uc3QgdG94aWNpdHlTY29yZSA9IGRhdGFbMV0uZGF0YS5TRVZFUkVfVE9YSUNJVFlcbiAgICAgIGxldCB0b3hpY2l0eVN0YXR1c1xuICAgICAgaWYgKHRveGljaXR5U2NvcmUgPCAwLjYpIHRveGljaXR5U3RhdHVzID0gJ05PVF9UT1hJQydcbiAgICAgIGlmICh0b3hpY2l0eVNjb3JlID4gMC45KSB0b3hpY2l0eVN0YXR1cyA9ICdUT1hJQydcbiAgICAgIGNvbnN0IGNvbW1lbnQgPSB7XG4gICAgICAgIC4uLnZhbHVlcyxcbiAgICAgICAgY29udGVudCxcbiAgICAgICAgbWVtZUZsYWc6IGZhbHNlLFxuICAgICAgICBwYXJlbnRJZCxcbiAgICAgICAgY29udGVudElkLFxuICAgICAgICBzdWJ0b3BpY0lkOiBjb250ZW50SWQsXG4gICAgICAgIGNyZWF0ZWRCeTogY29tcFN0YXRlLnVzZXJuYW1lLFxuICAgICAgICByb290SWQsXG4gICAgICAgIHJhd1RleHQsXG4gICAgICAgIHRveGljaXR5U3RhdHVzLFxuICAgICAgfVxuICAgICAgcmV0dXJuIGlzVHJpYnVuYWxDb21tZW50ID8gY3JlYXRlVHJpYnVuYWxDb21tZW50KGNvbW1lbnQpIDogY3JlYXRlQ29tbWVudChjb21tZW50KVxuICAgIH0pXG5cbiAgICBzZXRTdWJtaXR0aW5nKGZhbHNlKVxuICAgIHJlc2V0Rm9ybSh7fSlcbiAgfSwgW1xuICAgIGNvbXBTdGF0ZSxcbiAgICBjb250ZW50LFxuICAgIHJhd1RleHQsXG4gICAgbW9kYWxQcm9wcy50cmlidW5hbENvbW1lbnRVbmRlclJldmlld0lkLFxuICAgIG1vZGFsUHJvcHMuY29tbWVudElkLFxuICAgIGNvbnRlbnRJZCxcbiAgXSlcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2xhYmVsLWhhcy1hc3NvY2lhdGVkLWNvbnRyb2wgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgQ29udGFpbmVyLCBJbnB1dCB9IGZyb20gJy4vU3R5bGUvaW5kZXgnXG5cbmNvbnN0IEFuaW1hdGVkQ2hlY2ttYXJrID0gKHsgdG94aWNpdHlTY29yZSB9KSA9PiB7XG4gIGxldCBjb2xvclxuICBsZXQgdGV4dFxuICBpZiAodG94aWNpdHlTY29yZSA8IDAuNikgeyBjb2xvciA9ICdncmVlbic7IHRleHQgPSAnR3JlYXQhJyB9XG4gIGlmICh0b3hpY2l0eVNjb3JlID49IDAuNiAmJiB0b3hpY2l0eVNjb3JlIDw9IDAuOSkgeyBjb2xvciA9ICd2YXIoLS1tLWRhbmdlci1jb2xvciknOyB0ZXh0ID0gJ1lvdSBhcmUgT0sgYnV0IGdldHRpbmcgY2xvc2UnIH1cbiAgaWYgKHRveGljaXR5U2NvcmUgPiAwLjkpIHsgY29sb3IgPSAncmVkJzsgdGV4dCA9ICdZb3UgYXJlIGJlaW5nIHRveGljJyB9XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxDb250YWluZXIgY29sb3I9e2NvbG9yfT5cbiAgICAgICAgPElucHV0IHJlYWRPbmx5IGRpc2FibGVkIGNoZWNrZWQ9e0Jvb2xlYW4odG94aWNpdHlTY29yZSl9IHR5cGU9XCJjaGVja2JveFwiIC8+XG4gICAgICAgIDxsYWJlbCAvPlxuICAgICAgICA8c3ZnIHdpZHRoPVwiMTVcIiBoZWlnaHQ9XCIxNFwiIHZpZXdCb3g9XCIwIDAgMTUgMTRcIiBmaWxsPVwibm9uZVwiPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNMiA4LjM2MzY0TDYuMjMwNzcgMTJMMTMgMlwiIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgICB7dG94aWNpdHlTY29yZSAmJiA8c3BhbiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMC41dncnIH19Pnt0ZXh0fTwvc3Bhbj59XG4gICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2ZXJzaW9uPVwiMS4xXCIgc3R5bGU9e3sgd2lkdGg6IDAsIGhlaWdodDogMCB9fT5cbiAgICAgICAgPGRlZnM+XG4gICAgICAgICAgPGZpbHRlciBpZD1cImdvb1wiPlxuICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIGluPVwiU291cmNlR3JhcGhpY1wiIHN0ZERldmlhdGlvbj1cIjRcIiByZXN1bHQ9XCJibHVyXCIgLz5cbiAgICAgICAgICAgIDxmZUNvbG9yTWF0cml4IGluPVwiYmx1clwiIG1vZGU9XCJtYXRyaXhcIiB2YWx1ZXM9XCIxIDAgMCAwIDAgIDAgMSAwIDAgMCAgMCAwIDEgMCAwICAwIDAgMCAyMiAtN1wiIHJlc3VsdD1cImdvb1wiIC8+XG4gICAgICAgICAgICA8ZmVCbGVuZCBpbj1cIlNvdXJjZUdyYXBoaWNcIiBpbjI9XCJnb29cIiAvPlxuICAgICAgICAgIDwvZmlsdGVyPlxuICAgICAgICA8L2RlZnM+XG4gICAgICA8L3N2Zz5cbiAgICA8Lz5cbiAgKVxufVxuZXhwb3J0IGRlZmF1bHQgQW5pbWF0ZWRDaGVja21hcmtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbmltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbi8vIGNvbnN0IHByaW1hcnkgPSAnIzRkMjcxYTg4J1xuXG5jb25zdCBzcGxhc2ggPSAocHJpbWFyeSkgPT4ga2V5ZnJhbWVzYFxuICA0MCUge1xuICAgIGJhY2tncm91bmQ6ICR7cHJpbWFyeX07XG4gICAgYm94LXNoYWRvdzogMCAtMThweCAwIC04cHggJHtwcmltYXJ5fSwgMTZweCAtOHB4IDAgLThweCAke3ByaW1hcnl9LCAxNnB4IDhweCAwIC04cHggJHtwcmltYXJ5fSwgMCAxOHB4IDAgLThweCAke3ByaW1hcnl9LCAtMTZweCA4cHggMCAtOHB4ICR7cHJpbWFyeX0sIC0xNnB4IC04cHggMCAtOHB4ICR7cHJpbWFyeX07XG4gIH1cblxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kOiAke3ByaW1hcnl9O1xuICAgIGJveC1zaGFkb3c6IDAgLTM2cHggMCAtMTBweCB0cmFuc3BhcmVudCwgMzJweCAtMTZweCAwIC0xMHB4IHRyYW5zcGFyZW50LCAzMnB4IDE2cHggMCAtMTBweCB0cmFuc3BhcmVudCwgMCAzNnB4IDAgLTEwcHggdHJhbnNwYXJlbnQsIC0zMnB4IDE2cHggMCAtMTBweCB0cmFuc3BhcmVudCwgLTMycHggLTE2cHggMCAtMTBweCB0cmFuc3BhcmVudDtcbiAgfVxuICBcblxuYFxuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLmNvbG9yfTtcbiAgLyogdHJhbnNmb3JtOiBzY2FsZSgzKTsgKi9cbiAgc3BhbiB7XG4gICAgbWFyZ2luLWxlZnQ6IC41dnc7XG4gIH1cbiAgaW5wdXQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMjRweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2JmYmZjMDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgei1pbmRleDogOTk5OTk5OTk5OTtcblxuICB9XG5cbiAgbGFiZWwge1xuICAgIHotaW5kZXg6IDk5OTk5OTk5OTtcbiAgICB3aWR0aDogMjRweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIC13ZWJraXQtZmlsdGVyOiB1cmwoI2dvbyk7XG4gICAgZmlsdGVyOiB1cmwoI2dvbyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XG4gICAgLyogcG9pbnRlci1ldmVudHM6IG5vbmU7ICovXG4gIH1cblxuICBzdmcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDVweDtcbiAgICBsZWZ0OiA0cHg7XG4gICAgei1pbmRleDogOTk5OTk5OTk5OTk7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgcGF0aCB7XG4gICAgICBzdHJva2U6IHdoaXRlO1xuICAgICAgc3Ryb2tlLXdpZHRoOiAzO1xuICAgICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xuICAgICAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDtcbiAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDE5O1xuICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDE5O1xuICAgICAgdHJhbnNpdGlvbjogc3Ryb2tlLWRhc2hvZmZzZXQgLjNzIGVhc2U7XG4gICAgICB0cmFuc2l0aW9uLWRlbGF5OiAuMnM7XG4gICAgfVxuICB9XG5cbiAgaW5wdXQ6Y2hlY2tlZCB7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG4gIGlucHV0OmNoZWNrZWQgKyBsYWJlbCB7XG4gICAgICBhbmltYXRpb246ICR7KHByb3BzKSA9PiBzcGxhc2gocHJvcHMuY29sb3IpfSAuNnMgZWFzZSBmb3J3YXJkcztcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICR7KHByb3BzKSA9PiBwcm9wcy5jb2xvcn07XG5cbiAgICAgICsgc3ZnIHBhdGgge1xuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMFxuICAgICAgfVxuICB9XG5cbmBcblxuZXhwb3J0IGNvbnN0IElucHV0ID0gc3R5bGVkKCdpbnB1dCcpYFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW46IDA7XG4gICAgJjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiAwO1xuICAgIH1cbmBcbiIsIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2xhYmVsLWhhcy1hc3NvY2lhdGVkLWNvbnRyb2wgKi9cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3Byb3AtdHlwZXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1wcm9wcy1uby1zcHJlYWRpbmcgKi9cblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRXJyb3JNZXNzYWdlIH0gZnJvbSAnZm9ybWlrJ1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IEZhZGUgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5pbXBvcnQgeyBTdHlsZWRTZWxlY3QsIExhYmVsLCBDb250YWluZXIgfSBmcm9tICcuL1N0eWxlJ1xuaW1wb3J0IEVycm9yIGZyb20gJy4uL0Vycm9yTWVzc2FnZS9JbmRleCdcblxuY29uc3QgU2VsZWN0ID0gKHtcbiAgd2lkdGgsIGZpZWxkLCBmb3JtLCBwbGFjZWhvbGRlciwgc2V0RmllbGRWYWx1ZSwgc2V0RmllbGRUb3VjaGVkLCAuLi5wcm9wc1xufSkgPT4ge1xuICBjb25zdCBbb3BlbiwgaXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBtZXRhRGF0YSA9IGZvcm0uZ2V0RmllbGRNZXRhKGZpZWxkLm5hbWUpXG4gIGNvbnN0IHNob3dFcnJvciA9IG1ldGFEYXRhLmVycm9yICYmIG1ldGFEYXRhLnRvdWNoZWRcbiAgY29uc3QgZW51bXMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmVudW1zLnRvcGljQ2F0ZWdvcmllcylcblxuICBjb25zdCBvbkNoYW5nZSA9IHVzZUNhbGxiYWNrKChlLCBzZXRGaWVsZCkgPT4ge1xuICAgIHNldEZpZWxkKGZpZWxkLm5hbWUsIGUudGFyZ2V0LnZhbHVlKVxuICAgIHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG5cbiAgICAgIDxGYWRlIGluPXtvcGVufT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8TGFiZWwgaHRtbEZvcj17ZmllbGQubmFtZX0+U2VsZWN0IEEgQ2F0ZWdvcnk8L0xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRmFkZT5cblxuICAgICAgPFN0eWxlZFNlbGVjdFxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgey4uLmZpZWxkfVxuICAgICAgICBpZD17ZmllbGQubmFtZX1cbiAgICAgICAgc2hvd0Vycm9yPXtzaG93RXJyb3J9XG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkNoYW5nZShlLCBzZXRGaWVsZFZhbHVlKX1cbiAgICAgICAgb25Gb2N1cz17KCkgPT4gaXNPcGVuKHRydWUpfVxuICAgICAgICBvbkJsdXI9eygpID0+IGlzT3BlbihmYWxzZSl9XG4gICAgICA+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5TZWxlY3QgQSBDYXRlZ29yeTwvb3B0aW9uPlxuICAgICAgICB7XG4gICAgICAgIGVudW1zPy5tYXAoKHZhbCkgPT4gPG9wdGlvbiBrZXk9e3ZhbH0gdmFsdWU9e3ZhbH0+e3ZhbH08L29wdGlvbj4pXG4gICAgICB9XG4gICAgICA8L1N0eWxlZFNlbGVjdD5cbiAgICAgIDxFcnJvck1lc3NhZ2Ugd2lkdGg9e3dpZHRofSBuYW1lPXtmaWVsZC5uYW1lfSBjb21wb25lbnQ9e0Vycm9yfSAvPlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdFxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZCgnZGl2JylgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiBhdXRvO1xuICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XG4gIC5mYWRlIHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDg1JTtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgTGFiZWwgPSBzdHlsZWQoJ2xhYmVsJylgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgY29sb3I6IHZhcigtLW0tdHJpbS1jb2xvcik7XG4gIGZvbnQtc2l6ZTogLjVlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbmBcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFNlbGVjdCA9IHN0eWxlZCgnc2VsZWN0JylgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IC41ZW07XG4gIGNvbG9yOiBibGFjaztcbiAgd2lkdGg6ICR7KHByb3BzKSA9PiBwcm9wcy53aWR0aCB8fCAnMzAlJ307XG4gIGhlaWdodDogMy41ZW07XG4gIGZvbnQtc2l6ZTogLjhlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1pbnB1dExpbmVIZWlnaHQpO1xuICBvdXRsaW5lOm5vbmU7XG4gIGJhY2tncm91bmQ6ICNFNUU1RTU7XG4gIGJvcmRlcjogJHsocHJvcHMpID0+IChwcm9wcy5zaG93RXJyb3IgPyAnMXB4IHNvbGlkIHZhcigtLW0tZGFuZ2VyLWNvbG9yKScgOiAnMXB4IHNvbGlkIHZhcigtLWJnKScpfTtcbiAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IHZhcigtLXRyYW5zaXRpb25EdXJhdGlvbik7XG5cbiAgOjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IHZhcigtLW0tdHJpbS1jb2xvcik7XG4gIH1cbiAgOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJveC1zaGFkb3c6ICA1cHggNXB4IDhweCAjZmZmZmZmLFxuICAgICAgICAgICAgIC01cHggLTVweCA4cHggI2ZmZmZmZjtcbiAgfVxuXG4gIDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSArICR7TGFiZWx9LFxuICA6Zm9jdXM6bm90KDpwbGFjZWhvbGRlci1zaG93bikgKyAke0xhYmVsfSB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOlxuICAgICAgdHJhbnNsYXRlM2QoMCwgdmFyKC0tbGFiZWxUcmFuc2Zvcm1lZFBvc1kpLCAwKVxuICAgICAgc2NhbGUodmFyKC0tbGFiZWxTY2FsZUZhY3RvcikpO1xuICAgIHRyYW5zaXRpb246XG4gICAgICB0cmFuc2Zvcm0gdmFyKC0taW5wdXRUcmFuc2l0aW9uRHVyYXRpb24pLFxuICAgICAgdmlzaWJpbGl0eSAwbXMsXG4gICAgICB6LWluZGV4IDBtcztcblxuICBvcHRpb24ge1xuICAgIGNvbG9yOiB2YXIoLS1tLXRyaW0tY29sb3IpO1xuICAgIGZvbnQtc2l6ZTogLjhlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cbmBcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBPdmVybGF5ID0gc3R5bGVkKCdkaXYnKWBcbiAgei1pbmRleDogOTk5OTk5O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgb3BhY2l0eTogMC4xO1xuYFxuIiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tdGhpcy1pbi1zZmMgKi9cbi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2NvbnRyb2wtaGFzLWFzc29jaWF0ZWQtbGFiZWwgKi9cbmltcG9ydCBSZWFjdCwge1xuICB1c2VDYWxsYmFjaywgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmLFxufSBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdFF1aWxsIGZyb20gJ3JlYWN0LXF1aWxsJ1xuXG5pbXBvcnQgJ3JlYWN0LXF1aWxsL2Rpc3QvcXVpbGwuc25vdy5jc3MnXG5cbmltcG9ydCB7IENvbnRhaW5lciwgRW1vamlCdXR0b24sIEVtb2ppQ29udGFpbmVyIH0gZnJvbSAnLi9TdHlsZSdcbmltcG9ydCB7IE92ZXJsYXkgfSBmcm9tICcuLi9PdmVybGF5L3N0eWxlJ1xuXG5jb25zdCBSaWNoVGV4dEVkaXRvciA9ICh7XG4gIGNvbnRlbnQsIHNldENvbnRlbnQsIHNldFRveGljaXR5U2NvcmUsXG59KSA9PiB7XG4gIGNvbnN0IFtpc0hpZGRlbiwgc2V0SXNIaWRkZW5dID0gdXNlU3RhdGUodHJ1ZSlcblxuICBjb25zdCBtb2R1bGVzID0ge1xuICAgIHRvb2xiYXI6IHtcbiAgICAgIGNvbnRhaW5lcjogJyN0b29sYmFyJyxcbiAgICB9LFxuICB9XG5cbiAgY29uc3QgaGFuZGxlT25DaGFuZ2UgPSB1c2VDYWxsYmFjaygoY3VyckNvbnRlbnQsIGRlbHRhLCBzb3VyY2UsIGVkaXRvcikgPT4ge1xuICAgIHNldENvbnRlbnQoe1xuICAgICAgcmF3SFRNTDogZWRpdG9yLmdldEhUTUwoKSxcbiAgICAgIGNvbnRlbnQ6IGVkaXRvci5nZXRDb250ZW50cygpLFxuICAgICAgcmF3VGV4dDogZWRpdG9yLmdldFRleHQoKSxcbiAgICB9KVxuICAgIGlmIChzZXRUb3hpY2l0eVNjb3JlKSBzZXRUb3hpY2l0eVNjb3JlKG51bGwpXG4gIH0sIFtdKVxuXG4gIGNvbnN0IHBpY2tlclJlZiA9IHVzZVJlZihudWxsKVxuICBjb25zdCBxdWlsbFJlZiA9IHVzZVJlZihudWxsKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHBpY2tlclJlZikge1xuICAgICAgY29uc3QgZW1vamlQaWNrZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd1bmljb2RlLWVtb2ppLXBpY2tlcicpXG4gICAgICBlbW9qaVBpY2tlci5hZGRFdmVudExpc3RlbmVyKCdlbW9qaS1waWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChxdWlsbFJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgY29uc3QgeyBlZGl0b3IgfSA9IHF1aWxsUmVmLmN1cnJlbnRcbiAgICAgICAgICBjb25zdCBjdXJzb3JQb3NpdGlvbiA9IGVkaXRvci5nZXRTZWxlY3Rpb24oKT8uaW5kZXggfHwgZWRpdG9yLmdldExlbmd0aCgpIC0gMVxuICAgICAgICAgIGVkaXRvci5pbnNlcnRUZXh0KGN1cnNvclBvc2l0aW9uLCBgJHtldmVudC5kZXRhaWwuZW1vaml9YClcbiAgICAgICAgICBlZGl0b3Iuc2V0U2VsZWN0aW9uKGN1cnNvclBvc2l0aW9uICsgMilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH0sIFtwaWNrZXJSZWYsIHF1aWxsUmVmXSlcblxuICBjb25zdCBmb3JtYXRzID0gWydib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnLCAnc3RyaWtlJywgJ2Jsb2NrcXVvdGUnLCAnY2xlYW4nXVxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwidGV4dC1lZGl0b3JcIj5cbiAgICAgIDxPdmVybGF5IGhpZGRlbj17aXNIaWRkZW59IG9uQ2xpY2s9eygpID0+IHNldElzSGlkZGVuKChwcmV2KSA9PiAhcHJldil9IC8+XG4gICAgICA8Q3VzdG9tVG9vbGJhciBzZXRJc0hpZGRlbj17c2V0SXNIaWRkZW59IHBpY2tlclJlZj17cGlja2VyUmVmfSBpc0hpZGRlbj17aXNIaWRkZW59IC8+XG4gICAgICA8UmVhY3RRdWlsbFxuICAgICAgICByZWY9e3F1aWxsUmVmfVxuICAgICAgICB0aGVtZT1cInNub3dcIlxuICAgICAgICB2YWx1ZT17Y29udGVudH1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxuICAgICAgICBtb2R1bGVzPXttb2R1bGVzfVxuICAgICAgICBmb3JtYXRzPXtmb3JtYXRzfVxuICAgICAgICBwbGFjZWhvbGRlcj1cIlNheSBzb21ldGhpbmcuLi5cIlxuICAgICAgLz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuXG5jb25zdCBDdXN0b21CdXR0b24gPSAoeyBpc0hpZGRlbiwgcGlja2VyUmVmLCBzZXRJc0hpZGRlbiB9KSA9PiAoXG4gIDw+XG4gICAgPHNwYW5cbiAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzSGlkZGVuKChwcmV2KSA9PiAhcHJldil9XG4gICAgICBvbktleURvd249eygpID0+IHNldElzSGlkZGVuKChwcmV2KSA9PiAhcHJldil9XG4gICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgIHRhYkluZGV4PXswfVxuICAgID5cbiAgICAgIPCfmYJcbiAgICA8L3NwYW4+XG4gICAgPEVtb2ppQ29udGFpbmVyIGhpZGRlbj17aXNIaWRkZW59PlxuICAgICAgPHVuaWNvZGUtZW1vamktcGlja2VyIHJlZj17cGlja2VyUmVmfSB2ZXJzaW9uPVwiMTQuMFwiIC8+XG4gICAgPC9FbW9qaUNvbnRhaW5lcj5cbiAgPC8+XG4pXG5cbmNvbnN0IEN1c3RvbVRvb2xiYXIgPSAoeyBzZXRJc0hpZGRlbiwgaXNIaWRkZW4sIHBpY2tlclJlZiB9KSA9PiAoXG4gIDxkaXYgaWQ9XCJ0b29sYmFyXCIgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nIH19PlxuICAgIDxkaXY+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJxbC1ib2xkXCIgLz5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cInFsLWl0YWxpY1wiIC8+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJxbC11bmRlcmxpbmVcIiAvPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwicWwtc3RyaWtlXCIgLz5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cInFsLWJsb2NrcXVvdGVcIiAvPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwicWwtY2xlYW5cIiAvPlxuXG4gICAgPC9kaXY+XG5cbiAgICA8RW1vamlCdXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cInFsLWluc2VydEVtb2ppXCI+XG4gICAgICA8Q3VzdG9tQnV0dG9uIHBpY2tlclJlZj17cGlja2VyUmVmfSBpc0hpZGRlbj17aXNIaWRkZW59IHNldElzSGlkZGVuPXtzZXRJc0hpZGRlbn0gLz5cbiAgICA8L0Vtb2ppQnV0dG9uPlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgUmljaFRleHRFZGl0b3JcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogLjVlbTtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICBtaW4td2lkdGg6IDkyJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAucWwtc25vdy5xbC10b29sYmFyOmFmdGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5xbC10b29sYmFyIHtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAuNWVtO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAuNWVtO1xuICB9XG5cbiAgLnFsLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogLjVlbTtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogLjVlbTtcbiAgfVxuXG4gICN0b29sYmFyIHtcbiAgICBidXR0b246YWZ0ZXIge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuYFxuXG5leHBvcnQgY29uc3QgRW1vamlCdXR0b24gPSBzdHlsZWQoJ2J1dHRvbicpYFxuICBwb3NpdGlvbjogcmVsYXRpdmUgO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICY6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuYFxuXG5leHBvcnQgY29uc3QgRW1vamlDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpYCBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgei1pbmRleDogOTk5OTk5OTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTkwJSwgLTkwJSkgc2NhbGUoLjgpO1xuYFxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1ib290c3RyYXAvTW9kYWwnXG5pbXBvcnQgeyBDb2xsYXBzZSwgRmFkZSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcblxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IEZvcm1paywgRmllbGQgfSBmcm9tICdmb3JtaWsnXG5cbmltcG9ydCB1c2VCaW5kRGlzcGF0Y2ggZnJvbSAnLi4vaG9va3MvcmVkdXgvdXNlQmluZERpc3BhdGNoJ1xuaW1wb3J0IHVzZUhhbmRsZVN1Ym1pdCBmcm9tICcuL2hvb2tzL3VzZUhhbmRsZVN1Ym1pdCdcbmltcG9ydCB1c2VHZXRMaW5rTWV0YURhdGFPbkJsdXIgZnJvbSAnLi9ob29rcy91c2VHZXRMaW5rTWV0YURhdGFPbkJsdXInXG5cbmltcG9ydCBJbnB1dCBmcm9tICcuLi9Db21tb25Db21wb25lbnRzL0Zvcm0vSW5wdXQvSW5kZXgnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL0NvbW1vbkNvbXBvbmVudHMvQnV0dG9uL0luZGV4J1xuXG5pbXBvcnQgdWlBY3Rpb25zIGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMvdWknXG5pbXBvcnQgdG9waWNBY3Rpb25zIGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMvdG9waWNzJ1xuXG5pbXBvcnQgVGhlbWVUb29sdGlwIGZyb20gJy4uL0NvbW1vbkNvbXBvbmVudHMvVG9vbHRpcC9JbmRleCdcbmltcG9ydCBVcGxvYWRNZWRpYUNvbnRhaW5lciBmcm9tICcuLi9Ub3BpY0Zvcm0vY29tcG9uZW50cy9VcGxvYWRNZWRpYS9JbmRleCdcbmltcG9ydCBEaXNwbGF5TWVkaWEgZnJvbSAnLi4vVG9waWNGb3JtL2NvbXBvbmVudHMvRGlzcGxheU1lZGlhL0luZGV4J1xuXG5pbXBvcnQge1xuICBGb3JtQ29udGFpbmVyLCBMZWZ0LCBSaWdodCwgRmxleERpdiwgQ29udGFpbmVyLCBJbnB1dHNDb250YWluZXIsIEFycm93LCBMaW5lLFxufSBmcm9tICcuL1N0eWxlJ1xuaW1wb3J0IHsgRG93bkFycm93Q2lyY2xlU3ZnIH0gZnJvbSAnLi4vLi4vc3Zncy9zdmdzJ1xuaW1wb3J0IFJpY2hUZXh0RWRpdG9yIGZyb20gJy4uL0NvbW1vbkNvbXBvbmVudHMvUmljaFRleHRFZGl0b3IvSW5kZXgnXG5cbmNvbnN0IHV1aWRSZWdFeCA9IG5ldyBSZWdFeHAoL1xcYlswLTlhLWZdezh9XFxiLVswLTlhLWZdezR9LVswLTlhLWZdezR9LVswLTlhLWZdezR9LVxcYlswLTlhLWZdezEyfVxcYi9nKVxuXG5jb25zdCBDcmVhdGVTdWJUb3BpY0Zvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZUxvY2F0aW9uKClcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtpbWdGaWxlLCBzZXRJbWdGaWxlXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFt2aWRlb0ZpbGUsIHNldFZpZGVvRmlsZV0gPSB1c2VTdGF0ZShudWxsKVxuXG4gIGNvbnN0IFtyb3RhdGUsIHNldFJvdGF0ZV0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBbY29udGVudCwgc2V0Q29udGVudF0gPSB1c2VTdGF0ZSgnJylcbiAgLy8gY29uc3QgdmFsaWRhdG9yID0gdXNlQ29uZmlnRm9ybUVycm9ycyhFUlJPUlMpXG4gIGNvbnN0IFt0b3BpY0lkXSA9IHBhdGhuYW1lLm1hdGNoKHV1aWRSZWdFeClcblxuICBjb25zdCB7IG1ldGFEYXRhLCBnZXRMaW5rTWV0YURhdGFPbkJsdXIgfSA9IHVzZUdldExpbmtNZXRhRGF0YU9uQmx1cigpXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IHVzZUhhbmRsZVN1Ym1pdChtZXRhRGF0YSwgdG9waWNJZClcblxuICBjb25zdCB7IGdldFRvcGljLCBjbG9zZU1vZGFsIH0gPSB1c2VCaW5kRGlzcGF0Y2goXG4gICAgdWlBY3Rpb25zLCB0b3BpY0FjdGlvbnMsXG4gIClcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKChzKSA9PiBzLnNlc3Npb24uY3VycmVudFVzZXIpXG4gIGNvbnN0IHRvcGljID0gdXNlU2VsZWN0b3IoKHMpID0+IHMudG9waWNzLmxpc3QpPy5maW5kKCh0KSA9PiB0LmlkID09PSB0b3BpY0lkKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0VG9waWModG9waWNJZCwgdXNlcj8uaWQpXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxGb3JtaWtcbiAgICAgICAgaW5pdGlhbFZhbHVlcz17eyB0aXRsZTogJycgfX1cbiAgICAgICAgdmFsaWRhdGU9eyh2YWx1ZXMpID0+IHtcbiAgICAgICAgICBjb25zdCBlcnJvcnMgPSB7fVxuICAgICAgICAgIGlmICghdmFsdWVzLnRpdGxlKSB7XG4gICAgICAgICAgICBlcnJvcnMudGl0bGUgPSAnVGl0bGUgSXMgUmVxdWlyZWQnXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBlcnJvcnNcbiAgICAgICAgfX1cbiAgICAgICAgb25TdWJtaXQ9eygodmFsdWVzLCBwYXJhbXMpID0+IGhhbmRsZVN1Ym1pdCh2YWx1ZXMsIHBhcmFtcywgY29udGVudCkpfVxuICAgICAgPlxuICAgICAgICB7KHsgaXNTdWJtaXR0aW5nLCBzZXRGaWVsZFZhbHVlIH0pID0+IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cbiAgICAgICAgICAgICAgPE1vZGFsLlRpdGxlPlxuICAgICAgICAgICAgICAgIENyZWF0ZSBTdWIgVG9waWMgUmVnYXJkaW5nIFRoZSBUb3BpY1xuICAgICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgICAge2BcIiR7dG9waWM/LnRpdGxlfVwiYH1cbiAgICAgICAgICAgICAgPC9Nb2RhbC5UaXRsZT5cbiAgICAgICAgICAgIDwvTW9kYWwuSGVhZGVyPlxuICAgICAgICAgICAgPEZvcm1Db250YWluZXI+XG4gICAgICAgICAgICAgIDxNb2RhbC5Cb2R5PlxuICAgICAgICAgICAgICAgIDxJbnB1dHNDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICA8TGVmdD5cbiAgICAgICAgICAgICAgICAgICAgPEZsZXhEaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGgyPiBUb3BpYyBEZXNjcmlwdGlvbiA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgIDxUaGVtZVRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBIZWFkZXI9XCJUb3BpYyBEZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwVGV4dD1cIlByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHRvcGljIHlvdSB3b3VsZCBsaWtlIHRvIGRpc2N1c3NcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRmxleERpdj5cbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRpdGxlXCIgY29tcG9uZW50PXtJbnB1dH0gd2lkdGg9XCIxMDAlXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBBIFRvcGljIFRpdGxlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInN1bW1hcnlcIiBjb21wb25lbnQ9e0lucHV0fSB3aWR0aD1cIjEwMCVcIiBwbGFjZWhvbGRlcj1cIkdpdmUgQSBTaG9ydCBPcGluaW9uIE9yIFBvaW50XCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvTGVmdD5cbiAgICAgICAgICAgICAgICAgIDxSaWdodD5cbiAgICAgICAgICAgICAgICAgICAgPEZsZXhEaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGgyPiBMaW5rIHRvIHdoYXQgeW91IHdhbnQgdG8gZGlzY3VzcyBoZXJlLi4uIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgPFRoZW1lVG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcEhlYWRlcj1cIkRpc2N1c3NlZCBDb250ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBUZXh0PVwiQWRkIGEgbGluayB0byB0aGUgZXh0ZXJuYWwgY29udGVudCB5b3Ugd291bGQgbGlrZSB0byBkaXNjdXNzIChcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuZyBhIFlvdVR1YmUgdmlkZW8sIFR3ZWV0LCBwdWJsaWNhdGlvbiwgb3IgYW55dGhpbmcgZWxzZSlcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRmxleERpdj5cblxuICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZT1cInVybFwiIG5hbWU9XCJjb250ZW50VXJsXCIgcGxhY2Vob2xkZXI9XCJMaW5rIFRvIENvbnRlbnRcIiBjb21wb25lbnQ9e0lucHV0fSB3aWR0aD1cIjEwMCVcIiBvbkJsdXI9e2dldExpbmtNZXRhRGF0YU9uQmx1cn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmUgLz5cbiAgICAgICAgICAgICAgICAgICAgPEZsZXhEaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGgyPiBBZGQgeW91ciBvd24gbWVkaWEgY29udGVudCA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgIDxUaGVtZVRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBIZWFkZXI9XCJVc2VyIFByb3ZpZGVkIENvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcFRleHQ9XCJUaGlzIGNvdWxkIGJlIGFuIGltYWdlLCBncmFwaGljLCBvciB2aWRlbyBwZXJ0YWluaW5nIHRvIHRoZSB0b3BpYyB5b3Ugd291bGQgbGlrZSB0byBkaXNjdXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXhEaXY+XG4gICAgICAgICAgICAgICAgICAgIDxVcGxvYWRNZWRpYUNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgIHNldEZpZWxkVmFsdWU9e3NldEZpZWxkVmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgaW1nRmlsZT17aW1nRmlsZX1cbiAgICAgICAgICAgICAgICAgICAgICB2aWRlb0ZpbGU9e3ZpZGVvRmlsZX1cbiAgICAgICAgICAgICAgICAgICAgICBzZXRJbWdGaWxlPXtzZXRJbWdGaWxlfVxuICAgICAgICAgICAgICAgICAgICAgIHNldFZpZGVvRmlsZT17c2V0VmlkZW9GaWxlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9SaWdodD5cbiAgICAgICAgICAgICAgICA8L0lucHV0c0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8TGluZSAvPlxuICAgICAgICAgICAgICAgIDxEaXNwbGF5TWVkaWFcbiAgICAgICAgICAgICAgICAgIGltZ0ZpbGU9e2ltZ0ZpbGV9XG4gICAgICAgICAgICAgICAgICB2aWRlb0ZpbGU9e3ZpZGVvRmlsZX1cbiAgICAgICAgICAgICAgICAgIG1ldGFEYXRhPXttZXRhRGF0YX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxSaWNoVGV4dEVkaXRvciBjb250ZW50PXtjb250ZW50fSBzZXRDb250ZW50PXtzZXRDb250ZW50fSAvPlxuICAgICAgICAgICAgICAgIDxBcnJvd1xuICAgICAgICAgICAgICAgICAgcm90YXRlPXtyb3RhdGV9XG4gICAgICAgICAgICAgICAgICAvLyBpY29uPXs8RG93bkFycm93Q2lyY2xlU3ZnIC8+fVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRPcGVuKCFvcGVuKVxuICAgICAgICAgICAgICAgICAgICBzZXRSb3RhdGUocm90YXRlICsgKG9wZW4gPyAtMTgwIDogMTgwKSlcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPERvd25BcnJvd0NpcmNsZVN2ZyAvPlxuICAgICAgICAgICAgICAgIDwvQXJyb3c+XG4gICAgICAgICAgICAgICAgPEZhZGUgaW49eyFvcGVufT5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIEVudGVyIFN1cHBsZW1lbnRhbCBJbmZvcm1hdGlvblxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9GYWRlPlxuICAgICAgICAgICAgICAgIDxJbnB1dHNDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICA8Q29sbGFwc2UgaW49e29wZW59PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdoaXRlU3BhY2U6ICdub3dyYXAnLCB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgICAgICAgICAgICAgICAgIDxGbGV4RGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPiBFbnRlciBMaW5rcyBUbyBTdXBwbGVtZW50YWwgRXZpZGVuY2UuLi4gPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUaGVtZVRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcFRleHQ9XCJQcm92aWRlIGxpbmtzIHRvIGFkZGl0aW9uYWwgcmVhZGluZyBvciBldmlkZW5jZSBldGMuLi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwSGVhZGVyPVwiU3VwcGxlbWVudGFsIEluZm9ybWF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9GbGV4RGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCB0eXBlPVwidXJsXCIgbmFtZT1cIkV2aWRlbmNlIExpbmsgMVwiIGNvbXBvbmVudD17SW5wdXR9IHdpZHRoPVwiMTAwJVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGU9XCJ1cmxcIiBuYW1lPVwiRXZpZGVuY2UgTGluayAyXCIgY29tcG9uZW50PXtJbnB1dH0gd2lkdGg9XCIxMDAlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZT1cInVybFwiIG5hbWU9XCJFdmlkZW5jZSBMaW5rIDNcIiBjb21wb25lbnQ9e0lucHV0fSB3aWR0aD1cIjEwMCVcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvQ29sbGFwc2U+XG4gICAgICAgICAgICAgICAgPC9JbnB1dHNDb250YWluZXI+XG4gICAgICAgICAgICAgIDwvTW9kYWwuQm9keT5cbiAgICAgICAgICAgICAgPE1vZGFsLkZvb3Rlcj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17aXNTdWJtaXR0aW5nfSBvbkNsaWNrPXtjbG9zZU1vZGFsfT5cbiAgICAgICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9PlxuICAgICAgICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvTW9kYWwuRm9vdGVyPlxuICAgICAgICAgICAgPC9Gb3JtQ29udGFpbmVyPlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9Gb3JtaWs+XG4gICAgPC9Db250YWluZXI+XG5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVTdWJUb3BpY0Zvcm1cbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBGb3JtIH0gZnJvbSAnZm9ybWlrJ1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWBcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBoZWlnaHQ6IDkwdmg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxZW07XG4gIGJveC1zaGFkb3c6ICA1cHggNXB4IDVweCAtM3B4ICMwMDAwMDA7XG5cbiAgaDEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy1ib3R0b206IC41ZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICB9XG4gYFxuXG5leHBvcnQgY29uc3QgRmxleERpdiA9IHN0eWxlZCgnZGl2JylgIFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG5gXG5cbmV4cG9ydCBjb25zdCBGb3JtQ29udGFpbmVyID0gc3R5bGVkKEZvcm0pYFxuICBtYXJnaW4tdG9wOiAxZW07XG4gICBoMiB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgbWFyZ2luOiAwIDFlbTtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgSW5wdXRzQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWBcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG5gXG5cbmV4cG9ydCBjb25zdCBMZWZ0ID0gc3R5bGVkKCdkaXYnKWBcbiAgZGlzcGxheTogZmxleDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogNTAlO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcbmBcbmV4cG9ydCBjb25zdCBSaWdodCA9IHN0eWxlZCgnZGl2JylgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDUwJTtcbmBcblxuZXhwb3J0IGNvbnN0IFN1cHBsZW1lbnRhbEluZm9ybWF0aW9uID0gc3R5bGVkKCdzZWN0aW9uJylgXG5cbmBcblxuZXhwb3J0IGNvbnN0IElucHV0V3JhcHBlciA9IHN0eWxlZCgnZGl2JylgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5gXG5cbmV4cG9ydCBjb25zdCBBcnJvdyA9IHN0eWxlZCgnc3BhbicpYFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNmb3JtOiAkeyhwcm9wcykgPT4gYHJvdGF0ZSgke3Byb3BzLnJvdGF0ZX1kZWcpYH07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuYFxuXG5leHBvcnQgY29uc3QgTGluZSA9IHN0eWxlZCgnaHInKWAgXG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMmVtIDEuM2VtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDgsNDgsNTApO1xuICBoZWlnaHQ6IC41cHg7XG4gIGJvcmRlcjogbm9uZTtcbmBcbiIsImltcG9ydCB7IHlvdVR1YmVVcmxWYWxpZGF0b3IsIHR3aXR0ZXJVcmxWYWxpZHRvciB9IGZyb20gJy4uLy4uLy4uL2dlbmVyaWMvcmVnZXgvdXJsVmFsaWRhdG9ycydcblxuZXhwb3J0IGRlZmF1bHQgKHVybCkgPT4ge1xuICBjb25zdCB5dFVybCA9IHVybC5zZWFyY2goeW91VHViZVVybFZhbGlkYXRvcikgPT09IC0xID8gbnVsbCA6ICd5dFVybCdcbiAgY29uc3QgdHdlZXRVcmwgPSB1cmwuc2VhcmNoKHR3aXR0ZXJVcmxWYWxpZHRvcikgPT09IC0xID8gbnVsbCA6ICd0d2VldFVybCdcbiAgcmV0dXJuIHl0VXJsIHx8IHR3ZWV0VXJsXG59XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgZ2V0TGlua01ldGFEYXRhIH0gZnJvbSAnLi4vLi4vLi4vYXBpL3YxL3RvcGljcy90b3BpY3NfYXBpX3V0aWwnXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY29uc3QgW21ldGFEYXRhLCBzZXRNZXRhRGF0YV0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBnZXRMaW5rTWV0YURhdGFPbkJsdXIgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xuICAgIGdldExpbmtNZXRhRGF0YShlLmN1cnJlbnRUYXJnZXQudmFsdWUpLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICBzZXRNZXRhRGF0YShkYXRhKVxuICAgIH0pXG4gIH0sIFtdKVxuXG4gIHJldHVybiB7IG1ldGFEYXRhLCBnZXRMaW5rTWV0YURhdGFPbkJsdXIgfVxufVxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB0b3BpY0FjdGlvbnMgZnJvbSAnLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy90b3BpY3MvaW5kZXgnXG5pbXBvcnQgc3VidG9waWNBY3Rpb25zIGZyb20gJy4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvc3VidG9waWNzL2luZGV4J1xuXG5pbXBvcnQgdXNlQmluZERpc3BhdGNoIGZyb20gJy4uLy4uL2hvb2tzL3JlZHV4L3VzZUJpbmREaXNwYXRjaCdcblxuaW1wb3J0IGNoZWNrTGlua1R5cGUgZnJvbSAnLi9jaGVja0xpbmtUeXBlJ1xuXG5leHBvcnQgZGVmYXVsdCAobWV0YURhdGEsIHRvcGljSWQpID0+IHtcbiAgY29uc3QgeyBjcmVhdGVTdWJUb3BpYywgdXBsb2FkVG9waWNNZWRpYSB9ID0gdXNlQmluZERpc3BhdGNoKHRvcGljQWN0aW9ucywgc3VidG9waWNBY3Rpb25zKVxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3IoKHMpID0+IHMuc2Vzc2lvbi5jdXJyZW50VXNlcilcblxuICByZXR1cm4gdXNlQ2FsbGJhY2soKHZhbHVlcywgeyBzZXRTdWJtaXR0aW5nLCByZXNldEZvcm0gfSwgY29udGVudCkgPT4ge1xuICAgIGNvbnN0IGVMaW5rcyA9IE9iamVjdC5lbnRyaWVzKHZhbHVlcykubWFwKChbaywgdl0pID0+IChrLmluY2x1ZGVzKCdFdmlkZW5jZScpID8gdiA6IG51bGwpKS5maWx0ZXIoQm9vbGVhbilcbiAgICBjb25zdCBsaW5rVHlwZSA9IGNoZWNrTGlua1R5cGUodmFsdWVzLmNvbnRlbnRVcmwpXG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIC4uLnZhbHVlcyxcbiAgICAgIGRlc2NyaXB0aW9uOiBjb250ZW50LFxuICAgICAgY3JlYXRlZEJ5OiB1c2VyLnVzZXJuYW1lLFxuICAgICAgdXNlcklkOiB1c2VyLmlkLFxuICAgICAgZXZpZGVuY2VMaW5rczogZUxpbmtzLFxuICAgICAgW2xpbmtUeXBlXTogdmFsdWVzLmNvbnRlbnRVcmwsXG4gICAgICB0aHVtYkltZ1VybDogbWV0YURhdGEub2dJbWFnZT8udXJsLFxuICAgICAgdG9waWNJZCxcbiAgICAgIHR3ZWV0VXJsOiBudWxsLFxuICAgICAgaW1hZ2VVcmw6IG51bGwsXG4gICAgICB2b2RVcmw6IG51bGwsXG4gICAgfVxuICAgIGlmICh2YWx1ZXMuZmlsZSBpbnN0YW5jZW9mIEZpbGUpIHtcbiAgICAgIGNvbnN0IFtmaWxlVHlwZSwgZmlsZUZvcm1hdF0gPSB2YWx1ZXMuZmlsZS50eXBlLnNwbGl0KCcvJylcbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLCB2YWx1ZXMuZmlsZSlcbiAgICAgIHVwbG9hZFRvcGljTWVkaWEoZm9ybURhdGEsIGZpbGVUeXBlLCBmaWxlRm9ybWF0LCBkYXRhKVxuICAgIH0gZWxzZSB7XG4gICAgICBjcmVhdGVTdWJUb3BpYyhkYXRhKVxuICAgIH1cbiAgICBzZXRTdWJtaXR0aW5nKGZhbHNlKVxuICAgIHJlc2V0Rm9ybSh7fSlcbiAgfSwgW21ldGFEYXRhLCB0b3BpY0lkXSlcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtYm9vdHN0cmFwL01vZGFsJ1xuaW1wb3J0IHsgRm9ybWlrLCBGaWVsZCB9IGZyb20gJ2Zvcm1paydcbmltcG9ydCB7IENvbGxhcHNlLCBGYWRlIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuXG5pbXBvcnQgdXNlQmluZERpc3BhdGNoIGZyb20gJy4uL2hvb2tzL3JlZHV4L3VzZUJpbmREaXNwYXRjaCdcbmltcG9ydCB1c2VIYW5kbGVTdWJtaXQgZnJvbSAnLi9ob29rcy91c2VIYW5kbGVTdWJtaXQnXG5pbXBvcnQgdXNlQ29uZmlnRm9ybUVycm9ycyBmcm9tICcuLi91dGlsL2Zvcm1faGVscGVycy9ob29rcy91c2VDb25maWdGb3JtRXJyb3JzJ1xuaW1wb3J0IHVpQWN0aW9ucyBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zL3VpJ1xuXG5pbXBvcnQgeyBEb3duQXJyb3dDaXJjbGVTdmcgfSBmcm9tICcuLi8uLi9zdmdzL3N2Z3MnXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi4vQ29tbW9uQ29tcG9uZW50cy9Gb3JtL0lucHV0My9JbmRleCdcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi4vQ29tbW9uQ29tcG9uZW50cy9Gb3JtL1NlbGVjdC9JbmRleCdcbmltcG9ydCBSaWNoVGV4dEVkaXRvciBmcm9tICcuLi9Db21tb25Db21wb25lbnRzL1JpY2hUZXh0RWRpdG9yL0luZGV4J1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9Db21tb25Db21wb25lbnRzL0J1dHRvbi9JbmRleCdcbmltcG9ydCBVcGxvYWRNZWRpYUNvbnRhaW5lciBmcm9tICcuL2NvbXBvbmVudHMvVXBsb2FkTWVkaWEvSW5kZXgnXG5pbXBvcnQgRGlzcGxheU1lZGlhIGZyb20gJy4vY29tcG9uZW50cy9EaXNwbGF5TWVkaWEvSW5kZXgnXG5pbXBvcnQgTGlua1R5cGVJY29uIGZyb20gJy4vY29tcG9uZW50cy9MaW5rVHlwZUljb24vSW5kZXgnXG5cbmltcG9ydCBUaGVtZVRvb2x0aXAgZnJvbSAnLi4vQ29tbW9uQ29tcG9uZW50cy9Ub29sdGlwL0luZGV4J1xuXG5pbXBvcnQge1xuICBGb3JtQ29udGFpbmVyLCBJbnB1dHNDb250YWluZXIsIENvbnRhaW5lciwgTGVmdCwgUmlnaHQsIFNlY3Rpb25EZXNjcmlwdGlvbiwgTW9iaWxlT25seUxpbmUsXG4gIExpbmUsIEFycm93LCBGbGV4RGl2LFxufSBmcm9tICcuL1N0eWxlJ1xuXG5pbXBvcnQgeyBJTklUX1RPUElDX0ZPUk1fVkFMVUVTIH0gZnJvbSAnLi4vdXRpbC9mb3JtX2hlbHBlcnMvaW5pdF9mb3JtX3ZhbHVlcydcbmltcG9ydCB1c2VHZXRMaW5rTWV0YURhdGFPbkJsdXIgZnJvbSAnLi9ob29rcy91c2VHZXRMaW5rTWV0YURhdGFPbkJsdXInXG5cbmNvbnN0IFZBTElEQVRJT05TID0ge1xuICB0aXRsZTogeyBSRVFVSVJFRDogdHJ1ZSB9LFxuICBzdW1tYXJ5OiB7IFJFUVVJUkVEOiB0cnVlLCBNSU5fTEVOR1RIOiA1IH0sXG4gIGNhdGVnb3J5OiB7IFJFUVVJUkVEOiB0cnVlIH0sXG59XG5cbmNvbnN0IENyZWF0ZVRvcGljRm9ybSA9ICgpID0+IHtcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtpbWdGaWxlLCBzZXRJbWdGaWxlXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFt2aWRlb0ZpbGUsIHNldFZpZGVvRmlsZV0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbbWV0YURhdGEsIHNldE1ldGFEYXRhXSA9IHVzZVN0YXRlKG51bGwpXG5cbiAgY29uc3QgW3JvdGF0ZSwgc2V0Um90YXRlXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFtyaWNoVGV4dEVkaXRvckNvbnRlbnQsIHNldFJpY2hUZXh0RWRpdG9yQ29udGVudF0gPSB1c2VTdGF0ZSh7XG4gICAgcmF3SFRNTDogJycsXG4gICAgY29udGVudDogJycsXG4gIH0pXG5cbiAgY29uc3QgdmFsaWRhdG9yID0gdXNlQ29uZmlnRm9ybUVycm9ycyhWQUxJREFUSU9OUylcbiAgY29uc3QgeyBjb250ZW50VXJsLCBnZXRDb250ZW50VXJsT25CbHVyIH0gPSB1c2VHZXRMaW5rTWV0YURhdGFPbkJsdXIoKVxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSB1c2VIYW5kbGVTdWJtaXQobWV0YURhdGEpXG4gIGNvbnN0IHsgY2xvc2VNb2RhbCB9ID0gdXNlQmluZERpc3BhdGNoKHVpQWN0aW9ucylcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8Rm9ybWlrXG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e0lOSVRfVE9QSUNfRk9STV9WQUxVRVN9XG4gICAgICAgIHZhbGlkYXRlPXt2YWxpZGF0b3J9XG4gICAgICAgIG9uU3VibWl0PXsoKHZhbHVlcywgcGFyYW1zKSA9PiBoYW5kbGVTdWJtaXQodmFsdWVzLCBwYXJhbXMsIHJpY2hUZXh0RWRpdG9yQ29udGVudC5yYXdIVE1MKSl9XG4gICAgICA+XG4gICAgICAgIHsoeyBpc1N1Ym1pdHRpbmcsIHNldEZpZWxkVmFsdWUsIHNldEZpZWxkVG91Y2hlZCB9KSA9PiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XG4gICAgICAgICAgICAgIDxNb2RhbC5UaXRsZT5DcmVhdGUgVG9waWM8L01vZGFsLlRpdGxlPlxuICAgICAgICAgICAgPC9Nb2RhbC5IZWFkZXI+XG5cbiAgICAgICAgICAgIDxGb3JtQ29udGFpbmVyPlxuICAgICAgICAgICAgICA8TW9kYWwuQm9keT5cbiAgICAgICAgICAgICAgICA8SW5wdXRzQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgPExlZnQ+XG4gICAgICAgICAgICAgICAgICAgIDxGbGV4RGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxTZWN0aW9uRGVzY3JpcHRpb24+IFRvcGljIERlc2NyaXB0aW9uIDwvU2VjdGlvbkRlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxUaGVtZVRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBIZWFkZXI9XCJUb3BpYyBEZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwVGV4dD1cIlByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHRvcGljIHlvdSB3b3VsZCBsaWtlIHRvIGRpc2N1c3NcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRmxleERpdj5cbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRpdGxlXCIgbGFiZWw9XCJUaXRsZVwiIGNvbXBvbmVudD17SW5wdXR9IHdpZHRoPVwiODUlXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBBIFRvcGljIFRpdGxlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInN1bW1hcnlcIiBsYWJlbD1cIlN1bW1hcnlcIiBjb21wb25lbnQ9e0lucHV0fSB3aWR0aD1cIjg1JVwiIHBsYWNlaG9sZGVyPVwiR2l2ZSBBIFNob3J0IE9waW5pb24gT3IgUG9pbnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZT1cInRleHRcIiBuYW1lPVwiY2F0ZWdvcnlcIiBsYWJlbD1cIkNhdGVnb3J5XCIgY29tcG9uZW50PXtTZWxlY3R9IHNldEZpZWxkVmFsdWU9e3NldEZpZWxkVmFsdWV9IHNldEZpZWxkVG91Y2hlZD17c2V0RmllbGRUb3VjaGVkfSB3aWR0aD1cIjg1JVwiIC8+XG4gICAgICAgICAgICAgICAgICA8L0xlZnQ+XG4gICAgICAgICAgICAgICAgICA8TW9iaWxlT25seUxpbmUgLz5cbiAgICAgICAgICAgICAgICAgIDxSaWdodD5cbiAgICAgICAgICAgICAgICAgICAgPEZsZXhEaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPFNlY3Rpb25EZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIExpbmsgdG8gd2hhdCB5b3Ugd2FudCB0byBkaXNjdXNzIGhlcmUuLi5cbiAgICAgICAgICAgICAgICAgICAgICA8L1NlY3Rpb25EZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8VGhlbWVUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwSGVhZGVyPVwiRGlzY3Vzc2VkIENvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcFRleHQ9XCJBZGQgYSBsaW5rIHRvIHRoZSBleHRlcm5hbCBjb250ZW50IHlvdSB3b3VsZCBsaWtlIHRvIGRpc2N1c3MgKFxuICAgICAgICAgICAgICAgICAgICAgICAgZS5nIGEgWW91VHViZSB2aWRlbywgVHdlZXQsIHB1YmxpY2F0aW9uLCBvciBhbnl0aGluZyBlbHNlKVwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4RGl2PlxuICAgICAgICAgICAgICAgICAgICA8RmxleERpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ1cmxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvbnRlbnRVcmxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMaW5rIFRvIENvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJMaW5rIFRvIENvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtJbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiODUlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17Z2V0Q29udGVudFVybE9uQmx1cn1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIHsgY29udGVudFVybCAmJiA8TGlua1R5cGVJY29uIG1ldGFEYXRhPXttZXRhRGF0YX0gY29udGVudFVybD17Y29udGVudFVybH0gLz4gfVxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXhEaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPExpbmUgLz5cbiAgICAgICAgICAgICAgICAgICAgPEZsZXhEaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPFNlY3Rpb25EZXNjcmlwdGlvbj4gQWRkIHlvdXIgb3duIG1lZGlhIGNvbnRlbnQgPC9TZWN0aW9uRGVzY3JpcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgPFRoZW1lVG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcEhlYWRlcj1cIlVzZXIgUHJvdmlkZWQgQ29udGVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwVGV4dD1cIlRoaXMgY291bGQgYmUgYW4gaW1hZ2UsIGdyYXBoaWMsIG9yIHZpZGVvIHBlcnRhaW5pbmcgdG8gdGhlIHRvcGljIHlvdSB3b3VsZCBsaWtlIHRvIGRpc2N1c3NcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRmxleERpdj5cbiAgICAgICAgICAgICAgICAgICAgPFVwbG9hZE1lZGlhQ29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0RmllbGRWYWx1ZT17c2V0RmllbGRWYWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICBpbWdGaWxlPXtpbWdGaWxlfVxuICAgICAgICAgICAgICAgICAgICAgIHZpZGVvRmlsZT17dmlkZW9GaWxlfVxuICAgICAgICAgICAgICAgICAgICAgIHNldEltZ0ZpbGU9e3NldEltZ0ZpbGV9XG4gICAgICAgICAgICAgICAgICAgICAgc2V0VmlkZW9GaWxlPXtzZXRWaWRlb0ZpbGV9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L1JpZ2h0PlxuICAgICAgICAgICAgICAgIDwvSW5wdXRzQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxMaW5lIC8+XG4gICAgICAgICAgICAgICAgPERpc3BsYXlNZWRpYVxuICAgICAgICAgICAgICAgICAgaW1nRmlsZT17aW1nRmlsZX1cbiAgICAgICAgICAgICAgICAgIHZpZGVvRmlsZT17dmlkZW9GaWxlfVxuICAgICAgICAgICAgICAgICAgY29udGVudFVybD17Y29udGVudFVybH1cbiAgICAgICAgICAgICAgICAgIHNldE1ldGFEYXRhPXtzZXRNZXRhRGF0YX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxSaWNoVGV4dEVkaXRvclxuICAgICAgICAgICAgICAgICAgY29udGVudD17cmljaFRleHRFZGl0b3JDb250ZW50LmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgICBzZXRDb250ZW50PXtzZXRSaWNoVGV4dEVkaXRvckNvbnRlbnR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8QXJyb3dcbiAgICAgICAgICAgICAgICAgIHJvdGF0ZT17cm90YXRlfVxuICAgICAgICAgICAgICAgICAgLy8gaWNvbj17PERvd25BcnJvd0NpcmNsZVN2ZyAvPn1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0T3Blbighb3BlbilcbiAgICAgICAgICAgICAgICAgICAgc2V0Um90YXRlKHJvdGF0ZSArIChvcGVuID8gLTE4MCA6IDE4MCkpXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxEb3duQXJyb3dDaXJjbGVTdmcgLz5cbiAgICAgICAgICAgICAgICA8L0Fycm93PlxuICAgICAgICAgICAgICAgIDxGYWRlIGluPXshb3Blbn0+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICBFbnRlciBTdXBwbGVtZW50YWwgSW5mb3JtYXRpb25cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvRmFkZT5cbiAgICAgICAgICAgICAgICA8SW5wdXRzQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgPENvbGxhcHNlIGluPXtvcGVufT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aGl0ZVNwYWNlOiAnbm93cmFwJywgd2lkdGg6ICcxMDAlJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICA8RmxleERpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj4gRW50ZXIgTGlua3MgVG8gU3VwcGxlbWVudGFsIEV2aWRlbmNlLi4uIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGhlbWVUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBUZXh0PVwiUHJvdmlkZSBsaW5rcyB0byBhZGRpdGlvbmFsIHJlYWRpbmcgb3IgZXZpZGVuY2UgZXRjLi4uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcEhlYWRlcj1cIlN1cHBsZW1lbnRhbCBJbmZvcm1hdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvRmxleERpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZT1cInVybFwiIG5hbWU9XCJFdmlkZW5jZSBMaW5rIDFcIiBjb21wb25lbnQ9e0lucHV0fSB3aWR0aD1cIjcwJVwiIGxhYmVsPVwiTGluayBUbyBFdmlkZW5jZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGU9XCJ1cmxcIiBuYW1lPVwiRXZpZGVuY2UgTGluayAyXCIgY29tcG9uZW50PXtJbnB1dH0gd2lkdGg9XCI3MCVcIiBsYWJlbD1cIkxpbmsgVG8gRXZpZGVuY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCB0eXBlPVwidXJsXCIgbmFtZT1cIkV2aWRlbmNlIExpbmsgM1wiIGNvbXBvbmVudD17SW5wdXR9IHdpZHRoPVwiNzAlXCIgbGFiZWw9XCJMaW5rIFRvIEV2aWRlbmNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L0NvbGxhcHNlPlxuICAgICAgICAgICAgICAgIDwvSW5wdXRzQ29udGFpbmVyPlxuICAgICAgICAgICAgICA8L01vZGFsLkJvZHk+XG4gICAgICAgICAgICAgIDxNb2RhbC5Gb290ZXI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgZGlzYWJsZWQ9e2lzU3VibWl0dGluZ30gb25DbGljaz17Y2xvc2VNb2RhbH0+XG4gICAgICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17aXNTdWJtaXR0aW5nfT5cbiAgICAgICAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L01vZGFsLkZvb3Rlcj5cbiAgICAgICAgICAgIDwvRm9ybUNvbnRhaW5lcj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvRm9ybWlrPlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENyZWF0ZVRvcGljRm9ybVxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IEZvcm0gfSBmcm9tICdmb3JtaWsnXG4vLyBpbXBvcnQgeyBGaUFycm93RG93bkNpcmNsZSB9IGZyb20gJ3JlYWN0LWljb25zL2ZpJ1xuXG5leHBvcnQgY29uc3QgRmxleERpdiA9IHN0eWxlZCgnZGl2JylgIFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG5gXG5cbmV4cG9ydCBjb25zdCBGb3JtQ29udGFpbmVyID0gc3R5bGVkKEZvcm0pYFxuICAvKiBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgKi9cbiAgbWFyZ2luLXRvcDogMWVtO1xuICAgaDIge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICB9XG4gXG5gXG5cbmV4cG9ydCBjb25zdCBBcnJvdyA9IHN0eWxlZCgnc3BhbicpYFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNmb3JtOiAkeyhwcm9wcykgPT4gYHJvdGF0ZSgke3Byb3BzLnJvdGF0ZX1kZWcpYH07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuYFxuXG5leHBvcnQgY29uc3QgSW5wdXRzQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWBcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgTGVmdCA9IHN0eWxlZCgnZGl2JylgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDUwJTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIH1cbmBcbmV4cG9ydCBjb25zdCBSaWdodCA9IHN0eWxlZCgnZGl2JylgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDUwJTtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBTdXBwbGVtZW50YWxJbmZvcm1hdGlvbiA9IHN0eWxlZCgnc2VjdGlvbicpYFxuXG5gXG5cbmV4cG9ydCBjb25zdCBJbnB1dFdyYXBwZXIgPSBzdHlsZWQoJ2RpdicpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuYFxuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWBcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBoZWlnaHQ6IDkwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xuICAvKiBib3gtc2hhZG93OiB2YXIoLS1tLXByaW1hcnktYm94LXNoYWRvdyk7ICovXG4gIGJveC1zaGFkb3c6ICA1cHggNXB4IDVweCAtM3B4ICMwMDAwMDA7XG5cbiAgaDEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy1ib3R0b206IC41ZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICB9XG4gIFxuICAvKiBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2MDBweCkge1xuICAgICB3aWR0aDogODB2dztcbiAgfVxuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAgd2lkdGg6IDkwdnc7XG4gIH1cblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgIHdpZHRoOiAxMDB2dztcbiAgfSAqL1xuIGBcblxuZXhwb3J0IGNvbnN0IExpbmUgPSBzdHlsZWQoJ2hyJylgIFxuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDJlbSAxLjNlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ4LDQ4LDUwKTtcbiAgaGVpZ2h0OiAuNXB4O1xuICBib3JkZXI6IG5vbmU7XG5gXG5cbmV4cG9ydCBjb25zdCBVcGxvYWRNZWRpYUNvbnRhaW5lciA9IHN0eWxlZCgnZGl2JylgIFxuICBtYXJnaW4tbGVmdDogMS4zZW07XG4gIHBhZGRpbmc6IC41ZW07XG4gIGJvcmRlci1yYWRpdXM6IC41ZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJveC1zaGFkb3c6ICA1cHggNXB4IDVweCAtM3B4ICNBQUFBQUE7XG4gIGJhY2tncm91bmQ6ICNFNUU1RTU7XG5cbjtcblxuYFxuXG5leHBvcnQgY29uc3QgU2VjdGlvbkRlc2NyaXB0aW9uID0gc3R5bGVkKCdoMicpYFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC8qIGRpc3BsYXk6IG5vbmU7ICovXG4gIH1cblxuYFxuXG5leHBvcnQgY29uc3QgTW9iaWxlT25seUxpbmUgPSBzdHlsZWQoJ2hyJylgIFxuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDJlbSAxLjNlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ4LDQ4LDUwKTtcbiAgaGVpZ2h0OiAuNXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGRpc3BsYXk6IG5vbmU7XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5gXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7XG4gIE9HRmF2aWNvbixcbn0gZnJvbSAnLi9TdHlsZS9pbmRleCdcbmltcG9ydCBJc0xvYWRpbmdIT0MgZnJvbSAnLi4vLi4vLi4vLi4vaG9jcy9Jc0xvYWRpbmdIT0MnXG5cbmNvbnN0IExpbmtUeXBlSWNvbiA9ICh7XG4gIGNvbnRlbnRVcmwsIG1ldGFEYXRhLCBzZXRJc0xvYWRpbmcsXG59KSA9PiB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SXNMb2FkaW5nKHRydWUpXG4gIH0sIFtjb250ZW50VXJsXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChtZXRhRGF0YSkgc2V0SXNMb2FkaW5nKGZhbHNlKVxuICB9LCBbbWV0YURhdGFdKVxuXG4gIHJldHVybiAoXG4gICAgPE9HRmF2aWNvbiBzcmM9e21ldGFEYXRhPy5mYXZpY29ufSBhbHQ9XCJcIiAvPlxuICApXG59XG5leHBvcnQgZGVmYXVsdCBJc0xvYWRpbmdIT0MoTGlua1R5cGVJY29uLCAnMzBweCcsIHRydWUpXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgT0dGYXZpY29uID0gc3R5bGVkKCdpbWcnKWAgXG4gIGJvcmRlci1yYWRpdXM6IDF2dztcbiAgd2lkdGg6IDEuNXZ3O1xuXG5gIiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LXByb3BzLW5vLXNwcmVhZGluZyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGFiZWwsIFVwbG9hZElucHV0IH0gZnJvbSAnLi9TdHlsZSdcblxuY29uc3QgVXBsb2FkSW1hZ2VJbnB1dCA9ICh7XG4gIGZpZWxkLCBvbkNoYW5nZSwgaWNvbiwgZmlsZVR5cGUsIGRpc2FibGVkLFxufSkgPT4gKFxuICA8TGFiZWw+XG4gICAge2ljb259XG4gICAgPFVwbG9hZElucHV0IGRhdGEtZmlsZXR5cGU9e2ZpbGVUeXBlfSB0eXBlPVwiZmlsZVwiIHsuLi5maWVsZH0gaWQ9e2ZpZWxkLm5hbWV9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gZGlzYWJsZWQ9e2Rpc2FibGVkfSAvPlxuICA8L0xhYmVsPlxuXG4pXG5cbmV4cG9ydCBkZWZhdWx0IFVwbG9hZEltYWdlSW5wdXRcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBMYWJlbCA9IHN0eWxlZCgnbGFiZWwnKWAgXG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwJTtcbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IFVwbG9hZElucHV0ID0gc3R5bGVkKCdpbnB1dCcpYCBcbiAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgbGVmdDogLTk5OTk5cmVtO1xuYFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJ2Zvcm1paydcblxuaW1wb3J0IFVwbG9hZEZpbGVJbnB1dCBmcm9tICcuLi9VcGxvYWRJbWFnZUlucHV0L0luZGV4J1xuaW1wb3J0IHsgVmlkZW9TdmcsIEltYWdlU3ZnIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3Zncy9zdmdzJ1xuXG5pbXBvcnQgdXNlT25GaWxlQ2hhbmdlSGFuZGxlciBmcm9tICcuLi8uLi9ob29rcy91c2VPbkZpbGVDaGFuZ2VIYW5kbGVyJ1xuXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuL1N0eWxlL2luZGV4J1xuXG5jb25zdCBVcGxvYWRNZWRpYUNvbnRhaW5lciA9ICh7XG4gIHNldEZpZWxkVmFsdWUsIGltZ0ZpbGUsIHZpZGVvRmlsZSwgc2V0SW1nRmlsZSwgc2V0VmlkZW9GaWxlLFxufSkgPT4ge1xuICBjb25zdCBvbkZpbGVDaGFuZ2UgPSB1c2VPbkZpbGVDaGFuZ2VIYW5kbGVyKClcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPEZpZWxkXG4gICAgICAgIGZpbGVUeXBlPVwiZmlsZVwiXG4gICAgICAgIG5hbWU9XCJ0b3BpY0ltYWdlXCJcbiAgICAgICAgZGlzYWJsZWQ9e0Jvb2xlYW4odmlkZW9GaWxlKX1cbiAgICAgICAgZmlsZT17aW1nRmlsZX1cbiAgICAgICAgY29tcG9uZW50PXtVcGxvYWRGaWxlSW5wdXR9XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25GaWxlQ2hhbmdlKGUsIHNldEZpZWxkVmFsdWUsIHNldEltZ0ZpbGUpfVxuICAgICAgICBpY29uPXs8SW1hZ2VTdmcgLz59XG4gICAgICAvPlxuICAgICAgPEZpZWxkXG4gICAgICAgIGZpbGVUeXBlPVwiZmlsZVwiXG4gICAgICAgIG5hbWU9XCJ0b3BpY1ZpZGVvXCJcbiAgICAgICAgZGlzYWJsZWQ9e0Jvb2xlYW4oaW1nRmlsZSl9XG4gICAgICAgIGZpbGU9e3ZpZGVvRmlsZX1cbiAgICAgICAgY29tcG9uZW50PXtVcGxvYWRGaWxlSW5wdXR9XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25GaWxlQ2hhbmdlKGUsIHNldEZpZWxkVmFsdWUsIHNldFZpZGVvRmlsZSl9XG4gICAgICAgIGljb249ezxWaWRlb1N2ZyAvPn1cbiAgICAgIC8+XG4gICAgPC9Db250YWluZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXBsb2FkTWVkaWFDb250YWluZXJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpYCBcbiAgbWFyZ2luLWxlZnQ6IDEuM2VtO1xuICBwYWRkaW5nOiAuNWVtO1xuICBib3JkZXItcmFkaXVzOiAuNWVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3gtc2hhZG93OiAgNXB4IDVweCA1cHggLTNweCAjQUFBQUFBO1xuICBiYWNrZ3JvdW5kOiAjRTVFNUU1O1xuXG5gXG4iLCJpbXBvcnQgeyB5b3VUdWJlVXJsVmFsaWRhdG9yLCB0d2l0dGVyVXJsVmFsaWR0b3IgfSBmcm9tICcuLi8uLi8uLi9nZW5lcmljL3JlZ2V4L3VybFZhbGlkYXRvcnMnXG5cbmV4cG9ydCBkZWZhdWx0ICh1cmwpID0+IHtcbiAgY29uc3QgeXRVcmwgPSB1cmwuc2VhcmNoKHlvdVR1YmVVcmxWYWxpZGF0b3IpID09PSAtMSA/IG51bGwgOiAneXRVcmwnXG4gIGNvbnN0IHR3ZWV0VXJsID0gdXJsLnNlYXJjaCh0d2l0dGVyVXJsVmFsaWR0b3IpID09PSAtMSA/IG51bGwgOiAndHdlZXRVcmwnXG4gIHJldHVybiB5dFVybCB8fCB0d2VldFVybFxufVxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY29uc3QgW2NvbnRlbnRVcmwsIHNldENvbnRlbnRVcmxdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgZ2V0Q29udGVudFVybE9uQmx1ciA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XG4gICAgc2V0Q29udGVudFVybChlLmN1cnJlbnRUYXJnZXQudmFsdWUpXG4gIH0sIFtdKVxuXG4gIHJldHVybiB7IGNvbnRlbnRVcmwsIGdldENvbnRlbnRVcmxPbkJsdXIgfVxufVxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5J1xuXG5pbXBvcnQgdG9waWNBY3Rpb25zIGZyb20gJy4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvdG9waWNzL2luZGV4J1xuaW1wb3J0IHVzZUJpbmREaXNwYXRjaCBmcm9tICcuLi8uLi9ob29rcy9yZWR1eC91c2VCaW5kRGlzcGF0Y2gnXG5cbmltcG9ydCBjaGVja0xpbmtUeXBlIGZyb20gJy4vY2hlY2tMaW5rVHlwZSdcblxuLy8gY29uc3QgcmVzb2x2ZUFmdGVyMTUwMG1zID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMTUwMCkpXG5cbmV4cG9ydCBkZWZhdWx0IChtZXRhRGF0YSkgPT4ge1xuICBjb25zdCB7IGNyZWF0ZVRvcGljLCB1cGxvYWRUb3BpY01lZGlhIH0gPSB1c2VCaW5kRGlzcGF0Y2godG9waWNBY3Rpb25zKVxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3IoKHMpID0+IHMuc2Vzc2lvbi5jdXJyZW50VXNlcilcblxuICByZXR1cm4gdXNlQ2FsbGJhY2soKHZhbHVlcywgeyBzZXRTdWJtaXR0aW5nLCByZXNldEZvcm0gfSwgY29udGVudCkgPT4ge1xuICAgIGNvbnN0IGVMaW5rcyA9IE9iamVjdC5lbnRyaWVzKHZhbHVlcykubWFwKChbaywgdl0pID0+IChrLmluY2x1ZGVzKCdFdmlkZW5jZScpID8gdiA6IG51bGwpKS5maWx0ZXIoQm9vbGVhbilcbiAgICBjb25zdCBsaW5rVHlwZSA9IGNoZWNrTGlua1R5cGUodmFsdWVzLmNvbnRlbnRVcmwpXG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIC4uLnZhbHVlcyxcbiAgICAgIGRlc2NyaXB0aW9uOiBjb250ZW50LFxuICAgICAgY3JlYXRlZEJ5OiB1c2VyLnVzZXJuYW1lLFxuICAgICAgdXNlcklkOiB1c2VyLmlkLFxuICAgICAgZXZpZGVuY2VMaW5rczogZUxpbmtzLFxuICAgICAgW2xpbmtUeXBlXTogdmFsdWVzLmNvbnRlbnRVcmwsXG4gICAgICB0aHVtYkltZ1VybDogbWV0YURhdGEub2dJbWFnZT8udXJsLFxuICAgIH1cbiAgICBpZiAodmFsdWVzLmZpbGUgaW5zdGFuY2VvZiBGaWxlKSB7XG4gICAgICBjb25zdCBbZmlsZVR5cGUsIGZpbGVGb3JtYXRdID0gdmFsdWVzLmZpbGUudHlwZS5zcGxpdCgnLycpXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ltYWdlJywgdmFsdWVzLmZpbGUpXG4gICAgICB1cGxvYWRUb3BpY01lZGlhKGZvcm1EYXRhLCBmaWxlVHlwZSwgZmlsZUZvcm1hdCwgZGF0YSlcbiAgICB9IGVsc2Uge1xuICAgICAgdG9hc3QucHJvbWlzZShcbiAgICAgICAgY3JlYXRlVG9waWMoZGF0YSksXG4gICAgICAgIHtcbiAgICAgICAgICBwZW5kaW5nOiAnQ3JlYXRpbmcgVG9waWMuLi4nLFxuICAgICAgICAgIHN1Y2Nlc3M6ICdUb3BpYyBTdWNjZXNzZnVsbHkgQ3JlYXRlZCEnLFxuICAgICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgICByZW5kZXIoeyBkYXRhOiBlcnJvckRhdGEgfSkge1xuICAgICAgICAgICAgICBjb25zdCB7IHJlc3BvbnNlIH0gPSBlcnJvckRhdGFcbiAgICAgICAgICAgICAgY29uc3QgeyBkYXRhOiByZXNwb25zZURhdGEgfSA9IHJlc3BvbnNlXG4gICAgICAgICAgICAgIHJldHVybiBgJHtyZXNwb25zZURhdGEubXNnfSDwn6SvIGBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIClcbiAgICB9XG4gICAgc2V0U3VibWl0dGluZyhmYWxzZSlcbiAgICByZXNldEZvcm0oe30pXG4gIH0sIFttZXRhRGF0YV0pXG59XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB1c2VDYWxsYmFjaygoZSwgc2V0RmllbGRWYWx1ZSwgc2V0U3RhdGVWYWx1ZSkgPT4ge1xuICBzZXRGaWVsZFZhbHVlKGUudGFyZ2V0LmRhdGFzZXQuZmlsZXR5cGUsIGUuY3VycmVudFRhcmdldC5maWxlc1swXSlcbiAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICBjb25zdCBjdXJyRmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdXG4gIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XG4gICAgc2V0U3RhdGVWYWx1ZShyZWFkZXIucmVzdWx0KVxuICB9XG4gIHJlYWRlci5yZWFkQXNEYXRhVVJMKGN1cnJGaWxlKVxufSwgW10pXG4iXSwibmFtZXMiOlsidCIsInYiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNldFRpbWVvdXQiLCJiaW5kIiwieW91VHViZVVybFZhbGlkYXRvciIsIlJlZ0V4cCIsInR3aXR0ZXJVcmxWYWxpZHRvciIsIlJlYWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJ1c2VMb2NhdGlvbiIsIk1vZGFsIiwiRm9ybWlrIiwiQnV0dG9uIiwiVXNlckluZm9IZWFkZXIiLCJBbmltYXRlZENoZWNrbWFyayIsIlJpY2hUZXh0RWRpdG9yIiwidXNlU2V0SW5uZXJIdG1sIiwidXNlR2V0U3RhdGVFZmZlY3QiLCJ1c2VIYW5kbGVTdWJtaXQiLCJnZXRUaW1lU2luY2UiLCJjaGVja1RveGljaXR5IiwiRm9ybUNvbnRhaW5lciIsIklucHV0V3JhcHBlciIsIkNvbnRhaW5lciIsIkRlc2NyaXB0aW9uIiwiVG94aWNpdHlDb250cm9scyIsInV1aWRSZWdFeCIsIkNyZWF0ZUNvbW1lbnRGb3JtIiwibW9kYWxQcm9wcyIsImRlc2NSZWYiLCJyYXdIVE1MIiwiY29udGVudCIsInJhd1RleHQiLCJyaWNoVGV4dEVkaXRvckRhdGEiLCJzZXRSaWNoVGV4dEVkaXRvckRhdGEiLCJ0b3hpY2l0eVNjb3JlIiwic2V0VG94aWNpdHlTY29yZSIsInBhdGhuYW1lIiwiY29udGVudElkIiwibWF0Y2giLCJzdWJ0b3BpY0lkIiwiY29tcFN0YXRlIiwiaGFuZGxlU3VibWl0IiwiaHRtbENvbnRlbnQiLCJwb3NpdGl2ZSIsIm5lZ2F0aXZlIiwibmV1dHJhbCIsImVycm9ycyIsImxlbmd0aCIsImlzU3VibWl0dGluZyIsImNyZWF0ZWRCeUljb25TcmMiLCJjcmVhdGVkQnkiLCJ0aW1lIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJ0aGVuIiwicmVzIiwiZGF0YSIsIlNFVkVSRV9UT1hJQ0lUWSIsInRvRml4ZWQiLCJzdHlsZWQiLCJGb3JtIiwidXNlTWVtbyIsInVzZVNlbGVjdG9yIiwiZmluZENvbW1lbnRDb250ZW50IiwiY29tbWVudCIsImlkIiwidmlzaXRlZCIsIlNldCIsInEiLCJjdXJyTm9kZSIsInNoaWZ0IiwiYWRkIiwiY2hpbGRyZW4iLCJmb3JFYWNoIiwiY2hpbGQiLCJoYXMiLCJwdXNoIiwidG9waWNJZCIsInVzZXIiLCJzIiwic2Vzc2lvbiIsImN1cnJlbnRVc2VyIiwidG9waWMiLCJ0b3BpY3MiLCJsaXN0IiwiZmluZCIsImNvbW1lbnRzIiwiYyIsInJvb3RQYXJlbnRDb21tZW50SWQiLCJjb21tZW50SWQiLCJ0cmlidW5hbENvbW1lbnQiLCJ0cmlidW5hbENvbW1lbnRzIiwiY3JlYXRlZEF0IiwiY29tbWVudENvbnRlbnQiLCJyZXBseVR5cGUiLCJkZXNjcmlwdGlvbiIsInVzZXJuYW1lIiwidHlwZSIsInVzZUNhbGxiYWNrIiwidG9hc3QiLCJ1c2VCaW5kRGlzcGF0Y2giLCJjb21tZW50QWN0aW9ucyIsInRyaWJ1bmFsQ29tbWVudEFjdGlvbnMiLCJkZWxheSIsInVzZURldGVjdEN1cnJlbnRQYWdlIiwiaXNUcmlidW5hbENvbW1lbnQiLCJpc09uVHJpYnVuYWxQYWdlIiwidHJpYnVuYWxDb21tZW50VW5kZXJSZXZpZXdJZCIsImlzUGFyZW50VHJpYnVuYWxDb21tZW50VW5kZXJSZXZpZXciLCJwYXJlbnRJZCIsInJvb3RJZCIsImNyZWF0ZUNvbW1lbnQiLCJjcmVhdGVUcmlidW5hbENvbW1lbnQiLCJ2YWx1ZXMiLCJzZXRTdWJtaXR0aW5nIiwicmVzZXRGb3JtIiwicHJvbWlzZSIsImFsbCIsInBlbmRpbmciLCJzdWNjZXNzIiwicmVuZGVyIiwiaWNvbiIsImVycm9yIiwidG94aWNpdHlTdGF0dXMiLCJtZW1lRmxhZyIsIklucHV0IiwiY29sb3IiLCJ0ZXh0IiwiQm9vbGVhbiIsIm1hcmdpbkxlZnQiLCJ3aWR0aCIsImhlaWdodCIsImtleWZyYW1lcyIsInNwbGFzaCIsInByaW1hcnkiLCJwcm9wcyIsIkVycm9yTWVzc2FnZSIsIkZhZGUiLCJTdHlsZWRTZWxlY3QiLCJMYWJlbCIsIkVycm9yIiwiU2VsZWN0IiwiZmllbGQiLCJmb3JtIiwicGxhY2Vob2xkZXIiLCJzZXRGaWVsZFZhbHVlIiwic2V0RmllbGRUb3VjaGVkIiwib3BlbiIsImlzT3BlbiIsInZhbHVlIiwic2V0VmFsdWUiLCJtZXRhRGF0YSIsImdldEZpZWxkTWV0YSIsIm5hbWUiLCJzaG93RXJyb3IiLCJ0b3VjaGVkIiwiZW51bXMiLCJzdGF0ZSIsInRvcGljQ2F0ZWdvcmllcyIsIm9uQ2hhbmdlIiwiZSIsInNldEZpZWxkIiwidGFyZ2V0IiwibWFwIiwidmFsIiwiT3ZlcmxheSIsInVzZUVmZmVjdCIsIlJlYWN0UXVpbGwiLCJFbW9qaUJ1dHRvbiIsIkVtb2ppQ29udGFpbmVyIiwic2V0Q29udGVudCIsImlzSGlkZGVuIiwic2V0SXNIaWRkZW4iLCJtb2R1bGVzIiwidG9vbGJhciIsImNvbnRhaW5lciIsImhhbmRsZU9uQ2hhbmdlIiwiY3VyckNvbnRlbnQiLCJkZWx0YSIsInNvdXJjZSIsImVkaXRvciIsImdldEhUTUwiLCJnZXRDb250ZW50cyIsImdldFRleHQiLCJwaWNrZXJSZWYiLCJxdWlsbFJlZiIsImVtb2ppUGlja2VyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiY3VycmVudCIsImN1cnNvclBvc2l0aW9uIiwiZ2V0U2VsZWN0aW9uIiwiaW5kZXgiLCJnZXRMZW5ndGgiLCJpbnNlcnRUZXh0IiwiZGV0YWlsIiwiZW1vamkiLCJzZXRTZWxlY3Rpb24iLCJmb3JtYXRzIiwicHJldiIsIkN1c3RvbUJ1dHRvbiIsIkN1c3RvbVRvb2xiYXIiLCJqdXN0aWZ5Q29udGVudCIsImRpdiIsIkNvbGxhcHNlIiwiRmllbGQiLCJ1c2VHZXRMaW5rTWV0YURhdGFPbkJsdXIiLCJ1aUFjdGlvbnMiLCJ0b3BpY0FjdGlvbnMiLCJUaGVtZVRvb2x0aXAiLCJVcGxvYWRNZWRpYUNvbnRhaW5lciIsIkRpc3BsYXlNZWRpYSIsIkxlZnQiLCJSaWdodCIsIkZsZXhEaXYiLCJJbnB1dHNDb250YWluZXIiLCJBcnJvdyIsIkxpbmUiLCJEb3duQXJyb3dDaXJjbGVTdmciLCJDcmVhdGVTdWJUb3BpY0Zvcm0iLCJzZXRPcGVuIiwiaW1nRmlsZSIsInNldEltZ0ZpbGUiLCJ2aWRlb0ZpbGUiLCJzZXRWaWRlb0ZpbGUiLCJyb3RhdGUiLCJzZXRSb3RhdGUiLCJnZXRMaW5rTWV0YURhdGFPbkJsdXIiLCJnZXRUb3BpYyIsImNsb3NlTW9kYWwiLCJ0aXRsZSIsInBhcmFtcyIsIndoaXRlU3BhY2UiLCJTdXBwbGVtZW50YWxJbmZvcm1hdGlvbiIsInVybCIsInl0VXJsIiwic2VhcmNoIiwidHdlZXRVcmwiLCJnZXRMaW5rTWV0YURhdGEiLCJzZXRNZXRhRGF0YSIsImN1cnJlbnRUYXJnZXQiLCJzdWJ0b3BpY0FjdGlvbnMiLCJjaGVja0xpbmtUeXBlIiwiY3JlYXRlU3ViVG9waWMiLCJ1cGxvYWRUb3BpY01lZGlhIiwiZUxpbmtzIiwiT2JqZWN0IiwiZW50cmllcyIsImsiLCJpbmNsdWRlcyIsImZpbHRlciIsImxpbmtUeXBlIiwiY29udGVudFVybCIsInVzZXJJZCIsImV2aWRlbmNlTGlua3MiLCJvZ0ltYWdlIiwiZmlsZSIsIkZpbGUiLCJzcGxpdCIsImZpbGVUeXBlIiwiZmlsZUZvcm1hdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJ1c2VDb25maWdGb3JtRXJyb3JzIiwiTGlua1R5cGVJY29uIiwiU2VjdGlvbkRlc2NyaXB0aW9uIiwiTW9iaWxlT25seUxpbmUiLCJJTklUX1RPUElDX0ZPUk1fVkFMVUVTIiwiVkFMSURBVElPTlMiLCJSRVFVSVJFRCIsInN1bW1hcnkiLCJNSU5fTEVOR1RIIiwiY2F0ZWdvcnkiLCJDcmVhdGVUb3BpY0Zvcm0iLCJyaWNoVGV4dEVkaXRvckNvbnRlbnQiLCJzZXRSaWNoVGV4dEVkaXRvckNvbnRlbnQiLCJ2YWxpZGF0b3IiLCJnZXRDb250ZW50VXJsT25CbHVyIiwiT0dGYXZpY29uIiwiSXNMb2FkaW5nSE9DIiwic2V0SXNMb2FkaW5nIiwiZmF2aWNvbiIsIlVwbG9hZElucHV0IiwiVXBsb2FkSW1hZ2VJbnB1dCIsImRpc2FibGVkIiwiVXBsb2FkRmlsZUlucHV0IiwiVmlkZW9TdmciLCJJbWFnZVN2ZyIsInVzZU9uRmlsZUNoYW5nZUhhbmRsZXIiLCJvbkZpbGVDaGFuZ2UiLCJzZXRDb250ZW50VXJsIiwiY3JlYXRlVG9waWMiLCJlcnJvckRhdGEiLCJyZXNwb25zZSIsInJlc3BvbnNlRGF0YSIsIm1zZyIsInNldFN0YXRlVmFsdWUiLCJkYXRhc2V0IiwiZmlsZXR5cGUiLCJmaWxlcyIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJjdXJyRmlsZSIsIm9ubG9hZGVuZCIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiXSwic291cmNlUm9vdCI6IiJ9