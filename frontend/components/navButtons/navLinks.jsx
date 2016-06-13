import React from 'react';
import { Link } from 'react-router';

function NavLinks() {
  return (
    <ul className="nav-links">
      <li>
        <Link to="">Home</Link>
      </li>
      <li>
        <Link
          to={{
            pathname: '/articles/top',
            query: { impressionable: 'true' },
          }}
        >Top Stories
        </Link>
      </li>
      <li>
        <a href="http://www.vadimfainberg.com/">Portfolio</a>
      </li>
    </ul>
  );
}

module.exports = NavLinks;
