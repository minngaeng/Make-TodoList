import axios from 'axios';
import { useEffect, useState } from 'react';

const Todo = () => {
  const [todoInput, setTodoInput] = useState('');
  const [todos, setTodos] = useState([]); // 배열 목록

  const [editTodoInput, setEditTodoInput] = useState('');
  const [editId, setEditId] = useState(null); // 뭘 수정할지

  const onClickSubmit = async (id, currentIsCompleted) => {
    try {
      const response = await axios.put(
        `https://www.pre-onboarding-selection-task.shop/todos/${id}`,
        {
          todo: editTodoInput,
          isCompleted: currentIsCompleted,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
            'Content-Type': 'application/json',
          },
        }
      );
      console.log(response.data);
      setTodos(todos.map((el) => (el.id === id ? response.data : el)));
      setEditId('');
      setEditTodoInput('');
    } catch (error) {
      console.error(error);
    }
  };

  const onClickCancel = () => {
    setEditId();
    setEditTodoInput('');
  };

  const onChangeEditTodo = (event) => {
    setEditTodoInput(event.currentTarget.value);
  };

  const onClickEdit = (id, todo) => {
    setEditId(id);
    setEditTodoInput(todo);
  };

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
      setTodoInput('');
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
        // console.log('응답', response);
        setTodos(response.data);
      };
      fetchTodos();
    } catch (error) {
      console.error(error);
    }
  }, []);

  const onClickChecked = async (id, todo, currentIsCompleted) => {
    try {
      const response = await axios.put(
        `https://www.pre-onboarding-selection-task.shop/todos/${id}`,
        {
          todo: todo,
          isCompleted: !currentIsCompleted,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('이게 진짜 궁굼', response.data);
      setTodos(
        todos.map((todoItem) => (todoItem.id === id ? response.data : todoItem))
      );
    } catch (error) {
      console.error(error);
    }
  };

  const onClickDelete = async (id) => {
    try {
      const response = await axios.delete(
        `https://www.pre-onboarding-selection-task.shop/todos/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
        }
      );
      console.log(response);
      const updatedItem = todos.filter((todoItem) => todoItem.id !== id);
      setTodos(updatedItem);
    } catch (error) {
      console.error(error);
    }
  };

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
          <li key={el.id}>
            <input
              checked={el.isCompleted}
              onChange={() => onClickChecked(el.id, el.todo, el.isCompleted)}
              type="checkbox"
            />
            {editId === el.id ? (
              <>
                <input
                  onChange={onChangeEditTodo}
                  value={editTodoInput}
                  type="text"
                />
                <button onClick={() => onClickSubmit(el.id, el.isCompleted)}>
                  제출
                </button>
                <button onClick={onClickCancel}>취소</button>
              </>
            ) : (
              <>
                <span>{el.todo}</span>
                <button onClick={() => onClickEdit(el.id, el.todo)}>
                  수정
                </button>
                <button onClick={() => onClickDelete(el.id)}>삭제</button>
              </>
            )}
          </li>
        ))}

        {/* <li> */}
        {/* <input type="checkbox" />
          <input
            value={editTodoInput}
            onChange={onChangeEditTodo}
            type="text"
          /> */}
        {/* <button onClick={() => onClickEditing(el.id, el.todo)}>제출</button> */}
        {/* <button>취소</button> */}
        {/* </li> */}
      </ul>
    </div>
  );
};

export default Todo;
