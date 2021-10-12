import React, { useEffect, useRef, useCallback } from "react";
import { bindActionCreators } from "redux";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import Card from "../CommonComponents/Card/Index";
import ActionToolbar from "../CommonComponents/ActionToolbar/Index";
import LinkSection from "../CommonComponents/LinkSection/Index";
import { VideoPlayer, Description } from "./Style";

import { getTimeSince } from "../../generic/string/dateFormatter";
import uiActionCreators from "../../redux/actions/ui";
import topicActionCreators from "../../redux/actions/topics";
import { REPLY } from '../App/Modal/Index'
import useSetInnerHtml from "../hooks/useSetInnerHtml";

const VideoShowPage = ({ topic, user, src, showLinks }) => {
  const descRef = useRef(null)
  const history = useHistory();
  const dispatch = useDispatch();
  const { openModal, updateTopicLikes } = bindActionCreators(
    { ...uiActionCreators, ...topicActionCreators },
    dispatch
  );
  const updateLikes = useCallback(() => {
    updateTopicLikes({
      id: topic?.id,
      userId: user?.id,
      increment: !topic?.liked,
    });
  }, [topic]);

  useSetInnerHtml(descRef, topic?.description)


  return (
    <>
    <VideoPlayer src={src}/> 
    <Card
      onClick={() => history.push(`/topics/${topic?.id}/subtopics/`)}
      username={topic?.createdBy}
      iconSrc={`${topic?.createdByIconSrc}`}
      summary={topic?.summary}
      time={getTimeSince(topic?.createdAt)}
    >
      <Description>
        <span ref={descRef} />
      </Description>
      <LinkSection topic={topic} showLinks={showLinks} />
      <ActionToolbar
        liked={topic?.liked}
        likes={topic?.likes}
        onCommentClick={() => openModal(REPLY)}
        updateLikes={updateLikes}
      />
    </Card>
    </>
  );
};

export default VideoShowPage;
