import CardsSection from "../components/CardsSection/CardsSection";

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl text-indigo-900 mb-6">Overview</h1>

      <div className="grid grid-cols-3 gap-6">
        <CardsSection />
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
