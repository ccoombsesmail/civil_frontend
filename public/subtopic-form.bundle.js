(self["webpackChunkcivil"] = self["webpackChunkcivil"] || []).push([["subtopic-form"],{

/***/ "./src/generic/regex/urlValidators.js":
/*!********************************************!*\
  !*** ./src/generic/regex/urlValidators.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "youTubeUrlValidator": () => (/* binding */ youTubeUrlValidator),
/* harmony export */   "twitterUrlValidtor": () => (/* binding */ twitterUrlValidtor)
/* harmony export */ });
var youTubeUrlValidator = new RegExp(/^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/gm);
var twitterUrlValidtor = new RegExp(/http(?:s)?:\/\/(?:www)?twitter\.com\/([a-zA-Z0-9_]+)/gm);

/***/ }),

/***/ "./src/pages/CommonComponents/RichTextEditor/Index.jsx":
/*!*************************************************************!*\
  !*** ./src/pages/CommonComponents/RichTextEditor/Index.jsx ***!
  \*************************************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/charlescoombs/deployments/civil_frontend/src/pages/CommonComponents/RichTextEditor/Index.jsx: Unexpected token, expected \"}\" (82:68)\n\n\u001b[0m \u001b[90m 80 |\u001b[39m \u001b[36mconst\u001b[39m \u001b[33mCustomButton\u001b[39m \u001b[33m=\u001b[39m ({ isHidden\u001b[33m,\u001b[39m pickerRef\u001b[33m,\u001b[39m setIsHidden }) \u001b[33m=>\u001b[39m (\u001b[0m\n\u001b[0m \u001b[90m 81 |\u001b[39m   \u001b[33m<\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 82 |\u001b[39m     \u001b[33m<\u001b[39m\u001b[33mspan\u001b[39m role\u001b[33m=\u001b[39m\u001b[32m\"button\"\u001b[39m onClick\u001b[33m=\u001b[39m{() \u001b[33m=>\u001b[39m setIsHidden((prev) \u001b[33m=>\u001b[39m \u001b[33m!\u001b[39mprev) onClick\u001b[33m=\u001b[39m{() \u001b[33m=>\u001b[39m setIsHidden((prev) \u001b[33m=>\u001b[39m \u001b[33m!\u001b[39mprev)}\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m                                                                     \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 83 |\u001b[39m       🙂\u001b[0m\n\u001b[0m \u001b[90m 84 |\u001b[39m     \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mspan\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 85 |\u001b[39m     \u001b[33m<\u001b[39m\u001b[33mEmojiContainer\u001b[39m hidden\u001b[33m=\u001b[39m{isHidden}\u001b[33m>\u001b[39m\u001b[0m\n    at Object._raise (/Users/charlescoombs/deployments/civil_frontend/node_modules/@babel/parser/lib/index.js:476:17)\n    at Object.raiseWithData (/Users/charlescoombs/deployments/civil_frontend/node_modules/@babel/parser/lib/index.js:469:17)\n    at Object.raise (/Users/charlescoombs/deployments/civil_frontend/node_modules/@babel/parser/lib/index.js:430:17)\n    at Object.unexpected (/Users/charlescoombs/deployments/civil_frontend/node_modules/@babel/parser/lib/index.js:3789:16)\n    at Object.expect (/Users/charlescoombs/deployments/civil_frontend/node_modules/@babel/parser/lib/index.js:3773:28)\n    at Object.jsxParseExpressionContainer (/Users/charlescoombs/deployments/civil_frontend/node_modules/@babel/parser/lib/index.js:7647:10)\n    at Object.jsxParseAttributeValue (/Users/charlescoombs/deployments/civil_frontend/node_modules/@babel/parser/lib/index.js:7604:21)\n    at Object.jsxParseAttribute (/Users/charlescoombs/deployments/civil_frontend/node_modules/@babel/parser/lib/index.js:7665:38)\n    at Object.jsxParseOpeningElementAfterName (/Users/charlescoombs/deployments/civil_frontend/node_modules/@babel/parser/lib/index.js:7685:28)\n    at Object.jsxParseOpeningElementAt (/Users/charlescoombs/deployments/civil_frontend/node_modules/@babel/parser/lib/index.js:7678:17)\n    at Object.jsxParseElementAt (/Users/charlescoombs/deployments/civil_frontend/node_modules/@babel/parser/lib/index.js:7710:33)\n    at Object.jsxParseElementAt (/Users/charlescoombs/deployments/civil_frontend/node_modules/@babel/parser/lib/index.js:7726:32)\n    at Object.jsxParseElement (/Users/charlescoombs/deployments/civil_frontend/node_modules/@babel/parser/lib/index.js:7793:17)\n    at Object.parseExprAtom (/Users/charlescoombs/deployments/civil_frontend/node_modules/@babel/parser/lib/index.js:7807:19)\n    at Object.parseExprSubscripts (/Users/charlescoombs/deployments/civil_frontend/node_modules/@babel/parser/lib/index.js:12149:23)\n    at Object.parseUpdate (/Users/charlescoombs/deployments/civil_frontend/node_modules/@babel/parser/lib/index.js:12129:21)\n    at Object.parseMaybeUnary (/Users/charlescoombs/deployments/civil_frontend/node_modules/@babel/parser/lib/index.js:12104:23)\n    at Object.parseMaybeUnaryOrPrivate (/Users/charlescoombs/deployments/civil_frontend/node_modules/@babel/parser/lib/index.js:11901:61)\n    at Object.parseExprOps (/Users/charlescoombs/deployments/civil_frontend/node_modules/@babel/parser/lib/index.js:11908:23)\n    at Object.parseMaybeConditional (/Users/charlescoombs/deployments/civil_frontend/node_modules/@babel/parser/lib/index.js:11878:23)\n    at Object.parseMaybeAssign (/Users/charlescoombs/deployments/civil_frontend/node_modules/@babel/parser/lib/index.js:11833:21)\n    at /Users/charlescoombs/deployments/civil_frontend/node_modules/@babel/parser/lib/index.js:11791:39\n    at Object.allowInAnd (/Users/charlescoombs/deployments/civil_frontend/node_modules/@babel/parser/lib/index.js:13823:12)\n    at Object.parseMaybeAssignAllowIn (/Users/charlescoombs/deployments/civil_frontend/node_modules/@babel/parser/lib/index.js:11791:17)\n    at Object.parseParenAndDistinguishExpression (/Users/charlescoombs/deployments/civil_frontend/node_modules/@babel/parser/lib/index.js:12901:28)\n    at Object.parseExprAtom (/Users/charlescoombs/deployments/civil_frontend/node_modules/@babel/parser/lib/index.js:12476:23)\n    at Object.parseExprAtom (/Users/charlescoombs/deployments/civil_frontend/node_modules/@babel/parser/lib/index.js:7812:20)\n    at Object.parseExprSubscripts (/Users/charlescoombs/deployments/civil_frontend/node_modules/@babel/parser/lib/index.js:12149:23)\n    at Object.parseUpdate (/Users/charlescoombs/deployments/civil_frontend/node_modules/@babel/parser/lib/index.js:12129:21)\n    at Object.parseMaybeUnary (/Users/charlescoombs/deployments/civil_frontend/node_modules/@babel/parser/lib/index.js:12104:23)\n    at Object.parseMaybeUnaryOrPrivate (/Users/charlescoombs/deployments/civil_frontend/node_modules/@babel/parser/lib/index.js:11901:61)\n    at Object.parseExprOps (/Users/charlescoombs/deployments/civil_frontend/node_modules/@babel/parser/lib/index.js:11908:23)\n    at Object.parseMaybeConditional (/Users/charlescoombs/deployments/civil_frontend/node_modules/@babel/parser/lib/index.js:11878:23)\n    at Object.parseMaybeAssign (/Users/charlescoombs/deployments/civil_frontend/node_modules/@babel/parser/lib/index.js:11833:21)\n    at Object.parseFunctionBody (/Users/charlescoombs/deployments/civil_frontend/node_modules/@babel/parser/lib/index.js:13433:24)\n    at Object.parseArrowExpression (/Users/charlescoombs/deployments/civil_frontend/node_modules/@babel/parser/lib/index.js:13412:10)");

/***/ }),

/***/ "./src/pages/SubTopicForm/Index.jsx":
/*!******************************************!*\
  !*** ./src/pages/SubTopicForm/Index.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/node_modules/react-router/index.js");
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "FlexDiv": () => (/* binding */ FlexDiv),
/* harmony export */   "FormContainer": () => (/* binding */ FormContainer),
/* harmony export */   "InputsContainer": () => (/* binding */ InputsContainer),
/* harmony export */   "Left": () => (/* binding */ Left),
/* harmony export */   "Right": () => (/* binding */ Right),
/* harmony export */   "SupplementalInformation": () => (/* binding */ SupplementalInformation),
/* harmony export */   "InputWrapper": () => (/* binding */ InputWrapper),
/* harmony export */   "Arrow": () => (/* binding */ Arrow),
/* harmony export */   "Line": () => (/* binding */ Line)
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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
//# sourceMappingURL=subtopic-form.bundle.js.map