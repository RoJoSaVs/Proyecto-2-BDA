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


interface IPost {
  "p_name": string,
  "p_country": string
}



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


const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

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

  const [ong, setOng] = React.useState('')

  const cancelToken = axios.CancelToken; //create cancel token
  const [cancelTokenSource, setCancelTokenSource]: [
    CancelTokenSource,
    (cancelTokenSource: CancelTokenSource) => void
  ] = React.useState(cancelToken.source());


  const getData = () => {
    axios
      .get<IPost[]>('https://proyecto-2-bda.ronnysantamaria.repl.co/api/query1?ong='+ ong, {
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
    <TableContainer component={Paper}>
    <form>
        <div className="container">
          <div className="form-group">
          <TextField
              fullWidth
              id="text"
              type="text"
              label="ONG"
              placeholder="ONG"
              margin="normal"
              onChange={event => setOng(event.target.value)}
            />
            <Button className="btn btn-primary" color="primary" onClick={getData}>
              Submit
            </Button>
          </div>
        </div>
      </form>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Project Name</StyledTableCell>
            <StyledTableCell align="left">Project  Country</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {posts.map((row) => (
            <StyledTableRow key={row.p_name}>
              <StyledTableCell component="th" scope="row">
                {row.p_name}
              </StyledTableCell>
              <StyledTableCell align="left">{row.p_country}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default App;