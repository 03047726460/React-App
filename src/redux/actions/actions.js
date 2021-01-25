import {FETCH_POSTS,NEW_POST,FETCH_USERS} from './types';


export function getUserData(data){
  console.log('Action ======>>>>', data);
    return {
            type: FETCH_USERS,
            data: data,
          };

}

export function getPostData(data){
  console.log('POSTS Action ======>>>>', data);
    return {
            type: FETCH_POSTS,
            data: data,
          };

}