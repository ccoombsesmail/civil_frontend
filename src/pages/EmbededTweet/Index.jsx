import React, { useEffect, useRef, useCallback } from "react";
import { bindActionCreators } from "redux";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import Card from "../CommonComponents/Card/Index";
import ActionToolbar from "../CommonComponents/ActionToolbar/Index";
import LinkSection from "../CommonComponents/LinkSection/Index";
import { TweetContainer } from "./Style";

import { getTimeSince } from "../../generic/string/dateFormatter";
import uiActionCreators from "../../redux/actions/ui";
import topicActionCreators from "../../redux/actions/topics";
import useCalculateCardHeightEffect from "./hooks/useCalculateCardHeightEffect";
import useOpenModal from "../hooks/useOpenModal";
import { REPLY } from '../App/Modal/Index'

const EmbededTweet = ({ topic, user, showLinks }) => {
  const tweetRef = useRef(null);
  const history = useHistory();
  const dispatch = useDispatch();
  const openModal = useOpenModal(REPLY)
  const { updateTopicLikes } = bindActionCreators(
    { ...uiActionCreators, ...topicActionCreators },
    dispatch
  );
  const height = useCalculateCardHeightEffect(tweetRef, showLinks);
  const updateLikes = useCallback(() => {
    updateTopicLikes({
      id: topic?.id,
      userId: user?.id,
      increment: !topic?.liked,
    });
  }, [topic]);

  useEffect(() => {
    if (topic?.tweetHtml) {
      if (tweetRef.current) {
        tweetRef.current.innerHTML =
          topic?.tweetHtml?.toString() || "<span>Nothing</span>";
      }
    }
  }, [topic?.tweetHtml]);
  
  return (
    <Card
      onClick={() => history.push(`/topics/${topic?.id}/subtopics/`)}
      username={topic?.createdBy}
      iconSrc={`${topic?.createdByIconSrc}`}
      tweetRef={tweetRef}
      summary={topic?.summary}
      time={getTimeSince(topic?.createdAt)}
      height={height}
    >
      <TweetContainer height={height} ref={tweetRef}> </TweetContainer>
      <LinkSection topic={topic} showLinks={showLinks} />
      <ActionToolbar
        liked={topic?.liked}
        likes={topic?.likes}
        onCommentClick={openModal}
        updateLikes={updateLikes}
      />
    </Card>
  );
};

export default EmbededTweet;
