import "./Details.css";
import { dealsData } from "../../../Data/data";
import { PiMoneyDuotone } from "react-icons/pi";
import { PiArrowBendDownRightDuotone } from "react-icons/pi";

export default function Details({ dealID }) {
  const localData = dealsData.find((deal) => deal.id === dealID);

  return (
    <div className="container-Details">
      <div className="window-Details">
        <div className="left-Details">
          <div className="header-Details">
            <div className="top-text">from</div>
            <div>{localData.from.name}</div>
            <div>{localData.from.accountNumber}</div>
          </div>
          <div className="data-Details">
            <div className="top-text">title</div>
            <div className="bot-text">{localData.title}</div>
          </div>
          <div className="data-Details">
            <div className="top-text">transfer date</div>
            <div className="bot-text">{localData.transferDate}</div>
          </div>
          <div className="data-Details">
            <div className="top-text">date of posting</div>
            <div className="bot-text">{localData.dateOfPosting}</div>
          </div>
          <div className="data-Details">
            <div className="top-text">transaction number</div>
            <div className="bot-text">{localData.transactionNumber}</div>
          </div>
        </div>
        <div className="mid-Details">
            <PiMoneyDuotone/>
            <PiArrowBendDownRightDuotone/>
        </div>
        <div className="right-Details">
          <div className="header-Details">
            <div className="top-text">receiver</div>
            <div>{localData.receiver.name}</div>
            <div>{localData.receiver.accountNumber}</div>
          </div>
          <div className="data-Details">
            <div className="top-text">amount</div>
            <div className="bot-text">
              {localData.amount} {localData.currency}
            </div>
          </div>
          <div className="data-Details">
            <div className="top-text">type of operation </div>
            <div className="bot-text">{localData.operationType}</div>
          </div>
          <div className="data-Details">
            <div className="top-text">category</div>
            <div className="bot-text">{localData.category}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
