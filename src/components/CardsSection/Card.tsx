import { BiLogoMastercard } from "react-icons/bi";
import { FcSimCardChip } from "react-icons/fc";

interface CardProps {
  balance: number;
  cardHolder: string;
  cardNumber: string;
  validThru: string;
  variant?: "dark" | "light";
}

const Card = ({
  balance,
  cardHolder,
  cardNumber,
  validThru,
  variant = "dark",
}: CardProps) => {
  const cardStyles = {
    dark: "bg-gradient-to-r from-gray-800 to-gray-700 text-white",
    light:
      "bg-gradient-to-r from-gray-100 to-white text-gray-800 border border-gray-200",
  };

  const labelStyles = {
    dark: "text-gray-400",
    light: "text-gray-500",
  };

  return (
    <div className={`${cardStyles[variant]} p-6 rounded-[25px] w-96 shadow-lg`}>
      <div className="flex flex-row justify-between">
        <div className="mb-6 text-left">
          <p className={`${labelStyles[variant]} text-sm`}>Balance</p>
          <p className="text-2xl font-semibold">${balance.toLocaleString()}</p>
          </div>

          <div>
            <FcSimCardChip size={32} />
          </div>
      </div>

      <div className="flex gap-14">
        <div className="mb-6">
          <p className={`${labelStyles[variant]} text-sm`}>CARD HOLDER</p>
          <p className="font-medium">{cardHolder}</p>
        </div>
        <div>
          <p className={`${labelStyles[variant]} text-sm`}>VALID THRU</p>
          <p>{validThru}</p>
        </div>
      </div>

      <div className="flex justify-between items-end">
        <div>
          <p className="font-medium">{cardNumber}</p>
        </div>
        <div className="w-12 h-8">
          <BiLogoMastercard size={32} />
        </div>
      </div>
    </div>
  );
};

export default Card;
