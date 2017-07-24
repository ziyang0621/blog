import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = 'fetch_post';
export const CREATE_POST = 'create_post';
export const DELETE_POST = 'delete_post';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=TESTING1234'

export const fetchPosts = () => async dispatch => {
  const request = await axios.get(`${ROOT_URL}/posts${API_KEY}`);

  dispatch ({
    type: FETCH_POSTS,
    payload: request
  });
}

export const createPost = (values, callback) => async dispatch => {
  const request = await axios.post(`${ROOT_URL}/posts${API_KEY}`, values);

  callback();

  dispatch({
    type: CREATE_POST,
    payload: request
  });
}

export const fetchPost = (id) => async dispatch => {
  const request = await axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  dispatch({
    type: FETCH_POST,
    payload: request
  });
}

export const deletePost = (id, callback) => async dispatch => {
  const request = await axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);

  callback();

  dispatch({
    type: DELETE_POST,
    payload: id
  });
}
