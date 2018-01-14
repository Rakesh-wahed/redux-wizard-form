import { connect } from 'react-redux';
import { nextStep, wizardStepNameAdd, wizardComplete } from '../actions';
import { getFormOptions, getCurrentStep, getStepsSize } from '../reducer';
import { WizardStepComponent } from '../components/WizardStep/WizardStep';

export const WizardStep = connect(
  state => ({
    formOptions: getFormOptions(state),
    currentStep: getCurrentStep(state),
    stepsSize: getStepsSize(state)
  }),
  dispatch => ({
    addStepName: stepName => dispatch(wizardStepNameAdd(stepName)),
    onSubmit: () => dispatch(nextStep()),
    onWizardComplete: data => dispatch(wizardComplete(data))
  })
)(WizardStepComponent);
