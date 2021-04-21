import { useEffect, useReducer } from 'react';

export const fetchStatuses = {
  IDLE: 'IDLE',
  PENDING: 'PENDING',
  RESOLVED: 'RESOLVED',
  REJECTED: 'REJECTED',
};

function fetchReducer(state, action) {
  switch (action.type) {
    case 'START': {
      return {
        ...state,
        status: fetchStatuses.PENDING,
        responseData: [],
        errorMessage: null,
      };
    }
    case 'RESOLVE': {
      return {
        ...state,
        status: fetchStatuses.RESOLVED,
        responseData: action.responseData,
        errorMessage: null,
      };
    }
    case 'REJECT': {
      return {
        ...state,
        status: fetchStatuses.REJECTED,
        responseData: [],
        errorMessage: action.error.message,
      };
    }
    default:
      throw new Error(`Unsupported type: ${action.type}`);
  }
}

export function useFetch(fetchCallback, makeFetch) {
  const [state, dispatch] = useReducer(fetchReducer, {
    status: fetchStatuses.IDLE,
    responseData: null,
    errorMessage: null,
  });

  useEffect(() => {
    if (!makeFetch || makeFetch()) {
      dispatch({ type: 'START' });
      fetchCallback()
        .then(async (response) => {
          const data = await response.json();
          if (response.ok) {
            dispatch({ type: 'RESOLVE', responseData: data });
          } else {
            dispatch({ type: 'REJECT', error: data });
          }
        })
        .catch((error) => {
          dispatch({ type: 'REJECT', error: error });
        });
    }
  }, [fetchCallback, makeFetch]);

  return state;
}
