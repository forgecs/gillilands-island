import React from "react";
import { Link } from "gatsby";

import logo from "../img/gi-logo-1.png";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer text-blue-grey-900 bg-teal-050 font-semibold border-t-4 border-teal-400 flex flex-col sm:flex-row  sm:justify-around sm:items-center">
        <div className="flex justify-center items-center py-5 sm:py-0">
          <img
            src={logo}
            alt="Kaldi"
            className="h-20 rounded-full"
          />
        </div>
        <section className="menu">
          <ul className="flex flex-col justify-center items-center">
            <li>
              <Link to="/" className="rounded hover:bg-teal-300 px-2 py-1">
                Home
              </Link>
            </li>
            <li>
              <Link className="rounded hover:bg-teal-300 px-2 py-1" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="rounded hover:bg-teal-300 px-2 py-1" to="/blog">
                Latest Stories
              </Link>
            </li>
            <li>
              <Link
                className="rounded hover:bg-teal-300 px-2 py-1"
                to="/contact"
              >
                Contact
              </Link>
            </li>
            {/* <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li> */}
          </ul>
        </section>
        <div className="flex justify-around py-10">
          <a
            title="facebook"
            className="bg-teal-100 hover:bg-teal-200 p-3 rounded-full"
            href="https://facebook.com"
          >
            <img
              src={facebook}
              alt="Facebook"
              style={{ width: "1em", height: "1em" }}
            />
          </a>
          <a
            title="twitter"
            className="bg-teal-100 hover:bg-teal-200 p-3 rounded-full sm:mx-2"
            href="https://twitter.com"
          >
            <img
              className="fas fa-lg"
              src={twitter}
              alt="Twitter"
              style={{ width: "1em", height: "1em" }}
            />
          </a>
          <a
            title="instagram"
            className="bg-teal-100 hover:bg-teal-200 p-3 rounded-full"
            href="https://instagram.com"
          >
            <img
              src={instagram}
              alt="Instagram"
              style={{ width: "1em", height: "1em" }}
            />
          </a>
        </div>
      </footer>
    );
  }
};

export default Footer;
