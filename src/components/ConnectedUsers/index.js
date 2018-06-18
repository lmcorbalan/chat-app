import React from 'react';
import PropTypes from 'prop-types';

const ConnectedUsers = (props) => {
  return (
    <nav className="col-sm-3 col-md-2 sidebar">
      <div className="h5 users-title">
        <h5>Users</h5>
      </div>
      <ul className="nav nav-pills flex-column">
        {props.users.map(user => (
          <li className="nav-item username">
            <span className="nav-link">{user.name}</span>
          </li>
        ))}
      </ul>
    </nav>
  )
}

ConnectedUsers.propTypes = {
  users: PropTypes.array.isRequired
}

export default ConnectedUsers;
