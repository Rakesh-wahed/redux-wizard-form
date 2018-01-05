import { connect } from 'react-redux';
import { wizardStepsSizeSet } from '../actions';
import { getCurrentStep } from '../reducer';
import { WizardStepsComponent } from '../components/WizardSteps/WizardSteps.jsx';

export const WizardSteps = connect(
  state => ({
    currentStep: getCurrentStep(state)
  }),
  dispatch => ({
    onWizardStepsSet: stepsSize => dispatch(wizardStepsSizeSet(stepsSize))
  })
)(WizardStepsComponent);
