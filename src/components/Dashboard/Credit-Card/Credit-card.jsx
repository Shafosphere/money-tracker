import "./Credit-card.css";
import { creditCardData } from "../../../Data/data";
import { RiMastercardFill } from "react-icons/ri";
import MasterCard from "./mastercard";
export default function CreditCard() {
  const data = creditCardData[0];
  return (
    <div className="container-CreCard">
      <div className="window-CreCard">
        <div className="CreCard-head">
          <span>Available balance</span>
        </div>
        <div className="CreCard-body">
          <span>{data.currency}</span>
          <span>{data.availableBalance}</span>
        </div>
        <div className="CreCard-footer">
          <span>**** {(data.cardNumber).slice(-4)}</span>
          <div>
            <MasterCard/>
          </div>
        </div>
      </div>
    </div>
  );
}
