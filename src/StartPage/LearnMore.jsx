
import { faCss3Alt, faFacebook, faGithub, faJs, faLinkedin, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LearnMore = () => {
    const link1 = "https://github.com/ZwierzuBOT/ZwierzuBOT";
    const link2 = "https://www.linkedin.com/in/mateusz-zwierzchowski-0627a029a/";
    const link3 = "https://www.facebook.com/mati.zwierzchowski/";

    return ( 
        <div className="more">
            <div className="learnMore">
                <h3 className="up">Find me with:</h3>
                <a href={link1} target="__blank" className="iconLink"><FontAwesomeIcon className="fontIcon" id="GitHub" icon={faGithub}>
                    </FontAwesomeIcon></a>

                <a href={link2} target="__blank" className="iconLink"><FontAwesomeIcon className="fontIcon" id="LinkedIn" icon={faLinkedin}>
                    </FontAwesomeIcon></a>

                <a href={link3} target="__blank" className="iconLink"><FontAwesomeIcon className="fontIcon" id="Facebook" icon={faFacebook}>
                    </FontAwesomeIcon></a>
                
            </div>

            <div className="learnMore">
                <h3 className="up">Best skills on:</h3>
                <div className="iconLink"><FontAwesomeIcon icon={faJs} className="fontIcon"/></div>
                <div className="iconLink"><FontAwesomeIcon icon={faReact} className="fontIcon"/></div>
                <div className="iconLink"><FontAwesomeIcon icon={faCss3Alt} className="fontIcon"/></div>
            </div>
        </div>
     );
}
 
export default LearnMore;