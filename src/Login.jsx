import React,{useState} from 'react';

import {ADMIN_USERNAME,ADMIN_PASSWORD} from './Utilities/Constants';

import {Grid,Paper,Avatar,TextField,FormControlLabel,Checkbox,Button,Typography,Link} from '@material-ui/core';
import LockOutLinedIcon from '@material-ui/icons/LockOpenOutlined';

const Login=(props) =>{

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');


    const paperStyle= {
        padding :20,height:'50vh',width:250,margin:'40px auto'
    }

    const avatarStyle ={
        backgroundColor :'green'
    }

    const handleUserNameChange =(event)=>{

        setUserName(event.target.value);
    }

    const handlePasswordChange =(event)=>{

        
        setPassword(event.target.value);
    }

    const submitLoginForm =(event)=>{
        event.preventDefault();

        if(userName == ADMIN_USERNAME && password == ADMIN_PASSWORD){
            localStorage.setItem('isAuth','true');
            props.submitted('true');
        }
       
    }

    const loginForm =()=>(
        <form onSubmit = {submitLoginForm}>
                <Grid >
                <Paper elevation ={5} style={paperStyle}>
                    <Grid align = 'center'>
                        <Avatar style ={avatarStyle}><LockOutLinedIcon></LockOutLinedIcon></Avatar>
                        <h2>Sign In</h2>
                    </Grid>
                    <TextField onChange={handleUserNameChange} value = {userName}  label="username" required fullWidth='true'></TextField>
                    <TextField onChange={handlePasswordChange} value = {password} label="password" required type ='password' fullWidth='true'></TextField>
    
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

    return(
        <div>
            {loginForm()}
        </div>
    );
}

export default Login;