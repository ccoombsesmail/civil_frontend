import React, { useCallback, useEffect, useState } from 'react'

import { Line } from '../../../CommonComponents/Line'
import TabContent from '../../../CommonComponents/NonBootstrapTabs/components/TabContent/Index'
import TabNavItem from '../../../CommonComponents/NonBootstrapTabs/components/TabNavItem/Index'
import { Glider, TabNav } from '../../../CommonComponents/NonBootstrapTabs/Style'
import CommentColumn from '../../../pages/DiscussionsPage/components/CommentColumn/Index'
import { ColumnContainer } from '../../../pages/DiscussionsPage/components/CommentThread/Style'
import useCategorizeComments from './hooks/useCategorizeComments'
import { Container } from './Style/index'
import { useLazyGetAllTribunalCommentsQuery, useGetAllTribunalCommentsQueryState } from "../../../../api/services/tribunal_comments.ts";
import { All, Defendant, Reporter, Jury, General } from '../../../../enums/tribunal_comment_type'

function TribunalComments({ contentId }) {
  const [key, setKey] = useState(0)
  // const comments = useCategorizeComments(tribunalComments)
  const [trigger] = useLazyGetAllTribunalCommentsQuery();

  const { data: allComments } = useGetAllTribunalCommentsQueryState({ contentId, commentType: All})
  const { data: defendentComments } = useGetAllTribunalCommentsQueryState({ contentId, commentType: Defendant})

  const { data: reporterComments } = useGetAllTribunalCommentsQueryState({ contentId, commentType:  Reporter})

  const { data: juryComments } = useGetAllTribunalCommentsQueryState({ contentId, commentType: Jury})

  const { data: generalComments } = useGetAllTribunalCommentsQueryState({ contentId, commentType: General})

  const onTabClick = useCallback((commentType) => {
    trigger({contentId, commentType})

  })


  useEffect(() => {
    if (contentId && All) {
      trigger({contentId, commentType: All})
    }
  }, [])

  return (
    <>
      <Container>
        <TabNav pill>
          <TabNavItem onClick={() => onTabClick(All)} title="All" id={0} activeTab={key} setActiveTab={setKey} contentCount={allComments?.length} />
          <TabNavItem onClick={() => onTabClick(Defendant)} title="Defendant" id={1} activeTab={key} setActiveTab={setKey} contentCount={defendentComments?.length} />
          <TabNavItem onClick={() => onTabClick(Reporter)} title="Reporters" id={2} activeTab={key} setActiveTab={setKey} contentCount={reporterComments?.length} />
          <TabNavItem onClick={() => onTabClick(Jury)} title="Jury" id={3} activeTab={key} setActiveTab={setKey} contentCount={juryComments?.length} />
          <TabNavItem onClick={() => onTabClick(General)} title="General" id={4} activeTab={key} setActiveTab={setKey} contentCount={generalComments?.length} />

          <Glider className="glider" />
        </TabNav>

        <TabContent id={0} activeTab={key}>
          <ColumnContainer>
            <CommentColumn reportedContentId={contentId} comments={allComments || []} commentSentiment="All" color="white" commentType={All} />
          </ColumnContainer>
        </TabContent>
        <TabContent id={1} activeTab={key}>
          <ColumnContainer>
            <CommentColumn reportedContentId={contentId} comments={defendentComments || []} commentSentiment="Defendant" color="white" commentType={Defendant} />
          </ColumnContainer>
        </TabContent>
        <TabContent id={2} activeTab={key}>
          <ColumnContainer>
            <CommentColumn reportedContentId={contentId} comments={reporterComments || []} commentSentiment="Reporter" color="white" commentType={Reporter} />
          </ColumnContainer>
        </TabContent>
        <TabContent id={3} activeTab={key}>
          <ColumnContainer>
            <CommentColumn reportedContentId={contentId} comments={juryComments || []} commentSentiment="Jury" color="white" commentType={Jury} />
          </ColumnContainer>
        </TabContent>
        <TabContent id={4} activeTab={key}>
          <ColumnContainer>
            <CommentColumn reportedContentId={contentId} comments={generalComments || []} commentSentiment="General Public" color="white" commentType={General} />
          </ColumnContainer>
        </TabContent>
      </Container>

    </>
  )
}

export default TribunalComments
