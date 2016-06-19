import React, { PropTypes } from 'react';

function NewUserFormOpts(props) {
  const klass = props.isVisible ? '' : 'hidden';
  return (
    <div className={klass}>
      <label htmlFor="fullname"></label>
      <input
        onChange={e => props.updateField('fullname', e)}
        type="text"
        placeholder="Full name"
      />
      <label htmlFor="email" />
      <input
        onChange={e => props.updateField('email', e)}
        type="email"
        placeholder="Email"
      />
    </div>
  );
}

NewUserFormOpts.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  updateField: PropTypes.func.isRequired,
};

export default NewUserFormOpts;
