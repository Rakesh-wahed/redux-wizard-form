import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';

export class WizardStepsComponent extends Component {
  componentWillMount() {
    const { children, setWizardStepsSize } = this.props;
    const childrenSize = Array.isArray(children) ? children.length : 1;

    setWizardStepsSize(childrenSize);
  }

  render() {
    const { children, currentStep } = this.props;

    if (Array.isArray(children)) {
      return children.map((child, i) => (
        <Wrapper key={i} currentStep={currentStep} isCurrentStep={currentStep === i}>
          {React.cloneElement(child, { step: i, key: i })}
        </Wrapper>
      ));
    }

    return children;
  }
}

WizardStepsComponent.propTypes = {
  currentStep: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  setWizardStepsSize: PropTypes.func.isRequired
};
