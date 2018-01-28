import { connect } from 'react-redux';
import { wizardStepsSizeSet } from '../actions';
import { WizardStepsComponent } from '../components/WizardSteps/WizardSteps';
import { getCurrentStep } from '../reducer';

export const WizardSteps = connect(state => ({
  currentStep: getCurrentStep(state)
}), dispatch => ({
  setWizardStepsSize: stepsSize => dispatch(wizardStepsSizeSet(stepsSize))
}))(WizardStepsComponent);
