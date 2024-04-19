import "./Profile.css";
import Personal from "../../components/Profile/Personal/Personal";
import Event from "../../components/Profile/Event-log/Event";
export default function Profile() {
  return (
    <>
      <div className="personalData"><Personal/></div>
      <div className="eventLog"><Event/></div>
      <div className="trustedDevice"></div>
    </>
  );
}
