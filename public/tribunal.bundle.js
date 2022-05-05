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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/node_modules/react-router/index.js");
/* harmony import */ var _Style_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Style/index */ "./src/pages/Tribunal/Style/index.js");
/* harmony import */ var _Topics_components_TopicItem_Index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Topics/components/TopicItem/Index */ "./src/pages/Topics/components/TopicItem/Index.jsx");
/* harmony import */ var _hooks_redux_useBindDispatch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/redux/useBindDispatch */ "./src/pages/hooks/redux/useBindDispatch.js");
/* harmony import */ var _redux_actions_topics_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/actions/topics/index */ "./src/redux/actions/topics/index.js");
/* harmony import */ var _redux_actions_topic_reports_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../redux/actions/topic_reports/index */ "./src/redux/actions/topic_reports/index.js");
/* harmony import */ var _redux_actions_tribunal_comments_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../redux/actions/tribunal_comments/index */ "./src/redux/actions/tribunal_comments/index.js");
/* harmony import */ var _svgs_svgs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../svgs/svgs */ "./src/svgs/svgs.jsx");
/* harmony import */ var _CommonComponents_Button_Index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../CommonComponents/Button/Index */ "./src/pages/CommonComponents/Button/Index.jsx");
/* harmony import */ var _hooks_useOpenModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../hooks/useOpenModal */ "./src/pages/hooks/useOpenModal.js");
/* harmony import */ var _App_Modal_Index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../App/Modal/Index */ "./src/pages/App/Modal/Index.jsx");
/* harmony import */ var _generic_time_calculateTimeLeft__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../generic/time/calculateTimeLeft */ "./src/generic/time/calculateTimeLeft.js");
/* harmony import */ var _components_TribunalComments_Index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/TribunalComments/Index */ "./src/pages/Tribunal/components/TribunalComments/Index.jsx");

















var Tribunal = function Tribunal() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_15__.useParams)(),
      contentId = _useParams.contentId;

  var openModal = (0,_hooks_useOpenModal__WEBPACK_IMPORTED_MODULE_11__["default"])(_App_Modal_Index__WEBPACK_IMPORTED_MODULE_12__.TOPIC_VOTE_FORM, {
    topicId: contentId
  });
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (s) {
    return s.session.currentUser;
  });
  var topics = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (s) {
    return s.topics.list;
  });
  var comments = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (s) {
    return s.tribunalComments;
  });
  var reportStats = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (s) {
    return s.topicReports;
  })[contentId];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      timeLeft = _useState2[0],
      setTimeLeft = _useState2[1];

  var _useBindDispatch = (0,_hooks_redux_useBindDispatch__WEBPACK_IMPORTED_MODULE_5__["default"])(_redux_actions_topics_index__WEBPACK_IMPORTED_MODULE_6__["default"], _redux_actions_topic_reports_index__WEBPACK_IMPORTED_MODULE_7__["default"], _redux_actions_tribunal_comments_index__WEBPACK_IMPORTED_MODULE_8__["default"]),
      getTopic = _useBindDispatch.getTopic,
      getTopicReport = _useBindDispatch.getTopicReport,
      getAllTribunalCommentsBatch = _useBindDispatch.getAllTribunalCommentsBatch;

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var timer;

    if (reportStats) {
      timer = setInterval(function () {
        setTimeLeft((0,_generic_time_calculateTimeLeft__WEBPACK_IMPORTED_MODULE_13__.calculateTimeLeft)(reportStats.reportPeriodEnd));
      }, 1000);
    }

    return function () {
      return clearTimeout(timer);
    };
  }, [reportStats]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (contentId && user) {
      getTopic(contentId, user.userId || user.id);
      getTopicReport(contentId);
      getAllTribunalCommentsBatch(contentId);
    }
  }, [contentId, user]);
  var timerComponents = [];
  Object.keys(timeLeft).forEach(function (interval, idx) {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
      key: String(idx)
    }, timeLeft[interval], ' ', interval, ' '));
  });
  var Content = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
    var topic = topics === null || topics === void 0 ? void 0 : topics.find(function (t) {
      return t.id === contentId;
    });
    if (topic) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Topics_components_TopicItem_Index__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: topic.id,
      topic: topic,
      user: user
    });
    return null;
  }, [topics, contentId]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_3__.OuterContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_3__.Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_3__.StyledScalesSvg, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h1", null, "Community Court"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_3__.StyledScalesSvg, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    style: {
      fontSize: '1.3vw',
      color: 'gray'
    }
  }, timerComponents.length ? timerComponents : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_3__.InnerContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_svgs_svgs__WEBPACK_IMPORTED_MODULE_9__.PillarSvg, null), Content, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_svgs_svgs__WEBPACK_IMPORTED_MODULE_9__.PillarSvg, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_3__.VotingContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_3__.VotesAgainst, null, "Votes Against", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, "?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_3__.VotesFor, null, "Votes For", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, "?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_svgs_svgs__WEBPACK_IMPORTED_MODULE_9__.CastBallotSvg, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_CommonComponents_Button_Index__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onClick: openModal
  }, "Cast Your Vote"), ((reportStats === null || reportStats === void 0 ? void 0 : reportStats.voteAgainst) || (reportStats === null || reportStats === void 0 ? void 0 : reportStats.voteFor)) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, "You Have Already Voted")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_3__.ReportStatsContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_3__.ReportStatItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h2", null, "Toxic Reports"), reportStats && (reportStats.numToxicReports || 0)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_3__.ReportStatItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h2", null, "Personal Attack Reports"), reportStats && (reportStats.numPersonalAttackReports || 0)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_3__.ReportStatItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h2", null, "Spam Reports"), reportStats && (reportStats.numSpamReports || 0))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_TribunalComments_Index__WEBPACK_IMPORTED_MODULE_14__["default"], {
    comments: comments
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
/* harmony export */   "OuterContainer": () => (/* binding */ OuterContainer),
/* harmony export */   "Header": () => (/* binding */ Header),
/* harmony export */   "StyledScalesSvg": () => (/* binding */ StyledScalesSvg),
/* harmony export */   "InnerContainer": () => (/* binding */ InnerContainer),
/* harmony export */   "VotingContainer": () => (/* binding */ VotingContainer),
/* harmony export */   "ReportStatsContainer": () => (/* binding */ ReportStatsContainer),
/* harmony export */   "ReportStatItem": () => (/* binding */ ReportStatItem),
/* harmony export */   "VotesAgainst": () => (/* binding */ VotesAgainst),
/* harmony export */   "VotesFor": () => (/* binding */ VotesFor)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _svgs_svgs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../svgs/svgs */ "./src/svgs/svgs.jsx");


var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;



var OuterContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])('div')(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  padding-bottom: 60vh;\n"])));
var Header = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])('header')(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([" \n  display: flex;\n  align-items: center;\n  h1 {\n    font-weight: bold;\n    font-size: 2vw;\n  }\n  svg { \n    width: 4vw !important;\n    height: 4vw !important;\n    margin: 0 3vw;\n  }\n  \n"])));
var StyledScalesSvg = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_svgs_svgs__WEBPACK_IMPORTED_MODULE_1__.ScalesSvg)(_templateObject3 || (_templateObject3 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([" \n    width: 4vw !important;\n    height: 4vw !important;\n    margin: 0 1vw;\n\n"])));
var InnerContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])('div')(_templateObject4 || (_templateObject4 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  justify-content: space-between ;\n  /* align-items: center; */\n  width: 100%;\n"])));
var VotingContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])('section')(_templateObject5 || (_templateObject5 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  width: 50%;\n  height: 10vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  box-shadow: 0px 10px 20px rgb(60 60 60 / 10%);\n  border-radius: .5em;\n  background-color: white;\n  border: .5px solid lightgray;\n  border-color: rgba(200,200,200,0.25) ;\n\n"])));
var ReportStatsContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])('ul')(_templateObject6 || (_templateObject6 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n"])));
var ReportStatItem = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])('li')(_templateObject7 || (_templateObject7 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background-color: var(--m-menu-item-hover);\n\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  box-shadow: 0px 10px 20px rgb(60 60 60 / 10%);\n  border-radius: .5em;\n  background-color: var(--m-secondary-background-color);\n  font-size: 1vw;\n  padding: 2vw;\n  margin: 1vw 0;\n  padding: 2vw 4vw;\n  margin: 2vw 4vw;\n"])));
var VotesAgainst = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])('div')(_templateObject8 || (_templateObject8 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  left: 10%;\n  top: 50%;\n  transform: translate(0, -50%);\n  font-size: 2vw;\n  align-items: center;\n\n"])));
var VotesFor = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])('div')(_templateObject9 || (_templateObject9 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([" \n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  right: 10%;\n  top: 50%;\n  transform: translate(0, -50%);\n  font-size: 2vw;\n  align-items: center;\n"])));

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
/* harmony import */ var _CommonComponents_Tabs_Style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../CommonComponents/Tabs/Style */ "./src/pages/CommonComponents/Tabs/Style.js");
/* harmony import */ var _SubTopics_components_SubTopicThread_components_CommentColumn_Index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../SubTopics/components/SubTopicThread/components/CommentColumn/Index */ "./src/pages/SubTopics/components/SubTopicThread/components/CommentColumn/Index.jsx");
/* harmony import */ var _SubTopics_components_SubTopicThread_Style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../SubTopics/components/SubTopicThread/Style */ "./src/pages/SubTopics/components/SubTopicThread/Style/index.js");
/* harmony import */ var _hooks_useCategorizeComments__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks/useCategorizeComments */ "./src/pages/Tribunal/components/TribunalComments/hooks/useCategorizeComments.js");









var TribunalComments = function TribunalComments() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('all'),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      key = _useState2[0],
      setKey = _useState2[1];

  var comments = (0,_hooks_useCategorizeComments__WEBPACK_IMPORTED_MODULE_6__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_CommonComponents_Line__WEBPACK_IMPORTED_MODULE_2__.Line, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_CommonComponents_Tabs_Style__WEBPACK_IMPORTED_MODULE_3__.ThemeTab, {
    activeKey: key,
    onSelect: function onSelect(k) {
      return setKey(k);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
    eventKey: "all",
    title: "All"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_SubTopics_components_SubTopicThread_Style__WEBPACK_IMPORTED_MODULE_5__.ColumnContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_SubTopics_components_SubTopicThread_components_CommentColumn_Index__WEBPACK_IMPORTED_MODULE_4__["default"], {
    numComments: comments === null || comments === void 0 ? void 0 : comments.allComments,
    comments: comments.all,
    commentSentiment: "All",
    color: "var(--m-primary-background-color)"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
    eventKey: "Defendant",
    title: "Defendant"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_SubTopics_components_SubTopicThread_Style__WEBPACK_IMPORTED_MODULE_5__.ColumnContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_SubTopics_components_SubTopicThread_components_CommentColumn_Index__WEBPACK_IMPORTED_MODULE_4__["default"], {
    numComments: comments === null || comments === void 0 ? void 0 : comments.positiveComments,
    comments: comments.Defendant,
    commentSentiment: "Defendant",
    color: "#6A6E70"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
    eventKey: "Reporter",
    title: "Reporters"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_SubTopics_components_SubTopicThread_Style__WEBPACK_IMPORTED_MODULE_5__.ColumnContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_SubTopics_components_SubTopicThread_components_CommentColumn_Index__WEBPACK_IMPORTED_MODULE_4__["default"], {
    comments: comments.Reporter,
    commentSentiment: "Reporter",
    color: "#474A4F"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
    eventKey: "Jury",
    title: "Jury"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_SubTopics_components_SubTopicThread_Style__WEBPACK_IMPORTED_MODULE_5__.ColumnContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_SubTopics_components_SubTopicThread_components_CommentColumn_Index__WEBPACK_IMPORTED_MODULE_4__["default"], {
    comments: comments.Jury,
    commentSentiment: "Jury",
    color: "var(--m-primary-background-color)"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
    eventKey: "General",
    title: "General Public"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_SubTopics_components_SubTopicThread_Style__WEBPACK_IMPORTED_MODULE_5__.ColumnContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_SubTopics_components_SubTopicThread_components_CommentColumn_Index__WEBPACK_IMPORTED_MODULE_4__["default"], {
    comments: comments.General,
    commentSentiment: "General Public",
    color: "var(--m-primary-background-color)"
  })))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TribunalComments);

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

/***/ "./src/redux/actions/topic_reports/index.js":
/*!**************************************************!*\
  !*** ./src/redux/actions/topic_reports/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTopicReport": () => (/* binding */ getTopicReport),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _ui_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/index */ "./src/redux/actions/ui/index.js");
/* harmony import */ var _reducers_topic_reports_topicReportsReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../reducers/topic_reports/topicReportsReducer */ "./src/redux/reducers/topic_reports/topicReportsReducer.js");
/* harmony import */ var _api_v1_topic_reports_topic_reports_api_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../api/v1/topic_reports/topic_reports_api_util */ "./src/api/v1/topic_reports/topic_reports_api_util.js");
/* harmony import */ var _utils_errorFormatter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/errorFormatter */ "./src/redux/utils/errorFormatter.js");






var addTopicReportActionCreator = function addTopicReportActionCreator(topicReport) {
  return {
    type: _reducers_topic_reports_topicReportsReducer__WEBPACK_IMPORTED_MODULE_2__.ADD_TOPIC_REPORT,
    payload: topicReport
  };
};

var getTopicReport = function getTopicReport(topicId) {
  return function (dispatch) {
    return _api_v1_topic_reports_topic_reports_api_util__WEBPACK_IMPORTED_MODULE_3__.getTopicReport(topicId).then(function (res) {
      return dispatch(addTopicReportActionCreator(res.data));
    })["catch"](function (error) {
      return react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.error((0,_utils_errorFormatter__WEBPACK_IMPORTED_MODULE_4__.errorFormatter)(error));
    })["finally"](function () {
      return dispatch((0,_ui_index__WEBPACK_IMPORTED_MODULE_1__.closeModal)());
    });
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  getTopicReport: getTopicReport
});

/***/ })

}]);
//# sourceMappingURL=tribunal.bundle.js.map