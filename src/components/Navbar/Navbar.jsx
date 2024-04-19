import "./Navbar.css"
import Avatar from "../Avatar/Avatar"
export default function Navbar({changeDisplay}){
    return(
        <div className="container-navbar">
            <div className="window-navbar">
                <ul>
                    <li onClick={()=> changeDisplay('home')}>Dashboard</li>
                    <li onClick={()=> changeDisplay('profile')}>Profile</li>
                    <li onClick={()=> changeDisplay('history')}>History</li>
                </ul>
                <Avatar/>
            </div>
        </div>
    )
} 