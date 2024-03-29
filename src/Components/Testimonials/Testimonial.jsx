import "./Testimonial.css";
import next_icon from "../../assets/edusity_assets/next-icon.png";
import back_icon from "../../assets/edusity_assets/back-icon.png";
import user_1 from "../../assets/edusity_assets/user-1.png";
import user_2 from "../../assets/edusity_assets/user-2.png";
import user_3 from "../../assets/edusity_assets/user-3.png";
import user_4 from "../../assets/edusity_assets/user-4.png";
import { useRef } from "react";

const Testimonial = () => {

    const slider = useRef();
    let tx = 0;

const slideForward=()=>{
  if(tx > -50){
    tx -= 25;
  }
  slider.current.style.transform = `translateX(${tx}%)`
}
const slideBackward=()=>{
    if(tx < 0){
        tx += 25;
      }
      slider.current.style.transform = `translateX(${tx}%)`
}
  return (
    <div className="testimonial">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward}/>
      <img src={back_icon} alt="" className="back-btn" onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>zahid Anwar</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursing my degree at Adusity was one of the best
                decisions I've ever made. The supportive community, state-of-the-art
                facilities, and commitment to academic excellence have truly
                exceeded my expectations
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Junaid Khan</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursing my degree at Adusity was one of the best
                decisions I've ever made. The supportive community, state-of-the-art
                facilities, and commitment to academic excellence have truly
                exceeded my expectations
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Pasha Khan</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursing my degree at Adusity was one of the best
                decisions I've ever made. The supportive community, state-of-the-art
                facilities, and commitment to academic excellence have truly
                exceeded my expectations
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Ibraheem bachha</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursing my degree at Adusity was one of the best
                decisions I've ever made. The supportive community, state-of-the-art
                facilities, and commitment to academic excellence have truly
                exceeded my expectations
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonial;
