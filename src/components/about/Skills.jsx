import React from "react";

const skillsContent = [
  { skillClass: "p95", skillPercent: "95", skillName: "Project Management" },
  { skillClass: "p90", skillPercent: "90", skillName: "Agile & Scrum" },
  { skillClass: "p85", skillPercent: "85", skillName: "PHP (Laravel, CodeIgniter)" },
  { skillClass: "p80", skillPercent: "80", skillName: "Node.js (Express, Fastify)" },
  { skillClass: "p75", skillPercent: "75", skillName: "React & JavaScript" },
  { skillClass: "p80", skillPercent: "80", skillName: "DevOps & CI/CD (Docker, Jenkins)" },
  { skillClass: "p70", skillPercent: "70", skillName: "Cloud Services (AWS, GCP, DigitalOcean)" },
  { skillClass: "p85", skillPercent: "85", skillName: "Database Management (MySQL, MongoDB, Redis)" },
  { skillClass: "p80", skillPercent: "80", skillName: "System Architecture & Design" },
  { skillClass: "p75", skillPercent: "75", skillName: "API Development (RESTful, GraphQL)" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;