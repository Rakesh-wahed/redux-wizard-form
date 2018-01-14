import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { WizardNavigationComponent } from './WizardNavigation';

Enzyme.configure({ adapter: new Adapter() });

describe('WizardNavigation component', () => {
  test('snapshot', () => {
    const props = { currentStep: 0, stepsSize: 1, stepsNames: [], onGoToStep: () => {} };
    const Component = shallow(<WizardNavigationComponent {...props} />);
    expect(Component).toMatchSnapshot();
  });
});
