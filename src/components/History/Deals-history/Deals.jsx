import "./Deals.css";
import { dealsData } from "../../../Data/data";
export default function DealsHistory({displayDeal}) {
  const limitedDealsLogData = dealsData.slice(0, 10);
  function DealsData(item, index) {
    return (
      <div key={index} onMouseOver={()=> displayDeal(item.id)} className="Deals-data">
        <div>{item.receiver.name}</div>
        <div>{item.transferDate}</div>
        <div>{item.amount}</div>
      </div>
    );
  }
  return (
    <div className="container-Deals">
      <div className="window-Deals">
        <div className="Deals-body">
          <div className="Deals-title">Latest transactions</div>
          <div className="Deals-table">
            <div className="Deals-table-headers">
              <div>Name</div>
              <div>Date</div>
              <div>Price</div>
            </div>
            {limitedDealsLogData.map((item, index) => DealsData(item, index))}
          </div>
        </div>
      </div>
    </div>
  );
}
