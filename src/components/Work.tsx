import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import { useEffect } from "react";

// Import project images
import collaborativeWhiteboard from "../assets/collaborative white board.png";
import employeeManagement from "../assets/Employee management .png";
import dnaSequence from "../assets/binary seach in microprocessor.png"; // This seems to be the DNA/bioinformatics one
import instagramClone from "../assets/portfolio.png"; // Using portfolio as instagram clone for now
import javaOops from "../assets/ideathon6.0.png"; // Using ideathon as java-oops
import leetCode from "../assets/monkeytype clone.png"; // Using monkeytype as leetcode
import matplotlib from "../assets/portfolio.png"; // Duplicate, need proper image
import monkeyType from "../assets/monkeytype clone.png";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  useEffect(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>01</h3>
                <div>
                  <h4>Collaborative White Board Project</h4>
                  <p>Real-time Collaboration Tool</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Java, Real-time Collaboration</p>
            </div>
            <WorkImage image={collaborativeWhiteboard} alt="Collaborative White Board" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>02</h3>
                <div>
                  <h4>Employee Management System</h4>
                  <p>Management Application</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Java, Database Management</p>
            </div>
            <WorkImage image={employeeManagement} alt="Employee Management System" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>03</h3>
                <div>
                  <h4>DNA Sequence Alignment Tool</h4>
                  <p>Web-based Tool</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>HTML, JavaScript, Bioinformatics</p>
            </div>
            <WorkImage image={dnaSequence} alt="DNA Sequence Alignment" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>04</h3>
                <div>
                  <h4>Instagram Clone</h4>
                  <p>Social Media Clone</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>HTML, CSS, JavaScript</p>
            </div>
            <WorkImage image={instagramClone} alt="Instagram Clone" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>05</h3>
                <div>
                  <h4>JAVA-OOPS</h4>
                  <p>Object-Oriented Programming</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Java, OOP Concepts</p>
            </div>
            <WorkImage image={javaOops} alt="JAVA-OOPS" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>06</h3>
                <div>
                  <h4>LEET-CODE</h4>
                  <p>Algorithm Solutions</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Java, Algorithms</p>
            </div>
            <WorkImage image={leetCode} alt="LEET-CODE" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>07</h3>
                <div>
                  <h4>Matplotlib</h4>
                  <p>Data Visualization</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Python, Matplotlib</p>
            </div>
            <WorkImage image="/images/matplotlib.webp" alt="Matplotlib" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>08</h3>
                <div>
                  <h4>MONKEY TYPE CLONE</h4>
                  <p>Typing Test Application</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>JavaScript, Typing Game</p>
            </div>
            <WorkImage image="/images/monkey-type.webp" alt="MONKEY TYPE CLONE" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
