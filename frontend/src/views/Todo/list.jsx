import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import IconButton from '../../utils/components/iconButton';

import { markAsDone, markAsPending, removeTodo, searchTodos } from './actions';

const TodoList = () => {
  const list = useSelector(state => state.list);
  const dispatch = useDispatch();

  function populateList() {
    const action = searchTodos();

    dispatch(action);
  }

  function handleMarkAsDone(todo) {
    markAsDone(todo)(dispatch);
  }
  
  function handleMarkAsPending(todo) {
    markAsPending(todo)(dispatch);
  }

  function handleRemove(todo) {
    removeTodo(todo)(dispatch);
  }

  function renderRows() {
    return list.map(todo =>
      <tr key={todo._id} className={todo.done ? 'done' : ''}>
        <td className='w-75'>{todo.description}</td>
        <td className='w-25'>
          <IconButton
            hide={todo.done ? true : false}
            className='mr-2'
            style='success'
            icon='fa-check'
            onClick={() => handleMarkAsDone(todo)}
          />
          <IconButton
            hide={!todo.done ? true : false}
            className='mr-2'
            style='warning'
            icon='fa-undo'
            onClick={() => handleMarkAsPending(todo)}
          />
          <IconButton
            hide={!todo.done ? true : false}
            style='danger'
            icon='fa-trash'
            onClick={() => handleRemove(todo)}
          />
        </td>
      </tr>
    );
  }

  useEffect(populateList, []);

  return (
    <table className="todo-table table">
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>);
};

export default TodoList;
