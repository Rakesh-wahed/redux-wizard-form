# Redux Wizard Form

[![Build Status](https://img.shields.io/travis/frankPairs/redux-wizard-form.svg)](https://travis-ci.org/frankPairs/redux-wizard-form)
[![codecov.io](https://codecov.io/gh/frankPairs/redux-wizard-form/branch/master/graph/badge.svg)](https://codecov.io/gh/frankPairs/redux-wizard-form)

Component library to work with wizards forms easily using [Redux Form](https://github.com/erikras/redux-form).

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

Library give us some components to manage our wizard. An important consideration about those is that WizardForm component must be the parent component.

### `<WizardForm reduxFormOptions onWizardComplete> {children} </WizardForm>`

This component is a wrapper that allow you to configure your wizard form passing form options. When wizard is complete (all the steps are succeed), onWizardComplete callback is called. Like a children, you can use any component that you want.

#### Props

* `reduxFormOptions: Object` Accept any [redux-form configuration property](https://redux-form.com/7.2.1/docs/api/reduxform.md/). ** "name" ** property is mandatory
* `onWizardComplete: Function => data: Object`Callback called when all steps are completed
* `children: Array<React.Node> | React.Node`It can be component or an

### `<WizardNavigation> {children} </WizardNavigation>`

Component to indicate total steps that you have and which steps are completed.

#### Props

* `children?: Function(currentStep: number, stepSize: number, stepsNames: Array<string>)`Optional property, you can use this property if you want to add a custom wizard navigation component.

#### Example

```js
<WizardNavigation>
  {(currentStep, stepSize, stepsNames) => (
    <div>
      <span> {currenStep} </span> /
      <span> {stepSize} </span>
    </div>
  )}
</WizardNavigation>
```

### `<WizardSteps> {children} </WizardSteps>`

The goal of this component is only to be a wrapper. One important thing about it is that each child must be a WizardStep,

#### Props

* `children: Array<WizardStep>`Array of WizardStep component.

#### Example

```js
<WizardSteps>
  <WizardStep component={PersonalDataComponent} name="Personal Data">
  <WizardStep component={LocationComponent} name="Location">
</WizardSteps>
```

### `<WizardStep component>`

Each step by definitiion is a **form** but don't worry, library create that forms for you. Inside it, you can add any component, includes redux form [Field](https://redux-form.com/7.2.1/docs/api/field.md/), [Fields](https://redux-form.com/7.2.1/docs/api/fields.md/) or [FieldArray](https://redux-form.com/7.2.1/docs/api/fields.md/).

#### Props

* `component: React.Node`Array of WizardStep component.
* `name?: string`Step title. Each name is saved in an array and used by WizardNavigation components. Also you can get all the names by a selector.

#### Example

```js
import * as React from 'react';
import { WizardStep } from 'redux-wizard-form';
import { Field } from 'redux-form';

<WizardStep name="Step 1" component={(formProps) => {
	return (
		<React.Fragment>
		    <Field name="name" component="input" type="text" placeholder="Name" />
		    <Field name="lastname" component="input" type="text" placeholder="Last Name" />
		    <Field name="email" component="input" type="email" placeholder="Email" />
		    <button type="submit"> Next Step </button>
		</React.Fragment>
	);
}}>
```

## Usage

```js
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { Provider } from 'react-redux';
import {
  WizardForm,
  WizardStep,
  WizardSteps,
  WizardNavigation,
  wizardReducer
} from 'redux-wizard-form ';
import { FormStep1, FormStep2, FormStep3 } from './steps';

const reducer = combineReducers({
  form: formReducer,
  myWizard: wizardReducer('myWizard')
});
const store = createStore(reducer);
const wizardFormConfiguration = {
  form: 'mywizard',
  updateUnregisteredFields: false
};
const handleWizardComplete = formData => {
  console.log(`Wizard is complete!! data is ${formData}`);
};

ReactDOM.render(
  <Provider store={store}>
    <WizardForm
      reduxFormOptions={wizardFormConfiguration}
      onWizardComplete={handleWizardComplete}
    >
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
