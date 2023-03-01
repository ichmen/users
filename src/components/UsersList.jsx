import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { usersSelector } from '../actions.js/usersSelector';
import { getUsers } from '../actions.js/users.actions';

function UsersList({ users }) {
  console.log(users);
  useEffect(() => getUsers(), [users]);
  return <div></div>;
}

// const mapDispatch = {
//     changeFlightsMode: Actions.modeChanged,
//   };
const mapState = store => {
  return { users: usersSelector(store) };
};
export default connect(mapState)(UsersList);
