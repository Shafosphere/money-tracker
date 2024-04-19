import "./History.css";
import DealsHistory from "../../components/History/Deals-history/Deals";
import Details from "../../components/History/Details/Details";
import { useState } from "react";
export default function History() {
  const[dealID, setDeal] = useState(1);
  function displayDeal(item){
    setDeal(item);
  }
  return (
    <>
      <div className="deals">
        <DealsHistory displayDeal={displayDeal}/>
      </div>
      <div className="details">
        <Details dealID={dealID}/>
      </div>
      <div className="chart"></div>
    </>
  );
}
