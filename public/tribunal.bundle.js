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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUQ7TUFBQSxPQUFXWix1REFBQSxDQUFZSSxxRUFBYyxDQUFDUSxLQUFELENBQTFCLENBQVg7SUFBQSxDQUZULGFBR1c7TUFBQSxPQUFNSCxRQUFRLENBQUNSLHFEQUFVLEVBQVgsQ0FBZDtJQUFBLENBSFgsQ0FEc0M7RUFBQSxDQUFmO0FBQUEsQ0FBbEI7QUFPUCxpRUFBZTtFQUNieEUsU0FBUyxFQUFUQTtBQURhLENBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9nZW5lcmljL3RpbWUvY2FsY3VsYXRlVGltZUxlZnQuanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvVHJpYnVuYWwvSW5kZXguanN4Iiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL1RyaWJ1bmFsL1N0eWxlL2luZGV4LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL1RyaWJ1bmFsL2NvbXBvbmVudHMvVHJpYnVuYWxDb21tZW50cy9JbmRleC5qc3giLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvVHJpYnVuYWwvY29tcG9uZW50cy9UcmlidW5hbENvbW1lbnRzL1N0eWxlL2luZGV4LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL1RyaWJ1bmFsL2NvbXBvbmVudHMvVHJpYnVuYWxDb21tZW50cy9ob29rcy91c2VDYXRlZ29yaXplQ29tbWVudHMuanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvVHJpYnVuYWwvY29tcG9uZW50cy9Wb3RpbmdCb3gvSW5kZXguanN4Iiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL1RyaWJ1bmFsL2NvbXBvbmVudHMvVm90aW5nQm94L1N0eWxlL2luZGV4LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3JlZHV4L2FjdGlvbnMvcmVwb3J0cy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgY2FsY3VsYXRlVGltZUxlZnQgPSAocmVwb3J0RW5kVGltZSkgPT4ge1xuICAvLyBjb25zdCB5ZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpXG4gIGNvbnN0IGRpZmZlcmVuY2UgPSArbmV3IERhdGUocmVwb3J0RW5kVGltZSkgLSArbmV3IERhdGUoKVxuXG4gIGxldCB0aW1lTGVmdCA9IHt9XG5cbiAgaWYgKGRpZmZlcmVuY2UgPiAwKSB7XG4gICAgdGltZUxlZnQgPSB7XG4gICAgICBkYXlzOiBNYXRoLmZsb29yKGRpZmZlcmVuY2UgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpLFxuICAgICAgaG91cnM6IE1hdGguZmxvb3IoKGRpZmZlcmVuY2UgLyAoMTAwMCAqIDYwICogNjApKSAlIDI0KSxcbiAgICAgIG1pbnV0ZXM6IE1hdGguZmxvb3IoKGRpZmZlcmVuY2UgLyAxMDAwIC8gNjApICUgNjApLFxuICAgICAgc2Vjb25kczogTWF0aC5mbG9vcigoZGlmZmVyZW5jZSAvIDEwMDApICUgNjApLFxuICAgIH1cbiAgfVxuICByZXR1cm4gdGltZUxlZnRcbn1cbiIsImltcG9ydCBSZWFjdCwge1xuICBtZW1vLCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlLFxufSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG5pbXBvcnQge1xuICBPdXRlckNvbnRhaW5lciwgSW5uZXJDb250YWluZXIsXG4gIEhlYWRlciwgU3R5bGVkU2NhbGVzU3ZnLCBSZXBvcnRTdGF0c0NvbnRhaW5lciwgUmVwb3J0U3RhdEl0ZW0sXG4gIFN0eWxlZFBpbGxhclN2ZywgVGltZXIsXG59IGZyb20gJy4vU3R5bGUvaW5kZXgnXG5pbXBvcnQgVG9waWNJdGVtIGZyb20gJy4uL1RvcGljcy9jb21wb25lbnRzL1RvcGljSXRlbS9JbmRleCdcbmltcG9ydCB1c2VCaW5kRGlzcGF0Y2ggZnJvbSAnLi4vaG9va3MvcmVkdXgvdXNlQmluZERpc3BhdGNoJ1xuXG5pbXBvcnQgdG9waWNBY3Rpb25zIGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMvdG9waWNzL2luZGV4J1xuaW1wb3J0IHJlcG9ydEFjdGlvbnMgZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucy9yZXBvcnRzL2luZGV4J1xuaW1wb3J0IHRyaWJ1bmFsQ29tbWVudHNBY3Rpb25zIGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMvdHJpYnVuYWxfY29tbWVudHMvaW5kZXgnXG5pbXBvcnQgY29tbWVudEFjdGlvbnMgZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucy9jb21tZW50cy9pbmRleCdcblxuaW1wb3J0IHsgY2FsY3VsYXRlVGltZUxlZnQgfSBmcm9tICcuLi8uLi9nZW5lcmljL3RpbWUvY2FsY3VsYXRlVGltZUxlZnQnXG5pbXBvcnQgVHJpYnVuYWxDb21tZW50cyBmcm9tICcuL2NvbXBvbmVudHMvVHJpYnVuYWxDb21tZW50cy9JbmRleCdcbmltcG9ydCBWb3RpbmdCb3ggZnJvbSAnLi9jb21wb25lbnRzL1ZvdGluZ0JveC9JbmRleCdcblxuaW1wb3J0IENvbW1lbnQgZnJvbSAnLi4vU3ViVG9waWNzL2NvbXBvbmVudHMvQ29tbWVudC9JbmRleCdcbmltcG9ydCB7IENPTU1FTlQsIFRPUElDIH0gZnJvbSAnLi4vLi4vZW51bXMvY29udGVudF90eXBlJ1xuXG5jb25zdCBUcmlidW5hbCA9ICgpID0+IHtcbiAgY29uc3QgeyBjb250ZW50SWQsIGNvbnRlbnRUeXBlIH0gPSB1c2VQYXJhbXMoKVxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3IoKHMpID0+IHMuc2Vzc2lvbi5jdXJyZW50VXNlcilcbiAgY29uc3QgdG9waWNzID0gdXNlU2VsZWN0b3IoKHMpID0+IHMudG9waWNzLmxpc3QpXG4gIGNvbnN0IGNvbW1lbnRzID0gdXNlU2VsZWN0b3IoKHMpID0+IHMuY29tbWVudHMubGlzdClcbiAgY29uc3QgdHJpYnVuYWxDb21tZW50cyA9IHVzZVNlbGVjdG9yKChzKSA9PiBzLnRyaWJ1bmFsQ29tbWVudHMpXG4gIGNvbnN0IHJlcG9ydFN0YXRzID0gdXNlU2VsZWN0b3IoKHMpID0+IHMucmVwb3J0cylbY29udGVudElkXVxuICBjb25zdCBbdGltZUxlZnQsIHNldFRpbWVMZWZ0XSA9IHVzZVN0YXRlKHt9KVxuXG4gIGNvbnN0IHtcbiAgICBnZXRUb3BpYyxcbiAgICBnZXRSZXBvcnQsXG4gICAgZ2V0QWxsVHJpYnVuYWxDb21tZW50c0JhdGNoLFxuICAgIGdldENvbW1lbnQsXG4gIH0gPSB1c2VCaW5kRGlzcGF0Y2godG9waWNBY3Rpb25zLCByZXBvcnRBY3Rpb25zLCB0cmlidW5hbENvbW1lbnRzQWN0aW9ucywgY29tbWVudEFjdGlvbnMpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgdGltZXJcbiAgICBpZiAocmVwb3J0U3RhdHMpIHtcbiAgICAgIHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBzZXRUaW1lTGVmdChjYWxjdWxhdGVUaW1lTGVmdChyZXBvcnRTdGF0cy5yZXBvcnRQZXJpb2RFbmQpKVxuICAgICAgfSwgMTAwMClcbiAgICB9XG4gICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lcilcbiAgfSwgW3JlcG9ydFN0YXRzXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjb250ZW50SWQgJiYgdXNlcikge1xuICAgICAgaWYgKGNvbnRlbnRUeXBlID09PSBDT01NRU5UKSBnZXRDb21tZW50KGNvbnRlbnRJZClcbiAgICAgIGlmIChjb250ZW50VHlwZSA9PT0gVE9QSUMpIGdldFRvcGljKGNvbnRlbnRJZCwgdXNlci5pZClcbiAgICAgIGdldFJlcG9ydChjb250ZW50SWQpXG4gICAgICBnZXRBbGxUcmlidW5hbENvbW1lbnRzQmF0Y2goY29udGVudElkKVxuICAgIH1cbiAgfSwgW2NvbnRlbnRJZCwgdXNlcl0pXG5cbiAgY29uc3QgdGltZXJDb21wb25lbnRzID0gW11cblxuICBPYmplY3Qua2V5cyh0aW1lTGVmdCkuZm9yRWFjaCgoaW50ZXJ2YWwsIGlkeCkgPT4ge1xuICAgIGlmICghdGltZUxlZnRbaW50ZXJ2YWxdKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aW1lckNvbXBvbmVudHMucHVzaChcbiAgICAgIDxzcGFuIGtleT17U3RyaW5nKGAke2lkeH0wYCl9PlxuICAgICAgICB7dGltZUxlZnRbaW50ZXJ2YWxdfVxuICAgICAgICB7JyAnfVxuICAgICAgICB7aW50ZXJ2YWx9XG4gICAgICAgIHsnICd9XG4gICAgICA8L3NwYW4+LFxuICAgIClcbiAgfSlcblxuICBjb25zdCB2b3RpbmdUaW1lVXAgPSB0aW1lckNvbXBvbmVudHMubGVuZ3RoID09PSAwXG5cbiAgY29uc3QgQ29udGVudCA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IHRvcGljID0gdG9waWNzPy5maW5kKCh0KSA9PiB0LmlkID09PSBjb250ZW50SWQpXG4gICAgY29uc3QgY29tbWVudCA9IGNvbW1lbnRzPy5maW5kKChjKSA9PiBjLmRhdGEuaWQgPT09IGNvbnRlbnRJZClcbiAgICBpZiAodG9waWMpIHJldHVybiA8VG9waWNJdGVtIGtleT17dG9waWMuaWR9IHRvcGljPXt0b3BpY30gdXNlcj17dXNlcn0gLz5cbiAgICBpZiAoY29tbWVudCkgcmV0dXJuIDxDb21tZW50IGNvbW1lbnREYXRhPXtjb21tZW50LmRhdGF9IHJlcGxpZXM9e2NvbW1lbnQuY2hpbGRyZW59IC8+XG4gICAgcmV0dXJuIG51bGxcbiAgfSwgW3RvcGljcywgY29tbWVudHMsIGNvbnRlbnRJZF0pXG4gIHJldHVybiAoXG4gICAgPE91dGVyQ29udGFpbmVyIGlkPVwidHJpYnVuYWwtY29udGFpbmVyXCI+XG4gICAgICA8SGVhZGVyPlxuICAgICAgICA8U3R5bGVkU2NhbGVzU3ZnIC8+XG4gICAgICAgIDxoMT5cbiAgICAgICAgICBDb21tdW5pdHkgQ291cnRcbiAgICAgICAgPC9oMT5cbiAgICAgICAgPFN0eWxlZFNjYWxlc1N2ZyAvPlxuICAgICAgPC9IZWFkZXI+XG4gICAgICA8VGltZXI+XG4gICAgICAgIDxoND5cbiAgICAgICAgICB7IHJlcG9ydFN0YXRzPy5yZXBvcnRQZXJpb2RFbmQgPyAnVm90aW5nIFBlcmlvZCBUaW1pbmcgUmVtYWluaW5nJyA6ICdWb3RpbmcgSGFzIEVuZGVkJyB9XG4gICAgICAgIDwvaDQ+XG4gICAgICAgIHsnXFxuJ31cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7KCFPYmplY3Qua2V5cyh0aW1lTGVmdCkgJiYgcmVwb3J0U3RhdHMpID8gPHNwYW4+VGltZSBJcyBVcCE8L3NwYW4+IDogdGltZXJDb21wb25lbnRzfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvVGltZXI+XG4gICAgICA8SW5uZXJDb250YWluZXI+XG4gICAgICAgIDxTdHlsZWRQaWxsYXJTdmcgLz5cbiAgICAgICAge0NvbnRlbnR9XG4gICAgICAgIDxTdHlsZWRQaWxsYXJTdmcgLz5cbiAgICAgIDwvSW5uZXJDb250YWluZXI+XG4gICAgICB7cmVwb3J0U3RhdHMgJiYgKFxuICAgICAgPFZvdGluZ0JveFxuICAgICAgICBjb250ZW50SWQ9e2NvbnRlbnRJZH1cbiAgICAgICAgcmVwb3J0U3RhdHM9e3JlcG9ydFN0YXRzfVxuICAgICAgICB2b3RpbmdUaW1lVXA9e3ZvdGluZ1RpbWVVcH1cbiAgICAgIC8+XG4gICAgICApfVxuICAgICAgPFJlcG9ydFN0YXRzQ29udGFpbmVyPlxuICAgICAgICA8UmVwb3J0U3RhdEl0ZW0+XG4gICAgICAgICAgPGgyPlRveGljIFJlcG9ydHM8L2gyPlxuICAgICAgICAgIHtyZXBvcnRTdGF0cyAmJiAocmVwb3J0U3RhdHMubnVtVG94aWNSZXBvcnRzIHx8IDApfVxuICAgICAgICA8L1JlcG9ydFN0YXRJdGVtPlxuICAgICAgICA8UmVwb3J0U3RhdEl0ZW0+XG4gICAgICAgICAgPGgyPlBlcnNvbmFsIEF0dGFjayBSZXBvcnRzPC9oMj5cbiAgICAgICAgICB7cmVwb3J0U3RhdHMgJiYgKHJlcG9ydFN0YXRzLm51bVBlcnNvbmFsQXR0YWNrUmVwb3J0cyB8fCAwKX1cbiAgICAgICAgPC9SZXBvcnRTdGF0SXRlbT5cbiAgICAgICAgPFJlcG9ydFN0YXRJdGVtPlxuICAgICAgICAgIDxoMj5TcGFtIFJlcG9ydHM8L2gyPlxuICAgICAgICAgIHtyZXBvcnRTdGF0cyAmJiAocmVwb3J0U3RhdHMubnVtU3BhbVJlcG9ydHMgfHwgMCl9XG4gICAgICAgIDwvUmVwb3J0U3RhdEl0ZW0+XG4gICAgICA8L1JlcG9ydFN0YXRzQ29udGFpbmVyPlxuICAgICAgPFRyaWJ1bmFsQ29tbWVudHMgY29tbWVudHM9e3RyaWJ1bmFsQ29tbWVudHN9IC8+XG4gICAgPC9PdXRlckNvbnRhaW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBtZW1vKFRyaWJ1bmFsKVxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IFNjYWxlc1N2ZywgUGlsbGFyU3ZnIH0gZnJvbSAnLi4vLi4vLi4vc3Zncy9zdmdzJ1xuXG5leHBvcnQgY29uc3QgT3V0ZXJDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1ib3R0b206IDYwdmg7XG5gXG5cbmV4cG9ydCBjb25zdCBIZWFkZXIgPSBzdHlsZWQoJ2hlYWRlcicpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IGNsYW1wKDMwcHgsIDF2dywgMTAwcHgpIDAgY2xhbXAoMzBweCwgMXZ3LCAxMDBweCkgMDtcbiAgaDEge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMnZ3O1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgIGZvbnQtc2l6ZTogNS43dnc7XG4gICAgfVxuICB9XG4gIHN2ZyB7XG4gICAgd2lkdGg6IDR2dyAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNHZ3ICFpbXBvcnRhbnQ7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgd2lkdGg6IDEydncgIWltcG9ydGFudDtcbiAgICAgIGhlaWdodDogMTJ2dyAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBtYXJnaW46IDAgM3Z3O1xuICB9XG5gXG5leHBvcnQgY29uc3QgU3R5bGVkU2NhbGVzU3ZnID0gc3R5bGVkKFNjYWxlc1N2ZylgXG4gIHdpZHRoOiA0dncgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0dncgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwIDF2dztcbmBcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFBpbGxhclN2ZyA9IHN0eWxlZChQaWxsYXJTdmcpYFxuICBkaXNwbGF5OiBibG9jaztcbmBcblxuZXhwb3J0IGNvbnN0IElubmVyQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXG4gIHdpZHRoOiAxMDAlO1xuXG5gXG5cbmV4cG9ydCBjb25zdCBWb3RpbmdDb250YWluZXIgPSBzdHlsZWQoJ3NlY3Rpb24nKWBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDE0dnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBib3gtc2hhZG93OiAwcHggMTBweCAyMHB4IHJnYig2MCA2MCA2MCAvIDEwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCBsaWdodGdyYXk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyMDAsIDIwMCwgMjAwLCAwLjI1KTtcbiAgbWFyZ2luOiBjbGFtcCgzMHB4LCAxdncsIDEwMHB4KSAwIGNsYW1wKDMwcHgsIDF2dywgMTAwcHgpIDA7XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiAzMHZ3O1xuICB9XG5cbiAgc3ZnIHtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgICB3aWR0aDogOXZ3O1xuICAgICAgaGVpZ2h0OiA5dnc7XG4gICAgfVxuICB9XG5cbiAgc3BhbiB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgICAgZm9udC1zaXplOiA0dnc7XG4gICAgfVxuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBSZXBvcnRTdGF0c0NvbnRhaW5lciA9IHN0eWxlZCgndWwnKWBcbiAgZGlzcGxheTogZmxleDtcbmBcblxuZXhwb3J0IGNvbnN0IFJlcG9ydFN0YXRJdGVtID0gc3R5bGVkKCdsaScpYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tLW1lbnUtaXRlbS1ob3Zlcik7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCByZ2IoNjAgNjAgNjAgLyAxMCUpO1xuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbS1zZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMXZ3O1xuICBwYWRkaW5nOiAydncgNHZ3O1xuICBtYXJnaW46IDJ2dyA0dnc7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAgIGZvbnQtc2l6ZTogNHZ3O1xuICAgICAgbWFyZ2luOiAydncgMnZ3O1xuXG4gICAgfVxuYFxuZXhwb3J0IGNvbnN0IFZvdGVzQWdhaW5zdCA9IHN0eWxlZCgnZGl2JylgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTAlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG4gIGZvbnQtc2l6ZTogMnZ3O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgZm9udC1zaXplOiA0dnc7XG4gIH1cbiAgXG5gXG5cbmV4cG9ydCBjb25zdCBWb3Rlc0ZvciA9IHN0eWxlZCgnZGl2JylgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwJTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICBmb250LXNpemU6IDJ2dztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgZm9udC1zaXplOiA0dnc7XG4gIH1cbmBcbmV4cG9ydCBjb25zdCBUaW1lciA9IHN0eWxlZCgnZGl2JylgXG4gIGZvbnQtc2l6ZTogMS4zdnc7IFxuICBjb2xvcjogZ3JheTtcbiAgbWFyZ2luOiAwIDAgY2xhbXAoMzBweCwgMXZ3LCAxMDBweCkgMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgIGZvbnQtc2l6ZTogNHZ3O1xuICB9XG5cbiAgaDQge1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgTWlkZGxlU2VjdGlvbiA9IHN0eWxlZCgnZGl2JylgXG5cbiAgc3BhbjpmaXJzdC1jaGlsZCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IHJlZDtcbiAgfVxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmBcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVGFiIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuXG5pbXBvcnQgeyBMaW5lIH0gZnJvbSAnLi4vLi4vLi4vQ29tbW9uQ29tcG9uZW50cy9MaW5lJ1xuaW1wb3J0IENvbW1lbnRDb2x1bW4gZnJvbSAnLi4vLi4vLi4vU3ViVG9waWNzL2NvbXBvbmVudHMvQ29tbWVudENvbHVtbi9JbmRleCdcbmltcG9ydCB7IENvbHVtbkNvbnRhaW5lciB9IGZyb20gJy4uLy4uLy4uL1N1YlRvcGljcy9jb21wb25lbnRzL1N1YlRvcGljVGhyZWFkL1N0eWxlJ1xuaW1wb3J0IHVzZUNhdGVnb3JpemVDb21tZW50cyBmcm9tICcuL2hvb2tzL3VzZUNhdGVnb3JpemVDb21tZW50cydcbmltcG9ydCB7IFN0eWxlZFRoZW1lVGFiIH0gZnJvbSAnLi9TdHlsZS9pbmRleCdcblxuY29uc3QgVHJpYnVuYWxDb21tZW50cyA9ICgpID0+IHtcbiAgY29uc3QgW2tleSwgc2V0S2V5XSA9IHVzZVN0YXRlKCdhbGwnKVxuICBjb25zdCBjb21tZW50cyA9IHVzZUNhdGVnb3JpemVDb21tZW50cygpXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxMaW5lIC8+XG4gICAgICA8U3R5bGVkVGhlbWVUYWJcbiAgICAgICAgYWN0aXZlS2V5PXtrZXl9XG4gICAgICAgIG9uU2VsZWN0PXsoaykgPT4gc2V0S2V5KGspfVxuICAgICAgPlxuICAgICAgICA8VGFiIGV2ZW50S2V5PVwiYWxsXCIgdGl0bGU9XCJBbGxcIj5cbiAgICAgICAgICA8Q29sdW1uQ29udGFpbmVyPlxuICAgICAgICAgICAgPENvbW1lbnRDb2x1bW4gbnVtQ29tbWVudHM9e2NvbW1lbnRzPy5hbGxDb21tZW50c30gY29tbWVudHM9e2NvbW1lbnRzLmFsbH0gY29tbWVudFNlbnRpbWVudD1cIkFsbFwiIGNvbG9yPVwidmFyKC0tbS1wcmltYXJ5LWJhY2tncm91bmQtY29sb3IpXCIgLz5cbiAgICAgICAgICA8L0NvbHVtbkNvbnRhaW5lcj5cbiAgICAgICAgPC9UYWI+XG4gICAgICAgIDxUYWIgZXZlbnRLZXk9XCJEZWZlbmRhbnRcIiB0aXRsZT1cIkRlZmVuZGFudFwiPlxuICAgICAgICAgIDxDb2x1bW5Db250YWluZXI+XG4gICAgICAgICAgICA8Q29tbWVudENvbHVtbiBudW1Db21tZW50cz17Y29tbWVudHM/LnBvc2l0aXZlQ29tbWVudHN9IGNvbW1lbnRzPXtjb21tZW50cy5EZWZlbmRhbnR9IGNvbW1lbnRTZW50aW1lbnQ9XCJEZWZlbmRhbnRcIiBjb2xvcj1cIiM2QTZFNzBcIiAvPlxuICAgICAgICAgIDwvQ29sdW1uQ29udGFpbmVyPlxuICAgICAgICA8L1RhYj5cbiAgICAgICAgPFRhYiBldmVudEtleT1cIlJlcG9ydGVyXCIgdGl0bGU9XCJSZXBvcnRlcnNcIj5cbiAgICAgICAgICA8Q29sdW1uQ29udGFpbmVyPlxuICAgICAgICAgICAgPENvbW1lbnRDb2x1bW4gY29tbWVudHM9e2NvbW1lbnRzLlJlcG9ydGVyfSBjb21tZW50U2VudGltZW50PVwiUmVwb3J0ZXJcIiBjb2xvcj1cIiM0NzRBNEZcIiAvPlxuICAgICAgICAgIDwvQ29sdW1uQ29udGFpbmVyPlxuICAgICAgICA8L1RhYj5cbiAgICAgICAgPFRhYiBldmVudEtleT1cIkp1cnlcIiB0aXRsZT1cIkp1cnlcIj5cbiAgICAgICAgICA8Q29sdW1uQ29udGFpbmVyPlxuICAgICAgICAgICAgPENvbW1lbnRDb2x1bW4gY29tbWVudHM9e2NvbW1lbnRzLkp1cnl9IGNvbW1lbnRTZW50aW1lbnQ9XCJKdXJ5XCIgY29sb3I9XCJ2YXIoLS1tLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcilcIiAvPlxuICAgICAgICAgIDwvQ29sdW1uQ29udGFpbmVyPlxuICAgICAgICA8L1RhYj5cbiAgICAgICAgPFRhYiBldmVudEtleT1cIkdlbmVyYWxcIiB0aXRsZT1cIkdlbmVyYWwgUHVibGljXCI+XG4gICAgICAgICAgPENvbHVtbkNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxDb21tZW50Q29sdW1uIGNvbW1lbnRzPXtjb21tZW50cy5HZW5lcmFsfSBjb21tZW50U2VudGltZW50PVwiR2VuZXJhbCBQdWJsaWNcIiBjb2xvcj1cInZhcigtLW0tcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yKVwiIC8+XG4gICAgICAgICAgPC9Db2x1bW5Db250YWluZXI+XG4gICAgICAgIDwvVGFiPlxuICAgICAgPC9TdHlsZWRUaGVtZVRhYj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmlidW5hbENvbW1lbnRzXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgVGhlbWVUYWJOZXcgfSBmcm9tICcuLi8uLi8uLi8uLi9Db21tb25Db21wb25lbnRzL1RhYnMvU3R5bGUnXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRUaGVtZVRhYiA9IHN0eWxlZChUaGVtZVRhYk5ldylgXG4gIC5uYXYtaXRlbSB7XG4gICAgbWFyZ2luOiAwIDAuM2VtIDAgMDtcbiAgfVxuYFxuIiwiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuY29uc3QgY29tbWVudFR5cGUgPSBuZXcgU2V0KFsnRGVmZW5kYW50JywgJ1JlcG9ydGVyJywgJ0p1cnknLCAnR2VuZXJhbCddKVxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IGNvbW1lbnRzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS50cmlidW5hbENvbW1lbnRzLmxpc3QpXG4gIHJldHVybiB1c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBjYXRlZ29yaXplZENvbW1lbnRzID0ge1xuICAgICAgRGVmZW5kYW50OiBbXSxcbiAgICAgIFJlcG9ydGVyOiBbXSxcbiAgICAgIEp1cnk6IFtdLFxuICAgICAgR2VuZXJhbDogW10sXG4gICAgICBhbGw6IGNvbW1lbnRzLFxuICAgIH1cbiAgICBjb21tZW50cy5mb3JFYWNoKChjb21tZW50KSA9PiB7XG4gICAgICBpZiAoY29tbWVudFR5cGUuaGFzKGNvbW1lbnQuZGF0YT8uY29tbWVudFR5cGUpKSB7XG4gICAgICAgIGNhdGVnb3JpemVkQ29tbWVudHNbY29tbWVudC5kYXRhPy5jb21tZW50VHlwZV0ucHVzaChjb21tZW50KVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGNhdGVnb3JpemVkQ29tbWVudHNcbiAgfSwgW2NvbW1lbnRzXSlcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBtZW1vLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBHYXZlbDIsIENhc3RCYWxsb3RTdmcgfSBmcm9tICcuLi8uLi8uLi8uLi9zdmdzL3N2Z3MnXG5pbXBvcnQgeyBUT1BJQ19WT1RFX0ZPUk0gfSBmcm9tICcuLi8uLi8uLi9BcHAvTW9kYWwvSW5kZXgnXG5pbXBvcnQgVGhlbWVCdXR0b24gZnJvbSAnLi4vLi4vLi4vQ29tbW9uQ29tcG9uZW50cy9CdXR0b24vSW5kZXgnXG5pbXBvcnQgdXNlT3Blbk1vZGFsIGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZU9wZW5Nb2RhbCdcbmltcG9ydCB7XG4gIFZvdGluZ0NvbnRhaW5lciwgVm90ZXNBZ2FpbnN0LCBWb3Rlc0ZvciwgTWlkZGxlU2VjdGlvbixcbn0gZnJvbSAnLi9TdHlsZSdcblxuY29uc3QgVm90aW5nQm94ID0gKHsgY29udGVudElkLCByZXBvcnRTdGF0cywgdm90aW5nVGltZVVwIH0pID0+IHtcbiAgY29uc3Qgb3Blbk1vZGFsID0gdXNlT3Blbk1vZGFsKFRPUElDX1ZPVEVfRk9STSwgeyBjb250ZW50SWQgfSlcblxuICBjb25zdCBoYXNBbHJlYWR5Vm90ZWQgPSB1c2VNZW1vKCgpID0+IChyZXBvcnRTdGF0cy52b3RlQWdhaW5zdCB8fCByZXBvcnRTdGF0cy52b3RlRm9yKSxcbiAgICBbcmVwb3J0U3RhdHMudm90ZUFnYWluc3QsIHJlcG9ydFN0YXRzLnZvdGVGb3JdKVxuXG4gIGNvbnN0IHZlcmRpY3QgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBpZiAocmVwb3J0U3RhdHMubnVtVm90ZXNGb3IgPiByZXBvcnRTdGF0cy5udW1Wb3Rlc0FnYWluc3QpIHJldHVybiAnVmlvbGF0aW9uJ1xuICAgIHJldHVybiAnTm8gVmlvbGF0aW9uJ1xuICB9LCBbcmVwb3J0U3RhdHMubnVtVm90ZXNBZ2FpbnN0LCByZXBvcnRTdGF0cy5udW1Wb3Rlc0Zvcl0pXG5cbiAgcmV0dXJuIChcbiAgICA8Vm90aW5nQ29udGFpbmVyPlxuICAgICAgPFZvdGVzRm9yPlxuICAgICAgICBWaW9sYXRpb24gVm90ZXNcbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAge3JlcG9ydFN0YXRzICYmIChyZXBvcnRTdGF0cy5udW1Wb3Rlc0ZvciA/PyAnPycpfVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L1ZvdGVzRm9yPlxuICAgICAgPFZvdGVzQWdhaW5zdD5cbiAgICAgICAgTm8gVmlvbGF0aW9uIFZvdGVzXG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgIHtyZXBvcnRTdGF0cyAmJiAocmVwb3J0U3RhdHMubnVtVm90ZXNBZ2FpbnN0ID8/ICc/Jyl9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvVm90ZXNBZ2FpbnN0PlxuICAgICAgPE1pZGRsZVNlY3Rpb24gdmVyZGljdD17dmVyZGljdH0+XG4gICAgICAgIHsgdm90aW5nVGltZVVwICYmIChcbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAge2BWRVJESUNUIOKtoiAke3ZlcmRpY3R9YH1cbiAgICAgICAgICB7JyAnfVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgICl9XG4gICAgICAgIHsgdm90aW5nVGltZVVwID8gPEdhdmVsMiAvPiA6IDxDYXN0QmFsbG90U3ZnIC8+IH1cbiAgICAgICAgeyhyZXBvcnRTdGF0cyAmJiAhdm90aW5nVGltZVVwKSAmJiAoXG4gICAgICAgIDxUaGVtZUJ1dHRvbiBvbkNsaWNrPXtvcGVuTW9kYWx9PlxuICAgICAgICAgIHtoYXNBbHJlYWR5Vm90ZWQgPyAnQ2hhbmdlIFlvdXIgVm90ZScgOiAnQ2FzdCBZb3VyIFZvdGUnfVxuICAgICAgICA8L1RoZW1lQnV0dG9uPlxuICAgICAgICApfVxuICAgICAgPC9NaWRkbGVTZWN0aW9uPlxuICAgIDwvVm90aW5nQ29udGFpbmVyPlxuXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVtbyhWb3RpbmdCb3gpXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgVm90aW5nQ29udGFpbmVyID0gc3R5bGVkKCdzZWN0aW9uJylgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAxNHZ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCByZ2IoNjAgNjAgNjAgLyAxMCUpO1xuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMC41cHggc29saWQgbGlnaHRncmF5O1xuICBib3JkZXItY29sb3I6IHJnYmEoMjAwLCAyMDAsIDIwMCwgMC4yNSk7XG4gIG1hcmdpbjogY2xhbXAoMzBweCwgMXZ3LCAxMDBweCkgMCBjbGFtcCgzMHB4LCAxdncsIDEwMHB4KSAwO1xuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogMzB2dztcbiAgfVxuXG4gIHN2ZyB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgICAgd2lkdGg6IDl2dztcbiAgICAgIGhlaWdodDogOXZ3O1xuICAgIH1cbiAgfVxuXG4gIHNwYW4ge1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAgIGZvbnQtc2l6ZTogNHZ3O1xuICAgIH1cbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgVm90ZXNBZ2FpbnN0ID0gc3R5bGVkKCdkaXYnKWBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTAlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG4gIGZvbnQtc2l6ZTogMS4zdnc7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgIGZvbnQtc2l6ZTogNHZ3O1xuICB9XG4gIFxuYFxuXG5leHBvcnQgY29uc3QgVm90ZXNGb3IgPSBzdHlsZWQoJ2RpdicpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDEwJTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICBmb250LXNpemU6IDEuM3Z3O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgZm9udC1zaXplOiA0dnc7XG4gIH1cblxuYFxuXG5leHBvcnQgY29uc3QgTWlkZGxlU2VjdGlvbiA9IHN0eWxlZCgnZGl2JylgXG5cbiAgc3BhbjpmaXJzdC1jaGlsZCB7XG4gICAgZm9udC1zaXplOiAydnc7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICR7KHByb3BzKSA9PiAocHJvcHMudmVyZGljdCA9PT0gJ1Zpb2xhdGlvbicgPyAncmVkJyA6ICdncmVlbicpfTtcbiAgfVxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMzUlKTtcbiAgaGVpZ2h0OiA1NSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbmBcbiIsImltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknXG5pbXBvcnQgeyBjbG9zZU1vZGFsIH0gZnJvbSAnLi4vdWkvaW5kZXgnXG5pbXBvcnQgeyBBRERfUkVQT1JUIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvcmVwb3J0cy9yZXBvcnRzUmVkdWNlcidcbmltcG9ydCAqIGFzIFJlcG9ydHNBcGlVdGlsIGZyb20gJy4uLy4uLy4uL2FwaS92MS9yZXBvcnRzL3JlcG9ydHNfYXBpX3V0aWwnXG5pbXBvcnQgeyBlcnJvckZvcm1hdHRlciB9IGZyb20gJy4uLy4uL3V0aWxzL2Vycm9yRm9ybWF0dGVyJ1xuXG5jb25zdCBhZGRSZXBvcnRBY3Rpb25DcmVhdG9yID0gKHJlcG9ydCkgPT4gKHtcbiAgdHlwZTogQUREX1JFUE9SVCxcbiAgcGF5bG9hZDogcmVwb3J0LFxufSlcblxuZXhwb3J0IGNvbnN0IGdldFJlcG9ydCA9IChjb250ZW50SWQpID0+IChkaXNwYXRjaCkgPT4gKFxuICBSZXBvcnRzQXBpVXRpbC5nZXRSZXBvcnQoY29udGVudElkKVxuICAgIC50aGVuKChyZXMpID0+IGRpc3BhdGNoKGFkZFJlcG9ydEFjdGlvbkNyZWF0b3IocmVzLmRhdGEpKSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB0b2FzdC5lcnJvcihlcnJvckZvcm1hdHRlcihlcnJvcikpKVxuICAgIC5maW5hbGx5KCgpID0+IGRpc3BhdGNoKGNsb3NlTW9kYWwoKSkpXG4pXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2V0UmVwb3J0LFxufVxuIl0sIm5hbWVzIjpbImNhbGN1bGF0ZVRpbWVMZWZ0IiwicmVwb3J0RW5kVGltZSIsImRpZmZlcmVuY2UiLCJEYXRlIiwidGltZUxlZnQiLCJkYXlzIiwiTWF0aCIsImZsb29yIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsIlJlYWN0IiwibWVtbyIsInVzZUVmZmVjdCIsInVzZU1lbW8iLCJ1c2VTdGF0ZSIsInVzZVNlbGVjdG9yIiwidXNlUGFyYW1zIiwiT3V0ZXJDb250YWluZXIiLCJJbm5lckNvbnRhaW5lciIsIkhlYWRlciIsIlN0eWxlZFNjYWxlc1N2ZyIsIlJlcG9ydFN0YXRzQ29udGFpbmVyIiwiUmVwb3J0U3RhdEl0ZW0iLCJTdHlsZWRQaWxsYXJTdmciLCJUaW1lciIsIlRvcGljSXRlbSIsInVzZUJpbmREaXNwYXRjaCIsInRvcGljQWN0aW9ucyIsInJlcG9ydEFjdGlvbnMiLCJ0cmlidW5hbENvbW1lbnRzQWN0aW9ucyIsImNvbW1lbnRBY3Rpb25zIiwiVHJpYnVuYWxDb21tZW50cyIsIlZvdGluZ0JveCIsIkNvbW1lbnQiLCJDT01NRU5UIiwiVE9QSUMiLCJUcmlidW5hbCIsImNvbnRlbnRJZCIsImNvbnRlbnRUeXBlIiwidXNlciIsInMiLCJzZXNzaW9uIiwiY3VycmVudFVzZXIiLCJ0b3BpY3MiLCJsaXN0IiwiY29tbWVudHMiLCJ0cmlidW5hbENvbW1lbnRzIiwicmVwb3J0U3RhdHMiLCJyZXBvcnRzIiwic2V0VGltZUxlZnQiLCJnZXRUb3BpYyIsImdldFJlcG9ydCIsImdldEFsbFRyaWJ1bmFsQ29tbWVudHNCYXRjaCIsImdldENvbW1lbnQiLCJ0aW1lciIsInNldEludGVydmFsIiwicmVwb3J0UGVyaW9kRW5kIiwiY2xlYXJUaW1lb3V0IiwiaWQiLCJ0aW1lckNvbXBvbmVudHMiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImludGVydmFsIiwiaWR4IiwicHVzaCIsIlN0cmluZyIsInZvdGluZ1RpbWVVcCIsImxlbmd0aCIsIkNvbnRlbnQiLCJ0b3BpYyIsImZpbmQiLCJ0IiwiY29tbWVudCIsImMiLCJkYXRhIiwiY2hpbGRyZW4iLCJudW1Ub3hpY1JlcG9ydHMiLCJudW1QZXJzb25hbEF0dGFja1JlcG9ydHMiLCJudW1TcGFtUmVwb3J0cyIsInN0eWxlZCIsIlNjYWxlc1N2ZyIsIlBpbGxhclN2ZyIsIlZvdGluZ0NvbnRhaW5lciIsIlZvdGVzQWdhaW5zdCIsIlZvdGVzRm9yIiwiTWlkZGxlU2VjdGlvbiIsIlRhYiIsIkxpbmUiLCJDb21tZW50Q29sdW1uIiwiQ29sdW1uQ29udGFpbmVyIiwidXNlQ2F0ZWdvcml6ZUNvbW1lbnRzIiwiU3R5bGVkVGhlbWVUYWIiLCJrZXkiLCJzZXRLZXkiLCJrIiwiYWxsQ29tbWVudHMiLCJhbGwiLCJwb3NpdGl2ZUNvbW1lbnRzIiwiRGVmZW5kYW50IiwiUmVwb3J0ZXIiLCJKdXJ5IiwiR2VuZXJhbCIsIlRoZW1lVGFiTmV3IiwiY29tbWVudFR5cGUiLCJTZXQiLCJzdGF0ZSIsImNhdGVnb3JpemVkQ29tbWVudHMiLCJoYXMiLCJHYXZlbDIiLCJDYXN0QmFsbG90U3ZnIiwiVE9QSUNfVk9URV9GT1JNIiwiVGhlbWVCdXR0b24iLCJ1c2VPcGVuTW9kYWwiLCJvcGVuTW9kYWwiLCJoYXNBbHJlYWR5Vm90ZWQiLCJ2b3RlQWdhaW5zdCIsInZvdGVGb3IiLCJ2ZXJkaWN0IiwibnVtVm90ZXNGb3IiLCJudW1Wb3Rlc0FnYWluc3QiLCJwcm9wcyIsInRvYXN0IiwiY2xvc2VNb2RhbCIsIkFERF9SRVBPUlQiLCJSZXBvcnRzQXBpVXRpbCIsImVycm9yRm9ybWF0dGVyIiwiYWRkUmVwb3J0QWN0aW9uQ3JlYXRvciIsInJlcG9ydCIsInR5cGUiLCJwYXlsb2FkIiwiZGlzcGF0Y2giLCJ0aGVuIiwicmVzIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9