import React, {useContext} from 'react'
import Three from './Three'
import { nameContext } from '../App.jsx';

function Two() {
    let name = useContext(nameContext);
  return (
      <div>
          Two {name}
          <Three/>
    </div>
  )
}

export default Two