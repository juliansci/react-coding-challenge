const urlApiPost = 'https://jsonplaceholder.typicode.com/posts';

export async function getPosts() {
  try {
    const response = await fetch(urlApiPost);
    if (response.ok) {
      return response.json();
    }
    return null;
  } catch (error) {
    console.error(error);
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
