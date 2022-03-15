import React, {useContext} from 'react'
import Five from './Five'
import { userContext } from '../App.jsx';

function Four() {
    let user = useContext(userContext);
  return (
      <div>
          Four {user.username} {user.pass}
          <Five/>
    </div>
  )
}

export default Four