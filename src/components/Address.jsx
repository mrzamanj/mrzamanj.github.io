import React from "react";

const Address = () => {
  return (
    <>
      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-map position-absolute"></i>
        <span className="d-block">Address</span> Dhaka, Bangladesh
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-envelope-open position-absolute"></i>
        <span className="d-block">Email</span>{" "}
        <a href="mailto:mrazmna@gmail.com">mrazmna@gmail.com</a>
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-phone-square position-absolute"></i>
        <span className="d-block">Phone & WhatsApp</span>{" "}
        <a href="Tel: +8801910077628">+8801910077628</a>
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-skype position-absolute"></i>
        <span className="d-block">Skype</span>{" "}
        <a href="skype:mrazmna@gmail.com">mrazmna@gmail.com</a>
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-linkedin position-absolute"></i>
        <span className="d-block">LinkedIn</span>{" "}
        <a href="https://linkedin.com/in/mrzamanj/" target="_blank" rel="noopener noreferrer">
          linkedin.com/in/mrzamanj/
        </a>
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-github position-absolute"></i>
        <span className="d-block">GitHub</span>{" "}
        <a href="https://github.com/mrzamanj" target="_blank" rel="noopener noreferrer">
          github.com/mrzamanj
        </a>
      </p>
      {/* End .custom-span-contact */}
    </>
  );
};

export default Address;