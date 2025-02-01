import Card from "./Card";

interface CardData {
  balance: number;
  cardHolder: string;
  cardNumber: string;
  validThru: string;
  variant: 'dark' | 'light';
}

interface CardsSectionProps {
  cards: CardData[];
}

const CardsSection = ({ cards }: CardsSectionProps) => {
  return (
    <div className="col-span-2 mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[22px] leading-[26px] text-primaryIndigo font-semibold">My Cards</h2>
        <button className="text-primaryIndigo text-[17px] font-semibold leading-5">See All</button>
      </div>

      <div className="flex gap-4">
        {cards.map((card, index) => (
          <Card
            key={index}
            balance={card.balance}
            cardHolder={card.cardHolder}
            cardNumber={card.cardNumber}
            validThru={card.validThru}
            variant={card.variant}
          />
        ))}
      </div>
    </div>
  );
};

export default CardsSection; 