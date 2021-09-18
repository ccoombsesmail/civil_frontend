/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
import { useMemo } from "react"
import { useSelector } from "react-redux"
import { GoToSubTopic } from "../components/Actions/Index"
const commonProps = {
  cellStyle: { fontWeight: 'bold' },
  // cellRendererFramework: CenteredCellRenderer,
}

export default () => {
  const subtopics = useSelector(s => s.subtopics.list)
  return useMemo(() => [{
      headerName: 'Sub-Topic',
      field: 'title',
      ...commonProps,
    }, {
      headerName: 'Created By',
      field: 'createdBy',
      ...commonProps,
    }, {
      maxWidth: 70,
      cellRendererFramework: GoToSubTopic,
    }, {
      field: 'id',
      hide: true,
    }
  ], [subtopics])
}

