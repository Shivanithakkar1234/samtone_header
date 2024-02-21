import * as React from "react";
import "/src/styles/global.css"; // Adjust this path based on your actual file structure

const IndexPage = () => {
  // Assuming vector icons are placed in the static folder, the path should start from the root after build
  const iconPath = "/vector-4.svg";
  const linkedinIconPath = "/icn-linkedin.svg";
  const emailIconPath = "/icn-email.svg";
  const telIconPath = "/icn-tel.svg";
  const eventsIconPath = "/icn-events.svg";
  const careerIconPath = "/icn-career.svg";
  const signinIconPath = "/icn-signin.svg";

  return (
    <div className="header">
      <div className="header1">
        <div className="main-nav">
          <button className="home">Home</button>
          <img
            className="logo-samtone-ind-main-icon"
            alt="Logo"
            src="/logo-samtone-ind-main@2x.png"
          />

          {/* Using className for consistency with React */}
          <button className="company">
            <div className="company1">Company</div>
            <img className="company-child" alt="" src={iconPath} />
          </button>
          <button className="products">
            <div className="products1">Products</div>
            <img className="products-child" alt="" src={iconPath} />
          </button>
          <button className="applications">
            <div className="applications1">Applications</div>
            <img className="applications-child" alt="" src={iconPath} />
          </button>
          <button className="contactus">
            <div className="contact-us">Contact US</div>
            <img className="contactus-child" alt="" src={iconPath} />
          </button>
          <button className="search">
            <div className="search-parent">
              <div className="search1">Search</div>
              <img className="vector-icon" alt="" src="/vector.svg" /> {/* Adjusted path */}
            </div>
            <img className="search-child" alt="" src={iconPath} />
          </button>
        </div>
        <header className="top-nav" id="top_nav">
          <div className="bg-top-nav"></div>
          <img className="icn-linkedin-icon" alt="" src={linkedinIconPath} />
          <img className="icn-email-icon" alt="" src={emailIconPath} />
          <div className="telephone">
            <div>+91 1234567890</div> {/* Removed unnecessary className */}
            <img className="icn-tel-icon" alt="" src={telIconPath} />
          </div>
          <img className="icn-events-icon" alt="" src={eventsIconPath} />
          <img className="icn-career-icon" alt="" src={careerIconPath} />
          <button className="signin" autoFocus={true}> {/* Corrected autoFocus */}
            <div className="sign-in">Sign in</div>
            <img className="icn-signin-icon" alt="" src={signinIconPath} />
          </button>
        </header>
      </div>
    </div>
  );
};

export default IndexPage;

// Properly exporting the Head component for setting the page title
export const Head = () => <title>Home Page</title>;
