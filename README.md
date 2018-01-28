Redux Wizard Form
=========================

[![Build Status](https://img.shields.io/travis/frankPairs/redux-wizard-form.svg)](https://travis-ci.org/frankPairs/redux-wizard-form)
[![codecov.io](https://codecov.io/gh/frankPairs/redux-wizard-form/branch/master/graph/badge.svg)](https://codecov.io/gh/frankPairs/redux-wizard-form)

Components library to work with wizards forms easily using  [Redux Form](https://github.com/erikras/redux-form).

## Installation

With npm:
```
npm install --save redux-wizard-form
```
With yarn: 
```
yarn add redux-wizard-form
```

##API

### `<WizardForm reduxFormOptions onWizardComplete>`

This component is only a wrapper that allow you to configure your wizard form passing form options. When wizard is complete (all the steps are succeed), onWizardComplete callback is called.

#### Props
* `reduxFormOptions: Object` Accept any [redux-form](https://redux-form.com/7.2.1/docs/api/reduxform.md/) configuration property.
* `onWizardComplete: Function => data`Callback called when all steps are completed.

#### Example
```js
const wizardFormConfiguration = {
	form: 'mywizard',
	updateUnregisteredFields: false
}
<WizardForm
reduxFormOptions={{ 
	form: 'wizard',
	onChange((values) => console.log(values)), updateUnregisteredFields: false 
	}}
onWizardComplete={handleWizardComplete}>
 {steps}
</WizardForm>
```

