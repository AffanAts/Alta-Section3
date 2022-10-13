import React from 'react';
import { Link } from "react-router-dom";

const Header = (props) => {
    return (
<>
<div class="collapse" id="navbarToggleExternalContent">
  <div class="bg-dark p-4">
    <h5 class="text-white h4">Collapsed content</h5>
    <Link className="nav-link active text-white h4" to="/">Home</Link>
    <Link className="nav-link active text-white h4" to="/about">About App</Link>
    <Link className="nav-link active text-white h4" to="/author">About Author</Link>
  </div>
</div>
<nav class="navbar navbar-dark bg-dark">
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