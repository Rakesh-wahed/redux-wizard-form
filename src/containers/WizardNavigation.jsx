// @flow
import { connect } from 'react-redux';
import { getCurrentStep, getStepsSize, getStepsNames } from '../reducer';
import { WizardNavigationComponent } from '../components/WizardNavigation/WizardNavigation';
import { goToStep } from '../actions';

export const WizardNavigation = connect(
  (state: Object): Object => ({
    currentStep: getCurrentStep(state),
    stepsSize: getStepsSize(state),
    stepsNames: getStepsNames(state)
  }),
  (dispatch: Dispatch): Object => ({
    onGoToStep: (currentStep: number, step: number): void => {
      if (step < currentStep) {
        dispatch(goToStep(step));
      }
    }
  })
)(WizardNavigationComponent);
