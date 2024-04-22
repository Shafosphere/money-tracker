import "./Event.css";
import { eventLogData } from "../../../Data/data";
import { FaComputer } from "react-icons/fa6";
import { IoPhonePortraitOutline } from "react-icons/io5";


export default function Event() {
  const limitedEventLogData = eventLogData.slice(0, 6);
  function eventData(item) {
    function icon(device){
      if(device === "PC"){
        return (
          <FaComputer className="icon"/>
        )
      } else {
        return (
          <IoPhonePortraitOutline className="icon"/>
        )
      }
    }
    return (
      <div className="event-data">
        <div>{item.category}</div>
        <div>{item.date}</div>
        <div>{item.device}</div>
      </div>
    );
  }
  return (
    <div className="container-Event">
      <div className="window-Event">
        <div className="Event-body">
          <div className="Event-title">Event Log</div>
          <div className="Event-table">
            <div className="event-table-headers">
              <div>Category</div>
              <div>Date</div>
              <div>Device</div>
            </div>
            {limitedEventLogData.map((item) => eventData(item))}
          </div>
        </div>
      </div>
    </div>
  );
}
