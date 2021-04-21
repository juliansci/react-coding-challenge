import PropTypes from 'prop-types';
import PostItem from 'components/PostItem';

function PostsList({ posts }) {
  return (
    <div className="PostsList" data-testid="PostsList">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}

PostsList.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default PostsList;
