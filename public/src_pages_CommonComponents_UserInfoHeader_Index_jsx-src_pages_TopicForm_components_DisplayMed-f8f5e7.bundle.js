"use strict";
(self["webpackChunkcivil"] = self["webpackChunkcivil"] || []).push([["src_pages_CommonComponents_UserInfoHeader_Index_jsx-src_pages_TopicForm_components_DisplayMed-f8f5e7"],{

/***/ "./src/api/v1/comments/comments_api_util.js":
/*!**************************************************!*\
  !*** ./src/api/v1/comments/comments_api_util.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkToxicity": () => (/* binding */ checkToxicity),
/* harmony export */   "createComment": () => (/* binding */ createComment),
/* harmony export */   "getAllCommentReplies": () => (/* binding */ getAllCommentReplies),
/* harmony export */   "getAllComments": () => (/* binding */ getAllComments),
/* harmony export */   "getComment": () => (/* binding */ getComment),
/* harmony export */   "updateCommentCivility": () => (/* binding */ updateCommentCivility),
/* harmony export */   "updateCommentLikes": () => (/* binding */ updateCommentLikes)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_hooks_permissions_useSessionType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../pages/hooks/permissions/useSessionType */ "./src/pages/hooks/permissions/useSessionType.js");
/* harmony import */ var _endpoints_endpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../endpoints/endpoints */ "./src/api/endpoints/endpoints.js");



var createComment = function createComment(subTopicData) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().post("".concat(_endpoints_endpoints__WEBPACK_IMPORTED_MODULE_2__.BACKEND_DEV, "/comments"), subTopicData);
};
var getAllComments = function getAllComments(subtopicId, userId) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().get("".concat(_endpoints_endpoints__WEBPACK_IMPORTED_MODULE_2__.BACKEND_DEV, "/comments?subtopicId=").concat(subtopicId, "&userId=").concat(userId));
};
var getAllCommentReplies = function getAllCommentReplies(commentId) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().get("".concat(_endpoints_endpoints__WEBPACK_IMPORTED_MODULE_2__.BACKEND_DEV, "/comments/replies/").concat(commentId));
};
var getComment = function getComment(commentId) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().get("".concat(_endpoints_endpoints__WEBPACK_IMPORTED_MODULE_2__.BACKEND_DEV, "/comments/").concat(commentId));
};
var updateCommentLikes = function updateCommentLikes(commentData) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().put("".concat(_endpoints_endpoints__WEBPACK_IMPORTED_MODULE_2__.BACKEND_DEV, "/comments/likes"), commentData);
};
var updateCommentCivility = function updateCommentCivility(commentData) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().put("".concat(_endpoints_endpoints__WEBPACK_IMPORTED_MODULE_2__.BACKEND_DEV, "/comments/civility"), commentData);
};
var checkToxicity = function checkToxicity(commentTextData) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().post("".concat(_endpoints_endpoints__WEBPACK_IMPORTED_MODULE_2__.UPLOAD_SERVICE, "/comments/toxicity"), commentTextData);
};

// export const getSubTopic = (subTopicId) => axios.get(`${BACKEND_DEV}/subtopics/${subTopicId}`)

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

/***/ "./src/api/v1/topics/topics_api_util.js":
/*!**********************************************!*\
  !*** ./src/api/v1/topics/topics_api_util.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTopic": () => (/* binding */ createTopic),
/* harmony export */   "getAllTopics": () => (/* binding */ getAllTopics),
/* harmony export */   "getLinkMetaData": () => (/* binding */ getLinkMetaData),
/* harmony export */   "getTopic": () => (/* binding */ getTopic),
/* harmony export */   "updateTopicLikes": () => (/* binding */ updateTopicLikes),
/* harmony export */   "uploadTopicMedia": () => (/* binding */ uploadTopicMedia)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _endpoints_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../endpoints/endpoints */ "./src/api/endpoints/endpoints.js");


var createTopic = function createTopic(topicData) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().post("".concat(_endpoints_endpoints__WEBPACK_IMPORTED_MODULE_1__.BACKEND_DEV, "/topics"), topicData);
};
var getAllTopics = function getAllTopics() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().get("".concat(_endpoints_endpoints__WEBPACK_IMPORTED_MODULE_1__.BACKEND_DEV, "/topics"));
};
var getTopic = function getTopic(topicId, userId) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().get("".concat(_endpoints_endpoints__WEBPACK_IMPORTED_MODULE_1__.BACKEND_DEV, "/topics/").concat(topicId, "/").concat(userId));
};
var updateTopicLikes = function updateTopicLikes(topicData) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().put("".concat(_endpoints_endpoints__WEBPACK_IMPORTED_MODULE_1__.BACKEND_DEV, "/topics"), topicData);
};
var uploadTopicMedia = function uploadTopicMedia(data, fileType, fileFormat) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().post("".concat(_endpoints_endpoints__WEBPACK_IMPORTED_MODULE_1__.UPLOAD_SERVICE, "/topics/upload-media?fileType=").concat(fileType, "&fileFormat=").concat(fileFormat), data);
};
var getLinkMetaData = function getLinkMetaData(url) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().get("".concat(_endpoints_endpoints__WEBPACK_IMPORTED_MODULE_1__.UPLOAD_SERVICE, "/topics/link-meta-data?url=").concat(url));
};

/***/ }),

/***/ "./src/api/v1/tribunal_comments/tribunal_comments_api_util.js":
/*!********************************************************************!*\
  !*** ./src/api/v1/tribunal_comments/tribunal_comments_api_util.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTribunalComment": () => (/* binding */ createTribunalComment),
/* harmony export */   "getAllTribunalComments": () => (/* binding */ getAllTribunalComments),
/* harmony export */   "getAllTribunalCommentsBatch": () => (/* binding */ getAllTribunalCommentsBatch),
/* harmony export */   "updateTribunalCommentCivility": () => (/* binding */ updateTribunalCommentCivility),
/* harmony export */   "updateTribunalCommentLikes": () => (/* binding */ updateTribunalCommentLikes)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _endpoints_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../endpoints/endpoints */ "./src/api/endpoints/endpoints.js");


var createTribunalComment = function createTribunalComment(comment) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().post("".concat(_endpoints_endpoints__WEBPACK_IMPORTED_MODULE_1__.BACKEND_DEV, "/tribunal-comments"), comment);
};
var getAllTribunalComments = function getAllTribunalComments(contentId, commentType) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().get("".concat(_endpoints_endpoints__WEBPACK_IMPORTED_MODULE_1__.BACKEND_DEV, "/tribunal-comments?contentId=").concat(contentId, "&commentType=").concat(commentType));
};
var getAllTribunalCommentsBatch = function getAllTribunalCommentsBatch(contentId) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().get("".concat(_endpoints_endpoints__WEBPACK_IMPORTED_MODULE_1__.BACKEND_DEV, "/tribunal-comments-batch?contentId=").concat(contentId));
};
var updateTribunalCommentLikes = function updateTribunalCommentLikes(commentData) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().put("".concat(_endpoints_endpoints__WEBPACK_IMPORTED_MODULE_1__.BACKEND_DEV, "/comments/likes-tribunal"), commentData);
};
var updateTribunalCommentCivility = function updateTribunalCommentCivility(commentData) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().put("".concat(_endpoints_endpoints__WEBPACK_IMPORTED_MODULE_1__.BACKEND_DEV, "/comments/civility-tribunal"), commentData);
};

/***/ }),

/***/ "./src/pages/CommonComponents/UserInfoHeader/Index.jsx":
/*!*************************************************************!*\
  !*** ./src/pages/CommonComponents/UserInfoHeader/Index.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _svgs_svgs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../svgs/svgs */ "./src/svgs/svgs.jsx");
/* harmony import */ var _UserIcon_Index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UserIcon/Index */ "./src/pages/CommonComponents/UserIcon/Index.jsx");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Style */ "./src/pages/CommonComponents/UserInfoHeader/Style/index.js");
/* harmony import */ var _Tooltip_Index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Tooltip/Index */ "./src/pages/CommonComponents/Tooltip/Index.jsx");
/* harmony import */ var _hooks_useOpenDidExplorer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hooks/useOpenDidExplorer */ "./src/pages/CommonComponents/UserInfoHeader/hooks/useOpenDidExplorer.js");
/* harmony import */ var _UsernameAndTag_Index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../UsernameAndTag/Index */ "./src/pages/CommonComponents/UsernameAndTag/Index.jsx");
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */







var UserInfoHeader = function UserInfoHeader(_ref) {
  var time = _ref.time,
    username = _ref.username,
    userId = _ref.userId,
    iconSrc = _ref.iconSrc,
    topicCreatorIsDidUser = _ref.topicCreatorIsDidUser,
    userTag = _ref.userTag;
  var usernameDisplay = userId !== null && userId !== void 0 && userId.startsWith('did') ? "".concat(username.substring(0, 12)) : username;
  var openDidExplorer = (0,_hooks_useOpenDidExplorer__WEBPACK_IMPORTED_MODULE_5__["default"])(username);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style__WEBPACK_IMPORTED_MODULE_3__.Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_UserIcon_Index__WEBPACK_IMPORTED_MODULE_2__["default"], {
    width: "3vw",
    userId: userId,
    iconSrc: iconSrc
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("time", null, time), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_UsernameAndTag_Index__WEBPACK_IMPORTED_MODULE_6__["default"], {
    usernameDisplay: usernameDisplay,
    userId: userId,
    userTag: userTag
  }), topicCreatorIsDidUser && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Tooltip_Index__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: openDidExplorer,
    Icon: _svgs_svgs__WEBPACK_IMPORTED_MODULE_1__.VerifiedSvg,
    tooltipHeader: "Verification Status",
    tooltipText: "This Is a DID Verified User with ID: ".concat(username)
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserInfoHeader);

/***/ }),

/***/ "./src/pages/CommonComponents/UserInfoHeader/Style/index.js":
/*!******************************************************************!*\
  !*** ./src/pages/CommonComponents/UserInfoHeader/Style/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": () => (/* binding */ Header),
/* harmony export */   "Thumb": () => (/* binding */ Thumb),
/* harmony export */   "UsernameContainer": () => (/* binding */ UsernameContainer)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _templateObject, _templateObject2, _templateObject3;

var Header = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([" \n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: .5em .5em;    \n  background-color: white;\n  /* height: 4vw;\n  max-height: 4vw; */\n  /* transition: filter 1s ease-in-out; */\n\n  div {\n    height: 100%;\n    flex-grow: 1;\n    display: flex;\n    align-items: center;\n    margin-left: 1em;\n    background-color: white;\n  }\n\n  time {\n      position: absolute;\n      top: 1em;\n      right: 1em;\n      color: gray;\n      font-size: .5em;\n    }\n\n  h2 {\n    line-height: unset;\n    border-top-left-radius: .5em;\n    border-top-right-radius: .5em;\n    font-weight: bold;\n    font-size: 1vw;\n    @media only screen and (max-width: 800px) {\n      font-size: 3.4vw;\n    }\n  }\n  h3 {\n    text-decoration: underline;\n    font-size: .8vw;\n    border-top-left-radius: .5em;\n    border-top-right-radius: .5em;\n    font-weight: bold;\n    color: gray;\n    @media only screen and (max-width: 800px) {\n      font-size: 3vw;\n    }\n    :hover {\n      color: var(--m-primary-btn-color);\n    }\n  }\n"])));
var Thumb = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('img')(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([" \n  flex-shrink: 0;\n  width: 3vw;\n  height: 3vw;      \n  border-radius: 50%; \n\n  @media only screen and (max-width: 800px) {\n     width: 9vw;\n     height: 9vw;  \n  }\n"])));
var UsernameContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('section')(_templateObject3 || (_templateObject3 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  align-items: flex-start;\n  display: flex;\n  flex-direction: column;\n\n"])));

/***/ }),

/***/ "./src/pages/TopicForm/components/DisplayMedia/Index.jsx":
/*!***************************************************************!*\
  !*** ./src/pages/TopicForm/components/DisplayMedia/Index.jsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LinkMetaData_Index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../LinkMetaData/Index */ "./src/pages/TopicForm/components/LinkMetaData/Index.jsx");


var DisplayMedia = function DisplayMedia(_ref) {
  var imgFile = _ref.imgFile,
    videoFile = _ref.videoFile,
    setMetaData = _ref.setMetaData,
    contentUrl = _ref.contentUrl;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, contentUrl && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_LinkMetaData_Index__WEBPACK_IMPORTED_MODULE_1__["default"], {
    setMetaData: setMetaData,
    contentUrl: contentUrl
  }), imgFile && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: imgFile,
    alt: ""
  }), videoFile && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("video", {
    controls: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("track", {
    "default": true,
    kind: "captions",
    srcLang: "en"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("source", {
    src: videoFile,
    type: "video/mp4"
  }), "Your browser does not support the video tag."));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DisplayMedia);

/***/ }),

/***/ "./src/pages/TopicForm/components/LinkMetaData/Index.jsx":
/*!***************************************************************!*\
  !*** ./src/pages/TopicForm/components/LinkMetaData/Index.jsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Style_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Style/index */ "./src/pages/TopicForm/components/LinkMetaData/Style/index.js");
/* harmony import */ var _CommonComponents_Line_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../CommonComponents/Line/index */ "./src/pages/CommonComponents/Line/index.js");
/* harmony import */ var _hocs_IsLoadingHOC__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../hocs/IsLoadingHOC */ "./src/hocs/IsLoadingHOC.jsx");
/* harmony import */ var _hooks_useGetLinkMetaDataEffect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks/useGetLinkMetaDataEffect */ "./src/pages/TopicForm/components/LinkMetaData/hooks/useGetLinkMetaDataEffect.js");





var LinkMetaData = function LinkMetaData(_ref) {
  var _metaData$ogImage;
  var topic = _ref.topic,
    contentUrl = _ref.contentUrl,
    setMetaData = _ref.setMetaData,
    setIsLoading = _ref.setIsLoading;
  var metaData = (0,_hooks_useGetLinkMetaDataEffect__WEBPACK_IMPORTED_MODULE_4__["default"])(topic, contentUrl, setMetaData, setIsLoading);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setIsLoading(true);
  }, [contentUrl]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_1__.Container, null, metaData ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_1__.LinkWrapper, {
    href: metaData.ogUrl,
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_1__.FlexDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_1__.OGTitle, null, metaData.ogTitle || metaData.ogSiteName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_1__.OGUrl, null, metaData.ogUrl), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_1__.OGImage, {
    src: ((_metaData$ogImage = metaData.ogImage) === null || _metaData$ogImage === void 0 ? void 0 : _metaData$ogImage.url) || metaData.favicon,
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CommonComponents_Line_index__WEBPACK_IMPORTED_MODULE_2__.Line, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Style_index__WEBPACK_IMPORTED_MODULE_1__.OGDescription, null, metaData.ogDescription))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    rel: "noreferrer",
    href: metaData === null || metaData === void 0 ? void 0 : metaData.requestUrl,
    target: "_blank"
  }, metaData === null || metaData === void 0 ? void 0 : metaData.requestUrl));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_hocs_IsLoadingHOC__WEBPACK_IMPORTED_MODULE_3__["default"])(LinkMetaData));

/***/ }),

/***/ "./src/pages/TopicForm/components/LinkMetaData/Style/index.js":
/*!********************************************************************!*\
  !*** ./src/pages/TopicForm/components/LinkMetaData/Style/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "FlexDiv": () => (/* binding */ FlexDiv),
/* harmony export */   "LinkWrapper": () => (/* binding */ LinkWrapper),
/* harmony export */   "OGDescription": () => (/* binding */ OGDescription),
/* harmony export */   "OGImage": () => (/* binding */ OGImage),
/* harmony export */   "OGTitle": () => (/* binding */ OGTitle),
/* harmony export */   "OGUrl": () => (/* binding */ OGUrl)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;

var Container = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  min-width: 70%;\n  width: 100%;\n"])));
var LinkWrapper = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('a')(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  text-decoration: none;\n\n"])));
var FlexDiv = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(_templateObject3 || (_templateObject3 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([" \n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: .5vw auto;\n  width: 85%;\n  box-shadow: 5px 5px 5px -3px #aaaaaa;\n  border-radius: 1vw;\n  border: 1px solid rgb(207, 217, 222);\n  padding: 1em;\n  :hover {\n    opacity: .8;\n  }\n"])));
var OGImage = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('img')(_templateObject4 || (_templateObject4 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([" \n  border-radius: 1vw;\n\n"])));
var OGUrl = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('span')(_templateObject5 || (_templateObject5 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([" \n  color: gray;\n  font-size: 1vw;\n  white-space: pre-wrap;  \n  word-wrap: break-word;\n  hyphens: auto;\n  max-width: 90%;\n  @media only screen and (max-width: 600px) {\n    font-size: 3vw;\n  }\n"])));
var OGTitle = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('h3')(_templateObject6 || (_templateObject6 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n font-size: 1vw;\n margin: .6vw 0 .1vw 0;\n color: gray;\n font-weight: bold;\n @media only screen and (max-width: 600px) {\n    font-size: 3vw;\n  }\n"])));
var OGDescription = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('p')(_templateObject7 || (_templateObject7 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([" \n  color: gray;\n  font-size: .8vw;\n  max-height: 35vh;\n  overflow-y: scroll;\n  @media only screen and (max-width: 600px) {\n    font-size: 3vw;\n  }\n \n"])));

/***/ }),

/***/ "./src/pages/TopicForm/components/LinkMetaData/hooks/useGetLinkMetaDataEffect.js":
/*!***************************************************************************************!*\
  !*** ./src/pages/TopicForm/components/LinkMetaData/hooks/useGetLinkMetaDataEffect.js ***!
  \***************************************************************************************/
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
/* harmony import */ var _api_v1_topics_topics_api_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../api/v1/topics/topics_api_util */ "./src/api/v1/topics/topics_api_util.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (topic, contentUrl, setDataForParentComponent, setIsLoading) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
    metaData = _useState2[0],
    setMetaData = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    var getMetaData = /*#__PURE__*/function () {
      var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        var _yield$getLinkMetaDat, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setMetaData(null);
                _context.next = 3;
                return (0,_api_v1_topics_topics_api_util__WEBPACK_IMPORTED_MODULE_4__.getLinkMetaData)((topic === null || topic === void 0 ? void 0 : topic.contentUrl) || contentUrl);
              case 3:
                _yield$getLinkMetaDat = _context.sent;
                data = _yield$getLinkMetaDat.data;
                if (typeof setDataForParentComponent === 'function') setDataForParentComponent(data);
                setMetaData(data);
                if (typeof setIsLoading === 'function') setIsLoading(false);
              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return function getMetaData() {
        return _ref.apply(this, arguments);
      };
    }();
    if (topic !== null && topic !== void 0 && topic.contentUrl || contentUrl) getMetaData();
  }, []);
  return metaData;
});

/***/ }),

/***/ "./src/pages/hooks/routing/useDetectCurrentPage.js":
/*!*********************************************************!*\
  !*** ./src/pages/hooks/routing/useDetectCurrentPage.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/node_modules/react-router/dist/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var _useLocation = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useLocation)(),
    pathname = _useLocation.pathname;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      isOnTribunalPage: pathname.includes('tribunal')
    };
  }, [pathname]);
});

/***/ }),

/***/ "./src/pages/hooks/useSetInnerHtml.js":
/*!********************************************!*\
  !*** ./src/pages/hooks/useSetInnerHtml.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (ref, html) {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (ref !== null && ref !== void 0 && ref.current) ref.current.innerHTML = html;
  }, [ref, html]);
});

/***/ }),

/***/ "./src/redux/actions/comments/index.js":
/*!*********************************************!*\
  !*** ./src/redux/actions/comments/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createComment": () => (/* binding */ createComment),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getAllCommentReplies": () => (/* binding */ getAllCommentReplies),
/* harmony export */   "getAllComments": () => (/* binding */ getAllComments),
/* harmony export */   "getComment": () => (/* binding */ getComment),
/* harmony export */   "updateCommentCivility": () => (/* binding */ updateCommentCivility),
/* harmony export */   "updateCommentLikes": () => (/* binding */ updateCommentLikes)
/* harmony export */ });
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _ui_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/index */ "./src/redux/actions/ui/index.js");
/* harmony import */ var _reducers_comments_commentsReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../reducers/comments/commentsReducer */ "./src/redux/reducers/comments/commentsReducer.js");
/* harmony import */ var _api_v1_comments_comments_api_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../api/v1/comments/comments_api_util */ "./src/api/v1/comments/comments_api_util.js");
/* harmony import */ var _utils_errorFormatter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/errorFormatter */ "./src/redux/utils/errorFormatter.js");
/* eslint-disable max-len */





var getAllCommentsActionCreator = function getAllCommentsActionCreator(subtopics) {
  return {
    type: _reducers_comments_commentsReducer__WEBPACK_IMPORTED_MODULE_2__.GET_ALL_COMMENTS,
    payload: subtopics
  };
};
var getAllCommentRepliesActionCreator = function getAllCommentRepliesActionCreator(commentWithReplies) {
  return {
    type: _reducers_comments_commentsReducer__WEBPACK_IMPORTED_MODULE_2__.GET_ALL_COMMENT_REPLIES,
    payload: commentWithReplies
  };
};
var addCommentActionCreator = function addCommentActionCreator(subTopicData) {
  return {
    type: _reducers_comments_commentsReducer__WEBPACK_IMPORTED_MODULE_2__.ADD_COMMENT,
    payload: subTopicData
  };
};
var addReportedCommentActionCreator = function addReportedCommentActionCreator(subTopicData) {
  return {
    type: _reducers_comments_commentsReducer__WEBPACK_IMPORTED_MODULE_2__.ADD_REPORTED_COMMENT,
    payload: subTopicData
  };
};
var updateCommentActionCreator = function updateCommentActionCreator(data) {
  return {
    type: _reducers_comments_commentsReducer__WEBPACK_IMPORTED_MODULE_2__.UPDATE_COMMENT_LIKES,
    payload: data
  };
};
var updateCommentCivilityActionCreator = function updateCommentCivilityActionCreator(data) {
  return {
    type: _reducers_comments_commentsReducer__WEBPACK_IMPORTED_MODULE_2__.UPDATE_COMMENT_CIVILITY,
    payload: data
  };
};
var createComment = function createComment(commentData) {
  return function (dispatch) {
    _api_v1_comments_comments_api_util__WEBPACK_IMPORTED_MODULE_3__.createComment(commentData).then(function (res) {
      return dispatch(addCommentActionCreator(res.data));
    }).then(function () {
      react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.success('Saved Comment', {
        delay: 1000
      });
    })["catch"](function (error) {
      return react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.error((0,_utils_errorFormatter__WEBPACK_IMPORTED_MODULE_4__.errorFormatter)(error));
    })["finally"](function () {
      return dispatch((0,_ui_index__WEBPACK_IMPORTED_MODULE_1__.closeModal)());
    });
  };
};
var getAllComments = function getAllComments(subTopicId, userId) {
  return function (dispatch) {
    return _api_v1_comments_comments_api_util__WEBPACK_IMPORTED_MODULE_3__.getAllComments(subTopicId, userId).then(function (res) {
      return dispatch(getAllCommentsActionCreator(res.data));
    })["catch"](function (error) {
      return react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.error((0,_utils_errorFormatter__WEBPACK_IMPORTED_MODULE_4__.errorFormatter)(error));
    });
  };
};
var getAllCommentReplies = function getAllCommentReplies(commentId) {
  return function (dispatch) {
    return _api_v1_comments_comments_api_util__WEBPACK_IMPORTED_MODULE_3__.getAllCommentReplies(commentId).then(function (res) {
      return dispatch(getAllCommentRepliesActionCreator(res.data));
    })["catch"](function (error) {
      return react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.error((0,_utils_errorFormatter__WEBPACK_IMPORTED_MODULE_4__.errorFormatter)(error));
    });
  };
};
var getComment = function getComment(commentId) {
  return function (dispatch) {
    return _api_v1_comments_comments_api_util__WEBPACK_IMPORTED_MODULE_3__.getComment(commentId).then(function (res) {
      return dispatch(addReportedCommentActionCreator(res.data));
    })["catch"](function (error) {
      return react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.error((0,_utils_errorFormatter__WEBPACK_IMPORTED_MODULE_4__.errorFormatter)(error));
    });
  };
};
var updateCommentLikes = function updateCommentLikes(data) {
  return function (dispatch) {
    return _api_v1_comments_comments_api_util__WEBPACK_IMPORTED_MODULE_3__.updateCommentLikes(data).then(function (res) {
      return dispatch(updateCommentActionCreator(res.data));
    })["catch"](function (error) {
      return react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.error((0,_utils_errorFormatter__WEBPACK_IMPORTED_MODULE_4__.errorFormatter)(error));
    });
  };
};
var updateCommentCivility = function updateCommentCivility(data) {
  return function (dispatch) {
    return _api_v1_comments_comments_api_util__WEBPACK_IMPORTED_MODULE_3__.updateCommentCivility(data).then(function (res) {
      return dispatch(updateCommentCivilityActionCreator(res.data));
    })["catch"](function (error) {
      return react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.error((0,_utils_errorFormatter__WEBPACK_IMPORTED_MODULE_4__.errorFormatter)(error));
    });
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  createComment: createComment,
  getAllComments: getAllComments,
  getComment: getComment,
  updateCommentLikes: updateCommentLikes,
  updateCommentCivility: updateCommentCivility,
  getAllCommentReplies: getAllCommentReplies
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

/***/ "./src/redux/actions/topics/index.js":
/*!*******************************************!*\
  !*** ./src/redux/actions/topics/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTopic": () => (/* binding */ createTopic),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getAllTopics": () => (/* binding */ getAllTopics),
/* harmony export */   "getTopic": () => (/* binding */ getTopic),
/* harmony export */   "updateTopicLikes": () => (/* binding */ updateTopicLikes)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _ui_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/index */ "./src/redux/actions/ui/index.js");
/* harmony import */ var _reducers_topicsReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../reducers/topicsReducer */ "./src/redux/reducers/topicsReducer.js");
/* harmony import */ var _api_v1_topics_topics_api_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../api/v1/topics/topics_api_util */ "./src/api/v1/topics/topics_api_util.js");
/* harmony import */ var _utils_errorFormatter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/errorFormatter */ "./src/redux/utils/errorFormatter.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
// action creator is just a function that dispatches an action





var getAllTopicsActionCreator = function getAllTopicsActionCreator(topics) {
  return {
    type: _reducers_topicsReducer__WEBPACK_IMPORTED_MODULE_3__.GET_ALL_TOPICS,
    payload: topics
  };
};
var addTopicActionCreator = function addTopicActionCreator(topicData) {
  return {
    type: _reducers_topicsReducer__WEBPACK_IMPORTED_MODULE_3__.ADD_TOPIC,
    payload: topicData
  };
};
var updateTopicLikesActionCreator = function updateTopicLikesActionCreator(data) {
  return {
    type: _reducers_topicsReducer__WEBPACK_IMPORTED_MODULE_3__.UPDATE_TOPIC_LIKES,
    payload: data
  };
};
var createTopic = function createTopic(topicData) {
  return function (dispatch) {
    return _api_v1_topics_topics_api_util__WEBPACK_IMPORTED_MODULE_4__.createTopic(topicData).then(function (res) {
      return dispatch(addTopicActionCreator(res.data));
    })["finally"](function () {
      return dispatch((0,_ui_index__WEBPACK_IMPORTED_MODULE_2__.closeModal)());
    })["catch"](function (error) {
      return react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error((0,_utils_errorFormatter__WEBPACK_IMPORTED_MODULE_5__.errorFormatter)(error));
    });
  };
};
var getAllTopics = function getAllTopics() {
  return function (dispatch) {
    return _api_v1_topics_topics_api_util__WEBPACK_IMPORTED_MODULE_4__.getAllTopics().then(function (res) {
      return dispatch(getAllTopicsActionCreator(res.data));
    })["catch"](function (error) {
      return react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error((0,_utils_errorFormatter__WEBPACK_IMPORTED_MODULE_5__.errorFormatter)(error));
    });
  };
};
var getTopic = function getTopic(topicId, userId) {
  return function (dispatch) {
    return _api_v1_topics_topics_api_util__WEBPACK_IMPORTED_MODULE_4__.getTopic(topicId, userId).then(function (res) {
      return dispatch(addTopicActionCreator(res.data));
    })["catch"](function (error) {
      return react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error((0,_utils_errorFormatter__WEBPACK_IMPORTED_MODULE_5__.errorFormatter)(error));
    });
  };
};
var updateTopicLikes = function updateTopicLikes(data) {
  return function (dispatch) {
    return _api_v1_topics_topics_api_util__WEBPACK_IMPORTED_MODULE_4__.updateTopicLikes(data).then(function (res) {
      return dispatch(updateTopicLikesActionCreator(res.data));
    })["catch"](function (error) {
      return react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error((0,_utils_errorFormatter__WEBPACK_IMPORTED_MODULE_5__.errorFormatter)(error));
    });
  };
};
var uploadTopicMedia = function uploadTopicMedia(data, fileType, fileFormat, topicData) {
  return function (dispatch) {
    return _api_v1_topics_topics_api_util__WEBPACK_IMPORTED_MODULE_4__.uploadTopicMedia(data, fileType, fileFormat).then(function (res) {
      createTopic(_objectSpread(_objectSpread({}, topicData), res.data))(dispatch);
    })["catch"](function (error) {
      return react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error((0,_utils_errorFormatter__WEBPACK_IMPORTED_MODULE_5__.errorFormatter)(error));
    });
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  createTopic: createTopic,
  getAllTopics: getAllTopics,
  getTopic: getTopic,
  updateTopicLikes: updateTopicLikes,
  uploadTopicMedia: uploadTopicMedia
});

/***/ }),

/***/ "./src/redux/actions/tribunal_comments/index.js":
/*!******************************************************!*\
  !*** ./src/redux/actions/tribunal_comments/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTribunalComment": () => (/* binding */ createTribunalComment),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getAllTribunalComments": () => (/* binding */ getAllTribunalComments),
/* harmony export */   "getAllTribunalCommentsBatch": () => (/* binding */ getAllTribunalCommentsBatch),
/* harmony export */   "updateTribunalCommentCivility": () => (/* binding */ updateTribunalCommentCivility),
/* harmony export */   "updateTribunalCommentLikes": () => (/* binding */ updateTribunalCommentLikes)
/* harmony export */ });
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _ui_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/index */ "./src/redux/actions/ui/index.js");
/* harmony import */ var _reducers_tribunal_comments_tribunalCommentsReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../reducers/tribunal_comments/tribunalCommentsReducer */ "./src/redux/reducers/tribunal_comments/tribunalCommentsReducer.js");
/* harmony import */ var _api_v1_tribunal_comments_tribunal_comments_api_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../api/v1/tribunal_comments/tribunal_comments_api_util */ "./src/api/v1/tribunal_comments/tribunal_comments_api_util.js");
/* harmony import */ var _utils_errorFormatter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/errorFormatter */ "./src/redux/utils/errorFormatter.js");
/* eslint-disable max-len */





var getAllCommentsActionCreator = function getAllCommentsActionCreator(comments, commentType) {
  return {
    type: _reducers_tribunal_comments_tribunalCommentsReducer__WEBPACK_IMPORTED_MODULE_2__.GET_ALL_TRIBUNAL_COMMENTS,
    payload: {
      comments: comments,
      commentType: commentType
    }
  };
};
var getAllCommentsBatchActionCreator = function getAllCommentsBatchActionCreator(payload) {
  return {
    type: _reducers_tribunal_comments_tribunalCommentsReducer__WEBPACK_IMPORTED_MODULE_2__.GET_ALL_TRIBUNAL_COMMENTS_BATCH,
    payload: payload
  };
};
var addCommentActionCreator = function addCommentActionCreator(subTopicData) {
  return {
    type: _reducers_tribunal_comments_tribunalCommentsReducer__WEBPACK_IMPORTED_MODULE_2__.ADD_TRIBUNAL_COMMENT,
    payload: subTopicData
  };
};
var updateCommentActionCreator = function updateCommentActionCreator(data) {
  return {
    type: _reducers_tribunal_comments_tribunalCommentsReducer__WEBPACK_IMPORTED_MODULE_2__.UPDATE_TRIBUNAL_COMMENT_LIKES,
    payload: data
  };
};
var updateCommentCivilityActionCreator = function updateCommentCivilityActionCreator(data) {
  return {
    type: _reducers_tribunal_comments_tribunalCommentsReducer__WEBPACK_IMPORTED_MODULE_2__.UPDATE_TRIBUNAL_COMMENT_CIVILITY,
    payload: data
  };
};
var createTribunalComment = function createTribunalComment(commentData) {
  return function (dispatch) {
    _api_v1_tribunal_comments_tribunal_comments_api_util__WEBPACK_IMPORTED_MODULE_3__.createTribunalComment(commentData).then(function (res) {
      return dispatch(addCommentActionCreator(res.data));
    }).then(function () {
      react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.success('Saved Comment', {
        delay: 1000
      });
    })["catch"](function (err) {
      return react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.error("Problem Saving Comment \n ".concat(err), {
        autoClose: 2500
      });
    })["finally"](function () {
      return dispatch((0,_ui_index__WEBPACK_IMPORTED_MODULE_1__.closeModal)());
    });
  };
};
var getAllTribunalComments = function getAllTribunalComments(contentId, commentType) {
  return function (dispatch) {
    return _api_v1_tribunal_comments_tribunal_comments_api_util__WEBPACK_IMPORTED_MODULE_3__.getAllTribunalComments(contentId, commentType).then(function (res) {
      return dispatch(getAllCommentsActionCreator(res.data, commentType));
    })["catch"](function (error) {
      return react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.error((0,_utils_errorFormatter__WEBPACK_IMPORTED_MODULE_4__.errorFormatter)(error));
    });
  };
};
var getAllTribunalCommentsBatch = function getAllTribunalCommentsBatch(contentId) {
  return function (dispatch) {
    return _api_v1_tribunal_comments_tribunal_comments_api_util__WEBPACK_IMPORTED_MODULE_3__.getAllTribunalCommentsBatch(contentId).then(function (res) {
      return dispatch(getAllCommentsBatchActionCreator(res.data));
    })["catch"](function (error) {
      return react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.error((0,_utils_errorFormatter__WEBPACK_IMPORTED_MODULE_4__.errorFormatter)(error));
    });
  };
};
var updateTribunalCommentLikes = function updateTribunalCommentLikes(data) {
  return function (dispatch) {
    return _api_v1_tribunal_comments_tribunal_comments_api_util__WEBPACK_IMPORTED_MODULE_3__.updateTribunalCommentLikes(data).then(function (res) {
      return dispatch(updateCommentActionCreator(res.data));
    })["catch"](function (error) {
      return react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.error(error);
    });
  };
};
var updateTribunalCommentCivility = function updateTribunalCommentCivility(data) {
  return function (dispatch) {
    return _api_v1_tribunal_comments_tribunal_comments_api_util__WEBPACK_IMPORTED_MODULE_3__.updateTribunalCommentCivility(data).then(function (res) {
      return dispatch(updateCommentCivilityActionCreator(res.data));
    })["catch"](function (error) {
      return react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.error(error);
    });
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  createTribunalComment: createTribunalComment,
  getAllTribunalComments: getAllTribunalComments,
  getAllTribunalCommentsBatch: getAllTribunalCommentsBatch,
  updateTribunalCommentCivility: updateTribunalCommentCivility,
  // getAllComments,
  updateTribunalCommentLikes: updateTribunalCommentLikes
  // updateCommentCivility,
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX0NvbW1vbkNvbXBvbmVudHNfVXNlckluZm9IZWFkZXJfSW5kZXhfanN4LXNyY19wYWdlc19Ub3BpY0Zvcm1fY29tcG9uZW50c19EaXNwbGF5TWVkLWY4ZjVlNy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDbUQ7QUFFTDtBQUVoRSxJQUFNSSxhQUFhLEdBQUcsU0FBaEJBLGFBQWEsQ0FBSUMsWUFBWTtFQUFBLE9BQUtMLGlEQUFVLFdBQUlFLDZEQUFXLGdCQUFhRyxZQUFZLENBQUM7QUFBQTtBQUUzRixJQUFNRSxjQUFjLEdBQUcsU0FBakJBLGNBQWMsQ0FBSUMsVUFBVSxFQUFFQyxNQUFNLEVBQUs7RUFDcEQsT0FBT1QsZ0RBQVMsV0FBSUUsNkRBQVcsa0NBQXdCTSxVQUFVLHFCQUFXQyxNQUFNLEVBQUc7QUFDdkYsQ0FBQztBQUVNLElBQU1FLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBb0IsQ0FBSUMsU0FBUztFQUFBLE9BQUtaLGdEQUFTLFdBQUlFLDZEQUFXLCtCQUFxQlUsU0FBUyxFQUFHO0FBQUE7QUFFckcsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQVUsQ0FBSUQsU0FBUztFQUFBLE9BQUtaLGdEQUFTLFdBQUlFLDZEQUFXLHVCQUFhVSxTQUFTLEVBQUc7QUFBQTtBQUVuRixJQUFNRSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQWtCLENBQUlDLFdBQVc7RUFBQSxPQUFLZixnREFBUyxXQUFJRSw2REFBVyxzQkFBbUJhLFdBQVcsQ0FBQztBQUFBO0FBRW5HLElBQU1FLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBcUIsQ0FBSUYsV0FBVztFQUFBLE9BQUtmLGdEQUFTLFdBQUlFLDZEQUFXLHlCQUFzQmEsV0FBVyxDQUFDO0FBQUE7QUFFekcsSUFBTUcsYUFBYSxHQUFHLFNBQWhCQSxhQUFhLENBQUlDLGVBQWU7RUFBQSxPQUFLbkIsaURBQVUsV0FBSUcsZ0VBQWMseUJBQXNCZ0IsZUFBZSxD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QkFBNkIsQ0FBSVosSUFBSTtFQUFBLE9BQUssVUFBQzRGLFFBQVE7SUFBQSxPQUFLc0IsK0dBQXFELENBQUNsSCxJQUFJLENBQUMsQ0FDN0g2RixJQUFJLENBQUMsVUFBQ0MsR0FBRztNQUFBLE9BQUtGLFFBQVEsQ0FBQ0Qsa0NBQWtDLENBQUNHLEdBQUcsQ0FBQzlGLElBQUksQ0FBQyxDQUFDO0lBQUEsRUFBQyxTQUNoRSxDQUFDLFVBQUNpRyxLQUFLO01BQUEsT0FBS3pCLHVEQUFXLENBQUN5QixLQUFLLENBQUM7SUFBQSxFQUFDO0VBQUE7QUFBQTtBQUV2QyxpRUFBZTtFQUNiNUYscUJBQXFCLEVBQXJCQSxxQkFBcUI7RUFDckJFLHNCQUFzQixFQUF0QkEsc0JBQXNCO0VBQ3RCRywyQkFBMkIsRUFBM0JBLDJCQUEyQjtFQUMzQkUsNkJBQTZCLEVBQTdCQSw2QkFBNkI7RUFDN0I7RUFDQUQsMEJBQTBCLEVBQTFCQTtFQUNBO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NpdmlsLy4vc3JjL2FwaS92MS9jb21tZW50cy9jb21tZW50c19hcGlfdXRpbC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9hcGkvdjEvc3VidG9waWNzL3N1YnRvcGljc19hcGlfdXRpbC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9hcGkvdjEvdG9waWNzL3RvcGljc19hcGlfdXRpbC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9hcGkvdjEvdHJpYnVuYWxfY29tbWVudHMvdHJpYnVuYWxfY29tbWVudHNfYXBpX3V0aWwuanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvQ29tbW9uQ29tcG9uZW50cy9Vc2VySW5mb0hlYWRlci9JbmRleC5qc3giLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvQ29tbW9uQ29tcG9uZW50cy9Vc2VySW5mb0hlYWRlci9TdHlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9Ub3BpY0Zvcm0vY29tcG9uZW50cy9EaXNwbGF5TWVkaWEvSW5kZXguanN4Iiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL1RvcGljRm9ybS9jb21wb25lbnRzL0xpbmtNZXRhRGF0YS9JbmRleC5qc3giLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvVG9waWNGb3JtL2NvbXBvbmVudHMvTGlua01ldGFEYXRhL1N0eWxlL2luZGV4LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL1RvcGljRm9ybS9jb21wb25lbnRzL0xpbmtNZXRhRGF0YS9ob29rcy91c2VHZXRMaW5rTWV0YURhdGFFZmZlY3QuanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvaG9va3Mvcm91dGluZy91c2VEZXRlY3RDdXJyZW50UGFnZS5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9ob29rcy91c2VTZXRJbm5lckh0bWwuanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcmVkdXgvYWN0aW9ucy9jb21tZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9yZWR1eC9hY3Rpb25zL3N1YnRvcGljcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9yZWR1eC9hY3Rpb25zL3RvcGljcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9yZWR1eC9hY3Rpb25zL3RyaWJ1bmFsX2NvbW1lbnRzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB1c2VTZXNzaW9uVHlwZSBmcm9tICcuLi8uLi8uLi9wYWdlcy9ob29rcy9wZXJtaXNzaW9ucy91c2VTZXNzaW9uVHlwZSdcblxuaW1wb3J0IHsgQkFDS0VORF9ERVYsIFVQTE9BRF9TRVJWSUNFIH0gZnJvbSAnLi4vLi4vZW5kcG9pbnRzL2VuZHBvaW50cydcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUNvbW1lbnQgPSAoc3ViVG9waWNEYXRhKSA9PiBheGlvcy5wb3N0KGAke0JBQ0tFTkRfREVWfS9jb21tZW50c2AsIHN1YlRvcGljRGF0YSlcblxuZXhwb3J0IGNvbnN0IGdldEFsbENvbW1lbnRzID0gKHN1YnRvcGljSWQsIHVzZXJJZCkgPT4ge1xuICByZXR1cm4gYXhpb3MuZ2V0KGAke0JBQ0tFTkRfREVWfS9jb21tZW50cz9zdWJ0b3BpY0lkPSR7c3VidG9waWNJZH0mdXNlcklkPSR7dXNlcklkfWApXG59XG5cbmV4cG9ydCBjb25zdCBnZXRBbGxDb21tZW50UmVwbGllcyA9IChjb21tZW50SWQpID0+IGF4aW9zLmdldChgJHtCQUNLRU5EX0RFVn0vY29tbWVudHMvcmVwbGllcy8ke2NvbW1lbnRJZH1gKVxuXG5leHBvcnQgY29uc3QgZ2V0Q29tbWVudCA9IChjb21tZW50SWQpID0+IGF4aW9zLmdldChgJHtCQUNLRU5EX0RFVn0vY29tbWVudHMvJHtjb21tZW50SWR9YClcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUNvbW1lbnRMaWtlcyA9IChjb21tZW50RGF0YSkgPT4gYXhpb3MucHV0KGAke0JBQ0tFTkRfREVWfS9jb21tZW50cy9saWtlc2AsIGNvbW1lbnREYXRhKVxuXG5leHBvcnQgY29uc3QgdXBkYXRlQ29tbWVudENpdmlsaXR5ID0gKGNvbW1lbnREYXRhKSA9PiBheGlvcy5wdXQoYCR7QkFDS0VORF9ERVZ9L2NvbW1lbnRzL2NpdmlsaXR5YCwgY29tbWVudERhdGEpXG5cbmV4cG9ydCBjb25zdCBjaGVja1RveGljaXR5ID0gKGNvbW1lbnRUZXh0RGF0YSkgPT4gYXhpb3MucG9zdChgJHtVUExPQURfU0VSVklDRX0vY29tbWVudHMvdG94aWNpdHlgLCBjb21tZW50VGV4dERhdGEpXG5cbi8vIGV4cG9ydCBjb25zdCBnZXRTdWJUb3BpYyA9IChzdWJUb3BpY0lkKSA9PiBheGlvcy5nZXQoYCR7QkFDS0VORF9ERVZ9L3N1YnRvcGljcy8ke3N1YlRvcGljSWR9YClcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7IEJBQ0tFTkRfREVWIH0gZnJvbSAnLi4vLi4vZW5kcG9pbnRzL2VuZHBvaW50cydcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVN1YlRvcGljID0gKHN1YlRvcGljRGF0YSkgPT4gYXhpb3MucG9zdChgJHtCQUNLRU5EX0RFVn0vc3VidG9waWNzYCwgc3ViVG9waWNEYXRhKVxuXG5leHBvcnQgY29uc3QgZ2V0QWxsU3ViVG9waWNzID0gKHRvcGljSWQpID0+IGF4aW9zLmdldChgJHtCQUNLRU5EX0RFVn0vc3VidG9waWNzP3RvcGljSWQ9JHt0b3BpY0lkfWApXG5cbmV4cG9ydCBjb25zdCBnZXRTdWJUb3BpYyA9IChzdWJUb3BpY0lkKSA9PiBheGlvcy5nZXQoYCR7QkFDS0VORF9ERVZ9L3N1YnRvcGljcy8ke3N1YlRvcGljSWR9YClcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7IEJBQ0tFTkRfREVWLCBVUExPQURfU0VSVklDRSB9IGZyb20gJy4uLy4uL2VuZHBvaW50cy9lbmRwb2ludHMnXG5cbmV4cG9ydCBjb25zdCBjcmVhdGVUb3BpYyA9ICh0b3BpY0RhdGEpID0+IGF4aW9zLnBvc3QoYCR7QkFDS0VORF9ERVZ9L3RvcGljc2AsIHRvcGljRGF0YSlcblxuZXhwb3J0IGNvbnN0IGdldEFsbFRvcGljcyA9ICgpID0+IGF4aW9zLmdldChgJHtCQUNLRU5EX0RFVn0vdG9waWNzYClcblxuZXhwb3J0IGNvbnN0IGdldFRvcGljID0gKHRvcGljSWQsIHVzZXJJZCkgPT4gYXhpb3MuZ2V0KGAke0JBQ0tFTkRfREVWfS90b3BpY3MvJHt0b3BpY0lkfS8ke3VzZXJJZH1gKVxuXG5leHBvcnQgY29uc3QgdXBkYXRlVG9waWNMaWtlcyA9ICh0b3BpY0RhdGEpID0+IGF4aW9zLnB1dChgJHtCQUNLRU5EX0RFVn0vdG9waWNzYCwgdG9waWNEYXRhKVxuXG5leHBvcnQgY29uc3QgdXBsb2FkVG9waWNNZWRpYSA9IChkYXRhLCBmaWxlVHlwZSwgZmlsZUZvcm1hdCkgPT4gYXhpb3MucG9zdChgJHtVUExPQURfU0VSVklDRX0vdG9waWNzL3VwbG9hZC1tZWRpYT9maWxlVHlwZT0ke2ZpbGVUeXBlfSZmaWxlRm9ybWF0PSR7ZmlsZUZvcm1hdH1gLCBkYXRhKVxuXG5leHBvcnQgY29uc3QgZ2V0TGlua01ldGFEYXRhID0gKHVybCkgPT4gYXhpb3MuZ2V0KGAke1VQTE9BRF9TRVJWSUNFfS90b3BpY3MvbGluay1tZXRhLWRhdGE/dXJsPSR7dXJsfWApXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmltcG9ydCB7IEJBQ0tFTkRfREVWIH0gZnJvbSAnLi4vLi4vZW5kcG9pbnRzL2VuZHBvaW50cydcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVRyaWJ1bmFsQ29tbWVudCA9IChjb21tZW50KSA9PiBheGlvcy5wb3N0KGAke0JBQ0tFTkRfREVWfS90cmlidW5hbC1jb21tZW50c2AsIGNvbW1lbnQpXG5cbmV4cG9ydCBjb25zdCBnZXRBbGxUcmlidW5hbENvbW1lbnRzID0gKGNvbnRlbnRJZCwgY29tbWVudFR5cGUpID0+IGF4aW9zLmdldChgJHtCQUNLRU5EX0RFVn0vdHJpYnVuYWwtY29tbWVudHM/Y29udGVudElkPSR7Y29udGVudElkfSZjb21tZW50VHlwZT0ke2NvbW1lbnRUeXBlfWApXG5cbmV4cG9ydCBjb25zdCBnZXRBbGxUcmlidW5hbENvbW1lbnRzQmF0Y2ggPSAoY29udGVudElkKSA9PiBheGlvcy5nZXQoYCR7QkFDS0VORF9ERVZ9L3RyaWJ1bmFsLWNvbW1lbnRzLWJhdGNoP2NvbnRlbnRJZD0ke2NvbnRlbnRJZH1gKVxuXG5leHBvcnQgY29uc3QgdXBkYXRlVHJpYnVuYWxDb21tZW50TGlrZXMgPSAoY29tbWVudERhdGEpID0+IGF4aW9zLnB1dChgJHtCQUNLRU5EX0RFVn0vY29tbWVudHMvbGlrZXMtdHJpYnVuYWxgLCBjb21tZW50RGF0YSlcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVRyaWJ1bmFsQ29tbWVudENpdmlsaXR5ID0gKGNvbW1lbnREYXRhKSA9PiBheGlvcy5wdXQoYCR7QkFDS0VORF9ERVZ9L2NvbW1lbnRzL2NpdmlsaXR5LXRyaWJ1bmFsYCwgY29tbWVudERhdGEpXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9uby1ub25pbnRlcmFjdGl2ZS1lbGVtZW50LWludGVyYWN0aW9ucyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVmVyaWZpZWRTdmcgfSBmcm9tICcuLi8uLi8uLi9zdmdzL3N2Z3MnXG5pbXBvcnQgVXNlckljb24gZnJvbSAnLi4vVXNlckljb24vSW5kZXgnXG5cbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4vU3R5bGUnXG5pbXBvcnQgVGhlbWVUb29sdGlwIGZyb20gJy4uL1Rvb2x0aXAvSW5kZXgnXG5pbXBvcnQgdXNlT3BlbkRpZEV4cGxvcmVyIGZyb20gJy4vaG9va3MvdXNlT3BlbkRpZEV4cGxvcmVyJ1xuaW1wb3J0IFVzZXJuYW1lQW5kVGFnIGZyb20gJy4uL1VzZXJuYW1lQW5kVGFnL0luZGV4J1xuXG5jb25zdCBVc2VySW5mb0hlYWRlciA9ICh7XG4gIHRpbWUsIHVzZXJuYW1lLCB1c2VySWQsIGljb25TcmMsIHRvcGljQ3JlYXRvcklzRGlkVXNlciwgdXNlclRhZyxcbn0pID0+IHtcbiAgY29uc3QgdXNlcm5hbWVEaXNwbGF5ID0gdXNlcklkPy5zdGFydHNXaXRoKCdkaWQnKSA/IGAke3VzZXJuYW1lLnN1YnN0cmluZygwLCAxMil9YCA6IHVzZXJuYW1lXG4gIGNvbnN0IG9wZW5EaWRFeHBsb3JlciA9IHVzZU9wZW5EaWRFeHBsb3Jlcih1c2VybmFtZSlcbiAgcmV0dXJuIChcbiAgICA8SGVhZGVyPlxuICAgICAgPFVzZXJJY29uIHdpZHRoPVwiM3Z3XCIgdXNlcklkPXt1c2VySWR9IGljb25TcmM9e2ljb25TcmN9IC8+XG4gICAgICA8ZGl2PlxuICAgICAgICA8dGltZT57dGltZX08L3RpbWU+XG4gICAgICAgIDxVc2VybmFtZUFuZFRhZ1xuICAgICAgICAgIHVzZXJuYW1lRGlzcGxheT17dXNlcm5hbWVEaXNwbGF5fVxuICAgICAgICAgIHVzZXJJZD17dXNlcklkfVxuICAgICAgICAgIHVzZXJUYWc9e3VzZXJUYWd9XG4gICAgICAgIC8+XG5cbiAgICAgICAge3RvcGljQ3JlYXRvcklzRGlkVXNlclxuICAgICAgICAmJiAoXG4gICAgICAgIDxUaGVtZVRvb2x0aXBcbiAgICAgICAgICBvbkNsaWNrPXtvcGVuRGlkRXhwbG9yZXJ9XG4gICAgICAgICAgSWNvbj17VmVyaWZpZWRTdmd9XG4gICAgICAgICAgdG9vbHRpcEhlYWRlcj1cIlZlcmlmaWNhdGlvbiBTdGF0dXNcIlxuICAgICAgICAgIHRvb2x0aXBUZXh0PXtgVGhpcyBJcyBhIERJRCBWZXJpZmllZCBVc2VyIHdpdGggSUQ6ICR7dXNlcm5hbWV9YH1cbiAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvSGVhZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJJbmZvSGVhZGVyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgSGVhZGVyID0gc3R5bGVkKCdkaXYnKWAgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IC41ZW0gLjVlbTsgICAgXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAvKiBoZWlnaHQ6IDR2dztcbiAgbWF4LWhlaWdodDogNHZ3OyAqL1xuICAvKiB0cmFuc2l0aW9uOiBmaWx0ZXIgMXMgZWFzZS1pbi1vdXQ7ICovXG5cbiAgZGl2IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgdGltZSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDFlbTtcbiAgICAgIHJpZ2h0OiAxZW07XG4gICAgICBjb2xvcjogZ3JheTtcbiAgICAgIGZvbnQtc2l6ZTogLjVlbTtcbiAgICB9XG5cbiAgaDIge1xuICAgIGxpbmUtaGVpZ2h0OiB1bnNldDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAuNWVtO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAuNWVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMXZ3O1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAgIGZvbnQtc2l6ZTogMy40dnc7XG4gICAgfVxuICB9XG4gIGgzIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBmb250LXNpemU6IC44dnc7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogLjVlbTtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogLjVlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogZ3JheTtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgICBmb250LXNpemU6IDN2dztcbiAgICB9XG4gICAgOmhvdmVyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1tLXByaW1hcnktYnRuLWNvbG9yKTtcbiAgICB9XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IFRodW1iID0gc3R5bGVkKCdpbWcnKWAgXG4gIGZsZXgtc2hyaW5rOiAwO1xuICB3aWR0aDogM3Z3O1xuICBoZWlnaHQ6IDN2dzsgICAgICBcbiAgYm9yZGVyLXJhZGl1czogNTAlOyBcblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgIHdpZHRoOiA5dnc7XG4gICAgIGhlaWdodDogOXZ3OyAgXG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IFVzZXJuYW1lQ29udGFpbmVyID0gc3R5bGVkKCdzZWN0aW9uJylgXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG5gXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGlua01ldGFEYXRhIGZyb20gJy4uL0xpbmtNZXRhRGF0YS9JbmRleCdcblxuY29uc3QgRGlzcGxheU1lZGlhID0gKHtcbiAgaW1nRmlsZSwgdmlkZW9GaWxlLCBzZXRNZXRhRGF0YSwgY29udGVudFVybCxcbn0pID0+IChcbiAgPD5cbiAgICB7IGNvbnRlbnRVcmwgJiYgKFxuICAgIDxMaW5rTWV0YURhdGFcbiAgICAgIHNldE1ldGFEYXRhPXtzZXRNZXRhRGF0YX1cbiAgICAgIGNvbnRlbnRVcmw9e2NvbnRlbnRVcmx9XG4gICAgLz5cbiAgICApIH1cbiAgICB7IGltZ0ZpbGUgJiYgPGltZyBzcmM9e2ltZ0ZpbGV9IGFsdD1cIlwiIC8+fVxuICAgIHsgdmlkZW9GaWxlICYmIChcbiAgICA8dmlkZW8gY29udHJvbHM+XG4gICAgICA8dHJhY2tcbiAgICAgICAgZGVmYXVsdFxuICAgICAgICBraW5kPVwiY2FwdGlvbnNcIlxuICAgICAgICBzcmNMYW5nPVwiZW5cIlxuICAgICAgLz5cbiAgICAgIDxzb3VyY2Ugc3JjPXt2aWRlb0ZpbGV9IHR5cGU9XCJ2aWRlby9tcDRcIiAvPlxuICAgICAgWW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgdGhlIHZpZGVvIHRhZy5cbiAgICA8L3ZpZGVvPlxuICAgICl9XG4gIDwvPlxuXG4pXG5cbmV4cG9ydCBkZWZhdWx0IERpc3BsYXlNZWRpYVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQge1xuICBGbGV4RGl2LCBPR1VybCwgT0dUaXRsZSwgT0dEZXNjcmlwdGlvbiwgT0dJbWFnZSwgTGlua1dyYXBwZXIsIENvbnRhaW5lcixcbn0gZnJvbSAnLi9TdHlsZS9pbmRleCdcbmltcG9ydCB7IExpbmUgfSBmcm9tICcuLi8uLi8uLi9Db21tb25Db21wb25lbnRzL0xpbmUvaW5kZXgnXG5pbXBvcnQgSXNMb2FkaW5nSE9DIGZyb20gJy4uLy4uLy4uLy4uL2hvY3MvSXNMb2FkaW5nSE9DJ1xuaW1wb3J0IHVzZUdldExpbmtNZXRhRGF0YUVmZmVjdCBmcm9tICcuL2hvb2tzL3VzZUdldExpbmtNZXRhRGF0YUVmZmVjdCdcblxuY29uc3QgTGlua01ldGFEYXRhID0gKHtcbiAgdG9waWMsIGNvbnRlbnRVcmwsIHNldE1ldGFEYXRhLCBzZXRJc0xvYWRpbmcsXG59KSA9PiB7XG4gIGNvbnN0IG1ldGFEYXRhID0gdXNlR2V0TGlua01ldGFEYXRhRWZmZWN0KHRvcGljLCBjb250ZW50VXJsLCBzZXRNZXRhRGF0YSwgc2V0SXNMb2FkaW5nKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldElzTG9hZGluZyh0cnVlKVxuICB9LCBbY29udGVudFVybF0pXG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgeyBtZXRhRGF0YVxuICAgICAgICA/IChcbiAgICAgICAgICA8TGlua1dyYXBwZXIgaHJlZj17bWV0YURhdGEub2dVcmx9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgPEZsZXhEaXY+XG4gICAgICAgICAgICAgIDxPR1RpdGxlPnttZXRhRGF0YS5vZ1RpdGxlIHx8IG1ldGFEYXRhLm9nU2l0ZU5hbWV9PC9PR1RpdGxlPlxuICAgICAgICAgICAgICA8T0dVcmw+e21ldGFEYXRhLm9nVXJsfTwvT0dVcmw+XG4gICAgICAgICAgICAgIDxPR0ltYWdlIHNyYz17bWV0YURhdGEub2dJbWFnZT8udXJsIHx8IG1ldGFEYXRhLmZhdmljb259IGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgIDxMaW5lIC8+XG4gICAgICAgICAgICAgIDxPR0Rlc2NyaXB0aW9uPnttZXRhRGF0YS5vZ0Rlc2NyaXB0aW9ufTwvT0dEZXNjcmlwdGlvbj5cbiAgICAgICAgICAgIDwvRmxleERpdj5cbiAgICAgICAgICA8L0xpbmtXcmFwcGVyPlxuICAgICAgICApIDogPGEgcmVsPVwibm9yZWZlcnJlclwiIGhyZWY9e21ldGFEYXRhPy5yZXF1ZXN0VXJsfSB0YXJnZXQ9XCJfYmxhbmtcIj57bWV0YURhdGE/LnJlcXVlc3RVcmx9PC9hPn1cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuZXhwb3J0IGRlZmF1bHQgSXNMb2FkaW5nSE9DKExpbmtNZXRhRGF0YSlcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpYFxuICBtaW4td2lkdGg6IDcwJTtcbiAgd2lkdGg6IDEwMCU7XG5gXG5cbmV4cG9ydCBjb25zdCBMaW5rV3JhcHBlciA9IHN0eWxlZCgnYScpYFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbmBcblxuZXhwb3J0IGNvbnN0IEZsZXhEaXYgPSBzdHlsZWQoJ2RpdicpYCBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAuNXZ3IGF1dG87XG4gIHdpZHRoOiA4NSU7XG4gIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IC0zcHggI2FhYWFhYTtcbiAgYm9yZGVyLXJhZGl1czogMXZ3O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjA3LCAyMTcsIDIyMik7XG4gIHBhZGRpbmc6IDFlbTtcbiAgOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAuODtcbiAgfVxuYFxuZXhwb3J0IGNvbnN0IE9HSW1hZ2UgPSBzdHlsZWQoJ2ltZycpYCBcbiAgYm9yZGVyLXJhZGl1czogMXZ3O1xuXG5gXG5cbmV4cG9ydCBjb25zdCBPR1VybCA9IHN0eWxlZCgnc3BhbicpYCBcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtc2l6ZTogMXZ3O1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7ICBcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBoeXBoZW5zOiBhdXRvO1xuICBtYXgtd2lkdGg6IDkwJTtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIGZvbnQtc2l6ZTogM3Z3O1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBPR1RpdGxlID0gc3R5bGVkKCdoMycpYFxuIGZvbnQtc2l6ZTogMXZ3O1xuIG1hcmdpbjogLjZ2dyAwIC4xdncgMDtcbiBjb2xvcjogZ3JheTtcbiBmb250LXdlaWdodDogYm9sZDtcbiBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgZm9udC1zaXplOiAzdnc7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IE9HRGVzY3JpcHRpb24gPSBzdHlsZWQoJ3AnKWAgXG4gIGNvbG9yOiBncmF5O1xuICBmb250LXNpemU6IC44dnc7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIGZvbnQtc2l6ZTogM3Z3O1xuICB9XG4gXG5gXG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IGdldExpbmtNZXRhRGF0YSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2FwaS92MS90b3BpY3MvdG9waWNzX2FwaV91dGlsJ1xuXG5leHBvcnQgZGVmYXVsdCAodG9waWMsIGNvbnRlbnRVcmwsIHNldERhdGFGb3JQYXJlbnRDb21wb25lbnQsIHNldElzTG9hZGluZykgPT4ge1xuICBjb25zdCBbbWV0YURhdGEsIHNldE1ldGFEYXRhXSA9IHVzZVN0YXRlKG51bGwpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZ2V0TWV0YURhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICBzZXRNZXRhRGF0YShudWxsKVxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBnZXRMaW5rTWV0YURhdGEodG9waWM/LmNvbnRlbnRVcmwgfHwgY29udGVudFVybClcbiAgICAgIGlmICh0eXBlb2Ygc2V0RGF0YUZvclBhcmVudENvbXBvbmVudCA9PT0gJ2Z1bmN0aW9uJykgc2V0RGF0YUZvclBhcmVudENvbXBvbmVudChkYXRhKVxuICAgICAgc2V0TWV0YURhdGEoZGF0YSlcbiAgICAgIGlmICh0eXBlb2Ygc2V0SXNMb2FkaW5nID09PSAnZnVuY3Rpb24nKSBzZXRJc0xvYWRpbmcoZmFsc2UpXG4gICAgfVxuICAgIGlmICh0b3BpYz8uY29udGVudFVybCB8fCBjb250ZW50VXJsKSBnZXRNZXRhRGF0YSgpXG4gIH0sIFtdKVxuXG4gIHJldHVybiBtZXRhRGF0YVxufVxuIiwiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZUxvY2F0aW9uKClcbiAgcmV0dXJuIHVzZU1lbW8oKCkgPT4gKHtcbiAgICBpc09uVHJpYnVuYWxQYWdlOiBwYXRobmFtZS5pbmNsdWRlcygndHJpYnVuYWwnKSxcbiAgfSksIFtwYXRobmFtZV0pXG59XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgKHJlZiwgaHRtbCkgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChyZWY/LmN1cnJlbnQpIHJlZi5jdXJyZW50LmlubmVySFRNTCA9IGh0bWxcbiAgfSwgW3JlZiwgaHRtbF0pXG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5J1xuXG5pbXBvcnQgeyBjbG9zZU1vZGFsIH0gZnJvbSAnLi4vdWkvaW5kZXgnXG5pbXBvcnQge1xuICBBRERfQ09NTUVOVCwgR0VUX0FMTF9DT01NRU5UUywgVVBEQVRFX0NPTU1FTlRfTElLRVMsIFVQREFURV9DT01NRU5UX0NJVklMSVRZLCBBRERfUkVQT1JURURfQ09NTUVOVCwgR0VUX0FMTF9DT01NRU5UX1JFUExJRVMsXG59IGZyb20gJy4uLy4uL3JlZHVjZXJzL2NvbW1lbnRzL2NvbW1lbnRzUmVkdWNlcidcbmltcG9ydCAqIGFzIENvbW1lbnRzQXBpVXRpbCBmcm9tICcuLi8uLi8uLi9hcGkvdjEvY29tbWVudHMvY29tbWVudHNfYXBpX3V0aWwnXG5pbXBvcnQgeyBlcnJvckZvcm1hdHRlciB9IGZyb20gJy4uLy4uL3V0aWxzL2Vycm9yRm9ybWF0dGVyJ1xuXG5jb25zdCBnZXRBbGxDb21tZW50c0FjdGlvbkNyZWF0b3IgPSAoc3VidG9waWNzKSA9PiAoe1xuICB0eXBlOiBHRVRfQUxMX0NPTU1FTlRTLFxuICBwYXlsb2FkOiBzdWJ0b3BpY3MsXG59KVxuXG5jb25zdCBnZXRBbGxDb21tZW50UmVwbGllc0FjdGlvbkNyZWF0b3IgPSAoY29tbWVudFdpdGhSZXBsaWVzKSA9PiAoe1xuICB0eXBlOiBHRVRfQUxMX0NPTU1FTlRfUkVQTElFUyxcbiAgcGF5bG9hZDogY29tbWVudFdpdGhSZXBsaWVzLFxufSlcblxuY29uc3QgYWRkQ29tbWVudEFjdGlvbkNyZWF0b3IgPSAoc3ViVG9waWNEYXRhKSA9PiAoe1xuICB0eXBlOiBBRERfQ09NTUVOVCxcbiAgcGF5bG9hZDogc3ViVG9waWNEYXRhLFxufSlcblxuY29uc3QgYWRkUmVwb3J0ZWRDb21tZW50QWN0aW9uQ3JlYXRvciA9IChzdWJUb3BpY0RhdGEpID0+ICh7XG4gIHR5cGU6IEFERF9SRVBPUlRFRF9DT01NRU5ULFxuICBwYXlsb2FkOiBzdWJUb3BpY0RhdGEsXG59KVxuXG5jb25zdCB1cGRhdGVDb21tZW50QWN0aW9uQ3JlYXRvciA9IChkYXRhKSA9PiAoe1xuICB0eXBlOiBVUERBVEVfQ09NTUVOVF9MSUtFUyxcbiAgcGF5bG9hZDogZGF0YSxcbn0pXG5cbmNvbnN0IHVwZGF0ZUNvbW1lbnRDaXZpbGl0eUFjdGlvbkNyZWF0b3IgPSAoZGF0YSkgPT4gKHtcbiAgdHlwZTogVVBEQVRFX0NPTU1FTlRfQ0lWSUxJVFksXG4gIHBheWxvYWQ6IGRhdGEsXG59KVxuXG5leHBvcnQgY29uc3QgY3JlYXRlQ29tbWVudCA9IChjb21tZW50RGF0YSkgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIENvbW1lbnRzQXBpVXRpbC5jcmVhdGVDb21tZW50KGNvbW1lbnREYXRhKVxuICAgIC50aGVuKChyZXMpID0+IGRpc3BhdGNoKGFkZENvbW1lbnRBY3Rpb25DcmVhdG9yKHJlcy5kYXRhKSkpXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgdG9hc3Quc3VjY2VzcygnU2F2ZWQgQ29tbWVudCcsIHsgZGVsYXk6IDEwMDAgfSlcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHRvYXN0LmVycm9yKGVycm9yRm9ybWF0dGVyKGVycm9yKSkpXG4gICAgLmZpbmFsbHkoKCkgPT4gZGlzcGF0Y2goY2xvc2VNb2RhbCgpKSlcbn1cblxuZXhwb3J0IGNvbnN0IGdldEFsbENvbW1lbnRzID0gKHN1YlRvcGljSWQsIHVzZXJJZCkgPT4gKGRpc3BhdGNoKSA9PiBDb21tZW50c0FwaVV0aWwuZ2V0QWxsQ29tbWVudHMoc3ViVG9waWNJZCwgdXNlcklkKVxuICAudGhlbigocmVzKSA9PiBkaXNwYXRjaChnZXRBbGxDb21tZW50c0FjdGlvbkNyZWF0b3IocmVzLmRhdGEpKSlcbiAgLmNhdGNoKChlcnJvcikgPT4gdG9hc3QuZXJyb3IoZXJyb3JGb3JtYXR0ZXIoZXJyb3IpKSlcblxuZXhwb3J0IGNvbnN0IGdldEFsbENvbW1lbnRSZXBsaWVzID0gKGNvbW1lbnRJZCkgPT4gKGRpc3BhdGNoKSA9PiBDb21tZW50c0FwaVV0aWwuZ2V0QWxsQ29tbWVudFJlcGxpZXMoY29tbWVudElkKVxuICAudGhlbigocmVzKSA9PiBkaXNwYXRjaChnZXRBbGxDb21tZW50UmVwbGllc0FjdGlvbkNyZWF0b3IocmVzLmRhdGEpKSlcbiAgLmNhdGNoKChlcnJvcikgPT4gdG9hc3QuZXJyb3IoZXJyb3JGb3JtYXR0ZXIoZXJyb3IpKSlcblxuZXhwb3J0IGNvbnN0IGdldENvbW1lbnQgPSAoY29tbWVudElkKSA9PiAoZGlzcGF0Y2gpID0+IENvbW1lbnRzQXBpVXRpbC5nZXRDb21tZW50KGNvbW1lbnRJZClcbiAgLnRoZW4oKHJlcykgPT4gZGlzcGF0Y2goYWRkUmVwb3J0ZWRDb21tZW50QWN0aW9uQ3JlYXRvcihyZXMuZGF0YSkpKVxuICAuY2F0Y2goKGVycm9yKSA9PiB0b2FzdC5lcnJvcihlcnJvckZvcm1hdHRlcihlcnJvcikpKVxuXG5leHBvcnQgY29uc3QgdXBkYXRlQ29tbWVudExpa2VzID0gKGRhdGEpID0+IChkaXNwYXRjaCkgPT4gQ29tbWVudHNBcGlVdGlsLnVwZGF0ZUNvbW1lbnRMaWtlcyhkYXRhKVxuICAudGhlbigocmVzKSA9PiBkaXNwYXRjaCh1cGRhdGVDb21tZW50QWN0aW9uQ3JlYXRvcihyZXMuZGF0YSkpKVxuICAuY2F0Y2goKGVycm9yKSA9PiB0b2FzdC5lcnJvcihlcnJvckZvcm1hdHRlcihlcnJvcikpKVxuXG5leHBvcnQgY29uc3QgdXBkYXRlQ29tbWVudENpdmlsaXR5ID0gKGRhdGEpID0+IChkaXNwYXRjaCkgPT4gQ29tbWVudHNBcGlVdGlsLnVwZGF0ZUNvbW1lbnRDaXZpbGl0eShkYXRhKVxuICAudGhlbigocmVzKSA9PiBkaXNwYXRjaCh1cGRhdGVDb21tZW50Q2l2aWxpdHlBY3Rpb25DcmVhdG9yKHJlcy5kYXRhKSkpXG4gIC5jYXRjaCgoZXJyb3IpID0+IHRvYXN0LmVycm9yKGVycm9yRm9ybWF0dGVyKGVycm9yKSkpXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY3JlYXRlQ29tbWVudCxcbiAgZ2V0QWxsQ29tbWVudHMsXG4gIGdldENvbW1lbnQsXG4gIHVwZGF0ZUNvbW1lbnRMaWtlcyxcbiAgdXBkYXRlQ29tbWVudENpdmlsaXR5LFxuICBnZXRBbGxDb21tZW50UmVwbGllcyxcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbi8vIGFjdGlvbiBjcmVhdG9yIGlzIGp1c3QgYSBmdW5jdGlvbiB0aGF0IGRpc3BhdGNoZXMgYW4gYWN0aW9uXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5J1xuaW1wb3J0IHsgY2xvc2VNb2RhbCB9IGZyb20gJy4uL3VpL2luZGV4J1xuaW1wb3J0IHsgQUREX1NVQl9UT1BJQywgR0VUX0FMTF9TVUJfVE9QSUNTIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvc3VidG9waWNzL3N1YlRvcGljc1JlZHVjZXInXG5pbXBvcnQgKiBhcyBTdWJUb3BpY3NBcGlVdGlsIGZyb20gJy4uLy4uLy4uL2FwaS92MS9zdWJ0b3BpY3Mvc3VidG9waWNzX2FwaV91dGlsJ1xuaW1wb3J0IHsgZXJyb3JGb3JtYXR0ZXIgfSBmcm9tICcuLi8uLi91dGlscy9lcnJvckZvcm1hdHRlcidcblxuY29uc3QgZ2V0QWxsVG9waWNzQWN0aW9uQ3JlYXRvciA9IChzdWJ0b3BpY3MpID0+ICh7XG4gIHR5cGU6IEdFVF9BTExfU1VCX1RPUElDUyxcbiAgcGF5bG9hZDogc3VidG9waWNzLFxuXG59KVxuXG5jb25zdCBhZGRUb3BpY0FjdGlvbkNyZWF0b3IgPSAoc3ViVG9waWNEYXRhKSA9PiAoe1xuICB0eXBlOiBBRERfU1VCX1RPUElDLFxuICBwYXlsb2FkOiBzdWJUb3BpY0RhdGEsXG59KVxuXG5leHBvcnQgY29uc3QgY3JlYXRlU3ViVG9waWMgPSAodG9waWNEYXRhKSA9PiAoZGlzcGF0Y2gpID0+IFN1YlRvcGljc0FwaVV0aWwuY3JlYXRlU3ViVG9waWModG9waWNEYXRhKVxuICAudGhlbigocmVzKSA9PiBkaXNwYXRjaChhZGRUb3BpY0FjdGlvbkNyZWF0b3IocmVzLmRhdGEpKSlcbiAgLnRoZW4oKCkgPT4gZGlzcGF0Y2goY2xvc2VNb2RhbCgpKSlcbiAgLmNhdGNoKChlcnJvcikgPT4gdG9hc3QuZXJyb3IoZXJyb3JGb3JtYXR0ZXIoZXJyb3IpKSlcblxuZXhwb3J0IGNvbnN0IGdldEFsbFN1YlRvcGljcyA9ICh0b3BpY0lkKSA9PiAoZGlzcGF0Y2gpID0+IFN1YlRvcGljc0FwaVV0aWwuZ2V0QWxsU3ViVG9waWNzKHRvcGljSWQpXG4gIC50aGVuKChyZXMpID0+IGRpc3BhdGNoKGdldEFsbFRvcGljc0FjdGlvbkNyZWF0b3IocmVzLmRhdGEpKSlcbiAgLmNhdGNoKChlcnJvcikgPT4gdG9hc3QuZXJyb3IoZXJyb3JGb3JtYXR0ZXIoZXJyb3IpKSlcblxuZXhwb3J0IGNvbnN0IGdldFN1YlRvcGljID0gKHN1YlRvcGljSWQpID0+IChkaXNwYXRjaCkgPT4gU3ViVG9waWNzQXBpVXRpbC5nZXRTdWJUb3BpYyhzdWJUb3BpY0lkKVxuICAudGhlbigocmVzKSA9PiBkaXNwYXRjaChhZGRUb3BpY0FjdGlvbkNyZWF0b3IocmVzLmRhdGEpKSlcbiAgLmNhdGNoKChlcnJvcikgPT4gdG9hc3QuZXJyb3IoZXJyb3JGb3JtYXR0ZXIoZXJyb3IpKSlcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjcmVhdGVTdWJUb3BpYyxcbiAgZ2V0QWxsU3ViVG9waWNzLFxuICBnZXRTdWJUb3BpYyxcbn1cbiIsIi8vIGFjdGlvbiBjcmVhdG9yIGlzIGp1c3QgYSBmdW5jdGlvbiB0aGF0IGRpc3BhdGNoZXMgYW4gYWN0aW9uXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5J1xuaW1wb3J0IHsgY2xvc2VNb2RhbCB9IGZyb20gJy4uL3VpL2luZGV4J1xuaW1wb3J0IHsgQUREX1RPUElDLCBHRVRfQUxMX1RPUElDUywgVVBEQVRFX1RPUElDX0xJS0VTIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvdG9waWNzUmVkdWNlcidcbmltcG9ydCAqIGFzIFRvcGljc0FwaVV0aWwgZnJvbSAnLi4vLi4vLi4vYXBpL3YxL3RvcGljcy90b3BpY3NfYXBpX3V0aWwnXG5pbXBvcnQgeyBlcnJvckZvcm1hdHRlciB9IGZyb20gJy4uLy4uL3V0aWxzL2Vycm9yRm9ybWF0dGVyJ1xuXG5jb25zdCBnZXRBbGxUb3BpY3NBY3Rpb25DcmVhdG9yID0gKHRvcGljcykgPT4gKHtcbiAgdHlwZTogR0VUX0FMTF9UT1BJQ1MsXG4gIHBheWxvYWQ6IHRvcGljcyxcblxufSlcblxuY29uc3QgYWRkVG9waWNBY3Rpb25DcmVhdG9yID0gKHRvcGljRGF0YSkgPT4gKHtcbiAgdHlwZTogQUREX1RPUElDLFxuICBwYXlsb2FkOiB0b3BpY0RhdGEsXG59KVxuXG5jb25zdCB1cGRhdGVUb3BpY0xpa2VzQWN0aW9uQ3JlYXRvciA9IChkYXRhKSA9PiAoe1xuICB0eXBlOiBVUERBVEVfVE9QSUNfTElLRVMsXG4gIHBheWxvYWQ6IGRhdGEsXG59KVxuXG5leHBvcnQgY29uc3QgY3JlYXRlVG9waWMgPSAodG9waWNEYXRhKSA9PiAoZGlzcGF0Y2gpID0+IFRvcGljc0FwaVV0aWwuY3JlYXRlVG9waWModG9waWNEYXRhKVxuICAudGhlbigocmVzKSA9PiBkaXNwYXRjaChhZGRUb3BpY0FjdGlvbkNyZWF0b3IocmVzLmRhdGEpKSlcbiAgLmZpbmFsbHkoKCkgPT4gZGlzcGF0Y2goY2xvc2VNb2RhbCgpKSlcbiAgLmNhdGNoKChlcnJvcikgPT4gdG9hc3QuZXJyb3IoZXJyb3JGb3JtYXR0ZXIoZXJyb3IpKSlcblxuZXhwb3J0IGNvbnN0IGdldEFsbFRvcGljcyA9ICgpID0+IChkaXNwYXRjaCkgPT4gVG9waWNzQXBpVXRpbC5nZXRBbGxUb3BpY3MoKVxuICAudGhlbigocmVzKSA9PiBkaXNwYXRjaChnZXRBbGxUb3BpY3NBY3Rpb25DcmVhdG9yKHJlcy5kYXRhKSkpXG4gIC5jYXRjaCgoZXJyb3IpID0+IHRvYXN0LmVycm9yKGVycm9yRm9ybWF0dGVyKGVycm9yKSkpXG5cbmV4cG9ydCBjb25zdCBnZXRUb3BpYyA9ICh0b3BpY0lkLCB1c2VySWQpID0+IChkaXNwYXRjaCkgPT4gVG9waWNzQXBpVXRpbC5nZXRUb3BpYyh0b3BpY0lkLCB1c2VySWQpXG4gIC50aGVuKChyZXMpID0+IGRpc3BhdGNoKGFkZFRvcGljQWN0aW9uQ3JlYXRvcihyZXMuZGF0YSkpKVxuICAuY2F0Y2goKGVycm9yKSA9PiB0b2FzdC5lcnJvcihlcnJvckZvcm1hdHRlcihlcnJvcikpKVxuXG5leHBvcnQgY29uc3QgdXBkYXRlVG9waWNMaWtlcyA9IChkYXRhKSA9PiAoZGlzcGF0Y2gpID0+IFRvcGljc0FwaVV0aWwudXBkYXRlVG9waWNMaWtlcyhkYXRhKVxuICAudGhlbigocmVzKSA9PiBkaXNwYXRjaCh1cGRhdGVUb3BpY0xpa2VzQWN0aW9uQ3JlYXRvcihyZXMuZGF0YSkpKVxuICAuY2F0Y2goKGVycm9yKSA9PiB0b2FzdC5lcnJvcihlcnJvckZvcm1hdHRlcihlcnJvcikpKVxuXG5jb25zdCB1cGxvYWRUb3BpY01lZGlhID0gKGRhdGEsIGZpbGVUeXBlLCBmaWxlRm9ybWF0LCB0b3BpY0RhdGEpID0+IChkaXNwYXRjaCkgPT4gVG9waWNzQXBpVXRpbFxuICAudXBsb2FkVG9waWNNZWRpYShkYXRhLCBmaWxlVHlwZSwgZmlsZUZvcm1hdClcbiAgLnRoZW4oKHJlcykgPT4ge1xuICAgIGNyZWF0ZVRvcGljKHsgLi4udG9waWNEYXRhLCAuLi5yZXMuZGF0YSB9KShkaXNwYXRjaClcbiAgfSlcbiAgLmNhdGNoKChlcnJvcikgPT4gdG9hc3QuZXJyb3IoZXJyb3JGb3JtYXR0ZXIoZXJyb3IpKSlcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjcmVhdGVUb3BpYyxcbiAgZ2V0QWxsVG9waWNzLFxuICBnZXRUb3BpYyxcbiAgdXBkYXRlVG9waWNMaWtlcyxcbiAgdXBsb2FkVG9waWNNZWRpYSxcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknXG5cbmltcG9ydCB7IGNsb3NlTW9kYWwgfSBmcm9tICcuLi91aS9pbmRleCdcbmltcG9ydCB7XG4gIEFERF9UUklCVU5BTF9DT01NRU5ULCBHRVRfQUxMX1RSSUJVTkFMX0NPTU1FTlRTLCBVUERBVEVfVFJJQlVOQUxfQ09NTUVOVF9MSUtFUywgVVBEQVRFX1RSSUJVTkFMX0NPTU1FTlRfQ0lWSUxJVFksIEdFVF9BTExfVFJJQlVOQUxfQ09NTUVOVFNfQkFUQ0gsXG59IGZyb20gJy4uLy4uL3JlZHVjZXJzL3RyaWJ1bmFsX2NvbW1lbnRzL3RyaWJ1bmFsQ29tbWVudHNSZWR1Y2VyJ1xuaW1wb3J0ICogYXMgVHJpYnVuYWxDb21tZW50c0FwaVV0aWwgZnJvbSAnLi4vLi4vLi4vYXBpL3YxL3RyaWJ1bmFsX2NvbW1lbnRzL3RyaWJ1bmFsX2NvbW1lbnRzX2FwaV91dGlsJ1xuaW1wb3J0IHsgZXJyb3JGb3JtYXR0ZXIgfSBmcm9tICcuLi8uLi91dGlscy9lcnJvckZvcm1hdHRlcidcblxuY29uc3QgZ2V0QWxsQ29tbWVudHNBY3Rpb25DcmVhdG9yID0gKGNvbW1lbnRzLCBjb21tZW50VHlwZSkgPT4gKHtcbiAgdHlwZTogR0VUX0FMTF9UUklCVU5BTF9DT01NRU5UUyxcbiAgcGF5bG9hZDogeyBjb21tZW50cywgY29tbWVudFR5cGUgfSxcbn0pXG5cbmNvbnN0IGdldEFsbENvbW1lbnRzQmF0Y2hBY3Rpb25DcmVhdG9yID0gKHBheWxvYWQpID0+ICh7XG4gIHR5cGU6IEdFVF9BTExfVFJJQlVOQUxfQ09NTUVOVFNfQkFUQ0gsXG4gIHBheWxvYWQsXG59KVxuXG5jb25zdCBhZGRDb21tZW50QWN0aW9uQ3JlYXRvciA9IChzdWJUb3BpY0RhdGEpID0+ICh7XG4gIHR5cGU6IEFERF9UUklCVU5BTF9DT01NRU5ULFxuICBwYXlsb2FkOiBzdWJUb3BpY0RhdGEsXG59KVxuXG5jb25zdCB1cGRhdGVDb21tZW50QWN0aW9uQ3JlYXRvciA9IChkYXRhKSA9PiAoe1xuICB0eXBlOiBVUERBVEVfVFJJQlVOQUxfQ09NTUVOVF9MSUtFUyxcbiAgcGF5bG9hZDogZGF0YSxcbn0pXG5cbmNvbnN0IHVwZGF0ZUNvbW1lbnRDaXZpbGl0eUFjdGlvbkNyZWF0b3IgPSAoZGF0YSkgPT4gKHtcbiAgdHlwZTogVVBEQVRFX1RSSUJVTkFMX0NPTU1FTlRfQ0lWSUxJVFksXG4gIHBheWxvYWQ6IGRhdGEsXG59KVxuXG5leHBvcnQgY29uc3QgY3JlYXRlVHJpYnVuYWxDb21tZW50ID0gKGNvbW1lbnREYXRhKSA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgVHJpYnVuYWxDb21tZW50c0FwaVV0aWwuY3JlYXRlVHJpYnVuYWxDb21tZW50KGNvbW1lbnREYXRhKVxuICAgIC50aGVuKChyZXMpID0+IGRpc3BhdGNoKGFkZENvbW1lbnRBY3Rpb25DcmVhdG9yKHJlcy5kYXRhKSkpXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgdG9hc3Quc3VjY2VzcygnU2F2ZWQgQ29tbWVudCcsIHsgZGVsYXk6IDEwMDAgfSlcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiB0b2FzdC5lcnJvcihgUHJvYmxlbSBTYXZpbmcgQ29tbWVudCBcXG4gJHtlcnJ9YCwgeyBhdXRvQ2xvc2U6IDI1MDAgfSkpXG4gICAgLmZpbmFsbHkoKCkgPT4gZGlzcGF0Y2goY2xvc2VNb2RhbCgpKSlcbn1cblxuZXhwb3J0IGNvbnN0IGdldEFsbFRyaWJ1bmFsQ29tbWVudHMgPSAoY29udGVudElkLCBjb21tZW50VHlwZSkgPT4gKGRpc3BhdGNoKSA9PiBUcmlidW5hbENvbW1lbnRzQXBpVXRpbC5nZXRBbGxUcmlidW5hbENvbW1lbnRzKGNvbnRlbnRJZCwgY29tbWVudFR5cGUpXG4gIC50aGVuKChyZXMpID0+IGRpc3BhdGNoKGdldEFsbENvbW1lbnRzQWN0aW9uQ3JlYXRvcihyZXMuZGF0YSwgY29tbWVudFR5cGUpKSlcbiAgLmNhdGNoKChlcnJvcikgPT4gdG9hc3QuZXJyb3IoZXJyb3JGb3JtYXR0ZXIoZXJyb3IpKSlcblxuZXhwb3J0IGNvbnN0IGdldEFsbFRyaWJ1bmFsQ29tbWVudHNCYXRjaCA9IChjb250ZW50SWQpID0+IChkaXNwYXRjaCkgPT4gVHJpYnVuYWxDb21tZW50c0FwaVV0aWwuZ2V0QWxsVHJpYnVuYWxDb21tZW50c0JhdGNoKGNvbnRlbnRJZClcbiAgLnRoZW4oKHJlcykgPT4gZGlzcGF0Y2goZ2V0QWxsQ29tbWVudHNCYXRjaEFjdGlvbkNyZWF0b3IocmVzLmRhdGEpKSlcbiAgLmNhdGNoKChlcnJvcikgPT4gdG9hc3QuZXJyb3IoZXJyb3JGb3JtYXR0ZXIoZXJyb3IpKSlcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVRyaWJ1bmFsQ29tbWVudExpa2VzID0gKGRhdGEpID0+IChkaXNwYXRjaCkgPT4gVHJpYnVuYWxDb21tZW50c0FwaVV0aWwudXBkYXRlVHJpYnVuYWxDb21tZW50TGlrZXMoZGF0YSlcbiAgLnRoZW4oKHJlcykgPT4gZGlzcGF0Y2godXBkYXRlQ29tbWVudEFjdGlvbkNyZWF0b3IocmVzLmRhdGEpKSlcbiAgLmNhdGNoKChlcnJvcikgPT4gdG9hc3QuZXJyb3IoZXJyb3IpKVxuXG5leHBvcnQgY29uc3QgdXBkYXRlVHJpYnVuYWxDb21tZW50Q2l2aWxpdHkgPSAoZGF0YSkgPT4gKGRpc3BhdGNoKSA9PiBUcmlidW5hbENvbW1lbnRzQXBpVXRpbC51cGRhdGVUcmlidW5hbENvbW1lbnRDaXZpbGl0eShkYXRhKVxuICAudGhlbigocmVzKSA9PiBkaXNwYXRjaCh1cGRhdGVDb21tZW50Q2l2aWxpdHlBY3Rpb25DcmVhdG9yKHJlcy5kYXRhKSkpXG4gIC5jYXRjaCgoZXJyb3IpID0+IHRvYXN0LmVycm9yKGVycm9yKSlcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjcmVhdGVUcmlidW5hbENvbW1lbnQsXG4gIGdldEFsbFRyaWJ1bmFsQ29tbWVudHMsXG4gIGdldEFsbFRyaWJ1bmFsQ29tbWVudHNCYXRjaCxcbiAgdXBkYXRlVHJpYnVuYWxDb21tZW50Q2l2aWxpdHksXG4gIC8vIGdldEFsbENvbW1lbnRzLFxuICB1cGRhdGVUcmlidW5hbENvbW1lbnRMaWtlcyxcbiAgLy8gdXBkYXRlQ29tbWVudENpdmlsaXR5LFxufVxuIl0sIm5hbWVzIjpbImF4aW9zIiwidXNlU2Vzc2lvblR5cGUiLCJCQUNLRU5EX0RFViIsIlVQTE9BRF9TRVJWSUNFIiwiY3JlYXRlQ29tbWVudCIsInN1YlRvcGljRGF0YSIsInBvc3QiLCJnZXRBbGxDb21tZW50cyIsInN1YnRvcGljSWQiLCJ1c2VySWQiLCJnZXQiLCJnZXRBbGxDb21tZW50UmVwbGllcyIsImNvbW1lbnRJZCIsImdldENvbW1lbnQiLCJ1cGRhdGVDb21tZW50TGlrZXMiLCJjb21tZW50RGF0YSIsInB1dCIsInVwZGF0ZUNvbW1lbnRDaXZpbGl0eSIsImNoZWNrVG94aWNpdHkiLCJjb21tZW50VGV4dERhdGEiLCJjcmVhdGVTdWJUb3BpYyIsImdldEFsbFN1YlRvcGljcyIsInRvcGljSWQiLCJnZXRTdWJUb3BpYyIsInN1YlRvcGljSWQiLCJjcmVhdGVUb3BpYyIsInRvcGljRGF0YSIsImdldEFsbFRvcGljcyIsImdldFRvcGljIiwidXBkYXRlVG9waWNMaWtlcyIsInVwbG9hZFRvcGljTWVkaWEiLCJkYXRhIiwiZmlsZVR5cGUiLCJmaWxlRm9ybWF0IiwiZ2V0TGlua01ldGFEYXRhIiwidXJsIiwiY3JlYXRlVHJpYnVuYWxDb21tZW50IiwiY29tbWVudCIsImdldEFsbFRyaWJ1bmFsQ29tbWVudHMiLCJjb250ZW50SWQiLCJjb21tZW50VHlwZSIsImdldEFsbFRyaWJ1bmFsQ29tbWVudHNCYXRjaCIsInVwZGF0ZVRyaWJ1bmFsQ29tbWVudExpa2VzIiwidXBkYXRlVHJpYnVuYWxDb21tZW50Q2l2aWxpdHkiLCJSZWFjdCIsIlZlcmlmaWVkU3ZnIiwiVXNlckljb24iLCJIZWFkZXIiLCJUaGVtZVRvb2x0aXAiLCJ1c2VPcGVuRGlkRXhwbG9yZXIiLCJVc2VybmFtZUFuZFRhZyIsIlVzZXJJbmZvSGVhZGVyIiwidGltZSIsInVzZXJuYW1lIiwiaWNvblNyYyIsInRvcGljQ3JlYXRvcklzRGlkVXNlciIsInVzZXJUYWciLCJ1c2VybmFtZURpc3BsYXkiLCJzdGFydHNXaXRoIiwic3Vic3RyaW5nIiwib3BlbkRpZEV4cGxvcmVyIiwic3R5bGVkIiwiVGh1bWIiLCJVc2VybmFtZUNvbnRhaW5lciIsIkxpbmtNZXRhRGF0YSIsIkRpc3BsYXlNZWRpYSIsImltZ0ZpbGUiLCJ2aWRlb0ZpbGUiLCJzZXRNZXRhRGF0YSIsImNvbnRlbnRVcmwiLCJ1c2VFZmZlY3QiLCJGbGV4RGl2IiwiT0dVcmwiLCJPR1RpdGxlIiwiT0dEZXNjcmlwdGlvbiIsIk9HSW1hZ2UiLCJMaW5rV3JhcHBlciIsIkNvbnRhaW5lciIsIkxpbmUiLCJJc0xvYWRpbmdIT0MiLCJ1c2VHZXRMaW5rTWV0YURhdGFFZmZlY3QiLCJ0b3BpYyIsInNldElzTG9hZGluZyIsIm1ldGFEYXRhIiwib2dVcmwiLCJvZ1RpdGxlIiwib2dTaXRlTmFtZSIsIm9nSW1hZ2UiLCJmYXZpY29uIiwib2dEZXNjcmlwdGlvbiIsInJlcXVlc3RVcmwiLCJ1c2VTdGF0ZSIsInNldERhdGFGb3JQYXJlbnRDb21wb25lbnQiLCJnZXRNZXRhRGF0YSIsInVzZU1lbW8iLCJ1c2VMb2NhdGlvbiIsInBhdGhuYW1lIiwiaXNPblRyaWJ1bmFsUGFnZSIsImluY2x1ZGVzIiwicmVmIiwiaHRtbCIsImN1cnJlbnQiLCJpbm5lckhUTUwiLCJ0b2FzdCIsImNsb3NlTW9kYWwiLCJBRERfQ09NTUVOVCIsIkdFVF9BTExfQ09NTUVOVFMiLCJVUERBVEVfQ09NTUVOVF9MSUtFUyIsIlVQREFURV9DT01NRU5UX0NJVklMSVRZIiwiQUREX1JFUE9SVEVEX0NPTU1FTlQiLCJHRVRfQUxMX0NPTU1FTlRfUkVQTElFUyIsIkNvbW1lbnRzQXBpVXRpbCIsImVycm9yRm9ybWF0dGVyIiwiZ2V0QWxsQ29tbWVudHNBY3Rpb25DcmVhdG9yIiwic3VidG9waWNzIiwidHlwZSIsInBheWxvYWQiLCJnZXRBbGxDb21tZW50UmVwbGllc0FjdGlvbkNyZWF0b3IiLCJjb21tZW50V2l0aFJlcGxpZXMiLCJhZGRDb21tZW50QWN0aW9uQ3JlYXRvciIsImFkZFJlcG9ydGVkQ29tbWVudEFjdGlvbkNyZWF0b3IiLCJ1cGRhdGVDb21tZW50QWN0aW9uQ3JlYXRvciIsInVwZGF0ZUNvbW1lbnRDaXZpbGl0eUFjdGlvbkNyZWF0b3IiLCJkaXNwYXRjaCIsInRoZW4iLCJyZXMiLCJzdWNjZXNzIiwiZGVsYXkiLCJlcnJvciIsIkFERF9TVUJfVE9QSUMiLCJHRVRfQUxMX1NVQl9UT1BJQ1MiLCJTdWJUb3BpY3NBcGlVdGlsIiwiZ2V0QWxsVG9waWNzQWN0aW9uQ3JlYXRvciIsImFkZFRvcGljQWN0aW9uQ3JlYXRvciIsIkFERF9UT1BJQyIsIkdFVF9BTExfVE9QSUNTIiwiVVBEQVRFX1RPUElDX0xJS0VTIiwiVG9waWNzQXBpVXRpbCIsInRvcGljcyIsInVwZGF0ZVRvcGljTGlrZXNBY3Rpb25DcmVhdG9yIiwiQUREX1RSSUJVTkFMX0NPTU1FTlQiLCJHRVRfQUxMX1RSSUJVTkFMX0NPTU1FTlRTIiwiVVBEQVRFX1RSSUJVTkFMX0NPTU1FTlRfTElLRVMiLCJVUERBVEVfVFJJQlVOQUxfQ09NTUVOVF9DSVZJTElUWSIsIkdFVF9BTExfVFJJQlVOQUxfQ09NTUVOVFNfQkFUQ0giLCJUcmlidW5hbENvbW1lbnRzQXBpVXRpbCIsImNvbW1lbnRzIiwiZ2V0QWxsQ29tbWVudHNCYXRjaEFjdGlvbkNyZWF0b3IiLCJlcnIiLCJhdXRvQ2xvc2UiXSwic291cmNlUm9vdCI6IiJ9