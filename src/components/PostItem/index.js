import './index.css';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CommentsList from 'components/CommentsList';
import { getCommentsByPostId } from 'api/post.api';

function PostItem({ post }) {
  const [viewComments, setViewComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [isLoadingComments, setIsLoadingComments] = useState(true);

  function handleViewComments() {
    if (!viewComments) {
      getCommentsByPostId(post.id).then((comments) => {
        setComments(comments);
        setIsLoadingComments(false);
      });
    }
    setViewComments(!viewComments);
  }

  return (
    <div className="PostItem" data-testid="PostItem">
      <div className="title">{post.title}</div>
      <div className="creator-info">
        <div className="image-container">
          <img src={`https://randomuser.me/api/portraits/women/${post.userId}.jpg`} alt={`User ${post.userId}`} />
        </div>
        <span>User {post.userId}</span>
      </div>
      <div className="description">{post.body}</div>
      <button type="button" className="view-comments-button" onClick={handleViewComments}>
        {viewComments ? <>Hide Comments</> : <>View Comments</>}
      </button>
      {viewComments ? isLoadingComments ? <div>Loading Comments...</div> : <CommentsList comments={comments} /> : null}
    </div>
  );
}

PostItem.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    userId: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,
  }),
};

export default PostItem;
