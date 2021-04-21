export const urlApiPost = 'https://jsonplaceholder.typicode.com/posts';

export async function getPosts() {
  try {
    const response = await fetch(urlApiPost);
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  } catch (error) {
    const errorMessage = error.message || 'Something wrong has happened. Try later.';
    throw errorMessage;
  }
}

export async function getCommentsByPostId(postId) {
  try {
    const response = await fetch(`${urlApiPost}/${postId}/comments`);
    if (response.ok) {
      return response.json();
    }
    return null;
  } catch (error) {
    console.error(error);
  }
}
