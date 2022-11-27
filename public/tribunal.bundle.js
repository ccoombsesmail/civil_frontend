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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFDTixPQUFPSCxRQUFRO0FBQ2pCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZHFEO0FBRS9DLElBQU1SLGFBQWEsR0FBRyxlQUFlO0FBQ3JDLElBQU1DLGtCQUFrQixHQUFHLG9CQUFvQjtBQUV0RCxJQUFNVyxnQkFBZ0IsR0FBRyxJQUFJQyxHQUFHLENBQUMsQ0FDL0IsQ0FBQ2IsYUFBYSxFQUFFTSwrQ0FBVyxDQUFDLEVBQzVCLENBQUNMLGtCQUFrQixFQUFFUSxtREFBZSxDQUFDLENBQ3RDLENBQUM7QUFFRixJQUFNSyxPQUFPLEdBQUcsU0FBVkEsT0FBTyxHQUEyQjtFQUFBLElBQXZCMU4sS0FBSyx1RUFBRyxDQUFDLENBQUM7RUFBQSxJQUFFbU4sTUFBTTtFQUNqQyxJQUFJLENBQUNLLGdCQUFnQixDQUFDL0gsR0FBRyxDQUFDMEgsTUFBTSxDQUFDakIsSUFBSSxDQUFDLEVBQUUsT0FBT2xNLEtBQUs7RUFDcEQsT0FBT3dOLGdCQUFnQixDQUFDeGQsR0FBRyxDQUFDbWQsTUFBTSxDQUFDakIsSUFBSSxDQUFDLENBQUNpQixNQUFNLEVBQUVuTixLQUFLLENBQUM7QUFDekQsQ0FBQztBQUVELGlFQUFlME4sT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL2NpdmlsLy4vc3JjL2FwaS92MS9yZWNzL3JlY3NfYXBpX3V0aWwuanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvYXBpL3YxL3N1YnRvcGljcy9zdWJ0b3BpY3NfYXBpX3V0aWwuanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvZ2VuZXJpYy9yZWdleC91dWlkLmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL2dlbmVyaWMvdGltZS9jYWxjdWxhdGVUaW1lTGVmdC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9Db21tb25Db21wb25lbnRzL0FjdGlvblRvb2xiYXJzL0NvbW1lbnRUb29sYmFyL0luZGV4LmpzeCIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9Db21tb25Db21wb25lbnRzL0FjdGlvblRvb2xiYXJzL0NvbW1lbnRUb29sYmFyL2NvbXBvbmVudHMvQ2l2aWxpdHlCdXR0b24vSW5kZXguanN4Iiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL0NvbW1vbkNvbXBvbmVudHMvQWN0aW9uVG9vbGJhcnMvQ29tbWVudFRvb2xiYXIvY29tcG9uZW50cy9DaXZpbGl0eUJ1dHRvbi9ob29rcy91c2VVcGRhdGVDb21tZW50Q2l2aWxpdHkuanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvQ29tbW9uQ29tcG9uZW50cy9BY3Rpb25Ub29sYmFycy9Db21tZW50VG9vbGJhci9jb21wb25lbnRzL0NvbW1lbnRCdXR0b24vSW5kZXguanN4Iiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL0NvbW1vbkNvbXBvbmVudHMvRm9ybS9SYW5nZVNsaWRlci9JbmRleC5qc3giLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvQ29tbW9uQ29tcG9uZW50cy9Gb3JtL1JhbmdlU2xpZGVyL1N0eWxlL2luZGV4LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL0NvbW1vbkNvbXBvbmVudHMvRm9ybS9SYW5nZVNsaWRlci9ob29rcy91c2VPblJhbmdlQ2hhbmdlLmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL01haW5Db250ZW50L2NvbXBvbmVudHMvTm90aWZpY2F0aW9uc1BhZ2UvSW5kZXguanN4Iiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL01haW5Db250ZW50L2NvbXBvbmVudHMvTm90aWZpY2F0aW9uc1BhZ2UvU3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvTWFpbkNvbnRlbnQvY29tcG9uZW50cy9Ob3RpZmljYXRpb25zUGFnZS9jb21wb25lbnRzL0NvbW1lbnRDaXZpbGl0eU5vdGlmaWNhdGlvbi9JbmRleC5qc3giLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvTWFpbkNvbnRlbnQvY29tcG9uZW50cy9Ob3RpZmljYXRpb25zUGFnZS9jb21wb25lbnRzL0ZvbGxvd05vdGlmaWNhdGlvbi9JbmRleC5qc3giLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvTWFpbkNvbnRlbnQvY29tcG9uZW50cy9Ob3RpZmljYXRpb25zUGFnZS9jb21wb25lbnRzL0xpa2VOb3RpZmljYXRpb24vSW5kZXguanN4Iiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL01haW5Db250ZW50L2NvbXBvbmVudHMvTm90aWZpY2F0aW9uc1BhZ2UvY29tcG9uZW50cy9NZW51VGltZS9JbmRleC5qc3giLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvTWFpbkNvbnRlbnQvY29tcG9uZW50cy9Ob3RpZmljYXRpb25zUGFnZS9jb21wb25lbnRzL01lbnVUaW1lL1N0eWxlL2luZGV4LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL01haW5Db250ZW50L2NvbXBvbmVudHMvTm90aWZpY2F0aW9uc1BhZ2UvY29tcG9uZW50cy9Ob3RpZmljYXRpb25JdGVtL0luZGV4LmpzeCIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9NYWluQ29udGVudC9jb21wb25lbnRzL05vdGlmaWNhdGlvbnNQYWdlL2NvbXBvbmVudHMvTm90aWZpY2F0aW9uSXRlbS9TdHlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9NYWluQ29udGVudC9jb21wb25lbnRzL05vdGlmaWNhdGlvbnNQYWdlL2NvbXBvbmVudHMvU3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvTWFpbkNvbnRlbnQvY29tcG9uZW50cy9Ob3RpZmljYXRpb25zUGFnZS9jb21wb25lbnRzL1RvcGljTGlrZU5vdGlmaWNhdGlvbi9JbmRleC5qc3giLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvTWFpbkNvbnRlbnQvY29tcG9uZW50cy9SaWdodFNlY3Rpb24vY29tcG9uZW50cy9SZWNvbW1lbmRhdGlvbnMvSW5kZXguanN4Iiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL01haW5Db250ZW50L2NvbXBvbmVudHMvUmlnaHRTZWN0aW9uL2NvbXBvbmVudHMvUmVjb21tZW5kYXRpb25zL1N0eWxlL2luZGV4LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL01haW5Db250ZW50L2NvbXBvbmVudHMvU3ViVG9waWNzUGFnZS9JbmRleC5qc3giLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvTWFpbkNvbnRlbnQvY29tcG9uZW50cy9TdWJUb3BpY3NQYWdlL1N0eWxlL2luZGV4LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL01haW5Db250ZW50L2NvbXBvbmVudHMvU3ViVG9waWNzUGFnZS9jb21wb25lbnRzL0NvbW1lbnQvSW5kZXguanN4Iiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL01haW5Db250ZW50L2NvbXBvbmVudHMvU3ViVG9waWNzUGFnZS9jb21wb25lbnRzL0NvbW1lbnQvU3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvTWFpbkNvbnRlbnQvY29tcG9uZW50cy9TdWJUb3BpY3NQYWdlL2NvbXBvbmVudHMvQ29tbWVudENvbHVtbi9JbmRleC5qc3giLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvTWFpbkNvbnRlbnQvY29tcG9uZW50cy9TdWJUb3BpY3NQYWdlL2NvbXBvbmVudHMvQ29tbWVudENvbHVtbi9TdHlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9NYWluQ29udGVudC9jb21wb25lbnRzL1N1YlRvcGljc1BhZ2UvY29tcG9uZW50cy9Db21tZW50VGhyZWFkL0luZGV4LmpzeCIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9NYWluQ29udGVudC9jb21wb25lbnRzL1N1YlRvcGljc1BhZ2UvY29tcG9uZW50cy9Db21tZW50VGhyZWFkL1N0eWxlL2luZGV4LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL01haW5Db250ZW50L2NvbXBvbmVudHMvU3ViVG9waWNzUGFnZS9jb21wb25lbnRzL0hlYWRlci9JbmRleC5qc3giLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvTWFpbkNvbnRlbnQvY29tcG9uZW50cy9TdWJUb3BpY3NQYWdlL2NvbXBvbmVudHMvSGVhZGVyL1N0eWxlL2luZGV4LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL01haW5Db250ZW50L2NvbXBvbmVudHMvU3ViVG9waWNzUGFnZS9jb21wb25lbnRzL1BhcmVudENvbW1lbnQvSW5kZXguanN4Iiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL01haW5Db250ZW50L2NvbXBvbmVudHMvU3ViVG9waWNzUGFnZS9jb21wb25lbnRzL1N1YlRvcGljVGhyZWFkL0luZGV4LmpzeCIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9NYWluQ29udGVudC9jb21wb25lbnRzL1N1YlRvcGljc1BhZ2UvY29tcG9uZW50cy9TdWJUb3BpY1RocmVhZC9TdHlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9NYWluQ29udGVudC9jb21wb25lbnRzL1N1YlRvcGljc1BhZ2UvY29tcG9uZW50cy9TdWJUb3BpY3NMaXN0L0luZGV4LmpzeCIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9NYWluQ29udGVudC9jb21wb25lbnRzL1N1YlRvcGljc1BhZ2UvY29tcG9uZW50cy9TdWJUb3BpY3NMaXN0L1N0eWxlL2luZGV4LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL01haW5Db250ZW50L2NvbXBvbmVudHMvU3ViVG9waWNzUGFnZS9jb21wb25lbnRzL1N1YlRvcGljc1JvdXRlci9JbmRleC5qc3giLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvTWFpbkNvbnRlbnQvY29tcG9uZW50cy9TdWJUb3BpY3NQYWdlL2NvbXBvbmVudHMvU3ViVG9waWNzVGFibGUvSW5kZXguanN4Iiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL01haW5Db250ZW50L2NvbXBvbmVudHMvU3ViVG9waWNzUGFnZS9jb21wb25lbnRzL1N1YlRvcGljc1RhYmxlL1N0eWxlL2luZGV4LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL01haW5Db250ZW50L2NvbXBvbmVudHMvU3ViVG9waWNzUGFnZS9jb21wb25lbnRzL1N1YlRvcGljc1RhYmxlL1N1YlRvcGljc0l0ZW0vSW5kZXguanN4Iiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL01haW5Db250ZW50L2NvbXBvbmVudHMvU3ViVG9waWNzUGFnZS9jb21wb25lbnRzL2hvb2tzL3VzZUNhdGVnb3JpemVDb21tZW50cy5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9NYWluQ29udGVudC9jb21wb25lbnRzL1N1YlRvcGljc1BhZ2UvaG9va3MvdXNlR29Ub1N1YlRvcGljLmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL01haW5Db250ZW50L2NvbXBvbmVudHMvVHJpYnVuYWxOb3RpZmljYXRpb25zUGFnZS9JbmRleC5qc3giLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvTWFpbkNvbnRlbnQvY29tcG9uZW50cy9UcmlidW5hbE5vdGlmaWNhdGlvbnNQYWdlL1N0eWxlL2luZGV4LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL01haW5Db250ZW50L2NvbXBvbmVudHMvVHJpYnVuYWxOb3RpZmljYXRpb25zUGFnZS9jb21wb25lbnRzL01lbnVUaW1lL0luZGV4LmpzeCIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9NYWluQ29udGVudC9jb21wb25lbnRzL1RyaWJ1bmFsTm90aWZpY2F0aW9uc1BhZ2UvY29tcG9uZW50cy9NZW51VGltZS9TdHlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9NYWluQ29udGVudC9jb21wb25lbnRzL1RyaWJ1bmFsTm90aWZpY2F0aW9uc1BhZ2UvY29tcG9uZW50cy9Ob3RpZmljYXRpb25JdGVtL0luZGV4LmpzeCIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9NYWluQ29udGVudC9jb21wb25lbnRzL1RyaWJ1bmFsTm90aWZpY2F0aW9uc1BhZ2UvY29tcG9uZW50cy9Ob3RpZmljYXRpb25JdGVtL1N0eWxlL2luZGV4LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL01haW5Db250ZW50L2NvbXBvbmVudHMvVHJpYnVuYWxOb3RpZmljYXRpb25zUGFnZS9jb21wb25lbnRzL1N0eWxlL2luZGV4LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL01haW5Db250ZW50L2NvbXBvbmVudHMvVHJpYnVuYWxOb3RpZmljYXRpb25zUGFnZS9jb21wb25lbnRzL1RyaWJ1bmFsU2VsZWN0aW9uTm90aWZpY2F0aW9uL0luZGV4LmpzeCIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9NYWluQ29udGVudC9jb21wb25lbnRzL1RyaWJ1bmFsTm90aWZpY2F0aW9uc1BhZ2UvY29tcG9uZW50cy9Vc2VyQ29udGVudFJlcG9ydGVkTm90aWZpY2F0aW9uL0luZGV4LmpzeCIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9SZWNvbW1lbmRhdGlvbnNMaXN0L0luZGV4LmpzeCIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9SZWNvbW1lbmRhdGlvbnNMaXN0L1N0eWxlL2luZGV4LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL1JlY29tbWVuZGF0aW9uc0xpc3QvY29tcG9uZW50cy9SZWNJdGVtL0luZGV4LmpzeCIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9SZWNvbW1lbmRhdGlvbnNMaXN0L2NvbXBvbmVudHMvUmVjSXRlbS9TdHlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9SZWNvbW1lbmRhdGlvbnNMaXN0L2NvbXBvbmVudHMvUmVjSXRlbS9ob29rcy91c2VOYXZpZ2F0ZVRvUGFnZS5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9UcmlidW5hbC9JbmRleC5qc3giLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvVHJpYnVuYWwvU3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvVHJpYnVuYWwvY29tcG9uZW50cy9UcmlidW5hbENvbW1lbnRzL0luZGV4LmpzeCIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9UcmlidW5hbC9jb21wb25lbnRzL1RyaWJ1bmFsQ29tbWVudHMvU3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvVHJpYnVuYWwvY29tcG9uZW50cy9UcmlidW5hbENvbW1lbnRzL2hvb2tzL3VzZUNhdGVnb3JpemVDb21tZW50cy5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9UcmlidW5hbC9jb21wb25lbnRzL1ZvdGluZ0JveC9JbmRleC5qc3giLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvVHJpYnVuYWwvY29tcG9uZW50cy9Wb3RpbmdCb3gvU3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvVmlkZW9TaG93UGFnZS9JbmRleC5qc3giLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvVmlkZW9TaG93UGFnZS9TdHlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9WaWRlb1Nob3dQYWdlL2hvb2tzL3VzZVVwZGF0ZUxpa2VzLmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL2hvb2tzL3JvdXRpbmcvdXNlR29Ub0NvbW1lbnRUaHJlYWQuanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvaG9va3MvdXNlT3Blbk1vZGFsV2l0aExvY2F0aW9uLmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3JlZHV4L2FjdGlvbnMvcmVjcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9yZWR1eC9hY3Rpb25zL3JlcG9ydHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcmVkdXgvYWN0aW9ucy9zdWJ0b3BpY3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcmVkdXgvcmVkdWNlcnMvc3VidG9waWNzL2luZGV4LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3JlZHV4L3JlZHVjZXJzL3N1YnRvcGljcy9zdWJUb3BpY3NSZWR1Y2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7IEJBQ0tFTkRfREVWIH0gZnJvbSAnLi4vLi4vZW5kcG9pbnRzL2VuZHBvaW50cydcblxuZXhwb3J0IGNvbnN0IGdldEFsbFJlY3MgPSAodGFyZ2V0Q29udGVudElkKSA9PiBheGlvcy5nZXQoYCR7QkFDS0VORF9ERVZ9L3JlY29tbWVuZGF0aW9ucz90YXJnZXRDb250ZW50SWQ9JHt0YXJnZXRDb250ZW50SWR9YClcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7IEJBQ0tFTkRfREVWIH0gZnJvbSAnLi4vLi4vZW5kcG9pbnRzL2VuZHBvaW50cydcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVN1YlRvcGljID0gKHN1YlRvcGljRGF0YSkgPT4gYXhpb3MucG9zdChgJHtCQUNLRU5EX0RFVn0vc3VidG9waWNzYCwgc3ViVG9waWNEYXRhKVxuXG5leHBvcnQgY29uc3QgZ2V0QWxsU3ViVG9waWNzID0gKHRvcGljSWQpID0+IGF4aW9zLmdldChgJHtCQUNLRU5EX0RFVn0vc3VidG9waWNzP3RvcGljSWQ9JHt0b3BpY0lkfWApXG5cbmV4cG9ydCBjb25zdCBnZXRTdWJUb3BpYyA9IChzdWJUb3BpY0lkKSA9PiBheGlvcy5nZXQoYCR7QkFDS0VORF9ERVZ9L3N1YnRvcGljcy8ke3N1YlRvcGljSWR9YClcbiIsImV4cG9ydCBjb25zdCB1dWlkUmVnRXggPSBuZXcgUmVnRXhwKC9cXGJbMC05YS1mXXs4fVxcYi1bMC05YS1mXXs0fS1bMC05YS1mXXs0fS1bMC05YS1mXXs0fS1cXGJbMC05YS1mXXsxMn1cXGIvZylcbiIsImV4cG9ydCBjb25zdCBjYWxjdWxhdGVUaW1lTGVmdCA9IChyZXBvcnRFbmRUaW1lKSA9PiB7XG4gIC8vIGNvbnN0IHllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKClcbiAgY29uc3QgZGlmZmVyZW5jZSA9ICtuZXcgRGF0ZShyZXBvcnRFbmRUaW1lKSAtICtuZXcgRGF0ZSgpXG5cbiAgbGV0IHRpbWVMZWZ0ID0ge31cblxuICBpZiAoZGlmZmVyZW5jZSA+IDApIHtcbiAgICB0aW1lTGVmdCA9IHtcbiAgICAgIGRheXM6IE1hdGguZmxvb3IoZGlmZmVyZW5jZSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSksXG4gICAgICBob3VyczogTWF0aC5mbG9vcigoZGlmZmVyZW5jZSAvICgxMDAwICogNjAgKiA2MCkpICUgMjQpLFxuICAgICAgbWludXRlczogTWF0aC5mbG9vcigoZGlmZmVyZW5jZSAvIDEwMDAgLyA2MCkgJSA2MCksXG4gICAgICBzZWNvbmRzOiBNYXRoLmZsb29yKChkaWZmZXJlbmNlIC8gMTAwMCkgJSA2MCksXG4gICAgfVxuICB9XG4gIHJldHVybiB0aW1lTGVmdFxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IG1lbW8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmltcG9ydCBVcFZvdGVCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9VcFZvdGVCdXR0b24vSW5kZXgnXG5pbXBvcnQgRG93blZvdGVCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9Eb3duVm90ZUJ1dHRvbi9JbmRleCdcbmltcG9ydCBDb21tZW50QnV0dG9uIGZyb20gJy4vY29tcG9uZW50cy9Db21tZW50QnV0dG9uL0luZGV4J1xuaW1wb3J0IENpdmlsaXR5QnV0dG9uIGZyb20gJy4vY29tcG9uZW50cy9DaXZpbGl0eUJ1dHRvbi9JbmRleCdcbmltcG9ydCBUcmlidW5hbEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL1RyaWJ1bmFsQnV0dG9uL0luZGV4J1xuXG5pbXBvcnQgeyBDb250YWluZXIsIExlZnQsIFJpZ2h0IH0gZnJvbSAnLi4vU3R5bGUvaW5kZXgnXG5pbXBvcnQgeyBDT01NRU5ULCBUUklCVU5BTF9DT01NRU5UIH0gZnJvbSAnLi4vLi4vLi4vLi4vZW51bXMvY29udGVudF90eXBlJ1xuXG5jb25zdCBDb21tZW50QWN0aW9uVG9vbGJhciA9ICh7XG4gIGxpa2VzLCBjb21tZW50LCB1c2VyLFxufSkgPT4ge1xuICBjb25zdCB7IHRvcGljSWQsIHN1YlRvcGljSWQsIC4uLnBhcmFtcyB9ID0gdXNlUGFyYW1zKClcbiAgY29uc3QgaXNUcmlidW5hbENvbW1lbnQgPSBjb21tZW50LmNvbW1lbnRUeXBlXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxMZWZ0PlxuICAgICAgICA8VXBWb3RlQnV0dG9uXG4gICAgICAgICAgY29udGVudD17Y29tbWVudH1cbiAgICAgICAgICB1c2VyPXt1c2VyfVxuICAgICAgICAgIGNvbnRlbnRUeXBlPXtpc1RyaWJ1bmFsQ29tbWVudCA/IFRSSUJVTkFMX0NPTU1FTlQgOiBDT01NRU5UfVxuICAgICAgICAvPlxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICB7bGlrZXMgfHwgMH1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8RG93blZvdGVCdXR0b25cbiAgICAgICAgICBjb250ZW50PXtjb21tZW50fVxuICAgICAgICAgIHVzZXI9e3VzZXJ9XG4gICAgICAgICAgY29udGVudFR5cGU9e2lzVHJpYnVuYWxDb21tZW50ID8gVFJJQlVOQUxfQ09NTUVOVCA6IENPTU1FTlR9XG4gICAgICAgIC8+XG4gICAgICAgIHsgcGFyYW1zWycqJ10gJiYgPENvbW1lbnRCdXR0b24gY29tbWVudD17Y29tbWVudH0gLz59XG4gICAgICAgIDxDaXZpbGl0eUJ1dHRvbiBjb21tZW50PXtjb21tZW50fSAvPlxuICAgICAgPC9MZWZ0PlxuICAgICAgPFJpZ2h0PlxuICAgICAgICA8VHJpYnVuYWxCdXR0b24gY29udGVudElkPXtjb21tZW50Py5pZH0gLz5cbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAge2xpa2VzIHx8IDB9XG4gICAgICAgICAgeycgJ31cbiAgICAgICAgICBsaWtlc1xuICAgICAgICA8L3NwYW4+XG4gICAgICA8L1JpZ2h0PlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW8oQ29tbWVudEFjdGlvblRvb2xiYXIpXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9jbGljay1ldmVudHMtaGF2ZS1rZXktZXZlbnRzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9uby1ub25pbnRlcmFjdGl2ZS1lbGVtZW50LWludGVyYWN0aW9ucyAqL1xuaW1wb3J0IFJlYWN0LCB7IG1lbW8sIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmFuZ2VTbGlkZXIgZnJvbSAnLi4vLi4vLi4vLi4vRm9ybS9SYW5nZVNsaWRlci9JbmRleCdcbmltcG9ydCBQb3BvdmVyU3RpY2tPbkhvdmVyIGZyb20gJy4uLy4uLy4uLy4uL1BvcG92ZXJTdGlja09uSG92ZXIvSW5kZXgnXG5pbXBvcnQgdXNlVXBkYXRlQ29tbWVudENpdmlsaXR5IGZyb20gJy4vaG9va3MvdXNlVXBkYXRlQ29tbWVudENpdmlsaXR5J1xuXG5jb25zdCBDaXZpbGl0eUJ1dHRvbiA9ICh7IGNvbW1lbnQgfSkgPT4ge1xuICBjb25zdCBbc2hvd1BvcG92ZXIsIHNldFNob3dQb3BvdmVyXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBvbkNsaWNrID0gKCkgPT4gc2V0U2hvd1BvcG92ZXIoKHByZXYpID0+ICFwcmV2KVxuICBjb25zdCB1cGRhdGVDb21tZW50Q2l2aWxpdHkgPSB1c2VVcGRhdGVDb21tZW50Q2l2aWxpdHkoY29tbWVudClcbiAgY29uc3QgSWNvbiA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGlmICghY29tbWVudCB8fCBjb21tZW50LmNpdmlsaXR5ID09PSAwKSByZXR1cm4gPGltZyBvbkNsaWNrPXtvbkNsaWNrfSBhbHQ9XCJcIiBzcmM9XCJodHRwczovL2NpdmlsLWRldi5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9hc3NldHMvaGFuZHNoYWtlLnBuZ1wiIC8+XG4gICAgaWYgKGNvbW1lbnQuY2l2aWxpdHkgPiAwKSByZXR1cm4gPGltZyBvbkNsaWNrPXtvbkNsaWNrfSBhbHQ9XCJcIiBzcmM9XCJodHRwczovL2NpdmlsLWRldi5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9hc3NldHMvaGFuZHNoYWtlLWNsaWNrZWQucG5nXCIgLz5cbiAgICByZXR1cm4gPGltZyBhbHQ9XCJcIiBvbkNsaWNrPXtvbkNsaWNrfSBzcmM9XCJodHRwczovL2NpdmlsLWRldi5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9hc3NldHMvbm8taGFuZHNoYWtlLWNsaWNrZWQucG5nXCIgLz5cbiAgfSwgW2NvbW1lbnRdKVxuICByZXR1cm4gKFxuICAgIDxQb3BvdmVyU3RpY2tPbkhvdmVyXG4gICAgICB0cmlnZ2VyPXtbJ2hvdmVyJywgJ2NsaWNrJ119XG4gICAgICBjb21wb25lbnQ9eyhcbiAgICAgICAgPFJhbmdlU2xpZGVyXG4gICAgICAgICAgY2l2aWxpdHk9e2NvbW1lbnQuY2l2aWxpdHl9XG4gICAgICAgICAgdXBkYXRlQ29tbWVudENpdmlsaXR5PXt1cGRhdGVDb21tZW50Q2l2aWxpdHl9XG4gICAgICAgIC8+XG4gICAgKX1cbiAgICAgIHBsYWNlbWVudD1cInRvcFwiXG4gICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHsgfX1cbiAgICAgIGRlbGF5PXsyMDB9XG4gICAgICBzaG93UG9wb3Zlcj17c2hvd1BvcG92ZXJ9XG4gICAgICBzZXRTaG93UG9wb3Zlcj17c2V0U2hvd1BvcG92ZXJ9XG4gICAgPlxuICAgICAge1xuICAgICAgICBJY29uXG4gICAgICB9XG4gICAgPC9Qb3BvdmVyU3RpY2tPbkhvdmVyPlxuXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVtbyhDaXZpbGl0eUJ1dHRvbilcbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IGNvbW1lbnRBY3Rpb25zIGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvY29tbWVudHMnXG5pbXBvcnQgdHJpYnVuYWxDb21tZW50QWN0aW9ucyBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9yZWR1eC9hY3Rpb25zL3RyaWJ1bmFsX2NvbW1lbnRzL2luZGV4J1xuaW1wb3J0IHVzZUJpbmREaXNwYXRjaCBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9ob29rcy9yZWR1eC91c2VCaW5kRGlzcGF0Y2gnXG5cbmV4cG9ydCBkZWZhdWx0IChjb21tZW50KSA9PiB7XG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZUxvY2F0aW9uKClcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKChzKSA9PiBzLnNlc3Npb24uY3VycmVudFVzZXIpXG4gIGNvbnN0IHtcbiAgICB1cGRhdGVDb21tZW50Q2l2aWxpdHksXG4gICAgdXBkYXRlVHJpYnVuYWxDb21tZW50Q2l2aWxpdHksXG4gIH0gPSB1c2VCaW5kRGlzcGF0Y2godHJpYnVuYWxDb21tZW50QWN0aW9ucywgY29tbWVudEFjdGlvbnMpXG5cbiAgcmV0dXJuIHVzZUNhbGxiYWNrKChlKSA9PiB7XG4gICAgY29uc3QgaXNUcmlidW5hbCA9IHBhdGhuYW1lLmluY2x1ZGVzKCd0cmlidW5hbCcpXG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIGdpdmluZ1VzZXJJZDogdXNlci5pZCxcbiAgICAgIHJlY2VpdmluZ1VzZXJJZDogY29tbWVudC5jcmVhdGVkQnlJZCxcbiAgICAgIGNvbW1lbnRJZDogY29tbWVudC5pZCxcbiAgICAgIHZhbHVlOiBOdW1iZXIoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKSxcbiAgICB9XG4gICAgcmV0dXJuIGlzVHJpYnVuYWwgPyB1cGRhdGVUcmlidW5hbENvbW1lbnRDaXZpbGl0eShkYXRhKSA6IHVwZGF0ZUNvbW1lbnRDaXZpbGl0eShkYXRhKVxuICB9LCBbY29tbWVudC5jaXZpbF0pXG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgbWVtbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJy4uLy4uLy4uLy4uL0ljb25CdXR0b24vSW5kZXgnXG5pbXBvcnQgeyBDb21tZW50U3ZnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc3Zncy9zdmdzJ1xuaW1wb3J0IHVzZU9wZW5Nb2RhbCBmcm9tICcuLi8uLi8uLi8uLi8uLi9ob29rcy91c2VPcGVuTW9kYWwnXG5pbXBvcnQgeyBSRVBMWSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL0FwcC9Nb2RhbC9JbmRleCdcblxuY29uc3QgQ29tbWVudEJ1dHRvbiA9ICh7IGNvbW1lbnQgfSkgPT4ge1xuICBjb25zdCB7IGNvbnRlbnRJZCB9ID0gdXNlUGFyYW1zKClcbiAgY29uc3Qgb3BlbkNvbW1lbnRNb2RhbCA9IHVzZU9wZW5Nb2RhbChSRVBMWSwge1xuICAgIHJlcGx5VHlwZTogY29tbWVudC5jb21tZW50VHlwZSA/ICdUUklCVU5BTF9DT01NRU5UX1JFUExZJyA6ICdDT01NRU5UX1JFUExZJyxcbiAgICBjb21tZW50SWQ6IGNvbW1lbnQuaWQsXG4gICAgcm9vdFBhcmVudENvbW1lbnRJZDogY29tbWVudC5yb290SWQgfHwgY29tbWVudC5pZCxcbiAgICBjb21tZW50VHlwZTogY29tbWVudC5jb21tZW50VHlwZSxcbiAgICB0cmlidW5hbENvbW1lbnRVbmRlclJldmlld0lkOiBjb250ZW50SWQsXG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8SWNvbkJ1dHRvbiBpY29uPXs8Q29tbWVudFN2ZyAvPn0gb25DbGljaz17b3BlbkNvbW1lbnRNb2RhbH0gLz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBtZW1vKENvbW1lbnRCdXR0b24pXG4iLCJpbXBvcnQgUmVhY3QsIHsgbWVtbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHVzZU9uUmFuZ2VDaGFuZ2UgZnJvbSAnLi9ob29rcy91c2VPblJhbmdlQ2hhbmdlJ1xuXG5pbXBvcnQgeyBSYW5nZSwgTWVzc2FnZSwgQ29udGFpbmVyIH0gZnJvbSAnLi9TdHlsZS9pbmRleCdcblxuY29uc3QgUmFuZ2VTbGlkZXIgPSAoeyBjaXZpbGl0eSwgdXBkYXRlQ29tbWVudENpdmlsaXR5IH0pID0+IHtcbiAgY29uc3QgeyBvblNsaWRlckNoYW5nZSwgc2xpZGVyVmFsdWUgfSA9IHVzZU9uUmFuZ2VDaGFuZ2UoKVxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgb25DbGljaz17KGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9PlxuICAgICAgPFJhbmdlIHNsaWRlclZhbHVlPXtzbGlkZXJWYWx1ZX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmFuZ2UtdmFsdWVcIiBpZD1cInJhbmdlVlwiIC8+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiBtaW49ey0zfSBtYXg9ezN9IHN0ZXA9ezAuMX0gZGVmYXVsdFZhbHVlPXtjaXZpbGl0eX0gb25DaGFuZ2U9e29uU2xpZGVyQ2hhbmdlfSBvbk1vdXNlVXA9e3VwZGF0ZUNvbW1lbnRDaXZpbGl0eX0gb25Ub3VjaEVuZD17dXBkYXRlQ29tbWVudENpdmlsaXR5fSAvPlxuICAgICAgPC9SYW5nZT5cbiAgICAgIDxNZXNzYWdlPlxuICAgICAgICB7c2xpZGVyVmFsdWUgPCAwICYmIGBSZW1vdmluZyAke3NsaWRlclZhbHVlfSBDaXZpbGl0eWB9XG4gICAgICAgIHtzbGlkZXJWYWx1ZSA+IDAgJiYgYEdpdmluZyArJHtzbGlkZXJWYWx1ZX0gQ2l2aWxpdHlgfVxuICAgICAgPC9NZXNzYWdlPlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW8oUmFuZ2VTbGlkZXIpXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby10YWJzICovXG5cbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAqL1xuICBoZWlnaHQ6IDIuNXZ3O1xuICB3aWR0aDogMTB2dztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmBcblxuZXhwb3J0IGNvbnN0IE1lc3NhZ2UgPSBzdHlsZWQoJ2RpdicpYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgYm90dG9tOiA1JTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XG5gXG5cbmV4cG9ydCBjb25zdCBSYW5nZSA9IHN0eWxlZCgnZGl2JylgXG4gIC8qIGJhY2tncm91bmQ6IHZhcigtLW0tcHJpbWFyeS1wZXJpcGhlcmFscy1jb2xvcik7ICovXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICAvKiBib3JkZXItcmFkaXVzOiA1cmVtOyAqL1xuICBib3gtc2hhZG93OiAycHggNXB4IDVweCByZ2JhKGJsYWNrLCAwLjMpO1xuXG4gIC5yYW5nZS12YWx1ZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTUwJTtcbiAgfVxuICAucmFuZ2UtdmFsdWUgc3BhbiB7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jbGVyay1wcmltYXJ5KTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIH1cbiAgLnJhbmdlLXZhbHVlIHNwYW46YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCB2YXIoLS1jbGVyay1wcmltYXJ5KTtcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIHRvcDogMTAwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gICAgbWFyZ2luLXRvcDogLTFweDtcbiAgfVxuXG4gIGlucHV0W3R5cGU9XCJyYW5nZVwiXSB7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIG1hcmdpbjogMjBweCAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIGlucHV0W3R5cGU9XCJyYW5nZVwiXTpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuICBpbnB1dFt0eXBlPVwicmFuZ2VcIl06Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDRweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYW5pbWF0ZTogMC4ycztcbiAgICBiYWNrZ3JvdW5kOiAkeyh7IHNsaWRlclZhbHVlIH0pID0+IHtcbiAgICBpZiAoc2xpZGVyVmFsdWUgPT09IC0xIHx8IHNsaWRlclZhbHVlID09PSAtMikgcmV0dXJuICd2YXIoLS1tLWRhbmdlci1jb2xvciknXG4gICAgaWYgKHNsaWRlclZhbHVlID09PSAtMykgcmV0dXJuICdyZWQnXG4gICAgaWYgKHNsaWRlclZhbHVlID09PSAxIHx8IHNsaWRlclZhbHVlID09PSAyKSByZXR1cm4gJ3ZhcigtLW0tcHJpbWFyeS1idG4tY29sb3IpJ1xuICAgIGlmIChzbGlkZXJWYWx1ZSA9PT0gMykgcmV0dXJuICdncmVlbidcbiAgICByZXR1cm4gJ3ZhcigtLWNsZXJrLXByaW1hcnkpJ1xuICB9fTtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICB9XG4gIGlucHV0W3R5cGU9XCJyYW5nZVwiXTo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAwIDAgNHB4IDAgcmdiYSgwLCAwLCAwLCAxKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIG1hcmdpbi10b3A6IC04cHg7XG4gIH1cbiAgaW5wdXRbdHlwZT1cInJhbmdlXCJdOmZvY3VzOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjayB7XG4gICAgYmFja2dyb3VuZDogJHsoeyBzbGlkZXJWYWx1ZSB9KSA9PiB7XG4gICAgaWYgKHNsaWRlclZhbHVlID09PSAtMSB8fCBzbGlkZXJWYWx1ZSA9PT0gLTIpIHJldHVybiAndmFyKC0tbS1kYW5nZXItY29sb3IpJ1xuICAgIGlmIChzbGlkZXJWYWx1ZSA9PT0gLTMpIHJldHVybiAncmVkJ1xuICAgIGlmIChzbGlkZXJWYWx1ZSA9PT0gMSB8fCBzbGlkZXJWYWx1ZSA9PT0gMikgcmV0dXJuICd2YXIoLS1tLXByaW1hcnktYnRuLWNvbG9yKSdcbiAgICBpZiAoc2xpZGVyVmFsdWUgPT09IDMpIHJldHVybiAnZ3JlZW4nXG4gICAgcmV0dXJuICd2YXIoLS1jbGVyay1wcmltYXJ5KSdcbiAgfX07XG4gIH1cbmBcbiIsIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IFtzbGlkZXJWYWx1ZSwgc2V0U2xpZGVyVmFsdWVdID0gdXNlU3RhdGUoMClcbiAgY29uc3Qgb25TbGlkZXJDaGFuZ2UgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xuICAgIGNvbnN0IHJhbmdlID0gZS5jdXJyZW50VGFyZ2V0XG4gICAgY29uc3QgcmFuZ2VWID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhbmdlVicpXG4gICAgY29uc3QgbmV3VmFsdWUgPSBOdW1iZXIoKChyYW5nZS52YWx1ZSAtIHJhbmdlLm1pbikgKiAxMDApIC8gKHJhbmdlLm1heCAtIHJhbmdlLm1pbikpXG4gICAgY29uc3QgbmV3UG9zaXRpb24gPSAxMCAtIChuZXdWYWx1ZSAqIDAuMilcbiAgICByYW5nZVYuaW5uZXJIVE1MID0gYDxzcGFuPiR7cmFuZ2UudmFsdWV9PC9zcGFuPmBcbiAgICByYW5nZVYuc3R5bGUubGVmdCA9IGBjYWxjKCR7bmV3VmFsdWV9JSArICgke25ld1Bvc2l0aW9ufXB4KSlgXG4gICAgc2V0U2xpZGVyVmFsdWUoTnVtYmVyKHJhbmdlLnZhbHVlKSlcbiAgfSwgW10pXG4gIHJldHVybiB7IG9uU2xpZGVyQ2hhbmdlLCBzbGlkZXJWYWx1ZSB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IFVzZXJJbmZvcm1hdGlvbkRpc3BsYXkgZnJvbSAnLi4vLi4vLi4vVXNlckluZm9ybWF0aW9uRGlzcGxheS9JbmRleCdcbmltcG9ydCB7XG4gIE1pZGRsZSwgTGVmdCwgUmlnaHQsIEhvbWVQYWdlR3JpZCxcbn0gZnJvbSAnLi4vLi4vU3R5bGUnXG5pbXBvcnQgTm90aWZpY2F0aW9uSXRlbSBmcm9tICcuL2NvbXBvbmVudHMvTm90aWZpY2F0aW9uSXRlbS9JbmRleCdcbmltcG9ydCB7XG4gIEJvcmRlckNvbnRhaW5lciwgTm90aWZpY2F0aW9uTGlzdCwgQ29udGFpbmVyLCBIZWFkZXIsXG59IGZyb20gJy4vU3R5bGUnXG5cbmNvbnN0IE5vdGlmaWNhdGlvbnMgPSAoKSA9PiB7XG4gIGNvbnN0IG5vdGlmaWNhdGlvbnMgPSB1c2VTZWxlY3RvcigocykgPT4gcy5ub3RpZmljYXRpb25zLnVzZXJOb3RpZmljYXRpb25zTGlzdClcbiAgcmV0dXJuIChcbiAgICA8SG9tZVBhZ2VHcmlkPlxuICAgICAgPExlZnQ+XG4gICAgICAgIDxVc2VySW5mb3JtYXRpb25EaXNwbGF5IC8+XG4gICAgICA8L0xlZnQ+XG4gICAgICA8TWlkZGxlPlxuXG4gICAgICAgIDxDb250YWluZXIgaWQ9XCJub3RpZmljYXRpb25zLWNvbnRhaW5lclwiPlxuXG4gICAgICAgICAgPEJvcmRlckNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxIZWFkZXI+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIFJlY2VudCBOb3RpZmljYXRpb25zXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvSGVhZGVyPlxuICAgICAgICAgICAgPE5vdGlmaWNhdGlvbkxpc3Q+XG4gICAgICAgICAgICAgIHtub3RpZmljYXRpb25zLm1hcCgobm90aWZpY2F0aW9uKSA9PiAoXG4gICAgICAgICAgICAgICAgPE5vdGlmaWNhdGlvbkl0ZW0ga2V5PXtub3RpZmljYXRpb24uaWR9IG5vdGlmaWNhdGlvbj17bm90aWZpY2F0aW9ufSAvPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvTm90aWZpY2F0aW9uTGlzdD5cbiAgICAgICAgICA8L0JvcmRlckNvbnRhaW5lcj5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L01pZGRsZT5cbiAgICAgIDxSaWdodD5cbiAgICAgICAgPHNwYW4+Ljwvc3Bhbj5cbiAgICAgIDwvUmlnaHQ+XG4gICAgPC9Ib21lUGFnZUdyaWQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTm90aWZpY2F0aW9uc1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IEJvcmRlckNvbnRhaW5lciA9IHN0eWxlZCgnZGl2JylgXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIHotaW5kZXg6IDk5OTk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0tbmF2LXNpemUpKTtcblxuYFxuXG5leHBvcnQgY29uc3QgTm90aWZpY2F0aW9uTGlzdCA9IHN0eWxlZCgndWwnKWBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBwYWRkaW5nOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMzB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YwRjJGNTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cbmBcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZCgnZGl2JylgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuYFxuXG5leHBvcnQgY29uc3QgSGVhZGVyID0gc3R5bGVkKCdoZWFkZXInKWAgXG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JheTtcbiAgcGFkZGluZzogMnZ3IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIHAge1xuICAgIG1hcmdpbjogMCAxdnc7XG4gICAgZm9udC1zaXplOiAxLjF2dztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbmBcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpbmssIHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IE1lbnVUaW1lIH0gZnJvbSAnLi4vTWVudVRpbWUvSW5kZXgnXG5pbXBvcnQgVXNlcm5hbWVBbmRUYWcgZnJvbSAnLi4vLi4vLi4vLi4vLi4vQ29tbW9uQ29tcG9uZW50cy9Vc2VybmFtZUFuZFRhZy9JbmRleCdcbmltcG9ydCB7IGdldFRpbWVTaW5jZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2dlbmVyaWMvc3RyaW5nL2RhdGVGb3JtYXR0ZXInXG5pbXBvcnQgeyBMZWZ0Q29udGFpbmVyLCBNaWRkbGVDb250YWluZXIsIFByb2ZpbGVJY29uIH0gZnJvbSAnLi4vU3R5bGUnXG5cbmltcG9ydCB7IENvbW1lbnRDaXZpbGl0eUdpdmVuIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vZW51bXMvbm90aWZpY2F0aW9uX3R5cGVzJ1xuXG5jb25zdCBDb21tZW50Q2l2aWxpdHlOb3RpZmNhdGlvbiA9ICh7IG5vdGlmaWNhdGlvbiB9KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBnaXZpbmdVc2VySWQsIGdpdmluZ1VzZXJVc2VybmFtZSwgZ2l2aW5nVXNlckljb25TcmMsXG4gICAgZ2l2aW5nVXNlclRhZywgdG9waWNJZCwgc3VidG9waWNJZCwgY29tbWVudElkLCBjcmVhdGVkQXQsIG9sZCwgbmV3OiBuZXdWYWwsIGlkLFxuICB9ID0gbm90aWZpY2F0aW9uXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKVxuICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICB9XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxMZWZ0Q29udGFpbmVyIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKGAvdXNlci8ke2dpdmluZ1VzZXJJZH1gKX0+XG4gICAgICAgIDxQcm9maWxlSWNvbiBzcmM9e2dpdmluZ1VzZXJJY29uU3JjfSAvPlxuICAgICAgICA8VXNlcm5hbWVBbmRUYWdcbiAgICAgICAgICB1c2VySWQ9e2dpdmluZ1VzZXJJZH1cbiAgICAgICAgICB1c2VybmFtZURpc3BsYXk9e2dpdmluZ1VzZXJVc2VybmFtZX1cbiAgICAgICAgICB1c2VyVGFnPXtnaXZpbmdVc2VyVGFnfVxuICAgICAgICAvPlxuICAgICAgPC9MZWZ0Q29udGFpbmVyPlxuICAgICAgPE1pZGRsZUNvbnRhaW5lcj5cbiAgICAgICAge1xuICAgICAgICAgIG5vdGlmaWNhdGlvbi5uZXcgPCAwID8gKFxuICAgICAgICAgICAgPGltZyBhbHQ9XCJcIiBzcmM9XCJodHRwczovL2NpdmlsLWRldi5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9hc3NldHMvbm8taGFuZHNoYWtlLWNsaWNrZWQucG5nXCIgLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGltZyBhbHQ9XCJcIiBzcmM9XCJodHRwczovL2NpdmlsLWRldi5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9hc3NldHMvaGFuZHNoYWtlLWNsaWNrZWQucG5nXCIgLz5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgPGgzPlxuICAgICAgICAgIDxiPlxuICAgICAgICAgICAge2dpdmluZ1VzZXJVc2VybmFtZX1cbiAgICAgICAgICA8L2I+XG4gICAgICAgICAgeycgJ31cbiAgICAgICAgICBVcGRhdGVkIENpdmlsaXR5IEdpdmVuIEZvciBZb3VyXG4gICAgICAgICAgeycgJ31cbiAgICAgICAgICA8TGluayBvbkNsaWNrPXtoYW5kbGVDbGlja30gdG89e2AvaG9tZS90b3BpY3MvJHt0b3BpY0lkfS9zdWJ0b3BpY3MvJHtzdWJ0b3BpY0lkfS9jb21tZW50cy8ke2NvbW1lbnRJZH1gfT5cbiAgICAgICAgICAgIENvbW1lbnRcbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgeycgJ31cbiAgICAgICAgICB7YGZyb20gJHtvbGQudG9GaXhlZCgyKX0gdG8gJHtuZXdWYWwudG9GaXhlZCgyKX0gQ2l2aWxpdHkgJHtvbGQgPCBuZXdWYWwgPyAn8J+YiicgOiAn4pi577iPJ31gfVxuICAgICAgICA8L2gzPlxuICAgICAgPC9NaWRkbGVDb250YWluZXI+XG4gICAgICA8TWVudVRpbWVcbiAgICAgICAgdGltZT17Z2V0VGltZVNpbmNlKGNyZWF0ZWRBdCl9XG4gICAgICAgIGlkPXtpZH1cbiAgICAgICAgZXZlbnRUeXBlPXtDb21tZW50Q2l2aWxpdHlHaXZlbn1cbiAgICAgIC8+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudENpdmlsaXR5Tm90aWZjYXRpb25cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpbmssIHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IE1lbnVUaW1lIH0gZnJvbSAnLi4vTWVudVRpbWUvSW5kZXgnXG5pbXBvcnQgeyBnZXRUaW1lU2luY2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9nZW5lcmljL3N0cmluZy9kYXRlRm9ybWF0dGVyJ1xuaW1wb3J0IHsgTWlkZGxlQ29udGFpbmVyLCBMZWZ0Q29udGFpbmVyLCBQcm9maWxlSWNvbiB9IGZyb20gJy4uL1N0eWxlJ1xuaW1wb3J0IFVzZXJuYW1lQW5kVGFnIGZyb20gJy4uLy4uLy4uLy4uLy4uL0NvbW1vbkNvbXBvbmVudHMvVXNlcm5hbWVBbmRUYWcvSW5kZXgnXG5cbmltcG9ydCB7IE5ld0ZvbGxvd2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vZW51bXMvbm90aWZpY2F0aW9uX3R5cGVzJ1xuaW1wb3J0IHsgQWRkRnJpZW5kU3ZnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc3Zncy9zdmdzJ1xuXG5jb25zdCBGb2xsb3dOb3RpZmNhdGlvbiA9ICh7IG5vdGlmaWNhdGlvbiB9KSA9PiB7XG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKVxuICBjb25zdCB7XG4gICAgZ2l2aW5nVXNlcklkLCBnaXZpbmdVc2VyVXNlcm5hbWUsIGdpdmluZ1VzZXJJY29uU3JjLCBnaXZpbmdVc2VyVGFnLCBjcmVhdGVkQXQsIGlkLFxuICB9ID0gbm90aWZpY2F0aW9uXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxMZWZ0Q29udGFpbmVyIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKGAvdXNlci8ke2dpdmluZ1VzZXJJZH1gKX0+XG4gICAgICAgIDxQcm9maWxlSWNvbiBzcmM9e2dpdmluZ1VzZXJJY29uU3JjfSAvPlxuICAgICAgICA8VXNlcm5hbWVBbmRUYWdcbiAgICAgICAgICB1c2VySWQ9e2dpdmluZ1VzZXJJZH1cbiAgICAgICAgICB1c2VybmFtZURpc3BsYXk9e2dpdmluZ1VzZXJVc2VybmFtZX1cbiAgICAgICAgICB1c2VyVGFnPXtnaXZpbmdVc2VyVGFnfVxuICAgICAgICAvPlxuICAgICAgPC9MZWZ0Q29udGFpbmVyPlxuICAgICAgPE1pZGRsZUNvbnRhaW5lcj5cbiAgICAgICAgPEFkZEZyaWVuZFN2ZyBzaXplPVwiMTV2aFwiIC8+XG4gICAgICAgIDxoMz5cbiAgICAgICAgICB7JyAnfVxuICAgICAgICAgIDxMaW5rIHRvPXtgL3VzZXIvJHtnaXZpbmdVc2VySWR9YH0+XG4gICAgICAgICAgICA8Yj5cbiAgICAgICAgICAgICAge2dpdmluZ1VzZXJVc2VybmFtZX1cbiAgICAgICAgICAgIDwvYj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgeycgJ31cbiAgICAgICAgICBGb2xsb3dlZCBZb3VcbiAgICAgICAgPC9oMz5cblxuICAgICAgPC9NaWRkbGVDb250YWluZXI+XG4gICAgICA8TWVudVRpbWVcbiAgICAgICAgdGltZT17Z2V0VGltZVNpbmNlKGNyZWF0ZWRBdCl9XG4gICAgICAgIGlkPXtpZH1cbiAgICAgICAgZXZlbnRUeXBlPXtOZXdGb2xsb3dlcn1cbiAgICAgIC8+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9sbG93Tm90aWZjYXRpb25cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpbmssIHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IE1lbnVUaW1lIH0gZnJvbSAnLi4vTWVudVRpbWUvSW5kZXgnXG5pbXBvcnQgeyBnZXRUaW1lU2luY2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9nZW5lcmljL3N0cmluZy9kYXRlRm9ybWF0dGVyJ1xuaW1wb3J0IFVzZXJuYW1lQW5kVGFnIGZyb20gJy4uLy4uLy4uLy4uLy4uL0NvbW1vbkNvbXBvbmVudHMvVXNlcm5hbWVBbmRUYWcvSW5kZXgnXG5pbXBvcnQgeyBMZWZ0Q29udGFpbmVyLCBNaWRkbGVDb250YWluZXIsIFByb2ZpbGVJY29uIH0gZnJvbSAnLi4vU3R5bGUnXG5cbmltcG9ydCB7IENvbW1lbnRMaWtlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vZW51bXMvbm90aWZpY2F0aW9uX3R5cGVzJ1xuaW1wb3J0IHsgTGlrZUNsaWNrZWRTdmcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9zdmdzL3N2Z3MnXG5cbmNvbnN0IENvbW1lbnRMaWtlTm90aWZpY2F0aW9uID0gKHsgbm90aWZpY2F0aW9uIH0pID0+IHtcbiAgY29uc3Qge1xuICAgIGdpdmluZ1VzZXJJZCwgZ2l2aW5nVXNlclVzZXJuYW1lLCBnaXZpbmdVc2VySWNvblNyYyxcbiAgICBnaXZpbmdVc2VyVGFnLCB0b3BpY0lkLCBzdWJ0b3BpY0lkLCBjb21tZW50SWQsXG4gIH0gPSBub3RpZmljYXRpb25cbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPExlZnRDb250YWluZXIgb25DbGljaz17KCkgPT4gbmF2aWdhdGUoYC91c2VyLyR7Z2l2aW5nVXNlcklkfWApfT5cbiAgICAgICAgPFByb2ZpbGVJY29uIHNyYz17Z2l2aW5nVXNlckljb25TcmN9IC8+XG4gICAgICAgIDxVc2VybmFtZUFuZFRhZ1xuICAgICAgICAgIHVzZXJJZD17Z2l2aW5nVXNlcklkfVxuICAgICAgICAgIHVzZXJuYW1lRGlzcGxheT17Z2l2aW5nVXNlclVzZXJuYW1lfVxuICAgICAgICAgIHVzZXJUYWc9e2dpdmluZ1VzZXJUYWd9XG4gICAgICAgIC8+XG4gICAgICA8L0xlZnRDb250YWluZXI+XG4gICAgICA8TWlkZGxlQ29udGFpbmVyPlxuICAgICAgICA8aDM+XG4gICAgICAgICAgPGI+XG4gICAgICAgICAgICB7Z2l2aW5nVXNlclVzZXJuYW1lfVxuICAgICAgICAgIDwvYj5cbiAgICAgICAgICB7JyAnfVxuICAgICAgICAgIExpa2VkIFlvdXJcbiAgICAgICAgICB7JyAnfVxuICAgICAgICAgIDxMaW5rIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSB0bz17YC9ob21lL3RvcGljcy8ke3RvcGljSWR9L3N1YnRvcGljcy8ke3N1YnRvcGljSWR9L2NvbW1lbnRzLyR7Y29tbWVudElkfWB9PlxuICAgICAgICAgICAgQ29tbWVudCFcbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgeycgJ31cbiAgICAgICAgICDwn5iKXG4gICAgICAgIDwvaDM+XG4gICAgICAgIDxMaWtlQ2xpY2tlZFN2ZyAvPlxuXG4gICAgICA8L01pZGRsZUNvbnRhaW5lcj5cbiAgICAgIDxNZW51VGltZVxuICAgICAgICB0aW1lPXtnZXRUaW1lU2luY2Uobm90aWZpY2F0aW9uLmNyZWF0ZWRBdCl9XG4gICAgICAgIGlkPXtub3RpZmljYXRpb24uaWR9XG4gICAgICAgIGV2ZW50VHlwZT17Q29tbWVudExpa2V9XG4gICAgICAvPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRMaWtlTm90aWZpY2F0aW9uXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIFZlcnRpY2FsTWVudURvdHNTdmcsIERlbGV0ZVN2ZywgUmVhZFN2Zyxcbn0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc3Zncy9zdmdzJ1xuaW1wb3J0IG5vdGlmaWNhdGlvbkFjdGlvbkNyZWF0b3JzIGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvbm90aWZpY2F0aW9ucy9pbmRleCdcbmltcG9ydCB1c2VCaW5kRGlzcGF0Y2ggZnJvbSAnLi4vLi4vLi4vLi4vLi4vaG9va3MvcmVkdXgvdXNlQmluZERpc3BhdGNoJ1xuaW1wb3J0IHtcbiAgTWVudVRpbWVDb250YWluZXIsIFRpbWUsIE1lbnVJY29uQ29udGFpbmVyLCBBY3Rpb25NZW51LCBBY3Rpb25NZW51SXRlbSxcbn0gZnJvbSAnLi9TdHlsZS9pbmRleCdcblxuZXhwb3J0IGNvbnN0IE1lbnVUaW1lID0gKHsgdGltZSwgaWQsIGV2ZW50VHlwZSB9KSA9PiB7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3Qge1xuICAgIHVwZGF0ZU5vdGlmaWNhdGlvblRvUmVhZCxcbiAgICBkZWxldGVOb3RpZmljYXRpb24sXG4gIH0gPSB1c2VCaW5kRGlzcGF0Y2gobm90aWZpY2F0aW9uQWN0aW9uQ3JlYXRvcnMpXG5cbiAgcmV0dXJuIChcbiAgICA8TWVudVRpbWVDb250YWluZXI+XG4gICAgICA8TWVudUljb25Db250YWluZXIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICBzZXRJc09wZW4oKHByZXYpID0+ICFwcmV2KVxuICAgICAgICBjb25zdCBldmVudExpc3RlbmVyID0gKCkgPT4ge1xuICAgICAgICAgIHNldElzT3BlbigocHJldikgPT4gIXByZXYpXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGlmaWNhdGlvbnMtY29udGFpbmVyJykucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudExpc3RlbmVyKVxuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGlmaWNhdGlvbnMtY29udGFpbmVyJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudExpc3RlbmVyKVxuICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPFZlcnRpY2FsTWVudURvdHNTdmcgLz5cbiAgICAgICAgPEFjdGlvbk1lbnUgaXNPcGVuPXtpc09wZW59IG9uQ2xpY2s9eyhlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfT5cbiAgICAgICAgICA8QWN0aW9uTWVudUl0ZW0gb25DbGljaz17KCkgPT4gdXBkYXRlTm90aWZpY2F0aW9uVG9SZWFkKGV2ZW50VHlwZSwgaWQpfT5cbiAgICAgICAgICAgIDxSZWFkU3ZnIC8+XG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgTWFyayBBcyBSZWFkXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9BY3Rpb25NZW51SXRlbT5cbiAgICAgICAgICA8QWN0aW9uTWVudUl0ZW0gb25DbGljaz17KCkgPT4gZGVsZXRlTm90aWZpY2F0aW9uKGV2ZW50VHlwZSwgaWQpfT5cbiAgICAgICAgICAgIDxEZWxldGVTdmcgLz5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICBEZWxldGUgTm90aWZpY2F0aW9uXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9BY3Rpb25NZW51SXRlbT5cbiAgICAgICAgPC9BY3Rpb25NZW51PlxuICAgICAgPC9NZW51SWNvbkNvbnRhaW5lcj5cbiAgICAgIDxUaW1lPnt0aW1lfTwvVGltZT5cbiAgICA8L01lbnVUaW1lQ29udGFpbmVyPlxuICApXG59XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgTWVudVRpbWVDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpYCBcbiAgei1pbmRleDogOTk5OTk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIHBhZGRpbmc6IDVweCAwO1xuICB3aWR0aDogOCU7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgbGlnaHRncmF5O1xuICBib3JkZXItY29sb3I6IHJnYmEoMjAwLDIwMCwyMDAsMC4yNSk7XG5cbmBcblxuZXhwb3J0IGNvbnN0IFRpbWUgPSBzdHlsZWQoJ3NwYW4nKWBcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtc2l6ZTogMXZ3O1xuICBwYWRkaW5nOiAwIDEwcHg7XG5gXG5leHBvcnQgY29uc3QgTWVudUljb25Db250YWluZXIgPSBzdHlsZWQoJ2RpdicpYCBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IC4xdnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogIzJjZGQ5YjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZjdmMDtcbiAgYm9yZGVyLWNvbG9yOiAjZDhmN2ViO1xuICB0cmFuc2l0aW9uOiBhbGwgMXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgOmhvdmVyIHtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC44NSk7XG4gIH1cblxuYFxuXG5leHBvcnQgY29uc3QgQWN0aW9uTWVudSA9IHN0eWxlZCgndWwnKWBcbiAgei1pbmRleDogOTk5OTk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlcjogLjVweCBzb2xpZCBsaWdodGdyYXk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyMDAsMjAwLDIwMCwwLjI1KSA7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01NSUsIDU1JSkgO1xuICBkaXNwbGF5OiAkeyhwcm9wcykgPT4gKHByb3BzLmlzT3BlbiA/ICdibG9jaycgOiAnbm9uZScpfSA7XG4gIHdpZHRoOiAxMHZ3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCByZ2IoNjAgNjAgNjAgLyAxMCUpO1xuICBib3JkZXItcmFkaXVzOiAgLjVlbTtcbiAgbWFyZ2luOiAwO1xuXG5gXG5cbmV4cG9ydCBjb25zdCBBY3Rpb25NZW51SXRlbSA9IHN0eWxlZCgnbGknKWBcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiBibGFjaztcbiAgdHJhbnNpdGlvbjogbm9uZTtcbiAgOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tLWJ0bi1ob3Zlci1jb2xvcik7XG5cbiAgfVxuXG4gIHNwYW4ge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAuNjV2dyAhaW1wb3J0YW50O1xuICB9XG5cbmBcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbi8vIGltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7XG4gIE5ld0ZvbGxvd2VyLCBDb21tZW50Q2l2aWxpdHlHaXZlbiwgQ29tbWVudExpa2UsIFRvcGljTGlrZSxcbn0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vZW51bXMvbm90aWZpY2F0aW9uX3R5cGVzJ1xuaW1wb3J0IEZvbGxvd05vdGlmY2F0aW9uIGZyb20gJy4uL0ZvbGxvd05vdGlmaWNhdGlvbi9JbmRleCdcbmltcG9ydCBDb21tZW50Q2l2aWxpdHlOb3RpZmNhdGlvbiBmcm9tICcuLi9Db21tZW50Q2l2aWxpdHlOb3RpZmljYXRpb24vSW5kZXgnXG5pbXBvcnQge1xuICBJdGVtLFxufSBmcm9tICcuL1N0eWxlJ1xuaW1wb3J0IENvbW1lbnRMaWtlTm90aWZpY2F0aW9uIGZyb20gJy4uL0xpa2VOb3RpZmljYXRpb24vSW5kZXgnXG5pbXBvcnQgVG9waWNMaWtlTm90aWZpY2F0aW9uIGZyb20gJy4uL1RvcGljTGlrZU5vdGlmaWNhdGlvbi9JbmRleCdcblxuY29uc3QgTm90aWZpY2F0aW9uSXRlbSA9ICh7IG5vdGlmaWNhdGlvbiB9KSA9PiB7XG4gIC8vIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKVxuICBsZXQgSXRlbUNvbXBvbmVudFxuICBsZXQgb25DbGlja1xuICBzd2l0Y2ggKG5vdGlmaWNhdGlvbi5ldmVudFR5cGUpIHtcbiAgICBjYXNlIE5ld0ZvbGxvd2VyOlxuICAgICAgLy8gb25DbGljayA9ICgpID0+IG5hdmlnYXRlKGAvdXNlci8ke25vdGlmaWNhdGlvbi5mb2xsb3dlclVzZXJJZH1gKVxuICAgICAgSXRlbUNvbXBvbmVudCA9IEZvbGxvd05vdGlmY2F0aW9uXG4gICAgICBicmVha1xuICAgIGNhc2UgQ29tbWVudENpdmlsaXR5R2l2ZW46XG4gICAgICAvLyBvbkNsaWNrID0gKCkgPT4gbmF2aWdhdGUoYC91c2VyLyR7bm90aWZpY2F0aW9uLmdpdmluZ1VzZXJJZH1gKVxuICAgICAgSXRlbUNvbXBvbmVudCA9IENvbW1lbnRDaXZpbGl0eU5vdGlmY2F0aW9uXG4gICAgICBicmVha1xuICAgIGNhc2UgQ29tbWVudExpa2U6XG4gICAgICAvLyBvbkNsaWNrID0gKCkgPT4gbmF2aWdhdGUoYC91c2VyLyR7bm90aWZpY2F0aW9uLmdpdmluZ1VzZXJJZH1gKVxuICAgICAgSXRlbUNvbXBvbmVudCA9IENvbW1lbnRMaWtlTm90aWZpY2F0aW9uXG4gICAgICBicmVha1xuICAgIGNhc2UgVG9waWNMaWtlOlxuICAgICAgLy8gb25DbGljayA9ICgpID0+IG5hdmlnYXRlKGAvdXNlci8ke25vdGlmaWNhdGlvbi5naXZpbmdVc2VySWR9YClcbiAgICAgIEl0ZW1Db21wb25lbnQgPSBUb3BpY0xpa2VOb3RpZmljYXRpb25cbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIGJyZWFrXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8SXRlbSBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgIDxJdGVtQ29tcG9uZW50IG5vdGlmaWNhdGlvbj17bm90aWZpY2F0aW9ufSAvPlxuICAgIDwvSXRlbT5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOb3RpZmljYXRpb25JdGVtXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgSXRlbSA9IHN0eWxlZCgnbGknKWBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JheTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTV2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIC8qIGN1cnNvcjogcG9pbnRlcjsgKi9cbiAgcGFkZGluZy1yaWdodDogLjV2dztcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjlGQTtcbiAgfVxuYFxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IExlZnRDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpYFxuICB3aWR0aDogMjIlO1xuICBoZWlnaHQ6IDEwMCUgO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBpbWcge1xuICAgIGhlaWdodDogNXZoO1xuICB9XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDIwMCwyMDAsMjAwLDAuMjUpO1xuICA6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjI7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IFJpZ2h0Q29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWBcbiAgd2lkdGg6IDIwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaW1nIHtcbiAgICBoZWlnaHQ6IDV2aDtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgTWlkZGxlQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBpbWcge1xuICAgIGhlaWdodDogM3ZoO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDhweDtcbiAgfVxuICBzdmcge1xuICAgIGhlaWdodDogM3ZoO1xuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogOHB4O1xuICB9XG4gIGgzIHtcbiAgICBmb250LXNpemU6IC45dnc7XG4gIH1cbiAgYSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IHZhcigtLW0tcHJpbWFyeS1idG4tY29sb3IpO1xuICAgIDpob3ZlciB7XG4gICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC44NSk7XG4gICAgfVxuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBQcm9maWxlSWNvbiA9IHN0eWxlZCgnaW1nJylgXG4gIGhlaWdodDogNzAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiAwIC42dnc7XG5gXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMaW5rLCB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBNZW51VGltZSB9IGZyb20gJy4uL01lbnVUaW1lL0luZGV4J1xuaW1wb3J0IHsgZ2V0VGltZVNpbmNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vZ2VuZXJpYy9zdHJpbmcvZGF0ZUZvcm1hdHRlcidcbmltcG9ydCBVc2VybmFtZUFuZFRhZyBmcm9tICcuLi8uLi8uLi8uLi8uLi9Db21tb25Db21wb25lbnRzL1VzZXJuYW1lQW5kVGFnL0luZGV4J1xuaW1wb3J0IHsgTGVmdENvbnRhaW5lciwgTWlkZGxlQ29udGFpbmVyLCBQcm9maWxlSWNvbiB9IGZyb20gJy4uL1N0eWxlJ1xuXG5pbXBvcnQgeyBUb3BpY0xpa2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9lbnVtcy9ub3RpZmljYXRpb25fdHlwZXMnXG5pbXBvcnQgeyBMaWtlQ2xpY2tlZFN2ZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3N2Z3Mvc3ZncydcblxuY29uc3QgVG9waWNMaWtlTm90aWZpY2F0aW9uID0gKHsgbm90aWZpY2F0aW9uIH0pID0+IHtcbiAgY29uc3Qge1xuICAgIGdpdmluZ1VzZXJJZCwgZ2l2aW5nVXNlclVzZXJuYW1lLCBnaXZpbmdVc2VySWNvblNyYyxcbiAgICBnaXZpbmdVc2VyVGFnLCB0b3BpY0lkLFxuICB9ID0gbm90aWZpY2F0aW9uXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKVxuICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICB9XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxMZWZ0Q29udGFpbmVyIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKGAvdXNlci8ke2dpdmluZ1VzZXJJZH1gKX0+XG4gICAgICAgIDxQcm9maWxlSWNvbiBzcmM9e2dpdmluZ1VzZXJJY29uU3JjfSAvPlxuICAgICAgICA8VXNlcm5hbWVBbmRUYWdcbiAgICAgICAgICB1c2VySWQ9e2dpdmluZ1VzZXJJZH1cbiAgICAgICAgICB1c2VybmFtZURpc3BsYXk9e2dpdmluZ1VzZXJVc2VybmFtZX1cbiAgICAgICAgICB1c2VyVGFnPXtnaXZpbmdVc2VyVGFnfVxuICAgICAgICAvPlxuICAgICAgPC9MZWZ0Q29udGFpbmVyPlxuICAgICAgPE1pZGRsZUNvbnRhaW5lcj5cbiAgICAgICAgPGgzPlxuICAgICAgICAgIDxiPlxuICAgICAgICAgICAge2dpdmluZ1VzZXJVc2VybmFtZX1cbiAgICAgICAgICA8L2I+XG4gICAgICAgICAgeycgJ31cbiAgICAgICAgICBMaWtlZCBZb3VyXG4gICAgICAgICAgeycgJ31cbiAgICAgICAgICA8TGluayBvbkNsaWNrPXtoYW5kbGVDbGlja30gdG89e2AvaG9tZS90b3BpY3MvJHt0b3BpY0lkfS9zdWJ0b3BpY3NgfT5cbiAgICAgICAgICAgIFRvcGljIVxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICB7JyAnfVxuICAgICAgICAgIPCfmIpcbiAgICAgICAgPC9oMz5cbiAgICAgICAgPExpa2VDbGlja2VkU3ZnIC8+XG5cbiAgICAgIDwvTWlkZGxlQ29udGFpbmVyPlxuICAgICAgPE1lbnVUaW1lXG4gICAgICAgIHRpbWU9e2dldFRpbWVTaW5jZShub3RpZmljYXRpb24uY3JlYXRlZEF0KX1cbiAgICAgICAgaWQ9e25vdGlmaWNhdGlvbi5pZH1cbiAgICAgICAgZXZlbnRUeXBlPXtUb3BpY0xpa2V9XG4gICAgICAvPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvcGljTGlrZU5vdGlmaWNhdGlvblxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7IFRhYiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBUaGVtZVRhYiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL0NvbW1vbkNvbXBvbmVudHMvVGFicy9TdHlsZSdcbmltcG9ydCB7IFRhYkNvbnRhaW5lciB9IGZyb20gJy4vU3R5bGUnXG5pbXBvcnQgcmVjc0FjdGlvbkNyZWF0b3JzIGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvcmVjcy9pbmRleCdcbmltcG9ydCBvcHBSZWNzQWN0aW9uQ3JlYXRvcnMgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy9vcHBvc2luZ19yZWNzL2luZGV4J1xuXG5pbXBvcnQgdXNlQmluZERpc3BhdGNoIGZyb20gJy4uLy4uLy4uLy4uLy4uL2hvb2tzL3JlZHV4L3VzZUJpbmREaXNwYXRjaCdcbmltcG9ydCBSZWNvbW1lbmRhdGlvbnNMaXN0IGZyb20gJy4uLy4uLy4uLy4uLy4uL1JlY29tbWVuZGF0aW9uc0xpc3QvSW5kZXgnXG5cbmNvbnN0IFJlY29tbWVuZGF0aW9ucyA9ICgpID0+IHtcbiAgY29uc3QgW2tleSwgc2V0S2V5XSA9IHVzZVN0YXRlKCdyZWNzJylcbiAgY29uc3QgeyB0b3BpY0lkIH0gPSB1c2VQYXJhbXMoKVxuICBjb25zdCB7IGdldEFsbFJlY3MsIGdldEFsbE9wcG9zaW5nUmVjcyB9ID0gdXNlQmluZERpc3BhdGNoKFxuICAgIHJlY3NBY3Rpb25DcmVhdG9ycyxcbiAgICBvcHBSZWNzQWN0aW9uQ3JlYXRvcnMsXG4gIClcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRBbGxPcHBvc2luZ1JlY3ModG9waWNJZClcbiAgICBnZXRBbGxSZWNzKHRvcGljSWQpXG4gIH0sIFt0b3BpY0lkXSlcblxuICBjb25zdCByZWNzID0gdXNlU2VsZWN0b3IoKHMpID0+IHMucmVjb21tZW5kYXRpb25zLnJlY3MpXG4gIGNvbnN0IG9wcG9zaW5nUmVjcyA9IHVzZVNlbGVjdG9yKChzKSA9PiBzLnJlY29tbWVuZGF0aW9ucy5vcHBvc2luZ1JlY3MpXG4gIHJldHVybiAoXG4gICAgPFRhYkNvbnRhaW5lcj5cbiAgICAgIDxUaGVtZVRhYlxuICAgICAgICBhY3RpdmVLZXk9e2tleX1cbiAgICAgICAgb25TZWxlY3Q9eyhrKSA9PiBzZXRLZXkoayl9XG4gICAgICA+XG4gICAgICAgIDxUYWIgZXZlbnRLZXk9XCJyZWNzXCIgdGl0bGU9XCJSZWNvbW1lbmRlZCBDb250ZW50XCI+XG4gICAgICAgICAgPFJlY29tbWVuZGF0aW9uc0xpc3QgcmVjcz17cmVjc30gLz5cbiAgICAgICAgPC9UYWI+XG4gICAgICAgIDxUYWIgZXZlbnRLZXk9XCJvcHBvc2luZ1JlY3NcIiB0aXRsZT1cIk9wcG9zaW5nIFZpZXdzXCI+XG4gICAgICAgICAgPFJlY29tbWVuZGF0aW9uc0xpc3QgcmVjcz17b3Bwb3NpbmdSZWNzfSAvPlxuICAgICAgICA8L1RhYj5cbiAgICAgIDwvVGhlbWVUYWI+XG5cbiAgICA8L1RhYkNvbnRhaW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWNvbW1lbmRhdGlvbnNcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpYFxuICB3aWR0aDogY2FsYygxMDB2dyAtIHZhcigtLXNpZGViYXItd2lkdGgpKTtcbiAgZGlzcGxheTogZmxleDtcbiAgLyogcGFkZGluZy10b3A6IDVlbTsgKi9cbiAgbWFyZ2luLWxlZnQ6IHZhcigtLXNpZGViYXItd2lkdGgpO1xuXG4gIC50YWItY29udGVudCB7XG4gICBwYWRkaW5nLWJvdHRvbTogNDB2aDtcbiB9XG5cbiBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cbmBcbmV4cG9ydCBjb25zdCBNYWluQ29udGVudCA9IHN0eWxlZCgnZGl2JylgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gIH1cblxuYFxuXG5leHBvcnQgY29uc3QgTGluZSA9IHN0eWxlZCgnaHInKWAgXG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMWVtIDAgMmVtIDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0OCw0OCw1MCk7XG4gIGhlaWdodDogLjVweDtcbiAgYm9yZGVyOiBub25lO1xuYFxuXG5leHBvcnQgY29uc3QgVGFiQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWAgXG4gIGZsZXg6IDI1JTtcbiAgZGlzcGxheTogZmxleDtcbiAgei1pbmRleDogOTk7XG4gIC8qIGE6IGNlbnRlcjsgKi9cbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2RlZTJlNjtcblxuYFxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB0b3BpY0FjdGlvbkNyZWF0b3JzIGZyb20gJy4uLy4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvdG9waWNzJ1xuaW1wb3J0IHN1YlRvcGljQWN0aW9uQ3JlYXRvcnMgZnJvbSAnLi4vLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy9zdWJ0b3BpY3MnXG5cbmltcG9ydCB1c2VCaW5kRGlzcGF0Y2ggZnJvbSAnLi4vLi4vLi4vaG9va3MvcmVkdXgvdXNlQmluZERpc3BhdGNoJ1xuaW1wb3J0IHtcbiAgQ29udGFpbmVyLCBMaW5lLCBNYWluQ29udGVudCwgSGVhZGVyQ29udGFpbmVyLFxufSBmcm9tICcuL1N0eWxlJ1xuaW1wb3J0IHtcbiAgSG9tZVBhZ2VHcmlkLCBMZWZ0LCBNaWRkbGUsIFJpZ2h0LFxufSBmcm9tICcuLi8uLi9TdHlsZSdcblxuaW1wb3J0IEhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvSGVhZGVyL0luZGV4J1xuaW1wb3J0IFBhcmVudENvbW1lbnQgZnJvbSAnLi9jb21wb25lbnRzL1BhcmVudENvbW1lbnQvSW5kZXgnXG5cbmltcG9ydCBTdWJUb3BpY3NSb3V0ZXIgZnJvbSAnLi9jb21wb25lbnRzL1N1YlRvcGljc1JvdXRlci9JbmRleCdcbmltcG9ydCB7IHV1aWRSZWdFeCB9IGZyb20gJy4uLy4uLy4uLy4uL2dlbmVyaWMvcmVnZXgvdXVpZCdcbmltcG9ydCBVc2VySW5mb3JtYXRpb25EaXNwbGF5IGZyb20gJy4uLy4uLy4uL1VzZXJJbmZvcm1hdGlvbkRpc3BsYXkvSW5kZXgnXG5pbXBvcnQgUmVjb21tZW5kYXRpb25zIGZyb20gJy4uL1JpZ2h0U2VjdGlvbi9jb21wb25lbnRzL1JlY29tbWVuZGF0aW9ucy9JbmRleCdcblxuY29uc3QgU3ViVG9waWNzID0gKCkgPT4ge1xuICBjb25zdCB7IHRvcGljSWQsICcqJzogdXJsIH0gPSB1c2VQYXJhbXMoKVxuICBjb25zdCBbc3VidG9waWNJZCwgY29tbWVudElkXSA9IHVybCA/IHVybC5tYXRjaCh1dWlkUmVnRXgpIDogW11cbiAgY29uc3Qge1xuICAgIGdldEFsbFN1YlRvcGljcyxcbiAgICBnZXRUb3BpYyxcbiAgfSA9IHVzZUJpbmREaXNwYXRjaChcbiAgICBzdWJUb3BpY0FjdGlvbkNyZWF0b3JzLFxuICAgIHRvcGljQWN0aW9uQ3JlYXRvcnMsXG4gIClcbiAgY29uc3QgdG9waWMgPSB1c2VTZWxlY3RvcigocykgPT4gcy50b3BpY3MubGlzdCk/LmZpbmQoKHQpID0+IHQuaWQgPT09IHRvcGljSWQpXG5cbiAgY29uc3Qgc3VidG9waWNzRW1wdHkgPSB1c2VTZWxlY3RvcigocykgPT4gcy5zdWJ0b3BpY3MpXG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3RvcigocykgPT4gcy5zZXNzaW9uLmN1cnJlbnRVc2VyKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHVzZXIpIHtcbiAgICAgIGdldFRvcGljKHRvcGljSWQsIHVzZXIudXNlcklkKVxuICAgIH1cbiAgICBpZiAoc3VidG9waWNzRW1wdHkpIGdldEFsbFN1YlRvcGljcyh0b3BpY0lkKVxuICB9LCBbdG9waWNJZCwgc3VidG9waWNJZCwgdXNlcl0pXG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPEhvbWVQYWdlR3JpZD5cbiAgICAgICAgPExlZnQ+XG4gICAgICAgICAgPFVzZXJJbmZvcm1hdGlvbkRpc3BsYXkgLz5cbiAgICAgICAgPC9MZWZ0PlxuICAgICAgICA8TWlkZGxlPlxuICAgICAgICAgIDxNYWluQ29udGVudD5cbiAgICAgICAgICAgIDxIZWFkZXJDb250YWluZXI+XG4gICAgICAgICAgICAgIDxIZWFkZXIgdG9waWM9e3RvcGljfSB1c2VyPXt1c2VyfSAvPlxuICAgICAgICAgICAgPC9IZWFkZXJDb250YWluZXI+XG4gICAgICAgICAgICA8TGluZSAvPlxuICAgICAgICAgICAgeyBjb21tZW50SWQgJiYgPFBhcmVudENvbW1lbnQgdG9waWNJZD17dG9waWNJZH0gLz4gfVxuICAgICAgICAgIDwvTWFpbkNvbnRlbnQ+XG4gICAgICAgIDwvTWlkZGxlPlxuICAgICAgICA8UmlnaHQ+XG4gICAgICAgICAgPFJlY29tbWVuZGF0aW9ucyAvPlxuICAgICAgICA8L1JpZ2h0PlxuICAgICAgPC9Ib21lUGFnZUdyaWQ+XG4gICAgICA8U3ViVG9waWNzUm91dGVyIC8+XG4gICAgPC9Db250YWluZXI+XG5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdWJUb3BpY3NcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpYFxuICB3aWR0aDogMTAwdnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiAxMHZ3O1xuXG4gQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG5gXG5leHBvcnQgY29uc3QgTWFpbkNvbnRlbnQgPSBzdHlsZWQoJ2RpdicpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICB9XG5cbmBcbmV4cG9ydCBjb25zdCBMaW5lID0gc3R5bGVkKCdocicpYCBcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAxZW0gMCAyZW0gMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ4LDQ4LDUwKTtcbiAgaGVpZ2h0OiAuNXB4O1xuICBib3JkZXI6IG5vbmU7XG5gXG5cbmV4cG9ydCBjb25zdCBIZWFkZXJDb250YWluZXIgPSBzdHlsZWQoJ3NlY3Rpb24nKWBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IDEwMCU7XG4gIGxpIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuYFxuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG5pbXBvcnQgUmVhY3QsIHtcbiAgdXNlU3RhdGUsIHVzZVJlZiwgbWVtbyxcbn0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUsIHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuaW1wb3J0IENvbGxhcHNlIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db2xsYXBzZSdcbmltcG9ydCB7IFVwQXJyb3dTdmcsIERvd25BcnJvd1N2ZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3N2Z3Mvc3ZncydcblxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnLi4vLi4vLi4vLi4vLi4vQ29tbW9uQ29tcG9uZW50cy9JY29uQnV0dG9uL0luZGV4J1xuaW1wb3J0IENlbnNvck92ZXJsYXkgZnJvbSAnLi4vLi4vLi4vLi4vLi4vQ29tbW9uQ29tcG9uZW50cy9DZW5zb3JPdmVybGF5L0luZGV4J1xuXG5pbXBvcnQgQWN0aW9uVG9vbGJhciBmcm9tICcuLi8uLi8uLi8uLi8uLi9Db21tb25Db21wb25lbnRzL0FjdGlvblRvb2xiYXJzL0NvbW1lbnRUb29sYmFyL0luZGV4J1xuaW1wb3J0IHtcbiAgQ29tbWVudENvbnRhaW5lciwgSGVhZGVyLCBVc2VybmFtZSwgRGF0ZSwgQm9keSwgRm9vdGVyLFxuICBUaHVtYiwgRXhwYW5kQnV0dG9uLCBFdmlkZW5jZVNlY3Rpb24sIENvbnRlbnQsIFVzZXJJbmZvQ29udGFpbmVyLCBPdXRlckNvbnRhaW5lcixcbn0gZnJvbSAnLi9TdHlsZSdcblxuaW1wb3J0IHsgZ2V0VGltZVNpbmNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vZ2VuZXJpYy9zdHJpbmcvZGF0ZUZvcm1hdHRlcidcbmltcG9ydCB1c2VTZXRJbm5lckh0bWwgZnJvbSAnLi4vLi4vLi4vLi4vLi4vaG9va3MvdXNlU2V0SW5uZXJIdG1sJ1xuXG5pbXBvcnQgeyBQYXJlbnRDb21tZW50Q29udGV4dCB9IGZyb20gJy4uL0NvbW1lbnRDb2x1bW4vSW5kZXgnXG5pbXBvcnQgVGhlbWVUb29sdGlwIGZyb20gJy4uLy4uLy4uLy4uLy4uL0NvbW1vbkNvbXBvbmVudHMvVG9vbHRpcC9JbmRleCdcbmltcG9ydCB7IFVOREVSX1JFVklFVyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2VudW1zL3JlcG9ydF9zdGF0dXMnXG5pbXBvcnQgeyBDT01NRU5UIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vZW51bXMvY29udGVudF90eXBlJ1xuXG5jb25zdCBDb21tZW50ID0gKHsgY29tbWVudERhdGEsIHJlcGxpZXMsIGNvbW1lbnRSZWYgfSkgPT4ge1xuICBpZiAoIWNvbW1lbnREYXRhKSByZXR1cm4gbnVsbFxuICBjb25zdCB7IHRvcGljSWQgfSA9IFJlYWN0LnVzZUNvbnRleHQoUGFyZW50Q29tbWVudENvbnRleHQpIHx8IHt9XG4gIGNvbnN0IGNvbnRlbnRSZWYgPSB1c2VSZWYobnVsbClcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpXG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZUxvY2F0aW9uKClcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbc2hvdWxkQmx1ciwgc2V0U2hvdWxkQmx1cl0gPSB1c2VTdGF0ZShjb21tZW50RGF0YT8ucmVwb3J0U3RhdHVzID09PSBVTkRFUl9SRVZJRVcgfHwgY29tbWVudERhdGE/LnRveGljaXR5U3RhdHVzID09PSAnVE9YSUMnKVxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3IoKHMpID0+IHMuc2Vzc2lvbi5jdXJyZW50VXNlcilcblxuICB1c2VTZXRJbm5lckh0bWwoY29udGVudFJlZiwgY29tbWVudERhdGE/LmNvbnRlbnQpXG5cbiAgY29uc3QgbWlucyA9IGdldFRpbWVTaW5jZShjb21tZW50RGF0YS5jcmVhdGVkQXQpXG4gIGNvbnN0IGV4cGFuZEljb24gPSBpc09wZW4gPyA8VXBBcnJvd1N2ZyAvPiA6IDxEb3duQXJyb3dTdmcgLz5cbiAgcmV0dXJuIChcbiAgICA8T3V0ZXJDb250YWluZXIgcmVmPXtjb21tZW50UmVmfT5cbiAgICAgIDxDb21tZW50Q29udGFpbmVyPlxuICAgICAgICA8SGVhZGVyIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKGAvaG9tZS90b3BpY3MvJHt0b3BpY0lkfS9zdWJ0b3BpY3MvJHtjb21tZW50RGF0YS5zdWJ0b3BpY0lkfS9jb21tZW50cy8ke2NvbW1lbnREYXRhLmlkfWApfT5cbiAgICAgICAgICA8VXNlckluZm9Db250YWluZXI+XG4gICAgICAgICAgICA8VGh1bWIgc3JjPXtjb21tZW50RGF0YS5jcmVhdGVkQnlJY29uU3JjIHx8ICdodHRwczovL2NpdmlsLWRldi5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9wcm9maWxlX2ltZ18xLnBuZyd9IC8+XG4gICAgICAgICAgICA8VGhlbWVUb29sdGlwXG4gICAgICAgICAgICAgIHRvb2x0aXBIZWFkZXI9XCJFeHBlcmllbmNlXCJcbiAgICAgICAgICAgICAgdG9vbHRpcFRleHQ9e2NvbW1lbnREYXRhLmNyZWF0ZWRCeUV4cGVyaWVuY2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvVXNlckluZm9Db250YWluZXI+XG4gICAgICAgICAgPFVzZXJuYW1lPntjb21tZW50RGF0YS5jcmVhdGVkQnl9PC9Vc2VybmFtZT5cbiAgICAgICAgICA8RGF0ZT57YCR7bWluc31gfTwvRGF0ZT5cbiAgICAgICAgPC9IZWFkZXI+XG4gICAgICAgIDxCb2R5IHNob3VsZEJsdXI9e3Nob3VsZEJsdXJ9IG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKGAvaG9tZS90b3BpY3MvJHt0b3BpY0lkfS9zdWJ0b3BpY3MvJHtjb21tZW50RGF0YS5zdWJ0b3BpY0lkfS9jb21tZW50cy8ke2NvbW1lbnREYXRhLmlkfWApfT5cbiAgICAgICAgICA8Q29udGVudCByZWY9e2NvbnRlbnRSZWZ9IC8+XG4gICAgICAgICAgeyByZXBsaWVzLmxlbmd0aCAhPT0gMFxuICAgICAgICAgICYmIChcbiAgICAgICAgICA8RXhwYW5kQnV0dG9uPlxuICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgaWNvbj17ZXhwYW5kSWNvbn1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKCFpc09wZW4pfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBSZXBsaWVzXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgPC9FeHBhbmRCdXR0b24+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9Cb2R5PlxuICAgICAgICA8Rm9vdGVyIHNob3VsZEJsdXI9e3Nob3VsZEJsdXJ9PlxuICAgICAgICAgIDxBY3Rpb25Ub29sYmFyXG4gICAgICAgICAgICBsaWtlcz17Y29tbWVudERhdGE/Lmxpa2VzfVxuICAgICAgICAgICAgY29tbWVudD17Y29tbWVudERhdGF9XG4gICAgICAgICAgICB1c2VyPXt1c2VyfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPENvbGxhcHNlIGluPXtpc09wZW59PlxuICAgICAgICAgICAgPEV2aWRlbmNlU2VjdGlvbj5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICByZXBsaWVzLm1hcCgocmVwbHksIGlkeCkgPT4gKFxuICAgICAgICAgICAgICAgIDxDb21tZW50XG4gICAgICAgICAgICAgICAgICBrZXk9e2NvbW1lbnREYXRhLmlkICsgU3RyaW5nKGlkeCl9XG4gICAgICAgICAgICAgICAgICBjb21tZW50RGF0YT17cmVwbHkuZGF0YX1cbiAgICAgICAgICAgICAgICAgIHJlcGxpZXM9e3JlcGx5LmNoaWxkcmVufVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvRXZpZGVuY2VTZWN0aW9uPlxuICAgICAgICAgIDwvQ29sbGFwc2U+XG4gICAgICAgIDwvRm9vdGVyPlxuXG4gICAgICA8L0NvbW1lbnRDb250YWluZXI+XG4gICAgICB7IHNob3VsZEJsdXIgJiYgKFxuICAgICAgPENlbnNvck92ZXJsYXlcbiAgICAgICAgc2V0U2hvdWxkQmx1cj17c2V0U2hvdWxkQmx1cn1cbiAgICAgICAgY29udGVudElkPXtjb21tZW50RGF0YT8uaWR9XG4gICAgICAgIGNvbnRlbnRUeXBlPXtDT01NRU5UfVxuICAgICAgICBzaG93TmF2aWdhdGlvblRvVHJpYnVuYWw9e2NvbW1lbnREYXRhPy5yZXBvcnRTdGF0dXMgPT09IFVOREVSX1JFVklFVyAmJiAhcGF0aG5hbWUuaW5jbHVkZXMoJ3RyaWJ1bmFsJyl9XG4gICAgICAvPlxuICAgICAgKX1cbiAgICA8L091dGVyQ29udGFpbmVyPlxuXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVtbyhDb21tZW50KVxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IE91dGVyQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgei1pbmRleDogOTk7XG5cbmBcbmV4cG9ydCBjb25zdCBDb21tZW50Q29udGFpbmVyID0gc3R5bGVkKCdsaScpYFxuICB3aWR0aDogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogLjRlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW4tdG9wOiAxZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgYm94LXNoYWRvdzogIC01cHggLTVweCAxMHB4ICM1YTVhNWEsIDVweCA1cHggMTBweCAjZmZmZmZmO1xuXG4gIGJvcmRlci1jb2xvcjogcmdiYSgyMDAsMjAwLDIwMCwwLjI1KTtcbiAgOmhvdmVyIHtcbiAgICAvKiBvcGFjaXR5OiAuOTsgKi9cbiAgICAvKiBmaWx0ZXI6IGJyaWdodG5lc3MoLjkpOyAqL1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNlZjVkNDU2NjsgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDhGRkYxO1xuICB9XG5cbiAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBIZWFkZXIgPSBzdHlsZWQoJ2RpdicpYFxuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMWVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JheTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYFxuXG5leHBvcnQgY29uc3QgVXNlcm5hbWUgPSBzdHlsZWQoJ2InKWAgXG4gIGNvbG9yOiBibGFjaztcbmBcblxuZXhwb3J0IGNvbnN0IERhdGUgPSBzdHlsZWQoJ3RpbWUnKWAgXG4gIGNvbG9yOiBncmF5O1xuYFxuXG5leHBvcnQgY29uc3QgQm9keSA9IHN0eWxlZCgnZGl2JylgXG4gIGZpbHRlcjogJHsocHJvcHMpID0+IChwcm9wcy5zaG91bGRCbHVyID8gJ2JsdXIoNXB4KScgOiAndW5zZXQnKX07XG4gIHBvaW50ZXItZXZlbnRzOiAkeyhwcm9wcykgPT4gKHByb3BzLnNob3VsZEJsdXIgPyAnbm9uZScgOiAnaW5pdGlhbCcpfTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogYmxhY2s7XG4gIG1pbi1oZWlnaHQ6IDEwdmg7XG4gIHBhZGRpbmc6IDFlbTtcbiAgd2lkdGg6IDEwMCU7XG5gXG5cbmV4cG9ydCBjb25zdCBUaHVtYiA9IHN0eWxlZCgnaW1nJylgIFxuICBmbGV4LXNocmluazogMDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDsgICAgICBcbiAgYm9yZGVyLXJhZGl1czogNTAlOyBcbmBcblxuZXhwb3J0IGNvbnN0IFVzZXJJbmZvQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWBcbiAgZGlzcGxheTogZmxleDtcbmBcblxuZXhwb3J0IGNvbnN0IEV4cGFuZEJ1dHRvbiA9IHN0eWxlZCgnZGl2JylgIFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcbmBcblxuZXhwb3J0IGNvbnN0IEV2aWRlbmNlU2VjdGlvbiA9IHN0eWxlZCgndWwnKWAgXG4gIGJhY2tncm91bmQtY29sb3I6ICNGMEYyRjU7XG4gIHdpZHRoOiAxMDAlO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gIHBhZGRpbmc6IDAgLjVlbSAuNWVtIC41ZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5gXG5leHBvcnQgY29uc3QgRm9vdGVyID0gc3R5bGVkKCdkaXYnKWBcbiAgZmlsdGVyOiAkeyhwcm9wcykgPT4gKHByb3BzLnNob3VsZEJsdXIgPyAnYmx1cig1cHgpJyA6ICd1bnNldCcpfTtcbiAgcG9pbnRlci1ldmVudHM6ICR7KHByb3BzKSA9PiAocHJvcHMuc2hvdWxkQmx1ciA/ICdub25lJyA6ICdpbml0aWFsJyl9O1xuICB3aWR0aDogMTAwJTtcbmBcblxuZXhwb3J0IGNvbnN0IENvbnRlbnQgPSBzdHlsZWQoJ3AnKWAgXG4gIHBhZGRpbmc6IDFlbTtcbmBcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgQ29tbWVudCBmcm9tICcuLi9Db21tZW50L0luZGV4J1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi9TdHlsZSdcblxuZXhwb3J0IGNvbnN0IFBhcmVudENvbW1lbnRDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChudWxsKVxuXG5jb25zdCBDb21tZW50Q29sdW1uID0gKHtcbiAgbnVtQ29tbWVudHMsIGNvbW1lbnRzLCBjb21tZW50U2VudGltZW50LCBjb2xvciwgdG9waWNJZCxcbn0pID0+IChcbiAgPENvbnRhaW5lciBjb2xvcj17Y29sb3J9PlxuICAgIDxoMT5cbiAgICAgIHtudW1Db21tZW50cyB8fCAnJ31cbiAgICAgIHsnICd9XG4gICAgICB7Y29tbWVudFNlbnRpbWVudCB8fCAnJ31cbiAgICAgIHsnICd9XG4gICAgICBDb21tZW50c1xuICAgIDwvaDE+XG4gICAge1xuICAgICAgICAgIGNvbW1lbnRzPy5tYXAoKGNvbW1lbnQsIGlkeCkgPT4gKFxuICAgICAgICAgICAgPFBhcmVudENvbW1lbnRDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgICAgICAgIGtleT17Y29tbWVudC5kYXRhPy5pZCArIFN0cmluZyhpZHgpfVxuICAgICAgICAgICAgICB2YWx1ZT17e1xuICAgICAgICAgICAgICAgIGNvbW1lbnRJZDogY29tbWVudC5kYXRhPy5pZCxcbiAgICAgICAgICAgICAgICB0b3BpY0lkLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Q29tbWVudFxuICAgICAgICAgICAgICAgIGtleT17Y29tbWVudC5kYXRhPy5pZCArIFN0cmluZyhpZHgpfVxuICAgICAgICAgICAgICAgIGNvbW1lbnREYXRhPXtjb21tZW50LmRhdGF9XG4gICAgICAgICAgICAgICAgcmVwbGllcz17Y29tbWVudC5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvUGFyZW50Q29tbWVudENvbnRleHQuUHJvdmlkZXI+XG4gICAgICAgICAgKSlcbiAgICAgICAgfVxuICA8L0NvbnRhaW5lcj5cbilcblxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudENvbHVtblxuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZCgndWwnKWBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMmVtO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIC8qIGJvcmRlci1sZWZ0OiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrOyAqL1xuICB6LWluZGV4OiA5OTtcbiAgb3BhY2l0eTogLjk5O1xuICB3aWR0aDogNTB2dztcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyMDAsMjAwLDIwMCwwLjI1KTtcblxuICBoMSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICBmb250LXNpemU6IDF2dztcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy5jb2xvcn07XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG5cbiAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICAgICAgZm9udC1zaXplOiA1dnc7XG5cbiAgICB9XG4gIH1cblxuICBcbiAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICB9XG5gXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgbWVtbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmltcG9ydCB7IFRhYiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcblxuaW1wb3J0IHVzZUNhdGVnb3JpemVDb21tZW50cyBmcm9tICcuLi9ob29rcy91c2VDYXRlZ29yaXplQ29tbWVudHMnXG5pbXBvcnQgdXNlQmluZERpc3BhdGNoIGZyb20gJy4uLy4uLy4uLy4uLy4uL2hvb2tzL3JlZHV4L3VzZUJpbmREaXNwYXRjaCdcblxuaW1wb3J0IHN1YlRvcGljQWN0aW9ucyBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9yZWR1eC9hY3Rpb25zL3N1YnRvcGljcydcbmltcG9ydCBjb21tZW50QWN0aW9ucyBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9yZWR1eC9hY3Rpb25zL2NvbW1lbnRzJ1xuaW1wb3J0IHRvcGljQWN0aW9ucyBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9yZWR1eC9hY3Rpb25zL3RvcGljcydcblxuaW1wb3J0IENvbW1lbnRDb2x1bW4gZnJvbSAnLi4vQ29tbWVudENvbHVtbi9JbmRleCdcbmltcG9ydCB7IENvbHVtbkNvbnRhaW5lciwgVGhyZWFkQ29udGFpbmVyIH0gZnJvbSAnLi9TdHlsZS9pbmRleCdcbmltcG9ydCB7IFRoZW1lVGFiIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vQ29tbW9uQ29tcG9uZW50cy9UYWJzL1N0eWxlJ1xuaW1wb3J0IHsgTGluZSB9IGZyb20gJy4uLy4uL1N0eWxlJ1xuXG5jb25zdCBDb21tZW50VGhyZWFkID0gKCkgPT4ge1xuICBjb25zdCB7IGNvbW1lbnRJZCwgdG9waWNJZCB9ID0gdXNlUGFyYW1zKClcbiAgY29uc3QgeyBnZXRBbGxDb21tZW50UmVwbGllcywgZ2V0VG9waWMgfSA9IHVzZUJpbmREaXNwYXRjaChcbiAgICBzdWJUb3BpY0FjdGlvbnMsIGNvbW1lbnRBY3Rpb25zLCB0b3BpY0FjdGlvbnMsXG4gIClcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuc2Vzc2lvbi5jdXJyZW50VXNlcilcbiAgLy8gY29uc3Qgc3VidG9waWMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnN1YnRvcGljcylbc3ViVG9waWNJZF1cbiAgY29uc3QgW2tleSwgc2V0S2V5XSA9IHVzZVN0YXRlKCdhbGwnKVxuXG4gIGNvbnN0IHtcbiAgICBQT1NJVElWRTogcG9zaXRpdmVDb21tZW50cyxcbiAgICBORVVUUkFMOiBuZXV0cmFsQ29tbWVudHMsXG4gICAgTkVHQVRJVkU6IG5lZ2F0aXZlQ29tbWVudHMsXG4gICAgYWxsOiBhbGxDb21tZW50cyxcbiAgfSA9IHVzZUNhdGVnb3JpemVDb21tZW50cygpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhjb21tZW50SWQpXG4gICAgZ2V0QWxsQ29tbWVudFJlcGxpZXMoY29tbWVudElkKVxuICAgIGdldFRvcGljKHRvcGljSWQsIHVzZXI/LmlkKVxuICB9LCBbdXNlciwgY29tbWVudElkXSlcbiAgcmV0dXJuIChcblxuICAgIDxUaHJlYWRDb250YWluZXI+XG4gICAgICA8TGluZSAvPlxuICAgICAgPFRoZW1lVGFiXG4gICAgICAgIGFjdGl2ZUtleT17a2V5fVxuICAgICAgICBvblNlbGVjdD17KGspID0+IHNldEtleShrKX1cbiAgICAgID5cbiAgICAgICAgPFRhYiBldmVudEtleT1cImFsbFwiIHRpdGxlPVwiQWxsXCI+XG4gICAgICAgICAgPENvbHVtbkNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxDb21tZW50Q29sdW1uIG51bUNvbW1lbnRzPXswfSBjb21tZW50cz17YWxsQ29tbWVudHN9IGNvbW1lbnRTZW50aW1lbnQ9XCJcIiBjb2xvcj1cIiM2QTZFNzBcIiAvPlxuICAgICAgICAgIDwvQ29sdW1uQ29udGFpbmVyPlxuICAgICAgICA8L1RhYj5cbiAgICAgICAgPFRhYiBldmVudEtleT1cInBvc2l0aXZlXCIgdGl0bGU9XCJHZW5lcmFsbHkgUG9zaXRpdmVcIj5cbiAgICAgICAgICA8Q29sdW1uQ29udGFpbmVyPlxuICAgICAgICAgICAgPENvbW1lbnRDb2x1bW4gbnVtQ29tbWVudHM9ezB9IGNvbW1lbnRzPXtwb3NpdGl2ZUNvbW1lbnRzfSBjb21tZW50U2VudGltZW50PVwiR2VuZXJhbGx5IFBvc2l0aXZlXCIgY29sb3I9XCIjNkE2RTcwXCIgLz5cbiAgICAgICAgICA8L0NvbHVtbkNvbnRhaW5lcj5cbiAgICAgICAgPC9UYWI+XG4gICAgICAgIDxUYWIgZXZlbnRLZXk9XCJuZXV0cmFsXCIgdGl0bGU9XCJOZXV0cmFsXCI+XG4gICAgICAgICAgPENvbHVtbkNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxDb21tZW50Q29sdW1uIG51bUNvbW1lbnRzPXswfSBjb21tZW50cz17bmV1dHJhbENvbW1lbnRzfSBjb21tZW50U2VudGltZW50PVwiTmV1dHJhbFwiIGNvbG9yPVwiIzQ3NEE0RlwiIC8+XG4gICAgICAgICAgPC9Db2x1bW5Db250YWluZXI+XG4gICAgICAgIDwvVGFiPlxuICAgICAgICA8VGFiIGV2ZW50S2V5PVwibmVnYXRpdmVcIiB0aXRsZT1cIkdlbmVyYWxseSBOZWdhdGl2ZVwiPlxuICAgICAgICAgIDxDb2x1bW5Db250YWluZXI+XG4gICAgICAgICAgICA8Q29tbWVudENvbHVtbiBudW1Db21tZW50cz17MH0gY29tbWVudHM9e25lZ2F0aXZlQ29tbWVudHN9IGNvbW1lbnRTZW50aW1lbnQ9XCJHZW5lcmFsbHkgTmVnYXRpdmVcIiBjb2xvcj1cIiM2QTZFNzBcIiAvPlxuICAgICAgICAgIDwvQ29sdW1uQ29udGFpbmVyPlxuICAgICAgICA8L1RhYj5cbiAgICAgIDwvVGhlbWVUYWI+XG4gICAgPC9UaHJlYWRDb250YWluZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVtbyhDb21tZW50VGhyZWFkKVxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IFRocmVhZENvbnRhaW5lciA9IHN0eWxlZCgnZGl2JylgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiA3MHZ3O1xuXG5gXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWBcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDUwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDVlbTtcblxuICBoZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEuNWVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW0tcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiAxZW07XG4gICAgaDEge1xuICAgICAgbWF4LXdpZHRoOiAzMHZ3O1xuICAgIH1cbiAgICBiIHtcbiAgICAgY29sb3I6IHZhcigtLW0tcHJpbWFyeS1jb2xvcilcbiAgICB9XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IENvbHVtbkNvbnRhaW5lciA9IHN0eWxlZCgnc2VjdGlvbicpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgLyogYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdyYXk7ICovXG4gIHdpZHRoOiAxMDB2dztcblxuICB1bDpmaXJzdC1jaGlsZCB7XG4gICAgLyogYm9yZGVyLXJpZ2h0OiAuMXB4IGRhc2hlZCByZ2IoNDgsNDgsNTApOyAqL1xuICB9XG5cbiAgIHVsOmxhc3QtY2hpbGQge1xuICAgIC8qIGJvcmRlci1sZWZ0OiAuMXB4IHNvbGlkIHJnYig0OCw0OCw1MCk7ICovXG4gIH1cblxuXG5gXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtcHJvcHMtbm8tc3ByZWFkaW5nICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlTWVtbywgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgdXNlUGFyYW1zLCB1c2VTZWFyY2hQYXJhbXMsIHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IFRvb2x0aXAsIE92ZXJsYXlUcmlnZ2VyIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuXG5pbXBvcnQgRW1iZWRlZFR3ZWV0IGZyb20gJy4uLy4uLy4uLy4uLy4uL0NvbW1vbkNvbXBvbmVudHMvVG9waWNDYXJkcy9Ud2VldENhcmQvSW5kZXgnXG5pbXBvcnQgVmlkZW9TaG93UGFnZSBmcm9tICcuLi8uLi8uLi8uLi8uLi9WaWRlb1Nob3dQYWdlL0luZGV4J1xuaW1wb3J0IEV4dGVybmFsQ29udGVudENhcmQgZnJvbSAnLi4vLi4vLi4vLi4vLi4vQ29tbW9uQ29tcG9uZW50cy9Ub3BpY0NhcmRzL0V4dGVybmFsQ29udGVudENhcmQvSW5kZXgnXG5pbXBvcnQgVXNlclByb3ZpZGVkTWVkaWFDYXJkIGZyb20gJy4uLy4uLy4uLy4uLy4uL0NvbW1vbkNvbXBvbmVudHMvVG9waWNDYXJkcy9Vc2VyUHJvdmlkZWRNZWRpYUNhcmQvSW5kZXgnXG5pbXBvcnQgVXNlckluZm9IZWFkZXIgZnJvbSAnLi4vLi4vLi4vLi4vLi4vQ29tbW9uQ29tcG9uZW50cy9Vc2VySW5mb0hlYWRlci9JbmRleCdcblxuaW1wb3J0IHVzZVNldElubmVySHRtbCBmcm9tICcuLi8uLi8uLi8uLi8uLi9ob29rcy91c2VTZXRJbm5lckh0bWwnXG5cbmltcG9ydCB7IGdldFRpbWVTaW5jZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2dlbmVyaWMvc3RyaW5nL2RhdGVGb3JtYXR0ZXInXG5cbmltcG9ydCB7XG4gIENvbnRhaW5lciwgRGVzY3JpcHRpb24sIFRvcGljU3VtbWFyeUNvbnRhaW5lciwgU3R5bGVkTG9uZ0Rvd25BcnJvdyxcbn0gZnJvbSAnLi9TdHlsZS9pbmRleCdcbmltcG9ydCB7IHV1aWRSZWdFeCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2dlbmVyaWMvcmVnZXgvdXVpZCdcblxuY29uc3QgVG9vbHRpcENvbXBvbmVudCA9ICh7IHRleHQsIHRpdGxlLCByZWZlcmVuY2UgfSkgPT4gKFxuICA8T3ZlcmxheVRyaWdnZXJcbiAgICBwbGFjZW1lbnQ9XCJ0b3BcIlxuICAgIG92ZXJsYXk9eyhcbiAgICAgIDxUb29sdGlwPlxuICAgICAgICA8c3Ryb25nPnt0aXRsZX08L3N0cm9uZz5cbiAgICAgIDwvVG9vbHRpcD5cbiAgICAgICl9XG4gID5cbiAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiByZWZlcmVuY2U/LmN1cnJlbnQ/LnNjcm9sbEludG9WaWV3KCl9Pnt0ZXh0fTwvc3Bhbj5cbiAgPC9PdmVybGF5VHJpZ2dlcj5cbilcblxuY29uc3QgSGVhZGVyID0gKHsgdG9waWMsIHVzZXIgfSkgPT4ge1xuICBsZXQgY29udGVudCA9IG51bGxcbiAgbGV0IHN1YnRvcGljQ29udGVudCA9IG51bGxcbiAgY29uc3QgeyAnKic6IHVybCB9ID0gdXNlUGFyYW1zKClcbiAgY29uc3QgW3N1YnRvcGljSWQsIGNvbW1lbnRJZF0gPSB1cmwgPyB1cmwubWF0Y2godXVpZFJlZ0V4KSA6IFtdXG5cbiAgY29uc3Qgc3VidG9waWMgPSB1c2VTZWxlY3RvcigocykgPT4gcy5zdWJ0b3BpY3MpW3N1YnRvcGljSWRdXG4gIGNvbnN0IHNob3dTdWJUb3BpYyA9IHN1YnRvcGljICYmIHN1YnRvcGljPy50aXRsZSAhPT0gJ0dlbmVyYWwnXG5cbiAgY29uc3QgY29tbW9uUHJvcHMgPSB1c2VNZW1vKCgpID0+ICh7XG4gICAgdG9waWMsIHVzZXIsIHNob3dMaW5rczogdHJ1ZSxcbiAgfSksIFt0b3BpYywgdXNlcl0pXG5cbiAgY29uc3QgZGVzY1JlZiA9IHVzZVJlZihudWxsKVxuICBjb25zdCBzdWJ0b3BpY1JlZiA9IHVzZVJlZihudWxsKVxuICBjb25zdCB0b3BpY1JlZiA9IHVzZVJlZihudWxsKVxuXG4gIHVzZVNldElubmVySHRtbChkZXNjUmVmLCB0b3BpYz8uZGVzY3JpcHRpb24pXG5cbiAgY29uc3QgY29tbW9uUHJvcHNTdWJUb3BpYyA9IHVzZU1lbW8oKCkgPT4gKHtcbiAgICB0b3BpYzogc3VidG9waWMsIHVzZXIsIHNob3dMaW5rczogdHJ1ZSxcbiAgfSksIFtzdWJ0b3BpYywgdXNlcl0pXG5cbiAgaWYgKHRvcGljPy50d2VldEh0bWwpIGNvbnRlbnQgPSA8RW1iZWRlZFR3ZWV0IHsuLi5jb21tb25Qcm9wc30gLz5cbiAgZWxzZSBpZiAodG9waWM/Lnl0VXJsKSBjb250ZW50ID0gPFZpZGVvU2hvd1BhZ2Ugey4uLmNvbW1vblByb3BzfSBzcmM9e3RvcGljLnl0VXJsLnJlcGxhY2UoJ3dhdGNoP3Y9JywgJ2VtYmVkLycpfSAvPlxuICBlbHNlIGlmICh0b3BpYz8udm9kVXJsIHx8IHRvcGljPy5pbWFnZVVybCkgY29udGVudCA9IDxVc2VyUHJvdmlkZWRNZWRpYUNhcmQgey4uLmNvbW1vblByb3BzfSAvPlxuICBlbHNlIGNvbnRlbnQgPSA8RXh0ZXJuYWxDb250ZW50Q2FyZCB7Li4uY29tbW9uUHJvcHN9IC8+XG4gIGlmIChzdWJ0b3BpYykge1xuICAgIGlmIChzdWJ0b3BpYz8udHdlZXRIdG1sKSBzdWJ0b3BpY0NvbnRlbnQgPSA8RW1iZWRlZFR3ZWV0IHsuLi5jb21tb25Qcm9wc1N1YlRvcGljfSAvPlxuICAgIGVsc2UgaWYgKHN1YnRvcGljPy55dFVybCkgc3VidG9waWNDb250ZW50ID0gPFZpZGVvU2hvd1BhZ2Ugey4uLmNvbW1vblByb3BzU3ViVG9waWN9IHNyYz17c3VidG9waWMueXRVcmwucmVwbGFjZSgnd2F0Y2g/dj0nLCAnZW1iZWQvJyl9IC8+XG4gICAgZWxzZSBpZiAoc3VidG9waWM/LnZvZFVybCB8fCBzdWJ0b3BpYz8uaW1hZ2VVcmwpIHtcbiAgICAgIHN1YnRvcGljQ29udGVudCA9IDxVc2VyUHJvdmlkZWRNZWRpYUNhcmQgey4uLmNvbW1vblByb3BzU3ViVG9waWN9IC8+XG4gICAgfSBlbHNlIHN1YnRvcGljQ29udGVudCA9IDxFeHRlcm5hbENvbnRlbnRDYXJkIHsuLi5jb21tb25Qcm9wc1N1YlRvcGljfSAvPlxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtZm9jdXMtaW5cIj5cbiAgICAgICAgeycgJ31cbiAgICAgICAge1xuICAgICAgICAgIHNob3dTdWJUb3BpYyA/IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIERpc2N1c3Npb24gUmVsYXRlZCBUbyBQYXJlbnRcbiAgICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgICAgPFRvb2x0aXBDb21wb25lbnQgdGV4dD1cIlRvcGljXCIgdGl0bGU9e3RvcGljPy50aXRsZX0gcmVmZXJlbmNlPXt0b3BpY1JlZn0gLz5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICB7J1dlXFwncmUgVGFsa2luZyBBYm91dCBUaGlzJ31cbiAgICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgICAgPFRvb2x0aXBDb21wb25lbnQgdGV4dD1cIlRvcGljXCIgdGl0bGU9e3RvcGljPy50aXRsZX0gcmVmZXJlbmNlPXt0b3BpY1JlZn0gLz5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgPC9oMT5cblxuICAgICAgPGRpdiByZWY9e3RvcGljUmVmfSBzdHlsZT17eyB3aWR0aDogJzkwJScgfX0+XG4gICAgICAgIHshc2hvd1N1YlRvcGljICYmIGNvbnRlbnQgfVxuICAgICAgICA8VG9waWNTdW1tYXJ5Q29udGFpbmVyIGhpZGRlbj17IXNob3dTdWJUb3BpY30+XG4gICAgICAgICAgPFVzZXJJbmZvSGVhZGVyXG4gICAgICAgICAgICBpY29uU3JjPXt0b3BpYz8uY3JlYXRlZEJ5SWNvblNyY31cbiAgICAgICAgICAgIHRpbWU9e2dldFRpbWVTaW5jZSh0b3BpYz8uY3JlYXRlZEF0KX1cbiAgICAgICAgICAgIHVzZXJuYW1lPXt0b3BpYz8uY3JlYXRlZEJ5fVxuICAgICAgICAgICAgdXNlcklkPXt0b3BpYz8udXNlcklkfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGltZyBzcmM9e3RvcGljPy50aHVtYkltZ1VybH0gYWx0PVwiTm90aGluZyBUbyBTaG93XCIgLz5cbiAgICAgICAgICA8RGVzY3JpcHRpb24+XG4gICAgICAgICAgICA8c3BhbiByZWY9e2Rlc2NSZWZ9IC8+XG4gICAgICAgICAgPC9EZXNjcmlwdGlvbj5cbiAgICAgICAgPC9Ub3BpY1N1bW1hcnlDb250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsgc3VidG9waWMgJiYgPFN0eWxlZExvbmdEb3duQXJyb3cgaGlkZGVuPXshc2hvd1N1YlRvcGljfSAvPiB9XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1mb2N1cy1pblwiIGhpZGRlbj17IXNob3dTdWJUb3BpY30+XG4gICAgICAgIHsnICd9XG4gICAgICAgIHsnV2VcXCdyZSBUYWxraW5nIEFib3V0IFRoaXMnfVxuICAgICAgICB7JyAnfVxuICAgICAgICA8VG9vbHRpcENvbXBvbmVudCB0ZXh0PVwiU3VidG9waWNcIiB0aXRsZT17c3VidG9waWM/LnRpdGxlfSByZWZlcmVuY2U9e3N1YnRvcGljUmVmfSAvPlxuICAgICAgPC9oMT5cbiAgICAgIDxkaXYgaGlkZGVuPXshc2hvd1N1YlRvcGljfSByZWY9e3N1YnRvcGljUmVmfSBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cbiAgICAgICAge3N1YnRvcGljQ29udGVudH1cbiAgICAgIDwvZGl2PlxuICAgIDwvQ29udGFpbmVyPlxuXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTG9uZ0Rvd25BcnJvdyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N2Z3Mvc3ZncydcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZCgnZGl2JylgIFxuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIwMCwyMDAsMjAwLDAuMjUpO1xuICBib3JkZXItYm90dG9tOiBub25lIDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDUwdnc7XG4gIHBhZGRpbmc6IDFlbTtcbiAgLyogYm9yZGVyLXRvcDogbm9uZTsgKi9cbiAgcGFkZGluZy10b3A6IDVlbTtcbiAgei1pbmRleDogOTk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGN0Y3Rjc7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBoMSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8qIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAqL1xuICAgIGxldHRlci1zcGFjaW5nOiAuMmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDN2dztcbiAgICAvKiBmb250LXdlaWdodDogYm9sZDsgKi9cbiAgfVxuICBzcGFuIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIHBhZGRpbmc6IDFlbSAwO1xuICB9XG5cbmBcblxuZXhwb3J0IGNvbnN0IExpbmtzQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWBcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgdWw6Zmlyc3QtY2hpbGQge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGdyYXk7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IERlc2NyaXB0aW9uID0gc3R5bGVkKCdwJylgXG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IC43dnc7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgcGFkZGluZzogMWVtO1xuYFxuXG5leHBvcnQgY29uc3QgVG9waWNTdW1tYXJ5Q29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWAgIFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAvKiBoZWlnaHQ6ICR7KHByb3BzKSA9PiAoYCR7cHJvcHMuaGVpZ2h0fXB4YCl9OyAqL1xuICAvKiB3aWR0aDogNDB2dzsgICAqL1xuICBtYXJnaW46IDJlbTtcbiAgYm9yZGVyLXJhZGl1czogLjVlbTtcbiAgYm94LXNoYWRvdzogIC01cHggLTVweCAxMHB4ICM1YTVhNWEsIDVweCA1cHggMTBweCAjZmZmZmZmO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuYFxuXG5leHBvcnQgY29uc3QgU3R5bGVkTG9uZ0Rvd25BcnJvdyA9IHN0eWxlZChMb25nRG93bkFycm93KWAgXG4gIG1hcmdpbi1ib3R0b206IDJ2dztcbmBcbiIsImltcG9ydCBSZWFjdCwgeyBtZW1vLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBDb21tZW50IGZyb20gJy4uL0NvbW1lbnQvSW5kZXgnXG5pbXBvcnQgeyBQYXJlbnRDb21tZW50Q29udGV4dCB9IGZyb20gJy4uL0NvbW1lbnRDb2x1bW4vSW5kZXgnXG5cbmNvbnN0IFBhcmVudENvbW1lbnQgPSAoeyB0b3BpY0lkIH0pID0+IHtcbiAgY29uc3QgdGFyZ2V0Q29tbWVudCA9IHVzZVNlbGVjdG9yKChzKSA9PiBzLmNvbW1lbnRzLnRhcmdldENvbW1lbnQpXG4gIGNvbnN0IGNvbW1lbnRSZWYgPSB1c2VDYWxsYmFjaygobm9kZSkgPT4ge1xuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICBub2RlLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG5cbiAgICA8UGFyZW50Q29tbWVudENvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIGNvbW1lbnRJZDogdGFyZ2V0Q29tbWVudD8uaWQsXG4gICAgICAgIHRvcGljSWQsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxDb21tZW50IGNvbW1lbnRSZWY9e2NvbW1lbnRSZWZ9IGNvbW1lbnREYXRhPXt0YXJnZXRDb21tZW50fSByZXBsaWVzPXtbXX0gLz5cbiAgICA8L1BhcmVudENvbW1lbnRDb250ZXh0LlByb3ZpZGVyPlxuXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVtbyhQYXJlbnRDb21tZW50KVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIG1lbW8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG5pbXBvcnQgeyBUYWIgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5cbmltcG9ydCB1c2VDYXRlZ29yaXplQ29tbWVudHMgZnJvbSAnLi4vaG9va3MvdXNlQ2F0ZWdvcml6ZUNvbW1lbnRzJ1xuaW1wb3J0IHVzZUJpbmREaXNwYXRjaCBmcm9tICcuLi8uLi8uLi8uLi8uLi9ob29rcy9yZWR1eC91c2VCaW5kRGlzcGF0Y2gnXG5cbmltcG9ydCBzdWJUb3BpY0FjdGlvbnMgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy9zdWJ0b3BpY3MnXG5pbXBvcnQgY29tbWVudEFjdGlvbnMgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy9jb21tZW50cydcbmltcG9ydCB0b3BpY0FjdGlvbnMgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy90b3BpY3MnXG5cbmltcG9ydCBDb21tZW50Q29sdW1uIGZyb20gJy4uL0NvbW1lbnRDb2x1bW4vSW5kZXgnXG5pbXBvcnQgeyBDb2x1bW5Db250YWluZXIsIFRocmVhZENvbnRhaW5lciB9IGZyb20gJy4vU3R5bGUvaW5kZXgnXG5pbXBvcnQgeyBUaGVtZVRhYiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL0NvbW1vbkNvbXBvbmVudHMvVGFicy9TdHlsZSdcbmltcG9ydCB7IExpbmUgfSBmcm9tICcuLi8uLi9TdHlsZSdcbmltcG9ydCB1c2VTZXNzaW9uVHlwZSBmcm9tICcuLi8uLi8uLi8uLi8uLi9ob29rcy9wZXJtaXNzaW9ucy91c2VTZXNzaW9uVHlwZSdcblxuY29uc3QgU3ViVG9waWNUaHJlYWQgPSAoKSA9PiB7XG4gIGNvbnN0IHsgc3ViVG9waWNJZCwgdG9waWNJZCB9ID0gdXNlUGFyYW1zKClcbiAgY29uc3QgeyBnZXRBbGxDb21tZW50cywgZ2V0VG9waWMgfSA9IHVzZUJpbmREaXNwYXRjaChcbiAgICBzdWJUb3BpY0FjdGlvbnMsIGNvbW1lbnRBY3Rpb25zLCB0b3BpY0FjdGlvbnMsXG4gIClcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuc2Vzc2lvbi5jdXJyZW50VXNlcilcbiAgY29uc3Qgc3VidG9waWMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnN1YnRvcGljcylbc3ViVG9waWNJZF1cbiAgY29uc3QgW2tleSwgc2V0S2V5XSA9IHVzZVN0YXRlKCdhbGwnKVxuICBjb25zdCBzZXNzaW9uVHlwZSA9IHVzZVNlc3Npb25UeXBlKClcblxuICBjb25zdCB7XG4gICAgUE9TSVRJVkU6IHBvc2l0aXZlQ29tbWVudHMsXG4gICAgTkVVVFJBTDogbmV1dHJhbENvbW1lbnRzLFxuICAgIE5FR0FUSVZFOiBuZWdhdGl2ZUNvbW1lbnRzLFxuICAgIGFsbDogYWxsQ29tbWVudHMsXG4gIH0gPSB1c2VDYXRlZ29yaXplQ29tbWVudHMoKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gY29uc3QgeyBzaWduZWRJblZpYUNsZXJrLCBzaWduZWRJblZpYURJRCwgc2lnbmVkSW5WaWFDaXZpYyB9ID0gc2Vzc2lvblR5cGVcbiAgICAvLyBpZiAoIXNpZ25lZEluVmlhQ2xlcmsgJiYgIXNpZ25lZEluVmlhRElEKSByZXR1cm4gbmV3IFByb21pc2UoKVxuICAgIGlmICh1c2VyPy51c2VySWQpIHtcbiAgICAgIGdldEFsbENvbW1lbnRzKHN1YlRvcGljSWQsIHVzZXIudXNlcklkKVxuICAgICAgZ2V0VG9waWModG9waWNJZCwgdXNlci51c2VySWQpXG4gICAgfVxuICB9LCBbdXNlcl0pXG4gIHJldHVybiAoXG5cbiAgICA8VGhyZWFkQ29udGFpbmVyPlxuICAgICAgPExpbmUgLz5cbiAgICAgIDxUaGVtZVRhYlxuICAgICAgICBhY3RpdmVLZXk9e2tleX1cbiAgICAgICAgb25TZWxlY3Q9eyhrKSA9PiBzZXRLZXkoayl9XG4gICAgICA+XG4gICAgICAgIDxUYWIgZXZlbnRLZXk9XCJhbGxcIiB0aXRsZT1cIkFsbFwiPlxuICAgICAgICAgIDxDb2x1bW5Db250YWluZXI+XG4gICAgICAgICAgICA8Q29tbWVudENvbHVtbiB0b3BpY0lkPXt0b3BpY0lkfSBudW1Db21tZW50cz17c3VidG9waWM/LmFsbENvbW1lbnRzfSBjb21tZW50cz17YWxsQ29tbWVudHN9IGNvbW1lbnRTZW50aW1lbnQ9XCJcIiBjb2xvcj1cIiM2QTZFNzBcIiAvPlxuICAgICAgICAgIDwvQ29sdW1uQ29udGFpbmVyPlxuICAgICAgICA8L1RhYj5cbiAgICAgICAgPFRhYiBldmVudEtleT1cInBvc2l0aXZlXCIgdGl0bGU9XCJHZW5lcmFsbHkgUG9zaXRpdmVcIj5cbiAgICAgICAgICA8Q29sdW1uQ29udGFpbmVyPlxuICAgICAgICAgICAgPENvbW1lbnRDb2x1bW4gdG9waWNJZD17dG9waWNJZH0gbnVtQ29tbWVudHM9e3N1YnRvcGljPy5wb3NpdGl2ZUNvbW1lbnRzfSBjb21tZW50cz17cG9zaXRpdmVDb21tZW50c30gY29tbWVudFNlbnRpbWVudD1cIkdlbmVyYWxseSBQb3NpdGl2ZVwiIGNvbG9yPVwiIzZBNkU3MFwiIC8+XG4gICAgICAgICAgPC9Db2x1bW5Db250YWluZXI+XG4gICAgICAgIDwvVGFiPlxuICAgICAgICA8VGFiIGV2ZW50S2V5PVwibmV1dHJhbFwiIHRpdGxlPVwiTmV1dHJhbFwiPlxuICAgICAgICAgIDxDb2x1bW5Db250YWluZXI+XG4gICAgICAgICAgICA8Q29tbWVudENvbHVtbiB0b3BpY0lkPXt0b3BpY0lkfSBudW1Db21tZW50cz17c3VidG9waWM/Lm5ldXRyYWxDb21tZW50c30gY29tbWVudHM9e25ldXRyYWxDb21tZW50c30gY29tbWVudFNlbnRpbWVudD1cIk5ldXRyYWxcIiBjb2xvcj1cIiM0NzRBNEZcIiAvPlxuICAgICAgICAgIDwvQ29sdW1uQ29udGFpbmVyPlxuICAgICAgICA8L1RhYj5cbiAgICAgICAgPFRhYiBldmVudEtleT1cIm5lZ2F0aXZlXCIgdGl0bGU9XCJHZW5lcmFsbHkgTmVnYXRpdmVcIj5cbiAgICAgICAgICA8Q29sdW1uQ29udGFpbmVyPlxuICAgICAgICAgICAgPENvbW1lbnRDb2x1bW4gdG9waWNJZD17dG9waWNJZH0gbnVtQ29tbWVudHM9e3N1YnRvcGljPy5uZWdhdGl2ZUNvbW1lbnRzfSBjb21tZW50cz17bmVnYXRpdmVDb21tZW50c30gY29tbWVudFNlbnRpbWVudD1cIkdlbmVyYWxseSBOZWdhdGl2ZVwiIGNvbG9yPVwiIzZBNkU3MFwiIC8+XG4gICAgICAgICAgPC9Db2x1bW5Db250YWluZXI+XG4gICAgICAgIDwvVGFiPlxuICAgICAgPC9UaGVtZVRhYj5cbiAgICA8L1RocmVhZENvbnRhaW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBtZW1vKFN1YlRvcGljVGhyZWFkKVxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IFRocmVhZENvbnRhaW5lciA9IHN0eWxlZCgnZGl2JylgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiA3MHZ3O1xuXG5gXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWBcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDUwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDVlbTtcblxuICBoZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEuNWVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW0tcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiAxZW07XG4gICAgaDEge1xuICAgICAgbWF4LXdpZHRoOiAzMHZ3O1xuICAgIH1cbiAgICBiIHtcbiAgICAgY29sb3I6IHZhcigtLW0tcHJpbWFyeS1jb2xvcilcbiAgICB9XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IENvbHVtbkNvbnRhaW5lciA9IHN0eWxlZCgnc2VjdGlvbicpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgLyogYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdyYXk7ICovXG4gIHdpZHRoOiAxMDB2dztcblxuICB1bDpmaXJzdC1jaGlsZCB7XG4gICAgLyogYm9yZGVyLXJpZ2h0OiAuMXB4IGRhc2hlZCByZ2IoNDgsNDgsNTApOyAqL1xuICB9XG5cbiAgIHVsOmxhc3QtY2hpbGQge1xuICAgIC8qIGJvcmRlci1sZWZ0OiAuMXB4IHNvbGlkIHJnYig0OCw0OCw1MCk7ICovXG4gIH1cblxuXG5gXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4J1xuLy8gaW1wb3J0IHsgUmlBcnJvd0Ryb3BSaWdodEZpbGwgfSBmcm9tICdyZWFjdC1pY29ucy9yaSdcbmltcG9ydCB7IFJpZ2h0VHJpYW5nbGVBcnJvd0ZpbGxTdmcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9zdmdzL3N2Z3MnXG5pbXBvcnQgdXNlR29Ub1N1YlRvcGljIGZyb20gJy4uLy4uL2hvb2tzL3VzZUdvVG9TdWJUb3BpYydcblxuaW1wb3J0IFRoZW1lQnV0dG9uIGZyb20gJy4uLy4uLy4uLy4uLy4uL0NvbW1vbkNvbXBvbmVudHMvQnV0dG9uL0luZGV4J1xuaW1wb3J0IFN1YlRvcGljc1RhYmxlIGZyb20gJy4uL1N1YlRvcGljc1RhYmxlL0luZGV4J1xuXG5pbXBvcnQgdWlBY3Rpb25DcmVhdG9ycyBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9yZWR1eC9hY3Rpb25zL3VpJ1xuaW1wb3J0IHsgQ1JFQVRFX1NVQl9UT1BJQyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL0FwcC9Nb2RhbC9JbmRleCdcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4vU3R5bGUvaW5kZXgnXG5cbmNvbnN0IFN1YlRvcGljc0xpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IHN1YnRvcGljcyA9IHVzZVNlbGVjdG9yKChzKSA9PiBzLnN1YnRvcGljcylcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXG4gIGNvbnN0IHsgb3Blbk1vZGFsIH0gPSBiaW5kQWN0aW9uQ3JlYXRvcnModWlBY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpXG4gIGNvbnN0IGdlblN1YlRvcGljID0gT2JqZWN0LnZhbHVlcyhzdWJ0b3BpY3MpPy5maW5kKCh7IHRpdGxlIH0pID0+IHRpdGxlID09PSAnR2VuZXJhbCcpXG4gIGNvbnN0IGdvVG9TdWJUb3BpYyA9IHVzZUdvVG9TdWJUb3BpYyhnZW5TdWJUb3BpYz8uaWQpXG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPGgxPlxuICAgICAgICBCcm93c2UgU29tZVxuICAgICAgICB7JyAnfVxuICAgICAgICA8Yj5TdWItVG9waWNzPC9iPlxuICAgICAgICB7JyAnfVxuICAgICAgICBvciBDcmVhdGUgWW91ciBPd24uLi5cbiAgICAgIDwvaDE+XG5cbiAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxuICAgICAgICA8VGhlbWVCdXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IG9wZW5Nb2RhbChDUkVBVEVfU1VCX1RPUElDKX0+XG4gICAgICAgICAgQ3JlYXRlIFN1YiBUb3BpYyArXG4gICAgICAgIDwvVGhlbWVCdXR0b24+XG4gICAgICAgIDxUaGVtZUJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17Z29Ub1N1YlRvcGljfT5cbiAgICAgICAgICBHZW5lcmFsIERpc2N1c3Npb25cbiAgICAgICAgICB7JyAnfVxuICAgICAgICAgIDxSaWdodFRyaWFuZ2xlQXJyb3dGaWxsU3ZnIHNpemU9ezUwfSAvPlxuICAgICAgICA8L1RoZW1lQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8U3ViVG9waWNzVGFibGUgLz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdWJUb3BpY3NMaXN0XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKCdzZWN0aW9uJylgXG5cbiAgd2lkdGg6IDcwdnc7XG4gIHBhZGRpbmctYm90dG9tOiAyMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICA+IGgxIHtcbiAgICBwYWRkaW5nOiAuNWVtIDJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMnZ3O1xuICAgIGJveC1zaGFkb3c6ICAtNXB4IC01cHggMTBweCAjNWE1YTVhLCA1cHggNXB4IDEwcHggI2ZmZmZmZjtcbiAgfVxuICBiIHtcbiAgICBjb2xvcjogdmFyKC0tbS1wcmltYXJ5LWNvbG9yKTtcbiAgfVxuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICB3aWR0aDogMTAwdndcbiAgfVxuYFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyBSb3V0ZSwgUm91dGVzIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuaW1wb3J0IFN1YlRvcGljVGhyZWFkIGZyb20gJy4uL1N1YlRvcGljVGhyZWFkL0luZGV4J1xuaW1wb3J0IFN1YlRvcGljc0xpc3QgZnJvbSAnLi4vU3ViVG9waWNzTGlzdC9JbmRleCdcbmltcG9ydCBDb21tZW50VGhyZWFkIGZyb20gJy4uL0NvbW1lbnRUaHJlYWQvSW5kZXgnXG5cbmltcG9ydCBXYXZ5QmFja2dyb3VuZCBmcm9tICcuLi8uLi8uLi8uLi8uLi9Db21tb25Db21wb25lbnRzL1dhdnlCYWNrZ3JvdW5kL0luZGV4J1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxSb3V0ZXM+XG4gICAgPFJvdXRlXG4gICAgICBwYXRoPVwiOnN1YlRvcGljSWQvY29tbWVudHMvOmNvbW1lbnRJZFwiXG4gICAgICBlbGVtZW50PXsoXG4gICAgICAgIDw+XG4gICAgICAgICAgPFdhdnlCYWNrZ3JvdW5kIGNvbG9yPVwiZ3JlZW5cIiB0b3A9XCIxMTUlXCIgLz5cbiAgICAgICAgICA8Q29tbWVudFRocmVhZCAvPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgLz5cbiAgICA8Um91dGVcbiAgICAgIHBhdGg9XCI6c3ViVG9waWNJZFwiXG4gICAgICBlbGVtZW50PXsoXG4gICAgICAgIDw+XG4gICAgICAgICAgPFdhdnlCYWNrZ3JvdW5kIGNvbG9yPVwiZ3JlZW5cIiB0b3A9XCIxMTUlXCIgLz5cbiAgICAgICAgICA8U3ViVG9waWNUaHJlYWQgLz5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIC8+XG4gICAgPFJvdXRlIHBhdGg9XCIvXCIgZWxlbWVudD17PFN1YlRvcGljc0xpc3QgLz59IC8+XG4gIDwvUm91dGVzPlxuKVxuIiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LXByb3BzLW5vLXNwcmVhZGluZyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCBTdWJUb3BpY3NJdGVtIGZyb20gJy4vU3ViVG9waWNzSXRlbS9JbmRleCdcblxuaW1wb3J0IHsgTGluZSB9IGZyb20gJy4uLy4uL1N0eWxlL2luZGV4J1xuaW1wb3J0IHtcbiAgQ29udGFpbmVyLCBUYWJsZUhlYWRlciwgVGFibGUsIENvbEhlYWRlciwgQ29sSXRlbSxcbn0gZnJvbSAnLi9TdHlsZSdcblxuY29uc3QgU3ViVG9waWNzVGFibGUgPSAoKSA9PiB7XG4gIC8vIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnNlc3Npb24uY3VycmVudFVzZXIpXG4gIGNvbnN0IHN1YnRvcGljcyA9IE9iamVjdC52YWx1ZXModXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5zdWJ0b3BpY3MpKVxuICBjb25zdCB7IHRvcGljSWQgfSA9IHVzZVBhcmFtcygpXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxMaW5lIC8+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8VGFibGVIZWFkZXI+XG4gICAgICAgICAgPGgxPlxuICAgICAgICAgICAgPHNwYW4+Q292aWQ8L3NwYW4+XG4gICAgICAgICAgICA8c3Bhbj5TdWIgVG9waWNzPC9zcGFuPlxuICAgICAgICAgIDwvaDE+XG4gICAgICAgIDwvVGFibGVIZWFkZXI+XG4gICAgICAgIDxUYWJsZT5cbiAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICA8Q29sSGVhZGVyPlxuICAgICAgICAgICAgICA8Q29sSXRlbT4gQ3JlYXRlZCBCeSA8L0NvbEl0ZW0+XG4gICAgICAgICAgICAgIDxDb2xJdGVtPiBUaXRsZSA8L0NvbEl0ZW0+XG4gICAgICAgICAgICAgIDxDb2xJdGVtPiBDb21tZW50cyA8L0NvbEl0ZW0+XG4gICAgICAgICAgICA8L0NvbEhlYWRlcj5cbiAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN1YnRvcGljcy5tYXAoKHN1YnRvcGljKSA9PiAoXG4gICAgICAgICAgICAgIDxTdWJUb3BpY3NJdGVtXG4gICAgICAgICAgICAgICAga2V5PXtzdWJ0b3BpYy5pZH1cbiAgICAgICAgICAgICAgICB7Li4uc3VidG9waWN9XG4gICAgICAgICAgICAgICAgc3VidG9waWM9e3N1YnRvcGljfVxuICAgICAgICAgICAgICAgIHRvcGljSWQ9e3RvcGljSWR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKVxuICAgICAgICAgIH1cbiAgICAgICAgPC9UYWJsZT5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN1YlRvcGljc1RhYmxlXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWAgXG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDc1JTtcbiAgYm94LXNoYWRvdzogMCAwIDQwcHggLTEwcHggcmdiYSgwLCAwLCAwLCAuNCk7XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgfVxuXG5gXG5cbmV4cG9ydCBjb25zdCBUYWJsZUhlYWRlciA9IHN0eWxlZCgnaGVhZGVyJylgIFxuICAgIGhlaWdodDogMTB2aDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLW0tcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yKSwgIzgzYWY5Yik7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC8qIGJvcmRlci1yYWRpdXM6IDEycHggMTJweCAwIDA7ICovXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvKiBib3JkZXItcmFkaXVzOiAxMnB4OyAqL1xuICAgIGgxIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB6LWluZGV4OiAyO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgXG4gICAgICBzcGFuIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgICBcbiAgICAgIHNwYW46Zmlyc3QtY2hpbGQge1xuICAgICAgICBmb250LXNpemU6IDEuNXZ3O1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogNi41cHg7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgICBmb250LXNpemU6IDMuNXZ3O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIHNwYW46bGFzdC1jaGlsZCB7XG4gICAgICAgIGZvbnQtc2l6ZTogLjh2dztcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDMuNTVweDtcbiAgICAgICAgb3BhY2l0eTogLjg1O1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgICBmb250LXNpemU6IDMuM3Z3O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIC5sZWFkZXJib2FyZF9faWNvbiB7XG4gICAgICBmaWxsOiAjZmZmO1xuICAgICAgb3BhY2l0eTogLjM1O1xuICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIH1cbmBcblxuZXhwb3J0IGNvbnN0IFRhYmxlID0gc3R5bGVkKCd0YWJsZScpYCBcbiAgYm9yZGVyLXJhZGl1czogMCAwIDEycHggMTJweDtcbiAgcGFkZGluZzogMTVweCAxNXB4IDIwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHJvdy1nYXA6IDhweDtcbiAgd2lkdGg6IDEwMCU7XG4gIFxuYFxuXG5leHBvcnQgY29uc3QgQ29sSGVhZGVyID0gc3R5bGVkKCd0cicpYFxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4IDMwcHggMTBweCAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1hY2NlbnQpO1xuICBib3JkZXItcmFkaXVzOiAuNXZ3O1xuXG5gXG5cbmV4cG9ydCBjb25zdCBDb2xJdGVtID0gc3R5bGVkKCd0aCcpYFxuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogLjF2dztcbiAgZm9udC1zaXplOiAxdnc7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICBmb250LXNpemU6IDJ2dztcbiAgfVxuXG5gXG5cbmV4cG9ydCBjb25zdCBSb3cgPSBzdHlsZWQoJ3RyJylgIFxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHggMzBweCAxMHB4IDEwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXItcmFkaXVzOiAuNXZ3O1xuICAgIGJveC1zaGFkb3c6IDAgNXB4IDdweCAtMXB4IHJnYmEoNTEsIDUxLCA1MSwgMC4yMyk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMjVzIGN1YmljLWJlemllciguNywuOTgsLjg2LC45OCksIGJveC1zaGFkb3cgLjI1cyBjdWJpYy1iZXppZXIoLjcsLjk4LC44NiwuOTgpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgei1pbmRleDogOTk5OTk5OTk5O1xuICAgIFxuICAgICY6aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgYm94LXNoYWRvdzogMCA5cHggNDdweCAxMXB4IHJnYmEoNTEsIDUxLCA1MSwgMC4xOCk7XG4gICAgfVxuICBcbiAgXG5gXG5cbmV4cG9ydCBjb25zdCBSb3dJdGVtID0gc3R5bGVkKCd0ZCcpYCBcbiAgLyogb3BhY2l0eTogLjg7ICovXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjOTc5Y2IwO1xuICBmb250LXdlaWdodDogNjAwO1xuICBcbiAgbGV0dGVyLXNwYWNpbmc6IC4xdnc7ICAgIFxuXG4gIGZvbnQtc2l6ZTogMXZ3O1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgZm9udC1zaXplOiAydnc7XG4gIH1cblxuICBpbWcge1xuICAgIHdpZHRoOiAydnc7XG4gICAgaGVpZ2h0OiAydnc7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgd2lkdGg6IDR2dztcbiAgICAgIGhlaWdodDogNHZ3O1xuICAgIH1cbiAgfVxuYFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHVzZUdvVG9Db21tZW50VGhyZWFkIGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2hvb2tzL3JvdXRpbmcvdXNlR29Ub0NvbW1lbnRUaHJlYWQnXG5cbmltcG9ydCB7IFJvdywgUm93SXRlbSB9IGZyb20gJy4uL1N0eWxlL2luZGV4J1xuXG5jb25zdCBTdWJUb3BpY3NJdGVtID0gKHtcbiAgaWQsIHRpdGxlLCBjcmVhdGVkQnksIGFsbENvbW1lbnRzLCB0b3BpY0lkLCBjcmVhdGVkQnlJY29uU3JjLFxufSkgPT4ge1xuICBjb25zdCBnb1RvQ29tbWVudFRocmVhZCA9IHVzZUdvVG9Db21tZW50VGhyZWFkKHRvcGljSWQsIGlkKVxuICByZXR1cm4gKFxuICAgIDx0Ym9keT5cbiAgICAgIDxSb3cgb25DbGljaz17Z29Ub0NvbW1lbnRUaHJlYWR9PlxuICAgICAgICA8Um93SXRlbT5cbiAgICAgICAgICB7JyAnfVxuICAgICAgICAgIDxpbWcgc3JjPXtjcmVhdGVkQnlJY29uU3JjIHx8ICdodHRwczovL2NpdmlsLWRldi5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9wcm9maWxlX2ltZ18xLnBuZyd9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgeycgJ31cbiAgICAgICAgICB7YCR7Y3JlYXRlZEJ5LnN1YnN0cmluZygwLCAxMil9Li4uYH1cbiAgICAgICAgPC9Sb3dJdGVtPlxuICAgICAgICA8Um93SXRlbT57dGl0bGV9PC9Sb3dJdGVtPlxuICAgICAgICA8Um93SXRlbT57YWxsQ29tbWVudHN9PC9Sb3dJdGVtPlxuICAgICAgPC9Sb3c+XG4gICAgPC90Ym9keT5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdWJUb3BpY3NJdGVtXG4iLCJpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5jb25zdCBzZW50aW1lbnRzID0gbmV3IFNldChbJ1BPU0lUSVZFJywgJ05FVVRSQUwnLCAnTkVHQVRJVkUnXSlcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCBjb21tZW50cyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY29tbWVudHMubGlzdClcbiAgcmV0dXJuIHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IGNhdGVnb3JpemVkQ29tbWVudHMgPSB7XG4gICAgICBQT1NJVElWRTogW10sXG4gICAgICBORVVUUkFMOiBbXSxcbiAgICAgIE5FR0FUSVZFOiBbXSxcbiAgICAgIGFsbDogY29tbWVudHMsXG4gICAgfVxuICAgIGNvbW1lbnRzLmZvckVhY2goKGNvbW1lbnQpID0+IHtcbiAgICAgIGlmIChzZW50aW1lbnRzLmhhcyhjb21tZW50LmRhdGE/LnNlbnRpbWVudCkpIHtcbiAgICAgICAgY2F0ZWdvcml6ZWRDb21tZW50c1tjb21tZW50LmRhdGE/LnNlbnRpbWVudF0ucHVzaChjb21tZW50KVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGNhdGVnb3JpemVkQ29tbWVudHNcbiAgfSwgW2NvbW1lbnRzXSlcbn1cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmV4cG9ydCBkZWZhdWx0IChpZCkgPT4ge1xuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKClcbiAgcmV0dXJuIHVzZUNhbGxiYWNrKCgpID0+IG5hdmlnYXRlKGlkKSwgW2lkXSlcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgVXNlckluZm9ybWF0aW9uRGlzcGxheSBmcm9tICcuLi8uLi8uLi9Vc2VySW5mb3JtYXRpb25EaXNwbGF5L0luZGV4J1xuaW1wb3J0IHtcbiAgTWlkZGxlLCBMZWZ0LCBSaWdodCwgSG9tZVBhZ2VHcmlkLFxufSBmcm9tICcuLi8uLi9TdHlsZSdcbmltcG9ydCBOb3RpZmljYXRpb25JdGVtIGZyb20gJy4vY29tcG9uZW50cy9Ob3RpZmljYXRpb25JdGVtL0luZGV4J1xuaW1wb3J0IHtcbiAgQm9yZGVyQ29udGFpbmVyLCBOb3RpZmljYXRpb25MaXN0LCBDb250YWluZXIsIEhlYWRlcixcbn0gZnJvbSAnLi9TdHlsZSdcblxuY29uc3QgVHJpYnVuYWxOb3RpZmljYXRpb25zID0gKCkgPT4ge1xuICBjb25zdCBub3RpZmljYXRpb25zID0gdXNlU2VsZWN0b3IoKHMpID0+IHMubm90aWZpY2F0aW9ucy50cmlidW5hbE5vdGlmaWNhdGlvbnNMaXN0KVxuICByZXR1cm4gKFxuICAgIDxIb21lUGFnZUdyaWQ+XG4gICAgICA8TGVmdD5cbiAgICAgICAgPFVzZXJJbmZvcm1hdGlvbkRpc3BsYXkgLz5cbiAgICAgIDwvTGVmdD5cbiAgICAgIDxNaWRkbGU+XG5cbiAgICAgICAgPENvbnRhaW5lciBpZD1cIm5vdGlmaWNhdGlvbnMtY29udGFpbmVyXCI+XG5cbiAgICAgICAgICA8Qm9yZGVyQ29udGFpbmVyPlxuICAgICAgICAgICAgPEhlYWRlcj5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgUmVjZW50IE5vdGlmaWNhdGlvbnNcbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9IZWFkZXI+XG4gICAgICAgICAgICA8Tm90aWZpY2F0aW9uTGlzdD5cbiAgICAgICAgICAgICAge25vdGlmaWNhdGlvbnMubWFwKChub3RpZmljYXRpb24pID0+IChcbiAgICAgICAgICAgICAgICA8Tm90aWZpY2F0aW9uSXRlbSBrZXk9e25vdGlmaWNhdGlvbi5pZH0gbm90aWZpY2F0aW9uPXtub3RpZmljYXRpb259IC8+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9Ob3RpZmljYXRpb25MaXN0PlxuICAgICAgICAgIDwvQm9yZGVyQ29udGFpbmVyPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvTWlkZGxlPlxuICAgICAgPFJpZ2h0PlxuICAgICAgICA8c3Bhbj4uPC9zcGFuPlxuICAgICAgPC9SaWdodD5cbiAgICA8L0hvbWVQYWdlR3JpZD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmlidW5hbE5vdGlmaWNhdGlvbnNcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBCb3JkZXJDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpYFxuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICBib3JkZXItdG9wOiBub25lO1xuICB6LWluZGV4OiA5OTk5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLW5hdi1zaXplKSk7XG5cbmBcblxuZXhwb3J0IGNvbnN0IE5vdGlmaWNhdGlvbkxpc3QgPSBzdHlsZWQoJ3VsJylgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgcGFkZGluZzogMDtcbiAgcGFkZGluZy1ib3R0b206IDMwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMEYyRjU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXG5gXG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbmBcblxuZXhwb3J0IGNvbnN0IEhlYWRlciA9IHN0eWxlZCgnaGVhZGVyJylgIFxuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XG4gIHBhZGRpbmc6IDJ2dyAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBwIHtcbiAgICBtYXJnaW46IDAgMXZ3O1xuICAgIGZvbnQtc2l6ZTogMS4xdnc7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5gXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIFZlcnRpY2FsTWVudURvdHNTdmcsIERlbGV0ZVN2ZywgUmVhZFN2Zyxcbn0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc3Zncy9zdmdzJ1xuaW1wb3J0IG5vdGlmaWNhdGlvbkFjdGlvbkNyZWF0b3JzIGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvbm90aWZpY2F0aW9ucy9pbmRleCdcbmltcG9ydCB1c2VCaW5kRGlzcGF0Y2ggZnJvbSAnLi4vLi4vLi4vLi4vLi4vaG9va3MvcmVkdXgvdXNlQmluZERpc3BhdGNoJ1xuaW1wb3J0IHtcbiAgTWVudVRpbWVDb250YWluZXIsIFRpbWUsIE1lbnVJY29uQ29udGFpbmVyLCBBY3Rpb25NZW51LCBBY3Rpb25NZW51SXRlbSxcbn0gZnJvbSAnLi9TdHlsZS9pbmRleCdcblxuZXhwb3J0IGNvbnN0IE1lbnVUaW1lID0gKHsgdGltZSwgaWQsIGV2ZW50VHlwZSB9KSA9PiB7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3Qge1xuICAgIHVwZGF0ZU5vdGlmaWNhdGlvblRvUmVhZCxcbiAgICBkZWxldGVOb3RpZmljYXRpb24sXG4gIH0gPSB1c2VCaW5kRGlzcGF0Y2gobm90aWZpY2F0aW9uQWN0aW9uQ3JlYXRvcnMpXG5cbiAgcmV0dXJuIChcbiAgICA8TWVudVRpbWVDb250YWluZXI+XG4gICAgICA8TWVudUljb25Db250YWluZXIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICBzZXRJc09wZW4oKHByZXYpID0+ICFwcmV2KVxuICAgICAgICBjb25zdCBldmVudExpc3RlbmVyID0gKCkgPT4ge1xuICAgICAgICAgIHNldElzT3BlbigocHJldikgPT4gIXByZXYpXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGlmaWNhdGlvbnMtY29udGFpbmVyJykucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudExpc3RlbmVyKVxuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGlmaWNhdGlvbnMtY29udGFpbmVyJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudExpc3RlbmVyKVxuICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPFZlcnRpY2FsTWVudURvdHNTdmcgLz5cbiAgICAgICAgPEFjdGlvbk1lbnUgaXNPcGVuPXtpc09wZW59IG9uQ2xpY2s9eyhlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfT5cbiAgICAgICAgICA8QWN0aW9uTWVudUl0ZW0gb25DbGljaz17KCkgPT4gdXBkYXRlTm90aWZpY2F0aW9uVG9SZWFkKGV2ZW50VHlwZSwgaWQpfT5cbiAgICAgICAgICAgIDxSZWFkU3ZnIC8+XG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgTWFyayBBcyBSZWFkXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9BY3Rpb25NZW51SXRlbT5cbiAgICAgICAgICA8QWN0aW9uTWVudUl0ZW0gb25DbGljaz17KCkgPT4gZGVsZXRlTm90aWZpY2F0aW9uKGV2ZW50VHlwZSwgaWQpfT5cbiAgICAgICAgICAgIDxEZWxldGVTdmcgLz5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICBEZWxldGUgTm90aWZpY2F0aW9uXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9BY3Rpb25NZW51SXRlbT5cbiAgICAgICAgPC9BY3Rpb25NZW51PlxuICAgICAgPC9NZW51SWNvbkNvbnRhaW5lcj5cbiAgICAgIDxUaW1lPnt0aW1lfTwvVGltZT5cbiAgICA8L01lbnVUaW1lQ29udGFpbmVyPlxuICApXG59XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgTWVudVRpbWVDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpYCBcbiAgei1pbmRleDogOTk5OTk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIHBhZGRpbmc6IDVweCAwO1xuICB3aWR0aDogOCU7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgbGlnaHRncmF5O1xuICBib3JkZXItY29sb3I6IHJnYmEoMjAwLDIwMCwyMDAsMC4yNSk7XG5cbmBcblxuZXhwb3J0IGNvbnN0IFRpbWUgPSBzdHlsZWQoJ3NwYW4nKWBcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtc2l6ZTogMXZ3O1xuICBwYWRkaW5nOiAwIDEwcHg7XG5gXG5leHBvcnQgY29uc3QgTWVudUljb25Db250YWluZXIgPSBzdHlsZWQoJ2RpdicpYCBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IC4xdnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogIzJjZGQ5YjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZjdmMDtcbiAgYm9yZGVyLWNvbG9yOiAjZDhmN2ViO1xuICB0cmFuc2l0aW9uOiBhbGwgMXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgOmhvdmVyIHtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC44NSk7XG4gIH1cblxuYFxuXG5leHBvcnQgY29uc3QgQWN0aW9uTWVudSA9IHN0eWxlZCgndWwnKWBcbiAgei1pbmRleDogOTk5OTk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlcjogLjVweCBzb2xpZCBsaWdodGdyYXk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyMDAsMjAwLDIwMCwwLjI1KSA7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01NSUsIDU1JSkgO1xuICBkaXNwbGF5OiAkeyhwcm9wcykgPT4gKHByb3BzLmlzT3BlbiA/ICdibG9jaycgOiAnbm9uZScpfSA7XG4gIHdpZHRoOiAxMHZ3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCByZ2IoNjAgNjAgNjAgLyAxMCUpO1xuICBib3JkZXItcmFkaXVzOiAgLjVlbTtcbiAgbWFyZ2luOiAwO1xuXG5gXG5cbmV4cG9ydCBjb25zdCBBY3Rpb25NZW51SXRlbSA9IHN0eWxlZCgnbGknKWBcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiBibGFjaztcbiAgdHJhbnNpdGlvbjogbm9uZTtcbiAgOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tLWJ0bi1ob3Zlci1jb2xvcik7XG5cbiAgfVxuXG4gIHNwYW4ge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAuNjV2dyAhaW1wb3J0YW50O1xuICB9XG5cbmBcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFRyaWJ1bmFsU2VsZWN0aW9uLCBVc2VyQ29udGVudFJlcG9ydGVkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vZW51bXMvbm90aWZpY2F0aW9uX3R5cGVzJ1xuaW1wb3J0IFRyaWJ1bmFsU2VsZWN0aW9uTm90aWZpY2F0aW9uIGZyb20gJy4uL1RyaWJ1bmFsU2VsZWN0aW9uTm90aWZpY2F0aW9uL0luZGV4J1xuaW1wb3J0IFVzZXJDb250ZW50UmVwb3J0ZWROb3RpZmljYXRpb24gZnJvbSAnLi4vVXNlckNvbnRlbnRSZXBvcnRlZE5vdGlmaWNhdGlvbi9JbmRleCdcbmltcG9ydCB7XG4gIEl0ZW0sXG59IGZyb20gJy4vU3R5bGUnXG5cbmNvbnN0IE5vdGlmaWNhdGlvbkl0ZW0gPSAoeyBub3RpZmljYXRpb24gfSkgPT4ge1xuICBsZXQgSXRlbUNvbXBvbmVudFxuICBzd2l0Y2ggKG5vdGlmaWNhdGlvbi5ldmVudFR5cGUpIHtcbiAgICBjYXNlIFRyaWJ1bmFsU2VsZWN0aW9uOlxuICAgICAgSXRlbUNvbXBvbmVudCA9IFRyaWJ1bmFsU2VsZWN0aW9uTm90aWZpY2F0aW9uXG4gICAgICBicmVha1xuICAgIGNhc2UgVXNlckNvbnRlbnRSZXBvcnRlZDpcbiAgICAgIEl0ZW1Db21wb25lbnQgPSBVc2VyQ29udGVudFJlcG9ydGVkTm90aWZpY2F0aW9uXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICBicmVha1xuICB9XG4gIHJldHVybiAoXG4gICAgPEl0ZW0+XG4gICAgICA8SXRlbUNvbXBvbmVudCBub3RpZmljYXRpb249e25vdGlmaWNhdGlvbn0gLz5cbiAgICA8L0l0ZW0+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTm90aWZpY2F0aW9uSXRlbVxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IEl0ZW0gPSBzdHlsZWQoJ2xpJylgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE1dmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAvKiBjdXJzb3I6IHBvaW50ZXI7ICovXG4gIHBhZGRpbmctcmlnaHQ6IC41dnc7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICA6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGOEY5RkE7XG4gIH1cbmBcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBMZWZ0Q29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWBcbiAgd2lkdGg6IDIyJTtcbiAgaGVpZ2h0OiAxMDAlIDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaW1nIHtcbiAgICBoZWlnaHQ6IDV2aDtcbiAgfVxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyMDAsMjAwLDIwMCwwLjI1KTtcbiAgOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyO1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBSaWdodENvbnRhaW5lciA9IHN0eWxlZCgnZGl2JylgXG4gIHdpZHRoOiAyMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGltZyB7XG4gICAgaGVpZ2h0OiA1dmg7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IE1pZGRsZUNvbnRhaW5lciA9IHN0eWxlZCgnZGl2JylgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGltZyB7XG4gICAgaGVpZ2h0OiAzdmg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogOHB4O1xuICB9XG4gIHN2ZyB7XG4gICAgaGVpZ2h0OiAzdmg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogOHB4O1xuICB9XG4gIGgzIHtcbiAgICBmb250LXNpemU6IC45dnc7XG4gIH1cbiAgYSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IHZhcigtLW0tcHJpbWFyeS1idG4tY29sb3IpO1xuICAgIDpob3ZlciB7XG4gICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC44NSk7XG4gICAgfVxuICB9XG5gXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IE1lbnVUaW1lIH0gZnJvbSAnLi4vTWVudVRpbWUvSW5kZXgnXG5pbXBvcnQgeyBnZXRUaW1lU2luY2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9nZW5lcmljL3N0cmluZy9kYXRlRm9ybWF0dGVyJ1xuaW1wb3J0IHsgTWlkZGxlQ29udGFpbmVyIH0gZnJvbSAnLi4vU3R5bGUnXG5cbmltcG9ydCB7IFRyaWJ1bmFsU2VsZWN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vZW51bXMvbm90aWZpY2F0aW9uX3R5cGVzJ1xuaW1wb3J0IHsgR2F2ZWwyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc3Zncy9zdmdzJ1xuXG5jb25zdCBUcmlidW5hbFNlbGVjdGlvbk5vdGlmaWNhdGlvbiA9ICh7IG5vdGlmaWNhdGlvbiB9KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBjcmVhdGVkQXQsIGlkLCBjb250ZW50VHlwZSwgcmVwb3J0ZWRDb250ZW50SWQsXG4gIH0gPSBub3RpZmljYXRpb25cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE1pZGRsZUNvbnRhaW5lcj5cbiAgICAgICAgPEdhdmVsMiBzaXplPVwiNXZoXCIgLz5cbiAgICAgICAgPGgzPlxuICAgICAgICAgIFlvdSBoYXZlIGJlZW4gc2VsZWN0ZWQgZm9yXG4gICAgICAgICAgeycgJ31cbiAgICAgICAgICA8TGluayB0bz17YC90cmlidW5hbC8ke2NvbnRlbnRUeXBlfS8ke3JlcG9ydGVkQ29udGVudElkfWB9PlxuICAgICAgICAgICAgQ29tbWVudCFcbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvaDM+XG5cbiAgICAgIDwvTWlkZGxlQ29udGFpbmVyPlxuICAgICAgPE1lbnVUaW1lXG4gICAgICAgIHRpbWU9e2dldFRpbWVTaW5jZShjcmVhdGVkQXQpfVxuICAgICAgICBpZD17aWR9XG4gICAgICAgIGV2ZW50VHlwZT17VHJpYnVuYWxTZWxlY3Rpb259XG4gICAgICAvPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyaWJ1bmFsU2VsZWN0aW9uTm90aWZpY2F0aW9uXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IE1lbnVUaW1lIH0gZnJvbSAnLi4vTWVudVRpbWUvSW5kZXgnXG5pbXBvcnQgeyBnZXRUaW1lU2luY2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9nZW5lcmljL3N0cmluZy9kYXRlRm9ybWF0dGVyJ1xuaW1wb3J0IHsgTWlkZGxlQ29udGFpbmVyIH0gZnJvbSAnLi4vU3R5bGUnXG5cbmltcG9ydCB7IFVzZXJDb250ZW50UmVwb3J0ZWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9lbnVtcy9ub3RpZmljYXRpb25fdHlwZXMnXG5pbXBvcnQgeyBHYXZlbDIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9zdmdzL3N2Z3MnXG5cbmNvbnN0IFVzZXJDb250ZW50UmVwb3J0ZWROb3RpZmljYXRpb24gPSAoeyBub3RpZmljYXRpb24gfSkgPT4ge1xuICBjb25zdCB7XG4gICAgY3JlYXRlZEF0LCBpZCwgY29udGVudFR5cGUsIHJlcG9ydGVkQ29udGVudElkLFxuICB9ID0gbm90aWZpY2F0aW9uXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxNaWRkbGVDb250YWluZXI+XG4gICAgICAgIDxHYXZlbDIgc2l6ZT1cIjV2aFwiIC8+XG4gICAgICAgIDxoMz5cbiAgICAgICAgICBZb3VyXG4gICAgICAgICAgeycgJ31cbiAgICAgICAgICA8TGluayB0bz17YC90cmlidW5hbC8ke2NvbnRlbnRUeXBlfS8ke3JlcG9ydGVkQ29udGVudElkfWB9PlxuICAgICAgICAgICAgQ29udGVudFxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICB7JyAnfVxuICAgICAgICAgIEhhcyBCZWVuIFJlcG9ydGVkIEFuZCBJcyBTdWJqZWN0IFRvIENvbW11bml0eSBUcmlidW5hbCBSZXZpZXchXG4gICAgICAgICAgeycgJ31cbiAgICAgICAgICB7J1xcbid9XG4gICAgICAgICAgPExpbmsgdG89e2AvdHJpYnVuYWwvJHtjb250ZW50VHlwZX0vJHtyZXBvcnRlZENvbnRlbnRJZH1gfT5cbiAgICAgICAgICAgIENsaWNrIFRvIERlZmVuZCBZb3Vyc2VsZiFcbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvaDM+XG4gICAgICA8L01pZGRsZUNvbnRhaW5lcj5cbiAgICAgIDxNZW51VGltZVxuICAgICAgICB0aW1lPXtnZXRUaW1lU2luY2UoY3JlYXRlZEF0KX1cbiAgICAgICAgaWQ9e2lkfVxuICAgICAgICBldmVudFR5cGU9e1VzZXJDb250ZW50UmVwb3J0ZWR9XG4gICAgICAvPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJDb250ZW50UmVwb3J0ZWROb3RpZmljYXRpb25cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWNJdGVtIGZyb20gJy4vY29tcG9uZW50cy9SZWNJdGVtL0luZGV4J1xuXG5pbXBvcnQgeyBSZWNMaXN0Q29udGFpbmVyIH0gZnJvbSAnLi9TdHlsZSdcblxuY29uc3QgUmVjb21tZW5kYXRpb25zTGlzdCA9ICh7IHJlY3MgfSkgPT4gKFxuICA8UmVjTGlzdENvbnRhaW5lcj5cbiAgICB7XG4gICAgICAgIHJlY3MubWFwKChyZWMsIGlkeCkgPT4gPFJlY0l0ZW0ga2V5PXtTdHJpbmcoaWR4KX0gcmVjPXtyZWN9IC8+KVxuICAgICAgfVxuICA8L1JlY0xpc3RDb250YWluZXI+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IFJlY29tbWVuZGF0aW9uc0xpc3RcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBSZWNMaXN0Q29udGFpbmVyID0gc3R5bGVkKCd1bCcpYFxuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG5gXG4iLCJpbXBvcnQgUmVhY3QsIHsgbWVtbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHVzZUdldExpbmtNZXRhRGF0YUVmZmVjdCBmcm9tICcuLi8uLi8uLi9Ub3BpY0Zvcm0vY29tcG9uZW50cy9MaW5rTWV0YURhdGEvaG9va3MvdXNlR2V0TGlua01ldGFEYXRhRWZmZWN0J1xuaW1wb3J0IHVzZU5hdmlnYXRlVG9QYWdlIGZyb20gJy4vaG9va3MvdXNlTmF2aWdhdGVUb1BhZ2UnXG5cbmltcG9ydCB7XG4gIENvbnRhaW5lciwgVGh1bWIsIERlc2NyaXB0aW9uQ29udGFpbmVyLCBUaXRsZSwgU3ViVGl0bGUsIE9HSW1hZ2UsXG59IGZyb20gJy4vU3R5bGUvaW5kZXgnXG5cbmNvbnN0IFJlY0l0ZW0gPSAoeyByZWMgfSkgPT4ge1xuICBsZXQgY29udGVudCA9IG51bGxcbiAgY29uc3QgeyB0b3BpYywgc3ViVG9waWMgfSA9IHJlY1xuICBjb25zdCBtZXRhRGF0YSA9IHVzZUdldExpbmtNZXRhRGF0YUVmZmVjdCh7IGNvbnRlbnRVcmw6IHJlYy5leHRlcm5hbFJlY29tbWVuZGVkQ29udGVudCB9KVxuICBjb25zdCBuYXZpZ2F0ZVRvUGFnZSA9IHVzZU5hdmlnYXRlVG9QYWdlKHJlYylcbiAgaWYgKHRvcGljKSB7XG4gICAgaWYgKHRvcGljPy55dFVybCkge1xuICAgICAgY29uc3QgcmVnRXhwID0gL14uKih5b3V0dVxcLmJlXFwvfHZcXC98dVxcL1xcd1xcL3xlbWJlZFxcL3x3YXRjaFxcP3Y9fFxcJnY9KShbXiNcXCZcXD9dKikuKi9cbiAgICAgIGNvbnN0IG1hdGNoID0gdG9waWMueXRVcmwubWF0Y2gocmVnRXhwKVxuICAgICAgaWYgKG1hdGNoICYmIG1hdGNoWzJdLmxlbmd0aCA9PT0gMTEpIHtcbiAgICAgICAgY29udGVudCA9IDxpbWcgc3JjPXtgaHR0cDovL2ltZy55b3V0dWJlLmNvbS92aS8ke21hdGNoWzJdfS9zZGRlZmF1bHQuanBnYH0gYWx0PVwiTm8gVGh1bWJcIiAvPlxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIXRvcGljPy55dFVybCAmJiB0b3BpYz8uY29udGVudFVybCkge1xuICAgICAgY29udGVudCA9IDxpbWcgc3JjPXt0b3BpYy50aHVtYkltZ1VybH0gYWx0PVwiTm8gVGh1bWJcIiAvPlxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBjb250ZW50ID0gPGltZyBzcmM9XCIuL2ltYWdlLnBuZ1wiIGFsdD1cIk5vIFRodW1iXCIgLz5cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBvbkNsaWNrPXtuYXZpZ2F0ZVRvUGFnZX0+XG4gICAgICA8VGh1bWI+XG4gICAgICAgIHtjb250ZW50fVxuICAgICAgICB7bWV0YURhdGEgJiYgPE9HSW1hZ2Ugc3JjPXttZXRhRGF0YS5vZ0ltYWdlPy51cmx9IGFsdD1cIlwiIC8+fVxuICAgICAgPC9UaHVtYj5cbiAgICAgIDxEZXNjcmlwdGlvbkNvbnRhaW5lcj5cbiAgICAgICAgPFRpdGxlPlxuICAgICAgICAgIHsgcmVjLnRvcGljID8gcmVjLnRvcGljLnRpdGxlIDogcmVjLnN1YlRvcGljPy50aXRsZX1cbiAgICAgICAgICB7bWV0YURhdGEgJiYgbWV0YURhdGEub2dUaXRsZX1cbiAgICAgICAgPC9UaXRsZT5cbiAgICAgICAgey8qIDxMaW5lIC8+ICovfVxuICAgICAgICA8U3ViVGl0bGU+XG4gICAgICAgICAgeyByZWMudG9waWM/LmNyZWF0ZWRCeSB8fCByZWMuc3ViVG9waWM/LmNyZWF0ZWRCeX1cbiAgICAgICAgICB7bWV0YURhdGEgJiYgbWV0YURhdGE/Lm9nRGVzY3JpcHRpb259XG4gICAgICAgIDwvU3ViVGl0bGU+XG4gICAgICA8L0Rlc2NyaXB0aW9uQ29udGFpbmVyPlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW8oUmVjSXRlbSlcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQoJ2xpJylgXG4gIHdpZHRoOiA5NSU7XG4gIGhlaWdodDogMTd2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIFxuYFxuXG5leHBvcnQgY29uc3QgVGh1bWIgPSBzdHlsZWQoJ2RpdicpYFxuICBoZWlnaHQ6IDEwMCU7XG4gIGZsZXg6IDQwJTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBhc3BlY3QtcmF0aW86IDEyIC8gMTI7XG4gIGltZyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBEZXNjcmlwdGlvbkNvbnRhaW5lciA9IHN0eWxlZCgnZGl2JylgXG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogNjAlO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG5gXG5cbmV4cG9ydCBjb25zdCBUaXRsZSA9IHN0eWxlZCgnaDInKWBcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogMXZ3O1xuICBmb250LXdlaWdodDogYm9sZDtcblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgZm9udC1zaXplOiAzLjV2dztcbiAgfVxuXG5cbmBcblxuZXhwb3J0IGNvbnN0IFN1YlRpdGxlID0gc3R5bGVkKCdoMycpYFxuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtc2l6ZTogLjZ2dztcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIGZvbnQtc2l6ZTogM3Z3O1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBPR0ltYWdlID0gc3R5bGVkKCdpbWcnKWAgXG4gIGJvcmRlci1yYWRpdXM6IDF2dztcblxuYFxuXG5leHBvcnQgY29uc3QgT0dVcmwgPSBzdHlsZWQoJ3NwYW4nKWAgXG4gIGNvbG9yOiBncmF5O1xuICBmb250LXNpemU6IDF2dztcbmBcblxuZXhwb3J0IGNvbnN0IE9HVGl0bGUgPSBzdHlsZWQoJ2gzJylgXG4gZm9udC1zaXplOiAxdnc7XG4gbWFyZ2luOiAuNnZ3IDAgLjF2dyAwO1xuIGNvbG9yOiBncmF5O1xuIGZvbnQtd2VpZ2h0OiBib2xkO1xuYFxuXG5leHBvcnQgY29uc3QgT0dEZXNjcmlwdGlvbiA9IHN0eWxlZCgncCcpYCBcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtc2l6ZTogLjh2dztcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuIFxuYFxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuZXhwb3J0IGRlZmF1bHQgKHJlYykgPT4ge1xuICBjb25zdCB7IHRvcGljLCBzdWJUb3BpYyB9ID0gcmVjXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKVxuICByZXR1cm4gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmIChyZWMuZXh0ZXJuYWxSZWNvbW1lbmRlZENvbnRlbnQpIHtcbiAgICAgIHdpbmRvdy5vcGVuKHJlYy5leHRlcm5hbFJlY29tbWVuZGVkQ29udGVudCwgJ19ibGFuaycpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKHRvcGljKSBuYXZpZ2F0ZShgL2hvbWUvdG9waWNzLyR7dG9waWMuaWR9L3N1YnRvcGljcy9gKVxuICAgIGVsc2UgbmF2aWdhdGUoYC9ob21lL3RvcGljcy8ke3N1YlRvcGljLnRvcGljSWR9L3N1YnRvcGljcy8ke3N1YlRvcGljLmlkfWApXG4gIH0sIFtyZWNdKVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7XG4gIG1lbW8sIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUsXG59IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmltcG9ydCB7XG4gIE91dGVyQ29udGFpbmVyLCBJbm5lckNvbnRhaW5lcixcbiAgSGVhZGVyLCBTdHlsZWRTY2FsZXNTdmcsIFJlcG9ydFN0YXRzQ29udGFpbmVyLCBSZXBvcnRTdGF0SXRlbSxcbiAgU3R5bGVkUGlsbGFyU3ZnLCBUaW1lcixcbn0gZnJvbSAnLi9TdHlsZS9pbmRleCdcbmltcG9ydCB1c2VCaW5kRGlzcGF0Y2ggZnJvbSAnLi4vaG9va3MvcmVkdXgvdXNlQmluZERpc3BhdGNoJ1xuXG5pbXBvcnQgdG9waWNBY3Rpb25zIGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMvdG9waWNzL2luZGV4J1xuaW1wb3J0IHJlcG9ydEFjdGlvbnMgZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucy9yZXBvcnRzL2luZGV4J1xuaW1wb3J0IHRyaWJ1bmFsQ29tbWVudHNBY3Rpb25zIGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMvdHJpYnVuYWxfY29tbWVudHMvaW5kZXgnXG5pbXBvcnQgY29tbWVudEFjdGlvbnMgZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucy9jb21tZW50cy9pbmRleCdcblxuaW1wb3J0IHsgY2FsY3VsYXRlVGltZUxlZnQgfSBmcm9tICcuLi8uLi9nZW5lcmljL3RpbWUvY2FsY3VsYXRlVGltZUxlZnQnXG5pbXBvcnQgVHJpYnVuYWxDb21tZW50cyBmcm9tICcuL2NvbXBvbmVudHMvVHJpYnVuYWxDb21tZW50cy9JbmRleCdcbmltcG9ydCBWb3RpbmdCb3ggZnJvbSAnLi9jb21wb25lbnRzL1ZvdGluZ0JveC9JbmRleCdcblxuaW1wb3J0IENvbW1lbnQgZnJvbSAnLi4vTWFpbkNvbnRlbnQvY29tcG9uZW50cy9TdWJUb3BpY3NQYWdlL2NvbXBvbmVudHMvQ29tbWVudC9JbmRleCdcbmltcG9ydCB7IENPTU1FTlQsIFRPUElDIH0gZnJvbSAnLi4vLi4vZW51bXMvY29udGVudF90eXBlJ1xuaW1wb3J0IFRvcGljSXRlbSBmcm9tICcuLi9NYWluQ29udGVudC9jb21wb25lbnRzL0hvbWVQYWdlL2NvbXBvbmVudHMvVG9waWNzL2NvbXBvbmVudHMvVG9waWNJdGVtL0luZGV4J1xuXG5jb25zdCBUcmlidW5hbCA9ICgpID0+IHtcbiAgY29uc3QgeyBjb250ZW50SWQsIGNvbnRlbnRUeXBlIH0gPSB1c2VQYXJhbXMoKVxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3IoKHMpID0+IHMuc2Vzc2lvbi5jdXJyZW50VXNlcilcbiAgY29uc3QgdG9waWNzID0gdXNlU2VsZWN0b3IoKHMpID0+IHMudG9waWNzLmxpc3QpXG4gIGNvbnN0IGNvbW1lbnRzID0gdXNlU2VsZWN0b3IoKHMpID0+IHMuY29tbWVudHMubGlzdClcbiAgY29uc3QgdHJpYnVuYWxDb21tZW50cyA9IHVzZVNlbGVjdG9yKChzKSA9PiBzLnRyaWJ1bmFsQ29tbWVudHMpXG4gIGNvbnN0IHJlcG9ydFN0YXRzID0gdXNlU2VsZWN0b3IoKHMpID0+IHMucmVwb3J0cylbY29udGVudElkXVxuICBjb25zdCBbdGltZUxlZnQsIHNldFRpbWVMZWZ0XSA9IHVzZVN0YXRlKHt9KVxuXG4gIGNvbnN0IHtcbiAgICBnZXRUb3BpYyxcbiAgICBnZXRSZXBvcnQsXG4gICAgZ2V0QWxsVHJpYnVuYWxDb21tZW50c0JhdGNoLFxuICAgIGdldENvbW1lbnQsXG4gIH0gPSB1c2VCaW5kRGlzcGF0Y2godG9waWNBY3Rpb25zLCByZXBvcnRBY3Rpb25zLCB0cmlidW5hbENvbW1lbnRzQWN0aW9ucywgY29tbWVudEFjdGlvbnMpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgdGltZXJcbiAgICBpZiAocmVwb3J0U3RhdHMpIHtcbiAgICAgIHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBzZXRUaW1lTGVmdChjYWxjdWxhdGVUaW1lTGVmdChyZXBvcnRTdGF0cy5yZXBvcnRQZXJpb2RFbmQpKVxuICAgICAgfSwgMTAwMClcbiAgICB9XG4gICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lcilcbiAgfSwgW3JlcG9ydFN0YXRzXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjb250ZW50SWQgJiYgdXNlcikge1xuICAgICAgaWYgKGNvbnRlbnRUeXBlID09PSBDT01NRU5UKSBnZXRDb21tZW50KGNvbnRlbnRJZClcbiAgICAgIGlmIChjb250ZW50VHlwZSA9PT0gVE9QSUMpIGdldFRvcGljKGNvbnRlbnRJZCwgdXNlci5pZClcbiAgICAgIGdldFJlcG9ydChjb250ZW50SWQpXG4gICAgICBnZXRBbGxUcmlidW5hbENvbW1lbnRzQmF0Y2goY29udGVudElkKVxuICAgIH1cbiAgfSwgW2NvbnRlbnRJZCwgdXNlcl0pXG5cbiAgY29uc3QgdGltZXJDb21wb25lbnRzID0gW11cblxuICBPYmplY3Qua2V5cyh0aW1lTGVmdCkuZm9yRWFjaCgoaW50ZXJ2YWwsIGlkeCkgPT4ge1xuICAgIGlmICghdGltZUxlZnRbaW50ZXJ2YWxdKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aW1lckNvbXBvbmVudHMucHVzaChcbiAgICAgIDxzcGFuIGtleT17U3RyaW5nKGAke2lkeH0wYCl9PlxuICAgICAgICB7dGltZUxlZnRbaW50ZXJ2YWxdfVxuICAgICAgICB7JyAnfVxuICAgICAgICB7aW50ZXJ2YWx9XG4gICAgICAgIHsnICd9XG4gICAgICA8L3NwYW4+LFxuICAgIClcbiAgfSlcblxuICBjb25zdCB2b3RpbmdUaW1lVXAgPSB0aW1lckNvbXBvbmVudHMubGVuZ3RoID09PSAwXG5cbiAgY29uc3QgQ29udGVudCA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IHRvcGljID0gdG9waWNzPy5maW5kKCh0KSA9PiB0LmlkID09PSBjb250ZW50SWQpXG4gICAgY29uc3QgY29tbWVudCA9IGNvbW1lbnRzPy5maW5kKChjKSA9PiBjLmRhdGEuaWQgPT09IGNvbnRlbnRJZClcbiAgICBpZiAodG9waWMpIHJldHVybiA8VG9waWNJdGVtIGtleT17dG9waWMuaWR9IHRvcGljPXt0b3BpY30gdXNlcj17dXNlcn0gLz5cbiAgICBpZiAoY29tbWVudCkgcmV0dXJuIDxDb21tZW50IGNvbW1lbnREYXRhPXtjb21tZW50LmRhdGF9IHJlcGxpZXM9e2NvbW1lbnQuY2hpbGRyZW59IC8+XG4gICAgcmV0dXJuIG51bGxcbiAgfSwgW3RvcGljcywgY29tbWVudHMsIGNvbnRlbnRJZF0pXG4gIHJldHVybiAoXG4gICAgPE91dGVyQ29udGFpbmVyIGlkPVwidHJpYnVuYWwtY29udGFpbmVyXCI+XG4gICAgICA8SGVhZGVyPlxuICAgICAgICA8U3R5bGVkU2NhbGVzU3ZnIC8+XG4gICAgICAgIDxoMT5cbiAgICAgICAgICBDb21tdW5pdHkgQ291cnRcbiAgICAgICAgPC9oMT5cbiAgICAgICAgPFN0eWxlZFNjYWxlc1N2ZyAvPlxuICAgICAgPC9IZWFkZXI+XG4gICAgICA8VGltZXI+XG4gICAgICAgIDxoND5cbiAgICAgICAgICB7IHJlcG9ydFN0YXRzPy5yZXBvcnRQZXJpb2RFbmQgPyAnVm90aW5nIFBlcmlvZCBUaW1pbmcgUmVtYWluaW5nJyA6ICdWb3RpbmcgSGFzIEVuZGVkJyB9XG4gICAgICAgIDwvaDQ+XG4gICAgICAgIHsnXFxuJ31cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7KCFPYmplY3Qua2V5cyh0aW1lTGVmdCkgJiYgcmVwb3J0U3RhdHMpID8gPHNwYW4+VGltZSBJcyBVcCE8L3NwYW4+IDogdGltZXJDb21wb25lbnRzfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvVGltZXI+XG4gICAgICA8SW5uZXJDb250YWluZXI+XG4gICAgICAgIDxTdHlsZWRQaWxsYXJTdmcgLz5cbiAgICAgICAge0NvbnRlbnR9XG4gICAgICAgIDxTdHlsZWRQaWxsYXJTdmcgLz5cbiAgICAgIDwvSW5uZXJDb250YWluZXI+XG4gICAgICB7cmVwb3J0U3RhdHMgJiYgKFxuICAgICAgPFZvdGluZ0JveFxuICAgICAgICBjb250ZW50SWQ9e2NvbnRlbnRJZH1cbiAgICAgICAgcmVwb3J0U3RhdHM9e3JlcG9ydFN0YXRzfVxuICAgICAgICB2b3RpbmdUaW1lVXA9e3ZvdGluZ1RpbWVVcH1cbiAgICAgIC8+XG4gICAgICApfVxuICAgICAgPFJlcG9ydFN0YXRzQ29udGFpbmVyPlxuICAgICAgICA8UmVwb3J0U3RhdEl0ZW0+XG4gICAgICAgICAgPGgyPlRveGljIFJlcG9ydHM8L2gyPlxuICAgICAgICAgIHtyZXBvcnRTdGF0cyAmJiAocmVwb3J0U3RhdHMubnVtVG94aWNSZXBvcnRzIHx8IDApfVxuICAgICAgICA8L1JlcG9ydFN0YXRJdGVtPlxuICAgICAgICA8UmVwb3J0U3RhdEl0ZW0+XG4gICAgICAgICAgPGgyPlBlcnNvbmFsIEF0dGFjayBSZXBvcnRzPC9oMj5cbiAgICAgICAgICB7cmVwb3J0U3RhdHMgJiYgKHJlcG9ydFN0YXRzLm51bVBlcnNvbmFsQXR0YWNrUmVwb3J0cyB8fCAwKX1cbiAgICAgICAgPC9SZXBvcnRTdGF0SXRlbT5cbiAgICAgICAgPFJlcG9ydFN0YXRJdGVtPlxuICAgICAgICAgIDxoMj5TcGFtIFJlcG9ydHM8L2gyPlxuICAgICAgICAgIHtyZXBvcnRTdGF0cyAmJiAocmVwb3J0U3RhdHMubnVtU3BhbVJlcG9ydHMgfHwgMCl9XG4gICAgICAgIDwvUmVwb3J0U3RhdEl0ZW0+XG4gICAgICA8L1JlcG9ydFN0YXRzQ29udGFpbmVyPlxuICAgICAgPFRyaWJ1bmFsQ29tbWVudHMgY29tbWVudHM9e3RyaWJ1bmFsQ29tbWVudHN9IC8+XG4gICAgPC9PdXRlckNvbnRhaW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBtZW1vKFRyaWJ1bmFsKVxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IFNjYWxlc1N2ZywgUGlsbGFyU3ZnIH0gZnJvbSAnLi4vLi4vLi4vc3Zncy9zdmdzJ1xuXG5leHBvcnQgY29uc3QgT3V0ZXJDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1ib3R0b206IDYwdmg7XG5gXG5cbmV4cG9ydCBjb25zdCBIZWFkZXIgPSBzdHlsZWQoJ2hlYWRlcicpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IGNsYW1wKDMwcHgsIDF2dywgMTAwcHgpIDAgY2xhbXAoMzBweCwgMXZ3LCAxMDBweCkgMDtcbiAgaDEge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMnZ3O1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgIGZvbnQtc2l6ZTogNS43dnc7XG4gICAgfVxuICB9XG4gIHN2ZyB7XG4gICAgd2lkdGg6IDR2dyAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNHZ3ICFpbXBvcnRhbnQ7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgd2lkdGg6IDEydncgIWltcG9ydGFudDtcbiAgICAgIGhlaWdodDogMTJ2dyAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBtYXJnaW46IDAgM3Z3O1xuICB9XG5gXG5leHBvcnQgY29uc3QgU3R5bGVkU2NhbGVzU3ZnID0gc3R5bGVkKFNjYWxlc1N2ZylgXG4gIHdpZHRoOiA0dncgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0dncgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwIDF2dztcbmBcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFBpbGxhclN2ZyA9IHN0eWxlZChQaWxsYXJTdmcpYFxuICBkaXNwbGF5OiBibG9jaztcbmBcblxuZXhwb3J0IGNvbnN0IElubmVyQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXG4gIHdpZHRoOiAxMDAlO1xuXG5gXG5cbmV4cG9ydCBjb25zdCBWb3RpbmdDb250YWluZXIgPSBzdHlsZWQoJ3NlY3Rpb24nKWBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDE0dnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBib3gtc2hhZG93OiAwcHggMTBweCAyMHB4IHJnYig2MCA2MCA2MCAvIDEwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCBsaWdodGdyYXk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyMDAsIDIwMCwgMjAwLCAwLjI1KTtcbiAgbWFyZ2luOiBjbGFtcCgzMHB4LCAxdncsIDEwMHB4KSAwIGNsYW1wKDMwcHgsIDF2dywgMTAwcHgpIDA7XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiAzMHZ3O1xuICB9XG5cbiAgc3ZnIHtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgICB3aWR0aDogOXZ3O1xuICAgICAgaGVpZ2h0OiA5dnc7XG4gICAgfVxuICB9XG5cbiAgc3BhbiB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgICAgZm9udC1zaXplOiA0dnc7XG4gICAgfVxuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBSZXBvcnRTdGF0c0NvbnRhaW5lciA9IHN0eWxlZCgndWwnKWBcbiAgZGlzcGxheTogZmxleDtcbmBcblxuZXhwb3J0IGNvbnN0IFJlcG9ydFN0YXRJdGVtID0gc3R5bGVkKCdsaScpYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tLW1lbnUtaXRlbS1ob3Zlcik7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCByZ2IoNjAgNjAgNjAgLyAxMCUpO1xuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbS1zZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMXZ3O1xuICBwYWRkaW5nOiAydncgNHZ3O1xuICBtYXJnaW46IDJ2dyA0dnc7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAgIGZvbnQtc2l6ZTogNHZ3O1xuICAgICAgbWFyZ2luOiAydncgMnZ3O1xuXG4gICAgfVxuYFxuZXhwb3J0IGNvbnN0IFZvdGVzQWdhaW5zdCA9IHN0eWxlZCgnZGl2JylgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTAlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG4gIGZvbnQtc2l6ZTogMnZ3O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgZm9udC1zaXplOiA0dnc7XG4gIH1cbiAgXG5gXG5cbmV4cG9ydCBjb25zdCBWb3Rlc0ZvciA9IHN0eWxlZCgnZGl2JylgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwJTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICBmb250LXNpemU6IDJ2dztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgZm9udC1zaXplOiA0dnc7XG4gIH1cbmBcbmV4cG9ydCBjb25zdCBUaW1lciA9IHN0eWxlZCgnZGl2JylgXG4gIGZvbnQtc2l6ZTogMS4zdnc7IFxuICBjb2xvcjogZ3JheTtcbiAgbWFyZ2luOiAwIDAgY2xhbXAoMzBweCwgMXZ3LCAxMDBweCkgMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgIGZvbnQtc2l6ZTogNHZ3O1xuICB9XG5cbiAgaDQge1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgTWlkZGxlU2VjdGlvbiA9IHN0eWxlZCgnZGl2JylgXG5cbiAgc3BhbjpmaXJzdC1jaGlsZCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IHJlZDtcbiAgfVxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmBcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVGFiIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuXG5pbXBvcnQgeyBMaW5lIH0gZnJvbSAnLi4vLi4vLi4vQ29tbW9uQ29tcG9uZW50cy9MaW5lJ1xuaW1wb3J0IENvbW1lbnRDb2x1bW4gZnJvbSAnLi4vLi4vLi4vTWFpbkNvbnRlbnQvY29tcG9uZW50cy9TdWJUb3BpY3NQYWdlL2NvbXBvbmVudHMvQ29tbWVudENvbHVtbi9JbmRleCdcbmltcG9ydCB7IENvbHVtbkNvbnRhaW5lciB9IGZyb20gJy4uLy4uLy4uL01haW5Db250ZW50L2NvbXBvbmVudHMvU3ViVG9waWNzUGFnZS9jb21wb25lbnRzL0NvbW1lbnRUaHJlYWQvU3R5bGUnXG5pbXBvcnQgdXNlQ2F0ZWdvcml6ZUNvbW1lbnRzIGZyb20gJy4vaG9va3MvdXNlQ2F0ZWdvcml6ZUNvbW1lbnRzJ1xuaW1wb3J0IHsgU3R5bGVkVGhlbWVUYWIgfSBmcm9tICcuL1N0eWxlL2luZGV4J1xuXG5jb25zdCBUcmlidW5hbENvbW1lbnRzID0gKCkgPT4ge1xuICBjb25zdCBba2V5LCBzZXRLZXldID0gdXNlU3RhdGUoJ2FsbCcpXG4gIGNvbnN0IGNvbW1lbnRzID0gdXNlQ2F0ZWdvcml6ZUNvbW1lbnRzKClcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPExpbmUgLz5cbiAgICAgIDxTdHlsZWRUaGVtZVRhYlxuICAgICAgICBhY3RpdmVLZXk9e2tleX1cbiAgICAgICAgb25TZWxlY3Q9eyhrKSA9PiBzZXRLZXkoayl9XG4gICAgICA+XG4gICAgICAgIDxUYWIgZXZlbnRLZXk9XCJhbGxcIiB0aXRsZT1cIkFsbFwiPlxuICAgICAgICAgIDxDb2x1bW5Db250YWluZXI+XG4gICAgICAgICAgICA8Q29tbWVudENvbHVtbiBudW1Db21tZW50cz17Y29tbWVudHM/LmFsbENvbW1lbnRzfSBjb21tZW50cz17Y29tbWVudHMuYWxsfSBjb21tZW50U2VudGltZW50PVwiQWxsXCIgY29sb3I9XCJ2YXIoLS1tLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcilcIiAvPlxuICAgICAgICAgIDwvQ29sdW1uQ29udGFpbmVyPlxuICAgICAgICA8L1RhYj5cbiAgICAgICAgPFRhYiBldmVudEtleT1cIkRlZmVuZGFudFwiIHRpdGxlPVwiRGVmZW5kYW50XCI+XG4gICAgICAgICAgPENvbHVtbkNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxDb21tZW50Q29sdW1uIG51bUNvbW1lbnRzPXtjb21tZW50cz8ucG9zaXRpdmVDb21tZW50c30gY29tbWVudHM9e2NvbW1lbnRzLkRlZmVuZGFudH0gY29tbWVudFNlbnRpbWVudD1cIkRlZmVuZGFudFwiIGNvbG9yPVwiIzZBNkU3MFwiIC8+XG4gICAgICAgICAgPC9Db2x1bW5Db250YWluZXI+XG4gICAgICAgIDwvVGFiPlxuICAgICAgICA8VGFiIGV2ZW50S2V5PVwiUmVwb3J0ZXJcIiB0aXRsZT1cIlJlcG9ydGVyc1wiPlxuICAgICAgICAgIDxDb2x1bW5Db250YWluZXI+XG4gICAgICAgICAgICA8Q29tbWVudENvbHVtbiBjb21tZW50cz17Y29tbWVudHMuUmVwb3J0ZXJ9IGNvbW1lbnRTZW50aW1lbnQ9XCJSZXBvcnRlclwiIGNvbG9yPVwiIzQ3NEE0RlwiIC8+XG4gICAgICAgICAgPC9Db2x1bW5Db250YWluZXI+XG4gICAgICAgIDwvVGFiPlxuICAgICAgICA8VGFiIGV2ZW50S2V5PVwiSnVyeVwiIHRpdGxlPVwiSnVyeVwiPlxuICAgICAgICAgIDxDb2x1bW5Db250YWluZXI+XG4gICAgICAgICAgICA8Q29tbWVudENvbHVtbiBjb21tZW50cz17Y29tbWVudHMuSnVyeX0gY29tbWVudFNlbnRpbWVudD1cIkp1cnlcIiBjb2xvcj1cInZhcigtLW0tcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yKVwiIC8+XG4gICAgICAgICAgPC9Db2x1bW5Db250YWluZXI+XG4gICAgICAgIDwvVGFiPlxuICAgICAgICA8VGFiIGV2ZW50S2V5PVwiR2VuZXJhbFwiIHRpdGxlPVwiR2VuZXJhbCBQdWJsaWNcIj5cbiAgICAgICAgICA8Q29sdW1uQ29udGFpbmVyPlxuICAgICAgICAgICAgPENvbW1lbnRDb2x1bW4gY29tbWVudHM9e2NvbW1lbnRzLkdlbmVyYWx9IGNvbW1lbnRTZW50aW1lbnQ9XCJHZW5lcmFsIFB1YmxpY1wiIGNvbG9yPVwidmFyKC0tbS1wcmltYXJ5LWJhY2tncm91bmQtY29sb3IpXCIgLz5cbiAgICAgICAgICA8L0NvbHVtbkNvbnRhaW5lcj5cbiAgICAgICAgPC9UYWI+XG4gICAgICA8L1N0eWxlZFRoZW1lVGFiPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyaWJ1bmFsQ29tbWVudHNcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBUaGVtZVRhYk5ldyB9IGZyb20gJy4uLy4uLy4uLy4uL0NvbW1vbkNvbXBvbmVudHMvVGFicy9TdHlsZSdcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFRoZW1lVGFiID0gc3R5bGVkKFRoZW1lVGFiTmV3KWBcbiAgLm5hdi1pdGVtIHtcbiAgICBtYXJnaW46IDAgMC4zZW0gMCAwO1xuICB9XG5gXG4iLCJpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5jb25zdCBjb21tZW50VHlwZSA9IG5ldyBTZXQoWydEZWZlbmRhbnQnLCAnUmVwb3J0ZXInLCAnSnVyeScsICdHZW5lcmFsJ10pXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY29uc3QgY29tbWVudHMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnRyaWJ1bmFsQ29tbWVudHMubGlzdClcbiAgcmV0dXJuIHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IGNhdGVnb3JpemVkQ29tbWVudHMgPSB7XG4gICAgICBEZWZlbmRhbnQ6IFtdLFxuICAgICAgUmVwb3J0ZXI6IFtdLFxuICAgICAgSnVyeTogW10sXG4gICAgICBHZW5lcmFsOiBbXSxcbiAgICAgIGFsbDogY29tbWVudHMsXG4gICAgfVxuICAgIGNvbW1lbnRzLmZvckVhY2goKGNvbW1lbnQpID0+IHtcbiAgICAgIGlmIChjb21tZW50VHlwZS5oYXMoY29tbWVudC5kYXRhPy5jb21tZW50VHlwZSkpIHtcbiAgICAgICAgY2F0ZWdvcml6ZWRDb21tZW50c1tjb21tZW50LmRhdGE/LmNvbW1lbnRUeXBlXS5wdXNoKGNvbW1lbnQpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gY2F0ZWdvcml6ZWRDb21tZW50c1xuICB9LCBbY29tbWVudHNdKVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IG1lbW8sIHVzZU1lbW8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEdhdmVsMiwgQ2FzdEJhbGxvdFN2ZyB9IGZyb20gJy4uLy4uLy4uLy4uL3N2Z3Mvc3ZncydcbmltcG9ydCB7IFRPUElDX1ZPVEVfRk9STSB9IGZyb20gJy4uLy4uLy4uL0FwcC9Nb2RhbC9JbmRleCdcbmltcG9ydCBUaGVtZUJ1dHRvbiBmcm9tICcuLi8uLi8uLi9Db21tb25Db21wb25lbnRzL0J1dHRvbi9JbmRleCdcbmltcG9ydCB1c2VPcGVuTW9kYWwgZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlT3Blbk1vZGFsJ1xuaW1wb3J0IHtcbiAgVm90aW5nQ29udGFpbmVyLCBWb3Rlc0FnYWluc3QsIFZvdGVzRm9yLCBNaWRkbGVTZWN0aW9uLFxufSBmcm9tICcuL1N0eWxlJ1xuXG5jb25zdCBWb3RpbmdCb3ggPSAoeyBjb250ZW50SWQsIHJlcG9ydFN0YXRzLCB2b3RpbmdUaW1lVXAgfSkgPT4ge1xuICBjb25zdCBvcGVuTW9kYWwgPSB1c2VPcGVuTW9kYWwoVE9QSUNfVk9URV9GT1JNLCB7IGNvbnRlbnRJZCB9KVxuXG4gIGNvbnN0IGhhc0FscmVhZHlWb3RlZCA9IHVzZU1lbW8oKCkgPT4gKHJlcG9ydFN0YXRzLnZvdGVBZ2FpbnN0IHx8IHJlcG9ydFN0YXRzLnZvdGVGb3IpLFxuICAgIFtyZXBvcnRTdGF0cy52b3RlQWdhaW5zdCwgcmVwb3J0U3RhdHMudm90ZUZvcl0pXG5cbiAgY29uc3QgdmVyZGljdCA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGlmIChyZXBvcnRTdGF0cy5udW1Wb3Rlc0ZvciA+IHJlcG9ydFN0YXRzLm51bVZvdGVzQWdhaW5zdCkgcmV0dXJuICdWaW9sYXRpb24nXG4gICAgcmV0dXJuICdObyBWaW9sYXRpb24nXG4gIH0sIFtyZXBvcnRTdGF0cy5udW1Wb3Rlc0FnYWluc3QsIHJlcG9ydFN0YXRzLm51bVZvdGVzRm9yXSlcblxuICByZXR1cm4gKFxuICAgIDxWb3RpbmdDb250YWluZXI+XG4gICAgICA8Vm90ZXNGb3I+XG4gICAgICAgIFZpb2xhdGlvbiBWb3Rlc1xuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICB7cmVwb3J0U3RhdHMgJiYgKHJlcG9ydFN0YXRzLm51bVZvdGVzRm9yID8/ICc/Jyl9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvVm90ZXNGb3I+XG4gICAgICA8Vm90ZXNBZ2FpbnN0PlxuICAgICAgICBObyBWaW9sYXRpb24gVm90ZXNcbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAge3JlcG9ydFN0YXRzICYmIChyZXBvcnRTdGF0cy5udW1Wb3Rlc0FnYWluc3QgPz8gJz8nKX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9Wb3Rlc0FnYWluc3Q+XG4gICAgICA8TWlkZGxlU2VjdGlvbiB2ZXJkaWN0PXt2ZXJkaWN0fT5cbiAgICAgICAgeyB2b3RpbmdUaW1lVXAgJiYgKFxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICB7YFZFUkRJQ1Qg4q2iICR7dmVyZGljdH1gfVxuICAgICAgICAgIHsnICd9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKX1cbiAgICAgICAgeyB2b3RpbmdUaW1lVXAgPyA8R2F2ZWwyIC8+IDogPENhc3RCYWxsb3RTdmcgLz4gfVxuICAgICAgICB7KHJlcG9ydFN0YXRzICYmICF2b3RpbmdUaW1lVXApICYmIChcbiAgICAgICAgPFRoZW1lQnV0dG9uIG9uQ2xpY2s9e29wZW5Nb2RhbH0+XG4gICAgICAgICAge2hhc0FscmVhZHlWb3RlZCA/ICdDaGFuZ2UgWW91ciBWb3RlJyA6ICdDYXN0IFlvdXIgVm90ZSd9XG4gICAgICAgIDwvVGhlbWVCdXR0b24+XG4gICAgICAgICl9XG4gICAgICA8L01pZGRsZVNlY3Rpb24+XG4gICAgPC9Wb3RpbmdDb250YWluZXI+XG5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBtZW1vKFZvdGluZ0JveClcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBWb3RpbmdDb250YWluZXIgPSBzdHlsZWQoJ3NlY3Rpb24nKWBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDE0dnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBib3gtc2hhZG93OiAwcHggMTBweCAyMHB4IHJnYig2MCA2MCA2MCAvIDEwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCBsaWdodGdyYXk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyMDAsIDIwMCwgMjAwLCAwLjI1KTtcbiAgbWFyZ2luOiBjbGFtcCgzMHB4LCAxdncsIDEwMHB4KSAwIGNsYW1wKDMwcHgsIDF2dywgMTAwcHgpIDA7XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiAzMHZ3O1xuICB9XG5cbiAgc3ZnIHtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgICB3aWR0aDogOXZ3O1xuICAgICAgaGVpZ2h0OiA5dnc7XG4gICAgfVxuICB9XG5cbiAgc3BhbiB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgICAgZm9udC1zaXplOiA0dnc7XG4gICAgfVxuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBWb3Rlc0FnYWluc3QgPSBzdHlsZWQoJ2RpdicpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMCU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbiAgZm9udC1zaXplOiAxLjN2dztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgZm9udC1zaXplOiA0dnc7XG4gIH1cbiAgXG5gXG5cbmV4cG9ydCBjb25zdCBWb3Rlc0ZvciA9IHN0eWxlZCgnZGl2JylgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTAlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG4gIGZvbnQtc2l6ZTogMS4zdnc7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICBmb250LXNpemU6IDR2dztcbiAgfVxuXG5gXG5cbmV4cG9ydCBjb25zdCBNaWRkbGVTZWN0aW9uID0gc3R5bGVkKCdkaXYnKWBcblxuICBzcGFuOmZpcnN0LWNoaWxkIHtcbiAgICBmb250LXNpemU6IDJ2dztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogJHsocHJvcHMpID0+IChwcm9wcy52ZXJkaWN0ID09PSAnVmlvbGF0aW9uJyA/ICdyZWQnIDogJ2dyZWVuJyl9O1xuICB9XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0zNSUpO1xuICBoZWlnaHQ6IDU1JTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuYFxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENvbGxhcHNlIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuLy8gaW1wb3J0IHsgTWRFeHBhbmRNb3JlLCBNZEV4cGFuZExlc3MgfSBmcm9tICdyZWFjdC1pY29ucy9tZCdcbmltcG9ydCB7IFVwQXJyb3dTdmcsIERvd25BcnJvd1N2ZyB9IGZyb20gJy4uLy4uL3N2Z3Mvc3ZncydcblxuaW1wb3J0IHsgVmlkZW9EZXNjcmlwdGlvbkNhcmQgfSBmcm9tICcuLi9Db21tb25Db21wb25lbnRzL0NhcmQvSW5kZXgnXG5pbXBvcnQgQWN0aW9uVG9vbGJhciBmcm9tICcuLi9Db21tb25Db21wb25lbnRzL0FjdGlvblRvb2xiYXJzL1RvcGljVG9vbGJhci9JbmRleCdcbmltcG9ydCBMaW5rU2VjdGlvbiBmcm9tICcuLi9Db21tb25Db21wb25lbnRzL0xpbmtTZWN0aW9uL0luZGV4J1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnLi4vQ29tbW9uQ29tcG9uZW50cy9JY29uQnV0dG9uL0luZGV4J1xuXG5pbXBvcnQgdG9waWNBY3Rpb25DcmVhdG9ycyBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zL3RvcGljcydcblxuaW1wb3J0IHVzZVNldElubmVySHRtbCBmcm9tICcuLi9ob29rcy91c2VTZXRJbm5lckh0bWwnXG5pbXBvcnQgdXNlT3Blbk1vZGFsIGZyb20gJy4uL2hvb2tzL3VzZU9wZW5Nb2RhbFdpdGhMb2NhdGlvbidcbmltcG9ydCB1c2VCaW5kRGlzcGF0Y2ggZnJvbSAnLi4vaG9va3MvcmVkdXgvdXNlQmluZERpc3BhdGNoJ1xuaW1wb3J0IHVzZVVwZGF0ZUxpa2VzIGZyb20gJy4vaG9va3MvdXNlVXBkYXRlTGlrZXMnXG5pbXBvcnQgdXNlR29Ub1N1YlRvcGljIGZyb20gJy4uL2hvb2tzL3JvdXRpbmcvdXNlR29Ub1N1YlRvcGljcydcbmltcG9ydCB7IGdldFRpbWVTaW5jZSB9IGZyb20gJy4uLy4uL2dlbmVyaWMvc3RyaW5nL2RhdGVGb3JtYXR0ZXInXG5cbmltcG9ydCB7IFZpZGVvUGxheWVyLCBEZXNjcmlwdGlvbiwgRXhwYW5kQnV0dG9uIH0gZnJvbSAnLi9TdHlsZSdcblxuY29uc3QgVmlkZW9TaG93UGFnZSA9ICh7XG4gIHRvcGljLCB1c2VyLCBzcmMsIHNob3dMaW5rcyxcbn0pID0+IHtcbiAgY29uc3QgZGVzY1JlZiA9IHVzZVJlZihudWxsKVxuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3Qgb3Blbk1vZGFsID0gdXNlT3Blbk1vZGFsKCdUT1BJQ19SRVBMWScpXG4gIGNvbnN0IGdvVG9TdWJUb3BpYyA9IHVzZUdvVG9TdWJUb3BpYyh0b3BpYy5pZClcbiAgY29uc3QgeyB1cGRhdGVUb3BpY0xpa2VzIH0gPSB1c2VCaW5kRGlzcGF0Y2godG9waWNBY3Rpb25DcmVhdG9ycylcbiAgY29uc3QgdXBkYXRlTGlrZXMgPSB1c2VVcGRhdGVMaWtlcyh1cGRhdGVUb3BpY0xpa2VzLCB0b3BpYywgdXNlcilcbiAgdXNlU2V0SW5uZXJIdG1sKGRlc2NSZWYsIHRvcGljPy5kZXNjcmlwdGlvbilcblxuICBjb25zdCBleHBhbmRJY29uID0gaXNPcGVuID8gPFVwQXJyb3dTdmcgLz4gOiA8RG93bkFycm93U3ZnIC8+XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XG4gICAgICA8VmlkZW9QbGF5ZXIgc3JjPXtzcmN9IGxvYWRpbmc9XCJsYXp5XCIgLz5cbiAgICAgIDxWaWRlb0Rlc2NyaXB0aW9uQ2FyZFxuICAgICAgICBvbkNsaWNrPXtnb1RvU3ViVG9waWN9XG4gICAgICAgIHVzZXJuYW1lPXt0b3BpYz8uY3JlYXRlZEJ5fVxuICAgICAgICBpY29uU3JjPXtgJHt0b3BpYz8uY3JlYXRlZEJ5SWNvblNyY31gfVxuICAgICAgICBzdW1tYXJ5PXt0b3BpYz8uc3VtbWFyeX1cbiAgICAgICAgdGltZT17Z2V0VGltZVNpbmNlKHRvcGljPy5jcmVhdGVkQXQpfVxuICAgICAgPlxuICAgICAgICA8RGVzY3JpcHRpb24+XG4gICAgICAgICAgPHNwYW4gcmVmPXtkZXNjUmVmfSAvPlxuICAgICAgICA8L0Rlc2NyaXB0aW9uPlxuICAgICAgICB7dG9waWM/LmV2aWRlbmNlTGlua3MubGVuZ3RoICE9PSAwXG4gICAgICAgICYmIChcbiAgICAgICAgPEV4cGFuZEJ1dHRvbj5cbiAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgaWNvbj17ZXhwYW5kSWNvbn1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzT3BlbighaXNPcGVuKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBTaG93IEFkZGl0aW9uYWwgSW5mb1xuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgPC9FeHBhbmRCdXR0b24+XG4gICAgICAgICl9XG4gICAgICAgIDxDb2xsYXBzZSBpbj17aXNPcGVufT5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPExpbmtTZWN0aW9uIHRvcGljPXt0b3BpY30gc2hvd0xpbmtzPXtzaG93TGlua3N9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29sbGFwc2U+XG4gICAgICAgIDxBY3Rpb25Ub29sYmFyXG4gICAgICAgICAgbGlrZXM9e3RvcGljPy5saWtlc31cbiAgICAgICAgICB0b3BpYz17dG9waWN9XG4gICAgICAgICAgdXNlcj17dXNlcn1cbiAgICAgICAgLz5cbiAgICAgIDwvVmlkZW9EZXNjcmlwdGlvbkNhcmQ+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlkZW9TaG93UGFnZVxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IFZpZGVvUGxheWVyID0gc3R5bGVkKCdpZnJhbWUnKWBcbiAgd2lkdGg6IDEwMCU7XG4gIC8qIGhlaWdodDogNDV2dzsgKi9cbiAgLyogd2lkdGg6IDQ1dnc7ICAgKi9cbiAgaGVpZ2h0OiAyNS4zMXZ3O1xuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICBoZWlnaHQ6IDUwdndcbiAgfVxuXG5gXG5cbmV4cG9ydCBjb25zdCBEZXNjcmlwdGlvbiA9IHN0eWxlZCgncCcpYFxuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAuNmVtO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHBhZGRpbmc6IDFlbTtcbmBcblxuZXhwb3J0IGNvbnN0IEV4cGFuZEJ1dHRvbiA9IHN0eWxlZCgnZGl2JylgIFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5gXG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCAodXBkYXRlVG9waWNMaWtlcywgdG9waWMsIHVzZXIpID0+IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgaWYgKCF0b3BpYyB8fCAhdXNlcikgcmV0dXJuIC8vIFNvbWUgc29tcnQgb2YgZXJyb3IgaGVyZSBtYXliZVxuICB1cGRhdGVUb3BpY0xpa2VzKHtcbiAgICBpZDogdG9waWMuaWQsXG4gICAgdXNlcklkOiB1c2VyLmlkLFxuICAgIGluY3JlbWVudDogIXRvcGljLmxpa2VkLFxuICB9KVxufSwgW3RvcGljXSlcbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmV4cG9ydCBkZWZhdWx0ICh0b3BpY0lkLCBzdWJ0b3BpY0lkKSA9PiB7XG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKVxuICByZXR1cm4gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIG5hdmlnYXRlKGAvaG9tZS90b3BpY3MvJHt0b3BpY0lkfS9zdWJ0b3BpY3MvJHtzdWJ0b3BpY0lkfWApXG4gIH0sIFtdKVxufVxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCdcblxuaW1wb3J0IHVpQWN0aW9uQ3JlYXRvcnMgZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucy91aS9pbmRleCdcblxuaW1wb3J0IHsgUkVQTFkgfSBmcm9tICcuLi9BcHAvTW9kYWwvSW5kZXgnXG5pbXBvcnQgeyB1dWlkUmVnRXggfSBmcm9tICcuLi8uLi9nZW5lcmljL3JlZ2V4L3V1aWQnXG5cbmV4cG9ydCBkZWZhdWx0IChtb2RhbFR5cGUsIG1vZGFsUHJvcHMpID0+IHtcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlTG9jYXRpb24oKVxuICBjb25zdCBzdWJ0b3BpY0lkID0gcGF0aG5hbWUubWF0Y2godXVpZFJlZ0V4KT8uWzFdXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxuICBjb25zdCB7IG9wZW5Nb2RhbCB9ID0gYmluZEFjdGlvbkNyZWF0b3JzKHVpQWN0aW9uQ3JlYXRvcnMsIGRpc3BhdGNoKVxuICByZXR1cm4gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIG9wZW5Nb2RhbChSRVBMWSwgbW9kYWxQcm9wcylcbiAgfSwgW10pXG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5J1xuaW1wb3J0IHsgR0VUX0FMTF9SRUNTIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvcmVjcy9yZWNzUmVkdWNlcidcbmltcG9ydCAqIGFzIFJlY3NBcGlVdGlsIGZyb20gJy4uLy4uLy4uL2FwaS92MS9yZWNzL3JlY3NfYXBpX3V0aWwnXG5pbXBvcnQgeyBlcnJvckZvcm1hdHRlciB9IGZyb20gJy4uLy4uL3V0aWxzL2Vycm9yRm9ybWF0dGVyJ1xuXG5jb25zdCBnZXRBbGxSZWNzQWN0aW9uQ3JlYXRvciA9IChyZWNzKSA9PiAoe1xuICB0eXBlOiBHRVRfQUxMX1JFQ1MsXG4gIHBheWxvYWQ6IHJlY3MsXG5cbn0pXG5cbmV4cG9ydCBjb25zdCBnZXRBbGxSZWNzID0gKHRhcmdldENvbnRlbnRJZCkgPT4gKGRpc3BhdGNoKSA9PiBSZWNzQXBpVXRpbC5nZXRBbGxSZWNzKHRhcmdldENvbnRlbnRJZClcbiAgLnRoZW4oKHJlcykgPT4gZGlzcGF0Y2goZ2V0QWxsUmVjc0FjdGlvbkNyZWF0b3IocmVzLmRhdGEpKSlcbiAgLmNhdGNoKChlcnJvcikgPT4gdG9hc3QuZXJyb3IoZXJyb3JGb3JtYXR0ZXIoZXJyb3IpKSlcblxuZXhwb3J0IGRlZmF1bHQge1xuICBnZXRBbGxSZWNzLFxufVxuIiwiaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSdcbmltcG9ydCB7IGNsb3NlTW9kYWwgfSBmcm9tICcuLi91aS9pbmRleCdcbmltcG9ydCB7IEFERF9SRVBPUlQgfSBmcm9tICcuLi8uLi9yZWR1Y2Vycy9yZXBvcnRzL3JlcG9ydHNSZWR1Y2VyJ1xuaW1wb3J0ICogYXMgUmVwb3J0c0FwaVV0aWwgZnJvbSAnLi4vLi4vLi4vYXBpL3YxL3JlcG9ydHMvcmVwb3J0c19hcGlfdXRpbCdcbmltcG9ydCB7IGVycm9yRm9ybWF0dGVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvZXJyb3JGb3JtYXR0ZXInXG5cbmNvbnN0IGFkZFJlcG9ydEFjdGlvbkNyZWF0b3IgPSAocmVwb3J0KSA9PiAoe1xuICB0eXBlOiBBRERfUkVQT1JULFxuICBwYXlsb2FkOiByZXBvcnQsXG59KVxuXG5leHBvcnQgY29uc3QgZ2V0UmVwb3J0ID0gKGNvbnRlbnRJZCkgPT4gKGRpc3BhdGNoKSA9PiAoXG4gIFJlcG9ydHNBcGlVdGlsLmdldFJlcG9ydChjb250ZW50SWQpXG4gICAgLnRoZW4oKHJlcykgPT4gZGlzcGF0Y2goYWRkUmVwb3J0QWN0aW9uQ3JlYXRvcihyZXMuZGF0YSkpKVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHRvYXN0LmVycm9yKGVycm9yRm9ybWF0dGVyKGVycm9yKSkpXG4gICAgLmZpbmFsbHkoKCkgPT4gZGlzcGF0Y2goY2xvc2VNb2RhbCgpKSlcbilcblxuZXhwb3J0IGRlZmF1bHQge1xuICBnZXRSZXBvcnQsXG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4vLyBhY3Rpb24gY3JlYXRvciBpcyBqdXN0IGEgZnVuY3Rpb24gdGhhdCBkaXNwYXRjaGVzIGFuIGFjdGlvblxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSdcbmltcG9ydCB7IGNsb3NlTW9kYWwgfSBmcm9tICcuLi91aS9pbmRleCdcbmltcG9ydCB7IEFERF9TVUJfVE9QSUMsIEdFVF9BTExfU1VCX1RPUElDUyB9IGZyb20gJy4uLy4uL3JlZHVjZXJzL3N1YnRvcGljcy9zdWJUb3BpY3NSZWR1Y2VyJ1xuaW1wb3J0ICogYXMgU3ViVG9waWNzQXBpVXRpbCBmcm9tICcuLi8uLi8uLi9hcGkvdjEvc3VidG9waWNzL3N1YnRvcGljc19hcGlfdXRpbCdcbmltcG9ydCB7IGVycm9yRm9ybWF0dGVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvZXJyb3JGb3JtYXR0ZXInXG5cbmNvbnN0IGdldEFsbFRvcGljc0FjdGlvbkNyZWF0b3IgPSAoc3VidG9waWNzKSA9PiAoe1xuICB0eXBlOiBHRVRfQUxMX1NVQl9UT1BJQ1MsXG4gIHBheWxvYWQ6IHN1YnRvcGljcyxcblxufSlcblxuY29uc3QgYWRkVG9waWNBY3Rpb25DcmVhdG9yID0gKHN1YlRvcGljRGF0YSkgPT4gKHtcbiAgdHlwZTogQUREX1NVQl9UT1BJQyxcbiAgcGF5bG9hZDogc3ViVG9waWNEYXRhLFxufSlcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVN1YlRvcGljID0gKHRvcGljRGF0YSkgPT4gKGRpc3BhdGNoKSA9PiBTdWJUb3BpY3NBcGlVdGlsLmNyZWF0ZVN1YlRvcGljKHRvcGljRGF0YSlcbiAgLnRoZW4oKHJlcykgPT4gZGlzcGF0Y2goYWRkVG9waWNBY3Rpb25DcmVhdG9yKHJlcy5kYXRhKSkpXG4gIC50aGVuKCgpID0+IGRpc3BhdGNoKGNsb3NlTW9kYWwoKSkpXG4gIC5jYXRjaCgoZXJyb3IpID0+IHRvYXN0LmVycm9yKGVycm9yRm9ybWF0dGVyKGVycm9yKSkpXG5cbmV4cG9ydCBjb25zdCBnZXRBbGxTdWJUb3BpY3MgPSAodG9waWNJZCkgPT4gKGRpc3BhdGNoKSA9PiBTdWJUb3BpY3NBcGlVdGlsLmdldEFsbFN1YlRvcGljcyh0b3BpY0lkKVxuICAudGhlbigocmVzKSA9PiBkaXNwYXRjaChnZXRBbGxUb3BpY3NBY3Rpb25DcmVhdG9yKHJlcy5kYXRhKSkpXG4gIC5jYXRjaCgoZXJyb3IpID0+IHRvYXN0LmVycm9yKGVycm9yRm9ybWF0dGVyKGVycm9yKSkpXG5cbmV4cG9ydCBjb25zdCBnZXRTdWJUb3BpYyA9IChzdWJUb3BpY0lkKSA9PiAoZGlzcGF0Y2gpID0+IFN1YlRvcGljc0FwaVV0aWwuZ2V0U3ViVG9waWMoc3ViVG9waWNJZClcbiAgLnRoZW4oKHJlcykgPT4gZGlzcGF0Y2goYWRkVG9waWNBY3Rpb25DcmVhdG9yKHJlcy5kYXRhKSkpXG4gIC5jYXRjaCgoZXJyb3IpID0+IHRvYXN0LmVycm9yKGVycm9yRm9ybWF0dGVyKGVycm9yKSkpXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY3JlYXRlU3ViVG9waWMsXG4gIGdldEFsbFN1YlRvcGljcyxcbiAgZ2V0U3ViVG9waWMsXG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5cbmV4cG9ydCBjb25zdCBhZGRTdWJ0b3BpYyA9IChhY3Rpb24sIHN0YXRlKSA9PiB7XG4gIGNvbnN0IG5ld1N0YXRlID0geyAuLi5zdGF0ZSB9XG4gIG5ld1N0YXRlW2FjdGlvbi5wYXlsb2FkLmlkXSA9IGFjdGlvbi5wYXlsb2FkXG4gIHJldHVybiBuZXdTdGF0ZVxufVxuXG5leHBvcnQgY29uc3QgYWRkQWxsU3VidG9waWNzID0gKGFjdGlvbikgPT4ge1xuICBjb25zdCBuZXdTdGF0ZSA9IGFjdGlvbi5wYXlsb2FkLnJlZHVjZSgoYWNjLCBzdWJ0b3BpYykgPT4ge1xuICAgIGFjY1tzdWJ0b3BpYy5pZF0gPSBzdWJ0b3BpY1xuICAgIHJldHVybiBhY2NcbiAgfSwge30pXG4gIHJldHVybiBuZXdTdGF0ZVxufVxuIiwiaW1wb3J0IHsgYWRkU3VidG9waWMsIGFkZEFsbFN1YnRvcGljcyB9IGZyb20gJy4vaW5kZXgnXG5cbmV4cG9ydCBjb25zdCBBRERfU1VCX1RPUElDID0gJ0FERF9TVUJfVE9QSUMnXG5leHBvcnQgY29uc3QgR0VUX0FMTF9TVUJfVE9QSUNTID0gJ0dFVF9BTExfU1VCX1RPUElDUydcblxuY29uc3QgcmVkdWNlckFjdGlvbk1hcCA9IG5ldyBNYXAoW1xuICBbQUREX1NVQl9UT1BJQywgYWRkU3VidG9waWNdLFxuICBbR0VUX0FMTF9TVUJfVE9QSUNTLCBhZGRBbGxTdWJ0b3BpY3NdLFxuXSlcblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IHt9LCBhY3Rpb24pID0+IHtcbiAgaWYgKCFyZWR1Y2VyQWN0aW9uTWFwLmhhcyhhY3Rpb24udHlwZSkpIHJldHVybiBzdGF0ZVxuICByZXR1cm4gcmVkdWNlckFjdGlvbk1hcC5nZXQoYWN0aW9uLnR5cGUpKGFjdGlvbiwgc3RhdGUpXG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXJcbiJdLCJuYW1lcyI6WyJheGlvcyIsIkJBQ0tFTkRfREVWIiwiZ2V0QWxsUmVjcyIsInRhcmdldENvbnRlbnRJZCIsImdldCIsImNyZWF0ZVN1YlRvcGljIiwic3ViVG9waWNEYXRhIiwicG9zdCIsImdldEFsbFN1YlRvcGljcyIsInRvcGljSWQiLCJnZXRTdWJUb3BpYyIsInN1YlRvcGljSWQiLCJ1dWlkUmVnRXgiLCJSZWdFeHAiLCJjYWxjdWxhdGVUaW1lTGVmdCIsInJlcG9ydEVuZFRpbWUiLCJkaWZmZXJlbmNlIiwiRGF0ZSIsInRpbWVMZWZ0IiwiZGF5cyIsIk1hdGgiLCJmbG9vciIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJSZWFjdCIsIm1lbW8iLCJ1c2VQYXJhbXMiLCJVcFZvdGVCdXR0b24iLCJEb3duVm90ZUJ1dHRvbiIsIkNvbW1lbnRCdXR0b24iLCJDaXZpbGl0eUJ1dHRvbiIsIlRyaWJ1bmFsQnV0dG9uIiwiQ29udGFpbmVyIiwiTGVmdCIsIlJpZ2h0IiwiQ09NTUVOVCIsIlRSSUJVTkFMX0NPTU1FTlQiLCJDb21tZW50QWN0aW9uVG9vbGJhciIsImxpa2VzIiwiY29tbWVudCIsInVzZXIiLCJwYXJhbXMiLCJpc1RyaWJ1bmFsQ29tbWVudCIsImNvbW1lbnRUeXBlIiwiaWQiLCJ1c2VNZW1vIiwidXNlU3RhdGUiLCJSYW5nZVNsaWRlciIsIlBvcG92ZXJTdGlja09uSG92ZXIiLCJ1c2VVcGRhdGVDb21tZW50Q2l2aWxpdHkiLCJzaG93UG9wb3ZlciIsInNldFNob3dQb3BvdmVyIiwib25DbGljayIsInByZXYiLCJ1cGRhdGVDb21tZW50Q2l2aWxpdHkiLCJJY29uIiwiY2l2aWxpdHkiLCJ1c2VDYWxsYmFjayIsInVzZVNlbGVjdG9yIiwidXNlTG9jYXRpb24iLCJjb21tZW50QWN0aW9ucyIsInRyaWJ1bmFsQ29tbWVudEFjdGlvbnMiLCJ1c2VCaW5kRGlzcGF0Y2giLCJwYXRobmFtZSIsInMiLCJzZXNzaW9uIiwiY3VycmVudFVzZXIiLCJ1cGRhdGVUcmlidW5hbENvbW1lbnRDaXZpbGl0eSIsImUiLCJpc1RyaWJ1bmFsIiwiaW5jbHVkZXMiLCJkYXRhIiwiZ2l2aW5nVXNlcklkIiwicmVjZWl2aW5nVXNlcklkIiwiY3JlYXRlZEJ5SWQiLCJjb21tZW50SWQiLCJ2YWx1ZSIsIk51bWJlciIsImN1cnJlbnRUYXJnZXQiLCJjaXZpbCIsIkljb25CdXR0b24iLCJDb21tZW50U3ZnIiwidXNlT3Blbk1vZGFsIiwiUkVQTFkiLCJjb250ZW50SWQiLCJvcGVuQ29tbWVudE1vZGFsIiwicmVwbHlUeXBlIiwicm9vdFBhcmVudENvbW1lbnRJZCIsInJvb3RJZCIsInRyaWJ1bmFsQ29tbWVudFVuZGVyUmV2aWV3SWQiLCJ1c2VPblJhbmdlQ2hhbmdlIiwiUmFuZ2UiLCJNZXNzYWdlIiwib25TbGlkZXJDaGFuZ2UiLCJzbGlkZXJWYWx1ZSIsInN0b3BQcm9wYWdhdGlvbiIsInN0eWxlZCIsInNldFNsaWRlclZhbHVlIiwicmFuZ2UiLCJyYW5nZVYiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibmV3VmFsdWUiLCJtaW4iLCJtYXgiLCJuZXdQb3NpdGlvbiIsImlubmVySFRNTCIsInN0eWxlIiwibGVmdCIsIlVzZXJJbmZvcm1hdGlvbkRpc3BsYXkiLCJNaWRkbGUiLCJIb21lUGFnZUdyaWQiLCJOb3RpZmljYXRpb25JdGVtIiwiQm9yZGVyQ29udGFpbmVyIiwiTm90aWZpY2F0aW9uTGlzdCIsIkhlYWRlciIsIk5vdGlmaWNhdGlvbnMiLCJub3RpZmljYXRpb25zIiwidXNlck5vdGlmaWNhdGlvbnNMaXN0IiwibWFwIiwibm90aWZpY2F0aW9uIiwiTGluayIsInVzZU5hdmlnYXRlIiwiTWVudVRpbWUiLCJVc2VybmFtZUFuZFRhZyIsImdldFRpbWVTaW5jZSIsIkxlZnRDb250YWluZXIiLCJNaWRkbGVDb250YWluZXIiLCJQcm9maWxlSWNvbiIsIkNvbW1lbnRDaXZpbGl0eUdpdmVuIiwiQ29tbWVudENpdmlsaXR5Tm90aWZjYXRpb24iLCJnaXZpbmdVc2VyVXNlcm5hbWUiLCJnaXZpbmdVc2VySWNvblNyYyIsImdpdmluZ1VzZXJUYWciLCJzdWJ0b3BpY0lkIiwiY3JlYXRlZEF0Iiwib2xkIiwibmV3VmFsIiwibmF2aWdhdGUiLCJoYW5kbGVDbGljayIsInRvRml4ZWQiLCJOZXdGb2xsb3dlciIsIkFkZEZyaWVuZFN2ZyIsIkZvbGxvd05vdGlmY2F0aW9uIiwiQ29tbWVudExpa2UiLCJMaWtlQ2xpY2tlZFN2ZyIsIkNvbW1lbnRMaWtlTm90aWZpY2F0aW9uIiwiVmVydGljYWxNZW51RG90c1N2ZyIsIkRlbGV0ZVN2ZyIsIlJlYWRTdmciLCJub3RpZmljYXRpb25BY3Rpb25DcmVhdG9ycyIsIk1lbnVUaW1lQ29udGFpbmVyIiwiVGltZSIsIk1lbnVJY29uQ29udGFpbmVyIiwiQWN0aW9uTWVudSIsIkFjdGlvbk1lbnVJdGVtIiwidGltZSIsImV2ZW50VHlwZSIsImlzT3BlbiIsInNldElzT3BlbiIsInVwZGF0ZU5vdGlmaWNhdGlvblRvUmVhZCIsImRlbGV0ZU5vdGlmaWNhdGlvbiIsImV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInByb3BzIiwiVG9waWNMaWtlIiwiSXRlbSIsIlRvcGljTGlrZU5vdGlmaWNhdGlvbiIsIkl0ZW1Db21wb25lbnQiLCJSaWdodENvbnRhaW5lciIsInVzZUVmZmVjdCIsIlRhYiIsIlRoZW1lVGFiIiwiVGFiQ29udGFpbmVyIiwicmVjc0FjdGlvbkNyZWF0b3JzIiwib3BwUmVjc0FjdGlvbkNyZWF0b3JzIiwiUmVjb21tZW5kYXRpb25zTGlzdCIsIlJlY29tbWVuZGF0aW9ucyIsImtleSIsInNldEtleSIsImdldEFsbE9wcG9zaW5nUmVjcyIsInJlY3MiLCJyZWNvbW1lbmRhdGlvbnMiLCJvcHBvc2luZ1JlY3MiLCJrIiwiTWFpbkNvbnRlbnQiLCJMaW5lIiwidG9waWNBY3Rpb25DcmVhdG9ycyIsInN1YlRvcGljQWN0aW9uQ3JlYXRvcnMiLCJIZWFkZXJDb250YWluZXIiLCJQYXJlbnRDb21tZW50IiwiU3ViVG9waWNzUm91dGVyIiwiU3ViVG9waWNzIiwidXJsIiwibWF0Y2giLCJnZXRUb3BpYyIsInRvcGljIiwidG9waWNzIiwibGlzdCIsImZpbmQiLCJ0Iiwic3VidG9waWNzRW1wdHkiLCJzdWJ0b3BpY3MiLCJ1c2VySWQiLCJ1c2VSZWYiLCJDb2xsYXBzZSIsIlVwQXJyb3dTdmciLCJEb3duQXJyb3dTdmciLCJDZW5zb3JPdmVybGF5IiwiQWN0aW9uVG9vbGJhciIsIkNvbW1lbnRDb250YWluZXIiLCJVc2VybmFtZSIsIkJvZHkiLCJGb290ZXIiLCJUaHVtYiIsIkV4cGFuZEJ1dHRvbiIsIkV2aWRlbmNlU2VjdGlvbiIsIkNvbnRlbnQiLCJVc2VySW5mb0NvbnRhaW5lciIsIk91dGVyQ29udGFpbmVyIiwidXNlU2V0SW5uZXJIdG1sIiwiUGFyZW50Q29tbWVudENvbnRleHQiLCJUaGVtZVRvb2x0aXAiLCJVTkRFUl9SRVZJRVciLCJDb21tZW50IiwiY29tbWVudERhdGEiLCJyZXBsaWVzIiwiY29tbWVudFJlZiIsInVzZUNvbnRleHQiLCJjb250ZW50UmVmIiwicmVwb3J0U3RhdHVzIiwidG94aWNpdHlTdGF0dXMiLCJzaG91bGRCbHVyIiwic2V0U2hvdWxkQmx1ciIsImNvbnRlbnQiLCJtaW5zIiwiZXhwYW5kSWNvbiIsImNyZWF0ZWRCeUljb25TcmMiLCJjcmVhdGVkQnlFeHBlcmllbmNlIiwiY3JlYXRlZEJ5IiwibGVuZ3RoIiwicmVwbHkiLCJpZHgiLCJTdHJpbmciLCJjaGlsZHJlbiIsImNyZWF0ZUNvbnRleHQiLCJDb21tZW50Q29sdW1uIiwibnVtQ29tbWVudHMiLCJjb21tZW50cyIsImNvbW1lbnRTZW50aW1lbnQiLCJjb2xvciIsInVzZUNhdGVnb3JpemVDb21tZW50cyIsInN1YlRvcGljQWN0aW9ucyIsInRvcGljQWN0aW9ucyIsIkNvbHVtbkNvbnRhaW5lciIsIlRocmVhZENvbnRhaW5lciIsIkNvbW1lbnRUaHJlYWQiLCJnZXRBbGxDb21tZW50UmVwbGllcyIsInN0YXRlIiwicG9zaXRpdmVDb21tZW50cyIsIlBPU0lUSVZFIiwibmV1dHJhbENvbW1lbnRzIiwiTkVVVFJBTCIsIm5lZ2F0aXZlQ29tbWVudHMiLCJORUdBVElWRSIsImFsbENvbW1lbnRzIiwiYWxsIiwiY29uc29sZSIsImxvZyIsInVzZVNlYXJjaFBhcmFtcyIsIlRvb2x0aXAiLCJPdmVybGF5VHJpZ2dlciIsIkVtYmVkZWRUd2VldCIsIlZpZGVvU2hvd1BhZ2UiLCJFeHRlcm5hbENvbnRlbnRDYXJkIiwiVXNlclByb3ZpZGVkTWVkaWFDYXJkIiwiVXNlckluZm9IZWFkZXIiLCJEZXNjcmlwdGlvbiIsIlRvcGljU3VtbWFyeUNvbnRhaW5lciIsIlN0eWxlZExvbmdEb3duQXJyb3ciLCJUb29sdGlwQ29tcG9uZW50IiwidGV4dCIsInRpdGxlIiwicmVmZXJlbmNlIiwiY3VycmVudCIsInNjcm9sbEludG9WaWV3Iiwic3VidG9waWNDb250ZW50Iiwic3VidG9waWMiLCJzaG93U3ViVG9waWMiLCJjb21tb25Qcm9wcyIsInNob3dMaW5rcyIsImRlc2NSZWYiLCJzdWJ0b3BpY1JlZiIsInRvcGljUmVmIiwiZGVzY3JpcHRpb24iLCJjb21tb25Qcm9wc1N1YlRvcGljIiwidHdlZXRIdG1sIiwieXRVcmwiLCJyZXBsYWNlIiwidm9kVXJsIiwiaW1hZ2VVcmwiLCJ3aWR0aCIsInRodW1iSW1nVXJsIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwiTG9uZ0Rvd25BcnJvdyIsIkxpbmtzQ29udGFpbmVyIiwiaGVpZ2h0IiwidGFyZ2V0Q29tbWVudCIsIm5vZGUiLCJ1c2VTZXNzaW9uVHlwZSIsIlN1YlRvcGljVGhyZWFkIiwiZ2V0QWxsQ29tbWVudHMiLCJzZXNzaW9uVHlwZSIsInVzZURpc3BhdGNoIiwiYmluZEFjdGlvbkNyZWF0b3JzIiwiUmlnaHRUcmlhbmdsZUFycm93RmlsbFN2ZyIsInVzZUdvVG9TdWJUb3BpYyIsIlRoZW1lQnV0dG9uIiwiU3ViVG9waWNzVGFibGUiLCJ1aUFjdGlvbkNyZWF0b3JzIiwiQ1JFQVRFX1NVQl9UT1BJQyIsIlN1YlRvcGljc0xpc3QiLCJkaXNwYXRjaCIsIm9wZW5Nb2RhbCIsImdlblN1YlRvcGljIiwiT2JqZWN0IiwidmFsdWVzIiwiZ29Ub1N1YlRvcGljIiwiUm91dGUiLCJSb3V0ZXMiLCJXYXZ5QmFja2dyb3VuZCIsIlN1YlRvcGljc0l0ZW0iLCJUYWJsZUhlYWRlciIsIlRhYmxlIiwiQ29sSGVhZGVyIiwiQ29sSXRlbSIsIlJvdyIsIlJvd0l0ZW0iLCJ1c2VHb1RvQ29tbWVudFRocmVhZCIsImdvVG9Db21tZW50VGhyZWFkIiwic3Vic3RyaW5nIiwic2VudGltZW50cyIsIlNldCIsImNhdGVnb3JpemVkQ29tbWVudHMiLCJmb3JFYWNoIiwiaGFzIiwic2VudGltZW50IiwicHVzaCIsIlRyaWJ1bmFsTm90aWZpY2F0aW9ucyIsInRyaWJ1bmFsTm90aWZpY2F0aW9uc0xpc3QiLCJUcmlidW5hbFNlbGVjdGlvbiIsIlVzZXJDb250ZW50UmVwb3J0ZWQiLCJUcmlidW5hbFNlbGVjdGlvbk5vdGlmaWNhdGlvbiIsIlVzZXJDb250ZW50UmVwb3J0ZWROb3RpZmljYXRpb24iLCJHYXZlbDIiLCJjb250ZW50VHlwZSIsInJlcG9ydGVkQ29udGVudElkIiwiUmVjSXRlbSIsIlJlY0xpc3RDb250YWluZXIiLCJyZWMiLCJ1c2VHZXRMaW5rTWV0YURhdGFFZmZlY3QiLCJ1c2VOYXZpZ2F0ZVRvUGFnZSIsIkRlc2NyaXB0aW9uQ29udGFpbmVyIiwiVGl0bGUiLCJTdWJUaXRsZSIsIk9HSW1hZ2UiLCJzdWJUb3BpYyIsIm1ldGFEYXRhIiwiY29udGVudFVybCIsImV4dGVybmFsUmVjb21tZW5kZWRDb250ZW50IiwibmF2aWdhdGVUb1BhZ2UiLCJyZWdFeHAiLCJvZ0ltYWdlIiwib2dUaXRsZSIsIm9nRGVzY3JpcHRpb24iLCJPR1VybCIsIk9HVGl0bGUiLCJPR0Rlc2NyaXB0aW9uIiwid2luZG93Iiwib3BlbiIsIklubmVyQ29udGFpbmVyIiwiU3R5bGVkU2NhbGVzU3ZnIiwiUmVwb3J0U3RhdHNDb250YWluZXIiLCJSZXBvcnRTdGF0SXRlbSIsIlN0eWxlZFBpbGxhclN2ZyIsIlRpbWVyIiwicmVwb3J0QWN0aW9ucyIsInRyaWJ1bmFsQ29tbWVudHNBY3Rpb25zIiwiVHJpYnVuYWxDb21tZW50cyIsIlZvdGluZ0JveCIsIlRPUElDIiwiVG9waWNJdGVtIiwiVHJpYnVuYWwiLCJ0cmlidW5hbENvbW1lbnRzIiwicmVwb3J0U3RhdHMiLCJyZXBvcnRzIiwic2V0VGltZUxlZnQiLCJnZXRSZXBvcnQiLCJnZXRBbGxUcmlidW5hbENvbW1lbnRzQmF0Y2giLCJnZXRDb21tZW50IiwidGltZXIiLCJzZXRJbnRlcnZhbCIsInJlcG9ydFBlcmlvZEVuZCIsImNsZWFyVGltZW91dCIsInRpbWVyQ29tcG9uZW50cyIsImtleXMiLCJpbnRlcnZhbCIsInZvdGluZ1RpbWVVcCIsImMiLCJudW1Ub3hpY1JlcG9ydHMiLCJudW1QZXJzb25hbEF0dGFja1JlcG9ydHMiLCJudW1TcGFtUmVwb3J0cyIsIlNjYWxlc1N2ZyIsIlBpbGxhclN2ZyIsIlZvdGluZ0NvbnRhaW5lciIsIlZvdGVzQWdhaW5zdCIsIlZvdGVzRm9yIiwiTWlkZGxlU2VjdGlvbiIsIlN0eWxlZFRoZW1lVGFiIiwiRGVmZW5kYW50IiwiUmVwb3J0ZXIiLCJKdXJ5IiwiR2VuZXJhbCIsIlRoZW1lVGFiTmV3IiwiQ2FzdEJhbGxvdFN2ZyIsIlRPUElDX1ZPVEVfRk9STSIsImhhc0FscmVhZHlWb3RlZCIsInZvdGVBZ2FpbnN0Iiwidm90ZUZvciIsInZlcmRpY3QiLCJudW1Wb3Rlc0ZvciIsIm51bVZvdGVzQWdhaW5zdCIsIlZpZGVvRGVzY3JpcHRpb25DYXJkIiwiTGlua1NlY3Rpb24iLCJ1c2VVcGRhdGVMaWtlcyIsIlZpZGVvUGxheWVyIiwic3JjIiwidXBkYXRlVG9waWNMaWtlcyIsInVwZGF0ZUxpa2VzIiwic3VtbWFyeSIsImV2aWRlbmNlTGlua3MiLCJpbmNyZW1lbnQiLCJsaWtlZCIsIm1vZGFsVHlwZSIsIm1vZGFsUHJvcHMiLCJ0b2FzdCIsIkdFVF9BTExfUkVDUyIsIlJlY3NBcGlVdGlsIiwiZXJyb3JGb3JtYXR0ZXIiLCJnZXRBbGxSZWNzQWN0aW9uQ3JlYXRvciIsInR5cGUiLCJwYXlsb2FkIiwidGhlbiIsInJlcyIsImVycm9yIiwiY2xvc2VNb2RhbCIsIkFERF9SRVBPUlQiLCJSZXBvcnRzQXBpVXRpbCIsImFkZFJlcG9ydEFjdGlvbkNyZWF0b3IiLCJyZXBvcnQiLCJBRERfU1VCX1RPUElDIiwiR0VUX0FMTF9TVUJfVE9QSUNTIiwiU3ViVG9waWNzQXBpVXRpbCIsImdldEFsbFRvcGljc0FjdGlvbkNyZWF0b3IiLCJhZGRUb3BpY0FjdGlvbkNyZWF0b3IiLCJ0b3BpY0RhdGEiLCJhZGRTdWJ0b3BpYyIsImFjdGlvbiIsIm5ld1N0YXRlIiwiYWRkQWxsU3VidG9waWNzIiwicmVkdWNlIiwiYWNjIiwicmVkdWNlckFjdGlvbk1hcCIsIk1hcCIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9