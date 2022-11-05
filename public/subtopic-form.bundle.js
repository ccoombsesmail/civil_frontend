"use strict";
(self["webpackChunkcivil"] = self["webpackChunkcivil"] || []).push([["subtopic-form"],{

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
    setContent = _useState10[1];
  // const validator = useConfigFormErrors(ERRORS)
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
      rotate: rotate
      // icon={<DownArrowCircleSvg />}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1ZrQztBQUVuQyxpRUFBZTtFQUFBLE9BQU1HLGtEQUFXLENBQUMsVUFBQ3lILENBQUMsRUFBRVosYUFBYSxFQUFFOEQsYUFBYSxFQUFLO0lBQ3BFOUQsYUFBYSxDQUFDWSxDQUFDLENBQUNtRCxNQUFNLENBQUNDLE9BQU8sQ0FBQ0MsUUFBUSxFQUFFckQsQ0FBQyxDQUFDQyxhQUFhLENBQUNxRCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEUsSUFBTUMsTUFBTSxHQUFHLElBQUlDLFVBQVUsRUFBRTtJQUMvQixJQUFNQyxRQUFRLEdBQUd6RCxDQUFDLENBQUNtRCxNQUFNLENBQUNHLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDbENDLE1BQU0sQ0FBQ0csU0FBUyxHQUFHLFlBQU07TUFDdkJSLGFBQWEsQ0FBQ0ssTUFBTSxDQUFDSSxNQUFNLENBQUM7SUFDOUIsQ0FBQztJQUNESixNQUFNLENBQUNLLGFBQWEsQ0FBQ0gsUUFBUSxDQUFDO0VBQ2hDLENBQUMsRUFBRSxFQUFFLENBQUM7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NpdmlsLy4vc3JjL2dlbmVyaWMvcmVnZXgvdXJsVmFsaWRhdG9ycy5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9Db21tb25Db21wb25lbnRzL092ZXJsYXkvc3R5bGUuanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvQ29tbW9uQ29tcG9uZW50cy9SaWNoVGV4dEVkaXRvci9JbmRleC5qc3giLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvQ29tbW9uQ29tcG9uZW50cy9SaWNoVGV4dEVkaXRvci9TdHlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9TdWJUb3BpY0Zvcm0vSW5kZXguanN4Iiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL1N1YlRvcGljRm9ybS9TdHlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9TdWJUb3BpY0Zvcm0vaG9va3MvY2hlY2tMaW5rVHlwZS5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9TdWJUb3BpY0Zvcm0vaG9va3MvdXNlR2V0TGlua01ldGFEYXRhT25CbHVyLmpzIiwid2VicGFjazovL2NpdmlsLy4vc3JjL3BhZ2VzL1N1YlRvcGljRm9ybS9ob29rcy91c2VIYW5kbGVTdWJtaXQuanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvVG9waWNGb3JtL2NvbXBvbmVudHMvVXBsb2FkSW1hZ2VJbnB1dC9JbmRleC5qc3giLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvVG9waWNGb3JtL2NvbXBvbmVudHMvVXBsb2FkSW1hZ2VJbnB1dC9TdHlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaXZpbC8uL3NyYy9wYWdlcy9Ub3BpY0Zvcm0vY29tcG9uZW50cy9VcGxvYWRNZWRpYS9JbmRleC5qc3giLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvVG9waWNGb3JtL2NvbXBvbmVudHMvVXBsb2FkTWVkaWEvU3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2l2aWwvLi9zcmMvcGFnZXMvVG9waWNGb3JtL2hvb2tzL3VzZU9uRmlsZUNoYW5nZUhhbmRsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHlvdVR1YmVVcmxWYWxpZGF0b3IgPSBuZXcgUmVnRXhwKC9eKCg/Omh0dHBzPzopP1xcL1xcLyk/KCg/Ond3d3xtKVxcLik/KCg/OnlvdXR1YmVcXC5jb218eW91dHUuYmUpKShcXC8oPzpbXFx3XFwtXStcXD92PXxlbWJlZFxcL3x2XFwvKT8pKFtcXHdcXC1dKykoXFxTKyk/JC9nbSlcbmV4cG9ydCBjb25zdCB0d2l0dGVyVXJsVmFsaWR0b3IgPSBuZXcgUmVnRXhwKC9odHRwKD86cyk/OlxcL1xcLyg/Ond3dyk/dHdpdHRlclxcLmNvbVxcLyhbYS16QS1aMC05X10rKS9nbSlcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBPdmVybGF5ID0gc3R5bGVkKCdkaXYnKWBcbiAgei1pbmRleDogOTk5OTk5O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgb3BhY2l0eTogMC4xO1xuYFxuIiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tdGhpcy1pbi1zZmMgKi9cbi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2NvbnRyb2wtaGFzLWFzc29jaWF0ZWQtbGFiZWwgKi9cbmltcG9ydCBSZWFjdCwge1xuICB1c2VDYWxsYmFjaywgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmLFxufSBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdFF1aWxsIGZyb20gJ3JlYWN0LXF1aWxsJ1xuXG5pbXBvcnQgJ3JlYWN0LXF1aWxsL2Rpc3QvcXVpbGwuc25vdy5jc3MnXG5cbmltcG9ydCB7IENvbnRhaW5lciwgRW1vamlCdXR0b24sIEVtb2ppQ29udGFpbmVyIH0gZnJvbSAnLi9TdHlsZSdcbmltcG9ydCB7IE92ZXJsYXkgfSBmcm9tICcuLi9PdmVybGF5L3N0eWxlJ1xuXG5jb25zdCBSaWNoVGV4dEVkaXRvciA9ICh7XG4gIGNvbnRlbnQsIHNldENvbnRlbnQsIHNldFRveGljaXR5U2NvcmUsXG59KSA9PiB7XG4gIGNvbnN0IFtpc0hpZGRlbiwgc2V0SXNIaWRkZW5dID0gdXNlU3RhdGUodHJ1ZSlcblxuICBjb25zdCBtb2R1bGVzID0ge1xuICAgIHRvb2xiYXI6IHtcbiAgICAgIGNvbnRhaW5lcjogJyN0b29sYmFyJyxcbiAgICB9LFxuICB9XG5cbiAgY29uc3QgaGFuZGxlT25DaGFuZ2UgPSB1c2VDYWxsYmFjaygoY3VyckNvbnRlbnQsIGRlbHRhLCBzb3VyY2UsIGVkaXRvcikgPT4ge1xuICAgIHNldENvbnRlbnQoe1xuICAgICAgcmF3SFRNTDogZWRpdG9yLmdldEhUTUwoKSxcbiAgICAgIGNvbnRlbnQ6IGVkaXRvci5nZXRDb250ZW50cygpLFxuICAgICAgcmF3VGV4dDogZWRpdG9yLmdldFRleHQoKSxcbiAgICB9KVxuICAgIGlmIChzZXRUb3hpY2l0eVNjb3JlKSBzZXRUb3hpY2l0eVNjb3JlKG51bGwpXG4gIH0sIFtdKVxuXG4gIGNvbnN0IHBpY2tlclJlZiA9IHVzZVJlZihudWxsKVxuICBjb25zdCBxdWlsbFJlZiA9IHVzZVJlZihudWxsKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHBpY2tlclJlZikge1xuICAgICAgY29uc3QgZW1vamlQaWNrZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd1bmljb2RlLWVtb2ppLXBpY2tlcicpXG4gICAgICBlbW9qaVBpY2tlci5hZGRFdmVudExpc3RlbmVyKCdlbW9qaS1waWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChxdWlsbFJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgY29uc3QgeyBlZGl0b3IgfSA9IHF1aWxsUmVmLmN1cnJlbnRcbiAgICAgICAgICBjb25zdCBjdXJzb3JQb3NpdGlvbiA9IGVkaXRvci5nZXRTZWxlY3Rpb24oKT8uaW5kZXggfHwgZWRpdG9yLmdldExlbmd0aCgpIC0gMVxuICAgICAgICAgIGVkaXRvci5pbnNlcnRUZXh0KGN1cnNvclBvc2l0aW9uLCBgJHtldmVudC5kZXRhaWwuZW1vaml9YClcbiAgICAgICAgICBlZGl0b3Iuc2V0U2VsZWN0aW9uKGN1cnNvclBvc2l0aW9uICsgMilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH0sIFtwaWNrZXJSZWYsIHF1aWxsUmVmXSlcblxuICBjb25zdCBmb3JtYXRzID0gWydib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnLCAnc3RyaWtlJywgJ2Jsb2NrcXVvdGUnLCAnY2xlYW4nXVxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwidGV4dC1lZGl0b3JcIj5cbiAgICAgIDxPdmVybGF5IGhpZGRlbj17aXNIaWRkZW59IG9uQ2xpY2s9eygpID0+IHNldElzSGlkZGVuKChwcmV2KSA9PiAhcHJldil9IC8+XG4gICAgICA8Q3VzdG9tVG9vbGJhciBzZXRJc0hpZGRlbj17c2V0SXNIaWRkZW59IHBpY2tlclJlZj17cGlja2VyUmVmfSBpc0hpZGRlbj17aXNIaWRkZW59IC8+XG4gICAgICA8UmVhY3RRdWlsbFxuICAgICAgICByZWY9e3F1aWxsUmVmfVxuICAgICAgICB0aGVtZT1cInNub3dcIlxuICAgICAgICB2YWx1ZT17Y29udGVudH1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxuICAgICAgICBtb2R1bGVzPXttb2R1bGVzfVxuICAgICAgICBmb3JtYXRzPXtmb3JtYXRzfVxuICAgICAgICBwbGFjZWhvbGRlcj1cIlNheSBzb21ldGhpbmcuLi5cIlxuICAgICAgLz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuXG5jb25zdCBDdXN0b21CdXR0b24gPSAoeyBpc0hpZGRlbiwgcGlja2VyUmVmLCBzZXRJc0hpZGRlbiB9KSA9PiAoXG4gIDw+XG4gICAgPHNwYW5cbiAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzSGlkZGVuKChwcmV2KSA9PiAhcHJldil9XG4gICAgICBvbktleURvd249eygpID0+IHNldElzSGlkZGVuKChwcmV2KSA9PiAhcHJldil9XG4gICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgIHRhYkluZGV4PXswfVxuICAgID5cbiAgICAgIPCfmYJcbiAgICA8L3NwYW4+XG4gICAgPEVtb2ppQ29udGFpbmVyIGhpZGRlbj17aXNIaWRkZW59PlxuICAgICAgPHVuaWNvZGUtZW1vamktcGlja2VyIHJlZj17cGlja2VyUmVmfSB2ZXJzaW9uPVwiMTQuMFwiIC8+XG4gICAgPC9FbW9qaUNvbnRhaW5lcj5cbiAgPC8+XG4pXG5cbmNvbnN0IEN1c3RvbVRvb2xiYXIgPSAoeyBzZXRJc0hpZGRlbiwgaXNIaWRkZW4sIHBpY2tlclJlZiB9KSA9PiAoXG4gIDxkaXYgaWQ9XCJ0b29sYmFyXCIgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nIH19PlxuICAgIDxkaXY+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJxbC1ib2xkXCIgLz5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cInFsLWl0YWxpY1wiIC8+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJxbC11bmRlcmxpbmVcIiAvPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwicWwtc3RyaWtlXCIgLz5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cInFsLWJsb2NrcXVvdGVcIiAvPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwicWwtY2xlYW5cIiAvPlxuXG4gICAgPC9kaXY+XG5cbiAgICA8RW1vamlCdXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cInFsLWluc2VydEVtb2ppXCI+XG4gICAgICA8Q3VzdG9tQnV0dG9uIHBpY2tlclJlZj17cGlja2VyUmVmfSBpc0hpZGRlbj17aXNIaWRkZW59IHNldElzSGlkZGVuPXtzZXRJc0hpZGRlbn0gLz5cbiAgICA8L0Vtb2ppQnV0dG9uPlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgUmljaFRleHRFZGl0b3JcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogLjVlbTtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICBtaW4td2lkdGg6IDkyJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAucWwtc25vdy5xbC10b29sYmFyOmFmdGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5xbC10b29sYmFyIHtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAuNWVtO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAuNWVtO1xuICB9XG5cbiAgLnFsLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogLjVlbTtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogLjVlbTtcbiAgfVxuXG4gICN0b29sYmFyIHtcbiAgICBidXR0b246YWZ0ZXIge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuYFxuXG5leHBvcnQgY29uc3QgRW1vamlCdXR0b24gPSBzdHlsZWQoJ2J1dHRvbicpYFxuICBwb3NpdGlvbjogcmVsYXRpdmUgO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICY6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuYFxuXG5leHBvcnQgY29uc3QgRW1vamlDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpYCBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgei1pbmRleDogOTk5OTk5OTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTkwJSwgLTkwJSkgc2NhbGUoLjgpO1xuYFxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1ib290c3RyYXAvTW9kYWwnXG5pbXBvcnQgeyBDb2xsYXBzZSwgRmFkZSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcblxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IEZvcm1paywgRmllbGQgfSBmcm9tICdmb3JtaWsnXG5cbmltcG9ydCB1c2VCaW5kRGlzcGF0Y2ggZnJvbSAnLi4vaG9va3MvcmVkdXgvdXNlQmluZERpc3BhdGNoJ1xuaW1wb3J0IHVzZUhhbmRsZVN1Ym1pdCBmcm9tICcuL2hvb2tzL3VzZUhhbmRsZVN1Ym1pdCdcbmltcG9ydCB1c2VHZXRMaW5rTWV0YURhdGFPbkJsdXIgZnJvbSAnLi9ob29rcy91c2VHZXRMaW5rTWV0YURhdGFPbkJsdXInXG5cbmltcG9ydCBJbnB1dCBmcm9tICcuLi9Db21tb25Db21wb25lbnRzL0Zvcm0vSW5wdXQvSW5kZXgnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL0NvbW1vbkNvbXBvbmVudHMvQnV0dG9uL0luZGV4J1xuXG5pbXBvcnQgdWlBY3Rpb25zIGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMvdWknXG5pbXBvcnQgdG9waWNBY3Rpb25zIGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMvdG9waWNzJ1xuXG5pbXBvcnQgVGhlbWVUb29sdGlwIGZyb20gJy4uL0NvbW1vbkNvbXBvbmVudHMvVG9vbHRpcC9JbmRleCdcbmltcG9ydCBVcGxvYWRNZWRpYUNvbnRhaW5lciBmcm9tICcuLi9Ub3BpY0Zvcm0vY29tcG9uZW50cy9VcGxvYWRNZWRpYS9JbmRleCdcbmltcG9ydCBEaXNwbGF5TWVkaWEgZnJvbSAnLi4vVG9waWNGb3JtL2NvbXBvbmVudHMvRGlzcGxheU1lZGlhL0luZGV4J1xuXG5pbXBvcnQge1xuICBGb3JtQ29udGFpbmVyLCBMZWZ0LCBSaWdodCwgRmxleERpdiwgQ29udGFpbmVyLCBJbnB1dHNDb250YWluZXIsIEFycm93LCBMaW5lLFxufSBmcm9tICcuL1N0eWxlJ1xuaW1wb3J0IHsgRG93bkFycm93Q2lyY2xlU3ZnIH0gZnJvbSAnLi4vLi4vc3Zncy9zdmdzJ1xuaW1wb3J0IFJpY2hUZXh0RWRpdG9yIGZyb20gJy4uL0NvbW1vbkNvbXBvbmVudHMvUmljaFRleHRFZGl0b3IvSW5kZXgnXG5cbmNvbnN0IHV1aWRSZWdFeCA9IG5ldyBSZWdFeHAoL1xcYlswLTlhLWZdezh9XFxiLVswLTlhLWZdezR9LVswLTlhLWZdezR9LVswLTlhLWZdezR9LVxcYlswLTlhLWZdezEyfVxcYi9nKVxuXG5jb25zdCBDcmVhdGVTdWJUb3BpY0Zvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZUxvY2F0aW9uKClcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtpbWdGaWxlLCBzZXRJbWdGaWxlXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFt2aWRlb0ZpbGUsIHNldFZpZGVvRmlsZV0gPSB1c2VTdGF0ZShudWxsKVxuXG4gIGNvbnN0IFtyb3RhdGUsIHNldFJvdGF0ZV0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBbY29udGVudCwgc2V0Q29udGVudF0gPSB1c2VTdGF0ZSgnJylcbiAgLy8gY29uc3QgdmFsaWRhdG9yID0gdXNlQ29uZmlnRm9ybUVycm9ycyhFUlJPUlMpXG4gIGNvbnN0IFt0b3BpY0lkXSA9IHBhdGhuYW1lLm1hdGNoKHV1aWRSZWdFeClcblxuICBjb25zdCB7IG1ldGFEYXRhLCBnZXRMaW5rTWV0YURhdGFPbkJsdXIgfSA9IHVzZUdldExpbmtNZXRhRGF0YU9uQmx1cigpXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IHVzZUhhbmRsZVN1Ym1pdChtZXRhRGF0YSwgdG9waWNJZClcblxuICBjb25zdCB7IGdldFRvcGljLCBjbG9zZU1vZGFsIH0gPSB1c2VCaW5kRGlzcGF0Y2goXG4gICAgdWlBY3Rpb25zLCB0b3BpY0FjdGlvbnMsXG4gIClcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKChzKSA9PiBzLnNlc3Npb24uY3VycmVudFVzZXIpXG4gIGNvbnN0IHRvcGljID0gdXNlU2VsZWN0b3IoKHMpID0+IHMudG9waWNzLmxpc3QpPy5maW5kKCh0KSA9PiB0LmlkID09PSB0b3BpY0lkKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0VG9waWModG9waWNJZCwgdXNlcj8uaWQpXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxGb3JtaWtcbiAgICAgICAgaW5pdGlhbFZhbHVlcz17eyB0aXRsZTogJycgfX1cbiAgICAgICAgdmFsaWRhdGU9eyh2YWx1ZXMpID0+IHtcbiAgICAgICAgICBjb25zdCBlcnJvcnMgPSB7fVxuICAgICAgICAgIGlmICghdmFsdWVzLnRpdGxlKSB7XG4gICAgICAgICAgICBlcnJvcnMudGl0bGUgPSAnVGl0bGUgSXMgUmVxdWlyZWQnXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBlcnJvcnNcbiAgICAgICAgfX1cbiAgICAgICAgb25TdWJtaXQ9eygodmFsdWVzLCBwYXJhbXMpID0+IGhhbmRsZVN1Ym1pdCh2YWx1ZXMsIHBhcmFtcywgY29udGVudCkpfVxuICAgICAgPlxuICAgICAgICB7KHsgaXNTdWJtaXR0aW5nLCBzZXRGaWVsZFZhbHVlIH0pID0+IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cbiAgICAgICAgICAgICAgPE1vZGFsLlRpdGxlPlxuICAgICAgICAgICAgICAgIENyZWF0ZSBTdWIgVG9waWMgUmVnYXJkaW5nIFRoZSBUb3BpY1xuICAgICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgICAge2BcIiR7dG9waWM/LnRpdGxlfVwiYH1cbiAgICAgICAgICAgICAgPC9Nb2RhbC5UaXRsZT5cbiAgICAgICAgICAgIDwvTW9kYWwuSGVhZGVyPlxuICAgICAgICAgICAgPEZvcm1Db250YWluZXI+XG4gICAgICAgICAgICAgIDxNb2RhbC5Cb2R5PlxuICAgICAgICAgICAgICAgIDxJbnB1dHNDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICA8TGVmdD5cbiAgICAgICAgICAgICAgICAgICAgPEZsZXhEaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGgyPiBUb3BpYyBEZXNjcmlwdGlvbiA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgIDxUaGVtZVRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBIZWFkZXI9XCJUb3BpYyBEZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwVGV4dD1cIlByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHRvcGljIHlvdSB3b3VsZCBsaWtlIHRvIGRpc2N1c3NcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRmxleERpdj5cbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRpdGxlXCIgY29tcG9uZW50PXtJbnB1dH0gd2lkdGg9XCIxMDAlXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBBIFRvcGljIFRpdGxlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInN1bW1hcnlcIiBjb21wb25lbnQ9e0lucHV0fSB3aWR0aD1cIjEwMCVcIiBwbGFjZWhvbGRlcj1cIkdpdmUgQSBTaG9ydCBPcGluaW9uIE9yIFBvaW50XCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvTGVmdD5cbiAgICAgICAgICAgICAgICAgIDxSaWdodD5cbiAgICAgICAgICAgICAgICAgICAgPEZsZXhEaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGgyPiBMaW5rIHRvIHdoYXQgeW91IHdhbnQgdG8gZGlzY3VzcyBoZXJlLi4uIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgPFRoZW1lVG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcEhlYWRlcj1cIkRpc2N1c3NlZCBDb250ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBUZXh0PVwiQWRkIGEgbGluayB0byB0aGUgZXh0ZXJuYWwgY29udGVudCB5b3Ugd291bGQgbGlrZSB0byBkaXNjdXNzIChcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuZyBhIFlvdVR1YmUgdmlkZW8sIFR3ZWV0LCBwdWJsaWNhdGlvbiwgb3IgYW55dGhpbmcgZWxzZSlcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRmxleERpdj5cblxuICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZT1cInVybFwiIG5hbWU9XCJjb250ZW50VXJsXCIgcGxhY2Vob2xkZXI9XCJMaW5rIFRvIENvbnRlbnRcIiBjb21wb25lbnQ9e0lucHV0fSB3aWR0aD1cIjEwMCVcIiBvbkJsdXI9e2dldExpbmtNZXRhRGF0YU9uQmx1cn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmUgLz5cbiAgICAgICAgICAgICAgICAgICAgPEZsZXhEaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGgyPiBBZGQgeW91ciBvd24gbWVkaWEgY29udGVudCA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgIDxUaGVtZVRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBIZWFkZXI9XCJVc2VyIFByb3ZpZGVkIENvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcFRleHQ9XCJUaGlzIGNvdWxkIGJlIGFuIGltYWdlLCBncmFwaGljLCBvciB2aWRlbyBwZXJ0YWluaW5nIHRvIHRoZSB0b3BpYyB5b3Ugd291bGQgbGlrZSB0byBkaXNjdXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXhEaXY+XG4gICAgICAgICAgICAgICAgICAgIDxVcGxvYWRNZWRpYUNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgIHNldEZpZWxkVmFsdWU9e3NldEZpZWxkVmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgaW1nRmlsZT17aW1nRmlsZX1cbiAgICAgICAgICAgICAgICAgICAgICB2aWRlb0ZpbGU9e3ZpZGVvRmlsZX1cbiAgICAgICAgICAgICAgICAgICAgICBzZXRJbWdGaWxlPXtzZXRJbWdGaWxlfVxuICAgICAgICAgICAgICAgICAgICAgIHNldFZpZGVvRmlsZT17c2V0VmlkZW9GaWxlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9SaWdodD5cbiAgICAgICAgICAgICAgICA8L0lucHV0c0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8TGluZSAvPlxuICAgICAgICAgICAgICAgIDxEaXNwbGF5TWVkaWFcbiAgICAgICAgICAgICAgICAgIGltZ0ZpbGU9e2ltZ0ZpbGV9XG4gICAgICAgICAgICAgICAgICB2aWRlb0ZpbGU9e3ZpZGVvRmlsZX1cbiAgICAgICAgICAgICAgICAgIG1ldGFEYXRhPXttZXRhRGF0YX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxSaWNoVGV4dEVkaXRvciBjb250ZW50PXtjb250ZW50fSBzZXRDb250ZW50PXtzZXRDb250ZW50fSAvPlxuICAgICAgICAgICAgICAgIDxBcnJvd1xuICAgICAgICAgICAgICAgICAgcm90YXRlPXtyb3RhdGV9XG4gICAgICAgICAgICAgICAgICAvLyBpY29uPXs8RG93bkFycm93Q2lyY2xlU3ZnIC8+fVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRPcGVuKCFvcGVuKVxuICAgICAgICAgICAgICAgICAgICBzZXRSb3RhdGUocm90YXRlICsgKG9wZW4gPyAtMTgwIDogMTgwKSlcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPERvd25BcnJvd0NpcmNsZVN2ZyAvPlxuICAgICAgICAgICAgICAgIDwvQXJyb3c+XG4gICAgICAgICAgICAgICAgPEZhZGUgaW49eyFvcGVufT5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIEVudGVyIFN1cHBsZW1lbnRhbCBJbmZvcm1hdGlvblxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9GYWRlPlxuICAgICAgICAgICAgICAgIDxJbnB1dHNDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICA8Q29sbGFwc2UgaW49e29wZW59PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdoaXRlU3BhY2U6ICdub3dyYXAnLCB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgICAgICAgICAgICAgICAgIDxGbGV4RGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPiBFbnRlciBMaW5rcyBUbyBTdXBwbGVtZW50YWwgRXZpZGVuY2UuLi4gPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUaGVtZVRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcFRleHQ9XCJQcm92aWRlIGxpbmtzIHRvIGFkZGl0aW9uYWwgcmVhZGluZyBvciBldmlkZW5jZSBldGMuLi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwSGVhZGVyPVwiU3VwcGxlbWVudGFsIEluZm9ybWF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9GbGV4RGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCB0eXBlPVwidXJsXCIgbmFtZT1cIkV2aWRlbmNlIExpbmsgMVwiIGNvbXBvbmVudD17SW5wdXR9IHdpZHRoPVwiMTAwJVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGU9XCJ1cmxcIiBuYW1lPVwiRXZpZGVuY2UgTGluayAyXCIgY29tcG9uZW50PXtJbnB1dH0gd2lkdGg9XCIxMDAlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZT1cInVybFwiIG5hbWU9XCJFdmlkZW5jZSBMaW5rIDNcIiBjb21wb25lbnQ9e0lucHV0fSB3aWR0aD1cIjEwMCVcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvQ29sbGFwc2U+XG4gICAgICAgICAgICAgICAgPC9JbnB1dHNDb250YWluZXI+XG4gICAgICAgICAgICAgIDwvTW9kYWwuQm9keT5cbiAgICAgICAgICAgICAgPE1vZGFsLkZvb3Rlcj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17aXNTdWJtaXR0aW5nfSBvbkNsaWNrPXtjbG9zZU1vZGFsfT5cbiAgICAgICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9PlxuICAgICAgICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvTW9kYWwuRm9vdGVyPlxuICAgICAgICAgICAgPC9Gb3JtQ29udGFpbmVyPlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9Gb3JtaWs+XG4gICAgPC9Db250YWluZXI+XG5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVTdWJUb3BpY0Zvcm1cbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBGb3JtIH0gZnJvbSAnZm9ybWlrJ1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWBcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBoZWlnaHQ6IDkwdmg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxZW07XG4gIGJveC1zaGFkb3c6ICA1cHggNXB4IDVweCAtM3B4ICMwMDAwMDA7XG5cbiAgaDEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy1ib3R0b206IC41ZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICB9XG4gYFxuXG5leHBvcnQgY29uc3QgRmxleERpdiA9IHN0eWxlZCgnZGl2JylgIFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG5gXG5cbmV4cG9ydCBjb25zdCBGb3JtQ29udGFpbmVyID0gc3R5bGVkKEZvcm0pYFxuICBtYXJnaW4tdG9wOiAxZW07XG4gICBoMiB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgbWFyZ2luOiAwIDFlbTtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgSW5wdXRzQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWBcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG5gXG5cbmV4cG9ydCBjb25zdCBMZWZ0ID0gc3R5bGVkKCdkaXYnKWBcbiAgZGlzcGxheTogZmxleDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogNTAlO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcbmBcbmV4cG9ydCBjb25zdCBSaWdodCA9IHN0eWxlZCgnZGl2JylgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDUwJTtcbmBcblxuZXhwb3J0IGNvbnN0IFN1cHBsZW1lbnRhbEluZm9ybWF0aW9uID0gc3R5bGVkKCdzZWN0aW9uJylgXG5cbmBcblxuZXhwb3J0IGNvbnN0IElucHV0V3JhcHBlciA9IHN0eWxlZCgnZGl2JylgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5gXG5cbmV4cG9ydCBjb25zdCBBcnJvdyA9IHN0eWxlZCgnc3BhbicpYFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNmb3JtOiAkeyhwcm9wcykgPT4gYHJvdGF0ZSgke3Byb3BzLnJvdGF0ZX1kZWcpYH07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuYFxuXG5leHBvcnQgY29uc3QgTGluZSA9IHN0eWxlZCgnaHInKWAgXG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMmVtIDEuM2VtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDgsNDgsNTApO1xuICBoZWlnaHQ6IC41cHg7XG4gIGJvcmRlcjogbm9uZTtcbmBcbiIsImltcG9ydCB7IHlvdVR1YmVVcmxWYWxpZGF0b3IsIHR3aXR0ZXJVcmxWYWxpZHRvciB9IGZyb20gJy4uLy4uLy4uL2dlbmVyaWMvcmVnZXgvdXJsVmFsaWRhdG9ycydcblxuZXhwb3J0IGRlZmF1bHQgKHVybCkgPT4ge1xuICBjb25zdCB5dFVybCA9IHVybC5zZWFyY2goeW91VHViZVVybFZhbGlkYXRvcikgPT09IC0xID8gbnVsbCA6ICd5dFVybCdcbiAgY29uc3QgdHdlZXRVcmwgPSB1cmwuc2VhcmNoKHR3aXR0ZXJVcmxWYWxpZHRvcikgPT09IC0xID8gbnVsbCA6ICd0d2VldFVybCdcbiAgcmV0dXJuIHl0VXJsIHx8IHR3ZWV0VXJsXG59XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgZ2V0TGlua01ldGFEYXRhIH0gZnJvbSAnLi4vLi4vLi4vYXBpL3YxL3RvcGljcy90b3BpY3NfYXBpX3V0aWwnXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY29uc3QgW21ldGFEYXRhLCBzZXRNZXRhRGF0YV0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBnZXRMaW5rTWV0YURhdGFPbkJsdXIgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xuICAgIGdldExpbmtNZXRhRGF0YShlLmN1cnJlbnRUYXJnZXQudmFsdWUpLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICBzZXRNZXRhRGF0YShkYXRhKVxuICAgIH0pXG4gIH0sIFtdKVxuXG4gIHJldHVybiB7IG1ldGFEYXRhLCBnZXRMaW5rTWV0YURhdGFPbkJsdXIgfVxufVxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB0b3BpY0FjdGlvbnMgZnJvbSAnLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy90b3BpY3MvaW5kZXgnXG5pbXBvcnQgc3VidG9waWNBY3Rpb25zIGZyb20gJy4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvc3VidG9waWNzL2luZGV4J1xuXG5pbXBvcnQgdXNlQmluZERpc3BhdGNoIGZyb20gJy4uLy4uL2hvb2tzL3JlZHV4L3VzZUJpbmREaXNwYXRjaCdcblxuaW1wb3J0IGNoZWNrTGlua1R5cGUgZnJvbSAnLi9jaGVja0xpbmtUeXBlJ1xuXG5leHBvcnQgZGVmYXVsdCAobWV0YURhdGEsIHRvcGljSWQpID0+IHtcbiAgY29uc3QgeyBjcmVhdGVTdWJUb3BpYywgdXBsb2FkVG9waWNNZWRpYSB9ID0gdXNlQmluZERpc3BhdGNoKHRvcGljQWN0aW9ucywgc3VidG9waWNBY3Rpb25zKVxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3IoKHMpID0+IHMuc2Vzc2lvbi5jdXJyZW50VXNlcilcblxuICByZXR1cm4gdXNlQ2FsbGJhY2soKHZhbHVlcywgeyBzZXRTdWJtaXR0aW5nLCByZXNldEZvcm0gfSwgY29udGVudCkgPT4ge1xuICAgIGNvbnN0IGVMaW5rcyA9IE9iamVjdC5lbnRyaWVzKHZhbHVlcykubWFwKChbaywgdl0pID0+IChrLmluY2x1ZGVzKCdFdmlkZW5jZScpID8gdiA6IG51bGwpKS5maWx0ZXIoQm9vbGVhbilcbiAgICBjb25zdCBsaW5rVHlwZSA9IGNoZWNrTGlua1R5cGUodmFsdWVzLmNvbnRlbnRVcmwpXG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIC4uLnZhbHVlcyxcbiAgICAgIGRlc2NyaXB0aW9uOiBjb250ZW50LFxuICAgICAgY3JlYXRlZEJ5OiB1c2VyLnVzZXJuYW1lLFxuICAgICAgdXNlcklkOiB1c2VyLmlkLFxuICAgICAgZXZpZGVuY2VMaW5rczogZUxpbmtzLFxuICAgICAgW2xpbmtUeXBlXTogdmFsdWVzLmNvbnRlbnRVcmwsXG4gICAgICB0aHVtYkltZ1VybDogbWV0YURhdGEub2dJbWFnZT8udXJsLFxuICAgICAgdG9waWNJZCxcbiAgICAgIHR3ZWV0VXJsOiBudWxsLFxuICAgICAgaW1hZ2VVcmw6IG51bGwsXG4gICAgICB2b2RVcmw6IG51bGwsXG4gICAgfVxuICAgIGlmICh2YWx1ZXMuZmlsZSBpbnN0YW5jZW9mIEZpbGUpIHtcbiAgICAgIGNvbnN0IFtmaWxlVHlwZSwgZmlsZUZvcm1hdF0gPSB2YWx1ZXMuZmlsZS50eXBlLnNwbGl0KCcvJylcbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLCB2YWx1ZXMuZmlsZSlcbiAgICAgIHVwbG9hZFRvcGljTWVkaWEoZm9ybURhdGEsIGZpbGVUeXBlLCBmaWxlRm9ybWF0LCBkYXRhKVxuICAgIH0gZWxzZSB7XG4gICAgICBjcmVhdGVTdWJUb3BpYyhkYXRhKVxuICAgIH1cbiAgICBzZXRTdWJtaXR0aW5nKGZhbHNlKVxuICAgIHJlc2V0Rm9ybSh7fSlcbiAgfSwgW21ldGFEYXRhLCB0b3BpY0lkXSlcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1wcm9wcy1uby1zcHJlYWRpbmcgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExhYmVsLCBVcGxvYWRJbnB1dCB9IGZyb20gJy4vU3R5bGUnXG5cbmNvbnN0IFVwbG9hZEltYWdlSW5wdXQgPSAoe1xuICBmaWVsZCwgb25DaGFuZ2UsIGljb24sIGZpbGVUeXBlLCBkaXNhYmxlZCxcbn0pID0+IChcbiAgPExhYmVsPlxuICAgIHtpY29ufVxuICAgIDxVcGxvYWRJbnB1dCBkYXRhLWZpbGV0eXBlPXtmaWxlVHlwZX0gdHlwZT1cImZpbGVcIiB7Li4uZmllbGR9IGlkPXtmaWVsZC5uYW1lfSBvbkNoYW5nZT17b25DaGFuZ2V9IGRpc2FibGVkPXtkaXNhYmxlZH0gLz5cbiAgPC9MYWJlbD5cblxuKVxuXG5leHBvcnQgZGVmYXVsdCBVcGxvYWRJbWFnZUlucHV0XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgTGFiZWwgPSBzdHlsZWQoJ2xhYmVsJylgIFxuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMCU7XG4gIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBVcGxvYWRJbnB1dCA9IHN0eWxlZCgnaW5wdXQnKWAgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gIGxlZnQ6IC05OTk5OXJlbTtcbmBcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgRmllbGQgfSBmcm9tICdmb3JtaWsnXG5cbmltcG9ydCBVcGxvYWRGaWxlSW5wdXQgZnJvbSAnLi4vVXBsb2FkSW1hZ2VJbnB1dC9JbmRleCdcbmltcG9ydCB7IFZpZGVvU3ZnLCBJbWFnZVN2ZyB9IGZyb20gJy4uLy4uLy4uLy4uL3N2Z3Mvc3ZncydcblxuaW1wb3J0IHVzZU9uRmlsZUNoYW5nZUhhbmRsZXIgZnJvbSAnLi4vLi4vaG9va3MvdXNlT25GaWxlQ2hhbmdlSGFuZGxlcidcblxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi9TdHlsZS9pbmRleCdcblxuY29uc3QgVXBsb2FkTWVkaWFDb250YWluZXIgPSAoe1xuICBzZXRGaWVsZFZhbHVlLCBpbWdGaWxlLCB2aWRlb0ZpbGUsIHNldEltZ0ZpbGUsIHNldFZpZGVvRmlsZSxcbn0pID0+IHtcbiAgY29uc3Qgb25GaWxlQ2hhbmdlID0gdXNlT25GaWxlQ2hhbmdlSGFuZGxlcigpXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxGaWVsZFxuICAgICAgICBmaWxlVHlwZT1cImZpbGVcIlxuICAgICAgICBuYW1lPVwidG9waWNJbWFnZVwiXG4gICAgICAgIGRpc2FibGVkPXtCb29sZWFuKHZpZGVvRmlsZSl9XG4gICAgICAgIGZpbGU9e2ltZ0ZpbGV9XG4gICAgICAgIGNvbXBvbmVudD17VXBsb2FkRmlsZUlucHV0fVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uRmlsZUNoYW5nZShlLCBzZXRGaWVsZFZhbHVlLCBzZXRJbWdGaWxlKX1cbiAgICAgICAgaWNvbj17PEltYWdlU3ZnIC8+fVxuICAgICAgLz5cbiAgICAgIDxGaWVsZFxuICAgICAgICBmaWxlVHlwZT1cImZpbGVcIlxuICAgICAgICBuYW1lPVwidG9waWNWaWRlb1wiXG4gICAgICAgIGRpc2FibGVkPXtCb29sZWFuKGltZ0ZpbGUpfVxuICAgICAgICBmaWxlPXt2aWRlb0ZpbGV9XG4gICAgICAgIGNvbXBvbmVudD17VXBsb2FkRmlsZUlucHV0fVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uRmlsZUNoYW5nZShlLCBzZXRGaWVsZFZhbHVlLCBzZXRWaWRlb0ZpbGUpfVxuICAgICAgICBpY29uPXs8VmlkZW9TdmcgLz59XG4gICAgICAvPlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVwbG9hZE1lZGlhQ29udGFpbmVyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKWAgXG4gIG1hcmdpbi1sZWZ0OiAxLjNlbTtcbiAgcGFkZGluZzogLjVlbTtcbiAgYm9yZGVyLXJhZGl1czogLjVlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYm94LXNoYWRvdzogIDVweCA1cHggNXB4IC0zcHggI0FBQUFBQTtcbiAgYmFja2dyb3VuZDogI0U1RTVFNTtcblxuYFxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gdXNlQ2FsbGJhY2soKGUsIHNldEZpZWxkVmFsdWUsIHNldFN0YXRlVmFsdWUpID0+IHtcbiAgc2V0RmllbGRWYWx1ZShlLnRhcmdldC5kYXRhc2V0LmZpbGV0eXBlLCBlLmN1cnJlbnRUYXJnZXQuZmlsZXNbMF0pXG4gIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgY29uc3QgY3VyckZpbGUgPSBlLnRhcmdldC5maWxlc1swXVxuICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xuICAgIHNldFN0YXRlVmFsdWUocmVhZGVyLnJlc3VsdClcbiAgfVxuICByZWFkZXIucmVhZEFzRGF0YVVSTChjdXJyRmlsZSlcbn0sIFtdKVxuIl0sIm5hbWVzIjpbInlvdVR1YmVVcmxWYWxpZGF0b3IiLCJSZWdFeHAiLCJ0d2l0dGVyVXJsVmFsaWR0b3IiLCJzdHlsZWQiLCJPdmVybGF5IiwiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiUmVhY3RRdWlsbCIsIkNvbnRhaW5lciIsIkVtb2ppQnV0dG9uIiwiRW1vamlDb250YWluZXIiLCJSaWNoVGV4dEVkaXRvciIsImNvbnRlbnQiLCJzZXRDb250ZW50Iiwic2V0VG94aWNpdHlTY29yZSIsImlzSGlkZGVuIiwic2V0SXNIaWRkZW4iLCJtb2R1bGVzIiwidG9vbGJhciIsImNvbnRhaW5lciIsImhhbmRsZU9uQ2hhbmdlIiwiY3VyckNvbnRlbnQiLCJkZWx0YSIsInNvdXJjZSIsImVkaXRvciIsInJhd0hUTUwiLCJnZXRIVE1MIiwiZ2V0Q29udGVudHMiLCJyYXdUZXh0IiwiZ2V0VGV4dCIsInBpY2tlclJlZiIsInF1aWxsUmVmIiwiZW1vamlQaWNrZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJjdXJyZW50IiwiY3Vyc29yUG9zaXRpb24iLCJnZXRTZWxlY3Rpb24iLCJpbmRleCIsImdldExlbmd0aCIsImluc2VydFRleHQiLCJkZXRhaWwiLCJlbW9qaSIsInNldFNlbGVjdGlvbiIsImZvcm1hdHMiLCJwcmV2IiwiQ3VzdG9tQnV0dG9uIiwiQ3VzdG9tVG9vbGJhciIsIndpZHRoIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiZGl2IiwiTW9kYWwiLCJDb2xsYXBzZSIsIkZhZGUiLCJ1c2VTZWxlY3RvciIsInVzZUxvY2F0aW9uIiwiRm9ybWlrIiwiRmllbGQiLCJ1c2VCaW5kRGlzcGF0Y2giLCJ1c2VIYW5kbGVTdWJtaXQiLCJ1c2VHZXRMaW5rTWV0YURhdGFPbkJsdXIiLCJJbnB1dCIsIkJ1dHRvbiIsInVpQWN0aW9ucyIsInRvcGljQWN0aW9ucyIsIlRoZW1lVG9vbHRpcCIsIlVwbG9hZE1lZGlhQ29udGFpbmVyIiwiRGlzcGxheU1lZGlhIiwiRm9ybUNvbnRhaW5lciIsIkxlZnQiLCJSaWdodCIsIkZsZXhEaXYiLCJJbnB1dHNDb250YWluZXIiLCJBcnJvdyIsIkxpbmUiLCJEb3duQXJyb3dDaXJjbGVTdmciLCJ1dWlkUmVnRXgiLCJDcmVhdGVTdWJUb3BpY0Zvcm0iLCJwYXRobmFtZSIsIm9wZW4iLCJzZXRPcGVuIiwiaW1nRmlsZSIsInNldEltZ0ZpbGUiLCJ2aWRlb0ZpbGUiLCJzZXRWaWRlb0ZpbGUiLCJyb3RhdGUiLCJzZXRSb3RhdGUiLCJtYXRjaCIsInRvcGljSWQiLCJtZXRhRGF0YSIsImdldExpbmtNZXRhRGF0YU9uQmx1ciIsImhhbmRsZVN1Ym1pdCIsImdldFRvcGljIiwiY2xvc2VNb2RhbCIsInVzZXIiLCJzIiwic2Vzc2lvbiIsImN1cnJlbnRVc2VyIiwidG9waWMiLCJ0b3BpY3MiLCJsaXN0IiwiZmluZCIsInQiLCJpZCIsInRpdGxlIiwidmFsdWVzIiwiZXJyb3JzIiwicGFyYW1zIiwiaXNTdWJtaXR0aW5nIiwic2V0RmllbGRWYWx1ZSIsIndoaXRlU3BhY2UiLCJGb3JtIiwiU3VwcGxlbWVudGFsSW5mb3JtYXRpb24iLCJJbnB1dFdyYXBwZXIiLCJwcm9wcyIsInVybCIsInl0VXJsIiwic2VhcmNoIiwidHdlZXRVcmwiLCJnZXRMaW5rTWV0YURhdGEiLCJzZXRNZXRhRGF0YSIsImUiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJ0aGVuIiwiZGF0YSIsInN1YnRvcGljQWN0aW9ucyIsImNoZWNrTGlua1R5cGUiLCJjcmVhdGVTdWJUb3BpYyIsInVwbG9hZFRvcGljTWVkaWEiLCJzZXRTdWJtaXR0aW5nIiwicmVzZXRGb3JtIiwiZUxpbmtzIiwiT2JqZWN0IiwiZW50cmllcyIsIm1hcCIsImsiLCJ2IiwiaW5jbHVkZXMiLCJmaWx0ZXIiLCJCb29sZWFuIiwibGlua1R5cGUiLCJjb250ZW50VXJsIiwiZGVzY3JpcHRpb24iLCJjcmVhdGVkQnkiLCJ1c2VybmFtZSIsInVzZXJJZCIsImV2aWRlbmNlTGlua3MiLCJvZ0ltYWdlIiwiZmlsZSIsIkZpbGUiLCJ0eXBlIiwic3BsaXQiLCJmaWxlVHlwZSIsImZpbGVGb3JtYXQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiTGFiZWwiLCJVcGxvYWRJbnB1dCIsIlVwbG9hZEltYWdlSW5wdXQiLCJmaWVsZCIsIm9uQ2hhbmdlIiwiaWNvbiIsImRpc2FibGVkIiwibmFtZSIsIlVwbG9hZEZpbGVJbnB1dCIsIlZpZGVvU3ZnIiwiSW1hZ2VTdmciLCJ1c2VPbkZpbGVDaGFuZ2VIYW5kbGVyIiwib25GaWxlQ2hhbmdlIiwic2V0U3RhdGVWYWx1ZSIsInRhcmdldCIsImRhdGFzZXQiLCJmaWxldHlwZSIsImZpbGVzIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsImN1cnJGaWxlIiwib25sb2FkZW5kIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCJdLCJzb3VyY2VSb290IjoiIn0=