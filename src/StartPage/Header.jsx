

import { faPhone, faSuitcase, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Header = () => {
    return ( 
    <div className="Header">

        <div className="Info">
            <button className="HeaderBtn" id="Projects">Projects <FontAwesomeIcon icon={faSuitcase}/></button>
            <button className="HeaderBtn" id="About">About <FontAwesomeIcon icon={faUserAlt}/></button>
            <button className="HeaderBtn" id="Contact">Contact <FontAwesomeIcon icon={faPhone}/></button>
        </div>

    </div> 
    );
}
 
export default Header;