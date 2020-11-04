import { Header } from "./components/Header";
import "./App.css";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";
import { GlobalPrivder } from "./context/GlobalState";

const App = () => {
	return (
		<GlobalPrivder>
			<Header />
			<div className="container">
				<Balance />
				<IncomeExpenses />
				<TransactionList />
				<AddTransaction />
			</div>
		</GlobalPrivder>
	);
};

export default App;
