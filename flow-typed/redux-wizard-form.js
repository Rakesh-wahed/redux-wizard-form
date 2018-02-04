import * as React from 'react';

declare module 'redux-wizard-form' {
  declare type ReduxFormProps = {
    form: string,
    onChange: Function,
    onSubmit: Function,
    onSubmitFail: Function,
    onSubmitSuccess: Function
  };

  declare type WizardForm = {
    reduxFormOptions: ReduxFormProps,
    children: React.Node,
    data?: Object,
    isWizardComplete: boolean,
    isLoaded: boolean,
    wizardReset: Function,
    onWizardOptionsLoad: Function,
    onWizardComplete: Function
  };

  declare type WizardNavigation = {
    currentStep: number,
    stepsSize: number,
    stepsNames: Array<string>,
    children?: Function,
    onGoToStep: Function
  };

  declare type WizardStep = {
    name?: string,
    currentStep: number,
    step: number,
    stepsSize: number,
    formOptions: ReduxFormProps,
    component: React.ComponentType<*>,
    onSubmit: Function,
    onWizardComplete: Function,
    addStepName: Function
  };

  declare type WizardSteps = {
    currentStep: number,
    children: Array<React.Element<any>>,
    setWizardStepsSize: Function
  };
}
