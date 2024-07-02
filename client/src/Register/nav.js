import React from 'react';
import { Link } from 'react-router-dom';
function Nav() {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-dark bg-info sticky-top">
  <div class="container-fluid">
    <div className='col-3'>
    <a class="navbar-brand" href="#" >Navbar</a>
    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse col-9" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
       <Link to='/'> <li class="nav-item">
          <a class="nav-link active "  aria-current="page" href="#">Home</a>
        </li>
        </Link>
        <li class="nav-item">
          <a class="nav-link active mar" aria-current="page" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active mar" aria-current="page" href="#">services</a>
        </li>
        <Link to='/goes'><li class="nav-item">
          <a class="nav-link active mar" aria-current="page" href="#">Table data's</a>
        </li>
        </Link>
        
      </ul>
             
        <button class="btn bg-success" type="submit">Let's Go</button>
      
    </div>
  </div>
</nav>

    </>
  )
}

export default Nav;