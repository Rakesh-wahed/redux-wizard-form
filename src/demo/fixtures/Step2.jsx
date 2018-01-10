import * as React from 'react';
import { Field } from 'redux-form';
import { FieldsetWrapper } from '../styles';

export const FormStep2 = props => {
  console.log(props);
  return (
    <FieldsetWrapper>
      <Field
        name="phone"
        component="input"
        type="text"
        validate={value => (value && value.length > 0 ? undefined : 'Phone no valid')}
        placeholder="Phone"
      />
      <Field
        name="age"
        component="input"
        type="number"
        validate={value => (value && parseInt(value, 10) > 0 ? undefined : 'Bigger than 0')}
        placeholder="Age"
      />
      <Field name="gender" component="select">
        <option />
        <option value="male">Male</option>
        <option value="femme">Femme</option>
      </Field>

      <button type="submit" disabled={!props.valid}>
        Next Step
      </button>
    </FieldsetWrapper>
  );
};
