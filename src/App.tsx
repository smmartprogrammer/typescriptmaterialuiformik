import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import FormField from './components/FormField/FormField';

interface FormValues {
  name: string;
}

const initialValues: FormValues = {
  name: '',
};

const registerSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name must have atleast 2 characters')
    .required('Name is require'),
});

function App() {
  const forSubmit = (values: FormValues): void => {
    alert(JSON.stringify(values));
  };
  return (
    <div className="App">
      <h1>Register</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={forSubmit}
        validationSchema={registerSchema}
      >
        {({ dirty, isValid }) => {
          return (
            <Form>
              <FormField label="Name" name="name" />
              <button disabled={!dirty || !isValid} type="submit">
                Sign Up
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default App;
