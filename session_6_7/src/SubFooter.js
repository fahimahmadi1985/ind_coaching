import React from 'react'
import Subsubfooter from './Subsubfooter'

function SubFooter(props) {
  return (
      <div>
          <h3>Subfooter: Name:{ props.fname}</h3>
          <Subsubfooter name={ props.fname}/>
    </div>
  )
}

export default SubFooter