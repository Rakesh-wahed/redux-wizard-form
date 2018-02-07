// @flow
import { connect } from 'react-redux';
import { nextStep, wizardStepNameAdd, wizardComplete } from '../actions';
import { getFormOptions, getCurrentStep, getStepsSize } from '../selectors';
import { WizardStepComponent } from '../components/WizardStep/WizardStep';

export const WizardStep = connect(
  (state: Object): Object => ({
    formOptions: getFormOptions(state),
    currentStep: getCurrentStep(state),
    stepsSize: getStepsSize(state)
  }),
  (dispatch: Function): Object => ({
    addStepName: (stepName: string): void =>
      dispatch(wizardStepNameAdd(stepName)),
    onSubmit: (): void => dispatch(nextStep()),
    onWizardComplete: (data: Object): void => dispatch(wizardComplete(data))
  })
)(WizardStepComponent);
