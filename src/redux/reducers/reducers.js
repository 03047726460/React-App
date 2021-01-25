import {FETCH_POSTS,NEW_POST,FETCH_USERS} from '../actions/types';

const initialState = {
    
    posts : [],
    users :[],
    item : {}

}

export default function(state = initialState,action){

    switch(action.type){

        case FETCH_USERS :
            return {
                ...state ,
                usersValue :action.data
            }
        case FETCH_POSTS :
            return {
                ...state,
                postsValue : action.data
              
            }

        default :
            return state;

    }
}