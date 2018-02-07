// @flow
import { connect } from 'react-redux';
import { isWizardComplete, isLoaded, getData } from '../selectors';
import { WizardFormComponent } from '../components/WizardForm/WizardForm';
import { formOptionsSet, wizardReset } from '../actions';

export const WizardForm = connect(
  (state: Object): Object => ({
    isWizardComplete: isWizardComplete(state),
    isLoaded: isLoaded(state),
    data: getData(state)
  }),
  (dispatch: Function): Object => ({
    wizardReset: () => dispatch(wizardReset()),
    onWizardOptionsLoad: formOptions => dispatch(formOptionsSet(formOptions))
  })
)(WizardFormComponent);
