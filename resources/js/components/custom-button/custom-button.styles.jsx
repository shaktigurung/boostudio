import styled, { css } from 'styled-components';

const buttonStyles = css`
  background-color: #cf551c;
  color: white;
  border: none;

  &:hover {
    background-color: #8c8c8c;
    color: #ffffff;
    border: 1px solid #8c8c8c;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: #cf551c;
  border: 1px solid #cf551c;

  &:hover {
    background-color: #cf551c;
    color: white;
    border: none;
  }
`;

const getButtonStyles = props => {
  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  ${getButtonStyles}
`;