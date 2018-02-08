import { createStore, combineReducers } from 'redux';
import { wizardReducer } from './reducer';
import * as selectors from './selectors';

describe('SELECTORS', () => {
  const reducer = combineReducers({ wizardTest: wizardReducer('wizardTest') });
  const store = createStore(reducer, {
    wizardTest: {
      stepsSize: 5,
      stepsNames: ['step1', 'step2'],
      formOptions: {
        destroyOnUnmount: false,
        forceUnregisterOnUnmount: true
      },
      currentStep: 1,
      data: { field: 'value' },
      isLoaded: true,
      isWizardComplete: false
    }
  });

  test('getFormOptions', () => {
    const state = store.getState();
    expect(selectors.getFormOptions(state)).toEqual({
      destroyOnUnmount: false,
      forceUnregisterOnUnmount: true
    });
  });

  test('getData', () => {
    const state = store.getState();
    expect(selectors.getData(state)).toEqual({ field: 'value' });
  });

  test('getCurrentStep', () => {
    const state = store.getState();
    expect(selectors.getCurrentStep(state)).toBe(1);
  });

  test('getStepsSize', () => {
    const state = store.getState();
    expect(selectors.getStepsSize(state)).toBe(5);
  });

  test('getStepsNames', () => {
    const state = store.getState();
    expect(selectors.getStepsNames(state)).toEqual(['step1', 'step2']);
  });

  test('isLoaded', () => {
    const state = store.getState();
    expect(selectors.isLoaded(state)).toBeTruthy();
  });

  test('isWizardComplete', () => {
    const state = store.getState();
    expect(selectors.isWizardComplete(state)).toBeFalsy();
  });

  test('globalizeSelector', () => {
    const state = store.getState();
    expect(
      selectors.globalizeSelector(localState => localState.isWizardComplete)(
        state
      )
    ).toBeFalsy();
  });
});
