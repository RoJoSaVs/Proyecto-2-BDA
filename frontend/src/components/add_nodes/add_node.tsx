import * as React from "react";

interface IFormProps {
  /* The http path that the form will be posted to */
  action: string;
}

export interface IValues {
  /* Key value pairs for all the field values with key being the field name */
  [key: string]: any;
}

export interface IErrors {
  /* The validation error messages for each field (key is the field name */
  [key: string]: string;
}

export interface IFormState {
  /* The field values */
  values: IValues;

  /* The field validation error messages */
  errors: IErrors;

  /* Whether the form has been successfully submitted */
  submitSuccess?: boolean;
}

export default class Form extends React.Component<IFormProps, IFormState> {
  constructor(props: IFormProps) {
    super(props);

    const errors: IErrors = {};
    const values: IValues = {};
    this.state = {
      errors,
      values
    };
  }

  /**
   * Returns whether there are any errors in the errors object that is passed in
   * @param {IErrors} errors - The field errors
   */
  private haveErrors(errors: IErrors) {
    let haveError: boolean = false;
    Object.keys(errors).map((key: string) => {
      if (errors[key].length > 0) {
        haveError = true;
      }
    });
    return haveError;
  }

  /**
   * Handles form submission
   * @param {React.FormEvent<HTMLFormElement>} e - The form event
   */
  private handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    if (this.validateForm()) {
      const submitSuccess: boolean = await this.submitForm();
      this.setState({ submitSuccess });
    }
  };

  /**
   * Executes the validation rules for all the fields on the form and sets the error state
   * @returns {boolean} - Whether the form is valid or not
   */
  private validateForm(): boolean {
    // TODO - validate form
    return true;
  }

  /**
   * Submits the form to the http api
   * @returns {boolean} - Whether the form submission was successful or not
   */
  private async submitForm(): Promise<boolean> {
    // TODO - submit the form
    return true;
  }

  public render() {
    const { submitSuccess, errors } = this.state;
    return (
      <form onSubmit={this.handleSubmit} noValidate={true}>
        <div className="container">
          {/* TODO - render fields */}
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={this.haveErrors(errors)}
            >
              Submit
            </button>
          </div>
          {submitSuccess && (
            <div className="alert alert-info" role="alert">
              The form was successfully submitted!
            </div>
          )}
          {submitSuccess === false &&
            !this.haveErrors(errors) && (
              <div className="alert alert-danger" role="alert">
                Sorry, an unexpected error has occurred
              </div>
            )}
          {submitSuccess === false &&
            this.haveErrors(errors) && (
              <div className="alert alert-danger" role="alert">
                Sorry, the form is invalid. Please review, adjust and try again
              </div>
            )}
        </div>
      </form>
    );
  }
}

// import React, { useReducer, useEffect } from 'react';
// import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

// import TextField from '@material-ui/core/TextField';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import CardHeader from '@material-ui/core/CardHeader';
// import Button from '@material-ui/core/Button';

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     container: {
//       display: 'flex',
//       flexWrap: 'wrap',
//       width: 400,
//       margin: `${theme.spacing(0)} auto`
//     },
//     loginBtn: {
//       marginTop: theme.spacing(2),
//       flexGrow: 1
//     },
//     header: {
//       textAlign: 'center',
//       background: '#212121',
//       color: '#fff'
//     },
//     card: {
//       marginTop: theme.spacing(10)
//     }
//   })
// );


// type State = {
//   ong: string
//   password: string
//   isButtonDisabled: boolean
//   helperText: string
//   isError: boolean
// };

// const initialState: State = {
//   ong: '',
//   password: '',
//   isButtonDisabled: true,
//   helperText: '',
//   isError: false
// };

// type Action = { type: 'setONG_name', payload: string }
//   | { type: 'setPassword', payload: string }
//   | { type: 'setIsButtonDisabled', payload: boolean }
//   | { type: 'loginSuccess', payload: string }
//   | { type: 'loginFailed', payload: string }
//   | { type: 'setIsError', payload: boolean };

// const reducer = (state: State, action: Action): State => {
//   switch (action.type) {
//     case 'setONG_name':
//       return {
//         ...state,
//         ong: action.payload
//       };
//     case 'setPassword':
//       return {
//         ...state,
//         password: action.payload
//       };
//     case 'setIsButtonDisabled':
//       return {
//         ...state,
//         isButtonDisabled: action.payload
//       };
//     case 'loginSuccess':
//       return {
//         ...state,
//         helperText: action.payload,
//         isError: false
//       };
//     case 'loginFailed':
//       return {
//         ...state,
//         helperText: action.payload,
//         isError: true
//       };
//     case 'setIsError':
//       return {
//         ...state,
//         isError: action.payload
//       };
//   }
// }



// const Login = () => {
//   const classes = useStyles();
//   const [state, dispatch] = useReducer(reducer, initialState);

//   useEffect(() => {
//     if (state.ong.trim() && state.password.trim()) {
//       dispatch({
//         type: 'setIsButtonDisabled',
//         payload: false
//       });
//     } else {
//       dispatch({
//         type: 'setIsButtonDisabled',
//         payload: true
//       });
//     }
//   }, [state.ong, state.password]);

//   const handleLogin = () => {
//     (async () => {
//       const rawResponse = await fetch('http://localhost:5000/login', {
//         method: 'POST',
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ ong: state.ong, password: state.password }),
//       });
//       console.log(JSON.stringify({ ong: state.ong, password: state.password }))
//       const content = await rawResponse.json()
  
//       console.log(content)
//     })();
//   };

//   const handleKeyPress = (event: React.KeyboardEvent) => {
//     if (event.keyCode === 13 || event.which === 13) {
//       state.isButtonDisabled || handleLogin();
//     }
//   };

//   const handleONG_nameChange: React.ChangeEventHandler<HTMLInputElement> =
//     (event) => {
//       dispatch({
//         type: 'setONG_name',
//         payload: event.target.value
//       });
//     };

//   const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> =
//     (event) => {
//       dispatch({
//         type: 'setPassword',
//         payload: event.target.value
//       });
//     }


//   return (
//     <form className={classes.container} noValidate autoComplete="off">
//       <Card className={classes.card}>
//         <CardHeader className={classes.header} title="ONG NAME" />
//         <CardContent>
//           <div>
//             <TextField
//               error={state.isError}
//               fullWidth
//               id="ong"
//               type="email"
//               label="ONG"
//               placeholder="ONG"
//               margin="normal"
//               onChange={handleONG_nameChange}
//               onKeyPress={handleKeyPress}
//             />
//           </div>
//         </CardContent>
//         <CardActions>
//           <Button
//             variant="contained"
//             size="large"
//             color="primary"
//             className={classes.loginBtn}
//             onClick={handleLogin}
//             disabled={state.isButtonDisabled}>
//             Submit
//           </Button>
//         </CardActions>
//       </Card>
//     </form>
//   );
// }

// export default Login;