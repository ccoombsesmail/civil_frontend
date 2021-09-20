import React from 'react'

import IconButton from '../../../../CommonComponents/IconButton/Index'
import {BsArrowBarLeft, BsArrowBarRight} from 'react-icons/bs'

import {OverlayTrigger, Tooltip} from 'react-bootstrap'


class ExpandButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  
  render() {
    return (
        <OverlayTrigger
          placement="right"
          overlay={ <Tooltip id={`tooltip-${"right"}`}>
                Tooltip on <strong>{"right"}</strong>.
              </Tooltip>}
          >
            <IconButton
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            icon={ open ? <BsArrowBarLeft size={30} /> : <BsArrowBarRight size={30} /> }
            /> 
        </OverlayTrigger>
    )
  }

}


export default ExpandButton