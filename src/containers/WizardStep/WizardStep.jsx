import { connect } from 'react-redux';
import { reduxForm, getFormMeta, getFormSyncErrors } from 'redux-form';
import { WizardStep } from '../../components';

export const reduxWizardStep = formOptions => {
  const reduxFormInstance = reduxForm({
    ...formOptions,
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true
  });

  return reduxFormInstance(
    connect(
      state => ({
        meta: getFormMeta(formOptions.form)(state),
        errors: getFormSyncErrors(formOptions.form)(state)
      }),
      null
    )(WizardStep)
  );
};
