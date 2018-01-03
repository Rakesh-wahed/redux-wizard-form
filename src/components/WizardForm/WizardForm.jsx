import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, WrapperSteps } from './WizardFormStyles';

export class WizardFormComponent extends Component {
  componentDidMount() {
    const { reduxFormOptions, children, onWizardLoad } = this.props;
    const childrenSize = Array.isArray(children) ? children.length : 1;
    onWizardLoad(childrenSize, reduxFormOptions);
  }

  componentWillReceiveProps(prevProps) {
    if (prevProps.data) {
      this.props.onWizardComplete(prevProps.data);
    }
  }

  render() {
    const { children, isLoaded, currentStep } = this.props;

    if (!isLoaded) {
      return false;
    }

    return (
      <Wrapper>
        {children.map((child, i) => (
          <WrapperSteps key={i} currentStep={currentStep} isCurrentStep={currentStep === i}>
            {child}
          </WrapperSteps>
        ))}
      </Wrapper>
    );
  }
}

WizardFormComponent.propTypes = {
  reduxFormOptions: PropTypes.shape({
    form: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    onSubmitFail: PropTypes.func,
    onSubmitSuccess: PropTypes.func
  }).isRequired,
  currentStep: PropTypes.number.isRequired,
  stepsSize: PropTypes.number.isRequired,
  isLoaded: PropTypes.bool.isRequired,
  data: PropTypes.shape({}),
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  onWizardComplete: PropTypes.func.isRequired,
  onWizardLoad: PropTypes.func.isRequired
};

WizardFormComponent.defaultProps = {
  data: null
};
