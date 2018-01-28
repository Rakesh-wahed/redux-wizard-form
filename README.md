Redux Wizard Form
=========================

[![Build Status](https://img.shields.io/travis/frankPairs/redux-wizard-form.svg)](https://travis-ci.org/frankPairs/redux-wizard-form)
[![codecov.io](https://codecov.io/gh/frankPairs/redux-wizard-form/branch/master/graph/badge.svg)](https://codecov.io/gh/frankPairs/redux-wizard-form)

Components library to work with wizards forms easily using  [Redux Form](https://github.com/erikras/redux-form). A wizard 

## Installation

With npm:
```
npm install --save redux-wizard-form
```
With yarn: 
```
yarn add redux-wizard-form
```

## API Components

### `<WizardForm reduxFormOptions onWizardComplete> {children} </WizardForm>`

This component is a wrapper that allow you to configure your wizard form passing form options. When wizard is complete (all the steps are succeed), onWizardComplete callback is called. Like a children, you can use any component that you want.

#### Props
* `reduxFormOptions: Object` Accept any [redux-form configuration property](https://redux-form.com/7.2.1/docs/api/reduxform.md/).
* `onWizardComplete: Function => data: Object`Callback called when all steps are completed
* `children: Array<React.Node> | React.Node`It can be component or an  

### `<WizardNavigation> {children} </WizardNavigation>`  

#### Props
* `children?: Function(currentStep: number, stepSize: number, arrayNames: Array<string>) `Optional property, you have to use this property only if you want to add a custom wizard navigation component.  

### `<WizardSteps> {children} </WizardSteps>`

Wrapper of Steps.  

#### Props
* `children: Array<WizardStep>`Array of WizardStep component.  

### `<WizardStep component>`

Step with a form step content. Inside it, you can add any component, includes redux form [Field](https://redux-form.com/7.2.1/docs/api/field.md/), [Fields](https://redux-form.com/7.2.1/docs/api/fields.md/) and  [FieldArray](https://redux-form.com/7.2.1/docs/api/fields.md/).  

#### Props
* `component: React.Node`Array of WizardStep component.  

## Usage
```js
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { Provider } from 'react-redux';
import { WizardForm, WizardStep, WizardSteps, WizardNavigation, wizardReducer } from 'redux-wizard-form ';
import { FormStep1, FormStep2, FormStep3 }   from './steps';

const reducer = combineReducers({
	form: formReducer,
	wizard: wizardReducer
});
const store = createStore(reducer);
const wizardFormConfiguration = {
	form: 'mywizard',
	updateUnregisteredFields: false
}
const handleWizardComplete = (formData) => {
	console.log(`Wizard is complete!! data is ${formData}`)
}

ReactDOM.render(
	<Provider store={store}>
		<WizardForm reduxFormOptions={wizardFormConfiguration} onWizardComplete={handleWizardComplete}>
			<WizardNavigation />
			<WizardSteps>
				<WizardStep component={FormStep1} />
				<WizardStep component={FormStep2} />
				<WizardStep component={FormStep3} />
			</WizardSteps>
		</WizardForm>
	</Provider>,
	document.getElementsByClassName('app')[0]
);


```

