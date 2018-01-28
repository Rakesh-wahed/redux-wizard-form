import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { Wrapper } from './styles';

export class WizardStepComponent extends Component {
  constructor(props) {
    super(props);
    const { formOptions, component, onSubmit, name, addStepName, onWizardComplete, stepsSize, step } = props;
    const InnerComponent = component;

    this.WizardStepForm = reduxForm(formOptions)(formProps => (
      <Wrapper onSubmit={formProps.handleSubmit(step === stepsSize - 1 ? onWizardComplete : onSubmit)}>
        <InnerComponent {...formProps} />
      </Wrapper>
    ));

    addStepName(name);
  }
  render() {
    const { WizardStepForm } = this;
    const { currentStep, step } = this.props;

    if (currentStep >= step) {
      return  <WizardStepForm />;
    }

    return null;
  }
}

WizardStepComponent.propTypes = {
  name: PropTypes.string,
  currentStep: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  stepsSize: PropTypes.number.isRequired,
  formOptions: PropTypes.shape({
    form: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    onSubmitFail: PropTypes.func,
    onSubmitSuccess: PropTypes.func
  }).isRequired,
  component: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onWizardComplete: PropTypes.func.isRequired,
  addStepName: PropTypes.func.isRequired
};

WizardStepComponent.defaultProps = {
  name: 'Step'
};
