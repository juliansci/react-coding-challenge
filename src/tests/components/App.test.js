import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { setupServer } from 'msw/node';
import App from 'components/App';
import { handlers } from 'tests/server-handlers';
import { urlApiPost } from 'api/post.api';
import { rest } from 'msw';

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

test('Show loading message', async () => {
  render(<App />);
  const linkElement = screen.getByText(/Posts List/i);
  expect(linkElement).toBeInTheDocument();
  await waitForElementToBeRemoved(() => screen.getByText(/loading posts\.\.\./i));
});

test('Show posts after request finishes successfully', async () => {
  render(<App />);
  await waitForElementToBeRemoved(() => screen.getByText(/loading posts\.\.\./i));
  const postsContainer = screen.getByTestId(/posts-container/i);
  const postsItems = screen.getAllByTestId(/PostItem/i);
  expect(postsContainer).toBeInTheDocument();
  expect(postsItems.length).toBeGreaterThan(0);
});

test('Show error message after request fails with status code 500', async () => {
  const testErrorMessage = 'There is a big error here';
  server.use(
    rest.get(urlApiPost, async (req, res, ctx) => {
      return res(ctx.status(500), ctx.json({ message: testErrorMessage }));
    })
  );
  render(<App />);
  await waitForElementToBeRemoved(() => screen.getByText(/loading posts\.\.\./i));
  expect(screen.getByRole('alert')).toHaveTextContent(testErrorMessage);
});

test('Show error message after request fails with status code 409', async () => {
  const testErrorMessage = 'Something was wrong';
  server.use(
    rest.get(urlApiPost, async (req, res, ctx) => {
      return res(ctx.status(409), ctx.json({ message: testErrorMessage }));
    })
  );
  render(<App />);
  await waitForElementToBeRemoved(() => screen.getByText(/loading posts\.\.\./i));
  expect(screen.getByRole('alert')).toHaveTextContent(testErrorMessage);
});
