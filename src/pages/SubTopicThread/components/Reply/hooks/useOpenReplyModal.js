import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { bindActionCreators } from "redux";

import uiActionCreators from "../../../../../redux/actions/ui/index";

import { uuidRegEx } from "../../../../../generic/regex/uuid";
import { REPLY } from "../../../../App/Modal/Index";

export default (commentId) => {
  const { pathname } = useLocation()
  const subtopicId = pathname.match(uuidRegEx)[1]
  const history = useHistory();
  const dispatch = useDispatch();
  const { openModal } = bindActionCreators(uiActionCreators, dispatch);
  return useCallback(() => {
    history.push(subtopicId, {type: "COMMENT_REPLY", commentId})
    openModal(REPLY)
  }, [])
}