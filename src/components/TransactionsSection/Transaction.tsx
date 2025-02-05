import { IconType } from 'react-icons';

interface TransactionProps {
  icon: IconType;
  title: string;
  date: string;
  amount: number;
  iconBgColor?: string;
}

const Transaction = ({ icon: Icon, title, date, amount, iconBgColor = 'bg-yellow-100' }: TransactionProps) => {
  const isPositive = amount > 0;

  return (
    <div className="flex items-center justify-between h-14 gap-[10px]">
      <div className="flex items-center gap-3">
        <div className={`${iconBgColor} p-2 rounded-full`}>
          <Icon size={24} />
        </div>
        <div>
          <p className="font-medium text-sm lg:text-base text-primaryBlack">{title}</p>
          <p className="text-xs lg:text-[15px] text-primaryBlue">{date}</p>
        </div>
      </div>
      <span className={`font-medium text-[11px] lg:text-base ${isPositive ? 'text-green' : 'text-red'}`}>
        {isPositive ? '+' : '-'}${Math.abs(amount).toLocaleString()}
      </span>
    </div>
  );
}; 

export default Transaction;