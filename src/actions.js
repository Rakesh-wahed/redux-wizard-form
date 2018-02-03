// @flow
import types from './types';

export const wizardStepsSizeSet = (
  stepsSize: number
): { type: types.WIZARD_STEPS_SIZE_SET, payload: number } => ({
  type: types.WIZARD_STEPS_SIZE_SET,
  payload: stepsSize
});

export const wizardStepNameAdd = (
  stepName: string
): { type: types.WIZARD_STEP_NAME_ADD, payload: string } => ({
  type: types.WIZARD_STEP_NAME_ADD,
  payload: stepName
});

export const nextStep = (): { type: types.WIZARD_NEXT_STEP } => ({
  type: types.WIZARD_NEXT_STEP
});

export const previousStep = (): { type: types.WIZARD_PREVIOUS_STEP } => ({
  type: types.WIZARD_PREVIOUS_STEP
});

export const goToStep = (
  step: number
): { type: types.WIZARD_GO_TO_STEP, payload: number } => ({
  type: types.WIZARD_GO_TO_STEP,
  payload: step
});

export const formOptionsSet = (
  formOptions: Object
): { type: types.WIZARD_FORM_OPTIONS_SET, payload: Object } => ({
  type: types.WIZARD_FORM_OPTIONS_SET,
  payload: formOptions
});

export const wizardComplete = (
  data: Object
): { type: types.WIZARD_COMPLETE, payload: Object } => ({
  type: types.WIZARD_COMPLETE,
  payload: data
});

export const wizardReset = (): { type: types.WIZARD_RESET } => ({
  type: types.WIZARD_RESET
});
