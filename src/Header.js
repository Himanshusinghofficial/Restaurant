import React from 'react'

const Header = () => {
    return (
      <nav class="white" role="navigation">
      <div class="nav-wrapper container">
      <i class="fas fa-utensils" style={{color:'black',marginRight:'20px'}}></i><a id="logo-container" href="#" class="brand-logo" style={{color:'black'}}>food App</a>
        <ul class="right hide-on-med-and-down" >
        <li><a href="#" style={{color:'black'}}>Help</a></li>
        <li><a href="#" style={{color:'black'}}>About</a></li>
        </ul>
        <ul id="nav-mobile" class="sidenav">
        <li><a href="#">Help</a></li>
        <li><a href="#">About</a></li>
        </ul>
        <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      </div>
    </nav>
    )
}

export default Header;