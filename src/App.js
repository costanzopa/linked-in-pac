import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Login from './components/Login';
import { selectCurrentUser } from './redux/user/user.selector';
import { userLogin, userLogout } from './redux/user/user.actions';
import { auth } from './firebase/firebase.utils';
import './App.css';

function App() {
  const user = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          userLogin({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL,
          })
        );
      } else {
        dispatch(userLogout());
      }
    });
  }, [dispatch]);
  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          {/* Widgets */}
        </div>
      )}
    </div>
  );
}

export default App;
