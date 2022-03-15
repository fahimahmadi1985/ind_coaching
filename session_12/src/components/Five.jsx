import React, { useContext } from 'react';
import { nameContext } from '../App.jsx';

function Five() {
    let data = useContext(nameContext);
    console.log(data)
  return (
      <div>Five {data }</div>
  )
}

export default Five