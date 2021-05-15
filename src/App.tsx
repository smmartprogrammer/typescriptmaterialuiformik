import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

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
      <Formik initialValues={initialValues} onSubmit={forSubmit}>
        {(props) => {
          return (
            <Form>
              <div>
                <label>Name:</label>
                <Field name="name" as="input" />
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default App;
