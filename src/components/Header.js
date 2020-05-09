import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {

  return(
    <>
      <nav className="navbar is-dark">
        <div className="container">
          {/* logo */}
          <div className="navbar-brand">
            <Link to="/" className="navbar-item is-size-2">Stories by Sarah</Link>
          </div>

          {/* menu items */}
          <div className="navbar-end">
            {/* TODO: Add new story */}
          </div>
        </div>
      </nav>
    </>
  );  
}
