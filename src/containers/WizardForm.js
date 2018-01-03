import { connect } from 'react-redux';
import { wizardLoad } from '../actions';
import { getIsLoaded, getCurrentStep, getStepsSize, getData } from '../reducer';
import { WizardFormComponent } from '../components/WizardForm/WizardForm.jsx';

export const WizardForm = connect(
  state => ({
    isLoaded: getIsLoaded(state),
    data: getData(state),
    currentStep: getCurrentStep(state),
    stepsSize: getStepsSize(state)
  }),
  dispatch => ({
    onWizardLoad: (stepsSize, formOptions) => dispatch(wizardLoad(stepsSize, formOptions))
  })
)(WizardFormComponent);
