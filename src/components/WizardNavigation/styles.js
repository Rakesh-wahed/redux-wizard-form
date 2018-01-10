import styled from 'styled-components';

const barColor = '#00bcd4';

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  position: relative;
  width: 100%;
`;

export const ProgressBarWrapper = styled.div`
  left: ${props => 100 / props.stepsSize / 2}%;
  height: 3px;
  top: 13px;
  position: absolute;
  width: ${props => 100 - 100 / props.stepsSize}%;
`;

export const Block = styled.div`
  align-items: center;
  background: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 100%;

  span {
    font-size: 1rem;
  }

  .step-name {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 90%;
  }
`;

export const ProgressBar = styled.div`
  background: ${barColor};
  border-radius: 10px;
  height: 100%;
  transition: width 600ms cubic-bezier(0, 0.89, 0.69, 0.98);
  width: ${props => props.currentStep / (props.stepsSize - 1) * 100}%;
`;

export const NumberStep = styled.div`
  background-color: ${props => (props.isActive ? barColor : '#9E9E9E')};
  border-radius: 50%;
  color: white;
  font-weight: 800;
  height: 20px;
  overflow: hidden;
  position: relative;
  padding: 5px;
  margin-bottom: 10px;
  text-align: center;
  transition: background-color 300ms cubic-bezier(0, 0.89, 0.69, 0.98);
  width: 20px;
`;
