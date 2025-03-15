import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f5f5f5] py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-gray-700">
        {/* Logo & Address Section */}
        <div>
          <h2 className="text-lg font-bold flex items-center space-x-2">
            <span className="text-xl">⚪ loopcv</span>
          </h2>
          <p className="mt-2 text-sm">
            Automate your job search today. <br />
            Never miss an opportunity.
          </p>
          <p className="mt-4 text-sm">12 London Road, London, England, GB</p>
          <div className="mt-4 space-y-1">
            <a href="#" className="text-sm hover:text-blue-600">
              Terms & Conditions
            </a>
            <br />
            <a href="#" className="text-sm hover:text-blue-600">
              Privacy
            </a>
          </div>
        </div>

        {/* Features Section */}
        <div>
          <h3 className="font-bold">Features</h3>
          <ul className="mt-2 space-y-2 text-sm">
            {[
              "Auto apply",
              "One click apply",
              "Job Application Tracker",
              "Dynamic Emails",
              "CV Improvements",
              "Exclude Companies",
              "Job Posting Aggregator",
              "Job Matching",
              "Job Filtering",
              "Email Finder",
              "LinkedIn Apply Extension",
              "AI Question Answering",
              "AI CV Checker",
              "AI Cover Letter Generator",
              "AI Resume Builder",
            ].map((feature, index) => (
              <li key={index} className="hover:text-blue-600 cursor-pointer">
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Our Clients Section */}
        <div>
          <h3 className="font-bold">Our clients</h3>
          <ul className="mt-2 space-y-2 text-sm">
            {[
              "Jobseekers",
              "Bootcamps",
              "Universities",
              "Recruiters",
              "Agencies",
              "Developers (API)",
              "Career advisors",
              "Resume Writers",
            ].map((client, index) => (
              <li key={index} className="hover:text-blue-600 cursor-pointer">
                {client}
              </li>
            ))}
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="font-bold">Company</h3>
          <ul className="mt-2 space-y-2 text-sm">
            {["About", "Blog", "Pricing"].map((item, index) => (
              <li key={index} className="hover:text-blue-600 cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Useful Links Section */}
        <div>
          <h3 className="font-bold">Useful links</h3>
          <ul className="mt-2 space-y-2 text-sm">
            {["Affiliate program", "Contact us", "Whitelabel"].map(
              (link, index) => (
                <li key={index} className="hover:text-blue-600 cursor-pointer">
                  {link}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
