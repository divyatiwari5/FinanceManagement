import Card from "./Card";

const CardsSection = () => {
  return (
    <div className="col-span-2 mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl text-indigo-900">My Cards</h2>
        <button className="text-indigo-600">See All</button>
      </div>

      <div className="flex gap-4">
        <Card
          balance={5756}
          cardHolder="Eddy Cusuma"
          cardNumber="3778 **** **** 1234"
          validThru="12/22"
          variant="dark"
        />
        <Card
          balance={5756}
          cardHolder="Eddy Cusuma"
          cardNumber="3778 **** **** 1234"
          validThru="12/22"
          variant="light"
        />
      </div>
    </div>
  );
};

export default CardsSection; 