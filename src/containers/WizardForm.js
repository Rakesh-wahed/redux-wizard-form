import { connect } from 'react-redux';
import { getData, isFinalStep, isLoaded } from '../reducer';
import { WizardFormComponent } from '../components/WizardForm/WizardForm.jsx';
import { formOptionsSet } from '../actions';

export const WizardForm = connect(
  state => ({
    data: getData(state),
    isLoaded: isLoaded(state),
    isFinalStep: isFinalStep(state)
  }),
  dispatch => ({
    onWizardOptionsLoad: formOptions => dispatch(formOptionsSet(formOptions))
  })
)(WizardFormComponent);
