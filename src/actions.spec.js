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
    const action = actions.formSubmit({ name: 'Frank' });
    expect(action).toEqual({ type: types.WIZARD_FORM_SUBMIT, payload: { name: 'Frank' } });
  });

  test(`${types.WIZARD_FORM_OPTIONS_SET}`, () => {
    const action = actions.formOptionsSet({ name: 'formTest' });
    expect(action).toEqual({ type: types.WIZARD_FORM_OPTIONS_SET, payload: { name: 'formTest' } });
  });

  test(`${types.WIZARD_STEPS_SIZE_SET}`, () => {
    const action = actions.wizardStepsSizeSet(6);
    expect(action).toEqual({ type: types.WIZARD_STEPS_SIZE_SET, payload: 6 });
  });

  test(`${types.WIZARD_STEP_NAME_ADD}`, () => {
    const action = actions.wizardStepNameAdd('step');
    expect(action).toEqual({ type: types.WIZARD_STEP_NAME_ADD, payload: 'step' });
  });
});
