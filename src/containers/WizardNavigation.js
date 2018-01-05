import { connect } from 'react-redux';
import { getCurrentStep, getStepsSize } from '../reducer';
import { WizardNavigationComponent } from '../components/WizardNavigation/WizardNavigation.jsx';

export const WizardNavigation = connect(state => ({
  currentStep: getCurrentStep(state),
  stepsSize: getStepsSize(state)
}))(WizardNavigationComponent);
