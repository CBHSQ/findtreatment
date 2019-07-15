import React from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faTwitterSquare,
  faYoutubeSquare
} from '@fortawesome/free-brands-svg-icons';
import { ReactComponent as LogoSAMHSA } from '../images/logo-samhsa.svg';
import { ReactComponent as LogoHHS } from '../images/logo-hhs.svg';

const StyledFooter = styled.div`
  ${tw`bg-gray-800 text-gray-200 text-xs`}

  a {
    ${tw`text-white hover:text-white`}
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
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
              SAMHSA's mission is to reduce the impact of substance abuse and
              mental illness on America's communities.
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
              <li>
                <a href="https://findtreatment.samhsa.gov/locator/link-AppIns#.XSywJNNKiuo">
                  List your facility
                </a>
              </li>
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
              <li>
                <a href="https://www.usa.gov/">USA.gov</a>
              </li>
              <li>
                <a href="https://www.samhsa.gov/foia">FOIA</a>
              </li>
              <li>
                <a href="https://www.samhsa.gov/accessibility">Accessibility</a>
              </li>
              <li>
                <a href="https://forms.gle/8Zf4sCUcgn8Cmoqb6">
                  Submit feedback
                </a>
              </li>
            </ul>
          </div>
          <div css={tw`w-full lg:flex-1 px-6`}>
            <h3 css={tw`mb-2`}>Contact SAMHSA</h3>
            <p css={tw`mb-4`}>
              5600 Fishers Ln
              <br />
              Rockville, MD 20857
              <br />
              1-877-SAMHSA-7
              <br />
              (1-877-726-4727)
            </p>
          </div>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
