import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextField from '@material-ui/core/TextField';

interface FormFieldProps {
  name: string;
  label: string;
}

const FormField: React.FC<FormFieldProps> = ({ name, label }) => {
  return (
    <div className="FormField">
      <Field
        as={TextField}
        name={name}
        label={label}
        fullWidth
        helperText={<ErrorMessage name={name} />}
        required
      />
      <TextField label={label} fullWidth />
    </div>
  );
};

export default FormField;
