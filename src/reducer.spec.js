import types from './types';
import wizardReducer, { initialState } from './reducer';

describe('REDUCER', () => {
  test(`${types.WIZARD_NEXT_STEP}`, () => {
    const initialTestState = { ...initialState, currentStep: 0 };
    const state = wizardReducer(initialTestState, { type: types.WIZARD_NEXT_STEP });
    expect(state).toEqual({ currentStep: 1, data: {}, errors: {} });
  });

  test(`${types.WIZARD_PREVIOUS_STEP}`, () => {
    const initialTestState = { ...initialState, currentStep: 1 };
    const state = wizardReducer(initialTestState, { type: types.WIZARD_PREVIOUS_STEP });
    expect(state).toEqual({ currentStep: 0, data: {}, errors: {} });
  });

  test(`${types.WIZARD_GO_TO_STEP}`, () => {
    const initialTestState = { ...initialState, currentStep: 1 };
    const state = wizardReducer(initialTestState, { type: types.WIZARD_GO_TO_STEP, payload: 5 });
    expect(state).toEqual({ currentStep: 5, data: {}, errors: {} });
  });
});
