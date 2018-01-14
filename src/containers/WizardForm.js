import { connect } from 'react-redux';
import { isWizardComplete, isLoaded, getData } from '../reducer';
import { WizardFormComponent } from '../components/WizardForm/WizardForm.jsx';
import { formOptionsSet, wizardReset } from '../actions';

export const WizardForm = connect(
  state => ({
    isWizardComplete: isWizardComplete(state),
    isLoaded: isLoaded(state),
    data: getData(state)
  }),
  dispatch => ({
    wizardReset: () => dispatch(wizardReset()),
    onWizardOptionsLoad: formOptions => dispatch(formOptionsSet(formOptions))
  })
)(WizardFormComponent);
