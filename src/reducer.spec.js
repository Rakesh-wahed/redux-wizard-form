import types from './types';
import { initialState, wizardReducer } from './reducer';

describe('REDUCER', () => {
  test(`${types.WIZARD_NEXT_STEP}`, () => {
    const initialTestState = { ...initialState, currentStep: 0, stepsSize: 5 };
    const state = wizardReducer(initialTestState, { type: types.WIZARD_NEXT_STEP });
    expect(state).toEqual({ ...state, currentStep: 1 });
  });

  test(`${types.WIZARD_PREVIOUS_STEP}`, () => {
    const initialTestState = { ...initialState, currentStep: 1, stepsSize: 5 };
    const state = wizardReducer(initialTestState, { type: types.WIZARD_PREVIOUS_STEP });
    expect(state).toEqual({ ...state, currentStep: 0 });
  });

  test(`${types.WIZARD_GO_TO_STEP}`, () => {
    const initialTestState = { ...initialState, currentStep: 1, stepsSize: 5 };
    const state = wizardReducer(initialTestState, { type: types.WIZARD_GO_TO_STEP, payload: 4 });
    expect(state).toEqual({ ...state, currentStep: 4 });
  });

  test(`${types.WIZARD_FORM_SUBMIT}`, () => {
    const initialTestState = { ...initialState, currentStep: 2, stepsSize: 5 };
    const payload = { name: 'Frank' };
    const state = wizardReducer(initialTestState, { type: types.WIZARD_FORM_SUBMIT, payload });
    expect(state).toEqual({ ...state, currentStep: 3, data: payload });
  });

  test(`${types.WIZARD_FORM_OPTIONS_SET}`, () => {
    const initialTestState = { ...initialState };
    const payload = { name: 'form' };
    const state = wizardReducer(initialTestState, { type: types.WIZARD_FORM_OPTIONS_SET, payload });
    expect(state).toEqual({ ...state, formOptions: payload, isLoaded: true });
  });

  test(`${types.WIZARD_STEPS_SIZE_SET}`, () => {
    const initialTestState = { ...initialState };
    const payload = 8;
    const state = wizardReducer(initialTestState, { type: types.WIZARD_STEPS_SIZE_SET, payload });
    expect(state).toEqual({ ...state, stepsSize: payload });
  });

  test(`${types.WIZARD_STEP_NAME_ADD}`, () => {
    const initialTestState = { ...initialState };
    const payload = 'test';
    const state = wizardReducer(initialTestState, { type: types.WIZARD_STEP_NAME_ADD, payload });
    expect(state).toEqual({ ...state, stepsNames: ['test'] });
  });
});
