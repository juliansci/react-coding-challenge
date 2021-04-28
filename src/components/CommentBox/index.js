import styles from './CommentBox.module.scss';

function CommentBox() {
  return (
    <div className={styles.container}>
      <textarea placeholder="Write your comment"></textarea>
      <button>Send</button>
    </div>
  );
}

export default CommentBox;
