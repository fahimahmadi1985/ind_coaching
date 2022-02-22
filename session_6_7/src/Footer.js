import React from 'react'
import SubFooter from './SubFooter'

function Footer(props) {
    
  return (
      <div>
          <h2>Footer: Name: { props.firstName}</h2>
          <SubFooter fname={ props.firstName}/>
    </div>
  )
}

export default Footer