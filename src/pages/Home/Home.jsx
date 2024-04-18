import Navbar from "../../components/Navbar/Navbar";
import MonthlyIncome from "../../components/Dashboard/Monthly-income/Monthly-income";
import "./Home.css";
export default function Home() {
  return (
    <div class="container">
      <div class="Navbar">
        <Navbar />
      </div>
      <div class="Content"></div>
      <div class="Income">
        <MonthlyIncome />
      </div>
      <div class="Goals">4</div>
      <div class="History">5</div>
      <div class="Chart">6</div>
    </div>
  );
}
