import {FETCH_POSTS,NEW_POST} from '../actions/types';

const initialState = {

    users :[],
    item : {}

}

export default function(state = initialState,action){

    switch(action.type){

        case FETCH_POSTS :
            return {
                ...state ,
                usersValue :action.data
            }
            default :
            return state;

    }
}