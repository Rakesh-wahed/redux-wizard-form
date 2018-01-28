import React from 'react';
import 'raf/polyfill';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { WizardStepsComponent } from './WizardSteps';

Enzyme.configure({ adapter: new Adapter() });

describe('WizardSteps component', () => {
  test('snapshot', () => {
    const props = { currentStep: 2, setWizardStepsSize: () => {} };
    const Component = shallow(
      <WizardStepsComponent {...props}>
        <p>Test</p>
      </WizardStepsComponent>
    );
    expect(Component).toMatchSnapshot();
  });
});
