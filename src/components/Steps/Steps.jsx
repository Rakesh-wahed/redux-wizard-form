import React from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import { reduxWizardStep } from '../../containers';
import { Wrapper, StepsWrapper, PointsWrapper, PointWrapper, StepWrapper } from './styles';

export const WizardSteps = props => {
  const stepTransition = {
    entering: {
      opacity: 0,
      transform: `translateX(${(props.currentStep - 1) * -100}%)`
    },
    entered: {
      opacity: 1,
      transform: `translateX(${props.currentStep * -100}%)`
    },
    exited: {
      opacity: 0,
      transform: `translateX(${props.currentStep * -100}%)`
    }
  };

  function renderStep(InnerStep, i) {
    const WizardStep = reduxWizardStep(props.formOptions);

    return (
      <Transition key={i} in={props.currentStep === i} timeout={0}>
        {state => (
          <StepWrapper style={{ ...stepTransition[state] }}>
            <WizardStep Step={InnerStep} {...props} />
          </StepWrapper>
        )}
      </Transition>
    );
  }

  return (
    <Wrapper>
      <StepsWrapper>{props.steps.map(renderStep)}</StepsWrapper>

      <PointsWrapper>
        {props.steps.map((InnerStep, i) => <PointWrapper key={i} isActive={props.activatedSteps.includes(i)} />)}
      </PointsWrapper>
    </Wrapper>
  );
};

WizardSteps.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.func).isRequired,
  activatedSteps: PropTypes.arrayOf(PropTypes.number).isRequired,
  currentStep: PropTypes.number.isRequired,
  formOptions: PropTypes.object.isRequired,
  onPreviousStep: PropTypes.func.isRequired
};
