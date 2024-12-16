import { Form } from "formik";
import styled from "styled-components";

export const Button = styled.button`
  display: block;
  margin-top: 30px;
  &:hover {
    color: black;
    background-color: lightblue;
  }
`;

export const Label = styled.label`
  margin-bottom: 20px;
`;

export const FormWrap = styled(Form)`
  padding: 20px;

  border: 2px solid black;
`;
