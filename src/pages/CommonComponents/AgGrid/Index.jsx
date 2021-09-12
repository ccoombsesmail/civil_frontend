import React from 'react'
import { AgGridReact } from 'ag-grid-react'

import { GridContainer } from './Style'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'

const AgGrid = ({ rowData, columnDefs, ...rest }) => {
  // const [gridApi, setGridApi] = useState(null)
  // const [gridColumnApi, setGridColumnApi] = useState(null)

  const onGridReady = (params) => {
    // setGridApi(params.api)
    // setGridColumnApi(params.columnApi)
    params.api.sizeColumnsToFit()
  }

  return (
    <GridContainer className="ag-theme-alpine">
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        animateRows
        onGridReady={onGridReady}
        {...rest}
      />
    </GridContainer>
  )
}

export default AgGrid
