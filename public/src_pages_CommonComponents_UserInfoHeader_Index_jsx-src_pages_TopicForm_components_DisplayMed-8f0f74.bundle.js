"use strict";
(self["webpackChunkcivil"] = self["webpackChunkcivil"] || []).push([["src_pages_CommonComponents_UserInfoHeader_Index_jsx-src_pages_TopicForm_components_DisplayMed-8f0f74"],{

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

/***/ "./src/pages/CommonComponents/Line/index.js":
/*!**************************************************!*\
  !*** ./src/pages/CommonComponents/Line/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Line": () => (/* binding */ Line)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _templateObject;
/* eslint-disable import/prefer-default-export */

var Line = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('hr')(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([" \n  width: 90%;\n  margin: 2em 1.3em;\n  background-color: rgb(48,48,50);\n  height: .5px;\n  border: none;\n"])));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX0NvbW1vbkNvbXBvbmVudHNfVXNlckluZm9IZWFkZXJfSW5kZXhfanN4LXNyY19wYWdlc19Ub3BpY0Zvcm1fY29tcG9uZW50c19EaXNwbGF5TWVkLThmMGY3NC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDbUQ7QUFFTDtBQUVoRSxJQUFNSSxhQUFhLEdBQUcsU0FBaEJBLGFBQWEsQ0FBSUMsWUFBWTtFQUFBLE9BQUtMLGlEQUFVLFdBQUlFLDZEQUFXLGdCQUFhRyxZQUFZLENBQUM7QUFBQTtBQUUzRixJQUFNRSxjQUFjLEdBQUcsU0FBakJBLGNBQWMsQ0FBSUMsVUFBVSxFQUFFQyxNQUFNLEVBQUs7RUFDcEQsT0FBT1QsZ0RBQVMsV0FBSUUsNkRBQVcsa0NBQXdCTSxVQUFVLHFCQUFXQyxNQUFNLEVBQUc7QUFDdkYsQ0FBQztBQUVNLElBQU1FLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBb0IsQ0FBSUMsU0FBUztFQUFBLE9BQUtaLGdEQUFTLFdBQUlFLDZEQUFXLCtCQUFxQlUsU0FBUyxFQUFHO0FBQUE7QUFFckcsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQVUsQ0FBSUQsU0FBUztFQUFBLE9BQUtaLGdEQUFTLFdBQUlFLDZEQUFXLHVCQUFhVSxTQUFTLEVBQUc7QUFBQTtBQUVuRixJQUFNRSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQWtCLENBQUlDLFdBQVc7RUFBQSxPQUFLZixnREFBUyxXQUFJRSw2REFBVyxzQkFBbUJhLFdBQVcsQ0FBQztBQUFBO0FBRW5HLElBQU1FLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBcUIsQ0FBSUYsV0FBVztFQUFBLE9BQUtmLGdEQUFTLFdBQUlFLDZEQUFXLHlCQUFzQmEsV0FBVyxDQUFDO0FBQUE7QUFFekcsSUFBTUcsYUFBYSxHQUFHLFNBQWhCQSxhQUFhLENBQUlDLGVBQWU7RUFBQSxPQUFLbkIsaURBQVUsV0FBSUcsZ0VBQWMseUJBQXNCZ0IsZUFBZSxD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Q0FBQyxDQUN2SDZGLElBQUksQ0FBQyxVQUFDQyxHQUFHO01BQUEsT0FBS0YsUUFBUSxDQUFDRiwwQkFBMEIsQ0FBQ0ksR0FBRyxDQUFDOUYsSUFBSSxDQUFDLENBQUM7SUFBQSxFQUFDLFNBQ3hELENBQUMsVUFBQ2lHLEtBQUs7TUFBQSxPQUFLekIsdURBQVcsQ0FBQ3lCLEtBQUssQ0FBQztJQUFBLEVBQUM7RUFBQTtBQUFBO0FBRWhDLElBQU1yRiw2QkFBNkIsR0FBRyxTQUFoQ0EsNkJBQTZCLENBQUlaLElBQUk7RUFBQSxPQUFLLFVBQUM0RixRQUFRO0lBQUEsT0FBS29CLCtHQUFxRCxDQUFDaEgsSUFBSSxDQUFDLENBQzdINkYsSUFBSSxDQUFDLFVBQUNDLEdBQUc7TUFBQSxPQUFLRixRQUFRLENBQUNELGtDQUFrQyxDQUFDRyxHQUFHLENBQUM5RixJQUFJLENBQUMsQ0FBQztJQUFBLEVBQUMsU0FDaEUsQ0FBQyxVQUFDaUcsS0FBSztNQUFBLE9BQUt6Qix1REFBVyxDQUFDeUIsS0FBSyxDQUFDO0lBQUEsRUFBQztFQUFBO0FBQUE7QUFFdkMsaUVBQWU7RUFDYjVGLHFCQUFxQixFQUFyQkEscUJBQXFCO0VBQ3JCRSxzQkFBc0IsRUFBdEJBLHNCQUFzQjtFQUN0QkcsMkJBQTJCLEVBQTNCQSwyQkFBMkI7RUFDM0JFLDZCQUE2QixFQUE3QkEsNkJBQTZCO0VBQzdCO0VBQ0FELDBCQUEwQixFQUExQkE7RUFDQTtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9hcGkvdjEvY29tbWVudHMvY29tbWVudHNfYXBpX3V0aWwuanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvYXBpL3YxL3RvcGljcy90b3BpY3NfYXBpX3V0aWwuanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvYXBpL3YxL3RyaWJ1bmFsX2NvbW1lbnRzL3RyaWJ1bmFsX2NvbW1lbnRzX2FwaV91dGlsLmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL0NvbW1vbkNvbXBvbmVudHMvTGluZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9Db21tb25Db21wb25lbnRzL1VzZXJJbmZvSGVhZGVyL0luZGV4LmpzeCIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9Db21tb25Db21wb25lbnRzL1VzZXJJbmZvSGVhZGVyL1N0eWxlL2luZGV4LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL1RvcGljRm9ybS9jb21wb25lbnRzL0Rpc3BsYXlNZWRpYS9JbmRleC5qc3giLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvVG9waWNGb3JtL2NvbXBvbmVudHMvTGlua01ldGFEYXRhL0luZGV4LmpzeCIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9Ub3BpY0Zvcm0vY29tcG9uZW50cy9MaW5rTWV0YURhdGEvU3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvVG9waWNGb3JtL2NvbXBvbmVudHMvTGlua01ldGFEYXRhL2hvb2tzL3VzZUdldExpbmtNZXRhRGF0YUVmZmVjdC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9ob29rcy9yb3V0aW5nL3VzZURldGVjdEN1cnJlbnRQYWdlLmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL2hvb2tzL3VzZVNldElubmVySHRtbC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9yZWR1eC9hY3Rpb25zL2NvbW1lbnRzL2luZGV4LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3JlZHV4L2FjdGlvbnMvdG9waWNzL2luZGV4LmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3JlZHV4L2FjdGlvbnMvdHJpYnVuYWxfY29tbWVudHMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHVzZVNlc3Npb25UeXBlIGZyb20gJy4uLy4uLy4uL3BhZ2VzL2hvb2tzL3Blcm1pc3Npb25zL3VzZVNlc3Npb25UeXBlJ1xuXG5pbXBvcnQgeyBCQUNLRU5EX0RFViwgVVBMT0FEX1NFUlZJQ0UgfSBmcm9tICcuLi8uLi9lbmRwb2ludHMvZW5kcG9pbnRzJ1xuXG5leHBvcnQgY29uc3QgY3JlYXRlQ29tbWVudCA9IChzdWJUb3BpY0RhdGEpID0+IGF4aW9zLnBvc3QoYCR7QkFDS0VORF9ERVZ9L2NvbW1lbnRzYCwgc3ViVG9waWNEYXRhKVxuXG5leHBvcnQgY29uc3QgZ2V0QWxsQ29tbWVudHMgPSAoc3VidG9waWNJZCwgdXNlcklkKSA9PiB7XG4gIHJldHVybiBheGlvcy5nZXQoYCR7QkFDS0VORF9ERVZ9L2NvbW1lbnRzP3N1YnRvcGljSWQ9JHtzdWJ0b3BpY0lkfSZ1c2VySWQ9JHt1c2VySWR9YClcbn1cblxuZXhwb3J0IGNvbnN0IGdldEFsbENvbW1lbnRSZXBsaWVzID0gKGNvbW1lbnRJZCkgPT4gYXhpb3MuZ2V0KGAke0JBQ0tFTkRfREVWfS9jb21tZW50cy9yZXBsaWVzLyR7Y29tbWVudElkfWApXG5cbmV4cG9ydCBjb25zdCBnZXRDb21tZW50ID0gKGNvbW1lbnRJZCkgPT4gYXhpb3MuZ2V0KGAke0JBQ0tFTkRfREVWfS9jb21tZW50cy8ke2NvbW1lbnRJZH1gKVxuXG5leHBvcnQgY29uc3QgdXBkYXRlQ29tbWVudExpa2VzID0gKGNvbW1lbnREYXRhKSA9PiBheGlvcy5wdXQoYCR7QkFDS0VORF9ERVZ9L2NvbW1lbnRzL2xpa2VzYCwgY29tbWVudERhdGEpXG5cbmV4cG9ydCBjb25zdCB1cGRhdGVDb21tZW50Q2l2aWxpdHkgPSAoY29tbWVudERhdGEpID0+IGF4aW9zLnB1dChgJHtCQUNLRU5EX0RFVn0vY29tbWVudHMvY2l2aWxpdHlgLCBjb21tZW50RGF0YSlcblxuZXhwb3J0IGNvbnN0IGNoZWNrVG94aWNpdHkgPSAoY29tbWVudFRleHREYXRhKSA9PiBheGlvcy5wb3N0KGAke1VQTE9BRF9TRVJWSUNFfS9jb21tZW50cy90b3hpY2l0eWAsIGNvbW1lbnRUZXh0RGF0YSlcblxuLy8gZXhwb3J0IGNvbnN0IGdldFN1YlRvcGljID0gKHN1YlRvcGljSWQpID0+IGF4aW9zLmdldChgJHtCQUNLRU5EX0RFVn0vc3VidG9waWNzLyR7c3ViVG9waWNJZH1gKVxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgQkFDS0VORF9ERVYsIFVQTE9BRF9TRVJWSUNFIH0gZnJvbSAnLi4vLi4vZW5kcG9pbnRzL2VuZHBvaW50cydcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVRvcGljID0gKHRvcGljRGF0YSkgPT4gYXhpb3MucG9zdChgJHtCQUNLRU5EX0RFVn0vdG9waWNzYCwgdG9waWNEYXRhKVxuXG5leHBvcnQgY29uc3QgZ2V0QWxsVG9waWNzID0gKCkgPT4gYXhpb3MuZ2V0KGAke0JBQ0tFTkRfREVWfS90b3BpY3NgKVxuXG5leHBvcnQgY29uc3QgZ2V0VG9waWMgPSAodG9waWNJZCwgdXNlcklkKSA9PiBheGlvcy5nZXQoYCR7QkFDS0VORF9ERVZ9L3RvcGljcy8ke3RvcGljSWR9LyR7dXNlcklkfWApXG5cbmV4cG9ydCBjb25zdCB1cGRhdGVUb3BpY0xpa2VzID0gKHRvcGljRGF0YSkgPT4gYXhpb3MucHV0KGAke0JBQ0tFTkRfREVWfS90b3BpY3NgLCB0b3BpY0RhdGEpXG5cbmV4cG9ydCBjb25zdCB1cGxvYWRUb3BpY01lZGlhID0gKGRhdGEsIGZpbGVUeXBlLCBmaWxlRm9ybWF0KSA9PiBheGlvcy5wb3N0KGAke1VQTE9BRF9TRVJWSUNFfS90b3BpY3MvdXBsb2FkLW1lZGlhP2ZpbGVUeXBlPSR7ZmlsZVR5cGV9JmZpbGVGb3JtYXQ9JHtmaWxlRm9ybWF0fWAsIGRhdGEpXG5cbmV4cG9ydCBjb25zdCBnZXRMaW5rTWV0YURhdGEgPSAodXJsKSA9PiBheGlvcy5nZXQoYCR7VVBMT0FEX1NFUlZJQ0V9L3RvcGljcy9saW5rLW1ldGEtZGF0YT91cmw9JHt1cmx9YClcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuaW1wb3J0IHsgQkFDS0VORF9ERVYgfSBmcm9tICcuLi8uLi9lbmRwb2ludHMvZW5kcG9pbnRzJ1xuXG5leHBvcnQgY29uc3QgY3JlYXRlVHJpYnVuYWxDb21tZW50ID0gKGNvbW1lbnQpID0+IGF4aW9zLnBvc3QoYCR7QkFDS0VORF9ERVZ9L3RyaWJ1bmFsLWNvbW1lbnRzYCwgY29tbWVudClcblxuZXhwb3J0IGNvbnN0IGdldEFsbFRyaWJ1bmFsQ29tbWVudHMgPSAoY29udGVudElkLCBjb21tZW50VHlwZSkgPT4gYXhpb3MuZ2V0KGAke0JBQ0tFTkRfREVWfS90cmlidW5hbC1jb21tZW50cz9jb250ZW50SWQ9JHtjb250ZW50SWR9JmNvbW1lbnRUeXBlPSR7Y29tbWVudFR5cGV9YClcblxuZXhwb3J0IGNvbnN0IGdldEFsbFRyaWJ1bmFsQ29tbWVudHNCYXRjaCA9IChjb250ZW50SWQpID0+IGF4aW9zLmdldChgJHtCQUNLRU5EX0RFVn0vdHJpYnVuYWwtY29tbWVudHMtYmF0Y2g/Y29udGVudElkPSR7Y29udGVudElkfWApXG5cbmV4cG9ydCBjb25zdCB1cGRhdGVUcmlidW5hbENvbW1lbnRMaWtlcyA9IChjb21tZW50RGF0YSkgPT4gYXhpb3MucHV0KGAke0JBQ0tFTkRfREVWfS9jb21tZW50cy9saWtlcy10cmlidW5hbGAsIGNvbW1lbnREYXRhKVxuXG5leHBvcnQgY29uc3QgdXBkYXRlVHJpYnVuYWxDb21tZW50Q2l2aWxpdHkgPSAoY29tbWVudERhdGEpID0+IGF4aW9zLnB1dChgJHtCQUNLRU5EX0RFVn0vY29tbWVudHMvY2l2aWxpdHktdHJpYnVuYWxgLCBjb21tZW50RGF0YSlcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBMaW5lID0gc3R5bGVkKCdocicpYCBcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAyZW0gMS4zZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0OCw0OCw1MCk7XG4gIGhlaWdodDogLjVweDtcbiAgYm9yZGVyOiBub25lO1xuYFxuIiwiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbm8tbm9uaW50ZXJhY3RpdmUtZWxlbWVudC1pbnRlcmFjdGlvbnMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFZlcmlmaWVkU3ZnIH0gZnJvbSAnLi4vLi4vLi4vc3Zncy9zdmdzJ1xuaW1wb3J0IFVzZXJJY29uIGZyb20gJy4uL1VzZXJJY29uL0luZGV4J1xuXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICcuL1N0eWxlJ1xuaW1wb3J0IFRoZW1lVG9vbHRpcCBmcm9tICcuLi9Ub29sdGlwL0luZGV4J1xuaW1wb3J0IHVzZU9wZW5EaWRFeHBsb3JlciBmcm9tICcuL2hvb2tzL3VzZU9wZW5EaWRFeHBsb3JlcidcbmltcG9ydCBVc2VybmFtZUFuZFRhZyBmcm9tICcuLi9Vc2VybmFtZUFuZFRhZy9JbmRleCdcblxuY29uc3QgVXNlckluZm9IZWFkZXIgPSAoe1xuICB0aW1lLCB1c2VybmFtZSwgdXNlcklkLCBpY29uU3JjLCB0b3BpY0NyZWF0b3JJc0RpZFVzZXIsIHVzZXJUYWcsXG59KSA9PiB7XG4gIGNvbnN0IHVzZXJuYW1lRGlzcGxheSA9IHVzZXJJZD8uc3RhcnRzV2l0aCgnZGlkJykgPyBgJHt1c2VybmFtZS5zdWJzdHJpbmcoMCwgMTIpfWAgOiB1c2VybmFtZVxuICBjb25zdCBvcGVuRGlkRXhwbG9yZXIgPSB1c2VPcGVuRGlkRXhwbG9yZXIodXNlcm5hbWUpXG4gIHJldHVybiAoXG4gICAgPEhlYWRlcj5cbiAgICAgIDxVc2VySWNvbiB3aWR0aD1cIjN2d1wiIHVzZXJJZD17dXNlcklkfSBpY29uU3JjPXtpY29uU3JjfSAvPlxuICAgICAgPGRpdj5cbiAgICAgICAgPHRpbWU+e3RpbWV9PC90aW1lPlxuICAgICAgICA8VXNlcm5hbWVBbmRUYWdcbiAgICAgICAgICB1c2VybmFtZURpc3BsYXk9e3VzZXJuYW1lRGlzcGxheX1cbiAgICAgICAgICB1c2VySWQ9e3VzZXJJZH1cbiAgICAgICAgICB1c2VyVGFnPXt1c2VyVGFnfVxuICAgICAgICAvPlxuXG4gICAgICAgIHt0b3BpY0NyZWF0b3JJc0RpZFVzZXJcbiAgICAgICAgJiYgKFxuICAgICAgICA8VGhlbWVUb29sdGlwXG4gICAgICAgICAgb25DbGljaz17b3BlbkRpZEV4cGxvcmVyfVxuICAgICAgICAgIEljb249e1ZlcmlmaWVkU3ZnfVxuICAgICAgICAgIHRvb2x0aXBIZWFkZXI9XCJWZXJpZmljYXRpb24gU3RhdHVzXCJcbiAgICAgICAgICB0b29sdGlwVGV4dD17YFRoaXMgSXMgYSBESUQgVmVyaWZpZWQgVXNlciB3aXRoIElEOiAke3VzZXJuYW1lfWB9XG4gICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L0hlYWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VySW5mb0hlYWRlclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IEhlYWRlciA9IHN0eWxlZCgnZGl2JylgIFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAuNWVtIC41ZW07ICAgIFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgLyogaGVpZ2h0OiA0dnc7XG4gIG1heC1oZWlnaHQ6IDR2dzsgKi9cbiAgLyogdHJhbnNpdGlvbjogZmlsdGVyIDFzIGVhc2UtaW4tb3V0OyAqL1xuXG4gIGRpdiB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIHRpbWUge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAxZW07XG4gICAgICByaWdodDogMWVtO1xuICAgICAgY29sb3I6IGdyYXk7XG4gICAgICBmb250LXNpemU6IC41ZW07XG4gICAgfVxuXG4gIGgyIHtcbiAgICBsaW5lLWhlaWdodDogdW5zZXQ7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogLjVlbTtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogLjVlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDF2dztcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgICBmb250LXNpemU6IDMuNHZ3O1xuICAgIH1cbiAgfVxuICBoMyB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgZm9udC1zaXplOiAuOHZ3O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IC41ZW07XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IC41ZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IGdyYXk7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgICAgZm9udC1zaXplOiAzdnc7XG4gICAgfVxuICAgIDpob3ZlciB7XG4gICAgICBjb2xvcjogdmFyKC0tbS1wcmltYXJ5LWJ0bi1jb2xvcik7XG4gICAgfVxuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBUaHVtYiA9IHN0eWxlZCgnaW1nJylgIFxuICBmbGV4LXNocmluazogMDtcbiAgd2lkdGg6IDN2dztcbiAgaGVpZ2h0OiAzdnc7ICAgICAgXG4gIGJvcmRlci1yYWRpdXM6IDUwJTsgXG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgICB3aWR0aDogOXZ3O1xuICAgICBoZWlnaHQ6IDl2dzsgIFxuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBVc2VybmFtZUNvbnRhaW5lciA9IHN0eWxlZCgnc2VjdGlvbicpYFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuYFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmtNZXRhRGF0YSBmcm9tICcuLi9MaW5rTWV0YURhdGEvSW5kZXgnXG5cbmNvbnN0IERpc3BsYXlNZWRpYSA9ICh7XG4gIGltZ0ZpbGUsIHZpZGVvRmlsZSwgc2V0TWV0YURhdGEsIGNvbnRlbnRVcmwsXG59KSA9PiAoXG4gIDw+XG4gICAgeyBjb250ZW50VXJsICYmIChcbiAgICA8TGlua01ldGFEYXRhXG4gICAgICBzZXRNZXRhRGF0YT17c2V0TWV0YURhdGF9XG4gICAgICBjb250ZW50VXJsPXtjb250ZW50VXJsfVxuICAgIC8+XG4gICAgKSB9XG4gICAgeyBpbWdGaWxlICYmIDxpbWcgc3JjPXtpbWdGaWxlfSBhbHQ9XCJcIiAvPn1cbiAgICB7IHZpZGVvRmlsZSAmJiAoXG4gICAgPHZpZGVvIGNvbnRyb2xzPlxuICAgICAgPHRyYWNrXG4gICAgICAgIGRlZmF1bHRcbiAgICAgICAga2luZD1cImNhcHRpb25zXCJcbiAgICAgICAgc3JjTGFuZz1cImVuXCJcbiAgICAgIC8+XG4gICAgICA8c291cmNlIHNyYz17dmlkZW9GaWxlfSB0eXBlPVwidmlkZW8vbXA0XCIgLz5cbiAgICAgIFlvdXIgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHRoZSB2aWRlbyB0YWcuXG4gICAgPC92aWRlbz5cbiAgICApfVxuICA8Lz5cblxuKVxuXG5leHBvcnQgZGVmYXVsdCBEaXNwbGF5TWVkaWFcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHtcbiAgRmxleERpdiwgT0dVcmwsIE9HVGl0bGUsIE9HRGVzY3JpcHRpb24sIE9HSW1hZ2UsIExpbmtXcmFwcGVyLCBDb250YWluZXIsXG59IGZyb20gJy4vU3R5bGUvaW5kZXgnXG5pbXBvcnQgeyBMaW5lIH0gZnJvbSAnLi4vLi4vLi4vQ29tbW9uQ29tcG9uZW50cy9MaW5lL2luZGV4J1xuaW1wb3J0IElzTG9hZGluZ0hPQyBmcm9tICcuLi8uLi8uLi8uLi9ob2NzL0lzTG9hZGluZ0hPQydcbmltcG9ydCB1c2VHZXRMaW5rTWV0YURhdGFFZmZlY3QgZnJvbSAnLi9ob29rcy91c2VHZXRMaW5rTWV0YURhdGFFZmZlY3QnXG5cbmNvbnN0IExpbmtNZXRhRGF0YSA9ICh7XG4gIHRvcGljLCBjb250ZW50VXJsLCBzZXRNZXRhRGF0YSwgc2V0SXNMb2FkaW5nLFxufSkgPT4ge1xuICBjb25zdCBtZXRhRGF0YSA9IHVzZUdldExpbmtNZXRhRGF0YUVmZmVjdCh0b3BpYywgY29udGVudFVybCwgc2V0TWV0YURhdGEsIHNldElzTG9hZGluZylcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSlcbiAgfSwgW2NvbnRlbnRVcmxdKVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIHsgbWV0YURhdGFcbiAgICAgICAgPyAoXG4gICAgICAgICAgPExpbmtXcmFwcGVyIGhyZWY9e21ldGFEYXRhLm9nVXJsfSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgIDxGbGV4RGl2PlxuICAgICAgICAgICAgICA8T0dUaXRsZT57bWV0YURhdGEub2dUaXRsZSB8fCBtZXRhRGF0YS5vZ1NpdGVOYW1lfTwvT0dUaXRsZT5cbiAgICAgICAgICAgICAgPE9HVXJsPnttZXRhRGF0YS5vZ1VybH08L09HVXJsPlxuICAgICAgICAgICAgICA8T0dJbWFnZSBzcmM9e21ldGFEYXRhLm9nSW1hZ2U/LnVybCB8fCBtZXRhRGF0YS5mYXZpY29ufSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICA8TGluZSAvPlxuICAgICAgICAgICAgICA8T0dEZXNjcmlwdGlvbj57bWV0YURhdGEub2dEZXNjcmlwdGlvbn08L09HRGVzY3JpcHRpb24+XG4gICAgICAgICAgICA8L0ZsZXhEaXY+XG4gICAgICAgICAgPC9MaW5rV3JhcHBlcj5cbiAgICAgICAgKSA6IDxhIHJlbD1cIm5vcmVmZXJyZXJcIiBocmVmPXttZXRhRGF0YT8ucmVxdWVzdFVybH0gdGFyZ2V0PVwiX2JsYW5rXCI+e21ldGFEYXRhPy5yZXF1ZXN0VXJsfTwvYT59XG4gICAgPC9Db250YWluZXI+XG4gIClcbn1cbmV4cG9ydCBkZWZhdWx0IElzTG9hZGluZ0hPQyhMaW5rTWV0YURhdGEpXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWBcbiAgbWluLXdpZHRoOiA3MCU7XG4gIHdpZHRoOiAxMDAlO1xuYFxuXG5leHBvcnQgY29uc3QgTGlua1dyYXBwZXIgPSBzdHlsZWQoJ2EnKWBcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG5gXG5cbmV4cG9ydCBjb25zdCBGbGV4RGl2ID0gc3R5bGVkKCdkaXYnKWAgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogLjV2dyBhdXRvO1xuICB3aWR0aDogODUlO1xuICBib3gtc2hhZG93OiA1cHggNXB4IDVweCAtM3B4ICNhYWFhYWE7XG4gIGJvcmRlci1yYWRpdXM6IDF2dztcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIwNywgMjE3LCAyMjIpO1xuICBwYWRkaW5nOiAxZW07XG4gIDpob3ZlciB7XG4gICAgb3BhY2l0eTogLjg7XG4gIH1cbmBcbmV4cG9ydCBjb25zdCBPR0ltYWdlID0gc3R5bGVkKCdpbWcnKWAgXG4gIGJvcmRlci1yYWRpdXM6IDF2dztcblxuYFxuXG5leHBvcnQgY29uc3QgT0dVcmwgPSBzdHlsZWQoJ3NwYW4nKWAgXG4gIGNvbG9yOiBncmF5O1xuICBmb250LXNpemU6IDF2dztcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwOyAgXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgaHlwaGVuczogYXV0bztcbiAgbWF4LXdpZHRoOiA5MCU7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICBmb250LXNpemU6IDN2dztcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgT0dUaXRsZSA9IHN0eWxlZCgnaDMnKWBcbiBmb250LXNpemU6IDF2dztcbiBtYXJnaW46IC42dncgMCAuMXZ3IDA7XG4gY29sb3I6IGdyYXk7XG4gZm9udC13ZWlnaHQ6IGJvbGQ7XG4gQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIGZvbnQtc2l6ZTogM3Z3O1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBPR0Rlc2NyaXB0aW9uID0gc3R5bGVkKCdwJylgIFxuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAuOHZ3O1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICBmb250LXNpemU6IDN2dztcbiAgfVxuIFxuYFxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyBnZXRMaW5rTWV0YURhdGEgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9hcGkvdjEvdG9waWNzL3RvcGljc19hcGlfdXRpbCdcblxuZXhwb3J0IGRlZmF1bHQgKHRvcGljLCBjb250ZW50VXJsLCBzZXREYXRhRm9yUGFyZW50Q29tcG9uZW50LCBzZXRJc0xvYWRpbmcpID0+IHtcbiAgY29uc3QgW21ldGFEYXRhLCBzZXRNZXRhRGF0YV0gPSB1c2VTdGF0ZShudWxsKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGdldE1ldGFEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgc2V0TWV0YURhdGEobnVsbClcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgZ2V0TGlua01ldGFEYXRhKHRvcGljPy5jb250ZW50VXJsIHx8IGNvbnRlbnRVcmwpXG4gICAgICBpZiAodHlwZW9mIHNldERhdGFGb3JQYXJlbnRDb21wb25lbnQgPT09ICdmdW5jdGlvbicpIHNldERhdGFGb3JQYXJlbnRDb21wb25lbnQoZGF0YSlcbiAgICAgIHNldE1ldGFEYXRhKGRhdGEpXG4gICAgICBpZiAodHlwZW9mIHNldElzTG9hZGluZyA9PT0gJ2Z1bmN0aW9uJykgc2V0SXNMb2FkaW5nKGZhbHNlKVxuICAgIH1cbiAgICBpZiAodG9waWM/LmNvbnRlbnRVcmwgfHwgY29udGVudFVybCkgZ2V0TWV0YURhdGEoKVxuICB9LCBbXSlcblxuICByZXR1cm4gbWV0YURhdGFcbn1cbiIsImltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VMb2NhdGlvbigpXG4gIHJldHVybiB1c2VNZW1vKCgpID0+ICh7XG4gICAgaXNPblRyaWJ1bmFsUGFnZTogcGF0aG5hbWUuaW5jbHVkZXMoJ3RyaWJ1bmFsJyksXG4gIH0pLCBbcGF0aG5hbWVdKVxufVxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IChyZWYsIGh0bWwpID0+IHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocmVmPy5jdXJyZW50KSByZWYuY3VycmVudC5pbm5lckhUTUwgPSBodG1sXG4gIH0sIFtyZWYsIGh0bWxdKVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSdcblxuaW1wb3J0IHsgY2xvc2VNb2RhbCB9IGZyb20gJy4uL3VpL2luZGV4J1xuaW1wb3J0IHtcbiAgQUREX0NPTU1FTlQsIEdFVF9BTExfQ09NTUVOVFMsIFVQREFURV9DT01NRU5UX0xJS0VTLCBVUERBVEVfQ09NTUVOVF9DSVZJTElUWSwgQUREX1JFUE9SVEVEX0NPTU1FTlQsIEdFVF9BTExfQ09NTUVOVF9SRVBMSUVTLFxufSBmcm9tICcuLi8uLi9yZWR1Y2Vycy9jb21tZW50cy9jb21tZW50c1JlZHVjZXInXG5pbXBvcnQgKiBhcyBDb21tZW50c0FwaVV0aWwgZnJvbSAnLi4vLi4vLi4vYXBpL3YxL2NvbW1lbnRzL2NvbW1lbnRzX2FwaV91dGlsJ1xuaW1wb3J0IHsgZXJyb3JGb3JtYXR0ZXIgfSBmcm9tICcuLi8uLi91dGlscy9lcnJvckZvcm1hdHRlcidcblxuY29uc3QgZ2V0QWxsQ29tbWVudHNBY3Rpb25DcmVhdG9yID0gKHN1YnRvcGljcykgPT4gKHtcbiAgdHlwZTogR0VUX0FMTF9DT01NRU5UUyxcbiAgcGF5bG9hZDogc3VidG9waWNzLFxufSlcblxuY29uc3QgZ2V0QWxsQ29tbWVudFJlcGxpZXNBY3Rpb25DcmVhdG9yID0gKGNvbW1lbnRXaXRoUmVwbGllcykgPT4gKHtcbiAgdHlwZTogR0VUX0FMTF9DT01NRU5UX1JFUExJRVMsXG4gIHBheWxvYWQ6IGNvbW1lbnRXaXRoUmVwbGllcyxcbn0pXG5cbmNvbnN0IGFkZENvbW1lbnRBY3Rpb25DcmVhdG9yID0gKHN1YlRvcGljRGF0YSkgPT4gKHtcbiAgdHlwZTogQUREX0NPTU1FTlQsXG4gIHBheWxvYWQ6IHN1YlRvcGljRGF0YSxcbn0pXG5cbmNvbnN0IGFkZFJlcG9ydGVkQ29tbWVudEFjdGlvbkNyZWF0b3IgPSAoc3ViVG9waWNEYXRhKSA9PiAoe1xuICB0eXBlOiBBRERfUkVQT1JURURfQ09NTUVOVCxcbiAgcGF5bG9hZDogc3ViVG9waWNEYXRhLFxufSlcblxuY29uc3QgdXBkYXRlQ29tbWVudEFjdGlvbkNyZWF0b3IgPSAoZGF0YSkgPT4gKHtcbiAgdHlwZTogVVBEQVRFX0NPTU1FTlRfTElLRVMsXG4gIHBheWxvYWQ6IGRhdGEsXG59KVxuXG5jb25zdCB1cGRhdGVDb21tZW50Q2l2aWxpdHlBY3Rpb25DcmVhdG9yID0gKGRhdGEpID0+ICh7XG4gIHR5cGU6IFVQREFURV9DT01NRU5UX0NJVklMSVRZLFxuICBwYXlsb2FkOiBkYXRhLFxufSlcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUNvbW1lbnQgPSAoY29tbWVudERhdGEpID0+IChkaXNwYXRjaCkgPT4ge1xuICBDb21tZW50c0FwaVV0aWwuY3JlYXRlQ29tbWVudChjb21tZW50RGF0YSlcbiAgICAudGhlbigocmVzKSA9PiBkaXNwYXRjaChhZGRDb21tZW50QWN0aW9uQ3JlYXRvcihyZXMuZGF0YSkpKVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgIHRvYXN0LnN1Y2Nlc3MoJ1NhdmVkIENvbW1lbnQnLCB7IGRlbGF5OiAxMDAwIH0pXG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB0b2FzdC5lcnJvcihlcnJvckZvcm1hdHRlcihlcnJvcikpKVxuICAgIC5maW5hbGx5KCgpID0+IGRpc3BhdGNoKGNsb3NlTW9kYWwoKSkpXG59XG5cbmV4cG9ydCBjb25zdCBnZXRBbGxDb21tZW50cyA9IChzdWJUb3BpY0lkLCB1c2VySWQpID0+IChkaXNwYXRjaCkgPT4gQ29tbWVudHNBcGlVdGlsLmdldEFsbENvbW1lbnRzKHN1YlRvcGljSWQsIHVzZXJJZClcbiAgLnRoZW4oKHJlcykgPT4gZGlzcGF0Y2goZ2V0QWxsQ29tbWVudHNBY3Rpb25DcmVhdG9yKHJlcy5kYXRhKSkpXG4gIC5jYXRjaCgoZXJyb3IpID0+IHRvYXN0LmVycm9yKGVycm9yRm9ybWF0dGVyKGVycm9yKSkpXG5cbmV4cG9ydCBjb25zdCBnZXRBbGxDb21tZW50UmVwbGllcyA9IChjb21tZW50SWQpID0+IChkaXNwYXRjaCkgPT4gQ29tbWVudHNBcGlVdGlsLmdldEFsbENvbW1lbnRSZXBsaWVzKGNvbW1lbnRJZClcbiAgLnRoZW4oKHJlcykgPT4gZGlzcGF0Y2goZ2V0QWxsQ29tbWVudFJlcGxpZXNBY3Rpb25DcmVhdG9yKHJlcy5kYXRhKSkpXG4gIC5jYXRjaCgoZXJyb3IpID0+IHRvYXN0LmVycm9yKGVycm9yRm9ybWF0dGVyKGVycm9yKSkpXG5cbmV4cG9ydCBjb25zdCBnZXRDb21tZW50ID0gKGNvbW1lbnRJZCkgPT4gKGRpc3BhdGNoKSA9PiBDb21tZW50c0FwaVV0aWwuZ2V0Q29tbWVudChjb21tZW50SWQpXG4gIC50aGVuKChyZXMpID0+IGRpc3BhdGNoKGFkZFJlcG9ydGVkQ29tbWVudEFjdGlvbkNyZWF0b3IocmVzLmRhdGEpKSlcbiAgLmNhdGNoKChlcnJvcikgPT4gdG9hc3QuZXJyb3IoZXJyb3JGb3JtYXR0ZXIoZXJyb3IpKSlcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUNvbW1lbnRMaWtlcyA9IChkYXRhKSA9PiAoZGlzcGF0Y2gpID0+IENvbW1lbnRzQXBpVXRpbC51cGRhdGVDb21tZW50TGlrZXMoZGF0YSlcbiAgLnRoZW4oKHJlcykgPT4gZGlzcGF0Y2godXBkYXRlQ29tbWVudEFjdGlvbkNyZWF0b3IocmVzLmRhdGEpKSlcbiAgLmNhdGNoKChlcnJvcikgPT4gdG9hc3QuZXJyb3IoZXJyb3JGb3JtYXR0ZXIoZXJyb3IpKSlcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUNvbW1lbnRDaXZpbGl0eSA9IChkYXRhKSA9PiAoZGlzcGF0Y2gpID0+IENvbW1lbnRzQXBpVXRpbC51cGRhdGVDb21tZW50Q2l2aWxpdHkoZGF0YSlcbiAgLnRoZW4oKHJlcykgPT4gZGlzcGF0Y2godXBkYXRlQ29tbWVudENpdmlsaXR5QWN0aW9uQ3JlYXRvcihyZXMuZGF0YSkpKVxuICAuY2F0Y2goKGVycm9yKSA9PiB0b2FzdC5lcnJvcihlcnJvckZvcm1hdHRlcihlcnJvcikpKVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNyZWF0ZUNvbW1lbnQsXG4gIGdldEFsbENvbW1lbnRzLFxuICBnZXRDb21tZW50LFxuICB1cGRhdGVDb21tZW50TGlrZXMsXG4gIHVwZGF0ZUNvbW1lbnRDaXZpbGl0eSxcbiAgZ2V0QWxsQ29tbWVudFJlcGxpZXMsXG59XG4iLCIvLyBhY3Rpb24gY3JlYXRvciBpcyBqdXN0IGEgZnVuY3Rpb24gdGhhdCBkaXNwYXRjaGVzIGFuIGFjdGlvblxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSdcbmltcG9ydCB7IGNsb3NlTW9kYWwgfSBmcm9tICcuLi91aS9pbmRleCdcbmltcG9ydCB7IEFERF9UT1BJQywgR0VUX0FMTF9UT1BJQ1MsIFVQREFURV9UT1BJQ19MSUtFUyB9IGZyb20gJy4uLy4uL3JlZHVjZXJzL3RvcGljc1JlZHVjZXInXG5pbXBvcnQgKiBhcyBUb3BpY3NBcGlVdGlsIGZyb20gJy4uLy4uLy4uL2FwaS92MS90b3BpY3MvdG9waWNzX2FwaV91dGlsJ1xuaW1wb3J0IHsgZXJyb3JGb3JtYXR0ZXIgfSBmcm9tICcuLi8uLi91dGlscy9lcnJvckZvcm1hdHRlcidcblxuY29uc3QgZ2V0QWxsVG9waWNzQWN0aW9uQ3JlYXRvciA9ICh0b3BpY3MpID0+ICh7XG4gIHR5cGU6IEdFVF9BTExfVE9QSUNTLFxuICBwYXlsb2FkOiB0b3BpY3MsXG5cbn0pXG5cbmNvbnN0IGFkZFRvcGljQWN0aW9uQ3JlYXRvciA9ICh0b3BpY0RhdGEpID0+ICh7XG4gIHR5cGU6IEFERF9UT1BJQyxcbiAgcGF5bG9hZDogdG9waWNEYXRhLFxufSlcblxuY29uc3QgdXBkYXRlVG9waWNMaWtlc0FjdGlvbkNyZWF0b3IgPSAoZGF0YSkgPT4gKHtcbiAgdHlwZTogVVBEQVRFX1RPUElDX0xJS0VTLFxuICBwYXlsb2FkOiBkYXRhLFxufSlcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVRvcGljID0gKHRvcGljRGF0YSkgPT4gKGRpc3BhdGNoKSA9PiBUb3BpY3NBcGlVdGlsLmNyZWF0ZVRvcGljKHRvcGljRGF0YSlcbiAgLnRoZW4oKHJlcykgPT4gZGlzcGF0Y2goYWRkVG9waWNBY3Rpb25DcmVhdG9yKHJlcy5kYXRhKSkpXG4gIC5maW5hbGx5KCgpID0+IGRpc3BhdGNoKGNsb3NlTW9kYWwoKSkpXG4gIC5jYXRjaCgoZXJyb3IpID0+IHRvYXN0LmVycm9yKGVycm9yRm9ybWF0dGVyKGVycm9yKSkpXG5cbmV4cG9ydCBjb25zdCBnZXRBbGxUb3BpY3MgPSAoKSA9PiAoZGlzcGF0Y2gpID0+IFRvcGljc0FwaVV0aWwuZ2V0QWxsVG9waWNzKClcbiAgLnRoZW4oKHJlcykgPT4gZGlzcGF0Y2goZ2V0QWxsVG9waWNzQWN0aW9uQ3JlYXRvcihyZXMuZGF0YSkpKVxuICAuY2F0Y2goKGVycm9yKSA9PiB0b2FzdC5lcnJvcihlcnJvckZvcm1hdHRlcihlcnJvcikpKVxuXG5leHBvcnQgY29uc3QgZ2V0VG9waWMgPSAodG9waWNJZCwgdXNlcklkKSA9PiAoZGlzcGF0Y2gpID0+IFRvcGljc0FwaVV0aWwuZ2V0VG9waWModG9waWNJZCwgdXNlcklkKVxuICAudGhlbigocmVzKSA9PiBkaXNwYXRjaChhZGRUb3BpY0FjdGlvbkNyZWF0b3IocmVzLmRhdGEpKSlcbiAgLmNhdGNoKChlcnJvcikgPT4gdG9hc3QuZXJyb3IoZXJyb3JGb3JtYXR0ZXIoZXJyb3IpKSlcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVRvcGljTGlrZXMgPSAoZGF0YSkgPT4gKGRpc3BhdGNoKSA9PiBUb3BpY3NBcGlVdGlsLnVwZGF0ZVRvcGljTGlrZXMoZGF0YSlcbiAgLnRoZW4oKHJlcykgPT4gZGlzcGF0Y2godXBkYXRlVG9waWNMaWtlc0FjdGlvbkNyZWF0b3IocmVzLmRhdGEpKSlcbiAgLmNhdGNoKChlcnJvcikgPT4gdG9hc3QuZXJyb3IoZXJyb3JGb3JtYXR0ZXIoZXJyb3IpKSlcblxuY29uc3QgdXBsb2FkVG9waWNNZWRpYSA9IChkYXRhLCBmaWxlVHlwZSwgZmlsZUZvcm1hdCwgdG9waWNEYXRhKSA9PiAoZGlzcGF0Y2gpID0+IFRvcGljc0FwaVV0aWxcbiAgLnVwbG9hZFRvcGljTWVkaWEoZGF0YSwgZmlsZVR5cGUsIGZpbGVGb3JtYXQpXG4gIC50aGVuKChyZXMpID0+IHtcbiAgICBjcmVhdGVUb3BpYyh7IC4uLnRvcGljRGF0YSwgLi4ucmVzLmRhdGEgfSkoZGlzcGF0Y2gpXG4gIH0pXG4gIC5jYXRjaCgoZXJyb3IpID0+IHRvYXN0LmVycm9yKGVycm9yRm9ybWF0dGVyKGVycm9yKSkpXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY3JlYXRlVG9waWMsXG4gIGdldEFsbFRvcGljcyxcbiAgZ2V0VG9waWMsXG4gIHVwZGF0ZVRvcGljTGlrZXMsXG4gIHVwbG9hZFRvcGljTWVkaWEsXG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5J1xuXG5pbXBvcnQgeyBjbG9zZU1vZGFsIH0gZnJvbSAnLi4vdWkvaW5kZXgnXG5pbXBvcnQge1xuICBBRERfVFJJQlVOQUxfQ09NTUVOVCwgR0VUX0FMTF9UUklCVU5BTF9DT01NRU5UUywgVVBEQVRFX1RSSUJVTkFMX0NPTU1FTlRfTElLRVMsIFVQREFURV9UUklCVU5BTF9DT01NRU5UX0NJVklMSVRZLCBHRVRfQUxMX1RSSUJVTkFMX0NPTU1FTlRTX0JBVENILFxufSBmcm9tICcuLi8uLi9yZWR1Y2Vycy90cmlidW5hbF9jb21tZW50cy90cmlidW5hbENvbW1lbnRzUmVkdWNlcidcbmltcG9ydCAqIGFzIFRyaWJ1bmFsQ29tbWVudHNBcGlVdGlsIGZyb20gJy4uLy4uLy4uL2FwaS92MS90cmlidW5hbF9jb21tZW50cy90cmlidW5hbF9jb21tZW50c19hcGlfdXRpbCdcbmltcG9ydCB7IGVycm9yRm9ybWF0dGVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvZXJyb3JGb3JtYXR0ZXInXG5cbmNvbnN0IGdldEFsbENvbW1lbnRzQWN0aW9uQ3JlYXRvciA9IChjb21tZW50cywgY29tbWVudFR5cGUpID0+ICh7XG4gIHR5cGU6IEdFVF9BTExfVFJJQlVOQUxfQ09NTUVOVFMsXG4gIHBheWxvYWQ6IHsgY29tbWVudHMsIGNvbW1lbnRUeXBlIH0sXG59KVxuXG5jb25zdCBnZXRBbGxDb21tZW50c0JhdGNoQWN0aW9uQ3JlYXRvciA9IChwYXlsb2FkKSA9PiAoe1xuICB0eXBlOiBHRVRfQUxMX1RSSUJVTkFMX0NPTU1FTlRTX0JBVENILFxuICBwYXlsb2FkLFxufSlcblxuY29uc3QgYWRkQ29tbWVudEFjdGlvbkNyZWF0b3IgPSAoc3ViVG9waWNEYXRhKSA9PiAoe1xuICB0eXBlOiBBRERfVFJJQlVOQUxfQ09NTUVOVCxcbiAgcGF5bG9hZDogc3ViVG9waWNEYXRhLFxufSlcblxuY29uc3QgdXBkYXRlQ29tbWVudEFjdGlvbkNyZWF0b3IgPSAoZGF0YSkgPT4gKHtcbiAgdHlwZTogVVBEQVRFX1RSSUJVTkFMX0NPTU1FTlRfTElLRVMsXG4gIHBheWxvYWQ6IGRhdGEsXG59KVxuXG5jb25zdCB1cGRhdGVDb21tZW50Q2l2aWxpdHlBY3Rpb25DcmVhdG9yID0gKGRhdGEpID0+ICh7XG4gIHR5cGU6IFVQREFURV9UUklCVU5BTF9DT01NRU5UX0NJVklMSVRZLFxuICBwYXlsb2FkOiBkYXRhLFxufSlcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVRyaWJ1bmFsQ29tbWVudCA9IChjb21tZW50RGF0YSkgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIFRyaWJ1bmFsQ29tbWVudHNBcGlVdGlsLmNyZWF0ZVRyaWJ1bmFsQ29tbWVudChjb21tZW50RGF0YSlcbiAgICAudGhlbigocmVzKSA9PiBkaXNwYXRjaChhZGRDb21tZW50QWN0aW9uQ3JlYXRvcihyZXMuZGF0YSkpKVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgIHRvYXN0LnN1Y2Nlc3MoJ1NhdmVkIENvbW1lbnQnLCB7IGRlbGF5OiAxMDAwIH0pXG4gICAgfSlcbiAgICAuY2F0Y2goKGVycikgPT4gdG9hc3QuZXJyb3IoYFByb2JsZW0gU2F2aW5nIENvbW1lbnQgXFxuICR7ZXJyfWAsIHsgYXV0b0Nsb3NlOiAyNTAwIH0pKVxuICAgIC5maW5hbGx5KCgpID0+IGRpc3BhdGNoKGNsb3NlTW9kYWwoKSkpXG59XG5cbmV4cG9ydCBjb25zdCBnZXRBbGxUcmlidW5hbENvbW1lbnRzID0gKGNvbnRlbnRJZCwgY29tbWVudFR5cGUpID0+IChkaXNwYXRjaCkgPT4gVHJpYnVuYWxDb21tZW50c0FwaVV0aWwuZ2V0QWxsVHJpYnVuYWxDb21tZW50cyhjb250ZW50SWQsIGNvbW1lbnRUeXBlKVxuICAudGhlbigocmVzKSA9PiBkaXNwYXRjaChnZXRBbGxDb21tZW50c0FjdGlvbkNyZWF0b3IocmVzLmRhdGEsIGNvbW1lbnRUeXBlKSkpXG4gIC5jYXRjaCgoZXJyb3IpID0+IHRvYXN0LmVycm9yKGVycm9yRm9ybWF0dGVyKGVycm9yKSkpXG5cbmV4cG9ydCBjb25zdCBnZXRBbGxUcmlidW5hbENvbW1lbnRzQmF0Y2ggPSAoY29udGVudElkKSA9PiAoZGlzcGF0Y2gpID0+IFRyaWJ1bmFsQ29tbWVudHNBcGlVdGlsLmdldEFsbFRyaWJ1bmFsQ29tbWVudHNCYXRjaChjb250ZW50SWQpXG4gIC50aGVuKChyZXMpID0+IGRpc3BhdGNoKGdldEFsbENvbW1lbnRzQmF0Y2hBY3Rpb25DcmVhdG9yKHJlcy5kYXRhKSkpXG4gIC5jYXRjaCgoZXJyb3IpID0+IHRvYXN0LmVycm9yKGVycm9yRm9ybWF0dGVyKGVycm9yKSkpXG5cbmV4cG9ydCBjb25zdCB1cGRhdGVUcmlidW5hbENvbW1lbnRMaWtlcyA9IChkYXRhKSA9PiAoZGlzcGF0Y2gpID0+IFRyaWJ1bmFsQ29tbWVudHNBcGlVdGlsLnVwZGF0ZVRyaWJ1bmFsQ29tbWVudExpa2VzKGRhdGEpXG4gIC50aGVuKChyZXMpID0+IGRpc3BhdGNoKHVwZGF0ZUNvbW1lbnRBY3Rpb25DcmVhdG9yKHJlcy5kYXRhKSkpXG4gIC5jYXRjaCgoZXJyb3IpID0+IHRvYXN0LmVycm9yKGVycm9yKSlcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVRyaWJ1bmFsQ29tbWVudENpdmlsaXR5ID0gKGRhdGEpID0+IChkaXNwYXRjaCkgPT4gVHJpYnVuYWxDb21tZW50c0FwaVV0aWwudXBkYXRlVHJpYnVuYWxDb21tZW50Q2l2aWxpdHkoZGF0YSlcbiAgLnRoZW4oKHJlcykgPT4gZGlzcGF0Y2godXBkYXRlQ29tbWVudENpdmlsaXR5QWN0aW9uQ3JlYXRvcihyZXMuZGF0YSkpKVxuICAuY2F0Y2goKGVycm9yKSA9PiB0b2FzdC5lcnJvcihlcnJvcikpXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY3JlYXRlVHJpYnVuYWxDb21tZW50LFxuICBnZXRBbGxUcmlidW5hbENvbW1lbnRzLFxuICBnZXRBbGxUcmlidW5hbENvbW1lbnRzQmF0Y2gsXG4gIHVwZGF0ZVRyaWJ1bmFsQ29tbWVudENpdmlsaXR5LFxuICAvLyBnZXRBbGxDb21tZW50cyxcbiAgdXBkYXRlVHJpYnVuYWxDb21tZW50TGlrZXMsXG4gIC8vIHVwZGF0ZUNvbW1lbnRDaXZpbGl0eSxcbn1cbiJdLCJuYW1lcyI6WyJheGlvcyIsInVzZVNlc3Npb25UeXBlIiwiQkFDS0VORF9ERVYiLCJVUExPQURfU0VSVklDRSIsImNyZWF0ZUNvbW1lbnQiLCJzdWJUb3BpY0RhdGEiLCJwb3N0IiwiZ2V0QWxsQ29tbWVudHMiLCJzdWJ0b3BpY0lkIiwidXNlcklkIiwiZ2V0IiwiZ2V0QWxsQ29tbWVudFJlcGxpZXMiLCJjb21tZW50SWQiLCJnZXRDb21tZW50IiwidXBkYXRlQ29tbWVudExpa2VzIiwiY29tbWVudERhdGEiLCJwdXQiLCJ1cGRhdGVDb21tZW50Q2l2aWxpdHkiLCJjaGVja1RveGljaXR5IiwiY29tbWVudFRleHREYXRhIiwiY3JlYXRlVG9waWMiLCJ0b3BpY0RhdGEiLCJnZXRBbGxUb3BpY3MiLCJnZXRUb3BpYyIsInRvcGljSWQiLCJ1cGRhdGVUb3BpY0xpa2VzIiwidXBsb2FkVG9waWNNZWRpYSIsImRhdGEiLCJmaWxlVHlwZSIsImZpbGVGb3JtYXQiLCJnZXRMaW5rTWV0YURhdGEiLCJ1cmwiLCJjcmVhdGVUcmlidW5hbENvbW1lbnQiLCJjb21tZW50IiwiZ2V0QWxsVHJpYnVuYWxDb21tZW50cyIsImNvbnRlbnRJZCIsImNvbW1lbnRUeXBlIiwiZ2V0QWxsVHJpYnVuYWxDb21tZW50c0JhdGNoIiwidXBkYXRlVHJpYnVuYWxDb21tZW50TGlrZXMiLCJ1cGRhdGVUcmlidW5hbENvbW1lbnRDaXZpbGl0eSIsInN0eWxlZCIsIkxpbmUiLCJSZWFjdCIsIlZlcmlmaWVkU3ZnIiwiVXNlckljb24iLCJIZWFkZXIiLCJUaGVtZVRvb2x0aXAiLCJ1c2VPcGVuRGlkRXhwbG9yZXIiLCJVc2VybmFtZUFuZFRhZyIsIlVzZXJJbmZvSGVhZGVyIiwidGltZSIsInVzZXJuYW1lIiwiaWNvblNyYyIsInRvcGljQ3JlYXRvcklzRGlkVXNlciIsInVzZXJUYWciLCJ1c2VybmFtZURpc3BsYXkiLCJzdGFydHNXaXRoIiwic3Vic3RyaW5nIiwib3BlbkRpZEV4cGxvcmVyIiwiVGh1bWIiLCJVc2VybmFtZUNvbnRhaW5lciIsIkxpbmtNZXRhRGF0YSIsIkRpc3BsYXlNZWRpYSIsImltZ0ZpbGUiLCJ2aWRlb0ZpbGUiLCJzZXRNZXRhRGF0YSIsImNvbnRlbnRVcmwiLCJ1c2VFZmZlY3QiLCJGbGV4RGl2IiwiT0dVcmwiLCJPR1RpdGxlIiwiT0dEZXNjcmlwdGlvbiIsIk9HSW1hZ2UiLCJMaW5rV3JhcHBlciIsIkNvbnRhaW5lciIsIklzTG9hZGluZ0hPQyIsInVzZUdldExpbmtNZXRhRGF0YUVmZmVjdCIsInRvcGljIiwic2V0SXNMb2FkaW5nIiwibWV0YURhdGEiLCJvZ1VybCIsIm9nVGl0bGUiLCJvZ1NpdGVOYW1lIiwib2dJbWFnZSIsImZhdmljb24iLCJvZ0Rlc2NyaXB0aW9uIiwicmVxdWVzdFVybCIsInVzZVN0YXRlIiwic2V0RGF0YUZvclBhcmVudENvbXBvbmVudCIsImdldE1ldGFEYXRhIiwidXNlTWVtbyIsInVzZUxvY2F0aW9uIiwicGF0aG5hbWUiLCJpc09uVHJpYnVuYWxQYWdlIiwiaW5jbHVkZXMiLCJyZWYiLCJodG1sIiwiY3VycmVudCIsImlubmVySFRNTCIsInRvYXN0IiwiY2xvc2VNb2RhbCIsIkFERF9DT01NRU5UIiwiR0VUX0FMTF9DT01NRU5UUyIsIlVQREFURV9DT01NRU5UX0xJS0VTIiwiVVBEQVRFX0NPTU1FTlRfQ0lWSUxJVFkiLCJBRERfUkVQT1JURURfQ09NTUVOVCIsIkdFVF9BTExfQ09NTUVOVF9SRVBMSUVTIiwiQ29tbWVudHNBcGlVdGlsIiwiZXJyb3JGb3JtYXR0ZXIiLCJnZXRBbGxDb21tZW50c0FjdGlvbkNyZWF0b3IiLCJzdWJ0b3BpY3MiLCJ0eXBlIiwicGF5bG9hZCIsImdldEFsbENvbW1lbnRSZXBsaWVzQWN0aW9uQ3JlYXRvciIsImNvbW1lbnRXaXRoUmVwbGllcyIsImFkZENvbW1lbnRBY3Rpb25DcmVhdG9yIiwiYWRkUmVwb3J0ZWRDb21tZW50QWN0aW9uQ3JlYXRvciIsInVwZGF0ZUNvbW1lbnRBY3Rpb25DcmVhdG9yIiwidXBkYXRlQ29tbWVudENpdmlsaXR5QWN0aW9uQ3JlYXRvciIsImRpc3BhdGNoIiwidGhlbiIsInJlcyIsInN1Y2Nlc3MiLCJkZWxheSIsImVycm9yIiwic3ViVG9waWNJZCIsIkFERF9UT1BJQyIsIkdFVF9BTExfVE9QSUNTIiwiVVBEQVRFX1RPUElDX0xJS0VTIiwiVG9waWNzQXBpVXRpbCIsImdldEFsbFRvcGljc0FjdGlvbkNyZWF0b3IiLCJ0b3BpY3MiLCJhZGRUb3BpY0FjdGlvbkNyZWF0b3IiLCJ1cGRhdGVUb3BpY0xpa2VzQWN0aW9uQ3JlYXRvciIsIkFERF9UUklCVU5BTF9DT01NRU5UIiwiR0VUX0FMTF9UUklCVU5BTF9DT01NRU5UUyIsIlVQREFURV9UUklCVU5BTF9DT01NRU5UX0xJS0VTIiwiVVBEQVRFX1RSSUJVTkFMX0NPTU1FTlRfQ0lWSUxJVFkiLCJHRVRfQUxMX1RSSUJVTkFMX0NPTU1FTlRTX0JBVENIIiwiVHJpYnVuYWxDb21tZW50c0FwaVV0aWwiLCJjb21tZW50cyIsImdldEFsbENvbW1lbnRzQmF0Y2hBY3Rpb25DcmVhdG9yIiwiZXJyIiwiYXV0b0Nsb3NlIl0sInNvdXJjZVJvb3QiOiIifQ==