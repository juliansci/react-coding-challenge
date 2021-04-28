import { Link } from 'react-router-dom';
import styles from './PostItem.module.scss';

function PostItem({ post }) {
  return (
    <div className={styles.container} data-testid="PostItem">
      <Link className={styles.title} to={`/post/${post.id}`}>
        <div>{post.title}</div>
      </Link>
      <div className={styles.creatorInfo}>
        <div className={styles.imageContainer}>
          <img src={`https://randomuser.me/api/portraits/women/${post.userId}.jpg`} alt={`User ${post.userId}`} />
        </div>
        <span>User {post.userId}</span>
      </div>
      <div className={styles.description}>{post.body}</div>
    </div>
  );
}

export default PostItem;

/*      <button type="button" className="view-comments-button" onClick={handleViewComments}>
       {viewComments ? <>Hide Comments</> : <>View Comments</>}
      </button>
      {renderComments()}*/
/* const [viewComments, setViewComments] = useState(false);
 const getCommentsByPostIdCallback = useCallback(() => {
    if (post && post.id) {
      return getCommentsByPostId(post.id);
    }
  }, [post]);
  const makeFetch = useCallback(() => !!viewComments, [viewComments]);
  const { status, responseData: comments, errorMessage } = useFetch(getCommentsByPostIdCallback, makeFetch);

  if (!post || !post.id) return null;

  function renderComments() {
    if (!viewComments) return null;
    if (status === fetchStatuses.PENDING) {
      return <div>Loading Comments... </div>;
    }
    if (status === fetchStatuses.REJECTED) {
      return (
        <div role="alert" style={{ color: 'red' }}>
          {errorMessage}
        </div>
      );
    }
    if (status === fetchStatuses.RESOLVED) {
      return <CommentsList comments={comments} />;
    }
  }

  function handleViewComments() {
    setViewComments(!viewComments);
  }
*/
