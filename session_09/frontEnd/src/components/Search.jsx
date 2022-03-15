import React from 'react';
import { useParams } from 'react-router-dom';

function Search() {
    let params = useParams();
  return (
      <div>
          <h4>This is answer for { params.searchkey}</h4>
    </div>
  )
}

export default Search