import React from 'react';
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { Formik, FastField, Form, ErrorMessage,  } from 'formik';
import * as Yup from 'yup';
import Grid from '@material-ui/core/Grid';
import Theme from '../Theme/style.js'
import Button from '@material-ui/core/Button';
import { flexbox } from '@material-ui/system';
import { MuiThemeProvider, TextField } from '@material-ui/core'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';



const ADD_QUERY = gql`
    mutation CreateTwilioCredential($account_sid: String!, $auth_token: String!, $messaging_service_sid: String!){
        createTwilioCredential(account_sid: $account_sid, auth_token: $auth_token, messaging_service_sid: $messaging_service_sid){
            account_sid
            auth_token
            messaging_service_sid
        }
    }
`;



const styles2 = {
    // color: Theme.palette.primary.error,
    // marginTop: '-0.5rem',
    fontSize: '11.7px',
    fontFamily: "proxima, arial, sans-serif",
    marginBottom: '0.5rem',
    width: 300,
    marginLeft: '50px',
    marginTop: '20px'
    
}

const styles3 = {
    color: Theme.palette.primary.error,
    fontSize: '0.85rem',
    marginBottom: '0.5rem',
    width: 300,
    justifyContent: 'flex-end'
}

const styles5 = {
    color: Theme.palette.primary.error,
    fontSize: '13px',
    fontFamily: "proxima, arial, sans-serif",
    marginBottom: '0.5rem',
    marginLeft: '50px',
    marginTop: '20px',
    // marginRight: '20px',
    // justifyContent: 'flex-start',
}


const Field = ({ label, name, ...props }) => (
  <React.Fragment>
    <label htmlFor={name}>{label}</label>
    <FastField name={name} {...props} />
    <ErrorMessage name={name} >
      {msg => <div style={styles3} className="field-error">{msg}</div>}
    </ErrorMessage>
  </React.Fragment>
);

const validationSchema= Yup.object().shape({
    account_sid: Yup.string().required('Required!'),
    auth_token: Yup.string().required('Required!'),
    messaging_service_sid: Yup.string().required('Required!'),
})


const Basic = () => {  
 const [ createCredentials ] = useMutation(ADD_QUERY);
    return (
  <div> 
  <MuiThemeProvider theme={Theme}>
        <Formik
        initialValues={{
            account_sid: '',  // 34 char
            auth_token: '',  // 32 char
            messaging_service_sid: '',  // 34 char
        }}
        validationSchema={validationSchema}
        onSubmit={(values, {setSubmitting, resetForm}) => {
            createCredentials({
                variables: {
                    account_sid: values.account_sid,
                    auth_token: values.auth_token.token,
                    messaging_service_sid: values.messaging_service_sid
                }
            }).then((response) => {
                console.log(response)
                setSubmitting(false);
                resetForm() // optional if form should clear contents after submission . insert whatever to happen after user submits info
            }).catch((response) => {
                // insert whatever to happen if PID already has credentials
                if (response == "Error: GraphQL error: Credentials for this pid already exist"){
                    alert("You have already added credentials for your account")
                }
                setSubmitting(false);
            });
        }}
        >
       {({isSubmitting, handleReset}) => (
            <Form >
            <Grid   
            container
            spacing={1}
            justify="space-between"
            direction="row"
            style={styles2}>
                <label>account_sid:</label>
                <Field 
                    name="account_sid"
                    type="text"
                    placeholder="account_sid"
                />
            </Grid>
            <Grid   
            container
            spacing={1}
            justify="space-between"
            direction="row"
            style={styles2}>
                <label>auth_token:</label>
                <Field 
                    name="auth_token"
                    type="text"
                    placeholder="auth_token"
                    // styles={styles4} 
                />
            </Grid>
            <Grid   
            container
            spacing={1}
            justify="space-between"
            direction="row"
            style={styles2}>
                <label>messaging_service_sid:</label>
                <Field 
                    name="messaging_service_sid"
                    type="text"
                    placeholder="messaging_service_sid"
                />
            </Grid>
        
            <Grid 
            container
            item xs={3}
            justify='space-between' 
            spacing={1} 
            direction='row'
            style={styles5} >
                <Grid>
                    <Button variant="contained" size= "small" color="secondary"  type="submit" disabled={isSubmitting}>
                        Save
                    </Button>
                </Grid>
                <Grid>
                    <Button variant="contained" size= "small" color="secondary"  type="reset" onClick={handleReset}>
                        Cancel
                    </Button>
                </Grid>
            </Grid >
        </Form>
        )}
    </Formik>
    </MuiThemeProvider>
    </div>
    )
}  

export default Basic;
