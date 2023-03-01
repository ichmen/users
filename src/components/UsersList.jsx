import React, { useEffect, useReducer } from 'react';
import { connect } from 'react-redux';
import { albumsSelector, postsSelector, usersSelector } from '../actions.js/usersSelector';
import * as Getters from '../actions.js/users.actions';
import User from './User';
import NewWindow from './NewWindow';
import Modal from './Modal';
import Posts from './Posts';
const defaultState = {
  isModalVisible: false,
  isWindowWisible: false,
  filteredAlbums: [],
  filteredPosts: [],
};

function UsersList({ users, getUsers, posts, getPosts, getAlbums, albums }) {
  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    defaultState,
  );
  useEffect(() => {
    getUsers();
    getPosts();
    getAlbums();
  }, []);
  if (!users) {
    return null;
  }

  function postsClickHandler(id) {
    if (state.isWindowWisible) {
      alert('Only one pop-up allowed');
      return;
    }
    const filteredPosts = posts.slice().filter(({ userId }) => userId === id);
    setState({ isWindowWisible: true, filteredPosts });
  }

  function albumsClickHandler(id) {
    const filteredAlbums = albums.slice().filter(({ userId }) => userId === id);
    setState({ isModalVisible: true, filteredAlbums });
  }
  function closeModal() {
    setState({ isModalVisible: false });
  }
  function closeWindow() {
    setState({ isWindowWisible: false });
  }
  return (
    <div className="container">
      <table className="users-table">
        <thead className="users-table__head">
          <tr className="dashboard-head">
            <th className="users-table__head">Name</th>
            <th className="users-table__head">Username</th>
            <th className="users-table__head">e-mail</th>
            <th className="users-table__head"></th>
            <th className="users-table__head"></th>
          </tr>
        </thead>
        <tbody className="users-table__body">
          {users.map(user => (
            <User
              user={user}
              key={user.id}
              postsClickHandler={postsClickHandler}
              albumsClickHandler={albumsClickHandler}
            />
          ))}
        </tbody>
      </table>
      {state.isWindowWisible && (
        <NewWindow closeWindowPortal={closeWindow}>
          <Posts posts={state.filteredPosts} />
        </NewWindow>
      )}
      {state.isModalVisible && <Modal albums={state.filteredAlbums} closeModal={closeModal} />}
    </div>
  );
}

const mapState = store => {
  return {
    users: usersSelector(store),
    posts: postsSelector(store),
    albums: albumsSelector(store),
  };
};

const mapDispatch = {
  getUsers: Getters.getUsers,
  getAlbums: Getters.getAlbums,
  getPosts: Getters.getPosts,
};
export default connect(mapState, mapDispatch)(UsersList);
