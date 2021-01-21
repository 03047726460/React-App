import React,{useEffect, useState} from 'react';
import axios from 'axios';
import URL from '../Utilities/Constants' 
import {getUsers} from '../Services/dataService';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const StyledTableCell = withStyles((theme) => ({
 
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);




const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  TableMargin : {
      margin :'5%'
  },
});

const Users =() => {
  const classes = useStyles();

  const [user,setUser]= useState([]);
   
        

   
  useEffect(()=>{
     getUsers().then(res=> setUser(res.data))
     .catch(err=>console.log(err));

  },[])


  return (
      <div className ={classes.TableMargin}>

      <h2 style ={{textAlign: 'Center' , color :'darkBlue',fonyWeight :'700'}}>Table Containing The User Data!!</h2>
    <TableContainer   component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead style={{backgroundColor :'darkBlue'}}>

          <TableRow >
            <StyledTableCell style ={{color :'white',fontWeight: '600'}}>User Name</StyledTableCell>
            <StyledTableCell style ={{color :'white',fontWeight: '600'}} align="right">email</StyledTableCell>
            <StyledTableCell style ={{color :'white',fontWeight: '600'}} align="right">Website</StyledTableCell>
            <StyledTableCell style ={{color :'white',fontWeight: '600'}} align="right">Company</StyledTableCell>
          </TableRow>

        </TableHead>

        <TableBody>
          {user.map((value) => (
            <StyledTableRow key={value.name}>
              <StyledTableCell component="th" scope="row">
                {value.name}
              </StyledTableCell>
              <StyledTableCell align="right">{value.email}</StyledTableCell>
              <StyledTableCell align="right">{value.website}</StyledTableCell>
              <StyledTableCell align="right">{value.company.name}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default Users;