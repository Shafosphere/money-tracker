import "./History.css";
import { dealsData } from "../../../Data/data";
export default function History({changeDisplay}) {
  const limitedHistoryLogData = dealsData.slice(0, 6);
  function HistoryData(item, index) {
    return (
      <div key={index} className="History-data">
        <div>{item.receiver.name}</div>
        <div>{item.transferDate}</div>
        <div>{item.amount}</div>
      </div>
    );
  }
  return (
    <div className="container-History">
      <div className="window-History">
        <div className="History-body">
          <div className="History-title">
            <div>Latest transactions</div>
            <div onClick={()=> changeDisplay('history')}>get more</div>
          </div>
          <div className="History-table">
            <div className="History-table-headers">
              <div>Name</div>
              <div>Date</div>
              <div>Price</div>
            </div>
            {limitedHistoryLogData.map((item, index) =>
              HistoryData(item, index)
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
