import Deposits from "../containers/Deposits";
import HomePage from "../containers/HomePage";
import Withdraws from "../containers/Withdraws";
import "./BankApp.css";

function BankApp() {
  return (
    <div>
      <h1 className="bg-danger text-warning">Awesome Bank</h1>
      <HomePage />
      <Deposits />
      <Withdraws />
    </div>
  );
}

export default BankApp;
