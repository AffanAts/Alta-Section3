import React from 'react';
import { Link } from "react-router-dom";

const Header = (props) => {
    return (
<>
{/*
<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="fs-4 text nav-link disabled" href="index">React Routing</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav link">
      <Link className="nav-link active" to="/">Home</Link>
      <Link className="nav-link active" to="/about">About App</Link>
      <Link className="nav-link active" to="/author">About Author</Link>
      </div>
    </div>
  </div>
</nav>*/}
<div class="collapse" id="navbarToggleExternalContent">
  <div class="bg-dark p-4">
    <h5 class="text-white h4">Collapsed content</h5>
    <Link className="nav-link active text-white h4" to="/">Home</Link>
    <Link className="nav-link active text-white h4" to="/about">About App</Link>
    <Link className="nav-link active text-white h4" to="/author">About Author</Link>
  </div>
</div>
<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>
</>

    )
};

export default Header;