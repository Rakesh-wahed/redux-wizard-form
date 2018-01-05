import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';

export const WizardNavigationComponent = ({ currentStep, stepsSize }) => (
  <Wrapper>
    <div> {currentStep + 1} </div>
  </Wrapper>
);

WizardNavigationComponent.propTypes = {
  currentStep: PropTypes.number.isRequired,
  stepsSize: PropTypes.number.isRequired
};
