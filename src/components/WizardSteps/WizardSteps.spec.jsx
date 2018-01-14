import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { WizardStepsComponent } from './WizardSteps';

Enzyme.configure({ adapter: new Adapter() });

describe('WizardSteps component', () => {
  test('snapshot', () => {
    const props = { setWizardStepsSize: () => {} };
    const Component = shallow(
      <WizardStepsComponent {...props}>
        <p>Test</p>
      </WizardStepsComponent>
    );
    expect(Component).toMatchSnapshot();
  });
});