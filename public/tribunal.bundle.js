"use strict";
(self["webpackChunkcivil"] = self["webpackChunkcivil"] || []).push([["tribunal"],{

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
/* harmony import */ var _SubTopics_components_Comment_Index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../SubTopics/components/Comment/Index */ "./src/pages/SubTopics/components/Comment/Index.jsx");
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
    if (comment) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_SubTopics_components_Comment_Index__WEBPACK_IMPORTED_MODULE_13__["default"], {
      commentData: comment.data,
      replies: comment.children
    });
    return null;
  }, [topics, comments, contentId]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_3__.OuterContainer, {
    id: "tribunal-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_3__.Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_3__.StyledScalesSvg, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h1", null, "Community Court"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_3__.StyledScalesSvg, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_3__.Timer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h4", null, "Voting Period Timing Remaining"), '\n', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, !Object.keys(timeLeft) && reportStats ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, "Time Is Up!") : timerComponents)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_3__.InnerContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_3__.StyledPillarSvg, null), Content, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_3__.StyledPillarSvg, null)), reportStats && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_VotingBox_Index__WEBPACK_IMPORTED_MODULE_12__["default"], {
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
/* harmony import */ var _SubTopics_components_CommentColumn_Index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../SubTopics/components/CommentColumn/Index */ "./src/pages/SubTopics/components/CommentColumn/Index.jsx");
/* harmony import */ var _SubTopics_components_SubTopicThread_Style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../SubTopics/components/SubTopicThread/Style */ "./src/pages/SubTopics/components/SubTopicThread/Style/index.js");
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_SubTopics_components_SubTopicThread_Style__WEBPACK_IMPORTED_MODULE_4__.ColumnContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_SubTopics_components_CommentColumn_Index__WEBPACK_IMPORTED_MODULE_3__["default"], {
    numComments: comments === null || comments === void 0 ? void 0 : comments.allComments,
    comments: comments.all,
    commentSentiment: "All",
    color: "var(--m-primary-background-color)"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
    eventKey: "Defendant",
    title: "Defendant"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_SubTopics_components_SubTopicThread_Style__WEBPACK_IMPORTED_MODULE_4__.ColumnContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_SubTopics_components_CommentColumn_Index__WEBPACK_IMPORTED_MODULE_3__["default"], {
    numComments: comments === null || comments === void 0 ? void 0 : comments.positiveComments,
    comments: comments.Defendant,
    commentSentiment: "Defendant",
    color: "#6A6E70"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
    eventKey: "Reporter",
    title: "Reporters"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_SubTopics_components_SubTopicThread_Style__WEBPACK_IMPORTED_MODULE_4__.ColumnContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_SubTopics_components_CommentColumn_Index__WEBPACK_IMPORTED_MODULE_3__["default"], {
    comments: comments.Reporter,
    commentSentiment: "Reporter",
    color: "#474A4F"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
    eventKey: "Jury",
    title: "Jury"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_SubTopics_components_SubTopicThread_Style__WEBPACK_IMPORTED_MODULE_4__.ColumnContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_SubTopics_components_CommentColumn_Index__WEBPACK_IMPORTED_MODULE_3__["default"], {
    comments: comments.Jury,
    commentSentiment: "Jury",
    color: "var(--m-primary-background-color)"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
    eventKey: "General",
    title: "General Public"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_SubTopics_components_SubTopicThread_Style__WEBPACK_IMPORTED_MODULE_4__.ColumnContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_SubTopics_components_CommentColumn_Index__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_5__.VotingContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_5__.VotesAgainst, null, "Votes Against", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, reportStats && ((_reportStats$numVotes = reportStats.numVotesAgainst) !== null && _reportStats$numVotes !== void 0 ? _reportStats$numVotes : '?'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_5__.VotesFor, null, "Votes For", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, reportStats && ((_reportStats$numVotes2 = reportStats.numVotesFor) !== null && _reportStats$numVotes2 !== void 0 ? _reportStats$numVotes2 : '?'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_5__.MiddleSection, {
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
var VotesAgainst = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  left: 10%;\n  top: 50%;\n  transform: translate(0, -50%);\n  font-size: 1.3vw;\n  align-items: center;\n  @media only screen and (max-width: 800px) {\n    font-size: 4vw;\n  }\n  \n"])));
var VotesFor = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(_templateObject3 || (_templateObject3 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  right: 10%;\n  top: 50%;\n  transform: translate(0, -50%);\n  font-size: 1.3vw;\n  align-items: center;\n\n  @media only screen and (max-width: 800px) {\n    font-size: 4vw;\n  }\n"])));
var MiddleSection = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(_templateObject4 || (_templateObject4 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\n  span:first-child {\n    font-size: 2vw;\n    font-weight: bold;\n    color: ", ";\n  }\n  transform: translate(0, -35%);\n  height: 55%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n"])), function (props) {
  return props.verdict === 'Violation' ? 'red' : 'green';
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFBUSxDQUFDUixxREFBVSxFQUFYLENBQWQ7SUFBQSxDQUhYLENBRHNDO0VBQUEsQ0FBZjtBQUFBLENBQWxCO0FBT1AsaUVBQWU7RUFDYnhFLFNBQVMsRUFBVEE7QUFEYSxDQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvZ2VuZXJpYy90aW1lL2NhbGN1bGF0ZVRpbWVMZWZ0LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL1RyaWJ1bmFsL0luZGV4LmpzeCIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9UcmlidW5hbC9TdHlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9UcmlidW5hbC9jb21wb25lbnRzL1RyaWJ1bmFsQ29tbWVudHMvSW5kZXguanN4Iiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL1RyaWJ1bmFsL2NvbXBvbmVudHMvVHJpYnVuYWxDb21tZW50cy9TdHlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9UcmlidW5hbC9jb21wb25lbnRzL1RyaWJ1bmFsQ29tbWVudHMvaG9va3MvdXNlQ2F0ZWdvcml6ZUNvbW1lbnRzLmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL1RyaWJ1bmFsL2NvbXBvbmVudHMvVm90aW5nQm94L0luZGV4LmpzeCIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9UcmlidW5hbC9jb21wb25lbnRzL1ZvdGluZ0JveC9TdHlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9yZWR1eC9hY3Rpb25zL3JlcG9ydHMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGNhbGN1bGF0ZVRpbWVMZWZ0ID0gKHJlcG9ydEVuZFRpbWUpID0+IHtcbiAgLy8gY29uc3QgeWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKVxuICBjb25zdCBkaWZmZXJlbmNlID0gK25ldyBEYXRlKHJlcG9ydEVuZFRpbWUpIC0gK25ldyBEYXRlKClcblxuICBsZXQgdGltZUxlZnQgPSB7fVxuXG4gIGlmIChkaWZmZXJlbmNlID4gMCkge1xuICAgIHRpbWVMZWZ0ID0ge1xuICAgICAgZGF5czogTWF0aC5mbG9vcihkaWZmZXJlbmNlIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKSxcbiAgICAgIGhvdXJzOiBNYXRoLmZsb29yKChkaWZmZXJlbmNlIC8gKDEwMDAgKiA2MCAqIDYwKSkgJSAyNCksXG4gICAgICBtaW51dGVzOiBNYXRoLmZsb29yKChkaWZmZXJlbmNlIC8gMTAwMCAvIDYwKSAlIDYwKSxcbiAgICAgIHNlY29uZHM6IE1hdGguZmxvb3IoKGRpZmZlcmVuY2UgLyAxMDAwKSAlIDYwKSxcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRpbWVMZWZ0XG59XG4iLCJpbXBvcnQgUmVhY3QsIHtcbiAgbWVtbywgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSxcbn0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuaW1wb3J0IHtcbiAgT3V0ZXJDb250YWluZXIsIElubmVyQ29udGFpbmVyLFxuICBIZWFkZXIsIFN0eWxlZFNjYWxlc1N2ZywgUmVwb3J0U3RhdHNDb250YWluZXIsIFJlcG9ydFN0YXRJdGVtLFxuICBTdHlsZWRQaWxsYXJTdmcsIFRpbWVyLFxufSBmcm9tICcuL1N0eWxlL2luZGV4J1xuaW1wb3J0IFRvcGljSXRlbSBmcm9tICcuLi9Ub3BpY3MvY29tcG9uZW50cy9Ub3BpY0l0ZW0vSW5kZXgnXG5pbXBvcnQgdXNlQmluZERpc3BhdGNoIGZyb20gJy4uL2hvb2tzL3JlZHV4L3VzZUJpbmREaXNwYXRjaCdcblxuaW1wb3J0IHRvcGljQWN0aW9ucyBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zL3RvcGljcy9pbmRleCdcbmltcG9ydCByZXBvcnRBY3Rpb25zIGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMvcmVwb3J0cy9pbmRleCdcbmltcG9ydCB0cmlidW5hbENvbW1lbnRzQWN0aW9ucyBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zL3RyaWJ1bmFsX2NvbW1lbnRzL2luZGV4J1xuaW1wb3J0IGNvbW1lbnRBY3Rpb25zIGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMvY29tbWVudHMvaW5kZXgnXG5cbmltcG9ydCB7IGNhbGN1bGF0ZVRpbWVMZWZ0IH0gZnJvbSAnLi4vLi4vZ2VuZXJpYy90aW1lL2NhbGN1bGF0ZVRpbWVMZWZ0J1xuaW1wb3J0IFRyaWJ1bmFsQ29tbWVudHMgZnJvbSAnLi9jb21wb25lbnRzL1RyaWJ1bmFsQ29tbWVudHMvSW5kZXgnXG5pbXBvcnQgVm90aW5nQm94IGZyb20gJy4vY29tcG9uZW50cy9Wb3RpbmdCb3gvSW5kZXgnXG5cbmltcG9ydCBDb21tZW50IGZyb20gJy4uL1N1YlRvcGljcy9jb21wb25lbnRzL0NvbW1lbnQvSW5kZXgnXG5pbXBvcnQgeyBDT01NRU5ULCBUT1BJQyB9IGZyb20gJy4uLy4uL2VudW1zL2NvbnRlbnRfdHlwZSdcblxuY29uc3QgVHJpYnVuYWwgPSAoKSA9PiB7XG4gIGNvbnN0IHsgY29udGVudElkLCBjb250ZW50VHlwZSB9ID0gdXNlUGFyYW1zKClcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKChzKSA9PiBzLnNlc3Npb24uY3VycmVudFVzZXIpXG4gIGNvbnN0IHRvcGljcyA9IHVzZVNlbGVjdG9yKChzKSA9PiBzLnRvcGljcy5saXN0KVxuICBjb25zdCBjb21tZW50cyA9IHVzZVNlbGVjdG9yKChzKSA9PiBzLmNvbW1lbnRzLmxpc3QpXG4gIGNvbnN0IHRyaWJ1bmFsQ29tbWVudHMgPSB1c2VTZWxlY3RvcigocykgPT4gcy50cmlidW5hbENvbW1lbnRzKVxuICBjb25zdCByZXBvcnRTdGF0cyA9IHVzZVNlbGVjdG9yKChzKSA9PiBzLnJlcG9ydHMpW2NvbnRlbnRJZF1cbiAgY29uc3QgW3RpbWVMZWZ0LCBzZXRUaW1lTGVmdF0gPSB1c2VTdGF0ZSh7fSlcblxuICBjb25zdCB7XG4gICAgZ2V0VG9waWMsXG4gICAgZ2V0UmVwb3J0LFxuICAgIGdldEFsbFRyaWJ1bmFsQ29tbWVudHNCYXRjaCxcbiAgICBnZXRDb21tZW50LFxuICB9ID0gdXNlQmluZERpc3BhdGNoKHRvcGljQWN0aW9ucywgcmVwb3J0QWN0aW9ucywgdHJpYnVuYWxDb21tZW50c0FjdGlvbnMsIGNvbW1lbnRBY3Rpb25zKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IHRpbWVyXG4gICAgaWYgKHJlcG9ydFN0YXRzKSB7XG4gICAgICB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgc2V0VGltZUxlZnQoY2FsY3VsYXRlVGltZUxlZnQocmVwb3J0U3RhdHMucmVwb3J0UGVyaW9kRW5kKSlcbiAgICAgIH0sIDEwMDApXG4gICAgfVxuICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZXIpXG4gIH0sIFtyZXBvcnRTdGF0c10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY29udGVudElkICYmIHVzZXIpIHtcbiAgICAgIGlmIChjb250ZW50VHlwZSA9PT0gQ09NTUVOVCkgZ2V0Q29tbWVudChjb250ZW50SWQpXG4gICAgICBpZiAoY29udGVudFR5cGUgPT09IFRPUElDKSBnZXRUb3BpYyhjb250ZW50SWQsIHVzZXIuaWQpXG4gICAgICBnZXRSZXBvcnQoY29udGVudElkKVxuICAgICAgZ2V0QWxsVHJpYnVuYWxDb21tZW50c0JhdGNoKGNvbnRlbnRJZClcbiAgICB9XG4gIH0sIFtjb250ZW50SWQsIHVzZXJdKVxuXG4gIGNvbnN0IHRpbWVyQ29tcG9uZW50cyA9IFtdXG5cbiAgT2JqZWN0LmtleXModGltZUxlZnQpLmZvckVhY2goKGludGVydmFsLCBpZHgpID0+IHtcbiAgICBpZiAoIXRpbWVMZWZ0W2ludGVydmFsXSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGltZXJDb21wb25lbnRzLnB1c2goXG4gICAgICA8c3BhbiBrZXk9e1N0cmluZyhgJHtpZHh9MGApfT5cbiAgICAgICAge3RpbWVMZWZ0W2ludGVydmFsXX1cbiAgICAgICAgeycgJ31cbiAgICAgICAge2ludGVydmFsfVxuICAgICAgICB7JyAnfVxuICAgICAgPC9zcGFuPixcbiAgICApXG4gIH0pXG5cbiAgY29uc3Qgdm90aW5nVGltZVVwID0gdGltZXJDb21wb25lbnRzLmxlbmd0aCA9PT0gMFxuXG4gIGNvbnN0IENvbnRlbnQgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCB0b3BpYyA9IHRvcGljcz8uZmluZCgodCkgPT4gdC5pZCA9PT0gY29udGVudElkKVxuICAgIGNvbnN0IGNvbW1lbnQgPSBjb21tZW50cz8uZmluZCgoYykgPT4gYy5kYXRhLmlkID09PSBjb250ZW50SWQpXG4gICAgaWYgKHRvcGljKSByZXR1cm4gPFRvcGljSXRlbSBrZXk9e3RvcGljLmlkfSB0b3BpYz17dG9waWN9IHVzZXI9e3VzZXJ9IC8+XG4gICAgaWYgKGNvbW1lbnQpIHJldHVybiA8Q29tbWVudCBjb21tZW50RGF0YT17Y29tbWVudC5kYXRhfSByZXBsaWVzPXtjb21tZW50LmNoaWxkcmVufSAvPlxuICAgIHJldHVybiBudWxsXG4gIH0sIFt0b3BpY3MsIGNvbW1lbnRzLCBjb250ZW50SWRdKVxuICByZXR1cm4gKFxuICAgIDxPdXRlckNvbnRhaW5lciBpZD1cInRyaWJ1bmFsLWNvbnRhaW5lclwiPlxuICAgICAgPEhlYWRlcj5cbiAgICAgICAgPFN0eWxlZFNjYWxlc1N2ZyAvPlxuICAgICAgICA8aDE+XG4gICAgICAgICAgQ29tbXVuaXR5IENvdXJ0XG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxTdHlsZWRTY2FsZXNTdmcgLz5cbiAgICAgIDwvSGVhZGVyPlxuICAgICAgPFRpbWVyPlxuICAgICAgICA8aDQ+XG4gICAgICAgICAgVm90aW5nIFBlcmlvZCBUaW1pbmcgUmVtYWluaW5nXG4gICAgICAgIDwvaDQ+XG4gICAgICAgIHsnXFxuJ31cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7KCFPYmplY3Qua2V5cyh0aW1lTGVmdCkgJiYgcmVwb3J0U3RhdHMpID8gPHNwYW4+VGltZSBJcyBVcCE8L3NwYW4+IDogdGltZXJDb21wb25lbnRzfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvVGltZXI+XG4gICAgICA8SW5uZXJDb250YWluZXI+XG4gICAgICAgIDxTdHlsZWRQaWxsYXJTdmcgLz5cbiAgICAgICAge0NvbnRlbnR9XG4gICAgICAgIDxTdHlsZWRQaWxsYXJTdmcgLz5cbiAgICAgIDwvSW5uZXJDb250YWluZXI+XG4gICAgICB7cmVwb3J0U3RhdHMgJiYgKFxuICAgICAgPFZvdGluZ0JveFxuICAgICAgICBjb250ZW50SWQ9e2NvbnRlbnRJZH1cbiAgICAgICAgcmVwb3J0U3RhdHM9e3JlcG9ydFN0YXRzfVxuICAgICAgICB2b3RpbmdUaW1lVXA9e3ZvdGluZ1RpbWVVcH1cbiAgICAgIC8+XG4gICAgICApfVxuICAgICAgPFJlcG9ydFN0YXRzQ29udGFpbmVyPlxuICAgICAgICA8UmVwb3J0U3RhdEl0ZW0+XG4gICAgICAgICAgPGgyPlRveGljIFJlcG9ydHM8L2gyPlxuICAgICAgICAgIHtyZXBvcnRTdGF0cyAmJiAocmVwb3J0U3RhdHMubnVtVG94aWNSZXBvcnRzIHx8IDApfVxuICAgICAgICA8L1JlcG9ydFN0YXRJdGVtPlxuICAgICAgICA8UmVwb3J0U3RhdEl0ZW0+XG4gICAgICAgICAgPGgyPlBlcnNvbmFsIEF0dGFjayBSZXBvcnRzPC9oMj5cbiAgICAgICAgICB7cmVwb3J0U3RhdHMgJiYgKHJlcG9ydFN0YXRzLm51bVBlcnNvbmFsQXR0YWNrUmVwb3J0cyB8fCAwKX1cbiAgICAgICAgPC9SZXBvcnRTdGF0SXRlbT5cbiAgICAgICAgPFJlcG9ydFN0YXRJdGVtPlxuICAgICAgICAgIDxoMj5TcGFtIFJlcG9ydHM8L2gyPlxuICAgICAgICAgIHtyZXBvcnRTdGF0cyAmJiAocmVwb3J0U3RhdHMubnVtU3BhbVJlcG9ydHMgfHwgMCl9XG4gICAgICAgIDwvUmVwb3J0U3RhdEl0ZW0+XG4gICAgICA8L1JlcG9ydFN0YXRzQ29udGFpbmVyPlxuICAgICAgPFRyaWJ1bmFsQ29tbWVudHMgY29tbWVudHM9e3RyaWJ1bmFsQ29tbWVudHN9IC8+XG4gICAgPC9PdXRlckNvbnRhaW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBtZW1vKFRyaWJ1bmFsKVxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IFNjYWxlc1N2ZywgUGlsbGFyU3ZnIH0gZnJvbSAnLi4vLi4vLi4vc3Zncy9zdmdzJ1xuXG5leHBvcnQgY29uc3QgT3V0ZXJDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1ib3R0b206IDYwdmg7XG5gXG5cbmV4cG9ydCBjb25zdCBIZWFkZXIgPSBzdHlsZWQoJ2hlYWRlcicpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IGNsYW1wKDMwcHgsIDF2dywgMTAwcHgpIDAgY2xhbXAoMzBweCwgMXZ3LCAxMDBweCkgMDtcbiAgaDEge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMnZ3O1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgIGZvbnQtc2l6ZTogNS43dnc7XG4gICAgfVxuICB9XG4gIHN2ZyB7XG4gICAgd2lkdGg6IDR2dyAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNHZ3ICFpbXBvcnRhbnQ7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgd2lkdGg6IDEydncgIWltcG9ydGFudDtcbiAgICAgIGhlaWdodDogMTJ2dyAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBtYXJnaW46IDAgM3Z3O1xuICB9XG5gXG5leHBvcnQgY29uc3QgU3R5bGVkU2NhbGVzU3ZnID0gc3R5bGVkKFNjYWxlc1N2ZylgXG4gIHdpZHRoOiA0dncgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0dncgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwIDF2dztcbmBcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFBpbGxhclN2ZyA9IHN0eWxlZChQaWxsYXJTdmcpYFxuICBkaXNwbGF5OiBibG9jaztcbmBcblxuZXhwb3J0IGNvbnN0IElubmVyQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXG4gIHdpZHRoOiAxMDAlO1xuXG5gXG5cbmV4cG9ydCBjb25zdCBWb3RpbmdDb250YWluZXIgPSBzdHlsZWQoJ3NlY3Rpb24nKWBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDE0dnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBib3gtc2hhZG93OiAwcHggMTBweCAyMHB4IHJnYig2MCA2MCA2MCAvIDEwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCBsaWdodGdyYXk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyMDAsIDIwMCwgMjAwLCAwLjI1KTtcbiAgbWFyZ2luOiBjbGFtcCgzMHB4LCAxdncsIDEwMHB4KSAwIGNsYW1wKDMwcHgsIDF2dywgMTAwcHgpIDA7XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiAzMHZ3O1xuICB9XG5cbiAgc3ZnIHtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgICB3aWR0aDogOXZ3O1xuICAgICAgaGVpZ2h0OiA5dnc7XG4gICAgfVxuICB9XG5cbiAgc3BhbiB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgICAgZm9udC1zaXplOiA0dnc7XG4gICAgfVxuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBSZXBvcnRTdGF0c0NvbnRhaW5lciA9IHN0eWxlZCgndWwnKWBcbiAgZGlzcGxheTogZmxleDtcbmBcblxuZXhwb3J0IGNvbnN0IFJlcG9ydFN0YXRJdGVtID0gc3R5bGVkKCdsaScpYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tLW1lbnUtaXRlbS1ob3Zlcik7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCByZ2IoNjAgNjAgNjAgLyAxMCUpO1xuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbS1zZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMXZ3O1xuICBwYWRkaW5nOiAydncgNHZ3O1xuICBtYXJnaW46IDJ2dyA0dnc7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAgIGZvbnQtc2l6ZTogNHZ3O1xuICAgICAgbWFyZ2luOiAydncgMnZ3O1xuXG4gICAgfVxuYFxuZXhwb3J0IGNvbnN0IFZvdGVzQWdhaW5zdCA9IHN0eWxlZCgnZGl2JylgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTAlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG4gIGZvbnQtc2l6ZTogMnZ3O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgZm9udC1zaXplOiA0dnc7XG4gIH1cbiAgXG5gXG5cbmV4cG9ydCBjb25zdCBWb3Rlc0ZvciA9IHN0eWxlZCgnZGl2JylgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwJTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICBmb250LXNpemU6IDJ2dztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgZm9udC1zaXplOiA0dnc7XG4gIH1cbmBcbmV4cG9ydCBjb25zdCBUaW1lciA9IHN0eWxlZCgnZGl2JylgXG4gIGZvbnQtc2l6ZTogMS4zdnc7IFxuICBjb2xvcjogZ3JheTtcbiAgbWFyZ2luOiAwIDAgY2xhbXAoMzBweCwgMXZ3LCAxMDBweCkgMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgIGZvbnQtc2l6ZTogNHZ3O1xuICB9XG5cbiAgaDQge1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgTWlkZGxlU2VjdGlvbiA9IHN0eWxlZCgnZGl2JylgXG5cbiAgc3BhbjpmaXJzdC1jaGlsZCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IHJlZDtcbiAgfVxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmBcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVGFiIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuXG5pbXBvcnQgeyBMaW5lIH0gZnJvbSAnLi4vLi4vLi4vQ29tbW9uQ29tcG9uZW50cy9MaW5lJ1xuaW1wb3J0IENvbW1lbnRDb2x1bW4gZnJvbSAnLi4vLi4vLi4vU3ViVG9waWNzL2NvbXBvbmVudHMvQ29tbWVudENvbHVtbi9JbmRleCdcbmltcG9ydCB7IENvbHVtbkNvbnRhaW5lciB9IGZyb20gJy4uLy4uLy4uL1N1YlRvcGljcy9jb21wb25lbnRzL1N1YlRvcGljVGhyZWFkL1N0eWxlJ1xuaW1wb3J0IHVzZUNhdGVnb3JpemVDb21tZW50cyBmcm9tICcuL2hvb2tzL3VzZUNhdGVnb3JpemVDb21tZW50cydcbmltcG9ydCB7IFN0eWxlZFRoZW1lVGFiIH0gZnJvbSAnLi9TdHlsZS9pbmRleCdcblxuY29uc3QgVHJpYnVuYWxDb21tZW50cyA9ICgpID0+IHtcbiAgY29uc3QgW2tleSwgc2V0S2V5XSA9IHVzZVN0YXRlKCdhbGwnKVxuICBjb25zdCBjb21tZW50cyA9IHVzZUNhdGVnb3JpemVDb21tZW50cygpXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxMaW5lIC8+XG4gICAgICA8U3R5bGVkVGhlbWVUYWJcbiAgICAgICAgYWN0aXZlS2V5PXtrZXl9XG4gICAgICAgIG9uU2VsZWN0PXsoaykgPT4gc2V0S2V5KGspfVxuICAgICAgPlxuICAgICAgICA8VGFiIGV2ZW50S2V5PVwiYWxsXCIgdGl0bGU9XCJBbGxcIj5cbiAgICAgICAgICA8Q29sdW1uQ29udGFpbmVyPlxuICAgICAgICAgICAgPENvbW1lbnRDb2x1bW4gbnVtQ29tbWVudHM9e2NvbW1lbnRzPy5hbGxDb21tZW50c30gY29tbWVudHM9e2NvbW1lbnRzLmFsbH0gY29tbWVudFNlbnRpbWVudD1cIkFsbFwiIGNvbG9yPVwidmFyKC0tbS1wcmltYXJ5LWJhY2tncm91bmQtY29sb3IpXCIgLz5cbiAgICAgICAgICA8L0NvbHVtbkNvbnRhaW5lcj5cbiAgICAgICAgPC9UYWI+XG4gICAgICAgIDxUYWIgZXZlbnRLZXk9XCJEZWZlbmRhbnRcIiB0aXRsZT1cIkRlZmVuZGFudFwiPlxuICAgICAgICAgIDxDb2x1bW5Db250YWluZXI+XG4gICAgICAgICAgICA8Q29tbWVudENvbHVtbiBudW1Db21tZW50cz17Y29tbWVudHM/LnBvc2l0aXZlQ29tbWVudHN9IGNvbW1lbnRzPXtjb21tZW50cy5EZWZlbmRhbnR9IGNvbW1lbnRTZW50aW1lbnQ9XCJEZWZlbmRhbnRcIiBjb2xvcj1cIiM2QTZFNzBcIiAvPlxuICAgICAgICAgIDwvQ29sdW1uQ29udGFpbmVyPlxuICAgICAgICA8L1RhYj5cbiAgICAgICAgPFRhYiBldmVudEtleT1cIlJlcG9ydGVyXCIgdGl0bGU9XCJSZXBvcnRlcnNcIj5cbiAgICAgICAgICA8Q29sdW1uQ29udGFpbmVyPlxuICAgICAgICAgICAgPENvbW1lbnRDb2x1bW4gY29tbWVudHM9e2NvbW1lbnRzLlJlcG9ydGVyfSBjb21tZW50U2VudGltZW50PVwiUmVwb3J0ZXJcIiBjb2xvcj1cIiM0NzRBNEZcIiAvPlxuICAgICAgICAgIDwvQ29sdW1uQ29udGFpbmVyPlxuICAgICAgICA8L1RhYj5cbiAgICAgICAgPFRhYiBldmVudEtleT1cIkp1cnlcIiB0aXRsZT1cIkp1cnlcIj5cbiAgICAgICAgICA8Q29sdW1uQ29udGFpbmVyPlxuICAgICAgICAgICAgPENvbW1lbnRDb2x1bW4gY29tbWVudHM9e2NvbW1lbnRzLkp1cnl9IGNvbW1lbnRTZW50aW1lbnQ9XCJKdXJ5XCIgY29sb3I9XCJ2YXIoLS1tLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcilcIiAvPlxuICAgICAgICAgIDwvQ29sdW1uQ29udGFpbmVyPlxuICAgICAgICA8L1RhYj5cbiAgICAgICAgPFRhYiBldmVudEtleT1cIkdlbmVyYWxcIiB0aXRsZT1cIkdlbmVyYWwgUHVibGljXCI+XG4gICAgICAgICAgPENvbHVtbkNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxDb21tZW50Q29sdW1uIGNvbW1lbnRzPXtjb21tZW50cy5HZW5lcmFsfSBjb21tZW50U2VudGltZW50PVwiR2VuZXJhbCBQdWJsaWNcIiBjb2xvcj1cInZhcigtLW0tcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yKVwiIC8+XG4gICAgICAgICAgPC9Db2x1bW5Db250YWluZXI+XG4gICAgICAgIDwvVGFiPlxuICAgICAgPC9TdHlsZWRUaGVtZVRhYj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmlidW5hbENvbW1lbnRzXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgVGhlbWVUYWJOZXcgfSBmcm9tICcuLi8uLi8uLi8uLi9Db21tb25Db21wb25lbnRzL1RhYnMvU3R5bGUnXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRUaGVtZVRhYiA9IHN0eWxlZChUaGVtZVRhYk5ldylgXG4gIC5uYXYtaXRlbSB7XG4gICAgbWFyZ2luOiAwIDAuM2VtIDAgMDtcbiAgfVxuYFxuIiwiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuY29uc3QgY29tbWVudFR5cGUgPSBuZXcgU2V0KFsnRGVmZW5kYW50JywgJ1JlcG9ydGVyJywgJ0p1cnknLCAnR2VuZXJhbCddKVxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IGNvbW1lbnRzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS50cmlidW5hbENvbW1lbnRzLmxpc3QpXG4gIHJldHVybiB1c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBjYXRlZ29yaXplZENvbW1lbnRzID0ge1xuICAgICAgRGVmZW5kYW50OiBbXSxcbiAgICAgIFJlcG9ydGVyOiBbXSxcbiAgICAgIEp1cnk6IFtdLFxuICAgICAgR2VuZXJhbDogW10sXG4gICAgICBhbGw6IGNvbW1lbnRzLFxuICAgIH1cbiAgICBjb21tZW50cy5mb3JFYWNoKChjb21tZW50KSA9PiB7XG4gICAgICBpZiAoY29tbWVudFR5cGUuaGFzKGNvbW1lbnQuZGF0YT8uY29tbWVudFR5cGUpKSB7XG4gICAgICAgIGNhdGVnb3JpemVkQ29tbWVudHNbY29tbWVudC5kYXRhPy5jb21tZW50VHlwZV0ucHVzaChjb21tZW50KVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGNhdGVnb3JpemVkQ29tbWVudHNcbiAgfSwgW2NvbW1lbnRzXSlcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBtZW1vLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBHYXZlbDIsIENhc3RCYWxsb3RTdmcgfSBmcm9tICcuLi8uLi8uLi8uLi9zdmdzL3N2Z3MnXG5pbXBvcnQgeyBUT1BJQ19WT1RFX0ZPUk0gfSBmcm9tICcuLi8uLi8uLi9BcHAvTW9kYWwvSW5kZXgnXG5pbXBvcnQgVGhlbWVCdXR0b24gZnJvbSAnLi4vLi4vLi4vQ29tbW9uQ29tcG9uZW50cy9CdXR0b24vSW5kZXgnXG5pbXBvcnQgdXNlT3Blbk1vZGFsIGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZU9wZW5Nb2RhbCdcbmltcG9ydCB7XG4gIFZvdGluZ0NvbnRhaW5lciwgVm90ZXNBZ2FpbnN0LCBWb3Rlc0ZvciwgTWlkZGxlU2VjdGlvbixcbn0gZnJvbSAnLi9TdHlsZSdcblxuY29uc3QgVm90aW5nQm94ID0gKHsgY29udGVudElkLCByZXBvcnRTdGF0cywgdm90aW5nVGltZVVwIH0pID0+IHtcbiAgY29uc3Qgb3Blbk1vZGFsID0gdXNlT3Blbk1vZGFsKFRPUElDX1ZPVEVfRk9STSwgeyBjb250ZW50SWQgfSlcblxuICBjb25zdCBoYXNBbHJlYWR5Vm90ZWQgPSB1c2VNZW1vKCgpID0+IChyZXBvcnRTdGF0cy52b3RlQWdhaW5zdCB8fCByZXBvcnRTdGF0cy52b3RlRm9yKSxcbiAgICBbcmVwb3J0U3RhdHMudm90ZUFnYWluc3QsIHJlcG9ydFN0YXRzLnZvdGVGb3JdKVxuXG4gIGNvbnN0IHZlcmRpY3QgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBpZiAocmVwb3J0U3RhdHMubnVtVm90ZXNGb3IgPiByZXBvcnRTdGF0cy5udW1Wb3Rlc0FnYWluc3QpIHJldHVybiAnVmlvbGF0aW9uJ1xuICAgIHJldHVybiAnTm8gVmlvbGF0aW9uJ1xuICB9LCBbcmVwb3J0U3RhdHMubnVtVm90ZXNBZ2FpbnN0LCByZXBvcnRTdGF0cy5udW1Wb3Rlc0Zvcl0pXG5cbiAgcmV0dXJuIChcbiAgICA8Vm90aW5nQ29udGFpbmVyPlxuICAgICAgPFZvdGVzQWdhaW5zdD5cbiAgICAgICAgVm90ZXMgQWdhaW5zdFxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICB7cmVwb3J0U3RhdHMgJiYgKHJlcG9ydFN0YXRzLm51bVZvdGVzQWdhaW5zdCA/PyAnPycpfVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L1ZvdGVzQWdhaW5zdD5cbiAgICAgIDxWb3Rlc0Zvcj5cbiAgICAgICAgVm90ZXMgRm9yXG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgIHtyZXBvcnRTdGF0cyAmJiAocmVwb3J0U3RhdHMubnVtVm90ZXNGb3IgPz8gJz8nKX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9Wb3Rlc0Zvcj5cbiAgICAgIDxNaWRkbGVTZWN0aW9uIHZlcmRpY3Q9e3ZlcmRpY3R9PlxuICAgICAgICB7IHZvdGluZ1RpbWVVcCAmJiAoXG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgIHtgVkVSRElDVCDiraIgJHt2ZXJkaWN0fWB9XG4gICAgICAgICAgeycgJ31cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICApfVxuICAgICAgICB7IHZvdGluZ1RpbWVVcCA/IDxHYXZlbDIgLz4gOiA8Q2FzdEJhbGxvdFN2ZyAvPiB9XG4gICAgICAgIHsocmVwb3J0U3RhdHMgJiYgIXZvdGluZ1RpbWVVcCkgJiYgKFxuICAgICAgICA8VGhlbWVCdXR0b24gb25DbGljaz17b3Blbk1vZGFsfT5cbiAgICAgICAgICB7aGFzQWxyZWFkeVZvdGVkID8gJ0NoYW5nZSBZb3VyIFZvdGUnIDogJ0Nhc3QgWW91ciBWb3RlJ31cbiAgICAgICAgPC9UaGVtZUJ1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgIDwvTWlkZGxlU2VjdGlvbj5cbiAgICA8L1ZvdGluZ0NvbnRhaW5lcj5cblxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW8oVm90aW5nQm94KVxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IFZvdGluZ0NvbnRhaW5lciA9IHN0eWxlZCgnc2VjdGlvbicpYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMTR2dztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggcmdiKDYwIDYwIDYwIC8gMTAlKTtcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDAuNXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDIwMCwgMjAwLCAyMDAsIDAuMjUpO1xuICBtYXJnaW46IGNsYW1wKDMwcHgsIDF2dywgMTAwcHgpIDAgY2xhbXAoMzBweCwgMXZ3LCAxMDBweCkgMDtcblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IDMwdnc7XG4gIH1cblxuICBzdmcge1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAgIHdpZHRoOiA5dnc7XG4gICAgICBoZWlnaHQ6IDl2dztcbiAgICB9XG4gIH1cblxuICBzcGFuIHtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgICBmb250LXNpemU6IDR2dztcbiAgICB9XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IFZvdGVzQWdhaW5zdCA9IHN0eWxlZCgnZGl2JylgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTAlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG4gIGZvbnQtc2l6ZTogMS4zdnc7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICBmb250LXNpemU6IDR2dztcbiAgfVxuICBcbmBcblxuZXhwb3J0IGNvbnN0IFZvdGVzRm9yID0gc3R5bGVkKCdkaXYnKWBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTAlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG4gIGZvbnQtc2l6ZTogMS4zdnc7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgIGZvbnQtc2l6ZTogNHZ3O1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBNaWRkbGVTZWN0aW9uID0gc3R5bGVkKCdkaXYnKWBcblxuICBzcGFuOmZpcnN0LWNoaWxkIHtcbiAgICBmb250LXNpemU6IDJ2dztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogJHsocHJvcHMpID0+IChwcm9wcy52ZXJkaWN0ID09PSAnVmlvbGF0aW9uJyA/ICdyZWQnIDogJ2dyZWVuJyl9O1xuICB9XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0zNSUpO1xuICBoZWlnaHQ6IDU1JTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuYFxuIiwiaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSdcbmltcG9ydCB7IGNsb3NlTW9kYWwgfSBmcm9tICcuLi91aS9pbmRleCdcbmltcG9ydCB7IEFERF9SRVBPUlQgfSBmcm9tICcuLi8uLi9yZWR1Y2Vycy9yZXBvcnRzL3JlcG9ydHNSZWR1Y2VyJ1xuaW1wb3J0ICogYXMgUmVwb3J0c0FwaVV0aWwgZnJvbSAnLi4vLi4vLi4vYXBpL3YxL3JlcG9ydHMvcmVwb3J0c19hcGlfdXRpbCdcbmltcG9ydCB7IGVycm9yRm9ybWF0dGVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvZXJyb3JGb3JtYXR0ZXInXG5cbmNvbnN0IGFkZFJlcG9ydEFjdGlvbkNyZWF0b3IgPSAocmVwb3J0KSA9PiAoe1xuICB0eXBlOiBBRERfUkVQT1JULFxuICBwYXlsb2FkOiByZXBvcnQsXG59KVxuXG5leHBvcnQgY29uc3QgZ2V0UmVwb3J0ID0gKGNvbnRlbnRJZCkgPT4gKGRpc3BhdGNoKSA9PiAoXG4gIFJlcG9ydHNBcGlVdGlsLmdldFJlcG9ydChjb250ZW50SWQpXG4gICAgLnRoZW4oKHJlcykgPT4gZGlzcGF0Y2goYWRkUmVwb3J0QWN0aW9uQ3JlYXRvcihyZXMuZGF0YSkpKVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHRvYXN0LmVycm9yKGVycm9yRm9ybWF0dGVyKGVycm9yKSkpXG4gICAgLmZpbmFsbHkoKCkgPT4gZGlzcGF0Y2goY2xvc2VNb2RhbCgpKSlcbilcblxuZXhwb3J0IGRlZmF1bHQge1xuICBnZXRSZXBvcnQsXG59XG4iXSwibmFtZXMiOlsiY2FsY3VsYXRlVGltZUxlZnQiLCJyZXBvcnRFbmRUaW1lIiwiZGlmZmVyZW5jZSIsIkRhdGUiLCJ0aW1lTGVmdCIsImRheXMiLCJNYXRoIiwiZmxvb3IiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwiUmVhY3QiLCJtZW1vIiwidXNlRWZmZWN0IiwidXNlTWVtbyIsInVzZVN0YXRlIiwidXNlU2VsZWN0b3IiLCJ1c2VQYXJhbXMiLCJPdXRlckNvbnRhaW5lciIsIklubmVyQ29udGFpbmVyIiwiSGVhZGVyIiwiU3R5bGVkU2NhbGVzU3ZnIiwiUmVwb3J0U3RhdHNDb250YWluZXIiLCJSZXBvcnRTdGF0SXRlbSIsIlN0eWxlZFBpbGxhclN2ZyIsIlRpbWVyIiwiVG9waWNJdGVtIiwidXNlQmluZERpc3BhdGNoIiwidG9waWNBY3Rpb25zIiwicmVwb3J0QWN0aW9ucyIsInRyaWJ1bmFsQ29tbWVudHNBY3Rpb25zIiwiY29tbWVudEFjdGlvbnMiLCJUcmlidW5hbENvbW1lbnRzIiwiVm90aW5nQm94IiwiQ29tbWVudCIsIkNPTU1FTlQiLCJUT1BJQyIsIlRyaWJ1bmFsIiwiY29udGVudElkIiwiY29udGVudFR5cGUiLCJ1c2VyIiwicyIsInNlc3Npb24iLCJjdXJyZW50VXNlciIsInRvcGljcyIsImxpc3QiLCJjb21tZW50cyIsInRyaWJ1bmFsQ29tbWVudHMiLCJyZXBvcnRTdGF0cyIsInJlcG9ydHMiLCJzZXRUaW1lTGVmdCIsImdldFRvcGljIiwiZ2V0UmVwb3J0IiwiZ2V0QWxsVHJpYnVuYWxDb21tZW50c0JhdGNoIiwiZ2V0Q29tbWVudCIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJyZXBvcnRQZXJpb2RFbmQiLCJjbGVhclRpbWVvdXQiLCJpZCIsInRpbWVyQ29tcG9uZW50cyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiaW50ZXJ2YWwiLCJpZHgiLCJwdXNoIiwiU3RyaW5nIiwidm90aW5nVGltZVVwIiwibGVuZ3RoIiwiQ29udGVudCIsInRvcGljIiwiZmluZCIsInQiLCJjb21tZW50IiwiYyIsImRhdGEiLCJjaGlsZHJlbiIsIm51bVRveGljUmVwb3J0cyIsIm51bVBlcnNvbmFsQXR0YWNrUmVwb3J0cyIsIm51bVNwYW1SZXBvcnRzIiwic3R5bGVkIiwiU2NhbGVzU3ZnIiwiUGlsbGFyU3ZnIiwiVm90aW5nQ29udGFpbmVyIiwiVm90ZXNBZ2FpbnN0IiwiVm90ZXNGb3IiLCJNaWRkbGVTZWN0aW9uIiwiVGFiIiwiTGluZSIsIkNvbW1lbnRDb2x1bW4iLCJDb2x1bW5Db250YWluZXIiLCJ1c2VDYXRlZ29yaXplQ29tbWVudHMiLCJTdHlsZWRUaGVtZVRhYiIsImtleSIsInNldEtleSIsImsiLCJhbGxDb21tZW50cyIsImFsbCIsInBvc2l0aXZlQ29tbWVudHMiLCJEZWZlbmRhbnQiLCJSZXBvcnRlciIsIkp1cnkiLCJHZW5lcmFsIiwiVGhlbWVUYWJOZXciLCJjb21tZW50VHlwZSIsIlNldCIsInN0YXRlIiwiY2F0ZWdvcml6ZWRDb21tZW50cyIsImhhcyIsIkdhdmVsMiIsIkNhc3RCYWxsb3RTdmciLCJUT1BJQ19WT1RFX0ZPUk0iLCJUaGVtZUJ1dHRvbiIsInVzZU9wZW5Nb2RhbCIsIm9wZW5Nb2RhbCIsImhhc0FscmVhZHlWb3RlZCIsInZvdGVBZ2FpbnN0Iiwidm90ZUZvciIsInZlcmRpY3QiLCJudW1Wb3Rlc0ZvciIsIm51bVZvdGVzQWdhaW5zdCIsInByb3BzIiwidG9hc3QiLCJjbG9zZU1vZGFsIiwiQUREX1JFUE9SVCIsIlJlcG9ydHNBcGlVdGlsIiwiZXJyb3JGb3JtYXR0ZXIiLCJhZGRSZXBvcnRBY3Rpb25DcmVhdG9yIiwicmVwb3J0IiwidHlwZSIsInBheWxvYWQiLCJkaXNwYXRjaCIsInRoZW4iLCJyZXMiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=