import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Block, ProgressBarWrapper, ProgressBar, NumberStep } from './styles';

export const WizardNavigationComponent = ({ currentStep, stepsSize, stepsNames, children, onGoToStep }) =>
  typeof children !== 'function' ? (
    <Wrapper>
      <ProgressBarWrapper stepsSize={stepsSize}>
        <ProgressBar currentStep={currentStep} stepsSize={stepsSize} />
      </ProgressBarWrapper>
      {stepsNames.map((stepName, i) => (
        <Block key={i} onClick={() => onGoToStep(currentStep, i)}>
          <NumberStep isActive={currentStep >= i}>
            <span>{i + 1}</span>
          </NumberStep>
          <span className="step-name">{stepName}</span>
        </Block>
      ))}
    </Wrapper>
  ) : (
    children(currentStep, stepsSize, stepsNames)
  );

WizardNavigationComponent.propTypes = {
  children: PropTypes.func,
  currentStep: PropTypes.number.isRequired,
  stepsSize: PropTypes.number.isRequired,
  stepsNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  onGoToStep: PropTypes.func.isRequired
};

WizardNavigationComponent.defaultProps = {
  children: null
};
