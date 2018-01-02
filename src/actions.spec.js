import types from './types';
import * as actions from './actions';

describe('ACTIONS', () => {
  test(`${types.WIZARD_NEXT_STEP}`, () => {
    const action = actions.nextStep();
    expect(action).toEqual({ type: types.WIZARD_NEXT_STEP });
  });

  test(`${types.WIZARD_PREVIOUS_STEP}`, () => {
    const action = actions.previousStep();
    expect(action).toEqual({ type: types.WIZARD_PREVIOUS_STEP });
  });

  test(`${types.WIZARD_GO_TO_STEP}`, () => {
    const action = actions.goToStep(2);
    expect(action).toEqual({ type: types.WIZARD_PREVIOUS_STEP, payload: 2 });
  });

  test(`${types.WIZARD_GO_TO_STEP}`, () => {
    const action = actions.goToStep(2);
    expect(action).toEqual({ type: types.WIZARD_PREVIOUS_STEP, payload: 2 });
  });

  test(`${types.WIZARD_FORM_SUBMIT}`, () => {
    const action = actions.formSubmit();
    expect(action).toEqual({ type: types.WIZARD_FORM_SUBMIT });
  });

  test(`${types.WIZARD_LOAD}`, () => {
    const action = actions.wizardLoad(3, {});
    expect(action).toEqual({ type: types.WIZARD_LOAD, payload: { stepsSize: 3, formOptions: {} } });
  });
});
