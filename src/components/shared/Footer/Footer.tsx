import React from "react";

const Footer = () => {
  return (
    <div className="w-full">
      <footer className="footer p-10 bg-slate-800 text-white">
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Designing</a>
          <a className="link link-hover">Developing</a>
          <a className="link link-hover">Cloning</a>
          <a className="link link-hover">Problem Solving</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div>
          <span className="footer-title">Newsletter</span>
          <div className="form-control sm:w-45 lg:w-70 ">
            <label className="label">
              <span className="label-text text-primary">
                Enter your email address
              </span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-10"
              />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
