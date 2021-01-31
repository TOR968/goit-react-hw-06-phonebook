import styled from 'styled-components';

const ListItem = styled.li`
  padding-left: 16px;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const Text = styled.p`
  color: #fa8072;
  margin: 0;
`;

const Button = styled.button`
  margin-left: auto;
  outline: none;
  padding: 2px 5px;
  border-radius: 10px;
  background-image: linear-gradient(
    45deg,
    #6ab1d7 0%,
    #33d9de 50%,
    #002878 100%
  );
  background-position: 100% 0;
  background-size: 200% 200%;
  font-size: 16px;
  color: white;
  box-shadow: 0 16px 32px 0 rgba(0, 40, 120, 0.35);
  transition: 0.5s;

  &:hover {
    box-shadow: 0 0 0 0 rgba(0, 40, 120, 0);
    background-position: 0 0;
  }
`;

export { ListItem, Button, Text };
