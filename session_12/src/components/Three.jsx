import React, {useContext, useRef} from 'react'
import Four from './Four'
import { nameContext } from '../App.jsx';

function Three() {
    let name = useContext(nameContext);
    let nameRef = useRef();

    
    return (
        <div>
          Three {name}
            <input type="text" name="firstName" id="firstName" ref={nameRef} />
            <button onClick={()=>{nameRef.current.hidden = !nameRef.current.hidden}}>hide</button>
          {nameRef.current.value = 'fahim'}
          
    </div>
  )
}

export default Three