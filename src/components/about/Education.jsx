import React from "react";

const educationContent = [
  {
    year: "2016",
    degree: "BACHELOR OF SCIENCE IN COMPUTER SCIENCE & ENGINEERING",
    institute: "STAMFORD UNIVERSITY BANGLADESH",
    details: `Graduated with a CGPA of 3.73 and received a merit scholarship for 3 trimesters.
    Focused on software engineering, system architecture, and database management.`,
  },
];

const certificationsContent = [
  {
    certificate: "Google Project Management Certificate",
    status: "Ongoing",
    date: "June 2025",
  },
  {
    certificate: "Agile Project Management – Coursera (University of Maryland)",
    status: "Completed",
    date: "December 2024",
  },
  {
    certificate: "Introduction to Project Management – Alison",
    status: "Completed",
    date: "November 2024",
  },
  {
    certificate: "Scrum Master Fundamentals – Scrum Training Series",
    status: "Completed",
    date: "October 2024",
  },
  {
    certificate: "Project Management Principles and Practices – Coursera (University of California, Irvine)",
    status: "Completed",
    date: "September 2024",
  },
];

const Education = () => {
  return (
    <div>
      <h3>Education</h3>
      <ul>
        {educationContent.map((val, i) => (
          <li key={i}>
            <div className="icon">
              <i className="fa fa-briefcase"></i>
            </div>
            <span className="time open-sans-font text-uppercase">{val.year}</span>
            <h5 className="poppins-font text-uppercase">
              {val.degree}
              <span className="place open-sans-font">{val.institute}</span>
            </h5>
            <p className="open-sans-font">{val.details}</p>
          </li>
        ))}
      </ul>

      <h3>Certifications</h3>
      <ul>
        {certificationsContent.map((val, i) => (
          <li key={i}>
            <div className="icon">
              <i className="fa fa-certificate"></i> {/* Added certificate icon */}
            </div>
            <h5 className="poppins-font text-uppercase">{val.certificate}</h5>
            <span className="time open-sans-font text-uppercase">{val.date}</span>
            <p className="open-sans-font">{val.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Education;
