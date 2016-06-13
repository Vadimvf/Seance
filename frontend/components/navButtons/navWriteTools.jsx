import React from 'react';

import Profile from './profile';
import NavAction from '../../actions/navAction';

function navWriteTools() {
  return (
    <ul className="nav-tools">
      <li className="nav-write--publish">
        <button onClick={NavAction.requestPublish}>
          Publish
        </button>
      </li>
      <li className="nav-write--delete">
        <button onClick={NavAction.requestSave}>
          Save Draft
        </button>
      </li>
      <li className="nav-write--delete">
        <button onClick={NavAction.requestDelete}>
          Delete Draft
        </button>
      </li>
      <li>
        <Profile />
      </li>
    </ul>
  );
}

module.exports = navWriteTools;
