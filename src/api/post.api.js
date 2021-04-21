export const urlApiPost = 'https://jsonplaceholder.typicode.com/posts';

export async function getPosts() {
  try {
    return fetch(urlApiPost);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getCommentsByPostId(postId) {
  try {
    return fetch(`${urlApiPost}/${postId}/comments`);
  } catch (error) {
    console.log(error);
    throw error;
  }
}
