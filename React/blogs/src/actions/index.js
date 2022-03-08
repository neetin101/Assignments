import _ from 'lodash';
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    // console.log('Before');
    await dispatch(fetchPosts());
    // console.log('After');
    const userIds = _.uniq(_.map(getState().posts, 'userId'));
    userIds.forEach(userId => dispatch(fetchUser(userId)));
    // console.log('users = ', users);
}

export const fetchPosts = () => async dispatch => {
    const { data } = await jsonPlaceholder.get('/posts');
    dispatch({type: 'FETCH_POSTS', payload: data});
};

export const fetchUser = id => async dispatch => {
    const { data } = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({ type: 'FETCH_USER', payload: data });
};


// Memoized version

// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const { data } = await jsonPlaceholder.get(`/users/${id}`);
//     dispatch({ type: 'FETCH_USER', payload: data });
// });