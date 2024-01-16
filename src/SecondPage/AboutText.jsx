import { faChild, faCity, faFontAwesomeFlag, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutText = () => {
    return ( 
        <div className="about">
            <h1 className="meInfo">About Me:</h1>

            <div className="informations">
                <h2><FontAwesomeIcon icon={faChild}/> 15 Years Old</h2>
                <h2><FontAwesomeIcon icon={faLocationDot}/> Poland</h2>
                <h2><FontAwesomeIcon icon={faCity}/> Lodz</h2>
            </div>
        </div>
     );
}
 
export default AboutText;