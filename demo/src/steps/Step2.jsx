import * as React from 'react';
import { Field } from 'redux-form';
import { FieldsetWrapper } from '../styles';

export const FormStep2 = ({ valid }) => (
  <FieldsetWrapper>
    <Field name="phone" component="input" type="tel" placeholder="Phone" />
    <Field
      name="age"
      component="input"
      type="number"
      placeholder="Age"
      validate={value => value && value > 0 ? undefined : 'Invalid age'}
    />
    <Field name="gender" component="select">
      <option />
      <option value="male">Male</option>
      <option value="femme">Femme</option>
    </Field>
    <button type="submit" disabled={!valid}>
      Next Step
    </button>
  </FieldsetWrapper>
);
