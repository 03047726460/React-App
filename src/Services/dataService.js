import axios from 'axios';
import {URL} from '../Utilities/Constants' 

export const  getUsers= async ()=>{
        console.log("URL", URL);
        const userUrl = URL + 'users';
        console.log(userUrl);
      return  await axios.get(userUrl)
        
    }

export const  getPosts= async ()=>{
      console.log("URL", URL);
      const postUrl = URL + 'posts';
      console.log(postUrl);
    return  await axios.get(postUrl)
      
}

