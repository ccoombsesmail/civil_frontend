import React, { useState, useCallback, useMemo } from 'react'
import { TabView, TabPanel } from 'primereact/tabview'
import { Badge } from 'primereact/badge'

import { Container } from './Style/index'
import {
  All, Defendant, Reporter, Jury, General,
} from '../../../../enums/tribunal_comment_type'
import TribunalCommentTabContent from './components/TribunalCommentTabContent/TribunalCommentTabContent'

function TribunalComments({ contentId, reportStats }) {
  const [activeIndex, setActiveIndex] = useState(0)

  const headerTemplate = useCallback((options, badgeValue, severity) => (
    <button type="button" onClick={options.onClick} className={options.className}>
      {options.titleElement}
      <Badge value={badgeValue} className="ml-3" severity={severity} />
    </button>
  ), [reportStats])

  const tabs = useMemo(() => (reportStats ? [
    { header: All, commentType: All, numComments: reportStats.numAllComments},
    {
      header: Defendant, commentType: Defendant, numComments: reportStats.numDefendantComments, severity: 'danger ',
    },
    {
      header: 'Reporters', commentType: Reporter, numComments: reportStats.numReporterComments,
    },
    {
      header: Jury, commentType: Jury, numComments: reportStats.numJuryComments,
    },
    { header: General, commentType: General, numComments: reportStats.numGeneralComments },
  ] : []), [reportStats])

  return (
    <Container>
      <TabView className="w-full" activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
        {tabs.map((tab, index) => (
          <TabPanel key={tab + String(index)} header={tab.header} headerTemplate={(options) => headerTemplate(options, tab.numComments, tab.severity)}>
            <TribunalCommentTabContent contentId={contentId} commentType={tab.commentType} setActiveIndex={setActiveIndex} />
          </TabPanel>
        ))}
      </TabView>
    </Container>
  )
}

export default TribunalComments
