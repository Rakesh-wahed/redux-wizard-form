import types from './types';

export const wizardLoad = (stepsSize, formOptions) => ({
  type: types.WIZARD_LOAD,
  payload: {
    stepsSize,
    formOptions
  }
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
