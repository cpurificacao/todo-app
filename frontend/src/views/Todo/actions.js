import http from '../../api/http';

export function changeDescription(description) {
  return dispatch => dispatch({
    type: 'DESCRIPTION_CHANGED',
    payload: description
  });
};

export function searchTodos(search = '') {
  return dispatch => {
    http.get(`/?sort=-createdAt${search}`)
      .then(res => dispatch({ type: 'TODO_SEARCHED', payload: res.data }));
  }
}

export function addTodo(description) {
  return dispatch => {
    http.post('/', {
      description
    }).then(res => dispatch({ type: 'TODO_ADDED', payload: res.data }));
  }
}

export function removeTodo(todo) {
  return dispatch => {
    http.delete(`/${todo._id}`)
      .then(() => dispatch({ type: 'TODO_REMOVED', payload: todo }))
  }
}

export function markAsDone(todo) {
  return dispatch => {
    http.put(`/${todo._id}`, {
      ...todo,
      done: true
    }).then(res => dispatch({ type: 'TODO_MARKED_AS_DONE', payload: res.data }))
  }
}

export function markAsPending(todo) {
  return dispatch => {
    http.put(`/${todo._id}`, {
      ...todo,
      done: false
    }).then(res => dispatch({ type: 'TODO_MARKED_AS_PENDING', payload: res.data }))
  }
}
