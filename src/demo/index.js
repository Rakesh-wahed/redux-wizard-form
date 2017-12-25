import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { Provider } from 'react-redux';
import { reduxWizardForm } from '../containers';
import { FormStep1, FormStep2, FormStep3 } from './fixtures';
import { WizardFormWrapper, PageWrapper } from './styles';

const reducers = {
  form: formReducer
};
const reducer = combineReducers(reducers);
const store = createStore(reducer);
const DemoWizardForm = reduxWizardForm({ form: 'demo' })([FormStep1, FormStep2, FormStep3]);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <PageWrapper>
        <h1> Redux Form Wizard</h1>

        <WizardFormWrapper>
          <DemoWizardForm onWizardComplete={data => console.log(data)} />
        </WizardFormWrapper>
      </PageWrapper>
    </Provider>,
    document.getElementById('app')
  );
});
