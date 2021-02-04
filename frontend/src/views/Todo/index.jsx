import React from 'react';

import PageHeader from '../../components/pageHeader';
import TodoForm from './form';
import TodoList from './list';

const Todo = () => {
  return (
    <div className="todo-container container">
      <PageHeader name="Tarefas" small="Cadastro" />
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default Todo;
