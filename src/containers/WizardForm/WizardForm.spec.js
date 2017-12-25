import 'raf/polyfill';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { reduxWizardForm } from './WizardForm.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('reduxWizard form', () => {
  test('reduxWizardForm snapshot', () => {
    const WizardForm = reduxWizardForm({}, []);
    const component = shallow(<WizardForm />);

    expect(component).toMatchSnapshot();
  });
});
