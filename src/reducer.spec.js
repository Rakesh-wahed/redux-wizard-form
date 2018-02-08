import types from './types';
import { initialState, wizardReducer, getValidStep } from './reducer';

describe('REDUCER', () => {
  test(`${types.WIZARD_NEXT_STEP}`, () => {
    const initialTestState = { ...initialState, currentStep: 0, stepsSize: 5 };
    const state = wizardReducer()(initialTestState, {
      type: types.WIZARD_NEXT_STEP
    });
    expect(state).toEqual({ ...state, currentStep: 1 });
  });

  test(`${types.WIZARD_PREVIOUS_STEP}`, () => {
    const initialTestState = { ...initialState, currentStep: 1, stepsSize: 5 };
    const state = wizardReducer()(initialTestState, {
      type: types.WIZARD_PREVIOUS_STEP
    });
    expect(state).toEqual({ ...state, currentStep: 0 });
  });

  test(`${types.WIZARD_GO_TO_STEP}`, () => {
    const initialTestState = { ...initialState, currentStep: 4, stepsSize: 5 };
    const state = wizardReducer()(initialTestState, {
      type: types.WIZARD_GO_TO_STEP,
      payload: 0
    });
    expect(state).toEqual({ ...state, currentStep: 0 });
  });

  test(`${types.WIZARD_FORM_OPTIONS_SET}`, () => {
    const initialTestState = { ...initialState };
    const payload = { name: 'form' };
    const state = wizardReducer()(initialTestState, {
      type: types.WIZARD_FORM_OPTIONS_SET,
      payload
    });
    expect(state).toEqual({
      ...state,
      formOptions: { ...state.formOptions, ...payload },
      isLoaded: true
    });
  });

  test(`${types.WIZARD_STEPS_SIZE_SET}`, () => {
    const initialTestState = { ...initialState };
    const payload = 8;
    const state = wizardReducer()(initialTestState, {
      type: types.WIZARD_STEPS_SIZE_SET,
      payload
    });
    expect(state).toEqual({ ...state, stepsSize: payload });
  });

  test(`${types.WIZARD_STEP_NAME_ADD}`, () => {
    const initialTestState = { ...initialState };
    const payload = 'test';
    const state = wizardReducer()(initialTestState, {
      type: types.WIZARD_STEP_NAME_ADD,
      payload
    });
    expect(state).toEqual({ ...state, stepsNames: ['test'] });
  });

  test(`${types.WIZARD_COMPLETE}`, () => {
    const initialTestState = { ...initialState };
    const payload = { name: 'test' };
    const state = wizardReducer()(initialTestState, {
      type: types.WIZARD_COMPLETE,
      payload
    });
    expect(state).toEqual({ ...state, isWizardComplete: true, data: payload });
  });

  test(`${types.WIZARD_RESET}`, () => {
    const initialTestState = { isWizardComplete: true };
    const state = wizardReducer()(initialTestState, {
      type: types.WIZARD_RESET
    });
    expect(state).toEqual(initialState);
  });

  test('getValidStep', () => {
    const result1 = getValidStep(1, 2, 4);
    const result2 = getValidStep(4, 5, 4);
    const result3 = getValidStep(0, -1, 4);

    expect(result1).toBe(2);
    expect(result2).toBe(4);
    expect(result3).toBe(0);
  });
});
