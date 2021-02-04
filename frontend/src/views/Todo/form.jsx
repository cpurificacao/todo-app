import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import IconButton from '../../utils/components/iconButton';
import Grid from '../../utils/components/grid';

import { addTodo, changeDescription, searchTodos } from './actions';

const TodoForm = () => {
  const description = useSelector(state => state.description);
  const dispatch = useDispatch();

  function handleSearch(description) {
    const search = description &&
      `&description__regex=/${description}/i`;

    searchTodos(search)(dispatch);
  }

  function handleAdd(description) {
    if (!description) return;

    addTodo(description)(dispatch);
    handleClear();
  }

  function handleClear() {
    changeDescription('')(dispatch)
    handleSearch();
  }

  function handleChange(e) {
    changeDescription(e.target.value)(dispatch);
  }

  function handleKeyUp(e) {
    if (e.key === 'Enter') {
      e.shiftKey ?
        handleSearch(description)
        :
        handleAdd(description);
    } else if (e.key === 'Escape') {
      handleClear();
    }
  }

  return (
    <div role="form" className="todo-form d-flex align-items-center">
      <Grid cols="12 9 10">
        <input
          type="text"
          id="description"
          className="form-control"
          placeholder="Adicione uma tarefa"
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          value={description}
        />
      </Grid>

      <Grid cols="12 3 2">
        <IconButton
          className='m-1'
          style="primary"
          icon="fa-plus"
          onClick={() => handleAdd(description)}
        />
        <IconButton
          className='m-1'
          style="warning"
          icon="fa-search"
          onClick={() => handleSearch(description)}
        />
        <IconButton
          className='m-1'
          style="danger"
          icon="fa-minus"
          onClick={() => handleClear()}
        />
      </Grid>
    </div>
  );
}

export default TodoForm;
