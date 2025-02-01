import React from "react";
import Transaction from "./Transaction";
import { IconType } from "react-icons";

interface TransactionType {
  icon: IconType;
  title: string;
  date: string;
  amount: number;
  iconBgColor: string;
}

interface TransactionsSectionProps {
  transactions: TransactionType[];
}

const TransactionsSection: React.FC<TransactionsSectionProps> = ({
  transactions,
}) => {
  return (
    <div className="col-span-1 mb-8">
      <h2 className="text-[22px] mb-5 text-left font-semibold text-primaryIndigo leading-[26px]">
        Recent Transaction
      </h2>

      <div className="bg-white rounded-3xl p-4">
        <div className="divide-y">
          {transactions.map((transaction, index) => (
            <Transaction
              key={index}
              icon={transaction.icon}
              title={transaction.title}
              date={transaction.date}
              amount={transaction.amount}
              iconBgColor={transaction.iconBgColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransactionsSection;
