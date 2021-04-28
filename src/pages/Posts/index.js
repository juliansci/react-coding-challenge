import { useState, useEffect } from 'react';
import PostItem from 'components/PostItem';
import { getPosts } from 'api/post.api';
import styles from './Posts.module.scss';
import { usePostContext } from 'contexts/PostsContext';

function PostsPage() {
  const { posts, updatePosts } = usePostContext();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!posts || !posts.length) {
      getPosts()
        .then((data) => {
          updatePosts(data);
          setIsLoading(false);
        })
        .catch((error) => setError(error));
    }
  }, [posts, updatePosts]);

  return (
    <>
      <h1 className={styles.title}>Posts List</h1>
      {isLoading && <div>Loading posts... </div>}
      {error && (
        <div role="alert" className={styles.error}>
          {error}
        </div>
      )}
      {posts && (
        <div data-testid="posts-list-container">
          {posts.map((post) => (
            <PostItem key={post.id} post={post} />
          ))}
        </div>
      )}
    </>
  );
}

export default PostsPage;
