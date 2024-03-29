import React from "react";
import "./Contact.css";
import msg_icon from '../../assets/edusity_assets/msg-icon.png'
import mail_icon from '../../assets/edusity_assets/mail-icon.png'
import phone_icon from '../../assets/edusity_assets/phone-icon.png'
import location_icon from '../../assets/edusity_assets/location-icon.png'
import white_arrow from '../../assets/edusity_assets/white-arrow.png'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a1618277-abb5-4a00-b4b2-1dd61af54287");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    })

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
      // event.target.reset();
      setResult(response.message)
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt=""/></h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. your feedback questions, and suggestions are
          important to us we strive to provide exceptational service to our
          university community.
        </p>
        <ul>
            <li><img src={mail_icon}/> Iftekharahmed086@gmail.com</li>
            <li><img src={phone_icon}/> +91 9748883673</li>
            <li><img src={location_icon}/> 72 Massachuetts ave, kolkata <br/> Ma 02139, India </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type="text" name="name" placeholder="Enter your name" required />
          <label>Phone Number</label>
          <input type="tel" name="phone" placeholder="Enter your mobile number" required/>
          <label>Write your message here</label>
          <textarea name="message" rows="6" placeholder="Enter your message"></textarea>
          <button type="submit" className="btn dark-btn">Submit now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
