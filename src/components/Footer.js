import React from "react";
import "styled-components/macro";
import tw from "tailwind.macro";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitterSquare,
  faYoutubeSquare
} from "@fortawesome/free-brands-svg-icons";
import { ReactComponent as LogoSAMHSA } from "../images/logo-samhsa.svg";
import { ReactComponent as LogoHHS } from "../images/logo-hhs.svg";

const Footer = () => {
  return (
    <div css={tw`bg-gray-800 text-gray-200 text-xs`}>
      <div className="container" css={tw`py-6 lg:p-12`}>
        <div css={tw`flex flex-wrap -mx-6`}>
          <div css={tw`w-full lg:flex-1 px-6 mb-6 lg:mb-0`}>
            <div css={tw`flex items-center mb-6 text-white`}>
              <a href="https://www.samhsa.gov/">
                <LogoSAMHSA css={tw`fill-current mr-4`} />
              </a>
              <a href="https://www.hhs.gov/">
                <LogoHHS css={tw`fill-current`} />
              </a>
            </div>
            <p css={tw`leading-relaxed`}>
              Our mission is to reduce the impact of substance abuse and mental
              illness on America's communities.
            </p>
          </div>
          <div css={tw`w-full lg:flex-1 px-6 mb-6 lg:mb-0`}>
            <h4 css={tw`font-bold mb-1`}>Other types of treatment</h4>
            <ul css={tw`mb-6`}>
              <li>
                <a href="https://www.samhsa.gov/medication-assisted-treatment/practitioner-program-data/treatment-practitioner-locator">
                  Buprenorphine practitioners
                </a>
              </li>
              <li>
                <a href="https://dpt2.samhsa.gov/treatment/directory.aspx">
                  Opioid treatment programs
                </a>
              </li>
            </ul>
            <h4 css={tw`font-bold mb-1`}>Providers</h4>
            <ul>
              <li>List your facility</li>
              <li>Updating your information</li>
            </ul>
          </div>
          <div css={tw`w-full lg:flex-1 px-6 mb-6 lg:mb-0`}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <a href="https://www.samhsa.gov/privacy">Privacy policy</a>
              </li>
              <li>FOIA</li>
              <li>USA.gov</li>
              <li>Accessibility</li>
              <li>Submit feedback</li>
            </ul>
          </div>
          <div css={tw`w-full lg:flex-1 px-6`}>
            <h3 css={tw`mb-2`}>Contact us</h3>
            <p css={tw`mb-4`}>
              5600 Fishers Ln
              <br />
              Rockville, MD 20857
              <br />
              1-877-SAMHSA-7
              <br />
              (1-877-726-4727)
            </p>
            <ul>
              <li css={tw`inline-block mr-2`}>
                <FontAwesomeIcon icon={faFacebookSquare} className="fa-2x" />
              </li>
              <li css={tw`inline-block mr-2`}>
                <FontAwesomeIcon icon={faTwitterSquare} className="fa-2x" />
              </li>
              <li css={tw`inline-block`}>
                <FontAwesomeIcon icon={faYoutubeSquare} className="fa-2x" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
