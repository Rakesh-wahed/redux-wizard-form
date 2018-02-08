// @flow
import { path } from 'ramda';

let globalPath = 'wizard';

export function globalizeSelector(selector: Function): Function {
  return (state, ...args) =>
    selector(path(globalPath.split('.'), state), ...args);
}

export function setGlobalPath(statePath: string) {
  globalPath = statePath;
}

// SELECTORS
export function getFormOptions(state: Object): Function {
  return globalizeSelector(localState => localState.formOptions)(state);
}

export function getData(state: Object): Function {
  return globalizeSelector(localState => localState.data)(state);
}

export function getCurrentStep(state: Object): Function {
  return globalizeSelector(localState => localState.currentStep)(state);
}

export function getStepsSize(state: Object): Function {
  return globalizeSelector(localState => localState.stepsSize)(state);
}

export function getStepsNames(state: Object): Function {
  return globalizeSelector(localState => localState.stepsNames)(state);
}

export function isLoaded(state: Object): Function {
  return globalizeSelector(localState => localState.isLoaded)(state);
}

export function isWizardComplete(state: Object): Function {
  return globalizeSelector(localState => localState.isWizardComplete)(state);
}
