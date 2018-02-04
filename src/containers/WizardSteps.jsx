// @flow
import { connect } from 'react-redux';
import { wizardStepsSizeSet } from '../actions';
import { WizardStepsComponent } from '../components/WizardSteps/WizardSteps';
import { getCurrentStep } from '../reducer';

export const WizardSteps = connect(
  (state: Object): Object => ({
    currentStep: getCurrentStep(state)
  }),
  (dispatch: Function): Object => ({
    setWizardStepsSize: (stepsSize: number): void =>
      dispatch(wizardStepsSizeSet(stepsSize))
  })
)(WizardStepsComponent);
