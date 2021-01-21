import React,{useEffect, useState} from 'react';
import axios from 'axios';
import URL from '../Utilities/Constants' 
import {getPosts} from '../Services/dataService';

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

const Posts =() => {
  const classes = useStyles();

  const [post,setPost]= useState([]);
   
        

   
  useEffect(()=>{
     getPosts().then(res=> setPost(res.data))
     .catch(err=>console.log(err));

  },[])


  return (
      <div className ={classes.TableMargin}>

      <h2 style ={{textAlign: 'Center' , color :'darkBlue',fonyWeight :'700'}}>Table Containing Posts!!</h2>
    <TableContainer   component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead style={{backgroundColor :'darkBlue'}}>

          <TableRow >
            <StyledTableCell style ={{color :'white',fontWeight: '600'}}>Title</StyledTableCell>
            <StyledTableCell style ={{color :'white',fontWeight: '600',textAlign :'center'}} align="right">Body</StyledTableCell>
           
          </TableRow>

        </TableHead>

        <TableBody>
          {post.map((value) => (
            <StyledTableRow key={value.id}>
              <StyledTableCell component="th" scope="row">
                {value.title}
              </StyledTableCell>
              <StyledTableCell align="right">{value.body}</StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default Posts;