/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
const commonProps = {
  cellStyle: { fontWeight: 'bold' },
  // cellRendererFramework: CenteredCellRenderer,
}

export const subTopicDefs = [{
  headerName: 'Created By',
  field: 'createdBy',
  ...commonProps,
}, {
  headerName: 'Title',
  field: 'title',
  ...commonProps,
}]
