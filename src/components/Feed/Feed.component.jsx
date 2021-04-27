import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';

import { selectCurrentUser } from '../../redux/user/user.selector';

import InputOption from './InputOption';

import './Feed.styles.css';
import Post from './Post';
import { firestore, firebase } from '../../firebase/firebase.utils';

const Feed = (props) => {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState('');

  const user = useSelector(selectCurrentUser);

  useEffect(() => {
    firestore
      .collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshoot) => {
        setPosts(
          snapshoot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  const submitPost = (e) => {
    e.preventDefault();
    firestore.collection('posts').add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoURL || '',
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput('');
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form onSubmit={submitPost}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={submitPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write Article"
            color="#7FC15E"
          />
        </div>
      </div>
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
    </div>
  );
};
export default Feed;
