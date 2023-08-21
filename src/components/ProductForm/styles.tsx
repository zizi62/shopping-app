import styled from 'styled-components/macro'

import { color } from 'config/stylesConst'

export const FormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const FormHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

export const SubmitButton = styled.button`
  background-color: ${color.darkGray};
  color: ${color.white};
  padding: 10px 20px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;