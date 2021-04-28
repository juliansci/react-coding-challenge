import Comments from 'components/Comments';
import styles from './PostDetail.module.scss';

function PostDetail({ post }) {
  return (
    <div className={styles.container} data-testid="PostItem">
      <div className={styles.title}>{post.title}</div>
      <div className={styles.creatorInfo}>
        <div className={styles.imageContainer}>
          <img src={`https://randomuser.me/api/portraits/women/${post.userId}.jpg`} alt={`User ${post.userId}`} />
        </div>
        <span>User {post.userId}</span>
      </div>
      <div className={styles.description}>{post.body}</div>
      <Comments comments={post.comments} />
    </div>
  );
}

export default PostDetail;