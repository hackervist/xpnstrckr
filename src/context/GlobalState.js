import React, { createContext, useReducer } from "react";

import AppReducer from "./AppReducer";
//  init state
const initState = {
	transactions: [
		// { id: 1, text: "Flower", amount: -20 },
		// { id: 2, text: "Salary", amount: 300 },
		// { id: 3, text: "Book", amount: -10 },
		// { id: 4, text: "Camera", amount: 150 },
	]
};

// const GlobalState = (props) => {
// 	return <div></div>;
// };

// GlobalState.propTypes = {};

// export default GlobalState;

export const GlobalContext = createContext(initState);

// provider component

export const GlobalPrivder = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initState);

	// actions

	const deleteTransaction = (id) => {
		dispatch({ type: "DELETE_TRANSACTION", payload: id });
	};

	const addTransaction = (trasnsation) => {
		dispatch({ type: "ADD_TRANSACTION", payload: trasnsation });
	};

 
	return (
		<GlobalContext.Provider value={{ transactions: state.transactions , deleteTransaction, addTransaction}}>
			{children}{" "}
		</GlobalContext.Provider>
	);
};
