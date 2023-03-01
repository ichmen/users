const baseURL = 'https://jsonplaceholder.typicode.com/';

export async function fetchUsers() {
  try {
    const response = await fetch(baseUrl + '/users');
    return await response.json();
  } catch (e) {
    return alert(`Failed to fetch data ${e}`);
  }
}
export async function fetchPosts() {
  try {
    const response = await fetch(baseUrl + '/posts');
    return await response.json();
  } catch (e) {
    return alert(`Failed to fetch data ${e}`);
  }
}
export async function fetchAlbums() {
  try {
    const response = await fetch(baseUrl + '/albums');
    return await response.json();
  } catch (e) {
    return alert(`Failed to fetch data ${e}`);
  }
}
