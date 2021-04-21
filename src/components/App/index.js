import './index.css';
import React, { useState, useEffect } from 'react';

import PostsList from 'components/PostsList';
import { getPosts } from 'api/post.api';

function App() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    getPosts()
      .then((posts) => {
        setPosts(posts);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setErrorMessage(error);
      });
  }, []);
  return (
    <div className="App">
      <h1>Posts List</h1>
      {isLoading ? (
        <div>Loading posts... </div>
      ) : errorMessage ? (
        <div role="alert" style={{ color: 'red' }}>
          {errorMessage}
        </div>
      ) : (
        <div className="posts-container" data-testid="posts-container">
          <PostsList posts={posts} />
        </div>
      )}
    </div>
  );
}

export default App;
