// @flow
import * as React from 'react';
import { Wrapper } from './styles';

type Props = {
  currentStep: number,
  children: Array<React.Element<Wrapper>>,
  setWizardStepsSize: Function
};

export class WizardStepsComponent extends React.Component<Props> {
  componentWillMount(): void {
    const { children, setWizardStepsSize } = this.props;
    const childrenSize = Array.isArray(children) ? children.length : 1;

    setWizardStepsSize(childrenSize);
  }

  render(): React.Node {
    const { children, currentStep } = this.props;

    if (Array.isArray(children)) {
      return children.map((child, i) => (
        <Wrapper
          key={i}
          currentStep={currentStep}
          isCurrentStep={currentStep === i}
        >
          {React.cloneElement(child, { step: i, key: i })}
        </Wrapper>
      ));
    }

    return children;
  }
}
