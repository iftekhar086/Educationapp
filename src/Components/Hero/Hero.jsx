import "./Hero.css";
import dark_arrow from '../../assets/edusity_assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>we ensure that education for a better world </h1>
        <p>
          Our cutting-edge curriculum is designed to empower students with the
          knowledege, skills, and experience, needed to excel in the dynamic
          field of education
        </p>
        <button className="btn">Explore more <img src={dark_arrow} alt=""/></button>
      </div>
    </div>
  );
};

export default Hero;