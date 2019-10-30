import React from 'react';
import { Formik, FastField, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import Grid from '@material-ui/core/Grid';
import Theme from '../Theme/style.js'
import Button from '@material-ui/core/Button';
import { flexbox } from '@material-ui/system';

const style1 = {
    marginLeft: '50px'
}

// error styles
const styles2 = {
    // color: Theme.palette.primary.error,
    // marginTop: '-0.5rem',
    fontSize: '0.85rem',
    marginBottom: '0.5rem',
    width: 300,
    marginLeft: '50px',
    
}

const styles3 = {
    color: Theme.palette.primary.error,
    fontSize: '0.85rem',
    marginBottom: '0.5rem',
    width: 300,
    justifyContent: 'flex-end'
}


const Fieldset = ({ label, name, ...props }) => (
  <React.Fragment>
    <label htmlFor={name}>{label}</label>
    <FastField name={name} {...props} />
    <ErrorMessage name={name} >
      {msg => <div style={styles3} className="field-error">{msg}</div>}
    </ErrorMessage>
  </React.Fragment>
);

const Basic = () => (
  <div >
    <h1 
    style={style1}
    >Credentials</h1>

        <Formik
        initialValues={{
            account_sid: '',
            Auth_Token: '',
            Messaging_Service_sid: '',
        }}
        validationSchema={Yup.object().shape({
            account_sid: Yup.string().required('Required!'),
            Auth_Token: Yup.string().required('Required!'),
            Messaging_Service_sid: Yup.string().required('Required!'),
        })}
        onSubmit={values => {
            setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            }, 500);
        }}
        render={({
            handleSubmit,
            handleReset,
            isSubmitting,
            errors,
            touched,
        }) => (
            <Form >
            <Grid   
            container
            spacing={1}
            justify="space-between"
            direction="row"
            style={styles2}>
                <label>account_sid:</label>
                <Fieldset 
                    name="account_sid"
                    // label="account_sid:"
                    type="text"
                    placeholder="account_sid"
                    // styles={styles4} 
                />
            </Grid>
            <Grid   
            container
            spacing={1}
            justify="space-between"
            direction="row"
            style={styles2}>
                <label>auth_token:</label>
                <Fieldset 
                    name="Auth_Token"
                    // label="account_sid:"
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
                <Fieldset 
                    name="Messaging_Service_sid"
                    // label="account_sid:"
                    type="text"
                    placeholder="messaging_service_sid"
                    // styles={styles4} 
                />
            </Grid>
        
            <Grid 
            container
            item xs={3}
            justify='space-between' 
            spacing={1} 
            direction='row'
            style={styles2} >
                <Grid>
                    <Button variant="contained" size= "small" color={Theme.palette.secondary.main}   type="submit" disable={isSubmitting}>
                        Save
                    </Button>
                </Grid>
                <Grid>
                    <Button variant="contained" size= "small" color='#0298ff'  type="reset" onClick={handleReset}>
                        Cancel
                    </Button>
                </Grid>
            </Grid >
        </Form>
        )}
        />
    </div>
);

export default Basic;
