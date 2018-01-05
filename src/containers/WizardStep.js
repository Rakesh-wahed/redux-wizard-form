import { connect } from 'react-redux';
import { formSubmit, wizardStepNameAdd } from '../actions';
import { getFormOptions } from '../reducer';
import { WizardStepComponent } from '../components/WizardStep/WizardStep.jsx';

export const WizardStep = connect(
  state => ({
    formOptions: getFormOptions(state)
  }),
  dispatch => ({
    addStepName: stepName => dispatch(wizardStepNameAdd(stepName)),
    onSubmit: data => dispatch(formSubmit(data))
  })
)(WizardStepComponent);
