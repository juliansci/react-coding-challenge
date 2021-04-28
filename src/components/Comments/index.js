import CommentItem from 'components/CommentItem';
import CommentBox from 'components/CommentBox';
import styles from './Comments.module.scss';

function Comments({ comments }) {
  return (
    <div className={styles.container}>
      <h2>Comments</h2>
      <CommentBox />
      {comments &&
        comments.map((comment) => {
          return <CommentItem key={comment.id} comment={comment} />;
        })}
    </div>
  );
}

export default Comments;
