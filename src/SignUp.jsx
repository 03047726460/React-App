import React from 'react';
import {Grid,Paper,Avatar,TextField,FormControlLabel,Checkbox,Button,Typography,Link} from '@material-ui/core';
import LockOutLinedIcon from '@material-ui/icons/LockOpenOutlined';

const SignUp=()=>{
    const paperStyle= {
        padding :20,height:'50vh',width:250,margin:'40px auto'
    }

    const avatarStyle ={
        backgroundColor :'lightBlue'
    }
    return (
        <Grid>
        <Paper elevation ={5} style={paperStyle}>
            <Grid align = 'center'>
                <Avatar style ={avatarStyle}><LockOutLinedIcon></LockOutLinedIcon></Avatar>
                <h2>Sign Up</h2>
            </Grid>
            <TextField label="Name" fullWidth='true'></TextField>
            <TextField label="E-mail" type='email' fullWidth='true'></TextField>
            <TextField label="password" type ='password' fullWidth='true'></TextField>

            <FormControlLabel
              control={
                  <Checkbox
                
                 name="checkedB"
                 color="primary"
      />
    }
    label="I read and agree terms and conditions"
  />
  <Button type ='submit' variant='outlined' fullWidth='true' color = 'primary'>Create Account</Button>
  <Typography>
      <Link href ='#'> Already have an account? Sign in</Link>
  </Typography>
        </Paper>
    </Grid>
    )
}
export default SignUp;