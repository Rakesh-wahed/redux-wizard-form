import types from './types';

export const initialState = {
  stepsSize: 0,
  stepsNames: [],
  formOptions: {
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true
  },
  currentStep: 0,
  data: null,
  isLoaded: false,
  isWizardComplete: false
};

// UTILS
function getValidStep(prevStep, nextStep, stepSize) {
  return nextStep >= 0 && nextStep <= stepSize - 1 ? nextStep : prevStep;
}

// REDUCER
export const wizardReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.WIZARD_FORM_OPTIONS_SET:
      return { ...state, formOptions: { ...state.formOptions, ...action.payload }, isLoaded: true };
    case types.WIZARD_STEPS_SIZE_SET:
      return { ...state, stepsSize: action.payload };
    case types.WIZARD_STEP_NAME_ADD:
      return { ...state, stepsNames: [...state.stepsNames, action.payload] };
    case types.WIZARD_NEXT_STEP:
      return { ...state, currentStep: getValidStep(state.currentStep, state.currentStep + 1, state.stepsSize) };
    case types.WIZARD_PREVIOUS_STEP:
      return { ...state, currentStep: getValidStep(state.currentStep, state.currentStep - 1, state.stepsSize) };
    case types.WIZARD_GO_TO_STEP:
      return { ...state, currentStep: getValidStep(state.currentStep, action.payload, state.stepsSize) };
    case types.WIZARD_COMPLETE:
      return { ...state, isWizardComplete: true, data: action.payload };
    case types.WIZARD_RESET:
      return initialState;
    default:
      return state;
  }
};

// SELECTORS
export const getFormOptions = state => state.wizard.formOptions;
export const getData = state => state.wizard.data;
export const getCurrentStep = state => state.wizard.currentStep;
export const getStepsSize = state => state.wizard.stepsSize;
export const getStepsNames = state => state.wizard.stepsNames;
export const isLoaded = state => state.wizard.isLoaded;
export const isWizardComplete = state => state.wizard.isWizardComplete;
