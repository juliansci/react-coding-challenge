import { rest } from 'msw';
import { urlApiPost } from 'api/post.api';
import { posts, comments } from './test-data';

const handlers = [
  rest.get(urlApiPost, async (req, res, ctx) => {
    return res(ctx.json(posts));
  }),
  rest.get(`${urlApiPost}/1/comments`, async (req, res, ctx) => {
    return res(ctx.json(comments));
  }),
];

export { handlers };
