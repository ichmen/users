import React from 'react';
import { store } from './actions.js/users.store';
import { Provider } from 'react-redux';
import UsersList from './components/UsersList';

export default function App() {
  return (
    <Provider store={store}>
      <UsersList />
    </Provider>
  );
}
