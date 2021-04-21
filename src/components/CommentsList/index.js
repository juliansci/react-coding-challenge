import './index.css';
import PropTypes from 'prop-types';
import CommentItem from 'components/CommentItem';
import NewCommentBox from 'components/NewCommentBox';

function CommentsList({ comments }) {
  console.log('comments: ', comments);
  return (
    <div className="CommentsList">
      <div className="title">Comments</div>
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
      <NewCommentBox />
    </div>
  );
}

CommentsList.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default CommentsList;
