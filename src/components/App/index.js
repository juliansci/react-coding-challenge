import './index.css';
import React, { useState, useEffect } from 'react';

import PostsList from 'components/PostsList';
import { getPosts } from 'api/post.api';

function App() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPosts().then((posts) => {
      setPosts(posts);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="App">
      <h1>Posts List</h1>
      <div className="posts-container">{isLoading ? <>Loading posts... </> : <PostsList posts={posts} />}</div>
    </div>
  );
}

export default App;
