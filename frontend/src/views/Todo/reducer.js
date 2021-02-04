const INITIAL_STATE = {
  description: '',
  list: []
}

const expectedActions = {
  'DESCRIPTION_CHANGED': function (state, payload) {
    return {
      ...state,
      description: payload
    };
  },
  'TODO_SEARCHED': function (state, payload) {
    return {
      ...state,
      list: payload
    };
  },
  'TODO_ADDED': function (state, payload) {
    const list = [payload, ...state.list];

    return {
      ...state,
      list
    };
  },
  'TODO_REMOVED': function (state, payload) {
    const list = state.list.filter(todo => todo._id !== payload._id);

    return {
      ...state,
      list
    };
  },
  'TODO_MARKED_AS_DONE': function (state, payload) {
    const list = state.list.map(todo =>
      todo._id === payload._id ?
        { ...todo, done: true }
        :
        todo
    );

    return {
      ...state,
      list
    };
  },
  'TODO_MARKED_AS_PENDING': function (state, payload) {
    const list = state.list.map(todo =>
      todo._id === payload._id ?
        { ...todo, done: false }
        :
        todo
    );

    return {
      ...state,
      list
    };
  }
}

export default function (state = INITIAL_STATE, action) {
  const dispatchedAction = expectedActions[action.type];

  if (dispatchedAction) {
    return dispatchedAction(state, action.payload);
  }

  return state;
}
