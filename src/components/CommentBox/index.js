import { useState, useRef } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import styles from './CommentBox.module.scss';

function CommentBox({ onAddComment }) {
  const [comment, setComment] = useState('');
  const commentRef = useRef();

  const onChangeComment = useDebouncedCallback((value) => {
    setComment(value);
  }, 200);

  function handleAddComment() {
    const newComment = {
      id: Math.floor(Math.random() * 1000) + 100,
      postId: 1,
      name: 'New Comment',
      email: 'julian@email.com',
      body: comment,
    };
    console.log('newComment: ', newComment);
    onAddComment(newComment);
    commentRef.current.value = '';
  }
  return (
    <div className={styles.container}>
      <textarea ref={commentRef} placeholder="Write your comment" onChange={(e) => onChangeComment(e.target.value)} defaultValue={comment}></textarea>
      <button onClick={handleAddComment}>Send</button>
    </div>
  );
}

export default CommentBox;
