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
      className={`${cardStyles[variant]} rounded-[25px] w-[280px] md:w-[350px] h-[200px] md:h-[235px] flex-shrink-0`}
    >
      <div className="flex flex-row justify-between px-5 md:px-[26px] pt-4 md:pt-6">
        <div className="mb-4 md:mb-6 text-left">
          <p className={`${labelStyles[variant]} text-[10px] md:text-xs font-lato`}>Balance</p>
          <p className="text-base md:text-xl font-semibold font-lato">
            ${balance.toLocaleString()}
          </p>
        </div>

        <div>
          <FcSimCardChip className="w-7 h-7 md:w-[34px] md:h-[34px]" />
        </div>
      </div>

      <div className="flex gap-8 md:gap-14 px-5 md:px-[26px] text-left">
        <div className="mb-6 md:mb-9">
          <p className={`${labelStyles[variant]} text-[10px] md:text-xs font-lato`}>
            CARD HOLDER
          </p>
          <p className="font-semibold text-[13px] md:text-[15px] font-lato">{cardHolder}</p>
        </div>
        <div>
          <p className={`${labelStyles[variant]} text-[10px] md:text-xs font-lato`}>
            VALID THRU
          </p>
          <p className="font-lato font-semibold text-[13px] md:text-[15px]">{validThru}</p>
        </div>
      </div>

      <div className={`${
        variant === "light" ? "border-t-[1px] border-grey" : ""
      } bg-[linear-gradient(180deg,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0)_100%)]`}>
        <div className="px-5 md:px-[26px] py-4 md:py-[22px] flex justify-between items-end">
          <div>
            <p className="font-semibold text-[15px] md:text-[22px] font-lato">{cardNumber}</p>
          </div>
          <div className="w-8 h-6 md:w-12 md:h-8">
            <BiLogoMastercard className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
