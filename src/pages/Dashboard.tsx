import CardsSection from "../components/CardsSection/CardsSection";
import TransactionsSection from "../components/TransactionsSection/TransactionsSection";
import { BsCreditCard } from "react-icons/bs";
import { FaPaypal } from "react-icons/fa";
import { BiTransfer } from "react-icons/bi";

const Dashboard = () => {
  const transactions = [
    {
      icon: BsCreditCard,
      title: "Deposit from my Card",
      date: "28 January 2021",
      amount: -850,
      iconBgColor: "bg-yellow-100"
    },
    {
      icon: FaPaypal,
      title: "Deposit Paypal",
      date: "25 January 2021",
      amount: 2500,
      iconBgColor: "bg-blue-100"
    },
    {
      icon: BiTransfer,
      title: "Jemi Wilson",
      date: "21 January 2021",
      amount: 5400,
      iconBgColor: "bg-cyan-100"
    }
  ];

  return (
    <div className="p-6 bg-lightBlue">
      <h1 className="text-2xl text-indigo-900 mb-6">Overview</h1>

      <div className="grid grid-cols-3 gap-6">
        <CardsSection />
        <TransactionsSection transactions={transactions} />
      </div>

      {/* Weekly Activity and Expense Statistics Section */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6">
          <h2 className="text-xl text-indigo-900 mb-4">Weekly Activity</h2>
        </div>

        <div className="bg-white rounded-xl p-6">
          <h2 className="text-xl text-indigo-900 mb-4">Expense Statistics</h2>
          {/* Add Expense Statistics content here */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
