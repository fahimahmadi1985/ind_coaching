import React from 'react'

function Header(props) {
  return (
      <div>
          <p>Welcome {props.firstName}{ props.lastName}</p>
    </div>
  )
}

export default Header