import styled from 'styled-components';

const Form = styled.form`
  display: block;
  margin-bottom: 10px;
`;

const InputForm = styled.input`
  display: block;
  margin: 10px auto;
  padding: 12px 20px;
  font-size: 18px;
  border-radius: 30px;

  &::placeholder {
    padding-left: 10px;
    font-size: 18px;
  }
`;

const Button = styled.button`
  outline: none;
  padding: 12px 20px;
  margin: 10px 5px;
  border-radius: 30px;
  background-image: linear-gradient(
    45deg,
    #6ab1d7 0%,
    #33d9de 50%,
    #002878 100%
  );
  background-position: 100% 0;
  background-size: 200% 200%;
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  color: white;
  box-shadow: 0 16px 32px 0 rgba(0, 40, 120, 0.35);
  transition: 0.5s;

  &:hover {
    box-shadow: 0 0 0 0 rgba(0, 40, 120, 0);
    background-position: 0 0;
  }
`;

const LabelForm = styled.label`
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  color: #e9967a;
`;

export { Form, InputForm, Button, LabelForm };
