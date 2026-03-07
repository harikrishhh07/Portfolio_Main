import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My Education <span>&</span>
          <br /> Career
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Tenth (10th)</h4>
                <h5>Shri Maharishi Vidhya Mandir – CBSE</h5>
              </div>
              <h3>85.6<span className="career-percent">%</span></h3>
            </div>
            <p>
              Completed secondary schooling with a strong academic foundation,
              achieving a percentage of <strong>85.6%</strong> under the CBSE board.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intermediate (12th)</h4>
                <h5>Achyuta Public School – CBSE</h5>
              </div>
              <h3>78.6<span className="career-percent">%</span></h3>
            </div>
            <p>
              Completed higher secondary education under the CBSE board,
              achieving a percentage of <strong>78.6%</strong> with a focus on
              Science and Mathematics.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.E. &amp; Technology</h4>
                <h5>SRM Institute of Science and Technology</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently pursuing a Bachelor of Engineering and Technology
              (2024–2028) specialising in{" "}
              <strong>Computer Science with AI &amp; ML</strong>. Maintaining a
              CGPA of <strong>9.65</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
