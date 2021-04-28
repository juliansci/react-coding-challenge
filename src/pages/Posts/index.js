import { useState, useEffect } from 'react';
import PostItem from 'components/PostItem';
import { getPosts } from 'api/post.api';
import styles from './Posts.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setPosts } from 'store/postSlice';

function PostsPage() {
  const posts = useSelector((state) => state.post.posts);
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!posts || !posts.length) {
      getPosts()
        .then((data) => {
          dispatch(setPosts(data));
        })
        .catch((error) => setError(error));
    }
  }, [posts, dispatch]);

  return (
    <>
      <h1 className={styles.title}>Posts List</h1>
      {error && (
        <div role="alert" className={styles.error}>
          {error}
        </div>
      )}
      {!posts || !posts.length ? (
        <div>Loading posts... </div>
      ) : (
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
