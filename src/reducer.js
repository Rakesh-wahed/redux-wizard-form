import types from './types';

export const initialState = {
  stepsSize: 0,
  formOptions: {
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true
  },
  currentStep: 0,
  data: {},
  isLoaded: false
};

export const wizardReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.WIZARD_LOAD:
      return {
        ...state,
        currentStep: 0,
        stepsSize: action.payload.stepsSize,
        formOptions: { ...state.formOptions, ...action.payload.formOptions },
        isLoaded: true
      };
    case types.WIZARD_NEXT_STEP:
      return { ...state, currentStep: state.currentStep + 1 };
    case types.WIZARD_PREVIOUS_STEP:
      return { ...state, currentStep: state.currentStep - 1 };
    case types.WIZARD_GO_TO_STEP:
      return { ...state, currentStep: action.payload };
    case types.WIZARD_FORM_SUBMIT:
      return { ...state, currentStep: state.currentStep + 1 };
    default:
      return state;
  }
};

export const getFormOptions = state => state.wizard.formOptions;
export const getIsLoaded = state => state.wizard.isLoaded;
export const getData = state => state.wizard.data;
export const getCurrentStep = state => state.wizard.currentStep;
export const getStepsSize = state => state.wizard.stepsSize;
