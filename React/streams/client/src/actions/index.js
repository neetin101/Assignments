import streams from "../apis/streams";
import history from "../history";
import { 
    SIGN_IN, 
    SIGN_OUT, 
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    DELETE_STREAM,
    EDIT_STREAM
} from './types';

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};

export const createStream = formValues => async (dispatch, getState) => {
    const { userId } = getState().auth;
    const { data } = await streams.post('/streams', { ...formValues, userId });
    console.log('data = ', data);
    dispatch({ type: CREATE_STREAM, payload: data });

    //  Handling Navigation
    // console.log(history);
    history.push('/');
};

export const fetchStreams = () => async dispatch => {
    const { data } = await streams.get('/streams');
    console.log('data = ', data);
    dispatch({ type: FETCH_STREAMS, payload: data });
};

export const fetchStream = (streamId) => async dispatch => {
    // console.log(await streams.get(`/streams/${streamId}`));
    const { data } = await streams.get(`/streams/${streamId}`);
    console.log('data = ', data);
    dispatch({ type: FETCH_STREAM, payload: data });
};

export const deleteStream = (streamId) => async dispatch => {
    await streams.delete(`/streams/${streamId}`);
    dispatch({ type: DELETE_STREAM, payload: streamId });

    //  Handling Navigation
    // console.log(history);
    history.push('/');
};

export const editStream = (streamId, formValues) => async dispatch => {
    const { data } = await streams.patch(`/streams/${streamId}`, formValues);
    console.log('modified data = ', data);
    dispatch({ type: EDIT_STREAM, payload: data });

    //  Handling Navigation
    // console.log(history);
    history.push('/');

};