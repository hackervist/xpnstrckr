import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ tr }) => {
	const { deleteTransaction } = useContext(GlobalContext);
	const sign = tr.amount < 0 ? "-" : "+";
	return (
		<li className={tr.amount < 0 ? "minus" : "plus"}>
			{tr.text}{" "}
			<span>
				{sign} ${Math.abs(tr.amount)}
			</span>
			<button className="delete-btn" onClick= {() => deleteTransaction(tr.id)}>x</button>
		</li>
	);
};
