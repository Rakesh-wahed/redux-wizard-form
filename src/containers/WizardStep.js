import { connect } from 'react-redux';
import { formSubmit, wizardStepNameAdd } from '../actions';
import { getFormOptions, getCurrentStep } from '../reducer';
import { WizardStepComponent } from '../components/WizardStep/WizardStep.jsx';

export const WizardStep = connect(
  state => ({
    formOptions: getFormOptions(state),
    currentStep: getCurrentStep(state)
  }),
  dispatch => ({
    addStepName: stepName => dispatch(wizardStepNameAdd(stepName)),
    onSubmit: data => dispatch(formSubmit(data))
  })
)(WizardStepComponent);
