// @flow
import types from './types';

type Actions =
  | { type: types.WIZARD_STEPS_SIZE_SET, payload: number }
  | { type: types.WIZARD_STEP_NAME_ADD, payload: string }
  | { type: types.WIZARD_NEXT_STEP }
  | { type: types.WIZARD_PREVIOUS_STEP }
  | { type: types.WIZARD_GO_TO_STEP, payload: number }
  | { type: types.WIZARD_FORM_OPTIONS_SET, payload: Object }
  | { type: types.WIZARD_RESET };

export const wizardStepsSizeSet = (stepsSize: number): Actions => ({
  type: types.WIZARD_STEPS_SIZE_SET,
  payload: stepsSize
});

export const wizardStepNameAdd = (stepName: string): Actions => ({
  type: types.WIZARD_STEP_NAME_ADD,
  payload: stepName
});

export const nextStep = (): Actions => ({
  type: types.WIZARD_NEXT_STEP
});

export const previousStep = (): Actions => ({
  type: types.WIZARD_PREVIOUS_STEP
});

export const goToStep = (step: number): Actions => ({
  type: types.WIZARD_GO_TO_STEP,
  payload: step
});

export const formOptionsSet = (formOptions: Object): Actions => ({
  type: types.WIZARD_FORM_OPTIONS_SET,
  payload: formOptions
});

export const wizardComplete = (data: Object): Actions => ({
  type: types.WIZARD_COMPLETE,
  payload: data
});

export const wizardReset = (): Actions => ({
  type: types.WIZARD_RESET
});
