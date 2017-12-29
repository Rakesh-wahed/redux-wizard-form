import types from './types';

export const initialState = {
  currentStep: 0,
  data: {},
  errors: {}
};

export default (state, action) => {
  switch (action.type) {
    case types.WIZARD_NEXT_STEP:
      return { ...state, currentStep: state.currentStep + 1 };
    case types.WIZARD_PREVIOUS_STEP:
      return { ...state, currentStep: state.currentStep - 1 };
    case types.WIZARD_GO_TO_STEP:
      return { ...state, currentStep: action.payload };
    default:
      return state;
  }
};
