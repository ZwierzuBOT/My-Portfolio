
import PropTypes from 'prop-types';
import Typewriter from "typewriter-effect";

const WritingText = () => {


  return (
    <>
    <div className="textDiv">
        <span className="intro">I&apos;m</span>
        <Typewriter
        options={{
          strings: ["Mateusz Zwierzchowski.", "a React Developer."],
          autoStart: true,
          loop: true,
          delay: 100, 
        }}
      />
      <p className='meTekst'>
        Mateusz Zwierzchowski, a 15-year-old enthusiast, is making waves in the 
        world of programming with his proficiency in React JS. Despite his young age, 
        Mateusz showcases an impressive talent for crafting innovative and efficient 
        web applications. His passion for coding extends 
        beyond the conventional, setting him apart as a promising young developer.
        </p>
    </div>
    </>
  );
};


WritingText.propTypes = {
  texts: PropTypes.array,
  interval: PropTypes.number,
};

export default WritingText;
