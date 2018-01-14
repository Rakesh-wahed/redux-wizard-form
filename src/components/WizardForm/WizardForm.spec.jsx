import React from 'react';
import 'raf/polyfill';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { WizardFormComponent } from './WizardForm';

Enzyme.configure({ adapter: new Adapter() });

describe('WizardForm component', () => {
  test('snapshot', () => {
    const props = {
      reduxFormOptions: { form: 'formTest' },
      isWizardComplete: false,
      isLoaded: true,
      wizardReset: () => {},
      onWizardOptionsLoad: () => {},
      onWizardComplete: () => {}
    };
    const Component = shallow(
      <WizardFormComponent {...props}>
        <p> Test </p>
      </WizardFormComponent>
    );
    expect(Component).toMatchSnapshot();
  });
});
