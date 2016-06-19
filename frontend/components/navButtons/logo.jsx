import React from 'react';
import { Link } from 'react-router';

function Logo() {
  return (
    <b className="nav-logo">
      <Link to="" className="nav-logo-text">
        <strong>Seance</strong>
      </Link>

      <Link to="" >
        <img alt="" className="nav-logo-icon" />
      </Link>
    </b>
  );
}

export default Logo;
