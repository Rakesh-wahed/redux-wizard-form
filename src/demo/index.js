import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { Provider } from 'react-redux';
import { WizardForm, WizardStep, wizardReducer } from '../index';
import { FormStep1, FormStep2, FormStep3 } from './fixtures';

const reducers = {
  form: formReducer,
  wizard: wizardReducer
};
const reducer = combineReducers(reducers);
const store = createStore(reducer);

document.addEventListener('DOMContentLoaded', () => {
  function handleWizardComplete(data) {
    console.log(data);
  }

  ReactDOM.render(
    <Provider store={store}>
      <div>
        <h1> Redux Form Wizard</h1>

        <WizardForm reduxFormOptions={{ form: 'wizard' }} onWizardComplete={handleWizardComplete}>
          <WizardStep component={FormStep1} />
          <WizardStep component={FormStep2} />
          <WizardStep component={FormStep3} />
        </WizardForm>
      </div>
    </Provider>,
    document.getElementById('app')
  );
});
