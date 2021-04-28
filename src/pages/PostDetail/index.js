import { useEffect, useState } from 'react';
import { getCommentsByPostId } from 'api/post.api';
import PostDetail from 'components/PostDetail';
import { usePostContext } from 'contexts/PostsContext';
import { useParams } from 'react-router';
import styles from './PostDetail.module.scss';
import { Link } from 'react-router-dom';

function PostDetailPage() {
  const { id } = useParams();
  const { posts, updatePost } = usePostContext();
  const post = posts.find((post) => post.id === +id);

  useEffect(() => {
    if (post && !post.comments) {
      getCommentsByPostId(post.id).then((data) => {
        post.comments = data;
        console.log(post);
        updatePost(post);
      });
    }
  }, [post, updatePost]);

  return (
    <div className={styles.container}>
      <Link className={styles.buttonBack} to={`/posts`}>
        <button type="button">Return to list</button>
      </Link>
      {!post ? <div>Post not found... </div> : <PostDetail post={post} />}
    </div>
  );
}

export default PostDetailPage;
