import "./Personal.css";
import Avatar from "../../Avatar/Avatar";
import { personalData } from "../../../Data/data";
export default function Personal() {
  return (
    <div className="container-Personal">
      <div className="window-Personal">
        <div className="top-Personal">
          <div className="avatar-Personal">
            <Avatar />
          </div>
          <div className="name data-Personal">
            <div>full name</div>
            <div>{personalData.name}</div>
          </div>
          <div className="clientNumber data-Personal">
            <div>client number</div>
            <div>{personalData.customerId}</div>
          </div>
          <div className="phoneNumber data-Personal">
            <div>phone number</div>
            <div>{personalData.phoneNumber}</div>
          </div>
          <div className="email data-Personal">
            <div>e-mail</div>
            <div>{personalData.email}</div>
          </div>
          <div className="address data-Personal">
            <div>address</div>
            <div>{personalData.address}</div>
          </div>
          <div className="mailingAddress data-Personal">
            <div>mailing address</div>
            <div>{personalData.mailingAddress}</div>
          </div>
        </div>
        <div className="bot-Personal">
          <div className="name data-Personal">
            <div>username</div>
            <div>{personalData.username}</div>
          </div>
          <div className="name data-Personal">
            <div>password</div>
            <div>{personalData.password}</div>
          </div>
          <div className="name data-Personal">
            <div>pin number</div>
            <div>{personalData.pin}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
