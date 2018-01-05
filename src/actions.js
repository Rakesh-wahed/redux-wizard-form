import types from './types';

export const wizardStepsSizeSet = stepsSize => ({
  type: types.WIZARD_STEPS_SIZE_SET,
  payload: stepsSize
});

export const nextStep = () => ({
  type: types.WIZARD_NEXT_STEP
});

export const previousStep = () => ({
  type: types.WIZARD_PREVIOUS_STEP
});

export const goToStep = step => ({
  type: types.WIZARD_PREVIOUS_STEP,
  payload: step
});

export const formOptionsSet = formOptions => ({
  type: types.WIZARD_FORM_OPTIONS_SET,
  payload: formOptions
});

export const formSubmit = data => ({
  type: types.WIZARD_FORM_SUBMIT,
  payload: data
});
