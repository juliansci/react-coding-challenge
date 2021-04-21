import './index.css';

function NewCommentBox() {
  return (
    <div className="NewCommentBox">
      <div className="title">New comment</div>
      <textarea placeholder="Write your comment"></textarea>
      <button>Send</button>
    </div>
  );
}

export default NewCommentBox;
