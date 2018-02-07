// SELECTORS
export function getFormOptions(state: Object): Object {
  return state.wizard.formOptions;
}

export function getData(state: Object): Object {
  return state.wizard.data;
}

export function getCurrentStep(state: Object): number {
  return state.wizard.currentStep;
}

export function getStepsSize(state: Object): number {
  return state.wizard.stepsSize;
}

export function getStepsNames(state: Object): Array<string> {
  return state.wizard.stepsNames;
}

export function isLoaded(state: Object): boolean {
  return state.wizard.isLoaded;
}

export function isWizardComplete(state: Object): boolean {
  return state.wizard.isWizardComplete;
}
