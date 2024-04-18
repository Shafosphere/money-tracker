import MonthlyIncome from "../../components/Dashboard/Monthly-income/Monthly-income";
import CreditCard from "../../components/Dashboard/Credit-Card/Credit-card";
import Goal from "../../components/Dashboard/Goals/Goal";
import SendMoney from "../../components/Dashboard/Send-money/Send-money";
import History from "../../components/Dashboard/History/History";
import DashboardChart from "../../components/Charts/Dashboard-chart";
import "./Home.css";
export default function Home() {
  return (
    <>
      {/* <div className="Content"></div> */}
      <div className="Income">
        <div className="title">
          <div>Dashboard</div>
        </div>
        <MonthlyIncome />
        <CreditCard />
      </div>
      <div className="Goals">
        <Goal />
        <SendMoney />
      </div>
      <div className="History">
        <History />
      </div>
      <div className="Chart">
        <DashboardChart />
      </div>
    </>
  );
}
