import {FETCH_POSTS,NEW_POST} from './types';


export function getUserData(data){
  console.log('Action ======>>>>', data);
    return {
            type: FETCH_POSTS,
            data: data,
          };

}