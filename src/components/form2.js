import React from "react";
import gql from "graphql-tag";
import { Formik, Form, Field, ErrorMessage, FormikBag } from 'formik';
import { useMutation } from "@apollo/react-hooks";
import { Button } from '@material-ui/core';
import { TextField } from 'formik-material-ui';
import * as Yup from 'yup';

const ADD_QUERY = gql`
    mutation CreateTwilioCredential($account_sid: String!, $auth_token: String!, $messaging_service_sid: String!){
        createTwilioCredential(account_sid: $account_sid, auth_token: $auth_token, messaging_service_sid: $messaging_service_sid){
            account_sid
            auth_token
            messaging_service_sid
        }
    }
`;

const validationSchema = Yup.object().shape({
    account_sid: Yup.string()
      .required('Required'),
      auth_token: Yup.string()
      .required('Required'),
      messaging_service_sid: Yup.string()
      .required('Required')
  });

const CredentialsForm = () => {
    const [ createCredentials ] = useMutation(ADD_QUERY);
      return (
                <Formik
                        initialValues={{
                            account_sid: "",
                            // 34 char
                            auth_token: "",
                            // 32 char
                            messaging_service_sid: ""
                            // 34 char
                        }}
                        validationSchema={validationSchema}
                        onSubmit={(values, {setSubmitting, resetForm}) => {
                            createCredentials({
                                variables: {
                                    account_sid: values.account_sid,
                                    auth_token: values.auth_token,
                                    messaging_service_sid: values.messaging_service_sid
                                }
                            }).then((response) => {
                                console.log(response)
                                setSubmitting(false);
                                resetForm() // optional if form should clear contents after submission 
                                // insert whatever to happen after user submits info
                            }).catch((response) => {
                                // insert whatever to happen if PID already has credentials
                                if (response == "Error: GraphQL error: Credentials for this pid already exist") {
                                    alert("You have already added credentials for your account.")
                                }
                                setSubmitting(false);
                            });
                        }}
                    >
                        {({ isSubmitting }) => (
                            <Form>
                                <Field name="account_sid" component={TextField} fullWidth label="Account SID Number:" margin="normal"/>
                                <ErrorMessage name="account_sid" component="div" />
                                <Field name="auth_token" component={TextField} fullWidth label="Auth Token:" margin="normal"/>
                                <ErrorMessage name="auth_token" component="div" />
                                <Field name="messaging_service_sid" component={TextField} fullWidth label="Messaging Service SID:" margin="normal"/>
                                <ErrorMessage name="messaging_service_sid" component="div" />
                                <Button type="submit" disabled={isSubmitting}>
                                Submit
                                </Button>
                            </Form>
                        )}
                </Formik>
      )
}
export default CredentialsForm;
