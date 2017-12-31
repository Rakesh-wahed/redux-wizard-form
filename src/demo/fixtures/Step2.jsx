import * as React from 'react';
import { Field } from 'redux-form';
import { FieldsetWrapper } from '../styles';

export const FormStep2 = () => (
  <FieldsetWrapper>
    <Field name="phone" component="input" type="tel" placeholder="Phone" />
    <Field name="age" component="input" type="number" placeholder="Age" />
    <Field name="gender" component="select">
      <option />
      <option value="male">Male</option>
      <option value="femme">Femme</option>
    </Field>
    <button type="submit"> Next Step </button>
  </FieldsetWrapper>
);
