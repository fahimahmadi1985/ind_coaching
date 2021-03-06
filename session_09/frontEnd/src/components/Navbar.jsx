import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
    let navigate = useNavigate();
    const [keyword, setKeyword] = useState('');

    function submitSearch(e) {
        e.preventDefault();
        navigate(`/search/${keyword}`)
    }

  return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
          <div className="container-fluid">
              <Link className="navbar-brand" to="/">Navbar</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link " aria-current="page" to="/about">About</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link " aria-current="page" to="/contact">Contact</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link " aria-current="page" to="/dashboard">Dashboard</Link>
                      </li>
                  </ul>
                  <form className="d-flex">
                      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>{setKeyword(e.target.value)}} />
                          <button className="btn btn-outline-success" type="submit" onClick={submitSearch}>Search</button>
                  </form>
              </div>
          </div>
      </nav>
  )
}

export default Navbar