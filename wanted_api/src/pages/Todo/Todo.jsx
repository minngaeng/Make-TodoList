import axios from 'axios';
import { useEffect, useState } from 'react';

const Todo = () => {
  const [todoInput, setTodoInput] = useState('');
  const [todos, setTodos] = useState([]);

  const onChangeTodo = (event) => {
    setTodoInput(event.currentTarget.value);
  };

  const addTodo = async () => {
    try {
      const response = await axios.post(
        'https://www.pre-onboarding-selection-task.shop/todos',
        {
          todo: todoInput,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
            'Content-Type': 'application/json',
          },
        }
      );
      console.log(response.data);
      setTodos([...todos, response.data]);
      // console.log(todos);
      // {todo: 'f', userId: 15527, id: 40618, isCompleted: false}
      //  []
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    try {
      const fetchTodos = async () => {
        const response = await axios.get(
          'https://www.pre-onboarding-selection-task.shop/todos',
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('access_token')}`,
            },
          }
        );
        console.log('응답', response);
        setTodos(response.data);
      };
      fetchTodos();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div>
      <input
        value={todoInput}
        onChange={onChangeTodo}
        type="text"
        placeholder="TODO 내용 입력"
      />
      <button onClick={addTodo}>추가</button>
      <ul>
        {todos.map((el) => (
          <li key={el.id}>{el.todo}</li>
        ))}
        {/* {todos.map((todo) => (
          <li key={todo.id}>{todo.todo}</li>
        ))} */}
        <li>
          <label>
            <input type="checkbox" />
            <span>TODO 1</span>
          </label>
        </li>
      </ul>
    </div>
  );
};

export default Todo;
