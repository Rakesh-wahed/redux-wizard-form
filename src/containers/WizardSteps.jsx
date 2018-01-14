import { connect } from 'react-redux';
import { wizardStepsSizeSet } from '../actions';
import { WizardStepsComponent } from '../components/WizardSteps/WizardSteps.jsx';

export const WizardSteps = connect(null, dispatch => ({
  setWizardStepsSize: stepsSize => dispatch(wizardStepsSizeSet(stepsSize))
}))(WizardStepsComponent);
