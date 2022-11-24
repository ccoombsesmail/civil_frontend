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
    to: "/home/topics/".concat(topicId, "/subtopics/").concat(subtopicId, "/comments/").concat(commentId)
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
    to: "/home/topics/".concat(topicId, "/subtopics/").concat(subtopicId, "/comments/").concat(commentId)
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
    to: "/home/topics/".concat(topicId, "/subtopics")
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
    if (user) {
      getTopic(topicId, user.userId);
    }
    if (subtopicsEmpty) getAllSubTopics(topicId);
  }, [topicId, subtopicId, user]);
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
      return navigate("/home/topics/".concat(topicId, "/subtopics/").concat(commentData.subtopicId, "/comments/").concat(commentData.id));
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_7__.UserInfoContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_7__.Thumb, {
    src: commentData.createdByIconSrc || 'https://civil-dev.s3.us-west-1.amazonaws.com/profile_img_1.png'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_CommonComponents_Tooltip_Index__WEBPACK_IMPORTED_MODULE_11__["default"], {
    tooltipHeader: "Experience",
    tooltipText: commentData.createdByExperience
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_7__.Username, null, commentData.createdBy), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_7__.Date, null, "".concat(mins))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_7__.Body, {
    shouldBlur: shouldBlur,
    onClick: function onClick() {
      return navigate("/home/topics/".concat(topicId, "/subtopics/").concat(commentData.subtopicId, "/comments/").concat(commentData.id));
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

var Container = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('ul')(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 2em;\n  margin: 0;\n  padding: 0;\n  /* border-left: 1px solid black;\n  border-right: 1px solid black; */\n  z-index: 99;\n  opacity: .99;\n  width: 50vw;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  border: 1px solid lightgray;\n  border-color: rgba(200,200,200,0.25);\n\n  h1 {\n    display: flex;\n    width: 100%;\n    align-items: center;\n    font-weight: bold;\n    padding: 1em;\n    font-size: 1vw;\n    border-bottom: 1px solid black;\n    color: white;\n    border: none;\n    outline: none;\n    background-color: ", ";\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n\n     @media only screen and (max-width: 600px) {\n      border-top-left-radius: 0;\n      border-top-right-radius: 0;\n      font-size: 5vw;\n\n    }\n  }\n\n  \n   @media only screen and (max-width: 600px) {\n    width: 100%;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n  }\n"])), function (props) {
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
    console.log(commentId);
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
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/node_modules/react-router/dist/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Tab.js");
/* harmony import */ var _hooks_useCategorizeComments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useCategorizeComments */ "./src/pages/MainContent/components/SubTopicsPage/components/hooks/useCategorizeComments.js");
/* harmony import */ var _hooks_redux_useBindDispatch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../hooks/redux/useBindDispatch */ "./src/pages/hooks/redux/useBindDispatch.js");
/* harmony import */ var _redux_actions_subtopics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../redux/actions/subtopics */ "./src/redux/actions/subtopics/index.js");
/* harmony import */ var _redux_actions_comments__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../redux/actions/comments */ "./src/redux/actions/comments/index.js");
/* harmony import */ var _redux_actions_topics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../redux/actions/topics */ "./src/redux/actions/topics/index.js");
/* harmony import */ var _CommentColumn_Index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../CommentColumn/Index */ "./src/pages/MainContent/components/SubTopicsPage/components/CommentColumn/Index.jsx");
/* harmony import */ var _Style_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Style/index */ "./src/pages/MainContent/components/SubTopicsPage/components/SubTopicThread/Style/index.js");
/* harmony import */ var _CommonComponents_Tabs_Style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../CommonComponents/Tabs/Style */ "./src/pages/CommonComponents/Tabs/Style.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Style */ "./src/pages/MainContent/components/SubTopicsPage/Style/index.js");
/* harmony import */ var _hooks_permissions_useSessionType__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../hooks/permissions/useSessionType */ "./src/pages/hooks/permissions/useSessionType.js");















var SubTopicThread = function SubTopicThread() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_13__.useParams)(),
    subTopicId = _useParams.subTopicId,
    topicId = _useParams.topicId;
  var _useBindDispatch = (0,_hooks_redux_useBindDispatch__WEBPACK_IMPORTED_MODULE_4__["default"])(_redux_actions_subtopics__WEBPACK_IMPORTED_MODULE_5__["default"], _redux_actions_comments__WEBPACK_IMPORTED_MODULE_6__["default"], _redux_actions_topics__WEBPACK_IMPORTED_MODULE_7__["default"]),
    getAllComments = _useBindDispatch.getAllComments,
    getTopic = _useBindDispatch.getTopic;
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.session.currentUser;
  });
  var subtopic = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.subtopics;
  })[subTopicId];
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('all'),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
    key = _useState2[0],
    setKey = _useState2[1];
  var sessionType = (0,_hooks_permissions_useSessionType__WEBPACK_IMPORTED_MODULE_12__["default"])();
  var _useCategorizeComment = (0,_hooks_useCategorizeComments__WEBPACK_IMPORTED_MODULE_3__["default"])(),
    positiveComments = _useCategorizeComment.POSITIVE,
    neutralComments = _useCategorizeComment.NEUTRAL,
    negativeComments = _useCategorizeComment.NEGATIVE,
    allComments = _useCategorizeComment.all;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    // const { signedInViaClerk, signedInViaDID, signedInViaCivic } = sessionType
    // if (!signedInViaClerk && !signedInViaDID) return new Promise()
    if (user !== null && user !== void 0 && user.userId) {
      getAllComments(subTopicId, user.userId);
      getTopic(topicId, user.userId);
    }
  }, [user]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_9__.ThreadContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_11__.Line, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_CommonComponents_Tabs_Style__WEBPACK_IMPORTED_MODULE_10__.ThemeTab, {
    activeKey: key,
    onSelect: function onSelect(k) {
      return setKey(k);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"], {
    eventKey: "all",
    title: "All"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_9__.ColumnContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_CommentColumn_Index__WEBPACK_IMPORTED_MODULE_8__["default"], {
    topicId: topicId,
    numComments: subtopic === null || subtopic === void 0 ? void 0 : subtopic.allComments,
    comments: allComments,
    commentSentiment: "",
    color: "#6A6E70"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"], {
    eventKey: "positive",
    title: "Generally Positive"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_9__.ColumnContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_CommentColumn_Index__WEBPACK_IMPORTED_MODULE_8__["default"], {
    topicId: topicId,
    numComments: subtopic === null || subtopic === void 0 ? void 0 : subtopic.positiveComments,
    comments: positiveComments,
    commentSentiment: "Generally Positive",
    color: "#6A6E70"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"], {
    eventKey: "neutral",
    title: "Neutral"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_9__.ColumnContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_CommentColumn_Index__WEBPACK_IMPORTED_MODULE_8__["default"], {
    topicId: topicId,
    numComments: subtopic === null || subtopic === void 0 ? void 0 : subtopic.neutralComments,
    comments: neutralComments,
    commentSentiment: "Neutral",
    color: "#474A4F"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"], {
    eventKey: "negative",
    title: "Generally Negative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_9__.ColumnContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_CommentColumn_Index__WEBPACK_IMPORTED_MODULE_8__["default"], {
    topicId: topicId,
    numComments: subtopic === null || subtopic === void 0 ? void 0 : subtopic.negativeComments,
    comments: negativeComments,
    commentSentiment: "Generally Negative",
    color: "#6A6E70"
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(SubTopicThread));

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

var Container = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([" \n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 75%;\n  box-shadow: 0 0 40px -10px rgba(0, 0, 0, .4);\n\n  @media only screen and (max-width: 600px) {\n    width: 100vw;\n  }\n\n"])));
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
    if (topic) navigate("/home/topics/".concat(topic.id, "/subtopics/"));else navigate("/home/topics/".concat(subTopic.topicId, "/subtopics/").concat(subTopic.id));
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
/* harmony import */ var _hooks_redux_useBindDispatch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/redux/useBindDispatch */ "./src/pages/hooks/redux/useBindDispatch.js");
/* harmony import */ var _redux_actions_topics_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/actions/topics/index */ "./src/redux/actions/topics/index.js");
/* harmony import */ var _redux_actions_reports_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/actions/reports/index */ "./src/redux/actions/reports/index.js");
/* harmony import */ var _redux_actions_tribunal_comments_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../redux/actions/tribunal_comments/index */ "./src/redux/actions/tribunal_comments/index.js");
/* harmony import */ var _redux_actions_comments_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../redux/actions/comments/index */ "./src/redux/actions/comments/index.js");
/* harmony import */ var _generic_time_calculateTimeLeft__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../generic/time/calculateTimeLeft */ "./src/generic/time/calculateTimeLeft.js");
/* harmony import */ var _components_TribunalComments_Index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/TribunalComments/Index */ "./src/pages/Tribunal/components/TribunalComments/Index.jsx");
/* harmony import */ var _components_VotingBox_Index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/VotingBox/Index */ "./src/pages/Tribunal/components/VotingBox/Index.jsx");
/* harmony import */ var _MainContent_components_SubTopicsPage_components_Comment_Index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../MainContent/components/SubTopicsPage/components/Comment/Index */ "./src/pages/MainContent/components/SubTopicsPage/components/Comment/Index.jsx");
/* harmony import */ var _enums_content_type__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../enums/content_type */ "./src/enums/content_type.js");
/* harmony import */ var _MainContent_components_HomePage_components_Topics_components_TopicItem_Index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../MainContent/components/HomePage/components/Topics/components/TopicItem/Index */ "./src/pages/MainContent/components/HomePage/components/Topics/components/TopicItem/Index.jsx");
















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
  var _useBindDispatch = (0,_hooks_redux_useBindDispatch__WEBPACK_IMPORTED_MODULE_4__["default"])(_redux_actions_topics_index__WEBPACK_IMPORTED_MODULE_5__["default"], _redux_actions_reports_index__WEBPACK_IMPORTED_MODULE_6__["default"], _redux_actions_tribunal_comments_index__WEBPACK_IMPORTED_MODULE_7__["default"], _redux_actions_comments_index__WEBPACK_IMPORTED_MODULE_8__["default"]),
    getTopic = _useBindDispatch.getTopic,
    getReport = _useBindDispatch.getReport,
    getAllTribunalCommentsBatch = _useBindDispatch.getAllTribunalCommentsBatch,
    getComment = _useBindDispatch.getComment;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var timer;
    if (reportStats) {
      timer = setInterval(function () {
        setTimeLeft((0,_generic_time_calculateTimeLeft__WEBPACK_IMPORTED_MODULE_9__.calculateTimeLeft)(reportStats.reportPeriodEnd));
      }, 1000);
    }
    return function () {
      return clearTimeout(timer);
    };
  }, [reportStats]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (contentId && user) {
      if (contentType === _enums_content_type__WEBPACK_IMPORTED_MODULE_13__.COMMENT) getComment(contentId);
      if (contentType === _enums_content_type__WEBPACK_IMPORTED_MODULE_13__.TOPIC) getTopic(contentId, user.id);
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
    if (topic) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_MainContent_components_HomePage_components_Topics_components_TopicItem_Index__WEBPACK_IMPORTED_MODULE_14__["default"], {
      key: topic.id,
      topic: topic,
      user: user
    });
    if (comment) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_MainContent_components_SubTopicsPage_components_Comment_Index__WEBPACK_IMPORTED_MODULE_12__["default"], {
      commentData: comment.data,
      replies: comment.children
    });
    return null;
  }, [topics, comments, contentId]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_3__.OuterContainer, {
    id: "tribunal-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_3__.Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_3__.StyledScalesSvg, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h1", null, "Community Court"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_3__.StyledScalesSvg, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_3__.Timer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h4", null, reportStats !== null && reportStats !== void 0 && reportStats.reportPeriodEnd ? 'Voting Period Timing Remaining' : 'Voting Has Ended'), '\n', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, !Object.keys(timeLeft) && reportStats ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, "Time Is Up!") : timerComponents)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_3__.InnerContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_3__.StyledPillarSvg, null), Content, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_3__.StyledPillarSvg, null)), reportStats && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_VotingBox_Index__WEBPACK_IMPORTED_MODULE_11__["default"], {
    contentId: contentId,
    reportStats: reportStats,
    votingTimeUp: votingTimeUp
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_3__.ReportStatsContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_3__.ReportStatItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h2", null, "Toxic Reports"), reportStats && (reportStats.numToxicReports || 0)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_3__.ReportStatItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h2", null, "Personal Attack Reports"), reportStats && (reportStats.numPersonalAttackReports || 0)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_3__.ReportStatItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h2", null, "Spam Reports"), reportStats && (reportStats.numSpamReports || 0))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_TribunalComments_Index__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ0cscUVBQWMsQ0FBQ00sS0FBSyxDQUFDLENBQUM7SUFBQSxFQUFDO0VBQUE7QUFBQTtBQUVoRCxJQUFNaGMsV0FBVyxHQUFHLFNBQWRBLFdBQVcsQ0FBSUMsVUFBVTtFQUFBLE9BQUssVUFBQzJULFFBQVE7SUFBQSxPQUFLNEksNkVBQTRCLENBQUN2YyxVQUFVLENBQUMsQ0FDOUY2YixJQUFJLENBQUMsVUFBQ0MsR0FBRztNQUFBLE9BQUtuSSxRQUFRLENBQUM4SSxxQkFBcUIsQ0FBQ1gsR0FBRyxDQUFDalksSUFBSSxDQUFDLENBQUM7SUFBQSxFQUFDLFNBQ25ELENBQUMsVUFBQ2tZLEtBQUs7TUFBQSxPQUFLVCx1REFBVyxDQUFDRyxxRUFBYyxDQUFDTSxLQUFLLENBQUMsQ0FBQztJQUFBLEVBQUM7RUFBQTtBQUFBO0FBRXZELGlFQUFlO0VBQ2JyYyxjQUFjLEVBQWRBLGNBQWM7RUFDZEcsZUFBZSxFQUFmQSxlQUFlO0VBQ2ZFLFdBQVcsRUFBWEE7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvYXBpL3YxL3JlY3MvcmVjc19hcGlfdXRpbC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9hcGkvdjEvc3VidG9waWNzL3N1YnRvcGljc19hcGlfdXRpbC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9nZW5lcmljL3JlZ2V4L3V1aWQuanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvZ2VuZXJpYy90aW1lL2NhbGN1bGF0ZVRpbWVMZWZ0LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL0NvbW1vbkNvbXBvbmVudHMvQWN0aW9uVG9vbGJhcnMvQ29tbWVudFRvb2xiYXIvSW5kZXguanN4Iiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL0NvbW1vbkNvbXBvbmVudHMvQWN0aW9uVG9vbGJhcnMvQ29tbWVudFRvb2xiYXIvY29tcG9uZW50cy9DaXZpbGl0eUJ1dHRvbi9JbmRleC5qc3giLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvQ29tbW9uQ29tcG9uZW50cy9BY3Rpb25Ub29sYmFycy9Db21tZW50VG9vbGJhci9jb21wb25lbnRzL0NpdmlsaXR5QnV0dG9uL2hvb2tzL3VzZVVwZGF0ZUNvbW1lbnRDaXZpbGl0eS5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9Db21tb25Db21wb25lbnRzL0FjdGlvblRvb2xiYXJzL0NvbW1lbnRUb29sYmFyL2NvbXBvbmVudHMvQ29tbWVudEJ1dHRvbi9JbmRleC5qc3giLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvQ29tbW9uQ29tcG9uZW50cy9Gb3JtL1JhbmdlU2xpZGVyL0luZGV4LmpzeCIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9Db21tb25Db21wb25lbnRzL0Zvcm0vUmFuZ2VTbGlkZXIvU3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvQ29tbW9uQ29tcG9uZW50cy9Gb3JtL1JhbmdlU2xpZGVyL2hvb2tzL3VzZU9uUmFuZ2VDaGFuZ2UuanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvTWFpbkNvbnRlbnQvY29tcG9uZW50cy9Ob3RpZmljYXRpb25zUGFnZS9JbmRleC5qc3giLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvTWFpbkNvbnRlbnQvY29tcG9uZW50cy9Ob3RpZmljYXRpb25zUGFnZS9TdHlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9NYWluQ29udGVudC9jb21wb25lbnRzL05vdGlmaWNhdGlvbnNQYWdlL2NvbXBvbmVudHMvQ29tbWVudENpdmlsaXR5Tm90aWZpY2F0aW9uL0luZGV4LmpzeCIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9NYWluQ29udGVudC9jb21wb25lbnRzL05vdGlmaWNhdGlvbnNQYWdlL2NvbXBvbmVudHMvRm9sbG93Tm90aWZpY2F0aW9uL0luZGV4LmpzeCIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9NYWluQ29udGVudC9jb21wb25lbnRzL05vdGlmaWNhdGlvbnNQYWdlL2NvbXBvbmVudHMvTGlrZU5vdGlmaWNhdGlvbi9JbmRleC5qc3giLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvTWFpbkNvbnRlbnQvY29tcG9uZW50cy9Ob3RpZmljYXRpb25zUGFnZS9jb21wb25lbnRzL01lbnVUaW1lL0luZGV4LmpzeCIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9NYWluQ29udGVudC9jb21wb25lbnRzL05vdGlmaWNhdGlvbnNQYWdlL2NvbXBvbmVudHMvTWVudVRpbWUvU3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvTWFpbkNvbnRlbnQvY29tcG9uZW50cy9Ob3RpZmljYXRpb25zUGFnZS9jb21wb25lbnRzL05vdGlmaWNhdGlvbkl0ZW0vSW5kZXguanN4Iiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL01haW5Db250ZW50L2NvbXBvbmVudHMvTm90aWZpY2F0aW9uc1BhZ2UvY29tcG9uZW50cy9Ob3RpZmljYXRpb25JdGVtL1N0eWxlL2luZGV4LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL01haW5Db250ZW50L2NvbXBvbmVudHMvTm90aWZpY2F0aW9uc1BhZ2UvY29tcG9uZW50cy9TdHlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9NYWluQ29udGVudC9jb21wb25lbnRzL05vdGlmaWNhdGlvbnNQYWdlL2NvbXBvbmVudHMvVG9waWNMaWtlTm90aWZpY2F0aW9uL0luZGV4LmpzeCIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9NYWluQ29udGVudC9jb21wb25lbnRzL1JpZ2h0U2VjdGlvbi9jb21wb25lbnRzL1JlY29tbWVuZGF0aW9ucy9JbmRleC5qc3giLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvTWFpbkNvbnRlbnQvY29tcG9uZW50cy9SaWdodFNlY3Rpb24vY29tcG9uZW50cy9SZWNvbW1lbmRhdGlvbnMvU3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvTWFpbkNvbnRlbnQvY29tcG9uZW50cy9TdWJUb3BpY3NQYWdlL0luZGV4LmpzeCIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9NYWluQ29udGVudC9jb21wb25lbnRzL1N1YlRvcGljc1BhZ2UvU3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvTWFpbkNvbnRlbnQvY29tcG9uZW50cy9TdWJUb3BpY3NQYWdlL2NvbXBvbmVudHMvQ29tbWVudC9JbmRleC5qc3giLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvTWFpbkNvbnRlbnQvY29tcG9uZW50cy9TdWJUb3BpY3NQYWdlL2NvbXBvbmVudHMvQ29tbWVudC9TdHlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9NYWluQ29udGVudC9jb21wb25lbnRzL1N1YlRvcGljc1BhZ2UvY29tcG9uZW50cy9Db21tZW50Q29sdW1uL0luZGV4LmpzeCIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9NYWluQ29udGVudC9jb21wb25lbnRzL1N1YlRvcGljc1BhZ2UvY29tcG9uZW50cy9Db21tZW50Q29sdW1uL1N0eWxlL2luZGV4LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL01haW5Db250ZW50L2NvbXBvbmVudHMvU3ViVG9waWNzUGFnZS9jb21wb25lbnRzL0NvbW1lbnRUaHJlYWQvSW5kZXguanN4Iiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL01haW5Db250ZW50L2NvbXBvbmVudHMvU3ViVG9waWNzUGFnZS9jb21wb25lbnRzL0NvbW1lbnRUaHJlYWQvU3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvTWFpbkNvbnRlbnQvY29tcG9uZW50cy9TdWJUb3BpY3NQYWdlL2NvbXBvbmVudHMvSGVhZGVyL0luZGV4LmpzeCIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9NYWluQ29udGVudC9jb21wb25lbnRzL1N1YlRvcGljc1BhZ2UvY29tcG9uZW50cy9IZWFkZXIvU3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvTWFpbkNvbnRlbnQvY29tcG9uZW50cy9TdWJUb3BpY3NQYWdlL2NvbXBvbmVudHMvUGFyZW50Q29tbWVudC9JbmRleC5qc3giLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvTWFpbkNvbnRlbnQvY29tcG9uZW50cy9TdWJUb3BpY3NQYWdlL2NvbXBvbmVudHMvU3ViVG9waWNUaHJlYWQvSW5kZXguanN4Iiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL01haW5Db250ZW50L2NvbXBvbmVudHMvU3ViVG9waWNzUGFnZS9jb21wb25lbnRzL1N1YlRvcGljVGhyZWFkL1N0eWxlL2luZGV4LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL01haW5Db250ZW50L2NvbXBvbmVudHMvU3ViVG9waWNzUGFnZS9jb21wb25lbnRzL1N1YlRvcGljc0xpc3QvSW5kZXguanN4Iiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL01haW5Db250ZW50L2NvbXBvbmVudHMvU3ViVG9waWNzUGFnZS9jb21wb25lbnRzL1N1YlRvcGljc0xpc3QvU3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvTWFpbkNvbnRlbnQvY29tcG9uZW50cy9TdWJUb3BpY3NQYWdlL2NvbXBvbmVudHMvU3ViVG9waWNzUm91dGVyL0luZGV4LmpzeCIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9NYWluQ29udGVudC9jb21wb25lbnRzL1N1YlRvcGljc1BhZ2UvY29tcG9uZW50cy9TdWJUb3BpY3NUYWJsZS9JbmRleC5qc3giLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvTWFpbkNvbnRlbnQvY29tcG9uZW50cy9TdWJUb3BpY3NQYWdlL2NvbXBvbmVudHMvU3ViVG9waWNzVGFibGUvU3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvTWFpbkNvbnRlbnQvY29tcG9uZW50cy9TdWJUb3BpY3NQYWdlL2NvbXBvbmVudHMvU3ViVG9waWNzVGFibGUvU3ViVG9waWNzSXRlbS9JbmRleC5qc3giLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvTWFpbkNvbnRlbnQvY29tcG9uZW50cy9TdWJUb3BpY3NQYWdlL2NvbXBvbmVudHMvaG9va3MvdXNlQ2F0ZWdvcml6ZUNvbW1lbnRzLmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL01haW5Db250ZW50L2NvbXBvbmVudHMvU3ViVG9waWNzUGFnZS9ob29rcy91c2VHb1RvU3ViVG9waWMuanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvTWFpbkNvbnRlbnQvY29tcG9uZW50cy9UcmlidW5hbE5vdGlmaWNhdGlvbnNQYWdlL0luZGV4LmpzeCIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9NYWluQ29udGVudC9jb21wb25lbnRzL1RyaWJ1bmFsTm90aWZpY2F0aW9uc1BhZ2UvU3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvTWFpbkNvbnRlbnQvY29tcG9uZW50cy9UcmlidW5hbE5vdGlmaWNhdGlvbnNQYWdlL2NvbXBvbmVudHMvTWVudVRpbWUvSW5kZXguanN4Iiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL01haW5Db250ZW50L2NvbXBvbmVudHMvVHJpYnVuYWxOb3RpZmljYXRpb25zUGFnZS9jb21wb25lbnRzL01lbnVUaW1lL1N0eWxlL2luZGV4LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL01haW5Db250ZW50L2NvbXBvbmVudHMvVHJpYnVuYWxOb3RpZmljYXRpb25zUGFnZS9jb21wb25lbnRzL05vdGlmaWNhdGlvbkl0ZW0vSW5kZXguanN4Iiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL01haW5Db250ZW50L2NvbXBvbmVudHMvVHJpYnVuYWxOb3RpZmljYXRpb25zUGFnZS9jb21wb25lbnRzL05vdGlmaWNhdGlvbkl0ZW0vU3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvTWFpbkNvbnRlbnQvY29tcG9uZW50cy9UcmlidW5hbE5vdGlmaWNhdGlvbnNQYWdlL2NvbXBvbmVudHMvU3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvTWFpbkNvbnRlbnQvY29tcG9uZW50cy9UcmlidW5hbE5vdGlmaWNhdGlvbnNQYWdlL2NvbXBvbmVudHMvVHJpYnVuYWxTZWxlY3Rpb25Ob3RpZmljYXRpb24vSW5kZXguanN4Iiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL01haW5Db250ZW50L2NvbXBvbmVudHMvVHJpYnVuYWxOb3RpZmljYXRpb25zUGFnZS9jb21wb25lbnRzL1VzZXJDb250ZW50UmVwb3J0ZWROb3RpZmljYXRpb24vSW5kZXguanN4Iiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL1JlY29tbWVuZGF0aW9uc0xpc3QvSW5kZXguanN4Iiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL1JlY29tbWVuZGF0aW9uc0xpc3QvU3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvUmVjb21tZW5kYXRpb25zTGlzdC9jb21wb25lbnRzL1JlY0l0ZW0vSW5kZXguanN4Iiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL1JlY29tbWVuZGF0aW9uc0xpc3QvY29tcG9uZW50cy9SZWNJdGVtL1N0eWxlL2luZGV4LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL1JlY29tbWVuZGF0aW9uc0xpc3QvY29tcG9uZW50cy9SZWNJdGVtL2hvb2tzL3VzZU5hdmlnYXRlVG9QYWdlLmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL1RyaWJ1bmFsL0luZGV4LmpzeCIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9UcmlidW5hbC9TdHlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9UcmlidW5hbC9jb21wb25lbnRzL1RyaWJ1bmFsQ29tbWVudHMvSW5kZXguanN4Iiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL1RyaWJ1bmFsL2NvbXBvbmVudHMvVHJpYnVuYWxDb21tZW50cy9TdHlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9UcmlidW5hbC9jb21wb25lbnRzL1RyaWJ1bmFsQ29tbWVudHMvaG9va3MvdXNlQ2F0ZWdvcml6ZUNvbW1lbnRzLmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL1RyaWJ1bmFsL2NvbXBvbmVudHMvVm90aW5nQm94L0luZGV4LmpzeCIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9UcmlidW5hbC9jb21wb25lbnRzL1ZvdGluZ0JveC9TdHlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9WaWRlb1Nob3dQYWdlL0luZGV4LmpzeCIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9WaWRlb1Nob3dQYWdlL1N0eWxlL2luZGV4LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL1ZpZGVvU2hvd1BhZ2UvaG9va3MvdXNlVXBkYXRlTGlrZXMuanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvaG9va3Mvcm91dGluZy91c2VHb1RvQ29tbWVudFRocmVhZC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9ob29rcy91c2VPcGVuTW9kYWxXaXRoTG9jYXRpb24uanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcmVkdXgvYWN0aW9ucy9yZWNzL2luZGV4LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3JlZHV4L2FjdGlvbnMvcmVwb3J0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9yZWR1eC9hY3Rpb25zL3N1YnRvcGljcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyBCQUNLRU5EX0RFViB9IGZyb20gJy4uLy4uL2VuZHBvaW50cy9lbmRwb2ludHMnXG5cbmV4cG9ydCBjb25zdCBnZXRBbGxSZWNzID0gKHRhcmdldENvbnRlbnRJZCkgPT4gYXhpb3MuZ2V0KGAke0JBQ0tFTkRfREVWfS9yZWNvbW1lbmRhdGlvbnM/dGFyZ2V0Q29udGVudElkPSR7dGFyZ2V0Q29udGVudElkfWApXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyBCQUNLRU5EX0RFViB9IGZyb20gJy4uLy4uL2VuZHBvaW50cy9lbmRwb2ludHMnXG5cbmV4cG9ydCBjb25zdCBjcmVhdGVTdWJUb3BpYyA9IChzdWJUb3BpY0RhdGEpID0+IGF4aW9zLnBvc3QoYCR7QkFDS0VORF9ERVZ9L3N1YnRvcGljc2AsIHN1YlRvcGljRGF0YSlcblxuZXhwb3J0IGNvbnN0IGdldEFsbFN1YlRvcGljcyA9ICh0b3BpY0lkKSA9PiBheGlvcy5nZXQoYCR7QkFDS0VORF9ERVZ9L3N1YnRvcGljcz90b3BpY0lkPSR7dG9waWNJZH1gKVxuXG5leHBvcnQgY29uc3QgZ2V0U3ViVG9waWMgPSAoc3ViVG9waWNJZCkgPT4gYXhpb3MuZ2V0KGAke0JBQ0tFTkRfREVWfS9zdWJ0b3BpY3MvJHtzdWJUb3BpY0lkfWApXG4iLCJleHBvcnQgY29uc3QgdXVpZFJlZ0V4ID0gbmV3IFJlZ0V4cCgvXFxiWzAtOWEtZl17OH1cXGItWzAtOWEtZl17NH0tWzAtOWEtZl17NH0tWzAtOWEtZl17NH0tXFxiWzAtOWEtZl17MTJ9XFxiL2cpXG4iLCJleHBvcnQgY29uc3QgY2FsY3VsYXRlVGltZUxlZnQgPSAocmVwb3J0RW5kVGltZSkgPT4ge1xuICAvLyBjb25zdCB5ZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpXG4gIGNvbnN0IGRpZmZlcmVuY2UgPSArbmV3IERhdGUocmVwb3J0RW5kVGltZSkgLSArbmV3IERhdGUoKVxuXG4gIGxldCB0aW1lTGVmdCA9IHt9XG5cbiAgaWYgKGRpZmZlcmVuY2UgPiAwKSB7XG4gICAgdGltZUxlZnQgPSB7XG4gICAgICBkYXlzOiBNYXRoLmZsb29yKGRpZmZlcmVuY2UgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpLFxuICAgICAgaG91cnM6IE1hdGguZmxvb3IoKGRpZmZlcmVuY2UgLyAoMTAwMCAqIDYwICogNjApKSAlIDI0KSxcbiAgICAgIG1pbnV0ZXM6IE1hdGguZmxvb3IoKGRpZmZlcmVuY2UgLyAxMDAwIC8gNjApICUgNjApLFxuICAgICAgc2Vjb25kczogTWF0aC5mbG9vcigoZGlmZmVyZW5jZSAvIDEwMDApICUgNjApLFxuICAgIH1cbiAgfVxuICByZXR1cm4gdGltZUxlZnRcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBtZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG5pbXBvcnQgVXBWb3RlQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvVXBWb3RlQnV0dG9uL0luZGV4J1xuaW1wb3J0IERvd25Wb3RlQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvRG93blZvdGVCdXR0b24vSW5kZXgnXG5pbXBvcnQgQ29tbWVudEJ1dHRvbiBmcm9tICcuL2NvbXBvbmVudHMvQ29tbWVudEJ1dHRvbi9JbmRleCdcbmltcG9ydCBDaXZpbGl0eUJ1dHRvbiBmcm9tICcuL2NvbXBvbmVudHMvQ2l2aWxpdHlCdXR0b24vSW5kZXgnXG5pbXBvcnQgVHJpYnVuYWxCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9UcmlidW5hbEJ1dHRvbi9JbmRleCdcblxuaW1wb3J0IHsgQ29udGFpbmVyLCBMZWZ0LCBSaWdodCB9IGZyb20gJy4uL1N0eWxlL2luZGV4J1xuaW1wb3J0IHsgQ09NTUVOVCwgVFJJQlVOQUxfQ09NTUVOVCB9IGZyb20gJy4uLy4uLy4uLy4uL2VudW1zL2NvbnRlbnRfdHlwZSdcblxuY29uc3QgQ29tbWVudEFjdGlvblRvb2xiYXIgPSAoe1xuICBsaWtlcywgY29tbWVudCwgdXNlcixcbn0pID0+IHtcbiAgY29uc3QgeyB0b3BpY0lkLCBzdWJUb3BpY0lkLCAuLi5wYXJhbXMgfSA9IHVzZVBhcmFtcygpXG4gIGNvbnN0IGlzVHJpYnVuYWxDb21tZW50ID0gY29tbWVudC5jb21tZW50VHlwZVxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8TGVmdD5cbiAgICAgICAgPFVwVm90ZUJ1dHRvblxuICAgICAgICAgIGNvbnRlbnQ9e2NvbW1lbnR9XG4gICAgICAgICAgdXNlcj17dXNlcn1cbiAgICAgICAgICBjb250ZW50VHlwZT17aXNUcmlidW5hbENvbW1lbnQgPyBUUklCVU5BTF9DT01NRU5UIDogQ09NTUVOVH1cbiAgICAgICAgLz5cbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAge2xpa2VzIHx8IDB9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPERvd25Wb3RlQnV0dG9uXG4gICAgICAgICAgY29udGVudD17Y29tbWVudH1cbiAgICAgICAgICB1c2VyPXt1c2VyfVxuICAgICAgICAgIGNvbnRlbnRUeXBlPXtpc1RyaWJ1bmFsQ29tbWVudCA/IFRSSUJVTkFMX0NPTU1FTlQgOiBDT01NRU5UfVxuICAgICAgICAvPlxuICAgICAgICB7IHBhcmFtc1snKiddICYmIDxDb21tZW50QnV0dG9uIGNvbW1lbnQ9e2NvbW1lbnR9IC8+fVxuICAgICAgICA8Q2l2aWxpdHlCdXR0b24gY29tbWVudD17Y29tbWVudH0gLz5cbiAgICAgIDwvTGVmdD5cbiAgICAgIDxSaWdodD5cbiAgICAgICAgPFRyaWJ1bmFsQnV0dG9uIGNvbnRlbnRJZD17Y29tbWVudD8uaWR9IC8+XG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgIHtsaWtlcyB8fCAwfVxuICAgICAgICAgIHsnICd9XG4gICAgICAgICAgbGlrZXNcbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9SaWdodD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBtZW1vKENvbW1lbnRBY3Rpb25Ub29sYmFyKVxuIiwiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvY2xpY2stZXZlbnRzLWhhdmUta2V5LWV2ZW50cyAqL1xuLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbm8tbm9uaW50ZXJhY3RpdmUtZWxlbWVudC1pbnRlcmFjdGlvbnMgKi9cbmltcG9ydCBSZWFjdCwgeyBtZW1vLCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJhbmdlU2xpZGVyIGZyb20gJy4uLy4uLy4uLy4uL0Zvcm0vUmFuZ2VTbGlkZXIvSW5kZXgnXG5pbXBvcnQgUG9wb3ZlclN0aWNrT25Ib3ZlciBmcm9tICcuLi8uLi8uLi8uLi9Qb3BvdmVyU3RpY2tPbkhvdmVyL0luZGV4J1xuaW1wb3J0IHVzZVVwZGF0ZUNvbW1lbnRDaXZpbGl0eSBmcm9tICcuL2hvb2tzL3VzZVVwZGF0ZUNvbW1lbnRDaXZpbGl0eSdcblxuY29uc3QgQ2l2aWxpdHlCdXR0b24gPSAoeyBjb21tZW50IH0pID0+IHtcbiAgY29uc3QgW3Nob3dQb3BvdmVyLCBzZXRTaG93UG9wb3Zlcl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3Qgb25DbGljayA9ICgpID0+IHNldFNob3dQb3BvdmVyKChwcmV2KSA9PiAhcHJldilcbiAgY29uc3QgdXBkYXRlQ29tbWVudENpdmlsaXR5ID0gdXNlVXBkYXRlQ29tbWVudENpdmlsaXR5KGNvbW1lbnQpXG4gIGNvbnN0IEljb24gPSB1c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoIWNvbW1lbnQgfHwgY29tbWVudC5jaXZpbGl0eSA9PT0gMCkgcmV0dXJuIDxpbWcgb25DbGljaz17b25DbGlja30gYWx0PVwiXCIgc3JjPVwiaHR0cHM6Ly9jaXZpbC1kZXYuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vYXNzZXRzL2hhbmRzaGFrZS5wbmdcIiAvPlxuICAgIGlmIChjb21tZW50LmNpdmlsaXR5ID4gMCkgcmV0dXJuIDxpbWcgb25DbGljaz17b25DbGlja30gYWx0PVwiXCIgc3JjPVwiaHR0cHM6Ly9jaXZpbC1kZXYuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vYXNzZXRzL2hhbmRzaGFrZS1jbGlja2VkLnBuZ1wiIC8+XG4gICAgcmV0dXJuIDxpbWcgYWx0PVwiXCIgb25DbGljaz17b25DbGlja30gc3JjPVwiaHR0cHM6Ly9jaXZpbC1kZXYuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vYXNzZXRzL25vLWhhbmRzaGFrZS1jbGlja2VkLnBuZ1wiIC8+XG4gIH0sIFtjb21tZW50XSlcbiAgcmV0dXJuIChcbiAgICA8UG9wb3ZlclN0aWNrT25Ib3ZlclxuICAgICAgdHJpZ2dlcj17Wydob3ZlcicsICdjbGljayddfVxuICAgICAgY29tcG9uZW50PXsoXG4gICAgICAgIDxSYW5nZVNsaWRlclxuICAgICAgICAgIGNpdmlsaXR5PXtjb21tZW50LmNpdmlsaXR5fVxuICAgICAgICAgIHVwZGF0ZUNvbW1lbnRDaXZpbGl0eT17dXBkYXRlQ29tbWVudENpdmlsaXR5fVxuICAgICAgICAvPlxuICAgICl9XG4gICAgICBwbGFjZW1lbnQ9XCJ0b3BcIlxuICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiB7IH19XG4gICAgICBkZWxheT17MjAwfVxuICAgICAgc2hvd1BvcG92ZXI9e3Nob3dQb3BvdmVyfVxuICAgICAgc2V0U2hvd1BvcG92ZXI9e3NldFNob3dQb3BvdmVyfVxuICAgID5cbiAgICAgIHtcbiAgICAgICAgSWNvblxuICAgICAgfVxuICAgIDwvUG9wb3ZlclN0aWNrT25Ib3Zlcj5cblxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW8oQ2l2aWxpdHlCdXR0b24pXG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCBjb21tZW50QWN0aW9ucyBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9yZWR1eC9hY3Rpb25zL2NvbW1lbnRzJ1xuaW1wb3J0IHRyaWJ1bmFsQ29tbWVudEFjdGlvbnMgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy90cmlidW5hbF9jb21tZW50cy9pbmRleCdcbmltcG9ydCB1c2VCaW5kRGlzcGF0Y2ggZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vaG9va3MvcmVkdXgvdXNlQmluZERpc3BhdGNoJ1xuXG5leHBvcnQgZGVmYXVsdCAoY29tbWVudCkgPT4ge1xuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VMb2NhdGlvbigpXG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3RvcigocykgPT4gcy5zZXNzaW9uLmN1cnJlbnRVc2VyKVxuICBjb25zdCB7XG4gICAgdXBkYXRlQ29tbWVudENpdmlsaXR5LFxuICAgIHVwZGF0ZVRyaWJ1bmFsQ29tbWVudENpdmlsaXR5LFxuICB9ID0gdXNlQmluZERpc3BhdGNoKHRyaWJ1bmFsQ29tbWVudEFjdGlvbnMsIGNvbW1lbnRBY3Rpb25zKVxuXG4gIHJldHVybiB1c2VDYWxsYmFjaygoZSkgPT4ge1xuICAgIGNvbnN0IGlzVHJpYnVuYWwgPSBwYXRobmFtZS5pbmNsdWRlcygndHJpYnVuYWwnKVxuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBnaXZpbmdVc2VySWQ6IHVzZXIuaWQsXG4gICAgICByZWNlaXZpbmdVc2VySWQ6IGNvbW1lbnQuY3JlYXRlZEJ5SWQsXG4gICAgICBjb21tZW50SWQ6IGNvbW1lbnQuaWQsXG4gICAgICB2YWx1ZTogTnVtYmVyKGUuY3VycmVudFRhcmdldC52YWx1ZSksXG4gICAgfVxuICAgIHJldHVybiBpc1RyaWJ1bmFsID8gdXBkYXRlVHJpYnVuYWxDb21tZW50Q2l2aWxpdHkoZGF0YSkgOiB1cGRhdGVDb21tZW50Q2l2aWxpdHkoZGF0YSlcbiAgfSwgW2NvbW1lbnQuY2l2aWxdKVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IG1lbW8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICcuLi8uLi8uLi8uLi9JY29uQnV0dG9uL0luZGV4J1xuaW1wb3J0IHsgQ29tbWVudFN2ZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3N2Z3Mvc3ZncydcbmltcG9ydCB1c2VPcGVuTW9kYWwgZnJvbSAnLi4vLi4vLi4vLi4vLi4vaG9va3MvdXNlT3Blbk1vZGFsJ1xuaW1wb3J0IHsgUkVQTFkgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9BcHAvTW9kYWwvSW5kZXgnXG5cbmNvbnN0IENvbW1lbnRCdXR0b24gPSAoeyBjb21tZW50IH0pID0+IHtcbiAgY29uc3QgeyBjb250ZW50SWQgfSA9IHVzZVBhcmFtcygpXG4gIGNvbnN0IG9wZW5Db21tZW50TW9kYWwgPSB1c2VPcGVuTW9kYWwoUkVQTFksIHtcbiAgICByZXBseVR5cGU6IGNvbW1lbnQuY29tbWVudFR5cGUgPyAnVFJJQlVOQUxfQ09NTUVOVF9SRVBMWScgOiAnQ09NTUVOVF9SRVBMWScsXG4gICAgY29tbWVudElkOiBjb21tZW50LmlkLFxuICAgIHJvb3RQYXJlbnRDb21tZW50SWQ6IGNvbW1lbnQucm9vdElkIHx8IGNvbW1lbnQuaWQsXG4gICAgY29tbWVudFR5cGU6IGNvbW1lbnQuY29tbWVudFR5cGUsXG4gICAgdHJpYnVuYWxDb21tZW50VW5kZXJSZXZpZXdJZDogY29udGVudElkLFxuICB9KVxuXG4gIHJldHVybiAoXG4gICAgPEljb25CdXR0b24gaWNvbj17PENvbW1lbnRTdmcgLz59IG9uQ2xpY2s9e29wZW5Db21tZW50TW9kYWx9IC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVtbyhDb21tZW50QnV0dG9uKVxuIiwiaW1wb3J0IFJlYWN0LCB7IG1lbW8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB1c2VPblJhbmdlQ2hhbmdlIGZyb20gJy4vaG9va3MvdXNlT25SYW5nZUNoYW5nZSdcblxuaW1wb3J0IHsgUmFuZ2UsIE1lc3NhZ2UsIENvbnRhaW5lciB9IGZyb20gJy4vU3R5bGUvaW5kZXgnXG5cbmNvbnN0IFJhbmdlU2xpZGVyID0gKHsgY2l2aWxpdHksIHVwZGF0ZUNvbW1lbnRDaXZpbGl0eSB9KSA9PiB7XG4gIGNvbnN0IHsgb25TbGlkZXJDaGFuZ2UsIHNsaWRlclZhbHVlIH0gPSB1c2VPblJhbmdlQ2hhbmdlKClcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIG9uQ2xpY2s9eyhlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfT5cbiAgICAgIDxSYW5nZSBzbGlkZXJWYWx1ZT17c2xpZGVyVmFsdWV9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhbmdlLXZhbHVlXCIgaWQ9XCJyYW5nZVZcIiAvPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInJhbmdlXCIgbWluPXstM30gbWF4PXszfSBzdGVwPXswLjF9IGRlZmF1bHRWYWx1ZT17Y2l2aWxpdHl9IG9uQ2hhbmdlPXtvblNsaWRlckNoYW5nZX0gb25Nb3VzZVVwPXt1cGRhdGVDb21tZW50Q2l2aWxpdHl9IG9uVG91Y2hFbmQ9e3VwZGF0ZUNvbW1lbnRDaXZpbGl0eX0gLz5cbiAgICAgIDwvUmFuZ2U+XG4gICAgICA8TWVzc2FnZT5cbiAgICAgICAge3NsaWRlclZhbHVlIDwgMCAmJiBgUmVtb3ZpbmcgJHtzbGlkZXJWYWx1ZX0gQ2l2aWxpdHlgfVxuICAgICAgICB7c2xpZGVyVmFsdWUgPiAwICYmIGBHaXZpbmcgKyR7c2xpZGVyVmFsdWV9IENpdmlsaXR5YH1cbiAgICAgIDwvTWVzc2FnZT5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBtZW1vKFJhbmdlU2xpZGVyKVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdGFicyAqL1xuXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgKi9cbiAgaGVpZ2h0OiAyLjV2dztcbiAgd2lkdGg6IDEwdnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gXG5cbmV4cG9ydCBjb25zdCBNZXNzYWdlID0gc3R5bGVkKCdkaXYnKWBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIGJvdHRvbTogNSU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xuYFxuXG5leHBvcnQgY29uc3QgUmFuZ2UgPSBzdHlsZWQoJ2RpdicpYFxuICAvKiBiYWNrZ3JvdW5kOiB2YXIoLS1tLXByaW1hcnktcGVyaXBoZXJhbHMtY29sb3IpOyAqL1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgLyogYm9yZGVyLXJhZGl1czogNXJlbTsgKi9cbiAgYm94LXNoYWRvdzogMnB4IDVweCA1cHggcmdiYShibGFjaywgMC4zKTtcblxuICAucmFuZ2UtdmFsdWUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC01MCU7XG4gIH1cbiAgLnJhbmdlLXZhbHVlIHNwYW4ge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMjRweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2xlcmstcHJpbWFyeSk7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB9XG4gIC5yYW5nZS12YWx1ZSBzcGFuOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlci10b3A6IDEwcHggc29saWQgdmFyKC0tY2xlcmstcHJpbWFyeSk7XG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICB0b3A6IDEwMCU7XG4gICAgbGVmdDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICAgIG1hcmdpbi10b3A6IC0xcHg7XG4gIH1cblxuICBpbnB1dFt0eXBlPVwicmFuZ2VcIl0ge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICBtYXJnaW46IDIwcHggMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBpbnB1dFt0eXBlPVwicmFuZ2VcIl06Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbiAgaW5wdXRbdHlwZT1cInJhbmdlXCJdOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjayB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGFuaW1hdGU6IDAuMnM7XG4gICAgYmFja2dyb3VuZDogJHsoeyBzbGlkZXJWYWx1ZSB9KSA9PiB7XG4gICAgaWYgKHNsaWRlclZhbHVlID09PSAtMSB8fCBzbGlkZXJWYWx1ZSA9PT0gLTIpIHJldHVybiAndmFyKC0tbS1kYW5nZXItY29sb3IpJ1xuICAgIGlmIChzbGlkZXJWYWx1ZSA9PT0gLTMpIHJldHVybiAncmVkJ1xuICAgIGlmIChzbGlkZXJWYWx1ZSA9PT0gMSB8fCBzbGlkZXJWYWx1ZSA9PT0gMikgcmV0dXJuICd2YXIoLS1tLXByaW1hcnktYnRuLWNvbG9yKSdcbiAgICBpZiAoc2xpZGVyVmFsdWUgPT09IDMpIHJldHVybiAnZ3JlZW4nXG4gICAgcmV0dXJuICd2YXIoLS1jbGVyay1wcmltYXJ5KSdcbiAgfX07XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgfVxuICBpbnB1dFt0eXBlPVwicmFuZ2VcIl06Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogMCAwIDRweCAwIHJnYmEoMCwgMCwgMCwgMSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICBtYXJnaW4tdG9wOiAtOHB4O1xuICB9XG4gIGlucHV0W3R5cGU9XCJyYW5nZVwiXTpmb2N1czo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2sge1xuICAgIGJhY2tncm91bmQ6ICR7KHsgc2xpZGVyVmFsdWUgfSkgPT4ge1xuICAgIGlmIChzbGlkZXJWYWx1ZSA9PT0gLTEgfHwgc2xpZGVyVmFsdWUgPT09IC0yKSByZXR1cm4gJ3ZhcigtLW0tZGFuZ2VyLWNvbG9yKSdcbiAgICBpZiAoc2xpZGVyVmFsdWUgPT09IC0zKSByZXR1cm4gJ3JlZCdcbiAgICBpZiAoc2xpZGVyVmFsdWUgPT09IDEgfHwgc2xpZGVyVmFsdWUgPT09IDIpIHJldHVybiAndmFyKC0tbS1wcmltYXJ5LWJ0bi1jb2xvciknXG4gICAgaWYgKHNsaWRlclZhbHVlID09PSAzKSByZXR1cm4gJ2dyZWVuJ1xuICAgIHJldHVybiAndmFyKC0tY2xlcmstcHJpbWFyeSknXG4gIH19O1xuICB9XG5gXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCBbc2xpZGVyVmFsdWUsIHNldFNsaWRlclZhbHVlXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IG9uU2xpZGVyQ2hhbmdlID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcbiAgICBjb25zdCByYW5nZSA9IGUuY3VycmVudFRhcmdldFxuICAgIGNvbnN0IHJhbmdlViA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYW5nZVYnKVxuICAgIGNvbnN0IG5ld1ZhbHVlID0gTnVtYmVyKCgocmFuZ2UudmFsdWUgLSByYW5nZS5taW4pICogMTAwKSAvIChyYW5nZS5tYXggLSByYW5nZS5taW4pKVxuICAgIGNvbnN0IG5ld1Bvc2l0aW9uID0gMTAgLSAobmV3VmFsdWUgKiAwLjIpXG4gICAgcmFuZ2VWLmlubmVySFRNTCA9IGA8c3Bhbj4ke3JhbmdlLnZhbHVlfTwvc3Bhbj5gXG4gICAgcmFuZ2VWLnN0eWxlLmxlZnQgPSBgY2FsYygke25ld1ZhbHVlfSUgKyAoJHtuZXdQb3NpdGlvbn1weCkpYFxuICAgIHNldFNsaWRlclZhbHVlKE51bWJlcihyYW5nZS52YWx1ZSkpXG4gIH0sIFtdKVxuICByZXR1cm4geyBvblNsaWRlckNoYW5nZSwgc2xpZGVyVmFsdWUgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBVc2VySW5mb3JtYXRpb25EaXNwbGF5IGZyb20gJy4uLy4uLy4uL1VzZXJJbmZvcm1hdGlvbkRpc3BsYXkvSW5kZXgnXG5pbXBvcnQge1xuICBNaWRkbGUsIExlZnQsIFJpZ2h0LCBIb21lUGFnZUdyaWQsXG59IGZyb20gJy4uLy4uL1N0eWxlJ1xuaW1wb3J0IE5vdGlmaWNhdGlvbkl0ZW0gZnJvbSAnLi9jb21wb25lbnRzL05vdGlmaWNhdGlvbkl0ZW0vSW5kZXgnXG5pbXBvcnQge1xuICBCb3JkZXJDb250YWluZXIsIE5vdGlmaWNhdGlvbkxpc3QsIENvbnRhaW5lciwgSGVhZGVyLFxufSBmcm9tICcuL1N0eWxlJ1xuXG5jb25zdCBOb3RpZmljYXRpb25zID0gKCkgPT4ge1xuICBjb25zdCBub3RpZmljYXRpb25zID0gdXNlU2VsZWN0b3IoKHMpID0+IHMubm90aWZpY2F0aW9ucy51c2VyTm90aWZpY2F0aW9uc0xpc3QpXG4gIHJldHVybiAoXG4gICAgPEhvbWVQYWdlR3JpZD5cbiAgICAgIDxMZWZ0PlxuICAgICAgICA8VXNlckluZm9ybWF0aW9uRGlzcGxheSAvPlxuICAgICAgPC9MZWZ0PlxuICAgICAgPE1pZGRsZT5cblxuICAgICAgICA8Q29udGFpbmVyIGlkPVwibm90aWZpY2F0aW9ucy1jb250YWluZXJcIj5cblxuICAgICAgICAgIDxCb3JkZXJDb250YWluZXI+XG4gICAgICAgICAgICA8SGVhZGVyPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBSZWNlbnQgTm90aWZpY2F0aW9uc1xuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L0hlYWRlcj5cbiAgICAgICAgICAgIDxOb3RpZmljYXRpb25MaXN0PlxuICAgICAgICAgICAgICB7bm90aWZpY2F0aW9ucy5tYXAoKG5vdGlmaWNhdGlvbikgPT4gKFxuICAgICAgICAgICAgICAgIDxOb3RpZmljYXRpb25JdGVtIGtleT17bm90aWZpY2F0aW9uLmlkfSBub3RpZmljYXRpb249e25vdGlmaWNhdGlvbn0gLz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L05vdGlmaWNhdGlvbkxpc3Q+XG4gICAgICAgICAgPC9Cb3JkZXJDb250YWluZXI+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9NaWRkbGU+XG4gICAgICA8UmlnaHQ+XG4gICAgICAgIDxzcGFuPi48L3NwYW4+XG4gICAgICA8L1JpZ2h0PlxuICAgIDwvSG9tZVBhZ2VHcmlkPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5vdGlmaWNhdGlvbnNcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBCb3JkZXJDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpYFxuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICBib3JkZXItdG9wOiBub25lO1xuICB6LWluZGV4OiA5OTk5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLW5hdi1zaXplKSk7XG5cbmBcblxuZXhwb3J0IGNvbnN0IE5vdGlmaWNhdGlvbkxpc3QgPSBzdHlsZWQoJ3VsJylgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgcGFkZGluZzogMDtcbiAgcGFkZGluZy1ib3R0b206IDMwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMEYyRjU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXG5gXG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbmBcblxuZXhwb3J0IGNvbnN0IEhlYWRlciA9IHN0eWxlZCgnaGVhZGVyJylgIFxuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XG4gIHBhZGRpbmc6IDJ2dyAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBwIHtcbiAgICBtYXJnaW46IDAgMXZ3O1xuICAgIGZvbnQtc2l6ZTogMS4xdnc7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5gXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMaW5rLCB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBNZW51VGltZSB9IGZyb20gJy4uL01lbnVUaW1lL0luZGV4J1xuaW1wb3J0IFVzZXJuYW1lQW5kVGFnIGZyb20gJy4uLy4uLy4uLy4uLy4uL0NvbW1vbkNvbXBvbmVudHMvVXNlcm5hbWVBbmRUYWcvSW5kZXgnXG5pbXBvcnQgeyBnZXRUaW1lU2luY2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9nZW5lcmljL3N0cmluZy9kYXRlRm9ybWF0dGVyJ1xuaW1wb3J0IHsgTGVmdENvbnRhaW5lciwgTWlkZGxlQ29udGFpbmVyLCBQcm9maWxlSWNvbiB9IGZyb20gJy4uL1N0eWxlJ1xuXG5pbXBvcnQgeyBDb21tZW50Q2l2aWxpdHlHaXZlbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2VudW1zL25vdGlmaWNhdGlvbl90eXBlcydcblxuY29uc3QgQ29tbWVudENpdmlsaXR5Tm90aWZjYXRpb24gPSAoeyBub3RpZmljYXRpb24gfSkgPT4ge1xuICBjb25zdCB7XG4gICAgZ2l2aW5nVXNlcklkLCBnaXZpbmdVc2VyVXNlcm5hbWUsIGdpdmluZ1VzZXJJY29uU3JjLFxuICAgIGdpdmluZ1VzZXJUYWcsIHRvcGljSWQsIHN1YnRvcGljSWQsIGNvbW1lbnRJZCwgY3JlYXRlZEF0LCBvbGQsIG5ldzogbmV3VmFsLCBpZCxcbiAgfSA9IG5vdGlmaWNhdGlvblxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKClcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgfVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TGVmdENvbnRhaW5lciBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0ZShgL3VzZXIvJHtnaXZpbmdVc2VySWR9YCl9PlxuICAgICAgICA8UHJvZmlsZUljb24gc3JjPXtnaXZpbmdVc2VySWNvblNyY30gLz5cbiAgICAgICAgPFVzZXJuYW1lQW5kVGFnXG4gICAgICAgICAgdXNlcklkPXtnaXZpbmdVc2VySWR9XG4gICAgICAgICAgdXNlcm5hbWVEaXNwbGF5PXtnaXZpbmdVc2VyVXNlcm5hbWV9XG4gICAgICAgICAgdXNlclRhZz17Z2l2aW5nVXNlclRhZ31cbiAgICAgICAgLz5cbiAgICAgIDwvTGVmdENvbnRhaW5lcj5cbiAgICAgIDxNaWRkbGVDb250YWluZXI+XG4gICAgICAgIHtcbiAgICAgICAgICBub3RpZmljYXRpb24ubmV3IDwgMCA/IChcbiAgICAgICAgICAgIDxpbWcgYWx0PVwiXCIgc3JjPVwiaHR0cHM6Ly9jaXZpbC1kZXYuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vYXNzZXRzL25vLWhhbmRzaGFrZS1jbGlja2VkLnBuZ1wiIC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxpbWcgYWx0PVwiXCIgc3JjPVwiaHR0cHM6Ly9jaXZpbC1kZXYuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vYXNzZXRzL2hhbmRzaGFrZS1jbGlja2VkLnBuZ1wiIC8+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIDxoMz5cbiAgICAgICAgICA8Yj5cbiAgICAgICAgICAgIHtnaXZpbmdVc2VyVXNlcm5hbWV9XG4gICAgICAgICAgPC9iPlxuICAgICAgICAgIHsnICd9XG4gICAgICAgICAgVXBkYXRlZCBDaXZpbGl0eSBHaXZlbiBGb3IgWW91clxuICAgICAgICAgIHsnICd9XG4gICAgICAgICAgPExpbmsgb25DbGljaz17aGFuZGxlQ2xpY2t9IHRvPXtgL2hvbWUvdG9waWNzLyR7dG9waWNJZH0vc3VidG9waWNzLyR7c3VidG9waWNJZH0vY29tbWVudHMvJHtjb21tZW50SWR9YH0+XG4gICAgICAgICAgICBDb21tZW50XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIHsnICd9XG4gICAgICAgICAge2Bmcm9tICR7b2xkLnRvRml4ZWQoMil9IHRvICR7bmV3VmFsLnRvRml4ZWQoMil9IENpdmlsaXR5ICR7b2xkIDwgbmV3VmFsID8gJ/CfmIonIDogJ+KYue+4jyd9YH1cbiAgICAgICAgPC9oMz5cbiAgICAgIDwvTWlkZGxlQ29udGFpbmVyPlxuICAgICAgPE1lbnVUaW1lXG4gICAgICAgIHRpbWU9e2dldFRpbWVTaW5jZShjcmVhdGVkQXQpfVxuICAgICAgICBpZD17aWR9XG4gICAgICAgIGV2ZW50VHlwZT17Q29tbWVudENpdmlsaXR5R2l2ZW59XG4gICAgICAvPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRDaXZpbGl0eU5vdGlmY2F0aW9uXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMaW5rLCB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBNZW51VGltZSB9IGZyb20gJy4uL01lbnVUaW1lL0luZGV4J1xuaW1wb3J0IHsgZ2V0VGltZVNpbmNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vZ2VuZXJpYy9zdHJpbmcvZGF0ZUZvcm1hdHRlcidcbmltcG9ydCB7IE1pZGRsZUNvbnRhaW5lciwgTGVmdENvbnRhaW5lciwgUHJvZmlsZUljb24gfSBmcm9tICcuLi9TdHlsZSdcbmltcG9ydCBVc2VybmFtZUFuZFRhZyBmcm9tICcuLi8uLi8uLi8uLi8uLi9Db21tb25Db21wb25lbnRzL1VzZXJuYW1lQW5kVGFnL0luZGV4J1xuXG5pbXBvcnQgeyBOZXdGb2xsb3dlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2VudW1zL25vdGlmaWNhdGlvbl90eXBlcydcbmltcG9ydCB7IEFkZEZyaWVuZFN2ZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3N2Z3Mvc3ZncydcblxuY29uc3QgRm9sbG93Tm90aWZjYXRpb24gPSAoeyBub3RpZmljYXRpb24gfSkgPT4ge1xuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKClcbiAgY29uc3Qge1xuICAgIGdpdmluZ1VzZXJJZCwgZ2l2aW5nVXNlclVzZXJuYW1lLCBnaXZpbmdVc2VySWNvblNyYywgZ2l2aW5nVXNlclRhZywgY3JlYXRlZEF0LCBpZCxcbiAgfSA9IG5vdGlmaWNhdGlvblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TGVmdENvbnRhaW5lciBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0ZShgL3VzZXIvJHtnaXZpbmdVc2VySWR9YCl9PlxuICAgICAgICA8UHJvZmlsZUljb24gc3JjPXtnaXZpbmdVc2VySWNvblNyY30gLz5cbiAgICAgICAgPFVzZXJuYW1lQW5kVGFnXG4gICAgICAgICAgdXNlcklkPXtnaXZpbmdVc2VySWR9XG4gICAgICAgICAgdXNlcm5hbWVEaXNwbGF5PXtnaXZpbmdVc2VyVXNlcm5hbWV9XG4gICAgICAgICAgdXNlclRhZz17Z2l2aW5nVXNlclRhZ31cbiAgICAgICAgLz5cbiAgICAgIDwvTGVmdENvbnRhaW5lcj5cbiAgICAgIDxNaWRkbGVDb250YWluZXI+XG4gICAgICAgIDxBZGRGcmllbmRTdmcgc2l6ZT1cIjE1dmhcIiAvPlxuICAgICAgICA8aDM+XG4gICAgICAgICAgeycgJ31cbiAgICAgICAgICA8TGluayB0bz17YC91c2VyLyR7Z2l2aW5nVXNlcklkfWB9PlxuICAgICAgICAgICAgPGI+XG4gICAgICAgICAgICAgIHtnaXZpbmdVc2VyVXNlcm5hbWV9XG4gICAgICAgICAgICA8L2I+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIHsnICd9XG4gICAgICAgICAgRm9sbG93ZWQgWW91XG4gICAgICAgIDwvaDM+XG5cbiAgICAgIDwvTWlkZGxlQ29udGFpbmVyPlxuICAgICAgPE1lbnVUaW1lXG4gICAgICAgIHRpbWU9e2dldFRpbWVTaW5jZShjcmVhdGVkQXQpfVxuICAgICAgICBpZD17aWR9XG4gICAgICAgIGV2ZW50VHlwZT17TmV3Rm9sbG93ZXJ9XG4gICAgICAvPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvbGxvd05vdGlmY2F0aW9uXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMaW5rLCB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBNZW51VGltZSB9IGZyb20gJy4uL01lbnVUaW1lL0luZGV4J1xuaW1wb3J0IHsgZ2V0VGltZVNpbmNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vZ2VuZXJpYy9zdHJpbmcvZGF0ZUZvcm1hdHRlcidcbmltcG9ydCBVc2VybmFtZUFuZFRhZyBmcm9tICcuLi8uLi8uLi8uLi8uLi9Db21tb25Db21wb25lbnRzL1VzZXJuYW1lQW5kVGFnL0luZGV4J1xuaW1wb3J0IHsgTGVmdENvbnRhaW5lciwgTWlkZGxlQ29udGFpbmVyLCBQcm9maWxlSWNvbiB9IGZyb20gJy4uL1N0eWxlJ1xuXG5pbXBvcnQgeyBDb21tZW50TGlrZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2VudW1zL25vdGlmaWNhdGlvbl90eXBlcydcbmltcG9ydCB7IExpa2VDbGlja2VkU3ZnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc3Zncy9zdmdzJ1xuXG5jb25zdCBDb21tZW50TGlrZU5vdGlmaWNhdGlvbiA9ICh7IG5vdGlmaWNhdGlvbiB9KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBnaXZpbmdVc2VySWQsIGdpdmluZ1VzZXJVc2VybmFtZSwgZ2l2aW5nVXNlckljb25TcmMsXG4gICAgZ2l2aW5nVXNlclRhZywgdG9waWNJZCwgc3VidG9waWNJZCwgY29tbWVudElkLFxuICB9ID0gbm90aWZpY2F0aW9uXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKVxuICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICB9XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxMZWZ0Q29udGFpbmVyIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKGAvdXNlci8ke2dpdmluZ1VzZXJJZH1gKX0+XG4gICAgICAgIDxQcm9maWxlSWNvbiBzcmM9e2dpdmluZ1VzZXJJY29uU3JjfSAvPlxuICAgICAgICA8VXNlcm5hbWVBbmRUYWdcbiAgICAgICAgICB1c2VySWQ9e2dpdmluZ1VzZXJJZH1cbiAgICAgICAgICB1c2VybmFtZURpc3BsYXk9e2dpdmluZ1VzZXJVc2VybmFtZX1cbiAgICAgICAgICB1c2VyVGFnPXtnaXZpbmdVc2VyVGFnfVxuICAgICAgICAvPlxuICAgICAgPC9MZWZ0Q29udGFpbmVyPlxuICAgICAgPE1pZGRsZUNvbnRhaW5lcj5cbiAgICAgICAgPGgzPlxuICAgICAgICAgIDxiPlxuICAgICAgICAgICAge2dpdmluZ1VzZXJVc2VybmFtZX1cbiAgICAgICAgICA8L2I+XG4gICAgICAgICAgeycgJ31cbiAgICAgICAgICBMaWtlZCBZb3VyXG4gICAgICAgICAgeycgJ31cbiAgICAgICAgICA8TGluayBvbkNsaWNrPXtoYW5kbGVDbGlja30gdG89e2AvaG9tZS90b3BpY3MvJHt0b3BpY0lkfS9zdWJ0b3BpY3MvJHtzdWJ0b3BpY0lkfS9jb21tZW50cy8ke2NvbW1lbnRJZH1gfT5cbiAgICAgICAgICAgIENvbW1lbnQhXG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIHsnICd9XG4gICAgICAgICAg8J+YilxuICAgICAgICA8L2gzPlxuICAgICAgICA8TGlrZUNsaWNrZWRTdmcgLz5cblxuICAgICAgPC9NaWRkbGVDb250YWluZXI+XG4gICAgICA8TWVudVRpbWVcbiAgICAgICAgdGltZT17Z2V0VGltZVNpbmNlKG5vdGlmaWNhdGlvbi5jcmVhdGVkQXQpfVxuICAgICAgICBpZD17bm90aWZpY2F0aW9uLmlkfVxuICAgICAgICBldmVudFR5cGU9e0NvbW1lbnRMaWtlfVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb21tZW50TGlrZU5vdGlmaWNhdGlvblxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBWZXJ0aWNhbE1lbnVEb3RzU3ZnLCBEZWxldGVTdmcsIFJlYWRTdmcsXG59IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3N2Z3Mvc3ZncydcbmltcG9ydCBub3RpZmljYXRpb25BY3Rpb25DcmVhdG9ycyBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9yZWR1eC9hY3Rpb25zL25vdGlmaWNhdGlvbnMvaW5kZXgnXG5pbXBvcnQgdXNlQmluZERpc3BhdGNoIGZyb20gJy4uLy4uLy4uLy4uLy4uL2hvb2tzL3JlZHV4L3VzZUJpbmREaXNwYXRjaCdcbmltcG9ydCB7XG4gIE1lbnVUaW1lQ29udGFpbmVyLCBUaW1lLCBNZW51SWNvbkNvbnRhaW5lciwgQWN0aW9uTWVudSwgQWN0aW9uTWVudUl0ZW0sXG59IGZyb20gJy4vU3R5bGUvaW5kZXgnXG5cbmV4cG9ydCBjb25zdCBNZW51VGltZSA9ICh7IHRpbWUsIGlkLCBldmVudFR5cGUgfSkgPT4ge1xuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IHtcbiAgICB1cGRhdGVOb3RpZmljYXRpb25Ub1JlYWQsXG4gICAgZGVsZXRlTm90aWZpY2F0aW9uLFxuICB9ID0gdXNlQmluZERpc3BhdGNoKG5vdGlmaWNhdGlvbkFjdGlvbkNyZWF0b3JzKVxuXG4gIHJldHVybiAoXG4gICAgPE1lbnVUaW1lQ29udGFpbmVyPlxuICAgICAgPE1lbnVJY29uQ29udGFpbmVyIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgc2V0SXNPcGVuKChwcmV2KSA9PiAhcHJldilcbiAgICAgICAgY29uc3QgZXZlbnRMaXN0ZW5lciA9ICgpID0+IHtcbiAgICAgICAgICBzZXRJc09wZW4oKHByZXYpID0+ICFwcmV2KVxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3RpZmljYXRpb25zLWNvbnRhaW5lcicpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnRMaXN0ZW5lcilcbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3RpZmljYXRpb25zLWNvbnRhaW5lcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnRMaXN0ZW5lcilcbiAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxWZXJ0aWNhbE1lbnVEb3RzU3ZnIC8+XG4gICAgICAgIDxBY3Rpb25NZW51IGlzT3Blbj17aXNPcGVufSBvbkNsaWNrPXsoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX0+XG4gICAgICAgICAgPEFjdGlvbk1lbnVJdGVtIG9uQ2xpY2s9eygpID0+IHVwZGF0ZU5vdGlmaWNhdGlvblRvUmVhZChldmVudFR5cGUsIGlkKX0+XG4gICAgICAgICAgICA8UmVhZFN2ZyAvPlxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgIE1hcmsgQXMgUmVhZFxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvQWN0aW9uTWVudUl0ZW0+XG4gICAgICAgICAgPEFjdGlvbk1lbnVJdGVtIG9uQ2xpY2s9eygpID0+IGRlbGV0ZU5vdGlmaWNhdGlvbihldmVudFR5cGUsIGlkKX0+XG4gICAgICAgICAgICA8RGVsZXRlU3ZnIC8+XG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgRGVsZXRlIE5vdGlmaWNhdGlvblxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvQWN0aW9uTWVudUl0ZW0+XG4gICAgICAgIDwvQWN0aW9uTWVudT5cbiAgICAgIDwvTWVudUljb25Db250YWluZXI+XG4gICAgICA8VGltZT57dGltZX08L1RpbWU+XG4gICAgPC9NZW51VGltZUNvbnRhaW5lcj5cbiAgKVxufVxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IE1lbnVUaW1lQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWAgXG4gIHotaW5kZXg6IDk5OTk5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBwYWRkaW5nOiA1cHggMDtcbiAgd2lkdGg6IDglO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDIwMCwyMDAsMjAwLDAuMjUpO1xuXG5gXG5cbmV4cG9ydCBjb25zdCBUaW1lID0gc3R5bGVkKCdzcGFuJylgXG4gIGNvbG9yOiBncmF5O1xuICBmb250LXNpemU6IDF2dztcbiAgcGFkZGluZzogMCAxMHB4O1xuYFxuZXhwb3J0IGNvbnN0IE1lbnVJY29uQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWAgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICBib3JkZXItcmFkaXVzOiAuMXZ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6ICMyY2RkOWI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWY3ZjA7XG4gIGJvcmRlci1jb2xvcjogI2Q4ZjdlYjtcbiAgdHJhbnNpdGlvbjogYWxsIDFzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIDpob3ZlciB7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuODUpO1xuICB9XG5cbmBcblxuZXhwb3J0IGNvbnN0IEFjdGlvbk1lbnUgPSBzdHlsZWQoJ3VsJylgXG4gIHotaW5kZXg6IDk5OTk5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXI6IC41cHggc29saWQgbGlnaHRncmF5O1xuICBib3JkZXItY29sb3I6IHJnYmEoMjAwLDIwMCwyMDAsMC4yNSkgO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTUlLCA1NSUpIDtcbiAgZGlzcGxheTogJHsocHJvcHMpID0+IChwcm9wcy5pc09wZW4gPyAnYmxvY2snIDogJ25vbmUnKX0gO1xuICB3aWR0aDogMTB2dztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggcmdiKDYwIDYwIDYwIC8gMTAlKTtcbiAgYm9yZGVyLXJhZGl1czogIC41ZW07XG4gIG1hcmdpbjogMDtcblxuYFxuXG5leHBvcnQgY29uc3QgQWN0aW9uTWVudUl0ZW0gPSBzdHlsZWQoJ2xpJylgXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBjb2xvcjogYmxhY2s7XG4gIHRyYW5zaXRpb246IG5vbmU7XG4gIDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbS1idG4taG92ZXItY29sb3IpO1xuXG4gIH1cblxuICBzcGFuIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogLjY1dncgIWltcG9ydGFudDtcbiAgfVxuXG5gXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG4vLyBpbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQge1xuICBOZXdGb2xsb3dlciwgQ29tbWVudENpdmlsaXR5R2l2ZW4sIENvbW1lbnRMaWtlLCBUb3BpY0xpa2UsXG59IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2VudW1zL25vdGlmaWNhdGlvbl90eXBlcydcbmltcG9ydCBGb2xsb3dOb3RpZmNhdGlvbiBmcm9tICcuLi9Gb2xsb3dOb3RpZmljYXRpb24vSW5kZXgnXG5pbXBvcnQgQ29tbWVudENpdmlsaXR5Tm90aWZjYXRpb24gZnJvbSAnLi4vQ29tbWVudENpdmlsaXR5Tm90aWZpY2F0aW9uL0luZGV4J1xuaW1wb3J0IHtcbiAgSXRlbSxcbn0gZnJvbSAnLi9TdHlsZSdcbmltcG9ydCBDb21tZW50TGlrZU5vdGlmaWNhdGlvbiBmcm9tICcuLi9MaWtlTm90aWZpY2F0aW9uL0luZGV4J1xuaW1wb3J0IFRvcGljTGlrZU5vdGlmaWNhdGlvbiBmcm9tICcuLi9Ub3BpY0xpa2VOb3RpZmljYXRpb24vSW5kZXgnXG5cbmNvbnN0IE5vdGlmaWNhdGlvbkl0ZW0gPSAoeyBub3RpZmljYXRpb24gfSkgPT4ge1xuICAvLyBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKClcbiAgbGV0IEl0ZW1Db21wb25lbnRcbiAgbGV0IG9uQ2xpY2tcbiAgc3dpdGNoIChub3RpZmljYXRpb24uZXZlbnRUeXBlKSB7XG4gICAgY2FzZSBOZXdGb2xsb3dlcjpcbiAgICAgIC8vIG9uQ2xpY2sgPSAoKSA9PiBuYXZpZ2F0ZShgL3VzZXIvJHtub3RpZmljYXRpb24uZm9sbG93ZXJVc2VySWR9YClcbiAgICAgIEl0ZW1Db21wb25lbnQgPSBGb2xsb3dOb3RpZmNhdGlvblxuICAgICAgYnJlYWtcbiAgICBjYXNlIENvbW1lbnRDaXZpbGl0eUdpdmVuOlxuICAgICAgLy8gb25DbGljayA9ICgpID0+IG5hdmlnYXRlKGAvdXNlci8ke25vdGlmaWNhdGlvbi5naXZpbmdVc2VySWR9YClcbiAgICAgIEl0ZW1Db21wb25lbnQgPSBDb21tZW50Q2l2aWxpdHlOb3RpZmNhdGlvblxuICAgICAgYnJlYWtcbiAgICBjYXNlIENvbW1lbnRMaWtlOlxuICAgICAgLy8gb25DbGljayA9ICgpID0+IG5hdmlnYXRlKGAvdXNlci8ke25vdGlmaWNhdGlvbi5naXZpbmdVc2VySWR9YClcbiAgICAgIEl0ZW1Db21wb25lbnQgPSBDb21tZW50TGlrZU5vdGlmaWNhdGlvblxuICAgICAgYnJlYWtcbiAgICBjYXNlIFRvcGljTGlrZTpcbiAgICAgIC8vIG9uQ2xpY2sgPSAoKSA9PiBuYXZpZ2F0ZShgL3VzZXIvJHtub3RpZmljYXRpb24uZ2l2aW5nVXNlcklkfWApXG4gICAgICBJdGVtQ29tcG9uZW50ID0gVG9waWNMaWtlTm90aWZpY2F0aW9uXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICBicmVha1xuICB9XG4gIHJldHVybiAoXG4gICAgPEl0ZW0gb25DbGljaz17b25DbGlja30+XG4gICAgICA8SXRlbUNvbXBvbmVudCBub3RpZmljYXRpb249e25vdGlmaWNhdGlvbn0gLz5cbiAgICA8L0l0ZW0+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTm90aWZpY2F0aW9uSXRlbVxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IEl0ZW0gPSBzdHlsZWQoJ2xpJylgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE1dmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAvKiBjdXJzb3I6IHBvaW50ZXI7ICovXG4gIHBhZGRpbmctcmlnaHQ6IC41dnc7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICA6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGOEY5RkE7XG4gIH1cbmBcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBMZWZ0Q29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWBcbiAgd2lkdGg6IDIyJTtcbiAgaGVpZ2h0OiAxMDAlIDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaW1nIHtcbiAgICBoZWlnaHQ6IDV2aDtcbiAgfVxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyMDAsMjAwLDIwMCwwLjI1KTtcbiAgOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyO1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBSaWdodENvbnRhaW5lciA9IHN0eWxlZCgnZGl2JylgXG4gIHdpZHRoOiAyMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGltZyB7XG4gICAgaGVpZ2h0OiA1dmg7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IE1pZGRsZUNvbnRhaW5lciA9IHN0eWxlZCgnZGl2JylgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaW1nIHtcbiAgICBoZWlnaHQ6IDN2aDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA4cHg7XG4gIH1cbiAgc3ZnIHtcbiAgICBoZWlnaHQ6IDN2aDtcbiAgICBtaW4taGVpZ2h0OiAzMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDhweDtcbiAgfVxuICBoMyB7XG4gICAgZm9udC1zaXplOiAuOXZ3O1xuICB9XG4gIGEge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiB2YXIoLS1tLXByaW1hcnktYnRuLWNvbG9yKTtcbiAgICA6aG92ZXIge1xuICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuODUpO1xuICAgIH1cbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgUHJvZmlsZUljb24gPSBzdHlsZWQoJ2ltZycpYFxuICBoZWlnaHQ6IDcwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogMCAuNnZ3O1xuYFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGluaywgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgTWVudVRpbWUgfSBmcm9tICcuLi9NZW51VGltZS9JbmRleCdcbmltcG9ydCB7IGdldFRpbWVTaW5jZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2dlbmVyaWMvc3RyaW5nL2RhdGVGb3JtYXR0ZXInXG5pbXBvcnQgVXNlcm5hbWVBbmRUYWcgZnJvbSAnLi4vLi4vLi4vLi4vLi4vQ29tbW9uQ29tcG9uZW50cy9Vc2VybmFtZUFuZFRhZy9JbmRleCdcbmltcG9ydCB7IExlZnRDb250YWluZXIsIE1pZGRsZUNvbnRhaW5lciwgUHJvZmlsZUljb24gfSBmcm9tICcuLi9TdHlsZSdcblxuaW1wb3J0IHsgVG9waWNMaWtlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vZW51bXMvbm90aWZpY2F0aW9uX3R5cGVzJ1xuaW1wb3J0IHsgTGlrZUNsaWNrZWRTdmcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9zdmdzL3N2Z3MnXG5cbmNvbnN0IFRvcGljTGlrZU5vdGlmaWNhdGlvbiA9ICh7IG5vdGlmaWNhdGlvbiB9KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBnaXZpbmdVc2VySWQsIGdpdmluZ1VzZXJVc2VybmFtZSwgZ2l2aW5nVXNlckljb25TcmMsXG4gICAgZ2l2aW5nVXNlclRhZywgdG9waWNJZCxcbiAgfSA9IG5vdGlmaWNhdGlvblxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKClcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgfVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TGVmdENvbnRhaW5lciBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0ZShgL3VzZXIvJHtnaXZpbmdVc2VySWR9YCl9PlxuICAgICAgICA8UHJvZmlsZUljb24gc3JjPXtnaXZpbmdVc2VySWNvblNyY30gLz5cbiAgICAgICAgPFVzZXJuYW1lQW5kVGFnXG4gICAgICAgICAgdXNlcklkPXtnaXZpbmdVc2VySWR9XG4gICAgICAgICAgdXNlcm5hbWVEaXNwbGF5PXtnaXZpbmdVc2VyVXNlcm5hbWV9XG4gICAgICAgICAgdXNlclRhZz17Z2l2aW5nVXNlclRhZ31cbiAgICAgICAgLz5cbiAgICAgIDwvTGVmdENvbnRhaW5lcj5cbiAgICAgIDxNaWRkbGVDb250YWluZXI+XG4gICAgICAgIDxoMz5cbiAgICAgICAgICA8Yj5cbiAgICAgICAgICAgIHtnaXZpbmdVc2VyVXNlcm5hbWV9XG4gICAgICAgICAgPC9iPlxuICAgICAgICAgIHsnICd9XG4gICAgICAgICAgTGlrZWQgWW91clxuICAgICAgICAgIHsnICd9XG4gICAgICAgICAgPExpbmsgb25DbGljaz17aGFuZGxlQ2xpY2t9IHRvPXtgL2hvbWUvdG9waWNzLyR7dG9waWNJZH0vc3VidG9waWNzYH0+XG4gICAgICAgICAgICBUb3BpYyFcbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgeycgJ31cbiAgICAgICAgICDwn5iKXG4gICAgICAgIDwvaDM+XG4gICAgICAgIDxMaWtlQ2xpY2tlZFN2ZyAvPlxuXG4gICAgICA8L01pZGRsZUNvbnRhaW5lcj5cbiAgICAgIDxNZW51VGltZVxuICAgICAgICB0aW1lPXtnZXRUaW1lU2luY2Uobm90aWZpY2F0aW9uLmNyZWF0ZWRBdCl9XG4gICAgICAgIGlkPXtub3RpZmljYXRpb24uaWR9XG4gICAgICAgIGV2ZW50VHlwZT17VG9waWNMaWtlfVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb3BpY0xpa2VOb3RpZmljYXRpb25cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgeyBUYWIgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgVGhlbWVUYWIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9Db21tb25Db21wb25lbnRzL1RhYnMvU3R5bGUnXG5pbXBvcnQgeyBUYWJDb250YWluZXIgfSBmcm9tICcuL1N0eWxlJ1xuaW1wb3J0IHJlY3NBY3Rpb25DcmVhdG9ycyBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9yZWR1eC9hY3Rpb25zL3JlY3MvaW5kZXgnXG5pbXBvcnQgb3BwUmVjc0FjdGlvbkNyZWF0b3JzIGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvb3Bwb3NpbmdfcmVjcy9pbmRleCdcblxuaW1wb3J0IHVzZUJpbmREaXNwYXRjaCBmcm9tICcuLi8uLi8uLi8uLi8uLi9ob29rcy9yZWR1eC91c2VCaW5kRGlzcGF0Y2gnXG5pbXBvcnQgUmVjb21tZW5kYXRpb25zTGlzdCBmcm9tICcuLi8uLi8uLi8uLi8uLi9SZWNvbW1lbmRhdGlvbnNMaXN0L0luZGV4J1xuXG5jb25zdCBSZWNvbW1lbmRhdGlvbnMgPSAoKSA9PiB7XG4gIGNvbnN0IFtrZXksIHNldEtleV0gPSB1c2VTdGF0ZSgncmVjcycpXG4gIGNvbnN0IHsgdG9waWNJZCB9ID0gdXNlUGFyYW1zKClcbiAgY29uc3QgeyBnZXRBbGxSZWNzLCBnZXRBbGxPcHBvc2luZ1JlY3MgfSA9IHVzZUJpbmREaXNwYXRjaChcbiAgICByZWNzQWN0aW9uQ3JlYXRvcnMsXG4gICAgb3BwUmVjc0FjdGlvbkNyZWF0b3JzLFxuICApXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0QWxsT3Bwb3NpbmdSZWNzKHRvcGljSWQpXG4gICAgZ2V0QWxsUmVjcyh0b3BpY0lkKVxuICB9LCBbdG9waWNJZF0pXG5cbiAgY29uc3QgcmVjcyA9IHVzZVNlbGVjdG9yKChzKSA9PiBzLnJlY29tbWVuZGF0aW9ucy5yZWNzKVxuICBjb25zdCBvcHBvc2luZ1JlY3MgPSB1c2VTZWxlY3RvcigocykgPT4gcy5yZWNvbW1lbmRhdGlvbnMub3Bwb3NpbmdSZWNzKVxuICByZXR1cm4gKFxuICAgIDxUYWJDb250YWluZXI+XG4gICAgICA8VGhlbWVUYWJcbiAgICAgICAgYWN0aXZlS2V5PXtrZXl9XG4gICAgICAgIG9uU2VsZWN0PXsoaykgPT4gc2V0S2V5KGspfVxuICAgICAgPlxuICAgICAgICA8VGFiIGV2ZW50S2V5PVwicmVjc1wiIHRpdGxlPVwiUmVjb21tZW5kZWQgQ29udGVudFwiPlxuICAgICAgICAgIDxSZWNvbW1lbmRhdGlvbnNMaXN0IHJlY3M9e3JlY3N9IC8+XG4gICAgICAgIDwvVGFiPlxuICAgICAgICA8VGFiIGV2ZW50S2V5PVwib3Bwb3NpbmdSZWNzXCIgdGl0bGU9XCJPcHBvc2luZyBWaWV3c1wiPlxuICAgICAgICAgIDxSZWNvbW1lbmRhdGlvbnNMaXN0IHJlY3M9e29wcG9zaW5nUmVjc30gLz5cbiAgICAgICAgPC9UYWI+XG4gICAgICA8L1RoZW1lVGFiPlxuXG4gICAgPC9UYWJDb250YWluZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVjb21tZW5kYXRpb25zXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWBcbiAgd2lkdGg6IGNhbGMoMTAwdncgLSB2YXIoLS1zaWRlYmFyLXdpZHRoKSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC8qIHBhZGRpbmctdG9wOiA1ZW07ICovXG4gIG1hcmdpbi1sZWZ0OiB2YXIoLS1zaWRlYmFyLXdpZHRoKTtcblxuICAudGFiLWNvbnRlbnQge1xuICAgcGFkZGluZy1ib3R0b206IDQwdmg7XG4gfVxuXG4gQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG5gXG5leHBvcnQgY29uc3QgTWFpbkNvbnRlbnQgPSBzdHlsZWQoJ2RpdicpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICB9XG5cbmBcblxuZXhwb3J0IGNvbnN0IExpbmUgPSBzdHlsZWQoJ2hyJylgIFxuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDFlbSAwIDJlbSAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDgsNDgsNTApO1xuICBoZWlnaHQ6IC41cHg7XG4gIGJvcmRlcjogbm9uZTtcbmBcblxuZXhwb3J0IGNvbnN0IFRhYkNvbnRhaW5lciA9IHN0eWxlZCgnZGl2JylgIFxuICBmbGV4OiAyNSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHotaW5kZXg6IDk5O1xuICAvKiBhOiBjZW50ZXI7ICovXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkZWUyZTY7XG5cbmBcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgdG9waWNBY3Rpb25DcmVhdG9ycyBmcm9tICcuLi8uLi8uLi8uLi9yZWR1eC9hY3Rpb25zL3RvcGljcydcbmltcG9ydCBzdWJUb3BpY0FjdGlvbkNyZWF0b3JzIGZyb20gJy4uLy4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvc3VidG9waWNzJ1xuXG5pbXBvcnQgdXNlQmluZERpc3BhdGNoIGZyb20gJy4uLy4uLy4uL2hvb2tzL3JlZHV4L3VzZUJpbmREaXNwYXRjaCdcbmltcG9ydCB7XG4gIENvbnRhaW5lciwgTGluZSwgTWFpbkNvbnRlbnQsIEhlYWRlckNvbnRhaW5lcixcbn0gZnJvbSAnLi9TdHlsZSdcbmltcG9ydCB7XG4gIEhvbWVQYWdlR3JpZCwgTGVmdCwgTWlkZGxlLCBSaWdodCxcbn0gZnJvbSAnLi4vLi4vU3R5bGUnXG5cbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL0hlYWRlci9JbmRleCdcbmltcG9ydCBQYXJlbnRDb21tZW50IGZyb20gJy4vY29tcG9uZW50cy9QYXJlbnRDb21tZW50L0luZGV4J1xuXG5pbXBvcnQgU3ViVG9waWNzUm91dGVyIGZyb20gJy4vY29tcG9uZW50cy9TdWJUb3BpY3NSb3V0ZXIvSW5kZXgnXG5pbXBvcnQgeyB1dWlkUmVnRXggfSBmcm9tICcuLi8uLi8uLi8uLi9nZW5lcmljL3JlZ2V4L3V1aWQnXG5pbXBvcnQgVXNlckluZm9ybWF0aW9uRGlzcGxheSBmcm9tICcuLi8uLi8uLi9Vc2VySW5mb3JtYXRpb25EaXNwbGF5L0luZGV4J1xuaW1wb3J0IFJlY29tbWVuZGF0aW9ucyBmcm9tICcuLi9SaWdodFNlY3Rpb24vY29tcG9uZW50cy9SZWNvbW1lbmRhdGlvbnMvSW5kZXgnXG5cbmNvbnN0IFN1YlRvcGljcyA9ICgpID0+IHtcbiAgY29uc3QgeyB0b3BpY0lkLCAnKic6IHVybCB9ID0gdXNlUGFyYW1zKClcbiAgY29uc3QgW3N1YnRvcGljSWQsIGNvbW1lbnRJZF0gPSB1cmwgPyB1cmwubWF0Y2godXVpZFJlZ0V4KSA6IFtdXG4gIGNvbnN0IHtcbiAgICBnZXRBbGxTdWJUb3BpY3MsXG4gICAgZ2V0VG9waWMsXG4gIH0gPSB1c2VCaW5kRGlzcGF0Y2goXG4gICAgc3ViVG9waWNBY3Rpb25DcmVhdG9ycyxcbiAgICB0b3BpY0FjdGlvbkNyZWF0b3JzLFxuICApXG4gIGNvbnN0IHRvcGljID0gdXNlU2VsZWN0b3IoKHMpID0+IHMudG9waWNzLmxpc3QpPy5maW5kKCh0KSA9PiB0LmlkID09PSB0b3BpY0lkKVxuXG4gIGNvbnN0IHN1YnRvcGljc0VtcHR5ID0gdXNlU2VsZWN0b3IoKHMpID0+IHMuc3VidG9waWNzKVxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3IoKHMpID0+IHMuc2Vzc2lvbi5jdXJyZW50VXNlcilcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh1c2VyKSB7XG4gICAgICBnZXRUb3BpYyh0b3BpY0lkLCB1c2VyLnVzZXJJZClcbiAgICB9XG4gICAgaWYgKHN1YnRvcGljc0VtcHR5KSBnZXRBbGxTdWJUb3BpY3ModG9waWNJZClcbiAgfSwgW3RvcGljSWQsIHN1YnRvcGljSWQsIHVzZXJdKVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxIb21lUGFnZUdyaWQ+XG4gICAgICAgIDxMZWZ0PlxuICAgICAgICAgIDxVc2VySW5mb3JtYXRpb25EaXNwbGF5IC8+XG4gICAgICAgIDwvTGVmdD5cbiAgICAgICAgPE1pZGRsZT5cbiAgICAgICAgICA8TWFpbkNvbnRlbnQ+XG4gICAgICAgICAgICA8SGVhZGVyQ29udGFpbmVyPlxuICAgICAgICAgICAgICA8SGVhZGVyIHRvcGljPXt0b3BpY30gdXNlcj17dXNlcn0gLz5cbiAgICAgICAgICAgIDwvSGVhZGVyQ29udGFpbmVyPlxuICAgICAgICAgICAgPExpbmUgLz5cbiAgICAgICAgICAgIHsgY29tbWVudElkICYmIDxQYXJlbnRDb21tZW50IHRvcGljSWQ9e3RvcGljSWR9IC8+IH1cbiAgICAgICAgICA8L01haW5Db250ZW50PlxuICAgICAgICA8L01pZGRsZT5cbiAgICAgICAgPFJpZ2h0PlxuICAgICAgICAgIDxSZWNvbW1lbmRhdGlvbnMgLz5cbiAgICAgICAgPC9SaWdodD5cbiAgICAgIDwvSG9tZVBhZ2VHcmlkPlxuICAgICAgPFN1YlRvcGljc1JvdXRlciAvPlxuICAgIDwvQ29udGFpbmVyPlxuXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ViVG9waWNzXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWBcbiAgd2lkdGg6IDEwMHZ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMTB2dztcblxuIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuYFxuZXhwb3J0IGNvbnN0IE1haW5Db250ZW50ID0gc3R5bGVkKCdkaXYnKWBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgfVxuXG5gXG5leHBvcnQgY29uc3QgTGluZSA9IHN0eWxlZCgnaHInKWAgXG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMWVtIDAgMmVtIDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0OCw0OCw1MCk7XG4gIGhlaWdodDogLjVweDtcbiAgYm9yZGVyOiBub25lO1xuYFxuXG5leHBvcnQgY29uc3QgSGVhZGVyQ29udGFpbmVyID0gc3R5bGVkKCdzZWN0aW9uJylgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAxMDAlO1xuICBsaSB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbmBcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuaW1wb3J0IFJlYWN0LCB7XG4gIHVzZVN0YXRlLCB1c2VSZWYsIG1lbW8sXG59IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IHVzZU5hdmlnYXRlLCB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmltcG9ydCBDb2xsYXBzZSBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29sbGFwc2UnXG5pbXBvcnQgeyBVcEFycm93U3ZnLCBEb3duQXJyb3dTdmcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9zdmdzL3N2Z3MnXG5cbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJy4uLy4uLy4uLy4uLy4uL0NvbW1vbkNvbXBvbmVudHMvSWNvbkJ1dHRvbi9JbmRleCdcbmltcG9ydCBDZW5zb3JPdmVybGF5IGZyb20gJy4uLy4uLy4uLy4uLy4uL0NvbW1vbkNvbXBvbmVudHMvQ2Vuc29yT3ZlcmxheS9JbmRleCdcblxuaW1wb3J0IEFjdGlvblRvb2xiYXIgZnJvbSAnLi4vLi4vLi4vLi4vLi4vQ29tbW9uQ29tcG9uZW50cy9BY3Rpb25Ub29sYmFycy9Db21tZW50VG9vbGJhci9JbmRleCdcbmltcG9ydCB7XG4gIENvbW1lbnRDb250YWluZXIsIEhlYWRlciwgVXNlcm5hbWUsIERhdGUsIEJvZHksIEZvb3RlcixcbiAgVGh1bWIsIEV4cGFuZEJ1dHRvbiwgRXZpZGVuY2VTZWN0aW9uLCBDb250ZW50LCBVc2VySW5mb0NvbnRhaW5lciwgT3V0ZXJDb250YWluZXIsXG59IGZyb20gJy4vU3R5bGUnXG5cbmltcG9ydCB7IGdldFRpbWVTaW5jZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2dlbmVyaWMvc3RyaW5nL2RhdGVGb3JtYXR0ZXInXG5pbXBvcnQgdXNlU2V0SW5uZXJIdG1sIGZyb20gJy4uLy4uLy4uLy4uLy4uL2hvb2tzL3VzZVNldElubmVySHRtbCdcblxuaW1wb3J0IHsgUGFyZW50Q29tbWVudENvbnRleHQgfSBmcm9tICcuLi9Db21tZW50Q29sdW1uL0luZGV4J1xuaW1wb3J0IFRoZW1lVG9vbHRpcCBmcm9tICcuLi8uLi8uLi8uLi8uLi9Db21tb25Db21wb25lbnRzL1Rvb2x0aXAvSW5kZXgnXG5pbXBvcnQgeyBVTkRFUl9SRVZJRVcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9lbnVtcy9yZXBvcnRfc3RhdHVzJ1xuaW1wb3J0IHsgQ09NTUVOVCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2VudW1zL2NvbnRlbnRfdHlwZSdcblxuY29uc3QgQ29tbWVudCA9ICh7IGNvbW1lbnREYXRhLCByZXBsaWVzLCBjb21tZW50UmVmIH0pID0+IHtcbiAgaWYgKCFjb21tZW50RGF0YSkgcmV0dXJuIG51bGxcbiAgY29uc3QgeyB0b3BpY0lkIH0gPSBSZWFjdC51c2VDb250ZXh0KFBhcmVudENvbW1lbnRDb250ZXh0KSB8fCB7fVxuICBjb25zdCBjb250ZW50UmVmID0gdXNlUmVmKG51bGwpXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKVxuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VMb2NhdGlvbigpXG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW3Nob3VsZEJsdXIsIHNldFNob3VsZEJsdXJdID0gdXNlU3RhdGUoY29tbWVudERhdGE/LnJlcG9ydFN0YXR1cyA9PT0gVU5ERVJfUkVWSUVXIHx8IGNvbW1lbnREYXRhPy50b3hpY2l0eVN0YXR1cyA9PT0gJ1RPWElDJylcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKChzKSA9PiBzLnNlc3Npb24uY3VycmVudFVzZXIpXG5cbiAgdXNlU2V0SW5uZXJIdG1sKGNvbnRlbnRSZWYsIGNvbW1lbnREYXRhPy5jb250ZW50KVxuXG4gIGNvbnN0IG1pbnMgPSBnZXRUaW1lU2luY2UoY29tbWVudERhdGEuY3JlYXRlZEF0KVxuICBjb25zdCBleHBhbmRJY29uID0gaXNPcGVuID8gPFVwQXJyb3dTdmcgLz4gOiA8RG93bkFycm93U3ZnIC8+XG4gIHJldHVybiAoXG4gICAgPE91dGVyQ29udGFpbmVyIHJlZj17Y29tbWVudFJlZn0+XG4gICAgICA8Q29tbWVudENvbnRhaW5lcj5cbiAgICAgICAgPEhlYWRlciBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0ZShgL2hvbWUvdG9waWNzLyR7dG9waWNJZH0vc3VidG9waWNzLyR7Y29tbWVudERhdGEuc3VidG9waWNJZH0vY29tbWVudHMvJHtjb21tZW50RGF0YS5pZH1gKX0+XG4gICAgICAgICAgPFVzZXJJbmZvQ29udGFpbmVyPlxuICAgICAgICAgICAgPFRodW1iIHNyYz17Y29tbWVudERhdGEuY3JlYXRlZEJ5SWNvblNyYyB8fCAnaHR0cHM6Ly9jaXZpbC1kZXYuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vcHJvZmlsZV9pbWdfMS5wbmcnfSAvPlxuICAgICAgICAgICAgPFRoZW1lVG9vbHRpcFxuICAgICAgICAgICAgICB0b29sdGlwSGVhZGVyPVwiRXhwZXJpZW5jZVwiXG4gICAgICAgICAgICAgIHRvb2x0aXBUZXh0PXtjb21tZW50RGF0YS5jcmVhdGVkQnlFeHBlcmllbmNlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L1VzZXJJbmZvQ29udGFpbmVyPlxuICAgICAgICAgIDxVc2VybmFtZT57Y29tbWVudERhdGEuY3JlYXRlZEJ5fTwvVXNlcm5hbWU+XG4gICAgICAgICAgPERhdGU+e2Ake21pbnN9YH08L0RhdGU+XG4gICAgICAgIDwvSGVhZGVyPlxuICAgICAgICA8Qm9keSBzaG91bGRCbHVyPXtzaG91bGRCbHVyfSBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0ZShgL2hvbWUvdG9waWNzLyR7dG9waWNJZH0vc3VidG9waWNzLyR7Y29tbWVudERhdGEuc3VidG9waWNJZH0vY29tbWVudHMvJHtjb21tZW50RGF0YS5pZH1gKX0+XG4gICAgICAgICAgPENvbnRlbnQgcmVmPXtjb250ZW50UmVmfSAvPlxuICAgICAgICAgIHsgcmVwbGllcy5sZW5ndGggIT09IDBcbiAgICAgICAgICAmJiAoXG4gICAgICAgICAgPEV4cGFuZEJ1dHRvbj5cbiAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgIGljb249e2V4cGFuZEljb259XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzT3BlbighaXNPcGVuKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgUmVwbGllc1xuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgIDwvRXhwYW5kQnV0dG9uPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvQm9keT5cbiAgICAgICAgPEZvb3RlciBzaG91bGRCbHVyPXtzaG91bGRCbHVyfT5cbiAgICAgICAgICA8QWN0aW9uVG9vbGJhclxuICAgICAgICAgICAgbGlrZXM9e2NvbW1lbnREYXRhPy5saWtlc31cbiAgICAgICAgICAgIGNvbW1lbnQ9e2NvbW1lbnREYXRhfVxuICAgICAgICAgICAgdXNlcj17dXNlcn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxDb2xsYXBzZSBpbj17aXNPcGVufT5cbiAgICAgICAgICAgIDxFdmlkZW5jZVNlY3Rpb24+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmVwbGllcy5tYXAoKHJlcGx5LCBpZHgpID0+IChcbiAgICAgICAgICAgICAgICA8Q29tbWVudFxuICAgICAgICAgICAgICAgICAga2V5PXtjb21tZW50RGF0YS5pZCArIFN0cmluZyhpZHgpfVxuICAgICAgICAgICAgICAgICAgY29tbWVudERhdGE9e3JlcGx5LmRhdGF9XG4gICAgICAgICAgICAgICAgICByZXBsaWVzPXtyZXBseS5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L0V2aWRlbmNlU2VjdGlvbj5cbiAgICAgICAgICA8L0NvbGxhcHNlPlxuICAgICAgICA8L0Zvb3Rlcj5cblxuICAgICAgPC9Db21tZW50Q29udGFpbmVyPlxuICAgICAgeyBzaG91bGRCbHVyICYmIChcbiAgICAgIDxDZW5zb3JPdmVybGF5XG4gICAgICAgIHNldFNob3VsZEJsdXI9e3NldFNob3VsZEJsdXJ9XG4gICAgICAgIGNvbnRlbnRJZD17Y29tbWVudERhdGE/LmlkfVxuICAgICAgICBjb250ZW50VHlwZT17Q09NTUVOVH1cbiAgICAgICAgc2hvd05hdmlnYXRpb25Ub1RyaWJ1bmFsPXtjb21tZW50RGF0YT8ucmVwb3J0U3RhdHVzID09PSBVTkRFUl9SRVZJRVcgJiYgIXBhdGhuYW1lLmluY2x1ZGVzKCd0cmlidW5hbCcpfVxuICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9PdXRlckNvbnRhaW5lcj5cblxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW8oQ29tbWVudClcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBPdXRlckNvbnRhaW5lciA9IHN0eWxlZCgnZGl2JylgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIHotaW5kZXg6IDk5O1xuXG5gXG5leHBvcnQgY29uc3QgQ29tbWVudENvbnRhaW5lciA9IHN0eWxlZCgnbGknKWBcbiAgd2lkdGg6IDEwMCU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IC40ZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luLXRvcDogMWVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIGJveC1zaGFkb3c6ICAtNXB4IC01cHggMTBweCAjNWE1YTVhLCA1cHggNXB4IDEwcHggI2ZmZmZmZjtcblxuICBib3JkZXItY29sb3I6IHJnYmEoMjAwLDIwMCwyMDAsMC4yNSk7XG4gIDpob3ZlciB7XG4gICAgLyogb3BhY2l0eTogLjk7ICovXG4gICAgLyogZmlsdGVyOiBicmlnaHRuZXNzKC45KTsgKi9cbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY1ZDQ1NjY7ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Q4RkZGMTtcbiAgfVxuXG4gICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgSGVhZGVyID0gc3R5bGVkKCdkaXYnKWBcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDFlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmBcblxuZXhwb3J0IGNvbnN0IFVzZXJuYW1lID0gc3R5bGVkKCdiJylgIFxuICBjb2xvcjogYmxhY2s7XG5gXG5cbmV4cG9ydCBjb25zdCBEYXRlID0gc3R5bGVkKCd0aW1lJylgIFxuICBjb2xvcjogZ3JheTtcbmBcblxuZXhwb3J0IGNvbnN0IEJvZHkgPSBzdHlsZWQoJ2RpdicpYFxuICBmaWx0ZXI6ICR7KHByb3BzKSA9PiAocHJvcHMuc2hvdWxkQmx1ciA/ICdibHVyKDVweCknIDogJ3Vuc2V0Jyl9O1xuICBwb2ludGVyLWV2ZW50czogJHsocHJvcHMpID0+IChwcm9wcy5zaG91bGRCbHVyID8gJ25vbmUnIDogJ2luaXRpYWwnKX07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6IGJsYWNrO1xuICBtaW4taGVpZ2h0OiAxMHZoO1xuICBwYWRkaW5nOiAxZW07XG4gIHdpZHRoOiAxMDAlO1xuYFxuXG5leHBvcnQgY29uc3QgVGh1bWIgPSBzdHlsZWQoJ2ltZycpYCBcbiAgZmxleC1zaHJpbms6IDA7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7ICAgICAgXG4gIGJvcmRlci1yYWRpdXM6IDUwJTsgXG5gXG5cbmV4cG9ydCBjb25zdCBVc2VySW5mb0NvbnRhaW5lciA9IHN0eWxlZCgnZGl2JylgXG4gIGRpc3BsYXk6IGZsZXg7XG5gXG5cbmV4cG9ydCBjb25zdCBFeHBhbmRCdXR0b24gPSBzdHlsZWQoJ2RpdicpYCBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XG5gXG5cbmV4cG9ydCBjb25zdCBFdmlkZW5jZVNlY3Rpb24gPSBzdHlsZWQoJ3VsJylgIFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGMkY1O1xuICB3aWR0aDogMTAwJTtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICBwYWRkaW5nOiAwIC41ZW0gLjVlbSAuNWVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuYFxuZXhwb3J0IGNvbnN0IEZvb3RlciA9IHN0eWxlZCgnZGl2JylgXG4gIGZpbHRlcjogJHsocHJvcHMpID0+IChwcm9wcy5zaG91bGRCbHVyID8gJ2JsdXIoNXB4KScgOiAndW5zZXQnKX07XG4gIHBvaW50ZXItZXZlbnRzOiAkeyhwcm9wcykgPT4gKHByb3BzLnNob3VsZEJsdXIgPyAnbm9uZScgOiAnaW5pdGlhbCcpfTtcbiAgd2lkdGg6IDEwMCU7XG5gXG5cbmV4cG9ydCBjb25zdCBDb250ZW50ID0gc3R5bGVkKCdwJylgIFxuICBwYWRkaW5nOiAxZW07XG5gXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IENvbW1lbnQgZnJvbSAnLi4vQ29tbWVudC9JbmRleCdcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4vU3R5bGUnXG5cbmV4cG9ydCBjb25zdCBQYXJlbnRDb21tZW50Q29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQobnVsbClcblxuY29uc3QgQ29tbWVudENvbHVtbiA9ICh7XG4gIG51bUNvbW1lbnRzLCBjb21tZW50cywgY29tbWVudFNlbnRpbWVudCwgY29sb3IsIHRvcGljSWQsXG59KSA9PiAoXG4gIDxDb250YWluZXIgY29sb3I9e2NvbG9yfT5cbiAgICA8aDE+XG4gICAgICB7bnVtQ29tbWVudHMgfHwgJyd9XG4gICAgICB7JyAnfVxuICAgICAge2NvbW1lbnRTZW50aW1lbnQgfHwgJyd9XG4gICAgICB7JyAnfVxuICAgICAgQ29tbWVudHNcbiAgICA8L2gxPlxuICAgIHtcbiAgICAgICAgICBjb21tZW50cz8ubWFwKChjb21tZW50LCBpZHgpID0+IChcbiAgICAgICAgICAgIDxQYXJlbnRDb21tZW50Q29udGV4dC5Qcm92aWRlclxuICAgICAgICAgICAgICBrZXk9e2NvbW1lbnQuZGF0YT8uaWQgKyBTdHJpbmcoaWR4KX1cbiAgICAgICAgICAgICAgdmFsdWU9e3tcbiAgICAgICAgICAgICAgICBjb21tZW50SWQ6IGNvbW1lbnQuZGF0YT8uaWQsXG4gICAgICAgICAgICAgICAgdG9waWNJZCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPENvbW1lbnRcbiAgICAgICAgICAgICAgICBrZXk9e2NvbW1lbnQuZGF0YT8uaWQgKyBTdHJpbmcoaWR4KX1cbiAgICAgICAgICAgICAgICBjb21tZW50RGF0YT17Y29tbWVudC5kYXRhfVxuICAgICAgICAgICAgICAgIHJlcGxpZXM9e2NvbW1lbnQuY2hpbGRyZW59XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1BhcmVudENvbW1lbnRDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgICAgICkpXG4gICAgICAgIH1cbiAgPC9Db250YWluZXI+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRDb2x1bW5cbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQoJ3VsJylgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDJlbTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICAvKiBib3JkZXItbGVmdDogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjazsgKi9cbiAgei1pbmRleDogOTk7XG4gIG9wYWNpdHk6IC45OTtcbiAgd2lkdGg6IDUwdnc7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBib3JkZXItY29sb3I6IHJnYmEoMjAwLDIwMCwyMDAsMC4yNSk7XG5cbiAgaDEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nOiAxZW07XG4gICAgZm9udC1zaXplOiAxdnc7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMuY29sb3J9O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuXG4gICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgICAgIGZvbnQtc2l6ZTogNXZ3O1xuXG4gICAgfVxuICB9XG5cbiAgXG4gICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgfVxuYFxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIG1lbW8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG5pbXBvcnQgeyBUYWIgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5cbmltcG9ydCB1c2VDYXRlZ29yaXplQ29tbWVudHMgZnJvbSAnLi4vaG9va3MvdXNlQ2F0ZWdvcml6ZUNvbW1lbnRzJ1xuaW1wb3J0IHVzZUJpbmREaXNwYXRjaCBmcm9tICcuLi8uLi8uLi8uLi8uLi9ob29rcy9yZWR1eC91c2VCaW5kRGlzcGF0Y2gnXG5cbmltcG9ydCBzdWJUb3BpY0FjdGlvbnMgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy9zdWJ0b3BpY3MnXG5pbXBvcnQgY29tbWVudEFjdGlvbnMgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy9jb21tZW50cydcbmltcG9ydCB0b3BpY0FjdGlvbnMgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy90b3BpY3MnXG5cbmltcG9ydCBDb21tZW50Q29sdW1uIGZyb20gJy4uL0NvbW1lbnRDb2x1bW4vSW5kZXgnXG5pbXBvcnQgeyBDb2x1bW5Db250YWluZXIsIFRocmVhZENvbnRhaW5lciB9IGZyb20gJy4vU3R5bGUvaW5kZXgnXG5pbXBvcnQgeyBUaGVtZVRhYiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL0NvbW1vbkNvbXBvbmVudHMvVGFicy9TdHlsZSdcbmltcG9ydCB7IExpbmUgfSBmcm9tICcuLi8uLi9TdHlsZSdcblxuY29uc3QgQ29tbWVudFRocmVhZCA9ICgpID0+IHtcbiAgY29uc3QgeyBjb21tZW50SWQsIHRvcGljSWQgfSA9IHVzZVBhcmFtcygpXG4gIGNvbnN0IHsgZ2V0QWxsQ29tbWVudFJlcGxpZXMsIGdldFRvcGljIH0gPSB1c2VCaW5kRGlzcGF0Y2goXG4gICAgc3ViVG9waWNBY3Rpb25zLCBjb21tZW50QWN0aW9ucywgdG9waWNBY3Rpb25zLFxuICApXG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnNlc3Npb24uY3VycmVudFVzZXIpXG4gIC8vIGNvbnN0IHN1YnRvcGljID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5zdWJ0b3BpY3MpW3N1YlRvcGljSWRdXG4gIGNvbnN0IFtrZXksIHNldEtleV0gPSB1c2VTdGF0ZSgnYWxsJylcblxuICBjb25zdCB7XG4gICAgUE9TSVRJVkU6IHBvc2l0aXZlQ29tbWVudHMsXG4gICAgTkVVVFJBTDogbmV1dHJhbENvbW1lbnRzLFxuICAgIE5FR0FUSVZFOiBuZWdhdGl2ZUNvbW1lbnRzLFxuICAgIGFsbDogYWxsQ29tbWVudHMsXG4gIH0gPSB1c2VDYXRlZ29yaXplQ29tbWVudHMoKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coY29tbWVudElkKVxuICAgIGdldEFsbENvbW1lbnRSZXBsaWVzKGNvbW1lbnRJZClcbiAgICBnZXRUb3BpYyh0b3BpY0lkLCB1c2VyPy5pZClcbiAgfSwgW3VzZXIsIGNvbW1lbnRJZF0pXG4gIHJldHVybiAoXG5cbiAgICA8VGhyZWFkQ29udGFpbmVyPlxuICAgICAgPExpbmUgLz5cbiAgICAgIDxUaGVtZVRhYlxuICAgICAgICBhY3RpdmVLZXk9e2tleX1cbiAgICAgICAgb25TZWxlY3Q9eyhrKSA9PiBzZXRLZXkoayl9XG4gICAgICA+XG4gICAgICAgIDxUYWIgZXZlbnRLZXk9XCJhbGxcIiB0aXRsZT1cIkFsbFwiPlxuICAgICAgICAgIDxDb2x1bW5Db250YWluZXI+XG4gICAgICAgICAgICA8Q29tbWVudENvbHVtbiBudW1Db21tZW50cz17MH0gY29tbWVudHM9e2FsbENvbW1lbnRzfSBjb21tZW50U2VudGltZW50PVwiXCIgY29sb3I9XCIjNkE2RTcwXCIgLz5cbiAgICAgICAgICA8L0NvbHVtbkNvbnRhaW5lcj5cbiAgICAgICAgPC9UYWI+XG4gICAgICAgIDxUYWIgZXZlbnRLZXk9XCJwb3NpdGl2ZVwiIHRpdGxlPVwiR2VuZXJhbGx5IFBvc2l0aXZlXCI+XG4gICAgICAgICAgPENvbHVtbkNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxDb21tZW50Q29sdW1uIG51bUNvbW1lbnRzPXswfSBjb21tZW50cz17cG9zaXRpdmVDb21tZW50c30gY29tbWVudFNlbnRpbWVudD1cIkdlbmVyYWxseSBQb3NpdGl2ZVwiIGNvbG9yPVwiIzZBNkU3MFwiIC8+XG4gICAgICAgICAgPC9Db2x1bW5Db250YWluZXI+XG4gICAgICAgIDwvVGFiPlxuICAgICAgICA8VGFiIGV2ZW50S2V5PVwibmV1dHJhbFwiIHRpdGxlPVwiTmV1dHJhbFwiPlxuICAgICAgICAgIDxDb2x1bW5Db250YWluZXI+XG4gICAgICAgICAgICA8Q29tbWVudENvbHVtbiBudW1Db21tZW50cz17MH0gY29tbWVudHM9e25ldXRyYWxDb21tZW50c30gY29tbWVudFNlbnRpbWVudD1cIk5ldXRyYWxcIiBjb2xvcj1cIiM0NzRBNEZcIiAvPlxuICAgICAgICAgIDwvQ29sdW1uQ29udGFpbmVyPlxuICAgICAgICA8L1RhYj5cbiAgICAgICAgPFRhYiBldmVudEtleT1cIm5lZ2F0aXZlXCIgdGl0bGU9XCJHZW5lcmFsbHkgTmVnYXRpdmVcIj5cbiAgICAgICAgICA8Q29sdW1uQ29udGFpbmVyPlxuICAgICAgICAgICAgPENvbW1lbnRDb2x1bW4gbnVtQ29tbWVudHM9ezB9IGNvbW1lbnRzPXtuZWdhdGl2ZUNvbW1lbnRzfSBjb21tZW50U2VudGltZW50PVwiR2VuZXJhbGx5IE5lZ2F0aXZlXCIgY29sb3I9XCIjNkE2RTcwXCIgLz5cbiAgICAgICAgICA8L0NvbHVtbkNvbnRhaW5lcj5cbiAgICAgICAgPC9UYWI+XG4gICAgICA8L1RoZW1lVGFiPlxuICAgIDwvVGhyZWFkQ29udGFpbmVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW8oQ29tbWVudFRocmVhZClcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBUaHJlYWRDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogNzB2dztcblxuYFxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZCgnZGl2JylgXG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiA1MHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA1ZW07XG5cbiAgaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxLjVlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xuICAgIGgxIHtcbiAgICAgIG1heC13aWR0aDogMzB2dztcbiAgICB9XG4gICAgYiB7XG4gICAgIGNvbG9yOiB2YXIoLS1tLXByaW1hcnktY29sb3IpXG4gICAgfVxuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBDb2x1bW5Db250YWluZXIgPSBzdHlsZWQoJ3NlY3Rpb24nKWBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIC8qIGJvcmRlci10b3A6IDFweCBzb2xpZCBncmF5OyAqL1xuICB3aWR0aDogMTAwdnc7XG5cbiAgdWw6Zmlyc3QtY2hpbGQge1xuICAgIC8qIGJvcmRlci1yaWdodDogLjFweCBkYXNoZWQgcmdiKDQ4LDQ4LDUwKTsgKi9cbiAgfVxuXG4gICB1bDpsYXN0LWNoaWxkIHtcbiAgICAvKiBib3JkZXItbGVmdDogLjFweCBzb2xpZCByZ2IoNDgsNDgsNTApOyAqL1xuICB9XG5cblxuYFxuIiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LXByb3BzLW5vLXNwcmVhZGluZyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8sIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IHVzZVBhcmFtcywgdXNlU2VhcmNoUGFyYW1zLCB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBUb29sdGlwLCBPdmVybGF5VHJpZ2dlciB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcblxuaW1wb3J0IEVtYmVkZWRUd2VldCBmcm9tICcuLi8uLi8uLi8uLi8uLi9Db21tb25Db21wb25lbnRzL1RvcGljQ2FyZHMvVHdlZXRDYXJkL0luZGV4J1xuaW1wb3J0IFZpZGVvU2hvd1BhZ2UgZnJvbSAnLi4vLi4vLi4vLi4vLi4vVmlkZW9TaG93UGFnZS9JbmRleCdcbmltcG9ydCBFeHRlcm5hbENvbnRlbnRDYXJkIGZyb20gJy4uLy4uLy4uLy4uLy4uL0NvbW1vbkNvbXBvbmVudHMvVG9waWNDYXJkcy9FeHRlcm5hbENvbnRlbnRDYXJkL0luZGV4J1xuaW1wb3J0IFVzZXJQcm92aWRlZE1lZGlhQ2FyZCBmcm9tICcuLi8uLi8uLi8uLi8uLi9Db21tb25Db21wb25lbnRzL1RvcGljQ2FyZHMvVXNlclByb3ZpZGVkTWVkaWFDYXJkL0luZGV4J1xuaW1wb3J0IFVzZXJJbmZvSGVhZGVyIGZyb20gJy4uLy4uLy4uLy4uLy4uL0NvbW1vbkNvbXBvbmVudHMvVXNlckluZm9IZWFkZXIvSW5kZXgnXG5cbmltcG9ydCB1c2VTZXRJbm5lckh0bWwgZnJvbSAnLi4vLi4vLi4vLi4vLi4vaG9va3MvdXNlU2V0SW5uZXJIdG1sJ1xuXG5pbXBvcnQgeyBnZXRUaW1lU2luY2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9nZW5lcmljL3N0cmluZy9kYXRlRm9ybWF0dGVyJ1xuXG5pbXBvcnQge1xuICBDb250YWluZXIsIERlc2NyaXB0aW9uLCBUb3BpY1N1bW1hcnlDb250YWluZXIsIFN0eWxlZExvbmdEb3duQXJyb3csXG59IGZyb20gJy4vU3R5bGUvaW5kZXgnXG5pbXBvcnQgeyB1dWlkUmVnRXggfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9nZW5lcmljL3JlZ2V4L3V1aWQnXG5cbmNvbnN0IFRvb2x0aXBDb21wb25lbnQgPSAoeyB0ZXh0LCB0aXRsZSwgcmVmZXJlbmNlIH0pID0+IChcbiAgPE92ZXJsYXlUcmlnZ2VyXG4gICAgcGxhY2VtZW50PVwidG9wXCJcbiAgICBvdmVybGF5PXsoXG4gICAgICA8VG9vbHRpcD5cbiAgICAgICAgPHN0cm9uZz57dGl0bGV9PC9zdHJvbmc+XG4gICAgICA8L1Rvb2x0aXA+XG4gICAgICApfVxuICA+XG4gICAgPHNwYW4gb25DbGljaz17KCkgPT4gcmVmZXJlbmNlPy5jdXJyZW50Py5zY3JvbGxJbnRvVmlldygpfT57dGV4dH08L3NwYW4+XG4gIDwvT3ZlcmxheVRyaWdnZXI+XG4pXG5cbmNvbnN0IEhlYWRlciA9ICh7IHRvcGljLCB1c2VyIH0pID0+IHtcbiAgbGV0IGNvbnRlbnQgPSBudWxsXG4gIGxldCBzdWJ0b3BpY0NvbnRlbnQgPSBudWxsXG4gIGNvbnN0IHsgJyonOiB1cmwgfSA9IHVzZVBhcmFtcygpXG4gIGNvbnN0IFtzdWJ0b3BpY0lkLCBjb21tZW50SWRdID0gdXJsID8gdXJsLm1hdGNoKHV1aWRSZWdFeCkgOiBbXVxuXG4gIGNvbnN0IHN1YnRvcGljID0gdXNlU2VsZWN0b3IoKHMpID0+IHMuc3VidG9waWNzKVtzdWJ0b3BpY0lkXVxuICBjb25zdCBzaG93U3ViVG9waWMgPSBzdWJ0b3BpYyAmJiBzdWJ0b3BpYz8udGl0bGUgIT09ICdHZW5lcmFsJ1xuXG4gIGNvbnN0IGNvbW1vblByb3BzID0gdXNlTWVtbygoKSA9PiAoe1xuICAgIHRvcGljLCB1c2VyLCBzaG93TGlua3M6IHRydWUsXG4gIH0pLCBbdG9waWMsIHVzZXJdKVxuXG4gIGNvbnN0IGRlc2NSZWYgPSB1c2VSZWYobnVsbClcbiAgY29uc3Qgc3VidG9waWNSZWYgPSB1c2VSZWYobnVsbClcbiAgY29uc3QgdG9waWNSZWYgPSB1c2VSZWYobnVsbClcblxuICB1c2VTZXRJbm5lckh0bWwoZGVzY1JlZiwgdG9waWM/LmRlc2NyaXB0aW9uKVxuXG4gIGNvbnN0IGNvbW1vblByb3BzU3ViVG9waWMgPSB1c2VNZW1vKCgpID0+ICh7XG4gICAgdG9waWM6IHN1YnRvcGljLCB1c2VyLCBzaG93TGlua3M6IHRydWUsXG4gIH0pLCBbc3VidG9waWMsIHVzZXJdKVxuXG4gIGlmICh0b3BpYz8udHdlZXRIdG1sKSBjb250ZW50ID0gPEVtYmVkZWRUd2VldCB7Li4uY29tbW9uUHJvcHN9IC8+XG4gIGVsc2UgaWYgKHRvcGljPy55dFVybCkgY29udGVudCA9IDxWaWRlb1Nob3dQYWdlIHsuLi5jb21tb25Qcm9wc30gc3JjPXt0b3BpYy55dFVybC5yZXBsYWNlKCd3YXRjaD92PScsICdlbWJlZC8nKX0gLz5cbiAgZWxzZSBpZiAodG9waWM/LnZvZFVybCB8fCB0b3BpYz8uaW1hZ2VVcmwpIGNvbnRlbnQgPSA8VXNlclByb3ZpZGVkTWVkaWFDYXJkIHsuLi5jb21tb25Qcm9wc30gLz5cbiAgZWxzZSBjb250ZW50ID0gPEV4dGVybmFsQ29udGVudENhcmQgey4uLmNvbW1vblByb3BzfSAvPlxuICBpZiAoc3VidG9waWMpIHtcbiAgICBpZiAoc3VidG9waWM/LnR3ZWV0SHRtbCkgc3VidG9waWNDb250ZW50ID0gPEVtYmVkZWRUd2VldCB7Li4uY29tbW9uUHJvcHNTdWJUb3BpY30gLz5cbiAgICBlbHNlIGlmIChzdWJ0b3BpYz8ueXRVcmwpIHN1YnRvcGljQ29udGVudCA9IDxWaWRlb1Nob3dQYWdlIHsuLi5jb21tb25Qcm9wc1N1YlRvcGljfSBzcmM9e3N1YnRvcGljLnl0VXJsLnJlcGxhY2UoJ3dhdGNoP3Y9JywgJ2VtYmVkLycpfSAvPlxuICAgIGVsc2UgaWYgKHN1YnRvcGljPy52b2RVcmwgfHwgc3VidG9waWM/LmltYWdlVXJsKSB7XG4gICAgICBzdWJ0b3BpY0NvbnRlbnQgPSA8VXNlclByb3ZpZGVkTWVkaWFDYXJkIHsuLi5jb21tb25Qcm9wc1N1YlRvcGljfSAvPlxuICAgIH0gZWxzZSBzdWJ0b3BpY0NvbnRlbnQgPSA8RXh0ZXJuYWxDb250ZW50Q2FyZCB7Li4uY29tbW9uUHJvcHNTdWJUb3BpY30gLz5cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWZvY3VzLWluXCI+XG4gICAgICAgIHsnICd9XG4gICAgICAgIHtcbiAgICAgICAgICBzaG93U3ViVG9waWMgPyAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICBEaXNjdXNzaW9uIFJlbGF0ZWQgVG8gUGFyZW50XG4gICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgIDxUb29sdGlwQ29tcG9uZW50IHRleHQ9XCJUb3BpY1wiIHRpdGxlPXt0b3BpYz8udGl0bGV9IHJlZmVyZW5jZT17dG9waWNSZWZ9IC8+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgeydXZVxcJ3JlIFRhbGtpbmcgQWJvdXQgVGhpcyd9XG4gICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgIDxUb29sdGlwQ29tcG9uZW50IHRleHQ9XCJUb3BpY1wiIHRpdGxlPXt0b3BpYz8udGl0bGV9IHJlZmVyZW5jZT17dG9waWNSZWZ9IC8+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIDwvaDE+XG5cbiAgICAgIDxkaXYgcmVmPXt0b3BpY1JlZn0gc3R5bGU9e3sgd2lkdGg6ICc5MCUnIH19PlxuICAgICAgICB7IXNob3dTdWJUb3BpYyAmJiBjb250ZW50IH1cbiAgICAgICAgPFRvcGljU3VtbWFyeUNvbnRhaW5lciBoaWRkZW49eyFzaG93U3ViVG9waWN9PlxuICAgICAgICAgIDxVc2VySW5mb0hlYWRlclxuICAgICAgICAgICAgaWNvblNyYz17dG9waWM/LmNyZWF0ZWRCeUljb25TcmN9XG4gICAgICAgICAgICB0aW1lPXtnZXRUaW1lU2luY2UodG9waWM/LmNyZWF0ZWRBdCl9XG4gICAgICAgICAgICB1c2VybmFtZT17dG9waWM/LmNyZWF0ZWRCeX1cbiAgICAgICAgICAgIHVzZXJJZD17dG9waWM/LnVzZXJJZH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxpbWcgc3JjPXt0b3BpYz8udGh1bWJJbWdVcmx9IGFsdD1cIk5vdGhpbmcgVG8gU2hvd1wiIC8+XG4gICAgICAgICAgPERlc2NyaXB0aW9uPlxuICAgICAgICAgICAgPHNwYW4gcmVmPXtkZXNjUmVmfSAvPlxuICAgICAgICAgIDwvRGVzY3JpcHRpb24+XG4gICAgICAgIDwvVG9waWNTdW1tYXJ5Q29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgICB7IHN1YnRvcGljICYmIDxTdHlsZWRMb25nRG93bkFycm93IGhpZGRlbj17IXNob3dTdWJUb3BpY30gLz4gfVxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtZm9jdXMtaW5cIiBoaWRkZW49eyFzaG93U3ViVG9waWN9PlxuICAgICAgICB7JyAnfVxuICAgICAgICB7J1dlXFwncmUgVGFsa2luZyBBYm91dCBUaGlzJ31cbiAgICAgICAgeycgJ31cbiAgICAgICAgPFRvb2x0aXBDb21wb25lbnQgdGV4dD1cIlN1YnRvcGljXCIgdGl0bGU9e3N1YnRvcGljPy50aXRsZX0gcmVmZXJlbmNlPXtzdWJ0b3BpY1JlZn0gLz5cbiAgICAgIDwvaDE+XG4gICAgICA8ZGl2IGhpZGRlbj17IXNob3dTdWJUb3BpY30gcmVmPXtzdWJ0b3BpY1JlZn0gc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XG4gICAgICAgIHtzdWJ0b3BpY0NvbnRlbnR9XG4gICAgICA8L2Rpdj5cbiAgICA8L0NvbnRhaW5lcj5cblxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IExvbmdEb3duQXJyb3cgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9zdmdzL3N2Z3MnXG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpYCBcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMDAsMjAwLDIwMCwwLjI1KTtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZSA7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiA1MHZ3O1xuICBwYWRkaW5nOiAxZW07XG4gIC8qIGJvcmRlci10b3A6IG5vbmU7ICovXG4gIHBhZGRpbmctdG9wOiA1ZW07XG4gIHotaW5kZXg6IDk5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGN0Y3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgaDEge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvKiB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgKi9cbiAgICBsZXR0ZXItc3BhY2luZzogLjJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAzdnc7XG4gICAgLyogZm9udC13ZWlnaHQ6IGJvbGQ7ICovXG4gIH1cbiAgc3BhbiB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICBwYWRkaW5nOiAxZW0gMDtcbiAgfVxuXG5gXG5cbmV4cG9ydCBjb25zdCBMaW5rc0NvbnRhaW5lciA9IHN0eWxlZCgnZGl2JylgXG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHVsOmZpcnN0LWNoaWxkIHtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBncmF5O1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBEZXNjcmlwdGlvbiA9IHN0eWxlZCgncCcpYFxuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAuN3Z3O1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHBhZGRpbmc6IDFlbTtcbmBcblxuZXhwb3J0IGNvbnN0IFRvcGljU3VtbWFyeUNvbnRhaW5lciA9IHN0eWxlZCgnZGl2JylgICBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLyogaGVpZ2h0OiAkeyhwcm9wcykgPT4gKGAke3Byb3BzLmhlaWdodH1weGApfTsgKi9cbiAgLyogd2lkdGg6IDQwdnc7ICAgKi9cbiAgbWFyZ2luOiAyZW07XG4gIGJvcmRlci1yYWRpdXM6IC41ZW07XG4gIGJveC1zaGFkb3c6ICAtNXB4IC01cHggMTBweCAjNWE1YTVhLCA1cHggNXB4IDEwcHggI2ZmZmZmZjtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbmBcblxuZXhwb3J0IGNvbnN0IFN0eWxlZExvbmdEb3duQXJyb3cgPSBzdHlsZWQoTG9uZ0Rvd25BcnJvdylgIFxuICBtYXJnaW4tYm90dG9tOiAydnc7XG5gXG4iLCJpbXBvcnQgUmVhY3QsIHsgbWVtbywgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgQ29tbWVudCBmcm9tICcuLi9Db21tZW50L0luZGV4J1xuaW1wb3J0IHsgUGFyZW50Q29tbWVudENvbnRleHQgfSBmcm9tICcuLi9Db21tZW50Q29sdW1uL0luZGV4J1xuXG5jb25zdCBQYXJlbnRDb21tZW50ID0gKHsgdG9waWNJZCB9KSA9PiB7XG4gIGNvbnN0IHRhcmdldENvbW1lbnQgPSB1c2VTZWxlY3RvcigocykgPT4gcy5jb21tZW50cy50YXJnZXRDb21tZW50KVxuICBjb25zdCBjb21tZW50UmVmID0gdXNlQ2FsbGJhY2soKG5vZGUpID0+IHtcbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgbm9kZS5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuXG4gICAgPFBhcmVudENvbW1lbnRDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICBjb21tZW50SWQ6IHRhcmdldENvbW1lbnQ/LmlkLFxuICAgICAgICB0b3BpY0lkLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8Q29tbWVudCBjb21tZW50UmVmPXtjb21tZW50UmVmfSBjb21tZW50RGF0YT17dGFyZ2V0Q29tbWVudH0gcmVwbGllcz17W119IC8+XG4gICAgPC9QYXJlbnRDb21tZW50Q29udGV4dC5Qcm92aWRlcj5cblxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW8oUGFyZW50Q29tbWVudClcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCBtZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuaW1wb3J0IHsgVGFiIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuXG5pbXBvcnQgdXNlQ2F0ZWdvcml6ZUNvbW1lbnRzIGZyb20gJy4uL2hvb2tzL3VzZUNhdGVnb3JpemVDb21tZW50cydcbmltcG9ydCB1c2VCaW5kRGlzcGF0Y2ggZnJvbSAnLi4vLi4vLi4vLi4vLi4vaG9va3MvcmVkdXgvdXNlQmluZERpc3BhdGNoJ1xuXG5pbXBvcnQgc3ViVG9waWNBY3Rpb25zIGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvc3VidG9waWNzJ1xuaW1wb3J0IGNvbW1lbnRBY3Rpb25zIGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvY29tbWVudHMnXG5pbXBvcnQgdG9waWNBY3Rpb25zIGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvdG9waWNzJ1xuXG5pbXBvcnQgQ29tbWVudENvbHVtbiBmcm9tICcuLi9Db21tZW50Q29sdW1uL0luZGV4J1xuaW1wb3J0IHsgQ29sdW1uQ29udGFpbmVyLCBUaHJlYWRDb250YWluZXIgfSBmcm9tICcuL1N0eWxlL2luZGV4J1xuaW1wb3J0IHsgVGhlbWVUYWIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9Db21tb25Db21wb25lbnRzL1RhYnMvU3R5bGUnXG5pbXBvcnQgeyBMaW5lIH0gZnJvbSAnLi4vLi4vU3R5bGUnXG5pbXBvcnQgdXNlU2Vzc2lvblR5cGUgZnJvbSAnLi4vLi4vLi4vLi4vLi4vaG9va3MvcGVybWlzc2lvbnMvdXNlU2Vzc2lvblR5cGUnXG5cbmNvbnN0IFN1YlRvcGljVGhyZWFkID0gKCkgPT4ge1xuICBjb25zdCB7IHN1YlRvcGljSWQsIHRvcGljSWQgfSA9IHVzZVBhcmFtcygpXG4gIGNvbnN0IHsgZ2V0QWxsQ29tbWVudHMsIGdldFRvcGljIH0gPSB1c2VCaW5kRGlzcGF0Y2goXG4gICAgc3ViVG9waWNBY3Rpb25zLCBjb21tZW50QWN0aW9ucywgdG9waWNBY3Rpb25zLFxuICApXG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnNlc3Npb24uY3VycmVudFVzZXIpXG4gIGNvbnN0IHN1YnRvcGljID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5zdWJ0b3BpY3MpW3N1YlRvcGljSWRdXG4gIGNvbnN0IFtrZXksIHNldEtleV0gPSB1c2VTdGF0ZSgnYWxsJylcbiAgY29uc3Qgc2Vzc2lvblR5cGUgPSB1c2VTZXNzaW9uVHlwZSgpXG5cbiAgY29uc3Qge1xuICAgIFBPU0lUSVZFOiBwb3NpdGl2ZUNvbW1lbnRzLFxuICAgIE5FVVRSQUw6IG5ldXRyYWxDb21tZW50cyxcbiAgICBORUdBVElWRTogbmVnYXRpdmVDb21tZW50cyxcbiAgICBhbGw6IGFsbENvbW1lbnRzLFxuICB9ID0gdXNlQ2F0ZWdvcml6ZUNvbW1lbnRzKClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIGNvbnN0IHsgc2lnbmVkSW5WaWFDbGVyaywgc2lnbmVkSW5WaWFESUQsIHNpZ25lZEluVmlhQ2l2aWMgfSA9IHNlc3Npb25UeXBlXG4gICAgLy8gaWYgKCFzaWduZWRJblZpYUNsZXJrICYmICFzaWduZWRJblZpYURJRCkgcmV0dXJuIG5ldyBQcm9taXNlKClcbiAgICBpZiAodXNlcj8udXNlcklkKSB7XG4gICAgICBnZXRBbGxDb21tZW50cyhzdWJUb3BpY0lkLCB1c2VyLnVzZXJJZClcbiAgICAgIGdldFRvcGljKHRvcGljSWQsIHVzZXIudXNlcklkKVxuICAgIH1cbiAgfSwgW3VzZXJdKVxuICByZXR1cm4gKFxuXG4gICAgPFRocmVhZENvbnRhaW5lcj5cbiAgICAgIDxMaW5lIC8+XG4gICAgICA8VGhlbWVUYWJcbiAgICAgICAgYWN0aXZlS2V5PXtrZXl9XG4gICAgICAgIG9uU2VsZWN0PXsoaykgPT4gc2V0S2V5KGspfVxuICAgICAgPlxuICAgICAgICA8VGFiIGV2ZW50S2V5PVwiYWxsXCIgdGl0bGU9XCJBbGxcIj5cbiAgICAgICAgICA8Q29sdW1uQ29udGFpbmVyPlxuICAgICAgICAgICAgPENvbW1lbnRDb2x1bW4gdG9waWNJZD17dG9waWNJZH0gbnVtQ29tbWVudHM9e3N1YnRvcGljPy5hbGxDb21tZW50c30gY29tbWVudHM9e2FsbENvbW1lbnRzfSBjb21tZW50U2VudGltZW50PVwiXCIgY29sb3I9XCIjNkE2RTcwXCIgLz5cbiAgICAgICAgICA8L0NvbHVtbkNvbnRhaW5lcj5cbiAgICAgICAgPC9UYWI+XG4gICAgICAgIDxUYWIgZXZlbnRLZXk9XCJwb3NpdGl2ZVwiIHRpdGxlPVwiR2VuZXJhbGx5IFBvc2l0aXZlXCI+XG4gICAgICAgICAgPENvbHVtbkNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxDb21tZW50Q29sdW1uIHRvcGljSWQ9e3RvcGljSWR9IG51bUNvbW1lbnRzPXtzdWJ0b3BpYz8ucG9zaXRpdmVDb21tZW50c30gY29tbWVudHM9e3Bvc2l0aXZlQ29tbWVudHN9IGNvbW1lbnRTZW50aW1lbnQ9XCJHZW5lcmFsbHkgUG9zaXRpdmVcIiBjb2xvcj1cIiM2QTZFNzBcIiAvPlxuICAgICAgICAgIDwvQ29sdW1uQ29udGFpbmVyPlxuICAgICAgICA8L1RhYj5cbiAgICAgICAgPFRhYiBldmVudEtleT1cIm5ldXRyYWxcIiB0aXRsZT1cIk5ldXRyYWxcIj5cbiAgICAgICAgICA8Q29sdW1uQ29udGFpbmVyPlxuICAgICAgICAgICAgPENvbW1lbnRDb2x1bW4gdG9waWNJZD17dG9waWNJZH0gbnVtQ29tbWVudHM9e3N1YnRvcGljPy5uZXV0cmFsQ29tbWVudHN9IGNvbW1lbnRzPXtuZXV0cmFsQ29tbWVudHN9IGNvbW1lbnRTZW50aW1lbnQ9XCJOZXV0cmFsXCIgY29sb3I9XCIjNDc0QTRGXCIgLz5cbiAgICAgICAgICA8L0NvbHVtbkNvbnRhaW5lcj5cbiAgICAgICAgPC9UYWI+XG4gICAgICAgIDxUYWIgZXZlbnRLZXk9XCJuZWdhdGl2ZVwiIHRpdGxlPVwiR2VuZXJhbGx5IE5lZ2F0aXZlXCI+XG4gICAgICAgICAgPENvbHVtbkNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxDb21tZW50Q29sdW1uIHRvcGljSWQ9e3RvcGljSWR9IG51bUNvbW1lbnRzPXtzdWJ0b3BpYz8ubmVnYXRpdmVDb21tZW50c30gY29tbWVudHM9e25lZ2F0aXZlQ29tbWVudHN9IGNvbW1lbnRTZW50aW1lbnQ9XCJHZW5lcmFsbHkgTmVnYXRpdmVcIiBjb2xvcj1cIiM2QTZFNzBcIiAvPlxuICAgICAgICAgIDwvQ29sdW1uQ29udGFpbmVyPlxuICAgICAgICA8L1RhYj5cbiAgICAgIDwvVGhlbWVUYWI+XG4gICAgPC9UaHJlYWRDb250YWluZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVtbyhTdWJUb3BpY1RocmVhZClcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBUaHJlYWRDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogNzB2dztcblxuYFxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZCgnZGl2JylgXG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiA1MHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA1ZW07XG5cbiAgaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxLjVlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xuICAgIGgxIHtcbiAgICAgIG1heC13aWR0aDogMzB2dztcbiAgICB9XG4gICAgYiB7XG4gICAgIGNvbG9yOiB2YXIoLS1tLXByaW1hcnktY29sb3IpXG4gICAgfVxuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBDb2x1bW5Db250YWluZXIgPSBzdHlsZWQoJ3NlY3Rpb24nKWBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIC8qIGJvcmRlci10b3A6IDFweCBzb2xpZCBncmF5OyAqL1xuICB3aWR0aDogMTAwdnc7XG5cbiAgdWw6Zmlyc3QtY2hpbGQge1xuICAgIC8qIGJvcmRlci1yaWdodDogLjFweCBkYXNoZWQgcmdiKDQ4LDQ4LDUwKTsgKi9cbiAgfVxuXG4gICB1bDpsYXN0LWNoaWxkIHtcbiAgICAvKiBib3JkZXItbGVmdDogLjFweCBzb2xpZCByZ2IoNDgsNDgsNTApOyAqL1xuICB9XG5cblxuYFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCdcbi8vIGltcG9ydCB7IFJpQXJyb3dEcm9wUmlnaHRGaWxsIH0gZnJvbSAncmVhY3QtaWNvbnMvcmknXG5pbXBvcnQgeyBSaWdodFRyaWFuZ2xlQXJyb3dGaWxsU3ZnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc3Zncy9zdmdzJ1xuaW1wb3J0IHVzZUdvVG9TdWJUb3BpYyBmcm9tICcuLi8uLi9ob29rcy91c2VHb1RvU3ViVG9waWMnXG5cbmltcG9ydCBUaGVtZUJ1dHRvbiBmcm9tICcuLi8uLi8uLi8uLi8uLi9Db21tb25Db21wb25lbnRzL0J1dHRvbi9JbmRleCdcbmltcG9ydCBTdWJUb3BpY3NUYWJsZSBmcm9tICcuLi9TdWJUb3BpY3NUYWJsZS9JbmRleCdcblxuaW1wb3J0IHVpQWN0aW9uQ3JlYXRvcnMgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy91aSdcbmltcG9ydCB7IENSRUFURV9TVUJfVE9QSUMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9BcHAvTW9kYWwvSW5kZXgnXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuL1N0eWxlL2luZGV4J1xuXG5jb25zdCBTdWJUb3BpY3NMaXN0ID0gKCkgPT4ge1xuICBjb25zdCBzdWJ0b3BpY3MgPSB1c2VTZWxlY3RvcigocykgPT4gcy5zdWJ0b3BpY3MpXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxuICBjb25zdCB7IG9wZW5Nb2RhbCB9ID0gYmluZEFjdGlvbkNyZWF0b3JzKHVpQWN0aW9uQ3JlYXRvcnMsIGRpc3BhdGNoKVxuICBjb25zdCBnZW5TdWJUb3BpYyA9IE9iamVjdC52YWx1ZXMoc3VidG9waWNzKT8uZmluZCgoeyB0aXRsZSB9KSA9PiB0aXRsZSA9PT0gJ0dlbmVyYWwnKVxuICBjb25zdCBnb1RvU3ViVG9waWMgPSB1c2VHb1RvU3ViVG9waWMoZ2VuU3ViVG9waWM/LmlkKVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxoMT5cbiAgICAgICAgQnJvd3NlIFNvbWVcbiAgICAgICAgeycgJ31cbiAgICAgICAgPGI+U3ViLVRvcGljczwvYj5cbiAgICAgICAgeycgJ31cbiAgICAgICAgb3IgQ3JlYXRlIFlvdXIgT3duLi4uXG4gICAgICA8L2gxPlxuXG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cbiAgICAgICAgPFRoZW1lQnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBvcGVuTW9kYWwoQ1JFQVRFX1NVQl9UT1BJQyl9PlxuICAgICAgICAgIENyZWF0ZSBTdWIgVG9waWMgK1xuICAgICAgICA8L1RoZW1lQnV0dG9uPlxuICAgICAgICA8VGhlbWVCdXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2dvVG9TdWJUb3BpY30+XG4gICAgICAgICAgR2VuZXJhbCBEaXNjdXNzaW9uXG4gICAgICAgICAgeycgJ31cbiAgICAgICAgICA8UmlnaHRUcmlhbmdsZUFycm93RmlsbFN2ZyBzaXplPXs1MH0gLz5cbiAgICAgICAgPC9UaGVtZUJ1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPFN1YlRvcGljc1RhYmxlIC8+XG4gICAgPC9Db250YWluZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ViVG9waWNzTGlzdFxuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZCgnc2VjdGlvbicpYFxuXG4gIHdpZHRoOiA3MHZ3O1xuICBwYWRkaW5nLWJvdHRvbTogMjB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgPiBoMSB7XG4gICAgcGFkZGluZzogLjVlbSAyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDJ2dztcbiAgICBib3gtc2hhZG93OiAgLTVweCAtNXB4IDEwcHggIzVhNWE1YSwgNXB4IDVweCAxMHB4ICNmZmZmZmY7XG4gIH1cbiAgYiB7XG4gICAgY29sb3I6IHZhcigtLW0tcHJpbWFyeS1jb2xvcik7XG4gIH1cblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgd2lkdGg6IDEwMHZ3XG4gIH1cbmBcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgUm91dGUsIFJvdXRlcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmltcG9ydCBTdWJUb3BpY1RocmVhZCBmcm9tICcuLi9TdWJUb3BpY1RocmVhZC9JbmRleCdcbmltcG9ydCBTdWJUb3BpY3NMaXN0IGZyb20gJy4uL1N1YlRvcGljc0xpc3QvSW5kZXgnXG5pbXBvcnQgQ29tbWVudFRocmVhZCBmcm9tICcuLi9Db21tZW50VGhyZWFkL0luZGV4J1xuXG5pbXBvcnQgV2F2eUJhY2tncm91bmQgZnJvbSAnLi4vLi4vLi4vLi4vLi4vQ29tbW9uQ29tcG9uZW50cy9XYXZ5QmFja2dyb3VuZC9JbmRleCdcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8Um91dGVzPlxuICAgIDxSb3V0ZVxuICAgICAgcGF0aD1cIjpzdWJUb3BpY0lkL2NvbW1lbnRzLzpjb21tZW50SWRcIlxuICAgICAgZWxlbWVudD17KFxuICAgICAgICA8PlxuICAgICAgICAgIDxXYXZ5QmFja2dyb3VuZCBjb2xvcj1cImdyZWVuXCIgdG9wPVwiMTE1JVwiIC8+XG4gICAgICAgICAgPENvbW1lbnRUaHJlYWQgLz5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIC8+XG4gICAgPFJvdXRlXG4gICAgICBwYXRoPVwiOnN1YlRvcGljSWRcIlxuICAgICAgZWxlbWVudD17KFxuICAgICAgICA8PlxuICAgICAgICAgIDxXYXZ5QmFja2dyb3VuZCBjb2xvcj1cImdyZWVuXCIgdG9wPVwiMTE1JVwiIC8+XG4gICAgICAgICAgPFN1YlRvcGljVGhyZWFkIC8+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICAvPlxuICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxTdWJUb3BpY3NMaXN0IC8+fSAvPlxuICA8L1JvdXRlcz5cbilcbiIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1wcm9wcy1uby1zcHJlYWRpbmcgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgU3ViVG9waWNzSXRlbSBmcm9tICcuL1N1YlRvcGljc0l0ZW0vSW5kZXgnXG5cbmltcG9ydCB7IExpbmUgfSBmcm9tICcuLi8uLi9TdHlsZS9pbmRleCdcbmltcG9ydCB7XG4gIENvbnRhaW5lciwgVGFibGVIZWFkZXIsIFRhYmxlLCBDb2xIZWFkZXIsIENvbEl0ZW0sXG59IGZyb20gJy4vU3R5bGUnXG5cbmNvbnN0IFN1YlRvcGljc1RhYmxlID0gKCkgPT4ge1xuICAvLyBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5zZXNzaW9uLmN1cnJlbnRVc2VyKVxuICBjb25zdCBzdWJ0b3BpY3MgPSBPYmplY3QudmFsdWVzKHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuc3VidG9waWNzKSlcbiAgY29uc3QgeyB0b3BpY0lkIH0gPSB1c2VQYXJhbXMoKVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TGluZSAvPlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPFRhYmxlSGVhZGVyPlxuICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgIDxzcGFuPkNvdmlkPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4+U3ViIFRvcGljczwvc3Bhbj5cbiAgICAgICAgICA8L2gxPlxuICAgICAgICA8L1RhYmxlSGVhZGVyPlxuICAgICAgICA8VGFibGU+XG4gICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgPENvbEhlYWRlcj5cbiAgICAgICAgICAgICAgPENvbEl0ZW0+IENyZWF0ZWQgQnkgPC9Db2xJdGVtPlxuICAgICAgICAgICAgICA8Q29sSXRlbT4gVGl0bGUgPC9Db2xJdGVtPlxuICAgICAgICAgICAgICA8Q29sSXRlbT4gQ29tbWVudHMgPC9Db2xJdGVtPlxuICAgICAgICAgICAgPC9Db2xIZWFkZXI+XG4gICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdWJ0b3BpY3MubWFwKChzdWJ0b3BpYykgPT4gKFxuICAgICAgICAgICAgICA8U3ViVG9waWNzSXRlbVxuICAgICAgICAgICAgICAgIGtleT17c3VidG9waWMuaWR9XG4gICAgICAgICAgICAgICAgey4uLnN1YnRvcGljfVxuICAgICAgICAgICAgICAgIHN1YnRvcGljPXtzdWJ0b3BpY31cbiAgICAgICAgICAgICAgICB0b3BpY0lkPXt0b3BpY0lkfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvVGFibGU+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdWJUb3BpY3NUYWJsZVxuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZCgnZGl2JylgIFxuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiA3NSU7XG4gIGJveC1zaGFkb3c6IDAgMCA0MHB4IC0xMHB4IHJnYmEoMCwgMCwgMCwgLjQpO1xuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gIH1cblxuYFxuXG5leHBvcnQgY29uc3QgVGFibGVIZWFkZXIgPSBzdHlsZWQoJ2hlYWRlcicpYCBcbiAgICBoZWlnaHQ6IDEwdmg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS1tLXByaW1hcnktYmFja2dyb3VuZC1jb2xvciksICM4M2FmOWIpO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAvKiBib3JkZXItcmFkaXVzOiAxMnB4IDEycHggMCAwOyAqL1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLyogYm9yZGVyLXJhZGl1czogMTJweDsgKi9cbiAgICBoMSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgei1pbmRleDogMjtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIFxuICAgICAgc3BhbiB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgICAgXG4gICAgICBzcGFuOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjV2dztcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDYuNXB4O1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAgZm9udC1zaXplOiAzLjV2dztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICBzcGFuOmxhc3QtY2hpbGQge1xuICAgICAgICBmb250LXNpemU6IC44dnc7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAzLjU1cHg7XG4gICAgICAgIG9wYWNpdHk6IC44NTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAgZm9udC1zaXplOiAzLjN2dztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAubGVhZGVyYm9hcmRfX2ljb24ge1xuICAgICAgZmlsbDogI2ZmZjtcbiAgICAgIG9wYWNpdHk6IC4zNTtcbiAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiA1MCU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB9XG5gXG5cbmV4cG9ydCBjb25zdCBUYWJsZSA9IHN0eWxlZCgndGFibGUnKWAgXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxMnB4IDEycHg7XG4gIHBhZGRpbmc6IDE1cHggMTVweCAyMHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICByb3ctZ2FwOiA4cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBcbmBcblxuZXhwb3J0IGNvbnN0IENvbEhlYWRlciA9IHN0eWxlZCgndHInKWBcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAzMHB4IDEwcHggMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctYWNjZW50KTtcbiAgYm9yZGVyLXJhZGl1czogLjV2dztcblxuYFxuXG5leHBvcnQgY29uc3QgQ29sSXRlbSA9IHN0eWxlZCgndGgnKWBcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IC4xdnc7XG4gIGZvbnQtc2l6ZTogMXZ3O1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgZm9udC1zaXplOiAydnc7XG4gIH1cblxuYFxuXG5leHBvcnQgY29uc3QgUm93ID0gc3R5bGVkKCd0cicpYCBcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHggMTBweCAxMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYm9yZGVyLXJhZGl1czogLjV2dztcbiAgICBib3gtc2hhZG93OiAwIDVweCA3cHggLTFweCByZ2JhKDUxLCA1MSwgNTEsIDAuMjMpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjI1cyBjdWJpYy1iZXppZXIoLjcsLjk4LC44NiwuOTgpLCBib3gtc2hhZG93IC4yNXMgY3ViaWMtYmV6aWVyKC43LC45OCwuODYsLjk4KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHotaW5kZXg6IDk5OTk5OTk5OTtcbiAgICBcbiAgICAmOmhvdmVyIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgIGJveC1zaGFkb3c6IDAgOXB4IDQ3cHggMTFweCByZ2JhKDUxLCA1MSwgNTEsIDAuMTgpO1xuICAgIH1cbiAgXG4gIFxuYFxuXG5leHBvcnQgY29uc3QgUm93SXRlbSA9IHN0eWxlZCgndGQnKWAgXG4gIC8qIG9wYWNpdHk6IC44OyAqL1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzk3OWNiMDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgXG4gIGxldHRlci1zcGFjaW5nOiAuMXZ3OyAgICBcblxuICBmb250LXNpemU6IDF2dztcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIGZvbnQtc2l6ZTogMnZ3O1xuICB9XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogMnZ3O1xuICAgIGhlaWdodDogMnZ3O1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgIHdpZHRoOiA0dnc7XG4gICAgICBoZWlnaHQ6IDR2dztcbiAgICB9XG4gIH1cbmBcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB1c2VHb1RvQ29tbWVudFRocmVhZCBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9ob29rcy9yb3V0aW5nL3VzZUdvVG9Db21tZW50VGhyZWFkJ1xuXG5pbXBvcnQgeyBSb3csIFJvd0l0ZW0gfSBmcm9tICcuLi9TdHlsZS9pbmRleCdcblxuY29uc3QgU3ViVG9waWNzSXRlbSA9ICh7XG4gIGlkLCB0aXRsZSwgY3JlYXRlZEJ5LCBhbGxDb21tZW50cywgdG9waWNJZCwgY3JlYXRlZEJ5SWNvblNyYyxcbn0pID0+IHtcbiAgY29uc3QgZ29Ub0NvbW1lbnRUaHJlYWQgPSB1c2VHb1RvQ29tbWVudFRocmVhZCh0b3BpY0lkLCBpZClcbiAgcmV0dXJuIChcbiAgICA8dGJvZHk+XG4gICAgICA8Um93IG9uQ2xpY2s9e2dvVG9Db21tZW50VGhyZWFkfT5cbiAgICAgICAgPFJvd0l0ZW0+XG4gICAgICAgICAgeycgJ31cbiAgICAgICAgICA8aW1nIHNyYz17Y3JlYXRlZEJ5SWNvblNyYyB8fCAnaHR0cHM6Ly9jaXZpbC1kZXYuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vcHJvZmlsZV9pbWdfMS5wbmcnfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgIHsnICd9XG4gICAgICAgICAge2Ake2NyZWF0ZWRCeS5zdWJzdHJpbmcoMCwgMTIpfS4uLmB9XG4gICAgICAgIDwvUm93SXRlbT5cbiAgICAgICAgPFJvd0l0ZW0+e3RpdGxlfTwvUm93SXRlbT5cbiAgICAgICAgPFJvd0l0ZW0+e2FsbENvbW1lbnRzfTwvUm93SXRlbT5cbiAgICAgIDwvUm93PlxuICAgIDwvdGJvZHk+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ViVG9waWNzSXRlbVxuIiwiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuY29uc3Qgc2VudGltZW50cyA9IG5ldyBTZXQoWydQT1NJVElWRScsICdORVVUUkFMJywgJ05FR0FUSVZFJ10pXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY29uc3QgY29tbWVudHMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNvbW1lbnRzLmxpc3QpXG4gIHJldHVybiB1c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBjYXRlZ29yaXplZENvbW1lbnRzID0ge1xuICAgICAgUE9TSVRJVkU6IFtdLFxuICAgICAgTkVVVFJBTDogW10sXG4gICAgICBORUdBVElWRTogW10sXG4gICAgICBhbGw6IGNvbW1lbnRzLFxuICAgIH1cbiAgICBjb21tZW50cy5mb3JFYWNoKChjb21tZW50KSA9PiB7XG4gICAgICBpZiAoc2VudGltZW50cy5oYXMoY29tbWVudC5kYXRhPy5zZW50aW1lbnQpKSB7XG4gICAgICAgIGNhdGVnb3JpemVkQ29tbWVudHNbY29tbWVudC5kYXRhPy5zZW50aW1lbnRdLnB1c2goY29tbWVudClcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBjYXRlZ29yaXplZENvbW1lbnRzXG4gIH0sIFtjb21tZW50c10pXG59XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG5leHBvcnQgZGVmYXVsdCAoaWQpID0+IHtcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpXG4gIHJldHVybiB1c2VDYWxsYmFjaygoKSA9PiBuYXZpZ2F0ZShpZCksIFtpZF0pXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IFVzZXJJbmZvcm1hdGlvbkRpc3BsYXkgZnJvbSAnLi4vLi4vLi4vVXNlckluZm9ybWF0aW9uRGlzcGxheS9JbmRleCdcbmltcG9ydCB7XG4gIE1pZGRsZSwgTGVmdCwgUmlnaHQsIEhvbWVQYWdlR3JpZCxcbn0gZnJvbSAnLi4vLi4vU3R5bGUnXG5pbXBvcnQgTm90aWZpY2F0aW9uSXRlbSBmcm9tICcuL2NvbXBvbmVudHMvTm90aWZpY2F0aW9uSXRlbS9JbmRleCdcbmltcG9ydCB7XG4gIEJvcmRlckNvbnRhaW5lciwgTm90aWZpY2F0aW9uTGlzdCwgQ29udGFpbmVyLCBIZWFkZXIsXG59IGZyb20gJy4vU3R5bGUnXG5cbmNvbnN0IFRyaWJ1bmFsTm90aWZpY2F0aW9ucyA9ICgpID0+IHtcbiAgY29uc3Qgbm90aWZpY2F0aW9ucyA9IHVzZVNlbGVjdG9yKChzKSA9PiBzLm5vdGlmaWNhdGlvbnMudHJpYnVuYWxOb3RpZmljYXRpb25zTGlzdClcbiAgcmV0dXJuIChcbiAgICA8SG9tZVBhZ2VHcmlkPlxuICAgICAgPExlZnQ+XG4gICAgICAgIDxVc2VySW5mb3JtYXRpb25EaXNwbGF5IC8+XG4gICAgICA8L0xlZnQ+XG4gICAgICA8TWlkZGxlPlxuXG4gICAgICAgIDxDb250YWluZXIgaWQ9XCJub3RpZmljYXRpb25zLWNvbnRhaW5lclwiPlxuXG4gICAgICAgICAgPEJvcmRlckNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxIZWFkZXI+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIFJlY2VudCBOb3RpZmljYXRpb25zXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvSGVhZGVyPlxuICAgICAgICAgICAgPE5vdGlmaWNhdGlvbkxpc3Q+XG4gICAgICAgICAgICAgIHtub3RpZmljYXRpb25zLm1hcCgobm90aWZpY2F0aW9uKSA9PiAoXG4gICAgICAgICAgICAgICAgPE5vdGlmaWNhdGlvbkl0ZW0ga2V5PXtub3RpZmljYXRpb24uaWR9IG5vdGlmaWNhdGlvbj17bm90aWZpY2F0aW9ufSAvPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvTm90aWZpY2F0aW9uTGlzdD5cbiAgICAgICAgICA8L0JvcmRlckNvbnRhaW5lcj5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L01pZGRsZT5cbiAgICAgIDxSaWdodD5cbiAgICAgICAgPHNwYW4+Ljwvc3Bhbj5cbiAgICAgIDwvUmlnaHQ+XG4gICAgPC9Ib21lUGFnZUdyaWQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJpYnVuYWxOb3RpZmljYXRpb25zXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgQm9yZGVyQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWBcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgei1pbmRleDogOTk5OTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS1uYXYtc2l6ZSkpO1xuXG5gXG5cbmV4cG9ydCBjb25zdCBOb3RpZmljYXRpb25MaXN0ID0gc3R5bGVkKCd1bCcpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHBhZGRpbmc6IDA7XG4gIHBhZGRpbmctYm90dG9tOiAzMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGMkY1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblxuYFxuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG5gXG5cbmV4cG9ydCBjb25zdCBIZWFkZXIgPSBzdHlsZWQoJ2hlYWRlcicpYCBcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xuICBwYWRkaW5nOiAydncgMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgcCB7XG4gICAgbWFyZ2luOiAwIDF2dztcbiAgICBmb250LXNpemU6IDEuMXZ3O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuYFxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBWZXJ0aWNhbE1lbnVEb3RzU3ZnLCBEZWxldGVTdmcsIFJlYWRTdmcsXG59IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3N2Z3Mvc3ZncydcbmltcG9ydCBub3RpZmljYXRpb25BY3Rpb25DcmVhdG9ycyBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9yZWR1eC9hY3Rpb25zL25vdGlmaWNhdGlvbnMvaW5kZXgnXG5pbXBvcnQgdXNlQmluZERpc3BhdGNoIGZyb20gJy4uLy4uLy4uLy4uLy4uL2hvb2tzL3JlZHV4L3VzZUJpbmREaXNwYXRjaCdcbmltcG9ydCB7XG4gIE1lbnVUaW1lQ29udGFpbmVyLCBUaW1lLCBNZW51SWNvbkNvbnRhaW5lciwgQWN0aW9uTWVudSwgQWN0aW9uTWVudUl0ZW0sXG59IGZyb20gJy4vU3R5bGUvaW5kZXgnXG5cbmV4cG9ydCBjb25zdCBNZW51VGltZSA9ICh7IHRpbWUsIGlkLCBldmVudFR5cGUgfSkgPT4ge1xuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IHtcbiAgICB1cGRhdGVOb3RpZmljYXRpb25Ub1JlYWQsXG4gICAgZGVsZXRlTm90aWZpY2F0aW9uLFxuICB9ID0gdXNlQmluZERpc3BhdGNoKG5vdGlmaWNhdGlvbkFjdGlvbkNyZWF0b3JzKVxuXG4gIHJldHVybiAoXG4gICAgPE1lbnVUaW1lQ29udGFpbmVyPlxuICAgICAgPE1lbnVJY29uQ29udGFpbmVyIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgc2V0SXNPcGVuKChwcmV2KSA9PiAhcHJldilcbiAgICAgICAgY29uc3QgZXZlbnRMaXN0ZW5lciA9ICgpID0+IHtcbiAgICAgICAgICBzZXRJc09wZW4oKHByZXYpID0+ICFwcmV2KVxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3RpZmljYXRpb25zLWNvbnRhaW5lcicpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnRMaXN0ZW5lcilcbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3RpZmljYXRpb25zLWNvbnRhaW5lcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnRMaXN0ZW5lcilcbiAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxWZXJ0aWNhbE1lbnVEb3RzU3ZnIC8+XG4gICAgICAgIDxBY3Rpb25NZW51IGlzT3Blbj17aXNPcGVufSBvbkNsaWNrPXsoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX0+XG4gICAgICAgICAgPEFjdGlvbk1lbnVJdGVtIG9uQ2xpY2s9eygpID0+IHVwZGF0ZU5vdGlmaWNhdGlvblRvUmVhZChldmVudFR5cGUsIGlkKX0+XG4gICAgICAgICAgICA8UmVhZFN2ZyAvPlxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgIE1hcmsgQXMgUmVhZFxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvQWN0aW9uTWVudUl0ZW0+XG4gICAgICAgICAgPEFjdGlvbk1lbnVJdGVtIG9uQ2xpY2s9eygpID0+IGRlbGV0ZU5vdGlmaWNhdGlvbihldmVudFR5cGUsIGlkKX0+XG4gICAgICAgICAgICA8RGVsZXRlU3ZnIC8+XG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgRGVsZXRlIE5vdGlmaWNhdGlvblxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvQWN0aW9uTWVudUl0ZW0+XG4gICAgICAgIDwvQWN0aW9uTWVudT5cbiAgICAgIDwvTWVudUljb25Db250YWluZXI+XG4gICAgICA8VGltZT57dGltZX08L1RpbWU+XG4gICAgPC9NZW51VGltZUNvbnRhaW5lcj5cbiAgKVxufVxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IE1lbnVUaW1lQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWAgXG4gIHotaW5kZXg6IDk5OTk5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBwYWRkaW5nOiA1cHggMDtcbiAgd2lkdGg6IDglO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDIwMCwyMDAsMjAwLDAuMjUpO1xuXG5gXG5cbmV4cG9ydCBjb25zdCBUaW1lID0gc3R5bGVkKCdzcGFuJylgXG4gIGNvbG9yOiBncmF5O1xuICBmb250LXNpemU6IDF2dztcbiAgcGFkZGluZzogMCAxMHB4O1xuYFxuZXhwb3J0IGNvbnN0IE1lbnVJY29uQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWAgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICBib3JkZXItcmFkaXVzOiAuMXZ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6ICMyY2RkOWI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWY3ZjA7XG4gIGJvcmRlci1jb2xvcjogI2Q4ZjdlYjtcbiAgdHJhbnNpdGlvbjogYWxsIDFzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIDpob3ZlciB7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuODUpO1xuICB9XG5cbmBcblxuZXhwb3J0IGNvbnN0IEFjdGlvbk1lbnUgPSBzdHlsZWQoJ3VsJylgXG4gIHotaW5kZXg6IDk5OTk5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXI6IC41cHggc29saWQgbGlnaHRncmF5O1xuICBib3JkZXItY29sb3I6IHJnYmEoMjAwLDIwMCwyMDAsMC4yNSkgO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTUlLCA1NSUpIDtcbiAgZGlzcGxheTogJHsocHJvcHMpID0+IChwcm9wcy5pc09wZW4gPyAnYmxvY2snIDogJ25vbmUnKX0gO1xuICB3aWR0aDogMTB2dztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggcmdiKDYwIDYwIDYwIC8gMTAlKTtcbiAgYm9yZGVyLXJhZGl1czogIC41ZW07XG4gIG1hcmdpbjogMDtcblxuYFxuXG5leHBvcnQgY29uc3QgQWN0aW9uTWVudUl0ZW0gPSBzdHlsZWQoJ2xpJylgXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBjb2xvcjogYmxhY2s7XG4gIHRyYW5zaXRpb246IG5vbmU7XG4gIDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbS1idG4taG92ZXItY29sb3IpO1xuXG4gIH1cblxuICBzcGFuIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogLjY1dncgIWltcG9ydGFudDtcbiAgfVxuXG5gXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBUcmlidW5hbFNlbGVjdGlvbiwgVXNlckNvbnRlbnRSZXBvcnRlZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2VudW1zL25vdGlmaWNhdGlvbl90eXBlcydcbmltcG9ydCBUcmlidW5hbFNlbGVjdGlvbk5vdGlmaWNhdGlvbiBmcm9tICcuLi9UcmlidW5hbFNlbGVjdGlvbk5vdGlmaWNhdGlvbi9JbmRleCdcbmltcG9ydCBVc2VyQ29udGVudFJlcG9ydGVkTm90aWZpY2F0aW9uIGZyb20gJy4uL1VzZXJDb250ZW50UmVwb3J0ZWROb3RpZmljYXRpb24vSW5kZXgnXG5pbXBvcnQge1xuICBJdGVtLFxufSBmcm9tICcuL1N0eWxlJ1xuXG5jb25zdCBOb3RpZmljYXRpb25JdGVtID0gKHsgbm90aWZpY2F0aW9uIH0pID0+IHtcbiAgbGV0IEl0ZW1Db21wb25lbnRcbiAgc3dpdGNoIChub3RpZmljYXRpb24uZXZlbnRUeXBlKSB7XG4gICAgY2FzZSBUcmlidW5hbFNlbGVjdGlvbjpcbiAgICAgIEl0ZW1Db21wb25lbnQgPSBUcmlidW5hbFNlbGVjdGlvbk5vdGlmaWNhdGlvblxuICAgICAgYnJlYWtcbiAgICBjYXNlIFVzZXJDb250ZW50UmVwb3J0ZWQ6XG4gICAgICBJdGVtQ29tcG9uZW50ID0gVXNlckNvbnRlbnRSZXBvcnRlZE5vdGlmaWNhdGlvblxuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxJdGVtPlxuICAgICAgPEl0ZW1Db21wb25lbnQgbm90aWZpY2F0aW9uPXtub3RpZmljYXRpb259IC8+XG4gICAgPC9JdGVtPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5vdGlmaWNhdGlvbkl0ZW1cbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBJdGVtID0gc3R5bGVkKCdsaScpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNXZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgLyogY3Vyc29yOiBwb2ludGVyOyAqL1xuICBwYWRkaW5nLXJpZ2h0OiAuNXZ3O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOUZBO1xuICB9XG5gXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgTGVmdENvbnRhaW5lciA9IHN0eWxlZCgnZGl2JylgXG4gIHdpZHRoOiAyMiU7XG4gIGhlaWdodDogMTAwJSA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGltZyB7XG4gICAgaGVpZ2h0OiA1dmg7XG4gIH1cbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgbGlnaHRncmF5O1xuICBib3JkZXItY29sb3I6IHJnYmEoMjAwLDIwMCwyMDAsMC4yNSk7XG4gIDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGMjtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgUmlnaHRDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpYFxuICB3aWR0aDogMjAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBpbWcge1xuICAgIGhlaWdodDogNXZoO1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBNaWRkbGVDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBpbWcge1xuICAgIGhlaWdodDogM3ZoO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDhweDtcbiAgfVxuICBzdmcge1xuICAgIGhlaWdodDogM3ZoO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDhweDtcbiAgfVxuICBoMyB7XG4gICAgZm9udC1zaXplOiAuOXZ3O1xuICB9XG4gIGEge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiB2YXIoLS1tLXByaW1hcnktYnRuLWNvbG9yKTtcbiAgICA6aG92ZXIge1xuICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuODUpO1xuICAgIH1cbiAgfVxuYFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBNZW51VGltZSB9IGZyb20gJy4uL01lbnVUaW1lL0luZGV4J1xuaW1wb3J0IHsgZ2V0VGltZVNpbmNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vZ2VuZXJpYy9zdHJpbmcvZGF0ZUZvcm1hdHRlcidcbmltcG9ydCB7IE1pZGRsZUNvbnRhaW5lciB9IGZyb20gJy4uL1N0eWxlJ1xuXG5pbXBvcnQgeyBUcmlidW5hbFNlbGVjdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2VudW1zL25vdGlmaWNhdGlvbl90eXBlcydcbmltcG9ydCB7IEdhdmVsMiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3N2Z3Mvc3ZncydcblxuY29uc3QgVHJpYnVuYWxTZWxlY3Rpb25Ob3RpZmljYXRpb24gPSAoeyBub3RpZmljYXRpb24gfSkgPT4ge1xuICBjb25zdCB7XG4gICAgY3JlYXRlZEF0LCBpZCwgY29udGVudFR5cGUsIHJlcG9ydGVkQ29udGVudElkLFxuICB9ID0gbm90aWZpY2F0aW9uXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxNaWRkbGVDb250YWluZXI+XG4gICAgICAgIDxHYXZlbDIgc2l6ZT1cIjV2aFwiIC8+XG4gICAgICAgIDxoMz5cbiAgICAgICAgICBZb3UgaGF2ZSBiZWVuIHNlbGVjdGVkIGZvclxuICAgICAgICAgIHsnICd9XG4gICAgICAgICAgPExpbmsgdG89e2AvdHJpYnVuYWwvJHtjb250ZW50VHlwZX0vJHtyZXBvcnRlZENvbnRlbnRJZH1gfT5cbiAgICAgICAgICAgIENvbW1lbnQhXG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2gzPlxuXG4gICAgICA8L01pZGRsZUNvbnRhaW5lcj5cbiAgICAgIDxNZW51VGltZVxuICAgICAgICB0aW1lPXtnZXRUaW1lU2luY2UoY3JlYXRlZEF0KX1cbiAgICAgICAgaWQ9e2lkfVxuICAgICAgICBldmVudFR5cGU9e1RyaWJ1bmFsU2VsZWN0aW9ufVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmlidW5hbFNlbGVjdGlvbk5vdGlmaWNhdGlvblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBNZW51VGltZSB9IGZyb20gJy4uL01lbnVUaW1lL0luZGV4J1xuaW1wb3J0IHsgZ2V0VGltZVNpbmNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vZ2VuZXJpYy9zdHJpbmcvZGF0ZUZvcm1hdHRlcidcbmltcG9ydCB7IE1pZGRsZUNvbnRhaW5lciB9IGZyb20gJy4uL1N0eWxlJ1xuXG5pbXBvcnQgeyBVc2VyQ29udGVudFJlcG9ydGVkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vZW51bXMvbm90aWZpY2F0aW9uX3R5cGVzJ1xuaW1wb3J0IHsgR2F2ZWwyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc3Zncy9zdmdzJ1xuXG5jb25zdCBVc2VyQ29udGVudFJlcG9ydGVkTm90aWZpY2F0aW9uID0gKHsgbm90aWZpY2F0aW9uIH0pID0+IHtcbiAgY29uc3Qge1xuICAgIGNyZWF0ZWRBdCwgaWQsIGNvbnRlbnRUeXBlLCByZXBvcnRlZENvbnRlbnRJZCxcbiAgfSA9IG5vdGlmaWNhdGlvblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TWlkZGxlQ29udGFpbmVyPlxuICAgICAgICA8R2F2ZWwyIHNpemU9XCI1dmhcIiAvPlxuICAgICAgICA8aDM+XG4gICAgICAgICAgWW91clxuICAgICAgICAgIHsnICd9XG4gICAgICAgICAgPExpbmsgdG89e2AvdHJpYnVuYWwvJHtjb250ZW50VHlwZX0vJHtyZXBvcnRlZENvbnRlbnRJZH1gfT5cbiAgICAgICAgICAgIENvbnRlbnRcbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgeycgJ31cbiAgICAgICAgICBIYXMgQmVlbiBSZXBvcnRlZCBBbmQgSXMgU3ViamVjdCBUbyBDb21tdW5pdHkgVHJpYnVuYWwgUmV2aWV3IVxuICAgICAgICAgIHsnICd9XG4gICAgICAgICAgeydcXG4nfVxuICAgICAgICAgIDxMaW5rIHRvPXtgL3RyaWJ1bmFsLyR7Y29udGVudFR5cGV9LyR7cmVwb3J0ZWRDb250ZW50SWR9YH0+XG4gICAgICAgICAgICBDbGljayBUbyBEZWZlbmQgWW91cnNlbGYhXG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2gzPlxuICAgICAgPC9NaWRkbGVDb250YWluZXI+XG4gICAgICA8TWVudVRpbWVcbiAgICAgICAgdGltZT17Z2V0VGltZVNpbmNlKGNyZWF0ZWRBdCl9XG4gICAgICAgIGlkPXtpZH1cbiAgICAgICAgZXZlbnRUeXBlPXtVc2VyQ29udGVudFJlcG9ydGVkfVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyQ29udGVudFJlcG9ydGVkTm90aWZpY2F0aW9uXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVjSXRlbSBmcm9tICcuL2NvbXBvbmVudHMvUmVjSXRlbS9JbmRleCdcblxuaW1wb3J0IHsgUmVjTGlzdENvbnRhaW5lciB9IGZyb20gJy4vU3R5bGUnXG5cbmNvbnN0IFJlY29tbWVuZGF0aW9uc0xpc3QgPSAoeyByZWNzIH0pID0+IChcbiAgPFJlY0xpc3RDb250YWluZXI+XG4gICAge1xuICAgICAgICByZWNzLm1hcCgocmVjLCBpZHgpID0+IDxSZWNJdGVtIGtleT17U3RyaW5nKGlkeCl9IHJlYz17cmVjfSAvPilcbiAgICAgIH1cbiAgPC9SZWNMaXN0Q29udGFpbmVyPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBSZWNvbW1lbmRhdGlvbnNMaXN0XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgUmVjTGlzdENvbnRhaW5lciA9IHN0eWxlZCgndWwnKWBcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuYFxuIiwiaW1wb3J0IFJlYWN0LCB7IG1lbW8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB1c2VHZXRMaW5rTWV0YURhdGFFZmZlY3QgZnJvbSAnLi4vLi4vLi4vVG9waWNGb3JtL2NvbXBvbmVudHMvTGlua01ldGFEYXRhL2hvb2tzL3VzZUdldExpbmtNZXRhRGF0YUVmZmVjdCdcbmltcG9ydCB1c2VOYXZpZ2F0ZVRvUGFnZSBmcm9tICcuL2hvb2tzL3VzZU5hdmlnYXRlVG9QYWdlJ1xuXG5pbXBvcnQge1xuICBDb250YWluZXIsIFRodW1iLCBEZXNjcmlwdGlvbkNvbnRhaW5lciwgVGl0bGUsIFN1YlRpdGxlLCBPR0ltYWdlLFxufSBmcm9tICcuL1N0eWxlL2luZGV4J1xuXG5jb25zdCBSZWNJdGVtID0gKHsgcmVjIH0pID0+IHtcbiAgbGV0IGNvbnRlbnQgPSBudWxsXG4gIGNvbnN0IHsgdG9waWMsIHN1YlRvcGljIH0gPSByZWNcbiAgY29uc3QgbWV0YURhdGEgPSB1c2VHZXRMaW5rTWV0YURhdGFFZmZlY3QoeyBjb250ZW50VXJsOiByZWMuZXh0ZXJuYWxSZWNvbW1lbmRlZENvbnRlbnQgfSlcbiAgY29uc3QgbmF2aWdhdGVUb1BhZ2UgPSB1c2VOYXZpZ2F0ZVRvUGFnZShyZWMpXG4gIGlmICh0b3BpYykge1xuICAgIGlmICh0b3BpYz8ueXRVcmwpIHtcbiAgICAgIGNvbnN0IHJlZ0V4cCA9IC9eLiooeW91dHVcXC5iZVxcL3x2XFwvfHVcXC9cXHdcXC98ZW1iZWRcXC98d2F0Y2hcXD92PXxcXCZ2PSkoW14jXFwmXFw/XSopLiovXG4gICAgICBjb25zdCBtYXRjaCA9IHRvcGljLnl0VXJsLm1hdGNoKHJlZ0V4cClcbiAgICAgIGlmIChtYXRjaCAmJiBtYXRjaFsyXS5sZW5ndGggPT09IDExKSB7XG4gICAgICAgIGNvbnRlbnQgPSA8aW1nIHNyYz17YGh0dHA6Ly9pbWcueW91dHViZS5jb20vdmkvJHttYXRjaFsyXX0vc2RkZWZhdWx0LmpwZ2B9IGFsdD1cIk5vIFRodW1iXCIgLz5cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCF0b3BpYz8ueXRVcmwgJiYgdG9waWM/LmNvbnRlbnRVcmwpIHtcbiAgICAgIGNvbnRlbnQgPSA8aW1nIHNyYz17dG9waWMudGh1bWJJbWdVcmx9IGFsdD1cIk5vIFRodW1iXCIgLz5cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gY29udGVudCA9IDxpbWcgc3JjPVwiLi9pbWFnZS5wbmdcIiBhbHQ9XCJObyBUaHVtYlwiIC8+XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgb25DbGljaz17bmF2aWdhdGVUb1BhZ2V9PlxuICAgICAgPFRodW1iPlxuICAgICAgICB7Y29udGVudH1cbiAgICAgICAge21ldGFEYXRhICYmIDxPR0ltYWdlIHNyYz17bWV0YURhdGEub2dJbWFnZT8udXJsfSBhbHQ9XCJcIiAvPn1cbiAgICAgIDwvVGh1bWI+XG4gICAgICA8RGVzY3JpcHRpb25Db250YWluZXI+XG4gICAgICAgIDxUaXRsZT5cbiAgICAgICAgICB7IHJlYy50b3BpYyA/IHJlYy50b3BpYy50aXRsZSA6IHJlYy5zdWJUb3BpYz8udGl0bGV9XG4gICAgICAgICAge21ldGFEYXRhICYmIG1ldGFEYXRhLm9nVGl0bGV9XG4gICAgICAgIDwvVGl0bGU+XG4gICAgICAgIHsvKiA8TGluZSAvPiAqL31cbiAgICAgICAgPFN1YlRpdGxlPlxuICAgICAgICAgIHsgcmVjLnRvcGljPy5jcmVhdGVkQnkgfHwgcmVjLnN1YlRvcGljPy5jcmVhdGVkQnl9XG4gICAgICAgICAge21ldGFEYXRhICYmIG1ldGFEYXRhPy5vZ0Rlc2NyaXB0aW9ufVxuICAgICAgICA8L1N1YlRpdGxlPlxuICAgICAgPC9EZXNjcmlwdGlvbkNvbnRhaW5lcj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBtZW1vKFJlY0l0ZW0pXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKCdsaScpYFxuICB3aWR0aDogOTUlO1xuICBoZWlnaHQ6IDE3dmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBcbmBcblxuZXhwb3J0IGNvbnN0IFRodW1iID0gc3R5bGVkKCdkaXYnKWBcbiAgaGVpZ2h0OiAxMDAlO1xuICBmbGV4OiA0MCU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgYXNwZWN0LXJhdGlvOiAxMiAvIDEyO1xuICBpbWcge1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgRGVzY3JpcHRpb25Db250YWluZXIgPSBzdHlsZWQoJ2RpdicpYFxuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDYwJTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuYFxuXG5leHBvcnQgY29uc3QgVGl0bGUgPSBzdHlsZWQoJ2gyJylgXG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDF2dztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIGZvbnQtc2l6ZTogMy41dnc7XG4gIH1cblxuXG5gXG5cbmV4cG9ydCBjb25zdCBTdWJUaXRsZSA9IHN0eWxlZCgnaDMnKWBcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LXNpemU6IC42dnc7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICBmb250LXNpemU6IDN2dztcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgT0dJbWFnZSA9IHN0eWxlZCgnaW1nJylgIFxuICBib3JkZXItcmFkaXVzOiAxdnc7XG5cbmBcblxuZXhwb3J0IGNvbnN0IE9HVXJsID0gc3R5bGVkKCdzcGFuJylgIFxuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAxdnc7XG5gXG5cbmV4cG9ydCBjb25zdCBPR1RpdGxlID0gc3R5bGVkKCdoMycpYFxuIGZvbnQtc2l6ZTogMXZ3O1xuIG1hcmdpbjogLjZ2dyAwIC4xdncgMDtcbiBjb2xvcjogZ3JheTtcbiBmb250LXdlaWdodDogYm9sZDtcbmBcblxuZXhwb3J0IGNvbnN0IE9HRGVzY3JpcHRpb24gPSBzdHlsZWQoJ3AnKWAgXG4gIGNvbG9yOiBncmF5O1xuICBmb250LXNpemU6IC44dnc7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiBcbmBcbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmV4cG9ydCBkZWZhdWx0IChyZWMpID0+IHtcbiAgY29uc3QgeyB0b3BpYywgc3ViVG9waWMgfSA9IHJlY1xuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKClcbiAgcmV0dXJuIHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAocmVjLmV4dGVybmFsUmVjb21tZW5kZWRDb250ZW50KSB7XG4gICAgICB3aW5kb3cub3BlbihyZWMuZXh0ZXJuYWxSZWNvbW1lbmRlZENvbnRlbnQsICdfYmxhbmsnKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICh0b3BpYykgbmF2aWdhdGUoYC9ob21lL3RvcGljcy8ke3RvcGljLmlkfS9zdWJ0b3BpY3MvYClcbiAgICBlbHNlIG5hdmlnYXRlKGAvaG9tZS90b3BpY3MvJHtzdWJUb3BpYy50b3BpY0lkfS9zdWJ0b3BpY3MvJHtzdWJUb3BpYy5pZH1gKVxuICB9LCBbcmVjXSlcbn1cbiIsImltcG9ydCBSZWFjdCwge1xuICBtZW1vLCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlLFxufSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG5pbXBvcnQge1xuICBPdXRlckNvbnRhaW5lciwgSW5uZXJDb250YWluZXIsXG4gIEhlYWRlciwgU3R5bGVkU2NhbGVzU3ZnLCBSZXBvcnRTdGF0c0NvbnRhaW5lciwgUmVwb3J0U3RhdEl0ZW0sXG4gIFN0eWxlZFBpbGxhclN2ZywgVGltZXIsXG59IGZyb20gJy4vU3R5bGUvaW5kZXgnXG5pbXBvcnQgdXNlQmluZERpc3BhdGNoIGZyb20gJy4uL2hvb2tzL3JlZHV4L3VzZUJpbmREaXNwYXRjaCdcblxuaW1wb3J0IHRvcGljQWN0aW9ucyBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zL3RvcGljcy9pbmRleCdcbmltcG9ydCByZXBvcnRBY3Rpb25zIGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMvcmVwb3J0cy9pbmRleCdcbmltcG9ydCB0cmlidW5hbENvbW1lbnRzQWN0aW9ucyBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zL3RyaWJ1bmFsX2NvbW1lbnRzL2luZGV4J1xuaW1wb3J0IGNvbW1lbnRBY3Rpb25zIGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMvY29tbWVudHMvaW5kZXgnXG5cbmltcG9ydCB7IGNhbGN1bGF0ZVRpbWVMZWZ0IH0gZnJvbSAnLi4vLi4vZ2VuZXJpYy90aW1lL2NhbGN1bGF0ZVRpbWVMZWZ0J1xuaW1wb3J0IFRyaWJ1bmFsQ29tbWVudHMgZnJvbSAnLi9jb21wb25lbnRzL1RyaWJ1bmFsQ29tbWVudHMvSW5kZXgnXG5pbXBvcnQgVm90aW5nQm94IGZyb20gJy4vY29tcG9uZW50cy9Wb3RpbmdCb3gvSW5kZXgnXG5cbmltcG9ydCBDb21tZW50IGZyb20gJy4uL01haW5Db250ZW50L2NvbXBvbmVudHMvU3ViVG9waWNzUGFnZS9jb21wb25lbnRzL0NvbW1lbnQvSW5kZXgnXG5pbXBvcnQgeyBDT01NRU5ULCBUT1BJQyB9IGZyb20gJy4uLy4uL2VudW1zL2NvbnRlbnRfdHlwZSdcbmltcG9ydCBUb3BpY0l0ZW0gZnJvbSAnLi4vTWFpbkNvbnRlbnQvY29tcG9uZW50cy9Ib21lUGFnZS9jb21wb25lbnRzL1RvcGljcy9jb21wb25lbnRzL1RvcGljSXRlbS9JbmRleCdcblxuY29uc3QgVHJpYnVuYWwgPSAoKSA9PiB7XG4gIGNvbnN0IHsgY29udGVudElkLCBjb250ZW50VHlwZSB9ID0gdXNlUGFyYW1zKClcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKChzKSA9PiBzLnNlc3Npb24uY3VycmVudFVzZXIpXG4gIGNvbnN0IHRvcGljcyA9IHVzZVNlbGVjdG9yKChzKSA9PiBzLnRvcGljcy5saXN0KVxuICBjb25zdCBjb21tZW50cyA9IHVzZVNlbGVjdG9yKChzKSA9PiBzLmNvbW1lbnRzLmxpc3QpXG4gIGNvbnN0IHRyaWJ1bmFsQ29tbWVudHMgPSB1c2VTZWxlY3RvcigocykgPT4gcy50cmlidW5hbENvbW1lbnRzKVxuICBjb25zdCByZXBvcnRTdGF0cyA9IHVzZVNlbGVjdG9yKChzKSA9PiBzLnJlcG9ydHMpW2NvbnRlbnRJZF1cbiAgY29uc3QgW3RpbWVMZWZ0LCBzZXRUaW1lTGVmdF0gPSB1c2VTdGF0ZSh7fSlcblxuICBjb25zdCB7XG4gICAgZ2V0VG9waWMsXG4gICAgZ2V0UmVwb3J0LFxuICAgIGdldEFsbFRyaWJ1bmFsQ29tbWVudHNCYXRjaCxcbiAgICBnZXRDb21tZW50LFxuICB9ID0gdXNlQmluZERpc3BhdGNoKHRvcGljQWN0aW9ucywgcmVwb3J0QWN0aW9ucywgdHJpYnVuYWxDb21tZW50c0FjdGlvbnMsIGNvbW1lbnRBY3Rpb25zKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IHRpbWVyXG4gICAgaWYgKHJlcG9ydFN0YXRzKSB7XG4gICAgICB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgc2V0VGltZUxlZnQoY2FsY3VsYXRlVGltZUxlZnQocmVwb3J0U3RhdHMucmVwb3J0UGVyaW9kRW5kKSlcbiAgICAgIH0sIDEwMDApXG4gICAgfVxuICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZXIpXG4gIH0sIFtyZXBvcnRTdGF0c10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY29udGVudElkICYmIHVzZXIpIHtcbiAgICAgIGlmIChjb250ZW50VHlwZSA9PT0gQ09NTUVOVCkgZ2V0Q29tbWVudChjb250ZW50SWQpXG4gICAgICBpZiAoY29udGVudFR5cGUgPT09IFRPUElDKSBnZXRUb3BpYyhjb250ZW50SWQsIHVzZXIuaWQpXG4gICAgICBnZXRSZXBvcnQoY29udGVudElkKVxuICAgICAgZ2V0QWxsVHJpYnVuYWxDb21tZW50c0JhdGNoKGNvbnRlbnRJZClcbiAgICB9XG4gIH0sIFtjb250ZW50SWQsIHVzZXJdKVxuXG4gIGNvbnN0IHRpbWVyQ29tcG9uZW50cyA9IFtdXG5cbiAgT2JqZWN0LmtleXModGltZUxlZnQpLmZvckVhY2goKGludGVydmFsLCBpZHgpID0+IHtcbiAgICBpZiAoIXRpbWVMZWZ0W2ludGVydmFsXSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGltZXJDb21wb25lbnRzLnB1c2goXG4gICAgICA8c3BhbiBrZXk9e1N0cmluZyhgJHtpZHh9MGApfT5cbiAgICAgICAge3RpbWVMZWZ0W2ludGVydmFsXX1cbiAgICAgICAgeycgJ31cbiAgICAgICAge2ludGVydmFsfVxuICAgICAgICB7JyAnfVxuICAgICAgPC9zcGFuPixcbiAgICApXG4gIH0pXG5cbiAgY29uc3Qgdm90aW5nVGltZVVwID0gdGltZXJDb21wb25lbnRzLmxlbmd0aCA9PT0gMFxuXG4gIGNvbnN0IENvbnRlbnQgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCB0b3BpYyA9IHRvcGljcz8uZmluZCgodCkgPT4gdC5pZCA9PT0gY29udGVudElkKVxuICAgIGNvbnN0IGNvbW1lbnQgPSBjb21tZW50cz8uZmluZCgoYykgPT4gYy5kYXRhLmlkID09PSBjb250ZW50SWQpXG4gICAgaWYgKHRvcGljKSByZXR1cm4gPFRvcGljSXRlbSBrZXk9e3RvcGljLmlkfSB0b3BpYz17dG9waWN9IHVzZXI9e3VzZXJ9IC8+XG4gICAgaWYgKGNvbW1lbnQpIHJldHVybiA8Q29tbWVudCBjb21tZW50RGF0YT17Y29tbWVudC5kYXRhfSByZXBsaWVzPXtjb21tZW50LmNoaWxkcmVufSAvPlxuICAgIHJldHVybiBudWxsXG4gIH0sIFt0b3BpY3MsIGNvbW1lbnRzLCBjb250ZW50SWRdKVxuICByZXR1cm4gKFxuICAgIDxPdXRlckNvbnRhaW5lciBpZD1cInRyaWJ1bmFsLWNvbnRhaW5lclwiPlxuICAgICAgPEhlYWRlcj5cbiAgICAgICAgPFN0eWxlZFNjYWxlc1N2ZyAvPlxuICAgICAgICA8aDE+XG4gICAgICAgICAgQ29tbXVuaXR5IENvdXJ0XG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxTdHlsZWRTY2FsZXNTdmcgLz5cbiAgICAgIDwvSGVhZGVyPlxuICAgICAgPFRpbWVyPlxuICAgICAgICA8aDQ+XG4gICAgICAgICAgeyByZXBvcnRTdGF0cz8ucmVwb3J0UGVyaW9kRW5kID8gJ1ZvdGluZyBQZXJpb2QgVGltaW5nIFJlbWFpbmluZycgOiAnVm90aW5nIEhhcyBFbmRlZCcgfVxuICAgICAgICA8L2g0PlxuICAgICAgICB7J1xcbid9XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgeyghT2JqZWN0LmtleXModGltZUxlZnQpICYmIHJlcG9ydFN0YXRzKSA/IDxzcGFuPlRpbWUgSXMgVXAhPC9zcGFuPiA6IHRpbWVyQ29tcG9uZW50c31cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1RpbWVyPlxuICAgICAgPElubmVyQ29udGFpbmVyPlxuICAgICAgICA8U3R5bGVkUGlsbGFyU3ZnIC8+XG4gICAgICAgIHtDb250ZW50fVxuICAgICAgICA8U3R5bGVkUGlsbGFyU3ZnIC8+XG4gICAgICA8L0lubmVyQ29udGFpbmVyPlxuICAgICAge3JlcG9ydFN0YXRzICYmIChcbiAgICAgIDxWb3RpbmdCb3hcbiAgICAgICAgY29udGVudElkPXtjb250ZW50SWR9XG4gICAgICAgIHJlcG9ydFN0YXRzPXtyZXBvcnRTdGF0c31cbiAgICAgICAgdm90aW5nVGltZVVwPXt2b3RpbmdUaW1lVXB9XG4gICAgICAvPlxuICAgICAgKX1cbiAgICAgIDxSZXBvcnRTdGF0c0NvbnRhaW5lcj5cbiAgICAgICAgPFJlcG9ydFN0YXRJdGVtPlxuICAgICAgICAgIDxoMj5Ub3hpYyBSZXBvcnRzPC9oMj5cbiAgICAgICAgICB7cmVwb3J0U3RhdHMgJiYgKHJlcG9ydFN0YXRzLm51bVRveGljUmVwb3J0cyB8fCAwKX1cbiAgICAgICAgPC9SZXBvcnRTdGF0SXRlbT5cbiAgICAgICAgPFJlcG9ydFN0YXRJdGVtPlxuICAgICAgICAgIDxoMj5QZXJzb25hbCBBdHRhY2sgUmVwb3J0czwvaDI+XG4gICAgICAgICAge3JlcG9ydFN0YXRzICYmIChyZXBvcnRTdGF0cy5udW1QZXJzb25hbEF0dGFja1JlcG9ydHMgfHwgMCl9XG4gICAgICAgIDwvUmVwb3J0U3RhdEl0ZW0+XG4gICAgICAgIDxSZXBvcnRTdGF0SXRlbT5cbiAgICAgICAgICA8aDI+U3BhbSBSZXBvcnRzPC9oMj5cbiAgICAgICAgICB7cmVwb3J0U3RhdHMgJiYgKHJlcG9ydFN0YXRzLm51bVNwYW1SZXBvcnRzIHx8IDApfVxuICAgICAgICA8L1JlcG9ydFN0YXRJdGVtPlxuICAgICAgPC9SZXBvcnRTdGF0c0NvbnRhaW5lcj5cbiAgICAgIDxUcmlidW5hbENvbW1lbnRzIGNvbW1lbnRzPXt0cmlidW5hbENvbW1lbnRzfSAvPlxuICAgIDwvT3V0ZXJDb250YWluZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVtbyhUcmlidW5hbClcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBTY2FsZXNTdmcsIFBpbGxhclN2ZyB9IGZyb20gJy4uLy4uLy4uL3N2Z3Mvc3ZncydcblxuZXhwb3J0IGNvbnN0IE91dGVyQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctYm90dG9tOiA2MHZoO1xuYFxuXG5leHBvcnQgY29uc3QgSGVhZGVyID0gc3R5bGVkKCdoZWFkZXInKWBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiBjbGFtcCgzMHB4LCAxdncsIDEwMHB4KSAwIGNsYW1wKDMwcHgsIDF2dywgMTAwcHgpIDA7XG4gIGgxIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDJ2dztcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICBmb250LXNpemU6IDUuN3Z3O1xuICAgIH1cbiAgfVxuICBzdmcge1xuICAgIHdpZHRoOiA0dncgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDR2dyAhaW1wb3J0YW50O1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgIHdpZHRoOiAxMnZ3ICFpbXBvcnRhbnQ7XG4gICAgICBoZWlnaHQ6IDEydncgIWltcG9ydGFudDtcbiAgICB9XG4gICAgbWFyZ2luOiAwIDN2dztcbiAgfVxuYFxuZXhwb3J0IGNvbnN0IFN0eWxlZFNjYWxlc1N2ZyA9IHN0eWxlZChTY2FsZXNTdmcpYFxuICB3aWR0aDogNHZ3ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNHZ3ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCAxdnc7XG5gXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRQaWxsYXJTdmcgPSBzdHlsZWQoUGlsbGFyU3ZnKWBcbiAgZGlzcGxheTogYmxvY2s7XG5gXG5cbmV4cG9ydCBjb25zdCBJbm5lckNvbnRhaW5lciA9IHN0eWxlZCgnZGl2JylgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xuICB3aWR0aDogMTAwJTtcblxuYFxuXG5leHBvcnQgY29uc3QgVm90aW5nQ29udGFpbmVyID0gc3R5bGVkKCdzZWN0aW9uJylgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAxNHZ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCByZ2IoNjAgNjAgNjAgLyAxMCUpO1xuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMC41cHggc29saWQgbGlnaHRncmF5O1xuICBib3JkZXItY29sb3I6IHJnYmEoMjAwLCAyMDAsIDIwMCwgMC4yNSk7XG4gIG1hcmdpbjogY2xhbXAoMzBweCwgMXZ3LCAxMDBweCkgMCBjbGFtcCgzMHB4LCAxdncsIDEwMHB4KSAwO1xuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogMzB2dztcbiAgfVxuXG4gIHN2ZyB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgICAgd2lkdGg6IDl2dztcbiAgICAgIGhlaWdodDogOXZ3O1xuICAgIH1cbiAgfVxuXG4gIHNwYW4ge1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAgIGZvbnQtc2l6ZTogNHZ3O1xuICAgIH1cbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgUmVwb3J0U3RhdHNDb250YWluZXIgPSBzdHlsZWQoJ3VsJylgXG4gIGRpc3BsYXk6IGZsZXg7XG5gXG5cbmV4cG9ydCBjb25zdCBSZXBvcnRTdGF0SXRlbSA9IHN0eWxlZCgnbGknKWBcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbS1tZW51LWl0ZW0taG92ZXIpO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggcmdiKDYwIDYwIDYwIC8gMTAlKTtcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW0tc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3IpO1xuICBmb250LXNpemU6IDF2dztcbiAgcGFkZGluZzogMnZ3IDR2dztcbiAgbWFyZ2luOiAydncgNHZ3O1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgICBmb250LXNpemU6IDR2dztcbiAgICAgIG1hcmdpbjogMnZ3IDJ2dztcblxuICAgIH1cbmBcbmV4cG9ydCBjb25zdCBWb3Rlc0FnYWluc3QgPSBzdHlsZWQoJ2RpdicpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDEwJTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICBmb250LXNpemU6IDJ2dztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgIGZvbnQtc2l6ZTogNHZ3O1xuICB9XG4gIFxuYFxuXG5leHBvcnQgY29uc3QgVm90ZXNGb3IgPSBzdHlsZWQoJ2RpdicpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMCU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbiAgZm9udC1zaXplOiAydnc7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgIGZvbnQtc2l6ZTogNHZ3O1xuICB9XG5gXG5leHBvcnQgY29uc3QgVGltZXIgPSBzdHlsZWQoJ2RpdicpYFxuICBmb250LXNpemU6IDEuM3Z3OyBcbiAgY29sb3I6IGdyYXk7XG4gIG1hcmdpbjogMCAwIGNsYW1wKDMwcHgsIDF2dywgMTAwcHgpIDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICBmb250LXNpemU6IDR2dztcbiAgfVxuXG4gIGg0IHtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IE1pZGRsZVNlY3Rpb24gPSBzdHlsZWQoJ2RpdicpYFxuXG4gIHNwYW46Zmlyc3QtY2hpbGQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiByZWQ7XG4gIH1cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5gXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFRhYiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcblxuaW1wb3J0IHsgTGluZSB9IGZyb20gJy4uLy4uLy4uL0NvbW1vbkNvbXBvbmVudHMvTGluZSdcbmltcG9ydCBDb21tZW50Q29sdW1uIGZyb20gJy4uLy4uLy4uL01haW5Db250ZW50L2NvbXBvbmVudHMvU3ViVG9waWNzUGFnZS9jb21wb25lbnRzL0NvbW1lbnRDb2x1bW4vSW5kZXgnXG5pbXBvcnQgeyBDb2x1bW5Db250YWluZXIgfSBmcm9tICcuLi8uLi8uLi9NYWluQ29udGVudC9jb21wb25lbnRzL1N1YlRvcGljc1BhZ2UvY29tcG9uZW50cy9Db21tZW50VGhyZWFkL1N0eWxlJ1xuaW1wb3J0IHVzZUNhdGVnb3JpemVDb21tZW50cyBmcm9tICcuL2hvb2tzL3VzZUNhdGVnb3JpemVDb21tZW50cydcbmltcG9ydCB7IFN0eWxlZFRoZW1lVGFiIH0gZnJvbSAnLi9TdHlsZS9pbmRleCdcblxuY29uc3QgVHJpYnVuYWxDb21tZW50cyA9ICgpID0+IHtcbiAgY29uc3QgW2tleSwgc2V0S2V5XSA9IHVzZVN0YXRlKCdhbGwnKVxuICBjb25zdCBjb21tZW50cyA9IHVzZUNhdGVnb3JpemVDb21tZW50cygpXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxMaW5lIC8+XG4gICAgICA8U3R5bGVkVGhlbWVUYWJcbiAgICAgICAgYWN0aXZlS2V5PXtrZXl9XG4gICAgICAgIG9uU2VsZWN0PXsoaykgPT4gc2V0S2V5KGspfVxuICAgICAgPlxuICAgICAgICA8VGFiIGV2ZW50S2V5PVwiYWxsXCIgdGl0bGU9XCJBbGxcIj5cbiAgICAgICAgICA8Q29sdW1uQ29udGFpbmVyPlxuICAgICAgICAgICAgPENvbW1lbnRDb2x1bW4gbnVtQ29tbWVudHM9e2NvbW1lbnRzPy5hbGxDb21tZW50c30gY29tbWVudHM9e2NvbW1lbnRzLmFsbH0gY29tbWVudFNlbnRpbWVudD1cIkFsbFwiIGNvbG9yPVwidmFyKC0tbS1wcmltYXJ5LWJhY2tncm91bmQtY29sb3IpXCIgLz5cbiAgICAgICAgICA8L0NvbHVtbkNvbnRhaW5lcj5cbiAgICAgICAgPC9UYWI+XG4gICAgICAgIDxUYWIgZXZlbnRLZXk9XCJEZWZlbmRhbnRcIiB0aXRsZT1cIkRlZmVuZGFudFwiPlxuICAgICAgICAgIDxDb2x1bW5Db250YWluZXI+XG4gICAgICAgICAgICA8Q29tbWVudENvbHVtbiBudW1Db21tZW50cz17Y29tbWVudHM/LnBvc2l0aXZlQ29tbWVudHN9IGNvbW1lbnRzPXtjb21tZW50cy5EZWZlbmRhbnR9IGNvbW1lbnRTZW50aW1lbnQ9XCJEZWZlbmRhbnRcIiBjb2xvcj1cIiM2QTZFNzBcIiAvPlxuICAgICAgICAgIDwvQ29sdW1uQ29udGFpbmVyPlxuICAgICAgICA8L1RhYj5cbiAgICAgICAgPFRhYiBldmVudEtleT1cIlJlcG9ydGVyXCIgdGl0bGU9XCJSZXBvcnRlcnNcIj5cbiAgICAgICAgICA8Q29sdW1uQ29udGFpbmVyPlxuICAgICAgICAgICAgPENvbW1lbnRDb2x1bW4gY29tbWVudHM9e2NvbW1lbnRzLlJlcG9ydGVyfSBjb21tZW50U2VudGltZW50PVwiUmVwb3J0ZXJcIiBjb2xvcj1cIiM0NzRBNEZcIiAvPlxuICAgICAgICAgIDwvQ29sdW1uQ29udGFpbmVyPlxuICAgICAgICA8L1RhYj5cbiAgICAgICAgPFRhYiBldmVudEtleT1cIkp1cnlcIiB0aXRsZT1cIkp1cnlcIj5cbiAgICAgICAgICA8Q29sdW1uQ29udGFpbmVyPlxuICAgICAgICAgICAgPENvbW1lbnRDb2x1bW4gY29tbWVudHM9e2NvbW1lbnRzLkp1cnl9IGNvbW1lbnRTZW50aW1lbnQ9XCJKdXJ5XCIgY29sb3I9XCJ2YXIoLS1tLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcilcIiAvPlxuICAgICAgICAgIDwvQ29sdW1uQ29udGFpbmVyPlxuICAgICAgICA8L1RhYj5cbiAgICAgICAgPFRhYiBldmVudEtleT1cIkdlbmVyYWxcIiB0aXRsZT1cIkdlbmVyYWwgUHVibGljXCI+XG4gICAgICAgICAgPENvbHVtbkNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxDb21tZW50Q29sdW1uIGNvbW1lbnRzPXtjb21tZW50cy5HZW5lcmFsfSBjb21tZW50U2VudGltZW50PVwiR2VuZXJhbCBQdWJsaWNcIiBjb2xvcj1cInZhcigtLW0tcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yKVwiIC8+XG4gICAgICAgICAgPC9Db2x1bW5Db250YWluZXI+XG4gICAgICAgIDwvVGFiPlxuICAgICAgPC9TdHlsZWRUaGVtZVRhYj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmlidW5hbENvbW1lbnRzXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgVGhlbWVUYWJOZXcgfSBmcm9tICcuLi8uLi8uLi8uLi9Db21tb25Db21wb25lbnRzL1RhYnMvU3R5bGUnXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRUaGVtZVRhYiA9IHN0eWxlZChUaGVtZVRhYk5ldylgXG4gIC5uYXYtaXRlbSB7XG4gICAgbWFyZ2luOiAwIDAuM2VtIDAgMDtcbiAgfVxuYFxuIiwiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuY29uc3QgY29tbWVudFR5cGUgPSBuZXcgU2V0KFsnRGVmZW5kYW50JywgJ1JlcG9ydGVyJywgJ0p1cnknLCAnR2VuZXJhbCddKVxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IGNvbW1lbnRzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS50cmlidW5hbENvbW1lbnRzLmxpc3QpXG4gIHJldHVybiB1c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBjYXRlZ29yaXplZENvbW1lbnRzID0ge1xuICAgICAgRGVmZW5kYW50OiBbXSxcbiAgICAgIFJlcG9ydGVyOiBbXSxcbiAgICAgIEp1cnk6IFtdLFxuICAgICAgR2VuZXJhbDogW10sXG4gICAgICBhbGw6IGNvbW1lbnRzLFxuICAgIH1cbiAgICBjb21tZW50cy5mb3JFYWNoKChjb21tZW50KSA9PiB7XG4gICAgICBpZiAoY29tbWVudFR5cGUuaGFzKGNvbW1lbnQuZGF0YT8uY29tbWVudFR5cGUpKSB7XG4gICAgICAgIGNhdGVnb3JpemVkQ29tbWVudHNbY29tbWVudC5kYXRhPy5jb21tZW50VHlwZV0ucHVzaChjb21tZW50KVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGNhdGVnb3JpemVkQ29tbWVudHNcbiAgfSwgW2NvbW1lbnRzXSlcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBtZW1vLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBHYXZlbDIsIENhc3RCYWxsb3RTdmcgfSBmcm9tICcuLi8uLi8uLi8uLi9zdmdzL3N2Z3MnXG5pbXBvcnQgeyBUT1BJQ19WT1RFX0ZPUk0gfSBmcm9tICcuLi8uLi8uLi9BcHAvTW9kYWwvSW5kZXgnXG5pbXBvcnQgVGhlbWVCdXR0b24gZnJvbSAnLi4vLi4vLi4vQ29tbW9uQ29tcG9uZW50cy9CdXR0b24vSW5kZXgnXG5pbXBvcnQgdXNlT3Blbk1vZGFsIGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZU9wZW5Nb2RhbCdcbmltcG9ydCB7XG4gIFZvdGluZ0NvbnRhaW5lciwgVm90ZXNBZ2FpbnN0LCBWb3Rlc0ZvciwgTWlkZGxlU2VjdGlvbixcbn0gZnJvbSAnLi9TdHlsZSdcblxuY29uc3QgVm90aW5nQm94ID0gKHsgY29udGVudElkLCByZXBvcnRTdGF0cywgdm90aW5nVGltZVVwIH0pID0+IHtcbiAgY29uc3Qgb3Blbk1vZGFsID0gdXNlT3Blbk1vZGFsKFRPUElDX1ZPVEVfRk9STSwgeyBjb250ZW50SWQgfSlcblxuICBjb25zdCBoYXNBbHJlYWR5Vm90ZWQgPSB1c2VNZW1vKCgpID0+IChyZXBvcnRTdGF0cy52b3RlQWdhaW5zdCB8fCByZXBvcnRTdGF0cy52b3RlRm9yKSxcbiAgICBbcmVwb3J0U3RhdHMudm90ZUFnYWluc3QsIHJlcG9ydFN0YXRzLnZvdGVGb3JdKVxuXG4gIGNvbnN0IHZlcmRpY3QgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBpZiAocmVwb3J0U3RhdHMubnVtVm90ZXNGb3IgPiByZXBvcnRTdGF0cy5udW1Wb3Rlc0FnYWluc3QpIHJldHVybiAnVmlvbGF0aW9uJ1xuICAgIHJldHVybiAnTm8gVmlvbGF0aW9uJ1xuICB9LCBbcmVwb3J0U3RhdHMubnVtVm90ZXNBZ2FpbnN0LCByZXBvcnRTdGF0cy5udW1Wb3Rlc0Zvcl0pXG5cbiAgcmV0dXJuIChcbiAgICA8Vm90aW5nQ29udGFpbmVyPlxuICAgICAgPFZvdGVzRm9yPlxuICAgICAgICBWaW9sYXRpb24gVm90ZXNcbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAge3JlcG9ydFN0YXRzICYmIChyZXBvcnRTdGF0cy5udW1Wb3Rlc0ZvciA/PyAnPycpfVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L1ZvdGVzRm9yPlxuICAgICAgPFZvdGVzQWdhaW5zdD5cbiAgICAgICAgTm8gVmlvbGF0aW9uIFZvdGVzXG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgIHtyZXBvcnRTdGF0cyAmJiAocmVwb3J0U3RhdHMubnVtVm90ZXNBZ2FpbnN0ID8/ICc/Jyl9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvVm90ZXNBZ2FpbnN0PlxuICAgICAgPE1pZGRsZVNlY3Rpb24gdmVyZGljdD17dmVyZGljdH0+XG4gICAgICAgIHsgdm90aW5nVGltZVVwICYmIChcbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAge2BWRVJESUNUIOKtoiAke3ZlcmRpY3R9YH1cbiAgICAgICAgICB7JyAnfVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgICl9XG4gICAgICAgIHsgdm90aW5nVGltZVVwID8gPEdhdmVsMiAvPiA6IDxDYXN0QmFsbG90U3ZnIC8+IH1cbiAgICAgICAgeyhyZXBvcnRTdGF0cyAmJiAhdm90aW5nVGltZVVwKSAmJiAoXG4gICAgICAgIDxUaGVtZUJ1dHRvbiBvbkNsaWNrPXtvcGVuTW9kYWx9PlxuICAgICAgICAgIHtoYXNBbHJlYWR5Vm90ZWQgPyAnQ2hhbmdlIFlvdXIgVm90ZScgOiAnQ2FzdCBZb3VyIFZvdGUnfVxuICAgICAgICA8L1RoZW1lQnV0dG9uPlxuICAgICAgICApfVxuICAgICAgPC9NaWRkbGVTZWN0aW9uPlxuICAgIDwvVm90aW5nQ29udGFpbmVyPlxuXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVtbyhWb3RpbmdCb3gpXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgVm90aW5nQ29udGFpbmVyID0gc3R5bGVkKCdzZWN0aW9uJylgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAxNHZ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCByZ2IoNjAgNjAgNjAgLyAxMCUpO1xuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMC41cHggc29saWQgbGlnaHRncmF5O1xuICBib3JkZXItY29sb3I6IHJnYmEoMjAwLCAyMDAsIDIwMCwgMC4yNSk7XG4gIG1hcmdpbjogY2xhbXAoMzBweCwgMXZ3LCAxMDBweCkgMCBjbGFtcCgzMHB4LCAxdncsIDEwMHB4KSAwO1xuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogMzB2dztcbiAgfVxuXG4gIHN2ZyB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgICAgd2lkdGg6IDl2dztcbiAgICAgIGhlaWdodDogOXZ3O1xuICAgIH1cbiAgfVxuXG4gIHNwYW4ge1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAgIGZvbnQtc2l6ZTogNHZ3O1xuICAgIH1cbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgVm90ZXNBZ2FpbnN0ID0gc3R5bGVkKCdkaXYnKWBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTAlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG4gIGZvbnQtc2l6ZTogMS4zdnc7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgIGZvbnQtc2l6ZTogNHZ3O1xuICB9XG4gIFxuYFxuXG5leHBvcnQgY29uc3QgVm90ZXNGb3IgPSBzdHlsZWQoJ2RpdicpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDEwJTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICBmb250LXNpemU6IDEuM3Z3O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgZm9udC1zaXplOiA0dnc7XG4gIH1cblxuYFxuXG5leHBvcnQgY29uc3QgTWlkZGxlU2VjdGlvbiA9IHN0eWxlZCgnZGl2JylgXG5cbiAgc3BhbjpmaXJzdC1jaGlsZCB7XG4gICAgZm9udC1zaXplOiAydnc7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICR7KHByb3BzKSA9PiAocHJvcHMudmVyZGljdCA9PT0gJ1Zpb2xhdGlvbicgPyAncmVkJyA6ICdncmVlbicpfTtcbiAgfVxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMzUlKTtcbiAgaGVpZ2h0OiA1NSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbmBcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDb2xsYXBzZSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcbi8vIGltcG9ydCB7IE1kRXhwYW5kTW9yZSwgTWRFeHBhbmRMZXNzIH0gZnJvbSAncmVhY3QtaWNvbnMvbWQnXG5pbXBvcnQgeyBVcEFycm93U3ZnLCBEb3duQXJyb3dTdmcgfSBmcm9tICcuLi8uLi9zdmdzL3N2Z3MnXG5cbmltcG9ydCB7IFZpZGVvRGVzY3JpcHRpb25DYXJkIH0gZnJvbSAnLi4vQ29tbW9uQ29tcG9uZW50cy9DYXJkL0luZGV4J1xuaW1wb3J0IEFjdGlvblRvb2xiYXIgZnJvbSAnLi4vQ29tbW9uQ29tcG9uZW50cy9BY3Rpb25Ub29sYmFycy9Ub3BpY1Rvb2xiYXIvSW5kZXgnXG5pbXBvcnQgTGlua1NlY3Rpb24gZnJvbSAnLi4vQ29tbW9uQ29tcG9uZW50cy9MaW5rU2VjdGlvbi9JbmRleCdcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJy4uL0NvbW1vbkNvbXBvbmVudHMvSWNvbkJ1dHRvbi9JbmRleCdcblxuaW1wb3J0IHRvcGljQWN0aW9uQ3JlYXRvcnMgZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucy90b3BpY3MnXG5cbmltcG9ydCB1c2VTZXRJbm5lckh0bWwgZnJvbSAnLi4vaG9va3MvdXNlU2V0SW5uZXJIdG1sJ1xuaW1wb3J0IHVzZU9wZW5Nb2RhbCBmcm9tICcuLi9ob29rcy91c2VPcGVuTW9kYWxXaXRoTG9jYXRpb24nXG5pbXBvcnQgdXNlQmluZERpc3BhdGNoIGZyb20gJy4uL2hvb2tzL3JlZHV4L3VzZUJpbmREaXNwYXRjaCdcbmltcG9ydCB1c2VVcGRhdGVMaWtlcyBmcm9tICcuL2hvb2tzL3VzZVVwZGF0ZUxpa2VzJ1xuaW1wb3J0IHVzZUdvVG9TdWJUb3BpYyBmcm9tICcuLi9ob29rcy9yb3V0aW5nL3VzZUdvVG9TdWJUb3BpY3MnXG5pbXBvcnQgeyBnZXRUaW1lU2luY2UgfSBmcm9tICcuLi8uLi9nZW5lcmljL3N0cmluZy9kYXRlRm9ybWF0dGVyJ1xuXG5pbXBvcnQgeyBWaWRlb1BsYXllciwgRGVzY3JpcHRpb24sIEV4cGFuZEJ1dHRvbiB9IGZyb20gJy4vU3R5bGUnXG5cbmNvbnN0IFZpZGVvU2hvd1BhZ2UgPSAoe1xuICB0b3BpYywgdXNlciwgc3JjLCBzaG93TGlua3MsXG59KSA9PiB7XG4gIGNvbnN0IGRlc2NSZWYgPSB1c2VSZWYobnVsbClcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IG9wZW5Nb2RhbCA9IHVzZU9wZW5Nb2RhbCgnVE9QSUNfUkVQTFknKVxuICBjb25zdCBnb1RvU3ViVG9waWMgPSB1c2VHb1RvU3ViVG9waWModG9waWMuaWQpXG4gIGNvbnN0IHsgdXBkYXRlVG9waWNMaWtlcyB9ID0gdXNlQmluZERpc3BhdGNoKHRvcGljQWN0aW9uQ3JlYXRvcnMpXG4gIGNvbnN0IHVwZGF0ZUxpa2VzID0gdXNlVXBkYXRlTGlrZXModXBkYXRlVG9waWNMaWtlcywgdG9waWMsIHVzZXIpXG4gIHVzZVNldElubmVySHRtbChkZXNjUmVmLCB0b3BpYz8uZGVzY3JpcHRpb24pXG5cbiAgY29uc3QgZXhwYW5kSWNvbiA9IGlzT3BlbiA/IDxVcEFycm93U3ZnIC8+IDogPERvd25BcnJvd1N2ZyAvPlxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgPFZpZGVvUGxheWVyIHNyYz17c3JjfSBsb2FkaW5nPVwibGF6eVwiIC8+XG4gICAgICA8VmlkZW9EZXNjcmlwdGlvbkNhcmRcbiAgICAgICAgb25DbGljaz17Z29Ub1N1YlRvcGljfVxuICAgICAgICB1c2VybmFtZT17dG9waWM/LmNyZWF0ZWRCeX1cbiAgICAgICAgaWNvblNyYz17YCR7dG9waWM/LmNyZWF0ZWRCeUljb25TcmN9YH1cbiAgICAgICAgc3VtbWFyeT17dG9waWM/LnN1bW1hcnl9XG4gICAgICAgIHRpbWU9e2dldFRpbWVTaW5jZSh0b3BpYz8uY3JlYXRlZEF0KX1cbiAgICAgID5cbiAgICAgICAgPERlc2NyaXB0aW9uPlxuICAgICAgICAgIDxzcGFuIHJlZj17ZGVzY1JlZn0gLz5cbiAgICAgICAgPC9EZXNjcmlwdGlvbj5cbiAgICAgICAge3RvcGljPy5ldmlkZW5jZUxpbmtzLmxlbmd0aCAhPT0gMFxuICAgICAgICAmJiAoXG4gICAgICAgIDxFeHBhbmRCdXR0b24+XG4gICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgIGljb249e2V4cGFuZEljb259XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4oIWlzT3Blbil9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgU2hvdyBBZGRpdGlvbmFsIEluZm9cbiAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgIDwvRXhwYW5kQnV0dG9uPlxuICAgICAgICApfVxuICAgICAgICA8Q29sbGFwc2UgaW49e2lzT3Blbn0+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxMaW5rU2VjdGlvbiB0b3BpYz17dG9waWN9IHNob3dMaW5rcz17c2hvd0xpbmtzfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbGxhcHNlPlxuICAgICAgICA8QWN0aW9uVG9vbGJhclxuICAgICAgICAgIGxpa2VzPXt0b3BpYz8ubGlrZXN9XG4gICAgICAgICAgdG9waWM9e3RvcGljfVxuICAgICAgICAgIHVzZXI9e3VzZXJ9XG4gICAgICAgIC8+XG4gICAgICA8L1ZpZGVvRGVzY3JpcHRpb25DYXJkPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpZGVvU2hvd1BhZ2VcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBWaWRlb1BsYXllciA9IHN0eWxlZCgnaWZyYW1lJylgXG4gIHdpZHRoOiAxMDAlO1xuICAvKiBoZWlnaHQ6IDQ1dnc7ICovXG4gIC8qIHdpZHRoOiA0NXZ3OyAgICovXG4gIGhlaWdodDogMjUuMzF2dztcblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgaGVpZ2h0OiA1MHZ3XG4gIH1cblxuYFxuXG5leHBvcnQgY29uc3QgRGVzY3JpcHRpb24gPSBzdHlsZWQoJ3AnKWBcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogLjZlbTtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBwYWRkaW5nOiAxZW07XG5gXG5cbmV4cG9ydCBjb25zdCBFeHBhbmRCdXR0b24gPSBzdHlsZWQoJ2RpdicpYCBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuYFxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgKHVwZGF0ZVRvcGljTGlrZXMsIHRvcGljLCB1c2VyKSA9PiB1c2VDYWxsYmFjaygoKSA9PiB7XG4gIGlmICghdG9waWMgfHwgIXVzZXIpIHJldHVybiAvLyBTb21lIHNvbXJ0IG9mIGVycm9yIGhlcmUgbWF5YmVcbiAgdXBkYXRlVG9waWNMaWtlcyh7XG4gICAgaWQ6IHRvcGljLmlkLFxuICAgIHVzZXJJZDogdXNlci5pZCxcbiAgICBpbmNyZW1lbnQ6ICF0b3BpYy5saWtlZCxcbiAgfSlcbn0sIFt0b3BpY10pXG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG5leHBvcnQgZGVmYXVsdCAodG9waWNJZCwgc3VidG9waWNJZCkgPT4ge1xuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKClcbiAgcmV0dXJuIHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBuYXZpZ2F0ZShgL2hvbWUvdG9waWNzLyR7dG9waWNJZH0vc3VidG9waWNzLyR7c3VidG9waWNJZH1gKVxuICB9LCBbXSlcbn1cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnXG5cbmltcG9ydCB1aUFjdGlvbkNyZWF0b3JzIGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMvdWkvaW5kZXgnXG5cbmltcG9ydCB7IFJFUExZIH0gZnJvbSAnLi4vQXBwL01vZGFsL0luZGV4J1xuaW1wb3J0IHsgdXVpZFJlZ0V4IH0gZnJvbSAnLi4vLi4vZ2VuZXJpYy9yZWdleC91dWlkJ1xuXG5leHBvcnQgZGVmYXVsdCAobW9kYWxUeXBlLCBtb2RhbFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZUxvY2F0aW9uKClcbiAgY29uc3Qgc3VidG9waWNJZCA9IHBhdGhuYW1lLm1hdGNoKHV1aWRSZWdFeCk/LlsxXVxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcbiAgY29uc3QgeyBvcGVuTW9kYWwgfSA9IGJpbmRBY3Rpb25DcmVhdG9ycyh1aUFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaClcbiAgcmV0dXJuIHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBvcGVuTW9kYWwoUkVQTFksIG1vZGFsUHJvcHMpXG4gIH0sIFtdKVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSdcbmltcG9ydCB7IEdFVF9BTExfUkVDUyB9IGZyb20gJy4uLy4uL3JlZHVjZXJzL3JlY3MvcmVjc1JlZHVjZXInXG5pbXBvcnQgKiBhcyBSZWNzQXBpVXRpbCBmcm9tICcuLi8uLi8uLi9hcGkvdjEvcmVjcy9yZWNzX2FwaV91dGlsJ1xuaW1wb3J0IHsgZXJyb3JGb3JtYXR0ZXIgfSBmcm9tICcuLi8uLi91dGlscy9lcnJvckZvcm1hdHRlcidcblxuY29uc3QgZ2V0QWxsUmVjc0FjdGlvbkNyZWF0b3IgPSAocmVjcykgPT4gKHtcbiAgdHlwZTogR0VUX0FMTF9SRUNTLFxuICBwYXlsb2FkOiByZWNzLFxuXG59KVxuXG5leHBvcnQgY29uc3QgZ2V0QWxsUmVjcyA9ICh0YXJnZXRDb250ZW50SWQpID0+IChkaXNwYXRjaCkgPT4gUmVjc0FwaVV0aWwuZ2V0QWxsUmVjcyh0YXJnZXRDb250ZW50SWQpXG4gIC50aGVuKChyZXMpID0+IGRpc3BhdGNoKGdldEFsbFJlY3NBY3Rpb25DcmVhdG9yKHJlcy5kYXRhKSkpXG4gIC5jYXRjaCgoZXJyb3IpID0+IHRvYXN0LmVycm9yKGVycm9yRm9ybWF0dGVyKGVycm9yKSkpXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2V0QWxsUmVjcyxcbn1cbiIsImltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknXG5pbXBvcnQgeyBjbG9zZU1vZGFsIH0gZnJvbSAnLi4vdWkvaW5kZXgnXG5pbXBvcnQgeyBBRERfUkVQT1JUIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvcmVwb3J0cy9yZXBvcnRzUmVkdWNlcidcbmltcG9ydCAqIGFzIFJlcG9ydHNBcGlVdGlsIGZyb20gJy4uLy4uLy4uL2FwaS92MS9yZXBvcnRzL3JlcG9ydHNfYXBpX3V0aWwnXG5pbXBvcnQgeyBlcnJvckZvcm1hdHRlciB9IGZyb20gJy4uLy4uL3V0aWxzL2Vycm9yRm9ybWF0dGVyJ1xuXG5jb25zdCBhZGRSZXBvcnRBY3Rpb25DcmVhdG9yID0gKHJlcG9ydCkgPT4gKHtcbiAgdHlwZTogQUREX1JFUE9SVCxcbiAgcGF5bG9hZDogcmVwb3J0LFxufSlcblxuZXhwb3J0IGNvbnN0IGdldFJlcG9ydCA9IChjb250ZW50SWQpID0+IChkaXNwYXRjaCkgPT4gKFxuICBSZXBvcnRzQXBpVXRpbC5nZXRSZXBvcnQoY29udGVudElkKVxuICAgIC50aGVuKChyZXMpID0+IGRpc3BhdGNoKGFkZFJlcG9ydEFjdGlvbkNyZWF0b3IocmVzLmRhdGEpKSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB0b2FzdC5lcnJvcihlcnJvckZvcm1hdHRlcihlcnJvcikpKVxuICAgIC5maW5hbGx5KCgpID0+IGRpc3BhdGNoKGNsb3NlTW9kYWwoKSkpXG4pXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2V0UmVwb3J0LFxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuLy8gYWN0aW9uIGNyZWF0b3IgaXMganVzdCBhIGZ1bmN0aW9uIHRoYXQgZGlzcGF0Y2hlcyBhbiBhY3Rpb25cbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknXG5pbXBvcnQgeyBjbG9zZU1vZGFsIH0gZnJvbSAnLi4vdWkvaW5kZXgnXG5pbXBvcnQgeyBBRERfU1VCX1RPUElDLCBHRVRfQUxMX1NVQl9UT1BJQ1MgfSBmcm9tICcuLi8uLi9yZWR1Y2Vycy9zdWJ0b3BpY3Mvc3ViVG9waWNzUmVkdWNlcidcbmltcG9ydCAqIGFzIFN1YlRvcGljc0FwaVV0aWwgZnJvbSAnLi4vLi4vLi4vYXBpL3YxL3N1YnRvcGljcy9zdWJ0b3BpY3NfYXBpX3V0aWwnXG5pbXBvcnQgeyBlcnJvckZvcm1hdHRlciB9IGZyb20gJy4uLy4uL3V0aWxzL2Vycm9yRm9ybWF0dGVyJ1xuXG5jb25zdCBnZXRBbGxUb3BpY3NBY3Rpb25DcmVhdG9yID0gKHN1YnRvcGljcykgPT4gKHtcbiAgdHlwZTogR0VUX0FMTF9TVUJfVE9QSUNTLFxuICBwYXlsb2FkOiBzdWJ0b3BpY3MsXG5cbn0pXG5cbmNvbnN0IGFkZFRvcGljQWN0aW9uQ3JlYXRvciA9IChzdWJUb3BpY0RhdGEpID0+ICh7XG4gIHR5cGU6IEFERF9TVUJfVE9QSUMsXG4gIHBheWxvYWQ6IHN1YlRvcGljRGF0YSxcbn0pXG5cbmV4cG9ydCBjb25zdCBjcmVhdGVTdWJUb3BpYyA9ICh0b3BpY0RhdGEpID0+IChkaXNwYXRjaCkgPT4gU3ViVG9waWNzQXBpVXRpbC5jcmVhdGVTdWJUb3BpYyh0b3BpY0RhdGEpXG4gIC50aGVuKChyZXMpID0+IGRpc3BhdGNoKGFkZFRvcGljQWN0aW9uQ3JlYXRvcihyZXMuZGF0YSkpKVxuICAudGhlbigoKSA9PiBkaXNwYXRjaChjbG9zZU1vZGFsKCkpKVxuICAuY2F0Y2goKGVycm9yKSA9PiB0b2FzdC5lcnJvcihlcnJvckZvcm1hdHRlcihlcnJvcikpKVxuXG5leHBvcnQgY29uc3QgZ2V0QWxsU3ViVG9waWNzID0gKHRvcGljSWQpID0+IChkaXNwYXRjaCkgPT4gU3ViVG9waWNzQXBpVXRpbC5nZXRBbGxTdWJUb3BpY3ModG9waWNJZClcbiAgLnRoZW4oKHJlcykgPT4gZGlzcGF0Y2goZ2V0QWxsVG9waWNzQWN0aW9uQ3JlYXRvcihyZXMuZGF0YSkpKVxuICAuY2F0Y2goKGVycm9yKSA9PiB0b2FzdC5lcnJvcihlcnJvckZvcm1hdHRlcihlcnJvcikpKVxuXG5leHBvcnQgY29uc3QgZ2V0U3ViVG9waWMgPSAoc3ViVG9waWNJZCkgPT4gKGRpc3BhdGNoKSA9PiBTdWJUb3BpY3NBcGlVdGlsLmdldFN1YlRvcGljKHN1YlRvcGljSWQpXG4gIC50aGVuKChyZXMpID0+IGRpc3BhdGNoKGFkZFRvcGljQWN0aW9uQ3JlYXRvcihyZXMuZGF0YSkpKVxuICAuY2F0Y2goKGVycm9yKSA9PiB0b2FzdC5lcnJvcihlcnJvckZvcm1hdHRlcihlcnJvcikpKVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNyZWF0ZVN1YlRvcGljLFxuICBnZXRBbGxTdWJUb3BpY3MsXG4gIGdldFN1YlRvcGljLFxufVxuIl0sIm5hbWVzIjpbImF4aW9zIiwiQkFDS0VORF9ERVYiLCJnZXRBbGxSZWNzIiwidGFyZ2V0Q29udGVudElkIiwiZ2V0IiwiY3JlYXRlU3ViVG9waWMiLCJzdWJUb3BpY0RhdGEiLCJwb3N0IiwiZ2V0QWxsU3ViVG9waWNzIiwidG9waWNJZCIsImdldFN1YlRvcGljIiwic3ViVG9waWNJZCIsInV1aWRSZWdFeCIsIlJlZ0V4cCIsImNhbGN1bGF0ZVRpbWVMZWZ0IiwicmVwb3J0RW5kVGltZSIsImRpZmZlcmVuY2UiLCJEYXRlIiwidGltZUxlZnQiLCJkYXlzIiwiTWF0aCIsImZsb29yIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsIlJlYWN0IiwibWVtbyIsInVzZVBhcmFtcyIsIlVwVm90ZUJ1dHRvbiIsIkRvd25Wb3RlQnV0dG9uIiwiQ29tbWVudEJ1dHRvbiIsIkNpdmlsaXR5QnV0dG9uIiwiVHJpYnVuYWxCdXR0b24iLCJDb250YWluZXIiLCJMZWZ0IiwiUmlnaHQiLCJDT01NRU5UIiwiVFJJQlVOQUxfQ09NTUVOVCIsIkNvbW1lbnRBY3Rpb25Ub29sYmFyIiwibGlrZXMiLCJjb21tZW50IiwidXNlciIsInBhcmFtcyIsImlzVHJpYnVuYWxDb21tZW50IiwiY29tbWVudFR5cGUiLCJpZCIsInVzZU1lbW8iLCJ1c2VTdGF0ZSIsIlJhbmdlU2xpZGVyIiwiUG9wb3ZlclN0aWNrT25Ib3ZlciIsInVzZVVwZGF0ZUNvbW1lbnRDaXZpbGl0eSIsInNob3dQb3BvdmVyIiwic2V0U2hvd1BvcG92ZXIiLCJvbkNsaWNrIiwicHJldiIsInVwZGF0ZUNvbW1lbnRDaXZpbGl0eSIsIkljb24iLCJjaXZpbGl0eSIsInVzZUNhbGxiYWNrIiwidXNlU2VsZWN0b3IiLCJ1c2VMb2NhdGlvbiIsImNvbW1lbnRBY3Rpb25zIiwidHJpYnVuYWxDb21tZW50QWN0aW9ucyIsInVzZUJpbmREaXNwYXRjaCIsInBhdGhuYW1lIiwicyIsInNlc3Npb24iLCJjdXJyZW50VXNlciIsInVwZGF0ZVRyaWJ1bmFsQ29tbWVudENpdmlsaXR5IiwiZSIsImlzVHJpYnVuYWwiLCJpbmNsdWRlcyIsImRhdGEiLCJnaXZpbmdVc2VySWQiLCJyZWNlaXZpbmdVc2VySWQiLCJjcmVhdGVkQnlJZCIsImNvbW1lbnRJZCIsInZhbHVlIiwiTnVtYmVyIiwiY3VycmVudFRhcmdldCIsImNpdmlsIiwiSWNvbkJ1dHRvbiIsIkNvbW1lbnRTdmciLCJ1c2VPcGVuTW9kYWwiLCJSRVBMWSIsImNvbnRlbnRJZCIsIm9wZW5Db21tZW50TW9kYWwiLCJyZXBseVR5cGUiLCJyb290UGFyZW50Q29tbWVudElkIiwicm9vdElkIiwidHJpYnVuYWxDb21tZW50VW5kZXJSZXZpZXdJZCIsInVzZU9uUmFuZ2VDaGFuZ2UiLCJSYW5nZSIsIk1lc3NhZ2UiLCJvblNsaWRlckNoYW5nZSIsInNsaWRlclZhbHVlIiwic3RvcFByb3BhZ2F0aW9uIiwic3R5bGVkIiwic2V0U2xpZGVyVmFsdWUiLCJyYW5nZSIsInJhbmdlViIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJuZXdWYWx1ZSIsIm1pbiIsIm1heCIsIm5ld1Bvc2l0aW9uIiwiaW5uZXJIVE1MIiwic3R5bGUiLCJsZWZ0IiwiVXNlckluZm9ybWF0aW9uRGlzcGxheSIsIk1pZGRsZSIsIkhvbWVQYWdlR3JpZCIsIk5vdGlmaWNhdGlvbkl0ZW0iLCJCb3JkZXJDb250YWluZXIiLCJOb3RpZmljYXRpb25MaXN0IiwiSGVhZGVyIiwiTm90aWZpY2F0aW9ucyIsIm5vdGlmaWNhdGlvbnMiLCJ1c2VyTm90aWZpY2F0aW9uc0xpc3QiLCJtYXAiLCJub3RpZmljYXRpb24iLCJMaW5rIiwidXNlTmF2aWdhdGUiLCJNZW51VGltZSIsIlVzZXJuYW1lQW5kVGFnIiwiZ2V0VGltZVNpbmNlIiwiTGVmdENvbnRhaW5lciIsIk1pZGRsZUNvbnRhaW5lciIsIlByb2ZpbGVJY29uIiwiQ29tbWVudENpdmlsaXR5R2l2ZW4iLCJDb21tZW50Q2l2aWxpdHlOb3RpZmNhdGlvbiIsImdpdmluZ1VzZXJVc2VybmFtZSIsImdpdmluZ1VzZXJJY29uU3JjIiwiZ2l2aW5nVXNlclRhZyIsInN1YnRvcGljSWQiLCJjcmVhdGVkQXQiLCJvbGQiLCJuZXdWYWwiLCJuYXZpZ2F0ZSIsImhhbmRsZUNsaWNrIiwidG9GaXhlZCIsIk5ld0ZvbGxvd2VyIiwiQWRkRnJpZW5kU3ZnIiwiRm9sbG93Tm90aWZjYXRpb24iLCJDb21tZW50TGlrZSIsIkxpa2VDbGlja2VkU3ZnIiwiQ29tbWVudExpa2VOb3RpZmljYXRpb24iLCJWZXJ0aWNhbE1lbnVEb3RzU3ZnIiwiRGVsZXRlU3ZnIiwiUmVhZFN2ZyIsIm5vdGlmaWNhdGlvbkFjdGlvbkNyZWF0b3JzIiwiTWVudVRpbWVDb250YWluZXIiLCJUaW1lIiwiTWVudUljb25Db250YWluZXIiLCJBY3Rpb25NZW51IiwiQWN0aW9uTWVudUl0ZW0iLCJ0aW1lIiwiZXZlbnRUeXBlIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwidXBkYXRlTm90aWZpY2F0aW9uVG9SZWFkIiwiZGVsZXRlTm90aWZpY2F0aW9uIiwiZXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIiwicHJvcHMiLCJUb3BpY0xpa2UiLCJJdGVtIiwiVG9waWNMaWtlTm90aWZpY2F0aW9uIiwiSXRlbUNvbXBvbmVudCIsIlJpZ2h0Q29udGFpbmVyIiwidXNlRWZmZWN0IiwiVGFiIiwiVGhlbWVUYWIiLCJUYWJDb250YWluZXIiLCJyZWNzQWN0aW9uQ3JlYXRvcnMiLCJvcHBSZWNzQWN0aW9uQ3JlYXRvcnMiLCJSZWNvbW1lbmRhdGlvbnNMaXN0IiwiUmVjb21tZW5kYXRpb25zIiwia2V5Iiwic2V0S2V5IiwiZ2V0QWxsT3Bwb3NpbmdSZWNzIiwicmVjcyIsInJlY29tbWVuZGF0aW9ucyIsIm9wcG9zaW5nUmVjcyIsImsiLCJNYWluQ29udGVudCIsIkxpbmUiLCJ0b3BpY0FjdGlvbkNyZWF0b3JzIiwic3ViVG9waWNBY3Rpb25DcmVhdG9ycyIsIkhlYWRlckNvbnRhaW5lciIsIlBhcmVudENvbW1lbnQiLCJTdWJUb3BpY3NSb3V0ZXIiLCJTdWJUb3BpY3MiLCJ1cmwiLCJtYXRjaCIsImdldFRvcGljIiwidG9waWMiLCJ0b3BpY3MiLCJsaXN0IiwiZmluZCIsInQiLCJzdWJ0b3BpY3NFbXB0eSIsInN1YnRvcGljcyIsInVzZXJJZCIsInVzZVJlZiIsIkNvbGxhcHNlIiwiVXBBcnJvd1N2ZyIsIkRvd25BcnJvd1N2ZyIsIkNlbnNvck92ZXJsYXkiLCJBY3Rpb25Ub29sYmFyIiwiQ29tbWVudENvbnRhaW5lciIsIlVzZXJuYW1lIiwiQm9keSIsIkZvb3RlciIsIlRodW1iIiwiRXhwYW5kQnV0dG9uIiwiRXZpZGVuY2VTZWN0aW9uIiwiQ29udGVudCIsIlVzZXJJbmZvQ29udGFpbmVyIiwiT3V0ZXJDb250YWluZXIiLCJ1c2VTZXRJbm5lckh0bWwiLCJQYXJlbnRDb21tZW50Q29udGV4dCIsIlRoZW1lVG9vbHRpcCIsIlVOREVSX1JFVklFVyIsIkNvbW1lbnQiLCJjb21tZW50RGF0YSIsInJlcGxpZXMiLCJjb21tZW50UmVmIiwidXNlQ29udGV4dCIsImNvbnRlbnRSZWYiLCJyZXBvcnRTdGF0dXMiLCJ0b3hpY2l0eVN0YXR1cyIsInNob3VsZEJsdXIiLCJzZXRTaG91bGRCbHVyIiwiY29udGVudCIsIm1pbnMiLCJleHBhbmRJY29uIiwiY3JlYXRlZEJ5SWNvblNyYyIsImNyZWF0ZWRCeUV4cGVyaWVuY2UiLCJjcmVhdGVkQnkiLCJsZW5ndGgiLCJyZXBseSIsImlkeCIsIlN0cmluZyIsImNoaWxkcmVuIiwiY3JlYXRlQ29udGV4dCIsIkNvbW1lbnRDb2x1bW4iLCJudW1Db21tZW50cyIsImNvbW1lbnRzIiwiY29tbWVudFNlbnRpbWVudCIsImNvbG9yIiwidXNlQ2F0ZWdvcml6ZUNvbW1lbnRzIiwic3ViVG9waWNBY3Rpb25zIiwidG9waWNBY3Rpb25zIiwiQ29sdW1uQ29udGFpbmVyIiwiVGhyZWFkQ29udGFpbmVyIiwiQ29tbWVudFRocmVhZCIsImdldEFsbENvbW1lbnRSZXBsaWVzIiwic3RhdGUiLCJwb3NpdGl2ZUNvbW1lbnRzIiwiUE9TSVRJVkUiLCJuZXV0cmFsQ29tbWVudHMiLCJORVVUUkFMIiwibmVnYXRpdmVDb21tZW50cyIsIk5FR0FUSVZFIiwiYWxsQ29tbWVudHMiLCJhbGwiLCJjb25zb2xlIiwibG9nIiwidXNlU2VhcmNoUGFyYW1zIiwiVG9vbHRpcCIsIk92ZXJsYXlUcmlnZ2VyIiwiRW1iZWRlZFR3ZWV0IiwiVmlkZW9TaG93UGFnZSIsIkV4dGVybmFsQ29udGVudENhcmQiLCJVc2VyUHJvdmlkZWRNZWRpYUNhcmQiLCJVc2VySW5mb0hlYWRlciIsIkRlc2NyaXB0aW9uIiwiVG9waWNTdW1tYXJ5Q29udGFpbmVyIiwiU3R5bGVkTG9uZ0Rvd25BcnJvdyIsIlRvb2x0aXBDb21wb25lbnQiLCJ0ZXh0IiwidGl0bGUiLCJyZWZlcmVuY2UiLCJjdXJyZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJzdWJ0b3BpY0NvbnRlbnQiLCJzdWJ0b3BpYyIsInNob3dTdWJUb3BpYyIsImNvbW1vblByb3BzIiwic2hvd0xpbmtzIiwiZGVzY1JlZiIsInN1YnRvcGljUmVmIiwidG9waWNSZWYiLCJkZXNjcmlwdGlvbiIsImNvbW1vblByb3BzU3ViVG9waWMiLCJ0d2VldEh0bWwiLCJ5dFVybCIsInJlcGxhY2UiLCJ2b2RVcmwiLCJpbWFnZVVybCIsIndpZHRoIiwidGh1bWJJbWdVcmwiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJMb25nRG93bkFycm93IiwiTGlua3NDb250YWluZXIiLCJoZWlnaHQiLCJ0YXJnZXRDb21tZW50Iiwibm9kZSIsInVzZVNlc3Npb25UeXBlIiwiU3ViVG9waWNUaHJlYWQiLCJnZXRBbGxDb21tZW50cyIsInNlc3Npb25UeXBlIiwidXNlRGlzcGF0Y2giLCJiaW5kQWN0aW9uQ3JlYXRvcnMiLCJSaWdodFRyaWFuZ2xlQXJyb3dGaWxsU3ZnIiwidXNlR29Ub1N1YlRvcGljIiwiVGhlbWVCdXR0b24iLCJTdWJUb3BpY3NUYWJsZSIsInVpQWN0aW9uQ3JlYXRvcnMiLCJDUkVBVEVfU1VCX1RPUElDIiwiU3ViVG9waWNzTGlzdCIsImRpc3BhdGNoIiwib3Blbk1vZGFsIiwiZ2VuU3ViVG9waWMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJnb1RvU3ViVG9waWMiLCJSb3V0ZSIsIlJvdXRlcyIsIldhdnlCYWNrZ3JvdW5kIiwiU3ViVG9waWNzSXRlbSIsIlRhYmxlSGVhZGVyIiwiVGFibGUiLCJDb2xIZWFkZXIiLCJDb2xJdGVtIiwiUm93IiwiUm93SXRlbSIsInVzZUdvVG9Db21tZW50VGhyZWFkIiwiZ29Ub0NvbW1lbnRUaHJlYWQiLCJzdWJzdHJpbmciLCJzZW50aW1lbnRzIiwiU2V0IiwiY2F0ZWdvcml6ZWRDb21tZW50cyIsImZvckVhY2giLCJoYXMiLCJzZW50aW1lbnQiLCJwdXNoIiwiVHJpYnVuYWxOb3RpZmljYXRpb25zIiwidHJpYnVuYWxOb3RpZmljYXRpb25zTGlzdCIsIlRyaWJ1bmFsU2VsZWN0aW9uIiwiVXNlckNvbnRlbnRSZXBvcnRlZCIsIlRyaWJ1bmFsU2VsZWN0aW9uTm90aWZpY2F0aW9uIiwiVXNlckNvbnRlbnRSZXBvcnRlZE5vdGlmaWNhdGlvbiIsIkdhdmVsMiIsImNvbnRlbnRUeXBlIiwicmVwb3J0ZWRDb250ZW50SWQiLCJSZWNJdGVtIiwiUmVjTGlzdENvbnRhaW5lciIsInJlYyIsInVzZUdldExpbmtNZXRhRGF0YUVmZmVjdCIsInVzZU5hdmlnYXRlVG9QYWdlIiwiRGVzY3JpcHRpb25Db250YWluZXIiLCJUaXRsZSIsIlN1YlRpdGxlIiwiT0dJbWFnZSIsInN1YlRvcGljIiwibWV0YURhdGEiLCJjb250ZW50VXJsIiwiZXh0ZXJuYWxSZWNvbW1lbmRlZENvbnRlbnQiLCJuYXZpZ2F0ZVRvUGFnZSIsInJlZ0V4cCIsIm9nSW1hZ2UiLCJvZ1RpdGxlIiwib2dEZXNjcmlwdGlvbiIsIk9HVXJsIiwiT0dUaXRsZSIsIk9HRGVzY3JpcHRpb24iLCJ3aW5kb3ciLCJvcGVuIiwiSW5uZXJDb250YWluZXIiLCJTdHlsZWRTY2FsZXNTdmciLCJSZXBvcnRTdGF0c0NvbnRhaW5lciIsIlJlcG9ydFN0YXRJdGVtIiwiU3R5bGVkUGlsbGFyU3ZnIiwiVGltZXIiLCJyZXBvcnRBY3Rpb25zIiwidHJpYnVuYWxDb21tZW50c0FjdGlvbnMiLCJUcmlidW5hbENvbW1lbnRzIiwiVm90aW5nQm94IiwiVE9QSUMiLCJUb3BpY0l0ZW0iLCJUcmlidW5hbCIsInRyaWJ1bmFsQ29tbWVudHMiLCJyZXBvcnRTdGF0cyIsInJlcG9ydHMiLCJzZXRUaW1lTGVmdCIsImdldFJlcG9ydCIsImdldEFsbFRyaWJ1bmFsQ29tbWVudHNCYXRjaCIsImdldENvbW1lbnQiLCJ0aW1lciIsInNldEludGVydmFsIiwicmVwb3J0UGVyaW9kRW5kIiwiY2xlYXJUaW1lb3V0IiwidGltZXJDb21wb25lbnRzIiwia2V5cyIsImludGVydmFsIiwidm90aW5nVGltZVVwIiwiYyIsIm51bVRveGljUmVwb3J0cyIsIm51bVBlcnNvbmFsQXR0YWNrUmVwb3J0cyIsIm51bVNwYW1SZXBvcnRzIiwiU2NhbGVzU3ZnIiwiUGlsbGFyU3ZnIiwiVm90aW5nQ29udGFpbmVyIiwiVm90ZXNBZ2FpbnN0IiwiVm90ZXNGb3IiLCJNaWRkbGVTZWN0aW9uIiwiU3R5bGVkVGhlbWVUYWIiLCJEZWZlbmRhbnQiLCJSZXBvcnRlciIsIkp1cnkiLCJHZW5lcmFsIiwiVGhlbWVUYWJOZXciLCJDYXN0QmFsbG90U3ZnIiwiVE9QSUNfVk9URV9GT1JNIiwiaGFzQWxyZWFkeVZvdGVkIiwidm90ZUFnYWluc3QiLCJ2b3RlRm9yIiwidmVyZGljdCIsIm51bVZvdGVzRm9yIiwibnVtVm90ZXNBZ2FpbnN0IiwiVmlkZW9EZXNjcmlwdGlvbkNhcmQiLCJMaW5rU2VjdGlvbiIsInVzZVVwZGF0ZUxpa2VzIiwiVmlkZW9QbGF5ZXIiLCJzcmMiLCJ1cGRhdGVUb3BpY0xpa2VzIiwidXBkYXRlTGlrZXMiLCJzdW1tYXJ5IiwiZXZpZGVuY2VMaW5rcyIsImluY3JlbWVudCIsImxpa2VkIiwibW9kYWxUeXBlIiwibW9kYWxQcm9wcyIsInRvYXN0IiwiR0VUX0FMTF9SRUNTIiwiUmVjc0FwaVV0aWwiLCJlcnJvckZvcm1hdHRlciIsImdldEFsbFJlY3NBY3Rpb25DcmVhdG9yIiwidHlwZSIsInBheWxvYWQiLCJ0aGVuIiwicmVzIiwiZXJyb3IiLCJjbG9zZU1vZGFsIiwiQUREX1JFUE9SVCIsIlJlcG9ydHNBcGlVdGlsIiwiYWRkUmVwb3J0QWN0aW9uQ3JlYXRvciIsInJlcG9ydCIsIkFERF9TVUJfVE9QSUMiLCJHRVRfQUxMX1NVQl9UT1BJQ1MiLCJTdWJUb3BpY3NBcGlVdGlsIiwiZ2V0QWxsVG9waWNzQWN0aW9uQ3JlYXRvciIsImFkZFRvcGljQWN0aW9uQ3JlYXRvciIsInRvcGljRGF0YSJdLCJzb3VyY2VSb290IjoiIn0=