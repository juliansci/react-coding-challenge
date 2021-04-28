import { useEffect } from 'react';
import { getCommentsByPostId } from 'api/post.api';
import PostDetail from 'components/PostDetail';
import { Redirect, useParams } from 'react-router';
import styles from './PostDetail.module.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setComments, addComment } from 'store/postSlice';

function PostDetailPage() {
  const { id } = useParams();
  const posts = useSelector((state) => state.post.posts);
  const dispatch = useDispatch();

  const post = posts.find((post) => post.id === +id);

  useEffect(() => {
    if (post && !post.comments) {
      getCommentsByPostId(post.id).then((data) => {
        dispatch(
          setComments({
            postId: post.id,
            comments: data,
          })
        );
      });
    }
  }, [post, dispatch]);

  function handleAddComment(comment) {
    dispatch(addComment({ postId: post.id, comment }));
  }
  return (
    <div className={styles.container}>
      <Link className={styles.buttonBack} to={`/posts`}>
        <button type="button">Return to list</button>
      </Link>
      {!post ? <Redirect to="/" /> : <PostDetail post={post} onAddComment={handleAddComment} />}
    </div>
  );
}

export default PostDetailPage;
