import 'raf/polyfill';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Steps } from './Steps.jsx';

Enzyme.configure({ adapter: new Adapter() });

test('Steps snapshot', () => {
  const component = shallow(
    <Steps steps={[]} activatedSteps={[]} currentStep={0} onGoToStep={() => {}}>
      {() => null}
    </Steps>
  );

  expect(component).toMatchSnapshot();
});
