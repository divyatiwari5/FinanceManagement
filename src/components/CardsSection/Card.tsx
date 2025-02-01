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
    dark: "bg-[linear-gradient(107.38deg,#5B5A6F_2.61%,#000000_101.2%)] text-white",
    light: "bg-white text-primaryIndigo border border-grey",
  };

  const labelStyles = {
    dark: "text-white",
    light: "text-primaryBlue",
  };

  return (
    <div
      className={`${cardStyles[variant]} rounded-[25px] w-[350px] h-[235px]`}
    >
      <div className="flex flex-row justify-between px-[26px] pt-6">
        <div className="mb-6 text-left">
          <p className={`${labelStyles[variant]} text-xs font-lato`}>Balance</p>
          <p className="text-xl font-semibold font-lato">
            ${balance.toLocaleString()}
          </p>
        </div>

        <div>
          <FcSimCardChip size={34} />
        </div>
      </div>

      <div className="flex gap-14 px-[26px] text-left">
        <div className="mb-9">
          <p className={`${labelStyles[variant]} text-xs font-lato`}>
            CARD HOLDER
          </p>
          <p className="font-semibold text-[15px] font-lato">{cardHolder}</p>
        </div>
        <div>
          <p className={`${labelStyles[variant]} text-xs font-lato`}>
            VALID THRU
          </p>
          <p className="font-lato font-semibold text-[15px]">{validThru}</p>
        </div>
      </div>

      <div className={`${
        variant === "light" ? "border-t-[1px] border-grey" : ""
      } bg-[linear-gradient(180deg,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0)_100%)]`}>
        <div className="px-[26px] py-[22px] flex justify-between items-end">
          <div>
            <p className="font-semibold text-[22px] font-lato">{cardNumber}</p>
          </div>
          <div className="w-12 h-8">
            <BiLogoMastercard size={32} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
