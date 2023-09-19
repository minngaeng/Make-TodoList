import { styled } from 'styled-components';

export const Todo = styled.div`
  box-sizing: border-box;
  margin: 10rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 2rem;
`;

export const InputFoam = styled.input`
  width: 60%;
  padding-left: 0.5rem;
  border: none;
  border-bottom: 1px solid black;
`;

export const CheckBox = styled.input`
  width: 1.5rem;
`;

export const SubmitButton = styled.button`
  width: 20%;
  margin: 0 1rem;
  border: none;
  border-radius: 2px;
`;

export const CancelButton = styled.button`
  border: none;
  border-radius: 2px;
  width: 20%;
`;

export const TodoListBox = styled.li`
  display: flex;
  flex-direction: row;
  margin-top: 1.4rem;
  height: 2rem;
  list-style: none;
  width: 80%;
`;

export const TodoListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const MyTodo = styled.span`
  padding: 0 2rem;
  font-size: 1.4rem;
  text-decoration: ${(props) => (props.underline ? 'line-through' : 'none')};
`;

export const EditButton = styled.button`
  width: 20%;
  margin: 0 1rem;
  border: none;
  height: 1.8rem;
`;

export const DeleteButton = styled.button`
  width: 20%;
  border: none;
  height: 1.8rem;
`;
