import React from 'react'
import './Expandable.css'

function Expandable({ children, isOpen }) {
  return (
    <div className={`w-full expander  ${isOpen ? 'expanded' : ''}`}>
      <div className="expander-content">
        {children}
      </div>
    </div>
  )
}

export default Expandable
