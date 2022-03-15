import React from 'react';
import { useParams } from 'react-router-dom';

function Dashboard() {
    let params = useParams();
    
  return (
      <div>
          <h3>Welcome {params.name} { params.lname}</h3>
    </div>
  )
}

export default Dashboard