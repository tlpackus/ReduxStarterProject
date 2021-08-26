export default (state = {}, action) => {
  const { names, location, issue, id } = action;
  switch (action.type) {
  case 'ADD_TICKET':
    return Object.assign({}, state, {
      [id]: {
        names: names,
        location: location,
        issue: issue,
        id: id
      }
    });
  case 'DELETE_TICKET':
    let newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }
};

// action = 'delete a ticket', id
// dispatch(action);
// dispatch --> reducer --> looks for a matching 'type'
// if the type matches, then it runs the code attached to the action, updates the store
