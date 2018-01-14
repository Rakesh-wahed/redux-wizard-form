import { connect } from 'react-redux';
import { getCurrentStep, getStepsSize, getStepsNames } from '../reducer';
import { WizardNavigationComponent } from '../components/WizardNavigation/WizardNavigation';
import { goToStep } from '../actions';

export const WizardNavigation = connect(
  state => ({
    currentStep: getCurrentStep(state),
    stepsSize: getStepsSize(state),
    stepsNames: getStepsNames(state)
  }),
  dispatch => ({
    onGoToStep: (currentStep, step) => {
      if (step < currentStep) {
        dispatch(goToStep(step));
      }
    }
  })
)(WizardNavigationComponent);
