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
    container1: {
      // display: 'flex',
      // flexWrap: 'wrap',
      width: 300,
      margin: `${theme.spacing(0)} left`
      // margin: `auto`
    },
    container2: {
      // display: 'flex',
      flexWrap: 'wrap',
      width: 300,
      margin: `${theme.spacing(1)} center`
      // margin: `auto`
    },
    container3: {
      // display: 'flex',
      // flexWrap: 'wrap',
      width: 300,
      margin: `${theme.spacing(2)} right`
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
  const [ong_name, setOngName] = React.useState('')
  const [ong_country, setOngCountry] = React.useState('')

  // Project Values

  // Volunteer Values
  const [volunteer, setProject] = React.useState('')

  const cancelToken = axios.CancelToken; //create cancel token
  const [cancelTokenSource, setCancelTokenSource]: [
    CancelTokenSource,
    (cancelTokenSource: CancelTokenSource) => void
  ] = React.useState(cancelToken.source());


  const addOng = () =>{
    axios
      .post('https://Proyecto-2-BDA.ronnysantamaria.repl.co/api/add', { "type": "ong", "name": ong_name, "country": ong_country })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      }


  const getData = () => {
    axios
      .get<IPost[]>('https://proyecto-2-bda.ronnysantamaria.repl.co/api/query4?volunteer='+ volunteer, {
        cancelToken: cancelTokenSource.token,
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 10000,
      })
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch(err => console.log(err))
  };


  return (
    <form className={classes.container1} noValidate autoComplete="off">
      <Card className={classes.card}>
        <CardHeader className={classes.header} title="ONG" />
        <CardContent>
          <div>
            <TextField fullWidth id="ong_name" type="text" label="Name" placeholder="Name" onChange={event => setOngName(event.target.value)}/>
            <TextField fullWidth id="ong_country" type="text" label="Country" placeholder="Country" onChange={event => setOngCountry(event.target.value)}/>
          </div>
        </CardContent>
        <CardActions>
          <Button variant="contained" size="large" color="primary" onClick={addOng}>
            Submit
          </Button>
        </CardActions>
      </Card>
      <form className={classes.container2} noValidate autoComplete="off">
      <Card className={classes.card}>
        <CardHeader className={classes.header} title="Project" />
        <CardContent>
          <div>
            <TextField id="project_name" type="text" label="Name" placeholder="Name" margin="normal" onChange={event => setProject(event.target.value)}/>
            <TextField id="project_country" type="text" label="Country" placeholder="Country" margin="normal" onChange={event => setProject(event.target.value)}/>
            <TextField id="project_reach" type="text" label="Reach" placeholder="Reach" margin="normal" onChange={event => setProject(event.target.value)}/>
            <TextField id="project_duration" type="text" label="Duration" placeholder="Duration" margin="normal" onChange={event => setProject(event.target.value)}/>
          </div>
        </CardContent>
        <CardActions>
          <Button variant="contained" size="large" color="primary">
            Submit
          </Button>
        </CardActions>
      </Card>
      <Card className={classes.card}>
        <CardHeader className={classes.header} title="Volunteer" />
        <CardContent>
          <div>
            <TextField fullWidth id="volunteer_name" type="text" label="Name" placeholder="Name"/>
            <TextField fullWidth id="volunteer_country" type="text" label="Country" placeholder="Country"/>
            <TextField fullWidth id="volunteer_age" type="text" label="Age" placeholder="Age"/>
          </div>
        </CardContent>
        <CardActions>
          <Button variant="contained" size="large" color="primary">
            Submit
          </Button>
        </CardActions>
      </Card>
    </form>
    </form>
  );
};

export default App;