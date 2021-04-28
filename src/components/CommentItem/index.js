import styles from './CommentItem.module.scss';

function CommentItem({ comment }) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{comment.name}</div>
      <div className={styles.creator}>By {comment.email}</div>
      <div className={styles.description}>{comment.body}</div>
    </div>
  );
}

export default CommentItem;
