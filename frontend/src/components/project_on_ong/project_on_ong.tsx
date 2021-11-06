import React from 'react';
import axios, { CancelTokenSource } from 'axios';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';


import {Dialog,DialogContent,DialogActions,DialogContentText,CircularProgress} from '@material-ui/core';
import DialogTitle from '@material-ui/core/DialogTitle';


interface Employee {
  name: string;
  job: string;
  id: string;
};


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      // display: 'flex',
      // flexWrap: 'wrap',
      width: 300,
      margin: `${theme.spacing(0)} left`
      // margin: `auto`
    },
    loginBtn: {
      marginTop: theme.spacing(2),
      flexGrow: 1
    },
    header: {
      textAlign: 'center',
      background: '#212121',
      color: '#fff'
    },
    card: {
      marginTop: theme.spacing(5)
    },
    table: {
    minWidth: 700,
  },
  })
);



const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }),
)(TableRow);


interface IPost {
  "p_name": string,
  "v_name": string,
  "p_country": string
  "p_reach": string
  "p_duration": number
}

const defaultPosts: IPost[] = [];


const App = () => {
  const classes = useStyles();

  const [posts, setPosts]: [IPost[], (posts: IPost[]) => void] = React.useState(
    defaultPosts
  );

  const [loading, setLoading]: [
    boolean,
    (loading: boolean) => void
  ] = React.useState<boolean>(true);

  const [error, setError]: [string, (error: string) => void] = React.useState(
    ''
  );
  // ONG Values
  const [project_name, setProjectName] = React.useState('')
  // ONG Values
  const [ong_name, setONGName] = React.useState('')

  const cancelToken = axios.CancelToken; //create cancel token
  const [cancelTokenSource, setCancelTokenSource]: [
    CancelTokenSource,
    (cancelTokenSource: CancelTokenSource) => void
  ] = React.useState(cancelToken.source());


  const addProjectOnONG = () =>{
    axios
      .post('https://Proyecto-2-BDA.ronnysantamaria.repl.co/api/relation/ong', { "project": project_name, "ong": ong_name, })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      }

  
  // const getData = () => {
  //   axios
  //     .get<IPost[]>('https://proyecto-2-bda.ronnysantamaria.repl.co/api/query4?volunteer='+ volunteer, {
  //       cancelToken: cancelTokenSource.token,
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       timeout: 10000,
  //     })
  //     .then((response) => {
  //       setPosts(response.data);
  //       setLoading(false);
  //     })
  //     .catch(err => console.log(err))
  // };


  return (
    <form className={classes.container} noValidate autoComplete="off">
      <Card className={classes.card}>
        <CardHeader className={classes.header} title="Project On ONG" />
        <CardContent>
          <div>
            <TextField fullWidth id="project_name" type="text" label="Project Name" placeholder="Project Name" onChange={event => setProjectName(event.target.value)}/>
            <TextField fullWidth id="ong_country" type="text" label="ONG Name" placeholder="ONG Name" onChange={event => setONGName(event.target.value)}/>
          </div>
        </CardContent>
        <CardActions>
          <Button variant="contained" size="large" color="primary" onClick={addProjectOnONG}>
            Submit
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};

export default App;