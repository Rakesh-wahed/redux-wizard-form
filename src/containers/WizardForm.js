import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';
import { wizardLoad } from '../actions';
import { getIsLoaded, getCurrentStep, getStepsSize } from '../reducer';
import { WizardFormComponent } from '../components/WizardForm/WizardForm.jsx';

export const WizardForm = connect(
  (state, ownProps) => ({
    isLoaded: getIsLoaded(state),
    data: getFormValues(ownProps.reduxFormOptions.form)(state) || {},
    currentStep: getCurrentStep(state),
    stepsSize: getStepsSize(state)
  }),
  dispatch => ({
    onWizardLoad: (stepsSize, formOptions) => dispatch(wizardLoad(stepsSize, formOptions))
  })
)(WizardFormComponent);
