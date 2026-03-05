import "./Bio.css";
import profilepic from "../../assets/Thumbnail Profile pic.png";

function Bio() {
  return(
    <div className="bio">
      <img src={profilepic} alt="Picture of developer" className="bio__image" />
      <h3 className="bio__name">Rich</h3>
      <p className="bio__text">Originally born and raised in Michigan. Took a liking to computers and programming
        at an early age. One of the first attempts at coding was making custom games on the TI-82 calculator. Years
        later, in 2008, he relocated to Atlanta, GA. Shortly after, he began a career in Law Enforcement. For about
        14 years, he had worked in that capacity, forming and shaping new processes and proceedures through the use
        of technology and software applications using Microsoft Excel and VBA. During this tenure he attended
        TripleTen&apos;s Software Engineering program and began developing applications utilizing HTML, CSS, React, and
        JavaScript. Since then, he has accelerated his learning and development by entering into deployment spaces
        and delved into MongoDB, Docker, PostgreSQL, Node.js, Express.js, Firebase, GCP, AWS, and Netlify. With
        a yearning for expanding his knowledge on all things developement, the sky is the limit.
      </p>
    </div>
  )
}

export default Bio;