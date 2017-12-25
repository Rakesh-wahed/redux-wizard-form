import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StepsWrapper = styled.div`
  white-space: nowrap;
  overflow: hidden;
`;

export const StepWrapper = styled.div`
  display: inline-block;
  opacity: 0;
  transform: translateX(0);
  transition: opacity 500ms cubic-bezier(0.45, 0.07, 0.83, 0.67), transform 750ms cubic-bezier(0.21, 1, 1, 0.89);
  width: 100%;
`;

export const PointsWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const PointWrapper = styled.span`
  background-color: #9b9393;
  border-radius: 50%;
  height: 10px;
  margin-right: 5px;
  opacity: ${props => (props.isActive ? '1' : '0.5')};
  width: 10px;
`;
