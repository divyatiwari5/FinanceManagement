import WeeklyActivity from "../components/WeeklyActivity/WeeklyActivity";
import CardsSection from "../components/CardsSection/CardsSection";
import TransactionsSection from "../components/TransactionsSection/TransactionsSection";
import { BsCreditCard } from "react-icons/bs";
import { FaPaypal } from "react-icons/fa";
import { BiTransfer } from "react-icons/bi";
import { ExpenseStatistics } from "../components/ExpenseStatistics/ExpenseStatistics";
import { QuickTransfer } from "../components/QuickTransfer/QuickTransfer";

const Dashboard = () => {
  const cards = [
    {
      balance: 5756,
      cardHolder: "Eddy Cusuma",
      cardNumber: "3778 **** **** 1234",
      validThru: "12/22",
      variant: "dark" as const,
    },
    {
      balance: 5756,
      cardHolder: "Eddy Cusuma",
      cardNumber: "3778 **** **** 1234",
      validThru: "12/22",
      variant: "light" as const,
    },
  ];

  const transactions = [
    {
      icon: BsCreditCard,
      title: "Deposit from my Card",
      date: "28 January 2021",
      amount: -850,
      iconBgColor: "bg-yellow-100",
    },
    {
      icon: FaPaypal,
      title: "Deposit Paypal",
      date: "25 January 2021",
      amount: 2500,
      iconBgColor: "bg-blue-100",
    },
    {
      icon: BiTransfer,
      title: "Jemi Wilson",
      date: "21 January 2021",
      amount: 5400,
      iconBgColor: "bg-cyan-100",
    },
  ];

  return (
    <div className="p-6 px-10 bg-lightBlue">
      <div className="grid grid-cols-3 gap-6">
        <CardsSection cards={cards} />
        <TransactionsSection transactions={transactions} />
      </div>

      {/* Weekly Activity and Expense Statistics Section */}
      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className="col-span-2">
          <WeeklyActivity />
        </div>
        <div className="col-span-1">
          <ExpenseStatistics />
        </div>
      </div>

      {/* Quick Transfer and Balance History Section */}
      <div className="grid grid-cols-7 gap-6">
        <div className="col-span-3">
          <QuickTransfer />
        </div>
        <div className="col-span-4">
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
