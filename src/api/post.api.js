export const urlApiPost = 'https://jsonplaceholder.typicode.com/posts';

export async function getPosts() {
  try {
    return fetch(urlApiPost).then((res) => res.json());
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getPostById(id) {
  try {
    return fetch(`${urlApiPost}/${id}`).then((res) => res.json());
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getCommentsByPostId(postId) {
  try {
    return fetch(`${urlApiPost}/${postId}/comments`).then((res) => res.json());
  } catch (error) {
    console.log(error);
    throw error;
  }
}
