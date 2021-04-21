import './index.css';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CommentsList from 'components/CommentsList';

function PostItem({ post }) {
  const [viewComments, setViewComments] = useState(false);
  const [comments, setComments] = useState([
    {
      postId: 1,
      id: 1,
      name: 'id labore ex et quam laborum',
      email: 'Eliseo@gardner.biz',
      body:
        'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
    },
    {
      postId: 1,
      id: 2,
      name: 'quo vero reiciendis velit similique earum',
      email: 'Jayne_Kuhic@sydney.com',
      body:
        'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et',
    },
    {
      postId: 1,
      id: 3,
      name: 'odio adipisci rerum aut animi',
      email: 'Nikita@garfield.biz',
      body:
        'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione',
    },
    {
      postId: 1,
      id: 4,
      name: 'alias odio sit',
      email: 'Lew@alysha.tv',
      body:
        'non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati',
    },
    {
      postId: 1,
      id: 5,
      name: 'vero eaque aliquid doloribus et culpa',
      email: 'Hayden@althea.biz',
      body: 'harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et',
    },
    {
      postId: 2,
      id: 6,
      name: 'et fugit eligendi deleniti quidem qui sint nihil autem',
      email: 'Presley.Mueller@myrl.com',
      body:
        'doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in',
    },
  ]);
  return (
    <div className="PostItem">
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
      {viewComments && <CommentsList comments={comments} />}
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
