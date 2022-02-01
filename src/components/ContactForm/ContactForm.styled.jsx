import styled from 'styled-components';

export const ContForm = styled.form`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: 2px solid;
  background: darkgrey;
  width: 320px;
`;

export const ContLabel = styled.label`
  margin-bottom: 10px;
  align-self: center;
`;

export const ContInput = styled.input`
  margin-left: 20px;
  display: block;
`;

export const Button = styled.button`
  width: 100px;
  height: 30px;
  margin-bottom: 20px;
  place-self: center;
`;
