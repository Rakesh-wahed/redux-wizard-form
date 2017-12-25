import React from 'react';
import PropTypes from 'prop-types';

export const WizardStep = ({ Step, ...props }) => (
  <form onSubmit={props.handleSubmit}>
    <Step {...props} />
  </form>
);

WizardStep.propTypes = {
  Step: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};
