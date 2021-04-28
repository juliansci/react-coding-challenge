import './index.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import PostsPage from 'pages/Posts';
import PostDetailPage from 'pages/PostDetail';
import Layout from 'components/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/posts" exact component={PostsPage} />
          <Route path="/post/:id" exact component={PostDetailPage} />
          <Redirect to="/posts" />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
