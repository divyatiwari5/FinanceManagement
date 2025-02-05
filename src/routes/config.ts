import { AiFillHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { HiWrenchScrewdriver } from "react-icons/hi2";
import { TbSettingsFilled } from "react-icons/tb";
import { IconType } from "react-icons";
import CreditCard from "../components/svgs/CreditCard";
import Loan from "../components/svgs/Loan";
import MoneyIdea from "../components/svgs/MoneyIdea";
import Transaction from "../components/svgs/Transaction";
import Investment from "../components/svgs/Investment";
import Dashboard from "../pages/Dashboard";
import Settings from "../pages/Settings";
import EmptyComponent from "../pages/EmptyComponent";

export interface RouteConfig {
  path: string;
  title: string;
  icon: IconType | React.FC<{ isActive?: boolean }>;
  component: React.FC;
}

export const routes: RouteConfig[] = [
  {
    path: "/dashboard",
    title: "Overview",
    icon: AiFillHome,
    component: Dashboard,
  },
  {
    path: "/transactions",
    title: "Transactions",
    icon: Transaction,
    component: EmptyComponent,
  },
  {
    path: "/accounts",
    title: "Accounts",
    icon: FaUser,
    component: EmptyComponent,
  },
  {
    path: "/investments",
    title: "Investments",
    icon: Investment,
    component: EmptyComponent,
  },
  {
    path: "/credit-cards",
    title: "Credit Cards",
    icon: CreditCard,
    component: EmptyComponent,
  },
  {
    path: "/loans",
    title: "Loans",
    icon: Loan,
    component: EmptyComponent,
  },
  {
    path: "/services",
    title: "Services",
    icon: HiWrenchScrewdriver,
    component: EmptyComponent,
  },
  {
    path: "/privileges",
    title: "My Privileges",
    icon: MoneyIdea,
    component: EmptyComponent,
  },
  {
    path: "/settings",
    title: "Setting",
    icon: TbSettingsFilled,
    component: Settings,
  },
];
