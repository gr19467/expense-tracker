import React, { createContext, useReducer } from 'react';
import PieReducer from './PieReducer';

// Initial state
const initialState = {
  categories: [parseInt(1), parseInt(1), parseInt(1), parseInt(1), parseInt(1), parseInt(1), parseInt(1), parseInt(1), parseInt(1)]
}

// Create context
export const PieContext = createContext(initialState);

// Provider component
export const PieProvider = ({ children }) => {
  const [state, dispatch] = useReducer(PieReducer, initialState);

  function calculateBudget(calculation){
    dispatch({
        type: 'CALCULATE_BUDGET',
        payload: calculation
    });
  }

  return (<PieContext.Provider value={{
    categories: state.categories,
    calculateBudget
  }}>
    {children}
  </PieContext.Provider>);
}