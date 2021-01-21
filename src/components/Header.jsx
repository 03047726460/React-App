import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';



import {Link, Redirect} from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color :'white'
  },
  color : {
    color : 'white',
  }
}));

export default function MenuAppBar(props) {
  const classes = useStyles();
 
  const handleLogOut = ()=>{
    
    localStorage.setItem('isAuth','false');
    
    props.submitted('false');
  }
     




  return (
    <div>
  
<div className={classes.root}>

<AppBar position="static">
  <Toolbar>
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" className={classes.title}>
    <Link  className={classes.color} to = '/Home'>Home</Link>
    </Typography>
    
    <Typography  variant="h6" className={classes.title}>
    <Link className={classes.color} to = '/about'>About</Link>

    </Typography>
    
    
   
    <Typography variant="h6" className={classes.title}>
    <Link  className={classes.color} to = '/contact'>
    Contact
    </Link>
        
      </Typography>
        
  
    <Typography variant="h6" className={classes.title}>
     <Link onClick = {handleLogOut} className={classes.color}  to = '/'>
    Logout
     </Link>
        
      </Typography>
  </Toolbar>
</AppBar>
</div>
    </div>
  );
  
}
