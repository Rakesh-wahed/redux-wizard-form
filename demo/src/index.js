import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { Provider } from 'react-redux';
import { WizardForm, WizardStep, WizardSteps, WizardNavigation, wizardReducer } from '../../src';
import { FormStep1, FormStep2, FormStep3 } from './steps';

const reducers = {
  form: formReducer,
  wizard: wizardReducer
};

const reducer = combineReducers(reducers);
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

document.addEventListener('DOMContentLoaded', () => {
  function handleWizardComplete(data) {
    console.log(data);
  }

  ReactDOM.render(
    <Provider store={store}>
      <div>
        <h1> Redux Form Wizard</h1>

        <WizardForm reduxFormOptions={{ form: 'wizard' }} onWizardComplete={handleWizardComplete}>
          <WizardNavigation />
          <WizardSteps>
            <WizardStep component={FormStep1} />
            <WizardStep component={FormStep2} />
            <WizardStep component={FormStep3} />
          </WizardSteps>
        </WizardForm>
      </div>
    </Provider>,
    document.getElementsByClassName('app')[0]
  );
});
