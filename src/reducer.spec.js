import types from './types';
import { initialState, wizardReducer } from './reducer';

describe('REDUCER', () => {
  test(`${types.WIZARD_NEXT_STEP}`, () => {
    const initialTestState = { ...initialState, currentStep: 0 };
    const state = wizardReducer(initialTestState, { type: types.WIZARD_NEXT_STEP });
    expect(state).toEqual({ ...initialState, currentStep: 1 });
  });

  test(`${types.WIZARD_PREVIOUS_STEP}`, () => {
    const initialTestState = { ...initialState, currentStep: 1 };
    const state = wizardReducer(initialTestState, { type: types.WIZARD_PREVIOUS_STEP });
    expect(state).toEqual({ ...initialState, currentStep: 0 });
  });

  test(`${types.WIZARD_GO_TO_STEP}`, () => {
    const initialTestState = { ...initialState, currentStep: 1 };
    const state = wizardReducer(initialTestState, { type: types.WIZARD_GO_TO_STEP, payload: 5 });
    expect(state).toEqual({ ...initialState, currentStep: 5 });
  });

  test(`${types.WIZARD_FORM_SUBMIT}`, () => {
    const initialTestState = { ...initialState, currentStep: 2 };
    const payload = { name: 'Frank' };
    const state = wizardReducer(initialTestState, { type: types.WIZARD_FORM_SUBMIT, payload });
    expect(state).toEqual({ ...initialState, currentStep: 3, data: payload });
  });

  test(`${types.WIZARD_LOAD}`, () => {
    const initialTestState = { ...initialState };
    const payload = { stepsSize: 3, formOptions: { form: 'wizard' } };
    const state = wizardReducer(initialTestState, { type: types.WIZARD_LOAD, payload });
    expect(state).toEqual({
      ...initialState,
      currentStep: 0,
      stepsSize: 3,
      formOptions: { form: 'wizard' },
      isLoaded: true
    });
  });
});
