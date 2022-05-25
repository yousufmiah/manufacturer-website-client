import React from "react";
import { Link } from "react-router-dom";
import { ImFacebook2 } from "react-icons/im";
import { FaTwitterSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaPinterestSquare } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { ImBehance2 } from "react-icons/im";
import { FaMedium } from "react-icons/fa";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer>
      <div className="footer py-16 p-10 bg-base-200 text-base-content justify-around">
        <div>
          <span className=" text-2xl text-primary font-bold">Services</span>
          <a className="text-lg text-black-700 ">Branding</a>
          <a className="text-lg text-black-700 ">Design</a>
          <a className="text-lg text-black-700 ">Marketing</a>
          <a className="text-lg text-black-700 ">Advertisement</a>
        </div>
        <div>
          <span className=" text-2xl text-primary font-bold">Information</span>
          <Link to="/about" className="text-lg text-blue-700 link-hover">
            About us
          </Link>
          <Link to="/contact" className="text-lg text-blue-700 link-hover">
            Contact
          </Link>
          <Link to="/portfolio" className="text-lg text-blue-700 link-hover">
            Portfolio
          </Link>
          <Link to="/blogs" className="text-lg text-blue-700 link-hover">
            Blogs
          </Link>
        </div>
        <div>
          <span className=" text-2xl text-primary font-bold">Social</span>
          <a
            target="blank"
            href="https://www.facebook.com/yousufmiahm/"
            className="text-3xl text-blue-700 cursor-pointer "
          >
            <ImFacebook2 />
          </a>
          <a
            target="blank"
            href="https://twitter.com/yousufmiahbd"
            className="text-3xl text-blue-700 cursor-pointer "
          >
            <FaTwitterSquare />
          </a>
          <a
            target="blank"
            href="https://www.linkedin.com/in/yousufmiah/"
            className="text-3xl text-blue-700 cursor-pointer "
          >
            <BsLinkedin />
          </a>
          <a
            target="blank"
            href="https://www.pinterest.com/yousufmiahm/"
            className="text-3xl text-blue-700 cursor-pointer "
          >
            <FaPinterestSquare />
          </a>
          <a
            target="blank"
            href="https://www.instagram.com/yousufmiahm/"
            className="text-3xl text-blue-700 cursor-pointer "
          >
            <ImInstagram />
          </a>
          <a
            target="blank"
            href="https://www.behance.net/yousufmiahm"
            className="text-3xl text-blue-700 cursor-pointer "
          >
            <ImBehance2 />
          </a>
          <a
            target="blank"
            href="https://medium.com/@yousufbdm"
            className="text-3xl text-blue-700 cursor-pointer "
          >
            <FaMedium />
          </a>
          <div className="grid grid-flow-col gap-4"></div>
        </div>
        <div>
          <h2 className="text-2xl text-primary font-bold"> Others sites:</h2>
          <a
            className="text-lg text-blue-700 link-hover"
            target="blank"
            href="https://www.yousufmiah.com/"
          >
            www.yousufmiah.com
          </a>
          <a
            className="text-lg text-blue-700 link-hover"
            target="blank"
            href="https://selfer.yousufmiah.com/"
          >
            www.selfer.com
          </a>

          <a
            className="text-lg text-blue-700 link-hover"
            target="blank"
            href="https://homeseo.yousufmiah.com/"
          >
            www.homeseo.com
          </a>
          <a
            className="text-lg text-blue-700 link-hover"
            target="blank"
            href="https://bd-tour-c7c18.web.app/"
          >
            www.bdtour..com
          </a>
          <a
            className="text-lg text-blue-700 link-hover"
            target="blank"
            href="https://honda-app-91b97.web.app/"
          >
            www.honda.com
          </a>
          <a
            className="text-lg text-blue-700 link-hover"
            target="blank"
            href="https://watch-zone-yousuf.netlify.app/"
          >
            www.watch-zone.com
          </a>
          <p className=" mt-10 text-red-700 copy">
            Copyright @ {year} Yousuf Miah
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
