import PropTypes from 'prop-types';
import './index.css';

function CommentItem({ comment }) {
  console.log(comment);
  return (
    <div className="CommentItem">
      <div className="title">{comment.name}</div>
      <div className="creator">By {comment.email}</div>
      <div className="description">{comment.body}</div>
    </div>
  );
}

CommentItem.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }),
};

export default CommentItem;
