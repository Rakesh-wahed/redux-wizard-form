import * as React from 'react';
import { Field } from 'redux-form';
import { FieldsetWrapper } from '../styles';

export const FormStep1 = () => (
  <FieldsetWrapper>
    <Field name="name" component="input" type="text" placeholder="Name" />
    <Field name="lastname" component="input" type="text" placeholder="Last Name" />
    <Field name="email" component="input" type="email" placeholder="Email" />
    <button type="submit"> Next Step </button>
  </FieldsetWrapper>
);