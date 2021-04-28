import { screen, render } from '@testing-library/react';
import PostsList from 'pages/Posts';
import { posts } from '__tests__/test-data';

test('render with empty posts array', () => {
  render(<PostsList posts={[]} />);
  const postsContainer = screen.getByTestId(/PostsList/i);
  expect(postsContainer).toBeInTheDocument();
  expect(postsContainer.childElementCount).toBe(0);
});

test.only('render with posts array', () => {
  render(<PostsList posts={posts} />);
  const postsContainer = screen.getByTestId(/PostsList/i);
  expect(postsContainer).toBeInTheDocument();
  expect(postsContainer.childElementCount).toBe(posts.length);
});
