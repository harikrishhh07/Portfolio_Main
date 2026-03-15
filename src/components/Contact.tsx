import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:harielamvazuthi@gmail.com" data-cursor="disable">
                harielamvazuthi@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+919442091322" data-cursor="disable">
                +91 9442091322
              </a>
            </p>
            <h4>Resume</h4>
            <p>
              <a
                href="https://drive.google.com/file/d/1DL48ivFRZ_4B2Vf6fXY01YZ-8BL-l1k-/view?usp=sharing"
                target="_blank"
                data-cursor="disable"
              >
                Google Drive <MdArrowOutward />
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/harikrishhh07"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/hari-krishna-25578a355"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://x.com/Harikrishhh07"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Twitter <MdArrowOutward />
            </a>
            <a
              href="https://leetcode.com/u/Harikrishhh/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Leetcode <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/hari_krishhh?igsh=MW5iZmxvNHB5ejJrYg%3D%3D&utm_source=qr"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Harikrishna</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
