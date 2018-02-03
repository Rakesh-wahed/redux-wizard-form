// @flow
import * as React from 'react';
import {
  Wrapper,
  Block,
  ProgressBarWrapper,
  ProgressBar,
  NumberStep
} from './styles';

type Props = {
  currentStep: number,
  stepsSize: number,
  stepsNames: Array<string>,
  children?: Function,
  onGoToStep: Function
};

export const WizardNavigationComponent = ({
  currentStep,
  stepsSize,
  stepsNames,
  children,
  onGoToStep
}: Props): React.Node =>
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

WizardNavigationComponent.defaultProps = {
  children: null
};
