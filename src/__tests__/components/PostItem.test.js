import { screen, render } from '@testing-library/react';
import PostItem from 'components/PostItem';

//// CONTINUE HERE!
test.only('render post item', () => {
  const post = {
    id: 1,
    title: 'Sarasa',
    body: 'Is the body',
    userId: 1,
  };
  render(<PostItem post={post} />);
  const postItem = screen.getByTestId(/PostItem/i);
  expect(postItem).toBeInTheDocument();
});
