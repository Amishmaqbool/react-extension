const initialState = {
  user: { email: "", phone: "", name: "", id: "", password: "", seed: "" },
};

// Use the initialState as a default value
export default function appReducer(state = initialState, action) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    case "ADD_EMAIL": {
      // We need to return a new state object
      return {
        ...state,
        user: {
          ...state.user,
          email: action.payload,
        },
      };
    }
    case "ADD_PHONE": {
      // We need to return a new state object
      return {
        ...state,
        user: {
          ...state.user,
          phone: action.payload,
        },
      };
    }
    case "ADD_NAME": {
      // We need to return a new state object
      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload,
        },
      };
    }
    case "ADD_ID": {
      // We need to return a new state object
      return {
        ...state,
        user: {
          ...state.user,
          id: action.payload,
        },
      };
    }
    case "ADD_PASSWORD": {
      // We need to return a new state object
      return {
        ...state,
        user: {
          ...state.user,
          password: action.payload,
        },
      };
    }
    case "ADD_SEED": {
      // We need to return a new state object
      return {
        ...state,
        user: {
          ...state.user,
          seed: action.payload,
        },
      };
    }
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state;
  }
}
