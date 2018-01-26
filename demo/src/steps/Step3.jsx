
import * as React from 'react';
import { Field } from 'redux-form';
import { FieldsetWrapper } from '../styles';

export const FormStep3 = () => (
  <FieldsetWrapper>
    <Field name="dni" component="input" type="test" placeholder="DNI" />
    <button type="submit"> Next Step </button>
  </FieldsetWrapper>
);