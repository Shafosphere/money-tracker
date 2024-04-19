import "./History.css";
import DealsHistory from "../../components/History/Deals-history/Deals";
import { useState } from "react";
export default function History() {
  const[deal, setDeal] = useState();
  function displayDeal(item){
    setDeal(item);
  }
  return (
    <>
      <div className="deals">
        <DealsHistory displayDeal={displayDeal}/>
      </div>
      <div className="details">
      </div>
      <div className="chart"></div>
    </>
  );
}
