import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { Wrapper } from './styles';

export class WizardStepComponent extends Component {
  constructor(props) {
    super(props);
    const { formOptions, component, onSubmit } = props;
    const InnerComponent = component;

    this.WizardStepForm = reduxForm(formOptions)(formProps => (
      <Wrapper onSubmit={formProps.handleSubmit(onSubmit)}>
        <InnerComponent {...formProps} />
      </Wrapper>
    ));
  }

  render() {
    const { WizardStepForm } = this;
    return WizardStepForm && <WizardStepForm step />;
  }
}

WizardStepComponent.propTypes = {
  formOptions: PropTypes.shape({
    form: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    onSubmitFail: PropTypes.func,
    onSubmitSuccess: PropTypes.func
  }).isRequired,
  component: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};
