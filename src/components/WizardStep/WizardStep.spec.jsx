import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { WizardStepComponent } from './WizardStep';

Enzyme.configure({ adapter: new Adapter() });

describe('WizardStep component', () => {
  test('snapshot', () => {
    const props = {
      currentStep: 0,
      step: 0,
      stepsSize: 1,
      formOptions: { form: 'formTest' },
      isWizardComplete: false,
      isLoaded: true,
      component: () => {},
      addStepName: () => {},
      onSubmit: () => {},
      onWizardComplete: () => {}
    };
    const Component = shallow(<WizardStepComponent {...props} />);
    expect(Component).toMatchSnapshot();
  });
});
