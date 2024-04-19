import "./Event.css";
import { eventLogData } from "../../../Data/data";
export default function Event() {
  const limitedEventLogData = eventLogData.slice(0, 6);
  function eventData(item) {
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
