


import Header from "./Header";

import WritingText from "./WritingText";
import LearnMore from "./LearnMore";

import threeD from "../assets/images/threeD.png";
const StartPage = () => {

    return ( 
    <div className="Pages">
        <Header/>
        <WritingText/>
        <LearnMore/>
        
        <div className="threeDImage">
            <img id="mainImg" src={threeD} alt="Image" />
         </div>

    </div>
    );
}
 
export default StartPage;