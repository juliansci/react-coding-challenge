import './index.css';
import PostsList from 'components/PostsList';
import { useFetch, fetchStatuses } from 'hooks/useFetch';
import { getPosts } from 'api/post.api';

function App() {
  const { status, responseData: posts, errorMessage } = useFetch(getPosts);
  return (
    <div className="App">
      <h1>Posts List</h1>
      {status === fetchStatuses.PENDING && <div>Loading posts... </div>}
      {status === fetchStatuses.REJECTED && (
        <div role="alert" style={{ color: 'red' }}>
          {errorMessage}
        </div>
      )}
      {status === fetchStatuses.RESOLVED && (
        <div className="posts-container" data-testid="posts-container">
          <PostsList posts={posts} />
        </div>
      )}
    </div>
  );
}

export default App;
