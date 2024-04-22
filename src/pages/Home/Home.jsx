import MonthlyIncome from "../../components/Dashboard/Monthly-income/Monthly-income";
import CreditCard from "../../components/Dashboard/Credit-Card/Credit-card";
import Goal from "../../components/Dashboard/Goals/Goal";
import SendMoney from "../../components/Dashboard/Send-money/Send-money";
import History from "../../components/Dashboard/History/History";
import DashboardChart from "../../components/Charts/Dashboard-chart";
import "./Home.css";
export default function Home({ changeDisplay }) {
  return (
    <>
      <div className="main-Home">
        <div className="window-Home">
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
        </div>
      </div>

      <div className="History">
        <History changeDisplay={changeDisplay} />
      </div>
      <div className="Chart">
        <DashboardChart />
      </div>
    </>
  );
}
