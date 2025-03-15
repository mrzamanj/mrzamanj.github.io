import React from "react";

const personalInfoContent = [
  { meta: "First Name", metaInfo: "Zaman" },
  { meta: "Last Name", metaInfo: "Joarddar" },
  { meta: "Experience", metaInfo: "9+ Years" },
  { meta: "Nationality", metaInfo: "Bangladeshi" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Phone & WhatsApp", metaInfo: "+8801910077628" },
  { meta: "Email", metaInfo: "mrazmna@gmail.com" },
  { meta: "Skype", metaInfo: "mrazmna@gmail.com" },
  { meta: "LinkedIn", metaInfo: "https://linkedin.com/in/mrzamanj/" },
  { meta: "GitHub", metaInfo: "https://github.com/mrzamanj" },
  { meta: "Languages", metaInfo: "English, Bengali" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
