import React from "react";

const experienceContent = [
  {
    year: "2022 - Present",
    position: "Senior Project Manager",
    compnayName: "Al Haramain",
    details: `Leading a remote team of 36 developers, overseeing full-stack development, system architecture, and deployment.
    Spearheaded multiple high-impact projects, reducing downtime by 35% and optimizing performance by 10%.`
  },
  {
    year: "2021 - 2022",
    position: "Project Manager",
    compnayName: "Al Haramain",
    details: `Managed a cross-functional team of 30+ professionals, achieving a 95% on-time project delivery rate.
    Led the architecture and deployment of 12+ full-stack features, improving system performance by 10%.`
  },
  {
    year: "2020 - 2021",
    position: "Project Manager",
    compnayName: "Spondon IT",
    details: `Defined project scope, allocated technical resources, and optimized workflows using PHP, Node.js, and MongoDB.
    Implemented CI/CD pipelines, ensuring seamless deployment and operational efficiency.`
  },
  {
    year: "2019 - 2020",
    position: "Senior Software Engineer",
    compnayName: "Spondon IT",
    details: `Developed full-stack applications using Laravel, CodeIgniter, and JavaScript, enhancing user experience and performance.
    Designed and optimized MySQL and NoSQL databases, improving data retrieval efficiency.`
  },
  {
    year: "2017 - 2018",
    position: "Software Engineer",
    compnayName: "United Group",
    details: `Led end-to-end software development, focusing on scalable architectures and high-performance solutions.
    Implemented RESTful APIs and GraphQL endpoints to improve system communication.`
  },
  {
    year: "2016 - 2017",
    position: "Junior Software Engineer",
    compnayName: "United Group",
    details: `Developed and maintained software applications utilizing PHP, JavaScript, and MySQL.
    Designed intuitive user interfaces, enhancing accessibility and engagement.`
  }
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
