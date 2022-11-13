"use strict";
(self["webpackChunkcivil"] = self["webpackChunkcivil"] || []).push([["tribunal"],{

/***/ "./src/api/v1/recs/recs_api_util.js":
/*!******************************************!*\
  !*** ./src/api/v1/recs/recs_api_util.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAllRecs": () => (/* binding */ getAllRecs)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _endpoints_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../endpoints/endpoints */ "./src/api/endpoints/endpoints.js");


var getAllRecs = function getAllRecs(targetContentId) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().get("".concat(_endpoints_endpoints__WEBPACK_IMPORTED_MODULE_1__.BACKEND_DEV, "/recommendations?targetContentId=").concat(targetContentId));
};

/***/ }),

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

/***/ "./src/generic/regex/uuid.js":
/*!***********************************!*\
  !*** ./src/generic/regex/uuid.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uuidRegEx": () => (/* binding */ uuidRegEx)
/* harmony export */ });
var uuidRegEx = new RegExp(/\b[0-9a-f]{8}\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\b[0-9a-f]{12}\b/g);

/***/ }),

/***/ "./src/generic/time/calculateTimeLeft.js":
/*!***********************************************!*\
  !*** ./src/generic/time/calculateTimeLeft.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calculateTimeLeft": () => (/* binding */ calculateTimeLeft)
/* harmony export */ });
var calculateTimeLeft = function calculateTimeLeft(reportEndTime) {
  // const year = new Date().getFullYear()
  var difference = +new Date(reportEndTime) - +new Date();
  var timeLeft = {};
  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(difference / (1000 * 60 * 60) % 24),
      minutes: Math.floor(difference / 1000 / 60 % 60),
      seconds: Math.floor(difference / 1000 % 60)
    };
  }
  return timeLeft;
};

/***/ }),

/***/ "./src/pages/CommonComponents/ActionToolbars/CommentToolbar/Index.jsx":
/*!****************************************************************************!*\
  !*** ./src/pages/CommonComponents/ActionToolbars/CommentToolbar/Index.jsx ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/node_modules/react-router/dist/index.js");
/* harmony import */ var _components_UpVoteButton_Index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/UpVoteButton/Index */ "./src/pages/CommonComponents/ActionToolbars/components/UpVoteButton/Index.jsx");
/* harmony import */ var _components_DownVoteButton_Index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/DownVoteButton/Index */ "./src/pages/CommonComponents/ActionToolbars/components/DownVoteButton/Index.jsx");
/* harmony import */ var _components_CommentButton_Index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/CommentButton/Index */ "./src/pages/CommonComponents/ActionToolbars/CommentToolbar/components/CommentButton/Index.jsx");
/* harmony import */ var _components_CivilityButton_Index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/CivilityButton/Index */ "./src/pages/CommonComponents/ActionToolbars/CommentToolbar/components/CivilityButton/Index.jsx");
/* harmony import */ var _components_TribunalButton_Index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/TribunalButton/Index */ "./src/pages/CommonComponents/ActionToolbars/components/TribunalButton/Index.jsx");
/* harmony import */ var _Style_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Style/index */ "./src/pages/CommonComponents/ActionToolbars/Style/index.js");
/* harmony import */ var _enums_content_type__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../enums/content_type */ "./src/enums/content_type.js");

var _excluded = ["topicId", "subTopicId"];









var CommentActionToolbar = function CommentActionToolbar(_ref) {
  var likes = _ref.likes,
    comment = _ref.comment,
    user = _ref.user;
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useParams)(),
    topicId = _useParams.topicId,
    subTopicId = _useParams.subTopicId,
    params = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_useParams, _excluded);
  var isTribunalComment = comment.commentType;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_7__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_7__.Left, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_UpVoteButton_Index__WEBPACK_IMPORTED_MODULE_2__["default"], {
    content: comment,
    user: user,
    contentType: isTribunalComment ? _enums_content_type__WEBPACK_IMPORTED_MODULE_8__.TRIBUNAL_COMMENT : _enums_content_type__WEBPACK_IMPORTED_MODULE_8__.COMMENT
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, likes || 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_DownVoteButton_Index__WEBPACK_IMPORTED_MODULE_3__["default"], {
    content: comment,
    user: user,
    contentType: isTribunalComment ? _enums_content_type__WEBPACK_IMPORTED_MODULE_8__.TRIBUNAL_COMMENT : _enums_content_type__WEBPACK_IMPORTED_MODULE_8__.COMMENT
  }), params['*'] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_CommentButton_Index__WEBPACK_IMPORTED_MODULE_4__["default"], {
    comment: comment
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_CivilityButton_Index__WEBPACK_IMPORTED_MODULE_5__["default"], {
    comment: comment
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_7__.Right, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_TribunalButton_Index__WEBPACK_IMPORTED_MODULE_6__["default"], {
    contentId: comment === null || comment === void 0 ? void 0 : comment.id
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, likes || 0, ' ', "likes")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(CommentActionToolbar));

/***/ }),

/***/ "./src/pages/CommonComponents/ActionToolbars/CommentToolbar/components/CivilityButton/Index.jsx":
/*!******************************************************************************************************!*\
  !*** ./src/pages/CommonComponents/ActionToolbars/CommentToolbar/components/CivilityButton/Index.jsx ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Form_RangeSlider_Index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Form/RangeSlider/Index */ "./src/pages/CommonComponents/Form/RangeSlider/Index.jsx");
/* harmony import */ var _PopoverStickOnHover_Index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../PopoverStickOnHover/Index */ "./src/pages/CommonComponents/PopoverStickOnHover/Index.jsx");
/* harmony import */ var _hooks_useUpdateCommentCivility__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks/useUpdateCommentCivility */ "./src/pages/CommonComponents/ActionToolbars/CommentToolbar/components/CivilityButton/hooks/useUpdateCommentCivility.js");

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */




var CivilityButton = function CivilityButton(_ref) {
  var comment = _ref.comment;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
    showPopover = _useState2[0],
    setShowPopover = _useState2[1];
  var onClick = function onClick() {
    return setShowPopover(function (prev) {
      return !prev;
    });
  };
  var updateCommentCivility = (0,_hooks_useUpdateCommentCivility__WEBPACK_IMPORTED_MODULE_4__["default"])(comment);
  var Icon = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
    if (!comment || comment.civility === 0) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", {
      onClick: onClick,
      alt: "",
      src: "https://civil-dev.s3.us-west-1.amazonaws.com/assets/handshake.png"
    });
    if (comment.civility > 0) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", {
      onClick: onClick,
      alt: "",
      src: "https://civil-dev.s3.us-west-1.amazonaws.com/assets/handshake-clicked.png"
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", {
      alt: "",
      onClick: onClick,
      src: "https://civil-dev.s3.us-west-1.amazonaws.com/assets/no-handshake-clicked.png"
    });
  }, [comment]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_PopoverStickOnHover_Index__WEBPACK_IMPORTED_MODULE_3__["default"], {
    trigger: ['hover', 'click'],
    component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Form_RangeSlider_Index__WEBPACK_IMPORTED_MODULE_2__["default"], {
      civility: comment.civility,
      updateCommentCivility: updateCommentCivility
    }),
    placement: "top",
    onMouseEnter: function onMouseEnter() {},
    delay: 200,
    showPopover: showPopover,
    setShowPopover: setShowPopover
  }, Icon);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(CivilityButton));

/***/ }),

/***/ "./src/pages/CommonComponents/ActionToolbars/CommentToolbar/components/CivilityButton/hooks/useUpdateCommentCivility.js":
/*!******************************************************************************************************************************!*\
  !*** ./src/pages/CommonComponents/ActionToolbars/CommentToolbar/components/CivilityButton/hooks/useUpdateCommentCivility.js ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/node_modules/react-router/dist/index.js");
/* harmony import */ var _redux_actions_comments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../redux/actions/comments */ "./src/redux/actions/comments/index.js");
/* harmony import */ var _redux_actions_tribunal_comments_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../redux/actions/tribunal_comments/index */ "./src/redux/actions/tribunal_comments/index.js");
/* harmony import */ var _hooks_redux_useBindDispatch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../hooks/redux/useBindDispatch */ "./src/pages/hooks/redux/useBindDispatch.js");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (comment) {
  var _useLocation = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useLocation)(),
    pathname = _useLocation.pathname;
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (s) {
    return s.session.currentUser;
  });
  var _useBindDispatch = (0,_hooks_redux_useBindDispatch__WEBPACK_IMPORTED_MODULE_4__["default"])(_redux_actions_tribunal_comments_index__WEBPACK_IMPORTED_MODULE_3__["default"], _redux_actions_comments__WEBPACK_IMPORTED_MODULE_2__["default"]),
    updateCommentCivility = _useBindDispatch.updateCommentCivility,
    updateTribunalCommentCivility = _useBindDispatch.updateTribunalCommentCivility;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (e) {
    var isTribunal = pathname.includes('tribunal');
    var data = {
      givingUserId: user.id,
      receivingUserId: comment.createdById,
      commentId: comment.id,
      value: Number(e.currentTarget.value)
    };
    return isTribunal ? updateTribunalCommentCivility(data) : updateCommentCivility(data);
  }, [comment.civil]);
});

/***/ }),

/***/ "./src/pages/CommonComponents/ActionToolbars/CommentToolbar/components/CommentButton/Index.jsx":
/*!*****************************************************************************************************!*\
  !*** ./src/pages/CommonComponents/ActionToolbars/CommentToolbar/components/CommentButton/Index.jsx ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/node_modules/react-router/dist/index.js");
/* harmony import */ var _IconButton_Index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../IconButton/Index */ "./src/pages/CommonComponents/IconButton/Index.jsx");
/* harmony import */ var _svgs_svgs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../svgs/svgs */ "./src/svgs/svgs.jsx");
/* harmony import */ var _hooks_useOpenModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../hooks/useOpenModal */ "./src/pages/hooks/useOpenModal.js");
/* harmony import */ var _App_Modal_Index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../App/Modal/Index */ "./src/pages/App/Modal/Index.jsx");






var CommentButton = function CommentButton(_ref) {
  var comment = _ref.comment;
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useParams)(),
    contentId = _useParams.contentId;
  var openCommentModal = (0,_hooks_useOpenModal__WEBPACK_IMPORTED_MODULE_3__["default"])(_App_Modal_Index__WEBPACK_IMPORTED_MODULE_4__.REPLY, {
    replyType: comment.commentType ? 'TRIBUNAL_COMMENT_REPLY' : 'COMMENT_REPLY',
    commentId: comment.id,
    rootParentCommentId: comment.rootId || comment.id,
    commentType: comment.commentType,
    tribunalCommentUnderReviewId: contentId
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_IconButton_Index__WEBPACK_IMPORTED_MODULE_1__["default"], {
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_svgs_svgs__WEBPACK_IMPORTED_MODULE_2__.CommentSvg, null),
    onClick: openCommentModal
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(CommentButton));

/***/ }),

/***/ "./src/pages/CommonComponents/Form/RangeSlider/Index.jsx":
/*!***************************************************************!*\
  !*** ./src/pages/CommonComponents/Form/RangeSlider/Index.jsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useOnRangeChange__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hooks/useOnRangeChange */ "./src/pages/CommonComponents/Form/RangeSlider/hooks/useOnRangeChange.js");
/* harmony import */ var _Style_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Style/index */ "./src/pages/CommonComponents/Form/RangeSlider/Style/index.js");



var RangeSlider = function RangeSlider(_ref) {
  var civility = _ref.civility,
    updateCommentCivility = _ref.updateCommentCivility;
  var _useOnRangeChange = (0,_hooks_useOnRangeChange__WEBPACK_IMPORTED_MODULE_1__["default"])(),
    onSliderChange = _useOnRangeChange.onSliderChange,
    sliderValue = _useOnRangeChange.sliderValue;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_2__.Container, {
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_2__.Range, {
    sliderValue: sliderValue
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "range-value",
    id: "rangeV"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "range",
    min: -3,
    max: 3,
    step: 0.1,
    defaultValue: civility,
    onChange: onSliderChange,
    onMouseUp: updateCommentCivility,
    onTouchEnd: updateCommentCivility
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_2__.Message, null, sliderValue < 0 && "Removing ".concat(sliderValue, " Civility"), sliderValue > 0 && "Giving +".concat(sliderValue, " Civility")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(RangeSlider));

/***/ }),

/***/ "./src/pages/CommonComponents/Form/RangeSlider/Style/index.js":
/*!********************************************************************!*\
  !*** ./src/pages/CommonComponents/Form/RangeSlider/Style/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "Message": () => (/* binding */ Message),
/* harmony export */   "Range": () => (/* binding */ Range)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _templateObject, _templateObject2, _templateObject3;
/* eslint-disable no-tabs */


var Container = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  /* border: 1px solid black; */\n  height: 2.5vw;\n  width: 10vw;\n  display: flex;\n  align-items: center;\n"])));
var Message = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: absolute;\n  left: 50%;\n  bottom: 5%;\n  transform: translate(-50%);\n"])));
var Range = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(_templateObject3 || (_templateObject3 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  /* background: var(--m-primary-peripherals-color); */\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  /* border-radius: 5rem; */\n  box-shadow: 2px 5px 5px rgba(black, 0.3);\n\n  .range-value {\n    position: absolute;\n    top: -50%;\n  }\n  .range-value span {\n    width: 30px;\n    height: 24px;\n    line-height: 24px;\n    text-align: center;\n    background: var(--clerk-primary);\n    color: #fff;\n    font-size: 12px;\n    display: block;\n    position: absolute;\n    left: 50%;\n    transform: translate(-50%, 0);\n    border-radius: 6px;\n  }\n  .range-value span:before {\n    content: \"\";\n    position: absolute;\n    width: 0;\n    height: 0;\n    border-top: 10px solid var(--clerk-primary);\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    top: 100%;\n    left: 50%;\n    margin-left: -5px;\n    margin-top: -1px;\n  }\n\n  input[type=\"range\"] {\n    -webkit-appearance: none;\n    margin: 20px 0;\n    width: 100%;\n  }\n  input[type=\"range\"]:focus {\n    outline: none;\n  }\n  input[type=\"range\"]::-webkit-slider-runnable-track {\n    width: 100%;\n    height: 4px;\n    cursor: pointer;\n    animate: 0.2s;\n    background: ", ";\n    border-radius: 25px;\n  }\n  input[type=\"range\"]::-webkit-slider-thumb {\n    height: 20px;\n    width: 20px;\n    border-radius: 50%;\n    background: #fff;\n    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 1);\n    cursor: pointer;\n    -webkit-appearance: none;\n    margin-top: -8px;\n  }\n  input[type=\"range\"]:focus::-webkit-slider-runnable-track {\n    background: ", ";\n  }\n"])), function (_ref) {
  var sliderValue = _ref.sliderValue;
  if (sliderValue === -1 || sliderValue === -2) return 'var(--m-danger-color)';
  if (sliderValue === -3) return 'red';
  if (sliderValue === 1 || sliderValue === 2) return 'var(--m-primary-btn-color)';
  if (sliderValue === 3) return 'green';
  return 'var(--clerk-primary)';
}, function (_ref2) {
  var sliderValue = _ref2.sliderValue;
  if (sliderValue === -1 || sliderValue === -2) return 'var(--m-danger-color)';
  if (sliderValue === -3) return 'red';
  if (sliderValue === 1 || sliderValue === 2) return 'var(--m-primary-btn-color)';
  if (sliderValue === 3) return 'green';
  return 'var(--clerk-primary)';
});

/***/ }),

/***/ "./src/pages/CommonComponents/Form/RangeSlider/hooks/useOnRangeChange.js":
/*!*******************************************************************************!*\
  !*** ./src/pages/CommonComponents/Form/RangeSlider/hooks/useOnRangeChange.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

/* eslint-disable max-len */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
    sliderValue = _useState2[0],
    setSliderValue = _useState2[1];
  var onSliderChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (e) {
    var range = e.currentTarget;
    var rangeV = document.getElementById('rangeV');
    var newValue = Number((range.value - range.min) * 100 / (range.max - range.min));
    var newPosition = 10 - newValue * 0.2;
    rangeV.innerHTML = "<span>".concat(range.value, "</span>");
    rangeV.style.left = "calc(".concat(newValue, "% + (").concat(newPosition, "px))");
    setSliderValue(Number(range.value));
  }, []);
  return {
    onSliderChange: onSliderChange,
    sliderValue: sliderValue
  };
});

/***/ }),

/***/ "./src/pages/CommonComponents/PopoverStickOnHover/Index.jsx":
/*!******************************************************************!*\
  !*** ./src/pages/CommonComponents/PopoverStickOnHover/Index.jsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Overlay.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Popover.js");


var PopoverStickOnHover = function PopoverStickOnHover(_ref) {
  var delay = _ref.delay,
    onMouseEnter = _ref.onMouseEnter,
    children = _ref.children,
    component = _ref.component,
    placement = _ref.placement,
    showPopover = _ref.showPopover,
    setShowPopover = _ref.setShowPopover;
  var childNode = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var setTimeoutConst = null;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return function () {
      if (setTimeoutConst) {
        clearTimeout(setTimeoutConst);
      }
    };
  });
  var handleMouseEnter = function handleMouseEnter() {
    setTimeoutConst = setTimeout(function () {
      setShowPopover(true);
      onMouseEnter();
    }, delay);
  };
  var handleMouseLeave = function handleMouseLeave() {
    clearTimeout(setTimeoutConst);
    setShowPopover(false);
  };
  var displayChild = react__WEBPACK_IMPORTED_MODULE_0___default().Children.map(children, function (child) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(child, {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      ref: function ref(node) {
        childNode.current = node;
        var ref = child.ref;
        if (typeof ref === 'function') {
          ref(node);
        }
      }
    });
  })[0];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, displayChild, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"], {
    show: showPopover,
    placement: placement,
    target: childNode,
    shouldUpdatePosition: true,
    trigger: ['hover', 'click']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onMouseEnter: function onMouseEnter() {
      setShowPopover(true);
    },
    onMouseLeave: handleMouseLeave,
    id: "popover",
    className: "sticky-popover",
    trigger: ['hover', 'click']
  }, component)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(PopoverStickOnHover));

/***/ }),

/***/ "./src/pages/MainContent/components/NotificationsPage/Index.jsx":
/*!**********************************************************************!*\
  !*** ./src/pages/MainContent/components/NotificationsPage/Index.jsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _UserInformationDisplay_Index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../UserInformationDisplay/Index */ "./src/pages/UserInformationDisplay/Index.jsx");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Style */ "./src/pages/MainContent/Style/index.js");
/* harmony import */ var _components_NotificationItem_Index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/NotificationItem/Index */ "./src/pages/MainContent/components/NotificationsPage/components/NotificationItem/Index.jsx");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Style */ "./src/pages/MainContent/components/NotificationsPage/Style/index.js");






var Notifications = function Notifications() {
  var notifications = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (s) {
    return s.notifications.userNotificationsList;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_3__.HomePageGrid, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_3__.Left, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_UserInformationDisplay_Index__WEBPACK_IMPORTED_MODULE_2__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_3__.Middle, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_5__.Container, {
    id: "notifications-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_5__.BorderContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_5__.Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Recent Notifications")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_5__.NotificationList, null, notifications.map(function (notification) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_NotificationItem_Index__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: notification.id,
      notification: notification
    });
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_3__.Right, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, ".")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Notifications);

/***/ }),

/***/ "./src/pages/MainContent/components/NotificationsPage/Style/index.js":
/*!***************************************************************************!*\
  !*** ./src/pages/MainContent/components/NotificationsPage/Style/index.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BorderContainer": () => (/* binding */ BorderContainer),
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "Header": () => (/* binding */ Header),
/* harmony export */   "NotificationList": () => (/* binding */ NotificationList)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

var BorderContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  border: 1px solid gray;\n  border-top: none;\n  z-index: 9999;\n  background-color: white;\n  min-height: calc(100vh - var(--nav-size));\n\n"])));
var NotificationList = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('ul')(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex-wrap: wrap;\n  padding: 0;\n  padding-bottom: 30vh;\n  background-color: #F0F2F5;\n  background-color: white;\n\n"])));
var Container = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(_templateObject3 || (_templateObject3 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100%;\n"])));
var Header = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('header')(_templateObject4 || (_templateObject4 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([" \n  width: 100%;\n  border-bottom: 1px solid gray;\n  padding: 2vw 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  p {\n    margin: 0 1vw;\n    font-size: 1.1vw;\n    display: flex;\n    align-items: center;\n  }\n"])));

/***/ }),

/***/ "./src/pages/MainContent/components/NotificationsPage/components/CommentCivilityNotification/Index.jsx":
/*!*************************************************************************************************************!*\
  !*** ./src/pages/MainContent/components/NotificationsPage/components/CommentCivilityNotification/Index.jsx ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/node_modules/react-router/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _MenuTime_Index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../MenuTime/Index */ "./src/pages/MainContent/components/NotificationsPage/components/MenuTime/Index.jsx");
/* harmony import */ var _CommonComponents_UsernameAndTag_Index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../CommonComponents/UsernameAndTag/Index */ "./src/pages/CommonComponents/UsernameAndTag/Index.jsx");
/* harmony import */ var _generic_string_dateFormatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../generic/string/dateFormatter */ "./src/generic/string/dateFormatter.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Style */ "./src/pages/MainContent/components/NotificationsPage/components/Style/index.js");
/* harmony import */ var _enums_notification_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../enums/notification_types */ "./src/enums/notification_types.js");







var CommentCivilityNotifcation = function CommentCivilityNotifcation(_ref) {
  var notification = _ref.notification;
  var givingUserId = notification.givingUserId,
    givingUserUsername = notification.givingUserUsername,
    givingUserIconSrc = notification.givingUserIconSrc,
    givingUserTag = notification.givingUserTag,
    topicId = notification.topicId,
    subtopicId = notification.subtopicId,
    commentId = notification.commentId,
    createdAt = notification.createdAt,
    old = notification.old,
    newVal = notification["new"],
    id = notification.id;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useNavigate)();
  var handleClick = function handleClick(e) {
    e.stopPropagation();
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_4__.LeftContainer, {
    onClick: function onClick() {
      return navigate("/user/".concat(givingUserId));
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_4__.ProfileIcon, {
    src: givingUserIconSrc
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CommonComponents_UsernameAndTag_Index__WEBPACK_IMPORTED_MODULE_2__["default"], {
    userId: givingUserId,
    usernameDisplay: givingUserUsername,
    userTag: givingUserTag
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_4__.MiddleContainer, null, notification["new"] < 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: "",
    src: "https://civil-dev.s3.us-west-1.amazonaws.com/assets/no-handshake-clicked.png"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: "",
    src: "https://civil-dev.s3.us-west-1.amazonaws.com/assets/handshake-clicked.png"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, givingUserUsername), ' ', "Updated Civility Given For Your", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Link, {
    onClick: handleClick,
    to: "/topics/".concat(topicId, "/subtopics/").concat(subtopicId, "/comments/").concat(commentId)
  }, "Comment"), ' ', "from ".concat(old.toFixed(2), " to ").concat(newVal.toFixed(2), " Civility ").concat(old < newVal ? '😊' : '☹️'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MenuTime_Index__WEBPACK_IMPORTED_MODULE_1__.MenuTime, {
    time: (0,_generic_string_dateFormatter__WEBPACK_IMPORTED_MODULE_3__.getTimeSince)(createdAt),
    id: id,
    eventType: _enums_notification_types__WEBPACK_IMPORTED_MODULE_5__.CommentCivilityGiven
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommentCivilityNotifcation);

/***/ }),

/***/ "./src/pages/MainContent/components/NotificationsPage/components/FollowNotification/Index.jsx":
/*!****************************************************************************************************!*\
  !*** ./src/pages/MainContent/components/NotificationsPage/components/FollowNotification/Index.jsx ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/node_modules/react-router/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _MenuTime_Index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../MenuTime/Index */ "./src/pages/MainContent/components/NotificationsPage/components/MenuTime/Index.jsx");
/* harmony import */ var _generic_string_dateFormatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../generic/string/dateFormatter */ "./src/generic/string/dateFormatter.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Style */ "./src/pages/MainContent/components/NotificationsPage/components/Style/index.js");
/* harmony import */ var _CommonComponents_UsernameAndTag_Index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../CommonComponents/UsernameAndTag/Index */ "./src/pages/CommonComponents/UsernameAndTag/Index.jsx");
/* harmony import */ var _enums_notification_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../enums/notification_types */ "./src/enums/notification_types.js");
/* harmony import */ var _svgs_svgs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../svgs/svgs */ "./src/svgs/svgs.jsx");








var FollowNotifcation = function FollowNotifcation(_ref) {
  var notification = _ref.notification;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useNavigate)();
  var givingUserId = notification.givingUserId,
    givingUserUsername = notification.givingUserUsername,
    givingUserIconSrc = notification.givingUserIconSrc,
    givingUserTag = notification.givingUserTag,
    createdAt = notification.createdAt,
    id = notification.id;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_3__.LeftContainer, {
    onClick: function onClick() {
      return navigate("/user/".concat(givingUserId));
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_3__.ProfileIcon, {
    src: givingUserIconSrc
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CommonComponents_UsernameAndTag_Index__WEBPACK_IMPORTED_MODULE_4__["default"], {
    userId: givingUserId,
    usernameDisplay: givingUserUsername,
    userTag: givingUserTag
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_3__.MiddleContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_svgs_svgs__WEBPACK_IMPORTED_MODULE_6__.AddFriendSvg, {
    size: "15vh"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Link, {
    to: "/user/".concat(givingUserId)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, givingUserUsername)), ' ', "Followed You")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MenuTime_Index__WEBPACK_IMPORTED_MODULE_1__.MenuTime, {
    time: (0,_generic_string_dateFormatter__WEBPACK_IMPORTED_MODULE_2__.getTimeSince)(createdAt),
    id: id,
    eventType: _enums_notification_types__WEBPACK_IMPORTED_MODULE_5__.NewFollower
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FollowNotifcation);

/***/ }),

/***/ "./src/pages/MainContent/components/NotificationsPage/components/LikeNotification/Index.jsx":
/*!**************************************************************************************************!*\
  !*** ./src/pages/MainContent/components/NotificationsPage/components/LikeNotification/Index.jsx ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/node_modules/react-router/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _MenuTime_Index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../MenuTime/Index */ "./src/pages/MainContent/components/NotificationsPage/components/MenuTime/Index.jsx");
/* harmony import */ var _generic_string_dateFormatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../generic/string/dateFormatter */ "./src/generic/string/dateFormatter.js");
/* harmony import */ var _CommonComponents_UsernameAndTag_Index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../CommonComponents/UsernameAndTag/Index */ "./src/pages/CommonComponents/UsernameAndTag/Index.jsx");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Style */ "./src/pages/MainContent/components/NotificationsPage/components/Style/index.js");
/* harmony import */ var _enums_notification_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../enums/notification_types */ "./src/enums/notification_types.js");
/* harmony import */ var _svgs_svgs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../svgs/svgs */ "./src/svgs/svgs.jsx");








var CommentLikeNotification = function CommentLikeNotification(_ref) {
  var notification = _ref.notification;
  var givingUserId = notification.givingUserId,
    givingUserUsername = notification.givingUserUsername,
    givingUserIconSrc = notification.givingUserIconSrc,
    givingUserTag = notification.givingUserTag,
    topicId = notification.topicId,
    subtopicId = notification.subtopicId,
    commentId = notification.commentId;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useNavigate)();
  var handleClick = function handleClick(e) {
    e.stopPropagation();
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_4__.LeftContainer, {
    onClick: function onClick() {
      return navigate("/user/".concat(givingUserId));
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_4__.ProfileIcon, {
    src: givingUserIconSrc
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CommonComponents_UsernameAndTag_Index__WEBPACK_IMPORTED_MODULE_3__["default"], {
    userId: givingUserId,
    usernameDisplay: givingUserUsername,
    userTag: givingUserTag
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_4__.MiddleContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, givingUserUsername), ' ', "Liked Your", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Link, {
    onClick: handleClick,
    to: "/topics/".concat(topicId, "/subtopics/").concat(subtopicId, "/comments/").concat(commentId)
  }, "Comment!"), ' ', "\uD83D\uDE0A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_svgs_svgs__WEBPACK_IMPORTED_MODULE_6__.LikeClickedSvg, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MenuTime_Index__WEBPACK_IMPORTED_MODULE_1__.MenuTime, {
    time: (0,_generic_string_dateFormatter__WEBPACK_IMPORTED_MODULE_2__.getTimeSince)(notification.createdAt),
    id: notification.id,
    eventType: _enums_notification_types__WEBPACK_IMPORTED_MODULE_5__.CommentLike
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommentLikeNotification);

/***/ }),

/***/ "./src/pages/MainContent/components/NotificationsPage/components/MenuTime/Index.jsx":
/*!******************************************************************************************!*\
  !*** ./src/pages/MainContent/components/NotificationsPage/components/MenuTime/Index.jsx ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuTime": () => (/* binding */ MenuTime)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _svgs_svgs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../svgs/svgs */ "./src/svgs/svgs.jsx");
/* harmony import */ var _redux_actions_notifications_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../redux/actions/notifications/index */ "./src/redux/actions/notifications/index.js");
/* harmony import */ var _hooks_redux_useBindDispatch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../hooks/redux/useBindDispatch */ "./src/pages/hooks/redux/useBindDispatch.js");
/* harmony import */ var _Style_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Style/index */ "./src/pages/MainContent/components/NotificationsPage/components/MenuTime/Style/index.js");






var MenuTime = function MenuTime(_ref) {
  var time = _ref.time,
    id = _ref.id,
    eventType = _ref.eventType;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var _useBindDispatch = (0,_hooks_redux_useBindDispatch__WEBPACK_IMPORTED_MODULE_4__["default"])(_redux_actions_notifications_index__WEBPACK_IMPORTED_MODULE_3__["default"]),
    updateNotificationToRead = _useBindDispatch.updateNotificationToRead,
    deleteNotification = _useBindDispatch.deleteNotification;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_5__.MenuTimeContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_5__.MenuIconContainer, {
    onClick: function onClick(e) {
      e.stopPropagation();
      setIsOpen(function (prev) {
        return !prev;
      });
      var eventListener = function eventListener() {
        setIsOpen(function (prev) {
          return !prev;
        });
        document.getElementById('notifications-container').removeEventListener('click', eventListener);
      };
      document.getElementById('notifications-container').addEventListener('click', eventListener);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_svgs_svgs__WEBPACK_IMPORTED_MODULE_2__.VerticalMenuDotsSvg, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_5__.ActionMenu, {
    isOpen: isOpen,
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_5__.ActionMenuItem, {
    onClick: function onClick() {
      return updateNotificationToRead(eventType, id);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_svgs_svgs__WEBPACK_IMPORTED_MODULE_2__.ReadSvg, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, "Mark As Read")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_5__.ActionMenuItem, {
    onClick: function onClick() {
      return deleteNotification(eventType, id);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_svgs_svgs__WEBPACK_IMPORTED_MODULE_2__.DeleteSvg, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, "Delete Notification")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_5__.Time, null, time));
};

/***/ }),

/***/ "./src/pages/MainContent/components/NotificationsPage/components/MenuTime/Style/index.js":
/*!***********************************************************************************************!*\
  !*** ./src/pages/MainContent/components/NotificationsPage/components/MenuTime/Style/index.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionMenu": () => (/* binding */ ActionMenu),
/* harmony export */   "ActionMenuItem": () => (/* binding */ ActionMenuItem),
/* harmony export */   "MenuIconContainer": () => (/* binding */ MenuIconContainer),
/* harmony export */   "MenuTimeContainer": () => (/* binding */ MenuTimeContainer),
/* harmony export */   "Time": () => (/* binding */ Time)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

var MenuTimeContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([" \n  z-index: 99999;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: space-between;\n  align-items: flex-end;\n  padding: 5px 0;\n  width: 8%;\n  border-left: 1px solid lightgray;\n  border-color: rgba(200,200,200,0.25);\n\n"])));
var Time = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('span')(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  color: gray;\n  font-size: 1vw;\n  padding: 0 10px;\n"])));
var MenuIconContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(_templateObject3 || (_templateObject3 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([" \n  position: relative;\n  padding: 10px;\n  background-color: lightgray;\n  border-radius: .1vw;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #2cdd9b;\n  background-color: #e5f7f0;\n  border-color: #d8f7eb;\n  transition: all 1s;\n  cursor: pointer;\n  :hover {\n    filter: brightness(0.85);\n  }\n\n"])));
var ActionMenu = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('ul')(_templateObject4 || (_templateObject4 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  z-index: 99999;\n  display: flex;\n  border: .5px solid lightgray;\n  border-color: rgba(200,200,200,0.25) ;\n  flex-direction: column;\n  justify-content: center;\n  position: absolute;\n  transform: translate(-55%, 55%) ;\n  display: ", " ;\n  width: 10vw;\n  background-color: white;\n  box-shadow: 0px 10px 20px rgb(60 60 60 / 10%);\n  border-radius:  .5em;\n  margin: 0;\n\n"])), function (props) {
  return props.isOpen ? 'block' : 'none';
});
var ActionMenuItem = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('li')(_templateObject5 || (_templateObject5 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  list-style: none;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 20px;\n  border-radius: var(--border-radius);\n  margin: 0 !important;\n  color: black;\n  transition: none;\n  :hover {\n    background-color: var(--m-btn-hover-color);\n\n  }\n\n  span {\n    font-weight: 500;\n    font-size: .65vw !important;\n  }\n\n"])));

/***/ }),

/***/ "./src/pages/MainContent/components/NotificationsPage/components/NotificationItem/Index.jsx":
/*!**************************************************************************************************!*\
  !*** ./src/pages/MainContent/components/NotificationsPage/components/NotificationItem/Index.jsx ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _enums_notification_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../enums/notification_types */ "./src/enums/notification_types.js");
/* harmony import */ var _FollowNotification_Index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../FollowNotification/Index */ "./src/pages/MainContent/components/NotificationsPage/components/FollowNotification/Index.jsx");
/* harmony import */ var _CommentCivilityNotification_Index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CommentCivilityNotification/Index */ "./src/pages/MainContent/components/NotificationsPage/components/CommentCivilityNotification/Index.jsx");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Style */ "./src/pages/MainContent/components/NotificationsPage/components/NotificationItem/Style/index.js");
/* harmony import */ var _LikeNotification_Index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../LikeNotification/Index */ "./src/pages/MainContent/components/NotificationsPage/components/LikeNotification/Index.jsx");
/* harmony import */ var _TopicLikeNotification_Index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../TopicLikeNotification/Index */ "./src/pages/MainContent/components/NotificationsPage/components/TopicLikeNotification/Index.jsx");

// import { useNavigate } from 'react-router-dom'






var NotificationItem = function NotificationItem(_ref) {
  var notification = _ref.notification;
  // const navigate = useNavigate()
  var ItemComponent;
  var onClick;
  switch (notification.eventType) {
    case _enums_notification_types__WEBPACK_IMPORTED_MODULE_1__.NewFollower:
      // onClick = () => navigate(`/user/${notification.followerUserId}`)
      ItemComponent = _FollowNotification_Index__WEBPACK_IMPORTED_MODULE_2__["default"];
      break;
    case _enums_notification_types__WEBPACK_IMPORTED_MODULE_1__.CommentCivilityGiven:
      // onClick = () => navigate(`/user/${notification.givingUserId}`)
      ItemComponent = _CommentCivilityNotification_Index__WEBPACK_IMPORTED_MODULE_3__["default"];
      break;
    case _enums_notification_types__WEBPACK_IMPORTED_MODULE_1__.CommentLike:
      // onClick = () => navigate(`/user/${notification.givingUserId}`)
      ItemComponent = _LikeNotification_Index__WEBPACK_IMPORTED_MODULE_5__["default"];
      break;
    case _enums_notification_types__WEBPACK_IMPORTED_MODULE_1__.TopicLike:
      // onClick = () => navigate(`/user/${notification.givingUserId}`)
      ItemComponent = _TopicLikeNotification_Index__WEBPACK_IMPORTED_MODULE_6__["default"];
      break;
    default:
      break;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_4__.Item, {
    onClick: onClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ItemComponent, {
    notification: notification
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotificationItem);

/***/ }),

/***/ "./src/pages/MainContent/components/NotificationsPage/components/NotificationItem/Style/index.js":
/*!*******************************************************************************************************!*\
  !*** ./src/pages/MainContent/components/NotificationsPage/components/NotificationItem/Style/index.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Item": () => (/* binding */ Item)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _templateObject;

var Item = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('li')(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid gray;\n  width: 100%;\n  height: 15vh;\n  background-color: white;\n  /* cursor: pointer; */\n  padding-right: .5vw;\n  transition: all 0.5s;\n  :hover {\n    background-color: #F8F9FA;\n  }\n"])));

/***/ }),

/***/ "./src/pages/MainContent/components/NotificationsPage/components/Style/index.js":
/*!**************************************************************************************!*\
  !*** ./src/pages/MainContent/components/NotificationsPage/components/Style/index.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeftContainer": () => (/* binding */ LeftContainer),
/* harmony export */   "MiddleContainer": () => (/* binding */ MiddleContainer),
/* harmony export */   "ProfileIcon": () => (/* binding */ ProfileIcon),
/* harmony export */   "RightContainer": () => (/* binding */ RightContainer)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

var LeftContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 22%;\n  height: 100% ;\n  display: flex;\n  align-items: center;\n  img {\n    height: 5vh;\n  }\n  border-right: 1px solid lightgray;\n  border-color: rgba(200,200,200,0.25);\n  :hover {\n    background-color: #F2F2F2;\n  }\n"])));
var RightContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 20%;\n  display: flex;\n  align-items: center;\n  img {\n    height: 5vh;\n  }\n"])));
var MiddleContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(_templateObject3 || (_templateObject3 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  width: 50%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  img {\n    height: 3vh;\n    position: absolute;\n    top: 8px;\n  }\n  svg {\n    height: 3vh;\n    min-height: 30px;\n    position: absolute;\n    top: 8px;\n  }\n  h3 {\n    font-size: .9vw;\n  }\n  a {\n    font-weight: bold;\n    color: var(--m-primary-btn-color);\n    :hover {\n      filter: brightness(0.85);\n    }\n  }\n"])));
var ProfileIcon = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('img')(_templateObject4 || (_templateObject4 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: 70%;\n  border-radius: 50%;\n  cursor: pointer;\n  margin: 0 .6vw;\n"])));

/***/ }),

/***/ "./src/pages/MainContent/components/NotificationsPage/components/TopicLikeNotification/Index.jsx":
/*!*******************************************************************************************************!*\
  !*** ./src/pages/MainContent/components/NotificationsPage/components/TopicLikeNotification/Index.jsx ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/node_modules/react-router/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _MenuTime_Index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../MenuTime/Index */ "./src/pages/MainContent/components/NotificationsPage/components/MenuTime/Index.jsx");
/* harmony import */ var _generic_string_dateFormatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../generic/string/dateFormatter */ "./src/generic/string/dateFormatter.js");
/* harmony import */ var _CommonComponents_UsernameAndTag_Index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../CommonComponents/UsernameAndTag/Index */ "./src/pages/CommonComponents/UsernameAndTag/Index.jsx");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Style */ "./src/pages/MainContent/components/NotificationsPage/components/Style/index.js");
/* harmony import */ var _enums_notification_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../enums/notification_types */ "./src/enums/notification_types.js");
/* harmony import */ var _svgs_svgs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../svgs/svgs */ "./src/svgs/svgs.jsx");








var TopicLikeNotification = function TopicLikeNotification(_ref) {
  var notification = _ref.notification;
  var givingUserId = notification.givingUserId,
    givingUserUsername = notification.givingUserUsername,
    givingUserIconSrc = notification.givingUserIconSrc,
    givingUserTag = notification.givingUserTag,
    topicId = notification.topicId;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useNavigate)();
  var handleClick = function handleClick(e) {
    e.stopPropagation();
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_4__.LeftContainer, {
    onClick: function onClick() {
      return navigate("/user/".concat(givingUserId));
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_4__.ProfileIcon, {
    src: givingUserIconSrc
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CommonComponents_UsernameAndTag_Index__WEBPACK_IMPORTED_MODULE_3__["default"], {
    userId: givingUserId,
    usernameDisplay: givingUserUsername,
    userTag: givingUserTag
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_4__.MiddleContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, givingUserUsername), ' ', "Liked Your", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Link, {
    onClick: handleClick,
    to: "/topics/".concat(topicId, "/subtopics")
  }, "Topic!"), ' ', "\uD83D\uDE0A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_svgs_svgs__WEBPACK_IMPORTED_MODULE_6__.LikeClickedSvg, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MenuTime_Index__WEBPACK_IMPORTED_MODULE_1__.MenuTime, {
    time: (0,_generic_string_dateFormatter__WEBPACK_IMPORTED_MODULE_2__.getTimeSince)(notification.createdAt),
    id: notification.id,
    eventType: _enums_notification_types__WEBPACK_IMPORTED_MODULE_5__.TopicLike
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TopicLikeNotification);

/***/ }),

/***/ "./src/pages/MainContent/components/RightSection/components/Recommendations/Index.jsx":
/*!********************************************************************************************!*\
  !*** ./src/pages/MainContent/components/RightSection/components/Recommendations/Index.jsx ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Tab.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/node_modules/react-router/dist/index.js");
/* harmony import */ var _CommonComponents_Tabs_Style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../CommonComponents/Tabs/Style */ "./src/pages/CommonComponents/Tabs/Style.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Style */ "./src/pages/MainContent/components/RightSection/components/Recommendations/Style/index.js");
/* harmony import */ var _redux_actions_recs_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../redux/actions/recs/index */ "./src/redux/actions/recs/index.js");
/* harmony import */ var _redux_actions_opposing_recs_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../redux/actions/opposing_recs/index */ "./src/redux/actions/opposing_recs/index.js");
/* harmony import */ var _hooks_redux_useBindDispatch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../hooks/redux/useBindDispatch */ "./src/pages/hooks/redux/useBindDispatch.js");
/* harmony import */ var _RecommendationsList_Index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../RecommendationsList/Index */ "./src/pages/RecommendationsList/Index.jsx");











var Recommendations = function Recommendations() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('recs'),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
    key = _useState2[0],
    setKey = _useState2[1];
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useParams)(),
    topicId = _useParams.topicId;
  var _useBindDispatch = (0,_hooks_redux_useBindDispatch__WEBPACK_IMPORTED_MODULE_7__["default"])(_redux_actions_recs_index__WEBPACK_IMPORTED_MODULE_5__["default"], _redux_actions_opposing_recs_index__WEBPACK_IMPORTED_MODULE_6__["default"]),
    getAllRecs = _useBindDispatch.getAllRecs,
    getAllOpposingRecs = _useBindDispatch.getAllOpposingRecs;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    getAllOpposingRecs(topicId);
    getAllRecs(topicId);
  }, [topicId]);
  var recs = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (s) {
    return s.recommendations.recs;
  });
  var opposingRecs = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (s) {
    return s.recommendations.opposingRecs;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_4__.TabContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_CommonComponents_Tabs_Style__WEBPACK_IMPORTED_MODULE_3__.ThemeTab, {
    activeKey: key,
    onSelect: function onSelect(k) {
      return setKey(k);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
    eventKey: "recs",
    title: "Recommended Content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_RecommendationsList_Index__WEBPACK_IMPORTED_MODULE_8__["default"], {
    recs: recs
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
    eventKey: "opposingRecs",
    title: "Opposing Views"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_RecommendationsList_Index__WEBPACK_IMPORTED_MODULE_8__["default"], {
    recs: opposingRecs
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Recommendations);

/***/ }),

/***/ "./src/pages/MainContent/components/RightSection/components/Recommendations/Style/index.js":
/*!*************************************************************************************************!*\
  !*** ./src/pages/MainContent/components/RightSection/components/Recommendations/Style/index.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "Line": () => (/* binding */ Line),
/* harmony export */   "MainContent": () => (/* binding */ MainContent),
/* harmony export */   "TabContainer": () => (/* binding */ TabContainer)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _templateObject, _templateObject2, _templateObject3, _templateObject4;
/* eslint-disable import/prefer-default-export */

var Container = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: calc(100vw - var(--sidebar-width));\n  display: flex;\n  /* padding-top: 5em; */\n  margin-left: var(--sidebar-width);\n\n  .tab-content {\n   padding-bottom: 40vh;\n }\n\n @media only screen and (max-width: 600px) {\n    flex-direction: column;\n    width: 100vw;\n    margin-left: 0;\n  }\n"])));
var MainContent = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  @media only screen and (max-width: 600px) {\n    width: 100vw;\n  }\n\n"])));
var Line = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('hr')(_templateObject3 || (_templateObject3 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([" \n  width: 90%;\n  margin: 1em 0 2em 0;\n  background-color: rgb(48,48,50);\n  height: .5px;\n  border: none;\n"])));
var TabContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(_templateObject4 || (_templateObject4 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([" \n  flex: 25%;\n  display: flex;\n  z-index: 99;\n  /* a: center; */\n  flex-direction: column;\n  background: white;\n  border-left: 1px solid #dee2e6;\n\n"])));

/***/ }),

/***/ "./src/pages/MainContent/components/SubTopicsPage/Index.jsx":
/*!******************************************************************!*\
  !*** ./src/pages/MainContent/components/SubTopicsPage/Index.jsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/node_modules/react-router/dist/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_topics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../redux/actions/topics */ "./src/redux/actions/topics/index.js");
/* harmony import */ var _redux_actions_subtopics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../redux/actions/subtopics */ "./src/redux/actions/subtopics/index.js");
/* harmony import */ var _hooks_redux_useBindDispatch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../hooks/redux/useBindDispatch */ "./src/pages/hooks/redux/useBindDispatch.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Style */ "./src/pages/MainContent/components/SubTopicsPage/Style/index.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Style */ "./src/pages/MainContent/Style/index.js");
/* harmony import */ var _components_Header_Index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Header/Index */ "./src/pages/MainContent/components/SubTopicsPage/components/Header/Index.jsx");
/* harmony import */ var _components_ParentComment_Index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/ParentComment/Index */ "./src/pages/MainContent/components/SubTopicsPage/components/ParentComment/Index.jsx");
/* harmony import */ var _components_SubTopicsRouter_Index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/SubTopicsRouter/Index */ "./src/pages/MainContent/components/SubTopicsPage/components/SubTopicsRouter/Index.jsx");
/* harmony import */ var _generic_regex_uuid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../generic/regex/uuid */ "./src/generic/regex/uuid.js");
/* harmony import */ var _UserInformationDisplay_Index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../UserInformationDisplay/Index */ "./src/pages/UserInformationDisplay/Index.jsx");
/* harmony import */ var _RightSection_components_Recommendations_Index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../RightSection/components/Recommendations/Index */ "./src/pages/MainContent/components/RightSection/components/Recommendations/Index.jsx");















var SubTopics = function SubTopics() {
  var _useSelector;
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_14__.useParams)(),
    topicId = _useParams.topicId,
    url = _useParams['*'];
  var _ref = url ? url.match(_generic_regex_uuid__WEBPACK_IMPORTED_MODULE_11__.uuidRegEx) : [],
    _ref2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 2),
    subtopicId = _ref2[0],
    commentId = _ref2[1];
  var _useBindDispatch = (0,_hooks_redux_useBindDispatch__WEBPACK_IMPORTED_MODULE_5__["default"])(_redux_actions_subtopics__WEBPACK_IMPORTED_MODULE_4__["default"], _redux_actions_topics__WEBPACK_IMPORTED_MODULE_3__["default"]),
    getAllSubTopics = _useBindDispatch.getAllSubTopics,
    getTopic = _useBindDispatch.getTopic;
  var topic = (_useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (s) {
    return s.topics.list;
  })) === null || _useSelector === void 0 ? void 0 : _useSelector.find(function (t) {
    return t.id === topicId;
  });
  var subtopicsEmpty = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (s) {
    return s.subtopics;
  });
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (s) {
    return s.session.currentUser;
  });
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    getTopic(topicId, user === null || user === void 0 ? void 0 : user.id);
    if (subtopicsEmpty) getAllSubTopics(topicId);
  }, [topicId, subtopicId]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_6__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_7__.HomePageGrid, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_7__.Left, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_UserInformationDisplay_Index__WEBPACK_IMPORTED_MODULE_12__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_7__.Middle, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_6__.MainContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_6__.HeaderContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_Header_Index__WEBPACK_IMPORTED_MODULE_8__["default"], {
    topic: topic,
    user: user
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_6__.Line, null), commentId && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_ParentComment_Index__WEBPACK_IMPORTED_MODULE_9__["default"], {
    topicId: topicId
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_7__.Right, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_RightSection_components_Recommendations_Index__WEBPACK_IMPORTED_MODULE_13__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_SubTopicsRouter_Index__WEBPACK_IMPORTED_MODULE_10__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubTopics);

/***/ }),

/***/ "./src/pages/MainContent/components/SubTopicsPage/Style/index.js":
/*!***********************************************************************!*\
  !*** ./src/pages/MainContent/components/SubTopicsPage/Style/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "HeaderContainer": () => (/* binding */ HeaderContainer),
/* harmony export */   "Line": () => (/* binding */ Line),
/* harmony export */   "MainContent": () => (/* binding */ MainContent)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _templateObject, _templateObject2, _templateObject3, _templateObject4;
/* eslint-disable import/prefer-default-export */

var Container = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-bottom: 10vw;\n\n @media only screen and (max-width: 600px) {\n    flex-direction: column;\n    width: 100vw;\n    margin-left: 0;\n  }\n"])));
var MainContent = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  @media only screen and (max-width: 600px) {\n    width: 100vw;\n  }\n\n"])));
var Line = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('hr')(_templateObject3 || (_templateObject3 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([" \n  width: 90%;\n  margin: 1em 0 2em 0;\n  background-color: rgb(48,48,50);\n  height: .5px;\n  border: none;\n"])));
var HeaderContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('section')(_templateObject4 || (_templateObject4 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  li {\n    margin: 0;\n  }\n\n  @media only screen and (max-width: 600px) {\n    width: 100%;\n  }\n\n"])));

/***/ }),

/***/ "./src/pages/MainContent/components/SubTopicsPage/components/Comment/Index.jsx":
/*!*************************************************************************************!*\
  !*** ./src/pages/MainContent/components/SubTopicsPage/components/Comment/Index.jsx ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/node_modules/react-router/dist/index.js");
/* harmony import */ var react_bootstrap_Collapse__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-bootstrap/Collapse */ "./node_modules/react-bootstrap/esm/Collapse.js");
/* harmony import */ var _svgs_svgs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../svgs/svgs */ "./src/svgs/svgs.jsx");
/* harmony import */ var _CommonComponents_IconButton_Index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../CommonComponents/IconButton/Index */ "./src/pages/CommonComponents/IconButton/Index.jsx");
/* harmony import */ var _CommonComponents_CensorOverlay_Index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../CommonComponents/CensorOverlay/Index */ "./src/pages/CommonComponents/CensorOverlay/Index.jsx");
/* harmony import */ var _CommonComponents_ActionToolbars_CommentToolbar_Index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../CommonComponents/ActionToolbars/CommentToolbar/Index */ "./src/pages/CommonComponents/ActionToolbars/CommentToolbar/Index.jsx");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Style */ "./src/pages/MainContent/components/SubTopicsPage/components/Comment/Style/index.js");
/* harmony import */ var _generic_string_dateFormatter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../generic/string/dateFormatter */ "./src/generic/string/dateFormatter.js");
/* harmony import */ var _hooks_useSetInnerHtml__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../hooks/useSetInnerHtml */ "./src/pages/hooks/useSetInnerHtml.js");
/* harmony import */ var _CommentColumn_Index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../CommentColumn/Index */ "./src/pages/MainContent/components/SubTopicsPage/components/CommentColumn/Index.jsx");
/* harmony import */ var _CommonComponents_Tooltip_Index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../CommonComponents/Tooltip/Index */ "./src/pages/CommonComponents/Tooltip/Index.jsx");
/* harmony import */ var _enums_report_status__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../enums/report_status */ "./src/enums/report_status.js");
/* harmony import */ var _enums_content_type__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../enums/content_type */ "./src/enums/content_type.js");

/* eslint-disable import/no-cycle */















var Comment = function Comment(_ref) {
  var commentData = _ref.commentData,
    replies = _ref.replies,
    commentRef = _ref.commentRef;
  if (!commentData) return null;
  var _ref2 = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(_CommentColumn_Index__WEBPACK_IMPORTED_MODULE_10__.ParentCommentContext) || {},
    topicId = _ref2.topicId;
  var contentRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_14__.useNavigate)();
  var _useLocation = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_14__.useLocation)(),
    pathname = _useLocation.pathname;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((commentData === null || commentData === void 0 ? void 0 : commentData.reportStatus) === _enums_report_status__WEBPACK_IMPORTED_MODULE_12__.UNDER_REVIEW || (commentData === null || commentData === void 0 ? void 0 : commentData.toxicityStatus) === 'TOXIC'),
    _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
    shouldBlur = _useState4[0],
    setShouldBlur = _useState4[1];
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (s) {
    return s.session.currentUser;
  });
  (0,_hooks_useSetInnerHtml__WEBPACK_IMPORTED_MODULE_9__["default"])(contentRef, commentData === null || commentData === void 0 ? void 0 : commentData.content);
  var mins = (0,_generic_string_dateFormatter__WEBPACK_IMPORTED_MODULE_8__.getTimeSince)(commentData.createdAt);
  var expandIcon = isOpen ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_svgs_svgs__WEBPACK_IMPORTED_MODULE_3__.UpArrowSvg, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_svgs_svgs__WEBPACK_IMPORTED_MODULE_3__.DownArrowSvg, null);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_7__.OuterContainer, {
    ref: commentRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_7__.CommentContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_7__.Header, {
    onClick: function onClick() {
      return navigate("/topics/".concat(topicId, "/subtopics/").concat(commentData.subtopicId, "/comments/").concat(commentData.id));
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_7__.UserInfoContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_7__.Thumb, {
    src: commentData.createdByIconSrc || 'https://civil-dev.s3.us-west-1.amazonaws.com/profile_img_1.png'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_CommonComponents_Tooltip_Index__WEBPACK_IMPORTED_MODULE_11__["default"], {
    tooltipHeader: "Experience",
    tooltipText: commentData.createdByExperience
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_7__.Username, null, commentData.createdBy), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_7__.Date, null, "".concat(mins))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_7__.Body, {
    shouldBlur: shouldBlur,
    onClick: function onClick() {
      return navigate("/topics/".concat(topicId, "/subtopics/").concat(commentData.subtopicId, "/comments/").concat(commentData.id));
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_7__.Content, {
    ref: contentRef
  }), replies.length !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_7__.ExpandButton, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_CommonComponents_IconButton_Index__WEBPACK_IMPORTED_MODULE_4__["default"], {
    icon: expandIcon,
    onClick: function onClick() {
      return setIsOpen(!isOpen);
    }
  }, "Replies"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_7__.Footer, {
    shouldBlur: shouldBlur
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_CommonComponents_ActionToolbars_CommentToolbar_Index__WEBPACK_IMPORTED_MODULE_6__["default"], {
    likes: commentData === null || commentData === void 0 ? void 0 : commentData.likes,
    comment: commentData,
    user: user
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap_Collapse__WEBPACK_IMPORTED_MODULE_15__["default"], {
    "in": isOpen
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_7__.EvidenceSection, null, replies.map(function (reply, idx) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Comment, {
      key: commentData.id + String(idx),
      commentData: reply.data,
      replies: reply.children
    });
  }))))), shouldBlur && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_CommonComponents_CensorOverlay_Index__WEBPACK_IMPORTED_MODULE_5__["default"], {
    setShouldBlur: setShouldBlur,
    contentId: commentData === null || commentData === void 0 ? void 0 : commentData.id,
    contentType: _enums_content_type__WEBPACK_IMPORTED_MODULE_13__.COMMENT,
    showNavigationToTribunal: (commentData === null || commentData === void 0 ? void 0 : commentData.reportStatus) === _enums_report_status__WEBPACK_IMPORTED_MODULE_12__.UNDER_REVIEW && !pathname.includes('tribunal')
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(Comment));

/***/ }),

/***/ "./src/pages/MainContent/components/SubTopicsPage/components/Comment/Style/index.js":
/*!******************************************************************************************!*\
  !*** ./src/pages/MainContent/components/SubTopicsPage/components/Comment/Style/index.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Body": () => (/* binding */ Body),
/* harmony export */   "CommentContainer": () => (/* binding */ CommentContainer),
/* harmony export */   "Content": () => (/* binding */ Content),
/* harmony export */   "Date": () => (/* binding */ Date),
/* harmony export */   "EvidenceSection": () => (/* binding */ EvidenceSection),
/* harmony export */   "ExpandButton": () => (/* binding */ ExpandButton),
/* harmony export */   "Footer": () => (/* binding */ Footer),
/* harmony export */   "Header": () => (/* binding */ Header),
/* harmony export */   "OuterContainer": () => (/* binding */ OuterContainer),
/* harmony export */   "Thumb": () => (/* binding */ Thumb),
/* harmony export */   "UserInfoContainer": () => (/* binding */ UserInfoContainer),
/* harmony export */   "Username": () => (/* binding */ Username)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;

var OuterContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  width: 100%;\n  height: fit-content;\n  z-index: 99;\n\n"])));
var CommentContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('li')(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100%;\n  outline: none;\n  border-radius: .4em;\n  position: relative;\n  list-style: none;\n  margin-top: 1em;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: white;\n  border: 1px solid lightgray;\n  box-shadow:  -5px -5px 10px #5a5a5a, 5px 5px 10px #ffffff;\n\n  border-color: rgba(200,200,200,0.25);\n  :hover {\n    /* opacity: .9; */\n    /* filter: brightness(.9); */\n    /* background-color: #ef5d4566; */\n    background-color: #D8FFF1;\n  }\n\n   @media only screen and (max-width: 600px) {\n    width: 100%;\n    border-radius: 0;\n  }\n"])));
var Header = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(_templateObject3 || (_templateObject3 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  width: 100%;\n  padding: 1em;\n  border-bottom: 1px solid gray;\n  justify-content: space-between;\n  align-items: center;\n"])));
var Username = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('b')(_templateObject4 || (_templateObject4 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([" \n  color: black;\n"])));
var Date = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('time')(_templateObject5 || (_templateObject5 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([" \n  color: gray;\n"])));
var Body = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(_templateObject6 || (_templateObject6 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  filter: ", ";\n  pointer-events: ", ";\n  position: relative;\n  color: black;\n  min-height: 10vh;\n  padding: 1em;\n  width: 100%;\n"])), function (props) {
  return props.shouldBlur ? 'blur(5px)' : 'unset';
}, function (props) {
  return props.shouldBlur ? 'none' : 'initial';
});
var Thumb = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('img')(_templateObject7 || (_templateObject7 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([" \n  flex-shrink: 0;\n  width: 50px;\n  height: 50px;      \n  border-radius: 50%; \n"])));
var UserInfoContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(_templateObject8 || (_templateObject8 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n"])));
var ExpandButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(_templateObject9 || (_templateObject9 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([" \n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  transform: translate(-50%);\n"])));
var EvidenceSection = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('ul')(_templateObject10 || (_templateObject10 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([" \n  background-color: #F0F2F5;\n  width: 100%;\n  word-break: break-all;\n  padding: 0 .5em .5em .5em;\n  display: flex;\n  flex-direction: column;\n"])));
var Footer = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(_templateObject11 || (_templateObject11 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  filter: ", ";\n  pointer-events: ", ";\n  width: 100%;\n"])), function (props) {
  return props.shouldBlur ? 'blur(5px)' : 'unset';
}, function (props) {
  return props.shouldBlur ? 'none' : 'initial';
});
var Content = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('p')(_templateObject12 || (_templateObject12 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([" \n  padding: 1em;\n"])));

/***/ }),

/***/ "./src/pages/MainContent/components/SubTopicsPage/components/CommentColumn/Index.jsx":
/*!*******************************************************************************************!*\
  !*** ./src/pages/MainContent/components/SubTopicsPage/components/CommentColumn/Index.jsx ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParentCommentContext": () => (/* binding */ ParentCommentContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Comment_Index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Comment/Index */ "./src/pages/MainContent/components/SubTopicsPage/components/Comment/Index.jsx");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Style */ "./src/pages/MainContent/components/SubTopicsPage/components/CommentColumn/Style/index.js");
/* eslint-disable import/no-cycle */



var ParentCommentContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext(null);
var CommentColumn = function CommentColumn(_ref) {
  var numComments = _ref.numComments,
    comments = _ref.comments,
    commentSentiment = _ref.commentSentiment,
    color = _ref.color,
    topicId = _ref.topicId;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_2__.Container, {
    color: color
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, numComments || '', ' ', commentSentiment || '', ' ', "Comments"), comments === null || comments === void 0 ? void 0 : comments.map(function (comment, idx) {
    var _comment$data, _comment$data2, _comment$data3;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ParentCommentContext.Provider, {
      key: ((_comment$data = comment.data) === null || _comment$data === void 0 ? void 0 : _comment$data.id) + String(idx),
      value: {
        commentId: (_comment$data2 = comment.data) === null || _comment$data2 === void 0 ? void 0 : _comment$data2.id,
        topicId: topicId
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Comment_Index__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: ((_comment$data3 = comment.data) === null || _comment$data3 === void 0 ? void 0 : _comment$data3.id) + String(idx),
      commentData: comment.data,
      replies: comment.children
    }));
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommentColumn);

/***/ }),

/***/ "./src/pages/MainContent/components/SubTopicsPage/components/CommentColumn/Style/index.js":
/*!************************************************************************************************!*\
  !*** ./src/pages/MainContent/components/SubTopicsPage/components/CommentColumn/Style/index.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _templateObject;
/* eslint-disable import/prefer-default-export */

var Container = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('ul')(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 2em;\n  margin: 0;\n  padding: 0;\n  /* border-left: 1px solid black;\n  border-right: 1px solid black; */\n  z-index: 99;\n  opacity: .99;\n  width: 70vw;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  border: 1px solid lightgray;\n  border-color: rgba(200,200,200,0.25);\n\n  h1 {\n    display: flex;\n    width: 100%;\n    align-items: center;\n    font-weight: bold;\n    padding: 1em;\n    font-size: 1vw;\n    border-bottom: 1px solid black;\n    color: white;\n    border: none;\n    outline: none;\n    background-color: ", ";\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n\n     @media only screen and (max-width: 600px) {\n      border-top-left-radius: 0;\n      border-top-right-radius: 0;\n      font-size: 5vw;\n\n    }\n  }\n\n  \n   @media only screen and (max-width: 600px) {\n    width: 100%;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n  }\n"])), function (props) {
  return props.color;
});

/***/ }),

/***/ "./src/pages/MainContent/components/SubTopicsPage/components/CommentThread/Index.jsx":
/*!*******************************************************************************************!*\
  !*** ./src/pages/MainContent/components/SubTopicsPage/components/CommentThread/Index.jsx ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/node_modules/react-router/dist/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Tab.js");
/* harmony import */ var _hooks_useCategorizeComments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useCategorizeComments */ "./src/pages/MainContent/components/SubTopicsPage/components/hooks/useCategorizeComments.js");
/* harmony import */ var _hooks_redux_useBindDispatch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../hooks/redux/useBindDispatch */ "./src/pages/hooks/redux/useBindDispatch.js");
/* harmony import */ var _redux_actions_subtopics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../redux/actions/subtopics */ "./src/redux/actions/subtopics/index.js");
/* harmony import */ var _redux_actions_comments__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../redux/actions/comments */ "./src/redux/actions/comments/index.js");
/* harmony import */ var _redux_actions_topics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../redux/actions/topics */ "./src/redux/actions/topics/index.js");
/* harmony import */ var _CommentColumn_Index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../CommentColumn/Index */ "./src/pages/MainContent/components/SubTopicsPage/components/CommentColumn/Index.jsx");
/* harmony import */ var _Style_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Style/index */ "./src/pages/MainContent/components/SubTopicsPage/components/CommentThread/Style/index.js");
/* harmony import */ var _CommonComponents_Tabs_Style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../CommonComponents/Tabs/Style */ "./src/pages/CommonComponents/Tabs/Style.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Style */ "./src/pages/MainContent/components/SubTopicsPage/Style/index.js");














var CommentThread = function CommentThread() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_12__.useParams)(),
    commentId = _useParams.commentId,
    topicId = _useParams.topicId;
  var _useBindDispatch = (0,_hooks_redux_useBindDispatch__WEBPACK_IMPORTED_MODULE_4__["default"])(_redux_actions_subtopics__WEBPACK_IMPORTED_MODULE_5__["default"], _redux_actions_comments__WEBPACK_IMPORTED_MODULE_6__["default"], _redux_actions_topics__WEBPACK_IMPORTED_MODULE_7__["default"]),
    getAllCommentReplies = _useBindDispatch.getAllCommentReplies,
    getTopic = _useBindDispatch.getTopic;
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.session.currentUser;
  });
  // const subtopic = useSelector((state) => state.subtopics)[subTopicId]
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('all'),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
    key = _useState2[0],
    setKey = _useState2[1];
  var _useCategorizeComment = (0,_hooks_useCategorizeComments__WEBPACK_IMPORTED_MODULE_3__["default"])(),
    positiveComments = _useCategorizeComment.POSITIVE,
    neutralComments = _useCategorizeComment.NEUTRAL,
    negativeComments = _useCategorizeComment.NEGATIVE,
    allComments = _useCategorizeComment.all;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    getAllCommentReplies(commentId);
    getTopic(topicId, user === null || user === void 0 ? void 0 : user.id);
  }, [user, commentId]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_9__.ThreadContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_11__.Line, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_CommonComponents_Tabs_Style__WEBPACK_IMPORTED_MODULE_10__.ThemeTab, {
    activeKey: key,
    onSelect: function onSelect(k) {
      return setKey(k);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["default"], {
    eventKey: "all",
    title: "All"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_9__.ColumnContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_CommentColumn_Index__WEBPACK_IMPORTED_MODULE_8__["default"], {
    numComments: 0,
    comments: allComments,
    commentSentiment: "",
    color: "#6A6E70"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["default"], {
    eventKey: "positive",
    title: "Generally Positive"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_9__.ColumnContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_CommentColumn_Index__WEBPACK_IMPORTED_MODULE_8__["default"], {
    numComments: 0,
    comments: positiveComments,
    commentSentiment: "Generally Positive",
    color: "#6A6E70"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["default"], {
    eventKey: "neutral",
    title: "Neutral"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_9__.ColumnContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_CommentColumn_Index__WEBPACK_IMPORTED_MODULE_8__["default"], {
    numComments: 0,
    comments: neutralComments,
    commentSentiment: "Neutral",
    color: "#474A4F"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["default"], {
    eventKey: "negative",
    title: "Generally Negative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_9__.ColumnContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_CommentColumn_Index__WEBPACK_IMPORTED_MODULE_8__["default"], {
    numComments: 0,
    comments: negativeComments,
    commentSentiment: "Generally Negative",
    color: "#6A6E70"
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(CommentThread));

/***/ }),

/***/ "./src/pages/MainContent/components/SubTopicsPage/components/CommentThread/Style/index.js":
/*!************************************************************************************************!*\
  !*** ./src/pages/MainContent/components/SubTopicsPage/components/CommentThread/Style/index.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColumnContainer": () => (/* binding */ ColumnContainer),
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "ThreadContainer": () => (/* binding */ ThreadContainer)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _templateObject, _templateObject2, _templateObject3;

var ThreadContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 70vw;\n\n"])));
var Container = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100vw;\n  height: 50vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 5em;\n\n  header {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 1.5em;\n    background-color: var(--m-primary-background-color);\n    border-radius: 1em;\n    h1 {\n      max-width: 30vw;\n    }\n    b {\n     color: var(--m-primary-color)\n    }\n  }\n"])));
var ColumnContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('section')(_templateObject3 || (_templateObject3 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  justify-content: space-evenly;\n  /* border-top: 1px solid gray; */\n  width: 100vw;\n\n  ul:first-child {\n    /* border-right: .1px dashed rgb(48,48,50); */\n  }\n\n   ul:last-child {\n    /* border-left: .1px solid rgb(48,48,50); */\n  }\n\n\n"])));

/***/ }),

/***/ "./src/pages/MainContent/components/SubTopicsPage/components/Header/Index.jsx":
/*!************************************************************************************!*\
  !*** ./src/pages/MainContent/components/SubTopicsPage/components/Header/Index.jsx ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/node_modules/react-router/dist/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/OverlayTrigger.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Tooltip.js");
/* harmony import */ var _CommonComponents_TopicCards_TweetCard_Index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../CommonComponents/TopicCards/TweetCard/Index */ "./src/pages/CommonComponents/TopicCards/TweetCard/Index.jsx");
/* harmony import */ var _VideoShowPage_Index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../VideoShowPage/Index */ "./src/pages/VideoShowPage/Index.jsx");
/* harmony import */ var _CommonComponents_TopicCards_ExternalContentCard_Index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../CommonComponents/TopicCards/ExternalContentCard/Index */ "./src/pages/CommonComponents/TopicCards/ExternalContentCard/Index.jsx");
/* harmony import */ var _CommonComponents_TopicCards_UserProvidedMediaCard_Index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../CommonComponents/TopicCards/UserProvidedMediaCard/Index */ "./src/pages/CommonComponents/TopicCards/UserProvidedMediaCard/Index.jsx");
/* harmony import */ var _CommonComponents_UserInfoHeader_Index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../CommonComponents/UserInfoHeader/Index */ "./src/pages/CommonComponents/UserInfoHeader/Index.jsx");
/* harmony import */ var _hooks_useSetInnerHtml__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../hooks/useSetInnerHtml */ "./src/pages/hooks/useSetInnerHtml.js");
/* harmony import */ var _generic_string_dateFormatter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../generic/string/dateFormatter */ "./src/generic/string/dateFormatter.js");
/* harmony import */ var _Style_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Style/index */ "./src/pages/MainContent/components/SubTopicsPage/components/Header/Style/index.js");
/* harmony import */ var _generic_regex_uuid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../generic/regex/uuid */ "./src/generic/regex/uuid.js");


/* eslint-disable react/jsx-props-no-spreading */













var TooltipComponent = function TooltipComponent(_ref) {
  var text = _ref.text,
    title = _ref.title,
    reference = _ref.reference;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["default"], {
    placement: "top",
    overlay: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("strong", null, title))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
    onClick: function onClick() {
      var _reference$current;
      return reference === null || reference === void 0 ? void 0 : (_reference$current = reference.current) === null || _reference$current === void 0 ? void 0 : _reference$current.scrollIntoView();
    }
  }, text));
};
var Header = function Header(_ref2) {
  var topic = _ref2.topic,
    user = _ref2.user;
  var content = null;
  var subtopicContent = null;
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_15__.useParams)(),
    url = _useParams['*'];
  var _ref3 = url ? url.match(_generic_regex_uuid__WEBPACK_IMPORTED_MODULE_12__.uuidRegEx) : [],
    _ref4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref3, 2),
    subtopicId = _ref4[0],
    commentId = _ref4[1];
  var subtopic = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (s) {
    return s.subtopics;
  })[subtopicId];
  var showSubTopic = subtopic && (subtopic === null || subtopic === void 0 ? void 0 : subtopic.title) !== 'General';
  var commonProps = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function () {
    return {
      topic: topic,
      user: user,
      showLinks: true
    };
  }, [topic, user]);
  var descRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  var subtopicRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  var topicRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  (0,_hooks_useSetInnerHtml__WEBPACK_IMPORTED_MODULE_9__["default"])(descRef, topic === null || topic === void 0 ? void 0 : topic.description);
  var commonPropsSubTopic = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function () {
    return {
      topic: subtopic,
      user: user,
      showLinks: true
    };
  }, [subtopic, user]);
  if (topic !== null && topic !== void 0 && topic.tweetHtml) content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_CommonComponents_TopicCards_TweetCard_Index__WEBPACK_IMPORTED_MODULE_4__["default"], commonProps);else if (topic !== null && topic !== void 0 && topic.ytUrl) content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_VideoShowPage_Index__WEBPACK_IMPORTED_MODULE_5__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, {
    src: topic.ytUrl.replace('watch?v=', 'embed/')
  }));else if (topic !== null && topic !== void 0 && topic.vodUrl || topic !== null && topic !== void 0 && topic.imageUrl) content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_CommonComponents_TopicCards_UserProvidedMediaCard_Index__WEBPACK_IMPORTED_MODULE_7__["default"], commonProps);else content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_CommonComponents_TopicCards_ExternalContentCard_Index__WEBPACK_IMPORTED_MODULE_6__["default"], commonProps);
  if (subtopic) {
    if (subtopic !== null && subtopic !== void 0 && subtopic.tweetHtml) subtopicContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_CommonComponents_TopicCards_TweetCard_Index__WEBPACK_IMPORTED_MODULE_4__["default"], commonPropsSubTopic);else if (subtopic !== null && subtopic !== void 0 && subtopic.ytUrl) subtopicContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_VideoShowPage_Index__WEBPACK_IMPORTED_MODULE_5__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonPropsSubTopic, {
      src: subtopic.ytUrl.replace('watch?v=', 'embed/')
    }));else if (subtopic !== null && subtopic !== void 0 && subtopic.vodUrl || subtopic !== null && subtopic !== void 0 && subtopic.imageUrl) {
      subtopicContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_CommonComponents_TopicCards_UserProvidedMediaCard_Index__WEBPACK_IMPORTED_MODULE_7__["default"], commonPropsSubTopic);
    } else subtopicContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_CommonComponents_TopicCards_ExternalContentCard_Index__WEBPACK_IMPORTED_MODULE_6__["default"], commonPropsSubTopic);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_11__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h1", {
    className: "text-focus-in"
  }, ' ', showSubTopic ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, "Discussion Related To Parent", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(TooltipComponent, {
    text: "Topic",
    title: topic === null || topic === void 0 ? void 0 : topic.title,
    reference: topicRef
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, 'We\'re Talking About This', ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(TooltipComponent, {
    text: "Topic",
    title: topic === null || topic === void 0 ? void 0 : topic.title,
    reference: topicRef
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    ref: topicRef,
    style: {
      width: '90%'
    }
  }, !showSubTopic && content, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_11__.TopicSummaryContainer, {
    hidden: !showSubTopic
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_CommonComponents_UserInfoHeader_Index__WEBPACK_IMPORTED_MODULE_8__["default"], {
    iconSrc: topic === null || topic === void 0 ? void 0 : topic.createdByIconSrc,
    time: (0,_generic_string_dateFormatter__WEBPACK_IMPORTED_MODULE_10__.getTimeSince)(topic === null || topic === void 0 ? void 0 : topic.createdAt),
    username: topic === null || topic === void 0 ? void 0 : topic.createdBy,
    userId: topic === null || topic === void 0 ? void 0 : topic.userId
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("img", {
    src: topic === null || topic === void 0 ? void 0 : topic.thumbImgUrl,
    alt: "Nothing To Show"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_11__.Description, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
    ref: descRef
  })))), subtopic && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_11__.StyledLongDownArrow, {
    hidden: !showSubTopic
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h1", {
    className: "text-focus-in",
    hidden: !showSubTopic
  }, ' ', 'We\'re Talking About This', ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(TooltipComponent, {
    text: "Subtopic",
    title: subtopic === null || subtopic === void 0 ? void 0 : subtopic.title,
    reference: subtopicRef
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    hidden: !showSubTopic,
    ref: subtopicRef,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, subtopicContent));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/pages/MainContent/components/SubTopicsPage/components/Header/Style/index.js":
/*!*****************************************************************************************!*\
  !*** ./src/pages/MainContent/components/SubTopicsPage/components/Header/Style/index.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "Description": () => (/* binding */ Description),
/* harmony export */   "LinksContainer": () => (/* binding */ LinksContainer),
/* harmony export */   "StyledLongDownArrow": () => (/* binding */ StyledLongDownArrow),
/* harmony export */   "TopicSummaryContainer": () => (/* binding */ TopicSummaryContainer)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _svgs_svgs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../svgs/svgs */ "./src/svgs/svgs.jsx");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;


var Container = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])('div')(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([" \n  display: flex;\n  border: 1px solid rgba(200,200,200,0.25);\n  border-bottom: none ;\n  flex-direction: column;\n  align-items: center;\n  width: 50vw;\n  padding: 1em;\n  /* border-top: none; */\n  padding-top: 5em;\n  z-index: 99;\n  background-color: #F7F7F7;\n  background-color: white;\n  h1 {\n    text-align: center;\n    /* text-decoration: underline; */\n    letter-spacing: .2em;\n    margin-bottom: 3vw;\n    /* font-weight: bold; */\n  }\n  span {\n    font-weight: bold;\n    cursor: pointer;\n  }\n\n   @media only screen and (max-width: 600px) {\n    padding: 1em 0;\n  }\n\n"])));
var LinksContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])('div')(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100%;\n  margin-top: 2em;\n  display: flex;\n  ul:first-child {\n    border-right: 1px solid gray;\n  }\n"])));
var Description = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])('p')(_templateObject3 || (_templateObject3 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100%;\n  font-size: .7vw;\n  word-wrap: break-word;\n  padding: 1em;\n"])));
var TopicSummaryContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])('div')(_templateObject4 || (_templateObject4 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["  \n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  /* height: ", "; */\n  /* width: 40vw;   */\n  margin: 2em;\n  border-radius: .5em;\n  box-shadow:  -5px -5px 10px #5a5a5a, 5px 5px 10px #ffffff;\n  border: none;\n  cursor: pointer;\n  overflow: hidden;\n  text-decoration: none;\n"])), function (props) {
  return "".concat(props.height, "px");
});
var StyledLongDownArrow = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_svgs_svgs__WEBPACK_IMPORTED_MODULE_1__.LongDownArrow)(_templateObject5 || (_templateObject5 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([" \n  margin-bottom: 2vw;\n"])));

/***/ }),

/***/ "./src/pages/MainContent/components/SubTopicsPage/components/ParentComment/Index.jsx":
/*!*******************************************************************************************!*\
  !*** ./src/pages/MainContent/components/SubTopicsPage/components/ParentComment/Index.jsx ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Comment_Index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Comment/Index */ "./src/pages/MainContent/components/SubTopicsPage/components/Comment/Index.jsx");
/* harmony import */ var _CommentColumn_Index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CommentColumn/Index */ "./src/pages/MainContent/components/SubTopicsPage/components/CommentColumn/Index.jsx");




var ParentComment = function ParentComment(_ref) {
  var topicId = _ref.topicId;
  var targetComment = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (s) {
    return s.comments.targetComment;
  });
  var commentRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (node) {
    if (node !== null) {
      node.scrollIntoView();
    }
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CommentColumn_Index__WEBPACK_IMPORTED_MODULE_3__.ParentCommentContext.Provider, {
    value: {
      commentId: targetComment === null || targetComment === void 0 ? void 0 : targetComment.id,
      topicId: topicId
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Comment_Index__WEBPACK_IMPORTED_MODULE_2__["default"], {
    commentRef: commentRef,
    commentData: targetComment,
    replies: []
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(ParentComment));

/***/ }),

/***/ "./src/pages/MainContent/components/SubTopicsPage/components/SubTopicThread/Index.jsx":
/*!********************************************************************************************!*\
  !*** ./src/pages/MainContent/components/SubTopicsPage/components/SubTopicThread/Index.jsx ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/node_modules/react-router/dist/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Tab.js");
/* harmony import */ var _hooks_useCategorizeComments__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useCategorizeComments */ "./src/pages/MainContent/components/SubTopicsPage/components/hooks/useCategorizeComments.js");
/* harmony import */ var _hooks_redux_useBindDispatch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../hooks/redux/useBindDispatch */ "./src/pages/hooks/redux/useBindDispatch.js");
/* harmony import */ var _redux_actions_subtopics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../redux/actions/subtopics */ "./src/redux/actions/subtopics/index.js");
/* harmony import */ var _redux_actions_comments__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../redux/actions/comments */ "./src/redux/actions/comments/index.js");
/* harmony import */ var _redux_actions_topics__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../redux/actions/topics */ "./src/redux/actions/topics/index.js");
/* harmony import */ var _CommentColumn_Index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../CommentColumn/Index */ "./src/pages/MainContent/components/SubTopicsPage/components/CommentColumn/Index.jsx");
/* harmony import */ var _Style_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Style/index */ "./src/pages/MainContent/components/SubTopicsPage/components/SubTopicThread/Style/index.js");
/* harmony import */ var _CommonComponents_Tabs_Style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../CommonComponents/Tabs/Style */ "./src/pages/CommonComponents/Tabs/Style.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../Style */ "./src/pages/MainContent/components/SubTopicsPage/Style/index.js");
/* harmony import */ var _hooks_permissions_useSessionType__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../hooks/permissions/useSessionType */ "./src/pages/hooks/permissions/useSessionType.js");

















var SubTopicThread = function SubTopicThread() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_15__.useParams)(),
    subTopicId = _useParams.subTopicId,
    topicId = _useParams.topicId;
  var _useBindDispatch = (0,_hooks_redux_useBindDispatch__WEBPACK_IMPORTED_MODULE_6__["default"])(_redux_actions_subtopics__WEBPACK_IMPORTED_MODULE_7__["default"], _redux_actions_comments__WEBPACK_IMPORTED_MODULE_8__["default"], _redux_actions_topics__WEBPACK_IMPORTED_MODULE_9__["default"]),
    getAllComments = _useBindDispatch.getAllComments,
    getTopic = _useBindDispatch.getTopic;
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {
    return state.session.currentUser;
  });
  var subtopic = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {
    return state.subtopics;
  })[subTopicId];
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('all'),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
    key = _useState2[0],
    setKey = _useState2[1];
  var sessionType = (0,_hooks_permissions_useSessionType__WEBPACK_IMPORTED_MODULE_14__["default"])();
  var _useCategorizeComment = (0,_hooks_useCategorizeComments__WEBPACK_IMPORTED_MODULE_5__["default"])(),
    positiveComments = _useCategorizeComment.POSITIVE,
    neutralComments = _useCategorizeComment.NEUTRAL,
    negativeComments = _useCategorizeComment.NEGATIVE,
    allComments = _useCategorizeComment.all;
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    var get = /*#__PURE__*/function () {
      var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        var _yield$sessionType, signedInViaClerk, signedInViaDID;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return sessionType;
              case 2:
                _yield$sessionType = _context.sent;
                signedInViaClerk = _yield$sessionType.signedInViaClerk;
                signedInViaDID = _yield$sessionType.signedInViaDID;
                if (!(!signedInViaClerk && !signedInViaDID)) {
                  _context.next = 7;
                  break;
                }
                return _context.abrupt("return", new Promise());
              case 7:
                getAllComments(subTopicId, user === null || user === void 0 ? void 0 : user.id);
                getTopic(topicId, user === null || user === void 0 ? void 0 : user.id);
                return _context.abrupt("return", new Promise());
              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return function get() {
        return _ref.apply(this, arguments);
      };
    }();
    get();
  }, [user === null || user === void 0 ? void 0 : user.id]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_11__.ThreadContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_13__.Line, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_CommonComponents_Tabs_Style__WEBPACK_IMPORTED_MODULE_12__.ThemeTab, {
    activeKey: key,
    onSelect: function onSelect(k) {
      return setKey(k);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
    eventKey: "all",
    title: "All"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_11__.ColumnContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_CommentColumn_Index__WEBPACK_IMPORTED_MODULE_10__["default"], {
    topicId: topicId,
    numComments: subtopic === null || subtopic === void 0 ? void 0 : subtopic.allComments,
    comments: allComments,
    commentSentiment: "",
    color: "#6A6E70"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
    eventKey: "positive",
    title: "Generally Positive"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_11__.ColumnContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_CommentColumn_Index__WEBPACK_IMPORTED_MODULE_10__["default"], {
    topicId: topicId,
    numComments: subtopic === null || subtopic === void 0 ? void 0 : subtopic.positiveComments,
    comments: positiveComments,
    commentSentiment: "Generally Positive",
    color: "#6A6E70"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
    eventKey: "neutral",
    title: "Neutral"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_11__.ColumnContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_CommentColumn_Index__WEBPACK_IMPORTED_MODULE_10__["default"], {
    topicId: topicId,
    numComments: subtopic === null || subtopic === void 0 ? void 0 : subtopic.neutralComments,
    comments: neutralComments,
    commentSentiment: "Neutral",
    color: "#474A4F"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
    eventKey: "negative",
    title: "Generally Negative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_11__.ColumnContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_CommentColumn_Index__WEBPACK_IMPORTED_MODULE_10__["default"], {
    topicId: topicId,
    numComments: subtopic === null || subtopic === void 0 ? void 0 : subtopic.negativeComments,
    comments: negativeComments,
    commentSentiment: "Generally Negative",
    color: "#6A6E70"
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(SubTopicThread));

/***/ }),

/***/ "./src/pages/MainContent/components/SubTopicsPage/components/SubTopicThread/Style/index.js":
/*!*************************************************************************************************!*\
  !*** ./src/pages/MainContent/components/SubTopicsPage/components/SubTopicThread/Style/index.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColumnContainer": () => (/* binding */ ColumnContainer),
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "ThreadContainer": () => (/* binding */ ThreadContainer)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _templateObject, _templateObject2, _templateObject3;

var ThreadContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 70vw;\n\n"])));
var Container = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100vw;\n  height: 50vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 5em;\n\n  header {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 1.5em;\n    background-color: var(--m-primary-background-color);\n    border-radius: 1em;\n    h1 {\n      max-width: 30vw;\n    }\n    b {\n     color: var(--m-primary-color)\n    }\n  }\n"])));
var ColumnContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('section')(_templateObject3 || (_templateObject3 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  justify-content: space-evenly;\n  /* border-top: 1px solid gray; */\n  width: 100vw;\n\n  ul:first-child {\n    /* border-right: .1px dashed rgb(48,48,50); */\n  }\n\n   ul:last-child {\n    /* border-left: .1px solid rgb(48,48,50); */\n  }\n\n\n"])));

/***/ }),

/***/ "./src/pages/MainContent/components/SubTopicsPage/components/SubTopicsList/Index.jsx":
/*!*******************************************************************************************!*\
  !*** ./src/pages/MainContent/components/SubTopicsPage/components/SubTopicsList/Index.jsx ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _svgs_svgs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../svgs/svgs */ "./src/svgs/svgs.jsx");
/* harmony import */ var _hooks_useGoToSubTopic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useGoToSubTopic */ "./src/pages/MainContent/components/SubTopicsPage/hooks/useGoToSubTopic.js");
/* harmony import */ var _CommonComponents_Button_Index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../CommonComponents/Button/Index */ "./src/pages/CommonComponents/Button/Index.jsx");
/* harmony import */ var _SubTopicsTable_Index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../SubTopicsTable/Index */ "./src/pages/MainContent/components/SubTopicsPage/components/SubTopicsTable/Index.jsx");
/* harmony import */ var _redux_actions_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../redux/actions/ui */ "./src/redux/actions/ui/index.js");
/* harmony import */ var _App_Modal_Index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../App/Modal/Index */ "./src/pages/App/Modal/Index.jsx");
/* harmony import */ var _Style_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Style/index */ "./src/pages/MainContent/components/SubTopicsPage/components/SubTopicsList/Style/index.js");



// import { RiArrowDropRightFill } from 'react-icons/ri'







var SubTopicsList = function SubTopicsList() {
  var _Object$values;
  var subtopics = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (s) {
    return s.subtopics;
  });
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var _bindActionCreators = (0,redux__WEBPACK_IMPORTED_MODULE_9__.bindActionCreators)(_redux_actions_ui__WEBPACK_IMPORTED_MODULE_6__["default"], dispatch),
    openModal = _bindActionCreators.openModal;
  var genSubTopic = (_Object$values = Object.values(subtopics)) === null || _Object$values === void 0 ? void 0 : _Object$values.find(function (_ref) {
    var title = _ref.title;
    return title === 'General';
  });
  var goToSubTopic = (0,_hooks_useGoToSubTopic__WEBPACK_IMPORTED_MODULE_3__["default"])(genSubTopic === null || genSubTopic === void 0 ? void 0 : genSubTopic.id);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_8__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Browse Some", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "Sub-Topics"), ' ', "or Create Your Own..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CommonComponents_Button_Index__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: "button",
    onClick: function onClick() {
      return openModal(_App_Modal_Index__WEBPACK_IMPORTED_MODULE_7__.CREATE_SUB_TOPIC);
    }
  }, "Create Sub Topic +"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CommonComponents_Button_Index__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: "button",
    onClick: goToSubTopic
  }, "General Discussion", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_svgs_svgs__WEBPACK_IMPORTED_MODULE_2__.RightTriangleArrowFillSvg, {
    size: 50
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SubTopicsTable_Index__WEBPACK_IMPORTED_MODULE_5__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubTopicsList);

/***/ }),

/***/ "./src/pages/MainContent/components/SubTopicsPage/components/SubTopicsList/Style/index.js":
/*!************************************************************************************************!*\
  !*** ./src/pages/MainContent/components/SubTopicsPage/components/SubTopicsList/Style/index.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _templateObject;
/* eslint-disable import/prefer-default-export */

var Container = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('section')(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\n  width: 70vw;\n  padding-bottom: 20vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n   > h1 {\n    padding: .5em 2em;\n    border-radius: 2em;\n    margin-bottom: 2vw;\n    box-shadow:  -5px -5px 10px #5a5a5a, 5px 5px 10px #ffffff;\n  }\n  b {\n    color: var(--m-primary-color);\n  }\n\n  @media only screen and (max-width: 600px) {\n    width: 100vw\n  }\n"])));

/***/ }),

/***/ "./src/pages/MainContent/components/SubTopicsPage/components/SubTopicsRouter/Index.jsx":
/*!*********************************************************************************************!*\
  !*** ./src/pages/MainContent/components/SubTopicsPage/components/SubTopicsRouter/Index.jsx ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/node_modules/react-router/dist/index.js");
/* harmony import */ var _SubTopicThread_Index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SubTopicThread/Index */ "./src/pages/MainContent/components/SubTopicsPage/components/SubTopicThread/Index.jsx");
/* harmony import */ var _SubTopicsList_Index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SubTopicsList/Index */ "./src/pages/MainContent/components/SubTopicsPage/components/SubTopicsList/Index.jsx");
/* harmony import */ var _CommentThread_Index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CommentThread/Index */ "./src/pages/MainContent/components/SubTopicsPage/components/CommentThread/Index.jsx");
/* harmony import */ var _CommonComponents_WavyBackground_Index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../CommonComponents/WavyBackground/Index */ "./src/pages/CommonComponents/WavyBackground/Index.jsx");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: ":subTopicId/comments/:commentId",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CommonComponents_WavyBackground_Index__WEBPACK_IMPORTED_MODULE_4__["default"], {
      color: "green",
      top: "115%"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CommentThread_Index__WEBPACK_IMPORTED_MODULE_3__["default"], null))
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: ":subTopicId",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CommonComponents_WavyBackground_Index__WEBPACK_IMPORTED_MODULE_4__["default"], {
      color: "green",
      top: "115%"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SubTopicThread_Index__WEBPACK_IMPORTED_MODULE_1__["default"], null))
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SubTopicsList_Index__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  }));
});

/***/ }),

/***/ "./src/pages/MainContent/components/SubTopicsPage/components/SubTopicsTable/Index.jsx":
/*!********************************************************************************************!*\
  !*** ./src/pages/MainContent/components/SubTopicsPage/components/SubTopicsTable/Index.jsx ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/node_modules/react-router/dist/index.js");
/* harmony import */ var _SubTopicsItem_Index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SubTopicsItem/Index */ "./src/pages/MainContent/components/SubTopicsPage/components/SubTopicsTable/SubTopicsItem/Index.jsx");
/* harmony import */ var _Style_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Style/index */ "./src/pages/MainContent/components/SubTopicsPage/Style/index.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Style */ "./src/pages/MainContent/components/SubTopicsPage/components/SubTopicsTable/Style/index.js");

/* eslint-disable react/jsx-props-no-spreading */






var SubTopicsTable = function SubTopicsTable() {
  // const user = useSelector((state) => state.session.currentUser)
  var subtopics = Object.values((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.subtopics;
  }));
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useParams)(),
    topicId = _useParams.topicId;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_4__.Line, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_5__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_5__.TableHeader, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h1", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, "Covid"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, "Sub Topics"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_5__.Table, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_5__.ColHeader, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_5__.ColItem, null, " Created By "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_5__.ColItem, null, " Title "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_5__.ColItem, null, " Comments "))), subtopics.map(function (subtopic) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_SubTopicsItem_Index__WEBPACK_IMPORTED_MODULE_3__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: subtopic.id
    }, subtopic, {
      subtopic: subtopic,
      topicId: topicId
    }));
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubTopicsTable);

/***/ }),

/***/ "./src/pages/MainContent/components/SubTopicsPage/components/SubTopicsTable/Style/index.js":
/*!*************************************************************************************************!*\
  !*** ./src/pages/MainContent/components/SubTopicsPage/components/SubTopicsTable/Style/index.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColHeader": () => (/* binding */ ColHeader),
/* harmony export */   "ColItem": () => (/* binding */ ColItem),
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "Row": () => (/* binding */ Row),
/* harmony export */   "RowItem": () => (/* binding */ RowItem),
/* harmony export */   "Table": () => (/* binding */ Table),
/* harmony export */   "TableHeader": () => (/* binding */ TableHeader)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;
/* eslint-disable import/prefer-default-export */

var Container = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([" \n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 90%;\n  box-shadow: 0 0 40px -10px rgba(0, 0, 0, .4);\n\n  @media only screen and (max-width: 600px) {\n    width: 100vw;\n  }\n\n"])));
var TableHeader = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('header')(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([" \n    height: 10vh;\n    background-image: linear-gradient(to right, var(--m-primary-background-color), #83af9b);\n    color: #fff;\n    position: relative;\n    /* border-radius: 12px 12px 0 0; */\n    overflow: hidden;\n    width: 100%;\n    /* border-radius: 12px; */\n    h1 {\n      width: 100%;\n      height: 100%;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      z-index: 2;\n      margin: 0;\n      \n      span {\n        display: block;\n      }\n      \n      span:first-child {\n        font-size: 1.5vw;\n        font-weight: 700;\n        letter-spacing: 6.5px;\n        @media only screen and (max-width: 600px) {\n          font-size: 3.5vw;\n        }\n      }\n      \n      span:last-child {\n        font-size: .8vw;\n        font-weight: 500;\n        letter-spacing: 3.55px;\n        opacity: .85;\n        transform: translateY(-2px);\n        @media only screen and (max-width: 600px) {\n          font-size: 3.3vw;\n        }\n      }\n    }\n    \n    .leaderboard__icon {\n      fill: #fff;\n      opacity: .35;\n      width: 50px;\n      position: absolute;\n      top: 50%;\n      transform: translate(-50%, -50%);\n    }\n"])));
var Table = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('table')(_templateObject3 || (_templateObject3 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([" \n  border-radius: 0 0 12px 12px;\n  padding: 15px 15px 20px;\n  display: grid;\n  row-gap: 8px;\n  width: 100%;\n  \n"])));
var ColHeader = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('tr')(_templateObject4 || (_templateObject4 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  align-items: center;\n  padding: 10px 30px 10px 10px;\n  background-color: var(--bg-accent);\n  border-radius: .5vw;\n\n"])));
var ColItem = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('th')(_templateObject5 || (_templateObject5 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  color: white;\n  font-weight: bold;\n  letter-spacing: .1vw;\n  font-size: 1vw;\n  @media only screen and (max-width: 600px) {\n    font-size: 2vw;\n  }\n\n"])));
var Row = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('tr')(_templateObject6 || (_templateObject6 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([" \n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    align-items: center;\n    padding: 10px 30px 10px 10px;\n    overflow: hidden;\n    border-radius: .5vw;\n    box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);\n    cursor: pointer;\n    transition: transform .25s cubic-bezier(.7,.98,.86,.98), box-shadow .25s cubic-bezier(.7,.98,.86,.98);\n    background-color: #fff;\n    z-index: 999999999;\n    \n    &:hover {\n      transform: scale(1.1);\n      box-shadow: 0 9px 47px 11px rgba(51, 51, 51, 0.18);\n    }\n  \n  \n"])));
var RowItem = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('td')(_templateObject7 || (_templateObject7 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([" \n  /* opacity: .8; */\n  font-weight: 600;\n  color: #979cb0;\n  font-weight: 600;\n  \n  letter-spacing: .1vw;    \n\n  font-size: 1vw;\n  @media only screen and (max-width: 600px) {\n    font-size: 2vw;\n  }\n\n  img {\n    width: 2vw;\n    height: 2vw;\n    @media only screen and (max-width: 600px) {\n      width: 4vw;\n      height: 4vw;\n    }\n  }\n"])));

/***/ }),

/***/ "./src/pages/MainContent/components/SubTopicsPage/components/SubTopicsTable/SubTopicsItem/Index.jsx":
/*!**********************************************************************************************************!*\
  !*** ./src/pages/MainContent/components/SubTopicsPage/components/SubTopicsTable/SubTopicsItem/Index.jsx ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_routing_useGoToCommentThread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../hooks/routing/useGoToCommentThread */ "./src/pages/hooks/routing/useGoToCommentThread.js");
/* harmony import */ var _Style_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Style/index */ "./src/pages/MainContent/components/SubTopicsPage/components/SubTopicsTable/Style/index.js");



var SubTopicsItem = function SubTopicsItem(_ref) {
  var id = _ref.id,
    title = _ref.title,
    createdBy = _ref.createdBy,
    allComments = _ref.allComments,
    topicId = _ref.topicId,
    createdByIconSrc = _ref.createdByIconSrc;
  var goToCommentThread = (0,_hooks_routing_useGoToCommentThread__WEBPACK_IMPORTED_MODULE_1__["default"])(topicId, id);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_2__.Row, {
    onClick: goToCommentThread
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_2__.RowItem, null, ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: createdByIconSrc || 'https://civil-dev.s3.us-west-1.amazonaws.com/profile_img_1.png',
    alt: ""
  }), ' ', "".concat(createdBy.substring(0, 12), "...")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_2__.RowItem, null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_2__.RowItem, null, allComments)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubTopicsItem);

/***/ }),

/***/ "./src/pages/MainContent/components/SubTopicsPage/components/hooks/useCategorizeComments.js":
/*!**************************************************************************************************!*\
  !*** ./src/pages/MainContent/components/SubTopicsPage/components/hooks/useCategorizeComments.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");


var sentiments = new Set(['POSITIVE', 'NEUTRAL', 'NEGATIVE']);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var comments = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.comments.list;
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var categorizedComments = {
      POSITIVE: [],
      NEUTRAL: [],
      NEGATIVE: [],
      all: comments
    };
    comments.forEach(function (comment) {
      var _comment$data;
      if (sentiments.has((_comment$data = comment.data) === null || _comment$data === void 0 ? void 0 : _comment$data.sentiment)) {
        var _comment$data2;
        categorizedComments[(_comment$data2 = comment.data) === null || _comment$data2 === void 0 ? void 0 : _comment$data2.sentiment].push(comment);
      }
    });
    return categorizedComments;
  }, [comments]);
});

/***/ }),

/***/ "./src/pages/MainContent/components/SubTopicsPage/hooks/useGoToSubTopic.js":
/*!*********************************************************************************!*\
  !*** ./src/pages/MainContent/components/SubTopicsPage/hooks/useGoToSubTopic.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/node_modules/react-router/dist/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (id) {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    return navigate(id);
  }, [id]);
});

/***/ }),

/***/ "./src/pages/MainContent/components/TribunalNotificationsPage/Index.jsx":
/*!******************************************************************************!*\
  !*** ./src/pages/MainContent/components/TribunalNotificationsPage/Index.jsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _UserInformationDisplay_Index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../UserInformationDisplay/Index */ "./src/pages/UserInformationDisplay/Index.jsx");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Style */ "./src/pages/MainContent/Style/index.js");
/* harmony import */ var _components_NotificationItem_Index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/NotificationItem/Index */ "./src/pages/MainContent/components/TribunalNotificationsPage/components/NotificationItem/Index.jsx");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Style */ "./src/pages/MainContent/components/TribunalNotificationsPage/Style/index.js");






var TribunalNotifications = function TribunalNotifications() {
  var notifications = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (s) {
    return s.notifications.tribunalNotificationsList;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_3__.HomePageGrid, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_3__.Left, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_UserInformationDisplay_Index__WEBPACK_IMPORTED_MODULE_2__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_3__.Middle, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_5__.Container, {
    id: "notifications-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_5__.BorderContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_5__.Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Recent Notifications")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_5__.NotificationList, null, notifications.map(function (notification) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_NotificationItem_Index__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: notification.id,
      notification: notification
    });
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_3__.Right, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, ".")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TribunalNotifications);

/***/ }),

/***/ "./src/pages/MainContent/components/TribunalNotificationsPage/Style/index.js":
/*!***********************************************************************************!*\
  !*** ./src/pages/MainContent/components/TribunalNotificationsPage/Style/index.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BorderContainer": () => (/* binding */ BorderContainer),
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "Header": () => (/* binding */ Header),
/* harmony export */   "NotificationList": () => (/* binding */ NotificationList)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

var BorderContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  border: 1px solid gray;\n  border-top: none;\n  z-index: 9999;\n  background-color: white;\n  min-height: calc(100vh - var(--nav-size));\n\n"])));
var NotificationList = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('ul')(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex-wrap: wrap;\n  padding: 0;\n  padding-bottom: 30vh;\n  background-color: #F0F2F5;\n  background-color: white;\n\n"])));
var Container = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(_templateObject3 || (_templateObject3 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100%;\n"])));
var Header = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('header')(_templateObject4 || (_templateObject4 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([" \n  width: 100%;\n  border-bottom: 1px solid gray;\n  padding: 2vw 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  p {\n    margin: 0 1vw;\n    font-size: 1.1vw;\n    display: flex;\n    align-items: center;\n  }\n"])));

/***/ }),

/***/ "./src/pages/MainContent/components/TribunalNotificationsPage/components/MenuTime/Index.jsx":
/*!**************************************************************************************************!*\
  !*** ./src/pages/MainContent/components/TribunalNotificationsPage/components/MenuTime/Index.jsx ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuTime": () => (/* binding */ MenuTime)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _svgs_svgs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../svgs/svgs */ "./src/svgs/svgs.jsx");
/* harmony import */ var _redux_actions_notifications_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../redux/actions/notifications/index */ "./src/redux/actions/notifications/index.js");
/* harmony import */ var _hooks_redux_useBindDispatch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../hooks/redux/useBindDispatch */ "./src/pages/hooks/redux/useBindDispatch.js");
/* harmony import */ var _Style_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Style/index */ "./src/pages/MainContent/components/TribunalNotificationsPage/components/MenuTime/Style/index.js");






var MenuTime = function MenuTime(_ref) {
  var time = _ref.time,
    id = _ref.id,
    eventType = _ref.eventType;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var _useBindDispatch = (0,_hooks_redux_useBindDispatch__WEBPACK_IMPORTED_MODULE_4__["default"])(_redux_actions_notifications_index__WEBPACK_IMPORTED_MODULE_3__["default"]),
    updateNotificationToRead = _useBindDispatch.updateNotificationToRead,
    deleteNotification = _useBindDispatch.deleteNotification;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_5__.MenuTimeContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_5__.MenuIconContainer, {
    onClick: function onClick(e) {
      e.stopPropagation();
      setIsOpen(function (prev) {
        return !prev;
      });
      var eventListener = function eventListener() {
        setIsOpen(function (prev) {
          return !prev;
        });
        document.getElementById('notifications-container').removeEventListener('click', eventListener);
      };
      document.getElementById('notifications-container').addEventListener('click', eventListener);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_svgs_svgs__WEBPACK_IMPORTED_MODULE_2__.VerticalMenuDotsSvg, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_5__.ActionMenu, {
    isOpen: isOpen,
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_5__.ActionMenuItem, {
    onClick: function onClick() {
      return updateNotificationToRead(eventType, id);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_svgs_svgs__WEBPACK_IMPORTED_MODULE_2__.ReadSvg, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, "Mark As Read")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_5__.ActionMenuItem, {
    onClick: function onClick() {
      return deleteNotification(eventType, id);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_svgs_svgs__WEBPACK_IMPORTED_MODULE_2__.DeleteSvg, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, "Delete Notification")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_5__.Time, null, time));
};

/***/ }),

/***/ "./src/pages/MainContent/components/TribunalNotificationsPage/components/MenuTime/Style/index.js":
/*!*******************************************************************************************************!*\
  !*** ./src/pages/MainContent/components/TribunalNotificationsPage/components/MenuTime/Style/index.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionMenu": () => (/* binding */ ActionMenu),
/* harmony export */   "ActionMenuItem": () => (/* binding */ ActionMenuItem),
/* harmony export */   "MenuIconContainer": () => (/* binding */ MenuIconContainer),
/* harmony export */   "MenuTimeContainer": () => (/* binding */ MenuTimeContainer),
/* harmony export */   "Time": () => (/* binding */ Time)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

var MenuTimeContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([" \n  z-index: 99999;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: space-between;\n  align-items: flex-end;\n  padding: 5px 0;\n  width: 8%;\n  border-left: 1px solid lightgray;\n  border-color: rgba(200,200,200,0.25);\n\n"])));
var Time = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('span')(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  color: gray;\n  font-size: 1vw;\n  padding: 0 10px;\n"])));
var MenuIconContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(_templateObject3 || (_templateObject3 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([" \n  position: relative;\n  padding: 10px;\n  background-color: lightgray;\n  border-radius: .1vw;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #2cdd9b;\n  background-color: #e5f7f0;\n  border-color: #d8f7eb;\n  transition: all 1s;\n  cursor: pointer;\n  :hover {\n    filter: brightness(0.85);\n  }\n\n"])));
var ActionMenu = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('ul')(_templateObject4 || (_templateObject4 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  z-index: 99999;\n  display: flex;\n  border: .5px solid lightgray;\n  border-color: rgba(200,200,200,0.25) ;\n  flex-direction: column;\n  justify-content: center;\n  position: absolute;\n  transform: translate(-55%, 55%) ;\n  display: ", " ;\n  width: 10vw;\n  background-color: white;\n  box-shadow: 0px 10px 20px rgb(60 60 60 / 10%);\n  border-radius:  .5em;\n  margin: 0;\n\n"])), function (props) {
  return props.isOpen ? 'block' : 'none';
});
var ActionMenuItem = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('li')(_templateObject5 || (_templateObject5 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  list-style: none;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 20px;\n  border-radius: var(--border-radius);\n  margin: 0 !important;\n  color: black;\n  transition: none;\n  :hover {\n    background-color: var(--m-btn-hover-color);\n\n  }\n\n  span {\n    font-weight: 500;\n    font-size: .65vw !important;\n  }\n\n"])));

/***/ }),

/***/ "./src/pages/MainContent/components/TribunalNotificationsPage/components/NotificationItem/Index.jsx":
/*!**********************************************************************************************************!*\
  !*** ./src/pages/MainContent/components/TribunalNotificationsPage/components/NotificationItem/Index.jsx ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _enums_notification_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../enums/notification_types */ "./src/enums/notification_types.js");
/* harmony import */ var _TribunalSelectionNotification_Index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../TribunalSelectionNotification/Index */ "./src/pages/MainContent/components/TribunalNotificationsPage/components/TribunalSelectionNotification/Index.jsx");
/* harmony import */ var _UserContentReportedNotification_Index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../UserContentReportedNotification/Index */ "./src/pages/MainContent/components/TribunalNotificationsPage/components/UserContentReportedNotification/Index.jsx");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Style */ "./src/pages/MainContent/components/TribunalNotificationsPage/components/NotificationItem/Style/index.js");





var NotificationItem = function NotificationItem(_ref) {
  var notification = _ref.notification;
  var ItemComponent;
  switch (notification.eventType) {
    case _enums_notification_types__WEBPACK_IMPORTED_MODULE_1__.TribunalSelection:
      ItemComponent = _TribunalSelectionNotification_Index__WEBPACK_IMPORTED_MODULE_2__["default"];
      break;
    case _enums_notification_types__WEBPACK_IMPORTED_MODULE_1__.UserContentReported:
      ItemComponent = _UserContentReportedNotification_Index__WEBPACK_IMPORTED_MODULE_3__["default"];
      break;
    default:
      break;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_4__.Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ItemComponent, {
    notification: notification
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotificationItem);

/***/ }),

/***/ "./src/pages/MainContent/components/TribunalNotificationsPage/components/NotificationItem/Style/index.js":
/*!***************************************************************************************************************!*\
  !*** ./src/pages/MainContent/components/TribunalNotificationsPage/components/NotificationItem/Style/index.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Item": () => (/* binding */ Item)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _templateObject;

var Item = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('li')(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid gray;\n  width: 100%;\n  height: 15vh;\n  background-color: white;\n  /* cursor: pointer; */\n  padding-right: .5vw;\n  transition: all 0.5s;\n  :hover {\n    background-color: #F8F9FA;\n  }\n"])));

/***/ }),

/***/ "./src/pages/MainContent/components/TribunalNotificationsPage/components/Style/index.js":
/*!**********************************************************************************************!*\
  !*** ./src/pages/MainContent/components/TribunalNotificationsPage/components/Style/index.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeftContainer": () => (/* binding */ LeftContainer),
/* harmony export */   "MiddleContainer": () => (/* binding */ MiddleContainer),
/* harmony export */   "RightContainer": () => (/* binding */ RightContainer)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _templateObject, _templateObject2, _templateObject3;

var LeftContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 22%;\n  height: 100% ;\n  display: flex;\n  align-items: center;\n  img {\n    height: 5vh;\n  }\n  border-right: 1px solid lightgray;\n  border-color: rgba(200,200,200,0.25);\n  :hover {\n    background-color: #F2F2F2;\n  }\n"])));
var RightContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 20%;\n  display: flex;\n  align-items: center;\n  img {\n    height: 5vh;\n  }\n"])));
var MiddleContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(_templateObject3 || (_templateObject3 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  margin-left: 50px;\n  width: 80%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  img {\n    height: 3vh;\n    position: absolute;\n    top: 8px;\n  }\n  svg {\n    height: 3vh;\n    position: absolute;\n    top: 8px;\n  }\n  h3 {\n    font-size: .9vw;\n  }\n  a {\n    font-weight: bold;\n    color: var(--m-primary-btn-color);\n    :hover {\n      filter: brightness(0.85);\n    }\n  }\n"])));

/***/ }),

/***/ "./src/pages/MainContent/components/TribunalNotificationsPage/components/TribunalSelectionNotification/Index.jsx":
/*!***********************************************************************************************************************!*\
  !*** ./src/pages/MainContent/components/TribunalNotificationsPage/components/TribunalSelectionNotification/Index.jsx ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _MenuTime_Index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../MenuTime/Index */ "./src/pages/MainContent/components/TribunalNotificationsPage/components/MenuTime/Index.jsx");
/* harmony import */ var _generic_string_dateFormatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../generic/string/dateFormatter */ "./src/generic/string/dateFormatter.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Style */ "./src/pages/MainContent/components/TribunalNotificationsPage/components/Style/index.js");
/* harmony import */ var _enums_notification_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../enums/notification_types */ "./src/enums/notification_types.js");
/* harmony import */ var _svgs_svgs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../svgs/svgs */ "./src/svgs/svgs.jsx");







var TribunalSelectionNotification = function TribunalSelectionNotification(_ref) {
  var notification = _ref.notification;
  var createdAt = notification.createdAt,
    id = notification.id,
    contentType = notification.contentType,
    reportedContentId = notification.reportedContentId;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_3__.MiddleContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_svgs_svgs__WEBPACK_IMPORTED_MODULE_5__.Gavel2, {
    size: "5vh"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "You have been selected for", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
    to: "/tribunal/".concat(contentType, "/").concat(reportedContentId)
  }, "Comment!"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MenuTime_Index__WEBPACK_IMPORTED_MODULE_1__.MenuTime, {
    time: (0,_generic_string_dateFormatter__WEBPACK_IMPORTED_MODULE_2__.getTimeSince)(createdAt),
    id: id,
    eventType: _enums_notification_types__WEBPACK_IMPORTED_MODULE_4__.TribunalSelection
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TribunalSelectionNotification);

/***/ }),

/***/ "./src/pages/MainContent/components/TribunalNotificationsPage/components/UserContentReportedNotification/Index.jsx":
/*!*************************************************************************************************************************!*\
  !*** ./src/pages/MainContent/components/TribunalNotificationsPage/components/UserContentReportedNotification/Index.jsx ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _MenuTime_Index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../MenuTime/Index */ "./src/pages/MainContent/components/TribunalNotificationsPage/components/MenuTime/Index.jsx");
/* harmony import */ var _generic_string_dateFormatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../generic/string/dateFormatter */ "./src/generic/string/dateFormatter.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Style */ "./src/pages/MainContent/components/TribunalNotificationsPage/components/Style/index.js");
/* harmony import */ var _enums_notification_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../enums/notification_types */ "./src/enums/notification_types.js");
/* harmony import */ var _svgs_svgs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../svgs/svgs */ "./src/svgs/svgs.jsx");







var UserContentReportedNotification = function UserContentReportedNotification(_ref) {
  var notification = _ref.notification;
  var createdAt = notification.createdAt,
    id = notification.id,
    contentType = notification.contentType,
    reportedContentId = notification.reportedContentId;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_3__.MiddleContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_svgs_svgs__WEBPACK_IMPORTED_MODULE_5__.Gavel2, {
    size: "5vh"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Your", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
    to: "/tribunal/".concat(contentType, "/").concat(reportedContentId)
  }, "Content"), ' ', "Has Been Reported And Is Subject To Community Tribunal Review!", ' ', '\n', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
    to: "/tribunal/".concat(contentType, "/").concat(reportedContentId)
  }, "Click To Defend Yourself!"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MenuTime_Index__WEBPACK_IMPORTED_MODULE_1__.MenuTime, {
    time: (0,_generic_string_dateFormatter__WEBPACK_IMPORTED_MODULE_2__.getTimeSince)(createdAt),
    id: id,
    eventType: _enums_notification_types__WEBPACK_IMPORTED_MODULE_4__.UserContentReported
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserContentReportedNotification);

/***/ }),

/***/ "./src/pages/RecommendationsList/Index.jsx":
/*!*************************************************!*\
  !*** ./src/pages/RecommendationsList/Index.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_RecItem_Index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/RecItem/Index */ "./src/pages/RecommendationsList/components/RecItem/Index.jsx");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Style */ "./src/pages/RecommendationsList/Style/index.js");



var RecommendationsList = function RecommendationsList(_ref) {
  var recs = _ref.recs;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_2__.RecListContainer, null, recs.map(function (rec, idx) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_RecItem_Index__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: String(idx),
      rec: rec
    });
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RecommendationsList);

/***/ }),

/***/ "./src/pages/RecommendationsList/Style/index.js":
/*!******************************************************!*\
  !*** ./src/pages/RecommendationsList/Style/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecListContainer": () => (/* binding */ RecListContainer)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _templateObject;

var RecListContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('ul')(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  background: white;\n"])));

/***/ }),

/***/ "./src/pages/RecommendationsList/components/RecItem/Index.jsx":
/*!********************************************************************!*\
  !*** ./src/pages/RecommendationsList/components/RecItem/Index.jsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TopicForm_components_LinkMetaData_hooks_useGetLinkMetaDataEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../TopicForm/components/LinkMetaData/hooks/useGetLinkMetaDataEffect */ "./src/pages/TopicForm/components/LinkMetaData/hooks/useGetLinkMetaDataEffect.js");
/* harmony import */ var _hooks_useNavigateToPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hooks/useNavigateToPage */ "./src/pages/RecommendationsList/components/RecItem/hooks/useNavigateToPage.js");
/* harmony import */ var _Style_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Style/index */ "./src/pages/RecommendationsList/components/RecItem/Style/index.js");




var RecItem = function RecItem(_ref) {
  var _metaData$ogImage, _rec$subTopic, _rec$topic, _rec$subTopic2;
  var rec = _ref.rec;
  var content = null;
  var topic = rec.topic,
    subTopic = rec.subTopic;
  var metaData = (0,_TopicForm_components_LinkMetaData_hooks_useGetLinkMetaDataEffect__WEBPACK_IMPORTED_MODULE_1__["default"])({
    contentUrl: rec.externalRecommendedContent
  });
  var navigateToPage = (0,_hooks_useNavigateToPage__WEBPACK_IMPORTED_MODULE_2__["default"])(rec);
  if (topic) {
    if (topic !== null && topic !== void 0 && topic.ytUrl) {
      var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
      var match = topic.ytUrl.match(regExp);
      if (match && match[2].length === 11) {
        content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
          src: "http://img.youtube.com/vi/".concat(match[2], "/sddefault.jpg"),
          alt: "No Thumb"
        });
      }
    } else if (!(topic !== null && topic !== void 0 && topic.ytUrl) && topic !== null && topic !== void 0 && topic.contentUrl) {
      content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
        src: topic.thumbImgUrl,
        alt: "No Thumb"
      });
    }
  } else {
    // content = <img src="./image.png" alt="No Thumb" />
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_3__.Container, {
    onClick: navigateToPage
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_3__.Thumb, null, content, metaData && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_3__.OGImage, {
    src: (_metaData$ogImage = metaData.ogImage) === null || _metaData$ogImage === void 0 ? void 0 : _metaData$ogImage.url,
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_3__.DescriptionContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_3__.Title, null, rec.topic ? rec.topic.title : (_rec$subTopic = rec.subTopic) === null || _rec$subTopic === void 0 ? void 0 : _rec$subTopic.title, metaData && metaData.ogTitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_3__.SubTitle, null, ((_rec$topic = rec.topic) === null || _rec$topic === void 0 ? void 0 : _rec$topic.createdBy) || ((_rec$subTopic2 = rec.subTopic) === null || _rec$subTopic2 === void 0 ? void 0 : _rec$subTopic2.createdBy), metaData && (metaData === null || metaData === void 0 ? void 0 : metaData.ogDescription))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(RecItem));

/***/ }),

/***/ "./src/pages/RecommendationsList/components/RecItem/Style/index.js":
/*!*************************************************************************!*\
  !*** ./src/pages/RecommendationsList/components/RecItem/Style/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "DescriptionContainer": () => (/* binding */ DescriptionContainer),
/* harmony export */   "OGDescription": () => (/* binding */ OGDescription),
/* harmony export */   "OGImage": () => (/* binding */ OGImage),
/* harmony export */   "OGTitle": () => (/* binding */ OGTitle),
/* harmony export */   "OGUrl": () => (/* binding */ OGUrl),
/* harmony export */   "SubTitle": () => (/* binding */ SubTitle),
/* harmony export */   "Thumb": () => (/* binding */ Thumb),
/* harmony export */   "Title": () => (/* binding */ Title)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;

var Container = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('li')(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 95%;\n  height: 17vh;\n  display: flex;\n  margin: 10px;\n  cursor: pointer;\n  \n"])));
var Thumb = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: 100%;\n  flex: 40%;\n  background: white;\n  margin-right: 8px;\n  aspect-ratio: 12 / 12;\n  img {\n    height: 100%;\n  }\n"])));
var DescriptionContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(_templateObject3 || (_templateObject3 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: 100%;\n  display: flex;\n  flex: 60%;\n  flex-direction: column;\n  align-items: center;\n\n"])));
var Title = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('h2')(_templateObject4 || (_templateObject4 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100%;\n  display: flex;\n  font-size: 1vw;\n  font-weight: bold;\n\n  @media only screen and (max-width: 600px) {\n    font-size: 3.5vw;\n  }\n\n\n"])));
var SubTitle = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('h3')(_templateObject5 || (_templateObject5 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100%;\n  color: gray;\n  font-size: .6vw;\n  @media only screen and (max-width: 600px) {\n    font-size: 3vw;\n  }\n"])));
var OGImage = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('img')(_templateObject6 || (_templateObject6 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([" \n  border-radius: 1vw;\n\n"])));
var OGUrl = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('span')(_templateObject7 || (_templateObject7 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([" \n  color: gray;\n  font-size: 1vw;\n"])));
var OGTitle = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('h3')(_templateObject8 || (_templateObject8 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n font-size: 1vw;\n margin: .6vw 0 .1vw 0;\n color: gray;\n font-weight: bold;\n"])));
var OGDescription = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('p')(_templateObject9 || (_templateObject9 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([" \n  color: gray;\n  font-size: .8vw;\n  max-height: 35vh;\n  overflow-y: scroll;\n \n"])));

/***/ }),

/***/ "./src/pages/RecommendationsList/components/RecItem/hooks/useNavigateToPage.js":
/*!*************************************************************************************!*\
  !*** ./src/pages/RecommendationsList/components/RecItem/hooks/useNavigateToPage.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/node_modules/react-router/dist/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (rec) {
  var topic = rec.topic,
    subTopic = rec.subTopic;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    if (rec.externalRecommendedContent) {
      window.open(rec.externalRecommendedContent, '_blank');
      return;
    }
    if (topic) navigate("/topics/".concat(topic.id, "/subtopics/"));else navigate("/topics/".concat(subTopic.topicId, "/subtopics/").concat(subTopic.id));
  }, [rec]);
});

/***/ }),

/***/ "./src/pages/Tribunal/Index.jsx":
/*!**************************************!*\
  !*** ./src/pages/Tribunal/Index.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/node_modules/react-router/dist/index.js");
/* harmony import */ var _Style_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Style/index */ "./src/pages/Tribunal/Style/index.js");
/* harmony import */ var _Topics_components_TopicItem_Index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Topics/components/TopicItem/Index */ "./src/pages/Topics/components/TopicItem/Index.jsx");
/* harmony import */ var _hooks_redux_useBindDispatch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/redux/useBindDispatch */ "./src/pages/hooks/redux/useBindDispatch.js");
/* harmony import */ var _redux_actions_topics_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/actions/topics/index */ "./src/redux/actions/topics/index.js");
/* harmony import */ var _redux_actions_reports_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../redux/actions/reports/index */ "./src/redux/actions/reports/index.js");
/* harmony import */ var _redux_actions_tribunal_comments_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../redux/actions/tribunal_comments/index */ "./src/redux/actions/tribunal_comments/index.js");
/* harmony import */ var _redux_actions_comments_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../redux/actions/comments/index */ "./src/redux/actions/comments/index.js");
/* harmony import */ var _generic_time_calculateTimeLeft__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../generic/time/calculateTimeLeft */ "./src/generic/time/calculateTimeLeft.js");
/* harmony import */ var _components_TribunalComments_Index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/TribunalComments/Index */ "./src/pages/Tribunal/components/TribunalComments/Index.jsx");
/* harmony import */ var _components_VotingBox_Index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/VotingBox/Index */ "./src/pages/Tribunal/components/VotingBox/Index.jsx");
/* harmony import */ var _MainContent_components_SubTopicsPage_components_Comment_Index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../MainContent/components/SubTopicsPage/components/Comment/Index */ "./src/pages/MainContent/components/SubTopicsPage/components/Comment/Index.jsx");
/* harmony import */ var _enums_content_type__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../enums/content_type */ "./src/enums/content_type.js");
















var Tribunal = function Tribunal() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_15__.useParams)(),
    contentId = _useParams.contentId,
    contentType = _useParams.contentType;
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (s) {
    return s.session.currentUser;
  });
  var topics = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (s) {
    return s.topics.list;
  });
  var comments = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (s) {
    return s.comments.list;
  });
  var tribunalComments = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (s) {
    return s.tribunalComments;
  });
  var reportStats = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (s) {
    return s.reports;
  })[contentId];
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
    timeLeft = _useState2[0],
    setTimeLeft = _useState2[1];
  var _useBindDispatch = (0,_hooks_redux_useBindDispatch__WEBPACK_IMPORTED_MODULE_5__["default"])(_redux_actions_topics_index__WEBPACK_IMPORTED_MODULE_6__["default"], _redux_actions_reports_index__WEBPACK_IMPORTED_MODULE_7__["default"], _redux_actions_tribunal_comments_index__WEBPACK_IMPORTED_MODULE_8__["default"], _redux_actions_comments_index__WEBPACK_IMPORTED_MODULE_9__["default"]),
    getTopic = _useBindDispatch.getTopic,
    getReport = _useBindDispatch.getReport,
    getAllTribunalCommentsBatch = _useBindDispatch.getAllTribunalCommentsBatch,
    getComment = _useBindDispatch.getComment;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var timer;
    if (reportStats) {
      timer = setInterval(function () {
        setTimeLeft((0,_generic_time_calculateTimeLeft__WEBPACK_IMPORTED_MODULE_10__.calculateTimeLeft)(reportStats.reportPeriodEnd));
      }, 1000);
    }
    return function () {
      return clearTimeout(timer);
    };
  }, [reportStats]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (contentId && user) {
      if (contentType === _enums_content_type__WEBPACK_IMPORTED_MODULE_14__.COMMENT) getComment(contentId);
      if (contentType === _enums_content_type__WEBPACK_IMPORTED_MODULE_14__.TOPIC) getTopic(contentId, user.id);
      getReport(contentId);
      getAllTribunalCommentsBatch(contentId);
    }
  }, [contentId, user]);
  var timerComponents = [];
  Object.keys(timeLeft).forEach(function (interval, idx) {
    if (!timeLeft[interval]) {
      return;
    }
    timerComponents.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
      key: String("".concat(idx, "0"))
    }, timeLeft[interval], ' ', interval, ' '));
  });
  var votingTimeUp = timerComponents.length === 0;
  var Content = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
    var topic = topics === null || topics === void 0 ? void 0 : topics.find(function (t) {
      return t.id === contentId;
    });
    var comment = comments === null || comments === void 0 ? void 0 : comments.find(function (c) {
      return c.data.id === contentId;
    });
    if (topic) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Topics_components_TopicItem_Index__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: topic.id,
      topic: topic,
      user: user
    });
    if (comment) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_MainContent_components_SubTopicsPage_components_Comment_Index__WEBPACK_IMPORTED_MODULE_13__["default"], {
      commentData: comment.data,
      replies: comment.children
    });
    return null;
  }, [topics, comments, contentId]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_3__.OuterContainer, {
    id: "tribunal-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_3__.Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_3__.StyledScalesSvg, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h1", null, "Community Court"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_3__.StyledScalesSvg, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_3__.Timer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h4", null, reportStats !== null && reportStats !== void 0 && reportStats.reportPeriodEnd ? 'Voting Period Timing Remaining' : 'Voting Has Ended'), '\n', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, !Object.keys(timeLeft) && reportStats ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, "Time Is Up!") : timerComponents)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_3__.InnerContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_3__.StyledPillarSvg, null), Content, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_3__.StyledPillarSvg, null)), reportStats && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_VotingBox_Index__WEBPACK_IMPORTED_MODULE_12__["default"], {
    contentId: contentId,
    reportStats: reportStats,
    votingTimeUp: votingTimeUp
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_3__.ReportStatsContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_3__.ReportStatItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h2", null, "Toxic Reports"), reportStats && (reportStats.numToxicReports || 0)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_3__.ReportStatItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h2", null, "Personal Attack Reports"), reportStats && (reportStats.numPersonalAttackReports || 0)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_3__.ReportStatItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h2", null, "Spam Reports"), reportStats && (reportStats.numSpamReports || 0))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_TribunalComments_Index__WEBPACK_IMPORTED_MODULE_11__["default"], {
    comments: tribunalComments
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(Tribunal));

/***/ }),

/***/ "./src/pages/Tribunal/Style/index.js":
/*!*******************************************!*\
  !*** ./src/pages/Tribunal/Style/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": () => (/* binding */ Header),
/* harmony export */   "InnerContainer": () => (/* binding */ InnerContainer),
/* harmony export */   "MiddleSection": () => (/* binding */ MiddleSection),
/* harmony export */   "OuterContainer": () => (/* binding */ OuterContainer),
/* harmony export */   "ReportStatItem": () => (/* binding */ ReportStatItem),
/* harmony export */   "ReportStatsContainer": () => (/* binding */ ReportStatsContainer),
/* harmony export */   "StyledPillarSvg": () => (/* binding */ StyledPillarSvg),
/* harmony export */   "StyledScalesSvg": () => (/* binding */ StyledScalesSvg),
/* harmony export */   "Timer": () => (/* binding */ Timer),
/* harmony export */   "VotesAgainst": () => (/* binding */ VotesAgainst),
/* harmony export */   "VotesFor": () => (/* binding */ VotesFor),
/* harmony export */   "VotingContainer": () => (/* binding */ VotingContainer)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _svgs_svgs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../svgs/svgs */ "./src/svgs/svgs.jsx");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;


var OuterContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])('div')(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  padding-bottom: 60vh;\n"])));
var Header = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])('header')(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  align-items: center;\n  margin: clamp(30px, 1vw, 100px) 0 clamp(30px, 1vw, 100px) 0;\n  h1 {\n    font-weight: bold;\n    font-size: 2vw;\n    @media only screen and (max-width: 600px) {\n      font-size: 5.7vw;\n    }\n  }\n  svg {\n    width: 4vw !important;\n    height: 4vw !important;\n    @media only screen and (max-width: 600px) {\n      width: 12vw !important;\n      height: 12vw !important;\n    }\n    margin: 0 3vw;\n  }\n"])));
var StyledScalesSvg = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_svgs_svgs__WEBPACK_IMPORTED_MODULE_1__.ScalesSvg)(_templateObject3 || (_templateObject3 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 4vw !important;\n  height: 4vw !important;\n  margin: 0 1vw;\n"])));
var StyledPillarSvg = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_svgs_svgs__WEBPACK_IMPORTED_MODULE_1__.PillarSvg)(_templateObject4 || (_templateObject4 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: block;\n"])));
var InnerContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])('div')(_templateObject5 || (_templateObject5 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  /* align-items: center; */\n  width: 100%;\n\n"])));
var VotingContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])('section')(_templateObject6 || (_templateObject6 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  width: 50%;\n  height: 14vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  box-shadow: 0px 10px 20px rgb(60 60 60 / 10%);\n  border-radius: 0.5em;\n  background-color: white;\n  border: 0.5px solid lightgray;\n  border-color: rgba(200, 200, 200, 0.25);\n  margin: clamp(30px, 1vw, 100px) 0 clamp(30px, 1vw, 100px) 0;\n\n  @media only screen and (max-width: 800px) {\n    width: 90%;\n    height: 30vw;\n  }\n\n  svg {\n    @media only screen and (max-width: 800px) {\n      width: 9vw;\n      height: 9vw;\n    }\n  }\n\n  span {\n    @media only screen and (max-width: 800px) {\n      font-size: 4vw;\n    }\n  }\n"])));
var ReportStatsContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])('ul')(_templateObject7 || (_templateObject7 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n"])));
var ReportStatItem = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])('li')(_templateObject8 || (_templateObject8 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background-color: var(--m-menu-item-hover);\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  box-shadow: 0px 10px 20px rgb(60 60 60 / 10%);\n  border-radius: 0.5em;\n  background-color: var(--m-secondary-background-color);\n  font-size: 1vw;\n  padding: 2vw 4vw;\n  margin: 2vw 4vw;\n  @media only screen and (max-width: 800px) {\n      font-size: 4vw;\n      margin: 2vw 2vw;\n\n    }\n"])));
var VotesAgainst = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])('div')(_templateObject9 || (_templateObject9 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  left: 10%;\n  top: 50%;\n  transform: translate(0, -50%);\n  font-size: 2vw;\n  align-items: center;\n  @media only screen and (max-width: 800px) {\n    font-size: 4vw;\n  }\n  \n"])));
var VotesFor = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])('div')(_templateObject10 || (_templateObject10 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  right: 10%;\n  top: 50%;\n  transform: translate(0, -50%);\n  font-size: 2vw;\n  align-items: center;\n\n  @media only screen and (max-width: 800px) {\n    font-size: 4vw;\n  }\n"])));
var Timer = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])('div')(_templateObject11 || (_templateObject11 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-size: 1.3vw; \n  color: gray;\n  margin: 0 0 clamp(30px, 1vw, 100px) 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  @media only screen and (max-width: 800px) {\n    font-size: 4vw;\n  }\n\n  h4 {\n    color: black;\n  }\n"])));
var MiddleSection = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])('div')(_templateObject12 || (_templateObject12 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\n  span:first-child {\n    font-weight: bold;\n    color: red;\n  }\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"])));

/***/ }),

/***/ "./src/pages/Tribunal/components/TribunalComments/Index.jsx":
/*!******************************************************************!*\
  !*** ./src/pages/Tribunal/components/TribunalComments/Index.jsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Tab.js");
/* harmony import */ var _CommonComponents_Line__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../CommonComponents/Line */ "./src/pages/CommonComponents/Line/index.js");
/* harmony import */ var _MainContent_components_SubTopicsPage_components_CommentColumn_Index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../MainContent/components/SubTopicsPage/components/CommentColumn/Index */ "./src/pages/MainContent/components/SubTopicsPage/components/CommentColumn/Index.jsx");
/* harmony import */ var _MainContent_components_SubTopicsPage_components_CommentThread_Style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../MainContent/components/SubTopicsPage/components/CommentThread/Style */ "./src/pages/MainContent/components/SubTopicsPage/components/CommentThread/Style/index.js");
/* harmony import */ var _hooks_useCategorizeComments__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hooks/useCategorizeComments */ "./src/pages/Tribunal/components/TribunalComments/hooks/useCategorizeComments.js");
/* harmony import */ var _Style_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Style/index */ "./src/pages/Tribunal/components/TribunalComments/Style/index.js");








var TribunalComments = function TribunalComments() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('all'),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
    key = _useState2[0],
    setKey = _useState2[1];
  var comments = (0,_hooks_useCategorizeComments__WEBPACK_IMPORTED_MODULE_5__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_CommonComponents_Line__WEBPACK_IMPORTED_MODULE_2__.Line, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_6__.StyledThemeTab, {
    activeKey: key,
    onSelect: function onSelect(k) {
      return setKey(k);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
    eventKey: "all",
    title: "All"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_MainContent_components_SubTopicsPage_components_CommentThread_Style__WEBPACK_IMPORTED_MODULE_4__.ColumnContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_MainContent_components_SubTopicsPage_components_CommentColumn_Index__WEBPACK_IMPORTED_MODULE_3__["default"], {
    numComments: comments === null || comments === void 0 ? void 0 : comments.allComments,
    comments: comments.all,
    commentSentiment: "All",
    color: "var(--m-primary-background-color)"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
    eventKey: "Defendant",
    title: "Defendant"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_MainContent_components_SubTopicsPage_components_CommentThread_Style__WEBPACK_IMPORTED_MODULE_4__.ColumnContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_MainContent_components_SubTopicsPage_components_CommentColumn_Index__WEBPACK_IMPORTED_MODULE_3__["default"], {
    numComments: comments === null || comments === void 0 ? void 0 : comments.positiveComments,
    comments: comments.Defendant,
    commentSentiment: "Defendant",
    color: "#6A6E70"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
    eventKey: "Reporter",
    title: "Reporters"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_MainContent_components_SubTopicsPage_components_CommentThread_Style__WEBPACK_IMPORTED_MODULE_4__.ColumnContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_MainContent_components_SubTopicsPage_components_CommentColumn_Index__WEBPACK_IMPORTED_MODULE_3__["default"], {
    comments: comments.Reporter,
    commentSentiment: "Reporter",
    color: "#474A4F"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
    eventKey: "Jury",
    title: "Jury"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_MainContent_components_SubTopicsPage_components_CommentThread_Style__WEBPACK_IMPORTED_MODULE_4__.ColumnContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_MainContent_components_SubTopicsPage_components_CommentColumn_Index__WEBPACK_IMPORTED_MODULE_3__["default"], {
    comments: comments.Jury,
    commentSentiment: "Jury",
    color: "var(--m-primary-background-color)"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
    eventKey: "General",
    title: "General Public"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_MainContent_components_SubTopicsPage_components_CommentThread_Style__WEBPACK_IMPORTED_MODULE_4__.ColumnContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_MainContent_components_SubTopicsPage_components_CommentColumn_Index__WEBPACK_IMPORTED_MODULE_3__["default"], {
    comments: comments.General,
    commentSentiment: "General Public",
    color: "var(--m-primary-background-color)"
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TribunalComments);

/***/ }),

/***/ "./src/pages/Tribunal/components/TribunalComments/Style/index.js":
/*!***********************************************************************!*\
  !*** ./src/pages/Tribunal/components/TribunalComments/Style/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledThemeTab": () => (/* binding */ StyledThemeTab)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _CommonComponents_Tabs_Style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../CommonComponents/Tabs/Style */ "./src/pages/CommonComponents/Tabs/Style.js");

var _templateObject;


var StyledThemeTab = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_CommonComponents_Tabs_Style__WEBPACK_IMPORTED_MODULE_1__.ThemeTabNew)(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  .nav-item {\n    margin: 0 0.3em 0 0;\n  }\n"])));

/***/ }),

/***/ "./src/pages/Tribunal/components/TribunalComments/hooks/useCategorizeComments.js":
/*!***************************************************************************************!*\
  !*** ./src/pages/Tribunal/components/TribunalComments/hooks/useCategorizeComments.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");


var commentType = new Set(['Defendant', 'Reporter', 'Jury', 'General']);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var comments = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.tribunalComments.list;
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var categorizedComments = {
      Defendant: [],
      Reporter: [],
      Jury: [],
      General: [],
      all: comments
    };
    comments.forEach(function (comment) {
      var _comment$data;
      if (commentType.has((_comment$data = comment.data) === null || _comment$data === void 0 ? void 0 : _comment$data.commentType)) {
        var _comment$data2;
        categorizedComments[(_comment$data2 = comment.data) === null || _comment$data2 === void 0 ? void 0 : _comment$data2.commentType].push(comment);
      }
    });
    return categorizedComments;
  }, [comments]);
});

/***/ }),

/***/ "./src/pages/Tribunal/components/VotingBox/Index.jsx":
/*!***********************************************************!*\
  !*** ./src/pages/Tribunal/components/VotingBox/Index.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _svgs_svgs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../svgs/svgs */ "./src/svgs/svgs.jsx");
/* harmony import */ var _App_Modal_Index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../App/Modal/Index */ "./src/pages/App/Modal/Index.jsx");
/* harmony import */ var _CommonComponents_Button_Index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../CommonComponents/Button/Index */ "./src/pages/CommonComponents/Button/Index.jsx");
/* harmony import */ var _hooks_useOpenModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks/useOpenModal */ "./src/pages/hooks/useOpenModal.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Style */ "./src/pages/Tribunal/components/VotingBox/Style/index.js");






var VotingBox = function VotingBox(_ref) {
  var _reportStats$numVotes, _reportStats$numVotes2;
  var contentId = _ref.contentId,
    reportStats = _ref.reportStats,
    votingTimeUp = _ref.votingTimeUp;
  var openModal = (0,_hooks_useOpenModal__WEBPACK_IMPORTED_MODULE_4__["default"])(_App_Modal_Index__WEBPACK_IMPORTED_MODULE_2__.TOPIC_VOTE_FORM, {
    contentId: contentId
  });
  var hasAlreadyVoted = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return reportStats.voteAgainst || reportStats.voteFor;
  }, [reportStats.voteAgainst, reportStats.voteFor]);
  var verdict = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    if (reportStats.numVotesFor > reportStats.numVotesAgainst) return 'Violation';
    return 'No Violation';
  }, [reportStats.numVotesAgainst, reportStats.numVotesFor]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_5__.VotingContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_5__.VotesFor, null, "Violation Votes", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, reportStats && ((_reportStats$numVotes = reportStats.numVotesFor) !== null && _reportStats$numVotes !== void 0 ? _reportStats$numVotes : '?'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_5__.VotesAgainst, null, "No Violation Votes", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, reportStats && ((_reportStats$numVotes2 = reportStats.numVotesAgainst) !== null && _reportStats$numVotes2 !== void 0 ? _reportStats$numVotes2 : '?'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_5__.MiddleSection, {
    verdict: verdict
  }, votingTimeUp && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "VERDICT \u2B62 ".concat(verdict), ' '), votingTimeUp ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_svgs_svgs__WEBPACK_IMPORTED_MODULE_1__.Gavel2, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_svgs_svgs__WEBPACK_IMPORTED_MODULE_1__.CastBallotSvg, null), reportStats && !votingTimeUp && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CommonComponents_Button_Index__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: openModal
  }, hasAlreadyVoted ? 'Change Your Vote' : 'Cast Your Vote')));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(VotingBox));

/***/ }),

/***/ "./src/pages/Tribunal/components/VotingBox/Style/index.js":
/*!****************************************************************!*\
  !*** ./src/pages/Tribunal/components/VotingBox/Style/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MiddleSection": () => (/* binding */ MiddleSection),
/* harmony export */   "VotesAgainst": () => (/* binding */ VotesAgainst),
/* harmony export */   "VotesFor": () => (/* binding */ VotesFor),
/* harmony export */   "VotingContainer": () => (/* binding */ VotingContainer)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

var VotingContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('section')(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  width: 50%;\n  height: 14vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  box-shadow: 0px 10px 20px rgb(60 60 60 / 10%);\n  border-radius: 0.5em;\n  background-color: white;\n  border: 0.5px solid lightgray;\n  border-color: rgba(200, 200, 200, 0.25);\n  margin: clamp(30px, 1vw, 100px) 0 clamp(30px, 1vw, 100px) 0;\n\n  @media only screen and (max-width: 800px) {\n    width: 90%;\n    height: 30vw;\n  }\n\n  svg {\n    @media only screen and (max-width: 800px) {\n      width: 9vw;\n      height: 9vw;\n    }\n  }\n\n  span {\n    @media only screen and (max-width: 800px) {\n      font-size: 4vw;\n    }\n  }\n"])));
var VotesAgainst = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  right: 10%;\n  top: 50%;\n  transform: translate(0, -50%);\n  font-size: 1.3vw;\n  align-items: center;\n\n  @media only screen and (max-width: 800px) {\n    font-size: 4vw;\n  }\n  \n"])));
var VotesFor = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(_templateObject3 || (_templateObject3 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  left: 10%;\n  top: 50%;\n  transform: translate(0, -50%);\n  font-size: 1.3vw;\n  align-items: center;\n  @media only screen and (max-width: 800px) {\n    font-size: 4vw;\n  }\n\n"])));
var MiddleSection = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(_templateObject4 || (_templateObject4 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\n  span:first-child {\n    font-size: 2vw;\n    font-weight: bold;\n    color: ", ";\n  }\n  transform: translate(0, -35%);\n  height: 55%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n"])), function (props) {
  return props.verdict === 'Violation' ? 'red' : 'green';
});

/***/ }),

/***/ "./src/pages/VideoShowPage/Index.jsx":
/*!*******************************************!*\
  !*** ./src/pages/VideoShowPage/Index.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Collapse.js");
/* harmony import */ var _svgs_svgs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../svgs/svgs */ "./src/svgs/svgs.jsx");
/* harmony import */ var _CommonComponents_Card_Index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CommonComponents/Card/Index */ "./src/pages/CommonComponents/Card/Index.jsx");
/* harmony import */ var _CommonComponents_ActionToolbars_TopicToolbar_Index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../CommonComponents/ActionToolbars/TopicToolbar/Index */ "./src/pages/CommonComponents/ActionToolbars/TopicToolbar/Index.jsx");
/* harmony import */ var _CommonComponents_LinkSection_Index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../CommonComponents/LinkSection/Index */ "./src/pages/CommonComponents/LinkSection/Index.jsx");
/* harmony import */ var _CommonComponents_IconButton_Index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../CommonComponents/IconButton/Index */ "./src/pages/CommonComponents/IconButton/Index.jsx");
/* harmony import */ var _redux_actions_topics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../redux/actions/topics */ "./src/redux/actions/topics/index.js");
/* harmony import */ var _hooks_useSetInnerHtml__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/useSetInnerHtml */ "./src/pages/hooks/useSetInnerHtml.js");
/* harmony import */ var _hooks_useOpenModalWithLocation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../hooks/useOpenModalWithLocation */ "./src/pages/hooks/useOpenModalWithLocation.js");
/* harmony import */ var _hooks_redux_useBindDispatch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../hooks/redux/useBindDispatch */ "./src/pages/hooks/redux/useBindDispatch.js");
/* harmony import */ var _hooks_useUpdateLikes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./hooks/useUpdateLikes */ "./src/pages/VideoShowPage/hooks/useUpdateLikes.js");
/* harmony import */ var _hooks_routing_useGoToSubTopics__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../hooks/routing/useGoToSubTopics */ "./src/pages/hooks/routing/useGoToSubTopics.js");
/* harmony import */ var _generic_string_dateFormatter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../generic/string/dateFormatter */ "./src/generic/string/dateFormatter.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Style */ "./src/pages/VideoShowPage/Style/index.js");



// import { MdExpandMore, MdExpandLess } from 'react-icons/md'













var VideoShowPage = function VideoShowPage(_ref) {
  var topic = _ref.topic,
    user = _ref.user,
    src = _ref.src,
    showLinks = _ref.showLinks;
  var descRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var openModal = (0,_hooks_useOpenModalWithLocation__WEBPACK_IMPORTED_MODULE_9__["default"])('TOPIC_REPLY');
  var goToSubTopic = (0,_hooks_routing_useGoToSubTopics__WEBPACK_IMPORTED_MODULE_12__["default"])(topic.id);
  var _useBindDispatch = (0,_hooks_redux_useBindDispatch__WEBPACK_IMPORTED_MODULE_10__["default"])(_redux_actions_topics__WEBPACK_IMPORTED_MODULE_7__["default"]),
    updateTopicLikes = _useBindDispatch.updateTopicLikes;
  var updateLikes = (0,_hooks_useUpdateLikes__WEBPACK_IMPORTED_MODULE_11__["default"])(updateTopicLikes, topic, user);
  (0,_hooks_useSetInnerHtml__WEBPACK_IMPORTED_MODULE_8__["default"])(descRef, topic === null || topic === void 0 ? void 0 : topic.description);
  var expandIcon = isOpen ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_svgs_svgs__WEBPACK_IMPORTED_MODULE_2__.UpArrowSvg, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_svgs_svgs__WEBPACK_IMPORTED_MODULE_2__.DownArrowSvg, null);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_14__.VideoPlayer, {
    src: src,
    loading: "lazy"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_CommonComponents_Card_Index__WEBPACK_IMPORTED_MODULE_3__.VideoDescriptionCard, {
    onClick: goToSubTopic,
    username: topic === null || topic === void 0 ? void 0 : topic.createdBy,
    iconSrc: "".concat(topic === null || topic === void 0 ? void 0 : topic.createdByIconSrc),
    summary: topic === null || topic === void 0 ? void 0 : topic.summary,
    time: (0,_generic_string_dateFormatter__WEBPACK_IMPORTED_MODULE_13__.getTimeSince)(topic === null || topic === void 0 ? void 0 : topic.createdAt)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_14__.Description, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    ref: descRef
  })), (topic === null || topic === void 0 ? void 0 : topic.evidenceLinks.length) !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_14__.ExpandButton, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_CommonComponents_IconButton_Index__WEBPACK_IMPORTED_MODULE_6__["default"], {
    icon: expandIcon,
    onClick: function onClick() {
      return setIsOpen(!isOpen);
    }
  }, "Show Additional Info")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["default"], {
    "in": isOpen
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_CommonComponents_LinkSection_Index__WEBPACK_IMPORTED_MODULE_5__["default"], {
    topic: topic,
    showLinks: showLinks
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_CommonComponents_ActionToolbars_TopicToolbar_Index__WEBPACK_IMPORTED_MODULE_4__["default"], {
    likes: topic === null || topic === void 0 ? void 0 : topic.likes,
    topic: topic,
    user: user
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VideoShowPage);

/***/ }),

/***/ "./src/pages/VideoShowPage/Style/index.js":
/*!************************************************!*\
  !*** ./src/pages/VideoShowPage/Style/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Description": () => (/* binding */ Description),
/* harmony export */   "ExpandButton": () => (/* binding */ ExpandButton),
/* harmony export */   "VideoPlayer": () => (/* binding */ VideoPlayer)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _templateObject, _templateObject2, _templateObject3;

var VideoPlayer = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('iframe')(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100%;\n  /* height: 45vw; */\n  /* width: 45vw;   */\n  height: 25.31vw;\n\n  @media only screen and (max-width: 600px) {\n    height: 50vw\n  }\n\n"])));
var Description = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('p')(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100%;\n  font-size: .6em;\n  word-wrap: break-word;\n  padding: 1em;\n"])));
var ExpandButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(_templateObject3 || (_templateObject3 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([" \n  position: relative;\n"])));

/***/ }),

/***/ "./src/pages/VideoShowPage/hooks/useUpdateLikes.js":
/*!*********************************************************!*\
  !*** ./src/pages/VideoShowPage/hooks/useUpdateLikes.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (updateTopicLikes, topic, user) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    if (!topic || !user) return; // Some somrt of error here maybe
    updateTopicLikes({
      id: topic.id,
      userId: user.id,
      increment: !topic.liked
    });
  }, [topic]);
});

/***/ }),

/***/ "./src/pages/hooks/routing/useGoToCommentThread.js":
/*!*********************************************************!*\
  !*** ./src/pages/hooks/routing/useGoToCommentThread.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/node_modules/react-router/dist/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (topicId, subtopicId) {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    navigate("/home/topics/".concat(topicId, "/subtopics/").concat(subtopicId));
  }, []);
});

/***/ }),

/***/ "./src/pages/hooks/useOpenModalWithLocation.js":
/*!*****************************************************!*\
  !*** ./src/pages/hooks/useOpenModalWithLocation.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/node_modules/react-router/dist/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _redux_actions_ui_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/actions/ui/index */ "./src/redux/actions/ui/index.js");
/* harmony import */ var _App_Modal_Index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../App/Modal/Index */ "./src/pages/App/Modal/Index.jsx");
/* harmony import */ var _generic_regex_uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../generic/regex/uuid */ "./src/generic/regex/uuid.js");







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (modalType, modalProps) {
  var _pathname$match;
  var _useLocation = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useLocation)(),
    pathname = _useLocation.pathname;
  var subtopicId = (_pathname$match = pathname.match(_generic_regex_uuid__WEBPACK_IMPORTED_MODULE_4__.uuidRegEx)) === null || _pathname$match === void 0 ? void 0 : _pathname$match[1];
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var _bindActionCreators = (0,redux__WEBPACK_IMPORTED_MODULE_6__.bindActionCreators)(_redux_actions_ui_index__WEBPACK_IMPORTED_MODULE_2__["default"], dispatch),
    openModal = _bindActionCreators.openModal;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    openModal(_App_Modal_Index__WEBPACK_IMPORTED_MODULE_3__.REPLY, modalProps);
  }, []);
});

/***/ }),

/***/ "./src/redux/actions/recs/index.js":
/*!*****************************************!*\
  !*** ./src/redux/actions/recs/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getAllRecs": () => (/* binding */ getAllRecs)
/* harmony export */ });
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _reducers_recs_recsReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../reducers/recs/recsReducer */ "./src/redux/reducers/recs/recsReducer.js");
/* harmony import */ var _api_v1_recs_recs_api_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../api/v1/recs/recs_api_util */ "./src/api/v1/recs/recs_api_util.js");
/* harmony import */ var _utils_errorFormatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/errorFormatter */ "./src/redux/utils/errorFormatter.js");
/* eslint-disable max-len */




var getAllRecsActionCreator = function getAllRecsActionCreator(recs) {
  return {
    type: _reducers_recs_recsReducer__WEBPACK_IMPORTED_MODULE_1__.GET_ALL_RECS,
    payload: recs
  };
};
var getAllRecs = function getAllRecs(targetContentId) {
  return function (dispatch) {
    return _api_v1_recs_recs_api_util__WEBPACK_IMPORTED_MODULE_2__.getAllRecs(targetContentId).then(function (res) {
      return dispatch(getAllRecsActionCreator(res.data));
    })["catch"](function (error) {
      return react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.error((0,_utils_errorFormatter__WEBPACK_IMPORTED_MODULE_3__.errorFormatter)(error));
    });
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  getAllRecs: getAllRecs
});

/***/ }),

/***/ "./src/redux/actions/reports/index.js":
/*!********************************************!*\
  !*** ./src/redux/actions/reports/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getReport": () => (/* binding */ getReport)
/* harmony export */ });
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _ui_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/index */ "./src/redux/actions/ui/index.js");
/* harmony import */ var _reducers_reports_reportsReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../reducers/reports/reportsReducer */ "./src/redux/reducers/reports/reportsReducer.js");
/* harmony import */ var _api_v1_reports_reports_api_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../api/v1/reports/reports_api_util */ "./src/api/v1/reports/reports_api_util.js");
/* harmony import */ var _utils_errorFormatter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/errorFormatter */ "./src/redux/utils/errorFormatter.js");





var addReportActionCreator = function addReportActionCreator(report) {
  return {
    type: _reducers_reports_reportsReducer__WEBPACK_IMPORTED_MODULE_2__.ADD_REPORT,
    payload: report
  };
};
var getReport = function getReport(contentId) {
  return function (dispatch) {
    return _api_v1_reports_reports_api_util__WEBPACK_IMPORTED_MODULE_3__.getReport(contentId).then(function (res) {
      return dispatch(addReportActionCreator(res.data));
    })["catch"](function (error) {
      return react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.error((0,_utils_errorFormatter__WEBPACK_IMPORTED_MODULE_4__.errorFormatter)(error));
    })["finally"](function () {
      return dispatch((0,_ui_index__WEBPACK_IMPORTED_MODULE_1__.closeModal)());
    });
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  getReport: getReport
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNNLEtBQUssQ0FBQyxDQUFDO0lBQUEsRUFBQztFQUFBO0FBQUE7QUFFaEQsSUFBTWxkLFdBQVcsR0FBRyxTQUFkQSxXQUFXLENBQUlDLFVBQVU7RUFBQSxPQUFLLFVBQUM4VSxRQUFRO0lBQUEsT0FBSzJJLDZFQUE0QixDQUFDemQsVUFBVSxDQUFDLENBQzlGK2MsSUFBSSxDQUFDLFVBQUNDLEdBQUc7TUFBQSxPQUFLbEksUUFBUSxDQUFDNkkscUJBQXFCLENBQUNYLEdBQUcsQ0FBQ25aLElBQUksQ0FBQyxDQUFDO0lBQUEsRUFBQyxTQUNuRCxDQUFDLFVBQUNvWixLQUFLO01BQUEsT0FBS1QsdURBQVcsQ0FBQ0cscUVBQWMsQ0FBQ00sS0FBSyxDQUFDLENBQUM7SUFBQSxFQUFDO0VBQUE7QUFBQTtBQUV2RCxpRUFBZTtFQUNidmQsY0FBYyxFQUFkQSxjQUFjO0VBQ2RHLGVBQWUsRUFBZkEsZUFBZTtFQUNmRSxXQUFXLEVBQVhBO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NpdmlsLy4vc3JjL2FwaS92MS9yZWNzL3JlY3NfYXBpX3V0aWwuanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvYXBpL3YxL3N1YnRvcGljcy9zdWJ0b3BpY3NfYXBpX3V0aWwuanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvZ2VuZXJpYy9yZWdleC91dWlkLmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL2dlbmVyaWMvdGltZS9jYWxjdWxhdGVUaW1lTGVmdC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9Db21tb25Db21wb25lbnRzL0FjdGlvblRvb2xiYXJzL0NvbW1lbnRUb29sYmFyL0luZGV4LmpzeCIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9Db21tb25Db21wb25lbnRzL0FjdGlvblRvb2xiYXJzL0NvbW1lbnRUb29sYmFyL2NvbXBvbmVudHMvQ2l2aWxpdHlCdXR0b24vSW5kZXguanN4Iiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL0NvbW1vbkNvbXBvbmVudHMvQWN0aW9uVG9vbGJhcnMvQ29tbWVudFRvb2xiYXIvY29tcG9uZW50cy9DaXZpbGl0eUJ1dHRvbi9ob29rcy91c2VVcGRhdGVDb21tZW50Q2l2aWxpdHkuanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvQ29tbW9uQ29tcG9uZW50cy9BY3Rpb25Ub29sYmFycy9Db21tZW50VG9vbGJhci9jb21wb25lbnRzL0NvbW1lbnRCdXR0b24vSW5kZXguanN4Iiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL0NvbW1vbkNvbXBvbmVudHMvRm9ybS9SYW5nZVNsaWRlci9JbmRleC5qc3giLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvQ29tbW9uQ29tcG9uZW50cy9Gb3JtL1JhbmdlU2xpZGVyL1N0eWxlL2luZGV4LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL0NvbW1vbkNvbXBvbmVudHMvRm9ybS9SYW5nZVNsaWRlci9ob29rcy91c2VPblJhbmdlQ2hhbmdlLmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL0NvbW1vbkNvbXBvbmVudHMvUG9wb3ZlclN0aWNrT25Ib3Zlci9JbmRleC5qc3giLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvTWFpbkNvbnRlbnQvY29tcG9uZW50cy9Ob3RpZmljYXRpb25zUGFnZS9JbmRleC5qc3giLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvTWFpbkNvbnRlbnQvY29tcG9uZW50cy9Ob3RpZmljYXRpb25zUGFnZS9TdHlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9NYWluQ29udGVudC9jb21wb25lbnRzL05vdGlmaWNhdGlvbnNQYWdlL2NvbXBvbmVudHMvQ29tbWVudENpdmlsaXR5Tm90aWZpY2F0aW9uL0luZGV4LmpzeCIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9NYWluQ29udGVudC9jb21wb25lbnRzL05vdGlmaWNhdGlvbnNQYWdlL2NvbXBvbmVudHMvRm9sbG93Tm90aWZpY2F0aW9uL0luZGV4LmpzeCIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9NYWluQ29udGVudC9jb21wb25lbnRzL05vdGlmaWNhdGlvbnNQYWdlL2NvbXBvbmVudHMvTGlrZU5vdGlmaWNhdGlvbi9JbmRleC5qc3giLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvTWFpbkNvbnRlbnQvY29tcG9uZW50cy9Ob3RpZmljYXRpb25zUGFnZS9jb21wb25lbnRzL01lbnVUaW1lL0luZGV4LmpzeCIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9NYWluQ29udGVudC9jb21wb25lbnRzL05vdGlmaWNhdGlvbnNQYWdlL2NvbXBvbmVudHMvTWVudVRpbWUvU3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvTWFpbkNvbnRlbnQvY29tcG9uZW50cy9Ob3RpZmljYXRpb25zUGFnZS9jb21wb25lbnRzL05vdGlmaWNhdGlvbkl0ZW0vSW5kZXguanN4Iiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL01haW5Db250ZW50L2NvbXBvbmVudHMvTm90aWZpY2F0aW9uc1BhZ2UvY29tcG9uZW50cy9Ob3RpZmljYXRpb25JdGVtL1N0eWxlL2luZGV4LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL01haW5Db250ZW50L2NvbXBvbmVudHMvTm90aWZpY2F0aW9uc1BhZ2UvY29tcG9uZW50cy9TdHlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9NYWluQ29udGVudC9jb21wb25lbnRzL05vdGlmaWNhdGlvbnNQYWdlL2NvbXBvbmVudHMvVG9waWNMaWtlTm90aWZpY2F0aW9uL0luZGV4LmpzeCIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9NYWluQ29udGVudC9jb21wb25lbnRzL1JpZ2h0U2VjdGlvbi9jb21wb25lbnRzL1JlY29tbWVuZGF0aW9ucy9JbmRleC5qc3giLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvTWFpbkNvbnRlbnQvY29tcG9uZW50cy9SaWdodFNlY3Rpb24vY29tcG9uZW50cy9SZWNvbW1lbmRhdGlvbnMvU3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvTWFpbkNvbnRlbnQvY29tcG9uZW50cy9TdWJUb3BpY3NQYWdlL0luZGV4LmpzeCIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9NYWluQ29udGVudC9jb21wb25lbnRzL1N1YlRvcGljc1BhZ2UvU3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvTWFpbkNvbnRlbnQvY29tcG9uZW50cy9TdWJUb3BpY3NQYWdlL2NvbXBvbmVudHMvQ29tbWVudC9JbmRleC5qc3giLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvTWFpbkNvbnRlbnQvY29tcG9uZW50cy9TdWJUb3BpY3NQYWdlL2NvbXBvbmVudHMvQ29tbWVudC9TdHlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9NYWluQ29udGVudC9jb21wb25lbnRzL1N1YlRvcGljc1BhZ2UvY29tcG9uZW50cy9Db21tZW50Q29sdW1uL0luZGV4LmpzeCIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9NYWluQ29udGVudC9jb21wb25lbnRzL1N1YlRvcGljc1BhZ2UvY29tcG9uZW50cy9Db21tZW50Q29sdW1uL1N0eWxlL2luZGV4LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL01haW5Db250ZW50L2NvbXBvbmVudHMvU3ViVG9waWNzUGFnZS9jb21wb25lbnRzL0NvbW1lbnRUaHJlYWQvSW5kZXguanN4Iiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL01haW5Db250ZW50L2NvbXBvbmVudHMvU3ViVG9waWNzUGFnZS9jb21wb25lbnRzL0NvbW1lbnRUaHJlYWQvU3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvTWFpbkNvbnRlbnQvY29tcG9uZW50cy9TdWJUb3BpY3NQYWdlL2NvbXBvbmVudHMvSGVhZGVyL0luZGV4LmpzeCIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9NYWluQ29udGVudC9jb21wb25lbnRzL1N1YlRvcGljc1BhZ2UvY29tcG9uZW50cy9IZWFkZXIvU3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvTWFpbkNvbnRlbnQvY29tcG9uZW50cy9TdWJUb3BpY3NQYWdlL2NvbXBvbmVudHMvUGFyZW50Q29tbWVudC9JbmRleC5qc3giLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvTWFpbkNvbnRlbnQvY29tcG9uZW50cy9TdWJUb3BpY3NQYWdlL2NvbXBvbmVudHMvU3ViVG9waWNUaHJlYWQvSW5kZXguanN4Iiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL01haW5Db250ZW50L2NvbXBvbmVudHMvU3ViVG9waWNzUGFnZS9jb21wb25lbnRzL1N1YlRvcGljVGhyZWFkL1N0eWxlL2luZGV4LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL01haW5Db250ZW50L2NvbXBvbmVudHMvU3ViVG9waWNzUGFnZS9jb21wb25lbnRzL1N1YlRvcGljc0xpc3QvSW5kZXguanN4Iiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL01haW5Db250ZW50L2NvbXBvbmVudHMvU3ViVG9waWNzUGFnZS9jb21wb25lbnRzL1N1YlRvcGljc0xpc3QvU3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvTWFpbkNvbnRlbnQvY29tcG9uZW50cy9TdWJUb3BpY3NQYWdlL2NvbXBvbmVudHMvU3ViVG9waWNzUm91dGVyL0luZGV4LmpzeCIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9NYWluQ29udGVudC9jb21wb25lbnRzL1N1YlRvcGljc1BhZ2UvY29tcG9uZW50cy9TdWJUb3BpY3NUYWJsZS9JbmRleC5qc3giLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvTWFpbkNvbnRlbnQvY29tcG9uZW50cy9TdWJUb3BpY3NQYWdlL2NvbXBvbmVudHMvU3ViVG9waWNzVGFibGUvU3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvTWFpbkNvbnRlbnQvY29tcG9uZW50cy9TdWJUb3BpY3NQYWdlL2NvbXBvbmVudHMvU3ViVG9waWNzVGFibGUvU3ViVG9waWNzSXRlbS9JbmRleC5qc3giLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvTWFpbkNvbnRlbnQvY29tcG9uZW50cy9TdWJUb3BpY3NQYWdlL2NvbXBvbmVudHMvaG9va3MvdXNlQ2F0ZWdvcml6ZUNvbW1lbnRzLmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL01haW5Db250ZW50L2NvbXBvbmVudHMvU3ViVG9waWNzUGFnZS9ob29rcy91c2VHb1RvU3ViVG9waWMuanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvTWFpbkNvbnRlbnQvY29tcG9uZW50cy9UcmlidW5hbE5vdGlmaWNhdGlvbnNQYWdlL0luZGV4LmpzeCIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9NYWluQ29udGVudC9jb21wb25lbnRzL1RyaWJ1bmFsTm90aWZpY2F0aW9uc1BhZ2UvU3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvTWFpbkNvbnRlbnQvY29tcG9uZW50cy9UcmlidW5hbE5vdGlmaWNhdGlvbnNQYWdlL2NvbXBvbmVudHMvTWVudVRpbWUvSW5kZXguanN4Iiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL01haW5Db250ZW50L2NvbXBvbmVudHMvVHJpYnVuYWxOb3RpZmljYXRpb25zUGFnZS9jb21wb25lbnRzL01lbnVUaW1lL1N0eWxlL2luZGV4LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL01haW5Db250ZW50L2NvbXBvbmVudHMvVHJpYnVuYWxOb3RpZmljYXRpb25zUGFnZS9jb21wb25lbnRzL05vdGlmaWNhdGlvbkl0ZW0vSW5kZXguanN4Iiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL01haW5Db250ZW50L2NvbXBvbmVudHMvVHJpYnVuYWxOb3RpZmljYXRpb25zUGFnZS9jb21wb25lbnRzL05vdGlmaWNhdGlvbkl0ZW0vU3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvTWFpbkNvbnRlbnQvY29tcG9uZW50cy9UcmlidW5hbE5vdGlmaWNhdGlvbnNQYWdlL2NvbXBvbmVudHMvU3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvTWFpbkNvbnRlbnQvY29tcG9uZW50cy9UcmlidW5hbE5vdGlmaWNhdGlvbnNQYWdlL2NvbXBvbmVudHMvVHJpYnVuYWxTZWxlY3Rpb25Ob3RpZmljYXRpb24vSW5kZXguanN4Iiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL01haW5Db250ZW50L2NvbXBvbmVudHMvVHJpYnVuYWxOb3RpZmljYXRpb25zUGFnZS9jb21wb25lbnRzL1VzZXJDb250ZW50UmVwb3J0ZWROb3RpZmljYXRpb24vSW5kZXguanN4Iiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL1JlY29tbWVuZGF0aW9uc0xpc3QvSW5kZXguanN4Iiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL1JlY29tbWVuZGF0aW9uc0xpc3QvU3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvUmVjb21tZW5kYXRpb25zTGlzdC9jb21wb25lbnRzL1JlY0l0ZW0vSW5kZXguanN4Iiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL1JlY29tbWVuZGF0aW9uc0xpc3QvY29tcG9uZW50cy9SZWNJdGVtL1N0eWxlL2luZGV4LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL1JlY29tbWVuZGF0aW9uc0xpc3QvY29tcG9uZW50cy9SZWNJdGVtL2hvb2tzL3VzZU5hdmlnYXRlVG9QYWdlLmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL1RyaWJ1bmFsL0luZGV4LmpzeCIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9UcmlidW5hbC9TdHlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9UcmlidW5hbC9jb21wb25lbnRzL1RyaWJ1bmFsQ29tbWVudHMvSW5kZXguanN4Iiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL1RyaWJ1bmFsL2NvbXBvbmVudHMvVHJpYnVuYWxDb21tZW50cy9TdHlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9UcmlidW5hbC9jb21wb25lbnRzL1RyaWJ1bmFsQ29tbWVudHMvaG9va3MvdXNlQ2F0ZWdvcml6ZUNvbW1lbnRzLmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL1RyaWJ1bmFsL2NvbXBvbmVudHMvVm90aW5nQm94L0luZGV4LmpzeCIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9UcmlidW5hbC9jb21wb25lbnRzL1ZvdGluZ0JveC9TdHlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9WaWRlb1Nob3dQYWdlL0luZGV4LmpzeCIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9WaWRlb1Nob3dQYWdlL1N0eWxlL2luZGV4LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL1ZpZGVvU2hvd1BhZ2UvaG9va3MvdXNlVXBkYXRlTGlrZXMuanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvaG9va3Mvcm91dGluZy91c2VHb1RvQ29tbWVudFRocmVhZC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9ob29rcy91c2VPcGVuTW9kYWxXaXRoTG9jYXRpb24uanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcmVkdXgvYWN0aW9ucy9yZWNzL2luZGV4LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3JlZHV4L2FjdGlvbnMvcmVwb3J0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9yZWR1eC9hY3Rpb25zL3N1YnRvcGljcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyBCQUNLRU5EX0RFViB9IGZyb20gJy4uLy4uL2VuZHBvaW50cy9lbmRwb2ludHMnXG5cbmV4cG9ydCBjb25zdCBnZXRBbGxSZWNzID0gKHRhcmdldENvbnRlbnRJZCkgPT4gYXhpb3MuZ2V0KGAke0JBQ0tFTkRfREVWfS9yZWNvbW1lbmRhdGlvbnM/dGFyZ2V0Q29udGVudElkPSR7dGFyZ2V0Q29udGVudElkfWApXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyBCQUNLRU5EX0RFViB9IGZyb20gJy4uLy4uL2VuZHBvaW50cy9lbmRwb2ludHMnXG5cbmV4cG9ydCBjb25zdCBjcmVhdGVTdWJUb3BpYyA9IChzdWJUb3BpY0RhdGEpID0+IGF4aW9zLnBvc3QoYCR7QkFDS0VORF9ERVZ9L3N1YnRvcGljc2AsIHN1YlRvcGljRGF0YSlcblxuZXhwb3J0IGNvbnN0IGdldEFsbFN1YlRvcGljcyA9ICh0b3BpY0lkKSA9PiBheGlvcy5nZXQoYCR7QkFDS0VORF9ERVZ9L3N1YnRvcGljcz90b3BpY0lkPSR7dG9waWNJZH1gKVxuXG5leHBvcnQgY29uc3QgZ2V0U3ViVG9waWMgPSAoc3ViVG9waWNJZCkgPT4gYXhpb3MuZ2V0KGAke0JBQ0tFTkRfREVWfS9zdWJ0b3BpY3MvJHtzdWJUb3BpY0lkfWApXG4iLCJleHBvcnQgY29uc3QgdXVpZFJlZ0V4ID0gbmV3IFJlZ0V4cCgvXFxiWzAtOWEtZl17OH1cXGItWzAtOWEtZl17NH0tWzAtOWEtZl17NH0tWzAtOWEtZl17NH0tXFxiWzAtOWEtZl17MTJ9XFxiL2cpXG4iLCJleHBvcnQgY29uc3QgY2FsY3VsYXRlVGltZUxlZnQgPSAocmVwb3J0RW5kVGltZSkgPT4ge1xuICAvLyBjb25zdCB5ZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpXG4gIGNvbnN0IGRpZmZlcmVuY2UgPSArbmV3IERhdGUocmVwb3J0RW5kVGltZSkgLSArbmV3IERhdGUoKVxuXG4gIGxldCB0aW1lTGVmdCA9IHt9XG5cbiAgaWYgKGRpZmZlcmVuY2UgPiAwKSB7XG4gICAgdGltZUxlZnQgPSB7XG4gICAgICBkYXlzOiBNYXRoLmZsb29yKGRpZmZlcmVuY2UgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpLFxuICAgICAgaG91cnM6IE1hdGguZmxvb3IoKGRpZmZlcmVuY2UgLyAoMTAwMCAqIDYwICogNjApKSAlIDI0KSxcbiAgICAgIG1pbnV0ZXM6IE1hdGguZmxvb3IoKGRpZmZlcmVuY2UgLyAxMDAwIC8gNjApICUgNjApLFxuICAgICAgc2Vjb25kczogTWF0aC5mbG9vcigoZGlmZmVyZW5jZSAvIDEwMDApICUgNjApLFxuICAgIH1cbiAgfVxuICByZXR1cm4gdGltZUxlZnRcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBtZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG5pbXBvcnQgVXBWb3RlQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvVXBWb3RlQnV0dG9uL0luZGV4J1xuaW1wb3J0IERvd25Wb3RlQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvRG93blZvdGVCdXR0b24vSW5kZXgnXG5pbXBvcnQgQ29tbWVudEJ1dHRvbiBmcm9tICcuL2NvbXBvbmVudHMvQ29tbWVudEJ1dHRvbi9JbmRleCdcbmltcG9ydCBDaXZpbGl0eUJ1dHRvbiBmcm9tICcuL2NvbXBvbmVudHMvQ2l2aWxpdHlCdXR0b24vSW5kZXgnXG5pbXBvcnQgVHJpYnVuYWxCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9UcmlidW5hbEJ1dHRvbi9JbmRleCdcblxuaW1wb3J0IHsgQ29udGFpbmVyLCBMZWZ0LCBSaWdodCB9IGZyb20gJy4uL1N0eWxlL2luZGV4J1xuaW1wb3J0IHsgQ09NTUVOVCwgVFJJQlVOQUxfQ09NTUVOVCB9IGZyb20gJy4uLy4uLy4uLy4uL2VudW1zL2NvbnRlbnRfdHlwZSdcblxuY29uc3QgQ29tbWVudEFjdGlvblRvb2xiYXIgPSAoe1xuICBsaWtlcywgY29tbWVudCwgdXNlcixcbn0pID0+IHtcbiAgY29uc3QgeyB0b3BpY0lkLCBzdWJUb3BpY0lkLCAuLi5wYXJhbXMgfSA9IHVzZVBhcmFtcygpXG4gIGNvbnN0IGlzVHJpYnVuYWxDb21tZW50ID0gY29tbWVudC5jb21tZW50VHlwZVxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8TGVmdD5cbiAgICAgICAgPFVwVm90ZUJ1dHRvblxuICAgICAgICAgIGNvbnRlbnQ9e2NvbW1lbnR9XG4gICAgICAgICAgdXNlcj17dXNlcn1cbiAgICAgICAgICBjb250ZW50VHlwZT17aXNUcmlidW5hbENvbW1lbnQgPyBUUklCVU5BTF9DT01NRU5UIDogQ09NTUVOVH1cbiAgICAgICAgLz5cbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAge2xpa2VzIHx8IDB9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPERvd25Wb3RlQnV0dG9uXG4gICAgICAgICAgY29udGVudD17Y29tbWVudH1cbiAgICAgICAgICB1c2VyPXt1c2VyfVxuICAgICAgICAgIGNvbnRlbnRUeXBlPXtpc1RyaWJ1bmFsQ29tbWVudCA/IFRSSUJVTkFMX0NPTU1FTlQgOiBDT01NRU5UfVxuICAgICAgICAvPlxuICAgICAgICB7IHBhcmFtc1snKiddICYmIDxDb21tZW50QnV0dG9uIGNvbW1lbnQ9e2NvbW1lbnR9IC8+fVxuICAgICAgICA8Q2l2aWxpdHlCdXR0b24gY29tbWVudD17Y29tbWVudH0gLz5cbiAgICAgIDwvTGVmdD5cbiAgICAgIDxSaWdodD5cbiAgICAgICAgPFRyaWJ1bmFsQnV0dG9uIGNvbnRlbnRJZD17Y29tbWVudD8uaWR9IC8+XG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgIHtsaWtlcyB8fCAwfVxuICAgICAgICAgIHsnICd9XG4gICAgICAgICAgbGlrZXNcbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9SaWdodD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBtZW1vKENvbW1lbnRBY3Rpb25Ub29sYmFyKVxuIiwiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvY2xpY2stZXZlbnRzLWhhdmUta2V5LWV2ZW50cyAqL1xuLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbm8tbm9uaW50ZXJhY3RpdmUtZWxlbWVudC1pbnRlcmFjdGlvbnMgKi9cbmltcG9ydCBSZWFjdCwgeyBtZW1vLCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJhbmdlU2xpZGVyIGZyb20gJy4uLy4uLy4uLy4uL0Zvcm0vUmFuZ2VTbGlkZXIvSW5kZXgnXG5pbXBvcnQgUG9wb3ZlclN0aWNrT25Ib3ZlciBmcm9tICcuLi8uLi8uLi8uLi9Qb3BvdmVyU3RpY2tPbkhvdmVyL0luZGV4J1xuaW1wb3J0IHVzZVVwZGF0ZUNvbW1lbnRDaXZpbGl0eSBmcm9tICcuL2hvb2tzL3VzZVVwZGF0ZUNvbW1lbnRDaXZpbGl0eSdcblxuY29uc3QgQ2l2aWxpdHlCdXR0b24gPSAoeyBjb21tZW50IH0pID0+IHtcbiAgY29uc3QgW3Nob3dQb3BvdmVyLCBzZXRTaG93UG9wb3Zlcl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3Qgb25DbGljayA9ICgpID0+IHNldFNob3dQb3BvdmVyKChwcmV2KSA9PiAhcHJldilcbiAgY29uc3QgdXBkYXRlQ29tbWVudENpdmlsaXR5ID0gdXNlVXBkYXRlQ29tbWVudENpdmlsaXR5KGNvbW1lbnQpXG4gIGNvbnN0IEljb24gPSB1c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoIWNvbW1lbnQgfHwgY29tbWVudC5jaXZpbGl0eSA9PT0gMCkgcmV0dXJuIDxpbWcgb25DbGljaz17b25DbGlja30gYWx0PVwiXCIgc3JjPVwiaHR0cHM6Ly9jaXZpbC1kZXYuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vYXNzZXRzL2hhbmRzaGFrZS5wbmdcIiAvPlxuICAgIGlmIChjb21tZW50LmNpdmlsaXR5ID4gMCkgcmV0dXJuIDxpbWcgb25DbGljaz17b25DbGlja30gYWx0PVwiXCIgc3JjPVwiaHR0cHM6Ly9jaXZpbC1kZXYuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vYXNzZXRzL2hhbmRzaGFrZS1jbGlja2VkLnBuZ1wiIC8+XG4gICAgcmV0dXJuIDxpbWcgYWx0PVwiXCIgb25DbGljaz17b25DbGlja30gc3JjPVwiaHR0cHM6Ly9jaXZpbC1kZXYuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vYXNzZXRzL25vLWhhbmRzaGFrZS1jbGlja2VkLnBuZ1wiIC8+XG4gIH0sIFtjb21tZW50XSlcbiAgcmV0dXJuIChcbiAgICA8UG9wb3ZlclN0aWNrT25Ib3ZlclxuICAgICAgdHJpZ2dlcj17Wydob3ZlcicsICdjbGljayddfVxuICAgICAgY29tcG9uZW50PXsoXG4gICAgICAgIDxSYW5nZVNsaWRlclxuICAgICAgICAgIGNpdmlsaXR5PXtjb21tZW50LmNpdmlsaXR5fVxuICAgICAgICAgIHVwZGF0ZUNvbW1lbnRDaXZpbGl0eT17dXBkYXRlQ29tbWVudENpdmlsaXR5fVxuICAgICAgICAvPlxuICAgICl9XG4gICAgICBwbGFjZW1lbnQ9XCJ0b3BcIlxuICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiB7IH19XG4gICAgICBkZWxheT17MjAwfVxuICAgICAgc2hvd1BvcG92ZXI9e3Nob3dQb3BvdmVyfVxuICAgICAgc2V0U2hvd1BvcG92ZXI9e3NldFNob3dQb3BvdmVyfVxuICAgID5cbiAgICAgIHtcbiAgICAgICAgSWNvblxuICAgICAgfVxuICAgIDwvUG9wb3ZlclN0aWNrT25Ib3Zlcj5cblxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW8oQ2l2aWxpdHlCdXR0b24pXG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCBjb21tZW50QWN0aW9ucyBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9yZWR1eC9hY3Rpb25zL2NvbW1lbnRzJ1xuaW1wb3J0IHRyaWJ1bmFsQ29tbWVudEFjdGlvbnMgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy90cmlidW5hbF9jb21tZW50cy9pbmRleCdcbmltcG9ydCB1c2VCaW5kRGlzcGF0Y2ggZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vaG9va3MvcmVkdXgvdXNlQmluZERpc3BhdGNoJ1xuXG5leHBvcnQgZGVmYXVsdCAoY29tbWVudCkgPT4ge1xuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VMb2NhdGlvbigpXG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3RvcigocykgPT4gcy5zZXNzaW9uLmN1cnJlbnRVc2VyKVxuICBjb25zdCB7XG4gICAgdXBkYXRlQ29tbWVudENpdmlsaXR5LFxuICAgIHVwZGF0ZVRyaWJ1bmFsQ29tbWVudENpdmlsaXR5LFxuICB9ID0gdXNlQmluZERpc3BhdGNoKHRyaWJ1bmFsQ29tbWVudEFjdGlvbnMsIGNvbW1lbnRBY3Rpb25zKVxuXG4gIHJldHVybiB1c2VDYWxsYmFjaygoZSkgPT4ge1xuICAgIGNvbnN0IGlzVHJpYnVuYWwgPSBwYXRobmFtZS5pbmNsdWRlcygndHJpYnVuYWwnKVxuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBnaXZpbmdVc2VySWQ6IHVzZXIuaWQsXG4gICAgICByZWNlaXZpbmdVc2VySWQ6IGNvbW1lbnQuY3JlYXRlZEJ5SWQsXG4gICAgICBjb21tZW50SWQ6IGNvbW1lbnQuaWQsXG4gICAgICB2YWx1ZTogTnVtYmVyKGUuY3VycmVudFRhcmdldC52YWx1ZSksXG4gICAgfVxuICAgIHJldHVybiBpc1RyaWJ1bmFsID8gdXBkYXRlVHJpYnVuYWxDb21tZW50Q2l2aWxpdHkoZGF0YSkgOiB1cGRhdGVDb21tZW50Q2l2aWxpdHkoZGF0YSlcbiAgfSwgW2NvbW1lbnQuY2l2aWxdKVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IG1lbW8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICcuLi8uLi8uLi8uLi9JY29uQnV0dG9uL0luZGV4J1xuaW1wb3J0IHsgQ29tbWVudFN2ZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3N2Z3Mvc3ZncydcbmltcG9ydCB1c2VPcGVuTW9kYWwgZnJvbSAnLi4vLi4vLi4vLi4vLi4vaG9va3MvdXNlT3Blbk1vZGFsJ1xuaW1wb3J0IHsgUkVQTFkgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9BcHAvTW9kYWwvSW5kZXgnXG5cbmNvbnN0IENvbW1lbnRCdXR0b24gPSAoeyBjb21tZW50IH0pID0+IHtcbiAgY29uc3QgeyBjb250ZW50SWQgfSA9IHVzZVBhcmFtcygpXG4gIGNvbnN0IG9wZW5Db21tZW50TW9kYWwgPSB1c2VPcGVuTW9kYWwoUkVQTFksIHtcbiAgICByZXBseVR5cGU6IGNvbW1lbnQuY29tbWVudFR5cGUgPyAnVFJJQlVOQUxfQ09NTUVOVF9SRVBMWScgOiAnQ09NTUVOVF9SRVBMWScsXG4gICAgY29tbWVudElkOiBjb21tZW50LmlkLFxuICAgIHJvb3RQYXJlbnRDb21tZW50SWQ6IGNvbW1lbnQucm9vdElkIHx8IGNvbW1lbnQuaWQsXG4gICAgY29tbWVudFR5cGU6IGNvbW1lbnQuY29tbWVudFR5cGUsXG4gICAgdHJpYnVuYWxDb21tZW50VW5kZXJSZXZpZXdJZDogY29udGVudElkLFxuICB9KVxuXG4gIHJldHVybiAoXG4gICAgPEljb25CdXR0b24gaWNvbj17PENvbW1lbnRTdmcgLz59IG9uQ2xpY2s9e29wZW5Db21tZW50TW9kYWx9IC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVtbyhDb21tZW50QnV0dG9uKVxuIiwiaW1wb3J0IFJlYWN0LCB7IG1lbW8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB1c2VPblJhbmdlQ2hhbmdlIGZyb20gJy4vaG9va3MvdXNlT25SYW5nZUNoYW5nZSdcblxuaW1wb3J0IHsgUmFuZ2UsIE1lc3NhZ2UsIENvbnRhaW5lciB9IGZyb20gJy4vU3R5bGUvaW5kZXgnXG5cbmNvbnN0IFJhbmdlU2xpZGVyID0gKHsgY2l2aWxpdHksIHVwZGF0ZUNvbW1lbnRDaXZpbGl0eSB9KSA9PiB7XG4gIGNvbnN0IHsgb25TbGlkZXJDaGFuZ2UsIHNsaWRlclZhbHVlIH0gPSB1c2VPblJhbmdlQ2hhbmdlKClcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIG9uQ2xpY2s9eyhlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfT5cbiAgICAgIDxSYW5nZSBzbGlkZXJWYWx1ZT17c2xpZGVyVmFsdWV9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhbmdlLXZhbHVlXCIgaWQ9XCJyYW5nZVZcIiAvPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInJhbmdlXCIgbWluPXstM30gbWF4PXszfSBzdGVwPXswLjF9IGRlZmF1bHRWYWx1ZT17Y2l2aWxpdHl9IG9uQ2hhbmdlPXtvblNsaWRlckNoYW5nZX0gb25Nb3VzZVVwPXt1cGRhdGVDb21tZW50Q2l2aWxpdHl9IG9uVG91Y2hFbmQ9e3VwZGF0ZUNvbW1lbnRDaXZpbGl0eX0gLz5cbiAgICAgIDwvUmFuZ2U+XG4gICAgICA8TWVzc2FnZT5cbiAgICAgICAge3NsaWRlclZhbHVlIDwgMCAmJiBgUmVtb3ZpbmcgJHtzbGlkZXJWYWx1ZX0gQ2l2aWxpdHlgfVxuICAgICAgICB7c2xpZGVyVmFsdWUgPiAwICYmIGBHaXZpbmcgKyR7c2xpZGVyVmFsdWV9IENpdmlsaXR5YH1cbiAgICAgIDwvTWVzc2FnZT5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBtZW1vKFJhbmdlU2xpZGVyKVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdGFicyAqL1xuXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgKi9cbiAgaGVpZ2h0OiAyLjV2dztcbiAgd2lkdGg6IDEwdnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gXG5cbmV4cG9ydCBjb25zdCBNZXNzYWdlID0gc3R5bGVkKCdkaXYnKWBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIGJvdHRvbTogNSU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xuYFxuXG5leHBvcnQgY29uc3QgUmFuZ2UgPSBzdHlsZWQoJ2RpdicpYFxuICAvKiBiYWNrZ3JvdW5kOiB2YXIoLS1tLXByaW1hcnktcGVyaXBoZXJhbHMtY29sb3IpOyAqL1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgLyogYm9yZGVyLXJhZGl1czogNXJlbTsgKi9cbiAgYm94LXNoYWRvdzogMnB4IDVweCA1cHggcmdiYShibGFjaywgMC4zKTtcblxuICAucmFuZ2UtdmFsdWUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC01MCU7XG4gIH1cbiAgLnJhbmdlLXZhbHVlIHNwYW4ge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMjRweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2xlcmstcHJpbWFyeSk7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB9XG4gIC5yYW5nZS12YWx1ZSBzcGFuOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlci10b3A6IDEwcHggc29saWQgdmFyKC0tY2xlcmstcHJpbWFyeSk7XG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICB0b3A6IDEwMCU7XG4gICAgbGVmdDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICAgIG1hcmdpbi10b3A6IC0xcHg7XG4gIH1cblxuICBpbnB1dFt0eXBlPVwicmFuZ2VcIl0ge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICBtYXJnaW46IDIwcHggMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBpbnB1dFt0eXBlPVwicmFuZ2VcIl06Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbiAgaW5wdXRbdHlwZT1cInJhbmdlXCJdOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjayB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGFuaW1hdGU6IDAuMnM7XG4gICAgYmFja2dyb3VuZDogJHsoeyBzbGlkZXJWYWx1ZSB9KSA9PiB7XG4gICAgaWYgKHNsaWRlclZhbHVlID09PSAtMSB8fCBzbGlkZXJWYWx1ZSA9PT0gLTIpIHJldHVybiAndmFyKC0tbS1kYW5nZXItY29sb3IpJ1xuICAgIGlmIChzbGlkZXJWYWx1ZSA9PT0gLTMpIHJldHVybiAncmVkJ1xuICAgIGlmIChzbGlkZXJWYWx1ZSA9PT0gMSB8fCBzbGlkZXJWYWx1ZSA9PT0gMikgcmV0dXJuICd2YXIoLS1tLXByaW1hcnktYnRuLWNvbG9yKSdcbiAgICBpZiAoc2xpZGVyVmFsdWUgPT09IDMpIHJldHVybiAnZ3JlZW4nXG4gICAgcmV0dXJuICd2YXIoLS1jbGVyay1wcmltYXJ5KSdcbiAgfX07XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgfVxuICBpbnB1dFt0eXBlPVwicmFuZ2VcIl06Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogMCAwIDRweCAwIHJnYmEoMCwgMCwgMCwgMSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICBtYXJnaW4tdG9wOiAtOHB4O1xuICB9XG4gIGlucHV0W3R5cGU9XCJyYW5nZVwiXTpmb2N1czo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2sge1xuICAgIGJhY2tncm91bmQ6ICR7KHsgc2xpZGVyVmFsdWUgfSkgPT4ge1xuICAgIGlmIChzbGlkZXJWYWx1ZSA9PT0gLTEgfHwgc2xpZGVyVmFsdWUgPT09IC0yKSByZXR1cm4gJ3ZhcigtLW0tZGFuZ2VyLWNvbG9yKSdcbiAgICBpZiAoc2xpZGVyVmFsdWUgPT09IC0zKSByZXR1cm4gJ3JlZCdcbiAgICBpZiAoc2xpZGVyVmFsdWUgPT09IDEgfHwgc2xpZGVyVmFsdWUgPT09IDIpIHJldHVybiAndmFyKC0tbS1wcmltYXJ5LWJ0bi1jb2xvciknXG4gICAgaWYgKHNsaWRlclZhbHVlID09PSAzKSByZXR1cm4gJ2dyZWVuJ1xuICAgIHJldHVybiAndmFyKC0tY2xlcmstcHJpbWFyeSknXG4gIH19O1xuICB9XG5gXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCBbc2xpZGVyVmFsdWUsIHNldFNsaWRlclZhbHVlXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IG9uU2xpZGVyQ2hhbmdlID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcbiAgICBjb25zdCByYW5nZSA9IGUuY3VycmVudFRhcmdldFxuICAgIGNvbnN0IHJhbmdlViA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYW5nZVYnKVxuICAgIGNvbnN0IG5ld1ZhbHVlID0gTnVtYmVyKCgocmFuZ2UudmFsdWUgLSByYW5nZS5taW4pICogMTAwKSAvIChyYW5nZS5tYXggLSByYW5nZS5taW4pKVxuICAgIGNvbnN0IG5ld1Bvc2l0aW9uID0gMTAgLSAobmV3VmFsdWUgKiAwLjIpXG4gICAgcmFuZ2VWLmlubmVySFRNTCA9IGA8c3Bhbj4ke3JhbmdlLnZhbHVlfTwvc3Bhbj5gXG4gICAgcmFuZ2VWLnN0eWxlLmxlZnQgPSBgY2FsYygke25ld1ZhbHVlfSUgKyAoJHtuZXdQb3NpdGlvbn1weCkpYFxuICAgIHNldFNsaWRlclZhbHVlKE51bWJlcihyYW5nZS52YWx1ZSkpXG4gIH0sIFtdKVxuICByZXR1cm4geyBvblNsaWRlckNoYW5nZSwgc2xpZGVyVmFsdWUgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7XG4gIHVzZUVmZmVjdCwgdXNlUmVmLCBtZW1vLFxufSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE92ZXJsYXksIFBvcG92ZXIgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5cbmNvbnN0IFBvcG92ZXJTdGlja09uSG92ZXIgPSAoe1xuICBkZWxheSwgb25Nb3VzZUVudGVyLCBjaGlsZHJlbiwgY29tcG9uZW50LCBwbGFjZW1lbnQsIHNob3dQb3BvdmVyLCBzZXRTaG93UG9wb3Zlcixcbn0pID0+IHtcbiAgY29uc3QgY2hpbGROb2RlID0gdXNlUmVmKG51bGwpXG4gIGxldCBzZXRUaW1lb3V0Q29uc3QgPSBudWxsXG5cbiAgdXNlRWZmZWN0KCgpID0+ICgpID0+IHtcbiAgICBpZiAoc2V0VGltZW91dENvbnN0KSB7XG4gICAgICBjbGVhclRpbWVvdXQoc2V0VGltZW91dENvbnN0KVxuICAgIH1cbiAgfSlcblxuICBjb25zdCBoYW5kbGVNb3VzZUVudGVyID0gKCkgPT4ge1xuICAgIHNldFRpbWVvdXRDb25zdCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0U2hvd1BvcG92ZXIodHJ1ZSlcbiAgICAgIG9uTW91c2VFbnRlcigpXG4gICAgfSwgZGVsYXkpXG4gIH1cblxuICBjb25zdCBoYW5kbGVNb3VzZUxlYXZlID0gKCkgPT4ge1xuICAgIGNsZWFyVGltZW91dChzZXRUaW1lb3V0Q29uc3QpXG4gICAgc2V0U2hvd1BvcG92ZXIoZmFsc2UpXG4gIH1cblxuICBjb25zdCBkaXNwbGF5Q2hpbGQgPSBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChjaGlsZCkgPT4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgb25Nb3VzZUVudGVyOiBoYW5kbGVNb3VzZUVudGVyLFxuICAgIG9uTW91c2VMZWF2ZTogaGFuZGxlTW91c2VMZWF2ZSxcbiAgICByZWY6IChub2RlKSA9PiB7XG4gICAgICBjaGlsZE5vZGUuY3VycmVudCA9IG5vZGVcbiAgICAgIGNvbnN0IHsgcmVmIH0gPSBjaGlsZFxuICAgICAgaWYgKHR5cGVvZiByZWYgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmVmKG5vZGUpXG4gICAgICB9XG4gICAgfSxcbiAgfSkpWzBdXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2Rpc3BsYXlDaGlsZH1cbiAgICAgIDxPdmVybGF5XG4gICAgICAgIHNob3c9e3Nob3dQb3BvdmVyfVxuICAgICAgICBwbGFjZW1lbnQ9e3BsYWNlbWVudH1cbiAgICAgICAgdGFyZ2V0PXtjaGlsZE5vZGV9XG4gICAgICAgIHNob3VsZFVwZGF0ZVBvc2l0aW9uXG4gICAgICAgIHRyaWdnZXI9e1snaG92ZXInLCAnY2xpY2snXX1cbiAgICAgID5cbiAgICAgICAgPFBvcG92ZXJcbiAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHtcbiAgICAgICAgICAgIHNldFNob3dQb3BvdmVyKHRydWUpXG4gICAgICAgICAgfX1cbiAgICAgICAgICBvbk1vdXNlTGVhdmU9e2hhbmRsZU1vdXNlTGVhdmV9XG4gICAgICAgICAgaWQ9XCJwb3BvdmVyXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJzdGlja3ktcG9wb3ZlclwiXG4gICAgICAgICAgdHJpZ2dlcj17Wydob3ZlcicsICdjbGljayddfVxuICAgICAgICA+XG4gICAgICAgICAge2NvbXBvbmVudH1cbiAgICAgICAgPC9Qb3BvdmVyPlxuICAgICAgPC9PdmVybGF5PlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW8oUG9wb3ZlclN0aWNrT25Ib3ZlcilcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgVXNlckluZm9ybWF0aW9uRGlzcGxheSBmcm9tICcuLi8uLi8uLi9Vc2VySW5mb3JtYXRpb25EaXNwbGF5L0luZGV4J1xuaW1wb3J0IHtcbiAgTWlkZGxlLCBMZWZ0LCBSaWdodCwgSG9tZVBhZ2VHcmlkLFxufSBmcm9tICcuLi8uLi9TdHlsZSdcbmltcG9ydCBOb3RpZmljYXRpb25JdGVtIGZyb20gJy4vY29tcG9uZW50cy9Ob3RpZmljYXRpb25JdGVtL0luZGV4J1xuaW1wb3J0IHtcbiAgQm9yZGVyQ29udGFpbmVyLCBOb3RpZmljYXRpb25MaXN0LCBDb250YWluZXIsIEhlYWRlcixcbn0gZnJvbSAnLi9TdHlsZSdcblxuY29uc3QgTm90aWZpY2F0aW9ucyA9ICgpID0+IHtcbiAgY29uc3Qgbm90aWZpY2F0aW9ucyA9IHVzZVNlbGVjdG9yKChzKSA9PiBzLm5vdGlmaWNhdGlvbnMudXNlck5vdGlmaWNhdGlvbnNMaXN0KVxuICByZXR1cm4gKFxuICAgIDxIb21lUGFnZUdyaWQ+XG4gICAgICA8TGVmdD5cbiAgICAgICAgPFVzZXJJbmZvcm1hdGlvbkRpc3BsYXkgLz5cbiAgICAgIDwvTGVmdD5cbiAgICAgIDxNaWRkbGU+XG5cbiAgICAgICAgPENvbnRhaW5lciBpZD1cIm5vdGlmaWNhdGlvbnMtY29udGFpbmVyXCI+XG5cbiAgICAgICAgICA8Qm9yZGVyQ29udGFpbmVyPlxuICAgICAgICAgICAgPEhlYWRlcj5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgUmVjZW50IE5vdGlmaWNhdGlvbnNcbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9IZWFkZXI+XG4gICAgICAgICAgICA8Tm90aWZpY2F0aW9uTGlzdD5cbiAgICAgICAgICAgICAge25vdGlmaWNhdGlvbnMubWFwKChub3RpZmljYXRpb24pID0+IChcbiAgICAgICAgICAgICAgICA8Tm90aWZpY2F0aW9uSXRlbSBrZXk9e25vdGlmaWNhdGlvbi5pZH0gbm90aWZpY2F0aW9uPXtub3RpZmljYXRpb259IC8+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9Ob3RpZmljYXRpb25MaXN0PlxuICAgICAgICAgIDwvQm9yZGVyQ29udGFpbmVyPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvTWlkZGxlPlxuICAgICAgPFJpZ2h0PlxuICAgICAgICA8c3Bhbj4uPC9zcGFuPlxuICAgICAgPC9SaWdodD5cbiAgICA8L0hvbWVQYWdlR3JpZD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOb3RpZmljYXRpb25zXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgQm9yZGVyQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWBcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgei1pbmRleDogOTk5OTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS1uYXYtc2l6ZSkpO1xuXG5gXG5cbmV4cG9ydCBjb25zdCBOb3RpZmljYXRpb25MaXN0ID0gc3R5bGVkKCd1bCcpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHBhZGRpbmc6IDA7XG4gIHBhZGRpbmctYm90dG9tOiAzMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGMkY1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblxuYFxuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG5gXG5cbmV4cG9ydCBjb25zdCBIZWFkZXIgPSBzdHlsZWQoJ2hlYWRlcicpYCBcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xuICBwYWRkaW5nOiAydncgMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgcCB7XG4gICAgbWFyZ2luOiAwIDF2dztcbiAgICBmb250LXNpemU6IDEuMXZ3O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuYFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGluaywgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgTWVudVRpbWUgfSBmcm9tICcuLi9NZW51VGltZS9JbmRleCdcbmltcG9ydCBVc2VybmFtZUFuZFRhZyBmcm9tICcuLi8uLi8uLi8uLi8uLi9Db21tb25Db21wb25lbnRzL1VzZXJuYW1lQW5kVGFnL0luZGV4J1xuaW1wb3J0IHsgZ2V0VGltZVNpbmNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vZ2VuZXJpYy9zdHJpbmcvZGF0ZUZvcm1hdHRlcidcbmltcG9ydCB7IExlZnRDb250YWluZXIsIE1pZGRsZUNvbnRhaW5lciwgUHJvZmlsZUljb24gfSBmcm9tICcuLi9TdHlsZSdcblxuaW1wb3J0IHsgQ29tbWVudENpdmlsaXR5R2l2ZW4gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9lbnVtcy9ub3RpZmljYXRpb25fdHlwZXMnXG5cbmNvbnN0IENvbW1lbnRDaXZpbGl0eU5vdGlmY2F0aW9uID0gKHsgbm90aWZpY2F0aW9uIH0pID0+IHtcbiAgY29uc3Qge1xuICAgIGdpdmluZ1VzZXJJZCwgZ2l2aW5nVXNlclVzZXJuYW1lLCBnaXZpbmdVc2VySWNvblNyYyxcbiAgICBnaXZpbmdVc2VyVGFnLCB0b3BpY0lkLCBzdWJ0b3BpY0lkLCBjb21tZW50SWQsIGNyZWF0ZWRBdCwgb2xkLCBuZXc6IG5ld1ZhbCwgaWQsXG4gIH0gPSBub3RpZmljYXRpb25cbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPExlZnRDb250YWluZXIgb25DbGljaz17KCkgPT4gbmF2aWdhdGUoYC91c2VyLyR7Z2l2aW5nVXNlcklkfWApfT5cbiAgICAgICAgPFByb2ZpbGVJY29uIHNyYz17Z2l2aW5nVXNlckljb25TcmN9IC8+XG4gICAgICAgIDxVc2VybmFtZUFuZFRhZ1xuICAgICAgICAgIHVzZXJJZD17Z2l2aW5nVXNlcklkfVxuICAgICAgICAgIHVzZXJuYW1lRGlzcGxheT17Z2l2aW5nVXNlclVzZXJuYW1lfVxuICAgICAgICAgIHVzZXJUYWc9e2dpdmluZ1VzZXJUYWd9XG4gICAgICAgIC8+XG4gICAgICA8L0xlZnRDb250YWluZXI+XG4gICAgICA8TWlkZGxlQ29udGFpbmVyPlxuICAgICAgICB7XG4gICAgICAgICAgbm90aWZpY2F0aW9uLm5ldyA8IDAgPyAoXG4gICAgICAgICAgICA8aW1nIGFsdD1cIlwiIHNyYz1cImh0dHBzOi8vY2l2aWwtZGV2LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL2Fzc2V0cy9uby1oYW5kc2hha2UtY2xpY2tlZC5wbmdcIiAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8aW1nIGFsdD1cIlwiIHNyYz1cImh0dHBzOi8vY2l2aWwtZGV2LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL2Fzc2V0cy9oYW5kc2hha2UtY2xpY2tlZC5wbmdcIiAvPlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICA8aDM+XG4gICAgICAgICAgPGI+XG4gICAgICAgICAgICB7Z2l2aW5nVXNlclVzZXJuYW1lfVxuICAgICAgICAgIDwvYj5cbiAgICAgICAgICB7JyAnfVxuICAgICAgICAgIFVwZGF0ZWQgQ2l2aWxpdHkgR2l2ZW4gRm9yIFlvdXJcbiAgICAgICAgICB7JyAnfVxuICAgICAgICAgIDxMaW5rIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSB0bz17YC90b3BpY3MvJHt0b3BpY0lkfS9zdWJ0b3BpY3MvJHtzdWJ0b3BpY0lkfS9jb21tZW50cy8ke2NvbW1lbnRJZH1gfT5cbiAgICAgICAgICAgIENvbW1lbnRcbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgeycgJ31cbiAgICAgICAgICB7YGZyb20gJHtvbGQudG9GaXhlZCgyKX0gdG8gJHtuZXdWYWwudG9GaXhlZCgyKX0gQ2l2aWxpdHkgJHtvbGQgPCBuZXdWYWwgPyAn8J+YiicgOiAn4pi577iPJ31gfVxuICAgICAgICA8L2gzPlxuICAgICAgPC9NaWRkbGVDb250YWluZXI+XG4gICAgICA8TWVudVRpbWVcbiAgICAgICAgdGltZT17Z2V0VGltZVNpbmNlKGNyZWF0ZWRBdCl9XG4gICAgICAgIGlkPXtpZH1cbiAgICAgICAgZXZlbnRUeXBlPXtDb21tZW50Q2l2aWxpdHlHaXZlbn1cbiAgICAgIC8+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudENpdmlsaXR5Tm90aWZjYXRpb25cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpbmssIHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IE1lbnVUaW1lIH0gZnJvbSAnLi4vTWVudVRpbWUvSW5kZXgnXG5pbXBvcnQgeyBnZXRUaW1lU2luY2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9nZW5lcmljL3N0cmluZy9kYXRlRm9ybWF0dGVyJ1xuaW1wb3J0IHsgTWlkZGxlQ29udGFpbmVyLCBMZWZ0Q29udGFpbmVyLCBQcm9maWxlSWNvbiB9IGZyb20gJy4uL1N0eWxlJ1xuaW1wb3J0IFVzZXJuYW1lQW5kVGFnIGZyb20gJy4uLy4uLy4uLy4uLy4uL0NvbW1vbkNvbXBvbmVudHMvVXNlcm5hbWVBbmRUYWcvSW5kZXgnXG5cbmltcG9ydCB7IE5ld0ZvbGxvd2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vZW51bXMvbm90aWZpY2F0aW9uX3R5cGVzJ1xuaW1wb3J0IHsgQWRkRnJpZW5kU3ZnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc3Zncy9zdmdzJ1xuXG5jb25zdCBGb2xsb3dOb3RpZmNhdGlvbiA9ICh7IG5vdGlmaWNhdGlvbiB9KSA9PiB7XG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKVxuICBjb25zdCB7XG4gICAgZ2l2aW5nVXNlcklkLCBnaXZpbmdVc2VyVXNlcm5hbWUsIGdpdmluZ1VzZXJJY29uU3JjLCBnaXZpbmdVc2VyVGFnLCBjcmVhdGVkQXQsIGlkLFxuICB9ID0gbm90aWZpY2F0aW9uXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxMZWZ0Q29udGFpbmVyIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKGAvdXNlci8ke2dpdmluZ1VzZXJJZH1gKX0+XG4gICAgICAgIDxQcm9maWxlSWNvbiBzcmM9e2dpdmluZ1VzZXJJY29uU3JjfSAvPlxuICAgICAgICA8VXNlcm5hbWVBbmRUYWdcbiAgICAgICAgICB1c2VySWQ9e2dpdmluZ1VzZXJJZH1cbiAgICAgICAgICB1c2VybmFtZURpc3BsYXk9e2dpdmluZ1VzZXJVc2VybmFtZX1cbiAgICAgICAgICB1c2VyVGFnPXtnaXZpbmdVc2VyVGFnfVxuICAgICAgICAvPlxuICAgICAgPC9MZWZ0Q29udGFpbmVyPlxuICAgICAgPE1pZGRsZUNvbnRhaW5lcj5cbiAgICAgICAgPEFkZEZyaWVuZFN2ZyBzaXplPVwiMTV2aFwiIC8+XG4gICAgICAgIDxoMz5cbiAgICAgICAgICB7JyAnfVxuICAgICAgICAgIDxMaW5rIHRvPXtgL3VzZXIvJHtnaXZpbmdVc2VySWR9YH0+XG4gICAgICAgICAgICA8Yj5cbiAgICAgICAgICAgICAge2dpdmluZ1VzZXJVc2VybmFtZX1cbiAgICAgICAgICAgIDwvYj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgeycgJ31cbiAgICAgICAgICBGb2xsb3dlZCBZb3VcbiAgICAgICAgPC9oMz5cblxuICAgICAgPC9NaWRkbGVDb250YWluZXI+XG4gICAgICA8TWVudVRpbWVcbiAgICAgICAgdGltZT17Z2V0VGltZVNpbmNlKGNyZWF0ZWRBdCl9XG4gICAgICAgIGlkPXtpZH1cbiAgICAgICAgZXZlbnRUeXBlPXtOZXdGb2xsb3dlcn1cbiAgICAgIC8+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9sbG93Tm90aWZjYXRpb25cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpbmssIHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IE1lbnVUaW1lIH0gZnJvbSAnLi4vTWVudVRpbWUvSW5kZXgnXG5pbXBvcnQgeyBnZXRUaW1lU2luY2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9nZW5lcmljL3N0cmluZy9kYXRlRm9ybWF0dGVyJ1xuaW1wb3J0IFVzZXJuYW1lQW5kVGFnIGZyb20gJy4uLy4uLy4uLy4uLy4uL0NvbW1vbkNvbXBvbmVudHMvVXNlcm5hbWVBbmRUYWcvSW5kZXgnXG5pbXBvcnQgeyBMZWZ0Q29udGFpbmVyLCBNaWRkbGVDb250YWluZXIsIFByb2ZpbGVJY29uIH0gZnJvbSAnLi4vU3R5bGUnXG5cbmltcG9ydCB7IENvbW1lbnRMaWtlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vZW51bXMvbm90aWZpY2F0aW9uX3R5cGVzJ1xuaW1wb3J0IHsgTGlrZUNsaWNrZWRTdmcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9zdmdzL3N2Z3MnXG5cbmNvbnN0IENvbW1lbnRMaWtlTm90aWZpY2F0aW9uID0gKHsgbm90aWZpY2F0aW9uIH0pID0+IHtcbiAgY29uc3Qge1xuICAgIGdpdmluZ1VzZXJJZCwgZ2l2aW5nVXNlclVzZXJuYW1lLCBnaXZpbmdVc2VySWNvblNyYyxcbiAgICBnaXZpbmdVc2VyVGFnLCB0b3BpY0lkLCBzdWJ0b3BpY0lkLCBjb21tZW50SWQsXG4gIH0gPSBub3RpZmljYXRpb25cbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPExlZnRDb250YWluZXIgb25DbGljaz17KCkgPT4gbmF2aWdhdGUoYC91c2VyLyR7Z2l2aW5nVXNlcklkfWApfT5cbiAgICAgICAgPFByb2ZpbGVJY29uIHNyYz17Z2l2aW5nVXNlckljb25TcmN9IC8+XG4gICAgICAgIDxVc2VybmFtZUFuZFRhZ1xuICAgICAgICAgIHVzZXJJZD17Z2l2aW5nVXNlcklkfVxuICAgICAgICAgIHVzZXJuYW1lRGlzcGxheT17Z2l2aW5nVXNlclVzZXJuYW1lfVxuICAgICAgICAgIHVzZXJUYWc9e2dpdmluZ1VzZXJUYWd9XG4gICAgICAgIC8+XG4gICAgICA8L0xlZnRDb250YWluZXI+XG4gICAgICA8TWlkZGxlQ29udGFpbmVyPlxuICAgICAgICA8aDM+XG4gICAgICAgICAgPGI+XG4gICAgICAgICAgICB7Z2l2aW5nVXNlclVzZXJuYW1lfVxuICAgICAgICAgIDwvYj5cbiAgICAgICAgICB7JyAnfVxuICAgICAgICAgIExpa2VkIFlvdXJcbiAgICAgICAgICB7JyAnfVxuICAgICAgICAgIDxMaW5rIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSB0bz17YC90b3BpY3MvJHt0b3BpY0lkfS9zdWJ0b3BpY3MvJHtzdWJ0b3BpY0lkfS9jb21tZW50cy8ke2NvbW1lbnRJZH1gfT5cbiAgICAgICAgICAgIENvbW1lbnQhXG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIHsnICd9XG4gICAgICAgICAg8J+YilxuICAgICAgICA8L2gzPlxuICAgICAgICA8TGlrZUNsaWNrZWRTdmcgLz5cblxuICAgICAgPC9NaWRkbGVDb250YWluZXI+XG4gICAgICA8TWVudVRpbWVcbiAgICAgICAgdGltZT17Z2V0VGltZVNpbmNlKG5vdGlmaWNhdGlvbi5jcmVhdGVkQXQpfVxuICAgICAgICBpZD17bm90aWZpY2F0aW9uLmlkfVxuICAgICAgICBldmVudFR5cGU9e0NvbW1lbnRMaWtlfVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb21tZW50TGlrZU5vdGlmaWNhdGlvblxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBWZXJ0aWNhbE1lbnVEb3RzU3ZnLCBEZWxldGVTdmcsIFJlYWRTdmcsXG59IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3N2Z3Mvc3ZncydcbmltcG9ydCBub3RpZmljYXRpb25BY3Rpb25DcmVhdG9ycyBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9yZWR1eC9hY3Rpb25zL25vdGlmaWNhdGlvbnMvaW5kZXgnXG5pbXBvcnQgdXNlQmluZERpc3BhdGNoIGZyb20gJy4uLy4uLy4uLy4uLy4uL2hvb2tzL3JlZHV4L3VzZUJpbmREaXNwYXRjaCdcbmltcG9ydCB7XG4gIE1lbnVUaW1lQ29udGFpbmVyLCBUaW1lLCBNZW51SWNvbkNvbnRhaW5lciwgQWN0aW9uTWVudSwgQWN0aW9uTWVudUl0ZW0sXG59IGZyb20gJy4vU3R5bGUvaW5kZXgnXG5cbmV4cG9ydCBjb25zdCBNZW51VGltZSA9ICh7IHRpbWUsIGlkLCBldmVudFR5cGUgfSkgPT4ge1xuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IHtcbiAgICB1cGRhdGVOb3RpZmljYXRpb25Ub1JlYWQsXG4gICAgZGVsZXRlTm90aWZpY2F0aW9uLFxuICB9ID0gdXNlQmluZERpc3BhdGNoKG5vdGlmaWNhdGlvbkFjdGlvbkNyZWF0b3JzKVxuXG4gIHJldHVybiAoXG4gICAgPE1lbnVUaW1lQ29udGFpbmVyPlxuICAgICAgPE1lbnVJY29uQ29udGFpbmVyIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgc2V0SXNPcGVuKChwcmV2KSA9PiAhcHJldilcbiAgICAgICAgY29uc3QgZXZlbnRMaXN0ZW5lciA9ICgpID0+IHtcbiAgICAgICAgICBzZXRJc09wZW4oKHByZXYpID0+ICFwcmV2KVxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3RpZmljYXRpb25zLWNvbnRhaW5lcicpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnRMaXN0ZW5lcilcbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3RpZmljYXRpb25zLWNvbnRhaW5lcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnRMaXN0ZW5lcilcbiAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxWZXJ0aWNhbE1lbnVEb3RzU3ZnIC8+XG4gICAgICAgIDxBY3Rpb25NZW51IGlzT3Blbj17aXNPcGVufSBvbkNsaWNrPXsoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX0+XG4gICAgICAgICAgPEFjdGlvbk1lbnVJdGVtIG9uQ2xpY2s9eygpID0+IHVwZGF0ZU5vdGlmaWNhdGlvblRvUmVhZChldmVudFR5cGUsIGlkKX0+XG4gICAgICAgICAgICA8UmVhZFN2ZyAvPlxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgIE1hcmsgQXMgUmVhZFxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvQWN0aW9uTWVudUl0ZW0+XG4gICAgICAgICAgPEFjdGlvbk1lbnVJdGVtIG9uQ2xpY2s9eygpID0+IGRlbGV0ZU5vdGlmaWNhdGlvbihldmVudFR5cGUsIGlkKX0+XG4gICAgICAgICAgICA8RGVsZXRlU3ZnIC8+XG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgRGVsZXRlIE5vdGlmaWNhdGlvblxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvQWN0aW9uTWVudUl0ZW0+XG4gICAgICAgIDwvQWN0aW9uTWVudT5cbiAgICAgIDwvTWVudUljb25Db250YWluZXI+XG4gICAgICA8VGltZT57dGltZX08L1RpbWU+XG4gICAgPC9NZW51VGltZUNvbnRhaW5lcj5cbiAgKVxufVxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IE1lbnVUaW1lQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWAgXG4gIHotaW5kZXg6IDk5OTk5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBwYWRkaW5nOiA1cHggMDtcbiAgd2lkdGg6IDglO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDIwMCwyMDAsMjAwLDAuMjUpO1xuXG5gXG5cbmV4cG9ydCBjb25zdCBUaW1lID0gc3R5bGVkKCdzcGFuJylgXG4gIGNvbG9yOiBncmF5O1xuICBmb250LXNpemU6IDF2dztcbiAgcGFkZGluZzogMCAxMHB4O1xuYFxuZXhwb3J0IGNvbnN0IE1lbnVJY29uQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWAgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICBib3JkZXItcmFkaXVzOiAuMXZ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6ICMyY2RkOWI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWY3ZjA7XG4gIGJvcmRlci1jb2xvcjogI2Q4ZjdlYjtcbiAgdHJhbnNpdGlvbjogYWxsIDFzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIDpob3ZlciB7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuODUpO1xuICB9XG5cbmBcblxuZXhwb3J0IGNvbnN0IEFjdGlvbk1lbnUgPSBzdHlsZWQoJ3VsJylgXG4gIHotaW5kZXg6IDk5OTk5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXI6IC41cHggc29saWQgbGlnaHRncmF5O1xuICBib3JkZXItY29sb3I6IHJnYmEoMjAwLDIwMCwyMDAsMC4yNSkgO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTUlLCA1NSUpIDtcbiAgZGlzcGxheTogJHsocHJvcHMpID0+IChwcm9wcy5pc09wZW4gPyAnYmxvY2snIDogJ25vbmUnKX0gO1xuICB3aWR0aDogMTB2dztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggcmdiKDYwIDYwIDYwIC8gMTAlKTtcbiAgYm9yZGVyLXJhZGl1czogIC41ZW07XG4gIG1hcmdpbjogMDtcblxuYFxuXG5leHBvcnQgY29uc3QgQWN0aW9uTWVudUl0ZW0gPSBzdHlsZWQoJ2xpJylgXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBjb2xvcjogYmxhY2s7XG4gIHRyYW5zaXRpb246IG5vbmU7XG4gIDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbS1idG4taG92ZXItY29sb3IpO1xuXG4gIH1cblxuICBzcGFuIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogLjY1dncgIWltcG9ydGFudDtcbiAgfVxuXG5gXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG4vLyBpbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQge1xuICBOZXdGb2xsb3dlciwgQ29tbWVudENpdmlsaXR5R2l2ZW4sIENvbW1lbnRMaWtlLCBUb3BpY0xpa2UsXG59IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2VudW1zL25vdGlmaWNhdGlvbl90eXBlcydcbmltcG9ydCBGb2xsb3dOb3RpZmNhdGlvbiBmcm9tICcuLi9Gb2xsb3dOb3RpZmljYXRpb24vSW5kZXgnXG5pbXBvcnQgQ29tbWVudENpdmlsaXR5Tm90aWZjYXRpb24gZnJvbSAnLi4vQ29tbWVudENpdmlsaXR5Tm90aWZpY2F0aW9uL0luZGV4J1xuaW1wb3J0IHtcbiAgSXRlbSxcbn0gZnJvbSAnLi9TdHlsZSdcbmltcG9ydCBDb21tZW50TGlrZU5vdGlmaWNhdGlvbiBmcm9tICcuLi9MaWtlTm90aWZpY2F0aW9uL0luZGV4J1xuaW1wb3J0IFRvcGljTGlrZU5vdGlmaWNhdGlvbiBmcm9tICcuLi9Ub3BpY0xpa2VOb3RpZmljYXRpb24vSW5kZXgnXG5cbmNvbnN0IE5vdGlmaWNhdGlvbkl0ZW0gPSAoeyBub3RpZmljYXRpb24gfSkgPT4ge1xuICAvLyBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKClcbiAgbGV0IEl0ZW1Db21wb25lbnRcbiAgbGV0IG9uQ2xpY2tcbiAgc3dpdGNoIChub3RpZmljYXRpb24uZXZlbnRUeXBlKSB7XG4gICAgY2FzZSBOZXdGb2xsb3dlcjpcbiAgICAgIC8vIG9uQ2xpY2sgPSAoKSA9PiBuYXZpZ2F0ZShgL3VzZXIvJHtub3RpZmljYXRpb24uZm9sbG93ZXJVc2VySWR9YClcbiAgICAgIEl0ZW1Db21wb25lbnQgPSBGb2xsb3dOb3RpZmNhdGlvblxuICAgICAgYnJlYWtcbiAgICBjYXNlIENvbW1lbnRDaXZpbGl0eUdpdmVuOlxuICAgICAgLy8gb25DbGljayA9ICgpID0+IG5hdmlnYXRlKGAvdXNlci8ke25vdGlmaWNhdGlvbi5naXZpbmdVc2VySWR9YClcbiAgICAgIEl0ZW1Db21wb25lbnQgPSBDb21tZW50Q2l2aWxpdHlOb3RpZmNhdGlvblxuICAgICAgYnJlYWtcbiAgICBjYXNlIENvbW1lbnRMaWtlOlxuICAgICAgLy8gb25DbGljayA9ICgpID0+IG5hdmlnYXRlKGAvdXNlci8ke25vdGlmaWNhdGlvbi5naXZpbmdVc2VySWR9YClcbiAgICAgIEl0ZW1Db21wb25lbnQgPSBDb21tZW50TGlrZU5vdGlmaWNhdGlvblxuICAgICAgYnJlYWtcbiAgICBjYXNlIFRvcGljTGlrZTpcbiAgICAgIC8vIG9uQ2xpY2sgPSAoKSA9PiBuYXZpZ2F0ZShgL3VzZXIvJHtub3RpZmljYXRpb24uZ2l2aW5nVXNlcklkfWApXG4gICAgICBJdGVtQ29tcG9uZW50ID0gVG9waWNMaWtlTm90aWZpY2F0aW9uXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICBicmVha1xuICB9XG4gIHJldHVybiAoXG4gICAgPEl0ZW0gb25DbGljaz17b25DbGlja30+XG4gICAgICA8SXRlbUNvbXBvbmVudCBub3RpZmljYXRpb249e25vdGlmaWNhdGlvbn0gLz5cbiAgICA8L0l0ZW0+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTm90aWZpY2F0aW9uSXRlbVxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IEl0ZW0gPSBzdHlsZWQoJ2xpJylgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE1dmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAvKiBjdXJzb3I6IHBvaW50ZXI7ICovXG4gIHBhZGRpbmctcmlnaHQ6IC41dnc7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICA6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGOEY5RkE7XG4gIH1cbmBcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBMZWZ0Q29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWBcbiAgd2lkdGg6IDIyJTtcbiAgaGVpZ2h0OiAxMDAlIDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaW1nIHtcbiAgICBoZWlnaHQ6IDV2aDtcbiAgfVxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyMDAsMjAwLDIwMCwwLjI1KTtcbiAgOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyO1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBSaWdodENvbnRhaW5lciA9IHN0eWxlZCgnZGl2JylgXG4gIHdpZHRoOiAyMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGltZyB7XG4gICAgaGVpZ2h0OiA1dmg7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IE1pZGRsZUNvbnRhaW5lciA9IHN0eWxlZCgnZGl2JylgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaW1nIHtcbiAgICBoZWlnaHQ6IDN2aDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA4cHg7XG4gIH1cbiAgc3ZnIHtcbiAgICBoZWlnaHQ6IDN2aDtcbiAgICBtaW4taGVpZ2h0OiAzMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDhweDtcbiAgfVxuICBoMyB7XG4gICAgZm9udC1zaXplOiAuOXZ3O1xuICB9XG4gIGEge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiB2YXIoLS1tLXByaW1hcnktYnRuLWNvbG9yKTtcbiAgICA6aG92ZXIge1xuICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuODUpO1xuICAgIH1cbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgUHJvZmlsZUljb24gPSBzdHlsZWQoJ2ltZycpYFxuICBoZWlnaHQ6IDcwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogMCAuNnZ3O1xuYFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGluaywgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgTWVudVRpbWUgfSBmcm9tICcuLi9NZW51VGltZS9JbmRleCdcbmltcG9ydCB7IGdldFRpbWVTaW5jZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2dlbmVyaWMvc3RyaW5nL2RhdGVGb3JtYXR0ZXInXG5pbXBvcnQgVXNlcm5hbWVBbmRUYWcgZnJvbSAnLi4vLi4vLi4vLi4vLi4vQ29tbW9uQ29tcG9uZW50cy9Vc2VybmFtZUFuZFRhZy9JbmRleCdcbmltcG9ydCB7IExlZnRDb250YWluZXIsIE1pZGRsZUNvbnRhaW5lciwgUHJvZmlsZUljb24gfSBmcm9tICcuLi9TdHlsZSdcblxuaW1wb3J0IHsgVG9waWNMaWtlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vZW51bXMvbm90aWZpY2F0aW9uX3R5cGVzJ1xuaW1wb3J0IHsgTGlrZUNsaWNrZWRTdmcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9zdmdzL3N2Z3MnXG5cbmNvbnN0IFRvcGljTGlrZU5vdGlmaWNhdGlvbiA9ICh7IG5vdGlmaWNhdGlvbiB9KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBnaXZpbmdVc2VySWQsIGdpdmluZ1VzZXJVc2VybmFtZSwgZ2l2aW5nVXNlckljb25TcmMsXG4gICAgZ2l2aW5nVXNlclRhZywgdG9waWNJZCxcbiAgfSA9IG5vdGlmaWNhdGlvblxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKClcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgfVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TGVmdENvbnRhaW5lciBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0ZShgL3VzZXIvJHtnaXZpbmdVc2VySWR9YCl9PlxuICAgICAgICA8UHJvZmlsZUljb24gc3JjPXtnaXZpbmdVc2VySWNvblNyY30gLz5cbiAgICAgICAgPFVzZXJuYW1lQW5kVGFnXG4gICAgICAgICAgdXNlcklkPXtnaXZpbmdVc2VySWR9XG4gICAgICAgICAgdXNlcm5hbWVEaXNwbGF5PXtnaXZpbmdVc2VyVXNlcm5hbWV9XG4gICAgICAgICAgdXNlclRhZz17Z2l2aW5nVXNlclRhZ31cbiAgICAgICAgLz5cbiAgICAgIDwvTGVmdENvbnRhaW5lcj5cbiAgICAgIDxNaWRkbGVDb250YWluZXI+XG4gICAgICAgIDxoMz5cbiAgICAgICAgICA8Yj5cbiAgICAgICAgICAgIHtnaXZpbmdVc2VyVXNlcm5hbWV9XG4gICAgICAgICAgPC9iPlxuICAgICAgICAgIHsnICd9XG4gICAgICAgICAgTGlrZWQgWW91clxuICAgICAgICAgIHsnICd9XG4gICAgICAgICAgPExpbmsgb25DbGljaz17aGFuZGxlQ2xpY2t9IHRvPXtgL3RvcGljcy8ke3RvcGljSWR9L3N1YnRvcGljc2B9PlxuICAgICAgICAgICAgVG9waWMhXG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIHsnICd9XG4gICAgICAgICAg8J+YilxuICAgICAgICA8L2gzPlxuICAgICAgICA8TGlrZUNsaWNrZWRTdmcgLz5cblxuICAgICAgPC9NaWRkbGVDb250YWluZXI+XG4gICAgICA8TWVudVRpbWVcbiAgICAgICAgdGltZT17Z2V0VGltZVNpbmNlKG5vdGlmaWNhdGlvbi5jcmVhdGVkQXQpfVxuICAgICAgICBpZD17bm90aWZpY2F0aW9uLmlkfVxuICAgICAgICBldmVudFR5cGU9e1RvcGljTGlrZX1cbiAgICAgIC8+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9waWNMaWtlTm90aWZpY2F0aW9uXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHsgVGFiIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IFRoZW1lVGFiIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vQ29tbW9uQ29tcG9uZW50cy9UYWJzL1N0eWxlJ1xuaW1wb3J0IHsgVGFiQ29udGFpbmVyIH0gZnJvbSAnLi9TdHlsZSdcbmltcG9ydCByZWNzQWN0aW9uQ3JlYXRvcnMgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy9yZWNzL2luZGV4J1xuaW1wb3J0IG9wcFJlY3NBY3Rpb25DcmVhdG9ycyBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9yZWR1eC9hY3Rpb25zL29wcG9zaW5nX3JlY3MvaW5kZXgnXG5cbmltcG9ydCB1c2VCaW5kRGlzcGF0Y2ggZnJvbSAnLi4vLi4vLi4vLi4vLi4vaG9va3MvcmVkdXgvdXNlQmluZERpc3BhdGNoJ1xuaW1wb3J0IFJlY29tbWVuZGF0aW9uc0xpc3QgZnJvbSAnLi4vLi4vLi4vLi4vLi4vUmVjb21tZW5kYXRpb25zTGlzdC9JbmRleCdcblxuY29uc3QgUmVjb21tZW5kYXRpb25zID0gKCkgPT4ge1xuICBjb25zdCBba2V5LCBzZXRLZXldID0gdXNlU3RhdGUoJ3JlY3MnKVxuICBjb25zdCB7IHRvcGljSWQgfSA9IHVzZVBhcmFtcygpXG4gIGNvbnN0IHsgZ2V0QWxsUmVjcywgZ2V0QWxsT3Bwb3NpbmdSZWNzIH0gPSB1c2VCaW5kRGlzcGF0Y2goXG4gICAgcmVjc0FjdGlvbkNyZWF0b3JzLFxuICAgIG9wcFJlY3NBY3Rpb25DcmVhdG9ycyxcbiAgKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldEFsbE9wcG9zaW5nUmVjcyh0b3BpY0lkKVxuICAgIGdldEFsbFJlY3ModG9waWNJZClcbiAgfSwgW3RvcGljSWRdKVxuXG4gIGNvbnN0IHJlY3MgPSB1c2VTZWxlY3RvcigocykgPT4gcy5yZWNvbW1lbmRhdGlvbnMucmVjcylcbiAgY29uc3Qgb3Bwb3NpbmdSZWNzID0gdXNlU2VsZWN0b3IoKHMpID0+IHMucmVjb21tZW5kYXRpb25zLm9wcG9zaW5nUmVjcylcbiAgcmV0dXJuIChcbiAgICA8VGFiQ29udGFpbmVyPlxuICAgICAgPFRoZW1lVGFiXG4gICAgICAgIGFjdGl2ZUtleT17a2V5fVxuICAgICAgICBvblNlbGVjdD17KGspID0+IHNldEtleShrKX1cbiAgICAgID5cbiAgICAgICAgPFRhYiBldmVudEtleT1cInJlY3NcIiB0aXRsZT1cIlJlY29tbWVuZGVkIENvbnRlbnRcIj5cbiAgICAgICAgICA8UmVjb21tZW5kYXRpb25zTGlzdCByZWNzPXtyZWNzfSAvPlxuICAgICAgICA8L1RhYj5cbiAgICAgICAgPFRhYiBldmVudEtleT1cIm9wcG9zaW5nUmVjc1wiIHRpdGxlPVwiT3Bwb3NpbmcgVmlld3NcIj5cbiAgICAgICAgICA8UmVjb21tZW5kYXRpb25zTGlzdCByZWNzPXtvcHBvc2luZ1JlY3N9IC8+XG4gICAgICAgIDwvVGFiPlxuICAgICAgPC9UaGVtZVRhYj5cblxuICAgIDwvVGFiQ29udGFpbmVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlY29tbWVuZGF0aW9uc1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZCgnZGl2JylgXG4gIHdpZHRoOiBjYWxjKDEwMHZ3IC0gdmFyKC0tc2lkZWJhci13aWR0aCkpO1xuICBkaXNwbGF5OiBmbGV4O1xuICAvKiBwYWRkaW5nLXRvcDogNWVtOyAqL1xuICBtYXJnaW4tbGVmdDogdmFyKC0tc2lkZWJhci13aWR0aCk7XG5cbiAgLnRhYi1jb250ZW50IHtcbiAgIHBhZGRpbmctYm90dG9tOiA0MHZoO1xuIH1cblxuIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuYFxuZXhwb3J0IGNvbnN0IE1haW5Db250ZW50ID0gc3R5bGVkKCdkaXYnKWBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgfVxuXG5gXG5cbmV4cG9ydCBjb25zdCBMaW5lID0gc3R5bGVkKCdocicpYCBcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAxZW0gMCAyZW0gMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ4LDQ4LDUwKTtcbiAgaGVpZ2h0OiAuNXB4O1xuICBib3JkZXI6IG5vbmU7XG5gXG5cbmV4cG9ydCBjb25zdCBUYWJDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpYCBcbiAgZmxleDogMjUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICB6LWluZGV4OiA5OTtcbiAgLyogYTogY2VudGVyOyAqL1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZGVlMmU2O1xuXG5gXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHRvcGljQWN0aW9uQ3JlYXRvcnMgZnJvbSAnLi4vLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy90b3BpY3MnXG5pbXBvcnQgc3ViVG9waWNBY3Rpb25DcmVhdG9ycyBmcm9tICcuLi8uLi8uLi8uLi9yZWR1eC9hY3Rpb25zL3N1YnRvcGljcydcblxuaW1wb3J0IHVzZUJpbmREaXNwYXRjaCBmcm9tICcuLi8uLi8uLi9ob29rcy9yZWR1eC91c2VCaW5kRGlzcGF0Y2gnXG5pbXBvcnQge1xuICBDb250YWluZXIsIExpbmUsIE1haW5Db250ZW50LCBIZWFkZXJDb250YWluZXIsXG59IGZyb20gJy4vU3R5bGUnXG5pbXBvcnQge1xuICBIb21lUGFnZUdyaWQsIExlZnQsIE1pZGRsZSwgUmlnaHQsXG59IGZyb20gJy4uLy4uL1N0eWxlJ1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9IZWFkZXIvSW5kZXgnXG5pbXBvcnQgUGFyZW50Q29tbWVudCBmcm9tICcuL2NvbXBvbmVudHMvUGFyZW50Q29tbWVudC9JbmRleCdcblxuaW1wb3J0IFN1YlRvcGljc1JvdXRlciBmcm9tICcuL2NvbXBvbmVudHMvU3ViVG9waWNzUm91dGVyL0luZGV4J1xuaW1wb3J0IHsgdXVpZFJlZ0V4IH0gZnJvbSAnLi4vLi4vLi4vLi4vZ2VuZXJpYy9yZWdleC91dWlkJ1xuaW1wb3J0IFVzZXJJbmZvcm1hdGlvbkRpc3BsYXkgZnJvbSAnLi4vLi4vLi4vVXNlckluZm9ybWF0aW9uRGlzcGxheS9JbmRleCdcbmltcG9ydCBSZWNvbW1lbmRhdGlvbnMgZnJvbSAnLi4vUmlnaHRTZWN0aW9uL2NvbXBvbmVudHMvUmVjb21tZW5kYXRpb25zL0luZGV4J1xuXG5jb25zdCBTdWJUb3BpY3MgPSAoKSA9PiB7XG4gIGNvbnN0IHsgdG9waWNJZCwgJyonOiB1cmwgfSA9IHVzZVBhcmFtcygpXG4gIGNvbnN0IFtzdWJ0b3BpY0lkLCBjb21tZW50SWRdID0gdXJsID8gdXJsLm1hdGNoKHV1aWRSZWdFeCkgOiBbXVxuICBjb25zdCB7XG4gICAgZ2V0QWxsU3ViVG9waWNzLFxuICAgIGdldFRvcGljLFxuICB9ID0gdXNlQmluZERpc3BhdGNoKFxuICAgIHN1YlRvcGljQWN0aW9uQ3JlYXRvcnMsXG4gICAgdG9waWNBY3Rpb25DcmVhdG9ycyxcbiAgKVxuICBjb25zdCB0b3BpYyA9IHVzZVNlbGVjdG9yKChzKSA9PiBzLnRvcGljcy5saXN0KT8uZmluZCgodCkgPT4gdC5pZCA9PT0gdG9waWNJZClcblxuICBjb25zdCBzdWJ0b3BpY3NFbXB0eSA9IHVzZVNlbGVjdG9yKChzKSA9PiBzLnN1YnRvcGljcylcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKChzKSA9PiBzLnNlc3Npb24uY3VycmVudFVzZXIpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRUb3BpYyh0b3BpY0lkLCB1c2VyPy5pZClcbiAgICBpZiAoc3VidG9waWNzRW1wdHkpIGdldEFsbFN1YlRvcGljcyh0b3BpY0lkKVxuICB9LCBbdG9waWNJZCwgc3VidG9waWNJZF0pXG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPEhvbWVQYWdlR3JpZD5cbiAgICAgICAgPExlZnQ+XG4gICAgICAgICAgPFVzZXJJbmZvcm1hdGlvbkRpc3BsYXkgLz5cbiAgICAgICAgPC9MZWZ0PlxuICAgICAgICA8TWlkZGxlPlxuICAgICAgICAgIDxNYWluQ29udGVudD5cbiAgICAgICAgICAgIDxIZWFkZXJDb250YWluZXI+XG4gICAgICAgICAgICAgIDxIZWFkZXIgdG9waWM9e3RvcGljfSB1c2VyPXt1c2VyfSAvPlxuICAgICAgICAgICAgPC9IZWFkZXJDb250YWluZXI+XG4gICAgICAgICAgICA8TGluZSAvPlxuICAgICAgICAgICAgeyBjb21tZW50SWQgJiYgPFBhcmVudENvbW1lbnQgdG9waWNJZD17dG9waWNJZH0gLz4gfVxuICAgICAgICAgIDwvTWFpbkNvbnRlbnQ+XG4gICAgICAgIDwvTWlkZGxlPlxuICAgICAgICA8UmlnaHQ+XG4gICAgICAgICAgPFJlY29tbWVuZGF0aW9ucyAvPlxuICAgICAgICA8L1JpZ2h0PlxuICAgICAgPC9Ib21lUGFnZUdyaWQ+XG4gICAgICA8U3ViVG9waWNzUm91dGVyIC8+XG4gICAgPC9Db250YWluZXI+XG5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdWJUb3BpY3NcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpYFxuICB3aWR0aDogMTAwdnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiAxMHZ3O1xuXG4gQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG5gXG5leHBvcnQgY29uc3QgTWFpbkNvbnRlbnQgPSBzdHlsZWQoJ2RpdicpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICB9XG5cbmBcbmV4cG9ydCBjb25zdCBMaW5lID0gc3R5bGVkKCdocicpYCBcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAxZW0gMCAyZW0gMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ4LDQ4LDUwKTtcbiAgaGVpZ2h0OiAuNXB4O1xuICBib3JkZXI6IG5vbmU7XG5gXG5cbmV4cG9ydCBjb25zdCBIZWFkZXJDb250YWluZXIgPSBzdHlsZWQoJ3NlY3Rpb24nKWBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IDEwMCU7XG4gIGxpIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuYFxuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG5pbXBvcnQgUmVhY3QsIHtcbiAgdXNlU3RhdGUsIHVzZVJlZiwgbWVtbyxcbn0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUsIHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuaW1wb3J0IENvbGxhcHNlIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db2xsYXBzZSdcbmltcG9ydCB7IFVwQXJyb3dTdmcsIERvd25BcnJvd1N2ZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3N2Z3Mvc3ZncydcblxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnLi4vLi4vLi4vLi4vLi4vQ29tbW9uQ29tcG9uZW50cy9JY29uQnV0dG9uL0luZGV4J1xuaW1wb3J0IENlbnNvck92ZXJsYXkgZnJvbSAnLi4vLi4vLi4vLi4vLi4vQ29tbW9uQ29tcG9uZW50cy9DZW5zb3JPdmVybGF5L0luZGV4J1xuXG5pbXBvcnQgQWN0aW9uVG9vbGJhciBmcm9tICcuLi8uLi8uLi8uLi8uLi9Db21tb25Db21wb25lbnRzL0FjdGlvblRvb2xiYXJzL0NvbW1lbnRUb29sYmFyL0luZGV4J1xuaW1wb3J0IHtcbiAgQ29tbWVudENvbnRhaW5lciwgSGVhZGVyLCBVc2VybmFtZSwgRGF0ZSwgQm9keSwgRm9vdGVyLFxuICBUaHVtYiwgRXhwYW5kQnV0dG9uLCBFdmlkZW5jZVNlY3Rpb24sIENvbnRlbnQsIFVzZXJJbmZvQ29udGFpbmVyLCBPdXRlckNvbnRhaW5lcixcbn0gZnJvbSAnLi9TdHlsZSdcblxuaW1wb3J0IHsgZ2V0VGltZVNpbmNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vZ2VuZXJpYy9zdHJpbmcvZGF0ZUZvcm1hdHRlcidcbmltcG9ydCB1c2VTZXRJbm5lckh0bWwgZnJvbSAnLi4vLi4vLi4vLi4vLi4vaG9va3MvdXNlU2V0SW5uZXJIdG1sJ1xuXG5pbXBvcnQgeyBQYXJlbnRDb21tZW50Q29udGV4dCB9IGZyb20gJy4uL0NvbW1lbnRDb2x1bW4vSW5kZXgnXG5pbXBvcnQgVGhlbWVUb29sdGlwIGZyb20gJy4uLy4uLy4uLy4uLy4uL0NvbW1vbkNvbXBvbmVudHMvVG9vbHRpcC9JbmRleCdcbmltcG9ydCB7IFVOREVSX1JFVklFVyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2VudW1zL3JlcG9ydF9zdGF0dXMnXG5pbXBvcnQgeyBDT01NRU5UIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vZW51bXMvY29udGVudF90eXBlJ1xuXG5jb25zdCBDb21tZW50ID0gKHsgY29tbWVudERhdGEsIHJlcGxpZXMsIGNvbW1lbnRSZWYgfSkgPT4ge1xuICBpZiAoIWNvbW1lbnREYXRhKSByZXR1cm4gbnVsbFxuICBjb25zdCB7IHRvcGljSWQgfSA9IFJlYWN0LnVzZUNvbnRleHQoUGFyZW50Q29tbWVudENvbnRleHQpIHx8IHt9XG4gIGNvbnN0IGNvbnRlbnRSZWYgPSB1c2VSZWYobnVsbClcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpXG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZUxvY2F0aW9uKClcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbc2hvdWxkQmx1ciwgc2V0U2hvdWxkQmx1cl0gPSB1c2VTdGF0ZShjb21tZW50RGF0YT8ucmVwb3J0U3RhdHVzID09PSBVTkRFUl9SRVZJRVcgfHwgY29tbWVudERhdGE/LnRveGljaXR5U3RhdHVzID09PSAnVE9YSUMnKVxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3IoKHMpID0+IHMuc2Vzc2lvbi5jdXJyZW50VXNlcilcblxuICB1c2VTZXRJbm5lckh0bWwoY29udGVudFJlZiwgY29tbWVudERhdGE/LmNvbnRlbnQpXG5cbiAgY29uc3QgbWlucyA9IGdldFRpbWVTaW5jZShjb21tZW50RGF0YS5jcmVhdGVkQXQpXG4gIGNvbnN0IGV4cGFuZEljb24gPSBpc09wZW4gPyA8VXBBcnJvd1N2ZyAvPiA6IDxEb3duQXJyb3dTdmcgLz5cbiAgcmV0dXJuIChcbiAgICA8T3V0ZXJDb250YWluZXIgcmVmPXtjb21tZW50UmVmfT5cbiAgICAgIDxDb21tZW50Q29udGFpbmVyPlxuICAgICAgICA8SGVhZGVyIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKGAvdG9waWNzLyR7dG9waWNJZH0vc3VidG9waWNzLyR7Y29tbWVudERhdGEuc3VidG9waWNJZH0vY29tbWVudHMvJHtjb21tZW50RGF0YS5pZH1gKX0+XG4gICAgICAgICAgPFVzZXJJbmZvQ29udGFpbmVyPlxuICAgICAgICAgICAgPFRodW1iIHNyYz17Y29tbWVudERhdGEuY3JlYXRlZEJ5SWNvblNyYyB8fCAnaHR0cHM6Ly9jaXZpbC1kZXYuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vcHJvZmlsZV9pbWdfMS5wbmcnfSAvPlxuICAgICAgICAgICAgPFRoZW1lVG9vbHRpcFxuICAgICAgICAgICAgICB0b29sdGlwSGVhZGVyPVwiRXhwZXJpZW5jZVwiXG4gICAgICAgICAgICAgIHRvb2x0aXBUZXh0PXtjb21tZW50RGF0YS5jcmVhdGVkQnlFeHBlcmllbmNlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L1VzZXJJbmZvQ29udGFpbmVyPlxuICAgICAgICAgIDxVc2VybmFtZT57Y29tbWVudERhdGEuY3JlYXRlZEJ5fTwvVXNlcm5hbWU+XG4gICAgICAgICAgPERhdGU+e2Ake21pbnN9YH08L0RhdGU+XG4gICAgICAgIDwvSGVhZGVyPlxuICAgICAgICA8Qm9keSBzaG91bGRCbHVyPXtzaG91bGRCbHVyfSBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0ZShgL3RvcGljcy8ke3RvcGljSWR9L3N1YnRvcGljcy8ke2NvbW1lbnREYXRhLnN1YnRvcGljSWR9L2NvbW1lbnRzLyR7Y29tbWVudERhdGEuaWR9YCl9PlxuICAgICAgICAgIDxDb250ZW50IHJlZj17Y29udGVudFJlZn0gLz5cbiAgICAgICAgICB7IHJlcGxpZXMubGVuZ3RoICE9PSAwXG4gICAgICAgICAgJiYgKFxuICAgICAgICAgIDxFeHBhbmRCdXR0b24+XG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICBpY29uPXtleHBhbmRJY29ufVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4oIWlzT3Blbil9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFJlcGxpZXNcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICA8L0V4cGFuZEJ1dHRvbj5cbiAgICAgICAgICApfVxuICAgICAgICA8L0JvZHk+XG4gICAgICAgIDxGb290ZXIgc2hvdWxkQmx1cj17c2hvdWxkQmx1cn0+XG4gICAgICAgICAgPEFjdGlvblRvb2xiYXJcbiAgICAgICAgICAgIGxpa2VzPXtjb21tZW50RGF0YT8ubGlrZXN9XG4gICAgICAgICAgICBjb21tZW50PXtjb21tZW50RGF0YX1cbiAgICAgICAgICAgIHVzZXI9e3VzZXJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Q29sbGFwc2UgaW49e2lzT3Blbn0+XG4gICAgICAgICAgICA8RXZpZGVuY2VTZWN0aW9uPlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJlcGxpZXMubWFwKChyZXBseSwgaWR4KSA9PiAoXG4gICAgICAgICAgICAgICAgPENvbW1lbnRcbiAgICAgICAgICAgICAgICAgIGtleT17Y29tbWVudERhdGEuaWQgKyBTdHJpbmcoaWR4KX1cbiAgICAgICAgICAgICAgICAgIGNvbW1lbnREYXRhPXtyZXBseS5kYXRhfVxuICAgICAgICAgICAgICAgICAgcmVwbGllcz17cmVwbHkuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9FdmlkZW5jZVNlY3Rpb24+XG4gICAgICAgICAgPC9Db2xsYXBzZT5cbiAgICAgICAgPC9Gb290ZXI+XG5cbiAgICAgIDwvQ29tbWVudENvbnRhaW5lcj5cbiAgICAgIHsgc2hvdWxkQmx1ciAmJiAoXG4gICAgICA8Q2Vuc29yT3ZlcmxheVxuICAgICAgICBzZXRTaG91bGRCbHVyPXtzZXRTaG91bGRCbHVyfVxuICAgICAgICBjb250ZW50SWQ9e2NvbW1lbnREYXRhPy5pZH1cbiAgICAgICAgY29udGVudFR5cGU9e0NPTU1FTlR9XG4gICAgICAgIHNob3dOYXZpZ2F0aW9uVG9UcmlidW5hbD17Y29tbWVudERhdGE/LnJlcG9ydFN0YXR1cyA9PT0gVU5ERVJfUkVWSUVXICYmICFwYXRobmFtZS5pbmNsdWRlcygndHJpYnVuYWwnKX1cbiAgICAgIC8+XG4gICAgICApfVxuICAgIDwvT3V0ZXJDb250YWluZXI+XG5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBtZW1vKENvbW1lbnQpXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgT3V0ZXJDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICB6LWluZGV4OiA5OTtcblxuYFxuZXhwb3J0IGNvbnN0IENvbW1lbnRDb250YWluZXIgPSBzdHlsZWQoJ2xpJylgXG4gIHdpZHRoOiAxMDAlO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAuNGVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbi10b3A6IDFlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBib3gtc2hhZG93OiAgLTVweCAtNXB4IDEwcHggIzVhNWE1YSwgNXB4IDVweCAxMHB4ICNmZmZmZmY7XG5cbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDIwMCwyMDAsMjAwLDAuMjUpO1xuICA6aG92ZXIge1xuICAgIC8qIG9wYWNpdHk6IC45OyAqL1xuICAgIC8qIGZpbHRlcjogYnJpZ2h0bmVzcyguOSk7ICovXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2VmNWQ0NTY2OyAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNEOEZGRjE7XG4gIH1cblxuICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IEhlYWRlciA9IHN0eWxlZCgnZGl2JylgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gXG5cbmV4cG9ydCBjb25zdCBVc2VybmFtZSA9IHN0eWxlZCgnYicpYCBcbiAgY29sb3I6IGJsYWNrO1xuYFxuXG5leHBvcnQgY29uc3QgRGF0ZSA9IHN0eWxlZCgndGltZScpYCBcbiAgY29sb3I6IGdyYXk7XG5gXG5cbmV4cG9ydCBjb25zdCBCb2R5ID0gc3R5bGVkKCdkaXYnKWBcbiAgZmlsdGVyOiAkeyhwcm9wcykgPT4gKHByb3BzLnNob3VsZEJsdXIgPyAnYmx1cig1cHgpJyA6ICd1bnNldCcpfTtcbiAgcG9pbnRlci1ldmVudHM6ICR7KHByb3BzKSA9PiAocHJvcHMuc2hvdWxkQmx1ciA/ICdub25lJyA6ICdpbml0aWFsJyl9O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiBibGFjaztcbiAgbWluLWhlaWdodDogMTB2aDtcbiAgcGFkZGluZzogMWVtO1xuICB3aWR0aDogMTAwJTtcbmBcblxuZXhwb3J0IGNvbnN0IFRodW1iID0gc3R5bGVkKCdpbWcnKWAgXG4gIGZsZXgtc2hyaW5rOiAwO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4OyAgICAgIFxuICBib3JkZXItcmFkaXVzOiA1MCU7IFxuYFxuXG5leHBvcnQgY29uc3QgVXNlckluZm9Db250YWluZXIgPSBzdHlsZWQoJ2RpdicpYFxuICBkaXNwbGF5OiBmbGV4O1xuYFxuXG5leHBvcnQgY29uc3QgRXhwYW5kQnV0dG9uID0gc3R5bGVkKCdkaXYnKWAgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xuYFxuXG5leHBvcnQgY29uc3QgRXZpZGVuY2VTZWN0aW9uID0gc3R5bGVkKCd1bCcpYCBcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YwRjJGNTtcbiAgd2lkdGg6IDEwMCU7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgcGFkZGluZzogMCAuNWVtIC41ZW0gLjVlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbmBcbmV4cG9ydCBjb25zdCBGb290ZXIgPSBzdHlsZWQoJ2RpdicpYFxuICBmaWx0ZXI6ICR7KHByb3BzKSA9PiAocHJvcHMuc2hvdWxkQmx1ciA/ICdibHVyKDVweCknIDogJ3Vuc2V0Jyl9O1xuICBwb2ludGVyLWV2ZW50czogJHsocHJvcHMpID0+IChwcm9wcy5zaG91bGRCbHVyID8gJ25vbmUnIDogJ2luaXRpYWwnKX07XG4gIHdpZHRoOiAxMDAlO1xuYFxuXG5leHBvcnQgY29uc3QgQ29udGVudCA9IHN0eWxlZCgncCcpYCBcbiAgcGFkZGluZzogMWVtO1xuYFxuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBDb21tZW50IGZyb20gJy4uL0NvbW1lbnQvSW5kZXgnXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuL1N0eWxlJ1xuXG5leHBvcnQgY29uc3QgUGFyZW50Q29tbWVudENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpXG5cbmNvbnN0IENvbW1lbnRDb2x1bW4gPSAoe1xuICBudW1Db21tZW50cywgY29tbWVudHMsIGNvbW1lbnRTZW50aW1lbnQsIGNvbG9yLCB0b3BpY0lkLFxufSkgPT4gKFxuICA8Q29udGFpbmVyIGNvbG9yPXtjb2xvcn0+XG4gICAgPGgxPlxuICAgICAge251bUNvbW1lbnRzIHx8ICcnfVxuICAgICAgeycgJ31cbiAgICAgIHtjb21tZW50U2VudGltZW50IHx8ICcnfVxuICAgICAgeycgJ31cbiAgICAgIENvbW1lbnRzXG4gICAgPC9oMT5cbiAgICB7XG4gICAgICAgICAgY29tbWVudHM/Lm1hcCgoY29tbWVudCwgaWR4KSA9PiAoXG4gICAgICAgICAgICA8UGFyZW50Q29tbWVudENvbnRleHQuUHJvdmlkZXJcbiAgICAgICAgICAgICAga2V5PXtjb21tZW50LmRhdGE/LmlkICsgU3RyaW5nKGlkeCl9XG4gICAgICAgICAgICAgIHZhbHVlPXt7XG4gICAgICAgICAgICAgICAgY29tbWVudElkOiBjb21tZW50LmRhdGE/LmlkLFxuICAgICAgICAgICAgICAgIHRvcGljSWQsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxDb21tZW50XG4gICAgICAgICAgICAgICAga2V5PXtjb21tZW50LmRhdGE/LmlkICsgU3RyaW5nKGlkeCl9XG4gICAgICAgICAgICAgICAgY29tbWVudERhdGE9e2NvbW1lbnQuZGF0YX1cbiAgICAgICAgICAgICAgICByZXBsaWVzPXtjb21tZW50LmNoaWxkcmVufVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9QYXJlbnRDb21tZW50Q29udGV4dC5Qcm92aWRlcj5cbiAgICAgICAgICApKVxuICAgICAgICB9XG4gIDwvQ29udGFpbmVyPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBDb21tZW50Q29sdW1uXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKCd1bCcpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyZW07XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgLyogYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7ICovXG4gIHotaW5kZXg6IDk5O1xuICBvcGFjaXR5OiAuOTk7XG4gIHdpZHRoOiA3MHZ3O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDIwMCwyMDAsMjAwLDAuMjUpO1xuXG4gIGgxIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZzogMWVtO1xuICAgIGZvbnQtc2l6ZTogMXZ3O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHMpID0+IHByb3BzLmNvbG9yfTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcblxuICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gICAgICBmb250LXNpemU6IDV2dztcblxuICAgIH1cbiAgfVxuXG4gIFxuICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gIH1cbmBcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCBtZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuaW1wb3J0IHsgVGFiIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuXG5pbXBvcnQgdXNlQ2F0ZWdvcml6ZUNvbW1lbnRzIGZyb20gJy4uL2hvb2tzL3VzZUNhdGVnb3JpemVDb21tZW50cydcbmltcG9ydCB1c2VCaW5kRGlzcGF0Y2ggZnJvbSAnLi4vLi4vLi4vLi4vLi4vaG9va3MvcmVkdXgvdXNlQmluZERpc3BhdGNoJ1xuXG5pbXBvcnQgc3ViVG9waWNBY3Rpb25zIGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvc3VidG9waWNzJ1xuaW1wb3J0IGNvbW1lbnRBY3Rpb25zIGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvY29tbWVudHMnXG5pbXBvcnQgdG9waWNBY3Rpb25zIGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvdG9waWNzJ1xuXG5pbXBvcnQgQ29tbWVudENvbHVtbiBmcm9tICcuLi9Db21tZW50Q29sdW1uL0luZGV4J1xuaW1wb3J0IHsgQ29sdW1uQ29udGFpbmVyLCBUaHJlYWRDb250YWluZXIgfSBmcm9tICcuL1N0eWxlL2luZGV4J1xuaW1wb3J0IHsgVGhlbWVUYWIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9Db21tb25Db21wb25lbnRzL1RhYnMvU3R5bGUnXG5pbXBvcnQgeyBMaW5lIH0gZnJvbSAnLi4vLi4vU3R5bGUnXG5cbmNvbnN0IENvbW1lbnRUaHJlYWQgPSAoKSA9PiB7XG4gIGNvbnN0IHsgY29tbWVudElkLCB0b3BpY0lkIH0gPSB1c2VQYXJhbXMoKVxuICBjb25zdCB7IGdldEFsbENvbW1lbnRSZXBsaWVzLCBnZXRUb3BpYyB9ID0gdXNlQmluZERpc3BhdGNoKFxuICAgIHN1YlRvcGljQWN0aW9ucywgY29tbWVudEFjdGlvbnMsIHRvcGljQWN0aW9ucyxcbiAgKVxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5zZXNzaW9uLmN1cnJlbnRVc2VyKVxuICAvLyBjb25zdCBzdWJ0b3BpYyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuc3VidG9waWNzKVtzdWJUb3BpY0lkXVxuICBjb25zdCBba2V5LCBzZXRLZXldID0gdXNlU3RhdGUoJ2FsbCcpXG5cbiAgY29uc3Qge1xuICAgIFBPU0lUSVZFOiBwb3NpdGl2ZUNvbW1lbnRzLFxuICAgIE5FVVRSQUw6IG5ldXRyYWxDb21tZW50cyxcbiAgICBORUdBVElWRTogbmVnYXRpdmVDb21tZW50cyxcbiAgICBhbGw6IGFsbENvbW1lbnRzLFxuICB9ID0gdXNlQ2F0ZWdvcml6ZUNvbW1lbnRzKClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldEFsbENvbW1lbnRSZXBsaWVzKGNvbW1lbnRJZClcbiAgICBnZXRUb3BpYyh0b3BpY0lkLCB1c2VyPy5pZClcbiAgfSwgW3VzZXIsIGNvbW1lbnRJZF0pXG4gIHJldHVybiAoXG5cbiAgICA8VGhyZWFkQ29udGFpbmVyPlxuICAgICAgPExpbmUgLz5cbiAgICAgIDxUaGVtZVRhYlxuICAgICAgICBhY3RpdmVLZXk9e2tleX1cbiAgICAgICAgb25TZWxlY3Q9eyhrKSA9PiBzZXRLZXkoayl9XG4gICAgICA+XG4gICAgICAgIDxUYWIgZXZlbnRLZXk9XCJhbGxcIiB0aXRsZT1cIkFsbFwiPlxuICAgICAgICAgIDxDb2x1bW5Db250YWluZXI+XG4gICAgICAgICAgICA8Q29tbWVudENvbHVtbiBudW1Db21tZW50cz17MH0gY29tbWVudHM9e2FsbENvbW1lbnRzfSBjb21tZW50U2VudGltZW50PVwiXCIgY29sb3I9XCIjNkE2RTcwXCIgLz5cbiAgICAgICAgICA8L0NvbHVtbkNvbnRhaW5lcj5cbiAgICAgICAgPC9UYWI+XG4gICAgICAgIDxUYWIgZXZlbnRLZXk9XCJwb3NpdGl2ZVwiIHRpdGxlPVwiR2VuZXJhbGx5IFBvc2l0aXZlXCI+XG4gICAgICAgICAgPENvbHVtbkNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxDb21tZW50Q29sdW1uIG51bUNvbW1lbnRzPXswfSBjb21tZW50cz17cG9zaXRpdmVDb21tZW50c30gY29tbWVudFNlbnRpbWVudD1cIkdlbmVyYWxseSBQb3NpdGl2ZVwiIGNvbG9yPVwiIzZBNkU3MFwiIC8+XG4gICAgICAgICAgPC9Db2x1bW5Db250YWluZXI+XG4gICAgICAgIDwvVGFiPlxuICAgICAgICA8VGFiIGV2ZW50S2V5PVwibmV1dHJhbFwiIHRpdGxlPVwiTmV1dHJhbFwiPlxuICAgICAgICAgIDxDb2x1bW5Db250YWluZXI+XG4gICAgICAgICAgICA8Q29tbWVudENvbHVtbiBudW1Db21tZW50cz17MH0gY29tbWVudHM9e25ldXRyYWxDb21tZW50c30gY29tbWVudFNlbnRpbWVudD1cIk5ldXRyYWxcIiBjb2xvcj1cIiM0NzRBNEZcIiAvPlxuICAgICAgICAgIDwvQ29sdW1uQ29udGFpbmVyPlxuICAgICAgICA8L1RhYj5cbiAgICAgICAgPFRhYiBldmVudEtleT1cIm5lZ2F0aXZlXCIgdGl0bGU9XCJHZW5lcmFsbHkgTmVnYXRpdmVcIj5cbiAgICAgICAgICA8Q29sdW1uQ29udGFpbmVyPlxuICAgICAgICAgICAgPENvbW1lbnRDb2x1bW4gbnVtQ29tbWVudHM9ezB9IGNvbW1lbnRzPXtuZWdhdGl2ZUNvbW1lbnRzfSBjb21tZW50U2VudGltZW50PVwiR2VuZXJhbGx5IE5lZ2F0aXZlXCIgY29sb3I9XCIjNkE2RTcwXCIgLz5cbiAgICAgICAgICA8L0NvbHVtbkNvbnRhaW5lcj5cbiAgICAgICAgPC9UYWI+XG4gICAgICA8L1RoZW1lVGFiPlxuICAgIDwvVGhyZWFkQ29udGFpbmVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW8oQ29tbWVudFRocmVhZClcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBUaHJlYWRDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogNzB2dztcblxuYFxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZCgnZGl2JylgXG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiA1MHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA1ZW07XG5cbiAgaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxLjVlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xuICAgIGgxIHtcbiAgICAgIG1heC13aWR0aDogMzB2dztcbiAgICB9XG4gICAgYiB7XG4gICAgIGNvbG9yOiB2YXIoLS1tLXByaW1hcnktY29sb3IpXG4gICAgfVxuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBDb2x1bW5Db250YWluZXIgPSBzdHlsZWQoJ3NlY3Rpb24nKWBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIC8qIGJvcmRlci10b3A6IDFweCBzb2xpZCBncmF5OyAqL1xuICB3aWR0aDogMTAwdnc7XG5cbiAgdWw6Zmlyc3QtY2hpbGQge1xuICAgIC8qIGJvcmRlci1yaWdodDogLjFweCBkYXNoZWQgcmdiKDQ4LDQ4LDUwKTsgKi9cbiAgfVxuXG4gICB1bDpsYXN0LWNoaWxkIHtcbiAgICAvKiBib3JkZXItbGVmdDogLjFweCBzb2xpZCByZ2IoNDgsNDgsNTApOyAqL1xuICB9XG5cblxuYFxuIiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LXByb3BzLW5vLXNwcmVhZGluZyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8sIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IHVzZVBhcmFtcywgdXNlU2VhcmNoUGFyYW1zLCB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBUb29sdGlwLCBPdmVybGF5VHJpZ2dlciB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcblxuaW1wb3J0IEVtYmVkZWRUd2VldCBmcm9tICcuLi8uLi8uLi8uLi8uLi9Db21tb25Db21wb25lbnRzL1RvcGljQ2FyZHMvVHdlZXRDYXJkL0luZGV4J1xuaW1wb3J0IFZpZGVvU2hvd1BhZ2UgZnJvbSAnLi4vLi4vLi4vLi4vLi4vVmlkZW9TaG93UGFnZS9JbmRleCdcbmltcG9ydCBFeHRlcm5hbENvbnRlbnRDYXJkIGZyb20gJy4uLy4uLy4uLy4uLy4uL0NvbW1vbkNvbXBvbmVudHMvVG9waWNDYXJkcy9FeHRlcm5hbENvbnRlbnRDYXJkL0luZGV4J1xuaW1wb3J0IFVzZXJQcm92aWRlZE1lZGlhQ2FyZCBmcm9tICcuLi8uLi8uLi8uLi8uLi9Db21tb25Db21wb25lbnRzL1RvcGljQ2FyZHMvVXNlclByb3ZpZGVkTWVkaWFDYXJkL0luZGV4J1xuaW1wb3J0IFVzZXJJbmZvSGVhZGVyIGZyb20gJy4uLy4uLy4uLy4uLy4uL0NvbW1vbkNvbXBvbmVudHMvVXNlckluZm9IZWFkZXIvSW5kZXgnXG5cbmltcG9ydCB1c2VTZXRJbm5lckh0bWwgZnJvbSAnLi4vLi4vLi4vLi4vLi4vaG9va3MvdXNlU2V0SW5uZXJIdG1sJ1xuXG5pbXBvcnQgeyBnZXRUaW1lU2luY2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9nZW5lcmljL3N0cmluZy9kYXRlRm9ybWF0dGVyJ1xuXG5pbXBvcnQge1xuICBDb250YWluZXIsIERlc2NyaXB0aW9uLCBUb3BpY1N1bW1hcnlDb250YWluZXIsIFN0eWxlZExvbmdEb3duQXJyb3csXG59IGZyb20gJy4vU3R5bGUvaW5kZXgnXG5pbXBvcnQgeyB1dWlkUmVnRXggfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9nZW5lcmljL3JlZ2V4L3V1aWQnXG5cbmNvbnN0IFRvb2x0aXBDb21wb25lbnQgPSAoeyB0ZXh0LCB0aXRsZSwgcmVmZXJlbmNlIH0pID0+IChcbiAgPE92ZXJsYXlUcmlnZ2VyXG4gICAgcGxhY2VtZW50PVwidG9wXCJcbiAgICBvdmVybGF5PXsoXG4gICAgICA8VG9vbHRpcD5cbiAgICAgICAgPHN0cm9uZz57dGl0bGV9PC9zdHJvbmc+XG4gICAgICA8L1Rvb2x0aXA+XG4gICAgICApfVxuICA+XG4gICAgPHNwYW4gb25DbGljaz17KCkgPT4gcmVmZXJlbmNlPy5jdXJyZW50Py5zY3JvbGxJbnRvVmlldygpfT57dGV4dH08L3NwYW4+XG4gIDwvT3ZlcmxheVRyaWdnZXI+XG4pXG5cbmNvbnN0IEhlYWRlciA9ICh7IHRvcGljLCB1c2VyIH0pID0+IHtcbiAgbGV0IGNvbnRlbnQgPSBudWxsXG4gIGxldCBzdWJ0b3BpY0NvbnRlbnQgPSBudWxsXG4gIGNvbnN0IHsgJyonOiB1cmwgfSA9IHVzZVBhcmFtcygpXG4gIGNvbnN0IFtzdWJ0b3BpY0lkLCBjb21tZW50SWRdID0gdXJsID8gdXJsLm1hdGNoKHV1aWRSZWdFeCkgOiBbXVxuXG4gIGNvbnN0IHN1YnRvcGljID0gdXNlU2VsZWN0b3IoKHMpID0+IHMuc3VidG9waWNzKVtzdWJ0b3BpY0lkXVxuICBjb25zdCBzaG93U3ViVG9waWMgPSBzdWJ0b3BpYyAmJiBzdWJ0b3BpYz8udGl0bGUgIT09ICdHZW5lcmFsJ1xuXG4gIGNvbnN0IGNvbW1vblByb3BzID0gdXNlTWVtbygoKSA9PiAoe1xuICAgIHRvcGljLCB1c2VyLCBzaG93TGlua3M6IHRydWUsXG4gIH0pLCBbdG9waWMsIHVzZXJdKVxuXG4gIGNvbnN0IGRlc2NSZWYgPSB1c2VSZWYobnVsbClcbiAgY29uc3Qgc3VidG9waWNSZWYgPSB1c2VSZWYobnVsbClcbiAgY29uc3QgdG9waWNSZWYgPSB1c2VSZWYobnVsbClcblxuICB1c2VTZXRJbm5lckh0bWwoZGVzY1JlZiwgdG9waWM/LmRlc2NyaXB0aW9uKVxuXG4gIGNvbnN0IGNvbW1vblByb3BzU3ViVG9waWMgPSB1c2VNZW1vKCgpID0+ICh7XG4gICAgdG9waWM6IHN1YnRvcGljLCB1c2VyLCBzaG93TGlua3M6IHRydWUsXG4gIH0pLCBbc3VidG9waWMsIHVzZXJdKVxuXG4gIGlmICh0b3BpYz8udHdlZXRIdG1sKSBjb250ZW50ID0gPEVtYmVkZWRUd2VldCB7Li4uY29tbW9uUHJvcHN9IC8+XG4gIGVsc2UgaWYgKHRvcGljPy55dFVybCkgY29udGVudCA9IDxWaWRlb1Nob3dQYWdlIHsuLi5jb21tb25Qcm9wc30gc3JjPXt0b3BpYy55dFVybC5yZXBsYWNlKCd3YXRjaD92PScsICdlbWJlZC8nKX0gLz5cbiAgZWxzZSBpZiAodG9waWM/LnZvZFVybCB8fCB0b3BpYz8uaW1hZ2VVcmwpIGNvbnRlbnQgPSA8VXNlclByb3ZpZGVkTWVkaWFDYXJkIHsuLi5jb21tb25Qcm9wc30gLz5cbiAgZWxzZSBjb250ZW50ID0gPEV4dGVybmFsQ29udGVudENhcmQgey4uLmNvbW1vblByb3BzfSAvPlxuICBpZiAoc3VidG9waWMpIHtcbiAgICBpZiAoc3VidG9waWM/LnR3ZWV0SHRtbCkgc3VidG9waWNDb250ZW50ID0gPEVtYmVkZWRUd2VldCB7Li4uY29tbW9uUHJvcHNTdWJUb3BpY30gLz5cbiAgICBlbHNlIGlmIChzdWJ0b3BpYz8ueXRVcmwpIHN1YnRvcGljQ29udGVudCA9IDxWaWRlb1Nob3dQYWdlIHsuLi5jb21tb25Qcm9wc1N1YlRvcGljfSBzcmM9e3N1YnRvcGljLnl0VXJsLnJlcGxhY2UoJ3dhdGNoP3Y9JywgJ2VtYmVkLycpfSAvPlxuICAgIGVsc2UgaWYgKHN1YnRvcGljPy52b2RVcmwgfHwgc3VidG9waWM/LmltYWdlVXJsKSB7XG4gICAgICBzdWJ0b3BpY0NvbnRlbnQgPSA8VXNlclByb3ZpZGVkTWVkaWFDYXJkIHsuLi5jb21tb25Qcm9wc1N1YlRvcGljfSAvPlxuICAgIH0gZWxzZSBzdWJ0b3BpY0NvbnRlbnQgPSA8RXh0ZXJuYWxDb250ZW50Q2FyZCB7Li4uY29tbW9uUHJvcHNTdWJUb3BpY30gLz5cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWZvY3VzLWluXCI+XG4gICAgICAgIHsnICd9XG4gICAgICAgIHtcbiAgICAgICAgICBzaG93U3ViVG9waWMgPyAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICBEaXNjdXNzaW9uIFJlbGF0ZWQgVG8gUGFyZW50XG4gICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgIDxUb29sdGlwQ29tcG9uZW50IHRleHQ9XCJUb3BpY1wiIHRpdGxlPXt0b3BpYz8udGl0bGV9IHJlZmVyZW5jZT17dG9waWNSZWZ9IC8+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgeydXZVxcJ3JlIFRhbGtpbmcgQWJvdXQgVGhpcyd9XG4gICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgIDxUb29sdGlwQ29tcG9uZW50IHRleHQ9XCJUb3BpY1wiIHRpdGxlPXt0b3BpYz8udGl0bGV9IHJlZmVyZW5jZT17dG9waWNSZWZ9IC8+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIDwvaDE+XG5cbiAgICAgIDxkaXYgcmVmPXt0b3BpY1JlZn0gc3R5bGU9e3sgd2lkdGg6ICc5MCUnIH19PlxuICAgICAgICB7IXNob3dTdWJUb3BpYyAmJiBjb250ZW50IH1cbiAgICAgICAgPFRvcGljU3VtbWFyeUNvbnRhaW5lciBoaWRkZW49eyFzaG93U3ViVG9waWN9PlxuICAgICAgICAgIDxVc2VySW5mb0hlYWRlclxuICAgICAgICAgICAgaWNvblNyYz17dG9waWM/LmNyZWF0ZWRCeUljb25TcmN9XG4gICAgICAgICAgICB0aW1lPXtnZXRUaW1lU2luY2UodG9waWM/LmNyZWF0ZWRBdCl9XG4gICAgICAgICAgICB1c2VybmFtZT17dG9waWM/LmNyZWF0ZWRCeX1cbiAgICAgICAgICAgIHVzZXJJZD17dG9waWM/LnVzZXJJZH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxpbWcgc3JjPXt0b3BpYz8udGh1bWJJbWdVcmx9IGFsdD1cIk5vdGhpbmcgVG8gU2hvd1wiIC8+XG4gICAgICAgICAgPERlc2NyaXB0aW9uPlxuICAgICAgICAgICAgPHNwYW4gcmVmPXtkZXNjUmVmfSAvPlxuICAgICAgICAgIDwvRGVzY3JpcHRpb24+XG4gICAgICAgIDwvVG9waWNTdW1tYXJ5Q29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgICB7IHN1YnRvcGljICYmIDxTdHlsZWRMb25nRG93bkFycm93IGhpZGRlbj17IXNob3dTdWJUb3BpY30gLz4gfVxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtZm9jdXMtaW5cIiBoaWRkZW49eyFzaG93U3ViVG9waWN9PlxuICAgICAgICB7JyAnfVxuICAgICAgICB7J1dlXFwncmUgVGFsa2luZyBBYm91dCBUaGlzJ31cbiAgICAgICAgeycgJ31cbiAgICAgICAgPFRvb2x0aXBDb21wb25lbnQgdGV4dD1cIlN1YnRvcGljXCIgdGl0bGU9e3N1YnRvcGljPy50aXRsZX0gcmVmZXJlbmNlPXtzdWJ0b3BpY1JlZn0gLz5cbiAgICAgIDwvaDE+XG4gICAgICA8ZGl2IGhpZGRlbj17IXNob3dTdWJUb3BpY30gcmVmPXtzdWJ0b3BpY1JlZn0gc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XG4gICAgICAgIHtzdWJ0b3BpY0NvbnRlbnR9XG4gICAgICA8L2Rpdj5cbiAgICA8L0NvbnRhaW5lcj5cblxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IExvbmdEb3duQXJyb3cgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9zdmdzL3N2Z3MnXG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpYCBcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMDAsMjAwLDIwMCwwLjI1KTtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZSA7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiA1MHZ3O1xuICBwYWRkaW5nOiAxZW07XG4gIC8qIGJvcmRlci10b3A6IG5vbmU7ICovXG4gIHBhZGRpbmctdG9wOiA1ZW07XG4gIHotaW5kZXg6IDk5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGN0Y3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgaDEge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvKiB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgKi9cbiAgICBsZXR0ZXItc3BhY2luZzogLjJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAzdnc7XG4gICAgLyogZm9udC13ZWlnaHQ6IGJvbGQ7ICovXG4gIH1cbiAgc3BhbiB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICBwYWRkaW5nOiAxZW0gMDtcbiAgfVxuXG5gXG5cbmV4cG9ydCBjb25zdCBMaW5rc0NvbnRhaW5lciA9IHN0eWxlZCgnZGl2JylgXG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHVsOmZpcnN0LWNoaWxkIHtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBncmF5O1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBEZXNjcmlwdGlvbiA9IHN0eWxlZCgncCcpYFxuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAuN3Z3O1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHBhZGRpbmc6IDFlbTtcbmBcblxuZXhwb3J0IGNvbnN0IFRvcGljU3VtbWFyeUNvbnRhaW5lciA9IHN0eWxlZCgnZGl2JylgICBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLyogaGVpZ2h0OiAkeyhwcm9wcykgPT4gKGAke3Byb3BzLmhlaWdodH1weGApfTsgKi9cbiAgLyogd2lkdGg6IDQwdnc7ICAgKi9cbiAgbWFyZ2luOiAyZW07XG4gIGJvcmRlci1yYWRpdXM6IC41ZW07XG4gIGJveC1zaGFkb3c6ICAtNXB4IC01cHggMTBweCAjNWE1YTVhLCA1cHggNXB4IDEwcHggI2ZmZmZmZjtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbmBcblxuZXhwb3J0IGNvbnN0IFN0eWxlZExvbmdEb3duQXJyb3cgPSBzdHlsZWQoTG9uZ0Rvd25BcnJvdylgIFxuICBtYXJnaW4tYm90dG9tOiAydnc7XG5gXG4iLCJpbXBvcnQgUmVhY3QsIHsgbWVtbywgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgQ29tbWVudCBmcm9tICcuLi9Db21tZW50L0luZGV4J1xuaW1wb3J0IHsgUGFyZW50Q29tbWVudENvbnRleHQgfSBmcm9tICcuLi9Db21tZW50Q29sdW1uL0luZGV4J1xuXG5jb25zdCBQYXJlbnRDb21tZW50ID0gKHsgdG9waWNJZCB9KSA9PiB7XG4gIGNvbnN0IHRhcmdldENvbW1lbnQgPSB1c2VTZWxlY3RvcigocykgPT4gcy5jb21tZW50cy50YXJnZXRDb21tZW50KVxuICBjb25zdCBjb21tZW50UmVmID0gdXNlQ2FsbGJhY2soKG5vZGUpID0+IHtcbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgbm9kZS5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuXG4gICAgPFBhcmVudENvbW1lbnRDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICBjb21tZW50SWQ6IHRhcmdldENvbW1lbnQ/LmlkLFxuICAgICAgICB0b3BpY0lkLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8Q29tbWVudCBjb21tZW50UmVmPXtjb21tZW50UmVmfSBjb21tZW50RGF0YT17dGFyZ2V0Q29tbWVudH0gcmVwbGllcz17W119IC8+XG4gICAgPC9QYXJlbnRDb21tZW50Q29udGV4dC5Qcm92aWRlcj5cblxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW8oUGFyZW50Q29tbWVudClcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCBtZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuaW1wb3J0IHsgVGFiIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuXG5pbXBvcnQgdXNlQ2F0ZWdvcml6ZUNvbW1lbnRzIGZyb20gJy4uL2hvb2tzL3VzZUNhdGVnb3JpemVDb21tZW50cydcbmltcG9ydCB1c2VCaW5kRGlzcGF0Y2ggZnJvbSAnLi4vLi4vLi4vLi4vLi4vaG9va3MvcmVkdXgvdXNlQmluZERpc3BhdGNoJ1xuXG5pbXBvcnQgc3ViVG9waWNBY3Rpb25zIGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvc3VidG9waWNzJ1xuaW1wb3J0IGNvbW1lbnRBY3Rpb25zIGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvY29tbWVudHMnXG5pbXBvcnQgdG9waWNBY3Rpb25zIGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvdG9waWNzJ1xuXG5pbXBvcnQgQ29tbWVudENvbHVtbiBmcm9tICcuLi9Db21tZW50Q29sdW1uL0luZGV4J1xuaW1wb3J0IHsgQ29sdW1uQ29udGFpbmVyLCBUaHJlYWRDb250YWluZXIgfSBmcm9tICcuL1N0eWxlL2luZGV4J1xuaW1wb3J0IHsgVGhlbWVUYWIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9Db21tb25Db21wb25lbnRzL1RhYnMvU3R5bGUnXG5pbXBvcnQgeyBMaW5lIH0gZnJvbSAnLi4vLi4vU3R5bGUnXG5pbXBvcnQgdXNlU2Vzc2lvblR5cGUgZnJvbSAnLi4vLi4vLi4vLi4vLi4vaG9va3MvcGVybWlzc2lvbnMvdXNlU2Vzc2lvblR5cGUnXG5cbmNvbnN0IFN1YlRvcGljVGhyZWFkID0gKCkgPT4ge1xuICBjb25zdCB7IHN1YlRvcGljSWQsIHRvcGljSWQgfSA9IHVzZVBhcmFtcygpXG4gIGNvbnN0IHsgZ2V0QWxsQ29tbWVudHMsIGdldFRvcGljIH0gPSB1c2VCaW5kRGlzcGF0Y2goXG4gICAgc3ViVG9waWNBY3Rpb25zLCBjb21tZW50QWN0aW9ucywgdG9waWNBY3Rpb25zLFxuICApXG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnNlc3Npb24uY3VycmVudFVzZXIpXG4gIGNvbnN0IHN1YnRvcGljID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5zdWJ0b3BpY3MpW3N1YlRvcGljSWRdXG4gIGNvbnN0IFtrZXksIHNldEtleV0gPSB1c2VTdGF0ZSgnYWxsJylcbiAgY29uc3Qgc2Vzc2lvblR5cGUgPSB1c2VTZXNzaW9uVHlwZSgpXG5cbiAgY29uc3Qge1xuICAgIFBPU0lUSVZFOiBwb3NpdGl2ZUNvbW1lbnRzLFxuICAgIE5FVVRSQUw6IG5ldXRyYWxDb21tZW50cyxcbiAgICBORUdBVElWRTogbmVnYXRpdmVDb21tZW50cyxcbiAgICBhbGw6IGFsbENvbW1lbnRzLFxuICB9ID0gdXNlQ2F0ZWdvcml6ZUNvbW1lbnRzKClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGdldCA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHsgc2lnbmVkSW5WaWFDbGVyaywgc2lnbmVkSW5WaWFESUQgfSA9IGF3YWl0IHNlc3Npb25UeXBlXG4gICAgICBpZiAoIXNpZ25lZEluVmlhQ2xlcmsgJiYgIXNpZ25lZEluVmlhRElEKSByZXR1cm4gbmV3IFByb21pc2UoKVxuICAgICAgZ2V0QWxsQ29tbWVudHMoc3ViVG9waWNJZCwgdXNlcj8uaWQpXG4gICAgICBnZXRUb3BpYyh0b3BpY0lkLCB1c2VyPy5pZClcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgpXG4gICAgfVxuICAgIGdldCgpXG4gIH0sIFt1c2VyPy5pZF0pXG4gIHJldHVybiAoXG5cbiAgICA8VGhyZWFkQ29udGFpbmVyPlxuICAgICAgPExpbmUgLz5cbiAgICAgIDxUaGVtZVRhYlxuICAgICAgICBhY3RpdmVLZXk9e2tleX1cbiAgICAgICAgb25TZWxlY3Q9eyhrKSA9PiBzZXRLZXkoayl9XG4gICAgICA+XG4gICAgICAgIDxUYWIgZXZlbnRLZXk9XCJhbGxcIiB0aXRsZT1cIkFsbFwiPlxuICAgICAgICAgIDxDb2x1bW5Db250YWluZXI+XG4gICAgICAgICAgICA8Q29tbWVudENvbHVtbiB0b3BpY0lkPXt0b3BpY0lkfSBudW1Db21tZW50cz17c3VidG9waWM/LmFsbENvbW1lbnRzfSBjb21tZW50cz17YWxsQ29tbWVudHN9IGNvbW1lbnRTZW50aW1lbnQ9XCJcIiBjb2xvcj1cIiM2QTZFNzBcIiAvPlxuICAgICAgICAgIDwvQ29sdW1uQ29udGFpbmVyPlxuICAgICAgICA8L1RhYj5cbiAgICAgICAgPFRhYiBldmVudEtleT1cInBvc2l0aXZlXCIgdGl0bGU9XCJHZW5lcmFsbHkgUG9zaXRpdmVcIj5cbiAgICAgICAgICA8Q29sdW1uQ29udGFpbmVyPlxuICAgICAgICAgICAgPENvbW1lbnRDb2x1bW4gdG9waWNJZD17dG9waWNJZH0gbnVtQ29tbWVudHM9e3N1YnRvcGljPy5wb3NpdGl2ZUNvbW1lbnRzfSBjb21tZW50cz17cG9zaXRpdmVDb21tZW50c30gY29tbWVudFNlbnRpbWVudD1cIkdlbmVyYWxseSBQb3NpdGl2ZVwiIGNvbG9yPVwiIzZBNkU3MFwiIC8+XG4gICAgICAgICAgPC9Db2x1bW5Db250YWluZXI+XG4gICAgICAgIDwvVGFiPlxuICAgICAgICA8VGFiIGV2ZW50S2V5PVwibmV1dHJhbFwiIHRpdGxlPVwiTmV1dHJhbFwiPlxuICAgICAgICAgIDxDb2x1bW5Db250YWluZXI+XG4gICAgICAgICAgICA8Q29tbWVudENvbHVtbiB0b3BpY0lkPXt0b3BpY0lkfSBudW1Db21tZW50cz17c3VidG9waWM/Lm5ldXRyYWxDb21tZW50c30gY29tbWVudHM9e25ldXRyYWxDb21tZW50c30gY29tbWVudFNlbnRpbWVudD1cIk5ldXRyYWxcIiBjb2xvcj1cIiM0NzRBNEZcIiAvPlxuICAgICAgICAgIDwvQ29sdW1uQ29udGFpbmVyPlxuICAgICAgICA8L1RhYj5cbiAgICAgICAgPFRhYiBldmVudEtleT1cIm5lZ2F0aXZlXCIgdGl0bGU9XCJHZW5lcmFsbHkgTmVnYXRpdmVcIj5cbiAgICAgICAgICA8Q29sdW1uQ29udGFpbmVyPlxuICAgICAgICAgICAgPENvbW1lbnRDb2x1bW4gdG9waWNJZD17dG9waWNJZH0gbnVtQ29tbWVudHM9e3N1YnRvcGljPy5uZWdhdGl2ZUNvbW1lbnRzfSBjb21tZW50cz17bmVnYXRpdmVDb21tZW50c30gY29tbWVudFNlbnRpbWVudD1cIkdlbmVyYWxseSBOZWdhdGl2ZVwiIGNvbG9yPVwiIzZBNkU3MFwiIC8+XG4gICAgICAgICAgPC9Db2x1bW5Db250YWluZXI+XG4gICAgICAgIDwvVGFiPlxuICAgICAgPC9UaGVtZVRhYj5cbiAgICA8L1RocmVhZENvbnRhaW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBtZW1vKFN1YlRvcGljVGhyZWFkKVxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IFRocmVhZENvbnRhaW5lciA9IHN0eWxlZCgnZGl2JylgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiA3MHZ3O1xuXG5gXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWBcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDUwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDVlbTtcblxuICBoZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEuNWVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW0tcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiAxZW07XG4gICAgaDEge1xuICAgICAgbWF4LXdpZHRoOiAzMHZ3O1xuICAgIH1cbiAgICBiIHtcbiAgICAgY29sb3I6IHZhcigtLW0tcHJpbWFyeS1jb2xvcilcbiAgICB9XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IENvbHVtbkNvbnRhaW5lciA9IHN0eWxlZCgnc2VjdGlvbicpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgLyogYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdyYXk7ICovXG4gIHdpZHRoOiAxMDB2dztcblxuICB1bDpmaXJzdC1jaGlsZCB7XG4gICAgLyogYm9yZGVyLXJpZ2h0OiAuMXB4IGRhc2hlZCByZ2IoNDgsNDgsNTApOyAqL1xuICB9XG5cbiAgIHVsOmxhc3QtY2hpbGQge1xuICAgIC8qIGJvcmRlci1sZWZ0OiAuMXB4IHNvbGlkIHJnYig0OCw0OCw1MCk7ICovXG4gIH1cblxuXG5gXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4J1xuLy8gaW1wb3J0IHsgUmlBcnJvd0Ryb3BSaWdodEZpbGwgfSBmcm9tICdyZWFjdC1pY29ucy9yaSdcbmltcG9ydCB7IFJpZ2h0VHJpYW5nbGVBcnJvd0ZpbGxTdmcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9zdmdzL3N2Z3MnXG5pbXBvcnQgdXNlR29Ub1N1YlRvcGljIGZyb20gJy4uLy4uL2hvb2tzL3VzZUdvVG9TdWJUb3BpYydcblxuaW1wb3J0IFRoZW1lQnV0dG9uIGZyb20gJy4uLy4uLy4uLy4uLy4uL0NvbW1vbkNvbXBvbmVudHMvQnV0dG9uL0luZGV4J1xuaW1wb3J0IFN1YlRvcGljc1RhYmxlIGZyb20gJy4uL1N1YlRvcGljc1RhYmxlL0luZGV4J1xuXG5pbXBvcnQgdWlBY3Rpb25DcmVhdG9ycyBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9yZWR1eC9hY3Rpb25zL3VpJ1xuaW1wb3J0IHsgQ1JFQVRFX1NVQl9UT1BJQyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL0FwcC9Nb2RhbC9JbmRleCdcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4vU3R5bGUvaW5kZXgnXG5cbmNvbnN0IFN1YlRvcGljc0xpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IHN1YnRvcGljcyA9IHVzZVNlbGVjdG9yKChzKSA9PiBzLnN1YnRvcGljcylcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXG4gIGNvbnN0IHsgb3Blbk1vZGFsIH0gPSBiaW5kQWN0aW9uQ3JlYXRvcnModWlBY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpXG4gIGNvbnN0IGdlblN1YlRvcGljID0gT2JqZWN0LnZhbHVlcyhzdWJ0b3BpY3MpPy5maW5kKCh7IHRpdGxlIH0pID0+IHRpdGxlID09PSAnR2VuZXJhbCcpXG4gIGNvbnN0IGdvVG9TdWJUb3BpYyA9IHVzZUdvVG9TdWJUb3BpYyhnZW5TdWJUb3BpYz8uaWQpXG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPGgxPlxuICAgICAgICBCcm93c2UgU29tZVxuICAgICAgICB7JyAnfVxuICAgICAgICA8Yj5TdWItVG9waWNzPC9iPlxuICAgICAgICB7JyAnfVxuICAgICAgICBvciBDcmVhdGUgWW91ciBPd24uLi5cbiAgICAgIDwvaDE+XG5cbiAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxuICAgICAgICA8VGhlbWVCdXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IG9wZW5Nb2RhbChDUkVBVEVfU1VCX1RPUElDKX0+XG4gICAgICAgICAgQ3JlYXRlIFN1YiBUb3BpYyArXG4gICAgICAgIDwvVGhlbWVCdXR0b24+XG4gICAgICAgIDxUaGVtZUJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17Z29Ub1N1YlRvcGljfT5cbiAgICAgICAgICBHZW5lcmFsIERpc2N1c3Npb25cbiAgICAgICAgICB7JyAnfVxuICAgICAgICAgIDxSaWdodFRyaWFuZ2xlQXJyb3dGaWxsU3ZnIHNpemU9ezUwfSAvPlxuICAgICAgICA8L1RoZW1lQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8U3ViVG9waWNzVGFibGUgLz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdWJUb3BpY3NMaXN0XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKCdzZWN0aW9uJylgXG5cbiAgd2lkdGg6IDcwdnc7XG4gIHBhZGRpbmctYm90dG9tOiAyMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICA+IGgxIHtcbiAgICBwYWRkaW5nOiAuNWVtIDJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMnZ3O1xuICAgIGJveC1zaGFkb3c6ICAtNXB4IC01cHggMTBweCAjNWE1YTVhLCA1cHggNXB4IDEwcHggI2ZmZmZmZjtcbiAgfVxuICBiIHtcbiAgICBjb2xvcjogdmFyKC0tbS1wcmltYXJ5LWNvbG9yKTtcbiAgfVxuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICB3aWR0aDogMTAwdndcbiAgfVxuYFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyBSb3V0ZSwgUm91dGVzIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuaW1wb3J0IFN1YlRvcGljVGhyZWFkIGZyb20gJy4uL1N1YlRvcGljVGhyZWFkL0luZGV4J1xuaW1wb3J0IFN1YlRvcGljc0xpc3QgZnJvbSAnLi4vU3ViVG9waWNzTGlzdC9JbmRleCdcbmltcG9ydCBDb21tZW50VGhyZWFkIGZyb20gJy4uL0NvbW1lbnRUaHJlYWQvSW5kZXgnXG5cbmltcG9ydCBXYXZ5QmFja2dyb3VuZCBmcm9tICcuLi8uLi8uLi8uLi8uLi9Db21tb25Db21wb25lbnRzL1dhdnlCYWNrZ3JvdW5kL0luZGV4J1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxSb3V0ZXM+XG4gICAgPFJvdXRlXG4gICAgICBwYXRoPVwiOnN1YlRvcGljSWQvY29tbWVudHMvOmNvbW1lbnRJZFwiXG4gICAgICBlbGVtZW50PXsoXG4gICAgICAgIDw+XG4gICAgICAgICAgPFdhdnlCYWNrZ3JvdW5kIGNvbG9yPVwiZ3JlZW5cIiB0b3A9XCIxMTUlXCIgLz5cbiAgICAgICAgICA8Q29tbWVudFRocmVhZCAvPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgLz5cbiAgICA8Um91dGVcbiAgICAgIHBhdGg9XCI6c3ViVG9waWNJZFwiXG4gICAgICBlbGVtZW50PXsoXG4gICAgICAgIDw+XG4gICAgICAgICAgPFdhdnlCYWNrZ3JvdW5kIGNvbG9yPVwiZ3JlZW5cIiB0b3A9XCIxMTUlXCIgLz5cbiAgICAgICAgICA8U3ViVG9waWNUaHJlYWQgLz5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIC8+XG4gICAgPFJvdXRlIHBhdGg9XCIvXCIgZWxlbWVudD17PFN1YlRvcGljc0xpc3QgLz59IC8+XG4gIDwvUm91dGVzPlxuKVxuIiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LXByb3BzLW5vLXNwcmVhZGluZyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCBTdWJUb3BpY3NJdGVtIGZyb20gJy4vU3ViVG9waWNzSXRlbS9JbmRleCdcblxuaW1wb3J0IHsgTGluZSB9IGZyb20gJy4uLy4uL1N0eWxlL2luZGV4J1xuaW1wb3J0IHtcbiAgQ29udGFpbmVyLCBUYWJsZUhlYWRlciwgVGFibGUsIENvbEhlYWRlciwgQ29sSXRlbSxcbn0gZnJvbSAnLi9TdHlsZSdcblxuY29uc3QgU3ViVG9waWNzVGFibGUgPSAoKSA9PiB7XG4gIC8vIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnNlc3Npb24uY3VycmVudFVzZXIpXG4gIGNvbnN0IHN1YnRvcGljcyA9IE9iamVjdC52YWx1ZXModXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5zdWJ0b3BpY3MpKVxuICBjb25zdCB7IHRvcGljSWQgfSA9IHVzZVBhcmFtcygpXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxMaW5lIC8+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8VGFibGVIZWFkZXI+XG4gICAgICAgICAgPGgxPlxuICAgICAgICAgICAgPHNwYW4+Q292aWQ8L3NwYW4+XG4gICAgICAgICAgICA8c3Bhbj5TdWIgVG9waWNzPC9zcGFuPlxuICAgICAgICAgIDwvaDE+XG4gICAgICAgIDwvVGFibGVIZWFkZXI+XG4gICAgICAgIDxUYWJsZT5cbiAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICA8Q29sSGVhZGVyPlxuICAgICAgICAgICAgICA8Q29sSXRlbT4gQ3JlYXRlZCBCeSA8L0NvbEl0ZW0+XG4gICAgICAgICAgICAgIDxDb2xJdGVtPiBUaXRsZSA8L0NvbEl0ZW0+XG4gICAgICAgICAgICAgIDxDb2xJdGVtPiBDb21tZW50cyA8L0NvbEl0ZW0+XG4gICAgICAgICAgICA8L0NvbEhlYWRlcj5cbiAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN1YnRvcGljcy5tYXAoKHN1YnRvcGljKSA9PiAoXG4gICAgICAgICAgICAgIDxTdWJUb3BpY3NJdGVtXG4gICAgICAgICAgICAgICAga2V5PXtzdWJ0b3BpYy5pZH1cbiAgICAgICAgICAgICAgICB7Li4uc3VidG9waWN9XG4gICAgICAgICAgICAgICAgc3VidG9waWM9e3N1YnRvcGljfVxuICAgICAgICAgICAgICAgIHRvcGljSWQ9e3RvcGljSWR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKVxuICAgICAgICAgIH1cbiAgICAgICAgPC9UYWJsZT5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN1YlRvcGljc1RhYmxlXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWAgXG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDkwJTtcbiAgYm94LXNoYWRvdzogMCAwIDQwcHggLTEwcHggcmdiYSgwLCAwLCAwLCAuNCk7XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgfVxuXG5gXG5cbmV4cG9ydCBjb25zdCBUYWJsZUhlYWRlciA9IHN0eWxlZCgnaGVhZGVyJylgIFxuICAgIGhlaWdodDogMTB2aDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLW0tcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yKSwgIzgzYWY5Yik7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC8qIGJvcmRlci1yYWRpdXM6IDEycHggMTJweCAwIDA7ICovXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvKiBib3JkZXItcmFkaXVzOiAxMnB4OyAqL1xuICAgIGgxIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB6LWluZGV4OiAyO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgXG4gICAgICBzcGFuIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgICBcbiAgICAgIHNwYW46Zmlyc3QtY2hpbGQge1xuICAgICAgICBmb250LXNpemU6IDEuNXZ3O1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogNi41cHg7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgICBmb250LXNpemU6IDMuNXZ3O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIHNwYW46bGFzdC1jaGlsZCB7XG4gICAgICAgIGZvbnQtc2l6ZTogLjh2dztcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDMuNTVweDtcbiAgICAgICAgb3BhY2l0eTogLjg1O1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgICBmb250LXNpemU6IDMuM3Z3O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIC5sZWFkZXJib2FyZF9faWNvbiB7XG4gICAgICBmaWxsOiAjZmZmO1xuICAgICAgb3BhY2l0eTogLjM1O1xuICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIH1cbmBcblxuZXhwb3J0IGNvbnN0IFRhYmxlID0gc3R5bGVkKCd0YWJsZScpYCBcbiAgYm9yZGVyLXJhZGl1czogMCAwIDEycHggMTJweDtcbiAgcGFkZGluZzogMTVweCAxNXB4IDIwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHJvdy1nYXA6IDhweDtcbiAgd2lkdGg6IDEwMCU7XG4gIFxuYFxuXG5leHBvcnQgY29uc3QgQ29sSGVhZGVyID0gc3R5bGVkKCd0cicpYFxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4IDMwcHggMTBweCAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1hY2NlbnQpO1xuICBib3JkZXItcmFkaXVzOiAuNXZ3O1xuXG5gXG5cbmV4cG9ydCBjb25zdCBDb2xJdGVtID0gc3R5bGVkKCd0aCcpYFxuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogLjF2dztcbiAgZm9udC1zaXplOiAxdnc7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICBmb250LXNpemU6IDJ2dztcbiAgfVxuXG5gXG5cbmV4cG9ydCBjb25zdCBSb3cgPSBzdHlsZWQoJ3RyJylgIFxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHggMzBweCAxMHB4IDEwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXItcmFkaXVzOiAuNXZ3O1xuICAgIGJveC1zaGFkb3c6IDAgNXB4IDdweCAtMXB4IHJnYmEoNTEsIDUxLCA1MSwgMC4yMyk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMjVzIGN1YmljLWJlemllciguNywuOTgsLjg2LC45OCksIGJveC1zaGFkb3cgLjI1cyBjdWJpYy1iZXppZXIoLjcsLjk4LC44NiwuOTgpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgei1pbmRleDogOTk5OTk5OTk5O1xuICAgIFxuICAgICY6aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgYm94LXNoYWRvdzogMCA5cHggNDdweCAxMXB4IHJnYmEoNTEsIDUxLCA1MSwgMC4xOCk7XG4gICAgfVxuICBcbiAgXG5gXG5cbmV4cG9ydCBjb25zdCBSb3dJdGVtID0gc3R5bGVkKCd0ZCcpYCBcbiAgLyogb3BhY2l0eTogLjg7ICovXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjOTc5Y2IwO1xuICBmb250LXdlaWdodDogNjAwO1xuICBcbiAgbGV0dGVyLXNwYWNpbmc6IC4xdnc7ICAgIFxuXG4gIGZvbnQtc2l6ZTogMXZ3O1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgZm9udC1zaXplOiAydnc7XG4gIH1cblxuICBpbWcge1xuICAgIHdpZHRoOiAydnc7XG4gICAgaGVpZ2h0OiAydnc7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgd2lkdGg6IDR2dztcbiAgICAgIGhlaWdodDogNHZ3O1xuICAgIH1cbiAgfVxuYFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHVzZUdvVG9Db21tZW50VGhyZWFkIGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2hvb2tzL3JvdXRpbmcvdXNlR29Ub0NvbW1lbnRUaHJlYWQnXG5cbmltcG9ydCB7IFJvdywgUm93SXRlbSB9IGZyb20gJy4uL1N0eWxlL2luZGV4J1xuXG5jb25zdCBTdWJUb3BpY3NJdGVtID0gKHtcbiAgaWQsIHRpdGxlLCBjcmVhdGVkQnksIGFsbENvbW1lbnRzLCB0b3BpY0lkLCBjcmVhdGVkQnlJY29uU3JjLFxufSkgPT4ge1xuICBjb25zdCBnb1RvQ29tbWVudFRocmVhZCA9IHVzZUdvVG9Db21tZW50VGhyZWFkKHRvcGljSWQsIGlkKVxuICByZXR1cm4gKFxuICAgIDx0Ym9keT5cbiAgICAgIDxSb3cgb25DbGljaz17Z29Ub0NvbW1lbnRUaHJlYWR9PlxuICAgICAgICA8Um93SXRlbT5cbiAgICAgICAgICB7JyAnfVxuICAgICAgICAgIDxpbWcgc3JjPXtjcmVhdGVkQnlJY29uU3JjIHx8ICdodHRwczovL2NpdmlsLWRldi5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9wcm9maWxlX2ltZ18xLnBuZyd9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgeycgJ31cbiAgICAgICAgICB7YCR7Y3JlYXRlZEJ5LnN1YnN0cmluZygwLCAxMil9Li4uYH1cbiAgICAgICAgPC9Sb3dJdGVtPlxuICAgICAgICA8Um93SXRlbT57dGl0bGV9PC9Sb3dJdGVtPlxuICAgICAgICA8Um93SXRlbT57YWxsQ29tbWVudHN9PC9Sb3dJdGVtPlxuICAgICAgPC9Sb3c+XG4gICAgPC90Ym9keT5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdWJUb3BpY3NJdGVtXG4iLCJpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5jb25zdCBzZW50aW1lbnRzID0gbmV3IFNldChbJ1BPU0lUSVZFJywgJ05FVVRSQUwnLCAnTkVHQVRJVkUnXSlcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCBjb21tZW50cyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY29tbWVudHMubGlzdClcbiAgcmV0dXJuIHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IGNhdGVnb3JpemVkQ29tbWVudHMgPSB7XG4gICAgICBQT1NJVElWRTogW10sXG4gICAgICBORVVUUkFMOiBbXSxcbiAgICAgIE5FR0FUSVZFOiBbXSxcbiAgICAgIGFsbDogY29tbWVudHMsXG4gICAgfVxuICAgIGNvbW1lbnRzLmZvckVhY2goKGNvbW1lbnQpID0+IHtcbiAgICAgIGlmIChzZW50aW1lbnRzLmhhcyhjb21tZW50LmRhdGE/LnNlbnRpbWVudCkpIHtcbiAgICAgICAgY2F0ZWdvcml6ZWRDb21tZW50c1tjb21tZW50LmRhdGE/LnNlbnRpbWVudF0ucHVzaChjb21tZW50KVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGNhdGVnb3JpemVkQ29tbWVudHNcbiAgfSwgW2NvbW1lbnRzXSlcbn1cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmV4cG9ydCBkZWZhdWx0IChpZCkgPT4ge1xuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKClcbiAgcmV0dXJuIHVzZUNhbGxiYWNrKCgpID0+IG5hdmlnYXRlKGlkKSwgW2lkXSlcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgVXNlckluZm9ybWF0aW9uRGlzcGxheSBmcm9tICcuLi8uLi8uLi9Vc2VySW5mb3JtYXRpb25EaXNwbGF5L0luZGV4J1xuaW1wb3J0IHtcbiAgTWlkZGxlLCBMZWZ0LCBSaWdodCwgSG9tZVBhZ2VHcmlkLFxufSBmcm9tICcuLi8uLi9TdHlsZSdcbmltcG9ydCBOb3RpZmljYXRpb25JdGVtIGZyb20gJy4vY29tcG9uZW50cy9Ob3RpZmljYXRpb25JdGVtL0luZGV4J1xuaW1wb3J0IHtcbiAgQm9yZGVyQ29udGFpbmVyLCBOb3RpZmljYXRpb25MaXN0LCBDb250YWluZXIsIEhlYWRlcixcbn0gZnJvbSAnLi9TdHlsZSdcblxuY29uc3QgVHJpYnVuYWxOb3RpZmljYXRpb25zID0gKCkgPT4ge1xuICBjb25zdCBub3RpZmljYXRpb25zID0gdXNlU2VsZWN0b3IoKHMpID0+IHMubm90aWZpY2F0aW9ucy50cmlidW5hbE5vdGlmaWNhdGlvbnNMaXN0KVxuICByZXR1cm4gKFxuICAgIDxIb21lUGFnZUdyaWQ+XG4gICAgICA8TGVmdD5cbiAgICAgICAgPFVzZXJJbmZvcm1hdGlvbkRpc3BsYXkgLz5cbiAgICAgIDwvTGVmdD5cbiAgICAgIDxNaWRkbGU+XG5cbiAgICAgICAgPENvbnRhaW5lciBpZD1cIm5vdGlmaWNhdGlvbnMtY29udGFpbmVyXCI+XG5cbiAgICAgICAgICA8Qm9yZGVyQ29udGFpbmVyPlxuICAgICAgICAgICAgPEhlYWRlcj5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgUmVjZW50IE5vdGlmaWNhdGlvbnNcbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9IZWFkZXI+XG4gICAgICAgICAgICA8Tm90aWZpY2F0aW9uTGlzdD5cbiAgICAgICAgICAgICAge25vdGlmaWNhdGlvbnMubWFwKChub3RpZmljYXRpb24pID0+IChcbiAgICAgICAgICAgICAgICA8Tm90aWZpY2F0aW9uSXRlbSBrZXk9e25vdGlmaWNhdGlvbi5pZH0gbm90aWZpY2F0aW9uPXtub3RpZmljYXRpb259IC8+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9Ob3RpZmljYXRpb25MaXN0PlxuICAgICAgICAgIDwvQm9yZGVyQ29udGFpbmVyPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvTWlkZGxlPlxuICAgICAgPFJpZ2h0PlxuICAgICAgICA8c3Bhbj4uPC9zcGFuPlxuICAgICAgPC9SaWdodD5cbiAgICA8L0hvbWVQYWdlR3JpZD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmlidW5hbE5vdGlmaWNhdGlvbnNcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBCb3JkZXJDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpYFxuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICBib3JkZXItdG9wOiBub25lO1xuICB6LWluZGV4OiA5OTk5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLW5hdi1zaXplKSk7XG5cbmBcblxuZXhwb3J0IGNvbnN0IE5vdGlmaWNhdGlvbkxpc3QgPSBzdHlsZWQoJ3VsJylgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgcGFkZGluZzogMDtcbiAgcGFkZGluZy1ib3R0b206IDMwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMEYyRjU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXG5gXG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbmBcblxuZXhwb3J0IGNvbnN0IEhlYWRlciA9IHN0eWxlZCgnaGVhZGVyJylgIFxuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XG4gIHBhZGRpbmc6IDJ2dyAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBwIHtcbiAgICBtYXJnaW46IDAgMXZ3O1xuICAgIGZvbnQtc2l6ZTogMS4xdnc7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5gXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIFZlcnRpY2FsTWVudURvdHNTdmcsIERlbGV0ZVN2ZywgUmVhZFN2Zyxcbn0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc3Zncy9zdmdzJ1xuaW1wb3J0IG5vdGlmaWNhdGlvbkFjdGlvbkNyZWF0b3JzIGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvbm90aWZpY2F0aW9ucy9pbmRleCdcbmltcG9ydCB1c2VCaW5kRGlzcGF0Y2ggZnJvbSAnLi4vLi4vLi4vLi4vLi4vaG9va3MvcmVkdXgvdXNlQmluZERpc3BhdGNoJ1xuaW1wb3J0IHtcbiAgTWVudVRpbWVDb250YWluZXIsIFRpbWUsIE1lbnVJY29uQ29udGFpbmVyLCBBY3Rpb25NZW51LCBBY3Rpb25NZW51SXRlbSxcbn0gZnJvbSAnLi9TdHlsZS9pbmRleCdcblxuZXhwb3J0IGNvbnN0IE1lbnVUaW1lID0gKHsgdGltZSwgaWQsIGV2ZW50VHlwZSB9KSA9PiB7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3Qge1xuICAgIHVwZGF0ZU5vdGlmaWNhdGlvblRvUmVhZCxcbiAgICBkZWxldGVOb3RpZmljYXRpb24sXG4gIH0gPSB1c2VCaW5kRGlzcGF0Y2gobm90aWZpY2F0aW9uQWN0aW9uQ3JlYXRvcnMpXG5cbiAgcmV0dXJuIChcbiAgICA8TWVudVRpbWVDb250YWluZXI+XG4gICAgICA8TWVudUljb25Db250YWluZXIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICBzZXRJc09wZW4oKHByZXYpID0+ICFwcmV2KVxuICAgICAgICBjb25zdCBldmVudExpc3RlbmVyID0gKCkgPT4ge1xuICAgICAgICAgIHNldElzT3BlbigocHJldikgPT4gIXByZXYpXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGlmaWNhdGlvbnMtY29udGFpbmVyJykucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudExpc3RlbmVyKVxuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGlmaWNhdGlvbnMtY29udGFpbmVyJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudExpc3RlbmVyKVxuICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPFZlcnRpY2FsTWVudURvdHNTdmcgLz5cbiAgICAgICAgPEFjdGlvbk1lbnUgaXNPcGVuPXtpc09wZW59IG9uQ2xpY2s9eyhlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfT5cbiAgICAgICAgICA8QWN0aW9uTWVudUl0ZW0gb25DbGljaz17KCkgPT4gdXBkYXRlTm90aWZpY2F0aW9uVG9SZWFkKGV2ZW50VHlwZSwgaWQpfT5cbiAgICAgICAgICAgIDxSZWFkU3ZnIC8+XG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgTWFyayBBcyBSZWFkXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9BY3Rpb25NZW51SXRlbT5cbiAgICAgICAgICA8QWN0aW9uTWVudUl0ZW0gb25DbGljaz17KCkgPT4gZGVsZXRlTm90aWZpY2F0aW9uKGV2ZW50VHlwZSwgaWQpfT5cbiAgICAgICAgICAgIDxEZWxldGVTdmcgLz5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICBEZWxldGUgTm90aWZpY2F0aW9uXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9BY3Rpb25NZW51SXRlbT5cbiAgICAgICAgPC9BY3Rpb25NZW51PlxuICAgICAgPC9NZW51SWNvbkNvbnRhaW5lcj5cbiAgICAgIDxUaW1lPnt0aW1lfTwvVGltZT5cbiAgICA8L01lbnVUaW1lQ29udGFpbmVyPlxuICApXG59XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgTWVudVRpbWVDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpYCBcbiAgei1pbmRleDogOTk5OTk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIHBhZGRpbmc6IDVweCAwO1xuICB3aWR0aDogOCU7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgbGlnaHRncmF5O1xuICBib3JkZXItY29sb3I6IHJnYmEoMjAwLDIwMCwyMDAsMC4yNSk7XG5cbmBcblxuZXhwb3J0IGNvbnN0IFRpbWUgPSBzdHlsZWQoJ3NwYW4nKWBcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtc2l6ZTogMXZ3O1xuICBwYWRkaW5nOiAwIDEwcHg7XG5gXG5leHBvcnQgY29uc3QgTWVudUljb25Db250YWluZXIgPSBzdHlsZWQoJ2RpdicpYCBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IC4xdnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogIzJjZGQ5YjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZjdmMDtcbiAgYm9yZGVyLWNvbG9yOiAjZDhmN2ViO1xuICB0cmFuc2l0aW9uOiBhbGwgMXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgOmhvdmVyIHtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC44NSk7XG4gIH1cblxuYFxuXG5leHBvcnQgY29uc3QgQWN0aW9uTWVudSA9IHN0eWxlZCgndWwnKWBcbiAgei1pbmRleDogOTk5OTk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlcjogLjVweCBzb2xpZCBsaWdodGdyYXk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyMDAsMjAwLDIwMCwwLjI1KSA7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01NSUsIDU1JSkgO1xuICBkaXNwbGF5OiAkeyhwcm9wcykgPT4gKHByb3BzLmlzT3BlbiA/ICdibG9jaycgOiAnbm9uZScpfSA7XG4gIHdpZHRoOiAxMHZ3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCByZ2IoNjAgNjAgNjAgLyAxMCUpO1xuICBib3JkZXItcmFkaXVzOiAgLjVlbTtcbiAgbWFyZ2luOiAwO1xuXG5gXG5cbmV4cG9ydCBjb25zdCBBY3Rpb25NZW51SXRlbSA9IHN0eWxlZCgnbGknKWBcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiBibGFjaztcbiAgdHJhbnNpdGlvbjogbm9uZTtcbiAgOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tLWJ0bi1ob3Zlci1jb2xvcik7XG5cbiAgfVxuXG4gIHNwYW4ge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAuNjV2dyAhaW1wb3J0YW50O1xuICB9XG5cbmBcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFRyaWJ1bmFsU2VsZWN0aW9uLCBVc2VyQ29udGVudFJlcG9ydGVkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vZW51bXMvbm90aWZpY2F0aW9uX3R5cGVzJ1xuaW1wb3J0IFRyaWJ1bmFsU2VsZWN0aW9uTm90aWZpY2F0aW9uIGZyb20gJy4uL1RyaWJ1bmFsU2VsZWN0aW9uTm90aWZpY2F0aW9uL0luZGV4J1xuaW1wb3J0IFVzZXJDb250ZW50UmVwb3J0ZWROb3RpZmljYXRpb24gZnJvbSAnLi4vVXNlckNvbnRlbnRSZXBvcnRlZE5vdGlmaWNhdGlvbi9JbmRleCdcbmltcG9ydCB7XG4gIEl0ZW0sXG59IGZyb20gJy4vU3R5bGUnXG5cbmNvbnN0IE5vdGlmaWNhdGlvbkl0ZW0gPSAoeyBub3RpZmljYXRpb24gfSkgPT4ge1xuICBsZXQgSXRlbUNvbXBvbmVudFxuICBzd2l0Y2ggKG5vdGlmaWNhdGlvbi5ldmVudFR5cGUpIHtcbiAgICBjYXNlIFRyaWJ1bmFsU2VsZWN0aW9uOlxuICAgICAgSXRlbUNvbXBvbmVudCA9IFRyaWJ1bmFsU2VsZWN0aW9uTm90aWZpY2F0aW9uXG4gICAgICBicmVha1xuICAgIGNhc2UgVXNlckNvbnRlbnRSZXBvcnRlZDpcbiAgICAgIEl0ZW1Db21wb25lbnQgPSBVc2VyQ29udGVudFJlcG9ydGVkTm90aWZpY2F0aW9uXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICBicmVha1xuICB9XG4gIHJldHVybiAoXG4gICAgPEl0ZW0+XG4gICAgICA8SXRlbUNvbXBvbmVudCBub3RpZmljYXRpb249e25vdGlmaWNhdGlvbn0gLz5cbiAgICA8L0l0ZW0+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTm90aWZpY2F0aW9uSXRlbVxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IEl0ZW0gPSBzdHlsZWQoJ2xpJylgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE1dmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAvKiBjdXJzb3I6IHBvaW50ZXI7ICovXG4gIHBhZGRpbmctcmlnaHQ6IC41dnc7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICA6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGOEY5RkE7XG4gIH1cbmBcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBMZWZ0Q29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWBcbiAgd2lkdGg6IDIyJTtcbiAgaGVpZ2h0OiAxMDAlIDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaW1nIHtcbiAgICBoZWlnaHQ6IDV2aDtcbiAgfVxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyMDAsMjAwLDIwMCwwLjI1KTtcbiAgOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyO1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBSaWdodENvbnRhaW5lciA9IHN0eWxlZCgnZGl2JylgXG4gIHdpZHRoOiAyMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGltZyB7XG4gICAgaGVpZ2h0OiA1dmg7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IE1pZGRsZUNvbnRhaW5lciA9IHN0eWxlZCgnZGl2JylgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGltZyB7XG4gICAgaGVpZ2h0OiAzdmg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogOHB4O1xuICB9XG4gIHN2ZyB7XG4gICAgaGVpZ2h0OiAzdmg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogOHB4O1xuICB9XG4gIGgzIHtcbiAgICBmb250LXNpemU6IC45dnc7XG4gIH1cbiAgYSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IHZhcigtLW0tcHJpbWFyeS1idG4tY29sb3IpO1xuICAgIDpob3ZlciB7XG4gICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC44NSk7XG4gICAgfVxuICB9XG5gXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IE1lbnVUaW1lIH0gZnJvbSAnLi4vTWVudVRpbWUvSW5kZXgnXG5pbXBvcnQgeyBnZXRUaW1lU2luY2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9nZW5lcmljL3N0cmluZy9kYXRlRm9ybWF0dGVyJ1xuaW1wb3J0IHsgTWlkZGxlQ29udGFpbmVyIH0gZnJvbSAnLi4vU3R5bGUnXG5cbmltcG9ydCB7IFRyaWJ1bmFsU2VsZWN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vZW51bXMvbm90aWZpY2F0aW9uX3R5cGVzJ1xuaW1wb3J0IHsgR2F2ZWwyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc3Zncy9zdmdzJ1xuXG5jb25zdCBUcmlidW5hbFNlbGVjdGlvbk5vdGlmaWNhdGlvbiA9ICh7IG5vdGlmaWNhdGlvbiB9KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBjcmVhdGVkQXQsIGlkLCBjb250ZW50VHlwZSwgcmVwb3J0ZWRDb250ZW50SWQsXG4gIH0gPSBub3RpZmljYXRpb25cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE1pZGRsZUNvbnRhaW5lcj5cbiAgICAgICAgPEdhdmVsMiBzaXplPVwiNXZoXCIgLz5cbiAgICAgICAgPGgzPlxuICAgICAgICAgIFlvdSBoYXZlIGJlZW4gc2VsZWN0ZWQgZm9yXG4gICAgICAgICAgeycgJ31cbiAgICAgICAgICA8TGluayB0bz17YC90cmlidW5hbC8ke2NvbnRlbnRUeXBlfS8ke3JlcG9ydGVkQ29udGVudElkfWB9PlxuICAgICAgICAgICAgQ29tbWVudCFcbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvaDM+XG5cbiAgICAgIDwvTWlkZGxlQ29udGFpbmVyPlxuICAgICAgPE1lbnVUaW1lXG4gICAgICAgIHRpbWU9e2dldFRpbWVTaW5jZShjcmVhdGVkQXQpfVxuICAgICAgICBpZD17aWR9XG4gICAgICAgIGV2ZW50VHlwZT17VHJpYnVuYWxTZWxlY3Rpb259XG4gICAgICAvPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyaWJ1bmFsU2VsZWN0aW9uTm90aWZpY2F0aW9uXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IE1lbnVUaW1lIH0gZnJvbSAnLi4vTWVudVRpbWUvSW5kZXgnXG5pbXBvcnQgeyBnZXRUaW1lU2luY2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9nZW5lcmljL3N0cmluZy9kYXRlRm9ybWF0dGVyJ1xuaW1wb3J0IHsgTWlkZGxlQ29udGFpbmVyIH0gZnJvbSAnLi4vU3R5bGUnXG5cbmltcG9ydCB7IFVzZXJDb250ZW50UmVwb3J0ZWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9lbnVtcy9ub3RpZmljYXRpb25fdHlwZXMnXG5pbXBvcnQgeyBHYXZlbDIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9zdmdzL3N2Z3MnXG5cbmNvbnN0IFVzZXJDb250ZW50UmVwb3J0ZWROb3RpZmljYXRpb24gPSAoeyBub3RpZmljYXRpb24gfSkgPT4ge1xuICBjb25zdCB7XG4gICAgY3JlYXRlZEF0LCBpZCwgY29udGVudFR5cGUsIHJlcG9ydGVkQ29udGVudElkLFxuICB9ID0gbm90aWZpY2F0aW9uXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxNaWRkbGVDb250YWluZXI+XG4gICAgICAgIDxHYXZlbDIgc2l6ZT1cIjV2aFwiIC8+XG4gICAgICAgIDxoMz5cbiAgICAgICAgICBZb3VyXG4gICAgICAgICAgeycgJ31cbiAgICAgICAgICA8TGluayB0bz17YC90cmlidW5hbC8ke2NvbnRlbnRUeXBlfS8ke3JlcG9ydGVkQ29udGVudElkfWB9PlxuICAgICAgICAgICAgQ29udGVudFxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICB7JyAnfVxuICAgICAgICAgIEhhcyBCZWVuIFJlcG9ydGVkIEFuZCBJcyBTdWJqZWN0IFRvIENvbW11bml0eSBUcmlidW5hbCBSZXZpZXchXG4gICAgICAgICAgeycgJ31cbiAgICAgICAgICB7J1xcbid9XG4gICAgICAgICAgPExpbmsgdG89e2AvdHJpYnVuYWwvJHtjb250ZW50VHlwZX0vJHtyZXBvcnRlZENvbnRlbnRJZH1gfT5cbiAgICAgICAgICAgIENsaWNrIFRvIERlZmVuZCBZb3Vyc2VsZiFcbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvaDM+XG4gICAgICA8L01pZGRsZUNvbnRhaW5lcj5cbiAgICAgIDxNZW51VGltZVxuICAgICAgICB0aW1lPXtnZXRUaW1lU2luY2UoY3JlYXRlZEF0KX1cbiAgICAgICAgaWQ9e2lkfVxuICAgICAgICBldmVudFR5cGU9e1VzZXJDb250ZW50UmVwb3J0ZWR9XG4gICAgICAvPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJDb250ZW50UmVwb3J0ZWROb3RpZmljYXRpb25cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWNJdGVtIGZyb20gJy4vY29tcG9uZW50cy9SZWNJdGVtL0luZGV4J1xuXG5pbXBvcnQgeyBSZWNMaXN0Q29udGFpbmVyIH0gZnJvbSAnLi9TdHlsZSdcblxuY29uc3QgUmVjb21tZW5kYXRpb25zTGlzdCA9ICh7IHJlY3MgfSkgPT4gKFxuICA8UmVjTGlzdENvbnRhaW5lcj5cbiAgICB7XG4gICAgICAgIHJlY3MubWFwKChyZWMsIGlkeCkgPT4gPFJlY0l0ZW0ga2V5PXtTdHJpbmcoaWR4KX0gcmVjPXtyZWN9IC8+KVxuICAgICAgfVxuICA8L1JlY0xpc3RDb250YWluZXI+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IFJlY29tbWVuZGF0aW9uc0xpc3RcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBSZWNMaXN0Q29udGFpbmVyID0gc3R5bGVkKCd1bCcpYFxuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG5gXG4iLCJpbXBvcnQgUmVhY3QsIHsgbWVtbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHVzZUdldExpbmtNZXRhRGF0YUVmZmVjdCBmcm9tICcuLi8uLi8uLi9Ub3BpY0Zvcm0vY29tcG9uZW50cy9MaW5rTWV0YURhdGEvaG9va3MvdXNlR2V0TGlua01ldGFEYXRhRWZmZWN0J1xuaW1wb3J0IHVzZU5hdmlnYXRlVG9QYWdlIGZyb20gJy4vaG9va3MvdXNlTmF2aWdhdGVUb1BhZ2UnXG5cbmltcG9ydCB7XG4gIENvbnRhaW5lciwgVGh1bWIsIERlc2NyaXB0aW9uQ29udGFpbmVyLCBUaXRsZSwgU3ViVGl0bGUsIE9HSW1hZ2UsXG59IGZyb20gJy4vU3R5bGUvaW5kZXgnXG5cbmNvbnN0IFJlY0l0ZW0gPSAoeyByZWMgfSkgPT4ge1xuICBsZXQgY29udGVudCA9IG51bGxcbiAgY29uc3QgeyB0b3BpYywgc3ViVG9waWMgfSA9IHJlY1xuICBjb25zdCBtZXRhRGF0YSA9IHVzZUdldExpbmtNZXRhRGF0YUVmZmVjdCh7IGNvbnRlbnRVcmw6IHJlYy5leHRlcm5hbFJlY29tbWVuZGVkQ29udGVudCB9KVxuICBjb25zdCBuYXZpZ2F0ZVRvUGFnZSA9IHVzZU5hdmlnYXRlVG9QYWdlKHJlYylcbiAgaWYgKHRvcGljKSB7XG4gICAgaWYgKHRvcGljPy55dFVybCkge1xuICAgICAgY29uc3QgcmVnRXhwID0gL14uKih5b3V0dVxcLmJlXFwvfHZcXC98dVxcL1xcd1xcL3xlbWJlZFxcL3x3YXRjaFxcP3Y9fFxcJnY9KShbXiNcXCZcXD9dKikuKi9cbiAgICAgIGNvbnN0IG1hdGNoID0gdG9waWMueXRVcmwubWF0Y2gocmVnRXhwKVxuICAgICAgaWYgKG1hdGNoICYmIG1hdGNoWzJdLmxlbmd0aCA9PT0gMTEpIHtcbiAgICAgICAgY29udGVudCA9IDxpbWcgc3JjPXtgaHR0cDovL2ltZy55b3V0dWJlLmNvbS92aS8ke21hdGNoWzJdfS9zZGRlZmF1bHQuanBnYH0gYWx0PVwiTm8gVGh1bWJcIiAvPlxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIXRvcGljPy55dFVybCAmJiB0b3BpYz8uY29udGVudFVybCkge1xuICAgICAgY29udGVudCA9IDxpbWcgc3JjPXt0b3BpYy50aHVtYkltZ1VybH0gYWx0PVwiTm8gVGh1bWJcIiAvPlxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBjb250ZW50ID0gPGltZyBzcmM9XCIuL2ltYWdlLnBuZ1wiIGFsdD1cIk5vIFRodW1iXCIgLz5cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBvbkNsaWNrPXtuYXZpZ2F0ZVRvUGFnZX0+XG4gICAgICA8VGh1bWI+XG4gICAgICAgIHtjb250ZW50fVxuICAgICAgICB7bWV0YURhdGEgJiYgPE9HSW1hZ2Ugc3JjPXttZXRhRGF0YS5vZ0ltYWdlPy51cmx9IGFsdD1cIlwiIC8+fVxuICAgICAgPC9UaHVtYj5cbiAgICAgIDxEZXNjcmlwdGlvbkNvbnRhaW5lcj5cbiAgICAgICAgPFRpdGxlPlxuICAgICAgICAgIHsgcmVjLnRvcGljID8gcmVjLnRvcGljLnRpdGxlIDogcmVjLnN1YlRvcGljPy50aXRsZX1cbiAgICAgICAgICB7bWV0YURhdGEgJiYgbWV0YURhdGEub2dUaXRsZX1cbiAgICAgICAgPC9UaXRsZT5cbiAgICAgICAgey8qIDxMaW5lIC8+ICovfVxuICAgICAgICA8U3ViVGl0bGU+XG4gICAgICAgICAgeyByZWMudG9waWM/LmNyZWF0ZWRCeSB8fCByZWMuc3ViVG9waWM/LmNyZWF0ZWRCeX1cbiAgICAgICAgICB7bWV0YURhdGEgJiYgbWV0YURhdGE/Lm9nRGVzY3JpcHRpb259XG4gICAgICAgIDwvU3ViVGl0bGU+XG4gICAgICA8L0Rlc2NyaXB0aW9uQ29udGFpbmVyPlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW8oUmVjSXRlbSlcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQoJ2xpJylgXG4gIHdpZHRoOiA5NSU7XG4gIGhlaWdodDogMTd2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIFxuYFxuXG5leHBvcnQgY29uc3QgVGh1bWIgPSBzdHlsZWQoJ2RpdicpYFxuICBoZWlnaHQ6IDEwMCU7XG4gIGZsZXg6IDQwJTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBhc3BlY3QtcmF0aW86IDEyIC8gMTI7XG4gIGltZyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBEZXNjcmlwdGlvbkNvbnRhaW5lciA9IHN0eWxlZCgnZGl2JylgXG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogNjAlO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG5gXG5cbmV4cG9ydCBjb25zdCBUaXRsZSA9IHN0eWxlZCgnaDInKWBcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogMXZ3O1xuICBmb250LXdlaWdodDogYm9sZDtcblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgZm9udC1zaXplOiAzLjV2dztcbiAgfVxuXG5cbmBcblxuZXhwb3J0IGNvbnN0IFN1YlRpdGxlID0gc3R5bGVkKCdoMycpYFxuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtc2l6ZTogLjZ2dztcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIGZvbnQtc2l6ZTogM3Z3O1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBPR0ltYWdlID0gc3R5bGVkKCdpbWcnKWAgXG4gIGJvcmRlci1yYWRpdXM6IDF2dztcblxuYFxuXG5leHBvcnQgY29uc3QgT0dVcmwgPSBzdHlsZWQoJ3NwYW4nKWAgXG4gIGNvbG9yOiBncmF5O1xuICBmb250LXNpemU6IDF2dztcbmBcblxuZXhwb3J0IGNvbnN0IE9HVGl0bGUgPSBzdHlsZWQoJ2gzJylgXG4gZm9udC1zaXplOiAxdnc7XG4gbWFyZ2luOiAuNnZ3IDAgLjF2dyAwO1xuIGNvbG9yOiBncmF5O1xuIGZvbnQtd2VpZ2h0OiBib2xkO1xuYFxuXG5leHBvcnQgY29uc3QgT0dEZXNjcmlwdGlvbiA9IHN0eWxlZCgncCcpYCBcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtc2l6ZTogLjh2dztcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuIFxuYFxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuZXhwb3J0IGRlZmF1bHQgKHJlYykgPT4ge1xuICBjb25zdCB7IHRvcGljLCBzdWJUb3BpYyB9ID0gcmVjXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKVxuICByZXR1cm4gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmIChyZWMuZXh0ZXJuYWxSZWNvbW1lbmRlZENvbnRlbnQpIHtcbiAgICAgIHdpbmRvdy5vcGVuKHJlYy5leHRlcm5hbFJlY29tbWVuZGVkQ29udGVudCwgJ19ibGFuaycpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKHRvcGljKSBuYXZpZ2F0ZShgL3RvcGljcy8ke3RvcGljLmlkfS9zdWJ0b3BpY3MvYClcbiAgICBlbHNlIG5hdmlnYXRlKGAvdG9waWNzLyR7c3ViVG9waWMudG9waWNJZH0vc3VidG9waWNzLyR7c3ViVG9waWMuaWR9YClcbiAgfSwgW3JlY10pXG59XG4iLCJpbXBvcnQgUmVhY3QsIHtcbiAgbWVtbywgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSxcbn0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuaW1wb3J0IHtcbiAgT3V0ZXJDb250YWluZXIsIElubmVyQ29udGFpbmVyLFxuICBIZWFkZXIsIFN0eWxlZFNjYWxlc1N2ZywgUmVwb3J0U3RhdHNDb250YWluZXIsIFJlcG9ydFN0YXRJdGVtLFxuICBTdHlsZWRQaWxsYXJTdmcsIFRpbWVyLFxufSBmcm9tICcuL1N0eWxlL2luZGV4J1xuaW1wb3J0IFRvcGljSXRlbSBmcm9tICcuLi9Ub3BpY3MvY29tcG9uZW50cy9Ub3BpY0l0ZW0vSW5kZXgnXG5pbXBvcnQgdXNlQmluZERpc3BhdGNoIGZyb20gJy4uL2hvb2tzL3JlZHV4L3VzZUJpbmREaXNwYXRjaCdcblxuaW1wb3J0IHRvcGljQWN0aW9ucyBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zL3RvcGljcy9pbmRleCdcbmltcG9ydCByZXBvcnRBY3Rpb25zIGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMvcmVwb3J0cy9pbmRleCdcbmltcG9ydCB0cmlidW5hbENvbW1lbnRzQWN0aW9ucyBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zL3RyaWJ1bmFsX2NvbW1lbnRzL2luZGV4J1xuaW1wb3J0IGNvbW1lbnRBY3Rpb25zIGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMvY29tbWVudHMvaW5kZXgnXG5cbmltcG9ydCB7IGNhbGN1bGF0ZVRpbWVMZWZ0IH0gZnJvbSAnLi4vLi4vZ2VuZXJpYy90aW1lL2NhbGN1bGF0ZVRpbWVMZWZ0J1xuaW1wb3J0IFRyaWJ1bmFsQ29tbWVudHMgZnJvbSAnLi9jb21wb25lbnRzL1RyaWJ1bmFsQ29tbWVudHMvSW5kZXgnXG5pbXBvcnQgVm90aW5nQm94IGZyb20gJy4vY29tcG9uZW50cy9Wb3RpbmdCb3gvSW5kZXgnXG5cbmltcG9ydCBDb21tZW50IGZyb20gJy4uL01haW5Db250ZW50L2NvbXBvbmVudHMvU3ViVG9waWNzUGFnZS9jb21wb25lbnRzL0NvbW1lbnQvSW5kZXgnXG5pbXBvcnQgeyBDT01NRU5ULCBUT1BJQyB9IGZyb20gJy4uLy4uL2VudW1zL2NvbnRlbnRfdHlwZSdcblxuY29uc3QgVHJpYnVuYWwgPSAoKSA9PiB7XG4gIGNvbnN0IHsgY29udGVudElkLCBjb250ZW50VHlwZSB9ID0gdXNlUGFyYW1zKClcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKChzKSA9PiBzLnNlc3Npb24uY3VycmVudFVzZXIpXG4gIGNvbnN0IHRvcGljcyA9IHVzZVNlbGVjdG9yKChzKSA9PiBzLnRvcGljcy5saXN0KVxuICBjb25zdCBjb21tZW50cyA9IHVzZVNlbGVjdG9yKChzKSA9PiBzLmNvbW1lbnRzLmxpc3QpXG4gIGNvbnN0IHRyaWJ1bmFsQ29tbWVudHMgPSB1c2VTZWxlY3RvcigocykgPT4gcy50cmlidW5hbENvbW1lbnRzKVxuICBjb25zdCByZXBvcnRTdGF0cyA9IHVzZVNlbGVjdG9yKChzKSA9PiBzLnJlcG9ydHMpW2NvbnRlbnRJZF1cbiAgY29uc3QgW3RpbWVMZWZ0LCBzZXRUaW1lTGVmdF0gPSB1c2VTdGF0ZSh7fSlcblxuICBjb25zdCB7XG4gICAgZ2V0VG9waWMsXG4gICAgZ2V0UmVwb3J0LFxuICAgIGdldEFsbFRyaWJ1bmFsQ29tbWVudHNCYXRjaCxcbiAgICBnZXRDb21tZW50LFxuICB9ID0gdXNlQmluZERpc3BhdGNoKHRvcGljQWN0aW9ucywgcmVwb3J0QWN0aW9ucywgdHJpYnVuYWxDb21tZW50c0FjdGlvbnMsIGNvbW1lbnRBY3Rpb25zKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IHRpbWVyXG4gICAgaWYgKHJlcG9ydFN0YXRzKSB7XG4gICAgICB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgc2V0VGltZUxlZnQoY2FsY3VsYXRlVGltZUxlZnQocmVwb3J0U3RhdHMucmVwb3J0UGVyaW9kRW5kKSlcbiAgICAgIH0sIDEwMDApXG4gICAgfVxuICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZXIpXG4gIH0sIFtyZXBvcnRTdGF0c10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY29udGVudElkICYmIHVzZXIpIHtcbiAgICAgIGlmIChjb250ZW50VHlwZSA9PT0gQ09NTUVOVCkgZ2V0Q29tbWVudChjb250ZW50SWQpXG4gICAgICBpZiAoY29udGVudFR5cGUgPT09IFRPUElDKSBnZXRUb3BpYyhjb250ZW50SWQsIHVzZXIuaWQpXG4gICAgICBnZXRSZXBvcnQoY29udGVudElkKVxuICAgICAgZ2V0QWxsVHJpYnVuYWxDb21tZW50c0JhdGNoKGNvbnRlbnRJZClcbiAgICB9XG4gIH0sIFtjb250ZW50SWQsIHVzZXJdKVxuXG4gIGNvbnN0IHRpbWVyQ29tcG9uZW50cyA9IFtdXG5cbiAgT2JqZWN0LmtleXModGltZUxlZnQpLmZvckVhY2goKGludGVydmFsLCBpZHgpID0+IHtcbiAgICBpZiAoIXRpbWVMZWZ0W2ludGVydmFsXSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGltZXJDb21wb25lbnRzLnB1c2goXG4gICAgICA8c3BhbiBrZXk9e1N0cmluZyhgJHtpZHh9MGApfT5cbiAgICAgICAge3RpbWVMZWZ0W2ludGVydmFsXX1cbiAgICAgICAgeycgJ31cbiAgICAgICAge2ludGVydmFsfVxuICAgICAgICB7JyAnfVxuICAgICAgPC9zcGFuPixcbiAgICApXG4gIH0pXG5cbiAgY29uc3Qgdm90aW5nVGltZVVwID0gdGltZXJDb21wb25lbnRzLmxlbmd0aCA9PT0gMFxuXG4gIGNvbnN0IENvbnRlbnQgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCB0b3BpYyA9IHRvcGljcz8uZmluZCgodCkgPT4gdC5pZCA9PT0gY29udGVudElkKVxuICAgIGNvbnN0IGNvbW1lbnQgPSBjb21tZW50cz8uZmluZCgoYykgPT4gYy5kYXRhLmlkID09PSBjb250ZW50SWQpXG4gICAgaWYgKHRvcGljKSByZXR1cm4gPFRvcGljSXRlbSBrZXk9e3RvcGljLmlkfSB0b3BpYz17dG9waWN9IHVzZXI9e3VzZXJ9IC8+XG4gICAgaWYgKGNvbW1lbnQpIHJldHVybiA8Q29tbWVudCBjb21tZW50RGF0YT17Y29tbWVudC5kYXRhfSByZXBsaWVzPXtjb21tZW50LmNoaWxkcmVufSAvPlxuICAgIHJldHVybiBudWxsXG4gIH0sIFt0b3BpY3MsIGNvbW1lbnRzLCBjb250ZW50SWRdKVxuICByZXR1cm4gKFxuICAgIDxPdXRlckNvbnRhaW5lciBpZD1cInRyaWJ1bmFsLWNvbnRhaW5lclwiPlxuICAgICAgPEhlYWRlcj5cbiAgICAgICAgPFN0eWxlZFNjYWxlc1N2ZyAvPlxuICAgICAgICA8aDE+XG4gICAgICAgICAgQ29tbXVuaXR5IENvdXJ0XG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxTdHlsZWRTY2FsZXNTdmcgLz5cbiAgICAgIDwvSGVhZGVyPlxuICAgICAgPFRpbWVyPlxuICAgICAgICA8aDQ+XG4gICAgICAgICAgeyByZXBvcnRTdGF0cz8ucmVwb3J0UGVyaW9kRW5kID8gJ1ZvdGluZyBQZXJpb2QgVGltaW5nIFJlbWFpbmluZycgOiAnVm90aW5nIEhhcyBFbmRlZCcgfVxuICAgICAgICA8L2g0PlxuICAgICAgICB7J1xcbid9XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgeyghT2JqZWN0LmtleXModGltZUxlZnQpICYmIHJlcG9ydFN0YXRzKSA/IDxzcGFuPlRpbWUgSXMgVXAhPC9zcGFuPiA6IHRpbWVyQ29tcG9uZW50c31cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1RpbWVyPlxuICAgICAgPElubmVyQ29udGFpbmVyPlxuICAgICAgICA8U3R5bGVkUGlsbGFyU3ZnIC8+XG4gICAgICAgIHtDb250ZW50fVxuICAgICAgICA8U3R5bGVkUGlsbGFyU3ZnIC8+XG4gICAgICA8L0lubmVyQ29udGFpbmVyPlxuICAgICAge3JlcG9ydFN0YXRzICYmIChcbiAgICAgIDxWb3RpbmdCb3hcbiAgICAgICAgY29udGVudElkPXtjb250ZW50SWR9XG4gICAgICAgIHJlcG9ydFN0YXRzPXtyZXBvcnRTdGF0c31cbiAgICAgICAgdm90aW5nVGltZVVwPXt2b3RpbmdUaW1lVXB9XG4gICAgICAvPlxuICAgICAgKX1cbiAgICAgIDxSZXBvcnRTdGF0c0NvbnRhaW5lcj5cbiAgICAgICAgPFJlcG9ydFN0YXRJdGVtPlxuICAgICAgICAgIDxoMj5Ub3hpYyBSZXBvcnRzPC9oMj5cbiAgICAgICAgICB7cmVwb3J0U3RhdHMgJiYgKHJlcG9ydFN0YXRzLm51bVRveGljUmVwb3J0cyB8fCAwKX1cbiAgICAgICAgPC9SZXBvcnRTdGF0SXRlbT5cbiAgICAgICAgPFJlcG9ydFN0YXRJdGVtPlxuICAgICAgICAgIDxoMj5QZXJzb25hbCBBdHRhY2sgUmVwb3J0czwvaDI+XG4gICAgICAgICAge3JlcG9ydFN0YXRzICYmIChyZXBvcnRTdGF0cy5udW1QZXJzb25hbEF0dGFja1JlcG9ydHMgfHwgMCl9XG4gICAgICAgIDwvUmVwb3J0U3RhdEl0ZW0+XG4gICAgICAgIDxSZXBvcnRTdGF0SXRlbT5cbiAgICAgICAgICA8aDI+U3BhbSBSZXBvcnRzPC9oMj5cbiAgICAgICAgICB7cmVwb3J0U3RhdHMgJiYgKHJlcG9ydFN0YXRzLm51bVNwYW1SZXBvcnRzIHx8IDApfVxuICAgICAgICA8L1JlcG9ydFN0YXRJdGVtPlxuICAgICAgPC9SZXBvcnRTdGF0c0NvbnRhaW5lcj5cbiAgICAgIDxUcmlidW5hbENvbW1lbnRzIGNvbW1lbnRzPXt0cmlidW5hbENvbW1lbnRzfSAvPlxuICAgIDwvT3V0ZXJDb250YWluZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVtbyhUcmlidW5hbClcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBTY2FsZXNTdmcsIFBpbGxhclN2ZyB9IGZyb20gJy4uLy4uLy4uL3N2Z3Mvc3ZncydcblxuZXhwb3J0IGNvbnN0IE91dGVyQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctYm90dG9tOiA2MHZoO1xuYFxuXG5leHBvcnQgY29uc3QgSGVhZGVyID0gc3R5bGVkKCdoZWFkZXInKWBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiBjbGFtcCgzMHB4LCAxdncsIDEwMHB4KSAwIGNsYW1wKDMwcHgsIDF2dywgMTAwcHgpIDA7XG4gIGgxIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDJ2dztcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICBmb250LXNpemU6IDUuN3Z3O1xuICAgIH1cbiAgfVxuICBzdmcge1xuICAgIHdpZHRoOiA0dncgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDR2dyAhaW1wb3J0YW50O1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgIHdpZHRoOiAxMnZ3ICFpbXBvcnRhbnQ7XG4gICAgICBoZWlnaHQ6IDEydncgIWltcG9ydGFudDtcbiAgICB9XG4gICAgbWFyZ2luOiAwIDN2dztcbiAgfVxuYFxuZXhwb3J0IGNvbnN0IFN0eWxlZFNjYWxlc1N2ZyA9IHN0eWxlZChTY2FsZXNTdmcpYFxuICB3aWR0aDogNHZ3ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNHZ3ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCAxdnc7XG5gXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRQaWxsYXJTdmcgPSBzdHlsZWQoUGlsbGFyU3ZnKWBcbiAgZGlzcGxheTogYmxvY2s7XG5gXG5cbmV4cG9ydCBjb25zdCBJbm5lckNvbnRhaW5lciA9IHN0eWxlZCgnZGl2JylgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xuICB3aWR0aDogMTAwJTtcblxuYFxuXG5leHBvcnQgY29uc3QgVm90aW5nQ29udGFpbmVyID0gc3R5bGVkKCdzZWN0aW9uJylgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAxNHZ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCByZ2IoNjAgNjAgNjAgLyAxMCUpO1xuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMC41cHggc29saWQgbGlnaHRncmF5O1xuICBib3JkZXItY29sb3I6IHJnYmEoMjAwLCAyMDAsIDIwMCwgMC4yNSk7XG4gIG1hcmdpbjogY2xhbXAoMzBweCwgMXZ3LCAxMDBweCkgMCBjbGFtcCgzMHB4LCAxdncsIDEwMHB4KSAwO1xuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogMzB2dztcbiAgfVxuXG4gIHN2ZyB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgICAgd2lkdGg6IDl2dztcbiAgICAgIGhlaWdodDogOXZ3O1xuICAgIH1cbiAgfVxuXG4gIHNwYW4ge1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAgIGZvbnQtc2l6ZTogNHZ3O1xuICAgIH1cbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgUmVwb3J0U3RhdHNDb250YWluZXIgPSBzdHlsZWQoJ3VsJylgXG4gIGRpc3BsYXk6IGZsZXg7XG5gXG5cbmV4cG9ydCBjb25zdCBSZXBvcnRTdGF0SXRlbSA9IHN0eWxlZCgnbGknKWBcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbS1tZW51LWl0ZW0taG92ZXIpO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggcmdiKDYwIDYwIDYwIC8gMTAlKTtcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW0tc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3IpO1xuICBmb250LXNpemU6IDF2dztcbiAgcGFkZGluZzogMnZ3IDR2dztcbiAgbWFyZ2luOiAydncgNHZ3O1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgICBmb250LXNpemU6IDR2dztcbiAgICAgIG1hcmdpbjogMnZ3IDJ2dztcblxuICAgIH1cbmBcbmV4cG9ydCBjb25zdCBWb3Rlc0FnYWluc3QgPSBzdHlsZWQoJ2RpdicpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDEwJTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICBmb250LXNpemU6IDJ2dztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgIGZvbnQtc2l6ZTogNHZ3O1xuICB9XG4gIFxuYFxuXG5leHBvcnQgY29uc3QgVm90ZXNGb3IgPSBzdHlsZWQoJ2RpdicpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMCU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbiAgZm9udC1zaXplOiAydnc7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgIGZvbnQtc2l6ZTogNHZ3O1xuICB9XG5gXG5leHBvcnQgY29uc3QgVGltZXIgPSBzdHlsZWQoJ2RpdicpYFxuICBmb250LXNpemU6IDEuM3Z3OyBcbiAgY29sb3I6IGdyYXk7XG4gIG1hcmdpbjogMCAwIGNsYW1wKDMwcHgsIDF2dywgMTAwcHgpIDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICBmb250LXNpemU6IDR2dztcbiAgfVxuXG4gIGg0IHtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IE1pZGRsZVNlY3Rpb24gPSBzdHlsZWQoJ2RpdicpYFxuXG4gIHNwYW46Zmlyc3QtY2hpbGQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiByZWQ7XG4gIH1cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5gXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFRhYiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcblxuaW1wb3J0IHsgTGluZSB9IGZyb20gJy4uLy4uLy4uL0NvbW1vbkNvbXBvbmVudHMvTGluZSdcbmltcG9ydCBDb21tZW50Q29sdW1uIGZyb20gJy4uLy4uLy4uL01haW5Db250ZW50L2NvbXBvbmVudHMvU3ViVG9waWNzUGFnZS9jb21wb25lbnRzL0NvbW1lbnRDb2x1bW4vSW5kZXgnXG5pbXBvcnQgeyBDb2x1bW5Db250YWluZXIgfSBmcm9tICcuLi8uLi8uLi9NYWluQ29udGVudC9jb21wb25lbnRzL1N1YlRvcGljc1BhZ2UvY29tcG9uZW50cy9Db21tZW50VGhyZWFkL1N0eWxlJ1xuaW1wb3J0IHVzZUNhdGVnb3JpemVDb21tZW50cyBmcm9tICcuL2hvb2tzL3VzZUNhdGVnb3JpemVDb21tZW50cydcbmltcG9ydCB7IFN0eWxlZFRoZW1lVGFiIH0gZnJvbSAnLi9TdHlsZS9pbmRleCdcblxuY29uc3QgVHJpYnVuYWxDb21tZW50cyA9ICgpID0+IHtcbiAgY29uc3QgW2tleSwgc2V0S2V5XSA9IHVzZVN0YXRlKCdhbGwnKVxuICBjb25zdCBjb21tZW50cyA9IHVzZUNhdGVnb3JpemVDb21tZW50cygpXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxMaW5lIC8+XG4gICAgICA8U3R5bGVkVGhlbWVUYWJcbiAgICAgICAgYWN0aXZlS2V5PXtrZXl9XG4gICAgICAgIG9uU2VsZWN0PXsoaykgPT4gc2V0S2V5KGspfVxuICAgICAgPlxuICAgICAgICA8VGFiIGV2ZW50S2V5PVwiYWxsXCIgdGl0bGU9XCJBbGxcIj5cbiAgICAgICAgICA8Q29sdW1uQ29udGFpbmVyPlxuICAgICAgICAgICAgPENvbW1lbnRDb2x1bW4gbnVtQ29tbWVudHM9e2NvbW1lbnRzPy5hbGxDb21tZW50c30gY29tbWVudHM9e2NvbW1lbnRzLmFsbH0gY29tbWVudFNlbnRpbWVudD1cIkFsbFwiIGNvbG9yPVwidmFyKC0tbS1wcmltYXJ5LWJhY2tncm91bmQtY29sb3IpXCIgLz5cbiAgICAgICAgICA8L0NvbHVtbkNvbnRhaW5lcj5cbiAgICAgICAgPC9UYWI+XG4gICAgICAgIDxUYWIgZXZlbnRLZXk9XCJEZWZlbmRhbnRcIiB0aXRsZT1cIkRlZmVuZGFudFwiPlxuICAgICAgICAgIDxDb2x1bW5Db250YWluZXI+XG4gICAgICAgICAgICA8Q29tbWVudENvbHVtbiBudW1Db21tZW50cz17Y29tbWVudHM/LnBvc2l0aXZlQ29tbWVudHN9IGNvbW1lbnRzPXtjb21tZW50cy5EZWZlbmRhbnR9IGNvbW1lbnRTZW50aW1lbnQ9XCJEZWZlbmRhbnRcIiBjb2xvcj1cIiM2QTZFNzBcIiAvPlxuICAgICAgICAgIDwvQ29sdW1uQ29udGFpbmVyPlxuICAgICAgICA8L1RhYj5cbiAgICAgICAgPFRhYiBldmVudEtleT1cIlJlcG9ydGVyXCIgdGl0bGU9XCJSZXBvcnRlcnNcIj5cbiAgICAgICAgICA8Q29sdW1uQ29udGFpbmVyPlxuICAgICAgICAgICAgPENvbW1lbnRDb2x1bW4gY29tbWVudHM9e2NvbW1lbnRzLlJlcG9ydGVyfSBjb21tZW50U2VudGltZW50PVwiUmVwb3J0ZXJcIiBjb2xvcj1cIiM0NzRBNEZcIiAvPlxuICAgICAgICAgIDwvQ29sdW1uQ29udGFpbmVyPlxuICAgICAgICA8L1RhYj5cbiAgICAgICAgPFRhYiBldmVudEtleT1cIkp1cnlcIiB0aXRsZT1cIkp1cnlcIj5cbiAgICAgICAgICA8Q29sdW1uQ29udGFpbmVyPlxuICAgICAgICAgICAgPENvbW1lbnRDb2x1bW4gY29tbWVudHM9e2NvbW1lbnRzLkp1cnl9IGNvbW1lbnRTZW50aW1lbnQ9XCJKdXJ5XCIgY29sb3I9XCJ2YXIoLS1tLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcilcIiAvPlxuICAgICAgICAgIDwvQ29sdW1uQ29udGFpbmVyPlxuICAgICAgICA8L1RhYj5cbiAgICAgICAgPFRhYiBldmVudEtleT1cIkdlbmVyYWxcIiB0aXRsZT1cIkdlbmVyYWwgUHVibGljXCI+XG4gICAgICAgICAgPENvbHVtbkNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxDb21tZW50Q29sdW1uIGNvbW1lbnRzPXtjb21tZW50cy5HZW5lcmFsfSBjb21tZW50U2VudGltZW50PVwiR2VuZXJhbCBQdWJsaWNcIiBjb2xvcj1cInZhcigtLW0tcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yKVwiIC8+XG4gICAgICAgICAgPC9Db2x1bW5Db250YWluZXI+XG4gICAgICAgIDwvVGFiPlxuICAgICAgPC9TdHlsZWRUaGVtZVRhYj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmlidW5hbENvbW1lbnRzXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgVGhlbWVUYWJOZXcgfSBmcm9tICcuLi8uLi8uLi8uLi9Db21tb25Db21wb25lbnRzL1RhYnMvU3R5bGUnXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRUaGVtZVRhYiA9IHN0eWxlZChUaGVtZVRhYk5ldylgXG4gIC5uYXYtaXRlbSB7XG4gICAgbWFyZ2luOiAwIDAuM2VtIDAgMDtcbiAgfVxuYFxuIiwiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuY29uc3QgY29tbWVudFR5cGUgPSBuZXcgU2V0KFsnRGVmZW5kYW50JywgJ1JlcG9ydGVyJywgJ0p1cnknLCAnR2VuZXJhbCddKVxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IGNvbW1lbnRzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS50cmlidW5hbENvbW1lbnRzLmxpc3QpXG4gIHJldHVybiB1c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBjYXRlZ29yaXplZENvbW1lbnRzID0ge1xuICAgICAgRGVmZW5kYW50OiBbXSxcbiAgICAgIFJlcG9ydGVyOiBbXSxcbiAgICAgIEp1cnk6IFtdLFxuICAgICAgR2VuZXJhbDogW10sXG4gICAgICBhbGw6IGNvbW1lbnRzLFxuICAgIH1cbiAgICBjb21tZW50cy5mb3JFYWNoKChjb21tZW50KSA9PiB7XG4gICAgICBpZiAoY29tbWVudFR5cGUuaGFzKGNvbW1lbnQuZGF0YT8uY29tbWVudFR5cGUpKSB7XG4gICAgICAgIGNhdGVnb3JpemVkQ29tbWVudHNbY29tbWVudC5kYXRhPy5jb21tZW50VHlwZV0ucHVzaChjb21tZW50KVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGNhdGVnb3JpemVkQ29tbWVudHNcbiAgfSwgW2NvbW1lbnRzXSlcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBtZW1vLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBHYXZlbDIsIENhc3RCYWxsb3RTdmcgfSBmcm9tICcuLi8uLi8uLi8uLi9zdmdzL3N2Z3MnXG5pbXBvcnQgeyBUT1BJQ19WT1RFX0ZPUk0gfSBmcm9tICcuLi8uLi8uLi9BcHAvTW9kYWwvSW5kZXgnXG5pbXBvcnQgVGhlbWVCdXR0b24gZnJvbSAnLi4vLi4vLi4vQ29tbW9uQ29tcG9uZW50cy9CdXR0b24vSW5kZXgnXG5pbXBvcnQgdXNlT3Blbk1vZGFsIGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZU9wZW5Nb2RhbCdcbmltcG9ydCB7XG4gIFZvdGluZ0NvbnRhaW5lciwgVm90ZXNBZ2FpbnN0LCBWb3Rlc0ZvciwgTWlkZGxlU2VjdGlvbixcbn0gZnJvbSAnLi9TdHlsZSdcblxuY29uc3QgVm90aW5nQm94ID0gKHsgY29udGVudElkLCByZXBvcnRTdGF0cywgdm90aW5nVGltZVVwIH0pID0+IHtcbiAgY29uc3Qgb3Blbk1vZGFsID0gdXNlT3Blbk1vZGFsKFRPUElDX1ZPVEVfRk9STSwgeyBjb250ZW50SWQgfSlcblxuICBjb25zdCBoYXNBbHJlYWR5Vm90ZWQgPSB1c2VNZW1vKCgpID0+IChyZXBvcnRTdGF0cy52b3RlQWdhaW5zdCB8fCByZXBvcnRTdGF0cy52b3RlRm9yKSxcbiAgICBbcmVwb3J0U3RhdHMudm90ZUFnYWluc3QsIHJlcG9ydFN0YXRzLnZvdGVGb3JdKVxuXG4gIGNvbnN0IHZlcmRpY3QgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBpZiAocmVwb3J0U3RhdHMubnVtVm90ZXNGb3IgPiByZXBvcnRTdGF0cy5udW1Wb3Rlc0FnYWluc3QpIHJldHVybiAnVmlvbGF0aW9uJ1xuICAgIHJldHVybiAnTm8gVmlvbGF0aW9uJ1xuICB9LCBbcmVwb3J0U3RhdHMubnVtVm90ZXNBZ2FpbnN0LCByZXBvcnRTdGF0cy5udW1Wb3Rlc0Zvcl0pXG5cbiAgcmV0dXJuIChcbiAgICA8Vm90aW5nQ29udGFpbmVyPlxuICAgICAgPFZvdGVzRm9yPlxuICAgICAgICBWaW9sYXRpb24gVm90ZXNcbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAge3JlcG9ydFN0YXRzICYmIChyZXBvcnRTdGF0cy5udW1Wb3Rlc0ZvciA/PyAnPycpfVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L1ZvdGVzRm9yPlxuICAgICAgPFZvdGVzQWdhaW5zdD5cbiAgICAgICAgTm8gVmlvbGF0aW9uIFZvdGVzXG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgIHtyZXBvcnRTdGF0cyAmJiAocmVwb3J0U3RhdHMubnVtVm90ZXNBZ2FpbnN0ID8/ICc/Jyl9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvVm90ZXNBZ2FpbnN0PlxuICAgICAgPE1pZGRsZVNlY3Rpb24gdmVyZGljdD17dmVyZGljdH0+XG4gICAgICAgIHsgdm90aW5nVGltZVVwICYmIChcbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAge2BWRVJESUNUIOKtoiAke3ZlcmRpY3R9YH1cbiAgICAgICAgICB7JyAnfVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgICl9XG4gICAgICAgIHsgdm90aW5nVGltZVVwID8gPEdhdmVsMiAvPiA6IDxDYXN0QmFsbG90U3ZnIC8+IH1cbiAgICAgICAgeyhyZXBvcnRTdGF0cyAmJiAhdm90aW5nVGltZVVwKSAmJiAoXG4gICAgICAgIDxUaGVtZUJ1dHRvbiBvbkNsaWNrPXtvcGVuTW9kYWx9PlxuICAgICAgICAgIHtoYXNBbHJlYWR5Vm90ZWQgPyAnQ2hhbmdlIFlvdXIgVm90ZScgOiAnQ2FzdCBZb3VyIFZvdGUnfVxuICAgICAgICA8L1RoZW1lQnV0dG9uPlxuICAgICAgICApfVxuICAgICAgPC9NaWRkbGVTZWN0aW9uPlxuICAgIDwvVm90aW5nQ29udGFpbmVyPlxuXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVtbyhWb3RpbmdCb3gpXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgVm90aW5nQ29udGFpbmVyID0gc3R5bGVkKCdzZWN0aW9uJylgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAxNHZ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCByZ2IoNjAgNjAgNjAgLyAxMCUpO1xuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMC41cHggc29saWQgbGlnaHRncmF5O1xuICBib3JkZXItY29sb3I6IHJnYmEoMjAwLCAyMDAsIDIwMCwgMC4yNSk7XG4gIG1hcmdpbjogY2xhbXAoMzBweCwgMXZ3LCAxMDBweCkgMCBjbGFtcCgzMHB4LCAxdncsIDEwMHB4KSAwO1xuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogMzB2dztcbiAgfVxuXG4gIHN2ZyB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgICAgd2lkdGg6IDl2dztcbiAgICAgIGhlaWdodDogOXZ3O1xuICAgIH1cbiAgfVxuXG4gIHNwYW4ge1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAgIGZvbnQtc2l6ZTogNHZ3O1xuICAgIH1cbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgVm90ZXNBZ2FpbnN0ID0gc3R5bGVkKCdkaXYnKWBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTAlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG4gIGZvbnQtc2l6ZTogMS4zdnc7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgIGZvbnQtc2l6ZTogNHZ3O1xuICB9XG4gIFxuYFxuXG5leHBvcnQgY29uc3QgVm90ZXNGb3IgPSBzdHlsZWQoJ2RpdicpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDEwJTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICBmb250LXNpemU6IDEuM3Z3O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgZm9udC1zaXplOiA0dnc7XG4gIH1cblxuYFxuXG5leHBvcnQgY29uc3QgTWlkZGxlU2VjdGlvbiA9IHN0eWxlZCgnZGl2JylgXG5cbiAgc3BhbjpmaXJzdC1jaGlsZCB7XG4gICAgZm9udC1zaXplOiAydnc7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICR7KHByb3BzKSA9PiAocHJvcHMudmVyZGljdCA9PT0gJ1Zpb2xhdGlvbicgPyAncmVkJyA6ICdncmVlbicpfTtcbiAgfVxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMzUlKTtcbiAgaGVpZ2h0OiA1NSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbmBcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDb2xsYXBzZSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcbi8vIGltcG9ydCB7IE1kRXhwYW5kTW9yZSwgTWRFeHBhbmRMZXNzIH0gZnJvbSAncmVhY3QtaWNvbnMvbWQnXG5pbXBvcnQgeyBVcEFycm93U3ZnLCBEb3duQXJyb3dTdmcgfSBmcm9tICcuLi8uLi9zdmdzL3N2Z3MnXG5cbmltcG9ydCB7IFZpZGVvRGVzY3JpcHRpb25DYXJkIH0gZnJvbSAnLi4vQ29tbW9uQ29tcG9uZW50cy9DYXJkL0luZGV4J1xuaW1wb3J0IEFjdGlvblRvb2xiYXIgZnJvbSAnLi4vQ29tbW9uQ29tcG9uZW50cy9BY3Rpb25Ub29sYmFycy9Ub3BpY1Rvb2xiYXIvSW5kZXgnXG5pbXBvcnQgTGlua1NlY3Rpb24gZnJvbSAnLi4vQ29tbW9uQ29tcG9uZW50cy9MaW5rU2VjdGlvbi9JbmRleCdcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJy4uL0NvbW1vbkNvbXBvbmVudHMvSWNvbkJ1dHRvbi9JbmRleCdcblxuaW1wb3J0IHRvcGljQWN0aW9uQ3JlYXRvcnMgZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucy90b3BpY3MnXG5cbmltcG9ydCB1c2VTZXRJbm5lckh0bWwgZnJvbSAnLi4vaG9va3MvdXNlU2V0SW5uZXJIdG1sJ1xuaW1wb3J0IHVzZU9wZW5Nb2RhbCBmcm9tICcuLi9ob29rcy91c2VPcGVuTW9kYWxXaXRoTG9jYXRpb24nXG5pbXBvcnQgdXNlQmluZERpc3BhdGNoIGZyb20gJy4uL2hvb2tzL3JlZHV4L3VzZUJpbmREaXNwYXRjaCdcbmltcG9ydCB1c2VVcGRhdGVMaWtlcyBmcm9tICcuL2hvb2tzL3VzZVVwZGF0ZUxpa2VzJ1xuaW1wb3J0IHVzZUdvVG9TdWJUb3BpYyBmcm9tICcuLi9ob29rcy9yb3V0aW5nL3VzZUdvVG9TdWJUb3BpY3MnXG5pbXBvcnQgeyBnZXRUaW1lU2luY2UgfSBmcm9tICcuLi8uLi9nZW5lcmljL3N0cmluZy9kYXRlRm9ybWF0dGVyJ1xuXG5pbXBvcnQgeyBWaWRlb1BsYXllciwgRGVzY3JpcHRpb24sIEV4cGFuZEJ1dHRvbiB9IGZyb20gJy4vU3R5bGUnXG5cbmNvbnN0IFZpZGVvU2hvd1BhZ2UgPSAoe1xuICB0b3BpYywgdXNlciwgc3JjLCBzaG93TGlua3MsXG59KSA9PiB7XG4gIGNvbnN0IGRlc2NSZWYgPSB1c2VSZWYobnVsbClcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IG9wZW5Nb2RhbCA9IHVzZU9wZW5Nb2RhbCgnVE9QSUNfUkVQTFknKVxuICBjb25zdCBnb1RvU3ViVG9waWMgPSB1c2VHb1RvU3ViVG9waWModG9waWMuaWQpXG4gIGNvbnN0IHsgdXBkYXRlVG9waWNMaWtlcyB9ID0gdXNlQmluZERpc3BhdGNoKHRvcGljQWN0aW9uQ3JlYXRvcnMpXG4gIGNvbnN0IHVwZGF0ZUxpa2VzID0gdXNlVXBkYXRlTGlrZXModXBkYXRlVG9waWNMaWtlcywgdG9waWMsIHVzZXIpXG4gIHVzZVNldElubmVySHRtbChkZXNjUmVmLCB0b3BpYz8uZGVzY3JpcHRpb24pXG5cbiAgY29uc3QgZXhwYW5kSWNvbiA9IGlzT3BlbiA/IDxVcEFycm93U3ZnIC8+IDogPERvd25BcnJvd1N2ZyAvPlxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgPFZpZGVvUGxheWVyIHNyYz17c3JjfSBsb2FkaW5nPVwibGF6eVwiIC8+XG4gICAgICA8VmlkZW9EZXNjcmlwdGlvbkNhcmRcbiAgICAgICAgb25DbGljaz17Z29Ub1N1YlRvcGljfVxuICAgICAgICB1c2VybmFtZT17dG9waWM/LmNyZWF0ZWRCeX1cbiAgICAgICAgaWNvblNyYz17YCR7dG9waWM/LmNyZWF0ZWRCeUljb25TcmN9YH1cbiAgICAgICAgc3VtbWFyeT17dG9waWM/LnN1bW1hcnl9XG4gICAgICAgIHRpbWU9e2dldFRpbWVTaW5jZSh0b3BpYz8uY3JlYXRlZEF0KX1cbiAgICAgID5cbiAgICAgICAgPERlc2NyaXB0aW9uPlxuICAgICAgICAgIDxzcGFuIHJlZj17ZGVzY1JlZn0gLz5cbiAgICAgICAgPC9EZXNjcmlwdGlvbj5cbiAgICAgICAge3RvcGljPy5ldmlkZW5jZUxpbmtzLmxlbmd0aCAhPT0gMFxuICAgICAgICAmJiAoXG4gICAgICAgIDxFeHBhbmRCdXR0b24+XG4gICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgIGljb249e2V4cGFuZEljb259XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4oIWlzT3Blbil9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgU2hvdyBBZGRpdGlvbmFsIEluZm9cbiAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgIDwvRXhwYW5kQnV0dG9uPlxuICAgICAgICApfVxuICAgICAgICA8Q29sbGFwc2UgaW49e2lzT3Blbn0+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxMaW5rU2VjdGlvbiB0b3BpYz17dG9waWN9IHNob3dMaW5rcz17c2hvd0xpbmtzfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbGxhcHNlPlxuICAgICAgICA8QWN0aW9uVG9vbGJhclxuICAgICAgICAgIGxpa2VzPXt0b3BpYz8ubGlrZXN9XG4gICAgICAgICAgdG9waWM9e3RvcGljfVxuICAgICAgICAgIHVzZXI9e3VzZXJ9XG4gICAgICAgIC8+XG4gICAgICA8L1ZpZGVvRGVzY3JpcHRpb25DYXJkPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpZGVvU2hvd1BhZ2VcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBWaWRlb1BsYXllciA9IHN0eWxlZCgnaWZyYW1lJylgXG4gIHdpZHRoOiAxMDAlO1xuICAvKiBoZWlnaHQ6IDQ1dnc7ICovXG4gIC8qIHdpZHRoOiA0NXZ3OyAgICovXG4gIGhlaWdodDogMjUuMzF2dztcblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgaGVpZ2h0OiA1MHZ3XG4gIH1cblxuYFxuXG5leHBvcnQgY29uc3QgRGVzY3JpcHRpb24gPSBzdHlsZWQoJ3AnKWBcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogLjZlbTtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBwYWRkaW5nOiAxZW07XG5gXG5cbmV4cG9ydCBjb25zdCBFeHBhbmRCdXR0b24gPSBzdHlsZWQoJ2RpdicpYCBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuYFxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgKHVwZGF0ZVRvcGljTGlrZXMsIHRvcGljLCB1c2VyKSA9PiB1c2VDYWxsYmFjaygoKSA9PiB7XG4gIGlmICghdG9waWMgfHwgIXVzZXIpIHJldHVybiAvLyBTb21lIHNvbXJ0IG9mIGVycm9yIGhlcmUgbWF5YmVcbiAgdXBkYXRlVG9waWNMaWtlcyh7XG4gICAgaWQ6IHRvcGljLmlkLFxuICAgIHVzZXJJZDogdXNlci5pZCxcbiAgICBpbmNyZW1lbnQ6ICF0b3BpYy5saWtlZCxcbiAgfSlcbn0sIFt0b3BpY10pXG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG5leHBvcnQgZGVmYXVsdCAodG9waWNJZCwgc3VidG9waWNJZCkgPT4ge1xuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKClcbiAgcmV0dXJuIHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBuYXZpZ2F0ZShgL2hvbWUvdG9waWNzLyR7dG9waWNJZH0vc3VidG9waWNzLyR7c3VidG9waWNJZH1gKVxuICB9LCBbXSlcbn1cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnXG5cbmltcG9ydCB1aUFjdGlvbkNyZWF0b3JzIGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMvdWkvaW5kZXgnXG5cbmltcG9ydCB7IFJFUExZIH0gZnJvbSAnLi4vQXBwL01vZGFsL0luZGV4J1xuaW1wb3J0IHsgdXVpZFJlZ0V4IH0gZnJvbSAnLi4vLi4vZ2VuZXJpYy9yZWdleC91dWlkJ1xuXG5leHBvcnQgZGVmYXVsdCAobW9kYWxUeXBlLCBtb2RhbFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZUxvY2F0aW9uKClcbiAgY29uc3Qgc3VidG9waWNJZCA9IHBhdGhuYW1lLm1hdGNoKHV1aWRSZWdFeCk/LlsxXVxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcbiAgY29uc3QgeyBvcGVuTW9kYWwgfSA9IGJpbmRBY3Rpb25DcmVhdG9ycyh1aUFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaClcbiAgcmV0dXJuIHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBvcGVuTW9kYWwoUkVQTFksIG1vZGFsUHJvcHMpXG4gIH0sIFtdKVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSdcbmltcG9ydCB7IEdFVF9BTExfUkVDUyB9IGZyb20gJy4uLy4uL3JlZHVjZXJzL3JlY3MvcmVjc1JlZHVjZXInXG5pbXBvcnQgKiBhcyBSZWNzQXBpVXRpbCBmcm9tICcuLi8uLi8uLi9hcGkvdjEvcmVjcy9yZWNzX2FwaV91dGlsJ1xuaW1wb3J0IHsgZXJyb3JGb3JtYXR0ZXIgfSBmcm9tICcuLi8uLi91dGlscy9lcnJvckZvcm1hdHRlcidcblxuY29uc3QgZ2V0QWxsUmVjc0FjdGlvbkNyZWF0b3IgPSAocmVjcykgPT4gKHtcbiAgdHlwZTogR0VUX0FMTF9SRUNTLFxuICBwYXlsb2FkOiByZWNzLFxuXG59KVxuXG5leHBvcnQgY29uc3QgZ2V0QWxsUmVjcyA9ICh0YXJnZXRDb250ZW50SWQpID0+IChkaXNwYXRjaCkgPT4gUmVjc0FwaVV0aWwuZ2V0QWxsUmVjcyh0YXJnZXRDb250ZW50SWQpXG4gIC50aGVuKChyZXMpID0+IGRpc3BhdGNoKGdldEFsbFJlY3NBY3Rpb25DcmVhdG9yKHJlcy5kYXRhKSkpXG4gIC5jYXRjaCgoZXJyb3IpID0+IHRvYXN0LmVycm9yKGVycm9yRm9ybWF0dGVyKGVycm9yKSkpXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2V0QWxsUmVjcyxcbn1cbiIsImltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknXG5pbXBvcnQgeyBjbG9zZU1vZGFsIH0gZnJvbSAnLi4vdWkvaW5kZXgnXG5pbXBvcnQgeyBBRERfUkVQT1JUIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvcmVwb3J0cy9yZXBvcnRzUmVkdWNlcidcbmltcG9ydCAqIGFzIFJlcG9ydHNBcGlVdGlsIGZyb20gJy4uLy4uLy4uL2FwaS92MS9yZXBvcnRzL3JlcG9ydHNfYXBpX3V0aWwnXG5pbXBvcnQgeyBlcnJvckZvcm1hdHRlciB9IGZyb20gJy4uLy4uL3V0aWxzL2Vycm9yRm9ybWF0dGVyJ1xuXG5jb25zdCBhZGRSZXBvcnRBY3Rpb25DcmVhdG9yID0gKHJlcG9ydCkgPT4gKHtcbiAgdHlwZTogQUREX1JFUE9SVCxcbiAgcGF5bG9hZDogcmVwb3J0LFxufSlcblxuZXhwb3J0IGNvbnN0IGdldFJlcG9ydCA9IChjb250ZW50SWQpID0+IChkaXNwYXRjaCkgPT4gKFxuICBSZXBvcnRzQXBpVXRpbC5nZXRSZXBvcnQoY29udGVudElkKVxuICAgIC50aGVuKChyZXMpID0+IGRpc3BhdGNoKGFkZFJlcG9ydEFjdGlvbkNyZWF0b3IocmVzLmRhdGEpKSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB0b2FzdC5lcnJvcihlcnJvckZvcm1hdHRlcihlcnJvcikpKVxuICAgIC5maW5hbGx5KCgpID0+IGRpc3BhdGNoKGNsb3NlTW9kYWwoKSkpXG4pXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2V0UmVwb3J0LFxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuLy8gYWN0aW9uIGNyZWF0b3IgaXMganVzdCBhIGZ1bmN0aW9uIHRoYXQgZGlzcGF0Y2hlcyBhbiBhY3Rpb25cbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknXG5pbXBvcnQgeyBjbG9zZU1vZGFsIH0gZnJvbSAnLi4vdWkvaW5kZXgnXG5pbXBvcnQgeyBBRERfU1VCX1RPUElDLCBHRVRfQUxMX1NVQl9UT1BJQ1MgfSBmcm9tICcuLi8uLi9yZWR1Y2Vycy9zdWJ0b3BpY3Mvc3ViVG9waWNzUmVkdWNlcidcbmltcG9ydCAqIGFzIFN1YlRvcGljc0FwaVV0aWwgZnJvbSAnLi4vLi4vLi4vYXBpL3YxL3N1YnRvcGljcy9zdWJ0b3BpY3NfYXBpX3V0aWwnXG5pbXBvcnQgeyBlcnJvckZvcm1hdHRlciB9IGZyb20gJy4uLy4uL3V0aWxzL2Vycm9yRm9ybWF0dGVyJ1xuXG5jb25zdCBnZXRBbGxUb3BpY3NBY3Rpb25DcmVhdG9yID0gKHN1YnRvcGljcykgPT4gKHtcbiAgdHlwZTogR0VUX0FMTF9TVUJfVE9QSUNTLFxuICBwYXlsb2FkOiBzdWJ0b3BpY3MsXG5cbn0pXG5cbmNvbnN0IGFkZFRvcGljQWN0aW9uQ3JlYXRvciA9IChzdWJUb3BpY0RhdGEpID0+ICh7XG4gIHR5cGU6IEFERF9TVUJfVE9QSUMsXG4gIHBheWxvYWQ6IHN1YlRvcGljRGF0YSxcbn0pXG5cbmV4cG9ydCBjb25zdCBjcmVhdGVTdWJUb3BpYyA9ICh0b3BpY0RhdGEpID0+IChkaXNwYXRjaCkgPT4gU3ViVG9waWNzQXBpVXRpbC5jcmVhdGVTdWJUb3BpYyh0b3BpY0RhdGEpXG4gIC50aGVuKChyZXMpID0+IGRpc3BhdGNoKGFkZFRvcGljQWN0aW9uQ3JlYXRvcihyZXMuZGF0YSkpKVxuICAudGhlbigoKSA9PiBkaXNwYXRjaChjbG9zZU1vZGFsKCkpKVxuICAuY2F0Y2goKGVycm9yKSA9PiB0b2FzdC5lcnJvcihlcnJvckZvcm1hdHRlcihlcnJvcikpKVxuXG5leHBvcnQgY29uc3QgZ2V0QWxsU3ViVG9waWNzID0gKHRvcGljSWQpID0+IChkaXNwYXRjaCkgPT4gU3ViVG9waWNzQXBpVXRpbC5nZXRBbGxTdWJUb3BpY3ModG9waWNJZClcbiAgLnRoZW4oKHJlcykgPT4gZGlzcGF0Y2goZ2V0QWxsVG9waWNzQWN0aW9uQ3JlYXRvcihyZXMuZGF0YSkpKVxuICAuY2F0Y2goKGVycm9yKSA9PiB0b2FzdC5lcnJvcihlcnJvckZvcm1hdHRlcihlcnJvcikpKVxuXG5leHBvcnQgY29uc3QgZ2V0U3ViVG9waWMgPSAoc3ViVG9waWNJZCkgPT4gKGRpc3BhdGNoKSA9PiBTdWJUb3BpY3NBcGlVdGlsLmdldFN1YlRvcGljKHN1YlRvcGljSWQpXG4gIC50aGVuKChyZXMpID0+IGRpc3BhdGNoKGFkZFRvcGljQWN0aW9uQ3JlYXRvcihyZXMuZGF0YSkpKVxuICAuY2F0Y2goKGVycm9yKSA9PiB0b2FzdC5lcnJvcihlcnJvckZvcm1hdHRlcihlcnJvcikpKVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNyZWF0ZVN1YlRvcGljLFxuICBnZXRBbGxTdWJUb3BpY3MsXG4gIGdldFN1YlRvcGljLFxufVxuIl0sIm5hbWVzIjpbImF4aW9zIiwiQkFDS0VORF9ERVYiLCJnZXRBbGxSZWNzIiwidGFyZ2V0Q29udGVudElkIiwiZ2V0IiwiY3JlYXRlU3ViVG9waWMiLCJzdWJUb3BpY0RhdGEiLCJwb3N0IiwiZ2V0QWxsU3ViVG9waWNzIiwidG9waWNJZCIsImdldFN1YlRvcGljIiwic3ViVG9waWNJZCIsInV1aWRSZWdFeCIsIlJlZ0V4cCIsImNhbGN1bGF0ZVRpbWVMZWZ0IiwicmVwb3J0RW5kVGltZSIsImRpZmZlcmVuY2UiLCJEYXRlIiwidGltZUxlZnQiLCJkYXlzIiwiTWF0aCIsImZsb29yIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsIlJlYWN0IiwibWVtbyIsInVzZVBhcmFtcyIsIlVwVm90ZUJ1dHRvbiIsIkRvd25Wb3RlQnV0dG9uIiwiQ29tbWVudEJ1dHRvbiIsIkNpdmlsaXR5QnV0dG9uIiwiVHJpYnVuYWxCdXR0b24iLCJDb250YWluZXIiLCJMZWZ0IiwiUmlnaHQiLCJDT01NRU5UIiwiVFJJQlVOQUxfQ09NTUVOVCIsIkNvbW1lbnRBY3Rpb25Ub29sYmFyIiwibGlrZXMiLCJjb21tZW50IiwidXNlciIsInBhcmFtcyIsImlzVHJpYnVuYWxDb21tZW50IiwiY29tbWVudFR5cGUiLCJpZCIsInVzZU1lbW8iLCJ1c2VTdGF0ZSIsIlJhbmdlU2xpZGVyIiwiUG9wb3ZlclN0aWNrT25Ib3ZlciIsInVzZVVwZGF0ZUNvbW1lbnRDaXZpbGl0eSIsInNob3dQb3BvdmVyIiwic2V0U2hvd1BvcG92ZXIiLCJvbkNsaWNrIiwicHJldiIsInVwZGF0ZUNvbW1lbnRDaXZpbGl0eSIsIkljb24iLCJjaXZpbGl0eSIsInVzZUNhbGxiYWNrIiwidXNlU2VsZWN0b3IiLCJ1c2VMb2NhdGlvbiIsImNvbW1lbnRBY3Rpb25zIiwidHJpYnVuYWxDb21tZW50QWN0aW9ucyIsInVzZUJpbmREaXNwYXRjaCIsInBhdGhuYW1lIiwicyIsInNlc3Npb24iLCJjdXJyZW50VXNlciIsInVwZGF0ZVRyaWJ1bmFsQ29tbWVudENpdmlsaXR5IiwiZSIsImlzVHJpYnVuYWwiLCJpbmNsdWRlcyIsImRhdGEiLCJnaXZpbmdVc2VySWQiLCJyZWNlaXZpbmdVc2VySWQiLCJjcmVhdGVkQnlJZCIsImNvbW1lbnRJZCIsInZhbHVlIiwiTnVtYmVyIiwiY3VycmVudFRhcmdldCIsImNpdmlsIiwiSWNvbkJ1dHRvbiIsIkNvbW1lbnRTdmciLCJ1c2VPcGVuTW9kYWwiLCJSRVBMWSIsImNvbnRlbnRJZCIsIm9wZW5Db21tZW50TW9kYWwiLCJyZXBseVR5cGUiLCJyb290UGFyZW50Q29tbWVudElkIiwicm9vdElkIiwidHJpYnVuYWxDb21tZW50VW5kZXJSZXZpZXdJZCIsInVzZU9uUmFuZ2VDaGFuZ2UiLCJSYW5nZSIsIk1lc3NhZ2UiLCJvblNsaWRlckNoYW5nZSIsInNsaWRlclZhbHVlIiwic3RvcFByb3BhZ2F0aW9uIiwic3R5bGVkIiwic2V0U2xpZGVyVmFsdWUiLCJyYW5nZSIsInJhbmdlViIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJuZXdWYWx1ZSIsIm1pbiIsIm1heCIsIm5ld1Bvc2l0aW9uIiwiaW5uZXJIVE1MIiwic3R5bGUiLCJsZWZ0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwiT3ZlcmxheSIsIlBvcG92ZXIiLCJkZWxheSIsIm9uTW91c2VFbnRlciIsImNoaWxkcmVuIiwiY29tcG9uZW50IiwicGxhY2VtZW50IiwiY2hpbGROb2RlIiwic2V0VGltZW91dENvbnN0IiwiY2xlYXJUaW1lb3V0IiwiaGFuZGxlTW91c2VFbnRlciIsInNldFRpbWVvdXQiLCJoYW5kbGVNb3VzZUxlYXZlIiwiZGlzcGxheUNoaWxkIiwiQ2hpbGRyZW4iLCJtYXAiLCJjaGlsZCIsImNsb25lRWxlbWVudCIsIm9uTW91c2VMZWF2ZSIsInJlZiIsIm5vZGUiLCJjdXJyZW50IiwiVXNlckluZm9ybWF0aW9uRGlzcGxheSIsIk1pZGRsZSIsIkhvbWVQYWdlR3JpZCIsIk5vdGlmaWNhdGlvbkl0ZW0iLCJCb3JkZXJDb250YWluZXIiLCJOb3RpZmljYXRpb25MaXN0IiwiSGVhZGVyIiwiTm90aWZpY2F0aW9ucyIsIm5vdGlmaWNhdGlvbnMiLCJ1c2VyTm90aWZpY2F0aW9uc0xpc3QiLCJub3RpZmljYXRpb24iLCJMaW5rIiwidXNlTmF2aWdhdGUiLCJNZW51VGltZSIsIlVzZXJuYW1lQW5kVGFnIiwiZ2V0VGltZVNpbmNlIiwiTGVmdENvbnRhaW5lciIsIk1pZGRsZUNvbnRhaW5lciIsIlByb2ZpbGVJY29uIiwiQ29tbWVudENpdmlsaXR5R2l2ZW4iLCJDb21tZW50Q2l2aWxpdHlOb3RpZmNhdGlvbiIsImdpdmluZ1VzZXJVc2VybmFtZSIsImdpdmluZ1VzZXJJY29uU3JjIiwiZ2l2aW5nVXNlclRhZyIsInN1YnRvcGljSWQiLCJjcmVhdGVkQXQiLCJvbGQiLCJuZXdWYWwiLCJuYXZpZ2F0ZSIsImhhbmRsZUNsaWNrIiwidG9GaXhlZCIsIk5ld0ZvbGxvd2VyIiwiQWRkRnJpZW5kU3ZnIiwiRm9sbG93Tm90aWZjYXRpb24iLCJDb21tZW50TGlrZSIsIkxpa2VDbGlja2VkU3ZnIiwiQ29tbWVudExpa2VOb3RpZmljYXRpb24iLCJWZXJ0aWNhbE1lbnVEb3RzU3ZnIiwiRGVsZXRlU3ZnIiwiUmVhZFN2ZyIsIm5vdGlmaWNhdGlvbkFjdGlvbkNyZWF0b3JzIiwiTWVudVRpbWVDb250YWluZXIiLCJUaW1lIiwiTWVudUljb25Db250YWluZXIiLCJBY3Rpb25NZW51IiwiQWN0aW9uTWVudUl0ZW0iLCJ0aW1lIiwiZXZlbnRUeXBlIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwidXBkYXRlTm90aWZpY2F0aW9uVG9SZWFkIiwiZGVsZXRlTm90aWZpY2F0aW9uIiwiZXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIiwicHJvcHMiLCJUb3BpY0xpa2UiLCJJdGVtIiwiVG9waWNMaWtlTm90aWZpY2F0aW9uIiwiSXRlbUNvbXBvbmVudCIsIlJpZ2h0Q29udGFpbmVyIiwiVGFiIiwiVGhlbWVUYWIiLCJUYWJDb250YWluZXIiLCJyZWNzQWN0aW9uQ3JlYXRvcnMiLCJvcHBSZWNzQWN0aW9uQ3JlYXRvcnMiLCJSZWNvbW1lbmRhdGlvbnNMaXN0IiwiUmVjb21tZW5kYXRpb25zIiwia2V5Iiwic2V0S2V5IiwiZ2V0QWxsT3Bwb3NpbmdSZWNzIiwicmVjcyIsInJlY29tbWVuZGF0aW9ucyIsIm9wcG9zaW5nUmVjcyIsImsiLCJNYWluQ29udGVudCIsIkxpbmUiLCJ0b3BpY0FjdGlvbkNyZWF0b3JzIiwic3ViVG9waWNBY3Rpb25DcmVhdG9ycyIsIkhlYWRlckNvbnRhaW5lciIsIlBhcmVudENvbW1lbnQiLCJTdWJUb3BpY3NSb3V0ZXIiLCJTdWJUb3BpY3MiLCJ1cmwiLCJtYXRjaCIsImdldFRvcGljIiwidG9waWMiLCJ0b3BpY3MiLCJsaXN0IiwiZmluZCIsInQiLCJzdWJ0b3BpY3NFbXB0eSIsInN1YnRvcGljcyIsIkNvbGxhcHNlIiwiVXBBcnJvd1N2ZyIsIkRvd25BcnJvd1N2ZyIsIkNlbnNvck92ZXJsYXkiLCJBY3Rpb25Ub29sYmFyIiwiQ29tbWVudENvbnRhaW5lciIsIlVzZXJuYW1lIiwiQm9keSIsIkZvb3RlciIsIlRodW1iIiwiRXhwYW5kQnV0dG9uIiwiRXZpZGVuY2VTZWN0aW9uIiwiQ29udGVudCIsIlVzZXJJbmZvQ29udGFpbmVyIiwiT3V0ZXJDb250YWluZXIiLCJ1c2VTZXRJbm5lckh0bWwiLCJQYXJlbnRDb21tZW50Q29udGV4dCIsIlRoZW1lVG9vbHRpcCIsIlVOREVSX1JFVklFVyIsIkNvbW1lbnQiLCJjb21tZW50RGF0YSIsInJlcGxpZXMiLCJjb21tZW50UmVmIiwidXNlQ29udGV4dCIsImNvbnRlbnRSZWYiLCJyZXBvcnRTdGF0dXMiLCJ0b3hpY2l0eVN0YXR1cyIsInNob3VsZEJsdXIiLCJzZXRTaG91bGRCbHVyIiwiY29udGVudCIsIm1pbnMiLCJleHBhbmRJY29uIiwiY3JlYXRlZEJ5SWNvblNyYyIsImNyZWF0ZWRCeUV4cGVyaWVuY2UiLCJjcmVhdGVkQnkiLCJsZW5ndGgiLCJyZXBseSIsImlkeCIsIlN0cmluZyIsImNyZWF0ZUNvbnRleHQiLCJDb21tZW50Q29sdW1uIiwibnVtQ29tbWVudHMiLCJjb21tZW50cyIsImNvbW1lbnRTZW50aW1lbnQiLCJjb2xvciIsInVzZUNhdGVnb3JpemVDb21tZW50cyIsInN1YlRvcGljQWN0aW9ucyIsInRvcGljQWN0aW9ucyIsIkNvbHVtbkNvbnRhaW5lciIsIlRocmVhZENvbnRhaW5lciIsIkNvbW1lbnRUaHJlYWQiLCJnZXRBbGxDb21tZW50UmVwbGllcyIsInN0YXRlIiwicG9zaXRpdmVDb21tZW50cyIsIlBPU0lUSVZFIiwibmV1dHJhbENvbW1lbnRzIiwiTkVVVFJBTCIsIm5lZ2F0aXZlQ29tbWVudHMiLCJORUdBVElWRSIsImFsbENvbW1lbnRzIiwiYWxsIiwidXNlU2VhcmNoUGFyYW1zIiwiVG9vbHRpcCIsIk92ZXJsYXlUcmlnZ2VyIiwiRW1iZWRlZFR3ZWV0IiwiVmlkZW9TaG93UGFnZSIsIkV4dGVybmFsQ29udGVudENhcmQiLCJVc2VyUHJvdmlkZWRNZWRpYUNhcmQiLCJVc2VySW5mb0hlYWRlciIsIkRlc2NyaXB0aW9uIiwiVG9waWNTdW1tYXJ5Q29udGFpbmVyIiwiU3R5bGVkTG9uZ0Rvd25BcnJvdyIsIlRvb2x0aXBDb21wb25lbnQiLCJ0ZXh0IiwidGl0bGUiLCJyZWZlcmVuY2UiLCJzY3JvbGxJbnRvVmlldyIsInN1YnRvcGljQ29udGVudCIsInN1YnRvcGljIiwic2hvd1N1YlRvcGljIiwiY29tbW9uUHJvcHMiLCJzaG93TGlua3MiLCJkZXNjUmVmIiwic3VidG9waWNSZWYiLCJ0b3BpY1JlZiIsImRlc2NyaXB0aW9uIiwiY29tbW9uUHJvcHNTdWJUb3BpYyIsInR3ZWV0SHRtbCIsInl0VXJsIiwicmVwbGFjZSIsInZvZFVybCIsImltYWdlVXJsIiwid2lkdGgiLCJ1c2VySWQiLCJ0aHVtYkltZ1VybCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsIkxvbmdEb3duQXJyb3ciLCJMaW5rc0NvbnRhaW5lciIsImhlaWdodCIsInRhcmdldENvbW1lbnQiLCJ1c2VTZXNzaW9uVHlwZSIsIlN1YlRvcGljVGhyZWFkIiwiZ2V0QWxsQ29tbWVudHMiLCJzZXNzaW9uVHlwZSIsInNpZ25lZEluVmlhQ2xlcmsiLCJzaWduZWRJblZpYURJRCIsIlByb21pc2UiLCJ1c2VEaXNwYXRjaCIsImJpbmRBY3Rpb25DcmVhdG9ycyIsIlJpZ2h0VHJpYW5nbGVBcnJvd0ZpbGxTdmciLCJ1c2VHb1RvU3ViVG9waWMiLCJUaGVtZUJ1dHRvbiIsIlN1YlRvcGljc1RhYmxlIiwidWlBY3Rpb25DcmVhdG9ycyIsIkNSRUFURV9TVUJfVE9QSUMiLCJTdWJUb3BpY3NMaXN0IiwiZGlzcGF0Y2giLCJvcGVuTW9kYWwiLCJnZW5TdWJUb3BpYyIsIk9iamVjdCIsInZhbHVlcyIsImdvVG9TdWJUb3BpYyIsIlJvdXRlIiwiUm91dGVzIiwiV2F2eUJhY2tncm91bmQiLCJTdWJUb3BpY3NJdGVtIiwiVGFibGVIZWFkZXIiLCJUYWJsZSIsIkNvbEhlYWRlciIsIkNvbEl0ZW0iLCJSb3ciLCJSb3dJdGVtIiwidXNlR29Ub0NvbW1lbnRUaHJlYWQiLCJnb1RvQ29tbWVudFRocmVhZCIsInN1YnN0cmluZyIsInNlbnRpbWVudHMiLCJTZXQiLCJjYXRlZ29yaXplZENvbW1lbnRzIiwiZm9yRWFjaCIsImhhcyIsInNlbnRpbWVudCIsInB1c2giLCJUcmlidW5hbE5vdGlmaWNhdGlvbnMiLCJ0cmlidW5hbE5vdGlmaWNhdGlvbnNMaXN0IiwiVHJpYnVuYWxTZWxlY3Rpb24iLCJVc2VyQ29udGVudFJlcG9ydGVkIiwiVHJpYnVuYWxTZWxlY3Rpb25Ob3RpZmljYXRpb24iLCJVc2VyQ29udGVudFJlcG9ydGVkTm90aWZpY2F0aW9uIiwiR2F2ZWwyIiwiY29udGVudFR5cGUiLCJyZXBvcnRlZENvbnRlbnRJZCIsIlJlY0l0ZW0iLCJSZWNMaXN0Q29udGFpbmVyIiwicmVjIiwidXNlR2V0TGlua01ldGFEYXRhRWZmZWN0IiwidXNlTmF2aWdhdGVUb1BhZ2UiLCJEZXNjcmlwdGlvbkNvbnRhaW5lciIsIlRpdGxlIiwiU3ViVGl0bGUiLCJPR0ltYWdlIiwic3ViVG9waWMiLCJtZXRhRGF0YSIsImNvbnRlbnRVcmwiLCJleHRlcm5hbFJlY29tbWVuZGVkQ29udGVudCIsIm5hdmlnYXRlVG9QYWdlIiwicmVnRXhwIiwib2dJbWFnZSIsIm9nVGl0bGUiLCJvZ0Rlc2NyaXB0aW9uIiwiT0dVcmwiLCJPR1RpdGxlIiwiT0dEZXNjcmlwdGlvbiIsIndpbmRvdyIsIm9wZW4iLCJJbm5lckNvbnRhaW5lciIsIlN0eWxlZFNjYWxlc1N2ZyIsIlJlcG9ydFN0YXRzQ29udGFpbmVyIiwiUmVwb3J0U3RhdEl0ZW0iLCJTdHlsZWRQaWxsYXJTdmciLCJUaW1lciIsIlRvcGljSXRlbSIsInJlcG9ydEFjdGlvbnMiLCJ0cmlidW5hbENvbW1lbnRzQWN0aW9ucyIsIlRyaWJ1bmFsQ29tbWVudHMiLCJWb3RpbmdCb3giLCJUT1BJQyIsIlRyaWJ1bmFsIiwidHJpYnVuYWxDb21tZW50cyIsInJlcG9ydFN0YXRzIiwicmVwb3J0cyIsInNldFRpbWVMZWZ0IiwiZ2V0UmVwb3J0IiwiZ2V0QWxsVHJpYnVuYWxDb21tZW50c0JhdGNoIiwiZ2V0Q29tbWVudCIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJyZXBvcnRQZXJpb2RFbmQiLCJ0aW1lckNvbXBvbmVudHMiLCJrZXlzIiwiaW50ZXJ2YWwiLCJ2b3RpbmdUaW1lVXAiLCJjIiwibnVtVG94aWNSZXBvcnRzIiwibnVtUGVyc29uYWxBdHRhY2tSZXBvcnRzIiwibnVtU3BhbVJlcG9ydHMiLCJTY2FsZXNTdmciLCJQaWxsYXJTdmciLCJWb3RpbmdDb250YWluZXIiLCJWb3Rlc0FnYWluc3QiLCJWb3Rlc0ZvciIsIk1pZGRsZVNlY3Rpb24iLCJTdHlsZWRUaGVtZVRhYiIsIkRlZmVuZGFudCIsIlJlcG9ydGVyIiwiSnVyeSIsIkdlbmVyYWwiLCJUaGVtZVRhYk5ldyIsIkNhc3RCYWxsb3RTdmciLCJUT1BJQ19WT1RFX0ZPUk0iLCJoYXNBbHJlYWR5Vm90ZWQiLCJ2b3RlQWdhaW5zdCIsInZvdGVGb3IiLCJ2ZXJkaWN0IiwibnVtVm90ZXNGb3IiLCJudW1Wb3Rlc0FnYWluc3QiLCJWaWRlb0Rlc2NyaXB0aW9uQ2FyZCIsIkxpbmtTZWN0aW9uIiwidXNlVXBkYXRlTGlrZXMiLCJWaWRlb1BsYXllciIsInNyYyIsInVwZGF0ZVRvcGljTGlrZXMiLCJ1cGRhdGVMaWtlcyIsInN1bW1hcnkiLCJldmlkZW5jZUxpbmtzIiwiaW5jcmVtZW50IiwibGlrZWQiLCJtb2RhbFR5cGUiLCJtb2RhbFByb3BzIiwidG9hc3QiLCJHRVRfQUxMX1JFQ1MiLCJSZWNzQXBpVXRpbCIsImVycm9yRm9ybWF0dGVyIiwiZ2V0QWxsUmVjc0FjdGlvbkNyZWF0b3IiLCJ0eXBlIiwicGF5bG9hZCIsInRoZW4iLCJyZXMiLCJlcnJvciIsImNsb3NlTW9kYWwiLCJBRERfUkVQT1JUIiwiUmVwb3J0c0FwaVV0aWwiLCJhZGRSZXBvcnRBY3Rpb25DcmVhdG9yIiwicmVwb3J0IiwiQUREX1NVQl9UT1BJQyIsIkdFVF9BTExfU1VCX1RPUElDUyIsIlN1YlRvcGljc0FwaVV0aWwiLCJnZXRBbGxUb3BpY3NBY3Rpb25DcmVhdG9yIiwiYWRkVG9waWNBY3Rpb25DcmVhdG9yIiwidG9waWNEYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==