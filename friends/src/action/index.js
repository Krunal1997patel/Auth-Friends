import { axiosWithAuth } from '../utils/axiosWithAuth'

export const USER_SIGNING = 'USER_SIGNING';
export const USER_SIGNING_SUCCESS = 'USER_SIGNING_SUCCESS';
export const USER_SIGNING_FAILURE = 'USER_SIGNING_FAILURE';



export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const fetchFriends = () => dispatch => {
    dispatch( {  type: START_FETCHING  } );

    axiosWithAuth()
    .get('/friends')
    .then(response => dispatch( { type: FETCH_SUCCESS, payload: response.data } ))
    .catch(err => dispatch( { type: FETCH_FAILURE, payload: err.response } ) )

}  

export const POSTING_DATA = 'POSTING_DATA';
export const POSTING_DATA_SUCCESS = 'POSTING_DATA_SUCCESS';
export const POSTING_DATA_FAILURE = 'POSTING_DATA_FAILURE';

export const postFriend = friendData => dispatch => {
    dispatch({ type: POSTING_DATA })

    axiosWithAuth()
    .post('/friends', friendData)
    .then( response => dispatch( { type: POSTING_DATA_SUCCESS, payload: response.data } ))
    .catch( err => dispatch( { type: POSTING_DATA_FAILURE, payload: err.response } ))
}

export const DELETING_DATA = 'DELETING_DATA';
export const DELETING_DATA_SUCCESS = 'DELETING_DATA_SUCCESS';
export const DELETING_DATA_FAILURE = 'DELETING_DATA_FAILURE';

export const deleteFriend = friendId => dispatch => {
    dispatch({ type: DELETING_DATA })

    axiosWithAuth()
    .delete(`/friends/${friendId}`)
    .then( response => dispatch( { type: DELETING_DATA_SUCCESS, payload: response.data } ))
    .catch( err => dispatch( { type: DELETING_DATA_FAILURE, payload: err.response } ))
}