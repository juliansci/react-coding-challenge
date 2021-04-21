import './index.css';
import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import CommentsList from 'components/CommentsList';
import { getCommentsByPostId } from 'api/post.api';
import { fetchStatuses, useFetch } from 'hooks/useFetch';

function PostItem({ post }) {
  const [viewComments, setViewComments] = useState(false);
  const getCommentsByPostIdCallback = useCallback(() => getCommentsByPostId(post.id), [post.id]);
  const makeFetch = useCallback(() => !!viewComments, [viewComments]);
  const { status, responseData: comments, errorMessage } = useFetch(getCommentsByPostIdCallback, makeFetch);

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
      <button type="button" className="view-comments-button" onClick={() => setViewComments(!viewComments)}>
        {viewComments ? <>Hide Comments</> : <>View Comments</>}
      </button>
      {renderComments()}
    </div>
  );
}

PostItem.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    userId: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostItem;
