import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "./Transaction";

export const TransactionList = () => {
	const { transactions } = useContext(GlobalContext);
	// const context = useContext(GlobalContext);
	// console.log(context)

	return (
		<>
			<h3>History</h3>
			<ul className="list">
				{transactions.map((tr) => (
					( <Transaction key= {tr.id} tr={tr}/> )
				))}
			</ul>
		</>
	);
};
