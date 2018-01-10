import styled from 'styled-components';

export const Wrapper = styled.div`
  display: inline-block;
  opacity: ${props => (props.isCurrentStep ? 1 : 0)};
  transform: translateX(${props => props.currentStep * -100}%);
  transition: transform 600ms cubic-bezier(0, 0.89, 0.69, 0.98), opacity 500ms cubic-bezier(0.45, 0.07, 0.83, 0.67);
  pointer-events: ${props => (props.isCurrentStep ? 'auto' : 'none')};
  width: 100%;
`;
