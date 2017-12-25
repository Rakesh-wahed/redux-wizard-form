import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { WizardSteps } from '../../components';

export const reduxWizardForm = formOptions => steps => {
  if (!Array.isArray(steps)) {
    return () => null;
  }

  class WizardForm extends Component {
    state = {
      formData: {},
      currentStep: 0,
      activatedSteps: [0]
    };

    onNextStep = () => {
      const nextStep = this.state.currentStep + 1;

      if (this.isValidStep(nextStep)) {
        this.setState({ currentStep: nextStep });
      }
    };

    onPreviousStep = () => {
      const nextStep = this.state.currentStep - 1;

      if (this.isValidStep(nextStep)) {
        this.setState({ currentStep: nextStep });
      }
    };

    onGoToStep = step => {
      if (this.isValidStep(step)) {
        this.setState({ currentStep: step });
      }
    };

    onSubmit = data => {
      const { formData, activatedSteps, currentStep } = this.state;
      const nextFormData = { ...formData, ...data };

      if (this.state.currentStep === this.stepSize - 1) {
        return this.props.onWizardComplete(nextFormData);
      }

      this.setState({
        formData: nextFormData,
        activatedSteps: [...activatedSteps, currentStep + 1]
      });

      return this.onNextStep();
    };

    stepSize = steps.length;

    isValidStep(step) {
      return step >= 0 && step < this.stepSize;
    }

    render() {
      const { currentStep, activatedSteps, nextAnimation, prevAnimation } = this.state;

      return (
        <WizardSteps
          formOptions={formOptions}
          steps={steps}
          currentStep={currentStep}
          activatedSteps={activatedSteps}
          nextAnimation={nextAnimation}
          prevAnimation={prevAnimation}
          onSubmit={this.onSubmit}
          onGoToStep={this.onGoToStep}
          onNextStep={this.onNextStep}
          onPreviousStep={this.onPreviousStep}
          {...this.props}
        />
      );
    }
  }

  WizardForm.propTypes = {
    onWizardComplete: PropTypes.func.isRequired
  };

  return WizardForm;
};
