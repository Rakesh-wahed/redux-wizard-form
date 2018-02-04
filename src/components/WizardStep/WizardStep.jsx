// @flow
import * as React from 'react';
import { reduxForm } from 'redux-form';
import { Wrapper } from './styles';
import type { ReduxFormProps } from '../../typed';

type Props = {
  name?: string,
  currentStep: number,
  step: number,
  stepsSize: number,
  formOptions: ReduxFormProps,
  component: React.ComponentType<*>,
  onSubmit: Function,
  onWizardComplete: Function,
  addStepName: Function
};

export class WizardStepComponent extends React.Component<Props> {
  static defaultProps = {
    name: 'Step'
  };

  constructor(props: Props) {
    super(props);

    const {
      formOptions,
      component,
      onSubmit,
      name,
      addStepName,
      onWizardComplete,
      stepsSize,
      step
    } = props;

    const InnerComponent = component;

    this.WizardStepForm = reduxForm(formOptions)(formProps => (
      <Wrapper
        onSubmit={formProps.handleSubmit(
          step === stepsSize - 1 ? onWizardComplete : onSubmit
        )}
      >
        <InnerComponent {...formProps} />
      </Wrapper>
    ));

    addStepName(name);
  }

  WizardStepForm: React.ComponentType<*>;

  render() {
    const { WizardStepForm } = this;
    const { currentStep, step } = this.props;

    if (currentStep >= step) {
      return <WizardStepForm />;
    }

    return null;
  }
}
