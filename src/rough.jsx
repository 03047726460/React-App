/**********Login Page*****************/
/*

import React,{useState} from 'react';
import Home from './components/Home';
import {Redirect, Route} from "react-router-dom";
import {Grid,Paper,Avatar,TextField,FormControlLabel,Checkbox,Button,Typography,Link} from '@material-ui/core';
import LockOutLinedIcon from '@material-ui/icons/LockOpenOutlined';
const Login=(props) =>{

const [values, setValues] = useState({
    email: '',
    password: ''
});

const [user,setUser] = useState('sarmad');
const [userPass,setUserPass] =useState('123');

    const paperStyle= {
        padding :20,height:'50vh',width:250,margin:'40px auto'
    }
const {email, password} = values;
    const avatarStyle ={
        backgroundColor :'green'
    }
const signUpForm =()=>(
    <form onSubmit = {clickSubmit}>
            <Grid >
            <Paper elevation ={5} style={paperStyle}>
                <Grid align = 'center'>
                    <Avatar style ={avatarStyle}><LockOutLinedIcon></LockOutLinedIcon></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField onChange={handleChange("email")} value = {email}  label="username" fullWidth='true'></TextField>
                <TextField onChange={handleChange("password")} value = {password} label="password" type ='password' fullWidth='true'></TextField>

                <FormControlLabel
                  control={
                      <Checkbox
                    
                     name="checkedB"
                     color="primary"
          />
        }
        label="Remember Me"
      />
      <Button type ='submit'  fullWidth='true' color = 'primary'> Sign In</Button>
      <Typography>
          <Link href ='#'> Forgot Password ?</Link>
      </Typography>
            </Paper>
        </Grid>
        </form>
);
const handleChange = name => event => {
    setValues({...values, [name]: event.target.value})
}

const  clickSubmit =event=>{
event.preventDefault();

    if(email == user && password == userPass){
        props.submitted(true);
    }else{
        props.submitted(false);
    }       

        
    
       
        

    }



    return (
      <div>
 {signUpForm()}
 
 <button onClick ={props.submitted}></button>
      </div>
       
        
    )
}

export default Login;
*/