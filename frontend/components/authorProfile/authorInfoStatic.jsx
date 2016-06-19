import React, { PropTypes } from 'react';

function StaticInfo(props) {
  return (
    <div>
      <h2>{props.author.fullname}</h2>
      <h3>{props.author.username}</h3>
      <h4>{props.author.email}</h4>
      <p>{props.author.bio}</p>
    </div>
  );
}

StaticInfo.propTypes = {
  author: PropTypes.object.isRequired,
};

export default StaticInfo;
